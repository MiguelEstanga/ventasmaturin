import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background: #D0D3D4;
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(auto-fill,minmax(min(600px, 50%) , 2fr ));
    padding: 10px;
    gap: 10px;
`

export const Box = styled.div`
    width:500px;
    height: 600px;
    margin-top: 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,.7);
    margin: auto;
    display: grid;
    grid-template-rows: 20% 50% 30%;
    background-color: #fff;

    @media (max-width: 900px) {
        width: 100%;
    }
`
export const Titulo = styled.div`
    width: 100%;
    height:40px ;
    font-size: 30px;
    font-weight: 600;
   
    display: grid;
    place-items: center;
    .disponibilidad{
        font-size: 20px;
        color: #D35400;
        text-align: center;
        transition: all linear 3s;
        transform-origin: left;
        animation: texto 2s infinite;

        @keyframes texto {
            0%{
                text-shadow: 0 0 10px #D35400 , 0 0 20px #D35400 , 0 0 40px #D35400 , 0 0 50px #D35400;

            }   
            100%{
                text-shadow: 0;
            }
        }
    }
    .precio{
        color: #28B463;
        font-size: 30px;
        font-weight: 900;
    }
`
export const Imagen = styled.div`
    width: 100%;
    height: 100%;
    background: black;
        transition: all 200ms linear;
    img{
        width: 100%;
        height: 100%;
    }
   &:hover{
    transform: scale(1.1);
   }
`

export const Detalles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    a{
        color: #fff;
        text-decoration: none;
    }
    .contacto{
       
        display: flex;
        gap: 10px;
        justify-content: center;
        padding: 4px;
        div{
            border-radius: 5px;
            width: 140px;
            height: 60px;
            background-color: #3498DB;
            
            display: inline-block;

            &:nth-child(1){
                background-color: #28B463;
            }
            a{
                text-decoration: none;
                color: #1C2833;
                
                width: 100%;
                height: 100%;
                padding: 3px 0;
            }
            ion-icon{
                font-size: 50px;
                color: #fff;
                text-align: center;
                width: 100%;
            }
        }
    }
`
