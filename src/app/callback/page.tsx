'use client';
import Cookies from "js-cookie";
import { useAuth } from '@/context/auth';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

const parseHashParams = (url: string) => {
    if (url) {
        const parsedUrl = new URL(url);
        const hash = parsedUrl.hash.slice(1); // Remove the leading '#'
        return queryString.parse(hash);
    }
    return {};
};

export default function Page() {
    const [isClient, setIsClient] = useState(false);
    const { fetchData } = useAuth()

    useEffect(() => {
        setIsClient(true);
    }, []);

    const url = typeof window !== 'undefined' ? window.location.href : '';
    const { access_token, id_token, expires_in } = parseHashParams(url) as any;
    if (access_token) {
        console.log('access_token', access_token)
        console.log('id_token', id_token)
        console.log('expires_in', expires_in)
        // Save the access token to a cookie
        const expiresDate = new Date(Date.now() + expires_in * 1000);
        Cookies.set('accesstoken', access_token, { expires: expiresDate });
        // api.defaults.headers.Authorization = `Bearer ${access_token}`
        fetchData()
    }

    return (
        <>
            <div className="my-40 flex-col">
                <p>callback</p>
            </div>
        </>
    );
}