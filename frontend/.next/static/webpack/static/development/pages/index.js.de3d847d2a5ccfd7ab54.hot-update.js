webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cards/Location.js":
false,

/***/ "./src/components/containers/Popular.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Popular.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/Location */ "./src/components/presentational/Location.js");
 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const locations = [{
    location: 'San Francisco',
    price: 216
  }, {
    location: 'Los Angeles',
    price: 213
  }, {
    location: 'New York',
    price: 159
  }, {
    location: 'Seattle',
    price: 134
  }, {
    location: 'Denver',
    price: 128
  }, {
    location: 'Washington DC',
    price: 166
  }, {
    location: 'Phoenix',
    price: 232
  }, {
    location: 'Austin',
    price: 242
  }, {
    location: 'Houston',
    price: 351
  }, {
    location: 'New Orleans',
    price: 210
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-start w-full"
  }, locations.map(({
    location,
    price
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
      location: location,
      price: price
    }));
  })));
});

/***/ }),

/***/ "./src/components/presentational/Location.js":
/*!***************************************************!*\
  !*** ./src/components/presentational/Location.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.de3d847d2a5ccfd7ab54.hot-update.js.map