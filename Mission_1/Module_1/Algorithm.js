
const startTime = performance.now();

for( i = 0; i < 100; i++ ) {
     console.log( i );
}

const endTime = performance.now();
console.log( `Execution time: ${endTime - startTime} milliseconds` );