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
document.getElementById("transaction-btn").addEventListener("click", () => {
  showSection("transaction");
});
