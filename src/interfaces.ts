
interface Computer {
    readonly id: number,
    brand: string,
    ram: number,
    storage?: number,
    upgradeRam(newRam: number): number;
}

const laptop: Computer = {
    id: 1,
    brand: 'Lenovo',
    ram: 16,
    storage: 512,
    upgradeRam(newRam) {
        this.ram = newRam;
        return this.ram;
    }
}

console.log(laptop.upgradeRam(1));
console.log(laptop);

// Merging two interfaces
interface Person {
    name: string,
    getDetails(): string;
}

interface Person {
    age: number;
}

interface CatOwner {
    catName: string,
    getCatDetails(): string;
}

interface Paralegal {
    firm: string;
}

const person: Person = {
    name: 'Karen',
    age: 27,
    getDetails() {
        return `Hello, my name is ${this.name} and I am ${this.age}.`;
    }
}

console.log(person.getDetails());

interface TechBro extends Person {
    programmingLanguage: string;
}

const techie: TechBro = {
    name: 'Santos',
    age: 31,
    programmingLanguage: 'Rust',
    getDetails() {
        return `Hello, my name is ${this.name} and I code in ${this.programmingLanguage}.`;
    }
}

console.log(techie.getDetails());

// Can inherit from multiple interfaces
interface Paralegal extends Person, CatOwner {
    firm: string;
}

const myWife: Paralegal = {
    name: "Karen",
    age: 27,
    firm: 'Migra 411',
    catName: 'Gatito',
    getDetails() {
        return `My name is ${this.name}, I'm ${this.age} and I work as a paralegal at ${this.firm}`;
    },
    getCatDetails() {
        return `I have a cat named ${this.catName}.`;
    }
}

console.log(myWife.getDetails());
console.log(myWife.getCatDetails());