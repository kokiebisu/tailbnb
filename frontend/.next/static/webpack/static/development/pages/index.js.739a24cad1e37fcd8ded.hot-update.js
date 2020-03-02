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
/* harmony import */ var _functions_AdventureCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/AdventureCard */ "./src/components/functions/AdventureCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");

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


 // Wrapper


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

    for (var i = 0; i < number; i++) {
      content.push(__jsx("div", {
        className: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
          lineNumber: 51
        },
        __self: this
      })));
    }

    return content;
  };

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Introducing Airbnb Adventures",
    phrase: "Multi-day trips led by local experts\u2014activities, meals, and stays included",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      small: '(min-width: 0px) and (max-width: 640px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, function (matches) {
    return matches.small ? (setCard(1), renderContent(data, card)) : null;
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      large: '(min-width: 641px) and (max-width: 767px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, function (matches) {
    return matches.large && data.adventures ? (setCard(4), renderContent(data, card)) : null;
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      xl: '(min-width: 768px) and (max-width: 1023px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, function (matches) {
    return matches.xl && data.adventures ? (setCard(4), renderContent(data, card)) : null;
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    queries: {
      twoxl: '(min-width: 1024px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, function (matches) {
    return matches.twoxl ? (setCard(4), renderContent(data, card)) : null;
  })))), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.739a24cad1e37fcd8ded.hot-update.js.map