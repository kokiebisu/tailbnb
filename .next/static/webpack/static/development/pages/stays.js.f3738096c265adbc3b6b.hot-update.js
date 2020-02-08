webpackHotUpdate("static/development/pages/stays.js",{

/***/ "./src/components/THundredPlusCard.js":
/*!********************************************!*\
  !*** ./src/components/THundredPlusCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  type,
  size,
  img,
  location,
  title,
  price,
  ratings,
  reviews
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();

  const renderhost = () => {
    if (type === 'normal') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "mt-3 text-sm sm:my-2 font-light text-gray-650"
      }, size, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xB7 "), location));
    } else if (type === 'superhost') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uppercase mt-3 md:mt-0 border border-gray-800 rounded font-semibold px-1 mt-1 text-xs"
      }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-650"
      }, location));
    } else if (type === 'plus') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sm:flex sm:flex-wrap sm:items-center sm:justify-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "inline-block mt-3 md:mt-0 px-1 rounded text-white uppercase tracking-wide text-xs font-semibold bg-pink-800"
      }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-650"
      }, location));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 30,
      width: 30
    },
    className: "flex items-center justify-center absolute z-10 right-0 mr-2 mt-2 mr-1 bg-gray-300 shadow-lg rounded-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-4 w-4",
    viewBox: "0 -50 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded",
    src: img,
    alt: "adventure1"
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 165
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between"
  }, renderhost()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tracking-wide"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold"
  }, "$", price, " CAD"), "/night"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-sm"
  }, "ratings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650"
  }, "\xA0 ", reviews)));
});

/***/ })

})
//# sourceMappingURL=stays.js.f3738096c265adbc3b6b.hot-update.js.map