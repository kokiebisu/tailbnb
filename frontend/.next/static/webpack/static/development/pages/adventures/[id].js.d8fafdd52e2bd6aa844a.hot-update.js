webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/components/adventures/containers/Included.tsx":
/*!***********************************************************!*\
  !*** ./src/components/adventures/containers/Included.tsx ***!
  \***********************************************************/
/*! exports provided: Included */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Included", function() { return Included; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wrapper/DetailSectionOverflow */ "./src/components/wrapper/DetailSectionOverflow.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/containers/Included.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Function


var Included = function Included() {
  return __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "px-4 md:px-16 w-full max-w-6xl xl:px-0 flex justify-start items-start flex-wrap py-8 md:py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 md:h-full pb-8 md:pb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: "lg:sticky lg:top-0 text-2xl md:text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "What's included")), __jsx(_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_1__["DetailSectionOverflow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

/***/ }),

/***/ "./src/components/adventures/functions/IncludedCard.tsx":
false,

/***/ "./src/components/wrapper/DetailSectionOverflow.tsx":
/*!**********************************************************!*\
  !*** ./src/components/wrapper/DetailSectionOverflow.tsx ***!
  \**********************************************************/
/*! exports provided: DetailSectionOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSectionOverflow", function() { return DetailSectionOverflow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/DetailSectionOverflow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var DetailSectionOverflow = function DetailSectionOverflow(_ref) {
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
        className: "text-2xl my-4 text-gray-850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, title));
    }
  }

  return __jsx("div", {
    className: "border-b border-gray-300 pt-4 pb-14 w-full mx-auto overflow-x-hidden overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, renderPhrase(phrase), children));
};

/***/ })

})
//# sourceMappingURL=[id].js.d8fafdd52e2bd6aa844a.hot-update.js.map