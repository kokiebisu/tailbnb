webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _functions_AdventureCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/AdventureCard */ "./src/components/functions/AdventureCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Adventures.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    adventures {\n      id\n      title\n      period\n      cost\n      country\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






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
        lineNumber: 41
      },
      __self: this
    }, __jsx(_functions_AdventureCard__WEBPACK_IMPORTED_MODULE_6__["AdventureCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.adventures[i].id,
      img: data === null || data === void 0 ? void 0 : data.adventures[i].img,
      country: data === null || data === void 0 ? void 0 : data.adventures[i].country,
      title: data === null || data === void 0 ? void 0 : data.adventures[i].title,
      cost: data === null || data === void 0 ? void 0 : data.adventures[i].cost,
      period: data === null || data === void 0 ? void 0 : data.adventures[i].period,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Introducing Airbnb Adventures",
    phrase: "Multi-day trips led by local experts\u2014activities, meals, and stays included",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 3) : null, isLaptop ? renderContent(data, 4) : null, isDesktop ? renderContent(data, 5) : null, isLargeDesktop ? renderContent(data, 6) : null)), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(Adventures));

/***/ }),

/***/ "./src/components/containers/Popular.tsx":
false,

/***/ "./src/components/functions/AdventureCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/functions/AdventureCard.tsx ***!
  \****************************************************/
/*! exports provided: AdventureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureCard", function() { return AdventureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/AdventureCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var AdventureCard = function AdventureCard(_ref) {
  var id = _ref.id,
      img = _ref.img,
      country = _ref.country,
      title = _ref.title,
      cost = _ref.cost,
      period = _ref.period;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/adventures/[id]",
    as: "/adventures/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    className: "w-full h-full rounded-lg",
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "mt-2 mb-1 md:mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    id: "card_category",
    className: "uppercase text-2xs md:text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, country)), __jsx("div", {
    className: "text-sm md:text-base",
    style: {
      fontFamily: 'airbnb-book'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    className: "leading-4 truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "From $", cost, " / person", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " \xB7 "), period, " days")))));
};

/***/ }),

/***/ "./src/components/functions/Location.tsx":
false,

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
/* harmony import */ var _components_containers_NextWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/containers/NextWeek */ "./src/components/containers/NextWeek.jsx");
/* harmony import */ var _components_containers_Adventures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/containers/Adventures */ "./src/components/containers/Adventures.jsx");
/* harmony import */ var _components_containers_TopRated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/containers/TopRated */ "./src/components/containers/TopRated.jsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/Footer */ "./src/components/layout/Footer.tsx");
/* harmony import */ var _components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modals/MenuModal */ "./src/components/modals/MenuModal.jsx");
/* harmony import */ var _components_layout_MovePage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/MovePage */ "./src/components/layout/MovePage.jsx");
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
      lineNumber: 29
    },
    __self: this
  }), menuModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_10__["MenuModal"], {
    switchMenuModal: switchMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })) : null, __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_2__["Explore"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_containers_Plus__WEBPACK_IMPORTED_MODULE_3__["Plus"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_containers_Today__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_containers_Tomorrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_containers_NextWeek__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_components_containers_TopRated__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_containers_Adventures__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_layout_MovePage__WEBPACK_IMPORTED_MODULE_11__["MovePage"], {
    first: true,
    last: false,
    previousPage: null,
    page: 1,
    nextPage: "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a9d5a0d3b6562a4405e9.hot-update.js.map