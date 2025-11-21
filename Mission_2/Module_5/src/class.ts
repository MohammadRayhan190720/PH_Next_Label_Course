// opp => class => object

// class Animal {
//   name:string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string){
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound(){
//     console.log(`${this.name} sound is ${this.sound}`)
//   }
// }

//paremeter propertyes

class Animal {
  // public name: string;
  // public species: string;
  // public sound: string;

  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} sound is ${this.sound}`);
  }
}


const dog = new Animal ("Tom", "HomeSepience", "ghew Ghew");
const cat = new Animal("Jom", "Jani na", "Mew-Mew")

cat.makeSound()
dog.makeSound()