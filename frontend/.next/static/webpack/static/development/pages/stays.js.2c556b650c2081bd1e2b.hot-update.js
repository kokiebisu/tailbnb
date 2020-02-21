webpackHotUpdate("static/development/pages/stays.js",{

/***/ "./src/components/containers/THundredPlus.js":
/*!***************************************************!*\
  !*** ./src/components/containers/THundredPlus.js ***!
  \***************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _presentational_THundredPlusCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presentational/THundredPlusCard */ "./src/components/presentational/THundredPlusCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");




 // Component



const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    stays {
      id
      host_is_superhost
      size
      country
      name
      price
      reviews_per_month
      number_of_reviews
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(staydata);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [photos, setPhotos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const info = {
    query: 'stay',
    count: 4,
    orientation: 'portrait',
    client_id: 'RchVxgkvTlsApnvD7fdLAxFzqAa0yi6OPLS3pTWs3W4'
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadData();
  }, []);

  const loadData = async () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`https://api.unsplash.com/photos/random?query=${info.query}&count=${info.count}&orientation=${info.orientation}&client_id=${info.client_id}`).then(data => {
      setPhotos({
        imgs: data.data
      });
    });
    setIsLoading(false);
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
    className: "flex flex-wrap items-start justify-start w-full"
  }, data.stays.map(({
    id,
    host_is_superhost,
    img,
    imglow,
    size,
    country,
    name,
    price,
    reviews_per_month,
    number_of_reviews
  }, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-1/3 xl:w-1/4 pb-5"
    }, photos.imgs ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_THundredPlusCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: id,
      host_is_superhost: host_is_superhost,
      img: photos.imgs[index].urls.regular,
      imglow: photos.imgs[index].urls.thumb,
      size: size,
      country: country,
      name: name,
      price: price,
      reviews_per_month: reviews_per_month,
      number_of_reviews: number_of_reviews
    }) : null);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Show(2000+)"
  }));
});

/***/ })

})
//# sourceMappingURL=stays.js.2c556b650c2081bd1e2b.hot-update.js.map