var checkChars = function(lower, upper, numeric, special) {
  // returns true if at least one is true
  return lower || upper || numeric || special;
}

var getChars = function(options) {
  // create variables to determine which characters to use
  var includeLower, includeUpper, includeNumeric, includeSpecial;

  // enter a loop that forces the user to choose at least one option
  while (true) {
    // get user input
    window.alert(
      "Select the characters to use in your password.\n"
      + "You must SELECT AT LEAST ONE group of characters."
    )
    includeLower = window.confirm(
      "Include lowercase characters?\n"
      + options.lower
    );
    includeUpper = window.confirm(
      "Include upercase characters?\n"
      + options.upper
    );
    includeNumeric = window.confirm(
      "Include numeric characters?\n"
      + options.numeric
    );
    includeSpecial = window.confirm(
      "Include special characters?\n"
      + options.special
    )

    // check if user provided at least one option
    if (checkChars(includeLower, includeUpper, includeNumeric, includeSpecial)) {
      break;
    }
  }
  
  // create a list with the selected characters to use
  var selectedChars = [];
  if (includeLower) {
    selectedChars = selectedChars.concat([...passwordOptions.lower]);
  }
  if (includeUpper) {
    selectedChars = selectedChars.concat([...passwordOptions.upper]);
  }
  if (includeNumeric) {
    selectedChars = selectedChars.concat([...passwordOptions.numeric]);
  }
  if (includeSpecial) {
    selectedChars = selectedChars.concat([...passwordOptions.special]);
  }
  
  return selectedChars;
}

var checkSize = function(size) {
  intCheck = Number.isInteger(size);
  bottomCheck = size >= 8;
  topCheck = size <= 128;
  return intCheck && bottomCheck && topCheck;
}

var getSize = function(options) {
  var size;
  debugger;
  while (true) {
    size = window.prompt(
      "Select desired password size ("
      + options.minSize 
      + "-" 
      + options.maxSize 
      + ")."
    );
    size = parseInt(size);
    if (checkSize(size)) {
      break;
    }
  }

  return size;
}

// var generateRandInt() {
  
// }

var generatePassword = function(chars, size) {
  // create empty array to receive password characters
  // var containerArray = [...Array(size)];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var validChars = getChars(passwordOptions);
  var passwordSize = getSize(passwordOptions);
  var password = generatePassword(validChars, passwordSize);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordOptions = {
  lower: "abcdefghijklmnopqrstuvwyxz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWYXZ",
  numeric: "1234567890",
  special: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~",
  minSize: 8,
  maxSize: 128
}
