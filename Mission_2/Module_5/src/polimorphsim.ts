
class Person {
  getSleep(){
    console.log(`I am a normal Happy Person.I sleep 8 Hours`)
  }
}

class Student extends Person{
  getSleep(){
    console.log(`I am a student.I sleep 7 hours`)
  }
}

class NextLabelDeveloper extends Person {
  getSleep(){
    console.log(`I am a Next Label Developer.I sleep 6 Hours`)
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLabelDeveloper();

getSleepingHours(person3)


// 
class Shape {
  getArea():number{
    return 0;
  }
}

class Circle extends Shape{
  radius:number;
  constructor(radius:number){
    super()
    this.radius = radius;
  }
  getArea(){
    return Math.PI * this.radius * this.radius
  }
}

class Rectangle extends Shape {
  height:number;
  weight:number;
  constructor(height:number,weight:number){
    super()
    this.height = height ;
    this.weight = weight ;
  }
  getArea(){
    return this.height * this.weight;
  }
}

const getAreaFunction = (param: Shape) =>{
  console.log(param.getArea())
}

const shape1 = new Shape();
const shape2 = new Circle(5);
const shape3 = new Rectangle(10,5)

getAreaFunction(shape1)
getAreaFunction(shape2)
getAreaFunction(shape3)