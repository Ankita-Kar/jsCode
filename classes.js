class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  

  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Call the parent class constructor
      this.grade = grade;
    }
  
    // Override the sayHello method
    sayHello() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I'm in grade ${this.grade}.`);
    }
  }
  
  const person1 = new Person('Mini', 30);
  person1.sayHello(); 

  const student1 = new Student('Mik', 15, 10);
  student1.sayHello(); 


  