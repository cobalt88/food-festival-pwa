/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/events.js":
/*!*****************************!*\
  !*** ./assets/js/events.js ***!
  \*****************************/
/***/ (() => {

eval("if (window.location.href.indexOf(\"event\") > -1) {\r\n  const currentEvent = JSON.parse(localStorage.getItem(\"currentEvent\")) || {\r\n      title: \"Title Placeholder\",\r\n      subtitle: \"\",\r\n      description: \"\"\r\n  };\r\n\r\n  const pageEl = document.querySelector(\"#page\");\r\n  \r\n  const containerEl = createEl(\"div\", {class: \"container\"},\r\n    createEl(\"div\", {class: \"card mb-3\"}, \r\n      createEl(\"img\", {class: \"card-img-top\", style: \"width: 5px\", src: currentEvent.image || \"https://via.placeholder.com/350x150\"}),\r\n      createEl(\"div\", {class: \"card-body\"}, \r\n        createEl(\"h1\", {class: \"card-title\"}, currentEvent.title || \"\"),\r\n        createEl(\"h2\", {class: \"text-muted\"}, currentEvent.subtitle || \"\"),\r\n        createEl(\"p\", {class: \"card-text mt-3\"}, currentEvent.description || createLoremIpsum(100)),\r\n        createEl(\"a\", {class: \"btn btn-primary\", href: \"tickets.html\"}, \"Buy Tickets\")\r\n      )\r\n    ),\r\n    \r\n  )\r\n  pageEl.appendChild(containerEl)\r\n}\n\n//# sourceURL=webpack://food-festival-pwa/./assets/js/events.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/events.js"]();
/******/ 	
/******/ })()
;