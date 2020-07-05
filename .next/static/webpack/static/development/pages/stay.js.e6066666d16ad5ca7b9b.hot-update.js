webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
false,

/***/ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
false,

/***/ "./node_modules/@wry/context/lib/context.esm.js":
false,

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
false,

/***/ "./node_modules/apollo-boost/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-client/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-error/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http-common/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
false,

/***/ "./node_modules/fast-json-stable-stringify/index.js":
false,

/***/ "./node_modules/graphql-tag/src/index.js":
false,

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
false,

/***/ "./node_modules/graphql/error/syntaxError.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineToStringTag.mjs":
false,

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
false,

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
false,

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
false,

/***/ "./node_modules/graphql/language/blockString.mjs":
false,

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
false,

/***/ "./node_modules/graphql/language/kinds.mjs":
false,

/***/ "./node_modules/graphql/language/lexer.mjs":
false,

/***/ "./node_modules/graphql/language/location.mjs":
false,

/***/ "./node_modules/graphql/language/parser.mjs":
false,

/***/ "./node_modules/graphql/language/printLocation.mjs":
false,

/***/ "./node_modules/graphql/language/printer.mjs":
false,

/***/ "./node_modules/graphql/language/source.mjs":
false,

/***/ "./node_modules/graphql/language/tokenKind.mjs":
false,

/***/ "./node_modules/graphql/language/visitor.mjs":
false,

/***/ "./node_modules/optimism/lib/bundle.esm.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/ts-invariant/lib/invariant.esm.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
false,

/***/ "./node_modules/zen-observable/index.js":
false,

/***/ "./node_modules/zen-observable/lib/Observable.js":
false,

/***/ "./src/components/containers/THundredPlus.jsx":
/*!****************************************************!*\
  !*** ./src/components/containers/THundredPlus.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/THundredPlusCard */ "./src/components/functions/THundredPlusCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/components/containers/THundredPlus.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


 // Component


 // Wrapper



var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    console.log(data);
    content.push(__jsx("div", {
      className: "pb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(_functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_3__["THundredPlusCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.stays[i].id,
      host_is_superhost: data === null || data === void 0 ? void 0 : data.stays[i].host_is_superhost,
      country: data === null || data === void 0 ? void 0 : data.stays[i].country,
      name: data === null || data === void 0 ? void 0 : data.stays[i].name,
      price: data === null || data === void 0 ? void 0 : data.stays[i].price,
      reviews_per_month: data === null || data === void 0 ? void 0 : data.stays[i].reviews_per_month,
      picture_url: data === null || data === void 0 ? void 0 : data.stays[i].picture_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    })));
  }

  return content;
};

var THundredPlus = function THundredPlus(_ref) {
  var size = _ref.size;

  var _useQuery = useQuery(staydata),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);

  if (data) {
    console.log(data);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_5__["ExploreSection"], {
    title: "300+ places to stay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, loading ? __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, size.width < 767 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_2__["renderSkeletonHorizontal"])(4, true) : null, size.width >= 767 && size.width < 1023 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_2__["renderSkeletonHorizontal"])(3, true) : null, size.width >= 1023 && size.width < 1279 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_2__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1279 && size.width < 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_2__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_2__["renderSkeletonHorizontal"])(8, true) : null) : data && __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, size.width < 767 ? renderContent(data, 4) : null, size.width >= 767 && size.width < 1023 ? renderContent(data, 3) : null, size.width >= 1023 && size.width < 1279 ? renderContent(data, 6) : null, size.width >= 1279 && size.width < 1529 ? renderContent(data, 6) : null, size.width >= 1529 ? renderContent(data, 8) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_4__["ShowAll"], {
    title: "Show(2000+)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_1___default()()(THundredPlus));

/***/ })

})
//# sourceMappingURL=stay.js.e6066666d16ad5ca7b9b.hot-update.js.map