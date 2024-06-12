import React from 'react'
import ListaCriterios from '../../components/ListaCriterios'
import Title from '../../components/Title'

export default function page({ params }: { params: { solicitud: string } }) {
  console.log("soliciiii",params)
  return (
    
    <div>
        <Title solicitud={params.solicitud}></Title>
        <ListaCriterios solicitud={params.solicitud}></ListaCriterios>
      
    </div>
  )
}
