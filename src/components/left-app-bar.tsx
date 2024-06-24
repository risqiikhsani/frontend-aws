import Link from "next/link";
import { Button } from "./ui/button";
import { ChatBubbleBottomCenterIcon, ChatBubbleLeftRightIcon, GlobeAltIcon, NewspaperIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Separator } from "./ui/separator";
import CustomLink from "./custom-link";
import { Badge } from "./ui/badge";

export default function LeftAppBar() {
    return (
        <>
            <div className="fixed left-0 w-64 flex-col hidden md:flex h-screen px-4 pt-24 overflow-auto shadow-xl">
                <nav className="flex flex-col space-y-2 mt-4">

                    <Separator />

                    <Badge className="text-xs ">Features</Badge>

                    <CustomLink href="/news">
                        Health News <NewspaperIcon className="h-6 w-6 mx-2" />
                    </CustomLink>


                    <CustomLink href="/posts">
                        Feeds <GlobeAltIcon className="h-6 w-6 mx-2" />
                    </CustomLink>

                    <Separator />

                    <Badge className="text-xs">Add-on Features</Badge>

                    <CustomLink href="/chatbot">
                        Virtual Assistance <ChatBubbleLeftRightIcon className="h-6 w-6 mx-2" />
                    </CustomLink>

                    <CustomLink href="/chatbot_with_kb">
                        Medical Chat bot<ChatBubbleBottomCenterIcon className="h-6 w-6 mx-2" />
                    </CustomLink>

                    <CustomLink href="/recognition">
                        Image Recognition <PhotoIcon className="h-6 w-6 mx-2" />
                    </CustomLink>

                    <Separator />

                    <Badge className="text-xs">More</Badge>

                    <CustomLink href="/settings">
                        Settings
                    </CustomLink>


                </nav>
            </div>
        </>
    )
}