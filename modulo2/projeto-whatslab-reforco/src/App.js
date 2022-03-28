import React from "react";

class App extends React.Component {
  state = {
    mensagens: [
      {
        id: "",
        usuario: "",
        mensagem: ""
      }
    ],
    usuarioUm: "",
    mensagemUm: ""
  }

  onChangeUsuarioValor = (event) => {
    this.setState({ usuarioUm: event.target.value })
  }

  onChangeMensagemValor = (event) => {
    this.setState({ mensagemUm: event.target.value })
  }

  onClickEnviar = () => {
    const novoArray = {
      usuario: this.state.usuarioUm,
      mensagem: this.state.mensagemUm
    }
    /* this.state.mensagens.push(novoArray) */
    const novoArrayMensagem = [...this.state.mensagens, novoArray]
    this.setState({ mensagens: novoArrayMensagem, usuarioUm: "", mensagemUm: "" })
  }

  render() {
    const listaMensagem = this.state.mensagens.map((texto) => {
      return (
        <div key={texto.id} >
          <p><b>{texto.usuario}</b> {texto.mensagem}</p>
        </div>
      )
    })

    return (

      <div>
        <h2>WhatsLab</h2>
        {listaMensagem}
        <input type="text" placeholder="Usuário" value={this.state.usuarioUm} onChange={this.onChangeUsuarioValor} />
        <input type="text" placeholder="Mensagem" value={this.state.mensagemUm} onChange={this.onChangeMensagemValor} />
        <button onClick={this.onClickEnviar}>Enviar</button>
      </div>

    )
  }
}

export default App 