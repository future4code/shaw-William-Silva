import React from "react"
import styled from "styled-components"

const Main = styled.div`

`

export default class PageTwo extends React.Component {
    
    render() {
        
        return (
            <Main>

                <div>
                    <button onClick={this.props.trocarTela}>Trocar de Tela</button>
                </div>

                <div>
                    <input type="text" placeholder="Nome exato para busca" />
                    <button  >Salvar Edição</button>
                </div>

            </Main>
        )
    }
}

