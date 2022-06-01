import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Exercicio 1 está rodando!")
});

app.get('/test', (req, res) => {
    res.send("A API está funcionando!")
})