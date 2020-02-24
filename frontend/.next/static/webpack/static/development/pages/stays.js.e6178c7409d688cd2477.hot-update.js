webpackHotUpdate("static/development/pages/stays.js",{

/***/ "./src/components/presentational/TravelCard.tsx":
/*!******************************************************!*\
  !*** ./src/components/presentational/TravelCard.tsx ***!
  \******************************************************/
/*! exports provided: TravelCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCard", function() { return TravelCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/TravelCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var _require = __webpack_require__(/*! react-lazy-progressive-image */ "./node_modules/react-lazy-progressive-image/lib/index.js"),
    LazyImage = _require.LazyImage;


var TravelCard = function TravelCard(_ref) {
  var img = _ref.img,
      imglow = _ref.imglow,
      location = _ref.location;
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(location.toLowerCase()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(LazyImage, {
    src: img,
    placeholder: imglow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, function (src) {
    return __jsx("img", {
      src: src,
      className: "w-full h-full rounded-b-none rounded-lg ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }), __jsx("p", {
    className: "text-sm py-3 pl-4 sm:pl-4 text-gray-750 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, location))));
};

/***/ })

})
//# sourceMappingURL=stays.js.e6178c7409d688cd2477.hot-update.js.map