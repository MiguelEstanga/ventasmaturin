import React from 'react'
import { Navegacion } from './component/Navegacion/Navegacion'
import { Productos } from './component/Productos/Productos'
import { Redes } from './component/Redes/Redes'
import { Wraper } from './component/Wraper/Wraper'
import  {   Routes, Route, Link } from "react-router-dom";
import { QuienesSomos } from './component/QuienesSomos/QuienesSomos'
import { Detalles } from './component/Detalles/Detalles'
import { GlobalStyle } from './component/style'
import { ComoComprar } from './component/ComoComprar/ComoComprar'
export const App = () => {
  function Principal() {
    return (
      <>
      
        <Wraper />
        <Productos />
        <Redes />
      </>
    )
  }
  return (
    <>
      <GlobalStyle/>
      <Navegacion />
      <Routes>
      
        <Route path='/' element={<Principal/>} />
        <Route  path='QuienesSomos' exact element={<QuienesSomos/> }/>
        <Route path='Detalles/:id'  element={ <Detalles/> } />
        <Route path='ComoComprar'  element={ <ComoComprar/> } />

      </Routes>

    </>
  )
}
