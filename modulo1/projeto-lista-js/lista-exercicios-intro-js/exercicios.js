// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(x,y) {
  // implemente sua lógica aqui
  let altura = prompt('Digite a altura do retângulo!')
  let largura = prompt('Digite a largura do retângulo!')
  x = Number(altura)
  y = Number(largura)
  let calculo = x * y
  
  console.log(calculo);
}

// EXERCÍCIO 02
function imprimeIdade(n1,n2) {
  // implemente sua lógica aqui
  let anoAtual = prompt('Em qual ano estamos?')
  let anoNascimento = prompt('Em qual ano você nasceu?')
  n1 = Number(anoAtual)
  n2 = Number(anoNascimento)
  let idade = n1 - n2

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let pesoAtual = peso
  let alturaAtual = altura
  peso = Number(pesoAtual)
  altura = Number(alturaAtual)
  let IMC = peso / (altura * altura)

  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt('Qual é o seu nome?')
  let idade = prompt('Quantos anos você tem?')
  let email = prompt('Digite aqui o seu email!')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresFavoritas = [prompt('Cor favorita 1:'), prompt('Cor favorita 2:'), prompt('Cor favotira 3:')]
  
  console.log((coresFavoritas));
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let array2 = array
  let ultimoElem = array[array.length -1]
  let primeiroElem = array[0]
  array2[0] = ultimoElem
  array2[array2.length -1] = primeiroElem

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}