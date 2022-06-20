var soma = function (a, b) {
    return a + b
}

console.log(soma(Number(process.argv[2]), Number(process.argv[3])))

module.exports = soma;