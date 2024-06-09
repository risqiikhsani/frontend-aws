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
import api from "@/lib/axios"
import { useQueryClient } from "@tanstack/react-query"
import { Input } from "./ui/input"
import { useAuth } from "@/context/auth"
import { useState } from "react"
import { Base64 } from "js-base64";
import { Buffer } from 'buffer';

const formSchema = z.object({
    name: z.string().min(10),
    profileImage: z.instanceof(File).optional(),
})

export default function UpdateProfile({ data }: { data: any }) {
    const [isUpdate, setIsUpdate] = useState(false)
    const { fetchUserData } = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: data.name
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log("before")
            console.log(values)
            let profileImageBase64: any = "";
            // Convert the file to Base64 string
            if (values.profileImage) {
                const fileBuffer = await values.profileImage.arrayBuffer();
                profileImageBase64 = Buffer.from(fileBuffer).toString('base64');
            }
            console.log("after")
            console.log(values)

            const response = await api.put(`/my-profile`, {
                name: values.name,
                profile_image: profileImageBase64
            })

            if (response.status === 200) {
                console.log("profile updated successfully")
                toast.success('profile has been updated')
                form.reset()
                fetchUserData()
                // You can handle the successful response here
            } else {
                console.error("Failed to update profile")
                toast.warning('Failed to update profile')
                form.reset()
                // You can handle the error here
            }
        } catch (error) {
            console.error("Error updating profile:", error)
            toast.warning('Something went wrong')
            form.reset()
            // You can handle the error here
        }
    }

    const onUpdate = () => {
        setIsUpdate(!isUpdate)
    }

    return (
        <>
            <Button variant="outline" className="gap-2" onClick={onUpdate}>
                <PencilIcon className="w-4 h-4" />
                {isUpdate ? `cancel` : `Update profile`}
            </Button>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ID</FormLabel>
                                <FormControl>
                                    <p>{data.id}</p>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} disabled={isUpdate == false} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                            <FormItem>
                                <FormLabel>File</FormLabel>
                                <FormControl>
                                    <Input
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
                    <DialogTrigger asChild className={isUpdate == false ? `hidden` : `block`}>
                        <Button type="submit">Submit</Button>
                    </DialogTrigger>

                </form>
            </Form>

        </>
    )
}