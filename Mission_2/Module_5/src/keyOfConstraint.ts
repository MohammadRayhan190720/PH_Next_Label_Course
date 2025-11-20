//key of => type operator

type RichPeopleVehicle = {
  car: string; //key : value
  bike: string;
  cng : string;
}

type myVehicle1 = "car" | "bike" | "cng" ;
type myVehicle2 = keyof RichPeopleVehicle;