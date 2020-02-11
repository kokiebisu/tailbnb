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
  country,
  title,
  cost,
  period
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
  }, country), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1 w-5/6"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From $", cost, " / person", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xB7 "), period, " days"));
});

/***/ }),

/***/ "./src/components/cards/PlusCard.js":
/*!******************************************!*\
  !*** ./src/components/cards/PlusCard.js ***!
  \******************************************/
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
  imglow
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: img,
    placeholder: imglow
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full h-64 bg-cover bg-no-repeat object-cover rounded",
    src: src
  })));
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


 // Component



const adventuredata = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    adventures {
      id
      title
      period
      cost
      country
      img
      imglow
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(adventuredata);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, data.adventures.map(({
    id,
    country,
    title,
    cost,
    period,
    img,
    imglow
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_AdventureCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      img: img,
      imglow: imglow,
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

/***/ "./src/components/containers/Plus.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Plus.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cards_PlusCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/PlusCard */ "./src/components/cards/PlusCard.js");
/* harmony import */ var _public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/plus-1.jpg */ "./public/img/high/plus-1.jpg");
/* harmony import */ var _public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/low/plus-1-low.jpg */ "./public/img/low/plus-1-low.jpg");
/* harmony import */ var _public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3__);
 // Components

 // Images
// High Resolution

 // Low Resolution


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_PlusCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    imglow: _public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
  }));
});

/***/ }),

/***/ "./src/components/presentational/AdventureCard.js":
false,

/***/ "./src/components/presentational/PlusCard.js":
false

})
//# sourceMappingURL=index.js.120ba9f0d4ea844cb8c6.hot-update.js.map