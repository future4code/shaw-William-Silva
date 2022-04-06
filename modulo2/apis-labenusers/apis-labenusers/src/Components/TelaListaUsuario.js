import axios from "axios";
import React from "react";
import styled from "styled-components";

const CaixaUsuarios = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "william-freitas-shaw"
            }
        })
            .then((res) => {
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente!");
            })
    }

    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "william-freitas-shaw"
            }
        })
            .then((res) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    }

    render() {

        const listaDeUsuarios = this.state.usuarios.map((usuario) => {
            return (
                <CaixaUsuarios key={usuario.id}>
                    {usuario.name}
                    <button onClick={() => this.deletaUsuario(usuario.id)} >X</button>
                </CaixaUsuarios>
            )
        })

        return (

            <div>
                <button onClick={this.props.irParaCadastro} >Trocar de Tela</button>
                <h2>Lista de Usuários</h2>
                {listaDeUsuarios}
            </div>

        )
    }
}