console.log("Hello, world!")
import { Dog } from "./Dog"
import { Owl } from "./Owl"

const scooby = new Dog("Scooby", 10)

console.log(scooby)

console.log(scooby.bark())

console.log(scooby.eat(10))

const oldOwl = new Owl("Cojura", 2)

console.log(oldOwl)

console.log(oldOwl.eat(2))

console.log(oldOwl.chirp())

console.log(oldOwl.fly(10))