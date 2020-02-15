webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Stay.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Stay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_StayCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/StayCard */ "./src/components/presentational/StayCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
 // Component



/* harmony default export */ __webpack_exports__["default"] = (({
  data,
  loading
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start w-full"
  }, data.stays.map(({
    id,
    hostType,
    location,
    title,
    cost,
    ratings,
    img,
    imglow
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_StayCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      id: id,
      hostType: hostType,
      img: img,
      imglow: imglow,
      location: location,
      title: title,
      cost: cost,
      ratings: ratings
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show(2000+)"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.fa811003479382dcf5e6.hot-update.js.map