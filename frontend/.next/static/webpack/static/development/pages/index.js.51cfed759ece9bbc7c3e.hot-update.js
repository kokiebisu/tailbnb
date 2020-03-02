webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Explore.tsx":
/*!***********************************************!*\
  !*** ./src/components/containers/Explore.tsx ***!
  \***********************************************/
/*! exports provided: Explore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Explore", function() { return Explore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_ExploreCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/ExploreCard */ "./src/components/functions/ExploreCard.tsx");
/* harmony import */ var _wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Explore.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Dependency

 // Components

 // Wrapper

 // Images
// High Resolution

var explore1 = __webpack_require__(/*! ../../../public/img/high/explore1.jpg */ "./public/img/high/explore1.jpg");

var explore2 = __webpack_require__(/*! ../../../public/img/high/explore2.jpg */ "./public/img/high/explore2.jpg");

var explore3 = __webpack_require__(/*! ../../../public/img/high/explore3.jpg */ "./public/img/high/explore3.jpg");

var explores = [{
  id: '1',
  img: explore1,
  title: 'Stay'
}, {
  id: '2',
  img: explore2,
  title: 'Experience'
}, {
  id: '3',
  img: explore3,
  title: 'Adventure'
}];
var Explore = function Explore() {
  return __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_3__["SectionOverflow"], {
    title: "Explore Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, console.log(cuid__WEBPACK_IMPORTED_MODULE_1___default()()), __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, explores.map(function (_ref) {
    var id = _ref.id,
        img = _ref.img,
        title = _ref.title;
    return __jsx("div", {
      className: "w-32 mr-4 sm:w-1/3 cursor-pointer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_functions_ExploreCard__WEBPACK_IMPORTED_MODULE_2__["ExploreCard"], {
      key: id,
      img: img,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  }))))));
};

/***/ })

})
//# sourceMappingURL=index.js.51cfed759ece9bbc7c3e.hot-update.js.map