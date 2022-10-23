import React from 'react'
import { useEffect, useRef } from 'react'
import { Box, Container, Ul } from './NavegacionStyled'
import { Link } from 'react-router-dom'
export const Navegacion = () => {
    const navegacion = useRef()
    const burger = useRef()
    const ul = useRef()



    function handle(e) {
        burger.current.classList.toggle('active')
        ul.current.classList.toggle('active')

    }
    useEffect(function () {
        function change(e) {
            if (window.scrollY > 0) {
                navegacion.current.classList.add('active')
            }
            if (window.scrollY === 0) {
                navegacion.current.classList.remove('active')
            }

        }

        window.addEventListener('scroll', change)

        return () => window.removeEventListener('scroll', change)
    }, [])
    return (
        <Container ref={navegacion}>
            <Box>
                Ventas Maturin
            </Box>
            <Ul ref={ul}>
                <li>
                    <Link to="./" onClick={handle}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <a href="#productos" onClick={handle}>
                        Productos
                    </a>
                </li>
                <li>
                    <a href="#redes" onClick={handle}>
                        Compartenos
                    </a>
                </li>
                <li>
                    <Link to="/QuienesSomos" onClick={handle}>
                        Quienes Somos
                    </Link>
                </li>
                <li>
                    <Link to="/ComoComprar" onClick={handle}>
                       Como Comprar
                    </Link>
                </li>
            </Ul>
            <div className="burger" ref={burger} onClick={handle}>
                <div className='rayas'></div>
                <div className='rayas'></div>
                <div className='rayas'></div>
            </div>
        </Container>
    )
}
