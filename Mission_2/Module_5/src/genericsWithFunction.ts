

// const createArrayWithString = (value : string) => [value];

// const createArrayWithNumber = (value : number) => [value];

// const createArrayWithUserObj = (value : { name: string, id: number}) => [value];

const createArrayWithGeneric = <T>(value: T ) =>{
  return [value]
}

const arrString = createArrayWithGeneric("apple")
const arrNumber = createArrayWithGeneric(10)
const arrObj = createArrayWithGeneric({
  name: "Rayhan",
  id: 101,
})
console.log(arrString)


//tuple

const createArrayWithTuple = (params1: string, params2: number) =>{
  return [params1,params2]
}

const createArrayTupleWithGenerics = <X,Y> (param1 : X , param2 : Y) =>{
  return [param1,param2]
}

const arrNumber1 = createArrayTupleWithGenerics(222,"Rayhan");
console.log(arrNumber1)


//

const addStudentToCourse = <T> (studentInfo : T) =>{

  return {
    course: "Next Label",
    ...studentInfo,
  }
}



const student1 = {
  name: 'Rayhan',
  id: 101,
  hasPen : true,
}

const student2 = {
  name : "Tamanna",
  id: 102,
  hasCar : true,
  isMarried : true,
}

const user1 = addStudentToCourse(student1)
const user2 = addStudentToCourse(student2)

console.log(user1)
console.log(user2)