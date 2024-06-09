"use client"
import { Button } from "@/components/ui/button"

import Post from "./_page/post"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CreatePost from "./_page/create-post";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`);
    return res.json();
  };

export default function Page() {
    // const dynamicData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`, { cache: 'no-store' })
    // const data = await dynamicData.json();

    const { data, isLoading, error } = useQuery({queryKey:['posts'],queryFn:fetchPosts});

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <CreatePost/>

            {data && data.map((post: any) => (
                <Post key={post.id} data={post} />
            ))}
        </>
    )
}