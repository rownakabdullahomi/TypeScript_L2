{
// oop- class

class Animal{
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(`the ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('german shepard', 'dog', 'ghew ghew');
const cat = new Animal('parsian', 'cat', 'miaw miaw');
cat.makeSound();





















}