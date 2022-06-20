import express from 'express'
import cors from 'cors'
import arrayAfazeres from './exercicio3'
import AFAZERES from './exercicio2'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 5 está rodando!')
})

app.post('/users', (req, res) => {

    const novoAfazer: AFAZERES = req.body

    const criarAfazer: AFAZERES[] = [...arrayAfazeres, novoAfazer]

    res.send(criarAfazer)
})