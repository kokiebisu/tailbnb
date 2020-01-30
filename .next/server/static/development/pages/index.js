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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AdventureCard.js":
/*!*************************************!*\
  !*** ./components/AdventureCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/AdventureCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  location,
  title,
  price,
  days
}) => {
  return __jsx("div", {
    className: "lg:w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("img", {
    className: "rounded-lg",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }), __jsx("p", {
    className: "uppercase text-sm my-2 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, location), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, price, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " \xB7 "), days, " days"));
});

/***/ }),

/***/ "./components/Adventures.js":
/*!**********************************!*\
  !*** ./components/Adventures.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AdventureCard */ "./components/AdventureCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowAll */ "./components/ShowAll.js");
/* harmony import */ var _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/adventures1.jpg */ "./public/adventures1.jpg");
/* harmony import */ var _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/adventures2.jpg */ "./public/adventures2.jpg");
/* harmony import */ var _public_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/adventures3.jpg */ "./public/adventures3.jpg");
/* harmony import */ var _public_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/adventures4.jpg */ "./public/adventures4.jpg");
/* harmony import */ var _public_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Adventures.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component

 // Images





/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "xl:max-w-5.5xl lg:max-w-5xl md:max-w-3xl mx-auto mt-20 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-semibold py-1 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Introducing Airbnb Adventures"), __jsx("p", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Multi-day trips led by local experts\u2014activities, meals, and stays included"), __jsx("div", {
    className: "flex items-start justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: "Norway",
    title: "2 Nights PACKAGE All Inclusive",
    price: "From $841 / person",
    days: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Indonesia",
    title: "Snorkeling and hiking in West Sumatra",
    price: "From $249 / person",
    days: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Nepal",
    title: "Trek to the lower Everest region",
    price: "From $1,745 / person",
    days: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Morocco",
    title: "Active Adventure & Stay with Locals",
    price: "From $416 / person",
    days: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }))), __jsx(_components_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/Explore.js":
/*!*******************************!*\
  !*** ./components/Explore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/experience1.jpg */ "./public/experience1.jpg");
/* harmony import */ var _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_experience1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_experience2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/experience2.jpg */ "./public/experience2.jpg");
/* harmony import */ var _public_experience2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_experience2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_experience3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/experience3.jpg */ "./public/experience3.jpg");
/* harmony import */ var _public_experience3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_experience3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExploreCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExploreCard */ "./components/ExploreCard.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Explore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-semibold py-3 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Explore Airbnb"), __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_ExploreCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: _public_experience1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    title: "Stays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(_ExploreCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: _public_experience2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    title: "Experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(_ExploreCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: _public_experience3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: "Adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./components/ExploreCard.js":
/*!***********************************!*\
  !*** ./components/ExploreCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/ExploreCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  title
}) => {
  return __jsx("div", {
    className: "lg:w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "mr-4 flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("img", {
    src: img,
    className: "rounded-xl rounded-r-none",
    style: {
      height: 80,
      width: 'auto'
    },
    alt: "explore1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("p", {
    class: "pl-4 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, title)));
});

/***/ }),

/***/ "./components/Featured.js":
/*!********************************!*\
  !*** ./components/Featured.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FeaturedCard */ "./components/FeaturedCard.js");
/* harmony import */ var _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/stay-1.jpg */ "./public/stay-1.jpg");
/* harmony import */ var _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Featured.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "xl:max-w-5.5xl lg:max-w-4xl mx-auto mt-14 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-semibold py-3 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Featured Airbnb Plus destinations"), __jsx("p", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Browse beautiful places to stay with all the comforts of home, plus more"), __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    verified: "940",
    description: "Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    verified: "940",
    description: "Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    verified: "940",
    description: "Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))));
});

/***/ }),

/***/ "./components/FeaturedCard.js":
/*!************************************!*\
  !*** ./components/FeaturedCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/FeaturedCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  verified,
  description
}) => {
  return __jsx("div", {
    className: "lg:w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("img", {
    className: "rounded-xl",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("p", {
    className: "uppercase text-xs my-2 font-bold text-pink-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, verified, "+ Verified Stays")), __jsx("p", {
    className: "my-1 text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, description));
});

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "xl:max-w-4xl mx-auto mt-14 mb-5 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-wrap items-center w-full justify-around pb-6 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Careers")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Careers")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-905 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Careers")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-sm mb-2 text-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Careers"))))), __jsx("div", {
    className: "flex flex-wrap items-center justify-start py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    class: "h-5 w-5 block",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), __jsx("p", {
    className: "pl-4 text-sm  text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "\xA9 2020 Airbnb, Inc. All rights reserved."), __jsx("div", {
    className: "flex flex-wrap justify-start items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, "\xA0 Terms", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, " \xB7 ")), __jsx("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "\xA0 Privacy ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, " \xB7 ")), __jsx("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "\xA0 Site Map"))));
});

/***/ }),

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
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "m-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    class: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("nav", {
    class: "flex items-center justify-around flex-wrap text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "flex self-center flex-wrap justify-between text-sm font-semibold px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "English(CA)")), __jsx("a", {
    href: "#",
    className: "block text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "$CAD"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Host a home"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Host an experience"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Help"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Sign up"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold pl-2 pr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Log in")))), __jsx("div", {
    class: "lg:w-100 pt-8 pb-6 lg:ml-41 lg:mt-10 bg-white rounded shadow-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    class: "mx-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("h3", {
    class: "text-3xl font-bold color__header leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Book unique places to ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), "stay and things to do."), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase tracking-wider",
    htmlFor: "where",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Where"), __jsx("input", {
    className: "w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide",
    type: "text",
    id: "where",
    placeholder: "Anywhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex flex-wrap items-stretch justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("div", {
    class: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase",
    htmlFor: "checkin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Check-In"), __jsx("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkin",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), __jsx("div", {
    class: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Check-Out"), __jsx("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkout",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }))), __jsx("div", {
    class: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("label", {
    class: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Guests"), __jsx("div", {
    class: "inline-block relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("select", {
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    id: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "2 Guests"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "3 Guests"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "4 Guests")), __jsx("div", {
    class: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("svg", {
    class: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  })))))), __jsx("div", {
    class: "inline flex items-center justify-end flex-wrap mt-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx("button", {
    class: "py-3 px-6 rounded bg-red-500 text-white font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Search")))));
});

/***/ }),

/***/ "./components/Location.js":
/*!********************************!*\
  !*** ./components/Location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Location.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  location,
  price
}) => {
  return __jsx("div", {
    className: "py-3 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, location), __jsx("p", {
    className: "font-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "$", price, "/night average"));
});

/***/ }),

/***/ "./components/Plus.js":
/*!****************************!*\
  !*** ./components/Plus.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/plus-1.jpg */ "./public/plus-1.jpg");
/* harmony import */ var _public_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlusCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlusCard */ "./components/PlusCard.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Plus.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    class: "xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-`20`",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-semibold py-1 mt-5 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Airbnb Plus places to stay"), __jsx("p", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "A selection of places to stay verified for quality and design."), __jsx(_PlusCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/PlusCard.js":
/*!********************************!*\
  !*** ./components/PlusCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/PlusCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  return __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full h-64 bg-cover bg-no-repeat object-cover rounded",
    src: img,
    alt: "plus1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/Popular.js":
/*!*******************************!*\
  !*** ./components/Popular.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Location */ "./components/Location.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Popular.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-semibold py-3 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Popular destinations in the United States"), __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-full my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx("div", {
    className: "lg:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))));
});

/***/ }),

/***/ "./components/ShowAll.js":
/*!*******************************!*\
  !*** ./components/ShowAll.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/ShowAll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  title
}) => {
  return __jsx("div", {
    className: "mt-4 flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "font-semibold border-b border-gray-800 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, title), __jsx("div", {
    className: "pl-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "14px",
    height: "14px",
    viewBox: "0 0 451.846 451.847",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("path", {
    d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })))));
});

/***/ }),

/***/ "./components/Stay.js":
/*!****************************!*\
  !*** ./components/Stay.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StayCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StayCard */ "./components/StayCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowAll */ "./components/ShowAll.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Stay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-semibold py-3 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Places to stay around the world"), __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/4 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "$91 CAD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }))), __jsx(_components_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show(2000+)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/StayCard.js":
/*!********************************!*\
  !*** ./components/StayCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/stay-1.jpg */ "./public/stay-1.jpg");
/* harmony import */ var _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/StayCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  location,
  title,
  price
}) => {
  return __jsx("div", {
    className: "lg:w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("img", {
    className: "rounded",
    src: _public_stay_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-sm my-2 font-light text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, location), __jsx("div", {
    className: "flex items-center justify-center flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }))), __jsx("p", {
    className: "pl-1 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "4.71"))), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, title), __jsx("p", {
    className: "tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, price), "/night"));
});

/***/ }),

/***/ "./components/TopRated.js":
/*!********************************!*\
  !*** ./components/TopRated.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopRatedCard */ "./components/TopRatedCard.js");
/* harmony import */ var _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/adventures1.jpg */ "./public/adventures1.jpg");
/* harmony import */ var _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowAll */ "./components/ShowAll.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/TopRated.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "xl:max-w-5.5xl lg:max-w-5.5xl mx-auto mt-14 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl font-semibold py-3 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Top-rated experiences"), __jsx("p", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Book activities led by local hosts on your next trip."), __jsx("div", {
    className: "flex items-start justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    location: "Italy",
    title: "Luca & Lorenzo, cooking in Chianti hills",
    price: "172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    location: "Italy",
    title: "Luca & Lorenzo, cooking in Chianti hills",
    price: "172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    location: "Italy",
    title: "Luca & Lorenzo, cooking in Chianti hills",
    price: "172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx("div", {
    className: "xl:w-1/4 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_adventures1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    location: "Italy",
    title: "Luca & Lorenzo, cooking in Chianti hills",
    price: "172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/TopRatedCard.js":
/*!************************************!*\
  !*** ./components/TopRatedCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/TopRatedCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  location,
  title,
  price
}) => {
  return __jsx("div", {
    className: "lg:w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("img", {
    className: "rounded-lg",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }), __jsx("p", {
    className: "uppercase text-sm my-2 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, location), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "From $", price, "/person"));
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
/* harmony import */ var _components_Explore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Explore */ "./components/Explore.js");
/* harmony import */ var _components_Plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Plus */ "./components/Plus.js");
/* harmony import */ var _components_Adventures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Adventures */ "./components/Adventures.js");
/* harmony import */ var _components_Stay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Stay */ "./components/Stay.js");
/* harmony import */ var _components_TopRated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TopRated */ "./components/TopRated.js");
/* harmony import */ var _components_Popular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Popular */ "./components/Popular.js");
/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Featured */ "./components/Featured.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component










const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_components_Explore__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_components_Plus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_components_Adventures__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_components_Stay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_components_TopRated__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_components_Popular__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_components_Featured__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/adventures1.jpg":
/*!********************************!*\
  !*** ./public/adventures1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures1-343f375cd9b8106bf5de823ef99250f5.jpg";

/***/ }),

/***/ "./public/adventures2.jpg":
/*!********************************!*\
  !*** ./public/adventures2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures2-2a827a3a1490e8d2bbe436b6ded7fdf8.jpg";

/***/ }),

/***/ "./public/adventures3.jpg":
/*!********************************!*\
  !*** ./public/adventures3.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures3-c5ab2d45bffa9243b5883b338b663e45.jpg";

/***/ }),

/***/ "./public/adventures4.jpg":
/*!********************************!*\
  !*** ./public/adventures4.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures4-44b3b2a74fc7a68f832134a126bb87d8.jpg";

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

/***/ "./public/experience2.jpg":
/*!********************************!*\
  !*** ./public/experience2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience2-8a2f3a420060a72787ed29f47b3c8aca.jpg";

/***/ }),

/***/ "./public/experience3.jpg":
/*!********************************!*\
  !*** ./public/experience3.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience3-4c10e45ca175365d3f15ce8c46dcea59.jpg";

/***/ }),

/***/ "./public/plus-1.jpg":
/*!***************************!*\
  !*** ./public/plus-1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/plus-1-71fd9b4fcf869f4b123411c87ec0e43f.jpg";

/***/ }),

/***/ "./public/stay-1.jpg":
/*!***************************!*\
  !*** ./public/stay-1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-1-e0d49a7b4cdebe66f79997bdb4b1e6e9.jpg";

/***/ }),

/***/ 4:
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