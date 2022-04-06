import React from "react"
import styled from "styled-components"

const Main = styled.div`

`

export default class PageOne extends React.Component {

    state = {
        registro: [
            {
                id: "",
                nome: "",
                email: ""
            }
        ],
        nomeBase: "",
        emailBase: "",
    }

    updateNome = (e) => {
        this.setState({ nomeBase: e.target.value })
    }

    updateEmail = (e) => {
        this.setState({ emailBase: e.target.value })
    }

    criaUsuario = () => {
        const novoUsuario = {
            nome: this.state.nomeBase,
            email: this.state.emailBase
        }
        const novoArrayUsuario = [...this.state.registro, novoUsuario]
        this.setState({ registro: novoArrayUsuario, nomeBase: "", emailBase: "" })
    }

    render() {

        return (
            <Main>
                <button onClick={this.props.trocarTela}>Trocar de Tela</button>
                <input type="text" placeholder="Nome" onChange={this.updateNome} value={this.state.nomeBase} />
                <input type="email" placeholder="Email" onChange={this.updateEmail} value={this.state.emailBase} />
                <button onClick={this.criaUsuario} >Criar Usuário</button>
            </Main>
        )
    }
}