'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function CustomLink({ href, children }:{ href:string, children:React.ReactNode; }) {
    const pathname = usePathname()
    const isActive = pathname === href;

    return (
        <Link href={href} className={`flex p-2 items-center justify-left rounded-lg text-sm ${isActive ? 'bg-blue-500 text-white' : ' text-zinc-950 hover:bg-gray-200 dark:text-slate-100 dark:hover:bg-blue-500'}`}>
            {children}
        </Link>
    );
}
