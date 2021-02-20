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


 // Define arrays to store characters to generate a random password
 var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var specialChar = ['!', '"-DOUBLE QUOTE', '#', '$', '%', '&', 'SINGLE QUOTE', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', 'Backslash', ']', '^', '_', '`', '{', '|', '}', '~'];

//  var userInputPasswordLength = "";
 var confirmLowerCaseChar = boolean;
 var confirmUpperCaseChar = boolean;
 var confirmNumericChar = boolean;
 var confirmSpecialChar = boolean;

function generatePassword () {
  // Prompts for the length of the password (between 8-128 inclusive)
  var userInputPasswordLength = window.prompt("Enter a number to choose the length of your password! \nA length Between 8-128 Characters!");

  // Validates if the user entered the correct length within the specified parameter 
  while (!(userInputPasswordLength >= 8 && userInputPasswordLength <= 128)) {
    window.alert("INVALID VALUE!")
    userInputPasswordLength = window.prompt("The password Must Be 8 to 128 characters long! \nEnter a New Number!");
  }

  // Notify user of the chosen password length 
  window.alert("Your password will be " + userInputPasswordLength + " characters long!");

  // Confirm if lowerCase (Yes or No - Boolean ) / return --> Need variables

  // var confirmLowerCase = 
  // var confirmUpperCase =

  // var userLength = 
  // var confirmPasswod = confirmLowerCase.concat(confirmUpperCase);

  // Math.Floor(Math.Random() * length of the array confirmPasswrod) 

  return "hello world";
}


 