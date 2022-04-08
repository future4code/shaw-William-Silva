import React from "react";
import styled from "styled-components";
import TelaCadastro from "./Components/TelaCadastro";
import TelaListaUsuario from "./Components/TelaListaUsuario";

const Main = styled.div`

`

export default class App extends React.Component {

  state = {
    tela: "cadastro"
  }

  trocarTela = () => {
    switch (this.state.tela) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ tela: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ tela: "lista" })
  }

  render() {

    return (

      <Main>
        {this.trocarTela()}
      </Main>

    )
  }
}