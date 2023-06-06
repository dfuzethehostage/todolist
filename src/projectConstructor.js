function Project(name) {
  //
  // Project start
  this.name = name;
  this.container = document.createElement("div");
  this.container.className = "project";
  this.container.innerHTML = `<p class="project-name">${this.name}</p>`;

  // Buttons
  this.buttonContainer = document.createElement("div");
  this.buttonContainer.classList.add("button-container");

  this.container.appendChild(this.buttonContainer);

  this.showTodosButton = document.createElement("button");
  this.showTodosButton.className = "show-todos";
  this.showTodosButton.innerText = "Show Todo's";

  this.buttonContainer.appendChild(this.showTodosButton);

  this.createTodoButton = document.createElement("button");
  this.createTodoButton.className = "new-todo";
  this.createTodoButton.innerText = "Create new Todo";

  this.buttonContainer.appendChild(this.createTodoButton);

  this.deleteProjectButton = document.createElement("button");
  this.deleteProjectButton.className = "delete-project";
  this.deleteProjectButton.innerText = "Delete Project";

  this.buttonContainer.appendChild(this.deleteProjectButton);

  //
  //
  // Containers
  // Todo Form container
  this.formContainer = document.createElement("div");
  this.formContainer.classList.add("hidden");

  this.container.appendChild(this.formContainer);

  // Todo container
  this.todoContainer = document.createElement("div");
  this.todoContainer.classList.add("todo-container", "hidden");

  this.container.appendChild(this.todoContainer);

  this.allTodos = [];

  //
  //
  // Form
  this.newTodoForm = document.createElement("div");
  this.newTodoForm.classList.add("new-todo-form");

  this.formContainer.appendChild(this.newTodoForm);

  this.labels = ["Title", "Description", "Due date", "Priority"];

  this.titleInput = document.createElement("input");
  this.descriptionInput = document.createElement("input");
  this.dueDateInput = document.createElement("input");
  this.priorityInput = document.createElement("input");
  this.allInputs = [
    this.titleInput,
    this.descriptionInput,
    this.dueDateInput,
    this.priorityInput,
  ];

  this.allInputs.map((input, index) => {
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.innerText = this.labels[index] + ":";
    this.newTodoForm.appendChild(container); //
    container.appendChild(label);
    container.appendChild(input);
  });

  this.addTodoButton = document.createElement("button");
  this.addTodoButton.classList.add("add-todo");
  this.addTodoButton.innerText = "Add new todo";

  this.newTodoForm.appendChild(this.addTodoButton);
}

export { Project };
