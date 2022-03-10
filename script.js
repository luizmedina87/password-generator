var getChars = function() {
  // prompt user for which characters they want to use (select at least one)
}

var getSize = function() {
  // prompt user for the length of the password (8-128)
}

var generatePassword = function() {
  // get valid chars using getChars function
  // get size using getSize function
  // generate password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordChars = {
  lower = [..."abcdefghijklmnopqrstuvwyxz"],
  upper = [..."ABCDEFGHIJKLMNOPQRSTUVWYXZ"],
  special = [..."!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"],
  numeric = [..."1234567890"];
}