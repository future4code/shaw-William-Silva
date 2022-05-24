var div = function (a, b) {
    return a / b
}

console.log(div(Number(process.argv[2]), Number(process.argv[3])))

module.exports = div