// conditional Type => Je Type condition ar upor depend kore setai condition type;


type A = null;
type B = undefined;

type C = A extends undefined ? true : B extends number ? true :false;


type RichPeopleVehicle = {
  bike : string;
  car: string;
  ship: string;
}

type CheckVehicle <T> = T extends keyof RichPeopleVehicle ? true : false ;

type hasVehicle = CheckVehicle < "ship">