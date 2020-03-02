webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Stay.tsx":
/*!********************************************!*\
  !*** ./src/components/containers/Stay.tsx ***!
  \********************************************/
/*! exports provided: Stay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stay", function() { return Stay; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _functions_StayCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/StayCard */ "./src/components/functions/StayCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Stay.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    stays {\n      id\n      host_is_superhost\n      country\n      name\n      price\n      reviews_per_month\n      picture_url\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 // Component


 // Wrapper



var GET_STAYS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
var Stay = function Stay() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_STAYS),
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
        className: "w-1/2 md:w-1/3 lg:w-1/4 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
          lineNumber: 54
        },
        __self: this
      })));
    }

    return content;
  };

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Places to stay around the world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: cuid__WEBPACK_IMPORTED_MODULE_9___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      xs: '(min-width: 0px) and (max-width: 739px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, function (matches) {
    return matches.xs ? (setCard(1), renderContent(data, card)) : null;
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: cuid__WEBPACK_IMPORTED_MODULE_9___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      small: '(min-width: 740px) and (max-width: 987px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, function (matches) {
    return matches.small ? (setCard(1), renderContent(data, card)) : null;
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: cuid__WEBPACK_IMPORTED_MODULE_9___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      large: '(min-width: 988px) and (max-width: 1299px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, function (matches) {
    return matches.large ? (setCard(8), renderContent(data, card)) : null;
  })), __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      xl: '(min-width: 1300px) and (max-width: 1529px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, function (matches) {
    return matches.xl ? (setCard(8), renderContent(data, card)) : null;
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
    return matches.twoxl ? (setCard(8), renderContent(data, card)) : null;
  }))), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show(2000+)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.a0cc92c67f1b8321e2f6.hot-update.js.map