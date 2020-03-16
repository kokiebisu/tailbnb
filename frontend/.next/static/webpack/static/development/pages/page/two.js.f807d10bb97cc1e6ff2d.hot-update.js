webpackHotUpdate("static/development/pages/page/two.js",{

/***/ "./src/components/containers/ThreeColumn.jsx":
/*!***************************************************!*\
  !*** ./src/components/containers/ThreeColumn.jsx ***!
  \***************************************************/
/*! exports provided: ThreeColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumn", function() { return ThreeColumn; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_ThreeColumnCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/ThreeColumnCard */ "./src/components/functions/ThreeColumnCard.jsx");
/* harmony import */ var _wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/ThreeColumn.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // Components

 // Wrapper



var ThreeColumn = function ThreeColumn(_ref) {
  var sectionTitle = _ref.sectionTitle,
      sectionDescription = _ref.sectionDescription;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var locationData = [{
    img: featured1,
    category: 'Stays + Experiences',
    title: 'Classic NYC',
    description: 'The quintessential American city, NYC is hip-hop’s birthplace and the home of Broadway — explore the cultural capital with Airbnb.'
  }, {
    img: featured1,
    category: 'Stays + Experiences',
    title: 'Classic NYC',
    description: 'The quintessential American city, NYC is hip-hop’s birthplace and the home of Broadway — explore the cultural capital with Airbnb.'
  }, {
    img: featured1,
    category: 'Stays + Experiences',
    title: 'Classic NYC',
    description: 'The quintessential American city, NYC is hip-hop’s birthplace and the home of Broadway — explore the cultural capital with Airbnb.'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_4__["SectionOverflow"], {
    title: sectionTitle,
    phrase: sectionDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })) : __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, locationData.map(function (location) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: cuid__WEBPACK_IMPORTED_MODULE_5___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "w-80 lg:w-1/3 pb-5 mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_functions_ThreeColumnCard__WEBPACK_IMPORTED_MODULE_3__["ThreeColumnCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, location, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))));
  })))))));
};

/***/ }),

/***/ "./src/components/functions/ThreeColumnCard.jsx":
/*!******************************************************!*\
  !*** ./src/components/functions/ThreeColumnCard.jsx ***!
  \******************************************************/
/*! exports provided: ThreeColumnCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnCard", function() { return ThreeColumnCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/ThreeColumnCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var ThreeColumnCard = function ThreeColumnCard(_ref) {
  var img = _ref.img,
      category = _ref.category,
      title = _ref.title,
      description = _ref.description;
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "h-full w-64 sm:w-full bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    className: "w-full rounded-xl",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, category)), __jsx("div", {
    className: "flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: "uppercase text-xs my-2 font-bold text-pink-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("p", {
    className: "whitespace-normal my-1 text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, description))));
};

/***/ }),

/***/ "./src/pages/page/two.js":
/*!*******************************!*\
  !*** ./src/pages/page/two.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/HeaderCategory */ "./src/components/layout/HeaderCategory.jsx");
/* harmony import */ var _components_containers_Popular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/containers/Popular */ "./src/components/containers/Popular.tsx");
/* harmony import */ var _components_containers_Featured__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/containers/Featured */ "./src/components/containers/Featured.tsx");
/* harmony import */ var _components_containers_StayWithSuperhost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/containers/StayWithSuperhost */ "./src/components/containers/StayWithSuperhost.jsx");
/* harmony import */ var _components_containers_ThreeColumn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/containers/ThreeColumn */ "./src/components/containers/ThreeColumn.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/page/two.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Layout








var two = function two() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_1__["ExploreHeader"], {
    white: true,
    placeholder: "Try \"Barcelona\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_2__["HeaderCategory"], {
    dates: true,
    guests: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_containers_Popular__WEBPACK_IMPORTED_MODULE_3__["Popular"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_containers_StayWithSuperhost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_containers_Featured__WEBPACK_IMPORTED_MODULE_4__["Featured"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_containers_ThreeColumn__WEBPACK_IMPORTED_MODULE_6__["ThreeColumn"], {
    sectionTitle: "Unique places to stay for your next trip",
    description: "Book one of these unique spots to escape the ordinary.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (two);

/***/ })

})
//# sourceMappingURL=two.js.f807d10bb97cc1e6ff2d.hot-update.js.map