"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"



export default function Page() {
    const [users, setUsers] = useState([
        {
            name: "Risqi Ikhsani",
            university: "UTDI",
            hobbies: "gaming, movies, music, cat, nature",
            description: "Hello I love to explore a new world in technology,I'm passionate in app development,data science and machine learning."
        },
        {
            name: "Alice Johnson",
            university: "Harvard University",
            hobbies: "reading, traveling, painting, coding",
            description: "Hi, I love exploring new cultures and learning new languages. I'm passionate about AI and machine learning."
        },
        {
            name: "Bob Smith",
            university: "Stanford University",
            hobbies: "hiking, photography, gaming, cooking",
            description: "Hey there, I'm an outdoor enthusiast who enjoys capturing nature through the lens. I have a keen interest in software development."
        },
        {
            name: "Charlie Brown",
            university: "MIT",
            hobbies: "cycling, music, astronomy, chess",
            description: "Hello, I'm fascinated by the cosmos and spend my free time stargazing. I enjoy developing algorithms and solving complex problems."
        },
        {
            name: "Dana White",
            university: "UC Berkeley",
            hobbies: "writing, yoga, dancing, painting",
            description: "Hi, I'm a creative individual who loves expressing through art. I'm passionate about UX/UI design and creating intuitive user interfaces."
        },
        {
            name: "Eve Green",
            university: "Princeton University",
            hobbies: "running, knitting, baking, gaming",
            description: "Hello, I enjoy staying active and trying out new recipes. I have a strong interest in cybersecurity and data analysis."
        },
        {
            name: "Frank Taylor",
            university: "University of Chicago",
            hobbies: "fishing, music, gaming, woodworking",
            description: "Hey, I love spending time in nature and crafting things with my hands. I'm passionate about full-stack development and cloud computing."
        },
    ])
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {users.map((a, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <Avatar className="w-40 h-40">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardTitle>{a.name}</CardTitle>
                            <p>{a.university}</p>
                        </CardHeader>
                        <CardContent>
                            Hobbies : 
                            <CardDescription>{a.hobbies}</CardDescription>
                            About me :
                            <CardDescription>
                                {a.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </>
    )
}