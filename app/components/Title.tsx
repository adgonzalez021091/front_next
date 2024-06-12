import React from 'react'

export default function Title(params :{solicitud:string}) {
    console.log("va a a imprimir params en title...",params)
  return (
    <div>
        {params.solicitud}
    </div>
  )
}
