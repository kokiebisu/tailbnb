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
    location: 'Cape Town',
    verified: 940,
    description: 'Find dockside lofts, sunny studios, and more verified places to stay in a city that stuns from sky to sea.',
    type: 1
  }, {
    img: featured2,
    location: 'Sydney',
    verified: 390,
    description: 'Browse verified places to stay with artful style, in a city that wows from beach to bushland.',
    type: 2
  }, {
    img: featured3,
    location: 'Chicago',
    verified: 210,
    description: "Explore Chicago's stunning architecture from the inside-in homes verified for quality and design.",
    type: 3
  }, {
    img: featured1,
    location: 'San Francisco',
    verified: 290,
    description: 'Discover Victorian flats, SoMa lofts,, and more verified places to stay in a city where invention meets counterculture.',
    type: 4
  }, {
    img: featured2,
    location: 'Austin',
    verified: 400,
    description: 'Come for the music, stay for the BBQ, and rest easy in places to stay verified for quality and comfort.',
    type: 5
  }, {
    img: featured3,
    location: 'Melbourne',
    verified: 440,
    description: 'Book sunny lofts, beachfront flats, and more verified places to stay in a city with world-class coffee and street art.',
    type: 6
  }, {
    img: featured1,
    location: 'London',
    verified: 550,
    description: 'Explore London from secluded garden flats and luminous lofts—all verified for quality and design.',
    type: 7
  }, {
    img: featured2,
    location: 'Los Angeles',
    verified: 930,
    description: 'Find beachside bungalows, mid-century modern cottages, and more verified places to stay in the City of Angels.',
    type: 8
  }];
  setSleep(3000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_4__["SectionOverflow"], {
    title: "Featured Airbnb Plus destinations",
    phrase: "Browse beautiful places to stay with all the comforts of home, plus more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "grid grid-cols-3 gap-4 not-sr-only flex scrollable sm:inset-x-0 flex items-start justify-start py-2 min-w-256 rounded-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, featureds.map(function (featured) {
    return __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(_functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__["FeaturedCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featured, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })));
  })))))));
};

/***/ })

})
//# sourceMappingURL=two.js.ecd1b844d3b3115d841e.hot-update.js.map