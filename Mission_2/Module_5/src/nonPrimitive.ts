//non-primitive => array,object
//Ts- tuple

const bazarList : string [] = ["mango", "banana", "apple"];

bazarList.push("jackfruit");

const mixBazarList : (string | number | boolean)[]= ["mango", 20, true, "apple"];

mixBazarList.push(false);

//tuple

let nameRoll : [string,number] = ['T', 101]

let destination : [string,string,number] = ["Dhaka","Ctg", 3];

//reference type => object

const userName : {
  organization: "Programming Hero";//literal type
  firstName : string;
  middleName ? : string; //optional type
  lastName : string;
  isMarried : boolean;
} = {
  organization : "Programming Hero",
  firstName : "Mr.",
  middleName : "X",
  lastName : "Mia",
  isMarried : false,
}

console.log(userName);