class Person {    
    constructor (firstName, lastName, age, mail) {
        this.firstName = firstName || 'John';
        this.lastName = lastName || 'Doe';
        this.age = age || -1;
        this.mail = mail || 'mail@example.com';
    }

    fullName () {
        return `${this.firstName} ${this.lastName}`
    }

    legal_age () {
        return this.age >= 18
    }
}


const lucas = new Person('Lucas', 'Gonzalez', 32, 'lucasgonzalez.dev@gmail.com')
const jose = new Person('Jose', 'Gutierrez', 20, 'jose@gmail.com')
const juan = new Person('Juan', 'Perez')
const wrongPerson = new Person()

console.log('\n')
console.log(lucas)
console.log('\n')
console.log(jose)
console.log('\n')
console.log(juan)
console.log('\n')
console.log(wrongPerson)

console.log('\n')
console.log(`${lucas.firstName} es mayor de edad: ${lucas.legal_age()}`)
console.log('\n')
console.log(`${jose.firstName} es mayor de edad: ${jose.legal_age()}`)
console.log('\n')
console.log(`${juan.firstName} es mayor de edad: ${juan.legal_age()}`)
console.log('\n')

console.log('\n')
console.log(lucas.fullName())
console.log('\n')
console.log(jose.fullName())
console.log('\n')
console.log(juan.fullName())
console.log('\n')
console.log(wrongPerson.fullName())