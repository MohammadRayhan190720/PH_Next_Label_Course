//constraint => strict rule set 

type Student = {
  name: string,
   id: number

}
const addStudentToCourse = <T extends Student >(studentInfo: T) => {
  return {
    course: "Next Label",
    ...studentInfo,
  };
};

const student1 = {
  name: "Rayhan",
  id: 101,
  hasPen: true,
};

const student2 = {
  name: "Tamanna",
  id: 102,
  hasCar: true,
  isMarried: true,
};
const student3 = {
  name: "Kew Na",
  id: 103,
  hasWatch : true,
}

const user1 = addStudentToCourse(student1);
const user2 = addStudentToCourse(student3);

console.log(user1);
console.log(user2);