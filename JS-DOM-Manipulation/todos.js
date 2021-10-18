// Create a function that creates a new list element and set the innerHTML to contents of input
let i = 1;

function addTodo() {
  i++;
  let newTodo = document.createElement("li");
  console.log(newTodo);
  newTodo.innerHTML = document.querySelector("input").value;
  newTodo.className = "todo";
  newTodo.setAttribute("id", "item" + i);
  newTodo.setAttribute("onClick", "remove(this)");
  document.querySelector("ul").appendChild(newTodo);
}

// Add Todo Button event listener
let addTodoBtn = document.getElementById("addTodoBtn");
addTodoBtn.addEventListener("click", function () {
  addTodo();
});

// Remove Todo Button Event Listener
function remove(el) {
  let element = el;
  element.remove();
}

// document.querySelector("ul").addEventListener("click", remove);
