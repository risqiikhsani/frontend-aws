"use client"


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
import { useAuth } from "@/context/auth"

const LOGIN_URL: any = process.env.NEXT_PUBLIC_COGNITO_LOGIN_URL
const LOGOUT_URL: any = process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URL

export default function AppBar() {
    const { user, logoutUser } = useAuth()
    return (

        <div className="flex items-center justify-between p-4 shadow-md fixed w-full top-0 start-0 z-40 bg-slate-100">
            <div className="flex gap-4">

                <Sheet>
                    <SheetTrigger asChild className="md:hidden block">
                        <Button variant="outline" size="icon">
                            <Bars3Icon className="h-6 w-6 text-blue-500" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <LeftAppBarMobile />
                    </SheetContent>
                </Sheet>

                {user.id && (
                    <Button asChild variant="outline" size="icon">
                        <Link href="/">
                            <HomeIcon className="h-6 w-6 text-blue-500" />
                        </Link>
                    </Button>
                )}

            </div>

            <div className="flex gap-4">


                {user.id ? (
                    <>
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
                                <Profile />
                            </SheetContent>
                        </Sheet>

                        <Button asChild variant="outline" onClick={logoutUser}>
                            <Link href={LOGOUT_URL}>Logout</Link>
                        </Button>
                    </>
                ) : (
                    <Button asChild variant="outline">
                        <Link href={LOGIN_URL}>Login</Link>
                    </Button>
                )}

            </div>

        </div>

    )
}