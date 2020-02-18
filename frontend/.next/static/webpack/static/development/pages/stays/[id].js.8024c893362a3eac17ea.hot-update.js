webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/components/presentational/CheckInCard.js":
/*!******************************************************!*\
  !*** ./src/components/presentational/CheckInCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (({
  loading,
  length
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSleep = async seconds => {
    await sleep(seconds);
    setLoaded(false);
  };

  setSleep(5000);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mx-10 items-center justify-between bg-blue-500"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-start mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: 300,
    height: 30
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-md lg:w-full py-5 lg:text-2xl text-gray-850"
  }, "Add dates for prices"), loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex justify-center px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 10,
    color: '#ffffff',
    count: 10
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap"
  }, "Check Availability"))));
});

/***/ })

})
//# sourceMappingURL=[id].js.8024c893362a3eac17ea.hot-update.js.map