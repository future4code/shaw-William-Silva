import express from 'express'
import cors from 'cors'
import { users } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 1 está rodando!')
})

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

// a) O método GET.
// b) com /users