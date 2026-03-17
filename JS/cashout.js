// Credentials
import { accountNumber, pin } from "./config.js";

//Error sound
const errorSound = new Audio("Viral FAAH Sound.mp3");
document.getElementById("withdraw-btn").addEventListener("click", () => {
  // Agent number fetch
  const agentNumber = document.getElementById("input-agent").value;
  // amount fetch
  const amount = Number(document.getElementById("input-amount").value);
  //Current balance fetch
  let currentBalance = Number(document.getElementById("balance").innerText);
  //Pin fetch
  const cashoutPin = document.getElementById("input-cashout-pin").value;
  //Agent number validation
  if (agentNumber == accountNumber) {
    errorSound.play();
    return;
  }
  // amount validation
  if (amount <= 0 || amount > currentBalance) {
    errorSound.play();
    return;
  }
  //Pin validation
  if (cashoutPin !== pin) {
    errorSound.play();
  } else {
    //calc
    const updatedBalance = currentBalance - amount;
    //Updating the new balance
    document.getElementById("balance").innerText = updatedBalance;
  }
});
