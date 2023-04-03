// let taskList = [];

function adTaskList() {
  var input = document.getElementById("input").value;
  var taskList = document.createElement("li");

  taskList.appendChild(document.createTextNode(input));

  document.getElementById("list").appendChild(taskList);
  //   localStorage.setItem(newListItem);
}
