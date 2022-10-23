import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Container, Descripcion, Imagenes } from './DetallesStyle'
import { useParams } from 'react-router-dom';

export const Detalles = ({ match }) => {
    const { id } = useParams()

    const [data, setData] = useState([])
    useEffect(function () {
        fetch(`https://servidorventacompu.herokuapp.com/CompuData/${id}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })

    }, [])
    return (
        <Container>

            {
                data && data.map(d => (
                    <Box key={d._id} >
                        <Imagenes>
                            <img src={d.Imagenprincipa} alt="" />
                        </Imagenes>



                        <Descripcion>
                            
                            <div className="descripcion">
                                {d.Descripcion}
                            </div>
                            <div className="precio">
                                {d.Precio}$
                            </div>
                            <div className="contactanos">

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
                        </Descripcion>

                    </Box>
                ))
            }
        </Container>
    )
}
