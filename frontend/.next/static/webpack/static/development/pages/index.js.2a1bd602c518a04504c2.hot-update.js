webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.tsx");
/* harmony import */ var _components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/functions/FrontLines */ "./src/components/functions/FrontLines.jsx");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modals/MenuModal */ "./src/components/modals/MenuModal.jsx");
/* harmony import */ var _components_functions_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/functions/Notice */ "./src/components/functions/Notice.jsx");
/* harmony import */ var _components_layout_BottomNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/BottomNav */ "./src/components/layout/BottomNav.jsx");
/* harmony import */ var _components_layout_Cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/Cookies */ "./src/components/layout/Cookies.jsx");
/* harmony import */ var _animations_appearFromBottom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../animations/appearFromBottom */ "./src/animations/appearFromBottom.ts");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


 // Component








 // Animation



var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var banner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_animations_appearFromBottom__WEBPACK_IMPORTED_MODULE_10__["default"])(banner);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    switchMenuModal: function switchMenuModal() {
      return setMenuModal(!menuModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), menuModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_6__["MenuModal"], {
    switchMenuModal: function switchMenuModal() {
      return setMenuModal(!menuModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })) : null, __jsx(_components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_3__["FrontLines"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_components_functions_Notice__WEBPACK_IMPORTED_MODULE_7__["Notice"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_4__["Explore"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_5__["NewFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), cookiebanner ? __jsx("div", {
    ref: function ref(el) {
      return banner = el;
    },
    style: {
      bottom: 12
    },
    className: "z-100 bottom-0 sticky",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "px-5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_components_layout_Cookies__WEBPACK_IMPORTED_MODULE_9__["Cookies"], {
    turnOffBanner: function turnOffBanner() {
      onDisappearBanner();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }))) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2a1bd602c518a04504c2.hot-update.js.map