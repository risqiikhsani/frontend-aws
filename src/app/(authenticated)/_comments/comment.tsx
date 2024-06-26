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
import MoreButtonComment from "./more-button-comment"
import TranslateText from "../_translate/translate-text"


export default function Comment({ data }: { data: any }) {
    return (
        <>
            <Card className="flex border-none   ">
                <Button variant="ghost" className="">
                    <Avatar>
                        <AvatarImage src={data.user_detail.profile_image_url} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>
                <div className="w-full">
                    <div className="flex items-start">
                        <p className="font-bold">{data.user_detail.name}</p>
                        <div className="flex-1">
                        </div>
                        <CardDescription className="mr-2">{ConvertTime(data.time_creation)}</CardDescription>

                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p>{data.text}</p>
                            <TranslateText text={data.text} />
                        </div>

                        <MoreButtonComment data={data} />
                    </div>
                    <div className="flex justify-left">
                        <LikeComment data={data} />
                    </div>
                </div>
            </Card>
            {/* <Card className="my-4 shadow-lg">
                <div className="flex justify-left items-center gap-4">
                    <Button variant="ghost" className="flex gap-2 justify-center items-center py-6">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>{data.user_detail.name}</p>
                    </Button>

                    <div className="flex-1">
                    </div>
                    <CardDescription className="mr-2">{ConvertTime(data.time_creation)}</CardDescription>
                    <MoreButtonComment data={data} />

                </div>
                <Separator />


                <CardContent className="py-2">
                    <p>{data.text}</p>
                    <TranslateText text={data.text} />
                </CardContent>

                <div className="flex justify-left p-2">
                    <LikeComment data={data} />
                </div>


            </Card> */}

        </>
    )
}