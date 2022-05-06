import React, { useState, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
import axios from "axios";

//DIV GLOBAL  
const GlobalStyle = createGlobalStyle`
	* {
		margin: 0; 
		padding: 0; 
		box-sizing: border-box; 
    }
`

//DIV BODY
const Main = styled.div`
margin: 1px;
padding: 10px;
border: 1px solid black;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: #272932;

min-height: 100vh;
min-width: 100vw;
max-height: 100vh;
max-width: 100vw;
`

//DIV ASTROMATCHBOX
const AstroMatchBox = styled.div`
margin: 1px;
border: 5px solid;

flex-direction: column;
justify-content: center;
align-items: center;

background-color: #FFFFFF;
border-color: yellow;

min-height: 65vh;
max-height: 65vh;
min-width: 20vw;
max-width: 20vw;
`

//HEADER ASTROMATCH
const Header = styled.div`
background-color: red;
min-height: 5vh;
max-height: 5vh;
`

//BODY ASTROMATCH
const BodyAstroMatch = styled.div`
min-height: 59vh;
max-height: 59vh;

background-color: blue;
`

export default function App() {

  //Transição de telas aqui!

  return (
    <Main>
      <GlobalStyle />
      <AstroMatchBox>

        <Header>
          <button>LOGO HEADER</button>
        </Header>

        <BodyAstroMatch>
          <p>CONTAINER FOTOS</p>
          <p>CONTAINER BOTÕES</p>
        </BodyAstroMatch>

      </AstroMatchBox>
    </Main>
  );
}
