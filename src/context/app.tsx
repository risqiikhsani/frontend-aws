"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import queryString from "query-string";

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { toast } from "sonner";

export interface IAppContext {
    likes: any;
}

const AppContextDefaultValues: IAppContext = {
    likes: [],
};

export const AppContext = createContext<IAppContext>(AppContextDefaultValues);

interface Props {
    children: ReactNode;
}

export function AppHandler({ children }: Props) {

    const fetchUserLikes = async (): Promise<any> => {
        try {
            const response = await api.get("likes/mine");
            const data: any = response.data;
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    };

    // use object destructuring to assign data to likes , claude said data: likes
    const { data: likes, isLoading, error } = useQuery({
        queryKey: ["user-likes"],
        queryFn: fetchUserLikes,
    });

    if (error) {
        toast.error("Error fetching user likes");
    }

    const value = {
        likes: likes || [],
    };


    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    );
}

export function useApp() {
    return useContext(AppContext);
}

