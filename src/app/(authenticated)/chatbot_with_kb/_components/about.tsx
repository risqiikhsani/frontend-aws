"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ExclamationCircleIcon } from "@heroicons/react/16/solid"
import { useState } from "react";

export default function About() {
    const [open, setOpen] = useState(true);
    
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                    <Button size="icon" className="rounded-full">
                        <ExclamationCircleIcon className="h-8 w-8"/>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Healthcare Chat Bot [BETA version]</DialogTitle>
                        <DialogDescription className="text-left">
                            Healthcare Chat Bot is quite different compared to virtual assistance, this AI BOT uses our own databases,
                            so this Bot might not be able to answer particular questions due to the lack of database.
                            <br />
                            This Chat Bot was created for learning purpose to build RAG AI application using knowledge base.
                            <br />
                            Here&#39;s the list of topics you can ask based on our current database.
                            <ul>
                                <li>
                                - Ask about this website
                                </li>
                                <li>
                                - Medicine for some diseases
                                </li>
                                <li>
                                - Description and symptoms for some diseases
                                </li>
                                <li>
                                - Skin diseases information for skin disease image detector 
                                </li>
                                <li>
                                - Ear diseases
                                </li>
                                <li>
                                - Eye diseases
                                </li>
                                <li>
                                - Teeth diseases
                                </li>
                                <li>
                                - Some information about some medicine
                                </li>
                            </ul>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}
