import Link from "next/link";
import { Button } from "./ui/button";

export default function RightAppBar() {
    return (
        <>
            <div className="fixed right-0 w-64 flex-col text-center hidden md:flex h-screen px-4 pt-24 overflow-auto border-l border-gray-200 shadow-md">
                <nav className="flex flex-col space-y-2 mt-4">
                <Button asChild variant="outline">
                    <Link href="/about">
                        About this website
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/us">
                        Who are we
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="">
                        Send us messages
                    </Link>
                </Button>
                </nav>
            </div>
        </>
    )
}