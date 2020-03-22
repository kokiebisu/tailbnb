webpackHotUpdate("static/development/pages/page/2.js",{

/***/ "./src/components/containers/Featured.jsx":
/*!************************************************!*\
  !*** ./src/components/containers/Featured.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_FeaturedCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/FeaturedCard */ "./src/components/functions/FeaturedCard.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _functions_Arrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../functions/Arrow */ "./src/components/functions/Arrow.jsx");
/* harmony import */ var _functions_CarouselCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../functions/CarouselCard */ "./src/components/functions/CarouselCard.jsx");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _functions_ThreeColumnCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../functions/ThreeColumnCard */ "./src/components/functions/ThreeColumnCard.jsx");




var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Featured.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transform: translateX(-", "px);\n  transition: transform ease-out ", "s;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











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

var Featured = function Featured(_ref) {
  var size = _ref.size;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  var setSleep = function setSleep(seconds) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function setSleep$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(sleep(seconds));

          case 2:
            setLoading(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    translate: 0,
    transition: 0.45,
    activeIndex: 0
  }),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      width = _useState3[0],
      setWidth = _useState3[1];

  var container = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useLayoutEffect"])(function () {
    if (container.current) {
      setWidth(container.current.offsetWidth);
    }
  }, []);
  var translate = state.translate,
      transition = state.transition,
      activeIndex = state.activeIndex;

  var nextSlide = function nextSlide() {
    if (activeIndex === 3) {
      return setState(_objectSpread({}, state, {
        translate: 0,
        activeIndex: 0
      }));
    }

    setState(_objectSpread({}, state, {
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width / 3
    }));
  };

  var prevSlide = function prevSlide() {
    if (activeIndex === 0) {
      return;
    }

    setState(_objectSpread({}, state, {
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width / 3
    }));
  };

  setSleep(3000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    ref: container,
    id: "carousel",
    className: "w-full px-6 md:px-8 lg:px-10 xl:px-0 xl:max-w-8xl mx-auto relative mt-8 overflow-hidden h-88",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Featured Airbnb Plus destinations")), __jsx("div", {
    className: "pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Browse beautiful places to stay with all the comforts of home, plus more")), size.width > 1340 ? __jsx("div", {
    className: "w-full h-96 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(SliderContent, {
    translate: translate,
    transition: transition,
    width: width * 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_functions_CarouselCard__WEBPACK_IMPORTED_MODULE_10__["CarouselCard"], {
    bg: "blue",
    featured1: featureds[0],
    featured2: featureds[1],
    featured3: featureds[2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), __jsx(_functions_CarouselCard__WEBPACK_IMPORTED_MODULE_10__["CarouselCard"], {
    bg: "blue",
    featured1: featureds[3],
    featured2: featureds[4],
    featured3: featureds[5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), __jsx(_functions_CarouselCard__WEBPACK_IMPORTED_MODULE_10__["CarouselCard"], {
    bg: "blue",
    featured1: featureds[6],
    featured2: featureds[7],
    featured3: featureds[8],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  })), __jsx("div", {
    className: "absolute",
    style: {
      top: '45%',
      left: -15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("button", {
    onClick: prevSlide,
    className: "bg-white p-3 rounded-full shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("svg", {
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492 492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("path", {
    d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }))))))), __jsx("div", {
    className: "absolute",
    style: {
      top: '45%',
      right: -5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx("button", {
    onClick: nextSlide,
    className: " bg-white p-3 shadow-xl rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("svg", {
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492.004 492.004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("path", {
    d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  })))))))) : __jsx("div", {
    className: "overflow-x-hidden overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("div", {
    className: "grid grid-cols-3 py-2 rounded-xl min-w-256 h-52 md:w-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, featureds.map(function (featured) {
    return __jsx("div", {
      className: "w-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, __jsx(_functions_ThreeColumnCard__WEBPACK_IMPORTED_MODULE_12__["ThreeColumnCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, featured, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    })));
  }))))))));
};

var SliderContent = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), function (props) {
  return props.translate;
}, function (props) {
  return props.transition;
}, function (props) {
  return props.width;
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_sizeme__WEBPACK_IMPORTED_MODULE_11__["withSize"])()(Featured));

/***/ })

})
//# sourceMappingURL=2.js.52669a130ba09587d449.hot-update.js.map