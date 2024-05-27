import Link from "next/link";
import { Button } from "./ui/button";
import { ChatBubbleBottomCenterIcon, GlobeAltIcon, NewspaperIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Separator } from "./ui/separator";

export default function LeftAppBarMobile(){
    return(
        <>
        <nav className="flex flex-col space-y-2 mt-4">
                <Button asChild variant="outline">
                    <Link href="/news">
                        News <NewspaperIcon className="h-6 w-6 mx-2"/>
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/posts">
                        Posts <GlobeAltIcon className="h-6 w-6 mx-2"/>
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/recognition">
                        Image recognition <PhotoIcon className="h-6 w-6 mx-2"/>
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/chatbot">
                        Chat bot <ChatBubbleBottomCenterIcon className="h-6 w-6 mx-2"/>
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/logs">
                        Logs
                    </Link>
                </Button>
                <Separator/>
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
        </>
    )
}