"use client"

import Transition from "@/components/animation/transition"


export default function Template({children}:{children:React.ReactNode}){
    return(
        <Transition>
            {children}
        </Transition>
    )
}