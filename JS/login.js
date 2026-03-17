import { accountNumber } from "./config.js";
import { pin } from "./config.js";
document.getElementById("login-btn").addEventListener("click", () => {
  const contactNumber = document.getElementById("input-mobile").value;
  const pinNumber = document.getElementById("input-pin").value;
  const errorSound = new Audio("Viral FAAH Sound.mp3");

  if (contactNumber == accountNumber && pinNumber == pin) {
    alert("Login Successful");
    window.location.assign("/home.html");
  } else {
    errorSound.play();
  }
});
