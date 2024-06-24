'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function CustomLink({ href, children }: { href: string, children: React.ReactNode; }) {
    const pathname = usePathname()
    const isActive = pathname === href;

    return (
        // <Link href={href} className={`flex p-2 items-center justify-left rounded-lg text-sm ${isActive ? 'bg-blue-600 text-white font-bold' : ' text-zinc-950 hover:bg-gray-100 dark:text-slate-100 dark:hover:bg-blue-600'}`}>
        //     {children}
        // </Link>
        <Link
            href={href}
        // className={`flex p-2 items-center justify-left rounded-lg text-sm ${isActive ? ' text-blue-600 font-bold' : ' text-slate-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-blue-600'}`}
        >
            <motion.div
                className={`flex  p-2 items-center justify-left rounded-lg text-sm ${isActive ? 'text-blue-600 font-bold' : 'text-slate-600 hover:bg-blue-100 dark:text-slate-300 dark:hover:bg-blue-600'}`}
                whileHover={{ scale: 1.1 }} // Scale text on hover
                whileTap={{ scale: 0.95 }} // Slightly shrink text on tap/click
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {children}
            </motion.div>


        </Link>
    );
}
