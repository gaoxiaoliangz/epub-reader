'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectizeInput = function (_Component) {
  _inherits(SelectizeInput, _Component);

  function SelectizeInput(props) {
    _classCallCheck(this, SelectizeInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectizeInput).call(this, props));

    _this.state = {
      showOptions: false,
      focus: false,
      value: ''
    };
    return _this;
  }

  _createClass(SelectizeInput, [{
    key: 'addValue',
    value: function addValue(value) {
      var _this2 = this;

      var values = [].concat(_toConsumableArray(this.props.values), [value]);

      this.setState({
        showOptions: false,
        value: ''
      }, function () {
        _this2.props.onValuesChange(values);
      });
      this.getFocus();
    }
  }, {
    key: 'removeValue',
    value: function removeValue(targetIndex) {
      this.props.onValuesChange(this.props.values.filter(function (value, index) {
        return targetIndex !== index ? true : false;
      }));
      this.setState({
        showOptions: false,
        value: ''
      });
      this.getFocus();
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      if (e.keyCode === 8 && !this.state.value) {
        this.removeValue(this.props.values.length - 1);
      }
      if (e.keyCode === 13 && this.state.showOptions) {
        this.addValue(this.props.options[0]);
      }
    }
  }, {
    key: 'getFocus',
    value: function getFocus() {
      this.refs.input.focus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.value !== '') {
        this.setState({
          showOptions: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var value = this.state.value;
      var values = this.props.values;
      var options = this.props.options ? this.props.options : [];
      var _onChange = this.props.onChange ? this.props.onChange : null;
      var initialInputWidth = this.props.initialInputWidth ? this.props.initialInputWidth : '100%';
      var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : initialInputWidth;
      var placeholder = values.length > 0 ? '' : this.props.placeholder;
      var className = 'selectize-input' + (this.props.className ? ' ' + this.props.className : '') + (this.state.focus === true ? ' focus' : '') + (values.length === 0 ? ' empty' : '');

      return _react2.default.createElement(
        'div',
        { onClick: this.getFocus.bind(this), className: className },
        values.map(function (value, index) {
          return _react2.default.createElement(
            'span',
            { key: index, className: 'tag' },
            value,
            _react2.default.createElement(_Icon2.default, {
              size: "small",
              name: 'close-light',
              onClick: _this3.removeValue.bind(_this3, index)
            })
          );
        }),
        _react2.default.createElement('input', {
          style: { width: inputWidth },
          ref: 'input',
          value: value,
          placeholder: placeholder,
          onKeyDown: this.handleKeyPress.bind(this),
          onBlur: function onBlur() {
            _this3.setState({ focus: false });
          },
          onFocus: function onFocus() {
            _this3.setState({ focus: true });
          },
          onChange: function onChange(event) {
            _this3.setState({
              value: event.target.value
            });
            _onChange(event);
          }
        }),
        this.state.showOptions ? _react2.default.createElement(
          'ul',
          { className: 'query-results' },
          options.map(function (option, index) {
            return _react2.default.createElement(
              'li',
              { onClick: _this3.addValue.bind(_this3, option), key: index },
              option
            );
          })
        ) : null
      );
    }
  }]);

  return SelectizeInput;
}(_react.Component);

SelectizeInput.propTypes = {
  values: _react2.default.PropTypes.array.isRequired,
  onValuesChange: _react2.default.PropTypes.func.isRequired
};

exports.default = SelectizeInput;
