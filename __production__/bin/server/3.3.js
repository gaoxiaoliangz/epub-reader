exports.ids = [3];
exports.modules = {

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(323);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(324);
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading(props) {
	        _classCallCheck(this, Loading);
	
	        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
	
	        _this.state = {
	            dynamicText: ''
	        };
	        return _this;
	    }
	
	    _createClass(Loading, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            this.intervalId = setInterval(function () {
	                if (_this2.state.dynamicText.length === 3) {
	                    _this2.setState({ dynamicText: '' });
	                } else {
	                    _this2.setState({
	                        dynamicText: _this2.state.dynamicText + '.'
	                    });
	                }
	            }, 500);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            clearInterval(this.intervalId);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var text = _props.text;
	            var center = _props.center;
	            var dynamicText = this.state.dynamicText;
	
	            var wrapClass = (0, _classnames2.default)({
	                'loading-wrap--center': center,
	                'loading-wrap': !center
	            });
	            return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text + dynamicText));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	Loading = __decorate([(0, _reactCssModules2.default)(styles)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中'
	};
	exports.default = Loading;

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(325);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".text-loading_3efqh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3efqh {\n  margin: 30px 0;\n  display: inline-block; }\n\n.loading-wrap_htyYz {\n  text-align: left; }\n\n.loading-wrap--center_3PEIh {\n  text-align: center; }\n", ""]);
	
	// exports
	exports.locals = {
		"text-loading": "text-loading_3efqh",
		"loading-wrap": "loading-wrap_htyYz",
		"loading-wrap--center": "loading-wrap--center_3PEIh"
	};

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _actions = __webpack_require__(94);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _BookListSection = __webpack_require__(332);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _form = __webpack_require__(213);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _layout = __webpack_require__(236);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(349);
	var Home = function (_Component) {
	    _inherits(Home, _Component);
	
	    function Home(props) {
	        _classCallCheck(this, Home);
	
	        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	
	        _this.state = {
	            showRecentReading: false
	        };
	        return _this;
	    }
	
	    _createClass(Home, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.loadBooks();
	            this.props.fetchCollections();
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.session.isFetching && !nextProps.session.isFetching) {
	                if (nextProps.session.user.role !== 'visitor') {
	                    this.setState({
	                        showRecentReading: true
	                    });
	                }
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var newestBooks = _props.newestBooks;
	            var isBooksFetching = _props.isBooksFetching;
	
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "home" }, this.props.session.user.role === 'visitor' && this.props.session.isFetching === false ? _react2.default.createElement("div", { styleName: "hero-image" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "logo" }, "Readr"), _react2.default.createElement("h1", { styleName: "page-title" }, "新的阅读体验"), _react2.default.createElement(_form.Button, { to: "/signup" }, "现在加入"))) : null, _react2.default.createElement(_layout.Container, null, _react2.default.createElement(_BookListSection2.default, { bookEntities: newestBooks.slice(0, 6), title: "新书速递", moreLink: "/browse", isFetching: isBooksFetching })));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.loadBooks)());
	        }
	    }]);
	
	    return Home;
	}(_react.Component);
	Home = __decorate([(0, _reactCssModules2.default)(styles)], Home);
	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: selectors.books(undefined, '1')(state),
	        isBooksFetching: selectors.common.isPaginationFetching('books')(state),
	        session: state.session
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, fetchCollections: _actions.fetchCollections, sendNotification: _actions.sendNotification })(Home);

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookListSection = __webpack_require__(333);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookListSection2.default;

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(61);
	
	var _BookList = __webpack_require__(334);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _Loading = __webpack_require__(322);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Icon = __webpack_require__(123);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(347);
	var BookListSection = function (_Component) {
	    _inherits(BookListSection, _Component);
	
	    function BookListSection() {
	        _classCallCheck(this, BookListSection);
	
	        return _possibleConstructorReturn(this, (BookListSection.__proto__ || Object.getPrototypeOf(BookListSection)).apply(this, arguments));
	    }
	
	    _createClass(BookListSection, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var isFetching = _props.isFetching;
	            var title = _props.title;
	            var moreLink = _props.moreLink;
	            var bookEntities = _props.bookEntities;
	
	            return _react2.default.createElement("div", { styleName: "book-list-section" }, this.props.title && (moreLink ? _react2.default.createElement("h2", { styleName: "section-title" }, _react2.default.createElement(_reactRouter.Link, { to: moreLink }, title, _react2.default.createElement(_Icon2.default, { name: "arrowRight", size: 20 }))) : _react2.default.createElement("h2", { styleName: "section-title" }, title)), isFetching && bookEntities.length === 0 ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement(_BookList2.default, { bookEntities: bookEntities }));
	        }
	    }]);
	
	    return BookListSection;
	}(_react.Component);
	BookListSection = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookListSection);
	exports.default = BookListSection;

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookList = __webpack_require__(335);
	
	var _BookList2 = _interopRequireDefault(_BookList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookList2.default;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Book = __webpack_require__(336);
	
	var _Book2 = _interopRequireDefault(_Book);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(345);
	var BookList = function (_Component) {
	    _inherits(BookList, _Component);
	
	    function BookList() {
	        _classCallCheck(this, BookList);
	
	        return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
	    }
	
	    _createClass(BookList, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("ul", { styleName: "book-list", className: "clearfix" }, this.props.bookEntities && this.props.bookEntities.length !== 0 ? this.props.bookEntities.map(function (book, index) {
	                var title = book.title;
	                var authors = book.authors;
	                var description = book.description;
	                var cover = book.cover;
	
	                return _react2.default.createElement("li", { key: index }, _react2.default.createElement(_Book2.default, { id: book.id, title: title || '无标题', authors: authors && authors.map(function (author) {
	                        return author.name;
	                    }).join(', ') || '未知作者', description: description, cover: cover, disablePopup: true }));
	            }) : _react2.default.createElement("li", null, "暂无记录"));
	        }
	    }]);
	
	    return BookList;
	}(_react.Component);
	BookList = __decorate([(0, _reactCssModules2.default)(styles)], BookList);
	exports.default = BookList;

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Book = __webpack_require__(337);
	
	var _Book2 = _interopRequireDefault(_Book);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Book2.default;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(61);
	
	var _BookInfoPopup = __webpack_require__(338);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(342);
	var Book = function (_Component) {
	    _inherits(Book, _Component);
	
	    function Book(props) {
	        _classCallCheck(this, Book);
	
	        var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));
	
	        _this.state = {
	            showPopup: false
	        };
	        _this.showPopup = _this.showPopup.bind(_this);
	        _this.hidePopup = _this.hidePopup.bind(_this);
	        return _this;
	    }
	
	    _createClass(Book, [{
	        key: "showPopup",
	        value: function showPopup() {
	            this.setState({
	                showPopup: true
	            });
	        }
	    }, {
	        key: "hidePopup",
	        value: function hidePopup() {
	            this.setState({
	                showPopup: false
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var showDesc = _props.showDesc;
	            var description = _props.description;
	            var cover = _props.cover;
	
	            return _react2.default.createElement("div", { onMouseEnter: this.showPopup, onMouseLeave: this.hidePopup, styleName: "book--card" }, _react2.default.createElement(_reactRouter.Link, { to: '/book/' + this.props.id }, cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { src: this.props.cover })), _react2.default.createElement("div", { styleName: "book-meta" }, _react2.default.createElement("span", { title: this.props.title, styleName: "book-name" }, this.props.title || '无标题'), _react2.default.createElement("span", { styleName: "book-author" }, this.props.authors || '作者不详'), showDesc && _react2.default.createElement("span", { styleName: "book-desc" }, description || '空'))), this.state.showPopup && !this.props.disablePopup && _react2.default.createElement(_BookInfoPopup2.default, { bookId: this.props.id, title: this.props.title, author: this.props.authors, description: this.props.description }));
	        }
	    }]);
	
	    return Book;
	}(_react.Component);
	Book = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Book);
	exports.default = Book;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookInfoPopup = __webpack_require__(339);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookInfoPopup2.default;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(213);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(340);
	var BookInfoPopup = function (_Component) {
	    _inherits(BookInfoPopup, _Component);
	
	    function BookInfoPopup(props) {
	        _classCallCheck(this, BookInfoPopup);
	
	        return _possibleConstructorReturn(this, (BookInfoPopup.__proto__ || Object.getPrototypeOf(BookInfoPopup)).call(this, props));
	    }
	
	    _createClass(BookInfoPopup, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var author = _props.author;
	            var title = _props.title;
	            var description = _props.description;
	            var bookId = _props.bookId;
	
	            return _react2.default.createElement("div", { styleName: "popup" }, _react2.default.createElement("div", { styleName: "header" }, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement("p", { styleName: "author" }, author), _react2.default.createElement(_form.Button, { color: "blue", to: '/viewer/book/' + bookId }, "阅读")), _react2.default.createElement("div", { styleName: "description" }, _react2.default.createElement("p", null, description)));
	        }
	    }]);
	
	    return BookInfoPopup;
	}(_react.Component);
	BookInfoPopup = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookInfoPopup);
	exports.default = BookInfoPopup;

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(341);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".title_BVO7e {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.popup_MPCqr {\n  position: absolute;\n  z-index: 999;\n  left: 134px;\n  top: 0;\n  width: 300px;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);\n  padding: 20px 20px 0;\n  border: 1px solid #ddd; }\n\n.header_1InIf {\n  margin-bottom: 20px; }\n\n.title_BVO7e {\n  margin: 30px 0 10px 0; }\n\n.author_28BiA {\n  font-size: 0.9rem;\n  margin: 0 0 2em 0; }\n\n.description_D9rVN {\n  line-height: 1.6;\n  padding: 10px 0;\n  border-top: 1px solid #ddd; }\n", ""]);
	
	// exports
	exports.locals = {
		"title": "title_BVO7e",
		"popup": "popup_MPCqr",
		"header": "header_1InIf",
		"author": "author_28BiA",
		"description": "description_D9rVN"
	};

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(343);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".meta-item_2cRyJ {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.book_3Oqz_ {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_3Oqz_ a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_3Oqz_ a:hover img {\n      opacity: .96; }\n    .book_3Oqz_ a:active img {\n      opacity: .8; }\n\n.book-meta_3glcZ {\n  background: transparent; }\n\n.meta-item_2cRyJ {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2jIuZ {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_1VM7e {\n  color: #999; }\n\n.book-cover_1jrK8 {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(344) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_1jrK8 img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_1jrK8:hover {\n    top: -7px; }\n\n.book-desc_xFFKl {\n  color: #999; }\n\n.book--card_3FOky {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n  float: none;\n  height: 100px; }\n  .book--card_3FOky a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_3FOky a:hover img {\n      opacity: 1; }\n    .book--card_3FOky a:active img {\n      opacity: 1; }\n  .book--card_3FOky .book-cover_1jrK8 {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_3FOky .book-cover_1jrK8:hover {\n      top: 0; }\n    .book--card_3FOky .book-cover_1jrK8 img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_3FOky .book-meta_3glcZ {\n    float: none; }\n  .book--card_3FOky .meta-item_2cRyJ {\n    width: auto; }\n", ""]);
	
	// exports
	exports.locals = {
		"meta-item": "meta-item_2cRyJ",
		"book": "book_3Oqz_",
		"book-meta": "book-meta_3glcZ",
		"book-name": "book-name_2jIuZ meta-item_2cRyJ",
		"book-author": "book-author_1VM7e meta-item_2cRyJ",
		"book-cover": "book-cover_1jrK8",
		"book-desc": "book-desc_xFFKl",
		"book--card": "book--card_3FOky book_3Oqz_"
	};

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/shadow.471ea37f96.png";

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(346);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".book-list_2s_Jl {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_2s_Jl li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n    @media (max-width: 540px) {\n      .book-list_2s_Jl li {\n        width: 100%; } }\n", ""]);
	
	// exports
	exports.locals = {
		"book-list": "book-list_2s_Jl"
	};

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(348);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".section-title_2Kv3D {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.book-list-section_2CfDe {\n  position: relative; }\n\n.more_mgQHg {\n  position: absolute;\n  right: 0;\n  top: 0;\n  line-height: 32px; }\n\n.section-title_2Kv3D {\n  margin-bottom: 10px; }\n  .section-title_2Kv3D a {\n    color: #333; }\n    .section-title_2Kv3D a:hover {\n      color: #666; }\n", ""]);
	
	// exports
	exports.locals = {
		"section-title": "section-title_2Kv3D",
		"book-list-section": "book-list-section_2CfDe",
		"more": "more_mgQHg"
	};

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(350);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-title_Z366V {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.hero-image_14ZUX {\n  text-align: center;\n  height: 500px; }\n\n.logo_siT7A {\n  text-align: center;\n  padding-top: 150px;\n  font-size: 1.2rem; }\n\n.btn_1dcmq {\n  margin: 0 auto; }\n\n.page-title_Z366V {\n  margin: 10px 0 20px;\n  font-size: 2rem; }\n", ""]);
	
	// exports
	exports.locals = {
		"page-title": "page-title_Z366V",
		"hero-image": "hero-image_14ZUX",
		"logo": "logo_siT7A",
		"btn": "btn_1dcmq"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzPzk5YjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeD9kZGFmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzEwZGIqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzYxYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svQm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzPzM1NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzcz9lODE2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL3NoYWRvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzPzhlMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzPzBlYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzPzljZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEa0I7Ozs7QUFDRTs7OztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbkMsS0FBWSxTQUFVLG9CQUFrQjtBQWF4QztBQUErQjs7QUFJN0Isc0JBQWlCO0FBQ2Y7O3VIQUFZOztBQUNSLGVBQU07QUFDRywwQkFFZjtBQUhlOztBQUtFOzs7Ozs7O0FBQ1gsa0JBQVcseUJBQWU7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VEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxpREFBZ0QsbUJBQW1CLHNCQUFzQixzQkFBc0IsZ0JBQWdCLEVBQUUsOEJBQThCLHVCQUF1QixFQUFFLGlCQUFpQix1QkFBdUIsYUFBYSxXQUFXLHNCQUFzQixFQUFFLDBCQUEwQix3QkFBd0IsRUFBRSw0QkFBNEIsa0JBQWtCLEVBQUUsb0NBQW9DLG9CQUFvQixFQUFFOztBQUU5YTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNYQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLDhDQUE2QyxtQkFBbUIsc0JBQXNCLHNCQUFzQixnQkFBZ0IsRUFBRSx1QkFBdUIsdUJBQXVCLGtCQUFrQixFQUFFLGlCQUFpQix1QkFBdUIsdUJBQXVCLHNCQUFzQixFQUFFLGdCQUFnQixtQkFBbUIsRUFBRSx1QkFBdUIsd0JBQXdCLG9CQUFvQixFQUFFOztBQUVqWTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjMuMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTG9hZGluZy5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYmFja2Ryb3A/OiBib29sZWFuXG4gIHRleHQ/OiBzdHJpbmdcbiAgY2VudGVyPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkeW5hbWljVGV4dD86IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG4gIGludGVydmFsSWQ6IE5vZGVKUy5UaW1lclxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGR5bmFtaWNUZXh0OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmR5bmFtaWNUZXh0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHluYW1pY1RleHQ6ICcnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkeW5hbWljVGV4dDogdGhpcy5zdGF0ZS5keW5hbWljVGV4dCArICcuJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGV4dCwgY2VudGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBkeW5hbWljVGV4dCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qgd3JhcENsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAnbG9hZGluZy13cmFwLS1jZW50ZXInOiBjZW50ZXIsXG4gICAgICAnbG9hZGluZy13cmFwJzogIWNlbnRlclxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e3dyYXBDbGFzc30+XG4gICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInRleHQtbG9hZGluZ1wiPnt0ZXh0ICsgZHluYW1pY1RleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkxvYWRpbmdbJ2RlZmF1bHRQcm9wcyddID0ge1xuICB0ZXh0OiAn5Yqg6L295LitJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0xvYWRpbmcuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgN1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDUwcHggMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ubG9hZGluZy13cmFwX2h0eVl6IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4ubG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dC1sb2FkaW5nXCI6IFwidGV4dC1sb2FkaW5nXzNlZnFoXCIsXG5cdFwibG9hZGluZy13cmFwXCI6IFwibG9hZGluZy13cmFwX2h0eVl6XCIsXG5cdFwibG9hZGluZy13cmFwLS1jZW50ZXJcIjogXCJsb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDdcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2FkQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24nXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvbGF5b3V0J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9BcHBIb21lLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsb2FkQm9va3M6IHR5cGVvZiBsb2FkQm9va3NcbiAgZmV0Y2hDb2xsZWN0aW9uczogYW55XG4gIHNlc3Npb246IGFueVxuICBuZXdlc3RCb29rczogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBpc0Jvb2tzRmV0Y2hpbmc6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dSZWNlbnRSZWFkaW5nOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIElTdGF0ZT4ge1xuXG4gIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlfSkge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChsb2FkQm9va3MoKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dSZWNlbnRSZWFkaW5nOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKClcbiAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcgJiYgIW5leHRQcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93UmVjZW50UmVhZGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBuZXdlc3RCb29rcywgaXNCb29rc0ZldGNoaW5nIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciBib2R5Q2xhc3M9XCJob21lXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAndmlzaXRvcicgJiYgdGhpcy5wcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcgPT09IGZhbHNlID8gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJoZXJvLWltYWdlXCI+XG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJsb2dvXCI+UmVhZHI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGVOYW1lPVwicGFnZS10aXRsZVwiPuaWsOeahOmYheivu+S9k+mqjDwvaDE+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0bz1cIi9zaWdudXBcIj7njrDlnKjliqDlhaU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEJvb2tMaXN0U2VjdGlvblxuICAgICAgICAgICAgYm9va0VudGl0aWVzPXtuZXdlc3RCb29rcy5zbGljZSgwLCA2KSB9XG4gICAgICAgICAgICB0aXRsZT1cIuaWsOS5pumAn+mAklwiXG4gICAgICAgICAgICBtb3JlTGluaz1cIi9icm93c2VcIlxuICAgICAgICAgICAgaXNGZXRjaGluZz17aXNCb29rc0ZldGNoaW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIG5ld2VzdEJvb2tzOiBzZWxlY3RvcnMuYm9va3ModW5kZWZpbmVkLCAnMScpKHN0YXRlKSxcbiAgICBpc0Jvb2tzRmV0Y2hpbmc6IHNlbGVjdG9ycy5jb21tb24uaXNQYWdpbmF0aW9uRmV0Y2hpbmcoJ2Jvb2tzJykoc3RhdGUpLFxuICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIHt9PihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGxvYWRCb29rcywgZmV0Y2hDb2xsZWN0aW9ucywgc2VuZE5vdGlmaWNhdGlvbiB9XG4pKEhvbWUpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUudHN4XG4gKiovIiwiaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuL0Jvb2tMaXN0U2VjdGlvbidcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0U2VjdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vQm9va0xpc3QnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rTGlzdFNlY3Rpb24uc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBib29rRW50aXRpZXM6IGFueVxuICB0aXRsZT86IHN0cmluZ1xuICBtb3JlTGluaz86IHN0cmluZ1xuICBpc0ZldGNoaW5nPzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJvb2tMaXN0U2VjdGlvbiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZywgdGl0bGUsIG1vcmVMaW5rLCBib29rRW50aXRpZXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1saXN0LXNlY3Rpb25cIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgbW9yZUxpbmtcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXttb3JlTGlua30+e3RpdGxlfTxJY29uIG5hbWU9XCJhcnJvd1JpZ2h0XCIgc2l6ZT17MjB9IC8+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZyAmJiBib29rRW50aXRpZXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IDxMb2FkaW5nIC8+XG4gICAgICAgICAgICA6IDxCb29rTGlzdCBib29rRW50aXRpZXM9e2Jvb2tFbnRpdGllc30gLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0U2VjdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4vQm9va0xpc3QnXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJvb2sgZnJvbSAnLi4vQm9vaydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rTGlzdC5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYm9va0VudGl0aWVzOiB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBhdXRob3JzOiBhbnlcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgY292ZXI6IHN0cmluZ1xuICB9W11cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlTmFtZT1cImJvb2stbGlzdFwiIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmJvb2tFbnRpdGllcyAmJiB0aGlzLnByb3BzLmJvb2tFbnRpdGllcy5sZW5ndGggIT09IDBcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmJvb2tFbnRpdGllcy5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwgYXV0aG9ycywgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSBib29rXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJvb2tcbiAgICAgICAgICAgICAgICAgICAgICBpZD17Ym9vay5pZH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGUgfHwgJ+aXoOagh+mimCd9XG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9ycz17YXV0aG9ycyAmJiBhdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgfHwgJ+acquefpeS9nOiAhSd9XG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtjb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgPGxpPuaaguaXoOiusOW9lTwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3QudHN4XG4gKiovIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rJ1xuZXhwb3J0IGRlZmF1bHQgQm9va1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEJvb2tJbmZvUG9wdXAgZnJvbSAnLi4vQm9va0luZm9Qb3B1cCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fYm9vay5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgYXV0aG9yczogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBjb3Zlcjogc3RyaW5nXG4gIGRpc2FibGVQb3B1cD86IGJvb2xlYW5cbiAgc2hvd0Rlc2M/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93UG9wdXA6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnNob3dQb3B1cCA9IHRoaXMuc2hvd1BvcHVwLmJpbmQodGhpcylcbiAgICB0aGlzLmhpZGVQb3B1cCA9IHRoaXMuaGlkZVBvcHVwLmJpbmQodGhpcylcbiAgfVxuXG4gIHNob3dQb3B1cCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dQb3B1cDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoaWRlUG9wdXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3dEZXNjLCBkZXNjcmlwdGlvbiwgY292ZXIgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uTW91c2VFbnRlcj17dGhpcy5zaG93UG9wdXB9IG9uTW91c2VMZWF2ZT17dGhpcy5oaWRlUG9wdXB9IHN0eWxlTmFtZT1cImJvb2stLWNhcmRcIj5cbiAgICAgICAgPExpbmsgdG89eycvYm9vay8nICsgdGhpcy5wcm9wcy5pZH0gPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvdmVyICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJib29rLWNvdmVyXCI+PGltZyBzcmM9e3RoaXMucHJvcHMuY292ZXJ9Lz48L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJib29rLW1ldGFcIj5cbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBzdHlsZU5hbWU9XCJib29rLW5hbWVcIj57dGhpcy5wcm9wcy50aXRsZSB8fCAn5peg5qCH6aKYJ308L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJib29rLWF1dGhvclwiPnt0aGlzLnByb3BzLmF1dGhvcnMgfHwgJ+S9nOiAheS4jeivpid9PC9zcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93RGVzYyAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiYm9vay1kZXNjXCI+e2Rlc2NyaXB0aW9uIHx8ICfnqbonfTwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlUG9wdXAgJiYgKFxuICAgICAgICAgICAgPEJvb2tJbmZvUG9wdXBcbiAgICAgICAgICAgICAgYm9va0lkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXt0aGlzLnByb3BzLmF1dGhvcnN9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9Cb29rLnRzeFxuICoqLyIsImltcG9ydCBCb29rSW5mb1BvcHVwIGZyb20gJy4vQm9va0luZm9Qb3B1cCdcbmV4cG9ydCBkZWZhdWx0IEJvb2tJbmZvUG9wdXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rSW5mb1BvcHVwLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgYXV0aG9yOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGJvb2tJZDogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQm9va0luZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhdXRob3IsIHRpdGxlLCBkZXNjcmlwdGlvbiwgYm9va0lkIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwb3B1cFwiPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMiBzdHlsZU5hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxwIHN0eWxlTmFtZT1cImF1dGhvclwiPnthdXRob3J9PC9wPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJibHVlXCIgdG89eycvdmlld2VyL2Jvb2svJyArIGJvb2tJZH0+6ZiF6K+7PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0luZm9Qb3B1cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tJbmZvUG9wdXAuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDcgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50aXRsZV9CVk83ZSB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5wb3B1cF9NUENxciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk7XFxuICBsZWZ0OiAxMzRweDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IH1cXG5cXG4uaGVhZGVyXzFJbklmIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4udGl0bGVfQlZPN2Uge1xcbiAgbWFyZ2luOiAzMHB4IDAgMTBweCAwOyB9XFxuXFxuLmF1dGhvcl8yOEJpQSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbjogMCAwIDJlbSAwOyB9XFxuXFxuLmRlc2NyaXB0aW9uX0Q5clZOIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwidGl0bGVfQlZPN2VcIixcblx0XCJwb3B1cFwiOiBcInBvcHVwX01QQ3FyXCIsXG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyXzFJbklmXCIsXG5cdFwiYXV0aG9yXCI6IFwiYXV0aG9yXzI4QmlBXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZXNjcmlwdGlvbl9EOXJWTlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDcgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5ib29rXzNPcXpfIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDsgfVxcbiAgLmJvb2tfM09xel8gYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIC5ib29rXzNPcXpfIGE6aG92ZXIgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAuOTY7IH1cXG4gICAgLmJvb2tfM09xel8gYTphY3RpdmUgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAuODsgfVxcblxcbi5ib29rLW1ldGFfM2dsY1oge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG5cXG4ubWV0YS1pdGVtXzJjUnlKIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xcbiAgd2lkdGg6IDEzNHB4OyB9XFxuXFxuLmJvb2stbmFtZV8yakl1WiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmJvb2stYXV0aG9yXzFWTTdlIHtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLmJvb2stY292ZXJfMWpySzgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEzNHB4O1xcbiAgaGVpZ2h0OiAxODRweDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCJhc3NldHMvaW1nL3NoYWRvdy5wbmdcIikgKyBcIikgbm8tcmVwZWF0IHRvcDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5ib29rLWNvdmVyXzFqcks4IGltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBsZWZ0OiAxN3B4O1xcbiAgICB0b3A6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxuICAuYm9vay1jb3Zlcl8xanJLODpob3ZlciB7XFxuICAgIHRvcDogLTdweDsgfVxcblxcbi5ib29rLWRlc2NfeEZGS2wge1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4uYm9vay0tY2FyZF8zRk9reSB7XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4OyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSBhIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgYTpob3ZlciBpbWcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgYTphY3RpdmUgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1jb3Zlcl8xanJLOCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLWNvdmVyXzFqcks4OmhvdmVyIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stY292ZXJfMWpySzggaW1nIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1tZXRhXzNnbGNaIHtcXG4gICAgZmxvYXQ6IG5vbmU7IH1cXG4gIC5ib29rLS1jYXJkXzNGT2t5IC5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgICB3aWR0aDogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm1ldGEtaXRlbVwiOiBcIm1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2tcIjogXCJib29rXzNPcXpfXCIsXG5cdFwiYm9vay1tZXRhXCI6IFwiYm9vay1tZXRhXzNnbGNaXCIsXG5cdFwiYm9vay1uYW1lXCI6IFwiYm9vay1uYW1lXzJqSXVaIG1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2stYXV0aG9yXCI6IFwiYm9vay1hdXRob3JfMVZNN2UgbWV0YS1pdGVtXzJjUnlKXCIsXG5cdFwiYm9vay1jb3ZlclwiOiBcImJvb2stY292ZXJfMWpySzhcIixcblx0XCJib29rLWRlc2NcIjogXCJib29rLWRlc2NfeEZGS2xcIixcblx0XCJib29rLS1jYXJkXCI6IFwiYm9vay0tY2FyZF8zRk9reSBib29rXzNPcXpfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3NoYWRvdy40NzFlYTM3Zjk2LnBuZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYXNzZXRzL2ltZy9zaGFkb3cucG5nXG4gKiogbW9kdWxlIGlkID0gMzQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rTGlzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9vay1saXN0XzJzX0psIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDsgfVxcbiAgLmJvb2stbGlzdF8yc19KbCBsaSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xcbiAgICAgIC5ib29rLWxpc3RfMnNfSmwgbGkge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJvb2stbGlzdFwiOiBcImJvb2stbGlzdF8yc19KbFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDcgMTBcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tMaXN0U2VjdGlvbi5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDdcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWN0aW9uLXRpdGxlXzJLdjNEIHtcXG4gIG1hcmdpbjogMzVweCAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmJvb2stbGlzdC1zZWN0aW9uXzJDZkRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5tb3JlX21nUUhnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7IH1cXG5cXG4uc2VjdGlvbi10aXRsZV8yS3YzRCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAuc2VjdGlvbi10aXRsZV8yS3YzRCBhIHtcXG4gICAgY29sb3I6ICMzMzM7IH1cXG4gICAgLnNlY3Rpb24tdGl0bGVfMkt2M0QgYTpob3ZlciB7XFxuICAgICAgY29sb3I6ICM2NjY7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uLXRpdGxlXCI6IFwic2VjdGlvbi10aXRsZV8yS3YzRFwiLFxuXHRcImJvb2stbGlzdC1zZWN0aW9uXCI6IFwiYm9vay1saXN0LXNlY3Rpb25fMkNmRGVcIixcblx0XCJtb3JlXCI6IFwibW9yZV9tZ1FIZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAzIDQgN1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQXBwSG9tZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXRpdGxlX1ozNjZWIHtcXG4gIG1hcmdpbjogMzVweCAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmhlcm8taW1hZ2VfMTRaVVgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MDBweDsgfVxcblxcbi5sb2dvX3NpVDdBIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuXFxuLmJ0bl8xZGNtcSB7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5wYWdlLXRpdGxlX1ozNjZWIHtcXG4gIG1hcmdpbjogMTBweCAwIDIwcHg7XFxuICBmb250LXNpemU6IDJyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlLXRpdGxlXCI6IFwicGFnZS10aXRsZV9aMzY2VlwiLFxuXHRcImhlcm8taW1hZ2VcIjogXCJoZXJvLWltYWdlXzE0WlVYXCIsXG5cdFwibG9nb1wiOiBcImxvZ29fc2lUN0FcIixcblx0XCJidG5cIjogXCJidG5fMWRjbXFcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9