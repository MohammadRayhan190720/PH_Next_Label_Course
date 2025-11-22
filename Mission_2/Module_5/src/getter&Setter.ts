class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
    //set balance
  // addBalance(balance: number) {
  //   return this.userBalance = this.userBalance + balance;
  // }

  //setter user kore 
  set addBalance(balance: number){
    this.userBalance = this.userBalance + balance;
  }
  
  //get Balance
  // getBalance(){
  //   return this.userBalance
  // }

  //getter use kore
   get getBalance (){
    return this.userBalance;
   }

}

const myAccount = new BankAccount(111, "Rayhan", 980);

// myAccount.addBalance(20);
// myAccount.addBalance(1000);
// console.log(myAccount);
// console.log(myAccount.getBalance())

myAccount.addBalance = 120;
console.log(myAccount)
console.log(myAccount.getBalance)
