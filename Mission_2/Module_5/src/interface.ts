// interface is Like type alias but it only declare the structure of an object
//interface => array, object, function

type User = {
  name: string,
  age: number,
}

// interface declaration
interface IUser {
  name: string,
  age: number,
}


type Role = {
  role: "Admin" | "User",
};

type UserWithRole = User & Role;

// interface extension
interface IUserWithRole extends IUser{
  role : "Admin" | "User",
}



const user1 : IUserWithRole ={
  name: "Mr. X",
  age: 30,
  role: "User",

}
const user2 : IUser ={
  name: "Ms. Y",
  age: 25,
}

