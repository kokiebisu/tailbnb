webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/wrapper/Section.tsx":
/*!********************************************!*\
  !*** ./src/components/wrapper/Section.tsx ***!
  \********************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/Section.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var Section = function Section(_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      children = _ref.children;

  var renderContent = function renderContent(phrase) {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl text-gray-850 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-gray-850 text-2xl pt-3 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, title));
    }
  };

  return __jsx("div", {
    className: "bg-red-550 sm:px-20 xl:max-w-layout mx-auto py-5 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, renderContent(phrase), children);
};

/***/ })

})
//# sourceMappingURL=index.js.d104d63064187d8281a8.hot-update.js.map