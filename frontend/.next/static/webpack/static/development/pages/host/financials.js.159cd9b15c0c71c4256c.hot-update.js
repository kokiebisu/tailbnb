webpackHotUpdate("static/development/pages/host/financials.js",{

/***/ "./src/components/host/functions/Table.jsx":
/*!*************************************************!*\
  !*** ./src/components/host/functions/Table.jsx ***!
  \*************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/gsap-core */ "./node_modules/gsap/gsap-core.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/host/functions/Table.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var renderString = function renderString(text) {
  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, text);
};

var renderBoolean = function renderBoolean(truefalse) {
  if (truefalse) {
    __jsx("div", {
      className: "h-4 w-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("svg", {
      style: {
        fill: '#008489'
      },
      className: "w-full h-full",
      viewBox: "0 0 24 24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("path", {
      d: "m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  } else {
    __jsx("div", {
      className: "h-4 w-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("svg", {
      viewBox: "0 0 24 24",
      style: {
        fill: '#484848'
      },
      className: "w-full h-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("path", {
      d: "m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })));
  }
};

var Table = function Table(_ref) {
  var head = _ref.head,
      body = _ref.body;
  console.log('body', body);
  return __jsx("div", {
    className: "w-full mx-auto relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    style: {
      top: 32
    },
    id: "tableSmallScreen",
    className: "w-48 absolute bg-white w-40 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, head.column1)), body.map(function (row) {
    return __jsx("div", {
      style: {
        height: 105
      },
      className: "flex items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-gray-750 text-sm py-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, row.column1)));
  })), __jsx("div", {
    className: "overflow-x-scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("table", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "relative z-0 w-full table-fixed text-gray-750 my-8 top-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("td", {
    className: "w-48 md:w-2/5 pr-4 py-5 text-2xl text-left border-b border-gray-300",
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, head.column1), __jsx("td", {
    id: "tableShadowTop",
    className: "w-32  md:w-1/5 border-b border-gray-300 text-center text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, head.column2), __jsx("td", {
    className: "w-32 md:w-1/5 border-b border-gray-300 text-center text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, head.column3), __jsx("td", {
    className: "w-32 md:w-1/5 border-b border-gray-300 text-center text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, head.column4)), body.map(function (row) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("td", {
      className: "h-24 md:py-8 text-sm border-b border-gray-300 text-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, row.column1), __jsx("td", {
      id: "tableShadowMiddle",
      className: "h-24 md:py-8 text-sm border-b border-gray-300 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("div", {
      className: "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, typeof row.column2 === 'string' ? renderString(row.column2) : renderBoolean(row.column2))), __jsx("td", {
      className: "h-24 md:py-8 text-sm border-b border-gray-300 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, typeof row.column3 === 'boolean' ? renderString(row.column3) : renderBoolean(row.column3))), __jsx("td", {
      className: "h-24 md:py-8 text-sm border-b border-gray-300 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      className: "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, typeof row.column4 === 'boolean' ? renderBoolean(row.column4) : renderString(row.column4)))));
  })))), __jsx("div", {
    className: "mt-3 mb-32 lg:my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Last updated June 2018")));
};

/***/ })

})
//# sourceMappingURL=financials.js.159cd9b15c0c71c4256c.hot-update.js.map