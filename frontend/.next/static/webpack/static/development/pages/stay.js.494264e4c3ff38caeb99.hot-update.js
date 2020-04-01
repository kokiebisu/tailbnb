webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./src/components/functions/Travel.tsx":
/*!*********************************************!*\
  !*** ./src/components/functions/Travel.tsx ***!
  \*********************************************/
/*! exports provided: Travel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel", function() { return Travel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_TravelCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/functions/TravelCard */ "./src/components/functions/TravelCard.tsx");
/* harmony import */ var _wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapper/ExploreSectionOverflow */ "./src/components/wrapper/ExploreSectionOverflow.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/Travel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Wrapper

 // Image

var sydney = __webpack_require__(/*! ../../../public/img/high/sydney.jpg */ "./public/img/high/sydney.jpg");

var capetown = __webpack_require__(/*! ../../../public/img/high/capetown.jpg */ "./public/img/high/capetown.jpg");

var Travel = function Travel() {
  var countries = [{
    img: sydney,
    imglow: sydney,
    location: 'Sydney'
  }, {
    img: capetown,
    imglow: capetown,
    location: 'Cape Town'
  }, {
    img: explore3,
    imglow: explore3low,
    location: 'Buenos Aires'
  }, {
    img: explore1,
    imglow: explore1low,
    location: 'Seoul'
  }, {
    img: explore2,
    imglow: explore2low,
    location: 'Barcelona'
  }, {
    img: explore3,
    imglow: explore3low,
    location: 'Los Angeles'
  }];
  return __jsx(_wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__["ExploreSectionOverflow"], {
    title: "Travel the world with Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, countries.map(function (_ref, index) {
    var img = _ref.img,
        imglow = _ref.imglow,
        location = _ref.location;
    return __jsx("div", {
      className: "min-w-32 w-full mr-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_components_functions_TravelCard__WEBPACK_IMPORTED_MODULE_1__["TravelCard"], {
      key: index,
      img: img,
      imglow: imglow,
      location: location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }));
  }))))));
};

/***/ })

})
//# sourceMappingURL=stay.js.494264e4c3ff38caeb99.hot-update.js.map