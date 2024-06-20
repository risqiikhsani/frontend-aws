"use client";

import { motion } from "framer-motion";

export default function TransitionRightToLeft({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
            >
                {children}
            </motion.div>
        </>
    );
}
