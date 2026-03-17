// Credentials
import { accountNumber, pin, getValueById } from "./config.js";

//Error sound
const errorSound = new Audio("Viral FAAH Sound.mp3");
document.getElementById("withdraw-btn").addEventListener("click", () => {
  // Agent number fetch
  const agentNumber = getValueById("input-agent");
  // amount fetch
  const amount = getValueById("input-amount");
  //Current balance fetch
  let currentBalance = document.getElementById("balance").innerText;
  //Pin fetch
  const cashoutPin = getValueById("input-cashout-pin");
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
    const updatedBalance = Number(currentBalance) - Number(amount);
    //Updating the new balance
    document.getElementById("balance").innerText = updatedBalance;
  }
});
