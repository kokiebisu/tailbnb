webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/components/containers/Marker.jsx":
/*!**********************************************!*\
  !*** ./src/components/containers/Marker.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Marker.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var locationmarker = __webpack_require__(/*! ../../../public/img/high/location-pointer.png */ "./public/img/high/location-pointer.png");

var Marker = function Marker(_ref) {
  var name = _ref.name,
      id = _ref.id;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, innerWidth > 640 ? __jsx("div", {
    className: "flex items-center justify-center rounded-full bg-gray-850 w-14 h-14 cursor-pointer",
    title: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    style: {
      top: 2
    },
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    className: "w-full h-full",
    src: locationmarker,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))) : __jsx("div", {
    style: {
      opacity: 0.1
    },
    className: "flex items-center justify-center rounded-full border-2 bg-gray-750 border-2 border-black w-14 h-14 cursor-pointer",
    title: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Marker);

/***/ })

})
//# sourceMappingURL=[id].js.381b8158fda7e9d9069e.hot-update.js.map