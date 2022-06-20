type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

//a. Eu faria um node ./build/exercicio4.ts, para poder transpilar para js.

//b. Eu só precisaria colocar o src no caminho do arquivo, exemplo: ./src/build/exercicio4.ts

//c. Utilizando do comando tsc não só em um, mas em vários arquivos ao mesmo tempo.
