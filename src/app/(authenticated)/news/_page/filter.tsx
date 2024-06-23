'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const countries = [
    { name: "United Arab Emirates", value: "ae" },
    { name: "Argentina", value: "ar" },
    { name: "Austria", value: "at" },
    { name: "Australia", value: "au" },
    { name: "Belgium", value: "be" },
    { name: "Bulgaria", value: "bg" },
    { name: "Brazil", value: "br" },
    { name: "Canada", value: "ca" },
    { name: "Switzerland", value: "ch" },
    { name: "China", value: "cn" },
    { name: "Colombia", value: "co" },
    { name: "Cuba", value: "cu" },
    { name: "Czech Republic", value: "cz" },
    { name: "Germany", value: "de" },
    { name: "Egypt", value: "eg" },
    { name: "France", value: "fr" },
    { name: "United Kingdom", value: "gb" },
    { name: "Greece", value: "gr" },
    { name: "Hong Kong", value: "hk" },
    { name: "Hungary", value: "hu" },
    { name: "Indonesia", value: "id" },
    { name: "Ireland", value: "ie" },
    { name: "Israel", value: "il" },
    { name: "India", value: "in" },
    { name: "Italy", value: "it" },
    { name: "Japan", value: "jp" },
    { name: "South Korea", value: "kr" },
    { name: "Lithuania", value: "lt" },
    { name: "Latvia", value: "lv" },
    { name: "Morocco", value: "ma" },
    { name: "Mexico", value: "mx" },
    { name: "Malaysia", value: "my" },
    { name: "Nigeria", value: "ng" },
    { name: "Netherlands", value: "nl" },
    { name: "Norway", value: "no" },
    { name: "New Zealand", value: "nz" },
    { name: "Philippines", value: "ph" },
    { name: "Poland", value: "pl" },
    { name: "Portugal", value: "pt" },
    { name: "Romania", value: "ro" },
    { name: "Serbia", value: "rs" },
    { name: "Russia", value: "ru" },
    { name: "Saudi Arabia", value: "sa" },
    { name: "Sweden", value: "se" },
    { name: "Singapore", value: "sg" },
    { name: "Slovenia", value: "si" },
    { name: "Slovakia", value: "sk" },
    { name: "Thailand", value: "th" },
    { name: "Turkey", value: "tr" },
    { name: "Taiwan", value: "tw" },
    { name: "Ukraine", value: "ua" },
    { name: "United States", value: "us" },
    { name: "Venezuela", value: "ve" },
    { name: "South Africa", value: "za" }
];


export default function Filter() {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const country = searchParams.get('country') || '';

    function updateSorting(newCountry: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (newCountry) {
            params.set('country', newCountry);
        } else {
            params.delete('country');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            <Select
                value={country}
                onValueChange={updateSorting}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                    {
                        countries.map((country,i) => (
                            <SelectItem key={i} value={country.value}>{country.name}</SelectItem>
                        ))
                    }
                    {/* <SelectItem value="us">US</SelectItem>
                    <SelectItem value="id">ID</SelectItem> */}
                </SelectContent>
            </Select>
        </>
    )
}