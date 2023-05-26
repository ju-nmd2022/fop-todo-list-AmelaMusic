// Source: most of code inspired from lecture fruitshop + linked youtube video
// source: other lectures (while loop)
// source: line 60, 62,68,70,71,74,80 based on youtube video: https://www.youtube.com/watch?v=pRkHOD_nkH4 accessed april 2023

// ads new tasks to the list and stores them in local storage
function adTaskList() {
  var input = document.getElementById("input").value;
  var taskList = document.createElement("li");
  //set the unique id for the tasks (converting the current time to a string)
  const id = new Date().getTime().toString();

  taskList.appendChild(document.createTextNode(input));
  taskList.setAttribute("data-id", id);

  //creates "mark as done" button  
  const markedButton = document.createElement("button");
  markedButton.style.backgroundImage = 'url("check-mark.png")';
  markedButton.classList.add("markedButton");
  markedButton.onclick = markTask;

  // creates a "delete" button
  const deleteButton = document.createElement("button");
  deleteButton.style.backgroundImage = 'url("trash-can.png")';
  deleteButton.classList.add("deleteButton");
  deleteButton.onclick = deleteTask;

  // creates a container for the buttons and ads the buttons in it
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  buttonContainer.appendChild(markedButton);
  buttonContainer.appendChild(deleteButton);

  // creates a container for the task list item,sets the "data-id" attribute.
  //Ads the button container and task list item
  const container = document.createElement("div");
  container.classList.add("container");
  container.dataset.id = id;
  container.appendChild(taskList);
  container.appendChild(buttonContainer);

  //appends the container element to the list with the ID "list"
  document.getElementById("list").appendChild(container);

  // store in local storage
  //assign specific id, the task and set done to false (for the mark line-through)
  var tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray.push({ id, task: input, done: false });
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}



function deleteTask() {
  const element = this.parentNode.parentNode;
  element.parentNode.removeChild(element);
  //retrieve the ID from the task
  const id = element.dataset.id;
  // delete task from local storage
  var tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTaskArray = tasksArray.filter((task) => task.id != id);
  //stores updated taskarray in local storage
  localStorage.setItem("tasks", JSON.stringify(newTaskArray));
}

function markTask() {
  const taskList = this.parentNode.parentNode.querySelector("li");
  taskList.style.textDecoration = "line-through";

  const id = taskList.dataset.id;
  let tasksArray = JSON.parse(localStorage.getItem("tasks"));
  const task = tasksArray.find((task) => task.id === id);
  task.done = true;
   //stores updated taskarray in local storage
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
      
      //creates "mark as done" button  
      const markedButton = document.createElement("button");
      markedButton.style.backgroundImage = 'url("check-mark.png")';
      markedButton.classList.add("markedButton");
      markedButton.onclick = markTask;

       // creates a "delete" button
      const deleteButton = document.createElement("button");
      deleteButton.style.backgroundImage = 'url("trash-can.png")';
      deleteButton.classList.add("deleteButton");
      deleteButton.onclick = deleteTask;

      // creates a container for the buttons and ads the buttons in it
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

      //if done=true (if text is marked as done) set the text decoration to "line-through"
      if (task.done) {
        item.style.textDecoration = "line-through";
      }
    }
  }
}

//Executes after page finishes loading
window.onload = function () {
  displaySavedTasks();
};
