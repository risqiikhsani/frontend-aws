
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



export default async function Page() {
    const dynamicData = await fetch(`https://c27skmgaxj.execute-api.ap-southeast-2.amazonaws.com/dev/posts`, { cache: 'no-store' })
    const data = await dynamicData.json();

    return (
        <>
            <CreatePost/>

            {data && data.map((post: any) => (
                <Post key={post.id} data={post} />
            ))}
        </>
    )
}