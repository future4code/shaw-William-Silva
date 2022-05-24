var mult = function (a, b) {
    return a * b
}

console.log(mult(Number(process.argv[2]), Number(process.argv[3])))

module.exports = mult;