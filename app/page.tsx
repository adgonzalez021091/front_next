"use client"
import React from 'react'
import Header from './Header';
import { Suspense } from 'react'


export default function page() {
    
    return <div>
        header...<Suspense><Header></Header></Suspense></div>
    
}
