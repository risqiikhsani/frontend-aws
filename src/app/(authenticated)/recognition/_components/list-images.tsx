import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import api from "@/lib/axios";
import { ConvertTime } from "@/lib/time";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link";


const fetchImages = async () => {
    const response = await api.get(`/image-rekognition/images`);
    return response.data;
};

export default function ListImages() {
    const { data, isLoading, isError, isFetching } = useQuery({
        queryKey: ['image-rekognition-images'],
        queryFn: fetchImages
    });

    useEffect(() => {
        console.log("print images")
        console.log(data)
    }, [data])

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>My images</CardTitle>
                </CardHeader>
                <CardContent>


                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">image</TableHead>
                                <TableHead>status</TableHead>
                                <TableHead className="text-right">time</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading && <p>Loading.......</p>}
                            {data && data.map((image: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        <Link href={image.image}>image link</Link>

                                    </TableCell>
                                    <TableCell>{image.processed ? "done" : "later"}</TableCell>
                                    <TableCell className="text-right">{ConvertTime(image.time_creation)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </CardContent>

            </Card>


        </>
    )
}