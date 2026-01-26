//shorting and filtering Array Explained

const rollNumbers = [2,5,25,30,15];

rollNumbers.sort((a,b) => b- a ); //descending
console.log(rollNumbers); //[ 30, 25, 15, 5, 2 ]



const age = [22, 5, 18, 25, [45, 32, 15]];

age.flat();
console.log(age.flat());


//advenced example

const buttons = [
  ['html', "css" , "javascript"],
  ['react', 'angular', 'vue'],
  ['nodejs', 'django', 'flask']
]

const techButtons = [...new Set(buttons.flat())];
console.log(techButtons); //Set(9) { 'html', 'css', 'javascript', 'react', 'angular', 'vue', 'nodejs', 'django', 'flask' }