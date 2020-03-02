webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/components/presentational/CharacteristicCard.tsx":
/*!**************************************************************!*\
  !*** ./src/components/presentational/CharacteristicCard.tsx ***!
  \**************************************************************/
/*! exports provided: CharacteristicCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacteristicCard", function() { return CharacteristicCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/CharacteristicCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

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




var CharacteristicCard = function CharacteristicCard(_ref) {
  var type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      guestnumber = _ref.guestnumber,
      hostName = _ref.hostName,
      percentage = _ref.percentage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loaded = _useState[0],
      setLoaded = _useState[1];

  function sleep(ms) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  var setSkeleton = function setSkeleton(seconds) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function setSkeleton$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(sleep(seconds));

          case 2:
            setLoaded(true);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  setSkeleton(4000);

  var renderIcon = function renderIcon(type) {
    if (type === 'home') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, loaded ? __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3",
        viewBox: "0 0 512.001 512.001",
        style: {
          fill: '#484848'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("path", {
        d: "M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886 c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721 c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337 c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697 c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }))), __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("path", {
        d: "M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })));
    } else if (type === 'clean') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, loaded ? __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("path", {
        d: "M407.335,74.217l-29.654-44.481C365.295,11.159,344.445,0,322.116,0H207.595h-50.087c-9.22,0-16.696,7.475-16.696,16.696 v33.391c0,9.22,7.475,16.696,16.696,16.696H190.9v16.696c0,17.065-6.653,33.12-18.717,45.195l-9.783,9.783 c-6.521,6.521-6.521,17.087,0,23.609c3.261,3.261,7.533,4.892,11.804,4.892s8.544-1.631,11.804-4.892l9.794-9.783 c14.369-14.387,23.663-32.48,27.04-52.108h1.448c18.442,0,33.391,14.949,33.391,33.391v33.391h-5.564 c-27.619,0-50.087,22.468-50.087,50.087v66.783c0,9.206-7.49,16.696-16.696,16.696h-33.391c-27.619,0-50.087,22.468-50.087,50.087 v16.696v94.609c0,27.619,22.468,50.087,50.087,50.087h200.348c27.619,0,50.087-22.468,50.087-50.087v-94.609V217.043 c0-27.619-22.468-50.087-50.087-50.087h-27.826v-33.391c0-18.442,14.949-33.391,33.391-33.391h35.587 c6.163,0,11.804-3.38,14.718-8.826C411.074,85.912,410.759,79.348,407.335,74.217z M268.813,367.304H135.248v-16.696 c0-9.206,7.49-16.696,16.696-16.696h33.391c27.619,0,50.087-22.468,50.087-50.087v-66.783c0-9.206,7.49-16.696,16.696-16.696 h16.696V367.304z M352.291,200.348c9.206,0,16.696,7.49,16.696,16.696v150.261h-66.783V200.348H352.291z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })));
    } else if (type === 'superhost') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, loaded ? __jsx("svg", {
        className: "h-3 w-3",
        viewBox: "0 0 511.999 511.999",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("g", {
        clipRule: "evenodd",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("path", {
        d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), __jsx("path", {
        d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), __jsx("path", {
        d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), __jsx("path", {
        d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })));
    } else if (type === 'location') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, loaded ? __jsx("svg", {
        className: "h-3 w-3",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("path", {
        d: "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })));
    }
  };

  return __jsx("div", {
    className: "flex items-start justify-start my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingTop: 5
    },
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, renderIcon(type)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, loaded ? __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, hostName, " ", title) : __jsx("div", {
    className: "w-28p lg:w-15p h-3 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })), loaded ? __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, guestnumber ? guestnumber : null, percentage ? "".concat(percentage, "%") : null, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, " "), description) : __jsx("div", {
    className: "w-60v h-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }))));
};
var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var SSkeletonPulse1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(SSkeletonPulse)(_templateObject2());

/***/ })

})
//# sourceMappingURL=[id].js.ca7a10d4106e16ff663d.hot-update.js.map