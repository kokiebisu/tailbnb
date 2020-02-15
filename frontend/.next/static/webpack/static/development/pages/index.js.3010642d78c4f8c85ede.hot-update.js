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
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presentational_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentational/Location */ "./src/components/presentational/Location.js");

 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSleep = async seconds => {
    await sleep(seconds);
    setLoading(false);
  };

  const locations = [{
    id: 1,
    location: 'San Francisco',
    price: 216
  }, {
    id: 2,
    location: 'Los Angeles',
    price: 213
  }, {
    id: 3,
    location: 'New York',
    price: 159
  }, {
    id: 4,
    location: 'Seattle',
    price: 134
  }, {
    id: 5,
    location: 'Denver',
    price: 128
  }, {
    id: 6,
    location: 'Washington DC',
    price: 166
  }, {
    id: 7,
    location: 'Phoenix',
    price: 232
  }, {
    id: 8,
    location: 'Austin',
    price: 242
  }, {
    id: 9,
    location: 'Houston',
    price: 351
  }, {
    id: 10,
    location: 'New Orleans',
    price: 210
  }];
  setSleep(5000);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center items-center w-full py-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 10,
    color: '#008489'
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-start w-full"
  }, locations.map(({
    id,
    location,
    price
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_Location__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      location: location,
      price: price
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.3010642d78c4f8c85ede.hot-update.js.map