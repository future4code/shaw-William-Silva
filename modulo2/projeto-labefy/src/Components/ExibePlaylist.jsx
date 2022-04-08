import React from "react"
import axios from "axios"
import styled from "styled-components"

const Main = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: column;
width: 80%;
justify-content: center;
text-align: center;
align-items: center;
background-color: #FFFFFF;
`

const CaixaPlaylists = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 300px;
`

var infoNaTela = false

export default class ExibePlaylist extends React.Component {

    state = {
        listaPlaylist: []
    }

    componentDidMount() {
        this.pegaPlaylist()
    }

    pegaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "william-freitas-shaw"
            }
        })
            .then((res) => {
                this.setState({ listaPlaylist: res.data.result.list })
                infoNaTela = !infoNaTela
            })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente!")
            })
    }

    deletaPlaylist = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"

        axios.del(url, {
            headers: {
                Authorization: "william-freitas-shaw"
            }
        })
            .then((res) => {
                alert("Playlist deletada com sucesso!")
                this.pegaPlaylist()
            })
            .catch((err) => {
                alert("Ocorrou um erro ao deletar a playlist, tente novamente!")
            })
    }

    render() {

        let mostrarTela = this.state.listaPlaylist.map((pl) => {
            if (infoNaTela === true) {
                return (
                    <CaixaPlaylists key={pl.name}>
                        {pl.name}
                        <button onClick={() => this.deletaPlaylist(pl.name)} >X</button>
                    </CaixaPlaylists>
                )
            }
            else {
                return "";
            }
        });

        return (

            <Main>
                <h2>Playlists</h2>
                <button onClick={this.pegaPlaylist} >Mostrar Playlists</button>
                {mostrarTela}
            </Main>

        )
    }
}