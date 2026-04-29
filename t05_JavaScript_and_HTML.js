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
OUTPUT.innerHTML += "<p>Hello " + name + ","
OUTPUT.innerHTML += "<p>as of " + year + ", " + "you are " + age + " years old" + "."
OUTPUT.innerHTML += "<p>you were born in", year-age
OUTPUT.innerHTML += "<p>In 10 years, you will be", age+10
OUTPUT.innerHTML += "<p>you have " + pocketMoney + " " + "dollars."
OUTPUT.innerHTML += "<p>you spend half of your money, now you have " + pocketMoney/2 + " dollars"
OUTPUT.innerHTML += "<p>then you get $3, you now have " + pocketMoney/2+3 + " dollars</p>" 

/****************************
functions
****************************/

