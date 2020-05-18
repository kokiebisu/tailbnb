webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/components/stays/containers/MoreHomes.tsx":
/*!*******************************************************!*\
  !*** ./src/components/stays/containers/MoreHomes.tsx ***!
  \*******************************************************/
/*! exports provided: MoreHomes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreHomes", function() { return MoreHomes; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_HomeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/HomeCard */ "./src/components/functions/HomeCard.tsx");
/* harmony import */ var _wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../wrapper/DetailSectionOverflow */ "./src/components/wrapper/DetailSectionOverflow.tsx");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/stays/containers/MoreHomes.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Stay($id: ID!) {\n      stay(where: { id: $id }) {\n        picture_url\n        name\n        street\n        reviews_per_month\n        number_of_reviews\n        country\n        size\n        description\n        space\n        access\n        notes\n        host_name\n        hostDescription\n        host_since\n        duringStay\n        host_is_superhost\n        host_thumbnail_url\n        host_picture_url\n        host_response_rate\n        host_response_time\n        accommodates\n        beds\n        bedrooms\n        bathrooms\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // Component

 // Wrapper



var MoreHomes = function MoreHomes() {
  var GET_MORE_HOMES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
  return __jsx(_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_3__["DetailSectionOverflow"], {
    title: "More places to stay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full scroller",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured w-full md:w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(_functions_HomeCard__WEBPACK_IMPORTED_MODULE_2__["HomeCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx(_functions_HomeCard__WEBPACK_IMPORTED_MODULE_2__["HomeCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(_functions_HomeCard__WEBPACK_IMPORTED_MODULE_2__["HomeCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })))))));
};

/***/ })

})
//# sourceMappingURL=[id].js.c028db248d35abe577af.hot-update.js.map