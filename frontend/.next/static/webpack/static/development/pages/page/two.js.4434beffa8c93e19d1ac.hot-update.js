webpackHotUpdate("static/development/pages/page/two.js",{

/***/ "./src/components/containers/Popular.tsx":
/*!***********************************************!*\
  !*** ./src/components/containers/Popular.tsx ***!
  \***********************************************/
/*! exports provided: Popular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popular", function() { return Popular; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/Location */ "./src/components/functions/Location.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Popular.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


 // Components

 // Wrapper



var Popular = function Popular() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  function sleep(ms) {
    return new Promise(function (resolve) {
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
            setLoading(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var locations = [{
    location: 'San Francisco',
    price: 216
  }, {
    location: 'Los Angeles',
    price: 213
  }, {
    location: 'New York',
    price: 159
  }, {
    location: 'Seattle',
    price: 134
  }, {
    location: 'Denver',
    price: 128
  }, {
    location: 'Washington DC',
    price: 166
  }, {
    location: 'Phoenix',
    price: 232
  }, {
    location: 'Austin',
    price: 242
  }, {
    location: 'Houston',
    price: 351
  }, {
    location: 'New Orleans',
    price: 210
  }];
  setSleep(5000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    title: "Popular destinations in the United States",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })) : __jsx("div", {
    className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 flex flex-wrap items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, locations.map(function (_ref, index) {
    var location = _ref.location,
        price = _ref.price;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: cuid__WEBPACK_IMPORTED_MODULE_5___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(_functions_Location__WEBPACK_IMPORTED_MODULE_3__["Location"], {
      key: index,
      location: location,
      price: price,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })));
  }))));
};

/***/ })

})
//# sourceMappingURL=two.js.4434beffa8c93e19d1ac.hot-update.js.map