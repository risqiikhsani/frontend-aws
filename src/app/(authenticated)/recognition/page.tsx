"use client"

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowPathIcon, PencilIcon } from "@heroicons/react/16/solid";
import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/auth";
import { useEffect, useState } from "react";
import { Buffer } from 'buffer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const formSchema = z.object({
    image: z.instanceof(File).optional(),
});

const fetchStatus = async () => {
    const response = await api.get(`/image-rekognition/check`);
    return response.data;
};

const fetchCustomLabel = async (imageKey: string) => {
    const response = await api.get(`/image-rekognition/analyze?image_key=${imageKey}`);
    return response.data;
};

export default function Page() {
    const queryClient = useQueryClient();
    const [uploadedImage, setUploadedImage] = useState({} as any);
    const [loadingUploadImage, setLoadingUploadImage] = useState(false);

    const { data: status, isLoading: loadingFetchStatus,isError: errorFetchStatus, isFetching: fetchingStatus } = useQuery({
        queryKey:['status'], 
        queryFn:fetchStatus
    });

    const { data: result, isLoading: loadingCustomLabel,isError: errorGetCustomLabel, refetch: refetchGetCustomLabel} = useQuery({
        queryKey:['get-custom-label',uploadedImage.image_key],
        queryFn: () => fetchCustomLabel(uploadedImage.image_key),
        enabled: false,
    });

    useEffect(() => {
        if(errorFetchStatus){
            toast.error("error fetching status")
        }
        if(errorGetCustomLabel){
            toast.error("error detect image, make sure machine is running and image is uploaded.")
        }
    },[errorFetchStatus,errorGetCustomLabel])

    useEffect(() => {
        console.log(status);
        console.log(uploadedImage);
    }, [status, uploadedImage]);

    const refetchStatus = () => {
        console.log("refetching")
        queryClient.invalidateQueries({ queryKey: ['status'] })
    }

    const { fetchUserData } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoadingUploadImage(true);
        try {
            let imageBase64 = "";
            if (values.image) {
                const fileBuffer = await values.image.arrayBuffer();
                imageBase64 = Buffer.from(fileBuffer).toString('base64');
            }

            const response = await api.post(`/image-rekognition/images`, {
                image: imageBase64
            });

            if (response.status === 200) {
                toast.success('Image uploaded');
                form.reset();
                setUploadedImage(response.data);
            } else {
                toast.warning('Failed to upload image');
                form.reset();
            }
        } catch (error) {
            toast.warning('Something went wrong');
            form.reset();
        } finally {
            setLoadingUploadImage(false);
        }
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Recognize Image</CardTitle>
                    <p>skin disease detector [BETA]</p>
                    <div className="flex gap-2 items-center justify-start">
                        machine status : 
                        {status && <Badge>{status.Status}</Badge>}
                        
                        <Button size="icon" variant="outline" className="rounded-full" onClick={refetchStatus}>
                            <ArrowPathIcon className={fetchingStatus ? "animate-spin h-5 w-5" : "h-5 w-5"} />
                        </Button>
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
                            <Button type="submit">Upload</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardContent className="flex flex-col gap-4">
                    {loadingUploadImage && <p>loading image.....</p>}
                    {uploadedImage?.image_url && <Image src={uploadedImage.image_url} alt="image" height={800} width={800} loading="lazy" layout="responsive" objectFit="cover" objectPosition="center" />}
                    <Button onClick={() => refetchGetCustomLabel(uploadedImage.image_key)} >
                        Detect Image {loadingCustomLabel && <ArrowPathIcon className="animate-spin h-5 w-5 ml-3" />}
                    </Button>
                    <pre>{JSON.stringify(result)}</pre>
                    <Button >
                        Detect Image (by request)
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}


// "use client"

// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"

// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { toast } from "sonner"
// import { ArrowPathIcon, PencilIcon } from "@heroicons/react/16/solid"
// import api from "@/lib/axios"
// import { useQueryClient } from "@tanstack/react-query"
// import { Input } from "@/components/ui/input"
// import { useAuth } from "@/context/auth"
// import { useEffect, useState } from "react"
// import { Base64 } from "js-base64";
// import { Buffer } from 'buffer';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import Image from "next/image"

// const formSchema = z.object({
//     image: z.instanceof(File).optional(),
// })


// export default function Page() {

//     const [status, setStatus] = useState("unknown")
//     const [uploadedImage, setUploadedImage] = useState({} as any)
//     const [loadingUploadImage, setLoadingUploadImage] = useState(false)
//     const [loadingFetchStatus, setLoadingFetchStatus] = useState(false)
//     const [result, setResult] = useState({} as any)

//     const GetCustomLabel = async () => {
//         try {
//             const response = await api.get(`/image-rekognition/analyze?image_key=${uploadedImage.image_key}`);
//             if (response.status === 200) {
//                 toast.success("Successfully get custom label.")
//                 setResult(response.data)
//                 console.log(response.data);
//             } else {
//                 toast.error("Failed to get custom label, make sure machine is running and image is uploaded.")
//                 console.error("Failed to get custom label");
//             }
//         } catch (error) {
//             toast.error("Failed to get custom label, make sure machine is running and image is uploaded.")
//             console.error("Error getting custom label:", error);
//         }
//     };

//     const CheckStatus = async () => {
//         setLoadingFetchStatus(true)
//         try {
//             const response = await api.get(`/image-rekognition/check`);
//             if (response.status === 200) {
//                 setStatus(response.data.Status);
//                 console.log(response.data);
//             } else {
//                 console.error("Failed to fetch status");
//             }
//         } catch (error) {
//             console.error("Error fetching status:", error);
//         } finally {
//             setLoadingFetchStatus(false)
//         }
//     };

//     useEffect(() => {
//         CheckStatus();
//     }, []);

//     useEffect(() => {
//         console.log(status);
//         console.log(uploadedImage);
//     }, [status, uploadedImage]);



//     const { fetchUserData } = useAuth()

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {},
//     })

//     const onSubmit = async (values: z.infer<typeof formSchema>) => {
//         setLoadingUploadImage(true)
//         try {
//             console.log("before")
//             console.log(values)
//             let imageBase64: any = "";
//             // Convert the file to Base64 string
//             if (values.image) {
//                 const fileBuffer = await values.image.arrayBuffer();
//                 imageBase64 = Buffer.from(fileBuffer).toString('base64');
//             }
//             console.log("after")
//             console.log(values)

//             const response = await api.post(`/image-rekognition/images`, {
//                 image: imageBase64
//             })

//             if (response.status === 200) {
//                 console.log("Image uploaded")
//                 toast.success('Image uploaded')
//                 form.reset()
//                 setUploadedImage(response.data)
//                 // You can handle the successful response here
//             } else {
//                 console.error("Failed to upload image")
//                 toast.warning('Failed to upload image')
//                 form.reset()
//                 // You can handle the error here
//             }
//         } catch (error) {
//             console.error("Error upload image:", error)
//             toast.warning('Something went wrong')
//             form.reset()
//             // You can handle the error here
//         } finally {
//             setLoadingUploadImage(false)
//         }
//     }



//     return (
//         <>
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Recognize Image</CardTitle>
//                     <p>skin disease detector [BETA]</p>
//                     <div className="flex gap-2 items-center justify-start">
//                         machine status : <Badge>{status}</Badge>
//                         <Button size="icon" variant="outline" className="rounded-full" onClick={CheckStatus}>
//                             <ArrowPathIcon className={loadingFetchStatus ? "animate-spin h-5 w-5" : "h-5 w-5"} /></Button>
//                     </div>
//                 </CardHeader>
//                 <CardContent>
//                     <Form {...form}>
//                         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                             <FormField
//                                 control={form.control}
//                                 name="image"
//                                 render={({ field: { value, onChange, ...fieldProps } }) => (
//                                     <FormItem>
//                                         <FormLabel>File</FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 {...fieldProps}
//                                                 placeholder="Picture"
//                                                 type="file"
//                                                 accept="image/*, application/pdf"
//                                                 onChange={(event) =>
//                                                     onChange(event.target.files && event.target.files[0])
//                                                 }
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <Button type="submit">Upload</Button>
//                         </form>
//                     </Form>

//                 </CardContent>
//                 <CardContent className="flex flex-col gap-4">
//                     {loadingUploadImage && <p>loading image.....</p>}
//                     {uploadedImage.image_url && <Image src={uploadedImage.image_url} alt="image" height={800} width={800} />}
//                     <Button onClick={GetCustomLabel} >Detect Image

//                     </Button>
//                     <pre>{JSON.stringify(result)}</pre>
//                 </CardContent>
//             </Card>


//         </>
//     )
// }

