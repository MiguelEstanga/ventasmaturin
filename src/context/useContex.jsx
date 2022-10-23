
import  React ,{ createContext , useState } from 'react'
import { useContext } from 'react'

const Contexto = createContext()
export function useContexto(){
    return useContext(Contexto)
}

export default function Context({children}) {
    const [buscar , setBuscar] = useState('')
  return (
    
    <Contexto.Provider value={{
        buscar,
        setBuscar
    }}>
        {children}
    </Contexto.Provider>
  )
}
