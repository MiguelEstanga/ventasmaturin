import React from 'react'
import { BoxRedes, Container, Texto } from './RedesStyled'

export const Redes = () => {
    return (
        <Container id='redes'>
            <Texto>
                Compartarnos en Redes sociales Para llegar a mas personas
            </Texto>
            <BoxRedes>
                <div>
                    <a href="https://api.whatsapp.com/send/?text=https://ventasmaturin.netlify.app/" target="_black">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                </div>
                <div>
                    <a href="https://facebook.com/share.php?u=https://ventasmaturin.netlify.app/" target="_black">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>

            </BoxRedes>
            <Texto>
                Este sitio web fue diseñado por Miguel Estanga

            </Texto>
            <Texto>
                <div>
                    <a href="https://miguelestanga.netlify.app/" target='_black' >puedes ver mi portafolio en este enlace</a>
                </div>
            </Texto>
        </Container>
    )
}
