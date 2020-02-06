webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContent */ "./src/components/FooterContent.js");
/* harmony import */ var _FooterInducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterInducer */ "./src/components/FooterInducer.js");
 // Component



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, display ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    changeDisplay: changeDisplay
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterInducer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    changeDisplay: changeDisplay
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.b97895d16cda22ff893e.hot-update.js.map