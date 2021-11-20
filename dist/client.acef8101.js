// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/chain/abstract_handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractHandler = /*#__PURE__*/function () {
  function AbstractHandler(operand) {
    _classCallCheck(this, AbstractHandler);

    this.operand = operand;
    this.next = null;
  }

  _createClass(AbstractHandler, [{
    key: "setNext",
    value: function setNext(next) {
      this.next = next;
      return this.next;
    }
  }, {
    key: "handleRequest",
    value: function handleRequest(request) {
      if (this.hasOperand()) {
        var result = this.operate(request);
        request.setResult(result);

        if (this.next) {
          this.next.handleRequest(request);
        }
      }
    }
  }, {
    key: "makeEquation",
    value: function makeEquation(request) {
      var desc = this.getEquation(request);
      request.appendEquation(desc);

      if (this.next) {
        this.next.makeEquation(request);
      }
    }
  }, {
    key: "getOperandValue",
    value: function getOperandValue() {
      return this.operand.getValue();
    }
  }, {
    key: "getOperandDesc",
    value: function getOperandDesc() {
      return this.hasOperand() ? this.operand.getDesc() : "";
    }
  }, {
    key: "operate",
    value: function operate(request) {
      throw new Error("implement this method");
    }
  }, {
    key: "getEquation",
    value: function getEquation(request) {
      throw new Error("implement this method");
    }
  }, {
    key: "hasOperand",
    value: function hasOperand() {
      if (this.operand !== null) {
        return true;
      }

      return false;
    }
  }, {
    key: "isOperation",
    value: function isOperation() {
      return false;
    }
  }, {
    key: "getOperand",
    value: function getOperand() {
      return this.operand;
    }
  }, {
    key: "setOperand",
    value: function setOperand(operand) {
      this.operand = operand;
    }
  }]);

  return AbstractHandler;
}();

exports.default = AbstractHandler;
},{}],"js/chain/operand_handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_handler = _interopRequireDefault(require("./abstract_handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OperandHandler = /*#__PURE__*/function (_AbstractHandler) {
  _inherits(OperandHandler, _AbstractHandler);

  var _super = _createSuper(OperandHandler);

  function OperandHandler(operand) {
    _classCallCheck(this, OperandHandler);

    return _super.call(this, operand);
  }

  _createClass(OperandHandler, [{
    key: "operate",
    value: function operate(request) {
      var value = this.getOperandValue();
      return value;
    }
  }, {
    key: "getEquation",
    value: function getEquation(request) {
      return this.getOperandDesc();
    }
  }]);

  return OperandHandler;
}(_abstract_handler.default);

exports.default = OperandHandler;
},{"./abstract_handler":"js/chain/abstract_handler.js"}],"js/operand/abstract_operand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractOperand = /*#__PURE__*/function () {
  function AbstractOperand(operand) {
    _classCallCheck(this, AbstractOperand);
  }

  _createClass(AbstractOperand, [{
    key: "getValue",
    value: function getValue() {
      throw new Error("implement this method");
    }
  }, {
    key: "getDesc",
    value: function getDesc() {
      throw new Error("implement this method");
    }
  }, {
    key: "isNumber",
    value: function isNumber() {
      return false;
    }
  }]);

  return AbstractOperand;
}();

exports.default = AbstractOperand;
},{}],"js/operand/number_operand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_operand = _interopRequireDefault(require("./abstract_operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NumberOperand = /*#__PURE__*/function (_AbstractOperand) {
  _inherits(NumberOperand, _AbstractOperand);

  var _super = _createSuper(NumberOperand);

  function NumberOperand(input) {
    var _this;

    _classCallCheck(this, NumberOperand);

    _this = _super.call(this);
    _this.inputs = [];

    if (input !== null) {
      _this.inputs.push(input);
    }

    return _this;
  }

  _createClass(NumberOperand, [{
    key: "getValue",
    value: function getValue() {
      var inputText = this.getInputText();

      if (inputText.length > 0) {
        return parseFloat(inputText);
      }

      return 0;
    }
  }, {
    key: "getDesc",
    value: function getDesc() {
      return this.getInputText();
    }
  }, {
    key: "append",
    value: function append(input) {
      this.inputs.push(input);
    }
  }, {
    key: "clearBack",
    value: function clearBack() {
      var size = this.inputs.length;

      if (size > 0) {
        this.inputs.splice(size - 1, 1);
      }
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      this.inputs = [];
    }
  }, {
    key: "getInputText",
    value: function getInputText() {
      return this.inputs.reduce(function (result, input) {
        return result + String(input);
      }, "");
    }
  }, {
    key: "isNumber",
    value: function isNumber() {
      return true;
    }
  }]);

  return NumberOperand;
}(_abstract_operand.default);

exports.default = NumberOperand;
},{"./abstract_operand":"js/operand/abstract_operand.js"}],"js/chain/request.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Request = /*#__PURE__*/function () {
  function Request() {
    _classCallCheck(this, Request);

    this.result = null;
    this.sbEquation = "";
  }

  _createClass(Request, [{
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
  }, {
    key: "setResult",
    value: function setResult(result) {
      this.result = result;
    }
  }, {
    key: "appendEquation",
    value: function appendEquation(desc) {
      this.sbEquation += desc;
    }
  }, {
    key: "getEquation",
    value: function getEquation() {
      return this.sbEquation;
    }
  }]);

  return Request;
}();

exports.default = Request;
},{}],"js/chain/abstract_operation_handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_handler = _interopRequireDefault(require("./abstract_handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AbstractOperationHandler = /*#__PURE__*/function (_AbstractHandler) {
  _inherits(AbstractOperationHandler, _AbstractHandler);

  var _super = _createSuper(AbstractOperationHandler);

  function AbstractOperationHandler(operand) {
    _classCallCheck(this, AbstractOperationHandler);

    return _super.call(this, operand);
  }

  _createClass(AbstractOperationHandler, [{
    key: "getOperator",
    value: function getOperator() {
      throw new Error("implement this method");
    }
  }, {
    key: "getEquation",
    value: function getEquation(request) {
      return " ".concat(this.getOperator(), " ").concat(this.getOperandDesc());
    }
  }, {
    key: "isOperation",
    value: function isOperation() {
      return true;
    }
  }, {
    key: "operateNumber",
    value: function operateNumber(firstNumber, secondNumber) {
      throw new Error("implement this method");
    }
  }]);

  return AbstractOperationHandler;
}(_abstract_handler.default);

exports.default = AbstractOperationHandler;
},{"./abstract_handler":"js/chain/abstract_handler.js"}],"js/chain/add_operation_handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_operation_handler = _interopRequireDefault(require("./abstract_operation_handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AddOperationHandler = /*#__PURE__*/function (_AbstractOperationHan) {
  _inherits(AddOperationHandler, _AbstractOperationHan);

  var _super = _createSuper(AddOperationHandler);

  function AddOperationHandler(operand) {
    _classCallCheck(this, AddOperationHandler);

    return _super.call(this, operand);
  }

  _createClass(AddOperationHandler, [{
    key: "operate",
    value: function operate(request) {
      var firstNumber = request.getResult();
      var secondNumber = this.getOperandValue();
      return firstNumber + secondNumber;
    }
  }, {
    key: "getOperator",
    value: function getOperator() {
      return "+";
    }
  }, {
    key: "operateNumber",
    value: function operateNumber(firstNumber, secondNumber) {
      return firstNumber + secondNumber;
    }
  }]);

  return AddOperationHandler;
}(_abstract_operation_handler.default);

exports.default = AddOperationHandler;
},{"./abstract_operation_handler":"js/chain/abstract_operation_handler.js"}],"js/chain/substract_operation_handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_operation_handler = _interopRequireDefault(require("./abstract_operation_handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SubstractOperationHandler = /*#__PURE__*/function (_AbstractOperationHan) {
  _inherits(SubstractOperationHandler, _AbstractOperationHan);

  var _super = _createSuper(SubstractOperationHandler);

  function SubstractOperationHandler(operand) {
    _classCallCheck(this, SubstractOperationHandler);

    return _super.call(this, operand);
  }

  _createClass(SubstractOperationHandler, [{
    key: "operate",
    value: function operate(request) {
      var firstNumber = request.getResult();
      var secondNumber = this.getOperandValue();
      return firstNumber - secondNumber;
    }
  }, {
    key: "getOperator",
    value: function getOperator() {
      return "-";
    }
  }, {
    key: "operateNumber",
    value: function operateNumber(firstNumber, secondNumber) {
      return firstNumber - secondNumber;
    }
  }]);

  return SubstractOperationHandler;
}(_abstract_operation_handler.default);

exports.default = SubstractOperationHandler;
},{"./abstract_operation_handler":"js/chain/abstract_operation_handler.js"}],"js/chain/multiply_operation_handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_operation_handler = _interopRequireDefault(require("./abstract_operation_handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MultiplyOperationHandler = /*#__PURE__*/function (_AbstractOperationHan) {
  _inherits(MultiplyOperationHandler, _AbstractOperationHan);

  var _super = _createSuper(MultiplyOperationHandler);

  function MultiplyOperationHandler(operand) {
    _classCallCheck(this, MultiplyOperationHandler);

    return _super.call(this, operand);
  }

  _createClass(MultiplyOperationHandler, [{
    key: "operate",
    value: function operate(request) {
      var firstNumber = request.getResult();
      var secondNumber = this.getOperandValue();
      return firstNumber * secondNumber;
    }
  }, {
    key: "getOperator",
    value: function getOperator() {
      return "*";
    }
  }, {
    key: "operateNumber",
    value: function operateNumber(firstNumber, secondNumber) {
      return firstNumber * secondNumber;
    }
  }]);

  return MultiplyOperationHandler;
}(_abstract_operation_handler.default);

exports.default = MultiplyOperationHandler;
},{"./abstract_operation_handler":"js/chain/abstract_operation_handler.js"}],"js/chain/divide_operation_handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_operation_handler = _interopRequireDefault(require("./abstract_operation_handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DivideOperationHandler = /*#__PURE__*/function (_AbstractOperationHan) {
  _inherits(DivideOperationHandler, _AbstractOperationHan);

  var _super = _createSuper(DivideOperationHandler);

  function DivideOperationHandler(operand) {
    _classCallCheck(this, DivideOperationHandler);

    return _super.call(this, operand);
  }

  _createClass(DivideOperationHandler, [{
    key: "operate",
    value: function operate(request) {
      var firstNumber = request.getResult();
      var secondNumber = this.getOperandValue();
      return firstNumber / secondNumber;
    }
  }, {
    key: "getOperator",
    value: function getOperator() {
      return "/";
    }
  }, {
    key: "operateNumber",
    value: function operateNumber(firstNumber, secondNumber) {
      return firstNumber / secondNumber;
    }
  }]);

  return DivideOperationHandler;
}(_abstract_operation_handler.default);

exports.default = DivideOperationHandler;
},{"./abstract_operation_handler":"js/chain/abstract_operation_handler.js"}],"js/operand/func/abstract_function.operand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_operand = _interopRequireDefault(require("../abstract_operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AbstractFunctionOperand = /*#__PURE__*/function (_AbstractOperand) {
  _inherits(AbstractFunctionOperand, _AbstractOperand);

  var _super = _createSuper(AbstractFunctionOperand);

  function AbstractFunctionOperand(operand) {
    var _this;

    _classCallCheck(this, AbstractFunctionOperand);

    _this = _super.call(this);
    _this.operand = operand;
    return _this;
  }

  _createClass(AbstractFunctionOperand, [{
    key: "setOperand",
    value: function setOperand(operand) {
      this.operand = operand;
    }
  }]);

  return AbstractFunctionOperand;
}(_abstract_operand.default);

exports.default = AbstractFunctionOperand;
},{"../abstract_operand":"js/operand/abstract_operand.js"}],"js/operand/func/frac_function_operand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_function = _interopRequireDefault(require("./abstract_function.operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FracFunctionOperand = /*#__PURE__*/function (_AbstractFunctionOper) {
  _inherits(FracFunctionOperand, _AbstractFunctionOper);

  var _super = _createSuper(FracFunctionOperand);

  function FracFunctionOperand(operand) {
    _classCallCheck(this, FracFunctionOperand);

    return _super.call(this, operand);
  }

  _createClass(FracFunctionOperand, [{
    key: "getValue",
    value: function getValue() {
      return 1 / this.operand.getValue();
    }
  }, {
    key: "getDesc",
    value: function getDesc() {
      return "Frac(".concat(this.operand.getDesc(), ")");
    }
  }]);

  return FracFunctionOperand;
}(_abstract_function.default);

exports.default = FracFunctionOperand;
},{"./abstract_function.operand":"js/operand/func/abstract_function.operand.js"}],"js/operand/func/percent_function_operand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_function = _interopRequireDefault(require("./abstract_function.operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PercentFunctionOperand = /*#__PURE__*/function (_AbstractFunctionOper) {
  _inherits(PercentFunctionOperand, _AbstractFunctionOper);

  var _super = _createSuper(PercentFunctionOperand);

  function PercentFunctionOperand(operand) {
    var _this;

    _classCallCheck(this, PercentFunctionOperand);

    _this = _super.call(this, operand);
    _this.percent = 0;
    return _this;
  }

  _createClass(PercentFunctionOperand, [{
    key: "getValue",
    value: function getValue() {
      return parseFloat(this.operand.getValue() * this.percent);
    }
  }, {
    key: "getDesc",
    value: function getDesc() {
      return "Percent(".concat(this.operand.getDesc(), ")");
    }
  }, {
    key: "setPercent",
    value: function setPercent(percent) {
      this.percent = percent;
    }
  }]);

  return PercentFunctionOperand;
}(_abstract_function.default);

exports.default = PercentFunctionOperand;
},{"./abstract_function.operand":"js/operand/func/abstract_function.operand.js"}],"js/operand/func/pow_function_operand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_function = _interopRequireDefault(require("./abstract_function.operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PowFunctionOperand = /*#__PURE__*/function (_AbstractFunctionOper) {
  _inherits(PowFunctionOperand, _AbstractFunctionOper);

  var _super = _createSuper(PowFunctionOperand);

  function PowFunctionOperand(operand) {
    _classCallCheck(this, PowFunctionOperand);

    return _super.call(this, operand);
  }

  _createClass(PowFunctionOperand, [{
    key: "getValue",
    value: function getValue() {
      return parseFloat(Math.pow(this.operand.getValue(), 2));
    }
  }, {
    key: "getDesc",
    value: function getDesc() {
      return "POW(".concat(this.operand.getDesc(), ")");
    }
  }]);

  return PowFunctionOperand;
}(_abstract_function.default);

exports.default = PowFunctionOperand;
},{"./abstract_function.operand":"js/operand/func/abstract_function.operand.js"}],"js/operand/func/sqrt_function_operand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_function = _interopRequireDefault(require("./abstract_function.operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SqrtFunctionOperand = /*#__PURE__*/function (_AbstractFunctionOper) {
  _inherits(SqrtFunctionOperand, _AbstractFunctionOper);

  var _super = _createSuper(SqrtFunctionOperand);

  function SqrtFunctionOperand(operand) {
    _classCallCheck(this, SqrtFunctionOperand);

    return _super.call(this, operand);
  }

  _createClass(SqrtFunctionOperand, [{
    key: "getValue",
    value: function getValue() {
      return parseFloat(Math.sqrt(this.operand.getValue()));
    }
  }, {
    key: "getDesc",
    value: function getDesc() {
      return "Sqrt(".concat(this.operand.getDesc(), ")");
    }
  }]);

  return SqrtFunctionOperand;
}(_abstract_function.default);

exports.default = SqrtFunctionOperand;
},{"./abstract_function.operand":"js/operand/func/abstract_function.operand.js"}],"js/chain/client.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operand_handler = _interopRequireDefault(require("./operand_handler"));

var _number_operand = _interopRequireDefault(require("../operand/number_operand"));

var _request = _interopRequireDefault(require("./request"));

var _add_operation_handler = _interopRequireDefault(require("./add_operation_handler"));

var _substract_operation_handler = _interopRequireDefault(require("./substract_operation_handler"));

var _multiply_operation_handler = _interopRequireDefault(require("./multiply_operation_handler"));

var _divide_operation_handler = _interopRequireDefault(require("./divide_operation_handler"));

var _frac_function_operand = _interopRequireDefault(require("../operand/func/frac_function_operand"));

var _percent_function_operand = _interopRequireDefault(require("../operand/func/percent_function_operand"));

var _pow_function_operand = _interopRequireDefault(require("../operand/func/pow_function_operand"));

var _sqrt_function_operand = _interopRequireDefault(require("../operand/func/sqrt_function_operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Client = /*#__PURE__*/function () {
  function Client() {
    _classCallCheck(this, Client);
  }

  _createClass(Client, [{
    key: "main",
    value: function main() {
      this.test1();
      this.test2();
      this.test3();
      this.test4();
      this.test5();
      this.test6();
      this.testFunction1();
      this.testFunction2();
      this.testFunction3();
      this.testFunction4();
      this.testFunction5();
      this.testFunction6();
    }
  }, {
    key: "test1",
    value: function test1() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      handlerList.push(operandHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "test2",
    value: function test2() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      var addOperationHandler = new _add_operation_handler.default(new _number_operand.default("10"));
      handlerList.push(operandHandler);
      handlerList.push(addOperationHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "test3",
    value: function test3() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      var substractOperationHandler = new _substract_operation_handler.default(new _number_operand.default("2"));
      handlerList.push(operandHandler);
      handlerList.push(substractOperationHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "test4",
    value: function test4() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      var multiplyOperationHandler = new _multiply_operation_handler.default(new _number_operand.default("5"));
      handlerList.push(operandHandler);
      handlerList.push(multiplyOperationHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "test5",
    value: function test5() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      var divideOperationHandler = new _divide_operation_handler.default(new _number_operand.default("3"));
      handlerList.push(operandHandler);
      handlerList.push(divideOperationHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "test6",
    value: function test6() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      var substractOperationHandler = new _substract_operation_handler.default(new _number_operand.default("2"));
      var multiplyOperationHandler = new _multiply_operation_handler.default(new _number_operand.default("5"));
      var divideOperationHandler = new _divide_operation_handler.default(new _number_operand.default("3"));
      handlerList.push(operandHandler);
      handlerList.push(substractOperationHandler);
      handlerList.push(multiplyOperationHandler);
      handlerList.push(divideOperationHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "testFunction1",
    value: function testFunction1() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _frac_function_operand.default(new _number_operand.default("10")));
      handlerList.push(operandHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "testFunction2",
    value: function testFunction2() {
      var handlerList = [];
      var percentFunctionOperand = new _percent_function_operand.default(new _number_operand.default("10"));
      percentFunctionOperand.setPercent(0.5);
      var operandHandler = new _operand_handler.default(percentFunctionOperand);
      handlerList.push(operandHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "testFunction3",
    value: function testFunction3() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _pow_function_operand.default(new _number_operand.default("10")));
      handlerList.push(operandHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "testFunction4",
    value: function testFunction4() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _sqrt_function_operand.default(new _number_operand.default("10")));
      handlerList.push(operandHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "testFunction5",
    value: function testFunction5() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      var addOperationHandler = new _add_operation_handler.default(new _frac_function_operand.default(new _number_operand.default("10")));
      handlerList.push(operandHandler);
      handlerList.push(addOperationHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "testFunction6",
    value: function testFunction6() {
      var handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default("12"));
      var addOperationHandler = new _add_operation_handler.default(new _pow_function_operand.default(new _frac_function_operand.default(new _number_operand.default("10"))));
      handlerList.push(operandHandler);
      handlerList.push(addOperationHandler);
      this.tempTest(operandHandler, handlerList);
    }
  }, {
    key: "tempTest",
    value: function tempTest(operandHandler, handlerList) {
      var handler = null;
      var nextHandler = null;

      for (var index = 0; index < handlerList.length - 1; index++) {
        handler = handlerList[index];
        nextHandler = handlerList[index + 1];
        handler.setNext(nextHandler);
      }

      var request = new _request.default();
      operandHandler.makeEquation(request);
      console.log("request.getEquation() = ".concat(request.getEquation()));
      request = new _request.default();
      operandHandler.handleRequest(request);
      console.log("request.getResult() = ".concat(request.getResult()));
    }
  }]);

  return Client;
}();

exports.default = Client;
},{"./operand_handler":"js/chain/operand_handler.js","../operand/number_operand":"js/operand/number_operand.js","./request":"js/chain/request.js","./add_operation_handler":"js/chain/add_operation_handler.js","./substract_operation_handler":"js/chain/substract_operation_handler.js","./multiply_operation_handler":"js/chain/multiply_operation_handler.js","./divide_operation_handler":"js/chain/divide_operation_handler.js","../operand/func/frac_function_operand":"js/operand/func/frac_function_operand.js","../operand/func/percent_function_operand":"js/operand/func/percent_function_operand.js","../operand/func/pow_function_operand":"js/operand/func/pow_function_operand.js","../operand/func/sqrt_function_operand":"js/operand/func/sqrt_function_operand.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50603" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/chain/client.js"], null)
//# sourceMappingURL=/client.acef8101.js.map