
interface Student {
    name: string;
    id: number,
    major: string;
    intro(): void;
}

const me: Student = {
    name:'Santos',
    id: 200214729,
    major: 'Computer Science',
    intro() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.major} major.`)
    }
}

me.intro();
console.log('Hello World!');