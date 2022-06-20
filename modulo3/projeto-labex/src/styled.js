
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`
export const Title = styled.h1`
    color:  #0d002e;
    text-align: center;
    font-size: 5rem;
    
`
export const SubTitle = styled.p`
    color:  #0d002e;
    text-align: center;
    margin: 1rem 0 3rem 0;
`
export const Button = styled.button`
    background: #fad435;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    color:   #0d002e;
    font-weight: 700;
    border: 2px solid  #0d002e;
    :hover{
        background: #edac2a;
    }
`
export const Input = styled.input`
    margin: 0.5rem;
    width: 100%;
    -webkit-box-shadow: 1px 1px 2px 0px #000000aa; 
    border: 1px #0d002e40 solid;
    box-shadow:1px 1px 2px 0px #000000aa;
    padding: 0.75rem 1rem;
    :focus{
        outline: #0d002e 2px solid;
        border-radius: 2px;
    }

`
export const Select = styled.select`
    margin: 0.5rem;
    width: 100%;
    -webkit-box-shadow: 1px 1px 2px 0px #000000aa; 
    border: 1px #0d002e40 solid;
    box-shadow:1px 1px 2px 0px #000000aa;
    padding: 0.75rem 1rem;
    cursor: pointer;
    :focus{
        outline: #0d002e 2px solid;
        border-radius: 2px;
    }

`
export const SectionForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    flex-direction: column;
    padding: 2rem;
    max-width: 100%;
    width: 500px;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const ButtonSubmit = styled(Button)`
    align-self: center;
    margin: 1rem 0rem;
    font-size: 1.0rem;
    min-width: 100px;
`