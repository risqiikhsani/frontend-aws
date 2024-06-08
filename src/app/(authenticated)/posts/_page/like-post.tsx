"use client"
import { Button } from "@/components/ui/button";
import { useApp } from "@/context/app";
import api from "@/lib/axios";
import { HeartIcon } from "@heroicons/react/16/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function LikePost({ data }: { data: any }) {
    const { likes } = useApp();
    const queryClient = useQueryClient();

    // Add the i_liked attribute before rendering the component
    const likedByUser = likes.some((like: any) => {
        console.log("like : " + like.associated_id)
        return like.associated_id === data.id; // Ensure to return the comparison result
    });

    console.log("data id : " + data.id)
    data.i_liked = likedByUser;
    console.log("likedByUser : " + likedByUser)



    const onLike = async () => {
        try {
            const response = await fetch(
                `https://c27skmgaxj.execute-api.ap-southeast-2.amazonaws.com/dev/likes/add?post_id=${data.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            if (response.ok) {
                console.log("Liked post")
                toast.success('Liked post')
                queryClient.invalidateQueries({ queryKey: ['user-likes'] })
            } else {
                console.error("Failed to like post")
                toast.warning('Failed to like post')
            }
        } catch (error) {
            console.error("Error like post:", error)
            toast.warning('Error like post')
        }
    }

    const onDislike = async () => {
        try {
            const response = await fetch(
                `https://c27skmgaxj.execute-api.ap-southeast-2.amazonaws.com/dev/likes/remove?post_id=${data.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            if (response.ok) {
                console.log("Dislike post")
                queryClient.invalidateQueries({ queryKey: ['user-likes'] })
            } else {
                console.error("Failed to dislike post")
            }
        } catch (error) {
            console.error("Error dislike post:", error)
        }
    }
    
    return (
        <>
            <div className="flex justify-center items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full" onClick={data.i_liked ? onDislike : onLike}>
                    {
                        data.i_liked ? (
                            <HeartIcon className="h-6 w-6 fill-red-500" />
                        ) : (
                            <HeartIconOutline className="h-6 w-6" />
                        )
                    }
                </Button>
                <p>112 likes</p>
                <p>{data.i_liked && "I liked"}</p>
            </div>
        </>
    )
}