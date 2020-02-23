webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

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
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _presentational_AdventureCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presentational/AdventureCard */ "./src/components/presentational/AdventureCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");




 // Component



const GET_ADVENTURES = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
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
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_ADVENTURES);
  const [card, setCard] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const renderContent = (data, number) => {
    var content = [];

    for (let i = 0; i < number; i++) {
      content.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pb-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_AdventureCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: data[i].id,
        id: data[i].id,
        img: data[i].img,
        imglow: data[i].imglow,
        country: data[i].country,
        title: data[i].title,
        cost: data[i].cost,
        period: data[i].period
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
      small: '(max-width: 987px)'
    }
  }, matches => matches.small ? (setCard(4), renderContent(data.adventures, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      large: '(min-width: 988px) and (max-width: 1299px)'
    }
  }, matches => matches.large ? (setCard(4), renderContent(data.adventures, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      xl: '(min-width: 1300px) and (max-width: 1529px)'
    }
  }, matches => matches.xl ? (setCard(5), renderContent(data.adventures, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      xl: '(min-width: 1530px)'
    }
  }, matches => matches.xl ? (setCard(6), renderContent(data.adventures, card)) : null)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Show all adventures"
  }));
});

/***/ }),

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
  }, matches => matches.xs ? (setCard(4), renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      small: '(min-width: 740px) and (max-width: 987px)'
    }
  }, matches => matches.small ? (setCard(3), renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      large: '(min-width: 988px) and (max-width: 1299px)'
    }
  }, matches => matches.large ? (setCard(4), renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      xl: '(min-width: 1300px) and (max-width: 1529px)'
    }
  }, matches => matches.xl ? (setCard(5), renderContent(data.experiences, card)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    queries: {
      xl: '(min-width: 1530px)'
    }
  }, matches => matches.xl ? (setCard(6), renderContent(data.experiences, card)) : null)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Show all experiences"
  }));
});

/***/ }),

/***/ "./src/components/presentational/StayCard.js":
/*!***************************************************!*\
  !*** ./src/components/presentational/StayCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-progressive-image */ "./node_modules/react-lazy-progressive-image/lib/index.js");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (({
  id,
  host_is_superhost,
  name,
  price,
  country,
  reviews_per_month,
  picture_url,
  picture_url_low
}) => {
  const renderhost = host_is_superhost => {
    if (host_is_superhost == 't') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uppercase mt-3 md:mt-0 border border-gray-800 rounded font-semibold px-1 mt-1 text-xs"
      }, "Superhost"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600"
      }, country));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mt-3 text-sm sm:my-2 font-light text-gray-600"
      }, country));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/stays/[id]",
    as: `/stays/${id}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31 cursor-pointer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: picture_url,
    placeholder: picture_url_low
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full rounded",
    src: src
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between"
  }, renderhost(host_is_superhost), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-1 text-sm"
  }, reviews_per_month))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1"
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tracking-wide"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold"
  }, "$", price, " CAD"), "/night")));
});

/***/ })

})
//# sourceMappingURL=index.js.6ec66694fa3b55bdaec3.hot-update.js.map