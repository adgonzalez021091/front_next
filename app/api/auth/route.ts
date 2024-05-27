
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



export async function GET(request:NextRequest): Promise<NextResponse>{
    
    //const headersList = 
    //const searchParams = request.nextUrl.searchParams
  //const token = headers().get('jwt_token2')
  const cookieStore = cookies()
  const token = cookieStore.get('jwt_cookie')
  console.log(token)
  //const token = searchParams.get('authorization')
    if (token) {
      //cookies().set('jwt_token2', token)
        //localStorage.setItem('jwt_token', token);
        redirect('/protected');
    } else {
      return NextResponse.json({ error: 'No token found 2' })
    }
};

 
