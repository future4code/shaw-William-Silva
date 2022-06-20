import express from 'express'
import cors from 'cors'
import arrayAfazeres from './exercicio3'
import AFAZERES from './exercicio2'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Exercício 4 está rodando!')
})

//MOSTRA TODOS OS USUÁRIOS
app.get('/users', (req, res) => {

    res.send(arrayAfazeres)
})

//MOSTRA USUÁRIOS QUE JÁ COMPLETARAM OS AFAZERES

app.get('/users/completed', (req, res) => {

    let afazeresCompletos: AFAZERES[] = arrayAfazeres.filter((usuario) => {
        return usuario.completed === true
    })

    res.send(afazeresCompletos)
})

//MOSTRA USUÁRIOS QUE NÃO COMPLETARAM OS AFAZERES

app.get('/users/uncompleted', (req, res) => {

    let afazeresIncompletos: AFAZERES[] = arrayAfazeres.filter((usuario) => {
        return usuario.completed === false
    })

    res.send(afazeresIncompletos)
})

