webpackHotUpdate("static/development/pages/index.js",{

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
  }, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      location: location,
      price: price
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.a0cbd7f71be5d3ed48f7.hot-update.js.map