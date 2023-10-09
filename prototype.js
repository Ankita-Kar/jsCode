function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.eat = function(food) {
    console.log(`${this.name} is eating ${food}`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} is barking`);
  };
  
  const animal1 = new Animal('Generic Animal');
  const dog1 = new Dog('Buddy', 'Golden Retriever');
  const animal2 = new Animal('Domestic Animal');
  const dog2 = new Dog('Puff', 'Husky');
  
  // animal.eat('grass'); 
  // dog.eat('bones');    
  // dog.bark();         
  
  // console.log(dog.__proto__ === Dog.prototype);       // true
  // console.log(Dog.prototype.__proto__ === Animal.prototype); // true
  
  console.log(Dog.prototype)
  // console.log(Animal.prototype)
  // console.log(animal1)
  // console.log(dog1)
  // console.log(animal2)
  // console.log(dog2)