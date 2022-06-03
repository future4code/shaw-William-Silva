import express from 'express'
import cors from 'cors'
import { users } from "./data";
import { user } from './exercicio2';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercicio 4 está rodando!')
})

app.post('/users', (req, res) => {

    let errorCode = 400
    const { id, name, email, type, age } = req.body
    const newUser: user = {
        id: id,
        name: name,
        email: email,
        type: type,
        age: age
    }

    try {

        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Invalid type of params')
        }

        users.push(newUser)

        res.status(201).send('User created!')

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// a) No meu caso ele apenas criou um novo usuário porquê não podia editar um usuário não existente.
// b) Considero apropriado mas não a opção correta. Porque o POST serve exclusivamente para criar um objeto novo, o PUT seria mais adequado na edição de um objeto já criado.