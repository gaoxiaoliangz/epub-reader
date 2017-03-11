exports.ids = [3];
exports.modules = {

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _actions = __webpack_require__(13);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _BookListSection = __webpack_require__(326);

var _BookListSection2 = _interopRequireDefault(_BookListSection);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _form = __webpack_require__(84);

var _layout = __webpack_require__(47);

var _AppHome = __webpack_require__(401);

var _AppHome2 = _interopRequireDefault(_AppHome);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppHome = class AppHome extends _react.Component {
    // static fetchData({store}) {
    //   return store.dispatch(loadBooks())
    // }
    constructor(props) {
        super(props);
        this.state = {
            showRecentReading: false
        };
    }
    componentWillMount() {
        this.props.loadBooks();
        // this.props.fetchCollections()
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.session.isFetching && !nextProps.session.isFetching) {
            if (nextProps.session.user.role !== 'visitor') {
                this.setState({
                    showRecentReading: true
                });
            }
        }
    }
    render() {
        var _props = this.props;
        let newestBooks = _props.newestBooks,
            isBooksFetching = _props.isBooksFetching;

        return _react2.default.createElement(_DocContainer2.default, { bodyClass: "home" }, this.props.session.user.role === 'visitor' && this.props.session.isFetching === false && _react2.default.createElement("div", { styleName: "hero-image" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "logo" }, "Readr"), _react2.default.createElement("h1", { styleName: "page-title" }, "\u65B0\u7684\u9605\u8BFB\u4F53\u9A8C"), _react2.default.createElement(_form.Button, { to: "/signup" }, "\u73B0\u5728\u52A0\u5165"))), _react2.default.createElement(_layout.Container, null, _react2.default.createElement(_BookListSection2.default, { bookEntities: newestBooks.slice(0, 6), title: "新书速递", moreLink: "/browse", isFetching: isBooksFetching })));
    }
};
AppHome = __decorate([(0, _reactCssModules2.default)(_AppHome2.default)], AppHome);
function mapStateToProps(state, ownProps) {
    return {
        newestBooks: selectors.books(undefined, '1')(state),
        isBooksFetching: selectors.common.isPaginationFetching('books')(state),
        session: state.session
    };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, fetchCollections: _actions.fetchCollections, sendNotification: _actions.sendNotification })(AppHome);

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _Loading = __webpack_require__(311);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let Loading = class Loading extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            dynamicText: ''
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.dynamicText.length === 3) {
                this.setState({ dynamicText: '' });
            } else {
                this.setState({
                    dynamicText: this.state.dynamicText + '.'
                });
            }
        }, 500);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        var _props = this.props;
        const text = _props.text,
              center = _props.center;
        const dynamicText = this.state.dynamicText;

        const wrapClass = (0, _classnames2.default)({
            'loading-wrap--center': center,
            'loading-wrap': !center
        });
        return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text + dynamicText));
    }
};
Loading = __decorate([(0, _reactCssModules2.default)(_Loading2.default)], Loading);
Loading['defaultProps'] = {
    text: '加载中'
};
exports.default = Loading;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loading = __webpack_require__(308);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loading2.default;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".text-loading_3Q6vh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3Q6vh {\n  margin: 30px 0;\n  display: inline-block; }\n\n.loading-wrap_7G2oJ {\n  text-align: left; }\n\n.loading-wrap--center_3AyTV {\n  text-align: center; }\n", ""]);

// exports
exports.locals = {
	"text-loading": "text-loading_3Q6vh",
	"loading-wrap": "loading-wrap_7G2oJ",
	"loading-wrap--center": "loading-wrap--center_3AyTV"
};

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(310);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Loading.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Loading.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _BookInfoPopup = __webpack_require__(315);

var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Book = __webpack_require__(322);

var _Book2 = _interopRequireDefault(_Book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let Book = class Book extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }
    showPopup() {
        this.setState({
            showPopup: true
        });
    }
    hidePopup() {
        this.setState({
            showPopup: false
        });
    }
    render() {
        var _props = this.props;
        const showDesc = _props.showDesc,
              description = _props.description,
              cover = _props.cover;

        return _react2.default.createElement("div", { onMouseEnter: this.showPopup, onMouseLeave: this.hidePopup, styleName: "book--card" }, _react2.default.createElement(_reactRouter.Link, { to: '/book/' + this.props.id }, cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { src: this.props.cover })), _react2.default.createElement("div", { styleName: "book-meta" }, _react2.default.createElement("span", { title: this.props.title, styleName: "book-name" }, this.props.title || '无标题'), _react2.default.createElement("span", { styleName: "book-author" }, this.props.authors || '作者不详'), showDesc && _react2.default.createElement("span", { styleName: "book-desc" }, description || '空'))), this.state.showPopup && !this.props.disablePopup && _react2.default.createElement(_BookInfoPopup2.default, { bookId: this.props.id, title: this.props.title, author: this.props.authors, description: this.props.description }));
    }
};
Book = __decorate([(0, _reactCssModules2.default)(_Book2.default, {
    allowMultiple: true
})], Book);
exports.default = Book;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Book = __webpack_require__(312);

var _Book2 = _interopRequireDefault(_Book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Book2.default;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(84);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(323);
let BookInfoPopup = class BookInfoPopup extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var _props = this.props;
        const author = _props.author,
              title = _props.title,
              description = _props.description,
              bookId = _props.bookId;

        return _react2.default.createElement("div", { styleName: "popup" }, _react2.default.createElement("div", { styleName: "header" }, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement("p", { styleName: "author" }, author), _react2.default.createElement(_form.Button, { color: "blue", to: '/viewer/book/' + bookId }, "\u9605\u8BFB")), _react2.default.createElement("div", { styleName: "description" }, _react2.default.createElement("p", null, description)));
    }
};
BookInfoPopup = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookInfoPopup);
exports.default = BookInfoPopup;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BookInfoPopup = __webpack_require__(314);

var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BookInfoPopup2.default;

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Book = __webpack_require__(313);

var _Book2 = _interopRequireDefault(_Book);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(324);
let BookList = class BookList extends _react.Component {
    render() {
        return _react2.default.createElement("ul", { styleName: "book-list", className: "clearfix" }, this.props.bookEntities && this.props.bookEntities.length !== 0 ? this.props.bookEntities.map((book, index) => {
            const title = book.title,
                  authors = book.authors,
                  description = book.description,
                  cover = book.cover;

            return _react2.default.createElement("li", { key: index }, _react2.default.createElement(_Book2.default, { id: book.id, title: title || '无标题', authors: authors && authors.map(author => author.name).join(', ') || '未知作者', description: description, cover: cover, disablePopup: true }));
        }) : _react2.default.createElement("li", null, "\u6682\u65E0\u8BB0\u5F55"));
    }
};
BookList = __decorate([(0, _reactCssModules2.default)(styles)], BookList);
exports.default = BookList;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BookList = __webpack_require__(316);

var _BookList2 = _interopRequireDefault(_BookList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BookList2.default;

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".meta-item_29Oj5 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.book_1Mhus {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_1Mhus a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_1Mhus a:hover img {\n      opacity: .96; }\n    .book_1Mhus a:active img {\n      opacity: .8; }\n\n.book-meta_2_-SN {\n  background: transparent; }\n\n.meta-item_29Oj5 {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2xm-_ {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_2uQ57 {\n  color: #999; }\n\n.book-cover_2Njlt {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(321) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_2Njlt img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_2Njlt:hover {\n    top: -7px; }\n\n.book-desc_qmKU9 {\n  color: #999; }\n\n.book--card_SUxdP {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n  float: none;\n  height: 100px; }\n  .book--card_SUxdP a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_SUxdP a:hover img {\n      opacity: 1; }\n    .book--card_SUxdP a:active img {\n      opacity: 1; }\n  .book--card_SUxdP .book-cover_2Njlt {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_SUxdP .book-cover_2Njlt:hover {\n      top: 0; }\n    .book--card_SUxdP .book-cover_2Njlt img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_SUxdP .book-meta_2_-SN {\n    float: none; }\n  .book--card_SUxdP .meta-item_29Oj5 {\n    width: auto; }\n", ""]);

// exports
exports.locals = {
	"meta-item": "meta-item_29Oj5",
	"book": "book_1Mhus",
	"book-meta": "book-meta_2_-SN",
	"book-name": "book-name_2xm-_ meta-item_29Oj5",
	"book-author": "book-author_2uQ57 meta-item_29Oj5",
	"book-cover": "book-cover_2Njlt",
	"book-desc": "book-desc_qmKU9",
	"book--card": "book--card_SUxdP book_1Mhus"
};

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".title_r5Pz7 {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.popup_2QR4_ {\n  position: absolute;\n  z-index: 999;\n  left: 134px;\n  top: 0;\n  width: 300px;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);\n  padding: 20px 20px 0;\n  border: 1px solid #ddd; }\n\n.header_2DiuQ {\n  margin-bottom: 20px; }\n\n.title_r5Pz7 {\n  margin: 30px 0 10px 0; }\n\n.author_1IeQO {\n  font-size: 0.9rem;\n  margin: 0 0 2em 0; }\n\n.description_i8oqq {\n  line-height: 1.6;\n  padding: 10px 0;\n  border-top: 1px solid #ddd; }\n", ""]);

// exports
exports.locals = {
	"title": "title_r5Pz7",
	"popup": "popup_2QR4_",
	"header": "header_2DiuQ",
	"author": "author_1IeQO",
	"description": "description_i8oqq"
};

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".book-list_1On2y {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_1On2y li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n    @media (max-width: 540px) {\n      .book-list_1On2y li {\n        width: 100%; } }\n", ""]);

// exports
exports.locals = {
	"book-list": "book-list_1On2y"
};

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/shadow.471ea37f96.png";

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(318);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Book.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Book.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(319);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookInfoPopup.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookInfoPopup.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(320);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookList.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookList.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _BookList = __webpack_require__(317);

var _BookList2 = _interopRequireDefault(_BookList);

var _Loading = __webpack_require__(309);

var _Loading2 = _interopRequireDefault(_Loading);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(328);
let BookListSection = class BookListSection extends _react.Component {
    render() {
        var _props = this.props;
        const isFetching = _props.isFetching,
              title = _props.title,
              moreLink = _props.moreLink,
              bookEntities = _props.bookEntities;

        return _react2.default.createElement("div", { styleName: "book-list-section" }, this.props.title && (moreLink ? _react2.default.createElement("h2", { styleName: "section-title" }, _react2.default.createElement(_reactRouter.Link, { to: moreLink }, title, _react2.default.createElement(_Icon2.default, { name: "arrowRight", size: 20 }))) : _react2.default.createElement("h2", { styleName: "section-title" }, title)), isFetching && bookEntities.length === 0 ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement(_BookList2.default, { bookEntities: bookEntities }));
    }
};
BookListSection = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookListSection);
exports.default = BookListSection;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BookListSection = __webpack_require__(325);

var _BookListSection2 = _interopRequireDefault(_BookListSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BookListSection2.default;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".section-title_pTGd6 {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.book-list-section_2tEA- {\n  position: relative; }\n\n.more_1c3vt {\n  position: absolute;\n  right: 0;\n  top: 0;\n  line-height: 32px; }\n\n.section-title_pTGd6 {\n  margin-bottom: 10px; }\n  .section-title_pTGd6 a {\n    color: #333; }\n    .section-title_pTGd6 a:hover {\n      color: #666; }\n", ""]);

// exports
exports.locals = {
	"section-title": "section-title_pTGd6",
	"book-list-section": "book-list-section_2tEA-",
	"more": "more_1c3vt"
};

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(327);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookListSection.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookListSection.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".page-title_24K24 {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.hero-image_3QjtQ {\n  text-align: center;\n  height: 500px; }\n\n.logo_aaCgX {\n  text-align: center;\n  padding-top: 150px;\n  font-size: 1.2rem; }\n\n.btn_jz_rk {\n  margin: 0 auto; }\n\n.page-title_24K24 {\n  margin: 10px 0 20px;\n  font-size: 2rem; }\n", ""]);

// exports
exports.locals = {
	"page-title": "page-title_24K24",
	"hero-image": "hero-image_3QjtQ",
	"logo": "logo_aaCgX",
	"btn": "btn_jz_rk"
};

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(386);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./AppHome.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./AppHome.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.3.js.map