"use server"
//import { useCookies } from 'next-client-cookies';
import { cookies } from 'next/headers'
import  CriterioSolicitud from "../domain/Solicitud"

async function getData(endpoint:String,params:String = "") {
    const cookieStore = cookies();//useCookies()
    const token = cookieStore.get('jwt_token');
    const tokenString = (token)?token.value:"";
    const csrfToken = cookieStore.get('csrftoken');
    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:"Bearer "+tokenString,
        "X-CSRFToken":(csrfToken)?csrfToken.value:""
      },
    };
    const parametros = (params != "")?"?"+params:"";
    const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}${parametros}`

    
    const response = fetch(url,options)
      .then((response) => {console.log("response",response); return response.json()})
      .catch((err) => console.error("error!!",err));
  
    return response;
  }
  
  export default async function getDetalleSolicitud(codigo_solicitud:String):Promise<CriterioSolicitud[]> {

    const data = await getData("detalle-solicitud",`codigo_solicitud=${codigo_solicitud}`);
    return data;
  }