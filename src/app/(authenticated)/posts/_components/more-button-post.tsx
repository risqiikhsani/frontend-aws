"use client"

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import UpdatePost from "./update-post";
import DeletePost from "./delete-post";
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

export default function MoreButtonPost({ data }: { data: any }) {
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
                        <UpdatePost data={data} />
                        <DeletePost data={data} />
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