webpackHotUpdate("static/development/pages/page/2.js",{

/***/ "./src/util/RenderSkeleton.js":
/*!************************************!*\
  !*** ./src/util/RenderSkeleton.js ***!
  \************************************/
/*! exports provided: RenderSkeletonVertical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderSkeletonVertical", function() { return RenderSkeletonVertical; });
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
var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var SSkeletonPulseVertical = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(SSkeletonPulse)(_templateObject2());
var SSkeletonPulseHorizontal = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(SSkeletonPulse)(_templateObject3());

/***/ })

})
//# sourceMappingURL=2.js.adb63fb5311ec574d1b9.hot-update.js.map