import React from "react";
import styled from "styled-components";
import PageOne from "./Pages/PaginaInicial";
import PageTwo from "./Pages/PaginaSecundaria";

const Button = styled.button`
width: 105px;
height: 20px;
`

class App extends React.Component {

  state = {
    telaBase: false
  }

  primeiraTela = () => {
    this.setState({ telaBase: false })
  }

  segundaTela = () => {
    this.setState({ telaBase: true })
  }

  render() {

    let pagina = {}

    if (this.state.telaBase) {
      pagina = <PageTwo trocarTela={this.primeiraTela} />
    } else {
      pagina = <PageOne trocarTela={this.segundaTela} />
    }

    return (

        <div>
          {pagina}
        </div>

      )
  }
}

export default App