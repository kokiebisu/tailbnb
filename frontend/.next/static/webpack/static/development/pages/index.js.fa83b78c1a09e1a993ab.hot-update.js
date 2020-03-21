webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Plus.tsx":
/*!********************************************!*\
  !*** ./src/components/containers/Plus.tsx ***!
  \********************************************/
/*! exports provided: Plus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_PlusCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/PlusCard */ "./src/components/functions/PlusCard.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Plus.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

 // import { RenderSkeletonHorizontal } from '../../util/RenderSkeleton';
// import styled from 'styled-components';
// Components

 // Wrapper

 // Images
// High Resolution

var img1 = __webpack_require__(/*! ../../../public/img/high/plus-1.jpg */ "./public/img/high/plus-1.jpg");

var Plus = function Plus() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  var setSleep = function setSleep(seconds) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function setSleep$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sleep(seconds));

          case 2:
            setLoading(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  setSleep(3000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    title: "Airbnb Plus places to stay",
    phrase: "A selection of places to stay verified for quality and design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_functions_PlusCard__WEBPACK_IMPORTED_MODULE_2__["PlusCard"], {
    img: img1,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.fa83b78c1a09e1a993ab.hot-update.js.map