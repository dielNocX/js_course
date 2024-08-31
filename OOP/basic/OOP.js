// 1. Class Animal
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

// 2. Class Rabbit
class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); // isMammal is true for rabbits
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

// 3. Class Eagle
class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); // isMammal is false for eagles
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

// 4. Instance of Rabbit
const myRabbit = new Rabbit("Labi", 2);

// 5. Instance of Eagle
const myEagle = new Eagle("Elo", 4);


class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); // isMammal is true for rabbits
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); // isMammal is false for eagles
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit("Labi", 2);

const myEagle = new Eagle("Elo", 4);



