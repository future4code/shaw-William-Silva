import app from "./app";
import connection from "./connection";
import { Request, Response } from "express"

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorById("001"))
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/userid/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        res.send(await getActorById(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

// EXERCICIO 1

// a) O raw com o result [0] retorna um array com a informação requerida e o outro [0] retorna apenas as informações necessárias do objeto, ex: id, name, salary e etc...

// b) 
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
}

app.get("/username/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name

        res.send(await searchActor(name))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//c) 
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result[0][0].count;
    return count;
};

app.get("/usergender/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender

        res.send(await countActors(gender))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})