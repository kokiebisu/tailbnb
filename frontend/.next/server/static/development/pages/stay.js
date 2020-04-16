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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

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
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

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
    value: function prefetch(options) {
      if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
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

          _this3.prefetch({
            priority: true
          });
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

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
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
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

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


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
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

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

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
    this.isFallback = isFallback;

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
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
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

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

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
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

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

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

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
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
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

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
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

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
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
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "react-is"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
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
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
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
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
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
              componentResult = _context.sent;

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

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
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
  }, null, null, null, Promise);
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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

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
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./public/img/high/barcelona.jpg":
/*!***************************************!*\
  !*** ./public/img/high/barcelona.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/barcelona-19f86de950baf3a77b1f86f58820aad7.jpg";

/***/ }),

/***/ "./public/img/high/buenosaires.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/buenosaires.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/buenosaires-76a20d1c093b1aa3d03bc9ad1756d98e.jpg";

/***/ }),

/***/ "./public/img/high/capetown.jpg":
/*!**************************************!*\
  !*** ./public/img/high/capetown.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/capetown-bde19f9507315126bb4f12027ddbe217.jpg";

/***/ }),

/***/ "./public/img/high/losangeles.jpg":
/*!****************************************!*\
  !*** ./public/img/high/losangeles.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/losangeles-1357059c011cdbbc15d786aa2d675da6.jpg";

/***/ }),

/***/ "./public/img/high/seoul.jpg":
/*!***********************************!*\
  !*** ./public/img/high/seoul.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/seoul-0181e3d051e8df5b4602ca1e3e130aad.jpg";

/***/ }),

/***/ "./public/img/high/sydney.jpg":
/*!************************************!*\
  !*** ./public/img/high/sydney.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sydney-462efd43f44e77c8a4ff03ae520cbe27.jpg";

/***/ }),

/***/ "./src/components/ShowAll.tsx":
/*!************************************!*\
  !*** ./src/components/ShowAll.tsx ***!
  \************************************/
/*! exports provided: ShowAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAll", function() { return ShowAll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/ShowAll.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const ShowAll = ({
  title
}) => {
  return __jsx("div", {
    className: "mt-4 flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "font-semibold border-b border-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, title), __jsx("div", {
    className: "pl-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("path", {
    d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })))));
};

/***/ }),

/***/ "./src/components/containers/SearchBar.jsx":
/*!*************************************************!*\
  !*** ./src/components/containers/SearchBar.jsx ***!
  \*************************************************/
/*! exports provided: SearchBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/SearchBar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const SearchBar = () => {
  return __jsx(Wrapper, {
    className: "flex border border-gray-300 rounded-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      padding: '0.5rem 0.8rem'
    },
    className: "border-r border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:text-gray-750 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Add destination")), __jsx("div", {
    style: {
      padding: '0.5rem 0.8rem'
    },
    className: "border-r border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:text-gray-750 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Add dates")), __jsx("div", {
    style: {
      padding: '0.5rem 0.8rem'
    },
    className: "border-r border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:text-gray-750 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Add guests")), __jsx("div", {
    className: "flex justify-center",
    style: {
      padding: '0.5rem 1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 515.558 515.558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("path", {
    d: "m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z",
    "data-original": "#000000",
    class: "active-path",
    "data-old_color": "#000000",
    fill: "#FB5252",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })))))));
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  }
`;

/***/ }),

/***/ "./src/components/containers/THundredPlus.jsx":
/*!****************************************************!*\
  !*** ./src/components/containers/THundredPlus.jsx ***!
  \****************************************************/
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
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sizeme */ "react-sizeme");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/THundredPlusCard */ "./src/components/functions/THundredPlusCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/THundredPlus.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




 // Component


 // Wrapper


const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    stays {
      id
      host_is_superhost
      size
      country
      name
      price
      reviews_per_month
      number_of_reviews
      picture_url
    }
  }
`; // interface StayData {
//   stays: Stay[];
// }
// interface Stay {
//   id: string;
//   host_is_superhost: string;
//   size: string;
//   country: string;
//   name: string;
//   price: number;
//   reviews_per_month: number;
//   number_of_reviews: number;
//   picture_url: string;
// }

const renderContent = (data, number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    console.log(data);
    content.push(__jsx("div", {
      className: "pb-5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, __jsx(_functions_THundredPlusCard__WEBPACK_IMPORTED_MODULE_5__["THundredPlusCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.stays[i].id,
      host_is_superhost: data === null || data === void 0 ? void 0 : data.stays[i].host_is_superhost,
      country: data === null || data === void 0 ? void 0 : data.stays[i].country,
      name: data === null || data === void 0 ? void 0 : data.stays[i].name,
      price: data === null || data === void 0 ? void 0 : data.stays[i].price,
      reviews_per_month: data === null || data === void 0 ? void 0 : data.stays[i].reviews_per_month,
      picture_url: data === null || data === void 0 ? void 0 : data.stays[i].picture_url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    })));
  }

  return content;
};

const THundredPlus = ({
  size
}) => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(staydata);
  if (error) return `Error! ${error.message}`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_7__["ExploreSection"], {
    title: "300+ places to stay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, loading ? __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, size.width < 767 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(4, true) : null, size.width >= 767 && size.width < 1023 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(3, true) : null, size.width >= 1023 && size.width < 1279 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1279 && size.width < 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(6, true) : null, size.width >= 1529 ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_4__["renderSkeletonHorizontal"])(8, true) : null) : data && __jsx("div", {
    className: "grid gap-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, size.width < 767 ? renderContent(data, 4) : null, size.width >= 767 && size.width < 1023 ? renderContent(data, 3) : null, size.width >= 1023 && size.width < 1279 ? renderContent(data, 6) : null, size.width >= 1279 && size.width < 1529 ? renderContent(data, 6) : null, size.width >= 1529 ? renderContent(data, 8) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_6__["ShowAll"], {
    title: "Show(2000+)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_3___default()()(THundredPlus));

/***/ }),

/***/ "./src/components/functions/HelpAdditional.tsx":
/*!*****************************************************!*\
  !*** ./src/components/functions/HelpAdditional.tsx ***!
  \*****************************************************/
/*! exports provided: HelpAdditional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpAdditional", function() { return HelpAdditional; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/HelpAdditional.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const HelpAdditional = ({
  title,
  last
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, last ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-between py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, title), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("g", {
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
    d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))))))) : __jsx("div", {
    className: "border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-between py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, title), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("path", {
    d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }))))))));
};

/***/ }),

/***/ "./src/components/functions/HelpCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/functions/HelpCard.tsx ***!
  \***********************************************/
/*! exports provided: HelpCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCard", function() { return HelpCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/HelpCard.tsx";
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

/***/ "./src/components/functions/THundredPlusCard.tsx":
/*!*******************************************************!*\
  !*** ./src/components/functions/THundredPlusCard.tsx ***!
  \*******************************************************/
/*! exports provided: THundredPlusCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THundredPlusCard", function() { return THundredPlusCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/THundredPlusCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const THundredPlusCard = ({
  host_is_superhost,
  picture_url,
  size,
  country,
  name,
  price,
  reviews_per_month,
  number_of_reviews
}) => {
  const renderhost = host_is_superhost => {
    if (host_is_superhost == 't') {
      return __jsx("div", {
        className: "md:flex md:flex-wrap md:items-center md:justify-start",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "uppercase mt-3 md:mt-0 border border-gray-800 rounded font-semibold px-1 mt-1 text-xs",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }
      }, "Superhost"), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "sm:ml-2 mt-1 text-sm sm:my-2 font-light text-gray-650",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }, country));
    }

    return __jsx("div", {
      className: "md:flex md:flex-wrap md:items-center md:justify-start",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "mt-3 text-sm sm:my-2 font-light text-gray-650",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, size, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, " \xB7 "), country));
  };

  return __jsx("div", {
    className: "w-30/31",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      height: 30,
      width: 30
    },
    className: "flex items-center justify-center absolute z-10 right-0 mr-2 mt-2 mr-1 bg-gray-300 shadow-lg rounded-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: "h-4 w-4",
    viewBox: "0 -50 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }))), __jsx("img", {
    className: "w-full rounded",
    src: picture_url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, renderhost(host_is_superhost)), __jsx("p", {
    className: "my-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, name), __jsx("p", {
    className: "tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "$", price, " CAD"), "/night"), __jsx("div", {
    className: "flex items-center justify-start flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, reviews_per_month), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "\xA0 (", number_of_reviews, ")")));
};

/***/ }),

/***/ "./src/components/functions/Travel.tsx":
/*!*********************************************!*\
  !*** ./src/components/functions/Travel.tsx ***!
  \*********************************************/
/*! exports provided: Travel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel", function() { return Travel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_TravelCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/functions/TravelCard */ "./src/components/functions/TravelCard.tsx");
/* harmony import */ var _wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapper/ExploreSectionOverflow */ "./src/components/wrapper/ExploreSectionOverflow.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/Travel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Wrapper

 // Image

const sydney = __webpack_require__(/*! ../../../public/img/high/sydney.jpg */ "./public/img/high/sydney.jpg");

const capetown = __webpack_require__(/*! ../../../public/img/high/capetown.jpg */ "./public/img/high/capetown.jpg");

const buenosaires = __webpack_require__(/*! ../../../public/img/high/buenosaires.jpg */ "./public/img/high/buenosaires.jpg");

const seoul = __webpack_require__(/*! ../../../public/img/high/seoul.jpg */ "./public/img/high/seoul.jpg");

const barcelona = __webpack_require__(/*! ../../../public/img/high/barcelona.jpg */ "./public/img/high/barcelona.jpg");

const losangeles = __webpack_require__(/*! ../../../public/img/high/losangeles.jpg */ "./public/img/high/losangeles.jpg");

const Travel = () => {
  const countries = [{
    img: sydney,
    imglow: sydney,
    location: 'Sydney'
  }, {
    img: capetown,
    imglow: capetown,
    location: 'Cape Town'
  }, {
    img: buenosaires,
    imglow: buenosaires,
    location: 'Buenos Aires'
  }, {
    img: seoul,
    imglow: seoul,
    location: 'Seoul'
  }, {
    img: barcelona,
    imglow: barcelona,
    location: 'Barcelona'
  }, {
    img: losangeles,
    imglow: losangeles,
    location: 'Los Angeles'
  }];
  return __jsx(_wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__["ExploreSectionOverflow"], {
    title: "Travel the world with Airbnb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-center justify-start py-2 rounded-xl w-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, countries.map(({
    img,
    imglow,
    location
  }, index) => {
    return __jsx("div", {
      className: "min-w-32 w-full mr-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, __jsx(_components_functions_TravelCard__WEBPACK_IMPORTED_MODULE_1__["TravelCard"], {
      key: index,
      img: img,
      imglow: imglow,
      location: location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }));
  }))))));
};

/***/ }),

/***/ "./src/components/functions/TravelCard.tsx":
/*!*************************************************!*\
  !*** ./src/components/functions/TravelCard.tsx ***!
  \*************************************************/
/*! exports provided: TravelCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCard", function() { return TravelCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/TravelCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // const { LazyImage } = require('react-lazy-progressive-image');


const TravelCard = ({
  img,
  location
}) => {
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/${location.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("img", {
    src: img,
    className: "w-full h-full rounded-b-none rounded-lg ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-sm py-3 pl-4 sm:pl-4 text-gray-750 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, location))));
};

/***/ }),

/***/ "./src/components/layout/ExploreHeader.jsx":
/*!*************************************************!*\
  !*** ./src/components/layout/ExploreHeader.jsx ***!
  \*************************************************/
/*! exports provided: ExploreHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreHeader", function() { return ExploreHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SuggestionBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestionBox */ "./src/components/layout/SuggestionBox.jsx");
/* harmony import */ var _modals_OptionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/OptionModal */ "./src/components/modals/OptionModal.jsx");
/* harmony import */ var _modals_HelpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/HelpModal */ "./src/components/modals/HelpModal.jsx");
/* harmony import */ var _modals_RegisterModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/RegisterModal */ "./src/components/modals/RegisterModal.tsx");
/* harmony import */ var _modals_LanguageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/LanguageModal */ "./src/components/modals/LanguageModal.tsx");
/* harmony import */ var _modals_CurrencyModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/CurrencyModal */ "./src/components/modals/CurrencyModal.tsx");
/* harmony import */ var _containers_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/SearchBar */ "./src/components/containers/SearchBar.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/ExploreHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




 // Modals







const ExploreHeader = ({
  white
}) => {
  const {
    0: registerModal,
    1: setRegisterModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: optionModal,
    1: setOptionModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: helpModal,
    1: setHelpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: languageModal,
    1: setLanguageModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: currencyModal,
    1: setCurrencyModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: currency,
    1: setCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    sign: '$',
    name: 'CAD'
  });
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const switchCurrencyModal = () => {
    setCurrencyModal(!currencyModal);
  };

  const switchHelpModal = () => {
    setHelpModal(!helpModal);
  };

  const switchLanguageModal = () => {
    setLanguageModal(!languageModal);
  };

  const switchOptionModal = () => {
    setOptionModal(!optionModal);
  };

  const switchRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  const switchCurrency = currency => {
    setCurrency(currency);
  };

  const switchType = type => {
    setType(type);
  };

  const configureScroll = name => {
    document.body.style.overflow = name;
  };

  let logo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, white ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "px-6 md:px-10 xl:px-20 xl:max-w-12xl flex items-center justify-between relative border-b border-gray-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full md:hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full flex items-center my-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex-shrink-0 p-4 mr-4 rounded-full hover:bg-gray-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, __jsx("svg", {
    viewBox: "0 0 492 492",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12\nC361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084\nc-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864\nl16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 27
    }
  })))))), __jsx("div", {
    className: "flex-grow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: "exploreheader_searchbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 27
    }
  }, __jsx("svg", {
    viewBox: "0 0 515.558 515.558",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 31
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "text-gray-650 hover:text-gray-850",
    style: {
      fontFamily: 'airbnb-book'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 27
    }
  }, "Search stays")))))), __jsx("div", {
    className: "flex-shrink-0 pr-2 mr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  })))), __jsx("div", {
    ref: el => logo = el,
    className: "hidden lg:block mr-6 md:mr-8 my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: "102",
    height: "32",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      fill: 'rgb(255, 56, 92)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  })))), __jsx("div", {
    ref: el => logo = el,
    className: "hidden md:block lg:hidden mr-6 md:mr-8 my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "30",
    height: "32",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      fill: 'rgb(255, 56, 92)'
    },
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, __jsx("path", {
    d: "M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "hidden md:block ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_containers_SearchBar__WEBPACK_IMPORTED_MODULE_9__["SearchBar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "hidden md:block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "relative md:w-20p text-gray-750",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => switchOptionModal(),
    className: "py-3 px-2 rounded-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex items-center justify-start text-sm mx-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 23
    }
  }, __jsx("svg", {
    className: "block relative w-full h-full",
    "aria-hidden": "true",
    style: {
      fill: '#484848',
      right: 5
    },
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M7.99985 0.349976C3.78135 0.349976 0.349854 3.78148 0.349854 7.99998C0.349854 12.2185 3.78135 15.65 7.99985 15.65C12.2184 15.65 15.6499 12.2185 15.6499 7.99998C15.6499 3.78148 12.2184 0.349976 7.99985 0.349976ZM1.68285 8.64997H3.86735C3.90085 9.42497 3.99535 10.1625 4.14085 10.85H2.33335C1.98351 10.1627 1.76301 9.41698 1.68285 8.64997ZM8.74985 3.84998V1.90748C9.25785 2.24998 9.74385 2.92348 10.1204 3.84998H8.74985ZM10.5274 5.14998C10.6859 5.81348 10.7954 6.54998 10.8339 7.34998H8.74985V5.14998H10.5274ZM7.24985 1.90748V3.84998H5.87985C6.25585 2.92348 6.74235 2.24998 7.24985 1.90748ZM7.24985 5.14998V7.34998H5.16585C5.20435 6.54998 5.31385 5.81348 5.47235 5.14998H7.24985ZM3.86735 7.34998H1.68285C1.76285 6.56498 1.99285 5.82498 2.33285 5.14998H4.14085C3.98937 5.87454 3.89789 6.61037 3.86735 7.34998ZM5.16585 8.64997H7.24985V10.85H5.47235C5.30192 10.1278 5.1993 9.39125 5.16585 8.64997ZM7.24985 12.15V14.0925C6.74235 13.7495 6.25585 13.0765 5.87985 12.15H7.24985ZM8.74985 14.0925V12.15H10.1204C9.74385 13.0765 9.25785 13.75 8.74985 14.0925ZM8.74985 10.85V8.64997H10.8339C10.8004 9.39125 10.6978 10.1278 10.5274 10.85H8.74985ZM12.1324 8.64997H14.3169C14.2369 9.43497 14.0069 10.175 13.6669 10.85H11.8589C12.0044 10.1625 12.0989 9.42497 12.1324 8.64997ZM12.1324 7.34998C12.1018 6.61037 12.0103 5.87454 11.8589 5.14998H13.6664C14.0074 5.82498 14.2364 6.56498 14.3169 7.34998H12.1324ZM12.7954 3.84998H11.5014C11.3192 3.31162 11.0813 2.7938 10.7914 2.30498C11.5556 2.68104 12.2369 3.20638 12.7949 3.84998H12.7954ZM5.20835 2.30498C4.91844 2.7938 4.68047 3.31162 4.49835 3.84998H3.20485C3.76298 3.20632 4.44439 2.68099 5.20885 2.30498H5.20835ZM3.20485 12.15H4.49935C4.69735 12.7245 4.93635 13.242 5.20935 13.695C4.44453 13.3191 3.76278 12.7937 3.20435 12.15H3.20485ZM10.7919 13.695C11.0818 13.2061 11.3197 12.6883 11.5019 12.15H12.7959C12.2377 12.7936 11.5563 13.319 10.7919 13.695Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "h-2 w-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 23
    }
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 491.996 491.996",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 27
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 31
    }
  }))))))), __jsx("div", {
    className: "mx-2 flex items-center justify-center py-3 px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: switchHelpModal,
    className: "text-sm  tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, "Help")), __jsx("div", {
    className: "mx-2 flex items-center justify-center py-3 px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      switchType('Sign up');
      switchRegisterModal();
    },
    className: "text-sm  tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, "Sign up"))), optionModal & !languageModal & !currencyModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    style: {
      left: -140,
      top: 40
    },
    className: "absolute z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }, __jsx(_modals_OptionModal__WEBPACK_IMPORTED_MODULE_4__["OptionModal"], {
    switchLanguageModal: switchLanguageModal,
    switchCurrencyModal: switchCurrencyModal,
    currency: currency,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 23
    }
  }))) : null)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "bg-black flex items-center justify-between relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex items-center justify-start w-full md:w-1/2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "ml-6 mr-6 md:mr-8 my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 19
    }
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "block",
    style: {
      height: 34,
      width: 34,
      fill: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 19
    }
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "w-full md:max-w-100 flex items-center justify-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "hoverbox",
    className: "bg-white flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }, __jsx("svg", {
    viewBox: "0 0 16 16",
    style: {
      height: 18,
      width: 18
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  }, __jsx("path", {
    d: "m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-650 px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, "Search")))), __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "hidden xl:block xl:flex items-center justify-around flex-wrap text-gray-750",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "border-transparent border-b-2 hover:border-white py-6 px-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "flex items-center justify-start text-sm mx-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: 'white',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 21
    }
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }, "English(CA)"))), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-white text-sm tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  }, "$CAD")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-white text-sm tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, "Become a host")), __jsx("div", {
    className: "mx-2 flex items-center justify-center py-3 px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: switchHelpModal,
    className: "text-sm  tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 17
    }
  }, "Help")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "#",
    className: "text-white text-sm tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, "Sign up")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "#",
    className: "text-white text-sm tracking-wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, "Log in"))))), helpModal ? __jsx(_modals_HelpModal__WEBPACK_IMPORTED_MODULE_5__["HelpModal"], {
    setHelpModal: switchHelpModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 20
    }
  }) : null, currencyModal ? __jsx("div", {
    className: "absolute w-screen md:min-h-104 z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 9
    }
  }, false ? undefined : null, __jsx(_modals_CurrencyModal__WEBPACK_IMPORTED_MODULE_8__["CurrencyModal"], {
    location: "Canada",
    setCurrencyModal: switchCurrencyModal,
    setCurrency: switchCurrency,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 11
    }
  })) : null, languageModal ? __jsx("div", {
    className: "absolute w-screen md:min-h-104 z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  }, false ? undefined : null, __jsx(_modals_LanguageModal__WEBPACK_IMPORTED_MODULE_7__["LanguageModal"], {
    location: "Canada",
    setLanguageModal: switchLanguageModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 11
    }
  })) : null, registerModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, false ? undefined : null, __jsx("div", {
    style: {
      top: 40
    },
    className: "absolute z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 11
    }
  }, type == 'Log in' ? __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_6__["RegisterModal"], {
    setRegisterModal: setRegisterModal,
    type: "Log in",
    nottype: "Sign up",
    phrase: `Don\'t`,
    setType: switchType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  }) : __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_6__["RegisterModal"], {
    setRegisterModal: setRegisterModal,
    type: "Sign up",
    nottype: "Log in",
    phrase: "Already",
    setType: switchType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 15
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, false ? undefined : null));
};
const ShadowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  border-radius: 24px;
  cursor: pointer;
  padding: 0.6rem 0rem;
  transition: 0.5s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  }
`;

/***/ }),

/***/ "./src/components/layout/HeaderCategory.jsx":
/*!**************************************************!*\
  !*** ./src/components/layout/HeaderCategory.jsx ***!
  \**************************************************/
/*! exports provided: HeaderCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCategory", function() { return HeaderCategory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sizeme */ "react-sizeme");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/HeaderCategory.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const HeaderCategory = () => {
  return __jsx("div", {
    className: "px-6 md:px-10 xl:px-20 xl:max-w-12xl pb-2 pt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hidden md:block hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Cancellation flexibility"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-4 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Work trip"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 mr-2 text-sm border-gray-500 border py-2 px-4 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Type of place"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 md:hidden lg:block mr-2 text-sm border-gray-500 border py-2 px-4 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Price"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Instant Book"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-gray-900 hidden md:block mr-2 text-sm border-gray-500 border py-2 px-5 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "More filters")));
};

/***/ }),

/***/ "./src/components/layout/MovePage.jsx":
/*!********************************************!*\
  !*** ./src/components/layout/MovePage.jsx ***!
  \********************************************/
/*! exports provided: MovePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovePage", function() { return MovePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/MovePage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const MovePage = ({
  category,
  page,
  previousPage,
  nextPage,
  first,
  last
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "px-12 md:px-0 md:max-w-md lg:max-w-sm mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, first ? __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: 'rgb(221, 221, 221)'
    },
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492 492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("path", {
    d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      color: 'rgb(221, 221, 221)',
      fontFamily: 'airbnb-medium'
    },
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Previous page"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, previousPage == 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/${category}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: "cursor-pointer flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: 'rgb(221, 221, 221)'
    },
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492 492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("path", {
    d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      color: 'rgb(221, 221, 221)',
      fontFamily: 'airbnb-medium'
    },
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Previous page")))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/${page - 1}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("div", {
    className: "cursor-pointer flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("div", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492 492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("path", {
    d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Previous page"))))), last ? __jsx("div", {
    className: "cursor-pointer flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Next page")), __jsx("a", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#F2F2F2'
    },
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492.004 492.004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("path", {
    d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }))))))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/${nextPage}`,
    as: `/page/${page + 1}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx("div", {
    className: "cursor-pointer flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, "Next page")), __jsx("a", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#484848'
    },
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492.004 492.004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("path", {
    d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })))))))))), __jsx("div", {
    className: "mt-10 px-12 md:px-0 md:max-w-md lg:max-w-lg mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-xs text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "Enter dates to see full pricing. Additional fees apply. Taxes may be added.")))));
};

/***/ }),

/***/ "./src/components/layout/NewFooter.tsx":
/*!*********************************************!*\
  !*** ./src/components/layout/NewFooter.tsx ***!
  \*********************************************/
/*! exports provided: NewFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFooter", function() { return NewFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/NewFooter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const NewFooter = () => {
  return __jsx("div", {
    className: "block bg-white w-full border-t border-gray-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "px-6 md:px-10 xl:px-32 mx-auto py-6 sm:py-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hidden md:block lg:flex lg:flex-wrap lg:items-start lg::w-full md:mx-6 lg:mx-0 md:justify-between md:pb-1 lg:pb-10 lg:border-b md:border-gray-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "About"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Diversity & Belonging")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Accessibility")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Trust & Safety")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Airbnb Citizen")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Newsroom")))), __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Community"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Airbnb Magazine")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "Airbnb for Work")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Invite friends")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Careers")))), __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Host"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/host/homes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, "Host your home"))), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/host/experiences",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, "Host an experience"))), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "Responsible hosting")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, "Refer hosts")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "Open homes")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, "Olympics")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "Responsible hosting")))), __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, "Support"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, "Help Centre")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, "Neighbourhood Support"))))), __jsx("div", {
    className: "md:mt-8 w-full flex flex-col-reverse lg:flex-row md:justify-center lg:justify-between lg:mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "md:flex md:flex-col md:items-center md:items-start lg:flex-row lg:justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "hidden lg:block h-5 w-5 mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-full w-full",
    style: {
      fill: '#222222'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-850",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, "2020 Airbnb, Inc. All rights reserved")), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "flex md:justify-center text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "hidden lg:block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, "\xA0\xB7\xA0"), __jsx("a", {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, "Privacy"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, "\xA0\xB7\xA0"), __jsx("a", {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, "Terms"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, "\xA0\xB7\xA0"), __jsx("a", {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, "Sitemap"))), __jsx("div", {
    className: "mb-3 lg:mb-0 flex md:justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex text-gray-850 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex mx-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-4 h-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "relative self-center h-full w-full",
    style: {
      fill: '#222222',
      right: 5,
      top: 2
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, "English (CA)"))), __jsx("div", {
    className: "flex mx-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, "$"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, "CAD")))), __jsx("div", {
    className: "hidden md:flex ml-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "h-5 w-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 512 512",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "h-5 w-5 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 15
    }
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#484848',
      marginRight: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 17
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 19
    }
  }, __jsx("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "w-5 h-5 ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }, __jsx("svg", {
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#484848'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 17
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 23
    }
  }))), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 19
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 23
    }
  }))), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 19
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 21
    }
  }, __jsx("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 23
    }
  }))))))))));
};

/***/ }),

/***/ "./src/components/layout/SuggestionBox.jsx":
/*!*************************************************!*\
  !*** ./src/components/layout/SuggestionBox.jsx ***!
  \*************************************************/
/*! exports provided: SuggestionBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionBox", function() { return SuggestionBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/SuggestionBox.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const SuggestionBox = () => {
  return __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "mt-3 py-3 px-6 bg-black rounded-lg mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "All")), __jsx("div", {
    className: "mt-3 py-3 px-6 border border-gray rounded-lg mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Stays")), __jsx("div", {
    className: "mt-3 py-3 px-6 border border-gray rounded-lg mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Experiences")), __jsx("div", {
    className: "mt-3 py-3 px-6 border border-gray rounded-lg mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Adventures")));
};

/***/ }),

/***/ "./src/components/modals/CurrencyModal.tsx":
/*!*************************************************!*\
  !*** ./src/components/modals/CurrencyModal.tsx ***!
  \*************************************************/
/*! exports provided: CurrencyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyModal", function() { return CurrencyModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.json */ "./src/components/modals/currency.json");
var _currency_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./currency.json */ "./src/components/modals/currency.json", 1);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/CurrencyModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const currencies = JSON.parse(JSON.stringify(_currency_json__WEBPACK_IMPORTED_MODULE_2___namespace));
const CurrencyModal = ({
  location,
  setCurrencyModal,
  setCurrency
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setCurrencyModal(false);
      }
    }

    window.addEventListener('resize', handleResize);
  });

  const refreshPage = () => {
    window.location.reload(false);
  };

  const defaultCurrency = currencies.default.find(currency => currency.location == location);
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultCurrency);
  const filteredCurrencies = currencies.default.filter(currency => !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(currency, selectedCountry));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "darkOverlay",
    className: "fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("div", {
    id: "centerAbsolute",
    className: "relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl mt-2 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("div", {
    className: "bg-green-850 relative w-full px-4 flex justify-center items-center my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full flex items-center absolute left-0 z-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => setCurrencyModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }))))))))), __jsx("div", {
    className: "w-full h-60v overflow-y-scroll overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Choose currency"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/5 flex mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("button", {
    className: "w-90p border border-gray-750 rounded-lg flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-85p py-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, selectedCountry.full)), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, selectedCountry.abbreviation, ' ', selectedCountry.abbreviation === null ? null : '-', ' ', selectedCountry.symbol))))), filteredCurrencies.map(currency => {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: undefined
    }, __jsx("button", {
      onClick: () => {
        setSelectedCountry(currency);
        setCurrency({
          name: `${currency.symbol}`,
          sign: `${currency.abbreviation}`
        });
        refreshPage(); // Query to change currency
      },
      className: "hover:bg-gray-250 w-90p rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: undefined
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, currency.full)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: undefined
    }, currency.abbreviation, ' ', currency.abbreviation === null ? null : '-', ' ', currency.symbol)))));
  }))))));
};

/***/ }),

/***/ "./src/components/modals/HelpModal.jsx":
/*!*********************************************!*\
  !*** ./src/components/modals/HelpModal.jsx ***!
  \*********************************************/
/*! exports provided: HelpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModal", function() { return HelpModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/HelpCard */ "./src/components/functions/HelpCard.tsx");
/* harmony import */ var _functions_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/HelpAdditional */ "./src/components/functions/HelpAdditional.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/HelpModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Components


 // interface Prop {
//   setHelpModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
// }

const HelpModal = ({
  setHelpModal
}) => {
  const {
    0: word,
    1: setWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleChange = e => {
    return setWord(e.target.value);
  };

  const questions = [{
    title: 'How do I create an account?',
    abbranswer: "If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up. You can sign up using your email address, Facebook account, Google account, or Apple ID. Signing up and creating an Airbnb account is free. <br>After you sign up, be sure to complete your account before booking a reservation. "
  }, {
    title: 'How do I reset or change my password?',
    abbranswer: "If you've forgotten your password, or you're having trouble logging in to your Airbnb account, go to the..."
  }, {
    title: 'What should I do if someone asks me to pay outside of the Airbnb website?',
    abbranswer: "Don't send them money, and let us know. We'll never ask you to pay anything outside of our side,..."
  }, {
    title: 'Why should I pay and communicate through Airbnb directly?',
    abbranswer: "Paying and communicating through Airbnb helps ensure that you're protected under our Terms of..."
  }, {
    title: 'What is the Airbnb cancellation policy for stays?',
    abbranswer: 'On Airbnb, hosts set the cancellation policies that guests can book with. The terms vary depending on...'
  }];
  return __jsx("div", {
    className: "bg-white z-100 md:block fixed top-0 right-0 h-screen w-104 shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative h-16 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    className: "absolute bg-white fixed top-0 w-full flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      top: 20
    },
    className: "absolute top-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Recommended help")), __jsx("button", {
    onClick: () => setHelpModal(false),
    className: "absolute top-0 right-0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    className: "pt-6 pr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("path", {
    d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717\nL34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859\nc-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287\nl221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285\nL284.286,256.002z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })))))))), __jsx("div", {
    className: "relative h-160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("div", {
    className: "top-0 absolute h-full px-8 overflow-hidden overflow-y-scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("div", {
    className: "mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Search by keyword")), __jsx("div", {
    id: "helpsearch",
    className: "flex border border-gray-300 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/12 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
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
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("path", {
    d: "m10.7227 19.9083c-4.919-.706-8.336-5.266-7.63-10.185.704-4.919 5.264-8.336 10.184-7.631 4.919.706 8.336 5.265 7.632 10.185-.706 4.92-5.266 8.336-10.186 7.631m11.65 2.76-3.729-4.196c1.706-1.514 2.905-3.618 3.254-6.053.783-5.467-3.013-10.533-8.479-11.317-5.467-.784-10.534 3.013-11.316 8.48-.784 5.466 3.012 10.532 8.478 11.315 2.675.384 5.254-.329 7.283-1.798l3.762 4.233c.184.207.5.225.706.042.206-.184.225-.5.041-.706",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }))), __jsx("div", {
    className: "w-11/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("input", {
    value: word,
    onChange: handleChange,
    style: {
      fontFamily: 'airbnb-medium'
    },
    type: "text",
    className: "w-full h-8 text-sm text-gray-750 focus:outline-none placeholder-gray-800",
    placeholder: "E.g. reservation status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }))), __jsx("div", {
    className: "mt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("div", {
    className: "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-gray-750 text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Recommended Articles")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].abbranswer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[1].title,
    answer: questions[1].abbranswer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[2].title,
    answer: questions[2].abbranswer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[3].title,
    answer: questions[3].abbranswer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[4].title,
    answer: questions[4].abbranswer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  })), __jsx("div", {
    className: "mt-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-gray-750 text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "Explore More Articles By Topic")), __jsx("div", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx(_functions_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["HelpAdditional"], {
    title: "Reservation requests",
    last: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx(_functions_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["HelpAdditional"], {
    title: "Contacting hosts",
    last: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), __jsx(_functions_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["HelpAdditional"], {
    title: "Prices & fees",
    last: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "absolute h-24 fixed bottom-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full bg-white fixed bottom-0 h-24 flex flex-col items-center border-t border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      left: 50,
      top: 10
    },
    className: "w-80 absolute top-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-9/12 bg-green-850 py-3 text-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "Visit the Help Centre"))), __jsx("div", {
    style: {
      left: 160,
      bottom: 5
    },
    className: "w-80 absolute left-0 bottom-0 my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "underline text-green-850 text-sm",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, "Give Feedback"))))));
};

/***/ }),

/***/ "./src/components/modals/LanguageModal.tsx":
/*!*************************************************!*\
  !*** ./src/components/modals/LanguageModal.tsx ***!
  \*************************************************/
/*! exports provided: LanguageModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModal", function() { return LanguageModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/LanguageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const suggestedLanguages = [{
  name: 'English',
  location: 'United States'
}, {
  name: 'English',
  location: 'United Kingdom'
}, {
  name: 'Français',
  location: 'Canada'
}];
const languages = [{
  name: 'English',
  location: 'Canada'
}, {
  name: 'Azərbaycan dili',
  location: 'Azərbaycan'
}, {
  name: 'Bahasa Indonesia',
  location: 'Indonesia'
}, {
  name: 'Bosanski',
  location: 'Bosna i Hercegovina'
}, {
  name: 'Català',
  location: 'Espanya'
}, {
  name: 'Čeština',
  location: 'Česká republika'
}, {
  name: 'Crnogorski',
  location: 'Crna Gora'
}, {
  name: 'Dansk',
  location: 'Danmark'
}, {
  name: 'Deutsch',
  location: 'Deutschland'
}, {
  name: 'Deutsch',
  location: 'Österreich'
}, {
  name: 'Deutsch',
  location: 'Schweiz'
}, {
  name: 'Eesti',
  location: 'Eesti'
}, {
  name: 'English',
  location: 'Australia'
}, {
  name: 'English',
  location: 'Guyana'
}, {
  name: 'English',
  location: 'India'
}, {
  name: 'English',
  location: 'Ireland'
}, {
  name: 'English',
  location: 'New Zealand'
}, {
  name: 'English',
  location: 'Singapore'
}, {
  name: 'English',
  location: 'United Arab Emirates'
}, {
  name: 'Español',
  location: 'Argentina'
}, {
  name: 'Español',
  location: 'Belice'
}, {
  name: 'Español',
  location: 'El Salvador'
}, {
  name: 'Español',
  location: 'España'
}, {
  name: 'Español',
  location: 'Estados Unidos'
}, {
  name: 'Español',
  location: 'Guatemala'
}, {
  name: 'Español',
  location: 'Honduras'
}, {
  name: 'Español',
  location: 'Latinoamérica'
}, {
  name: 'Español',
  location: 'México'
}, {
  name: 'Español',
  location: 'Nicaragua'
}, {
  name: 'Español',
  location: 'Panamá'
}, {
  name: 'Español',
  location: 'Paraguay'
}, {
  name: 'Español',
  location: 'Perú'
}, {
  name: 'Español',
  location: 'Venezuela'
}, {
  name: 'Français',
  location: 'Belgique'
}, {
  name: 'Français',
  location: 'France'
}, {
  name: 'Français',
  location: 'Suisse'
}, {
  name: 'Gaeilge',
  location: 'Éire'
}, {
  name: 'Hrvatski',
  location: 'Hrvatska'
}, {
  name: 'isiXhosa',
  location: 'eMzantsi Afrika'
}, {
  name: 'isiZulu',
  location: 'iNingizimu Afrika'
}, {
  name: 'Íslenska',
  location: 'Ísland'
}, {
  name: 'Italiano',
  location: 'Italia'
}, {
  name: 'Italiano',
  location: 'Svizzera'
}, {
  name: 'Kiswahili',
  location: 'Āfrika'
}, {
  name: 'Latviešu',
  location: 'Latvija'
}, {
  name: 'Lietuvių',
  location: 'Lietuva'
}, {
  name: 'Magyar',
  location: 'Magyarország'
}, {
  name: 'Malti',
  location: 'Malta'
}, {
  name: 'Melayu',
  location: 'Malaysia'
}, {
  name: 'Nederlands',
  location: 'België'
}, {
  name: 'Nederlands',
  location: 'Nederland'
}, {
  name: 'Norsk',
  location: 'Norge'
}, {
  name: 'Polski',
  location: 'Polska'
}, {
  name: 'Português',
  location: 'Brasil'
}, {
  name: 'Português',
  location: 'Portugal'
}, {
  name: 'Română',
  location: 'Română'
}, {
  name: 'Shqip',
  location: 'Shqipëri'
}, {
  name: 'Slovenčina',
  location: 'Slovensko'
}, {
  name: 'Slovenščina',
  location: 'Slovenija'
}, {
  name: 'Srpski',
  location: 'Srbija'
}, {
  name: 'Suomi',
  location: 'Suomi'
}, {
  name: 'Svenska',
  location: 'Sverige'
}, {
  name: 'Tagalog',
  location: 'Pilipinas'
}, {
  name: 'Tiếng Việt',
  location: 'Việt Nam'
}, {
  name: 'Türkçe',
  location: 'Türkiye'
}, {
  name: 'Ελληνικά',
  location: 'Ελλάδα'
}, {
  name: 'Български',
  location: 'България'
}, {
  name: 'Македонски',
  location: 'Северна Македонија'
}, {
  name: 'Русский',
  location: 'Россия'
}, {
  name: 'Українська',
  location: 'Україна'
}, {
  name: 'ქართული',
  location: 'საქართველო'
}, {
  name: 'Հայերեն',
  location: 'Հայաստան'
}, {
  name: 'עברית',
  location: 'ישראל'
}, {
  name: 'العربية',
  location: 'العالم'
}, {
  name: 'हिन्दी',
  location: 'भारत'
}, {
  name: 'ไทย',
  location: 'ประเทศไทย'
}, {
  name: '한국어',
  location: '대한민국'
}, {
  name: '日本語',
  location: '日本'
}, {
  name: '简体中文',
  location: '美国'
}, {
  name: '繁體中文',
  location: '美國'
}, {
  name: '简体中文',
  location: '中国'
}, {
  name: '繁體中文',
  location: '香港'
}, {
  name: '繁體中文',
  location: '台灣'
}];
const LanguageModal = ({
  location,
  setLanguageModal
}) => {
  const defaultLanguage = languages.find(language => language.location == location);
  const {
    0: selectedLanguage,
    1: setSelectedLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultLanguage);
  const filteredLanguages = languages.filter(language => !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(language, selectedLanguage));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setLanguageModal(false);
      }
    }

    window.addEventListener('resize', handleResize);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "darkOverlay",
    className: "md:block fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: undefined
  }), __jsx("div", {
    id: "centerAbsolute",
    className: "relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl mt-2 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: undefined
  }, __jsx("div", {
    className: "bg-green-850 relative w-full px-4 flex justify-center items-center my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full flex items-center absolute left-0 z-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => setLanguageModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: undefined
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }))))))))), __jsx("div", {
    className: "w-full h-75v overflow-y-scroll overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: undefined
  }, "Suggested languages and regions"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: undefined
  }, suggestedLanguages.map(language => {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429
      },
      __self: undefined
    }, __jsx("button", {
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430
      },
      __self: undefined
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431
      },
      __self: undefined
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: undefined
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: undefined
    }, language.name)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: undefined
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: undefined
    }, language.location)))));
  })), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: undefined
  }, "Choose a language and region"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/5 flex mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: undefined
  }, __jsx("button", {
    className: "w-90p border border-gray-750 rounded-lg flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-85p py-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: undefined
  }, selectedLanguage.name)), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: undefined
  }, selectedLanguage.location))))), filteredLanguages.map(language => {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480
      },
      __self: undefined
    }, __jsx("button", {
      onClick: () => {
        setSelectedLanguage(language);
      },
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 481
      },
      __self: undefined
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486
      },
      __self: undefined
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487
      },
      __self: undefined
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488
      },
      __self: undefined
    }, language.name)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494
      },
      __self: undefined
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: undefined
    }, language.location)))));
  }))))));
};

/***/ }),

/***/ "./src/components/modals/OptionModal.jsx":
/*!***********************************************!*\
  !*** ./src/components/modals/OptionModal.jsx ***!
  \***********************************************/
/*! exports provided: OptionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionModal", function() { return OptionModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/OptionModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const OptionModal = ({
  switchLanguageModal,
  switchCurrencyModal,
  currency
}) => {
  console.log('called');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "rounded-xl hidden bg-white md:block shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "pl-4 pr-16 py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("button", {
    onClick: switchLanguageModal,
    className: "py-3 px-1 rounded-full flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-center text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("svg", {
    className: "block relative w-full h-full",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("path", {
    d: "M7.99985 0.349976C3.78135 0.349976 0.349854 3.78148 0.349854 7.99998C0.349854 12.2185 3.78135 15.65 7.99985 15.65C12.2184 15.65 15.6499 12.2185 15.6499 7.99998C15.6499 3.78148 12.2184 0.349976 7.99985 0.349976ZM1.68285 8.64997H3.86735C3.90085 9.42497 3.99535 10.1625 4.14085 10.85H2.33335C1.98351 10.1627 1.76301 9.41698 1.68285 8.64997ZM8.74985 3.84998V1.90748C9.25785 2.24998 9.74385 2.92348 10.1204 3.84998H8.74985ZM10.5274 5.14998C10.6859 5.81348 10.7954 6.54998 10.8339 7.34998H8.74985V5.14998H10.5274ZM7.24985 1.90748V3.84998H5.87985C6.25585 2.92348 6.74235 2.24998 7.24985 1.90748ZM7.24985 5.14998V7.34998H5.16585C5.20435 6.54998 5.31385 5.81348 5.47235 5.14998H7.24985ZM3.86735 7.34998H1.68285C1.76285 6.56498 1.99285 5.82498 2.33285 5.14998H4.14085C3.98937 5.87454 3.89789 6.61037 3.86735 7.34998ZM5.16585 8.64997H7.24985V10.85H5.47235C5.30192 10.1278 5.1993 9.39125 5.16585 8.64997ZM7.24985 12.15V14.0925C6.74235 13.7495 6.25585 13.0765 5.87985 12.15H7.24985ZM8.74985 14.0925V12.15H10.1204C9.74385 13.0765 9.25785 13.75 8.74985 14.0925ZM8.74985 10.85V8.64997H10.8339C10.8004 9.39125 10.6978 10.1278 10.5274 10.85H8.74985ZM12.1324 8.64997H14.3169C14.2369 9.43497 14.0069 10.175 13.6669 10.85H11.8589C12.0044 10.1625 12.0989 9.42497 12.1324 8.64997ZM12.1324 7.34998C12.1018 6.61037 12.0103 5.87454 11.8589 5.14998H13.6664C14.0074 5.82498 14.2364 6.56498 14.3169 7.34998H12.1324ZM12.7954 3.84998H11.5014C11.3192 3.31162 11.0813 2.7938 10.7914 2.30498C11.5556 2.68104 12.2369 3.20638 12.7949 3.84998H12.7954ZM5.20835 2.30498C4.91844 2.7938 4.68047 3.31162 4.49835 3.84998H3.20485C3.76298 3.20632 4.44439 2.68099 5.20885 2.30498H5.20835ZM3.20485 12.15H4.49935C4.69735 12.7245 4.93635 13.242 5.20935 13.695C4.44453 13.3191 3.76278 12.7937 3.20435 12.15H3.20485ZM10.7919 13.695C11.0818 13.2061 11.3197 12.6883 11.5019 12.15H12.7959C12.2377 12.7936 11.5563 13.319 10.7919 13.695Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })))), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "English (CA)")))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("button", {
    onClick: switchCurrencyModal,
    className: "py-3 px-1 flex items-center",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-4 flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, currency.sign)), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, currency.name)))))));
};

/***/ }),

/***/ "./src/components/modals/RegisterModal.tsx":
/*!*************************************************!*\
  !*** ./src/components/modals/RegisterModal.tsx ***!
  \*************************************************/
/*! exports provided: RegisterModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModal", function() { return RegisterModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/RegisterModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const RegisterModal = ({
  setRegisterModal,
  setType,
  type,
  nottype,
  phrase
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "darkOverlay",
    className: "fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("div", {
    className: "w-screen md:min-h-104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    id: "centerAbsolute",
    className: "rounded-xl hidden fixed bg-white md:block w-144 pb-8 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full border-b border-gray-300 mt-2 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative w-11/12 flex justify-center items-center my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center absolute left-0 z-20 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => setRegisterModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
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
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })))))), __jsx("div", {
    className: "w-full flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, type)))), __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-11/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-3 mt-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("form", {
    action: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-book'
    },
    htmlFor: "country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "absolute text-gray-650 text-xs top-0 pl-3 pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
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
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Canada (+1)"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Japan (+81)"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "United States (+1)")), __jsx("div", {
    className: "h-full pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("svg", {
    className: "fill-current h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
      lineNumber: 92
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-xs text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "We'll call or text you to confirm your number. Standard message and data rates apply.")), __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full bg-pink-750 py-3 rounded-lg text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Continue")), __jsx("div", {
    className: "pt-4 pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("p", {
    id: "pseudo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-xs text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "or"))), __jsx("div", {
    className: "w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("div", {
    className: "absolute left-0 ml-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
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
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("path", {
    d: "m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "Continue with email")), __jsx("div", {
    className: "w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginLeft: 15
    },
    className: "absolute left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("mask", {
    id: "b",
    style: {
      fill: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("use", {
    href: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("path", {
    id: "a",
    d: "M.001 0H24v23.854H.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }))), __jsx("path", {
    d: "M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12",
    style: {
      fill: '#1877F2'
    },
    mask: "url(#b)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("path", {
    d: "M16.671 15.469L17.203 12h-3.328V9.749c0-.949.465-1.874 1.956-1.874h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0V15.47h2.796",
    fill: "#FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "Continue with Facebook")), __jsx("div", {
    className: "w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginLeft: 17
    },
    className: "absolute left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx("path", {
    d: "M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",
    style: {
      fill: '#EA4335'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), __jsx("path", {
    d: "M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",
    style: {
      fill: '#4285F4'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }), __jsx("path", {
    d: "M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",
    style: {
      fill: '#FBBC05'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }), __jsx("path", {
    d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",
    style: {
      fill: '#34A853'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, "Continue with Google")), __jsx("div", {
    className: "w-full border-gray-500 border-2 rounded-lg py-3 flex justify-center items-center relative mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginLeft: 17
    },
    className: "absolute left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#484848'
    },
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx("path", {
    d: "m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, "Continue with Apple")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
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
      lineNumber: 215
    },
    __self: undefined
  }, nottype)))))));
};

/***/ }),

/***/ "./src/components/modals/currency.json":
/*!*********************************************!*\
  !*** ./src/components/modals/currency.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"location\":\"Australia\",\"full\":\"Australian dollar\",\"abbreviation\":\"AUD\",\"symbol\":\"$\"},{\"location\":\"Brazil\",\"full\":\"Brazilian real\",\"abbreviation\":\"BRL\",\"symbol\":\"R$\"},{\"location\":\"Bulgaria\",\"full\":\"Bulgarian lev\",\"abbreviation\":\"BGN\",\"symbol\":\"лв\"},{\"location\":\"Canada\",\"full\":\"Canadian dollar\",\"abbreviation\":\"CAD\",\"symbol\":\"$\"},{\"location\":\"Chile\",\"full\":\"Chilean peso\",\"abbreviation\":\"CLP\",\"symbol\":\"$\"},{\"location\":\"China\",\"full\":\"CNY\",\"abbreviation\":\"CNY\",\"symbol\":\"￥\"},{\"location\":\"Colombia\",\"full\":\"Colombian peso\",\"abbreviation\":\"COP\",\"symbol\":\"$\"},{\"location\":\"Costa Rican\",\"full\":\"Costa Rican colon\",\"abbreviation\":\"CRC\",\"symbol\":\"₡\"},{\"location\":\"Croatia\",\"full\":\"Croatian kuna\",\"abbreviation\":\"HRK\",\"symbol\":\"kn\"},{\"location\":\"Czech\",\"full\":\"Czech koruna\",\"abbreviation\":\"CZK\",\"symbol\":\"Kč\"},{\"location\":\"Denmark\",\"full\":\"Danish krone\",\"abbreviation\":\"DKK\",\"symbol\":\"kr\"},{\"location\":\"United Arab Emirates\",\"full\":\"Emirati dirham\",\"abbreviation\":\"AED\",\"symbol\":\"د.إ\"},{\"location\":\"European Union\",\"full\":\"Euro\",\"abbreviation\":\"EUR\",\"symbol\":\"€\"},{\"location\":\"Hong Kong\",\"full\":\"Hong Kong dollar\",\"abbreviation\":\"HKD\",\"symbol\":\"$\"},{\"location\":\"Hungary\",\"full\":\"Fungarian forint\",\"abbreviation\":\"HUF\",\"symbol\":\"Ft\"},{\"location\":\"India\",\"full\":\"India rupee\",\"abbreviation\":\"INR\",\"symbol\":\"₹\"},{\"location\":\"Israel\",\"full\":\"Israeli new shekel\",\"abbreviation\":\"ILS\",\"symbol\":\"₪\"},{\"location\":\"Japan\",\"full\":\"Japanese yen\",\"abbreviation\":\"JPY\",\"symbol\":\"¥\"},{\"location\":\"Malaysia\",\"full\":\"Malaysian ringgit\",\"abbreviation\":\"MYR\",\"symbol\":\"RM\"},{\"location\":\"Mexico\",\"full\":\"Mexican peso\",\"abbreviation\":\"MXN\",\"symbol\":\"$\"},{\"location\":\"Morocco\",\"full\":\"Moroccan dirham\",\"abbreviation\":null,\"symbol\":\"MAD\"},{\"location\":\"Taiwan\",\"full\":\"New Taiwan dollar\",\"abbreviation\":\"TWD\",\"symbol\":\"$\"},{\"location\":\"New Zealand\",\"full\":\"New Zealand dollar\",\"abbreviation\":\"NZD\",\"symbol\":\"$\"},{\"location\":\"Norway\",\"full\":\"Norwegian krone\",\"abbreviation\":\"NOK\",\"symbol\":\"kr\"},{\"location\":\"Peru\",\"full\":\"Peruvian sol\",\"abbreviation\":\"PEN\",\"symbol\":\"S/\"},{\"location\":\"Philippine\",\"full\":\"Philippine peso\",\"abbreviation\":\"PHP\",\"symbol\":\"₱\"},{\"location\":\"Poland\",\"full\":\"Polish zloty\",\"abbreviation\":\"PLN\",\"symbol\":\"zł\"},{\"location\":\"United Kingdom\",\"full\":\"Pound sterling\",\"abbreviation\":\"GBP\",\"symbol\":\"£\"},{\"location\":\"Romania\",\"full\":\"Romanian leu\",\"abbreviation\":\"RON\",\"symbol\":\"lei\"},{\"location\":\"Russia\",\"full\":\"Russian ruble\",\"abbreviation\":\"RUB\",\"symbol\":\"₽\"},{\"location\":\"Saudi Arabia\",\"full\":\"Saudi Araibian riyal\",\"abbreviation\":\"SAR\",\"symbol\":\"SR\"},{\"location\":\"Singapore\",\"full\":\"Singapore dollar\",\"abbreviation\":\"SGD\",\"symbol\":\"$\"},{\"location\":\"South Africa\",\"full\":\"South African rand\",\"abbreviation\":\"ZAR\",\"symbol\":\"R\"},{\"location\":\"South Korea\",\"full\":\"South Korean won\",\"abbreviation\":\"KRW\",\"symbol\":\"₩\"},{\"location\":\"Sweden\",\"full\":\"Swedish krona\",\"abbreviation\":\"SEK\",\"symbol\":\"kr\"},{\"location\":\"Switzerland\",\"full\":\"Swiss franc\",\"abbreviation\":null,\"symbol\":\"CHF\"},{\"location\":\"Thailand\",\"full\":\"Thai baht\",\"abbreviation\":\"THB\",\"symbol\":\"฿\"},{\"location\":\"Turkey\",\"full\":\"Turkish lira\",\"abbreviation\":\"TRY\",\"symbol\":\"₺\"},{\"location\":\"United States\",\"full\":\"United States dollar\",\"abbreviation\":\"USD\",\"symbol\":\"$\"},{\"location\":\"Uruguay\",\"full\":\"Uruguayan peso\",\"abbreviation\":\"UYU\",\"symbol\":\"$U\"}]");

/***/ }),

/***/ "./src/components/wrapper/ExploreSection.tsx":
/*!***************************************************!*\
  !*** ./src/components/wrapper/ExploreSection.tsx ***!
  \***************************************************/
/*! exports provided: ExploreSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSection", function() { return ExploreSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/ExploreSection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const ExploreSection = ({
  title,
  phrase,
  children
}) => {
  const renderContent = phrase => {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl text-gray-850 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-gray-850 text-2xl py-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: undefined
      }, title));
    }
  };

  return __jsx("div", {
    className: "md:px-0 max-w-90% xl:px-0 mx-auto py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, renderContent(phrase), children);
};

/***/ }),

/***/ "./src/components/wrapper/ExploreSectionOverflow.tsx":
/*!***********************************************************!*\
  !*** ./src/components/wrapper/ExploreSectionOverflow.tsx ***!
  \***********************************************************/
/*! exports provided: ExploreSectionOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSectionOverflow", function() { return ExploreSectionOverflow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/ExploreSectionOverflow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const ExploreSectionOverflow = ({
  title,
  phrase,
  children
}) => {
  function renderPhrase(phrase) {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "scrollable text-gray-850 text-2xl pt-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "scrollable text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        className: "scrollable text-gray-850 text-2xl font-semibold py-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, title));
    }
  }

  return __jsx("div", {
    className: "md:px-0 max-w-90% mx-auto py-5 overflow-x-hidden overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, renderPhrase(phrase), children);
};

/***/ }),

/***/ "./src/pages/stay/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/stay/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.jsx");
/* harmony import */ var _components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/HeaderCategory */ "./src/components/layout/HeaderCategory.jsx");
/* harmony import */ var _components_layout_MovePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/MovePage */ "./src/components/layout/MovePage.jsx");
/* harmony import */ var _components_functions_Travel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/functions/Travel */ "./src/components/functions/Travel.tsx");
/* harmony import */ var _components_containers_THundredPlus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/containers/THundredPlus */ "./src/components/containers/THundredPlus.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stay/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Layout




 // Component


 // Next

const Stay = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("header", {
    className: "z-20 sticky bg-white top-0 md:shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__["ExploreHeader"], {
    white: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx(_components_layout_HeaderCategory__WEBPACK_IMPORTED_MODULE_3__["HeaderCategory"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "max-w-90% md:px-0 mx-auto py-5 border-b border-gray-400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Enter dates and number of guests to see the total price per night. Tourism taxes may be added")), __jsx(_components_functions_Travel__WEBPACK_IMPORTED_MODULE_5__["Travel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_components_containers_THundredPlus__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "my-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_components_layout_MovePage__WEBPACK_IMPORTED_MODULE_4__["MovePage"], {
    category: "stay",
    page: 1,
    previousPage: 0,
    nextPage: 1,
    first: true,
    last: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_1__["NewFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Stay);

/***/ }),

/***/ "./src/util/RenderSkeleton.js":
/*!************************************!*\
  !*** ./src/util/RenderSkeleton.js ***!
  \************************************/
/*! exports provided: renderSkeletonVertical, renderSkeletonHorizontal, renderSkeletonThreeColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSkeletonVertical", function() { return renderSkeletonVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSkeletonHorizontal", function() { return renderSkeletonHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSkeletonThreeColumn", function() { return renderSkeletonThreeColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/util/RenderSkeleton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const renderSkeletonVertical = number => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-full mr-3 mb-3 rounded h-64 md:h-104 py-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }), __jsx("div", {
      className: "w-full mb-3 h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    })), __jsx("div", {
      className: "w-80p h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }))));
  }

  return content;
};
const renderSkeletonHorizontal = (number, withLine) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-full mr-3 mb-3 rounded h-24 mb-16 md:h-40 lg:h-48 xl:h-56",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }), withLine ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "w-full mb-3 h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    })), __jsx("div", {
      className: "w-80p h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }))) : null));
  }

  return content;
};
const renderSkeletonThreeColumn = (number, withLine) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-full mr-3 mb-3 rounded h-48 md:h-56 lg:h-64",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }), withLine ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "w-full mb-3 h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    })), __jsx("div", {
      className: "w-80p h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, __jsx("div", {
      id: "skeleton-pulse--horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }))) : null));
  }

  return content;
};

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./src/pages/stay/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/frontend/src/pages/stay/index.tsx */"./src/pages/stay/index.tsx");


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

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "react-sizeme":
/*!*******************************!*\
  !*** external "react-sizeme" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sizeme");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=stay.js.map