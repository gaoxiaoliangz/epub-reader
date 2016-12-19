exports.ids = [13];
exports.modules = {

/***/ 220:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(330);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _api = __webpack_require__(203);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(90);
	
	var _ContentPage = __webpack_require__(334);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(58);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _moment = __webpack_require__(340);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _FileUploader = __webpack_require__(341);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);
	
	var _form = __webpack_require__(147);
	
	var _BookMetaForm = __webpack_require__(343);
	
	var _BookMetaForm2 = _interopRequireDefault(_BookMetaForm);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    _createClass(ManageBooks, null, [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var query = _ref.query;
	
	            return store.dispatch((0, _actions.loadBooks)({
	                page: query.page
	            }));
	        }
	    }]);
	
	    function ManageBooks(props) {
	        _classCallCheck(this, ManageBooks);
	
	        return _possibleConstructorReturn(this, (ManageBooks.__proto__ || Object.getPrototypeOf(ManageBooks)).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: 'deleteBook',
	        value: function deleteBook(id, bookName) {
	            var _this2 = this;
	
	            this.props.openConfirmModal({
	                title: '确认删除',
	                content: '\u5C06\u5220\u9664\u300A' + bookName + '\u300B',
	                onConfirm: function onConfirm() {
	                    _api2.default.deleteBook(id).then(function (res) {
	                        _this2.props.closeConfirmModal();
	                        _this2.props.sendNotification('删除成功！');
	                        _this2.props.removeEntity('books', id);
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'editBookMeta',
	        value: function editBookMeta(bookId) {
	            var _this3 = this;
	
	            var bookEntities = this.props.bookEntities;
	
	            this.props.openModal({
	                title: '编辑书籍信息',
	                content: _react2.default.createElement(_BookMetaForm2.default, { onSave: function onSave(data) {
	                        _api2.default.editBookMeta(bookId, data).then(function (result) {
	                            _this3.loadBooks();
	                            _this3.props.closeModal();
	                            _this3.props.sendNotification('修改成功！', 'success');
	                        });
	                    } })
	            });
	            var bookMeta = bookEntities[bookId];
	            this.props.initializeForm('bookMeta', {
	                title: bookMeta.title,
	                authors: bookMeta.authors.map(function (item) {
	                    return item.name;
	                }).join(', '),
	                description: bookMeta.description,
	                cover: bookMeta.cover
	            });
	        }
	    }, {
	        key: 'loadBooks',
	        value: function loadBooks() {
	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	            this.props.loadBooks({
	                page: props.routing.query.page || '1'
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps, nextState) {
	            var _this4 = this;
	
	            _helpers2.default.onRoutingChange(function (routing) {
	                document.body.scrollTop = 0;
	                _this4.loadBooks(nextProps);
	            })(nextProps, this.props);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadBooks();
	            this.props.loadUsers();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement(_DocContainer2.default, { title: "书籍管理", bodyClass: "manage-books" }, _react2.default.createElement(_ContentPage2.default, { pagination: {
	                    name: 'books'
	                } }, _react2.default.createElement(_FileUploader2.default, { style: { marginTop: 20 }, url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: function onSuccess(result) {
	                    _this5.loadBooks();
	                }, onError: function onError(error) {
	                    _this5.props.sendNotification(error.message, 'error');
	                } }, _react2.default.createElement(_form.Button, { color: "blue" }, '\u6DFB\u52A0\u4E66\u7C4D')), _react2.default.createElement(_InfoTable2.default, { data: bookListNewest.map(function (item) {
	                    return Object.assign({}, item, {
	                        authors: item.authors ? item.authors.map(function (author) {
	                            return author.name;
	                        }).join(', ') : '未知作者',
	                        dateCreated: (0, _moment2.default)(new Date(item.dateCreated).valueOf()).format('YYYY年MM月DD日')
	                    });
	                }), header: [{
	                    key: 'id',
	                    name: 'ID'
	                }, {
	                    key: 'title',
	                    name: '书名'
	                }, {
	                    key: 'dateCreated',
	                    name: '创建日期'
	                }, {
	                    key: 'authors',
	                    name: '作者'
	                }], actions: [{
	                    name: '删除',
	                    fn: function fn(row) {
	                        _this5.deleteBook(row.id, row.title);
	                    }
	                }, {
	                    name: '编辑',
	                    fn: function fn(row) {
	                        _this5.editBookMeta(row.id);
	                    }
	                }] })));
	        }
	    }]);
	
	    return ManageBooks;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    var currentPage = selectors.common.currentPage('books')(state);
	    var bookEntities = selectors.common.entities('books')(state);
	    return {
	        // 如果第一个参数传 null 会覆盖默认参数
	        bookListNewest: selectors.books(undefined, currentPage)(state),
	        routing: state.routing.locationBeforeTransitions,
	        bookEntities: bookEntities
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, sendNotification: _actions.sendNotification, openConfirmModal: _actions.openConfirmModal, closeConfirmModal: _actions.closeConfirmModal, removeEntity: _actions.removeEntity, loadUsers: _actions.loadUsers, openModal: _actions.openModal, initializeForm: _actions.initializeForm, closeModal: _actions.closeModal })(ManageBooks);

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(331);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(120);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	
	var styles = __webpack_require__(332);
	var InfoTable = function (_Component) {
	    _inherits(InfoTable, _Component);
	
	    function InfoTable(props) {
	        _classCallCheck(this, InfoTable);
	
	        return _possibleConstructorReturn(this, (InfoTable.__proto__ || Object.getPrototypeOf(InfoTable)).call(this, props));
	    }
	
	    _createClass(InfoTable, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var header = _props.header;
	            var data = _props.data;
	            var enableTooltip = _props.enableTooltip;
	            var style = _props.style;
	            var actions = _props.actions;
	            var operationLabel = _props.operationLabel;
	
	            actions = actions || [];
	            if (!header) {
	                header = data.length !== 0 && _lodash2.default.keys(data[0]).map(function (key) {
	                    return {
	                        key: key,
	                        name: key
	                    };
	                }) || [];
	            }
	            var className = (0, _classnames2.default)({
	                'info-table': true,
	                'info-table--no-header': !header
	            });
	            return _react2.default.createElement("table", { styleName: className, style: style || {} }, _react2.default.createElement("tbody", null, header ? _react2.default.createElement("tr", null, header.map(function (item, index) {
	                return _react2.default.createElement("th", { key: index }, item.name);
	            }), actions.length !== 0 && _react2.default.createElement("th", { styleName: "actions" }, operationLabel || '操作')) : _react2.default.createElement("tr", null), data.map(function (row, index) {
	                return _react2.default.createElement("tr", { key: index }, _lodash2.default.map(header, function (item, key) {
	                    return _react2.default.createElement("td", { key: key }, row[item.key] && row[item.key].toString());
	                }), actions.length !== 0 && _react2.default.createElement("td", { styleName: "actions" }, actions.length !== 0 && actions.map(function (action, index2) {
	                    return _react2.default.createElement("div", { styleName: "action", key: index2, onClick: function onClick(e) {
	                            action.fn(data[index]);
	                        } }, action.name);
	                })));
	            })));
	        }
	    }]);
	
	    return InfoTable;
	}(_react.Component);
	InfoTable = __decorate([(0, _reactCssModules2.default)(styles)], InfoTable);
	exports.default = InfoTable;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(333);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".info-table_B7JYU > tbody > tr > td, .info-table_B7JYU > tbody > tr th {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.info-table--no-header_2v3xx {\n  position: relative; }\n\n.info-table_B7JYU {\n  margin: 20px 0;\n  width: 100%;\n  line-height: 2.5;\n  font-size: 1rem;\n  position: relative; }\n  .info-table_B7JYU > tbody > tr:first-child {\n    border-bottom: 2px solid #666;\n    font-weight: bold;\n    line-height: 2.5; }\n  .info-table_B7JYU > tbody > tr {\n    border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > th {\n      text-align: left;\n      border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > td, .info-table_B7JYU > tbody > tr th {\n      padding: 0 10px;\n      max-width: 250px; }\n\n.actions_pR_Nz {\n  min-width: 80px; }\n  .actions_pR_Nz .action_3DLKy {\n    cursor: pointer;\n    color: #1B267F;\n    display: inline-block;\n    margin-right: 5px; }\n    .actions_pR_Nz .action_3DLKy:hover {\n      color: #2e40d2; }\n    .actions_pR_Nz .action_3DLKy:active {\n      color: #090d2b; }\n", ""]);
	
	// exports
	exports.locals = {
		"info-table": "info-table_B7JYU",
		"info-table--no-header": "info-table--no-header_2v3xx",
		"actions": "actions_pR_Nz",
		"action": "action_3DLKy"
	};

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(335);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(336);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(89);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ContentPage = function (_Component) {
	    _inherits(ContentPage, _Component);
	
	    function ContentPage(props) {
	        _classCallCheck(this, ContentPage);
	
	        return _possibleConstructorReturn(this, (ContentPage.__proto__ || Object.getPrototypeOf(ContentPage)).call(this, props));
	    }
	
	    _createClass(ContentPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var routing = _props.routing;
	            var _props$paginationLink = _props.paginationLinks;
	            var next = _props$paginationLink.next;
	            var last = _props$paginationLink.last;
	
	            var all = last && last.page || 1;
	            var current = next ? next.page - 1 : all;
	            return _react2.default.createElement("div", null, children, _react2.default.createElement(_Paginator2.default, { all: all, current: current, url: {
	                    pathname: routing.pathname,
	                    query: routing.query || {}
	                } }));
	        }
	    }]);
	
	    return ContentPage;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var _ownProps$pagination = ownProps.pagination;
	    var name = _ownProps$pagination.name;
	    var key = _ownProps$pagination.key;
	
	    return {
	        routing: state.routing.locationBeforeTransitions || {},
	        paginationLinks: selectors.common.paginationLinks(name, key)(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(ContentPage);

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(337);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(92);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	
	var styles = __webpack_require__(338);
	var Paginator = function (_Component) {
	    _inherits(Paginator, _Component);
	
	    function Paginator(props) {
	        _classCallCheck(this, Paginator);
	
	        return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call(this, props));
	    }
	
	    _createClass(Paginator, [{
	        key: "parseUrl",
	        value: function parseUrl(pathname, query, pageNum) {
	            var urlStyle = this.props.urlStyle ? this.props.urlStyle : 'query';
	            if (urlStyle === 'query') {
	                var _queryPart = _utils2.default.parseUrlencoded(_lodash2.default.omit(query, ['page']));
	                return "" + pathname + (_queryPart ? "?" + _queryPart + "&" : '?') + "page=" + pageNum;
	            }
	            var queryPart = _utils2.default.parseUrlencoded(query);
	            return pathname + "/page/" + pageNum + "?" + queryPart;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var range = this.props.range ? this.props.range : 3;
	            var totalRangeEndIndex = this.props.all - 1;
	            var currentIndex = parseInt(this.props.current) - 1;
	            var rangeStartIndex = currentIndex - range;
	            var rangeEndIndex = currentIndex + range;
	            var leftSpread = false;
	            var rightSpread = false;
	            var pages = [];
	            var url = this.props.url;
	            if (typeof this.props.all !== 'number') {
	                throw new Error('all 必须为 number 类型！');
	            }
	            // 验证
	            if (typeof currentIndex !== 'number') {
	                console.error("\u9875\u7801\u5FC5\u987B\u4E3A\u6570\u5B57\uFF0C\u5374\u5F97\u5230 " + (typeof currentIndex === "undefined" ? "undefined" : _typeof(currentIndex)));
	            }
	            if (currentIndex > rangeEndIndex || currentIndex < 0) {
	                console.error('页码不能大于所有页面数目或小于 1！');
	            }
	            if (range * 2 + 1 >= totalRangeEndIndex) {
	                // 总长度小于 range 直径
	                rangeEndIndex = totalRangeEndIndex;
	                rangeStartIndex = 0;
	            } else {
	                // 处理右侧溢出
	                if (rangeEndIndex >= totalRangeEndIndex) {
	                    rangeEndIndex = totalRangeEndIndex;
	                    rangeStartIndex = totalRangeEndIndex - (range * 2 + 1);
	                } else {
	                    rightSpread = true;
	                }
	                if (rangeStartIndex <= 0) {
	                    rangeStartIndex = 0;
	                    rangeEndIndex = range * 2 + 1;
	                } else {
	                    leftSpread = true;
	                }
	            }
	            for (var i = rangeStartIndex; i <= rangeEndIndex; i++) {
	                pages = pages.concat([{
	                    pageNum: i + 1,
	                    isCurrent: i === currentIndex
	                }]);
	            }
	            // add spread
	            if (leftSpread) {
	                var spd = [{
	                    pageNum: 1
	                }, {
	                    isSpread: true
	                }];
	                pages = spd.concat(pages);
	            }
	            if (rightSpread) {
	                var _spd = [{
	                    isSpread: true
	                }, {
	                    pageNum: totalRangeEndIndex + 1
	                }];
	                pages = pages.concat(_spd);
	            }
	            return this.props.all !== 1 && _react2.default.createElement("div", { styleName: "paginator" }, _react2.default.createElement("ul", null, pages.map(function (page, index) {
	                if (page.isCurrent) {
	                    return _react2.default.createElement("li", { key: index, styleName: "page-num--current" }, page.pageNum);
	                }
	                if (page.isSpread) {
	                    return _react2.default.createElement("li", { key: index, styleName: "page-spread" }, "...");
	                }
	                return _react2.default.createElement("li", { key: index, styleName: "page-num" }, _react2.default.createElement(_reactRouter.Link, { to: _this2.parseUrl(url.pathname, url.query, page.pageNum) }, page.pageNum));
	            })));
	        }
	    }]);
	
	    return Paginator;
	}(_react.Component);
	Paginator = __decorate([(0, _reactCssModules2.default)(styles)], Paginator);
	exports.default = Paginator;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(339);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-spread_2INHU, .page-num_2oPQU a, .page-num--current_1Y2mE a, .page-num--current_1Y2mE {\n  display: inline-block;\n  padding: 8px 12px;\n  color: #666;\n  border: 1px solid #ddd;\n  background: #fff;\n  min-width: 37px;\n  text-align: center;\n  border-radius: 3px;\n  box-sizing: border-box; }\n\n.paginator_1RHAm {\n  margin: 20px 0; }\n\n.page-spread_2INHU {\n  display: inline-block;\n  cursor: default; }\n\n.page-num_2oPQU, .page-num--current_1Y2mE {\n  display: inline-block;\n  margin: 0 3px; }\n  .page-num_2oPQU a:hover, .page-num--current_1Y2mE a:hover {\n    background: #1B267F;\n    color: #fff; }\n\n.page-num--current_1Y2mE {\n  background: #ddd;\n  cursor: default; }\n", ""]);
	
	// exports
	exports.locals = {
		"page-spread": "page-spread_2INHU",
		"page-num": "page-num_2oPQU",
		"page-num--current": "page-num--current_1Y2mE",
		"paginator": "paginator_1RHAm"
	};

/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FileUploader = __webpack_require__(342);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FileUploader2.default;

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(220);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var FileUploader = function (_Component) {
	    _inherits(FileUploader, _Component);
	
	    function FileUploader(props) {
	        _classCallCheck(this, FileUploader);
	
	        var _this = _possibleConstructorReturn(this, (FileUploader.__proto__ || Object.getPrototypeOf(FileUploader)).call(this, props));
	
	        _this.state = {
	            value: null
	        };
	        _this.handleFileChange = _this.handleFileChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(FileUploader, [{
	        key: 'handleFileChange',
	        value: function handleFileChange(e) {
	            var _props = this.props;
	            var url = _props.url;
	            var onComplete = _props.onComplete;
	            var onSuccess = _props.onSuccess;
	            var onError = _props.onError;
	
	            var files = e.target.files;
	            var data = new FormData();
	            if (files.length > 1) {
	                _jquery2.default.each(files, function (key, value) {
	                    data.append(key, value);
	                });
	            } else {
	                data.append('file', files[0]);
	            }
	            _jquery2.default.ajax({
	                url: url,
	                type: 'POST',
	                data: data,
	                cache: false,
	                processData: false,
	                // 如果这么设置 contentType 会导致不存在 boundary 的问题, 需要设置为 false
	                // contentType: 'multipart/form-data',
	                contentType: false,
	                xhrFields: {
	                    withCredentials: true
	                },
	                complete: function complete(data2) {
	                    if (onComplete) {
	                        onComplete(data2);
	                    }
	                },
	                success: function success(data2, textStatus, jqXHR) {
	                    if (onSuccess) {
	                        onSuccess(data2);
	                    }
	                },
	                error: function error(jqXHR, textStatus, errorThrown) {
	                    if (onError) {
	                        onError(jqXHR.responseJSON);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props2 = this.props;
	            var url = _props2.url;
	            var accept = _props2.accept;
	            var noAjax = _props2.noAjax;
	            var children = _props2.children;
	            var name = _props2.name;
	            var multiple = _props2.multiple;
	            var style = _props2.style;
	            // 如果页面上有两个上传组件可能会出错
	            // input value 设为空会使得每次选中文件后都触发 onChange
	
	            return _react2.default.createElement("div", { className: "file-trigger", onClick: function onClick(e) {
	                    if (!noAjax) {
	                        (0, _jquery2.default)(_this2.fileInput).click();
	                    }
	                }, style: __assign({
	                    display: 'inline-block'
	                }, style) }, _react2.default.createElement("form", { action: url, method: "post", encType: "multipart/form-data", style: noAjax ? {} : { display: 'none' } }, _react2.default.createElement("input", { multiple: multiple, type: "file", name: name || 'file', id: "upload-file", value: noAjax ? undefined : '', ref: function ref(_ref) {
	                    _this2.fileInput = _ref;
	                }, onChange: function onChange(e) {
	                    if (!noAjax) {
	                        _this2.handleFileChange(e);
	                    }
	                }, accept: accept || '.*' }), _react2.default.createElement("input", { type: "submit", value: "提交" })), children);
	        }
	    }]);
	
	    return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _betterReduxForm = __webpack_require__(114);
	
	var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);
	
	var _actions = __webpack_require__(90);
	
	var _form = __webpack_require__(147);
	
	var _ModalFooter = __webpack_require__(146);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var BookMetaForm = function (_Component) {
	    _inherits(BookMetaForm, _Component);
	
	    function BookMetaForm(props) {
	        _classCallCheck(this, BookMetaForm);
	
	        return _possibleConstructorReturn(this, (BookMetaForm.__proto__ || Object.getPrototypeOf(BookMetaForm)).call(this, props));
	    }
	
	    _createClass(BookMetaForm, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var title = _props$fields.title;
	            var authors = _props$fields.authors;
	            var description = _props$fields.description;
	            var cover = _props$fields.cover;
	            var handleSubmit = _props.handleSubmit;
	            var closeModal = _props.closeModal;
	            var onSave = _props.onSave;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, __assign({ placeholder: "书名" }, title)), _react2.default.createElement(_form.Input, __assign({ placeholder: "作者" }, authors)), _react2.default.createElement(_form.Textarea, __assign({ placeholder: "描述" }, description)), _react2.default.createElement(_form.Input, __assign({ placeholder: "封面" }, cover)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(function (data) {
	                    onSave(data);
	                }), onCancel: closeModal }));
	        }
	    }]);
	
	    return BookMetaForm;
	}(_react.Component);
	BookMetaForm = __decorate([(0, _betterReduxForm2.default)({
	    form: 'bookMeta',
	    fields: ['title', 'authors', 'description', 'cover'],
	    destroyOnUnmount: true
	})], BookMetaForm);
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state;
	}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(BookMetaForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj8wYjc2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNWRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2NvbXBvbmVudHMvQm9va01ldGFGb3JtLnRzeCJdLCJuYW1lcyI6WyJzZWxlY3RvcnMiLCJNYW5hZ2VCb29rcyIsInN0b3JlIiwicXVlcnkiLCJkaXNwYXRjaCIsInBhZ2UiLCJwcm9wcyIsImlkIiwiYm9va05hbWUiLCJvcGVuQ29uZmlybU1vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwib25Db25maXJtIiwiZGVsZXRlQm9vayIsInRoZW4iLCJjbG9zZUNvbmZpcm1Nb2RhbCIsInNlbmROb3RpZmljYXRpb24iLCJyZW1vdmVFbnRpdHkiLCJib29rSWQiLCJib29rRW50aXRpZXMiLCJvcGVuTW9kYWwiLCJjcmVhdGVFbGVtZW50Iiwib25TYXZlIiwiZWRpdEJvb2tNZXRhIiwiZGF0YSIsImxvYWRCb29rcyIsImNsb3NlTW9kYWwiLCJib29rTWV0YSIsImluaXRpYWxpemVGb3JtIiwiYXV0aG9ycyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiam9pbiIsImRlc2NyaXB0aW9uIiwiY292ZXIiLCJyb3V0aW5nIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwib25Sb3V0aW5nQ2hhbmdlIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwibG9hZFVzZXJzIiwiYm9va0xpc3ROZXdlc3QiLCJib2R5Q2xhc3MiLCJwYWdpbmF0aW9uIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ1cmwiLCJhY2NlcHQiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29sb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJhdXRob3IiLCJkYXRlQ3JlYXRlZCIsIkRhdGUiLCJ2YWx1ZU9mIiwiZm9ybWF0IiwiaGVhZGVyIiwia2V5IiwiYWN0aW9ucyIsImZuIiwicm93IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImN1cnJlbnRQYWdlIiwiY29tbW9uIiwiZW50aXRpZXMiLCJib29rcyIsInVuZGVmaW5lZCIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJzdHlsZXMiLCJyZXF1aXJlIiwiSW5mb1RhYmxlIiwiZW5hYmxlVG9vbHRpcCIsIm9wZXJhdGlvbkxhYmVsIiwia2V5cyIsImNsYXNzTmFtZSIsInN0eWxlTmFtZSIsImluZGV4IiwidG9TdHJpbmciLCJhY3Rpb24iLCJpbmRleDIiLCJvbkNsaWNrIiwiQ29udGVudFBhZ2UiLCJjaGlsZHJlbiIsInBhZ2luYXRpb25MaW5rcyIsIm5leHQiLCJsYXN0IiwiYWxsIiwiY3VycmVudCIsInBhdGhuYW1lIiwiUGFnaW5hdG9yIiwicGFnZU51bSIsInVybFN0eWxlIiwicXVlcnlQYXJ0IiwicGFyc2VVcmxlbmNvZGVkIiwib21pdCIsInJhbmdlIiwidG90YWxSYW5nZUVuZEluZGV4IiwiY3VycmVudEluZGV4IiwicGFyc2VJbnQiLCJyYW5nZVN0YXJ0SW5kZXgiLCJyYW5nZUVuZEluZGV4IiwibGVmdFNwcmVhZCIsInJpZ2h0U3ByZWFkIiwicGFnZXMiLCJFcnJvciIsImNvbnNvbGUiLCJjb25jYXQiLCJpc0N1cnJlbnQiLCJzcGQiLCJpc1NwcmVhZCIsInRvIiwicGFyc2VVcmwiLCJfX2Fzc2lnbiIsInQiLCJzIiwibiIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJGaWxlVXBsb2FkZXIiLCJ2YWx1ZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJiaW5kIiwiZSIsIm9uQ29tcGxldGUiLCJmaWxlcyIsIkZvcm1EYXRhIiwiZWFjaCIsImFwcGVuZCIsImFqYXgiLCJ0eXBlIiwiY2FjaGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwiY29tcGxldGUiLCJkYXRhMiIsInN1Y2Nlc3MiLCJ0ZXh0U3RhdHVzIiwianFYSFIiLCJlcnJvclRocm93biIsInJlc3BvbnNlSlNPTiIsIm5vQWpheCIsIm11bHRpcGxlIiwiZmlsZUlucHV0IiwiY2xpY2siLCJkaXNwbGF5IiwibWV0aG9kIiwiZW5jVHlwZSIsInJlZiIsIm9uQ2hhbmdlIiwiQm9va01ldGFGb3JtIiwiZmllbGRzIiwiaGFuZGxlU3VibWl0IiwicGxhY2Vob2xkZXIiLCJvbkNhbmNlbCIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7S0FBWUEsUzs7QUFDWjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztLQUNNQyxXOzs7Ozt5Q0FDaUM7QUFBQSxpQkFBaEJDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLGlCQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQy9CLG9CQUFPRCxNQUFNRSxRQUFOLENBQWUsd0JBQVU7QUFDNUJDLHVCQUFNRixNQUFNRTtBQURnQixjQUFWLENBQWYsQ0FBUDtBQUdIOzs7QUFDRCwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNUQSxLQURTO0FBRWxCOzs7O29DQUNVQyxFLEVBQUlDLFEsRUFBVTtBQUFBOztBQUNyQixrQkFBS0YsS0FBTCxDQUFXRyxnQkFBWCxDQUE0QjtBQUN4QkMsd0JBQU8sTUFEaUI7QUFFeEJDLHVEQUFnQkgsUUFBaEIsV0FGd0I7QUFHeEJJLDRCQUFXLHFCQUFNO0FBQ2IsbUNBQUlDLFVBQUosQ0FBZU4sRUFBZixFQUFtQk8sSUFBbkIsQ0FBd0IsZUFBTztBQUMzQixnQ0FBS1IsS0FBTCxDQUFXUyxpQkFBWDtBQUNBLGdDQUFLVCxL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OztBQUVMLG9CQUFRLGdCQUFNRCxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQ0osZ0JBQU1BLGFBQU4sY0FBMkJrSCxTQUFTLEVBQUU0QyxhQUFhLElBQWYsRUFBVCxFQUFnQ3pLLEtBQWhDLENBQTNCLENBREksRUFFSixnQkFBTVcsYUFBTixjQUEyQmtILFNBQVMsRUFBRTRDLGFBQWEsSUFBZixFQUFULEVBQWdDdEosT0FBaEMsQ0FBM0IsQ0FGSSxFQUdKLGdCQUFNUixhQUFOLGlCQUE4QmtILFNBQVMsRUFBRTRDLGFBQWEsSUFBZixFQUFULEVBQWdDakosV0FBaEMsQ0FBOUIsQ0FISSxFQUlKLGdCQUFNYixhQUFOLGNBQTJCa0gsU0FBUyxFQUFFNEMsYUFBYSxJQUFmLEVBQVQsRUFBZ0NoSixLQUFoQyxDQUEzQixDQUpJLEVBS0osZ0JBQU1kLGFBQU4sd0JBQWlDLEVBQUVULFdBQVdzSyxhQUFhLGdCQUFRO0FBQzNENUosNEJBQU9FLElBQVA7QUFDSCxrQkFGeUMsQ0FBYixFQUV6QjRKLFVBQVUxSixVQUZlLEVBQWpDLENBTEksQ0FBUjtBQVFIO0FBZEQ7O0FBQUE7QUFBQSxvQkFBSjtBQWdCQXNKLGdCQUFlbkcsV0FBVyxDQUN0QiwrQkFBSztBQUNEd0csV0FBTSxVQURMO0FBRURKLGFBQVEsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixhQUFyQixFQUFvQyxPQUFwQyxDQUZQO0FBR0RLLHVCQUFrQjtBQUhqQixFQUFMLENBRHNCLENBQVgsRUFNWk4sWUFOWSxDQUFmO21CQU9lLHlCQUFRO0FBQUEsWUFBUzNHLEtBQVQ7QUFBQSxFQUFSLEVBQXdCLEVBQUVyRCwyQ0FBRixFQUFvQlUsK0JBQXBCLEVBQXhCLEVBQTBEc0osWUFBMUQsQyIsImZpbGUiOiIxMy4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwianF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAyMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMyAxNVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcic7XG5pbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5mb1RhYmxlJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgbG9hZEJvb2tzLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCwgcmVtb3ZlRW50aXR5LCBsb2FkVXNlcnMsIG9wZW5Nb2RhbCwgaW5pdGlhbGl6ZUZvcm0sIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRlbnRQYWdlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuLi8uLi9lbGVtZW50cy9GaWxlVXBsb2FkZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgQm9va01ldGFGb3JtIGZyb20gJy4vY29tcG9uZW50cy9Cb29rTWV0YUZvcm0nO1xuY2xhc3MgTWFuYWdlQm9va3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBmZXRjaERhdGEoeyBzdG9yZSwgcXVlcnkgfSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2gobG9hZEJvb2tzKHtcbiAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2VcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGRlbGV0ZUJvb2soaWQsIGJvb2tOYW1lKSB7XG4gICAgICAgIHRoaXMucHJvcHMub3BlbkNvbmZpcm1Nb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ehruiupOWIoOmZpCcsXG4gICAgICAgICAgICBjb250ZW50OiBg5bCG5Yig6Zmk44CKJHtib29rTmFtZX3jgItgLFxuICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXBpLmRlbGV0ZUJvb2soaWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNvbmZpcm1Nb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUVudGl0eSgnYm9va3MnLCBpZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlZGl0Qm9va01ldGEoYm9va0lkKSB7XG4gICAgICAgIGNvbnN0IHsgYm9va0VudGl0aWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnByb3BzLm9wZW5Nb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e8lui+keS5puexjeS/oeaBrycsXG4gICAgICAgICAgICBjb250ZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tNZXRhRm9ybSwgeyBvblNhdmU6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcGkuZWRpdEJvb2tNZXRhKGJvb2tJZCwgZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm9va3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfkv67mlLnmiJDlip/vvIEnLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IH0pXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBib29rTWV0YSA9IGJvb2tFbnRpdGllc1tib29rSWRdO1xuICAgICAgICB0aGlzLnByb3BzLmluaXRpYWxpemVGb3JtKCdib29rTWV0YScsIHtcbiAgICAgICAgICAgIHRpdGxlOiBib29rTWV0YS50aXRsZSxcbiAgICAgICAgICAgIGF1dGhvcnM6IGJvb2tNZXRhLmF1dGhvcnMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKS5qb2luKCcsICcpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGJvb2tNZXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY292ZXI6IGJvb2tNZXRhLmNvdmVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkQm9va3MocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKHtcbiAgICAgICAgICAgIHBhZ2U6IHByb3BzLnJvdXRpbmcucXVlcnkucGFnZSB8fCAnMScsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGhlbHBlcnMub25Sb3V0aW5nQ2hhbmdlKHJvdXRpbmcgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgdGhpcy5sb2FkQm9va3MobmV4dFByb3BzKTtcbiAgICAgICAgfSkobmV4dFByb3BzLCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZEJvb2tzKCk7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZFVzZXJzKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGJvb2tMaXN0TmV3ZXN0ID0gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA/IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgOiBudWxsO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG9jQ29udGFpbmVyLCB7IHRpdGxlOiBcIuS5puexjeeuoeeQhlwiLCBib2R5Q2xhc3M6IFwibWFuYWdlLWJvb2tzXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudFBhZ2UsIHsgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYm9va3MnXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZVVwbG9hZGVyLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogMjAgfSwgdXJsOiBcIi9hcGkvYm9va3NcIiwgYWNjZXB0OiBcIi50eHQsLmVwdWJcIiwgbmFtZTogXCJib29rLWZpbGVcIiwgb25TdWNjZXNzOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm9va3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNvbG9yOiBcImJsdWVcIiB9LCBcIlxcdTZERkJcXHU1MkEwXFx1NEU2NlxcdTdDNERcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb1RhYmxlLCB7IGRhdGE6IGJvb2tMaXN0TmV3ZXN0Lm1hcChpdGVtID0+IChPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzOiBpdGVtLmF1dGhvcnMgPyBpdGVtLmF1dGhvcnMubWFwKGF1dGhvciA9PiBhdXRob3IubmFtZSkuam9pbignLCAnKSA6ICfmnKrnn6XkvZzogIUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IG1vbWVudChuZXcgRGF0ZShpdGVtLmRhdGVDcmVhdGVkKS52YWx1ZU9mKCkpLmZvcm1hdCgnWVlZWeW5tE1N5pyIRETml6UnKVxuICAgICAgICAgICAgICAgICAgICB9KSkpLCBoZWFkZXI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0lEJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Lmm5ZCNJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2RhdGVDcmVhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65pel5pyfJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2F1dGhvcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfkvZzogIUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sIGFjdGlvbnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQm9vayhyb3cuaWQsIHJvdy50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfnvJbovpEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiByb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRCb29rTWV0YShyb3cuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dIH0pKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IHNlbGVjdG9ycy5jb21tb24uY3VycmVudFBhZ2UoJ2Jvb2tzJykoc3RhdGUpO1xuICAgIGNvbnN0IGJvb2tFbnRpdGllcyA9IHNlbGVjdG9ycy5jb21tb24uZW50aXRpZXMoJ2Jvb2tzJykoc3RhdGUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIOWmguaenOesrOS4gOS4quWPguaVsOS8oCBudWxsIOS8muimhueblum7mOiupOWPguaVsFxuICAgICAgICBib29rTGlzdE5ld2VzdDogc2VsZWN0b3JzLmJvb2tzKHVuZGVmaW5lZCwgY3VycmVudFBhZ2UpKHN0YXRlKSxcbiAgICAgICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLFxuICAgICAgICBib29rRW50aXRpZXNcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9hZEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCwgcmVtb3ZlRW50aXR5LCBsb2FkVXNlcnMsIG9wZW5Nb2RhbCwgaW5pdGlhbGl6ZUZvcm0sIGNsb3NlTW9kYWwgfSkoTWFuYWdlQm9va3MpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4XG4gKiovIiwiaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuL0luZm9UYWJsZSc7XG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5mb1RhYmxlLnNjc3MnKTtcbmxldCBJbmZvVGFibGUgPSBjbGFzcyBJbmZvVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBoZWFkZXIsIGRhdGEsIGVuYWJsZVRvb2x0aXAsIHN0eWxlLCBhY3Rpb25zLCBvcGVyYXRpb25MYWJlbCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgYWN0aW9ucyA9IGFjdGlvbnMgfHwgW107XG4gICAgICAgIGlmICghaGVhZGVyKSB7XG4gICAgICAgICAgICBoZWFkZXIgPSAoZGF0YS5sZW5ndGggIT09IDAgJiYgXy5rZXlzKGRhdGFbMF0pLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdpbmZvLXRhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICdpbmZvLXRhYmxlLS1uby1oZWFkZXInOiAhaGVhZGVyXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IHN0eWxlTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogc3R5bGUgfHwge30gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLFxuICAgICAgICAgICAgICAgIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4IH0sIGl0ZW0ubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGVOYW1lOiBcImFjdGlvbnNcIiB9LCBvcGVyYXRpb25MYWJlbCB8fCAn5pON5L2cJykpKSlcbiAgICAgICAgICAgICAgICAgICAgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm1hcChoZWFkZXIsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IGtleToga2V5IH0sIHJvd1tpdGVtLmtleV0gJiYgcm93W2l0ZW0ua2V5XS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZU5hbWU6IFwiYWN0aW9uc1wiIH0sIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIGFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJhY3Rpb25cIiwga2V5OiBpbmRleDIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmZuKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBhY3Rpb24ubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSkpO1xuICAgICAgICAgICAgICAgIH0pKSkpO1xuICAgIH1cbn07XG5JbmZvVGFibGUgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEluZm9UYWJsZSk7XG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0luZm9UYWJsZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRkLCAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgdGgge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5pbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmluZm8tdGFibGVfQjdKWVUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGgge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgIG1heC13aWR0aDogMjUwcHg7IH1cXG5cXG4uYWN0aW9uc19wUl9OeiB7XFxuICBtaW4td2lkdGg6IDgwcHg7IH1cXG4gIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3kge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMUIyNjdGO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAgIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMmU0MGQyOyB9XFxuICAgIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6YWN0aXZlIHtcXG4gICAgICBjb2xvcjogIzA5MGQyYjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImluZm8tdGFibGVcIjogXCJpbmZvLXRhYmxlX0I3SllVXCIsXG5cdFwiaW5mby10YWJsZS0tbm8taGVhZGVyXCI6IFwiaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4XCIsXG5cdFwiYWN0aW9uc1wiOiBcImFjdGlvbnNfcFJfTnpcIixcblx0XCJhY3Rpb25cIjogXCJhY3Rpb25fM0RMS3lcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJpbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi9Db250ZW50UGFnZSc7XG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCByb3V0aW5nLCBwYWdpbmF0aW9uTGlua3M6IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBhbGwgPSBsYXN0ICYmIGxhc3QucGFnZSB8fCAxO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbmV4dFxuICAgICAgICAgICAgPyBuZXh0LnBhZ2UgLSAxXG4gICAgICAgICAgICA6IGFsbDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdG9yLCB7IGFsbDogYWxsLCBjdXJyZW50OiBjdXJyZW50LCB1cmw6IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRpbmcucGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiByb3V0aW5nLnF1ZXJ5IHx8IHt9XG4gICAgICAgICAgICAgICAgfSB9KSkpO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgbmFtZSwga2V5IH0gfSA9IG93blByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyB8fCB7fSxcbiAgICAgICAgcGFnaW5hdGlvbkxpbmtzOiBzZWxlY3RvcnMuY29tbW9uLnBhZ2luYXRpb25MaW5rcyhuYW1lLCBrZXkpKHN0YXRlKVxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHt9KShDb250ZW50UGFnZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcic7XG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9QYWdpbmF0b3Iuc2NzcycpO1xubGV0IFBhZ2luYXRvciA9IGNsYXNzIFBhZ2luYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBwYXJzZVVybChwYXRobmFtZSwgcXVlcnksIHBhZ2VOdW0pIHtcbiAgICAgICAgbGV0IHVybFN0eWxlID0gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICAgICAgICA6ICdxdWVyeSc7XG4gICAgICAgIGlmICh1cmxTdHlsZSA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChfLm9taXQocXVlcnksIFsncGFnZSddKSk7XG4gICAgICAgICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtxdWVyeVBhcnQgPyBgPyR7cXVlcnlQYXJ0fSZgIDogJz8nfXBhZ2U9JHtwYWdlTnVtfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChxdWVyeSk7XG4gICAgICAgIHJldHVybiBgJHtwYXRobmFtZX0vcGFnZS8ke3BhZ2VOdW19PyR7cXVlcnlQYXJ0fWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLnByb3BzLnJhbmdlID8gdGhpcy5wcm9wcy5yYW5nZSA6IDM7XG4gICAgICAgIGNvbnN0IHRvdGFsUmFuZ2VFbmRJbmRleCA9IHRoaXMucHJvcHMuYWxsIC0gMTtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50KSAtIDE7XG4gICAgICAgIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50SW5kZXggLSByYW5nZTtcbiAgICAgICAgbGV0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50SW5kZXggKyByYW5nZTtcbiAgICAgICAgbGV0IGxlZnRTcHJlYWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJpZ2h0U3ByZWFkID0gZmFsc2U7XG4gICAgICAgIGxldCBwYWdlcyA9IFtdO1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy51cmw7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hbGwgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FsbCDlv4XpobvkuLogbnVtYmVyIOexu+Wei++8gScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmqjOivgVxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRJbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOmhteeggeW/hemhu+S4uuaVsOWtl++8jOWNtOW+l+WIsCAke3R5cGVvZiBjdXJyZW50SW5kZXh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IHJhbmdlRW5kSW5kZXggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6aG156CB5LiN6IO95aSn5LqO5omA5pyJ6aG16Z2i5pWw55uu5oiW5bCP5LqOIDHvvIEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2UgKiAyICsgMSA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIOaAu+mVv+W6puWwj+S6jiByYW5nZSDnm7TlvoRcbiAgICAgICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXg7XG4gICAgICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5aSE55CG5Y+z5L6n5rqi5Ye6XG4gICAgICAgICAgICBpZiAocmFuZ2VFbmRJbmRleCA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4O1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleCAtIChyYW5nZSAqIDIgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJpZ2h0U3ByZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHJhbmdlICogMiArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0U3ByZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2VTdGFydEluZGV4OyBpIDw9IHJhbmdlRW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogaSArIDEsXG4gICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudDogaSA9PT0gY3VycmVudEluZGV4XG4gICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBzcHJlYWRcbiAgICAgICAgaWYgKGxlZnRTcHJlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcGFnZXMgPSBzcGQuY29uY2F0KHBhZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRTcHJlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IHRvdGFsUmFuZ2VFbmRJbmRleCArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoc3BkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMuYWxsICE9PSAxICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInBhZ2luYXRvclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXgsIHN0eWxlTmFtZTogXCJwYWdlLW51bS0tY3VycmVudFwiIH0sIHBhZ2UucGFnZU51bSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc1NwcmVhZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXgsIHN0eWxlTmFtZTogXCJwYWdlLXNwcmVhZFwiIH0sIFwiLi4uXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdHlsZU5hbWU6IFwicGFnZS1udW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IHRoaXMucGFyc2VVcmwodXJsLnBhdGhuYW1lLCB1cmwucXVlcnksIHBhZ2UucGFnZU51bSkgfSwgcGFnZS5wYWdlTnVtKSkpO1xuICAgICAgICAgICAgfSkpKSkpO1xuICAgIH1cbn07XG5QYWdpbmF0b3IgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIFBhZ2luYXRvcik7XG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9QYWdpbmF0b3Iuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2Utc3ByZWFkXzJJTkhVLCAucGFnZS1udW1fMm9QUVUgYSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtaW4td2lkdGg6IDM3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnBhZ2luYXRvcl8xUkhBbSB7XFxuICBtYXJnaW46IDIwcHggMDsgfVxcblxcbi5wYWdlLXNwcmVhZF8ySU5IVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ucGFnZS1udW1fMm9QUVUsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgM3B4OyB9XFxuICAucGFnZS1udW1fMm9QUVUgYTpob3ZlciwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZS1zcHJlYWRcIjogXCJwYWdlLXNwcmVhZF8ySU5IVVwiLFxuXHRcInBhZ2UtbnVtXCI6IFwicGFnZS1udW1fMm9QUVVcIixcblx0XCJwYWdlLW51bS0tY3VycmVudFwiOiBcInBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FXCIsXG5cdFwicGFnaW5hdG9yXCI6IFwicGFnaW5hdG9yXzFSSEFtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibW9tZW50XCJcbiAqKiBtb2R1bGUgaWQgPSAzNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJpbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gJy4vRmlsZVVwbG9hZGVyJztcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL2luZGV4LnRzXG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmNsYXNzIEZpbGVVcGxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWxlQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZUZpbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7IHVybCwgb25Db21wbGV0ZSwgb25TdWNjZXNzLCBvbkVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAkLmVhY2goZmlsZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgLy8g5aaC5p6c6L+Z5LmI6K6+572uIGNvbnRlbnRUeXBlIOS8muWvvOiHtOS4jeWtmOWcqCBib3VuZGFyeSDnmoTpl67popgsIOmcgOimgeiuvue9ruS4uiBmYWxzZVxuICAgICAgICAgICAgLy8gY29udGVudFR5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBkYXRhMiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZShkYXRhMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhMiwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICAgICAgICBpZiAob25TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhkYXRhMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihqcVhIUi5yZXNwb25zZUpTT04pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBhY2NlcHQsIG5vQWpheCwgY2hpbGRyZW4sIG5hbWUsIG11bHRpcGxlLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgLy8g5aaC5p6c6aG16Z2i5LiK5pyJ5Lik5Liq5LiK5Lyg57uE5Lu25Y+v6IO95Lya5Ye66ZSZXG4gICAgICAgIC8vIGlucHV0IHZhbHVlIOiuvuS4uuepuuS8muS9v+W+l+avj+asoemAieS4reaWh+S7tuWQjumDveinpuWPkSBvbkNoYW5nZVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmlsZS10cmlnZ2VyXCIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbm9BamF4KSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5maWxlSW5wdXQpLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgc3R5bGU6IF9fYXNzaWduKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgfSwgc3R5bGUpIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogdXJsLCBtZXRob2Q6IFwicG9zdFwiLCBlbmNUeXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiwgc3R5bGU6IG5vQWpheCA/IHt9IDogeyBkaXNwbGF5OiAnbm9uZScgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IG11bHRpcGxlOiBtdWx0aXBsZSwgdHlwZTogXCJmaWxlXCIsIG5hbWU6IG5hbWUgfHwgJ2ZpbGUnLCBpZDogXCJ1cGxvYWQtZmlsZVwiLCB2YWx1ZTogbm9BamF4ID8gdW5kZWZpbmVkIDogJycsIHJlZjogcmVmID0+IHsgdGhpcy5maWxlSW5wdXQgPSByZWY7IH0sIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9BamF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVGaWxlQ2hhbmdlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBhY2NlcHQ6IGFjY2VwdCB8fCAnLionIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIuaPkOS6pFwiIH0pKSxcbiAgICAgICAgICAgIGNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvRmlsZVVwbG9hZGVyLnRzeFxuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZm9ybSBmcm9tICdiZXR0ZXItcmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBJbnB1dCwgVGV4dGFyZWEgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Nb2RhbC9Nb2RhbEZvb3Rlcic7XG5sZXQgQm9va01ldGFGb3JtID0gY2xhc3MgQm9va01ldGFGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWVsZHM6IHsgdGl0bGUsIGF1dGhvcnMsIGRlc2NyaXB0aW9uLCBjb3ZlciB9LCBoYW5kbGVTdWJtaXQsIGNsb3NlTW9kYWwsIG9uU2F2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuS5puWQjVwiIH0sIHRpdGxlKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuS9nOiAhVwiIH0sIGF1dGhvcnMpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dGFyZWEsIF9fYXNzaWduKHsgcGxhY2Vob2xkZXI6IFwi5o+P6L+wXCIgfSwgZGVzY3JpcHRpb24pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9fYXNzaWduKHsgcGxhY2Vob2xkZXI6IFwi5bCB6Z2iXCIgfSwgY292ZXIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxGb290ZXIsIHsgb25Db25maXJtOiBoYW5kbGVTdWJtaXQoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9KSwgb25DYW5jZWw6IGNsb3NlTW9kYWwgfSkpKTtcbiAgICB9XG59O1xuQm9va01ldGFGb3JtID0gX19kZWNvcmF0ZShbXG4gICAgZm9ybSh7XG4gICAgICAgIGZvcm06ICdib29rTWV0YScsXG4gICAgICAgIGZpZWxkczogWyd0aXRsZScsICdhdXRob3JzJywgJ2Rlc2NyaXB0aW9uJywgJ2NvdmVyJ10sXG4gICAgICAgIGRlc3Ryb3lPblVubW91bnQ6IHRydWVcbiAgICB9KVxuXSwgQm9va01ldGFGb3JtKTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIHsgc2VuZE5vdGlmaWNhdGlvbiwgY2xvc2VNb2RhbCB9KShCb29rTWV0YUZvcm0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvY29tcG9uZW50cy9Cb29rTWV0YUZvcm0udHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==