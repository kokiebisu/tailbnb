webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cards/FeaturedCard.js":
false,

/***/ "./src/components/containers/Featured.js":
/*!***********************************************!*\
  !*** ./src/components/containers/Featured.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/FeaturedCard */ "./src/components/presentational/FeaturedCard.js");
/* harmony import */ var _public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/featured1.jpg */ "./public/img/high/featured1.jpg");
/* harmony import */ var _public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/high/featured2.jpg */ "./public/img/high/featured2.jpg");
/* harmony import */ var _public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/high/featured3.jpg */ "./public/img/high/featured3.jpg");
/* harmony import */ var _public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/low/featured1-low.jpg */ "./public/img/low/featured1-low.jpg");
/* harmony import */ var _public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/low/featured2-low.jpg */ "./public/img/low/featured2-low.jpg");
/* harmony import */ var _public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/low/featured3-low.jpg */ "./public/img/low/featured3-low.jpg");
/* harmony import */ var _public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_7__);
 // Components

 // Images
// High Resolution



 // Low Resolution




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const featureds = [{
    img: _public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    imglow: _public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    verified: 940,
    description: 'Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
  }, {
    img: _public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    verified: 300,
    description: 'Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.'
  }, {
    img: _public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    verified: 290,
    description: 'Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full scroller"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-startpy-2 rounded-xl w-featured md:w-full"
  }, featureds.map(({
    id,
    img,
    imglow,
    verified,
    description
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-80 lg:w-1/3 pb-5 mr-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_FeaturedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      img: img,
      imglow: imglow,
      verified: verified,
      description: description
    }));
  }))))));
});

/***/ }),

/***/ "./src/components/presentational/FeaturedCard.js":
/*!*******************************************************!*\
  !*** ./src/components/presentational/FeaturedCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-progressive-image */ "./node_modules/react-lazy-progressive-image/lib/index.js");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  imglow,
  verified,
  description
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full w-64 sm:w-full bg-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: img,
    placeholder: imglow
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full rounded-xl",
    src: src,
    alt: "adventure1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-xs my-2 font-bold text-pink-700"
  }, verified, "+ Verified Stays")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "whitespace-normal my-1 text-sm tracking-wide"
  }, description)));
});

/***/ })

})
//# sourceMappingURL=index.js.b1d948915315c4baab8a.hot-update.js.map