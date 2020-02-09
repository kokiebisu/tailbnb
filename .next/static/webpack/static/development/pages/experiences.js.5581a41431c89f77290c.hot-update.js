webpackHotUpdate("static/development/pages/experiences.js",{

/***/ "./src/components/Hosts.js":
/*!*********************************!*\
  !*** ./src/components/Hosts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopRatedCard */ "./src/components/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/high/experience1.jpg */ "./public/img/high/experience1.jpg");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/high/experience2.jpg */ "./public/img/high/experience2.jpg");
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/high/experience3.jpg */ "./public/img/high/experience3.jpg");
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/high/experience4.jpg */ "./public/img/high/experience4.jpg");
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/low/experience1-low.jpg */ "./public/img/low/experience1-low.jpg");
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/img/low/experience2-low.jpg */ "./public/img/low/experience2-low.jpg");
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/img/low/experience3-low.jpg */ "./public/img/low/experience3-low.jpg");
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/img/low/experience4-low.jpg */ "./public/img/low/experience4-low.jpg");
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
    className: "flex items-start justify-start flex-wrap w-full"
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ }),

/***/ "./src/pages/experiences.js":
/*!**********************************!*\
  !*** ./src/pages/experiences.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _components_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SectionOverflow */ "./src/components/SectionOverflow.js");
/* harmony import */ var _components_ExploreHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExploreHeader */ "./src/components/ExploreHeader.js");
/* harmony import */ var _components_ExploreSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExploreSection */ "./src/components/ExploreSection.js");
/* harmony import */ var _components_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ExploreSectionOverflow */ "./src/components/ExploreSectionOverflow.js");
/* harmony import */ var _components_Experiences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Experiences */ "./src/components/Experiences.js");
/* harmony import */ var _components_Hosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hosts */ "./src/components/Hosts.js");
 // Wrapper








/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "Experiences"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-750 md:px-0 max-w-90% xl:px-0 mx-auto py-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-xs"
  }, "AIRBNB EXPERIENCES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 md:w-5/6 text-4xl"
  }, "One-of-a-kind activities hosted by locals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Experiences__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Meet hosts around the world"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hosts__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
});

/***/ })

})
//# sourceMappingURL=experiences.js.5581a41431c89f77290c.hot-update.js.map