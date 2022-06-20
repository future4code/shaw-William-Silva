import express from 'express'
import cors from 'cors'
import { users } from "./data";
import { allowedNodeEnvironmentFlags } from 'process';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 3 está rodando!')
})

app.get('/users/search/:name', (req, res) => {
    let errorCode = 400

    let name = req.params.name

    try {

        const specificUser = users.find((user) => name === user.name)

        if (!specificUser) {
            errorCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(specificUser)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// a) eu utilizei req.params.name.
// b) Feito!