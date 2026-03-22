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
document.getElementById("add-money").addEventListener("click", () => {
  showSection("add-money-section");
});

document.getElementById("add-money-btn").addEventListener("click", () => {
  //Bank fetch
  const bank = getValueById("add-money-bank");
  // Agent number fetch
  const bankAccountNumber = getValueById("add-money-number");
  // amount fetch
  const addMoneyAmount = Number(getValueById("add-money-amount"));
  //Pin fetch
  const addMoneyPin = getValueById("add-money-pin");
  //Bank check
  if (bank == "Select Bank") {
    alert("Select a bank!!!");
    return;
  }
  //Bank account number validation
  if (bankAccountNumber !== accountNumber) {
    errorSound();
    return;
  }
  // amount validation
  if (addMoneyAmount <= 0) {
    errorSound();
    return;
  }
  //Pin validation
  if (addMoneyPin !== pin) {
    errorSound();
    return;
  }
  //calc
  const updatedBalance = currentBalance() + addMoneyAmount;
  //Updating the new balance
  setBalance(updatedBalance);
  //creating transaction history
  showHistory("transaction-container", "add-money-text");
});
