"use client"
import { toast } from 'sonner';


import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { CopyIcon } from 'lucide-react';
export default function TextWithCopy({ text }: { text: string }) {

    const onCopy = () => {
        navigator.clipboard.writeText(text)
        toast.success("Result copied")
    }

    return (
        <>
            <div className="flex items-center gap-4 border-2 border-cyan-300 p-2 rounded-md">
                <p className="font-bold">{text}</p>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={onCopy} >
                                <CopyIcon className="w-4 h-4 mx-2" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Copy</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

        </>
    )
}