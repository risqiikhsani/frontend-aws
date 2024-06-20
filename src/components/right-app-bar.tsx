import Link from "next/link";
import { Button } from "./ui/button";
import CustomLink from "./custom-link";
import { Badge } from "./ui/badge";

export default function RightAppBar() {
    return (
        <>
            <div className="fixed right-0 w-64 flex-col text-center hidden md:flex h-screen px-4 pt-24 overflow-auto shadow-xl ">
                <nav className="flex flex-col space-y-2 mt-4">
                    <Badge className="">Informations</Badge>
                
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
            </div>
        </>
    )
}