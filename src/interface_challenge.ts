
interface Person {
    name: string
}

interface CatOwner extends Person {
    catName: string
}

interface Manager extends Person {
    managePeople(): void;
    delegateTasks(): void;
}


function getEmployee(): Person | CatOwner | Manager {
    const randomNumber: number = Math.random();
    if (randomNumber < 0.33) {
        return {
            name: 'Santos'
        }
    } else if (randomNumber < 0.66) {
        return {
            name: 'Karen',
            catName: 'Gatito'
        }
    } else {
        return {
            name: 'Santos',
            managePeople() {
            console.log('I am a manager of people!');
            },
            delegateTasks() {
                console.log('You will do all my work!');
            }
        }
    }
}

const employee: Person | CatOwner | Manager = getEmployee();
console.log(employee);

/*
getEmployee() can return a Person, CatOwner or a Person. Since we cannot
ensure which type it will return, we need to set up a type predicate.

A type predicate returns a boolean and asserts the argument to be a specific type.
*/

// isManager with type predicate
function isManager(obj: Person | CatOwner | Manager): obj is Manager {
    return 'managePeople' in obj;
}

if (isManager(employee)) {
    employee.delegateTasks();
} else {
    console.log('I am not a manager.');
}