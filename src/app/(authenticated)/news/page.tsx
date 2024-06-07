import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import Filter from "./_page/filter"
import { Suspense } from 'react';
import { ConvertTime } from "@/lib/time"
import { Badge } from "@/components/ui/badge"

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        country?: string;
    };
}) {

    const country = searchParams?.country || 'us';

    const dynamicData = await fetch(`https://c27skmgaxj.execute-api.ap-southeast-2.amazonaws.com/dev/news?country=${country}`, { cache: 'no-store' })
    const data = await dynamicData.json();

    return (
        <>
            <Filter />
            <Suspense key={country} fallback={<p>Loading...</p>}>
                {data ? (
                    data.articles.map((item: any, index: any) => (
                        <Card key={index} className="my-4">
                            <CardHeader>
                                <div className="flex justify-left items-center gap-4">
                                    <Badge variant="outline">Author</Badge>
                                    <p>{item.author}</p>
                                    <div className="flex-1">
                                    </div>
                                    <CardDescription>{ConvertTime(item.publishedAt)}</CardDescription>
                                    <Button variant="outline" size="icon">
                                        <EllipsisVerticalIcon className="h-4 w-4" />
                                    </Button>
                                </div>

                                <p className="font-bold underline">{item.source.name}</p>

                                <CardTitle>{item.title}</CardTitle>
                                {item.urlToImage ? <Image src={item.urlToImage} width={300} height={300} alt="image" className="rounded-md" /> : null}
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex">
                                <div className="flex-grow"></div>
                                <Button asChild>
                                    <Link href={item.url}>visit</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </Suspense>



        </>
    )
}