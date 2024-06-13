"use client"

import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ConvertTime } from "@/lib/time";

const fetchNotifications = async () => {
    const res = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notifications`);
    return res.data;
};

export default function Notifications() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['notifications'],
        queryFn: fetchNotifications,
    });

    useEffect(() => {
        if (data) {
            console.log("notifications...");
            console.log(data);
        }
    }, [data]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>An error occurred: {error.message}</p>;
    }

    return (
        <>
            <p>Notifications</p>
            {data && data.map((a: any) => (
                <Card key={a.id} className="my-2 border-double border-4 border-sky-500">
                    <CardHeader className="text-right">
                        <p>{ConvertTime(a.time_creation)}</p>
                    </CardHeader>
                    <CardContent>
                        {a.type == "like" && (
                            <>
                                <p>User</p>
                                <p className="text-cyan-400 text-xs">{a.actor}</p>
                                <p>liked your post or comment</p>
                                <p className="text-cyan-400 text-xs">{a.associated_id}</p>
                            </>

                        )}
                    </CardContent>

                </Card>
            ))}
        </>
    );
}
