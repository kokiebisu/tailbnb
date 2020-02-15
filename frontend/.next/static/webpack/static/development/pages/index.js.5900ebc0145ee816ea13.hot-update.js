webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
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
/* harmony import */ var _components_wrapper_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/wrapper/Section */ "./src/components/wrapper/Section.js");
/* harmony import */ var _components_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.js");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.js");
/* harmony import */ var _components_containers_Plus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/containers/Plus */ "./src/components/containers/Plus.js");
/* harmony import */ var _components_containers_Adventures__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/containers/Adventures */ "./src/components/containers/Adventures.js");
/* harmony import */ var _components_containers_Stay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/containers/Stay */ "./src/components/containers/Stay.js");
/* harmony import */ var _components_containers_TopRated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/containers/TopRated */ "./src/components/containers/TopRated.js");
/* harmony import */ var _components_containers_Popular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/containers/Popular */ "./src/components/containers/Popular.js");
/* harmony import */ var _components_containers_Featured__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/containers/Featured */ "./src/components/containers/Featured.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout/Footer */ "./src/components/layout/Footer.js");



 // Wrapper


 // Component










const GET_EXPERIENCES = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      country
      img
      imglow
    }
  }
`;

const Home = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Explore Airbnb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Airbnb Plus places to stay",
    phrase: "A selection of places to stay verified for quality and design"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_Plus__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Introducing Airbnb Adventures",
    phrase: "Multi-day trips led by local experts\u2014activities, meals, and stays included"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_Adventures__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data_adventures
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Places to stay around the world"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_Stay__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: data_stays
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Top-rated experiences",
    phrase: "Book activities led by local hosts on your next trip."
  }, loading_experiences ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center items-center w-full py-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    size: 10,
    color: '#008489'
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_TopRated__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: data_experiences
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Popular destinations in the United States"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_Popular__WEBPACK_IMPORTED_MODULE_12__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Featured Airbnb Plus destinations",
    phrase: "Browse beautiful places to stay with all the comforts of home, plus more"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_Featured__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5900ebc0145ee816ea13.hot-update.js.map