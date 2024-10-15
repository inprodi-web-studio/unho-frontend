'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var reactResizablePanels = require('react-resizable-panels');
var antd = require('antd');
var Icons = require('@phosphor-icons/react/dist/ssr');
var AntdSkeleton = _interopDefault(require('react-loading-skeleton'));
var _debounce = _interopDefault(require('lodash/debounce'));
var InputMask = _interopDefault(require('react-input-mask'));
var dayjs = _interopDefault(require('dayjs'));
var advancedFormat = _interopDefault(require('dayjs/plugin/advancedFormat'));
var customParseFormat = _interopDefault(require('dayjs/plugin/customParseFormat'));
var localeData = _interopDefault(require('dayjs/plugin/localeData'));
var weekday = _interopDefault(require('dayjs/plugin/weekday'));
var weekOfYear = _interopDefault(require('dayjs/plugin/weekOfYear'));
var weekYear = _interopDefault(require('dayjs/plugin/weekYear'));
require('dayjs/locale/es-mx');
var react = require('@phosphor-icons/react');
var reactFilepond = require('react-filepond');
var FilePondPluginImagePreview = _interopDefault(require('filepond-plugin-image-preview'));
var FilePondPluginFileValidateType = _interopDefault(require('filepond-plugin-file-validate-type'));
var line = require('@nivo/line');
var CountUp = _interopDefault(require('react-countup'));
var reactTypeAnimation = require('react-type-animation');
var react$1 = require('@tiptap/react');
var StarterKit = _interopDefault(require('@tiptap/starter-kit'));
var Underline = _interopDefault(require('@tiptap/extension-underline'));
var TextAlign = _interopDefault(require('@tiptap/extension-text-align'));
var Placeholder = _interopDefault(require('@tiptap/extension-placeholder'));

var HoverContext = /*#__PURE__*/React.createContext({
  hoveredId: null,
  setHoveredId: function setHoveredId() {}
});
var HoverProvider = function HoverProvider(_ref) {
  var children = _ref.children;
  var _useState = React.useState(null),
    hoveredId = _useState[0],
    setHoveredId = _useState[1];
  return React__default.createElement(HoverContext.Provider, {
    value: {
      hoveredId: hoveredId,
      setHoveredId: setHoveredId
    }
  }, children);
};
var useHover = function useHover() {
  return React.useContext(HoverContext);
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var _excluded = ["label", "loading", "isSubmit"];
var Button = function Button(_ref) {
  var label = _ref.label,
    loading = _ref.loading,
    isSubmit = _ref.isSubmit,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React__default.createElement(antd.Button, Object.assign({
    loading: loading,
    className: "inprodi-button",
    htmlType: isSubmit ? "submit" : "button",
    style: {
      gap: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    // @ts-ignore
    styles: {
      icon: {
        marginInlineEnd: "0px",
        marginInlineStart: "0px"
      }
    }
  }, props), label);
};
var buttonMeta = {
  name: "Button",
  displayName: "Button",
  props: {
    label: {
      type: "string",
      description: "Label of the button",
      defaultValue: "Button Label"
    },
    type: {
      type: "choice",
      options: ["default", "primary", "ghost", "dashed", "link", "text"],
      description: "Can be set to primary, ghost, dashed, link, text, default",
      defaultValue: "primary"
    },
    size: {
      type: "choice",
      options: ["small", "medium", "large"],
      description: "Set the size of button",
      defaultValue: "medium"
    },
    iconPosition: {
      type: "choice",
      options: ["start", "end"],
      description: "Set the position of icon",
      defaultValue: "start"
    },
    block: {
      type: "boolean",
      description: "Option to fit button width to its parent width",
      defaultValue: false
    },
    href: {
      type: "href",
      description: "Redirect url of link button"
    },
    target: {
      type: "choice",
      options: ["_blank", "_self", "_parent", "_top"],
      description: "Same as target attribute of a, works when href is specified",
      hidden: function hidden(props) {
        return !props.href;
      },
      defaultValue: "_self"
    },
    loading: {
      type: "boolean",
      description: "Set the loading status of button",
      defaultValue: false
    },
    isSubmit: {
      type: "boolean",
      description: "Set if the button can submit forms.",
      defaultValue: false,
      advanced: true
    },
    disabled: {
      type: "boolean",
      description: "Disabled state of button",
      defaultValue: false,
      advanced: true
    },
    ghost: {
      type: "boolean",
      description: "Make background transparent and invert text and border colors",
      defaultValue: false,
      advanced: true
    },
    danger: {
      type: "boolean",
      description: "Set the danger status of button",
      defaultValue: false,
      advanced: true
    },
    icon: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: "Icon"
      }],
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    },
    onClick: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "Button"
};
function registerButton(loader, customButtonMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Button, customButtonMeta != null ? customButtonMeta : buttonMeta);
}

var Icon = function Icon(_ref) {
  var _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? "CircleDashed" : _ref$icon,
    size = _ref.size,
    color = _ref.color,
    variant = _ref.variant;
  var IconComponent = Icons[icon];
  if (!IconComponent) {
    throw new Error("Invalid icon: " + icon);
  }
  return React__default.createElement(IconComponent, {
    size: size,
    color: color,
    weight: variant,
    style: {
      flexShrink: 0
    }
  });
};
var iconMeta = {
  name: "Icon",
  displayName: "Icon",
  props: {
    icon: {
      type: "string",
      defaultValue: "Smiley"
    },
    color: {
      type: "color"
    },
    size: {
      type: "number",
      defaultValue: 16,
      control: "slider",
      min: 8,
      max: 100,
      step: 1
    },
    variant: {
      type: "choice",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
      defaultValue: "regular"
    }
  },
  importPath: "inprodi-design-system",
  importName: "Icon"
};
function registerIcon(loader, customIconMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Icon, customIconMeta != null ? customIconMeta : iconMeta);
}

var AdvancedTable = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var name = _ref.name,
    content = _ref.content,
    className = _ref.className,
    pagination = _ref.pagination,
    currentPage = _ref.currentPage,
    onPaginationChange = _ref.onPaginationChange;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var footerStyles = {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    padding: "0 20px",
    justifyContent: "space-between",
    width: "100%",
    height: "42px",
    borderBottom: "solid 1px " + token.colorBorder,
    background: token.colorBgLayout
  };
  return React__default.createElement(HoverProvider, null, React__default.createElement("div", {
    ref: ref,
    className: "wrapper",
    style: {
      width: "100%",
      maxWidth: "100%",
      overflowX: "auto"
    }
  }, React__default.createElement(reactResizablePanels.PanelGroup, {
    className: className,
    autoSaveId: name,
    direction: "horizontal",
    style: {
      minWidth: "fit-content"
    }
  }, content), pagination && React__default.createElement("div", {
    className: "footer",
    style: footerStyles
  }, React__default.createElement(Button, {
    size: "small",
    type: "default",
    onClick: function onClick() {
      return onPaginationChange(currentPage - 1);
    },
    icon: React__default.createElement(Icon, {
      size: 16,
      icon: "CaretLeft",
      variant: "regular"
    }),
    disabled: currentPage === 1
  }), React__default.createElement(antd.Pagination, {
    size: "small",
    showSizeChanger: false,
    current: currentPage,
    total: pagination.total,
    pageSize: pagination.pageSize,
    onChange: function onChange(page) {
      return onPaginationChange(page);
    }
  }), React__default.createElement(Button, {
    size: "small",
    type: "default",
    onClick: function onClick() {
      return onPaginationChange(currentPage + 1);
    },
    icon: React__default.createElement(Icon, {
      size: 16,
      icon: "CaretRight",
      variant: "regular"
    }),
    disabled: currentPage === pagination.pageCount
  }))));
});
var advancedTableMeta = {
  name: "AdvancedTable",
  displayName: "Advanced Table",
  states: {
    currentPage: {
      type: "writable",
      variableType: "number",
      valueProp: "currentPage",
      onChangeProp: "onPaginationChange"
    }
  },
  props: {
    name: {
      type: "string"
    },
    pagination: {
      type: "object",
      description: "Pagination object"
    },
    currentPage: {
      type: "number",
      defaultValue: 1
    },
    content: {
      type: "slot",
      allowedComponents: ["AdvancedTableColumn"]
    },
    onPaginationChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "AdvancedTable"
};
function registerAdvancedTable(loader, customAdvancedTableMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(AdvancedTable, customAdvancedTableMeta != null ? customAdvancedTableMeta : advancedTableMeta);
}

var Skeleton = function Skeleton(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return React__default.createElement(AntdSkeleton, Object.assign({
    enableAnimation: true,
    borderRadius: "6px",
    containerClassName: "inprodi-skeleton"
  }, props));
};
var skeletonMeta = {
  name: "Skeleton",
  displayName: "Skeleton",
  props: {
    count: {
      type: "number",
      defaultValue: 1
    },
    circle: {
      type: "boolean",
      defaultValue: false
    }
  },
  importPath: "inprodi-design-system",
  importName: "Skeleton"
};
function registerSkeleton(loader, customSkeletonMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Skeleton, customSkeletonMeta != null ? customSkeletonMeta : skeletonMeta);
}

var sizeDictionary = {
  small: "44px",
  medium: "56px",
  large: "68px"
};
var AdvancedTableCell = function AdvancedTableCell(_ref) {
  var size = _ref.size,
    align = _ref.align,
    index = _ref.index,
    _onClick = _ref.onClick,
    className = _ref.className,
    cellContent = _ref.cellContent,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var _useHover = useHover(),
    hoveredId = _useHover.hoveredId,
    setHoveredId = _useHover.setHoveredId;
  var cellStyle = {
    display: "flex",
    columnGap: "6px",
    alignItems: "center",
    justifyContent: align,
    width: "100%",
    height: sizeDictionary[size],
    maxHeight: sizeDictionary[size],
    minHeight: sizeDictionary[size],
    padding: "0px 16px",
    border: "solid 1px " + token.colorBorder,
    borderTop: "none",
    background: index === hoveredId ? token.colorBgLayout : token.colorBgContainer
  };
  return React__default.createElement("div", {
    style: cellStyle,
    className: "cell " + className,
    onClick: function onClick() {
      return !loading && _onClick && _onClick();
    },
    onMouseLeave: function onMouseLeave() {
      return setHoveredId(null);
    },
    onMouseEnter: function onMouseEnter() {
      return setHoveredId(index != null ? index : -1);
    }
  }, loading ? React__default.createElement(Skeleton, {
    count: 1,
    height: "30px"
  }) : cellContent);
};
var advancedTableCellMeta = {
  name: "AdvancedTableCell",
  displayName: "Advanced Table Cell",
  providesData: true,
  props: {
    size: {
      type: "choice",
      options: ["small", "medium", "large"],
      defaultValue: "medium"
    },
    align: {
      type: "choice",
      options: ["left", "center", "right"],
      defaultValue: "left"
    },
    index: {
      type: "number"
    },
    loading: {
      type: "boolean",
      defaultValue: false
    },
    cellContent: {
      type: "slot"
    },
    onClick: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "AdvancedTableCell"
};
function registerAdvancedTableCell(loader, customAdvancedTableCellMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(AdvancedTableCell, customAdvancedTableCellMeta != null ? customAdvancedTableCellMeta : advancedTableCellMeta);
}

var AdvancedTableColumn = function AdvancedTableColumn(_ref) {
  var title = _ref.title,
    align = _ref.align,
    cells = _ref.cells,
    minWidth = _ref.minWidth,
    maxWidth = _ref.maxWidth,
    initialWidth = _ref.initialWidth;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "-1px",
    flex: 1
  };
  var headerStyle = {
    width: "100%",
    height: "34px",
    display: "flex",
    columnGap: "6px",
    maxHeight: "34px",
    minHeight: "34px",
    padding: "0px 10px",
    position: "relative",
    alignItems: "center",
    justifyContent: align,
    background: token.colorBgLayout,
    border: "solid 1px " + token.colorBorder
  };
  var titleStyle = {
    fontSize: "12px",
    fontWeight: "300",
    lineHeight: "auto",
    color: token.colorTextSecondary
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactResizablePanels.Panel, {
    style: {
      width: initialWidth + "px",
      minWidth: minWidth + "px",
      maxWidth: maxWidth + "px"
    }
  }, React__default.createElement("div", {
    style: mainContainerStyle
  }, React__default.createElement("div", {
    className: "th",
    style: headerStyle
  }, React__default.createElement("span", {
    style: titleStyle
  }, title)), cells)), React__default.createElement(reactResizablePanels.PanelResizeHandle, null));
};
var advancedTableColumnMeta = {
  name: "AdvancedTableColumn",
  displayName: "Advanced Table Column",
  providesData: true,
  props: {
    title: {
      type: "string",
      defaultValue: "Column Title"
    },
    align: {
      type: "choice",
      options: ["left", "center", "right"],
      defaultValue: "left"
    },
    initialWidth: {
      type: "number",
      defaultValue: 200
    },
    minWidth: {
      type: "number",
      defaultValue: 100
    },
    maxWidth: {
      type: "number",
      defaultValue: 500
    },
    cells: {
      type: "slot",
      allowedComponents: ["AdvancedTableCell"]
    }
  },
  importPath: "inprodi-design-system",
  importName: "AdvancedTableColumn"
};
function registerAdvancedTableColumn(loader, customAdvancedTableColumnMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(AdvancedTableColumn, customAdvancedTableColumnMeta != null ? customAdvancedTableColumnMeta : advancedTableColumnMeta);
}

var _excluded$1 = ["size", "mask", "value", "error", "variant", "leftIcon", "onChange", "rightIcon", "name", "debounce", "onClearError", "disabled", "onBlur"];
var Input = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var size = _ref.size,
    mask = _ref.mask,
    value = _ref.value,
    error = _ref.error,
    variant = _ref.variant,
    leftIcon = _ref.leftIcon,
    onChange = _ref.onChange,
    rightIcon = _ref.rightIcon,
    _ref$debounce = _ref.debounce,
    debounce = _ref$debounce === void 0 ? 0 : _ref$debounce,
    onClearError = _ref.onClearError,
    disabled = _ref.disabled,
    _onBlur = _ref.onBlur,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var _useState = React.useState(value),
    inputValue = _useState[0],
    setInputValue = _useState[1];
  var _useState2 = React.useState(error),
    inputError = _useState2[0],
    setInputError = _useState2[1];
  React.useEffect(function () {
    setInputError(error);
  }, [error]);
  React.useEffect(function () {
    setInputValue(value);
  }, [value]);
  var debouncedOnChange = React.useMemo(function () {
    if (debounce > 0 && !mask) {
      return _debounce(function (val) {
        return onChange(val);
      }, debounce);
    } else {
      return onChange;
    }
  }, [onChange, debounce, mask]);
  var handleChange = React.useCallback(function (e) {
    var newValue = e.target.value;
    setInputValue(newValue);
    setInputError(null);
    debouncedOnChange(newValue);
    onClearError && onClearError();
  }, [debouncedOnChange]);
  var handleBlur = React.useCallback(function (e) {
    if (mask && inputValue) {
      setInputValue(e.target.value);
      onChange(e.target.value);
    }
  }, [mask, inputValue, onChange]);
  if (mask) {
    return React__default.createElement(InputMask, {
      mask: mask,
      maskChar: null,
      disabled: disabled,
      onBlur: handleBlur,
      onChange: handleChange,
      value: inputValue != null ? inputValue : value
    }, function (inputProps) {
      return React__default.createElement(antd.Input, Object.assign({}, inputProps, {
        ref: ref,
        variant: variant,
        prefix: leftIcon,
        suffix: rightIcon,
        status: inputError ? "error" : undefined,
        style: _extends({
          height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px"
        }, variant === "borderless" && {
          padding: 0
        }),
        styles: {
          prefix: {
            marginInlineEnd: "0px"
          },
          suffix: {
            marginInlineStart: "0px"
          },
          input: {
            padding: size === "small" ? "0px 8px" : size === "middle" ? "0px 12px" : "0px 16px"
          }
        }
      }, props));
    });
  }
  return React__default.createElement(antd.Input, Object.assign({
    ref: ref,
    variant: variant,
    prefix: leftIcon,
    suffix: rightIcon,
    disabled: disabled,
    onChange: handleChange,
    value: inputValue != null ? inputValue : value,
    status: inputError ? "error" : undefined,
    style: _extends({
      height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px"
    }, variant === "borderless" && {
      padding: 0
    }),
    styles: {
      prefix: {
        marginInlineEnd: "0px"
      },
      suffix: {
        marginInlineStart: "0px"
      },
      input: {
        padding: size === "small" ? "0px 8px" : size === "middle" ? "0px 12px" : "0px 16px"
      }
    },
    onBlur: function onBlur(e) {
      return _onBlur && _onBlur(e);
    }
  }, props));
});
var inputMeta = {
  name: "Input",
  displayName: "Input",
  providesData: true,
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "string"
    },
    placeholder: {
      type: "string",
      defaultValue: "Input Placeholder"
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    variant: {
      type: "choice",
      options: ["outlined", "borderless", "filled"],
      defaultValue: "outlined"
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    allowClear: {
      type: "boolean",
      defaultValue: false,
      advanced: true
    },
    debounce: {
      type: "number",
      defaultValue: 0,
      advanced: true
    },
    mask: {
      type: "string",
      advanced: true
    },
    error: {
      type: "string",
      advanced: true
    },
    leftIcon: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: "Icon"
      }],
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    },
    rightIcon: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: "Icon"
      }],
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "string"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Input"
};
function registerInput(loader, customInputMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Input, customInputMeta != null ? customInputMeta : inputMeta);
}

var AutoComplete = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var value = _ref.value,
    isEmpty = _ref.isEmpty,
    loading = _ref.loading,
    _onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    menuContent = _ref.menuContent,
    onPressEnter = _ref.onPressEnter,
    closeOnSelect = _ref.closeOnSelect;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var _useState = React.useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var inputRef = React.useRef(null);
  var dropdownStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: "6px",
    border: "solid 1px " + token.colorBorder,
    boxShadow: token.boxShadowSecondary
  };
  React.useEffect(function () {
    if (isEmpty) {
      setOpen(false);
    }
  }, [isEmpty]);
  React.useImperativeHandle(ref, function () {
    return {
      clearValue: function clearValue() {
        _onChange(null);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    };
  });
  var handleFocus = function handleFocus() {
    if (!isEmpty) {
      setOpen(true);
    }
  };
  var handleBlur = function handleBlur() {
    setOpen(false);
  };
  return React__default.createElement(antd.Dropdown, {
    autoAdjustOverflow: true,
    destroyPopupOnHide: true,
    open: open,
    trigger: [],
    onOpenChange: function onOpenChange(flag) {
      return setOpen(flag);
    },
    dropdownRender: function dropdownRender() {
      return React__default.createElement("div", {
        style: dropdownStyle,
        onClick: function onClick() {
          closeOnSelect && setOpen(false);
        }
      }, loading ? React__default.createElement("div", {
        className: "loading-container",
        style: {
          padding: "0 4px 4px"
        }
      }, Array.from({
        length: 3
      }).map(function (_, i) {
        return React__default.createElement(Skeleton, {
          key: i,
          count: 1,
          height: "34px"
        });
      })) : React__default.createElement("div", {
        style: {
          overflow: "auto",
          maxHeight: "200px"
        }
      }, menuContent));
    }
  }, React__default.createElement(Input, {
    size: "middle",
    ref: inputRef,
    debounce: 100,
    onBlur: handleBlur,
    defaultValue: value,
    onFocus: handleFocus,
    placeholder: placeholder,
    onPressEnter: onPressEnter,
    onChange: function onChange(value) {
      return _onChange(value);
    }
  }));
});
var autoCompleteMeta = {
  name: "AutoComplete",
  displayName: "Auto Complete",
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    isEmpty: {
      type: "boolean",
      defaultValue: false
    },
    loading: {
      type: "boolean",
      defaultValue: false
    },
    closeOnSelect: {
      type: "boolean",
      defaultValue: true
    },
    value: {
      type: "string"
    },
    menuContent: {
      type: "slot"
    },
    placeholder: {
      type: "string",
      defaultValue: "Search..."
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "string"
      }]
    },
    onPressEnter: {
      type: "eventHandler",
      argTypes: []
    }
  },
  refActions: {
    clearValue: {
      description: "clear autocomplete value",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "AutoComplete"
};
function registerAutoComplete(loader, customAutocompleteMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(AutoComplete, customAutocompleteMeta != null ? customAutocompleteMeta : autoCompleteMeta);
}

var sizeDictionary$1 = {
  xxs: "20px",
  xs: "24px",
  sm: "32px",
  md: "40px",
  lg: "48px",
  xl: "56px",
  xxl: "80px"
};
var iconSizeDictionary = {
  xxs: 10,
  xs: 12,
  sm: 16,
  md: 22,
  lg: 26,
  xl: 30,
  xxl: 38
};
var fontSizeDictionary = {
  xxs: 9,
  xs: 10,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 26
};
var Avatar = function Avatar(_ref) {
  var size = _ref.size,
    type = _ref.type,
    color = _ref.color,
    variant = _ref.variant,
    content = _ref.content,
    bordered = _ref.bordered,
    className = _ref.className,
    isCircular = _ref.isCircular;
  var borderWidth = size === "xxs" ? "1px" : "2px";
  var avatarStyles = {
    boxSizing: "border-box",
    width: sizeDictionary$1[size],
    maxWidth: sizeDictionary$1[size],
    minWidth: sizeDictionary$1[size],
    height: sizeDictionary$1[size],
    maxHeight: sizeDictionary$1[size],
    minHeight: sizeDictionary$1[size],
    borderRadius: isCircular ? "50%" : "6px",
    border: bordered ? "solid " + borderWidth + " " + (variant === "filled" ? color : color + "4D") : "none",
    padding: bordered ? size === "xxs" || size === "xs" ? "1px" : "2px" : "0px"
  };
  var avatarInnerStyles = {
    width: "100%",
    height: "100%",
    borderRadius: isCircular ? "50%" : bordered ? "4px" : "6px",
    background: variant === "filled" ? color : color + "1F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return React__default.createElement("div", {
    className: "avatar-inprodi " + className,
    style: avatarStyles
  }, React__default.createElement("div", {
    className: "avatar-inner",
    style: avatarInnerStyles
  }, type === "image" && React__default.createElement(antd.Image, {
    src: content,
    width: "100%",
    height: "100%",
    preview: false,
    alt: "avatar-image",
    style: {
      objectFit: "cover",
      verticalAlign: "unset",
      borderRadius: isCircular ? "50%" : bordered ? "3px" : "6px",
      background: "white"
    }
  }), type === "icon" && React__default.createElement(Icon, {
    variant: "bold",
    icon: content,
    size: iconSizeDictionary[size],
    color: variant === "filled" ? "white" : color
  }), type === "text" && React__default.createElement("p", {
    style: {
      fontSize: fontSizeDictionary[size],
      color: variant === "filled" ? "white" : color,
      fontWeight: 500,
      textTransform: "uppercase"
    }
  }, content == null ? void 0 : content.slice(0, 1))));
};
var avatarMeta = {
  name: "Avatar",
  displayName: "Avatar",
  props: {
    color: {
      type: "color",
      keepCssVar: false,
      defaultValue: "#000000"
    },
    variant: {
      type: "choice",
      options: ["filled", "light"],
      defaultValue: "filled"
    },
    type: {
      type: "choice",
      options: ["text", "image", "icon"],
      defaultValue: "text"
    },
    size: {
      type: "choice",
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
      defaultValue: "md"
    },
    isCircular: {
      type: "boolean",
      defaultValue: false
    },
    bordered: {
      type: "boolean",
      defaultValue: false
    },
    content: {
      type: "string",
      defaultValue: "Avatar"
    }
  },
  importPath: "inprodi-design-system",
  importName: "Avatar"
};
function registerAvatar(loader, customAvatarMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Avatar, customAvatarMeta != null ? customAvatarMeta : avatarMeta);
}

var _excluded$2 = ["shadow", "content", "padding", "isLoading"];
var shadowDictionary = {
  none: "none",
  sm: "rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.01) 0px 1px 2px 0px",
  md: "rgba(0, 0, 0, 0.04) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 5px 5px -5px",
  lg: "rgba(0, 0, 0, 0.04) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
};
var Card = function Card(_ref) {
  var shadow = _ref.shadow,
    content = _ref.content,
    padding = _ref.padding,
    isLoading = _ref.isLoading,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return React__default.createElement(antd.Card, Object.assign({
    bordered: true,
    loading: isLoading,
    className: "inprodi-card",
    style: {
      boxShadow: shadowDictionary[shadow],
      padding: padding,
      borderRadius: "6px"
    },
    styles: {
      body: {
        padding: "0px",
        height: "100%"
      }
    }
  }, props), content);
};
var cardMeta = {
  name: "Card",
  displayName: "Card",
  props: {
    isLoading: {
      type: "boolean",
      description: "Set the loading state of card",
      defaultValue: false
    },
    padding: {
      type: "string",
      description: "Set the padding of card",
      defaultValue: "16px"
    },
    shadow: {
      type: "choice",
      options: ["none", "sm", "md", "lg"],
      description: "Set the shadow of card",
      defaultValue: "none"
    },
    content: {
      type: "slot",
      description: "Set the content of card"
    }
  },
  importPath: "inprodi-design-system",
  importName: "Card"
};
function registerCard(loader, customCardMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Card, customCardMeta != null ? customCardMeta : cardMeta);
}

var _excluded$3 = ["type", "title", "loading", "content", "bodyLoading", "description"];
var iconDictionary = {
  info: "Info",
  danger: "WarningOctagon",
  warning: "Warning"
};
var Confirmation = function Confirmation(_ref) {
  var type = _ref.type,
    title = _ref.title,
    loading = _ref.loading,
    bodyLoading = _ref.bodyLoading,
    description = _ref.description,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var containerStyle = {
    display: "flex",
    flexDirection: "row",
    width: "calc( 100% - 40px )",
    gap: "20px"
  };
  var iconStyles = {
    backgroundColor: type === "danger" ? token.colorErrorBg : type === "warning" ? token.colorWarningBg : token.colorInfoBg,
    color: type === "danger" ? token.colorError : type === "warning" ? token.colorWarning : token.colorInfo,
    borderRadius: "50%",
    width: "40px",
    minWidth: "40px",
    height: "40px",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return React__default.createElement(antd.Modal, Object.assign({
    centered: true,
    destroyOnClose: true,
    width: "500px",
    closable: false,
    cancelText: "Cancelar",
    confirmLoading: loading,
    className: "confirmation-modal",
    footer: bodyLoading ? null : undefined,
    okButtonProps: {
      danger: type === "danger"
    },
    styles: {
      header: {
        display: "none"
      }
    }
  }, props), React__default.createElement("div", {
    className: "confirmation-content",
    style: containerStyle
  }, !bodyLoading ? React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: "icon-container",
    style: iconStyles
  }, React__default.createElement(Icon, {
    icon: iconDictionary[type],
    size: 20,
    variant: "duotone"
  })), React__default.createElement("div", {
    className: "text-container",
    style: {
      width: "100%"
    }
  }, React__default.createElement("h3", {
    style: {
      fontSize: "16px",
      color: "black",
      fontWeight: 500,
      margin: 0
    }
  }, title), React__default.createElement("p", {
    style: {
      color: "#868E96",
      fontSize: "14px",
      fontWeight: 400,
      margin: 0
    }
  }, description))) : React__default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      width: "100%"
    }
  }, React__default.createElement(Skeleton, {
    width: "100%",
    count: 1,
    height: "30px"
  }), React__default.createElement(Skeleton, {
    width: "100%",
    count: 1,
    height: "30px"
  }), React__default.createElement(Skeleton, {
    width: "100%",
    count: 1,
    height: "30px"
  }))));
};
var confirmationMeta = {
  name: "Confirmation",
  displayName: "Confirmation",
  props: {
    title: {
      type: "string",
      defaultValue: "Confirmation Title"
    },
    description: {
      type: "string",
      defaultValue: "Confirmation Description"
    },
    type: {
      type: "choice",
      options: ["info", "danger", "warning"],
      defaultValue: "danger"
    },
    open: {
      type: "boolean",
      defaultValue: false
    },
    okText: {
      type: "string",
      defaultValue: "Confirmar"
    },
    bodyLoading: {
      type: "boolean",
      defaultValue: false
    },
    loading: {
      type: "boolean",
      defaultValue: false
    },
    content: {
      type: "slot"
    },
    onCancel: {
      type: "eventHandler",
      argTypes: []
    },
    onOk: {
      type: "eventHandler",
      argTypes: []
    },
    afterOpenChange: {
      type: "eventHandler",
      argTypes: []
    },
    afterClose: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "Confirmation"
};
function registerConfirmation(loader, customConfirmationMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Confirmation, customConfirmationMeta != null ? customConfirmationMeta : confirmationMeta);
}

var _excluded$4 = ["size", "error", "showTime", "value", "minDate", "maxDate", "onChange"];
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.locale("es-mx");
var DatePicker = function DatePicker(_ref) {
  var size = _ref.size,
    error = _ref.error,
    showTime = _ref.showTime,
    value = _ref.value,
    minDate = _ref.minDate,
    maxDate = _ref.maxDate,
    _onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return React__default.createElement(antd.DatePicker, Object.assign({}, props, {
    style: {
      height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px"
    },
    showNow: false,
    showTime: showTime,
    format: showTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD",
    minDate: minDate ? dayjs(minDate) : undefined,
    maxDate: maxDate ? dayjs(maxDate) : undefined,
    value: value ? dayjs(value) : undefined,
    status: error ? "error" : undefined,
    onChange: function onChange(date) {
      _onChange(date == null ? void 0 : date.format("YYYY-MM-DD"));
    }
  }));
};
var datePickerMeta = {
  name: "DatePicker",
  displayName: "Date Picker",
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "string"
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    minDate: {
      type: "string"
    },
    allowClear: {
      type: "boolean",
      defaultValue: false
    },
    maxDate: {
      type: "string"
    },
    picker: {
      type: "choice",
      options: ["date", "week", "month", "quarter", "year"],
      defaultValue: "date"
    },
    placeholder: {
      type: "string",
      defaultValue: "Seleccionar..."
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    error: {
      type: "string"
    },
    showTime: {
      type: "boolean",
      defaultValue: false
    },
    variant: {
      type: "choice",
      options: ["outlined", "borderless", "filled"],
      defaultValue: "outlined"
    },
    onChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "DatePicker"
};
function registerDatePicker(loader, customDatePickerMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(DatePicker, customDatePickerMeta != null ? customDatePickerMeta : datePickerMeta);
}

var _excluded$5 = ["error", "value", "minDate", "maxDate", "onChange"];
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.locale("es-mx");
var DateRangePicker = function DateRangePicker(_ref) {
  var error = _ref.error,
    value = _ref.value,
    minDate = _ref.minDate,
    maxDate = _ref.maxDate,
    _onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  return React__default.createElement(antd.DatePicker.RangePicker, Object.assign({}, props, {
    showNow: false,
    format: "MMMM D, YYYY",
    minDate: minDate ? dayjs(minDate) : undefined,
    maxDate: maxDate ? dayjs(maxDate) : undefined,
    value: value,
    status: error ? "error" : undefined,
    onChange: function onChange(dates) {
      if (dates) {
        _onChange([dates[0], dates[1]]);
      }
    }
  }));
};
var dateRangePickerMeta = {
  name: "DateRangePicker",
  displayName: "Date Range Picker",
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "array",
      defaultValue: []
    },
    disabled: {
      type: "array",
      defaultValue: []
    },
    minDate: {
      type: "string"
    },
    allowClear: {
      type: "boolean",
      defaultValue: false
    },
    maxDate: {
      type: "string"
    },
    picker: {
      type: "choice",
      options: ["date", "week", "month", "quarter", "year"],
      defaultValue: "date"
    },
    placeholder: {
      type: "string",
      defaultValue: "Seleccionar..."
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    error: {
      type: "string"
    },
    showTime: {
      type: "boolean",
      defaultValue: false
    },
    variant: {
      type: "choice",
      options: ["outlined", "borderless", "filled"],
      defaultValue: "outlined"
    },
    onChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "DateRangePicker"
};
function registerDateRangePicker(loader, customDateRangePickerMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(DateRangePicker, customDateRangePickerMeta != null ? customDateRangePickerMeta : dateRangePickerMeta);
}

var _excluded$6 = ["text", "margin"];
var Divider = function Divider(_ref) {
  var text = _ref.text,
    margin = _ref.margin,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  return React__default.createElement(antd.Divider, Object.assign({
    style: {
      margin: margin
    }
  }, props), text);
};
var dividerMeta = {
  name: "Divider",
  displayName: "Divider",
  props: {
    text: {
      type: "string"
    },
    type: {
      type: "choice",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal"
    },
    dashed: {
      type: "boolean",
      defaultValue: false
    },
    margin: {
      type: "string",
      defaultValue: "0px"
    },
    orientation: {
      type: "choice",
      options: ["left", "right", "center"],
      defaultValue: "left",
      hidden: function hidden(props) {
        return !props.text;
      }
    },
    orientationMargin: {
      type: "string",
      defaultValue: "0px",
      hidden: function hidden(props) {
        return !props.text;
      }
    }
  },
  importPath: "inprodi-design-system",
  importName: "Divider"
};
function registerDivider(loader, customDividerMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Divider, customDividerMeta != null ? customDividerMeta : dividerMeta);
}

var _excluded$7 = ["open", "content", "maskColor", "bodyPadding"];
var Drawer = function Drawer(_ref) {
  var open = _ref.open,
    content = _ref.content,
    maskColor = _ref.maskColor,
    bodyPadding = _ref.bodyPadding,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  return React__default.createElement(antd.Drawer, Object.assign({
    destroyOnClose: true,
    open: open,
    closeIcon: React__default.createElement(Icon, {
      icon: "X",
      variant: "regular"
    }),
    styles: {
      header: {
        padding: "8px 16px 8px 10px !important",
        borderBottom: "solid 1px " + token.colorBorder + " !important"
      },
      body: {
        padding: bodyPadding
      },
      mask: {
        background: maskColor ? maskColor : "#0000004D"
      }
    }
  }, props), content);
};
var drawerMeta = {
  name: "Drawer",
  displayName: "Drawer",
  states: {
    open: {
      type: "writable",
      variableType: "boolean",
      valueProp: "open",
      onChangeProp: "onOpenChange"
    }
  },
  props: {
    placement: {
      type: "choice",
      options: ["top", "right", "bottom", "left"],
      defaultValue: "right"
    },
    title: {
      type: "string",
      defaultValue: "Drawer Title"
    },
    open: {
      type: "boolean",
      defaultValue: false
    },
    width: {
      type: "string",
      defaultValue: "350px"
    },
    height: {
      type: "string"
    },
    bodyPadding: {
      type: "string",
      defaultValue: "16px"
    },
    mask: {
      type: "boolean",
      defaultValue: true,
      advanced: true
    },
    maskClosable: {
      type: "boolean",
      defaultValue: true,
      advanced: true
    },
    maskColor: {
      type: "color",
      defaultValue: "#0000004D"
    },
    afterOpenChange: {
      type: "eventHandler",
      argTypes: []
    },
    onClose: {
      type: "eventHandler",
      argTypes: []
    },
    onOpenChange: {
      type: "eventHandler",
      argTypes: []
    },
    content: {
      type: "slot"
    },
    extra: {
      type: "slot",
      hidePlaceholder: true
    },
    footer: {
      type: "slot",
      hidePlaceholder: true
    }
  },
  importPath: "inprodi-design-system",
  importName: "Drawer"
};
function registerDrawer(loader, customDrawerMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Drawer, customDrawerMeta != null ? customDrawerMeta : drawerMeta);
}

var Dropdown = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var propOpen = _ref.open,
    width = _ref.width,
    onOpen = _ref.onOpen,
    loading = _ref.loading,
    trigger = _ref.trigger,
    onClose = _ref.onClose,
    isEmpty = _ref.isEmpty,
    onSearch = _ref.onSearch,
    placement = _ref.placement,
    className = _ref.className,
    maxHeight = _ref.maxHeight,
    searchable = _ref.searchable,
    searchValue = _ref.searchValue,
    menuContent = _ref.menuContent,
    closeOnSelect = _ref.closeOnSelect,
    triggerContent = _ref.triggerContent;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var _useState = React.useState(propOpen),
    open = _useState[0],
    setOpen = _useState[1];
  var inputRef = React.useRef(null);
  var dropdownStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: "6px",
    border: "solid 1px " + token.colorBorder,
    boxShadow: token.boxShadowSecondary,
    maxWidth: width,
    minWidth: width
  };
  React.useImperativeHandle(ref, function () {
    return {
      toggleOpen: function toggleOpen() {
        setOpen(function (prevOpen) {
          if (prevOpen) {
            onClose && onClose();
            onSearch && onSearch(null);
          }
          if (!prevOpen) {
            onOpen && onOpen();
            setTimeout(function () {
              inputRef.current && inputRef.current.focus();
            }, 0);
          }
          return !prevOpen;
        });
      }
    };
  });
  React.useEffect(function () {
    if (open && searchable) {
      inputRef.current && inputRef.current.focus();
    }
  }, [open, searchable]);
  return React__default.createElement(antd.Dropdown, {
    autoAdjustOverflow: true,
    destroyPopupOnHide: true,
    open: open,
    className: className,
    trigger: trigger,
    placement: placement,
    onOpenChange: function onOpenChange() {
      setOpen(!open);
      if (open) {
        onClose && onClose();
        onSearch && onSearch(null);
      }
      if (!open) {
        onOpen && onOpen();
        setTimeout(function () {
          inputRef.current && inputRef.current.focus();
        }, 0);
      }
    },
    dropdownRender: function dropdownRender() {
      return React__default.createElement("div", {
        style: dropdownStyle,
        onClick: function onClick() {
          closeOnSelect && setOpen(false);
          onClose && onClose();
        }
      }, searchable && React__default.createElement(React__default.Fragment, null, React__default.createElement(Input, {
        size: "small",
        debounce: 500,
        variant: "borderless",
        placeholder: "Buscar...",
        ref: inputRef,
        onClick: function onClick(event) {
          return event.stopPropagation();
        },
        onChange: function onChange(value) {
          return onSearch && onSearch(value);
        },
        style: {
          borderRadius: "4px 4px 0 0",
          height: "34px"
        },
        leftIcon: React__default.createElement(Icon, {
          size: 16,
          icon: "MagnifyingGlass",
          color: "#868E96",
          variant: "regular"
        })
      }), React__default.createElement(Divider, {
        margin: "0"
      })), loading ? React__default.createElement("div", {
        className: "loading-container",
        style: {
          padding: "0 4px 4px"
        }
      }, Array.from({
        length: 3
      }).map(function (_, i) {
        return React__default.createElement(Skeleton, {
          key: i,
          count: 1,
          height: "34px"
        });
      })) : isEmpty ? React__default.createElement("div", {
        className: "empty-data",
        style: {
          width: "calc(100% - 40px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 20px",
          gap: "6px"
        }
      }, React__default.createElement(Icon, {
        icon: "ListMagnifyingGlass",
        size: 24,
        variant: "duotone",
        color: token.colorPrimary
      }), React__default.createElement("p", {
        style: {
          color: token.colorTextSecondary,
          fontSize: "12px",
          fontWeight: 400,
          textAlign: "center"
        }
      }, searchValue ? "¡Vaya! Parece que no hay resultados para tu búsqueda" : "¡Vaya! Parece que actualmente no hay registros para mostrar")) : React__default.createElement("div", {
        style: {
          overflow: "auto",
          maxHeight: maxHeight
        }
      }, menuContent));
    }
  }, triggerContent);
});
var dropdownMeta = {
  name: "Dropdown",
  displayName: "Dropdown",
  states: {
    searchValue: {
      type: "writable",
      variableType: "text",
      valueProp: "searchValue",
      onChangeProp: "onSearch"
    },
    loading: {
      type: "writable",
      variableType: "boolean",
      valueProp: "loading",
      onChangeProp: "onLoadingChange"
    }
  },
  props: {
    trigger: {
      type: "choice",
      options: ["hover", "click", "contextMenu"],
      defaultValue: "click"
    },
    width: {
      type: "string"
    },
    maxHeight: {
      type: "string",
      defaultValue: "200px"
    },
    placement: {
      type: "choice",
      options: ["bottom", "bottomLeft", "bottomRight", "top", "topLeft", "topRight"],
      defaultValue: "bottomRight"
    },
    searchable: {
      type: "boolean",
      defaultValue: false
    },
    searchValue: {
      type: "string",
      defaultValue: "",
      hidden: function hidden(props) {
        return !props.searchable;
      }
    },
    isEmpty: {
      type: "boolean",
      defaultValue: false
    },
    closeOnSelect: {
      type: "boolean",
      defaultValue: true
    },
    loading: {
      type: "boolean",
      defaultValue: false
    },
    onLoadingChange: {
      type: "eventHandler",
      argTypes: []
    },
    triggerContent: {
      type: "slot"
    },
    menuContent: {
      type: "slot"
    },
    onSearch: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "string"
      }]
    },
    onOpen: {
      type: "eventHandler",
      argTypes: []
    },
    onClose: {
      type: "eventHandler",
      argTypes: []
    }
  },
  refActions: {
    toggleOpen: {
      description: "Toggle the open state of the dropdown",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "Dropdown"
};
function registerDropdown(loader, customDropdownMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Dropdown, customDropdownMeta != null ? customDropdownMeta : dropdownMeta);
}

var DropdownItem = function DropdownItem(_ref) {
  var leftSection = _ref.leftSection,
    rightSection = _ref.rightSection,
    label = _ref.label,
    isSelected = _ref.isSelected,
    disabled = _ref.disabled,
    selectedPosition = _ref.selectedPosition,
    _onClick = _ref.onClick,
    className = _ref.className;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var dropdownItemStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 8px",
    gap: "12px",
    borderRadius: "4px",
    cursor: disabled ? "default" : "pointer",
    transition: "all 0.3s ease-in-out",
    background: token.colorBgContainer,
    maxHeight: "34px",
    minHeight: "34px",
    margin: "2px",
    backgroundColor: disabled ? token.colorBgLayout : token.colorBgContainer
  };
  var labelStyle = {
    fontSize: "14px",
    fontWeight: isSelected ? "500" : "400",
    lineHeight: "20px",
    color: disabled ? token.colorTextDisabled : token.colorText,
    width: "100%",
    maxWidth: "100%",
    whiteSpace: "pre",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minWidth: "max-content"
  };
  return React__default.createElement("div", {
    className: "dropdown-item " + className,
    style: dropdownItemStyles,
    onClick: function onClick() {
      if (!disabled) {
        _onClick();
      }
    }
  }, isSelected && selectedPosition === "left" && React__default.createElement(Icon, {
    size: 16,
    variant: "duotone",
    icon: "CheckCircle",
    color: token.colorPrimary
  }), leftSection, React__default.createElement("p", {
    className: "dropdown-item-label",
    style: labelStyle
  }, label), rightSection, isSelected && selectedPosition === "right" && React__default.createElement(Icon, {
    size: 16,
    variant: "duotone",
    icon: "CheckCircle",
    color: token.colorPrimary
  }));
};
var dropdownItemMeta = {
  name: "DropdownItem",
  displayName: "Dropdown Item",
  states: {
    isSelected: {
      type: "writable",
      variableType: "boolean",
      valueProp: "isSelected",
      onChangeProp: "onIsSelectedChange"
    }
  },
  props: {
    label: {
      type: "string",
      defaultValue: "Dropdown Item"
    },
    isSelected: {
      type: "boolean",
      defaultValue: false
    },
    selectedPosition: {
      type: "choice",
      options: ["none", "left", "right"],
      defaultValue: "right",
      advanced: true
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    rightSection: {
      type: "slot",
      hidePlaceholder: true
    },
    leftSection: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: "Icon"
      }],
      hidePlaceholder: true
    },
    onClick: {
      type: "eventHandler",
      argTypes: []
    },
    onIsSelectedChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "DropdownItem"
};
function registerDropdownItem(loader, customDropdownItemMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(DropdownItem, customDropdownItemMeta != null ? customDropdownItemMeta : dropdownItemMeta);
}

var Form = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var content = _ref.content,
    onSubmit = _ref.onSubmit,
    className = _ref.className,
    onLoadingChange = _ref.onLoadingChange;
  var formRef = React.useRef(null);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            onLoadingChange(true);
            _context.t0 = onSubmit;
            if (!_context.t0) {
              _context.next = 6;
              break;
            }
            _context.next = 6;
            return onSubmit();
          case 6:
            onLoadingChange(false);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  React.useImperativeHandle(ref, function () {
    return {
      submitForm: function submitForm() {
        var _formRef$current;
        (_formRef$current = formRef.current) == null || _formRef$current.dispatchEvent(new Event("submit", {
          cancelable: true,
          bubbles: true
        }));
      }
    };
  });
  return React__default.createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit,
    className: "inprodi-form " + className
  }, content);
});
var formMeta = {
  name: "Form",
  displayName: "Form",
  states: {
    loading: {
      type: "writable",
      variableType: "boolean",
      valueProp: "loading",
      onChangeProp: "onLoadingChange"
    }
  },
  props: {
    content: {
      type: "slot",
      description: "Set the content of form"
    },
    loading: {
      type: "boolean",
      description: "Set the loading status of form",
      defaultValue: false
    },
    onLoadingChange: {
      type: "eventHandler",
      description: "Event handler for form loading change",
      argTypes: []
    },
    onSubmit: {
      type: "eventHandler",
      description: "Event handler for form submit",
      argTypes: []
    }
  },
  refActions: {
    sumbitForm: {
      description: "Submits the form from outside element",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "Form"
};
function registerForm(loader, customFormMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Form, customFormMeta != null ? customFormMeta : formMeta);
}

var FormField = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    content = _ref.content,
    required = _ref.required,
    className = _ref.className,
    showErrorMessage = _ref.showErrorMessage,
    onErrorChange = _ref.onErrorChange;
  React.useImperativeHandle(ref, function () {
    return {
      setFieldError: function setFieldError(message) {
        onErrorChange(message);
      }
    };
  }, [onErrorChange]);
  var handleClearError = function handleClearError() {
    onErrorChange(null);
  };
  var labelContainerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  };
  var labelStyles = {
    marginBottom: "4px",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px"
  };
  var requiredStyle = {
    color: antd.theme.useToken().token.colorError,
    fontWeight: "600",
    marginLeft: "5px"
  };
  var errorContainerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",
    color: antd.theme.useToken().token.colorError,
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "16px",
    marginTop: "4px"
  };
  return React__default.createElement("div", {
    className: "form_field-inprodi " + className,
    ref: ref
  }, React__default.createElement("div", null, label && React__default.createElement("div", {
    className: "label-container",
    style: labelContainerStyles
  }, React__default.createElement("label", {
    htmlFor: name,
    style: labelStyles
  }, label, required && React__default.createElement("span", {
    style: requiredStyle
  }, "*"))), React__default.cloneElement(content, {
    error: error,
    onClearError: handleClearError
  }), error && showErrorMessage && React__default.createElement("div", {
    className: "error-container",
    style: errorContainerStyles
  }, React__default.createElement(react.WarningDiamond, {
    size: 12,
    weight: "bold"
  }), React__default.createElement("p", {
    className: "field_error"
  }, error))));
});
var formFieldMeta = {
  name: "Form Field",
  displayName: "Form Field",
  states: {
    error: {
      type: "writable",
      variableType: "text",
      valueProp: "error",
      onChangeProp: "onErrorChange"
    }
  },
  props: {
    name: {
      type: "string",
      defaultValue: "",
      description: "The name of the form field"
    },
    label: {
      type: "string",
      defaultValue: "Input Label",
      description: "The label of the form field"
    },
    required: {
      type: "boolean",
      defaultValue: false,
      description: "Whether the form field is required"
    },
    content: {
      type: "slot",
      description: "The content of the form field"
    },
    error: {
      type: "string",
      description: "The error of the form field",
      defaultValue: ""
    },
    showErrorMessage: {
      type: "boolean",
      defaultValue: true,
      description: "Whether to show the error message"
    },
    onErrorChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  refActions: {
    setFieldError: {
      description: "Set a manual error to the field",
      argTypes: [{
        name: "message",
        type: "string"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "FormField"
};
function registerFormField(loader, customFormFieldMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(FormField, customFormFieldMeta != null ? customFormFieldMeta : formFieldMeta);
}

reactFilepond.registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);
var ImageUploader = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    label = _ref.label,
    disabled = _ref.disabled,
    multiple = _ref.multiple,
    maxFiles = _ref.maxFiles,
    className = _ref.className,
    dropOnPage = _ref.dropOnPage;
  var _useState = React.useState(value),
    files = _useState[0],
    setFiles = _useState[1];
  var _useState2 = React.useState(false),
    updated = _useState2[0],
    setUpdated = _useState2[1];
  var pondRef = React.useRef(null);
  React.useEffect(function () {
    if (files.length === 0 && !updated) {
      setFiles(value);
    }
  }, [value]);
  React.useImperativeHandle(ref, function () {
    return {
      getFiles: function getFiles() {
        var result = pondRef.current.getFiles();
        var fileList = [];
        result.map(function (file) {
          fileList.push(file.file);
        });
        return fileList;
      }
    };
  });
  return React__default.createElement("div", {
    className: className
  }, React__default.createElement(reactFilepond.FilePond, {
    ref: function ref(_ref2) {
      return pondRef.current = _ref2;
    },
    files: files,
    onaddfile: function onaddfile(error, file) {
      console.log(error);
      var index = files.findIndex(function (i) {
        return i === file.source;
      });
      if (index === -1) {
        setFiles(function (prevFiles) {
          return [].concat(prevFiles, [file.source]);
        });
      }
    },
    onremovefile: function onremovefile(error, file) {
      console.log(error);
      setFiles(function (prevFiles) {
        return prevFiles.filter(function (prevFile) {
          return prevFile !== file.source;
        });
      });
      setUpdated(true);
    },
    credits: false,
    maxFiles: maxFiles,
    disabled: disabled,
    allowReorder: true,
    maxParallelUploads: 3,
    dropOnPage: dropOnPage,
    allowMultiple: multiple,
    className: "image-uploader",
    itemInsertLocation: "after",
    labelDecimalSeparator: ".",
    labelThousandsSeparator: ",",
    acceptedFileTypes: ["image/*"],
    labelIdle: label,
    labelInvalidField: "Hay archivos inv\xE1lidos",
    labelFileWaitingForSize: "Esperando tama\xF1o...",
    labelFileSizeNotAvailable: "Tama\xF1o no disponible",
    labelFileLoading: "Cargando...",
    labelFileLoadError: "Error al cargar el archivo",
    labelFileProcessing: "Subiendo...",
    labelFileProcessingComplete: "Completado",
    labelFileProcessingAborted: "Cancelado",
    labelTapToCancel: "click para cancelar",
    labelTapToRetry: "click para reintentar",
    labelTapToUndo: "click para deshacer",
    labelButtonRemoveItem: "Eliminar",
    labelButtonAbortItemLoad: "Cancelar",
    labelButtonRetryItemLoad: "Reintentar",
    labelButtonAbortItemProcessing: "Cancelar",
    labelButtonUndoItemProcessing: "Deshacer",
    labelButtonRetryItemProcessing: "Reintentar",
    labelButtonProcessItem: "Subir"
  }));
});
var imageUploaderMeta = {
  name: "ImageUploader",
  displayName: "Image Uploader",
  props: {
    value: {
      type: "array",
      defaultValue: []
    },
    label: {
      type: "string",
      defaultValue: "Arrastra y suelta imágenes o haz click para buscar"
    },
    authToken: {
      type: "string"
    },
    uploadUrl: {
      type: "string"
    },
    deleteUrl: {
      type: "string"
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    multiple: {
      type: "boolean",
      defaultValue: true
    },
    maxFiles: {
      type: "number",
      defaultValue: 1
    },
    dropOnPage: {
      type: "boolean",
      defaultValue: false,
      advanced: true
    },
    onChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  refActions: {
    getFiles: {
      description: "Get files uploaded into the instance",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "ImageUploader"
};
function registerImageUploader(loader, customImageUploaderMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ImageUploader, customImageUploaderMeta != null ? customImageUploaderMeta : imageUploaderMeta);
}

var Layout = function Layout(_ref) {
  var content = _ref.content,
    _onSelect = _ref.onSelect,
    menuItems = _ref.menuItems,
    collapsed = _ref.collapsed,
    _onCollapse = _ref.onCollapse,
    showTrigger = _ref.showTrigger,
    showHeader = _ref.showHeader,
    headerContent = _ref.headerContent,
    menuTopSection = _ref.menuTopSection,
    backgroundColor = _ref.backgroundColor,
    menuBottomSection = _ref.menuBottomSection,
    defaultSelectedKeys = _ref.defaultSelectedKeys;
  var _theme$useToken = antd.theme.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorder = _theme$useToken$token.colorBorder,
    colorBgLayout = _theme$useToken$token.colorBgLayout,
    colorBgContainer = _theme$useToken$token.colorBgContainer;
  var siderStyles = {
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    background: colorBgLayout,
    borderRight: "solid 1px " + colorBorder,
    zIndex: 5
  };
  var headerStyles = {
    borderBottom: "solid 1px " + colorBorder,
    height: "54px",
    minHeight: "54px",
    maxHeight: "54px",
    padding: "0px 20px",
    background: "rgba(255,255,255, 0.70)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 1
  };
  var parseMenuItems = function parseMenuItems() {
    return menuItems.map(function (menuItem) {
      if (menuItem.type !== "group") {
        return _extends({}, menuItem, {
          icon: typeof menuItem.icon === 'string' ? React__default.createElement(Icon, {
            size: 20,
            icon: menuItem.icon,
            variant: "duotone"
          }) : menuItem.icon
        });
      } else {
        return _extends({}, menuItem, {
          children: menuItem.children.map(function (child) {
            return _extends({}, child, {
              icon: typeof child.icon === 'string' ? React__default.createElement(Icon, {
                size: 20,
                icon: child.icon,
                variant: "duotone"
              }) : child.icon
            });
          })
        });
      }
    });
  };
  return React__default.createElement(antd.Layout, {
    hasSider: true,
    style: {
      minHeight: "100vh"
    }
  }, React__default.createElement(antd.Layout.Sider, {
    collapsible: true,
    width: 275,
    theme: "light",
    trigger: null,
    collapsedWidth: 80,
    style: siderStyles,
    collapsed: collapsed,
    onCollapse: function onCollapse(collapsed) {
      return _onCollapse(collapsed);
    }
  }, showTrigger && React__default.createElement(Button, {
    label: "",
    size: "small",
    type: "default",
    isSubmit: false,
    loading: false,
    onClick: function onClick() {
      return _onCollapse(!collapsed);
    },
    style: {
      position: "absolute",
      top: "42px",
      right: "-16px",
      height: "20px",
      width: "20px"
    },
    icon: collapsed ? React__default.createElement(react.CaretRight, {
      size: 14
    }) : React__default.createElement(react.CaretLeft, {
      size: 14
    })
  }), menuTopSection && React__default.createElement("div", {
    style: {
      padding: "8px"
    }
  }, menuTopSection), React__default.createElement(antd.Menu, {
    theme: "light",
    mode: "inline",
    items: parseMenuItems(),
    onSelect: function onSelect(data) {
      return _onSelect(data.key);
    },
    defaultSelectedKeys: defaultSelectedKeys,
    style: {
      borderInlineEnd: "none",
      background: "transparent"
    }
  }), menuBottomSection && React__default.createElement("div", {
    style: {
      padding: "10px",
      background: "rgba(0,0,0, 0.05)",
      borderTop: "solid 1px " + colorBorder,
      position: "absolute",
      width: "100%",
      bottom: 0
    }
  }, menuBottomSection)), React__default.createElement(antd.Layout, {
    style: {
      marginLeft: collapsed ? "80px" : "275px",
      maxHeight: "100vh",
      overflow: "auto",
      background: backgroundColor
    }
  }, showHeader && React__default.createElement(antd.Layout.Header, {
    style: headerStyles
  }, React__default.createElement("div", {
    style: {
      minWidth: "100%",
      display: "flex",
      alignItems: "center",
      height: "100%"
    }
  }, headerContent)), React__default.createElement(antd.Layout.Content, {
    style: {
      background: colorBgContainer
    }
  }, content)));
};
var layoutMeta = {
  name: "Layout",
  displayName: "Layout",
  states: {
    collapsed: {
      type: "writable",
      variableType: "boolean",
      valueProp: "collapsed",
      onChangeProp: "onCollapse"
    },
    selected: {
      type: "writable",
      variableType: "text",
      valueProp: "selected",
      onChangeProp: "onSelect"
    }
  },
  props: {
    collapsed: {
      type: "boolean",
      description: "Set the collapsed state of layout",
      defaultValue: false
    },
    menuItems: {
      type: "array",
      description: "Set the menu items of layout",
      defaultValue: [{
        key: "1",
        label: "Menu Item 1",
        icon: "Circle"
      }]
    },
    backgroundColor: {
      type: "color",
      description: "Set the background color of layout",
      defaultValue: "#F5F5F5",
      keepCssVar: true
    },
    defaultSelectedKeys: {
      type: "array",
      description: "Set the default selected keys of layout"
    },
    headerContent: {
      type: "slot",
      description: "Set the header content of layout"
    },
    menuTopSection: {
      type: "slot",
      description: "Set the top menu section of layout",
      hidePlaceholder: true
    },
    menuBottomSection: {
      type: "slot",
      description: "Set the bottom menu section of layout",
      hidePlaceholder: true
    },
    showTrigger: {
      type: "boolean",
      description: "Show the collapse trigger",
      defaultValue: true
    },
    showHeader: {
      type: "boolean",
      description: "Show the header of layout",
      defaultValue: true
    },
    selected: {
      type: "string",
      advanced: true
    },
    content: {
      type: "slot",
      description: "Set the content of layout"
    },
    onCollapse: {
      type: "eventHandler",
      description: "Event handler for layout collapse",
      argTypes: [{
        name: "collapsed",
        type: "boolean"
      }]
    },
    onSelect: {
      type: "eventHandler",
      description: "Event handler for layout select",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "Layout"
};
function registerLayout(loader, customLayoutMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Layout, customLayoutMeta != null ? customLayoutMeta : layoutMeta);
}

var _excluded$8 = ["open", "content", "bodyPadding", "showFooter", "showCloseButton"];
var Modal = function Modal(_ref) {
  var open = _ref.open,
    content = _ref.content,
    bodyPadding = _ref.bodyPadding,
    showFooter = _ref.showFooter,
    showCloseButton = _ref.showCloseButton,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  return React__default.createElement(antd.Modal, Object.assign({
    centered: true,
    closable: true,
    destroyOnClose: true,
    getContainer: false,
    open: open,
    footer: showFooter ? undefined : null,
    closeIcon: showCloseButton ? React__default.createElement(Icon, {
      icon: "X",
      variant: "regular"
    }) : false,
    styles: {
      header: {
        padding: "8px 16px 8px 10px !important",
        borderBottom: "solid 1px " + token.colorBorder + " !important",
        margin: "0 !important"
      },
      body: {
        padding: bodyPadding
      },
      content: {
        padding: "0 !important"
      },
      mask: {
        background: "#0000004D"
      },
      footer: {
        margin: "0 !important",
        padding: "10px 16px !important",
        borderTop: "solid 1px " + token.colorBorder + " !important"
      }
    }
  }, props), content);
};
var modalMeta = {
  name: "Modal",
  displayName: "Modal",
  states: {
    open: {
      type: "writable",
      variableType: "boolean",
      valueProp: "open",
      onChangeProp: "onOpenChange"
    }
  },
  props: {
    title: {
      type: "string",
      defaultValue: "Modal Title"
    },
    okText: {
      type: "string",
      defaultValue: "Aceptar"
    },
    cancelText: {
      type: "string",
      defaultValue: "Cancelar"
    },
    showFooter: {
      type: "boolean",
      defaultValue: true
    },
    showCloseButton: {
      type: "boolean",
      defaultValue: true
    },
    open: {
      type: "boolean",
      defaultValue: false
    },
    width: {
      type: "string",
      defaultValue: "350px"
    },
    bodyPadding: {
      type: "string",
      defaultValue: "16px"
    },
    confirmLoading: {
      type: "boolean",
      defaultValue: false
    },
    mask: {
      type: "boolean",
      defaultValue: true,
      advanced: true
    },
    maskClosable: {
      type: "boolean",
      defaultValue: true,
      advanced: true
    },
    afterOpenChange: {
      type: "eventHandler",
      argTypes: []
    },
    onOk: {
      type: "eventHandler",
      argTypes: []
    },
    onCancel: {
      type: "eventHandler",
      argTypes: []
    },
    onClose: {
      type: "eventHandler",
      argTypes: []
    },
    onOpenChange: {
      type: "eventHandler",
      argTypes: []
    },
    content: {
      type: "slot"
    }
  },
  importPath: "inprodi-design-system",
  importName: "Modal"
};
function registerModal(loader, customModalMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Modal, customModalMeta != null ? customModalMeta : modalMeta);
}

var _excluded$9 = ["size", "value", "error", "variant", "leftIcon", "onChange", "rightIcon", "name", "debounce", "onClearError", "disabled", "onBlur"];
var NumberInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var size = _ref.size,
    value = _ref.value,
    error = _ref.error,
    variant = _ref.variant,
    leftIcon = _ref.leftIcon,
    onChange = _ref.onChange,
    rightIcon = _ref.rightIcon,
    _ref$debounce = _ref.debounce,
    debounce = _ref$debounce === void 0 ? 0 : _ref$debounce,
    onClearError = _ref.onClearError,
    disabled = _ref.disabled,
    _onBlur = _ref.onBlur,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  var _useState = React.useState(value),
    inputValue = _useState[0],
    setInputValue = _useState[1];
  var _useState2 = React.useState(error),
    inputError = _useState2[0],
    setInputError = _useState2[1];
  React.useEffect(function () {
    setInputError(error);
  }, [error]);
  React.useEffect(function () {
    setInputValue(value);
  }, [value]);
  var debouncedOnChange = React.useMemo(function () {
    if (debounce > 0) {
      return _debounce(function (val) {
        return onChange(val);
      }, debounce);
    } else {
      return onChange;
    }
  }, [onChange, debounce]);
  var handleChange = React.useCallback(function (value) {
    var newValue = value;
    setInputValue(newValue);
    setInputError(null);
    debouncedOnChange(newValue);
    onClearError && onClearError();
  }, [debouncedOnChange]);
  return React__default.createElement(antd.InputNumber, Object.assign({
    keyboard: true,
    ref: ref,
    decimalSeparator: ".",
    variant: variant,
    prefix: leftIcon,
    suffix: rightIcon,
    disabled: disabled,
    onChange: handleChange,
    value: inputValue != null ? inputValue : value,
    onBlur: function onBlur(e) {
      return _onBlur && _onBlur(e);
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    status: inputError ? "error" : undefined,
    parser: function parser(value) {
      return value ? value.replace(/\$\s?|(,*)/g, '') : '';
    },
    formatter: function formatter(value) {
      return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
    },
    style: _extends({
      height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px"
    }, variant === "borderless" && {
      padding: 0
    })
  }, props));
});
var numberInputMeta = {
  name: "Number Input",
  displayName: "Number Input",
  providesData: true,
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "string"
    },
    min: {
      type: "number"
    },
    max: {
      type: "number"
    },
    step: {
      type: "number",
      defaultValue: 1
    },
    precision: {
      type: "number",
      defaultValue: 0
    },
    placeholder: {
      type: "string",
      defaultValue: "Input Placeholder"
    },
    controls: {
      type: "boolean",
      defaultValue: true
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    variant: {
      type: "choice",
      options: ["outlined", "borderless", "filled"],
      defaultValue: "outlined"
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    debounce: {
      type: "number",
      defaultValue: 0,
      advanced: true
    },
    error: {
      type: "string",
      advanced: true
    },
    leftIcon: {
      type: "slot",
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    },
    rightIcon: {
      type: "slot",
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "string"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Input"
};
function registerNumberInput(loader, customNumberInputMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(NumberInput, customNumberInputMeta != null ? customNumberInputMeta : numberInputMeta);
}

var _excluded$a = ["size", "value", "error", "leftIcon", "onChange", "rightIcon", "onClearError", "name"];
var PasswordInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var size = _ref.size,
    error = _ref.error,
    leftIcon = _ref.leftIcon,
    onChange = _ref.onChange,
    rightIcon = _ref.rightIcon,
    onClearError = _ref.onClearError,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  var handleOnChange = function handleOnChange(event) {
    onChange(event.target.value);
    onClearError && onClearError();
  };
  return React__default.createElement(antd.Input.Password, Object.assign({
    ref: ref,
    prefix: leftIcon,
    suffix: rightIcon,
    onChange: handleOnChange,
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    status: error ? "error" : undefined,
    style: {
      height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px",
      padding: size === "small" ? "0px 8px" : size === "middle" ? "0px 12px" : "0px 16px"
    },
    styles: {
      input: {
        letterSpacing: "1px"
      }
    }
  }, props));
});
var passwordInputMeta = {
  name: "PasswordInput",
  displayName: "Password Input",
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "string"
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    variant: {
      type: "choice",
      options: ["outlined", "borderless", "filled"],
      defaultValue: "outlined"
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    allowClear: {
      type: "boolean",
      defaultValue: false,
      advanced: true
    },
    leftIcon: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: "Icon"
      }],
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    },
    rightIcon: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: "Icon"
      }],
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "string"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Input"
};
function registerPasswordInput(loader, customPasswordInputMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(PasswordInput, customPasswordInputMeta != null ? customPasswordInputMeta : passwordInputMeta);
}

var _excluded$b = ["value"];
var Progress = function Progress(_ref) {
  var value = _ref.value,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  return React__default.createElement(antd.Progress, Object.assign({
    percent: value
  }, props));
};
var progressMeta = {
  name: "Progress",
  displayName: "Progress",
  props: {
    value: {
      type: "number",
      defaultValue: 0
    },
    showInfo: {
      type: "boolean",
      defaultValue: true
    },
    strokeColor: {
      type: "array"
    },
    strokeLinecap: {
      type: "choice",
      options: ["round", "butt", "square"],
      defaultValue: "round"
    },
    success: {
      type: "object"
    },
    type: {
      type: "choice",
      options: ["circle", "line", "dashboard"],
      defaultValue: "line"
    },
    size: {
      type: "number"
    },
    steps: {
      type: "number",
      advanced: true
    },
    strokeWidth: {
      type: "number",
      advanced: true,
      hidden: function hidden(props) {
        return props.type !== "circle";
      }
    },
    gapDegree: {
      type: "number",
      advanced: true,
      hidden: function hidden(props) {
        return props.type !== "dashboard";
      }
    },
    gapPosition: {
      type: "choice",
      options: ["top", "bottom", "left", "right"],
      advanced: true,
      hidden: function hidden(props) {
        return props.type !== "dashboard";
      }
    }
  },
  importPath: "inprodi-design-system",
  importName: "Progress"
};
function registerProgress(loader, customProgressMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Progress, customProgressMeta != null ? customProgressMeta : progressMeta);
}

var _excluded$c = ["value", "onValueChange", "className", "icon"];
var Rate = function Rate(_ref) {
  var value = _ref.value,
    onValueChange = _ref.onValueChange,
    className = _ref.className,
    icon = _ref.icon,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  var handleChange = function handleChange(value) {
    onValueChange(value);
  };
  return React__default.createElement(antd.Rate, Object.assign({
    value: value,
    character: function character() {
      return React__default.createElement(Icon, {
        icon: icon,
        variant: "duotone",
        size: 18
      });
    },
    onChange: handleChange,
    className: "inprodi-rate " + className
  }, props));
};
var rateMeta = {
  name: "Rate",
  displayName: "Rate",
  providesData: true,
  states: {
    value: {
      type: "writable",
      variableType: "number",
      valueProp: "value",
      onChangeProp: "onValueChange"
    }
  },
  props: {
    value: {
      type: "number",
      defaultValue: 0
    },
    count: {
      type: "number",
      defaultValue: 5
    },
    allowClear: {
      type: "boolean",
      defaultValue: true
    },
    icon: {
      type: "string",
      defaultValue: "Star"
    },
    allowHalf: {
      type: "boolean",
      defaultValue: false
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    onValueChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "number"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Rate"
};
function registerRate(loader, customRateMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Rate, customRateMeta != null ? customRateMeta : rateMeta);
}

var _excluded$d = ["data"];
var ResponsiveLine = function ResponsiveLine(_ref) {
  var data = _ref.data,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  return React__default.createElement(line.ResponsiveLine, Object.assign({
    data: data,
    colors: function colors(data) {
      return data.color;
    }
  }, props));
};
var responsiveLineMeta = {
  name: "ResponsiveLine",
  displayName: "Responsive Line",
  props: {
    data: {
      type: "array",
      defaultValue: [{
        id: "test",
        color: "#000000",
        data: [{
          x: "2023-01-01",
          y: 1000
        }, {
          x: "2023-02-01",
          y: 1500
        }, {
          x: "2023-05-01",
          y: 1200
        }, {
          x: "2023-10-01",
          y: 1760
        }]
      }]
    },
    xScale: {
      type: "object",
      defaultValue: {}
    },
    yScale: {
      type: "object",
      defaultValue: {}
    },
    xFormat: {
      type: "string"
    },
    yFormat: {
      type: "string"
    },
    margin: {
      type: "object",
      defaultValue: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    curve: {
      type: "choice",
      options: ["basis", "cardinal", "catmullRom", "linear", "monotoneX", "monotoneY", "natural", "step", "stepAfter", "stepBefore"],
      defaultValue: "linear"
    },
    lineWidth: {
      type: "number",
      defaultValue: 3
    },
    enableArea: {
      type: "boolean",
      defaultValue: false
    },
    areaOpacity: {
      type: "number",
      defaultValue: 0.5,
      hidden: function hidden(props) {
        return !props.enableArea;
      }
    },
    enablePoints: {
      type: "boolean",
      defaultValue: true
    },
    defs: {
      type: "array",
      defaultValue: []
    },
    fill: {
      type: "array",
      defaultValue: []
    },
    pointSize: {
      type: "number",
      defaultValue: 10,
      hidden: function hidden(props) {
        return !props.enablePoints;
      }
    },
    pointBorderWidth: {
      type: "number",
      defaultValue: 2,
      hidden: function hidden(props) {
        return !props.enablePoints;
      }
    },
    enablePointLabel: {
      type: "boolean",
      defaultValue: true,
      hidden: function hidden(props) {
        return !props.enablePoints;
      }
    },
    pointLabelYOffset: {
      type: "number",
      defaultValue: 0,
      hidden: function hidden(props) {
        return !props.enablePointLabel;
      }
    },
    enableSlices: {
      type: "choice",
      defaultValue: "x",
      options: ["x", "y", "false"]
    },
    enableGridX: {
      type: "boolean",
      defaultValue: true
    },
    enableGridY: {
      type: "boolean",
      defaultValue: true
    },
    axisBottom: {
      type: "object",
      defaultValue: {}
    },
    axisLeft: {
      type: "object",
      defaultValue: {}
    },
    isInteractive: {
      type: "boolean",
      defaultValue: true
    },
    useMesh: {
      type: "boolean",
      defaultValue: true
    },
    enableCrosshair: {
      type: "boolean",
      defaultValue: true
    },
    crosshairType: {
      type: "choice",
      options: ["x", "y", "top-left", "top", "top-right", "right", "bottom-left", "bottom-right", "bottom", "left", "cross"],
      defaultValue: "cell",
      hidden: function hidden(props) {
        return !props.enableCrosshair;
      }
    },
    animate: {
      type: "boolean",
      defaultValue: true
    }
  },
  importPath: "inprodi-design-system",
  importName: "ResponsiveLine"
};
function registerResponsiveLine(loader, customResponsiveLineMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ResponsiveLine, customResponsiveLineMeta != null ? customResponsiveLineMeta : responsiveLineMeta);
}

var _excluded$e = ["content"];
var Ribbon = function Ribbon(_ref) {
  var content = _ref.content,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  return React__default.createElement(antd.Badge.Ribbon, Object.assign({}, props), content);
};
var ribbonMeta = {
  name: "Ribbon",
  displayName: "Ribbon",
  props: {
    text: {
      type: "string"
    },
    color: {
      type: "color"
    },
    placement: {
      type: "choice",
      options: ["start", "end"],
      defaultValue: "end"
    },
    content: {
      type: "slot",
      hidePlaceholder: true
    }
  },
  importPath: "inprodi-design-system",
  importName: "Ribbon"
};
function registerRibbon(loader, customRibbonMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Ribbon, customRibbonMeta != null ? customRibbonMeta : ribbonMeta);
}

var _excluded$f = ["options", "onChange"];
var Segmented = function Segmented(_ref) {
  var options = _ref.options,
    _onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  var parsedOptions = [];
  for (var _iterator = _createForOfIteratorHelperLoose(options), _step; !(_step = _iterator()).done;) {
    var option = _step.value;
    parsedOptions.push({
      label: option.label,
      value: option.value,
      icon: option.icon ? React__default.createElement(Icon, {
        icon: option.icon,
        size: 16,
        variant: "regular"
      }) : undefined,
      disabled: option.disabled
    });
  }
  return React__default.createElement(antd.Segmented, Object.assign({
    options: parsedOptions,
    onChange: function onChange(value) {
      return _onChange(value);
    }
  }, props));
};
var segmentedMeta = {
  name: "Segmented",
  displayName: "Segmented",
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    block: {
      type: "boolean",
      defaultValue: false
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    options: {
      type: "array",
      defaultValue: [{
        label: "Button 1",
        value: "1",
        icon: "Smiley",
        disabled: false
      }, {
        label: "Button 2",
        value: "2",
        icon: "Smiley",
        disabled: false
      }]
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    value: {
      type: "string"
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "string"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Segmented"
};
function registerSegmented(loader, customSegmentedMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Segmented, customSegmentedMeta != null ? customSegmentedMeta : segmentedMeta);
}

var heightDictionary = {
  small: "30px",
  middle: "36px",
  large: "44px"
};
var paddingDictionary = {
  small: "0px 8px",
  middle: "0px 12px",
  large: "0px 16px"
};
var Select = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _internalValue$label;
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? "middle" : _ref$size,
    value = _ref.value,
    isEmpty = _ref.isEmpty,
    loading = _ref.loading,
    disabled = _ref.disabled,
    _onOpen = _ref.onOpen,
    _onClose = _ref.onClose,
    error = _ref.error,
    onChange = _ref.onChange,
    onClearError = _ref.onClearError,
    _onSearch = _ref.onSearch,
    className = _ref.className,
    searchable = _ref.searchable,
    menuContent = _ref.menuContent,
    placeholder = _ref.placeholder,
    valueContent = _ref.valueContent;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var _useState = React.useState(false),
    isHovered = _useState[0],
    setIsHovered = _useState[1];
  var _useState2 = React.useState(false),
    isOpened = _useState2[0],
    setIsOpened = _useState2[1];
  var _useState3 = React.useState(value),
    internalValue = _useState3[0],
    setInternalValue = _useState3[1];
  var _useState4 = React.useState(error),
    inputError = _useState4[0],
    setInputError = _useState4[1];
  React.useEffect(function () {
    setInputError(error);
  }, [error]);
  React.useEffect(function () {
    setInternalValue(value);
  }, [value]);
  React.useImperativeHandle(ref, function () {
    return {
      setValue: function setValue(newValue) {
        setInternalValue(newValue);
        onChange(newValue);
        onClearError && onClearError();
      }
    };
  }, [onChange]);
  var containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "6px",
    border: "solid 1px " + (inputError ? token.colorError : isHovered ? token.colorPrimaryBorderHover : isOpened ? token.colorPrimary : token.colorBorder),
    gap: "10px",
    cursor: disabled ? "default" : "pointer",
    height: heightDictionary[size],
    padding: paddingDictionary[size],
    background: disabled ? token.colorBgContainerDisabled : token.colorBgContainer,
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 1px 2px 0px"
  };
  var labelStyles = {
    width: "100%",
    fontSize: "14px",
    fontWeight: "400",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: internalValue != null && internalValue.label && !disabled ? token.colorText : token.colorTextDisabled
  };
  return React__default.createElement(Dropdown, {
    maxHeight: "200px",
    isEmpty: isEmpty,
    loading: loading,
    trigger: disabled ? [] : ["click"],
    closeOnSelect: true,
    className: className,
    searchable: searchable,
    menuContent: menuContent,
    onOpen: function onOpen() {
      setIsOpened(true);
      _onOpen && _onOpen();
    },
    onClose: function onClose() {
      setIsOpened(false);
      _onClose && _onClose();
      _onSearch(null);
    },
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    triggerContent: React__default.createElement("div", {
      style: containerStyles,
      className: "select-container",
      onMouseEnter: function onMouseEnter() {
        return setIsHovered(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsHovered(false);
      }
    }, (internalValue == null ? void 0 : internalValue.label) && valueContent, React__default.createElement("span", {
      style: labelStyles
    }, (_internalValue$label = internalValue == null ? void 0 : internalValue.label) != null ? _internalValue$label : placeholder), React__default.createElement(Icon, {
      icon: "CaretUpDown",
      size: 16,
      variant: "regular",
      color: token.colorTextSecondary
    }))
  });
});
var selectMeta = {
  name: "Select",
  displayName: "Select",
  states: {
    value: {
      type: "writable",
      variableType: "object",
      valueProp: "value",
      onChangeProp: "onChange"
    },
    searchValue: {
      type: "writable",
      variableType: "text",
      valueProp: "searchValue",
      onChangeProp: "onSearch"
    }
  },
  props: {
    value: {
      type: "object",
      description: "Object with label, value and other props"
    },
    placeholder: {
      type: "string",
      defaultValue: "Seleccionar..."
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    searchable: {
      type: "boolean",
      defaultValue: false
    },
    isEmpty: {
      type: "boolean",
      defaultValue: false
    },
    loading: {
      type: "boolean",
      defaultValue: false
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    searchValue: {
      type: "string"
    },
    onSearch: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "string"
      }]
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "object"
      }]
    },
    onClose: {
      type: "eventHandler",
      argTypes: []
    },
    onOpen: {
      type: "eventHandler",
      argTypes: []
    },
    menuContent: {
      type: "slot"
    },
    valueContent: {
      type: "slot",
      hidePlaceholder: true
    }
  },
  refActions: {
    setValue: {
      description: "Set Select value",
      argTypes: [{
        name: "value",
        type: "object"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Select"
};
function registerSelect(loader, customSelectMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Select, customSelectMeta != null ? customSelectMeta : selectMeta);
}

var Slider = function Slider(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return React__default.createElement(antd.Slider, Object.assign({}, props));
};
var sliderMeta = {
  name: "Slider",
  displayName: "Slider",
  states: {
    value: {
      type: "writable",
      variableType: "number",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "number",
      defaultValue: 0
    },
    max: {
      type: "number",
      defaultValue: 100
    },
    min: {
      type: "number",
      defaultValue: 0
    },
    step: {
      type: "number",
      defaultValue: 1
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    dots: {
      type: "boolean",
      defaultValue: true
    },
    range: {
      type: "boolean",
      defaultValue: false
    },
    vertical: {
      type: "boolean",
      defaultValue: false
    },
    included: {
      type: "boolean",
      defaultValue: true,
      advanced: true
    },
    marks: {
      type: "array",
      defaultValue: [],
      advanced: true
    },
    tooltip: {
      type: "object",
      defaultValue: {},
      advanced: true
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{
        name: "value",
        type: "number"
      }]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Slider"
};
function registerSlider(loader, customSliderMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Slider, customSliderMeta != null ? customSliderMeta : sliderMeta);
}

var _excluded$g = ["label", "closable"];
var Tag = function Tag(_ref) {
  var label = _ref.label,
    closable = _ref.closable,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  return React__default.createElement(antd.Tag, Object.assign({
    closeIcon: closable,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }
  }, props), label);
};
var tagMeta = {
  name: "Tag",
  displayName: "Tag",
  props: {
    label: {
      type: "string",
      defaultValue: "Tag Label",
      description: "The label of the tag"
    },
    color: {
      type: "color",
      defaultValue: "blue"
    },
    bordered: {
      type: "boolean",
      defaultValue: true
    },
    closable: {
      type: "boolean",
      defaultValue: false
    },
    icon: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "Icon"
      },
      allowedComponents: ["Icon"],
      hidePlaceholder: true
    }
  },
  importPath: "inprodi-design-system",
  importName: "Tag"
};
function registerTag(loader, customTagmeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Tag, customTagmeta != null ? customTagmeta : tagMeta);
}

var Stat = function Stat(_ref) {
  var icon = _ref.icon,
    title = _ref.title,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? 0 : _ref$value,
    delay = _ref.delay,
    prefix = _ref.prefix,
    suffix = _ref.suffix,
    loading = _ref.loading,
    duration = _ref.duration,
    className = _ref.className,
    precision = _ref.precision,
    comparison = _ref.comparison,
    comparisonLabel = _ref.comparisonLabel,
    isComparisonCurrency = _ref.isComparisonCurrency;
  var _theme$useToken = antd.theme.useToken(),
    token = _theme$useToken.token;
  var containerStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "18px",
    borderRadius: "6px",
    background: token.colorBgContainer,
    border: "solid 1px " + token.colorBorder,
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.01) 0px 1px 2px 0px"
  };
  var headerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: "14px"
  };
  var titleStyles = {
    color: "black",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px"
  };
  var numberStyle = {
    color: "black",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "32px"
  };
  var valueStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: "2px",
    marginTop: "8px"
  };
  var prefixStyle = {
    color: "black",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    paddingBottom: "4px"
  };
  var suffixStyle = {
    color: token.colorTextSecondary,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    paddingBottom: "4px"
  };
  var comparisonStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "6px",
    marginTop: "4px"
  };
  var formatCurrency = function formatCurrency(value) {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN"
    }).format(Number(value));
  };
  return React__default.createElement("div", {
    className: "stat-inprodi " + className,
    style: containerStyles
  }, React__default.createElement("div", {
    className: "header",
    style: headerStyles
  }, loading ? React__default.createElement(Skeleton, {
    count: 1,
    width: "60%",
    height: "20px"
  }) : React__default.createElement(React__default.Fragment, null, React__default.createElement("p", {
    className: "stat_title",
    style: titleStyles
  }, title), icon && icon)), React__default.createElement("div", {
    className: "value",
    style: valueStyle
  }, loading ? React__default.createElement(Skeleton, {
    count: 1,
    width: "25%",
    height: "32px"
  }) : React__default.createElement(React__default.Fragment, null, prefix && React__default.createElement("span", {
    className: "prefix",
    style: prefixStyle
  }, prefix), React__default.createElement("span", {
    style: numberStyle
  }, React__default.createElement(CountUp, {
    preserveValue: true,
    decimal: ".",
    decimals: precision,
    delay: delay,
    duration: duration,
    start: 0,
    separator: ",",
    end: value
  })), suffix && React__default.createElement("span", {
    className: "suffix",
    style: suffixStyle
  }, suffix))), (comparison || comparison == 0) && React__default.createElement("div", {
    className: "comparison",
    style: comparisonStyle
  }, loading ? React__default.createElement(Skeleton, {
    count: 1,
    width: "80%",
    height: "18px"
  }) : React__default.createElement(React__default.Fragment, null, React__default.createElement(Tag, {
    style: {
      margin: 0,
      lineHeight: "16px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "10px"
    },
    bordered: false,
    label: comparison === 0 ? "0" : isComparisonCurrency ? formatCurrency(comparison.toString()) : comparison.toString(),
    color: comparison > 0 ? "green" : comparison < 0 ? "red" : "cyan",
    icon: comparison > 0 ? React__default.createElement(Icon, {
      icon: "TrendUp",
      size: 12,
      variant: "regular"
    }) : comparison < 0 ? React__default.createElement(Icon, {
      icon: "TrendDown",
      size: 12,
      variant: "regular"
    }) : React__default.createElement(Icon, {
      icon: "DotOutline",
      size: 12,
      variant: "fill"
    })
  }), comparisonLabel && React__default.createElement("span", {
    style: {
      color: "#868E96",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px"
    }
  }, comparisonLabel))));
};
var statMeta = {
  name: "Stat",
  displayName: "Stat",
  props: {
    title: {
      type: "string",
      defaultValue: "Stat Title",
      description: "The title of the stat"
    },
    value: {
      type: "number",
      defaultValue: 0,
      description: "The value of the stat"
    },
    precision: {
      type: "number",
      defaultValue: 2,
      description: "The number of decimals of the stat value"
    },
    prefix: {
      type: "string",
      description: "The prefix of the stat"
    },
    suffix: {
      type: "string",
      description: "The suffix of the stat"
    },
    comparison: {
      type: "number",
      description: "The comparison of the stat"
    },
    comparisonLabel: {
      type: "string",
      description: "The comparison label of the stat",
      hidden: function hidden(props) {
        return !props.comparison && props.comparison !== 0;
      }
    },
    isComparisonCurrency: {
      type: "boolean",
      defaultValue: false,
      description: "The comparison label of the stat is currency",
      hidden: function hidden(props) {
        return !props.comparison && props.comparison !== 0;
      }
    },
    loading: {
      type: "boolean",
      defaultValue: false,
      description: "The loading state of the stat"
    },
    duration: {
      type: "number",
      defaultValue: 2,
      description: "The duration of the stat",
      advanced: true
    },
    delay: {
      type: "number",
      defaultValue: 0,
      description: "The delay of the stat",
      advanced: true
    },
    icon: {
      type: "slot",
      description: "The icon of the stat",
      defaultValue: [{
        type: "component",
        name: "Icon"
      }],
      allowedComponents: ["Icon"]
    }
  },
  importPath: "inprodi-design-system",
  importName: "Stat"
};
function registerStat(loader, customRegisterMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Stat, customRegisterMeta != null ? customRegisterMeta : statMeta);
}

var _excluded$h = ["checkedIcon", "unCheckedIcon"];
var Switch = function Switch(_ref) {
  var checkedIcon = _ref.checkedIcon,
    unCheckedIcon = _ref.unCheckedIcon,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  return React__default.createElement(antd.Switch, Object.assign({
    onClick: function onClick(checked, event) {
      if (checked) {
        event.stopPropagation();
      } else {
        event.stopPropagation();
      }
    },
    checkedChildren: checkedIcon && React__default.createElement(Icon, {
      icon: checkedIcon,
      variant: "regular"
    }),
    unCheckedChildren: unCheckedIcon && React__default.createElement(Icon, {
      icon: unCheckedIcon,
      variant: "regular"
    })
  }, props));
};
var switchMeta = {
  name: "Switch",
  displayName: "Switch",
  states: {
    value: {
      type: "writable",
      variableType: "boolean",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    size: {
      type: "choice",
      options: ["default", "small"],
      defaultValue: "default"
    },
    value: {
      type: "boolean",
      defaultValue: false
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    loading: {
      type: "boolean",
      defaultValue: false
    },
    checkedIcon: {
      type: "string"
    },
    unCheckedIcon: {
      type: "string"
    },
    onChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "Switch"
};
function registerSwitch(loader, customSwitchMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(Switch, customSwitchMeta != null ? customSwitchMeta : switchMeta);
}

var TextAnimation = function TextAnimation(_ref) {
  var speed = _ref.speed,
    style = _ref.style,
    cursor = _ref.cursor,
    repeat = _ref.repeat,
    wrapper = _ref.wrapper,
    sequence = _ref.sequence;
  return React__default.createElement(reactTypeAnimation.TypeAnimation, {
    speed: speed,
    style: style,
    cursor: cursor,
    repeat: repeat,
    wrapper: wrapper,
    sequence: sequence
  });
};
var textAnimationMeta = {
  name: "TextAnimation",
  displayName: "Text Animation",
  props: {
    sequence: {
      type: "array",
      defaultValue: []
    },
    wrapper: {
      type: "choice",
      options: ["p", "h2", "div", "strong", "span"],
      defaultValue: "span"
    },
    repeat: {
      type: "number",
      defaultValue: Infinity
    },
    cursor: {
      type: "boolean",
      defaultValue: true
    },
    speed: {
      type: "number",
      defaultValue: 40
    },
    style: {
      type: "object",
      defaultValue: {}
    }
  },
  importPath: "inprodi-design-system",
  importName: "TextAnimation"
};
function registerTextAnimation(loader, customTextAnimationMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(TextAnimation, customTextAnimationMeta != null ? customTextAnimationMeta : textAnimationMeta);
}

var TextEditor = function TextEditor(_ref) {
  var value = _ref.value,
    placeholder = _ref.placeholder,
    onChange = _ref.onChange,
    disabled = _ref.disabled;
  var editor = react$1.useEditor({
    extensions: [StarterKit, Underline, TextAlign.configure({
      types: ["heading", "paragraph"]
    }), Placeholder.configure({
      placeholder: placeholder
    })],
    onUpdate: function onUpdate(_ref2) {
      var editor = _ref2.editor;
      onChange(editor.getHTML());
    }
  });
  React.useEffect(function () {
    if (value && editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false, {
        preserveWhitespace: 'full'
      });
    }
  }, [value, editor]);
  React.useEffect(function () {
    editor == null || editor.setEditable(!disabled);
  }, [disabled, editor]);
  if (!editor) {
    return null;
  }
  var mainContainerStyles = {
    background: disabled ? "var(--antd-colorBgContainerDisabled)" : "white"
  };
  var actionContainerStyles = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: "10px",
    padding: "6px 0 12px 0",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
    overflow: "auto"
  };
  var sectionStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "10px"
  };
  return React__default.createElement("div", {
    className: "text-editor_container",
    style: mainContainerStyles
  }, React__default.createElement("div", {
    style: actionContainerStyles
  }, React__default.createElement("div", {
    style: sectionStyles
  }, React__default.createElement(Button, {
    label: "",
    type: editor.isActive("bold") ? "primary" : "text",
    size: "small",
    disabled: !editor.can().chain().focus().toggleBold().run(),
    icon: React__default.createElement(Icon, {
      variant: "bold",
      icon: "TextB",
      color: editor.isActive("bold") ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().toggleBold().run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive("italic") ? "primary" : "text",
    size: "small",
    disabled: !editor.can().chain().focus().toggleItalic().run(),
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "TextItalic",
      color: editor.isActive("italic") ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().toggleItalic().run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive("underline") ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "TextUnderline",
      color: editor.isActive("underline") ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().toggleUnderline().run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive("strike") ? "primary" : "text",
    size: "small",
    disabled: !editor.can().chain().focus().toggleStrike().run(),
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "TextStrikethrough",
      color: editor.isActive("strike") ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().toggleStrike().run();
    }
  })), React__default.createElement(Divider, {
    type: "vertical"
  }), React__default.createElement("div", {
    style: sectionStyles
  }, React__default.createElement(Button, {
    label: "",
    type: editor.isActive({
      textAlign: "left"
    }) ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "TextAlignLeft",
      color: editor.isActive({
        textAlign: "left"
      }) ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().setTextAlign("left").run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive({
      textAlign: "center"
    }) ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "TextAlignCenter",
      color: editor.isActive({
        textAlign: "center"
      }) ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().setTextAlign("center").run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive({
      textAlign: "right"
    }) ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "TextAlignRight",
      color: editor.isActive({
        textAlign: "right"
      }) ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().setTextAlign("right").run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive({
      textAlign: "justify"
    }) ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "TextAlignJustify",
      color: editor.isActive({
        textAlign: "justify"
      }) ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().setTextAlign("justify").run();
    }
  })), React__default.createElement(Divider, {
    type: "vertical"
  }), React__default.createElement("div", {
    style: sectionStyles
  }, React__default.createElement(Button, {
    label: "",
    type: editor.isActive("bulletList") ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "ListBullets",
      color: editor.isActive("bulletList") ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().toggleBulletList().run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive("orderedList") ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "ListNumbers",
      color: editor.isActive("orderedList") ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().toggleOrderedList().run();
    }
  }), React__default.createElement(Button, {
    label: "",
    type: editor.isActive("blockquote") ? "primary" : "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "Quotes",
      color: editor.isActive("blockquote") ? "white" : "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().toggleBlockquote().run();
    }
  })), React__default.createElement(Divider, {
    type: "vertical"
  }), React__default.createElement(Button, {
    label: "",
    type: "text",
    size: "small",
    icon: React__default.createElement(Icon, {
      variant: "regular",
      icon: "Minus",
      color: "var(--token-YFIqRc19SnuM)"
    }),
    onClick: function onClick() {
      return editor.chain().focus().setHorizontalRule().run();
    }
  })), React__default.createElement(react$1.EditorContent, {
    editor: editor
  }));
};
var textEditorMeta = {
  name: "TextEditor",
  displayName: "Text Editor",
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "string"
    },
    placeholder: {
      type: "string",
      defaultValue: "Escribe algo..."
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    onChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "TextEditor"
};
function registerTextEditor(loader, customTextEditorMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(TextEditor, customTextEditorMeta != null ? customTextEditorMeta : textEditorMeta);
}

var _excluded$i = ["size", "value", "error", "format", "onChange"];
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.locale("es-mx");
var TimePicker = function TimePicker(_ref) {
  var size = _ref.size,
    value = _ref.value,
    error = _ref.error,
    format = _ref.format,
    _onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  return React__default.createElement(antd.TimePicker, Object.assign({}, props, {
    style: {
      height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px"
    },
    showNow: false,
    format: format,
    value: value ? dayjs(value, format) : undefined,
    status: error ? "error" : undefined,
    onChange: function onChange(time) {
      _onChange(time == null ? void 0 : time.format(format));
    }
  }));
};
var timePickerMeta = {
  name: "TimePicker",
  displayName: "Time Picker",
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange"
    }
  },
  props: {
    value: {
      type: "string"
    },
    disabled: {
      type: "boolean",
      defaultValue: false
    },
    allowClear: {
      type: "boolean",
      defaultValue: false
    },
    placeholder: {
      type: "string",
      defaultValue: "Seleccionar..."
    },
    size: {
      type: "choice",
      options: ["small", "middle", "large"],
      defaultValue: "middle"
    },
    hourStep: {
      type: "number",
      defaultValue: 1
    },
    minuteStep: {
      type: "number",
      defaultValue: 1
    },
    format: {
      type: "string",
      defaultValue: "HH:mm:ss"
    },
    use12Hours: {
      type: "boolean",
      defaultValue: false
    },
    secondStep: {
      type: "number",
      defaultValue: 1
    },
    error: {
      type: "string"
    },
    variant: {
      type: "choice",
      options: ["outlined", "borderless", "filled"],
      defaultValue: "outlined"
    },
    onChange: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: "inprodi-design-system",
  importName: "DatePicker"
};
function registerTimePicker(loader, customTimePickerMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(TimePicker, customTimePickerMeta != null ? customTimePickerMeta : timePickerMeta);
}

function registerAll(loader) {
  registerTag(loader);
  registerStat(loader);
  registerCard(loader);
  registerForm(loader);
  registerIcon(loader);
  registerRate(loader);
  registerInput(loader);
  registerModal(loader);
  registerRibbon(loader);
  registerSelect(loader);
  registerDrawer(loader);
  registerAvatar(loader);
  registerButton(loader);
  registerLayout(loader);
  registerSlider(loader);
  registerSwitch(loader);
  registerDivider(loader);
  registerDropdown(loader);
  registerSkeleton(loader);
  registerProgress(loader);
  registerSegmented(loader);
  registerFormField(loader);
  registerTimePicker(loader);
  registerTextEditor(loader);
  registerDatePicker(loader);
  registerNumberInput(loader);
  registerConfirmation(loader);
  registerAutoComplete(loader);
  registerDropdownItem(loader);
  registerPasswordInput(loader);
  registerAdvancedTable(loader);
  registerImageUploader(loader);
  registerTextAnimation(loader);
  registerResponsiveLine(loader);
  registerDateRangePicker(loader);
  registerAdvancedTableCell(loader);
  registerAdvancedTableColumn(loader);
}

exports.registerAll = registerAll;
//# sourceMappingURL=inprodi-design-system.cjs.development.js.map
