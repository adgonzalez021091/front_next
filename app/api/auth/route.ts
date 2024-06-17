
import { NextRequest, NextResponse } from 'next/server';
//import { headers } from 'next/headers'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function GET(request:NextRequest): Promise<NextResponse>{
  const { searchParams } = new URL(request.url);

  const cookieStore = cookies()
  const token = cookieStore.get('jwt_token')
  const csrf = cookieStore.get('csrf_token')
  console.log(csrf)
  if (token) {
    switch(searchParams.get("accion")){
      case "tramitar":
        const solicitud = cookieStore.get('codigo_solicitud')
        redirect('/solicitudes/'+solicitud?.value);
        break;
      default:
        redirect('/protected');
    }
    
  } else {
    return NextResponse.json({ error: 'No token found.' })
  }
};


