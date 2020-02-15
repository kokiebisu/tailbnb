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
/* harmony import */ var _presentational_TopRatedCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presentational/TopRatedCard */ "./src/components/presentational/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");



 // Components


 // const GET_EXPERIENCES = gql`
//   query {
//     experiences {
//       id
//       title
//       cost
//       ratings
//       reviews
//       country
//       img
//       imglow
//     }
//   }
// `;

/* harmony default export */ __webpack_exports__["default"] = (({
  data
}) => {
  // const { loading, error, data } = useQuery(GET_EXPERIENCES, {
  //   fetchPolicy: 'no-cache',
  //   ssr: true,
  //   pollInterval: 500
  // });
  // if (loading) {
  //   return (
  //     <div className='flex justify-center items-center w-full py-20'>
  //       <PulseLoader size={10} color={'#008489'} />
  //     </div>
  //   );
  // }
  // if (error) return `Error! ${error.message}`;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, data.experiences.map(({
    id,
    title,
    cost,
    ratings,
    reviews,
    country,
    img,
    imglow
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_TopRatedCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      img: img,
      imglow: imglow,
      title: title,
      cost: cost,
      ratings: ratings,
      reviews: reviews,
      country: country
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Show all experiences"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.b11292950668499b3d0d.hot-update.js.map