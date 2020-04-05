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
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.tsx");
/* harmony import */ var _components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/functions/FrontLines */ "./src/components/functions/FrontLines.jsx");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modals/MenuModal */ "./src/components/modals/MenuModal.jsx");
/* harmony import */ var _components_functions_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/functions/Notice */ "./src/components/functions/Notice.jsx");
/* harmony import */ var _components_layout_BottomNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/BottomNav */ "./src/components/layout/BottomNav.jsx");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component







 // // Next
// import { NextPage } from 'next';

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  });

  var handleScroll = function handleScroll(e) {
    var bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    console.log(e.target.scrollHeight);

    if (bottom) {
      console.log('bottom');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    switchMenuModal: function switchMenuModal() {
      return setMenuModal(!menuModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), menuModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_5__["MenuModal"], {
    switchMenuModal: function switchMenuModal() {
      return setMenuModal(!menuModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })) : null, __jsx(_components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_2__["FrontLines"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(_components_functions_Notice__WEBPACK_IMPORTED_MODULE_6__["Notice"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_3__["Explore"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_4__["NewFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(_components_layout_BottomNav__WEBPACK_IMPORTED_MODULE_7__["BottomNav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d4fdcb2326c665173a05.hot-update.js.map