
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {
    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}

console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}

console.log(checarIgualdade(1, 3));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {
    if (a > b) {
        return `${a} maior que ${b} é ${a > b} `
    } else if (a < b) {
        return `${a} maior que ${b} é ${a > b} `
    }
}

console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    //  Sua lógica aqui
    /* const nomeDoUsuario = prompt("Digite seu nome!")
    const anoDeNascimento = Number(prompt("Digite seu ano de nascimento!"))
    const senhaDoUsuario = prompt("Digite sua senha!")
    const nacionalidade = prompt("Digite sua nacionalidade").toLowerCase()

    if (2022 - anoDeNascimento < 18) {
        return "Você precisa ser maior de idade para se cadastrar!"
    } else if (senhaDoUsuario.length < 6) {
        return "Sua senha precisa ter no mínimo 6 caracteres!"
    } else if (2022 - anoDeNascimento >= 18 && senhaDoUsuario.length >= 6 && (nacionalidade.includes('brasileiro') || nacionalidade.includes('brasileira')) === true) {
        usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)
        return usuario
    } else
        return "Você não pode se cadastrar!" */
}


console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    /* const senha = "labenu"
    senhaUsuario = prompt("Digite sua senha!")

    if (senhaUsuario === senha) {
        return "Usuário Logado"
    } else
        return "Senha Inválida" */
}

console.log(login());

//DESAFIO

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui
    /* const nome = prompt("Digite seu nome!")
    const vacina = prompt("Qual vacina você tomou?").toLowerCase()
    let tempo = ''
    let data = ''

    if (vacina === "coronavac") {
        tempo = 28, data = '11/04/2022'
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    } else if (vacina === "astrazenica" || vacina === "pfizer") {
        tempo = 90, data = '12/06/2022'
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    } */
}

console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    /* for (let usuario of usuarios) {
        if (usuario.nome === nomeDoUsuario) {
            usuario.imunizacao = "completa"
        }
    }
    return usuarios */
}

console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    /* for (let usuario of usuarios) {
        if (usuario.nome === nomeDoUsuario && usuario.imunizacao === "incompleta") {
            return `Olá ${nomeDoUsuario}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
        } else if (usuario.nome === nomeDoUsuario && usuario.imunizacao === "completa")
        return `Olá ${nomeDoUsuario}! Sua imunização está ${usuario.imunizacao}!`
    } */
}
console.log(avisoAosAtrasados("Artur"));


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
    /* const nome = prompt("Digite seu nome!")
    const ano = prompt("Digite seu ano de nascimento!")
    const nacionalidade = prompt("Digite sua nacionalidade!")
    const senha = prompt("Digite sua senha!")
    const vacina = prompt("Digite qual vacina você tomou!")
    const imunizacao = prompt("Sua imunização está completa ou incompleta?")

    const novoUsuario = {
        nome: `${nome}`,
        ano: `${ano}`,
        nacionalidade: `${nacionalidade}`,
        senha: `${senha}`,
        vacina: `${vacina}`,
        imunizacao: `${imunizacao}`
    } */

}
console.log(cadastroDesafio(usuariosAtualizados));

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
    //  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());