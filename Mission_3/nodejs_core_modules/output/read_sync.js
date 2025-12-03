const fs = require('fs');

console.log('Reading file synchronously...');

try{
  const data = fs.readFileSync('../data/entries/dairy.txt', 'utf8');
  console.log('File content:');
  console.log(data);
}catch(err){
  console.error('Error reading file:', err);
}

// const data = fs.readFileSync('../data/entries/dairy.txt', 'utf8');

console.log("finished")