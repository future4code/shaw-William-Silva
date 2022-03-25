import './App.css';

const pessoas = [
  {
    nome: 'Wiliam'
  },

  {
    nome: 'Gabriel'
  },

  {
    nome: 'Paula'
  }
]


function App() {
  return (
    <div className="App">
      <div className="caixa-whatslab" >

      </div>

      <div className="caixa-input">
        <input type='text' name='usuario' id='usuario' />
        <input type='text' name='mensagem' id='mensagem' />
        <input type='submit' name='enviar' id='enviar' />
      </div>
    </div>
  );
}

export default App;
