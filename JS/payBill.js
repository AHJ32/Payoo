// Credentials
import {
  accountNumber,
  pin,
  getValueById,
  setBalance,
  currentBalance,
  errorSound,
  showSection,
} from "./config.js";

//Make the section visible
document.getElementById("pay-bill").addEventListener("click", () => {
  showSection("pay-bill-section");
});

document.getElementById("pay-bill-btn").addEventListener("click", () => {
  //Bank fetch
  const service = getValueById("pay-bill-service");
  // Agent number fetch
  const billerAccountNumber = getValueById("pay-bill-number");
  // amount fetch
  const payBillAmount = Number(getValueById("pay-bill-amount"));
  //Pin fetch
  const payBillPin = getValueById("pay-bill-pin");
  //Bank check
  if (service == "Select Service") {
    alert("Select a service!!!");
    return;
  }
  //Bank account number validation
  if (billerAccountNumber == accountNumber) {
    errorSound();
    return;
  }
  // amount validation
  if (payBillAmount <= 0 || payBillAmount > currentBalance()) {
    errorSound();
    return;
  }
  //Pin validation
  if (payBillPin !== pin) {
    errorSound();
    return;
  }
  //calc
  const updatedBalance = currentBalance() - payBillAmount;
  //Updating the new balance
  setBalance(updatedBalance);
});
