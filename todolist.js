function adTaskList() {
  var input = document.getElementById("input").value;
  var taskList = document.createElement("li");
  const id = new Date().getTime().toString();

  taskList.appendChild(document.createTextNode(input));
  taskList.setAttribute("data-id", id);

  const markedButton = document.createElement("button");
  // markedButton.innerText = "Done";

  markedButton.style.backgroundImage = 'url("check-mark.png")';
  markedButton.classList.add("markedButton");
  markedButton.onclick = markTask;

  const deleteButton = document.createElement("button");
  // deleteButton.innerText = "Delete";

  deleteButton.style.backgroundImage = 'url("trash-can.png")';
  deleteButton.classList.add("deleteButton");
  deleteButton.onclick = deleteTask;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  buttonContainer.appendChild(markedButton);
  buttonContainer.appendChild(deleteButton);

  const container = document.createElement("div");
  container.classList.add("container");
  container.dataset.id = id;

  container.appendChild(taskList);
  container.appendChild(buttonContainer);

  document.getElementById("list").appendChild(container);

  // store in local storage
  var tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray.push({ id, task: input, done: false });
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

// source: lecture fruitshop
function deleteTask() {
  const element = this.parentNode.parentNode;
  element.parentNode.removeChild(element);

  const id = element.dataset.id;
  // delete task. //Source: remove with task identifier:
  //https://www.google.com/search?q=delete+from+local+storage+when+deleting+input&hl=sv&sxsrf=APwXEdfHYcTdacitm-3tDxQFEZYeO8wmyw:1681036361434&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjH07W5zJz-AhXyQ_EDHey0BOoQ_AUoAXoECAEQAw&biw=1036&bih=621&dpr=2#fpstate=ive&vld=cid:ebe8b768,vid:pRkHOD_nkH4
  var tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTaskArray = tasksArray.filter((task) => task.id != id);
  localStorage.setItem("tasks", JSON.stringify(newTaskArray));
}

function markTask() {
  const taskList = this.parentNode.parentNode.querySelector("li");
  taskList.style.textDecoration = "line-through";

  // const id = this.parentNode.parentNode.dataset.id;
  const id = taskList.dataset.id;
  let tasksArray = JSON.parse(localStorage.getItem("tasks"));
  const task = tasksArray.find((task) => task.id === id);
  task.done = true;
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function displaySavedTasks() {
  const savedElement = document.getElementById("list");

  let tasksArray = JSON.parse(localStorage.getItem("tasks"));

  if (tasksArray != null) {
    let i = 0;
    while (i < tasksArray.length) {
      const task = tasksArray[i];
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(task.task));
      item.dataset.id = task.id;

      // document.getElementById("list").appendChild(item);

      const markedButton = document.createElement("button");
      // markedButton.innerText = "Done";

      markedButton.style.backgroundImage = 'url("check-mark.png")';
      markedButton.classList.add("markedButton");
      markedButton.onclick = markTask;

      const deleteButton = document.createElement("button");
      // deleteButton.innerText = "Delete";

      deleteButton.style.backgroundImage = 'url("trash-can.png")';
      deleteButton.classList.add("deleteButton");
      deleteButton.onclick = deleteTask;

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("buttonContainer");
      buttonContainer.appendChild(markedButton);
      buttonContainer.appendChild(deleteButton);

      const container = document.createElement("div");
      container.classList.add("container");
      container.dataset.id = task.id;

      container.appendChild(item);
      container.appendChild(buttonContainer);

      savedElement.appendChild(container);

      i++;

      if (task.done) {
        item.style.textDecoration = "line-through";
      }
    }
  }
}

window.onload = function () {
  displaySavedTasks();
};
