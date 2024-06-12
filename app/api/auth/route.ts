
import { NextRequest, NextResponse } from 'next/server';
//import { headers } from 'next/headers'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


import axios from 'axios';


export async function GET(request:NextRequest): Promise<NextResponse>{
  
  const cookieStore = cookies()
  const token = cookieStore.get('jwt_token')
  const csrf = cookieStore.get('csrf_token')
  console.log(csrf)
  if (token) {

    redirect('/protected');
  } else {
    return NextResponse.json({ error: 'No token found.' })
  }
};


