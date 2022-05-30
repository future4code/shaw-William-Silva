import express from 'express'
import cors from 'cors'
import usuarios from './exercicio3'

const app = express()

app.use(express())
app.use(cors())

app.listen(3003, function () {
    console.log("Exercicio 4 está rodando!")
})

app.get('/users', (req, res) => {

    res.send(usuarios)
})