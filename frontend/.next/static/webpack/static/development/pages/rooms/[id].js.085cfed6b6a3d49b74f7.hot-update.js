webpackHotUpdate("static/development/pages/rooms/[id].js",{

/***/ "./src/components/presentational/Review.js":
/*!*************************************************!*\
  !*** ./src/components/presentational/Review.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
 // Image


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const renderDescription = description => {
    console.log(description.length);

    if (description.length < 200) {
      return description;
    } else {
      const wordArray = description.split(' ');
      const newArray = [];

      for (let i = 0; i < 100; i++) {
        newArray.push(wordArray[i]);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, newArray.join(' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "text-green-850",
        href: "/#"
      }, "hello")));
    }
  };

  const description = "As we pulled into the driveway, we knew it was an incredible place. Maria and Alberto were the perfect hosts and toured us around their beautiful property. I'm not sure you will believe how amazing it is. We have spent 10 days in Portugal and the time in Penafiel has been the...";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-6 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start pb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-12 w-12 rounded-full",
    src: _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-4 pb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750"
  }, "Maureen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750"
  }, "October 2019"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-750"
  }, renderDescription(description)));
});

/***/ })

})
//# sourceMappingURL=[id].js.085cfed6b6a3d49b74f7.hot-update.js.map