webpackHotUpdate("static/development/pages/page/2.js",{

/***/ "./src/components/functions/Arrow.jsx":
/*!********************************************!*\
  !*** ./src/components/functions/Arrow.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/Arrow.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  ", "}\n  height: 50px;\n  width: 50px;\n  justify-conent: center;\n  background: white;\n  border-radius: 50%;\n  cursor: pointer;\n  align-items: center;\n  transition: transform ease-in 0.1s;\n  &:hover {\n    transform: scale(1.1);\n  }\n  img {\n    transform: translateX(", "px);\n    &:focus {\n      outline: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      handleClick = _ref.handleClick;

  __jsx(Div, {
    direction: direction,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, direction === 'right' ? __jsx("img", {
    src: rightArrow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }) : __jsx("img", {
    src: leftArrow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

var Div = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return direction === 'right' ? 'right: 25px' : 'left: 25px';
}, direction === 'left' ? '-2' : '2');
/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ })

})
//# sourceMappingURL=2.js.e47c9208e24d23616d6d.hot-update.js.map