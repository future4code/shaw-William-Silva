import express from 'express'
import cors from 'cors'
import arrayAfazeres from './exercicio3'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 7 está rodando!')
})

app.delete('/users/:id', (req, res) => {

    const idUsuario = Number(req.params.id)

    const pegaUsuario = arrayAfazeres.filter((par) => {
        return par.userId === idUsuario
    })

    const deletaAfazer = pegaUsuario.map((par) => {
        return [
            {
                userId: par.userId,
                id: par.id,
                title: "",
                completed: false
            }
        ]
    })

    res.send(deletaAfazer)
})