webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/GuestPickerModal.jsx":
/*!****************************************************!*\
  !*** ./src/components/modals/GuestPickerModal.jsx ***!
  \****************************************************/
/*! exports provided: GuestPickerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPickerModal", function() { return GuestPickerModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/GuestPickerModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var renderCategory = function renderCategory(category, info, number, decrement, increment) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, category)), info && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, info)))), __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      increment();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "w-7 h-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("svg", {
    className: "w-full h-full",
    viewBox: "0 0 512 512",
    style: {
      fill: '#008489'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("path", {
    d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("path", {
    d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })))), __jsx("div", {
    className: "w-10 flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-lg text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, number, "+"))), __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      decrement();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "h-7 w-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#008489'
    },
    className: "w-full h-full",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("path", {
    d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("path", {
    d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("path", {
    d: "m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))))));
};

var GuestPickerSection = function GuestPickerSection(_ref) {
  var category = _ref.category,
      info = _ref.info,
      number = _ref.number,
      increment = _ref.increment,
      decrement = _ref.decrement;
  return __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, renderCategory(category, info, number, increment, decrement)));
};

var GuestPickerModal = function GuestPickerModal(_ref2) {
  var incrementAdult = _ref2.incrementAdult,
      decrementAdult = _ref2.decrementAdult,
      incrementChildren = _ref2.incrementChildren,
      decrementChildren = _ref2.decrementChildren,
      incrementInfant = _ref2.incrementInfant,
      decrementInfant = _ref2.decrementInfant,
      adult = _ref2.adult,
      children = _ref2.children,
      infant = _ref2.infant,
      resetNumber = _ref2.resetNumber,
      switchModal = _ref2.switchModal;
  return __jsx("div", {
    className: "absolute z-50 bg-white w-full px-6 shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "relative py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(GuestPickerSection, {
    category: "Adults",
    number: adult,
    decrement: decrementAdult,
    increment: incrementAdult,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(GuestPickerSection, {
    category: "Children",
    info: "Ages 2 - 12",
    number: children,
    decrement: decrementChildren,
    increment: incrementChildren,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(GuestPickerSection, {
    category: "Infants",
    info: "Under 2",
    number: infant,
    decrement: decrementInfant,
    increment: incrementInfant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), adult + children > 0 ? __jsx("div", {
    className: "absolute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return resetNumber();
    },
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Clear")) : null, __jsx("div", {
    className: "flex justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("button", {
    onClick: switchModal,
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Save"))));
};

/***/ })

})
//# sourceMappingURL=index.js.b72d283f5c464f1f49c0.hot-update.js.map