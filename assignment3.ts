//1) - Write a program to convert the temperature is 39 and convert from Celsius to Fahrenheit
// and vice versa. use function method
function CtoF(temp:number){
    var result1:number=temp*(9/5)+32;
    console.log("celcius to farenheit",result1);
    
    }
    CtoF(39);

    function FtoC(temp:number){
    var result2 :number=temp-32*(5/9);
    console.log("farenheit to celcius",result2);
    
    }
    
    FtoC(39);

    //2) - Write a program that calculates the percentage. Use function method
function percentage(marks:number)
{
    var percentage:number=(1030/1100)*100;
    console.log("percentage of marks is",percentage);
}
percentage(1030/1100);

//3)- Write a program that converts a given number of days into weeks and days
// such as 17 days = 2 weeks and 3 days. use the function method.
function daysIntoWeeks(days:number,weeks:number,remainingDays:number)
{
    console.log(`${weeks} weeks and ${remainingDays} days`);

}
daysIntoWeeks(17,17/7,17%7);

//4) - Write a program that calculates the discount for a product based on its price.
// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount. use function method
function discountForProductPrice(price:number,discount1:number,discount2:number){

    if(price>=100)
    {
        console.log("apply a 10% discount");
    }
    else{
        console.log("apply a 5% discount");
    }
    }
    discountForProductPrice(100,100*0.1,100*0.05);


    //Q5)Create a program that determines the category of a user-provided age. If the age is between
// 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult. use function method;
function categoryOfUserAge(age:number)
    {
    if(age>=0 && age<=12){
        console.log("you are child");
    }
    else if(age>=13 && age<=19){
        console.log("you are teenager");
    }
    else{
        console.log("you are adult");
    }
    }
    categoryOfUserAge(18);


    //Q6) - Write a program that takes temperature and checks it. 
//If it is cold then suggest the user wear warm clothes and so on according to the weather. use function method;
function temperatureWarmOrCold(temp1:number)
   {
    if(temp1<32){
        console.log("it is cold");
    }
    else{
      console.log("it is warm");
    }
    }
    temperatureWarmOrCold(41);


    //Q7) - Write a program that checks if the given number is  divisible by 3 or 5 or both 
//or not divisible by anyone show output accordingly.using function method.
function divisibleBy3Or5(num:number)
    {
    if(num%3==0 && num%5==0){
        console.log("it is divisible by 3 or 5");
    }
    else{
      
      console.log("it is not divisible by 3 or 5");
    }
    }
    divisibleBy3Or5(18);


    //Q8) - Write a program that checks if the given year is a leap year or not. use function method;
function yearIsLeapOrNot(year:number){
    //var year:number=2023;
    if(year%4==0){
        console.log("It's leap year.");
    }
    else{
        console.log("It is not leap year");
    }
    }
    yearIsLeapOrNot(2023);


    
//Q9) - Develop a program that determines the day of the week. Ask the user for a number (1-7)
// and use nested if statements to print the corresponding day's name. use function method.
function daysName(day1:number,day2:number,day3:number,day4:number,day5:number,day6:number,day7:number){
    if(day1==1){
        console.log("day1 is","Monday");
    }
    else if(day1==2){
        console.log("day2 is","Tuesday"); 
    }
    else if(day1==3){
        console.log("day3 is","Wednesday");
    }
    else if(day1==4){
        console.log("day4 is","Thursday");
    }
    else if(day1==5){
        console.log("day5 is","Friday");
    }
    else if(day1==6){
        console.log("day6 is","Saturday");
    }
    else if(day1==7){
        console.log("day7 is","Sunday");
    }
    else{
        console.log("no more days");
    }
    }
    daysName(1,2,3,4,5,6,7);

    /**Q10) Write a program that takes the number of units consumed by a user if it is 
greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to 
if greater than 500 then add 25% of the tax
Where the tax amount will be calculated by the amount of the bill. use function method.**/
function billAmount(units:number,priceOfUnit:number,calculated:number,tax1:number,tax2:number,tax3:number)
   {
    if (units>100){
       console.log(`${calculated} is the total bill with 10% tax`);
    }
    else if(units>200){
       console.log(`${calculated} is the total bill with 15% tax`);
    }
    else if(units>500){
        console.log(`${calculated} is the total bill with 25% tax`);
    }
    else{
        console.log(`${calculated} is the total bill with 35% tax);
    }
    }
    billAmount(444,50,444*50,22200*10/100,22200*15/100,22200*25/100);

    //............completed...........
