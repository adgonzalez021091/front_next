import React from 'react'
import { useSearchParams } from 'next/navigation'

import { useEffect } from 'react';
export default function Header() {
    const searchParams = useSearchParams()
 
  
 
    useEffect(() => {
        const token = searchParams?.get('token')
        if (token) {
            localStorage.setItem('jwt_token', token);
            
        }
    }, [searchParams]);
  return (
    <div>
      trabajando mas...
    </div>
  )
}
