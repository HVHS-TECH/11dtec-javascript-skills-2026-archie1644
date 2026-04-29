/****************************
Functions
****************************/
console.log("Running t06_functions.js")

const OUTPUT = document.getElementById("SpaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>added by javascrript</h2>";

//variables
let name = "archie";
let pocketMoney = 2;
let age = 16;
let year = 2026;
var yearBorn = year-age;
var tenYears = age+10;
var halfMoney = pocketMoney/2;
var plusThree = pocketMoney/2+3;
/****************************
main code
****************************/
OUTPUT.innerHTML += "<p>Hi "+ name;
OUTPUT.innerHTML += "<p>as of " + year + " you are " + age + " years old";
OUTPUT.innerHTML += "<p>you were born in " + yearBorn;
OUTPUT.innerHTML += "<p>In 10 years, you will be " + tenYears;
OUTPUT.innerHTML += "<p>you have " + pocketMoney + " dollars.";
OUTPUT.innerHTML += "<p>you spend half of your money, now you have " + halfMoney + " dollars";
OUTPUT.innerHTML += "<p>then you get $3, you now have " + plusThree + " dollars" ;

/****************************
functions
****************************/
function welcome(){
    OUTPUT.innerHTML += "<p>welcome to the shop";
}

welcome()