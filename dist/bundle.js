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

/***/ "./src/modules/Constants.js":
/*!**********************************!*\
  !*** ./src/modules/Constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_shipTemplate": () => (/* binding */ _shipTemplate)
/* harmony export */ });
const _shipTemplate = [
    {length: 5, name: 'Carrier'},
    {length: 4, name: 'Battleship'},
    {length: 3, name: 'Destroyer'},
    {length: 3, name: 'Submarine'},
    {length: 2, name: 'Patrol Boat'}
  ];

/***/ }),

/***/ "./src/modules/Factory/Gameboard.js":
/*!******************************************!*\
  !*** ./src/modules/Factory/Gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
function Gameboard() {
  const _size = 10;
  // [[col],[col],...]. [col] = [row 0, row 1, row 2]
  const _board = [...Array(_size)].map(() => Array(_size));
  const _ships = [];
  const _shipLocations = [];

  for (let i = 0; i < _size; i += 1) {
    for (let j = 0; j < _size; j += 1) {
      _board[i][j] = {
        ship: null, // null or ref to ship object
        state: 'blank', // ['blank', 'hit', 'miss']
      };
    }
  }
  const getSize = () => _size;
  const getState = (x, y) => _board[x][y].state;
  const getShip = (x, y) => _board[x][y].ship; // return reference of ship object
  const getAvailableTargets = () => {
      let targets = [];
      for (let i = 0; i < _size; i += 1) {
        for (let j = 0; j < _size; j += 1) {
          if (getState(i, j) === 'blank') targets.push([i, j]);
        }
      }

      return targets;
  }
  const getQtySunk = () => {
    return _ships.reduce((prev, curr) => prev + (curr.isSunk() ? 1 : 0) , 0);
  }

  const allSunk = () => {
    // returns true if all ships have been hit, false otherwise
    if (_ships.length === 0) return false;

    return _ships.every((ship) => ship.isSunk());
  };

  const _coordIsWithinBoard = (x, y) => (x >= 0 && x < _size) && (y >= 0 && y < _size);

  const getArrayCoords = (shipLength, x, y, isVertical) => {
    const arrayCoords = [];
    for (let i = 0; i < shipLength; i += 1) {
      const newX = x + (isVertical === false ? i : 0);
      const newY = y + (isVertical === true ? i : 0);
      arrayCoords.push([newX, newY]);
    }
    return arrayCoords; // [[0,0], [0,1], [0,2]]
  };

  const isValidPlacement = (shipLength, x, y, isVertical) => {
    const placementCoords = getArrayCoords(shipLength, x, y, isVertical);

    return placementCoords.every((xyCoords) => _coordIsWithinBoard(...xyCoords)
            && getShip(xyCoords[0], xyCoords[1]) === null);
  };

  const placeShip = (ship, x, y, isVertical) => {
    // return true for valid ship placement
    // return false if (x, y) is off board or conflicts with existing ship

    if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
      getArrayCoords(ship.getLength(), x, y, isVertical).forEach((xyCoords) => {
        _board[xyCoords[0]][xyCoords[1]].ship = ship;
      });
      _ships.push(ship);
      _shipLocations.push([x, y]);
      return true;
    }
    return false;
  };

  const receiveAttack = (x, y) => {
    // return true for valid attack (hit or miss)
    // return false for invalid attack (invalid location or already hit / missed)

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
    getState, getShip, getSize, getArrayCoords, getAvailableTargets, getQtySunk, allSunk, placeShip, isValidPlacement, receiveAttack, _shipLocations
  };
}


/***/ }),

/***/ "./src/modules/Factory/Player.js":
/*!***************************************!*\
  !*** ./src/modules/Factory/Player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player(name) {
  let _name = name;

  const getName = () => name;

  const setName = (name) => (_name = name);

  const sendAttack = (x, y, board) => {
    return board.receiveAttack(x, y);
  };

  const sendRandomAttack = (board) => {
    const targets = board.getAvailableTargets();
    const targetLocation = targets[Math.floor(Math.random() * targets.length)];

    return [
      board.receiveAttack(targetLocation[0], targetLocation[1]),
      targetLocation,
    ];
  };

  return { getName, setName, sendAttack, sendRandomAttack };
}


/***/ }),

/***/ "./src/modules/Factory/Ship.js":
/*!*************************************!*\
  !*** ./src/modules/Factory/Ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name) {
  if (length <= 0 || length > 10)
    throw new Error("Length must be greater than 0");

  const hitLocation = []; // contains [x, y] locations

  // assumed valid hit location
  const hit = (location) => {
    if (hitLocation.includes(location)) throw new Error("Location already hit"); //can delete
    hitLocation.push(location);
  };

  const getName = () => name;
  const setName = (newName) => (name = newName);

  const getLength = () => length;

  const setLength = (num) => (length = num);

  const isSunk = () => hitLocation.length === length;

  return { hit, getName, setName, getLength, setLength, isSunk, hitLocation };
}


/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockUserInput": () => (/* binding */ blockUserInput),
/* harmony export */   "gameInit": () => (/* binding */ gameInit),
/* harmony export */   "boardSetup": () => (/* binding */ boardSetup),
/* harmony export */   "nextShip": () => (/* binding */ nextShip),
/* harmony export */   "placeShips": () => (/* binding */ placeShips),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "userTurn": () => (/* binding */ userTurn)
/* harmony export */ });
/* harmony import */ var _Factory_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factory/Gameboard */ "./src/modules/Factory/Gameboard.js");
/* harmony import */ var _Factory_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory/Player */ "./src/modules/Factory/Player.js");
/* harmony import */ var _Factory_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factory/Ship */ "./src/modules/Factory/Ship.js");
/* harmony import */ var _modules_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Constants */ "./src/modules/Constants.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderDOM */ "./src/modules/renderDOM.js");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userInterface */ "./src/modules/userInterface.js");







let _user, _comp, _userBoard, _compBoard, _isVertical, _shipIndex, _shipsUser, _shipsComp;

let blockUserInput;

function generateShips(ships) {
  const shipArray = [];
  ships.forEach(ship => {
    shipArray.push((0,_Factory_Ship__WEBPACK_IMPORTED_MODULE_2__["default"])(ship.length, ship.name));
  });
  return shipArray;
}

function gameInit() {
  _user = (0,_Factory_Player__WEBPACK_IMPORTED_MODULE_1__["default"])("You");
  _comp = (0,_Factory_Player__WEBPACK_IMPORTED_MODULE_1__["default"])("Opponent");

  _userBoard = (0,_Factory_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  _compBoard = (0,_Factory_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderGrid)("leftBoard");
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderGrid)("rightBoard");

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(_user.getName(), "leftBoard");
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(_comp.getName(), "rightBoard");

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(_userBoard, "leftBoard", "", "bold");
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(_compBoard, "rightBoard", "", "bold");

  _shipsUser = generateShips(_modules_Constants__WEBPACK_IMPORTED_MODULE_3__._shipTemplate);
  _shipsComp = generateShips(_modules_Constants__WEBPACK_IMPORTED_MODULE_3__._shipTemplate);

  blockUserInput = false;

  boardSetup(_userBoard, _shipsUser, false);
  boardSetup(_compBoard, _shipsComp, true);

  console.log(_compBoard._shipLocations);
}

function boardSetup(board, ships, isRandom) {
  if (isRandom === true) return placeShipsRandom(board, ships);

  _isVertical = true;
  _shipIndex = 0;

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.focusBoard)("leftBoard");
  document.addEventListener("keydown", handleRotate);
  placeShips(ships[_shipIndex], board);
}

function nextShip() {
  return _shipsUser[(_shipIndex += 1)];
}

function handleRotate(event) {
  if (event.code === "KeyR") {
    _isVertical = !_isVertical;
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_5__.removeShipPlacementEL)();
    (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoard)(_userBoard, "leftBoard", false);
    placeShips(_shipsUser[_shipIndex], _userBoard);
  }
}

function placeShipsRandom(board, ships) {
  ships.forEach((ship) => {
    let gen_x, gen_y, gen_vert;

    do {
      gen_x = Math.floor(Math.random() * 10);
      gen_y = Math.floor(Math.random() * 10);
      gen_vert = [true, false][Math.floor(Math.random() * 2)];
    } while (!board.isValidPlacement(ship.getLength(), gen_x, gen_y, gen_vert));

    board.placeShip(ship, gen_x, gen_y, gen_vert);
  });
}

function placeShips(ship, board) {
  let validLocations = (0,_userInterface__WEBPACK_IMPORTED_MODULE_5__.getValidShipLocations)(ship, board, _isVertical); // array of Elements
  (0,_userInterface__WEBPACK_IMPORTED_MODULE_5__.addHoverEventListener)(ship, board, validLocations, _isVertical);
  (0,_userInterface__WEBPACK_IMPORTED_MODULE_5__.addClickEventListener)(ship, board, validLocations, _isVertical);

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(board, "leftBoard", `Place ${ship.getName()}`, "bold");
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(
    board,
    "leftBoard",
    `(Press R to rotate ship)`,
    "regular",
    false
  );
}

function startGame() {
  (0,_userInterface__WEBPACK_IMPORTED_MODULE_5__.setupBoardUI_Attack)();

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoard)(_userBoard, "leftBoard", false);
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(
    _compBoard,
    "rightBoard",
    `${_compBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(
    _compBoard,
    "rightBoard",
    `Place your attack!`,
    "regular",
    false
  );

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoard)(_compBoard, "rightBoard", true);
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(
    _userBoard,
    "leftBoard",
    `${_userBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );

  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.focusBoard)('rightBoard');
}

function userTurn(x, y) {
  blockUserInput = true;
  if (_user.sendAttack(x, y, _compBoard) === false)
    throw new Error("Invalid attack location");
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardXY)(_compBoard, x, y, "rightBoard", false);
  console.log("computer board ships sunk: ", _compBoard.getQtySunk());
  console.log("user board ships sunk: ", _userBoard.getQtySunk());
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(
    _compBoard,
    "rightBoard",
    `${_compBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  if (_compBoard.allSunk()) return _endGame("you");
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.focusBoard)('leftBoard');
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(_compBoard, "leftBoard", `Thinking...`, "bold");
  setTimeout(_computerTurn, 0);
}

function _computerTurn() {
  const [isValidAttack, target] = _comp.sendRandomAttack(_userBoard);
  if (isValidAttack === false) throw new Error("Invalid attack location");
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardXY)(_userBoard, target[0], target[1], "leftBoard", false);
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(
    _userBoard,
    "leftBoard",
    `${_userBoard.getQtySunk()}/5 ships sunk`,
    "bold"
  );
  if (_userBoard.allSunk()) return _endGame("computer");
  blockUserInput = false;
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.focusBoard)('rightBoard');
  (0,_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(
    _compBoard,
    "rightBoard",
    `Place your attack!`,
    "regular",
    false
  );
}

function _endGame(winner) {
  const endGameDIV = document.querySelector("#endGameStatus");

  if (winner === "you") {
    endGameDIV.textContent =
      "You Win! Good job sinking all your opponents ships 😀";
  } else {
    endGameDIV.textContent = "All your ships were sunk. You lost 🙁";
  }

  document.querySelector('#restartGame').addEventListener('click', _restartGame);
  document.querySelector("#endGameContainer").classList.remove('hidden');
}

function _restartGame() {
  document.querySelector('#endGameContainer').classList.add('hidden');
  gameInit();
  
}

/***/ }),

/***/ "./src/modules/renderDOM.js":
/*!**********************************!*\
  !*** ./src/modules/renderDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusBoard": () => (/* binding */ focusBoard),
/* harmony export */   "renderGrid": () => (/* binding */ renderGrid),
/* harmony export */   "renderBoardTitle": () => (/* binding */ renderBoardTitle),
/* harmony export */   "renderBoardStatus": () => (/* binding */ renderBoardStatus),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderBoardXY": () => (/* binding */ renderBoardXY)
/* harmony export */ });
function focusBoard(boardSide) {
  document.querySelectorAll('.leftBoard, .rightBoard').forEach(el => el.classList.remove('boardHighlight'));
  document.querySelector(`.${boardSide}`).classList.add('boardHighlight');
}

function renderGrid(boardSide) {
  const board = document.querySelector(`.${boardSide} > .board`);
  _removeAllChildren(board);

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
  board,
  boardSide,
  status,
  style,
  clearStatus = true
) {
  const boardStatusContainer = document.querySelector(
    `.${boardSide} > .boardStatus`
  );

  if (clearStatus === true) _removeAllChildren(boardStatusContainer);

  const boardStatusDIV = document.createElement("div");
  boardStatusDIV.classList.add(style);
  boardStatusDIV.textContent = status;

  boardStatusContainer.appendChild(boardStatusDIV);
}

function _removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderBoard(board, boardSide, hideShips) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      renderBoardXY(board, j, i, boardSide, hideShips);
    }
  }
}

function renderBoardXY(board, x, y, boardSide, hideShips) {
  const locationID = boardSide + x + y;
  if (hideShips === false) _renderShips(board, x, y, locationID);
  _renderState(board, x, y, locationID);
}

const _renderShips = (board, x, y, locationID) => {
  if (board.getShip(x, y) !== null) {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add("ship");
  }
};

const _renderState = (board, x, y, locationID) => {
  const state = board.getState(x, y);
  if (state !== "blank") {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add(state);
    square.textContent = state === "hit" ? "X" : "O";
  }
};


/***/ }),

/***/ "./src/modules/userInterface.js":
/*!**************************************!*\
  !*** ./src/modules/userInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupBoardUI_Attack": () => (/* binding */ setupBoardUI_Attack),
/* harmony export */   "removeShipPlacementEL": () => (/* binding */ removeShipPlacementEL),
/* harmony export */   "addHoverEventListener": () => (/* binding */ addHoverEventListener),
/* harmony export */   "addClickEventListener": () => (/* binding */ addClickEventListener),
/* harmony export */   "getValidShipLocations": () => (/* binding */ getValidShipLocations)
/* harmony export */ });
/* harmony import */ var _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Crosshairs_Red.svg */ "./src/images/Crosshairs_Red.svg");
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController */ "./src/modules/gameController.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderDOM */ "./src/modules/renderDOM.js");




function _loadCrosshair(event) {
  const targetIcon = new Image();
  targetIcon.src = _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_0__;
  targetIcon.classList.add("crosshair");
  event.target.appendChild(targetIcon);
}

function _removeCrosshair(event) {
  event.target.removeChild(event.target.firstChild);
}

function _setupSquareUI_attack(squareElement, x, y) {
  const controller = new AbortController();

  squareElement.addEventListener("mouseenter", _loadCrosshair);
  squareElement.addEventListener("mouseleave", _removeCrosshair);

  squareElement.addEventListener(
    "click",
    () => {
      if (_gameController__WEBPACK_IMPORTED_MODULE_1__.blockUserInput) return;

      squareElement.removeEventListener("mouseenter", _loadCrosshair);
      squareElement.removeEventListener("mouseleave", _removeCrosshair);
      squareElement.removeChild(squareElement.firstChild);
      (0,_gameController__WEBPACK_IMPORTED_MODULE_1__.userTurn)(x, y);

      controller.abort(); // remove listener after successful attack
    },
    { signal: controller.signal }
  );
}

function setupBoardUI_Attack() {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const squareElement = document.querySelector("#rightBoard" + j + i);
      _setupSquareUI_attack(squareElement, j, i);
    }
  }
}

function removeShipPlacementEL() {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      let square = document.querySelector("#leftBoard" + j + i);
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.id = "leftBoard" + j + i;
      square.replaceWith(newSquare);
    }
  }
}

function _toggleValidCells(arrayElements) {
  arrayElements.forEach((el) => el.classList.toggle("ship"));
}

function addHoverEventListener(ship, board, validLocations, isVertical) {
  validLocations.forEach((loc) => {
    const [x, y] = _getXYfromID(loc);
    let arrayCoords = board.getArrayCoords(ship.getLength(), x, y, isVertical);

    let arrayCoordElements = arrayCoords.map((coord) =>
      document.querySelector("#leftBoard" + coord[0] + coord[1])
    );

    loc.addEventListener("mouseenter", () => {
      _toggleValidCells(arrayCoordElements);
    });
    loc.addEventListener("mouseleave", () => {
      _toggleValidCells(arrayCoordElements);
    });
  });
}

function addClickEventListener(ship, board, validLocations, isVertical) {
  validLocations.forEach((loc) => {
    const [x, y] = _getXYfromID(loc);

    loc.addEventListener("click", () => {
      board.placeShip(ship, x, y, isVertical);
      removeShipPlacementEL();
      (0,_renderDOM__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(board, "leftBoard", false);
      ship = (0,_gameController__WEBPACK_IMPORTED_MODULE_1__.nextShip)();
      if (ship !== undefined) {
        (0,_gameController__WEBPACK_IMPORTED_MODULE_1__.placeShips)(ship, board);
      } else {
        (0,_gameController__WEBPACK_IMPORTED_MODULE_1__.startGame)();
      }
    });
  });
}

function _getXYfromID(loc) {
  return [Number(loc.id[9]), Number(loc.id[10])];
}

function getValidShipLocations(ship, board, isVertical) {
  let validLocations = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (board.isValidPlacement(ship.getLength(), j, i, isVertical)) {
        validLocations.push(document.querySelector("#leftBoard" + j + i));
      }
    }
  }

  return validLocations;
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
/* harmony import */ var _modules_gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameController */ "./src/modules/gameController.js");



(0,_modules_gameController__WEBPACK_IMPORTED_MODULE_1__.gameInit)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDMEM7O0FBRS9ELGlFQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9GYWN0b3J5L0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRmFjdG9yeS9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0ZhY3RvcnkvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3JlbmRlckRPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3luY29wYXRlOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDp3Z2h0QDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyPmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIFxcbn1cXG5cXG4ubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmJvYXJkVGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5ib2FyZFN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnJlZ3VsYXIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYm9hcmRIaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgMzglKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbiNnYW1lQm9hcmRSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU3F1YXJlICovXFxuXFxuLnNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogS2FuaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zcXVhcmUgPiBpbWcge1xcbiAgICBjb2xvcjpibHVldmlvbGV0O1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDg0LCAxNDUpO1xcbn1cXG4uaGl0IHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDc3LCA3Nyk7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufSBcXG4ubWlzcyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VuZEdhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuI2VuZEdhbWVTdGF0dXMge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG4jcmVzdGFydEdhbWUge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4jcmVzdGFydEdhbWU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuICAgICNnYW1lQm9hcmRSb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TeW5jb3BhdGU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0OndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXI+aDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgXFxufVxcblxcbi5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDFweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLmJvYXJkU3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucmVndWxhciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ib2FyZEhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAzOCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI2dhbWVCb2FyZFJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBTcXVhcmUgKi9cXG5cXG4uc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBLYW5pdDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNxdWFyZSA+IGltZyB7XFxuICAgIGNvbG9yOmJsdWV2aW9sZXQ7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgODQsIDE0NSk7XFxufVxcbi5oaXQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgNzcsIDc3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59IFxcbi5taXNzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZW5kR2FtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jZW5kR2FtZVN0YXR1cyB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcbiNyZXN0YXJ0R2FtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDM4JSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbiNyZXN0YXJ0R2FtZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgI2dhbWVCb2FyZFJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBfc2hpcFRlbXBsYXRlID0gW1xuICAgIHtsZW5ndGg6IDUsIG5hbWU6ICdDYXJyaWVyJ30sXG4gICAge2xlbmd0aDogNCwgbmFtZTogJ0JhdHRsZXNoaXAnfSxcbiAgICB7bGVuZ3RoOiAzLCBuYW1lOiAnRGVzdHJveWVyJ30sXG4gICAge2xlbmd0aDogMywgbmFtZTogJ1N1Ym1hcmluZSd9LFxuICAgIHtsZW5ndGg6IDIsIG5hbWU6ICdQYXRyb2wgQm9hdCd9XG4gIF07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBfc2l6ZSA9IDEwO1xuICAvLyBbW2NvbF0sW2NvbF0sLi4uXS4gW2NvbF0gPSBbcm93IDAsIHJvdyAxLCByb3cgMl1cbiAgY29uc3QgX2JvYXJkID0gWy4uLkFycmF5KF9zaXplKV0ubWFwKCgpID0+IEFycmF5KF9zaXplKSk7XG4gIGNvbnN0IF9zaGlwcyA9IFtdO1xuICBjb25zdCBfc2hpcExvY2F0aW9ucyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3NpemU7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3NpemU7IGogKz0gMSkge1xuICAgICAgX2JvYXJkW2ldW2pdID0ge1xuICAgICAgICBzaGlwOiBudWxsLCAvLyBudWxsIG9yIHJlZiB0byBzaGlwIG9iamVjdFxuICAgICAgICBzdGF0ZTogJ2JsYW5rJywgLy8gWydibGFuaycsICdoaXQnLCAnbWlzcyddXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCBnZXRTaXplID0gKCkgPT4gX3NpemU7XG4gIGNvbnN0IGdldFN0YXRlID0gKHgsIHkpID0+IF9ib2FyZFt4XVt5XS5zdGF0ZTtcbiAgY29uc3QgZ2V0U2hpcCA9ICh4LCB5KSA9PiBfYm9hcmRbeF1beV0uc2hpcDsgLy8gcmV0dXJuIHJlZmVyZW5jZSBvZiBzaGlwIG9iamVjdFxuICBjb25zdCBnZXRBdmFpbGFibGVUYXJnZXRzID0gKCkgPT4ge1xuICAgICAgbGV0IHRhcmdldHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3NpemU7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9zaXplOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoZ2V0U3RhdGUoaSwgaikgPT09ICdibGFuaycpIHRhcmdldHMucHVzaChbaSwgal0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXRzO1xuICB9XG4gIGNvbnN0IGdldFF0eVN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9zaGlwcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyAoY3Vyci5pc1N1bmsoKSA/IDEgOiAwKSAsIDApO1xuICB9XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBoaXQsIGZhbHNlIG90aGVyd2lzZVxuICAgIGlmIChfc2hpcHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gX3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcblxuICBjb25zdCBfY29vcmRJc1dpdGhpbkJvYXJkID0gKHgsIHkpID0+ICh4ID49IDAgJiYgeCA8IF9zaXplKSAmJiAoeSA+PSAwICYmIHkgPCBfc2l6ZSk7XG5cbiAgY29uc3QgZ2V0QXJyYXlDb29yZHMgPSAoc2hpcExlbmd0aCwgeCwgeSwgaXNWZXJ0aWNhbCkgPT4ge1xuICAgIGNvbnN0IGFycmF5Q29vcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld1ggPSB4ICsgKGlzVmVydGljYWwgPT09IGZhbHNlID8gaSA6IDApO1xuICAgICAgY29uc3QgbmV3WSA9IHkgKyAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSA/IGkgOiAwKTtcbiAgICAgIGFycmF5Q29vcmRzLnB1c2goW25ld1gsIG5ld1ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5Q29vcmRzOyAvLyBbWzAsMF0sIFswLDFdLCBbMCwyXV1cbiAgfTtcblxuICBjb25zdCBpc1ZhbGlkUGxhY2VtZW50ID0gKHNoaXBMZW5ndGgsIHgsIHksIGlzVmVydGljYWwpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnRDb29yZHMgPSBnZXRBcnJheUNvb3JkcyhzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKTtcblxuICAgIHJldHVybiBwbGFjZW1lbnRDb29yZHMuZXZlcnkoKHh5Q29vcmRzKSA9PiBfY29vcmRJc1dpdGhpbkJvYXJkKC4uLnh5Q29vcmRzKVxuICAgICAgICAgICAgJiYgZ2V0U2hpcCh4eUNvb3Jkc1swXSwgeHlDb29yZHNbMV0pID09PSBudWxsKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgaXNWZXJ0aWNhbCkgPT4ge1xuICAgIC8vIHJldHVybiB0cnVlIGZvciB2YWxpZCBzaGlwIHBsYWNlbWVudFxuICAgIC8vIHJldHVybiBmYWxzZSBpZiAoeCwgeSkgaXMgb2ZmIGJvYXJkIG9yIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIHNoaXBcblxuICAgIGlmIChpc1ZhbGlkUGxhY2VtZW50KHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpKSB7XG4gICAgICBnZXRBcnJheUNvb3JkcyhzaGlwLmdldExlbmd0aCgpLCB4LCB5LCBpc1ZlcnRpY2FsKS5mb3JFYWNoKCh4eUNvb3JkcykgPT4ge1xuICAgICAgICBfYm9hcmRbeHlDb29yZHNbMF1dW3h5Q29vcmRzWzFdXS5zaGlwID0gc2hpcDtcbiAgICAgIH0pO1xuICAgICAgX3NoaXBzLnB1c2goc2hpcCk7XG4gICAgICBfc2hpcExvY2F0aW9ucy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIC8vIHJldHVybiB0cnVlIGZvciB2YWxpZCBhdHRhY2sgKGhpdCBvciBtaXNzKVxuICAgIC8vIHJldHVybiBmYWxzZSBmb3IgaW52YWxpZCBhdHRhY2sgKGludmFsaWQgbG9jYXRpb24gb3IgYWxyZWFkeSBoaXQgLyBtaXNzZWQpXG5cbiAgICBpZiAoIV9jb29yZElzV2l0aGluQm9hcmQoeCwgeSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoX2JvYXJkW3hdW3ldLnN0YXRlICE9PSAnYmxhbmsnKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZ2V0U2hpcCh4LCB5KSAhPT0gbnVsbCkge1xuICAgICAgZ2V0U2hpcCh4LCB5KS5oaXQoW3gsIHldKTtcbiAgICAgIF9ib2FyZFt4XVt5XS5zdGF0ZSA9ICdoaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfYm9hcmRbeF1beV0uc3RhdGUgPSAnbWlzcyc7XG4gICAgfVxuIFxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0U3RhdGUsIGdldFNoaXAsIGdldFNpemUsIGdldEFycmF5Q29vcmRzLCBnZXRBdmFpbGFibGVUYXJnZXRzLCBnZXRRdHlTdW5rLCBhbGxTdW5rLCBwbGFjZVNoaXAsIGlzVmFsaWRQbGFjZW1lbnQsIHJlY2VpdmVBdHRhY2ssIF9zaGlwTG9jYXRpb25zXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICBsZXQgX25hbWUgPSBuYW1lO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IHNldE5hbWUgPSAobmFtZSkgPT4gKF9uYW1lID0gbmFtZSk7XG5cbiAgY29uc3Qgc2VuZEF0dGFjayA9ICh4LCB5LCBib2FyZCkgPT4ge1xuICAgIHJldHVybiBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRSYW5kb21BdHRhY2sgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlVGFyZ2V0cygpO1xuICAgIGNvbnN0IHRhcmdldExvY2F0aW9uID0gdGFyZ2V0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRzLmxlbmd0aCldO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sodGFyZ2V0TG9jYXRpb25bMF0sIHRhcmdldExvY2F0aW9uWzFdKSxcbiAgICAgIHRhcmdldExvY2F0aW9uLFxuICAgIF07XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0TmFtZSwgc2V0TmFtZSwgc2VuZEF0dGFjaywgc2VuZFJhbmRvbUF0dGFjayB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgaWYgKGxlbmd0aCA8PSAwIHx8IGxlbmd0aCA+IDEwKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkxlbmd0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwXCIpO1xuXG4gIGNvbnN0IGhpdExvY2F0aW9uID0gW107IC8vIGNvbnRhaW5zIFt4LCB5XSBsb2NhdGlvbnNcblxuICAvLyBhc3N1bWVkIHZhbGlkIGhpdCBsb2NhdGlvblxuICBjb25zdCBoaXQgPSAobG9jYXRpb24pID0+IHtcbiAgICBpZiAoaGl0TG9jYXRpb24uaW5jbHVkZXMobG9jYXRpb24pKSB0aHJvdyBuZXcgRXJyb3IoXCJMb2NhdGlvbiBhbHJlYWR5IGhpdFwiKTsgLy9jYW4gZGVsZXRlXG4gICAgaGl0TG9jYXRpb24ucHVzaChsb2NhdGlvbik7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4gKG5hbWUgPSBuZXdOYW1lKTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgY29uc3Qgc2V0TGVuZ3RoID0gKG51bSkgPT4gKGxlbmd0aCA9IG51bSk7XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0TG9jYXRpb24ubGVuZ3RoID09PSBsZW5ndGg7XG5cbiAgcmV0dXJuIHsgaGl0LCBnZXROYW1lLCBzZXROYW1lLCBnZXRMZW5ndGgsIHNldExlbmd0aCwgaXNTdW5rLCBoaXRMb2NhdGlvbiB9O1xufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9GYWN0b3J5L0dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9GYWN0b3J5L1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vRmFjdG9yeS9TaGlwXCI7XG5pbXBvcnQgeyBfc2hpcFRlbXBsYXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9Db25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZm9jdXNCb2FyZCxcbiAgcmVuZGVyQm9hcmRTdGF0dXMsXG4gIHJlbmRlckJvYXJkLFxuICByZW5kZXJCb2FyZFhZLFxuICByZW5kZXJCb2FyZFRpdGxlLFxuICByZW5kZXJHcmlkLFxufSBmcm9tIFwiLi9yZW5kZXJET01cIjtcbmltcG9ydCB7XG4gIHNldHVwQm9hcmRVSV9BdHRhY2ssXG4gIGdldFZhbGlkU2hpcExvY2F0aW9ucyxcbiAgYWRkQ2xpY2tFdmVudExpc3RlbmVyLFxuICBhZGRIb3ZlckV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZVNoaXBQbGFjZW1lbnRFTCxcbn0gZnJvbSBcIi4vdXNlckludGVyZmFjZVwiO1xuXG5sZXQgX3VzZXIsIF9jb21wLCBfdXNlckJvYXJkLCBfY29tcEJvYXJkLCBfaXNWZXJ0aWNhbCwgX3NoaXBJbmRleCwgX3NoaXBzVXNlciwgX3NoaXBzQ29tcDtcblxuZXhwb3J0IGxldCBibG9ja1VzZXJJbnB1dDtcblxuZnVuY3Rpb24gZ2VuZXJhdGVTaGlwcyhzaGlwcykge1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICBzaGlwQXJyYXkucHVzaChTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLm5hbWUpKTtcbiAgfSk7XG4gIHJldHVybiBzaGlwQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lSW5pdCgpIHtcbiAgX3VzZXIgPSBQbGF5ZXIoXCJZb3VcIik7XG4gIF9jb21wID0gUGxheWVyKFwiT3Bwb25lbnRcIik7XG5cbiAgX3VzZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBfY29tcEJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcmVuZGVyR3JpZChcImxlZnRCb2FyZFwiKTtcbiAgcmVuZGVyR3JpZChcInJpZ2h0Qm9hcmRcIik7XG5cbiAgcmVuZGVyQm9hcmRUaXRsZShfdXNlci5nZXROYW1lKCksIFwibGVmdEJvYXJkXCIpO1xuICByZW5kZXJCb2FyZFRpdGxlKF9jb21wLmdldE5hbWUoKSwgXCJyaWdodEJvYXJkXCIpO1xuXG4gIHJlbmRlckJvYXJkU3RhdHVzKF91c2VyQm9hcmQsIFwibGVmdEJvYXJkXCIsIFwiXCIsIFwiYm9sZFwiKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXMoX2NvbXBCb2FyZCwgXCJyaWdodEJvYXJkXCIsIFwiXCIsIFwiYm9sZFwiKTtcblxuICBfc2hpcHNVc2VyID0gZ2VuZXJhdGVTaGlwcyhfc2hpcFRlbXBsYXRlKTtcbiAgX3NoaXBzQ29tcCA9IGdlbmVyYXRlU2hpcHMoX3NoaXBUZW1wbGF0ZSk7XG5cbiAgYmxvY2tVc2VySW5wdXQgPSBmYWxzZTtcblxuICBib2FyZFNldHVwKF91c2VyQm9hcmQsIF9zaGlwc1VzZXIsIGZhbHNlKTtcbiAgYm9hcmRTZXR1cChfY29tcEJvYXJkLCBfc2hpcHNDb21wLCB0cnVlKTtcblxuICBjb25zb2xlLmxvZyhfY29tcEJvYXJkLl9zaGlwTG9jYXRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkU2V0dXAoYm9hcmQsIHNoaXBzLCBpc1JhbmRvbSkge1xuICBpZiAoaXNSYW5kb20gPT09IHRydWUpIHJldHVybiBwbGFjZVNoaXBzUmFuZG9tKGJvYXJkLCBzaGlwcyk7XG5cbiAgX2lzVmVydGljYWwgPSB0cnVlO1xuICBfc2hpcEluZGV4ID0gMDtcblxuICBmb2N1c0JvYXJkKFwibGVmdEJvYXJkXCIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVSb3RhdGUpO1xuICBwbGFjZVNoaXBzKHNoaXBzW19zaGlwSW5kZXhdLCBib2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0U2hpcCgpIHtcbiAgcmV0dXJuIF9zaGlwc1VzZXJbKF9zaGlwSW5kZXggKz0gMSldO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSb3RhdGUoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmNvZGUgPT09IFwiS2V5UlwiKSB7XG4gICAgX2lzVmVydGljYWwgPSAhX2lzVmVydGljYWw7XG4gICAgcmVtb3ZlU2hpcFBsYWNlbWVudEVMKCk7XG4gICAgcmVuZGVyQm9hcmQoX3VzZXJCb2FyZCwgXCJsZWZ0Qm9hcmRcIiwgZmFsc2UpO1xuICAgIHBsYWNlU2hpcHMoX3NoaXBzVXNlcltfc2hpcEluZGV4XSwgX3VzZXJCb2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbShib2FyZCwgc2hpcHMpIHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGxldCBnZW5feCwgZ2VuX3ksIGdlbl92ZXJ0O1xuXG4gICAgZG8ge1xuICAgICAgZ2VuX3ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBnZW5feSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGdlbl92ZXJ0ID0gW3RydWUsIGZhbHNlXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gICAgfSB3aGlsZSAoIWJvYXJkLmlzVmFsaWRQbGFjZW1lbnQoc2hpcC5nZXRMZW5ndGgoKSwgZ2VuX3gsIGdlbl95LCBnZW5fdmVydCkpO1xuXG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIGdlbl94LCBnZW5feSwgZ2VuX3ZlcnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcHMoc2hpcCwgYm9hcmQpIHtcbiAgbGV0IHZhbGlkTG9jYXRpb25zID0gZ2V0VmFsaWRTaGlwTG9jYXRpb25zKHNoaXAsIGJvYXJkLCBfaXNWZXJ0aWNhbCk7IC8vIGFycmF5IG9mIEVsZW1lbnRzXG4gIGFkZEhvdmVyRXZlbnRMaXN0ZW5lcihzaGlwLCBib2FyZCwgdmFsaWRMb2NhdGlvbnMsIF9pc1ZlcnRpY2FsKTtcbiAgYWRkQ2xpY2tFdmVudExpc3RlbmVyKHNoaXAsIGJvYXJkLCB2YWxpZExvY2F0aW9ucywgX2lzVmVydGljYWwpO1xuXG4gIHJlbmRlckJvYXJkU3RhdHVzKGJvYXJkLCBcImxlZnRCb2FyZFwiLCBgUGxhY2UgJHtzaGlwLmdldE5hbWUoKX1gLCBcImJvbGRcIik7XG4gIHJlbmRlckJvYXJkU3RhdHVzKFxuICAgIGJvYXJkLFxuICAgIFwibGVmdEJvYXJkXCIsXG4gICAgYChQcmVzcyBSIHRvIHJvdGF0ZSBzaGlwKWAsXG4gICAgXCJyZWd1bGFyXCIsXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgc2V0dXBCb2FyZFVJX0F0dGFjaygpO1xuXG4gIHJlbmRlckJvYXJkKF91c2VyQm9hcmQsIFwibGVmdEJvYXJkXCIsIGZhbHNlKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXMoXG4gICAgX2NvbXBCb2FyZCxcbiAgICBcInJpZ2h0Qm9hcmRcIixcbiAgICBgJHtfY29tcEJvYXJkLmdldFF0eVN1bmsoKX0vNSBzaGlwcyBzdW5rYCxcbiAgICBcImJvbGRcIlxuICApO1xuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBfY29tcEJvYXJkLFxuICAgIFwicmlnaHRCb2FyZFwiLFxuICAgIGBQbGFjZSB5b3VyIGF0dGFjayFgLFxuICAgIFwicmVndWxhclwiLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcmVuZGVyQm9hcmQoX2NvbXBCb2FyZCwgXCJyaWdodEJvYXJkXCIsIHRydWUpO1xuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBfdXNlckJvYXJkLFxuICAgIFwibGVmdEJvYXJkXCIsXG4gICAgYCR7X3VzZXJCb2FyZC5nZXRRdHlTdW5rKCl9LzUgc2hpcHMgc3Vua2AsXG4gICAgXCJib2xkXCJcbiAgKTtcblxuICBmb2N1c0JvYXJkKCdyaWdodEJvYXJkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyVHVybih4LCB5KSB7XG4gIGJsb2NrVXNlcklucHV0ID0gdHJ1ZTtcbiAgaWYgKF91c2VyLnNlbmRBdHRhY2soeCwgeSwgX2NvbXBCb2FyZCkgPT09IGZhbHNlKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXR0YWNrIGxvY2F0aW9uXCIpO1xuICByZW5kZXJCb2FyZFhZKF9jb21wQm9hcmQsIHgsIHksIFwicmlnaHRCb2FyZFwiLCBmYWxzZSk7XG4gIGNvbnNvbGUubG9nKFwiY29tcHV0ZXIgYm9hcmQgc2hpcHMgc3VuazogXCIsIF9jb21wQm9hcmQuZ2V0UXR5U3VuaygpKTtcbiAgY29uc29sZS5sb2coXCJ1c2VyIGJvYXJkIHNoaXBzIHN1bms6IFwiLCBfdXNlckJvYXJkLmdldFF0eVN1bmsoKSk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKFxuICAgIF9jb21wQm9hcmQsXG4gICAgXCJyaWdodEJvYXJkXCIsXG4gICAgYCR7X2NvbXBCb2FyZC5nZXRRdHlTdW5rKCl9LzUgc2hpcHMgc3Vua2AsXG4gICAgXCJib2xkXCJcbiAgKTtcbiAgaWYgKF9jb21wQm9hcmQuYWxsU3VuaygpKSByZXR1cm4gX2VuZEdhbWUoXCJ5b3VcIik7XG4gIGZvY3VzQm9hcmQoJ2xlZnRCb2FyZCcpO1xuICByZW5kZXJCb2FyZFN0YXR1cyhfY29tcEJvYXJkLCBcImxlZnRCb2FyZFwiLCBgVGhpbmtpbmcuLi5gLCBcImJvbGRcIik7XG4gIHNldFRpbWVvdXQoX2NvbXB1dGVyVHVybiwgMCk7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlclR1cm4oKSB7XG4gIGNvbnN0IFtpc1ZhbGlkQXR0YWNrLCB0YXJnZXRdID0gX2NvbXAuc2VuZFJhbmRvbUF0dGFjayhfdXNlckJvYXJkKTtcbiAgaWYgKGlzVmFsaWRBdHRhY2sgPT09IGZhbHNlKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGF0dGFjayBsb2NhdGlvblwiKTtcbiAgcmVuZGVyQm9hcmRYWShfdXNlckJvYXJkLCB0YXJnZXRbMF0sIHRhcmdldFsxXSwgXCJsZWZ0Qm9hcmRcIiwgZmFsc2UpO1xuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBfdXNlckJvYXJkLFxuICAgIFwibGVmdEJvYXJkXCIsXG4gICAgYCR7X3VzZXJCb2FyZC5nZXRRdHlTdW5rKCl9LzUgc2hpcHMgc3Vua2AsXG4gICAgXCJib2xkXCJcbiAgKTtcbiAgaWYgKF91c2VyQm9hcmQuYWxsU3VuaygpKSByZXR1cm4gX2VuZEdhbWUoXCJjb21wdXRlclwiKTtcbiAgYmxvY2tVc2VySW5wdXQgPSBmYWxzZTtcbiAgZm9jdXNCb2FyZCgncmlnaHRCb2FyZCcpO1xuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBfY29tcEJvYXJkLFxuICAgIFwicmlnaHRCb2FyZFwiLFxuICAgIGBQbGFjZSB5b3VyIGF0dGFjayFgLFxuICAgIFwicmVndWxhclwiLFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmZ1bmN0aW9uIF9lbmRHYW1lKHdpbm5lcikge1xuICBjb25zdCBlbmRHYW1lRElWID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmRHYW1lU3RhdHVzXCIpO1xuXG4gIGlmICh3aW5uZXIgPT09IFwieW91XCIpIHtcbiAgICBlbmRHYW1lRElWLnRleHRDb250ZW50ID1cbiAgICAgIFwiWW91IFdpbiEgR29vZCBqb2Igc2lua2luZyBhbGwgeW91ciBvcHBvbmVudHMgc2hpcHMg8J+YgFwiO1xuICB9IGVsc2Uge1xuICAgIGVuZEdhbWVESVYudGV4dENvbnRlbnQgPSBcIkFsbCB5b3VyIHNoaXBzIHdlcmUgc3Vuay4gWW91IGxvc3Qg8J+ZgVwiO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnRHYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfcmVzdGFydEdhbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VuZEdhbWVDb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIF9yZXN0YXJ0R2FtZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZEdhbWVDb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgZ2FtZUluaXQoKTtcbiAgXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZvY3VzQm9hcmQoYm9hcmRTaWRlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkJykuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZEhpZ2hsaWdodCcpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfWApLmNsYXNzTGlzdC5hZGQoJ2JvYXJkSGlnaGxpZ2h0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHcmlkKGJvYXJkU2lkZSkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRgKTtcbiAgX3JlbW92ZUFsbENoaWxkcmVuKGJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgIHNxdWFyZS5pZCA9IGJvYXJkU2lkZSArIGogKyBpO1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkVGl0bGUodGl0bGUsIGJvYXJkU2lkZSkge1xuICBjb25zdCBib2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfSA+IC5ib2FyZFRpdGxlYCk7XG4gIGJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkU3RhdHVzKFxuICBib2FyZCxcbiAgYm9hcmRTaWRlLFxuICBzdGF0dXMsXG4gIHN0eWxlLFxuICBjbGVhclN0YXR1cyA9IHRydWVcbikge1xuICBjb25zdCBib2FyZFN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRTdGF0dXNgXG4gICk7XG5cbiAgaWYgKGNsZWFyU3RhdHVzID09PSB0cnVlKSBfcmVtb3ZlQWxsQ2hpbGRyZW4oYm9hcmRTdGF0dXNDb250YWluZXIpO1xuXG4gIGNvbnN0IGJvYXJkU3RhdHVzRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmRTdGF0dXNESVYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XG4gIGJvYXJkU3RhdHVzRElWLnRleHRDb250ZW50ID0gc3RhdHVzO1xuXG4gIGJvYXJkU3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkU3RhdHVzRElWKTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUFsbENoaWxkcmVuKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChib2FyZCwgYm9hcmRTaWRlLCBoaWRlU2hpcHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICByZW5kZXJCb2FyZFhZKGJvYXJkLCBqLCBpLCBib2FyZFNpZGUsIGhpZGVTaGlwcyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZFhZKGJvYXJkLCB4LCB5LCBib2FyZFNpZGUsIGhpZGVTaGlwcykge1xuICBjb25zdCBsb2NhdGlvbklEID0gYm9hcmRTaWRlICsgeCArIHk7XG4gIGlmIChoaWRlU2hpcHMgPT09IGZhbHNlKSBfcmVuZGVyU2hpcHMoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpO1xuICBfcmVuZGVyU3RhdGUoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpO1xufVxuXG5jb25zdCBfcmVuZGVyU2hpcHMgPSAoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpID0+IHtcbiAgaWYgKGJvYXJkLmdldFNoaXAoeCwgeSkgIT09IG51bGwpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtsb2NhdGlvbklEfWApO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgfVxufTtcblxuY29uc3QgX3JlbmRlclN0YXRlID0gKGJvYXJkLCB4LCB5LCBsb2NhdGlvbklEKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gYm9hcmQuZ2V0U3RhdGUoeCwgeSk7XG4gIGlmIChzdGF0ZSAhPT0gXCJibGFua1wiKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bG9jYXRpb25JRH1gKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChzdGF0ZSk7XG4gICAgc3F1YXJlLnRleHRDb250ZW50ID0gc3RhdGUgPT09IFwiaGl0XCIgPyBcIlhcIiA6IFwiT1wiO1xuICB9XG59O1xuIiwiaW1wb3J0IGNyb3NzaGFpciBmcm9tIFwiLi4vaW1hZ2VzL0Nyb3NzaGFpcnNfUmVkLnN2Z1wiO1xuaW1wb3J0IHtcbiAgdXNlclR1cm4sXG4gIGJsb2NrVXNlcklucHV0LFxuICBuZXh0U2hpcCxcbiAgc3RhcnRHYW1lLFxuICBwbGFjZVNoaXBzLFxufSBmcm9tIFwiLi9nYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmQgfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcblxuZnVuY3Rpb24gX2xvYWRDcm9zc2hhaXIoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0YXJnZXRJY29uLnNyYyA9IGNyb3NzaGFpcjtcbiAgdGFyZ2V0SWNvbi5jbGFzc0xpc3QuYWRkKFwiY3Jvc3NoYWlyXCIpO1xuICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQodGFyZ2V0SWNvbik7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVDcm9zc2hhaXIoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0LnJlbW92ZUNoaWxkKGV2ZW50LnRhcmdldC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gX3NldHVwU3F1YXJlVUlfYXR0YWNrKHNxdWFyZUVsZW1lbnQsIHgsIHkpIHtcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICBzcXVhcmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIF9sb2FkQ3Jvc3NoYWlyKTtcbiAgc3F1YXJlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBfcmVtb3ZlQ3Jvc3NoYWlyKTtcblxuICBzcXVhcmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgICgpID0+IHtcbiAgICAgIGlmIChibG9ja1VzZXJJbnB1dCkgcmV0dXJuO1xuXG4gICAgICBzcXVhcmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIF9sb2FkQ3Jvc3NoYWlyKTtcbiAgICAgIHNxdWFyZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgX3JlbW92ZUNyb3NzaGFpcik7XG4gICAgICBzcXVhcmVFbGVtZW50LnJlbW92ZUNoaWxkKHNxdWFyZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICB1c2VyVHVybih4LCB5KTtcblxuICAgICAgY29udHJvbGxlci5hYm9ydCgpOyAvLyByZW1vdmUgbGlzdGVuZXIgYWZ0ZXIgc3VjY2Vzc2Z1bCBhdHRhY2tcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEJvYXJkVUlfQXR0YWNrKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0Qm9hcmRcIiArIGogKyBpKTtcbiAgICAgIF9zZXR1cFNxdWFyZVVJX2F0dGFjayhzcXVhcmVFbGVtZW50LCBqLCBpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNoaXBQbGFjZW1lbnRFTCgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0Qm9hcmRcIiArIGogKyBpKTtcbiAgICAgIGxldCBuZXdTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICBuZXdTcXVhcmUuaWQgPSBcImxlZnRCb2FyZFwiICsgaiArIGk7XG4gICAgICBzcXVhcmUucmVwbGFjZVdpdGgobmV3U3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX3RvZ2dsZVZhbGlkQ2VsbHMoYXJyYXlFbGVtZW50cykge1xuICBhcnJheUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKFwic2hpcFwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb3ZlckV2ZW50TGlzdGVuZXIoc2hpcCwgYm9hcmQsIHZhbGlkTG9jYXRpb25zLCBpc1ZlcnRpY2FsKSB7XG4gIHZhbGlkTG9jYXRpb25zLmZvckVhY2goKGxvYykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IF9nZXRYWWZyb21JRChsb2MpO1xuICAgIGxldCBhcnJheUNvb3JkcyA9IGJvYXJkLmdldEFycmF5Q29vcmRzKHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpO1xuXG4gICAgbGV0IGFycmF5Q29vcmRFbGVtZW50cyA9IGFycmF5Q29vcmRzLm1hcCgoY29vcmQpID0+XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnRCb2FyZFwiICsgY29vcmRbMF0gKyBjb29yZFsxXSlcbiAgICApO1xuXG4gICAgbG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIF90b2dnbGVWYWxpZENlbGxzKGFycmF5Q29vcmRFbGVtZW50cyk7XG4gICAgfSk7XG4gICAgbG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgIF90b2dnbGVWYWxpZENlbGxzKGFycmF5Q29vcmRFbGVtZW50cyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tFdmVudExpc3RlbmVyKHNoaXAsIGJvYXJkLCB2YWxpZExvY2F0aW9ucywgaXNWZXJ0aWNhbCkge1xuICB2YWxpZExvY2F0aW9ucy5mb3JFYWNoKChsb2MpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBfZ2V0WFlmcm9tSUQobG9jKTtcblxuICAgIGxvYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGlzVmVydGljYWwpO1xuICAgICAgcmVtb3ZlU2hpcFBsYWNlbWVudEVMKCk7XG4gICAgICByZW5kZXJCb2FyZChib2FyZCwgXCJsZWZ0Qm9hcmRcIiwgZmFsc2UpO1xuICAgICAgc2hpcCA9IG5leHRTaGlwKCk7XG4gICAgICBpZiAoc2hpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBsYWNlU2hpcHMoc2hpcCwgYm9hcmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfZ2V0WFlmcm9tSUQobG9jKSB7XG4gIHJldHVybiBbTnVtYmVyKGxvYy5pZFs5XSksIE51bWJlcihsb2MuaWRbMTBdKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZFNoaXBMb2NhdGlvbnMoc2hpcCwgYm9hcmQsIGlzVmVydGljYWwpIHtcbiAgbGV0IHZhbGlkTG9jYXRpb25zID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBpZiAoYm9hcmQuaXNWYWxpZFBsYWNlbWVudChzaGlwLmdldExlbmd0aCgpLCBqLCBpLCBpc1ZlcnRpY2FsKSkge1xuICAgICAgICB2YWxpZExvY2F0aW9ucy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdEJvYXJkXCIgKyBqICsgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWxpZExvY2F0aW9ucztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnYW1lSW5pdCwgc3RhcnRHYW1lIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVDb250cm9sbGVyJztcblxuZ2FtZUluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==