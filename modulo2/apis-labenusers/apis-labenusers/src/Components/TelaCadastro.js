import axios from "axios";
import React from "react";

export default class TelaCadastro extends React.Component {

    state = {
        nome: "",
        email: ""
    }

    atualizaNome = (e) => {
        this.setState({ nome: e.target.value })
    }

    atualizaEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    cadastraUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "william-freitas-shaw"
            }
        })
            .then((res) => {
                alert("Usuário(a) cadastrado(a) com sucesso!");
                this.setState({ nome: "", email: "" })
            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }

    render() {

        return (

            <div>
                <button onClick={this.props.irParaLista} >Trocar de Tela</button>
                <h2>Cadastro</h2>
                <input value={this.state.nome} onChange={this.atualizaNome} type="text" placeholder="Nome" />
                <input value={this.state.email} onChange={this.atualizaEmail} type="email" placeholder="Email" />
                <button onClick={this.cadastraUsuario} >Criar Usuário</button>
            </div>

        )
    }
}