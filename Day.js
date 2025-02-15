class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${thi.name}says ${this.sound}`);
    }
}
const dog = new Animal("Dog", "Woof");
dog.makeSound();