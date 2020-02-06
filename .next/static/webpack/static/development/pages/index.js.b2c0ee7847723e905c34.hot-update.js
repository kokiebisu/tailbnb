webpackHotUpdate("static/development/pages/index.js",{

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: "Norway",
    title: "2 Nights PACKAGE All Inclusive",
    price: "From $841 / person",
    days: "3"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 250,
    width: 220
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: "Indonesia",
    title: "Snorkeling and hiking in West Sumatra",
    price: "From $249 / person",
    days: "2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: "Nepal",
    title: "Trek to the lower Everest region",
    price: "From $1,745 / person",
    days: "11"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 md:w-1/3 w-1/2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: _public_img_adventures4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: "Morocco",
    title: "Active Adventure & Stay with Locals",
    price: "From $416 / person",
    days: "4"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShowAll__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Show all adventures"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.b2c0ee7847723e905c34.hot-update.js.map