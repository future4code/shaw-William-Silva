import styled from "styled-components";

export const Main = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;

    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(to right, #FF6489, #F9B24E);

    @media screen and (max-device-width: 375px){
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(#FF6489, #F9B24E);
    }
`

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

    width: 70vw;
    height: 30vh;

    background-color: white;

    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    border-top: 5px solid #fe7e01;
    border-right: 5px solid #fe7e01;
    border-left: 5px solid #fe7e01;

    border-color: linear-gradient(#FF6489, #F9B24E);

    img {
        width: 15%;
        height: 70%;
    }

    @media screen and (max-device-width: 375px){
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    
    width: 93vw;
    height: 33vh;

    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    background-color: white;

    border-top: 5px solid white;
    border-right: 5px solid white;
    border-left: 5px solid white;

    img {
        width: 30%;
        height: 50%;
    }
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 70vw;
    height: 30vh;

    background-color: white;

    border-right: 5px solid #fe7e01;
    border-left: 5px solid #fe7e01;

    input {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        width: 60%;
        height: 25%;

        margin: 20px;
        border: hidden;
    }

    @media screen and (max-device-width: 375px){
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 93vw;
    height: 30vh;

    background-color: white;

    border-right: 5px solid white;
    border-left: 5px solid white;

    input {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        width: 80%;
        height: 20%;

        margin: 10px;
        border: hidden;
    }
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 70vw;
    height: 30vh;

    background-color: white;

    border-bottom: 5px solid #fe7e01;
    border-right: 5px solid #fe7e01;
    border-left: 5px solid #fe7e01;

    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    button{
        width: 60%;
        height: 20%;

        margin: 15px;

        font-size: larger;
    }

    #continue-button {
        border: hidden;
        border-radius: 20px;

        color: white;
        background-image: linear-gradient(to right, #FF6489, #F9B24E);

        :hover {
            cursor: pointer;
            transform: scale(1.01);
        }
    }

    #create-button {
        border-radius: 20px;
        border: 1px solid #fe7e01;
        
        color: #fe7e01;
        background-color: white;

        :hover {
            cursor: pointer;
            transform: scale(1.01);
        }
    }

    @media screen and (max-device-width: 375px){
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 93vw;
    height: 33vh;

    background-color: white;

    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    border-bottom: 5px solid white;
    border-right: 5px solid white;
    border-left: 5px solid white;

    button{
        width: 80%;
        height: 20%;

        margin: 15px;
    }

    #continue-button {
        border: hidden;
        border-radius: 20px;

        color: white;
        background-image: linear-gradient(to right, #FF6489, #F9B24E);
    }

    #create-button {
        border-radius: 20px;
        border: 1px solid #F9B24E;
        
        color: #F9B24E;
        background-color: white;
    }
    }
`