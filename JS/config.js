// Credential
const accountNumber = "01630591092";
const pin = "2061";
// Utils
//Error Sound
const errorSound = () => {
  const error = new Audio("./assets/Viral FAAH Sound.mp3");
  return error.play();
};

//Show the current balance
const currentBalance = () =>
  Number(document.getElementById("balance").innerText);

//Sets new Balance
const setBalance = (value) =>
  (document.getElementById("balance").innerHTML = value);
function getValueById(id) {
  return document.getElementById(id).value;
}

//Export them all
export {
  accountNumber,
  pin,
  currentBalance,
  setBalance,
  getValueById,
  errorSound,
};
