webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/layout/BottomNav.jsx":
/*!*********************************************!*\
  !*** ./src/components/layout/BottomNav.jsx ***!
  \*********************************************/
/*! exports provided: BottomNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNav", function() { return BottomNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/BottomNav.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BottomNav = function BottomNav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    explore: true,
    saved: false,
    login: false
  }),
      selected = _useState[0],
      setSelected = _useState[1];

  return __jsx("div", {
    className: "w-full bg-white fixed bottom-0 z-50 h-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "max-w-2xs mx-auto h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "h-full flex justify-between items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("svg", {
    style: {
      overflow: 'visible'
    },
    className: "w-full h-full",
    fillOpacity: "0",
    stroke: selected.explore ? '#FF5A5F' : '#484848',
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium',
      color: "".concat(selected.explore ? '#FF5A5F' : '#484848')
    },
    className: "text-2xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Explore"))), __jsx("div", {
    className: "flex flex-col items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("svg", {
    style: {
      overflow: 'visible'
    },
    className: "w-full h-full",
    fillOpacity: "0",
    stroke: selected.saved ? '#FF5A5F' : '#484848',
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium',
      color: "".concat(selected.saved ? '#FF5A5F' : '#484848')
    },
    className: "text-2xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "Saved"))), __jsx("div", {
    className: "flex flex-col items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("svg", {
    style: {
      overflow: 'visible'
    },
    className: "w-full h-full",
    fillOpacity: "0",
    stroke: selected.login ? '#FF5A5F' : '#484848',
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10.5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M4.6 19.2c-.1-1.4 1.7-2.9 5.4-4.5-1-1-1.4-1.7-1.4-3.7S9 6.5 12 6.5s3.5 2.4 3.4 4.5c0 2.1-.4 2.7-1.4 3.8 5.1 2.1 5.4 3.4 5.4 4.4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium',
      color: "".concat(selected.login ? '#FF5A5F' : '#484848')
    },
    className: "text-2xs text-red-550",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Login"))))));
};

/***/ })

})
//# sourceMappingURL=index.js.28b76ce5e9142b569eee.hot-update.js.map