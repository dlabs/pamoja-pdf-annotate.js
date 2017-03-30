(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PDFAnnotate"] = factory();
	else
		root["PDFAnnotate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _PDFJSAnnotate2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _StoreAdapter = __webpack_require__(2);
	
	var _StoreAdapter2 = _interopRequireDefault(_StoreAdapter);
	
	var _LocalStoreAdapter = __webpack_require__(8);
	
	var _LocalStoreAdapter2 = _interopRequireDefault(_LocalStoreAdapter);
	
	var _render = __webpack_require__(10);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _UI = __webpack_require__(28);
	
	var _UI2 = _interopRequireDefault(_UI);
	
	var _initColorPicker = __webpack_require__(35);
	
	var _initColorPicker2 = _interopRequireDefault(_initColorPicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PDFJS = __webpack_require__(36);
	
	exports.default = {
	
	  initColorPicker: _initColorPicker2.default,
	
	  /**
	   * Abstract class that needs to be defined so PDFJSAnnotate
	   * knows how to communicate with your server.
	   */
	  StoreAdapter: _StoreAdapter2.default,
	
	  /**
	   * Implementation of StoreAdapter that stores annotation data to localStorage.
	   */
	  LocalStoreAdapter: _LocalStoreAdapter2.default,
	
	  /**
	   * Abstract instance of StoreAdapter
	   */
	  __storeAdapter: new _StoreAdapter2.default(),
	
	  /**
	   * Getter for the underlying StoreAdapter property
	   *
	   * @return {StoreAdapter}
	   */
	  getStoreAdapter: function getStoreAdapter() {
	    return this.__storeAdapter;
	  },
	
	
	  /**
	   * Setter for the underlying StoreAdapter property
	   *
	   * @param {StoreAdapter} adapter The StoreAdapter implementation to be used.
	   */
	  setStoreAdapter: function setStoreAdapter(adapter) {
	    // TODO this throws an error when bundled
	    // if (!(adapter instanceof StoreAdapter)) {
	    //   throw new Error('adapter must be an instance of StoreAdapter');
	    // }
	
	    this.__storeAdapter = adapter;
	  },
	
	
	  /**
	   * UI is a helper for instrumenting UI interactions for creating,
	   * editing, and deleting annotations in the browser.
	   */
	  UI: _UI2.default,
	
	  /**
	   * Render the annotations for a page in the PDF Document
	   *
	   * @param {SVGElement} svg The SVG element that annotations should be rendered to
	   * @param {PageViewport} viewport The PDFPage.getViewport data
	   * @param {Object} data The StoreAdapter.getAnnotations data
	   * @return {Promise}
	   */
	  render: _render2.default,
	
	  /**
	   * Convenience method for getting annotation data
	   *
	   * @alias StoreAdapter.getAnnotations
	   * @param {String} documentId The ID of the document
	   * @param {String} pageNumber The page number
	   * @return {Promise}
	   */
	  getAnnotations: function getAnnotations(documentId, pageNumber) {
	    var _getStoreAdapter;
	
	    return (_getStoreAdapter = this.getStoreAdapter()).getAnnotations.apply(_getStoreAdapter, arguments);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _abstractFunction = __webpack_require__(3);
	
	var _abstractFunction2 = _interopRequireDefault(_abstractFunction);
	
	var _event = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Adapter should never be invoked publicly
	var StoreAdapter = function () {
	  /**
	   * Create a new StoreAdapter instance
	   *
	   * @param {Object} [definition] The definition to use for overriding abstract methods
	   */
	  function StoreAdapter() {
	    var _this = this;
	
	    var definition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, StoreAdapter);
	
	    // Copy each function from definition if it is a function we know about
	    Object.keys(definition).forEach(function (key) {
	      if (typeof definition[key] === 'function' && typeof _this[key] === 'function') {
	        _this[key] = definition[key];
	      }
	    });
	  }
	
	  /**
	   * Get all the annotations for a given document and page number.
	   *
	   * @param {String} documentId The ID for the document the annotations belong to
	   * @param {Number} pageNumber The number of the page the annotations belong to
	   * @return {Promise}
	   */
	
	
	  _createClass(StoreAdapter, [{
	    key: '__getAnnotations',
	    value: function __getAnnotations(documentId, pageNumber) {
	      (0, _abstractFunction2.default)('getAnnotations');
	    }
	  }, {
	    key: 'getAnnotation',
	
	
	    /**
	     * Get the definition for a specific annotation.
	     *
	     * @param {String} documentId The ID for the document the annotation belongs to
	     * @param {String} annotationId The ID for the annotation
	     * @return {Promise}
	     */
	    value: function getAnnotation(documentId, annotationId) {
	      (0, _abstractFunction2.default)('getAnnotation');
	    }
	
	    /**
	     * Add an annotation
	     *
	     * @param {String} documentId The ID for the document to add the annotation to
	     * @param {String} pageNumber The page number to add the annotation to
	     * @param {Object} annotation The definition for the new annotation
	     * @return {Promise}
	     */
	
	  }, {
	    key: '__addAnnotation',
	    value: function __addAnnotation(documentId, pageNumber, annotation) {
	      (0, _abstractFunction2.default)('addAnnotation');
	    }
	  }, {
	    key: '__editAnnotation',
	
	
	    /**
	     * Edit an annotation
	     *
	     * @param {String} documentId The ID for the document
	     * @param {String} pageNumber the page number of the annotation
	     * @param {Object} annotation The definition of the modified annotation
	     * @return {Promise}
	     */
	    value: function __editAnnotation(documentId, pageNumber, annotation) {
	      (0, _abstractFunction2.default)('editAnnotation');
	    }
	  }, {
	    key: '__deleteAnnotation',
	
	
	    /**
	     * Delete an annotation
	     *
	     * @param {String} documentId The ID for the document
	     * @param {String} annotationId The ID for the annotation
	     * @return {Promise}
	     */
	    value: function __deleteAnnotation(documentId, annotationId) {
	      (0, _abstractFunction2.default)('deleteAnnotation');
	    }
	  }, {
	    key: 'getComments',
	
	
	    /**
	     * Get all the comments for an annotation
	     *
	     * @param {String} documentId The ID for the document
	     * @param {String} annotationId The ID for the annotation
	     * @return {Promise}
	     */
	    value: function getComments(documentId, annotationId) {
	      (0, _abstractFunction2.default)('getComments');
	    }
	
	    /**
	     * Add a new comment
	     *
	     * @param {String} documentId The ID for the document
	     * @param {String} annotationId The ID for the annotation
	     * @param {Object} content The definition of the comment
	     * @return {Promise}
	     */
	
	  }, {
	    key: '__addComment',
	    value: function __addComment(documentId, annotationId, content) {
	      (0, _abstractFunction2.default)('addComment');
	    }
	  }, {
	    key: '__deleteComment',
	
	
	    /**
	     * Delete a comment
	     *
	     * @param {String} documentId The ID for the document
	     * @param {String} commentId The ID for the comment
	     * @return {Promise}
	     */
	    value: function __deleteComment(documentId, commentId) {
	      (0, _abstractFunction2.default)('deleteComment');
	    }
	  }, {
	    key: 'getAnnotations',
	    get: function get() {
	      return this.__getAnnotations;
	    },
	    set: function set(fn) {
	      this.__getAnnotations = function getAnnotations(documentId, pageNumber) {
	        return fn.apply(undefined, arguments).then(function (annotations) {
	          // TODO may be best to have this happen on the server
	          if (annotations.annotations) {
	            annotations.annotations.forEach(function (a) {
	              a.documentId = documentId;
	            });
	          }
	          return annotations;
	        });
	      };
	    }
	  }, {
	    key: 'addAnnotation',
	    get: function get() {
	      return this.__addAnnotation;
	    },
	    set: function set(fn) {
	      this.__addAnnotation = function addAnnotation(documentId, pageNumber, annotation) {
	        return fn.apply(undefined, arguments).then(function (annotation) {
	          (0, _event.fireEvent)('annotation:add', documentId, pageNumber, annotation);
	          return annotation;
	        });
	      };
	    }
	  }, {
	    key: 'editAnnotation',
	    get: function get() {
	      return this.__editAnnotation;
	    },
	    set: function set(fn) {
	      this.__editAnnotation = function editAnnotation(documentId, annotationId, annotation) {
	        return fn.apply(undefined, arguments).then(function (annotation) {
	          (0, _event.fireEvent)('annotation:edit', documentId, annotationId, annotation);
	          return annotation;
	        });
	      };
	    }
	  }, {
	    key: 'deleteAnnotation',
	    get: function get() {
	      return this.__deleteAnnotation;
	    },
	    set: function set(fn) {
	      this.__deleteAnnotation = function deleteAnnotation(documentId, annotationId) {
	        return fn.apply(undefined, arguments).then(function (success) {
	          if (success) {
	            (0, _event.fireEvent)('annotation:delete', documentId, annotationId);
	          }
	          return success;
	        });
	      };
	    }
	  }, {
	    key: 'addComment',
	    get: function get() {
	      return this.__addComment;
	    },
	    set: function set(fn) {
	      this.__addComment = function addComment(documentId, annotationId, content) {
	        return fn.apply(undefined, arguments).then(function (comment) {
	          (0, _event.fireEvent)('comment:add', documentId, annotationId, comment);
	          return comment;
	        });
	      };
	    }
	  }, {
	    key: 'deleteComment',
	    get: function get() {
	      return this.__deleteComment;
	    },
	    set: function set(fn) {
	      this.__deleteComment = function deleteComment(documentId, commentId) {
	        return fn.apply(undefined, arguments).then(function (success) {
	          if (success) {
	            (0, _event.fireEvent)('comment:delete', documentId, commentId);
	          }
	          return success;
	        });
	      };
	    }
	  }]);
	
	  return StoreAdapter;
	}();
	
	exports.default = StoreAdapter;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = abstractFunction;
	/**
	 * Throw an Error for an abstract function that hasn't been implemented.
	 *
	 * @param {String} name The name of the abstract function
	 */
	function abstractFunction(name) {
	  throw new Error(name + ' is not implemented');
	}
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fireEvent = fireEvent;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	
	var _events = __webpack_require__(5);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = new _events2.default();
	
	var clickNode = void 0;
	
	/**
	 * Handle document.click event
	 *
	 * @param {Event} e The DOM event to be handled
	 */
	document.addEventListener('click', function handleDocumentClick(e) {
	  if (!(0, _utils.findSVGAtPoint)(e.clientX, e.clientY)) {
	    return;
	  }
	
	  var target = (0, _utils.findAnnotationAtPoint)(e.clientX, e.clientY);
	
	  // Emit annotation:blur if clickNode is no longer clicked
	  if (clickNode && clickNode !== target) {
	    emitter.emit('annotation:blur', clickNode, e);
	  }
	
	  // Emit annotation:click if target was clicked
	  if (target) {
	    emitter.emit('annotation:click', target, e);
	  }
	
	  clickNode = target;
	});
	
	// let mouseOverNode;
	// document.addEventListener('mousemove', function handleDocumentMousemove(e) {
	//   let target = findAnnotationAtPoint(e.clientX, e.clientY);
	//
	//   // Emit annotation:mouseout if target was mouseout'd
	//   if (mouseOverNode && !target) {
	//     emitter.emit('annotation:mouseout', mouseOverNode);
	//   }
	//
	//   // Emit annotation:mouseover if target was mouseover'd
	//   if (target && mouseOverNode !== target) {
	//     emitter.emit('annotation:mouseover', target);
	//   }
	//
	//   mouseOverNode = target;
	// });
	
	function fireEvent() {
	  emitter.emit.apply(emitter, arguments);
	};
	function addEventListener() {
	  emitter.on.apply(emitter, arguments);
	};
	function removeEventListener() {
	  emitter.removeListener.apply(emitter, arguments);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BORDER_COLOR = undefined;
	exports.findSVGContainer = findSVGContainer;
	exports.findSVGAtPoint = findSVGAtPoint;
	exports.findAnnotationAtPoint = findAnnotationAtPoint;
	exports.pointIntersectsRect = pointIntersectsRect;
	exports.getOffsetAnnotationRect = getOffsetAnnotationRect;
	exports.getAnnotationRect = getAnnotationRect;
	exports.scaleUp = scaleUp;
	exports.scaleDown = scaleDown;
	exports.getScroll = getScroll;
	exports.getOffset = getOffset;
	exports.disableUserSelect = disableUserSelect;
	exports.enableUserSelect = enableUserSelect;
	exports.getMetadata = getMetadata;
	
	var _createStylesheet = __webpack_require__(7);
	
	var _createStylesheet2 = _interopRequireDefault(_createStylesheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BORDER_COLOR = exports.BORDER_COLOR = '#00BFFF';
	
	var userSelectStyleSheet = (0, _createStylesheet2.default)({
	  body: {
	    '-webkit-user-select': 'none',
	    '-moz-user-select': 'none',
	    '-ms-user-select': 'none',
	    'user-select': 'none'
	  }
	});
	userSelectStyleSheet.setAttribute('data-pdf-annotate-user-select', 'true');
	
	/**
	 * Find the SVGElement that contains all the annotations for a page
	 *
	 * @param {Element} node An annotation within that container
	 * @return {SVGElement} The container SVG or null if it can't be found
	 */
	function findSVGContainer(node) {
	  var parentNode = node;
	
	  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
	    if (parentNode.nodeName.toUpperCase() === 'SVG' && parentNode.getAttribute('data-pdf-annotate-container') === 'true') {
	      return parentNode;
	    }
	  }
	
	  return null;
	}
	
	/**
	 * Find an SVGElement container at a given point
	 *
	 * @param {Number} x The x coordinate of the point
	 * @param {Number} y The y coordinate of the point
	 * @return {SVGElement} The container SVG or null if one can't be found
	 */
	function findSVGAtPoint(x, y) {
	  var elements = document.querySelectorAll('svg[data-pdf-annotate-container="true"]');
	
	  for (var i = 0, l = elements.length; i < l; i++) {
	    var el = elements[i];
	    var rect = el.getBoundingClientRect();
	
	    if (pointIntersectsRect(x, y, rect)) {
	
	      return el;
	    }
	  }
	
	  return null;
	}
	
	/**
	 * Find an Element that represents an annotation at a given point
	 *
	 * @param {Number} x The x coordinate of the point
	 * @param {Number} y The y coordinate of the point
	 * @return {Element} The annotation element or null if one can't be found
	 */
	function findAnnotationAtPoint(x, y) {
	  var svg = findSVGAtPoint(x, y);
	  if (!svg) {
	    return;
	  }
	  var elements = svg.querySelectorAll('[data-pdf-annotate-type]');
	
	  // Find a target element within SVG
	  for (var i = 0, l = elements.length; i < l; i++) {
	    var el = elements[i];
	    if (pointIntersectsRect(x, y, getOffsetAnnotationRect(el))) {
	      return el;
	    }
	  }
	
	  return null;
	}
	
	/**
	 * Determine if a point intersects a rect
	 *
	 * @param {Number} x The x coordinate of the point
	 * @param {Number} y The y coordinate of the point
	 * @param {Object} rect The points of a rect (likely from getBoundingClientRect)
	 * @return {Boolean} True if a collision occurs, otherwise false
	 */
	function pointIntersectsRect(x, y, rect) {
	  return y >= rect.top && y <= rect.bottom && x >= rect.left && x <= rect.right;
	}
	
	/**
	 * Get the rect of an annotation element accounting for offset.
	 *
	 * @param {Element} el The element to get the rect of
	 * @return {Object} The dimensions of the element
	 */
	function getOffsetAnnotationRect(el) {
	  var rect = getAnnotationRect(el);
	
	  var _getOffset = getOffset(el),
	      offsetLeft = _getOffset.offsetLeft,
	      offsetTop = _getOffset.offsetTop;
	
	  return {
	    top: rect.top + offsetTop,
	    left: rect.left + offsetLeft,
	    right: rect.right + offsetLeft,
	    bottom: rect.bottom + offsetTop
	  };
	}
	
	/**
	 * Get the rect of an annotation element.
	 *
	 * @param {Element} el The element to get the rect of
	 * @return {Object} The dimensions of the element
	 */
	function getAnnotationRect(el) {
	  var h = 0,
	      w = 0,
	      x = 0,
	      y = 0;
	  var rect = el.getBoundingClientRect();
	  // TODO this should be calculated somehow
	  var LINE_OFFSET = 16;
	
	  switch (el.nodeName.toLowerCase()) {
	    case 'path':
	      var minX = void 0,
	          maxX = void 0,
	          minY = void 0,
	          maxY = void 0;
	
	      el.getAttribute('d').replace(/Z/, '').split('M').splice(1).forEach(function (p) {
	        var s = p.split(' ').map(function (i) {
	          return parseInt(i, 10);
	        });
	
	        if (typeof minX === 'undefined' || s[0] < minX) {
	          minX = s[0];
	        }
	        if (typeof maxX === 'undefined' || s[2] > maxX) {
	          maxX = s[2];
	        }
	        if (typeof minY === 'undefined' || s[1] < minY) {
	          minY = s[1];
	        }
	        if (typeof maxY === 'undefined' || s[3] > maxY) {
	          maxY = s[3];
	        }
	      });
	
	      h = maxY - minY;
	      w = maxX - minX;
	      x = minX;
	      y = minY;
	      break;
	
	    case 'line':
	      h = parseInt(el.getAttribute('y2'), 10) - parseInt(el.getAttribute('y1'), 10);
	      w = parseInt(el.getAttribute('x2'), 10) - parseInt(el.getAttribute('x1'), 10);
	      x = parseInt(el.getAttribute('x1'), 10);
	      y = parseInt(el.getAttribute('y1'), 10);
	
	      if (h === 0) {
	        h += LINE_OFFSET;
	        y -= LINE_OFFSET / 2;
	      }
	      break;
	
	    case 'text':
	      h = rect.height;
	      w = rect.width;
	      x = parseInt(el.getAttribute('x'), 10);
	      y = parseInt(el.getAttribute('y'), 10) - h;
	      break;
	
	    case 'g':
	      var _getOffset2 = getOffset(el),
	          offsetLeft = _getOffset2.offsetLeft,
	          offsetTop = _getOffset2.offsetTop;
	
	      h = rect.height;
	      w = rect.width;
	      x = rect.left - offsetLeft;
	      y = rect.top - offsetTop;
	
	      if (el.getAttribute('data-pdf-annotate-type') === 'strikeout') {
	        h += LINE_OFFSET;
	        y -= LINE_OFFSET / 2;
	      }
	      break;
	
	    case 'rect':
	    case 'svg':
	      h = parseInt(el.getAttribute('height'), 10);
	      w = parseInt(el.getAttribute('width'), 10);
	      x = parseInt(el.getAttribute('x'), 10);
	      y = parseInt(el.getAttribute('y'), 10);
	      break;
	  }
	
	  // Result provides same properties as getBoundingClientRect
	  var result = {
	    top: y,
	    left: x,
	    width: w,
	    height: h,
	    right: x + w,
	    bottom: y + h
	  };
	
	  // For the case of nested SVG (point annotations) and grouped
	  // lines or rects no adjustment needs to be made for scale.
	  // I assume that the scale is already being handled
	  // natively by virtue of the `transform` attribute.
	  if (!['svg', 'g'].includes(el.nodeName.toLowerCase())) {
	    result = scaleUp(findSVGAtPoint(rect.left, rect.top), result);
	  }
	
	  return result;
	}
	
	/**
	 * Adjust scale from normalized scale (100%) to rendered scale.
	 *
	 * @param {SVGElement} svg The SVG to gather metadata from
	 * @param {Object} rect A map of numeric values to scale
	 * @return {Object} A copy of `rect` with values scaled up
	 */
	function scaleUp(svg, rect) {
	  var result = {};
	
	  var _getMetadata = getMetadata(svg),
	      viewport = _getMetadata.viewport;
	
	  Object.keys(rect).forEach(function (key) {
	    result[key] = rect[key] * viewport.scale;
	  });
	
	  return result;
	}
	
	/**
	 * Adjust scale from rendered scale to a normalized scale (100%).
	 *
	 * @param {SVGElement} svg The SVG to gather metadata from
	 * @param {Object} rect A map of numeric values to scale
	 * @return {Object} A copy of `rect` with values scaled down
	 */
	function scaleDown(svg, rect) {
	  var result = {};
	
	  var _getMetadata2 = getMetadata(svg),
	      viewport = _getMetadata2.viewport;
	
	  Object.keys(rect).forEach(function (key) {
	    result[key] = rect[key] / viewport.scale;
	  });
	
	  return result;
	}
	
	/**
	 * Get the scroll position of an element, accounting for parent elements
	 *
	 * @param {Element} el The element to get the scroll position for
	 * @return {Object} The scrollTop and scrollLeft position
	 */
	function getScroll(el) {
	  var scrollTop = 0;
	  var scrollLeft = 0;
	  var parentNode = el;
	
	  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
	    scrollTop += parentNode.scrollTop;
	    scrollLeft += parentNode.scrollLeft;
	  }
	
	  return { scrollTop: scrollTop, scrollLeft: scrollLeft };
	}
	
	/**
	 * Get the offset position of an element, accounting for parent elements
	 *
	 * @param {Element} el The element to get the offset position for
	 * @return {Object} The offsetTop and offsetLeft position
	 */
	function getOffset(el) {
	  var parentNode = el;
	
	  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
	    if (parentNode.nodeName.toUpperCase() === 'SVG') {
	      break;
	    }
	  }
	
	  var rect = parentNode.getBoundingClientRect();
	
	  return { offsetLeft: rect.left, offsetTop: rect.top };
	}
	
	/**
	 * Disable user ability to select text on page
	 */
	function disableUserSelect() {
	  if (!userSelectStyleSheet.parentNode) {
	    document.head.appendChild(userSelectStyleSheet);
	  }
	}
	
	/**
	 * Enable user ability to select text on page
	 */
	function enableUserSelect() {
	  if (userSelectStyleSheet.parentNode) {
	    userSelectStyleSheet.parentNode.removeChild(userSelectStyleSheet);
	  }
	}
	
	/**
	 * Get the metadata for a SVG container
	 *
	 * @param {SVGElement} svg The SVG container to get metadata for
	 */
	function getMetadata(svg) {
	  return {
	    documentId: svg.getAttribute('data-pdf-annotate-document'),
	    pageNumber: parseInt(svg.getAttribute('data-pdf-annotate-page'), 10),
	    viewport: JSON.parse(svg.getAttribute('data-pdf-annotate-viewport'))
	  };
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function createStyleSheet(blocks) {
	  var style = document.createElement('style');
	  var text = Object.keys(blocks).map(function (selector) {
	    return processRuleSet(selector, blocks[selector]);
	  }).join('\n');
	  
	  style.setAttribute('type', 'text/css');
	  style.appendChild(document.createTextNode(text));
	
	  return style;
	}
	
	function processRuleSet(selector, block) {
	  return selector + ' {\n' + processDeclarationBlock(block) + '\n}';
	}
	
	function processDeclarationBlock(block) {
	  return Object.keys(block).map(function (prop) {
	    return processDeclaration(prop, block[prop]);
	  }).join('\n');
	}
	
	function processDeclaration(prop, value) {
	  if (!isNaN(value) && value != 0) {
	    value = value + 'px';
	  }
	
	  return hyphenate(prop) + ': ' + value + ';';
	}
	
	function hyphenate(prop) {
	  return prop.replace(/[A-Z]/g, function (match) {
	    return '-' + match.toLowerCase();
	  });
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uuid = __webpack_require__(9);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _StoreAdapter2 = __webpack_require__(2);
	
	var _StoreAdapter3 = _interopRequireDefault(_StoreAdapter2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// StoreAdapter for working with localStorage
	// This is ideal for testing, examples, and prototyping
	var LocalStoreAdapter = function (_StoreAdapter) {
	  _inherits(LocalStoreAdapter, _StoreAdapter);
	
	  function LocalStoreAdapter() {
	    _classCallCheck(this, LocalStoreAdapter);
	
	    return _possibleConstructorReturn(this, (LocalStoreAdapter.__proto__ || Object.getPrototypeOf(LocalStoreAdapter)).call(this, {
	      getAnnotations: function getAnnotations(documentId, pageNumber) {
	        return new Promise(function (resolve, reject) {
	          var annotations = _getAnnotations(documentId).filter(function (i) {
	            return i.page === pageNumber && i.class === 'Annotation';
	          });
	
	          resolve({
	            documentId: documentId,
	            pageNumber: pageNumber,
	            annotations: annotations
	          });
	        });
	      },
	      getAnnotation: function getAnnotation(documentId, annotationId) {
	        return Promise.resolve(_getAnnotations(documentId)[findAnnotation(documentId, annotationId)]);
	      },
	      addAnnotation: function addAnnotation(documentId, pageNumber, annotation) {
	        return new Promise(function (resolve, reject) {
	          annotation.class = 'Annotation';
	          annotation.uuid = (0, _uuid2.default)();
	          annotation.page = pageNumber;
	
	          var annotations = _getAnnotations(documentId);
	          annotations.push(annotation);
	          updateAnnotations(documentId, annotations);
	
	          resolve(annotation);
	        });
	      },
	      editAnnotation: function editAnnotation(documentId, annotationId, annotation) {
	        return new Promise(function (resolve, reject) {
	          var annotations = _getAnnotations(documentId);
	          annotations[findAnnotation(documentId, annotationId)] = annotation;
	          updateAnnotations(documentId, annotations);
	
	          resolve(annotation);
	        });
	      },
	      deleteAnnotation: function deleteAnnotation(documentId, annotationId) {
	        return new Promise(function (resolve, reject) {
	          var index = findAnnotation(documentId, annotationId);
	          if (index > -1) {
	            var annotations = _getAnnotations(documentId);
	            annotations.splice(index, 1);
	            updateAnnotations(documentId, annotations);
	          }
	
	          resolve(true);
	        });
	      },
	      getComments: function getComments(documentId, annotationId) {
	        return new Promise(function (resolve, reject) {
	          resolve(_getAnnotations(documentId).filter(function (i) {
	            return i.class === 'Comment' && parseInt(i.annotation) === parseInt(annotationId);
	          }));
	        });
	      },
	      addComment: function addComment(documentId, annotationId, content) {
	        return new Promise(function (resolve, reject) {
	          var comment = {
	            class: 'Comment',
	            uuid: (0, _uuid2.default)(),
	            annotation: annotationId,
	            content: content
	          };
	
	          var annotations = _getAnnotations(documentId);
	          annotations.push(comment);
	          updateAnnotations(documentId, annotations);
	
	          resolve(comment);
	        });
	      },
	      deleteComment: function deleteComment(documentId, commentId) {
	        return new Promise(function (resolve, reject) {
	          _getAnnotations(documentId);
	          var index = -1;
	          var annotations = _getAnnotations(documentId);
	          for (var i = 0, l = annotations.length; i < l; i++) {
	            if (annotations[i].uuid === commentId) {
	              index = i;
	              break;
	            }
	          }
	
	          if (index > -1) {
	            annotations.splice(index, 1);
	            updateAnnotations(documentId, annotations);
	          }
	
	          resolve(true);
	        });
	      }
	    }));
	  }
	
	  return LocalStoreAdapter;
	}(_StoreAdapter3.default);
	
	exports.default = LocalStoreAdapter;
	
	
	function _getAnnotations(documentId) {
	  return JSON.parse(localStorage.getItem(documentId + '/annotations')) || [];
	}
	
	function updateAnnotations(documentId, annotations) {
	  localStorage.setItem(documentId + '/annotations', JSON.stringify(annotations));
	}
	
	function findAnnotation(documentId, annotationId) {
	  var index = -1;
	  var annotations = _getAnnotations(documentId);
	  for (var i = 0, l = annotations.length; i < l; i++) {
	    if (annotations[i].uuid === annotationId) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uuid;
	var REGEXP = /[xy]/g;
	var PATTERN = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
	
	function replacement(c) {
	  var r = Math.random() * 16 | 0;
	  var v = c == 'x' ? r : r & 0x3 | 0x8;
	  return v.toString(16);
	}
	
	/**
	 * Generate a univierally unique identifier
	 *
	 * @return {String}
	 */
	function uuid() {
	  return PATTERN.replace(REGEXP, replacement);
	}
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = render;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _appendChild = __webpack_require__(11);
	
	var _appendChild2 = _interopRequireDefault(_appendChild);
	
	var _renderScreenReaderHints = __webpack_require__(20);
	
	var _renderScreenReaderHints2 = _interopRequireDefault(_renderScreenReaderHints);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Render the response from PDFJSAnnotate.getStoreAdapter().getAnnotations to SVG
	 *
	 * @param {SVGElement} svg The SVG element to render the annotations to
	 * @param {Object} viewport The page viewport data
	 * @param {Object} data The response from PDFJSAnnotate.getStoreAdapter().getAnnotations
	 * @return {Promise} Settled once rendering has completed
	 *  A settled Promise will be either:
	 *    - fulfilled: SVGElement
	 *    - rejected: Error
	 */
	function render(svg, viewport, data) {
	  return new Promise(function (resolve, reject) {
	    // Reset the content of the SVG
	    svg.innerHTML = '';
	    svg.setAttribute('data-pdf-annotate-container', true);
	    svg.setAttribute('data-pdf-annotate-viewport', JSON.stringify(viewport));
	    svg.removeAttribute('data-pdf-annotate-document');
	    svg.removeAttribute('data-pdf-annotate-page');
	
	    // If there's no data nothing can be done
	    if (!data) {
	      return resolve(svg);
	    }
	
	    svg.setAttribute('data-pdf-annotate-document', data.documentId);
	    svg.setAttribute('data-pdf-annotate-page', data.pageNumber);
	
	    // Make sure annotations is an array
	    if (!Array.isArray(data.annotations) || data.annotations.length === 0) {
	      return resolve(svg);
	    }
	
	    // Append annotation to svg
	    data.annotations.forEach(function (a) {
	      (0, _appendChild2.default)(svg, a, viewport);
	    });
	
	    resolve(svg);
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendChild;
	
	var _objectAssign = __webpack_require__(12);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _renderLine = __webpack_require__(13);
	
	var _renderLine2 = _interopRequireDefault(_renderLine);
	
	var _renderPath = __webpack_require__(16);
	
	var _renderPath2 = _interopRequireDefault(_renderPath);
	
	var _renderPoint = __webpack_require__(17);
	
	var _renderPoint2 = _interopRequireDefault(_renderPoint);
	
	var _renderRect = __webpack_require__(18);
	
	var _renderRect2 = _interopRequireDefault(_renderRect);
	
	var _renderText = __webpack_require__(19);
	
	var _renderText2 = _interopRequireDefault(_renderText);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isFirefox = /firefox/i.test(navigator.userAgent);
	
	/**
	 * Get the x/y translation to be used for transforming the annotations
	 * based on the rotation of the viewport.
	 *
	 * @param {Object} viewport The viewport data from the page
	 * @return {Object}
	 */
	function getTranslation(viewport) {
	  var x = void 0;
	  var y = void 0;
	
	  // Modulus 360 on the rotation so that we only
	  // have to worry about four possible values.
	  switch (viewport.rotation % 360) {
	    case 0:
	      x = y = 0;
	      break;
	    case 90:
	      x = 0;
	      y = viewport.width / viewport.scale * -1;
	      break;
	    case 180:
	      x = viewport.width / viewport.scale * -1;
	      y = viewport.height / viewport.scale * -1;
	      break;
	    case 270:
	      x = viewport.height / viewport.scale * -1;
	      y = 0;
	      break;
	  }
	
	  return { x: x, y: y };
	}
	
	/**
	 * Transform the rotation and scale of a node using SVG's native transform attribute.
	 *
	 * @param {Node} node The node to be transformed
	 * @param {Object} viewport The page's viewport data
	 * @return {Node}
	 */
	function transform(node, viewport) {
	  var trans = getTranslation(viewport);
	
	  // Let SVG natively transform the element
	  node.setAttribute('transform', 'scale(' + viewport.scale + ') rotate(' + viewport.rotation + ') translate(' + trans.x + ', ' + trans.y + ')');
	
	  // Manually adjust x/y for nested SVG nodes
	  if (!isFirefox && node.nodeName.toLowerCase() === 'svg') {
	    node.setAttribute('x', parseInt(node.getAttribute('x'), 10) * viewport.scale);
	    node.setAttribute('y', parseInt(node.getAttribute('y'), 10) * viewport.scale);
	
	    var x = parseInt(node.getAttribute('x', 10));
	    var y = parseInt(node.getAttribute('y', 10));
	    var width = parseInt(node.getAttribute('width'), 10);
	    var height = parseInt(node.getAttribute('height'), 10);
	    var path = node.querySelector('path');
	    var svg = path.parentNode;
	
	    // Scale width/height
	    [node, svg, path, node.querySelector('rect')].forEach(function (n) {
	      n.setAttribute('width', parseInt(n.getAttribute('width'), 10) * viewport.scale);
	      n.setAttribute('height', parseInt(n.getAttribute('height'), 10) * viewport.scale);
	    });
	
	    // Transform path but keep scale at 100% since it will be handled natively
	    transform(path, (0, _objectAssign2.default)({}, viewport, { scale: 1 }));
	
	    switch (viewport.rotation % 360) {
	      case 90:
	        node.setAttribute('x', viewport.width - y - width);
	        node.setAttribute('y', x);
	        svg.setAttribute('x', 1);
	        svg.setAttribute('y', 0);
	        break;
	      case 180:
	        node.setAttribute('x', viewport.width - x - width);
	        node.setAttribute('y', viewport.height - y - height);
	        svg.setAttribute('y', 2);
	        break;
	      case 270:
	        node.setAttribute('x', y);
	        node.setAttribute('y', viewport.height - x - height);
	        svg.setAttribute('x', -1);
	        svg.setAttribute('y', 0);
	        break;
	    }
	  }
	
	  return node;
	}
	
	/**
	 * Append an annotation as a child of an SVG.
	 *
	 * @param {SVGElement} svg The SVG element to append the annotation to
	 * @param {Object} annotation The annotation definition to render and append
	 * @param {Object} viewport The page's viewport data
	 * @return {SVGElement} A node that was created and appended by this function
	 */
	function appendChild(svg, annotation, viewport) {
	  if (!viewport) {
	    viewport = JSON.parse(svg.getAttribute('data-pdf-annotate-viewport'));
	  }
	
	  var child = void 0;
	  switch (annotation.type) {
	    case 'area':
	    case 'highlight':
	      child = (0, _renderRect2.default)(annotation);
	      break;
	    case 'strikeout':
	      child = (0, _renderLine2.default)(annotation);
	      break;
	    case 'point':
	      child = (0, _renderPoint2.default)(annotation);
	      break;
	    case 'textbox':
	      child = (0, _renderText2.default)(annotation);
	      break;
	    case 'drawing':
	      child = (0, _renderPath2.default)(annotation);
	      break;
	  }
	
	  // If no type was provided for an annotation it will result in node being null.
	  // Skip appending/transforming if node doesn't exist.
	  if (child) {
	    // Set attributes
	    child.setAttribute('data-pdf-annotate-id', annotation.uuid);
	    child.setAttribute('data-pdf-annotate-type', annotation.type);
	    child.setAttribute('aria-hidden', true);
	
	    svg.appendChild(transform(child, viewport));
	  }
	
	  return child;
	}
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderLine;
	
	var _setAttributes = __webpack_require__(14);
	
	var _setAttributes2 = _interopRequireDefault(_setAttributes);
	
	var _normalizeColor = __webpack_require__(15);
	
	var _normalizeColor2 = _interopRequireDefault(_normalizeColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create SVGLineElements from an annotation definition.
	 * This is used for anntations of type `strikeout`.
	 *
	 * @param {Object} a The annotation definition
	 * @return {SVGGElement} A group of all lines to be rendered
	 */
	function renderLine(a) {
	  var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	  (0, _setAttributes2.default)(group, {
	    stroke: (0, _normalizeColor2.default)(a.color || '#f00'),
	    strokeWidth: 1
	  });
	
	  a.rectangles.forEach(function (r) {
	    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	
	    (0, _setAttributes2.default)(line, {
	      x1: r.x,
	      y1: r.y,
	      x2: r.x + r.width,
	      y2: r.y
	    });
	
	    group.appendChild(line);
	  });
	
	  return group;
	}
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setAttributes;
	var UPPER_REGEX = /[A-Z]/g;
	
	// Don't convert these attributes from camelCase to hyphenated-attributes
	var BLACKLIST = ['viewBox'];
	
	var keyCase = function keyCase(key) {
	  if (BLACKLIST.indexOf(key) === -1) {
	    key = key.replace(UPPER_REGEX, function (match) {
	      return '-' + match.toLowerCase();
	    });
	  }
	  return key;
	};
	
	/**
	 * Set attributes for a node from a map
	 *
	 * @param {Node} node The node to set attributes on
	 * @param {Object} attributes The map of key/value pairs to use for attributes
	 */
	function setAttributes(node, attributes) {
	  Object.keys(attributes).forEach(function (key) {
	    node.setAttribute(keyCase(key), attributes[key]);
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = normalizeColor;
	var REGEX_HASHLESS_HEX = /^([a-f0-9]{6}|[a-f0-9]{3})$/i;
	
	/**
	 * Normalize a color value
	 *
	 * @param {String} color The color to normalize
	 * @return {String}
	 */
	function normalizeColor(color) {
	  if (REGEX_HASHLESS_HEX.test(color)) {
	    color = "#" + color;
	  }
	  return color;
	}
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderPath;
	
	var _setAttributes = __webpack_require__(14);
	
	var _setAttributes2 = _interopRequireDefault(_setAttributes);
	
	var _normalizeColor = __webpack_require__(15);
	
	var _normalizeColor2 = _interopRequireDefault(_normalizeColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create SVGPathElement from an annotation definition.
	 * This is used for anntations of type `drawing`.
	 *
	 * @param {Object} a The annotation definition
	 * @return {SVGPathElement} The path to be rendered
	 */
	function renderPath(a) {
	  var d = [];
	  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	
	  for (var i = 0, l = a.lines.length; i < l; i++) {
	    var p1 = a.lines[i];
	    var p2 = a.lines[i + 1];
	    if (p2) {
	      d.push('M' + p1[0] + ' ' + p1[1] + ' ' + p2[0] + ' ' + p2[1]);
	    }
	  }
	
	  (0, _setAttributes2.default)(path, {
	    d: d.join(' ') + 'Z',
	    stroke: (0, _normalizeColor2.default)(a.color || '#000'),
	    strokeWidth: a.width || 1,
	    fill: 'none'
	  });
	
	  return path;
	}
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderPoint;
	
	var _setAttributes = __webpack_require__(14);
	
	var _setAttributes2 = _interopRequireDefault(_setAttributes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SIZE = 25;
	var D = 'M499.968 214.336q-113.832 0 -212.877 38.781t-157.356 104.625 -58.311 142.29q0 62.496 39.897 119.133t112.437 97.929l48.546 27.9 -15.066 53.568q-13.392 50.778 -39.06 95.976 84.816 -35.154 153.45 -95.418l23.994 -21.204 31.806 3.348q38.502 4.464 72.54 4.464 113.832 0 212.877 -38.781t157.356 -104.625 58.311 -142.29 -58.311 -142.29 -157.356 -104.625 -212.877 -38.781z';
	
	/**
	 * Create SVGElement from an annotation definition.
	 * This is used for anntations of type `comment`.
	 *
	 * @param {Object} a The annotation definition
	 * @return {SVGElement} A svg to be rendered
	 */
	function renderPoint(a) {
	  var outerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	  var innerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	  var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	
	  (0, _setAttributes2.default)(outerSVG, {
	    width: SIZE,
	    height: SIZE,
	    x: a.x,
	    y: a.y
	  });
	
	  (0, _setAttributes2.default)(innerSVG, {
	    width: SIZE,
	    height: SIZE,
	    x: 0,
	    y: SIZE * 0.05 * -1,
	    viewBox: '0 0 1000 1000'
	  });
	
	  (0, _setAttributes2.default)(rect, {
	    width: SIZE,
	    height: SIZE,
	    stroke: '#000',
	    fill: '#ff0'
	  });
	
	  (0, _setAttributes2.default)(path, {
	    d: D,
	    strokeWidth: 50,
	    stroke: '#000',
	    fill: '#fff'
	  });
	
	  innerSVG.appendChild(path);
	  outerSVG.appendChild(rect);
	  outerSVG.appendChild(innerSVG);
	
	  return outerSVG;
	}
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderRect;
	
	var _setAttributes = __webpack_require__(14);
	
	var _setAttributes2 = _interopRequireDefault(_setAttributes);
	
	var _normalizeColor = __webpack_require__(15);
	
	var _normalizeColor2 = _interopRequireDefault(_normalizeColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create SVGRectElements from an annotation definition.
	 * This is used for anntations of type `area` and `highlight`.
	 *
	 * @param {Object} a The annotation definition
	 * @return {SVGGElement|SVGRectElement} A group of all rects to be rendered
	 */
	function renderRect(a) {
	  if (a.type === 'highlight') {
	    var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	    (0, _setAttributes2.default)(group, {
	      fill: (0, _normalizeColor2.default)(a.color || '#ff0'),
	      fillOpacity: 0.2
	    });
	
	    a.rectangles.forEach(function (r) {
	      group.appendChild(createRect(r));
	    });
	
	    return group;
	  } else {
	    var rect = createRect(a);
	    (0, _setAttributes2.default)(rect, {
	      stroke: (0, _normalizeColor2.default)(a.color || '#f00'),
	      fill: 'none'
	    });
	
	    return rect;
	  }
	}
	
	function createRect(r) {
	  var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	
	  (0, _setAttributes2.default)(rect, {
	    x: r.x,
	    y: r.y,
	    width: r.width,
	    height: r.height
	  });
	
	  return rect;
	}
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderText;
	
	var _setAttributes = __webpack_require__(14);
	
	var _setAttributes2 = _interopRequireDefault(_setAttributes);
	
	var _normalizeColor = __webpack_require__(15);
	
	var _normalizeColor2 = _interopRequireDefault(_normalizeColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create SVGTextElement from an annotation definition.
	 * This is used for anntations of type `textbox`.
	 *
	 * @param {Object} a The annotation definition
	 * @return {SVGTextElement} A text to be rendered
	 */
	function renderText(a) {
	  var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	
	  (0, _setAttributes2.default)(text, {
	    x: a.x,
	    y: a.y + parseInt(a.size, 10),
	    fill: (0, _normalizeColor2.default)(a.color || '#000'),
	    fontSize: a.size
	  });
	  text.innerHTML = a.content;
	
	  return text;
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderScreenReaderHints;
	
	var _insertScreenReaderHint = __webpack_require__(21);
	
	var _insertScreenReaderHint2 = _interopRequireDefault(_insertScreenReaderHint);
	
	var _initEventHandlers = __webpack_require__(27);
	
	var _initEventHandlers2 = _interopRequireDefault(_initEventHandlers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO This is not the right place for this to live
	(0, _initEventHandlers2.default)();
	
	/**
	 * Insert hints into the DOM for screen readers.
	 *
	 * @param {Array} annotations The annotations that hints are inserted for
	 */
	function renderScreenReaderHints(annotations) {
	  annotations = Array.isArray(annotations) ? annotations : [];
	
	  // Insert hints for each type
	  Object.keys(SORT_TYPES).forEach(function (type) {
	    var sortBy = SORT_TYPES[type];
	    annotations.filter(function (a) {
	      return a.type === type;
	    }).sort(sortBy).forEach(function (a, i) {
	      return (0, _insertScreenReaderHint2.default)(a, i + 1);
	    });
	  });
	}
	
	// Sort annotations first by y, then by x.
	// This allows hints to be injected in the order they appear,
	// which makes numbering them easier.
	function sortByPoint(a, b) {
	  if (a.y < b.y) {
	    return a.x - b.x;
	  } else {
	    return 1;
	  }
	}
	
	// Sort annotation by it's first rectangle
	function sortByRectPoint(a, b) {
	  return sortByPoint(a.rectangles[0], b.rectangles[0]);
	}
	
	// Sort annotation by it's first line
	function sortByLinePoint(a, b) {
	  var lineA = a.lines[0];
	  var lineB = b.lines[0];
	  return sortByPoint({ x: lineA[0], y: lineA[1] }, { x: lineB[0], y: lineB[1] });
	}
	
	// Arrange supported types and associated sort methods
	var SORT_TYPES = {
	  'highlight': sortByRectPoint,
	  'strikeout': sortByRectPoint,
	  'drawing': sortByLinePoint,
	  'textbox': sortByPoint,
	  'point': sortByPoint,
	  'area': sortByPoint
	};
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = insertScreenReaderHint;
	
	var _createScreenReaderOnly = __webpack_require__(22);
	
	var _createScreenReaderOnly2 = _interopRequireDefault(_createScreenReaderOnly);
	
	var _insertElementWithinChildren = __webpack_require__(23);
	
	var _insertElementWithinChildren2 = _interopRequireDefault(_insertElementWithinChildren);
	
	var _insertElementWithinElement = __webpack_require__(24);
	
	var _insertElementWithinElement2 = _interopRequireDefault(_insertElementWithinElement);
	
	var _renderScreenReaderComments = __webpack_require__(25);
	
	var _renderScreenReaderComments2 = _interopRequireDefault(_renderScreenReaderComments);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Annotation types that support comments
	var COMMENT_TYPES = ['highlight', 'point', 'area', 'drawing', 'strikeout'];
	
	/**
	 * Insert a hint into the DOM for screen readers for a specific annotation.
	 *
	 * @param {Object} annotation The annotation to insert a hint for
	 * @param {Number} num The number of the annotation out of all annotations of the same type
	 */
	function insertScreenReaderHint(annotation) {
	  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	  switch (annotation.type) {
	    case 'highlight':
	    case 'strikeout':
	      var rects = annotation.rectangles;
	      var first = rects[0];
	      var last = rects[rects.length - 1];
	
	      (0, _insertElementWithinElement2.default)((0, _createScreenReaderOnly2.default)('Begin ' + annotation.type + ' annotation ' + num, annotation.uuid), first.x, first.y, annotation.page, true);
	
	      (0, _insertElementWithinElement2.default)((0, _createScreenReaderOnly2.default)('End ' + annotation.type + ' annotation ' + num, annotation.uuid + '-end'), last.x + last.width, last.y, annotation.page, false);
	      break;
	
	    case 'textbox':
	    case 'point':
	      var text = annotation.type === 'textbox' ? ' (content: ' + annotation.content + ')' : '';
	
	      (0, _insertElementWithinChildren2.default)((0, _createScreenReaderOnly2.default)(annotation.type + ' annotation ' + num + text, annotation.uuid), annotation.x, annotation.y, annotation.page);
	      break;
	
	    case 'drawing':
	    case 'area':
	      var x = typeof annotation.x !== 'undefined' ? annotation.x : annotation.lines[0][0];
	      var y = typeof annotation.y !== 'undefined' ? annotation.y : annotation.lines[0][1];
	
	      (0, _insertElementWithinChildren2.default)((0, _createScreenReaderOnly2.default)('Unlabeled drawing', annotation.uuid), x, y, annotation.page);
	      break;
	  }
	
	  // Include comments in screen reader hint
	  if (COMMENT_TYPES.includes(annotation.type)) {
	    (0, _renderScreenReaderComments2.default)(annotation.documentId, annotation.uuid);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createScreenReaderOnly;
	/**
	 * Create a node that is only visible to screen readers
	 *
	 * @param {String} content The text content that should be read by screen reader
	 * @param {String} [annotationId] The ID of the annotation assocaited
	 * @return {Element} An Element that is only visible to screen readers
	 */
	function createScreenReaderOnly(content, annotationId) {
	  var node = document.createElement('div');
	  var text = document.createTextNode(content);
	  node.appendChild(text);
	  node.setAttribute('id', 'pdf-annotate-screenreader-' + annotationId);
	  node.style.position = 'absolute';
	  node.style.left = '-10000px';
	  node.style.top = 'auto';
	  node.style.width = '1px';
	  node.style.height = '1px';
	  node.style.overflow = 'hidden';
	  return node;
	}
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = insertElementWithinChildren;
	
	var _insertElementWithinElement = __webpack_require__(24);
	
	var _insertElementWithinElement2 = _interopRequireDefault(_insertElementWithinElement);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Insert an element at a point within the document.
	 * This algorithm will try to insert between elements if possible.
	 * It will however use `insertElementWithinElement` if it is more accurate.
	 *
	 * @param {Element} el The element to be inserted
	 * @param {Number} x The x coordinate of the point
	 * @param {Number} y The y coordinate of the point
	 * @param {Number} pageNumber The page number to limit elements to
	 * @return {Boolean} True if element was able to be inserted, otherwise false
	 */
	function insertElementWithinChildren(el, x, y, pageNumber) {
	  // Try and use most accurate method of inserting within an element
	  if ((0, _insertElementWithinElement2.default)(el, x, y, pageNumber, true)) {
	    return true;
	  }
	
	  // Fall back to inserting between elements
	  var svg = document.querySelector('svg[data-pdf-annotate-page="' + pageNumber + '"]');
	  var rect = svg.getBoundingClientRect();
	  var nodes = [].concat(_toConsumableArray(svg.parentNode.querySelectorAll('.textLayer > div')));
	
	  y = (0, _utils.scaleUp)(svg, { y: y }).y + rect.top;
	  x = (0, _utils.scaleUp)(svg, { x: x }).x + rect.left;
	
	  // Find the best node to insert before
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var n = nodes[i];
	    var r = n.getBoundingClientRect();
	    if (y <= r.top) {
	      n.parentNode.insertBefore(el, n);
	      return true;
	    }
	  }
	
	  // If all else fails try to append to the bottom
	  var textLayer = svg.parentNode.querySelector('.textLayer');
	  if (textLayer) {
	    var textRect = textLayer.getBoundingClientRect();
	    if ((0, _utils.pointIntersectsRect)(x, y, textRect)) {
	      textLayer.appendChild(el);
	      return true;
	    }
	  }
	
	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = insertElementWithinElement;
	
	var _utils = __webpack_require__(6);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Insert an element at a point within the document.
	 * This algorithm will only insert within an element amidst it's text content.
	 *
	 * @param {Element} el The element to be inserted
	 * @param {Number} x The x coordinate of the point
	 * @param {Number} y The y coordinate of the point
	 * @param {Number} pageNumber The page number to limit elements to
	 * @param {Boolean} insertBefore Whether the element is to be inserted before or after x
	 * @return {Boolean} True if element was able to be inserted, otherwise false
	 */
	function insertElementWithinElement(el, x, y, pageNumber, insertBefore) {
	  var OFFSET_ADJUST = 2;
	
	  // If inserting before adjust `x` by looking for element a few px to the right
	  // Otherwise adjust a few px to the left
	  // This is to allow a little tolerance by searching within the box, instead
	  // of getting a false negative by testing right on the border.
	  x = Math.max(x + OFFSET_ADJUST * (insertBefore ? 1 : -1), 0);
	
	  var node = textLayerElementFromPoint(x, y + OFFSET_ADJUST, pageNumber);
	  if (!node) {
	    return false;
	  }
	
	  // Now that node has been found inverse the adjustment for `x`.
	  // This is done to accomodate tolerance by cutting off on the outside of the
	  // text boundary, instead of missing a character by cutting off within.
	  x = x + OFFSET_ADJUST * (insertBefore ? -1 : 1);
	
	  var svg = document.querySelector('svg[data-pdf-annotate-page="' + pageNumber + '"]');
	  var left = (0, _utils.scaleDown)(svg, { left: node.getBoundingClientRect().left }).left - svg.getBoundingClientRect().left;
	  var temp = node.cloneNode(true);
	  var head = temp.innerHTML.split('');
	  var tail = [];
	
	  // Insert temp off screen
	  temp.style.position = 'absolute';
	  temp.style.top = '-10000px';
	  temp.style.left = '-10000px';
	  document.body.appendChild(temp);
	
	  while (head.length) {
	    // Don't insert within HTML tags
	    if (head[head.length - 1] === '>') {
	      while (head.length) {
	        tail.unshift(head.pop());
	        if (tail[0] === '<') {
	          break;
	        }
	      }
	    }
	
	    // Check if width of temp based on current head value satisfies x
	    temp.innerHTML = head.join('');
	    var width = (0, _utils.scaleDown)(svg, { width: temp.getBoundingClientRect().width }).width;
	    if (left + width <= x) {
	      break;
	    }
	    tail.unshift(head.pop());
	  }
	
	  // Update original node with new markup, including element to be inserted
	  node.innerHTML = head.join('') + el.outerHTML + tail.join('');
	  temp.parentNode.removeChild(temp);
	
	  return true;
	}
	
	/**
	 * Get a text layer element at a given point on a page
	 *
	 * @param {Number} x The x coordinate of the point
	 * @param {Number} y The y coordinate of the point
	 * @param {Number} pageNumber The page to limit elements to
	 * @return {Element} First text layer element found at the point
	 */
	function textLayerElementFromPoint(x, y, pageNumber) {
	  var svg = document.querySelector('svg[data-pdf-annotate-page="' + pageNumber + '"]');
	  var rect = svg.getBoundingClientRect();
	  y = (0, _utils.scaleUp)(svg, { y: y }).y + rect.top;
	  x = (0, _utils.scaleUp)(svg, { x: x }).x + rect.left;
	  return [].concat(_toConsumableArray(svg.parentNode.querySelectorAll('.textLayer [data-canvas-width]'))).filter(function (el) {
	    return (0, _utils.pointIntersectsRect)(x, y, el.getBoundingClientRect());
	  })[0];
	}
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderScreenReaderComments;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _insertScreenReaderComment = __webpack_require__(26);
	
	var _insertScreenReaderComment2 = _interopRequireDefault(_insertScreenReaderComment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Insert the comments into the DOM to be available by screen reader
	 *
	 * Example output:
	 *   <div class="screenReaderOnly">
	 *    <div>Begin highlight 1</div>
	 *    <ol aria-label="Comments">
	 *      <li>Foo</li>
	 *      <li>Bar</li>
	 *      <li>Baz</li>
	 *      <li>Qux</li>
	 *    </ol>
	 *  </div>
	 *  <div>Some highlighted text goes here...</div>
	 *  <div class="screenReaderOnly">End highlight 1</div>
	 *
	 * NOTE: `screenReaderOnly` is not a real class, just used for brevity
	 *
	 * @param {String} documentId The ID of the document
	 * @param {String} annotationId The ID of the annotation
	 * @param {Array} [comments] Optionally preloaded comments to be rendered
	 * @return {Promise}
	 */
	function renderScreenReaderComments(documentId, annotationId, comments) {
	  var promise = void 0;
	
	  if (Array.isArray(comments)) {
	    promise = Promise.resolve(comments);
	  } else {
	    promise = _PDFJSAnnotate2.default.getStoreAdapter().getComments(documentId, annotationId);
	  }
	
	  return promise.then(function (comments) {
	    // Node needs to be found by querying DOM as it may have been inserted as innerHTML
	    // leaving `screenReaderNode` as an invalid reference (see `insertElementWithinElement`).
	    var node = document.getElementById('pdf-annotate-screenreader-' + annotationId);
	    if (node) {
	      var list = document.createElement('ol');
	      list.setAttribute('id', 'pdf-annotate-screenreader-comment-list-' + annotationId);
	      list.setAttribute('aria-label', 'Comments');
	      node.appendChild(list);
	      comments.forEach(_insertScreenReaderComment2.default);
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = insertScreenReaderComment;
	/**
	 * Insert a comment into the DOM to be available by screen reader
	 *
	 * @param {Object} comment The comment to be inserted
	 */
	function insertScreenReaderComment(comment) {
	  if (!comment) {
	    return;
	  }
	
	  var list = document.querySelector('#pdf-annotate-screenreader-' + comment.annotation + ' ol');
	  if (list) {
	    var item = document.createElement('li');
	    item.setAttribute('id', 'pdf-annotate-screenreader-comment-' + comment.uuid);
	    item.appendChild(document.createTextNode('' + comment.content));
	    list.appendChild(item);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initEventHandlers;
	
	var _insertScreenReaderHint = __webpack_require__(21);
	
	var _insertScreenReaderHint2 = _interopRequireDefault(_insertScreenReaderHint);
	
	var _renderScreenReaderHints = __webpack_require__(20);
	
	var _renderScreenReaderHints2 = _interopRequireDefault(_renderScreenReaderHints);
	
	var _insertScreenReaderComment = __webpack_require__(26);
	
	var _insertScreenReaderComment2 = _interopRequireDefault(_insertScreenReaderComment);
	
	var _renderScreenReaderComments = __webpack_require__(25);
	
	var _renderScreenReaderComments2 = _interopRequireDefault(_renderScreenReaderComments);
	
	var _event = __webpack_require__(4);
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Initialize the event handlers for keeping screen reader hints synced with data
	 */
	function initEventHandlers() {
	  (0, _event.addEventListener)('annotation:add', function (documentId, pageNumber, annotation) {
	    reorderAnnotationsByType(documentId, pageNumber, annotation.type);
	  });
	  (0, _event.addEventListener)('annotation:edit', function (documentId, annotationId, annotation) {
	    reorderAnnotationsByType(documentId, annotation.page, annotation.type);
	  });
	  (0, _event.addEventListener)('annotation:delete', removeAnnotation);
	  (0, _event.addEventListener)('comment:add', insertComment);
	  (0, _event.addEventListener)('comment:delete', removeComment);
	}
	
	/**
	 * Reorder the annotation numbers by annotation type
	 *
	 * @param {String} documentId The ID of the document
	 * @param {Number} pageNumber The page number of the annotations
	 * @param {Strig} type The annotation type
	 */
	function reorderAnnotationsByType(documentId, pageNumber, type) {
	  _PDFJSAnnotate2.default.getStoreAdapter().getAnnotations(documentId, pageNumber).then(function (annotations) {
	    return annotations.annotations.filter(function (a) {
	      return a.type === type;
	    });
	  }).then(function (annotations) {
	    annotations.forEach(function (a) {
	      removeAnnotation(documentId, a.uuid);
	    });
	
	    return annotations;
	  }).then(_renderScreenReaderHints2.default);
	}
	
	/**
	 * Remove the screen reader hint for an annotation
	 *
	 * @param {String} documentId The ID of the document
	 * @param {String} annotationId The Id of the annotation
	 */
	function removeAnnotation(documentId, annotationId) {
	  removeElementById('pdf-annotate-screenreader-' + annotationId);
	  removeElementById('pdf-annotate-screenreader-' + annotationId + '-end');
	}
	
	/**
	 * Insert a screen reader hint for a comment
	 *
	 * @param {String} documentId The ID of the document
	 * @param {String} annotationId The ID of tha assocated annotation
	 * @param {Object} comment The comment to insert a hint for
	 */
	function insertComment(documentId, annotationId, comment) {
	  var list = document.querySelector('pdf-annotate-screenreader-comment-list-' + annotationId);
	  var promise = void 0;
	
	  if (!list) {
	    promise = (0, _renderScreenReaderComments2.default)(documentId, annotationId, []).then(function () {
	      list = document.querySelector('pdf-annotate-screenreader-comment-list-' + annotationId);
	      return true;
	    });
	  } else {
	    promise = Promise.resolve(true);
	  }
	
	  promise.then(function () {
	    (0, _insertScreenReaderComment2.default)(comment);
	  });
	}
	
	/**
	 * Remove a screen reader hint for a comment
	 *
	 * @param {String} documentId The ID of the document
	 * @param {String} commentId The ID of the comment
	 */
	function removeComment(documentId, commentId) {
	  removeElementById('pdf-annotate-screenreader-comment-' + commentId);
	}
	
	/**
	 * Remove an element from the DOM by it's ID if it exists
	 *
	 * @param {String} elementID The ID of the element to be removed
	 */
	function removeElementById(elementId) {
	  var el = document.getElementById(elementId);
	  if (el) {
	    el.parentNode.removeChild(el);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _event = __webpack_require__(4);
	
	var _edit = __webpack_require__(29);
	
	var _pen = __webpack_require__(30);
	
	var _point = __webpack_require__(31);
	
	var _rect = __webpack_require__(32);
	
	var _text = __webpack_require__(33);
	
	var _page = __webpack_require__(34);
	
	exports.default = {
	  addEventListener: _event.addEventListener, removeEventListener: _event.removeEventListener, fireEvent: _event.fireEvent,
	  disableEdit: _edit.disableEdit, enableEdit: _edit.enableEdit, setCanEdit: _edit.setCanEdit,
	  disablePen: _pen.disablePen, enablePen: _pen.enablePen, setPen: _pen.setPen,
	  disablePoint: _point.disablePoint, enablePoint: _point.enablePoint,
	  disableRect: _rect.disableRect, enableRect: _rect.enableRect,
	  disableText: _text.disableText, enableText: _text.enableText, setText: _text.setText,
	  createPage: _page.createPage, renderPage: _page.renderPage
	};
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.setCanEdit = setCanEdit;
	exports.enableEdit = enableEdit;
	exports.disableEdit = disableEdit;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _appendChild = __webpack_require__(11);
	
	var _appendChild2 = _interopRequireDefault(_appendChild);
	
	var _event = __webpack_require__(4);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _enabled = false;
	var _canEdit = true;
	var isDragging = false,
	    overlay = void 0;
	var dragOffsetX = void 0,
	    dragOffsetY = void 0,
	    dragStartX = void 0,
	    dragStartY = void 0;
	var OVERLAY_BORDER_SIZE = 3;
	
	/**
	 * Create an overlay for editing an annotation.
	 *
	 * @param {Element} target The annotation element to apply overlay for
	 */
	function createEditOverlay(target) {
	
	  if (!target || !target.parentNode) {
	    return;
	  }
	
	  // check if we are clicking on same Annotation, and if yes, exit early
	  if (overlay) {
	
	    var overlayId = overlay.getAttribute('data-target-id');
	    var targetId = target.getAttribute('data-pdf-annotate-id');
	
	    if (overlayId === targetId) {
	      return;
	    }
	  }
	
	  destroyEditOverlay();
	
	  overlay = document.createElement('div');
	  var anchor = document.createElement('a');
	  var parentNode = (0, _utils.findSVGContainer)(target).parentNode;
	  var id = target.getAttribute('data-pdf-annotate-id');
	  var rect = (0, _utils.getAnnotationRect)(target);
	  var styleLeft = rect.left - OVERLAY_BORDER_SIZE;
	  var styleTop = rect.top - OVERLAY_BORDER_SIZE;
	
	  overlay.setAttribute('id', 'pdf-annotate-edit-overlay');
	  overlay.setAttribute('data-target-id', id);
	  overlay.style.boxSizing = 'content-box';
	  overlay.style.position = 'absolute';
	  overlay.style.top = styleTop + 'px';
	  overlay.style.left = styleLeft + 'px';
	  overlay.style.width = rect.width + 'px';
	  overlay.style.height = rect.height + 'px';
	  overlay.style.border = OVERLAY_BORDER_SIZE + 'px solid ' + _utils.BORDER_COLOR;
	  overlay.style.borderRadius = OVERLAY_BORDER_SIZE + 'px';
	
	  if (_canEdit) {
	    anchor.innerHTML = '×';
	    anchor.setAttribute('href', 'javascript://');
	    anchor.style.background = '#fff';
	    anchor.style.borderRadius = '20px';
	    anchor.style.border = '1px solid #bbb';
	    anchor.style.color = '#bbb';
	    anchor.style.fontSize = '16px';
	    anchor.style.padding = '2px';
	    anchor.style.textAlign = 'center';
	    anchor.style.textDecoration = 'none';
	    anchor.style.position = 'absolute';
	    anchor.style.top = '-13px';
	    anchor.style.right = '-13px';
	    anchor.style.width = '25px';
	    anchor.style.height = '25px';
	
	    overlay.appendChild(anchor);
	
	    document.addEventListener('click', handleDocumentClick);
	    document.addEventListener('keyup', handleDocumentKeyup);
	    document.addEventListener('mousedown', handleDocumentMousedown);
	    anchor.addEventListener('click', deleteAnnotation);
	    anchor.addEventListener('mouseover', function () {
	      anchor.style.color = '#35A4DC';
	      anchor.style.borderColor = '#999';
	      anchor.style.boxShadow = '0 1px 1px #ccc';
	    });
	    anchor.addEventListener('mouseout', function () {
	      anchor.style.color = '#bbb';
	      anchor.style.borderColor = '#bbb';
	      anchor.style.boxShadow = '';
	    });
	    overlay.addEventListener('mouseover', function () {
	      if (!isDragging) {
	        anchor.style.display = '';
	      }
	    });
	    overlay.addEventListener('mouseout', function () {
	      anchor.style.display = 'none';
	    });
	  }
	
	  parentNode.appendChild(overlay);
	}
	
	/**
	 * Destroy the edit overlay if it exists.
	 */
	function destroyEditOverlay() {
	
	  if (overlay && overlay.parentNode) {
	    overlay.parentNode.removeChild(overlay);
	  }
	  overlay = null;
	
	  document.removeEventListener('click', handleDocumentClick);
	  document.removeEventListener('keyup', handleDocumentKeyup);
	  document.removeEventListener('mousedown', handleDocumentMousedown);
	  document.removeEventListener('mousemove', handleDocumentMousemove);
	  document.removeEventListener('mouseup', handleDocumentMouseup);
	  (0, _utils.enableUserSelect)();
	}
	
	/**
	 * Delete currently selected annotation
	 */
	function deleteAnnotation() {
	  if (!overlay) {
	    return;
	  }
	
	  var annotationId = overlay.getAttribute('data-target-id');
	  var nodes = document.querySelectorAll('[data-pdf-annotate-id="' + annotationId + '"]');
	  var svg = overlay.parentNode.querySelector('svg.annotationLayer');
	
	  var _getMetadata = (0, _utils.getMetadata)(svg),
	      documentId = _getMetadata.documentId;
	
	  [].concat(_toConsumableArray(nodes)).forEach(function (n) {
	    n.parentNode.removeChild(n);
	  });
	
	  _PDFJSAnnotate2.default.getStoreAdapter().deleteAnnotation(documentId, annotationId);
	
	  destroyEditOverlay();
	}
	
	/**
	 * Handle document.click event
	 *
	 * @param {Event} e The DOM event that needs to be handled
	 */
	function handleDocumentClick(e) {
	  if (!(0, _utils.findSVGAtPoint)(e.clientX, e.clientY)) {
	    return;
	  }
	
	  // Remove current overlay
	  var overlay = document.getElementById('pdf-annotate-edit-overlay');
	  if (overlay) {
	    if (isDragging || e.target === overlay) {
	      return;
	    }
	
	    destroyEditOverlay();
	  }
	}
	
	/**
	 * Handle document.keyup event
	 *
	 * @param {Event} e The DOM event that needs to be handled
	 */
	function handleDocumentKeyup(e) {
	  if (overlay && e.keyCode === 46 && e.target.nodeName.toLowerCase() !== 'textarea' && e.target.nodeName.toLowerCase() !== 'input') {
	    deleteAnnotation();
	  }
	}
	
	/**
	 * Handle document.mousedown event
	 *
	 * @param {Event} e The DOM event that needs to be handled
	 */
	function handleDocumentMousedown(e) {
	  if (e.target !== overlay) {
	    return;
	  }
	
	  // Highlight and strikeout annotations are bound to text within the document.
	  // It doesn't make sense to allow repositioning these types of annotations.
	  var annotationId = overlay.getAttribute('data-target-id');
	  var target = document.querySelector('[data-pdf-annotate-id="' + annotationId + '"]');
	  var type = target.getAttribute('data-pdf-annotate-type');
	
	  if (type === 'highlight' || type === 'strikeout') {
	    return;
	  }
	
	  isDragging = true;
	  dragOffsetX = e.clientX;
	  dragOffsetY = e.clientY;
	  dragStartX = overlay.offsetLeft;
	  dragStartY = overlay.offsetTop;
	
	  overlay.style.background = 'rgba(255, 255, 255, 0.7)';
	  overlay.style.cursor = 'move';
	  overlay.querySelector('a').style.display = 'none';
	
	  document.addEventListener('mousemove', handleDocumentMousemove);
	  document.addEventListener('mouseup', handleDocumentMouseup);
	  (0, _utils.disableUserSelect)();
	}
	
	/**
	 * Handle document.mousemove event
	 *
	 * @param {Event} e The DOM event that needs to be handled
	 */
	function handleDocumentMousemove(e) {
	  var annotationId = overlay.getAttribute('data-target-id');
	  var parentNode = overlay.parentNode;
	  var rect = parentNode.getBoundingClientRect();
	  var y = dragStartY + (e.clientY - dragOffsetY);
	  var x = dragStartX + (e.clientX - dragOffsetX);
	  var minY = 0;
	  var maxY = rect.height;
	  var minX = 0;
	  var maxX = rect.width;
	
	  if (y > minY && y + overlay.offsetHeight < maxY) {
	    overlay.style.top = y + 'px';
	  }
	
	  if (x > minX && x + overlay.offsetWidth < maxX) {
	    overlay.style.left = x + 'px';
	  }
	}
	
	/**
	 * Handle document.mouseup event
	 *
	 * @param {Event} e The DOM event that needs to be handled
	 */
	function handleDocumentMouseup(e) {
	  var annotationId = overlay.getAttribute('data-target-id');
	  var target = document.querySelectorAll('[data-pdf-annotate-id="' + annotationId + '"]');
	  var type = target[0].getAttribute('data-pdf-annotate-type');
	  var svg = overlay.parentNode.querySelector('svg.annotationLayer');
	
	  var _getMetadata2 = (0, _utils.getMetadata)(svg),
	      documentId = _getMetadata2.documentId;
	
	  overlay.querySelector('a').style.display = '';
	
	  function getDelta(propX, propY) {
	    return calcDelta(parseInt(target[0].getAttribute(propX), 10), parseInt(target[0].getAttribute(propY), 10));
	  }
	
	  function calcDelta(x, y) {
	    return {
	      deltaX: OVERLAY_BORDER_SIZE + (0, _utils.scaleDown)(svg, { x: $(overlay).position().left }).x - x,
	      deltaY: OVERLAY_BORDER_SIZE + (0, _utils.scaleDown)(svg, { y: $(overlay).position().top }).y - y
	    };
	  }
	
	  _PDFJSAnnotate2.default.getStoreAdapter().getAnnotation(documentId, annotationId).then(function (annotation) {
	
	    // exit early if those are not present (happens with Spammy clicking)
	    if (!target || !svg || !target[0] || !target[0].parentNode) {
	      return;
	    }
	
	    if (['area', 'highlight', 'point', 'textbox', 'strikeout'].includes(type)) {
	      var _getDelta = getDelta('x', 'y'),
	          deltaX = _getDelta.deltaX,
	          deltaY = _getDelta.deltaY;
	
	      [].concat(_toConsumableArray(target)).forEach(function (t, i) {
	        if (deltaY !== 0) {
	          var modelY = parseInt(t.getAttribute('y'), 10) + deltaY;
	          var viewY = modelY;
	
	          if (type === 'textbox') {
	            viewY += annotation.size;
	          }
	
	          if (type === 'point') {
	            viewY = (0, _utils.scaleUp)(svg, { viewY: viewY }).viewY;
	          }
	
	          t.setAttribute('y', viewY);
	          if (annotation.rectangles) {
	            annotation.rectangles[i].y = modelY;
	          } else if (annotation.y) {
	            annotation.y = modelY;
	          }
	        }
	        if (deltaX !== 0) {
	          var modelX = parseInt(t.getAttribute('x'), 10) + deltaX;
	          var viewX = modelX;
	
	          if (type === 'point') {
	            viewX = (0, _utils.scaleUp)(svg, { viewX: viewX }).viewX;
	          }
	
	          t.setAttribute('x', viewX);
	          if (annotation.rectangles) {
	            annotation.rectangles[i].x = modelX;
	          } else if (annotation.x) {
	            annotation.x = modelX;
	          }
	        }
	
	        if (deltaX !== 0 || deltaY !== 0) {
	          _PDFJSAnnotate2.default.getStoreAdapter().editAnnotation(documentId, annotationId, annotation);
	        }
	      });
	      // } else if (type === 'strikeout') {
	      //   let { deltaX, deltaY } = getDelta('x1', 'y1');
	      //   [...target].forEach(target, (t, i) => {
	      //     if (deltaY !== 0) {
	      //       t.setAttribute('y1', parseInt(t.getAttribute('y1'), 10) + deltaY);
	      //       t.setAttribute('y2', parseInt(t.getAttribute('y2'), 10) + deltaY);
	      //       annotation.rectangles[i].y = parseInt(t.getAttribute('y1'), 10);
	      //     }
	      //     if (deltaX !== 0) {
	      //       t.setAttribute('x1', parseInt(t.getAttribute('x1'), 10) + deltaX);
	      //       t.setAttribute('x2', parseInt(t.getAttribute('x2'), 10) + deltaX);
	      //       annotation.rectangles[i].x = parseInt(t.getAttribute('x1'), 10);
	      //     }
	      //   });
	    } else if (type === 'drawing') {
	      var rect = (0, _utils.scaleDown)(svg, (0, _utils.getAnnotationRect)(target[0]));
	
	      var _annotation$lines$ = _slicedToArray(annotation.lines[0], 2),
	          originX = _annotation$lines$[0],
	          originY = _annotation$lines$[1];
	
	      var _calcDelta = calcDelta(originX, originY),
	          _deltaX = _calcDelta.deltaX,
	          _deltaY = _calcDelta.deltaY;
	
	      // origin isn't necessarily at 0/0 in relation to overlay x/y
	      // adjust the difference between overlay and drawing coords
	
	
	      _deltaY += originY - rect.top;
	      _deltaX += originX - rect.left;
	
	      annotation.lines.forEach(function (line, i) {
	        var _annotation$lines$i = _slicedToArray(annotation.lines[i], 2),
	            x = _annotation$lines$i[0],
	            y = _annotation$lines$i[1];
	
	        annotation.lines[i][0] = x + _deltaX;
	        annotation.lines[i][1] = y + _deltaY;
	      });
	
	      target[0].parentNode.removeChild(target[0]);
	      (0, _appendChild2.default)(svg, annotation);
	
	      if (_deltaX !== 0 || _deltaY !== 0) {
	        _PDFJSAnnotate2.default.getStoreAdapter().editAnnotation(documentId, annotationId, annotation);
	      }
	    }
	  });
	
	  setTimeout(function () {
	    isDragging = false;
	  }, 0);
	
	  overlay.style.background = '';
	  overlay.style.cursor = '';
	
	  document.removeEventListener('mousemove', handleDocumentMousemove);
	  document.removeEventListener('mouseup', handleDocumentMouseup);
	  (0, _utils.enableUserSelect)();
	}
	
	/**
	 * Handle annotation.click event
	 *
	 * @param {Element} e The annotation element that was clicked
	 */
	function handleAnnotationClick(target) {
	  createEditOverlay(target);
	}
	
	/**
	 * Added to disable movement and deletion of annotations while still
	 * allowing selection
	 */
	function setCanEdit(value) {
	  _canEdit = value;
	}
	
	/**
	 * Enable edit mode behavior.
	 */
	function enableEdit() {
	  if (_enabled) {
	    return;
	  }
	
	  _enabled = true;
	  (0, _event.addEventListener)('annotation:click', handleAnnotationClick);
	};
	
	/**
	 * Disable edit mode behavior.
	 */
	function disableEdit() {
	  destroyEditOverlay();
	
	  if (!_enabled) {
	    return;
	  }
	
	  _enabled = false;
	  (0, _event.removeEventListener)('annotation:click', handleAnnotationClick);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setPen = setPen;
	exports.enablePen = enablePen;
	exports.disablePen = disablePen;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _appendChild = __webpack_require__(11);
	
	var _appendChild2 = _interopRequireDefault(_appendChild);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _enabled = false;
	var _penSize = void 0;
	var _penColor = void 0;
	var path = void 0;
	var lines = void 0;
	
	/**
	 * Handle document.mousedown event
	 */
	function handleDocumentMousedown() {
	  path = null;
	  lines = [];
	
	  document.addEventListener('mousemove', handleDocumentMousemove);
	  document.addEventListener('mouseup', handleDocumentMouseup);
	}
	
	/**
	 * Handle document.mouseup event
	 *
	 * @param {Event} e The DOM event to be handled
	 */
	function handleDocumentMouseup(e) {
	  var svg = void 0;
	  if (lines.length > 1 && (svg = (0, _utils.findSVGAtPoint)(e.clientX, e.clientY))) {
	    var _getMetadata = (0, _utils.getMetadata)(svg),
	        documentId = _getMetadata.documentId,
	        pageNumber = _getMetadata.pageNumber;
	
	    _PDFJSAnnotate2.default.getStoreAdapter().addAnnotation(documentId, pageNumber, {
	      type: 'drawing',
	      width: _penSize,
	      color: _penColor,
	      lines: lines
	    }).then(function (annotation) {
	      if (path) {
	        svg.removeChild(path);
	      }
	
	      (0, _appendChild2.default)(svg, annotation);
	    });
	  }
	
	  document.removeEventListener('mousemove', handleDocumentMousemove);
	  document.removeEventListener('mouseup', handleDocumentMouseup);
	}
	
	/**
	 * Handle document.mousemove event
	 *
	 * @param {Event} e The DOM event to be handled
	 */
	function handleDocumentMousemove(e) {
	  savePoint(e.clientX, e.clientY);
	}
	
	/**
	 * Handle document.keyup event
	 *
	 * @param {Event} e The DOM event to be handled
	 */
	function handleDocumentKeyup(e) {
	  // Cancel rect if Esc is pressed
	  if (e.keyCode === 27) {
	    lines = null;
	    path.parentNode.removeChild(path);
	    document.removeEventListener('mousemove', handleDocumentMousemove);
	    document.removeEventListener('mouseup', handleDocumentMouseup);
	  }
	}
	
	/**
	 * Save a point to the line being drawn.
	 *
	 * @param {Number} x The x coordinate of the point
	 * @param {Number} y The y coordinate of the point
	 */
	function savePoint(x, y) {
	  var svg = (0, _utils.findSVGAtPoint)(x, y);
	  if (!svg) {
	    return;
	  }
	
	  var rect = svg.getBoundingClientRect();
	  var point = (0, _utils.scaleDown)(svg, {
	    x: x - rect.left,
	    y: y - rect.top
	  });
	
	  lines.push([point.x, point.y]);
	
	  if (lines.length <= 1) {
	    return;
	  }
	
	  if (path) {
	    svg.removeChild(path);
	  }
	
	  path = (0, _appendChild2.default)(svg, {
	    type: 'drawing',
	    color: _penColor,
	    width: _penSize,
	    lines: lines
	  });
	}
	
	/**
	 * Set the attributes of the pen.
	 *
	 * @param {Number} penSize The size of the lines drawn by the pen
	 * @param {String} penColor The color of the lines drawn by the pen
	 */
	function setPen() {
	  var penSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	  var penColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '000000';
	
	  _penSize = parseInt(penSize, 10);
	  _penColor = penColor;
	}
	
	/**
	 * Enable the pen behavior
	 */
	function enablePen() {
	  if (_enabled) {
	    return;
	  }
	
	  _enabled = true;
	  document.addEventListener('mousedown', handleDocumentMousedown);
	  document.addEventListener('keyup', handleDocumentKeyup);
	  (0, _utils.disableUserSelect)();
	}
	
	/**
	 * Disable the pen behavior
	 */
	function disablePen() {
	  if (!_enabled) {
	    return;
	  }
	
	  _enabled = false;
	  document.removeEventListener('mousedown', handleDocumentMousedown);
	  document.removeEventListener('keyup', handleDocumentKeyup);
	  (0, _utils.enableUserSelect)();
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.enablePoint = enablePoint;
	exports.disablePoint = disablePoint;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _appendChild = __webpack_require__(11);
	
	var _appendChild2 = _interopRequireDefault(_appendChild);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _enabled = false;
	var input = void 0;
	
	/**
	 * Handle document.mouseup event
	 *
	 * @param {Event} The DOM event to be handled
	 */
	function handleDocumentMouseup(e) {
	  if (input || !(0, _utils.findSVGAtPoint)(e.clientX, e.clientY)) {
	    return;
	  }
	
	  input = document.createElement('input');
	  input.setAttribute('id', 'pdf-annotate-point-input');
	  input.setAttribute('placeholder', 'Enter comment');
	  input.style.border = '3px solid ' + _utils.BORDER_COLOR;
	  input.style.borderRadius = '3px';
	  input.style.position = 'absolute';
	  input.style.top = e.clientY + 'px';
	  input.style.left = e.clientX + 'px';
	
	  input.addEventListener('blur', handleInputBlur);
	  input.addEventListener('keyup', handleInputKeyup);
	
	  document.body.appendChild(input);
	  input.focus();
	}
	
	/**
	 * Handle input.blur event
	 */
	function handleInputBlur() {
	  savePoint();
	}
	
	/**
	 * Handle input.keyup event
	 *
	 * @param {Event} e The DOM event to handle
	 */
	function handleInputKeyup(e) {
	  if (e.keyCode === 27) {
	    closeInput();
	  } else if (e.keyCode === 13) {
	    savePoint();
	  }
	}
	
	/**
	 * Save a new point annotation from input
	 */
	function savePoint() {
	  if (input.value.trim().length > 0) {
	    var clientX = parseInt(input.style.left, 10);
	    var clientY = parseInt(input.style.top, 10);
	    var content = input.value.trim();
	    var svg = (0, _utils.findSVGAtPoint)(clientX, clientY);
	    if (!svg) {
	      return;
	    }
	
	    var rect = svg.getBoundingClientRect();
	
	    var _getMetadata = (0, _utils.getMetadata)(svg),
	        documentId = _getMetadata.documentId,
	        pageNumber = _getMetadata.pageNumber;
	
	    var annotation = Object.assign({
	      type: 'point'
	    }, (0, _utils.scaleDown)(svg, {
	      x: clientX - rect.left,
	      y: clientY - rect.top
	    }));
	
	    _PDFJSAnnotate2.default.getStoreAdapter().addAnnotation(documentId, pageNumber, annotation).then(function (annotation) {
	      _PDFJSAnnotate2.default.getStoreAdapter().addComment(documentId, annotation.uuid, content);
	
	      (0, _appendChild2.default)(svg, annotation);
	    });
	  }
	
	  closeInput();
	}
	
	/**
	 * Close the input element
	 */
	function closeInput() {
	  input.removeEventListener('blur', handleInputBlur);
	  input.removeEventListener('keyup', handleInputKeyup);
	  document.body.removeChild(input);
	  input = null;
	}
	
	/**
	 * Enable point annotation behavior
	 */
	function enablePoint() {
	  if (_enabled) {
	    return;
	  }
	
	  _enabled = true;
	  document.addEventListener('mouseup', handleDocumentMouseup);
	}
	
	/**
	 * Disable point annotation behavior
	 */
	function disablePoint() {
	  if (!_enabled) {
	    return;
	  }
	
	  _enabled = false;
	  document.removeEventListener('mouseup', handleDocumentMouseup);
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.enableRect = enableRect;
	exports.disableRect = disableRect;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _appendChild = __webpack_require__(11);
	
	var _appendChild2 = _interopRequireDefault(_appendChild);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _enabled = false;
	var _type = void 0;
	var overlay = void 0;
	var originY = void 0;
	var originX = void 0;
	
	/**
	 * Get the current window selection as rects
	 *
	 * @return {Array} An Array of rects
	 */
	function getSelectionRects() {
	  try {
	    var selection = window.getSelection();
	    var range = selection.getRangeAt(0);
	    var rects = range.getClientRects();
	
	    if (rects.length > 0 && rects[0].width > 0 && rects[0].height > 0) {
	      return rects;
	    }
	  } catch (e) {}
	
	  return null;
	}
	
	/**
	 * Handle document.mousedown event
	 *
	 * @param {Event} e The DOM event to handle
	 */
	function handleDocumentMousedown(e) {
	  var svg = void 0;
	  if (_type !== 'area' || !(svg = (0, _utils.findSVGAtPoint)(e.clientX, e.clientY))) {
	    return;
	  }
	
	  var rect = svg.getBoundingClientRect();
	  originY = e.clientY;
	  originX = e.clientX;
	
	  overlay = document.createElement('div');
	  overlay.style.position = 'absolute';
	  overlay.style.top = originY - rect.top + 'px';
	  overlay.style.left = originX - rect.left + 'px';
	  overlay.style.border = '3px solid ' + _utils.BORDER_COLOR;
	  overlay.style.borderRadius = '3px';
	  svg.parentNode.appendChild(overlay);
	
	  document.addEventListener('mousemove', handleDocumentMousemove);
	  (0, _utils.disableUserSelect)();
	}
	
	/**
	 * Handle document.mousemove event
	 *
	 * @param {Event} e The DOM event to handle
	 */
	function handleDocumentMousemove(e) {
	  var svg = overlay.parentNode.querySelector('svg.annotationLayer');
	  var rect = svg.getBoundingClientRect();
	
	  if (originX + (e.clientX - originX) < rect.right) {
	    overlay.style.width = e.clientX - originX + 'px';
	  }
	
	  if (originY + (e.clientY - originY) < rect.bottom) {
	    overlay.style.height = e.clientY - originY + 'px';
	  }
	}
	
	/**
	 * Handle document.mouseup event
	 *
	 * @param {Event} e The DOM event to handle
	 */
	function handleDocumentMouseup(e) {
	  var rects = void 0;
	
	  // TODO: Pamoja: temp fix (mrbrdo) - fix problem if creating highlight annotation and then clicking arrow icon (would duplicate annotation because of this function call)
	  if (!(0, _utils.findSVGAtPoint)(e.clientX, e.clientY)) {
	    return;
	  }
	
	  if (_type !== 'area' && (rects = getSelectionRects())) {
	    var svg = (0, _utils.findSVGAtPoint)(rects[0].left, rects[0].top);
	    saveRect(_type, [].concat(_toConsumableArray(rects)).map(function (r) {
	      return {
	        top: r.top,
	        left: r.left,
	        width: r.width,
	        height: r.height
	      };
	    }));
	  } else if (_type === 'area' && overlay) {
	    var _svg = overlay.parentNode.querySelector('svg.annotationLayer');
	    var rect = _svg.getBoundingClientRect();
	    saveRect(_type, [{
	      top: parseInt(overlay.style.top, 10) + rect.top,
	      left: parseInt(overlay.style.left, 10) + rect.left,
	      width: parseInt(overlay.style.width, 10),
	      height: parseInt(overlay.style.height, 10)
	    }]);
	
	    overlay.parentNode.removeChild(overlay);
	    overlay = null;
	
	    document.removeEventListener('mousemove', handleDocumentMousemove);
	    (0, _utils.enableUserSelect)();
	  }
	}
	
	/**
	 * Handle document.keyup event
	 *
	 * @param {Event} e The DOM event to handle
	 */
	function handleDocumentKeyup(e) {
	  // Cancel rect if Esc is pressed
	  if (e.keyCode === 27) {
	    var selection = window.getSelection();
	    selection.removeAllRanges();
	    if (overlay && overlay.parentNode) {
	      overlay.parentNode.removeChild(overlay);
	      overlay = null;
	      document.removeEventListener('mousemove', handleDocumentMousemove);
	    }
	  }
	}
	
	/**
	 * Save a rect annotation
	 *
	 * @param {String} type The type of rect (area, highlight, strikeout)
	 * @param {Array} rects The rects to use for annotation
	 * @param {String} color The color of the rects
	 */
	function saveRect(type, rects, color) {
	  var svg = (0, _utils.findSVGAtPoint)(rects[0].left, rects[0].top);
	  var node = void 0;
	  var annotation = void 0;
	
	  if (!svg) {
	    return;
	  }
	
	  var boundingRect = svg.getBoundingClientRect();
	
	  if (!color) {
	    if (type === 'highlight') {
	      color = 'FFFF00';
	    } else if (type === 'strikeout') {
	      color = 'FF0000';
	    }
	  }
	
	  // Initialize the annotation
	  annotation = {
	    type: type,
	    color: color,
	    rectangles: [].concat(_toConsumableArray(rects)).map(function (r) {
	      var offset = 0;
	
	      if (type === 'strikeout') {
	        offset = r.height / 2;
	      }
	
	      return (0, _utils.scaleDown)(svg, {
	        y: r.top + offset - boundingRect.top,
	        x: r.left - boundingRect.left,
	        width: r.width,
	        height: r.height
	      });
	    }).filter(function (r) {
	      return r.width > 0 && r.height > 0 && r.x > -1 && r.y > -1;
	    })
	  };
	
	  // Short circuit if no rectangles exist
	  if (annotation.rectangles.length === 0) {
	    return;
	  }
	
	  // Special treatment for area as it only supports a single rect
	  if (type === 'area') {
	    var rect = annotation.rectangles[0];
	    delete annotation.rectangles;
	    annotation.x = rect.x;
	    annotation.y = rect.y;
	    annotation.width = rect.width;
	    annotation.height = rect.height;
	  }
	
	  var _getMetadata = (0, _utils.getMetadata)(svg),
	      documentId = _getMetadata.documentId,
	      pageNumber = _getMetadata.pageNumber;
	
	  // Add the annotation
	
	
	  _PDFJSAnnotate2.default.getStoreAdapter().addAnnotation(documentId, pageNumber, annotation).then(function (annotation) {
	    (0, _appendChild2.default)(svg, annotation);
	  });
	}
	
	/**
	 * Enable rect behavior
	 */
	function enableRect(type) {
	  _type = type;
	
	  if (_enabled) {
	    return;
	  }
	
	  _enabled = true;
	  document.addEventListener('mouseup', handleDocumentMouseup);
	  document.addEventListener('mousedown', handleDocumentMousedown);
	  document.addEventListener('keyup', handleDocumentKeyup);
	}
	
	/**
	 * Disable rect behavior
	 */
	function disableRect() {
	  if (!_enabled) {
	    return;
	  }
	
	  _enabled = false;
	  document.removeEventListener('mouseup', handleDocumentMouseup);
	  document.removeEventListener('mousedown', handleDocumentMousedown);
	  document.removeEventListener('keyup', handleDocumentKeyup);
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setText = setText;
	exports.enableText = enableText;
	exports.disableText = disableText;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _appendChild = __webpack_require__(11);
	
	var _appendChild2 = _interopRequireDefault(_appendChild);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _enabled = false;
	var input = void 0;
	var _textSize = void 0;
	var _textColor = void 0;
	
	/**
	 * Handle document.mouseup event
	 *
	 * @param {Event} e The DOM event to handle
	 */
	function handleDocumentMouseup(e) {
	  if (input || !(0, _utils.findSVGAtPoint)(e.clientX, e.clientY)) {
	    return;
	  }
	
	  input = document.createElement('input');
	  input.setAttribute('id', 'pdf-annotate-text-input');
	  input.setAttribute('placeholder', 'Enter text');
	  input.style.border = '3px solid ' + _utils.BORDER_COLOR;
	  input.style.borderRadius = '3px';
	  input.style.position = 'absolute';
	  input.style.top = e.clientY + 'px';
	  input.style.left = e.clientX + 'px';
	  input.style.fontSize = _textSize + 'px';
	
	  input.addEventListener('blur', handleInputBlur);
	  input.addEventListener('keyup', handleInputKeyup);
	
	  document.body.appendChild(input);
	  input.focus();
	}
	
	/**
	 * Handle input.blur event
	 */
	function handleInputBlur() {
	  saveText();
	}
	
	/**
	 * Handle input.keyup event
	 *
	 * @param {Event} e The DOM event to handle
	 */
	function handleInputKeyup(e) {
	  if (e.keyCode === 27) {
	    closeInput();
	  } else if (e.keyCode === 13) {
	    saveText();
	  }
	}
	
	/**
	 * Save a text annotation from input
	 */
	function saveText() {
	  if (input.value.trim().length > 0) {
	    var clientX = parseInt(input.style.left, 10);
	    var clientY = parseInt(input.style.top, 10);
	    var svg = (0, _utils.findSVGAtPoint)(clientX, clientY);
	    if (!svg) {
	      return;
	    }
	
	    var _getMetadata = (0, _utils.getMetadata)(svg),
	        documentId = _getMetadata.documentId,
	        pageNumber = _getMetadata.pageNumber;
	
	    var rect = svg.getBoundingClientRect();
	    var annotation = Object.assign({
	      type: 'textbox',
	      size: _textSize,
	      color: _textColor,
	      content: input.value.trim()
	    }, (0, _utils.scaleDown)(svg, {
	      x: clientX - rect.left,
	      y: clientY - rect.top,
	      width: input.offsetWidth,
	      height: input.offsetHeight
	    }));
	
	    _PDFJSAnnotate2.default.getStoreAdapter().addAnnotation(documentId, pageNumber, annotation).then(function (annotation) {
	      (0, _appendChild2.default)(svg, annotation);
	    });
	  }
	
	  closeInput();
	}
	
	/**
	 * Close the input
	 */
	function closeInput() {
	  if (input) {
	    input.removeEventListener('blur', handleInputBlur);
	    input.removeEventListener('keyup', handleInputKeyup);
	    document.body.removeChild(input);
	    input = null;
	  }
	}
	
	/**
	 * Set the text attributes
	 *
	 * @param {Number} textSize The size of the text
	 * @param {String} textColor The color of the text
	 */
	function setText() {
	  var textSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
	  var textColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '000000';
	
	  _textSize = parseInt(textSize, 10);
	  _textColor = textColor;
	}
	
	/**
	 * Enable text behavior
	 */
	function enableText() {
	  if (_enabled) {
	    return;
	  }
	
	  _enabled = true;
	  document.addEventListener('mouseup', handleDocumentMouseup);
	}
	
	/**
	 * Disable text behavior
	 */
	function disableText() {
	  if (!_enabled) {
	    return;
	  }
	
	  _enabled = false;
	  document.removeEventListener('mouseup', handleDocumentMouseup);
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.createPage = createPage;
	exports.renderPage = renderPage;
	
	var _PDFJSAnnotate = __webpack_require__(1);
	
	var _PDFJSAnnotate2 = _interopRequireDefault(_PDFJSAnnotate);
	
	var _renderScreenReaderHints = __webpack_require__(20);
	
	var _renderScreenReaderHints2 = _interopRequireDefault(_renderScreenReaderHints);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Template for creating a new page
	var PAGE_TEMPLATE = '\n  <div style="visibility: hidden;" class="page" data-loaded="false">\n    <div class="canvasWrapper">\n      <canvas></canvas>\n    </div>\n    <svg class="annotationLayer"></svg>\n    <div class="textLayer"></div>\n  </div>\n';
	
	/**
	 * Create a new page to be appended to the DOM.
	 *
	 * @param {Number} pageNumber The page number that is being created
	 * @return {HTMLElement}
	 */
	function createPage(pageNumber) {
	  var temp = document.createElement('div');
	  temp.innerHTML = PAGE_TEMPLATE;
	
	  var page = temp.children[0];
	  var canvas = page.querySelector('canvas');
	
	  page.setAttribute('id', 'pageContainer' + pageNumber);
	  page.setAttribute('data-page-number', pageNumber);
	
	  canvas.mozOpaque = true;
	  canvas.setAttribute('id', 'page' + pageNumber);
	
	  return page;
	}
	
	/**
	 * Render a page that has already been created.
	 *
	 * @param {Number} pageNumber The page number to be rendered
	 * @param {Object} renderOptions The options for rendering
	 * @return {Promise} Settled once rendering has completed
	 *  A settled Promise will be either:
	 *    - fulfilled: [pdfPage, annotations]
	 *    - rejected: Error
	 */
	function renderPage(pageNumber, renderOptions) {
	  var documentId = renderOptions.documentId,
	      pdfDocument = renderOptions.pdfDocument,
	      scale = renderOptions.scale,
	      rotate = renderOptions.rotate;
	
	  // Load the page and annotations
	
	  return Promise.all([pdfDocument.getPage(pageNumber), _PDFJSAnnotate2.default.getAnnotations(documentId, pageNumber)]).then(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        pdfPage = _ref2[0],
	        annotations = _ref2[1];
	
	    var page = document.getElementById('pageContainer' + pageNumber);
	    var svg = page.querySelector('.annotationLayer');
	    var canvas = page.querySelector('.canvasWrapper canvas');
	    var canvasContext = canvas.getContext('2d', { alpha: false });
	    var viewport = pdfPage.getViewport(scale, rotate);
	    var transform = scalePage(pageNumber, viewport, canvasContext);
	
	    // Render the page
	    return Promise.all([pdfPage.render({ canvasContext: canvasContext, viewport: viewport, transform: transform }), _PDFJSAnnotate2.default.render(svg, viewport, annotations)]).then(function () {
	      // Text content is needed for a11y, but is also necessary for creating
	      // highlight and strikeout annotations which require selecting text.
	      return pdfPage.getTextContent({ normalizeWhitespace: true }).then(function (textContent) {
	        return new Promise(function (resolve, reject) {
	          // Render text layer for a11y of text content
	          var textLayer = page.querySelector('.textLayer');
	          var textLayerFactory = new PDFJS.DefaultTextLayerFactory();
	          var textLayerBuilder = textLayerFactory.createTextLayerBuilder(textLayer, pageNumber - 1, viewport);
	          textLayerBuilder.setTextContent(textContent);
	          textLayerBuilder.render();
	
	          // Enable a11y for annotations
	          // Timeout is needed to wait for `textLayerBuilder.render`
	          setTimeout(function () {
	            try {
	              (0, _renderScreenReaderHints2.default)(annotations.annotations);
	              resolve();
	            } catch (e) {
	              reject(e);
	            }
	          });
	        });
	      });
	    }).then(function () {
	      // Indicate that the page was loaded
	      page.setAttribute('data-loaded', 'true');
	
	      return [pdfPage, annotations];
	    });
	  });
	}
	
	/**
	 * Scale the elements of a page.
	 *
	 * @param {Number} pageNumber The page number to be scaled
	 * @param {Object} viewport The viewport of the PDF page (see pdfPage.getViewport(scale, rotate))
	 * @param {Object} context The canvas context that the PDF page is rendered to
	 * @return {Array} The transform data for rendering the PDF page
	 */
	function scalePage(pageNumber, viewport, context) {
	  var page = document.getElementById('pageContainer' + pageNumber);
	  var canvas = page.querySelector('.canvasWrapper canvas');
	  var svg = page.querySelector('.annotationLayer');
	  var wrapper = page.querySelector('.canvasWrapper');
	  var textLayer = page.querySelector('.textLayer');
	  var outputScale = getOutputScale(context);
	  var transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
	  var sfx = approximateFraction(outputScale.sx);
	  var sfy = approximateFraction(outputScale.sy);
	
	  // Adjust width/height for scale
	  page.style.visibility = '';
	  canvas.width = roundToDivide(viewport.width * outputScale.sx, sfx[0]);
	  canvas.height = roundToDivide(viewport.height * outputScale.sy, sfy[0]);
	  canvas.style.width = roundToDivide(viewport.width, sfx[1]) + 'px';
	  canvas.style.height = roundToDivide(viewport.height, sfx[1]) + 'px';
	  svg.setAttribute('width', viewport.width);
	  svg.setAttribute('height', viewport.height);
	  svg.style.width = viewport.width + 'px';
	  svg.style.height = viewport.height + 'px';
	  page.style.width = viewport.width + 'px';
	  page.style.height = viewport.height + 'px';
	  wrapper.style.width = viewport.width + 'px';
	  wrapper.style.height = viewport.height + 'px';
	  textLayer.style.width = viewport.width + 'px';
	  textLayer.style.height = viewport.height + 'px';
	
	  return transform;
	}
	
	/**
	 * The following methods are taken from mozilla/pdf.js and as such fall under
	 * the Apache License (http://www.apache.org/licenses/).
	 *
	 * Original source can be found at mozilla/pdf.js:
	 * https://github.com/mozilla/pdf.js/blob/master/web/ui_utils.js
	 */
	
	/**
	 * Approximates a float number as a fraction using Farey sequence (max order
	 * of 8).
	 *
	 * @param {Number} x Positive float number
	 * @return {Array} Estimated fraction: the first array item is a numerator,
	 *                 the second one is a denominator.
	 */
	function approximateFraction(x) {
	  // Fast path for int numbers or their inversions.
	  if (Math.floor(x) === x) {
	    return [x, 1];
	  }
	
	  var xinv = 1 / x;
	  var limit = 8;
	  if (xinv > limit) {
	    return [1, limit];
	  } else if (Math.floor(xinv) === xinv) {
	    return [1, xinv];
	  }
	
	  var x_ = x > 1 ? xinv : x;
	
	  // a/b and c/d are neighbours in Farey sequence.
	  var a = 0,
	      b = 1,
	      c = 1,
	      d = 1;
	
	  // Limit search to order 8.
	  while (true) {
	    // Generating next term in sequence (order of q).
	    var p = a + c,
	        q = b + d;
	    if (q > limit) {
	      break;
	    }
	    if (x_ <= p / q) {
	      c = p;d = q;
	    } else {
	      a = p;b = q;
	    }
	  }
	
	  // Select closest of neighbours to x.
	  if (x_ - a / b < c / d - x_) {
	    return x_ === x ? [a, b] : [b, a];
	  } else {
	    return x_ === x ? [c, d] : [d, c];
	  }
	}
	
	function getOutputScale(ctx) {
	  var devicePixelRatio = window.devicePixelRatio || 1;
	  var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
	  var pixelRatio = devicePixelRatio / backingStoreRatio;
	  return {
	    sx: pixelRatio,
	    sy: pixelRatio,
	    scaled: pixelRatio !== 1
	  };
	}
	
	function roundToDivide(x, div) {
	  var r = x % div;
	  return r === 0 ? x : Math.round(x - r + div);
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initColorPicker;
	// Color picker component
	var COLORS = [{ hex: '#000000', name: 'Black' }, { hex: '#EF4437', name: 'Red' }, { hex: '#E71F63', name: 'Pink' }, { hex: '#8F3E97', name: 'Purple' }, { hex: '#65499D', name: 'Deep Purple' }, { hex: '#4554A4', name: 'Indigo' }, { hex: '#2083C5', name: 'Blue' }, { hex: '#35A4DC', name: 'Light Blue' }, { hex: '#09BCD3', name: 'Cyan' }, { hex: '#009688', name: 'Teal' }, { hex: '#43A047', name: 'Green' }, { hex: '#8BC34A', name: 'Light Green' }, { hex: '#FDC010', name: 'Yellow' }, { hex: '#F8971C', name: 'Orange' }, { hex: '#F0592B', name: 'Deep Orange' }, { hex: '#F06291', name: 'Light Pink' }];
	
	function initColorPicker(el, value, onChange) {
	  function setColor(value) {
	    var fireOnChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    currentValue = value;
	    a.setAttribute('data-color', value);
	    a.style.background = value;
	    if (fireOnChange && typeof onChange === 'function') {
	      onChange(value);
	    }
	    closePicker();
	  }
	
	  function togglePicker() {
	    if (isPickerOpen) {
	      closePicker();
	    } else {
	      openPicker();
	    }
	  }
	
	  function closePicker() {
	    document.removeEventListener('keyup', handleDocumentKeyup);
	    if (picker && picker.parentNode) {
	      picker.parentNode.removeChild(picker);
	    }
	    isPickerOpen = false;
	    a.focus();
	  }
	
	  function openPicker() {
	    if (!picker) {
	      picker = document.createElement('div');
	      picker.style.background = '#fff';
	      picker.style.border = '1px solid #ccc';
	      picker.style.padding = '2px';
	      picker.style.position = 'absolute';
	      picker.style.width = '122px';
	      el.style.position = 'relative';
	
	      COLORS.map(createColorOption).forEach(function (c) {
	        c.style.margin = '2px';
	        c.onclick = function () {
	          setColor(c.getAttribute('data-color'));
	        };
	        picker.appendChild(c);
	      });
	    }
	
	    document.addEventListener('keyup', handleDocumentKeyup);
	    el.appendChild(picker);
	    isPickerOpen = true;
	  }
	
	  function createColorOption(color) {
	    var e = document.createElement('a');
	    e.className = 'color';
	    e.setAttribute('href', 'javascript://');
	    e.setAttribute('title', color.name);
	    e.setAttribute('data-color', color.hex);
	    e.style.background = color.hex;
	    return e;
	  }
	
	  function handleDocumentKeyup(e) {
	    if (e.keyCode === 27) {
	      closePicker();
	    }
	  }
	
	  var picker = void 0;
	  var isPickerOpen = false;
	  var currentValue = void 0;
	  var a = createColorOption({ hex: value });
	  a.onclick = togglePicker;
	  el.appendChild(a);
	  setColor(value, false);
	}
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* Copyright 2014 Mozilla Foundation
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/*jshint globalstrict: false */
	/* globals PDFJS, PDFViewer, PDFPageView, TextLayerBuilder, PDFLinkService,
	           DefaultTextLayerFactory, AnnotationLayerBuilder, PDFHistory,
	           DefaultAnnotationLayerFactory, getFileName, ProgressBar */
	
	// Initializing PDFJS global object (if still undefined)
	if (typeof PDFJS === 'undefined') {
	  (typeof window !== 'undefined' ? window : undefined).PDFJS = {};
	}
	
	(function pdfViewerWrapper() {
	  'use strict';
	
	  var CSS_UNITS = 96.0 / 72.0;
	  var DEFAULT_SCALE_VALUE = 'auto';
	  var DEFAULT_SCALE = 1.0;
	  var UNKNOWN_SCALE = 0;
	  var MAX_AUTO_SCALE = 1.25;
	  var SCROLLBAR_PADDING = 40;
	  var VERTICAL_PADDING = 5;
	
	  function getFileName(url) {
	    var anchor = url.indexOf('#');
	    var query = url.indexOf('?');
	    var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
	    return url.substring(url.lastIndexOf('/', end) + 1, end);
	  }
	
	  /**
	   * Returns scale factor for the canvas. It makes sense for the HiDPI displays.
	   * @return {Object} The object with horizontal (sx) and vertical (sy)
	                      scales. The scaled property is set to false if scaling is
	                      not required, true otherwise.
	   */
	  function getOutputScale(ctx) {
	    var devicePixelRatio = window.devicePixelRatio || 1;
	    var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
	    var pixelRatio = devicePixelRatio / backingStoreRatio;
	    return {
	      sx: pixelRatio,
	      sy: pixelRatio,
	      scaled: pixelRatio !== 1
	    };
	  }
	
	  /**
	   * Scrolls specified element into view of its parent.
	   * @param {Object} element - The element to be visible.
	   * @param {Object} spot - An object with optional top and left properties,
	   *   specifying the offset from the top left edge.
	   * @param {boolean} skipOverflowHiddenElements - Ignore elements that have
	   *   the CSS rule `overflow: hidden;` set. The default is false.
	   */
	  function scrollIntoView(element, spot, skipOverflowHiddenElements) {
	    // Assuming offsetParent is available (it's not available when viewer is in
	    // hidden iframe or object). We have to scroll: if the offsetParent is not set
	    // producing the error. See also animationStartedClosure.
	    var parent = element.offsetParent;
	    if (!parent) {
	      console.error('offsetParent is not set -- cannot scroll');
	      return;
	    }
	    var checkOverflow = skipOverflowHiddenElements || false;
	    var offsetY = element.offsetTop + element.clientTop;
	    var offsetX = element.offsetLeft + element.clientLeft;
	    while (parent.clientHeight === parent.scrollHeight || checkOverflow && getComputedStyle(parent).overflow === 'hidden') {
	      if (parent.dataset._scaleY) {
	        offsetY /= parent.dataset._scaleY;
	        offsetX /= parent.dataset._scaleX;
	      }
	      offsetY += parent.offsetTop;
	      offsetX += parent.offsetLeft;
	      parent = parent.offsetParent;
	      if (!parent) {
	        return; // no need to scroll
	      }
	    }
	    if (spot) {
	      if (spot.top !== undefined) {
	        offsetY += spot.top;
	      }
	      if (spot.left !== undefined) {
	        offsetX += spot.left;
	        parent.scrollLeft = offsetX;
	      }
	    }
	    parent.scrollTop = offsetY;
	  }
	
	  /**
	   * Helper function to start monitoring the scroll event and converting them into
	   * PDF.js friendly one: with scroll debounce and scroll direction.
	   */
	  function watchScroll(viewAreaElement, callback) {
	    var debounceScroll = function debounceScroll(evt) {
	      if (rAF) {
	        return;
	      }
	      // schedule an invocation of scroll for next animation frame.
	      rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
	        rAF = null;
	
	        var currentY = viewAreaElement.scrollTop;
	        var lastY = state.lastY;
	        if (currentY !== lastY) {
	          state.down = currentY > lastY;
	        }
	        state.lastY = currentY;
	        callback(state);
	      });
	    };
	
	    var state = {
	      down: true,
	      lastY: viewAreaElement.scrollTop,
	      _eventHandler: debounceScroll
	    };
	
	    var rAF = null;
	    viewAreaElement.addEventListener('scroll', debounceScroll, true);
	    return state;
	  }
	
	  /**
	   * Helper function to parse query string (e.g. ?param1=value&parm2=...).
	   */
	  function parseQueryString(query) {
	    var parts = query.split('&');
	    var params = {};
	    for (var i = 0, ii = parts.length; i < ii; ++i) {
	      var param = parts[i].split('=');
	      var key = param[0].toLowerCase();
	      var value = param.length > 1 ? param[1] : null;
	      params[decodeURIComponent(key)] = decodeURIComponent(value);
	    }
	    return params;
	  }
	
	  /**
	   * Use binary search to find the index of the first item in a given array which
	   * passes a given condition. The items are expected to be sorted in the sense
	   * that if the condition is true for one item in the array, then it is also true
	   * for all following items.
	   *
	   * @returns {Number} Index of the first array element to pass the test,
	   *                   or |items.length| if no such element exists.
	   */
	  function binarySearchFirstItem(items, condition) {
	    var minIndex = 0;
	    var maxIndex = items.length - 1;
	
	    if (items.length === 0 || !condition(items[maxIndex])) {
	      return items.length;
	    }
	    if (condition(items[minIndex])) {
	      return minIndex;
	    }
	
	    while (minIndex < maxIndex) {
	      var currentIndex = minIndex + maxIndex >> 1;
	      var currentItem = items[currentIndex];
	      if (condition(currentItem)) {
	        maxIndex = currentIndex;
	      } else {
	        minIndex = currentIndex + 1;
	      }
	    }
	    return minIndex; /* === maxIndex */
	  }
	
	  /**
	   *  Approximates float number as a fraction using Farey sequence (max order
	   *  of 8).
	   *  @param {number} x - Positive float number.
	   *  @returns {Array} Estimated fraction: the first array item is a numerator,
	   *                   the second one is a denominator.
	   */
	  function approximateFraction(x) {
	    // Fast paths for int numbers or their inversions.
	    if (Math.floor(x) === x) {
	      return [x, 1];
	    }
	    var xinv = 1 / x;
	    var limit = 8;
	    if (xinv > limit) {
	      return [1, limit];
	    } else if (Math.floor(xinv) === xinv) {
	      return [1, xinv];
	    }
	
	    var x_ = x > 1 ? xinv : x;
	    // a/b and c/d are neighbours in Farey sequence.
	    var a = 0,
	        b = 1,
	        c = 1,
	        d = 1;
	    // Limiting search to order 8.
	    while (true) {
	      // Generating next term in sequence (order of q).
	      var p = a + c,
	          q = b + d;
	      if (q > limit) {
	        break;
	      }
	      if (x_ <= p / q) {
	        c = p;d = q;
	      } else {
	        a = p;b = q;
	      }
	    }
	    // Select closest of the neighbours to x.
	    if (x_ - a / b < c / d - x_) {
	      return x_ === x ? [a, b] : [b, a];
	    } else {
	      return x_ === x ? [c, d] : [d, c];
	    }
	  }
	
	  function roundToDivide(x, div) {
	    var r = x % div;
	    return r === 0 ? x : Math.round(x - r + div);
	  }
	
	  /**
	   * Generic helper to find out what elements are visible within a scroll pane.
	   */
	  function getVisibleElements(scrollEl, views, sortByVisibility) {
	    var top = scrollEl.scrollTop,
	        bottom = top + scrollEl.clientHeight;
	    var left = scrollEl.scrollLeft,
	        right = left + scrollEl.clientWidth;
	
	    function isElementBottomBelowViewTop(view) {
	      var element = view.div;
	      var elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
	      return elementBottom > top;
	    }
	
	    var visible = [],
	        view,
	        element;
	    var currentHeight, viewHeight, hiddenHeight, percentHeight;
	    var currentWidth, viewWidth;
	    var firstVisibleElementInd = views.length === 0 ? 0 : binarySearchFirstItem(views, isElementBottomBelowViewTop);
	
	    for (var i = firstVisibleElementInd, ii = views.length; i < ii; i++) {
	      view = views[i];
	      element = view.div;
	      currentHeight = element.offsetTop + element.clientTop;
	      viewHeight = element.clientHeight;
	
	      if (currentHeight > bottom) {
	        break;
	      }
	
	      currentWidth = element.offsetLeft + element.clientLeft;
	      viewWidth = element.clientWidth;
	      if (currentWidth + viewWidth < left || currentWidth > right) {
	        continue;
	      }
	      hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, currentHeight + viewHeight - bottom);
	      percentHeight = (viewHeight - hiddenHeight) * 100 / viewHeight | 0;
	
	      visible.push({
	        id: view.id,
	        x: currentWidth,
	        y: currentHeight,
	        view: view,
	        percent: percentHeight
	      });
	    }
	
	    var first = visible[0];
	    var last = visible[visible.length - 1];
	
	    if (sortByVisibility) {
	      visible.sort(function (a, b) {
	        var pc = a.percent - b.percent;
	        if (Math.abs(pc) > 0.001) {
	          return -pc;
	        }
	        return a.id - b.id; // ensure stability
	      });
	    }
	    return { first: first, last: last, views: visible };
	  }
	
	  /**
	   * Event handler to suppress context menu.
	   */
	  function noContextMenuHandler(e) {
	    e.preventDefault();
	  }
	
	  /**
	   * Returns the filename or guessed filename from the url (see issue 3455).
	   * url {String} The original PDF location.
	   * @return {String} Guessed PDF file name.
	   */
	  function getPDFFileNameFromURL(url) {
	    var reURI = /^(?:([^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
	    //            SCHEME      HOST         1.PATH  2.QUERY   3.REF
	    // Pattern to get last matching NAME.pdf
	    var reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
	    var splitURI = reURI.exec(url);
	    var suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
	    if (suggestedFilename) {
	      suggestedFilename = suggestedFilename[0];
	      if (suggestedFilename.indexOf('%') !== -1) {
	        // URL-encoded %2Fpath%2Fto%2Ffile.pdf should be file.pdf
	        try {
	          suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
	        } catch (e) {// Possible (extremely rare) errors:
	          // URIError "Malformed URI", e.g. for "%AA.pdf"
	          // TypeError "null has no properties", e.g. for "%2F.pdf"
	        }
	      }
	    }
	    return suggestedFilename || 'document.pdf';
	  }
	
	  var ProgressBar = function ProgressBarClosure() {
	
	    function clamp(v, min, max) {
	      return Math.min(Math.max(v, min), max);
	    }
	
	    function ProgressBar(id, opts) {
	      this.visible = true;
	
	      // Fetch the sub-elements for later.
	      this.div = document.querySelector(id + ' .progress');
	
	      // Get the loading bar element, so it can be resized to fit the viewer.
	      this.bar = this.div.parentNode;
	
	      // Get options, with sensible defaults.
	      this.height = opts.height || 100;
	      this.width = opts.width || 100;
	      this.units = opts.units || '%';
	
	      // Initialize heights.
	      this.div.style.height = this.height + this.units;
	      this.percent = 0;
	    }
	
	    ProgressBar.prototype = {
	
	      updateBar: function ProgressBar_updateBar() {
	        if (this._indeterminate) {
	          this.div.classList.add('indeterminate');
	          this.div.style.width = this.width + this.units;
	          return;
	        }
	
	        this.div.classList.remove('indeterminate');
	        var progressSize = this.width * this._percent / 100;
	        this.div.style.width = progressSize + this.units;
	      },
	
	      get percent() {
	        return this._percent;
	      },
	
	      set percent(val) {
	        this._indeterminate = isNaN(val);
	        this._percent = clamp(val, 0, 100);
	        this.updateBar();
	      },
	
	      setWidth: function ProgressBar_setWidth(viewer) {
	        if (viewer) {
	          var container = viewer.parentNode;
	          var scrollbarWidth = container.offsetWidth - viewer.offsetWidth;
	          if (scrollbarWidth > 0) {
	            this.bar.setAttribute('style', 'width: calc(100% - ' + scrollbarWidth + 'px);');
	          }
	        }
	      },
	
	      hide: function ProgressBar_hide() {
	        if (!this.visible) {
	          return;
	        }
	        this.visible = false;
	        this.bar.classList.add('hidden');
	        document.body.classList.remove('loadingInProgress');
	      },
	
	      show: function ProgressBar_show() {
	        if (this.visible) {
	          return;
	        }
	        this.visible = true;
	        document.body.classList.add('loadingInProgress');
	        this.bar.classList.remove('hidden');
	      }
	    };
	
	    return ProgressBar;
	  }();
	
	  /**
	   * Performs navigation functions inside PDF, such as opening specified page,
	   * or destination.
	   * @class
	   * @implements {IPDFLinkService}
	   */
	  var PDFLinkService = function () {
	    /**
	     * @constructs PDFLinkService
	     */
	    function PDFLinkService() {
	      this.baseUrl = null;
	      this.pdfDocument = null;
	      this.pdfViewer = null;
	      this.pdfHistory = null;
	
	      this._pagesRefCache = null;
	    }
	
	    PDFLinkService.prototype = {
	      setDocument: function PDFLinkService_setDocument(pdfDocument, baseUrl) {
	        this.baseUrl = baseUrl;
	        this.pdfDocument = pdfDocument;
	        this._pagesRefCache = Object.create(null);
	      },
	
	      setViewer: function PDFLinkService_setViewer(pdfViewer) {
	        this.pdfViewer = pdfViewer;
	      },
	
	      setHistory: function PDFLinkService_setHistory(pdfHistory) {
	        this.pdfHistory = pdfHistory;
	      },
	
	      /**
	       * @returns {number}
	       */
	      get pagesCount() {
	        return this.pdfDocument.numPages;
	      },
	
	      /**
	       * @returns {number}
	       */
	      get page() {
	        return this.pdfViewer.currentPageNumber;
	      },
	
	      /**
	       * @param {number} value
	       */
	      set page(value) {
	        this.pdfViewer.currentPageNumber = value;
	      },
	
	      /**
	       * @param dest - The PDF destination object.
	       */
	      navigateTo: function PDFLinkService_navigateTo(dest) {
	        var destString = '';
	        var self = this;
	
	        var goToDestination = function goToDestination(destRef) {
	          // dest array looks like that: <page-ref> </XYZ|FitXXX> <args..>
	          var pageNumber = destRef instanceof Object ? self._pagesRefCache[destRef.num + ' ' + destRef.gen + ' R'] : destRef + 1;
	          if (pageNumber) {
	            if (pageNumber > self.pagesCount) {
	              pageNumber = self.pagesCount;
	            }
	            self.pdfViewer.scrollPageIntoView(pageNumber, dest);
	
	            if (self.pdfHistory) {
	              // Update the browsing history.
	              self.pdfHistory.push({
	                dest: dest,
	                hash: destString,
	                page: pageNumber
	              });
	            }
	          } else {
	            self.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
	              var pageNum = pageIndex + 1;
	              var cacheKey = destRef.num + ' ' + destRef.gen + ' R';
	              self._pagesRefCache[cacheKey] = pageNum;
	              goToDestination(destRef);
	            });
	          }
	        };
	
	        var destinationPromise;
	        if (typeof dest === 'string') {
	          destString = dest;
	          destinationPromise = this.pdfDocument.getDestination(dest);
	        } else {
	          destinationPromise = Promise.resolve(dest);
	        }
	        destinationPromise.then(function (destination) {
	          dest = destination;
	          if (!(destination instanceof Array)) {
	            return; // invalid destination
	          }
	          goToDestination(destination[0]);
	        });
	      },
	
	      /**
	       * @param dest - The PDF destination object.
	       * @returns {string} The hyperlink to the PDF object.
	       */
	      getDestinationHash: function PDFLinkService_getDestinationHash(dest) {
	        if (typeof dest === 'string') {
	          return this.getAnchorUrl('#' + escape(dest));
	        }
	        if (dest instanceof Array) {
	          var destRef = dest[0]; // see navigateTo method for dest format
	          var pageNumber = destRef instanceof Object ? this._pagesRefCache[destRef.num + ' ' + destRef.gen + ' R'] : destRef + 1;
	          if (pageNumber) {
	            var pdfOpenParams = this.getAnchorUrl('#page=' + pageNumber);
	            var destKind = dest[1];
	            if ((typeof destKind === 'undefined' ? 'undefined' : _typeof(destKind)) === 'object' && 'name' in destKind && destKind.name === 'XYZ') {
	              var scale = dest[4] || this.pdfViewer.currentScaleValue;
	              var scaleNumber = parseFloat(scale);
	              if (scaleNumber) {
	                scale = scaleNumber * 100;
	              }
	              pdfOpenParams += '&zoom=' + scale;
	              if (dest[2] || dest[3]) {
	                pdfOpenParams += ',' + (dest[2] || 0) + ',' + (dest[3] || 0);
	              }
	            }
	            return pdfOpenParams;
	          }
	        }
	        return this.getAnchorUrl('');
	      },
	
	      /**
	       * Prefix the full url on anchor links to make sure that links are resolved
	       * relative to the current URL instead of the one defined in <base href>.
	       * @param {String} anchor The anchor hash, including the #.
	       * @returns {string} The hyperlink to the PDF object.
	       */
	      getAnchorUrl: function PDFLinkService_getAnchorUrl(anchor) {
	        return (this.baseUrl || '') + anchor;
	      },
	
	      /**
	       * @param {string} hash
	       */
	      setHash: function PDFLinkService_setHash(hash) {
	        if (hash.indexOf('=') >= 0) {
	          var params = parseQueryString(hash);
	          // borrowing syntax from "Parameters for Opening PDF Files"
	          if ('nameddest' in params) {
	            if (this.pdfHistory) {
	              this.pdfHistory.updateNextHashParam(params.nameddest);
	            }
	            this.navigateTo(params.nameddest);
	            return;
	          }
	          var pageNumber, dest;
	          if ('page' in params) {
	            pageNumber = params.page | 0 || 1;
	          }
	          if ('zoom' in params) {
	            // Build the destination array.
	            var zoomArgs = params.zoom.split(','); // scale,left,top
	            var zoomArg = zoomArgs[0];
	            var zoomArgNumber = parseFloat(zoomArg);
	
	            if (zoomArg.indexOf('Fit') === -1) {
	              // If the zoomArg is a number, it has to get divided by 100. If it's
	              // a string, it should stay as it is.
	              dest = [null, { name: 'XYZ' }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
	            } else {
	              if (zoomArg === 'Fit' || zoomArg === 'FitB') {
	                dest = [null, { name: zoomArg }];
	              } else if (zoomArg === 'FitH' || zoomArg === 'FitBH' || zoomArg === 'FitV' || zoomArg === 'FitBV') {
	                dest = [null, { name: zoomArg }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
	              } else if (zoomArg === 'FitR') {
	                if (zoomArgs.length !== 5) {
	                  console.error('PDFLinkService_setHash: ' + 'Not enough parameters for \'FitR\'.');
	                } else {
	                  dest = [null, { name: zoomArg }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
	                }
	              } else {
	                console.error('PDFLinkService_setHash: \'' + zoomArg + '\' is not a valid zoom value.');
	              }
	            }
	          }
	          if (dest) {
	            this.pdfViewer.scrollPageIntoView(pageNumber || this.page, dest);
	          } else if (pageNumber) {
	            this.page = pageNumber; // simple page
	          }
	          if ('pagemode' in params) {
	            var event = document.createEvent('CustomEvent');
	            event.initCustomEvent('pagemode', true, true, {
	              mode: params.pagemode
	            });
	            this.pdfViewer.container.dispatchEvent(event);
	          }
	        } else if (/^\d+$/.test(hash)) {
	          // page number
	          this.page = hash;
	        } else {
	          // named destination
	          if (this.pdfHistory) {
	            this.pdfHistory.updateNextHashParam(unescape(hash));
	          }
	          this.navigateTo(unescape(hash));
	        }
	      },
	
	      /**
	       * @param {string} action
	       */
	      executeNamedAction: function PDFLinkService_executeNamedAction(action) {
	        // See PDF reference, table 8.45 - Named action
	        switch (action) {
	          case 'GoBack':
	            if (this.pdfHistory) {
	              this.pdfHistory.back();
	            }
	            break;
	
	          case 'GoForward':
	            if (this.pdfHistory) {
	              this.pdfHistory.forward();
	            }
	            break;
	
	          case 'NextPage':
	            this.page++;
	            break;
	
	          case 'PrevPage':
	            this.page--;
	            break;
	
	          case 'LastPage':
	            this.page = this.pagesCount;
	            break;
	
	          case 'FirstPage':
	            this.page = 1;
	            break;
	
	          default:
	            break; // No action according to spec
	        }
	
	        var event = document.createEvent('CustomEvent');
	        event.initCustomEvent('namedaction', true, true, {
	          action: action
	        });
	        this.pdfViewer.container.dispatchEvent(event);
	      },
	
	      /**
	       * @param {number} pageNum - page number.
	       * @param {Object} pageRef - reference to the page.
	       */
	      cachePageRef: function PDFLinkService_cachePageRef(pageNum, pageRef) {
	        var refStr = pageRef.num + ' ' + pageRef.gen + ' R';
	        this._pagesRefCache[refStr] = pageNum;
	      }
	    };
	
	    return PDFLinkService;
	  }();
	
	  var PresentationModeState = {
	    UNKNOWN: 0,
	    NORMAL: 1,
	    CHANGING: 2,
	    FULLSCREEN: 3
	  };
	
	  var IGNORE_CURRENT_POSITION_ON_ZOOM = false;
	  var DEFAULT_CACHE_SIZE = 10;
	
	  var CLEANUP_TIMEOUT = 30000;
	
	  var RenderingStates = {
	    INITIAL: 0,
	    RUNNING: 1,
	    PAUSED: 2,
	    FINISHED: 3
	  };
	
	  /**
	   * Controls rendering of the views for pages and thumbnails.
	   * @class
	   */
	  var PDFRenderingQueue = function PDFRenderingQueueClosure() {
	    /**
	     * @constructs
	     */
	    function PDFRenderingQueue() {
	      this.pdfViewer = null;
	      this.pdfThumbnailViewer = null;
	      this.onIdle = null;
	
	      this.highestPriorityPage = null;
	      this.idleTimeout = null;
	      this.printing = false;
	      this.isThumbnailViewEnabled = false;
	    }
	
	    PDFRenderingQueue.prototype = /** @lends PDFRenderingQueue.prototype */{
	      /**
	       * @param {PDFViewer} pdfViewer
	       */
	      setViewer: function PDFRenderingQueue_setViewer(pdfViewer) {
	        this.pdfViewer = pdfViewer;
	      },
	
	      /**
	       * @param {PDFThumbnailViewer} pdfThumbnailViewer
	       */
	      setThumbnailViewer: function PDFRenderingQueue_setThumbnailViewer(pdfThumbnailViewer) {
	        this.pdfThumbnailViewer = pdfThumbnailViewer;
	      },
	
	      /**
	       * @param {IRenderableView} view
	       * @returns {boolean}
	       */
	      isHighestPriority: function PDFRenderingQueue_isHighestPriority(view) {
	        return this.highestPriorityPage === view.renderingId;
	      },
	
	      renderHighestPriority: function PDFRenderingQueue_renderHighestPriority(currentlyVisiblePages) {
	        if (this.idleTimeout) {
	          clearTimeout(this.idleTimeout);
	          this.idleTimeout = null;
	        }
	
	        // Pages have a higher priority than thumbnails, so check them first.
	        if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
	          return;
	        }
	        // No pages needed rendering so check thumbnails.
	        if (this.pdfThumbnailViewer && this.isThumbnailViewEnabled) {
	          if (this.pdfThumbnailViewer.forceRendering()) {
	            return;
	          }
	        }
	
	        if (this.printing) {
	          // If printing is currently ongoing do not reschedule cleanup.
	          return;
	        }
	
	        if (this.onIdle) {
	          this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
	        }
	      },
	
	      getHighestPriority: function PDFRenderingQueue_getHighestPriority(visible, views, scrolledDown) {
	        // The state has changed figure out which page has the highest priority to
	        // render next (if any).
	        // Priority:
	        // 1 visible pages
	        // 2 if last scrolled down page after the visible pages
	        // 2 if last scrolled up page before the visible pages
	        var visibleViews = visible.views;
	
	        var numVisible = visibleViews.length;
	        if (numVisible === 0) {
	          return false;
	        }
	        for (var i = 0; i < numVisible; ++i) {
	          var view = visibleViews[i].view;
	          if (!this.isViewFinished(view)) {
	            return view;
	          }
	        }
	
	        // All the visible views have rendered, try to render next/previous pages.
	        if (scrolledDown) {
	          var nextPageIndex = visible.last.id;
	          // ID's start at 1 so no need to add 1.
	          if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
	            return views[nextPageIndex];
	          }
	        } else {
	          var previousPageIndex = visible.first.id - 2;
	          if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
	            return views[previousPageIndex];
	          }
	        }
	        // Everything that needs to be rendered has been.
	        return null;
	      },
	
	      /**
	       * @param {IRenderableView} view
	       * @returns {boolean}
	       */
	      isViewFinished: function PDFRenderingQueue_isViewFinished(view) {
	        return view.renderingState === RenderingStates.FINISHED;
	      },
	
	      /**
	       * Render a page or thumbnail view. This calls the appropriate function
	       * based on the views state. If the view is already rendered it will return
	       * false.
	       * @param {IRenderableView} view
	       */
	      renderView: function PDFRenderingQueue_renderView(view) {
	        var state = view.renderingState;
	        switch (state) {
	          case RenderingStates.FINISHED:
	            return false;
	          case RenderingStates.PAUSED:
	            this.highestPriorityPage = view.renderingId;
	            view.resume();
	            break;
	          case RenderingStates.RUNNING:
	            this.highestPriorityPage = view.renderingId;
	            break;
	          case RenderingStates.INITIAL:
	            this.highestPriorityPage = view.renderingId;
	            var continueRendering = function () {
	              this.renderHighestPriority();
	            }.bind(this);
	            view.draw().then(continueRendering, continueRendering);
	            break;
	        }
	        return true;
	      }
	    };
	
	    return PDFRenderingQueue;
	  }();
	
	  var TEXT_LAYER_RENDER_DELAY = 200; // ms
	
	  /**
	   * @typedef {Object} PDFPageViewOptions
	   * @property {HTMLDivElement} container - The viewer element.
	   * @property {number} id - The page unique ID (normally its number).
	   * @property {number} scale - The page scale display.
	   * @property {PageViewport} defaultViewport - The page viewport.
	   * @property {PDFRenderingQueue} renderingQueue - The rendering queue object.
	   * @property {IPDFTextLayerFactory} textLayerFactory
	   * @property {IPDFAnnotationLayerFactory} annotationLayerFactory
	   */
	
	  /**
	   * @class
	   * @implements {IRenderableView}
	   */
	  var PDFPageView = function PDFPageViewClosure() {
	    /**
	     * @constructs PDFPageView
	     * @param {PDFPageViewOptions} options
	     */
	    function PDFPageView(options) {
	      var container = options.container;
	      var id = options.id;
	      var scale = options.scale;
	      var defaultViewport = options.defaultViewport;
	      var renderingQueue = options.renderingQueue;
	      var textLayerFactory = options.textLayerFactory;
	      var annotationLayerFactory = options.annotationLayerFactory;
	
	      this.id = id;
	      this.renderingId = 'page' + id;
	
	      this.rotation = 0;
	      this.scale = scale || DEFAULT_SCALE;
	      this.viewport = defaultViewport;
	      this.pdfPageRotate = defaultViewport.rotation;
	      this.hasRestrictedScaling = false;
	
	      this.renderingQueue = renderingQueue;
	      this.textLayerFactory = textLayerFactory;
	      this.annotationLayerFactory = annotationLayerFactory;
	
	      this.renderingState = RenderingStates.INITIAL;
	      this.resume = null;
	
	      this.onBeforeDraw = null;
	      this.onAfterDraw = null;
	
	      this.textLayer = null;
	
	      this.zoomLayer = null;
	
	      this.annotationLayer = null;
	
	      var div = document.createElement('div');
	      div.id = 'pageContainer' + this.id;
	      div.className = 'page';
	      div.style.width = Math.floor(this.viewport.width) + 'px';
	      div.style.height = Math.floor(this.viewport.height) + 'px';
	      div.setAttribute('data-page-number', this.id);
	      this.div = div;
	
	      container.appendChild(div);
	    }
	
	    PDFPageView.prototype = {
	      setPdfPage: function PDFPageView_setPdfPage(pdfPage) {
	        this.pdfPage = pdfPage;
	        this.pdfPageRotate = pdfPage.rotate;
	        var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
	        this.viewport = pdfPage.getViewport(this.scale * CSS_UNITS, totalRotation);
	        this.stats = pdfPage.stats;
	        this.reset();
	      },
	
	      destroy: function PDFPageView_destroy() {
	        this.zoomLayer = null;
	        this.reset();
	        if (this.pdfPage) {
	          this.pdfPage.cleanup();
	        }
	      },
	
	      reset: function PDFPageView_reset(keepZoomLayer, keepAnnotations) {
	        if (this.renderTask) {
	          this.renderTask.cancel();
	        }
	        this.resume = null;
	        this.renderingState = RenderingStates.INITIAL;
	
	        var div = this.div;
	        div.style.width = Math.floor(this.viewport.width) + 'px';
	        div.style.height = Math.floor(this.viewport.height) + 'px';
	
	        var childNodes = div.childNodes;
	        var currentZoomLayerNode = keepZoomLayer && this.zoomLayer || null;
	        var currentAnnotationNode = keepAnnotations && this.annotationLayer && this.annotationLayer.div || null;
	        for (var i = childNodes.length - 1; i >= 0; i--) {
	          var node = childNodes[i];
	          if (currentZoomLayerNode === node || currentAnnotationNode === node) {
	            continue;
	          }
	          div.removeChild(node);
	        }
	        div.removeAttribute('data-loaded');
	
	        if (currentAnnotationNode) {
	          // Hide annotationLayer until all elements are resized
	          // so they are not displayed on the already-resized page
	          this.annotationLayer.hide();
	        } else {
	          this.annotationLayer = null;
	        }
	
	        if (this.canvas && !currentZoomLayerNode) {
	          // Zeroing the width and height causes Firefox to release graphics
	          // resources immediately, which can greatly reduce memory consumption.
	          this.canvas.width = 0;
	          this.canvas.height = 0;
	          delete this.canvas;
	        }
	
	        this.loadingIconDiv = document.createElement('div');
	        this.loadingIconDiv.className = 'loadingIcon';
	        div.appendChild(this.loadingIconDiv);
	      },
	
	      update: function PDFPageView_update(scale, rotation) {
	        this.scale = scale || this.scale;
	
	        if (typeof rotation !== 'undefined') {
	          this.rotation = rotation;
	        }
	
	        var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
	        this.viewport = this.viewport.clone({
	          scale: this.scale * CSS_UNITS,
	          rotation: totalRotation
	        });
	
	        var isScalingRestricted = false;
	        if (this.canvas && PDFJS.maxCanvasPixels > 0) {
	          var outputScale = this.outputScale;
	          var pixelsInViewport = this.viewport.width * this.viewport.height;
	          var maxScale = Math.sqrt(PDFJS.maxCanvasPixels / pixelsInViewport);
	          if ((Math.floor(this.viewport.width) * outputScale.sx | 0) * (Math.floor(this.viewport.height) * outputScale.sy | 0) > PDFJS.maxCanvasPixels) {
	            isScalingRestricted = true;
	          }
	        }
	
	        if (this.canvas) {
	          if (PDFJS.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted) {
	            this.cssTransform(this.canvas, true);
	
	            var event = document.createEvent('CustomEvent');
	            event.initCustomEvent('pagerendered', true, true, {
	              pageNumber: this.id,
	              cssTransform: true
	            });
	            this.div.dispatchEvent(event);
	
	            return;
	          }
	          if (!this.zoomLayer) {
	            this.zoomLayer = this.canvas.parentNode;
	            this.zoomLayer.style.position = 'absolute';
	          }
	        }
	        if (this.zoomLayer) {
	          this.cssTransform(this.zoomLayer.firstChild);
	        }
	        this.reset( /* keepZoomLayer = */true, /* keepAnnotations = */true);
	      },
	
	      /**
	       * Called when moved in the parent's container.
	       */
	      updatePosition: function PDFPageView_updatePosition() {
	        if (this.textLayer) {
	          this.textLayer.render(TEXT_LAYER_RENDER_DELAY);
	        }
	      },
	
	      cssTransform: function PDFPageView_transform(canvas, redrawAnnotations) {
	        var CustomStyle = PDFJS.CustomStyle;
	
	        // Scale canvas, canvas wrapper, and page container.
	        var width = this.viewport.width;
	        var height = this.viewport.height;
	        var div = this.div;
	        canvas.style.width = canvas.parentNode.style.width = div.style.width = Math.floor(width) + 'px';
	        canvas.style.height = canvas.parentNode.style.height = div.style.height = Math.floor(height) + 'px';
	        // The canvas may have been originally rotated, rotate relative to that.
	        var relativeRotation = this.viewport.rotation - canvas._viewport.rotation;
	        var absRotation = Math.abs(relativeRotation);
	        var scaleX = 1,
	            scaleY = 1;
	        if (absRotation === 90 || absRotation === 270) {
	          // Scale x and y because of the rotation.
	          scaleX = height / width;
	          scaleY = width / height;
	        }
	        var cssTransform = 'rotate(' + relativeRotation + 'deg) ' + 'scale(' + scaleX + ',' + scaleY + ')';
	        CustomStyle.setProp('transform', canvas, cssTransform);
	
	        if (this.textLayer) {
	          // Rotating the text layer is more complicated since the divs inside the
	          // the text layer are rotated.
	          // TODO: This could probably be simplified by drawing the text layer in
	          // one orientation then rotating overall.
	          var textLayerViewport = this.textLayer.viewport;
	          var textRelativeRotation = this.viewport.rotation - textLayerViewport.rotation;
	          var textAbsRotation = Math.abs(textRelativeRotation);
	          var scale = width / textLayerViewport.width;
	          if (textAbsRotation === 90 || textAbsRotation === 270) {
	            scale = width / textLayerViewport.height;
	          }
	          var textLayerDiv = this.textLayer.textLayerDiv;
	          var transX, transY;
	          switch (textAbsRotation) {
	            case 0:
	              transX = transY = 0;
	              break;
	            case 90:
	              transX = 0;
	              transY = '-' + textLayerDiv.style.height;
	              break;
	            case 180:
	              transX = '-' + textLayerDiv.style.width;
	              transY = '-' + textLayerDiv.style.height;
	              break;
	            case 270:
	              transX = '-' + textLayerDiv.style.width;
	              transY = 0;
	              break;
	            default:
	              console.error('Bad rotation value.');
	              break;
	          }
	          CustomStyle.setProp('transform', textLayerDiv, 'rotate(' + textAbsRotation + 'deg) ' + 'scale(' + scale + ', ' + scale + ') ' + 'translate(' + transX + ', ' + transY + ')');
	          CustomStyle.setProp('transformOrigin', textLayerDiv, '0% 0%');
	        }
	
	        if (redrawAnnotations && this.annotationLayer) {
	          this.annotationLayer.render(this.viewport, 'display');
	        }
	      },
	
	      get width() {
	        return this.viewport.width;
	      },
	
	      get height() {
	        return this.viewport.height;
	      },
	
	      getPagePoint: function PDFPageView_getPagePoint(x, y) {
	        return this.viewport.convertToPdfPoint(x, y);
	      },
	
	      draw: function PDFPageView_draw() {
	        if (this.renderingState !== RenderingStates.INITIAL) {
	          console.error('Must be in new state before drawing');
	        }
	
	        this.renderingState = RenderingStates.RUNNING;
	
	        var pdfPage = this.pdfPage;
	        var viewport = this.viewport;
	        var div = this.div;
	        // Wrap the canvas so if it has a css transform for highdpi the overflow
	        // will be hidden in FF.
	        var canvasWrapper = document.createElement('div');
	        canvasWrapper.style.width = div.style.width;
	        canvasWrapper.style.height = div.style.height;
	        canvasWrapper.classList.add('canvasWrapper');
	
	        var canvas = document.createElement('canvas');
	        canvas.id = 'page' + this.id;
	        // Keep the canvas hidden until the first draw callback, or until drawing
	        // is complete when `!this.renderingQueue`, to prevent black flickering.
	        canvas.setAttribute('hidden', 'hidden');
	        var isCanvasHidden = true;
	
	        canvasWrapper.appendChild(canvas);
	        if (this.annotationLayer && this.annotationLayer.div) {
	          // annotationLayer needs to stay on top
	          div.insertBefore(canvasWrapper, this.annotationLayer.div);
	        } else {
	          div.appendChild(canvasWrapper);
	        }
	        this.canvas = canvas;
	
	        var ctx = canvas.getContext('2d', { alpha: false });
	        var outputScale = getOutputScale(ctx);
	        this.outputScale = outputScale;
	
	        if (PDFJS.useOnlyCssZoom) {
	          var actualSizeViewport = viewport.clone({ scale: CSS_UNITS });
	          // Use a scale that will make the canvas be the original intended size
	          // of the page.
	          outputScale.sx *= actualSizeViewport.width / viewport.width;
	          outputScale.sy *= actualSizeViewport.height / viewport.height;
	          outputScale.scaled = true;
	        }
	
	        if (PDFJS.maxCanvasPixels > 0) {
	          var pixelsInViewport = viewport.width * viewport.height;
	          var maxScale = Math.sqrt(PDFJS.maxCanvasPixels / pixelsInViewport);
	          if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
	            outputScale.sx = maxScale;
	            outputScale.sy = maxScale;
	            outputScale.scaled = true;
	            this.hasRestrictedScaling = true;
	          } else {
	            this.hasRestrictedScaling = false;
	          }
	        }
	
	        var sfx = approximateFraction(outputScale.sx);
	        var sfy = approximateFraction(outputScale.sy);
	        canvas.width = roundToDivide(viewport.width * outputScale.sx, sfx[0]);
	        canvas.height = roundToDivide(viewport.height * outputScale.sy, sfy[0]);
	        canvas.style.width = roundToDivide(viewport.width, sfx[1]) + 'px';
	        canvas.style.height = roundToDivide(viewport.height, sfy[1]) + 'px';
	        // Add the viewport so it's known what it was originally drawn with.
	        canvas._viewport = viewport;
	
	        var textLayerDiv = null;
	        var textLayer = null;
	        if (this.textLayerFactory) {
	          textLayerDiv = document.createElement('div');
	          textLayerDiv.className = 'textLayer';
	          textLayerDiv.style.width = canvasWrapper.style.width;
	          textLayerDiv.style.height = canvasWrapper.style.height;
	          if (this.annotationLayer && this.annotationLayer.div) {
	            // annotationLayer needs to stay on top
	            div.insertBefore(textLayerDiv, this.annotationLayer.div);
	          } else {
	            div.appendChild(textLayerDiv);
	          }
	
	          textLayer = this.textLayerFactory.createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport);
	        }
	        this.textLayer = textLayer;
	
	        var resolveRenderPromise, rejectRenderPromise;
	        var promise = new Promise(function (resolve, reject) {
	          resolveRenderPromise = resolve;
	          rejectRenderPromise = reject;
	        });
	
	        // Rendering area
	
	        var self = this;
	        function pageViewDrawCallback(error) {
	          // The renderTask may have been replaced by a new one, so only remove
	          // the reference to the renderTask if it matches the one that is
	          // triggering this callback.
	          if (renderTask === self.renderTask) {
	            self.renderTask = null;
	          }
	
	          if (error === 'cancelled') {
	            rejectRenderPromise(error);
	            return;
	          }
	
	          self.renderingState = RenderingStates.FINISHED;
	
	          if (isCanvasHidden) {
	            self.canvas.removeAttribute('hidden');
	            isCanvasHidden = false;
	          }
	
	          if (self.loadingIconDiv) {
	            div.removeChild(self.loadingIconDiv);
	            delete self.loadingIconDiv;
	          }
	
	          if (self.zoomLayer) {
	            // Zeroing the width and height causes Firefox to release graphics
	            // resources immediately, which can greatly reduce memory consumption.
	            var zoomLayerCanvas = self.zoomLayer.firstChild;
	            zoomLayerCanvas.width = 0;
	            zoomLayerCanvas.height = 0;
	
	            div.removeChild(self.zoomLayer);
	            self.zoomLayer = null;
	          }
	
	          self.error = error;
	          self.stats = pdfPage.stats;
	          if (self.onAfterDraw) {
	            self.onAfterDraw();
	          }
	          var event = document.createEvent('CustomEvent');
	          event.initCustomEvent('pagerendered', true, true, {
	            pageNumber: self.id,
	            cssTransform: false
	          });
	          div.dispatchEvent(event);
	
	          if (!error) {
	            resolveRenderPromise(undefined);
	          } else {
	            rejectRenderPromise(error);
	          }
	        }
	
	        var renderContinueCallback = null;
	        if (this.renderingQueue) {
	          renderContinueCallback = function renderContinueCallback(cont) {
	            if (!self.renderingQueue.isHighestPriority(self)) {
	              self.renderingState = RenderingStates.PAUSED;
	              self.resume = function resumeCallback() {
	                self.renderingState = RenderingStates.RUNNING;
	                cont();
	              };
	              return;
	            }
	            if (isCanvasHidden) {
	              self.canvas.removeAttribute('hidden');
	              isCanvasHidden = false;
	            }
	            cont();
	          };
	        }
	
	        var transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
	        var renderContext = {
	          canvasContext: ctx,
	          transform: transform,
	          viewport: this.viewport
	        };
	        var renderTask = this.renderTask = this.pdfPage.render(renderContext);
	        renderTask.onContinue = renderContinueCallback;
	
	        this.renderTask.promise.then(function pdfPageRenderCallback() {
	          pageViewDrawCallback(null);
	          if (textLayer) {
	            self.pdfPage.getTextContent({ normalizeWhitespace: true }).then(function textContentResolved(textContent) {
	              textLayer.setTextContent(textContent);
	              textLayer.render(TEXT_LAYER_RENDER_DELAY);
	            });
	          }
	        }, function pdfPageRenderError(error) {
	          pageViewDrawCallback(error);
	        });
	
	        if (this.annotationLayerFactory) {
	          if (!this.annotationLayer) {
	            this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(div, this.pdfPage);
	          }
	          this.annotationLayer.render(this.viewport, 'display');
	        }
	        div.setAttribute('data-loaded', true);
	
	        if (self.onBeforeDraw) {
	          self.onBeforeDraw();
	        }
	        return promise;
	      },
	
	      beforePrint: function PDFPageView_beforePrint() {
	        var CustomStyle = PDFJS.CustomStyle;
	        var pdfPage = this.pdfPage;
	
	        var viewport = pdfPage.getViewport(1);
	        // Use the same hack we use for high dpi displays for printing to get
	        // better output until bug 811002 is fixed in FF.
	        var PRINT_OUTPUT_SCALE = 2;
	        var canvas = document.createElement('canvas');
	
	        // The logical size of the canvas.
	        canvas.width = Math.floor(viewport.width) * PRINT_OUTPUT_SCALE;
	        canvas.height = Math.floor(viewport.height) * PRINT_OUTPUT_SCALE;
	
	        // The rendered size of the canvas, relative to the size of canvasWrapper.
	        canvas.style.width = PRINT_OUTPUT_SCALE * 100 + '%';
	        canvas.style.height = PRINT_OUTPUT_SCALE * 100 + '%';
	
	        var cssScale = 'scale(' + 1 / PRINT_OUTPUT_SCALE + ', ' + 1 / PRINT_OUTPUT_SCALE + ')';
	        CustomStyle.setProp('transform', canvas, cssScale);
	        CustomStyle.setProp('transformOrigin', canvas, '0% 0%');
	
	        var printContainer = document.getElementById('printContainer');
	        var canvasWrapper = document.createElement('div');
	        canvasWrapper.style.width = viewport.width + 'pt';
	        canvasWrapper.style.height = viewport.height + 'pt';
	        canvasWrapper.appendChild(canvas);
	        printContainer.appendChild(canvasWrapper);
	
	        canvas.mozPrintCallback = function (obj) {
	          var ctx = obj.context;
	
	          ctx.save();
	          ctx.fillStyle = 'rgb(255, 255, 255)';
	          ctx.fillRect(0, 0, canvas.width, canvas.height);
	          ctx.restore();
	          // Used by the mozCurrentTransform polyfill in src/display/canvas.js.
	          ctx._transformMatrix = [PRINT_OUTPUT_SCALE, 0, 0, PRINT_OUTPUT_SCALE, 0, 0];
	          ctx.scale(PRINT_OUTPUT_SCALE, PRINT_OUTPUT_SCALE);
	
	          var renderContext = {
	            canvasContext: ctx,
	            viewport: viewport,
	            intent: 'print'
	          };
	
	          pdfPage.render(renderContext).promise.then(function () {
	            // Tell the printEngine that rendering this canvas/page has finished.
	            obj.done();
	          }, function (error) {
	            console.error(error);
	            // Tell the printEngine that rendering this canvas/page has failed.
	            // This will make the print proces stop.
	            if ('abort' in obj) {
	              obj.abort();
	            } else {
	              obj.done();
	            }
	          });
	        };
	      }
	    };
	
	    return PDFPageView;
	  }();
	
	  /**
	   * @typedef {Object} TextLayerBuilderOptions
	   * @property {HTMLDivElement} textLayerDiv - The text layer container.
	   * @property {number} pageIndex - The page index.
	   * @property {PageViewport} viewport - The viewport of the text layer.
	   * @property {PDFFindController} findController
	   */
	
	  /**
	   * TextLayerBuilder provides text-selection functionality for the PDF.
	   * It does this by creating overlay divs over the PDF text. These divs
	   * contain text that matches the PDF text they are overlaying. This object
	   * also provides a way to highlight text that is being searched for.
	   * @class
	   */
	  var TextLayerBuilder = function TextLayerBuilderClosure() {
	    function TextLayerBuilder(options) {
	      this.textLayerDiv = options.textLayerDiv;
	      this.renderingDone = false;
	      this.divContentDone = false;
	      this.pageIdx = options.pageIndex;
	      this.pageNumber = this.pageIdx + 1;
	      this.matches = [];
	      this.viewport = options.viewport;
	      this.textDivs = [];
	      this.findController = options.findController || null;
	      this.textLayerRenderTask = null;
	      this._bindMouse();
	    }
	
	    TextLayerBuilder.prototype = {
	      _finishRendering: function TextLayerBuilder_finishRendering() {
	        this.renderingDone = true;
	
	        var endOfContent = document.createElement('div');
	        endOfContent.className = 'endOfContent';
	        this.textLayerDiv.appendChild(endOfContent);
	
	        var event = document.createEvent('CustomEvent');
	        event.initCustomEvent('textlayerrendered', true, true, {
	          pageNumber: this.pageNumber
	        });
	        this.textLayerDiv.dispatchEvent(event);
	      },
	
	      /**
	       * Renders the text layer.
	       * @param {number} timeout (optional) if specified, the rendering waits
	       *   for specified amount of ms.
	       */
	      render: function TextLayerBuilder_render(timeout) {
	        if (!this.divContentDone || this.renderingDone) {
	          return;
	        }
	
	        if (this.textLayerRenderTask) {
	          this.textLayerRenderTask.cancel();
	          this.textLayerRenderTask = null;
	        }
	
	        this.textDivs = [];
	        var textLayerFrag = document.createDocumentFragment();
	        this.textLayerRenderTask = PDFJS.renderTextLayer({
	          textContent: this.textContent,
	          container: textLayerFrag,
	          viewport: this.viewport,
	          textDivs: this.textDivs,
	          timeout: timeout
	        });
	        this.textLayerRenderTask.promise.then(function () {
	          this.textLayerDiv.appendChild(textLayerFrag);
	          this._finishRendering();
	          this.updateMatches();
	        }.bind(this), function (reason) {
	          // canceled or failed to render text layer -- skipping errors
	        });
	      },
	
	      setTextContent: function TextLayerBuilder_setTextContent(textContent) {
	        if (this.textLayerRenderTask) {
	          this.textLayerRenderTask.cancel();
	          this.textLayerRenderTask = null;
	        }
	        this.textContent = textContent;
	        this.divContentDone = true;
	      },
	
	      convertMatches: function TextLayerBuilder_convertMatches(matches) {
	        var i = 0;
	        var iIndex = 0;
	        var bidiTexts = this.textContent.items;
	        var end = bidiTexts.length - 1;
	        var queryLen = this.findController === null ? 0 : this.findController.state.query.length;
	        var ret = [];
	
	        for (var m = 0, len = matches.length; m < len; m++) {
	          // Calculate the start position.
	          var matchIdx = matches[m];
	
	          // Loop over the divIdxs.
	          while (i !== end && matchIdx >= iIndex + bidiTexts[i].str.length) {
	            iIndex += bidiTexts[i].str.length;
	            i++;
	          }
	
	          if (i === bidiTexts.length) {
	            console.error('Could not find a matching mapping');
	          }
	
	          var match = {
	            begin: {
	              divIdx: i,
	              offset: matchIdx - iIndex
	            }
	          };
	
	          // Calculate the end position.
	          matchIdx += queryLen;
	
	          // Somewhat the same array as above, but use > instead of >= to get
	          // the end position right.
	          while (i !== end && matchIdx > iIndex + bidiTexts[i].str.length) {
	            iIndex += bidiTexts[i].str.length;
	            i++;
	          }
	
	          match.end = {
	            divIdx: i,
	            offset: matchIdx - iIndex
	          };
	          ret.push(match);
	        }
	
	        return ret;
	      },
	
	      renderMatches: function TextLayerBuilder_renderMatches(matches) {
	        // Early exit if there is nothing to render.
	        if (matches.length === 0) {
	          return;
	        }
	
	        var bidiTexts = this.textContent.items;
	        var textDivs = this.textDivs;
	        var prevEnd = null;
	        var pageIdx = this.pageIdx;
	        var isSelectedPage = this.findController === null ? false : pageIdx === this.findController.selected.pageIdx;
	        var selectedMatchIdx = this.findController === null ? -1 : this.findController.selected.matchIdx;
	        var highlightAll = this.findController === null ? false : this.findController.state.highlightAll;
	        var infinity = {
	          divIdx: -1,
	          offset: undefined
	        };
	
	        function beginText(begin, className) {
	          var divIdx = begin.divIdx;
	          textDivs[divIdx].textContent = '';
	          appendTextToDiv(divIdx, 0, begin.offset, className);
	        }
	
	        function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
	          var div = textDivs[divIdx];
	          var content = bidiTexts[divIdx].str.substring(fromOffset, toOffset);
	          var node = document.createTextNode(content);
	          if (className) {
	            var span = document.createElement('span');
	            span.className = className;
	            span.appendChild(node);
	            div.appendChild(span);
	            return;
	          }
	          div.appendChild(node);
	        }
	
	        var i0 = selectedMatchIdx,
	            i1 = i0 + 1;
	        if (highlightAll) {
	          i0 = 0;
	          i1 = matches.length;
	        } else if (!isSelectedPage) {
	          // Not highlighting all and this isn't the selected page, so do nothing.
	          return;
	        }
	
	        for (var i = i0; i < i1; i++) {
	          var match = matches[i];
	          var begin = match.begin;
	          var end = match.end;
	          var isSelected = isSelectedPage && i === selectedMatchIdx;
	          var highlightSuffix = isSelected ? ' selected' : '';
	
	          if (this.findController) {
	            this.findController.updateMatchPosition(pageIdx, i, textDivs, begin.divIdx, end.divIdx);
	          }
	
	          // Match inside new div.
	          if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
	            // If there was a previous div, then add the text at the end.
	            if (prevEnd !== null) {
	              appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
	            }
	            // Clear the divs and set the content until the starting point.
	            beginText(begin);
	          } else {
	            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
	          }
	
	          if (begin.divIdx === end.divIdx) {
	            appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix);
	          } else {
	            appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix);
	            for (var n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
	              textDivs[n0].className = 'highlight middle' + highlightSuffix;
	            }
	            beginText(end, 'highlight end' + highlightSuffix);
	          }
	          prevEnd = end;
	        }
	
	        if (prevEnd) {
	          appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
	        }
	      },
	
	      updateMatches: function TextLayerBuilder_updateMatches() {
	        // Only show matches when all rendering is done.
	        if (!this.renderingDone) {
	          return;
	        }
	
	        // Clear all matches.
	        var matches = this.matches;
	        var textDivs = this.textDivs;
	        var bidiTexts = this.textContent.items;
	        var clearedUntilDivIdx = -1;
	
	        // Clear all current matches.
	        for (var i = 0, len = matches.length; i < len; i++) {
	          var match = matches[i];
	          var begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
	          for (var n = begin, end = match.end.divIdx; n <= end; n++) {
	            var div = textDivs[n];
	            div.textContent = bidiTexts[n].str;
	            div.className = '';
	          }
	          clearedUntilDivIdx = match.end.divIdx + 1;
	        }
	
	        if (this.findController === null || !this.findController.active) {
	          return;
	        }
	
	        // Convert the matches on the page controller into the match format
	        // used for the textLayer.
	        this.matches = this.convertMatches(this.findController === null ? [] : this.findController.pageMatches[this.pageIdx] || []);
	        this.renderMatches(this.matches);
	      },
	
	      /**
	       * Fixes text selection: adds additional div where mouse was clicked.
	       * This reduces flickering of the content if mouse slowly dragged down/up.
	       * @private
	       */
	      _bindMouse: function TextLayerBuilder_bindMouse() {
	        var div = this.textLayerDiv;
	        div.addEventListener('mousedown', function (e) {
	          var end = div.querySelector('.endOfContent');
	          if (!end) {
	            return;
	          }
	          // On non-Firefox browsers, the selection will feel better if the height
	          // of the endOfContent div will be adjusted to start at mouse click
	          // location -- this will avoid flickering when selections moves up.
	          // However it does not work when selection started on empty space.
	          var adjustTop = e.target !== div;
	          if (adjustTop) {
	            var divBounds = div.getBoundingClientRect();
	            var r = Math.max(0, (e.pageY - divBounds.top) / divBounds.height);
	            end.style.top = (r * 100).toFixed(2) + '%';
	          }
	          end.classList.add('active');
	        });
	        div.addEventListener('mouseup', function (e) {
	          var end = div.querySelector('.endOfContent');
	          if (!end) {
	            return;
	          }
	          end.style.top = '';
	          end.classList.remove('active');
	        });
	      }
	    };
	    return TextLayerBuilder;
	  }();
	
	  /**
	   * @constructor
	   * @implements IPDFTextLayerFactory
	   */
	  function DefaultTextLayerFactory() {}
	  DefaultTextLayerFactory.prototype = {
	    /**
	     * @param {HTMLDivElement} textLayerDiv
	     * @param {number} pageIndex
	     * @param {PageViewport} viewport
	     * @returns {TextLayerBuilder}
	     */
	    createTextLayerBuilder: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
	      return new TextLayerBuilder({
	        textLayerDiv: textLayerDiv,
	        pageIndex: pageIndex,
	        viewport: viewport
	      });
	    }
	  };
	
	  /**
	   * @typedef {Object} AnnotationLayerBuilderOptions
	   * @property {HTMLDivElement} pageDiv
	   * @property {PDFPage} pdfPage
	   * @property {IPDFLinkService} linkService
	   */
	
	  /**
	   * @class
	   */
	  var AnnotationLayerBuilder = function AnnotationLayerBuilderClosure() {
	    /**
	     * @param {AnnotationLayerBuilderOptions} options
	     * @constructs AnnotationLayerBuilder
	     */
	    function AnnotationLayerBuilder(options) {
	      this.pageDiv = options.pageDiv;
	      this.pdfPage = options.pdfPage;
	      this.linkService = options.linkService;
	
	      this.div = null;
	    }
	
	    AnnotationLayerBuilder.prototype =
	    /** @lends AnnotationLayerBuilder.prototype */{
	
	      /**
	       * @param {PageViewport} viewport
	       * @param {string} intent (default value is 'display')
	       */
	      render: function AnnotationLayerBuilder_render(viewport, intent) {
	        var self = this;
	        var parameters = {
	          intent: intent === undefined ? 'display' : intent
	        };
	
	        this.pdfPage.getAnnotations(parameters).then(function (annotations) {
	          viewport = viewport.clone({ dontFlip: true });
	          parameters = {
	            viewport: viewport,
	            div: self.div,
	            annotations: annotations,
	            page: self.pdfPage,
	            linkService: self.linkService
	          };
	
	          if (self.div) {
	            // If an annotationLayer already exists, refresh its children's
	            // transformation matrices.
	            PDFJS.AnnotationLayer.update(parameters);
	          } else {
	            // Create an annotation layer div and render the annotations
	            // if there is at least one annotation.
	            if (annotations.length === 0) {
	              return;
	            }
	
	            self.div = document.createElement('div');
	            self.div.className = 'annotationLayer';
	            self.pageDiv.appendChild(self.div);
	            parameters.div = self.div;
	
	            PDFJS.AnnotationLayer.render(parameters);
	            if (typeof mozL10n !== 'undefined') {
	              mozL10n.translate(self.div);
	            }
	          }
	        });
	      },
	
	      hide: function AnnotationLayerBuilder_hide() {
	        if (!this.div) {
	          return;
	        }
	        this.div.setAttribute('hidden', 'true');
	      }
	    };
	
	    return AnnotationLayerBuilder;
	  }();
	
	  /**
	   * @constructor
	   * @implements IPDFAnnotationLayerFactory
	   */
	  function DefaultAnnotationLayerFactory() {}
	  DefaultAnnotationLayerFactory.prototype = {
	    /**
	     * @param {HTMLDivElement} pageDiv
	     * @param {PDFPage} pdfPage
	     * @returns {AnnotationLayerBuilder}
	     */
	    createAnnotationLayerBuilder: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
	      return new AnnotationLayerBuilder({
	        pageDiv: pageDiv,
	        pdfPage: pdfPage,
	        linkService: new SimpleLinkService()
	      });
	    }
	  };
	
	  /**
	   * @typedef {Object} PDFViewerOptions
	   * @property {HTMLDivElement} container - The container for the viewer element.
	   * @property {HTMLDivElement} viewer - (optional) The viewer element.
	   * @property {IPDFLinkService} linkService - The navigation/linking service.
	   * @property {PDFRenderingQueue} renderingQueue - (optional) The rendering
	   *   queue object.
	   * @property {boolean} removePageBorders - (optional) Removes the border shadow
	   *   around the pages. The default is false.
	   */
	
	  /**
	   * Simple viewer control to display PDF content/pages.
	   * @class
	   * @implements {IRenderableView}
	   */
	  var PDFViewer = function pdfViewer() {
	    function PDFPageViewBuffer(size) {
	      var data = [];
	      this.push = function cachePush(view) {
	        var i = data.indexOf(view);
	        if (i >= 0) {
	          data.splice(i, 1);
	        }
	        data.push(view);
	        if (data.length > size) {
	          data.shift().destroy();
	        }
	      };
	      this.resize = function (newSize) {
	        size = newSize;
	        while (data.length > size) {
	          data.shift().destroy();
	        }
	      };
	    }
	
	    function isSameScale(oldScale, newScale) {
	      if (newScale === oldScale) {
	        return true;
	      }
	      if (Math.abs(newScale - oldScale) < 1e-15) {
	        // Prevent unnecessary re-rendering of all pages when the scale
	        // changes only because of limited numerical precision.
	        return true;
	      }
	      return false;
	    }
	
	    /**
	     * @constructs PDFViewer
	     * @param {PDFViewerOptions} options
	     */
	    function PDFViewer(options) {
	      this.container = options.container;
	      this.viewer = options.viewer || options.container.firstElementChild;
	      this.linkService = options.linkService || new SimpleLinkService();
	      this.removePageBorders = options.removePageBorders || false;
	
	      this.defaultRenderingQueue = !options.renderingQueue;
	      if (this.defaultRenderingQueue) {
	        // Custom rendering queue is not specified, using default one
	        this.renderingQueue = new PDFRenderingQueue();
	        this.renderingQueue.setViewer(this);
	      } else {
	        this.renderingQueue = options.renderingQueue;
	      }
	
	      this.scroll = watchScroll(this.container, this._scrollUpdate.bind(this));
	      this.updateInProgress = false;
	      this.presentationModeState = PresentationModeState.UNKNOWN;
	      this._resetView();
	
	      if (this.removePageBorders) {
	        this.viewer.classList.add('removePageBorders');
	      }
	    }
	
	    PDFViewer.prototype = /** @lends PDFViewer.prototype */{
	      get pagesCount() {
	        return this._pages.length;
	      },
	
	      getPageView: function getPageView(index) {
	        return this._pages[index];
	      },
	
	      get currentPageNumber() {
	        return this._currentPageNumber;
	      },
	
	      set currentPageNumber(val) {
	        if (!this.pdfDocument) {
	          this._currentPageNumber = val;
	          return;
	        }
	
	        var event = document.createEvent('UIEvents');
	        event.initUIEvent('pagechange', true, true, window, 0);
	        event.updateInProgress = this.updateInProgress;
	
	        if (!(0 < val && val <= this.pagesCount)) {
	          event.pageNumber = this._currentPageNumber;
	          event.previousPageNumber = val;
	          this.container.dispatchEvent(event);
	          return;
	        }
	
	        event.previousPageNumber = this._currentPageNumber;
	        this._currentPageNumber = val;
	        event.pageNumber = val;
	        this.container.dispatchEvent(event);
	
	        // Check if the caller is `PDFViewer_update`, to avoid breaking scrolling.
	        if (this.updateInProgress) {
	          return;
	        }
	        this.scrollPageIntoView(val);
	      },
	
	      /**
	       * @returns {number}
	       */
	      get currentScale() {
	        return this._currentScale !== UNKNOWN_SCALE ? this._currentScale : DEFAULT_SCALE;
	      },
	
	      /**
	       * @param {number} val - Scale of the pages in percents.
	       */
	      set currentScale(val) {
	        if (isNaN(val)) {
	          throw new Error('Invalid numeric scale');
	        }
	        if (!this.pdfDocument) {
	          this._currentScale = val;
	          this._currentScaleValue = val !== UNKNOWN_SCALE ? val.toString() : null;
	          return;
	        }
	        this._setScale(val, false);
	      },
	
	      /**
	       * @returns {string}
	       */
	      get currentScaleValue() {
	        return this._currentScaleValue;
	      },
	
	      /**
	       * @param val - The scale of the pages (in percent or predefined value).
	       */
	      set currentScaleValue(val) {
	        if (!this.pdfDocument) {
	          this._currentScale = isNaN(val) ? UNKNOWN_SCALE : val;
	          this._currentScaleValue = val;
	          return;
	        }
	        this._setScale(val, false);
	      },
	
	      /**
	       * @returns {number}
	       */
	      get pagesRotation() {
	        return this._pagesRotation;
	      },
	
	      /**
	       * @param {number} rotation - The rotation of the pages (0, 90, 180, 270).
	       */
	      set pagesRotation(rotation) {
	        this._pagesRotation = rotation;
	
	        for (var i = 0, l = this._pages.length; i < l; i++) {
	          var pageView = this._pages[i];
	          pageView.update(pageView.scale, rotation);
	        }
	
	        this._setScale(this._currentScaleValue, true);
	
	        if (this.defaultRenderingQueue) {
	          this.update();
	        }
	      },
	
	      /**
	       * @param pdfDocument {PDFDocument}
	       */
	      setDocument: function setDocument(pdfDocument) {
	        if (this.pdfDocument) {
	          this._resetView();
	        }
	
	        this.pdfDocument = pdfDocument;
	        if (!pdfDocument) {
	          return;
	        }
	
	        var pagesCount = pdfDocument.numPages;
	        var self = this;
	
	        var resolvePagesPromise;
	        var pagesPromise = new Promise(function (resolve) {
	          resolvePagesPromise = resolve;
	        });
	        this.pagesPromise = pagesPromise;
	        pagesPromise.then(function () {
	          var event = document.createEvent('CustomEvent');
	          event.initCustomEvent('pagesloaded', true, true, {
	            pagesCount: pagesCount
	          });
	          self.container.dispatchEvent(event);
	        });
	
	        var isOnePageRenderedResolved = false;
	        var resolveOnePageRendered = null;
	        var onePageRendered = new Promise(function (resolve) {
	          resolveOnePageRendered = resolve;
	        });
	        this.onePageRendered = onePageRendered;
	
	        var bindOnAfterAndBeforeDraw = function bindOnAfterAndBeforeDraw(pageView) {
	          pageView.onBeforeDraw = function pdfViewLoadOnBeforeDraw() {
	            // Add the page to the buffer at the start of drawing. That way it can
	            // be evicted from the buffer and destroyed even if we pause its
	            // rendering.
	            self._buffer.push(this);
	          };
	          // when page is painted, using the image as thumbnail base
	          pageView.onAfterDraw = function pdfViewLoadOnAfterDraw() {
	            if (!isOnePageRenderedResolved) {
	              isOnePageRenderedResolved = true;
	              resolveOnePageRendered();
	            }
	          };
	        };
	
	        var firstPagePromise = pdfDocument.getPage(1);
	        this.firstPagePromise = firstPagePromise;
	
	        // Fetch a single page so we can get a viewport that will be the default
	        // viewport for all pages
	        return firstPagePromise.then(function (pdfPage) {
	          var scale = this.currentScale;
	          var viewport = pdfPage.getViewport(scale * CSS_UNITS);
	          for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
	            var textLayerFactory = null;
	            if (!PDFJS.disableTextLayer) {
	              textLayerFactory = this;
	            }
	            var pageView = new PDFPageView({
	              container: this.viewer,
	              id: pageNum,
	              scale: scale,
	              defaultViewport: viewport.clone(),
	              renderingQueue: this.renderingQueue,
	              textLayerFactory: textLayerFactory,
	              annotationLayerFactory: this
	            });
	            bindOnAfterAndBeforeDraw(pageView);
	            this._pages.push(pageView);
	          }
	
	          var linkService = this.linkService;
	
	          // Fetch all the pages since the viewport is needed before printing
	          // starts to create the correct size canvas. Wait until one page is
	          // rendered so we don't tie up too many resources early on.
	          onePageRendered.then(function () {
	            if (!PDFJS.disableAutoFetch) {
	              var getPagesLeft = pagesCount;
	              for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
	                pdfDocument.getPage(pageNum).then(function (pageNum, pdfPage) {
	                  var pageView = self._pages[pageNum - 1];
	                  if (!pageView.pdfPage) {
	                    pageView.setPdfPage(pdfPage);
	                  }
	                  linkService.cachePageRef(pageNum, pdfPage.ref);
	                  getPagesLeft--;
	                  if (!getPagesLeft) {
	                    resolvePagesPromise();
	                  }
	                }.bind(null, pageNum));
	              }
	            } else {
	              // XXX: Printing is semi-broken with auto fetch disabled.
	              resolvePagesPromise();
	            }
	          });
	
	          var event = document.createEvent('CustomEvent');
	          event.initCustomEvent('pagesinit', true, true, null);
	          self.container.dispatchEvent(event);
	
	          if (this.defaultRenderingQueue) {
	            this.update();
	          }
	
	          if (this.findController) {
	            this.findController.resolveFirstPage();
	          }
	        }.bind(this));
	      },
	
	      _resetView: function _resetView() {
	        this._pages = [];
	        this._currentPageNumber = 1;
	        this._currentScale = UNKNOWN_SCALE;
	        this._currentScaleValue = null;
	        this._buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
	        this._location = null;
	        this._pagesRotation = 0;
	        this._pagesRequests = [];
	
	        var container = this.viewer;
	        while (container.hasChildNodes()) {
	          container.removeChild(container.lastChild);
	        }
	      },
	
	      _scrollUpdate: function PDFViewer_scrollUpdate() {
	        if (this.pagesCount === 0) {
	          return;
	        }
	        this.update();
	        for (var i = 0, ii = this._pages.length; i < ii; i++) {
	          this._pages[i].updatePosition();
	        }
	      },
	
	      _setScaleDispatchEvent: function pdfViewer_setScaleDispatchEvent(newScale, newValue, preset) {
	        var event = document.createEvent('UIEvents');
	        event.initUIEvent('scalechange', true, true, window, 0);
	        event.scale = newScale;
	        if (preset) {
	          event.presetValue = newValue;
	        }
	        this.container.dispatchEvent(event);
	      },
	
	      _setScaleUpdatePages: function pdfViewer_setScaleUpdatePages(newScale, newValue, noScroll, preset) {
	        this._currentScaleValue = newValue;
	
	        if (isSameScale(this._currentScale, newScale)) {
	          if (preset) {
	            this._setScaleDispatchEvent(newScale, newValue, true);
	          }
	          return;
	        }
	
	        for (var i = 0, ii = this._pages.length; i < ii; i++) {
	          this._pages[i].update(newScale);
	        }
	        this._currentScale = newScale;
	
	        if (!noScroll) {
	          var page = this._currentPageNumber,
	              dest;
	          if (this._location && !IGNORE_CURRENT_POSITION_ON_ZOOM && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
	            page = this._location.pageNumber;
	            dest = [null, { name: 'XYZ' }, this._location.left, this._location.top, null];
	          }
	          this.scrollPageIntoView(page, dest);
	        }
	
	        this._setScaleDispatchEvent(newScale, newValue, preset);
	
	        if (this.defaultRenderingQueue) {
	          this.update();
	        }
	      },
	
	      _setScale: function pdfViewer_setScale(value, noScroll) {
	        var scale = parseFloat(value);
	
	        if (scale > 0) {
	          this._setScaleUpdatePages(scale, value, noScroll, false);
	        } else {
	          var currentPage = this._pages[this._currentPageNumber - 1];
	          if (!currentPage) {
	            return;
	          }
	          var hPadding = this.isInPresentationMode || this.removePageBorders ? 0 : SCROLLBAR_PADDING;
	          var vPadding = this.isInPresentationMode || this.removePageBorders ? 0 : VERTICAL_PADDING;
	          var pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale;
	          var pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;
	          switch (value) {
	            case 'page-actual':
	              scale = 1;
	              break;
	            case 'page-width':
	              scale = pageWidthScale;
	              break;
	            case 'page-height':
	              scale = pageHeightScale;
	              break;
	            case 'page-fit':
	              scale = Math.min(pageWidthScale, pageHeightScale);
	              break;
	            case 'auto':
	              var isLandscape = currentPage.width > currentPage.height;
	              // For pages in landscape mode, fit the page height to the viewer
	              // *unless* the page would thus become too wide to fit horizontally.
	              var horizontalScale = isLandscape ? Math.min(pageHeightScale, pageWidthScale) : pageWidthScale;
	              scale = Math.min(MAX_AUTO_SCALE, horizontalScale);
	              break;
	            default:
	              console.error('pdfViewSetScale: \'' + value + '\' is an unknown zoom value.');
	              return;
	          }
	          this._setScaleUpdatePages(scale, value, noScroll, true);
	        }
	      },
	
	      /**
	       * Scrolls page into view.
	       * @param {number} pageNumber
	       * @param {Array} dest - (optional) original PDF destination array:
	       *   <page-ref> </XYZ|FitXXX> <args..>
	       */
	      scrollPageIntoView: function PDFViewer_scrollPageIntoView(pageNumber, dest) {
	        if (!this.pdfDocument) {
	          return;
	        }
	
	        var pageView = this._pages[pageNumber - 1];
	
	        if (this.isInPresentationMode) {
	          if (this._currentPageNumber !== pageView.id) {
	            // Avoid breaking getVisiblePages in presentation mode.
	            this.currentPageNumber = pageView.id;
	            return;
	          }
	          dest = null;
	          // Fixes the case when PDF has different page sizes.
	          this._setScale(this._currentScaleValue, true);
	        }
	        if (!dest) {
	          scrollIntoView(pageView.div);
	          return;
	        }
	
	        var x = 0,
	            y = 0;
	        var width = 0,
	            height = 0,
	            widthScale,
	            heightScale;
	        var changeOrientation = pageView.rotation % 180 === 0 ? false : true;
	        var pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / CSS_UNITS;
	        var pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / CSS_UNITS;
	        var scale = 0;
	        switch (dest[1].name) {
	          case 'XYZ':
	            x = dest[2];
	            y = dest[3];
	            scale = dest[4];
	            // If x and/or y coordinates are not supplied, default to
	            // _top_ left of the page (not the obvious bottom left,
	            // since aligning the bottom of the intended page with the
	            // top of the window is rarely helpful).
	            x = x !== null ? x : 0;
	            y = y !== null ? y : pageHeight;
	            break;
	          case 'Fit':
	          case 'FitB':
	            scale = 'page-fit';
	            break;
	          case 'FitH':
	          case 'FitBH':
	            y = dest[2];
	            scale = 'page-width';
	            // According to the PDF spec, section 12.3.2.2, a `null` value in the
	            // parameter should maintain the position relative to the new page.
	            if (y === null && this._location) {
	              x = this._location.left;
	              y = this._location.top;
	            }
	            break;
	          case 'FitV':
	          case 'FitBV':
	            x = dest[2];
	            width = pageWidth;
	            height = pageHeight;
	            scale = 'page-height';
	            break;
	          case 'FitR':
	            x = dest[2];
	            y = dest[3];
	            width = dest[4] - x;
	            height = dest[5] - y;
	            var hPadding = this.removePageBorders ? 0 : SCROLLBAR_PADDING;
	            var vPadding = this.removePageBorders ? 0 : VERTICAL_PADDING;
	
	            widthScale = (this.container.clientWidth - hPadding) / width / CSS_UNITS;
	            heightScale = (this.container.clientHeight - vPadding) / height / CSS_UNITS;
	            scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
	            break;
	          default:
	            return;
	        }
	
	        if (scale && scale !== this._currentScale) {
	          this.currentScaleValue = scale;
	        } else if (this._currentScale === UNKNOWN_SCALE) {
	          this.currentScaleValue = DEFAULT_SCALE_VALUE;
	        }
	
	        if (scale === 'page-fit' && !dest[4]) {
	          scrollIntoView(pageView.div);
	          return;
	        }
	
	        var boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
	        var left = Math.min(boundingRect[0][0], boundingRect[1][0]);
	        var top = Math.min(boundingRect[0][1], boundingRect[1][1]);
	
	        scrollIntoView(pageView.div, { left: left, top: top });
	      },
	
	      _updateLocation: function _updateLocation(firstPage) {
	        var currentScale = this._currentScale;
	        var currentScaleValue = this._currentScaleValue;
	        var normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
	
	        var pageNumber = firstPage.id;
	        var pdfOpenParams = '#page=' + pageNumber;
	        pdfOpenParams += '&zoom=' + normalizedScaleValue;
	        var currentPageView = this._pages[pageNumber - 1];
	        var container = this.container;
	        var topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
	        var intLeft = Math.round(topLeft[0]);
	        var intTop = Math.round(topLeft[1]);
	        pdfOpenParams += ',' + intLeft + ',' + intTop;
	
	        this._location = {
	          pageNumber: pageNumber,
	          scale: normalizedScaleValue,
	          top: intTop,
	          left: intLeft,
	          pdfOpenParams: pdfOpenParams
	        };
	      },
	
	      update: function PDFViewer_update() {
	        var visible = this._getVisiblePages();
	        var visiblePages = visible.views;
	        if (visiblePages.length === 0) {
	          return;
	        }
	
	        this.updateInProgress = true;
	
	        var suggestedCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * visiblePages.length + 1);
	        this._buffer.resize(suggestedCacheSize);
	
	        this.renderingQueue.renderHighestPriority(visible);
	
	        var currentId = this._currentPageNumber;
	        var firstPage = visible.first;
	
	        for (var i = 0, ii = visiblePages.length, stillFullyVisible = false; i < ii; ++i) {
	          var page = visiblePages[i];
	
	          if (page.percent < 100) {
	            break;
	          }
	          if (page.id === currentId) {
	            stillFullyVisible = true;
	            break;
	          }
	        }
	
	        if (!stillFullyVisible) {
	          currentId = visiblePages[0].id;
	        }
	
	        if (!this.isInPresentationMode) {
	          this.currentPageNumber = currentId;
	        }
	
	        this._updateLocation(firstPage);
	
	        this.updateInProgress = false;
	
	        var event = document.createEvent('UIEvents');
	        event.initUIEvent('updateviewarea', true, true, window, 0);
	        event.location = this._location;
	        this.container.dispatchEvent(event);
	      },
	
	      containsElement: function containsElement(element) {
	        return this.container.contains(element);
	      },
	
	      focus: function focus() {
	        this.container.focus();
	      },
	
	      get isInPresentationMode() {
	        return this.presentationModeState === PresentationModeState.FULLSCREEN;
	      },
	
	      get isChangingPresentationMode() {
	        return this.presentationModeState === PresentationModeState.CHANGING;
	      },
	
	      get isHorizontalScrollbarEnabled() {
	        return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
	      },
	
	      _getVisiblePages: function _getVisiblePages() {
	        if (!this.isInPresentationMode) {
	          return getVisibleElements(this.container, this._pages, true);
	        } else {
	          // The algorithm in getVisibleElements doesn't work in all browsers and
	          // configurations when presentation mode is active.
	          var visible = [];
	          var currentPage = this._pages[this._currentPageNumber - 1];
	          visible.push({ id: currentPage.id, view: currentPage });
	          return { first: currentPage, last: currentPage, views: visible };
	        }
	      },
	
	      cleanup: function cleanup() {
	        for (var i = 0, ii = this._pages.length; i < ii; i++) {
	          if (this._pages[i] && this._pages[i].renderingState !== RenderingStates.FINISHED) {
	            this._pages[i].reset();
	          }
	        }
	      },
	
	      /**
	       * @param {PDFPageView} pageView
	       * @returns {PDFPage}
	       * @private
	       */
	      _ensurePdfPageLoaded: function _ensurePdfPageLoaded(pageView) {
	        if (pageView.pdfPage) {
	          return Promise.resolve(pageView.pdfPage);
	        }
	        var pageNumber = pageView.id;
	        if (this._pagesRequests[pageNumber]) {
	          return this._pagesRequests[pageNumber];
	        }
	        var promise = this.pdfDocument.getPage(pageNumber).then(function (pdfPage) {
	          pageView.setPdfPage(pdfPage);
	          this._pagesRequests[pageNumber] = null;
	          return pdfPage;
	        }.bind(this));
	        this._pagesRequests[pageNumber] = promise;
	        return promise;
	      },
	
	      forceRendering: function forceRendering(currentlyVisiblePages) {
	        var visiblePages = currentlyVisiblePages || this._getVisiblePages();
	        var pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, this.scroll.down);
	        if (pageView) {
	          this._ensurePdfPageLoaded(pageView).then(function () {
	            this.renderingQueue.renderView(pageView);
	          }.bind(this));
	          return true;
	        }
	        return false;
	      },
	
	      getPageTextContent: function getPageTextContent(pageIndex) {
	        return this.pdfDocument.getPage(pageIndex + 1).then(function (page) {
	          return page.getTextContent({ normalizeWhitespace: true });
	        });
	      },
	
	      /**
	       * @param {HTMLDivElement} textLayerDiv
	       * @param {number} pageIndex
	       * @param {PageViewport} viewport
	       * @returns {TextLayerBuilder}
	       */
	      createTextLayerBuilder: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
	        return new TextLayerBuilder({
	          textLayerDiv: textLayerDiv,
	          pageIndex: pageIndex,
	          viewport: viewport,
	          findController: this.isInPresentationMode ? null : this.findController
	        });
	      },
	
	      /**
	       * @param {HTMLDivElement} pageDiv
	       * @param {PDFPage} pdfPage
	       * @returns {AnnotationLayerBuilder}
	       */
	      createAnnotationLayerBuilder: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
	        return new AnnotationLayerBuilder({
	          pageDiv: pageDiv,
	          pdfPage: pdfPage,
	          linkService: this.linkService
	        });
	      },
	
	      setFindController: function setFindController(findController) {
	        this.findController = findController;
	      }
	    };
	
	    return PDFViewer;
	  }();
	
	  var SimpleLinkService = function SimpleLinkServiceClosure() {
	    function SimpleLinkService() {}
	
	    SimpleLinkService.prototype = {
	      /**
	       * @returns {number}
	       */
	      get page() {
	        return 0;
	      },
	      /**
	       * @param {number} value
	       */
	      set page(value) {},
	      /**
	       * @param dest - The PDF destination object.
	       */
	      navigateTo: function navigateTo(dest) {},
	      /**
	       * @param dest - The PDF destination object.
	       * @returns {string} The hyperlink to the PDF object.
	       */
	      getDestinationHash: function getDestinationHash(dest) {
	        return '#';
	      },
	      /**
	       * @param hash - The PDF parameters/hash.
	       * @returns {string} The hyperlink to the PDF object.
	       */
	      getAnchorUrl: function getAnchorUrl(hash) {
	        return '#';
	      },
	      /**
	       * @param {string} hash
	       */
	      setHash: function setHash(hash) {},
	      /**
	       * @param {string} action
	       */
	      executeNamedAction: function executeNamedAction(action) {},
	      /**
	       * @param {number} pageNum - page number.
	       * @param {Object} pageRef - reference to the page.
	       */
	      cachePageRef: function cachePageRef(pageNum, pageRef) {}
	    };
	    return SimpleLinkService;
	  }();
	
	  var PDFHistory = function () {
	    function PDFHistory(options) {
	      this.linkService = options.linkService;
	
	      this.initialized = false;
	      this.initialDestination = null;
	      this.initialBookmark = null;
	    }
	
	    PDFHistory.prototype = {
	      /**
	       * @param {string} fingerprint
	       * @param {IPDFLinkService} linkService
	       */
	      initialize: function pdfHistoryInitialize(fingerprint) {
	        this.initialized = true;
	        this.reInitialized = false;
	        this.allowHashChange = true;
	        this.historyUnlocked = true;
	        this.isViewerInPresentationMode = false;
	
	        this.previousHash = window.location.hash.substring(1);
	        this.currentBookmark = '';
	        this.currentPage = 0;
	        this.updatePreviousBookmark = false;
	        this.previousBookmark = '';
	        this.previousPage = 0;
	        this.nextHashParam = '';
	
	        this.fingerprint = fingerprint;
	        this.currentUid = this.uid = 0;
	        this.current = {};
	
	        var state = window.history.state;
	        if (this._isStateObjectDefined(state)) {
	          // This corresponds to navigating back to the document
	          // from another page in the browser history.
	          if (state.target.dest) {
	            this.initialDestination = state.target.dest;
	          } else {
	            this.initialBookmark = state.target.hash;
	          }
	          this.currentUid = state.uid;
	          this.uid = state.uid + 1;
	          this.current = state.target;
	        } else {
	          // This corresponds to the loading of a new document.
	          if (state && state.fingerprint && this.fingerprint !== state.fingerprint) {
	            // Reinitialize the browsing history when a new document
	            // is opened in the web viewer.
	            this.reInitialized = true;
	          }
	          this._pushOrReplaceState({ fingerprint: this.fingerprint }, true);
	        }
	
	        var self = this;
	        window.addEventListener('popstate', function pdfHistoryPopstate(evt) {
	          if (!self.historyUnlocked) {
	            return;
	          }
	          if (evt.state) {
	            // Move back/forward in the history.
	            self._goTo(evt.state);
	            return;
	          }
	
	          // If the state is not set, then the user tried to navigate to a
	          // different hash by manually editing the URL and pressing Enter, or by
	          // clicking on an in-page link (e.g. the "current view" link).
	          // Save the current view state to the browser history.
	
	          // Note: In Firefox, history.null could also be null after an in-page
	          // navigation to the same URL, and without dispatching the popstate
	          // event: https://bugzilla.mozilla.org/show_bug.cgi?id=1183881
	
	          if (self.uid === 0) {
	            // Replace the previous state if it was not explicitly set.
	            var previousParams = self.previousHash && self.currentBookmark && self.previousHash !== self.currentBookmark ? { hash: self.currentBookmark, page: self.currentPage } : { page: 1 };
	            replacePreviousHistoryState(previousParams, function () {
	              updateHistoryWithCurrentHash();
	            });
	          } else {
	            updateHistoryWithCurrentHash();
	          }
	        }, false);
	
	        function updateHistoryWithCurrentHash() {
	          self.previousHash = window.location.hash.slice(1);
	          self._pushToHistory({ hash: self.previousHash }, false, true);
	          self._updatePreviousBookmark();
	        }
	
	        function replacePreviousHistoryState(params, callback) {
	          // To modify the previous history entry, the following happens:
	          // 1. history.back()
	          // 2. _pushToHistory, which calls history.replaceState( ... )
	          // 3. history.forward()
	          // Because a navigation via the history API does not immediately update
	          // the history state, the popstate event is used for synchronization.
	          self.historyUnlocked = false;
	
	          // Suppress the hashchange event to avoid side effects caused by
	          // navigating back and forward.
	          self.allowHashChange = false;
	          window.addEventListener('popstate', rewriteHistoryAfterBack);
	          history.back();
	
	          function rewriteHistoryAfterBack() {
	            window.removeEventListener('popstate', rewriteHistoryAfterBack);
	            window.addEventListener('popstate', rewriteHistoryAfterForward);
	            self._pushToHistory(params, false, true);
	            history.forward();
	          }
	          function rewriteHistoryAfterForward() {
	            window.removeEventListener('popstate', rewriteHistoryAfterForward);
	            self.allowHashChange = true;
	            self.historyUnlocked = true;
	            callback();
	          }
	        }
	
	        function pdfHistoryBeforeUnload() {
	          var previousParams = self._getPreviousParams(null, true);
	          if (previousParams) {
	            var replacePrevious = !self.current.dest && self.current.hash !== self.previousHash;
	            self._pushToHistory(previousParams, false, replacePrevious);
	            self._updatePreviousBookmark();
	          }
	          // Remove the event listener when navigating away from the document,
	          // since 'beforeunload' prevents Firefox from caching the document.
	          window.removeEventListener('beforeunload', pdfHistoryBeforeUnload, false);
	        }
	
	        window.addEventListener('beforeunload', pdfHistoryBeforeUnload, false);
	
	        window.addEventListener('pageshow', function pdfHistoryPageShow(evt) {
	          // If the entire viewer (including the PDF file) is cached in
	          // the browser, we need to reattach the 'beforeunload' event listener
	          // since the 'DOMContentLoaded' event is not fired on 'pageshow'.
	          window.addEventListener('beforeunload', pdfHistoryBeforeUnload, false);
	        }, false);
	
	        window.addEventListener('presentationmodechanged', function (e) {
	          self.isViewerInPresentationMode = !!e.detail.active;
	        });
	      },
	
	      clearHistoryState: function pdfHistory_clearHistoryState() {
	        this._pushOrReplaceState(null, true);
	      },
	
	      _isStateObjectDefined: function pdfHistory_isStateObjectDefined(state) {
	        return state && state.uid >= 0 && state.fingerprint && this.fingerprint === state.fingerprint && state.target && state.target.hash ? true : false;
	      },
	
	      _pushOrReplaceState: function pdfHistory_pushOrReplaceState(stateObj, replace) {
	        if (replace) {
	          window.history.replaceState(stateObj, '');
	        } else {
	          window.history.pushState(stateObj, '');
	        }
	      },
	
	      get isHashChangeUnlocked() {
	        if (!this.initialized) {
	          return true;
	        }
	        return this.allowHashChange;
	      },
	
	      _updatePreviousBookmark: function pdfHistory_updatePreviousBookmark() {
	        if (this.updatePreviousBookmark && this.currentBookmark && this.currentPage) {
	          this.previousBookmark = this.currentBookmark;
	          this.previousPage = this.currentPage;
	          this.updatePreviousBookmark = false;
	        }
	      },
	
	      updateCurrentBookmark: function pdfHistoryUpdateCurrentBookmark(bookmark, pageNum) {
	        if (this.initialized) {
	          this.currentBookmark = bookmark.substring(1);
	          this.currentPage = pageNum | 0;
	          this._updatePreviousBookmark();
	        }
	      },
	
	      updateNextHashParam: function pdfHistoryUpdateNextHashParam(param) {
	        if (this.initialized) {
	          this.nextHashParam = param;
	        }
	      },
	
	      push: function pdfHistoryPush(params, isInitialBookmark) {
	        if (!(this.initialized && this.historyUnlocked)) {
	          return;
	        }
	        if (params.dest && !params.hash) {
	          params.hash = this.current.hash && this.current.dest && this.current.dest === params.dest ? this.current.hash : this.linkService.getDestinationHash(params.dest).split('#')[1];
	        }
	        if (params.page) {
	          params.page |= 0;
	        }
	        if (isInitialBookmark) {
	          var target = window.history.state.target;
	          if (!target) {
	            // Invoked when the user specifies an initial bookmark,
	            // thus setting initialBookmark, when the document is loaded.
	            this._pushToHistory(params, false);
	            this.previousHash = window.location.hash.substring(1);
	          }
	          this.updatePreviousBookmark = this.nextHashParam ? false : true;
	          if (target) {
	            // If the current document is reloaded,
	            // avoid creating duplicate entries in the history.
	            this._updatePreviousBookmark();
	          }
	          return;
	        }
	        if (this.nextHashParam) {
	          if (this.nextHashParam === params.hash) {
	            this.nextHashParam = null;
	            this.updatePreviousBookmark = true;
	            return;
	          } else {
	            this.nextHashParam = null;
	          }
	        }
	
	        if (params.hash) {
	          if (this.current.hash) {
	            if (this.current.hash !== params.hash) {
	              this._pushToHistory(params, true);
	            } else {
	              if (!this.current.page && params.page) {
	                this._pushToHistory(params, false, true);
	              }
	              this.updatePreviousBookmark = true;
	            }
	          } else {
	            this._pushToHistory(params, true);
	          }
	        } else if (this.current.page && params.page && this.current.page !== params.page) {
	          this._pushToHistory(params, true);
	        }
	      },
	
	      _getPreviousParams: function pdfHistory_getPreviousParams(onlyCheckPage, beforeUnload) {
	        if (!(this.currentBookmark && this.currentPage)) {
	          return null;
	        } else if (this.updatePreviousBookmark) {
	          this.updatePreviousBookmark = false;
	        }
	        if (this.uid > 0 && !(this.previousBookmark && this.previousPage)) {
	          // Prevent the history from getting stuck in the current state,
	          // effectively preventing the user from going back/forward in
	          // the history.
	          //
	          // This happens if the current position in the document didn't change
	          // when the history was previously updated. The reasons for this are
	          // either:
	          // 1. The current zoom value is such that the document does not need to,
	          //    or cannot, be scrolled to display the destination.
	          // 2. The previous destination is broken, and doesn't actally point to a
	          //    position within the document.
	          //    (This is either due to a bad PDF generator, or the user making a
	          //     mistake when entering a destination in the hash parameters.)
	          return null;
	        }
	        if (!this.current.dest && !onlyCheckPage || beforeUnload) {
	          if (this.previousBookmark === this.currentBookmark) {
	            return null;
	          }
	        } else if (this.current.page || onlyCheckPage) {
	          if (this.previousPage === this.currentPage) {
	            return null;
	          }
	        } else {
	          return null;
	        }
	        var params = { hash: this.currentBookmark, page: this.currentPage };
	        if (this.isViewerInPresentationMode) {
	          params.hash = null;
	        }
	        return params;
	      },
	
	      _stateObj: function pdfHistory_stateObj(params) {
	        return { fingerprint: this.fingerprint, uid: this.uid, target: params };
	      },
	
	      _pushToHistory: function pdfHistory_pushToHistory(params, addPrevious, overwrite) {
	        if (!this.initialized) {
	          return;
	        }
	        if (!params.hash && params.page) {
	          params.hash = 'page=' + params.page;
	        }
	        if (addPrevious && !overwrite) {
	          var previousParams = this._getPreviousParams();
	          if (previousParams) {
	            var replacePrevious = !this.current.dest && this.current.hash !== this.previousHash;
	            this._pushToHistory(previousParams, false, replacePrevious);
	          }
	        }
	        this._pushOrReplaceState(this._stateObj(params), overwrite || this.uid === 0);
	        this.currentUid = this.uid++;
	        this.current = params;
	        this.updatePreviousBookmark = true;
	      },
	
	      _goTo: function pdfHistory_goTo(state) {
	        if (!(this.initialized && this.historyUnlocked && this._isStateObjectDefined(state))) {
	          return;
	        }
	        if (!this.reInitialized && state.uid < this.currentUid) {
	          var previousParams = this._getPreviousParams(true);
	          if (previousParams) {
	            this._pushToHistory(this.current, false);
	            this._pushToHistory(previousParams, false);
	            this.currentUid = state.uid;
	            window.history.back();
	            return;
	          }
	        }
	        this.historyUnlocked = false;
	
	        if (state.target.dest) {
	          this.linkService.navigateTo(state.target.dest);
	        } else {
	          this.linkService.setHash(state.target.hash);
	        }
	        this.currentUid = state.uid;
	        if (state.uid > this.uid) {
	          this.uid = state.uid;
	        }
	        this.current = state.target;
	        this.updatePreviousBookmark = true;
	
	        var currentHash = window.location.hash.substring(1);
	        if (this.previousHash !== currentHash) {
	          this.allowHashChange = false;
	        }
	        this.previousHash = currentHash;
	
	        this.historyUnlocked = true;
	      },
	
	      back: function pdfHistoryBack() {
	        this.go(-1);
	      },
	
	      forward: function pdfHistoryForward() {
	        this.go(1);
	      },
	
	      go: function pdfHistoryGo(direction) {
	        if (this.initialized && this.historyUnlocked) {
	          var state = window.history.state;
	          if (direction === -1 && state && state.uid > 0) {
	            window.history.back();
	          } else if (direction === 1 && state && state.uid < this.uid - 1) {
	            window.history.forward();
	          }
	        }
	      }
	    };
	
	    return PDFHistory;
	  }();
	
	  PDFJS.PDFViewer = PDFViewer;
	  PDFJS.PDFPageView = PDFPageView;
	  PDFJS.PDFLinkService = PDFLinkService;
	  PDFJS.TextLayerBuilder = TextLayerBuilder;
	  PDFJS.DefaultTextLayerFactory = DefaultTextLayerFactory;
	  PDFJS.AnnotationLayerBuilder = AnnotationLayerBuilder;
	  PDFJS.DefaultAnnotationLayerFactory = DefaultAnnotationLayerFactory;
	  PDFJS.PDFHistory = PDFHistory;
	
	  PDFJS.getFileName = getFileName;
	  PDFJS.ProgressBar = ProgressBar;
	}).call(typeof window === 'undefined' ? undefined : window);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=pdf-annotate.js.map