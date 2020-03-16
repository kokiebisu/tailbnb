webpackHotUpdate("static/development/pages/page/three.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./public/img/high/featured1.jpg":
false,

/***/ "./src/components/containers/Featured.tsx":
false,

/***/ "./src/components/containers/LocationExperiences.jsx":
/*!***********************************************************!*\
  !*** ./src/components/containers/LocationExperiences.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
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

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/LocationExperiences.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query LocationExperiences($available: String, $location: String) {\n    experiences(\n      where: { available: $available, location: $location }\n      first: 6\n    ) {\n      id\n      title\n      cost\n      ratings\n      reviews\n      location\n      img\n      available\n      category\n    }\n  }\n"]);

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
};

var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "pb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
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
        lineNumber: 47
      },
      __self: this
    })));
  }

  return content;
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


var LocationExperiences = function LocationExperiences(_ref2) {
  var isMobile = _ref2.isMobile,
      isTablet = _ref2.isTablet,
      isLaptop = _ref2.isLaptop,
      isDesktop = _ref2.isDesktop,
      isLargeDesktop = _ref2.isLargeDesktop,
      location = _ref2.location;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_LOCATION_EXPERIENCES, {
    variables: {
      available: 'Today',
      location: 'Vancouver'
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Experiences in ".concat(location),
    phrase: "Book activities led by local hosts on your next trip.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 3) : null, isLaptop ? renderContent(data, 4) : null, isDesktop ? renderContent(data, 5) : null, isLargeDesktop ? renderContent(data, 6) : null)), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(LocationExperiences));

/***/ }),

/***/ "./src/components/containers/LocationStays.jsx":
/*!*****************************************************!*\
  !*** ./src/components/containers/LocationStays.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_StayCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/StayCard */ "./src/components/functions/StayCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/LocationStays.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    stays {\n      id\n      host_is_superhost\n      country\n      name\n      price\n      reviews_per_month\n      picture_url\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // Component


 // Wrapper



var GET_STAYS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject()); // interface StayData {
//   stays: Stay[];
// }
// interface Stay {
//   id: string;
//   host_is_superhost: string;
//   country: string;
//   name: string;
//   price: number;
//   reviews_per_month: number;
//   picture_url: string;
// }

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    isMobile: width < 767,
    isTablet: width > 767 && width < 1023,
    isLaptop: width > 1023 && width < 1279,
    isDesktop: width > 1279 && width < 1529,
    isLargeDesktop: width > 1529
  };
};

var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "pb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_functions_StayCard__WEBPACK_IMPORTED_MODULE_6__["StayCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.stays[i].id,
      host_is_superhost: data === null || data === void 0 ? void 0 : data.stays[i].host_is_superhost,
      country: data === null || data === void 0 ? void 0 : data.stays[i].country,
      name: data === null || data === void 0 ? void 0 : data.stays[i].name,
      price: data === null || data === void 0 ? void 0 : data.stays[i].price,
      reviews_per_month: data === null || data === void 0 ? void 0 : data.stays[i].reviews_per_month,
      picture_url: data === null || data === void 0 ? void 0 : data.stays[i].picture_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })));
  }

  return content;
};

var LocationStays = function LocationStays(_ref2) {
  var isMobile = _ref2.isMobile,
      isTablet = _ref2.isTablet,
      isLaptop = _ref2.isLaptop,
      isDesktop = _ref2.isDesktop,
      isLargeDesktop = _ref2.isLargeDesktop,
      location = _ref2.location;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_STAYS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Places to stay in ".concat(location),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-4 grid-cols-2 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 4) : null, isLaptop ? renderContent(data, 6) : null, isDesktop ? renderContent(data, 8) : null, isLargeDesktop ? renderContent(data, 8) : null)), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show(2000+)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(LocationStays));

/***/ }),

/***/ "./src/components/containers/Popular.tsx":
false,

/***/ "./src/components/containers/StayWithSuperhost.jsx":
false,

/***/ "./src/components/containers/ThreeColumn.jsx":
false,

/***/ "./src/components/functions/FeaturedCard.tsx":
false,

/***/ "./src/components/functions/Location.tsx":
false,

/***/ "./src/components/functions/ThreeColumnCard.jsx":
false,

/***/ "./src/components/wrapper/SectionOverflow.tsx":
false,

/***/ "./src/pages/page/three.jsx":
/*!**********************************!*\
  !*** ./src/pages/page/three.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/HeaderCategory */ "./src/components/layout/HeaderCategory.jsx");
/* harmony import */ var _components_containers_LocationExperiences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/containers/LocationExperiences */ "./src/components/containers/LocationExperiences.jsx");
/* harmony import */ var _components_containers_LocationStays__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/containers/LocationStays */ "./src/components/containers/LocationStays.jsx");
/* harmony import */ var _components_layout_MovePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/MovePage */ "./src/components/layout/MovePage.jsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/page/three.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Layout




 // Layout



var uniqueplacesContent = [{
  img: 'https://a0.muscache.com/im/pictures/0e25bbd4-d081-4bab-85de-a8fd05245b53.jpg?aki_policy=large',
  category: '1,910 Treehouses',
  title: 'Get some perspective',
  description: 'Take your trip to new heights with these one-of-a-kind treehouses.'
}, {
  img: 'https://a0.muscache.com/im/pictures/1df93d87-26a5-4c5e-8a91-b37ccb173aa1.jpg?aki_policy=large',
  category: '2000+ Boats',
  title: 'Sail the high seas',
  description: 'Follow in the footsteps of adventurers past with boats of all shapes and sizes.'
}, {
  img: 'https://a0.muscache.com/im/pictures/408ad1e8-0367-4cb7-be52-6d7bfcc9d046.jpg?aki_policy=large',
  category: '1,820 Yurts',
  title: 'Made just for glamping',
  description: 'Embrace a mix of indoor comfort and the great outdoors.'
}];
var newyorkContent = [{
  img: 'https://a0.muscache.com/im/pictures/599f9600-ef4a-4bc6-a43c-eedf35926ed3.jpg?aki_policy=large',
  category: 'Stays + Experiences',
  title: 'Classic NYC',
  description: 'The quintessential American city, NYC is hip-hop’s birthplace and the home of Broadway — explore the cultural capital with Airbnb.'
}, {
  img: 'https://a0.muscache.com/im/pictures/e5ecf22b-0018-49e7-a392-e2c78a449fff.jpg?aki_policy=large',
  category: 'Stays + Experiences',
  title: 'Secrets of Old New York',
  description: 'Beyond the trendy shops and bars, there is old-school NYC—filled with landmarks and totems that connect the modern city to the past.'
}, {
  img: 'https://a0.muscache.com/im/pictures/28b8083f-9169-4fae-8e14-23e2ce1562e9.jpg?aki_policy=large',
  category: 'Stays + Experiences',
  title: 'A Taste of NYC',
  description: "A city that's home to 3 million immigrants and over 25,000 restaurants can only be one thing—diversely delicious."
}];

var two = function two() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_1__["ExploreHeader"], {
    white: true,
    placeholder: "Try \"Barcelona\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_2__["HeaderCategory"], {
    dates: true,
    guests: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_components_containers_LocationExperiences__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: "New York",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_components_containers_LocationStays__WEBPACK_IMPORTED_MODULE_7__["default"], {
    location: "New York",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_components_containers_LocationStays__WEBPACK_IMPORTED_MODULE_7__["default"], {
    location: "Barcelona",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("div", {
    className: "py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_components_layout_MovePage__WEBPACK_IMPORTED_MODULE_5__["MovePage"], {
    page: 2,
    previousPage: null,
    nextPage: "three",
    first: false,
    last: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_6__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (two);

/***/ })

})
//# sourceMappingURL=three.js.d55939af3b2117d26c8a.hot-update.js.map