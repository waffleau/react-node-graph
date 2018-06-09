'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var NodeInputListItem = (function (_PureComponent) {
  _inherits(NodeInputListItem, _PureComponent);

  function NodeInputListItem(props) {
    _classCallCheck(this, NodeInputListItem);

    _get(Object.getPrototypeOf(NodeInputListItem.prototype), 'constructor', this).call(this, props);
    this.state = {
      hover: false
    };
  }

  _createClass(NodeInputListItem, [{
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      e.stopPropagation();
      e.preventDefault();

      this.props.onMouseUp(this.props.index);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver() {
      this.setState({ hover: true });
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut() {
      this.setState({ hover: false });
    }
  }, {
    key: 'noop',
    value: function noop(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var name = this.props.item.name;
      var hover = this.state.hover;

      return _react2['default'].createElement(
        'li',
        null,
        _react2['default'].createElement(
          'a',
          {
            onClick: function (e) {
              return _this.noop(e);
            },
            onMouseUp: function (e) {
              return _this.onMouseUp(e);
            },
            href: '#' },
          _react2['default'].createElement('i', {
            className: hover ? 'fa fa-circle-o hover' : 'fa fa-circle-o',
            onMouseOver: function () {
              _this.onMouseOver();
            },
            onMouseOut: function () {
              _this.onMouseOut();
            }
          }),
          name
        )
      );
    }
  }]);

  return NodeInputListItem;
})(_react.PureComponent);

exports['default'] = NodeInputListItem;
module.exports = exports['default'];