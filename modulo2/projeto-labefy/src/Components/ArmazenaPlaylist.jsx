import React from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 80%;
background-color: #FFFFFF;
`

const Criacao = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export default class ArmazenaPlaylist extends React.Component {

    state = {

        nomePlaylist: "",

    }

    criaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            "name": this.state.nomePlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "william-freitas-shaw"
            }
        })
            .then((res) => {
                alert("Playlist criada com sucesso!")
                this.setState({ nomePlaylist: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    nomearPlaylist = (e) => {
        this.setState({ nomePlaylist: e.target.value })
    }

    render() {

        return (

            <Main>
                <h2>Labefy</h2>
                <Criacao>
                    <input value={this.state.nomePlaylist} onChange={this.nomearPlaylist} placeholder="Nome da Playlist" />
                    <button onClick={this.criaPlaylist} >Criar Playlist</button>
                </Criacao>
            </Main >
        )
    }
}