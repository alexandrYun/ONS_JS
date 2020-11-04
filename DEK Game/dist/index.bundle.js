/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/dwarf.ts":
/*!*********************!*\
  !*** ./js/dwarf.ts ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./js/enemy.ts\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ \"./js/script.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Dwarf = /** @class */ (function (_super) {\r\n    __extends(Dwarf, _super);\r\n    function Dwarf(name) {\r\n        return _super.call(this, name, 200, 'grey', 12, 10) || this;\r\n    }\r\n    Dwarf.prototype.throwAxe = function (dwarfTarget) {\r\n        if (dwarfTarget === 'Рыцарь' && _script__WEBPACK_IMPORTED_MODULE_1__.knight.range <= 30) {\r\n            _script__WEBPACK_IMPORTED_MODULE_1__.knight.hp -= 50;\r\n            console.log('Звучит свист топоров!!!');\r\n        }\r\n        else if (dwarfTarget === 'Эльф' && _script__WEBPACK_IMPORTED_MODULE_1__.elf.range <= 30) {\r\n            _script__WEBPACK_IMPORTED_MODULE_1__.elf.hp -= 50;\r\n            console.log('Звучит свист топоров!!!');\r\n        }\r\n        else if (dwarfTarget === 'Пусто') {\r\n            console.log('Нужно выбрать цель');\r\n        }\r\n        else {\r\n            console.log('Слишком далеко');\r\n        }\r\n    };\r\n    return Dwarf;\r\n}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dwarf);\r\n\n\n//# sourceURL=webpack://game/./js/dwarf.ts?");

/***/ }),

/***/ "./js/elf.ts":
/*!*******************!*\
  !*** ./js/elf.ts ***!
  \*******************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./js/enemy.ts\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ \"./js/script.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Elf = /** @class */ (function (_super) {\r\n    __extends(Elf, _super);\r\n    function Elf(name) {\r\n        return _super.call(this, name, 200, 'blue', 8, 30) || this;\r\n    }\r\n    Elf.prototype.magicAttack = function (elfTarget) {\r\n        if (elfTarget === 'Рыцарь' && _script__WEBPACK_IMPORTED_MODULE_1__.knight.range <= 30) {\r\n            _script__WEBPACK_IMPORTED_MODULE_1__.knight.hp -= 50;\r\n            console.log('Авада Кедавра!!!');\r\n        }\r\n        else if (elfTarget === 'Дварф' && _script__WEBPACK_IMPORTED_MODULE_1__.dwarf.range <= 30) {\r\n            _script__WEBPACK_IMPORTED_MODULE_1__.dwarf.hp -= 50;\r\n            console.log('Авада Кедавра!!!');\r\n        }\r\n        else if (elfTarget === 'Пусто') {\r\n            console.log('Нужно выбрать цель');\r\n        }\r\n        else {\r\n            console.log('Слишком далеко');\r\n        }\r\n    };\r\n    return Elf;\r\n}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Elf);\r\n\n\n//# sourceURL=webpack://game/./js/elf.ts?");

/***/ }),

/***/ "./js/enemy.ts":
/*!*********************!*\
  !*** ./js/enemy.ts ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./js/script.ts\");\n\r\nvar Enemy = /** @class */ (function () {\r\n    function Enemy(name, hp, color, damage, range) {\r\n        this.name = name;\r\n        this.hp = hp;\r\n        this.color = color;\r\n        this.damage = damage;\r\n        this.range = range;\r\n    }\r\n    Enemy.prototype.attack = function (target) {\r\n        if (target === 'Рыцарь' && this.range >= 20) {\r\n            _script__WEBPACK_IMPORTED_MODULE_0__.knight.getDamage(this.damage);\r\n        }\r\n        else if (target === 'Эльф' && this.range >= 30) {\r\n            _script__WEBPACK_IMPORTED_MODULE_0__.elf.getDamage(this.damage);\r\n        }\r\n        else if (target === 'Дварф' && this.range >= 10) {\r\n            _script__WEBPACK_IMPORTED_MODULE_0__.dwarf.getDamage(this.damage);\r\n        }\r\n        else if (target === 'Пусто') {\r\n            console.log('Нужно выбрать цель');\r\n        }\r\n        else {\r\n            console.log('Слишком далеко');\r\n        }\r\n    };\r\n    Enemy.prototype.getDamage = function (damage) {\r\n        this.hp -= damage;\r\n    };\r\n    Enemy.prototype.scream = function () {\r\n        console.log(this.name);\r\n    };\r\n    return Enemy;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\r\n\n\n//# sourceURL=webpack://game/./js/enemy.ts?");

/***/ }),

/***/ "./js/knight.ts":
/*!**********************!*\
  !*** ./js/knight.ts ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./js/enemy.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Knight = /** @class */ (function (_super) {\r\n    __extends(Knight, _super);\r\n    function Knight(name) {\r\n        return _super.call(this, name, 200, 'red', 10, 20) || this;\r\n    }\r\n    Knight.prototype.attackAll = function (targets) {\r\n        for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {\r\n            var knightTar = targets_1[_i];\r\n            if (knightTar.range <= 20) {\r\n                knightTar.hp -= 30;\r\n                console.log(knightTar.name + \", \\u043A \\u0440\\u044B\\u0446\\u0430\\u0440\\u044E \\u043B\\u0443\\u0447\\u0448\\u0435 \\u043D\\u0435 \\u043F\\u043E\\u0434\\u0445\\u043E\\u0434\\u0438\\u0442\\u044C!!!\");\r\n            }\r\n            else {\r\n                console.log(knightTar.name + \" c\\u043B\\u0438\\u0448\\u043A\\u043E\\u043C \\u0434\\u0430\\u043B\\u0435\\u043A\\u043E\");\r\n            }\r\n        }\r\n    };\r\n    return Knight;\r\n}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);\r\n\n\n//# sourceURL=webpack://game/./js/knight.ts?");

/***/ }),

/***/ "./js/script.ts":
/*!**********************!*\
  !*** ./js/script.ts ***!
  \**********************/
/*! namespace exports */
/*! export dwarf [provided] [no usage info] [missing usage info prevents renaming] */
/*! export elf [provided] [no usage info] [missing usage info prevents renaming] */
/*! export knight [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"knight\": () => /* binding */ knight,\n/* harmony export */   \"dwarf\": () => /* binding */ dwarf,\n/* harmony export */   \"elf\": () => /* binding */ elf\n/* harmony export */ });\n/* harmony import */ var _elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elf */ \"./js/elf.ts\");\n/* harmony import */ var _dwarf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dwarf */ \"./js/dwarf.ts\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knight */ \"./js/knight.ts\");\n\r\n\r\n\r\nvar knightName = (document.querySelector('.knight-name'));\r\nvar dwarfName = (document.querySelector('.dwarf-name'));\r\nvar elfName = (document.querySelector('.elf-name'));\r\nvar knightCreate = (document.querySelector('.knight-create'));\r\nvar dwarfCreate = (document.querySelector('.dwarf-create'));\r\nvar elfCreate = (document.querySelector('.elf-create'));\r\nvar knightAtkSelect = (document.querySelector('.knight-atk-select'));\r\nvar knightAttack = (document.querySelector('.k-atk'));\r\nvar knightScream = (document.querySelector('.k-scr'));\r\nvar knightUlt = (document.querySelector('.k-ult'));\r\nvar dwarfAtkSelect = (document.querySelector('.dwarf-atk-select'));\r\nvar dwarfAttack = (document.querySelector('.d-atk'));\r\nvar dwarfScream = (document.querySelector('.d-scr'));\r\nvar dwarfSelect = (document.querySelector('.dwarf-select'));\r\nvar dwarfUlt = (document.querySelector('.d-ult'));\r\nvar elfAtkSelect = (document.querySelector('.elf-atk-select'));\r\nvar elfAttack = (document.querySelector('.e-atk'));\r\nvar elfScream = (document.querySelector('.e-scr'));\r\nvar elfSelect = (document.querySelector('.elf-select'));\r\nvar elfUlt = (document.querySelector('.e-ult'));\r\nvar knight;\r\nvar dwarf;\r\nvar elf;\r\n// создание персонажа\r\nknightCreate.onclick = function () {\r\n    knight = new _knight__WEBPACK_IMPORTED_MODULE_2__.default(knightName.value);\r\n    console.log(knight);\r\n};\r\ndwarfCreate.onclick = function () {\r\n    dwarf = new _dwarf__WEBPACK_IMPORTED_MODULE_1__.default(dwarfName.value);\r\n    console.log(dwarf);\r\n};\r\nelfCreate.onclick = function () {\r\n    elf = new _elf__WEBPACK_IMPORTED_MODULE_0__.default(elfName.value);\r\n    console.log(elf);\r\n};\r\n// атака\r\nknightAttack.onclick = function () {\r\n    knight.attack(knightAtkSelect.value);\r\n    knightAtkSelect.selectedIndex = 0;\r\n    console.log(dwarf);\r\n    console.log(elf);\r\n};\r\ndwarfAttack.onclick = function () {\r\n    dwarf.attack(dwarfAtkSelect.value);\r\n    dwarfAtkSelect.selectedIndex = 0;\r\n    console.log(knight);\r\n    console.log(elf);\r\n};\r\nelfAttack.onclick = function () {\r\n    elf.attack(elfAtkSelect.value);\r\n    elfAtkSelect.selectedIndex = 0;\r\n    console.log(dwarf);\r\n    console.log(knight);\r\n};\r\n// применение ульта\r\nknightUlt.onclick = function () {\r\n    var targets = [\r\n        dwarf,\r\n        elf\r\n    ];\r\n    knight.attackAll(targets);\r\n    console.log(dwarf);\r\n    console.log(elf);\r\n};\r\ndwarfUlt.onclick = function () {\r\n    dwarf.throwAxe(dwarfSelect.value);\r\n    dwarfSelect.selectedIndex = 0;\r\n    console.log(knight);\r\n    console.log(elf);\r\n};\r\nelfUlt.onclick = function () {\r\n    elf.magicAttack(elfSelect.value);\r\n    elfSelect.selectedIndex = 0;\r\n    console.log(dwarf);\r\n    console.log(knight);\r\n};\r\n// Клич\r\nknightScream.onclick = function () {\r\n    console.log(knight.scream());\r\n};\r\ndwarfScream.onclick = function () {\r\n    console.log(dwarf.scream());\r\n};\r\nelfScream.onclick = function () {\r\n    console.log(elf.scream());\r\n};\r\n\n\n//# sourceURL=webpack://game/./js/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./js/script.ts");
/******/ })()
;