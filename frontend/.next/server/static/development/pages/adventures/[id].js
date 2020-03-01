module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/img/high/staydetail2.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail2-d675f41ab81426830a59e747f25def75.jpg";

/***/ }),

/***/ "./public/img/high/staydetail3.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail3-3f01324ba796db32863bdb65d011b647.jpg";

/***/ }),

/***/ "./public/img/high/staydetail4.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail4.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail4-d125675c1fb3c36316811b93bce691dc.jpg";

/***/ }),

/***/ "./public/img/high/staydetail5.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail5.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail5-7012bd4430f2ebc4689d0d2dc4f4fe97.jpg";

/***/ }),

/***/ "./src/components/layout/ExploreHeader.tsx":
/*!*************************************************!*\
  !*** ./src/components/layout/ExploreHeader.tsx ***!
  \*************************************************/
/*! exports provided: ExploreHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreHeader", function() { return ExploreHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/ExploreHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const renderContent = (type, mode) => {
  if (mode === 'white') {
    return __jsx("div", {
      className: "flex items-center justify-between relative border-b border-gray-300",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }, __jsx("div", {
      className: "flex items-center justify-start w-full md:w-1/2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, __jsx("div", {
      className: "ml-6 mr-6 md:mr-8 my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, "Airbnb"), __jsx("svg", {
      viewBox: "0 0 1000 1000",
      role: "presentation",
      "aria-hidden": "true",
      focusable: "false",
      className: "block",
      style: {
        height: 34,
        width: 34,
        fill: '#FF6368'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, __jsx("path", {
      d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    })))), __jsx("div", {
      className: "w-full md:max-w-100 flex items-center justify-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, __jsx("div", {
      id: "hoverbox",
      className: "flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, __jsx("svg", {
      viewBox: "0 0 16 16",
      style: {
        height: 18,
        width: 18
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, __jsx("path", {
      d: "m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    })), __jsx("p", {
      style: {
        fontFamily: 'airbnb-bold'
      },
      className: "text-gray-750 px-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, "Anywhere ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, " \xB7 "), " ", type)))), __jsx("nav", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      className: "hidden xl:block xl:flex items-center justify-around flex-wrap text-gray-750",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx("div", {
      className: "border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "flex items-center justify-start text-sm mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, __jsx("svg", {
      className: "relative self-center h-3 w-3",
      style: {
        fill: '#484848',
        right: 5
      },
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx("path", {
      d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, "English(CA)"))), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "$CAD")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, "Become a host")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, "Help")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, "Sign up")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, "Log in"))));
  } else if (mode === 'dark') {
    return __jsx("div", {
      className: "bg-black flex items-center justify-between relative",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, __jsx("div", {
      className: "flex items-center justify-start w-full md:w-1/2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, __jsx("div", {
      className: "ml-6 mr-6 md:mr-8 my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, __jsx("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: undefined
    }, "Airbnb"), __jsx("svg", {
      viewBox: "0 0 1000 1000",
      role: "presentation",
      "aria-hidden": "true",
      focusable: "false",
      className: "block",
      style: {
        height: 34,
        width: 34,
        fill: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, __jsx("path", {
      d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    })))), __jsx("div", {
      className: "w-full md:max-w-100 flex items-center justify-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, __jsx("div", {
      id: "hoverbox",
      className: "bg-white flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx("svg", {
      viewBox: "0 0 16 16",
      style: {
        height: 18,
        width: 18
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, __jsx("path", {
      d: "m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    })), __jsx("p", {
      style: {
        fontFamily: 'airbnb-bold'
      },
      className: "text-gray-650 px-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    }, "Search")))), __jsx("nav", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      className: "hidden xl:block xl:flex items-center justify-around flex-wrap text-gray-750",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: undefined
    }, __jsx("div", {
      className: "border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "flex items-center justify-start text-sm mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    }, __jsx("svg", {
      className: "relative self-center h-3 w-3",
      style: {
        fill: 'white',
        right: 5
      },
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }, __jsx("path", {
      d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    })), __jsx("p", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      className: "text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, "English(CA)"))), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      className: "text-white text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, "$CAD")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      className: "text-white text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: undefined
    }, "Become a host")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      href: "#",
      className: "text-white text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: undefined
    }, "Help")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      href: "#",
      className: "text-white text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }, "Sign up")), __jsx("div", {
      className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        fontFamily: 'airbnb-medium'
      },
      href: "#",
      className: "text-white text-sm tracking-wide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: undefined
    }, "Log in"))));
  }
};

const ExploreHeader = ({
  type,
  mode
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, renderContent(type, mode));
};

/***/ }),

/***/ "./src/components/layout/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Footer.tsx ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContent */ "./src/components/layout/FooterContent.tsx");
/* harmony import */ var _FooterInducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterInducer */ "./src/components/layout/FooterInducer.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component



const Footer = () => {
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, display ? __jsx(_FooterContent__WEBPACK_IMPORTED_MODULE_1__["FooterContent"], {
    swap: changeDisplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }) : __jsx(_FooterInducer__WEBPACK_IMPORTED_MODULE_2__["FooterInducer"], {
    swap: changeDisplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/components/layout/FooterContent.tsx":
/*!*************************************************!*\
  !*** ./src/components/layout/FooterContent.tsx ***!
  \*************************************************/
/*! exports provided: FooterContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContent", function() { return FooterContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/FooterContent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const FooterContent = ({
  swap
}) => {
  return __jsx("div", {
    className: "hidden md:block fixed bottom-0 bg-white w-full border-t border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:px-20 px-5 xl:px-0 lg:max-w-6xl xl:max-w-5.5xl mx-auto py-6 sm:py-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:items-start md:w-full md:justify-between md:pb-6 md:border-b md:border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "News")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Policies")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Diversity & Belonging")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Accessibility")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Discover"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Trust & Safety")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Travel Credit")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Airbnb Citizen")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Business Travel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Things To Do")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Airbnbmag")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-905 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Hosting"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Why Host")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Hospitality")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Responsible Hosting")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Community Centre")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "Host an Experience")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Open Homes")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-sm mb-2 text-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Support"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Help")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "Neighbourhood Support"))))), __jsx("div", {
    className: "flex flex-wrap items-center justify-between sm:pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-wrap items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-5 w-5 block",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  })), __jsx("p", {
    className: "pl-2 text-sm  text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "\xA9 2020 Airbnb, Inc. All rights reserved."), __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:justify-between md:items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-sm text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "\u3000\u2744\uFE0F Cloned by"), __jsx("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "\xA0Ken"))), __jsx("div", {
    className: "hidden lg:flex lg:items-center lg:justify-start lg:flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    width: "512pt",
    style: {
      fill: '#767676'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), __jsx("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }), __jsx("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), __jsx("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }), __jsx("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }), __jsx("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }), __jsx("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }), __jsx("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }), __jsx("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), __jsx("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), __jsx("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }), __jsx("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  })), __jsx("svg", {
    className: "h-5 w-5 ml-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676',
      marginRight: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, __jsx("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }))), __jsx("svg", {
    className: "w-5 h-5 ml-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }))))))), __jsx("button", {
    onClick: swap,
    className: "flex items-center justify-start hover:bg-gray-100 bg-white z-10 shadow-xl fixed bottom-0 lg:right-0 ml-4 lg:mr-4 mb-3 rounded-lg py-2 px-4 font-semibold text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-3 w-3 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, __jsx("path", {
    d: "M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892 L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999 c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998 c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }, "Close")));
};

/***/ }),

/***/ "./src/components/layout/FooterInducer.tsx":
/*!*************************************************!*\
  !*** ./src/components/layout/FooterInducer.tsx ***!
  \*************************************************/
/*! exports provided: FooterInducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterInducer", function() { return FooterInducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/FooterInducer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const FooterInducer = ({
  swap
}) => {
  return __jsx("button", {
    onClick: swap,
    className: "hidden md:block hover:bg-gray-100 md:flex md:items-center justify-start fixed bottom-0 md:ml-3 md:mb-3 lg:right-0  lg:mr-3 z-50 bg-white text-sm py-2 px-4 rounded-lg shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-4 w-4 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("path", {
    d: "M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Terms, privacy, & more"));
};

/***/ }),

/***/ "./src/pages/adventures/[id].js":
/*!**************************************!*\
  !*** ./src/pages/adventures/[id].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _functions_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/Banner */ "./src/pages/adventures/functions/Banner.js");
/* harmony import */ var _section_WhatYouDo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/WhatYouDo */ "./src/pages/adventures/section/WhatYouDo.js");
/* harmony import */ var _section_Adventures__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section/Adventures */ "./src/pages/adventures/section/Adventures.js");
/* harmony import */ var _section_Included__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section/Included */ "./src/pages/adventures/section/Included.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



 // Dependencies

 // GraphQL

 // Components






 // Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';

const detail2 = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

const detail3 = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");

const detail4 = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");

const detail5 = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");

const GET_ADVENTURE = apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"]`
  query Adventure($id: ID!) {
    adventure(where: { id: $id }) {
      title
      period
      cost
      country
      img
    }
  }
`;

const id = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_ADVENTURE, {
    variables: {
      id: router.query.id
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, data.adventure.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__["ExploreHeader"], {
    type: "stay",
    mode: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(_functions_Banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(_section_WhatYouDo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(_section_Adventures__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx(_section_Included__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 h-full text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Your itinerary"), __jsx("div", {
    className: "w-full md:w-8/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "px-5 text-gray-750 border-l border-gray-800 relative ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      height: 7,
      width: 7,
      top: -7,
      left: -3.6
    },
    className: "absolute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }))))), __jsx("p", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Day 1"), __jsx("div", {
    className: "w-full flex justify-start items-start pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-5/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full",
    src: detail2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-7/12 pl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Marrakech-Oughla - Tinzerte"), __jsx("p", {
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Marrakech to imi oughlad small village situated 1,450m at the base of Toubkal. Here we begin the gentle accent."), __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850 text-sm mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Show more"))), __jsx("div", {
    style: {
      height: 7,
      width: 7,
      bottom: -7,
      left: -3.6
    },
    className: "absolute z-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })))))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "relative px-5 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("p", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Day 2"), __jsx("div", {
    className: "w-full flex justify-start items-start pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-5/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full",
    src: detail2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-7/12 pl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Tizerte - Ouirgane - Marrakech"), __jsx("p", {
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "The day's trek will take you through the villages of Imariren Noufla and Anraz. A picnic style lunch will be enjoyed.."), __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850 text-sm mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, "Show more"))))))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }));
};

const SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
const SSkeletonPulse1 = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;
/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ }),

/***/ "./src/pages/adventures/functions/Banner.js":
/*!**************************************************!*\
  !*** ./src/pages/adventures/functions/Banner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/functions/Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "w-full bg-black h-80v flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full max-w-6xl h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "bg-red-500 h-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, " hello"), __jsx("div", {
    className: "w-full lg:max-w-6xl h-1/2 flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full md:w-4/12 h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "items-end justify-start pt-6 text-xs uppercase text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "2-Day Adventure"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full text-4xl text-white ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Atlas Mountains Experience"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full text-white ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Marrakech, Morocco"), __jsx("div", {
    className: "flex justify-start text-white my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "5.0"), __jsx("div", {
    className: "h-3 w-3 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    style: {
      fill: '#ffffff',
      marginTop: 6
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "(1)")), __jsx("div", {
    className: "flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Hiking"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Trekking"))), __jsx("div", {
    className: "w-full md:w-8/12 h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-9/12 mt-4 ml-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-white text-lg py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Trek & Cook with the berbers"), __jsx("div", {
    className: "w-full flex justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#ffffff'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C114.509,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256 C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133 S477.867,133.663,477.867,256S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("path", {
    d: "M308.776,250.888h-55.79v-95.056c0-9.425-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v112.122 c0,9.425,7.641,17.067,17.067,17.067h72.856c9.425,0,17.067-7.641,17.067-17.067S318.201,250.888,308.776,250.888z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Duration"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "2 days")), __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#ffffff'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C114.509,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256 C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133 S477.867,133.663,477.867,256S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("path", {
    d: "M308.776,250.888h-55.79v-95.056c0-9.425-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v112.122 c0,9.425,7.641,17.067,17.067,17.067h72.856c9.425,0,17.067-7.641,17.067-17.067S318.201,250.888,308.776,250.888z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Duration"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "2 days"))), __jsx("div", {
    className: "flex w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#ffffff'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C114.509,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256 C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133 S477.867,133.663,477.867,256S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("path", {
    d: "M308.776,250.888h-55.79v-95.056c0-9.425-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v112.122 c0,9.425,7.641,17.067,17.067,17.067h72.856c9.425,0,17.067-7.641,17.067-17.067S318.201,250.888,308.776,250.888z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, "Duration"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "2 days")), __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#ffffff'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C114.509,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256 C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133 S477.867,133.663,477.867,256S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("path", {
    d: "M308.776,250.888h-55.79v-95.056c0-9.425-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v112.122 c0,9.425,7.641,17.067,17.067,17.067h72.856c9.425,0,17.067-7.641,17.067-17.067S318.201,250.888,308.776,250.888z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, "Duration"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, "2 days")))))))));
});

/***/ }),

/***/ "./src/pages/adventures/section/Adventures.js":
/*!****************************************************!*\
  !*** ./src/pages/adventures/section/Adventures.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/section/Adventures.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "w-full flex justify-center bg-gray-150",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 h-full text-5xl text-gray-750 leading-none flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Airbnb Adventures")), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 px-4 text-gray-750 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("path", {
    d: "M511.423,460.198l-13.801-33.123c-0.01-0.025-0.021-0.051-0.032-0.076L387.174,161.998 c-1.164-2.795-3.896-4.615-6.923-4.615h-36.488c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.488l104.194,250.069 h-232.25L143.001,172.383h170.793c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H139.251v-34.702h83.617 c4.142,0,7.5-3.358,7.5-7.5V57.199c0-4.142-3.358-7.5-7.5-7.5h-83.617v-0.783c0-4.142-3.358-7.5-7.5-7.5 c-4.142,0-7.5,3.358-7.5,7.5v8.283v57.982v48.202L37.665,371.192L2.094,408.186c-2.832,2.944-2.786,7.613,0.103,10.502 l11.067,11.067L0.579,460.198c-0.964,2.315-0.708,4.958,0.683,7.045c1.391,2.086,3.733,3.34,6.24,3.34h49.693 c0.027,0,0.054,0,0.081,0h149.002c0.009,0,0.018,0.002,0.026,0.002c0.013,0,0.027-0.002,0.04-0.002h49.632 c0.009,0,0.018,0.002,0.027,0.002c0.013,0,0.027-0.002,0.04-0.002H504.5c2.508,0,4.85-1.253,6.24-3.34 C512.132,465.156,512.388,462.513,511.423,460.198z M139.251,64.699h76.117v42.982h-76.117V64.699z M18.753,455.583l5.982-14.359 l14.36,14.359H18.753z M54.587,449.86l-27.096-27.094c-0.016-0.017-0.033-0.033-0.049-0.049l-9.437-9.436l91.453-95.112 L54.587,449.86z M68.453,455.583l63.3-151.92l63.299,151.92H68.453z M211.302,455.583l-72.627-174.305 c-0.002-0.004-0.004-0.007-0.005-0.011c-0.131-0.312-0.287-0.615-0.462-0.91c-0.035-0.059-0.071-0.116-0.107-0.174 c-0.156-0.249-0.327-0.492-0.516-0.725c-0.027-0.034-0.051-0.07-0.079-0.103c-0.173-0.207-0.357-0.407-0.556-0.599 c-0.036-0.035-0.076-0.064-0.112-0.098c-0.062-0.057-0.127-0.111-0.192-0.166c-0.204-0.176-0.414-0.339-0.63-0.49 c-0.053-0.036-0.103-0.076-0.157-0.111c-0.277-0.182-0.561-0.343-0.854-0.484c-0.043-0.021-0.088-0.038-0.131-0.058 c-0.267-0.122-0.54-0.228-0.817-0.317c-0.058-0.019-0.116-0.04-0.174-0.057c-0.313-0.093-0.631-0.165-0.952-0.216 c-0.06-0.01-0.122-0.014-0.183-0.023c-0.29-0.039-0.581-0.06-0.873-0.065c-0.041-0.001-0.081-0.009-0.122-0.009 c-0.019,0-0.037,0.004-0.056,0.004c-0.326,0.002-0.651,0.028-0.974,0.073c-0.073,0.01-0.145,0.023-0.217,0.036 c-0.295,0.049-0.588,0.114-0.876,0.199c-0.031,0.009-0.064,0.016-0.095,0.025c-0.314,0.097-0.621,0.219-0.922,0.358 c-0.057,0.027-0.113,0.055-0.17,0.083c-0.268,0.132-0.529,0.278-0.783,0.443c-0.03,0.019-0.061,0.036-0.091,0.056 c-0.267,0.18-0.523,0.38-0.769,0.597c-0.061,0.054-0.118,0.111-0.177,0.167c-0.093,0.087-0.189,0.168-0.278,0.261L66.34,341.369 l57.911-138.986v28.767c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-28.767c24.117,57.88,72.312,173.551,96.019,230.447 c0.01,0.024,0.02,0.049,0.031,0.073c3.878,9.306,7.1,17.039,9.45,22.68H211.302z M261,455.583l-7.555-18.131h232.25l7.555,18.131 H261z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Meals and stays included"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Every adventure is fully planned, from activities to accommodations.")), __jsx("div", {
    className: "w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("path", {
    d: "M511.423,460.198l-13.801-33.123c-0.01-0.025-0.021-0.051-0.032-0.076L387.174,161.998 c-1.164-2.795-3.896-4.615-6.923-4.615h-36.488c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.488l104.194,250.069 h-232.25L143.001,172.383h170.793c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H139.251v-34.702h83.617 c4.142,0,7.5-3.358,7.5-7.5V57.199c0-4.142-3.358-7.5-7.5-7.5h-83.617v-0.783c0-4.142-3.358-7.5-7.5-7.5 c-4.142,0-7.5,3.358-7.5,7.5v8.283v57.982v48.202L37.665,371.192L2.094,408.186c-2.832,2.944-2.786,7.613,0.103,10.502 l11.067,11.067L0.579,460.198c-0.964,2.315-0.708,4.958,0.683,7.045c1.391,2.086,3.733,3.34,6.24,3.34h49.693 c0.027,0,0.054,0,0.081,0h149.002c0.009,0,0.018,0.002,0.026,0.002c0.013,0,0.027-0.002,0.04-0.002h49.632 c0.009,0,0.018,0.002,0.027,0.002c0.013,0,0.027-0.002,0.04-0.002H504.5c2.508,0,4.85-1.253,6.24-3.34 C512.132,465.156,512.388,462.513,511.423,460.198z M139.251,64.699h76.117v42.982h-76.117V64.699z M18.753,455.583l5.982-14.359 l14.36,14.359H18.753z M54.587,449.86l-27.096-27.094c-0.016-0.017-0.033-0.033-0.049-0.049l-9.437-9.436l91.453-95.112 L54.587,449.86z M68.453,455.583l63.3-151.92l63.299,151.92H68.453z M211.302,455.583l-72.627-174.305 c-0.002-0.004-0.004-0.007-0.005-0.011c-0.131-0.312-0.287-0.615-0.462-0.91c-0.035-0.059-0.071-0.116-0.107-0.174 c-0.156-0.249-0.327-0.492-0.516-0.725c-0.027-0.034-0.051-0.07-0.079-0.103c-0.173-0.207-0.357-0.407-0.556-0.599 c-0.036-0.035-0.076-0.064-0.112-0.098c-0.062-0.057-0.127-0.111-0.192-0.166c-0.204-0.176-0.414-0.339-0.63-0.49 c-0.053-0.036-0.103-0.076-0.157-0.111c-0.277-0.182-0.561-0.343-0.854-0.484c-0.043-0.021-0.088-0.038-0.131-0.058 c-0.267-0.122-0.54-0.228-0.817-0.317c-0.058-0.019-0.116-0.04-0.174-0.057c-0.313-0.093-0.631-0.165-0.952-0.216 c-0.06-0.01-0.122-0.014-0.183-0.023c-0.29-0.039-0.581-0.06-0.873-0.065c-0.041-0.001-0.081-0.009-0.122-0.009 c-0.019,0-0.037,0.004-0.056,0.004c-0.326,0.002-0.651,0.028-0.974,0.073c-0.073,0.01-0.145,0.023-0.217,0.036 c-0.295,0.049-0.588,0.114-0.876,0.199c-0.031,0.009-0.064,0.016-0.095,0.025c-0.314,0.097-0.621,0.219-0.922,0.358 c-0.057,0.027-0.113,0.055-0.17,0.083c-0.268,0.132-0.529,0.278-0.783,0.443c-0.03,0.019-0.061,0.036-0.091,0.056 c-0.267,0.18-0.523,0.38-0.769,0.597c-0.061,0.054-0.118,0.111-0.177,0.167c-0.093,0.087-0.189,0.168-0.278,0.261L66.34,341.369 l57.911-138.986v28.767c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-28.767c24.117,57.88,72.312,173.551,96.019,230.447 c0.01,0.024,0.02,0.049,0.031,0.073c3.878,9.306,7.1,17.039,9.45,22.68H211.302z M261,455.583l-7.555-18.131h232.25l7.555,18.131 H261z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Meals and stays included"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Every adventure is fully planned, from activities to accommodations.")), __jsx("div", {
    className: "w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("path", {
    d: "M511.423,460.198l-13.801-33.123c-0.01-0.025-0.021-0.051-0.032-0.076L387.174,161.998 c-1.164-2.795-3.896-4.615-6.923-4.615h-36.488c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.488l104.194,250.069 h-232.25L143.001,172.383h170.793c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H139.251v-34.702h83.617 c4.142,0,7.5-3.358,7.5-7.5V57.199c0-4.142-3.358-7.5-7.5-7.5h-83.617v-0.783c0-4.142-3.358-7.5-7.5-7.5 c-4.142,0-7.5,3.358-7.5,7.5v8.283v57.982v48.202L37.665,371.192L2.094,408.186c-2.832,2.944-2.786,7.613,0.103,10.502 l11.067,11.067L0.579,460.198c-0.964,2.315-0.708,4.958,0.683,7.045c1.391,2.086,3.733,3.34,6.24,3.34h49.693 c0.027,0,0.054,0,0.081,0h149.002c0.009,0,0.018,0.002,0.026,0.002c0.013,0,0.027-0.002,0.04-0.002h49.632 c0.009,0,0.018,0.002,0.027,0.002c0.013,0,0.027-0.002,0.04-0.002H504.5c2.508,0,4.85-1.253,6.24-3.34 C512.132,465.156,512.388,462.513,511.423,460.198z M139.251,64.699h76.117v42.982h-76.117V64.699z M18.753,455.583l5.982-14.359 l14.36,14.359H18.753z M54.587,449.86l-27.096-27.094c-0.016-0.017-0.033-0.033-0.049-0.049l-9.437-9.436l91.453-95.112 L54.587,449.86z M68.453,455.583l63.3-151.92l63.299,151.92H68.453z M211.302,455.583l-72.627-174.305 c-0.002-0.004-0.004-0.007-0.005-0.011c-0.131-0.312-0.287-0.615-0.462-0.91c-0.035-0.059-0.071-0.116-0.107-0.174 c-0.156-0.249-0.327-0.492-0.516-0.725c-0.027-0.034-0.051-0.07-0.079-0.103c-0.173-0.207-0.357-0.407-0.556-0.599 c-0.036-0.035-0.076-0.064-0.112-0.098c-0.062-0.057-0.127-0.111-0.192-0.166c-0.204-0.176-0.414-0.339-0.63-0.49 c-0.053-0.036-0.103-0.076-0.157-0.111c-0.277-0.182-0.561-0.343-0.854-0.484c-0.043-0.021-0.088-0.038-0.131-0.058 c-0.267-0.122-0.54-0.228-0.817-0.317c-0.058-0.019-0.116-0.04-0.174-0.057c-0.313-0.093-0.631-0.165-0.952-0.216 c-0.06-0.01-0.122-0.014-0.183-0.023c-0.29-0.039-0.581-0.06-0.873-0.065c-0.041-0.001-0.081-0.009-0.122-0.009 c-0.019,0-0.037,0.004-0.056,0.004c-0.326,0.002-0.651,0.028-0.974,0.073c-0.073,0.01-0.145,0.023-0.217,0.036 c-0.295,0.049-0.588,0.114-0.876,0.199c-0.031,0.009-0.064,0.016-0.095,0.025c-0.314,0.097-0.621,0.219-0.922,0.358 c-0.057,0.027-0.113,0.055-0.17,0.083c-0.268,0.132-0.529,0.278-0.783,0.443c-0.03,0.019-0.061,0.036-0.091,0.056 c-0.267,0.18-0.523,0.38-0.769,0.597c-0.061,0.054-0.118,0.111-0.177,0.167c-0.093,0.087-0.189,0.168-0.278,0.261L66.34,341.369 l57.911-138.986v28.767c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-28.767c24.117,57.88,72.312,173.551,96.019,230.447 c0.01,0.024,0.02,0.049,0.031,0.073c3.878,9.306,7.1,17.039,9.45,22.68H211.302z M261,455.583l-7.555-18.131h232.25l7.555,18.131 H261z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, "Meals and stays included"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "Every adventure is fully planned, from activities to accommodations.")))));
});

/***/ }),

/***/ "./src/pages/adventures/section/Included.js":
/*!**************************************************!*\
  !*** ./src/pages/adventures/section/Included.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/section/Included.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 h-full text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "What's included"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 px-4 text-gray-750 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/3 pr-3 border border-gray-300 py-10 px-6 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#222222'
    },
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("path", {
    d: "M141.247,31.99C125.777,11.362,104.892,0.003,82.44,0.003c-22.451,0-43.335,11.36-58.806,31.986 C8.921,51.606,0.819,77.505,0.819,104.916c0,27.412,8.102,53.31,22.816,72.927c8.605,11.473,18.888,20.068,30.18,25.446 L36.546,462.948c-0.842,12.653,3.645,25.221,12.309,34.48c8.665,9.261,20.909,14.573,33.591,14.573 c12.679,0,24.917-5.309,33.579-14.565c8.664-9.26,13.151-21.83,12.307-34.486l-17.269-259.656 c11.294-5.379,21.578-13.974,30.184-25.449c14.712-19.617,22.816-45.517,22.816-72.927S155.961,51.607,141.247,31.99z M98.874,481.389c-4.3,4.596-10.135,7.127-16.429,7.127c-6.299,0-12.138-2.533-16.442-7.132c-4.302-4.6-6.442-10.592-6.025-16.875 l16.954-254.934c1.826,0.153,3.659,0.258,5.508,0.258c1.848,0,3.68-0.106,5.505-0.258l16.954,254.934 C105.316,470.795,103.178,476.79,98.874,481.389z M82.44,186.346c-4.207,0-8.308-0.645-12.264-1.839 c-0.328-0.121-0.66-0.232-1-0.324c-25.683-8.431-44.872-40.759-44.872-79.266c0-44.899,26.08-81.429,58.136-81.429 c32.057,0,58.138,36.529,58.138,81.429C140.578,149.817,114.498,186.346,82.44,186.346z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("path", {
    d: "M511.18,305.92V13.222l-0.099,0.043c0.339-2.587-0.174-5.303-1.653-7.696c-3.41-5.516-10.645-7.223-16.164-3.813 c-47.905,29.617-76.509,80.916-76.518,137.229c0,0.008-0.001,0.015-0.001,0.022v153.781c0,13.493,10.783,24.483,24.169,24.891 V476.7c0,19.373,15.761,35.134,35.134,35.134c19.373,0,35.135-15.761,35.135-35.134V305.979 C511.182,305.959,511.18,305.94,511.18,305.92z M441.675,294.235c-0.8-0.001-1.444-0.647-1.444-1.445V139.028 c0-0.005,0.001-0.009,0.001-0.014c0-40.621,17.413-78.189,47.462-104.139v259.36H441.675z M487.697,476.702 c0,6.423-5.225,11.649-11.65,11.649c-6.423,0-11.649-5.225-11.649-11.649V317.721h23.299V476.702z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("path", {
    d: "M332.799,0.003c-6.485,0-11.743,5.257-11.743,11.743v133.4h-29.92v-133.4c0-6.485-5.258-11.743-11.743-11.743 c-6.485,0-11.743,5.257-11.743,11.743v133.4h-29.92v-133.4c0-6.485-5.258-11.743-11.743-11.743s-11.743,5.257-11.743,11.743 v169.984c0,19.14,15.573,34.714,34.714,34.714h2.089l-16.475,247.65c-0.827,12.352,3.551,24.624,12.013,33.67 c8.463,9.049,20.42,14.238,32.807,14.238c12.385,0,24.342-5.189,32.806-14.237c8.461-9.045,12.839-21.318,12.013-33.666 l-16.476-247.655h2.093c19.142,0,34.715-15.573,34.715-34.714V11.745C344.541,5.26,339.283,0.003,332.799,0.003z M295.045,481.72 c-4.098,4.382-9.658,6.795-15.654,6.795s-11.556-2.413-15.654-6.795c-4.096-4.379-6.132-10.082-5.732-16.063l16.578-249.215h9.615 l16.579,249.218C301.177,471.638,299.142,477.341,295.045,481.72z M321.055,181.729c0.001,6.192-5.036,11.228-11.228,11.228 h-46.622c-0.015,0.001-0.031-0.001-0.046,0h-14.2c-6.192,0-11.228-5.036-11.228-11.228v-13.1h83.324V181.729z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Food"), __jsx("p", {
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "2 breakfasts, 2 dinners, 2 lunches, dessert")))));
});

/***/ }),

/***/ "./src/pages/adventures/section/WhatYouDo.js":
/*!***************************************************!*\
  !*** ./src/pages/adventures/section/WhatYouDo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/section/WhatYouDo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 h-full text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "What you'll do"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 px-4 text-gray-750 text-lg ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("p", {
    className: "mb-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Leave early from Marrakech and head to the Tinzert & Ouirgane for a 2 days Trek the village is Tucked in the mystical and peaceful foothills of the High Atlas Mountains, in the heart of the majestic Toubkal National Park lays the picturesque village of Ouirgane."), __jsx("p", {
    className: "mb-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Spectacular views of the Toubkal mountain range await all trekkers who take the time to discover this magical land. Be welcomed by the Berber locals and discover true Moroccan hospitality as you step into a world not your own. Perfect for individuals and families alike this trek will be sure to delight the senses and cultivate unforgettable moments and memories."), __jsx("p", {
    className: "mb-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "During the two days trek you will get the chance to learn howto cook certain dishes in addition to tea making ceremony"))));
});

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./src/pages/adventures/[id].js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/[id].js */"./src/pages/adventures/[id].js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map