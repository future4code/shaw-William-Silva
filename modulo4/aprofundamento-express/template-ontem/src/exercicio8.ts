import express from 'express'
import cors from 'cors'
import arrayAfazeres from './exercicio3'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 8 está rodando!')
})

app.get('/users/:id', (req, res) => {

    const idUsuario = Number(req.params.id)

    const pegaUsuario = arrayAfazeres.filter((par) => {
        return par.userId === idUsuario
    })

    const pegaAfazeres = pegaUsuario.map((par) => {
        return par.title
    })

    res.send(pegaAfazeres)
})