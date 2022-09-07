const database = []
const savings_accounts = []
const current_accounts = []
const fixed_accounts = []
const recurring_accounts = []
const homeLoan_accounts = []
const vehicleLoan_accounts = []
const personalLoan_accounts = [] 
let i=0

class Bank{                                             //account creation
    constructor(userName,initial_amt,mail)
    {
        this.userName = userName
        let account_num = Math.floor(Math.pow(10, 13-1) + Math.random() * (Math.pow(10, 13) - Math.pow(10, 13-1) - 1)) 
        this.account_num = account_num
        this.initial_amt = initial_amt
        this.mail = mail
        this.date = new Date("July 21, 2014 01:15:00")
    }

    add()
    {
        i++
        let temp_obj = this
        database.push(temp_obj)
        return i
    }

}


class Savings {                                         //operations for savings account

    constructor(user,transaction_amt,statement)
    {
        this.user = user
        this.transaction_amt = transaction_amt
        this.statement = statement

    }
 
    deposit()
    {
            database.forEach((item)=>{
            if(item.userName=="Prasad")
            {
               savings_accounts.push(item)
            }
        })


        for(let i=0;i<savings_accounts.length;i++)
        {
            if(savings_accounts[i].userName==this.user)
            {
                savings_accounts[i].initial_amt = savings_accounts[i].initial_amt + this.transaction_amt

                database.forEach((item)=>{
                    if(item.userName=="Prasad")
                    {
                       this.statement.push(`Amount ${this.transaction_amt} credited to the savings account on ${new Date()}`)
                    }
                })

                console.log("statement is" ,this.statement)
            }
        }



        console.log(`Amount ${this.transaction_amt} credited to the savings account on ${new Date()}`)
        
        
    }

    balance()
    {
        let cur_date = new Date()
    
        for(let i=0;i<savings_accounts.length;i++)
        {
            if(savings_accounts[i].userName==this.user)
            {
                let pre_date = savings_accounts[i].date
                let pre_year = pre_date.getFullYear()
                let cur_year = cur_date.getFullYear()
                let diff = cur_year -  pre_year
                
                let intrest = (savings_accounts[i].initial_amt*diff*3.5)/100
                let total_balance = savings_accounts[i].initial_amt + intrest
                console.log(`Your total balance in savings account is ${total_balance}`)

            }
        }
  
    }

    withdrawal()
    {
        for(let i=0;i<current_accounts.length;i++)
        {
            if(current_accounts[i].userName==this.user)
            {
                current_accounts[i].initial_amt = current_accounts[i].initial_amt + this.transaction_amt
            }
        }

        console.log(`Amount ${this.transaction_amt} debited to the savings account`)
    }
 
}


class Current
{
    constructor(user,transaction_amt,statement)
    {
        this.user = user
        this.transaction_amt = transaction_amt
        this.statement = statement
    }


    deposit()
    {
        database.forEach((item)=>{
            if(item.userName=="Prasad")
            {
               current_accounts.push(item)
            }
        })

        for(let i=0;i<current_accounts.length;i++)
        {
            if(current_accounts[i].userName==this.user)
            {
                current_accounts[i].initial_amt = current_accounts[i].initial_amt + this.transaction_amt
                database.forEach((item)=>{
                    if(item.userName=="Prasad")
                    {
                       this.statement.push(`Amount ${this.transaction_amt} credited to the current account on ${new Date()}`)
                    }
                })
            }
        }

        console.log(`Amount ${this.transaction_amt} credited to the current account on ${new Date()}`)
    }

 

    balance()
    {
        let cur_date = new Date()
    
        for(let i=0;i<current_accounts.length;i++)
        {
            if(current_accounts[i].userName==this.user)
            {
                let pre_date = current_accounts[i].date
                let pre_year = pre_date.getFullYear()
                let cur_year = cur_date.getFullYear()
                let diff = cur_year -  pre_year
                
                let intrest = (current_accounts[i].initial_amt*diff*3.5)/100
                let total_balance = current_accounts[i].initial_amt + intrest
                console.log(`Your total balance in current account is ${total_balance}`)

            }
        }
 
    }

    withdrawal()
    {
        for(let i=0;i<current_accounts.length;i++)
        {
            if(current_accounts[i].userName==this.user)
            {
                current_accounts[i].initial_amt = current_accounts[i].initial_amt - this.transaction_amt
            }
        }
    }

}


class Fixed
{
    constructor(user,transaction_amt)
    {
        this.user = user
        this.transaction_amt = transaction_amt
    }

    deposit()
    {
            database.forEach((item)=>{
            if(item.userName=="Prasad")
            {
                fixed_accounts.push(item)
            }
        })


        for(let i=0;i<fixed_accounts.length;i++)
        {
            if([i].userName==this.user)
            {
                fixed_accounts[i].initial_amt = fixed_accounts[i].initial_amt + this.transaction_amt
            }
        }

        console.log(`Amount ${this.transaction_amt} deposited to the fixed account`)
    }

    balance()
    {
        let cur_date = new Date()
    
        for(let i=0;i<fixed_accounts.length;i++)
        {
            if(fixed_accounts[i].userName==this.user)
            {
                let pre_date = fixed_accounts[i].date
                let pre_year = pre_date.getFullYear()
                let cur_year = cur_date.getFullYear()
                let diff = cur_year -  pre_year
                
                let intrest = (fixed_accounts[i].initial_amt*diff*7.5)/100
                let total_balance = fixed_accounts[i].initial_amt + intrest
                console.log(`Your total balance in Fixed account is ${total_balance}`)

            }
        }
 
    }

}


class Recurring
{
    constructor(user,transaction_amt)
    {
        this.user = user
        this.transaction_amt = transaction_amt
    }

    deposit()
    {
            database.forEach((item)=>{
            if(item.userName=="Prasad")
            {
                recurring_accounts.push(item)
            }
        })


        for(let i=0;i<recurring_accounts.length;i++)
        {
            if(recurring_accounts[i].userName==this.user)
            {
                recurring_accounts[i].initial_amt = recurring_accounts[i].initial_amt + this.transaction_amt
            }
        }

        console.log(`Amount ${this.transaction_amt} deposited to the recurring account`)
    }

    balance()
    {
        let cur_date = new Date()
    
        for(let i=0;i<recurring_accounts.length;i++)
        {
            if(recurring_accounts[i].userName==this.user)
            {
                let pre_date = recurring_accounts[i].date
                let pre_year = pre_date.getFullYear()
                let cur_year = cur_date.getFullYear()
                let diff = cur_year -  pre_year
                
                let intrest = (recurring_accounts[i].initial_amt*diff*5.5)/100
                let total_balance = recurring_accounts[i].initial_amt + intrest
                console.log(`Your total balance in Recurring account is ${total_balance}`)

            }
        }
 
    }

}

class homeLoan
{
    constructor(user,transaction_amt)
    {
        this.user = user
        this.transaction_amt = transaction_amt
    }

    deposit()
    {
            database.forEach((item)=>{
            if(item.userName=="Prasad")
            {
                homeLoan_accounts.push(item)
            }
        })


        for(let i=0;i<homeLoan_accounts.length;i++)
        {
            if([i].userName==this.user)
            {
                homeLoan_accounts[i].initial_amt = homeLoan_accounts[i].initial_amt + this.transaction_amt
            }
        }

        console.log(`Amount ${this.transaction_amt} deposited For Home Loan Account`)
    }

    balance()
    {
        let cur_date = new Date()
    
        for(let i=0;i<homeLoan_accounts.length;i++)
        {
            if(homeLoan_accounts[i].userName==this.user)
            {
                let pre_date = homeLoan_accounts[i].date
                let pre_year = pre_date.getFullYear()
                let cur_year = cur_date.getFullYear()
                let diff = cur_year -  pre_year
                
                let intrest = (homeLoan_accounts[i].initial_amt*diff*10.5)/100
                let total_balance = homeLoan_accounts[i].initial_amt + intrest
                console.log(`Your total balance in Home loan account is ${total_balance}`)

            }
        }
 
    }
}

class VehicleLoan
{
    constructor(user,transaction_amt)
    {
        this.user = user
        this.transaction_amt = transaction_amt
    }

    deposit()
    {
            database.forEach((item)=>{
            if(item.userName=="Prasad")
            {
                vehicleLoan_accounts.push(item)
            }
        })


        for(let i=0;i<vehicleLoan_accounts.length;i++)
        {
            if([i].userName==this.user)
            {
                vehicleLoan_accounts[i].initial_amt = vehicleLoan_accounts[i].initial_amt + this.transaction_amt
            }
        }

        console.log(`Amount ${this.transaction_amt} deposited For Vehicle Loan Account`)
    }

    balance()
    {
        let cur_date = new Date()
    
        for(let i=0;i<vehicleLoan_accounts.length;i++)
        {
            if(vehicleLoan_accounts[i].userName==this.user)
            {
                let pre_date = vehicleLoan_accounts[i].date
                let pre_year = pre_date.getFullYear()
                let cur_year = cur_date.getFullYear()
                let diff = cur_year -  pre_year
                
                let intrest = (vehicleLoan_accounts[i].initial_amt*diff*13.5)/100
                let total_balance = vehicleLoan_accounts[i].initial_amt + intrest
                console.log(`Your total balance in Vehicle loan account is ${total_balance}`)

            }
        }
 
    }
}

class PersonalLoan
{
    constructor(user,transaction_amt)
    {
        this.user = user
        this.transaction_amt = transaction_amt
    }

    deposit()
    {
            database.forEach((item)=>{
            if(item.userName=="Prasad")
            {
                personalLoan_accounts.push(item)
            }
        })


        for(let i=0;i<personalLoan_accounts.length;i++)
        {
            if([i].userName==this.user)
            {
                personalLoan_accounts[i].initial_amt = personalLoan_accounts[i].initial_amt + this.transaction_amt
            }
        }

        console.log(`Amount ${this.transaction_amt} deposited For Home Loan Account`)
        
        console.log(homeLoan_accounts)
    }

    balance()
    {
        let cur_date = new Date()
    
        for(let i=0;i<personalLoan_accounts.length;i++)
        {
            if(personalLoan_accounts[i].userName==this.user)
            {
                let pre_date = personalLoan_accounts[i].date
                let pre_year = pre_date.getFullYear()
                let cur_year = cur_date.getFullYear()
                let diff = cur_year -  pre_year
                
                let intrest = (personalLoan_accounts[i].initial_amt*diff*8.5)/100
                let total_balance = personalLoan_accounts[i].initial_amt + intrest
                console.log(`Your total balance in Personal loan account is ${total_balance}`)

            }
        }
 
    }

}


class Account_manager
{
    savings_list()
    {
        console.log(savings_accounts)
    }

    currrent_list()
    {
        console.log(current_accounts)
    }

    fixed_list()
    {
        console.log(current_accounts)
    }

    recurring_list()
    {
        console.log(recurr_acc)
    }

    home_list()
    {
        console.log(homeLoan_accounts)
    }

    vehicle_list()
    {
        console.log(vehicleLoan_accounts)
    }

    personal_list()
    {
        console.log(personalLoan_accounts)
    }
}


const person1 = new Bank("Prasad",1,"prasad@gmail.com")
const person2 = new Bank("Ram",20000,"Ram@gmail.com")
let count1 = person1.add()
let count2 = person2.add()
console.log(database[count2-1].userName)


const savings_acc = new Savings("Prasad",10000,[])
savings_acc.deposit()
savings_acc.balance()
savings_acc.withdrawal()

const current_acc = new Current("Prasad",2000,[])
current_acc.deposit()
current_acc.balance()
current_acc.withdrawal()

const fixed_acc = new Fixed("Prasad",50000,[])
fixed_acc.deposit()
fixed_acc.balance()

const recurr_acc = new Recurring("Prasad",90000,[])
recurr_acc.deposit()
recurr_acc.balance()

const home_acc = new homeLoan("Prasad",50000,[])
home_acc.deposit()
home_acc.balance()

const vehicle_acc = new VehicleLoan("Prasad",50000,[])
vehicle_acc.deposit()
vehicle_acc.balance()

const personal_acc = new PersonalLoan("Prasad",50000,[])
personal_acc.deposit()
personal_acc.balance()

const manager = new Account_manager()
manager.savings_list()