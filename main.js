const input = document.getElementById("username");
const btn = document.getElementById("loginBtn");
const greet = document.getElementById("greeting");

const saveduser = localStorage.getItem("user");

// if user already saved, greet directly
if (saveduser) {
  showgreet(saveduser);
}

btn.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    localStorage.setItem("user", name);
    showgreet(name);
  }
});

function showgreet(name) {
  let date = new Date();
  let today = date.toLocaleTimeString();
  greet.textContent = `Hello ${name}${today} `;
  input.style.display = "none";
  btn.style.display = "none";
  const logoutbtn = document.createElement("button");
  logoutbtn.textContent = "logout";
  document.body.appendChild(logoutbtn);

  logoutbtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    greet.textContent = "";
    input.style.display = "inline";

    btn.style.display = "inline";
    logoutbtn.remove();
  });
}
