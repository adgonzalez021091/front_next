import React from 'react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Header() {
    const router = useRouter();

    useEffect(() => {
        const token = router.query.token as string;
        if (token) {
            localStorage.setItem('jwt_token', token);
            router.push('/protected');  // Redirect to a protected page
        }
    }, [router]);
  return (
    <div>
      trabajando mas...
    </div>
  )
}
