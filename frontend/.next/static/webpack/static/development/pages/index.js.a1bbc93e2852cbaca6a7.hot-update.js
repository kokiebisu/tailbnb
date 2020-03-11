webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Tomorrow.jsx":
/*!************************************************!*\
  !*** ./src/components/containers/Tomorrow.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_LocationExperienceCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/LocationExperienceCard */ "./src/components/functions/LocationExperienceCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Tomorrow.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query LocationExperiences($available: String, $location: String) {\n    experiences(\n      where: { available: $available, location: $location }\n      first: 6\n    ) {\n      id\n      title\n      cost\n      ratings\n      reviews\n      location\n      img\n      available\n      category\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // Components


 // Wrapper


var GET_LOCATION_EXPERIENCES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    isMobile: width < 767,
    isTablet: width > 767 && width < 1023,
    isLaptop: width > 1023 && width < 1279,
    isDesktop: width > 1279 && width < 1529,
    isLargeDesktop: width > 1529
  };
}; // interface Experience {
//   id: string;
//   title: string;
//   cost: number;
//   ratings: number;
//   reviews: number;
//   category: string;
//   img: string;
// }
// interface ExperienceData {
//   experiences: Experience[];
// }


var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 pb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(_functions_LocationExperienceCard__WEBPACK_IMPORTED_MODULE_6__["LocationExperienceCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.experiences[i].id,
      img: data === null || data === void 0 ? void 0 : data.experiences[i].img,
      title: data === null || data === void 0 ? void 0 : data.experiences[i].title,
      cost: data === null || data === void 0 ? void 0 : data.experiences[i].cost,
      ratings: data === null || data === void 0 ? void 0 : data.experiences[i].ratings,
      reviews: data === null || data === void 0 ? void 0 : data.experiences[i].reviews,
      category: data === null || data === void 0 ? void 0 : data.experiences[i].category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })));
  }

  return content;
};

var Tomorrow = function Tomorrow() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_LOCATION_EXPERIENCES, {
    variables: {
      available: 'Tomorrow',
      location: 'Vancouver'
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Tomorrow in Vancouver",
    phrase: "Book activities led by local hosts on your next trip.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 3) : null, isLaptop ? renderContent(data, 4) : null, isDesktop ? renderContent(data, 5) : null, isLargeDesktop ? renderContent(data, 6) : null)), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(Tomorrow));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.tsx");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.tsx");
/* harmony import */ var _components_containers_Plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/containers/Plus */ "./src/components/containers/Plus.tsx");
/* harmony import */ var _components_containers_Today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/containers/Today */ "./src/components/containers/Today.jsx");
/* harmony import */ var _components_containers_Tomorrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/containers/Tomorrow */ "./src/components/containers/Tomorrow.jsx");
/* harmony import */ var _components_containers_NextWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/containers/NextWeek */ "./src/components/containers/NextWeek.tsx");
/* harmony import */ var _components_containers_Adventures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/containers/Adventures */ "./src/components/containers/Adventures.tsx");
/* harmony import */ var _components_containers_Stay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/containers/Stay */ "./src/components/containers/Stay.tsx");
/* harmony import */ var _components_containers_TopRated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/containers/TopRated */ "./src/components/containers/TopRated.tsx");
/* harmony import */ var _components_containers_Popular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/containers/Popular */ "./src/components/containers/Popular.tsx");
/* harmony import */ var _components_containers_Featured__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/containers/Featured */ "./src/components/containers/Featured.tsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout/Footer */ "./src/components/layout/Footer.tsx");
/* harmony import */ var _components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/modals/MenuModal */ "./src/components/modals/MenuModal.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component













 // Next

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var switchMenuModal = function switchMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    switchMenuModal: switchMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), menuModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_13__["MenuModal"], {
    switchMenuModal: switchMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })) : null, __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_2__["Explore"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_containers_Plus__WEBPACK_IMPORTED_MODULE_3__["Plus"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_containers_Today__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_components_containers_Tomorrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_containers_NextWeek__WEBPACK_IMPORTED_MODULE_6__["NextWeek"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_containers_Adventures__WEBPACK_IMPORTED_MODULE_7__["Adventures"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_containers_Stay__WEBPACK_IMPORTED_MODULE_8__["Stay"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_containers_TopRated__WEBPACK_IMPORTED_MODULE_9__["TopRated"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_containers_Popular__WEBPACK_IMPORTED_MODULE_10__["Popular"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_containers_Featured__WEBPACK_IMPORTED_MODULE_11__["Featured"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_12__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a1bbc93e2852cbaca6a7.hot-update.js.map