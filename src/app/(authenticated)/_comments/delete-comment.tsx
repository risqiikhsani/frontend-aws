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
import { useQueryClient } from "@tanstack/react-query"
import api from "@/lib/axios"

export default function DeleteComment({ data }: { data: any }) {
    const queryClient = useQueryClient()

    const onSubmit = async () => {
        try {

            const response = await api.delete(`/comments/${data.id}`)
            if (response.status === 200) {
                console.log("Comment deleted successfully")
                toast.success('Comment has been deleted')
                queryClient.invalidateQueries({ queryKey: ['comments', data.post_id] })
                // You can handle the successful response here
            } else {
                console.error("Failed to delete Comment")
                toast.warning('Failed to delete Comment')

                // You can handle the error here
            }
        } catch (error) {
            console.error("Error delete Comment:", error)
            toast.warning('Something went wrong')
            // You can handle the error here
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <TrashIcon className="h-4 w-4 mr-2" /> Delete
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-4">Delete Comment</DialogTitle>
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