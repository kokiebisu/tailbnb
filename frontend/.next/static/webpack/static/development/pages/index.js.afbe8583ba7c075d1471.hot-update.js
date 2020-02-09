webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/TopRated.js":
/*!***********************************************!*\
  !*** ./src/components/containers/TopRated.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _cards_TopRatedCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/TopRatedCard */ "./src/components/cards/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/high/experience1.jpg */ "./public/img/high/experience1.jpg");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/high/experience2.jpg */ "./public/img/high/experience2.jpg");
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/high/experience3.jpg */ "./public/img/high/experience3.jpg");
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/img/high/experience4.jpg */ "./public/img/high/experience4.jpg");
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/img/low/experience1-low.jpg */ "./public/img/low/experience1-low.jpg");
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/img/low/experience2-low.jpg */ "./public/img/low/experience2-low.jpg");
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/img/low/experience3-low.jpg */ "./public/img/low/experience3-low.jpg");
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/img/low/experience4-low.jpg */ "./public/img/low/experience4-low.jpg");
/* harmony import */ var _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_12__);


 // Components


 // Images
// High Resolution




 // Low Resolution





const experiencedata = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      country
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(experiencedata);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`; // const toprateds = [
  //   {
  //     img: experience1,
  //     imglow: experience1low,
  //     location: 'Italy',
  //     title: 'Luca & Lorenzo, cooking in Chianti hills',
  //     price: 172,
  //     reviews: 1765
  //   },
  //   {
  //     img: experience2,
  //     imglow: experience2low,
  //     location: 'Italy',
  //     title: 'Truffle experience Rome',
  //     price: 148,
  //     reviews: 621
  //   },
  //   {
  //     img: experience3,
  //     imglow: experience3low,
  //     location: 'Japan',
  //     title: 'Feeling Samurai Soul',
  //     price: 119,
  //     reviews: 1047
  //   },
  //   {
  //     img: experience4,
  //     imglow: experience4low,
  //     location: 'Italy',
  //     title: 'Lisbon best flavors',
  //     price: 90,
  //     reviews: 3733
  //   }
  // ];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full grid"
  }, data.experiencedata.map(({
    id,
    title,
    cost,
    ratings,
    reviews,
    country
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_TopRatedCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      img: _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      imglow: _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
      title: title,
      cost: cost,
      ratings: ratings,
      reviews: reviews,
      country: country
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Show all experiences"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.afbe8583ba7c075d1471.hot-update.js.map