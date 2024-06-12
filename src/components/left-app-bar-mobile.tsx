import Link from "next/link";
import { Button } from "./ui/button";
import { ChatBubbleBottomCenterIcon, GlobeAltIcon, NewspaperIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Separator } from "./ui/separator";
import CustomLink from "./custom-link";

export default function LeftAppBarMobile(){
    return(
        <>
        <nav className="flex flex-col space-y-2 mt-4">
                
                    <CustomLink href="/news">
                        News <NewspaperIcon className="h-6 w-6 mx-2"/>
                    </CustomLink>
                
                
                    <CustomLink href="/posts">
                        Posts <GlobeAltIcon className="h-6 w-6 mx-2"/>
                    </CustomLink>
                
                
                    <CustomLink href="/recognition">
                        Image recognition <PhotoIcon className="h-6 w-6 mx-2"/>
                    </CustomLink>
                
                
                    <CustomLink href="/chatbot">
                        Chat bot <ChatBubbleBottomCenterIcon className="h-6 w-6 mx-2"/>
                    </CustomLink>
                
                
                    <CustomLink href="/logs">
                        Logs
                    </CustomLink>
                
                <Separator/>
                
                    <CustomLink href="/about">
                        About this website
                    </CustomLink>
                
                
                    <CustomLink href="/us">
                        Who are we
                    </CustomLink>
                
                
                    <CustomLink href="/message-us">
                        Send us messages
                    </CustomLink>
                
                </nav>
        </>
    )
}