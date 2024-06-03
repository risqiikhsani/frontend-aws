
import { Button } from "@/components/ui/button"

import Post from "@/components/post"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



export default function Page() {
    return (
        <>
            <Dialog>
                <DialogTrigger>Create Post</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


            <Post />
            <Post />
            <Post />
            <Post />
        </>
    )
}