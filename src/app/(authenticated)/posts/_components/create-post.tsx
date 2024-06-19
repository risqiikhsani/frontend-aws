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
import { Buffer } from 'buffer';
import { Input } from "@/components/ui/input"
import { post_category,post_type } from "@/data/data"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const formSchema = z.object({
    type: z.string(),
    category: z.string(),
    text: z.string().min(10),
    // image: z.instanceof(File).optional(),
    image: z.any().optional(),
})



export default function CreatePost() {
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: "",
            category: "",
            text: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            let imageBase64 = "";
            if (values.image) {
                const fileBuffer = await values.image.arrayBuffer();
                imageBase64 = Buffer.from(fileBuffer).toString('base64');
            }

            const response = await api.post("/posts", {
                type: values.type,
                category: values.category,
                text: values.text,
                image: imageBase64
            })

            if (response.status === 200) {
                console.log("Post created successfully")
                toast.success('Post has been created')
                form.reset()
                queryClient.invalidateQueries({ queryKey: ['posts'] })
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
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Type</FormLabel>

                                                {/* <Textarea placeholder="Type post" {...field} /> */}
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {post_type.map((c, i) => (
                                                            <SelectItem value={c.value}>{c.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>


                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Category</FormLabel>

                                                {/* <Textarea placeholder="Category post" {...field} /> */}
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="category" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {post_category.map((c, i) => (
                                                            <SelectItem value={c.value}>{c.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>


                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="text"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Text</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Show us your feelings" {...field} />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field: { value, onChange, ...fieldProps } }) => (
                                            <FormItem>
                                                <FormLabel>Image</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="cursor-pointer"
                                                        {...fieldProps}
                                                        placeholder="Picture"
                                                        type="file"
                                                        accept="image/*, application/pdf"
                                                        onChange={(event) =>
                                                            onChange(event.target.files && event.target.files[0])
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogTrigger asChild>
                                        <Button type="submit">Create</Button>
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