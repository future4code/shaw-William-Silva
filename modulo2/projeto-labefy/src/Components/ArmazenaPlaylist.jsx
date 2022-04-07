import React from "react";
import axios from "axios";
import styled from "styled-components";

const CaixaPlaylists = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class ArmazenaPlaylist extends React.Component {

    state = {
        nomePlaylist: "",
    }

    componentDidMount() {
        this.pegaPlaylist()
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

    pegaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "william-freitas-shaw"
            }
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente!")
            })
    }

    render() {

        return (
            <div>
                <input value={this.state.nomePlaylist} onChange={this.nomearPlaylist} placeholder="Nome da Playlist" />
                <button onClick={this.criaPlaylist} >Criar Playlist</button>
                <button onClick={this.pegaPlaylist} >Mostrar Playlists</button>
            </div >

        )
    }
}