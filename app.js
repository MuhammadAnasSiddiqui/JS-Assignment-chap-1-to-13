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
var email =  "muhammadanassiddiqui@gmail.com"
// alert("My email address is "  + email);
// question#7
var book = "“A smarter \n way to learn JavaScript”."
// alert(" I am trying to learn from the Book " + book);
// question#8
document.write("Yah! I can write HTML content through JavaSript");
// question#9
var specText ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(specText);
document.write("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

// chap#3 (variables for numbers)


// question#1
var age = 15;
// alert(age);
// question#2
var userVisit = "14 times";
// alert("You have visited this site " + userVisit);
// question#3
var birthyear = 2003;
document.write("My birth year is " + birthyear );
// question#4
var visitorName = "John Doe";
var order = 5;
var storeName = "XYZ Clothing store";
document.write(" "+ visitorName + " " + "ordered" + " " + order + " " + "T-shirt(s) on"+ " " + storeName);


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

document.write( " " + "a)Rules for naming JS variables");
document.write( " " + "b) variables name can only contain, numbers, $ and _. For example $my_1stVariable")  
document.write( " " + "c) Variables must begin with a letter,$ or _.For example $name, _name or name")
document.write( " " + "d) Variable names are case sensitive");
document.write( " " + "e) Variable names should not be JS keywords");

// chap#5 (MATH EXPRESSIONS )

// question#1
// For addition
var a = 3;
var b = 5;
var c = a + b;
document.write( " " + "Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c)

// question#2
// For subtraction
var a = 5;
var b = 3;
var c = a - b;
document.write( " " + "Subtract of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c)

// For multiplication
var a = 3;
var b = 5;
var c = a * b;
document.write( " " + "Multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c)

// For division
var a = 10;
var b = 5;
var c = a / b;
document.write( " " + "Division of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c)

// For modulus.
var a = 10;
var b = 5;
var c = a % b;
document.write( " " + "Modulus of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c)

// question#3
var value = undefined;
document.write(" " + "Value after variable declaration is"+ " " + value);

var value = 5;
document.write(" " + "Initial value:"+ " " + value);

var afterincreament = ++value;
document.write(" " + "Value after increament is:" + " " + afterincreament )

var add = afterincreament + 7;
document.write(" " + "Value after Addition is:" + " " + add)

var afterdecreament = --add;
document.write(" " + "Value after decreament is:" + " " + afterdecreament )

var divide =   afterdecreament % 3;
document.write(" " + "The remainder is:" + " " + divide)


