var sub = function (a, b) {
    return a - b
}

console.log(sub(Number(process.argv[2]), Number(process.argv[3])))

module.exports = sub;