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
})({"js/command/abstract_command.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractCommand = /*#__PURE__*/function () {
  function AbstractCommand(receiver) {
    _classCallCheck(this, AbstractCommand);

    this.receiver = receiver;
  }

  _createClass(AbstractCommand, [{
    key: "execute",
    value: function execute() {
      throw new Error("implmenet this method");
    }
  }]);

  return AbstractCommand;
}();

exports.default = AbstractCommand;
},{}],"js/command/add_operation_command.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_command = _interopRequireDefault(require("./abstract_command"));

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

var AddOperationCommand = /*#__PURE__*/function (_AbstractCommand) {
  _inherits(AddOperationCommand, _AbstractCommand);

  var _super = _createSuper(AddOperationCommand);

  function AddOperationCommand(receiver) {
    _classCallCheck(this, AddOperationCommand);

    return _super.call(this, receiver);
  }

  _createClass(AddOperationCommand, [{
    key: "execute",
    value: function execute() {
      this.receiver.actionOperator("+");
    }
  }]);

  return AddOperationCommand;
}(_abstract_command.default);

exports.default = AddOperationCommand;
},{"./abstract_command":"js/command/abstract_command.js"}],"js/chain/abstract_handler.js":[function(require,module,exports) {
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
},{"./abstract_operation_handler":"js/chain/abstract_operation_handler.js"}],"js/chain/operand_handler.js":[function(require,module,exports) {
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
},{"./abstract_handler":"js/chain/abstract_handler.js"}],"js/chain/substract_operation_handler.js":[function(require,module,exports) {
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
},{"./abstract_operation_handler":"js/chain/abstract_operation_handler.js"}],"js/operand/abstract_operand.js":[function(require,module,exports) {
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
},{"./abstract_operand":"js/operand/abstract_operand.js"}],"js/command/calc_command_receiver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_operation_handler = _interopRequireDefault(require("../chain/abstract_operation_handler"));

var _add_operation_handler = _interopRequireDefault(require("../chain/add_operation_handler"));

var _divide_operation_handler = _interopRequireDefault(require("../chain/divide_operation_handler"));

var _multiply_operation_handler = _interopRequireDefault(require("../chain/multiply_operation_handler"));

var _operand_handler = _interopRequireDefault(require("../chain/operand_handler"));

var _substract_operation_handler = _interopRequireDefault(require("../chain/substract_operation_handler"));

var _number_operand = _interopRequireDefault(require("../operand/number_operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalcCommandReceiver = /*#__PURE__*/function () {
  function CalcCommandReceiver() {
    _classCallCheck(this, CalcCommandReceiver);

    this.displayView = null;
    this.equationView = null;
    this.model = null;
  }

  _createClass(CalcCommandReceiver, [{
    key: "updateDisplayView",
    value: function updateDisplayView() {
      this.displayView.redraw();
    }
  }, {
    key: "updateEquationView",
    value: function updateEquationView() {
      this.equationView.redraw();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      this.updateDisplayView();
      this.updateEquationView();
    }
  }, {
    key: "setEquationView",
    value: function setEquationView(equationView) {
      this.equationView = equationView;
    }
  }, {
    key: "setDisplayView",
    value: function setDisplayView(displayView) {
      this.displayView = displayView;
    }
  }, {
    key: "actionOperator",
    value: function actionOperator(actionCommand) {
      if (actionCommand === "+") {
        this.addHandler(new _add_operation_handler.default(null));
      } else if (actionCommand === "-") {
        this.addHandler(new _substract_operation_handler.default(null));
      } else if (actionCommand === "*") {
        this.addHandler(new _multiply_operation_handler.default(null));
      } else if (actionCommand === "/") {
        this.addHandler(new _divide_operation_handler.default(null));
      }
    }
  }, {
    key: "actionEqual",
    value: function actionEqual() {
      var resultText = this.getResultText();
      var numberOperand = new _number_operand.default(null);
      numberOperand.append(resultText);
      var newOperandHandler = new _operand_handler.default(numberOperand);
      this.initHandler();
      this.addHandler(newOperandHandler);
    }
  }, {
    key: "actionNumber",
    value: function actionNumber(actionCommand) {
      var lastHandler = this.getLastHandler();

      if (lastHandler instanceof _abstract_operation_handler.default) {
        var input = actionCommand;
        var numberOperand = new _number_operand.default(input);
        this.setLastOperand(numberOperand);
      } else {
        this.appendInputToDisplay(actionCommand);
      }
    }
  }, {
    key: "setModel",
    value: function setModel(model) {
      this.model = model;
    }
  }, {
    key: "addHandler",
    value: function addHandler(handler) {
      this.model.addHandler(handler);
    }
  }, {
    key: "appendInputToDisplay",
    value: function appendInputToDisplay(input) {
      var lastOperand = this.getLastOperand();

      if (lastOperand !== null) {
        if (lastOperand.isNumber()) {
          lastOperand.append(input);
        }
      }
    }
  }, {
    key: "getLastHandler",
    value: function getLastHandler() {
      return this.model.getLastHandler();
    }
  }, {
    key: "getLastOperand",
    value: function getLastOperand() {
      var lastHandler = this.getLastHandler();

      if (lastHandler !== null) {
        return lastHandler.getOperand();
      }

      return null;
    }
  }, {
    key: "getResultExceptLast",
    value: function getResultExceptLast() {
      return this.model.getResultExceptLast();
    }
  }, {
    key: "getResultText",
    value: function getResultText() {
      return this.model.getResultText();
    }
  }, {
    key: "initHandler",
    value: function initHandler() {
      this.model.initHandler();
    }
  }, {
    key: "replaceHandler",
    value: function replaceHandler(handler) {
      this.model.replaceHandler(handler);
    }
  }, {
    key: "setLastOperand",
    value: function setLastOperand(operand) {
      var lastHandler = this.getLastHandler();

      if (lastHandler !== null) {
        lastHandler.setOperand(operand);
      }
    }
  }]);

  return CalcCommandReceiver;
}();

exports.default = CalcCommandReceiver;
},{"../chain/abstract_operation_handler":"js/chain/abstract_operation_handler.js","../chain/add_operation_handler":"js/chain/add_operation_handler.js","../chain/divide_operation_handler":"js/chain/divide_operation_handler.js","../chain/multiply_operation_handler":"js/chain/multiply_operation_handler.js","../chain/operand_handler":"js/chain/operand_handler.js","../chain/substract_operation_handler":"js/chain/substract_operation_handler.js","../operand/number_operand":"js/operand/number_operand.js"}],"js/command/divide_operation_command.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_command = _interopRequireDefault(require("./abstract_command"));

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

var DivideOperationCommand = /*#__PURE__*/function (_AbstractCommand) {
  _inherits(DivideOperationCommand, _AbstractCommand);

  var _super = _createSuper(DivideOperationCommand);

  function DivideOperationCommand(receiver) {
    _classCallCheck(this, DivideOperationCommand);

    return _super.call(this, receiver);
  }

  _createClass(DivideOperationCommand, [{
    key: "execute",
    value: function execute() {
      this.receiver.actionOperator("/");
    }
  }]);

  return DivideOperationCommand;
}(_abstract_command.default);

exports.default = DivideOperationCommand;
},{"./abstract_command":"js/command/abstract_command.js"}],"js/command/equal_operation_command.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_command = _interopRequireDefault(require("./abstract_command"));

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

var EqualOperationCommand = /*#__PURE__*/function (_AbstractCommand) {
  _inherits(EqualOperationCommand, _AbstractCommand);

  var _super = _createSuper(EqualOperationCommand);

  function EqualOperationCommand(receiver) {
    _classCallCheck(this, EqualOperationCommand);

    return _super.call(this, receiver);
  }

  _createClass(EqualOperationCommand, [{
    key: "execute",
    value: function execute() {
      this.receiver.actionEqual();
    }
  }]);

  return EqualOperationCommand;
}(_abstract_command.default);

exports.default = EqualOperationCommand;
},{"./abstract_command":"js/command/abstract_command.js"}],"js/command/multiply_operation_command.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_command = _interopRequireDefault(require("./abstract_command"));

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

var MultiplyOperationCommand = /*#__PURE__*/function (_AbstractCommand) {
  _inherits(MultiplyOperationCommand, _AbstractCommand);

  var _super = _createSuper(MultiplyOperationCommand);

  function MultiplyOperationCommand(receiver) {
    _classCallCheck(this, MultiplyOperationCommand);

    return _super.call(this, receiver);
  }

  _createClass(MultiplyOperationCommand, [{
    key: "execute",
    value: function execute() {
      this.receiver.actionOperator("*");
    }
  }]);

  return MultiplyOperationCommand;
}(_abstract_command.default);

exports.default = MultiplyOperationCommand;
},{"./abstract_command":"js/command/abstract_command.js"}],"js/command/number_command.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_command = _interopRequireDefault(require("./abstract_command"));

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

var NumberCommand = /*#__PURE__*/function (_AbstractCommand) {
  _inherits(NumberCommand, _AbstractCommand);

  var _super = _createSuper(NumberCommand);

  function NumberCommand(receiver, actionCommand) {
    var _this;

    _classCallCheck(this, NumberCommand);

    _this = _super.call(this, receiver);
    _this.actionCommand = actionCommand;
    return _this;
  }

  _createClass(NumberCommand, [{
    key: "execute",
    value: function execute() {
      this.receiver.actionNumber(this.actionCommand);
    }
  }]);

  return NumberCommand;
}(_abstract_command.default);

exports.default = NumberCommand;
},{"./abstract_command":"js/command/abstract_command.js"}],"js/command/substract_operation_command.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstract_command = _interopRequireDefault(require("./abstract_command"));

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

var SubstractOperationCommand = /*#__PURE__*/function (_AbstractCommand) {
  _inherits(SubstractOperationCommand, _AbstractCommand);

  var _super = _createSuper(SubstractOperationCommand);

  function SubstractOperationCommand(receiver) {
    _classCallCheck(this, SubstractOperationCommand);

    return _super.call(this, receiver);
  }

  _createClass(SubstractOperationCommand, [{
    key: "execute",
    value: function execute() {
      this.receiver.actionOperator("-");
    }
  }]);

  return SubstractOperationCommand;
}(_abstract_command.default);

exports.default = SubstractOperationCommand;
},{"./abstract_command":"js/command/abstract_command.js"}],"js/app/calc_util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalcUtil = /*#__PURE__*/function () {
  function CalcUtil() {
    _classCallCheck(this, CalcUtil);
  }

  _createClass(CalcUtil, null, [{
    key: "getDisplayNumber",
    value: function getDisplayNumber(num) {
      var displayText = null;

      if (num - parseInt(num) === 0) {
        displayText = "" + parseInt(num);
      } else {
        displayText = "" + num;
      }

      return displayText;
    }
  }, {
    key: "getTextWidth",
    value: function getTextWidth(ctx, text) {
      if (CalcUtil.isInvalidText(text)) {
        return 0;
      }

      var textWidth = ctx.measureText(text).width;
      return textWidth;
    }
  }, {
    key: "isInvalidText",
    value: function isInvalidText(text) {
      if (text === null || text.trim().length === 0) {
        return true;
      }

      return false;
    }
  }]);

  return CalcUtil;
}();

exports.default = CalcUtil;
},{}],"js/chain/request.js":[function(require,module,exports) {
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
},{}],"js/model/calc_model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _calc_util = _interopRequireDefault(require("../app/calc_util"));

var _abstract_operation_handler = _interopRequireDefault(require("../chain/abstract_operation_handler"));

var _operand_handler = _interopRequireDefault(require("../chain/operand_handler"));

var _request = _interopRequireDefault(require("../chain/request"));

var _number_operand = _interopRequireDefault(require("../operand/number_operand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalcModel = /*#__PURE__*/function () {
  function CalcModel() {
    _classCallCheck(this, CalcModel);

    this.handlerList = [];
    var operandHandler = new _operand_handler.default(new _number_operand.default(null));
    this.handlerList.push(operandHandler);
  }

  _createClass(CalcModel, [{
    key: "getDisplayEquationText",
    value: function getDisplayEquationText() {
      var lastHandler = this.getLastHandler();

      if (lastHandler instanceof _abstract_operation_handler.default) {
        return this.getEquationText();
      } else {
        return this.getEquationTextExceptInput();
      }
    }
  }, {
    key: "getDisplayText",
    value: function getDisplayText() {
      var lastHandler = this.getLastHandler();

      if (lastHandler instanceof _abstract_operation_handler.default) {
        return this.getResultText();
      } else {
        return this.getInputText();
      }
    }
  }, {
    key: "invalidateChain",
    value: function invalidateChain() {
      var _iterator = _createForOfIteratorHelper(this.handlerList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var handler = _step.value;
          handler.setNext(null);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "makeChain",
    value: function makeChain() {
      this.invalidateChain();
      var handler = null;
      var nextHandler = null;

      for (var index = 0; index < this.handlerList.length - 1; index++) {
        handler = this.handlerList[index];
        nextHandler = this.handlerList[index + 1];
        handler.setNext(nextHandler);
      }

      return this.handlerList[0];
    }
  }, {
    key: "getLastNumberOperand",
    value: function getLastNumberOperand() {
      var lastOperand = this.getLastOperand();

      if (lastOperand !== null) {
        if (lastOperand.isNumber()) {
          return lastOperand;
        }
      }

      return null;
    }
  }, {
    key: "getLastOperand",
    value: function getLastOperand() {
      var lastHandler = this.getLastHandler();

      if (lastHandler !== null) {
        return lastHandler.getOperand();
      }
    }
  }, {
    key: "getLastHandler",
    value: function getLastHandler() {
      var size = this.handlerList.length;

      if (size > 0) {
        return this.handlerList[size - 1];
      }

      return null;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      var operandHandler = this.makeChain();
      var request = new _request.default();
      operandHandler.handleRequest(request);
      var result = request.getResult();
      return result;
    }
  }, {
    key: "getResultExceptLast",
    value: function getResultExceptLast() {
      var operandHandler = this.makeChainExceptLast();
      var request = new _request.default();
      operandHandler.handleRequest(request);
      var result = request.getResult();
      return result;
    }
  }, {
    key: "getResultText",
    value: function getResultText() {
      var result = this.getResult();

      var resultText = _calc_util.default.getDisplayNumber(result);

      return resultText;
    }
  }, {
    key: "getInputText",
    value: function getInputText() {
      var lastNumberOperand = this.getLastNumberOperand();

      if (lastNumberOperand !== null) {
        return lastNumberOperand.getInputText();
      }

      return null;
    }
  }, {
    key: "getEquationText",
    value: function getEquationText() {
      var operandHandler = this.makeChain();
      var request = new _request.default();
      operandHandler.makeEquation(request);
      return request.getEquation();
    }
  }, {
    key: "getEquationTextExceptInput",
    value: function getEquationTextExceptInput() {
      var lastHandler = this.getLastHandler();

      if (lastHandler.isOperation()) {
        var lastOperator = lastHandler.getOperator();
        var operandHandler = this.makeChainExceptLast();
        var req = new _request.default();
        operandHandler.makeEquation(req);
        return req.getEquation() + "" + lastOperator + "";
      }

      return "";
    }
  }, {
    key: "addHandler",
    value: function addHandler(handler) {
      this.handlerList.push(handler);
    }
  }, {
    key: "initHandler",
    value: function initHandler() {
      this.handlerList = [];
      var operandHandler = new _operand_handler.default(new _number_operand.default(null));
      this.handlerList.push(operandHandler);
    }
  }, {
    key: "replaceHandler",
    value: function replaceHandler(handler) {
      var size = this.handlerList.length;

      if (size > 0) {
        this.handlerList.splice(size - 1, 1);
        this.handlerList.push(handler);
      }
    }
  }]);

  return CalcModel;
}();

exports.default = CalcModel;
},{"../app/calc_util":"js/app/calc_util.js","../chain/abstract_operation_handler":"js/chain/abstract_operation_handler.js","../chain/operand_handler":"js/chain/operand_handler.js","../chain/request":"js/chain/request.js","../operand/number_operand":"js/operand/number_operand.js"}],"js/app/calc_constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalcConstants = function CalcConstants() {
  _classCallCheck(this, CalcConstants);
};

exports.default = CalcConstants;

_defineProperty(CalcConstants, "VIEW_WIDTH", 200);

_defineProperty(CalcConstants, "DEFAULT_VIEW_HEIGHT", 20);

_defineProperty(CalcConstants, "DISPLAY_VIEW_HEIGHT", 28);

_defineProperty(CalcConstants, "DEFAULT_FONT_SIZE", 13);

_defineProperty(CalcConstants, "DEFAULT_FONT", CalcConstants.DEFAULT_FONT_SIZE + "px Arial");

_defineProperty(CalcConstants, "DISPLAY_FONT_SIZE", 24);

_defineProperty(CalcConstants, "DISPLAY_FONT", CalcConstants.DISPLAY_FONT_SIZE + "px Arial");

_defineProperty(CalcConstants, "TEXT_BOTTOM_SPACING", 2);
},{}],"js/app/calc_equation_view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _calc_constants = _interopRequireDefault(require("./calc_constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalcEquationView = /*#__PURE__*/function () {
  function CalcEquationView(equationCanvas) {
    _classCallCheck(this, CalcEquationView);

    this.canvas = equationCanvas;
    this.canvas.width = _calc_constants.default.VIEW_WIDTH;
    this.canvas.height = _calc_constants.default.DEFAULT_VIEW_HEIGHT;
    this.canvas.style.border = "1px solid gray";
    this.canvas.style.curosr = "pointer";
    this.ctx = this.canvas.getContext("2d");
    this.model = null;
  }

  _createClass(CalcEquationView, [{
    key: "redraw",
    value: function redraw() {
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      var euqationText = null;

      if (this.model !== null) {
        euqationText = this.model.getDisplayEquationText();
      }

      if (euqationText === null || euqationText.trim().length <= 0) {
        this.ctx.fillStyle = "black";
        this.ctx.font = _calc_constants.default.DEFAULT_FONT;
        var textWidth = this.ctx.measureText(euqationText).width;
        this.ctx.fillText(euqationText, this.canvas.width - textWidth, this.canvas.height - _calc_constants.default.TEXT_BOTTOM_SPACING);
      }
    }
  }, {
    key: "setModel",
    value: function setModel(model) {
      this.model = model;
    }
  }]);

  return CalcEquationView;
}();

exports.default = CalcEquationView;
},{"./calc_constants":"js/app/calc_constants.js"}],"js/app/clas_display_view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _calc_constants = _interopRequireDefault(require("./calc_constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalcDisplayView = /*#__PURE__*/function () {
  function CalcDisplayView(displayCanvas) {
    _classCallCheck(this, CalcDisplayView);

    this.canvas = displayCanvas;
    this.canvas.width = _calc_constants.default.VIEW_WIDTH;
    this.canvas.height = _calc_constants.default.DEFAULT_VIEW_HEIGHT;
    this.canvas.style.border = "1px solid gray";
    this.canvas.style.curosr = "pointer";
    this.ctx = this.canvas.getContext("2d");
    this.model = null;
  }

  _createClass(CalcDisplayView, [{
    key: "redraw",
    value: function redraw() {
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      var displayText = null;

      if (this.model !== null) {
        displayText = this.model.getDisplayText();
      }

      if (displayText === null || displayText.trim().length <= 0) {
        displayText = "0";
      }

      this.ctx.fillStyle = "black";
      this.ctx.font = _calc_constants.default.DISPLAY_FONT;
      var textWidth = this.ctx.measureText(displayText).width;
      this.ctx.fillText(displayText, this.canvas.width - textWidth, this.canvas.height - _calc_constants.default.TEXT_BOTTOM_SPACING);
    }
  }, {
    key: "setModel",
    value: function setModel(model) {
      this.model = model;
    }
  }]);

  return CalcDisplayView;
}();

exports.default = CalcDisplayView;
},{"./calc_constants":"js/app/calc_constants.js"}],"js/app/input_panel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputPanel = /*#__PURE__*/function () {
  function InputPanel() {
    _classCallCheck(this, InputPanel);
  }

  _createClass(InputPanel, [{
    key: "initLayout",
    value: function initLayout(labels, panel, fn) {
      var _iterator = _createForOfIteratorHelper(labels),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var label = _step.value;
          var btn = this.createButton(label);
          panel.appendChild(btn);
          btn.addEventListener("click", fn);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "createButton",
    value: function createButton(label) {
      var button = document.createElement("button");
      var text = document.createTextNode(label);
      button.style.width = "50px";
      button.appendChild(text);
      return button;
    }
  }]);

  return InputPanel;
}();

exports.default = InputPanel;
},{}],"js/app/calc_main_frame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _add_operation_command = _interopRequireDefault(require("../command/add_operation_command"));

var _calc_command_receiver = _interopRequireDefault(require("../command/calc_command_receiver"));

var _divide_operation_command = _interopRequireDefault(require("../command/divide_operation_command"));

var _equal_operation_command = _interopRequireDefault(require("../command/equal_operation_command"));

var _multiply_operation_command = _interopRequireDefault(require("../command/multiply_operation_command"));

var _number_command = _interopRequireDefault(require("../command/number_command"));

var _substract_operation_command = _interopRequireDefault(require("../command/substract_operation_command"));

var _calc_model = _interopRequireDefault(require("../model/calc_model"));

var _calc_equation_view = _interopRequireDefault(require("./calc_equation_view"));

var _clas_display_view = _interopRequireDefault(require("./clas_display_view"));

var _input_panel = _interopRequireDefault(require("./input_panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalcMainFrame = function CalcMainFrame(calculatorDivId) {
  _classCallCheck(this, CalcMainFrame);

  var calculator = document.getElementById(calculatorDivId);
  var equationCanvas = document.createElement("canvas");
  var displayCanvas = document.createElement("canvas");
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var panel1 = document.createElement("div");
  var panel2 = document.createElement("div");
  var panel3 = document.createElement("div");
  var panel4 = document.createElement("div");
  var panel5 = document.createElement("div");
  var panel6 = document.createElement("div");
  div1.appendChild(equationCanvas);
  div2.appendChild(displayCanvas);
  calculator.appendChild(div1);
  calculator.appendChild(div2);
  calculator.appendChild(panel1);
  calculator.appendChild(panel2);
  calculator.appendChild(panel3);
  calculator.appendChild(panel4);
  calculator.appendChild(panel5);
  calculator.appendChild(panel6);
  var displayView = new _clas_display_view.default(displayCanvas);
  var equationView = new _calc_equation_view.default(equationCanvas);
  var calcCommandReceiver = new _calc_command_receiver.default();
  calcCommandReceiver.setDisplayView(displayView);
  calcCommandReceiver.setEquationView(equationView);

  var fn = function fn() {
    var element = this;
    var actionCommand = element.textContent || element.innerText;
    var calcCommand = null;

    if (actionCommand === "+") {
      calcCommand = new _add_operation_command.default(calcCommandReceiver);
    } else if (actionCommand === "-") {
      calcCommand = new _substract_operation_command.default(calcCommandReceiver);
    } else if (actionCommand === "*") {
      calcCommand = new _multiply_operation_command.default(calcCommandReceiver);
    } else if (actionCommand === "/") {
      calcCommand = new _divide_operation_command.default(calcCommandReceiver);
    } else if (actionCommand === "=") {
      calcCommand = new _equal_operation_command.default(calcCommandReceiver);
    } else {
      calcCommand = new _number_command.default(calcCommandReceiver, actionCommand);
    }

    if (calcCommand !== null) {
      calcCommand.execute();
    }

    calcCommandReceiver.updateView();
  };

  var inputPanel1 = new _input_panel.default();
  inputPanel1.initLayout(["%", "SQRT", "POW", "FRAC"], panel1, fn);
  var inputPanel2 = new _input_panel.default();
  inputPanel2.initLayout(["CE", "C", "BACK", "/"], panel2, fn);
  var inputPanel3 = new _input_panel.default();
  inputPanel3.initLayout(["7", "8", "9", "*"], panel3, fn);
  var inputPanel4 = new _input_panel.default();
  inputPanel4.initLayout(["4", "5", "6", "-"], panel4, fn);
  var inputPanel5 = new _input_panel.default();
  inputPanel5.initLayout(["1", "2", "3", "+"], panel5, fn);
  var inputPanel6 = new _input_panel.default();
  inputPanel6.initLayout(["+-", "0", ".", "="], panel6, fn);
  var calcModel = new _calc_model.default();
  displayView.setModel(calcModel);
  equationView.setModel(calcModel);
  displayView.redraw();
  equationView.redraw();
  calcCommandReceiver.setModel(calcModel);
};

exports.default = CalcMainFrame;
},{"../command/add_operation_command":"js/command/add_operation_command.js","../command/calc_command_receiver":"js/command/calc_command_receiver.js","../command/divide_operation_command":"js/command/divide_operation_command.js","../command/equal_operation_command":"js/command/equal_operation_command.js","../command/multiply_operation_command":"js/command/multiply_operation_command.js","../command/number_command":"js/command/number_command.js","../command/substract_operation_command":"js/command/substract_operation_command.js","../model/calc_model":"js/model/calc_model.js","./calc_equation_view":"js/app/calc_equation_view.js","./clas_display_view":"js/app/clas_display_view.js","./input_panel":"js/app/input_panel.js"}],"js/chain/init.js":[function(require,module,exports) {
"use strict";

var _calc_main_frame = _interopRequireDefault(require("../app/calc_main_frame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  new _calc_main_frame.default("calculator");
};
},{"../app/calc_main_frame":"js/app/calc_main_frame.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/chain/init.js"], null)
//# sourceMappingURL=/init.7f585ed0.js.map