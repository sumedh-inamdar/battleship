/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: Syncopate;\n    font-weight: 700;\n    background-color: rgba(0, 0, 0, 0.801);\n    color: white;\n}\nheader>h1 {\n    text-align: center;\n    font-size: 48px;\n    \n}\n\n.leftBoard, .rightBoard {\n    display: flex;\n    flex-direction: column;\n    margin: 25px;\n    padding: 15px;\n    border-radius: 15px;\n}\n\n.boardTitle {\n    text-align: center;\n}\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n    border-width: 1px;\n    border-style: solid;\n    margin: 20px 0px;\n    width: min-content;\n}\n.boardStatus {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n.bold {\n    font-weight: 700;\n}\n.regular {\n    font-weight: 400;\n}\n\n.boardHighlight {\n    background-color:hsl(0, 0%, 38%);\n    transition: all 0.2s;\n}\n\n#gameBoardRow {\n    display: flex;\n    justify-content: center;\n}\n\n/* Square */\n\n.square {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: Kanit;\n    font-size: 32px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border: 1px solid white;\n}\n.square > img {\n    color:blueviolet;\n    height: 85%;\n    width: 85%;\n}\n.ship {\n    background-color: rgb(11, 84, 145);\n}\n.hit {\n    color: rgb(255, 77, 77);\n    border-color: white;\n} \n.miss {\n    color: white;\n}\n\n#endGameContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n#endGameStatus {\n    margin: 10px 0px;\n}\n#restartGame {\n    font-family: inherit;\n    color: inherit;\n    padding: 5px 10px;\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: hsl(0, 0%, 38%);\n    box-shadow: 0px 0px 5px 1px rgb(255, 255, 255);\n}\n#restartGame:hover {\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0px 0px 5px 2px rgb(255, 255, 255);\n}\n.hidden {\n    visibility: hidden;\n}\n\n\n@media (max-width: 1000px) {\n    .leftBoard, .rightBoard {\n        margin: 20px;\n    }\n    #gameBoardRow {\n        flex-direction: column;\n        align-items: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,sCAAsC;IACtC,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,eAAe;;AAEnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;IACR,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,UAAU;AACd;AACA;IACI,kCAAkC;AACtC;AACA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,8CAA8C;AAClD;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,8CAA8C;AAClD;AACA;IACI,kBAAkB;AACtB;;;AAGA;IACI;QACI,YAAY;IAChB;IACA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');\n\nbody {\n    font-family: Syncopate;\n    font-weight: 700;\n    background-color: rgba(0, 0, 0, 0.801);\n    color: white;\n}\nheader>h1 {\n    text-align: center;\n    font-size: 48px;\n    \n}\n\n.leftBoard, .rightBoard {\n    display: flex;\n    flex-direction: column;\n    margin: 25px;\n    padding: 15px;\n    border-radius: 15px;\n}\n\n.boardTitle {\n    text-align: center;\n}\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n    border-width: 1px;\n    border-style: solid;\n    margin: 20px 0px;\n    width: min-content;\n}\n.boardStatus {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n.bold {\n    font-weight: 700;\n}\n.regular {\n    font-weight: 400;\n}\n\n.boardHighlight {\n    background-color:hsl(0, 0%, 38%);\n    transition: all 0.2s;\n}\n\n#gameBoardRow {\n    display: flex;\n    justify-content: center;\n}\n\n/* Square */\n\n.square {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: Kanit;\n    font-size: 32px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border: 1px solid white;\n}\n.square > img {\n    color:blueviolet;\n    height: 85%;\n    width: 85%;\n}\n.ship {\n    background-color: rgb(11, 84, 145);\n}\n.hit {\n    color: rgb(255, 77, 77);\n    border-color: white;\n} \n.miss {\n    color: white;\n}\n\n#endGameContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n#endGameStatus {\n    margin: 10px 0px;\n}\n#restartGame {\n    font-family: inherit;\n    color: inherit;\n    padding: 5px 10px;\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: hsl(0, 0%, 38%);\n    box-shadow: 0px 0px 5px 1px rgb(255, 255, 255);\n}\n#restartGame:hover {\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0px 0px 5px 2px rgb(255, 255, 255);\n}\n.hidden {\n    visibility: hidden;\n}\n\n\n@media (max-width: 1000px) {\n    .leftBoard, .rightBoard {\n        margin: 20px;\n    }\n    #gameBoardRow {\n        flex-direction: column;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Modules/Constants.js":
/*!**********************************!*\
  !*** ./src/Modules/Constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipTemplate": () => (/* binding */ shipTemplate),
/* harmony export */   "userConstants": () => (/* binding */ userConstants),
/* harmony export */   "computerConstants": () => (/* binding */ computerConstants)
/* harmony export */ });
const shipTemplate = [
    {length: 5, name: 'Carrier'},
    {length: 4, name: 'Battleship'},
    {length: 3, name: 'Destroyer'},
    {length: 3, name: 'Submarine'},
    {length: 2, name: 'Patrol Boat'}
  ];

const userConstants = {
    name: "You",
    boardClass: "leftBoard",
}

const computerConstants = {
    name: "Opponent",
    boardClass: "rightBoard",
}

/***/ }),

/***/ "./src/Modules/Control/gamePlay_controller.js":
/*!****************************************************!*\
  !*** ./src/Modules/Control/gamePlay_controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockUserInput": () => (/* binding */ blockUserInput),
/* harmony export */   "userTurn": () => (/* binding */ userTurn),
/* harmony export */   "compTurn": () => (/* binding */ compTurn),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/dom_helpers */ "./src/Modules/DOM/dom_helpers.js");
/* harmony import */ var _DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/renderDOM */ "./src/Modules/DOM/renderDOM.js");
/* harmony import */ var _UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/gamePlay_UI */ "./src/Modules/UI/gamePlay_UI.js");
/* harmony import */ var _setup_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup_controller */ "./src/Modules/Control/setup_controller.js");





let blockUserInput;

function _endGame(winner) {
    let endMsg = (winner === _setup_controller__WEBPACK_IMPORTED_MODULE_3__.user) ?  "You Win! Good job sinking all your opponents ships 😀" : "All your ships were sunk. You lost 🙁";

    (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass).forEach((sq) => (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.removeAllAttackEL)(sq));
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.board, _setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.board, _setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)();
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderEndgameMsg)(endMsg);

    (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.addClickRestartEL)();
}

function userTurn(x, y) {
    blockUserInput = true;
    
    _setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.player.sendAttack(x, y, _setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.board);
    if (_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.board.allSunk()) return _endGame(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.board, x, y, _setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)();
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, `Thinking...`, "bold");
    
    setTimeout(compTurn, 0); // change to 500 - 2000ms later
}

function compTurn() {
    const [_, target] = _setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.player.sendRandomAttack(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.board);
    if (_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.board.allSunk()) return _endGame(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.board, target[0], target[1], _setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)();
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, `Place your attack!`, 'regular', false);

    blockUserInput = false;
}

function startGame() {
    blockUserInput = false;
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass);
    
    (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.addHoverCrosshairEL)();
    (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.addClickAttackEL)();

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.board, _setup_controller__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.board, _setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)();
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, `Place your attack!`, 'regular', false);
}

/***/ }),

/***/ "./src/Modules/Control/setup_controller.js":
/*!*************************************************!*\
  !*** ./src/Modules/Control/setup_controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "setupGame": () => (/* binding */ setupGame)
/* harmony export */ });
/* harmony import */ var _Factory_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Factory/Gameboard.js */ "./src/Modules/Factory/Gameboard.js");
/* harmony import */ var _Factory_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Factory/Player */ "./src/Modules/Factory/Player.js");
/* harmony import */ var _Factory_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory/Ship */ "./src/Modules/Factory/Ship.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants */ "./src/Modules/Constants.js");
/* harmony import */ var _DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DOM/renderDOM */ "./src/Modules/DOM/renderDOM.js");






let user, computer;

function _generateShips(shipInfo) {
    const shipArray = [];

    shipInfo.forEach(ship => {
      shipArray.push((0,_Factory_Ship__WEBPACK_IMPORTED_MODULE_2__["default"])(ship.length, ship.name));
    });

    return shipArray;
}

function _setupGameObjects(player1, player2, shipInfo) {
    player1.player = (0,_Factory_Player__WEBPACK_IMPORTED_MODULE_1__["default"])(player1.name);
    player2.player = (0,_Factory_Player__WEBPACK_IMPORTED_MODULE_1__["default"])(player2.name);

    player1.board = (0,_Factory_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    player2.board = (0,_Factory_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    player1.ships = _generateShips(shipInfo);
    player2.ships = _generateShips(shipInfo);
}

function _setupDOM(player1, player2) {
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player1.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player2.boardClass);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player1.player.getName(), player1.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player2.player.getName(), player2.boardClass);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player1.boardClass, "", "bold"); // clears any previous board status
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player2.boardClass, "", "bold");

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.focusBoard)(player1.boardClass);
}

function setupGame() {

    user = Object.assign({}, _Constants__WEBPACK_IMPORTED_MODULE_3__.userConstants);
    computer = Object.assign({}, _Constants__WEBPACK_IMPORTED_MODULE_3__.computerConstants);
    
    _setupGameObjects(user, computer, _Constants__WEBPACK_IMPORTED_MODULE_3__.shipTemplate);
    _setupDOM(user, computer);
    

}

/***/ }),

/***/ "./src/Modules/Control/shipPlacement_controller.js":
/*!*********************************************************!*\
  !*** ./src/Modules/Control/shipPlacement_controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShipsManual": () => (/* binding */ placeShipsManual),
/* harmony export */   "initiateShipPlacement": () => (/* binding */ initiateShipPlacement)
/* harmony export */ });
/* harmony import */ var _setup_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/renderDOM.js */ "./src/Modules/DOM/renderDOM.js");
/* harmony import */ var _Utilities_helper_func_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/helper_func.js */ "./src/Modules/Utilities/helper_func.js");
/* harmony import */ var _UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/shipPlacement_UI.js */ "./src/Modules/UI/shipPlacement_UI.js");





function _placeShipsRandom(player) {
    player.ships.forEach((ship) => {
    
      let gen_vert = (0,_Utilities_helper_func_js__WEBPACK_IMPORTED_MODULE_2__.generateRandBool)();
      let validLocations = player.board.getValidShipPlacements(ship, player.board, gen_vert);
      let [gen_x, gen_y] = (0,_Utilities_helper_func_js__WEBPACK_IMPORTED_MODULE_2__.getRandomItemFromArray)(validLocations);

      player.board.placeShip(ship, gen_x, gen_y, gen_vert);
    });
}

function placeShipsManual(player) {
    let currentShip = player.ships[player.shipIndex];
    let currentBoard = player.board;
    let currentVertical = player.shipVertical;

    let validLocations = player.board.getValidShipPlacements(currentShip, currentBoard, currentVertical);

    (0,_UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__.addRotateShipEL)();
    (0,_UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__.addHoverShipPlaceEL)(player, validLocations); 
    (0,_UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__.addClickShipPlaceEL)(player, validLocations);

    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(
        player.boardClass, 
        `Place ${currentShip.getName()}`, 
        "bold"
    );
    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(
        player.boardClass,
        `(Press R to rotate ship)`,
        "regular",
        false
    );
}

function initiateShipPlacement() {
    
    _setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical = true;
    _setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex = 0;

    _placeShipsRandom(_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.computer);
    placeShipsManual(_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
}

/***/ }),

/***/ "./src/Modules/DOM/dom_helpers.js":
/*!****************************************!*\
  !*** ./src/Modules/DOM/dom_helpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSquareElements": () => (/* binding */ getSquareElements),
/* harmony export */   "getXYfromElement": () => (/* binding */ getXYfromElement),
/* harmony export */   "toggleShip": () => (/* binding */ toggleShip),
/* harmony export */   "getAllSquares": () => (/* binding */ getAllSquares),
/* harmony export */   "removeAllChildren": () => (/* binding */ removeAllChildren)
/* harmony export */ });
function getSquareElements(arrayLocations, player) {
    return arrayLocations.map(loc => document.querySelector(`#${player.boardClass}${loc[0]}${loc[1]}`));
}

function getXYfromElement(element) {
    return [Number(element.id.slice(-2, -1)), Number(element.id.slice(-1))];
}

function toggleShip(arrayElements, event) {
    arrayElements.forEach((el) => {
        if (event.type === 'mouseenter') el.classList.add('ship');
        else el.classList.remove('ship');
    });
}

function getAllSquares(boardClass) {
    return document.querySelectorAll(`.${boardClass} .square`);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}

/***/ }),

/***/ "./src/Modules/DOM/renderDOM.js":
/*!**************************************!*\
  !*** ./src/Modules/DOM/renderDOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderEndgameMsg": () => (/* binding */ renderEndgameMsg),
/* harmony export */   "focusBoard": () => (/* binding */ focusBoard),
/* harmony export */   "renderGrid": () => (/* binding */ renderGrid),
/* harmony export */   "renderBoardTitle": () => (/* binding */ renderBoardTitle),
/* harmony export */   "renderBoardStatus": () => (/* binding */ renderBoardStatus),
/* harmony export */   "updateShipsSunk": () => (/* binding */ updateShipsSunk),
/* harmony export */   "renderBoardXY": () => (/* binding */ renderBoardXY),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard)
/* harmony export */ });
/* harmony import */ var _Control_setup_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Control/setup_controller */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom_helpers */ "./src/Modules/DOM/dom_helpers.js");



function _renderState(board, x, y, locationID) {
  const state = board.getState(x, y);
  if (state !== "blank") {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add(state);
    square.textContent = state === "hit" ? "X" : "O";
  }
}

function _renderShips(board, x, y, locationID) {
  const square = document.querySelector(`#${locationID}`);
  if (board.getShip(x, y) !== null) square.classList.add("ship");
  else square.classList.remove("ship");
}

function renderEndgameMsg(endMsg) {
  document.querySelector('#endGameStatus').textContent = endMsg;
  document.querySelector("#endGameContainer").classList.remove('hidden');
}

function focusBoard(boardSide) {
  document.querySelectorAll('.leftBoard, .rightBoard').forEach(el => el.classList.remove('boardHighlight'));
  document.querySelector(`.${boardSide}`).classList.add('boardHighlight');
}

function renderGrid(boardSide) {
  const board = document.querySelector(`.${boardSide} > .board`);
  (0,_dom_helpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(board);
  
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.id = boardSide + j + i;
      board.appendChild(square);
    }
  }
}

function renderBoardTitle(title, boardSide) {
  const boardTitle = document.querySelector(`.${boardSide} > .boardTitle`);
  boardTitle.textContent = title;
}

function renderBoardStatus(
  boardSide,
  status,
  style,
  clearStatus = true
) {
  const boardStatusContainer = document.querySelector(
    `.${boardSide} > .boardStatus`
  );

  if (clearStatus === true) (0,_dom_helpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(boardStatusContainer);

  const boardStatusDIV = document.createElement("div");
  boardStatusDIV.classList.add(style);
  boardStatusDIV.textContent = status;

  boardStatusContainer.appendChild(boardStatusDIV);
}

function updateShipsSunk() {
  renderBoardStatus(
    _Control_setup_controller__WEBPACK_IMPORTED_MODULE_0__.computer.boardClass,
    `${_Control_setup_controller__WEBPACK_IMPORTED_MODULE_0__.computer.board.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  renderBoardStatus(
    _Control_setup_controller__WEBPACK_IMPORTED_MODULE_0__.user.boardClass,
    `${_Control_setup_controller__WEBPACK_IMPORTED_MODULE_0__.user.board.getQtySunk()}/5 ships sunk`,
    "bold"
  );
}

function renderBoardXY(board, x, y, boardSide, hideShips) {
  const locationID = boardSide + x + y;
  if (hideShips === false) _renderShips(board, x, y, locationID);
  _renderState(board, x, y, locationID);
}

function renderBoard(board, boardSide, hideShips) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      renderBoardXY(board, j, i, boardSide, hideShips);
    }
  }
}








/***/ }),

/***/ "./src/Modules/Factory/Gameboard.js":
/*!******************************************!*\
  !*** ./src/Modules/Factory/Gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
function Gameboard() {
  const _size = 10;
  const _board = [...Array(_size)].map(() => Array(_size));
  const _ships = [];

  for (let i = 0; i < _size; i += 1) {
    for (let j = 0; j < _size; j += 1) {
      _board[i][j] = {
        ship: null, 
        state: 'blank',
      };
    }
  }

  function _coordIsWithinBoard(x, y) {
    return (x >= 0 && x < _size) && (y >= 0 && y < _size);
  } 

  function getState(x, y) {
    return _board[x][y].state;
  }

  function getShip(x, y) {
    return _board[x][y].ship;
  }

  function getAvailableTargets() {
      let targets = [];
      for (let i = 0; i < _size; i += 1) {
        for (let j = 0; j < _size; j += 1) {
          if (getState(i, j) === 'blank') targets.push([i, j]);
        }
      }
      return targets;
  }

  function getQtySunk() {
    return _ships.reduce((prev, curr) => prev + (curr.isSunk() ? 1 : 0) , 0);
  }

  function allSunk() {
    if (_ships.length === 0) return false;

    return _ships.every((ship) => ship.isSunk());
  }

  function getArrayCoords (shipLength, x, y, isVertical) {
    const arrayCoords = [];
    for (let i = 0; i < shipLength; i += 1) {
      const newX = x + (isVertical === false ? i : 0);
      const newY = y + (isVertical === true ? i : 0);
      arrayCoords.push([newX, newY]);
    }
    return arrayCoords; 
  }

  function isValidPlacement(shipLength, x, y, isVertical) {
    const placementCoords = getArrayCoords(shipLength, x, y, isVertical);

    return placementCoords.every((xyCoords) => _coordIsWithinBoard(...xyCoords)
            && getShip(xyCoords[0], xyCoords[1]) === null);
  }

  function getValidShipPlacements(ship, board, isVertical) {
    let validLocations = [];

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (isValidPlacement(ship.getLength(), j, i, isVertical)) {
          validLocations.push([j, i]);
        }
      }
    }

    return validLocations;
  }

  function placeShip(ship, x, y, isVertical) {
    if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
      getArrayCoords(ship.getLength(), x, y, isVertical).forEach((xyCoords) => 
        _board[xyCoords[0]][xyCoords[1]].ship = ship);
      _ships.push(ship);
  
      return true;
    }
    return false;
  };

  function receiveAttack(x, y) {
    if (!_coordIsWithinBoard(x, y)) return false;
    if (_board[x][y].state !== 'blank') return false;

    if (getShip(x, y) !== null) {
      getShip(x, y).hit([x, y]);
      _board[x][y].state = 'hit';
    } else {
      _board[x][y].state = 'miss';
    }
 
    return true;
  };

  return {
    getState, getShip, getAvailableTargets, getQtySunk, allSunk, getArrayCoords, isValidPlacement, getValidShipPlacements, placeShip, receiveAttack
  };
}


/***/ }),

/***/ "./src/Modules/Factory/Player.js":
/*!***************************************!*\
  !*** ./src/Modules/Factory/Player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player(name) {
  let _name = name;

  function getName() {
    return name;
  }

  function setName(name) {
    _name = name;
  }

  function sendAttack(x, y, board) {
    return board.receiveAttack(x, y);
  }

  function sendRandomAttack(board) {
    const targets = board.getAvailableTargets();
    const targetLocation = targets[Math.floor(Math.random() * targets.length)];

    return [
      board.receiveAttack(targetLocation[0], targetLocation[1]),
      targetLocation,
    ];
  }

  return { getName, setName, sendAttack, sendRandomAttack };
}


/***/ }),

/***/ "./src/Modules/Factory/Ship.js":
/*!*************************************!*\
  !*** ./src/Modules/Factory/Ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name) {
  if (length <= 0 || length > 10)
    throw new Error("Length must be greater than 0 and less than 11");

  const _hitLocation = [];

  function hit(location) {
    _hitLocation.push(location);
  }

  function getName() { 
    return name;
  }
  
  function setName(newName) {
    name = newName;
  }

  function getLength() {
    return length;
  }

  function setLength(num) {
    length = num;
  }

  function isSunk() {
    return _hitLocation.length === length;
  }

  return { hit, getName, setName, getLength, setLength, isSunk };
}


/***/ }),

/***/ "./src/Modules/UI/gamePlay_UI.js":
/*!***************************************!*\
  !*** ./src/Modules/UI/gamePlay_UI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllAttackEL": () => (/* binding */ removeAllAttackEL),
/* harmony export */   "addHoverCrosshairEL": () => (/* binding */ addHoverCrosshairEL),
/* harmony export */   "addClickAttackEL": () => (/* binding */ addClickAttackEL),
/* harmony export */   "addClickRestartEL": () => (/* binding */ addClickRestartEL)
/* harmony export */ });
/* harmony import */ var _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Control/setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/dom_helpers.js */ "./src/Modules/DOM/dom_helpers.js");
/* harmony import */ var _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/Crosshairs_Red.svg */ "./src/images/Crosshairs_Red.svg");
/* harmony import */ var _Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Control/gamePlay_controller.js */ "./src/Modules/Control/gamePlay_controller.js");
/* harmony import */ var _Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Control/shipPlacement_controller.js */ "./src/Modules/Control/shipPlacement_controller.js");






function _loadCrosshair(event) {
    const targetIcon = new Image();
    targetIcon.src = _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_2__;
    targetIcon.classList.add("crosshair");
    event.target.appendChild(targetIcon);
}

function _removeCrosshair(event) {
    event.target.removeChild(event.target.firstChild);
}

function removeAllAttackEL(square) {
    square.removeEventListener('mouseenter', _loadCrosshair);
    square.removeEventListener('mouseleave', _removeCrosshair);
    square.removeEventListener('click', _handleAttack);
}

function _handleAttack(event) {
    if (_Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_3__.blockUserInput) return;

    let square = event.target.closest('.square');
    removeAllAttackEL(square);
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(square);

    (0,_Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_3__.userTurn)(...(0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getXYfromElement)(square));
}

function _restartGame(event) {
    document.querySelector('#endGameContainer').classList.add('hidden');
    (0,_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.setupGame)();
    (0,_Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_4__.initiateShipPlacement)();
}

function addHoverCrosshairEL() {
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllSquares)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.computer.boardClass).forEach((sq) => {
        sq.addEventListener('mouseenter', _loadCrosshair);
        sq.addEventListener('mouseleave', _removeCrosshair);
    })
}

function addClickAttackEL() {
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllSquares)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.computer.boardClass).forEach((sq) => {
        sq.addEventListener('click', _handleAttack);
    })
}

function addClickRestartEL() {
    document.querySelector('#restartGame').addEventListener('click', _restartGame);
}

/***/ }),

/***/ "./src/Modules/UI/shipPlacement_UI.js":
/*!********************************************!*\
  !*** ./src/Modules/UI/shipPlacement_UI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRotateShipEL": () => (/* binding */ addRotateShipEL),
/* harmony export */   "addHoverShipPlaceEL": () => (/* binding */ addHoverShipPlaceEL),
/* harmony export */   "addClickShipPlaceEL": () => (/* binding */ addClickShipPlaceEL)
/* harmony export */ });
/* harmony import */ var _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Control/setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/dom_helpers.js */ "./src/Modules/DOM/dom_helpers.js");
/* harmony import */ var _Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Control/shipPlacement_controller.js */ "./src/Modules/Control/shipPlacement_controller.js");
/* harmony import */ var _DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM/renderDOM.js */ "./src/Modules/DOM/renderDOM.js");
/* harmony import */ var _Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Control/gamePlay_controller.js */ "./src/Modules/Control/gamePlay_controller.js");






let currElementsEL;

function _removeAllShipPlacementEL() {
    document.removeEventListener("keydown", _handleRotate);

    currElementsEL.forEach((el) => {
        el.removeEventListener('mouseenter', _handleHover);
        el.removeEventListener('mouseleave', _handleHover);
        el.removeEventListener('click', _handleClick);
    });
}

function _handleRotate(event) {
    if (event.code === "KeyR") {
      _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical = !_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;
      _removeAllShipPlacementEL();
      (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.board, _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.boardClass, false);
      (0,_Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_2__.placeShipsManual)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
    }
}

function _handleHover(event) {
    let [x, y] = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getXYfromElement)(event.target);
    let currentShip = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex];
    let currentBoard = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.board;
    let currentVertical = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;

    let arrayCoords = currentBoard.getArrayCoords(currentShip.getLength(), x, y, currentVertical);
    let arrayCoordElements = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getSquareElements)(arrayCoords, _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.toggleShip)(arrayCoordElements, event);
}

function _handleClick(event) {
    let [x, y] = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getXYfromElement)(event.target);
    let currentShip = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex];
    let currentBoard = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.board;
    let currentVertical = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;

    currentBoard.placeShip(currentShip, x, y, currentVertical);
    _removeAllShipPlacementEL();
    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(currentBoard, _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.boardClass, false);
    _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex += 1;

    if (_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex] !== undefined) (0,_Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_2__.placeShipsManual)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
    else (0,_Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_4__.startGame)();
}

function addRotateShipEL() {
    document.addEventListener("keydown", _handleRotate);
}

function addHoverShipPlaceEL(player, validLocations) {
    let validLocElements = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getSquareElements)(validLocations, player);
    currElementsEL = validLocElements;

    validLocElements.forEach((el) => {
      el.addEventListener('mouseenter', _handleHover);
      el.addEventListener('mouseleave', _handleHover);
    });
}

function addClickShipPlaceEL(player, validLocations) {
    let validLocElements = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getSquareElements)(validLocations, player);

    validLocElements.forEach((el) => {
        el.addEventListener('click', _handleClick);
    });
}


/***/ }),

/***/ "./src/Modules/Utilities/helper_func.js":
/*!**********************************************!*\
  !*** ./src/Modules/Utilities/helper_func.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandInt": () => (/* binding */ generateRandInt),
/* harmony export */   "generateRandBool": () => (/* binding */ generateRandBool),
/* harmony export */   "getRandomItemFromArray": () => (/* binding */ getRandomItemFromArray)
/* harmony export */ });
function generateRandInt(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

function generateRandBool() {
    return [true, false][generateRandInt(2)];
}

function getRandomItemFromArray(array) {
    return array[generateRandInt(array.length)];
}



/***/ }),

/***/ "./src/images/Crosshairs_Red.svg":
/*!***************************************!*\
  !*** ./src/images/Crosshairs_Red.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "664c6356d65867ba071e.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Modules_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Control/setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _Modules_Control_shipPlacement_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/Control/shipPlacement_controller */ "./src/Modules/Control/shipPlacement_controller.js");




(0,_Modules_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_1__.setupGame)();
(0,_Modules_Control_shipPlacement_controller__WEBPACK_IMPORTED_MODULE_2__.initiateShipPlacement)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSx3RUFBYzs7QUFFbEIsUUFBUSxvRUFBVSxDQUFDLHdFQUFjLGlCQUFpQixzRkFBZ0IsQ0FBQyw4REFBSTtBQUN2RSxTQUFTLDBFQUFTO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLDJCQUEyQixzRUFBaUI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1AsMkJBQTJCLHNFQUFpQjs7QUFFNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUM2QztBQUNpQjs7QUFFbkYsK0VBQVM7QUFDVCxnR0FBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0NvbnRyb2wvZ2FtZVBsYXlfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvQ29udHJvbC9zZXR1cF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db250cm9sL3NoaXBQbGFjZW1lbnRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRE9NL2RvbV9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9ET00vcmVuZGVyRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRmFjdG9yeS9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvVUkvZ2FtZVBsYXlfVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL1VJL3NoaXBQbGFjZW1lbnRfVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL1V0aWxpdGllcy9oZWxwZXJfZnVuYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3luY29wYXRlOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDp3Z2h0QDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyPmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIFxcbn1cXG5cXG4ubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmJvYXJkVGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5ib2FyZFN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnJlZ3VsYXIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYm9hcmRIaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgMzglKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbiNnYW1lQm9hcmRSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU3F1YXJlICovXFxuXFxuLnNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogS2FuaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zcXVhcmUgPiBpbWcge1xcbiAgICBjb2xvcjpibHVldmlvbGV0O1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDg0LCAxNDUpO1xcbn1cXG4uaGl0IHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDc3LCA3Nyk7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufSBcXG4ubWlzcyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VuZEdhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuI2VuZEdhbWVTdGF0dXMge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG4jcmVzdGFydEdhbWUge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4jcmVzdGFydEdhbWU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuICAgICNnYW1lQm9hcmRSb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TeW5jb3BhdGU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0OndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXI+aDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgXFxufVxcblxcbi5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDFweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLmJvYXJkU3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucmVndWxhciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ib2FyZEhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAzOCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI2dhbWVCb2FyZFJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBTcXVhcmUgKi9cXG5cXG4uc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBLYW5pdDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNxdWFyZSA+IGltZyB7XFxuICAgIGNvbG9yOmJsdWV2aW9sZXQ7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgODQsIDE0NSk7XFxufVxcbi5oaXQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgNzcsIDc3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59IFxcbi5taXNzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZW5kR2FtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jZW5kR2FtZVN0YXR1cyB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcbiNyZXN0YXJ0R2FtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDM4JSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbiNyZXN0YXJ0R2FtZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgI2dhbWVCb2FyZFJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBzaGlwVGVtcGxhdGUgPSBbXG4gICAge2xlbmd0aDogNSwgbmFtZTogJ0NhcnJpZXInfSxcbiAgICB7bGVuZ3RoOiA0LCBuYW1lOiAnQmF0dGxlc2hpcCd9LFxuICAgIHtsZW5ndGg6IDMsIG5hbWU6ICdEZXN0cm95ZXInfSxcbiAgICB7bGVuZ3RoOiAzLCBuYW1lOiAnU3VibWFyaW5lJ30sXG4gICAge2xlbmd0aDogMiwgbmFtZTogJ1BhdHJvbCBCb2F0J31cbiAgXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJDb25zdGFudHMgPSB7XG4gICAgbmFtZTogXCJZb3VcIixcbiAgICBib2FyZENsYXNzOiBcImxlZnRCb2FyZFwiLFxufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZXJDb25zdGFudHMgPSB7XG4gICAgbmFtZTogXCJPcHBvbmVudFwiLFxuICAgIGJvYXJkQ2xhc3M6IFwicmlnaHRCb2FyZFwiLFxufSIsImltcG9ydCB7IGdldEFsbFNxdWFyZXMgfSBmcm9tIFwiLi4vRE9NL2RvbV9oZWxwZXJzXCI7XG5pbXBvcnQgeyBmb2N1c0JvYXJkLCByZW5kZXJCb2FyZCwgcmVuZGVyQm9hcmRTdGF0dXMsIHJlbmRlckJvYXJkWFksIHJlbmRlckVuZGdhbWVNc2csIHVwZGF0ZVNoaXBzU3VuayB9IGZyb20gXCIuLi9ET00vcmVuZGVyRE9NXCI7XG5pbXBvcnQgeyBhZGRDbGlja0F0dGFja0VMLCBhZGRDbGlja1Jlc3RhcnRFTCwgYWRkSG92ZXJDcm9zc2hhaXJFTCwgcmVtb3ZlQWxsQXR0YWNrRUwgfSBmcm9tIFwiLi4vVUkvZ2FtZVBsYXlfVUlcIjtcbmltcG9ydCB7IGNvbXB1dGVyLCB1c2VyIH0gZnJvbSBcIi4vc2V0dXBfY29udHJvbGxlclwiO1xuXG5leHBvcnQgbGV0IGJsb2NrVXNlcklucHV0O1xuXG5mdW5jdGlvbiBfZW5kR2FtZSh3aW5uZXIpIHtcbiAgICBsZXQgZW5kTXNnID0gKHdpbm5lciA9PT0gdXNlcikgPyAgXCJZb3UgV2luISBHb29kIGpvYiBzaW5raW5nIGFsbCB5b3VyIG9wcG9uZW50cyBzaGlwcyDwn5iAXCIgOiBcIkFsbCB5b3VyIHNoaXBzIHdlcmUgc3Vuay4gWW91IGxvc3Qg8J+ZgVwiO1xuXG4gICAgZ2V0QWxsU3F1YXJlcyhjb21wdXRlci5ib2FyZENsYXNzKS5mb3JFYWNoKChzcSkgPT4gcmVtb3ZlQWxsQXR0YWNrRUwoc3EpKTtcbiAgICByZW5kZXJCb2FyZCh1c2VyLmJvYXJkLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICByZW5kZXJCb2FyZChjb21wdXRlci5ib2FyZCwgY29tcHV0ZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIHVwZGF0ZVNoaXBzU3VuaygpO1xuICAgIHJlbmRlckVuZGdhbWVNc2coZW5kTXNnKTtcblxuICAgIGFkZENsaWNrUmVzdGFydEVMKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyVHVybih4LCB5KSB7XG4gICAgYmxvY2tVc2VySW5wdXQgPSB0cnVlO1xuICAgIFxuICAgIHVzZXIucGxheWVyLnNlbmRBdHRhY2soeCwgeSwgY29tcHV0ZXIuYm9hcmQpO1xuICAgIGlmIChjb21wdXRlci5ib2FyZC5hbGxTdW5rKCkpIHJldHVybiBfZW5kR2FtZSh1c2VyKTtcblxuICAgIHJlbmRlckJvYXJkWFkoY29tcHV0ZXIuYm9hcmQsIHgsIHksIGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICB1cGRhdGVTaGlwc1N1bmsoKTtcbiAgICBmb2N1c0JvYXJkKHVzZXIuYm9hcmRDbGFzcyk7XG4gICAgcmVuZGVyQm9hcmRTdGF0dXModXNlci5ib2FyZENsYXNzLCBgVGhpbmtpbmcuLi5gLCBcImJvbGRcIik7XG4gICAgXG4gICAgc2V0VGltZW91dChjb21wVHVybiwgMCk7IC8vIGNoYW5nZSB0byA1MDAgLSAyMDAwbXMgbGF0ZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBUdXJuKCkge1xuICAgIGNvbnN0IFtfLCB0YXJnZXRdID0gY29tcHV0ZXIucGxheWVyLnNlbmRSYW5kb21BdHRhY2sodXNlci5ib2FyZCk7XG4gICAgaWYgKHVzZXIuYm9hcmQuYWxsU3VuaygpKSByZXR1cm4gX2VuZEdhbWUoY29tcHV0ZXIpO1xuXG4gICAgcmVuZGVyQm9hcmRYWSh1c2VyLmJvYXJkLCB0YXJnZXRbMF0sIHRhcmdldFsxXSwgdXNlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gICAgdXBkYXRlU2hpcHNTdW5rKCk7XG4gICAgZm9jdXNCb2FyZChjb21wdXRlci5ib2FyZENsYXNzKTtcbiAgICByZW5kZXJCb2FyZFN0YXR1cyhjb21wdXRlci5ib2FyZENsYXNzLCBgUGxhY2UgeW91ciBhdHRhY2shYCwgJ3JlZ3VsYXInLCBmYWxzZSk7XG5cbiAgICBibG9ja1VzZXJJbnB1dCA9IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGJsb2NrVXNlcklucHV0ID0gZmFsc2U7XG4gICAgZm9jdXNCb2FyZChjb21wdXRlci5ib2FyZENsYXNzKTtcbiAgICBcbiAgICBhZGRIb3ZlckNyb3NzaGFpckVMKCk7XG4gICAgYWRkQ2xpY2tBdHRhY2tFTCgpO1xuXG4gICAgcmVuZGVyQm9hcmQodXNlci5ib2FyZCwgdXNlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gICAgcmVuZGVyQm9hcmQoY29tcHV0ZXIuYm9hcmQsIGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcblxuICAgIHVwZGF0ZVNoaXBzU3VuaygpO1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBQbGFjZSB5b3VyIGF0dGFjayFgLCAncmVndWxhcicsIGZhbHNlKTtcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9GYWN0b3J5L0dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vRmFjdG9yeS9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9GYWN0b3J5L1NoaXBcIjtcbmltcG9ydCB7IHNoaXBUZW1wbGF0ZSwgdXNlckNvbnN0YW50cywgY29tcHV0ZXJDb25zdGFudHMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgcmVuZGVyR3JpZCwgcmVuZGVyQm9hcmRUaXRsZSwgcmVuZGVyQm9hcmRTdGF0dXMsIGZvY3VzQm9hcmQgfSBmcm9tICcuLi9ET00vcmVuZGVyRE9NJztcblxuZXhwb3J0IGxldCB1c2VyLCBjb21wdXRlcjtcblxuZnVuY3Rpb24gX2dlbmVyYXRlU2hpcHMoc2hpcEluZm8pIHtcbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICAgIHNoaXBJbmZvLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBzaGlwQXJyYXkucHVzaChTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLm5hbWUpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwQXJyYXk7XG59XG5cbmZ1bmN0aW9uIF9zZXR1cEdhbWVPYmplY3RzKHBsYXllcjEsIHBsYXllcjIsIHNoaXBJbmZvKSB7XG4gICAgcGxheWVyMS5wbGF5ZXIgPSBQbGF5ZXIocGxheWVyMS5uYW1lKTtcbiAgICBwbGF5ZXIyLnBsYXllciA9IFBsYXllcihwbGF5ZXIyLm5hbWUpO1xuXG4gICAgcGxheWVyMS5ib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIHBsYXllcjIuYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICAgIHBsYXllcjEuc2hpcHMgPSBfZ2VuZXJhdGVTaGlwcyhzaGlwSW5mbyk7XG4gICAgcGxheWVyMi5zaGlwcyA9IF9nZW5lcmF0ZVNoaXBzKHNoaXBJbmZvKTtcbn1cblxuZnVuY3Rpb24gX3NldHVwRE9NKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICByZW5kZXJHcmlkKHBsYXllcjEuYm9hcmRDbGFzcyk7XG4gICAgcmVuZGVyR3JpZChwbGF5ZXIyLmJvYXJkQ2xhc3MpO1xuXG4gICAgcmVuZGVyQm9hcmRUaXRsZShwbGF5ZXIxLnBsYXllci5nZXROYW1lKCksIHBsYXllcjEuYm9hcmRDbGFzcyk7XG4gICAgcmVuZGVyQm9hcmRUaXRsZShwbGF5ZXIyLnBsYXllci5nZXROYW1lKCksIHBsYXllcjIuYm9hcmRDbGFzcyk7XG5cbiAgICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIxLmJvYXJkQ2xhc3MsIFwiXCIsIFwiYm9sZFwiKTsgLy8gY2xlYXJzIGFueSBwcmV2aW91cyBib2FyZCBzdGF0dXNcbiAgICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIyLmJvYXJkQ2xhc3MsIFwiXCIsIFwiYm9sZFwiKTtcblxuICAgIGZvY3VzQm9hcmQocGxheWVyMS5ib2FyZENsYXNzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcblxuICAgIHVzZXIgPSBPYmplY3QuYXNzaWduKHt9LCB1c2VyQ29uc3RhbnRzKTtcbiAgICBjb21wdXRlciA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXB1dGVyQ29uc3RhbnRzKTtcbiAgICBcbiAgICBfc2V0dXBHYW1lT2JqZWN0cyh1c2VyLCBjb21wdXRlciwgc2hpcFRlbXBsYXRlKTtcbiAgICBfc2V0dXBET00odXNlciwgY29tcHV0ZXIpO1xuICAgIFxuXG59IiwiaW1wb3J0IHsgdXNlciwgY29tcHV0ZXIgfSBmcm9tICcuL3NldHVwX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmRTdGF0dXMgfSBmcm9tICcuLi9ET00vcmVuZGVyRE9NLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlUmFuZEJvb2wsIGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkgfSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyX2Z1bmMuanMnO1xuaW1wb3J0IHsgYWRkUm90YXRlU2hpcEVMLCBhZGRIb3ZlclNoaXBQbGFjZUVMLCBhZGRDbGlja1NoaXBQbGFjZUVMIH0gZnJvbSAnLi4vVUkvc2hpcFBsYWNlbWVudF9VSS5qcyc7XG5cbmZ1bmN0aW9uIF9wbGFjZVNoaXBzUmFuZG9tKHBsYXllcikge1xuICAgIHBsYXllci5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgXG4gICAgICBsZXQgZ2VuX3ZlcnQgPSBnZW5lcmF0ZVJhbmRCb29sKCk7XG4gICAgICBsZXQgdmFsaWRMb2NhdGlvbnMgPSBwbGF5ZXIuYm9hcmQuZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhzaGlwLCBwbGF5ZXIuYm9hcmQsIGdlbl92ZXJ0KTtcbiAgICAgIGxldCBbZ2VuX3gsIGdlbl95XSA9IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkodmFsaWRMb2NhdGlvbnMpO1xuXG4gICAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGdlbl94LCBnZW5feSwgZ2VuX3ZlcnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwc01hbnVhbChwbGF5ZXIpIHtcbiAgICBsZXQgY3VycmVudFNoaXAgPSBwbGF5ZXIuc2hpcHNbcGxheWVyLnNoaXBJbmRleF07XG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IHBsYXllci5ib2FyZDtcbiAgICBsZXQgY3VycmVudFZlcnRpY2FsID0gcGxheWVyLnNoaXBWZXJ0aWNhbDtcblxuICAgIGxldCB2YWxpZExvY2F0aW9ucyA9IHBsYXllci5ib2FyZC5nZXRWYWxpZFNoaXBQbGFjZW1lbnRzKGN1cnJlbnRTaGlwLCBjdXJyZW50Qm9hcmQsIGN1cnJlbnRWZXJ0aWNhbCk7XG5cbiAgICBhZGRSb3RhdGVTaGlwRUwoKTtcbiAgICBhZGRIb3ZlclNoaXBQbGFjZUVMKHBsYXllciwgdmFsaWRMb2NhdGlvbnMpOyBcbiAgICBhZGRDbGlja1NoaXBQbGFjZUVMKHBsYXllciwgdmFsaWRMb2NhdGlvbnMpO1xuXG4gICAgcmVuZGVyQm9hcmRTdGF0dXMoXG4gICAgICAgIHBsYXllci5ib2FyZENsYXNzLCBcbiAgICAgICAgYFBsYWNlICR7Y3VycmVudFNoaXAuZ2V0TmFtZSgpfWAsIFxuICAgICAgICBcImJvbGRcIlxuICAgICk7XG4gICAgcmVuZGVyQm9hcmRTdGF0dXMoXG4gICAgICAgIHBsYXllci5ib2FyZENsYXNzLFxuICAgICAgICBgKFByZXNzIFIgdG8gcm90YXRlIHNoaXApYCxcbiAgICAgICAgXCJyZWd1bGFyXCIsXG4gICAgICAgIGZhbHNlXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlU2hpcFBsYWNlbWVudCgpIHtcbiAgICBcbiAgICB1c2VyLnNoaXBWZXJ0aWNhbCA9IHRydWU7XG4gICAgdXNlci5zaGlwSW5kZXggPSAwO1xuXG4gICAgX3BsYWNlU2hpcHNSYW5kb20oY29tcHV0ZXIpO1xuICAgIHBsYWNlU2hpcHNNYW51YWwodXNlcik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNxdWFyZUVsZW1lbnRzKGFycmF5TG9jYXRpb25zLCBwbGF5ZXIpIHtcbiAgICByZXR1cm4gYXJyYXlMb2NhdGlvbnMubWFwKGxvYyA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXIuYm9hcmRDbGFzc30ke2xvY1swXX0ke2xvY1sxXX1gKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYWWZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gW051bWJlcihlbGVtZW50LmlkLnNsaWNlKC0yLCAtMSkpLCBOdW1iZXIoZWxlbWVudC5pZC5zbGljZSgtMSkpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNoaXAoYXJyYXlFbGVtZW50cywgZXZlbnQpIHtcbiAgICBhcnJheUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpIGVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgZWxzZSBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxTcXVhcmVzKGJvYXJkQ2xhc3MpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Ym9hcmRDbGFzc30gLnNxdWFyZWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb21wdXRlciwgdXNlciB9IGZyb20gXCIuLi9Db250cm9sL3NldHVwX2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4vZG9tX2hlbHBlcnNcIjtcblxuZnVuY3Rpb24gX3JlbmRlclN0YXRlKGJvYXJkLCB4LCB5LCBsb2NhdGlvbklEKSB7XG4gIGNvbnN0IHN0YXRlID0gYm9hcmQuZ2V0U3RhdGUoeCwgeSk7XG4gIGlmIChzdGF0ZSAhPT0gXCJibGFua1wiKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bG9jYXRpb25JRH1gKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChzdGF0ZSk7XG4gICAgc3F1YXJlLnRleHRDb250ZW50ID0gc3RhdGUgPT09IFwiaGl0XCIgPyBcIlhcIiA6IFwiT1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJTaGlwcyhib2FyZCwgeCwgeSwgbG9jYXRpb25JRCkge1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtsb2NhdGlvbklEfWApO1xuICBpZiAoYm9hcmQuZ2V0U2hpcCh4LCB5KSAhPT0gbnVsbCkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICBlbHNlIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVuZGdhbWVNc2coZW5kTXNnKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRHYW1lU3RhdHVzJykudGV4dENvbnRlbnQgPSBlbmRNc2c7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW5kR2FtZUNvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzQm9hcmQoYm9hcmRTaWRlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkJykuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZEhpZ2hsaWdodCcpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfWApLmNsYXNzTGlzdC5hZGQoJ2JvYXJkSGlnaGxpZ2h0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHcmlkKGJvYXJkU2lkZSkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRgKTtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4oYm9hcmQpO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICBzcXVhcmUuaWQgPSBib2FyZFNpZGUgKyBqICsgaTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZFRpdGxlKHRpdGxlLCBib2FyZFNpZGUpIHtcbiAgY29uc3QgYm9hcmRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRUaXRsZWApO1xuICBib2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZFN0YXR1cyhcbiAgYm9hcmRTaWRlLFxuICBzdGF0dXMsXG4gIHN0eWxlLFxuICBjbGVhclN0YXR1cyA9IHRydWVcbikge1xuICBjb25zdCBib2FyZFN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRTdGF0dXNgXG4gICk7XG5cbiAgaWYgKGNsZWFyU3RhdHVzID09PSB0cnVlKSByZW1vdmVBbGxDaGlsZHJlbihib2FyZFN0YXR1c0NvbnRhaW5lcik7XG5cbiAgY29uc3QgYm9hcmRTdGF0dXNESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZFN0YXR1c0RJVi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcbiAgYm9hcmRTdGF0dXNESVYudGV4dENvbnRlbnQgPSBzdGF0dXM7XG5cbiAgYm9hcmRTdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRTdGF0dXNESVYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2hpcHNTdW5rKCkge1xuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBjb21wdXRlci5ib2FyZENsYXNzLFxuICAgIGAke2NvbXB1dGVyLmJvYXJkLmdldFF0eVN1bmsoKX0vNSBzaGlwcyBzdW5rYCxcbiAgICBcImJvbGRcIlxuICApO1xuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICB1c2VyLmJvYXJkQ2xhc3MsXG4gICAgYCR7dXNlci5ib2FyZC5nZXRRdHlTdW5rKCl9LzUgc2hpcHMgc3Vua2AsXG4gICAgXCJib2xkXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkWFkoYm9hcmQsIHgsIHksIGJvYXJkU2lkZSwgaGlkZVNoaXBzKSB7XG4gIGNvbnN0IGxvY2F0aW9uSUQgPSBib2FyZFNpZGUgKyB4ICsgeTtcbiAgaWYgKGhpZGVTaGlwcyA9PT0gZmFsc2UpIF9yZW5kZXJTaGlwcyhib2FyZCwgeCwgeSwgbG9jYXRpb25JRCk7XG4gIF9yZW5kZXJTdGF0ZShib2FyZCwgeCwgeSwgbG9jYXRpb25JRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChib2FyZCwgYm9hcmRTaWRlLCBoaWRlU2hpcHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICByZW5kZXJCb2FyZFhZKGJvYXJkLCBqLCBpLCBib2FyZFNpZGUsIGhpZGVTaGlwcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IF9zaXplID0gMTA7XG4gIGNvbnN0IF9ib2FyZCA9IFsuLi5BcnJheShfc2l6ZSldLm1hcCgoKSA9PiBBcnJheShfc2l6ZSkpO1xuICBjb25zdCBfc2hpcHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IF9zaXplOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9zaXplOyBqICs9IDEpIHtcbiAgICAgIF9ib2FyZFtpXVtqXSA9IHtcbiAgICAgICAgc2hpcDogbnVsbCwgXG4gICAgICAgIHN0YXRlOiAnYmxhbmsnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY29vcmRJc1dpdGhpbkJvYXJkKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgX3NpemUpICYmICh5ID49IDAgJiYgeSA8IF9zaXplKTtcbiAgfSBcblxuICBmdW5jdGlvbiBnZXRTdGF0ZSh4LCB5KSB7XG4gICAgcmV0dXJuIF9ib2FyZFt4XVt5XS5zdGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNoaXAoeCwgeSkge1xuICAgIHJldHVybiBfYm9hcmRbeF1beV0uc2hpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF2YWlsYWJsZVRhcmdldHMoKSB7XG4gICAgICBsZXQgdGFyZ2V0cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3NpemU7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChnZXRTdGF0ZShpLCBqKSA9PT0gJ2JsYW5rJykgdGFyZ2V0cy5wdXNoKFtpLCBqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UXR5U3VuaygpIHtcbiAgICByZXR1cm4gX3NoaXBzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIChjdXJyLmlzU3VuaygpID8gMSA6IDApICwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgIGlmIChfc2hpcHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gX3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29vcmRzIChzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgY29uc3QgYXJyYXlDb29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3WCA9IHggKyAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UgPyBpIDogMCk7XG4gICAgICBjb25zdCBuZXdZID0geSArIChpc1ZlcnRpY2FsID09PSB0cnVlID8gaSA6IDApO1xuICAgICAgYXJyYXlDb29yZHMucHVzaChbbmV3WCwgbmV3WV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlDb29yZHM7IFxuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgY29uc3QgcGxhY2VtZW50Q29vcmRzID0gZ2V0QXJyYXlDb29yZHMoc2hpcExlbmd0aCwgeCwgeSwgaXNWZXJ0aWNhbCk7XG5cbiAgICByZXR1cm4gcGxhY2VtZW50Q29vcmRzLmV2ZXJ5KCh4eUNvb3JkcykgPT4gX2Nvb3JkSXNXaXRoaW5Cb2FyZCguLi54eUNvb3JkcylcbiAgICAgICAgICAgICYmIGdldFNoaXAoeHlDb29yZHNbMF0sIHh5Q29vcmRzWzFdKSA9PT0gbnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzKHNoaXAsIGJvYXJkLCBpc1ZlcnRpY2FsKSB7XG4gICAgbGV0IHZhbGlkTG9jYXRpb25zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAoaXNWYWxpZFBsYWNlbWVudChzaGlwLmdldExlbmd0aCgpLCBqLCBpLCBpc1ZlcnRpY2FsKSkge1xuICAgICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2goW2osIGldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZExvY2F0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgaWYgKGlzVmFsaWRQbGFjZW1lbnQoc2hpcC5nZXRMZW5ndGgoKSwgeCwgeSwgaXNWZXJ0aWNhbCkpIHtcbiAgICAgIGdldEFycmF5Q29vcmRzKHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpLmZvckVhY2goKHh5Q29vcmRzKSA9PiBcbiAgICAgICAgX2JvYXJkW3h5Q29vcmRzWzBdXVt4eUNvb3Jkc1sxXV0uc2hpcCA9IHNoaXApO1xuICAgICAgX3NoaXBzLnB1c2goc2hpcCk7XG4gIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAoIV9jb29yZElzV2l0aGluQm9hcmQoeCwgeSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoX2JvYXJkW3hdW3ldLnN0YXRlICE9PSAnYmxhbmsnKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZ2V0U2hpcCh4LCB5KSAhPT0gbnVsbCkge1xuICAgICAgZ2V0U2hpcCh4LCB5KS5oaXQoW3gsIHldKTtcbiAgICAgIF9ib2FyZFt4XVt5XS5zdGF0ZSA9ICdoaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfYm9hcmRbeF1beV0uc3RhdGUgPSAnbWlzcyc7XG4gICAgfVxuIFxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0U3RhdGUsIGdldFNoaXAsIGdldEF2YWlsYWJsZVRhcmdldHMsIGdldFF0eVN1bmssIGFsbFN1bmssIGdldEFycmF5Q29vcmRzLCBpc1ZhbGlkUGxhY2VtZW50LCBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2tcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGxldCBfbmFtZSA9IG5hbWU7XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE5hbWUobmFtZSkge1xuICAgIF9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRBdHRhY2soeCwgeSwgYm9hcmQpIHtcbiAgICByZXR1cm4gYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRSYW5kb21BdHRhY2soYm9hcmQpIHtcbiAgICBjb25zdCB0YXJnZXRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlVGFyZ2V0cygpO1xuICAgIGNvbnN0IHRhcmdldExvY2F0aW9uID0gdGFyZ2V0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRzLmxlbmd0aCldO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sodGFyZ2V0TG9jYXRpb25bMF0sIHRhcmdldExvY2F0aW9uWzFdKSxcbiAgICAgIHRhcmdldExvY2F0aW9uLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4geyBnZXROYW1lLCBzZXROYW1lLCBzZW5kQXR0YWNrLCBzZW5kUmFuZG9tQXR0YWNrIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICBpZiAobGVuZ3RoIDw9IDAgfHwgbGVuZ3RoID4gMTApXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhbiAxMVwiKTtcblxuICBjb25zdCBfaGl0TG9jYXRpb24gPSBbXTtcblxuICBmdW5jdGlvbiBoaXQobG9jYXRpb24pIHtcbiAgICBfaGl0TG9jYXRpb24ucHVzaChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROYW1lKCkgeyBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExlbmd0aChudW0pIHtcbiAgICBsZW5ndGggPSBudW07XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIF9oaXRMb2NhdGlvbi5sZW5ndGggPT09IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7IGhpdCwgZ2V0TmFtZSwgc2V0TmFtZSwgZ2V0TGVuZ3RoLCBzZXRMZW5ndGgsIGlzU3VuayB9O1xufVxuIiwiaW1wb3J0IHsgY29tcHV0ZXIsIHNldHVwR2FtZSB9IGZyb20gXCIuLi9Db250cm9sL3NldHVwX2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IGdldEFsbFNxdWFyZXMsIGdldFhZZnJvbUVsZW1lbnQsIHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4uL0RPTS9kb21faGVscGVycy5qc1wiO1xuaW1wb3J0IGNyb3NzaGFpciBmcm9tIFwiLi4vLi4vaW1hZ2VzL0Nyb3NzaGFpcnNfUmVkLnN2Z1wiO1xuaW1wb3J0IHsgdXNlclR1cm4sIGJsb2NrVXNlcklucHV0IH0gZnJvbSBcIi4uL0NvbnRyb2wvZ2FtZVBsYXlfY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgaW5pdGlhdGVTaGlwUGxhY2VtZW50IH0gZnJvbSBcIi4uL0NvbnRyb2wvc2hpcFBsYWNlbWVudF9jb250cm9sbGVyLmpzXCI7XG5cbmZ1bmN0aW9uIF9sb2FkQ3Jvc3NoYWlyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRhcmdldEljb24uc3JjID0gY3Jvc3NoYWlyO1xuICAgIHRhcmdldEljb24uY2xhc3NMaXN0LmFkZChcImNyb3NzaGFpclwiKTtcbiAgICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQodGFyZ2V0SWNvbik7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVDcm9zc2hhaXIoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucmVtb3ZlQ2hpbGQoZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQXR0YWNrRUwoc3F1YXJlKSB7XG4gICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfbG9hZENyb3NzaGFpcik7XG4gICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfcmVtb3ZlQ3Jvc3NoYWlyKTtcbiAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQXR0YWNrKTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZUF0dGFjayhldmVudCkge1xuICAgIGlmIChibG9ja1VzZXJJbnB1dCkgcmV0dXJuO1xuXG4gICAgbGV0IHNxdWFyZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3F1YXJlJyk7XG4gICAgcmVtb3ZlQWxsQXR0YWNrRUwoc3F1YXJlKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihzcXVhcmUpO1xuXG4gICAgdXNlclR1cm4oLi4uZ2V0WFlmcm9tRWxlbWVudChzcXVhcmUpKTtcbn1cblxuZnVuY3Rpb24gX3Jlc3RhcnRHYW1lKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZEdhbWVDb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBzZXR1cEdhbWUoKTtcbiAgICBpbml0aWF0ZVNoaXBQbGFjZW1lbnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdmVyQ3Jvc3NoYWlyRUwoKSB7XG4gICAgZ2V0QWxsU3F1YXJlcyhjb21wdXRlci5ib2FyZENsYXNzKS5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICBzcS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2xvYWRDcm9zc2hhaXIpO1xuICAgICAgICBzcS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX3JlbW92ZUNyb3NzaGFpcik7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsaWNrQXR0YWNrRUwoKSB7XG4gICAgZ2V0QWxsU3F1YXJlcyhjb21wdXRlci5ib2FyZENsYXNzKS5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICBzcS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVBdHRhY2spO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGlja1Jlc3RhcnRFTCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGFydEdhbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZXN0YXJ0R2FtZSk7XG59IiwiaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9Db250cm9sL3NldHVwX2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IGdldFNxdWFyZUVsZW1lbnRzLCBnZXRYWWZyb21FbGVtZW50LCB0b2dnbGVTaGlwIH0gZnJvbSBcIi4uL0RPTS9kb21faGVscGVycy5qc1wiO1xuaW1wb3J0IHsgcGxhY2VTaGlwc01hbnVhbCB9IGZyb20gXCIuLi9Db250cm9sL3NoaXBQbGFjZW1lbnRfY29udHJvbGxlci5qc1wiXG5pbXBvcnQgeyByZW5kZXJCb2FyZCB9IGZyb20gXCIuLi9ET00vcmVuZGVyRE9NLmpzXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi4vQ29udHJvbC9nYW1lUGxheV9jb250cm9sbGVyLmpzXCI7XG5cbmxldCBjdXJyRWxlbWVudHNFTDtcblxuZnVuY3Rpb24gX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBfaGFuZGxlUm90YXRlKTtcblxuICAgIGN1cnJFbGVtZW50c0VMLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfaGFuZGxlSG92ZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX2hhbmRsZUhvdmVyKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfaGFuZGxlUm90YXRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiS2V5UlwiKSB7XG4gICAgICB1c2VyLnNoaXBWZXJ0aWNhbCA9ICF1c2VyLnNoaXBWZXJ0aWNhbDtcbiAgICAgIF9yZW1vdmVBbGxTaGlwUGxhY2VtZW50RUwoKTtcbiAgICAgIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgICAgcGxhY2VTaGlwc01hbnVhbCh1c2VyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9oYW5kbGVIb3ZlcihldmVudCkge1xuICAgIGxldCBbeCwgeV0gPSBnZXRYWWZyb21FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgbGV0IGN1cnJlbnRTaGlwID0gdXNlci5zaGlwc1t1c2VyLnNoaXBJbmRleF07XG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IHVzZXIuYm9hcmQ7XG4gICAgbGV0IGN1cnJlbnRWZXJ0aWNhbCA9IHVzZXIuc2hpcFZlcnRpY2FsO1xuXG4gICAgbGV0IGFycmF5Q29vcmRzID0gY3VycmVudEJvYXJkLmdldEFycmF5Q29vcmRzKGN1cnJlbnRTaGlwLmdldExlbmd0aCgpLCB4LCB5LCBjdXJyZW50VmVydGljYWwpO1xuICAgIGxldCBhcnJheUNvb3JkRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyhhcnJheUNvb3JkcywgdXNlcik7XG4gICAgdG9nZ2xlU2hpcChhcnJheUNvb3JkRWxlbWVudHMsIGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgbGV0IFt4LCB5XSA9IGdldFhZZnJvbUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICBsZXQgY3VycmVudFNoaXAgPSB1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XTtcbiAgICBsZXQgY3VycmVudEJvYXJkID0gdXNlci5ib2FyZDtcbiAgICBsZXQgY3VycmVudFZlcnRpY2FsID0gdXNlci5zaGlwVmVydGljYWw7XG5cbiAgICBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCB4LCB5LCBjdXJyZW50VmVydGljYWwpO1xuICAgIF9yZW1vdmVBbGxTaGlwUGxhY2VtZW50RUwoKTtcbiAgICByZW5kZXJCb2FyZChjdXJyZW50Qm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIHVzZXIuc2hpcEluZGV4ICs9IDE7XG5cbiAgICBpZiAodXNlci5zaGlwc1t1c2VyLnNoaXBJbmRleF0gIT09IHVuZGVmaW5lZCkgcGxhY2VTaGlwc01hbnVhbCh1c2VyKTtcbiAgICBlbHNlIHN0YXJ0R2FtZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUm90YXRlU2hpcEVMKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIF9oYW5kbGVSb3RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG92ZXJTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKSB7XG4gICAgbGV0IHZhbGlkTG9jRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyh2YWxpZExvY2F0aW9ucywgcGxheWVyKTtcbiAgICBjdXJyRWxlbWVudHNFTCA9IHZhbGlkTG9jRWxlbWVudHM7XG5cbiAgICB2YWxpZExvY0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2hhbmRsZUhvdmVyKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfaGFuZGxlSG92ZXIpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKSB7XG4gICAgbGV0IHZhbGlkTG9jRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyh2YWxpZExvY2F0aW9ucywgcGxheWVyKTtcblxuICAgIHZhbGlkTG9jRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZEludCh1cHBlckJvdW5kKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVwcGVyQm91bmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kQm9vbCgpIHtcbiAgICByZXR1cm4gW3RydWUsIGZhbHNlXVtnZW5lcmF0ZVJhbmRJbnQoMildO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSXRlbUZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtnZW5lcmF0ZVJhbmRJbnQoYXJyYXkubGVuZ3RoKV07XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzZXR1cEdhbWUgfSBmcm9tICcuL01vZHVsZXMvQ29udHJvbC9zZXR1cF9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IGluaXRpYXRlU2hpcFBsYWNlbWVudCB9IGZyb20gJy4vTW9kdWxlcy9Db250cm9sL3NoaXBQbGFjZW1lbnRfY29udHJvbGxlcic7XG5cbnNldHVwR2FtZSgpO1xuaW5pdGlhdGVTaGlwUGxhY2VtZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=