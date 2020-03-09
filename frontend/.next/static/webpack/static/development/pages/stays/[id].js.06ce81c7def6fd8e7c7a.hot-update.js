webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/components/stays/functions/ImagePanel.tsx":
/*!*******************************************************!*\
  !*** ./src/components/stays/functions/ImagePanel.tsx ***!
  \*******************************************************/
/*! exports provided: ImagePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePanel", function() { return ImagePanel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/stays/functions/ImagePanel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: pulse 2.4s ease-in-out infinite;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: pulse 2.1s ease-in-out infinite;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: pulse 1.8s ease-in-out infinite;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: pulse 1.5s ease-in-out infinite;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: pulse 1.2s ease-in-out infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);\n  background-size: 400% 400%;\n  @keyframes pulse {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -135% 0%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ImagePanel = function ImagePanel(_ref) {
  var img1 = _ref.img1,
      img2 = _ref.img2,
      img3 = _ref.img3,
      img4 = _ref.img4,
      img5 = _ref.img5;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  function sleep(ms) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
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
            setLoading(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  setSleep(2000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "w-full max-w-6xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    id: "zoomwrapper",
    className: "w-full flex justify-start h-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "w-full lg:w-1/2 h-35v relative rounded border-r-4 border-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })) : __jsx("div", {
    className: "w-full lg:w-1/2 border-r-4 border-white relative bg-cover bg-no-repeat overflow-hidden  rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: img1,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("div", {
    className: "hidden lg:block w-1/2 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-b-4 border-r-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(SSkeletonPulse2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-b-4 border-r-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("img", {
    src: img2,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-b-4 border-r-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(SSkeletonPulse3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-b-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("img", {
    src: img3,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-t-4 border-r-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(SSkeletonPulse4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-t-4 border-r-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("img", {
    src: img4,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-t-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(SSkeletonPulse5, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-t-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("img", {
    src: img5,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))))))));
};
var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var SSkeletonPulse1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(SSkeletonPulse)(_templateObject2());
var SSkeletonPulse2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(SSkeletonPulse)(_templateObject3());
var SSkeletonPulse3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(SSkeletonPulse)(_templateObject4());
var SSkeletonPulse4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(SSkeletonPulse)(_templateObject5());
var SSkeletonPulse5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(SSkeletonPulse)(_templateObject6());

/***/ })

})
//# sourceMappingURL=[id].js.06ce81c7def6fd8e7c7a.hot-update.js.map