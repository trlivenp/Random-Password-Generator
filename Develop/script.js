// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length;
  var charTypes = [];
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!#%$&\'()*-_;:<=>+{}][`~'
  };

  // Password length validation
  while (true) {
    length = Number(prompt("Enter a password length between 8 and 128"));
    if (length >= 8 && length <= 128) {
      break;
    } else {
      alert("Number inputted is not within allowed password length. Please try again.");
    }
  }

  // Prompting for every character type
  for (var type in charSets) {
    if (charSets.hasOwnProperty(type)) {
      if (confirm("Click OK to include " + type + " characters in the password?")) {
        charTypes.push(type);
      }
    }
  };

  // Generating value after all inputs are validated
  var charSet = charTypes.map(type => charSets[type]).join("");
  var returnVal = "";

  for (var i = 0; i < length; i++) {
    returnVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return returnVal;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
