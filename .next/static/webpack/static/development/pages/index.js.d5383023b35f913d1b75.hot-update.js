webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/AdventureCard.js":
/*!*****************************************!*\
  !*** ./src/components/AdventureCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  location,
  title,
  price,
  days
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-lg",
    src: img,
    alt: ""
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 385,
    width: 255
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-xs my-2 font-semibold"
  }, location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1 w-5/6"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From $", price, " / person", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xB7 "), days, " days"));
});

/***/ }),

/***/ "./src/components/Adventures.js":
/*!**************************************!*\
  !*** ./src/components/Adventures.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AdventureCard */ "./src/components/AdventureCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/adventures1.jpg */ "./public/img/adventures1.jpg");
/* harmony import */ var _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/adventures2.jpg */ "./public/img/adventures2.jpg");
/* harmony import */ var _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/adventures3.jpg */ "./public/img/adventures3.jpg");
/* harmony import */ var _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/adventures4.jpg */ "./public/img/adventures4.jpg");
/* harmony import */ var _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7__);

 // Component


 // Images





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const adventures = [{
    img: _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: 'Norway',
    title: '2 Nights PACKAGE ALL Inclusive',
    price: 841,
    days: 3
  }, {
    img: _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: 'Indonesia',
    title: 'Snorkeling and hiking in West Sumatra',
    price: 249,
    days: 2
  }, {
    img: _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: 'Nepal',
    title: 'Trek to the lower Everest region',
    price: 1745,
    days: 11
  }, {
    img: _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: 'Morocco',
    title: 'Active Adventure & Stay with Locals',
    price: 416,
    days: 4
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, adventures.map(({
    img,
    location,
    title,
    price,
    days
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      img: img,
      location: location,
      title: title,
      price: price,
      days: days
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShowAll__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Show all adventures"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.d5383023b35f913d1b75.hot-update.js.map