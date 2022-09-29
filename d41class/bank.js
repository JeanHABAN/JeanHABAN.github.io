"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount;



class Bank {
    constructor() {
        this._accounts = [];
    }
    static nextNumber = 1;
    addAccount() {
        let accountNumber = Bank.nextNumber;
        let newAccount = new Account(accountNumber);
        this._accounts.push(newAccount);
        Bank.nextNumber++;
        return accountNumber;
    }

    addSavingsAccount(interest) {
        let accountsNumber = Bank.nextNumber;
        let newSavings = new SavingsAccount(accountsNumber, interest);
        this._accounts.push(newSavings);
        Bank.nextNumber++;
        return accountsNumber;
    }
    addCheckingAccount(overdraft) {
        let accountsNumber = Bank.nextNumber;
        let newChecking = new CheckingAccount(accountsNumber, overdraft);
        this._accounts.push(newChecking);
        Bank.nextNumber++;
        return accountsNumber;
    }

    
    closeAccount(number) {
      
        let accountNumber = this._accounts.find(num => num.getNumber() === number);
        this._accounts.splice(accountNumber, 1);
    }
    accountReport() {
       
        let report = "";
        for (let str of this._accounts) {
            report += str.toString() + "\n";
        }
        return report;
    }

    endOfMonth() {
            let monthlyReport = "";
            for (let i = 0; i < this._accounts.length; i++) {
                if (i == this._accounts.length - 1) {
                    monthlyReport += `${this._accounts[i].endOfMonth()}`
                } else {
                    monthlyReport += `${this._accounts[i].endOfMonth()}\n`
                }
            }
            return monthlyReport;
        }
  
}


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;