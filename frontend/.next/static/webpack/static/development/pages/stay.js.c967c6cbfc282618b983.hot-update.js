webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./src/components/containers/THundredPlus.jsx":
/*!****************************************************!*\
  !*** ./src/components/containers/THundredPlus.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/THundredPlusCard */ "./src/components/functions/THundredPlusCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");


var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/THundredPlus.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    stays {\n      id\n      host_is_superhost\n      size\n      country\n      name\n      price\n      reviews_per_month\n      number_of_reviews\n      picture_url\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // Component


 // Wrapper


var staydata = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject()); // interface StayData {
//   stays: Stay[];
// }
// interface Stay {
//   id: string;
//   host_is_superhost: string;
//   size: string;
//   country: string;
//   name: string;
//   price: number;
//   reviews_per_month: number;
//   number_of_reviews: number;
//   picture_url: string;
// }

var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    console.log(data);
    content.push(__jsx("div", {
      className: "pb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, __jsx(_functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_6__["THundredPlusCard"], {
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
        lineNumber: 54,
        columnNumber: 9
      }
    })));
  }

  return content;
};

var THundredPlus = function THundredPlus(_ref) {
  var size = _ref.size;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(staydata),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_8__["ExploreSection"], {
    title: "300+ places to stay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, loading ? __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, size.width < 767 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_5__["renderSkeletonHorizontal"])(4, true) : null, size.width >= 767 && size.width < 1023 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_5__["renderSkeletonHorizontal"])(3, true) : null, size.width >= 1023 && size.width < 1279 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_5__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1279 && size.width < 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_5__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_5__["renderSkeletonHorizontal"])(8, true) : null) : data && __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, size.width < 767 ? renderContent(data, 4) : null, size.width >= 767 && size.width < 1023 ? renderContent(data, 3) : null, size.width >= 1023 && size.width < 1279 ? renderContent(data, 6) : null, size.width >= 1279 && size.width < 1529 ? renderContent(data, 6) : null, size.width >= 1529 ? renderContent(data, 8) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show(2000+)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_4___default()()(THundredPlus));

/***/ })

})
//# sourceMappingURL=stay.js.c967c6cbfc282618b983.hot-update.js.map