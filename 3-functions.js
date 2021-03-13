// class Person {  
//     constructor (firstName, lastName, age, mail) {
//         this.firstName = firstName || 'John';
//         this.lastName = lastName || 'Doe';
//         this.age = age || -1;
//         this.mail = mail || 'mail@example.com';
//     }

//     fullName () {
//         return `${this.firstName} ${this.lastName}`
//     }

//     legal_age () {
//         return this.age >= 18
//     }
// }

function Person (firstName, lastName, age, mail) {
    this.firstName = firstName || 'John';
    this.lastName = lastName || 'Doe';
    this.age = age || -1;
    this.mail = mail || 'mail@example.com';
}

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.legal_age = function () {
    return this.age >= 18
}

const person = new Person('Lucas', 'Gonzalez', 15, 'lucasgonzalez.dev@gmail.com')
console.log(person)

console.log(person.fullName())
console.log(person.legal_age())