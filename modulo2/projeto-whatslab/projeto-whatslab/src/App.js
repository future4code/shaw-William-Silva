import './App.css';
import React from "react"

class App extends React.Component {
  state = {
    nome: "",
    mensagem: "",
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ mensagem: event.target.value });
  };

  enviarInputs = () => {
    console.log("nome:", this.state.nome);
    console.log("mensagem:", this.state.mensagem);
    this.setState({ nome: "", mensagem: "" });
  };

  onClickMensagem = () => {
    const novaMensagem = {
      nome: this.state.nome,
      mensagem: this.state.mensagem,
    };

    const novoArray = [...this.state.postagem];
    novoArray.push(novaMensagem);

    this.setState({ mensagem: novoArray });
  };

  render() {
    return (
      <div className='App'>
        <div className='caixa-whatslab' >
          
        </div>

        <div className='caixa-input'>
          <input
            id='usuario'
            type="text"
            placeholder='Usuário'
            onChange={this.onChangeNome}
            value={this.state.nome}
          />

          <input
            id='mensagem'
            type="text"
            placeholder='Mensagem'
            onChange={this.onChangeMensagem}
            value={this.state.mensagem}
          />

          <button id='enviar' onClick={this.enviarInputs}>Enviar</button>
        </div>
      </div >
    );
  }
}

export default App;
