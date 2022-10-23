import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    width: 100%;
    height: 100vh;
    background: linear-gradient(  180deg , #ECF0F1 , #F7F9F9);
    grid-template-columns: repeat(2 , 1fr );
    position: relative;
    margin-top: 60px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(1,1fr);
        grid-auto-flow: dense;
    }

`
export const Imagen = styled.div`
    width: 70%;
    height: 80%;
    
    margin: auto;
    img{
        height:100% ;
        width: 100%;
    }
`
export const Texto = styled.div`
    width: 100%;
    height: 100%;
    
    display: grid;
    place-items: center;

    div{
        

        h1{
           
            font-weight: 900;
            color: #F1C40F;
            font-size: 50px;
        }
        span{
            
            display: block;
            
            width: 100%;
            color: black;
            font-size: 20px;
        }
    }
    @media (max-width: 900px) {
        text-align: center;
    }
`

export const Boton = styled.div`
    border: 1px blue;
    width: ${ ({w = '200px'} ) => w } ;
    height:${ ({ h = '50px' }) => h };
    border-radius: 5px;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 20px;
    cursor: pointer;
    transition: all 300ms ;
    background: #0A7E62;
    color: #F7F9F9;
    display: grid ;
    place-items: center;
    a{
        text-decoration: none;
        color: #fff;
    }
    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 900px) {
       margin: auto;
       margin-top: 20px;
    }
`