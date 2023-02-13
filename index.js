const alphabet = "abcdefghijklmnopqrstuvwxyz";
const passwordLength = 10;
function generatePassword() {
  let password = "";
  for (let index = 0; index < passwordLength; index += 1) {
    let alphabetlength = alphabet.length;
    let randomint = Math.floor(Math.random() * alphabetlength) + 1;
    password += alphabet.charAt(randomint);
  }
  let inputField = document.getElementById("input-field");
  inputField.value = password;
}
