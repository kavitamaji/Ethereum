webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\EthereumWorkspace\\Trustfund\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Header"), props.children, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Footer"));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_corporation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/corporation */ "./ethereum/corporation.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");






var _jsxFileName = "D:\\EthereumWorkspace\\Trustfund\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var TrustFundIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TrustFundIndex, _Component);

  function TrustFundIndex() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TrustFundIndex);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TrustFundIndex).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TrustFundIndex, [{
    key: "renderTrustfunds",
    value: function renderTrustfunds() {
      var items = this.props.trustfunds.map(function (address) {
        return {
          header: address,
          description: __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, "View Trustfunds"),
          fluid: true
        };
      });
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Group, {
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return;

      __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Render Trust Funds"), this.renderTrustfunds(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        content: "Create Trust Fund",
        icon: "add circle",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var trustfunds;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_corporation__WEBPACK_IMPORTED_MODULE_8__["default"].methods.getDeployedTrustfunds().call());

            case 2:
              trustfunds = _context.sent;
              console.log(trustfunds);
              return _context.abrupt("return", {
                trustfunds: trustfunds
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return TrustFundIndex;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TrustFundIndex);

/***/ })

})
//# sourceMappingURL=index.js.f39a3530550e635bc157.hot-update.js.map