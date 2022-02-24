//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1.

//a.
/* 
O código analisa se o número é impar ou par, se for par ele passa no teste. Ele realiza o teste de %, se o número digitado 
for par o resultado será 0,se for ímpar o resultado será 1.
 */
//b.
/* 
Para números pares.
 */
//c.
/* 
Para números ímpares.
 */
//2.

//a.
/* 
O código serve para infoarmar o preço de determinadas frutas.
 */
//b.
/* 
O preço da fruta Maçã é R$ 2.25
 */
//c.
/* 
O preço da fruta Pêra é R$ 5
 */
//3.

//a
/* 
Criou uma variável pra armazenar um número.
 */
//b
/* 
Se o valor fosse 10 a mensagem seria, "Esse número passou no teste". Se fosse -10 não apareceria nada.
 */
//c
/* 
A variável mensagem está dentro de uma função, portanto não é do escopo global assim não podendo ser invocada pra fora da função.
 */

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
/* 
const idade = Number(prompt('Digite aqui a sua idade!'))

function verificar(parametro) {
    if (parametro >= 18) {
        console.log('Você pode dirigir!');
    }   else {
        console.log('Você não pode dirigir!');
    }
}

verificar(idade)
 */
//2.
/* 
const turno = prompt('Qual turno você estuda?')

function estudaTurno(parametro) {
    if (parametro === 'M') {
        console.log('Bom Dia!')
    } else if (parametro === 'V') {
        console.log('Boa Tarde!')
    } else if (parametro === 'N') {
        console.log('Boa Noite!')
    }
}

estudaTurno(turno)
 */
//3.
/* 
const turno = prompt('Qual turno você estuda?')

function estudaTurno(parametro) {
    switch (parametro) {
        case 'M':
            console.log('Bom Dia!');
            break
        case 'V':
            console.log('Boa Tarde!');
            break
        case 'N':
            console.log('Boa Noite!');
            break
    }
}

estudaTurno(turno)
 */
//4.
/* 
const generoFilme = prompt('Qual o gênero do filme que você quer assistir?')
const precoIngresso = Number(prompt('Qual o valor que deseja pagar no ingresso?'))
let amigoTopou = prompt('Para amigo: Vamos ver esse filme?')


function condicaoFilme() {
    if (amigoTopou === 'sim') {
        amigoTopou = true
    } else {
        amigoTopou = false
    }
    if (generoFilme === 'fantasia' && precoIngresso < 15 && amigoTopou === true) {
        console.log('Bom filme!');
    } else {
        console.log('Escolha outro filme!') }
    }

condicaoFilme()
 */