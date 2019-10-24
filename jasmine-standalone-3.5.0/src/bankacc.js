class BankAccount {
    constructor(balance, interest, monthlyFee){
        this.balance = balance;
        this.interest = interest;
        this.monthlyFee = monthlyFee;
    }


finishMonth(){
// var grossAmount = (this.balance + this.deposit()) - withdraw();
// var totalAmount = grossAmount * this.interest;
let rate = 1 + (this.interest/100);
return this.balance = parseInt(rate * this.balance - this.monthlyFee);

// return totalAmount;
}

deposit(amount){
this.balance = this.balance + amount;

return this.balance;
}

withdraw(amount){
this.balance = this.balance - amount;
return this.balance;
}

}

let bankAccount = new BankAccount(100,12, 50); //balance, interest, monthlyFee

//console.log(bankAccount.finishMonth());
//console.log(bankAccount.deposit(100));
//console.log(bankAccount.withdraw(50));

module.exports = BankAccount;