  class Student {
    name: string;
    age: number;
    address : string;

    constructor(name: string, age: number, address: string){
      this.name = name ;
      this.age = age;
      this.address = address;
    }

    getSleep(sleepHours : number){
      console.log(`${this.name} ato ${sleepHours}  ghumay`)
    }
  }

  const student1 = new Student('kobir', 24 , "Rangpur")

student1.getSleep(7)

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(name: string, age: number, address: string,designation:string) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(sleepHours: number) {
      console.log(`${this.name} ato ${sleepHours}  ghumay`);
    }

    takeClass(classHour : number){
      console.log(`${this.name}  ${classHour} gonta class ney`)
    }
  }

  const teacher1 = new Teacher("Lulu",25, "Dhaka","Smart Teacher")

  teacher1.takeClass(5)