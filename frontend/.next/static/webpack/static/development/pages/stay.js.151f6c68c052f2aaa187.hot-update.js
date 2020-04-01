webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./node_modules/react-sizes/dist/react-sizes.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-sizes/dist/react-sizes.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports,__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e,t){"use strict";var n="default"in t?t.default:t;function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p="Expected a function",d=NaN,b="[object Symbol]",h=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,g=/^0o[0-7]+$/i,m=parseInt,w="object"==typeof s&&s&&s.Object===Object&&s,O="object"==typeof self&&self&&self.Object===Object&&self,j=w||O||Function("return this")(),P=Object.prototype.toString,k=Math.max,S=Math.min,T=function(){return j.Date.now()};function z(e,t,n){var r,i,o,a,u,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function b(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-f>=o}function v(){var e=T();if(h(e))return y(e);u=setTimeout(v,function(e){var n=t-(e-c);return s?S(n,o-(e-f)):n}(e))}function y(e){return u=void 0,d&&r?b(e):(r=i=void 0,a)}function g(){var e=T(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return function(e){return f=e,u=setTimeout(v,t),l?b(e):a}(c);if(s)return u=setTimeout(v,t),b(c)}return void 0===u&&(u=setTimeout(v,t)),a}return t=E(t)||0,x(n)&&(l=!!n.leading,o=(s="maxWait"in n)?k(E(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=c=i=u=void 0},g.flush=function(){return void 0===u?a:y(T())},g}function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&P.call(e)==b}(e))return d;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=y.test(e);return n||g.test(e)?m(e.slice(2),n?2:8):v.test(e)?d:+e}var D=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(p);return x(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),z(e,t,{leading:r,maxWait:t,trailing:i})},W=function(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1},_=n.createContext({fallbackWidth:null,fallbackHeight:null,forceFallback:!1,throttle:200});_.displayName="SizesContext";var F=function(e){return e.width<480},H=function(e){return e.width>=1024},M=function(e){return!H(e)},C=Object.freeze({isMobile:F,isTablet:function(e){var t=e.width;return t>=480&&t<1024},isDesktop:H,isGtMobile:function(e){return!F(e)},isGtTablet:function(e){return H(e)},isStTablet:function(e){return F(e)},isStDesktop:M,isTabletAndGreater:function(e){return!F(e)},isTabletAndSmaller:function(e){return!M(e)}}),N=function(e){return function(e){var t=e.fallbackWidth,n=void 0===t?null:t,r=e.fallbackHeight,i=void 0===r?null:r,o=e.forceFallback,a=void 0!==o&&o,u="undefined"!=typeof window;return{width:u&&!a?window.innerWidth:n,height:u&&!a?window.innerHeight:i,canUseDOM:u}}({fallbackHeight:e.fallbackHeight,fallbackWidth:e.fallbackWidth,forceFallback:e.forceFallback})},A=Object.assign(function(){for(var e=arguments.length,s=new Array(e),p=0;p<e;p++)s[p]=arguments[p];return function(e){var p,d=function(e,t){return s.map(function(n){return n(e,t)}).reduce(function(e,t){return a({},e,t)},{})},b=function(a){function s(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),n=this,r=u(s).call(this,e),t=!r||"object"!=typeof r&&"function"!=typeof r?l(n):r,i(l(l(t)),"dispatchSizes",function(){var e=t.getPropsToPass();W(e,t.state.propsToPass)&&t.setState({propsToPass:e})}),i(l(l(t)),"throttledDispatchSizes",D(t.dispatchSizes,t.props.throttle)),t.getPropsToPass=function(){return d(N(t.props),t.props)},t.state={propsToPass:t.getPropsToPass()},t}var p,b,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,t.PureComponent),p=s,h=[{key:"getDerivedStateFromProps",value:function(e,t){var n=d(N(e),e);return W(n,t.propsToPass)?{propsToPass:n}:null}}],(b=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.throttledDispatchSizes),this.dispatchSizes()}},{key:"componentWillUnmount",value:function(){this.throttledDispatchSizes.cancel(),window.removeEventListener("resize",this.throttledDispatchSizes)}},{key:"render",value:function(){var t=this.props,r=(t.fallbackHeight,t.fallbackWidth,t.forceFallback,f(t,["fallbackHeight","fallbackWidth","forceFallback"]));return n.createElement(e,o({},r,this.state.propsToPass))}}])&&r(p.prototype,b),h&&r(p,h),s}();return i(b,"displayName","withSizes(".concat((p=e).displayName||p.name||("string"==typeof p&&p.length>0?p:"Unknown"),")")),function(e){return n.createElement(_.Consumer,null,function(t){return n.createElement(b,o({},t,e))})}}},a({},C)),$=function(e){var t=e.children,n=e.render,r=f(e,["children","render"]),i=t||n;return i?i(r):null};e.withSizes=A,e.SizesProvider=function(e){var t=e.config,r=e.children;return n.createElement(_.Provider,{value:t},r)},e.createSizedComponent=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A(t)($)},e.presets=C,e.default=A,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/layout/HeaderCategory.jsx":
/*!**************************************************!*\
  !*** ./src/components/layout/HeaderCategory.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/HeaderCategory.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var HeaderCategory = function HeaderCategory(_ref) {
  var size = _ref.size;
  return __jsx("div", {
    className: "px-5 md:px-0 mx-auto py-2 border-b border-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "mx-auto md:max-w-90% flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, size.width > 600 ? __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Cancellation flexibility") : null, size.width > 600 ? __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Type of place") : null, size.width > 600 ? __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Price") : null, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Instant Book"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "More filters"), size.width > 600 ? __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Price") : null, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Instant Book"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "More filters")));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_1___default()()(HeaderCategory));

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
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.jsx");
/* harmony import */ var _components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/HeaderCategory */ "./src/components/layout/HeaderCategory.jsx");
/* harmony import */ var _components_functions_Travel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/functions/Travel */ "./src/components/functions/Travel.tsx");
/* harmony import */ var _components_containers_TopRated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/containers/TopRated */ "./src/components/containers/TopRated.jsx");
/* harmony import */ var _components_containers_THundredPlus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/containers/THundredPlus */ "./src/components/containers/THundredPlus.tsx");
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
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__["ExploreHeader"], {
    white: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    className: "max-w-90% md:px-0 mx-auto py-5 border-b border-gray-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Enter dates and number of guests to see the total price per night. Tourism taxes may be added")), __jsx(_components_functions_Travel__WEBPACK_IMPORTED_MODULE_4__["Travel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_containers_TopRated__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_containers_THundredPlus__WEBPACK_IMPORTED_MODULE_6__["THundredPlus"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_1__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Stay);

/***/ })

})
//# sourceMappingURL=stay.js.151f6c68c052f2aaa187.hot-update.js.map