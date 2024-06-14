import Link from "next/link";
import { Button } from "./ui/button";
import { ChatBubbleBottomCenterIcon, GlobeAltIcon, NewspaperIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Separator } from "./ui/separator";
import CustomLink from "./custom-link";

export default function LeftAppBar() {
    return (
        <>
            <div className="fixed left-0 w-64 flex-col hidden md:flex h-screen px-4 pt-24 overflow-auto border-r shadow-md">
                <nav className="flex flex-col space-y-2 mt-4">

                    <CustomLink href="/news">
                        Health News <NewspaperIcon className="h-6 w-6 mx-2" />
                    </CustomLink>


                    <CustomLink href="/posts">
                        Feeds <GlobeAltIcon className="h-6 w-6 mx-2" />
                    </CustomLink>


                    <CustomLink href="/recognition">
                        Image recognition <PhotoIcon className="h-6 w-6 mx-2" />
                    </CustomLink>


                    <CustomLink href="/chatbot">
                        Chat bot <ChatBubbleBottomCenterIcon className="h-6 w-6 mx-2" />
                    </CustomLink>


                    <CustomLink href="/logs">
                        Logs
                    </CustomLink>


                </nav>
            </div>
        </>
    )
}