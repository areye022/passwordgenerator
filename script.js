// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables needed for password generator

var askGenerate= confirm('Would you like to generate a random password?');
var pwLength= prompt('Type a number between 8 and 128 to choose the length of your password. Example:15');
var lowerCase= confirm('Would you like lowecase characters?');
var upperCase= confirm('Would you like uppercase characters?');
var numChar= confirm('Would you like numerical characters?')
var specialChar= confirm('Would you like special characters?')

// arrays for all character sets
var lCaseLetters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uCaseLetters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numerical=['0','1','2','3','4','5','6','7','8','9']
var special=['!','@','#','$','%','^','&','*','(',')','/','>','<']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
