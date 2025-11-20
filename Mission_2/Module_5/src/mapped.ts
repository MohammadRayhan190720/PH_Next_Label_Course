
const arrayOfNumber : number [] = [1,4,6];
const arrayOfString : string [] = ["1", "4" ,"6"]


const arrayOfStringUseingMap : string[] = arrayOfNumber.map(num => num.toString())

console.log(arrayOfStringUseingMap)


type AreaOfNumber = {
  weight: number;
  height: number;
}
// type AreaOfString = {
//   weight: string;
//   height: string;
// }

// type AreaOfString = {
//   [key in "Weight" | "height"] : string ;
// }

type Area<T> = {
  [key in keyof T] : T[key]
}

const area1 : Area<{
  weight: string,height: string
}> = {
   weight: "50",
   height: "10"
}

console.log(area1)
