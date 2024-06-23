"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
    const [users, setUsers] = useState([
        {
            name: "Risqi Ikhsani",
            university: "Universitas Teknologi Digital Indonesia",
        },
        {
            name: "Zaki Nedhiansyah",
            university: "Universitas Teknologi Digital Indonesia"
        },
        {
            name: "Wahyu Purnomo",
            university: "Universitas Muhammadiyah Sumatera Utara",
        },
        {
            name: "M. Koirul Nizam",
            university: "Universitas Negeri Surabaya",
        },
        {
            name: "Krisna Aditya",
            university: "Universitas Muhammadiyah Sumatera Utara"
        },
        {
            name: "Nabilah Alfia Budi Putri",
            university: "Institut Teknologi dan Bisnis Ahmad Dahlan"
        },
        {
            name: "Mohammad Sanggarma Dharma Wijaya",
            university: "Politeknik Elektronika Negeri Surabaya"
        }

    ])
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl">Contributors :</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>University</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((a, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{a.name}</TableCell>
                                <TableCell>{a.university}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
                {/* {users.map((a, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{a.name}</CardTitle>
                            <p>{a.university}</p>
                        </CardHeader>

                    </Card>
                ))} */}
                <Separator />
                <h1 className="font-bold text-2xl"> Presented by : </h1>
                <Card>
                    <CardHeader>
                        
                            <Button variant="link">
                            <Link href="https://www.timcorp-academy.com/">TIMCorp-Academy by PT TIM</Link>
                            </Button>
                         
                    </CardHeader>

                    <div className="bg-slate-200 m-10">
                        <Image src="/pictures/TIMacademy.png" alt="image" width={600} height={600} priority loading="eager" className="rounded-md mx-auto my-2" />

                    </div>
                </Card>
                <Separator />
                <h1 className="font-bold text-2xl">Final cloud design</h1>
                <Image src="/pictures/cloud design.png" alt="image" width={1000} height={1000} priority loading="eager" className="rounded-md mx-auto my-2" />

            </div>

        </>
    )
}