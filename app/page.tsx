import React from 'react'
import { headers } from 'next/headers'

export default function page() {
    const headersList = headers()
    const referer = headersList.get('referer')
    
    return <div>Referer: {referer}</div>
    
}
