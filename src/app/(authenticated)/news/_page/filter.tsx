'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

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
                    <SelectItem value="us">US</SelectItem>
                    <SelectItem value="id">ID</SelectItem>
                </SelectContent>
            </Select>

            Selected Country: {country}
        </>
    )
}