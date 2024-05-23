
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic';


export async function GET(): Promise<NextResponse>{
    
    const headersList = headers()
  const token = headersList.get('authorization')
    if (token) {
      cookies().set('jwt_token', token)
        //localStorage.setItem('jwt_token', token);
        redirect('/protected');
    } else {
      return NextResponse.json({ error: 'No token found' })
    }
};

 