import Link from "next/link";
import { Button } from "./ui/button";
import { Bars3Icon, ChatBubbleBottomCenterIcon, GlobeAltIcon, NewspaperIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Separator } from "./ui/separator";
import CustomLink from "./custom-link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Badge } from "./ui/badge";

export default function LeftAppBarMobile() {
    return (
        <>
            <Sheet>
                <SheetTrigger className="md:hidden block">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Bars3Icon className="h-6 w-6 text-blue-500" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="flex flex-col space-y-2 mt-4">
                        <Separator />
                        <Badge>Features</Badge>
                        

                        <CustomLink href="/news">
                            Health News <NewspaperIcon className="h-6 w-6 mx-2" />
                        </CustomLink>

                        <CustomLink href="/posts">
                            Feeds <GlobeAltIcon className="h-6 w-6 mx-2" />
                        </CustomLink>

                        <Separator />
                        <Badge>Add-on Features</Badge>

                        <CustomLink href="/chatbot">
                            Virtual Assistance <ChatBubbleBottomCenterIcon className="h-6 w-6 mx-2" />
                        </CustomLink>

                        <CustomLink href="/chatbot_with_kb">
                            Chat bot <ChatBubbleBottomCenterIcon className="h-6 w-6 mx-2" />
                        </CustomLink>

                        <CustomLink href="/recognition">
                            Image recognition <PhotoIcon className="h-6 w-6 mx-2" />
                        </CustomLink>

                        <Separator />
                        <Badge>More</Badge>

                        <CustomLink href="/settings">
                            Settings
                        </CustomLink>

                        <Separator />
                        <Badge>Informations</Badge>

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
                </SheetContent>
            </Sheet>



        </>
    )
}