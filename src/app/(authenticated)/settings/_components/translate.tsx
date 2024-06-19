"use client"

import * as React from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useApp } from "@/context/app";


const languages = [
    { value: "af", label: "Afrikaans" },
    { value: "sq", label: "Albanian" },
    { value: "am", label: "Amharic" },
    { value: "ar", label: "Arabic" },
    { value: "hy", label: "Armenian" },
    { value: "az", label: "Azerbaijani" },
    { value: "bn", label: "Bengali" },
    { value: "bs", label: "Bosnian" },
    { value: "bg", label: "Bulgarian" },
    { value: "ca", label: "Catalan" },
    { value: "zh", label: "Chinese (Simplified)" },
    { value: "zh-TW", label: "Chinese (Traditional)" },
    { value: "hr", label: "Croatian" },
    { value: "cs", label: "Czech" },
    { value: "da", label: "Danish" },
    { value: "fa-AF", label: "Dari" },
    { value: "nl", label: "Dutch" },
    { value: "en", label: "English" },
    { value: "et", label: "Estonian" },
    { value: "fa", label: "Farsi (Persian)" },
    { value: "tl", label: "Filipino, Tagalog" },
    { value: "fi", label: "Finnish" },
    { value: "fr", label: "French" },
    { value: "fr-CA", label: "French (Canada)" },
    { value: "ka", label: "Georgian" },
    { value: "de", label: "German" },
    { value: "el", label: "Greek" },
    { value: "gu", label: "Gujarati" },
    { value: "ht", label: "Haitian Creole" },
    { value: "ha", label: "Hausa" },
    { value: "he", label: "Hebrew" },
    { value: "hi", label: "Hindi" },
    { value: "hu", label: "Hungarian" },
    { value: "is", label: "Icelandic" },
    { value: "id", label: "Indonesian" },
    { value: "ga", label: "Irish" },
    { value: "it", label: "Italian" },
    { value: "ja", label: "Japanese" },
    { value: "kn", label: "Kannada" },
    { value: "kk", label: "Kazakh" },
    { value: "ko", label: "Korean" },
    { value: "lv", label: "Latvian" },
    { value: "lt", label: "Lithuanian" },
    { value: "mk", label: "Macedonian" },
    { value: "ms", label: "Malay" },
    { value: "ml", label: "Malayalam" },
    { value: "mt", label: "Maltese" },
    { value: "mr", label: "Marathi" },
    { value: "mn", label: "Mongolian" },
    { value: "no", label: "Norwegian (Bokmål)" },
    { value: "ps", label: "Pashto" },
    { value: "pl", label: "Polish" },
    { value: "pt", label: "Portuguese (Brazil)" },
    { value: "pt-PT", label: "Portuguese (Portugal)" },
    { value: "pa", label: "Punjabi" },
    { value: "ro", label: "Romanian" },
    { value: "ru", label: "Russian" },
    { value: "sr", label: "Serbian" },
    { value: "si", label: "Sinhala" },
    { value: "sk", label: "Slovak" },
    { value: "sl", label: "Slovenian" },
    { value: "so", label: "Somali" },
    { value: "es", label: "Spanish" },
    { value: "es-MX", label: "Spanish (Mexico)" },
    { value: "sw", label: "Swahili" },
    { value: "sv", label: "Swedish" },
    { value: "ta", label: "Tamil" },
    { value: "te", label: "Telugu" },
    { value: "th", label: "Thai" },
    { value: "tr", label: "Turkish" },
    { value: "uk", label: "Ukrainian" },
    { value: "ur", label: "Urdu" },
    { value: "uz", label: "Uzbek" },
    { value: "vi", label: "Vietnamese" },
    { value: "cy", label: "Welsh" }
];

export default function Translate() {
    const {languageToTranslate,setLanguageToTranslate} = useApp()
    const [open, setOpen] = React.useState(false);
    // const [value, setValue] = React.useState("en");

    React.useEffect(() => {
        console.log(languageToTranslate)
    },[languageToTranslate])

    return (
        <div className="flex">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        {languageToTranslate
                            ? languages.find((lang) => lang.value === languageToTranslate)?.label
                            : "Select language..."}
                        <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                <ScrollArea className="h-[200px]">
                <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                            {languages.map((lang) => (
                                <CommandItem
                                    key={lang.value}
                                    value={lang.value}
                                    onSelect={(currentValue) => {
                                        setLanguageToTranslate(currentValue === languageToTranslate ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            languageToTranslate === lang.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {lang.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </ScrollArea>

                </PopoverContent>
            </Popover>
        </div>
    );
}
