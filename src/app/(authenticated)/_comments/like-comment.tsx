"use client"
import { Button } from "@/components/ui/button";
import { useApp } from "@/context/app";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { HeartIcon } from "@heroicons/react/16/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import api from "@/lib/axios";

export default function LikeComment({ data }: { data: any }) {
    const { likes } = useApp();
    const queryClient = useQueryClient();
    const [numberLikes, setNumberLikes] = useState(data.number_likes as number || 0);
    const [likedByUser, setLikedByUser] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // Determine if the post is liked by the user
    useEffect(() => {
        setLikedByUser(likes.some((like: any) => like.associated_id === data.id));
    }, [likes, data.id]);

    // Fetch the number of likes
    // const fetchNumberLikes = async () => {
    //     try {
    //         setIsLoading(true); // Set loading state to true
    //         const response = await fetch(
    //             `${process.env.NEXT_PUBLIC_BACKEND_URL}/likes/count?associated_id=${data.id}`,
    //             {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 }
    //             }
    //         );

    //         if (response.ok) {
    //             const responseData = await response.json(); // Parse the JSON response
    //             setNumberLikes(responseData.likes); // Update the state with the number of likes
    //         } else {
    //             console.error("Failed to fetch number of likes");
    //         }
    //     } catch (error) {
    //         console.error("Error fetching number of likes:", error);
    //     } finally {
    //         setIsLoading(false); // Set loading state to false
    //     }
    // };

    // Handle like action
    const onLike = async () => {
        try {
            const response = await api.get(`/likes/add?comment_id=${data.id}`)

            if (response.status === 200) {
                console.log("Liked comment");
                toast.success('Liked comment');
                queryClient.invalidateQueries({ queryKey: ['user-likes'] });
                setNumberLikes(prev => prev + 1); // Increment the likes count
                setLikedByUser(true); // Update the like status
            } else {
                console.error("Failed to like comment");
                toast.warning('Failed to like comment');
            }
        } catch (error) {
            console.error("Error liking comment:", error);
            toast.warning('Error liking comment');
        }
    };

    // Handle dislike action
    const onDislike = async () => {
        try {
            const response = await api.get(`/likes/remove?comment_id=${data.id}`)

            if (response.status === 200) {
                console.log("Disliked comment");
                queryClient.invalidateQueries({ queryKey: ['user-likes'] });
                setNumberLikes(prev => prev - 1); // Decrement the likes count
                setLikedByUser(false); // Update the like status
            } else {
                console.error("Failed to dislike comment");
            }
        } catch (error) {
            console.error("Error disliking comment:", error);
        }
    };

    // Fetch the number of likes when the component mounts or when the data.id changes
    // useEffect(() => {
    //     fetchNumberLikes();
    // }, [data.id]);

    return (
        <div className="flex justify-center items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={likedByUser ? onDislike : onLike}>
                {
                    likedByUser ? (
                        <HeartIcon className="h-6 w-6 fill-red-500" />
                    ) : (
                        <HeartIconOutline className="h-6 w-6" />
                    )
                }
            </Button>
            <p className="text-xs">{numberLikes} likes</p>
            {/* {isLoading ? (
                <p>Loading...</p>
            ) : (
                <p>{numberLikes} likes</p>
            )} */}
        </div>
    );
}
