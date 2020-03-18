webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/components/containers/MapContainer.js":
/*!***************************************************!*\
  !*** ./src/components/containers/MapContainer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/MapContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var AnyReactComponent = function AnyReactComponent(_ref) {
  var text = _ref.text;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, text);
};

var SimpleMap = function SimpleMap(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lat: 11.0168,
    lng: 76.9558
  }),
      center = _useState[0],
      setCenter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(11),
      zoom = _useState2[0],
      setZoom = _useState2[1];

  return __jsx("div", {
    style: {
      height: '100%',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrayURLKeys: {
      key: 'AIzaSyCIOOh3HYHodLXVbCxW0tL_Nl-y_N-IzrY'
    },
    defaultCenter: center,
    defaultZoom: zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(Marker, {
    lat: 11.0168,
    lng: 76.9558,
    name: "My Marker",
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleMap);

/***/ })

})
//# sourceMappingURL=[id].js.dd1830e61a9257480300.hot-update.js.map