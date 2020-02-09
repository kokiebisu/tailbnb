webpackHotUpdate("static/development/pages/stays.js",{

/***/ "./src/components/ExploreSection.js":
/*!******************************************!*\
  !*** ./src/components/ExploreSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
  const renderContent = () => {
    if (phrase) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl text-gray-850 pt-3"
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-md mb-5 text-gray-850 pb-3"
      }, phrase));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-gray-850 text-2xl py-3 "
      }, title));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:px-0 max-w-90% xl:px-0 mx-auto py-5"
  }, renderContent(), children);
});

/***/ }),

/***/ "./src/components/ExploreSectionOverflow.js":
/*!**************************************************!*\
  !*** ./src/components/ExploreSectionOverflow.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
  function renderPhrase() {
    if (phrase) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "scrollable text-gray-850 text-2xl pt-3 w-5/6"
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "scrollable text-md mb-5 text-gray-850 pb-3"
      }, phrase));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "scrollable text-gray-850 text-2xl font-semibold py-3 w-5/6"
      }, title));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:px-0 max-w-90% mx-auto py-5 overflow-x-hidden overflow-y-hidden"
  }, renderPhrase(), children);
});

/***/ }),

/***/ "./src/components/StaySection.js":
false,

/***/ "./src/components/StaySectionOverflow.js":
false,

/***/ "./src/pages/stays.js":
/*!****************************!*\
  !*** ./src/pages/stays.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _components_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SectionOverflow */ "./src/components/SectionOverflow.js");
/* harmony import */ var _components_ExploreSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExploreSection */ "./src/components/ExploreSection.js");
/* harmony import */ var _components_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExploreSectionOverflow */ "./src/components/ExploreSectionOverflow.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ExploreHeader */ "./src/components/ExploreHeader.js");
/* harmony import */ var _components_Travel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Travel */ "./src/components/Travel.js");
/* harmony import */ var _components_TopRated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TopRated */ "./src/components/TopRated.js");
/* harmony import */ var _components_THundredPlus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/THundredPlus */ "./src/components/THundredPlus.js");
 // Wrapper






 // Component




/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "z-20 sticky bg-white top-0 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "Stays"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-5 md:px-0 mx-auto py-2 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto md:max-w-90% flex flex-wrap items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Dates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Filters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Work trip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Type of place"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Instant Book"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "More filters")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-90% md:px-0 mx-auto py-5 border-b border-gray-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-sm"
  }, "Enter dates and number of guests to see the total price per night. Tourism taxes may be added")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Travel the world with Airbnb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Travel__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Top-rated places to stay",
    phrase: "Explore some of the best-reviewed stays in the world"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRated__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "300+ places to stay"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_THundredPlus__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
});

/***/ })

})
//# sourceMappingURL=stays.js.a7ed31733e4f55342b09.hot-update.js.map