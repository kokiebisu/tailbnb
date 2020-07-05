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
/* harmony import */ var _TravelCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TravelCard */ "./src/components/functions/TravelCard.tsx");
/* harmony import */ var _wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapper/ExploreSectionOverflow */ "./src/components/wrapper/ExploreSectionOverflow.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/components/functions/Travel.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Wrapper

 // Image

var sydney = __webpack_require__(/*! ../../../public/img/high/sydney.jpg */ "./public/img/high/sydney.jpg");

var capetown = __webpack_require__(/*! ../../../public/img/high/capetown.jpg */ "./public/img/high/capetown.jpg");

var buenosaires = __webpack_require__(/*! ../../../public/img/high/buenosaires.jpg */ "./public/img/high/buenosaires.jpg");

var seoul = __webpack_require__(/*! ../../../public/img/high/seoul.jpg */ "./public/img/high/seoul.jpg");

var barcelona = __webpack_require__(/*! ../../../public/img/high/barcelona.jpg */ "./public/img/high/barcelona.jpg");

var losangeles = __webpack_require__(/*! ../../../public/img/high/losangeles.jpg */ "./public/img/high/losangeles.jpg");

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
    img: buenosaires,
    imglow: buenosaires,
    location: 'Buenos Aires'
  }, {
    img: seoul,
    imglow: seoul,
    location: 'Seoul'
  }, {
    img: barcelona,
    imglow: barcelona,
    location: 'Barcelona'
  }, {
    img: losangeles,
    imglow: losangeles,
    location: 'Los Angeles'
  }];
  return __jsx(_wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__["ExploreSectionOverflow"], {
    title: "Travel the world with Airbnb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full scroller",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, countries.map(function (_ref, index) {
    var img = _ref.img,
        imglow = _ref.imglow,
        location = _ref.location;
    return __jsx("div", {
      key: index,
      className: "min-w-32 w-full mr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx(_TravelCard__WEBPACK_IMPORTED_MODULE_1__["TravelCard"], {
      img: img,
      imglow: imglow,
      location: location,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }));
  }))))));
};

/***/ })

})
//# sourceMappingURL=stay.js.b92d04792866efc4cbe4.hot-update.js.map