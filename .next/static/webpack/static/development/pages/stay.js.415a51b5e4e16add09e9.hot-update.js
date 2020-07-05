webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./src/components/containers/THundredPlus.jsx":
/*!****************************************************!*\
  !*** ./src/components/containers/THundredPlus.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_stays_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/stays.json */ "./src/data/stays.json");
var _data_stays_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/stays.json */ "./src/data/stays.json", 1);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/THundredPlusCard */ "./src/components/functions/THundredPlusCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");


var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/components/containers/THundredPlus.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



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
    }, __jsx(_functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_5__["THundredPlusCard"], {
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

  var _useState = useState(true),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  setInterval(myTimer, 1000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_7__["ExploreSection"], {
    title: "300+ places to stay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, loading ? __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, size.width < 767 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(4, true) : null, size.width >= 767 && size.width < 1023 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(3, true) : null, size.width >= 1023 && size.width < 1279 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1279 && size.width < 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(8, true) : null) : _data_stays_json__WEBPACK_IMPORTED_MODULE_3__ && __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, size.width < 767 ? renderContent(data, 4) : null, size.width >= 767 && size.width < 1023 ? renderContent(data, 3) : null, size.width >= 1023 && size.width < 1279 ? renderContent(data, 6) : null, size.width >= 1279 && size.width < 1529 ? renderContent(data, 6) : null, size.width >= 1529 ? renderContent(data, 8) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["ShowAll"], {
    title: "Show(2000+)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_2___default()()(THundredPlus));

/***/ })

})
//# sourceMappingURL=stay.js.415a51b5e4e16add09e9.hot-update.js.map