/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bahiana&family=Open+Sans:wght@700&family=Pixelify+Sans&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  background-color: rgb(18, 21, 24);\n}\n\nmain{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nnav{\n  margin: 10px;\n  display: flex;\n  gap: 15px;\n  color: rgb(255, 249, 235);\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  font-size: 35px;\n  font-family: 'Pixelify Sans', sans-serif;\n}\n\nnav img{\n  width: 50px;\n  height: 50px;\n}\n\n#info-partida {\n  text-transform: uppercase;\n  opacity: 0;\n  animation: aparecer 2s forwards; \n}\n\n@keyframes aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.container-info-partida{\n  padding: 0.5em;\n  margin: 0 auto;\n  background-color: rgb(26, 26, 26);\n  display: flex;\n  flex-wrap: wrap;\n  color: white;\n  justify-content: center;\n  width: 50%;\n  font-family: 'Pixelify Sans', sans-serif;\n  font-weight: lighter;\n  font-size: 20px;\n  border-radius: 8px;\n}\n\n.container-tableros{\n  margin: 20px;\n  padding: 1em;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  gap: 50px;\n  justify-content: center;\n  width: 100%;\n}\n\n.tablero-jugador, .tablero-cpu{\n  background-color: rgb(196, 196, 196);\n  width: auto;\n  display: grid;\n  grid-template-columns: repeat(8,1fr);\n  grid-template-rows: repeat(8,1fr);\n  font-size: 30px;\n  margin: 0;\n  padding: 0;\n  border: 2px solid rgba(255, 228, 106, 0.767);\n  border-radius: 8px;\n  position: relative;\n}\n\n.tablero-cpu{\n  pointer-events: none;\n}\n\n.tablero-jugador::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  display: none;\n}\n\n.tablero-cpu::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  display: none;\n}\n\n.overlay-activado::before {\n  display: block;\n  cursor: not-allowed;\n}\n\n.celda{\n  padding: 0.5em;\n  border: 1px solid rgb(20, 20, 20);\n  text-align: center;\n  height: fit-content;\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  background-image: none;\n}\n\n.celda:hover{\n  background-color: antiquewhite;\n  cursor: pointer;\n}\n\n.tablero-cpu .celda{\n  color: transparent;\n}\n\nfooter{\n  padding: 0.3em;\n  margin-top: 20px;\n  background-color: rgb(1, 38, 71);\n  height: fit-content;\n  display: flex;\n  padding: 0.3em;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\nfooter img{\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}  \n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n\n#reiniciar {\n  background-color: #3498db;\n  color: #000000;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s; \n}\n\n#reiniciar:hover {\n  background-color: #2980b9;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/cargarRecursos.js":
/*!***************************************!*\
  !*** ./src/scripts/cargarRecursos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activarCursorCpu: () => (/* binding */ activarCursorCpu),\n/* harmony export */   activarOverlay: () => (/* binding */ activarOverlay),\n/* harmony export */   cargarImagenes: () => (/* binding */ cargarImagenes),\n/* harmony export */   cargarTableros: () => (/* binding */ cargarTableros),\n/* harmony export */   desactivarCursor: () => (/* binding */ desactivarCursor),\n/* harmony export */   desactivarOverlay: () => (/* binding */ desactivarOverlay)\n/* harmony export */ });\n/* harmony import */ var _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/github-logo.png */ \"./src/assets/github-logo.png\");\n/* harmony import */ var _assets_battleship_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/battleship-icon.png */ \"./src/assets/battleship-icon.png\");\n/* harmony import */ var _assets_puntero_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/puntero.png */ \"./src/assets/puntero.png\");\n\n\n\n\nfunction cargarImagenes(){\n    const logoGithub = document.querySelector(\"#logo-github\");\n    logoGithub.src = _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    const logoBattleship1 = document.querySelector(\"#battleship-logo1\");\n    const logoBattleship2 = document.querySelector(\"#battleship-logo2\");\n    logoBattleship1.src = _assets_battleship_icon_png__WEBPACK_IMPORTED_MODULE_1__;\n    logoBattleship2.src = _assets_battleship_icon_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    const botonReinicio = document.querySelector(\"#reiniciar\");\n    botonReinicio.addEventListener(\"click\", () => {\n      location.reload();\n    })\n}\n\nfunction cargarTableros(tablero) {\n    document.querySelector(\"#info-partida\").textContent = \"Coloca tu acorazado\";\n    const tableroJugador = document.querySelector(\".tablero-jugador\");\n    const tableroCpu = document.querySelector(\".tablero-cpu\");\n\n    if(tablero.jugador){\n      for (let i = 0; i < 8; i++) {\n        for (let j = 0; j < 8; j++) {\n          const celda = document.createElement(\"div\");\n          celda.classList.add(\"celda\");\n          celda.dataset.fila = i;\n          celda.dataset.columna = j;\n          tableroJugador.appendChild(celda);\n        }\n      }\n    }\n\n    if(!tablero.jugador){\n      for (let i = 0; i < 8; i++) {\n        for (let j = 0; j < 8; j++) {\n          const celda = document.createElement(\"div\");\n          celda.classList.add(\"celda\");\n          celda.dataset.fila = i;\n          celda.dataset.columna = j;\n          tableroCpu.appendChild(celda);\n        }\n      }\n    }\n    \n  }\n\n  function activarCursorCpu(){\n    const tableroCpu = document.querySelector(\".tablero-cpu\");\n    tableroCpu.style.pointerEvents = \"auto\";\n    tableroCpu.style.cursor = \"pointer\"\n  }\n\n  function desactivarCursor(){\n    const tableroCpu = document.querySelector(\".tablero-cpu\");\n    tableroCpu.style.pointerEvents = \"none\";\n    tableroCpu.style.cursor = \"not-allowed\"\n  }\n\n  function activarOverlay(tablero)\n  {\n    //const tableroJugador = document.querySelector(\".tablero-jugador\");\n    tablero.classList.add(\"overlay-activado\");\n  }\n\n  function desactivarOverlay(tablero)\n  {\n    //const tableroJugador = document.querySelector(\".tablero-jugador\");\n    tablero.classList.remove(\"overlay-activado\");\n  }\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/cargarRecursos.js?");

/***/ }),

/***/ "./src/scripts/eventosDOM.js":
/*!***********************************!*\
  !*** ./src/scripts/eventosDOM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colocarBarcosCpu: () => (/* binding */ colocarBarcosCpu),\n/* harmony export */   eventosCeldas: () => (/* binding */ eventosCeldas)\n/* harmony export */ });\n/* harmony import */ var _cargarRecursos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cargarRecursos */ \"./src/scripts/cargarRecursos.js\");\n/* harmony import */ var _assets_water_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/water.png */ \"./src/assets/water.png\");\n\n\n\nlet puedeAtacarJugador = true;\nconst infoColocacion = document.querySelector(\"#info-partida\");\nconst tableroJugador = document.querySelector(\".tablero-jugador\");\nconst tableroCpu = document.querySelector(\".tablero-cpu\");\n\nfunction eventosCeldas(tableroJugador, tableroCpu){\n    \n    const celdas = document.querySelectorAll(\".celda\")\n    celdas.forEach(celda => {\n            //Si tenemos las celdas del jugador le ponemos el evento de colocar barcos\n            if(celda.parentElement.classList.value === \"tablero-jugador\"){\n                \n                celda.addEventListener(\"click\", function (e) {\n                    eventoColocarBarcos(tableroJugador, e);      \n                });\n            } \n            //si no ponemos el evento de atacar al tablero rival\n            else {\n                celda.addEventListener(\"click\", function (e) {\n\n                    atacarCpu(tableroCpu, e); //ataco a la cpu                  \n                    if(puedeAtacarJugador)\n                    {\n                        if(tableroCpu.barcosEliminados() || tableroJugador.barcosEliminados())\n                        {\n                            infoColocacion.textContent = \"FIN DE PARTIDA\"\n                            return;\n                        }\n                        atacarJugador(tableroJugador); //nos atacaan\n                    }\n\n                    if(tableroCpu.barcosEliminados() || tableroJugador.barcosEliminados())\n                    {\n                        infoColocacion.textContent = \"FIN DE PARTIDA\"\n                        return;\n                    }\n                    \n                });\n            }\n            \n        })\n     \n}\n\nlet contBarcos = 0;\nlet puedeColocar = true;\nlet haColocado = false;\n\nfunction eventoColocarBarcos(tablero, e){\n    const barcos = [\"acorazado\", \"destructor\", \"submarino\", \"patrullero\"];\n    const limites = [5, 5, 6, 7];\n    const tamBarco = obtenerTamañoBarco(barcos[contBarcos]);\n    const fila = parseInt(e.target.dataset.fila);\n    const columna = parseInt(e.target.dataset.columna);\n\n    //fase de colocacion de barcos\n    if(puedeColocar)\n    {\n        //comprobamos la celda\n        if(tablero.comprobarCelda(fila,columna))\n        {\n            if(tablero.comprobarCelda(fila,columna+3))\n            {\n                //colocamos el barco en tantas casillas como longitud tenga el barco\n                tablero.colocarBarcos([fila, columna], barcos[contBarcos]);\n                for (let i = 0; i < tamBarco; i++) {\n                    \n                    const celda = document.querySelector(`[data-fila=\"${fila}\"][data-columna=\"${columna + i}\"]`);\n\n                    //comprobamos los limites de columnas, si se ha pasado es que no ha colocado\n                    if(columna >= limites[contBarcos]){\n                        infoColocacion.textContent = \"No se puede colocar ahí, inténtalo de nuevo \"\n                        haColocado = false;\n                        \n                    } \n                    //si ha colocado el barco \n                    else {\n                        infoColocacion.textContent = \"Coloca tu \" + barcos[contBarcos+1];\n                        haColocado = true;\n                        celda.textContent = \"🚢\";\n                    }\n                    \n                }\n\n                if(haColocado){\n                    contBarcos++;\n                }\n                    \n\n                if(contBarcos >= 4){\n                    puedeColocar = false;\n                    infoColocacion.textContent = \"Comienza la batalla\";\n                    setTimeout(() => {\n                        infoColocacion.textContent = \"Turno del jugador\";\n\n                    }, \"1000\");                  \n                    (0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.activarOverlay)(tableroJugador);\n                    (0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.activarCursorCpu)();\n                    return true;\n                }\n            }\n        }\n        \n    } \n\n}\n\nfunction colocarBarcosCpu(tablero){\n    let cont = 0, fila, columna;\n    const barcos = [\"acorazado\", \"destructor\", \"submarino\", \"patrullero\"];\n\n    for(let i = 0; i < 4; i++)\n    {\n        let tam = obtenerTamañoBarco(barcos[cont]);\n        switch(cont)\n        {\n            case 0: \n                fila = Math.floor(Math.random()*2);\n                columna = Math.floor(Math.random()*5);\n\n                tablero.colocarBarcos([fila, columna], barcos[cont]);\n\n                fila = fila.toString();\n                columna = columna.toString();\n                \n                //tablero.mostrarTablero();\n\n                for (let i = 0; i < tam; i++) {\n        \n                    const celda = tableroCpu.querySelector(`[data-fila=\"${fila}\"][data-columna=\"${columna}\"]`);\n                    \n                    celda.textContent = \"X\"\n                    columna++;\n                }\n\n                break;\n\n            case 1: \n                fila = Math.floor(Math.random() * 2) + 2;\n                columna = Math.floor(Math.random()*5);\n\n                tablero.colocarBarcos([fila, columna], barcos[cont]);\n\n                fila = fila.toString();\n                columna = columna.toString();\n\n                \n                //tablero.mostrarTablero();\n\n                for (let i = 0; i < tam; i++) {\n        \n                    const celda = tableroCpu.querySelector(`[data-fila=\"${fila}\"][data-columna=\"${columna}\"]`);\n                    \n                    celda.textContent = \"X\"\n                    columna++;\n                }\n\n                break;\n\n            case 2: \n            \n                fila = Math.floor(Math.random() * 2) + 4;\n                columna = Math.floor(Math.random()*5);\n\n                tablero.colocarBarcos([fila, columna], barcos[cont]);\n\n                fila = fila.toString();\n                columna = columna.toString();\n\n                \n                //tablero.mostrarTablero();\n\n                for (let i = 0; i < tam; i++) {\n                    const celda = tableroCpu.querySelector(`[data-fila=\"${fila}\"][data-columna=\"${columna}\"]`);\n                    celda.textContent = \"X\"\n                    columna++;\n                }                    \n                break;\n\n            case 3: \n                \n                fila = Math.floor(Math.random() * 2) + 6;\n                columna = Math.floor(Math.random()*5);\n\n                tablero.colocarBarcos([fila, columna], barcos[cont]);\n\n                fila = fila.toString();\n                columna = columna.toString();\n\n                \n                //tablero.mostrarTablero();\n\n                for (let i = 0; i < tam; i++) {\n                    const celda = tableroCpu.querySelector(`[data-fila=\"${fila}\"][data-columna=\"${columna}\"]`);\n                    celda.textContent = \"X\"\n                    columna++;\n                }\n\n                break;\n                \n        }\n        cont++;\n    }\n}\n\nfunction obtenerTamañoBarco(nombreBarco) {\n    switch (nombreBarco) {\n        case \"acorazado\":\n        return 4;\n        case \"destructor\":\n        return 4;\n        case \"submarino\":\n        return 3;\n        case \"patrullero\":\n        return 2;\n        default:\n        return 0; // Valor por defecto en caso de que el nombre del barco no sea válido\n    }\n}\n\nlet coordenadasAtacadas = [];\n\nfunction atacarCpu(tablero, e){\n    \n    (0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.activarCursorCpu)();\n    const fila = parseInt(e.target.dataset.fila);\n    const columna = parseInt(e.target.dataset.columna);\n\n    const celda = tableroCpu.querySelector(`[data-fila=\"${fila}\"][data-columna=\"${columna}\"]`);\n    \n    \n    let celdaAtacada = false;\n    coordenadasAtacadas.forEach(coordenada => {\n        if(coordenada[0] === fila && coordenada[1] === columna){\n            celdaAtacada = true;\n            puedeAtacarJugador = false;\n            infoColocacion.textContent = \"Ya has atacado ahí, prueba en otro sitio\"\n        }\n    })\n\n    if(!celdaAtacada)\n    {\n        if(puedeAtacarJugador)\n        {\n            (0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.activarOverlay)(tableroCpu)\n            ;(0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.desactivarOverlay)(tableroJugador)\n            \n        }\n        \n        if(!tablero.comprobarCelda(fila,columna)){\n            tablero.recibirAtaque([fila,columna]);\n            infoColocacion.textContent = \"Posición [\" + fila + \",\" + columna + \"] atacada\" + \". Barco tocado\";\n            celda.textContent = \"🚢\"\n            celda.style.backgroundColor = \"#db4c1a\";\n            \n            \n        } else {\n            celda.style.background = \"#1aabdb\"\n            infoColocacion.textContent = \"Posición [\" + fila + \",\" + columna + \"] atacada\" + \". FALLO\";\n        }\n        \n        puedeAtacarJugador = true;\n        (0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.desactivarCursor)();\n        coordenadasAtacadas.push([fila,columna])\n    }\n}\n\nlet coordenadasAtacadasJugador = [];\n\nfunction atacarJugador(tablero) {\n\n    infoColocacion.textContent = \"ATACANDO AL JUGADOR\"\n\n    let fila, columna;\n\n    do {\n        fila = Math.floor(Math.random() * 8);\n        columna = Math.floor(Math.random() * 8);\n    } while (coordenadasAtacadasJugador.some(coordenada => coordenada[0] === fila && coordenada[1] === columna));\n\n    coordenadasAtacadasJugador.push([fila, columna]);\n\n    const celda = tableroJugador.querySelector(`[data-fila=\"${fila}\"][data-columna=\"${columna}\"]`);\n\n    setTimeout(() => {\n        if (!tablero.comprobarCelda(fila, columna)) {\n            tablero.recibirAtaque([fila, columna]);\n            celda.style.backgroundColor = \"#db4c1a\";\n        } else {\n            celda.style.background = \"#1aabdb\";\n        }\n\n        (0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.activarCursorCpu)();\n        infoColocacion.textContent = \"TURNO DEL JUGADOR\"\n        \n        ;(0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.activarOverlay)(tableroJugador);\n        (0,_cargarRecursos__WEBPACK_IMPORTED_MODULE_0__.desactivarOverlay)(tableroCpu)\n    }, 1600);\n    \n}\n\n\n  \n\n//# sourceURL=webpack://battleship/./src/scripts/eventosDOM.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _cargarRecursos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cargarRecursos.js */ \"./src/scripts/cargarRecursos.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ \"./src/scripts/objects.js\");\n/* harmony import */ var _eventosDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventosDOM */ \"./src/scripts/eventosDOM.js\");\n\n\n\n\n\nconst tableroJugador = new _objects__WEBPACK_IMPORTED_MODULE_2__.Tablero(true); //true porque el tablero pertenece al jugador\nconst tableroCpu = new _objects__WEBPACK_IMPORTED_MODULE_2__.Tablero(false); //false porque pertenece a la maquina\n\n(0,_cargarRecursos_js__WEBPACK_IMPORTED_MODULE_1__.cargarImagenes)(); \n(0,_cargarRecursos_js__WEBPACK_IMPORTED_MODULE_1__.cargarTableros)(tableroJugador);\n(0,_cargarRecursos_js__WEBPACK_IMPORTED_MODULE_1__.cargarTableros)(tableroCpu);\n(0,_eventosDOM__WEBPACK_IMPORTED_MODULE_3__.colocarBarcosCpu)(tableroCpu);\n(0,_eventosDOM__WEBPACK_IMPORTED_MODULE_3__.eventosCeldas)(tableroJugador, tableroCpu);\n/*\nconst tablero = new Tablero();\ntablero.mostrarTablero();\ntablero.colocarBarcos([0,0], \"acorazado\")\ntablero.mostrarTablero();\n*/\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/objects.js":
/*!********************************!*\
  !*** ./src/scripts/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Barco: () => (/* binding */ Barco),\n/* harmony export */   Tablero: () => (/* binding */ Tablero)\n/* harmony export */ });\nclass Barco {\n    constructor(nombre, tam, estaHundido) {\n        this.nombre = nombre;\n        this.tam = tam;\n        this.numImpactos = 0;\n        this.estaHundido = estaHundido;\n        this.coordenadas = [];\n    }\n\n    hit() {\n        this.numImpactos++;\n        if (this.numImpactos >= this.tam) {\n            this.estaHundido = true;\n            this.numImpactos = this.tam;\n            return;\n        }\n    }\n}\n\nclass Tablero {\n    constructor(jugador) {\n        this.tablero = this.crearTablero();\n        this.coleccionBarcos = [];\n        this.jugador = jugador;\n    }\n\n    barcosEliminados() {\n        return this.coleccionBarcos.length === 0;\n    }\n\n    crearTablero() {\n        const tablero = [\n            [\"□ \", \"⬜ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \"],\n            [\"□ \", \"□ \", \"⬜ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \"],\n            [\"□ \", \"□ \", \"□ \", \"⬜ \", \"□ \", \"□ \", \"□ \", \"□ \"],\n            [\"□ \", \"□ \", \"□ \", \"□ \", \"⬜ \", \"□ \", \"□ \", \"□ \"],\n            [\"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"⬜ \", \"□ \", \"□ \"],\n            [\"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"⬜ \", \"□ \"],\n            [\"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"⬜ \"],\n            [\"⬜ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \", \"□ \"],\n        ];\n        return tablero;\n    }\n\n    mostrarTablero() {\n        for (let i = 0; i < this.tablero.length; i++) {\n            let fila = \"\";\n            for (let j = 0; j < this.tablero[i].length; j++) {\n                fila += this.tablero[i][j] + \" \";\n            }\n            console.log(fila);\n        }\n        console.log(\"-----------------------\");\n        console.log(\"-----------------------\");\n        console.log(\"-----------------------\");\n    }\n\n    colocarBarcos(coordenadas, barco) {\n        barco = barco.toLowerCase();\n        const [fila, columna] = coordenadas;\n        let longitud;\n\n        switch (barco) {\n            case \"acorazado\": longitud = 4; break;\n            case \"destructor\": longitud = 4; break;\n            case \"submarino\": longitud = 3; break;\n            case \"patrullero\": longitud = 2; break;\n            default: return false; // Manejar caso inválido\n        }\n\n        if (columna + longitud > this.tablero[0].length) {\n            return false; // No hay suficiente espacio\n        }\n\n        const nuevoBarco = new Barco(barco, longitud, false);\n        for (let i = 0; i < longitud; i++) {\n            nuevoBarco.coordenadas.push([fila, columna + i]);\n            this.tablero[fila][columna + i] = \"🚢\";\n        }\n        this.coleccionBarcos.push(nuevoBarco);\n        return true;\n    }\n\n    recibirAtaque(coordenadas) {\n        const [fila, columna] = coordenadas;\n        let barcoImpactado = false;\n\n        for (let i = 0; i < this.coleccionBarcos.length; i++) {\n            const barco = this.coleccionBarcos[i];\n            for (let j = 0; j < barco.coordenadas.length; j++) {\n                const coordenada = barco.coordenadas[j];\n                if (coordenada[0] === fila && coordenada[1] === columna) {\n                    barco.hit();\n                    if (barco.estaHundido) {\n                        console.log(\"hundido el \" + barco.nombre);\n                        this.coleccionBarcos.splice(i, 1);\n                    }\n                    this.tablero[fila][columna] = \"X\";\n                    barcoImpactado = true;\n                    break;\n                }\n            }\n        }\n\n        if (!barcoImpactado) {\n            this.tablero[fila][columna] = \"f\";\n        }\n    }\n\n    comprobarCelda(fila, columna) {\n        return this.tablero[fila][columna] !== \"🚢\";\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/objects.js?");

/***/ }),

/***/ "./src/assets/battleship-icon.png":
/*!****************************************!*\
  !*** ./src/assets/battleship-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/battleship-icon.png?");

/***/ }),

/***/ "./src/assets/github-logo.png":
/*!************************************!*\
  !*** ./src/assets/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/github-logo.png?");

/***/ }),

/***/ "./src/assets/puntero.png":
/*!********************************!*\
  !*** ./src/assets/puntero.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/puntero.png?");

/***/ }),

/***/ "./src/assets/water.png":
/*!******************************!*\
  !*** ./src/assets/water.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/water.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;