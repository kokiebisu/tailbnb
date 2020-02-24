webpackHotUpdate("static/development/pages/stays.js",{

/***/ "./src/components/wrapper/ExploreSectionOverflow.js":
/*!**********************************************************!*\
  !*** ./src/components/wrapper/ExploreSectionOverflow.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/ExploreSectionOverflow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      children = _ref.children;

  function renderPhrase() {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "scrollable text-gray-850 text-2xl pt-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "scrollable text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        className: "scrollable text-gray-850 text-2xl font-semibold py-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, title));
    }
  }

  return __jsx("div", {
    className: "md:px-0 max-w-90% mx-auto py-5 overflow-x-hidden overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, renderPhrase(), children);
});

/***/ }),

/***/ "./src/pages/stays.tsx":
/*!*****************************!*\
  !*** ./src/pages/stays.tsx ***!
  \*****************************/
/*! exports provided: Stays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stays", function() { return Stays; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/wrapper/ExploreSectionOverflow */ "./src/components/wrapper/ExploreSectionOverflow.js");
/* harmony import */ var _components_containers_Travel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/containers/Travel */ "./src/components/containers/Travel.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Wrapper
// import Section from '../components/wrapper/Section';
// import SectionOverflow from '../components/wrapper/SectionOverflow';
// import StaySection from '../components/wrapper/ExploreSection';

 // import Footer from '../components/layout/Footer';
// import ExploreHeader from '../components/layout/ExploreHeader';
// Component

 // import TopRated from '../components/containers/TopRated';
// import THundredPlus from '../components/containers/THundredPlus';

var Stays = function Stays() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: "z-20 sticky bg-white top-0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "px-5 md:px-0 mx-auto py-2 border-b border-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "mx-auto md:max-w-90% flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Dates"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Guests"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Filters"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Work trip"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Type of place"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Price"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Instant Book"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "More filters")))), __jsx("div", {
    className: "max-w-90% md:px-0 mx-auto py-5 border-b border-gray-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Enter dates and number of guests to see the total price per night. Tourism taxes may be added")), __jsx(_components_wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Travel the world with Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_components_containers_Travel__WEBPACK_IMPORTED_MODULE_2__["Travel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=stays.js.9f73369f748ec86859e8.hot-update.js.map