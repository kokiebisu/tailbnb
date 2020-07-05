webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./src/util/RenderSkeleton.js":
/*!************************************!*\
  !*** ./src/util/RenderSkeleton.js ***!
  \************************************/
/*! exports provided: renderSkeletonVertical, renderSkeletonHorizontal, renderSkeletonThreeColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSkeletonVertical", function() { return renderSkeletonVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSkeletonHorizontal", function() { return renderSkeletonHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSkeletonThreeColumn", function() { return renderSkeletonThreeColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/util/RenderSkeleton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var renderSkeletonVertical = function renderSkeletonVertical(number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-full mr-3 mb-3 rounded h-64 md:h-104 py-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("div", {
      id: "skeleton-pulse--vertical",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "w-full mb-3 h-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "skeleton-pulse--vertical",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "w-80p h-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "skeleton-pulse--vertical",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }))));
  }

  return content;
};
var renderSkeletonHorizontal = function renderSkeletonHorizontal(number, withLine) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      key: i,
      className: "w-full mr-3 mb-3 rounded h-24 mb-16 md:h-40 lg:h-48 xl:h-56",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }), withLine ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "w-full mb-3 h-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "w-80p h-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }))) : null));
  }

  return content;
};
var renderSkeletonThreeColumn = function renderSkeletonThreeColumn(number, withLine) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-full mr-3 mb-3 rounded h-48 md:h-56 lg:h-64",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }), withLine ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "w-full mb-3 h-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "w-80p h-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }))) : null));
  }

  return content;
};

/***/ })

})
//# sourceMappingURL=stay.js.7f849d22343fc13ac7fe.hot-update.js.map