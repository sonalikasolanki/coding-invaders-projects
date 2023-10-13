let TAXES = 0.20
let RENT = 20000
let FOOD = 12000
let OTHER = 13000
let MY_SALARY = 70000
let TaxAmount = MY_SALARY * TAXES;
let mySalaryNet = MY_SALARY - TaxAmount;
let totalAvailable = mySalaryNet - RENT;
let totalAvailable1 = FOOD + OTHER;
alert('My salary is ' + MY_SALARY + ' INR')
alert('I payed ' + TaxAmount + ' INR as taxes')
alert('I have ' + totalAvailable + ' INR left') 
alert('i have '+totalAvailable1 +  'INR food')