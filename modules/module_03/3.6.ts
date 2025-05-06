{
// getter and setter

    class BankAccount{
        readonly id: number;
        name: string;
        protected _balance: number;
    
    
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number){
            this._balance = this._balance + amount;
        }

        // getter
        get Balance(){
            return this._balance;
        }
    }
    

    
    const poorAccount = new BankAccount(111, "Mr. Poor", 20);

    poorAccount.deposit = 500;
    const myBalance = poorAccount.Balance
    console.log(myBalance);




























}