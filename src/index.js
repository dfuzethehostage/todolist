//
//
import { buildProject, allProjects } from "./buildProject";
import { Project } from "./projectConstructor";

const addProjectButton = document.querySelector("#add-project");
const projectNameInput = document.querySelector("#project-name");

addProjectButton.addEventListener("click", () =>
  buildProject(new Project(projectNameInput.value))
);
