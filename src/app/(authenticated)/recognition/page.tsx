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
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth"
import { useEffect, useState } from "react"
import { Base64 } from "js-base64";
import { Buffer } from 'buffer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
    image: z.instanceof(File).optional(),
})

export default function Page() {

    const [status,setStatus] = useState("unknown")

    const CheckStatus = async () => {
        try {
            const response = await api.get(`/image-rekognition/check`);
            if (response.status === 200) {
                setStatus(response.data.Status);
                console.log(response.data);
            } else {
                console.error("Failed to fetch status");
            }
        } catch (error) {
            console.error("Error fetching status:", error);
        }
    };

    useEffect(() => {
        CheckStatus();
    }, []);

    useEffect(() => {
        console.log(status);
    }, [status]);

    const { fetchUserData } = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log("before")
            console.log(values)
            let imageBase64: any = "";
            // Convert the file to Base64 string
            if (values.image) {
                const fileBuffer = await values.image.arrayBuffer();
                imageBase64 = Buffer.from(fileBuffer).toString('base64');
            }
            console.log("after")
            console.log(values)

            const response = await api.post(`/image-rekognition/upload`, {
                image: imageBase64
            })

            if (response.status === 200) {
                console.log("Image uploaded")
                toast.success('Image uploaded')
                form.reset()
                // You can handle the successful response here
            } else {
                console.error("Failed to upload image")
                toast.warning('Failed to upload image')
                form.reset()
                // You can handle the error here
            }
        } catch (error) {
            console.error("Error upload image:", error)
            toast.warning('Something went wrong')
            form.reset()
            // You can handle the error here
        }
    }



    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Recognize Image</CardTitle>
                    <p>skin disease detector [BETA]</p>
                    <div>
                    machine status : <Badge>{status}</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="image"
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
                            <Button type="submit">Upload</Button>
                        </form>
                    </Form>
                    
                </CardContent>
                <CardContent className="flex flex-col gap-4">

                
                <Button>Detect Image Label</Button>
                </CardContent>
            </Card>


        </>
    )
}