webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/functions/AdventureCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/functions/AdventureCard.tsx ***!
  \****************************************************/
/*! exports provided: AdventureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureCard", function() { return AdventureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/AdventureCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var AdventureCard = function AdventureCard(_ref) {
  var id = _ref.id,
      img = _ref.img,
      country = _ref.country,
      title = _ref.title,
      cost = _ref.cost,
      period = _ref.period;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/adventures/[id]",
    as: "/adventures/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "w-30/31 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    className: "w-full h-full rounded-lg",
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "mt-2 mb-1 md:mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    className: "uppercase text-xs font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, country)), __jsx("p", {
    className: "my-1 w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "From $", cost, " / person", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, " \xB7 "), period, " days")));
};

/***/ })

})
//# sourceMappingURL=index.js.5ded98c5f7141b2e3d1e.hot-update.js.map