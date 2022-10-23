import React from 'react'
import { Boton, Container, Imagen, Texto } from './WraperStyled'


export const Wraper = () => {
    

 
    return (
        <Container>

            <Texto>
                <div>
                    <h1>
                        Ventas de Laptos Maturin
                    </h1>
                    <span>encuentra tu laptop al mejor precio en toda Maturin</span>
                    <Boton>
                        <a href="#productos">Productos</a>
                        
                    </Boton>
                </div>
            </Texto>
            <Imagen>
                <img 
                    src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1666500330/owjljiksdby47thweimx.jpg" 
                    alt="portda" />
            </Imagen>
        </Container>
    )
}
