(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(68);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(70);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(71);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(18);

var _helpers = __webpack_require__(72);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(67)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CartProvider; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var CartContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});
var CartProvider = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(function (_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      cartItems = _useState2[0],
      setCartItems = _useState2[1];

  var addItem = function addItem(product, item, amount) {
    var itemInCart = cartItems.find(function (x) {
      return x.product.name === product.name && x.item.taste === item.taste;
    });

    if (itemInCart) {
      var newCart = cartItems.map(function (x) {
        if (x === itemInCart) {
          return _objectSpread(_objectSpread({}, x), {}, {
            amount: x.amount + amount
          });
        }

        return x;
      });
      setCartItems(newCart);
      return;
    }

    setCartItems([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(cartItems), [{
      product: product,
      item: item,
      amount: amount
    }]));
  };

  var decreaseAmount = function decreaseAmount(product, item) {
    var newAmount = 0;
    var newCart = cartItems.map(function (x) {
      if (x.product.name === product.name && x.item.taste === item.taste) {
        newAmount = x.amount - 1;
        return _objectSpread(_objectSpread({}, x), {}, {
          amount: newAmount
        });
      }

      return x;
    });

    if (newAmount < 1) {
      removeItem(product, item);
      return;
    }

    setCartItems(newCart);
  };

  var removeItem = function removeItem(product, item) {
    var newCart = cartItems.filter(function (x) {
      return x.product.name !== product.name && x.item.taste !== item.taste;
    });
    setCartItems(newCart);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CartContext.Provider, {
    value: {
      removeItem: removeItem,
      decreaseAmount: decreaseAmount,
      addItem: addItem,
      cartItems: cartItems
    }
  }, children);
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ DataContext; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ DataProvider; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(2);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/contexts/DataContext.js


var DataContext = /*#__PURE__*/external_react_default.a.createContext({});
var DataProvider = /*#__PURE__*/Object(external_react_["memo"])(function (_ref) {
  var children = _ref.children;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      mainProduct = _useState2[0],
      setMainProduct = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      allProduct = _useState4[0],
      setAllProduct = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(0),
      _useState6 = slicedToArray_default()(_useState5, 2),
      allProductTaste = _useState6[0],
      setAllProductTaste = _useState6[1];

  return /*#__PURE__*/external_react_default.a.createElement(DataContext.Provider, {
    value: {
      mainProduct: mainProduct,
      setMainProduct: setMainProduct,
      allProduct: allProduct,
      setAllProduct: setAllProduct,
      allProductTaste: allProductTaste,
      setAllProductTaste: setAllProductTaste
    }
  }, children);
});

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/contexts/index.js


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(18);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(69)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(2);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/components/Router.js
var Router = __webpack_require__(12);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/constants.js
var isTabletQuery = 'max-width: 1024px';
var isMobileQuery = 'max-width: 600px';
var isDesktopQuery = 'min-width: 1025px';
// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(36);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__(37);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__(38);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__(39);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__(40);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(41);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(42);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/Composition.js











var CompositionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Composition__CompositionWrapper",
  componentId: "sc-15pujl0-0"
})(["display:flex;width:100%;justify-content:flex-end;align-items:baseline;margin-top:30px;cursor:pointer;@media (", "){justify-content:flex-start;}&:focus{color:darkgray;}&:hover{color:darkslategray;}"], isMobileQuery);

var Arrow = external_styled_components_default.a.div.withConfig({
  displayName: "Composition__Arrow",
  componentId: "sc-15pujl0-1"
})(["border:solid black;border-width:0 1px 1px 0;display:inline-block;padding:4px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);height:1px;margin-bottom:5px;margin-left:10px;margin-right:10px;"]);

var StyledDialogTitle = external_styled_components_default()(DialogTitle_default.a).withConfig({
  displayName: "Composition__StyledDialogTitle",
  componentId: "sc-15pujl0-2"
})(["font-family:Gerbera;font-weight:500;font-size:22px;color:#282c34;display:flex;align-items:center;justify-content:space-between;"]);

var DescriptionTitle = external_styled_components_default.a.div.withConfig({
  displayName: "Composition__DescriptionTitle",
  componentId: "sc-15pujl0-3"
})(["font-family:Gerbera;font-size:16px;font-weight:500;line-height:20px;letter-spacing:-0.3px;color:black;margin-right:5px;"]);

var DescriptionText = external_styled_components_default()(DescriptionTitle).withConfig({
  displayName: "Composition__DescriptionText",
  componentId: "sc-15pujl0-4"
})(["font-weight:300;"]);

var StyledDialog = external_styled_components_default()(Dialog_default.a).withConfig({
  displayName: "Composition__StyledDialog",
  componentId: "sc-15pujl0-5"
})([".MuiDialog-paper{max-width:1000px;padding:30px 50px;}"]);

var ItemTitle = external_styled_components_default.a.div.withConfig({
  displayName: "Composition__ItemTitle",
  componentId: "sc-15pujl0-6"
})(["display:flex;margin-bottom:10px;margin-top:30px;font-family:Gerbera;font-weight:300;color:black;"]);

var Composition_Composition = function Composition(_ref) {
  var name = _ref.name,
      taste = _ref.taste,
      composition = _ref.composition;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var isCompositionArray = Array.isArray(composition);

  var handleIsOpen = function handleIsOpen() {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(CompositionWrapper, {
    onClick: function onClick() {
      return handleIsOpen();
    }
  }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432", /*#__PURE__*/external_react_default.a.createElement(Arrow, null)), /*#__PURE__*/external_react_default.a.createElement(StyledDialog, {
    onClose: handleIsOpen,
    "aria-labelledby": "simple-dialog-title",
    open: isOpen
  }, /*#__PURE__*/external_react_default.a.createElement(StyledDialogTitle, {
    disableTypography: true
  }, name, taste && "(".concat(taste, ")"), /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "close",
    onClick: function onClick() {
      return handleIsOpen();
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Close_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(DialogContent_default.a, null, /*#__PURE__*/external_react_default.a.createElement(DialogContentText_default.a, null, /*#__PURE__*/external_react_default.a.createElement(DescriptionTitle, null, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432:"), !isCompositionArray ? /*#__PURE__*/external_react_default.a.createElement(DescriptionText, null, composition) : composition.map(function (item) {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(ItemTitle, null, /*#__PURE__*/external_react_default.a.createElement(DescriptionTitle, null, item.title, ", "), /*#__PURE__*/external_react_default.a.createElement("div", null, item.details)), /*#__PURE__*/external_react_default.a.createElement(DescriptionTitle, null, "\u0421\u043E\u0441\u0442\u0430\u0432:"), ' ', /*#__PURE__*/external_react_default.a.createElement(DescriptionText, null, item.description));
  })))));
};
// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/MainProducts/ProductDescription.js





var Container = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__Container",
  componentId: "gtu4s9-0"
})(["height:70%;width:780px;margin-top:90px;font-family:Gerbera;font-style:normal;font-size:16px;margin-left:50px;@media (", "){width:50%;margin-left:0;}@media (", "){width:90%;margin-top:50px;margin-left:0;}"], isTabletQuery, isMobileQuery);

var TitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__TitleWrapper",
  componentId: "gtu4s9-1"
})(["display:flex;align-items:baseline;@media (", "){display:none;}"], isMobileQuery);

var Title = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__Title",
  componentId: "gtu4s9-2"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:60px;line-height:102%;text-transform:uppercase;color:#e30b17;@media (", "){font-size:36px;}"], isTabletQuery);

var TitleBlack = external_styled_components_default()(Title).withConfig({
  displayName: "ProductDescription__TitleBlack",
  componentId: "gtu4s9-3"
})(["color:black;@media (", "){font-size:16px;}"], isTabletQuery);

var Text = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__Text",
  componentId: "gtu4s9-4"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:18px;line-height:102%;text-transform:uppercase;color:#151524;margin-left:25px;@media (", "){font-size:12px;margin-left:5px;}"], isTabletQuery);

var Text2 = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__Text2",
  componentId: "gtu4s9-5"
})(["font-family:Cervo;font-style:normal;font-size:16px;line-height:18px;letter-spacing:-0.5px;color:#999999;width:120px;"]);

var RegularText = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__RegularText",
  componentId: "gtu4s9-6"
})(["margin:10px 0;"]);

var Divider = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__Divider",
  componentId: "gtu4s9-7"
})(["height:1px;background-color:#999999;flex:1;margin:20px 0;"]);

var Wrapper2 = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__Wrapper2",
  componentId: "gtu4s9-8"
})(["display:flex;align-items:center;"]);

var InfoBox = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__InfoBox",
  componentId: "gtu4s9-9"
})(["display:flex;justify-content:space-between;width:80%;flex-wrap:wrap;"]);

var InfoBoxItem = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__InfoBoxItem",
  componentId: "gtu4s9-10"
})(["display:flex;flex-direction:column;padding:10px;"]);

var InfoBoxName = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDescription__InfoBoxName",
  componentId: "gtu4s9-11"
})(["font-family:Cervo;font-style:normal;font-weight:normal;font-size:20px;letter-spacing:0.002em;text-transform:uppercase;color:#151524;"]);

var InfoBoxValue = external_styled_components_default()(Title).withConfig({
  displayName: "ProductDescription__InfoBoxValue",
  componentId: "gtu4s9-12"
})(["font-style:normal;font-size:40px;text-transform:none;display:flex;align-items:baseline;"]);

var InfoBoxValueWord = external_styled_components_default()(InfoBoxValue).withConfig({
  displayName: "ProductDescription__InfoBoxValueWord",
  componentId: "gtu4s9-13"
})(["font-size:25px;text-transform:none;"]);

var DescriptionBox = external_styled_components_default()(InfoBox).withConfig({
  displayName: "ProductDescription__DescriptionBox",
  componentId: "gtu4s9-14"
})(["width:auto;@media (", "){flex-direction:column;}"], isTabletQuery);

var DescriptionBoxItem = external_styled_components_default()(InfoBoxItem).withConfig({
  displayName: "ProductDescription__DescriptionBoxItem",
  componentId: "gtu4s9-15"
})(["width:30%;@media (", "){width:100%;}"], isTabletQuery);

var ProductDescription_ProductDescription = function ProductDescription(_ref) {
  var product = _ref.product;
  var currentProductTaste = product.items[0];
  return /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement(TitleWrapper, null, /*#__PURE__*/external_react_default.a.createElement(Title, null, currentProductTaste.name), /*#__PURE__*/external_react_default.a.createElement(Text, null, product.shortDescription)), /*#__PURE__*/external_react_default.a.createElement(TitleBlack, null, product.tagline), /*#__PURE__*/external_react_default.a.createElement(RegularText, null, product.description), /*#__PURE__*/external_react_default.a.createElement(Wrapper2, null, /*#__PURE__*/external_react_default.a.createElement(Text2, null, product.form), /*#__PURE__*/external_react_default.a.createElement(Divider, null)), /*#__PURE__*/external_react_default.a.createElement(InfoBox, null, product.components.map(function (item) {
    return /*#__PURE__*/external_react_default.a.createElement(InfoBoxItem, {
      key: item.name
    }, /*#__PURE__*/external_react_default.a.createElement(InfoBoxName, null, item.name), /*#__PURE__*/external_react_default.a.createElement(InfoBoxValue, null, item.value, " ", /*#__PURE__*/external_react_default.a.createElement(InfoBoxValueWord, null, item.unit)));
  })), /*#__PURE__*/external_react_default.a.createElement(Divider, null), /*#__PURE__*/external_react_default.a.createElement(DescriptionBox, null, product.details.map(function (item) {
    return /*#__PURE__*/external_react_default.a.createElement(DescriptionBoxItem, {
      key: item.title
    }, /*#__PURE__*/external_react_default.a.createElement(InfoBoxName, null, item.title), /*#__PURE__*/external_react_default.a.createElement(RegularText, null, item.description));
  })), /*#__PURE__*/external_react_default.a.createElement(Composition_Composition, {
    name: currentProductTaste.name,
    taste: currentProductTaste.taste,
    composition: currentProductTaste.composition
  }));
};
// EXTERNAL MODULE: external "react-dropdown"
var external_react_dropdown_ = __webpack_require__(43);
var external_react_dropdown_default = /*#__PURE__*/__webpack_require__.n(external_react_dropdown_);

// EXTERNAL MODULE: external "react-dropdown/style.css"
var style_css_ = __webpack_require__(83);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/shadow.png
var shadow = __webpack_require__(44);
var shadow_default = /*#__PURE__*/__webpack_require__.n(shadow);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/contexts/CartContext.js
var CartContext = __webpack_require__(8);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/Product.js









var blurAnimation = Object(external_styled_components_["keyframes"])(["0%{opacity:0;transform:translateX(50px);filter:blur(20px);}20%{opacity:.6;transform:translateX(0);filter:blur(20px);}30%{opacity:1;transform:translateX(0);filter:blur(0);}"]);
var selectAnimation = Object(external_styled_components_["keyframes"])(["0%{opacity:0;}60%{opacity:0;}80%{opacity:1;}"]);
var cartAnimation = Object(external_styled_components_["keyframes"])(["0%{opacity:0;}80%{opacity:0;}100%{opacity:1;}"]);
var shadowAnimation = Object(external_styled_components_["keyframes"])(["0%{opacity:0;}20%{opacity:0;}30%{opacity:1;}"]);

var ItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Product__ItemWrapper",
  componentId: "sc-1gfikq2-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:", ";font-family:Gerbera;font-weight:500;height:100%;text-transform:uppercase;@media (", "){margin-top:", ";}@media (", "){margin-top:", ";}"], function (p) {
  return p.allProducts ? '-150px' : '-80px';
}, isTabletQuery, function (p) {
  return p.allProducts ? '0' : '-50px';
}, isMobileQuery, function (p) {
  return p.allProducts ? '30px' : '0';
});

var PriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Product__PriceWrapper",
  componentId: "sc-1gfikq2-1"
})(["display:flex;align-items:baseline;margin-top:30px;"]);

var Price = external_styled_components_default.a.div.withConfig({
  displayName: "Product__Price",
  componentId: "sc-1gfikq2-2"
})(["font-size:44px;line-height:44px;letter-spacing:-1px;color:#1f3554;"]);

var OldPrice = external_styled_components_default()(Price).withConfig({
  displayName: "Product__OldPrice",
  componentId: "sc-1gfikq2-3"
})(["font-size:24px;line-height:28px;text-decoration-line:line-through;mix-blend-mode:normal;opacity:0.6;padding-right:10px;"]);

var AddToCartButtons = external_styled_components_default.a.div.withConfig({
  displayName: "Product__AddToCartButtons",
  componentId: "sc-1gfikq2-4"
})(["display:flex;margin-top:30px;"]);

var Button = external_styled_components_default.a.div.withConfig({
  displayName: "Product__Button",
  componentId: "sc-1gfikq2-5"
})(["width:54px;height:54px;display:flex;align-items:center;align-content:center;background-color:#00c0f3;color:white;justify-content:center;border-radius:", ";cursor:pointer;"], function (p) {
  return p.left ? '10px 0 0 10px' : '0 10px 10px 0';
});

var AddToCardButton = external_styled_components_default()(Button).withConfig({
  displayName: "Product__AddToCardButton",
  componentId: "sc-1gfikq2-6"
})(["width:194px;background:#1f3554;border-radius:0;"]);

var StyledImg = external_styled_components_default.a.div.withConfig({
  displayName: "Product__StyledImg",
  componentId: "sc-1gfikq2-7"
})(["width:350px;height:400px;background:url(\"", "\") center center no-repeat;background-size:contain;animation:1.3s ", " linear;@media (", "){height:320px;animation:none;}@media (", "){height:200px;}"], function (p) {
  return p.src;
}, blurAnimation, isTabletQuery, isMobileQuery);

var AnimatedSelect = external_styled_components_default.a.div.withConfig({
  displayName: "Product__AnimatedSelect",
  componentId: "sc-1gfikq2-8"
})(["animation:1.3s ", " linear;@media (", "){animation:none;}"], selectAnimation, isTabletQuery);

var AnimatedCart = external_styled_components_default.a.div.withConfig({
  displayName: "Product__AnimatedCart",
  componentId: "sc-1gfikq2-9"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;animation:1.3s ", " linear;@media (", "){animation:none;}"], cartAnimation, isTabletQuery);

var StyledSelect = external_styled_components_default()(external_react_dropdown_default.a).withConfig({
  displayName: "Product__StyledSelect",
  componentId: "sc-1gfikq2-10"
})(["font-family:Gerbera;font-weight:500;.Dropdown-option.is-selected{background-color:#f2f9fc;color:#e30b17;}.Dropdown-control{border:0;color:#e30b17;}.Dropdown-menu{width:180px;left:-55px;}"]);

var SelectWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Product__SelectWrapper",
  componentId: "sc-1gfikq2-11"
})(["display:flex;align-items:center;border-bottom:1px solid black;"]);

var Shadow = external_styled_components_default.a.div.withConfig({
  displayName: "Product__Shadow",
  componentId: "sc-1gfikq2-12"
})(["width:350px;height:100px;background:url(\"", "\") center center no-repeat;background-size:contain;animation:1.3s ", " linear;@media (", "){animation:none;}"], function (p) {
  return p.src;
}, shadowAnimation, isTabletQuery);

var Product_Product = function Product(_ref) {
  var product = _ref.product,
      isAllProductsSection = _ref.isAllProductsSection,
      onTasteChange = _ref.onTasteChange,
      tasteIndex = _ref.tasteIndex;

  var _useContext = Object(external_react_["useContext"])(CartContext["a" /* CartContext */]),
      addItem = _useContext.addItem;

  var _useState = Object(external_react_["useState"])(1),
      _useState2 = slicedToArray_default()(_useState, 2),
      itemsAmount = _useState2[0],
      setItemsAmount = _useState2[1];

  var item = product === null || product === void 0 ? void 0 : product.items[tasteIndex || 0];
  var options = product.items.map(function (x, index) {
    return {
      label: x.taste,
      value: index
    };
  });

  var decreaseItem = function decreaseItem() {
    if (itemsAmount > 1) {
      setItemsAmount(itemsAmount - 1);
    }
  };

  return /*#__PURE__*/external_react_default.a.createElement(ItemWrapper, {
    allProducts: isAllProductsSection
  }, /*#__PURE__*/external_react_default.a.createElement(StyledImg, {
    src: item.picture,
    alt: "chocobar",
    allProducts: isAllProductsSection,
    key: "img".concat(product.name).concat(tasteIndex)
  }), isAllProductsSection && /*#__PURE__*/external_react_default.a.createElement(Shadow, {
    src: shadow_default.a,
    key: "shadow".concat(product.name).concat(tasteIndex)
  }), /*#__PURE__*/external_react_default.a.createElement(AnimatedSelect, {
    key: "select".concat(product.name).concat(tasteIndex)
  }, (product === null || product === void 0 ? void 0 : product.items.length) > 1 ? /*#__PURE__*/external_react_default.a.createElement(SelectWrapper, null, "\u0412\u043A\u0443\u0441", /*#__PURE__*/external_react_default.a.createElement(StyledSelect, {
    options: options,
    onChange: function onChange(option) {
      return onTasteChange(option.value);
    },
    value: options[tasteIndex],
    placeholder: "Select an option"
  })) : Boolean(item.taste) && /*#__PURE__*/external_react_default.a.createElement("div", null, "\u0412\u041A\u0423\u0421 ", item.taste)), /*#__PURE__*/external_react_default.a.createElement(AnimatedCart, {
    key: "cart".concat(product.name).concat(tasteIndex)
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(PriceWrapper, null, /*#__PURE__*/external_react_default.a.createElement(OldPrice, null, product.oldPrice), /*#__PURE__*/external_react_default.a.createElement(Price, null, product.price.toLocaleString('ru-RU'), " \u20BD"))), /*#__PURE__*/external_react_default.a.createElement(AddToCartButtons, null, /*#__PURE__*/external_react_default.a.createElement(Button, {
    left: true,
    onClick: function onClick() {
      return decreaseItem();
    }
  }, "-"), /*#__PURE__*/external_react_default.a.createElement(AddToCardButton, {
    onClick: function onClick() {
      return addItem(product, item, itemsAmount);
    }
  }, "\u0412 \u041A\u041E\u0420\u0417\u0418\u041D\u0423: ", itemsAmount, " \u0428\u0422."), /*#__PURE__*/external_react_default.a.createElement(Button, {
    onClick: function onClick() {
      return setItemsAmount(itemsAmount + 1);
    }
  }, "+"))));
};
// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/chocobar_halva.png
var chocobar_halva = __webpack_require__(15);
var chocobar_halva_default = /*#__PURE__*/__webpack_require__.n(chocobar_halva);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/chocobar_mango.png
var chocobar_mango = __webpack_require__(16);
var chocobar_mango_default = /*#__PURE__*/__webpack_require__.n(chocobar_mango);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/chocobar_main.png
var chocobar_main = __webpack_require__(45);
var chocobar_main_default = /*#__PURE__*/__webpack_require__.n(chocobar_main);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/jelly_blueberries.png
var jelly_blueberries = __webpack_require__(46);
var jelly_blueberries_default = /*#__PURE__*/__webpack_require__.n(jelly_blueberries);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/jelly_cinnamon.png
var jelly_cinnamon = __webpack_require__(20);
var jelly_cinnamon_default = /*#__PURE__*/__webpack_require__.n(jelly_cinnamon);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/jelly_raspberry.png
var jelly_raspberry = __webpack_require__(47);
var jelly_raspberry_default = /*#__PURE__*/__webpack_require__.n(jelly_raspberry);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/jelly_main.png
var jelly_main = __webpack_require__(48);
var jelly_main_default = /*#__PURE__*/__webpack_require__.n(jelly_main);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/drink_main.png
var drink_main = __webpack_require__(49);
var drink_main_default = /*#__PURE__*/__webpack_require__.n(drink_main);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/energotonic.png
var energotonic = __webpack_require__(50);
var energotonic_default = /*#__PURE__*/__webpack_require__.n(energotonic);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/fortifying_complex.png
var fortifying_complex = __webpack_require__(51);
var fortifying_complex_default = /*#__PURE__*/__webpack_require__.n(fortifying_complex);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/tonic_complex.png
var tonic_complex = __webpack_require__(52);
var tonic_complex_default = /*#__PURE__*/__webpack_require__.n(tonic_complex);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/calming_complex.png
var calming_complex = __webpack_require__(53);
var calming_complex_default = /*#__PURE__*/__webpack_require__.n(calming_complex);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/data/productsData.js












var mainProductData = [{
  name: 'Батончик Dual Shot',
  shortDescription: '2 батончика в пачке',
  form: 'В одном батончике',
  tagline: 'Двойной удар по голоду и усталости',
  description: 'Мощный источник концентрированной энергии с ярким кофейным вкусом и оптимальным количеством правильных калорий. В одной упаковке – две порции батончика.',
  components: [{
    name: 'кофеин',
    value: '25',
    unit: 'мг'
  }, {
    name: 'белок',
    value: '5,8',
    unit: 'г'
  }, {
    name: 'сахар',
    value: '2,5',
    unit: 'г'
  }, {
    name: 'калорийность',
    value: '91',
    unit: 'ккал'
  }, {
    name: 'сила эффекта',
    value: 'light'
  }],
  details: [{
    title: 'Натуральный кофе и экстракт гуараны',
    description: 'заряжают тело энергией и помогают сконцентрироваться.'
  }, {
    title: 'Тоффи-паста и ядра фундука',
    description: 'выступают как источники быстрых и медленных углеводов, продлевая действие кофеина.'
  }, {
    title: 'Сывороточный и молочный протеин ',
    description: 'надолго устраняют чувство голода и обеспечивают организм высококачественным белком, помогая снизить количество потребляемых калорий.'
  }],
  oldPrice: 2400,
  price: '1600',
  items: [{
    name: 'Батончик Dual Shot',
    picture: chocobar_main_default.a,
    taste: ['кофе'],
    composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, гидрогенизированные растительные жиры, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка, концентрат молочного белка, какао-порошок, масло кокосовое, ядро фундука, кондитерский полуфабрикат «Тоффи паста» (сахар*, сироп из жженого сахара, глюкозный сироп, молоко сухое обезжиренное, гидроксид натрия (регулятор кислотности), вода, кофе натуральный, глицерин дистиллированный (агент влагоудерживающий), лимонная кислота (регулятор кислотности), экстракт гуараны, ароматизатор пищевой натуральный «Кофе», соль поваренная, сорбат калия (консервант), лецитин соевый (эмульгатор).'
  }]
}, {
  name: 'мармелад  Red Blast',
  form: 'На 10 мармеладок',
  tagline: 'Чистая энергия в удобной дозировке',
  description: 'Идеальный выбор для тех, кому требуется максимальная концентрация, мощный заряд энергии и полный контроль над ситуацией.',
  components: [{
    name: 'кофеин',
    value: '56',
    unit: 'мг'
  }, {
    name: 'белок',
    value: '4,5',
    unit: 'г'
  }, {
    name: 'калорийность',
    value: '90',
    unit: 'ккал'
  }, {
    name: 'сила эффекта',
    value: 'medium'
  }],
  details: [{
    title: 'Кофеин и натуральный экстракт гуараны',
    description: ' обеспечивают взрывной продолжительный эффект.'
  }, {
    title: 'Абсолютная точность',
    description: 'порционный формат мармелада исключает случайное употребление большого количества продукта и развитие тремора и нервозности.'
  }, {
    title: 'Максимальная дозировка',
    description: 'в одной пачке 149 мг кофеина (две банки газированного энергетика объемом 0,25 л).'
  }, {
    title: 'Удобная упаковка',
    description: 'надежный застегивающийся замок предотвращает постоянный контакт мармелада с воздухом, вызывающим его окисление и высыхание.'
  }, {
    title: 'Мягкий вкус',
    description: 'никаких ядреных добавок, только натуральные соки граната и яблока.'
  }, {
    title: 'Минимальная нагрузка на организм',
    description: 'одна мармеладка содержит 5,6 мг кофеина (можно четко рассчитать подходящую дозировку).'
  }, {
    title: 'Никакого эффекта sugar crash',
    description: 'сахар заменен на натуральную фруктозу.'
  }],
  tastes: ['яблоко-гранат'],
  oldPrice: 2400,
  price: '1600',
  items: [{
    name: 'мармелад  Red Blast',
    picture: jelly_main_default.a,
    taste: ['яблоко-гранат'],
    composition: 'Вода, фруктоза, сок гранатовый концентрированный, сок яблочный концентрированный, желатин говяжий, сироп инулина, ароматизатор пищевой натуральный «Гранат», глазирователь CAPOL (воск карнаубский, растительное масло), глазирователь Эмульсифайн 1000 (шеллак, растительное масло), экстракт гуараны, кофеин безводный, сорбат калия (консервант), бензоат натрия (консервант), антоциан (краситель натуральный).'
  }]
}, {
  name: 'Energy Drink Fruit Punch',
  form: 'В одной порции:',
  tagline: 'Максимально мощный и продолжительный заряд бодрости',
  description: 'Сухой энергетик для тех, кто устал уставать. Хватит выбирать между вкусным и эффективным – мы создали реально мощный источник качественной энергии! Залей содержимое саше водой, размешай и заряжайся хардкорным напитком!',
  components: [{
    name: 'кофеин',
    value: '128',
    unit: 'мг'
  }, {
    name: 'таурин',
    value: '196',
    unit: 'мг'
  }, {
    name: 'BCAA',
    value: '180',
    unit: 'мг'
  }, {
    name: 'пищевые волокна',
    value: '8.4',
    unit: 'г'
  }, {
    name: 'калорийность',
    value: '54',
    unit: 'ккал'
  }, {
    name: 'сахар',
    value: '2,1',
    unit: 'г'
  }, {
    name: 'сила эффекта',
    value: 'maximum'
  }],
  details: [{
    title: 'Натуральная гуарана',
    description: 'оказывает мощный тонизирующий эффект, повышает концентрацию.'
  }, {
    title: 'Таурин',
    description: 'улучшает обменные процессы, помогает снизить развитие тремора.'
  }, {
    title: 'Экстракт зеленого чая',
    description: 'усиливает действие гуараны'
  }, {
    title: 'Комплекс аминокислот BCAA',
    description: 'обеспечивает мгновенную энергетическую подпитку.'
  }, {
    title: 'Палатиноза',
    description: 'медленный углевод с низким гликемическим индексом продлевает эффект напитка, замедляя усвоение глюкозы.'
  }, {
    title: 'Изомальтоолигосахарид ',
    description: 'натуральный подсластитель и пребиотик, уменьшающий чувство голода.'
  }],
  tastes: ['яблоко-гранат'],
  oldPrice: 2400,
  price: '1600',
  items: [{
    name: 'Energy Drink Fruit Punch',
    picture: drink_main_default.a,
    taste: ['яблоко-гранат'],
    composition: 'Вода, фруктоза, сок гранатовый концентрированный, сок яблочный концентрированный, желатин говяжий, сироп инулина, ароматизатор пищевой натуральный «Гранат», глазирователь CAPOL (воск карнаубский, растительное масло), глазирователь Эмульсифайн 1000 (шеллак, растительное масло), экстракт гуараны, кофеин безводный, сорбат калия (консервант), бензоат натрия (консервант), антоциан (краситель натуральный).'
  }]
}];
var allProductsData = [{
  name: 'Энерготоник CoreNRG',
  tagline: 'Повышай резист к усталости',
  oldPrice: 2400,
  price: '1600',
  details: [{
    description: 'Для тех, кто стремится гамать дольше'
  }, {
    description: 'Экстракты элеутерококка, маральего корня, клеточный концентрат сибирской пихты BioEffective™ by Prenolica­™'
  }, {
    description: 'Мощно тонизирует организм, увеличивает стрессоустойчивость, активизирует энергообмен'
  }, {
    description: '100% натуральный продукт на основе природных компонентов.'
  }, {
    description: 'Снижение утомляемости, повышение работоспособности'
  }, {
    description: '2 пипетки под язык'
  }],
  composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, гидрогенизированные растительные жиры, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка, концентрат молочного белка, какао-порошок, масло кокосовое, ядро фундука, кондитерский полуфабрикат «Тоффи паста» (сахар*, сироп из жженого сахара, глюкозный сироп, молоко сухое обезжиренное, гидроксид натрия (регулятор кислотности), вода, кофе натуральный, глицерин дистиллированный (агент влагоудерживающий), лимонная кислота (регулятор кислотности), экстракт гуараны, ароматизатор пищевой натуральный «Кофе», соль поваренная, сорбат калия (консервант), лецитин соевый (эмульгатор).',
  items: [{
    name: 'Энерготоник CoreNRG',
    picture: energotonic_default.a,
    composition: 'вода, клеточный концентрат сибирской пихты Bioeffective™ by Prenolica™, растительный комплекс СoreNRG (экстракты красной щетки, курильского чая, чабреца, зверобоя, солянки холмовой), комплекс растительных экстрактов ENDEMIX™ (экстракты элеутерококка, маральего корня, байкальского шлемника).'
  }]
}, {
  name: 'Батончики Yoo Go',
  tagline: 'Меняй шоколад на белок!',
  oldPrice: 2400,
  price: '1600',
  details: [{
    description: 'Для тех, кто наращивает скил, а не вес'
  }, {
    description: 'Обеспечивает организм белком и медленными углеводами'
  }, {
    description: 'Мгновенный заряд энергии, долгое ощущение сытости'
  }, {
    description: 'высококачественный белок, витамины, макро- и микронутриенты'
  }, {
    description: 'максимум вкуса – минимум калорий'
  }, {
    description: '2–3 батончика в день во время игр'
  }],
  items: [{
    name: 'Detox-батончик',
    picture: chocobar_mango_default.a,
    taste: 'манго',
    composition: 'Изомальтоолигосахарид (подсластитель), концентрат сывороточных белков 80% SureProtein Essential 392, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, глазурь кондитерская Caribe Fondente Dischi (сахар*, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), масло кокосовое, кусочки сушеного манго, концентрированный яблочный сок, глицерин дистиллированный (агент влагоудерживающий), кислота лимонная (регулятор кислотности), натуральный ароматизатор «Манго», соль поваренная, сорбат калия (консервант), лецитин соевый (эмульгатор), астаксантин.  * В одном батончике – 3 г сахара.'
  }, {
    name: 'Calcium-батончик',
    picture: chocobar_halva_default.a,
    taste: 'кокос',
    composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка Fonterra™, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, масло кокосовое, кокосовая стружка, вода, морские минерализованные водоросли Aquamin F (органический кальций), глицерин дистиллированный (агент влагоудерживающий), кислота яблочная (регулятор кислотности), ароматизатор натуральный пищевой «Кокос», соль поваренная, сорбат калия (консервант), соевый лецитин (эмульгатор).  * В одном батончике – 4 г сахара'
  }, {
    name: 'Батончик Banana Mama',
    picture: chocobar_mango_default.a,
    taste: 'вишня-банан',
    composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, гидрогенизированные растительные жиры, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка Fonterra™, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, масло кокосовое, вишня сушеная резаная в рисовой обсыпке (вишня сушеная, мука рисовая), продукт экструдированных круп и зернового сырья: ржаной формовой (мука ржаная, сахар*, соль), сок апельсиновый концентрированный, глицерин дистиллированный (агент влагоудерживающий), ароматизатор пищевой натуральный «Банан», соль поваренная, сорбат калия (консервант), лецитин соевый (эмульгатор), дрожжевой автолизат Lalmin® Vita D. * В одном батончике – 4,5 г сахара.'
  }, {
    name: 'Antistress-батончик',
    picture: chocobar_halva_default.a,
    taste: 'карамель и фундук',
    composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка Fonterra™, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, масло кокосовое, кондитерский полуфабрикат «Тоффи паста» (сахар*, сироп из жженого сахара, глюкозный сироп, молоко сухое обезжиренное, гидроксид натрия (регулятор кислотности), ядро фундука, продукт экструдированных круп и зернового сырья: гречневый формовой (крупа гречневая, сахар*, соль), какао-порошок, биглицинат магния GlyciMag™, экстракт сахарного тростника Phytolin™, глицерин дистиллированный (агент влагоудерживающий), лимонная кислота (регулятор кислотности), ароматизатор пищевой натуральный, соль поваренная, сорбат калия (консервант), соевый лецитин (эмульгатор).  * В одном батончике – 3 г сахара.'
  }, {
    name: 'Фитнес-козинак',
    picture: chocobar_mango_default.a,
    taste: 'тыква-манго',
    composition: 'Изомальтоолигосахарид (подсластитель), тыква сушеная, морковь сушеная, ядра арахиса, манго сушеное в рисовой обсыпке (манго сушеное, мука рисовая), ядра семян тыквы, патока крахмальная карамельная, ядра орехов фисташки, сорбат калия (консервант)'
  }, {
    name: 'Фитнес-козинак',
    picture: chocobar_halva_default.a,
    taste: 'клюква-свекла',
    composition: 'Яблоки сушеные резаные в рисовой обсыпке (яблоко сушеное, мука рисовая), клюква сушеная резаная в рисовой обсыпке (клюква сушеная, мука рисовая), изомальтоолигосахарид (сахарозаменитель), свекла сушеная, ядра семян тыквы, патока крахмальная карамельная, ядра арахиса, ядра фундука, сок вишневый концентрированный, взорванные зерна амаранта, сорбат калия (консервант).'
  }]
}, {
  name: 'Мармелад Yoo Go',
  tagline: 'Доджи голод правильно!',
  oldPrice: 2400,
  price: '1600',
  details: [{
    description: 'для тех, кому нужен максимум пользы от перекуса'
  }, {
    description: 'обеспечивает организм витаминами и питательными веществами'
  }, {
    description: 'быстро устраняет чувство голода'
  }, {
    description: 'концентрированный сок, натуральные добавки и витамины'
  }, {
    description: 'низкокалорийный сладкий перекус'
  }, {
    description: '5–6 мармеладок во время игры'
  }],
  items: [{
    name: 'Мармелад Yoo Go',
    picture: jelly_raspberry_default.a,
    taste: 'малина-шиповник',
    composition: ' Фруктоза, вода, желатин пищевой говяжий, патока крахмальная, концентрированный сок малины, лимонная кислота (регулятор кислотности), экстракт плодов шиповника, натуральный ароматизатор «Малина», глазирователь Эмульсифайн 1000 (шеллак, растительное масло), глазирователь Capol® (воск карнаубский, растительное масло), бензойная и сорбиновая кислоты (консерванты), антоциан (натуральный краситель).'
  }, {
    name: 'Мармелад Yoo Go',
    picture: jelly_cinnamon_default.a,
    taste: 'кальций',
    composition: 'Фруктоза, вода, желатин пищевой говяжий, концентрированный яблочный сок, патока крахмальная, трикальция фосфат, лимонная кислота (регулятор кислотности), экстракт ванили, глазирователь Эмульсифайн 1000 (шеллак, растительное масло), глазирователь Capol® (воск карнаубский, растительное масло), бензойная и сорбиновая кислоты (консерванты), витамин D3.'
  }, {
    name: 'Мармелад Yoo Go',
    picture: jelly_blueberries_default.a,
    taste: 'черника',
    composition: 'Фруктоза, вода, желатин пищевой говяжий, патока крахмальная, концентрированные соки черники, яблока и вишни, лимонная кислота (регулятор кислотности), натуральный ароматизатор «Черника», экстракт плодов черники, глазирователь Эмульсифайн 1000 (шеллак, растительное масло), глазирователь Capol® (воск карнаубский, растительное масло), бензойная и сорбиновая кислоты (консерванты).'
  }, {
    name: 'Мармелад Yoo Go',
    picture: jelly_cinnamon_default.a,
    taste: 'облепиха-корица',
    composition: 'Фруктоза, вода, желатин пищевой говяжий, патока крахмальная, концентрированный сок облепихи, гидролизованный коллаген Peptan®, лимонная кислота (регулятор кислотности), молотая корица, бета-каротин (натуральный краситель), глазирователь Эмульсифайн 1000 (шеллак, растительное масло), глазирователь Capol® (воск карнаубский, растительное масло), бензойная и сорбиновая кислоты (консерванты).'
  }]
}, {
  name: 'Укрепляющий комплекс',
  tagline: 'Прокачай свои абилки!',
  oldPrice: 2400,
  price: '1600',
  details: [{
    description: 'для профессиональных игроков и стримеров'
  }, {
    description: 'обеспечивает максимально полную комплексную поддержку организма'
  }, {
    description: ' повышение тонуса организма'
  }, {
    description: '100% натуральные (природные) витамины'
  }, {
    description: 'максимальная усвояемость компонентов'
  }, {
    description: '1 пакетик в день во время еды'
  }],
  items: [{
    name: 'Natural Vitamins',
    picture: fortifying_complex_default.a,
    composition: [{
      title: 'Комплекс № 1 (бежевая капсула)',
      description: 'экстракт фукуса Finzelberg™ (стандартизированный по содержанию органического йода), дрожжевой автолизат Lallemand™ с комплексом витаминов группы В (ниацин, пантотеновая кислота, витамины В6, В2, В1, фолиевая кислота, биотин), экстракт бамбука Naturex™ (стандартизированный по содержанию органического кремния), дрожжевой автолизат Lalmin Se 2000™ (стандартизированный по содержанию органического селена).',
      details: '30 вегетарианских капсул Vcaps® по 400 мг'
    }, {
      title: 'Комплекс № 2 (зеленая капсула)',
      description: 'экстракт ацеролы Naturex™ (стандартизированный по содержанию натурального витамина С), дрожжевой автолизат Lalmin® Vita D (стандартизированный по содержанию натурального витамина D), экстракт сибирской лиственницы (стандартизированный по содержанию дигидрокверцетина), экстракт оливы elaVida™ (стандартизированный по содержанию гидрокситирозола), натуральные витамины B2 и В12.',
      details: ' 30 вегетарианских капсул Vcaps® по 425 мг'
    }, {
      title: 'Комплекс № 3  (красная капсула)',
      description: 'ультраконцентрат омега-3 полиненасыщенных жирных кислот глубоководных морских рыб PronovaPure™, натуральный витамин Е (смесь α-, β-, γ- и δ-токоферолов), натуральный бета-каротин CaroCare®.',
      details: '30 капсул по 610 мг'
    }, {
      title: 'Комплекс № 4 (желтая капсула),',
      description: 'ультраконцентрат омега-3 полиненасыщенных жирных кислот глубоководных морских рыб PronovaPure™, натуральный витамин К2 MenaQ7®',
      details: ' 30 капсул по 600 мг'
    }]
  }]
}, {
  name: 'Тонизирующий комплекс',
  tagline: 'Прокачай свои абилки!',
  oldPrice: 2400,
  price: '1600',
  details: [{
    description: 'для профессиональных игроков и стримеров'
  }, {
    description: 'улучшает мозговую активность и работу нервной системы'
  }, {
    description: 'мощный нейробустинг, повышение скорости реакции'
  }, {
    description: 'ультрачистая ДГК, гинкго билоба, женьшень, лютеин и зеаксантин'
  }, {
    description: 'защита зрения от электронного излучения компьютеров'
  }, {
    description: '1 пакетик в день во время еды'
  }],
  items: [{
    name: 'Neurovision',
    picture: tonic_complex_default.a,
    composition: [{
      title: 'Комплекс № 1  (оранжевая капсула)',
      description: 'концентрат докозагексаеновой кислоты из жира глубоководных рыб Incromega™, натуральный лютеин FloraGLO®, натуральный бета-каротин CaroCare®, натуральный зеаксантин OptiSharp®.',
      details: '40 капсул по 610 мг'
    }, {
      title: 'Комплекс № 2 (темная капсула)',
      description: 'экстракт плодов черники (стандартизированный по содержанию антоцианов), экстракт гинкго билоба Finzelberg™ (стандартизированный по содержанию флавонолгликозидов), лецитин Memree PS™ 70P (натуральный фосфатидилсерин), экстракт женьшеня Finzelberg™ (стандартизированный по содержанию гинзенозидов), экстракт шалфея.',
      details: '20 вегетарианских капсул Vcaps® по 440 мг'
    }]
  }]
}, {
  name: 'Защита нервной системы',
  tagline: 'Прокачай свои абилки!',
  oldPrice: 2400,
  price: '1600',
  details: [{
    description: 'для профессиональных игроков и стримеров'
  }, {
    description: 'укрепляет нервную систему'
  }, {
    description: 'снижает нервное напряжение, нормализует сон'
  }, {
    description: 'бисглицинат магния, гидролизат лактопротеина, экстракт зеленого чая'
  }, {
    description: 'повышение стрессо- и тильтоустойчивости '
  }, {
    description: '1 пакетик в день во время еды'
  }],
  items: [{
    name: 'Stress Re.Live',
    picture: calming_complex_default.a,
    composition: [{
      title: 'Комплекс № 1 (белая таблетка)',
      description: 'бисглицинат магния GlyciMag™ (источник органического магния и глицина), микрокристаллическая целлюлоза (наполнитель), стеарат кальция (антислеживатель), комплексная пищевая добавка Nutraficient (глазирователь).',
      details: '40 таблеток по 900 мг'
    }, {
      title: 'Комплекс № 2 (белая капсула)',
      description: 'L-теанин, гидролизат лактопротеина Lactium™.',
      details: '40 вегетарианских капсул Vcaps® по 280 мг'
    }, {
      title: 'Комплекс № 3 (серая капсула)',
      description: 'экстракт валерианы Finzelberg™ (стандартизированный по содержанию сесквитерпеновых кислот), экстракт зверобоя Finzelberg™ (стандартизированный по содержанию гиперицина), экстракт пассифлоры Finzelberg™ (стандартизированный по содержанию флавоноида витексина), экстракт гриффонии (стандартизированный по содержанию гидрокси-L-триптофана).',
      details: '20 вегетарианских капсул Vcaps® по 450 мг'
    }, {
      title: 'Комплекс № 1',
      description: '',
      details: ''
    }]
  }]
}];
// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/contexts/index.js + 1 modules
var contexts = __webpack_require__(9);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/MainProducts/MainProductsSection.js








var MainProductsSection_Container = external_styled_components_default.a.div.withConfig({
  displayName: "MainProductsSection__Container",
  componentId: "x7iwcr-0"
})(["position:relative;width:100%;height:auto;min-height:750px;background-color:white;transform:skewY(-1.5deg);margin-top:-30px;display:flex;justify-content:center;z-index:2;align-items:flex-start;"]);

var Content = external_styled_components_default.a.div.withConfig({
  displayName: "MainProductsSection__Content",
  componentId: "x7iwcr-1"
})(["max-width:100%;transform:skewY(1.5deg);display:flex;width:auto;justify-content:space-around;padding-bottom:50px;@media (", "){min-width:auto;flex-direction:column;align-items:center;}"], isMobileQuery);

var MainProductsSection_TitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "MainProductsSection__TitleWrapper",
  componentId: "x7iwcr-2"
})(["display:none;@media (", "){display:flex;flex-direction:column;padding:30px 0;}"], isMobileQuery);

var MainProductsSection_Title = external_styled_components_default.a.div.withConfig({
  displayName: "MainProductsSection__Title",
  componentId: "x7iwcr-3"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:60px;line-height:102%;text-transform:uppercase;color:#e30b17;@media (", "){font-size:36px;}"], isTabletQuery);

var MainProductsSection_TitleBlack = external_styled_components_default()(MainProductsSection_Title).withConfig({
  displayName: "MainProductsSection__TitleBlack",
  componentId: "x7iwcr-4"
})(["color:black;@media (", "){font-size:16px;}"], isTabletQuery);

var MainProductsSection_MainProductsSection = function MainProductsSection() {
  var _useContext = Object(external_react_["useContext"])(contexts["a" /* DataContext */]),
      mainProduct = _useContext.mainProduct;

  var product = mainProductData[mainProduct];
  var currentProductTaste = mainProductData[mainProduct].items[0];
  return /*#__PURE__*/external_react_default.a.createElement(MainProductsSection_Container, {
    id: "products"
  }, /*#__PURE__*/external_react_default.a.createElement(Content, null, /*#__PURE__*/external_react_default.a.createElement(MainProductsSection_TitleWrapper, null, /*#__PURE__*/external_react_default.a.createElement(MainProductsSection_Title, null, currentProductTaste.name), /*#__PURE__*/external_react_default.a.createElement(MainProductsSection_TitleBlack, null, product.tagline)), /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    product: product
  }), /*#__PURE__*/external_react_default.a.createElement(ProductDescription_ProductDescription, {
    product: product
  })));
};
// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/app.css
var app = __webpack_require__(84);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__(21);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(54);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/header_shadow.svg
var header_shadow = __webpack_require__(55);
var header_shadow_default = /*#__PURE__*/__webpack_require__.n(header_shadow);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/lines.svg
var lines = __webpack_require__(56);
var lines_default = /*#__PURE__*/__webpack_require__.n(lines);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/linesMobile.svg
var linesMobile = __webpack_require__(57);
var linesMobile_default = /*#__PURE__*/__webpack_require__.n(linesMobile);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery/useMediaQuery"
var useMediaQuery_useMediaQuery_ = __webpack_require__(22);
var useMediaQuery_useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__(58);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// EXTERNAL MODULE: external "lodash.sumby"
var external_lodash_sumby_ = __webpack_require__(23);
var external_lodash_sumby_default = /*#__PURE__*/__webpack_require__.n(external_lodash_sumby_);

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(10);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/Logo.svg
var Logo = __webpack_require__(59);
var Logo_default = /*#__PURE__*/__webpack_require__.n(Logo);

// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/basket.svg
var basket = __webpack_require__(60);
var basket_default = /*#__PURE__*/__webpack_require__.n(basket);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/Navigation.js











var Navigation_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Navigation__Container",
  componentId: "sc-1feqko6-0"
})(["width:100%;display:flex;align-items:center;align-content:center;justify-content:space-around;padding:20px;background-color:transparent;z-index:100;@media (", "){padding:10px;}"], isMobileQuery);

var Wrapper = external_styled_components_default()(Navigation_Container).withConfig({
  displayName: "Navigation__Wrapper",
  componentId: "sc-1feqko6-1"
})(["width:60%;@media (", "){width:70%;}@media (", "){width:80%;}"], isTabletQuery, isMobileQuery);

var WrapperSecond = external_styled_components_default()(Navigation_Container).withConfig({
  displayName: "Navigation__WrapperSecond",
  componentId: "sc-1feqko6-2"
})(["align-content:end;justify-content:space-around;width:30%;@media (", "){width:20%;}"], isMobileQuery);

var MenuItem = external_styled_components_default.a.div.withConfig({
  displayName: "Navigation__MenuItem",
  componentId: "sc-1feqko6-3"
})(["font-family:Cervo;font-style:normal;font-weight:500;font-size:32px;text-transform:uppercase;color:#ffffff;@media (", "){font-size:24px;}@media (", "){font-size:16px;}"], isTabletQuery, isMobileQuery);

var BasketWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Navigation__BasketWrapper",
  componentId: "sc-1feqko6-4"
})(["width:110px;display:flex;align-items:center;color:white;justify-content:space-between;font-family:sans-serif;font-size:20px;text-align:right;letter-spacing:-0.3px;font-weight:500;cursor:pointer;"]);

var CityWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Navigation__CityWrapper",
  componentId: "sc-1feqko6-5"
})(["width:120px;display:flex;align-items:baseline;color:white;justify-content:space-between;font-family:sans-serif;font-style:normal;font-weight:300;font-size:16px;line-height:22px;letter-spacing:-0.5px;cursor:pointer;"]);

var Navigation_Navigation = function Navigation(_ref) {
  var setIsCartOpen = _ref.setIsCartOpen;

  var _useContext = Object(external_react_["useContext"])(CartContext["a" /* CartContext */]),
      cartItems = _useContext.cartItems;

  var isDesktop = useMediaQuery_useMediaQuery_default()("(".concat(isDesktopQuery, ")"));
  var isMobile = useMediaQuery_useMediaQuery_default()("(".concat(isMobileQuery, ")"));
  var amountAllItems = external_lodash_sumby_default()(cartItems, 'amount');
  var fullPrice = external_lodash_sumby_default()(cartItems, function (item) {
    return item.amount * item.product.price;
  });
  return /*#__PURE__*/external_react_default.a.createElement(Navigation_Container, null, /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, !isMobile && /*#__PURE__*/external_react_default.a.createElement("img", {
    src: Logo_default.a,
    alt: "logo",
    width: !isDesktop ? 99 : 'auto'
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#products"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuItem, null, "\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u042B")), /*#__PURE__*/external_react_default.a.createElement(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#aboutUs"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuItem, null, "\u041E \u041D\u0410\u0421")), /*#__PURE__*/external_react_default.a.createElement(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#reviews"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuItem, null, "\u041E\u0422\u0417\u042B\u0412\u042B")), /*#__PURE__*/external_react_default.a.createElement(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#questions"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuItem, null, "FAQ")), /*#__PURE__*/external_react_default.a.createElement(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#contactForm"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuItem, null, "\u0421\u0412\u042F\u0417\u042C"))), /*#__PURE__*/external_react_default.a.createElement(WrapperSecond, null, isDesktop && /*#__PURE__*/external_react_default.a.createElement(CityWrapper, {
    onClick: function onClick() {
      return setIsCartOpen(true);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, "\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A")), /*#__PURE__*/external_react_default.a.createElement(BasketWrapper, {
    onClick: function onClick() {
      return setIsCartOpen(true);
    }
  }, !isMobile && /*#__PURE__*/external_react_default.a.createElement("div", null, fullPrice, " \u20BD"), /*#__PURE__*/external_react_default.a.createElement(Badge_default.a, {
    badgeContent: amountAllItems,
    color: "error"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: basket_default.a,
    alt: "cart"
  })))));
};
// EXTERNAL MODULE: /Users/evisom/Desktop/my-static-site/src/images/youtube.svg
var youtube = __webpack_require__(61);
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(7);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/ProductsChoose.js


function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  font-style: italic;\n  font-weight: 500;\n  font-size: 52px;\n  line-height: 102%;\n  font-family: Cervo;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n  font-style: italic;\n  margin-top: -30px;\n  @media (max-width: 900px) {\n    font-size: 40px;\n    margin-top: -20px;\n  }\n  @media (max-width: 600px) {\n    font-size: 26px;\n    margin-top: -10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  &.active {\n    width: 0;\n    height: 0;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-top: 20px solid #f00;\n    margin-top: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: auto;\n  height: 31px;\n  background: #e30b17;\n  padding: 0 25px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n  &.active {\n    background: transparent;\n  }\n  @media (max-width: 600px) {\n    height: 25px;\n    padding: 0 13px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  height: 70%;\n  width: 70%;\n  display: flex;\n  align-items: flex-end;\n  align-content: center;\n  justify-content: space-around;\n  @media (max-width: 900px) {\n    width: 90%;\n  }\n  @media (max-width: 600px) {\n    height: 80%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var productList = ['Батончик', 'Мармелад', 'Напиток'];
var ProductsChoose_Container = external_styled_components_default.a.div(_templateObject());
var Item = external_styled_components_default.a.div(_templateObject2());
var Triangle = external_styled_components_default.a.div(_templateObject3());
var TextItem = external_styled_components_default.a.div(_templateObject4());
var ProductsChoose_ProductsChoose = function ProductsChoose() {
  var _useContext = Object(external_react_["useContext"])(contexts["a" /* DataContext */]),
      mainProduct = _useContext.mainProduct,
      setMainProduct = _useContext.setMainProduct;

  return /*#__PURE__*/external_react_default.a.createElement(ProductsChoose_Container, null, productList.map(function (item, index) {
    return /*#__PURE__*/external_react_default.a.createElement(Item, {
      className: mainProduct === index && 'active',
      onClick: function onClick() {
        return setMainProduct(index);
      },
      key: item
    }, /*#__PURE__*/external_react_default.a.createElement(TextItem, null, item), /*#__PURE__*/external_react_default.a.createElement(Triangle, {
      className: mainProduct === index && 'active'
    }));
  }));
};
// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/Container.js


var Container_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-19e1769-0"
})(["height:auto;min-height:800px;width:100%;background-color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){min-height:auto;}"], function (p) {
  return p.color;
}, isTabletQuery);
// EXTERNAL MODULE: external "react-modal-video/css/modal-video.min.css"
var modal_video_min_css_ = __webpack_require__(85);

// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/components/Header.js















var Header_Content = external_styled_components_default.a.div.withConfig({
  displayName: "Header__Content",
  componentId: "zk4l1p-0"
})(["position:relative;height:900px;width:100%;max-width:1500px;background:url(\"", "\") center 0 no-repeat;background-size:cover;overflow:hidden;z-index:0;font-family:Gerbera;font-size:20px;font-weight:500;line-height:28px;color:white;display:flex;flex-direction:column;align-items:center;padding-bottom:40px;@media (", "){height:650px;font-size:16px;line-height:24px;padding-bottom:60px;}"], header_shadow_default.a, isTabletQuery);

var Lines = external_styled_components_default.a.div.withConfig({
  displayName: "Header__Lines",
  componentId: "zk4l1p-1"
})(["position:absolute;height:100%;width:100%;background:url(\"", "\") center 0 no-repeat;background-size:cover;pointer-events:none;"], function (p) {
  return p.src;
});

var TextFirst = external_styled_components_default.a.div.withConfig({
  displayName: "Header__TextFirst",
  componentId: "zk4l1p-2"
})(["width:272px;margin-bottom:15px;@media (", "){margin-bottom:10px;}"], isTabletQuery);

var TextSecond = external_styled_components_default()(TextFirst).withConfig({
  displayName: "Header__TextSecond",
  componentId: "zk4l1p-3"
})(["width:396px;margin-bottom:0;@media (", "){width:272px;margin-bottom:10px;}"], isTabletQuery);

var TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Header__TextWrapper",
  componentId: "zk4l1p-4"
})(["position:absolute;top:450px;right:420px;@media (", "){top:275px;right:200px;}@media (", "){top:275px;right:20%;font-size:16px;}"], isTabletQuery, isMobileQuery);

var PictureWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Header__PictureWrapper",
  componentId: "zk4l1p-5"
})(["position:absolute;top:450px;right:220px;display:flex;flex-direction:column;align-items:center;cursor:pointer;@media (", "){top:275px;right:90px;}@media (", "){top:275px;right:40px;}"], isTabletQuery, isMobileQuery);

var Header_Header = function Header(_ref) {
  var setIsCartOpen = _ref.setIsCartOpen;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isVideoOpen = _useState2[0],
      setIsVideoOpen = _useState2[1];

  var isDesktop = useMediaQuery_default()("(".concat(isDesktopQuery, ")"));
  var isMobile = useMediaQuery_default()("(".concat(isMobileQuery, ")"));
  return /*#__PURE__*/external_react_default.a.createElement(Container_Container, {
    color: "black"
  }, /*#__PURE__*/external_react_default.a.createElement(Header_Content, null, /*#__PURE__*/external_react_default.a.createElement(Lines, {
    src: isMobile ? linesMobile_default.a : lines_default.a
  }), /*#__PURE__*/external_react_default.a.createElement(Navigation_Navigation, {
    setIsCartOpen: setIsCartOpen
  }), /*#__PURE__*/external_react_default.a.createElement(TextWrapper, null, /*#__PURE__*/external_react_default.a.createElement(TextFirst, null, "\u0414\u043B\u044F \u0433\u0435\u0439\u043C\u0435\u0440\u043E\u0432, \u0441\u0442\u0440\u0438\u043C\u0435\u0440\u043E\u0432 \u0438 \u043A\u0438\u0431\u0435\u0440\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u043E\u0432"), /*#__PURE__*/external_react_default.a.createElement(TextSecond, null, "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u043F\u043E\u0431\u0435\u0434\u0430 \u043D\u0430\u0434 \u0443\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C, \u0433\u043E\u043B\u043E\u0434\u043E\u043C \u0438 \u043F\u043B\u043E\u0445\u043E\u0439 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0435\u0439")), /*#__PURE__*/external_react_default.a.createElement(PictureWrapper, {
    onClick: function onClick() {
      return setIsVideoOpen(true);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: youtube_default.a,
    alt: "youtube",
    width: !isDesktop ? 60 : 'auto'
  }), isDesktop && /*#__PURE__*/external_react_default.a.createElement("div", null, "\u0421\u043C\u043E\u0442\u0440\u0438 \u0432\u0438\u0434\u0435\u043E")), /*#__PURE__*/external_react_default.a.createElement(external_react_modal_video_default.a, {
    channel: "youtube",
    isOpen: isVideoOpen,
    videoId: "QqCklnW_5r4",
    onClose: function onClose() {
      return setIsVideoOpen(false);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(ProductsChoose_ProductsChoose, null)));
};
// CONCATENATED MODULE: /Users/evisom/Desktop/my-static-site/src/App.js











Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

var App_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "App__Wrapper",
  componentId: "sc-16gzbxt-0"
})(["display:flex;flex-direction:column;align-items:center;"]);

var StyledDrawer = external_styled_components_default()(Drawer_default.a).withConfig({
  displayName: "App__StyledDrawer",
  componentId: "sc-16gzbxt-1"
})([".MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorBottom{height:80%;@media (", "){height:100%;}}"], isMobileQuery);

function App() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isCartOpen = _useState2[0],
      setIsCartOpen = _useState2[1];

  return /*#__PURE__*/external_react_default.a.createElement(App_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(StyledDrawer, {
    anchor: "bottom",
    open: isCartOpen,
    onClose: function onClose() {
      setIsCartOpen(false);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(Header_Header, {
    setIsCartOpen: setIsCartOpen
  }), /*#__PURE__*/external_react_default.a.createElement(MainProductsSection_MainProductsSection, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chocobar_halva.b198360d.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chocobar_mango.2f1ead02.png";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(11);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_cinnamon.71146723.png";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery/useMediaQuery");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash.sumby");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("/Users/evisom/Desktop/my-static-site/node_modules/react-static/lib/browser");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);

 //


function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      to: "/blog/post/".concat(post.id, "/")
    }, post.title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);

 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/blog/"
  }, '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(6);

var _router = __webpack_require__(14);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAABUCAYAAABz09mAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2BSURBVHgB7V2LkuMoDGyc+f8vvjFX2TrvMRo9Mbaxo65KBSQhMEhtILO1BYknoWA8KhIJgiMCLXEM7rpWSTwPRBLHvPjEtUmSuQmSOOZBrsUYJPmcgAzW65FrcC6SWAYgg/Y65NzfD0k6/yGD9xrkvD8HH0kmGcDXIOf9M/BYUskAPh8555+NR5BJBvH5yDlPtLglkWQQn4+c84SGWxBJBvG5uHq+r+w/f5GIY9o5S+I4F2fM9xPWNEnmJ6abjySO87F3znPN4ngiEV36TBmE56N3znOtxuPuhHLZ+DMYz0fPnOc6nYu7Ecrp482APB/ROc81mgczE8qpY8ugPB/eOT9rbfKXlv2Y6TlOGUsSx/koO/VH9Dkz7kouV4778L6TOM7BUWSR63cfYrlinIf1mYE3FiOOIUevieX/ST9d5p3EQf3clTjuNu4SkH8CmV+d0DMSypFjGu77zufpGRIsMgYPSRxJJKOD5+2voN/vqPHcKuE6MHIMw3zN9FeMI3zN8DyRY0i0vgc9QRNpE/Xvtd8b7Eck/53vK4b4OftvCo6+BDzzeXouPL1EccZuqu7Uj/AxkjyOJsYzfR3dz24foy/pogleSb1nPK0P6pdr25PwPXYacWgEUgzbXtSAbq9tdbbdZEXwW5i2nrEVQc61L4qOG4dk58URR8Yz2/3BiDP1nkSMXBpq8tH9RHVt4FtzWhTZG4th24vRZFAD7TXbiEyT97bx2hx1bLvyCNLdt7V19rbz6qNEtefycI/t3jqVeY4krYzKNV9e9O4U6o6ypOsloRlJZwQp9dqOaN/VX09ARkmjN1mprCeZa7CdVxexa8fgJQzrezQq9ASsRptqtOslH8uvVrZkxWl/FKGMJpw9bcP9RALyiJ1BDzF4krnHlpajdt4dBrebqE25KG1GEkhP8mnJTXWVKWt2lt9ekonorHnw2PTsakbp99iHfHsCccSOoYcUaN2y0Ww9pCKRQRX0i7N9W4fSr0QUEtnsJY+e5OGSmbOh8tXpw/Kvyct//RShP9q+wE+EMPxBkXnJpZc0vAk/dIdjBaBHV4x2vWWv3qOzbLiy1s4iimLIPP1y/SyCzwp+HXqCbVXsuN0CZ7MKPqsikwikl1g8ehi+wdhpZa7usRlBLqOIwUUevcThJQ2uj2L46iGEyNvcq5N8vbFATnSujfRLSYFNJFt5EXRgfFPsCcIa/KbEQxOflj32EhFYbSUbAK5n8RANLUfrHhLZY9djY/r4wliUQN2b5K3eQxwWEfTIrX44IgGRS/5bUlkU/9qYaZsWe9+IVdBz236LJDSZZQPF7o1VaQPH2GDYc88KxQZMmx5s7aiPwthwdj0wfUjB1uo1mbfM6azgjxAFV/cQxBLwp/mXEr4IbTSCKA5f3LijsAjESiYqb/VWYrafFX6CWBEnmrZda1OIP8AmBMA/F9x4NLtIGYrcqlvtXe1GEUcRbLwk0da9xCElYQ8xcD5oHxYhSP0tytjoc72McUmE0e5aeiAFN1f3JJpFApZuIxQ05cqUATv5NRKCoINiy/UhfUu6Vl8EWxhtsaMOp15sN+qosk0AYJPIVi4dZYlAiiHjEp8eETTy4PxQQuAuLhf4iWYRfHGE4bkzicDzVpTs2rp2XPCQRPtN9e03Z1OZ/ulOo22zCOMD468YdkCMOGrjl+aORBTtGBbSR2TNOTIoQfkf4tA6jgxKsm1ZtQj20sRo4JJES1LATmQtqdtyK1sMH7SukcILPsKhZEHLwP5g8pCJRg4QdFoytzYSeVA98JtYPASlEYXUHuCPPZEylQH83LaQ8qQwPqj9VufKHrD2nh2HNEA6mFZndmz01TK9RCgV8huW65PKODKj/dC+uWMHyFgpuXCkIe0uFsGOIy7APooBMQJB87ycjAt4iyjaOnefISV9K9/i4RsykWg+JL8wbMHIF+HZNBk3P9x8vdHGJSUKD7gY18qtLeDM4S9iXJTBFEXGPXQrb3UecMy6EUoxxlNIWfq0PqjuHaD06NGS2dKMpe2/DSwrYQvpn5LGC78JpbUF9LsXQCYQjVhoUHO6tiz9cZeUgG1ZS/J3nRIFJYgVv3cnK2ziaMlos1nAJ/wC+QhFSYGSkSSn5ICmLM27lNhcPvSSh4Yf9l/KAMHoAH6ANMkjg+Meuhg6jhxAyi/837d2/1DBJ2Mldq1sxe+dgvRsXPtKxqZBIgT6WSDPRVumfRahT/ocUlmqS8nFfbgdwzd+Jvg/kEmEIxKNQCw9HVP7omj19JkKeMJo71M00uBAiYbquPZa3cpJTf9X9yUMdDOCUx+ZAFqW/NIJo8kHQN1FQChzxLM4+iuKnHum2vill1ktSa1kbBU8yVjr0kK66AV0QpFk29glrIotRyDfRCftJjYCeX9/EZlGHm07baeiEdf2gqBrs+LnWn/j9zq1L4UV/Dpy8aLlHJdbEULg0NPmb8ORtsXRphj2NLCpDuCJg9p4kqclDk5vXYBK9xGS7EXqX8Ruq9NL0hfjG/h5nCmCTeSiFfi9A/L+1FuZb65MjyytbBU+m44jg2+mbVXK0vGHksi3ILd2Kpqc7kbo/HjmDuDnmtqiowyH/I/uhRh6yEOSS3VpUrayNQFcO9q2Kp/VYaMFCNceSt9af/Qizzpja2WtHUUrs8h/extS0q3giV7zC/C7LkkHxl81/IPYSXVOrtkUxcYrs2C16d5BRBH9Ow7PokhBR+VSvS1zAWQFpbSzkOpU3m5RvR/6i8tK5NtlqySn39suw/pVZlHGUBiboug3LMYcgcg1aGS2MvWV0W9y6RcValthk6U0Rm5s2rN5ZE9E6f0DMOuNRO2K0V6acI1E6JvHQyBcuZVxxLIoNlKCUoLYyt9ETvXbDvCF30TAEQdHXnS8i/A89DgDYQ7oT75amYImJLcL2ur0CMAdXzx66T5Dai+1eWO7i9GOJ9zxQSMricBG4DTiGvGXox4S0Ww8Ow/OX0seVLa15wiCfnPkAYecJq9GEFr5JfhYBLlGHLQO8OQhfaDUaRnQSUOCRCD0yCbdVWx67g5CIgSOLCpk4qjQiaJ2fug8QJFzOjh1h2P0v46Nkgi1o5NGg7Qq/jjSockulS3SAHRC0UgE0Amkbcf95SjdIbQ+oIyBI5b2ubWdFJzfdI09REJJoy17klYjBm+ie8mghyQA3z0ZNxdaHUyZq1vyIeh5YxzZRwnoimHjJY2t3JMwBXay0mSX6pKMIxCAJyhtbABPNtqzad9cObLWWvK0SQvIJMG1AX4eNaphqyX2t2IDZowREgFsEoXDFoodmLKlk2Q/9GcQB8UIIrFIg9aLw05LkK3OJQqXoFLCS4SytXvBJiPOB5Sx0GMKhPECNnFY5MHVLUhJwiWc9/Jzs5V+4VqNdnDYVWW8gE0egEwKmp76BlP2EoVEEFMSh4QRhMLp95BMWy+CzEpcK+m5Opf8UGy5MdGjCecLjLyVATKRwFn3wEqgTcbdgwByUks2nt2GlMQrYokvJTlHAt5vr04rc3VJ9ks3E3G0iI6rBHUlaGOVNZKQdiGSHLDJQyMO7dgC6ITDPZf32SHYWZCSwfvmlpLTSwaSf24cmg8oYwDjA9BJBPCTgocc9pLGD/2sxEExkkg4femwK45vjTw0HVe37jFg9Nvqpd0Fp4fgQ0JBfL1WRkaT6JvoqI1FOtTfyvRl+dJkEGQ95IGOskUMGrlIMtHmLsShoecZosRRGTvpbaztANp2WtJbdgj6gFLXvrWyJtPkLawA9ryZubc8LVt1jz9rPHCMx5JbviJlT92SizZPIA4OI8jEY+NJSulOoSg+PDLrW/Mv+bH8cxhJHBKRRBLWk+hc2bLx+vH27SUMS2fZS208OtHmqcQh4QhC0d7O2hvck9iSn95dg3ccUOxh2HnsPcFPZV6SuLLM6d6fEmwDRa/JPL48Pkz9pxEHxZ7n9yaatUvR7PeSQSuPjgOGzNJJ8sjbb+/bda+u5xgBZx8Rm0h7SRbRmzafThwSovMSfVv3JLFFBh6fPbuKyI6rFz2B3vvGHUEsmmyE7RFtvHqXXRJHH6LJZNV72ngTPrIj8Iwzoo9g71tw5FtfkvW2OerZLF2Pncs2iWMcRiSZN3EjO4NRR4+ozQhEgt1jf7X+DNtT+kniOAbeed1r10tWo3cSR8XRdrkY6avC73uk3ah2e9v2+gjZJ3Eci975Pavd3vWfPX5GJOCRPmcaXxLHxBg130eu2x3GuBdHJOyVfe71HW6fxHEtzpr/p/UzO84kptNJ441c6Dlw9jrMsO53iL0rdiYapjkmJXHMgyvWYvb1P2J8s5GBF1PdrUT/e4TEsbgykfMlMh+mJbkMlvkw25pkjByLO92H/EUGxbyYaW0yTsbi9r/qZEDMjU+8g3gKZjpmDB9LLvw9kAQyL2a/bD1kfEkc98Id1+sJMXbHX2IOHXMSxz3xlHW7+jnu+tOshlOeKYnjvsi1S1CcRoQZfM9AruNn4/SdUwbc85Br+hm49JiVQfY5yLW+N6a6j8lg+lzk2t8DU17gZvAkMgbmw/S/9mTQJCgyJs7H7X4WziBJeJBxMgaP+buRDIhELzJ2ZDzxD8t+IBc/MRqfEFOPJwYLSRyJKzBb3H08EUTxL2V4KTz0NIY0AAAAAElFTkSuQmCC"

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chocobar_main.3bf372d6.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_blueberries.dd917a8f.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_raspberry.14f2301b.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_main.a3895f44.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/drink_main.6b33c898.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/energotonic.a694abce.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fortifying_complex.21358c24.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tonic_complex.411d6faf.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/calming_complex.5636a559.png";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header_shadow.827cfd83.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/lines.c26c862d.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/linesMobile.da17f20e.svg";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,IDxzdmcgd2lkdGg9IjE0MyIgaGVpZ2h0PSI4OSIgdmlld0JveD0iMCAwIDE0MyA4OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDEwNCBDb3B5Ij4KPHBhdGggaWQ9IkZpbGwgNjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC45NDk3MSA1MS44ODgxTDEwLjQyNzQgMzUuMTM5TDI3Ljc0MzMgMzIuNzU4MkwyNi4zNjU2IDM2LjkxMThMMTMuMzg2NSAzOC43MzVMMTAuNjMxMiA0Ny4xMDk5TDIzLjYyNjcgNDUuMzE5OEwyMi4yNDkxIDQ5LjUwNzNMNC45NDk3MSA1MS44ODgxWk0yNC4wNjkxIDQ5LjIzNzRMMjUuNDMwMyA0NS4wNDk5TDM4LjQ0MzEgNDMuMjYwNkwzOS4xMjM3IDQxLjE0OTVMMjYuMTI3NCA0Mi45NTYyTDI5LjU0NjggMzIuNTA0OEwzMy45MDE4IDMxLjg4MDNMMzEuODI2MiAzOC4xNzhMNDAuNTAxNCAzNi45NjJMNDIuNTU5NyAzMC42OTgxTDQ2Ljg4MDggMzAuMDkwOUw0MS40MDMxIDQ2LjgyMjdMMjQuMDY5MSA0OS4yMzc0Wk01Ni43MTI2IDQwLjcxMDdMNTAuOTggMzUuNTI3NUw1OS42Mzc5IDM0LjMyODhMNjAuMzE4NSAzMi4yMTc3TDUxLjY3NzEgMzMuNDMzN0w0OC45MDQ0IDQxLjc5MTRMNTYuNzEyNiA0MC43MTA3Wk00My4yMDYzIDQ2LjU2OTZMNDguNzAwNSAyOS44Mzc4TDY2LjAzMzcgMjcuNDM5Nkw2Mi41ODA0IDM3LjkyNDlMNTkuOTk1IDM4LjI3OTZMNjEuOTE3MiA0MC4wMDEzTDYwLjUzOTUgNDQuMTg4OEw0My4yMDYzIDQ2LjU2OTZaTTYyLjM1OTQgNDMuOTM1NUw2Ny44MzcxIDI3LjE4NjRMODQuMzcwOSAyNC45NTczTDgyLjk5NDEgMjkuMTExOEw3MC43OTYyIDMwLjc4MzJMNzAuMTE2NSAzMi44NTk2TDgyLjI5NjEgMzEuMjIyMUw4MC45MzUgMzUuNDA4N0w2OC43Mzg4IDM3LjA0NzFMNjguMDQxNyAzOS4xNTczTDgwLjI1NDQgMzcuNDg2TDc4Ljg5NCA0MS42NzM1TDYyLjM1OTQgNDMuOTM1NVpNODAuNjk2NyA0MS40MzY3TDg2LjE3NDQgMjQuNjg3NkwxMDMuNTA4IDIyLjI3MzhMMTAwLjA3MyAzMi43NTgyTDk3LjQ4NjMgMzMuMTEyOUw5OS4zNzQ2IDM0LjgzNTRMOTcuOTk2OSAzOS4wMjIxTDg4LjQ1MzggMzAuMzc3NEw5Ny4xMjkxIDI5LjE2MjJMOTcuNzkyMyAyNy4wODU4TDg5LjEzNDQgMjguMjY3MUw4NS4wMTc5IDQwLjgyODdMODAuNjk2NyA0MS40MzY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggaWQ9IkZpbGwgNjciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTMuMDg2NCA2MC4xODE0TDQ3LjM1MzggNTQuOTk4Mkw1NS45OTUyIDUzLjc5OTZMNTYuNjkzMSA1MS42ODkzTDQ4LjAzNDQgNTIuODg4TDQ1LjI5NTUgNjEuMjYyMUw1My4wODY0IDYwLjE4MTRaTTEwMy4xMzIgNTcuMjYwMUwxMDguNjI2IDQwLjUxMThMMTIxLjE5NiAzOC43NzI4TDEyMy43MTQgNDYuNTA1MkwxMTguNDA3IDU1LjE0OTlMMTAzLjEzMiA1Ny4yNjAxWk0xMTUuODM4IDUxLjU4NzdMMTE4Ljk1IDQ3LjA2MjhMMTE3LjY1OCA0My4yNjM5TDExMS42MDIgNDQuMDkxM0wxMDguODYzIDUyLjQ0ODJMMTE1LjgzOCA1MS41ODc3Wk0zOS41OTc3IDY2LjA0MDFMNDUuMDkxOSA0OS4yOTFMNjIuMzkxMiA0Ni45MTFMNTguOTcyNiA1Ny4zNzg5TDU2LjM2OTkgNTcuNzUwMUw2Mi4xMDI1IDYyLjkzMzNMMzkuNTk3NyA2Ni4wNDAxWk01OC43MTcgNjMuMzg5N0w2NC4yMTEzIDQ2LjY1N0w2OC41NDk3IDQ2LjA2NjRMNjQuNDMyMyA1OC42MTE1TDczLjEwODQgNTcuNDEyOEw3Ny4yMjQxIDQ0Ljg1MTJMODEuNTQ1MyA0NC4yNTk3TDc2LjA1MDIgNjEuMDA4OEw1OC43MTcgNjMuMzg5N1pNNzcuODcxIDYwLjc1NTZMODMuMzQ4NyA0NC4wMDY1TDg3LjY4NjMgNDMuNDE1OEw4Mi4xOTIxIDYwLjE2NDFMNzcuODcxIDYwLjc1NTZaTTg0LjAyOCA1OS45MTE2TDg5LjUwNTcgNDMuMTYyNEw5My44MjYgNDIuNTM3OUw4OS43MDk0IDU1LjA5OTZMMTAyLjcwNiA1My4zMDk0TDEwMS4zMjggNTcuNDk2OUw4NC4wMjggNTkuOTExNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGlkPSJGaWxsIDY5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzNi45MjcgMzEuOTg5NEwxNDEuOTQ2IDM0Ljg3NjhDMTQyLjEzMyAzNC45NDQ0IDE0Mi4yMTggMzUuMDc5NyAxNDIuMTE2IDM1LjMzMjFMMTQwLjc1NSAzOS40MTgxQzE0MC42ODcgMzkuNzA2MSAxNDAuNTMzIDM5Ljc3MjkgMTQwLjI3OCAzOS45MjU1TDEzNS4yNiA0Mi44MTJDMTM1LjAyMiA0Mi45MTM1IDEzNC43MzMgNDIuOTEzNSAxMzQuNTggNDIuNzc4MkwxMjkuNTYxIDM5LjkwODJDMTI5LjM3NSAzOS44MjQgMTI5LjMyNCAzOS43MDYxIDEyOS4zNzUgMzkuNTE5NkwxMzAuNzE5IDM1LjM4MzNDMTMwLjc2OSAzNS4xNDY1IDEzMC45NTcgMzUuMDI4NSAxMzEuMTk1IDM0Ljg5NDFMMTM2LjI2MyAzMS45NzIxQzEzNi41MDIgMzEuODcxNCAxMzYuNzc0IDMxLjg4NzkgMTM2LjkyNyAzMS45ODk0Wk0xMTIuNTY5IDYwLjA4NUwxMTIuMDc2IDYxLjU1MzRDMTExLjYzMyA2Mi45NzE1IDExMC4yMzggNjMuODgzOSAxMDguMzY3IDY0Ljg5NjFMNjcuNTc2NSA4OC4yNjM5QzY1LjgyNDMgODguOTIyMiA2My45MTg2IDg5LjA3NDggNjIuNjc3MSA4OC40NjZMMzIuNjcwOSA3MS4xNjA4TDExMi41NjkgNjAuMDg1Wk0zMC44MzM2IDI4Ljc2NDhMMzEuMzI3IDI3LjI5NjRDMzEuNzY5MSAyNS44Nzc1IDMzLjE2NDIgMjQuOTY1OSAzNS4wMzUyIDIzLjk1MjlMNzUuODI2IDAuNTg1MTEyQzc3LjU5NDcgLTAuMDczMjA0NSA3OS40ODMgLTAuMjI0OTk3IDgwLjcyNDYgMC4zODI5OTdMMTA5Ljk0OSAxNy4yNTAxTDEwOS43NjEgMTcuODI0MkwzMC44MzM2IDI4Ljc2NDhaTTEwOS40NTYgMTYuOTc5NEwxMDkuOTQ5IDE3LjIzMjZMMTEwLjM5MSAxNS44NjU3QzExMC41NDQgMTUuMzA4IDExMC45MzYgMTUuMDA0NCAxMTEuNDggMTQuNjgzNUwxMjMuNjQyIDcuNzI3NDhDMTI0LjE4NyA3LjQ3NDIyIDEyNC44NSA3LjUyNDU0IDEyNS4yMDcgNy43NjEzTDEzNy4yIDE0LjYzMjRDMTM3LjYwOCAxNC44MzUzIDEzNy43OTUgMTUuMTA1OSAxMzcuNjA4IDE1Ljc0NzdMMTM0LjM3NiAyNS41MDYxQzEzNC4xODkgMjYuMTQ4IDEzMy43OTggMjYuMzUwOSAxMzMuMTg1IDI2LjczODZMMTIxLjIxIDMzLjU1OTRDMTIwLjY2NSAzMy44MTI2IDExOS45ODUgMzMuODEyNiAxMTkuNTkzIDMzLjU0MjlMMTA5Ljk0OSAyOC4wMjE0TDEwOS40MzkgMjkuNjI2QzEwOS4yODYgMzAuMDk4NyAxMDkuNDM5IDMwLjM4NTggMTA5Ljg0NyAzMC41ODc5TDExOS4zNzMgMzYuMDU5TDEwMi4zNzkgMzguNDIyNUwxMDkuNDU2IDE2Ljk3OTRaTTMzLjk0NjQgNzEuODY5NUwyNi42NDg5IDY3Ljc2N0wyOC40MDExIDYyLjM4MDhDMjguNTg4MyA2MS44NDA1IDI4LjQzNDkgNjEuNjIxIDI4LjA3NzcgNjEuNDUxOUwyNC45OTg5IDU5LjY5NjRDMjUuMDUwMSA1OS44MzE3IDI1LjA1MDEgNjAuMDE3MyAyNC45NjUxIDYwLjIzNjhMMjIuMzI4NiA2OC4yMjIzQzIyLjE3NTEgNjguNzYzNSAyMS44NjkxIDY4Ljk0ODMgMjEuMzQxOSA2OS4yNTE5TDExLjU0MzkgNzQuODU3NUMxMS4wNjc5IDc1LjA2MDQgMTAuNTU3MiA3NS4wNjA0IDEwLjIxNzQgNzQuODIzN0wwLjM4NDY5MSA2OS4yMDE2QzAuMDQ0ODA4OSA2OS4wMTYgLTAuMDczOTg1IDY4Ljc5NjUgMC4wNDQ4MDg5IDY4LjQwOEwyLjY5ODcgNjAuMzM3NEMyLjgwMDk5IDU5Ljg4MiAzLjEwNzA1IDU5LjYyODggMy41NjU3MyA1OS4zNzU1TDEzLjUzNDUgNTMuNjY4NEMxMy45NzU5IDUzLjQ2NjMgMTQuNTM3NyA1My41MTY3IDE0LjgyNzIgNTMuNzAyM0wyMS4zOTMxIDU3LjQ2NzRMMjIuODM5MiA1Mi45NzYzTDQxLjAyMjkgNTAuNDYxTDMzLjk0NjQgNzEuODY5NVoiIGZpbGw9IiNFMzA2MTMiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAzMSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDMyIj4KPHBhdGggaWQ9IlN0cm9rZSA4NDEyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5IDI3LjA1OTZIMkw1IDEwSDI2TDI5IDI3LjA1OTZaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDg0MTMiIGQ9Ik0xMSA5VjUuMTExMTFMMTUuNSAyTDIwIDUuMTExMTFWOSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5NiA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDEyNDYgQ29weSI+CjxwYXRoIGlkPSJQYXRoIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU2LjgzOTYgNS4yNzUzN0w5NC4wNzUgMjYuNTc1NkM5NS40NjQ1IDI3LjA3NDcgOTYuMDk1IDI4LjA3MjcgOTUuMzM1OSAyOS45MzVMODUuMjQyMSA2MC4wNzc5Qzg0LjczNCA2Mi4yMDE5IDgzLjU5NTUgNjIuNjk0OCA4MS43MDQgNjMuODIwN0w0NC40Njg2IDg1LjExNDlDNDIuNjk5NiA4NS44NjM0IDQwLjU1NzIgODUuODYzNCAzOS40MTg2IDg0Ljg2NTNMMi4xODMyNCA2My42OTI5QzAuNzk5ODQgNjMuMDcyMSAwLjQyMDMyNCA2Mi4yMDE5IDAuNzk5ODQgNjAuODI2NUwxMC43NzEzIDMwLjMxMjNDMTEuMTQ0NyAyOC41NjU3IDEyLjU0MDMgMjcuNjk1NCAxNC4zMDMyIDI2LjcwMzRMNTEuOTEyIDUuMTQ3NTdDNTMuNjgxIDQuNDA1MSA1NS43MDExIDQuNTI2ODIgNTYuODM5NiA1LjI3NTM3WiIgZmlsbD0iI0UzMEIxNyIvPgo8ZyBpZD0iR3JvdXAgMzM2Ij4KPHBhdGggaWQ9IlN0cm9rZSA1OTI4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQxLjY2MDYgNTguOTkwNVYzMi42NDg0TDY0LjUgNDUuNjQ4NEw0MS42NjA2IDU4Ljk5MDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(65);
module.exports = __webpack_require__(73);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(64)["default"];

var _require = __webpack_require__(24),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(24),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(66),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);












Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/blog */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/blog";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/blog.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/index.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/blog.js': t_2,
  '__react_static_root__/src/pages/index.js': t_3,
  '__react_static_root__/src/containers/Post': t_4
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(18);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 11,
	"./": 11,
	"./index": 11,
	"./index.js": 11
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 69;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(74);

var _interopRequireDefault = __webpack_require__(75);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(76));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(77));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(78);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(79)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("/Users/evisom/Desktop/my-static-site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  html, body {\n    margin: 0;\n    padding: 0;\n    max-width: 100vw;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n  *, *::before, *::after {\n    box-sizing: inherit;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  @font-face {\n    font-family: \"Cervo\";\n    src: url(\"fonts/CervoItalic.otf\");\n    font-style: italic;\n  } \n  @font-face {\n    font-family: \"Cervo\";\n    src: url(\"fonts/CervoRegular.otf\");\n    font-style: normal;\n  }  \n  @font-face {\n    font-family: \"Gerbera\";\n    src: url(\"fonts/Gerbera.ttf\");\n    font-style: normal;\n  }  \n  @font-face {\n    font-family: \"Gerbera\";\n    src: url(\"fonts/GerberaMedium.ttf\");\n    font-weight: 500;\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts__WEBPACK_IMPORTED_MODULE_3__[/* DataProvider */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[/* CartProvider */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null))), target);
  };

  render(_App__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(80)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// Module
exports.push([module.i, "body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);



/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-dropdown/style.css");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    -webkit-animation: App-logo-spin infinite 20s linear;\n            animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("react-modal-video/css/modal-video.min.css");

/***/ })
/******/ ]);
});