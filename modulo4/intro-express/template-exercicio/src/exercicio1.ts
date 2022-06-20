import express from 'express'
import cors from 'cors'

const app = express()

app.use(express())
app.use(cors())

app.listen(3003, function () {
    console.log("Exercicio 1 está rodando!")
})

app.get('/', (req, res) => {
    res.send('Endpoint funcionando!')
})