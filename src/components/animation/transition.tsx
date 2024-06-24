"use client"
import { motion } from 'framer-motion'

export default function Transition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: 60, opacity: 0, rotateZ: -10 }} // No initial vertical movement
            animate={{ y: 0, opacity: 1, rotateZ: 0 }}  // No animate vertical movement
            transition={{
                duration: 2,
                ease: "easeInOut",
                rotateZ: {
                    type: "spring",
                    damping: 15,
                    // stiffness: 100,
                    // duration: 4
                }
            }}
        >
            {children}
        </motion.div>
    )
}

// "use client"
// import { motion } from 'framer-motion'
// import React from 'react'

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.9, rotate: -5 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       damping: 12,
//       stiffness: 100,
//     },
//   },
// }

// export default function Transition({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >

//         <motion.div variants={itemVariants}>
//           {children}
//         </motion.div>

//     </motion.div>
//   )
// }