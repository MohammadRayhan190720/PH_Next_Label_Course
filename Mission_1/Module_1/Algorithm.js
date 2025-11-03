
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