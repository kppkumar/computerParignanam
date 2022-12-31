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

var person = new Person("Subba Rao", "Karanam", 35, "Male");
person.present();
