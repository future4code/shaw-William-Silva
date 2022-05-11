import styled from "styled-components";

export const Main = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;

    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    @media screen and (max-device-width: 375px){
    text-align: center;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    width: 100vw;
    height: 100vh;
    }
`

export const Header = styled.div`
    width: 100vw;
    height: 10vh;

    background-color: black;

    @media screen and (max-device-width: 375px){
    width: 100vw;
    height: 10vh;

    display: flex;
    flex-direction: row;
    
    justify-content: space-around;
    align-items: center;

    background-color: white;

    border: 2px solid #F9B24E;

    img {
        width: 15%;
        height: 80%;
    }

    button {
        border-radius: 20px;
        border: 1px solid #F9B24E;
        
        color: #F9B24E;
        background-color: white;

        padding: 5px;
    }
    }
`

export const Body = styled.div`
    background-color: purple;

    width: 90vw;
    height: 90vh;

    @media screen and (max-device-width: 375px){
    width: 90vw;
    height: 90vh;

    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

    background-color: white;

    input {
        background-color: lightgray;

        width: 70%;
        height: 15%;
        min-height: 15%;

        border: hidden;
        border-radius: 15px;    

        margin: 5px;
    }

    button {
        color: white;
        background-image: linear-gradient(to right, #FF6489, #F9B24E);

        border-radius: 12px;
        border: hidden;

        width: 70%;
        height: 5%;
        
        margin: 5px;
    }
    }
`