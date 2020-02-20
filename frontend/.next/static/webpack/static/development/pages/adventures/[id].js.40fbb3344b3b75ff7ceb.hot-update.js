webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./node_modules/form-urlencoded/form-urlencoded.js":
false,

/***/ "./node_modules/lodash.get/index.js":
false,

/***/ "./node_modules/querystringify/index.js":
false,

/***/ "./node_modules/requires-port/index.js":
false,

/***/ "./node_modules/unsplash-js/lib/constants/index.js":
false,

/***/ "./node_modules/unsplash-js/lib/methods/auth.js":
false,

/***/ "./node_modules/unsplash-js/lib/methods/collections.js":
false,

/***/ "./node_modules/unsplash-js/lib/methods/currentUser.js":
false,

/***/ "./node_modules/unsplash-js/lib/methods/photos.js":
false,

/***/ "./node_modules/unsplash-js/lib/methods/search.js":
false,

/***/ "./node_modules/unsplash-js/lib/methods/stats.js":
false,

/***/ "./node_modules/unsplash-js/lib/methods/users.js":
false,

/***/ "./node_modules/unsplash-js/lib/unsplash.js":
false,

/***/ "./node_modules/unsplash-js/lib/utils/index.js":
false,

/***/ "./node_modules/url-parse/index.js":
false,

/***/ "./src/pages/adventures/[id].js":
/*!**************************************!*\
  !*** ./src/pages/adventures/[id].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [photo, setPhoto] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    loadData();
  }, []); // const API_URL = 'https://source.unsplash.com/random/1500×1200/?home';

  const API_URL = 'https://api.unsplash.com/random/1500×1200/?home';

  const loadData = async () => {
    const response = await fetch(API_URL);
    setPhoto(response.url);
    setIsLoading(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Vacation Rentals, Homes, Experiences & Places"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hello ", router.query.id), isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Loading") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: photo,
    alt: ""
  })));
});

/***/ })

})
//# sourceMappingURL=[id].js.40fbb3344b3b75ff7ceb.hot-update.js.map