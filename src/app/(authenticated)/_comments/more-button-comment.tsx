"use client"

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
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
import UpdateComment from "./update-comment";
import DeleteComment from "./delete-comment";

export default function MoreButtonComment({ data }: { data: any }) {
    const { user } = useAuth()

    return (<>
        {
            user.id === data.user && (
                <Drawer>
                <DrawerTrigger asChild>
                    {/* <MoreButtonPost data={data}/> */}
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
            )
        }
    </>)
}