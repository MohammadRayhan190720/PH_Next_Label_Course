//dynamically generalize

type GenericsArray<T> = Array<T>

// const friends : string[] = ['Alice', 'Bob', 'Charlie'];
// const friends : Array<string> = ['Alice', 'Bob', 'Charlie'];
const friends : GenericsArray<string> = ['Alice', 'Bob', 'Charlie'];


// const rollNumbers : number[] = [1,2,3,4,5];
// const rollNumbers : Array<number> = [1,2,3,4,5];
const rollNumbers : GenericsArray<number> = [1,2,3,4,5];


// const eligibleList : boolean[] = [true, false, true];
//  const eligibleList : Array<boolean> = [true, false, true];
 const eligibleList : GenericsArray<boolean> = [true, false, true];

 // array of objects generics

 type User = { name: string; age: number };

 const user : GenericsArray <User> = [
  {
    name: "Alice",
    age: 25,
  },
  {
    name: "Bob",
    age: 30,
  },
 ]


 //tuple generics

 type coordinates<X,Y> = [X,Y];

 const coordinates1 : coordinates<number,number> =[10,20];

 const coordinates2 : coordinates <string,string> =["10","20"];
