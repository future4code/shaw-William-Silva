import React from "react";
import styled from "styled-components";
import ArmazenaPlaylist from "./Components/ArmazenaPlaylist";
import ExibePlaylist from "./Components/ExibePlaylist";


const Main = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background-color: #252525;
width: 100vw;
`

export default class App extends React.Component {

  render() {

    return (
      <Main>
        <ArmazenaPlaylist />
        <ExibePlaylist />
      </Main>
    );
  }
}
