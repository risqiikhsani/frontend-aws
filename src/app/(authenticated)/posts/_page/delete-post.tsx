"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { TrashIcon } from "@heroicons/react/16/solid"

export default function DeletePost({ data }: { data: any }) {


    const onSubmit = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${data.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )

            if (response.ok) {
                console.log("Post deleted successfully")
                toast.success('Post has been deleted')

                // You can handle the successful response here
            } else {
                console.error("Failed to delete post")
                toast.warning('Failed to delete post')

                // You can handle the error here
            }
        } catch (error) {
            console.error("Error delete post:", error)
            toast.warning('Something went wrong')
            // You can handle the error here
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" >
                        <TrashIcon className="h-4 w-4 mr-2" /> Delete
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-4">Delete post</DialogTitle>
                        <DialogDescription>
                            <p>are you sure to delete?</p>

                            <DialogTrigger asChild>
                                <Button type="submit" onClick={onSubmit}>Submit</Button>
                            </DialogTrigger>

                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}