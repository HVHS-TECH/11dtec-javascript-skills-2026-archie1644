/****************************
data types
****************************/

console.log("Running t11_data_types.js")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<h2>added by javascrript</h2>";

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
function start(){
OUTPUT.innerHTML += "<p>Hi "+ name;
OUTPUT.innerHTML += "<p>as of " + year + " you are " + age + " years old";
OUTPUT.innerHTML += "<p>you were born in " + yearBorn;
OUTPUT.innerHTML += "<p>In 10 years, you will be " + tenYears;
OUTPUT.innerHTML += "<p>you have " + pocketMoney + " dollars.";
OUTPUT.innerHTML += "<p>you spend half of your money, now you have " + halfMoney + " dollars";
OUTPUT.innerHTML += "<p>then you get $3, you now have " + plusThree + " dollars" ;
welcome()
displayProduct("<p>chocolate: ", "$4.00");
displayProduct("<p>chips: ", "$3.00");
displayProduct("<p>drink: ", "$2.50");
}

/****************************
functions
****************************/
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is "+name+"</p>";
}

function getFormInput2(){
    const AGE_FIELD = document.getElementById("ageField");
    let age = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p>Your age is "+age+"</p>";
}

function getFormInput3(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let pocketMoney = MONEY_FIELD.value;
    OUTPUT.innerHTML += "<p>Your money is $"+pocketMoney+"</p>";
}



function welcome(){
    OUTPUT.innerHTML += "<p>welcome to the shop:";
}

function displayProduct(_name, _price){
    OUTPUT.innerHTML += _name + _price
}



