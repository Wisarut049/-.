window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("rememberedUsername");
  if (savedUsername) {
    document.getElementById("username").value = savedUsername;
    document.getElementById("rememberMe").checked = true;
  }
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  if (rememberMe) {
    localStorage.setItem("rememberedUsername", username);
  } else {
    localStorage.removeItem("rememberedUsername");
  }

  // พาไปที่ๆสุดยอด 😁
  window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=_dqfTHwHWGqW_pJs";
});
