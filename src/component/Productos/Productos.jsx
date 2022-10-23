import React from 'react'
import { Boton } from '../Wraper/WraperStyled'
import { Box, Container, Detalles, Imagen, Titulo } from './ProductosStyled'

import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Texto } from '../Redes/RedesStyled'

export const Productos = () => {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch('https://servidorventacompu.herokuapp.com/CompuData')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })

    }, [])
    return (
        <>
            <Texto
                b='#D0D3D4'
                color='#000'
            >
                Productos
            </Texto>
            <Container id='productos'>

                {

                    data && data?.map(d => (


                        <Box key={d._id}>
                            <Titulo>
                                <div className="disponibilidad">
                                   
                                    {d.tipo == 0? 'Disponible en Maturin':'Disponible por Encargo'}<br/>
                                    {d.Nombre}
                                </div>
                             
                                <div className="precio">
                                    {d.Precio}$
                                </div>
                            </Titulo>
                            <Imagen>
                                <img src={d.Imagenprincipa} alt="laptop" />
                            </Imagen>
                            <Detalles>
                                <Boton
                                    w="150px"
                                    h="70px"

                                >
                                    <Link
                                        to={`Detalles/${d._id}`}

                                    >
                                        Detalles
                                    </Link>
                                </Boton>
                                <div className="contacto">

                                    <div>
                                        <a href={`https://wa.me/58${d.ws}`} target="_black">
                                            <ion-icon name="logo-whatsapp"></ion-icon>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={d.Faceboock} target="_black">
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </div>


                                </div>

                            </Detalles>

                        </Box>
                    ))
                }
            </Container>
        </>
    )
}
