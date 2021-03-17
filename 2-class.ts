class Person {
    // public / private / protected
    protected name: string;

    protected constructor(theName: string) {
        this.name = theName;
    }

    public getName () {
        return this.name
    }
}

class Employee extends Person {
    private departament: string

    constructor (name: string, departament: string) {
        super(name)
        this.departament = departament;
    }
}

let howard = new Employee("Howard", "Sales")
console.log(howard.getName())