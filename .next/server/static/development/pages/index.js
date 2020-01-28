module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/airbnb-background.jpg */ "./public/airbnb-background.jpg");
/* harmony import */ var _public_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Images

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("header", {
    style: {
      backgroundImage: `url(${_public_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a})`
    },
    className: "relative bg-cover bg-no-repeat h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    class: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    class: "m-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("span", {
    class: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    class: "h-8 w-8 block",
    style: {
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("nav", {
    class: "flex items-center justify-around flex-wrap text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "flex self-center flex-wrap justify-between text-sm font-semibold px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: '#ffffff',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "English(CA)")), __jsx("a", {
    href: "#",
    className: "block text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "$CAD"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Host a home"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Host an experience"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Help"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Sign up"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold pl-2 pr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Log in")))), __jsx("div", {
    class: "lg:w-100 pt-8 pb-6 lg:ml-41 lg:mt-10 bg-white rounded shadow-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    class: "mx-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("h3", {
    class: "text-3xl font-bold color__header leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Book unique places to ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), "stay and things to do."), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase tracking-wider",
    htmlFor: "where",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Where"), __jsx("input", {
    className: "w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide",
    type: "text",
    id: "where",
    placeholder: "Anywhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex flex-wrap items-stretch justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("div", {
    class: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase",
    htmlFor: "checkin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Check-In"), __jsx("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkin",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })), __jsx("div", {
    class: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Check-Out"), __jsx("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkout",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }))), __jsx("div", {
    class: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("label", {
    class: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Guests"), __jsx("div", {
    class: "inline-block relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("select", {
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    id: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "2 Guests"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "3 Guests"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "4 Guests")), __jsx("div", {
    class: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("svg", {
    class: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })))))), __jsx("div", {
    class: "inline flex items-center justify-end flex-wrap mt-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("button", {
    class: "py-3 px-6 rounded bg-red-500 text-white font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "Search")))));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/experience1.jpg */ "./public/experience1.jpg");
/* harmony import */ var _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_experience1_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component



const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    className: "max-w-layout mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-medium py-3 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Explore Airbnb"), __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-start lg:w-1/3 bg-white rounded-xl shadow-2xl border border-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "rounded-xl rounded-r-none",
    style: {
      height: 80,
      width: 'auto'
    },
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("p", {
    class: "pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Stays")), __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-1/3 bg-white rounded-xl ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "rounded-xl rounded-r-none",
    style: {
      height: 80,
      width: 'auto'
    },
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("p", {
    class: "pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Stays")), __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-1/3 bg-white rounded-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "rounded-xl rounded-r-none",
    style: {
      height: 80,
      width: 'auto'
    },
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("p", {
    class: "pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Stays")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/airbnb-background.jpg":
/*!**************************************!*\
  !*** ./public/airbnb-background.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airbnb-background-ff7fd2c8a6a66a3156d61546d7cd4936.jpg";

/***/ }),

/***/ "./public/experience1.jpg":
/*!********************************!*\
  !*** ./public/experience1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience1-6ce0026a63ceec8c2d4d261cebb49830.jpg";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/airbnb2020/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map