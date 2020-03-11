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
  img: explore1,
  title: 'Stay'
}, {
  img: explore2,
  title: 'Experience'
}, {
  img: explore3,
  title: 'Adventure'
}];
var Explore = function Explore() {
  return __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_3__["SectionOverflow"], {
    title: "Explore Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, explores.map(function (_ref, index) {
    var img = _ref.img,
        title = _ref.title;

    if (index == explores.length - 1) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: cuid__WEBPACK_IMPORTED_MODULE_1___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "w-32 sm:w-1/3 cursor-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_functions_ExploreCard__WEBPACK_IMPORTED_MODULE_2__["ExploreCard"], {
        img: img,
        title: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: cuid__WEBPACK_IMPORTED_MODULE_1___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("div", {
      className: "w-32 mr-4 sm:w-1/3 cursor-pointer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(_functions_ExploreCard__WEBPACK_IMPORTED_MODULE_2__["ExploreCard"], {
      img: img,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })));
  }))))));
};

/***/ })

})
//# sourceMappingURL=index.js.49e5232cadc5687b6f06.hot-update.js.map