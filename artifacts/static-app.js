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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabletQuery", function() { return isTabletQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileQuery", function() { return isMobileQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktopQuery", function() { return isDesktopQuery; });
var isTabletQuery = 'max-width: 1024px';
var isMobileQuery = 'max-width: 600px';
var isDesktopQuery = 'min-width: 1025px';

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

var _typeof = __webpack_require__(53);

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

var _requireUniversalModule = __webpack_require__(141);

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

var _reportChunks = __webpack_require__(143);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(64);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(65);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(144);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(54);

var _helpers = __webpack_require__(145);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(140)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Title",
  componentId: "sc-1gul9nr-0"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:52px;line-height:102%;text-align:center;text-transform:uppercase;color:#151524;@media (", "){font-size:40px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["isMobileQuery"]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productCategoryList", function() { return productCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconList", function() { return iconList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamersReviewList", function() { return gamersReviewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewsList", function() { return reviewsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldQualityItems", function() { return worldQualityItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsList", function() { return QuestionsList; });
/* harmony import */ var _images_product1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _images_product1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_product1_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_product2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/* harmony import */ var _images_product2_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_product2_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_product3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var _images_product3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_product3_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_product4_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(100);
/* harmony import */ var _images_product4_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_product4_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_product5_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(101);
/* harmony import */ var _images_product5_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_product5_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_product6_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);
/* harmony import */ var _images_product6_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_product6_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_greyicon1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(103);
/* harmony import */ var _images_greyicon1_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_greyicon1_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_greyicon4_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(104);
/* harmony import */ var _images_greyicon4_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_greyicon4_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_greyicon2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(105);
/* harmony import */ var _images_greyicon2_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_greyicon2_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_greyicon5_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(106);
/* harmony import */ var _images_greyicon5_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_greyicon5_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_greyicon3_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(107);
/* harmony import */ var _images_greyicon3_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_greyicon3_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_greyicon6_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(108);
/* harmony import */ var _images_greyicon6_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_greyicon6_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_gamer1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(109);
/* harmony import */ var _images_gamer1_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_gamer1_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_gamer2_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(110);
/* harmony import */ var _images_gamer2_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_gamer2_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_gamer3_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(111);
/* harmony import */ var _images_gamer3_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_gamer3_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_review1_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(112);
/* harmony import */ var _images_review1_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_review1_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_review2_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(113);
/* harmony import */ var _images_review2_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_review2_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_review3_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(114);
/* harmony import */ var _images_review3_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_review3_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_review4_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(115);
/* harmony import */ var _images_review4_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_review4_svg__WEBPACK_IMPORTED_MODULE_18__);



















var productCategoryList = [{
  image: _images_product1_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: 'Натуральный энергтоник',
  leftOffset: -15,
  topOffset: -40
}, {
  image: _images_product2_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  name: 'Низкоуглеводное питание',
  leftOffset: -15,
  topOffset: -40
}, {
  image: _images_product3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  name: 'Натуральный мармелад',
  leftOffset: -15,
  topOffset: -40
}, {
  image: _images_product4_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  name: 'Укрепляющий комплекс',
  topOffset: -30
}, {
  image: _images_product5_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  name: 'Тонизирующий комплекс',
  topOffset: -30
}, {
  image: _images_product6_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  name: 'Защита нервной системы',
  topOffset: -30
}];
var iconList = [_images_greyicon1_svg__WEBPACK_IMPORTED_MODULE_6___default.a, _images_greyicon4_svg__WEBPACK_IMPORTED_MODULE_7___default.a, _images_greyicon2_svg__WEBPACK_IMPORTED_MODULE_8___default.a, _images_greyicon5_svg__WEBPACK_IMPORTED_MODULE_9___default.a, _images_greyicon3_svg__WEBPACK_IMPORTED_MODULE_10___default.a, _images_greyicon6_svg__WEBPACK_IMPORTED_MODULE_11___default.a];
var gamersReviewList = [{
  name: 'GillzEth',
  games: '(WarCraft III / StarCraft II)',
  reviews: '«Батончики YouGo реально помогли мне на третьем часу боя в чемпионате. Сил прибавилось и мы дожали!»',
  picture: _images_gamer1_png__WEBPACK_IMPORTED_MODULE_12___default.a
}, {
  name: 'LionHW',
  games: '(WarCraft III / StarCraft II)',
  reviews: '«Батончики YouGo реально помогли мне на третьем часу боя в чемпионате. Сил прибавилось и мы дожали!»',
  picture: _images_gamer2_svg__WEBPACK_IMPORTED_MODULE_13___default.a
}, {
  name: 'DjafarDjafarof',
  games: '(WarCraft III / StarCraft II)',
  reviews: '«Батончики YouGo реально помогли мне на третьем часу боя в чемпионате. Сил прибавилось и мы дожали!»',
  picture: _images_gamer3_svg__WEBPACK_IMPORTED_MODULE_14___default.a
}];
var reviewsList = [{
  name: 'Zebra-3000',
  review: 'Здравствуйте! Совсем не давно приобрела витамины красоты «Beauty Box»! Я в восторге от их эффективности! Они поддерживают не только красоту, но и проводят в тонус💪🏽 а кожа сияет 💆🏼✨ обязательно буду всем советовать! Рекомендую👍🏼👍🏼👍🏼👍🏼',
  link: 'vk.com/tonystarfox',
  picture: _images_review1_svg__WEBPACK_IMPORTED_MODULE_15___default.a
}, {
  name: 'Anna&Pavel',
  review: 'Являюсь большим поклонником данной продукции. Очень нравится детская линейка и ЭКО-средства для дома! Также хочется отметить доброжелательную атмосферу в офисе! Менеджеры на ресепшн всегда улыбчивы, всегда информируют о проводимых акциях и скидках, подробно отвечают на вопросы!',
  link: 'vk.com/tonystarfox',
  picture: _images_review2_svg__WEBPACK_IMPORTED_MODULE_16___default.a
}, {
  name: 'Эва',
  review: 'Пользуюсь продукцией Сибирского здоровья не так давно. Приобретаю добавки к спорт питу. Не буду говорить, что масса растет как на дрожжах... но! Сравнивал компоненты с их конкурентами, и остался приятно доволен тем, что за меньшие деньги покупаю комплексы с большим количеством микроэлементов! В общем, я не биолог и не врач, но деньги считать умею....',
  link: 'vk.com/meow.lynx',
  picture: _images_review3_png__WEBPACK_IMPORTED_MODULE_17___default.a
}, {
  name: 'Инна Иваненко',
  review: 'Я вот частенько обращаюсь в Контактную службу по просьбе своего родственника, знаете, звонил не раз уже, очередной раз так же звонил, ответила мне Анастасия. Знаете, почему-то она отличительна. Рекомендую обратить внимание!!!',
  link: 'vk.com/elizaveta.mamochkina',
  picture: _images_review4_svg__WEBPACK_IMPORTED_MODULE_18___default.a
}];
var worldQualityItems = [{
  value: 24,
  unit: 'года',
  description: 'Мы разрабатываем, производим и реализуем продукты для активного образа жизни, спорта и отличного самочувствия. '
}, {
  value: 60,
  unit: 'стран',
  description: 'Наш бизнес развивается на трех континентах: официальные продажи идут в странах Европы, СНГ, Азии и в США'
}, {
  value: 'ААА',
  unit: 'рейтинг',
  description: 'Высший уровень надежности согласно рейтингу лучших предприятий Сибири (Росстат, выборка из 600 000 организаций).'
}];
var QuestionsList = [{
  question: 'Cyber Build действительно эффективен?',
  answer: 'Да, Компания Siberian Wellness создает и выпускает продукты для спорта и активного образа жизни уже более двадцати лет. Благодаря собственному Научно-инновационному центру мы проводим масштабные исследования и эксперименты, создавая максимально эффективные формулы. Подробнее о производстве можно узнать на сайте https://valeolab.com/.'
}, {
  question: 'Почему помимо продуктов Cyber Build я вижу другие серии?',
  answer: 'Линейка Cyber Build была разработана с учетом потребностей геймеров. Ключевым действием этих продуктов является поддержание бодрости, сытости и отличной концентрации. Серии Yoo Go, CoreNRG и Siberian Super Natural Nutrition дополняют действие Cyber Build и обеспечивают высокую работоспособность и стрессоустойчивость на протяжении всего дня. Продукты этих трех серий разрабатывались с учетом всех потребностей современных людей, которым важно оставаться энергичными, активными и задействовать ресурсы своего организма на 100%.'
}, {
  question: 'Что такое CoreNRG?',
  answer: 'CoreNRG – это абсолютно натуральный энерготоник, созданный на основе растительных адаптогенов и природных стимуляторов. Его главное преимущество – накопительный эффект, благодаря чему тонизирующее действие длится намного дольше обычного. CoreNRG не содержит сахара и подсластителей и может использоваться как в чистом виде, так и в составе миксов с различными напитками.'
}, {
  question: 'Что такое Siberian Super Natural Nutrition?',
  answer: 'Это профессиональные nutrition-программы, нацеленные на полную поддержку организма. В комплексах используется лучшее 100% натуральное сырье от проверенных европейских поставщиков (Lonza, DSM Nutritional Products, BASF, Croda, Ingredia). Программы имеют три основных направления: общая поддержка (Natural Vitamins), стимуляция умственной деятельности и защита органов зрения (Neurovision), а также снятие стресса (Stress Re.Live).'
}, {
  question: 'Что такое BCAA?',
  answer: 'BCAA – это три аминокислоты (лейцин, изолейцин и валин) с разветвленными боковыми цепями (англ. branched-chain amino acids). Они являются незаменимыми для человека и должны поступать в организм с пищей. При высоких дозировках BCAA перерабатываются в печени, однако при порционном поступлении идут на поддержку других тканей: скелетных мышц, сердца и нейронов. Кроме того, BCAA могут выступать в качестве источника мгновенной энергетической подпитки и регулировать выработку инсулина.'
}, {
  question: 'Подходят ли протеиновые батончики Cyber Build и Yoo Go спортсменам?',
  answer: 'Да, в наших батончиках используются сывороточный и молочный протеины, которые обеспечивают организм оптимальным количеством белка.'
}, {
  question: 'То есть батончики нужны только тем, кто наращивает мышцы?',
  answer: 'Нет, основной строительный элемент нашего организма – белок – необходим каждому из нас. Его содержание в рационе должно быть больше жиров и углеводов (сочетание БЖУ). Рассчитать необходимое количество белка можно с помощью специального калькулятора онлайн.'
}, {
  question: 'Почему в ваших продуктах есть сахар?',
  answer: 'Мы придерживаемся принципа «все хорошо в меру». Поэтому используем сахар там, где он нужен по технологическому процессу (например, глазури), а также в нормальных количествах, необходимых для поддержки работы центральной нервной системы и мозга. Мы не используем сахар, чтобы сделать вкус сладким. Для этого у нас есть натуральные подсластители: фруктоза, изомальтоолигосахарид, сукралоза и палатиноза. Мы не маскируем наличие сахара использованием мальтодекстрина, также являющегося быстрым углеводом, но технически не относящегося к сахарам.'
}, {
  question: 'В ваших продуктах есть консерванты?',
  answer: 'Да, это обязательное требование пищевой индустрии. Однако мы используем только натуральные консерванты: бензойную и сорбиновую кислоты, являющиеся природными консервантами. В большом количестве они присутствуют в ягодах клюквы и рябины.'
}, {
  question: 'Сколько стоит доставка?',
  answer: 'Мы сотрудничаем с одной из самых популярных курьерских служб страны – DPD, а также Почтой России, чтобы отправлять продукты в самые удаленные уголки России. Порог бесплатной доставки составляет 3000 рублей, но может варьировать в зависимости от пункта назначения.'
}, {
  question: 'Есть ли самовывоз?',
  answer: 'Да, вы можете забрать свой заказ в наших фирменных магазинах или магазинах-партнерах. Узнать наличие и расположение магазинов в вашем городе вы можете на этой странице'
}, {
  question: 'Отправляете в другие страны?',
  answer: 'На данный момент доставка осуществляется только по России, но в ближайшее время мы подключим остальные страны.'
}, {
  question: 'Cyber Build имеет все необходимые регистрации?',
  answer: 'Разумеется. Все наши продукты соответствуют стандартам ISO, HACCP и GMP, а также получают одобрение FDA. Вся наша продукция проходит государственную регистрацию с выдачей свидетельства о государственной регистрации, а также декларирование с выдачей декларации о соответствии Таможенного союза.'
}, {
  question: 'Что делать, если у меня возникли проблемы с заказом?',
  answer: 'По любым вопросам оформления заказов обращайся в наш центр поддержки по почте: eshop@sibvaleo.com. По другим вопросам – по почте call-centre@sibvaleo.com или телефону: 8-800-755-8755 (для России).'
}];

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return _DataContext__WEBPACK_IMPORTED_MODULE_0__["DataContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return _DataContext__WEBPACK_IMPORTED_MODULE_0__["DataProvider"]; });



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContext", function() { return CartContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-19e1769-0"
})(["height:auto;min-height:800px;width:100%;background-color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){min-height:auto;}"], function (p) {
  return p.color;
}, _constants__WEBPACK_IMPORTED_MODULE_1__["isTabletQuery"]);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainProductData", function() { return mainProductData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allProductsData", function() { return allProductsData; });
/* harmony import */ var _images_chocobar_halva_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _images_chocobar_halva_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_chocobar_halva_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_chocobar_mango_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _images_chocobar_mango_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_chocobar_mango_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_chocobar_main_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _images_chocobar_main_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_chocobar_main_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_jelly_blueberries_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _images_jelly_blueberries_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_jelly_blueberries_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_jelly_cinnamon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var _images_jelly_cinnamon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_jelly_cinnamon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_jelly_raspberry_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);
/* harmony import */ var _images_jelly_raspberry_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_jelly_raspberry_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_jelly_main_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82);
/* harmony import */ var _images_jelly_main_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_jelly_main_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_drink_main_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var _images_drink_main_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_drink_main_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_energotonic_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84);
/* harmony import */ var _images_energotonic_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_energotonic_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_fortifying_complex_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85);
/* harmony import */ var _images_fortifying_complex_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_fortifying_complex_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_tonic_complex_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86);
/* harmony import */ var _images_tonic_complex_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_tonic_complex_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_calming_complex_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87);
/* harmony import */ var _images_calming_complex_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_calming_complex_png__WEBPACK_IMPORTED_MODULE_11__);












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
    picture: _images_chocobar_main_png__WEBPACK_IMPORTED_MODULE_2___default.a,
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
    picture: _images_jelly_main_png__WEBPACK_IMPORTED_MODULE_6___default.a,
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
    picture: _images_drink_main_png__WEBPACK_IMPORTED_MODULE_7___default.a,
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
    picture: _images_energotonic_png__WEBPACK_IMPORTED_MODULE_8___default.a,
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
    picture: _images_chocobar_mango_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    taste: 'манго',
    composition: 'Изомальтоолигосахарид (подсластитель), концентрат сывороточных белков 80% SureProtein Essential 392, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, глазурь кондитерская Caribe Fondente Dischi (сахар*, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), масло кокосовое, кусочки сушеного манго, концентрированный яблочный сок, глицерин дистиллированный (агент влагоудерживающий), кислота лимонная (регулятор кислотности), натуральный ароматизатор «Манго», соль поваренная, сорбат калия (консервант), лецитин соевый (эмульгатор), астаксантин.  * В одном батончике – 3 г сахара.'
  }, {
    name: 'Calcium-батончик',
    picture: _images_chocobar_halva_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    taste: 'кокос',
    composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка Fonterra™, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, масло кокосовое, кокосовая стружка, вода, морские минерализованные водоросли Aquamin F (органический кальций), глицерин дистиллированный (агент влагоудерживающий), кислота яблочная (регулятор кислотности), ароматизатор натуральный пищевой «Кокос», соль поваренная, сорбат калия (консервант), соевый лецитин (эмульгатор).  * В одном батончике – 4 г сахара'
  }, {
    name: 'Батончик Banana Mama',
    picture: _images_chocobar_mango_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    taste: 'вишня-банан',
    composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, гидрогенизированные растительные жиры, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка Fonterra™, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, масло кокосовое, вишня сушеная резаная в рисовой обсыпке (вишня сушеная, мука рисовая), продукт экструдированных круп и зернового сырья: ржаной формовой (мука ржаная, сахар*, соль), сок апельсиновый концентрированный, глицерин дистиллированный (агент влагоудерживающий), ароматизатор пищевой натуральный «Банан», соль поваренная, сорбат калия (консервант), лецитин соевый (эмульгатор), дрожжевой автолизат Lalmin® Vita D. * В одном батончике – 4,5 г сахара.'
  }, {
    name: 'Antistress-батончик',
    picture: _images_chocobar_halva_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    taste: 'карамель и фундук',
    composition: 'Изомальтоолигосахарид (подсластитель), глазурь кондитерская (сахар*, какао-порошок, соевый лецитин (эмульгатор), ароматизатор), концентрат сывороточного белка Fonterra™, концентрат молочного белка (казеина) PROMILK KAPPA OPTIMUM, масло кокосовое, кондитерский полуфабрикат «Тоффи паста» (сахар*, сироп из жженого сахара, глюкозный сироп, молоко сухое обезжиренное, гидроксид натрия (регулятор кислотности), ядро фундука, продукт экструдированных круп и зернового сырья: гречневый формовой (крупа гречневая, сахар*, соль), какао-порошок, биглицинат магния GlyciMag™, экстракт сахарного тростника Phytolin™, глицерин дистиллированный (агент влагоудерживающий), лимонная кислота (регулятор кислотности), ароматизатор пищевой натуральный, соль поваренная, сорбат калия (консервант), соевый лецитин (эмульгатор).  * В одном батончике – 3 г сахара.'
  }, {
    name: 'Фитнес-козинак',
    picture: _images_chocobar_mango_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    taste: 'тыква-манго',
    composition: 'Изомальтоолигосахарид (подсластитель), тыква сушеная, морковь сушеная, ядра арахиса, манго сушеное в рисовой обсыпке (манго сушеное, мука рисовая), ядра семян тыквы, патока крахмальная карамельная, ядра орехов фисташки, сорбат калия (консервант)'
  }, {
    name: 'Фитнес-козинак',
    picture: _images_chocobar_halva_png__WEBPACK_IMPORTED_MODULE_0___default.a,
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
    picture: _images_jelly_raspberry_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    taste: 'малина-шиповник',
    composition: ' Фруктоза, вода, желатин пищевой говяжий, патока крахмальная, концентрированный сок малины, лимонная кислота (регулятор кислотности), экстракт плодов шиповника, натуральный ароматизатор «Малина», глазирователь Эмульсифайн 1000 (шеллак, растительное масло), глазирователь Capol® (воск карнаубский, растительное масло), бензойная и сорбиновая кислоты (консерванты), антоциан (натуральный краситель).'
  }, {
    name: 'Мармелад Yoo Go',
    picture: _images_jelly_cinnamon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    taste: 'кальций',
    composition: 'Фруктоза, вода, желатин пищевой говяжий, концентрированный яблочный сок, патока крахмальная, трикальция фосфат, лимонная кислота (регулятор кислотности), экстракт ванили, глазирователь Эмульсифайн 1000 (шеллак, растительное масло), глазирователь Capol® (воск карнаубский, растительное масло), бензойная и сорбиновая кислоты (консерванты), витамин D3.'
  }, {
    name: 'Мармелад Yoo Go',
    picture: _images_jelly_blueberries_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    taste: 'черника',
    composition: 'Фруктоза, вода, желатин пищевой говяжий, патока крахмальная, концентрированные соки черники, яблока и вишни, лимонная кислота (регулятор кислотности), натуральный ароматизатор «Черника», экстракт плодов черники, глазирователь Эмульсифайн 1000 (шеллак, растительное масло), глазирователь Capol® (воск карнаубский, растительное масло), бензойная и сорбиновая кислоты (консерванты).'
  }, {
    name: 'Мармелад Yoo Go',
    picture: _images_jelly_cinnamon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
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
    picture: _images_fortifying_complex_png__WEBPACK_IMPORTED_MODULE_9___default.a,
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
    picture: _images_tonic_complex_png__WEBPACK_IMPORTED_MODULE_10___default.a,
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
    picture: _images_calming_complex_png__WEBPACK_IMPORTED_MODULE_11___default.a,
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

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Composition", function() { return Composition; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);











var CompositionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Composition__CompositionWrapper",
  componentId: "sc-15pujl0-0"
})(["display:flex;width:100%;justify-content:flex-end;align-items:baseline;margin-top:30px;cursor:pointer;@media (", "){justify-content:flex-start;}&:focus{color:darkgray;}&:hover{color:darkslategray;}"], _constants__WEBPACK_IMPORTED_MODULE_9__["isMobileQuery"]);

var Arrow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Composition__Arrow",
  componentId: "sc-15pujl0-1"
})(["border:solid black;border-width:0 1px 1px 0;display:inline-block;padding:4px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);height:1px;margin-bottom:5px;margin-left:10px;margin-right:10px;"]);

var StyledDialogTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "Composition__StyledDialogTitle",
  componentId: "sc-15pujl0-2"
})(["font-family:Gerbera;font-weight:500;font-size:22px;color:#282c34;display:flex;align-items:center;justify-content:space-between;"]);

var DescriptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Composition__DescriptionTitle",
  componentId: "sc-15pujl0-3"
})(["font-family:Gerbera;font-size:16px;font-weight:500;line-height:20px;letter-spacing:-0.3px;color:black;margin-right:5px;"]);

var DescriptionText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(DescriptionTitle).withConfig({
  displayName: "Composition__DescriptionText",
  componentId: "sc-15pujl0-4"
})(["font-weight:300;"]);

var StyledDialog = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Composition__StyledDialog",
  componentId: "sc-15pujl0-5"
})([".MuiDialog-paper{max-width:1000px;padding:30px 50px;}"]);

var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Composition__ItemTitle",
  componentId: "sc-15pujl0-6"
})(["display:flex;margin-bottom:10px;margin-top:30px;font-family:Gerbera;font-weight:300;color:black;"]);

var Composition = function Composition(_ref) {
  var name = _ref.name,
      taste = _ref.taste,
      composition = _ref.composition;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var isCompositionArray = Array.isArray(composition);

  var handleIsOpen = function handleIsOpen() {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompositionWrapper, {
    onClick: function onClick() {
      return handleIsOpen();
    }
  }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Arrow, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledDialog, {
    onClose: handleIsOpen,
    "aria-labelledby": "simple-dialog-title",
    open: isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledDialogTitle, {
    disableTypography: true
  }, name, taste && "(".concat(taste, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    onClick: function onClick() {
      return handleIsOpen();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionTitle, null, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432:"), !isCompositionArray ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionText, null, composition) : composition.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ItemTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionTitle, null, item.title, ", "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, item.details)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionTitle, null, "\u0421\u043E\u0441\u0442\u0430\u0432:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionText, null, item.description));
  })))));
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(154);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_shadow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78);
/* harmony import */ var _images_shadow_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_shadow_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);









var blurAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{opacity:0;transform:translateX(50px);filter:blur(20px);}20%{opacity:.6;transform:translateX(0);filter:blur(20px);}30%{opacity:1;transform:translateX(0);filter:blur(0);}"]);
var selectAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{opacity:0;}60%{opacity:0;}80%{opacity:1;}"]);
var cartAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{opacity:0;}80%{opacity:0;}100%{opacity:1;}"]);
var shadowAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{opacity:0;}20%{opacity:0;}30%{opacity:1;}"]);

var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__ItemWrapper",
  componentId: "sc-1gfikq2-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:", ";font-family:Gerbera;font-weight:500;height:100%;text-transform:uppercase;@media (", "){margin-top:", ";}@media (", "){margin-top:", ";}"], function (p) {
  return p.allProducts ? '-150px' : '-80px';
}, _constants__WEBPACK_IMPORTED_MODULE_4__["isTabletQuery"], function (p) {
  return p.allProducts ? '0' : '-50px';
}, _constants__WEBPACK_IMPORTED_MODULE_4__["isMobileQuery"], function (p) {
  return p.allProducts ? '30px' : '0';
});

var PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__PriceWrapper",
  componentId: "sc-1gfikq2-1"
})(["display:flex;align-items:baseline;margin-top:30px;"]);

var Price = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__Price",
  componentId: "sc-1gfikq2-2"
})(["font-size:44px;line-height:44px;letter-spacing:-1px;color:#1f3554;"]);

var OldPrice = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Price).withConfig({
  displayName: "Product__OldPrice",
  componentId: "sc-1gfikq2-3"
})(["font-size:24px;line-height:28px;text-decoration-line:line-through;mix-blend-mode:normal;opacity:0.6;padding-right:10px;"]);

var AddToCartButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__AddToCartButtons",
  componentId: "sc-1gfikq2-4"
})(["display:flex;margin-top:30px;"]);

var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__Button",
  componentId: "sc-1gfikq2-5"
})(["width:54px;height:54px;display:flex;align-items:center;align-content:center;background-color:#00c0f3;color:white;justify-content:center;border-radius:", ";cursor:pointer;"], function (p) {
  return p.left ? '10px 0 0 10px' : '0 10px 10px 0';
});

var AddToCardButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Button).withConfig({
  displayName: "Product__AddToCardButton",
  componentId: "sc-1gfikq2-6"
})(["width:194px;background:#1f3554;border-radius:0;"]);

var StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__StyledImg",
  componentId: "sc-1gfikq2-7"
})(["width:350px;height:400px;background:url(\"", "\") center center no-repeat;background-size:contain;animation:1.3s ", " linear;@media (", "){height:320px;animation:none;}@media (", "){height:200px;}"], function (p) {
  return p.src;
}, blurAnimation, _constants__WEBPACK_IMPORTED_MODULE_4__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_4__["isMobileQuery"]);

var AnimatedSelect = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__AnimatedSelect",
  componentId: "sc-1gfikq2-8"
})(["animation:1.3s ", " linear;@media (", "){animation:none;}"], selectAnimation, _constants__WEBPACK_IMPORTED_MODULE_4__["isTabletQuery"]);

var AnimatedCart = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__AnimatedCart",
  componentId: "sc-1gfikq2-9"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;animation:1.3s ", " linear;@media (", "){animation:none;}"], cartAnimation, _constants__WEBPACK_IMPORTED_MODULE_4__["isTabletQuery"]);

var StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Product__StyledSelect",
  componentId: "sc-1gfikq2-10"
})(["font-family:Gerbera;font-weight:500;.Dropdown-option.is-selected{background-color:#f2f9fc;color:#e30b17;}.Dropdown-control{border:0;color:#e30b17;}.Dropdown-menu{width:180px;left:-55px;}"]);

var SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__SelectWrapper",
  componentId: "sc-1gfikq2-11"
})(["display:flex;align-items:center;border-bottom:1px solid black;"]);

var Shadow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Product__Shadow",
  componentId: "sc-1gfikq2-12"
})(["width:350px;height:100px;background:url(\"", "\") center center no-repeat;background-size:contain;animation:1.3s ", " linear;@media (", "){animation:none;}"], function (p) {
  return p.src;
}, shadowAnimation, _constants__WEBPACK_IMPORTED_MODULE_4__["isTabletQuery"]);

var Product = function Product(_ref) {
  var product = _ref.product,
      isAllProductsSection = _ref.isAllProductsSection,
      onTasteChange = _ref.onTasteChange,
      tasteIndex = _ref.tasteIndex;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_7__["CartContext"]),
      addItem = _useContext.addItem;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ItemWrapper, {
    allProducts: isAllProductsSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledImg, {
    src: item.picture,
    alt: "chocobar",
    allProducts: isAllProductsSection,
    key: "img".concat(product.name).concat(tasteIndex)
  }), isAllProductsSection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Shadow, {
    src: _images_shadow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    key: "shadow".concat(product.name).concat(tasteIndex)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnimatedSelect, {
    key: "select".concat(product.name).concat(tasteIndex)
  }, (product === null || product === void 0 ? void 0 : product.items.length) > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SelectWrapper, null, "\u0412\u043A\u0443\u0441", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledSelect, {
    options: options,
    onChange: function onChange(option) {
      return onTasteChange(option.value);
    },
    value: options[tasteIndex],
    placeholder: "Select an option"
  })) : Boolean(item.taste) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "\u0412\u041A\u0423\u0421 ", item.taste)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnimatedCart, {
    key: "cart".concat(product.name).concat(tasteIndex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PriceWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OldPrice, null, product.oldPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Price, null, product.price.toLocaleString('ru-RU'), " \u20BD"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AddToCartButtons, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    left: true,
    onClick: function onClick() {
      return decreaseItem();
    }
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AddToCardButton, {
    onClick: function onClick() {
      return addItem(product, item, itemsAmount);
    }
  }, "\u0412 \u041A\u041E\u0420\u0417\u0418\u041D\u0423: ", itemsAmount, " \u0428\u0422."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: function onClick() {
      return setItemsAmount(itemsAmount + 1);
    }
  }, "+"))));
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Content",
  componentId: "hfbw6a-0"
})(["position:relative;max-width:1500px;display:flex;width:100%;justify-content:flex-start;align-items:center;flex-direction:column;height:100%;font-family:Gerbera;font-style:normal;font-size:16px;line-height:28px;text-align:center;letter-spacing:-0.3px;overflow:hidden;color:white;@media (", "){padding:0 20px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["isMobileQuery"]);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var containers_Dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MainProducts_MainProductsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _components_Advantage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var _components_AllProducts_AllProductsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var _components_Reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33);
/* harmony import */ var _components_MediaAboutUs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34);
/* harmony import */ var _components_WorldQuality__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35);
/* harmony import */ var _components_QualitySafety__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36);
/* harmony import */ var _components_Questions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(39);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(41);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(155);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42);





















Object(react_static__WEBPACK_IMPORTED_MODULE_3__["addPrefetchExcludes"])(['dynamic']);

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "App__Wrapper",
  componentId: "sc-16gzbxt-0"
})(["display:flex;flex-direction:column;align-items:center;"]);

var StyledDrawer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default.a).withConfig({
  displayName: "App__StyledDrawer",
  componentId: "sc-16gzbxt-1"
})([".MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorBottom{height:80%;@media (", "){height:100%;}}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isCartOpen = _useState2[0],
      setIsCartOpen = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledDrawer, {
    anchor: "bottom",
    open: isCartOpen,
    onClose: function onClose() {
      setIsCartOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_18__["Cart"], {
    setIsCartOpen: setIsCartOpen
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_20__["Header"], {
    setIsCartOpen: setIsCartOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainProducts_MainProductsSection__WEBPACK_IMPORTED_MODULE_8__["MainProductsSection"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Advantage__WEBPACK_IMPORTED_MODULE_9__["Advantage"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AllProducts_AllProductsSection__WEBPACK_IMPORTED_MODULE_10__["AllProductsSection"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Reviews__WEBPACK_IMPORTED_MODULE_11__["Reviews"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MediaAboutUs__WEBPACK_IMPORTED_MODULE_12__["MediaAboutUs"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_WorldQuality__WEBPACK_IMPORTED_MODULE_13__["WorldQuality"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_QualitySafety__WEBPACK_IMPORTED_MODULE_14__["QualitySafety"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Questions__WEBPACK_IMPORTED_MODULE_15__["Questions"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ContactForm__WEBPACK_IMPORTED_MODULE_16__["ContactForm"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_17__["Footer"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/blackBackground.f4e7f605.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(54);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(142)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash.sumby");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var DataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
var DataProvider = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      mainProduct = _useState2[0],
      setMainProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      allProduct = _useState4[0],
      setAllProduct = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      allProductTaste = _useState6[0],
      setAllProductTaste = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DataContext.Provider, {
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


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);

 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/blog/"
  }, '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProductsSection", function() { return MainProductsSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _data_productsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);








var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MainProductsSection__Container",
  componentId: "x7iwcr-0"
})(["position:relative;width:100%;height:auto;min-height:750px;background-color:white;transform:skewY(-1.5deg);margin-top:-30px;display:flex;justify-content:center;z-index:2;align-items:flex-start;"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MainProductsSection__Content",
  componentId: "x7iwcr-1"
})(["max-width:100%;transform:skewY(1.5deg);display:flex;width:auto;justify-content:space-around;padding-bottom:50px;@media (", "){min-width:auto;flex-direction:column;align-items:center;}"], _constants__WEBPACK_IMPORTED_MODULE_4__["isMobileQuery"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MainProductsSection__TitleWrapper",
  componentId: "x7iwcr-2"
})(["display:none;@media (", "){display:flex;flex-direction:column;padding:30px 0;}"], _constants__WEBPACK_IMPORTED_MODULE_4__["isMobileQuery"]);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MainProductsSection__Title",
  componentId: "x7iwcr-3"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:60px;line-height:102%;text-transform:uppercase;color:#e30b17;@media (", "){font-size:36px;}"], _constants__WEBPACK_IMPORTED_MODULE_4__["isTabletQuery"]);

var TitleBlack = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Title).withConfig({
  displayName: "MainProductsSection__TitleBlack",
  componentId: "x7iwcr-4"
})(["color:black;@media (", "){font-size:16px;}"], _constants__WEBPACK_IMPORTED_MODULE_4__["isTabletQuery"]);

var MainProductsSection = function MainProductsSection() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_6__["DataContext"]),
      mainProduct = _useContext.mainProduct;

  var product = _data_productsData__WEBPACK_IMPORTED_MODULE_5__["mainProductData"][mainProduct || 0];
  var currentProductTaste = _data_productsData__WEBPACK_IMPORTED_MODULE_5__["mainProductData"][mainProduct || 0].items[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    id: "products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, currentProductTaste.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleBlack, null, product.tagline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_3__["Product"], {
    product: product
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProductDescription__WEBPACK_IMPORTED_MODULE_2__["ProductDescription"], {
    product: product
  })));
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescription", function() { return ProductDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _Composition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);





var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__Container",
  componentId: "gtu4s9-0"
})(["height:70%;width:780px;margin-top:90px;font-family:Gerbera;font-style:normal;font-size:16px;margin-left:50px;@media (", "){width:50%;margin-left:0;}@media (", "){width:90%;margin-top:50px;margin-left:0;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_2__["isMobileQuery"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__TitleWrapper",
  componentId: "gtu4s9-1"
})(["display:flex;align-items:baseline;@media (", "){display:none;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["isMobileQuery"]);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__Title",
  componentId: "gtu4s9-2"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:60px;line-height:102%;text-transform:uppercase;color:#e30b17;@media (", "){font-size:36px;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["isTabletQuery"]);

var TitleBlack = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Title).withConfig({
  displayName: "ProductDescription__TitleBlack",
  componentId: "gtu4s9-3"
})(["color:black;@media (", "){font-size:16px;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["isTabletQuery"]);

var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__Text",
  componentId: "gtu4s9-4"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:18px;line-height:102%;text-transform:uppercase;color:#151524;margin-left:25px;@media (", "){font-size:12px;margin-left:5px;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["isTabletQuery"]);

var Text2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__Text2",
  componentId: "gtu4s9-5"
})(["font-family:Cervo;font-style:normal;font-size:16px;line-height:18px;letter-spacing:-0.5px;color:#999999;width:120px;"]);

var RegularText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__RegularText",
  componentId: "gtu4s9-6"
})(["margin:10px 0;"]);

var Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__Divider",
  componentId: "gtu4s9-7"
})(["height:1px;background-color:#999999;flex:1;margin:20px 0;"]);

var Wrapper2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__Wrapper2",
  componentId: "gtu4s9-8"
})(["display:flex;align-items:center;"]);

var InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__InfoBox",
  componentId: "gtu4s9-9"
})(["display:flex;justify-content:space-between;width:80%;flex-wrap:wrap;"]);

var InfoBoxItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__InfoBoxItem",
  componentId: "gtu4s9-10"
})(["display:flex;flex-direction:column;padding:10px;"]);

var InfoBoxName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductDescription__InfoBoxName",
  componentId: "gtu4s9-11"
})(["font-family:Cervo;font-style:normal;font-weight:normal;font-size:20px;letter-spacing:0.002em;text-transform:uppercase;color:#151524;"]);

var InfoBoxValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Title).withConfig({
  displayName: "ProductDescription__InfoBoxValue",
  componentId: "gtu4s9-12"
})(["font-style:normal;font-size:40px;text-transform:none;display:flex;align-items:baseline;"]);

var InfoBoxValueWord = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(InfoBoxValue).withConfig({
  displayName: "ProductDescription__InfoBoxValueWord",
  componentId: "gtu4s9-13"
})(["font-size:25px;text-transform:none;"]);

var DescriptionBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(InfoBox).withConfig({
  displayName: "ProductDescription__DescriptionBox",
  componentId: "gtu4s9-14"
})(["width:auto;@media (", "){flex-direction:column;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["isTabletQuery"]);

var DescriptionBoxItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(InfoBoxItem).withConfig({
  displayName: "ProductDescription__DescriptionBoxItem",
  componentId: "gtu4s9-15"
})(["width:30%;@media (", "){width:100%;}"], _constants__WEBPACK_IMPORTED_MODULE_2__["isTabletQuery"]);

var ProductDescription = function ProductDescription(_ref) {
  var product = _ref.product;
  var currentProductTaste = product.items[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, currentProductTaste.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, product.shortDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleBlack, null, product.tagline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RegularText, null, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text2, null, product.form), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBox, null, product.components.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBoxItem, {
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBoxName, null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBoxValue, null, item.value, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBoxValueWord, null, item.unit)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DescriptionBox, null, product.details.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DescriptionBoxItem, {
      key: item.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBoxName, null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RegularText, null, item.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Composition__WEBPACK_IMPORTED_MODULE_3__["Composition"], {
    name: currentProductTaste.name,
    taste: currentProductTaste.taste,
    composition: currentProductTaste.composition
  }));
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Advantage", function() { return Advantage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_advantage1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88);
/* harmony import */ var _images_advantage1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_advantage1_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_advantage2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var _images_advantage2_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_advantage2_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_advantage3_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90);
/* harmony import */ var _images_advantage3_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_advantage3_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_advantage4_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _images_advantage4_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_advantage4_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_advantage5_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var _images_advantage5_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_advantage5_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_advantage6_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93);
/* harmony import */ var _images_advantage6_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_advantage6_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_chart_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94);
/* harmony import */ var _images_chart_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_chart_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_chartMobile_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95);
/* harmony import */ var _images_chartMobile_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_chartMobile_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2);













var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__Container",
  componentId: "xzi6n3-0"
})(["position:relative;width:100%;height:auto;min-height:800px;background-color:black;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:-150px;@media (", "){margin-top:-60px;padding-top:0;}@media (", "){margin-top:-50px;padding-top:50px;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__Content",
  componentId: "xzi6n3-1"
})(["position:relative;width:100%;max-width:1500px;display:flex;justify-content:center;align-items:center;font-family:Gerbera;font-style:normal;font-weight:300;font-size:16px;line-height:22px;text-align:right;letter-spacing:-0.5px;color:#151524;"]);

var BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__BackgroundWrapper",
  componentId: "xzi6n3-2"
})(["width:100%;"]);

var BackgroundFirstContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__BackgroundFirstContent",
  componentId: "xzi6n3-3"
})(["max-width:1300px;margin-bottom:-400px;z-index:10;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){margin:0;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"]);

var BackgroundFirst = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__BackgroundFirst",
  componentId: "xzi6n3-4"
})(["background:url(\"", "\") center 0 no-repeat;background-size:cover;width:100%;height:auto;min-height:800px;z-index:10;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){background:none;min-height:600px;}@media (", "){min-height:760px;}"], _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_2___default.a, _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var BackgroundSecond = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(BackgroundFirst).withConfig({
  displayName: "Advantage__BackgroundSecond",
  componentId: "xzi6n3-5"
})(["transform:rotate(180deg);-webkit-transform:rotate(180deg);-webkit-transform:scaleY(-1);transform:scaleY(-1);"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__TitleWrapper",
  componentId: "xzi6n3-6"
})(["display:flex;flex-direction:column;align-items:flex-end;width:auto;margin:70px 0;@media (", "){margin-left:-40px;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var TitleRedBig = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__TitleRedBig",
  componentId: "xzi6n3-7"
})(["font-family:Cervo;font-style:italic;font-size:75.39px;line-height:102%;text-align:center;text-transform:uppercase;color:#e30b17;@media (", "){font-size:50px;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var TitleWhite = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TitleRedBig).withConfig({
  displayName: "Advantage__TitleWhite",
  componentId: "xzi6n3-8"
})(["font-size:52px;color:white;margin-right:-50px;margin-top:-10px;@media (", "){font-size:", ";margin:", ";}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"], function (p) {
  return p.bottom ? '40px' : '34px';
}, function (p) {
  return p.bottom && 0;
});

var Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__Table",
  componentId: "xzi6n3-9"
})(["display:grid;max-width:100vw;grid-template-columns:1fr 1fr 1fr;grid-template-rows:250px 250px;gap:20px;font-family:Gerbera;font-style:normal;font-weight:300;font-size:16px;line-height:22px;letter-spacing:-0.5px;padding:0 30px;@media (", "){grid-template-columns:1fr 1fr;}@media (", "){grid-template-columns:1fr;gap:0;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var TableItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__TableItem",
  componentId: "xzi6n3-10"
})(["height:100%;width:100%;color:black;background-color:white;padding:30px;"]);

var TableItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__TableItemTitle",
  componentId: "xzi6n3-11"
})(["margin:10px 0;font-family:Cervo;font-style:normal;font-weight:500;font-size:24px;line-height:22px;letter-spacing:-0.5px;text-transform:uppercase;"]);

var BackgroundSecondContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(BackgroundFirstContent).withConfig({
  displayName: "Advantage__BackgroundSecondContent",
  componentId: "xzi6n3-12"
})(["width:1190px;max-width:93%;flex-direction:row;background-color:white;margin-bottom:150px;-webkit-transform:scaleY(-1);transform:scaleY(-1);@media (", "){flex-direction:column;padding:30px;}@media (", "){top:275px;right:20%;font-size:16px;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var TitleBlack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__TitleBlack",
  componentId: "xzi6n3-13"
})(["color:black;font-family:Cervo;font-style:italic;font-size:52px;text-transform:uppercase;margin-left:", ";line-height:102%;margin-bottom:10px;margin-top:-5px;@media (", "){font-size:40px;}"], function (p) {
  return p.dash && '5px';
}, _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var TitleRed = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TitleBlack).withConfig({
  displayName: "Advantage__TitleRed",
  componentId: "xzi6n3-14"
})(["color:#e30b17;margin:0 5px 0 0;"]);

var BackgroundSecondContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__BackgroundSecondContentWrapper",
  componentId: "xzi6n3-15"
})(["display:flex;flex-direction:column;align-items:flex-start;margin:0;width:33%;@media (", "){width:100%;text-align:right;align-items:flex-end;padding:0 25px;}@media (", "){}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var TextLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__TextLine",
  componentId: "xzi6n3-16"
})(["display:flex;width:", ";@media (", "){width:", ";margin-right:", ";}@media (", "){}"], function (p) {
  return p.small ? '55%' : '100 %';
}, _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"], function (p) {
  return p.small ? '30%' : 'auto';
}, function (p) {
  return p.small ? '50px' : '-50px';
}, _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"]);

var BottomTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__BottomTitle",
  componentId: "xzi6n3-17"
})(["display:flex;justify-content:center;align-items:baseline;width:100%;"]);

var BackgroundTrird = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(BackgroundFirst).withConfig({
  displayName: "Advantage__BackgroundTrird",
  componentId: "xzi6n3-18"
})(["height:150px;min-height:150px;@media (", "){min-height:150px;height:150px;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"]);

var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Advantage__TextWrapper",
  componentId: "xzi6n3-19"
})(["@media (", "){display:flex;align-items:flex-end;flex-direction:column;margin-right:50px;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["isTabletQuery"]);

var Advantage = function Advantage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundFirst, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundFirstContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRedBig, null, "\u041F\u0420\u0415\u0418\u041C\u0423\u0429\u0415\u0421\u0422\u0412\u0410"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWhite, null, "CYBER BUILD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_advantage1_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "advantage1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItemTitle, null, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u0412\u0441\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0430\u043C\u044B\u043C \u0441\u0442\u0440\u043E\u0433\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_advantage2_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "advantage2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItemTitle, null, "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0437\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432, \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044F \u0430\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F (\u0410\u0423\u041F).")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_advantage3_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "advantage3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItemTitle, null, "\u041D\u0438\u0437\u043A\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041C\u0438\u043D\u0438\u043C\u0443\u043C \u0441\u0430\u0445\u0430\u0440\u0430 \u0438 \u0444\u0440\u0443\u043A\u0442\u043E\u0437\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043C\u0435\u043D\u0430, \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u043E\u0437\u0433\u0430 \u0438 \u0426\u041D\u0421.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_advantage4_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "advantage4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItemTitle, null, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0430\u0440\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u043E\u0432 \u0438 \u043A\u0440\u0430\u0441\u0438\u0442\u0435\u043B\u0435\u0439.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_advantage5_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "advantage5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItemTitle, null, "20 \u043B\u0435\u0442 \u043D\u0430\u0443\u0447\u043D\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430 Siberian Wellness"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u0421\u0435\u0440\u0438\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430 \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0435\u0439\u0441\u044F \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0436\u0438\u0437\u043D\u0438.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_advantage6_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "advantage6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItemTitle, null, "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0443\u0440\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430: \u043E\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043E\u0441\u0442\u0430\u0432\u043E\u0432 \u0434\u043E \u0432\u044B\u043F\u0443\u0441\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u044D\u043A\u043E-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundSecond, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundSecondContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundSecondContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextLine, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRed, null, "\u0411\u043E\u043B\u044C\u0448\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleBlack, {
    dash: true
  }, " \u2014 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleBlack, null, "\u041C\u0435\u043D\u044C\u0448\u0435 \u0441\u0430\u0445\u0430\u0440\u0430!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextLine, {
    small: true
  }, "\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u0441\u0430\u0445\u0430\u0440\u0430 \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445 \u043D\u0430 100 \u0433")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _constants__WEBPACK_IMPORTED_MODULE_11__["isMobileQuery"] ? _images_chartMobile_svg__WEBPACK_IMPORTED_MODULE_10___default.a : _images_chart_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "chart"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRed, null, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWhite, {
    bottom: true
  }, "\u0421\u0432\u043E\u0439 \u0431\u0438\u043B\u0434:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundTrird, null))));
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsSection", function() { return AllProductsSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _ProductDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _data_productsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);









var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AllProductsSection__Container",
  componentId: "sc-17y7nsw-0"
})(["position:relative;width:100%;height:auto;min-height:750px;background-color:white;transform:skewY(1.5deg);margin-top:-30px;display:flex;justify-content:center;z-index:2;padding-bottom:50px;@media (", "){min-height:auto;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AllProductsSection__Content",
  componentId: "sc-17y7nsw-1"
})(["max-width:100%;transform:skewY(-1.5deg);display:flex;width:auto;justify-content:space-between;margin-top:-80px;@media (", "){justify-content:center;padding-bottom:50px;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var AllProductsSection = function AllProductsSection() {
  var isTablet = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"], ")"));

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_7__["DataContext"]),
      setAllProductTaste = _useContext.setAllProductTaste,
      allProductTaste = _useContext.allProductTaste,
      allProduct = _useContext.allProduct;

  var currentProduct = _data_productsData__WEBPACK_IMPORTED_MODULE_5__["allProductsData"][allProduct || 0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, !isTablet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_3__["Product"], {
    product: currentProduct,
    isAllProductsSection: true,
    onTasteChange: setAllProductTaste,
    tasteIndex: allProductTaste
  })));
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _Composition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _data_allData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);











var AccordionDescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__AccordionDescriptionWrapper",
  componentId: "i4ji85-0"
})(["margin-left:30px;@media (", "){margin:0;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var AccordionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__AccordionTitleWrapper",
  componentId: "i4ji85-1"
})(["display:", ";@media (", "){display:", ";}"], function (p) {
  return p.top ? 'none' : 'block';
}, _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"], function (p) {
  return p.top ? 'block' : 'none';
});

var StyledAccordion = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "AccordionItem__StyledAccordion",
  componentId: "i4ji85-2"
})(["box-shadow:none !important;border-top:1px solid #1f3554;text-align:left;:last-child{border-bottom:1px solid #1f3554;}.MuiAccordionDetails-root{@media (", "){padding:0;}}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__Container",
  componentId: "i4ji85-3"
})(["height:70%;width:900px;margin-top:90px;font-family:Gerbera;font-style:normal;margin-left:50px;@media (", "){width:90%;margin-top:120px;}@media (", "){margin-left:0;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var AccordionItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Container).withConfig({
  displayName: "AccordionItem__AccordionItemWrapper",
  componentId: "i4ji85-4"
})(["display:flex;margin:0;width:100%;@media (", "){width:100%;margin:0;}@media (", "){flex-direction:column;margin:0;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__QuestionTitle",
  componentId: "i4ji85-5"
})(["font-size:18px;line-height:24px;color:#272727;padding:10px 0;text-transform:uppercase;"]);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__Title",
  componentId: "i4ji85-6"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:60px;line-height:102%;text-transform:uppercase;color:#e30b17;@media (", "){font-size:36px;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var TitleBlack = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Title).withConfig({
  displayName: "AccordionItem__TitleBlack",
  componentId: "i4ji85-7"
})(["color:#151524;@media (", "){font-size:16px;}@media (", "){margin:10px 0;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var DescriptionBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__DescriptionBox",
  componentId: "i4ji85-8"
})(["width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;margin-top:40px;@media (", "){grid-template-columns:1fr;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var DescriptionBoxItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__DescriptionBoxItem",
  componentId: "i4ji85-9"
})(["display:flex;flex-direction:row;align-items:flex-start;width:90%;@media (", "){width:auto;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var DescriptionImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__DescriptionImage",
  componentId: "i4ji85-10"
})(["background:url(\"", "\") center 0 no-repeat;background-size:contain;min-width:40px;height:40px;"], function (p) {
  return p.src;
});

var DescriptionBoxItemValue = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccordionItem__DescriptionBoxItemValue",
  componentId: "i4ji85-11"
})(["margin-left:20px;"]);

var AccordionItem = function AccordionItem(_ref) {
  var product = _ref.product;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      productTaste = _useState2[0],
      setProductTaste = _useState2[1];

  var currentProductTaste = product.items[productTaste];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledAccordion, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {
    expandIcon: "+"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(QuestionTitle, null, product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AccordionItemWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AccordionTitleWrapper, {
    top: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, null, currentProductTaste.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleBlack, null, product.tagline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_7__["Product"], {
    product: product,
    isAllProductsSection: true,
    onTasteChange: setProductTaste,
    tasteIndex: productTaste
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AccordionDescriptionWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AccordionTitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, null, currentProductTaste.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleBlack, null, product.tagline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionBox, {
    key: product
  }, product.details.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionBoxItem, {
      key: item.description
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionImage, {
      src: _data_allData__WEBPACK_IMPORTED_MODULE_9__["iconList"][index]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionBoxItemValue, null, item.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Composition__WEBPACK_IMPORTED_MODULE_8__["Composition"], {
    name: currentProductTaste.name,
    taste: currentProductTaste.taste,
    composition: currentProductTaste.composition
  })))));
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(116);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_buttonPrevious_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(117);
/* harmony import */ var _images_buttonPrevious_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_buttonPrevious_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_buttonNext_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(118);
/* harmony import */ var _images_buttonNext_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_buttonNext_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _data_allData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);










var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__Container",
  componentId: "sc-1wpbrw3-0"
})(["position:relative;width:100%;height:auto;min-height:800px;background-color:black;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:-70px;"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__Content",
  componentId: "sc-1wpbrw3-1"
})(["position:relative;max-width:1500px;display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column;"]);

var BackgroundFirst = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__BackgroundFirst",
  componentId: "sc-1wpbrw3-2"
})(["background:url(\"", "\") center 0 no-repeat;background-size:cover;width:100%;height:500px;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){background:none;}"], _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_4___default.a, _constants__WEBPACK_IMPORTED_MODULE_7__["isTabletQuery"]);

var BackgroundSecond = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BackgroundFirst).withConfig({
  displayName: "Reviews__BackgroundSecond",
  componentId: "sc-1wpbrw3-3"
})(["position:absolute;bottom:0;z-index:-1;"]);

var TitleWhite = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__TitleWhite",
  componentId: "sc-1wpbrw3-4"
})(["font-family:Cervo;font-style:italic;font-size:52px;color:white;line-height:102%;text-align:center;text-transform:uppercase;@media (", "){font-size:40px;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var TitleRed = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(TitleWhite).withConfig({
  displayName: "Reviews__TitleRed",
  componentId: "sc-1wpbrw3-5"
})(["color:#e30b17;"]);

var TitleBlack = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(TitleWhite).withConfig({
  displayName: "Reviews__TitleBlack",
  componentId: "sc-1wpbrw3-6"
})(["color:#151524;margin-top:80px;@media (", "){max-width:100vw;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isTabletQuery"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__TitleWrapper",
  componentId: "sc-1wpbrw3-7"
})(["display:flex;flex-direction:column;align-items:center;width:auto;margin-top:50px;"]);

var SliderBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__SliderBox",
  componentId: "sc-1wpbrw3-8"
})(["position:relative;width:100%;height:auto;min-height:600px;background-color:#e20c17;display:flex;flex-direction:column;justify-content:center;align-items:center;transform:skewY(1.5deg);margin-top:-50px;overflow-y:visible;"]);

var Slider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__Slider",
  componentId: "sc-1wpbrw3-9"
})(["position:relative;max-width:1500px;display:flex;width:100%;height:100%;min-height:600px;flex-direction:column;justify-content:center;align-items:center;"]);

var SlideContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__SlideContent",
  componentId: "sc-1wpbrw3-10"
})(["display:flex;flex-direction:row;justify-content:space-between;font-family:Gerbera;font-style:normal;font-weight:300;font-size:16px;line-height:22px;color:white;letter-spacing:-0.5px;@media (", "){justify-content:center;}@media (", "){flex-direction:column;align-items:center;padding:0 20px;margin-top:-50px;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var SlideImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__SlideImage",
  componentId: "sc-1wpbrw3-11"
})(["clip-path:url(#myClip);color:bisque;background:url(\"", "\") center center no-repeat;background-size:cover;width:262px;height:231px;@media (", "){margin:20px 0;}"], function (p) {
  return p.src;
}, _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var SlideDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__SlideDescription",
  componentId: "sc-1wpbrw3-12"
})(["display:flex;flex-direction:column;width:70%;margin-left:30px;@media (", "){width:55%;}@media (", "){width:auto;margin-left:0;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var SlideTextName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__SlideTextName",
  componentId: "sc-1wpbrw3-13"
})(["font-family:Gerbera;font-weight:500;font-size:24px;line-height:28px;letter-spacing:-1px;flex-wrap:wrap;display:flex;"]);

var SlideTextReview = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__SlideTextReview",
  componentId: "sc-1wpbrw3-14"
})(["font-family:Cervo;font-style:normal;font-weight:500;font-size:40px;line-height:48px;text-transform:uppercase;width:auto;max-width:600px;padding:30px 0;"]);

var StepWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__StepWrapper",
  componentId: "sc-1wpbrw3-15"
})(["display:flex;flex-direction:row;transform:skewY(-1.5deg);margin-left:-30px;@media (", "){margin-bottom:50px;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var Step = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__Step",
  componentId: "sc-1wpbrw3-16"
})(["width:38px;height:2px;background-color:", ";margin-right:5px;"], function (p) {
  return p.active ? 'white' : '#1F3554';
});

var ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__ButtonsWrapper",
  componentId: "sc-1wpbrw3-17"
})(["position:absolute;display:flex;flex-direction:row;top:-30px;right:50px;transform:skewY(-1.5deg);display:flex;justify-content:space-between;width:155px;@media (", "){display:none;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var ReviewsBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__ReviewsBox",
  componentId: "sc-1wpbrw3-18"
})(["flex-direction:column;justify-content:center;align-items:center;height:auto;width:1260px;background-color:white;margin-top:-50px;margin-bottom:70px;"]);

var ReviewsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__ReviewsWrapper",
  componentId: "sc-1wpbrw3-19"
})(["display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;width:100%;min-height:550px;height:auto;padding:50px;"]);

var Review = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__Review",
  componentId: "sc-1wpbrw3-20"
})(["display:flex;flex-direction:column;width:240px;font-family:Gerbera;font-style:normal;font-weight:300;font-size:16px;line-height:22px;letter-spacing:-0.5px;"]);

var ReviewName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__ReviewName",
  componentId: "sc-1wpbrw3-21"
})(["font-size:16px;font-weight:500;letter-spacing:-0.3px;margin-top:30px;margin-bottom:15px;"]);

var ReviewLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__ReviewLink",
  componentId: "sc-1wpbrw3-22"
})(["font-size:12px;margin-top:15px;"]);

var SwgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Reviews__SwgWrapper",
  componentId: "sc-1wpbrw3-23"
})(["max-width:0;max-height:0;"]);

var StuledSwipeableViews = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Reviews__StuledSwipeableViews",
  componentId: "sc-1wpbrw3-24"
})(["transform:skewY(-1.5deg);max-width:70%;@media (", "){max-width:90%;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isTabletQuery"]);

var ReviewsContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Content).withConfig({
  displayName: "Reviews__ReviewsContent",
  componentId: "sc-1wpbrw3-25"
})(["align-items:center;margin-top:-50px;overflow:hidden;overflow-x:auto;::-webkit-scrollbar{display:none;}@media (", "){align-items:flex-start;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isTabletQuery"]);

var StyledSliderButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Reviews__StyledSliderButton",
  componentId: "sc-1wpbrw3-26"
})(["cursor:pointer;"]);

var Reviews = function Reviews() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      slideNum = _useState2[0],
      setSlideNum = _useState2[1];

  var increaseCount = function increaseCount() {
    if (slideNum < _data_allData__WEBPACK_IMPORTED_MODULE_8__["gamersReviewList"].length - 1) {
      setSlideNum(slideNum + 1);
    }
  };

  var decreaseCount = function decreaseCount() {
    if (slideNum !== 0) {
      setSlideNum(slideNum - 1);
    }
  };

  var handleStepChange = function handleStepChange(step) {
    setSlideNum(step);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    id: "reviews"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwgWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    width: "0",
    height: "0",
    viewBox: "0 0 262 231"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("clipPath", {
    id: "myClip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M154.945 1.78751L257.61 62.5241C261.468 63.9372 263.198 66.7885 261.097 72.1128L233.255 158.083C231.845 164.113 228.73 165.552 223.487 168.731L120.822 229.468C115.951 231.613 110.042 231.613 106.901 228.786L4.21154 168.378C0.378909 166.612 -0.659611 164.113 0.378909 160.202L27.8749 73.1978C28.9135 68.2016 32.7708 65.7287 37.642 62.8774L141.346 1.43424C146.217 -0.710593 151.805 -0.332093 154.945 1.78751Z",
    fill: "black"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundFirst, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleWhite, null, "\u0421\u0442\u0440\u0438\u043C\u0435\u0440\u044B \u0438 \u0431\u043B\u043E\u0433\u0435\u0440\u044B \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleRed, null, "Cyber Build")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SliderBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ButtonsWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledSliderButton, {
    src: _images_buttonPrevious_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "img",
    onClick: decreaseCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledSliderButton, {
    src: _images_buttonNext_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "img",
    onClick: increaseCount
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StuledSwipeableViews, {
    index: slideNum,
    onChangeIndex: handleStepChange,
    enableMouseEvents: true
  }, _data_allData__WEBPACK_IMPORTED_MODULE_8__["gamersReviewList"].map(function (gamer, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SlideContent, {
      key: gamer.picture
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SlideImage, {
      src: gamer.picture
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SlideDescription, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SlideTextName, null, gamer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, gamer.games), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SlideTextReview, null, gamer.reviews)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StepWrapper, null, _data_allData__WEBPACK_IMPORTED_MODULE_8__["gamersReviewList"].map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Step, {
      key: item.picture,
      active: slideNum === index,
      onClick: function onClick() {
        return handleStepChange(index);
      }
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReviewsContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReviewsBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleBlack, null, "\u041E\u0442\u0437\u044B\u0432\u044B \u0433\u0435\u0439\u043C\u0435\u0440\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReviewsWrapper, null, _data_allData__WEBPACK_IMPORTED_MODULE_8__["reviewsList"].map(function (review) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Review, {
      key: review.review
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: review.picture,
      alt: "img",
      height: 101,
      width: 101
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReviewName, null, review.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, review.review), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReviewLink, null, review.link));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundSecond, null));
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaAboutUs", function() { return MediaAboutUs; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_cybersport_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _images_cybersport_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_cybersport_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);





var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__Container",
  componentId: "m4yypt-0"
})(["height:auto;min-height:480px;width:100%;background-color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__Content",
  componentId: "m4yypt-1"
})(["max-width:1300px;display:flex;width:100%;justify-content:flex-start;align-items:center;flex-direction:column;height:100%;overflow:hidden;@media (", "){overflow-x:auto;}"], _constants__WEBPACK_IMPORTED_MODULE_3__["isMobileQuery"]);

var TitleBlack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__TitleBlack",
  componentId: "m4yypt-2"
})(["font-family:Cervo;font-style:italic;font-size:52px;line-height:102%;text-align:center;text-transform:uppercase;color:#151524;"]);

var TitleRed = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TitleBlack).withConfig({
  displayName: "MediaAboutUs__TitleRed",
  componentId: "m4yypt-3"
})(["color:#e30b17;margin-right:8px;"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__TitleWrapper",
  componentId: "m4yypt-4"
})(["display:flex;flex-direction:row;align-items:center;width:auto;margin-top:80px;"]);

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__Wrapper",
  componentId: "m4yypt-5"
})(["display:flex;flex-direction:row;justify-content:space-around;width:100%;margin:50px 0;height:auto;@media (", "){justify-content:flex-start;}"], _constants__WEBPACK_IMPORTED_MODULE_3__["isMobileQuery"]);

var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__Item",
  componentId: "m4yypt-6"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;height:auto;width:43%;min-width:250px;font-family:Gerbera;font-style:normal;font-size:16px;line-height:22px;letter-spacing:-0.5px;color:#151524;@media (", "){margin:0 30px;}"], _constants__WEBPACK_IMPORTED_MODULE_3__["isMobileQuery"]);

var ItemInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__ItemInfo",
  componentId: "m4yypt-7"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;height:auto;width:100%;"]);

var Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__Divider",
  componentId: "m4yypt-8"
})(["width:2px;height:auto;background-color:#151524;"]);

var StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "MediaAboutUs__StyledIcon",
  componentId: "m4yypt-9"
})(["margin-bottom:20px;"]);

var StyledDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MediaAboutUs__StyledDescription",
  componentId: "m4yypt-10"
})(["margin-bottom:20px;"]);

var MediaAboutUs = function MediaAboutUs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRed, null, "\u0421\u043C\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleBlack, null, "\u041E \u043D\u0430\u0441")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    src: _images_cybersport_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDescription, null, "\xAB\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0441\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F \u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u0435\u043C \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u0443\u044E \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0444\u043E\u0440\u043C\u0443. \u0418 \u0434\u0435\u043B\u043E \u0442\u0443\u0442 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0441\u0442\u0440\u0435\u043C\u043B\u0435\u043D\u0438\u0438 \u043B\u0443\u0447\u0448\u0435 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u2014 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0432\u043B\u0438\u044F\u0442\u044C \u043D\u0430 \u0432\u043D\u0443\u0442\u0440\u0438\u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F, \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433, \u043D\u043E \u0438 \u0440\u0435\u0437\u043A\u043E \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043D\u0438. \xBB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "cybersport.ru")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    src: _images_cybersport_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDescription, null, "\xAB\u0412\u0430\u0436\u043D\u0435\u0439\u0448\u0438\u0435 \xAB\u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B\xBB \u043A\u0438\u0431\u0435\u0440\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0430 \u0438 \u0433\u0435\u0439\u043C\u0435\u0440\u0430 \u2014 \u044D\u0442\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0441 \u0434\u0435\u0432\u0430\u0439\u0441\u0430\u043C\u0438, \u043D\u043E \u0438 \u0445\u043E\u0440\u043E\u0448\u0435\u0435 \u0437\u0440\u0435\u043D\u0438\u0435, \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u0438 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u044F \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F. \u041C\u044B \u0441\u043E\u0431\u0440\u0430\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0432\u0435\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u0442\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u0430. \xBB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "cyber.sports.ru")))));
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldQuality", function() { return WorldQuality; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _images_sportPartners_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(119);
/* harmony import */ var _images_sportPartners_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_sportPartners_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _data_allData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);








var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorldQuality__Container",
  componentId: "sc-1h27qwx-0"
})(["height:auto;min-height:800px;width:100%;background-color:#daf7ff;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){justify-content:flex-start;align-items:flex-start;}"], _constants__WEBPACK_IMPORTED_MODULE_5__["isMobileQuery"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorldQuality__Content",
  componentId: "sc-1h27qwx-1"
})(["max-width:100%;display:flex;width:1500px;justify-content:flex-start;align-items:center;flex-direction:column;height:100%;font-family:Gerbera;font-style:normal;font-size:18px;line-height:28px;text-align:center;letter-spacing:-0.3px;color:#151524;margin-bottom:80px;@media (", "){padding:0 30px;}@media (", "){min-width:auto;padding:0 20px;}"], _constants__WEBPACK_IMPORTED_MODULE_5__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_5__["isMobileQuery"]);

var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "WorldQuality__StyledTitle",
  componentId: "sc-1h27qwx-2"
})(["@media (", "){text-align:start;}"], _constants__WEBPACK_IMPORTED_MODULE_5__["isMobileQuery"]);

var TitleRed = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledTitle).withConfig({
  displayName: "WorldQuality__TitleRed",
  componentId: "sc-1h27qwx-3"
})(["color:#e30b17;"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorldQuality__TitleWrapper",
  componentId: "sc-1h27qwx-4"
})(["margin-top:80px;"]);

var LongDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorldQuality__LongDescription",
  componentId: "sc-1h27qwx-5"
})(["max-width:780px;width:auto;margin:30px 0;@media (", "){text-align:start;}"], _constants__WEBPACK_IMPORTED_MODULE_5__["isMobileQuery"]);

var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorldQuality__Item",
  componentId: "sc-1h27qwx-6"
})(["width:300px;height:auto;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;text-align:left;font-size:16px;"]);

var ItemsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorldQuality__ItemsWrapper",
  componentId: "sc-1h27qwx-7"
})(["display:flex;margin:30px 0;justify-content:space-between;width:80%;padding-bottom:80px;border-bottom:1px solid #151524;@media (", "){flex-direction:column;width:100%;}"], _constants__WEBPACK_IMPORTED_MODULE_5__["isMobileQuery"]);

var ItemValueWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorldQuality__ItemValueWrapper",
  componentId: "sc-1h27qwx-8"
})(["display:flex;flex-direction:row;align-items:baseline;margin-bottom:20px;"]);

var ItemUnitText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "WorldQuality__ItemUnitText",
  componentId: "sc-1h27qwx-9"
})(["font-size:20px;font-weight:500;font-style:italic;margin-left:10px;"]);

var SmallerTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "WorldQuality__SmallerTitle",
  componentId: "sc-1h27qwx-10"
})(["font-size:36px;"]);

var LongDescriptionBottom = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(LongDescription).withConfig({
  displayName: "WorldQuality__LongDescriptionBottom",
  componentId: "sc-1h27qwx-11"
})(["font-size:16px;"]);

var WorldQuality = function WorldQuality() {
  var isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_5__["isMobileQuery"], ")"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    id: "aboutUs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTitle, null, "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRed, null, "\u0421 \u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u043C \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043E\u043C!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LongDescription, null, "\u041C\u044B \u0440\u043E\u0434\u0438\u043B\u0438\u0441\u044C \u0432 \u0421\u0438\u0431\u0438\u0440\u0438 \u0438 \u0431\u0440\u043E\u0441\u0438\u043B\u0438 \u0441\u0435\u0431\u0435 \u0436\u0435\u0441\u0442\u043A\u0438\u0439 \u0432\u044B\u0437\u043E\u0432 \u2013 \u0441\u0442\u0430\u0442\u044C \u0432\u0435\u0434\u0443\u0449\u0438\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemsWrapper, null, _data_allData__WEBPACK_IMPORTED_MODULE_6__["worldQualityItems"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      key: item.unit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemValueWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], null, " ", item.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemUnitText, null, " ", item.unit)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, item.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallerTitle, null, "\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LongDescriptionBottom, null, "\u041C\u044B \u2013 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440 \u041E\u043B\u0438\u043C\u043F\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u043C\u0438\u0442\u0435\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0439 \u0438 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043F\u043E\u043D\u0441\u043E\u0440 XXIX \u0412\u0441\u0435\u043C\u0438\u0440\u043D\u043E\u0439 \u0437\u0438\u043C\u043D\u0435\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0430\u0434\u044B \u2013 2019 \u0432 \u0433. \u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A\u0435 \u0432 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \xAB\u041E\u0431\u043E\u0433\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F\xBB."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_sportPartners_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "img",
    height: isMobile ? 96 : 'auto'
  })));
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualitySafety", function() { return QualitySafety; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_linesSecond_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
/* harmony import */ var _images_linesSecond_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_linesSecond_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _images_safetyLogo1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(121);
/* harmony import */ var _images_safetyLogo1_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_safetyLogo1_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_safetyLogo2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(122);
/* harmony import */ var _images_safetyLogo2_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_safetyLogo2_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_safetyLogo3_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(123);
/* harmony import */ var _images_safetyLogo3_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_safetyLogo3_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_safetyLogo4_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(124);
/* harmony import */ var _images_safetyLogo4_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_safetyLogo4_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);










var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QualitySafety__Container",
  componentId: "x9cj12-0"
})(["position:relative;height:auto;min-height:800px;width:100%;background-color:black;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){min-height:600px;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isTabletQuery"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QualitySafety__Content",
  componentId: "x9cj12-1"
})(["position:relative;max-width:1500px;display:flex;width:100%;justify-content:flex-start;align-items:center;flex-direction:column;height:100%;font-family:Gerbera;font-style:normal;font-size:16px;line-height:28px;text-align:center;letter-spacing:-0.3px;z-index:0;overflow:visible;color:white;@media (", "){padding:0 20px;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var Lines = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QualitySafety__Lines",
  componentId: "x9cj12-2"
})(["position:absolute;height:100%;width:100%;background:url(\"", "\") center 20% no-repeat;background-size:cover;pointer-events:none;"], _images_linesSecond_svg__WEBPACK_IMPORTED_MODULE_2___default.a);

var TitleWhite = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "QualitySafety__TitleWhite",
  componentId: "x9cj12-3"
})(["color:white;margin-right:10px;"]);

var TitleRed = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "QualitySafety__TitleRed",
  componentId: "x9cj12-4"
})(["color:#e30b17;"]);

var TitleBlue = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "QualitySafety__TitleBlue",
  componentId: "x9cj12-5"
})(["color:#00c0f3;font-size:24px;margin-right:10px;@media (", "){font-size:24px;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QualitySafety__TitleWrapper",
  componentId: "x9cj12-6"
})(["display:flex;flex-direction:row;align-items:center;width:auto;margin:50px 0 30px;@media (", "){flex-direction:column;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var LogosWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QualitySafety__LogosWrapper",
  componentId: "x9cj12-7"
})(["display:flex;flex-direction:row;justify-content:space-around;align-items:center;width:70%;margin:100px 0;@media (", "){display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:30px;margin:50px 0;width:90%;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var More = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "QualitySafety__More",
  componentId: "x9cj12-8"
})(["display:flex;flex-direction:row;align-items:center;cursor:pointer;padding-bottom:50px;"]);

var QualitySafety = function QualitySafety() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lines, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWhite, null, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRed, null, "\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041D\u0430\u0448\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0430\u043C\u044B\u043C \u0441\u0442\u0440\u043E\u0433\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogosWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "img",
    src: _images_safetyLogo1_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "img",
    src: _images_safetyLogo2_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "img",
    src: _images_safetyLogo3_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "img",
    src: _images_safetyLogo4_svg__WEBPACK_IMPORTED_MODULE_7___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(More, {
    href: "https://valeolab.com"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleBlue, null, "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u27F6"))));
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _data_allData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);










var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Questions__TitleWrapper",
  componentId: "sc-6d884m-0"
})(["display:flex;flex-direction:row;align-items:center;width:auto;margin:50px 0 50px;"]);

var TitleRed = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_5__["Title"]).withConfig({
  displayName: "Questions__TitleRed",
  componentId: "sc-6d884m-1"
})(["color:#e30b17;margin:0 5px;"]);

var QuestionsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Questions__QuestionsWrapper",
  componentId: "sc-6d884m-2"
})(["width:auto;max-width:800px;margin-bottom:50px;"]);

var StyledAccordion = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "Questions__StyledAccordion",
  componentId: "sc-6d884m-3"
})(["box-shadow:none !important;border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;text-align:left;"]);

var QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Questions__QuestionTitle",
  componentId: "sc-6d884m-4"
})(["font-size:18px;line-height:24px;color:#272727;padding:10px 0;"]);

var Questions = function Questions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    color: "white",
    id: "questions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["Content"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], null, "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRed, null, "\u0432\u043E\u043F\u0440\u043E\u0441\u044B "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], null, "?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuestionsWrapper, null, _data_allData__WEBPACK_IMPORTED_MODULE_8__["QuestionsList"].map(function (question) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAccordion, {
      key: question.question
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
      expandIcon: "+"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuestionTitle, null, question.question)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, question.answer)));
  }))));
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_Logo_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_tagline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(125);
/* harmony import */ var _images_tagline_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_tagline_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);












var BackgroundFirst = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactForm__BackgroundFirst",
  componentId: "sc-1i5y6pr-0"
})(["background:url(\"", "\") center 0 no-repeat;background-size:cover;width:100%;height:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (", "){background:none;}"], _images_blackBackground_svg__WEBPACK_IMPORTED_MODULE_6___default.a, _constants__WEBPACK_IMPORTED_MODULE_10__["isTabletQuery"]);

var BackgroundSecond = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BackgroundFirst).withConfig({
  displayName: "ContactForm__BackgroundSecond",
  componentId: "sc-1i5y6pr-1"
})(["position:relative;transform:rotate(180deg);-webkit-transform:rotate(180deg);-webkit-transform:scaleY(-1);transform:scaleY(-1);margin-bottom:", ";height:", ";min-height:", ";"], function (p) {
  return p.top && '120px';
}, function (p) {
  return p.top && '120px';
}, function (p) {
  return p.top && '120px';
});

var BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactForm__BackgroundWrapper",
  componentId: "sc-1i5y6pr-2"
})(["height:100px;overflow:hidden;width:100%;@media (", "){display:none;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["isMobileQuery"]);

var StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "ContactForm__StyledLogo",
  componentId: "sc-1i5y6pr-3"
})(["position:absolute;top:-80px;-webkit-transform:scaleY(-1);"]);

var StyledTagline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "ContactForm__StyledTagline",
  componentId: "sc-1i5y6pr-4"
})(["margin-top:30px;@media (", "){margin:0;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["isMobileQuery"]);

var BackgroundContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactForm__BackgroundContent",
  componentId: "sc-1i5y6pr-5"
})(["position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;@media (", "){justify-content:flex-start;align-items:flex-start;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["isMobileQuery"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactForm__TitleWrapper",
  componentId: "sc-1i5y6pr-6"
})(["display:flex;flex-direction:row;align-items:center;width:auto;margin:50px 0 50px;@media (", "){flex-direction:column;align-items:flex-start;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["isMobileQuery"]);

var TitleRed = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Title__WEBPACK_IMPORTED_MODULE_9__["Title"]).withConfig({
  displayName: "ContactForm__TitleRed",
  componentId: "sc-1i5y6pr-7"
})(["color:#e30b17;margin:0 5px;"]);

var TitleBlue = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Title__WEBPACK_IMPORTED_MODULE_9__["Title"]).withConfig({
  displayName: "ContactForm__TitleBlue",
  componentId: "sc-1i5y6pr-8"
})(["color:#00c0f3;margin:0 5px;"]);

var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "ContactForm__FormWrapper",
  componentId: "sc-1i5y6pr-9"
})(["display:flex;flex-direction:column;text-align:left;"]);

var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "ContactForm__StyledInput",
  componentId: "sc-1i5y6pr-10"
})(["height:30px;max-width:600px;width:100%;border-bottom:1px solid #00c0f3;border-top:none;border-right:none;border-left:none;background-color:transparent;color:white;padding:10px 0;margin-bottom:30px;border-bottom:1px solid #00c0f3;color:white;outline:none;"]);

var StyledTextArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "ContactForm__StyledTextArea",
  componentId: "sc-1i5y6pr-11"
})(["max-width:600px;width:100%;border-bottom:1px solid #00c0f3;border-top:none;border-right:none;border-left:none;background-color:transparent;color:white;padding:10px;margin-bottom:20px;color:white;outline:1px solid #00c0f3;background-color:transparent;"]);

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContactForm__Wrapper",
  componentId: "sc-1i5y6pr-12"
})(["margin-top:-100px;@media (", "){width:100%;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["isMobileQuery"]);

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "ContactForm__ButtonWrapper",
  componentId: "sc-1i5y6pr-13"
})(["width:fit-content;margin:20px 0;padding:15px 45px;border:2px solid #00c0f3;border-radius:10px;cursor:pointer;background:transparent;font-family:Cervo;font-style:italic;font-weight:500;font-size:22px;line-height:102%;text-align:center;text-transform:uppercase;color:#00c0f3;&:focus{color:white;border-color:white;}&:hover{color:white;border-color:white;}"]);

var ContactForm = function ContactForm() {
  var isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_10__["isMobileQuery"], ")"));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      nameValue = _useState2[0],
      setNameValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      emailValue = _useState4[0],
      setEmailValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      commentsValue = _useState6[0],
      seCommentsValue = _useState6[1];

  var text = "\u0418\u043C\u044F: ".concat(nameValue, ", E-mail: ").concat(emailValue, ", Comments: ").concat(commentsValue);
  var sent = "mailto:alisa.maltseva18@mail.ru?subject=\u043A\u0438\u0431\u0435\u0440\u0431\u0438\u0438\u0434&body=".concat(text);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    color: "black",
    id: "contactForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["Content"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundSecond, {
    top: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledLogo, {
    src: _images_Logo_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    height: 105
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundFirst, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTagline, {
    src: _images_tagline_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    width: isMobile ? 361 : 'auto'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleRed, null, isMobile ? 'Есть вопрос?' : 'Остались вопросы?'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleBlue, null, "\u0417\u0430\u0434\u0430\u0432\u0430\u0439!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormWrapper, {
    action: sent,
    method: "post",
    enctype: "text/plain",
    acceptСharset: "UTF-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "name"
  }, "\u0418\u043C\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledInput, {
    type: "text",
    name: "name",
    id: "name",
    label: "\u0418\u043C\u044F",
    onChange: function onChange(event) {
      return setNameValue(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "email"
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledInput, {
    type: "email",
    name: "email",
    id: "name",
    label: "e-mail",
    onChange: function onChange(event) {
      return setEmailValue(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "comments"
  }, "\u0422\u0432\u043E\u0439 \u0412\u043E\u043F\u0440\u043E\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTextArea, {
    id: "comments",
    name: "comments",
    rows: "6",
    onChange: function onChange(event) {
      return seCommentsValue(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ButtonWrapper, {
    type: "submit",
    value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C!"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundSecond, null))));
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _images_vkLogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);
/* harmony import */ var _images_vkLogo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_vkLogo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_siberianWellness_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(127);
/* harmony import */ var _images_siberianWellness_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_siberianWellness_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);










var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"]).withConfig({
  displayName: "Footer__StyledContainer",
  componentId: "ks2858-0"
})(["min-height:450px;"]);

var StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Content__WEBPACK_IMPORTED_MODULE_3__["Content"]).withConfig({
  displayName: "Footer__StyledContent",
  componentId: "ks2858-1"
})(["@media (", "){padding:50px 0;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isTabletQuery"]);

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footer__Wrapper",
  componentId: "ks2858-2"
})(["width:80%;display:flex;align-items:center;font-size:16px;color:#d3ecfe;text-align:left;@media (", "){width:90%;font-size:14px;justify-content:", ";}@media (", "){flex-direction:column;align-items:flex-start;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isTabletQuery"], function (p) {
  return p.first && 'space-between';
}, _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var WrapperSecond = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Wrapper).withConfig({
  displayName: "Footer__WrapperSecond",
  componentId: "ks2858-3"
})(["align-items:flex-start;margin-top:60px;"]);

var TitleBlue = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_4__["Title"]).withConfig({
  displayName: "Footer__TitleBlue",
  componentId: "ks2858-4"
})(["color:#00c0f3;margin-right:45px;"]);

var Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footer__Description",
  componentId: "ks2858-5"
})(["width:70%;margin-left:135px;@media (", "){margin-left:45px;}@media (", "){width:100%;margin-left:0;margin-top:30px;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Title__WEBPACK_IMPORTED_MODULE_4__["Title"]).withConfig({
  displayName: "Footer__ButtonText",
  componentId: "ks2858-6"
})(["display:flex;color:#00c0f3;font-size:22px;@media (", "){font-size:22px;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Footer__StyledImg",
  componentId: "ks2858-7"
})(["margin-right:15px;"]);

var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, {
    color: "#14253F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    first: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleBlue, null, "\u041D\u0430\u0448\u0430 \u0433\u0440\u0443\u043F\u043F\u0430 \u0432 vk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://vk.com/cyberbuild"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledImg, {
    src: _images_vkLogo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperSecond, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_siberianWellness_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041E\u041E\u041E \xAB\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F\xBB, \u0420\u043E\u0441\u0441\u0438\u044F, 633004, \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B., \u0433. \u0411\u0435\u0440\u0434\u0441\u043A, \u0443\u043B. \u0425\u0438\u043C\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F, 11/20, \u043A\u043E\u0440\u043F\u0443\u0441 1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\xA9 1996\u20132020 \u041E\u041E\u041E \xAB\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \xAB\u0421\u0438\u0431\u0438\u0440\u0441\u043A\u043E\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435\xBB. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. \u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 www.siberianhealth.com. \u0412\u0441\u044F \u0431\u0438\u0437\u043D\u0435\u0441-\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0434\u043B\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D")))));
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Button__ButtonWrapper",
  componentId: "bke531-0"
})(["width:fit-content;margin:20px 0;padding:15px 45px;border:2px solid #00c0f3;border-radius:10px;cursor:pointer;&:focus{color:white;border-color:white;}&:hover{color:white;border-color:white;}"]);

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper, null, children);
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_sumby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var lodash_sumby__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_sumby__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_basket_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _images_basket_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_basket_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_flag_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(128);
/* harmony import */ var _images_flag_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_flag_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);









var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__Container",
  componentId: "sc-17yjmdq-0"
})(["position:relative;display:flex;flex-direction:row;height:auto;min-height:100%;font-family:Gerbera;@media (", "){flex-direction:column;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__Content",
  componentId: "sc-17yjmdq-1"
})(["display:flex;flex-direction:column;justify-content:", ";height:100%;width:50%;background:", ";padding:50px 7%;align-items:", ";@media (", "){padding:30px 30px;width:100%;}"], function (p) {
  return p.dark && 'space-between';
}, function (p) {
  return p.dark ? '#28283c' : 'white';
}, function (p) {
  return !p.dark && 'center';
}, _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var LeftSideContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__LeftSideContent",
  componentId: "sc-17yjmdq-2"
})(["width:100%;max-width:450px;"]);

var CartImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__CartImgWrapper",
  componentId: "sc-17yjmdq-3"
})(["display:flex;justify-content:center;align-items:center;width:40px;height:40px;background-color:#00c0f3;border-radius:50px;"]);

var CartListInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__CartListInfo",
  componentId: "sc-17yjmdq-4"
})(["display:flex;justify-content:space-between;align-items:center;font-size:20px;height:90px;width:70%;"]);

var CartListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__CartListWrapper",
  componentId: "sc-17yjmdq-5"
})(["display:flex;justify-content:flex-end;border-bottom:1px darkgray solid;"]);

var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__ItemWrapper",
  componentId: "sc-17yjmdq-6"
})(["display:flex;justify-content:space-around;align-items:center;font-size:24px;height:130px;border-bottom:1px darkgray solid;"]);

var ProductPic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__ProductPic",
  componentId: "sc-17yjmdq-7"
})(["width:100px;height:100px;background:url(\"", "\") center 0 no-repeat;background-size:contain;margin:0 20px;"], function (p) {
  return p.src;
});

var ItemInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__ItemInfo",
  componentId: "sc-17yjmdq-8"
})(["display:flex;flex-direction:column;font-size:16px;"]);

var ItemLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__ItemLine",
  componentId: "sc-17yjmdq-9"
})(["display:flex;align-items:", ";justify-content:space-between;margin-bottom:10px;"], function (p) {
  return p.first ? 'flex-start' : 'baseline';
});

var StyledCloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "Cart__StyledCloseIcon",
  componentId: "sc-17yjmdq-10"
})(["color:darkgray;"]);

var WrapperStyledCloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__WrapperStyledCloseIcon",
  componentId: "sc-17yjmdq-11"
})(["position:absolute;top:10px;right:50px;.MuiSvgIcon-root{font-size:50px;}@media (", "){right:30px;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var Amount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__Amount",
  componentId: "sc-17yjmdq-12"
})(["display:flex;justify-content:center;align-items:center;height:40px;width:80px;border:2px #00c0f3 solid;border-radius:10px;"]);

var FinalPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__FinalPrice",
  componentId: "sc-17yjmdq-13"
})(["font-weight:500;font-size:24px;"]);

var ButtonCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__ButtonCount",
  componentId: "sc-17yjmdq-14"
})(["display:flex;justify-content:center;align-items:center;height:40px;width:30px;font-weight:500;font-size:30px;color:#00c0f3;"]);

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__ButtonWrapper",
  componentId: "sc-17yjmdq-15"
})(["display:flex;align-items:baseline;"]);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__Title",
  componentId: "sc-17yjmdq-16"
})(["font-size:32px;color:white;"]);

var TitleSecond = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__TitleSecond",
  componentId: "sc-17yjmdq-17"
})(["font-size:20px;color:white;opacity:0.5;margin-bottom:100px;"]);

var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Cart__StyledInput",
  componentId: "sc-17yjmdq-18"
})(["height:30px;max-width:400px;width:100%;border-bottom:1px solid #00c0f3;border-top:none;border-right:none;border-left:none;background-color:transparent;color:white;padding:10px 10px 10px 40px;margin-bottom:20px;border-bottom:1px solid #00c0f3;color:white;outline:none;font-size:16px;"]);

var StyledFlagImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Cart__StyledFlagImg",
  componentId: "sc-17yjmdq-19"
})(["position:absolute;"]);

var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__InputWrapper",
  componentId: "sc-17yjmdq-20"
})(["position:relative;"]);

var OrderButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__OrderButtonWrapper",
  componentId: "sc-17yjmdq-21"
})(["width:fit-content;margin:20px 0;padding:15px 45px;border:2px solid white;border-radius:10px;cursor:pointer;color:white;&:focus{color:#00c0f3;border-color:#00c0f3;}&:hover{color:#00c0f3;border-color:#00c0f3;}"]);

var OrderButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__OrderButtonText",
  componentId: "sc-17yjmdq-22"
})(["font-family:Cervo;display:flex;font-size:22px;"]);

var CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__CancelButton",
  componentId: "sc-17yjmdq-23"
})(["width:fit-content;transition:border-color 0.2s ease;color:hsla(0,0%,100%,0.5);border-bottom:1px solid transparent;padding:10px;margin-right:50px;&:hover{border-bottom:1px hsla(0,0%,100%,0.5) solid;}@media (", "){margin-right:30px;}"], _constants__WEBPACK_IMPORTED_MODULE_7__["isMobileQuery"]);

var ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__ButtonsWrapper",
  componentId: "sc-17yjmdq-24"
})(["display:flex;justify-content:flex-end;align-items:baseline;"]);

var RightSideContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Cart__RightSideContent",
  componentId: "sc-17yjmdq-25"
})(["display:flex;flex-direction:column;margin-top:50px;"]);

var Cart = function Cart(_ref) {
  var setIsCartOpen = _ref.setIsCartOpen;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_6__["CartContext"]),
      removeItem = _useContext.removeItem,
      decreaseAmount = _useContext.decreaseAmount,
      addItem = _useContext.addItem,
      cartItems = _useContext.cartItems;

  var fullItemsPrice = cartItems.length > 0 ? cartItems.map(function (x) {
    return x.product.price * x.amount;
  }) : [];
  var fullPrice = fullItemsPrice.length > 0 ? fullItemsPrice.reduce(function (a, b) {
    if (b) {
      return a + b;
    }

    return a;
  }) : 0;
  var amountAllItems = lodash_sumby__WEBPACK_IMPORTED_MODULE_3___default()(cartItems, 'amount');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperStyledCloseIcon, {
    onClick: function onClick() {
      return setIsCartOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCloseIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftSideContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CartListWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CartListInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CartImgWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_basket_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "img",
    width: 23
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, amountAllItems, "\u0448\u0442. \u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FinalPrice, null, fullPrice, " \u20BD"))), cartItems.map(function (x, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemWrapper, {
      key: x.item.taste
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProductPic, {
      src: x.item.picture
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemLine, {
      first: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, x.item.name, " (", x.item.taste, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCloseIcon, {
      onClick: function onClick() {
        return removeItem(x.product, x.item);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemLine, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonCount, {
      onClick: function onClick() {
        return decreaseAmount(x.product, x.item);
      }
    }, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Amount, null, " ", x.amount, " \u0448\u0442 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonCount, {
      onClick: function onClick() {
        return addItem(x.product, x.item, 1);
      }
    }, " + ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FinalPrice, null, fullItemsPrice[index]))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    dark: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightSideContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "\u041A\u0443\u0434\u0430 \u0432\u0435\u0437\u0435\u043C \u0437\u0430\u043A\u0430\u0437?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSecond, null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0432\u0441\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0438. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFlagImg, {
    src: _images_flag_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: 25
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput, {
    type: "email",
    name: "email",
    id: "name",
    defaultValue: "\u041C\u043E\u0441\u043A\u0432\u0430",
    label: "e-mail"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonsWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CancelButton, {
    onClick: function onClick() {
      return setIsCartOpen(false);
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrderButtonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrderButtonText, null, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C")))));
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_header_shadow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(130);
/* harmony import */ var _images_header_shadow_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_header_shadow_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_lines_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(131);
/* harmony import */ var _images_lines_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_lines_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_linesMobile_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(132);
/* harmony import */ var _images_linesMobile_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_linesMobile_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _images_youtube_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(134);
/* harmony import */ var _images_youtube_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_youtube_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ProductsChoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2);
/* harmony import */ var react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(156);
/* harmony import */ var react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_13__);















var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Content",
  componentId: "zk4l1p-0"
})(["position:relative;height:900px;width:100%;max-width:1500px;background:url(\"", "\") center 0 no-repeat;background-size:cover;overflow:hidden;z-index:0;font-family:Gerbera;font-size:20px;font-weight:500;line-height:28px;color:white;display:flex;flex-direction:column;align-items:center;padding-bottom:40px;@media (", "){height:650px;font-size:16px;line-height:24px;padding-bottom:60px;}"], _images_header_shadow_svg__WEBPACK_IMPORTED_MODULE_5___default.a, _constants__WEBPACK_IMPORTED_MODULE_12__["isTabletQuery"]);

var Lines = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Lines",
  componentId: "zk4l1p-1"
})(["position:absolute;height:100%;width:100%;background:url(\"", "\") center 0 no-repeat;background-size:cover;pointer-events:none;"], function (p) {
  return p.src;
});

var TextFirst = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__TextFirst",
  componentId: "zk4l1p-2"
})(["width:272px;margin-bottom:15px;@media (", "){margin-bottom:10px;}"], _constants__WEBPACK_IMPORTED_MODULE_12__["isTabletQuery"]);

var TextSecond = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(TextFirst).withConfig({
  displayName: "Header__TextSecond",
  componentId: "zk4l1p-3"
})(["width:396px;margin-bottom:0;@media (", "){width:272px;margin-bottom:10px;}"], _constants__WEBPACK_IMPORTED_MODULE_12__["isTabletQuery"]);

var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__TextWrapper",
  componentId: "zk4l1p-4"
})(["position:absolute;top:450px;right:420px;@media (", "){top:275px;right:200px;}@media (", "){top:275px;right:20%;font-size:16px;}"], _constants__WEBPACK_IMPORTED_MODULE_12__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_12__["isMobileQuery"]);

var PictureWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__PictureWrapper",
  componentId: "zk4l1p-5"
})(["position:absolute;top:450px;right:220px;display:flex;flex-direction:column;align-items:center;cursor:pointer;@media (", "){top:275px;right:90px;}@media (", "){top:275px;right:40px;}"], _constants__WEBPACK_IMPORTED_MODULE_12__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_12__["isMobileQuery"]);

var Header = function Header(_ref) {
  var setIsCartOpen = _ref.setIsCartOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isVideoOpen = _useState2[0],
      setIsVideoOpen = _useState2[1];

  var isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_12__["isDesktopQuery"], ")"));
  var isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_12__["isMobileQuery"], ")"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_11__["Container"], {
    color: "black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Lines, {
    src: isMobile ? _images_linesMobile_svg__WEBPACK_IMPORTED_MODULE_7___default.a : _images_lines_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_8__["Navigation"], {
    setIsCartOpen: setIsCartOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextFirst, null, "\u0414\u043B\u044F \u0433\u0435\u0439\u043C\u0435\u0440\u043E\u0432, \u0441\u0442\u0440\u0438\u043C\u0435\u0440\u043E\u0432 \u0438 \u043A\u0438\u0431\u0435\u0440\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextSecond, null, "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u043F\u043E\u0431\u0435\u0434\u0430 \u043D\u0430\u0434 \u0443\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C, \u0433\u043E\u043B\u043E\u0434\u043E\u043C \u0438 \u043F\u043B\u043E\u0445\u043E\u0439 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0435\u0439")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PictureWrapper, {
    onClick: function onClick() {
      return setIsVideoOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _images_youtube_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "youtube",
    width: !isDesktop ? 60 : 'auto'
  }), isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "\u0421\u043C\u043E\u0442\u0440\u0438 \u0432\u0438\u0434\u0435\u043E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_modal_video__WEBPACK_IMPORTED_MODULE_4___default.a, {
    channel: "youtube",
    isOpen: isVideoOpen,
    videoId: "QqCklnW_5r4",
    onClose: function onClose() {
      return setIsVideoOpen(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProductsChoose__WEBPACK_IMPORTED_MODULE_10__["ProductsChoose"], null)));
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _material_ui_core_useMediaQuery_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(133);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_sumby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var lodash_sumby__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_sumby__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);
/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_Logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_basket_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var _images_basket_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_basket_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);











var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navigation__Container",
  componentId: "sc-1feqko6-0"
})(["width:100%;display:flex;align-items:center;align-content:center;justify-content:space-around;padding:20px;background-color:transparent;z-index:100;@media (", "){padding:10px;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Container).withConfig({
  displayName: "Navigation__Wrapper",
  componentId: "sc-1feqko6-1"
})(["width:60%;@media (", "){width:70%;}@media (", "){width:80%;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var WrapperSecond = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Container).withConfig({
  displayName: "Navigation__WrapperSecond",
  componentId: "sc-1feqko6-2"
})(["align-content:end;justify-content:space-around;width:30%;@media (", "){width:20%;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navigation__MenuItem",
  componentId: "sc-1feqko6-3"
})(["font-family:Cervo;font-style:normal;font-weight:500;font-size:32px;text-transform:uppercase;color:#ffffff;@media (", "){font-size:24px;}@media (", "){font-size:16px;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"]);

var BasketWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navigation__BasketWrapper",
  componentId: "sc-1feqko6-4"
})(["width:110px;display:flex;align-items:center;color:white;justify-content:space-between;font-family:sans-serif;font-size:20px;text-align:right;letter-spacing:-0.3px;font-weight:500;cursor:pointer;"]);

var CityWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navigation__CityWrapper",
  componentId: "sc-1feqko6-5"
})(["width:120px;display:flex;align-items:baseline;color:white;justify-content:space-between;font-family:sans-serif;font-style:normal;font-weight:300;font-size:16px;line-height:22px;letter-spacing:-0.5px;cursor:pointer;"]);

var Navigation = function Navigation(_ref) {
  var setIsCartOpen = _ref.setIsCartOpen;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__["CartContext"]),
      cartItems = _useContext.cartItems;

  var isDesktop = _material_ui_core_useMediaQuery_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["isDesktopQuery"], ")"));
  var isMobile = _material_ui_core_useMediaQuery_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["isMobileQuery"], ")"));
  var amountAllItems = lodash_sumby__WEBPACK_IMPORTED_MODULE_4___default()(cartItems, 'amount');
  var fullPrice = lodash_sumby__WEBPACK_IMPORTED_MODULE_4___default()(cartItems, function (item) {
    return item.amount * item.product.price;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_Logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "logo",
    width: !isDesktop ? 99 : 'auto'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "#products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, null, "\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u042B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "#aboutUs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, null, "\u041E \u041D\u0410\u0421")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "#reviews"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, null, "\u041E\u0422\u0417\u042B\u0412\u042B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "#questions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, null, "FAQ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "#contactForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, null, "\u0421\u0412\u042F\u0417\u042C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperSecond, null, isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CityWrapper, {
    onClick: function onClick() {
      return setIsCartOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BasketWrapper, {
    onClick: function onClick() {
      return setIsCartOpen(true);
    }
  }, !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, fullPrice, " \u20BD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
    badgeContent: amountAllItems,
    color: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_basket_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "cart"
  })))));
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsChoose", function() { return ProductsChoose; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);


function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-style: italic;\n  font-weight: 500;\n  font-size: 52px;\n  line-height: 102%;\n  font-family: Cervo;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n  font-style: italic;\n  margin-top: -30px;\n  @media (max-width: 900px) {\n    font-size: 40px;\n    margin-top: -20px;\n  }\n  @media (max-width: 600px) {\n    font-size: 26px;\n    margin-top: -10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  &.active {\n    width: 0;\n    height: 0;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-top: 20px solid #f00;\n    margin-top: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: auto;\n  height: 31px;\n  background: #e30b17;\n  padding: 0 25px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n  &.active {\n    background: transparent;\n  }\n  @media (max-width: 600px) {\n    height: 25px;\n    padding: 0 13px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 70%;\n  width: 70%;\n  display: flex;\n  align-items: flex-end;\n  align-content: center;\n  justify-content: space-around;\n  @media (max-width: 900px) {\n    width: 90%;\n  }\n  @media (max-width: 600px) {\n    height: 80%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var productList = ['Батончик', 'Мармелад', 'Напиток'];
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var Triangle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var TextItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var ProductsChoose = function ProductsChoose() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
      mainProduct = _useContext.mainProduct,
      setMainProduct = _useContext.setMainProduct;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, null, productList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Item, {
      className: mainProduct === index && 'active',
      onClick: function onClick() {
        return setMainProduct(index);
      },
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextItem, null, item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Triangle, {
      className: mainProduct === index && 'active'
    }));
  }));
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,IDxzdmcgd2lkdGg9IjE0MyIgaGVpZ2h0PSI4OSIgdmlld0JveD0iMCAwIDE0MyA4OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDEwNCBDb3B5Ij4KPHBhdGggaWQ9IkZpbGwgNjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC45NDk3MSA1MS44ODgxTDEwLjQyNzQgMzUuMTM5TDI3Ljc0MzMgMzIuNzU4MkwyNi4zNjU2IDM2LjkxMThMMTMuMzg2NSAzOC43MzVMMTAuNjMxMiA0Ny4xMDk5TDIzLjYyNjcgNDUuMzE5OEwyMi4yNDkxIDQ5LjUwNzNMNC45NDk3MSA1MS44ODgxWk0yNC4wNjkxIDQ5LjIzNzRMMjUuNDMwMyA0NS4wNDk5TDM4LjQ0MzEgNDMuMjYwNkwzOS4xMjM3IDQxLjE0OTVMMjYuMTI3NCA0Mi45NTYyTDI5LjU0NjggMzIuNTA0OEwzMy45MDE4IDMxLjg4MDNMMzEuODI2MiAzOC4xNzhMNDAuNTAxNCAzNi45NjJMNDIuNTU5NyAzMC42OTgxTDQ2Ljg4MDggMzAuMDkwOUw0MS40MDMxIDQ2LjgyMjdMMjQuMDY5MSA0OS4yMzc0Wk01Ni43MTI2IDQwLjcxMDdMNTAuOTggMzUuNTI3NUw1OS42Mzc5IDM0LjMyODhMNjAuMzE4NSAzMi4yMTc3TDUxLjY3NzEgMzMuNDMzN0w0OC45MDQ0IDQxLjc5MTRMNTYuNzEyNiA0MC43MTA3Wk00My4yMDYzIDQ2LjU2OTZMNDguNzAwNSAyOS44Mzc4TDY2LjAzMzcgMjcuNDM5Nkw2Mi41ODA0IDM3LjkyNDlMNTkuOTk1IDM4LjI3OTZMNjEuOTE3MiA0MC4wMDEzTDYwLjUzOTUgNDQuMTg4OEw0My4yMDYzIDQ2LjU2OTZaTTYyLjM1OTQgNDMuOTM1NUw2Ny44MzcxIDI3LjE4NjRMODQuMzcwOSAyNC45NTczTDgyLjk5NDEgMjkuMTExOEw3MC43OTYyIDMwLjc4MzJMNzAuMTE2NSAzMi44NTk2TDgyLjI5NjEgMzEuMjIyMUw4MC45MzUgMzUuNDA4N0w2OC43Mzg4IDM3LjA0NzFMNjguMDQxNyAzOS4xNTczTDgwLjI1NDQgMzcuNDg2TDc4Ljg5NCA0MS42NzM1TDYyLjM1OTQgNDMuOTM1NVpNODAuNjk2NyA0MS40MzY3TDg2LjE3NDQgMjQuNjg3NkwxMDMuNTA4IDIyLjI3MzhMMTAwLjA3MyAzMi43NTgyTDk3LjQ4NjMgMzMuMTEyOUw5OS4zNzQ2IDM0LjgzNTRMOTcuOTk2OSAzOS4wMjIxTDg4LjQ1MzggMzAuMzc3NEw5Ny4xMjkxIDI5LjE2MjJMOTcuNzkyMyAyNy4wODU4TDg5LjEzNDQgMjguMjY3MUw4NS4wMTc5IDQwLjgyODdMODAuNjk2NyA0MS40MzY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggaWQ9IkZpbGwgNjciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTMuMDg2NCA2MC4xODE0TDQ3LjM1MzggNTQuOTk4Mkw1NS45OTUyIDUzLjc5OTZMNTYuNjkzMSA1MS42ODkzTDQ4LjAzNDQgNTIuODg4TDQ1LjI5NTUgNjEuMjYyMUw1My4wODY0IDYwLjE4MTRaTTEwMy4xMzIgNTcuMjYwMUwxMDguNjI2IDQwLjUxMThMMTIxLjE5NiAzOC43NzI4TDEyMy43MTQgNDYuNTA1MkwxMTguNDA3IDU1LjE0OTlMMTAzLjEzMiA1Ny4yNjAxWk0xMTUuODM4IDUxLjU4NzdMMTE4Ljk1IDQ3LjA2MjhMMTE3LjY1OCA0My4yNjM5TDExMS42MDIgNDQuMDkxM0wxMDguODYzIDUyLjQ0ODJMMTE1LjgzOCA1MS41ODc3Wk0zOS41OTc3IDY2LjA0MDFMNDUuMDkxOSA0OS4yOTFMNjIuMzkxMiA0Ni45MTFMNTguOTcyNiA1Ny4zNzg5TDU2LjM2OTkgNTcuNzUwMUw2Mi4xMDI1IDYyLjkzMzNMMzkuNTk3NyA2Ni4wNDAxWk01OC43MTcgNjMuMzg5N0w2NC4yMTEzIDQ2LjY1N0w2OC41NDk3IDQ2LjA2NjRMNjQuNDMyMyA1OC42MTE1TDczLjEwODQgNTcuNDEyOEw3Ny4yMjQxIDQ0Ljg1MTJMODEuNTQ1MyA0NC4yNTk3TDc2LjA1MDIgNjEuMDA4OEw1OC43MTcgNjMuMzg5N1pNNzcuODcxIDYwLjc1NTZMODMuMzQ4NyA0NC4wMDY1TDg3LjY4NjMgNDMuNDE1OEw4Mi4xOTIxIDYwLjE2NDFMNzcuODcxIDYwLjc1NTZaTTg0LjAyOCA1OS45MTE2TDg5LjUwNTcgNDMuMTYyNEw5My44MjYgNDIuNTM3OUw4OS43MDk0IDU1LjA5OTZMMTAyLjcwNiA1My4zMDk0TDEwMS4zMjggNTcuNDk2OUw4NC4wMjggNTkuOTExNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGlkPSJGaWxsIDY5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzNi45MjcgMzEuOTg5NEwxNDEuOTQ2IDM0Ljg3NjhDMTQyLjEzMyAzNC45NDQ0IDE0Mi4yMTggMzUuMDc5NyAxNDIuMTE2IDM1LjMzMjFMMTQwLjc1NSAzOS40MTgxQzE0MC42ODcgMzkuNzA2MSAxNDAuNTMzIDM5Ljc3MjkgMTQwLjI3OCAzOS45MjU1TDEzNS4yNiA0Mi44MTJDMTM1LjAyMiA0Mi45MTM1IDEzNC43MzMgNDIuOTEzNSAxMzQuNTggNDIuNzc4MkwxMjkuNTYxIDM5LjkwODJDMTI5LjM3NSAzOS44MjQgMTI5LjMyNCAzOS43MDYxIDEyOS4zNzUgMzkuNTE5NkwxMzAuNzE5IDM1LjM4MzNDMTMwLjc2OSAzNS4xNDY1IDEzMC45NTcgMzUuMDI4NSAxMzEuMTk1IDM0Ljg5NDFMMTM2LjI2MyAzMS45NzIxQzEzNi41MDIgMzEuODcxNCAxMzYuNzc0IDMxLjg4NzkgMTM2LjkyNyAzMS45ODk0Wk0xMTIuNTY5IDYwLjA4NUwxMTIuMDc2IDYxLjU1MzRDMTExLjYzMyA2Mi45NzE1IDExMC4yMzggNjMuODgzOSAxMDguMzY3IDY0Ljg5NjFMNjcuNTc2NSA4OC4yNjM5QzY1LjgyNDMgODguOTIyMiA2My45MTg2IDg5LjA3NDggNjIuNjc3MSA4OC40NjZMMzIuNjcwOSA3MS4xNjA4TDExMi41NjkgNjAuMDg1Wk0zMC44MzM2IDI4Ljc2NDhMMzEuMzI3IDI3LjI5NjRDMzEuNzY5MSAyNS44Nzc1IDMzLjE2NDIgMjQuOTY1OSAzNS4wMzUyIDIzLjk1MjlMNzUuODI2IDAuNTg1MTEyQzc3LjU5NDcgLTAuMDczMjA0NSA3OS40ODMgLTAuMjI0OTk3IDgwLjcyNDYgMC4zODI5OTdMMTA5Ljk0OSAxNy4yNTAxTDEwOS43NjEgMTcuODI0MkwzMC44MzM2IDI4Ljc2NDhaTTEwOS40NTYgMTYuOTc5NEwxMDkuOTQ5IDE3LjIzMjZMMTEwLjM5MSAxNS44NjU3QzExMC41NDQgMTUuMzA4IDExMC45MzYgMTUuMDA0NCAxMTEuNDggMTQuNjgzNUwxMjMuNjQyIDcuNzI3NDhDMTI0LjE4NyA3LjQ3NDIyIDEyNC44NSA3LjUyNDU0IDEyNS4yMDcgNy43NjEzTDEzNy4yIDE0LjYzMjRDMTM3LjYwOCAxNC44MzUzIDEzNy43OTUgMTUuMTA1OSAxMzcuNjA4IDE1Ljc0NzdMMTM0LjM3NiAyNS41MDYxQzEzNC4xODkgMjYuMTQ4IDEzMy43OTggMjYuMzUwOSAxMzMuMTg1IDI2LjczODZMMTIxLjIxIDMzLjU1OTRDMTIwLjY2NSAzMy44MTI2IDExOS45ODUgMzMuODEyNiAxMTkuNTkzIDMzLjU0MjlMMTA5Ljk0OSAyOC4wMjE0TDEwOS40MzkgMjkuNjI2QzEwOS4yODYgMzAuMDk4NyAxMDkuNDM5IDMwLjM4NTggMTA5Ljg0NyAzMC41ODc5TDExOS4zNzMgMzYuMDU5TDEwMi4zNzkgMzguNDIyNUwxMDkuNDU2IDE2Ljk3OTRaTTMzLjk0NjQgNzEuODY5NUwyNi42NDg5IDY3Ljc2N0wyOC40MDExIDYyLjM4MDhDMjguNTg4MyA2MS44NDA1IDI4LjQzNDkgNjEuNjIxIDI4LjA3NzcgNjEuNDUxOUwyNC45OTg5IDU5LjY5NjRDMjUuMDUwMSA1OS44MzE3IDI1LjA1MDEgNjAuMDE3MyAyNC45NjUxIDYwLjIzNjhMMjIuMzI4NiA2OC4yMjIzQzIyLjE3NTEgNjguNzYzNSAyMS44NjkxIDY4Ljk0ODMgMjEuMzQxOSA2OS4yNTE5TDExLjU0MzkgNzQuODU3NUMxMS4wNjc5IDc1LjA2MDQgMTAuNTU3MiA3NS4wNjA0IDEwLjIxNzQgNzQuODIzN0wwLjM4NDY5MSA2OS4yMDE2QzAuMDQ0ODA4OSA2OS4wMTYgLTAuMDczOTg1IDY4Ljc5NjUgMC4wNDQ4MDg5IDY4LjQwOEwyLjY5ODcgNjAuMzM3NEMyLjgwMDk5IDU5Ljg4MiAzLjEwNzA1IDU5LjYyODggMy41NjU3MyA1OS4zNzU1TDEzLjUzNDUgNTMuNjY4NEMxMy45NzU5IDUzLjQ2NjMgMTQuNTM3NyA1My41MTY3IDE0LjgyNzIgNTMuNzAyM0wyMS4zOTMxIDU3LjQ2NzRMMjIuODM5MiA1Mi45NzYzTDQxLjAyMjkgNTAuNDYxTDMzLjk0NjQgNzEuODY5NVoiIGZpbGw9IiNFMzA2MTMiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAzMSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDMyIj4KPHBhdGggaWQ9IlN0cm9rZSA4NDEyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5IDI3LjA1OTZIMkw1IDEwSDI2TDI5IDI3LjA1OTZaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDg0MTMiIGQ9Ik0xMSA5VjUuMTExMTFMMTUuNSAyTDIwIDUuMTExMTFWOSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chocobar_halva.b198360d.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chocobar_mango.2f1ead02.png";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(53);

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

var _requireById = __webpack_require__(21);

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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(152);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(153);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  html, body {\n    margin: 0;\n    padding: 0;\n    max-width: 100vw;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n  *, *::before, *::after {\n    box-sizing: inherit;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  @font-face {\n    font-family: \"Cervo\";\n    src: url(\"fonts/CervoItalic.otf\");\n    font-style: italic;\n  } \n  @font-face {\n    font-family: \"Cervo\";\n    src: url(\"fonts/CervoRegular.otf\");\n    font-style: normal;\n  }  \n  @font-face {\n    font-family: \"Gerbera\";\n    src: url(\"fonts/Gerbera.ttf\");\n    font-style: normal;\n  }  \n  @font-face {\n    font-family: \"Gerbera\";\n    src: url(\"fonts/GerberaMedium.ttf\");\n    font-weight: 500;\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_8__["default"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__["CartProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_8__["default"], null))), target);
  };

  render(_App__WEBPACK_IMPORTED_MODULE_8__["default"]);

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_8__["default"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(151)(module)))

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescription", function() { return ProductDescription; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_pathRed_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);
/* harmony import */ var _images_pathRed_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_pathRed_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _data_productsData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _Composition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);
/* harmony import */ var _data_allData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8);













var headerTextAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{opacity:0;transform:translateY(40px);}25%{opacity:0;transform:translateY(40px);}40%{opacity:1;transform:translateY(0);}"]);
var descriptionTextAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{opacity:0;transform:translateY(40px);}40%{opacity:0;transform:translateY(40px);}60%{opacity:1;transform:translateY(0);}"]);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__Container",
  componentId: "sc-1bc6gyu-0"
})(["height:70%;width:900px;margin-top:90px;font-family:Gerbera;font-style:normal;margin-left:50px;@media (", "){width:90%;margin-top:120px;}@media (", "){margin-left:0;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__Title",
  componentId: "sc-1bc6gyu-1"
})(["font-family:Cervo;font-style:italic;font-weight:500;font-size:60px;line-height:102%;text-transform:uppercase;color:#e30b17;@media (", "){font-size:36px;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var TitleBlack = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Title).withConfig({
  displayName: "ProductDescription__TitleBlack",
  componentId: "sc-1bc6gyu-2"
})(["color:#151524;@media (", "){font-size:16px;}@media (", "){margin:10px 0;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"], _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var DescriptionBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__DescriptionBox",
  componentId: "sc-1bc6gyu-3"
})(["width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;margin-top:40px;animation:1.3s ", " linear;@media (", "){grid-template-columns:1fr;animation:none;}"], descriptionTextAnimation, _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var DescriptionBoxItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__DescriptionBoxItem",
  componentId: "sc-1bc6gyu-4"
})(["display:flex;flex-direction:row;align-items:flex-start;width:90%;@media (", "){width:auto;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var DescriptionBoxItemValue = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__DescriptionBoxItemValue",
  componentId: "sc-1bc6gyu-5"
})(["margin-left:20px;"]);

var StyledPath = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var active = _ref.active,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["active"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_images_pathRed_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"], props);
}).withConfig({
  displayName: "ProductDescription__StyledPath",
  componentId: "sc-1bc6gyu-6"
})(["color:", ";transition:300ms color cubic-bezier(0,0,0.2,1);"], function (p) {
  return p.active ? '#FF2727' : '#00C0F3';
});

var ItemChooseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__ItemChooseWrapper",
  componentId: "sc-1bc6gyu-7"
})(["display:flex;font-family:Cervo,Arial;font-style:normal;font-weight:500;font-size:16px;line-height:20px;letter-spacing:0.2px;text-transform:uppercase;padding-bottom:40px;flex-wrap:wrap;@media (", "){display:none;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"]);

var ItemChoose = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__ItemChoose",
  componentId: "sc-1bc6gyu-8"
})(["position:relative;width:150px;"]);

var ProductImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__ProductImage",
  componentId: "sc-1bc6gyu-9"
})(["position:absolute;background:url(\"", "\") center center no-repeat;background-size:contain;width:135px;height:135px;top:", "px;left:", "px;"], function (p) {
  return p.src;
}, function (p) {
  return p.top;
}, function (p) {
  return p.left;
});

var ItemChooseValue = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__ItemChooseValue",
  componentId: "sc-1bc6gyu-10"
})(["margin-top:10px;margin-left:-17px;margin-right:17px;color:", ";transition:300ms color cubic-bezier(0,0,0.2,1);"], function (p) {
  return p.active && '#E30B17';
});

var DescriptionImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__DescriptionImage",
  componentId: "sc-1bc6gyu-11"
})(["background:url(\"", "\") center 0 no-repeat;background-size:contain;min-width:40px;height:40px;"], function (p) {
  return p.src;
});

var AnimatedTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProductDescription__AnimatedTitle",
  componentId: "sc-1bc6gyu-12"
})(["animation:1.3s ", " linear;@media (", "){animation:none;}"], headerTextAnimation, _constants__WEBPACK_IMPORTED_MODULE_6__["isMobileQuery"]);

var ProductDescription = function ProductDescription(_ref2) {
  var product = _ref2.product;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      activeProduct = _useState2[0],
      setActiveProduct = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_9__["DataContext"]),
      allProduct = _useContext.allProduct,
      setAllProduct = _useContext.setAllProduct,
      setAllProductTaste = _useContext.setAllProductTaste,
      allProductTaste = _useContext.allProductTaste;

  var currentProduct = _data_productsData__WEBPACK_IMPORTED_MODULE_7__["allProductsData"][allProduct || 0];
  var currentProductTaste = currentProduct.items[allProductTaste || 0];
  var isTablet = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()("(".concat(_constants__WEBPACK_IMPORTED_MODULE_6__["isTabletQuery"], ")"));

  var chooseProductType = function chooseProductType(index) {
    setActiveProduct(index);
    setAllProduct(index);
    setAllProductTaste(0);
  };

  if (isTablet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, null, _data_productsData__WEBPACK_IMPORTED_MODULE_7__["allProductsData"].map(function (x, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AccordionItem__WEBPACK_IMPORTED_MODULE_10__["AccordionItem"], {
        product: x,
        index: index,
        key: x.name
      });
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ItemChooseWrapper, null, _data_allData__WEBPACK_IMPORTED_MODULE_11__["productCategoryList"].map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ItemChoose, {
      key: item.image,
      onClick: function onClick() {
        return chooseProductType(index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ProductImage, {
      src: item.image,
      left: item.leftOffset,
      top: item.topOffset
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledPath, {
      active: activeProduct === index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ItemChooseValue, {
      active: activeProduct === index
    }, item.name));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AnimatedTitle, {
    key: currentProductTaste.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Title, null, currentProductTaste.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TitleBlack, null, " ", currentProduct.tagline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DescriptionBox, {
    key: allProduct
  }, currentProduct.details.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DescriptionBoxItem, {
      key: item.description
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DescriptionImage, {
      src: _data_allData__WEBPACK_IMPORTED_MODULE_11__["iconList"][index]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DescriptionBoxItemValue, null, item.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Composition__WEBPACK_IMPORTED_MODULE_8__["Composition"], {
    name: currentProductTaste.name,
    taste: currentProductTaste.taste,
    composition: currentProductTaste.composition
  }));
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_cinnamon.71146723.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cybersport.899ad839.svg";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery/useMediaQuery");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("/Users/chesminsky/Desktop/cyber-landing/node_modules/react-static/lib/browser");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 66 */
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
/* 67 */
/***/ (function(module, exports) {

module.exports = require("/Users/chesminsky/Desktop/cyber-landing/artifacts/__react_static_root__/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(23);

var _router = __webpack_require__(25);

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
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAABUCAYAAABz09mAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2BSURBVHgB7V2LkuMoDGyc+f8vvjFX2TrvMRo9Mbaxo65KBSQhMEhtILO1BYknoWA8KhIJgiMCLXEM7rpWSTwPRBLHvPjEtUmSuQmSOOZBrsUYJPmcgAzW65FrcC6SWAYgg/Y65NzfD0k6/yGD9xrkvD8HH0kmGcDXIOf9M/BYUskAPh8555+NR5BJBvH5yDlPtLglkWQQn4+c84SGWxBJBvG5uHq+r+w/f5GIY9o5S+I4F2fM9xPWNEnmJ6abjySO87F3znPN4ngiEV36TBmE56N3znOtxuPuhHLZ+DMYz0fPnOc6nYu7Ecrp482APB/ROc81mgczE8qpY8ugPB/eOT9rbfKXlv2Y6TlOGUsSx/koO/VH9Dkz7kouV4778L6TOM7BUWSR63cfYrlinIf1mYE3FiOOIUevieX/ST9d5p3EQf3clTjuNu4SkH8CmV+d0DMSypFjGu77zufpGRIsMgYPSRxJJKOD5+2voN/vqPHcKuE6MHIMw3zN9FeMI3zN8DyRY0i0vgc9QRNpE/Xvtd8b7Eck/53vK4b4OftvCo6+BDzzeXouPL1EccZuqu7Uj/AxkjyOJsYzfR3dz24foy/pogleSb1nPK0P6pdr25PwPXYacWgEUgzbXtSAbq9tdbbdZEXwW5i2nrEVQc61L4qOG4dk58URR8Yz2/3BiDP1nkSMXBpq8tH9RHVt4FtzWhTZG4th24vRZFAD7TXbiEyT97bx2hx1bLvyCNLdt7V19rbz6qNEtefycI/t3jqVeY4krYzKNV9e9O4U6o6ypOsloRlJZwQp9dqOaN/VX09ARkmjN1mprCeZa7CdVxexa8fgJQzrezQq9ASsRptqtOslH8uvVrZkxWl/FKGMJpw9bcP9RALyiJ1BDzF4krnHlpajdt4dBrebqE25KG1GEkhP8mnJTXWVKWt2lt9ekonorHnw2PTsakbp99iHfHsCccSOoYcUaN2y0Ww9pCKRQRX0i7N9W4fSr0QUEtnsJY+e5OGSmbOh8tXpw/Kvyct//RShP9q+wE+EMPxBkXnJpZc0vAk/dIdjBaBHV4x2vWWv3qOzbLiy1s4iimLIPP1y/SyCzwp+HXqCbVXsuN0CZ7MKPqsikwikl1g8ehi+wdhpZa7usRlBLqOIwUUevcThJQ2uj2L46iGEyNvcq5N8vbFATnSujfRLSYFNJFt5EXRgfFPsCcIa/KbEQxOflj32EhFYbSUbAK5n8RANLUfrHhLZY9djY/r4wliUQN2b5K3eQxwWEfTIrX44IgGRS/5bUlkU/9qYaZsWe9+IVdBz236LJDSZZQPF7o1VaQPH2GDYc88KxQZMmx5s7aiPwthwdj0wfUjB1uo1mbfM6azgjxAFV/cQxBLwp/mXEr4IbTSCKA5f3LijsAjESiYqb/VWYrafFX6CWBEnmrZda1OIP8AmBMA/F9x4NLtIGYrcqlvtXe1GEUcRbLwk0da9xCElYQ8xcD5oHxYhSP0tytjoc72McUmE0e5aeiAFN1f3JJpFApZuIxQ05cqUATv5NRKCoINiy/UhfUu6Vl8EWxhtsaMOp15sN+qosk0AYJPIVi4dZYlAiiHjEp8eETTy4PxQQuAuLhf4iWYRfHGE4bkzicDzVpTs2rp2XPCQRPtN9e03Z1OZ/ulOo22zCOMD468YdkCMOGrjl+aORBTtGBbSR2TNOTIoQfkf4tA6jgxKsm1ZtQj20sRo4JJES1LATmQtqdtyK1sMH7SukcILPsKhZEHLwP5g8pCJRg4QdFoytzYSeVA98JtYPASlEYXUHuCPPZEylQH83LaQ8qQwPqj9VufKHrD2nh2HNEA6mFZndmz01TK9RCgV8huW65PKODKj/dC+uWMHyFgpuXCkIe0uFsGOIy7APooBMQJB87ycjAt4iyjaOnefISV9K9/i4RsykWg+JL8wbMHIF+HZNBk3P9x8vdHGJSUKD7gY18qtLeDM4S9iXJTBFEXGPXQrb3UecMy6EUoxxlNIWfq0PqjuHaD06NGS2dKMpe2/DSwrYQvpn5LGC78JpbUF9LsXQCYQjVhoUHO6tiz9cZeUgG1ZS/J3nRIFJYgVv3cnK2ziaMlos1nAJ/wC+QhFSYGSkSSn5ICmLM27lNhcPvSSh4Yf9l/KAMHoAH6ANMkjg+Meuhg6jhxAyi/837d2/1DBJ2Mldq1sxe+dgvRsXPtKxqZBIgT6WSDPRVumfRahT/ocUlmqS8nFfbgdwzd+Jvg/kEmEIxKNQCw9HVP7omj19JkKeMJo71M00uBAiYbquPZa3cpJTf9X9yUMdDOCUx+ZAFqW/NIJo8kHQN1FQChzxLM4+iuKnHum2vill1ktSa1kbBU8yVjr0kK66AV0QpFk29glrIotRyDfRCftJjYCeX9/EZlGHm07baeiEdf2gqBrs+LnWn/j9zq1L4UV/Dpy8aLlHJdbEULg0NPmb8ORtsXRphj2NLCpDuCJg9p4kqclDk5vXYBK9xGS7EXqX8Ruq9NL0hfjG/h5nCmCTeSiFfi9A/L+1FuZb65MjyytbBU+m44jg2+mbVXK0vGHksi3ILd2Kpqc7kbo/HjmDuDnmtqiowyH/I/uhRh6yEOSS3VpUrayNQFcO9q2Kp/VYaMFCNceSt9af/Qizzpja2WtHUUrs8h/extS0q3giV7zC/C7LkkHxl81/IPYSXVOrtkUxcYrs2C16d5BRBH9Ow7PokhBR+VSvS1zAWQFpbSzkOpU3m5RvR/6i8tK5NtlqySn39suw/pVZlHGUBiboug3LMYcgcg1aGS2MvWV0W9y6RcValthk6U0Rm5s2rN5ZE9E6f0DMOuNRO2K0V6acI1E6JvHQyBcuZVxxLIoNlKCUoLYyt9ETvXbDvCF30TAEQdHXnS8i/A89DgDYQ7oT75amYImJLcL2ur0CMAdXzx66T5Dai+1eWO7i9GOJ9zxQSMricBG4DTiGvGXox4S0Ww8Ow/OX0seVLa15wiCfnPkAYecJq9GEFr5JfhYBLlGHLQO8OQhfaDUaRnQSUOCRCD0yCbdVWx67g5CIgSOLCpk4qjQiaJ2fug8QJFzOjh1h2P0v46Nkgi1o5NGg7Qq/jjSockulS3SAHRC0UgE0Amkbcf95SjdIbQ+oIyBI5b2ubWdFJzfdI09REJJoy17klYjBm+ie8mghyQA3z0ZNxdaHUyZq1vyIeh5YxzZRwnoimHjJY2t3JMwBXay0mSX6pKMIxCAJyhtbABPNtqzad9cObLWWvK0SQvIJMG1AX4eNaphqyX2t2IDZowREgFsEoXDFoodmLKlk2Q/9GcQB8UIIrFIg9aLw05LkK3OJQqXoFLCS4SytXvBJiPOB5Sx0GMKhPECNnFY5MHVLUhJwiWc9/Jzs5V+4VqNdnDYVWW8gE0egEwKmp76BlP2EoVEEFMSh4QRhMLp95BMWy+CzEpcK+m5Opf8UGy5MdGjCecLjLyVATKRwFn3wEqgTcbdgwByUks2nt2GlMQrYokvJTlHAt5vr04rc3VJ9ks3E3G0iI6rBHUlaGOVNZKQdiGSHLDJQyMO7dgC6ITDPZf32SHYWZCSwfvmlpLTSwaSf24cmg8oYwDjA9BJBPCTgocc9pLGD/2sxEExkkg4femwK45vjTw0HVe37jFg9Nvqpd0Fp4fgQ0JBfL1WRkaT6JvoqI1FOtTfyvRl+dJkEGQ95IGOskUMGrlIMtHmLsShoecZosRRGTvpbaztANp2WtJbdgj6gFLXvrWyJtPkLawA9ryZubc8LVt1jz9rPHCMx5JbviJlT92SizZPIA4OI8jEY+NJSulOoSg+PDLrW/Mv+bH8cxhJHBKRRBLWk+hc2bLx+vH27SUMS2fZS208OtHmqcQh4QhC0d7O2hvck9iSn95dg3ccUOxh2HnsPcFPZV6SuLLM6d6fEmwDRa/JPL48Pkz9pxEHxZ7n9yaatUvR7PeSQSuPjgOGzNJJ8sjbb+/bda+u5xgBZx8Rm0h7SRbRmzafThwSovMSfVv3JLFFBh6fPbuKyI6rFz2B3vvGHUEsmmyE7RFtvHqXXRJHH6LJZNV72ngTPrIj8Iwzoo9g71tw5FtfkvW2OerZLF2Pncs2iWMcRiSZN3EjO4NRR4+ozQhEgt1jf7X+DNtT+kniOAbeed1r10tWo3cSR8XRdrkY6avC73uk3ah2e9v2+gjZJ3Eci975Pavd3vWfPX5GJOCRPmcaXxLHxBg130eu2x3GuBdHJOyVfe71HW6fxHEtzpr/p/UzO84kptNJ441c6Dlw9jrMsO53iL0rdiYapjkmJXHMgyvWYvb1P2J8s5GBF1PdrUT/e4TEsbgykfMlMh+mJbkMlvkw25pkjByLO92H/EUGxbyYaW0yTsbi9r/qZEDMjU+8g3gKZjpmDB9LLvw9kAQyL2a/bD1kfEkc98Id1+sJMXbHX2IOHXMSxz3xlHW7+jnu+tOshlOeKYnjvsi1S1CcRoQZfM9AruNn4/SdUwbc85Br+hm49JiVQfY5yLW+N6a6j8lg+lzk2t8DU17gZvAkMgbmw/S/9mTQJCgyJs7H7X4WziBJeJBxMgaP+buRDIhELzJ2ZDzxD8t+IBc/MRqfEFOPJwYLSRyJKzBb3H08EUTxL2V4KTz0NIY0AAAAAElFTkSuQmCC"

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chocobar_main.3bf372d6.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_blueberries.dd917a8f.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_raspberry.14f2301b.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jelly_main.a3895f44.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/drink_main.6b33c898.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/energotonic.a694abce.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fortifying_complex.21358c24.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tonic_complex.411d6faf.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/calming_complex.5636a559.png";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTE4LjEwOTUgMjIuMTYzNkwyMC45Nzg2IDM5LjI3MjFMMTIuMzM2NyAzMy4wOTkzTDMuNjk0ODIgMzkuMjcyMUw2LjYxMzMyIDIyLjE5MzIiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIzLjQ0NzkgMTguOTAxMUwxMi4zMzY5IDI1LjY5MTJMMS4yMjU4MyAxOC45MDExVjcuNzkwMDdMMTIuMzM2OSAxTDIzLjQ0NzkgNy43OTAwN1YxOC45MDExWiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMzM2OSAxOS41MTg1TDE4LjUwOTYgMTMuMzQ1N0wxNi4wNDA1IDkuNjQyMDNMMTIuMzM2OSAxMi4xMTExTDguNjMzMTggOS42NDIwM0w2LjE2NDA2IDEzLjM0NTdMMTIuMzM2OSAxOS41MTg1WiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MiA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDM0LjM5NUwzLjQ3ODI2IDM5LjM1MTVIMzEuMzM1NkwzNC4wNDM1IDM0LjE1MzhMMjAuODI2MSAxNy44NzMzVjQuNjU1ODhIMTQuMjE3NFYxNy44NzMzTDEgMzQuMzk1WiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuMTMwNSAzLjAwMzc0TDIyLjQ3ODMgNC42NTU5MUgxMi41NjUzTDEwLjkxMzEgMy4wMDM3NEwxMi41NjUzIDEuMzUxNTZIMjIuNDc4M0wyNC4xMzA1IDMuMDAzNzRaIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIwLjgyNjEgNy45NjAyMUgxNy41MjE3IiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIwLjgyNjEgMTQuNTY5SDE3LjUyMTciIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjAuODI2MSAxMS4yNjQ2SDE3LjUyMTciIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3LjY2ODMgMjYuODc2M0w0MC4xOTIzIDI0LjMyNThMMzguNjM0NSAyMS44Njk3TDM1LjAyMTEgMjIuNzg2MUwzMi42Nzc3IDIxLjUyOTlMMzEuNjEwNiAxOEgyOC41ODE3TDI3LjUxNDYgMjEuNTI5OUwyNS4xNzEyIDIyLjc4NjFMMjEuNTU3OCAyMS44Njk3TDIwIDI0LjMyNThMMjIuNTI0IDI2Ljg3NjNWMzAuMTIyN0wyMCAzMi42NzQyTDIxLjU1NzggMzUuMTI5M0wyNS4xNzEyIDM0LjIxMzlMMjcuNTE0NiAzNS40NjkxTDI4LjU4MTcgMzlIMzEuNjEwNkwzMi42Nzc3IDM1LjQ2OTFMMzUuMDIxMSAzNC4yMTM5TDM4LjYzNDUgMzUuMTI5M0w0MC4xOTIzIDMyLjY3NDJMMzcuNjY4MyAzMC4xMjI3VjI2Ljg3NjNaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIuOTIzMSAyOS43OTIzTDMwLjA5NjIgMzEuNzMwOEwyNy4yNjkzIDI5Ljc5MjNWMjcuMjA3N0wzMC4wOTYyIDI1LjI2OTJMMzIuOTIzMSAyNy4yMDc3VjI5Ljc5MjNaIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCAzOSAzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZD0iTTE0LjQ1NDYgMTkuNVYzOCIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMi43NzI3IDExLjYxNjVMMSAxNS4yOTYzIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjQxMDUgMTguODg5TDE0LjQ1NDUgMTkuNDk5NUwxIDE1LjI5NDlWMzMuNzk0OUwxNC40NTQ1IDM3Ljk5OTVMMjcuOTA5MSAzMy43OTQ5IiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMi45NTQ0IDE1LjI5NTRMMjQuNTQ1MyAxNy44MTgyTDE2LjEzNjIgMTUuMjk1NFYzLjUyMjcxTDI0LjU0NTMgNi4wNDU0M0wzMi45NTQ0IDMuNTIyNzFWMTUuMjk1NFoiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIuOTU0NCAzLjUyMjczTDI0LjU0NTMgMUwxNi4xMzYyIDMuNTIyNzMiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjQuNTQ1NCA2LjA0NTUzVjE3LjgxODMiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM4IDI4Ljc0OTlMMzEuMjcyNyAzMS4yNzI3TDI0LjU0NTQgMjguNzQ5OVYyMS4xODE4TDMxLjI3MjcgMjMuNzA0NUwzOCAyMS4xODE4VjI4Ljc0OTlaIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM4IDIxLjE4MThMMzEuMjcyNyAxOC42NTkxTDI0LjU0NTQgMjEuMTgxOCIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMS4yNzI5IDIzLjcwNDVWMzEuMjcyNiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS45OTk4IDFMMzguMTczOCA2Ljc4MjYxTDM0LjI4NzggMzIuMzkxM0wxOS45OTk4IDM5TDYuMjAwODggMzIuMzkxM0wxLjgyNTkzIDYuNzgyNjFMMTkuOTk5OCAxWiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNC43ODIgMTIuMTMwNFYxNi45MTNMMTkuOTk5NCAxOS43ODI1TDE1LjIxNjggMTYuOTEzVjEyLjEzMDQiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0Ljc4MiAxMi4xMzA0TDE5Ljk5OTQgMTVMMTUuMjE2OCAxMi4xMzA0TDE5Ljk5OTQgOS4yNjA4NkwyNC43ODIgMTIuMTMwNFoiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTkuOTk5NSAxNVYxOS43ODI2IiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5LjU2NDcgMTkuNzgyNlYyNC41NjUyTDI0Ljc4MjEgMjcuNDM0OEwxOS45OTk1IDI0LjU2NTJWMTkuNzgyNiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkuNTY0NyAxOS43ODI1TDI0Ljc4MjEgMjIuNjUyMUwxOS45OTk1IDE5Ljc4MjVMMjQuNzgyMSAxNi45MTNMMjkuNTY0NyAxOS43ODI1WiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNC43ODIyIDIyLjY1MjJWMjcuNDM0OCIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOS45OTk1IDE5Ljc4MjZWMjQuNTY1MkwxNS4yMTY5IDI3LjQzNDhMMTAuNDM0MyAyNC41NjUyVjE5Ljc4MjYiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5Ljk5OTUgMTkuNzgyNUwxNS4yMTY5IDIyLjY1MjFMMTAuNDM0MyAxOS43ODI1TDE1LjIxNjkgMTYuOTEzTDE5Ljk5OTUgMTkuNzgyNVoiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTUuMjE2OCAyMi42NTIyVjI3LjQzNDgiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCAzNiAzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMSAzOEgyNS4wMDAxVjIwLjk0NzVIMTFWMzhaIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNSAzOEgzNVYzMC40MjExSDI1VjM4WiIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAzOEgxMVYzMC40MjExSDFWMzhaIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDM0LjIxMDJIMjEiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTkgMzQuMjEwMlYyNC43MzY2TDE2IDI2LjYzMTMiIHN0cm9rZT0iI0UzMEIxNyIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2IDdIMjBMMTggMUwxNiA3SDEwTDE0LjUzNiAxMC41M0wxMiAxN0wxOCAxMy4zNjRMMjQgMTdMMjEuNDY0IDEwLjUzTDI2IDdaIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC41Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS42NzM5IDE1Ljg2OTZMMjkuNTg3IDI1Ljc4MjZMMjIuNTY1MiAzOUg4LjUyMTc0TDEuNSAyNS43ODI2TDExLjQxMyAxNS44Njk2VjcuNjA4N0w4LjEwODcgMUgyMi45NzgzTDE5LjY3MzkgNy42MDg3VjE1Ljg2OTZaIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI3LjkzNDkgMTkuMTczOVYxMi41NjUyTDI2LjI4MjcgNS45NTY1NEgzOS41MDAxTDM3Ljg0NzkgMTIuNTY1MlYzNS42OTU3TDMyLjg5MTQgMzlMMjcuOTM0OSAzNS42OTU3IiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguMTA4NCAzMC43MzkxSDIyLjk3OCIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMi44OTE2IDMwLjczOTFIMzcuODQ4MSIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMi44OTE2IDI1Ljc4MjZIMzcuODQ4MSIgc3Ryb2tlPSIjRTMwQjE3IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMi44OTE2IDIwLjgyNkgzNy44NDgxIiBzdHJva2U9IiNFMzBCMTciIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chart.31d0c151.svg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chartMobile.38d7a197.svg";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjExOCIgdmlld0JveD0iMCAwIDEzMyAxMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGlkPSJQYXRoIENvcHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzguNTM3MSAwLjkxMDAwM0wxMzAuNTc1IDMxLjgzMDVDMTMyLjUzIDMyLjU0OTggMTMzLjQwNyAzNC4wMDE0IDEzMi4zNDIgMzYuNzEyTDExOC4yMyA4MC40Nzg1QzExNy41MTUgODMuNTQ4NyAxMTUuOTM2IDg0LjI4MDkgMTEzLjI3OSA4NS44OTk1TDYxLjI0MTMgMTE2LjgyQzU4Ljc3MjMgMTE3LjkxMiA1NS43NzY4IDExNy45MTIgNTQuMTg1MSAxMTYuNDczTDIuMTM0NyA4NS43MTk3QzAuMTkyMDU4IDg0LjgyMDQgLTAuMzM0MzM3IDgzLjU0ODcgMC4xOTIwNTggODEuNTU3NUwxNC4xMjkgMzcuMjY0M0MxNC42NTU0IDM0LjcyMDggMTYuNjEwNiAzMy40NjE5IDE5LjA3OTYgMzIuMDEwM0w3MS42NDM5IDAuNzMwMTU4Qzc0LjExMjkgLTAuMzYxNzU2IDc2Ljk0NTQgLTAuMTY5MDY1IDc4LjUzNzEgMC45MTAwMDNaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg=="

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/product1.611dbee4.svg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/product2.50e5556e.svg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/product3.54c31413.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/product4.63f241bb.svg";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/product5.c48dd562.svg";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/product6.5f2e5552.svg";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDI0NSBDb3B5IiBvcGFjaXR5PSIwLjUiPgo8cGF0aCBpZD0iU3Ryb2tlIDc3MjgiIGQ9Ik0yMC44MTk4IDMzLjQ0NjNWNDAuNjU2NiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNzcyOSIgZD0iTTIwLjgxOTggMVY4LjIxMDMiIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDc3MzAiIGQ9Ik00MC42Mzk2IDIwLjgyODRIMzMuNDMyNCIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNzczMSIgZD0iTTguMjA3MjEgMjAuODI4NEgxIiBzdHJva2U9IiMxNTE1MjQiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggaWQ9IlN0cm9rZSA3NzMyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNjAzNTIgMTEuODE1NEwyMC44MTk3IDIuODAyNDlMMzcuMDM1OSAxMS44MTU0VjI5Ljg0MTFMMjAuODE5NyAzOC44NTRMNC42MDM1MiAyOS44NDExVjExLjgxNTRaIiBzdHJva2U9IiMxNTE1MjQiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggaWQ9IlN0cm9rZSA3NzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjIyNTEgMjIuNjMwOEwyMC44MTk3IDI1LjMzNDdMMTUuNDE0MyAyMi42MzA4VjE2LjMyMThMMjAuODE5NyAxMy42MTc5TDI2LjIyNTEgMTYuMzIxOFYyMi42MzA4WiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNzczNCIgZD0iTTE1LjQxNDMgMTYuMzIxOEwxOS45MTg4IDE5LjAyNTZIMjYuMjI1MSIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNzczNSIgZD0iTTI5LjgyODggMzMuNzU4OFYyOS44NDE4TDIwLjgxOTggMjcuMTM3OUwxMS44MTA4IDI5Ljg0MThWMzMuNzU4OCIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDg3MiBDb3B5IiBvcGFjaXR5PSIwLjUiPgo8cGF0aCBpZD0iU3Ryb2tlIDUwMDMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMDE4IDM3Ljk1MjdMMTAuMDA5IDQwLjY1NjZMMSAzNy45NTI3VjI1LjMzNDdMMTAuMDA5IDI4LjAzODZMMTkuMDE4IDI1LjMzNDdWMzcuOTUyN1oiIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDUwMDQiIGQ9Ik0xOS4wMTggMjUuMzM0N0wxMC4wMDkgMjIuNjMwOUwxIDI1LjMzNDciIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDUwMDUiIGQ9Ik0xMC4wMDg4IDI4LjAzODZWNDAuNjU2NiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNTAwNiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MC42Mzk2IDM3Ljk1MjdMMzEuNjMwNiA0MC42NTY2TDIyLjYyMTYgMzcuOTUyN1YyNS4zMzQ3TDMxLjYzMDYgMjguMDM4Nkw0MC42Mzk2IDI1LjMzNDdWMzcuOTUyN1oiIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDUwMDciIGQ9Ik00MC42Mzk2IDI1LjMzNDdMMzEuNjMwNiAyMi42MzA5TDIyLjYyMTYgMjUuMzM0NyIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNTAwOCIgZD0iTTMxLjYzMDkgMjguMDM4NlY0MC42NTY2IiBzdHJva2U9IiMxNTE1MjQiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggaWQ9IlN0cm9rZSA1MDA5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5LjgyOTEgMTYuMzIxOUwyMC44MiAxOS4wMjU3TDExLjgxMSAxNi4zMjE5VjMuNzAzODZMMjAuODIgNi40MDc3MkwyOS44MjkxIDMuNzAzODZWMTYuMzIxOVoiIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDUwMTAiIGQ9Ik0yOS44MjkxIDMuNzAzODZMMjAuODIgMUwxMS44MTEgMy43MDM4NiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNTAxMSIgZD0iTTIwLjgxOTggNi40MDc3MVYxOS4wMjU3IiBzdHJva2U9IiMxNTE1MjQiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCAzOCA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDg2IENvcHkiIG9wYWNpdHk9IjAuNSI+CjxwYXRoIGlkPSJTdHJva2UgODE0NiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNy4xMjYxIDI0LjQzM0wxOS4wMTggMjkuODQwN0wxMC45MDk5IDI0LjQzM1YxNy4yMjI3TDE5LjAxOCAxMS44MTQ5TDI3LjEyNjEgMTcuMjIyN1YyNC40MzNaIiBzdHJva2U9IiMxNTE1MjQiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggaWQ9IlN0cm9rZSA4MTQ3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjUzMTUgMTcuNzYyMUwzNy4wMzYgMTIuOTQ1N0wzNC4yNTU5IDguMzA3NjRMMjcuODA3MiAxMC4wMzgxTDIzLjYyNTIgNy42NjU5MkwyMS43MjA3IDFIMTYuMzE1M0wxNC40MTA4IDcuNjY1OTJMMTAuMjI4OCAxMC4wMzgxTDMuNzgwMTggOC4zMDc2NEwxIDEyLjk0NTdMNS41MDQ1IDE3Ljc2MjFWMjMuODkyN0wxIDI4LjcxMUwzLjc4MDE4IDMzLjM0NzJMMTAuMjI4OCAzMS42MTg1TDE0LjQxMDggMzMuOTg4OUwxNi4zMTUzIDQwLjY1NjdIMjEuNzIwN0wyMy42MjUyIDMzLjk4ODlMMjcuODA3MiAzMS42MTg1TDM0LjI1NTkgMzMuMzQ3MkwzNy4wMzYgMjguNzExTDMyLjUzMTUgMjMuODkyN1YxNy43NjIxWiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgODE0OCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4wMTgxIDE4LjEyNEwxNi4zMTU0IDIwLjgyNzlMMTkuMDE4MSAyMy41MzE3TDIxLjcyMDggMjAuODI3OUwxOS4wMTgxIDE4LjEyNFoiIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDg4MiBDb3B5IiBvcGFjaXR5PSIwLjUiPgo8cGF0aCBpZD0iU3Ryb2tlIDEwNiIgZD0iTTEgMjMuNDE1TDkuNjE2MjIgMjAuODI4M0wyMC44MTk4IDFIMjMuNTIyNUwyNS45ODkyIDQuNDUwMTNMMjQuNDIzNCAxMS44MTU1SDM3LjAzNkw0MC42Mzk2IDE1LjI2NTZMMzcuMDM2IDE4LjcxMzlMMzkuNzM4NyAyMi4xNjIyTDM2LjE3MyAyNC43NDcxTDM4LjgzNzggMjguMTk1NEwzNS4yMzQyIDMwLjc0MjVMMzcuOTM2OSAzNC4yMzA1TDM0LjMzMzMgMzcuMDUxNUgxNi4zMTUzTDguNzU2NzYgNDAuNjU2NyIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDExNCBDb3B5IiBvcGFjaXR5PSIwLjUiPgo8cGF0aCBpZD0iU3Ryb2tlIDM2NzIiIGQ9Ik0yMC44MTk4IDFWNi40MDc3MyIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgMzY3MyIgZD0iTTIwLjgxOTggMzUuMjQ5VjQwLjY1NjciIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDM2NzQiIGQ9Ik0xIDIwLjgyODRINi40MDU0MSIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgMzY3NSIgZD0iTTM1LjIzNDEgMjAuODI4NEg0MC42Mzk1IiBzdHJva2U9IiMxNTE1MjQiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggaWQ9IlN0cm9rZSAzNjc2IiBkPSJNNi44MDQ5MyAzNC44NDkyTDEwLjYyODQgMzEuMDI0MiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgMzY3NyIgZD0iTTMxLjAxMiAxMC42MzE3TDM0LjgzNTQgNi44MDY2NCIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgMzY3OCIgZD0iTTM0LjgzNDcgMzQuODQ5MkwzMS4wMTEyIDMxLjAyNDIiIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDM2NzkiIGQ9Ik0xMC42Mjc2IDEwLjYzMTdMNi44MDQyIDYuODA2NjQiIHN0cm9rZT0iIzE1MTUyNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iU3Ryb2tlIDM2ODAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuODEwOCAxNS40MjA3TDIwLjgxOTggMTAuMDEyOUwyOS44Mjg4IDE1LjQyMDdWMjYuMjM2MUwyMC44MTk4IDMxLjY0MzhMMTEuODEwOCAyNi4yMzYxVjE1LjQyMDdaIiBzdHJva2U9IiMxNTE1MjQiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCAyOCA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDY1OSBDb3B5IiBvcGFjaXR5PSIwLjUiPgo8cGF0aCBpZD0iU3Ryb2tlIDQ2NzEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSA0MC42NTY3VjYuNDA3NzNIOC4yMDcyMVYxSDE5LjAxOFY2LjQwNzczSDI2LjIyNTJWNDAuNjU2N0gxWiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJTdHJva2UgNDY3MiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS43MjA2IDIwLjgyODJIMTUuNDE0M1Y4LjIxMDIxTDUuNTA0MzkgMjQuNDMzNEgxMS44MTA3VjM3LjA1MTRMMjEuNzIwNiAyMC44MjgyWiIgc3Ryb2tlPSIjMTUxNTI0IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/gamer1.b7922c14.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/gamer2.0b3b802e.svg";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/gamer3.198b512d.svg";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/review1.21b6439f.svg";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/review2.c50ef712.svg";

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABlCAMAAACMYLbDAAAC/VBMVEUAAADZ0tDa297b3N3X1tfc3d7d3t/b2trZ19rc3d7Z2Njq0sTGwb300bt3WkWVc1x4Wj/HxsfX19ns0r9aQzf29PXmy7rKwr57Vz5/YEzz18d7Vz0zJBzHua/Ry8hfRTbmv6aNZEHOxcC/ubi4mnxkRjQ4KiNDLyI/KyKXbkbb3N7Z2tzX2NfY2djZ2tnuy7dwRyMkFxHpxa7uzrt7RRP71MPqyLL70L7W1dXmwqscEQ7yxK3ryrXzyLFlPBgrGRGVXy5pQiH5zrnHm3+NWit/UCb6x7duQRnCg0ehZSpYOSXgs5rLnoOLVSR4SyRqOxD92Mf2y7Tbq5DNoYiUWyWBShZzPxJdMw/1zbmFUB41JBz93M330r50RBljNw+1gWSkf2GucDN+TR8xHxWdblC+fDuaZTGcXySnazDiv6e3eTyFVSiSbVZGKxyaWBfovKV4TC7sv6XouJ/drpeedF+jazlkQChXNRxRLQ/xvqjUqpCWaEiMXjM9Jhj5wa+phWtdPStOMB3U09LuwqrWr5XVp4zAlnt8UzleOhyPVBtJKhHJx8nuyLLduJ3QpoqwiG5vTTrgu6Ljt5/atJmtdD+ocDvd3uDuu5+EWTJ/VCzospWrd12daTuOYDuvayKmYxxVMRPw0r/wspquekhiRDRQNSfV0c3hsZS1jnSFXUq1dTaMThMUCwjn5urSzcj2vqn1uKLVoYd9Wka3fkV1VELIhEE3HxDNxLvBrJi9kXS8h2yNYEdtRi64cigsHhnMi01GMCV3SB1CJRD4x7DuqZHTnYGWZj7GkHWKZlKEVz7LgjbDvr+6pI7RmH27cl3PzdDMwLTLlnrZl1I9LCT+39T12Mfeo4e0moK0hFNhUkuidkrPycHkq47imX7Di3DTjkPt7O/Iuq2flI7BnIXDeij5+fu9t7W3sK6up6VQPzjBsqRHNi/roInJtaGpjnmuaVKlnZqdhHB8cG3Nf2yaWEOTh4HSi3DGg2S9ilf19PiIdW7bjnSuoZmQTzvh1tHklte0AAAAKnRSTlMAEH9cO96+mSDu00V7ZlI9Gr+2hoP799vbdMWfnyXPx7+/t6+f75+fn3/aZI7dAAAZX0lEQVRo3qyUaWjTcBjGPfFkXgMVL7x1TmlAwQOXVlvsou1Q67GgzpmuK63ROE2KtsXEg8wDyYdWW9eq0ARdLYJrnWhjjco2xxg6CtMOmTBhcxRBBkPxk286v4j38Xxo8+n/43me930H/b4Gz8ibmr9g+vTpixbm5+fljR/0nzV4zJAJ5952ZbJ4KpXC8XTaK7Hi/Fn5/480bOyEZye63/dlMukUgiAokSJwAlckkcUkcVb+uP/gYezkc6Cevl7VxGqQiiFSCOFVJJbBMFaYMnX8v5mY0N399n1Xf18mjSOg1bFYbPVqlEAQAiVwUsIYhhVFITFt3N8jJra8hfd7e7NZNShw8YWihoYSXygyKyYSdVPy/tbF2/5MNp1OQ9MKDoiYSgGIikAIkNeLsdUUJSfqautqp/y5m5FzzkHVWRzHoQgkhSteZACSisUQFEHrUaLeq3gljJUDfHMdKFE37Q+7Gdvy/lNGwWGOICUQ6lUICAyeBw6Co2g92PCSpMSxrEbvaaxNNgtCXe3UP0DMmNDTn+lVlDT4GMgHQUkFTalFgBv4Ax8k5/VKEsbJTFAfot3uJDSTnP3bZsZ1fcpklaySVhQczU0tvIpyZIpA60lUnSyv+uXiSA6DIabMWps/5La6hUQyuXfcb0bV39ebKzubVYhcyQiOewkSw/H6ehdOoApOQlRnOQ4jMVHG5KDNZvf5O6xWXki6j4/9Hcbc9325vtUZVVGSQhIECb8sCTVUkzgBBHi/2sUxmEsUWJfH4y8uj0ciHR3J2qT1zaRfb/hcmFtY7oEDomDQZkLEOJKVOKaaJM9Wu9IS7iVd2OMiF+diGErgRU3Y5i+Oxn3xSIfbba15N3rwLxgzu7v60rASuYliE/uPlNVY3bUCi7EY5E9y14oUMQ1A9nFREfjRUTzPy4FQyF5eEY+8BNV0lD3/OWXw6BNwawemFlGE/Xvvt7U1dQKnWRQxTK7muGsbJNarcLzM6fbBwstUgOcFj4em7eUOY+Sjqpdl72YO/hljybmeriyirl9Kqq0p62y9fbuhobXpvpWHm8toXNy1EoblOJKXGcYEk6VRV1EIOGkfDRBjHKx8fBnpeDH5x5QRBUtauvtxRF0MaX9ZZ1tre/uWdlDrBysPeQV1Ltee3RAdx/MMW6pjWJ1qJczrtbTP5q+oMEL9LyORxoB13o8YQ5YUrHzW8wlXry3+tKypteH0llc5tbd2WimMoQzVRXt2U4Io8c0ys8/AgDlK7wmEPTYbTfvLcxRQKGwOLP4BowAgJ3oyBDBiAkQFjOvXL+f0qr3JKjM6rUZXVOLkZZYPU7rdFhljdBqz1hMO24Dij9sd0Wh5KOT3NwYMhrzvnsRRFwsKVhb2ZFAkFsOPdLY1bFEZVZcGdLmhRqb0Js3uktJGXuYDQdlcSTEMYzY7bY0eW7Gdpn1xX7TCb7dptVqnJxD43oUZfhEghYXdOYhwvy3nY2PVoUOHjq5Zu/nJmqrbVmpfpdNUstzXGOY9eoqyaClw4jRofaGwPRr1x2lH1GGkbRaTyWkIB6d8J6yLoIKlhS05yP6m1tNbDgNjALFu3a51m6uamg0Wi2nb9jO+xkBY76H0lZROo3HqLXaHLRR13HH4/eU+o8NUum3bPoMhEJj2TVhAACdLlraIBBJLHV9/+vBGUNWhk2s3b94JkF27dm6sCZ65Wnlm+3ItHdaatAanpVKnoTw2S/GDCpquuHOnwkHb7Y64afn2kpJHZkM473thgZbdFQg0Jt3YdOwLZM3aNQcPX9h0atWuFecbmk0HrhwoXX6zMhQqLTYZ9Fe1VDCgtRfDXPnsd14/NBppv73caNm+Z8eeInNw9teMoQVfVHirrp6ICfe2fma77H+SiOM43nNb66d+af0L0gPVMSzmdRZ0kMGZwp2Ud8pNHgICE1pHkj3Yk6xVMy01A7JHpJWoWEFE0BO6amXPD+Zarc2enOWq1dr6HLGyh/fG2LFxr/u839/P5wMFebzsq1cfP1cWaG9PORfNK7aXqII+n02jCRrXKNVqMMona5RJMZNXFw6bdeH+frkcLKvvkNIMxVFC97Q/Wn08DwC/BILN1vV3TjqBUVub58irLXhW1h7Ys6czlXKWhOyhbjbo9dmCwRqj0eZTS6UKr0wowwwmbywcl7eGe3vl8jqTaU1dgqEoDm20jh6ZOg9IS7B5aNWq5S/WOWrttQ5H3u2yaCCwPVpyuyC0NHTl9pUDQsTm9QLFZvP5fAql1BizqGQGhTem18fj4Xhvbzx+2KDGDDjnSXqE1skjUucLyUCmDy1Z3164bm9tLUCulHVHA5UHYL70NbmKiufcLimnNT5vzGgD+V62GixKtX5NoxIDSo88HtfDKy7vMChZKeVPdvkrn4z+NxFQ9vslqza8KFwHgTgKIt3d0ZJIyU3Qx/stkqKcK5W5Go3N+zJmrLHxbxgmVes7pEqFEShmnU7XqpfDnKxzsyzlX5BsOPO7lPHpPDKQoSUbrc4ThVscjnVbI5WVJc9KBiujABv8dL/FVfFsO6oBx3p6fGBZ7GVPWG7AdHFMbfR5X4bDOoVaodNhBoVBqsQpT1L1+tR/CgGIc+PAwJHA7sIt67aGbkSuPfsM2wSS7ww4IzeeNl0pyyWQINyxR28L+l72vAz3yut18jqFIhbTh+O6mqDNaNSyGq3SQu/ghEPHxmUgE7JAmVoEx6xL7rwZ2JM6t2vd1q0wfmFlRaNOXlZnJHQcHPSTwaAv1tMfNtXwLDMcKF1dR6upVa8P6xVBjaamBqNxUpvAc1WVryZkYh9ZyIwn0aMDnZ17Op3bdhUcb2m6fy1SEk0F2jtTQ7tL4ZAVhEq2UyTEHusJh+sxLzx9vKPZYDJDGGYIxWQLIgiixbQkQaO57sdD00f/45ZA8Lr7aMoaCARSGwodqyXVFYXPDhyB0gYGHu0JHLjmsNvXHSinEDjAXrhrnUGhblhzuA7T1iigEp1CoTAGNQRBgmEIgaPuh6nNYzJujYzkQfkSa6CzPZVKLa0oEi2cu3LRho3r33z48PVravezgjmzZs3ZOkgTSI0v5tXpdWq1Gt8hFEpZRKOEBlXXBGu0CMIwOE7SNCG8+sX6JO3X6BF1ZM089b58bfuRPQGrtb0wJ3/FihVzHS82dl388DXQfeBG3s5ikP32ME2SQThhJgWm1LJ+D4UmcJrAIQyEF0lSBEPROIE3fyk9s2/0325l3yoVcuePHgGItUKchtReCxw5AtgDNypmFReL8kU5xz9/x0lSY+zpN6s1CE0kPX6KwEmUQDQawBNgF4FTDM7gzXKAjE3/ehjR7ptfH8zllhwNWJ3OwqJ8gNw7NO9GJNXZGY2E8qqLForgI7HryqCKIBGNDc6WAiEILunhwCA6QbIw5BmGoQiEpgGDYubSM1kTATLpN2PGjFPXG3O55MCbgUe7c0RQR35+8awthUuXhhwV1Tk5y8SiFXfvrhBXfBwmSQSmJHQ5P9aTHg9FJAg8YYG0GY6CC5ZVUX7GYnp8K2vSyEgEguzpZ0pl6Nrlsy88em8vBkaaMi/PAeOyWpKTUwQMkEjSd1NGwFYxKvT9eiVNwTD0EzSJMlotzHgPxzEsK1VRHMFKm89kZY0eNe4XQjBzevbzqyp0U9f8CwNbloEx/GOvEBVX22vzKuwuyTJxmrFCVHX54zDOIDaFETPp9RhNrU1yDEniTIJNIymCVUqFHEexlobX07PGQe4ZRhZAjj2Q0ugOz4IuqySdOmDyRUU5kurVq/e7JIvF+TwkX1zV8m2wHKVoX6tCqzTJDfiOTRxFkiyKyhJanEsyiNLgVnEUI22wnJ2RNZZfJYI0BJT95LEFR1F/cpNjsVgEuYPyxQBxuVyreYgIrkXixadb+m5+F/o5plWPsYjSvEaYu5Yi4WyhlIpOoB5KvabenWAIotndODQdkp+SqYTXsedXZTQO394tKQIIL7jnMoCAJFUAEYmBUdXW0vd5uBzlunbUyZUqGsEw4Q6UhpOgZnCLFPejusN1MhmDk48PWg4+EUzk+12QKWbGsQdXG3GhikvZi0Qg4ABj4SUe0uaqWrxYLF4Mqmpru9z3cfC7cG3XAv8aswwnEaVUtQOntQqfjrZIpShljncABJU+vKpqeDd9QnqXCDJdcqz0qgxXCdGtLlG6BrFYtPDSJUm6kNM8BAhVp9vaWi73fbo5vD23a3bX2uZ66BlNQqZKCJWwuVqVhmYLY+7tsOTiVIe8GW14cWsSQCDzdO7Q7lcbWLoxNxraXyRxXRKnQa79PAEEENBPBkA+Dx4s98BfbaFBCT1Da93uRkztg51ich+WGfpbpUI/+kVfTwlPvJs6Kg3I5H627CCbaEDLr4WqJRU37rvEEHtOU8t+F8+o4hGgtpaWy2/7vn28OXhw7fquLr9KjZAIzhrq3ZgRNjLMmvrDWL/O4l6CymMGBi+9dSsNySj7etlBS6KBocoiN5o+ff8+HLq08FJ109Om/W0ZSMYtgPR9+3yz8vyqTR7OL9OQCERxuFmm9sHK7O+Nm+vMJml5o9/o1bJ46ansUQLeqXQrCrIfVFbKhN0M1b07cq3peMHN4b6my/v38xTXb8gPMszuJ8kwDOOt7zrsT+iwwN6aKxyBvAIpCRSCBZsGkgkJSSCIgY2CJGgmZTrDj3JaSLZRZgVqrVl+VKNmbYVTqzE7cllrNmvrpOvh7Wt1K/OMn9dzv/fzXvd14+ZoBoIDO717N39/bUCGm7dUVCHQq6ru34eUlzB6BgFVU5N9GbeLLsYGhKks+LqPbp0p/wn/wHC73T001nbs9dL3Nu6x1tnZ7tabTEseQUn3KCgE87yTpjT0/lpNMa53zYgmW2W49PQdIC8L+oyqi13U/qBspC4VYS3b9BvC9obcHtOeo3y+2W6+Zp4oUpTwuAoFl9s629bdfePRrry8PFBITxjM1w653iDO379PU0wmsVgTvEx68u7dgweVEpWKOtmVrRGNJwBZRc6KgUR0Zt1FvDTvme2Pb5n9z7hkSjAmj6xtbd2Qgkc6bxeRQgqYJYesqiosgmfAywoGudhAPBKEPDh0qFIgEoip0mLBdDy2HhAUg4l5PnrcpXz+OQKxFwmtJag8BU/BO9baffMRAyEUFEizSw44SZPDVBxUabKLszVVl+6DQJzqAF72IpM4XCdQTS1E1i9b/RcklPKU6w/wA7A/j6OWfp9ajb1EzcOGgnkkVxdRRvpyA6DW2aWWy1VBUaUEBl+2Rx80wEvcyUD6yiTBoExMBajpqcSkd/WyNX8gkVTqo0e8h1/7WVdu99tej97kql+VqH1WnlqBuc8DBBhCIQ9Z6+xXY1WVpuJOpQD/9oheI+nrg0V9gFWoTGIIFmvEdG1+x+CMl7Vm2XIGQD7eZCKZwO1Za9fZPe2LS0vfv78Z9TVYeq1Y6BSP8shdw1BQ3NbXXyXwJsand8qMZSL5iEhirASEQVTB4+nltfkV/lhW1vJlK/4o4SQS8/Plmj37z3nsnuEvz1GfPj1//lbbb8XWuEMNCCiZxjAQx3WZTPL+fV9ln4Cm6HDLQE9Bi6DMaCAtIpAuMYFsXrFs7S8hgKRTk0lPnZ4fgJQnpzHynwjny9EvYz5FCY5qLzCA4FHG9d82pu2oEsmIBy44JLhYQ9M0NnijQaMKaoLFpcXZejG/bjoxs2kT7PC6zb8rNreQjnpM8gPDHvu5e0e/LH748GF0tNtWP1HEhVMBBZ+fEGvvM61bohJI4PIKCkxUZ42TpkWAGjQaCCFuxhTu6FmIbV5HDOQfCCuRjKcS0+InlMd+q3xx8Q0YNxQlJQ299TauIg83PxAEgsfN9vqFtnzciPXnsqGs4CKNUMpJy0v1IwaVXK+BiczOrutonpr0smEhmc7/Gse5dCKR7LxI2XXDzxcXF79/sKpL1Gq1r7fX5lMQDKMDQgr7J9rLh8cddcYySVnz0XyqxkkFaL0cFJlYE9xzYJ+mo3lgKs7aTMzwSoZA2sLOiicmF9I6cfkTj7m9XTskLbQ0bFHweL62wiarj0sWeiCJs7AVCYcQtw07OgQdzX3NNXQ+HbgLJfnUiF4lN8mu79mn6jFW9sTZm9ESNOU3hb05EksspBMmnRvPVyg6+HasusnK5fJ8VpvNQnKDTPEarLbesQlkbeVut3t8vNNYceKknKLO3A1QIkpOqcRyMS6aCgQ6zQusdUzKxTBQbDYnFk+kJ8dTUUxKNKTVDo31IpQgGBT+wOHxGnzWpur+F4PadkKpc493CkS77zpLCcU5Ikba4gjLZUFZS0FZi2OOs4HZTyCBEPDLYkUikwtxXSqu03lCeKuM9fdaEEoQCVt4KGB8Pizf9dIX2I6gZXzc7e4UmQK5D0sD8gCcpDxAUxU9JpnB0TNQ5hBNzaxgkoJ10JEpFooTWYhHP3sTIZ1nsL+IHBICHLWaZCtgwOZZmi64GqVSoRCUnmkiptMk3p2bi1SPdp7popxO+dFmpIUD0819FWJH+lcqyBwVhOCHzZlJJ3WcSNQT8iuLmixciMgrwSiC0kBUFJ5qVEqVSqVUOKFF4cw65fTx3Fw+/dBJIyA46ZRTdc0DBVPTPZWiTsGvnHAlYWSKBRQrlk5+9LIS0Y9RJcw8T03u4lcZxracpmqoEEqV9fWNjTixibdDQ9p2d83J4weP087cLueZAH3mDEWF6woKekKpqQ6d9nesvprIIF0hkKxYOpX0sieTKX+jstrWoEaVZBBW9EIpFBKGC6sxgtZnL174B4fK7508cvzkkbtba/fXyp0PH1KUONzyTZecSeoSGxkCIwXfjoKWrKzIZDTNYePQ/C5AMChbeGpew7ZMu4V+v1DaWO8qOlVdhKrvVyqFfq0bEfjVg7lbz/ApePmucFiMbXEuzorMx9D2f6SgCCSenOFkRSLJqFIorS605ORYMCaFRQQBHcr6UxfOFiJEQjACkqtRKdQiNUaSv/UIH3adT4XDAdqTnOfAk676w2CkgEN+WZF42svJ8rLmQ1G/X4qUEIX9XZo5qEbXqbOHD4ObY7FlOKdcrsZBnfnW7StXc48HKFwtgXv8A0fnE7FNKAj5SwoDICTMYwzrEIeVJjPvxxeTIggclKv67OGc7Tt3bt+2LcdisTSdbzp74YJL6g8Bc+Xg3YeBQG2AFofNnkSc2DkI+U9KBsSJzHgzT/NkKBqFlrk5KZkKRseps+dztm/ZsiVDyWE4Zy+4hINRnflHq2YT2kQURWFtjH+xG6UKguC6mWRkBoYJjIK4rKu4cSGYhZuBiCiCUJXI2FbJ5Mc0EFEQjGiTTQJKMY1LRRRSmQrWghEZU5rEgCUVukgJ4rnvBaul2lR7SJus3se5990zmXkZf3T16fNLR+5cORMql/MqGdmy4gm6h4umcUwgpFCenJiYhbKh4JNbD8dDI8AMJxM+SQMlEokAA4quJ6JDJ2bhBffIt47e+RCfnCp7+73E2PY7A2OPaecQQ6D2C0J+qlAuNCZv3MfN7a2H15AAI6AM6KBEIhooiiL5ID2axOwQpTH5YaaQ9yBo2T2Pc/umFXKBwV6G2plLI58fyzcmDmHn31wIPgkE4kTxR+FFUUSCoGhUtkRyED0rxi9Wx6YMLy2PP4S6Y5Ujh44VFW/8g6EKRmHhfjh8/3VlYT4QOP2sOHIcbSGKBisiWATREWaxE6C0+7m8hHCvLBZ/osrWhhdGo7T0eozP946Ewzfa7ddLgVAoXiweOz6YZBAR0kQNVgChfQwv89QJj8Apzs2rnwgIHUSHRpE5NXPm0I2Z9tKXR5T9RWZlVGeQiCiLMCNR54cGY5j9bK1klpp1C/Xy7kBDVpND6IiVjEu1ChON6uLSw7MBPjbYxnxURBIrF0GYl5H5SrNeqZlgeB1/PKURlsUZAm0Es7K4OB6+yEcTqTJA21iGDVmWFSoXBhIVGyZKs1kxVcFN3x7WoHgYw8shOOWCvoWD2SKCi3IFTVEAwAv/GGSZkp2vu1MCMdaieJadqNVKpdlutxcvBbPoBxCIxwSaInKIplC5OMU/DExWTeX+zgBFFX6VWW822/VarVa/FsSVEoihJCCwoskiieYRnecYP/Q1l8uB0TVFNat1qFYtQeMEoZCPgpHQfRprfVoGBckCRZH/mUzmu22DsZZ2YXWGsEpwUK1WS6ZpWsbS5XgRM4JSQT6dtV5Oo14SedEJNDp64UIml3N09aMCp6qqlmmWSJzg6U81zpwuHoslwQBAUjAoYKRZ5yGOwSFbdAeStyvKbsMqmVyWZRiqG3X2nv706lhsCIWi6OpAZA7pJOV5HOIdxJx3qR4DTiwI8YW0A8O2Z9++PX6CBpEzFA0QWBElCjIJ7qTz18/1dkvgZtyqaalA9KdSOTtn9/XtffP4ZWwwqdP6uDQCwigcovgkxPLBA5vWJ4fTbVpuYpCPVqtlv3zvH/b7ExK2FVHwxqxIwCEoRXkvbKxXm3ucJavDsFtzc629HzMZv39A12QIGIJMw4kGCBB70I1/0PaefZb7J2TOvgtlMqMKrU0BrDEILvnAAvHPcuxUQeGQ1rsHt2+fvzDgE9PTRIEVfKDE398LxP9oyzYnMKBA6dvshiiCtYmi0IfD0h7XhvzAq2drilH6Dr/AHePJw6em8RCfEkXeD8KGaTNAzr65d/zRB4Ps39brWq7SRqJcrl7I5dq+ruV/AFGBm7OGTdGuAAAAAElFTkSuQmCC"

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/review4.580b074e.svg";

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA3MiA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS42MTkgNTguNjUyMUwzNS44MDk1IDc3LjMwNDNMMiA1OC42NTIxVjIxLjM0NzdMMzUuODA5NSAyLjY5NTU2TDY5LjYxOSAyMS4zNDc3VjU4LjY1MjFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgNTguNjUyMUwzNS44MDk1IDc3LjMwNDNMNjkuNjE5IDU4LjY1MjFMNjIuNDY4MyA1NC4xMTc5TDM1LjgwOTUgNjguODI2TDkuMTUwNzEgNTQuMTE3OUwyIDU4LjY1MjFaIiBmaWxsPSIjRDNFQ0ZFIi8+CjxwYXRoIGQ9Ik0zMi40Mjg2IDUzLjU2NUwxOC45MDQ4IDM5Ljk5OThMMzIuNDI4NiAyNi40MzQ2IiBzdHJva2U9IiMxRjM1NTQiIHN0cm9rZS13aWR0aD0iMy40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjkwNDggNDBINTIuNzE0MyIgc3Ryb2tlPSIjMUYzNTU0IiBzdHJva2Utd2lkdGg9IjMuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjkuNjE5IDU4LjY1MjFMMzUuODA5NSA3Ny4zMDQzTDIgNTguNjUyMVYyMS4zNDc3TDM1LjgwOTUgMi42OTU1Nkw2OS42MTkgMjEuMzQ3N1Y1OC42NTIxWiIgc3Ryb2tlPSIjMUYzNTU0IiBzdHJva2Utd2lkdGg9IjMuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA3MiA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjAwMDA5IDU4LjY1MjFMMzUuODA5NiA3Ny4zMDQzTDY5LjYxOTEgNTguNjUyMVYyMS4zNDc3TDM1LjgwOTYgMi42OTU1NkwyLjAwMDA5IDIxLjM0NzdWNTguNjUyMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjkuNjE5MSA1OC42NTIxTDM1LjgwOTYgNzcuMzA0M0wyLjAwMDA5IDU4LjY1MjFMOS4xNTA4MSA1NC4xMTc5TDM1LjgwOTYgNjguODI2TDYyLjQ2ODQgNTQuMTE3OUw2OS42MTkxIDU4LjY1MjFaIiBmaWxsPSIjRDNFQ0ZFIi8+CjxwYXRoIGQ9Ik0zOS4xOTA1IDUzLjU2NUw1Mi43MTQ0IDM5Ljk5OThMMzkuMTkwNSAyNi40MzQ2IiBzdHJva2U9IiMxRjM1NTQiIHN0cm9rZS13aWR0aD0iMy40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUyLjcxNDQgNDBIMTguOTA0OCIgc3Ryb2tlPSIjMUYzNTU0IiBzdHJva2Utd2lkdGg9IjMuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi4wMDAwOSA1OC42NTIxTDM1LjgwOTYgNzcuMzA0M0w2OS42MTkxIDU4LjY1MjFWMjEuMzQ3N0wzNS44MDk2IDIuNjk1NTZMMi4wMDAwOSAyMS4zNDc3VjU4LjY1MjFaIiBzdHJva2U9IiMxRjM1NTQiIHN0cm9rZS13aWR0aD0iMy40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sportPartners.efde8777.svg";

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIyMjY5IiB2aWV3Qm94PSIwIDAgMTQwMCAyMjY5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik0tMTE2IDEwODAuODNMODUzLjM4NiA1MjEuMTUyIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEwNzcgMTA4NC4wNEwyMDMxLjQ0IDUzMi45OTMiIHN0cm9rZT0idXJsKCNwYWludDFfbGluZWFyKSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mKSI+CjxwYXRoIGQ9Ik0tMjU2IDExMTYuODFMNDc1LjM5NCA2OTMuODEiIHN0cm9rZT0idXJsKCNwYWludDJfbGluZWFyKSIgc3Ryb2tlLXdpZHRoPSI1Ii8+CjwvZz4KPHBhdGggZD0iTTgwLjI3MjQgOTIzLjc5N0wyNTcuNzYgODIxLjE0OCIgc3Ryb2tlPSJ1cmwoI3BhaW50M19saW5lYXIpIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTEyMy43OTggODk4LjYyNEwyMTQuMjM1IDg0Ni4zMjEiIHN0cm9rZT0idXJsKCNwYWludDRfbGluZWFyKSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNDMuOTQzIDg4Ni45NzNMMTk0LjA4OSA4NTcuOTcyIiBzdHJva2U9InVybCgjcGFpbnQ1X2xpbmVhcikiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTU0Ljc1NyA4ODAuNzE5TDE4My4yNzYgODY0LjIyNiIgc3Ryb2tlPSJ1cmwoI3BhaW50Nl9saW5lYXIpIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTS0yMS4xODc3IDk4Mi40NzZMMzU5LjIyIDc2Mi40NjgiIHN0cm9rZT0idXJsKCNwYWludDdfbGluZWFyKSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9mIiB4PSItMjY4LjE2NiIgeT0iNTI3LjEzMyIgd2lkdGg9Ijc1NS43MjciIGhlaWdodD0iNzU2LjM1NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ijg1My45OTgiIHkxPSI1MjAuNzk5IiB4Mj0iLTExNiIgeTI9IjEwODAuODMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0UzMEIxNyIgc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMC4xOTYzMzgiIHN0b3AtY29sb3I9IiNFMzBCMTciLz4KPHN0b3Agb2Zmc2V0PSIwLjgwOTM0MyIgc3RvcC1jb2xvcj0iI0UzMEIxNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMzBCMTciIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIyMDMyLjA0IiB5MT0iNTMyLjY0NSIgeDI9IjEwNzciIHkyPSIxMDg0LjA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPHN0b3Agb2Zmc2V0PSIwLjE5NjMzOCIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjgwOTM0MyIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjQ3NS44NTYiIHkxPSI2OTMuNTQzIiB4Mj0iLTI1Ni42MzIiIHkyPSIxMTE1LjcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFMjBDMTciIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjAuMjY1OTM4IiBzdG9wLWNvbG9yPSIjRTIwQzE3Ii8+CjxzdG9wIG9mZnNldD0iMC42OTY1NSIgc3RvcC1jb2xvcj0iI0UyMEMxNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMjBDMTciIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXIiIHgxPSIyNTcuODcyIiB5MT0iODIxLjA4MyIgeDI9IjgwLjExOTEiIHkyPSI5MjMuNTMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkIwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjAuNTIwODMzIiBzdG9wLWNvbG9yPSIjRkZCMDAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhciIgeDE9IjIxNC4yOTIiIHkxPSI4NDYuMjg4IiB4Mj0iMTIzLjcyIiB5Mj0iODk4LjQ4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPHN0b3Agb2Zmc2V0PSIwLjUyMDgzMyIgc3RvcC1jb2xvcj0iI0ZGQjAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkIwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NV9saW5lYXIiIHgxPSIxOTQuMTIxIiB5MT0iODU3Ljk1MyIgeDI9IjE0My45IiB5Mj0iODg2Ljg5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPHN0b3Agb2Zmc2V0PSIwLjUyMDgzMyIgc3RvcC1jb2xvcj0iI0ZGQjAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkIwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXIiIHgxPSIxODMuMjk0IiB5MT0iODY0LjIxNSIgeDI9IjE1NC43MzIiIHkyPSI4ODAuNjc3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkIwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjAuNTIwODMzIiBzdG9wLWNvbG9yPSIjRkZCMDAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ3X2xpbmVhciIgeDE9IjM1OS40NjEiIHkxPSI3NjIuMzI5IiB4Mj0iLTIxLjUxNjIiIHkyPSI5ODEuOTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkIwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjAuNTIwODMzIiBzdG9wLWNvbG9yPSIjRkZCMDAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/safetyLogo1.f5d7243d.svg";

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE0MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTguMTI5OCAzNS41NzAzQzk0LjE0ODkgNDEuNTMwNCA4My41MzUgNTcuNDE5NyA3OC43NDE2IDY0LjU0NzlMNzguNzQyOSA2NC41NDY2QzY5LjA4NzYgNzguOTAwNCA2NS4wMTE5IDgzLjg2NSA1MC40OTIyIDgzLjg2NUgzMy41ODc1VjU1LjQxODFIMzkuNTA5NVY3Ny45MjU5SDUwLjQ5MDhDNjAuNzg3NCA3Ny45MjU5IDYzLjgxODggNzUuNzkgNzEuNjMxOCA2NC40NjFDNzIuODY5NyA2MC40MzUzIDcyLjUzNzggNTYuNDg0NyA3MS41NzkxIDUzLjcyMDZDNjkuMzk3MSA0Ny40MTI5IDY0Ljc2NDMgNDEuODQ2NSA1NS40MDAxIDQwLjc2MjdDNDkuMTA0NyA0MC4wMzMgMzkuOTg0MyA0MC4wNzc2IDMxLjkyMTggNDAuMTE3TDMxLjgzODcgNDAuMTE3NEMzMS40NDcxIDQwLjExOTIgMzEuMDU4OCA0MC4xMjEyIDMwLjY3NDMgNDAuMTIzMUwzMC42NzQxIDQwLjEyMzFDMjkuMzc0NSA0MC4xMjk2IDI4LjExOTIgNDAuMTM1OSAyNi45MjgyIDQwLjEzNTlINi4wNTcxNUw2LjAyMTYgODQuMTc1OEwwLjA5NTcwMzEgODQuMTcwNUwwLjE0MDQ3NyAzNC4xOTY4SDI2LjkyODJDMjguNDAzOCAzNC4xOTY4IDI5Ljk3ODIgMzQuMTg5NSAzMS42MTI2IDM0LjE4MTlMMzEuODA3MSAzNC4xODFDNDAuMDU3MyAzNC4xMzg4IDQ5LjQwOTcgMzQuMDkxNCA1Ni4wNzk2IDM0Ljg2NThDNjYuNjAwMSAzNi4wNzk5IDczLjg2MzkgNDEuOTgzNCA3Ny4yMDQ4IDUxLjc4MDlDNzcuNTQ4NSA1Mi43OTIyIDc3Ljc4NDIgNTMuOTI4NyA3Ny45MTU5IDU1LjEzNjNDODIuMjgwNyA0OC42MTY4IDg2LjY0MTggNDIuMDk0OCA5MC45OTg5IDM1LjU3MDNIOTguMTI5OFpNMTQuMDY3NyA0OS4xOTk0SDUwLjQ3NTFDNTQuMzg3NSA0OS4xOTk0IDYzLjQ4OTYgNTAuMjEzNCA2My40ODk2IDU5LjYyMzdDNjMuNDg5NiA2Ni44ODc1IDU3LjUyNDIgNzAuNjg5MyA1MS42MjczIDcwLjY4OTNINDcuNTE3NFY1NS42OTY4SDQxLjU5MTVWNzYuNjI4NEg1MS42MjczQzYwLjI1MDEgNzYuNjI4NCA2OS40MTU1IDcwLjY2ODMgNjkuNDE1NSA1OS42MjM3QzY5LjQxNTUgNDkuNjg0IDYxLjk4MDUgNDMuMjU5IDUwLjQ3NTEgNDMuMjU5SDguMTYwMjFMOC4xMDc1NCA2MS4zMzk2SDMwLjY0N1Y1NS40MDMySDE0LjA0OTJMMTQuMDY2NCA0OS4xOTgxTDE0LjA2NzcgNDkuMTk5NFpNOC4xMDkxOSA4My43NjM4TDE0LjAzMzggODMuNzc0M0wxNC4wNjAxIDY5LjIxMjRIMzAuNTI0OVY2My4yNzczSDguMTQ3MzhMOC4xMDkxOSA4My43NjM4Wk0xMjUuNzU5IDcyLjQ5MjZMMTA1LjAwOCAzNS4wN0g5OC4yMjg5TDEyMS45NTkgNzcuODYxNUg4Ny4zNDM3VjgzLjgwMDZIMTE4LjI1N0wxMjIuMTk4IDc3Ljg2MTVMMTI1Ljc1OSA3Mi40OTI2Wk04Ny41NTczIDY5Ljg2MzhIMTA3LjA4Nkw5Ny4wNTE5IDUxLjg4OTlMNzUuNzcxMyA4My44MTczSDY4LjY0NzFMOTcuNDk3IDQwLjUyOTNMMTE3LjE4OSA3NS44MDI5SDg3LjU1NzNWNjkuODYzOFpNMTguNzkxOSA5My4zMDE0VjEwMi42NjRIMjAuNjc4OVY5OC43NTU5SDIxLjA1OTVDMjEuNDk1NCA5OC43NTU5IDIxLjgxMDEgOTguNzkwMSAyMi4wMTAzIDk4Ljg1OTlDMjIuMjI3NCA5OC45NDMgMjIuNDIxNSA5OS4wNzY2IDIyLjU3NjUgOTkuMjQ5N0MyMi43NTU2IDk5LjQ0MDYgMjMuMDg3NSA5OS44OTc2IDIzLjU3MjEgMTAwLjYyN0wyNC45MzY0IDEwMi42NjRIMjcuMTkwOEwyNi4wNTE4IDEwMC44MzhDMjUuNjAwMSAxMDAuMTA4IDI1LjI0MzIgOTkuNjAyNiAyNC45NzcyIDk5LjMxODJDMjQuNzExMiA5OS4wMzI0IDI0LjM3NTQgOTguNzcxNyAyMy45NjU4IDk4LjUzMDdDMjQuNzg2MiA5OC40MTM1IDI1LjQwMjUgOTguMTIzOCAyNS44MTM0IDk3LjY2NjhDMjYuMjI1NiA5Ny4yMDg2IDI2LjQzMjMgOTYuNjI5MSAyNi40MzIzIDk1LjkyNTlDMjYuNDMyMyA5NS4zNzE1IDI2LjI5NjcgOTQuODgxNyAyNi4wMjU0IDk0LjQ0OTdDMjUuNzU1NSA5NC4wMjE3IDI1LjM5MiA5My43MjE1IDI0LjkzOSA5My41NTQzQzI0LjQ4NDcgOTMuMzg0NCAyMy43NjA0IDkzLjMwMTQgMjIuNzYyMiA5My4zMDE0SDE4Ljc5MTlaTTIyLjg1ODQgOTYuNTg4M0gyMS40NjI1Vjk0LjIxMDFIMjIuOTMzNEMyMy42OTk4IDk0LjIxMDEgMjQuMTU4MSA5NC4yMjA2IDI0LjMwOTUgOTQuMjQwM0MyNC42MTY0IDk0LjI5MyAyNC44NTQ3IDk0LjQxNjggMjUuMDIwNyA5NC42MDkxQzI1LjE4NzkgOTQuODAyNiAyNS4yNzM1IDk1LjA1OTQgMjUuMjczNSA5NS4zNzI4QzI1LjI4MjkgOTUuNjIxNCAyNS4yMTU4IDk1Ljg2NjkgMjUuMDgxMiA5Ni4wNzZDMjQuOTUzOCA5Ni4yNjM0IDI0Ljc2NzUgOTYuNDAyOSAyNC41NTE4IDk2LjQ3MjRDMjQuMzI4IDk2LjU0ODggMjMuNzYxNyA5Ni41ODgzIDIyLjg1ODQgOTYuNTg4M1pNMjguNTg1NCA5My4zMDE0VjEwMi42NjRIMzUuNjkxMlYxMDEuMDg3SDMwLjQ3MjVWOTguNTM4NkgzNS4xNjA1Vjk2Ljk2MUgzMC40NzI1Vjk0Ljg4M0gzNS41MTA4VjkzLjMwMTRIMjguNTg1NFpNNDEuMjY4MSA5Ny44MDI1Vjk5LjM4MDFINDEuMjY5NUg0My40MjkxVjEwMC41NjlDNDMuMTQ2IDEwMC43OTIgNDIuODAzNiAxMDAuOTggNDIuNDA0NiAxMDEuMTM0QzQyLjAwOTUgMTAxLjI5MSA0MS42MTMyIDEwMS4zNjYgNDEuMjE1NSAxMDEuMzY2QzQwLjQxODggMTAxLjM2NiAzOS43NzIyIDEwMS4wODkgMzkuMjc5NyAxMDAuNTMyQzM4Ljc4NzIgOTkuOTc5MiAzOC41NDIyIDk5LjE0NTcgMzguNTQyMiA5OC4wMzI5QzM4LjU0MjIgOTcuMDAzMSAzOC43ODQ1IDk2LjIyMzUgMzkuMjY5MSA5NS43MDIxQzM5Ljc1NjQgOTUuMTc4IDQwLjQxMzUgOTQuOTE0NiA0MS4yMzc5IDk0LjkxNDZDNDEuNzc5MSA5NC45MTQ2IDQyLjIzMzQgOTUuMDQ3NiA0Mi41OTgyIDk1LjMxNDlDNDIuOTYwMyA5NS41ODA5IDQzLjIwNzkgOTUuOTQ0NCA0My4zNDA5IDk2LjQwMzlMNDUuMjEyMiA5Ni4wNTFDNDUuMDI3OCA5NS4xOTExIDQ0LjYwNzcgOTQuNTE4MiA0My45NTMyIDk0LjAzMjNDNDMuMzAxNCA5My41NDM3IDQyLjM5NjcgOTMuMzAwMSA0MS4yMzc5IDkzLjMwMDFDNDAuMzQzNyA5My4zMDAxIDM5LjU5ODQgOTMuNDU0MiAzOS4wMDA1IDkzLjc2NUMzOC4yMzY0IDk0LjE0NjUgMzcuNjEwMyA5NC43NTY5IDM3LjIwOTYgOTUuNTExMUMzNi44MDEzIDk2LjI2ODMgMzYuNTk3MiA5Ny4xMzM1IDM2LjU5NzIgOTguMTEwNkMzNi41ODk2IDk4Ljk3MTggMzYuNzc2OSA5OS44MjM2IDM3LjE0NSAxMDAuNjAyQzM3LjQ5MTkgMTAxLjM0OCAzOC4wNjU3IDEwMS45NjYgMzguNzg0NSAxMDIuMzY3QzM5LjUwODggMTAyLjc3OCA0MC4zNjIxIDEwMi45ODMgNDEuMzM5MiAxMDIuOTgzQzQyLjEwODMgMTAyLjk4MyA0Mi44NjY4IDEwMi44MzcgNDMuNjE3NCAxMDIuNTQ3QzQ0LjM2OCAxMDIuMjU1IDQ0LjkzOTYgMTAxLjkxOCA0NS4zMzQ2IDEwMS41MzNWOTcuODAyNUg0MS4yNjgxWk00Ny4yOCAxMDIuNjY1SDQ5LjE2NzFWOTMuMzAxOUg0Ny4yOFYxMDIuNjY1Wk00OS45NTE5IDk5Ljc3ODNMNTEuNzg2MyA5OS42MDA1QzUxLjg5NTYgMTAwLjIxNyA1Mi4xMTk1IDEwMC42NzEgNTIuNDU3OSAxMDAuOTU5QzUyLjc5NzcgMTAxLjI0OSA1My4yNTA3IDEwMS4zOTUgNTMuODI0OCAxMDEuMzk1QzU0LjQzMDYgMTAxLjM5NSA1NC44OTE1IDEwMS4yNjQgNTUuMTk4MyAxMDEuMDA4QzU1LjUwNTEgMTAwLjc1IDU1LjY1OTIgMTAwLjQ1IDU1LjY1OTIgMTAwLjEwNUM1NS42NjU0IDk5Ljg5OTEgNTUuNTk3MSA5OS42OTggNTUuNDY2OSA5OS41Mzg2QzU1LjMzNTMgOTkuMzgzMiA1NS4xMDg4IDk5LjI0NzYgNTQuNzg2MSA5OS4xMzNDNTQuMjg3OCA5OC45ODAxIDUzLjc4NDQgOTguODQ0IDUzLjI3NyA5OC43MjQ4QzUyLjI2NTYgOTguNDc0NiA1MS41NTU5IDk4LjE2MzggNTEuMTUwMyA5Ny43OTc3QzUwLjU3NjEgOTcuMjgyOCA1MC4yODkgOTYuNjU2IDUwLjI4OSA5NS45MTQ2QzUwLjI4OSA5NS40Mzc5IDUwLjQyMiA5NC45OTE0IDUwLjY5MzMgOTQuNTc1M0M1MC45NjIgOTQuMTYwNSA1MS4zNTE3IDkzLjg0NDUgNTEuODU4NyA5My42MjcyQzUyLjM2NyA5My40MDk5IDUyLjk3OTQgOTMuMzAwNiA1My42OTcxIDkzLjMwMDZDNTQuODY5MSA5My4zMDA2IDU1Ljc1MjcgOTMuNTYgNTYuMzQ0IDk0LjA3MzZDNTYuOTM5MiA5NC41ODg1IDU3LjI0ODcgOTUuMjc1OSA1Ny4yNzkgOTYuMTM1OEw1NS4zOTMyIDk2LjIxODhDNTUuMzEyOSA5NS43MzgxIDU1LjEzNzcgOTUuMzkzMSA1NC44NzQ0IDk1LjE4MjRDNTQuNjA4MyA5NC45NzA0IDU0LjIwOTMgOTQuODY2MyA1My42Nzg2IDk0Ljg2NjNDNTMuMTMwOCA5NC44NjYzIDUyLjcwMDIgOTQuOTc4MyA1Mi4zOTA4IDk1LjIwNjFDNTIuMjk2NCA5NS4yNyA1Mi4yMTk0IDk1LjM1NjUgNTIuMTY3IDk1LjQ1NzdDNTIuMTE0NiA5NS41NTg4IDUyLjA4ODMgOTUuNjcxNiA1Mi4wOTA1IDk1Ljc4NTVDNTIuMDkwNSA5Ni4wMDgxIDUyLjE4NCA5Ni4xOTY0IDUyLjM3MjMgOTYuMzU1N0M1Mi42MDk0IDk2LjU1MzIgNTMuMTg4OCA5Ni43NjM5IDU0LjEwNTMgOTYuOTc5OUM1NS4wMjMyIDk3LjE5NTkgNTUuNzAxNCA5Ny40MjExIDU2LjE0MTIgOTcuNjU0MUM1Ni41ODIzIDk3Ljg4NTkgNTYuOTI2IDk4LjIwMiA1Ny4xNzM2IDk4LjYwNDlDNTcuNDIxMiA5OS4wMDY2IDU3LjU0NjMgOTkuNTA1NyA1Ny41NDYzIDEwMC4wOTdDNTcuNTQ2MyAxMDAuNjM2IDU3LjM5NzUgMTAxLjEzNyA1Ny4xMDEyIDEwMS42MDVDNTYuODAxMSAxMDIuMDc3IDU2LjM1OTYgMTAyLjQ0MiA1NS44Mzk2IDEwMi42NDlDNTUuMjk0NCAxMDIuODc3IDU0LjYxNjIgMTAyLjk5MSA1My44MDY0IDEwMi45OTFDNTIuNjI1MSAxMDIuOTkxIDUxLjcxNzggMTAyLjcxNyA1MS4wODQ0IDEwMi4xNzFDNTAuNDUyMyAxMDEuNjIzIDUwLjA3MzEgMTAwLjgyNSA0OS45NTE5IDk5Ljc3ODNaTTYxLjYyNzIgMTAyLjY2NVY5NC44ODM1SDU4Ljg1MzlWOTMuMzAxOUg2Ni4yNzcxVjk0Ljg4NDhINjMuNTExN1YxMDIuNjY3TDYxLjYyNzIgMTAyLjY2NVpNNjYuODY1NyAxMDIuNjY1VjkzLjMwMTlINzMuNzkzOFY5NC44ODM1SDY4Ljc1MjhWOTYuOTYxNUg3My40NDIyVjk4LjUzOTFINjguNzU0MVYxMDEuMDg3SDczLjk3MTVWMTAyLjY2NUg2Ni44NjU3Wk03NS43NjkxIDEwMi42NjVWOTMuMzAxOUg3OS43MzgxQzgwLjczNjMgOTMuMzAxOSA4MS40NjE5IDkzLjM4NDkgODEuOTE0OSA5My41NTQ3QzgyLjM2NjYgOTMuNzIyIDgyLjczMTMgOTQuMDIyMiA4My4wMDI2IDk0LjQ1MDJDODMuMjcyNiA5NC44ODIxIDgzLjQwODIgOTUuMzcyIDgzLjQwODIgOTUuOTI2NEM4My40MDgyIDk2LjYyOTYgODMuMjAyOCA5Ny4yMDkgODIuNzkwNiA5Ny42NjczQzgyLjM3OTcgOTguMTI0MyA4MS43NjM0IDk4LjQxNCA4MC45NDMgOTguNTMxMkM4MS4zNTEzIDk4Ljc3MjIgODEuNjg4NCA5OS4wMzI5IDgxLjk1NDQgOTkuMzE4N0M4Mi4yMTc4IDk5LjYwMzEgODIuNTc3MyAxMDAuMTA5IDgzLjAyNSAxMDAuODM4TDg0LjE2NjcgMTAyLjY2NUg4MS45MTIyTDgwLjU0NjcgMTAwLjYyOEM4MC4wNjQ3IDk5Ljg5ODEgNzkuNzMyOCA5OS40NDExIDc5LjU1MzcgOTkuMjUwMkM3OS4zOTgyIDk5LjA3NjQgNzkuMjAzIDk4Ljk0MjcgNzguOTg0OSA5OC44NjA0Qzc4Ljc4NzMgOTguNzkwNiA3OC40NzEzIDk4Ljc1NjQgNzguMDM2NyA5OC43NTY0SDc3LjY1NDhWMTAyLjY2NUg3NS43NjkxWk03Ny41NDk1IDk2LjU4ODhINzguOTQ0Qzc5Ljg0ODcgOTYuNTg4OCA4MC40MTM3IDk2LjU0OTMgODAuNjM3NSA5Ni40NzI5QzgwLjg1MzIgOTYuNDAzNCA4MS4wMzk1IDk2LjI2MzkgODEuMTY2OSA5Ni4wNzY1QzgxLjMwMTEgOTUuODY3MyA4MS4zNjc4IDk1LjYyMTggODEuMzU3OCA5NS4zNzMzQzgxLjM1NzggOTUuMDU5OSA4MS4yNzM2IDk0LjgwMzEgODEuMTA3NiA5NC42MDk2QzgwLjk0MDQgOTQuNDE3MyA4MC43MDM0IDk0LjI5MzUgODAuMzk2NSA5NC4yNDA4QzgwLjI0NTEgOTQuMjIxMSA3OS43ODU1IDk0LjIxMDUgNzkuMDE5MSA5NC4yMTA1SDc3LjU0OTVWOTYuNTg4OFpNODUuNTYxMyAxMDIuNjY1VjkzLjMwMTlIOTIuNDkwNlY5NC44ODM1SDg3LjQ0ODNWOTYuOTYxNUg5Mi4xMzc3Vjk4LjUzOTFIODcuNDQ5N1YxMDEuMDg3SDkyLjY2NzFWMTAyLjY2NUg4NS41NjEzWk05My41NzQ0IDkzLjMwMTlIOTcuMDIwNkM5Ny43OTg5IDkzLjMwMTkgOTguMzkwMiA5My4zNjEyIDk4LjgwMSA5My40Nzg0Qzk5LjM0NzUgOTMuNjQwMyA5OS44MTc3IDkzLjkyNzQgMTAwLjIwNyA5NC4zNDA5QzEwMC41OTkgOTQuNzUzMSAxMDAuODk2IDk1LjI2MDEgMTAxLjA5OSA5NS44NTkzQzEwMS4zMDYgOTYuNDU3MSAxMDEuNDA3IDk3LjE5MzIgMTAxLjQwNyA5OC4wNzE2QzEwMS40MDcgOTguODQyIDEwMS4zMTEgOTkuNTA3IDEwMS4xMiAxMDAuMDY1QzEwMC44ODYgMTAwLjc0NyAxMDAuNTUyIDEwMS4yOTkgMTAwLjExOSAxMDEuNzE5Qzk5Ljc5IDEwMi4wMzggOTkuMzUwMiAxMDIuMjkgOTguNzkzMSAxMDIuNDY2Qzk4LjM3ODMgMTAyLjYgOTcuODIgMTAyLjY2NSA5Ny4xMjQ3IDEwMi42NjVIOTMuNTc0NFY5My4zMDE5Wk05NS4zNTQ4IDk0LjIxMDVWMTAwLjQxM0g5Ni43NjI1Qzk3LjI4OTMgMTAwLjQxMyA5Ny42Njk5IDEwMC4zODUgOTcuOTAxNiAxMDAuMzI1Qzk4LjIwODUgMTAwLjI0OCA5OC40NjEzIDEwMC4xMTggOTguNjY1NCA5OS45MzVDOTguODY1NiA5OS43NTE5IDk5LjAzMDIgOTkuNDQ5IDk5LjE1NzkgOTkuMDMxNkM5OS4yODU3IDk4LjYxMDIgOTkuMzUwMiA5OC4wMzg3IDk5LjM1MDIgOTcuMzE0NEM5OS4zNTAyIDk2LjU5MDEgOTkuMjg0MyA5Ni4wMzcgOTkuMTU3OSA5NS42NDcyQzk5LjAzMDIgOTUuMjYxNCA5OC44NTI0IDk0Ljk1NzIgOTguNjIzMyA5NC43NDEyQzk4LjM3ODIgOTQuNTE2NiA5OC4wNzYyIDk0LjM2MzYgOTcuNzUwMiA5NC4yOTg4Qzk3LjQ4NjggOTQuMjQyMSA5Ni45NzA2IDk0LjIxMDUgOTYuMjAxNiA5NC4yMTA1SDk1LjM1NDhaTTMzLjAzNTUgMTE1LjQwM1YxMDYuMDM5SDM5LjQzOTRWMTA3LjYyMkgzNC45MjI1VjEwOS44NEgzOC44MjE4VjExMS40MjNIMzQuOTIzOFYxMTUuNDAzSDMzLjAzNTVaTTQ4LjY0MDMgMTE1LjQwM0g0Ni41OUw0NS43NzM1IDExMy4yNzZINDIuMDM4OUw0MS4yNjcyIDExNS40MDNIMzkuMjY2OUw0Mi45MDY3IDEwNi4wMzlINDQuOTAwNEw0OC42NDAzIDExNS40MDNaTTQ0LjQ4NjkgMTEyLjI0Mkw0My4yMDAzIDEwOC43NjhMNDEuOTM4OCAxMTIuMjQySDQ0LjQ4NjlaTTU1LjM2ODIgMTEyLjExOUw1Ny4xOTg2IDExMi43MDFDNTYuOTE2OCAxMTMuNzIzIDU2LjQ1MDYgMTE0LjQ4MSA1NS43OTg4IDExNC45NzhDNTUuMTQ2OSAxMTUuNDc0IDU0LjMxODYgMTE1LjcyMiA1My4zMTY1IDExNS43MjJDNTIuMDc2IDExNS43MjIgNTEuMDU2OCAxMTUuMjk2IDUwLjI1NzQgMTE0LjQ0N0M0OS40NTk0IDExMy41OTcgNDkuMDYwNCAxMTIuNDM1IDQ5LjA2MDQgMTEwLjk2MUM0OS4wNjA0IDEwOS40MDMgNDkuNDYyIDEwOC4xOTQgNTAuMjY1MyAxMDcuMzMyQzUxLjA2ODYgMTA2LjQ2OSA1Mi4xMjIxIDEwNi4wMzkgNTMuNDMyNCAxMDYuMDM5QzU0LjU3MjggMTA2LjAzOSA1NS41MDEyIDEwNi4zNzYgNTYuMjE2MiAxMDcuMDUzQzU2LjY0MDMgMTA3LjQ1NCA1Ni45NTkgMTA4LjAzIDU3LjE3MjMgMTA4Ljc3OEw1NS4zMDIzIDEwOS4yMjVDNTUuMTk0NCAxMDguNzQgNTQuOTYzOSAxMDguMzU2IDU0LjYxMjMgMTA4LjA3NkM1NC4yNjMzIDEwNy43OTQgNTMuODM1NCAxMDcuNjUzIDUzLjMzNDkgMTA3LjY1M0M1Mi42NDIzIDEwNy42NTMgNTIuMDgxMyAxMDcuOTAzIDUxLjY0OTQgMTA4LjRDNTEuMjE4NyAxMDguOSA1MS4wMDI4IDEwOS43MDcgNTEuMDAyOCAxMTAuODIzQzUxLjAwMjggMTEyLjAwNyA1MS4yMTYxIDExMi44NTEgNTEuNjQxNSAxMTMuMzUxQzUyLjA2NTUgMTEzLjg1MyA1Mi42MTg2IDExNC4xMDQgNTMuMjk2OCAxMTQuMTA0QzUzLjc5OTggMTE0LjEwNCA1NC4yMjkxIDExMy45NDUgNTQuNTkxMiAxMTMuNjI2QzU0Ljk1MjEgMTEzLjMwOCA1NS4yMTE1IDExMi44MDYgNTUuMzY4MiAxMTIuMTE5Wk01OC44NTM5IDExNS40MDNINjAuNzQxVjEwNi4wMzlINTguODUzOVYxMTUuNDAzWk02Mi40MTQ3IDExNS4zMjZWMTA2LjAzOUg2NC4zMDE4VjExMy43NDlINjguOTg5OFYxMTUuMzI2SDYyLjQxNDdaTTY5LjUzNjMgMTE1LjQwM0g3MS40MjM0VjEwNi4wMzlINjkuNTM2M1YxMTUuNDAzWk03NS44NzE4IDExNS40MDNWMTA3LjYyMkg3My4wOTg1VjEwNi4wMzlIODAuMjIxM0w4MC4yMjAyIDEwNi4wMzdIODIuNDMyNUw4NC42MzE3IDEwOS43NDNMODYuNzgzNSAxMDYuMDM4SDg4Ljk1NzZMODUuNTIxOSAxMTEuNDczVjExNS40MDJIODMuNjQyN1YxMTEuNDYyTDgwLjUyNDMgMTA2LjUxOVYxMDcuNjIySDc3Ljc1ODlWMTE1LjQwM0g3NS44NzE4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/safetyLogo3.c0849bc8.svg";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/safetyLogo4.33d30dae.svg";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tagline.7a22d7d0.svg";

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCA0MyAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC4xNjE3IDE2Ljg1OTdDMzUuODQzIDE0LjczMzggMzUuODQzIDE0LjczMzggMzguMTE1MSAxMS44Mjg0QzM4LjUyNTQgMTEuMzAyMiAzOC45OTg1IDEwLjY5NjQgMzkuNTMwNiA5Ljk5NjU4QzQzLjA2MDYgNS4zNDYyIDQzLjIwNzUgMy44MTAyNCA0Mi44ODY4IDIuOTE5MTRDNDIuNjgyNSAyLjM2Mjg3IDQyLjA4NzYgMS42OTY3NiA0MC40MDMzIDEuNjk2NzZDNDAuNDAzMyAxLjY5Njc2IDQwLjc0MTkgMS43MTgwMiAzMy41MTE4IDEuNzUxNjhDMzMuMjI2OSAxLjc1MTY4IDMyLjgwNzYgMS43OTk1MSAzMi40MTg3IDIuMDI2MjdDMzEuODc3NiAyLjM0ODcgMzEuNTc0OCAyLjk1NDU3IDMxLjQ5NTkgMy4xMzE3M0MzMC4zODUgNi4wNTgzNyAyNy4zMzM0IDExLjQ3MDUgMjYuMTMxMSAxMS45ODk2QzI1LjY1NDUgMTEuNDQ1NyAyNS43OTk2IDkuMjU0MjkgMjUuODk5OSA3Ljc3ODU3QzI2LjA5MzUgNC44Njc4NyAyNi4zMTM5IDEuNTY5MiAyMy44MTQyIDAuOTczOTU1QzIyLjA1MSAwLjU1MDU0OCAxNi44OTk0IDAuNDM1Mzk2IDE1LjE3MjEgMS4yNzY4OUMxNC40Njc5IDEuNjE4ODEgMTMuNTM0MyAyLjQ2NTYyIDEzLjY2ODcgMy4yNzUyM0wxMy44NzQ4IDQuMDEwNDNMMTQuNTM1OSA0LjA5NTQ3QzE0Ljk2OTYgNC4xNDg2MiAxNS41MTc5IDQuMzI0IDE1Ljc1OCA0LjY0NjQzQzE2LjM2NTQgNS41MjY5IDE2LjQ5NjIgMTEuMjcyMSAxNS44OTQyIDEyLjAzOTJDMTQuNzc0MyAxMS45MjIzIDExLjczMzUgNi41OTMzOSAxMC40MTgzIDMuMzAzNTdDMTAuMzcxNyAzLjE5MDE5IDEwLjExMzYgMi42MDU1NyA5LjYwNDc0IDIuMjM3MDlDOS4wNjcxOSAxLjg0NTU3IDguNDA0MiAxLjcxOTc5IDguMTE5MjkgMS42ODQzNkwyLjIxMTUyIDEuNzIxNTZDMS45MTA0OSAxLjczMDQyIDAuODgxOTYgMS44MDgzNyAwLjM0MjYwOSAyLjQ0NDM2Qy0wLjI1NDA4MSAzLjE0MjM2IDAuMDg5OTU2NiA0LjE2NDU2IDAuMTg0OTI1IDQuNDA5MDRDMC4zNzY2NTUgNC44MzU5OSA0LjkxOTAyIDE0LjkxOTggMTAuMTg3MSAyMC4zNDQzQzE0LjY4ODMgMjQuOTc3IDE5LjE1IDI0Ljg0NTkgMjIuNDU5NiAyNC44NzZDMjQuNzEzNyAyNC44NzYgMjUuMDAwNCAyNC43NzMzIDI1LjI5OTcgMjQuNDUyNkMyNS45MTk2IDIzLjc5MzYgMjUuOTY4IDIyLjg0NTggMjYuMDA5MiAyMi4wMDc5QzI2LjA3MiAyMC43Mzk0IDI2LjE4MTMgMjAuMzE3OCAyNi43NDU3IDIwLjE0MjRDMjcuMTgyOSAyMC4xNDI0IDI4LjI3MjQgMjEuMzg5NiAyOC45MjI4IDIyLjEzNTRDMjkuNzI3NCAyMy4wNTY2IDMwLjU2MDYgMjQuMDA4IDMxLjQ3NDQgMjQuNjI4QzMyLjc4MDcgMjUuNTE1NiAzMy45MDI0IDI1LjY0ODQgMzQuNDU0MyAyNS42NDg0QzM0LjQ1NDMgMjUuNjQ4NCAzNC4xNjc2IDI1LjYzNzggNDAuMjc5NiAyNS41NjUyQzQwLjQ2OTYgMjUuNTU0NSA0Mi4xNTM5IDI1LjQyMTcgNDIuNzgyOSAyNC4yNDE4QzQzLjAzNzMgMjMuNzU5OSA0My4xOTY4IDIyLjk1MDMgNDIuNDg3MiAyMS43ODI5QzQxLjU5NDkgMjAuMTc0MyAzOS42OTM3IDE4LjI2NDUgMzguMTYxNyAxNi44NTk3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA5IiBoZWlnaHQ9IjY5IiB2aWV3Qm94PSIwIDAgMjA5IDY5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBpZD0iR3JvdXAgMyI+CjxnIGlkPSJHcm91cCA5NiI+CjxwYXRoIGlkPSJGaWxsIDI3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE1NzYgMjYuNjU3OUMxOC4xMTc2IDI3LjA5MzkgMjIuMTMzNiAyOC42NjE5IDIyLjEzMzYgMzIuODI1OUMyMi4xMzM2IDM2LjU4MTkgMTkuMjEzNiAzOS40NjE5IDExLjU4NTYgMzkuNDYxOUM4LjE5NzY1IDM5LjQ2MTkgNS42ODE2NSAzOS4wMjU5IDIuNjEzNjUgMzcuOTY1OUMxLjg0OTY1IDM3LjY3MzkgMS40NDU2NSAzNy45Mjk5IDEuMDA5NjUgMzguNjk3OUwwLjM4OTY0OCAzOC40NDE5TDIuNzk3NjUgMzIuNTY5OUM1LjI3NzY1IDM0LjQyOTkgNy43MjU2NSAzNS4xMjE5IDExLjQ3NzYgMzUuMTIxOUMxNS4wMTc2IDM1LjEyMTkgMTYuOTEzNiAzNC4xMzc5IDE2LjkxMzYgMzIuODk3OUMxNi45MTM2IDMxLjU0NTkgMTQuNTc3NiAzMS4yMTc5IDkuMTgxNjUgMzAuODE3OUM1LjM4OTY1IDMwLjU2MTkgMS41MjE2NSAyOS4xNzM5IDEuNTIxNjUgMjUuMjY5OUMxLjUyMTY1IDIxLjI1NzkgNS42MDU2NSAxOC45MjE5IDEwLjc4NTYgMTguOTIxOUMxMy40NDk2IDE4LjkyMTkgMTYuOTg5NiAxOS42MTc5IDE5LjU0MTYgMjAuNTI5OUMyMC4zODE2IDIwLjc4NTkgMjAuODkzNiAyMC41NjU5IDIxLjI1MzYgMTkuOTQ1OUwyMS44NDE2IDIwLjIzNzlMMTkuNTA1NiAyNS4wNTM5QzE3LjM4OTYgMjQuMDI5OSAxMy44MTM2IDIzLjIyOTkgMTEuMDQxNiAyMy4yMjk5QzguOTYxNjUgMjMuMjI5OSA2LjcwMTY1IDIzLjYyOTkgNi43MDE2NSAyNC43OTc5QzYuNzAxNjUgMjUuOTY1OSA4LjAxMzY1IDI2LjI1NzkgMTMuMTU3NiAyNi42NTc5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCAyOSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC42ODQ3IDM4LjU1MDlDMjUuNDg4NyAzOC41NTA5IDI1LjkyODcgMzguMTE0OSAyNS45Mjg3IDM3LjI3NDlWMjQuMzk0OUMyNS45Mjg3IDIzLjU1NDkgMjUuNDg4NyAyMy4wODI5IDI0LjY0ODcgMjMuMDgyOVYyMi40NjI5SDMyLjMwODdWMjMuMDgyOUMzMS41MDg3IDIzLjA4MjkgMzEuMDMyNyAyMy41NTQ5IDMxLjAzMjcgMjQuMzk0OVYzNy4yNzQ5QzMxLjAzMjcgMzguMTE0OSAzMS41MDg3IDM4LjU1MDkgMzIuMjcyNyAzOC41NTA5VjM5LjIwNjlIMjQuNjg0N1YzOC41NTA5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCAzMSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NS4yOTQgMzQuMzE5OUM1NS4yOTQgMzcuNjAzOSA1Mi44ODIgMzkuMjA3OSA0OC4wMzQgMzkuMjA3OUgzNi4xMDJWMjQuMzk1OUMzNi4xMDIgMjMuNTkxOSAzNS41OTQgMjMuMDgzOSAzNC43OSAyMy4wODM5VjIyLjQ2MzlINDcuMTIyQzUyLjExOCAyMi40NjM5IDU0LjY3NCAyMy45MTk5IDU0LjY3NCAyNi41ODM5QzU0LjY3NCAyOC4yOTk5IDUzLjY1NCAyOS42MTE5IDUyLjE1OCAzMC4yMzU5QzU0LjIzNCAzMC44NTE5IDU1LjI5NCAzMi4yMzk5IDU1LjI5NCAzNC4zMTk5Wk00MS4yMSAyOS4yMTE5SDQ3LjI2NkM0OS4wMTggMjkuMjExOSA0OS43ODYgMjguNjk5OSA0OS43ODYgMjcuNDU5OUM0OS43ODYgMjYuMTQ3OSA0OC44NzQgMjUuNjM1OSA0Ni41MDIgMjUuNjM1OUg0MS4yMVYyOS4yMTE5Wk01MC4wNDIgMzMuODc5OUM1MC4wNDIgMzIuNjAzOSA0OS4xNjYgMzEuOTgzOSA0Ni44NjYgMzEuOTgzOUg0MS4yMVYzNS45OTU5SDQ2LjgzQzQ4Ljg3NCAzNS45OTU5IDUwLjA0MiAzNS4zMzk5IDUwLjA0MiAzMy44Nzk5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCAzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ni4wNTE5IDM0LjU3MzlWMzkuMjA1OUg1OC44MzE5VjI0LjM1NzlDNTguODMxOSAyMy41NTc5IDU4LjM1NTkgMjMuMDgxOSA1Ny41MTU5IDIzLjA4MTlWMjIuNDYxOUg3NS40MzE5VjI3LjA5MzlINzQuNzM5OUM3NC43Mzk5IDI2LjI1NzkgNzQuMjk5OSAyNS43ODE5IDczLjQ5NTkgMjUuNzgxOUg2My45NzE5VjI4Ljg4NTlINzMuMjQzOVYzMi4wOTM5SDYzLjk3MTlWMzUuODQ5OUg3NC4wNzk5Qzc0Ljg4MzkgMzUuODQ5OSA3NS4zNTU5IDM1LjQxMzkgNzUuMzU1OSAzNC41NzM5SDc2LjA1MTlaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDM1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk4LjQxNTEgMzguNTE1OVYzOS4yMDc5SDkyLjM1NTFMODguMDUxMSAzMi45Njc5SDg0LjgwNzFWMzkuMjA3OUg3OS42NjMxVjI0LjM5NTlDNzkuNjYzMSAyMy42Njc5IDc5LjExNTEgMjMuMDgzOSA3OC4zODMxIDIzLjA4MzlWMjIuNDYzOUg5MC41MzExQzk0LjU4MzEgMjIuNDYzOSA5Ny4zMTkxIDI0LjU0MzkgOTcuMzE5MSAyNy40MjM5Qzk3LjMxOTEgMjkuNzIzOSA5NS42MDcxIDMxLjU4MzkgOTMuMTk1MSAzMi40MjM5TDk2Ljg3OTEgMzcuNzQ3OUM5Ny4yODMxIDM4LjMzMTkgOTcuNzU5MSAzOC41MTU5IDk4LjQxNTEgMzguNTE1OVpNODQuODA3MSAyOS43MjM5SDg4Ljk2NzFDOTAuOTM1MSAyOS43MjM5IDkxLjk5NTEgMjguOTk1OSA5MS45OTUxIDI3LjY3OTlDOTEuOTk1MSAyNi4yNTk5IDkxLjA3OTEgMjUuNjM1OSA4OS4wNzUxIDI1LjYzNTlIODQuODA3MVYyOS43MjM5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCAzNyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDAuNDkzIDM4LjU1MDlDMTAxLjI5MyAzOC41NTA5IDEwMS43MzMgMzguMTE0OSAxMDEuNzMzIDM3LjI3NDlWMjQuMzk0OUMxMDEuNzMzIDIzLjU1NDkgMTAxLjI5MyAyMy4wODI5IDEwMC40NTcgMjMuMDgyOVYyMi40NjI5SDEwOC4xNTNWMjMuMDgyOUMxMDcuMzEzIDIzLjA4MjkgMTA2Ljg0MSAyMy41NTQ5IDEwNi44NDEgMjQuMzk0OVYzNy4yNzQ5QzEwNi44NDEgMzguMTE0OSAxMDcuMzEzIDM4LjU1MDkgMTA4LjExNyAzOC41NTA5VjM5LjIwNjlIMTAwLjQ5M1YzOC41NTA5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCAzOSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzIuNDE1IDM4LjU1MDlWMzkuMjA2OUgxMjYuMzU1TDEyNC43OTEgMzUuNzc4OUgxMTcuMjM5TDExNS42NjcgMzkuMjA2OUgxMTAuMDUxVjM4LjU1MDlDMTEwLjcwNyAzOC41NTA5IDExMS4yMTkgMzguMjk0OSAxMTEuNDM5IDM3LjgyMjlMMTE3LjAxOSAyNS43MTA5QzExNy4zMTEgMjUuMTk4OSAxMTcuNDU5IDI0LjU3ODkgMTE3LjQ1OSAyNC4wNjY5QzExNy40NTkgMjMuNDQ2OSAxMTcuMjM5IDIzLjA4MjkgMTE2LjgwMyAyMy4wODI5VjIyLjQ2MjlIMTIzLjk1MUwxMzAuODc5IDM3Ljc0NjlDMTMxLjEzOSAzOC4yNTg5IDEzMS42ODMgMzguNTUwOSAxMzIuNDE1IDM4LjU1MDlaTTEyMy41ODcgMzMuMDc4OUwxMjEuMDY3IDI3LjQ2MjlMMTE4LjQ3OSAzMy4wNzg5SDEyMy41ODdaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDQxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1My40MjcgMjIuNDYyOVYyMy4wODI5QzE1Mi42MjcgMjMuMDgyOSAxNTIuMTE1IDIzLjU1NDkgMTUyLjExNSAyNC4zOTQ5VjM5LjIwNjlIMTQ4LjQ2N0wxMzkuMDE1IDI5LjAzMDlWMzkuMjA2OUgxMzQuNDU5VjI0LjM5NDlDMTM0LjQ1OSAyMy41NTQ5IDEzMy45ODMgMjMuMDgyOSAxMzMuMTQzIDIzLjA4MjlWMjIuNDYyOUgxMzkuNDkxTDE0Ny41NTEgMzEuMTEwOVYyMi40NjI5SDE1My40MjdaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDQzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2LjcyMzkgNDguNTA5OFY0OS4xNjk4QzM1LjU1NTkgNDkuMzQ5OCAzNC43NTU5IDQ5Ljg5NzggMzQuNTM1OSA1MC42OTc4TDI5LjU3NTkgNjguNTM3OEgyMy42NjM5TDE4LjYzMTkgNTUuNDA1OEwxMy44ODc5IDY4LjUzNzhINy45NzU5NEwxLjk1OTk0IDUwLjE1MzhDMS43NzU5NCA0OS41Mjk4IDEuMTkxOTQgNDkuMTY5OCAwLjM4NzkzOSA0OS4xNjk4VjQ4LjUwOThINi45NTU5NEwxMS4xODc5IDYxLjM0OThMMTYuMDc1OSA0OC41MDk4SDIxLjQzOTlMMjYuMzk5OSA2MS4yNDE4TDMwLjAxMTkgNDguNTA5OEgzNi43MjM5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCA0NSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ni42MDY3IDYzLjkwNTlWNjguNTM3OUgzOS4zODY3VjUzLjY4OTlDMzkuMzg2NyA1Mi44ODk5IDM4LjkxNDcgNTIuNDEzOSAzOC4wNzQ3IDUyLjQxMzlWNTEuNzkzOUg1NS45ODY3VjU2LjQyNTlINTUuMjk0N0M1NS4yOTQ3IDU1LjU4NTkgNTQuODU4NyA1NS4xNDk5IDU0LjA1MDcgNTUuMTQ5OUg0NC41MzA3VjU4LjIxMzlINTMuODM0N1Y2MS40MjU5SDQ0LjUzMDdWNjUuMTgxOUg1NC42NzQ3QzU1LjQ3NDcgNjUuMTgxOSA1NS45MTQ3IDY0Ljc0MTkgNTUuOTE0NyA2My45MDU5SDU2LjYwNjdaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDQ3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYxLjAyMDYgNTMuNzI1OUM2MS4wMjA2IDUyLjg4OTkgNjAuNTg0NiA1Mi40MTM5IDU5Ljc0NDYgNTIuNDEzOVY1MS43OTM5SDY2LjE2NDZWNjQuNzQxOUg3NC41NTY2Qzc1LjM5NjYgNjQuNzQxOSA3NS44MzI2IDY0LjI2OTkgNzUuODMyNiA2My40Mjk5SDc2LjQ4ODZWNjguNTM3OUg2MS4wMjA2VjUzLjcyNTlaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDQ5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgwLjEzNzggNTMuNzI1OUM4MC4xMzc4IDUyLjg4OTkgNzkuNzAxOCA1Mi40MTM5IDc4Ljg2MTggNTIuNDEzOVY1MS43OTM5SDg1LjI4MThWNjQuNzQxOUg5My42NzM4Qzk0LjUwOTggNjQuNzQxOSA5NC45ODU4IDY0LjI2OTkgOTQuOTg1OCA2My40Mjk5SDk1LjYwNThWNjguNTM3OUg4MC4xMzc4VjUzLjcyNTlaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDUxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExOC41MTMgNTEuNzkzVjUyLjQxM0MxMTcuNzEzIDUyLjQxMyAxMTcuMjAxIDUyLjg4OSAxMTcuMjAxIDUzLjcyNVY2OC41NDFIMTEzLjU1M0wxMDQuMTA1IDU4LjM2MVY2OC41NDFIOTkuNTQ0N1Y1My43MjVDOTkuNTQ0NyA1Mi44ODkgOTkuMDcyNyA1Mi40MTMgOTguMjMyNyA1Mi40MTNWNTEuNzkzSDEwNC42MTNMMTEyLjY0MSA2MC40NDFWNTEuNzkzSDExOC41MTNaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDUzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzOS43MTIgNjMuOTA1OVY2OC41Mzc5SDEyMi40ODhWNTMuNjg5OUMxMjIuNDg4IDUyLjg4OTkgMTIyLjAxNiA1Mi40MTM5IDEyMS4xNzYgNTIuNDEzOVY1MS43OTM5SDEzOS4wOTJWNTYuNDI1OUgxMzguMzk2QzEzOC4zOTYgNTUuNTg1OSAxMzcuOTYgNTUuMTQ5OSAxMzcuMTU2IDU1LjE0OTlIMTI3LjYzMlY1OC4yMTM5SDEzNi45NFY2MS40MjU5SDEyNy42MzJWNjUuMTgxOUgxMzcuNzhDMTM4LjU0NCA2NS4xODE5IDEzOS4wMTYgNjQuNzQxOSAxMzkuMDE2IDYzLjkwNTlIMTM5LjcxMloiIGZpbGw9IiNGRUZFRkUiLz4KPHBhdGggaWQ9IkZpbGwgNTUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUyLjU1MiA1OC4yNTJDMTU2Ljc4NCA1OC44IDE2MC4yODggNTkuNzEyIDE2MC4yODggNjMuMzI0QzE2MC4yODggNjcuMTg4IDE1Ni40MiA2OC43OTYgMTUxLjg5NiA2OC43OTZDMTQ4LjkwNCA2OC43OTYgMTQ1Ljc2OCA2OC4yMTIgMTQyLjU5MiA2Ny4wOEwxNDMuOTc2IDYyLjU1NkwxNDQuNjM2IDYyLjc3NkMxNDQuNDg4IDYzLjQ2OCAxNDQuODkyIDYzLjk0IDE0NS43MjggNjQuMzA4QzE0Ny40OCA2NS4wMzYgMTQ5LjE5NiA2NS4zNjQgMTUxLjM0OCA2NS4zNjRDMTUzLjE3MiA2NS4zNjQgMTU1LjMyNCA2NS4wNzIgMTU1LjMyNCA2My43MjRDMTU1LjMyNCA2Mi42MjggMTU0LjA4NCA2Mi4yNjQgMTQ5LjEyNCA2MS43NTJDMTQ2LjAyIDYxLjQ2IDE0Mi44ODQgNjAuMzMyIDE0Mi44ODQgNTcuMDg0QzE0Mi44ODQgNTMuNTg0IDE0Ni44MjQgNTEuNTQgMTUxLjcxMiA1MS41NEMxNTQuMjY4IDUxLjU0IDE1Ni42MDQgNTIuMDQ4IDE1OS43NCA1My4xOEwxNTcuNzMyIDU3LjQxMkwxNTcuMTEyIDU3LjEyQzE1Ny4zMjggNTYuNjQ4IDE1Ny4yMiA1Ni4wOTYgMTU2LjUyOCA1NS43NjhDMTU1LjI1MiA1NS4yNiAxNTIuODggNTQuOTY4IDE1MS40OTIgNTQuOTY4QzE0OS44ODggNTQuOTY4IDE0Ny44MDggNTUuNDA4IDE0Ny44MDggNTYuNjQ4QzE0Ny44MDggNTcuNTYgMTQ5LjI2OCA1Ny44NDggMTUxLjA1NiA1OC4wNjhMMTUyLjU1MiA1OC4yNTJaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3My4wMTcgNTguMjUyQzE3Ny4yNDkgNTguOCAxODAuNzUzIDU5LjcxMiAxODAuNzUzIDYzLjMyNEMxODAuNzUzIDY3LjE4OCAxNzYuODQ5IDY4Ljc5NiAxNzIuMzYxIDY4Ljc5NkMxNjkuMzMzIDY4Ljc5NiAxNjYuMjMzIDY4LjIxMiAxNjMuMDYxIDY3LjA4TDE2NC40MDkgNjIuNTU2TDE2NS4wNjUgNjIuNzc2QzE2NC45NTMgNjMuNDY4IDE2NS4zMjEgNjMuOTQgMTY2LjE1NyA2NC4zMDhDMTY3Ljk0NSA2NS4wMzYgMTY5LjY2MSA2NS4zNjQgMTcxLjc3NyA2NS4zNjRDMTczLjYwMSA2NS4zNjQgMTc1Ljc4OSA2NS4wNzIgMTc1Ljc4OSA2My43MjRDMTc1Ljc4OSA2Mi42MjggMTc0LjUxMyA2Mi4yNjQgMTY5LjU4OSA2MS43NTJDMTY2LjQ4NSA2MS40NiAxNjMuMzEzIDYwLjMzMiAxNjMuMzEzIDU3LjA4NEMxNjMuMzEzIDUzLjU4NCAxNjcuMjg5IDUxLjU0IDE3Mi4xNzcgNTEuNTRDMTc0LjczMyA1MS41NCAxNzcuMDI5IDUyLjA0OCAxODAuMTY5IDUzLjE4TDE3OC4xOTcgNTcuNDEyTDE3Ny41ODEgNTcuMTJDMTc3Ljc2MSA1Ni42NDggMTc3LjY0OSA1Ni4wOTYgMTc2Ljk1NyA1NS43NjhDMTc1LjcxNyA1NS4yNiAxNzMuMzQ1IDU0Ljk2OCAxNzEuOTI1IDU0Ljk2OEMxNzAuMzE3IDU0Ljk2OCAxNjguMjczIDU1LjQwOCAxNjguMjczIDU2LjY0OEMxNjguMjczIDU3LjU2IDE2OS43MzcgNTcuODQ4IDE3MS41MjEgNTguMDY4TDE3My4wMTcgNTguMjUyWiIgZmlsbD0iI0ZFRkVGRSIvPgo8L2c+CjxnIGlkPSJHcm91cCA5NyI+CjxwYXRoIGlkPSJGaWxsIDU5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5MC44OTIgMTYuNTg5NkgyMDguMzI4TDIwNS45MjQgMTIuMzkzNkgxOTMuMzM2TDE5MC44OTIgMTYuNTg5NloiIGZpbGw9IiNGRUZFRkUiLz4KPHBhdGggaWQ9IkZpbGwgNjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTk3LjY3NyAxOC4yNjc2TDIwMC4wODkgMjIuNDYzNkgyMDUuOTI1TDIwOC4zMjkgMTguMjY3NkgxOTcuNjc3WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCA2MyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODguMDEzIDE4LjI2NzZIMTcwLjU3M0wxNzMuMDE3IDIyLjQ2MzZIMTg1LjU2OUwxODguMDEzIDE4LjI2NzZaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDY1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3OC44MTggMTIuMzk0NUgxNzMuMDE4TDE3MC41NyAxNi41OTA1SDE4MS4yMjZMMTc4LjgxOCAxMi4zOTQ1WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCA2NyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOTkuMTM4IDEwLjcxNjRMMjAyLjA1NCA1LjY4MDM4TDE5OS42MSAxLjQ4NDM4TDE5NC4yODYgMTAuNzE2NEgxOTkuMTM4WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCA2OSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODkuNDcgMTkuMTA3NEwxODAuNzUgMzQuMTc1NEgxODUuNTY2TDE5MS44NzggMjMuMzAzNEwxODkuNDcgMTkuMTA3NFoiIGZpbGw9IiNGRUZFRkUiLz4KPHBhdGggaWQ9IkZpbGwgNzEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTc5Ljc2NyAyNC4xNDA2TDE3Ni44ODMgMjkuMTQwNkwxNzkuMjkxIDMzLjMzMjZMMTg0LjYxOSAyNC4xNDA2SDE3OS43NjdaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDczIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4OC4wMTMgMTYuNTg5NEwxNzkuMjg5IDEuNDg1MzVMMTc2Ljg4NSA1LjY4MTM1TDE4My4xNTcgMTYuNTg5NEgxODguMDEzWiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBpZD0iRmlsbCA3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOTAuNDE5IDI5LjEzODRMMTkzLjMzNSAzNC4xNzQ0SDE5OC4xNTVMMTkyLjgyNyAyNC45NDI0TDE5MC40MTkgMjkuMTM4NFoiIGZpbGw9IiNGRUZFRkUiLz4KPHBhdGggaWQ9IkZpbGwgNzciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkwLjg5MiAxOC4yNjc2TDE5OS42MTIgMzMuMzM1NkwyMDIuMDU2IDI5LjEzOTZMMTk1Ljc0NCAxOC4yNjc2SDE5MC44OTJaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGlkPSJGaWxsIDc5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5OC4xNTQgMC42NDg0MzhIMTkzLjMzOEwxODkuNDcgNy4zNjA0NEwxODUuNTcgMC42NDg0MzhIMTgwLjc1TDE4OS40NyAxNS43NDg0TDE5OC4xNTQgMC42NDg0MzhaIiBmaWxsPSIjRkVGRUZFIi8+CjwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgwIiB3aWR0aD0iNjQwIiB2ZXJzaW9uPSIxIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS13aWR0aD0iMXB0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDY0MHY0ODBIMHoiLz48cGF0aCBmaWxsPSIjMDEwMTdlIiBkPSJNMCAxNjAuMDAzaDY0MFY0ODBIMHoiLz48cGF0aCBmaWxsPSIjZmUwMTAxIiBkPSJNMCAzMTkuOTk3aDY0MFY0ODBIMHoiLz48L2c+PC9zdmc+"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header_shadow.827cfd83.svg";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/lines.c26c862d.svg";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/linesMobile.da17f20e.svg";

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5NiA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDEyNDYgQ29weSI+CjxwYXRoIGlkPSJQYXRoIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU2LjgzOTYgNS4yNzUzN0w5NC4wNzUgMjYuNTc1NkM5NS40NjQ1IDI3LjA3NDcgOTYuMDk1IDI4LjA3MjcgOTUuMzM1OSAyOS45MzVMODUuMjQyMSA2MC4wNzc5Qzg0LjczNCA2Mi4yMDE5IDgzLjU5NTUgNjIuNjk0OCA4MS43MDQgNjMuODIwN0w0NC40Njg2IDg1LjExNDlDNDIuNjk5NiA4NS44NjM0IDQwLjU1NzIgODUuODYzNCAzOS40MTg2IDg0Ljg2NTNMMi4xODMyNCA2My42OTI5QzAuNzk5ODQgNjMuMDcyMSAwLjQyMDMyNCA2Mi4yMDE5IDAuNzk5ODQgNjAuODI2NUwxMC43NzEzIDMwLjMxMjNDMTEuMTQ0NyAyOC41NjU3IDEyLjU0MDMgMjcuNjk1NCAxNC4zMDMyIDI2LjcwMzRMNTEuOTEyIDUuMTQ3NTdDNTMuNjgxIDQuNDA1MSA1NS43MDExIDQuNTI2ODIgNTYuODM5NiA1LjI3NTM3WiIgZmlsbD0iI0UzMEIxNyIvPgo8ZyBpZD0iR3JvdXAgMzM2Ij4KPHBhdGggaWQ9IlN0cm9rZSA1OTI4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQxLjY2MDYgNTguOTkwNVYzMi42NDg0TDY0LjUgNDUuNjQ4NEw0MS42NjA2IDU4Ljk5MDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
__webpack_require__(138);
module.exports = __webpack_require__(146);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(137)["default"];

var _require = __webpack_require__(63),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(63),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(139),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 139 */
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
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 67, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(67);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/App.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/App.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/App";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/App.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Advantage.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Advantage.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Advantage";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/components/Advantage.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/AllProducts/AccordionItem.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/AllProducts/AccordionItem.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/AllProducts/AccordionItem";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/components/AllProducts/AccordionItem.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/AllProducts/AllProductsSection.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/AllProducts/AllProductsSection.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/AllProducts/AllProductsSection";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/components/AllProducts/AllProductsSection.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/AllProducts/ProductDescription.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 57))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/AllProducts/ProductDescription.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(57);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/AllProducts/ProductDescription";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/components/AllProducts/ProductDescription.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Button.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Button.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Button";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/components/Button.js';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Cart.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 41))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Cart.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Cart";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/components/Cart.js';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Composition.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 14))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Composition.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Composition";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/components/Composition.js';
var t_9 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/ContactForm.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/ContactForm.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/ContactForm";
  }
}), universalOptions);
t_9.template = '__react_static_root__/src/components/ContactForm.js';
var t_10 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Container.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Container.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Container";
  }
}), universalOptions);
t_10.template = '__react_static_root__/src/components/Container.js';
var t_11 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Content.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Content.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Content";
  }
}), universalOptions);
t_11.template = '__react_static_root__/src/components/Content.js';
var t_12 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Footer.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Footer.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Footer";
  }
}), universalOptions);
t_12.template = '__react_static_root__/src/components/Footer.js';
var t_13 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Header.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Header.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Header";
  }
}), universalOptions);
t_13.template = '__react_static_root__/src/components/Header.js';
var t_14 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/MainProducts/MainProductsSection.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/MainProducts/MainProductsSection.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/MainProducts/MainProductsSection";
  }
}), universalOptions);
t_14.template = '__react_static_root__/src/components/MainProducts/MainProductsSection.js';
var t_15 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/MainProducts/ProductDescription.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/MainProducts/ProductDescription.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/MainProducts/ProductDescription";
  }
}), universalOptions);
t_15.template = '__react_static_root__/src/components/MainProducts/ProductDescription.js';
var t_16 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/MediaAboutUs.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/MediaAboutUs.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/MediaAboutUs";
  }
}), universalOptions);
t_16.template = '__react_static_root__/src/components/MediaAboutUs.js';
var t_17 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Navigation.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Navigation.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Navigation";
  }
}), universalOptions);
t_17.template = '__react_static_root__/src/components/Navigation.js';
var t_18 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Product.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Product.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Product";
  }
}), universalOptions);
t_18.template = '__react_static_root__/src/components/Product.js';
var t_19 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/ProductsChoose.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/ProductsChoose.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/ProductsChoose";
  }
}), universalOptions);
t_19.template = '__react_static_root__/src/components/ProductsChoose.js';
var t_20 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/QualitySafety.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/QualitySafety.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/QualitySafety";
  }
}), universalOptions);
t_20.template = '__react_static_root__/src/components/QualitySafety.js';
var t_21 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Questions.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Questions.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Questions";
  }
}), universalOptions);
t_21.template = '__react_static_root__/src/components/Questions.js';
var t_22 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Reviews.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Reviews.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Reviews";
  }
}), universalOptions);
t_22.template = '__react_static_root__/src/components/Reviews.js';
var t_23 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Router.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Router.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Router";
  }
}), universalOptions);
t_23.template = '__react_static_root__/src/components/Router.js';
var t_24 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Title.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Title.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Title";
  }
}), universalOptions);
t_24.template = '__react_static_root__/src/components/Title.js';
var t_25 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/WorldQuality.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/WorldQuality.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/WorldQuality";
  }
}), universalOptions);
t_25.template = '__react_static_root__/src/components/WorldQuality.js';
var t_26 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/constants.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 2))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/constants.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(2);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/constants";
  }
}), universalOptions);
t_26.template = '__react_static_root__/src/constants.js';
var t_27 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Dynamic.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Dynamic.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(56);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Dynamic";
  }
}), universalOptions);
t_27.template = '__react_static_root__/src/containers/Dynamic.js';
var t_28 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_28.template = '__react_static_root__/src/containers/Post.js';
var t_29 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/contexts/CartContext.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/contexts/CartContext.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/contexts/CartContext";
  }
}), universalOptions);
t_29.template = '__react_static_root__/src/contexts/CartContext.js';
var t_30 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/contexts/DataContext.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/contexts/DataContext.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/contexts/DataContext";
  }
}), universalOptions);
t_30.template = '__react_static_root__/src/contexts/DataContext.js';
var t_31 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/contexts/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 9))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/contexts/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/contexts/index";
  }
}), universalOptions);
t_31.template = '__react_static_root__/src/contexts/index.js';
var t_32 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/data/allData.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/data/allData.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/data/allData";
  }
}), universalOptions);
t_32.template = '__react_static_root__/src/data/allData.js';
var t_33 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/data/productsData.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 13))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/data/productsData.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/data/productsData";
  }
}), universalOptions);
t_33.template = '__react_static_root__/src/data/productsData.js';
var t_34 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(55);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/index";
  }
}), universalOptions);
t_34.template = '__react_static_root__/src/index.js';
var t_35 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_35.template = '__react_static_root__/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0,
  '__react_static_root__/src/App.js': t_1,
  '__react_static_root__/src/components/Advantage.js': t_2,
  '__react_static_root__/src/components/AllProducts/AccordionItem.js': t_3,
  '__react_static_root__/src/components/AllProducts/AllProductsSection.js': t_4,
  '__react_static_root__/src/components/AllProducts/ProductDescription.js': t_5,
  '__react_static_root__/src/components/Button.js': t_6,
  '__react_static_root__/src/components/Cart.js': t_7,
  '__react_static_root__/src/components/Composition.js': t_8,
  '__react_static_root__/src/components/ContactForm.js': t_9,
  '__react_static_root__/src/components/Container.js': t_10,
  '__react_static_root__/src/components/Content.js': t_11,
  '__react_static_root__/src/components/Footer.js': t_12,
  '__react_static_root__/src/components/Header.js': t_13,
  '__react_static_root__/src/components/MainProducts/MainProductsSection.js': t_14,
  '__react_static_root__/src/components/MainProducts/ProductDescription.js': t_15,
  '__react_static_root__/src/components/MediaAboutUs.js': t_16,
  '__react_static_root__/src/components/Navigation.js': t_17,
  '__react_static_root__/src/components/Product.js': t_18,
  '__react_static_root__/src/components/ProductsChoose.js': t_19,
  '__react_static_root__/src/components/QualitySafety.js': t_20,
  '__react_static_root__/src/components/Questions.js': t_21,
  '__react_static_root__/src/components/Reviews.js': t_22,
  '__react_static_root__/src/components/Router.js': t_23,
  '__react_static_root__/src/components/Title.js': t_24,
  '__react_static_root__/src/components/WorldQuality.js': t_25,
  '__react_static_root__/src/constants.js': t_26,
  '__react_static_root__/src/containers/Dynamic.js': t_27,
  '__react_static_root__/src/containers/Post.js': t_28,
  '__react_static_root__/src/contexts/CartContext.js': t_29,
  '__react_static_root__/src/contexts/DataContext.js': t_30,
  '__react_static_root__/src/contexts/index.js': t_31,
  '__react_static_root__/src/data/allData.js': t_32,
  '__react_static_root__/src/data/productsData.js': t_33,
  '__react_static_root__/src/index.js': t_34,
  '__react_static_root__/src/containers/Post': t_35
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 140 */
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
/* 141 */
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

var _utils = __webpack_require__(54);

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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 21,
	"./": 21,
	"./index": 21,
	"./index.js": 21
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
webpackContext.id = 142;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(53);

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

var _propTypes = __webpack_require__(64);

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
/* 144 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(65);

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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(147);

var _interopRequireDefault = __webpack_require__(148);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(149));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(58));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(150);
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

var App = __webpack_require__(55)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("/Users/chesminsky/Desktop/cyber-landing/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 151 */
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
/* 152 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)(false);
// Module
exports.push([module.i, "body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);



/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("react-dropdown/style.css");

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    -webkit-animation: App-logo-spin infinite 20s linear;\n            animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("react-modal-video/css/modal-video.min.css");

/***/ })
/******/ ]);
});