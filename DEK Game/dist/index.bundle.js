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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./js/enemy.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Dwarf = /** @class */ (function (_super) {\r\n    __extends(Dwarf, _super);\r\n    function Dwarf(name) {\r\n        return _super.call(this, name, 50, 'grey', 12, 10) || this;\r\n    }\r\n    Dwarf.prototype.ThrowAxe = function (dwarfTarget) {\r\n        if (targets[dwarfTarget].targetRange <= 30) {\r\n            targets[dwarfTarget].hp -= 50;\r\n            console.log('Звучит свист топоров!!!');\r\n            console.log(targets[dwarfTarget].name + \" \\u0443\\u0431\\u0438\\u0442!!!\");\r\n        }\r\n        else {\r\n            console.log(targets[dwarfTarget].name + \" \\u0441\\u043B\\u0438\\u0448\\u043A\\u043E\\u043C \\u0434\\u0430\\u043B\\u0435\\u043A\\u043E\");\r\n        }\r\n    };\r\n    return Dwarf;\r\n}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dwarf);\r\nvar targets = [\r\n    { name: 'target1', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target2', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target3', hp: 50, targetRange: 10, targetDamage: 5 },\r\n    { name: 'target4', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target5', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target6', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target7', hp: 50, targetRange: 20, targetDamage: 5 }\r\n];\r\n\n\n//# sourceURL=webpack://game/./js/dwarf.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./js/enemy.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Elf = /** @class */ (function (_super) {\r\n    __extends(Elf, _super);\r\n    function Elf(name) {\r\n        return _super.call(this, name, 50, 'blue', 8, 30) || this;\r\n    }\r\n    Elf.prototype.MagicAttack = function (elfTarget) {\r\n        if (targets[elfTarget].targetRange <= 20) {\r\n            targets[elfTarget].hp -= 50;\r\n            console.log('Авада Кедавра!!!');\r\n            console.log(targets[elfTarget].name + \" \\u0443\\u0431\\u0438\\u0442!!!\");\r\n        }\r\n        else {\r\n            console.log(targets[elfTarget].name + \" \\u0441\\u043B\\u0438\\u0448\\u043A\\u043E\\u043C \\u0434\\u0430\\u043B\\u0435\\u043A\\u043E\");\r\n        }\r\n    };\r\n    return Elf;\r\n}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Elf);\r\nvar targets = [\r\n    { name: 'target1', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target2', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target3', hp: 50, targetRange: 10, targetDamage: 5 },\r\n    { name: 'target4', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target5', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target6', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target7', hp: 50, targetRange: 20, targetDamage: 5 }\r\n];\r\n\n\n//# sourceURL=webpack://game/./js/elf.ts?");

/***/ }),

/***/ "./js/enemy.ts":
/*!*********************!*\
  !*** ./js/enemy.ts ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Enemy = /** @class */ (function () {\r\n    function Enemy(name, hp, color, damage, range) {\r\n        this.name = name;\r\n        this.hp = hp;\r\n        this.color = color;\r\n        this.damage = damage;\r\n        this.range = range;\r\n    }\r\n    Enemy.prototype.Attack = function (target, range) {\r\n        targets[target].hp -= this.damage;\r\n        console.log(range);\r\n    };\r\n    Enemy.prototype.getDamage = function (damage) {\r\n        this.hp -= damage;\r\n    };\r\n    Enemy.prototype.scream = function () {\r\n        console.log(this.name);\r\n    };\r\n    return Enemy;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\r\nvar targets = [\r\n    { name: 'target1', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target2', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target3', hp: 50, targetRange: 10, targetDamage: 5 },\r\n    { name: 'target4', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target5', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target6', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target7', hp: 50, targetRange: 20, targetDamage: 5 }\r\n];\r\n\n\n//# sourceURL=webpack://game/./js/enemy.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./js/enemy.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Knight = /** @class */ (function (_super) {\r\n    __extends(Knight, _super);\r\n    function Knight(name) {\r\n        return _super.call(this, name, 50, 'red', 10, 20) || this;\r\n    }\r\n    Knight.prototype.AttackAll = function () {\r\n        for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {\r\n            var knightTar = targets_1[_i];\r\n            if (knightTar.targetRange <= 20) {\r\n                knightTar.hp -= 30;\r\n                console.log(knightTar.name + \", \\u043A \\u0440\\u044B\\u0446\\u0430\\u0440\\u044E \\u043B\\u0443\\u0447\\u0448\\u0435 \\u043D\\u0435 \\u043F\\u043E\\u0434\\u0445\\u043E\\u0434\\u0438\\u0442\\u044C!!!\");\r\n            }\r\n            else {\r\n                console.log(knightTar.name + \" c\\u043B\\u0438\\u0448\\u043A\\u043E\\u043C \\u0434\\u0430\\u043B\\u0435\\u043A\\u043E\");\r\n            }\r\n        }\r\n    };\r\n    return Knight;\r\n}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);\r\nvar targets = [\r\n    { name: 'target1', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target2', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target3', hp: 50, targetRange: 10, targetDamage: 5 },\r\n    { name: 'target4', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target5', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target6', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target7', hp: 50, targetRange: 20, targetDamage: 5 }\r\n];\r\n\n\n//# sourceURL=webpack://game/./js/knight.ts?");

/***/ }),

/***/ "./js/script.ts":
/*!**********************!*\
  !*** ./js/script.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elf */ \"./js/elf.ts\");\n/* harmony import */ var _dwarf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dwarf */ \"./js/dwarf.ts\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knight */ \"./js/knight.ts\");\n\r\n\r\n\r\n// class Enemy {\r\n//     constructor(name, hp, color, damage, range) {\r\n//         this.name = name;\r\n//         this.hp = hp;\r\n//         this.color = color;\r\n//         this.damage = damage;\r\n//         this.range = range;\r\n//     }\r\n//     Attack(target, range) {\r\n//         targets[target].hp -= this.damage;\r\n//         console.log(range);\r\n//     }\r\n//     getDamage(damage) {\r\n//         this.hp -= damage;\r\n//     }\r\n//     scream() {\r\n//         console.log(this.name);\r\n//     }\r\n// }\r\nvar targets = [\r\n    { name: 'target1', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target2', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target3', hp: 50, targetRange: 10, targetDamage: 5 },\r\n    { name: 'target4', hp: 50, targetRange: 20, targetDamage: 5 },\r\n    { name: 'target5', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target6', hp: 50, targetRange: 30, targetDamage: 5 },\r\n    { name: 'target7', hp: 50, targetRange: 20, targetDamage: 5 }\r\n];\r\n// class Knight extends Enemy {\r\n//     constructor(name) {\r\n//         super(name, 50, 'red', 10, 20);\r\n//     }\r\n//     AttackAll() {\r\n//         for(let knightTar of targets) {\r\n//             if(knightTar.targetRange <= 20) {\r\n//                 knightTar.hp -= 30;\r\n//                 console.log(`${knightTar.name}, к рыцарю лучше не подходить!!!`);\r\n//             } else {\r\n//                 console.log(`${knightTar.name} cлишком далеко`);\r\n//             }\r\n//         }\r\n//     }\r\n// }\r\n// class Elf extends Enemy {\r\n//     constructor(name) {\r\n//         super(name, 50, 'blue', 8, 30);\r\n//     }\r\n//     MagicAttack(elfTarget) {\r\n//         if(targets[elfTarget].targetRange <= 20) {\r\n//             targets[elfTarget].hp -= 50;\r\n//             console.log('Авада Кедавра!!!');\r\n//             console.log(`${targets[elfTarget].name} убит!!!`);\r\n//         } else {\r\n//             console.log(`${targets[elfTarget].name} слишком далеко`);\r\n//         }\r\n//     }\r\n// }\r\n// class Dwarf extends Enemy {\r\n//     constructor(name) {\r\n//         super(name, 50, 'grey', 12, 10);\r\n//     }\r\n//     ThrowAxe(dwarfTarget) {\r\n//         if(targets[dwarfTarget].targetRange <= 30) {\r\n//             targets[dwarfTarget].hp -= 50;\r\n//             console.log('Звучит свист топоров!!!');\r\n//             console.log(`${targets[dwarfTarget].name} убит!!!`);\r\n//         } else {\r\n//             console.log(`${targets[dwarfTarget].name} слишком далеко`);\r\n//         }\r\n//     }\r\n// }\r\nvar knight = new _knight__WEBPACK_IMPORTED_MODULE_2__.default('knight');\r\nvar elf = new _elf__WEBPACK_IMPORTED_MODULE_0__.default('elf');\r\nvar dwarf = new _dwarf__WEBPACK_IMPORTED_MODULE_1__.default('dwarf');\r\n\n\n//# sourceURL=webpack://game/./js/script.ts?");

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
/******/ 	__webpack_require__("./js/script.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;