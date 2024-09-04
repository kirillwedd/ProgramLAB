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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_tape_bg_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/tape/bg.webp */ \"./src/image/tape/bg.webp\");\n/* harmony import */ var _image_tape_heand_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/tape/heand.webp */ \"./src/image/tape/heand.webp\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const imgElements = document.querySelectorAll(\".news__img\");\r\n\r\n  const images = [_image_tape_bg_webp__WEBPACK_IMPORTED_MODULE_0__, _image_tape_heand_webp__WEBPACK_IMPORTED_MODULE_1__];\r\n\r\n  imgElements.forEach((img, index) => {\r\n    index < images.length;\r\n    img.src = images[index];\r\n  });\r\n\r\n\r\n\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const container = document.querySelector('.situation-items');\r\n  let itemCount = 0; \r\n\r\n  const itemWidth = 220; \r\n\r\n  const addNewItem = () => {\r\n    const containerWidth = container.clientWidth;\r\n\r\n    \r\n    if (containerWidth >= (itemWidth * (itemCount + 1))) {\r\n      const newItem = document.createElement('article');\r\n      const isDivorce = itemCount % 2 === 0; \r\n      const className = isDivorce ? 'situation-item--divorce' : 'situation-item--bankruptcy';\r\n      const title = isDivorce ? 'Развод' : 'Банкротство';\r\n      const description = 'С нами это легко';\r\n\r\n      newItem.className = `situation-item ${className}`;\r\n      newItem.innerHTML = `<h4 class=\"situation-item__title title\">${title}</h4>\r\n                           <span class=\"situation-item__description description\">${description}</span>`;\r\n\r\n      container.appendChild(newItem);\r\n      itemCount++;\r\n    }\r\n  };\r\n\r\n  const removeLastItem = () => {\r\n    if (itemCount > 0) {\r\n      container.removeChild(container.lastChild);\r\n      itemCount--;\r\n    }\r\n  };\r\n\r\n  const resizeObserver = new ResizeObserver((entries) => {\r\n    for (const entry of entries) {\r\n      if (entry.contentRect.width > 0) {\r\n        const containerWidth = container.clientWidth;\r\n\r\n        \r\n        while (containerWidth >= (itemWidth * (itemCount + 1))) {\r\n          addNewItem();\r\n        }\r\n\r\n        \r\n        while (containerWidth < (itemWidth * itemCount) && itemCount > 0) {\r\n          removeLastItem();\r\n        }\r\n      }\r\n    }\r\n  });\r\n\r\n  resizeObserver.observe(container);\r\n\r\n \r\n  addNewItem();\r\n});  \r\n\r\n\r\n\r\nconst jsonData = `{\r\n  \"services\": [\r\n      \"Банкротство\",\r\n      \"Развод\",\r\n      \"Наследование\",\r\n      \"Переоформление имущества\",\r\n      \"Супружеская доля\",\r\n      \"Заверение документов\",\r\n      \"Розыск счетов\"\r\n  ]\r\n}`;\r\n\r\nconst data = JSON.parse(jsonData).services; \r\n\r\nconst input = document.querySelector('.header__searcher');\r\nconst resultsContainer = document.querySelector('.results-searcher-container');\r\n\r\ninput.addEventListener('input', () => {\r\n    const query = input.value.toLowerCase();\r\n    resultsContainer.innerHTML = ''; \r\n\r\n    \r\n    if (query.length >= 3) {\r\n        const filteredData = data.filter(service => service.toLowerCase().includes(query.toLowerCase()));\r\n\r\n\r\n        if (filteredData.length > 0) {\r\n            filteredData.forEach(service => {\r\n                const listItem = document.createElement('li');\r\n                listItem.className=\"results-searcher-container__result-item\";\r\n                listItem.textContent = service; \r\n                resultsContainer.appendChild(listItem); \r\n                listItem.addEventListener('click', ()=>{\r\n                  input.value=service;\r\n                  resultsContainer.style.display = 'none';\r\n                })\r\n            });\r\n\r\n            \r\n        } \r\n    }\r\n});\r\n\r\ndocument.addEventListener('click', (event)=> {\r\n  if(!event.target.closest('.header__search-container-form'))\r\n  {\r\n    resultsContainer.style.display='none';\r\n  }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://programlab/./src/index.js?");

/***/ }),

/***/ "./src/image/tape/bg.webp":
/*!********************************!*\
  !*** ./src/image/tape/bg.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"326154687b9a3fcc5632.webp\";\n\n//# sourceURL=webpack://programlab/./src/image/tape/bg.webp?");

/***/ }),

/***/ "./src/image/tape/heand.webp":
/*!***********************************!*\
  !*** ./src/image/tape/heand.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46280d15b295c1623641.webp\";\n\n//# sourceURL=webpack://programlab/./src/image/tape/heand.webp?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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