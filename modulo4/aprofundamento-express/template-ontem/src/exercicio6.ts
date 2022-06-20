import express from 'express'
import cors from 'cors'
import arrayAfazeres from './exercicio3'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 6 está rodando!')
})

app.put('/users/:id', (req, res) => {

    const idUsuario = Number(req.params.id)

    const alteraçao: boolean = req.body

    const pegaUsuario = arrayAfazeres.filter((par) => {
        return par.userId === idUsuario
    })

    const alteraAfazer = pegaUsuario.map((par) => {
        return [
            {
                userId: par.userId,
                id: par.id,
                title: par.title,
                completed: alteraçao
            }
        ]
    })

    res.send(alteraAfazer)
})