import express from "express";
import cors from "cors";
import { Account, Transaction } from "./types";
import { accounts } from "./accounts";
import { cpuUsage } from "process";
import { Agent } from "https";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("O servidor está rodando!")
});

app.get('/users/all', (req, res) => {
    let errorCode = 404

    try {

        if (!accounts.length) {
            errorCode = 404
            throw new Error('Lista de usuários está vazia!')
        }

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

    res.status(200).send(accounts)
})

app.post('/users/create', (req, res) => {
    let errorCode = 400

    try {
        const { name, CPF, dateOfBirthAsString } = req.body
        const { day, month, year } = dateOfBirthAsString.split("/", 3)
        const dateOfBirth: Date = new Date(`${day}-${month}-${year}`)
        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()
        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18) {
            errorCode = 406
            throw new Error('Usuário menor de 18 anos')
        }

        accounts.push({
            name: name,
            CPF: CPF,
            dateOfBirth: dateOfBirth,
            balance: 0,
            statement: []
        })
        console.log(dateOfBirth)
        console.log(ageInMilisseconds)
        res.status(201).send('Conta criada com sucesso!')

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})