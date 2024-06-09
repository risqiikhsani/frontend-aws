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
import { useQueryClient } from "@tanstack/react-query"
import api from "@/lib/axios"

const formSchema = z.object({
    text: z.string().min(10),
})

export default function CreatePost() {
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await api.post("/posts", { text: values.text })

            if (response.status === 200) {
                console.log("Post created successfully")
                toast.success('Post has been created')
                form.reset()
                
                // You can handle the successful response here
            } else {
                console.error("Failed to create post")
                toast.warning('Failed to create post')
                form.reset()
                // You can handle the error here
            }
        } catch (error) {
            console.error("Error creating post:", error)
            toast.warning('Something went wrong')
            form.reset()
            // You can handle the error here
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Create Post</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-4">Make a new post</DialogTitle>
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
                                                <FormDescription>Write a post to publish.</FormDescription>
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