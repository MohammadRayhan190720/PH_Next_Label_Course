//object destructuring
//array destructuring

const user = {
  id : 101,
  name : {
    firstName : "Mr.",
    middleName : "Ray",
    lastName : "Ahmed"
  },
  age : 24,
  profession : "Developer"
}

// const myProfession = user.profession;
// const myMiddleName = user.name.middleName;

const {profession : myProfession} = user;  //name alias
const {name: {middleName}} = user;
console.log({myProfession, middleName});


const players = [ "Tamim", "Sakib", "Riyad", "Shakib", "Mushfiq" ];

const bestPlayers1 = players[2];

const [, , , bestPlayers2, ,] = players;
console.log(bestPlayers1, bestPlayers2);