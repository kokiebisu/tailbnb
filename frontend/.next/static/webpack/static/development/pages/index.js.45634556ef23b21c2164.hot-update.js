webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Featured.tsx":
/*!************************************************!*\
  !*** ./src/components/containers/Featured.tsx ***!
  \************************************************/
/*! exports provided: Featured */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Featured", function() { return Featured; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/FeaturedCard */ "./src/components/functions/FeaturedCard.tsx");
/* harmony import */ var _wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Featured.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // Components

 // Wrapper


 // Images
// High Resolution

var featured1 = __webpack_require__(/*! ../../../public/img/high/featured1.jpg */ "./public/img/high/featured1.jpg");

var featured2 = __webpack_require__(/*! ../../../public/img/high/featured2.jpg */ "./public/img/high/featured2.jpg");

var featured3 = __webpack_require__(/*! ../../../public/img/high/featured3.jpg */ "./public/img/high/featured3.jpg");

var Featured = function Featured() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  var setSleep = function setSleep(seconds) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function setSleep$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(sleep(seconds));

          case 2:
            setLoading(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var featureds = [{
    img: featured1,
    verified: 940,
    description: 'Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
  }, {
    img: featured2,
    verified: 300,
    description: 'Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.'
  }, {
    img: featured3,
    verified: 290,
    description: 'Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design'
  }];
  setSleep(3000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_5__["SectionOverflow"], {
    title: "Featured Airbnb Plus destinations",
    phrase: "Browse beautiful places to stay with all the comforts of home, plus more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })) : __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "grid grid-cols-3 gap-4 scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl min-w-256 md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, featureds.map(function (featured) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: cuid__WEBPACK_IMPORTED_MODULE_6___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_4__["FeaturedCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featured, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }))));
  })))))));
};

/***/ })

})
//# sourceMappingURL=index.js.45634556ef23b21c2164.hot-update.js.map