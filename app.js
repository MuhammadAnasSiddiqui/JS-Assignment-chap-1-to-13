// chap#1 (Alert)

// alert("Error! Please enter a valid password")
// alert("Welcome to JS Land... \n Happy Coding!")
// alert("Welcome to JS Land...")
// alert("Happy Coding! \n Prevent this page creating additional dialogs.")

// console.log("Hello I can run through my web browser's console")

// chap#2 (variables for strings)
// question#1
var username;
// question#2
var myName = "Muhammad Anas Siddiqui";
// question#3
var message = "Hello World";
// alert(message);
// question#4
username = "Jhone Doe";
var age = "15 years old";
var qualification = "Certified Mobile Application Development"
// alert(username);
// alert(age);
// alert(qualification);
// question#5
var q5 = " PIZZA \n PIZZ \n PIZ \n PI \n P"
// alert(q5)
// question#6
var email = "muhammadanassiddiqui@gmail.com"
// alert("My email address is "  + email);
// question#7
var book = "“A smarter \n way to learn JavaScript”."
// alert(" I am trying to learn from the Book " + book);
// question#8
document.write("Yah! I can write HTML content through JavaSript" + "<br>");
// question#9
var specText = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(specText);
document.write("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”" + "<br>")

// chap#3 (variables for numbers)


// question#1
var age = 15;
// alert(age);
// question#2
var userVisit = "14 times";
// alert("You have visited this site " + userVisit);
// question#3
var birthyear = 2003;
document.write("My birth year is " + birthyear + "<br>");
// question#4
var visitorName = "John Doe";
var order = 5;
var storeName = "XYZ Clothing store";
document.write(" " + visitorName + " " + "ordered" + " " + order + " " + "T-shirt(s) on" + " " + storeName + "<br>");


// chap#4 (VARIABLE NAMES: LEGAL & ILLEGAL )

// question#1
// var one;var two;var three;

// question#2

// legal names
// var abc;
// var abcName;
// var _abc;
// var $abc;
// var abc1;

// illegal names
// var 1abc;
// var abc-1;
// var abc#;
// var abc abc;
// var /abc;

// question#3

document.write(" " + "a)Rules for naming JS variables" + "<br>");
document.write(" " + "b) variables name can only contain, numbers, $ and _. For example $my_1stVariable" + "<br>")
document.write(" " + "c) Variables must begin with a letter,$ or _.For example $name, _name or name" + "<br>")
document.write(" " + "d) Variable names are case sensitive" + "<br>");
document.write(" " + "e) Variable names should not be JS keywords" + "<br>");

// chap#5 (MATH EXPRESSIONS )

// question#1
// For addition
var a = 3;
var b = 5;
var c = a + b;
document.write(" " + "Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>")

// question#2
// For subtraction
var a = 5;
var b = 3;
var c = a - b;
document.write(" " + "Subtract of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>")

// For multiplication
var a = 3;
var b = 5;
var c = a * b;
document.write(" " + "Multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>")

// For division
var a = 10;
var b = 5;
var c = a / b;
document.write(" " + "Division of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>")

// For modulus.
var a = 10;
var b = 5;
var c = a % b;
document.write(" " + "Modulus of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>")

// question#3
var value = undefined;
document.write(" " + "Value after variable declaration is" + " " + value + "<br>");

var value = 5;
document.write(" " + "Initial value:" + " " + value + "<br>");

var afterincreament = ++value;
document.write(" " + "Value after increament is:" + " " + afterincreament + "<br>")

var add = afterincreament + 7;
document.write(" " + "Value after Addition is:" + " " + add + "<br>")

var afterdecreament = --add;
document.write(" " + "Value after decreament is:" + " " + afterdecreament + "<br>")

var divide = afterdecreament % 3;
document.write(" " + "The remainder is:" + " " + divide + "<br>")

// question#4
var ticketPrize = 600;
var ticketsQuantity = 5;
document.write("Total cost to buy" + " " + ticketsQuantity + " " + "tickets to a movie is" + ticketPrize * ticketsQuantity + "PKR" + "<br>");

// question#5
var tableNum = 4;
document.write("4 " + "x " + "1 " + "= " + tableNum * 1 + "<br>");
document.write("4 " + "x " + "2 " + "= " + tableNum * 2 + "<br>");
document.write("4 " + "x " + "3 " + "= " + tableNum * 3 + "<br>");
document.write("4 " + "x " + "4 " + "= " + tableNum * 4 + "<br>");
document.write("4 " + "x " + "5 " + "= " + tableNum * 5 + "<br>");
document.write("4 " + "x " + "6 " + "= " + tableNum * 6 + "<br>");
document.write("4 " + "x " + "7 " + "= " + tableNum * 7 + "<br>");
document.write("4 " + "x " + "8 " + "= " + tableNum * 8 + "<br>");
document.write("4 " + "x " + "9 " + "= " + tableNum * 9 + "<br>");
document.write("4 " + "x " + "10 " + "= " + tableNum * 10 + "<br>");

// question#7
var priceofItem1 = 650;
var quantityofItem1 = 3;
var priceofItem2 = 100;
var quantityofItem2 = 7;
var shippingCharges = 100;
var costSum = priceofItem1 * quantityofItem1 + priceofItem2 * quantityofItem2 + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceofItem1 + "<br>" + "Quantity of item 1 is " + quantityofItem1 + "<br>"
    + "Price of item 2 is " + priceofItem2 + "<br>" + "Quantity of item 2 is " + quantityofItem2 + "<br>" +
    "Shipping Charges " + shippingCharges + "<br>" + "<br>" + "Total Cost of your order is " + costSum + "<br>" + "<br>" + "<br>");

// question#8
var totalMarks = 980;
var marksObtained = 804;
var percenatge = marksObtained * 100 / totalMarks;

document.write("Total marks: " + totalMarks + "<br>" + "Marks obtained: " + marksObtained + "<br>" + "Percentage: " + percenatge + "%" + "<br>" + "<br>" + "<br>")

// question#9
var usDollers = 10;
var saudiRiyals = 25;
var _1UsDoller = 104.80;
var _1SaudiRiyal = 28;
var totalCurrency = usDollers * _1UsDoller + saudiRiyals * _1SaudiRiyal;

document.write("<h1> Currency PKR </h1>" + "<br>")
document.write("Total Currency in PKR:" + totalCurrency + "<br>" + "<br>");

// question#10
var number = 4;



var result = (4 + 5) * 10 / 2;
document.write(result + "<br>" + "<br>");

// question#11
var currentYear = 2023;
var birthYear = 2003;
var age = currentYear - birthYear;

document.write("<h1> Age Calculator </h1>" + "<br>")
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age + "<br>" + "<br>");

// question#12
var r = 20;
document.write("<h1> The Geometrizer </h1>" + "<br>");
document.write("Radius of a circle: " + r + "<br>");
document.write("The Circumference is: " + 2 * 3.142 * r + "<br>");
document.write("The area is: " + 3.142 * r * r + "<br>");

// question#12
var snacks = "chocalte ship"
var currentAge = 15
var maxAge = 65;
var amountofSnacks = 3;
var calculate = (maxAge - currentAge) * 365 * amountofSnacks;
// console.log(calculate)

document.write("<h1> The Lifetime Supply Calculator </h1>" + "<br>");
document.write("Favourite Snake: " + snacks + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountofSnacks + "<br>");
document.write("You will need: " + calculate + " chocalte ship to last you until the ripe old age of " + maxAge + "<br>" + "<br>");


// chapter # 6 to 9
// question#1
var value = 10;
document.write("Result: <br> The value of a is: " + value + "<br>")
document.write("The value of ++a is: " + ++value + "<br>")
document.write("Now the value of a is: " + value + "<br>")
document.write("The value of a++ is: " + value++ + "<br>")
document.write("Now the value of a is: " + value + "<br>")
document.write("The value of --a is: " + --value + "<br>")
document.write("Now the value of a is: " + value + "<br>")
document.write("The value of a-- is: " + value-- + "<br>")
document.write("Now the value of a is: " + value + "<br>")

// question#2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
//  1  - 0  +  1  + 1 = 3

document.write("a is: " + a + "<br>")
document.write("b is: " + b + "<br>")
document.write("Result is: " + result + "<br>" + "<br>");

// question#3
// var userName = prompt("Enter your name");
//  document.write("Hello " + userName  + "<br>" + "<br>");

// question#5

// var number = +prompt("Enter a number");
if (number == "") {
    number = 5
}
document.write(number + " x " + "1 " + "= " + number * 1 + "<br>");
document.write(number + " x " + "2 " + "= " + number * 2 + "<br>");
document.write(number + " x " + "3 " + "= " + number * 3 + "<br>");
document.write(number + " x " + "4 " + "= " + number * 4 + "<br>");
document.write(number + " x " + "5 " + "= " + number * 5 + "<br>");
document.write(number + " x " + "6 " + "= " + number * 6 + "<br>");
document.write(number + " x " + "7 " + "= " + number * 7 + "<br>");
document.write(number + " x " + "8 " + "= " + number * 8 + "<br>");
document.write(number + " x " + "9 " + "= " + number * 9 + "<br>");
document.write(number + " x " + "10 " + "= " + number * 10 + "<br>" + "<br>");

// question#6

// var sub1 = prompt("Enter first subject name: ")
// var sub2 = prompt("Enter second subject name: ")
// var sub3 = prompt("Enter third subject name: ");

var totalNumber = 300;
// var obtMarks1 = +prompt("Enter obtained marks for "+sub1+": ")
// var obtMarks2 = +prompt("Enter obtained marks for "+sub2+": ")
// var obtMarks3 = +prompt("Enter obtained marks for "+sub3+": ");
// var totalMarksCal = obtMarks1 + obtMarks2 + obtMarks3;
// var stdPercentage = totalMarksCal * 100 / totalNumber; 
// var sub1Percentage = obtMarks1 * 100 / 100;
// var sub2Percentage = obtMarks2 * 100 / 100;
// var sub3Percentage = obtMarks3 * 100 / 100;
document.write(" Subject  ")
document.write(" Subject ")
document.write(" Subject  ")
document.write(" Subject  " + "<br>" + "<br>" + "<br>")
// document.write( sub1 + " 100   " + obtMarks1 + "   " + sub1Percentage + "<br>")
// document.write( sub2 + " 100   " + obtMarks2 + "   " + sub2Percentage + "<br>")
// document.write( sub3 + " 100   " + obtMarks3 + "   " + sub3Percentage + "<br>")
// document.write(+ "     " + totalNumber + "  " + totalMarksCal+ "  " + stdPercentage + "<br>" + "<br>")


// chap# 9 to 11
// question#1
// var cityName = prompt("Enter your City");
// if (cityName == "Karachi") {
//     alert("Welcome to city of lights")
// }
// else {
//     alert("Welcome to this city")
// }

// // question#2
// // var gender = prompt("Enter your gender");
// if (gender == "male") {
//     alert("Good Morning Sir")
// }
// else if (gender == "female") {
//     alert("Good Morning Ma'am")
// }
// else {
//     alert("Good Morning")
// }

// question#3
// var signalColor = prompt("Enter traffic signal color");
// if (signalColor == "Red") {
//     alert("Must Stop")
// }
// else if (signalColor == "Yellow") {
//     alert("Ready to move")
// }
// else if (signalColor == "Red") {
//     alert("Must Stop")
// }
// else if (signalColor == "Green") {
//     alert("Move now")
// }
// else{
//     alert("Enter valid traffic signal color")
// }

// question#4
// var fuel = +prompt("Enter remaining fuel of your car");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("your car fuel is full")
// }

// question#5
var a = 4;
if (++a === 5) {
    // alert("given condition for variable a is true");
}
// output is true

var b = 82;
if (b++ === 83) {
    // alert("given condition for variable b is true");
}
// output is false

var c = 12;
if (c++ === 13) {
    // alert("condition 1 is true");
}
// output is false

if (c === 13) {
    // alert("condition 2 is true");
}
// output is true

if (++c < 14) {
    // alert("condition 3 is true");
}
// output is false

if (c === 14) {
    // alert("condition 4 is true");
}
// output is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    // alert("The cost equals");
}
// output is true

if (true) {
    // alert("True");
}
// output is true

if (false) {
    // alert("False");
}
// output is false

if ("car" < "cat") {
    // alert("car is smaller than cat");
}
// output is true

// question#6

// var sub1 = +prompt("Enter first subject marks: ")
// var sub2 = +prompt("Enter second subject marks: ")
// var sub3 = +prompt("Enter third subject marks: ");
// var total_marks = +prompt("Enter your total marks");
// var marks_Obtained = sub1 + sub2 + sub3;
// var percenatge = marks_Obtained * 100 / total_marks;


// if (percenatge >= 80) {
//     document.write("<h1>Marks Sheet</h1>")
//     document.write("Total mark : " + total_marks + "<br>")
//     document.write("Marks obtained : " + marks_Obtained + "<br>")
//     document.write("Percentage : " + percenatge + " %" + "<br>")
//     document.write("Grade : A-one " + "<br>")
//     document.write("Remarks : Excellent " + "<br>")
// }
// else if (percenatge >= 70) {
//     document.write("<h1>Marks Sheet</h1>")
//     document.write("Total mark : " + total_marks + "<br>")
//     document.write("Marks obtained : " + marks_Obtained + "<br>")
//     document.write("Percentage : " + percenatge + " %" + "<br>")
//     document.write("Grade : A " + "<br>")
//     document.write("Remarks : Good " + "<br>")
// }
// else if (percenatge >= 60) {
//     document.write("<h1>Marks Sheet</h1>")
//     document.write("Total mark : " + total_marks + "<br>")
//     document.write("Marks obtained : " + marks_Obtained + "<br>")
//     document.write("Percentage : " + percenatge + " %" + "<br>")
//     document.write("Grade : B " + "<br>")
//     document.write("Remarks : You need to improve " + "<br>")
// }
// else if (percenatge > 60) {
//     document.write("<h1>Marks Sheet</h1>")
//     document.write("Total mark : " + total_marks + "<br>")
//     document.write("Marks obtained : " + marks_Obtained + "<br>")
//     document.write("Percentage : " + percenatge + " %" + "<br>")
//     document.write("Grade : Fail " + "<br>")
//     document.write("Remarks : Sorry " + "<br>")
// }

// question#7
// var secretNumber = 9;
// var guessNumber = +prompt("Enter a number between 1 to 10");
// if(guessNumber === secretNumber){
//     alert("Bingo! Correct answer")
// }
// else if(guessNumber === secretNumber + 1){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Wrong answer")
// }

// question#8
// var divide = +prompt("Enter number");
// if (divide % 3 == 0) {
//     document.write(divide + " is divisible by 3");
// } else {
//     document.write(divide + " is not divisible by 3");
// }

// question#9
// var inputAnumber = +prompt("Enter a number");
// if (inputAnumber % 2 == 0) {
//     document.write("The number " + inputAnumber + " is an even number.")
// }
// else {
//     document.write("The number " + inputAnumber + " is an odd number.")
// }

// question#10
// var temp = +prompt("Enter a temperature");
// if (temp > 40) {
//     document.write("It is too hot outside.")
// } else if (temp > 30) {
//     document.write("The Weather today is Normal.")
// } else if (temp > 20) {
//     document.write("Today’s Weather is cool.")
// } else if (temp > 10) {
//     document.write("OMG! Today’s weather is so Cool.")
// }

// question#11
// var number_1 = +prompt("Enter a first number")
// var number_2 = +prompt("Enter a second number")
// var operator = prompt("Enter operator");

// if (operator === "+") {
//     document.write(number_1 + number_2)
// }
// else if (operator === "-") {
//     document.write(number_1 - number_2)
// }
// else if (operator === "*") {
//     document.write(number_1 * number_2)
// }
// else if (operator === "/") {
//     document.write(number_1 / number_2)
// }
// else if (operator === "%") {
//     document.write(number_1 % number_2)
// }
// else {
//     document.write("Invalid operator")
// }


// chap#12 to 13

// question#1

// var charac = +prompt("Enter a character");
// if (charac >= 65 && charac <= 90) {
//     document.write("Upper Case Letter");
// }
// else if (charac >= 97 && charac <= 122) {
//     document.write("Lower Case Letter");
// }
// else {
//     document.write("This is not a number or letter")
// }

// question#2

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// if (num1 > num2) {
//     document.write(num1 + " " + "is greater than" + " " + num2)
// }
// else if (num1 < num2) {
//     document.write(num2 + " " + "is greater than" + " " + num1)
// }
// else{
//     document.write("Two Integars are equal")
// }

// question#3

// var num = +prompt("Enter a number");
// if(num>0){
//     console.log("positive")
// }
// else if(num<0){
//     console.log("Negative")
// }
// else{
//     console.log("Zero")
// }

// question#4

// var vowel = prompt("Enter a character");
// if(vowel==="a" || vowel==="e" || vowel==="i" || vowel==="o" || vowel ==="u"){
//     console.log("Vowel character")
// }
// else{
//     console.log("Not a Vowel character")
// }

// question#5

// var crrPassword = "example123";
// var userPassword = prompt("Enter your password");
// if(userPassword ===""){
//     console.log("Please enter your password")
// }
// else if(userPassword === crrPassword){
//     console.log("Correct! The password you entered matches the original password")
// }
// else{
//     console.log("Incorrect password")
// }

// question#6

//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//     greeting = console.log("Good day");
// } 
// else{
//     greeting = console.log("Good evening");
// }

// question#7

var time = +prompt("Enter time");

if (time >= 0 && time < 12) {
    console.log("Good Morning")
}
else if (time >= 12 && time < 17) {
    console.log("Good Afternoon")
}
else if (time >= 17 && time < 21) {
    console.log("Good Evening")
}
else if (time >= 21 && time <= 24) {
    console.log("Good Night")
}