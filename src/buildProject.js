import { Todo } from "./todoConstructor";

const projectNameInput = document.querySelector("#project-name");
const projects = document.querySelector("#projects");

const allProjects = [];

function buildProject(newProject) {
  //create a new project and show it on the page
  projects.appendChild(newProject.container);

  projectNameInput.value = "";

  //define show todo's button
  newProject.showTodosButton.addEventListener("click", () => {
    newProject.todoContainer.classList.toggle("hidden");
  });

  // define show form button
  newProject.createTodoButton.addEventListener("click", () => {
    newProject.formContainer.classList.toggle("hidden");
  });

  // define delete project button
  newProject.deleteProjectButton.addEventListener("click", () => {
    newProject.container.remove();
    newProject = null;
  });

  // Define add todo button
  newProject.addTodoButton.addEventListener("click", () => {
    let newTodo = new Todo(
      newProject.titleInput.value,
      newProject.descriptionInput.value,
      newProject.dueDateInput.value,
      newProject.priorityInput.value
    );

    let allInputs = newProject.allInputs;

    newProject.allTodos.push(newTodo);

    newProject.allTodos.forEach((currentTodo) => {
      currentTodo.removeTodoButton.addEventListener("click", () => {
        newProject.allTodos = newProject.allTodos.filter(
          (a) => a !== currentTodo
        );
        currentTodo.todoDiv.remove();
      });
      newProject.todoContainer.appendChild(currentTodo.todoDiv);
    });

    newProject.formContainer.classList.toggle("hidden");
    allInputs.forEach((input) => (input.value = ""));
  });
  allProjects.push(newProject);
}

export { buildProject, allProjects };
