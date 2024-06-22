"use client"

import Transition from "@/components/animation/transition"


export default function Template({children}:{children:React.ReactNode}){
    return(
        <Transition>
            {children}
        </Transition>
    )
}

// https://www.youtube.com/watch?v=jVU3JD6qOBo