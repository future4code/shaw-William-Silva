import express from "express";
import cors from "cors";
import { arrayProdutos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("O Exercicio 3 está rodando!")
});

app.post('/all-products', (req, res) => {

    let newProduct: { name: string, price: number } = req.body

    try {

        if (!newProduct) {
            throw new Error("Parâmetro não informado!")
        }

        let lista = arrayProdutos.map((product) => {
            return product
        })

        res.send(lista)

    } catch (error: any) {
        switch (error.message) {
            case "Parâmetro não informado!":
                res.status(204)
                break
        }
    }
})