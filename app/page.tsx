"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function page() {
    const router = useRouter();

    useEffect(() => {
        const token = router.query.token as string;
        if (token) {
            localStorage.setItem('jwt_token', token);
            router.push('/protected');  // Redirect to a protected page
        }
    }, [router]);
    return <div>Referer: ok</div>
    
}
