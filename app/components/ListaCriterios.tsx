"use client"
import React from 'react'
import { Suspense } from 'react'
import getDetalleSolicitud from "../api/ControllerSolicitud";
import { useQuery } from "@tanstack/react-query";
export default function ListaCriterios( params :{solicitud:string}) {
    const { data: serverData, isLoading, isError } = useQuery({ 
        queryKey: ['detalle_solicitud'], 
        queryFn: ()=>{return getDetalleSolicitud(params.solicitud)},
    });
    console.log("server data....", serverData)
    return <>
        {(isLoading) ? <div>loading...</div> :
            (isError) ? <div>Error!</div> :
                <Suspense>
                   {serverData?.map((criterio)=> {
                    return <div key={criterio.nombre}>
                        {criterio.nombre}
                    </div>
                   })}
                </Suspense>
        }</>
}
