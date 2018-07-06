//prompt for username and store it in variable userName
var userName = prompt("Enter your name:");
//variable to hold header1 "id"
var greetingParagraph = document.getElementById("greeting");
//append userName to the end of header1
greetingParagraph.innerHTML += ", " + userName;

//prompt user for first and second number and store it in variable num1. Use parseInt function to read user input as int instead of str
var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"));

//variable to hold operand1 and operand2 "id's"
var operand1 = document.getElementById("operand1") ;
var operand2 = document.getElementById("operand2") ;
//add className
operand1.className += "numCSS";
operand2.className += "numCSS";

//append numbers to operand #1 and #2
operand1.innerHTML += num1;
operand2.innerHTML += num2;

//Variable to store result
var sumAddition = num1 + num2;
var sumSubtraction = num1 - num2;
var sumMultiplication = num1 * num2;
var sumDivision = num1 / num2;
var sumModulus = num1 % num2;

//display result addition
document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sumAddition;
//display result subtraction
document.getElementById("subtraction").innerHTML = "The difference between " + num1 + " and " + num2 + " is " + sumSubtraction;
//display result multiplication
document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 + " is " + sumMultiplication;
//display result division
document.getElementById("division").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + sumDivision;
//display result modulus
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + num1 + " and " + num2 + " is " + sumModulus;