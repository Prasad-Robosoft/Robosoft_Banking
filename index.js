class Bank
{

    constructor(acc_holder,initial_amt,email,phone,date) //constructor initialization with unique account number,holdername,initial amoount,email and phone 
    {
        let account_num = Math.floor(Math.pow(10, 13-1) + Math.random() * (Math.pow(10, 13) - Math.pow(10, 13-1) - 1)) 
        this.account_num = account_num
        this.acc_holder = acc_holder
        this.initial_amt = initial_amt
        this.email = email
        this.phone = phone
        date = new Date("July 21, 2014 01:15:00")
        this.date = date
    }

}


class Casa extends Bank    //caluculates intrest for each type of loan
{
    constructor(acc_holder,initial_amt,email,phone,type)
    {
        super(acc_holder,initial_amt,email,phone)
        this.type = type
    }

    balance()
    {
        let cur_date = new Date()
        let pre_date = this.date
        let pre_year = pre_date.getFullYear()
        let cur_year = cur_date.getFullYear()
        let diff = cur_year -  pre_year
        
        if(this.type=="savings")
        {
            let intrest = (this.initial_amt*diff*3.5)/100
            let total_balance = this.initial_amt + intrest
            console.log(`Your total balance in savings account is ${total_balance}`)
        }else{
            let intrest = (this.initial_amt*diff*2.5)/100
            let total_balance = this.initial_amt + intrest
            console.log(`Your total balance in current account is ${total_balance}`)
        }
    }

}


class Casa_deposit extends Bank          //updates the CASA account balance has both withdrawal and deposit
{
    constructor(transaction_amt,acc_holder,initial_amt,email,phone,date)
    {
        super(acc_holder,initial_amt,email,phone,date)
        this.transaction_amt = transaction_amt
    }

    deposit()
    {
        this.initial_amt = this.initial_amt + this.transaction_amt
        console.log(`The updated balance after deposit is ${this.initial_amt}` )
        statement.push(`\nAccount credited with ${this.transaction_amt} on ${new Date()}`)
    }

    withdrawal()
    {
        this.initial_amt = this.initial_amt - this.transaction_amt
        console.log(`The updated balance after withdrawal is ${this.initial_amt}`)
        statement.push(`\nAccount debited with ${this.transaction_amt} on ${new Date()}`)
    }

}



class fixed_recurr extends Bank                 //fixed and reccuring only have deposits
{
    constructor(acc_holder,initial_amt,email,phone,type)
    {
        super(acc_holder,initial_amt,email,phone)
        this.type = type
    }

    balance()
    {
        let cur_date = new Date()
        let pre_date = this.date
        let pre_year = pre_date.getFullYear()
        let cur_year = cur_date.getFullYear()
        let diff = cur_year -  pre_year
        
        if(this.type=="fixed")
        {
            let intrest = (this.initial_amt*diff*6.5)/100
            let total_balance = this.initial_amt + intrest
            console.log(`Your total balance in fixed account is ${total_balance}`)
        }else{
            let intrest = (this.initial_amt*diff*4.5)/100
            let total_balance = this.initial_amt + intrest
            console.log(`Your total balance in recurring account is ${total_balance}`)
        }
    }
}



class fixed_recurr_deposit extends fixed_recurr
{
    constructor(transaction_amt,acc_holder,initial_amt,email,phone,date)
    {
        super(acc_holder,initial_amt,email,phone,date)
        this.transaction_amt = transaction_amt
    }

    deposit()
    {
        this.initial_amt = this.initial_amt + this.transaction_amt
        console.log(`balance after deposit is ${this.initial_amt}`)
        statement.push(`\nAccount credited with ${this.transaction_amt} on ${new Date()}`)
    }
}



class Loan extends Bank
{
    constructor(transaction_amt,type,acc_holder,initial_amt,email,phone,date)
    {
        super(acc_holder,initial_amt,email,phone,date)
        this.transaction_amt = transaction_amt
        this.type = type
    }

    deposit()
    {
        if(this.type=="house")
        {
            let intrest = 13
            let amt = (this.initial_amt*intrest*3.5)/100
            console.log(`Total house loan amount is ${amt}`)
        }else if(this.type=="vehicle")
        {
            let intrest = 16
            let amt = (this.initial_amt*intrest*3.5)/100
            console.log(`Total vehicle loan amount is ${amt}`)
        }else
        {
            let intrest = 10
            let amt = (this.initial_amt*intrest*3.5)/100
            console.log(`Total personal loan amount is ${amt}`)
        }
    }

}

class Account_Manager extends Bank
{
    constructor(acc_holder,initial_amt,email,phone,date)
    {
        super(acc_holder,initial_amt,email,phone,date)
    }

    Account_details()
    {
        console.log(this)
    }

    Account_statement()
    {
        console.log(`Account statement is ${statement}`)
    }

    Account_balance()
    {
        console.log(`Account balance is ${this.initial_amt}`)
    }
}

const statement = []

acc_prasad = new Bank("Prasad",40000,"Prasad@gmail.com",90005600)   //to create new account
console.log(acc_prasad)

casa_depo = new Casa_deposit(1000,"Parsad",40000,"Prasad@gmail.com",90005600)  //casa deposit
casa_depo.deposit()

casa_depo = new Casa_deposit(1000,"Parsad",40000,"Prasad@gmail.com",90005600) //casa withdrawal
casa_depo.withdrawal()

casa = new Casa("Prasad",40000,"Prasad@gmail.com",90005600,"current")      //csa balance current after adding interest
casa.balance()

casa = new Casa("Prasad",40000,"Prasad@gmail.com",90005600,"savings")      //csa balance savings after adding intrest
casa.balance()

fixed_b = new fixed_recurr("Prasad",40000,"Prasad@gmail.com",90005600,"fixed")         //fixed account balance with interest
fixed_b.balance()

rcc_b = new fixed_recurr("Prasad",40000,"Prasad@gmail.com",90005600,"recurring")      //recurring account balance with interest
rcc_b.balance()

fc = new fixed_recurr_deposit(1000,"Parsad",40000,"Prasad@gmail.com",90005600)  //fixed recurring deposit
fc.deposit(5000)

loan = new Loan(100000,"home","Prasad",40000,"Prasad@gmail.com",90005600)   //home personal and vehicle after adding intrest
loan.deposit()

loan = new Loan(100000,"vehicle","Prasad",40000,"Prasad@gmail.com",90005600)   //vehicle personal and vehicle after adding intrest
loan.deposit()

loan = new Loan(100000,"personal","Prasad",40000,"Prasad@gmail.com",90005600)   //personal personal and vehicle after adding intrest
loan.deposit()


acc_man = new Account_Manager("Prasad",40000,"Prasad@gmail.com",90005600)
acc_man.Account_details()
acc_man.Account_statement()