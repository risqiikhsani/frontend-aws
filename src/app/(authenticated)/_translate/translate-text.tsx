"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useApp } from "@/context/app"
import api from "@/lib/axios"
import { useState } from "react"

export default function TranslateText({ text }: { text: string }) {
    const { languageToTranslate } = useApp()
    const [translatedText, setTranslatedText] = useState("")
    const [loading,setLoading] = useState(false)

    const translate = async () => {
        setLoading(true)
        try {
            const response = await api.post("/translate/text", {
                text: text,
                target_lang: languageToTranslate
            })
            if (response.status === 200) {
                const result = response.data.TranslatedText
                setTranslatedText(result)
            } else {
                console.log("error translating text")
            }
        } catch (error) {
            console.log("error translating text")
        } finally{
            setLoading(false)
        }
    }


    return (
        <div className="flex flex-col  items-start mt-2">
            {/* <Button variant="link" onClick={translate} className="text-slate-800 text-xs dark:text-slate-200">see translation with AI translate</Button> */}
            <Badge className="cursor-pointer bg-cyan-500" onClick={translate} >see translation with AI translate</Badge>
            {loading && <p className="text-xs">generate text....</p>}
            {translatedText && (
                <div className="border-l-2 pl-2 border-cyan-300">
                    <p>{translatedText}</p>
                </div>
            )}
        </div>
    )
}