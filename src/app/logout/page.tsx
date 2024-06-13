"use client"

import { useAuth } from "@/context/auth"
import { useEffect } from "react"

export default function Page(){
    const {logoutUser} = useAuth()

    useEffect(() => {
        logoutUser()
    },[])

    return(
        <>
        logout
        </>
    )
}