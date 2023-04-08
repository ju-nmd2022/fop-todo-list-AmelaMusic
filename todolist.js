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
  var tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
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

function displaySavedTasks() {
  const savedElement = document.getElementById("list");

  let tasksArray = JSON.parse(localStorage.getItem("tasks"));

  if (tasksArray != null) {
    let i = 0;
    while (i < tasksArray.length) {
      const task = tasksArray[i];
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(task));
      // document.getElementById("list").appendChild(item);

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

      container.appendChild(item);
      container.appendChild(buttonContainer);

      savedElement.appendChild(container);

      i++;
    }
  }
}

// function displaySavedTasks() {
//   const savedElement = document.getElementById("list");

//   let tasksArray = JSON.parse(localStorage.getItem("tasks"));

//   if (tasksArray != null) {
//     let i = 0;
//     while (i < tasksArray.length) {
//       const task = tasksArray[i];
//       const item = document.createElement("li");
//       item.appendChild(document.createTextNode(task));

//       const markedButton = document.createElement("button");
//       markedButton.innerText = "Done";
//       markedButton.onclick = markTask;

//       const deleteButton = document.createElement("button");
//       deleteButton.innerText = "Delete";
//       deleteButton.onclick = deleteTask;

//       const buttonContainer = document.createElement("div");
//       buttonContainer.classList.add("buttonContainer");
//       buttonContainer.appendChild(markedButton);
//       buttonContainer.appendChild(deleteButton);

//       const container = document.createElement("div");
//       container.classList.add("container");

//       container.appendChild(item);
//       container.appendChild(buttonContainer);

//       savedElement.appendChild(container);

//       i++;
//     }
//   }
// }

// function displaySavedTasks() {
//   const savedElement = document.getElementById("list");

//   let tasksArray = JSON.parse(localStorage.getItem("tasks"));

//   if (tasksArray != null) {
//     let i = 0;
//     while (i < tasksArray.length) {
//       const task = tasksArray[i];
//       const item = document.createElement("li");
//       item.appendChild(document.createTextNode(task));
//       // document.getElementById("list").appendChild(item);
//       savedElement.appendChild(item);
//       i++;
//     }
//   }
// }

window.onload = function () {
  displaySavedTasks();
};
// localStorage.clear();
// displaySavedTasks();

function deleteSavedTasks() {}
