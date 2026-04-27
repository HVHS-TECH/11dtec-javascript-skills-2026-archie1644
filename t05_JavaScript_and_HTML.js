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
OUTPUT.innerHTML += ("Hi "+ name + ",")
console.log("as of " + year + ", " + "you are " + age + " years old" + ".")
console.log("you were born in", year-age)
console.log("In 10 years, you will be", age+10)
console.log("you have " + pocketMoney + " " + "dollars.")
console.log("you spend half of your money, now you have", pocketMoney/2, "dollars")
console.log("then you get $3, you now have", pocketMoney/2+3, "dollars" )

/****************************
functions
****************************/

