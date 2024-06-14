"use client"
import Post from "./_components/post";
import CreatePost from "./_components/create-post";
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