let BankAccount = require("../src/bankacc")
let accounts = [];

class Bank {
    constructor(balance, interest, monthlyFee, accountNumber){
        this.bankAccount = new BankAccount(balance, interest, monthlyFee)// balance, interest, monthlyFee
        this.accountNumber = accountNumber;
        this.createAccounts(balance, interest, monthlyFee, accountNumber)
    }

createAccounts(balance, interest, monthlyFee, accountNumber){
    this.bankAccount = new BankAccount(balance, interest, monthlyFee);
    this.accountNumber = accountNumber;
    accounts.push({accountnumber : this.accountNumber,
    bankAccount : this.bankAccount
    })
}

withdraw(bankAccountNumber,amount){
// require an acccount number, validate it and require withdrawal amount.
for (let i =0; i < accounts.length; i++){
    if (accounts[i].accountnumber === bankAccountNumber){
        accounts[i].bankAccount.withdraw(amount);
    } 
    return this.bankAccount.balance;
}}

deposit(bankAccountNumber,amount){
// require account number, validate it and require deposit amount.
for (let j = 0; j < accounts.length; j++){
    if (accounts[j].accountnumber === bankAccountNumber){
        accounts[j].bankAccount.deposit(amount);
    } 
    return this.bankAccount.balance;
}}

transfer(from_bank_account_number, to_bank_account_number, amount){
// require FROM bank account number, validate it and require TO bank account number and validate it.
// require amount and act withdraw on FROM account.
// act deposit on TO account.... 
// bankAccountNumber = from_bank_account_number;
for (let k =0; k < accounts.length; k++){
    if (from_bank_account_number === this.accountNumber ){
        accounts[k].bankAccount.withdraw(amount);
        
        for (let l =0; l < accounts.length; l++){
            if (to_bank_account_number === this.accountNumber){
                accounts[l].bankAccount.deposit(amount);
            } return this.bankAccount.balance;
        }}
    } return this.bankAccount.balance;
}

}


/*.............................................instances of bank. BANK ACCOUNTS.......................................*/

let client = new Bank(20000, 10, 50, 1234567899);//balance, interest, monthlyFee, accountNumber
let client2 = new Bank(3000, 10, 50, 9987654321)
let client3 = new Bank(11357, 10, 50, 7532654321)

console.log(accounts)

//console.log("see below")

// console.log(client.transfer(client.accountNumber, client2.accountNumber, 100));

console.log(client.transfer(client.accountNumber,client2.accountNumber, 100))

//console.log("see below")

console.log(accounts)