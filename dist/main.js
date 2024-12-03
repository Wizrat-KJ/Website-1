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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainFile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainFile.js */ \"./src/mainFile.js\");\n/* harmony import */ var _mainFile_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mainFile_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack://projekt/./src/index.js?");

/***/ }),

/***/ "./src/mainFile.js":
/*!*************************!*\
  !*** ./src/mainFile.js ***!
  \*************************/
/***/ (() => {

eval("const apiKey =\r\n  \"live_JUHjGPkY5zKsqYbF4xU0VOG2mX8FRTAtKIlYFTYcnt5a2I1Y1TEdrxc4EIce6tYS\";\r\nconst apiUrl = `https://api.thecatapi.com/v1/`;\r\nconst imgbutton = document.querySelector(\".btn-gen-pussy\");\r\nconst infobutton = document.querySelector(\".funfact-btn-search\");\r\nconst pH = \"./style/img/pH.img\";\r\nconst input = document.querySelector(\"input\");\r\nlet kotek;\r\nfunction genPussy() {\r\n  const link = `${apiUrl}images/search`;\r\n  axios\r\n    .get(link, {\r\n      headers: {\r\n        \"x-api-key\": apiKey,\r\n      },\r\n    })\r\n    .then((response) => {\r\n      kotek = response.data[0];\r\n      document.getElementsByClassName(\"image-main\").src = kotek.url;\r\n    })\r\n    .catch(() => {\r\n      document.getElementsByClassName(\"image-main\").src = pH;\r\n    });\r\n}\r\nfunction funFact() {\r\n  const value = input.value;\r\n  if (isNaN(value)) {\r\n    alert(\"Pleas type a  pos number\");\r\n    return;\r\n  } else if (value > 100) {\r\n    alert(\"Pleas type a  number between 1-100\");\r\n    return;\r\n  }\r\n  axios\r\n    .get(`https://meowfacts.herokuapp.com/?count=${value}`)\r\n    .then((response) => {\r\n      const kitkiInfo = document.querySelector(\".funfact-content\");\r\n      kitkiInfo.innerHTML = \"\"; // czysci <p> inaczej lista idzie w inf\r\n      response.data.data.forEach((fact) => {\r\n        const para = document.createElement(\"p\");\r\n        para.textContent = fact;\r\n        kitkiInfo.appendChild(para);\r\n      });\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"Błąd\", error);\r\n      document.querySelector(\".funfact-content\").textContent =\r\n        \"Nie udało się pobrać listy\";\r\n    });\r\n}\r\ndocument.getElementsByClassName(\"image-main\").onerror = () => {\r\n  document.getElementsByClassName(\"image-main\").src = pH;\r\n};\r\ninput.addEventListener(\"keydown\", (e) => {\r\n  if (e.key === \"Enter\") funFact();\r\n});\r\n\r\nimgbutton.addEventListener(\"click\", genPussy);\r\ninfobutton.addEventListener(\"click\", funFact);\r\n\r\nfunction rgb() {\r\n  const rgb = \"0123456789ABCDEF\";\r\n  let hash = \"#\";\r\n  for (let i = 0; i < 6; i++) {\r\n    hash += rgb[Math.floor(Math.random() * 16) + 1];\r\n  }\r\n  return hash;\r\n}\r\n\r\nfunction randomrgb() {\r\n  document.querySelector(\".header-line\").style.backgroundColor = `${rgb()}`;\r\n}\r\n\r\nsetInterval(randomrgb, 300);\r\n\n\n//# sourceURL=webpack://projekt/./src/mainFile.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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