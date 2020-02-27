webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Adventures.tsx":
/*!**************************************************!*\
  !*** ./src/components/containers/Adventures.tsx ***!
  \**************************************************/
/*! exports provided: Adventures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventures", function() { return Adventures; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _presentational_AdventureCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../presentational/AdventureCard */ "./src/components/presentational/AdventureCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Adventures.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    adventures {\n      id\n      title\n      period\n      cost\n      country\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 // Component



var GET_ADVENTURES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
var Adventures = function Adventures() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_ADVENTURES),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      card = _useState[0],
      setCard = _useState[1];

  var renderContent = function renderContent(data, number) {
    var content = [];
    data === null || data === void 0 ? void 0 : data.adventures.map(function (adventure, index) {
      content.push(__jsx("div", {
        className: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(_presentational_AdventureCard__WEBPACK_IMPORTED_MODULE_6__["AdventureCard"], {
        key: index,
        id: adventure.id,
        img: adventure.img,
        country: adventure.country,
        title: adventure.title,
        cost: adventure.cost,
        period: adventure.period,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })));
      return content;
    });
  };

  if (error) return "Error! ".concat(error.message); // if (!loading) {
  //   console.log(data?.adventures);
  // }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      small: '(min-width: 0px) and (max-width: 640px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, function (matches) {
    return matches.small ? (setCard(4), renderContent(data, card)) : null;
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      large: '(min-width: 641px) and (max-width: 767px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, function (matches) {
    return matches.large ? (setCard(3), renderContent(data, card)) : null;
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      xl: '(min-width: 768px) and (max-width: 1023px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, function (matches) {
    return matches.xl ? (setCard(5), renderContent(data, card)) : null;
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      twoxl: '(min-width: 1024px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, function (matches) {
    return matches.twoxl ? (setCard(6), renderContent(data, card)) : null;
  }))), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }));
};

/***/ }),

/***/ "./src/components/presentational/AdventureCard.tsx":
/*!*********************************************************!*\
  !*** ./src/components/presentational/AdventureCard.tsx ***!
  \*********************************************************/
/*! exports provided: AdventureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureCard", function() { return AdventureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/AdventureCard.tsx";
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
    className: "w-30/31 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    className: "w-full rounded-lg",
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("p", {
    className: "uppercase text-xs my-2 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, country), __jsx("p", {
    className: "my-1 w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "From $", cost, " / person", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, " \xB7 "), period, " days")));
};

/***/ })

})
//# sourceMappingURL=index.js.8a9f604262f7cdc2994f.hot-update.js.map