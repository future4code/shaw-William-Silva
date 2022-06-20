import express from 'express'
import cors from 'cors'
import { users } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 2 está rodando!')
})

export type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

app.get('/users', (req, res) => {
    let errorCode: number = 400

    try {

        if (!users) {
            errorCode = 422
            throw new Error('Invalid type of params')
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// a) eu só utilizei o array de users que já está com um tipo específico.
// b) talvez especificando qual o tipo de cada parametro esperado, exemplo: "id: string, age: number", e depois comparar.