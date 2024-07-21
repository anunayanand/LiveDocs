"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/slate-hyperscript";
exports.ids = ["vendor-chunks/slate-hyperscript"];
exports.modules = {

/***/ "(ssr)/./node_modules/slate-hyperscript/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/slate-hyperscript/dist/index.es.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEditor: () => (/* binding */ createEditor),\n/* harmony export */   createHyperscript: () => (/* binding */ createHyperscript),\n/* harmony export */   createText: () => (/* binding */ createText),\n/* harmony export */   jsx: () => (/* binding */ jsx)\n/* harmony export */ });\n/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ \"(ssr)/./node_modules/is-plain-object/dist/is-plain-object.mjs\");\n/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ \"(ssr)/./node_modules/slate/dist/index.es.js\");\n\n\n\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\nfunction _toPropertyKey(arg) {\n  var key = _toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\n\nfunction _defineProperty(obj, key, value) {\n  key = _toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\n\n/**\n * A weak map to hold anchor tokens.\n */\nvar ANCHOR = new WeakMap();\n/**\n * A weak map to hold focus tokens.\n */\nvar FOCUS = new WeakMap();\n/**\n * All tokens inherit from a single constructor for `instanceof` checking.\n */\nclass Token {}\n/**\n * Anchor tokens represent the selection's anchor point.\n */\nclass AnchorToken extends Token {\n  constructor() {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    super();\n    _defineProperty(this, \"offset\", void 0);\n    _defineProperty(this, \"path\", void 0);\n    var {\n      offset,\n      path\n    } = props;\n    this.offset = offset;\n    this.path = path;\n  }\n}\n/**\n * Focus tokens represent the selection's focus point.\n */\nclass FocusToken extends Token {\n  constructor() {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    super();\n    _defineProperty(this, \"offset\", void 0);\n    _defineProperty(this, \"path\", void 0);\n    var {\n      offset,\n      path\n    } = props;\n    this.offset = offset;\n    this.path = path;\n  }\n}\n/**\n * Add an anchor token to the end of a text node.\n */\nvar addAnchorToken = (text, token) => {\n  var offset = text.text.length;\n  ANCHOR.set(text, [offset, token]);\n};\n/**\n * Get the offset if a text node has an associated anchor token.\n */\nvar getAnchorOffset = text => {\n  return ANCHOR.get(text);\n};\n/**\n * Add a focus token to the end of a text node.\n */\nvar addFocusToken = (text, token) => {\n  var offset = text.text.length;\n  FOCUS.set(text, [offset, token]);\n};\n/**\n * Get the offset if a text node has an associated focus token.\n */\nvar getFocusOffset = text => {\n  return FOCUS.get(text);\n};\n\nfunction ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n/**\n * Resolve the descedants of a node by normalizing the children that can be\n * passed into a hyperscript creator function.\n */\nvar STRINGS = new WeakSet();\nvar resolveDescendants = children => {\n  var nodes = [];\n  var addChild = child => {\n    if (child == null) {\n      return;\n    }\n    var prev = nodes[nodes.length - 1];\n    if (typeof child === 'string') {\n      var text = {\n        text: child\n      };\n      STRINGS.add(text);\n      child = text;\n    }\n    if (slate__WEBPACK_IMPORTED_MODULE_1__.Text.isText(child)) {\n      var c = child; // HACK: fix typescript complaining\n      if (slate__WEBPACK_IMPORTED_MODULE_1__.Text.isText(prev) && STRINGS.has(prev) && STRINGS.has(c) && slate__WEBPACK_IMPORTED_MODULE_1__.Text.equals(prev, c, {\n        loose: true\n      })) {\n        prev.text += c.text;\n      } else {\n        nodes.push(c);\n      }\n    } else if (slate__WEBPACK_IMPORTED_MODULE_1__.Element.isElement(child)) {\n      nodes.push(child);\n    } else if (child instanceof Token) {\n      var n = nodes[nodes.length - 1];\n      if (!slate__WEBPACK_IMPORTED_MODULE_1__.Text.isText(n)) {\n        addChild('');\n        n = nodes[nodes.length - 1];\n      }\n      if (child instanceof AnchorToken) {\n        addAnchorToken(n, child);\n      } else if (child instanceof FocusToken) {\n        addFocusToken(n, child);\n      }\n    } else {\n      throw new Error(\"Unexpected hyperscript child object: \".concat(child));\n    }\n  };\n  for (var child of children.flat(Infinity)) {\n    addChild(child);\n  }\n  return nodes;\n};\n/**\n * Create an anchor token.\n */\nfunction createAnchor(tagName, attributes, children) {\n  return new AnchorToken(attributes);\n}\n/**\n * Create an anchor and a focus token.\n */\nfunction createCursor(tagName, attributes, children) {\n  return [new AnchorToken(attributes), new FocusToken(attributes)];\n}\n/**\n * Create an `Element` object.\n */\nfunction createElement(tagName, attributes, children) {\n  return _objectSpread$1(_objectSpread$1({}, attributes), {}, {\n    children: resolveDescendants(children)\n  });\n}\n/**\n * Create a focus token.\n */\nfunction createFocus(tagName, attributes, children) {\n  return new FocusToken(attributes);\n}\n/**\n * Create a fragment.\n */\nfunction createFragment(tagName, attributes, children) {\n  return resolveDescendants(children);\n}\n/**\n * Create a `Selection` object.\n */\nfunction createSelection(tagName, attributes, children) {\n  var anchor = children.find(c => c instanceof AnchorToken);\n  var focus = children.find(c => c instanceof FocusToken);\n  if (!anchor || anchor.offset == null || anchor.path == null) {\n    throw new Error(\"The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined.\");\n  }\n  if (!focus || focus.offset == null || focus.path == null) {\n    throw new Error(\"The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined.\");\n  }\n  return _objectSpread$1({\n    anchor: {\n      offset: anchor.offset,\n      path: anchor.path\n    },\n    focus: {\n      offset: focus.offset,\n      path: focus.path\n    }\n  }, attributes);\n}\n/**\n * Create a `Text` object.\n */\nfunction createText(tagName, attributes, children) {\n  var nodes = resolveDescendants(children);\n  if (nodes.length > 1) {\n    throw new Error(\"The <text> hyperscript tag must only contain a single node's worth of children.\");\n  }\n  var [node] = nodes;\n  if (node == null) {\n    node = {\n      text: ''\n    };\n  }\n  if (!slate__WEBPACK_IMPORTED_MODULE_1__.Text.isText(node)) {\n    throw new Error(\"\\n    The <text> hyperscript tag can only contain text content as children.\");\n  }\n  // COMPAT: If they used the <text> tag we want to guarantee that it won't be\n  // merge with other string children.\n  STRINGS.delete(node);\n  Object.assign(node, attributes);\n  return node;\n}\n/**\n * Create a top-level `Editor` object.\n */\nvar createEditor = makeEditor => (tagName, attributes, children) => {\n  var otherChildren = [];\n  var selectionChild;\n  for (var child of children) {\n    if (slate__WEBPACK_IMPORTED_MODULE_1__.Range.isRange(child)) {\n      selectionChild = child;\n    } else {\n      otherChildren.push(child);\n    }\n  }\n  var descendants = resolveDescendants(otherChildren);\n  var selection = {};\n  var editor = makeEditor();\n  Object.assign(editor, attributes);\n  editor.children = descendants;\n  // Search the document's texts to see if any of them have tokens associated\n  // that need incorporated into the selection.\n  for (var [node, path] of slate__WEBPACK_IMPORTED_MODULE_1__.Node.texts(editor)) {\n    var anchor = getAnchorOffset(node);\n    var focus = getFocusOffset(node);\n    if (anchor != null) {\n      var [offset] = anchor;\n      selection.anchor = {\n        path,\n        offset\n      };\n    }\n    if (focus != null) {\n      var [_offset] = focus;\n      selection.focus = {\n        path,\n        offset: _offset\n      };\n    }\n  }\n  if (selection.anchor && !selection.focus) {\n    throw new Error(\"Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead.\");\n  }\n  if (!selection.anchor && selection.focus) {\n    throw new Error(\"Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead.\");\n  }\n  if (selectionChild != null) {\n    editor.selection = selectionChild;\n  } else if (slate__WEBPACK_IMPORTED_MODULE_1__.Range.isRange(selection)) {\n    editor.selection = selection;\n  }\n  return editor;\n};\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n/**\n * The default creators for Slate objects.\n */\nvar DEFAULT_CREATORS = {\n  anchor: createAnchor,\n  cursor: createCursor,\n  editor: createEditor(slate__WEBPACK_IMPORTED_MODULE_1__.createEditor),\n  element: createElement,\n  focus: createFocus,\n  fragment: createFragment,\n  selection: createSelection,\n  text: createText\n};\n/**\n * Create a Slate hyperscript function with `options`.\n */\nvar createHyperscript = function createHyperscript() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var {\n    elements = {}\n  } = options;\n  var elementCreators = normalizeElements(elements);\n  var creators = _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_CREATORS), elementCreators), options.creators);\n  var jsx = createFactory(creators);\n  return jsx;\n};\n/**\n * Create a Slate hyperscript function with `options`.\n */\nvar createFactory = creators => {\n  var jsx = function jsx(tagName, attributes) {\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n    var creator = creators[tagName];\n    if (!creator) {\n      throw new Error(\"No hyperscript creator found for tag: <\".concat(tagName, \">\"));\n    }\n    if (attributes == null) {\n      attributes = {};\n    }\n    if (!(0,is_plain_object__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(attributes)) {\n      children = [attributes].concat(children);\n      attributes = {};\n    }\n    children = children.filter(child => Boolean(child)).flat();\n    var ret = creator(tagName, attributes, children);\n    return ret;\n  };\n  return jsx;\n};\n/**\n * Normalize a dictionary of element shorthands into creator functions.\n */\nvar normalizeElements = elements => {\n  var creators = {};\n  var _loop = function _loop() {\n    var props = elements[tagName];\n    if (typeof props !== 'object') {\n      throw new Error(\"Properties specified for a hyperscript shorthand should be an object, but for the custom element <\".concat(tagName, \">  tag you passed: \").concat(props));\n    }\n    creators[tagName] = (tagName, attributes, children) => {\n      return createElement('element', _objectSpread(_objectSpread({}, props), attributes), children);\n    };\n  };\n  for (var tagName in elements) {\n    _loop();\n  }\n  return creators;\n};\n\n/**\n * The default hyperscript factory that ships with Slate, without custom tags.\n */\nvar jsx = createHyperscript();\n\n\n//# sourceMappingURL=index.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2xhdGUtaHlwZXJzY3JpcHQvZGlzdC9pbmRleC5lcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDbUM7O0FBRW5GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQix3QkFBd0Isb0NBQW9DLHlDQUF5QyxrQ0FBa0MsMERBQTBELDBCQUEwQjtBQUN0UCw4QkFBOEIsZ0JBQWdCLHNCQUFzQixPQUFPLGtEQUFrRCx3REFBd0QsOEJBQThCLHFKQUFxSixxRUFBcUUsS0FBSztBQUNsYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUNBQUk7QUFDWixxQkFBcUI7QUFDckIsVUFBVSx1Q0FBSSx3REFBd0QsdUNBQUk7QUFDMUU7QUFDQSxPQUFPO0FBQ1A7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU0sU0FBUywwQ0FBTztBQUN0QjtBQUNBLE1BQU07QUFDTjtBQUNBLFdBQVcsdUNBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlCQUFpQjtBQUM1RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUNBQUk7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdDQUFLO0FBQ2I7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUNBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFNBQVMsd0NBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHdCQUF3QixvQ0FBb0MseUNBQXlDLGtDQUFrQywwREFBMEQsMEJBQTBCO0FBQ3BQLDRCQUE0QixnQkFBZ0Isc0JBQXNCLE9BQU8sa0RBQWtELHNEQUFzRCw4QkFBOEIsbUpBQW1KLHFFQUFxRSxLQUFLO0FBQzVhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLGFBQWE7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw4REFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUM1RCIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zbGF0ZS1oeXBlcnNjcmlwdC9kaXN0L2luZGV4LmVzLmpzP2QxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gJ2lzLXBsYWluLW9iamVjdCc7XG5pbXBvcnQgeyBUZXh0LCBSYW5nZSwgTm9kZSwgRWxlbWVudCwgY3JlYXRlRWRpdG9yIGFzIGNyZWF0ZUVkaXRvciQxIH0gZnJvbSAnc2xhdGUnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuXG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxuXG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBBIHdlYWsgbWFwIHRvIGhvbGQgYW5jaG9yIHRva2Vucy5cbiAqL1xudmFyIEFOQ0hPUiA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEEgd2VhayBtYXAgdG8gaG9sZCBmb2N1cyB0b2tlbnMuXG4gKi9cbnZhciBGT0NVUyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEFsbCB0b2tlbnMgaW5oZXJpdCBmcm9tIGEgc2luZ2xlIGNvbnN0cnVjdG9yIGZvciBgaW5zdGFuY2VvZmAgY2hlY2tpbmcuXG4gKi9cbmNsYXNzIFRva2VuIHt9XG4vKipcbiAqIEFuY2hvciB0b2tlbnMgcmVwcmVzZW50IHRoZSBzZWxlY3Rpb24ncyBhbmNob3IgcG9pbnQuXG4gKi9cbmNsYXNzIEFuY2hvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHN1cGVyKCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib2Zmc2V0XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGF0aFwiLCB2b2lkIDApO1xuICAgIHZhciB7XG4gICAgICBvZmZzZXQsXG4gICAgICBwYXRoXG4gICAgfSA9IHByb3BzO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cbn1cbi8qKlxuICogRm9jdXMgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2VsZWN0aW9uJ3MgZm9jdXMgcG9pbnQuXG4gKi9cbmNsYXNzIEZvY3VzVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgc3VwZXIoKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvZmZzZXRcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXRoXCIsIHZvaWQgMCk7XG4gICAgdmFyIHtcbiAgICAgIG9mZnNldCxcbiAgICAgIHBhdGhcbiAgICB9ID0gcHJvcHM7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxufVxuLyoqXG4gKiBBZGQgYW4gYW5jaG9yIHRva2VuIHRvIHRoZSBlbmQgb2YgYSB0ZXh0IG5vZGUuXG4gKi9cbnZhciBhZGRBbmNob3JUb2tlbiA9ICh0ZXh0LCB0b2tlbikgPT4ge1xuICB2YXIgb2Zmc2V0ID0gdGV4dC50ZXh0Lmxlbmd0aDtcbiAgQU5DSE9SLnNldCh0ZXh0LCBbb2Zmc2V0LCB0b2tlbl0pO1xufTtcbi8qKlxuICogR2V0IHRoZSBvZmZzZXQgaWYgYSB0ZXh0IG5vZGUgaGFzIGFuIGFzc29jaWF0ZWQgYW5jaG9yIHRva2VuLlxuICovXG52YXIgZ2V0QW5jaG9yT2Zmc2V0ID0gdGV4dCA9PiB7XG4gIHJldHVybiBBTkNIT1IuZ2V0KHRleHQpO1xufTtcbi8qKlxuICogQWRkIGEgZm9jdXMgdG9rZW4gdG8gdGhlIGVuZCBvZiBhIHRleHQgbm9kZS5cbiAqL1xudmFyIGFkZEZvY3VzVG9rZW4gPSAodGV4dCwgdG9rZW4pID0+IHtcbiAgdmFyIG9mZnNldCA9IHRleHQudGV4dC5sZW5ndGg7XG4gIEZPQ1VTLnNldCh0ZXh0LCBbb2Zmc2V0LCB0b2tlbl0pO1xufTtcbi8qKlxuICogR2V0IHRoZSBvZmZzZXQgaWYgYSB0ZXh0IG5vZGUgaGFzIGFuIGFzc29jaWF0ZWQgZm9jdXMgdG9rZW4uXG4gKi9cbnZhciBnZXRGb2N1c09mZnNldCA9IHRleHQgPT4ge1xuICByZXR1cm4gRk9DVVMuZ2V0KHRleHQpO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMShlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzJDEoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbi8qKlxuICogUmVzb2x2ZSB0aGUgZGVzY2VkYW50cyBvZiBhIG5vZGUgYnkgbm9ybWFsaXppbmcgdGhlIGNoaWxkcmVuIHRoYXQgY2FuIGJlXG4gKiBwYXNzZWQgaW50byBhIGh5cGVyc2NyaXB0IGNyZWF0b3IgZnVuY3Rpb24uXG4gKi9cbnZhciBTVFJJTkdTID0gbmV3IFdlYWtTZXQoKTtcbnZhciByZXNvbHZlRGVzY2VuZGFudHMgPSBjaGlsZHJlbiA9PiB7XG4gIHZhciBub2RlcyA9IFtdO1xuICB2YXIgYWRkQ2hpbGQgPSBjaGlsZCA9PiB7XG4gICAgaWYgKGNoaWxkID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHByZXYgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHRleHQgPSB7XG4gICAgICAgIHRleHQ6IGNoaWxkXG4gICAgICB9O1xuICAgICAgU1RSSU5HUy5hZGQodGV4dCk7XG4gICAgICBjaGlsZCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChUZXh0LmlzVGV4dChjaGlsZCkpIHtcbiAgICAgIHZhciBjID0gY2hpbGQ7IC8vIEhBQ0s6IGZpeCB0eXBlc2NyaXB0IGNvbXBsYWluaW5nXG4gICAgICBpZiAoVGV4dC5pc1RleHQocHJldikgJiYgU1RSSU5HUy5oYXMocHJldikgJiYgU1RSSU5HUy5oYXMoYykgJiYgVGV4dC5lcXVhbHMocHJldiwgYywge1xuICAgICAgICBsb29zZTogdHJ1ZVxuICAgICAgfSkpIHtcbiAgICAgICAgcHJldi50ZXh0ICs9IGMudGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChFbGVtZW50LmlzRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUb2tlbikge1xuICAgICAgdmFyIG4gPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgIGlmICghVGV4dC5pc1RleHQobikpIHtcbiAgICAgICAgYWRkQ2hpbGQoJycpO1xuICAgICAgICBuID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBbmNob3JUb2tlbikge1xuICAgICAgICBhZGRBbmNob3JUb2tlbihuLCBjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgRm9jdXNUb2tlbikge1xuICAgICAgICBhZGRGb2N1c1Rva2VuKG4sIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBoeXBlcnNjcmlwdCBjaGlsZCBvYmplY3Q6IFwiLmNvbmNhdChjaGlsZCkpO1xuICAgIH1cbiAgfTtcbiAgZm9yICh2YXIgY2hpbGQgb2YgY2hpbGRyZW4uZmxhdChJbmZpbml0eSkpIHtcbiAgICBhZGRDaGlsZChjaGlsZCk7XG4gIH1cbiAgcmV0dXJuIG5vZGVzO1xufTtcbi8qKlxuICogQ3JlYXRlIGFuIGFuY2hvciB0b2tlbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQW5jaG9yKHRhZ05hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKSB7XG4gIHJldHVybiBuZXcgQW5jaG9yVG9rZW4oYXR0cmlidXRlcyk7XG59XG4vKipcbiAqIENyZWF0ZSBhbiBhbmNob3IgYW5kIGEgZm9jdXMgdG9rZW4uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUN1cnNvcih0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICByZXR1cm4gW25ldyBBbmNob3JUb2tlbihhdHRyaWJ1dGVzKSwgbmV3IEZvY3VzVG9rZW4oYXR0cmlidXRlcyldO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gYEVsZW1lbnRgIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICByZXR1cm4gX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7fSwgYXR0cmlidXRlcyksIHt9LCB7XG4gICAgY2hpbGRyZW46IHJlc29sdmVEZXNjZW5kYW50cyhjaGlsZHJlbilcbiAgfSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIGZvY3VzIHRva2VuLlxuICovXG5mdW5jdGlvbiBjcmVhdGVGb2N1cyh0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICByZXR1cm4gbmV3IEZvY3VzVG9rZW4oYXR0cmlidXRlcyk7XG59XG4vKipcbiAqIENyZWF0ZSBhIGZyYWdtZW50LlxuICovXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCh0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICByZXR1cm4gcmVzb2x2ZURlc2NlbmRhbnRzKGNoaWxkcmVuKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFNlbGVjdGlvbmAgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rpb24odGFnTmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcbiAgdmFyIGFuY2hvciA9IGNoaWxkcmVuLmZpbmQoYyA9PiBjIGluc3RhbmNlb2YgQW5jaG9yVG9rZW4pO1xuICB2YXIgZm9jdXMgPSBjaGlsZHJlbi5maW5kKGMgPT4gYyBpbnN0YW5jZW9mIEZvY3VzVG9rZW4pO1xuICBpZiAoIWFuY2hvciB8fCBhbmNob3Iub2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yLnBhdGggPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSA8c2VsZWN0aW9uPiBoeXBlcnNjcmlwdCB0YWcgbXVzdCBoYXZlIGFuIDxhbmNob3I+IHRhZyBhcyBhIGNoaWxkIHdpdGggYHBhdGhgIGFuZCBgb2Zmc2V0YCBhdHRyaWJ1dGVzIGRlZmluZWQuXCIpO1xuICB9XG4gIGlmICghZm9jdXMgfHwgZm9jdXMub2Zmc2V0ID09IG51bGwgfHwgZm9jdXMucGF0aCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIDxzZWxlY3Rpb24+IGh5cGVyc2NyaXB0IHRhZyBtdXN0IGhhdmUgYSA8Zm9jdXM+IHRhZyBhcyBhIGNoaWxkIHdpdGggYHBhdGhgIGFuZCBgb2Zmc2V0YCBhdHRyaWJ1dGVzIGRlZmluZWQuXCIpO1xuICB9XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkJDEoe1xuICAgIGFuY2hvcjoge1xuICAgICAgb2Zmc2V0OiBhbmNob3Iub2Zmc2V0LFxuICAgICAgcGF0aDogYW5jaG9yLnBhdGhcbiAgICB9LFxuICAgIGZvY3VzOiB7XG4gICAgICBvZmZzZXQ6IGZvY3VzLm9mZnNldCxcbiAgICAgIHBhdGg6IGZvY3VzLnBhdGhcbiAgICB9XG4gIH0sIGF0dHJpYnV0ZXMpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBgVGV4dGAgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRhZ05hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKSB7XG4gIHZhciBub2RlcyA9IHJlc29sdmVEZXNjZW5kYW50cyhjaGlsZHJlbik7XG4gIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIDx0ZXh0PiBoeXBlcnNjcmlwdCB0YWcgbXVzdCBvbmx5IGNvbnRhaW4gYSBzaW5nbGUgbm9kZSdzIHdvcnRoIG9mIGNoaWxkcmVuLlwiKTtcbiAgfVxuICB2YXIgW25vZGVdID0gbm9kZXM7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICBub2RlID0ge1xuICAgICAgdGV4dDogJydcbiAgICB9O1xuICB9XG4gIGlmICghVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgVGhlIDx0ZXh0PiBoeXBlcnNjcmlwdCB0YWcgY2FuIG9ubHkgY29udGFpbiB0ZXh0IGNvbnRlbnQgYXMgY2hpbGRyZW4uXCIpO1xuICB9XG4gIC8vIENPTVBBVDogSWYgdGhleSB1c2VkIHRoZSA8dGV4dD4gdGFnIHdlIHdhbnQgdG8gZ3VhcmFudGVlIHRoYXQgaXQgd29uJ3QgYmVcbiAgLy8gbWVyZ2Ugd2l0aCBvdGhlciBzdHJpbmcgY2hpbGRyZW4uXG4gIFNUUklOR1MuZGVsZXRlKG5vZGUpO1xuICBPYmplY3QuYXNzaWduKG5vZGUsIGF0dHJpYnV0ZXMpO1xuICByZXR1cm4gbm9kZTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgdG9wLWxldmVsIGBFZGl0b3JgIG9iamVjdC5cbiAqL1xudmFyIGNyZWF0ZUVkaXRvciA9IG1ha2VFZGl0b3IgPT4gKHRhZ05hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKSA9PiB7XG4gIHZhciBvdGhlckNoaWxkcmVuID0gW107XG4gIHZhciBzZWxlY3Rpb25DaGlsZDtcbiAgZm9yICh2YXIgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICBpZiAoUmFuZ2UuaXNSYW5nZShjaGlsZCkpIHtcbiAgICAgIHNlbGVjdGlvbkNoaWxkID0gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG90aGVyQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG4gIHZhciBkZXNjZW5kYW50cyA9IHJlc29sdmVEZXNjZW5kYW50cyhvdGhlckNoaWxkcmVuKTtcbiAgdmFyIHNlbGVjdGlvbiA9IHt9O1xuICB2YXIgZWRpdG9yID0gbWFrZUVkaXRvcigpO1xuICBPYmplY3QuYXNzaWduKGVkaXRvciwgYXR0cmlidXRlcyk7XG4gIGVkaXRvci5jaGlsZHJlbiA9IGRlc2NlbmRhbnRzO1xuICAvLyBTZWFyY2ggdGhlIGRvY3VtZW50J3MgdGV4dHMgdG8gc2VlIGlmIGFueSBvZiB0aGVtIGhhdmUgdG9rZW5zIGFzc29jaWF0ZWRcbiAgLy8gdGhhdCBuZWVkIGluY29ycG9yYXRlZCBpbnRvIHRoZSBzZWxlY3Rpb24uXG4gIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBOb2RlLnRleHRzKGVkaXRvcikpIHtcbiAgICB2YXIgYW5jaG9yID0gZ2V0QW5jaG9yT2Zmc2V0KG5vZGUpO1xuICAgIHZhciBmb2N1cyA9IGdldEZvY3VzT2Zmc2V0KG5vZGUpO1xuICAgIGlmIChhbmNob3IgIT0gbnVsbCkge1xuICAgICAgdmFyIFtvZmZzZXRdID0gYW5jaG9yO1xuICAgICAgc2VsZWN0aW9uLmFuY2hvciA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZm9jdXMgIT0gbnVsbCkge1xuICAgICAgdmFyIFtfb2Zmc2V0XSA9IGZvY3VzO1xuICAgICAgc2VsZWN0aW9uLmZvY3VzID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBvZmZzZXQ6IF9vZmZzZXRcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmIChzZWxlY3Rpb24uYW5jaG9yICYmICFzZWxlY3Rpb24uZm9jdXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTbGF0ZSBoeXBlcnNjcmlwdCByYW5nZXMgbXVzdCBoYXZlIGJvdGggYDxhbmNob3IgLz5gIGFuZCBgPGZvY3VzIC8+YCBkZWZpbmVkIGlmIG9uZSBpcyBkZWZpbmVkLCBidXQgeW91IG9ubHkgZGVmaW5lZCBgPGFuY2hvciAvPmAuIEZvciBjb2xsYXBzZWQgc2VsZWN0aW9ucywgdXNlIGA8Y3Vyc29yIC8+YCBpbnN0ZWFkLlwiKTtcbiAgfVxuICBpZiAoIXNlbGVjdGlvbi5hbmNob3IgJiYgc2VsZWN0aW9uLmZvY3VzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2xhdGUgaHlwZXJzY3JpcHQgcmFuZ2VzIG11c3QgaGF2ZSBib3RoIGA8YW5jaG9yIC8+YCBhbmQgYDxmb2N1cyAvPmAgZGVmaW5lZCBpZiBvbmUgaXMgZGVmaW5lZCwgYnV0IHlvdSBvbmx5IGRlZmluZWQgYDxmb2N1cyAvPmAuIEZvciBjb2xsYXBzZWQgc2VsZWN0aW9ucywgdXNlIGA8Y3Vyc29yIC8+YCBpbnN0ZWFkLlwiKTtcbiAgfVxuICBpZiAoc2VsZWN0aW9uQ2hpbGQgIT0gbnVsbCkge1xuICAgIGVkaXRvci5zZWxlY3Rpb24gPSBzZWxlY3Rpb25DaGlsZDtcbiAgfSBlbHNlIGlmIChSYW5nZS5pc1JhbmdlKHNlbGVjdGlvbikpIHtcbiAgICBlZGl0b3Iuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG4gIHJldHVybiBlZGl0b3I7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbi8qKlxuICogVGhlIGRlZmF1bHQgY3JlYXRvcnMgZm9yIFNsYXRlIG9iamVjdHMuXG4gKi9cbnZhciBERUZBVUxUX0NSRUFUT1JTID0ge1xuICBhbmNob3I6IGNyZWF0ZUFuY2hvcixcbiAgY3Vyc29yOiBjcmVhdGVDdXJzb3IsXG4gIGVkaXRvcjogY3JlYXRlRWRpdG9yKGNyZWF0ZUVkaXRvciQxKSxcbiAgZWxlbWVudDogY3JlYXRlRWxlbWVudCxcbiAgZm9jdXM6IGNyZWF0ZUZvY3VzLFxuICBmcmFnbWVudDogY3JlYXRlRnJhZ21lbnQsXG4gIHNlbGVjdGlvbjogY3JlYXRlU2VsZWN0aW9uLFxuICB0ZXh0OiBjcmVhdGVUZXh0XG59O1xuLyoqXG4gKiBDcmVhdGUgYSBTbGF0ZSBoeXBlcnNjcmlwdCBmdW5jdGlvbiB3aXRoIGBvcHRpb25zYC5cbiAqL1xudmFyIGNyZWF0ZUh5cGVyc2NyaXB0ID0gZnVuY3Rpb24gY3JlYXRlSHlwZXJzY3JpcHQoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIHtcbiAgICBlbGVtZW50cyA9IHt9XG4gIH0gPSBvcHRpb25zO1xuICB2YXIgZWxlbWVudENyZWF0b3JzID0gbm9ybWFsaXplRWxlbWVudHMoZWxlbWVudHMpO1xuICB2YXIgY3JlYXRvcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgREVGQVVMVF9DUkVBVE9SUyksIGVsZW1lbnRDcmVhdG9ycyksIG9wdGlvbnMuY3JlYXRvcnMpO1xuICB2YXIganN4ID0gY3JlYXRlRmFjdG9yeShjcmVhdG9ycyk7XG4gIHJldHVybiBqc3g7XG59O1xuLyoqXG4gKiBDcmVhdGUgYSBTbGF0ZSBoeXBlcnNjcmlwdCBmdW5jdGlvbiB3aXRoIGBvcHRpb25zYC5cbiAqL1xudmFyIGNyZWF0ZUZhY3RvcnkgPSBjcmVhdG9ycyA9PiB7XG4gIHZhciBqc3ggPSBmdW5jdGlvbiBqc3godGFnTmFtZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjaGlsZHJlbiA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBjaGlsZHJlbltfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHZhciBjcmVhdG9yID0gY3JlYXRvcnNbdGFnTmFtZV07XG4gICAgaWYgKCFjcmVhdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBoeXBlcnNjcmlwdCBjcmVhdG9yIGZvdW5kIGZvciB0YWc6IDxcIi5jb25jYXQodGFnTmFtZSwgXCI+XCIpKTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkge1xuICAgICAgYXR0cmlidXRlcyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYXR0cmlidXRlcykpIHtcbiAgICAgIGNoaWxkcmVuID0gW2F0dHJpYnV0ZXNdLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICBhdHRyaWJ1dGVzID0ge307XG4gICAgfVxuICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IEJvb2xlYW4oY2hpbGQpKS5mbGF0KCk7XG4gICAgdmFyIHJldCA9IGNyZWF0b3IodGFnTmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG4gIHJldHVybiBqc3g7XG59O1xuLyoqXG4gKiBOb3JtYWxpemUgYSBkaWN0aW9uYXJ5IG9mIGVsZW1lbnQgc2hvcnRoYW5kcyBpbnRvIGNyZWF0b3IgZnVuY3Rpb25zLlxuICovXG52YXIgbm9ybWFsaXplRWxlbWVudHMgPSBlbGVtZW50cyA9PiB7XG4gIHZhciBjcmVhdG9ycyA9IHt9O1xuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICB2YXIgcHJvcHMgPSBlbGVtZW50c1t0YWdOYW1lXTtcbiAgICBpZiAodHlwZW9mIHByb3BzICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvcGVydGllcyBzcGVjaWZpZWQgZm9yIGEgaHlwZXJzY3JpcHQgc2hvcnRoYW5kIHNob3VsZCBiZSBhbiBvYmplY3QsIGJ1dCBmb3IgdGhlIGN1c3RvbSBlbGVtZW50IDxcIi5jb25jYXQodGFnTmFtZSwgXCI+ICB0YWcgeW91IHBhc3NlZDogXCIpLmNvbmNhdChwcm9wcykpO1xuICAgIH1cbiAgICBjcmVhdG9yc1t0YWdOYW1lXSA9ICh0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikgPT4ge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2VsZW1lbnQnLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwgYXR0cmlidXRlcyksIGNoaWxkcmVuKTtcbiAgICB9O1xuICB9O1xuICBmb3IgKHZhciB0YWdOYW1lIGluIGVsZW1lbnRzKSB7XG4gICAgX2xvb3AoKTtcbiAgfVxuICByZXR1cm4gY3JlYXRvcnM7XG59O1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGh5cGVyc2NyaXB0IGZhY3RvcnkgdGhhdCBzaGlwcyB3aXRoIFNsYXRlLCB3aXRob3V0IGN1c3RvbSB0YWdzLlxuICovXG52YXIganN4ID0gY3JlYXRlSHlwZXJzY3JpcHQoKTtcblxuZXhwb3J0IHsgY3JlYXRlRWRpdG9yLCBjcmVhdGVIeXBlcnNjcmlwdCwgY3JlYXRlVGV4dCwganN4IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lcy5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/slate-hyperscript/dist/index.es.js\n");

/***/ })

};
;