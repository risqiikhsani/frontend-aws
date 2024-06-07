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
import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import UpdateComment from "./update-comment"
import DeleteComment from "./delete-comment"
import { ConvertTime } from "@/lib/time"


export default function Comment({data}:{data: any}) {
    return (
        <>
            <Card className="my-4">
                <div className="p-2 flex justify-left items-start gap-4">
                    <Button variant="outline" className="flex gap-2 justify-center items-center p-6 rounded-xl">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>{data.user}</p>
                    </Button>

                    <div className="flex-1">
                    </div>
                    <CardDescription>{ConvertTime(data.time_creation)}</CardDescription>
                    <UpdateComment data={data}/>
                    <DeleteComment data={data}/>
                </div>
     
                {/* 
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader> */}
                <CardContent>
                    <p>{data.text}</p>
                </CardContent>
    
                <div className="flex justify-between p-2">
                    <div className="flex justify-center items-center gap-2">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <HeartIcon className="h-4 w-4" />
                        </Button>
                        <p>112 likes</p>
                    </div>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <ShareIcon className="h-4 w-4" />
                    </Button>

                </div>
            
                <Accordion type="single" collapsible className="px-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>2 comments</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>

        </>
    )
}