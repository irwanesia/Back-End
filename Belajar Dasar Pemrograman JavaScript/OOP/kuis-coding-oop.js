console.log("============== Kusi Coding OOP ==============")
class Animal {
    constructor(name, age, isMamal){
        this.name = name;
        this.age = age;
        this.isMamal = isMamal;
    }
}

class Rabbit extends Animal {
    // overidiing properties
    constructor(name, age){
        super(name, age, true)
    }

    eat() {
        return `${this.name} sedang makan`;
    }
}

class Eagle extends Animal {
    constructor(name, age){
        super(name, age, false)
    }

    fly() {
        return `${this.name} sedang terbang`;
    }
}

const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat());
const myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly());