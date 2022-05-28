enum ROLE {
    ADMIN = "admin",
    USER = "user",
}

type usuarios = {
    nome: string,
    email: string,
    role: string
}

let listaUsuarios: object[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

function emailAdmin(par: usuarios): string[] {

    if (par.role === ROLE.ADMIN) {
        return [`${par.email}`]
    }
}

let listaDeAdmins: object[] = listaUsuarios.filter(emailAdmin)

let emailApenas: string[] = listaDeAdmins.map((valor: any) => {
    if (valor.role !== undefined) {
        return valor.email
    }
})

console.log(emailApenas)