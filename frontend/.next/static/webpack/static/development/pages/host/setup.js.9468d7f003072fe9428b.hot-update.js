webpackHotUpdate("static/development/pages/host/setup.js",{

/***/ "./src/pages/host/setup.jsx":
/*!**********************************!*\
  !*** ./src/pages/host/setup.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/HostHeader */ "./src/components/layout/HostHeader.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/setup.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Layout



var setup = function setup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_1__["HostHeader"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), menuModal ? __jsx(HostMenuModal, {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (setup);

/***/ })

})
//# sourceMappingURL=setup.js.9468d7f003072fe9428b.hot-update.js.map