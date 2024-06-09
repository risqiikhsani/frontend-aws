
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import UpdatePost from "./update-post"
import DeletePost from "./delete-post"
import { Suspense, useEffect } from "react"
import Comments from "../../_comments/comments"
import { ConvertTime } from "@/lib/time"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useApp } from "@/context/app"
import LikePost from "./like-post"
import MoreButtonPost from "./more-button-post"



export default function Post({ data }: { data: any }) {



    return (
        <>
            <Card className="my-4 border-double border-4 border-sky-200">
                <div className="flex justify-left items-center gap-4">
                    <Button variant="ghost" className="flex gap-2 justify-center items-center py-6 rounded-xl">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>{data.user_detail.name}</p>
                    </Button>

                    <div className="flex-1">
                    </div>
                    <CardDescription className="mr-2">{ConvertTime(data.time_creation)}</CardDescription>
                    <MoreButtonPost data={data}/>

                    {/* <UpdatePost data={data} />
                    <DeletePost data={data} /> */}
                </div>
                <Separator />
                {/* 
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader> */}
                <CardContent className="py-2">
                    <p>{data.text}</p>
                </CardContent>

                <div className="flex justify-between p-2">
                    <LikePost data={data} />
                    <Button variant="outline" size="icon" className="rounded-full">
                        <ShareIcon className="h-4 w-4" />
                    </Button>

                </div>

                <Accordion type="single" collapsible className="px-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{data.number_comments != 0 ? `read ${data.number_comments} comments` : `comments`}</AccordionTrigger>
                        <AccordionContent>
                            <Suspense fallback={<p>loading comments...</p>}>
                                <Comments post_id={data.id} />
                            </Suspense>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>

        </>
    )
}