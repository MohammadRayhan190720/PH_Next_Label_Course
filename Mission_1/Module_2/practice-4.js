//some
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((number) => number % 2 === 0)
console.log(hasEvenNumber)

//Real Case implementation
const currentUserRoles = ['user','editor','admin'];
const featuresAccessRoles = ["admin","manager"]

const canAccess = currentUserRoles.some(role => featuresAccessRoles.includes(role));
console.log(canAccess)

//Array.form()

// const arr = Array.from({length:5}).fill(2);
// const arr = Array.from({length:5}, (_, index)=> index + 1);
const arr = Array.from([1,2,3], (value, index) => value * value )
console.log(arr)


const range = (start,stop,step) => Array.from({length: Math.ceil((stop - start)/ step)}, (_, index)=> start + index * step)

console.log(range(10,20,3))