const lucas = {
    firstName: 'Lucas',
    lastName: 'Gonzalez'
}

const jose = {
    firstName: 'Jose',
    lastName: 'Gutierrez',
    age: 20,
    legal_age: function() {
        return this.age >= 18
    }
}

const juan = {
    firstName: 'Juan',
    lastName: 'Perez',
    mail: 'jose@gmail.com'
}

console.log('\n', lucas, '\n', jose, '\n', juan, '\n')

console.log(jose.legal_age())

console.log(lucas.legal_age())

// jose.mail