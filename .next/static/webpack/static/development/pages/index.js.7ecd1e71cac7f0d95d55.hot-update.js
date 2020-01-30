webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StayCard.js":
/*!********************************!*\
  !*** ./components/StayCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/airbnb2020/components/StayCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var type = _ref.type,
      img = _ref.img,
      location = _ref.location,
      title = _ref.title,
      price = _ref.price;

  var renderhost = function renderhost() {
    if (type === 'normal') {
      return __jsx("p", {
        className: "text-sm my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, location);
    } else if (type === 'superhost') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
        className: "uppercase border border-gray-800 rounded font-semibold px-1 mt-1 text-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, type), __jsx("p", {
        className: "ml-2 text-sm my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, location));
    } else if (type === 'plus') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
        className: "px-1 rounded text-white uppercase tracking-wide text-xs font-semibold bg-pink-800",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, type), __jsx("p", {
        className: "ml-2 text-sm my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, location));
    }

    console.log(type);
  };

  return __jsx("div", {
    className: "lg:w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    className: "rounded",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, renderhost()), __jsx("div", {
    className: "flex items-center justify-center flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), __jsx("p", {
    className: "pl-1 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "4.71"))), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, title), __jsx("p", {
    className: "tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "$", price, " CAD"), "/night"));
});

/***/ })

})
//# sourceMappingURL=index.js.7ecd1e71cac7f0d95d55.hot-update.js.map