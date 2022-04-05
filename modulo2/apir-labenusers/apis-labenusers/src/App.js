import React from "react";
import styled from "styled-components";

const Button = styled.button`
width: 105px;
height: 20px;
`

class App extends React.Component {
  state = {
    registro: [
      {
        id: "",
        nome: "",
        email: ""
      }
    ],
    nomeBase: "",
    emailBase: ""
  }


  updateNome = (e) => {
    console.log("Nome foi atualizado");
    this.setState({ nomeBase: e.target.value })
  }

  updateEmail = (e) => {
    console.log("Email foi atualizado");
    this.setState({ emailBase: e.target.value })
  }

  criaUsuario = (e) => {
    console.log("Fui clicado");
    const novoUsuario = {
      nome: this.state.nomeBase,
      email: this.state.emailBase
    }
    const novoArrayUsuario = [...this.state.registro, novoUsuario]
    this.setState({ registro: novoArrayUsuario, nomeBase: "", emailBase: "" })
  }

  render() {

    return (

      <div>
        <Button>Trocar de Tela</Button>
        <input type="text" placeholder="Nome" onChange={this.updateNome} value={this.state.nomeBase} />
        <input type="email" placeholder="Email" onChange={this.updateEmail} value={this.state.emailBase} />
        <Button onClick={this.criaUsuario} >Criar Usuário</Button>
      </div>
    )
  }
}

export default App