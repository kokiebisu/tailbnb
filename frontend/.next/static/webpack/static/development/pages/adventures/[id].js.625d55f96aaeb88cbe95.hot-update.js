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
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/MapContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Map = function Map() {
  var GoogleMapExample = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(function (props) {
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
      defaultCenter: {
        lat: 38.8980647,
        lng: -77.0333818
      },
      defaultZoom: 13,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, props.isMarkerShown && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      positio: {
        lat: 38.8980647,
        lng: -77.0333818
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(GoogleMapExample, {
    containerElement: __jsx("div", {
      style: {
        height: "500px",
        width: "500px"
      },
      mapElement: __jsx("div", {
        style: {
          height: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=[id].js.625d55f96aaeb88cbe95.hot-update.js.map