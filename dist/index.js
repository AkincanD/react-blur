"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProgressiveImage = function ProgressiveImage(_ref) {
  var render = _ref.render,
      uri = _ref.uri,
      placeholder = _ref.placeholder,
      initialBlur = _ref.initialBlur,
      timingFunction = _ref.timingFunction,
      transitionTime = _ref.transitionTime;

  var _useState = (0, _react.useState)(initialBlur),
      _useState2 = _slicedToArray(_useState, 2),
      blur = _useState2[0],
      setBlur = _useState2[1];

  var _useState3 = (0, _react.useState)('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEXMzMzKUkQnAAAAH0lEQVRoQ+3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABy+M9HgAAAABJRU5ErkJggg=='),
      _useState4 = _slicedToArray(_useState3, 2),
      src = _useState4[0],
      setSrc = _useState4[1];

  var fetch = (0, _react.useCallback)(function () {
    var image = new Image();
    image.src = uri;
    image.addEventListener('load', function () {
      setSrc(uri);
      setBlur(0);
    }, false);
  }, [uri]);

  var getStyle = function getStyle() {
    return {
      filter: "blur(".concat(blur, "px)"),
      transition: "filter ".concat(transitionTime, "ms ").concat(timingFunction)
    };
  };

  return /*#__PURE__*/_react["default"].createElement(_reactVisibilitySensor["default"], {
    offset: {
      bottom: -300,
      top: -300,
      left: -300,
      right: -300
    },
    partialVisibility: true
  }, function (_ref2) {
    var isVisible = _ref2.isVisible;

    if (isVisible && blur) {
      setSrc(placeholder);
      fetch();
    }

    return render(src, getStyle());
  });
};

ProgressiveImage.defaultProps = {
  transitionTime: 500,
  timingFunction: 'ease',
  initialBlur: 5
};
ProgressiveImage.propTypes = {
  transitionTime: _propTypes["default"].number,
  timingFunction: _propTypes["default"].string,
  initialBlur: _propTypes["default"].number,
  uri: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string.isRequired
};
var _default = ProgressiveImage;
exports["default"] = _default;