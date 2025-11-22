    class Parent {
      name: string;
      age: number;
      address: string;

      constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
      }

      getSleep(sleepHours: number) {
        console.log(`${this.name} ato ${sleepHours}  ghumay`);
      }
    }
  
  
  
  
  
  class Student extends Parent  {
    roll:number;
    constructor(name:string, age:number,address:string,roll:number){
      super(name,age,address)
      this.roll = roll
    }
  }

  const student1 = new Student('kobir', 24 , "Rangpur",101)

student1.getSleep(7)


  class Teacher extends Parent {

    designation: string;

    constructor(name: string, age: number, address: string,designation:string) {
      super(name,age,address)
      this.designation = designation;
    }


    takeClass(classHour : number){
      console.log(`${this.name}  ${classHour} gonta class ney`)
    }
  }

  const teacher1 = new Teacher("Lulu",25, "Dhaka","Smart Teacher")

  teacher1.takeClass(5)