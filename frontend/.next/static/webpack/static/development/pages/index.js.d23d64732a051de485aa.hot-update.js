webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.tsx");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modals/MenuModal */ "./src/components/modals/MenuModal.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component




 // Next

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var switchMenuModal = function switchMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    switchMenuModal: switchMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), menuModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_4__["MenuModal"], {
    switchMenuModal: switchMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })) : null, __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_2__["Explore"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_3__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d23d64732a051de485aa.hot-update.js.map