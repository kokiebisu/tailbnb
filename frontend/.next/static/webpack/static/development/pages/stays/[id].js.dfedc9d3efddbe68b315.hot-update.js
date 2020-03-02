webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/pages/stays/functions/CheckInCard.tsx":
/*!***************************************************!*\
  !*** ./src/pages/stays/functions/CheckInCard.tsx ***!
  \***************************************************/
/*! exports provided: CheckInCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInCard", function() { return CheckInCard; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/functions/CheckInCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var CheckInCard = function CheckInCard(_ref) {
  var loading = _ref.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loaded = _useState[0],
      setLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      length = _useState2[0],
      setLength = _useState2[1];

  function sleep(ms) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  var setSleep = function setSleep(seconds) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function setSleep$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sleep(seconds));

          case 2:
            setLoaded(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  setSleep(5000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, length ? __jsx("div", {
    className: "lg:w-5/12 lg:h-100r",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "w-full mx-5 items-center flex lg:flex-col justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-start w-full mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: 300,
    height: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })) : __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-md lg:w-full py-5 lg:text-2xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Add dates for prices"), loaded ? __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex justify-center px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#ffffff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })) : __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Check Availability")))) : __jsx("div", {
    className: "lg:w-5/12 lg:h-80v",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "w-full mx-5 items-center flex lg:flex-col justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-start w-full mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: 300,
    height: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })) : __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-md lg:w-full py-5 lg:text-2xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Add dates for prices"), loaded ? __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex justify-center px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#ffffff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })) : __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Check Availability")))));
};

/***/ })

})
//# sourceMappingURL=[id].js.dfedc9d3efddbe68b315.hot-update.js.map