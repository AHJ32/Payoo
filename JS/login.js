document.getElementById("login-btn").addEventListener("click", () => {
  const contactNumber = document.getElementById("input-mobile").value;
  const pinNumber = document.getElementById("input-pin").value;
  const errorSound = new Audio("Viral FAAH Sound.mp3");

  if (contactNumber == "01630591092" && pinNumber == "2061") {
    alert("Login Successful");
    window.location.assign("/home.html");
  } else {
    errorSound.play();
  }
});
