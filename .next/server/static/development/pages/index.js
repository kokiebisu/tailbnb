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

/***/ "./public/img/adventures1.jpg":
/*!************************************!*\
  !*** ./public/img/adventures1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures1-f8b881cae95db6a9cc8ea0201371ec1e.jpg";

/***/ }),

/***/ "./public/img/adventures2.jpg":
/*!************************************!*\
  !*** ./public/img/adventures2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures2-ecd4a5c217d4def4dfaaf791cbb2bf6f.jpg";

/***/ }),

/***/ "./public/img/adventures3.jpg":
/*!************************************!*\
  !*** ./public/img/adventures3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures3-e326d9f75287af3b96412fd401821b0b.jpg";

/***/ }),

/***/ "./public/img/adventures4.jpg":
/*!************************************!*\
  !*** ./public/img/adventures4.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adventures4-03e1457aef94fda88a3b50320e8c2ce7.jpg";

/***/ }),

/***/ "./public/img/airbnb-background.jpg":
/*!******************************************!*\
  !*** ./public/img/airbnb-background.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airbnb-background-b8b3c94eb622e8a6083c338facb6c4fd.jpg";

/***/ }),

/***/ "./public/img/experience-1.jpg":
/*!*************************************!*\
  !*** ./public/img/experience-1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-1-5c87bedd294d225752199819a2c32457.jpg";

/***/ }),

/***/ "./public/img/experience-2.jpg":
/*!*************************************!*\
  !*** ./public/img/experience-2.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-2-5a461adf3cb7e26b9d690832497294f3.jpg";

/***/ }),

/***/ "./public/img/experience-3.jpg":
/*!*************************************!*\
  !*** ./public/img/experience-3.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-3-1093d4c35b3421c65a6429ef0b53569c.jpg";

/***/ }),

/***/ "./public/img/experience-4.jpg":
/*!*************************************!*\
  !*** ./public/img/experience-4.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-4-77e96d4ef8fe9a4350d65503482f00b8.jpg";

/***/ }),

/***/ "./public/img/explore-1.jpg":
/*!**********************************!*\
  !*** ./public/img/explore-1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/explore-1-78555eb8ecfa2b77afa64d6104f73a07.jpg";

/***/ }),

/***/ "./public/img/explore-2.jpg":
/*!**********************************!*\
  !*** ./public/img/explore-2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/explore-2-ea1d6be446ac091888bb2fdc6b7c809b.jpg";

/***/ }),

/***/ "./public/img/explore-3.jpg":
/*!**********************************!*\
  !*** ./public/img/explore-3.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/explore-3-aeb0d58d63e32f5efd9e3de68789726b.jpg";

/***/ }),

/***/ "./public/img/featured-1.jpg":
/*!***********************************!*\
  !*** ./public/img/featured-1.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/featured-1-61cfa1ad94e59dfb8a0aa9025d12eda4.jpg";

/***/ }),

/***/ "./public/img/featured-2.jpg":
/*!***********************************!*\
  !*** ./public/img/featured-2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/featured-2-f194738a33c75d7529e437a24fce67e0.jpg";

/***/ }),

/***/ "./public/img/featured-3.jpg":
/*!***********************************!*\
  !*** ./public/img/featured-3.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/featured-3-8b63bad827adf3b1fab9832d1f1dbd41.jpg";

/***/ }),

/***/ "./public/img/plus-1.jpg":
/*!*******************************!*\
  !*** ./public/img/plus-1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/plus-1-1cd90d428ed098d36d4099a3514aa633.jpg";

/***/ }),

/***/ "./public/img/stay-1.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-1-ff81a1e6cf4d444654e3667b35d2dae2.jpg";

/***/ }),

/***/ "./public/img/stay-2.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-2-ab13e772fb306307d9bc81b6a234e868.jpg";

/***/ }),

/***/ "./public/img/stay-3.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-3.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-3-667c26624bc587e2a0ed097fe47af9e9.jpg";

/***/ }),

/***/ "./public/img/stay-4.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-4.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-4-dd713327130917e664b8d79985614f91.jpg";

/***/ }),

/***/ "./public/img/stay-5.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-5.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-5-06efd6e4d14fcb7b96272f09696e7372.jpg";

/***/ }),

/***/ "./public/img/stay-6.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-6.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-6-152121985c5e6262890ef7e05fccc38c.jpg";

/***/ }),

/***/ "./public/img/stay-7.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-7.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-7-fe37762d5a217a0949c9c6987974c271.jpg";

/***/ }),

/***/ "./public/img/stay-8.jpg":
/*!*******************************!*\
  !*** ./public/img/stay-8.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay-8-071e3b9fba4717101516eb47ecbea2f3.jpg";

/***/ }),

/***/ "./src/components/AdventureCard.js":
/*!*****************************************!*\
  !*** ./src/components/AdventureCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  location,
  title,
  price,
  days
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-lg",
    src: img,
    alt: ""
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 385,
    width: 255
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-xs my-2 font-semibold"
  }, location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1 w-5/6"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, price, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xB7 "), days, " days"));
});

/***/ }),

/***/ "./src/components/Adventures.js":
/*!**************************************!*\
  !*** ./src/components/Adventures.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AdventureCard */ "./src/components/AdventureCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/adventures1.jpg */ "./public/img/adventures1.jpg");
/* harmony import */ var _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/adventures2.jpg */ "./public/img/adventures2.jpg");
/* harmony import */ var _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/adventures3.jpg */ "./public/img/adventures3.jpg");
/* harmony import */ var _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/adventures4.jpg */ "./public/img/adventures4.jpg");
/* harmony import */ var _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7__);

 // Component


 // Images





/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Norway",
    title: "2 Nights PACKAGE All Inclusive",
    price: "From $841 / person",
    days: "3"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Indonesia",
    title: "Snorkeling and hiking in West Sumatra",
    price: "From $249 / person",
    days: "2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Nepal",
    title: "Trek to the lower Everest region",
    price: "From $1,745 / person",
    days: "11"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: "Morocco",
    title: "Active Adventure & Stay with Locals",
    price: "From $416 / person",
    days: "4"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShowAll__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Show all adventures"
  }));
});

/***/ }),

/***/ "./src/components/Explore.js":
/*!***********************************!*\
  !*** ./src/components/Explore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExploreCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExploreCard */ "./src/components/ExploreCard.js");
/* harmony import */ var _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img/explore-1.jpg */ "./public/img/explore-1.jpg");
/* harmony import */ var _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/explore-2.jpg */ "./public/img/explore-2.jpg");
/* harmony import */ var _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/explore-3.jpg */ "./public/img/explore-3.jpg");
/* harmony import */ var _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_4__);
 // Components

 // Images




/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full scroller"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-32 sm:w-1/3 mr-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExploreCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    title: "Stays"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-32 sm:w-1/3 mr-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExploreCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: "Experiences"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-32 sm:w-1/3 mr-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExploreCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: "Adventures"
  }))))));
});

/***/ }),

/***/ "./src/components/ExploreCard.js":
/*!***************************************!*\
  !*** ./src/components/ExploreCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  title
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    className: "h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none",
    alt: ""
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 80,
    width: 130
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold"
  }, title)));
});

/***/ }),

/***/ "./src/components/Featured.js":
/*!************************************!*\
  !*** ./src/components/Featured.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FeaturedCard */ "./src/components/FeaturedCard.js");
/* harmony import */ var _public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img/featured-1.jpg */ "./public/img/featured-1.jpg");
/* harmony import */ var _public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/featured-2.jpg */ "./public/img/featured-2.jpg");
/* harmony import */ var _public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/featured-3.jpg */ "./public/img/featured-3.jpg");
/* harmony import */ var _public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4__);
 // Components

 // Images




/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full scroller"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-startpy-2 rounded-xl w-featured md:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-80 lg:w-1/3 pb-5 mr-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    verified: "940",
    description: "Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-80 lg:w-1/3 pb-5 mr-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    verified: "300",
    description: "Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-80 lg:w-1/3 pb-5 pr-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    verified: "290",
    description: "Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design"
  })))))));
});

/***/ }),

/***/ "./src/components/FeaturedCard.js":
/*!****************************************!*\
  !*** ./src/components/FeaturedCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  verified,
  description
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full w-64 sm:w-full bg-white"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-xl",
    src: img,
    alt: "adventure1"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 220
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-xs my-2 font-bold text-pink-700"
  }, verified, "+ Verified Stays")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "whitespace-normal my-1 text-sm tracking-wide"
  }, description)));
});

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const changeDisplay = () => {
    setDisplay(!display);
    console.log(display);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, display ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:block fixed bottom-0 bg-white w-full border-t border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:px-20 px-5 xl:px-0 xl:max-w-5.5xl mx-auto py-6 sm:py-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex md:flex-wrap md:items-start md:w-full md:justify-between md:pb-6 md:border-b md:border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2"
  }, "Airbnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Careers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Policies")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Diversity & Belonging")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Accessibility")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2"
  }, "Discover"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Trust & Safety")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Travel Credit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Airbnb Citizen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Business Travel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Things To Do")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Airbnbmag")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-gray-905 text-sm mb-2"
  }, "Hosting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Why Host")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Hospitality")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Responsible Hosting")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Community Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Host an Experience")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Open Homes")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-sm mb-2 text-gray-900"
  }, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "font-semibold text-sm text-gray-650",
    href: ""
  }, "Help")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "font-semibold text-sm text-gray-650",
    href: ""
  }, "Neighbourhood Support"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between sm:pt-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-5 w-5 block",
    style: {
      fill: '#767676'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "AirBnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-2 text-sm  text-gray-650 font-semibold"
  }, "\xA9 2020 Airbnb, Inc. All rights reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex md:flex-wrap md:justify-between md:items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm text-gray-650 font-semibold"
  }, "\u3000\u2744\uFE0F Cloned by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: ""
  }, "\xA0Ken"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden lg:flex lg:items-center lg:justify-start lg:flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    width: "512pt",
    style: {
      fill: '#767676'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-5 w-5 ml-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676',
      marginRight: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-5 h-5 ml-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056"
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: changeDisplay,
    className: "flex items-center justify-start hover:bg-gray-100 bg-white z-10 shadow-xl fixed bottom-0 lg:right-0 ml-4 lg:mr-4 mb-3 rounded-lg py-2 px-4 font-semibold text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-3 w-3 mt-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892 L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999 c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998 c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ml-3"
  }, "Close"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: changeDisplay,
    className: "hidden md:block hover:bg-gray-100 md:flex md:items-center justify-start fixed bottom-0 md:ml-3 md:mb-3 lg:right-0  lg:mr-3 z-10 bg-white text-sm font-semibold py-2 px-4 rounded-lg shadow-xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-4 w-4 mt-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ml-3"
  }, "Terms, privacy, & more")));
});

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeaderCard */ "./src/components/HeaderCard.js");
/* harmony import */ var _public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img/airbnb-background.jpg */ "./public/img/airbnb-background.jpg");
/* harmony import */ var _public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2__);
 // Component

 // Images


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    style: {
      backgroundImage: `url(${_public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2___default.a})`,
      maxHeight: '70rem'
    },
    className: "md:h-header lg:h-screen relative bg-cover bg-no-repeat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Airbnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-8 w-8 block",
    style: {
      fill: '#ffffff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "AirBnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden lg:block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "flex items-center justify-around flex-wrap text-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex self-center flex-wrap justify-between text-sm font-semibold px-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: '#ffffff',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "English(CA)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "block text-sm font-semibold px-4 tracking-wide"
  }, "$CAD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide"
  }, "Host a home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide"
  }, "Host an experience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide"
  }, "Help"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm font-semibold px-4"
  }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm font-semibold pl-2 pr-4"
  }, "Log in")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:ml-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "md:hidden px-4 pb-4 pt-16 text-white inline-block font-sans text-3xl font-bold leading-tight w-5/6"
  }, "Book unique places to stay and things to do."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
});

/***/ }),

/***/ "./src/components/HeaderCard.js":
/*!**************************************!*\
  !*** ./src/components/HeaderCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "hidden md:inline-block md:font-sans md:text-3xl md:font-bold md:text-gray-750 md:leading-tight"
  }, "Book unique places to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "stay and things to do."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase tracking-wider",
    htmlFor: "where"
  }, "Where"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide",
    type: "text",
    id: "where",
    placeholder: "Anywhere"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-stretch justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase",
    htmlFor: "checkin"
  }, "Check-In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkin",
    placeholder: "dd-mm-yyyy"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "checkout"
  }, "Check-Out"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkout",
    placeholder: "dd-mm-yyyy"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "guests"
  }, "Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block relative w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    id: "guests"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "2 Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "2"
  }, "3 Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "3"
  }, "4 Guests")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-500 rounded text-white font-bold"
  }, "Search"))));
});

/***/ }),

/***/ "./src/components/Location.js":
/*!************************************!*\
  !*** ./src/components/Location.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  location,
  price
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31 py-3 my-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold"
  }, location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-xs font-normal text-gray-650 text-sm"
  }, "$", price, "/night average"));
});

/***/ }),

/***/ "./src/components/Plus.js":
/*!********************************!*\
  !*** ./src/components/Plus.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlusCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlusCard */ "./src/components/PlusCard.js");
/* harmony import */ var _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/plus-1.jpg */ "./public/img/plus-1.jpg");
/* harmony import */ var _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3__);

 // Components

 // Images


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlusCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 226
  }));
});

/***/ }),

/***/ "./src/components/PlusCard.js":
/*!************************************!*\
  !*** ./src/components/PlusCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full h-64 bg-cover bg-no-repeat object-cover rounded",
    src: img,
    alt: ""
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 226
  }));
});

/***/ }),

/***/ "./src/components/Popular.js":
/*!***********************************!*\
  !*** ./src/components/Popular.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Location */ "./src/components/Location.js");
 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-start w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Los Angeles",
    price: "213"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "New York",
    price: "159"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Seattle",
    price: "134"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Denver",
    price: "128"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Washington DC",
    price: "166"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Phoenix",
    price: "232"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Austin",
    price: "242"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Houston",
    price: "351"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "New Orleans",
    price: "210"
  }))));
});

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
  const renderContent = () => {
    if (phrase) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-2xl text-gray-850 font-medium pt-3"
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-sm md:text-md mb-5 text-gray-850 pb-3"
      }, phrase));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-gray-850 text-2xl font-semibold py-3 "
      }, title));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5"
  }, renderContent(), children);
});

/***/ }),

/***/ "./src/components/SectionOverflow.js":
/*!*******************************************!*\
  !*** ./src/components/SectionOverflow.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
  function renderPhrase() {
    if (phrase) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "scrollable text-gray-850 text-2xl font-semibold py-3 "
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "scrollable text-sm md:text-md mb-5 text-gray-850 pb-3"
      }, phrase));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "scrollable text-gray-850 text-2xl font-semibold py-3 "
      }, title));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sm:px-5 md:px-10 xl:px-0 lg:max-w-5.5xl mx-auto py-5 overflow-x-hidden overflow-y-hidden w-full"
  }, renderPhrase(), children);
});

/***/ }),

/***/ "./src/components/ShowAll.js":
/*!***********************************!*\
  !*** ./src/components/ShowAll.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 flex flex-wrap items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "font-semibold border-b border-gray-800"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "14px",
    height: "14px",
    viewBox: "0 0 451.846 451.847"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
  })))));
});

/***/ }),

/***/ "./src/components/Stay.js":
/*!********************************!*\
  !*** ./src/components/Stay.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StayCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StayCard */ "./src/components/StayCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/stay-1.jpg */ "./public/img/stay-1.jpg");
/* harmony import */ var _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/stay-2.jpg */ "./public/img/stay-2.jpg");
/* harmony import */ var _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/stay-3.jpg */ "./public/img/stay-3.jpg");
/* harmony import */ var _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/stay-4.jpg */ "./public/img/stay-4.jpg");
/* harmony import */ var _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/stay-5.jpg */ "./public/img/stay-5.jpg");
/* harmony import */ var _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/img/stay-6.jpg */ "./public/img/stay-6.jpg");
/* harmony import */ var _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/img/stay-7.jpg */ "./public/img/stay-7.jpg");
/* harmony import */ var _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/img/stay-8.jpg */ "./public/img/stay-8.jpg");
/* harmony import */ var _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10__);
 // Component


 // Images









/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "normal",
    img: _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "91"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Makawao",
    title: "Adorable Garden Gingerbread...",
    price: "257"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Roma Norte",
    title: "Radiant Apartment with Terrace in...",
    price: "104"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Portici",
    title: "Villa San Gennariello",
    price: "87"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "plus",
    img: _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: "Old Town",
    title: "Classical Apartment on the Royal...",
    price: "206"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "normal",
    img: _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    location: "Porto",
    title: "PORTA33 | PORTO PENTHOUSE...",
    price: "126"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    location: "Krakow",
    title: "Amazing and Extremely Central Flat",
    price: "31"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    location: "Tricase",
    title: "La Salentina, sea, nature & relax",
    price: "68"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show(2000+)"
  }));
});

/***/ }),

/***/ "./src/components/StayCard.js":
/*!************************************!*\
  !*** ./src/components/StayCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  type,
  img,
  location,
  title,
  price
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();

  const renderhost = () => {
    if (type === 'normal') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mt-3 text-sm sm:my-2 font-light text-gray-600"
      }, location));
    } else if (type === 'superhost') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uppercase mt-3 md:mt-0 border border-gray-800 rounded font-semibold px-1 mt-1 text-xs"
      }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600"
      }, location));
    } else if (type === 'plus') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sm:flex sm:flex-wrap sm:items-center sm:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "inline-block mt-3 md:mt-0 px-1 rounded text-white uppercase tracking-wide text-xs font-semibold bg-pink-800"
      }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600"
      }, location));
    }

    console.log(type);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded",
    src: img,
    alt: "adventure1"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 165
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between"
  }, renderhost(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
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
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-1 text-sm"
  }, "4.71"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tracking-wide"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold"
  }, "$", price, " CAD"), "/night"));
});

/***/ }),

/***/ "./src/components/TopRated.js":
/*!************************************!*\
  !*** ./src/components/TopRated.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopRatedCard */ "./src/components/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/experience-1.jpg */ "./public/img/experience-1.jpg");
/* harmony import */ var _public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/experience-2.jpg */ "./public/img/experience-2.jpg");
/* harmony import */ var _public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/experience-3.jpg */ "./public/img/experience-3.jpg");
/* harmony import */ var _public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/experience-4.jpg */ "./public/img/experience-4.jpg");
/* harmony import */ var _public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
 // Components


 // Images





/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: "Italy",
    title: "Luca & Lorenzo, cooking in Chianti hills",
    price: "172",
    reviews: "1765"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Italy",
    title: "Truffle experience Rome",
    price: "148",
    reviews: "621"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Japan",
    title: "Feeling Samurai Soul",
    price: "119",
    reviews: "1047"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Italy",
    title: "Lisbon best flavors",
    price: "90",
    reviews: "3733"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all experiences"
  }));
});

/***/ }),

/***/ "./src/components/TopRatedCard.js":
/*!****************************************!*\
  !*** ./src/components/TopRatedCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  location,
  title,
  price,
  reviews
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-lg",
    src: img,
    alt: "adventure1"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 385
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-xs my-2 font-semibold"
  }, location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From $", price, "/person"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-1 text-sm"
  }, "4.71"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-650 text-sm"
  }, "\xA0 (", reviews, ")")));
});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _components_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SectionOverflow */ "./src/components/SectionOverflow.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Explore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Explore */ "./src/components/Explore.js");
/* harmony import */ var _components_Plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Plus */ "./src/components/Plus.js");
/* harmony import */ var _components_Adventures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Adventures */ "./src/components/Adventures.js");
/* harmony import */ var _components_Stay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Stay */ "./src/components/Stay.js");
/* harmony import */ var _components_TopRated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TopRated */ "./src/components/TopRated.js");
/* harmony import */ var _components_Popular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Popular */ "./src/components/Popular.js");
/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Featured */ "./src/components/Featured.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
 // Wrapper


 // Component











const Home = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Explore Airbnb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Explore__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Airbnb Plus places to stay",
    phrase: "A selection of places to stay verified for quality and design"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Plus__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Introducing Airbnb Adventures",
    phrase: "Multi-day trips led by local experts\u2014activities, meals, and stays included"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Adventures__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Places to stay around the world"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stay__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Top-rated experiences",
    phrase: "Book activities led by local hosts on your next trip."
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRated__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Popular destinations in the United States"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Popular__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Featured Airbnb Plus destinations",
    phrase: "Browse beautiful places to stay with all the comforts of home, plus more"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Featured__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/mybnb/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading-skeleton");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map