// Credentials
import {
  accountNumber,
  pin,
  getValueById,
  setBalance,
  currentBalance,
} from "./config.js";

//Error sound
const errorSound = new Audio("Viral FAAH Sound.mp3");
document.getElementById("withdraw-btn").addEventListener("click", () => {
  // Agent number fetch
  const agentNumber = getValueById("input-agent");
  // amount fetch
  const amount = Number(getValueById("input-amount"));

  //Pin fetch
  const cashoutPin = getValueById("input-cashout-pin");
  //Agent number validation
  if (agentNumber == accountNumber) {
    errorSound.play();
    return;
  }
  // amount validation
  if (amount <= 0 || amount > currentBalance()) {
    errorSound.play();
    return;
  }
  //Pin validation
  if (cashoutPin !== pin) {
    errorSound.play();
  } else {
    //calc
    const updatedBalance = currentBalance() - amount;
    //Updating the new balance
    setBalance(updatedBalance);
  }
});
