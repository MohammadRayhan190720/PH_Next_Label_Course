
// const startTime = performance.now();
// console.time( "Loop Time" );

// for( i = 0; i <= 50; i++ ) {
//      console.log( i );
// }

// const endTime = performance.now();
// console.log( `Execution time: ${endTime - startTime} milliseconds` );
// console.timeEnd( "Loop Time" );


const firstArray = [];
const secondArray = [];
for (i = 0; i < 60000; i++) {
  if( i < 30000){
     firstArray.push(i);
  }
  secondArray.push(i);
}

console.log('first Array length:', firstArray.length);
console.log('second Array length:', secondArray.length);

console.time('map1')
const firstArrayUser = firstArray.map((num) => ({ userId: num }));
console.timeEnd('map1')

console.time('map2')
const secondArrayUser = secondArray.map( (num) => ({userId : num}))
console.timeEnd('map2')

console.time('find')
//order of notation O(n)
const user = secondArrayUser.find( (user) => user.userId === 60000)
console.timeEnd('find')

console.time('findEl')
//order of notation O(1)
const userFind = secondArrayUser[40000];
console.timeEnd('findEl')

//set

const set = new Set();

set.add('mango')
set.add('apple')
set.add('banana')
set.add('mango') //duplicate will not be added

console.log(set)
console.log(set.size)

set.delete('banana')
console.log(set)

//array ar modde set use

const arr = ['cat', 'dog', 'fish', 'cat', 'dog'];

const set1 = new Set(arr);

//new element add
set1.add('hamster');

//iteration ar jonno forEach method ace only

const elements = set1.forEach( (item) =>{console.log(item)})
console.log(elements);

//set to array
const arrFromSet = Array.from(set1);
console.log(arrFromSet)

//check if have
console.log( set1.has('dog') ) //true
console.log( set1.has('lion') ) //false

console.log(set1)

//brute force vs optimized approach
const pet = ["cat", "dog", "fish", "cat", "dog"];

//brute force

console.time('bruteForce')

const removeDuplicatePets = (pet) =>{
  const uniquePets = [];
  pet.forEach((item) =>{
    if(!uniquePets.includes(item)){
      uniquePets.push(item);
    }
  })
  return uniquePets;
}

console.log(removeDuplicatePets(pet))
console.timeEnd('bruteForce')

//optimized approach using set
console.time('optimizedSet')

const removeDuplicatePetSet = (pet) =>{
  const uniquePetSet = new Set(pet);
  return Array.from(uniquePetSet);
}
console.log(removeDuplicatePetSet(pet))
console.timeEnd('optimizedSet')
