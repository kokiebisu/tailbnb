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

/***/ "./src/components/adventures/containers/Adventures.tsx":
/*!*************************************************************!*\
  !*** ./src/components/adventures/containers/Adventures.tsx ***!
  \*************************************************************/
/*! exports provided: Adventures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventures", function() { return Adventures; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_AdventureCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/AdventureCard */ "./src/components/adventures/functions/AdventureCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Adventures.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Function


const Adventures = () => {
  return __jsx("div", {
    className: "w-full flex justify-center bg-gray-150",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-4 md:px-16 max-w-6xl xl:px-0 w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl md:flex justify-start items-start flex-wrap md:py-16 lg:py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "py-12 md:py-0 md:flex justify-center items-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "pb-8 md:w-4/12 w-full md:pt-0 border-b border-gray-300 md:border-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "md:w-4/12 h-full flex md:items-start lg:items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-3xl lg:text-5xl text-gray-750 leading-tight ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Airbnb Adventures"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 text-gray-750 lg:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_functions_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["AdventureCard"], {
    position: "first",
    icon: "camp",
    title: "Meals and stays included",
    description: "Every adventure is fully planned, from activities to accommodations.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_functions_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["AdventureCard"], {
    position: "middle",
    icon: "map",
    title: "Led by locals",
    description: "Adventures are hosted by local insiders who immerse you in their culture.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_functions_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["AdventureCard"], {
    position: "last",
    icon: "campcar",
    title: "One-of-a-kind access",
    description: "Explore places and communities you can\\'t easily access on your own.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))))));
};

/***/ }),

/***/ "./src/components/adventures/containers/Availability.tsx":
/*!***************************************************************!*\
  !*** ./src/components/adventures/containers/Availability.tsx ***!
  \***************************************************************/
/*! exports provided: Availability */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Availability", function() { return Availability; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_AvailabilityCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/AvailabilityCard */ "./src/components/adventures/functions/AvailabilityCard.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Availability.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Functions


const Availability = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl w-full md:text-3xl text-gray-750 mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Availability"), __jsx("div", {
    className: "w-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_functions_AvailabilityCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("div", {
    className: "mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_functions_AvailabilityCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })))))), __jsx("button", {
    className: "border-2 border-green-850 rounded mt-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "py-2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Show more availability")))));
};

/***/ }),

/***/ "./src/components/adventures/containers/Banner.tsx":
/*!*********************************************************!*\
  !*** ./src/components/adventures/containers/Banner.tsx ***!
  \*********************************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_BannerCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/BannerCard */ "./src/components/adventures/functions/BannerCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Banner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Function

 // Image

const Banner = () => {
  return __jsx("div", {
    className: "w-full bg-black h-80v flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-16 w-full xl:px-0 max-w-6xl pt-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-2/7 border-r-4 border-white relative bg-cover bg-center overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full",
    src: "https://a0.muscache.com/im/pictures/a5845dc3-6d54-4864-a383-4dffbc16c20e.jpg?aki_policy=exp_md",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-2/7 border-r-4 border-white relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full object-cover",
    src: "https://a0.muscache.com/im/pictures/2cde86ed-9fa5-4776-952a-c83e0afda996.jpg?aki_policy=exp_md",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx("div", {
    className: "border-white w-1/7 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full bg-blue-500 h-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full object-cover",
    src: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1317456-media_library/original/45cba600-ef28-4667-823e-453c31944b45.jpeg?aki_policy=exp_md",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full bg-blue-300 h-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full object-cover",
    src: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1317456-media_library/original/5d0cbc89-ed65-4063-9ec2-83eb7690bbd7.jpeg?aki_policy=exp_md",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))), __jsx("div", {
    className: "rounded border-l-4 border-white w-2/7 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full object-cover",
    src: "https://a0.muscache.com/im/pictures/4177e9be-7c5e-4c05-9b79-f4afd144a389.jpg?aki_policy=exp_md",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))), __jsx("div", {
    className: "bg-blue-500 w-full lg:max-w-6xl flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: "bg-red-500 w-full md:w-1/2 lg:w-4/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "items-end justify-start pt-6 text-xs uppercase text-white mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "2-Day Adventure"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-2/3 text-3xl text-white leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Atlas Mountains Experience"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full text-white ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Marrakech, Morocco"), __jsx("div", {
    className: "flex justify-start text-white my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "5.0"), __jsx("div", {
    className: "h-3 w-3 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
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
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "(1)")), __jsx("div", {
    className: "flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Hiking"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-950 text-white uppercase rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Trekking"))), __jsx("div", {
    className: "w-1/2 md:1/2 lg:w-8/12 h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-9/12 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-white text-lg py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Trek & Cook with the berbers"))), __jsx("div", {
    className: "bg-red-200 w-full lg:w-1/2  lg:w-8/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full flex justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx(_functions_BannerCard__WEBPACK_IMPORTED_MODULE_1__["BannerCard"], {
    type: "Duration",
    value: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }), __jsx(_functions_BannerCard__WEBPACK_IMPORTED_MODULE_1__["BannerCard"], {
    type: "Group size",
    value: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_functions_BannerCard__WEBPACK_IMPORTED_MODULE_1__["BannerCard"], {
    type: "Activity level",
    value: "moderate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), __jsx(_functions_BannerCard__WEBPACK_IMPORTED_MODULE_1__["BannerCard"], {
    type: "Hosted in",
    value: "English",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })))))));
};

/***/ }),

/***/ "./src/components/adventures/containers/Host.tsx":
/*!*******************************************************!*\
  !*** ./src/components/adventures/containers/Host.tsx ***!
  \*******************************************************/
/*! exports provided: Host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Host", function() { return Host; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Host.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Images

const detail2 = __webpack_require__(/*! ../../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

const Host = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-8 md:py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl w-full md:w-4/12 md:h-full md:text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Your host"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 md:px-4 text-gray-750 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-10 h-32 w-32 md:mb-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full h-full rounded-full",
    src: detail2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })), __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Mohamed"), __jsx("p", {
    className: "mb-7 leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Im an official Mountain guide born and raised in the atlas mountains i worked as a guide and trek planner for more tgan 17 Years i like meeting new people and make new friends in adfition to sharing my culture"), __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "border-2 border-green-850 rounded text-green-850 text-base py-2 px-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Contact host"))));
};

/***/ }),

/***/ "./src/components/adventures/containers/Included.tsx":
/*!***********************************************************!*\
  !*** ./src/components/adventures/containers/Included.tsx ***!
  \***********************************************************/
/*! exports provided: Included */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Included", function() { return Included; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_IncludedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/IncludedCard */ "./src/components/adventures/functions/IncludedCard.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Included.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Function


const Included = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-8 md:py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 md:h-full text-2xl md:text-3xl text-gray-750 pb-8 md:pb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "What's included"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 md:px-4 text-gray-750 flex overflow-x-hidden overflow-y-hidden md:overflow-x-visible md:overflow-y-vidi ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-104 w-full md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_functions_IncludedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_functions_IncludedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })))))))));
};

/***/ }),

/***/ "./src/components/adventures/containers/Itinerary.tsx":
/*!************************************************************!*\
  !*** ./src/components/adventures/containers/Itinerary.tsx ***!
  \************************************************************/
/*! exports provided: Itinerary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Itinerary", function() { return Itinerary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_ItineraryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/ItineraryCard */ "./src/components/adventures/functions/ItineraryCard.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Itinerary.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Functions

 // // Images
// const detail2 = require('../../../../public/img/high/staydetail2.jpg');

const Itinerary = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-4 md:px-16 w-full max-w-6xl flex justify-start items-start flex-wrap py-8 md:py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "mb-16 text-2xl w-full md:w-4/12 md:h-full md:text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Your itinerary"), __jsx("div", {
    className: "w-full md:w-8/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_functions_ItineraryCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    is_last: "false",
    day: 1,
    title: "Meeting at 6pm",
    description: "Pick up is at 6pm (18:00) from the main entrance of Clarion Hotel The Edge.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_functions_ItineraryCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    is_last: "true",
    day: 2,
    title: "Hiking (summer), Snowshoeing (winter)",
    description: "After the breakfast, we will do hiking in surrounding nature",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/components/adventures/containers/KeepExploring.tsx":
/*!****************************************************************!*\
  !*** ./src/components/adventures/containers/KeepExploring.tsx ***!
  \****************************************************************/
/*! exports provided: KeepExploring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepExploring", function() { return KeepExploring; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_ExploringCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/ExploringCard */ "./src/components/adventures/functions/ExploringCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/KeepExploring.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Function


const KeepExploring = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full text-3xl text-gray-750 mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Keep exploring in Marrakech"), __jsx("div", {
    className: "w-full flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_functions_ExploringCard__WEBPACK_IMPORTED_MODULE_1__["ExploringCard"], {
    title: "Nature and outdoors",
    experienceNumber: 193,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_functions_ExploringCard__WEBPACK_IMPORTED_MODULE_1__["ExploringCard"], {
    title: "Sports",
    experienceNumber: 188,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_functions_ExploringCard__WEBPACK_IMPORTED_MODULE_1__["ExploringCard"], {
    title: "Art and culture",
    experienceNumber: 144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_functions_ExploringCard__WEBPACK_IMPORTED_MODULE_1__["ExploringCard"], {
    title: "Food and drink",
    experienceNumber: 106,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_functions_ExploringCard__WEBPACK_IMPORTED_MODULE_1__["ExploringCard"], {
    title: "Cooking",
    experienceNumber: 37,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_functions_ExploringCard__WEBPACK_IMPORTED_MODULE_1__["ExploringCard"], {
    title: "Entertainment",
    experienceNumber: 15,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx("div", {
    className: "bg-white shadow-sm rounded mr-4 border border-gray-300 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-6 py-7 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Show all experiences")))));
};

/***/ }),

/***/ "./src/components/adventures/containers/KeepInMind.tsx":
/*!*************************************************************!*\
  !*** ./src/components/adventures/containers/KeepInMind.tsx ***!
  \*************************************************************/
/*! exports provided: KeepInMind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepInMind", function() { return KeepInMind; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_KeepInMindCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/KeepInMindCard */ "./src/components/adventures/functions/KeepInMindCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/KeepInMind.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Function


const KeepInMind = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 h-full text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Things to keep in mind"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 px-4 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_functions_KeepInMindCard__WEBPACK_IMPORTED_MODULE_1__["KeepInMindCard"], {
    order: "top",
    title: "Cancellation policy",
    description: "Any experience can be cancelled and fully refunded within 24 hours of purchase.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_functions_KeepInMindCard__WEBPACK_IMPORTED_MODULE_1__["KeepInMindCard"], {
    title: "Communication policy",
    description: "Always communicate through Airbnb. To protect your payment, never transfer money or communicate outside of the Airbnb website or app.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_functions_KeepInMindCard__WEBPACK_IMPORTED_MODULE_1__["KeepInMindCard"], {
    order: "bottom",
    title: "Guest requirements",
    description: "Up to 6 guests ages 18 and up can attend. Parents may also bring children under 2 years of age. The activity level for this adventure is moderate.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/components/adventures/containers/Reviews.tsx":
/*!**********************************************************!*\
  !*** ./src/components/adventures/containers/Reviews.tsx ***!
  \**********************************************************/
/*! exports provided: Reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/ReviewCard */ "./src/components/adventures/functions/ReviewCard.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Reviews.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Functions


const Reviews = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 md:h-full ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-2xl md:text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Guest reviews"), __jsx("div", {
    className: "flex mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-lg text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "5.0"), __jsx("div", {
    className: "flex justify-start items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full ml-2",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full ml-2",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full ml-2",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full ml-2",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full ml-2",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))))), __jsx("div", {
    className: "md:w-8/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/components/adventures/containers/Safety.tsx":
/*!*********************************************************!*\
  !*** ./src/components/adventures/containers/Safety.tsx ***!
  \*********************************************************/
/*! exports provided: Safety */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Safety", function() { return Safety; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Safety.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const Safety = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-7xl  py-12 bg-gray-350 rounded-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl mx-auto flex justify-start items-start flex-wrap h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 h-full ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-start items-center h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-12 w-12 mr-3 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full",
    src: "https://a0.muscache.com/pictures/4b4fb657-aff9-40cd-884a-e3785fa1ef91.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("p", {
    className: "text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Guest safety"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 px-4 text-gray-750 text-lg ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("p", {
    className: "mb-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Every adventure follows industry guidelines. We partnered with the Adventure Travel Trade Association, expert leaders in adventure travel, to define best practices and standards for safety."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Please note outdoor activities carry risks, and you may be exposed to dangerous situations as part of this experience. Make sure you can participate safely given your abilities and the conditions (such as location, weather, and equipment).")))));
};

/***/ }),

/***/ "./src/components/adventures/containers/WhatYouDo.tsx":
/*!************************************************************!*\
  !*** ./src/components/adventures/containers/WhatYouDo.tsx ***!
  \************************************************************/
/*! exports provided: WhatYouDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatYouDo", function() { return WhatYouDo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/WhatYouDo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const WhatYouDo = () => {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-4 md:px-16 w-full max-w-6xl xl:px-0 md:flex justify-start items-start flex-wrap py-8 md:py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "md:w-4/12 md:h-full ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("p", {
    className: "w-2/3 text-xl mb-12 md:mb-0 md:text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "What you'll do")), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 text-gray-750 text-lg ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("p", {
    className: "mb-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Leave early from Marrakech and head to the Tinzert & Ouirgane for a 2 days Trek the village is Tucked in the mystical and peaceful foothills of the High Atlas Mountains, in the heart of the majestic Toubkal National Park lays the picturesque village of Ouirgane."), __jsx("p", {
    className: "mb-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Spectacular views of the Toubkal mountain range await all trekkers who take the time to discover this magical land. Be welcomed by the Berber locals and discover true Moroccan hospitality as you step into a world not your own. Perfect for individuals and families alike this trek will be sure to delight the senses and cultivate unforgettable moments and memories."), __jsx("p", {
    className: "mb-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "During the two days trek you will get the chance to learn howto cook certain dishes in addition to tea making ceremony"))));
};

/***/ }),

/***/ "./src/components/adventures/functions/AdventureCard.tsx":
/*!***************************************************************!*\
  !*** ./src/components/adventures/functions/AdventureCard.tsx ***!
  \***************************************************************/
/*! exports provided: AdventureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureCard", function() { return AdventureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/AdventureCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const renderIcon = icon => {
  switch (icon) {
    case 'camp':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#484848'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512.001 512.001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      }, __jsx("path", {
        d: "M511.423,460.198l-13.801-33.123c-0.01-0.025-0.021-0.051-0.032-0.076L387.174,161.998 c-1.164-2.795-3.896-4.615-6.923-4.615h-36.488c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.488l104.194,250.069 h-232.25L143.001,172.383h170.793c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H139.251v-34.702h83.617 c4.142,0,7.5-3.358,7.5-7.5V57.199c0-4.142-3.358-7.5-7.5-7.5h-83.617v-0.783c0-4.142-3.358-7.5-7.5-7.5 c-4.142,0-7.5,3.358-7.5,7.5v8.283v57.982v48.202L37.665,371.192L2.094,408.186c-2.832,2.944-2.786,7.613,0.103,10.502 l11.067,11.067L0.579,460.198c-0.964,2.315-0.708,4.958,0.683,7.045c1.391,2.086,3.733,3.34,6.24,3.34h49.693 c0.027,0,0.054,0,0.081,0h149.002c0.009,0,0.018,0.002,0.026,0.002c0.013,0,0.027-0.002,0.04-0.002h49.632 c0.009,0,0.018,0.002,0.027,0.002c0.013,0,0.027-0.002,0.04-0.002H504.5c2.508,0,4.85-1.253,6.24-3.34 C512.132,465.156,512.388,462.513,511.423,460.198z M139.251,64.699h76.117v42.982h-76.117V64.699z M18.753,455.583l5.982-14.359 l14.36,14.359H18.753z M54.587,449.86l-27.096-27.094c-0.016-0.017-0.033-0.033-0.049-0.049l-9.437-9.436l91.453-95.112 L54.587,449.86z M68.453,455.583l63.3-151.92l63.299,151.92H68.453z M211.302,455.583l-72.627-174.305 c-0.002-0.004-0.004-0.007-0.005-0.011c-0.131-0.312-0.287-0.615-0.462-0.91c-0.035-0.059-0.071-0.116-0.107-0.174 c-0.156-0.249-0.327-0.492-0.516-0.725c-0.027-0.034-0.051-0.07-0.079-0.103c-0.173-0.207-0.357-0.407-0.556-0.599 c-0.036-0.035-0.076-0.064-0.112-0.098c-0.062-0.057-0.127-0.111-0.192-0.166c-0.204-0.176-0.414-0.339-0.63-0.49 c-0.053-0.036-0.103-0.076-0.157-0.111c-0.277-0.182-0.561-0.343-0.854-0.484c-0.043-0.021-0.088-0.038-0.131-0.058 c-0.267-0.122-0.54-0.228-0.817-0.317c-0.058-0.019-0.116-0.04-0.174-0.057c-0.313-0.093-0.631-0.165-0.952-0.216 c-0.06-0.01-0.122-0.014-0.183-0.023c-0.29-0.039-0.581-0.06-0.873-0.065c-0.041-0.001-0.081-0.009-0.122-0.009 c-0.019,0-0.037,0.004-0.056,0.004c-0.326,0.002-0.651,0.028-0.974,0.073c-0.073,0.01-0.145,0.023-0.217,0.036 c-0.295,0.049-0.588,0.114-0.876,0.199c-0.031,0.009-0.064,0.016-0.095,0.025c-0.314,0.097-0.621,0.219-0.922,0.358 c-0.057,0.027-0.113,0.055-0.17,0.083c-0.268,0.132-0.529,0.278-0.783,0.443c-0.03,0.019-0.061,0.036-0.091,0.056 c-0.267,0.18-0.523,0.38-0.769,0.597c-0.061,0.054-0.118,0.111-0.177,0.167c-0.093,0.087-0.189,0.168-0.278,0.261L66.34,341.369 l57.911-138.986v28.767c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-28.767c24.117,57.88,72.312,173.551,96.019,230.447 c0.01,0.024,0.02,0.049,0.031,0.073c3.878,9.306,7.1,17.039,9.45,22.68H211.302z M261,455.583l-7.555-18.131h232.25l7.555,18.131 H261z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      })))));

    case 'map':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#484848'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 54 54",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: undefined
      }, __jsx("path", {
        d: "M53.516,1.143c-0.3-0.182-0.674-0.19-0.983-0.027L36,9.869L19.468,1.116c-0.013-0.007-0.028-0.009-0.041-0.015 c-0.048-0.023-0.097-0.04-0.147-0.055c-0.028-0.008-0.055-0.017-0.083-0.023c-0.055-0.011-0.111-0.015-0.168-0.017 c-0.025-0.001-0.05-0.004-0.076-0.003c-0.054,0.003-0.107,0.013-0.16,0.025c-0.03,0.006-0.06,0.01-0.089,0.019 c-0.007,0.002-0.014,0.002-0.02,0.004l-18,6C0.275,7.187,0,7.569,0,8v43c0,0.321,0.154,0.623,0.416,0.812 C0.588,51.935,0.793,52,1,52c0.106,0,0.213-0.017,0.316-0.052l17.646-5.882l16.657,6.859c0.014,0.006,0.03,0.004,0.044,0.009 C35.773,52.973,35.885,53,36,53c0.09,0,0.179-0.015,0.266-0.039c0.028-0.008,0.054-0.021,0.082-0.031 c0.04-0.015,0.082-0.026,0.12-0.046l17-9C53.795,43.711,54,43.37,54,43V2C54,1.649,53.816,1.324,53.516,1.143z M2,8.721l16-5.333 v26.992c-0.43,0.078-0.854,0.166-1.264,0.274c-0.534,0.142-0.852,0.689-0.71,1.223c0.119,0.448,0.523,0.744,0.966,0.744 c0.084,0,0.171-0.011,0.257-0.033c0.24-0.064,0.502-0.096,0.751-0.148v11.84L2,49.612V8.721z M20,32.16 c0.321-0.025,0.632-0.066,0.961-0.073c0.552-0.012,0.99-0.469,0.979-1.021c-0.012-0.545-0.457-0.979-1-0.979 c-0.007,0-0.015,0-0.022,0c-0.31,0.007-0.615,0.024-0.918,0.045V3.661l15,7.941v21.194c-0.714-0.031-1.44-0.115-2.201-0.262 c-0.544-0.107-1.067,0.249-1.172,0.791s0.25,1.067,0.792,1.172c0.886,0.172,1.746,0.256,2.582,0.289v15.721L20,44.33V32.16z M52,42.397l-15,7.941v-15.66c0.372-0.169,0.62-0.549,0.587-0.98c-0.029-0.374-0.269-0.674-0.587-0.821V11.602l15-7.941V42.397z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }), __jsx("path", {
        d: "M11,9c-2.757,0-5,2.243-5,5c0,2.415,1.721,4.434,4,4.899V21c0,0.553,0.448,1,1,1s1-0.447,1-1v-2.101 c2.279-0.465,4-2.484,4-4.899C16,11.243,13.757,9,11,9z M11,17c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S12.654,17,11,17z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: undefined
      }), __jsx("path", {
        d: "M45.07,27.673c0.12,0.047,0.243,0.068,0.364,0.068c0.4,0,0.777-0.241,0.932-0.636c0.47-1.199,0.847-2.553,1.123-4.024 c0.102-0.542-0.256-1.064-0.799-1.167c-0.546-0.09-1.065,0.257-1.167,0.8c-0.252,1.348-0.595,2.58-1.019,3.663 C44.303,26.89,44.556,27.471,45.07,27.673z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: undefined
      }), __jsx("path", {
        d: "M12.805,32.342c-1.207,0.757-2.295,1.705-3.235,2.82c-0.356,0.422-0.302,1.053,0.12,1.409 c0.188,0.158,0.417,0.235,0.644,0.235c0.285,0,0.567-0.121,0.765-0.355c0.806-0.956,1.737-1.769,2.768-2.414 c0.468-0.294,0.609-0.911,0.316-1.379C13.89,32.19,13.272,32.048,12.805,32.342z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: undefined
      }), __jsx("path", {
        d: "M8.627,38.276c-0.502-0.23-1.096-0.013-1.327,0.489c-1.026,2.226-1.28,4.023-1.291,4.099 c-0.075,0.547,0.307,1.05,0.854,1.125c0.046,0.007,0.093,0.01,0.138,0.01c0.491,0,0.919-0.362,0.99-0.861 c0.002-0.016,0.231-1.597,1.125-3.534C9.347,39.101,9.128,38.508,8.627,38.276z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: undefined
      }), __jsx("path", {
        d: "M40.423,33.729c0.153,0,0.309-0.035,0.454-0.109c1.292-0.661,2.431-1.599,3.384-2.786c0.346-0.431,0.277-1.061-0.154-1.406 c-0.43-0.343-1.06-0.276-1.406,0.154c-0.776,0.967-1.696,1.726-2.735,2.257c-0.492,0.252-0.687,0.854-0.435,1.346 C39.709,33.53,40.06,33.729,40.423,33.729z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: undefined
      }), __jsx("path", {
        d: "M29.17,31.432c-0.441-0.185-0.699-0.313-0.716-0.322c-0.065-0.033-0.134-0.06-0.205-0.078 c-1.083-0.278-2.15-0.498-3.173-0.654c-0.545-0.086-1.056,0.291-1.14,0.837c-0.083,0.546,0.292,1.057,0.838,1.14 c0.926,0.142,1.893,0.34,2.877,0.59c0.134,0.064,0.39,0.185,0.748,0.334c0.126,0.053,0.257,0.077,0.385,0.077 c0.391,0,0.763-0.23,0.923-0.614C29.92,32.23,29.68,31.644,29.17,31.432z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: undefined
      }), __jsx("path", {
        d: "M46.923,19.931c0.022,0.001,0.043,0.002,0.065,0.002c0.523,0,0.963-0.406,0.997-0.937c0.062-0.961,0.093-1.978,0.093-3.02 c0-0.347-0.003-0.699-0.01-1.058c-0.01-0.553-0.49-0.973-1.018-0.982c-0.552,0.01-0.992,0.466-0.982,1.018 c0.006,0.347,0.01,0.688,0.01,1.022c0,1-0.03,1.973-0.089,2.893C45.954,19.42,46.372,19.895,46.923,19.931z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: undefined
      }), __jsx("path", {
        d: "M8.293,28.707C8.488,28.902,8.744,29,9,29s0.512-0.098,0.707-0.293L11,27.414l1.293,1.293C12.488,28.902,12.744,29,13,29 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L12.414,26l1.293-1.293c0.391-0.391,0.391-1.023,0-1.414 s-1.023-0.391-1.414,0L11,24.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L9.586,26l-1.293,1.293 C7.902,27.683,7.902,28.316,8.293,28.707z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: undefined
      }))));

    case 'campcar':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#484848'
        },
        viewBox: "0 0 64 64",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: undefined
      }, __jsx("path", {
        d: "m1 61v2h62v-2h-16-30z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: undefined
      }), __jsx("path", {
        d: "m54.931 54h7.069c.553 0 1-.447 1-1v-13c0-.12-.021-.239-.063-.352l-4.54-12.105c-1.019-2.718-3.653-4.543-6.555-4.543h-2.842v-2h2v-2h-2.111c1.301-1.272 2.111-3.042 2.111-5 0-3.859-3.141-7-7-7s-7 3.141-7 7c0 1.958.81 3.728 2.111 5h-2.295c.112-.314.184-.648.184-1v-4-2c0-1.654-1.346-3-3-3h-6c-.771 0-1.468.301-2 .78-.532-.479-1.229-.78-2-.78h-1.184c.112-.314.184-.648.184-1v-4c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3v4c0 .395.081.77.22 1.116-1.275.345-2.22 1.501-2.22 2.884v6c0 .352.072.686.184 1h-2.184v2h2v2h-1c-3.859 0-7 3.141-7 7v23c0 .553.447 1 1 1h7.069c.495 3.94 3.859 7 7.931 7s7.436-3.06 7.931-7h14.139c.495 3.94 3.859 7 7.931 7s7.435-3.06 7.93-7zm4.069-2v-8h2v8zm-20-38c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm-11-3h6c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-6c0-.552.448-1 1-1zm-15-7c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1zm-2 14v-6c0-.552.448-1 1-1h2 6 4c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1h-12c-.552 0-1-.448-1-1zm0 3h1 12 4 6 13v2h-36zm-3 4h43.842c2.073 0 3.954 1.304 4.682 3.245l4.476 11.937v1.818h-3c-.553 0-1 .447-1 1v9h-2.069c-.495-3.94-3.859-7-7.931-7-3.04 0-5.689 1.705-7.042 4.209.015-.07.042-.135.042-.209v-21c0-.553-.447-1-1-1h-18c-.553 0-1 .447-1 1v13h-11v2h11v2.589c-.927-.377-1.939-.589-3-.589-4.072 0-7.436 3.06-7.931 7h-2.069v-10c0-.553-.447-1-1-1h-3v-11c0-2.757 2.243-5 5-5zm30 12h-7v-8h7zm-9 0h-7v-8h7zm-7 2h16v9h-14.765c-.366-.455-.78-.869-1.235-1.235zm2.411 11h14.589c.299 0 .56-.138.743-.346-.338.73-.569 1.517-.673 2.346h-14.139c-.088-.698-.264-1.369-.52-2zm-21.411-7h2v9h-2zm14 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm30 0c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: undefined
      }), __jsx("path", {
        d: "m47 49c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: undefined
      }), __jsx("path", {
        d: "m17 49c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: undefined
      }), __jsx("path", {
        d: "m43 39h13c.316 0 .613-.149.803-.403.188-.253.246-.581.155-.884l-2.572-8.574c-.384-1.28-1.539-2.139-2.874-2.139h-8.512c-.553 0-1 .447-1 1v10c0 .553.447 1 1 1zm1-10h7.512c.445 0 .83.286.958.713l2.186 7.287h-10.656z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: undefined
      }), __jsx("path", {
        d: "m42 41h4v2h-4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: undefined
      }), __jsx("path", {
        d: "m8 39h9c.553 0 1-.447 1-1v-10c0-.553-.447-1-1-1h-9c-.553 0-1 .447-1 1v10c0 .553.447 1 1 1zm1-10h7v8h-7z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: undefined
      }), __jsx("path", {
        d: "m22 13h-9v2h8v2h2v-3c0-.553-.447-1-1-1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: undefined
      }), __jsx("path", {
        d: "m44 11c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: undefined
      })));
  }
};

const AdventureCard = ({
  position,
  icon,
  title,
  description
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, position === 'first' ? __jsx("div", {
    className: "pt-4 md:pt-0 md:pb-4 w-full flex lg:block lg:w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8 lg:mb-3 mb-10 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, renderIcon(icon)), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden lg:block my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, title), __jsx("p", {
    className: "text-sm md:text-base mt-1 md:-mt-1 lg:ml-0 lg:mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, description)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, position === 'last' ? __jsx("div", {
    className: "pt-4 md:pt-0 md:pb-4 w-full flex lg:block lg:w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8 lg:mb-3 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, renderIcon(icon)), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden lg:block my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, title), __jsx("p", {
    className: "text-sm md:text-base mt-1 md:-mt-1 lg:ml-0 lg:mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, description)) : __jsx("div", {
    className: "pt-4 md:pt-0 md:pb-4 w-full flex lg:block lg:w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8 lg:mb-3 mb-10 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, renderIcon(icon)), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden lg:block my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, title), __jsx("p", {
    className: "text-sm md:text-base mt-1 md:-mt-1 lg:ml-0 lg:mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, description))));
};

/***/ }),

/***/ "./src/components/adventures/functions/AvailabilityCard.js":
/*!*****************************************************************!*\
  !*** ./src/components/adventures/functions/AvailabilityCard.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/AvailabilityCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "w-70v md:w-40v lg:w-72 flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full border border-gray-300 bg-white shadow-md rounded-xl mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "m-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-2xl py-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Mar 03"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Tuesday"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-2/3 text-gray-750 whitespace-normal py-1 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "From $130/person"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-lg whitespace-normal ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Join 3 other guests"), __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-green-850 mt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Book"))));
});

/***/ }),

/***/ "./src/components/adventures/functions/BannerCard.tsx":
/*!************************************************************!*\
  !*** ./src/components/adventures/functions/BannerCard.tsx ***!
  \************************************************************/
/*! exports provided: BannerCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerCard", function() { return BannerCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/BannerCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const renderIcon = type => {
  switch (type) {
    case 'Duration':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#ffffff'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      }, __jsx("path", {
        d: "M256,0C114.509,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256\nC512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133\nS477.867,133.663,477.867,256S378.337,477.867,256,477.867z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      }))), __jsx("g", {
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
        d: "M308.776,250.888h-55.79v-95.056c0-9.425-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v112.122\nc0,9.425,7.641,17.067,17.067,17.067h72.856c9.425,0,17.067-7.641,17.067-17.067S318.201,250.888,308.776,250.888z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: undefined
      })))));

    case 'Group size':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#ffffff'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512.009 512.009",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: undefined
      }, __jsx("circle", {
        cx: "255.999",
        cy: "64.005",
        r: "64",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: undefined
      }))), __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }, __jsx("path", {
        d: "M351.871,301.957l-14.528-113.152c-1.632-16.416-15.328-28.8-31.808-28.8h-17.536c-4.256,0-8.32,1.696-11.328,4.672 l-20.672,20.672l-20.672-20.672c-3.008-2.976-7.072-4.672-11.328-4.672h-17.504c-16.512,0-30.208,12.384-31.808,28.384 l-14.56,113.6c-0.576,4.544,0.832,9.152,3.872,12.576c3.04,3.456,7.392,5.44,12,5.44h17.28l13.376,163.2 c1.6,16.384,15.328,28.8,31.84,28.8h35.04c16.512,0,30.208-12.416,31.872-29.088l13.344-162.912h17.248 c4.608,0,8.96-1.984,12-5.44C351.071,311.141,352.479,306.533,351.871,301.957z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      }))), __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: undefined
      }, __jsx("circle", {
        cx: "415.999",
        cy: "64.005",
        r: "64",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: undefined
      }))), __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: undefined
      }, __jsx("path", {
        d: "M95.999,0.005c-35.296,0-64,28.704-64,64s28.704,64,64,64c35.264,0,64-28.704,64-64S131.263,0.005,95.999,0.005z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: undefined
      }))), __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: undefined
      }, __jsx("path", {
        d: "M511.871,301.957l-14.528-113.12c-1.632-16.448-15.296-28.832-31.808-28.832h-17.536c-4.256,0-8.32,1.696-11.328,4.672 l-20.672,20.672l-20.672-20.672c-3.008-2.976-7.072-4.672-11.296-4.672h-17.536c-1.984,0-3.776,0.704-5.664,1.056 c4.128,7.296,7.36,15.2,8.32,24.064l14.496,112.768c1.792,13.728-2.496,27.552-11.712,37.952 c-4.352,4.992-9.92,8.512-15.872,11.264l10.624,104.096c1.632,16.416,15.328,28.8,31.84,28.8h35.04 c16.512,0,30.208-12.416,31.872-29.088l13.312-130.912h17.248c4.608,0,8.96-1.984,12-5.44 C511.071,311.141,512.479,306.533,511.871,301.957z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: undefined
      }))), __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: undefined
      }, __jsx("path", {
        d: "M139.967,335.685c-9.088-10.272-13.312-24.064-11.584-37.728l14.56-113.632c0.832-8.512,3.968-16.192,7.968-23.296 c-1.792-0.32-3.488-1.024-5.376-1.024h-17.536c-4.256,0-8.32,1.696-11.328,4.672l-20.672,20.672l-20.672-20.672 c-3.008-2.976-7.072-4.672-11.296-4.672H46.494c-16.512,0-30.208,12.384-31.808,28.384l-14.56,113.6 c-0.576,4.544,0.832,9.152,3.872,12.576c3.04,3.456,7.424,5.44,12,5.44h17.28l13.376,131.2c1.6,16.384,15.328,28.8,31.84,28.8 h35.04c16.512,0,30.208-12.416,31.872-29.088l10.624-103.84C150.047,344.293,144.447,340.741,139.967,335.685z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: undefined
      })))));

    case 'Activity level':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#ffffff'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: undefined
      }, __jsx("g", {
        id: "Ferriswheel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: undefined
      }, __jsx("g", {
        id: "Glyph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: undefined
      }, __jsx("path", {
        d: "M430.013,189.549A175.326,175.326,0,0,0,391.665,104H424a8,8,0,0,0,8-8V80a32,32,0,0,0-64,0v.335a175.41,175.41,0,0,0-80-37.411V32a32,32,0,0,0-64,0V42.924a175.41,175.41,0,0,0-80,37.411V80a32,32,0,0,0-64,0V96a8,8,0,0,0,8,8h32.335a175.326,175.326,0,0,0-38.348,85.549C61.036,175.256,32,190.166,32,216v16a8,8,0,0,0,8,8H81.643a175.081,175.081,0,0,0,32.524,80.082A32.018,32.018,0,0,0,80,352v16a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8c0-6.933.007-14.87-.009-16.342a176.193,176.193,0,0,0,46.248,27.586L167.456,440H160a8,8,0,0,0,0,16h1.456l-15,40H120a8,8,0,0,0,0,16H392a8,8,0,0,0,0-16H365.544l-15-40H352a8,8,0,0,0,0-16h-7.456l-22.783-60.756a176.193,176.193,0,0,0,46.248-27.586C367.994,353.051,368,362.877,368,368a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V352a32.018,32.018,0,0,0-34.167-31.918A175.081,175.081,0,0,0,430.357,240H472a8,8,0,0,0,8-8V216C480,190.217,451.017,175.22,430.013,189.549Zm-93.955,92.76A103.519,103.519,0,0,0,359.7,224H415.8a159.327,159.327,0,0,1-39.437,97.3Zm-99.685,19.482,17.2-45.871a36.882,36.882,0,0,0,4.852,0l17.2,45.871A88.279,88.279,0,0,1,236.373,301.791Zm44.915,15.094,19.745,52.653a160.093,160.093,0,0,1-90.066,0l19.745-52.653A104.19,104.19,0,0,0,281.288,316.885ZM135.637,321.3A159.327,159.327,0,0,1,96.2,224h56.105a103.519,103.519,0,0,0,23.637,58.309ZM359.7,208a103.519,103.519,0,0,0-23.637-58.309L376.363,110.7A159.327,159.327,0,0,1,415.8,208Zm-64.5,0a39.736,39.736,0,0,0-5.48-13.482l34.805-33.667A87.578,87.578,0,0,1,343.633,208Zm-126.828,0a87.578,87.578,0,0,1,19.113-47.149l34.805,33.667A39.736,39.736,0,0,0,216.805,208Zm110.227-24.985A39.794,39.794,0,0,0,264,176.805V128.367a87.642,87.642,0,0,1,49.4,20.983ZM248,176.805a39.794,39.794,0,0,0-14.594,6.21L198.6,149.35A87.642,87.642,0,0,1,248,128.367ZM232,216a24,24,0,1,1,24,24A24.028,24.028,0,0,1,232,216Zm92.929-77.8A103.584,103.584,0,0,0,264,112.305V56.2A159.418,159.418,0,0,1,365.235,99.208ZM248,56.2v56.105A103.584,103.584,0,0,0,187.071,138.2L146.765,99.208A159.418,159.418,0,0,1,248,56.2ZM135.637,110.7l40.305,38.987A103.519,103.519,0,0,0,152.305,208H96.2A159.327,159.327,0,0,1,135.637,110.7ZM168.367,224h48.438a39.736,39.736,0,0,0,5.48,13.482L187.48,271.149A87.578,87.578,0,0,1,168.367,224Zm65.039,24.985a40.217,40.217,0,0,0,4.65,2.748l-16.9,45.067A88.175,88.175,0,0,1,198.6,282.65Zm40.538,2.748a40.217,40.217,0,0,0,4.65-2.748l34.8,33.665a88.175,88.175,0,0,1-22.554,14.15Zm15.771-14.251A39.736,39.736,0,0,0,295.2,224h48.438a87.578,87.578,0,0,1-19.113,47.149Zm-142.95,95.31L187.071,293.8a104.236,104.236,0,0,0,28.459,18l-19.671,52.455A160.376,160.376,0,0,1,146.765,332.792ZM348.456,496H163.544l15-40H333.456Zm-21-56H184.544l20.792-55.444a176.1,176.1,0,0,0,101.328,0ZM296.47,311.8a104.236,104.236,0,0,0,28.459-18l40.306,38.988a160.376,160.376,0,0,1-49.094,31.465Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: undefined
      })))));

    case 'Hosted in':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#ffffff'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 473 473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: undefined
      }, __jsx("path", {
        d: "M403.581,69.3c-44.7-44.7-104-69.3-167.2-69.3s-122.5,24.6-167.2,69.3c-86.4,86.4-92.4,224.7-14.9,318 c-7.6,15.3-19.8,33.1-37.9,42c-8.7,4.3-13.6,13.6-12.1,23.2s8.9,17.1,18.5,18.6c4.5,0.7,10.9,1.4,18.7,1.4 c20.9,0,51.7-4.9,83.2-27.6c35.1,18.9,73.5,28.1,111.6,28.1c61.2,0,121.8-23.7,167.4-69.3c44.7-44.7,69.3-104,69.3-167.2 S448.281,114,403.581,69.3z M384.481,384.6c-67.5,67.5-172,80.9-254.2,32.6c-5.4-3.2-12.1-2.2-16.4,2.1c-0.4,0.2-0.8,0.5-1.1,0.8 c-27.1,21-53.7,25.4-71.3,25.4h-0.1c20.3-14.8,33.1-36.8,40.6-53.9c1.2-2.9,1.4-5.9,0.7-8.7c-0.3-2.7-1.4-5.4-3.3-7.6 c-73.2-82.7-69.4-208.7,8.8-286.9c81.7-81.7,214.6-81.7,296.2,0C466.181,170.1,466.181,302.9,384.481,384.6z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: undefined
      }), __jsx("circle", {
        cx: "236.381",
        cy: "236.5",
        r: "16.6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: undefined
      }), __jsx("circle", {
        cx: "321.981",
        cy: "236.5",
        r: "16.6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: undefined
      }), __jsx("circle", {
        cx: "150.781",
        cy: "236.5",
        r: "16.6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: undefined
      })))));
  }
};

const renderDescription = (type, value) => {
  switch (type) {
    case 'Duration':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: undefined
      }, value, " days"));

    case 'Group size':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: undefined
      }, "Up to ", value, " people"));

    case 'Activity level':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: undefined
      }, value));

    case 'Hosted in':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: undefined
      }, value));
  }
};

const BannerCard = ({
  type,
  value
}) => {
  return __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, renderIcon(type)), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, type), renderDescription(type, value));
};

/***/ }),

/***/ "./src/components/adventures/functions/ExploringCard.tsx":
/*!***************************************************************!*\
  !*** ./src/components/adventures/functions/ExploringCard.tsx ***!
  \***************************************************************/
/*! exports provided: ExploringCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploringCard", function() { return ExploringCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/ExploringCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const ExploringCard = ({
  title,
  experienceNumber
}) => {
  return __jsx("div", {
    className: "bg-white shadow-sm rounded mr-4 border border-gray-300 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "px-5 py-5 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, title), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-xs text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, experienceNumber, " experiences")));
};

/***/ }),

/***/ "./src/components/adventures/functions/IncludedCard.js":
/*!*************************************************************!*\
  !*** ./src/components/adventures/functions/IncludedCard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/IncludedCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    className: "w-56 h-56 p-8 border border-gray-300 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-8 w-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
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
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("path", {
    d: "M141.247,31.99C125.777,11.362,104.892,0.003,82.44,0.003c-22.451,0-43.335,11.36-58.806,31.986 C8.921,51.606,0.819,77.505,0.819,104.916c0,27.412,8.102,53.31,22.816,72.927c8.605,11.473,18.888,20.068,30.18,25.446 L36.546,462.948c-0.842,12.653,3.645,25.221,12.309,34.48c8.665,9.261,20.909,14.573,33.591,14.573 c12.679,0,24.917-5.309,33.579-14.565c8.664-9.26,13.151-21.83,12.307-34.486l-17.269-259.656 c11.294-5.379,21.578-13.974,30.184-25.449c14.712-19.617,22.816-45.517,22.816-72.927S155.961,51.607,141.247,31.99z M98.874,481.389c-4.3,4.596-10.135,7.127-16.429,7.127c-6.299,0-12.138-2.533-16.442-7.132c-4.302-4.6-6.442-10.592-6.025-16.875 l16.954-254.934c1.826,0.153,3.659,0.258,5.508,0.258c1.848,0,3.68-0.106,5.505-0.258l16.954,254.934 C105.316,470.795,103.178,476.79,98.874,481.389z M82.44,186.346c-4.207,0-8.308-0.645-12.264-1.839 c-0.328-0.121-0.66-0.232-1-0.324c-25.683-8.431-44.872-40.759-44.872-79.266c0-44.899,26.08-81.429,58.136-81.429 c32.057,0,58.138,36.529,58.138,81.429C140.578,149.817,114.498,186.346,82.44,186.346z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("path", {
    d: "M511.18,305.92V13.222l-0.099,0.043c0.339-2.587-0.174-5.303-1.653-7.696c-3.41-5.516-10.645-7.223-16.164-3.813 c-47.905,29.617-76.509,80.916-76.518,137.229c0,0.008-0.001,0.015-0.001,0.022v153.781c0,13.493,10.783,24.483,24.169,24.891 V476.7c0,19.373,15.761,35.134,35.134,35.134c19.373,0,35.135-15.761,35.135-35.134V305.979 C511.182,305.959,511.18,305.94,511.18,305.92z M441.675,294.235c-0.8-0.001-1.444-0.647-1.444-1.445V139.028 c0-0.005,0.001-0.009,0.001-0.014c0-40.621,17.413-78.189,47.462-104.139v259.36H441.675z M487.697,476.702 c0,6.423-5.225,11.649-11.65,11.649c-6.423,0-11.649-5.225-11.649-11.649V317.721h23.299V476.702z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("path", {
    d: "M332.799,0.003c-6.485,0-11.743,5.257-11.743,11.743v133.4h-29.92v-133.4c0-6.485-5.258-11.743-11.743-11.743 c-6.485,0-11.743,5.257-11.743,11.743v133.4h-29.92v-133.4c0-6.485-5.258-11.743-11.743-11.743s-11.743,5.257-11.743,11.743 v169.984c0,19.14,15.573,34.714,34.714,34.714h2.089l-16.475,247.65c-0.827,12.352,3.551,24.624,12.013,33.67 c8.463,9.049,20.42,14.238,32.807,14.238c12.385,0,24.342-5.189,32.806-14.237c8.461-9.045,12.839-21.318,12.013-33.666 l-16.476-247.655h2.093c19.142,0,34.715-15.573,34.715-34.714V11.745C344.541,5.26,339.283,0.003,332.799,0.003z M295.045,481.72 c-4.098,4.382-9.658,6.795-15.654,6.795s-11.556-2.413-15.654-6.795c-4.096-4.379-6.132-10.082-5.732-16.063l16.578-249.215h9.615 l16.579,249.218C301.177,471.638,299.142,477.341,295.045,481.72z M321.055,181.729c0.001,6.192-5.036,11.228-11.228,11.228 h-46.622c-0.015,0.001-0.031-0.001-0.046,0h-14.2c-6.192,0-11.228-5.036-11.228-11.228v-13.1h83.324V181.729z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "w-full my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Food")), __jsx("div", {
    className: "w-5/6 whitespace-normal text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "2 breakfasts, 2 dinners, 1 lunch, snacks, dessert")));
});

/***/ }),

/***/ "./src/components/adventures/functions/ItineraryCard.js":
/*!**************************************************************!*\
  !*** ./src/components/adventures/functions/ItineraryCard.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/ItineraryCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Images

const detail2 = __webpack_require__(/*! ../../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

/* harmony default export */ __webpack_exports__["default"] = (({
  is_last,
  day,
  title,
  description
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, is_last === 'true' ? __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "px-5 text-gray-750 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      height: 7,
      width: 7,
      top: -7,
      left: -3.4
    },
    className: "absolute z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))))), __jsx("p", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Day ", day), __jsx("div", {
    className: "w-full md:flex justify-start items-start pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "md:w-5/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full",
    src: detail2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full md:w-7/12 md:pl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "pt-3 pb-2 md:pt-0 md:pb-0 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, title), __jsx("p", {
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, description), __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-green-850 text-sm mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Show more"))))) : __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "px-5 text-gray-750 border-l border-gray-800 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }))))), __jsx("p", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Day ", day), __jsx("div", {
    className: "w-full md:flex justify-start items-start pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("div", {
    className: "md:w-5/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full",
    src: detail2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full md:w-7/12 md:pl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "pt-3 pb-2 md:pt-0 md:pb-0 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, title), __jsx("p", {
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, description), __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-green-850 text-sm mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Show more"))))));
});
{
  /* <div
        style={{ height: 7, width: 7, bottom: -7, left: -3.6 }}
        className='absolute z-100'>
        <svg
          className='h-full w-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'>
          <g>
            <g>
              <path
                d='M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z
  	 M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z'
              />
            </g>
          </g>
        </svg>
      </div> */
}

/***/ }),

/***/ "./src/components/adventures/functions/KeepInMindCard.tsx":
/*!****************************************************************!*\
  !*** ./src/components/adventures/functions/KeepInMindCard.tsx ***!
  \****************************************************************/
/*! exports provided: KeepInMindCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepInMindCard", function() { return KeepInMindCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/KeepInMindCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const KeepInMindCard = ({
  title,
  description,
  order
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, order === 'top' ? __jsx("div", {
    className: "w-full flex pb-4 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, title)), __jsx("div", {
    className: "w-2/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, description), __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850 text-sm my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Learn more"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, order === 'bottom' ? __jsx("div", {
    className: "w-full flex pb-4 pt-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, title)), __jsx("div", {
    className: "w-2/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, description), __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850 text-sm my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Learn more"))) : __jsx("div", {
    className: "w-full flex pb-4 pt-6 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, title)), __jsx("div", {
    className: "w-2/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, description), __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850 text-sm my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Learn more")))));
};

/***/ }),

/***/ "./src/components/adventures/functions/ReviewCard.js":
/*!***********************************************************!*\
  !*** ./src/components/adventures/functions/ReviewCard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/ReviewCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';

const detail2 = __webpack_require__(/*! ../../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pt-12 pb-4 md:pt-0 md:pb-0 w-full text-gray-750 border-b border-gray-300 md:border-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full h-full rounded-full",
    src: detail2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("div", {
    className: "ml-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "pb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Marja \xB7", ' ', __jsx("span", {
    style: {
      fontFamily: 'airbnb-book'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "February 2020")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-4 w-4 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    style: {
      fill: '#008489',
      marginTop: 1
    },
    viewBox: "0 0 511.99143 511",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("path", {
    d: "m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })))))), __jsx("p", {
    className: "mb-7 leading-relaxed text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Great trekking! I definitely recommend doing a trekking with Mohamed, we spent 2 wonderful days in the mountains. Great hiking, delicious food and a very personal approach. Thank you Mohamed, we will come back for another trekking with you next year\u2026", __jsx("button", {
    className: "text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "+ More")));
});

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

/***/ "./src/pages/adventures/[id].tsx":
/*!***************************************!*\
  !*** ./src/pages/adventures/[id].tsx ***!
  \***************************************/
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
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_adventures_containers_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/adventures/containers/Banner */ "./src/components/adventures/containers/Banner.tsx");
/* harmony import */ var _components_adventures_containers_WhatYouDo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/adventures/containers/WhatYouDo */ "./src/components/adventures/containers/WhatYouDo.tsx");
/* harmony import */ var _components_adventures_containers_Adventures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/adventures/containers/Adventures */ "./src/components/adventures/containers/Adventures.tsx");
/* harmony import */ var _components_adventures_containers_Included__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/adventures/containers/Included */ "./src/components/adventures/containers/Included.tsx");
/* harmony import */ var _components_adventures_containers_Itinerary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/adventures/containers/Itinerary */ "./src/components/adventures/containers/Itinerary.tsx");
/* harmony import */ var _components_adventures_containers_Host__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/adventures/containers/Host */ "./src/components/adventures/containers/Host.tsx");
/* harmony import */ var _components_adventures_containers_Availability__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/adventures/containers/Availability */ "./src/components/adventures/containers/Availability.tsx");
/* harmony import */ var _components_adventures_containers_Reviews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/adventures/containers/Reviews */ "./src/components/adventures/containers/Reviews.tsx");
/* harmony import */ var _components_adventures_containers_Safety__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/adventures/containers/Safety */ "./src/components/adventures/containers/Safety.tsx");
/* harmony import */ var _components_adventures_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/adventures/containers/KeepInMind */ "./src/components/adventures/containers/KeepInMind.tsx");
/* harmony import */ var _components_adventures_containers_KeepExploring__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/adventures/containers/KeepExploring */ "./src/components/adventures/containers/KeepExploring.tsx");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



 // GraphQL

 // Section











 // Layout


 // Next
// import { NextPage } from 'next';

const GET_ADVENTURE = apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
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
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_ADVENTURE, {
    variables: {
      id: router.query.id
    }
  });
  if (error) return `error: ${error}`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, console.log(data), loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Vacation Rentals, Homes, Experiences & Places") : data.adventure && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, data.adventure.title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), data && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_16__["ExploreHeader"], {
    type: "stay",
    mode: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Banner__WEBPACK_IMPORTED_MODULE_5__["Banner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_WhatYouDo__WEBPACK_IMPORTED_MODULE_6__["WhatYouDo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Adventures__WEBPACK_IMPORTED_MODULE_7__["Adventures"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Included__WEBPACK_IMPORTED_MODULE_8__["Included"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Itinerary__WEBPACK_IMPORTED_MODULE_9__["Itinerary"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Host__WEBPACK_IMPORTED_MODULE_10__["Host"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Availability__WEBPACK_IMPORTED_MODULE_11__["Availability"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Reviews__WEBPACK_IMPORTED_MODULE_12__["Reviews"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_Safety__WEBPACK_IMPORTED_MODULE_13__["Safety"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_14__["KeepInMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx(_components_adventures_containers_KeepExploring__WEBPACK_IMPORTED_MODULE_15__["KeepExploring"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_17__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./src/pages/adventures/[id].tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/[id].tsx */"./src/pages/adventures/[id].tsx");


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

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map