//key of => type operator

type RichPeopleVehicle = {
  car: string; //key : value
  bike: string;
  cng : string;
}

type myVehicle1 = "car" | "bike" | "cng" ;
type myVehicle2 = keyof RichPeopleVehicle;



type User = {
  id: number;
  name: string;
  address: {
    city: string;
  }
}

const user : User = {
  id: 222,
  name: "Rayhan",
  address : {
    city: "Rangpur"
  }

}

const myId = user.id;
const myAddress = user["address"];

const getPropertyFromObj = <X> (obj : X, key: keyof X) =>{
  return obj[key];
}

console.log(getPropertyFromObj(user, "address"))

const product = {
  brand: "Hp",
  model : "aj5"
}

console.log(getPropertyFromObj(product, "model"))