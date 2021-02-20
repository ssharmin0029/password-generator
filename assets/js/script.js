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
//  var confirmLowerCaseChar = boolean;
//  var confirmUpperCaseChar = boolean;
//  var confirmNumericChar = boolean;
//  var confirmSpecialChar = boolean;

// function definition generatePassword 
function generatePassword () {

  // Prompts the user for the length of the password (between 8-128 inclusive)
  var userInputPasswordLength = window.prompt("Enter a number to choose the length of your password!\n(A length Between 8-128 Characters)");

  // Validates if the user entered a numeric value within the specified parameter 
  while (!(userInputPasswordLength >= 8 && userInputPasswordLength <= 128)) {
    window.alert("INVALID VALUE!")
    userInputPasswordLength = window.prompt("The password Must Be 8 to 128 characters long!\nEnter a New Number!");
  }

  // Notify user of the chosen password length 
  window.alert("Your password will be " + userInputPasswordLength + " characters long!");

  // Prompts the user for the character types to include 
  var userChoiceLowerCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nLowercase Characters in your password!");
  var userChoiceUpperCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nUppercase Characters in your password!");
  var userChoiceNumericChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nNumeric Characters in your password!");
  var userChoiceSpecialChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nSpecial Characters in your password!");

  // Validates if the user selected at least one character type 
  while (!((userChoiceLowerCaseChar === 'Y' || userChoiceLowerCaseChar === 'y') || (userChoiceUpperCaseChar === 'Y' || userChoiceUpperCaseChar === 'y') || (userChoiceNumericChar === 'Y' || userChoiceNumericChar === 'y') || (userChoiceSpecialChar === 'Y' || userChoiceSpecialChar === 'y'))) {
    window.alert("You Must Choose (Y or y) to include at least 1 Character Type!")
    var userChoiceLowerCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nLowercase Characters in your password!");
    var userChoiceUpperCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nUppercase Characters in your password!");
    var userChoiceNumericChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nNumeric Characters in your password!");
    var userChoiceSpecialChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nSpecial Characters in your password!");
  }
  
  // var userLength = 
  // var confirmPasswod = confirmLowerCase.concat(confirmUpperCase);
  // Math.Floor(Math.Random() * length of the array confirmPasswrod) 
  var userChoicePassword = [];
  if (userChoiceLowerCaseChar === 'Y' || userChoiceLowerCaseChar === 'y') {
    userChoicePassword = userChoicePassword.concat(lowerCaseChar);
  }

  if (userChoiceUpperCaseChar === 'Y' || userChoiceUpperCaseChar === 'y') {
    userChoicePassword = userChoicePassword.concat(upperCaseChar);
  }

  if (userChoiceNumericChar === 'Y' || userChoiceNumericChar === 'y') {
    userChoicePassword = userChoicePassword.concat(numericChar);
  }

  if (userChoiceSpecialChar === 'Y' || userChoiceSpecialChar === 'y') {
    userChoicePassword = userChoicePassword.concat(specialChar);
  }

  
  console.log(userChoicePassword);

  return;
}


 