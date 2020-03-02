webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./src/components/containers/Travel.tsx":
false,

/***/ "./src/components/functions/Travel.tsx":
/*!*********************************************!*\
  !*** ./src/components/functions/Travel.tsx ***!
  \*********************************************/
/*! exports provided: Travel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel", function() { return Travel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_TravelCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/functions/TravelCard */ "./src/components/functions/TravelCard.tsx");
/* harmony import */ var _wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapper/ExploreSectionOverflow */ "./src/components/wrapper/ExploreSectionOverflow.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/Travel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Wrapper

 // Image
// High Resolution

var explore1 = __webpack_require__(/*! ../../../public/img/high/explore1.jpg */ "./public/img/high/explore1.jpg");

var explore2 = __webpack_require__(/*! ../../../public/img/high/explore2.jpg */ "./public/img/high/explore2.jpg");

var explore3 = __webpack_require__(/*! ../../../public/img/high/explore3.jpg */ "./public/img/high/explore3.jpg"); // Low Resolution


var explore1low = __webpack_require__(/*! ../../../public/img/low/explore1-low.jpg */ "./public/img/low/explore1-low.jpg");

var explore2low = __webpack_require__(/*! ../../../public/img/low/explore2-low.jpg */ "./public/img/low/explore2-low.jpg");

var explore3low = __webpack_require__(/*! ../../../public/img/low/explore3-low.jpg */ "./public/img/low/explore3-low.jpg");

var Travel = function Travel() {
  var countries = [{
    img: explore1,
    imglow: explore1low,
    location: 'Sydney'
  }, {
    img: explore2,
    imglow: explore2low,
    location: 'Cape Town'
  }, {
    img: explore3,
    imglow: explore3low,
    location: 'Buenos Aires'
  }, {
    img: explore1,
    imglow: explore1low,
    location: 'Seoul'
  }, {
    img: explore2,
    imglow: explore2low,
    location: 'Barcelona'
  }, {
    img: explore3,
    imglow: explore3low,
    location: 'Los Angeles'
  }];
  return __jsx(_wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__["ExploreSectionOverflow"], {
    title: "Travel the world with Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, countries.map(function (_ref, index) {
    var img = _ref.img,
        imglow = _ref.imglow,
        location = _ref.location;
    return __jsx("div", {
      className: "min-w-32 w-full mr-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(_components_functions_TravelCard__WEBPACK_IMPORTED_MODULE_1__["TravelCard"], {
      key: index,
      img: img,
      imglow: imglow,
      location: location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  }))))));
};

/***/ }),

/***/ "./src/pages/stay/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/stay/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_functions_Travel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/functions/Travel */ "./src/components/functions/Travel.tsx");
/* harmony import */ var _components_containers_TopRated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/containers/TopRated */ "./src/components/containers/TopRated.tsx");
/* harmony import */ var _components_containers_THundredPlus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/containers/THundredPlus */ "./src/components/containers/THundredPlus.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stay/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Layout


 // Component



 // Next

var Stay = function Stay() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("header", {
    className: "z-20 sticky bg-white top-0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__["ExploreHeader"], {
    mode: "white",
    type: "Stays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    className: "px-5 md:px-0 mx-auto py-2 border-b border-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "mx-auto md:max-w-90% flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Dates"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Guests"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Filters"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Work trip"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Type of place"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Price"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Instant Book"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "More filters")))), __jsx("div", {
    className: "max-w-90% md:px-0 mx-auto py-5 border-b border-gray-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Enter dates and number of guests to see the total price per night. Tourism taxes may be added")), __jsx(_components_functions_Travel__WEBPACK_IMPORTED_MODULE_3__["Travel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_components_containers_TopRated__WEBPACK_IMPORTED_MODULE_4__["TopRated"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_containers_THundredPlus__WEBPACK_IMPORTED_MODULE_5__["THundredPlus"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Stay);

/***/ })

})
//# sourceMappingURL=stay.js.0546b2720da04bef97f2.hot-update.js.map