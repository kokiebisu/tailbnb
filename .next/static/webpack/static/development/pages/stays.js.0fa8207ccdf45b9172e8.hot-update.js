webpackHotUpdate("static/development/pages/stays.js",{

/***/ "./src/components/EnterInput.js":
false,

/***/ "./src/components/SectionOverflow.js":
/*!*******************************************!*\
  !*** ./src/components/SectionOverflow.js ***!
  \*******************************************/
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
    className: "sm:px-5 md:px-10 xl:px-0 lg:max-w-5.5xl mx-auto py-5 overflow-x-hidden overflow-y-hidden w-full"
  }, renderPhrase(), children);
});

/***/ }),

/***/ "./src/components/THundredPlus.js":
/*!****************************************!*\
  !*** ./src/components/THundredPlus.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_THundredPlusCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/THundredPlusCard */ "./src/components/THundredPlusCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/stay-1.jpg */ "./public/img/stay-1.jpg");
/* harmony import */ var _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/stay-2.jpg */ "./public/img/stay-2.jpg");
/* harmony import */ var _public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/stay-3.jpg */ "./public/img/stay-3.jpg");
/* harmony import */ var _public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/stay-4.jpg */ "./public/img/stay-4.jpg");
/* harmony import */ var _public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/stay-5.jpg */ "./public/img/stay-5.jpg");
/* harmony import */ var _public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_5_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/img/stay-6.jpg */ "./public/img/stay-6.jpg");
/* harmony import */ var _public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_6_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/img/stay-7.jpg */ "./public/img/stay-7.jpg");
/* harmony import */ var _public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_7_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/img/stay-8.jpg */ "./public/img/stay-8.jpg");
/* harmony import */ var _public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_stay_8_jpg__WEBPACK_IMPORTED_MODULE_10__);
 // Component


 // Images









/* harmony default export */ __webpack_exports__["default"] = (() => {
  const places = [{
    type: 'normal',
    img: _public_img_stay_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: 'Sol Madrid',
    title: 'Private Studio in Sol, Madrid',
    price: '91'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start w-full"
  }, places.map(({
    type,
    img,
    location,
    title,
    price
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-1/3 xl:w-1/4 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_THundredPlusCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: type,
      img: img,
      location: location,
      title: title,
      price: price
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show(2000+)"
  }));
});

/***/ }),

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
  img,
  location,
  title,
  price
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
      }, location));
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
  }, "4.71"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650"
  }, "\xA0 (276)")));
});

/***/ }),

/***/ "./src/components/Travel.js":
/*!**********************************!*\
  !*** ./src/components/Travel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TravelCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TravelCard */ "./src/components/TravelCard.js");
/* harmony import */ var _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img/explore-1.jpg */ "./public/img/explore-1.jpg");
/* harmony import */ var _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/explore-2.jpg */ "./public/img/explore-2.jpg");
/* harmony import */ var _public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/explore-3.jpg */ "./public/img/explore-3.jpg");
/* harmony import */ var _public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_explore_3_jpg__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const countries = ['Sydney', 'Cape Town', 'Buenos Aires', 'Seoul', 'Barcelona', 'Los Angeles'];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full scroller"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-90 md:w-full"
  }, countries.map(country => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-32 sm:w-1/3 mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TravelCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      img: _public_img_explore_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      title: `${country}`
    }));
  })))));
});

/***/ }),

/***/ "./src/components/TravelCard.js":
/*!**************************************!*\
  !*** ./src/components/TravelCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);

 // Dependency


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  title
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/${title.toLowerCase()}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    className: "h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none",
    alt: ""
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: 80,
    width: 130
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold"
  }, title))));
});

/***/ }),

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
/* harmony import */ var _components_Travel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Travel */ "./src/components/Travel.js");
/* harmony import */ var _components_TopRated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TopRated */ "./src/components/TopRated.js");
/* harmony import */ var _components_THundredPlus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/THundredPlus */ "./src/components/THundredPlus.js");
 // Wrapper


 // Component




/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "relative border-b-2 shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Airbnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-8 w-8 block",
    style: {
      fill: 'red'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:max-w-5.5xl xl:px-0 px-5 mx-auto py-2 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " flex flex-wrap items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Dates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full"
  }, "Filters"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-5 py-5 border-b border-gray-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-sm"
  }, "Enter dates and number of guests to see the total price per night. Tourism taxes may be added")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Travel the world with Airbnb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Travel__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Top-rated places to stay",
    phrase: "Explore some of the best-reviewed stays in the world"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRated__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "300+ places to stay"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_THundredPlus__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
});

/***/ })

})
//# sourceMappingURL=stays.js.0fa8207ccdf45b9172e8.hot-update.js.map