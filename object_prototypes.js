function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello,I am ${this.name} and my age is ${this.age}`);
}

const Person1 = new Person("Shilpa", 21);
const Person2 = new Person("Krupa", 22);
Person1.greet();
Person2.greet();