'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _react3 = require('muicss/react');

var _utils = require('utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Branding = function (_Component) {
  _inherits(Branding, _Component);

  function Branding() {
    _classCallCheck(this, Branding);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Branding).apply(this, arguments));
  }

  _createClass(Branding, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;
      var isAdmin = this.props.isAdmin ? isAdmin : 'false';

      return _react2.default.createElement(
        _react3.Appbar,
        { className: 'branding' },
        _react2.default.createElement(
          _react3.Container,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              { className: 'logo left' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'readr'
              )
            ),
            user.authed ? _react2.default.createElement(
              'ul',
              { className: "right mui-list--inline mui--text-body2" },
              isAdmin ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/console' },
                  'Admin console'
                )
              ) : null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/profile/' + user.username },
                  user.username
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/logout' },
                  '退出'
                )
              )
            ) : _react2.default.createElement(
              'ul',
              { className: "right mui-list--inline mui--text-body2" },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/signin' },
                  '登录'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/signup' },
                  '注册'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Branding;
}(_react.Component);

Branding.propTypes = {
  // user: React.PropTypes.object.isRequired
};

exports.default = Branding;
