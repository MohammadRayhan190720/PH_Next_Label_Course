//function => arrow function, normal function

function  add (num1 : number,num2 : number) : number{
  return num1 + num2
}

const sum = (num1 : number,num2 : number) : number =>{
  return num1 + num2
}

console.log(add(2,3))
console.log(sum(5,7))


// object => function => method

const poorUser = {
  name : "Mr. X",
  balance : 0,
  addBalance (value : number) : number {
    const totalBalance = this.balance + value;
    return totalBalance;
  }

}
console.log(poorUser.addBalance(5000));


//callback function

const arr : number[] = [2,4,6,8,10];

const squareArr = arr.map((num : number) : number => num * num);
console.log(squareArr);