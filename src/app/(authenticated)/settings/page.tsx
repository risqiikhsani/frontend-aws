"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@radix-ui/react-separator"
import Translate from "./_components/translate"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useAuth } from "@/context/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const LOGOUT_URL: any = process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URL

export default function Page() {
    const { logoutUser } = useAuth()
    return (
        <>
            Settings
            <Card className="my-4">
                <CardHeader>
                    <p>Theme</p>
                    <ModeToggle />
                </CardHeader>
            </Card>
            <Card className="my-4">
                <CardHeader>
                    <p>AI Translate</p>
                    <Translate />
                </CardHeader>
            </Card>
            <Card className="my-4">
                <CardHeader>
                    <p>Logout from website</p>
                    <Button asChild onClick={logoutUser}>
                        <Link href={LOGOUT_URL}>Logout</Link>
                    </Button>
                </CardHeader>
            </Card>
        </>
    )
}