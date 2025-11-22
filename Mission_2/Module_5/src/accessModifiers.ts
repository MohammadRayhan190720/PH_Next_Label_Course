class BankAccount  {
  readonly userId: number;
  userName: string;
  protected userBalance : number;

  constructor(userId:number,userName:string,userBalance:number){
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    
  }

  addBalance(balance:number){
    this.userBalance = this.userBalance + balance
  }
  
}

class StudentAccount extends BankAccount{

  test(saveTaka : number){
    this.userBalance = this.userBalance + saveTaka
  }
}

const myAccount = new BankAccount(111, "Rayhan", 980)

myAccount.addBalance (20) ;
console.log(myAccount)