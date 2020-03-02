webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/cuid/index.js":
/*!************************************!*\
  !*** ./node_modules/cuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

var fingerprint = __webpack_require__(/*! ./lib/fingerprint.js */ "./node_modules/cuid/lib/fingerprint.browser.js");
var pad = __webpack_require__(/*! ./lib/pad.js */ "./node_modules/cuid/lib/pad.js");
var getRandomValue = __webpack_require__(/*! ./lib/getRandomValue.js */ "./node_modules/cuid/lib/getRandomValue.browser.js");

var c = 0,
  blockSize = 4,
  base = 36,
  discreteValues = Math.pow(base, blockSize);

function randomBlock () {
  return pad((getRandomValue() *
    discreteValues << 0)
    .toString(base), blockSize);
}

function safeCounter () {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal
  return c - 1;
}

function cuid () {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c', // hard-coded allows for sequential access

    // timestamp
    // warning: this exposes the exact date and time
    // that the uid was created.
    timestamp = (new Date().getTime()).toString(base),

    // Prevent same-machine collisions.
    counter = pad(safeCounter().toString(base), blockSize),

    // A few chars to generate distinct ids for different
    // clients (so different computers are far less
    // likely to generate the same id)
    print = fingerprint(),

    // Grab some more chars from Math.random()
    random = randomBlock() + randomBlock();

  return letter + timestamp + counter + print + random;
}

cuid.slug = function slug () {
  var date = new Date().getTime().toString(36),
    counter = safeCounter().toString(36).slice(-4),
    print = fingerprint().slice(0, 1) +
      fingerprint().slice(-1),
    random = randomBlock().slice(-2);

  return date.slice(-2) +
    counter + print + random;
};

cuid.isCuid = function isCuid (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  if (stringToCheck.startsWith('c')) return true;
  return false;
};

cuid.isSlug = function isSlug (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  var stringLength = stringToCheck.length;
  if (stringLength >= 7 && stringLength <= 10) return true;
  return false;
};

cuid.fingerprint = fingerprint;

module.exports = cuid;


/***/ }),

/***/ "./node_modules/cuid/lib/fingerprint.browser.js":
/*!******************************************************!*\
  !*** ./node_modules/cuid/lib/fingerprint.browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pad = __webpack_require__(/*! ./pad.js */ "./node_modules/cuid/lib/pad.js");

var env = typeof window === 'object' ? window : self;
var globalCount = Object.keys(env).length;
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad((mimeTypesLength +
  navigator.userAgent.length).toString(36) +
  globalCount.toString(36), 4);

module.exports = function fingerprint () {
  return clientId;
};


/***/ }),

/***/ "./node_modules/cuid/lib/getRandomValue.browser.js":
/*!*********************************************************!*\
  !*** ./node_modules/cuid/lib/getRandomValue.browser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var getRandomValue;

var crypto = typeof window !== 'undefined' &&
  (window.crypto || window.msCrypto) ||
  typeof self !== 'undefined' &&
  self.crypto;

if (crypto) {
    var lim = Math.pow(2, 32) - 1;
    getRandomValue = function () {
        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
    };
} else {
    getRandomValue = Math.random;
}

module.exports = getRandomValue;


/***/ }),

/***/ "./node_modules/cuid/lib/pad.js":
/*!**************************************!*\
  !*** ./node_modules/cuid/lib/pad.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function pad (num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};


/***/ }),

/***/ "./src/components/containers/Explore.tsx":
/*!***********************************************!*\
  !*** ./src/components/containers/Explore.tsx ***!
  \***********************************************/
/*! exports provided: Explore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Explore", function() { return Explore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_ExploreCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/ExploreCard */ "./src/components/functions/ExploreCard.tsx");
/* harmony import */ var _wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Explore.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Dependency

 // Components

 // Wrapper

 // Images
// High Resolution

var explore1 = __webpack_require__(/*! ../../../public/img/high/explore1.jpg */ "./public/img/high/explore1.jpg");

var explore2 = __webpack_require__(/*! ../../../public/img/high/explore2.jpg */ "./public/img/high/explore2.jpg");

var explore3 = __webpack_require__(/*! ../../../public/img/high/explore3.jpg */ "./public/img/high/explore3.jpg");

var explores = [{
  img: explore1,
  title: 'Stay'
}, {
  img: explore2,
  title: 'Experience'
}, {
  img: explore3,
  title: 'Adventure'
}];
var Explore = function Explore() {
  return __jsx(_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_3__["SectionOverflow"], {
    title: "Explore Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, explores.map(function (_ref) {
    var img = _ref.img,
        title = _ref.title;
    return __jsx("div", {
      className: "w-32 mr-4 sm:w-1/3 cursor-pointer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_functions_ExploreCard__WEBPACK_IMPORTED_MODULE_2__["ExploreCard"], {
      key: cuid__WEBPACK_IMPORTED_MODULE_1___default()(),
      img: img,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }));
  }))))));
};

/***/ })

})
//# sourceMappingURL=index.js.1eb9fcc3e0bc017a0f02.hot-update.js.map