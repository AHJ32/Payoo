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
document.getElementById("get-bonus").addEventListener("click", () => {
  showSection("get-bonus-section");
});
document.getElementById("get-bonus-btn").addEventListener("click", () => {
  //creating transaction history
  showHistory("transaction-container", "get-bonus-text", "./assets/opt-4.png");
});
