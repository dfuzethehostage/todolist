function Todo(title, description, dueDate, priority) {
  // titleDiv
  this.titleDiv = document.createElement("div");
  this.titleDiv.innerHTML = `<p>${title}</p>`;
  this.titleDiv.classList = "title";
  // descriptionDiv
  this.descriptionDiv = document.createElement("div");
  this.descriptionDiv.innerHTML = `<p>Description:</p> <p>${description}</p>`;
  this.descriptionDiv.classList = "description";
  // dueDateDiv
  this.dueDateDiv = document.createElement("div");
  this.dueDateDiv.innerHTML = `<p>Due date:</p> <p>${dueDate}</p>`;
  this.dueDateDiv.classList = "dueDate";
  // priorityDiv
  this.priorityDiv = document.createElement("div");
  this.priorityDiv.innerHTML = `<p>Priority:</p> <p>${priority}</p>`;
  this.priorityDiv.classList = "priority";
  // removeButton
  this.removeTodoButton = document.createElement("button");
  this.removeTodoButton.className = "remove-todo-button";
  this.removeTodoButton.innerHTML = "Remove Todo";
  // container
  this.container = document.createElement("div");
  this.container.classList = "todo-container";
  // adding Elements to container
  this.todoDiv = document.createElement("div");
  this.todoDiv.appendChild(this.titleDiv);
  this.todoDiv.appendChild(this.descriptionDiv);
  this.todoDiv.appendChild(this.dueDateDiv);
  this.todoDiv.appendChild(this.priorityDiv);
  this.todoDiv.appendChild(this.removeTodoButton);
}

export { Todo };
