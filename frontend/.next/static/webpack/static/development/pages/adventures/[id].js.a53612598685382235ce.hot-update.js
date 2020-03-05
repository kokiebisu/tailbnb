webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/components/adventures/functions/ItineraryCard.tsx":
/*!***************************************************************!*\
  !*** ./src/components/adventures/functions/ItineraryCard.tsx ***!
  \***************************************************************/
/*! exports provided: ItineraryCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryCard", function() { return ItineraryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/ItineraryCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Images

var detail2 = __webpack_require__(/*! ../../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

var ItineraryCard = function ItineraryCard(_ref) {
  var is_last = _ref.is_last,
      day = _ref.day,
      title = _ref.title,
      description = _ref.description;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, is_last ? __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "px-5 text-gray-750 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: 7,
      width: 7,
      top: -7.1,
      left: -3.4
    },
    className: "absolute z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("path", {
    d: "M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))))), __jsx("p", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Day ", day), __jsx("div", {
    className: "w-full md:flex justify-start items-start pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "md:w-5/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    className: "h-full w-full",
    src: detail2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("div", {
    className: "w-full md:w-7/12 md:pl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "pt-3 pb-2 md:pt-0 md:pb-0 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, title), __jsx("p", {
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, description), __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-green-850 text-sm mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Show more"))))) : __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "px-5 text-gray-750 border-l border-gray-800 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: 7,
      width: 7,
      top: -7,
      left: -3.6
    },
    className: "absolute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("path", {
    d: "M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))))), __jsx("p", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Day ", day), __jsx("div", {
    className: "w-full md:flex justify-start items-start pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "md:w-5/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("img", {
    className: "h-full w-full",
    src: detail2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), __jsx("div", {
    className: "w-full md:w-7/12 md:pl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "pt-3 pb-2 md:pt-0 md:pb-0 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, title), __jsx("p", {
    className: "text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, description), __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-green-850 text-sm mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Show more"))))));
};

/***/ })

})
//# sourceMappingURL=[id].js.a53612598685382235ce.hot-update.js.map