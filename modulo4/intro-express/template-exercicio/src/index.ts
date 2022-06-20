import express from 'express'
import cors from 'cors'
import { users } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, function () {
    console.log("O servidor está rodando!")
})

//ROTA RETORNA TODAS AS PLAYLISTS
app.get('/playlists', (req, res) => {

    const playlists = users.map((user) => {
        return user.playlists
    })

    const resultado = playlists.flat(1)

    res.send(resultado)
})

//ROTA RETORNA TODAS AS TRACKS
app.get('/tracks', (req, res) => {

    const playlists = users.map((user) => {
        return user.playlists
    }).flat(1)

    const tracks = playlists.map((playlist) => {
        return playlist.tracks;
    }).flat(1)

    res.send(tracks)
})

//ROTA DELETA TODAS AS PLAYLISTS
app.delete('/playlist/:userId', (req, res) => {

    const userId = req.params.userId;

    const dadosAtualizados = users.map((user) => {
        if (user.id === userId) {
            return {
                ...user,
                playlists: []
            }
        } else {
            return user
        }
    })

    res.send(dadosAtualizados)
})

//ROTA DELETA TODAS AS TRACKS
app.delete('/tracks/:playlistId', (req, res) => {

    const playlistId = req.params.playlistId

    const dadosAtualizados = users.map((user) => {
        return user.playlists.map((playlist) => {
            if (playlist.id === playlistId) {
                return {
                    ...playlist,
                    tracks: []
                }
            } else {
                return playlist
            }
        })
    })

    res.send(dadosAtualizados)
})

