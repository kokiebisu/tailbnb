webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _cards_AdventureCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/AdventureCard */ "./src/components/cards/AdventureCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/high/adventures1.jpg */ "./public/img/high/adventures1.jpg");
/* harmony import */ var _public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/high/adventures2.jpg */ "./public/img/high/adventures2.jpg");
/* harmony import */ var _public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/high/adventures3.jpg */ "./public/img/high/adventures3.jpg");
/* harmony import */ var _public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/img/high/adventures4.jpg */ "./public/img/high/adventures4.jpg");
/* harmony import */ var _public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/img/low/adventures1-low.jpg */ "./public/img/low/adventures1-low.jpg");
/* harmony import */ var _public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/img/low/adventures2-low.jpg */ "./public/img/low/adventures2-low.jpg");
/* harmony import */ var _public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/img/low/adventures3-low.jpg */ "./public/img/low/adventures3-low.jpg");
/* harmony import */ var _public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/img/low/adventures4-low.jpg */ "./public/img/low/adventures4-low.jpg");
/* harmony import */ var _public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_12__);


 // Component


 // Images
// High Resolution




 // Low Resolution





const adventuredata = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    adventures {
      id
      title
      period
      cost
      country
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(adventuredata);
  const adventures = [{
    img: _public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    imglow: _public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    location: 'Norway',
    title: '2 Nights PACKAGE ALL Inclusive',
    price: 841,
    days: 3
  }, {
    img: _public_img_high_adventures2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    imglow: _public_img_low_adventures2_low_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    location: 'Indonesia',
    title: 'Snorkeling and hiking in West Sumatra',
    price: 249,
    days: 2
  }, {
    img: _public_img_high_adventures3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    imglow: _public_img_low_adventures3_low_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    location: 'Nepal',
    title: 'Trek to the lower Everest region',
    price: 1745,
    days: 11
  }, {
    img: _public_img_high_adventures4_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    imglow: _public_img_low_adventures4_low_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    location: 'Morocco',
    title: 'Active Adventure & Stay with Locals',
    price: 416,
    days: 4
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, adventures.map(({
    id,
    country,
    title,
    cost,
    period
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_AdventureCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      img: _public_img_high_adventures1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      imglow: _public_img_low_adventures1_low_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
      country: country,
      title: title,
      cost: cost,
      period: period
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Show all adventures"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.ab76ecb665994ffa438a.hot-update.js.map