function adTaskList() {
  var input = document.getElementById("input").value;
  var taskList = document.createElement("li");

  taskList.appendChild(document.createTextNode(input));

  const markedButton = document.createElement("button");
  markedButton.innerText = "Done";
  markedButton.onclick = markTask;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = deleteTask;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  buttonContainer.appendChild(markedButton);
  buttonContainer.appendChild(deleteButton);

  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(taskList);
  container.appendChild(buttonContainer);

  document.getElementById("list").appendChild(container);

  // store in local storage
  var tasks = JSON.parse(localStorage.getItem("tasks")) || "[]";
  tasks.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// source: lecture fruitshop
function deleteTask() {
  const element = this.parentNode.parentNode;
  element.parentNode.removeChild(element);
}

function markTask() {
  const taskList = this.parentNode.parentNode.querySelector("li");
  taskList.style.textDecoration = "line-through";
}
