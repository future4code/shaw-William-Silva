//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1.

//a.
/* 
Matheus Nachtergaele
Virginia Cavendish
canal: Globo horário: 14h
 */

//2.

//a.
/* 
nome: Juca idade: 3 raca: SRD  
nome: Juba idade: 3 raca: SRD
nome: Jubo idade: 3 raca: SRD
 */
//b.
/* 
ela copia o objeto denominado.
 */

//3.

//a.
/* 
false
undefined
 */
//b.
/* 
false apareceu porque a função invocada estava pedindo a propriedade backender cujo valor determinado é false.
undefined apareceu porque a propriedade altura não foi definida no objeto.
 */

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.

//a.
/* 
let pessoa = {
    nome: 'Carlos',
    apelidos: ['Carlinhos','Ca','Caca']
}

function apresentacao(parametro) {
    console.log(`Eu sou ${parametro.nome}, mas pode me chamar de ${parametro.apelidos[0]}, ${parametro.apelidos[1]} ou 
${parametro.apelidos[2]}`);
}

apresentacao(pessoa)

//b.

let novosApelidos = {
    ...pessoa,
    apelidos: ['Bananinha','Batatinha','Batutinha'],
}

apresentacao(novosApelidos)
 */
//2

//a.
/* 
let objeto1 = {
    nome: 'João',
    idade: 26,
    profissao: 'Piloto de avião'
}

let objeto2 = {
    nome: 'Pedro',
    idade: 30,
    profissao: 'Desenvolvedor'
}
 */
//b.
/* 
function retorno(parametro) {
    let resultado = [
        valorNome = parametro.nome,
        tamanhoNome = (parametro.nome.length),
        valorIdade = parametro.idade,
        valorProfissao = parametro.profissao,
        tamanhoProfissao = (parametro.profissao.length)
    ]
    return resultado
}

retorno(objeto1)
console.log(retorno(objeto1));
retorno(objeto2)
console.log(retorno(objeto2));
 */
//3

//a.

let carrinho = []

//b.

let fruta1 = {
    nome: 'Carambola',
    disponibilidade: true
}

let fruta2 = {
    nome: 'Cherimoia',
    disponibilidade: true
}

let fruta3 = {
    nome: 'Mangostão',
    disponibilidade: true
}

//c.

function comprar(parametro) {
    carrinho = [
    parametro
    ]
    return carrinho
}

//d.

console.log(comprar(fruta1));
