 // Define arrays to store characters to generate a random password
 var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

 // Function definition generatePassword 
 function generatePassword () {
   // Prompts the user for the length of the password (between 8-128 inclusive)
   var userInputPasswordLength = window.prompt("Enter a number to choose the length of your password!\n(A length Between 8-128 Characters)");
   
   // Validates if the user entered a numeric value within the specified parameter 
   while (!(userInputPasswordLength >= 8 && userInputPasswordLength <= 128)) {
     // If the user clicks the Cancel button (null) --> end function execution 
     if (userInputPasswordLength === null) {
       return;
     } 
     // Alerts the user the entered value is empty
     if (userInputPasswordLength === '') {
       window.alert("Your Input is Empty! Try Again!")
     }
     // Prompts the user to enter a numeric value within the specified parameter 
     userInputPasswordLength = window.prompt("Enter a Numeric Value!\nIt MUST be between 8 to 128 characters!");
   }

   // Notifies the user about the chosen password length 
   window.alert("Your password will be " + userInputPasswordLength + " characters long!");
   
   // Declare empty variables to store string values 
   var userChoiceLowerCaseChar = '';
   var userChoiceUpperCaseChar = '';
   var userChoiceNumericChar = '';
   var userChoiceSpecialChar = '';

   // Function defintion to prompt the user to select character types 
   function promptUserForCharTypes () {
     userChoiceLowerCaseChar = window.prompt("Enter: (Y) to Include or (N) to Exclude... \nLowercase Characters in your password!").toUpperCase();
     userChoiceUpperCaseChar = window.prompt("Enter: (Y) to Include or (N) to Exclude... \nUppercase Characters in your password!").toUpperCase();
     userChoiceNumericChar = window.prompt("Enter: (Y) to Include or (N) to Exclude... \nNumeric Characters in your password!").toUpperCase();
     userChoiceSpecialChar = window.prompt("Enter: (Y) to Include or (N) to Exclude... \nSpecial Characters in your password!").toUpperCase();
   }

   // Function call
   promptUserForCharTypes();

   // Validates if the user selected at least 1 character type 
   while (userChoiceLowerCaseChar !== 'Y' && userChoiceUpperCaseChar !== 'Y' && userChoiceNumericChar !== 'Y' && userChoiceSpecialChar !== 'Y') {
     // Alerts the user to choose at least 1 character type
     window.alert("You Must Choose (Y) to include at least 1 Character Type!");
     
     // Function call to prompt the user to select character types 
     promptUserForCharTypes();
   }
   
   // Declares an empty array to store character types chosen by the user 
   var userChoiceCharTypes = [];
   // Declares an empty string to store name(s) of the character type(s) 
   var nameOfCharTypes = '';
   
   // Checks each user input to see if the user choice is equal to 'Y'; if equal then concats that corresponding array to a new array
   // Also adds name(s) of the character types(s) in the empty string  
   if (userChoiceLowerCaseChar === 'Y') {
     userChoiceCharTypes = userChoiceCharTypes.concat(lowerCaseChar);
     nameOfCharTypes = nameOfCharTypes + "(Lowercase)" + " ";
   }
   
   if (userChoiceUpperCaseChar === 'Y') {
     userChoiceCharTypes = userChoiceCharTypes.concat(upperCaseChar);
     nameOfCharTypes = nameOfCharTypes + "(Uppercase)" + " ";
   }
   
   if (userChoiceNumericChar === 'Y') {
     userChoiceCharTypes = userChoiceCharTypes.concat(numericChar);
     nameOfCharTypes = nameOfCharTypes + "(Numeric)" + " ";
   }
   
   if (userChoiceSpecialChar === 'Y') {
     userChoiceCharTypes = userChoiceCharTypes.concat(specialChar);
     nameOfCharTypes = nameOfCharTypes + "(Special) ";
   }
   
   //-------------------------------------------------------------------------
   // Notifies the user of chosen character type(s) 
   window.alert("Your Choice of character type(s): " + nameOfCharTypes + "Characters");
   //-------------------------------------------------------------------------
   
   // Declares an empty string to store the randomly generated password 
   var randomPassword = "";
   
   // Loops through the array userChoiceCharacterTypes, using the userInputPasswordLength
   // Each time gets a random character from the array, and adds to the string randomPassword
   for (var i = 0; i < userInputPasswordLength; i++) {
     randomPassword = randomPassword + userChoiceCharTypes[Math.floor(Math.random() * userChoiceCharTypes.length)];
   }
   
   // Returns the value of randomPassword by ending the function execution 
   return randomPassword;
  }
  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Checks to see if the string is undefined; doesn't write if so
  if (password === undefined) {
    return;
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 