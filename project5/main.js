const { createElement } = require("react");

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const btn = document.getElementById("inp-btn");
  const list = document.getElementById("listiteam");
  const task = JSON.parse(localStorage.getItem("task")) || [];

  task.forEach((element) => {
    rendertask(element);
  });
  btn.addEventListener("click", function () {
    const data = input.value.trim();
    if (input.value == "") return;

    const tasktext = {
      id: Date.now(),
      text: data,
      completed: false,
    };
    task.push(tasktext);
    savetask();
    input.value = "";
    console.log(task);
  });

  function rendertask(tasks) {
    const li = createElement("li");
    li = data;
    list.appendChild(li);
  }
  function savetask() {
    localStorage.setItem("task", JSON.stringify(task));
  }
});
