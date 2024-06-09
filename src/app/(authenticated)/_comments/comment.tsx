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
import LikeComment from "./like-comment"


export default function Comment({ data }: { data: any }) {
    return (
        <>
            <Card className="my-4 border-double border-4 border-sky-500 bg-slate-50">
                <div className="flex justify-left items-center gap-4">
                    <Button variant="ghost" className="flex gap-2 justify-center items-center p-6">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>{data.user_detail.name}</p>
                    </Button>

                    <div className="flex-1">
                    </div>
                    <CardDescription>{ConvertTime(data.time_creation)}</CardDescription>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <EllipsisVerticalIcon className="h-6 w-6" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                
                                <UpdateComment data={data} />
                                <DeleteComment data={data} />
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                </div>
                <Separator/>

                {/* 
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader> */}
                <CardContent className="py-2">
                    <p>{data.text}</p>
                </CardContent>

                <div className="flex justify-left p-2">
                    <LikeComment data={data}/>
                </div>

                {/* <Accordion type="single" collapsible className="px-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>2 comments</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion> */}
            </Card>

        </>
    )
}