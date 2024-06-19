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
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>Skin Disease Detector [BETA version]</DialogTitle>
                        <DialogDescription className="text-left">
                            Needs to mention that while we're still working on it and improving this, you can still use this feature to detect skin disease by your image.
                            This is the list of skin diseases that can be detected at the moment :
                            <ul>
                                <li>
                                - athlete foot <p className="text-sky-600">(fungal infection)</p>
                                </li>
                                <li>
                                - nail fungus <p className="text-sky-600">(fungal infection)</p>
                                </li>
                                <li>
                                - ringworm <p className="text-sky-600">(fungal infection)</p>
                                </li>
                                <li>
                                - cutaneous larva migran <p className="text-sky-600">(parasitic infection)</p>
                                </li>
                                <li>
                                - chickenpox <p className="text-sky-600">(viral infection)</p>
                                </li>
                                <li>
                                - shingles <p className="text-sky-600">(viral infection)</p>
                                </li>
                                <li>
                                - cellulitis <p className="text-sky-600">(viral infection)</p>
                                </li>
                                <li>
                                - impetigo <p className="text-sky-600">(viral infection)</p>
                                </li>
                            </ul>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}