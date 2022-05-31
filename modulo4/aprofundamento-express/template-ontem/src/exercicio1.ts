import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor está rodando!")
})

app.get('/ping', (req, res) => {
    res.send('pong')
})