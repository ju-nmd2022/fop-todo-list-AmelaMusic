function adTaskList() {
  var input = document.getElementById("input").value;
  var taskList = document.createElement("li");

  taskList.appendChild(document.createTextNode(input));

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  const markedButton = document.createElement("button");
  markedButton.innerText = "Done";

  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(taskList);
  container.appendChild(deleteButton);
  container.appendChild(markedButton);

  document.getElementById("list").appendChild(container);

  //   localStorage.setItem(newListItem);
}
