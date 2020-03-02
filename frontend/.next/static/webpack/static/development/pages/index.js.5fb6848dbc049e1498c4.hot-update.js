webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/TopRated.tsx":
/*!************************************************!*\
  !*** ./src/components/containers/TopRated.tsx ***!
  \************************************************/
/*! exports provided: TopRated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRated", function() { return TopRated; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _functions_TopRatedCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/TopRatedCard */ "./src/components/functions/TopRatedCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/TopRated.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    experiences {\n      id\n      title\n      cost\n      ratings\n      reviews\n      location\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 // Components


 // Wrapper



var GET_EXPERIENCES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
var TopRated = function TopRated() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_EXPERIENCES),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      card = _useState[0],
      setCard = _useState[1];

  var renderContent = function renderContent(data, number) {
    var content = [];

    for (var i = 0; i < number; i++) {
      content.push(__jsx("div", {
        className: "w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/6 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(_functions_TopRatedCard__WEBPACK_IMPORTED_MODULE_6__["TopRatedCard"], {
        key: i,
        id: data === null || data === void 0 ? void 0 : data.experiences[i].id,
        img: data === null || data === void 0 ? void 0 : data.experiences[i].img,
        title: data === null || data === void 0 ? void 0 : data.experiences[i].title,
        cost: data === null || data === void 0 ? void 0 : data.experiences[i].cost,
        ratings: data === null || data === void 0 ? void 0 : data.experiences[i].ratings,
        reviews: data === null || data === void 0 ? void 0 : data.experiences[i].reviews,
        location: data === null || data === void 0 ? void 0 : data.experiences[i].location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })));
    }

    return content;
  };

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_9__["ExploreSection"], {
    title: "Top-rated places to stay",
    phrase: "Explore some of the best-reviewed stays in the world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Top-rated experiences",
    phrase: "Book activities led by local hosts on your next trip.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      xs: '(min-width: 0px) and (max-width: 739px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, function (matches) {
    return matches.xs ? (setCard(1), renderContent(data, card)) : null;
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      small: '(min-width: 740px) and (max-width: 987px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, function (matches) {
    return matches.small ? (setCard(1), renderContent(data, card)) : null;
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      large: '(min-width: 988px) and (max-width: 1299px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, function (matches) {
    return matches.large ? (setCard(4), renderContent(data, card)) : null;
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      xl: '(min-width: 1300px) and (max-width: 1529px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, function (matches) {
    return matches.xl ? (setCard(4), renderContent(data, card)) : null;
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      twoxl: '(min-width: 1530px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, function (matches) {
    return matches.twoxl ? (setCard(6), renderContent(data, card)) : null;
  }))), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))));
};

/***/ }),

/***/ "./src/components/wrapper/ExploreSection.tsx":
/*!***************************************************!*\
  !*** ./src/components/wrapper/ExploreSection.tsx ***!
  \***************************************************/
/*! exports provided: ExploreSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSection", function() { return ExploreSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/ExploreSection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var ExploreSection = function ExploreSection(_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      children = _ref.children;

  var renderContent = function renderContent(phrase) {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl text-gray-850 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-gray-850 text-2xl py-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, title));
    }
  };

  return __jsx("div", {
    className: "md:px-0 max-w-90% xl:px-0 mx-auto py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, renderContent(phrase), children);
};

/***/ })

})
//# sourceMappingURL=index.js.5fb6848dbc049e1498c4.hot-update.js.map