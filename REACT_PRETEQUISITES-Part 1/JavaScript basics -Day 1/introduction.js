/*
DATA TYPES:
  undefined,null,boolean,string,symbol,number and object(key-value pair)
*/


//To declare varibale: 3 ways
var myName = "ABCD"; // we will used through out the whole program 
myName = 4;
let outName = "ZXY"; //will only be used within the scope of where you declare that  
const pi = 3.14; //varibale value that can't be change


//Assinging varibale 
var a;//here we are declaring varibale
a = 7;//now i hahve assingned value to already declared varibale i.e a  
var b = 2; //here we are assing varibale = assingment operator
a = b;


//to print output
console.log("HELLO PEOPLE"); //to print output 

//initializing variables w/ assignment operator 
var a = 9;
var b = 10;
var c = "I'm good";

a = a + 1;
b = b - 1;
c= c + "STRING!";

//Case sensitivity in varibales 
//decelarations
var StUdLyCapVar;
var properCamelCase;

STUDLYCAP = 10;//there will be reference error here 
properCamelCase = 11;

//adding numbers 
var sum = 10 + 10;
console.log(sum);

//subtraction 
var sub = 12 - 10;
console.log(sub);

//multiplication
var product = 5 * 5;

//Divide 
var a = 22 / 2;

//incrementing numbers
var a = 2;
a++ ;//a = a + 1

//decrementing numbers 
var b = 5;
b--;//b = b-1

//decimal numbers or floating point numbers 
var c = 6.9;

//finding remainder 
var remainder ;
remainder = 11 % 3;//modulus operator is to used whether the number is even or odd 

//compound assignment with augmented addition,substraction,multiplication,division
var a = 9;
var b = 10;
var c = 3;
var d = 8;

a += 12;
b -= 13;
c *= 5;
d /= 2;

//Declare string variables 
var firstName = "ABC"
var lastName = "Xyz";

//escaping literal quotes in Stirngs
var mySrtr = "I am a \"double quoted\" stirng inside \"double quotes\"";// escape charater : \
console.log(mySrtr);

//quoting sting with single quotes
var mySrt = '<a href=https://www.example.com" target="_blank">Link</a>';// we can remove escape character when we use '' single quote 
// we can use backticks : `` we can use both single and double quotes inside 

//escape sequences in Strings 
/*****
 CODE OUTPUT
 \' single quote 
 \" double quote 
 \\ backslash : javascript knows that you are not trying escape charater 
 \n newline
 \r carriage return 
 \t tab
 \b backspace 
 \f from feed
*****/
var str = "FirstLine\n\t\\SecondLine\nThiedLine";

//concatenating stirngs with plus operator 
var ourStr = "I come first. " + "I come second.";

//concatenating stirngs with plus equals operator
var ourStr = "I come first." ;
ourStr += "I come second.";

//constructing strings with varibales 
var ourName = "ABCD";
var ourStr = "Hello, my name is " + ourName + ",how are you?";

//Appending variables to strings
 var anAdjective = "awesome!";
 var ourStr = "you are";
 ourStr += anAdjective;

//Find length of String
var firstName = 0;
var firstName = "ABC";
firstName = firstName.length;

//Bracket notation to find frist character in string 
var first = "";
var firstName = "ABC";
firstName = firstName[0];

//Stirng immutability
var mySrt = "jello";
mySrt = "Hello";

//Barcket notation to find Nth character and last character in String 
var firstName = "ABCD";
var secondLetterOfFirstName = firstName[1];
var lastLetterOfFirstName = firstName[firstName.length - 1];

//Barcket notation to find Nth-to-last character in String 
var firstName = "ABCD";
var lastLetterOfFirstName = firstName[firstName.length - 3];

//Word Blanks
function wordBlanks(myNoun, myAdjective, myverb ,myAdverb){
  var result = "";
  
  return result;
}
console.log("dog","big","ran","quickly");


















