 // Define arrays to store characters to generate a random password
 var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

 // function definition generatePassword 
 function generatePassword () {
   // Prompts the user for the length of the password (between 8-128 inclusive)
   var userInputPasswordLength = window.prompt("Enter a number to choose the length of your password!\n(A length Between 8-128 Characters)");
   
   // Validates if the user entered a numeric value within the specified parameter 
   while (!(userInputPasswordLength >= 8 && userInputPasswordLength <= 128)) {
     // Alerts user the input value is invalid
     window.alert("INVALID VALUE!");
     userInputPasswordLength = window.prompt("The password Must Be 8 to 128 characters long!\nEnter a New Number!");
    }

   // Notifies user about the chosen password length 
   window.alert("Your password will be " + userInputPasswordLength + " characters long!");
   
   // Prompts the user to select the character types 
   var userChoiceLowerCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nLowercase Characters in your password!");
   var userChoiceUpperCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nUppercase Characters in your password!");
   var userChoiceNumericChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nNumeric Characters in your password!");
   var userChoiceSpecialChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nSpecial Characters in your password!");

   // Validates if the user selected at least one character type 
   while (!((userChoiceLowerCaseChar === 'Y' || userChoiceLowerCaseChar === 'y') || (userChoiceUpperCaseChar === 'Y' || userChoiceUpperCaseChar === 'y') || (userChoiceNumericChar === 'Y' || userChoiceNumericChar === 'y') || (userChoiceSpecialChar === 'Y' || userChoiceSpecialChar === 'y'))) {
     // Alerts user to choose at least 1 character type
     window.alert("You Must Choose (Y or y) to include at least 1 Character Type!");
     var userChoiceLowerCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nLowercase Characters in your password!");
     var userChoiceUpperCaseChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nUppercase Characters in your password!");
     var userChoiceNumericChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nNumeric Characters in your password!");
     var userChoiceSpecialChar = window.prompt("Enter: (Y / y) to Include or (N / n) to Exclude... \nSpecial Characters in your password!");
    }
    
    // Declares an empty array to store character types chosen by the user 
    var userChoiceCharacterTypes = [];

    // Checks each user input and concats that corresponding array in the new array
    if (userChoiceLowerCaseChar === 'Y' || userChoiceLowerCaseChar === 'y') {
      userChoiceCharacterTypes = userChoiceCharacterTypes.concat(lowerCaseChar);
    }

    if (userChoiceUpperCaseChar === 'Y' || userChoiceUpperCaseChar === 'y') {
      userChoiceCharacterTypes = userChoiceCharacterTypes.concat(upperCaseChar);
    }

    if (userChoiceNumericChar === 'Y' || userChoiceNumericChar === 'y') {
      userChoiceCharacterTypes = userChoiceCharacterTypes.concat(numericChar);
    }
    
    if (userChoiceSpecialChar === 'Y' || userChoiceSpecialChar === 'y') {
      userChoiceCharacterTypes = userChoiceCharacterTypes.concat(specialChar);
    }
    
    //-------------------------------------------------------------------------
    // Declares an empty string to store characters from chosen type(s) 
    var userChosenCharacters = "";

    // Loops through the array and stores in the empty string 
    for (var i = 0; i <= userChoiceCharacterTypes.length - 1; i++) {
      userChosenCharacters = userChosenCharacters + ' ' + userChoiceCharacterTypes[i];
    }

    // Notifies the user with the list of characters 
    window.alert("Your Choice of character type(s): " + userChosenCharacters);
    //-------------------------------------------------------------------------
    
    // Declares an empty string to store the randomly generated password 
    var randomPassword = "";

    // Loops through the array userChoiceCharacterTypes, using the userInputPasswordLength
    // Each time gets a random character from the array, and adds to the string randomPassword
    for (var i = 0; i < userInputPasswordLength; i++) {
      randomPassword = randomPassword + userChoiceCharacterTypes[Math.floor(Math.random() * userChoiceCharacterTypes.length)];
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
 