import React from "react";
import ArmazenaPlaylist from "./Components/ArmazenaPlaylist";
import ExibePlaylist from "./Components/ExibePlaylist";
import styled from "styled-components";

const Main = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background-color: #ca164f;
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
