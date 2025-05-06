{
// instance of guard 
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log("I am making sound");
    }
}

class Dog extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    makeBark(){
        console.log("I am barking");
    }
}
class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    makeMeaw(){
        console.log("I am mewaing");
    }
}

const getAnimal = (animal : Animal) => {
    if(animal instanceof Dog){
        animal.makeBark();
    }
    if(animal instanceof Cat){
        animal.makeMeaw();
    }
}

const dog = new Dog("dog", "dog")
const cat = new Cat("cat", "cat")































}