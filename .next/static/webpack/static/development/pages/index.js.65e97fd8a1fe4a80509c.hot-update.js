webpackHotUpdate("static/development/pages/index.js",{

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
      phrase = _ref.phrase,
      children = _ref.children;

  function renderPhrase() {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        className: "scrollable text-gray-850 text-2xl font-semibold py-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, title), __jsx("p", {
        className: "text-sm md:text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        className: "scrollable text-gray-850 text-2xl font-semibold py-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, title));
    }
  }

  return __jsx("div", {
    className: "sm:px-5 md:px-10 xl:px-0 lg:max-w-5.5xl mx-auto py-5 overflow-x-hidden overflow-y-hidden w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, renderPhrase(), children);
});

/***/ })

})
//# sourceMappingURL=index.js.65e97fd8a1fe4a80509c.hot-update.js.map