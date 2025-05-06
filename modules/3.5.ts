{
// access modifiers
class BankAccount{
    readonly id: number;
    name: string;
    private balance: number;


    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    
}

const poorAccount = new BankAccount(111, "Mr. Poor", 20);


































}