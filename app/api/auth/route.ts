
import type { NextApiRequest, NextApiResponse } from 'next'
import { headers } from 'next/headers'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type ResponseData = {
  message: string
}

export async function GET(req: NextApiRequest,
  res: NextApiResponse<ResponseData>) {
    
    const headersList = headers()
  const token = headersList.get('authorization')
    if (token) {
      cookies().set('jwt_token', token)
        //localStorage.setItem('jwt_token', token);
        redirect('/protected');
    } else {
      return Response.json({ error: 'No token found' })
    }
};

 
