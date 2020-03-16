webpackHotUpdate("static/development/pages/page/two.js",{

/***/ "./src/components/containers/StayWithSuperhost.jsx":
/*!*********************************************************!*\
  !*** ./src/components/containers/StayWithSuperhost.jsx ***!
  \*********************************************************/
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

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/StayWithSuperhost.jsx";
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


var GET_STAYS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

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
        lineNumber: 41
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
        lineNumber: 42
      },
      __self: this
    })));
  }

  return content;
};

var StayWithSuperhost = function StayWithSuperhost(_ref2) {
  var isMobile = _ref2.isMobile,
      isTablet = _ref2.isTablet,
      isLaptop = _ref2.isLaptop,
      isDesktop = _ref2.isDesktop,
      isLargeDesktop = _ref2.isLargeDesktop;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_STAYS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Places to stay around the world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-4 grid-cols-2 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 4) : null, isLaptop ? renderContent(data, 6) : null, isDesktop ? renderContent(data, 8) : null, isLargeDesktop ? renderContent(data, 8) : null)), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show(2000+)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(StayWithSuperhost));

/***/ }),

/***/ "./src/components/functions/StayCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/functions/StayCard.tsx ***!
  \***********************************************/
/*! exports provided: StayCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StayCard", function() { return StayCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/StayCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var StayCard = function StayCard(_ref) {
  var id = _ref.id,
      host_is_superhost = _ref.host_is_superhost,
      name = _ref.name,
      price = _ref.price,
      country = _ref.country,
      reviews_per_month = _ref.reviews_per_month,
      picture_url = _ref.picture_url;

  var renderhost = function renderhost(host_is_superhost) {
    if (host_is_superhost == 't') {
      return __jsx("div", {
        className: "flex items-center justify-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "mt-2 mb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "uppercase border border-gray-800 rounded text-xs px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Superhost")), __jsx("div", {
        className: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("div", {
        className: "h-3 w-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-full h-full",
        viewBox: "0 0 37.286 37.287",
        style: {
          fill: '#F5385D',
          marginTop: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("path", {
        d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })))), __jsx("p", {
        className: "pl-1 text-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, reviews_per_month)));
    } else {
      return __jsx("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("p", {
        className: "mt-3 text-sm sm:my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, country));
    }
  };

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/stays/[id]",
    as: "/stays/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("img", {
    className: "w-full h-full rounded",
    src: picture_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, renderhost(host_is_superhost), __jsx("div", {
    className: "flex items-center flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, country))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm md:text-base text-gray-850 truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, name)), __jsx("div", {
    className: "hidden md:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "$", price, " CAD"), "/night"))));
};

/***/ }),

/***/ "./src/pages/page/two.js":
/*!*******************************!*\
  !*** ./src/pages/page/two.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/HeaderCategory */ "./src/components/layout/HeaderCategory.jsx");
/* harmony import */ var _components_containers_Popular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/containers/Popular */ "./src/components/containers/Popular.tsx");
/* harmony import */ var _components_containers_Featured__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/containers/Featured */ "./src/components/containers/Featured.tsx");
/* harmony import */ var _components_containers_StayWithSuperhost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/containers/StayWithSuperhost */ "./src/components/containers/StayWithSuperhost.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/page/two.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Layout







var two = function two() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_1__["ExploreHeader"], {
    white: true,
    placeholder: "Try \"Barcelona\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_2__["HeaderCategory"], {
    dates: true,
    guests: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_containers_Popular__WEBPACK_IMPORTED_MODULE_3__["Popular"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_containers_StayWithSuperhost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_containers_Featured__WEBPACK_IMPORTED_MODULE_4__["Featured"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (two);

/***/ })

})
//# sourceMappingURL=two.js.d756fb9eb34489e9dfcb.hot-update.js.map