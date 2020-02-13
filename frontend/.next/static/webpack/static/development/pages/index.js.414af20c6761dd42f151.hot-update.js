webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Explore.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Explore.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_ExploreCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/ExploreCard */ "./src/components/presentational/ExploreCard.js");
/* harmony import */ var _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/explore1.jpg */ "./public/img/high/explore1.jpg");
/* harmony import */ var _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/high/explore2.jpg */ "./public/img/high/explore2.jpg");
/* harmony import */ var _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/high/explore3.jpg */ "./public/img/high/explore3.jpg");
/* harmony import */ var _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/low/explore1-low.jpg */ "./public/img/low/explore1-low.jpg");
/* harmony import */ var _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/low/explore2-low.jpg */ "./public/img/low/explore2-low.jpg");
/* harmony import */ var _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/low/explore3-low.jpg */ "./public/img/low/explore3-low.jpg");
/* harmony import */ var _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7__);
 // Components

 // Images
// High Resolution



 // Low Resolution




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const explores = [{
    img: _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    imglow: _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: 'Stays'
  }, {
    img: _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    title: 'Experiences'
  }, {
    img: _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    title: 'Adventures'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full scroller"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full"
  }, explores.map(({
    img,
    imglow,
    title
  }, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-32 mr-4 sm:w-1/3 cursor-pointer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_ExploreCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      id: index,
      img: img,
      imglow: imglow,
      title: title
    }));
  })))));
});

/***/ }),

/***/ "./src/components/containers/Popular.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Popular.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/Location */ "./src/components/presentational/Location.js");
 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const locations = [{
    location: 'San Francisco',
    price: 216
  }, {
    location: 'Los Angeles',
    price: 213
  }, {
    location: 'New York',
    price: 159
  }, {
    location: 'Seattle',
    price: 134
  }, {
    location: 'Denver',
    price: 128
  }, {
    location: 'Washington DC',
    price: 166
  }, {
    location: 'Phoenix',
    price: 232
  }, {
    location: 'Austin',
    price: 242
  }, {
    location: 'Houston',
    price: 351
  }, {
    location: 'New Orleans',
    price: 210
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-start w-full"
  }, locations.map(({
    location,
    price
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
      location: location,
      price: price
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.414af20c6761dd42f151.hot-update.js.map