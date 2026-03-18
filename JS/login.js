import { accountNumber, pin, errorSound } from "./config.js";

document.getElementById("login-btn").addEventListener("click", () => {
  const contactNumber = document.getElementById("input-mobile").value;
  const pinNumber = document.getElementById("input-pin").value;

  if (contactNumber == accountNumber() && pinNumber == pin()) {
    alert("Login Successful");
    window.location.assign("/home.html");
  } else {
    errorSound();
  }
});
