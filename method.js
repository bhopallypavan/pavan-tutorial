let bankAccount = {
    holder:"pavan",
    balance:4000,
 
    deposite(amount){
        this.balance +=amount;
        console.log("balance:",this.balance);
    },
    withdral(amount){
    this.balance -= amount;
    console.log("balance:",this.balance);

    
}


    
};
bankAccount.deposite(10000);


    


