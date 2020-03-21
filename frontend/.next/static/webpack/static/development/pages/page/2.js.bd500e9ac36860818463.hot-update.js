webpackHotUpdate("static/development/pages/page/2.js",{

/***/ "./src/components/containers/ThreeColumn.jsx":
/*!***************************************************!*\
  !*** ./src/components/containers/ThreeColumn.jsx ***!
  \***************************************************/
/*! exports provided: ThreeColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumn", function() { return ThreeColumn; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_ThreeColumnCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/ThreeColumnCard */ "./src/components/functions/ThreeColumnCard.jsx");
/* harmony import */ var _wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/ThreeColumn.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // Images

var featured1 = __webpack_require__(/*! ../../../public/img/high/featured1.jpg */ "./public/img/high/featured1.jpg"); // Util


 // Components

 // Wrapper



var ThreeColumn = function ThreeColumn(_ref) {
  var sectionTitle = _ref.sectionTitle,
      sectionDescription = _ref.sectionDescription,
      contents = _ref.contents;
  // const [loading, setLoading] = useState(true);
  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
  // const setSleep = async (seconds) => {
  //   await sleep(seconds);
  //   setLoading(false);
  // };
  // setSleep(5000);
  var loading = true;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_5__["SectionOverflow"], {
    title: sectionTitle,
    phrase: sectionDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "grid grid-cols-3 gap-4 py-2 rounded-xl min-w-192 md:w-full h-72",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_3__["RenderSkeletonHorizontal"])(3)) : __jsx("div", {
    className: "grid grid-cols-3 gap-4 scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl min-w-192 md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, contents.map(function (content) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: cuid__WEBPACK_IMPORTED_MODULE_6___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(_functions_ThreeColumnCard__WEBPACK_IMPORTED_MODULE_4__["ThreeColumnCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }))));
  })))))));
};

/***/ }),

/***/ "./src/util/RenderSkeleton.js":
/*!************************************!*\
  !*** ./src/util/RenderSkeleton.js ***!
  \************************************/
/*! exports provided: RenderSkeletonVertical, RenderSkeletonHorizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderSkeletonVertical", function() { return RenderSkeletonVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderSkeletonHorizontal", function() { return RenderSkeletonHorizontal; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/util/RenderSkeleton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-radius: 0.8rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-radius: 0.3rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);\n  background-size: 400% 400%;\n  animation: pulse 1.2s ease-in-out infinite;\n  @keyframes pulse {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -135% 0%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var RenderSkeletonVertical = function RenderSkeletonVertical(number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-full mr-3 mb-3 rounded mb-16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(SSkeletonPulseVertical, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "w-full mb-3 h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(SSkeletonPulseVertical, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })), __jsx("div", {
      className: "w-80p h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(SSkeletonPulseVertical, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }))));
  }

  return content;
};
var RenderSkeletonHorizontal = function RenderSkeletonHorizontal(number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-full mr-3 mb-3 rounded mb-16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(SSkeletonPulseHorizontal, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("div", {
      className: "w-full mb-3 h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(SSkeletonPulseHorizontal, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx("div", {
      className: "w-80p h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(SSkeletonPulseHorizontal, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }))));
  }

  return content;
};
var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var SSkeletonPulseVertical = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(SSkeletonPulse)(_templateObject2());
var SSkeletonPulseHorizontal = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(SSkeletonPulse)(_templateObject3());

/***/ })

})
//# sourceMappingURL=2.js.bd500e9ac36860818463.hot-update.js.map