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
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _presentational_TopRatedCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presentational/TopRatedCard */ "./src/components/presentational/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");




 // Components



const GET_EXPERIENCES = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      ratings
      location
      imglow
      img
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_EXPERIENCES);
  const [card, setCard] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const renderContent = (data, number) => {
    var content = [];

    for (let i = 0; i < number; i++) {
      content.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 pb-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_TopRatedCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: data[i].id,
        id: data[i].id,
        img: data[i].img,
        imglow: data[i].imglow,
        country: data[i].country,
        title: data[i].title,
        cost: data[i].cost,
        period: data[i].period,
        ratings: data[i].ratings,
        reviews: data[i].reviews
      })));
    }

    return content;
  };

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex justify-center items-center w-full py-20"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 10,
      color: '#008489'
    }));
  }

  if (error) return `Error! ${error.message}`;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      xs: '(min-width: 500px) and (max-width: 739px)'
    }
  }, matches => matches.xs ? (setCard(4), forceUpdate, renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      small: '(min-width: 740px) and (max-width: 987px)'
    }
  }, matches => matches.small ? (setCard(3), forceUpdate, renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      large: '(min-width: 988px) and (max-width: 1299px)'
    }
  }, matches => matches.large ? (setCard(4), forceUpdate, renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      xl: '(min-width: 1300px) and (max-width: 1529px)'
    }
  }, matches => matches.xl ? (setCard(5), forceUpdate, renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      xl: '(min-width: 1530px)'
    }
  }, matches => matches.xl ? (setCard(6), renderContent(data.experiences, card)) : null)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Show all experiences"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.376ee1b0da32cbaa67f1.hot-update.js.map