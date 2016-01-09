/* http://www.typescriptlang.org/Tutorial */
class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Scott", "W.", "Gladstone");

document.body.innerHTML = greeter(user);