webpackHotUpdate("static/development/pages/page/2.js",{

/***/ "./src/components/containers/Featured.jsx":
/*!************************************************!*\
  !*** ./src/components/containers/Featured.jsx ***!
  \************************************************/
/*! exports provided: Featured */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Featured", function() { return Featured; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/FeaturedCard */ "./src/components/functions/FeaturedCard.jsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Featured.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var featureds = [{
  index: 0,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/e8afe40c-86e0-4064-8f98-7a742728f266.jpg',
  location: 'Cape Town',
  verified: 940,
  description: 'Find dockside lofts, sunny studios, and more verified places to stay in a city that stuns from sky to sea.',
  type: 1,
  color: '#268cff'
}, {
  index: 1,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/afd64fec-14ea-4dbe-9f20-a5b8ee660535.jpg',
  location: 'Sydney',
  verified: 390,
  description: 'Browse verified places to stay with artful style, in a city that wows from beach to bushland.',
  type: 2,
  color: '#fa7921'
}, {
  index: 2,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/7ed333a6-a2a3-4d02-bd86-022291fd3be4.jpg',
  location: 'Chicago',
  verified: 210,
  description: "Explore Chicago's stunning architecture from the inside-in homes verified for quality and design.",
  type: 3,
  color: '#fe9920'
}, {
  index: 3,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/2e5b5fcf-df39-4486-a6a7-c1fc0c5790bc.jpg',
  location: 'San Francisco',
  verified: 290,
  description: 'Discover Victorian flats, SoMa lofts,, and more verified places to stay in a city where invention meets counterculture.',
  type: 4,
  color: '#50c878'
}, {
  index: 4,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/f8dd8070-c548-4a2b-bdb1-2b191395f8fa.jpg',
  location: 'Austin',
  verified: 400,
  description: 'Come for the music, stay for the BBQ, and rest easy in places to stay verified for quality and comfort.',
  type: 5,
  color: '#47315b'
}, {
  index: 5,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/17c76104-0a61-4e32-b9e4-dcf99f1f9237.jpg',
  location: 'Melbourne',
  verified: 440,
  description: 'Book sunny lofts, beachfront flats, and more verified places to stay in a city with world-class coffee and street art.',
  type: 6,
  color: '#c64971'
}, {
  index: 6,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/316c7597-08da-4d77-9243-13292e282050.jpg',
  location: 'London',
  verified: 550,
  description: 'Explore London from secluded garden flats and luminous lofts—all verified for quality and design.',
  type: 7,
  color: '#2b3651'
}, {
  index: 7,
  img: 'https://a0.muscache.com/4ea/air/v2/pictures/d82b445b-b7ce-4277-9131-3aab48633e9d.jpg',
  location: 'Los Angeles',
  verified: 930,
  description: 'Find beachside bungalows, mid-century modern cottages, and more verified places to stay in the City of Angels.',
  type: 8,
  color: '#dd5337'
}];
var Featured = function Featured() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(featureds[0]),
      property = _useState[0],
      setProperty = _useState[1];

  var nextProperty = function nextProperty() {
    var newIndex = property.index + 1;
    setProperty(featureds[newIndex]);
  };

  var prevProperty = function prevProperty() {
    var newIndex = property.index - 1;
    setProperty(featureds[newIndex]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "lg:max-w-8.5xl md:max-4xl bg-red-550 mx-auto relative pt-16 mb-64 pb-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: "absolute z-50 left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return nextProperty();
    },
    disabled: property.index === featureds.length - 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Next")), __jsx("div", {
    className: "absolute z-50 right-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return prevProperty();
    },
    disabled: property.index === featureds.length - 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Prev")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    id: "cards-slider active-slide-".concat(property.index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    id: "cards-slider-wrapper",
    style: {
      transform: "translateX(-33%)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, featureds.map(function (featured) {
    return __jsx(_functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_2__["FeaturedCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featured, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }));
  }))))));
};

/***/ })

})
//# sourceMappingURL=2.js.0a367bcd370b6e9282b6.hot-update.js.map