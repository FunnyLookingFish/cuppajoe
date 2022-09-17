const generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specChar = ["!", "@", "#", "&", "*", "+", "?", "/"]
let length = [8, 128]
const criteria = [lowerCase, upperCase, numbers, specChar]

// Write password to the #password input

function generatePassword() {
    length = prompt("What should the password length be? ");
        if (length < 8 || length > 128) {
            alert("Warning: Password must be between 8-128 characters. Try again.");
            generatePassword();
        } else {
            lowerCase = confirm("Would you like to include lower case characters?");
            upperCase = confirm("Would you like to include upper case characters?");
            numbers = confirm("Would you like to include numbers?");
            specChar = confirm("Would you like to include special characters?");
        }
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    function getRandom() {
        const randomIndex = Math.floor(Math.random() * criteria.length) + 0;
        return criteria[randomIndex];
    }
    passwordText.value = getRandom();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
