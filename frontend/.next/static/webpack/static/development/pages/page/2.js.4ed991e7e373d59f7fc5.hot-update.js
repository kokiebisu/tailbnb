webpackHotUpdate("static/development/pages/page/2.js",{

/***/ "./src/components/containers/Adventures.jsx":
/*!**************************************************!*\
  !*** ./src/components/containers/Adventures.jsx ***!
  \**************************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_AdventureCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../functions/AdventureCard */ "./src/components/functions/AdventureCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Adventures.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    adventures {\n      id\n      title\n      period\n      cost\n      country\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // Util

 // Component


 // Wrapper



var GET_ADVENTURES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

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
    }, __jsx(_functions_AdventureCard__WEBPACK_IMPORTED_MODULE_8__["AdventureCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.adventures[i].id,
      img: data === null || data === void 0 ? void 0 : data.adventures[i].img,
      country: data === null || data === void 0 ? void 0 : data.adventures[i].country,
      title: data === null || data === void 0 ? void 0 : data.adventures[i].title,
      cost: data === null || data === void 0 ? void 0 : data.adventures[i].cost,
      period: data === null || data === void 0 ? void 0 : data.adventures[i].period,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })));
  }

  return content;
}; // interface Adventure {
//   id: string;
//   title: string;
//   period: number;
//   cost: number;
//   country: string;
//   img: string;
// }
// interface AdventureData {
//   adventures: Adventure[];
// }


var Adventures = function Adventures(_ref2) {
  var isMobile = _ref2.isMobile,
      isTablet = _ref2.isTablet,
      isLaptop = _ref2.isLaptop,
      isDesktop = _ref2.isDesktop,
      isLargeDesktop = _ref2.isLargeDesktop;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_ADVENTURES),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    title: "Introducing Airbnb Adventures",
    phrase: "Multi-day trips led by local experts\u2014activities, meals, and stays included",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full h-88",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, isMobile ? renderSkeletonVertical(4) : null, isTablet ? renderSkeletonVertical(3) : null, isLaptop ? renderSkeletonVertical(4) : null, isDesktop ? renderSkeletonVertical(5) : null, isLargeDesktop ? renderSkeletonVertical(6) : null) : data && __jsx("div", {
    className: "grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 3) : null, isLaptop ? renderContent(data, 4) : null, isDesktop ? renderContent(data, 5) : null, isLargeDesktop ? renderContent(data, 6) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_9__["ShowAll"], {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(Adventures));

/***/ })

})
//# sourceMappingURL=2.js.4ed991e7e373d59f7fc5.hot-update.js.map