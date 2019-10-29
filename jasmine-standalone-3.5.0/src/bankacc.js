class BankAccount {
    constructor(balance, interest, monthlyFee){
        this.balance = balance;
        this.interest = interest;
        this.monthlyFee = monthlyFee;
    }

finishMonth(){
let rate = 1 + (this.interest/100);
return this.balance = parseInt(rate * this.balance - this.monthlyFee);
}

deposit(amount){
this.balance = this.balance + amount;
}

withdraw(amount){
this.balance = this.balance - amount;
}
}

let bankAccount = new BankAccount(100,12, 50); //balance, interest, monthlyFee

module.exports = BankAccount;