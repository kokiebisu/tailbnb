webpackHotUpdate("static/development/pages/index.js",{

/***/ "./public/img/high/stay1.jpg":
false,

/***/ "./public/img/high/stay2.jpg":
false,

/***/ "./public/img/high/stay3.jpg":
false,

/***/ "./public/img/high/stay4.jpg":
false,

/***/ "./public/img/high/stay5.jpg":
false,

/***/ "./public/img/high/stay6.jpg":
false,

/***/ "./public/img/high/stay7.jpg":
false,

/***/ "./public/img/high/stay8.jpg":
false,

/***/ "./public/img/low/stay1-low.jpg":
false,

/***/ "./public/img/low/stay2-low.jpg":
false,

/***/ "./public/img/low/stay3-low.jpg":
false,

/***/ "./public/img/low/stay4-low.jpg":
false,

/***/ "./public/img/low/stay5-low.jpg":
false,

/***/ "./public/img/low/stay6-low.jpg":
false,

/***/ "./public/img/low/stay7-low.jpg":
false,

/***/ "./public/img/low/stay8-low.jpg":
false,

/***/ "./src/components/containers/Stay.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Stay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _cards_StayCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/StayCard */ "./src/components/cards/StayCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");


 // Component



const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    stays {
      hostType
      location
      title
      cost
      ratings
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
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(staydata);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start w-full"
  }, data.stays.map(({
    id,
    hostType,
    location,
    title,
    cost,
    ratings,
    img,
    imglow
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_StayCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      hostType: hostType,
      img: img,
      imglow: imglow,
      location: location,
      title: title,
      cost: cost,
      ratings: ratings
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Show(2000+)"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.76ebdc6bdbcc647e4abb.hot-update.js.map