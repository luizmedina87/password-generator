var getChars = function(chars) {

  // create variables to determine which characters to use
  var includeLower, includeUpper, includeNumeric, includeSpecial;
  includeLower = includeUpper = includeNumeric = includeSpecial = true;

  // variable to check if the user selected none of the options
  var selectedOption = false;

  // enter a loop that forces the user to choose at least one option
  while (!selectedOption) {
    debugger;
    // get user input
    window.alert(
      "Select the characters to use in your password.\n"
      + "You must SELECT AT LEAST ONE group of characters."
    )
    includeLower = window.confirm(
      "Include lowercase characters?\n"
      + chars.lower
    );
    includeUpper = window.confirm(
      "Include upercase characters?\n"
      + chars.upper
    );
    includeNumeric = window.confirm(
      "Include numeric characters?\n"
      + chars.numeric
    );
    includeSpecial = window.confirm(
      "Include special characters?\n"
      + chars.special
    )

    // check if user provided at least one option
    selectedOption = (
      includeLower || includeUpper || includeNumeric || includeSpecial
    );
  }
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
  var validChars = getChars(passwordChars);
  var passwordSize = getSize();
  var password = generatePassword(validChars, passwordSize);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordChars = {
  lower: ["abcdefghijklmnopqrstuvwyxz"],
  upper: ["ABCDEFGHIJKLMNOPQRSTUVWYXZ"],
  numeric: ["1234567890"],
  special: ["!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"]
}