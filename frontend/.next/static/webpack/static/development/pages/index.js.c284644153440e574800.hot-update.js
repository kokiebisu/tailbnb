webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/wrapper/SectionOverflow.tsx":
/*!****************************************************!*\
  !*** ./src/components/wrapper/SectionOverflow.tsx ***!
  \****************************************************/
/*! exports provided: SectionOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionOverflow", function() { return SectionOverflow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/SectionOverflow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var SectionOverflow = function SectionOverflow(_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      children = _ref.children;

  function renderPhrase(phrase) {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "scrollable text-gray-850 text-2xl pt-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "scrollable text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "scrollable text-gray-850 text-2xl py-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, title));
    }
  }

  return __jsx("div", {
    className: "px-6 md:px-20 xl:max-w-layout mx-auto py-5 overflow-x-hidden overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, renderPhrase(phrase), children);
};

/***/ })

})
//# sourceMappingURL=index.js.c284644153440e574800.hot-update.js.map