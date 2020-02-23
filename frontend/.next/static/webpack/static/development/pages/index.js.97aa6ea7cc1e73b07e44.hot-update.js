webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _presentational_StayCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presentational/StayCard */ "./src/components/presentational/StayCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");



 // Component



const GET_STAYS = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    stays {
      id
      host_is_superhost
      country
      name
      price
      reviews_per_month
      picture_url
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_STAYS);

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex justify-center items-center w-full py-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 10,
      color: '#008489'
    }));
  }

  if (error) return `Error! ${error.message}`;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start w-full"
  }, data.stays.map(({
    id,
    host_is_superhost,
    country,
    name,
    price,
    reviews_per_month,
    picture_url
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_StayCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      id: id,
      host_is_superhost: host_is_superhost,
      country: country,
      name: name,
      price: price,
      reviews_per_month: reviews_per_month,
      picture_url: picture_url,
      picture_url_low: picture_url
    }));
  })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Show(2000+)"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.97aa6ea7cc1e73b07e44.hot-update.js.map