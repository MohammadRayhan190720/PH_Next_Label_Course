//oop => instance of guard / type narrawing

class Person {
  name: string;
  constructor(name:string){
    this.name = name;
  }

  getSleep(numberOfHours : number){
    console.log(`${this.name} ${numberOfHours} Hours Ghumay`)

  }
}

class Student extends Person{
  constructor(name: string){
    super(name)
  }

  getStudy(numberOfHours : number){
    console.log(`${this.name} ${numberOfHours} hours study kore`)
  }
}

class Teacher extends Person{
  constructor(name:string){
    super(name)
  }
  takeClass(numberOfHours: number){
    console.log(`${this.name} ${numberOfHours} hours take class`)
  }
}

//function guard

const isStudent = (user : Person) =>{
  return user instanceof  Student ;   //user is student
}
const isTeacher = (user : Person) =>{
  return user instanceof Teacher; //user is teacher
}


const getUserInfo = (user: Person) =>{
  if(isStudent(user)){
    user.getStudy(7)
  } else if(isTeacher(user)){
    user.takeClass(5)
  } else{
    user.getSleep(8)
  }

}

const student1 = new Student("Mr.Student")
getUserInfo(student1)
const teacher1 = new Teacher('Mr.Teacher')
getUserInfo(teacher1)