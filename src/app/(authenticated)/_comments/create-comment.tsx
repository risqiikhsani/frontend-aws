


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
import api from "@/lib/axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"

const formSchema = z.object({
    text: z.string().min(10),
})

export default function CreateComment({ post_id }: { post_id: string }) {
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await api.post(`/comments?post_id=${post_id}`,{ text: values.text })

            if (response.status === 200) {
                console.log("Comment created successfully")
                toast.success('Event has been created')
                form.reset()
                queryClient.invalidateQueries({ queryKey: ['comments', post_id] })
                // You can handle the successful response here
            } else {
                console.error("Failed to create Comment")
                toast.warning('Failed to create Comment')
                form.reset()
                // You can handle the error here
            }
        } catch (error) {
            console.error("Error creating Comment:", error)
            toast.warning('Something went wrong')
            form.reset()
            // You can handle the error here
        }
    }

    return (
        <>
            {/* <Dialog>
                <DialogTrigger asChild>
                    <Button>Create Comment</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-4">Make a new Comment</DialogTitle>
                        <DialogDescription> */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex items-end gap-2 p-2">
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Textarea placeholder="Write a comment" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* <DialogTrigger asChild> */}
                        <Button type="submit">Submit</Button>
                    {/* </DialogTrigger> */}

                </form>
            </Form>
            {/* </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog> */}
        </>
    )
}