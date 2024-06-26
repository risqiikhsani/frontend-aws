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
import { PencilIcon } from "@heroicons/react/16/solid"
import { useQueryClient } from "@tanstack/react-query"
import api from "@/lib/axios"

const formSchema = z.object({
    text: z.string().min(10),
})

export default function UpdateComment({data}:{data: any}) {
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: data.text,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await api.put(`/comments/${data.id}`,{ text: values.text })

            if (response.status === 200) {
                console.log("Comment updated successfully")
                toast.success('Comment has been updated')
                form.reset()
                queryClient.invalidateQueries({ queryKey: ['comments',data.post_id] })
                // You can handle the successful response here
            } else {
                console.error("Failed to update Comment")
                toast.warning('Failed to update Comment')
                form.reset()
                // You can handle the error here
            }
        } catch (error) {
            console.error("Error update Comment:", error)
            toast.warning('Something went wrong')
            form.reset()
            // You can handle the error here
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <PencilIcon className="h-4 w-4 mr-2" /> Update
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-4">Update Comment</DialogTitle>
                        <DialogDescription>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="text"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Text</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Show us your feelings" {...field} />
                                                </FormControl>
                                                <FormDescription>Write a Comment to publish.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogTrigger asChild>
                                        <Button type="submit">Submit</Button>
                                    </DialogTrigger>

                                </form>
                            </Form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}