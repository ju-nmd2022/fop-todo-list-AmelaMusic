function adTaskList() {
  var input = document.getElementById("input").value;
  var taskList = document.createElement("li");

  taskList.appendChild(document.createTextNode(input));

  const markedButton = document.createElement("button");
  markedButton.innerText = "Done";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  buttonContainer.appendChild(markedButton);
  buttonContainer.appendChild(deleteButton);

  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(taskList);
  container.appendChild(buttonContainer);

  document.getElementById("list").appendChild(container);

  //   localStorage.setItem(newListItem);
}
