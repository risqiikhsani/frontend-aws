"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Notifications from "./notifications"
import { ModeToggle } from "./mode-toggle"
import { useRouter } from 'next/navigation'

const LOGIN_URL: any = process.env.NEXT_PUBLIC_COGNITO_LOGIN_URL
const LOGOUT_URL: any = process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URL

export default function AppBar() {
    const { user, logoutUser } = useAuth()
    const router = useRouter()
    return (

        <div className="flex items-center justify-between p-4 fixed w-full top-0 start-0 z-40 bg-gradient-to-r from-blue-600 to-blue-600 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-900 shadow-xl">
            {user.id && (
                <div className="flex gap-4">
                    <LeftAppBarMobile />
                    <Button asChild variant="ghost" size="icon" onClick={() => router.refresh()}>
                        <Link href="/">
                            <Avatar className="mx-auto h-8 w-10 my-20">
                                <AvatarImage src="/pictures/logo.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Link>
                    </Button>
                </div>

            )}



            <div className="flex gap-2">
                <ModeToggle />

                {user.id ? (
                    <>


                        <Sheet>
                            <SheetTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <BellAlertIcon className="h-6 w-6" />
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                                </span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Notifications</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </SheetTrigger >
                            <SheetContent className="overflow-y-auto">
                                <Notifications />
                            </SheetContent>
                        </Sheet>

                        <Sheet>
                            <SheetTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <UserCircleIcon className="h-6 w-6" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Profile</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </SheetTrigger>
                            <SheetContent>
                                <Profile />
                            </SheetContent>
                        </Sheet>

                        <Button asChild variant="ghost" onClick={logoutUser} className="text-red-400">
                            <Link href={LOGOUT_URL}>Logout</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <Button asChild variant="ghost">
                            <Link href={LOGIN_URL}>Login</Link>
                        </Button>
                    </>

                )}

            </div>

        </div>

    )
}