webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/pages/stays/containers/StayDescription.tsx":
/*!********************************************************!*\
  !*** ./src/pages/stays/containers/StayDescription.tsx ***!
  \********************************************************/
/*! exports provided: StayDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StayDescription", function() { return StayDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/containers/StayDescription.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var StayDescription = function StayDescription(_ref) {
  var description = _ref.description,
      space = _ref.space,
      access = _ref.access,
      note = _ref.note,
      changeLength = _ref.changeLength;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      display = _useState[0],
      setDisplay = _useState[1];

  var renderDescription = function renderDescription(description) {
    var wordArray = description.split(' ');
    var newArray = [];

    for (var i = 0; i < 45; i++) {
      newArray.push(wordArray[i]);
    }

    return newArray;
  };

  var newArray = renderDescription(description);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, display ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, description), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "The space"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, space)), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Guest access"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, access)), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Other things to note"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, note))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "".concat(newArray.join(' '), "..."), __jsx("button", {
    onClick: function onClick() {
      setDisplay(true);
      changeLength();
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Read More"))));
};

/***/ }),

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
  var data = _ref.data;
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
//# sourceMappingURL=[id].js.8a06ce80a0bdf30a19a3.hot-update.js.map