// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables needed for password generator

var askGenerate= confirm('Would you like to generate a random password?');
var lowerCase= confirm('Would you like lowercase characters?');
var upperCase= confirm('Would you like uppercase characters?');
var numChar= confirm('Would you like numerical characters?');
var specialChar= confirm('Would you like special characters?');
var pwLength= prompt('Type a number between 8 and 128 to choose the length of your password. Example:15');

// creating a criteria for pw length
if (pwLength<8 || pwLength >128) {
  alert('Please input a valid password length');
  var pwLength= prompt('Type a number between 8 and 128 to choose the length of your password. Example:15');
}

//creating an alert to choose at least one character set 
if (lowerCase === false  && upperCase === false && numChar === false && specialChar=== false) {
  alert('Please pick at least one character set');
  var lowerCase= confirm('Would you like lowercase characters?');
var upperCase= confirm('Would you like uppercase characters?');
var numChar= confirm('Would you like numerical characters?');
var specialChar= confirm('Would you like special characters?');
}

// arrays for all character sets
var lCaseLetters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uCaseLetters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numerical=['0','1','2','3','4','5','6','7','8','9']
var special=['!','@','#','$','%','^','&','*','(',')','/','>','<']

var pw= "";

// creating function generatePassword();
for (var i=0; i<= pwLength; i++) {
  // randomly generated values per array
let lCaseRandom = lCaseLetters[Math.floor(Math.random() * lCaseLetters.length)];
let uCaseRandom = uCaseLetters[Math.floor(Math.random() * uCaseLetters.length)];
let numRandom = numerical[Math.floor(Math.random() * numerical.length)];
let specialRandom = special[Math.floor(Math.random() * special.length)];

// starting point 
var ranNumber= 0  

if (lowerCase===true) {ranNumber++}
if (upperCase===true) {ranNumber++}
if (numChar===true) {ranNumber++}
if (specialChar===true) {ranNumber++}

// index to move through the variables randomly 
var ranIndex= Math.floor(Math.random() * ranNumber)
var ranArray=[];

  if(lowerCase===true) {
    ranArray.push(lCaseRandom)
  }

  if(upperCase===true) {
    ranArray.push(uCaseRandom)
  }

  if(numChar===true) {
    ranArray.push(numRandom)
  }

  if(specialChar===true) {
    ranArray.push(specialRandom)
  }
  pw+=ranArray[ranIndex];
  ranArray=[]
  console.log(pw)
}


function writePassword() {
  // used substring because previously it only picked one index instead of the entire password
  var password = pw.substring(0,pw.length-1);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


