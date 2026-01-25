const obj = {
  nextLabel : { courseID: "Level-2"},
  "Programming Hero" : { courseID: "Level-1"},
}
// console.log(obj["Programming Hero"].courseID);
// console.log(obj.nextLabel)


const course1 = {name : "Programming Hero"};
const course2 = { name: "next level web development" };

const map = new Map();
map.set(course1, {price: 100, duration: '3 months'});
map.set(course2, {price: 200, duration: '6 months'});

// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York');

//map.clear();
// map.clear();

// map.delete(course1);
// map.has(course1)// return true/false
// const courseInfo = map.forEach((key,value) => {console.log(key,value)})

console.log(map.keys())
console.log([...map.keys()])
console.log(map.values())
console.log([...map.values()])
console.log(map.entries())
