import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 10px;
    background: #1B4F72;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        height: 150vh;
    }
`

export const Box = styled.div`
    width: 80%;
    height: 80%;
    background: #FDFEFE;
    border-radius: 5px;
    padding: 10px;
    display: grid;
    grid-template-columns: 65% 30%;
    gap: 10px;

    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        width: 100%;
    }
`

export const Imagenes = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`
export const Descripcion = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0,0,0,.6);
    z-index: 2;
    padding: 2px;
    .contactanos{
        display: flex;
        gap: 10px;
       
        justify-content: center;
        padding: 4px;
        div{
         
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: inline-block;
            a{
                text-decoration: none;
                color: #1C2833;
            }
            ion-icon{
                font-size: 50px;
                text-align: center;
            }
        }
    }
    .descripcion{
        font-size: 20px;
        font-weight: 200;
        padding: 10px;
    }
    .precio{
        color: #196F3D;
        font-size: 40px;
        display: flex;
        
    }

`