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

let bankAccount = new BankAccount(100,12, 50 ); //balance, interest, monthlyFee
// bankAccount.deposit();
// bankAccount.withdraw();

console.log(bankAccount.finishMonth());
console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(50));

/////////

class Bank extends BankAccount {
    constructor(balance, interest, monthlyFee){
        let bankacc = new BankAccount(balance, interest, monthlyFee);
    }

withdraw(bankAccountNumber,amount){ 
// require an acccount number, validate it and require withdrawal amount.

}

deposit(bankAccountNumber,amount){
// require account number, validate it and require deposit amount.

}

transfer(from_bank_account_number,to_bank_account_number, amount){
// require FROM bank account number, validate it and require TO bank account number and validate it.
// require amount and act withdraw on FROM account.
// act deposit on TO account.... 
    
}
}