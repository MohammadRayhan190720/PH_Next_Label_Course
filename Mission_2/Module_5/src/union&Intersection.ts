//union |


type UserRole = "admin" | "user" ;

const getDashboard = ( role : UserRole ) =>{
  if( role === "admin"){
    return "You are allowed to access all the admin dashboard";
  }
  else if (role === "user"){
    return "You are allowed to access user dashboard";
  } else{
    return "Guest Mode in On"
  }
}

console.log( getDashboard("admin") );


//intersection &

type Employee = {
  id : number,
  name : string,
  age : number
}

type Manager = {
  designation : string,
  teamSize : number,
}

type EmployeeManager = Employee & Manager;

const employeeManager : EmployeeManager = {
  id : 101,
  name : "Rayhan Ahmed",
  age : 24,
  designation : "Software Engineer",
  teamSize : 10
}