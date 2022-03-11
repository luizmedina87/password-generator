/**
 * Checks if the user chose at least one group of characters to create 
 * its password.
 * @param {Boolean} lower User's choice to include or not lowercase
 * characters.
 * @param {Boolean} upper User's choice to include or not uppercase
 * characters.
 * @param {Boolean} numeric User's choice to include or not numeric
 * characters.
 * @param {Boolean} special User's choice to include or not special
 * characters.
 * @returns {Boolean} true if at least one is true.
 */
var checkChars = function(lower, upper, numeric, special) {
  return lower || upper || numeric || special;
}


/**
 * Prompts the user to choose which characters he/she wants to use to 
 * generate its password.
 * @param {Object} options Object that contains the characters
 * to generate the random password. 
 * @returns {Array} List of characters that will make up the password.
 */
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


/**
 * Checks if the user inputed a valid number for the password length.
 * @param {Number} size String inputed by the user while choosing the
 * password length.
 * @param {Object} constraints Object that contains the size constraints
 * of the password to be generated.
 * @returns {Boolean} True if all conditions are met.
 */
var checkSize = function(size, constraints) {
  intCheck = Number.isInteger(size);
  bottomCheck = size >= constraints.minSize;
  topCheck = size <= constraints.maxSize;
  return intCheck && bottomCheck && topCheck;
}


/**
 * Prompts user to input the size of the password and checks if the 
 * password is within the constraints set out.
 * @param {Object} constraints Object that contains the size constraints
 * of the password to be generated.
 * @returns {Number} User's choice for password size.
 */
var getSize = function(constraints) {
  var size;
  while (true) {
    size = window.prompt(
      "Select desired password size ("
      + constraints.minSize 
      + "-" 
      + constraints.maxSize 
      + ")."
    );
    size = parseInt(size);
    if (checkSize(size, constraints)) {
      break;
    }
  }

  return size;
}


/**
 * Generates a random character from the character Array given.
 * @param {Array} chars Contains the strings that will be used to 
 * construct the password.
 * @returns {String} Random character from the list given.
 */
var generateRandItem = function(chars) {
  var randomNumber = Math.random() * chars.length;
  var randomIndex = Math.floor(randomNumber);
  var randomItem = chars[randomIndex];
  return randomItem;
}

/**
 * Generates a random password.
 * @param {Array} chars Contains the strings that will be used to 
 * construct the password.
 * @param {Number} size Number of characters of the password to be
 * generated.
 * @returns {String} Random password.
 */
var generatePassword = function(chars, size) {
  // create empty array to receive password characters
  debugger;
  var passwordChars = [...Array(size)];

  // generate password one letter at a time
  for (let i = 0; i < size; i++) {
    passwordChars[i] = generateRandItem(chars);
  }
  var password = passwordChars.join('');

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var validChars = getChars(passwordOptions);
  var passwordSize = getSize(passwordOptions);
  var password = generatePassword(validChars, passwordSize);
  console.log(passwordSize);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Contains the constraints and characters to be used to generate the
// password
passwordOptions = {
  lower: "abcdefghijklmnopqrstuvwyxz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWYXZ",
  numeric: "1234567890",
  special: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~",
  minSize: 8,
  maxSize: 128
}
