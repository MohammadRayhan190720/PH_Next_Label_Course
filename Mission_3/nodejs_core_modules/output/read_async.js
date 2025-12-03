const fs = require('fs');

console.log("start reading file asynchronously...");

fs.readFile('../data/entries/dairy.txt', "utf-8", (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    
  }else{
    console.log('File content:');
    console.log(data);
  }

})

console.log("File read immediately,non blocking")