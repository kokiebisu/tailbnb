webpackHotUpdate("static/development/pages/page/two.js",{

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
/* harmony import */ var _functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/FeaturedCard */ "./src/components/functions/FeaturedCard.tsx");
/* harmony import */ var _wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.tsx");


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
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var featureds = [{
    img: featured1,
    verified: 940,
    description: 'Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels',
    pattern: 1
  }, {
    img: featured2,
    verified: 300,
    description: 'Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.',
    pattern: 2
  }, {
    img: featured3,
    verified: 290,
    description: 'Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design',
    pattern: 3
  }];
  setSleep(3000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_4__["SectionOverflow"], {
    title: "Featured Airbnb Plus destinations",
    phrase: "Browse beautiful places to stay with all the comforts of home, plus more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "grid grid-cols-3 gap-4 not-sr-only flex scrollable sm:inset-x-0 flex items-start justify-start py-2 min-w-256 rounded-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, featureds.map(function (featured) {
    return __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(_functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__["FeaturedCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featured, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })));
  })))))));
};

/***/ })

})
//# sourceMappingURL=two.js.15a34269c96291ae5518.hot-update.js.map