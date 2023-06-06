/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildProject.js":
/*!*****************************!*\
  !*** ./src/buildProject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"buildProject\": () => (/* binding */ buildProject)\n/* harmony export */ });\n/* harmony import */ var _todoConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoConstructor */ \"./src/todoConstructor.js\");\n\r\n\r\nconst projectNameInput = document.querySelector(\"#project-name\");\r\nconst projects = document.querySelector(\"#projects\");\r\n\r\nconst allProjects = [];\r\n\r\nfunction buildProject(newProject) {\r\n  //create a new project and show it on the page\r\n  projects.appendChild(newProject.container);\r\n\r\n  projectNameInput.value = \"\";\r\n\r\n  //define show todo's button\r\n  newProject.showTodosButton.addEventListener(\"click\", () => {\r\n    newProject.todoContainer.classList.toggle(\"hidden\");\r\n  });\r\n\r\n  // define show form button\r\n  newProject.createTodoButton.addEventListener(\"click\", () => {\r\n    newProject.formContainer.classList.toggle(\"hidden\");\r\n  });\r\n\r\n  // define delete project button\r\n  newProject.deleteProjectButton.addEventListener(\"click\", () => {\r\n    newProject.container.remove();\r\n    newProject = null;\r\n  });\r\n\r\n  // Define add todo button\r\n  newProject.addTodoButton.addEventListener(\"click\", () => {\r\n    let newTodo = new _todoConstructor__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n      newProject.titleInput.value,\r\n      newProject.descriptionInput.value,\r\n      newProject.dueDateInput.value,\r\n      newProject.priorityInput.value\r\n    );\r\n\r\n    let allInputs = newProject.allInputs;\r\n\r\n    newProject.allTodos.push(newTodo);\r\n\r\n    newProject.allTodos.forEach((currentTodo) => {\r\n      currentTodo.removeTodoButton.addEventListener(\"click\", () => {\r\n        newProject.allTodos = newProject.allTodos.filter(\r\n          (a) => a !== currentTodo\r\n        );\r\n        currentTodo.todoDiv.remove();\r\n      });\r\n      newProject.todoContainer.appendChild(currentTodo.todoDiv);\r\n    });\r\n\r\n    newProject.formContainer.classList.toggle(\"hidden\");\r\n    allInputs.forEach((input) => (input.value = \"\"));\r\n  });\r\n  allProjects.push(newProject);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/buildProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buildProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildProject */ \"./src/buildProject.js\");\n/* harmony import */ var _projectConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectConstructor */ \"./src/projectConstructor.js\");\n//\r\n//\r\n\r\n\r\n\r\nconst addProjectButton = document.querySelector(\"#add-project\");\r\nconst projectNameInput = document.querySelector(\"#project-name\");\r\n\r\naddProjectButton.addEventListener(\"click\", () =>\r\n  (0,_buildProject__WEBPACK_IMPORTED_MODULE_0__.buildProject)(new _projectConstructor__WEBPACK_IMPORTED_MODULE_1__.Project(projectNameInput.value))\r\n);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projectConstructor.js":
/*!***********************************!*\
  !*** ./src/projectConstructor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction Project(name) {\r\n  //\r\n  // Project start\r\n  this.name = name;\r\n  this.container = document.createElement(\"div\");\r\n  this.container.className = \"project\";\r\n  this.container.innerHTML = `<p class=\"project-name\">${this.name}</p>`;\r\n\r\n  // Buttons\r\n  this.buttonContainer = document.createElement(\"div\");\r\n  this.buttonContainer.classList.add(\"button-container\");\r\n\r\n  this.container.appendChild(this.buttonContainer);\r\n\r\n  this.showTodosButton = document.createElement(\"button\");\r\n  this.showTodosButton.className = \"show-todos\";\r\n  this.showTodosButton.innerText = \"Show Todo's\";\r\n\r\n  this.buttonContainer.appendChild(this.showTodosButton);\r\n\r\n  this.createTodoButton = document.createElement(\"button\");\r\n  this.createTodoButton.className = \"new-todo\";\r\n  this.createTodoButton.innerText = \"Create new Todo\";\r\n\r\n  this.buttonContainer.appendChild(this.createTodoButton);\r\n\r\n  this.deleteProjectButton = document.createElement(\"button\");\r\n  this.deleteProjectButton.className = \"delete-project\";\r\n  this.deleteProjectButton.innerText = \"Delete Project\";\r\n\r\n  this.buttonContainer.appendChild(this.deleteProjectButton);\r\n\r\n  //\r\n  //\r\n  // Containers\r\n  // Todo Form container\r\n  this.formContainer = document.createElement(\"div\");\r\n  this.formContainer.classList.add(\"hidden\");\r\n\r\n  this.container.appendChild(this.formContainer);\r\n\r\n  // Todo container\r\n  this.todoContainer = document.createElement(\"div\");\r\n  this.todoContainer.classList.add(\"todo-container\", \"hidden\");\r\n\r\n  this.container.appendChild(this.todoContainer);\r\n\r\n  this.allTodos = [];\r\n\r\n  //\r\n  //\r\n  // Form\r\n  this.newTodoForm = document.createElement(\"div\");\r\n  this.newTodoForm.classList.add(\"new-todo-form\");\r\n\r\n  this.formContainer.appendChild(this.newTodoForm);\r\n\r\n  this.labels = [\"Title\", \"Description\", \"Due date\", \"Priority\"];\r\n\r\n  this.titleInput = document.createElement(\"input\");\r\n  this.descriptionInput = document.createElement(\"input\");\r\n  this.dueDateInput = document.createElement(\"input\");\r\n  this.priorityInput = document.createElement(\"input\");\r\n  this.allInputs = [\r\n    this.titleInput,\r\n    this.descriptionInput,\r\n    this.dueDateInput,\r\n    this.priorityInput,\r\n  ];\r\n\r\n  this.allInputs.map((input, index) => {\r\n    const container = document.createElement(\"div\");\r\n    const label = document.createElement(\"label\");\r\n    label.innerText = this.labels[index] + \":\";\r\n    this.newTodoForm.appendChild(container); //\r\n    container.appendChild(label);\r\n    container.appendChild(input);\r\n  });\r\n\r\n  this.addTodoButton = document.createElement(\"button\");\r\n  this.addTodoButton.classList.add(\"add-todo\");\r\n  this.addTodoButton.innerText = \"Add new todo\";\r\n\r\n  this.newTodoForm.appendChild(this.addTodoButton);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/projectConstructor.js?");

/***/ }),

/***/ "./src/todoConstructor.js":
/*!********************************!*\
  !*** ./src/todoConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction Todo(title, description, dueDate, priority) {\r\n  // titleDiv\r\n  this.titleDiv = document.createElement(\"div\");\r\n  this.titleDiv.innerHTML = `<p>${title}</p>`;\r\n  this.titleDiv.classList = \"title\";\r\n  // descriptionDiv\r\n  this.descriptionDiv = document.createElement(\"div\");\r\n  this.descriptionDiv.innerHTML = `<p>Description:</p> <p>${description}</p>`;\r\n  this.descriptionDiv.classList = \"description\";\r\n  // dueDateDiv\r\n  this.dueDateDiv = document.createElement(\"div\");\r\n  this.dueDateDiv.innerHTML = `<p>Due date:</p> <p>${dueDate}</p>`;\r\n  this.dueDateDiv.classList = \"dueDate\";\r\n  // priorityDiv\r\n  this.priorityDiv = document.createElement(\"div\");\r\n  this.priorityDiv.innerHTML = `<p>Priority:</p> <p>${priority}</p>`;\r\n  this.priorityDiv.classList = \"priority\";\r\n  // removeButton\r\n  this.removeTodoButton = document.createElement(\"button\");\r\n  this.removeTodoButton.className = \"remove-todo-button\";\r\n  this.removeTodoButton.innerHTML = \"Remove Todo\";\r\n  // container\r\n  this.container = document.createElement(\"div\");\r\n  this.container.classList = \"todo-container\";\r\n  // adding Elements to container\r\n  this.todoDiv = document.createElement(\"div\");\r\n  this.todoDiv.appendChild(this.titleDiv);\r\n  this.todoDiv.appendChild(this.descriptionDiv);\r\n  this.todoDiv.appendChild(this.dueDateDiv);\r\n  this.todoDiv.appendChild(this.priorityDiv);\r\n  this.todoDiv.appendChild(this.removeTodoButton);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/todoConstructor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;