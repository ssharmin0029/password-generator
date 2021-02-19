// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 // Define Arrays to store characters 
 var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var specialChar = ['!', '"-DOUBLE QUOTE', '#', '$', '%', '&', 'SINGLE QUOTE', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', 'Backslash', ']', '^', '_', '`', '{', '|', '}', '~'];

 var confirmPasswordLength = 0;
 var confirmLowerCaseChar = boolean;
 var confirmUpperCaseChar = boolean;
 var confirmNumericChar = boolean;
 var confirmSpecialChar = boolean;

function generatePassword () {

  // Prompt for the length (between 8-128 inclusive)
  // Validate the length --> Need variable 
  // May while play loop 

  // Confirm if lowerCase (Yes or No - Boolean ) / return --> Need variables

  // var confirmLowerCase = 
  // var confirmUpperCase =

  // var userLength = 
  // var confirmPasswod = confirmLowerCase.concat(confirmUpperCase);

  // Math.Floor(Math.Random() * length of the array confirmPasswrod) 

  return "hello world";
}


 