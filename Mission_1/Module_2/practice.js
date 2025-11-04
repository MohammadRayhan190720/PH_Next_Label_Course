const course1 = {name : "Programming Hero"};
const course2 = { name: "next level web development" };

const map = new Map();
map.set(course1, {price: 100, duration: '3 months'});
map.set(course2, {price: 200, duration: '6 months'});

// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York');

console.log(map);