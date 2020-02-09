webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cards/TopRatedCard.js":
/*!**********************************************!*\
  !*** ./src/components/cards/TopRatedCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-progressive-image */ "./node_modules/react-lazy-progressive-image/lib/index.js");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  id,
  img,
  imglow,
  location,
  title,
  price,
  reviews
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
    className: "my-1"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From $", price, "/person"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-1 text-sm"
  }, "4.71"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-650 text-sm"
  }, "\xA0 (", reviews, ")")));
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, data.adventures.map(({
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

/***/ }),

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
/* harmony import */ var _cards_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/TopRatedCard */ "./src/components/cards/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/high/experience1.jpg */ "./public/img/high/experience1.jpg");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/high/experience2.jpg */ "./public/img/high/experience2.jpg");
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/high/experience3.jpg */ "./public/img/high/experience3.jpg");
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/high/experience4.jpg */ "./public/img/high/experience4.jpg");
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/low/experience1-low.jpg */ "./public/img/low/experience1-low.jpg");
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/img/low/experience2-low.jpg */ "./public/img/low/experience2-low.jpg");
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/img/low/experience3-low.jpg */ "./public/img/low/experience3-low.jpg");
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/img/low/experience4-low.jpg */ "./public/img/low/experience4-low.jpg");
/* harmony import */ var _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_10__);
 // Components


 // Images
// High Resolution




 // Low Resolution





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const toprateds = [{
    img: _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: 'Italy',
    title: 'Luca & Lorenzo, cooking in Chianti hills',
    price: 172,
    reviews: 1765
  }, {
    img: _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    location: 'Italy',
    title: 'Truffle experience Rome',
    price: 148,
    reviews: 621
  }, {
    img: _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    imglow: _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    location: 'Japan',
    title: 'Feeling Samurai Soul',
    price: 119,
    reviews: 1047
  }, {
    img: _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    imglow: _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    location: 'Italy',
    title: 'Lisbon best flavors',
    price: 90,
    reviews: 3733
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full grid"
  }, toprateds.map(({
    id,
    img,
    imglow,
    location,
    title,
    price,
    reviews
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      img: img,
      imglow: imglow,
      location: location,
      title: title,
      price: price,
      reviews: reviews
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all experiences"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.2477db9ed31e6df01905.hot-update.js.map