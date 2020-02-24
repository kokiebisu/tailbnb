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

/***/ "./public/img/high/airbnb-background.jpg":
/*!***********************************************!*\
  !*** ./public/img/high/airbnb-background.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airbnb-background-b8b3c94eb622e8a6083c338facb6c4fd.jpg";

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

/***/ "./public/img/high/facebook.png":
/*!**************************************!*\
  !*** ./public/img/high/facebook.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/facebook-8f5ce27564945d2c9a10ef827549a78c.png";

/***/ }),

/***/ "./public/img/high/featured1.jpg":
/*!***************************************!*\
  !*** ./public/img/high/featured1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/featured1-61cfa1ad94e59dfb8a0aa9025d12eda4.jpg";

/***/ }),

/***/ "./public/img/high/featured2.jpg":
/*!***************************************!*\
  !*** ./public/img/high/featured2.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/featured2-f194738a33c75d7529e437a24fce67e0.jpg";

/***/ }),

/***/ "./public/img/high/featured3.jpg":
/*!***************************************!*\
  !*** ./public/img/high/featured3.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/featured3-8b63bad827adf3b1fab9832d1f1dbd41.jpg";

/***/ }),

/***/ "./public/img/high/google.png":
/*!************************************!*\
  !*** ./public/img/high/google.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-8b201685859c6b291fb39019e19896fd.png";

/***/ }),

/***/ "./public/img/high/plus-1.jpg":
/*!************************************!*\
  !*** ./public/img/high/plus-1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/plus-1-1cd90d428ed098d36d4099a3514aa633.jpg";

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

/***/ "./public/img/low/featured1-low.jpg":
/*!******************************************!*\
  !*** ./public/img/low/featured1-low.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAATAB0DASIAAhEBAxEB/8QAGwAAAQQDAAAAAAAAAAAAAAAAAAQHCAoBBgn/xAAoEAABBAEDBAIBBQAAAAAAAAABAgMEBQYHESEACBITFEFhIjJDU/H/xAAXAQEBAQEAAAAAAAAAAAAAAAAFBgME/8QAJhEAAgICAAUEAwEAAAAAAAAAAQMCBAURABITIkEGITFRYpGx8P/aAAwDAQACEQMRAD8AucVhbKktAj2BAd8Pv1k+Hn+QFcHng+P46zc6gYBixeRk+c4VjXxG/OSMky3HaD4yPUHiuSbizhJjoDJDxW8UIDRDpIbIV1zl7rNQtfL+t07h9queYthDZtZ1rqbmmT0OUzreuxmK5VIrajEsVZw+/lX1ndOqtXJ7DFX82NFr40dMyqbtHJghD3eDTTWLUXUWLeaudxGLVt1WOY3OosY7Ps31Cx9tuZh8HF7W0psknad2tfOsraNHYkuz0CzRVT2Uwoa/RHfbeByGZuonar0cVbuWKs6o74uhWfGylzeZLayLjiFSVFbJzrxV1JmK5zmtkY22J9L4VlbDZLOeqsdQpZdeV3XxwjkMxi54y5TqQjlKVluNqoF+L3WaUF5B9idesWuShViqxthxyXFkRm340hiQxJYYksPR3m32X40hAeYksOsqW29HfaKXWH21KZfbIcaWtBCi2N8tBsnSD/Gz9H+tPUGcL7xtPqTR+NYVUTNVQMKh4vh783ItONQMPyqypMMqsbqBIjY9muIUUaxnPVjkjZyOquqGHDKlMF9UN2KvacW7p8BzhqZcWOR0uKtPGDJrIWQW1bXWLldOr48lv2sS26ppbkJ5T9dIkRi+l6ZEkqKIzYYS4tXuhxTEretjgSFuQ5UgQJHU+ouJX2wMhziIOwASZRBmLGOapM3iaWVos6Yat6WcxBgARFc2AgmetRMiOWRIAG+F8RILiBsNlNr3AGwP7R9bfXH+dOSI7MiPu82lwpjMBPkOEgtJUQkDYJBUSdkgDcnjo6OtVDc/f6PB0j2n/eRwgfhxkwZDaWUhC1gLSPIBQ8UjY7HkbcdMXkFLUOzVF2sgukFQBdjNObfpbHHmlW2+w8iOVHlW556OjpFQHP8AA7Y7j7fBIiCR9EgkHXg6455EgSAJGxHz+W/6B+uP/9k="

/***/ }),

/***/ "./public/img/low/featured2-low.jpg":
/*!******************************************!*\
  !*** ./public/img/low/featured2-low.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./public/img/low/featured3-low.jpg":
/*!******************************************!*\
  !*** ./public/img/low/featured3-low.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./public/img/low/plus-1-low.jpg":
/*!***************************************!*\
  !*** ./public/img/low/plus-1-low.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/plus-1-low-a499e2d28f52b0dde07a4665e69e3865.jpg";

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
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/ShowAll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title
}) => {
  return __jsx("div", {
    className: "mt-4 flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "font-semibold border-b border-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, title), __jsx("div", {
    className: "pl-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "14px",
    height: "14px",
    viewBox: "0 0 451.846 451.847",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("path", {
    d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })))));
});

/***/ }),

/***/ "./src/components/containers/Adventures.js":
/*!*************************************************!*\
  !*** ./src/components/containers/Adventures.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _presentational_AdventureCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presentational/AdventureCard */ "./src/components/presentational/AdventureCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Adventures.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Component



const GET_ADVENTURES = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    adventures {
      id
      title
      period
      cost
      country
      img
      imglow
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_ADVENTURES);
  const {
    0: card,
    1: setCard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const renderContent = (data, number) => {
    var content = [];

    for (let i = 0; i < number; i++) {
      content.push(__jsx("div", {
        className: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      }, __jsx(_presentational_AdventureCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: data[i].id,
        id: data[i].id,
        img: data[i].img,
        imglow: data[i].imglow,
        country: data[i].country,
        title: data[i].title,
        cost: data[i].cost,
        period: data[i].period,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: undefined
      })));
    }

    return content;
  };

  if (loading) {
    return __jsx("div", {
      className: "flex justify-center items-center w-full py-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 10,
      color: '#008489',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }));
  }

  if (error) return `Error! ${error.message}`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      small: '(min-width: 0px) and (max-width: 640px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, matches => matches.small ? (setCard(4), renderContent(data.adventures, card)) : null), __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      large: '(min-width: 641px) and (max-width: 767px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, matches => matches.large ? (setCard(3), renderContent(data.adventures, card)) : null), __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      xl: '(min-width: 768px) and (max-width: 1023px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, matches => matches.xl ? (setCard(5), renderContent(data.adventures, card)) : null), __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      twoxl: '(min-width: 1024px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, matches => matches.twoxl ? (setCard(6), renderContent(data.adventures, card)) : null)) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./src/components/containers/Explore.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Explore.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_ExploreCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/ExploreCard */ "./src/components/presentational/ExploreCard.tsx");
/* harmony import */ var _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/explore1.jpg */ "./public/img/high/explore1.jpg");
/* harmony import */ var _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/high/explore2.jpg */ "./public/img/high/explore2.jpg");
/* harmony import */ var _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/high/explore3.jpg */ "./public/img/high/explore3.jpg");
/* harmony import */ var _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/low/explore1-low.jpg */ "./public/img/low/explore1-low.jpg");
/* harmony import */ var _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/low/explore2-low.jpg */ "./public/img/low/explore2-low.jpg");
/* harmony import */ var _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/low/explore3-low.jpg */ "./public/img/low/explore3-low.jpg");
/* harmony import */ var _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Explore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Components

 // Images
// High Resolution



 // Low Resolution




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const explores = [{
    id: 1,
    img: _public_img_high_explore1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    imglow: _public_img_low_explore1_low_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: 'Stays'
  }, {
    id: 2,
    img: _public_img_high_explore2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_explore2_low_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    title: 'Experiences'
  }, {
    id: 3,
    img: _public_img_high_explore3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_explore3_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    title: 'Adventures'
  }];
  return __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-80 md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, explores.map(({
    id,
    img,
    imglow,
    title
  }) => {
    return __jsx("div", {
      className: "w-32 mr-4 sm:w-1/3 cursor-pointer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, __jsx(_presentational_ExploreCard__WEBPACK_IMPORTED_MODULE_1__["ExploreCard"], {
      key: id,
      img: img,
      imglow: imglow,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }));
  })))));
});

/***/ }),

/***/ "./src/components/containers/Featured.js":
/*!***********************************************!*\
  !*** ./src/components/containers/Featured.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presentational_FeaturedCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentational/FeaturedCard */ "./src/components/presentational/FeaturedCard.tsx");
/* harmony import */ var _public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/high/featured1.jpg */ "./public/img/high/featured1.jpg");
/* harmony import */ var _public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/high/featured2.jpg */ "./public/img/high/featured2.jpg");
/* harmony import */ var _public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/high/featured3.jpg */ "./public/img/high/featured3.jpg");
/* harmony import */ var _public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/low/featured1-low.jpg */ "./public/img/low/featured1-low.jpg");
/* harmony import */ var _public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/low/featured2-low.jpg */ "./public/img/low/featured2-low.jpg");
/* harmony import */ var _public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/img/low/featured3-low.jpg */ "./public/img/low/featured3-low.jpg");
/* harmony import */ var _public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Featured.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Components

 // Images
// High Resolution



 // Low Resolution




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSleep = async seconds => {
    await sleep(seconds);
    setLoading(false);
  };

  const featureds = [{
    img: _public_img_high_featured1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    imglow: _public_img_low_featured1_low_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    verified: 940,
    description: 'Find beachside bungalows, mid-century modern cottages, and more verified placed to stay in the City of Angels'
  }, {
    img: _public_img_high_featured2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_featured2_low_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    verified: 300,
    description: 'Discover Victorian flats, SoMa lofts, and more verified places stay in a city where invention meets counterculture.'
  }, {
    img: _public_img_high_featured3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    imglow: _public_img_low_featured3_low_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    verified: 290,
    description: 'Take in soaring views and Edwardian details from Toronto places to stay verified for quality and design'
  }];
  setSleep(3000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })) : __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, featureds.map(({
    id,
    img,
    imglow,
    verified,
    description
  }) => {
    return __jsx("div", {
      className: "w-80 lg:w-1/3 pb-5 mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }, __jsx(_presentational_FeaturedCard__WEBPACK_IMPORTED_MODULE_2__["FeaturedCard"], {
      key: id,
      img: img,
      imglow: imglow,
      verified: verified,
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }));
  }))))));
});

/***/ }),

/***/ "./src/components/containers/Plus.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Plus.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_PlusCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/PlusCard */ "./src/components/presentational/PlusCard.tsx");
/* harmony import */ var _public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/plus-1.jpg */ "./public/img/high/plus-1.jpg");
/* harmony import */ var _public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/low/plus-1-low.jpg */ "./public/img/low/plus-1-low.jpg");
/* harmony import */ var _public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Plus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Components

 // Images
// High Resolution

 // Low Resolution


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_presentational_PlusCard__WEBPACK_IMPORTED_MODULE_1__["PlusCard"], {
    img: _public_img_high_plus_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    imglow: _public_img_low_plus_1_low_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./src/components/containers/Popular.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Popular.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presentational_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentational/Location */ "./src/components/presentational/Location.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Popular.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSleep = async seconds => {
    await sleep(seconds);
    setLoading(false);
  };

  const locations = [{
    id: 1,
    location: 'San Francisco',
    price: 216
  }, {
    id: 2,
    location: 'Los Angeles',
    price: 213
  }, {
    id: 3,
    location: 'New York',
    price: 159
  }, {
    id: 4,
    location: 'Seattle',
    price: 134
  }, {
    id: 5,
    location: 'Denver',
    price: 128
  }, {
    id: 6,
    location: 'Washington DC',
    price: 166
  }, {
    id: 7,
    location: 'Phoenix',
    price: 232
  }, {
    id: 8,
    location: 'Austin',
    price: 242
  }, {
    id: 9,
    location: 'Houston',
    price: 351
  }, {
    id: 10,
    location: 'New Orleans',
    price: 210
  }];
  setSleep(5000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })) : __jsx("div", {
    className: "flex flex-wrap items-center justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, locations.map(({
    id,
    location,
    price
  }) => {
    return __jsx("div", {
      className: "text-gray-750 sm:w-1/2 lg:w-1/4 xl:w-1/5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, __jsx(_presentational_Location__WEBPACK_IMPORTED_MODULE_2__["Location"], {
      key: id,
      location: location,
      price: price,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }));
  })));
});

/***/ }),

/***/ "./src/components/containers/Stay.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Stay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _presentational_StayCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presentational/StayCard */ "./src/components/presentational/StayCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Stay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Component



const GET_STAYS = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    stays {
      id
      host_is_superhost
      country
      name
      price
      reviews_per_month
      picture_url
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_STAYS);

  if (loading) {
    return __jsx("div", {
      className: "flex justify-center items-center w-full py-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 10,
      color: '#008489',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }));
  }

  if (error) return `Error! ${error.message}`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data ? __jsx("div", {
    className: "flex flex-wrap items-start justify-start w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, data.stays.map(({
    id,
    host_is_superhost,
    country,
    name,
    price,
    reviews_per_month,
    picture_url
  }) => {
    return __jsx("div", {
      className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, __jsx(_presentational_StayCard__WEBPACK_IMPORTED_MODULE_4__["StayCard"], {
      key: id,
      id: id,
      host_is_superhost: host_is_superhost,
      country: country,
      name: name,
      price: price,
      reviews_per_month: reviews_per_month,
      picture_url: picture_url,
      picture_url_low: picture_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }));
  })) : null, __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Show(2000+)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./src/components/containers/TopRated.js":
/*!***********************************************!*\
  !*** ./src/components/containers/TopRated.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _presentational_TopRatedCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presentational/TopRatedCard */ "./src/components/presentational/TopRatedCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/TopRated.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Components



const GET_EXPERIENCES = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      ratings
      location
      imglow
      img
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_EXPERIENCES);
  const {
    0: card,
    1: setCard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const renderContent = (data, number) => {
    var content = [];

    for (let i = 0; i < number; i++) {
      content.push(__jsx("div", {
        className: "w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: undefined
      }, __jsx(_presentational_TopRatedCard__WEBPACK_IMPORTED_MODULE_5__["TopRatedCard"], {
        key: data[i].id,
        id: data[i].id,
        img: data[i].img,
        imglow: data[i].imglow,
        country: data[i].country,
        title: data[i].title,
        cost: data[i].cost,
        period: data[i].period,
        ratings: data[i].ratings,
        reviews: data[i].reviews,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: undefined
      })));
    }

    return content;
  };

  if (loading) {
    return __jsx("div", {
      className: "flex justify-center items-center w-full py-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 10,
      color: '#008489',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }));
  }

  if (error) return `Error! ${error.message}`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      xs: '(min-width: 0px) and (max-width: 739px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, matches => matches.xs ? (setCard(4), renderContent(data.experiences, card)) : null), __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      small: '(min-width: 740px) and (max-width: 987px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, matches => matches.small ? (setCard(3), renderContent(data.experiences, card)) : null), __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      large: '(min-width: 988px) and (max-width: 1299px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, matches => matches.large ? (setCard(4), renderContent(data.experiences, card)) : null), __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      xl: '(min-width: 1300px) and (max-width: 1529px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, matches => matches.xl ? (setCard(5), renderContent(data.experiences, card)) : null), __jsx(react_media__WEBPACK_IMPORTED_MODULE_4___default.a, {
    queries: {
      xl: '(min-width: 1530px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, matches => matches.xl ? (setCard(6), renderContent(data.experiences, card)) : null)) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./src/components/layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContent */ "./src/components/layout/FooterContent.js");
/* harmony import */ var _FooterInducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterInducer */ "./src/components/layout/FooterInducer.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Component



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, display ? __jsx(_FooterContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    swap: changeDisplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }) : __jsx(_FooterInducer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    swap: changeDisplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./src/components/layout/FooterContent.js":
/*!************************************************!*\
  !*** ./src/components/layout/FooterContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/FooterContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  swap
}) => {
  return __jsx("div", {
    className: "hidden md:block fixed bottom-0 bg-white w-full border-t border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:px-20 px-5 xl:px-0 lg:max-w-6xl xl:max-w-5.5xl mx-auto py-6 sm:py-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:items-start md:w-full md:justify-between md:pb-6 md:border-b md:border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "News")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Policies")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Diversity & Belonging")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Accessibility")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Discover"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Trust & Safety")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Travel Credit")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Airbnb Citizen")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Business Travel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Things To Do")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Airbnbmag")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-905 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Hosting"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Why Host")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Hospitality")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Responsible Hosting")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Community Centre")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Host an Experience")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Open Homes")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-sm mb-2 text-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Support"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Help")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Neighbourhood Support"))))), __jsx("div", {
    className: "flex flex-wrap items-center justify-between sm:pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-wrap items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-5 w-5 block",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  })), __jsx("p", {
    className: "pl-2 text-sm  text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "\xA9 2020 Airbnb, Inc. All rights reserved."), __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:justify-between md:items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-sm text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "\u3000\u2744\uFE0F Cloned by"), __jsx("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, "\xA0Ken"))), __jsx("div", {
    className: "hidden lg:flex lg:items-center lg:justify-start lg:flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    width: "512pt",
    style: {
      fill: '#767676'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }), __jsx("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }), __jsx("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }), __jsx("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }), __jsx("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), __jsx("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }), __jsx("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), __jsx("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }), __jsx("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }), __jsx("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }), __jsx("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }), __jsx("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  })), __jsx("svg", {
    className: "h-5 w-5 ml-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676',
      marginRight: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }))), __jsx("svg", {
    className: "w-5 h-5 ml-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, __jsx("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, __jsx("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }))))))), __jsx("button", {
    onClick: swap,
    className: "flex items-center justify-start hover:bg-gray-100 bg-white z-10 shadow-xl fixed bottom-0 lg:right-0 ml-4 lg:mr-4 mb-3 rounded-lg py-2 px-4 font-semibold text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-3 w-3 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, __jsx("path", {
    d: "M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892 L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999 c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998 c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, "Close")));
});

/***/ }),

/***/ "./src/components/layout/FooterInducer.js":
/*!************************************************!*\
  !*** ./src/components/layout/FooterInducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/FooterInducer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  swap
}) => {
  return __jsx("button", {
    onClick: swap,
    className: "hidden md:block hover:bg-gray-100 md:flex md:items-center justify-start fixed bottom-0 md:ml-3 md:mb-3 lg:right-0  lg:mr-3 z-50 bg-white text-sm py-2 px-4 rounded-lg shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-4 w-4 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("path", {
    d: "M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Terms, privacy, & more"));
});

/***/ }),

/***/ "./src/components/layout/Header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-addons-css-transition-group */ "react-addons-css-transition-group");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _presentational_HeaderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presentational/HeaderCard */ "./src/components/presentational/HeaderCard.tsx");
/* harmony import */ var _modals_RegisterModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/RegisterModal */ "./src/components/modals/RegisterModal.js");
/* harmony import */ var _modals_HelpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/HelpModal */ "./src/components/modals/HelpModal.js");
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Component



 // Images


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: registerModal,
    1: setRegisterModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: helpModal,
    1: setHelpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const switchRegisterModal = mode => {
    setRegisterModal(mode);
  };

  const switchHelpModal = mode => {
    setHelpModal(mode);
  };

  const switchType = type => {
    setType(type);
  };

  const configureScroll = name => {
    document.body.style.overflow = name;
  };

  return __jsx("header", {
    style: {
      backgroundImage: `url(${_public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_6___default.a})`,
      maxHeight: '80rem'
    },
    className: "w-screen md:h-screen md:min-h-80 relative bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: "m-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-8 w-8 block",
    style: {
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "hidden lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex items-center justify-around flex-wrap text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "flex items-center justify-start text-sm mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: '#ffffff',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "English(CA)"))), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "$CAD")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Host a home")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Host an experience")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => switchHelpModal(true),
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Help")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => {
      switchType('Sign up');
      switchRegisterModal(true);
    },
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Sign up")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => {
      switchType('Log in');
      switchRegisterModal(true, 'login');
    },
    href: "#",
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Log in"))))), __jsx("div", {
    className: "md:ml-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("h3", {
    className: "md:hidden px-4 pb-4 pt-16 text-white inline-block font-sans text-3xl font-bold leading-tight w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "Book unique places to stay and things to do."), __jsx(_presentational_HeaderCard__WEBPACK_IMPORTED_MODULE_3__["HeaderCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })), __jsx("div", {
    className: "hidden md:block absolute bottom-0 right-0 mr-8 mb-8 text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "Over 300 unique places ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), "to stay in Japan")), registerModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, false ? undefined : null, type == 'Log in' ? __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setRegisterModal: setRegisterModal,
    type: "Log in",
    nottype: "Sign up",
    phrase: `Don\'t`,
    setType: switchType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }) : __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setRegisterModal: setRegisterModal,
    type: "Sign up",
    nottype: "Log in",
    phrase: "Already",
    setType: switchType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, false ? undefined : null), helpModal ? __jsx(_modals_HelpModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setHelpModal: switchHelpModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }) : null);
});

/***/ }),

/***/ "./src/components/modals/HelpModal.js":
/*!********************************************!*\
  !*** ./src/components/modals/HelpModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_HelpCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/HelpCard */ "./src/components/presentational/HelpCard.tsx");
/* harmony import */ var _presentational_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentational/HelpAdditional */ "./src/components/presentational/HelpAdditional.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/HelpModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Components



/* harmony default export */ __webpack_exports__["default"] = (({
  setHelpModal
}) => {
  const {
    0: word,
    1: setWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: accountModal,
    1: setAccountModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = event => {
    return setWord(event.target.value);
  };

  const questions = [{
    title: 'How do I create an account?',
    answer: "If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up. You can sign up using your email address, Facebook account, Google account, or Apple ID. Signing up and creating an Airbnb account is free. <br>After you sign up, be sure to complete your account before booking a reservation. "
  }];
  return __jsx("div", {
    className: "bg-white z-100 md:block fixed top-0 right-0 h-screen w-104 shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-5 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Recommended help"), __jsx("button", {
    onClick: () => setHelpModal(false),
    className: "absolute top-0 right-0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "pt-6 pr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("path", {
    d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: "bg-red-500 border-b border-t border-gray-300 p-8 relative h-full overflow-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Search by keyword"), __jsx("div", {
    id: "helpsearch",
    className: "flex border border-gray-300 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/12 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("svg", {
    className: "absolute top-0 pl-2 pt-2 h-6 w-6",
    style: {
      fill: '#767676'
    },
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("path", {
    d: "m10.7227 19.9083c-4.919-.706-8.336-5.266-7.63-10.185.704-4.919 5.264-8.336 10.184-7.631 4.919.706 8.336 5.265 7.632 10.185-.706 4.92-5.266 8.336-10.186 7.631m11.65 2.76-3.729-4.196c1.706-1.514 2.905-3.618 3.254-6.053.783-5.467-3.013-10.533-8.479-11.317-5.467-.784-10.534 3.013-11.316 8.48-.784 5.466 3.012 10.532 8.478 11.315 2.675.384 5.254-.329 7.283-1.798l3.762 4.233c.184.207.5.225.706.042.206-.184.225-.5.041-.706",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))), __jsx("div", {
    className: "w-11/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("input", {
    value: word,
    onChange: handleChange,
    style: {
      fontFamily: 'airbnb-medium'
    },
    type: "text",
    className: "w-full h-8 text-sm text-gray-750 focus:outline-none",
    placeholder: "E.g. reservation status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })))), __jsx("div", {
    className: "mt-8 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-xs text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Recommended Articles")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_presentational_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].answer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx(_presentational_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].answer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  })), __jsx("div", {
    className: "mt-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-gray-750 text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Explore More Articles By Topic")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(_presentational_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["HelpAdditional"], {
    title: "Reservation requests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), __jsx(_presentational_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["HelpAdditional"], {
    title: "Reservation requests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }))), __jsx("div", {
    className: "flex flex-col justify-end items-center my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-11/12 bg-green-850 py-2 text-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Visit the Help Centre"), __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "border-b border-green-850 text-green-850 text-sm my-1",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Give Feedback")));
});

/***/ }),

/***/ "./src/components/modals/RegisterModal.js":
/*!************************************************!*\
  !*** ./src/components/modals/RegisterModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_high_facebook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/img/high/facebook.png */ "./public/img/high/facebook.png");
/* harmony import */ var _public_img_high_facebook_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_facebook_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_high_google_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/google.png */ "./public/img/high/google.png");
/* harmony import */ var _public_img_high_google_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_google_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/RegisterModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Images



/* harmony default export */ __webpack_exports__["default"] = (({
  setRegisterModal,
  setType,
  type,
  nottype,
  phrase
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "darkOverlay",
    className: "fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    id: "centerAbsolute",
    className: "relative rounded-xl hidden fixed bg-white md:block w-144 pb-8 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full border-b border-gray-300 mt-2 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative w-11/12 flex justify-center items-center my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center absolute left-0 z-20 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => setRegisterModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })))))), __jsx("div", {
    className: "w-full flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, type)))), __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-11/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-3 mt-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("form", {
    action: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-book'
    },
    htmlFor: "country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "absolute text-gray-650 text-xs top-0 pl-3 pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Country/Region"), __jsx("select", {
    name: "country",
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "appearance-none w-full border-t border-r border-l border-gray-500 py-4 rounded-b-none rounded-lg placeholder-gray-900 pl-3",
    id: "countryinput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Canada (+1)"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Japan (+81)"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "United States (+1)")), __jsx("div", {
    className: "h-full pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("svg", {
    className: "fill-current h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("input", {
    className: "appearance-none  w-full border border-gray-500 py-3 rounded-t-none rounded-lg placeholder-gray-900 pl-4",
    type: "text",
    name: "phone",
    style: {
      fontFamily: 'airbnb-book'
    },
    placeholder: "Phone number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-xs text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "We'll call or text you to confirm your number. Standard message and data rates apply.")), __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full bg-pink-750 py-3 rounded-lg text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Continue")), __jsx("div", {
    className: "pt-4 pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("p", {
    id: "pseudo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-xs text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "or"))), __jsx("div", {
    className: "w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("div", {
    className: "absolute left-0 ml-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-5 h-5",
    style: {
      fill: '#767676'
    },
    viewBox: "0 0 479.058 479.058",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx("path", {
    d: "m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Continue with email")), __jsx("div", {
    className: "w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginLeft: 15
    },
    className: "absolute left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-6 h-6",
    src: _public_img_high_facebook_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "Continue with Facebook")), __jsx("div", {
    className: "w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginLeft: 17
    },
    className: "absolute left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-5 h-5",
    src: _public_img_high_google_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "Continue with Google")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, phrase, " have an account?"), __jsx("button", {
    onClick: () => setType(`${nottype}`),
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "border-b border-gray-750 text-sm ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, nottype))))));
});

/***/ }),

/***/ "./src/components/presentational/AdventureCard.js":
/*!********************************************************!*\
  !*** ./src/components/presentational/AdventureCard.js ***!
  \********************************************************/
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
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/AdventureCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  id,
  img,
  imglow,
  country,
  title,
  cost,
  period
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/adventures/[id]",
    as: `/adventures/${id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-30/31 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: img,
    placeholder: imglow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, (src, loading, isVisible) => __jsx("img", {
    className: "w-full rounded-lg",
    src: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx("p", {
    className: "uppercase text-xs my-2 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, country), __jsx("p", {
    className: "my-1 w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "From $", cost, " / person", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, " \xB7 "), period, " days")));
});

/***/ }),

/***/ "./src/components/presentational/ExploreCard.tsx":
/*!*******************************************************!*\
  !*** ./src/components/presentational/ExploreCard.tsx ***!
  \*******************************************************/
/*! exports provided: ExploreCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreCard", function() { return ExploreCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/ExploreCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // import LazyImage from 'react-lazy-progressive-image';

const ExploreCard = ({
  img,
  title
}) => {
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/${title.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    src: img,
    className: "h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, title))));
};

/***/ }),

/***/ "./src/components/presentational/FeaturedCard.tsx":
/*!********************************************************!*\
  !*** ./src/components/presentational/FeaturedCard.tsx ***!
  \********************************************************/
/*! exports provided: FeaturedCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedCard", function() { return FeaturedCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/FeaturedCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // import LazyImage from 'react-lazy-progressive-image';

const FeaturedCard = ({
  img,
  verified,
  description
}) => {
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full w-64 sm:w-full bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full rounded-xl",
    src: img,
    alt: "adventure1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("p", {
    className: "uppercase text-xs my-2 font-bold text-pink-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, verified, "+ Verified Stays")), __jsx("p", {
    className: "whitespace-normal my-1 text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, description)));
};

/***/ }),

/***/ "./src/components/presentational/HeaderCard.tsx":
/*!******************************************************!*\
  !*** ./src/components/presentational/HeaderCard.tsx ***!
  \******************************************************/
/*! exports provided: HeaderCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCard", function() { return HeaderCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/HeaderCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const HeaderCard = () => {
  return __jsx("div", {
    className: "sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "mx-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden md:inline-block md:text-3xl text-gray-750 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Book unique places to ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), "stay and things to do."), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs text-gray-750 uppercase tracking-wider",
    htmlFor: "where",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Where"), __jsx("input", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide",
    type: "text",
    id: "where",
    placeholder: "Anywhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex flex-wrap items-stretch justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs text-gray-750 uppercase",
    htmlFor: "checkin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Check-In"), __jsx("input", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkin",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs uppercase text-gray-750",
    htmlFor: "checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Check-Out"), __jsx("input", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkout",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs uppercase text-gray-750",
    htmlFor: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Guests"), __jsx("div", {
    className: "inline-block relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("select", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    id: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "2 Guests"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "3 Guests"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "4 Guests")), __jsx("div", {
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })))))), __jsx("div", {
    className: "w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("button", {
    className: "w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-500 rounded text-white font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Search"))));
};

/***/ }),

/***/ "./src/components/presentational/HelpAdditional.tsx":
/*!**********************************************************!*\
  !*** ./src/components/presentational/HelpAdditional.tsx ***!
  \**********************************************************/
/*! exports provided: HelpAdditional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpAdditional", function() { return HelpAdditional; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/HelpAdditional.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const HelpAdditional = () => {
  return __jsx("div", {
    className: "border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-between py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Reservation requests"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#000000'
    },
    className: "w-2 h-2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.011 512.011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("path", {
    d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })))))));
};

/***/ }),

/***/ "./src/components/presentational/HelpCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/presentational/HelpCard.tsx ***!
  \****************************************************/
/*! exports provided: HelpCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCard", function() { return HelpCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/HelpCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const HelpCard = ({
  title,
  answer
}) => {
  const renderAnswer = answer => {
    const wordArray = answer.split(' ');
    const newArray = [];

    for (let i = 0; i < 20; i++) {
      newArray.push(wordArray[i]);
    }

    newArray.push('...');
    const something = newArray.join(' ');
    return something;
  };

  const newAnswer = renderAnswer(answer);
  return __jsx("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, title), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, newAnswer), __jsx("button", {
    className: "flex ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-green-850 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Read more"), __jsx("div", {
    className: "pl-3 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    style: {
      fill: '#008489',
      paddingTop: 1,
      paddingRight: 3
    },
    viewBox: "0 0 451.846 451.847",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("path", {
    d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }))))));
};

/***/ }),

/***/ "./src/components/presentational/Location.tsx":
/*!****************************************************!*\
  !*** ./src/components/presentational/Location.tsx ***!
  \****************************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/Location.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const Location = ({
  location,
  price
}) => {
  return __jsx("div", {
    className: "w-30/31 py-3 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, location), __jsx("p", {
    className: "text-xs font-normal text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "$", price, "/night average"));
};

/***/ }),

/***/ "./src/components/presentational/PlusCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/presentational/PlusCard.tsx ***!
  \****************************************************/
/*! exports provided: PlusCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusCard", function() { return PlusCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/PlusCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // import LazyImage from 'react-lazy-progressive-image';

const PlusCard = ({
  img
}) => {
  return __jsx("div", {
    className: "w-full cursor pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full h-64 bg-cover bg-no-repeat object-cover rounded",
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/components/presentational/StayCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/presentational/StayCard.tsx ***!
  \****************************************************/
/*! exports provided: StayCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StayCard", function() { return StayCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/StayCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // import LazyImage from 'react-lazy-progressive-image';


const StayCard = ({
  id,
  host_is_superhost,
  name,
  price,
  country,
  reviews_per_month,
  picture_url
}) => {
  const renderhost = host_is_superhost => {
    if (host_is_superhost == 't') {
      return __jsx("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }, __jsx("p", {
        className: "uppercase mt-3 md:mt-0 border border-gray-800 rounded font-semibold px-1 mt-1 text-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: undefined
      }, "Superhost"), __jsx("p", {
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      }, country));
    } else {
      return __jsx("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: undefined
      }, __jsx("p", {
        className: "mt-3 text-sm sm:my-2 font-light text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: undefined
      }, country));
    }
  };

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/stays/[id]",
    as: `/stays/${id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-30/31 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full rounded",
    src: picture_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, renderhost(host_is_superhost), __jsx("div", {
    className: "flex items-center justify-center flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }))), __jsx("p", {
    className: "pl-1 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, reviews_per_month))), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, name), __jsx("p", {
    className: "tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "$", price, " CAD"), "/night")));
};

/***/ }),

/***/ "./src/components/presentational/TopRatedCard.tsx":
/*!********************************************************!*\
  !*** ./src/components/presentational/TopRatedCard.tsx ***!
  \********************************************************/
/*! exports provided: TopRatedCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedCard", function() { return TopRatedCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/TopRatedCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // import LazyImage from 'react-lazy-progressive-image';


const TopRatedCard = ({
  id,
  img,
  title,
  cost,
  ratings,
  reviews,
  location
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/experiences/[id]",
    as: `/experiences/${id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-30/31 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full rounded-lg",
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("p", {
    className: "uppercase text-xs my-2 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, location), __jsx("p", {
    className: "my-1 w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "From $", cost, "/person"), __jsx("div", {
    className: "flex items-center justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))), __jsx("p", {
    className: "pl-1 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, ratings), __jsx("p", {
    className: "text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "\xA0 (", reviews, ")"))));
};

/***/ }),

/***/ "./src/components/wrapper/Section.js":
/*!*******************************************!*\
  !*** ./src/components/wrapper/Section.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
  const renderContent = phrase => {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl text-gray-850 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: undefined
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-gray-850 text-2xl pt-3 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: undefined
      }, title));
    }
  };

  return __jsx("div", {
    className: "px-10 md:px-20 xl:max-w-layout mx-auto py-5 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, renderContent(phrase), children);
});

/***/ }),

/***/ "./src/components/wrapper/SectionOverflow.js":
/*!***************************************************!*\
  !*** ./src/components/wrapper/SectionOverflow.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/SectionOverflow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
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
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "scrollable text-gray-850 text-2xl py-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, title));
    }
  }

  return __jsx("div", {
    className: "px-10 md:px-20 xl:max-w-layout mx-auto py-5 overflow-x-hidden overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, renderPhrase(), children);
});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_wrapper_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/wrapper/Section */ "./src/components/wrapper/Section.js");
/* harmony import */ var _components_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wrapper/SectionOverflow */ "./src/components/wrapper/SectionOverflow.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.js");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.js");
/* harmony import */ var _components_containers_Plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/containers/Plus */ "./src/components/containers/Plus.js");
/* harmony import */ var _components_containers_Adventures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/containers/Adventures */ "./src/components/containers/Adventures.js");
/* harmony import */ var _components_containers_Stay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/containers/Stay */ "./src/components/containers/Stay.js");
/* harmony import */ var _components_containers_TopRated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/containers/TopRated */ "./src/components/containers/TopRated.js");
/* harmony import */ var _components_containers_Popular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/containers/Popular */ "./src/components/containers/Popular.js");
/* harmony import */ var _components_containers_Featured__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/containers/Featured */ "./src/components/containers/Featured.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/Footer */ "./src/components/layout/Footer.js");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Wrapper


 // Component











const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_components_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Explore Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Airbnb Plus places to stay",
    phrase: "A selection of places to stay verified for quality and design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_components_containers_Plus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Introducing Airbnb Adventures",
    phrase: "Multi-day trips led by local experts\u2014activities, meals, and stays included",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_components_containers_Adventures__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Places to stay around the world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_components_containers_Stay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), __jsx(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Top-rated experiences",
    phrase: "Book activities led by local hosts on your next trip.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_components_containers_TopRated__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), __jsx(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Popular destinations in the United States",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_components_containers_Popular__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), __jsx(_components_wrapper_SectionOverflow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Featured Airbnb Plus destinations",
    phrase: "Browse beautiful places to stay with all the comforts of home, plus more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_components_containers_Featured__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/frontend/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

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

/***/ "react-addons-css-transition-group":
/*!****************************************************!*\
  !*** external "react-addons-css-transition-group" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

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

/***/ "react-media":
/*!******************************!*\
  !*** external "react-media" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-media");

/***/ }),

/***/ "react-spinners/PulseLoader":
/*!*********************************************!*\
  !*** external "react-spinners/PulseLoader" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners/PulseLoader");

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

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
//# sourceMappingURL=index.js.map