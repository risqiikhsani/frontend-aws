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
  


export default function Page() {
    return (
        <>
            <p>News page</p>
            <Card>
                <div className="p-2 flex justify-left items-center gap-4">
                    <Button variant="ghost" className="flex gap-2 justify-center items-center p-6">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Kevin</p>
                    </Button>

                    <div className="flex-1">
                    </div>
                    <CardDescription>3 June 2024</CardDescription>
                    <Button variant="outline" size="icon">
                        <EllipsisVerticalIcon className="h-4 w-4" />
                    </Button>
                </div>

                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

        </>
    )
}