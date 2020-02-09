module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && _typeof(url) === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getHref",
    value: function getHref() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      return (0, _url.resolve)(pathname, parsedHref);
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      var isPrefetched = prefetched[this.getHref()];

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

      var href = this.getHref();

      _router["default"].prefetch(href);

      prefetched[href] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && _typeof(child) === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (_typeof(child.ref) === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = urlPropertyFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (_typeof(_router[property]) === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.url === _this.pathname && e.state.as === _this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath, _cachedData) {
      var pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json")).then(function (res) {
        if (!res.ok) {
          throw new Error("Failed to load static props");
        }

        return res.json();
      }).then(function (data) {
        _this.sdc[pathname] = data;
        return data;
      })["catch"](function (err) {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = _typeof(_url) === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = _typeof(_as) === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse = url_1.parse(url, true),
            pathname = _url_1$parse.pathname,
            query = _url_1$parse.query,
            protocol = _url_1$parse.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        } // @ts-ignore pathname is always a string


        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse2 = url_1.parse(as),
              asPathname = _url_1$parse2.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
        // @ts-ignore pathname is always a string

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          var hash = window.location.hash.substring(1);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          } // @ts-ignore pathname is always defined


          _this2.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
            hash: hash
          }));

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        } // @ts-ignore method should always exist on history


        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        // @ts-ignore method should always exist on history
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (Component) {
          return resolve({
            Component: Component
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "react-is"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return Component.__N_SSG ? _this3._getStaticData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](function (err) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR') {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (Component) {
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          }));
        });
      });
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch `page` code, you may wait for the data during `page` rendering.
     * This feature only works in production!
     * @param url of prefetched `page`
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var _url_1$parse3 = url_1.parse(url),
            pathname = _url_1$parse3.pathname,
            protocol = _url_1$parse3.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        } // @ts-ignore pathname is always defined


        var route = toRoute(pathname);

        _this4.pageLoader.prefetch(route).then(resolve, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, Component, error;
      return regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              Component = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", Component);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && _typeof(url) === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./public/img/high/experience-1.jpg":
/*!******************************************!*\
  !*** ./public/img/high/experience-1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-1-5c87bedd294d225752199819a2c32457.jpg";

/***/ }),

/***/ "./public/img/high/experience-2.jpg":
/*!******************************************!*\
  !*** ./public/img/high/experience-2.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-2-5a461adf3cb7e26b9d690832497294f3.jpg";

/***/ }),

/***/ "./public/img/high/experience-3.jpg":
/*!******************************************!*\
  !*** ./public/img/high/experience-3.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-3-1093d4c35b3421c65a6429ef0b53569c.jpg";

/***/ }),

/***/ "./public/img/high/experience-4.jpg":
/*!******************************************!*\
  !*** ./public/img/high/experience-4.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-4-77e96d4ef8fe9a4350d65503482f00b8.jpg";

/***/ }),

/***/ "./public/img/high/explore1.jpg":
/*!**************************************!*\
  !*** ./public/img/high/explore1.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/explore1-78555eb8ecfa2b77afa64d6104f73a07.jpg";

/***/ }),

/***/ "./public/img/high/explore2.jpg":
/*!**************************************!*\
  !*** ./public/img/high/explore2.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/explore2-ea1d6be446ac091888bb2fdc6b7c809b.jpg";

/***/ }),

/***/ "./public/img/high/explore3.jpg":
/*!**************************************!*\
  !*** ./public/img/high/explore3.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/explore3-aeb0d58d63e32f5efd9e3de68789726b.jpg";

/***/ }),

/***/ "./public/img/high/stay1.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay1.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay1-ff81a1e6cf4d444654e3667b35d2dae2.jpg";

/***/ }),

/***/ "./public/img/high/stay2.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay2-ab13e772fb306307d9bc81b6a234e868.jpg";

/***/ }),

/***/ "./public/img/high/stay3.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay3.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay3-667c26624bc587e2a0ed097fe47af9e9.jpg";

/***/ }),

/***/ "./public/img/high/stay4.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay4.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay4-dd713327130917e664b8d79985614f91.jpg";

/***/ }),

/***/ "./public/img/high/stay5.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay5.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay5-06efd6e4d14fcb7b96272f09696e7372.jpg";

/***/ }),

/***/ "./public/img/high/stay6.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay6.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay6-152121985c5e6262890ef7e05fccc38c.jpg";

/***/ }),

/***/ "./public/img/high/stay7.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay7.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay7-fe37762d5a217a0949c9c6987974c271.jpg";

/***/ }),

/***/ "./public/img/high/stay8.jpg":
/*!***********************************!*\
  !*** ./public/img/high/stay8.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stay8-071e3b9fba4717101516eb47ecbea2f3.jpg";

/***/ }),

/***/ "./public/img/low/explore1-low.jpg":
/*!*****************************************!*\
  !*** ./public/img/low/explore1-low.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./public/img/low/explore2-low.jpg":
/*!*****************************************!*\
  !*** ./public/img/low/explore2-low.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./public/img/low/explore3-low.jpg":
/*!*****************************************!*\
  !*** ./public/img/low/explore3-low.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./public/img/low/stay1-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay1-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8AoOfCWyKX+0IljlLAsykeWR2fP3c9s1i6rq2jpFcQaREtzeIjlAzKFJGdpHPzAgE8dAOcVyl1rtw+kXF7JDALm7cQFoo1QAKFGTxk8e49arzajcW2sWb2ss0amCEGPcNh3KxJwAD39fX6D21xFjKjt/X5nnvh3A0483L2O28HXmoHw9bNf2cN5cMMu8O75f8AZb5cbh3xxzRXLaRba79iUQ+JLqJV+XG0noP96iphm2PUUlL+vuKllODbv7M//9k="

/***/ }),

/***/ "./public/img/low/stay2-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay2-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8Amv8A4g6jrup2jTT28EbqwkldCI48biNwUFsAjjAzk1ynibVftsFxqhuLKW8knUtCqytIV6cEjG0DtnPHFP8AAvh6wh0a6l1QPqb6koyzsUMWC4O0jPJBHPtXZ2Njo9tYTz2+kwiSytvJR5HZyVJxzzjPocZrz6Kg6ajUleXdm0qkZybSseF3UMM0u6S0jkbGMsuCO/b65/Git2z8MvZiSKTUmnJkJ3GLHGBx1PpRUr2dtX+YaH//2Q=="

/***/ }),

/***/ "./public/img/low/stay3-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay3-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9H+J+rvaRaZJ4LWeCS5k82eKzuDFuTa3zMVyMZ4ORkHHIrGh1fxDf2j2moC/lga4aEo107LIg2neeOR97Hrg+lcpF4bfRraS3h1W6JMRVGV3AQ45YBmbBJweMdD1zx69pHh2zi8LQ2eos+oi2tyokkAV9wUjcrDkZ9OeK454qVmkbRwzTTZAtpqXnz/2XI9zabwElurRWlbCqDuLjJwcj6AUVNa6DpUjSo4vV8ooo8u52g5jRs4wecsaKPr6Wjgn943gm3dSa+4//9k="

/***/ }),

/***/ "./public/img/low/stay4-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay4-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8Aie9szOiQGCNCW+aVZFwBnGSccnA+map3esRJaidNP+2B1+ZIy42H075p+iw7Y4I/OmItseWd2STzy2c5PzH860dX02HVki+3TXEzJ8qkvtwP+A4r7Dnz9VnJy93XS6+XT9T4r2ORezUeT3tNbP8Az/QzYdc8MhSsk9qrA4IG9v1Bop2nfD/STAVSWZArleCTnnryaKHm+aJ7fj/wSVkmVvW/4f8AAP/Z"

/***/ }),

/***/ "./public/img/low/stay5-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay5-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A6PT/ANoLxhc6fpmzwnp7XV75kjEvIkUcYxgkk8HAZj/sla0de+LfjPw/biWGx0vWjd5uhEAytBGdowgBy6A87jz8xzxXgnh6yv3ms7tNXuEkigMadSMlCu4jPJGc1uavHqGsEQ3WqSgpZC2Z0GGZgQfM68Hjp0qJupzq1rF0/Zezad79DvPFHx48f2WrvDY+EdNa3MaOnmwzb1JUFlb5xyDkdO1FeGa1ZS212LV7uWXyVKq5ZgSNxPPze9FbqTtsjldr7v8Ar5H/2Q=="

/***/ }),

/***/ "./public/img/low/stay6-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay6-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAANABMDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAAJ/8QAJBAAAQQDAAEEAwEAAAAAAAAABAIDBQYBBwgJABETIhIVIUH/xAAWAQEBAQAAAAAAAAAAAAAAAAAHBQb/xAAoEQACAgEDAwEJAAAAAAAAAAABAgMEEQUSIQAUYRMiIzRBUVNUofD/2gAMAwEAAhEDEQA/AHfOdhdDo2LvOHres9f6jnqLzCJdoPYLPNsnDmRJSNWSFlJlBdlSrR0cSgCfhM15Wvj4nIDQVhjhiJJtDzTzOVHW/VtxrnjU1snbNuo+N7dTb7bmadJa6oFO13FQoGt62wXYIa0YrsXElyUUTJXONNCmCg5Fbh8nICFPx+MA4fetr4b62udJLod/8l23LVQTMsizdZxpvWcMqYCfEISVHvzYBP7hqPMbLdHMESUtt4VSmPon48tBXcnhOa2g/Hk2Dq65OQtNBdC1xWHNbwrsNQ3ZTIuZ8qKYZtYiHszTkdGvEMOtoaaeFUpr6PqQg6FfF1JbF9paSxOXh9An3xaEJgHjBw5k9jJUgKw2qrI1q+s2ky16OmR0tVa7TMdrui8a0ENg2omXaGLSepAkDb8xGMvs3SM6Y12XTtsAnZSPmunNUz8zHlLj5abpVjok9UJaTBwkU8+szKzwlyUGUWy67GFqFZy6IppWU/7m9Pt/wLgsOraC6/vkcKn2+EEDV9WYDHwpOFKQOzmwuZbbytSlYT+avbKs/wB9Xqv3elLwHrADgDsT8uPx/H9k9ZM0dZYlt9jk5+N+uD9/x+vJ6//Z"

/***/ }),

/***/ "./public/img/low/stay7-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay7-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8AxPCsEMkEeiNc2iEvJMrfaAwPyDI6D+5WrHYQz+KrXT4GBglhDTK+d6NtLcEnGOn6dKx4/ED2tp9vNnDOYZkTy5QGVlc7DxjrhuD2ODXm3i+6vrlLaW9vZbgJMjmMgKrYXgfLg4wMdf15orVK2GxElTnpZffqY0oQq0lOpHr+B6H4x8O3kevTIrackagCNZZog2333YPXPTI96K81tPEk1sjRrbr98seQRk8nG4Ej6ZordYhyV5VXf0MnCN/dhp6n/9k="

/***/ }),

/***/ "./public/img/low/stay8-low.jpg":
/*!**************************************!*\
  !*** ./public/img/low/stay8-low.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A838G+JvEF79ljstTuZVkt8TRgk+S6EYbjkBhnp6d69UXx7450i0hMcchCwiUeXN5qqMgbCuDg4PT2r5/+HUl/q2v+RBfNYTCIkzxRguwA6H16V2Wi6Xr09tqAi8VXUBV97MsIy2O3WueVCmpXtZ+V1+RgkopnsZ/aIwqhtDd32/PiJxg+mMmivn61sb65hFx/a0yGQkkBe+SOxHpRVezl/M/w/yMedn/2Q=="

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
    className: "px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5"
  }, renderContent(), children);
});

/***/ }),

/***/ "./src/components/SectionOverflow.js":
/*!*******************************************!*\
  !*** ./src/components/SectionOverflow.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/components/ShowAll.js":
/*!***********************************!*\
  !*** ./src/components/ShowAll.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 flex flex-wrap items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "font-semibold border-b border-gray-800"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "14px",
    height: "14px",
    viewBox: "0 0 451.846 451.847"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
  })))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_THundredPlusCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/THundredPlusCard */ "./src/components/THundredPlusCard.js");
/* harmony import */ var _components_ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/high/stay1.jpg */ "./public/img/high/stay1.jpg");
/* harmony import */ var _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_stay2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/high/stay2.jpg */ "./public/img/high/stay2.jpg");
/* harmony import */ var _public_img_high_stay2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_high_stay3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/high/stay3.jpg */ "./public/img/high/stay3.jpg");
/* harmony import */ var _public_img_high_stay3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_stay4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/high/stay4.jpg */ "./public/img/high/stay4.jpg");
/* harmony import */ var _public_img_high_stay4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_high_stay5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/high/stay5.jpg */ "./public/img/high/stay5.jpg");
/* harmony import */ var _public_img_high_stay5_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay5_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_high_stay6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/img/high/stay6.jpg */ "./public/img/high/stay6.jpg");
/* harmony import */ var _public_img_high_stay6_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay6_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_high_stay7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/img/high/stay7.jpg */ "./public/img/high/stay7.jpg");
/* harmony import */ var _public_img_high_stay7_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay7_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_high_stay8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/img/high/stay8.jpg */ "./public/img/high/stay8.jpg");
/* harmony import */ var _public_img_high_stay8_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay8_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/img/low/stay1-low.jpg */ "./public/img/low/stay1-low.jpg");
/* harmony import */ var _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_img_low_stay2_low_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/img/low/stay2-low.jpg */ "./public/img/low/stay2-low.jpg");
/* harmony import */ var _public_img_low_stay2_low_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay2_low_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_img_low_stay3_low_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/img/low/stay3-low.jpg */ "./public/img/low/stay3-low.jpg");
/* harmony import */ var _public_img_low_stay3_low_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay3_low_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_img_low_stay4_low_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/img/low/stay4-low.jpg */ "./public/img/low/stay4-low.jpg");
/* harmony import */ var _public_img_low_stay4_low_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay4_low_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_img_low_stay5_low_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/img/low/stay5-low.jpg */ "./public/img/low/stay5-low.jpg");
/* harmony import */ var _public_img_low_stay5_low_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay5_low_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_img_low_stay6_low_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/img/low/stay6-low.jpg */ "./public/img/low/stay6-low.jpg");
/* harmony import */ var _public_img_low_stay6_low_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay6_low_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_img_low_stay7_low_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/img/low/stay7-low.jpg */ "./public/img/low/stay7-low.jpg");
/* harmony import */ var _public_img_low_stay7_low_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay7_low_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_img_low_stay8_low_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/img/low/stay8-low.jpg */ "./public/img/low/stay8-low.jpg");
/* harmony import */ var _public_img_low_stay8_low_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay8_low_jpg__WEBPACK_IMPORTED_MODULE_18__);
 // Component


 // Images
// High Resolution








 // Low Resolution









/* harmony default export */ __webpack_exports__["default"] = (() => {
  const places = [{
    type: 'normal',
    img: _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    size: 'Entire apartment',
    location: 'Sol Madrid',
    title: 'Waterfront with extraordinary view',
    price: '86',
    ratings: '4.81',
    reviews: '156'
  }, {
    type: 'normal',
    img: _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    size: 'Entire apartment',
    location: 'Sol Madrid',
    title: 'Waterfront with extraordinary view',
    price: '86',
    ratings: '4.81',
    reviews: '156'
  }, {
    type: 'normal',
    img: _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    size: 'Entire apartment',
    location: 'Sol Madrid',
    title: 'Waterfront with extraordinary view',
    price: '86',
    ratings: '4.81',
    reviews: '156'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start w-full"
  }, places.map(({
    id,
    type,
    img,
    imglow,
    size,
    location,
    title,
    price,
    ratings,
    reviews
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-1/3 xl:w-1/4 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_THundredPlusCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      type: type,
      img: img,
      imglow: imglow,
      size: size,
      location: location,
      title: title,
      price: price,
      ratings: ratings,
      reviews: reviews
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-progressive-image */ "react-lazy-progressive-image");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  id,
  type,
  size,
  img,
  imglow,
  location,
  title,
  price,
  ratings,
  reviews
}) => {
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: img,
    placeholder: imglow
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full rounded",
    src: src
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, ratings), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650"
  }, "\xA0 (", reviews, ")")));
});

/***/ }),

/***/ "./src/components/TopRated.js":
/*!************************************!*\
  !*** ./src/components/TopRated.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopRatedCard */ "./src/components/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/high/experience-1.jpg */ "./public/img/high/experience-1.jpg");
/* harmony import */ var _public_img_high_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/high/experience-2.jpg */ "./public/img/high/experience-2.jpg");
/* harmony import */ var _public_img_high_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_high_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/high/experience-3.jpg */ "./public/img/high/experience-3.jpg");
/* harmony import */ var _public_img_high_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/high/experience-4.jpg */ "./public/img/high/experience-4.jpg");
/* harmony import */ var _public_img_high_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
 // Components


 // Images





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const toprateds = [{
    img: _public_img_high_experience_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    location: 'Italy',
    title: 'Luca & Lorenzo, cooking in Chianti hills',
    price: 172,
    reviews: 1765
  }, {
    img: _public_img_high_experience_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    location: 'Italy',
    title: 'Truffle experience Rome',
    price: 148,
    reviews: 621
  }, {
    img: _public_img_high_experience_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: 'Japan',
    title: 'Feeling Samurai Soul',
    price: 119,
    reviews: 1047
  }, {
    img: _public_img_high_experience_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: 'Italy',
    title: 'Lisbon best flavors',
    price: 90,
    reviews: 3733
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, toprateds.map(({
    img,
    location,
    title,
    price,
    reviews
  }) => {
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      img: img,
      location: location,
      title: title,
      price: price,
      reviews: reviews
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all experiences"
  }));
});

/***/ }),

/***/ "./src/components/TopRatedCard.js":
/*!****************************************!*\
  !*** ./src/components/TopRatedCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  location,
  title,
  price,
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-lg",
    src: img,
    alt: "adventure1"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 385
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-xs my-2 font-semibold"
  }, location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From $", price, "/person"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-1 text-sm"
  }, "4.71"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-650 text-sm"
  }, "\xA0 (", reviews, ")")));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TravelCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TravelCard */ "./src/components/TravelCard.js");
/* harmony import */ var _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img/high/explore1.jpg */ "./public/img/high/explore1.jpg");
/* harmony import */ var _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/high/explore2.jpg */ "./public/img/high/explore2.jpg");
/* harmony import */ var _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/high/explore3.jpg */ "./public/img/high/explore3.jpg");
/* harmony import */ var _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/low/explore1-low.jpg */ "./public/img/low/explore1-low.jpg");
/* harmony import */ var _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/low/explore2-low.jpg */ "./public/img/low/explore2-low.jpg");
/* harmony import */ var _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/low/explore3-low.jpg */ "./public/img/low/explore3-low.jpg");
/* harmony import */ var _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7__);

 // Image
// High Resolution



 // Low Resolution




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const countries = [{
    img: _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    imglow: _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: 'Sydney'
  }, {
    img: _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: 'Cape Town'
  }, {
    img: _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: 'Buenos Aires'
  }, {
    img: _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    imglow: _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    location: 'Seoul'
  }, {
    img: _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    location: 'Barcelona'
  }, {
    img: _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    location: 'Los Angeles'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full scroller"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-90 md:w-full"
  }, countries.map(({
    id,
    img,
    imglow,
    location
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-32 sm:w-1/3 mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TravelCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      img: img,
      imglow: imglow,
      location: location
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-progressive-image */ "react-lazy-progressive-image");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (({
  id,
  img,
  imglow,
  location
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/${location.toLowerCase()}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: img,
    placeholder: imglow
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    className: "h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold"
  }, location))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
    className: "z-10 sticky bg-white top-0 flex items-center justify-between relative border-b-2 shadow pb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Airbnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-8 w-8 block",
    style: {
      fill: '#FF6368'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 16 16",
    style: {
      height: 18,
      width: 18
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 px-4"
  }, "Anywhere ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xB7 "), " Stays")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./src/pages/stays.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/src/pages/stays.js */"./src/pages/stays.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lazy-progressive-image":
/*!***********************************************!*\
  !*** external "react-lazy-progressive-image" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-progressive-image");

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=stays.js.map