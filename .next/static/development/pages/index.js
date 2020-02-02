(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/AdventureCard.js":
/*!*************************************!*\
  !*** ./components/AdventureCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/AdventureCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var img = _ref.img,
      location = _ref.location,
      title = _ref.title,
      price = _ref.price,
      days = _ref.days;
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("img", {
    className: "rounded-lg",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("p", {
    className: "uppercase text-xs my-2 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, location), __jsx("p", {
    className: "my-1 w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, price, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AdventureCard */ "./components/AdventureCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowAll */ "./components/ShowAll.js");
/* harmony import */ var _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/adventures1.jpg */ "./public/img/adventures1.jpg");
/* harmony import */ var _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img/adventures2.jpg */ "./public/img/adventures2.jpg");
/* harmony import */ var _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img/adventures3.jpg */ "./public/img/adventures3.jpg");
/* harmony import */ var _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/img/adventures4.jpg */ "./public/img/adventures4.jpg");
/* harmony import */ var _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Adventures.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component

 // Images





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: "Norway",
    title: "2 Nights PACKAGE All Inclusive",
    price: "From $841 / person",
    days: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Indonesia",
    title: "Snorkeling and hiking in West Sumatra",
    price: "From $249 / person",
    days: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Nepal",
    title: "Trek to the lower Everest region",
    price: "From $1,745 / person",
    days: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Morocco",
    title: "Active Adventure & Stay with Locals",
    price: "From $416 / person",
    days: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx(_components_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/img/explore-1.jpg */ "./public/img/explore-1.jpg");
/* harmony import */ var _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/explore-2.jpg */ "./public/img/explore-2.jpg");
/* harmony import */ var _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/explore-3.jpg */ "./public/img/explore-3.jpg");
/* harmony import */ var _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExploreCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExploreCard */ "./components/ExploreCard.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Explore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start py-2 rounded-xl w-80 md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "w-32 sm:w-1/3 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_ExploreCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    title: "Stays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("div", {
    className: "w-32 sm:w-1/3 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_ExploreCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    title: "Experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("div", {
    className: "w-32 sm:w-1/3 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_ExploreCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: "Adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/ExploreCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var img = _ref.img,
      title = _ref.title;
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("img", {
    src: img,
    className: "h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none",
    alt: "explore1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("p", {
    "class": "text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FeaturedCard */ "./components/FeaturedCard.js");
/* harmony import */ var _public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/featured-1.jpg */ "./public/img/featured-1.jpg");
/* harmony import */ var _public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/featured-2.jpg */ "./public/img/featured-2.jpg");
/* harmony import */ var _public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img/featured-3.jpg */ "./public/img/featured-3.jpg");
/* harmony import */ var _public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Featured.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-start justify-start w-full flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-1/3 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_featured_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    verified: "940",
    description: "Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("div", {
    className: "lg:w-1/3 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_featured_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    verified: "300",
    description: "Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "lg:w-1/3 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_featured_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    verified: "290",
    description: "Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/FeaturedCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var img = _ref.img,
      verified = _ref.verified,
      description = _ref.description;
  return __jsx("div", {
    className: "lg:w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("img", {
    className: "rounded-xl",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("p", {
    className: "uppercase text-xs my-2 font-bold text-pink-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, verified, "+ Verified Stays")), __jsx("p", {
    className: "my-1 text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "lg:px-20 px-5 xl:px-0 xl:max-w-5.5xl mx-auto border-t border-gray-200 py-6 sm:py-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:items-start md:w-full md:justify-between md:pb-6 md:border-b md:border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "News")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Policies")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Diversity & Belonging")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Accessibility")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Discover"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Trust & Safety")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Travel Credit")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Airbnb Citizen")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Business Travel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Things To Do")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Airbnbmag")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h3", {
    className: "font-semibold text-gray-905 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Hosting"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Why Host")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Hospitality")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Responsible Hosting")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Community Centre")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Host an Experience")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Open Homes")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("h3", {
    className: "font-semibold text-sm mb-2 text-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Support"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Help")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Neighbourhood Support"))))), __jsx("div", {
    className: "flex flex-wrap items-center justify-between sm:pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    "class": "flex flex-wrap items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "class": "h-5 w-5 block",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx("p", {
    className: "pl-2 text-sm  text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "\xA9 2020 Airbnb, Inc. All rights reserved."), __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:justify-between md:items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("p", {
    className: "text-sm text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "\u3000\u2744\uFE0F Cloned by"), __jsx("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "\xA0Ken"))), __jsx("div", {
    className: "hidden lg:flex lg:items-center lg:justify-start lg:flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
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
      lineNumber: 153
    },
    __self: this
  }, __jsx("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), __jsx("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), __jsx("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), __jsx("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), __jsx("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), __jsx("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
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
      lineNumber: 173
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }))), __jsx("svg", {
    className: "w-5 h-5 ml-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }))))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeaderCard */ "./components/HeaderCard.js");
/* harmony import */ var _public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/airbnb-background.jpg */ "./public/img/airbnb-background.jpg");
/* harmony import */ var _public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component
 // Images


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("header", {
    style: {
      backgroundImage: "url(".concat(_public_img_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, ")"),
      maxHeight: '70rem'
    },
    className: "md:h-header lg:h-screen relative bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "m-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-8 w-8 block",
    style: {
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))))), __jsx("div", {
    className: "hidden lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("nav", {
    className: "flex items-center justify-around flex-wrap text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "flex self-center flex-wrap justify-between text-sm font-semibold px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
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
      lineNumber: 39
    },
    __self: this
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "English(CA)")), __jsx("a", {
    href: "#",
    className: "block text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "$CAD"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Host a home"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Host an experience"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Help"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Sign up"), __jsx("a", {
    href: "#",
    className: "text-sm font-semibold pl-2 pr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Log in")))), __jsx("div", {
    className: "md:ml-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("h3", {
    className: "md:hidden px-4 pb-4 pt-16 text-white inline-block font-sans text-3xl font-bold leading-tight w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Book unique places to stay and things to do."), __jsx(_components_HeaderCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/HeaderCard.js":
/*!**********************************!*\
  !*** ./components/HeaderCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/HeaderCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    "class": "sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    "class": "mx-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h3", {
    "class": "hidden md:inline-block md:font-sans md:text-3xl md:font-bold md:text-gray-750 md:leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Book unique places to ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), "stay and things to do."), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase tracking-wider",
    htmlFor: "where",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Where"), __jsx("input", {
    className: "w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide",
    type: "text",
    id: "where",
    placeholder: "Anywhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "flex flex-wrap items-stretch justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    "class": "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-700 uppercase",
    htmlFor: "checkin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Check-In"), __jsx("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkin",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    "class": "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("label", {
    className: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Check-Out"), __jsx("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkout",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx("div", {
    "class": "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("label", {
    "class": "block font-bold mt-5 mb-2 text-xs uppercase text-gray-700",
    htmlFor: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Guests"), __jsx("div", {
    "class": "inline-block relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("select", {
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    id: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "2 Guests"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "3 Guests"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "4 Guests")), __jsx("div", {
    "class": "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("svg", {
    "class": "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))))), __jsx("div", {
    "class": "w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("button", {
    "class": "w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-500 rounded text-white font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Search"))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Location.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var location = _ref.location,
      price = _ref.price;
  return __jsx("div", {
    className: "w-30/31 py-3 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("h3", {
    className: "font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, location), __jsx("p", {
    className: "text-xs font-normal text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/img/plus-1.jpg */ "./public/img/plus-1.jpg");
/* harmony import */ var _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlusCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlusCard */ "./components/PlusCard.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Plus.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_PlusCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/PlusCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var img = _ref.img;
  return __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("img", {
    className: "w-full h-64 bg-cover bg-no-repeat object-cover rounded",
    src: img,
    alt: "plus1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Location */ "./components/Location.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Popular.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "San Francisco",
    price: "216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Los Angeles",
    price: "213",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "New York",
    price: "159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Seattle",
    price: "134",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Denver",
    price: "128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Washington DC",
    price: "166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Phoenix",
    price: "232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Austin",
    price: "242",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "Houston",
    price: "351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: "New Orleans",
    price: "210",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      children = _ref.children;

  var renderContent = function renderContent() {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        className: "text-2xl text-gray-850 font-medium pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, title), __jsx("p", {
        className: "text-sm md:text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        className: "text-gray-850 text-2xl font-semibold py-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, title));
    }
  };

  return __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, renderContent(), children);
});

/***/ }),

/***/ "./components/SectionOverflow.js":
/*!***************************************!*\
  !*** ./components/SectionOverflow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/SectionOverflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      children = _ref.children;
  return __jsx("div", {
    className: "pl-5 sm:px-5 md:px-10 xl:px-0 xl:px-0 lg:max-w-5.5xl mx-auto py-5 overflow-x-hidden overflow-y-hidden w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("h3", {
    className: "text-gray-850 text-2xl font-semibold py-3 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, title), children);
});

/***/ }),

/***/ "./components/SectionWithPhrase.js":
/*!*****************************************!*\
  !*** ./components/SectionWithPhrase.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/SectionWithPhrase.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      children = _ref.children;

  var renderContent = function renderContent() {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        className: "text-2xl text-gray-850 font-medium pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, title), __jsx("p", {
        className: "text-sm md:text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        className: "text-gray-850 text-2xl font-semibold py-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, title));
    }
  };

  return __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, renderContent(), children);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/ShowAll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title;
  return __jsx("div", {
    className: "mt-4 flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "font-semibold border-b border-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, title), __jsx("div", {
    className: "pl-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
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
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("path", {
    d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StayCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StayCard */ "./components/StayCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowAll */ "./components/ShowAll.js");
/* harmony import */ var _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/stay-1.jpg */ "./public/img/stay-1.jpg");
/* harmony import */ var _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img/stay-2.jpg */ "./public/img/stay-2.jpg");
/* harmony import */ var _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img/stay-3.jpg */ "./public/img/stay-3.jpg");
/* harmony import */ var _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/img/stay-4.jpg */ "./public/img/stay-4.jpg");
/* harmony import */ var _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/img/stay-5.jpg */ "./public/img/stay-5.jpg");
/* harmony import */ var _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/img/stay-6.jpg */ "./public/img/stay-6.jpg");
/* harmony import */ var _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/img/stay-7.jpg */ "./public/img/stay-7.jpg");
/* harmony import */ var _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/img/stay-8.jpg */ "./public/img/stay-8.jpg");
/* harmony import */ var _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/Stay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Component

 // Images









/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex flex-wrap items-start justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "normal",
    img: _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: "Sol Madrid",
    title: "Private Studio in Sol, Madrid",
    price: "91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Makawao",
    title: "Adorable Garden Gingerbread...",
    price: "257",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Roma Norte",
    title: "Radiant Apartment with Terrace in...",
    price: "104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Portici",
    title: "Villa San Gennariello",
    price: "87",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "plus",
    img: _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: "Old Town",
    title: "Classical Apartment on the Royal...",
    price: "206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "normal",
    img: _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    location: "Porto",
    title: "PORTA33 | PORTO PENTHOUSE...",
    price: "126",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    location: "Krakow",
    title: "Amazing and Extremely Central Flat",
    price: "31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("div", {
    className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_components_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    img: _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    location: "Tricase",
    title: "La Salentina, sea, nature & relax",
    price: "68",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), __jsx(_components_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show(2000+)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/StayCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var type = _ref.type,
      img = _ref.img,
      location = _ref.location,
      title = _ref.title,
      price = _ref.price;

  var renderhost = function renderhost() {
    if (type === 'normal') {
      return __jsx("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, __jsx("p", {
        className: "mt-3 text-sm sm:my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, location));
    } else if (type === 'superhost') {
      return __jsx("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("p", {
        className: "uppercase mt-3 md:mt-0 border border-gray-800 rounded font-semibold px-1 mt-1 text-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, type), __jsx("p", {
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, location));
    } else if (type === 'plus') {
      return __jsx("div", {
        className: "sm:flex sm:flex-wrap sm:items-center sm:justify-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("p", {
        className: "inline-block mt-3 md:mt-0 px-1 rounded text-white uppercase tracking-wide text-xs font-semibold bg-pink-800",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, type), __jsx("p", {
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, location));
    }

    console.log(type);
  };

  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    className: "rounded",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, renderhost(), __jsx("div", {
    className: "flex items-center justify-center flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
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
      lineNumber: 43
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), __jsx("p", {
    className: "pl-1 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "4.71"))), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, title), __jsx("p", {
    className: "tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "$", price, " CAD"), "/night"));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopRatedCard */ "./components/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowAll */ "./components/ShowAll.js");
/* harmony import */ var _public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/experience-1.jpg */ "./public/img/experience-1.jpg");
/* harmony import */ var _public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img/experience-2.jpg */ "./public/img/experience-2.jpg");
/* harmony import */ var _public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img/experience-3.jpg */ "./public/img/experience-3.jpg");
/* harmony import */ var _public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/img/experience-4.jpg */ "./public/img/experience-4.jpg");
/* harmony import */ var _public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/TopRated.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Components

 // Images





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: "Italy",
    title: "Luca & Lorenzo, cooking in Chianti hills",
    price: "172",
    reviews: "1765",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Italy",
    title: "Truffle experience Rome",
    price: "148",
    reviews: "621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Japan",
    title: "Feeling Samurai Soul",
    price: "119",
    reviews: "1047",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("div", {
    className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Italy",
    title: "Lisbon best flavors",
    price: "90",
    reviews: "3733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/TopRatedCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var img = _ref.img,
      location = _ref.location,
      title = _ref.title,
      price = _ref.price,
      reviews = _ref.reviews;
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("img", {
    className: "rounded-lg",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("p", {
    className: "uppercase text-xs my-2 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, location), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "From $", price, "/person"), __jsx("div", {
    className: "flex items-center justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx("p", {
    className: "pl-1 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "4.71"), __jsx("p", {
    className: "text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\xA0 (", reviews, ")")));
});

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fairbnb2020%2Fpages%2Findex.js!./":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fairbnb2020%2Fpages%2Findex.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var _components_SectionWithPhrase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SectionWithPhrase */ "./components/SectionWithPhrase.js");
/* harmony import */ var _components_SectionOverflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionOverflow */ "./components/SectionOverflow.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Explore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Explore */ "./components/Explore.js");
/* harmony import */ var _components_Plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Plus */ "./components/Plus.js");
/* harmony import */ var _components_Adventures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Adventures */ "./components/Adventures.js");
/* harmony import */ var _components_Stay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Stay */ "./components/Stay.js");
/* harmony import */ var _components_TopRated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TopRated */ "./components/TopRated.js");
/* harmony import */ var _components_Popular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Popular */ "./components/Popular.js");
/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Featured */ "./components/Featured.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Wrapper


 // Component











var Home = function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_SectionOverflow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Explore Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_Explore__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Airbnb Plus places to stay",
    phrase: "A selection of places to stay verified for quality and design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_Plus__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Introducing Airbnb Adventures",
    phrase: "Multi-day trips led by local experts\u2014activities, meals, and stays included",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_Adventures__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Places to stay around the world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_Stay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Top-rated experiences",
    phrase: "Book activities led by local hosts on your next trip.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_TopRated__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Popular destinations in the United States",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_Popular__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Featured Airbnb Plus destinations",
    phrase: "Browse beautiful places to stay with all the comforts of home, plus more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_Featured__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

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

module.exports = "/_next/static/images/explore-3-c2b4e4cf4460dffa0f23a6a8b64a8775.jpg";

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

/***/ 2:
/*!*************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fairbnb2020%2Fpages%2Findex.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fairbnb2020%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fairbnb2020%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map