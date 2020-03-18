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
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Marker */ "./src/components/containers/Marker.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/MapContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Map = function Map(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;

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
      lineNumber: 10
    },
    __self: this
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: 'AIzaSyCIOOh3HYHodLXVbCxW0tL_Nl-y_N-IzrY'
    },
    defaultCenter: center,
    defaultZoom: zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_Marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lat: lat,
    lng: lng,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=[id].js.005278f296b689f849c9.hot-update.js.map