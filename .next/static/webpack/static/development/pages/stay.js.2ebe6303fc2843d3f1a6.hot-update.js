webpackHotUpdate("static/development/pages/stay.js",{

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
/* harmony import */ var _data_stays_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/stays.json */ "./src/data/stays.json");
var _data_stays_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/stays.json */ "./src/data/stays.json", 1);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/THundredPlusCard */ "./src/components/functions/THundredPlusCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/components/containers/THundredPlus.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



 // Component


 // Wrapper



var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "pb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(_functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_4__["THundredPlusCard"], {
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
        lineNumber: 19,
        columnNumber: 9
      }
    })));
  }

  return content;
};

var THundredPlus = function THundredPlus(_ref) {
  var size = _ref.size;
  console.log('thundred plus data', _data_stays_json__WEBPACK_IMPORTED_MODULE_2__);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_1___default()()(THundredPlus));

/***/ })

})
//# sourceMappingURL=stay.js.2ebe6303fc2843d3f1a6.hot-update.js.map