"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"
import api from "@/lib/axios"
import { MessageChatBotBasicType } from "@/types/types"

const formSchema = z.object({
    text: z.string(),
})

export default function Chatbot() {
    const [chatHistory, setChatHistory] = useState([] as any)
    const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    })
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [chatHistory])

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const newMessage = { role: "user", content: values.text }
        const updatedChatHistory = [...chatHistory, newMessage]
        setChatHistory(updatedChatHistory)

        try {
            setLoading(true)
            const response = await api.post("/chatbot/kb", { question: values.text })

            if (response.status === 200) {
                const assistantResponse = response.data.answer
                const data = {
                    role: "assistant",
                    content: assistantResponse
                }
                setChatHistory([...updatedChatHistory, data])
                toast.success('Message received')
            } else {
                toast.warning('Failed to send chat')
            }
        } catch (error) {
            toast.warning('Something went wrong')
        } finally {
            setLoading(false)
            form.reset()
        }
    }

    return (
        <>
            <div className="p-4">
                <div className="p-4 sticky w-full h-20 rounded-lg border-double border-4 border-sky-500 flex gap-2 items-center justify-center text-center">
                    <p>Health4Us Chat Bot with KB</p>
                </div>
                <div className="md:px-6 py-4 min-h-96">
                    {chatHistory.map((message: MessageChatBotBasicType, index: number) => (
                        <div key={index} className={`mb-4 p-4 max-w-md rounded-lg shadow-xl border-2 ${message.role === "user" ? "bg-blue-500 text-white self-end ml-auto" : " whitespace-pre-wrap break-words"}`}>
                            <p>{message.content}</p>
                        </div>
                    ))}
                    {loading && <p className="text-gray-500">Getting message...</p>}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex mt-4 bottom-0 sticky w-full items-end">
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Textarea placeholder="Type your message" {...field} className="p-2 border rounded-lg" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className=" text-white py-2 px-4 rounded-lg ml-2">Send</Button>
                </form>
            </Form>
        </>


    )
}