
type User = {
  id : number,
   name : {
      firstName : string;
      lastName : string;
   },
   gender : "male" | "female",
   contactNo : string,
   address : {
     thana : string,
     district : string

}

}

const user1 : User = {
    id : 101,
    name : {
      firstName : "Mr.",
      lastName : "Ray"
    },
    gender : "male",
    contactNo : "017xxxxxxxx",
    address : {
      thana : "Gangachara",
      district : "Rangpur"
    }

}

const user2: User = {
  id: 102,
  name: {
    firstName: "Mr.",
    lastName: "tamanna",
  },
  gender: "male",
  contactNo: "017xxxxxxxx",
  address: {
    thana: "Gangachara",
    district: "Rangpur",
  },
};

type Admin = boolean;

const isAdmin : Admin = true;

type Name = string;

const name : Name = "Rayhan Ahmed";


//function type alias

type AddFunc = (num1 : number, num2 : number) => number;

const add : AddFunc = (num1 , num2) => num1 + num2;