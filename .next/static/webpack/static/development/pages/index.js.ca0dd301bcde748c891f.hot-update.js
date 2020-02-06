webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Plus.js":
/*!********************************!*\
  !*** ./src/components/Plus.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlusCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlusCard */ "./src/components/PlusCard.js");
/* harmony import */ var _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/plus-1.jpg */ "./public/img/plus-1.jpg");
/* harmony import */ var _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3__);

 // Components

 // Images


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlusCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_plus_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 226
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.ca0dd301bcde748c891f.hot-update.js.map