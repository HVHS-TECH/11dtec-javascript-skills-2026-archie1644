/****************************
JavaScript and HTML
****************************/
console.log("Running t05_JavaScript_and_HTML.js")

const OUTPUT = document.getElementById("ForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>added by javascrript</h2>";

//variables
let name = "archie";
let pocketMoney = 2;
let age = 16;
let year = 2026;

/****************************
main code
****************************/
console.log("Hi "+ name + ",")
console.log("as of " + year + ", " + "you are " + age + " years old" + ".")
console.log("you were born in", year-age)
var yearBorn = year-age;
console.log("In 10 years, you will be", age+10)
var tenYears = age+10;
console.log("you have " + pocketMoney + " dollars.")
console.log("you spend half of your money, now you have", pocketMoney/2, "dollars")
var halfMoney = pocketMoney/2;
console.log("then you get $3, you now have", pocketMoney/2+3, "dollars" )
var plusThree = pocketMoney/2+3;


OUTPUT.innerHTML += "<p>Hi " + name + ",</p>"
OUTPUT.innerHTML += "<p>as of " + year + ", " + "you are " + age + " years old" + ".</p>"
OUTPUT.innerHTML += "<p>you were born in " + yearBorn + ".</p>"
OUTPUT.innerHTML += "<p>In 10 years, you will be " + tenYears + ".</p>"
OUTPUT.innerHTML += "<p>you have " + pocketMoney + " dollars</p>"
OUTPUT.innerHTML += "<p>you spend half of your money, now you have " + halfMoney + ".</p>"
OUTPUT.innerHTML +=

/****************************
functions
****************************/
