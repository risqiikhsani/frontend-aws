"use client"

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";

export default function MoreButtonComment({ data }: { data: any }) {
    const { user } = useAuth()

    return (<>
        {
            user.id === data.user && (
                <Button variant="ghost" size="icon">
                    <EllipsisVerticalIcon className="h-6 w-6" />
                </Button>
            )
        }
    </>)
}