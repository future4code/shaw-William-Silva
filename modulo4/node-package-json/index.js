//1.
//a. Com o process.argv.

//b. 

// const valorUm = process.argv[2]
// const valorDois = Number(process.argv[3])

// console.log(`Olá, ${valorUm}! Você tem ${valorDois} anos.`)

//c.

// const valorUm = process.argv[2]
// const valorDois = Number(process.argv[3])

// console.log(`Olá, ${valorUm}! Você tem ${valorDois} anos. Em sete anos você terá ${valorDois+7}`)

//2.

let operacao = Number(process.argv[2])

switch (operacao) {
    case "soma":
        let soma = Number(process.argv[2]) + Number(process.argv[3])
        console.log(soma);
        break
    case "sub":
        let sub = Number(process.argv[2]) - Number(process.argv[3])
        console.log(sub);
}