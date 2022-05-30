import express from 'express'
import cors from 'cors'
import usuarios from './exercicio3'
import posts from './exercicio6'

const app = express()

app.use(express())
app.use(cors())

app.listen(3003, function () {
    console.log("Exercicio 8 está rodando!")
})

app.get('/users/posts/:userId', (req, res) => {

    const userId: any = req.params.userId

    const postUsuario = posts.map((post) => {
        if (post.userId === userId) {
            return post.body
        }
    })

    res.send(postUsuario)
})