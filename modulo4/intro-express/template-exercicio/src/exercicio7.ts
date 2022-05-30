import express from 'express'
import cors from 'cors'
import posts from './exercicio6'

const app = express()

app.use(express())
app.use(cors())

app.listen(3003, function () {
    console.log("Exercicio 7 está rodando!")
})

app.get('/posts', (req, res) => {

    res.send(posts)
})