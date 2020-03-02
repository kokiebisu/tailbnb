webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/pages/stays/containers/StayInfo.js":
/*!************************************************!*\
  !*** ./src/pages/stays/containers/StayInfo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StayDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StayDescription */ "./src/pages/stays/containers/StayDescription.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/containers/StayInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Container


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      setLength = _ref.setLength;
  return __jsx("div", {
    className: "border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data && __jsx(_StayDescription__WEBPACK_IMPORTED_MODULE_1__["StayDescription"], {
    description: data.stay.description,
    space: data.stay.space,
    access: data.stay.access,
    note: data.stay.notes,
    changeLength: function changeLength() {
      return setLength(!length);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    className: "",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Any questions for the host?")))), __jsx("div", {
    className: "mt-10 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    className: "py-3 px-6 border border-black rounded-lg",
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Contact host"))));
});

/***/ })

})
//# sourceMappingURL=[id].js.533754fc057044288527.hot-update.js.map