// Credentials
import { accountNumber } from "./config.js";
import { pin } from "./config.js";

document.getElementById("withdraw-btn").addEventListener("click", () => {
  //Error sound
  const errorSound = new Audio("Viral FAAH Sound.mp3");
  // Agent number fetch and validate
  const agentNumber = document.getElementById("input-agent").value;
  if (agentNumber == accountNumber) {
    errorSound.play();
  } else {
    // amount fetch and validate
    const amount = document.getElementById("input-amount").value;
    const currentBalance = document.getElementById("balance").innerText;
    if (Number(amount) >= Number(currentBalance)) {
      errorSound.play();
    } else {
      const cashoutPin = document.getElementById("input-cashout-pin").value;
      if (cashoutPin == pin) {
        alert("Correct");
      }
    }
  }
});
