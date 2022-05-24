import React from "react";
import { createGlobalStyle } from "styled-components";
import RouteList from "./routes/Route";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <RouteList />
    </div>
  );
}

export default App;
