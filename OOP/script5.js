class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    present() {
        console.log(
            "My name is " +
            this.firstName +
            " " +
            this.lastName +
            ". I am " +
            this.age +
            ".");
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, gender, employeeID) {
        super(firstName, lastName,age, gender);
        this.employeeID = employeeID;
    }
    present() {
        console.log("Hi, I am an employee.");
        super.present();
    }
}

class Customer extends Person {
    constructor(firstName, lastName, age, gender, customerID) {
        super(firstName, lastName,age, gender);
        this.customerID = customerID;
    }
    present() {
        console.log("Hi, I am your customer.");
        super.present();
        console.log("Nice meeting you.");
    }
}

var person = new Person("Subba Rao", "Karanam", 35, "Male");
var employee = new Employee("Appa Rao", "Miriyala", 40, "Male", 123);
var customer = new Customer("Venkata Lakshmi", "Ganta", 35, "Male", 345);

person.present();
employee.present();
customer.present();