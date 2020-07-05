webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./src/components/containers/Hosts.tsx":
/*!*********************************************!*\
  !*** ./src/components/containers/Hosts.tsx ***!
  \*********************************************/
/*! exports provided: Hosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hosts", function() { return Hosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_HostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/HostCard */ "./src/components/functions/HostCard.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/components/containers/Hosts.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Components

 // Wrapper



var Hosts = function Hosts() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_3__["ExploreSection"], {
    title: "Meet hosts around the world",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 10,
    color: '#008489',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })) : __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, data && data.experiences.map(function (_ref) {
    var id = _ref.id,
        title = _ref.title,
        location = _ref.location,
        country = _ref.country,
        img = _ref.img;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: cuid__WEBPACK_IMPORTED_MODULE_4___default()(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx(_functions_HostCard__WEBPACK_IMPORTED_MODULE_2__["HostCard"], {
      key: id,
      title: title,
      img: img,
      location: location,
      country: country,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }
    })));
  }))));
};

/***/ })

})
//# sourceMappingURL=experience.js.9e75912f6461908af296.hot-update.js.map