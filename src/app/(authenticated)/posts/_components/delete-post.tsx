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
import api from "@/lib/axios"
import { useQueryClient } from "@tanstack/react-query"

export default function DeletePost({ data }: { data: any }) {

    const queryClient = useQueryClient()

    // delete post
    const onSubmit = async () => {
        try {
            const response = await api.delete(`/posts/${data.id}`)

            if (response.status === 200) {
                console.log("Post deleted successfully")
                toast.success('Post has been deleted')
                queryClient.invalidateQueries({ queryKey: ['posts'] })
            } else {
                console.error("Failed to delete post")
                toast.warning('Failed to delete post')
            }
        } catch (error) {
            console.error("Error deleting post:", error)
            toast.warning('Something went wrong')
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