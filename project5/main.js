const { createElement } = require("react");

const input = document.getElementById("input");
const btn = document.getElementById("inp-btn");
const list = document.getElementById("listiteam");

btn.addEventListener("click", function () {
  let data = input.value;
  const sub = createElement("li");
  sub = data;
  if (input.value === "") return;
  list.appendChild(sub);
});
