var getChars = function() {
  // prompt user for which characters they want to use (select at least one)
}

var getSize = function() {
  // prompt user for the length of the password (8-128)
}

var generatePassword = function(chars, size) {
  // generate password based on size and chars
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var validChars = getChars();
  var passwordSize = getSize();
  var password = generatePassword(validChars, passwordSize);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordChars = {
  lower: [..."abcdefghijklmnopqrstuvwyxz"],
  upper: [..."ABCDEFGHIJKLMNOPQRSTUVWYXZ"],
  special: [..."!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"],
  numeric: [..."1234567890"]
}