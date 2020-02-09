webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cards/AdventureCard.js":
/*!***********************************************!*\
  !*** ./src/components/cards/AdventureCard.js ***!
  \***********************************************/
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
  location,
  title,
  price,
  days
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: img,
    placeholder: imglow
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full rounded-lg",
    src: src
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-xs my-2 font-semibold"
  }, location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1 w-5/6"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From $", price, " / person", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xB7 "), days, " days"));
});

/***/ }),

/***/ "./src/components/containers/Adventures.js":
/*!*************************************************!*\
  !*** ./src/components/containers/Adventures.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cards_AdventureCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/AdventureCard */ "./src/components/cards/AdventureCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/high/adventures1.jpg */ "./public/img/high/adventures1.jpg");
/* harmony import */ var _public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/high/adventures2.jpg */ "./public/img/high/adventures2.jpg");
/* harmony import */ var _public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/high/adventures3.jpg */ "./public/img/high/adventures3.jpg");
/* harmony import */ var _public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/high/adventures4.jpg */ "./public/img/high/adventures4.jpg");
/* harmony import */ var _public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/low/adventures1-low.jpg */ "./public/img/low/adventures1-low.jpg");
/* harmony import */ var _public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/img/low/adventures2-low.jpg */ "./public/img/low/adventures2-low.jpg");
/* harmony import */ var _public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/img/low/adventures3-low.jpg */ "./public/img/low/adventures3-low.jpg");
/* harmony import */ var _public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/img/low/adventures4-low.jpg */ "./public/img/low/adventures4-low.jpg");
/* harmony import */ var _public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_10__);
 // Component


 // Images
// High Resolution




 // Low Resolution





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const adventures = [{
    img: _public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: 'Norway',
    title: '2 Nights PACKAGE ALL Inclusive',
    price: 841,
    days: 3
  }, {
    img: _public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    location: 'Indonesia',
    title: 'Snorkeling and hiking in West Sumatra',
    price: 249,
    days: 2
  }, {
    img: _public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    imglow: _public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    location: 'Nepal',
    title: 'Trek to the lower Everest region',
    price: 1745,
    days: 11
  }, {
    img: _public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    imglow: _public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    location: 'Morocco',
    title: 'Active Adventure & Stay with Locals',
    price: 416,
    days: 4
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, adventures.map(({
    id,
    img,
    imglow,
    location,
    title,
    price,
    days
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_AdventureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      img: img,
      imglow: imglow,
      location: location,
      title: title,
      price: price,
      days: days
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all adventures"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.3c462c921ca0d65bc976.hot-update.js.map