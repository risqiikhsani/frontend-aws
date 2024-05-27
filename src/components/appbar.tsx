
import { Bars3Icon, BellAlertIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/16/solid"
import { Button } from "./ui/button"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import LeftAppBarMobile from "./left-app-bar-mobile"
import Profile from "./profile"

const LOGIN_URL: any = process.env.NEXT_PUBLIC_COGNITO_LOGIN_URL  

export default function AppBar() {
    return (

        <div className="flex items-center justify-between p-4 shadow-md fixed w-full top-0 start-0 border-b border-gray-200 z-40 bg-slate-50">
            <div className="flex gap-4">

                <Sheet>
                    <SheetTrigger asChild className="md:hidden block">
                        <Button variant="outline" size="icon">
                            <Bars3Icon className="h-6 w-6 text-blue-500" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <LeftAppBarMobile/>
                    </SheetContent>
                </Sheet>

                <Button asChild variant="outline" size="icon">
                    <Link href="/">
                        <HomeIcon className="h-6 w-6 text-blue-500" />
                    </Link>
                </Button>
            </div>

            <div className="flex gap-4">
            <Button asChild variant="outline">
                    <Link href={LOGIN_URL}>Login</Link>
                </Button>
                <Button variant="outline" size="icon">
                    <BellAlertIcon className="h-6 w-6 text-blue-500" />
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <UserCircleIcon className="h-6 w-6 text-blue-500" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <Profile/>
                    </SheetContent>
                </Sheet>

                <Button asChild variant="outline">
                    <Link href="/logout">Logout</Link>
                </Button>
            </div>

        </div>

    )
}