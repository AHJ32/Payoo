// Credentials
import {
  accountNumber,
  pin,
  getValueById,
  setBalance,
  currentBalance,
  errorSound,
  showSection,
  showHistory,
} from "./config.js";

//Make the section visible
document.getElementById("transfer-money").addEventListener("click", () => {
  showSection("transfer-money-section");
});
document.getElementById("send-now-btn").addEventListener("click", () => {
  // user account number fetch
  const userAccountNumber = getValueById("transfer-user-account-number");
  // amount fetch
  const transferAmount = Number(getValueById("transfer-amount"));

  //Pin fetch
  const transferPin = getValueById("transfer-pin");
  //user account number validation
  if (userAccountNumber == accountNumber) {
    errorSound();
    return;
  }
  // amount validation
  if (transferAmount <= 0 || transferAmount > currentBalance()) {
    errorSound();
    return;
  }
  //Pin validation
  if (transferPin !== pin) {
    errorSound();
    return;
  }
  //calc
  const updatedBalance = currentBalance() - transferAmount;
  //Updating the new balance
  setBalance(updatedBalance);
  //creating transaction history
  showHistory("transaction-container", "transfer-money", "./assets/opt-3.png");
});
