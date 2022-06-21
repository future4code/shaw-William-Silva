import { ClientRequest } from "http";

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const usuario = new User("01", "william@labenu.com", "William", "123456")

console.log(usuario)

//HERANÇA

//Exercicio 1

//a) Seria possível apenas dentro da classe, fora dela não seria possível.

//b) Apenas uma vez.

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

//Exercicio 2

//a) Não foi impressa nenhuma vez.

//b) Apenas uma, por causa que tem um "usuário" criado com a classe User.

//Exercicio 3

//a) Seria possível sim. Apena criando um getter para a password e o tornando public.

console.log(usuario.getId())
console.log(usuario.getEmail())
console.log(usuario.getName())

//Exercicio 4

const customer = new Customer("01", "william@labenu.com", "William", "123456", "0001000")
customer.introduceYourself()
console.log(customer.introduceYourself())

//Exercicio 5

console.log(customer.introduceYourself())
console.log(usuario.introduceYourself())

//POLIMORFISMO

//Exercicio 1

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

//a) Consegui imprimir todas as informações.

//Exercicio 2

//a) Cannot create an instance of an abstract class.

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// const lugar = new Place("120.120.120-72")

// console.log(lugar)

//b) Retirar o abstract da class Place.

//Exercicio 3

export class Residence extends Place {
    constructor(
        protected dwellersQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getDwellersQuantity(): number {
        return this.dwellersQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }
}

//Exercicio 4

//a) 

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

//Exercicio 5

//a) 

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

//a) As semelhanças são name, registrationNumber, consumedEnergy, e calculateBill().

//b) As diferenças são cpf e cnpj, residentQuantity e floorsQuantity, getCpf e getCnpj.

//Exercicio 6

class IndustrialClinet extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string, // tanto faz ser string ou number
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getIndustryNumber(): string {
        return this.insdustryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}

//a) Deve ser filha da class Industry. Por conta de já ter informações na class Industry que serão utilizadas na IndustrialClient.

//b) Implementa a interface Client. Porque já contém informações necessárias que a mesma vai se utilizar.

//c) Porque uma vez criado um cliente não queremos alterar o mesmo.