import styled from "styled-components";

export const Main = styled.div`
min-width: 100vw;
min-height: 100vh;

display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
`

export const Form = styled.div`
display: flex;
flex-direction: column;

input {
    min-width: 30vw;
    min-height: 5vh;

    border-radius: 10px;
    /* border-color: green; */

    margin: 5px;
}

select {
    min-width: 30vw;
    min-height: 5vh;

    border-radius: 10px;
    /* border-color: green; */

    margin: 5px;
}
`