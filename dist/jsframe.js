(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jsframe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".jsFrame.titlebar {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsFrame.titlebar.focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/JSFrame.css":
/*!*************************!*\
  !*** ./src/JSFrame.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./JSFrame.css */ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jsframe.js":
/*!************************!*\
  !*** ./src/jsframe.js ***!
  \************************/
/*! exports provided: JSFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSFrame", function() { return JSFrame; });
/**
 * JSFrame ver.1.2.0 - A javascript floating window library
 *
 * Copyright 2007-2017 Tom Misawa, riversun.org@gmail.com
 * Copyright 2007-2017 web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

__webpack_require__(/*! ./JSFrame.css */ "./src/JSFrame.css");


'use strict';

var DEF = {},
    CALIGN = {};

CALIGN.LEFT_TOP = 'LEFT_TOP';
CALIGN.HCENTER_TOP = 'CENTER_TOP';
CALIGN.RIGHT_TOP = 'RIGHT_TOP';
CALIGN.LEFT_VCENTER = 'LEFT_CENTER';
CALIGN.HCENTER_VCENTER = 'CENTER_CENTER';
CALIGN.CENTER = CALIGN.HCENTER_VCENTER;
CALIGN.RIGHT_VCENTER = 'RIGHT_CENTER';
CALIGN.LEFT_BOTTOM = 'LEFT_BOTTOM';
CALIGN.HCENTER_BOTTOM = 'CENTER_BOTTOM';
CALIGN.RIGHT_BOTTOM = 'RIGHT_BOTTOM';


/**
 * CFrameAppearance class<br>
 * Appearance Model Class for Frame
 *
 */
function CFrameAppearance() {

    var me = this;

    this.showTitleBar = true;
    this.showCloseButton = true;
    this.titleBarCaption = '';
    this.titleBarCaptionFontSize = '12px';
    this.titleBarCaptionFontWeight = 'bold';
    this.titleBarHeight = '24px';

    this.useIframe = false;
    this.useFrame = true;

    this.setUseIFrame = function (value) {
        me.useIframe = value;
        me.useFrame = !value;
        return me;
    };


    /**
     * The position from the left side of the caption. If this value is null, caption will be centered.
     */
    this.titleBarCaptionLeftMargin = '5px';

    this.titleBarColorDefault = 'lightgray';
    this.titleBarColorFocused = '#d3e1ee';
    this.titleBarCaptionColorDefault = '';
    this.titleBarCaptionColorFocused = '';

    this.titleBarBorderBottomDefault = '1px solid rgba(0,0,0,0.2)';
    this.titleBarBorderBottomFocused = null;

    this.frameBorderRadius = '6px';

    this.frameBorderWidthDefault = '1px';
    this.frameBorderWidthFocused = this.frameBorderWidthDefault;

    this.frameBorderColorDefault = 'rgba(1, 1, 1, 0.2)';
    this.frameBorderColorFocused = this.frameBorderColorDefault;

    this.frameBorderStyle = 'solid';
    this.frameBoxShadow = '2px 3px 16px rgba(0,0,0,.6)';
    this.frameBackgroundColor = 'transparent';

    this._partsBuilder = null;


    this.frameComponents = [];

    this.frameHeightAdjust = 1;

    this.getFrameInnerBorderRadius = function (ref, hasFocus) {

        if (!ref) {
            return;
        }
        if (hasFocus) {
            return (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthFocused, 10)) + 'px';
        }
        return (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthDefault, 10)) + 'px';
    };


    this.onInitialize = function () {

        //Add close button if needed
        if (me.showCloseButton) {
            var partsBuilder = me.getPartsBuilder(),
                crossMark0 = '\u274c',
                crossMark1 = '\u2716',
                crossMark2 = '\u274e';


            var btnAppearance = partsBuilder.buildTextButtonAppearance();

            btnAppearance.size = 14;
            btnAppearance.captionShiftYpx = 0;
            btnAppearance.captionFontRatio = 1.0;
            btnAppearance.borderRadius = 2;
            btnAppearance.backgroundColorPressed = 'transparent';
            btnAppearance.backgroundColorDefault = 'transparent';
            btnAppearance.caption = crossMark1;

            btnAppearance.captionColorDefault = 'gray';
            btnAppearance.captionColorFocused = 'gray';
            btnAppearance.captionColorHovered = 'silver';
            btnAppearance.captionColorPressed = 'black';

            btnAppearance.borderWidth = 0;
            btnAppearance.borderColorDefault = '#aaaaaa';
            btnAppearance.borderStyle = 'solid';

            var closeBtnEle = partsBuilder.buildTextButton(btnAppearance);
            var eleLeft = -10;
            var eleTop = -20;
            var eleAlign = 'RIGHT_TOP';

            //closeButton is a special name
            var frameComponent = me.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);
        }
    };

}


CFrameAppearance.prototype.getPartsBuilder = function () {
    var me = this;
    if (me._partsBuilder === null) {
        me._partsBuilder = new CDomPartsBuilder();
    }
    return me._partsBuilder;
};
CFrameAppearance.prototype.initialize = function () {
    var me = this;
    me.onInitialize();
};

/**
 *  Add FrameComponent into frame
 *  FrameComponent is attached to Frame and it moves with Frame.
 *
 * @param id
 * @param myDomElement DOM element.
 * @param x  Relative x coodinate from the snap position specified by alignment
 * @param y  Relative y coodinate from the snap position specified by alignment
 * @param align 'LEFT_TOP' 'CENTER_TOP' 'RIGHT_TOP' 'LEFT_CENTER' 'CENTER_CENTER' 'RIGHT_CENTER' 'LEFT_BOTTOM' 'CENTER_BOTTOM' 'RIGHT_BOTTOM'
 * @returns {CFrameComponent}
 *
 */
CFrameAppearance.prototype.addFrameComponent = function (id, myDomElement, x, y, align) {

    //(id, frame, htmlElement, x, y, align)
    var frameComponent = new CFrameComponent(id, myDomElement, x, y, align);

    if (myDomElement._onTakeFocus && myDomElement._onReleaseFocus) {
        //if this DOM element has special method for focus
        //set focus callback
        frameComponent.setFocusCallback(myDomElement._onTakeFocus, myDomElement._onReleaseFocus);
    }

    this.frameComponents.push(frameComponent);

    return frameComponent;
};

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 *  End of CFrameAppearance class
 */

/**
 * Inheritance function
 *
 * @param subClass
 * @param baseClass
 */
function inherit(subClass, baseClass) {

    function clazz() {
    }

    clazz.prototype = baseClass.prototype;
    subClass.prototype = new clazz();

    subClass.prototype.constructor = subClass;
    subClass.superConstructor = baseClass;
    subClass.superClass = baseClass.prototype;

}

/**
 * End of inheritance function
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * DEFINITIONS
 */
DEF.CBEAN = {};
DEF.CBEAN.HTML_ELEMENT = 'span';
DEF.CBEAN.HTML_ELEMENT_ID_PREFIX = 'htmlElement_';
DEF.CBEAN.TYPE_NAME = 'bean';


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * CBeanFrame Class<p>
 * The smallest window. It is responsible for basic processing only.
 *
 * @param beanId id of this small window
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @constructor
 */
function CBeanFrame(beanId, left, top, width, height, zindex) {

    var me = this;

    //fields
    me.id = beanId;
    me.property = {};

    me.parentCanvas = null;
    me.htmlElement = null;


    //initialize
    me.htmlElement = document.createElement(DEF.CBEAN.HTML_ELEMENT);
    me.htmlElement.id = DEF.CBEAN.HTML_ELEMENT_ID_PREFIX + beanId;
    me.htmlElement.style.position = 'absolute';
    me.htmlElement.style.left = parseInt(left, 10) + 'px';
    me.htmlElement.style.top = parseInt(top, 10) + 'px';
    me.htmlElement.style.width = parseInt(width, 10) + 'px';
    me.htmlElement.style.height = parseInt(height, 10) + 'px';


    //Zindex may become 'undefined' in some cases.
    if (zindex !== null) {
        me.htmlElement.style.zIndex = zindex;
    }
    me.htmlElement.style.borderColor = '#000000';

    //If I set a larger font size, width and height of window will be affected....
    me.htmlElement.style.fontSize = '1px';

    //Refer parents to each other.(sougo-sansho)
    me.htmlElement.parent = me;

    //Note that 'mouseDown' is mapped to 'onmousedown' of htmlElement,
    //so when 'onmouseDown' fires ,the 'this' will indicate 'htmlElement'
    me.htmlElement.onmousedown = me.onmouseDown;

    //Type name of this class
    me.htmlElement.typeName = DEF.CBEAN.TYPE_NAME;

    //Special field indicating usage of this class
    me.htmlElement.usage = 'nothing';

    //Whether it can move outside the frame(waku).
    me.htmlElement.isRangeLimited = false;

    //Movement magnification in the X direction
    //(If it is 0, it can not move in the X direction.)
    me.htmlElement.argX = 1;

    //Movement magnification in Y direction
    // (If it is 0, it can not move in Y direction)
    me.htmlElement.argY = 1;
    me.externalAreaClickedListener = null;
}

/**
 * Set whether the frame can be moved while dragging with the mouse
 * @param enabled
 */
CBeanFrame.prototype.setMovable = function (enabled) {
    var me = this;

    if (enabled) {
        me.htmlElement.argX = 1;
        me.htmlElement.argY = 1;
    } else {
        me.htmlElement.argX = 0;
        me.htmlElement.argY = 0;
    }
    return me;
};


CBeanFrame.prototype.setParentCanvas = function (parentCanvas) {
    var me = this;
    me.parentCanvas = parentCanvas;
    me.htmlElement.parentCanvas = me.parentCanvas;
};
CBeanFrame.prototype.setOnExternalAreaClickedListener = function (listener) {
    var me = this;
    me.externalAreaClickedListener = listener;
};
CBeanFrame.prototype.onBodyClicked = function (e) {

    var me = this;
    var clickX = e.pageX;
    var clickY = e.pageY;

    var left = parseInt(me.htmlElement.style.left);
    var top = parseInt(me.htmlElement.style.top);
    var width = parseInt(me.htmlElement.style.width);
    var height = parseInt(me.htmlElement.style.height);

    if (left < clickX && clickX < (left + width) && top < clickY && (clickY < top + height)) {
        //- clicked internal area of this frame
    } else {
        //- clicked external area of this frame
        if (me.externalAreaClickedListener) {
            me.externalAreaClickedListener();
        }

    }


};
CBeanFrame.prototype.onmouseDown = function (e) {

    //This 'this' means a htmlElement
    var refHtmlElement = this;


    //Retrieve CBeanFrame
    var refCBeanFrame = refHtmlElement.parent;

    if (e.button == 0) {
        refHtmlElement.parentCanvas.currentObject = refHtmlElement;

        //Bring the current bean to the top
        refHtmlElement.parentCanvas.pullUp(refCBeanFrame.id);

    }
    else if (e.button == 2) {
        return false;
    }

    refHtmlElement.parentCanvas.offsetX = e.pageX - parseInt(refHtmlElement.parentCanvas.currentObject.style.left, 10);
    refHtmlElement.parentCanvas.offsetY = e.pageY - parseInt(refHtmlElement.parentCanvas.currentObject.style.top, 10);


    return false;
};
/**
 * End of CBeanFrame Class <p>
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CANVAS = {};
DEF.CANVAS.HTML_ELEMENT = 'div';
DEF.CANVAS.WIDTH_ADJUST_20180722 = 2;
DEF.CANVAS.HEIGHT_ADJUST_20180722 = 3;

/**
 * CCanvas class
 * A canvas is a place where windows are arranged, where you can drag and move freely.
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CCanvas(parentElement, canvasId, left, top, width, height) {

    //Event data to be transmitted
    function EventData() {
        this.x = 0;
        this.y = 0;
        this.screenX = 0;
        this.screenY = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.isMoved = false;
        this.targetTypeName = null;
        this.targetUsage = null;
        this.targetObject = null;
    }

    var me = this;

    me.currentObject = null;
    me.onTopObject = null;
    me.offsetX = 0;
    me.offsetY = 0;


    //Object which generated 'mouseDown' event at the very beginning(ichiban-saisho)
    me.mouseDownSource = null;

    me.id = canvasId;
    me.canvasElement = null;
    me.parentElement = parentElement;
    me.beanList = new Array();

    //20180724[start]
    me.beanIdName = {};//key:beanId value:beanName
    me.beanNameId = {};//key:beanName value:beanId
    //20180724[end]

    me.eventData = new EventData();


    me.baseZIndex = 0;
    me.setBaseZIndex = function (baseZIndex) {
        me.baseZIndex = baseZIndex;
    };
    me.getBaseZIndex = function () {
        return me.baseZIndex;
    };


    me.canvasElement = document.createElement(DEF.CANVAS.HTML_ELEMENT);
    //Added 2018/7/16
    me.canvasElement.style.zIndex = 2000;
    me.canvasElement.id = me.id;
    me.canvasElement.style.boxSizing = "border-box";
    me.canvasElement.style.position = 'absolute';
    me.canvasElement.style.left = parseInt(left) + 'px';
    me.canvasElement.style.top = parseInt(top) + 'px';
    //20180722(画面の下に透明部分ができてしまうので、調整値をいれた)
    me.canvasElement.style.width = (parseInt(width) + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
    me.canvasElement.style.height = (parseInt(height) + DEF.CANVAS.HEIGHT_ADJUST_20180722) + 'px';
    me.canvasElement.style.backgroundColor = 'transparent';
    me.canvasElement.style.borderStyle = 'none';
    me.canvasElement.style.margin = '0px';
    me.canvasElement.style.borderWidth = '0px';
    me.canvasElement.style.borderColor = "transparent";

    //Add the Canvas's html element into the canvas's parent html element
    me.parentElement.appendChild(me.canvasElement);

}


CCanvas.prototype.mouseMove = function (e) {

    var me = this;


    if (me.currentObject) {

        //eventData.isMoved=true;The presence of event data means that it has moved.
        me.eventData.targetTypeName = me.currentObject.typeName;
        me.eventData.targetUsage = me.currentObject.usage;
        me.eventData.targetObject = me.currentObject;

        //Even when obj is not being dragged, mouse coordinates are used here because they are needed.
        var newObjLeftPx = e.pageX - me.offsetX;
        var newObjTopPx = e.pageY - me.offsetY;

        var absoluteMouseX = e.pageX;
        var absoluteMouseY = e.pageY;


        //Take the snapshot before updating the location.
        var oldObjLeftPx = me.currentObject.style.left;
        var oldObjTopPx = me.currentObject.style.top;

        //When the mouse cursor goes out of range,
        //the addition in the X direction and Y direction (delta X, delta Y) is set to zero.
        //this.left=Cavas's left side edge, this.top=Canvas's top side edge.
        var tmpLeft = parseInt(newObjLeftPx, 10);
        var tmpTop = parseInt(newObjTopPx, 10);

        var tmpRight = tmpLeft + parseInt(me.currentObject.style.width, 10);
        var tmpBottom = tmpTop + parseInt(me.currentObject.style.height, 10);

        var styleWidth = parseInt(me.canvasElement.style.width, 10);
        var styleHeight = parseInt(me.canvasElement.style.height, 10);

        var deltaX = 0;
        var deltaY = 0;

        if (me.currentObject.isRangeLimited == true &&
            (tmpLeft <= 0 || tmpRight > styleWidth || tmpTop <= 0 || tmpBottom > styleHeight)
        ) {
            deltaX = 0;
            deltaY = 0;
        }
        else {
            deltaX = (parseInt(newObjLeftPx, 10) - parseInt(oldObjLeftPx, 10));
            deltaY = (parseInt(newObjTopPx, 10) - parseInt(oldObjTopPx, 10));
            me.currentObject.style.left = (parseInt(me.currentObject.style.left) + deltaX * me.currentObject.argX) + 'px';
            me.currentObject.style.top = (parseInt(me.currentObject.style.top) + deltaY * me.currentObject.argY) + 'px';
        }

        me.eventData.deltaX = deltaX;
        me.eventData.deltaY = deltaY;

        return me.eventData;

    }
    //Returns null if none of the objects are clicked and the only mouse just moves.
    return null;
};


CCanvas.prototype.mouseUp = function (e) {
    var me = this;

    me.currentObject = null;
    me.mouseDownSource = null;
};


//Bring the object in front
CCanvas.prototype.pullUp = function (targetBeanId) {

    var me = this;

    var tmpBeanArray = [];

    var beanList = me.beanList;

    for (var i in   beanList) {
        tmpBeanArray.push(beanList[i]);
    }

    //Bring the target object in front and set zindex to 1.
    var targetBean = beanList[targetBeanId];

    me.pullUpSort(targetBean, tmpBeanArray, me.baseZIndex);


    //Remember the top object
    me.onTopObject = targetBean;


};

//Calculate the front / back information of the window accurately.
CCanvas.prototype.pullUpSort = function (pullupObject, objectArray, baseIndex) {
    var me = this;

    //Increase the index number of the target object
    pullupObject.htmlElement.style.zIndex = objectArray.length + baseIndex;

    //sort by index
    objectArray.sort(function (b, a) {
        return -parseInt(b.htmlElement.style.zIndex, 10) + parseInt(a.htmlElement.style.zIndex, 10);
    });

    //Redefine number of the index
    for (var i in objectArray) {
        objectArray[i].htmlElement.style.zIndex = (objectArray.length - 1) - i + baseIndex;
    }

};


/**
 * remove the bean object
 * @param beanId
 */
CCanvas.prototype.removeBean = function (beanId) {

    var me = this;

    //Retrieve the target beanFrame
    var beanList = me.beanList;
    var targetBean = beanList[beanId];

    //Remove bean's htmlElement from canvasElement
    me.canvasElement.removeChild(targetBean.htmlElement);

    //Delete the bean object in the associative array.
    delete beanList[beanId];


};


/**
 * Add bean into this canvas
 * @param bean
 */
CCanvas.prototype.addBean = function (bean) {

    var me = this;

    var beanList = me.beanList;

    //20180724[start]
    var beanIdName = me.beanIdName;//key:beanId value:beanName
    var beanNameId = me.beanNameId; //key:beanName value:beanId
    //20180724[end]

    beanList[bean.id] = bean;

    //20180724[start]
    if (bean.property.name) {
        beanNameId[bean.property.name] = bean.id;
        beanIdName[bean.id] = bean.property.name;
    }
    //20180724[end]


    //In this usage case the 'length' property is invalid ..
    var num = 0;

    for (var j in beanList) {
        num++;
    }

    //Set zIndex so that what you add later will come up.
    bean.htmlElement.style.zIndex = num + me.baseZIndex;

    //On the bean side, specify the parent of the bean to me.
    bean.setParentCanvas(me);


    this.canvasElement.appendChild(bean.htmlElement);
};
/**
 * End of canvas class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CFRAME = {};
DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR = 'transparent';
DEF.CFRAME.TITLE_BAR_CLASS_DEFAULT = 'jsFrame.titlebar';
DEF.CFRAME.TITLE_BAR_CLASS_FOCUSED = 'jsFrame.titlebar.focused';

inherit(CFrame, CBeanFrame);


/**
 * CFrame class
 * <p>
 * This class represents a window whose size can be changed ,
 * can move freely on the screen,
 * can have a title bar,
 *
 * @param windowId
 * @param w_left
 * @param w_top
 * @param w_width
 * @param w_height
 * @param zindex
 * @param w_border_width
 * @param appearance
 * @constructor
 */
function CFrame(windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance) {

    var me = this;

    //call constructor of superclass
    CFrame.superConstructor.call(this, windowId, w_left, w_top, w_width, w_height, zindex);


    me.anchor = CALIGN.LEFT_TOP;

    me.showTitleBar = appearance.showTitleBar;

    me.canvasNetHeight = null;
    me.canvasNetWidth = null;
    me.frameHeightAdjust = appearance.frameHeightAdjust;

    me.frameComponentMap = {};


    //initialize the field
    me.canvas = null;

    //canvas id
    me.myCanvasId = null;

    //Buttons to be placed on the screen (positioning same as the close button)
    me.floatingButton = null;

    me.titleBarClassNameDefault = DEF.CFRAME.TITLE_BAR_CLASS_DEFAULT;
    me.titleBarClassNameFocused = DEF.CFRAME.TITLE_BAR_CLASS_FOCUSED;


    //height of titlebar
    me.titleBarHeight = appearance.titleBarHeight;

    me.titleBarCaption = appearance.titleBarCaption;
    me.titleBarCaptionLeftMargin = appearance.titleBarCaptionLeftMargin;
    me.titleBarCaptionFontSize = appearance.titleBarCaptionFontSize;
    me.titleBarCaptionFontWeight = appearance.titleBarCaptionFontWeight;
    me.titleBarBorderBottomDefault = appearance.titleBarBorderBottomDefault;
    me.titleBarBorderBottomFocused = appearance.titleBarBorderBottomFocused;
    //Title bar width adjustment value
    me.titleAdjustWidth = 2;

    me.windowId = windowId;

    me.exBorderWidth = 0;


    me.myCanvasId = windowId + '_canvas';


    //img element for icon placed on the left-top
    var appIcon = document.createElement('img');
    //		appIcon.src='img/ico_app_file16.gif';

    //url of icon image
    appIcon.src = '';
    appIcon.style.position = 'absolute';
    appIcon.style.left = '2px';
    appIcon.style.top = '2px';
    appIcon.style.width = '16px';
    appIcon.style.height = '16px';
    appIcon.style.visibility = 'hidden';


    //The title bar must be on the front of the canvas.
    me.titleBar = document.createElement('div');

    me.titleBar.className = 'jsframetitlebar';

    if (me.showTitleBar) {

        me.titleBar.id = windowId + '_title';
        me.titleBar.style.position = 'absolute';
        me.titleBar.style.boxSizing = 'border-box';
        me.titleBar.style.top = '0px';
        me.titleBar.style.left = '0px';
        //20180722
        //20180722(画面の右と下に透明部分ができてしまうので、調整値をいれた)
        me.titleBar.style.width = (w_width - me.titleAdjustWidth + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
        me.titleBar.style.userSelect = 'none';


        if (me.titleBarHeight) {

            var titleBarAdjust = 0;

            if (me.titleBarBorderBottomDefault) {
                //titleBarAdjust = -1;
                //タイトルバーがずれてしまう
                titleBarAdjust = 0;
            }


            me.titleBar.style.height = (parseInt(me.titleBarHeight, 10) + 0) + 'px';
        }

        me.titleBar.style.backgroundColor = me.titleBarColorDefault;
        me.titleBar.style.zIndex = 0;

        me.titleBar.style.color = me.titleBarCaptionColorDefault;
        me.titleBar.style.fontSize = me.titleBarCaptionFontSize;
        me.titleBar.style.fontWeight = me.titleBarCaptionFontWeight;
        me.titleBar.style.textShadow = "0 1px 0 rgba(255,255,255,.7)";
        me.titleBar.style.textAlign = 'center';
        me.titleBar.style.lineHeight = me.titleBar.style.height;


        me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
        //me.titleBar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.5)';


        //Set not to display overflow character string
        me.titleBar.style.overflow = 'hidden';


        var titleBarText = document.createTextNode('');

        //'span' to store text
        var titleBarTextSpan = document.createElement('span');

        titleBarTextSpan.id = me.id + '_titleBarText';
        if (me.titleBarCaptionLeftMargin != null) {
            titleBarTextSpan.style.position = 'absolute';
            titleBarTextSpan.style.left = parseInt(me.titleBarCaptionLeftMargin, 10) + 'px';
        } else {
            titleBarTextSpan.style.position = 'absolute';
            titleBarTextSpan.style.left = '0px';
            titleBarTextSpan.style.right = '0px';
        }
        titleBarTextSpan.style.top = '0px';
        titleBarTextSpan.appendChild(titleBarText);
        me.titleBar.appendChild(titleBarTextSpan);

        //Discontinue appicon(20061011)
        //me.titleBar.appendChild(appIcon);
    }

    me.htmlElement.appendChild(me.titleBar);


    //Set Canvas throughout the window

    //parseInt(me.titleBar.style.height);//me.titleBarHeight);
    var canvasMoreHeight = parseInt(me.titleBarHeight, 10) - titleBarAdjust;
    var canvasMoreSpacing = parseInt(me.titleAdjustWidth, 10);

    if (me.showTitleBar) {


    } else {
        canvasMoreHeight = 0;
        canvasMoreSpacing = 0;
        titleBarAdjust = 0;
    }


    me.canvasNetWidth = w_width - canvasMoreSpacing;
    me.canvasNetHeight = w_height - canvasMoreHeight - canvasMoreSpacing - 1 - titleBarAdjust + me.frameHeightAdjust;


    //Change the style of htmlElement of CFrame (CBean).
    me.htmlElement.style.cursor = 'move';


    //Create a canvas
    me.canvas = new CCanvas(me.htmlElement, me.myCanvasId, 0, canvasMoreHeight, w_width - canvasMoreSpacing, w_height - canvasMoreHeight - canvasMoreSpacing);

    me.canvas.canvasElement.style.backgroundColor = DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR;
    me.canvas.canvasElement.style.cursor = 'default';

    //Handling the omousedown event that occurred in Canvas which is a child element of CFrame
    me.canvas.canvasElement.onmousedown = me.canvasMouseDown;

    //Set the canvas as a reference to the parent of the canvas html element canvasElement.
    me.canvas.canvasElement.parentCFrame = me;


    var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
    var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

    var markerWidth = 16;
    var markerHeight = 16;

    //Offset from marker edge
    var edgeMargin = 16;

    //Lower right(R-D)
    var markerRD = new CMarkerWindow(
        me.myCanvasId + '_RD',
        tmpCanvasWidth - markerWidth + edgeMargin,
        tmpCanvasHeight - markerHeight + edgeMargin,
        markerWidth,
        markerHeight,
        0,
        'RD');

    markerRD.htmlElement.style.cursor = 'se-resize';//nw-resize';

    //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
    // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
    markerRD.htmlElement.argX = 0;
    markerRD.htmlElement.argY = 0;


    //Bottom(D-D)
    var markerDD = new CMarkerWindow(
        me.myCanvasId + '_DD',
        0,
        tmpCanvasHeight - markerHeight + edgeMargin,
        tmpCanvasWidth - markerWidth + edgeMargin,
        markerHeight,
        0,
        'DD');

    markerDD.htmlElement.style.cursor = 'n-resize';

    //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
    // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
    markerDD.htmlElement.argX = 0;
    markerDD.htmlElement.argY = 0;

    //Right(R-R)
    var markerRR = new CMarkerWindow(
        me.myCanvasId + '_RR',
        tmpCanvasWidth - markerWidth + edgeMargin,
        0,
        markerWidth,
        tmpCanvasHeight - markerHeight + edgeMargin,
        0,
        'RR');

    markerRR.htmlElement.style.cursor = 'w-resize';

    //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
    // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
    markerRR.htmlElement.argY = 0;
    markerRR.htmlElement.argX = 0;

    //Add size change marker to canvas.
    me.canvas.addBean(markerRD);
    me.canvas.addBean(markerDD);
    me.canvas.addBean(markerRR);

    //Method to remove size change marker (can not resize)
    me.removeMarkers = function () {
        me.canvas.removeBean(markerRD.id);
        me.canvas.removeBean(markerDD.id);
        me.canvas.removeBean(markerRR.id);
        me.htmlElement.style.cursor = 'default';
    };


    me.removeMarkers2 = function () {
        me.canvas.removeBean(markerRD.id);
        me.canvas.removeBean(markerDD.id);
        me.canvas.removeBean(markerRR.id);
    };


    //add frameComponents[begin]
    for (var idx in appearance.frameComponents) {

        var frameComponent = appearance.frameComponents[idx];

        frameComponent.setFrame(me);

        //if frameComponent has special name 'closeButton', it will act as a close button.
        if ('closeButton' == frameComponent.id) {
            frameComponent.htmlElement.onclick = me.close;
        }

        me.addFrameComponent(frameComponent);
    }
    //add frameComponents[end]

    //override the field
    me.htmlElement.style.backgroundColor = 'transparent';

    me.htmlElement.oncontextmenu = this.contextMenu;


    //The policy of Border drawing seems to be different between IE and FF.
    var caribVal = 0;


    me.caribValue = caribVal;

    me.htmlElement.style.borderWidth = me.exBorderWidth + 'px';

    me.htmlElement.style.width = (parseInt(me.htmlElement.style.width, 10) - caribVal) + 'px';
    me.htmlElement.style.height = (parseInt(me.htmlElement.style.height, 10) - caribVal + 1) + 'px';
    me.htmlElement.typeName = 'cwindow';
    me.htmlElement.overflow = 'auto';
    me.htmlElement.style.boxSizing = 'content-box';


    if (appearance.frameBorderStyle) {
        me.htmlElement.style.borderStyle = appearance.frameBorderStyle;
    }

    if (appearance.frameBoxShadow) {
        me.htmlElement.style.boxShadow = appearance.frameBoxShadow;
    }

    //TODO deprecation(because CIfFrame is extended this operation)
    if (parseInt(appearance.frameBorderWidthDefault, 10) > 0) {
        me.htmlElement.style.borderWidth = appearance.frameBorderWidthDefault;
        me.htmlElement.style.borderColor = appearance.frameBorderColorDefault;

    }
    if (parseInt(appearance.frameBorderRadius, 10) > 0) {
        me.htmlElement.style.borderRadius = appearance.frameBorderRadius;
    }

    me.onCloseFrameListener = null;

}


CFrame.prototype.setTitleBarClassName = function (classNameForDefault, classNameForFocused) {
    var me = this;
    if (classNameForDefault) {
        me.titleBarClassNameDefault = classNameForDefault;
        me.titleBarClassNameFocused = classNameForDefault;
    }
    if (classNameForFocused) {
        me.titleBarClassNameFocused = classNameForFocused;
    }
    return me;
};
/**
 * Add frameComponent(Wrapped DOM element like 'div' to display above the frame) to frame
 * @param frameComponent
 */
CFrame.prototype.addFrameComponent = function (frameComponent) {
    var me = this;

    me.frameComponentMap[frameComponent.id] = frameComponent;
    me.canvas.canvasElement.appendChild(frameComponent.htmlElement);
    return me;
};

/**
 * Get stored frame component by id
 * @param frameComponent
 */
CFrame.prototype.getFrameComponentElement = function (id) {
    var me = this;
    return me.frameComponentMap[id].htmlElement;
};

CFrame.prototype.removeFrameComponentById = function (frameComponentId) {
    var me = this;

    var frameComponent = me.frameComponentMap[frameComponentId];

    me.canvas.canvasElement.removeChild(frameComponent.htmlElement);
    delete me.frameComponentMap[frameComponentId];
};
CFrame.prototype.setTitle = function (str) {
    var me = this;
    if (me.showTitleBar) {

        var textNode = document.createTextNode(str);
        //firstChildのfirstChildがspan
        me.titleBar.firstChild.replaceChild(textNode, me.titleBar.firstChild.firstChild);
    }
    return me;
};

CFrame.prototype.resize = function (deltaLeft, deltaTop, deltaWidth, deltaHeight) {
    var me = this;

    var tmpLeft = parseInt(me.htmlElement.style.left, 10);
    var tmpTop = parseInt(me.htmlElement.style.top, 10);
    var tmpWidth = parseInt(me.htmlElement.style.width, 10);
    var tmpHeight = parseInt(me.htmlElement.style.height, 10);

    me.htmlElement.style.left = parseInt(tmpLeft + deltaLeft, 10) + 'px';
    me.htmlElement.style.top = parseInt(tmpTop + deltaTop, 10) + 'px';

    me.htmlElement.style.width = parseInt(tmpWidth + deltaWidth, 10) + 'px';
    me.htmlElement.style.height = parseInt(tmpHeight + deltaHeight, 10) + 'px';

    var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
    var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

    //Since canvasElement is a (0, 0) relative coordinate with respect to the parent element,
    // so it is not necessary to change left and top.
    me.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
    me.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';

    if (me.showTitleBar) {

        //Change the size of the title bar. TitleAdjustWidth etc.
        //The reason why you do not have to use titleAdjustWidth is because
        // these scaling are done with differences (deltaX, deltaY).
        //Therefore, if you adjust with the titleAdjustWidth as
        // the initial value, the other will stretch relative.
        //You do not think you can use ifDelta
        me.titleBar.style.width = (tmpCanvasWidth + deltaWidth) + 'px';

    } else {


    }


    for (var beanName in me.canvas.beanList) {
        var tmpBean = me.canvas.beanList[beanName];

        if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {
            if (tmpBean.htmlElement.usage == 'RD') {
                //Move the size change lower right(RD) marker according to the amount of movement.
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'DD') {
                //Move the size change lower marker according to the movement amount.
                // Do not move left.Only the width wil increase or decrease.
                tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width, 10) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'RR') {
                //Move the size change right marker according to the movement amount
                //Do not move top,Only the height will increase or decrease.
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height, 10) + deltaHeight) + 'px';
            }

        }
    }
};


CFrame.prototype.canvasMouseDown = function (e) {
    var me = this;

    //Mousedown processing of CFrame.canvas

    //'This' in this method indicates 'Cwindow.canvas.canvasElement'.
    if (this.parentCFrame.parentCanvas.mouseDownSource == null) {
        this.parentCFrame.parentCanvas.mouseDownSource = 'childcanvas';
    }


};
CFrame.prototype.mouseUp = function (e) {
    this.canvas.mouseUp(e);
};

CFrame.prototype.close = function (e) {
    //Close processing of CFrame from CloseButton
    this.parentObject.parentCanvas.removeBean(this.parentObject.id);
};

CFrame.prototype.closeFrame = function (e) {
    //Close processing of CFrame
    var me = this;

    this.parentCanvas.removeBean(me.windowId);
    if (me.onCloseFrameListener) {
        me.onCloseFrameListener(me);
    }
};

CFrame.prototype.setOnCloseFrameListener = function (listener) {
    var me = this;
    me.onCloseFrameListener = listener;

};

CFrame.prototype.contextMenu = function () {
    //If you issue the right-click menu in the window, set the source to CFrame.
    var contextMenuSource = 'CFrame';
    return false;
};


CFrame.prototype.setTitleBarTextColor = function (str) {
    var me = this;
    me.titleBar.style.color = str;
};

CFrame.prototype.setPosition = function (x, y, anchor) {
    var me = this;

    var frameWidth = me.getWidth();
    var frameHeight = me.getHeight();

    me._setPositionInternally(x, y, anchor, frameWidth, frameHeight);

    return me;
};
CFrame.prototype._setPositionInternally = function (x, y, anchor, frameWidth, frameHeight) {
    var me = this;

    if (anchor) {
        me.anchor = anchor;
    }

    if (!anchor || CALIGN.LEFT_TOP == anchor) {
        me.htmlElement.style.left = x + 'px';
        me.htmlElement.style.top = y + 'px';
    }
    else if (CALIGN.HCENTER_TOP == anchor) {
        me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
        me.htmlElement.style.top = y + 'px';
    }
    else if (CALIGN.RIGHT_TOP == anchor) {
        me.htmlElement.style.left = (-frameWidth + x) + 'px';
        me.htmlElement.style.top = y + 'px';
    }
    else if (CALIGN.LEFT_VCENTER == anchor) {
        me.htmlElement.style.left = x + 'px';
        me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
    }
    else if (CALIGN.HCENTER_VCENTER == anchor) {
        me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
        me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
    }
    else if (CALIGN.RIGHT_VCENTER == anchor) {
        me.htmlElement.style.left = (-frameWidth + x) + 'px';
        me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
    }
    else if (CALIGN.LEFT_BOTTOM == anchor) {
        me.htmlElement.style.left = x + 'px';
        me.htmlElement.style.top = (-frameHeight + y) + 'px';
    }
    else if (CALIGN.HCENTER_BOTTOM == anchor) {
        me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
        me.htmlElement.style.top = (-frameHeight + y) + 'px';
    }
    else if (CALIGN.RIGHT_BOTTOM == anchor) {
        me.htmlElement.style.left = (-frameWidth + x) + 'px';
        me.htmlElement.style.top = (-frameHeight + y) + 'px';
    }
};

/**
 * Returns relative position with anchor
 * @returns {{x: *, y: *, anchor: *}}
 */
CFrame.prototype.getPosition = function () {
    var me = this;
    var frameWidth = me.getWidth();
    var frameHeight = me.getHeight();
    var x;
    var y;
    var anchor = me.anchor;
    if (!anchor || CALIGN.LEFT_TOP == anchor) {
        x = parseInt(me.htmlElement.style.left, 10);
        y = parseInt(me.htmlElement.style.top, 10);
    }
    else if (CALIGN.HCENTER_TOP == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
        y = parseInt(me.htmlElement.style.top, 10);
    }
    else if (CALIGN.RIGHT_TOP == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
        y = parseInt(me.htmlElement.style.top, 10);
    }
    else if (CALIGN.LEFT_VCENTER == anchor) {
        x = parseInt(me.htmlElement.style.left, 10);
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
    }
    else if (CALIGN.HCENTER_VCENTER == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
    }
    else if (CALIGN.RIGHT_VCENTER == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
    }
    else if (CALIGN.LEFT_BOTTOM == anchor) {
        x = parseInt(me.htmlElement.style.left, 10);
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
    }
    else if (CALIGN.HCENTER_BOTTOM == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
    }
    else if (CALIGN.RIGHT_BOTTOM == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
    }
    return {x: x, y: y, anchor: anchor};
};

CFrame.prototype.getLeft = function () {
    var me = this;
    return parseInt(me.htmlElement.style.left, 10);
};


CFrame.prototype.getTop = function () {
    var me = this;
    return parseInt(me.htmlElement.style.top, 10);
};
CFrame.prototype.getWidth = function () {
    var me = this;
    return parseInt(me.htmlElement.style.width, 10);
};
CFrame.prototype.getHeight = function () {
    var me = this;
    return parseInt(me.htmlElement.style.height, 10);
};

CFrame.prototype.setSize = function (width, height) {
    var me = this;

    me.resize(0, 0, width - me.getWidth(), height - me.getHeight(), true);
    return me;
};

CFrame.prototype.getWindowId = function () {
    var me = this;
    return me.windowId
};

CFrame.prototype.getName = function () {
    var me = this;
    return me.property.name;
};

CFrame.prototype.setName = function (name) {
    var me = this;
    me.property.name = name;
};
/**
 * end of CFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CIfFrame, CFrame);

/**
 * CIfFrame class
 * Extension class with contents frame of CFrame as iframe
 * @param windowId
 * @param appearance
 * @constructor
 */
function CIfFrame(windowId, left, top, width, height, appearance) {


    var wleft = left;
    var wtop = top;
    var wwidth = width;
    var wheight = height;
    var zindex = appearance.zindex;
    var wborderwidth = null;


    var me = this;


    this.minFrameWidth = 128;
    this.minWindowHeight = 32;

    /**
     * If this value is true, the focus will move when tapping the iframe area,
     * but if the window do not have the focus, you can not click on the element in the iframe.
     */
    this.overrayTransparentScreenEnabled = false;

    /**
     *  Only in the case of resizing a transparent screen can be displayed on the iframe
     *  and the size can be adjusted smoothly.
     *  true is recommended.
     */
    this.overrayTransparentScreenOnResize = true;


    this.titleBarColorFocused = appearance.titleBarColorFocused;
    this.titleBarColorDefault = appearance.titleBarColorDefault;

    this.titleBarCaptionColorDefault = appearance.titleBarCaptionColorDefault;
    this.titleBarCaptionColorFocused = appearance.titleBarCaptionColorFocused;

    //call super constructor
    CIfFrame.superConstructor.call(me, windowId, wleft, wtop, wwidth, wheight, zindex, wborderwidth, appearance);

    //border color
    me.frameBorderColorDefault = appearance.frameBorderColorDefault;
    me.frameBorderColorFocused = appearance.frameBorderColorFocused;

    //border width
    me.frameBorderWidthDefault = appearance.frameBorderWidthDefault;
    me.frameBorderWidthFocused = appearance.frameBorderWidthFocused;


    me.iframe = null;


    //Offset value for width adjustment of iframe
    me.ifDelta = 0;

    me.resizable = true;


    me.onMouseMoveOnIframe = null;
    me.onMouseUpOnIframe = null;

    me._hasFocus = false;
    me._hasFocusTime = 0;


    me.htmlElement.typeName = 'cifwindow';

    //name of iframe
    var exIframeName = 'riversun_' + windowId;


    me.dframe = document.createElement('div');


    me.iframe = document.createElement('iframe');


    me.iframe.name = exIframeName;

    me.iframe.id = exIframeName;

    me.iframe.frameBorder = '0';
    me.iframe.scrolling = 'no';

    me.iframe.zIndex = -1;

    //Allow transparent of iframe background.
    me.iframe.allowTransparency = 'true';
    me.iframe.width = me.canvasNetWidth - me.ifDelta + 0;
    me.iframe.height = me.canvasNetHeight - me.ifDelta + 0;

    me.showTitleBar = appearance.showTitleBar;

    me.getFrameInnerBorderRadius = appearance.getFrameInnerBorderRadius;

    me.frameBorderRadius = appearance.frameBorderRadius;


    me.adjustFrameBorderRadius();

    me.useIframe = false;


    me.canvas.canvasElement.appendChild(me.iframe);

    me.canvas.canvasElement.appendChild(me.dframe);


    this.setUseIframe = function (useIframe) {
        me.useIframe = useIframe;
        me.iframe.style.visibility = 'hidden';
        me.iframe.style.position = 'absolute';
        me.iframe.style.left = '0px';
        me.iframe.style.top = '0px';
        me.iframe.style.width = '100%';
        me.iframe.style.height = '100%';

        me.dframe.style.visibility = 'hidden';
        me.dframe.style.position = 'absolute';
        me.dframe.style.left = '0px';
        me.dframe.style.boxSizing = "content-box";

        me.dframe.style.top = '0px';
        me.dframe.style.width = '100%';
        me.dframe.style.height = '100%';
        //me.dframe.style.borderStyle="solid";
        me.dframe.style.backgroundColor = "white";


        if (useIframe) {
            me.iframe.style.visibility = 'visible';
            me.dframe.style.visibility = 'hidden';
        } else {


            me.iframe.style.visibility = 'hidden';
            me.dframe.style.visibility = 'visible';
        }
    };

    me.setUseIframe(appearance.useIframe);

    //If it is IE, set the canvasElement of the canvas which is the parent of the iframe to transparent.

    if (me.overrayTransparentScreenEnabled || me.overrayTransparentScreenOnResize) {
        //Create a transparent screen.
        me.transparence = document.createElement('span');
        //me.transparence.style.backgroundImage = 'url(img/img_baron_tp.gif)';

        me.transparence.style.position = 'absolute';
        me.transparence.style.left = '0px';
        me.transparence.style.top = '0px';

        //Transparent screen is 0px when creating window
        me.transparence.style.width = '0px';
        me.transparence.style.height = '0px';

        me.transparence.style.zIndex = 4;
        me.transparence.style.borderWidth = '0px';
        me.transparence.style.borderColor = '#ff00ee';
        //this.transparence.style.borderStyle='none';
        me.transparence.style.cursor = 'default';

        me.canvas.canvasElement.style.backgroundColor = appearance.frameBackgroundColor;


        me.canvas.canvasElement.appendChild(me.transparence);
    }

}


CIfFrame.prototype.getFrameView = function () {
    var me = this;
    return me.dframe;
};


CIfFrame.prototype.setHTML = function (html) {
    var me = this;
    me.dframe.innerHTML = html;
};

/**
 * find DOM Element in the frame by querySelector<br>
 *  Examples<br>
 *      frame.$("#my_id_name");
 *      frame.$(".my_class_name");
 *      frame.$("div>img");
 *      frame.$("input[type='submit]");
 * @param q
 * @returns {Node}
 */
CIfFrame.prototype.$ = function (q) {
    var me = this;

    if (me.useIframe) {
        var docInIframe = me.iframe.contentWindow.document;
        return docInIframe.querySelector(q);

    } else {

        return me.dframe.querySelector(q);

    }
};


CIfFrame.prototype.adjustFrameBorderRadius = function () {
    var me = this;

    if (parseInt(me.frameBorderRadius, 10) > 0) {

        var innerBorderRadius = me.getFrameInnerBorderRadius(me, me._hasFocus);

        if (me.showTitleBar) {

            //title bar exists
            me.canvas.canvasElement.style.borderBottomRightRadius = innerBorderRadius;
            me.canvas.canvasElement.style.borderBottomLeftRadius = innerBorderRadius;
            me.iframe.style.borderBottomRightRadius = innerBorderRadius;
            me.iframe.style.borderBottomLeftRadius = innerBorderRadius;

            me.titleBar.style.borderTopLeftRadius = innerBorderRadius;
            me.titleBar.style.borderTopRightRadius = innerBorderRadius;


        } else {

            //title bar not exits
            me.canvas.canvasElement.style.borderRadius = innerBorderRadius;
            me.iframe.style.borderRadius = innerBorderRadius;

        }

        if (me.dframe) {
            me.dframe.style.borderBottomRightRadius = innerBorderRadius;
            me.dframe.style.borderBottomLeftRadius = innerBorderRadius;
        }


    }
};

CIfFrame.prototype.handleReleasingFocus = function (e) {
    var me = this;
    me._hasFocus = false;

    me.titleBar.style.backgroundColor = me.titleBarColorDefault;
    me.titleBar.style.color = me.titleBarCaptionColorDefault;

    //border color
    if (me.frameBorderColorDefault) {
        me.htmlElement.style.borderColor = me.frameBorderColorDefault;
    }

    //border width
    if (me.frameBorderWidthDefault) {
        me.htmlElement.style.borderWidth = me.frameBorderWidthDefault;
        me.adjustFrameBorderRadius();
    }

    if (me.htmlElement.typeName == 'cifwindow') {
        if (me.overrayTransparentScreenEnabled) {
            me.transparence.style.width = parseInt(me.iframe.width, 10) + 'px';
            me.transparence.style.height = parseInt(me.iframe.height, 10) + 'px';
        }
    }

    //handling for child frameComponents
    for (var frameComponentId in me.frameComponentMap) {
        var frameComponent = me.frameComponentMap[frameComponentId];
        frameComponent.handleReleasingFocus()
    }

    //border bottom
    if (me.titleBarBorderBottomDefault) {
        me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
    }


    //update style class
    me.titleBar.className = me.titleBarClassNameDefault;

    return me;
};

CIfFrame.prototype.handleTakingFocus = function (e) {
    var me = this;
    me._hasFocus = true;
    me._hasFocus = Date.now();

    if (me.overrayTransparentScreenEnabled) {
        //close transparence screen
        me.transparence.style.width = '0px';
        me.transparence.style.height = '0px';
    }

    me.titleBar.style.backgroundColor = me.titleBarColorFocused;
    me.titleBar.style.color = me.titleBarCaptionColorFocused;


    //border color
    if (me.frameBorderColorFocused) {
        me.htmlElement.style.borderColor = me.frameBorderColorFocused;
    }

    //border width
    if (me.frameBorderWidthFocused) {
        me.htmlElement.style.borderWidth = me.frameBorderWidthFocused;
        me.adjustFrameBorderRadius();
    }

    //border bottom
    if (me.titleBarBorderBottomFocused) {
        me.titleBar.style.borderBottom = me.titleBarBorderBottomFocused;
    }

    //handling for child frameComponents
    for (var frameComponentId in me.frameComponentMap) {
        var frameComponent = me.frameComponentMap[frameComponentId];
        frameComponent.handleTakingFocus()
    }


    //update style class
    me.titleBar.className = me.titleBarClassNameFocused;
    return me;
};


CIfFrame.prototype.show = function () {
    var me = this;
    me.htmlElement.style.visibility = 'visible';
    me.requestFocus();
    return me;
};

CIfFrame.prototype.hide = function () {
    var me = this;
    me.htmlElement.style.visibility = 'hidden';
    return me;
};

//Overriding CBeanFrame.prototype.onmouseDown
CIfFrame.prototype.onmouseDown = function (e) {

    var refHtmlElement = this;

    //Do not select it when dragging by the mouse.
    document.body.ondrag = function () {
        return false;
    };
    // document.body.onselectstart = function () {
    //     return false;
    // };


    //Override decorator with onmouseDown of parent class
    refHtmlElement.decorator = CFrame.prototype.onmouseDown;
    refHtmlElement.decorator(e);

    //Deploy a transparent screen.
    // Since mouseDown is pointed to this.htmlElement.onmousedown in the CBean class,
    // this 'this' will indicate this.htmlElement.
    //In other words,
    //if you want to refer 'CIfFrame',you need to specify 'this.parent.'
    //See CBeanFrame class, you can find 'this.htmlElement.parent = this'
    var refCIfFrame = refHtmlElement.parent;


    var refCWindowManager = refHtmlElement.parentCanvas;

    //When somewhere window(CFrame,CIfFrame) fires 'mouseDown',
    // Close all transparency screens so that the mouse cursor can pass over any iFrame
    for (var windowId in refCWindowManager.beanList) {
        var objCIfFrame = refCWindowManager.beanList[windowId];
        if (windowId == refCIfFrame.getWindowId()) {
            //skip
        } else {
            objCIfFrame.handleReleasingFocus();
        }
    }

    refCIfFrame.handleTakingFocus();

};

CIfFrame.prototype.mouseUp = function (e) {
    var refCIfFrame = this;


    if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
        if (refCIfFrame.parentCanvas.onTopObject == refCIfFrame) {
            //Minimize the window at the front.
            refCIfFrame.transparence.style.width = '0px';
            refCIfFrame.transparence.style.height = '0px';
        } else {
            //The window which is not the at the front expands the screen so that it can respond to clicks.

            if (refCIfFrame.overrayTransparentScreenEnabled) {
                refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
                refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
            }
        }
    }

    refCIfFrame.decorator = CFrame.prototype.mouseUp;
    refCIfFrame.decorator(e);


    //Cancel selecting "Do not select when dragging mouse while releasing button" is canceled
    document.body.ondrag = null;
    document.body.onselectstart = null;

};

CIfFrame.prototype.setMinFrameSize = function (width, height) {
    var me = this;
    me.minFrameWidth = width;
    me.minWindowHeight = height;
};

CIfFrame.prototype.resize = function (deltaLeft, deltaTop, deltaWidth, deltaHeight, byUser) {

    var refCIfFrame = this;


    if (!refCIfFrame.resizable) {
        return null;
    }


    //Resize processing should be overridden directly rather than adopting a decorator pattern because it has better performance.
    var tmpLeft = parseInt(refCIfFrame.htmlElement.style.left, 10);
    var tmpTop = parseInt(refCIfFrame.htmlElement.style.top, 10);
    var tmpWidth = parseInt(refCIfFrame.htmlElement.style.width, 10);
    var tmpHeight = parseInt(refCIfFrame.htmlElement.style.height, 10);

    //Important logic to handle the minimum of Window well
    if (byUser && (tmpWidth + deltaWidth < refCIfFrame.minFrameWidth & deltaWidth < 0)) {
        //Minimum adjustment of width
        refCIfFrame.htmlElement.style.width = tmpWidth + 'px';
        deltaWidth = 0;
    }

    if (byUser && (tmpHeight + deltaHeight < refCIfFrame.minWindowHeight & deltaHeight < 0)) {
        //Minimum adjustment of height
        refCIfFrame.htmlElement.style.height = tmpHeight;
        deltaHeight = 0;
    }
    refCIfFrame.htmlElement.style.left = (tmpLeft + deltaLeft) + 'px';
    refCIfFrame.htmlElement.style.top = (tmpTop + deltaTop) + 'px';
    refCIfFrame.htmlElement.style.width = (tmpWidth + deltaWidth) + 'px';
    refCIfFrame.htmlElement.style.height = (tmpHeight + deltaHeight) + 'px';


    var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width, 10);
    var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height, 10);

    //Since canvasElement is a (0, 0) relative coordinate with respect
    // to the parent element, it is not necessary to change left and top.
    refCIfFrame.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
    refCIfFrame.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';

    //Change the size of the title bar. TitleAdjustWidth etc.
    // The reason why you do not have to use titleAdjustWidth is
    // because these scaling are done with differences (deltaX, deltaY).
    //Therefore, if you adjust with the titleAdjustWidth
    // as the initial value, the other will stretch relative.
    refCIfFrame.titleBar.style.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';

    //Image resizing for iframe that is the child element of canvas
    refCIfFrame.iframe.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';
    refCIfFrame.iframe.height = (tmpCanvasHeight - refCIfFrame.ifDelta + deltaHeight + refCIfFrame.frameHeightAdjust) + 'px';


    if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
        //Deploy a transparent screen.
        refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
        refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
    }

    //move frameComponent(like closeButton) corresponding to moving window edge for resize
    for (var frameComponentId in refCIfFrame.frameComponentMap) {
        var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
        //update alignment of frameComponent corresponding to moving window edge for resize
        frameComponent.updateAlign()
    }


    for (var beanName in refCIfFrame.canvas.beanList) {
        var tmpBean = refCIfFrame.canvas.beanList[beanName];

        if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

            if (tmpBean.htmlElement.usage == 'RD') {
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'DD') {
                tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'RR') {
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height) + deltaHeight) + 'px';
            }
        }
    }
};//resize

CIfFrame.prototype.resizeDirect = function (width, height, byUser) {

    var refCIfFrame = this;


    if (!refCIfFrame.resizable) {
        return null;
    }

    refCIfFrame.htmlElement.style.width = width + 'px';
    refCIfFrame.htmlElement.style.height = height + 'px';


    var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width);
    var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height);

    //Since canvasElement is a (0, 0) relative coordinate with respect
    // to the parent element, it is not necessary to change left and top.
    refCIfFrame.canvas.canvasElement.style.width = width + 'px';
    refCIfFrame.canvas.canvasElement.style.height = (height - refCIfFrame.titleBar.style.height) + 'px';

    //Change the size of the title bar. TitleAdjustWidth etc.
    // The reason why you do not have to use titleAdjustWidth is
    // because these scaling are done with differences (deltaX, deltaY).
    //Therefore, if you adjust with the titleAdjustWidth
    // as the initial value, the other will stretch relative.
    refCIfFrame.titleBar.style.width = (width - refCIfFrame.ifDelta) + 'px';

    //Image resizing for iframe that is the child element of canvas
    refCIfFrame.iframe.width = width - refCIfFrame.ifDelta + 'px';
    refCIfFrame.iframe.height = height - refCIfFrame.ifDelta + refCIfFrame.frameHeightAdjust + 'px';


    if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
        //Deploy a transparent screen.
        refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
        refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
    }

    //move frameComponent(like closeButton) corresponding to moving window edge for resize
    for (var frameComponentId in refCIfFrame.frameComponentMap) {
        var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
        //update alignment of frameComponent corresponding to moving window edge for resize
        frameComponent.updateAlign()
    }


    for (var beanName in refCIfFrame.canvas.beanList) {
        var tmpBean = refCIfFrame.canvas.beanList[beanName];

        if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

            if (tmpBean.htmlElement.usage == 'RD') {
                tmpBean.htmlElement.style.left = width + 'px';// parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
                tmpBean.htmlElement.style.top = height + 'px';//parseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'DD') {
                tmpBean.htmlElement.style.width = width + 'px';
                tmpBean.htmlElement.style.top = height + 'px';//heightparseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'RR') {
                tmpBean.htmlElement.style.left = width + 'px';//+parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
                tmpBean.htmlElement.style.height = height + 'px';
            }
        }
    }
};//resize

/**
 * Focus on this frame
 */
CIfFrame.prototype.requestFocus = function () {


    var me = this;

    var beanList = me.parentCanvas.beanList;

    for (var windowId in beanList) {

        var tmpIfWindow = beanList[windowId];

        //If it's my own window, minimize the transparent screen and change the color of the title bar.
        if (windowId == me.getWindowId()) {

            //if this frame is a target frame
            tmpIfWindow.handleTakingFocus();
        }
        else {

            //if this frame is NOT a target frame
            tmpIfWindow.handleReleasingFocus();
        }
    }

    me.parentCanvas.pullUp(me.id);

};

/**
 * URL for iframe
 * @param url
 */
CIfFrame.prototype.setUrl = function (url) {

    var me = this;

    return new Promise(function (resolve, reject) {


        if (url) {
            me.setUseIframe(true);
        } else {
            me.setUseIframe(false);
            resolve();
        }


        me.iframe.src = url;

        me.iframe.onload = function () {

            //mouse move
            me.iframe.contentWindow.document.onmousemove = function (e) {
                var frameLeft = me.getLeft();
                var frameTop = me.getTop();

                var eventFromIframe = document.createEvent('MouseEvents');
                eventFromIframe.initMouseEvent('mousemove', true, false, window, e.detail, e.screenX, e.screenY, (e.pageX + frameLeft), (e.pageY + frameTop),
                    e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

                //smooth dragging during iframe mode
                me.parentCanvas.windowMouseMove(eventFromIframe);

                if (me.onMouseMoveOnIframe) {
                    me.onMouseMoveOnIframe(eventFromIframe);
                }
            };

            //mouse up
            me.iframe.contentWindow.document.onmouseup = function (e) {
                var frameLeft = me.getLeft();
                var frameTop = me.getTop();

                var eventFromIframe = document.createEvent('MouseEvents');
                eventFromIframe.initMouseEvent('mouseup', true, false, window, e.detail, e.screenX, e.screenY, (e.pageX + frameLeft), (e.pageY + frameTop),
                    e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

                //smooth dragging during iframe mode
                me.parentCanvas.windowMouseUp(eventFromIframe);

                if (me.onMouseUpOnIframe) {
                    me.onMouseUpOnIframe(eventFromIframe);
                }

            };


            resolve(me.iframe.contentWindow.document);
        };


    });


};


/**
 * Returns DOM-document of iframe
 * @returns {*|HTMLDocument}
 */
CIfFrame.prototype.getIfDocument = function () {
    var me = this;
    return me.iframe.contentWindow.document;
};

CIfFrame.prototype.setScrolling = function (str) {
    var me = this;
    me.iframe.scrolling = str;
};

CIfFrame.prototype.getScrolling = function (str) {
    var me = this;
    return me.iframe.scrolling
};


CIfFrame.prototype.setResizable = function (enabled) {
    var me = this;

    me.resizable = enabled;
    if (!enabled) {
        me.removeMarkers2();
    }
    return me;
};
/**
 * end of CIFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CWindowManager, CCanvas);

/**
 * CWindowManager class
 * <p>
 * A canvas class that displays multiple frames. Handle events on the window to coordinate multiple windows<br>
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CWindowManager(parentElement, canvasId, left, top, width, height) {
    CWindowManager.superConstructor.call(this, parentElement, canvasId, left, top, width, height);
    var me = this;

    document.body.addEventListener("click", function (evt) {
        for (var windowId in me.beanList) {
            var beanFrame = me.beanList[windowId];
            beanFrame.onBodyClicked(evt)
        }

    });
}

CWindowManager.prototype.getWindow = function (windowId) {
    var me = this;
    return me.beanList[windowId];
};

//Wrapping the 'addBean' of the parent class
CWindowManager.prototype.addWindow = function (window) {
    var me = this;

    //20180724
    var windowId = window.getWindowId();
    var name = window.getName();
    me.beanIdName[windowId] = name;
    me.beanNameId[name] = windowId;

    me.addBean(window);
};

//20180724 if contains window named specified name
CWindowManager.prototype.containsWindowName = function (name) {
    var me = this;


    var windowId = me.beanNameId[name];

    if (windowId) {
        return true;
    }
};

//20180724
CWindowManager.prototype.getWindowByName = function (name) {
    var me = this;
    var windowId = me.beanNameId[name];

    if (windowId) {
        return me.getWindow(windowId);
    } else {
        return null;
    }
};

//Wrapping the 'mouseMove' method of the parent class
CWindowManager.prototype.windowMouseMove = function (e) {
    var me = this;
    if (me.currentObject == null) {

        return null;
    }

    var childWindowMoved = false;

    //Loop processing of each CWindow held by CWindowManager
    var beanList = me.beanList;

    for (var windowId in  beanList) {

        var targetWindow = beanList[windowId];


        //Since this 'mouseMove' is canvas of CWindow's 'mouseMove',so do move CBeanFrames in the canvas.
        var eventData = targetWindow.canvas.mouseMove(e);

        //Whether any one of the beans in the Canvas has moved or not.
        //Yes.(When it moves), eventData is set.
        //NO. If it does not move it is set to null.
        childWindowMoved = childWindowMoved | (eventData != null);
        if (eventData != null) {

            //If it is the marker for resizing
            if (eventData.targetTypeName == 'cmarkerwindow') {

                var targetObject = eventData.targetObject;

                if (targetObject.usage == 'RD') {
                    targetWindow.resize(0, 0, eventData.deltaX, eventData.deltaY, true);
                }

                else if (targetObject.usage == 'DD') {
                    targetWindow.resize(0, 0, 0, eventData.deltaY, true);
                }

                else if (targetObject.usage == 'RR') {
                    targetWindow.resize(0, 0, eventData.deltaX, 0, true);
                }

            }
        }
    }

    //If any one of the beans in the Canvas has moved.Do not do 'Cwindow's mouseMove'
    if (!childWindowMoved && this.mouseDownSource != 'childcanvas') {

        //Moving logic for CWindow which is holded by CWindowManager as a child window.
        me.mouseMove(e);
    }

};

//Wrapping the method 'mouseUp' of the parent class
CWindowManager.prototype.windowMouseUp = function (e) {
    var me = this;

    //run 'mouseUp' of parent class
    me.mouseUp(e);

    var beanList = me.beanList;

    for (var windowId in  beanList) {

        var objWindow = beanList[windowId];

        //run CWindow's 'mouseUp'(it's child window).
        objWindow.mouseUp(e);
    }

};

/**
 * (override CCanvas.removeBean)
 * @param windowId
 */
CWindowManager.prototype.removeBean = function (windowId) {


    var me = this;

    //Retrieve the target beanFrame
    var beanList = me.beanList;
    var targetBean = beanList[windowId];

    if (targetBean == null) {
        return;
    }

    var removeTargetBeanHasFocus = targetBean._hasFocus;


    //Remove bean's htmlElement from canvasElement
    me.canvasElement.removeChild(targetBean.htmlElement);

    //Delete the bean object in the associative array.
    delete beanList[windowId];

    //20180724[start]
    var beanName = me.beanIdName[windowId];
    if (beanName) {
        //-if bean name exist
        delete me.beanIdName[windowId];
        delete me.beanNameId[beanName];
    }
    //20180724[end]


    //focus on last focused window after removing
    var maxFocusTime = 0;
    var lastFocusedFrame = null;

    if (removeTargetBeanHasFocus) {
        for (var windowId in beanList) {
            var frame = beanList[windowId];
            if (maxFocusTime <= frame._hasFocusTime) {
                maxFocusTime = frame._hasFocusTime;
                lastFocusedFrame = frame;
            }
        }
        if (lastFocusedFrame) {
            lastFocusedFrame.requestFocus();
        }
    }
};
/**
 * end of CWindowManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

inherit(CMarkerWindow, CBeanFrame);

/**
 * CMarkerWindow class
 * @param windowId
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @param usage
 * @constructor
 */
function CMarkerWindow(windowId, left, top, width, height, zindex, usage) {

    var me = this;

    CMarkerWindow.superConstructor.call(this, windowId, left, top, width, height, zindex, usage);

    me.htmlElement.typeName = 'cmarkerwindow';
    me.htmlElement.usage = usage;
    me.htmlElement.isRangeLimited = false;
    me.htmlElement.style.borderStyle = 'none';
    me.htmlElement.style.zIndex = 1;

}

/**
 * End of CMarkerWindow class
 * @constructor
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * FrameManager class
 * @constructor
 */
function JSFrame(parentElement) {

    var me = this;


    document.onmouseup = mouseUp;
    document.onmousemove = mouseMove;

    if (!parentElement) {
        parentElement = document.body;
    }


    me.windowManager = new CWindowManager(parentElement, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
    //me.windowManager = new CWindowManager(document.body, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
    me.domPartsBuilder = null;


    function mouseUp(e) {
        me.windowManager.windowMouseUp(e);
    }

    function mouseMove(e) {
        me.windowManager.windowMouseMove(e);
        var globalMouseX = e.pageX;
        var globalMouseY = e.pageY;
    }


}

JSFrame.prototype.getDomPartsBuilder = function () {
    var me = this;

    if (!me.domPartsBuilder) {
        me.domPartsBuilder = new CDomPartsBuilder();
    }
    return me.domPartsBuilder;
};


/**
 * Create a new window
 *
 * @returns {CIfFrame}
 */
JSFrame.prototype.createFrame = function (left, top, width, height, appearance, properties) {
    var me = this;

    if (!appearance) {
        appearance = me.createFrameAppearance();
    }

    appearance.initialize();

    var windowId = 'window_' + me.generateUUID();

    var frame = new CIfFrame(windowId, left, top, width, height, appearance);

    if (properties && properties.windowName) {
        frame.setName(properties.windowName);
    }
    frame.hide();

    me.windowManager.addWindow(frame);


    return frame;

};

//20180724 just Wrapped windowmanager#containsWindowName
JSFrame.prototype.containsWindowName = function (windowName) {
    var me = this;
    return me.windowManager.containsWindowName(windowName);
};
//20180724 just Wrapped windowmanager#getWindowByName
JSFrame.prototype.getWindowByName = function (windowName) {
    var me = this;
    return me.windowManager.getWindowByName(windowName);
};

JSFrame.prototype.generateUUID = function () {

    var unixTime = Date.now();

    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (unixTime + Math.random() * 16) % 16 | 0;
        unixTime = Math.floor(unixTime / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;

};

JSFrame.prototype.createFrameAppearance = function () {
    return new CFrameAppearance();
};

JSFrame.prototype.createAnimator = function () {

    return new CSimpleLayoutAnimator();
};
/**
 * end of FrameManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * CFrameComponent class
 * <p>
 * Wrapped DOM element like 'div' to display above the frame<br>
 *
 * ex.An object such as closeButton
 *
 * @param id
 * @param frame
 * @param htmlElement DOM-element
 * @param x relative x-position in the frame respect to align
 * @param y relative y-position in the frame respect to align
 * @param align relative alignment in the frame
 * @constructor
 */
function CFrameComponent(id, htmlElement, x, y, align) {
    var me = this;

    me.id = id;
    me.x = x;
    me.y = y;
    me.frame = null;

    me._focusTakingCallabck = null;
    me._focusReleasingCallabck = null;

    if (align) {
        me.frameComponentAlign = align;
    } else {
        me.frameComponentAlign = CALIGN.LEFT_TOP;
    }

    me.htmlElement = htmlElement;
    me.htmlElement.style.zIndex = 50;

}

CFrameComponent.prototype.setFocusCallback = function (focusTakingCallback, focusReleasingCallback) {
    var me = this;
    me._focusTakingCallabck = focusTakingCallback;
    me._focusReleasingCallabck = focusReleasingCallback;
};

/**
 * Set parent frame of this frameComponent
 * @param frame
 */
CFrameComponent.prototype.setFrame = function (frame) {
    var me = this;

    me.frame = frame;
    me.htmlElement.parentObject = frame;
    me.updateAlign();
};

/**
 * Place the FrameComponent relative to the parent's frame.
 * Relocate relative to parent frame when window resize event occurs
 */
CFrameComponent.prototype.updateAlign = function () {

    var me = this;

    var frameComponentAlign = me.frameComponentAlign;

    var frame = me.frame;
    var eleStyle = me.htmlElement.style;
    eleStyle.userSelect = 'none';

    var x = me.x;
    var y = me.y;

    var frameWidth = frame.getWidth();
    var frameHeight = frame.getHeight();
    var eleStyleWidth = eleStyle.width;
    var eleStyleHeight = eleStyle.height;

    if (CALIGN.LEFT_TOP == frameComponentAlign) {
        eleStyle.left = x + 'px';
        eleStyle.top = y + 'px';
    }
    else if (CALIGN.HCENTER_TOP == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
        eleStyle.top = y + 'px';
    }
    else if (CALIGN.RIGHT_TOP == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
        eleStyle.top = y + 'px';
    }
    else if (CALIGN.LEFT_VCENTER == frameComponentAlign) {
        eleStyle.left = x + 'px';
        eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
    }
    else if (CALIGN.HCENTER_VCENTER == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
    }
    else if (CALIGN.RIGHT_VCENTER == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
    }
    else if (CALIGN.LEFT_BOTTOM == frameComponentAlign) {
        eleStyle.left = x + 'px';
        eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
    }
    else if (CALIGN.HCENTER_BOTTOM == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
    }
    else if (CALIGN.RIGHT_BOTTOM == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
    }
};

CFrameComponent.prototype.handleTakingFocus = function () {
    var me = this;
    if (me._focusTakingCallabck) {
        me._focusTakingCallabck();
    }
};

CFrameComponent.prototype.handleReleasingFocus = function () {
    var me = this;
    if (me._focusReleasingCallabck) {
        me._focusReleasingCallabck();
    }
};

/**
 * end of CFrameComponent class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * CDomPartsBuilder class
 * Easy to build a beautiful or typical dom parts(htmlElement)
 * @constructor
 */
function CDomPartsBuilder() {
}

CDomPartsBuilder.prototype.buildTextButtonAppearance = function () {
    return new CTextButtonAppearance();
};

CDomPartsBuilder.prototype.buildButton = function (btnAppearance) {
    var me = this;
    return me.buildTextButton(btnAppearance);
}
/**
 *
 * @param size
 * @returns {HTMLElement}
 */
CDomPartsBuilder.prototype.buildTextButton = function (btnAppearance) {

    var size = btnAppearance.size;
    var width = size;
    var height = size;

    if (btnAppearance.width != null) {
        width = btnAppearance.width;
    }

    if (btnAppearance.height != null) {
        height = btnAppearance.height;
    }


    var divElement = document.createElement('div');

    //border
    var borderWidth = btnAppearance.borderWidth;
    var borderRadius = btnAppearance.borderRadius;

    var borderColorDefault = btnAppearance.borderColorDefault;
    var borderColorFocused = btnAppearance.borderColorFocused;
    var borderColorHovered = btnAppearance.borderColorHovered;
    var borderColorPressed = btnAppearance.borderColorPressed;

    var borderStyleDefault = btnAppearance.borderStyleDefault;
    var borderStyleFocused = btnAppearance.borderStyleFocused;
    var borderStyleHovered = btnAppearance.borderStyleHovered;
    var borderStylePressed = btnAppearance.borderStylePressed;

    //background
    var backgroundColorDefault = btnAppearance.backgroundColorDefault;
    var backgroundColorFocused = btnAppearance.backgroundColorFocused;
    var backgroundColorHovered = btnAppearance.backgroundColorHovered;
    var backgroundColorPressed = btnAppearance.backgroundColorPressed;

    var backgroundBoxShadow = btnAppearance.backgroundBoxShadow;


    //caption
    var caption = btnAppearance.caption;
    var btnImageDefault = btnAppearance.imageDefault;
    var btnImageFocused = btnAppearance.imageFocused;
    var btnImageHovered = btnAppearance.imageHovered;
    var btnImagePressed = btnAppearance.imagePressed;

    //prevent to catch mouse events
    if (btnImageDefault) {
        btnImageDefault.style.pointerEvents = 'none';
    }
    if (btnImageFocused) {
        btnImageFocused.style.pointerEvents = 'none';
    }
    if (btnImageHovered) {
        btnImageHovered.style.pointerEvents = 'none';
    }
    if (btnImagePressed) {
        btnImagePressed.style.pointerEvents = 'none';
    }

    var _captionColorDefault = btnAppearance.captionColorDefault;
    var captionColorFocused = btnAppearance.captionColorFocused;
    var captionColorHovered = btnAppearance.captionColorHovered;
    var captionColorPressed = btnAppearance.captionColorPressed;

    var captionShiftYpx = btnAppearance.captionShiftYpx;
    var captionFontRatio = btnAppearance.captionFontRatio;

    //Set whether parent frame has focus or not internally
    divElement._hasFrameFocus = false;

    //Set whether mouse is pressing or not internally.
    divElement._isMouseDown = false;

    divElement.style.position = 'absolute';

    divElement.style.top = '0px';
    divElement.style.left = '0px';
    divElement.style.width = (width) + 'px';
    divElement.style.height = (height) + 'px';
    divElement.style.cursor = 'pointer';

    divElement.onmousedown = function (e) {

        divElement._isMouseDown = true;
        divElement._handleFocusDrawing('onmousedown');
    };

    divElement.onmouseout = function (e) {
        divElement._isMouseDown = false;
        divElement._handleFocusDrawing('onmouseout');
    };
    divElement.onmouseover = function (e) {

        divElement._handleHoverDrawing();
    };

    divElement.onmouseup = function (e) {

        divElement._isMouseDown = false;
        divElement._handleFocusDrawing('onmouseup');
    };


    /**
     * The parent notifies that the parent's frame got focus
     */
    divElement._onTakeFocus = function () {

        divElement._hasFrameFocus = true;
        divElement._handleFocusDrawing('_onTakeFocus');
    };

    /**
     * The parent notifies that the parent's frame has lost focus
     */
    divElement._onReleaseFocus = function () {

        divElement._hasFrameFocus = false;
        divElement._handleFocusDrawing('_onReleaseFocus');
    };

    /**
     *  To handle 2x2 matrix.
     *  (_hasFrameFocus true/false x _isMouseDown true/false)
     */
    divElement._handleFocusDrawing = function (evtName) {


        if (divElement._hasFrameFocus) {
            //When this element has focus

            if (divElement._isMouseDown) {
                //border
                divElement.style.borderColor = borderColorPressed;
                divElement.style.borderStyle = borderStylePressed;

                //background
                divElement.style.backgroundColor = backgroundColorPressed;

                //caption
                divElement.style.color = captionColorPressed;


                if (btnImagePressed) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImagePressed);

                    if (evtName == 'onmousedown' && divElement.onclick) {
                        //divElement.onclick();
                    }
                }

            } else {
                //border
                divElement.style.borderColor = borderColorFocused;
                divElement.style.borderStyle = borderStyleFocused;

                //background
                divElement.style.backgroundColor = backgroundColorFocused;

                //caption
                divElement.style.color = captionColorFocused;

                if (btnImageFocused) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImageFocused);
                }
            }

        } else {
            //When this element doesn't have focus
            if (divElement._isMouseDown) {
                //border
                divElement.style.borderColor = borderColorPressed;
                divElement.style.borderStyle = borderStylePressed;

                //background
                divElement.style.backgroundColor = backgroundColorPressed;

                //caption
                divElement.style.color = captionColorPressed;

                if (btnImagePressed) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImagePressed);


                }

            } else {

                //border
                divElement.style.borderColor = borderColorDefault;
                divElement.style.borderStyle = borderStyleDefault;

                //background
                divElement.style.backgroundColor = backgroundColorDefault;

                //caption
                divElement.style.color = _captionColorDefault;

                if (btnImageDefault) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImageDefault);

                }
            }
        }
    };

    divElement._handleHoverDrawing = function () {

        if (divElement._hasFrameFocus) {
            //When this element has focus
        } else {
            //When this element doesn't have focus
        }
        //border
        if (borderColorHovered) {
            divElement.style.borderColor = borderColorHovered;
        }
        if (borderStyleHovered) {
            divElement.style.borderStyle = borderStyleHovered;
        }

        //background
        if (backgroundColorHovered) {
            divElement.style.backgroundColor = backgroundColorHovered;
        }

        if (captionColorHovered) {
            //caption
            divElement.style.color = captionColorHovered;
        }
        if (btnImageHovered) {
            divElement.innerHTML = '';
            divElement.appendChild(btnImageHovered);

        }
    };


    divElement.style.textAlign = 'center';
    divElement.style.fontSize = (height * captionFontRatio) + 'px';

    divElement.style.lineHeight = (height) + 'px';

    divElement.style.borderWidth = '1px';

    if (borderWidth != null) {
        divElement.style.borderWidth = borderWidth + 'px';
    }

    if (backgroundBoxShadow != null) {
        divElement.style.boxShadow = backgroundBoxShadow;
    }

    divElement.style.borderRadius = (borderRadius + parseInt(divElement.style.borderWidth)) + 'px';

    var childMode = true;

    if (childMode && btnImageDefault) {
        divElement.innerHTML = '';
        divElement.appendChild(btnImageDefault);
    }
    else if (childMode && caption) {
        var span = document.createElement('span');
        //span.style.position='absolute';
        span.style.width = '100%';

        span.style.marginTop = captionShiftYpx + 'px';
        span.style.display = 'inline-block';
        span.style.textAlign = 'center';

        span.style.fontFamily = "sans-serif";


        span.appendChild(document.createTextNode(caption));

        divElement.appendChild(span);
    } else if (!childMode && caption) {
        divElement.style.paddingTop = captionShiftYpx + "px";
        divElement.appendChild(document.createTextNode(caption));
    }

    divElement._handleFocusDrawing();
    return divElement;

};

function CTextButtonAppearance() {

    var crossMark0 = '\u274c';

    this.size = 14;
    this.width = null;
    this.height = null;

    //border
    this.borderRadius = 2;
    this.borderWidth = 0;
    this.borderColorDefault = '#aaaaaa';
    this.borderColorFocused = this.borderColorDefault;
    this.borderColorHovered = null;
    this.borderColorPressed = this.borderColorDefault;

    this.borderStyleDefault = 'solid';
    this.borderStyleFocused = this.borderStyleDefault;
    this.borderStyleHovered = null;
    this.borderStylePressed = this.borderStyleDefault;

    this.backgroundBoxShadow = null;


    //background
    this.backgroundColorDefault = 'transparent';
    this.backgroundColorFocused = this.backgroundColorDefault;
    this.backgroundColorHovered = null;
    this.backgroundColorPressed = this.backgroundColorDefault;

    //caption
    this.caption = crossMark0;
    this.captionColorDefault = 'white';
    this.captionColorFocused = this.captionColorDefault;
    this.captionColorHovered = null;
    this.captionColorPressed = this.captionColorDefault;
    this.captionShiftYpx = 0;
    this.captionFontRatio = 1.0;


}

/**
 * end of CDomPartsBuilder class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * CSimpleLayoutAnimator class
 * Class for moving animation · scaling animation of frame.
 * <p>
 * @constructor
 */
function CSimpleLayoutAnimator() {

    this.fps = 30;
    this.durationMillis = 200;
    this.targetFrame = null;

    //current width/height
    this._crrWidth = 0;
    this._crrHeight = 0;
    this._toWidth = 0;
    this._toHeight = 0;

    //current position(x,y)
    //this._crrX = 0;
    //this._crrY = 0;
    this._toX = 0;
    this._toY = 0;


    this.pinnedAnimationEnabled = false;
    this._pinX = 0;
    this._pinY = 0;
    this._pinAnchor = null;

}

/**
 * Set CIFrame object to be resized
 * @param ciframe
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.set = function (ciframe) {
    var me = this;
    me.targetFrame = ciframe;


    me.fromWidth(ciframe.getWidth());
    me.fromHeight(ciframe.getHeight());

    me.toWidth(ciframe.getWidth());
    me.toHeight(ciframe.getHeight());

    var crrPos = ciframe.getPosition();
    me.fromPosition(crrPos.x, crrPos.y, crrPos.anchor);


    return me;

};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.get = function () {
    var me = this;
    return me.targetFrame;
};
/**
 * Set animation duration time millis
 * @param durationMillis
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setDuration = function (durationMillis) {
    var me = this;
    me.durationMillis = durationMillis;
    return me;
};

/**
 * Set expected FPS
 * @param fps
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setFPS = function (fps) {
    var me = this;
    me.fps = fps;
    return me;
};

/**
 * Set PIN position
 * @param x
 * @param y
 * @param anchor Position where animation starts from.Expected parameters as follows.
 'LEFT_TOP':Default.Specify the position starting from the upper left.
 'CENTER_TOP'
 'RIGHT_TOP'
 'LEFT_CENTER'
 'CENTER_CENTER'
 'RIGHT_CENTER'
 'LEFT_BOTTOM'
 'CENTER_BOTTOM'
 'RIGHT_BOTTOM'
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromPosition = function (x, y, anchor) {
    var me = this;
    me.pinnedAnimationEnabled = true;

    me._pinX = x;
    me._pinY = y;

    me.toPosition(x, y);

    if (anchor) {
        me._pinAnchor = anchor;
    }
    return me;
};
/**
 * Set resizeFrom width
 * @param fromWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromWidth = function (fromWidth) {
    var me = this;
    me._crrWidth = fromWidth;

    return me;
};

/**
 * Set resizeFrom height
 * @param fromHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromHeight = function (fromHeight) {
    var me = this;
    me._crrHeight = fromHeight;

    return me;
};

/**
 * Set resizeTo width
 * @param toWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toWidth = function (toWidth) {
    var me = this;
    me._toWidth = toWidth;

    return me;
};

/**
 * Set resizeTo height
 * @param toHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toHeight = function (toHeight) {
    var me = this;
    me._toHeight = toHeight;
    return me;
};

/**
 * Set move to position
 * @param x
 * @param y
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toPosition = function (x, y) {
    var me = this;
    me._toX = x;
    me._toY = y;
    return me;
};

/**
 * Set move to x
 * @param x
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toX = function (x) {
    var me = this;
    me._toX = x;
    return me;
};

/**
 * Set move to y
 * @param t
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toY = function (t) {
    var me = this;
    me._toY = t;
    return me;
};


CSimpleLayoutAnimator.prototype.start = function (waitMillis) {


    var me = this;

    var fromWidth = me._crrWidth;
    var fromHeight = me._crrHeight;

    var fromX = me._pinX;
    var fromY = me._pinY;


    return new Promise(function (resolve, reject) {


        var numOfSteps = parseInt(me.fps * (me.durationMillis / 1000));


        var deltaWidth = (me._toWidth - fromWidth) / numOfSteps;
        var deltaHeight = (me._toHeight - fromHeight) / numOfSteps;

        var deltaX = (me._toX - fromX) / numOfSteps;
        var deltaY = (me._toY - fromY) / numOfSteps;


        var unitMillis = me.durationMillis / numOfSteps;

        var idx = 0;


        function loop() {
            var timer = new CTimer();

            timer.setIntervalMillis(unitMillis);

            timer.setCallback(function (timer) {

                if (idx == numOfSteps) {

                    var _width = me._toWidth;
                    var _height = me._toHeight;

                    var _x = fromX + deltaX * idx;
                    var _y = fromY + deltaY * idx;

                    if (me.pinnedAnimationEnabled) {
                        //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);

                        me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
                    }

                    me.targetFrame.resizeDirect(_width, _height);

                    me._crrWidth = _width;
                    me._crrHeight = _height;

                    me._pinX = _x;
                    me._pinY = _y;
                }

                if (idx == (numOfSteps + 1)) {
                    //Stop timer after last draw update.
                    timer.stopTimer();
                    resolve(me);
                    return;
                }


                var _width = fromWidth + deltaWidth * idx;
                var _height = fromHeight + deltaHeight * idx;

                var _x = fromX + deltaX * idx;
                var _y = fromY + deltaY * idx;

                if (me.pinnedAnimationEnabled) {
                    //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);
                    me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
                }

                me.targetFrame.resizeDirect(_width, _height);

                if (idx == 0) {
                    me.targetFrame.show();
                }

                idx++;
            });


            timer.startTimer();
        }

        if (waitMillis) {

            var waiter = new CTimer();
            waiter.setIntervalMillis(waitMillis);
            waiter.setCallback(function (_timer) {
                _timer.stopTimer();

                loop();
            });
            waiter.startTimer();
        } else {
            loop();
        }


    });

};//start

/**
 * end of CSimpleLayoutAnimator class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
/**
 * CTimer class<br>
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * How to use:
 *  var timer = new CTimer();
 *    var value = 0;
 *
 *    timer.setCallback(function (timerObj) {
 *        value++;
 *        console.log(value);
 *        if (value == 100) {
 *            timerObj.stopTimer();
 *        }
 *    });
 *    timer.setIntervalMillis(100);
 *    timer.startTimer();
 *
 * @author Tom Misawa (riversun.org@gmail.com)
 */

var CTimer =
    (function () {
        function CTimer() {
            var me = this;

            me._timerId = null;
            me._isRunning = false;
            me._timerInterval = 0;

            me._internalCallback = _internalCallback;
            me._timerMethod = null;


            function _internalCallback() {
                if (me._timerMethod) {
                    me._timerMethod(me);
                }
                if (me._isRunning) {
                    clearTimeout(me._timerId);
                    me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                }
            }
        }

        CTimer.prototype.setCallback = function (callback_func) {
            var me = this;
            me._timerMethod = callback_func;
            return me;
        };

        CTimer.prototype.setIntervalMillis = function (interval) {
            var me = this;
            me._timerInterval = interval;
            return me;
        };

        CTimer.prototype.stopTimer = function () {
            var me = this;
            me._isRunning = false;
            return me;
        };

        CTimer.prototype.startTimer = function () {
            var me = this;
            if (me._timerInterval > 0) {
                me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                me._isRunning = true;

            }
            return me;
        };


        return CTimer;
    })();
/**
 * end of CTimer class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
Object.freeze(DEF);

    

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvSlNGcmFtZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlNGcmFtZS5jc3M/NTdkOSIsIndlYnBhY2s6Ly8vLi9zcmMvanNmcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxzQkFBc0Isc0hBQXNILGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRywrQkFBK0Isd0xBQXdMLGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUNGNzJCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBLGNBQWMsbUJBQU8sQ0FBQyxzSEFBd0Q7O0FBRTlFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFPLENBQUMsd0NBQWU7OztBQUd2Qjs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7OztBQUdBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOERBQThEO0FBQzlELDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0EsS0FBSzs7O0FBR0w7OztBQUdBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOzs7QUFHYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUwsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzZnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qc2ZyYW1lLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuanNGcmFtZS50aXRsZWJhciB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wLCAjZjVmNWY1LCBjb2xvci1zdG9wKDEuMCwgI2Y4ZjdmMikpKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmpzRnJhbWUudGl0bGViYXIuZm9jdXNlZCB7XFxuICAgIC8qIChjKTIwMTUgSm9oYW5uZXMgSmFrb2JcXG4gICAgICAgTWFkZSB3aXRoIDwzIGluIEdlcm1hbnkgKi9cXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjAsICNlYmViZWIsIGNvbG9yLXN0b3AoMS4wLCAjZDVkNWQ1KSkpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSlNGcmFtZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSlNGcmFtZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0pTRnJhbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyoqXG4gKiBKU0ZyYW1lIHZlci4xLjIuMCAtIEEgamF2YXNjcmlwdCBmbG9hdGluZyB3aW5kb3cgbGlicmFyeVxuICpcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgVG9tIE1pc2F3YSwgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbVxuICogQ29weXJpZ2h0IDIwMDctMjAxNyB3ZWIyZHJpdmVyLmNvbVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbiAqIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlXG4gKiBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbiAqIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1JcbiAqIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICovXG5cbnJlcXVpcmUoJy4vSlNGcmFtZS5jc3MnKTtcblxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBERUYgPSB7fSxcbiAgICBDQUxJR04gPSB7fTtcblxuQ0FMSUdOLkxFRlRfVE9QID0gJ0xFRlRfVE9QJztcbkNBTElHTi5IQ0VOVEVSX1RPUCA9ICdDRU5URVJfVE9QJztcbkNBTElHTi5SSUdIVF9UT1AgPSAnUklHSFRfVE9QJztcbkNBTElHTi5MRUZUX1ZDRU5URVIgPSAnTEVGVF9DRU5URVInO1xuQ0FMSUdOLkhDRU5URVJfVkNFTlRFUiA9ICdDRU5URVJfQ0VOVEVSJztcbkNBTElHTi5DRU5URVIgPSBDQUxJR04uSENFTlRFUl9WQ0VOVEVSO1xuQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPSAnUklHSFRfQ0VOVEVSJztcbkNBTElHTi5MRUZUX0JPVFRPTSA9ICdMRUZUX0JPVFRPTSc7XG5DQUxJR04uSENFTlRFUl9CT1RUT00gPSAnQ0VOVEVSX0JPVFRPTSc7XG5DQUxJR04uUklHSFRfQk9UVE9NID0gJ1JJR0hUX0JPVFRPTSc7XG5cblxuLyoqXG4gKiBDRnJhbWVBcHBlYXJhbmNlIGNsYXNzPGJyPlxuICogQXBwZWFyYW5jZSBNb2RlbCBDbGFzcyBmb3IgRnJhbWVcbiAqXG4gKi9cbmZ1bmN0aW9uIENGcmFtZUFwcGVhcmFuY2UoKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdGhpcy5zaG93VGl0bGVCYXIgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcbiAgICB0aGlzLnRpdGxlQmFyQ2FwdGlvbiA9ICcnO1xuICAgIHRoaXMudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSAnMTJweCc7XG4gICAgdGhpcy50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgIHRoaXMudGl0bGVCYXJIZWlnaHQgPSAnMjRweCc7XG5cbiAgICB0aGlzLnVzZUlmcmFtZSA9IGZhbHNlO1xuICAgIHRoaXMudXNlRnJhbWUgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRVc2VJRnJhbWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbWUudXNlSWZyYW1lID0gdmFsdWU7XG4gICAgICAgIG1lLnVzZUZyYW1lID0gIXZhbHVlO1xuICAgICAgICByZXR1cm4gbWU7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIGZyb20gdGhlIGxlZnQgc2lkZSBvZiB0aGUgY2FwdGlvbi4gSWYgdGhpcyB2YWx1ZSBpcyBudWxsLCBjYXB0aW9uIHdpbGwgYmUgY2VudGVyZWQuXG4gICAgICovXG4gICAgdGhpcy50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gJzVweCc7XG5cbiAgICB0aGlzLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gJ2xpZ2h0Z3JheSc7XG4gICAgdGhpcy50aXRsZUJhckNvbG9yRm9jdXNlZCA9ICcjZDNlMWVlJztcbiAgICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcnO1xuICAgIHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gJyc7XG5cbiAgICB0aGlzLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpJztcbiAgICB0aGlzLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9IG51bGw7XG5cbiAgICB0aGlzLmZyYW1lQm9yZGVyUmFkaXVzID0gJzZweCc7XG5cbiAgICB0aGlzLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzFweCc7XG4gICAgdGhpcy5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IHRoaXMuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ7XG5cbiAgICB0aGlzLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0ID0gJ3JnYmEoMSwgMSwgMSwgMC4yKSc7XG4gICAgdGhpcy5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCA9IHRoaXMuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgICB0aGlzLmZyYW1lQm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgIHRoaXMuZnJhbWVCb3hTaGFkb3cgPSAnMnB4IDNweCAxNnB4IHJnYmEoMCwwLDAsLjYpJztcbiAgICB0aGlzLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICAgIHRoaXMuX3BhcnRzQnVpbGRlciA9IG51bGw7XG5cblxuICAgIHRoaXMuZnJhbWVDb21wb25lbnRzID0gW107XG5cbiAgICB0aGlzLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMTtcblxuICAgIHRoaXMuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uIChyZWYsIGhhc0ZvY3VzKSB7XG5cbiAgICAgICAgaWYgKCFyZWYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzRm9jdXMpIHtcbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQocmVmLmZyYW1lQm9yZGVyUmFkaXVzLCAxMCkgLSBwYXJzZUludChyZWYuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQsIDEwKSkgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAocGFyc2VJbnQocmVmLmZyYW1lQm9yZGVyUmFkaXVzLCAxMCkgLSBwYXJzZUludChyZWYuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsIDEwKSkgKyAncHgnO1xuICAgIH07XG5cblxuICAgIHRoaXMub25Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vQWRkIGNsb3NlIGJ1dHRvbiBpZiBuZWVkZWRcbiAgICAgICAgaWYgKG1lLnNob3dDbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgdmFyIHBhcnRzQnVpbGRlciA9IG1lLmdldFBhcnRzQnVpbGRlcigpLFxuICAgICAgICAgICAgICAgIGNyb3NzTWFyazAgPSAnXFx1Mjc0YycsXG4gICAgICAgICAgICAgICAgY3Jvc3NNYXJrMSA9ICdcXHUyNzE2JyxcbiAgICAgICAgICAgICAgICBjcm9zc01hcmsyID0gJ1xcdTI3NGUnO1xuXG5cbiAgICAgICAgICAgIHZhciBidG5BcHBlYXJhbmNlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5zaXplID0gMTQ7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25TaGlmdFlweCA9IDA7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Gb250UmF0aW8gPSAxLjA7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmJvcmRlclJhZGl1cyA9IDI7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbiA9IGNyb3NzTWFyazE7XG5cbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yRGVmYXVsdCA9ICdncmF5JztcbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yRm9jdXNlZCA9ICdncmF5JztcbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICdzaWx2ZXInO1xuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ2JsYWNrJztcblxuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJXaWR0aCA9IDA7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYWFhYWFhJztcbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuXG4gICAgICAgICAgICB2YXIgY2xvc2VCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKGJ0bkFwcGVhcmFuY2UpO1xuICAgICAgICAgICAgdmFyIGVsZUxlZnQgPSAtMTA7XG4gICAgICAgICAgICB2YXIgZWxlVG9wID0gLTIwO1xuICAgICAgICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgICAgICAgIC8vY2xvc2VCdXR0b24gaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgICAgICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmFkZEZyYW1lQ29tcG9uZW50KCdjbG9zZUJ1dHRvbicsIGNsb3NlQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcbiAgICAgICAgfVxuICAgIH07XG5cbn1cblxuXG5DRnJhbWVBcHBlYXJhbmNlLnByb3RvdHlwZS5nZXRQYXJ0c0J1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBpZiAobWUuX3BhcnRzQnVpbGRlciA9PT0gbnVsbCkge1xuICAgICAgICBtZS5fcGFydHNCdWlsZGVyID0gbmV3IENEb21QYXJ0c0J1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lLl9wYXJ0c0J1aWxkZXI7XG59O1xuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLm9uSW5pdGlhbGl6ZSgpO1xufTtcblxuLyoqXG4gKiAgQWRkIEZyYW1lQ29tcG9uZW50IGludG8gZnJhbWVcbiAqICBGcmFtZUNvbXBvbmVudCBpcyBhdHRhY2hlZCB0byBGcmFtZSBhbmQgaXQgbW92ZXMgd2l0aCBGcmFtZS5cbiAqXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBteURvbUVsZW1lbnQgRE9NIGVsZW1lbnQuXG4gKiBAcGFyYW0geCAgUmVsYXRpdmUgeCBjb29kaW5hdGUgZnJvbSB0aGUgc25hcCBwb3NpdGlvbiBzcGVjaWZpZWQgYnkgYWxpZ25tZW50XG4gKiBAcGFyYW0geSAgUmVsYXRpdmUgeSBjb29kaW5hdGUgZnJvbSB0aGUgc25hcCBwb3NpdGlvbiBzcGVjaWZpZWQgYnkgYWxpZ25tZW50XG4gKiBAcGFyYW0gYWxpZ24gJ0xFRlRfVE9QJyAnQ0VOVEVSX1RPUCcgJ1JJR0hUX1RPUCcgJ0xFRlRfQ0VOVEVSJyAnQ0VOVEVSX0NFTlRFUicgJ1JJR0hUX0NFTlRFUicgJ0xFRlRfQk9UVE9NJyAnQ0VOVEVSX0JPVFRPTScgJ1JJR0hUX0JPVFRPTSdcbiAqIEByZXR1cm5zIHtDRnJhbWVDb21wb25lbnR9XG4gKlxuICovXG5DRnJhbWVBcHBlYXJhbmNlLnByb3RvdHlwZS5hZGRGcmFtZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCwgbXlEb21FbGVtZW50LCB4LCB5LCBhbGlnbikge1xuXG4gICAgLy8oaWQsIGZyYW1lLCBodG1sRWxlbWVudCwgeCwgeSwgYWxpZ24pXG4gICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gbmV3IENGcmFtZUNvbXBvbmVudChpZCwgbXlEb21FbGVtZW50LCB4LCB5LCBhbGlnbik7XG5cbiAgICBpZiAobXlEb21FbGVtZW50Ll9vblRha2VGb2N1cyAmJiBteURvbUVsZW1lbnQuX29uUmVsZWFzZUZvY3VzKSB7XG4gICAgICAgIC8vaWYgdGhpcyBET00gZWxlbWVudCBoYXMgc3BlY2lhbCBtZXRob2QgZm9yIGZvY3VzXG4gICAgICAgIC8vc2V0IGZvY3VzIGNhbGxiYWNrXG4gICAgICAgIGZyYW1lQ29tcG9uZW50LnNldEZvY3VzQ2FsbGJhY2sobXlEb21FbGVtZW50Ll9vblRha2VGb2N1cywgbXlEb21FbGVtZW50Ll9vblJlbGVhc2VGb2N1cyk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZUNvbXBvbmVudHMucHVzaChmcmFtZUNvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gZnJhbWVDb21wb25lbnQ7XG59O1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuLyoqXG4gKiAgRW5kIG9mIENGcmFtZUFwcGVhcmFuY2UgY2xhc3NcbiAqL1xuXG4vKipcbiAqIEluaGVyaXRhbmNlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHN1YkNsYXNzXG4gKiBAcGFyYW0gYmFzZUNsYXNzXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQoc3ViQ2xhc3MsIGJhc2VDbGFzcykge1xuXG4gICAgZnVuY3Rpb24gY2xhenooKSB7XG4gICAgfVxuXG4gICAgY2xhenoucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBuZXcgY2xhenooKTtcblxuICAgIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICAgIHN1YkNsYXNzLnN1cGVyQ29uc3RydWN0b3IgPSBiYXNlQ2xhc3M7XG4gICAgc3ViQ2xhc3Muc3VwZXJDbGFzcyA9IGJhc2VDbGFzcy5wcm90b3R5cGU7XG5cbn1cblxuLyoqXG4gKiBFbmQgb2YgaW5oZXJpdGFuY2UgZnVuY3Rpb25cbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuLyoqXG4gKiBERUZJTklUSU9OU1xuICovXG5ERUYuQ0JFQU4gPSB7fTtcbkRFRi5DQkVBTi5IVE1MX0VMRU1FTlQgPSAnc3Bhbic7XG5ERUYuQ0JFQU4uSFRNTF9FTEVNRU5UX0lEX1BSRUZJWCA9ICdodG1sRWxlbWVudF8nO1xuREVGLkNCRUFOLlRZUEVfTkFNRSA9ICdiZWFuJztcblxuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG4vKipcbiAqIENCZWFuRnJhbWUgQ2xhc3M8cD5cbiAqIFRoZSBzbWFsbGVzdCB3aW5kb3cuIEl0IGlzIHJlc3BvbnNpYmxlIGZvciBiYXNpYyBwcm9jZXNzaW5nIG9ubHkuXG4gKlxuICogQHBhcmFtIGJlYW5JZCBpZCBvZiB0aGlzIHNtYWxsIHdpbmRvd1xuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENCZWFuRnJhbWUoYmVhbklkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIHppbmRleCkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIC8vZmllbGRzXG4gICAgbWUuaWQgPSBiZWFuSWQ7XG4gICAgbWUucHJvcGVydHkgPSB7fTtcblxuICAgIG1lLnBhcmVudENhbnZhcyA9IG51bGw7XG4gICAgbWUuaHRtbEVsZW1lbnQgPSBudWxsO1xuXG5cbiAgICAvL2luaXRpYWxpemVcbiAgICBtZS5odG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoREVGLkNCRUFOLkhUTUxfRUxFTUVOVCk7XG4gICAgbWUuaHRtbEVsZW1lbnQuaWQgPSBERUYuQ0JFQU4uSFRNTF9FTEVNRU5UX0lEX1BSRUZJWCArIGJlYW5JZDtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KGxlZnQsIDEwKSArICdweCc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gcGFyc2VJbnQodG9wLCAxMCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gcGFyc2VJbnQod2lkdGgsIDEwKSArICdweCc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LCAxMCkgKyAncHgnO1xuXG5cbiAgICAvL1ppbmRleCBtYXkgYmVjb21lICd1bmRlZmluZWQnIGluIHNvbWUgY2FzZXMuXG4gICAgaWYgKHppbmRleCAhPT0gbnVsbCkge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSB6aW5kZXg7XG4gICAgfVxuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJyMwMDAwMDAnO1xuXG4gICAgLy9JZiBJIHNldCBhIGxhcmdlciBmb250IHNpemUsIHdpZHRoIGFuZCBoZWlnaHQgb2Ygd2luZG93IHdpbGwgYmUgYWZmZWN0ZWQuLi4uXG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMXB4JztcblxuICAgIC8vUmVmZXIgcGFyZW50cyB0byBlYWNoIG90aGVyLihzb3Vnby1zYW5zaG8pXG4gICAgbWUuaHRtbEVsZW1lbnQucGFyZW50ID0gbWU7XG5cbiAgICAvL05vdGUgdGhhdCAnbW91c2VEb3duJyBpcyBtYXBwZWQgdG8gJ29ubW91c2Vkb3duJyBvZiBodG1sRWxlbWVudCxcbiAgICAvL3NvIHdoZW4gJ29ubW91c2VEb3duJyBmaXJlcyAsdGhlICd0aGlzJyB3aWxsIGluZGljYXRlICdodG1sRWxlbWVudCdcbiAgICBtZS5odG1sRWxlbWVudC5vbm1vdXNlZG93biA9IG1lLm9ubW91c2VEb3duO1xuXG4gICAgLy9UeXBlIG5hbWUgb2YgdGhpcyBjbGFzc1xuICAgIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gREVGLkNCRUFOLlRZUEVfTkFNRTtcblxuICAgIC8vU3BlY2lhbCBmaWVsZCBpbmRpY2F0aW5nIHVzYWdlIG9mIHRoaXMgY2xhc3NcbiAgICBtZS5odG1sRWxlbWVudC51c2FnZSA9ICdub3RoaW5nJztcblxuICAgIC8vV2hldGhlciBpdCBjYW4gbW92ZSBvdXRzaWRlIHRoZSBmcmFtZSh3YWt1KS5cbiAgICBtZS5odG1sRWxlbWVudC5pc1JhbmdlTGltaXRlZCA9IGZhbHNlO1xuXG4gICAgLy9Nb3ZlbWVudCBtYWduaWZpY2F0aW9uIGluIHRoZSBYIGRpcmVjdGlvblxuICAgIC8vKElmIGl0IGlzIDAsIGl0IGNhbiBub3QgbW92ZSBpbiB0aGUgWCBkaXJlY3Rpb24uKVxuICAgIG1lLmh0bWxFbGVtZW50LmFyZ1ggPSAxO1xuXG4gICAgLy9Nb3ZlbWVudCBtYWduaWZpY2F0aW9uIGluIFkgZGlyZWN0aW9uXG4gICAgLy8gKElmIGl0IGlzIDAsIGl0IGNhbiBub3QgbW92ZSBpbiBZIGRpcmVjdGlvbilcbiAgICBtZS5odG1sRWxlbWVudC5hcmdZID0gMTtcbiAgICBtZS5leHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXIgPSBudWxsO1xufVxuXG4vKipcbiAqIFNldCB3aGV0aGVyIHRoZSBmcmFtZSBjYW4gYmUgbW92ZWQgd2hpbGUgZHJhZ2dpbmcgd2l0aCB0aGUgbW91c2VcbiAqIEBwYXJhbSBlbmFibGVkXG4gKi9cbkNCZWFuRnJhbWUucHJvdG90eXBlLnNldE1vdmFibGUgPSBmdW5jdGlvbiAoZW5hYmxlZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5hcmdYID0gMTtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuYXJnWSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LmFyZ1kgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWU7XG59O1xuXG5cbkNCZWFuRnJhbWUucHJvdG90eXBlLnNldFBhcmVudENhbnZhcyA9IGZ1bmN0aW9uIChwYXJlbnRDYW52YXMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLnBhcmVudENhbnZhcyA9IHBhcmVudENhbnZhcztcbiAgICBtZS5odG1sRWxlbWVudC5wYXJlbnRDYW52YXMgPSBtZS5wYXJlbnRDYW52YXM7XG59O1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUuc2V0T25FeHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lciA9IGxpc3RlbmVyO1xufTtcbkNCZWFuRnJhbWUucHJvdG90eXBlLm9uQm9keUNsaWNrZWQgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgY2xpY2tYID0gZS5wYWdlWDtcbiAgICB2YXIgY2xpY2tZID0gZS5wYWdlWTtcblxuICAgIHZhciBsZWZ0ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCk7XG4gICAgdmFyIHRvcCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCk7XG4gICAgdmFyIHdpZHRoID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgpO1xuICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQpO1xuXG4gICAgaWYgKGxlZnQgPCBjbGlja1ggJiYgY2xpY2tYIDwgKGxlZnQgKyB3aWR0aCkgJiYgdG9wIDwgY2xpY2tZICYmIChjbGlja1kgPCB0b3AgKyBoZWlnaHQpKSB7XG4gICAgICAgIC8vLSBjbGlja2VkIGludGVybmFsIGFyZWEgb2YgdGhpcyBmcmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vLSBjbGlja2VkIGV4dGVybmFsIGFyZWEgb2YgdGhpcyBmcmFtZVxuICAgICAgICBpZiAobWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyKSB7XG4gICAgICAgICAgICBtZS5leHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn07XG5DQmVhbkZyYW1lLnByb3RvdHlwZS5vbm1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAvL1RoaXMgJ3RoaXMnIG1lYW5zIGEgaHRtbEVsZW1lbnRcbiAgICB2YXIgcmVmSHRtbEVsZW1lbnQgPSB0aGlzO1xuXG5cbiAgICAvL1JldHJpZXZlIENCZWFuRnJhbWVcbiAgICB2YXIgcmVmQ0JlYW5GcmFtZSA9IHJlZkh0bWxFbGVtZW50LnBhcmVudDtcblxuICAgIGlmIChlLmJ1dHRvbiA9PSAwKSB7XG4gICAgICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5jdXJyZW50T2JqZWN0ID0gcmVmSHRtbEVsZW1lbnQ7XG5cbiAgICAgICAgLy9CcmluZyB0aGUgY3VycmVudCBiZWFuIHRvIHRoZSB0b3BcbiAgICAgICAgcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLnB1bGxVcChyZWZDQmVhbkZyYW1lLmlkKTtcblxuICAgIH1cbiAgICBlbHNlIGlmIChlLmJ1dHRvbiA9PSAyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMub2Zmc2V0WCA9IGUucGFnZVggLSBwYXJzZUludChyZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLm9mZnNldFkgPSBlLnBhZ2VZIC0gcGFyc2VJbnQocmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3Quc3R5bGUudG9wLCAxMCk7XG5cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vKipcbiAqIEVuZCBvZiBDQmVhbkZyYW1lIENsYXNzIDxwPlxuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbkRFRi5DQU5WQVMgPSB7fTtcbkRFRi5DQU5WQVMuSFRNTF9FTEVNRU5UID0gJ2Rpdic7XG5ERUYuQ0FOVkFTLldJRFRIX0FESlVTVF8yMDE4MDcyMiA9IDI7XG5ERUYuQ0FOVkFTLkhFSUdIVF9BREpVU1RfMjAxODA3MjIgPSAzO1xuXG4vKipcbiAqIENDYW52YXMgY2xhc3NcbiAqIEEgY2FudmFzIGlzIGEgcGxhY2Ugd2hlcmUgd2luZG93cyBhcmUgYXJyYW5nZWQsIHdoZXJlIHlvdSBjYW4gZHJhZyBhbmQgbW92ZSBmcmVlbHkuXG4gKlxuICogQHBhcmFtIHBhcmVudEVsZW1lbnRcbiAqIEBwYXJhbSBjYW52YXNJZFxuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENDYW52YXMocGFyZW50RWxlbWVudCwgY2FudmFzSWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuXG4gICAgLy9FdmVudCBkYXRhIHRvIGJlIHRyYW5zbWl0dGVkXG4gICAgZnVuY3Rpb24gRXZlbnREYXRhKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnNjcmVlblggPSAwO1xuICAgICAgICB0aGlzLnNjcmVlblkgPSAwO1xuICAgICAgICB0aGlzLmRlbHRhWCA9IDA7XG4gICAgICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICAgICAgdGhpcy5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFyZ2V0VHlwZU5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldFVzYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXRPYmplY3QgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBtZS5jdXJyZW50T2JqZWN0ID0gbnVsbDtcbiAgICBtZS5vblRvcE9iamVjdCA9IG51bGw7XG4gICAgbWUub2Zmc2V0WCA9IDA7XG4gICAgbWUub2Zmc2V0WSA9IDA7XG5cblxuICAgIC8vT2JqZWN0IHdoaWNoIGdlbmVyYXRlZCAnbW91c2VEb3duJyBldmVudCBhdCB0aGUgdmVyeSBiZWdpbm5pbmcoaWNoaWJhbi1zYWlzaG8pXG4gICAgbWUubW91c2VEb3duU291cmNlID0gbnVsbDtcblxuICAgIG1lLmlkID0gY2FudmFzSWQ7XG4gICAgbWUuY2FudmFzRWxlbWVudCA9IG51bGw7XG4gICAgbWUucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XG4gICAgbWUuYmVhbkxpc3QgPSBuZXcgQXJyYXkoKTtcblxuICAgIC8vMjAxODA3MjRbc3RhcnRdXG4gICAgbWUuYmVhbklkTmFtZSA9IHt9Oy8va2V5OmJlYW5JZCB2YWx1ZTpiZWFuTmFtZVxuICAgIG1lLmJlYW5OYW1lSWQgPSB7fTsvL2tleTpiZWFuTmFtZSB2YWx1ZTpiZWFuSWRcbiAgICAvLzIwMTgwNzI0W2VuZF1cblxuICAgIG1lLmV2ZW50RGF0YSA9IG5ldyBFdmVudERhdGEoKTtcblxuXG4gICAgbWUuYmFzZVpJbmRleCA9IDA7XG4gICAgbWUuc2V0QmFzZVpJbmRleCA9IGZ1bmN0aW9uIChiYXNlWkluZGV4KSB7XG4gICAgICAgIG1lLmJhc2VaSW5kZXggPSBiYXNlWkluZGV4O1xuICAgIH07XG4gICAgbWUuZ2V0QmFzZVpJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG1lLmJhc2VaSW5kZXg7XG4gICAgfTtcblxuXG4gICAgbWUuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoREVGLkNBTlZBUy5IVE1MX0VMRU1FTlQpO1xuICAgIC8vQWRkZWQgMjAxOC83LzE2XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyMDAwO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQuaWQgPSBtZS5pZDtcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KGxlZnQpICsgJ3B4JztcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLnRvcCA9IHBhcnNlSW50KHRvcCkgKyAncHgnO1xuICAgIC8vMjAxODA3MjIo55S76Z2i44Gu5LiL44Gr6YCP5piO6YOo5YiG44GM44Gn44GN44Gm44GX44G+44GG44Gu44Gn44CB6Kq/5pW05YCk44KS44GE44KM44GfKVxuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPSAocGFyc2VJbnQod2lkdGgpICsgREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIpICsgJ3B4JztcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9IChwYXJzZUludChoZWlnaHQpICsgREVGLkNBTlZBUy5IRUlHSFRfQURKVVNUXzIwMTgwNzIyKSArICdweCc7XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzBweCc7XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcblxuICAgIC8vQWRkIHRoZSBDYW52YXMncyBodG1sIGVsZW1lbnQgaW50byB0aGUgY2FudmFzJ3MgcGFyZW50IGh0bWwgZWxlbWVudFxuICAgIG1lLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobWUuY2FudmFzRWxlbWVudCk7XG5cbn1cblxuXG5DQ2FudmFzLnByb3RvdHlwZS5tb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuXG4gICAgaWYgKG1lLmN1cnJlbnRPYmplY3QpIHtcblxuICAgICAgICAvL2V2ZW50RGF0YS5pc01vdmVkPXRydWU7VGhlIHByZXNlbmNlIG9mIGV2ZW50IGRhdGEgbWVhbnMgdGhhdCBpdCBoYXMgbW92ZWQuXG4gICAgICAgIG1lLmV2ZW50RGF0YS50YXJnZXRUeXBlTmFtZSA9IG1lLmN1cnJlbnRPYmplY3QudHlwZU5hbWU7XG4gICAgICAgIG1lLmV2ZW50RGF0YS50YXJnZXRVc2FnZSA9IG1lLmN1cnJlbnRPYmplY3QudXNhZ2U7XG4gICAgICAgIG1lLmV2ZW50RGF0YS50YXJnZXRPYmplY3QgPSBtZS5jdXJyZW50T2JqZWN0O1xuXG4gICAgICAgIC8vRXZlbiB3aGVuIG9iaiBpcyBub3QgYmVpbmcgZHJhZ2dlZCwgbW91c2UgY29vcmRpbmF0ZXMgYXJlIHVzZWQgaGVyZSBiZWNhdXNlIHRoZXkgYXJlIG5lZWRlZC5cbiAgICAgICAgdmFyIG5ld09iakxlZnRQeCA9IGUucGFnZVggLSBtZS5vZmZzZXRYO1xuICAgICAgICB2YXIgbmV3T2JqVG9wUHggPSBlLnBhZ2VZIC0gbWUub2Zmc2V0WTtcblxuICAgICAgICB2YXIgYWJzb2x1dGVNb3VzZVggPSBlLnBhZ2VYO1xuICAgICAgICB2YXIgYWJzb2x1dGVNb3VzZVkgPSBlLnBhZ2VZO1xuXG5cbiAgICAgICAgLy9UYWtlIHRoZSBzbmFwc2hvdCBiZWZvcmUgdXBkYXRpbmcgdGhlIGxvY2F0aW9uLlxuICAgICAgICB2YXIgb2xkT2JqTGVmdFB4ID0gbWUuY3VycmVudE9iamVjdC5zdHlsZS5sZWZ0O1xuICAgICAgICB2YXIgb2xkT2JqVG9wUHggPSBtZS5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcDtcblxuICAgICAgICAvL1doZW4gdGhlIG1vdXNlIGN1cnNvciBnb2VzIG91dCBvZiByYW5nZSxcbiAgICAgICAgLy90aGUgYWRkaXRpb24gaW4gdGhlIFggZGlyZWN0aW9uIGFuZCBZIGRpcmVjdGlvbiAoZGVsdGEgWCwgZGVsdGEgWSkgaXMgc2V0IHRvIHplcm8uXG4gICAgICAgIC8vdGhpcy5sZWZ0PUNhdmFzJ3MgbGVmdCBzaWRlIGVkZ2UsIHRoaXMudG9wPUNhbnZhcydzIHRvcCBzaWRlIGVkZ2UuXG4gICAgICAgIHZhciB0bXBMZWZ0ID0gcGFyc2VJbnQobmV3T2JqTGVmdFB4LCAxMCk7XG4gICAgICAgIHZhciB0bXBUb3AgPSBwYXJzZUludChuZXdPYmpUb3BQeCwgMTApO1xuXG4gICAgICAgIHZhciB0bXBSaWdodCA9IHRtcExlZnQgKyBwYXJzZUludChtZS5jdXJyZW50T2JqZWN0LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgICAgIHZhciB0bXBCb3R0b20gPSB0bXBUb3AgKyBwYXJzZUludChtZS5jdXJyZW50T2JqZWN0LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgICAgIHZhciBzdHlsZVdpZHRoID0gcGFyc2VJbnQobWUuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xuICAgICAgICB2YXIgc3R5bGVIZWlnaHQgPSBwYXJzZUludChtZS5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgICAgIHZhciBkZWx0YVggPSAwO1xuICAgICAgICB2YXIgZGVsdGFZID0gMDtcblxuICAgICAgICBpZiAobWUuY3VycmVudE9iamVjdC5pc1JhbmdlTGltaXRlZCA9PSB0cnVlICYmXG4gICAgICAgICAgICAodG1wTGVmdCA8PSAwIHx8IHRtcFJpZ2h0ID4gc3R5bGVXaWR0aCB8fCB0bXBUb3AgPD0gMCB8fCB0bXBCb3R0b20gPiBzdHlsZUhlaWdodClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkZWx0YVggPSAwO1xuICAgICAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbHRhWCA9IChwYXJzZUludChuZXdPYmpMZWZ0UHgsIDEwKSAtIHBhcnNlSW50KG9sZE9iakxlZnRQeCwgMTApKTtcbiAgICAgICAgICAgIGRlbHRhWSA9IChwYXJzZUludChuZXdPYmpUb3BQeCwgMTApIC0gcGFyc2VJbnQob2xkT2JqVG9wUHgsIDEwKSk7XG4gICAgICAgICAgICBtZS5jdXJyZW50T2JqZWN0LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQobWUuY3VycmVudE9iamVjdC5zdHlsZS5sZWZ0KSArIGRlbHRhWCAqIG1lLmN1cnJlbnRPYmplY3QuYXJnWCkgKyAncHgnO1xuICAgICAgICAgICAgbWUuY3VycmVudE9iamVjdC5zdHlsZS50b3AgPSAocGFyc2VJbnQobWUuY3VycmVudE9iamVjdC5zdHlsZS50b3ApICsgZGVsdGFZICogbWUuY3VycmVudE9iamVjdC5hcmdZKSArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5ldmVudERhdGEuZGVsdGFYID0gZGVsdGFYO1xuICAgICAgICBtZS5ldmVudERhdGEuZGVsdGFZID0gZGVsdGFZO1xuXG4gICAgICAgIHJldHVybiBtZS5ldmVudERhdGE7XG5cbiAgICB9XG4gICAgLy9SZXR1cm5zIG51bGwgaWYgbm9uZSBvZiB0aGUgb2JqZWN0cyBhcmUgY2xpY2tlZCBhbmQgdGhlIG9ubHkgbW91c2UganVzdCBtb3Zlcy5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cblxuQ0NhbnZhcy5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIG1lLmN1cnJlbnRPYmplY3QgPSBudWxsO1xuICAgIG1lLm1vdXNlRG93blNvdXJjZSA9IG51bGw7XG59O1xuXG5cbi8vQnJpbmcgdGhlIG9iamVjdCBpbiBmcm9udFxuQ0NhbnZhcy5wcm90b3R5cGUucHVsbFVwID0gZnVuY3Rpb24gKHRhcmdldEJlYW5JZCkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciB0bXBCZWFuQXJyYXkgPSBbXTtcblxuICAgIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gICAgZm9yICh2YXIgaSBpbiAgIGJlYW5MaXN0KSB7XG4gICAgICAgIHRtcEJlYW5BcnJheS5wdXNoKGJlYW5MaXN0W2ldKTtcbiAgICB9XG5cbiAgICAvL0JyaW5nIHRoZSB0YXJnZXQgb2JqZWN0IGluIGZyb250IGFuZCBzZXQgemluZGV4IHRvIDEuXG4gICAgdmFyIHRhcmdldEJlYW4gPSBiZWFuTGlzdFt0YXJnZXRCZWFuSWRdO1xuXG4gICAgbWUucHVsbFVwU29ydCh0YXJnZXRCZWFuLCB0bXBCZWFuQXJyYXksIG1lLmJhc2VaSW5kZXgpO1xuXG5cbiAgICAvL1JlbWVtYmVyIHRoZSB0b3Agb2JqZWN0XG4gICAgbWUub25Ub3BPYmplY3QgPSB0YXJnZXRCZWFuO1xuXG5cbn07XG5cbi8vQ2FsY3VsYXRlIHRoZSBmcm9udCAvIGJhY2sgaW5mb3JtYXRpb24gb2YgdGhlIHdpbmRvdyBhY2N1cmF0ZWx5LlxuQ0NhbnZhcy5wcm90b3R5cGUucHVsbFVwU29ydCA9IGZ1bmN0aW9uIChwdWxsdXBPYmplY3QsIG9iamVjdEFycmF5LCBiYXNlSW5kZXgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgLy9JbmNyZWFzZSB0aGUgaW5kZXggbnVtYmVyIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gICAgcHVsbHVwT2JqZWN0Lmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IG9iamVjdEFycmF5Lmxlbmd0aCArIGJhc2VJbmRleDtcblxuICAgIC8vc29ydCBieSBpbmRleFxuICAgIG9iamVjdEFycmF5LnNvcnQoZnVuY3Rpb24gKGIsIGEpIHtcbiAgICAgICAgcmV0dXJuIC1wYXJzZUludChiLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCwgMTApICsgcGFyc2VJbnQoYS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXgsIDEwKTtcbiAgICB9KTtcblxuICAgIC8vUmVkZWZpbmUgbnVtYmVyIG9mIHRoZSBpbmRleFxuICAgIGZvciAodmFyIGkgaW4gb2JqZWN0QXJyYXkpIHtcbiAgICAgICAgb2JqZWN0QXJyYXlbaV0uaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gKG9iamVjdEFycmF5Lmxlbmd0aCAtIDEpIC0gaSArIGJhc2VJbmRleDtcbiAgICB9XG5cbn07XG5cblxuLyoqXG4gKiByZW1vdmUgdGhlIGJlYW4gb2JqZWN0XG4gKiBAcGFyYW0gYmVhbklkXG4gKi9cbkNDYW52YXMucHJvdG90eXBlLnJlbW92ZUJlYW4gPSBmdW5jdGlvbiAoYmVhbklkKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgLy9SZXRyaWV2ZSB0aGUgdGFyZ2V0IGJlYW5GcmFtZVxuICAgIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuICAgIHZhciB0YXJnZXRCZWFuID0gYmVhbkxpc3RbYmVhbklkXTtcblxuICAgIC8vUmVtb3ZlIGJlYW4ncyBodG1sRWxlbWVudCBmcm9tIGNhbnZhc0VsZW1lbnRcbiAgICBtZS5jYW52YXNFbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldEJlYW4uaHRtbEVsZW1lbnQpO1xuXG4gICAgLy9EZWxldGUgdGhlIGJlYW4gb2JqZWN0IGluIHRoZSBhc3NvY2lhdGl2ZSBhcnJheS5cbiAgICBkZWxldGUgYmVhbkxpc3RbYmVhbklkXTtcblxuXG59O1xuXG5cbi8qKlxuICogQWRkIGJlYW4gaW50byB0aGlzIGNhbnZhc1xuICogQHBhcmFtIGJlYW5cbiAqL1xuQ0NhbnZhcy5wcm90b3R5cGUuYWRkQmVhbiA9IGZ1bmN0aW9uIChiZWFuKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgICAvLzIwMTgwNzI0W3N0YXJ0XVxuICAgIHZhciBiZWFuSWROYW1lID0gbWUuYmVhbklkTmFtZTsvL2tleTpiZWFuSWQgdmFsdWU6YmVhbk5hbWVcbiAgICB2YXIgYmVhbk5hbWVJZCA9IG1lLmJlYW5OYW1lSWQ7IC8va2V5OmJlYW5OYW1lIHZhbHVlOmJlYW5JZFxuICAgIC8vMjAxODA3MjRbZW5kXVxuXG4gICAgYmVhbkxpc3RbYmVhbi5pZF0gPSBiZWFuO1xuXG4gICAgLy8yMDE4MDcyNFtzdGFydF1cbiAgICBpZiAoYmVhbi5wcm9wZXJ0eS5uYW1lKSB7XG4gICAgICAgIGJlYW5OYW1lSWRbYmVhbi5wcm9wZXJ0eS5uYW1lXSA9IGJlYW4uaWQ7XG4gICAgICAgIGJlYW5JZE5hbWVbYmVhbi5pZF0gPSBiZWFuLnByb3BlcnR5Lm5hbWU7XG4gICAgfVxuICAgIC8vMjAxODA3MjRbZW5kXVxuXG5cbiAgICAvL0luIHRoaXMgdXNhZ2UgY2FzZSB0aGUgJ2xlbmd0aCcgcHJvcGVydHkgaXMgaW52YWxpZCAuLlxuICAgIHZhciBudW0gPSAwO1xuXG4gICAgZm9yICh2YXIgaiBpbiBiZWFuTGlzdCkge1xuICAgICAgICBudW0rKztcbiAgICB9XG5cbiAgICAvL1NldCB6SW5kZXggc28gdGhhdCB3aGF0IHlvdSBhZGQgbGF0ZXIgd2lsbCBjb21lIHVwLlxuICAgIGJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gbnVtICsgbWUuYmFzZVpJbmRleDtcblxuICAgIC8vT24gdGhlIGJlYW4gc2lkZSwgc3BlY2lmeSB0aGUgcGFyZW50IG9mIHRoZSBiZWFuIHRvIG1lLlxuICAgIGJlYW4uc2V0UGFyZW50Q2FudmFzKG1lKTtcblxuXG4gICAgdGhpcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKGJlYW4uaHRtbEVsZW1lbnQpO1xufTtcbi8qKlxuICogRW5kIG9mIGNhbnZhcyBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbkRFRi5DRlJBTUUgPSB7fTtcbkRFRi5DRlJBTUUuQ0FOVkFTX0VMRU1FTlRfQkdDT0xPUiA9ICd0cmFuc3BhcmVudCc7XG5ERUYuQ0ZSQU1FLlRJVExFX0JBUl9DTEFTU19ERUZBVUxUID0gJ2pzRnJhbWUudGl0bGViYXInO1xuREVGLkNGUkFNRS5USVRMRV9CQVJfQ0xBU1NfRk9DVVNFRCA9ICdqc0ZyYW1lLnRpdGxlYmFyLmZvY3VzZWQnO1xuXG5pbmhlcml0KENGcmFtZSwgQ0JlYW5GcmFtZSk7XG5cblxuLyoqXG4gKiBDRnJhbWUgY2xhc3NcbiAqIDxwPlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgd2luZG93IHdob3NlIHNpemUgY2FuIGJlIGNoYW5nZWQgLFxuICogY2FuIG1vdmUgZnJlZWx5IG9uIHRoZSBzY3JlZW4sXG4gKiBjYW4gaGF2ZSBhIHRpdGxlIGJhcixcbiAqXG4gKiBAcGFyYW0gd2luZG93SWRcbiAqIEBwYXJhbSB3X2xlZnRcbiAqIEBwYXJhbSB3X3RvcFxuICogQHBhcmFtIHdfd2lkdGhcbiAqIEBwYXJhbSB3X2hlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQHBhcmFtIHdfYm9yZGVyX3dpZHRoXG4gKiBAcGFyYW0gYXBwZWFyYW5jZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENGcmFtZSh3aW5kb3dJZCwgd19sZWZ0LCB3X3RvcCwgd193aWR0aCwgd19oZWlnaHQsIHppbmRleCwgd19ib3JkZXJfd2lkdGgsIGFwcGVhcmFuY2UpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAvL2NhbGwgY29uc3RydWN0b3Igb2Ygc3VwZXJjbGFzc1xuICAgIENGcmFtZS5zdXBlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgd2luZG93SWQsIHdfbGVmdCwgd190b3AsIHdfd2lkdGgsIHdfaGVpZ2h0LCB6aW5kZXgpO1xuXG5cbiAgICBtZS5hbmNob3IgPSBDQUxJR04uTEVGVF9UT1A7XG5cbiAgICBtZS5zaG93VGl0bGVCYXIgPSBhcHBlYXJhbmNlLnNob3dUaXRsZUJhcjtcblxuICAgIG1lLmNhbnZhc05ldEhlaWdodCA9IG51bGw7XG4gICAgbWUuY2FudmFzTmV0V2lkdGggPSBudWxsO1xuICAgIG1lLmZyYW1lSGVpZ2h0QWRqdXN0ID0gYXBwZWFyYW5jZS5mcmFtZUhlaWdodEFkanVzdDtcblxuICAgIG1lLmZyYW1lQ29tcG9uZW50TWFwID0ge307XG5cblxuICAgIC8vaW5pdGlhbGl6ZSB0aGUgZmllbGRcbiAgICBtZS5jYW52YXMgPSBudWxsO1xuXG4gICAgLy9jYW52YXMgaWRcbiAgICBtZS5teUNhbnZhc0lkID0gbnVsbDtcblxuICAgIC8vQnV0dG9ucyB0byBiZSBwbGFjZWQgb24gdGhlIHNjcmVlbiAocG9zaXRpb25pbmcgc2FtZSBhcyB0aGUgY2xvc2UgYnV0dG9uKVxuICAgIG1lLmZsb2F0aW5nQnV0dG9uID0gbnVsbDtcblxuICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCA9IERFRi5DRlJBTUUuVElUTEVfQkFSX0NMQVNTX0RFRkFVTFQ7XG4gICAgbWUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkID0gREVGLkNGUkFNRS5USVRMRV9CQVJfQ0xBU1NfRk9DVVNFRDtcblxuXG4gICAgLy9oZWlnaHQgb2YgdGl0bGViYXJcbiAgICBtZS50aXRsZUJhckhlaWdodCA9IGFwcGVhcmFuY2UudGl0bGVCYXJIZWlnaHQ7XG5cbiAgICBtZS50aXRsZUJhckNhcHRpb24gPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbjtcbiAgICBtZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luO1xuICAgIG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZTtcbiAgICBtZS50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0ID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0O1xuICAgIG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9IGFwcGVhcmFuY2UudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuICAgIG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9IGFwcGVhcmFuY2UudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkO1xuICAgIC8vVGl0bGUgYmFyIHdpZHRoIGFkanVzdG1lbnQgdmFsdWVcbiAgICBtZS50aXRsZUFkanVzdFdpZHRoID0gMjtcblxuICAgIG1lLndpbmRvd0lkID0gd2luZG93SWQ7XG5cbiAgICBtZS5leEJvcmRlcldpZHRoID0gMDtcblxuXG4gICAgbWUubXlDYW52YXNJZCA9IHdpbmRvd0lkICsgJ19jYW52YXMnO1xuXG5cbiAgICAvL2ltZyBlbGVtZW50IGZvciBpY29uIHBsYWNlZCBvbiB0aGUgbGVmdC10b3BcbiAgICB2YXIgYXBwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vXHRcdGFwcEljb24uc3JjPSdpbWcvaWNvX2FwcF9maWxlMTYuZ2lmJztcblxuICAgIC8vdXJsIG9mIGljb24gaW1hZ2VcbiAgICBhcHBJY29uLnNyYyA9ICcnO1xuICAgIGFwcEljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGFwcEljb24uc3R5bGUubGVmdCA9ICcycHgnO1xuICAgIGFwcEljb24uc3R5bGUudG9wID0gJzJweCc7XG4gICAgYXBwSWNvbi5zdHlsZS53aWR0aCA9ICcxNnB4JztcbiAgICBhcHBJY29uLnN0eWxlLmhlaWdodCA9ICcxNnB4JztcbiAgICBhcHBJY29uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXG4gICAgLy9UaGUgdGl0bGUgYmFyIG11c3QgYmUgb24gdGhlIGZyb250IG9mIHRoZSBjYW52YXMuXG4gICAgbWUudGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1lLnRpdGxlQmFyLmNsYXNzTmFtZSA9ICdqc2ZyYW1ldGl0bGViYXInO1xuXG4gICAgaWYgKG1lLnNob3dUaXRsZUJhcikge1xuXG4gICAgICAgIG1lLnRpdGxlQmFyLmlkID0gd2luZG93SWQgKyAnX3RpdGxlJztcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIC8vMjAxODA3MjJcbiAgICAgICAgLy8yMDE4MDcyMijnlLvpnaLjga7lj7PjgajkuIvjgavpgI/mmI7pg6jliIbjgYzjgafjgY3jgabjgZfjgb7jgYbjga7jgafjgIHoqr/mlbTlgKTjgpLjgYTjgozjgZ8pXG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gKHdfd2lkdGggLSBtZS50aXRsZUFkanVzdFdpZHRoICsgREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIpICsgJ3B4JztcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcblxuXG4gICAgICAgIGlmIChtZS50aXRsZUJhckhlaWdodCkge1xuXG4gICAgICAgICAgICB2YXIgdGl0bGVCYXJBZGp1c3QgPSAwO1xuXG4gICAgICAgICAgICBpZiAobWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgLy90aXRsZUJhckFkanVzdCA9IC0xO1xuICAgICAgICAgICAgICAgIC8v44K/44Kk44OI44Or44OQ44O844GM44Ga44KM44Gm44GX44G+44GGXG4gICAgICAgICAgICAgICAgdGl0bGVCYXJBZGp1c3QgPSAwO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmhlaWdodCA9IChwYXJzZUludChtZS50aXRsZUJhckhlaWdodCwgMTApICsgMCkgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbWUudGl0bGVCYXJDb2xvckRlZmF1bHQ7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLnpJbmRleCA9IDA7XG5cbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuY29sb3IgPSBtZS50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQ7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmZvbnRTaXplID0gbWUudGl0bGVCYXJDYXB0aW9uRm9udFNpemU7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmZvbnRXZWlnaHQgPSBtZS50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0O1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS50ZXh0U2hhZG93ID0gXCIwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjcpXCI7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5saW5lSGVpZ2h0ID0gbWUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0O1xuXG5cbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuYm9yZGVyQm90dG9tID0gbWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuICAgICAgICAvL21lLnRpdGxlQmFyLnN0eWxlLmJveFNoYWRvdyA9ICcwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG5cblxuICAgICAgICAvL1NldCBub3QgdG8gZGlzcGxheSBvdmVyZmxvdyBjaGFyYWN0ZXIgc3RyaW5nXG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cblxuICAgICAgICB2YXIgdGl0bGVCYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4gICAgICAgIC8vJ3NwYW4nIHRvIHN0b3JlIHRleHRcbiAgICAgICAgdmFyIHRpdGxlQmFyVGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5pZCA9IG1lLmlkICsgJ190aXRsZUJhclRleHQnO1xuICAgICAgICBpZiAobWUudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUubGVmdCA9IHBhcnNlSW50KG1lLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4sIDEwKSArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIHRpdGxlQmFyVGV4dFNwYW4uYXBwZW5kQ2hpbGQodGl0bGVCYXJUZXh0KTtcbiAgICAgICAgbWUudGl0bGVCYXIuYXBwZW5kQ2hpbGQodGl0bGVCYXJUZXh0U3Bhbik7XG5cbiAgICAgICAgLy9EaXNjb250aW51ZSBhcHBpY29uKDIwMDYxMDExKVxuICAgICAgICAvL21lLnRpdGxlQmFyLmFwcGVuZENoaWxkKGFwcEljb24pO1xuICAgIH1cblxuICAgIG1lLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKG1lLnRpdGxlQmFyKTtcblxuXG4gICAgLy9TZXQgQ2FudmFzIHRocm91Z2hvdXQgdGhlIHdpbmRvd1xuXG4gICAgLy9wYXJzZUludChtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQpOy8vbWUudGl0bGVCYXJIZWlnaHQpO1xuICAgIHZhciBjYW52YXNNb3JlSGVpZ2h0ID0gcGFyc2VJbnQobWUudGl0bGVCYXJIZWlnaHQsIDEwKSAtIHRpdGxlQmFyQWRqdXN0O1xuICAgIHZhciBjYW52YXNNb3JlU3BhY2luZyA9IHBhcnNlSW50KG1lLnRpdGxlQWRqdXN0V2lkdGgsIDEwKTtcblxuICAgIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzTW9yZUhlaWdodCA9IDA7XG4gICAgICAgIGNhbnZhc01vcmVTcGFjaW5nID0gMDtcbiAgICAgICAgdGl0bGVCYXJBZGp1c3QgPSAwO1xuICAgIH1cblxuXG4gICAgbWUuY2FudmFzTmV0V2lkdGggPSB3X3dpZHRoIC0gY2FudmFzTW9yZVNwYWNpbmc7XG4gICAgbWUuY2FudmFzTmV0SGVpZ2h0ID0gd19oZWlnaHQgLSBjYW52YXNNb3JlSGVpZ2h0IC0gY2FudmFzTW9yZVNwYWNpbmcgLSAxIC0gdGl0bGVCYXJBZGp1c3QgKyBtZS5mcmFtZUhlaWdodEFkanVzdDtcblxuXG4gICAgLy9DaGFuZ2UgdGhlIHN0eWxlIG9mIGh0bWxFbGVtZW50IG9mIENGcmFtZSAoQ0JlYW4pLlxuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcblxuXG4gICAgLy9DcmVhdGUgYSBjYW52YXNcbiAgICBtZS5jYW52YXMgPSBuZXcgQ0NhbnZhcyhtZS5odG1sRWxlbWVudCwgbWUubXlDYW52YXNJZCwgMCwgY2FudmFzTW9yZUhlaWdodCwgd193aWR0aCAtIGNhbnZhc01vcmVTcGFjaW5nLCB3X2hlaWdodCAtIGNhbnZhc01vcmVIZWlnaHQgLSBjYW52YXNNb3JlU3BhY2luZyk7XG5cbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBERUYuQ0ZSQU1FLkNBTlZBU19FTEVNRU5UX0JHQ09MT1I7XG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXG4gICAgLy9IYW5kbGluZyB0aGUgb21vdXNlZG93biBldmVudCB0aGF0IG9jY3VycmVkIGluIENhbnZhcyB3aGljaCBpcyBhIGNoaWxkIGVsZW1lbnQgb2YgQ0ZyYW1lXG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQub25tb3VzZWRvd24gPSBtZS5jYW52YXNNb3VzZURvd247XG5cbiAgICAvL1NldCB0aGUgY2FudmFzIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgb2YgdGhlIGNhbnZhcyBodG1sIGVsZW1lbnQgY2FudmFzRWxlbWVudC5cbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5wYXJlbnRDRnJhbWUgPSBtZTtcblxuXG4gICAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQobWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICB2YXIgdG1wQ2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQobWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgICB2YXIgbWFya2VyV2lkdGggPSAxNjtcbiAgICB2YXIgbWFya2VySGVpZ2h0ID0gMTY7XG5cbiAgICAvL09mZnNldCBmcm9tIG1hcmtlciBlZGdlXG4gICAgdmFyIGVkZ2VNYXJnaW4gPSAxNjtcblxuICAgIC8vTG93ZXIgcmlnaHQoUi1EKVxuICAgIHZhciBtYXJrZXJSRCA9IG5ldyBDTWFya2VyV2luZG93KFxuICAgICAgICBtZS5teUNhbnZhc0lkICsgJ19SRCcsXG4gICAgICAgIHRtcENhbnZhc1dpZHRoIC0gbWFya2VyV2lkdGggKyBlZGdlTWFyZ2luLFxuICAgICAgICB0bXBDYW52YXNIZWlnaHQgLSBtYXJrZXJIZWlnaHQgKyBlZGdlTWFyZ2luLFxuICAgICAgICBtYXJrZXJXaWR0aCxcbiAgICAgICAgbWFya2VySGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICAnUkQnKTtcblxuICAgIG1hcmtlclJELmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnOy8vbnctcmVzaXplJztcblxuICAgIC8vU2luY2Ugb25seSB0aGUgZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGFjcXVpcmVkIGFuZCB0aGUgbW92ZW1lbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXNcbiAgICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICAgIG1hcmtlclJELmh0bWxFbGVtZW50LmFyZ1ggPSAwO1xuICAgIG1hcmtlclJELmh0bWxFbGVtZW50LmFyZ1kgPSAwO1xuXG5cbiAgICAvL0JvdHRvbShELUQpXG4gICAgdmFyIG1hcmtlckREID0gbmV3IENNYXJrZXJXaW5kb3coXG4gICAgICAgIG1lLm15Q2FudmFzSWQgKyAnX0REJyxcbiAgICAgICAgMCxcbiAgICAgICAgdG1wQ2FudmFzSGVpZ2h0IC0gbWFya2VySGVpZ2h0ICsgZWRnZU1hcmdpbixcbiAgICAgICAgdG1wQ2FudmFzV2lkdGggLSBtYXJrZXJXaWR0aCArIGVkZ2VNYXJnaW4sXG4gICAgICAgIG1hcmtlckhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgJ0REJyk7XG5cbiAgICBtYXJrZXJERC5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnbi1yZXNpemUnO1xuXG4gICAgLy9TaW5jZSBvbmx5IHRoZSBkZWx0YVggYW5kIGRlbHRhWSBhcmUgYWNxdWlyZWQgYW5kIHRoZSBtb3ZlbWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpc1xuICAgIC8vIHBlcmZvcm1lZCBieSBDRnJhbWVfcmVzaXplLCB0aGUgbW92ZW1lbnQgY29lZmZpY2llbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXMgc2V0IHRvIDAuXG4gICAgbWFya2VyREQuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG4gICAgbWFya2VyREQuaHRtbEVsZW1lbnQuYXJnWSA9IDA7XG5cbiAgICAvL1JpZ2h0KFItUilcbiAgICB2YXIgbWFya2VyUlIgPSBuZXcgQ01hcmtlcldpbmRvdyhcbiAgICAgICAgbWUubXlDYW52YXNJZCArICdfUlInLFxuICAgICAgICB0bXBDYW52YXNXaWR0aCAtIG1hcmtlcldpZHRoICsgZWRnZU1hcmdpbixcbiAgICAgICAgMCxcbiAgICAgICAgbWFya2VyV2lkdGgsXG4gICAgICAgIHRtcENhbnZhc0hlaWdodCAtIG1hcmtlckhlaWdodCArIGVkZ2VNYXJnaW4sXG4gICAgICAgIDAsXG4gICAgICAgICdSUicpO1xuXG4gICAgbWFya2VyUlIuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3ctcmVzaXplJztcblxuICAgIC8vU2luY2Ugb25seSB0aGUgZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGFjcXVpcmVkIGFuZCB0aGUgbW92ZW1lbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXNcbiAgICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICAgIG1hcmtlclJSLmh0bWxFbGVtZW50LmFyZ1kgPSAwO1xuICAgIG1hcmtlclJSLmh0bWxFbGVtZW50LmFyZ1ggPSAwO1xuXG4gICAgLy9BZGQgc2l6ZSBjaGFuZ2UgbWFya2VyIHRvIGNhbnZhcy5cbiAgICBtZS5jYW52YXMuYWRkQmVhbihtYXJrZXJSRCk7XG4gICAgbWUuY2FudmFzLmFkZEJlYW4obWFya2VyREQpO1xuICAgIG1lLmNhbnZhcy5hZGRCZWFuKG1hcmtlclJSKTtcblxuICAgIC8vTWV0aG9kIHRvIHJlbW92ZSBzaXplIGNoYW5nZSBtYXJrZXIgKGNhbiBub3QgcmVzaXplKVxuICAgIG1lLnJlbW92ZU1hcmtlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJELmlkKTtcbiAgICAgICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyREQuaWQpO1xuICAgICAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSUi5pZCk7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICB9O1xuXG5cbiAgICBtZS5yZW1vdmVNYXJrZXJzMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUkQuaWQpO1xuICAgICAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJERC5pZCk7XG4gICAgICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJSLmlkKTtcbiAgICB9O1xuXG5cbiAgICAvL2FkZCBmcmFtZUNvbXBvbmVudHNbYmVnaW5dXG4gICAgZm9yICh2YXIgaWR4IGluIGFwcGVhcmFuY2UuZnJhbWVDb21wb25lbnRzKSB7XG5cbiAgICAgICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gYXBwZWFyYW5jZS5mcmFtZUNvbXBvbmVudHNbaWR4XTtcblxuICAgICAgICBmcmFtZUNvbXBvbmVudC5zZXRGcmFtZShtZSk7XG5cbiAgICAgICAgLy9pZiBmcmFtZUNvbXBvbmVudCBoYXMgc3BlY2lhbCBuYW1lICdjbG9zZUJ1dHRvbicsIGl0IHdpbGwgYWN0IGFzIGEgY2xvc2UgYnV0dG9uLlxuICAgICAgICBpZiAoJ2Nsb3NlQnV0dG9uJyA9PSBmcmFtZUNvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgZnJhbWVDb21wb25lbnQuaHRtbEVsZW1lbnQub25jbGljayA9IG1lLmNsb3NlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuYWRkRnJhbWVDb21wb25lbnQoZnJhbWVDb21wb25lbnQpO1xuICAgIH1cbiAgICAvL2FkZCBmcmFtZUNvbXBvbmVudHNbZW5kXVxuXG4gICAgLy9vdmVycmlkZSB0aGUgZmllbGRcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgbWUuaHRtbEVsZW1lbnQub25jb250ZXh0bWVudSA9IHRoaXMuY29udGV4dE1lbnU7XG5cblxuICAgIC8vVGhlIHBvbGljeSBvZiBCb3JkZXIgZHJhd2luZyBzZWVtcyB0byBiZSBkaWZmZXJlbnQgYmV0d2VlbiBJRSBhbmQgRkYuXG4gICAgdmFyIGNhcmliVmFsID0gMDtcblxuXG4gICAgbWUuY2FyaWJWYWx1ZSA9IGNhcmliVmFsO1xuXG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBtZS5leEJvcmRlcldpZHRoICsgJ3B4JztcblxuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gKHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLCAxMCkgLSBjYXJpYlZhbCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IChwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKSAtIGNhcmliVmFsICsgMSkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gJ2N3aW5kb3cnO1xuICAgIG1lLmh0bWxFbGVtZW50Lm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJveFNpemluZyA9ICdjb250ZW50LWJveCc7XG5cblxuICAgIGlmIChhcHBlYXJhbmNlLmZyYW1lQm9yZGVyU3R5bGUpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyU3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKGFwcGVhcmFuY2UuZnJhbWVCb3hTaGFkb3cpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gYXBwZWFyYW5jZS5mcmFtZUJveFNoYWRvdztcbiAgICB9XG5cbiAgICAvL1RPRE8gZGVwcmVjYXRpb24oYmVjYXVzZSBDSWZGcmFtZSBpcyBleHRlbmRlZCB0aGlzIG9wZXJhdGlvbilcbiAgICBpZiAocGFyc2VJbnQoYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCwgMTApID4gMCkge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdDtcblxuICAgIH1cbiAgICBpZiAocGFyc2VJbnQoYXBwZWFyYW5jZS5mcmFtZUJvcmRlclJhZGl1cywgMTApID4gMCkge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyUmFkaXVzO1xuICAgIH1cblxuICAgIG1lLm9uQ2xvc2VGcmFtZUxpc3RlbmVyID0gbnVsbDtcblxufVxuXG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0VGl0bGVCYXJDbGFzc05hbWUgPSBmdW5jdGlvbiAoY2xhc3NOYW1lRm9yRGVmYXVsdCwgY2xhc3NOYW1lRm9yRm9jdXNlZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKGNsYXNzTmFtZUZvckRlZmF1bHQpIHtcbiAgICAgICAgbWUudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0ID0gY2xhc3NOYW1lRm9yRGVmYXVsdDtcbiAgICAgICAgbWUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkID0gY2xhc3NOYW1lRm9yRGVmYXVsdDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZUZvckZvY3VzZWQpIHtcbiAgICAgICAgbWUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkID0gY2xhc3NOYW1lRm9yRm9jdXNlZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lO1xufTtcbi8qKlxuICogQWRkIGZyYW1lQ29tcG9uZW50KFdyYXBwZWQgRE9NIGVsZW1lbnQgbGlrZSAnZGl2JyB0byBkaXNwbGF5IGFib3ZlIHRoZSBmcmFtZSkgdG8gZnJhbWVcbiAqIEBwYXJhbSBmcmFtZUNvbXBvbmVudFxuICovXG5DRnJhbWUucHJvdG90eXBlLmFkZEZyYW1lQ29tcG9uZW50ID0gZnVuY3Rpb24gKGZyYW1lQ29tcG9uZW50KSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50LmlkXSA9IGZyYW1lQ29tcG9uZW50O1xuICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50KTtcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIEdldCBzdG9yZWQgZnJhbWUgY29tcG9uZW50IGJ5IGlkXG4gKiBAcGFyYW0gZnJhbWVDb21wb25lbnRcbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRGcmFtZUNvbXBvbmVudEVsZW1lbnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS5mcmFtZUNvbXBvbmVudE1hcFtpZF0uaHRtbEVsZW1lbnQ7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnJlbW92ZUZyYW1lQ29tcG9uZW50QnlJZCA9IGZ1bmN0aW9uIChmcmFtZUNvbXBvbmVudElkKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuXG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQucmVtb3ZlQ2hpbGQoZnJhbWVDb21wb25lbnQuaHRtbEVsZW1lbnQpO1xuICAgIGRlbGV0ZSBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbn07XG5DRnJhbWUucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKG1lLnNob3dUaXRsZUJhcikge1xuXG4gICAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cik7XG4gICAgICAgIC8vZmlyc3RDaGlsZOOBrmZpcnN0Q2hpbGTjgYxzcGFuXG4gICAgICAgIG1lLnRpdGxlQmFyLmZpcnN0Q2hpbGQucmVwbGFjZUNoaWxkKHRleHROb2RlLCBtZS50aXRsZUJhci5maXJzdENoaWxkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gbWU7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uIChkZWx0YUxlZnQsIGRlbHRhVG9wLCBkZWx0YVdpZHRoLCBkZWx0YUhlaWdodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICB2YXIgdG1wTGVmdCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbiAgICB2YXIgdG1wVG9wID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgdmFyIHRtcFdpZHRoID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICB2YXIgdG1wSGVpZ2h0ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQodG1wTGVmdCArIGRlbHRhTGVmdCwgMTApICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSBwYXJzZUludCh0bXBUb3AgKyBkZWx0YVRvcCwgMTApICsgJ3B4JztcblxuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gcGFyc2VJbnQodG1wV2lkdGggKyBkZWx0YVdpZHRoLCAxMCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHRtcEhlaWdodCArIGRlbHRhSGVpZ2h0LCAxMCkgKyAncHgnO1xuXG4gICAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQobWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICB2YXIgdG1wQ2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQobWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgICAvL1NpbmNlIGNhbnZhc0VsZW1lbnQgaXMgYSAoMCwgMCkgcmVsYXRpdmUgY29vcmRpbmF0ZSB3aXRoIHJlc3BlY3QgdG8gdGhlIHBhcmVudCBlbGVtZW50LFxuICAgIC8vIHNvIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY2hhbmdlIGxlZnQgYW5kIHRvcC5cbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCA9ICh0bXBDYW52YXNXaWR0aCArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAodG1wQ2FudmFzSGVpZ2h0ICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcblxuICAgIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuICAgICAgICAvL0NoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgdGl0bGUgYmFyLiBUaXRsZUFkanVzdFdpZHRoIGV0Yy5cbiAgICAgICAgLy9UaGUgcmVhc29uIHdoeSB5b3UgZG8gbm90IGhhdmUgdG8gdXNlIHRpdGxlQWRqdXN0V2lkdGggaXMgYmVjYXVzZVxuICAgICAgICAvLyB0aGVzZSBzY2FsaW5nIGFyZSBkb25lIHdpdGggZGlmZmVyZW5jZXMgKGRlbHRhWCwgZGVsdGFZKS5cbiAgICAgICAgLy9UaGVyZWZvcmUsIGlmIHlvdSBhZGp1c3Qgd2l0aCB0aGUgdGl0bGVBZGp1c3RXaWR0aCBhc1xuICAgICAgICAvLyB0aGUgaW5pdGlhbCB2YWx1ZSwgdGhlIG90aGVyIHdpbGwgc3RyZXRjaCByZWxhdGl2ZS5cbiAgICAgICAgLy9Zb3UgZG8gbm90IHRoaW5rIHlvdSBjYW4gdXNlIGlmRGVsdGFcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSAodG1wQ2FudmFzV2lkdGggKyBkZWx0YVdpZHRoKSArICdweCc7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICB9XG5cblxuICAgIGZvciAodmFyIGJlYW5OYW1lIGluIG1lLmNhbnZhcy5iZWFuTGlzdCkge1xuICAgICAgICB2YXIgdG1wQmVhbiA9IG1lLmNhbnZhcy5iZWFuTGlzdFtiZWFuTmFtZV07XG5cbiAgICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gJ2NtYXJrZXJ3aW5kb3cnKSB7XG4gICAgICAgICAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUkQnKSB7XG4gICAgICAgICAgICAgICAgLy9Nb3ZlIHRoZSBzaXplIGNoYW5nZSBsb3dlciByaWdodChSRCkgbWFya2VyIGFjY29yZGluZyB0byB0aGUgYW1vdW50IG9mIG1vdmVtZW50LlxuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ0REJykge1xuICAgICAgICAgICAgICAgIC8vTW92ZSB0aGUgc2l6ZSBjaGFuZ2UgbG93ZXIgbWFya2VyIGFjY29yZGluZyB0byB0aGUgbW92ZW1lbnQgYW1vdW50LlxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBtb3ZlIGxlZnQuT25seSB0aGUgd2lkdGggd2lsIGluY3JlYXNlIG9yIGRlY3JlYXNlLlxuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUlInKSB7XG4gICAgICAgICAgICAgICAgLy9Nb3ZlIHRoZSBzaXplIGNoYW5nZSByaWdodCBtYXJrZXIgYWNjb3JkaW5nIHRvIHRoZSBtb3ZlbWVudCBhbW91bnRcbiAgICAgICAgICAgICAgICAvL0RvIG5vdCBtb3ZlIHRvcCxPbmx5IHRoZSBoZWlnaHQgd2lsbCBpbmNyZWFzZSBvciBkZWNyZWFzZS5cbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuQ0ZyYW1lLnByb3RvdHlwZS5jYW52YXNNb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAvL01vdXNlZG93biBwcm9jZXNzaW5nIG9mIENGcmFtZS5jYW52YXNcblxuICAgIC8vJ1RoaXMnIGluIHRoaXMgbWV0aG9kIGluZGljYXRlcyAnQ3dpbmRvdy5jYW52YXMuY2FudmFzRWxlbWVudCcuXG4gICAgaWYgKHRoaXMucGFyZW50Q0ZyYW1lLnBhcmVudENhbnZhcy5tb3VzZURvd25Tb3VyY2UgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBhcmVudENGcmFtZS5wYXJlbnRDYW52YXMubW91c2VEb3duU291cmNlID0gJ2NoaWxkY2FudmFzJztcbiAgICB9XG5cblxufTtcbkNGcmFtZS5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5jYW52YXMubW91c2VVcChlKTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIC8vQ2xvc2UgcHJvY2Vzc2luZyBvZiBDRnJhbWUgZnJvbSBDbG9zZUJ1dHRvblxuICAgIHRoaXMucGFyZW50T2JqZWN0LnBhcmVudENhbnZhcy5yZW1vdmVCZWFuKHRoaXMucGFyZW50T2JqZWN0LmlkKTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuY2xvc2VGcmFtZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgLy9DbG9zZSBwcm9jZXNzaW5nIG9mIENGcmFtZVxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICB0aGlzLnBhcmVudENhbnZhcy5yZW1vdmVCZWFuKG1lLndpbmRvd0lkKTtcbiAgICBpZiAobWUub25DbG9zZUZyYW1lTGlzdGVuZXIpIHtcbiAgICAgICAgbWUub25DbG9zZUZyYW1lTGlzdGVuZXIobWUpO1xuICAgIH1cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0T25DbG9zZUZyYW1lTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLm9uQ2xvc2VGcmFtZUxpc3RlbmVyID0gbGlzdGVuZXI7XG5cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuY29udGV4dE1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9JZiB5b3UgaXNzdWUgdGhlIHJpZ2h0LWNsaWNrIG1lbnUgaW4gdGhlIHdpbmRvdywgc2V0IHRoZSBzb3VyY2UgdG8gQ0ZyYW1lLlxuICAgIHZhciBjb250ZXh0TWVudVNvdXJjZSA9ICdDRnJhbWUnO1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXRUaXRsZUJhclRleHRDb2xvciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gc3RyO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5LCBhbmNob3IpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdmFyIGZyYW1lV2lkdGggPSBtZS5nZXRXaWR0aCgpO1xuICAgIHZhciBmcmFtZUhlaWdodCA9IG1lLmdldEhlaWdodCgpO1xuXG4gICAgbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseSh4LCB5LCBhbmNob3IsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0KTtcblxuICAgIHJldHVybiBtZTtcbn07XG5DRnJhbWUucHJvdG90eXBlLl9zZXRQb3NpdGlvbkludGVybmFsbHkgPSBmdW5jdGlvbiAoeCwgeSwgYW5jaG9yLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgIG1lLmFuY2hvciA9IGFuY2hvcjtcbiAgICB9XG5cbiAgICBpZiAoIWFuY2hvciB8fCBDQUxJR04uTEVGVF9UT1AgPT0gYW5jaG9yKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1RPUCA9PSBhbmNob3IpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCAvIDIgKyB4KSArICdweCc7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGFuY2hvcikge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKC1mcmFtZVdpZHRoICsgeCkgKyAncHgnO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkxFRlRfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0IC8gMiArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCAvIDIgKyB4KSArICdweCc7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICgtZnJhbWVIZWlnaHQgLyAyICsgeSkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCArIHgpICsgJ3B4JztcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKC1mcmFtZUhlaWdodCAvIDIgKyB5KSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5MRUZUX0JPVFRPTSA9PSBhbmNob3IpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0ICsgeSkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggLyAyICsgeCkgKyAncHgnO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0ICsgeSkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfQk9UVE9NID09IGFuY2hvcikge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKC1mcmFtZVdpZHRoICsgeCkgKyAncHgnO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0ICsgeSkgKyAncHgnO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyByZWxhdGl2ZSBwb3NpdGlvbiB3aXRoIGFuY2hvclxuICogQHJldHVybnMge3t4OiAqLCB5OiAqLCBhbmNob3I6ICp9fVxuICovXG5DRnJhbWUucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGZyYW1lV2lkdGggPSBtZS5nZXRXaWR0aCgpO1xuICAgIHZhciBmcmFtZUhlaWdodCA9IG1lLmdldEhlaWdodCgpO1xuICAgIHZhciB4O1xuICAgIHZhciB5O1xuICAgIHZhciBhbmNob3IgPSBtZS5hbmNob3I7XG4gICAgaWYgKCFhbmNob3IgfHwgQ0FMSUdOLkxFRlRfVE9QID09IGFuY2hvcikge1xuICAgICAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICAgICAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1RPUCA9PSBhbmNob3IpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGggLyAyO1xuICAgICAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5SSUdIVF9UT1AgPT0gYW5jaG9yKSB7XG4gICAgICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoO1xuICAgICAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGggLyAyO1xuICAgICAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodCAvIDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5SSUdIVF9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgICAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aDtcbiAgICAgICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQgLyAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoIC8gMjtcbiAgICAgICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5SSUdIVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoO1xuICAgICAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5LCBhbmNob3I6IGFuY2hvcn07XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICByZXR1cm4gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xufTtcblxuXG5DRnJhbWUucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbn07XG5DRnJhbWUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICByZXR1cm4gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBtZS5yZXNpemUoMCwgMCwgd2lkdGggLSBtZS5nZXRXaWR0aCgpLCBoZWlnaHQgLSBtZS5nZXRIZWlnaHQoKSwgdHJ1ZSk7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXRXaW5kb3dJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS53aW5kb3dJZFxufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLnByb3BlcnR5Lm5hbWU7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnNldE5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUucHJvcGVydHkubmFtZSA9IG5hbWU7XG59O1xuLyoqXG4gKiBlbmQgb2YgQ0ZyYW1lIGNsYXNzXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cblxuaW5oZXJpdChDSWZGcmFtZSwgQ0ZyYW1lKTtcblxuLyoqXG4gKiBDSWZGcmFtZSBjbGFzc1xuICogRXh0ZW5zaW9uIGNsYXNzIHdpdGggY29udGVudHMgZnJhbWUgb2YgQ0ZyYW1lIGFzIGlmcmFtZVxuICogQHBhcmFtIHdpbmRvd0lkXG4gKiBAcGFyYW0gYXBwZWFyYW5jZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENJZkZyYW1lKHdpbmRvd0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UpIHtcblxuXG4gICAgdmFyIHdsZWZ0ID0gbGVmdDtcbiAgICB2YXIgd3RvcCA9IHRvcDtcbiAgICB2YXIgd3dpZHRoID0gd2lkdGg7XG4gICAgdmFyIHdoZWlnaHQgPSBoZWlnaHQ7XG4gICAgdmFyIHppbmRleCA9IGFwcGVhcmFuY2UuemluZGV4O1xuICAgIHZhciB3Ym9yZGVyd2lkdGggPSBudWxsO1xuXG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG5cbiAgICB0aGlzLm1pbkZyYW1lV2lkdGggPSAxMjg7XG4gICAgdGhpcy5taW5XaW5kb3dIZWlnaHQgPSAzMjtcblxuICAgIC8qKlxuICAgICAqIElmIHRoaXMgdmFsdWUgaXMgdHJ1ZSwgdGhlIGZvY3VzIHdpbGwgbW92ZSB3aGVuIHRhcHBpbmcgdGhlIGlmcmFtZSBhcmVhLFxuICAgICAqIGJ1dCBpZiB0aGUgd2luZG93IGRvIG5vdCBoYXZlIHRoZSBmb2N1cywgeW91IGNhbiBub3QgY2xpY2sgb24gdGhlIGVsZW1lbnQgaW4gdGhlIGlmcmFtZS5cbiAgICAgKi9cbiAgICB0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqICBPbmx5IGluIHRoZSBjYXNlIG9mIHJlc2l6aW5nIGEgdHJhbnNwYXJlbnQgc2NyZWVuIGNhbiBiZSBkaXNwbGF5ZWQgb24gdGhlIGlmcmFtZVxuICAgICAqICBhbmQgdGhlIHNpemUgY2FuIGJlIGFkanVzdGVkIHNtb290aGx5LlxuICAgICAqICB0cnVlIGlzIHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHRoaXMub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUgPSB0cnVlO1xuXG5cbiAgICB0aGlzLnRpdGxlQmFyQ29sb3JGb2N1c2VkID0gYXBwZWFyYW5jZS50aXRsZUJhckNvbG9yRm9jdXNlZDtcbiAgICB0aGlzLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gYXBwZWFyYW5jZS50aXRsZUJhckNvbG9yRGVmYXVsdDtcblxuICAgIHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQ7XG4gICAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZDtcblxuICAgIC8vY2FsbCBzdXBlciBjb25zdHJ1Y3RvclxuICAgIENJZkZyYW1lLnN1cGVyQ29uc3RydWN0b3IuY2FsbChtZSwgd2luZG93SWQsIHdsZWZ0LCB3dG9wLCB3d2lkdGgsIHdoZWlnaHQsIHppbmRleCwgd2JvcmRlcndpZHRoLCBhcHBlYXJhbmNlKTtcblxuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgbWUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0O1xuICAgIG1lLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZDtcblxuICAgIC8vYm9yZGVyIHdpZHRoXG4gICAgbWUuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICAgIG1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZDtcblxuXG4gICAgbWUuaWZyYW1lID0gbnVsbDtcblxuXG4gICAgLy9PZmZzZXQgdmFsdWUgZm9yIHdpZHRoIGFkanVzdG1lbnQgb2YgaWZyYW1lXG4gICAgbWUuaWZEZWx0YSA9IDA7XG5cbiAgICBtZS5yZXNpemFibGUgPSB0cnVlO1xuXG5cbiAgICBtZS5vbk1vdXNlTW92ZU9uSWZyYW1lID0gbnVsbDtcbiAgICBtZS5vbk1vdXNlVXBPbklmcmFtZSA9IG51bGw7XG5cbiAgICBtZS5faGFzRm9jdXMgPSBmYWxzZTtcbiAgICBtZS5faGFzRm9jdXNUaW1lID0gMDtcblxuXG4gICAgbWUuaHRtbEVsZW1lbnQudHlwZU5hbWUgPSAnY2lmd2luZG93JztcblxuICAgIC8vbmFtZSBvZiBpZnJhbWVcbiAgICB2YXIgZXhJZnJhbWVOYW1lID0gJ3JpdmVyc3VuXycgKyB3aW5kb3dJZDtcblxuXG4gICAgbWUuZGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIG1lLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG5cbiAgICBtZS5pZnJhbWUubmFtZSA9IGV4SWZyYW1lTmFtZTtcblxuICAgIG1lLmlmcmFtZS5pZCA9IGV4SWZyYW1lTmFtZTtcblxuICAgIG1lLmlmcmFtZS5mcmFtZUJvcmRlciA9ICcwJztcbiAgICBtZS5pZnJhbWUuc2Nyb2xsaW5nID0gJ25vJztcblxuICAgIG1lLmlmcmFtZS56SW5kZXggPSAtMTtcblxuICAgIC8vQWxsb3cgdHJhbnNwYXJlbnQgb2YgaWZyYW1lIGJhY2tncm91bmQuXG4gICAgbWUuaWZyYW1lLmFsbG93VHJhbnNwYXJlbmN5ID0gJ3RydWUnO1xuICAgIG1lLmlmcmFtZS53aWR0aCA9IG1lLmNhbnZhc05ldFdpZHRoIC0gbWUuaWZEZWx0YSArIDA7XG4gICAgbWUuaWZyYW1lLmhlaWdodCA9IG1lLmNhbnZhc05ldEhlaWdodCAtIG1lLmlmRGVsdGEgKyAwO1xuXG4gICAgbWUuc2hvd1RpdGxlQmFyID0gYXBwZWFyYW5jZS5zaG93VGl0bGVCYXI7XG5cbiAgICBtZS5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzID0gYXBwZWFyYW5jZS5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzO1xuXG4gICAgbWUuZnJhbWVCb3JkZXJSYWRpdXMgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyUmFkaXVzO1xuXG5cbiAgICBtZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cygpO1xuXG4gICAgbWUudXNlSWZyYW1lID0gZmFsc2U7XG5cblxuICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKG1lLmlmcmFtZSk7XG5cbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChtZS5kZnJhbWUpO1xuXG5cbiAgICB0aGlzLnNldFVzZUlmcmFtZSA9IGZ1bmN0aW9uICh1c2VJZnJhbWUpIHtcbiAgICAgICAgbWUudXNlSWZyYW1lID0gdXNlSWZyYW1lO1xuICAgICAgICBtZS5pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBtZS5pZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBtZS5pZnJhbWUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICBtZS5pZnJhbWUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIG1lLmlmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgbWUuaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblxuICAgICAgICBtZS5kZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBtZS5kZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBtZS5kZnJhbWUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICBtZS5kZnJhbWUuc3R5bGUuYm94U2l6aW5nID0gXCJjb250ZW50LWJveFwiO1xuXG4gICAgICAgIG1lLmRmcmFtZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgbWUuZGZyYW1lLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBtZS5kZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICAvL21lLmRmcmFtZS5zdHlsZS5ib3JkZXJTdHlsZT1cInNvbGlkXCI7XG4gICAgICAgIG1lLmRmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG5cblxuICAgICAgICBpZiAodXNlSWZyYW1lKSB7XG4gICAgICAgICAgICBtZS5pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIG1lLmRmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgICAgbWUuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIG1lLmRmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1lLnNldFVzZUlmcmFtZShhcHBlYXJhbmNlLnVzZUlmcmFtZSk7XG5cbiAgICAvL0lmIGl0IGlzIElFLCBzZXQgdGhlIGNhbnZhc0VsZW1lbnQgb2YgdGhlIGNhbnZhcyB3aGljaCBpcyB0aGUgcGFyZW50IG9mIHRoZSBpZnJhbWUgdG8gdHJhbnNwYXJlbnQuXG5cbiAgICBpZiAobWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fCBtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkge1xuICAgICAgICAvL0NyZWF0ZSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgICAgICAgbWUudHJhbnNwYXJlbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAvL21lLnRyYW5zcGFyZW5jZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGltZy9pbWdfYmFyb25fdHAuZ2lmKSc7XG5cbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLnRvcCA9ICcwcHgnO1xuXG4gICAgICAgIC8vVHJhbnNwYXJlbnQgc2NyZWVuIGlzIDBweCB3aGVuIGNyZWF0aW5nIHdpbmRvd1xuICAgICAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuXG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuYm9yZGVyV2lkdGggPSAnMHB4JztcbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmJvcmRlckNvbG9yID0gJyNmZjAwZWUnO1xuICAgICAgICAvL3RoaXMudHJhbnNwYXJlbmNlLnN0eWxlLmJvcmRlclN0eWxlPSdub25lJztcbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgICAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcHBlYXJhbmNlLmZyYW1lQmFja2dyb3VuZENvbG9yO1xuXG5cbiAgICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQobWUudHJhbnNwYXJlbmNlKTtcbiAgICB9XG5cbn1cblxuXG5DSWZGcmFtZS5wcm90b3R5cGUuZ2V0RnJhbWVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLmRmcmFtZTtcbn07XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldEhUTUwgPSBmdW5jdGlvbiAoaHRtbCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuZGZyYW1lLmlubmVySFRNTCA9IGh0bWw7XG59O1xuXG4vKipcbiAqIGZpbmQgRE9NIEVsZW1lbnQgaW4gdGhlIGZyYW1lIGJ5IHF1ZXJ5U2VsZWN0b3I8YnI+XG4gKiAgRXhhbXBsZXM8YnI+XG4gKiAgICAgIGZyYW1lLiQoXCIjbXlfaWRfbmFtZVwiKTtcbiAqICAgICAgZnJhbWUuJChcIi5teV9jbGFzc19uYW1lXCIpO1xuICogICAgICBmcmFtZS4kKFwiZGl2PmltZ1wiKTtcbiAqICAgICAgZnJhbWUuJChcImlucHV0W3R5cGU9J3N1Ym1pdF1cIik7XG4gKiBAcGFyYW0gcVxuICogQHJldHVybnMge05vZGV9XG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS4kID0gZnVuY3Rpb24gKHEpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKG1lLnVzZUlmcmFtZSkge1xuICAgICAgICB2YXIgZG9jSW5JZnJhbWUgPSBtZS5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgcmV0dXJuIGRvY0luSWZyYW1lLnF1ZXJ5U2VsZWN0b3IocSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIHJldHVybiBtZS5kZnJhbWUucXVlcnlTZWxlY3RvcihxKTtcblxuICAgIH1cbn07XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLmFkanVzdEZyYW1lQm9yZGVyUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBpZiAocGFyc2VJbnQobWUuZnJhbWVCb3JkZXJSYWRpdXMsIDEwKSA+IDApIHtcblxuICAgICAgICB2YXIgaW5uZXJCb3JkZXJSYWRpdXMgPSBtZS5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzKG1lLCBtZS5faGFzRm9jdXMpO1xuXG4gICAgICAgIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuICAgICAgICAgICAgLy90aXRsZSBiYXIgZXhpc3RzXG4gICAgICAgICAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgbWUuaWZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICAgICAgICBtZS5pZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuXG4gICAgICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy90aXRsZSBiYXIgbm90IGV4aXRzXG4gICAgICAgICAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgICAgICAgIG1lLmlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmRmcmFtZSkge1xuICAgICAgICAgICAgbWUuZGZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICAgICAgICBtZS5kZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgICB9XG5cblxuICAgIH1cbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5oYW5kbGVSZWxlYXNpbmdGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5faGFzRm9jdXMgPSBmYWxzZTtcblxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG1lLnRpdGxlQmFyQ29sb3JEZWZhdWx0O1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gbWUudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0O1xuXG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBpZiAobWUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBtZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdDtcbiAgICB9XG5cbiAgICAvL2JvcmRlciB3aWR0aFxuICAgIGlmIChtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCkge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IG1lLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICAgICAgICBtZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cygpO1xuICAgIH1cblxuICAgIGlmIChtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9PSAnY2lmd2luZG93Jykge1xuICAgICAgICBpZiAobWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCkge1xuICAgICAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gcGFyc2VJbnQobWUuaWZyYW1lLndpZHRoLCAxMCkgKyAncHgnO1xuICAgICAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KG1lLmlmcmFtZS5oZWlnaHQsIDEwKSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2hhbmRsaW5nIGZvciBjaGlsZCBmcmFtZUNvbXBvbmVudHNcbiAgICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIG1lLmZyYW1lQ29tcG9uZW50TWFwKSB7XG4gICAgICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgICAgICBmcmFtZUNvbXBvbmVudC5oYW5kbGVSZWxlYXNpbmdGb2N1cygpXG4gICAgfVxuXG4gICAgLy9ib3JkZXIgYm90dG9tXG4gICAgaWYgKG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCkge1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJCb3R0b20gPSBtZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ7XG4gICAgfVxuXG5cbiAgICAvL3VwZGF0ZSBzdHlsZSBjbGFzc1xuICAgIG1lLnRpdGxlQmFyLmNsYXNzTmFtZSA9IG1lLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDtcblxuICAgIHJldHVybiBtZTtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5oYW5kbGVUYWtpbmdGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5faGFzRm9jdXMgPSB0cnVlO1xuICAgIG1lLl9oYXNGb2N1cyA9IERhdGUubm93KCk7XG5cbiAgICBpZiAobWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCkge1xuICAgICAgICAvL2Nsb3NlIHRyYW5zcGFyZW5jZSBzY3JlZW5cbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICB9XG5cbiAgICBtZS50aXRsZUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBtZS50aXRsZUJhckNvbG9yRm9jdXNlZDtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5jb2xvciA9IG1lLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZDtcblxuXG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBpZiAobWUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBtZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICB9XG5cbiAgICAvL2JvcmRlciB3aWR0aFxuICAgIGlmIChtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCkge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IG1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuICAgICAgICBtZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cygpO1xuICAgIH1cblxuICAgIC8vYm9yZGVyIGJvdHRvbVxuICAgIGlmIChtZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQpIHtcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuYm9yZGVyQm90dG9tID0gbWUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkO1xuICAgIH1cblxuICAgIC8vaGFuZGxpbmcgZm9yIGNoaWxkIGZyYW1lQ29tcG9uZW50c1xuICAgIGZvciAodmFyIGZyYW1lQ29tcG9uZW50SWQgaW4gbWUuZnJhbWVDb21wb25lbnRNYXApIHtcbiAgICAgICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnRJZF07XG4gICAgICAgIGZyYW1lQ29tcG9uZW50LmhhbmRsZVRha2luZ0ZvY3VzKClcbiAgICB9XG5cblxuICAgIC8vdXBkYXRlIHN0eWxlIGNsYXNzXG4gICAgbWUudGl0bGVCYXIuY2xhc3NOYW1lID0gbWUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkO1xuICAgIHJldHVybiBtZTtcbn07XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIG1lLnJlcXVlc3RGb2N1cygpO1xuICAgIHJldHVybiBtZTtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHJldHVybiBtZTtcbn07XG5cbi8vT3ZlcnJpZGluZyBDQmVhbkZyYW1lLnByb3RvdHlwZS5vbm1vdXNlRG93blxuQ0lmRnJhbWUucHJvdG90eXBlLm9ubW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcblxuICAgIHZhciByZWZIdG1sRWxlbWVudCA9IHRoaXM7XG5cbiAgICAvL0RvIG5vdCBzZWxlY3QgaXQgd2hlbiBkcmFnZ2luZyBieSB0aGUgbW91c2UuXG4gICAgZG9jdW1lbnQuYm9keS5vbmRyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8vIGRvY3VtZW50LmJvZHkub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH07XG5cblxuICAgIC8vT3ZlcnJpZGUgZGVjb3JhdG9yIHdpdGggb25tb3VzZURvd24gb2YgcGFyZW50IGNsYXNzXG4gICAgcmVmSHRtbEVsZW1lbnQuZGVjb3JhdG9yID0gQ0ZyYW1lLnByb3RvdHlwZS5vbm1vdXNlRG93bjtcbiAgICByZWZIdG1sRWxlbWVudC5kZWNvcmF0b3IoZSk7XG5cbiAgICAvL0RlcGxveSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgICAvLyBTaW5jZSBtb3VzZURvd24gaXMgcG9pbnRlZCB0byB0aGlzLmh0bWxFbGVtZW50Lm9ubW91c2Vkb3duIGluIHRoZSBDQmVhbiBjbGFzcyxcbiAgICAvLyB0aGlzICd0aGlzJyB3aWxsIGluZGljYXRlIHRoaXMuaHRtbEVsZW1lbnQuXG4gICAgLy9JbiBvdGhlciB3b3JkcyxcbiAgICAvL2lmIHlvdSB3YW50IHRvIHJlZmVyICdDSWZGcmFtZScseW91IG5lZWQgdG8gc3BlY2lmeSAndGhpcy5wYXJlbnQuJ1xuICAgIC8vU2VlIENCZWFuRnJhbWUgY2xhc3MsIHlvdSBjYW4gZmluZCAndGhpcy5odG1sRWxlbWVudC5wYXJlbnQgPSB0aGlzJ1xuICAgIHZhciByZWZDSWZGcmFtZSA9IHJlZkh0bWxFbGVtZW50LnBhcmVudDtcblxuXG4gICAgdmFyIHJlZkNXaW5kb3dNYW5hZ2VyID0gcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzO1xuXG4gICAgLy9XaGVuIHNvbWV3aGVyZSB3aW5kb3coQ0ZyYW1lLENJZkZyYW1lKSBmaXJlcyAnbW91c2VEb3duJyxcbiAgICAvLyBDbG9zZSBhbGwgdHJhbnNwYXJlbmN5IHNjcmVlbnMgc28gdGhhdCB0aGUgbW91c2UgY3Vyc29yIGNhbiBwYXNzIG92ZXIgYW55IGlGcmFtZVxuICAgIGZvciAodmFyIHdpbmRvd0lkIGluIHJlZkNXaW5kb3dNYW5hZ2VyLmJlYW5MaXN0KSB7XG4gICAgICAgIHZhciBvYmpDSWZGcmFtZSA9IHJlZkNXaW5kb3dNYW5hZ2VyLmJlYW5MaXN0W3dpbmRvd0lkXTtcbiAgICAgICAgaWYgKHdpbmRvd0lkID09IHJlZkNJZkZyYW1lLmdldFdpbmRvd0lkKCkpIHtcbiAgICAgICAgICAgIC8vc2tpcFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqQ0lmRnJhbWUuaGFuZGxlUmVsZWFzaW5nRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZkNJZkZyYW1lLmhhbmRsZVRha2luZ0ZvY3VzKCk7XG5cbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5tb3VzZVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcmVmQ0lmRnJhbWUgPSB0aGlzO1xuXG5cbiAgICBpZiAocmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fCByZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkge1xuICAgICAgICBpZiAocmVmQ0lmRnJhbWUucGFyZW50Q2FudmFzLm9uVG9wT2JqZWN0ID09IHJlZkNJZkZyYW1lKSB7XG4gICAgICAgICAgICAvL01pbmltaXplIHRoZSB3aW5kb3cgYXQgdGhlIGZyb250LlxuICAgICAgICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1RoZSB3aW5kb3cgd2hpY2ggaXMgbm90IHRoZSBhdCB0aGUgZnJvbnQgZXhwYW5kcyB0aGUgc2NyZWVuIHNvIHRoYXQgaXQgY2FuIHJlc3BvbmQgdG8gY2xpY2tzLlxuXG4gICAgICAgICAgICBpZiAocmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZDSWZGcmFtZS5kZWNvcmF0b3IgPSBDRnJhbWUucHJvdG90eXBlLm1vdXNlVXA7XG4gICAgcmVmQ0lmRnJhbWUuZGVjb3JhdG9yKGUpO1xuXG5cbiAgICAvL0NhbmNlbCBzZWxlY3RpbmcgXCJEbyBub3Qgc2VsZWN0IHdoZW4gZHJhZ2dpbmcgbW91c2Ugd2hpbGUgcmVsZWFzaW5nIGJ1dHRvblwiIGlzIGNhbmNlbGVkXG4gICAgZG9jdW1lbnQuYm9keS5vbmRyYWcgPSBudWxsO1xuICAgIGRvY3VtZW50LmJvZHkub25zZWxlY3RzdGFydCA9IG51bGw7XG5cbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRNaW5GcmFtZVNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUubWluRnJhbWVXaWR0aCA9IHdpZHRoO1xuICAgIG1lLm1pbldpbmRvd0hlaWdodCA9IGhlaWdodDtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoZGVsdGFMZWZ0LCBkZWx0YVRvcCwgZGVsdGFXaWR0aCwgZGVsdGFIZWlnaHQsIGJ5VXNlcikge1xuXG4gICAgdmFyIHJlZkNJZkZyYW1lID0gdGhpcztcblxuXG4gICAgaWYgKCFyZWZDSWZGcmFtZS5yZXNpemFibGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvL1Jlc2l6ZSBwcm9jZXNzaW5nIHNob3VsZCBiZSBvdmVycmlkZGVuIGRpcmVjdGx5IHJhdGhlciB0aGFuIGFkb3B0aW5nIGEgZGVjb3JhdG9yIHBhdHRlcm4gYmVjYXVzZSBpdCBoYXMgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgIHZhciB0bXBMZWZ0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICAgIHZhciB0bXBUb3AgPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgICB2YXIgdG1wV2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xuICAgIHZhciB0bXBIZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAgIC8vSW1wb3J0YW50IGxvZ2ljIHRvIGhhbmRsZSB0aGUgbWluaW11bSBvZiBXaW5kb3cgd2VsbFxuICAgIGlmIChieVVzZXIgJiYgKHRtcFdpZHRoICsgZGVsdGFXaWR0aCA8IHJlZkNJZkZyYW1lLm1pbkZyYW1lV2lkdGggJiBkZWx0YVdpZHRoIDwgMCkpIHtcbiAgICAgICAgLy9NaW5pbXVtIGFkanVzdG1lbnQgb2Ygd2lkdGhcbiAgICAgICAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSB0bXBXaWR0aCArICdweCc7XG4gICAgICAgIGRlbHRhV2lkdGggPSAwO1xuICAgIH1cblxuICAgIGlmIChieVVzZXIgJiYgKHRtcEhlaWdodCArIGRlbHRhSGVpZ2h0IDwgcmVmQ0lmRnJhbWUubWluV2luZG93SGVpZ2h0ICYgZGVsdGFIZWlnaHQgPCAwKSkge1xuICAgICAgICAvL01pbmltdW0gYWRqdXN0bWVudCBvZiBoZWlnaHRcbiAgICAgICAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdG1wSGVpZ2h0O1xuICAgICAgICBkZWx0YUhlaWdodCA9IDA7XG4gICAgfVxuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAodG1wTGVmdCArIGRlbHRhTGVmdCkgKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICh0bXBUb3AgKyBkZWx0YVRvcCkgKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gKHRtcFdpZHRoICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9ICh0bXBIZWlnaHQgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuXG5cbiAgICB2YXIgdG1wQ2FudmFzV2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xuICAgIHZhciB0bXBDYW52YXNIZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAgIC8vU2luY2UgY2FudmFzRWxlbWVudCBpcyBhICgwLCAwKSByZWxhdGl2ZSBjb29yZGluYXRlIHdpdGggcmVzcGVjdFxuICAgIC8vIHRvIHRoZSBwYXJlbnQgZWxlbWVudCwgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byBjaGFuZ2UgbGVmdCBhbmQgdG9wLlxuICAgIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoID0gKHRtcENhbnZhc1dpZHRoICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9ICh0bXBDYW52YXNIZWlnaHQgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuXG4gICAgLy9DaGFuZ2UgdGhlIHNpemUgb2YgdGhlIHRpdGxlIGJhci4gVGl0bGVBZGp1c3RXaWR0aCBldGMuXG4gICAgLy8gVGhlIHJlYXNvbiB3aHkgeW91IGRvIG5vdCBoYXZlIHRvIHVzZSB0aXRsZUFkanVzdFdpZHRoIGlzXG4gICAgLy8gYmVjYXVzZSB0aGVzZSBzY2FsaW5nIGFyZSBkb25lIHdpdGggZGlmZmVyZW5jZXMgKGRlbHRhWCwgZGVsdGFZKS5cbiAgICAvL1RoZXJlZm9yZSwgaWYgeW91IGFkanVzdCB3aXRoIHRoZSB0aXRsZUFkanVzdFdpZHRoXG4gICAgLy8gYXMgdGhlIGluaXRpYWwgdmFsdWUsIHRoZSBvdGhlciB3aWxsIHN0cmV0Y2ggcmVsYXRpdmUuXG4gICAgcmVmQ0lmRnJhbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSAodG1wQ2FudmFzV2lkdGggLSByZWZDSWZGcmFtZS5pZkRlbHRhICsgZGVsdGFXaWR0aCArIDApICsgJ3B4JztcblxuICAgIC8vSW1hZ2UgcmVzaXppbmcgZm9yIGlmcmFtZSB0aGF0IGlzIHRoZSBjaGlsZCBlbGVtZW50IG9mIGNhbnZhc1xuICAgIHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCA9ICh0bXBDYW52YXNXaWR0aCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyBkZWx0YVdpZHRoICsgMCkgKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmlmcmFtZS5oZWlnaHQgPSAodG1wQ2FudmFzSGVpZ2h0IC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIGRlbHRhSGVpZ2h0ICsgcmVmQ0lmRnJhbWUuZnJhbWVIZWlnaHRBZGp1c3QpICsgJ3B4JztcblxuXG4gICAgaWYgKHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgfHwgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUpIHtcbiAgICAgICAgLy9EZXBsb3kgYSB0cmFuc3BhcmVudCBzY3JlZW4uXG4gICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCkgKyAncHgnO1xuICAgICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCkgKyAncHgnO1xuICAgIH1cblxuICAgIC8vbW92ZSBmcmFtZUNvbXBvbmVudChsaWtlIGNsb3NlQnV0dG9uKSBjb3JyZXNwb25kaW5nIHRvIG1vdmluZyB3aW5kb3cgZWRnZSBmb3IgcmVzaXplXG4gICAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcCkge1xuICAgICAgICB2YXIgZnJhbWVDb21wb25lbnQgPSByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICAgICAgLy91cGRhdGUgYWxpZ25tZW50IG9mIGZyYW1lQ29tcG9uZW50IGNvcnJlc3BvbmRpbmcgdG8gbW92aW5nIHdpbmRvdyBlZGdlIGZvciByZXNpemVcbiAgICAgICAgZnJhbWVDb21wb25lbnQudXBkYXRlQWxpZ24oKVxuICAgIH1cblxuXG4gICAgZm9yICh2YXIgYmVhbk5hbWUgaW4gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0KSB7XG4gICAgICAgIHZhciB0bXBCZWFuID0gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0W2JlYW5OYW1lXTtcblxuICAgICAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC50eXBlTmFtZSA9PSAnY21hcmtlcndpbmRvdycpIHtcblxuICAgICAgICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JEJykge1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdERCcpIHtcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgpICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSUicpIHtcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0KSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTsvL3Jlc2l6ZVxuXG5DSWZGcmFtZS5wcm90b3R5cGUucmVzaXplRGlyZWN0ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGJ5VXNlcikge1xuXG4gICAgdmFyIHJlZkNJZkZyYW1lID0gdGhpcztcblxuXG4gICAgaWYgKCFyZWZDSWZGcmFtZS5yZXNpemFibGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXG4gICAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgpO1xuICAgIHZhciB0bXBDYW52YXNIZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQpO1xuXG4gICAgLy9TaW5jZSBjYW52YXNFbGVtZW50IGlzIGEgKDAsIDApIHJlbGF0aXZlIGNvb3JkaW5hdGUgd2l0aCByZXNwZWN0XG4gICAgLy8gdG8gdGhlIHBhcmVudCBlbGVtZW50LCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNoYW5nZSBsZWZ0IGFuZCB0b3AuXG4gICAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCAtIHJlZkNJZkZyYW1lLnRpdGxlQmFyLnN0eWxlLmhlaWdodCkgKyAncHgnO1xuXG4gICAgLy9DaGFuZ2UgdGhlIHNpemUgb2YgdGhlIHRpdGxlIGJhci4gVGl0bGVBZGp1c3RXaWR0aCBldGMuXG4gICAgLy8gVGhlIHJlYXNvbiB3aHkgeW91IGRvIG5vdCBoYXZlIHRvIHVzZSB0aXRsZUFkanVzdFdpZHRoIGlzXG4gICAgLy8gYmVjYXVzZSB0aGVzZSBzY2FsaW5nIGFyZSBkb25lIHdpdGggZGlmZmVyZW5jZXMgKGRlbHRhWCwgZGVsdGFZKS5cbiAgICAvL1RoZXJlZm9yZSwgaWYgeW91IGFkanVzdCB3aXRoIHRoZSB0aXRsZUFkanVzdFdpZHRoXG4gICAgLy8gYXMgdGhlIGluaXRpYWwgdmFsdWUsIHRoZSBvdGhlciB3aWxsIHN0cmV0Y2ggcmVsYXRpdmUuXG4gICAgcmVmQ0lmRnJhbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSAod2lkdGggLSByZWZDSWZGcmFtZS5pZkRlbHRhKSArICdweCc7XG5cbiAgICAvL0ltYWdlIHJlc2l6aW5nIGZvciBpZnJhbWUgdGhhdCBpcyB0aGUgY2hpbGQgZWxlbWVudCBvZiBjYW52YXNcbiAgICByZWZDSWZGcmFtZS5pZnJhbWUud2lkdGggPSB3aWR0aCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmlmcmFtZS5oZWlnaHQgPSBoZWlnaHQgLSByZWZDSWZGcmFtZS5pZkRlbHRhICsgcmVmQ0lmRnJhbWUuZnJhbWVIZWlnaHRBZGp1c3QgKyAncHgnO1xuXG5cbiAgICBpZiAocmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fCByZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkge1xuICAgICAgICAvL0RlcGxveSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLndpZHRoKSArICdweCc7XG4gICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0KSArICdweCc7XG4gICAgfVxuXG4gICAgLy9tb3ZlIGZyYW1lQ29tcG9uZW50KGxpa2UgY2xvc2VCdXR0b24pIGNvcnJlc3BvbmRpbmcgdG8gbW92aW5nIHdpbmRvdyBlZGdlIGZvciByZXNpemVcbiAgICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIHJlZkNJZkZyYW1lLmZyYW1lQ29tcG9uZW50TWFwKSB7XG4gICAgICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IHJlZkNJZkZyYW1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgICAgICAvL3VwZGF0ZSBhbGlnbm1lbnQgb2YgZnJhbWVDb21wb25lbnQgY29ycmVzcG9uZGluZyB0byBtb3Zpbmcgd2luZG93IGVkZ2UgZm9yIHJlc2l6ZVxuICAgICAgICBmcmFtZUNvbXBvbmVudC51cGRhdGVBbGlnbigpXG4gICAgfVxuXG5cbiAgICBmb3IgKHZhciBiZWFuTmFtZSBpbiByZWZDSWZGcmFtZS5jYW52YXMuYmVhbkxpc3QpIHtcbiAgICAgICAgdmFyIHRtcEJlYW4gPSByZWZDSWZGcmFtZS5jYW52YXMuYmVhbkxpc3RbYmVhbk5hbWVdO1xuXG4gICAgICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnR5cGVOYW1lID09ICdjbWFya2Vyd2luZG93Jykge1xuXG4gICAgICAgICAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUkQnKSB7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gd2lkdGggKyAncHgnOy8vIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IGhlaWdodCArICdweCc7Ly9wYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCkgKyBkZWx0YUhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdERCcpIHtcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gaGVpZ2h0ICsgJ3B4JzsvL2hlaWdodHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JSJykge1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHdpZHRoICsgJ3B4JzsvLytwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpICsgZGVsdGFXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTsvL3Jlc2l6ZVxuXG4vKipcbiAqIEZvY3VzIG9uIHRoaXMgZnJhbWVcbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLnJlcXVlc3RGb2N1cyA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBiZWFuTGlzdCA9IG1lLnBhcmVudENhbnZhcy5iZWFuTGlzdDtcblxuICAgIGZvciAodmFyIHdpbmRvd0lkIGluIGJlYW5MaXN0KSB7XG5cbiAgICAgICAgdmFyIHRtcElmV2luZG93ID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG4gICAgICAgIC8vSWYgaXQncyBteSBvd24gd2luZG93LCBtaW5pbWl6ZSB0aGUgdHJhbnNwYXJlbnQgc2NyZWVuIGFuZCBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSB0aXRsZSBiYXIuXG4gICAgICAgIGlmICh3aW5kb3dJZCA9PSBtZS5nZXRXaW5kb3dJZCgpKSB7XG5cbiAgICAgICAgICAgIC8vaWYgdGhpcyBmcmFtZSBpcyBhIHRhcmdldCBmcmFtZVxuICAgICAgICAgICAgdG1wSWZXaW5kb3cuaGFuZGxlVGFraW5nRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgLy9pZiB0aGlzIGZyYW1lIGlzIE5PVCBhIHRhcmdldCBmcmFtZVxuICAgICAgICAgICAgdG1wSWZXaW5kb3cuaGFuZGxlUmVsZWFzaW5nRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lLnBhcmVudENhbnZhcy5wdWxsVXAobWUuaWQpO1xuXG59O1xuXG4vKipcbiAqIFVSTCBmb3IgaWZyYW1lXG4gKiBAcGFyYW0gdXJsXG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuXG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIG1lLnNldFVzZUlmcmFtZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnNldFVzZUlmcmFtZShmYWxzZSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIG1lLmlmcmFtZS5zcmMgPSB1cmw7XG5cbiAgICAgICAgbWUuaWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy9tb3VzZSBtb3ZlXG4gICAgICAgICAgICBtZS5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyYW1lTGVmdCA9IG1lLmdldExlZnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWVUb3AgPSBtZS5nZXRUb3AoKTtcblxuICAgICAgICAgICAgICAgIHZhciBldmVudEZyb21JZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICAgICAgICAgICAgICBldmVudEZyb21JZnJhbWUuaW5pdE1vdXNlRXZlbnQoJ21vdXNlbW92ZScsIHRydWUsIGZhbHNlLCB3aW5kb3csIGUuZGV0YWlsLCBlLnNjcmVlblgsIGUuc2NyZWVuWSwgKGUucGFnZVggKyBmcmFtZUxlZnQpLCAoZS5wYWdlWSArIGZyYW1lVG9wKSxcbiAgICAgICAgICAgICAgICAgICAgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbiwgbnVsbCk7XG5cbiAgICAgICAgICAgICAgICAvL3Ntb290aCBkcmFnZ2luZyBkdXJpbmcgaWZyYW1lIG1vZGVcbiAgICAgICAgICAgICAgICBtZS5wYXJlbnRDYW52YXMud2luZG93TW91c2VNb3ZlKGV2ZW50RnJvbUlmcmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWUub25Nb3VzZU1vdmVPbklmcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5vbk1vdXNlTW92ZU9uSWZyYW1lKGV2ZW50RnJvbUlmcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9tb3VzZSB1cFxuICAgICAgICAgICAgbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWVMZWZ0ID0gbWUuZ2V0TGVmdCgpO1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZVRvcCA9IG1lLmdldFRvcCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50RnJvbUlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICAgICAgICAgIGV2ZW50RnJvbUlmcmFtZS5pbml0TW91c2VFdmVudCgnbW91c2V1cCcsIHRydWUsIGZhbHNlLCB3aW5kb3csIGUuZGV0YWlsLCBlLnNjcmVlblgsIGUuc2NyZWVuWSwgKGUucGFnZVggKyBmcmFtZUxlZnQpLCAoZS5wYWdlWSArIGZyYW1lVG9wKSxcbiAgICAgICAgICAgICAgICAgICAgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbiwgbnVsbCk7XG5cbiAgICAgICAgICAgICAgICAvL3Ntb290aCBkcmFnZ2luZyBkdXJpbmcgaWZyYW1lIG1vZGVcbiAgICAgICAgICAgICAgICBtZS5wYXJlbnRDYW52YXMud2luZG93TW91c2VVcChldmVudEZyb21JZnJhbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLm9uTW91c2VVcE9uSWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uTW91c2VVcE9uSWZyYW1lKGV2ZW50RnJvbUlmcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIHJlc29sdmUobWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICB9O1xuXG5cbiAgICB9KTtcblxuXG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBET00tZG9jdW1lbnQgb2YgaWZyYW1lXG4gKiBAcmV0dXJucyB7KnxIVE1MRG9jdW1lbnR9XG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS5nZXRJZkRvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldFNjcm9sbGluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmlmcmFtZS5zY3JvbGxpbmcgPSBzdHI7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuZ2V0U2Nyb2xsaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLmlmcmFtZS5zY3JvbGxpbmdcbn07XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldFJlc2l6YWJsZSA9IGZ1bmN0aW9uIChlbmFibGVkKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIG1lLnJlc2l6YWJsZSA9IGVuYWJsZWQ7XG4gICAgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgIG1lLnJlbW92ZU1hcmtlcnMyKCk7XG4gICAgfVxuICAgIHJldHVybiBtZTtcbn07XG4vKipcbiAqIGVuZCBvZiBDSUZyYW1lIGNsYXNzXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cblxuaW5oZXJpdChDV2luZG93TWFuYWdlciwgQ0NhbnZhcyk7XG5cbi8qKlxuICogQ1dpbmRvd01hbmFnZXIgY2xhc3NcbiAqIDxwPlxuICogQSBjYW52YXMgY2xhc3MgdGhhdCBkaXNwbGF5cyBtdWx0aXBsZSBmcmFtZXMuIEhhbmRsZSBldmVudHMgb24gdGhlIHdpbmRvdyB0byBjb29yZGluYXRlIG11bHRpcGxlIHdpbmRvd3M8YnI+XG4gKlxuICogQHBhcmFtIHBhcmVudEVsZW1lbnRcbiAqIEBwYXJhbSBjYW52YXNJZFxuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENXaW5kb3dNYW5hZ2VyKHBhcmVudEVsZW1lbnQsIGNhbnZhc0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBDV2luZG93TWFuYWdlci5zdXBlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50RWxlbWVudCwgY2FudmFzSWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgZm9yICh2YXIgd2luZG93SWQgaW4gbWUuYmVhbkxpc3QpIHtcbiAgICAgICAgICAgIHZhciBiZWFuRnJhbWUgPSBtZS5iZWFuTGlzdFt3aW5kb3dJZF07XG4gICAgICAgICAgICBiZWFuRnJhbWUub25Cb2R5Q2xpY2tlZChldnQpXG4gICAgICAgIH1cblxuICAgIH0pO1xufVxuXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUuZ2V0V2luZG93ID0gZnVuY3Rpb24gKHdpbmRvd0lkKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICByZXR1cm4gbWUuYmVhbkxpc3Rbd2luZG93SWRdO1xufTtcblxuLy9XcmFwcGluZyB0aGUgJ2FkZEJlYW4nIG9mIHRoZSBwYXJlbnQgY2xhc3NcbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5hZGRXaW5kb3cgPSBmdW5jdGlvbiAod2luZG93KSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIC8vMjAxODA3MjRcbiAgICB2YXIgd2luZG93SWQgPSB3aW5kb3cuZ2V0V2luZG93SWQoKTtcbiAgICB2YXIgbmFtZSA9IHdpbmRvdy5nZXROYW1lKCk7XG4gICAgbWUuYmVhbklkTmFtZVt3aW5kb3dJZF0gPSBuYW1lO1xuICAgIG1lLmJlYW5OYW1lSWRbbmFtZV0gPSB3aW5kb3dJZDtcblxuICAgIG1lLmFkZEJlYW4od2luZG93KTtcbn07XG5cbi8vMjAxODA3MjQgaWYgY29udGFpbnMgd2luZG93IG5hbWVkIHNwZWNpZmllZCBuYW1lXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUuY29udGFpbnNXaW5kb3dOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG5cbiAgICB2YXIgd2luZG93SWQgPSBtZS5iZWFuTmFtZUlkW25hbWVdO1xuXG4gICAgaWYgKHdpbmRvd0lkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cbi8vMjAxODA3MjRcbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5nZXRXaW5kb3dCeU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIHdpbmRvd0lkID0gbWUuYmVhbk5hbWVJZFtuYW1lXTtcblxuICAgIGlmICh3aW5kb3dJZCkge1xuICAgICAgICByZXR1cm4gbWUuZ2V0V2luZG93KHdpbmRvd0lkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG4vL1dyYXBwaW5nIHRoZSAnbW91c2VNb3ZlJyBtZXRob2Qgb2YgdGhlIHBhcmVudCBjbGFzc1xuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLndpbmRvd01vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBpZiAobWUuY3VycmVudE9iamVjdCA9PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkV2luZG93TW92ZWQgPSBmYWxzZTtcblxuICAgIC8vTG9vcCBwcm9jZXNzaW5nIG9mIGVhY2ggQ1dpbmRvdyBoZWxkIGJ5IENXaW5kb3dNYW5hZ2VyXG4gICAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiAgYmVhbkxpc3QpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0V2luZG93ID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG5cbiAgICAgICAgLy9TaW5jZSB0aGlzICdtb3VzZU1vdmUnIGlzIGNhbnZhcyBvZiBDV2luZG93J3MgJ21vdXNlTW92ZScsc28gZG8gbW92ZSBDQmVhbkZyYW1lcyBpbiB0aGUgY2FudmFzLlxuICAgICAgICB2YXIgZXZlbnREYXRhID0gdGFyZ2V0V2luZG93LmNhbnZhcy5tb3VzZU1vdmUoZSk7XG5cbiAgICAgICAgLy9XaGV0aGVyIGFueSBvbmUgb2YgdGhlIGJlYW5zIGluIHRoZSBDYW52YXMgaGFzIG1vdmVkIG9yIG5vdC5cbiAgICAgICAgLy9ZZXMuKFdoZW4gaXQgbW92ZXMpLCBldmVudERhdGEgaXMgc2V0LlxuICAgICAgICAvL05PLiBJZiBpdCBkb2VzIG5vdCBtb3ZlIGl0IGlzIHNldCB0byBudWxsLlxuICAgICAgICBjaGlsZFdpbmRvd01vdmVkID0gY2hpbGRXaW5kb3dNb3ZlZCB8IChldmVudERhdGEgIT0gbnVsbCk7XG4gICAgICAgIGlmIChldmVudERhdGEgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvL0lmIGl0IGlzIHRoZSBtYXJrZXIgZm9yIHJlc2l6aW5nXG4gICAgICAgICAgICBpZiAoZXZlbnREYXRhLnRhcmdldFR5cGVOYW1lID09ICdjbWFya2Vyd2luZG93Jykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldE9iamVjdCA9IGV2ZW50RGF0YS50YXJnZXRPYmplY3Q7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0T2JqZWN0LnVzYWdlID09ICdSRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0V2luZG93LnJlc2l6ZSgwLCAwLCBldmVudERhdGEuZGVsdGFYLCBldmVudERhdGEuZGVsdGFZLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXJnZXRPYmplY3QudXNhZ2UgPT0gJ0REJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRXaW5kb3cucmVzaXplKDAsIDAsIDAsIGV2ZW50RGF0YS5kZWx0YVksIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldE9iamVjdC51c2FnZSA9PSAnUlInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFdpbmRvdy5yZXNpemUoMCwgMCwgZXZlbnREYXRhLmRlbHRhWCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0lmIGFueSBvbmUgb2YgdGhlIGJlYW5zIGluIHRoZSBDYW52YXMgaGFzIG1vdmVkLkRvIG5vdCBkbyAnQ3dpbmRvdydzIG1vdXNlTW92ZSdcbiAgICBpZiAoIWNoaWxkV2luZG93TW92ZWQgJiYgdGhpcy5tb3VzZURvd25Tb3VyY2UgIT0gJ2NoaWxkY2FudmFzJykge1xuXG4gICAgICAgIC8vTW92aW5nIGxvZ2ljIGZvciBDV2luZG93IHdoaWNoIGlzIGhvbGRlZCBieSBDV2luZG93TWFuYWdlciBhcyBhIGNoaWxkIHdpbmRvdy5cbiAgICAgICAgbWUubW91c2VNb3ZlKGUpO1xuICAgIH1cblxufTtcblxuLy9XcmFwcGluZyB0aGUgbWV0aG9kICdtb3VzZVVwJyBvZiB0aGUgcGFyZW50IGNsYXNzXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUud2luZG93TW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIC8vcnVuICdtb3VzZVVwJyBvZiBwYXJlbnQgY2xhc3NcbiAgICBtZS5tb3VzZVVwKGUpO1xuXG4gICAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiAgYmVhbkxpc3QpIHtcblxuICAgICAgICB2YXIgb2JqV2luZG93ID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG4gICAgICAgIC8vcnVuIENXaW5kb3cncyAnbW91c2VVcCcoaXQncyBjaGlsZCB3aW5kb3cpLlxuICAgICAgICBvYmpXaW5kb3cubW91c2VVcChlKTtcbiAgICB9XG5cbn07XG5cbi8qKlxuICogKG92ZXJyaWRlIENDYW52YXMucmVtb3ZlQmVhbilcbiAqIEBwYXJhbSB3aW5kb3dJZFxuICovXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlQmVhbiA9IGZ1bmN0aW9uICh3aW5kb3dJZCkge1xuXG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgLy9SZXRyaWV2ZSB0aGUgdGFyZ2V0IGJlYW5GcmFtZVxuICAgIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuICAgIHZhciB0YXJnZXRCZWFuID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG4gICAgaWYgKHRhcmdldEJlYW4gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlbW92ZVRhcmdldEJlYW5IYXNGb2N1cyA9IHRhcmdldEJlYW4uX2hhc0ZvY3VzO1xuXG5cbiAgICAvL1JlbW92ZSBiZWFuJ3MgaHRtbEVsZW1lbnQgZnJvbSBjYW52YXNFbGVtZW50XG4gICAgbWUuY2FudmFzRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXRCZWFuLmh0bWxFbGVtZW50KTtcblxuICAgIC8vRGVsZXRlIHRoZSBiZWFuIG9iamVjdCBpbiB0aGUgYXNzb2NpYXRpdmUgYXJyYXkuXG4gICAgZGVsZXRlIGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICAgIC8vMjAxODA3MjRbc3RhcnRdXG4gICAgdmFyIGJlYW5OYW1lID0gbWUuYmVhbklkTmFtZVt3aW5kb3dJZF07XG4gICAgaWYgKGJlYW5OYW1lKSB7XG4gICAgICAgIC8vLWlmIGJlYW4gbmFtZSBleGlzdFxuICAgICAgICBkZWxldGUgbWUuYmVhbklkTmFtZVt3aW5kb3dJZF07XG4gICAgICAgIGRlbGV0ZSBtZS5iZWFuTmFtZUlkW2JlYW5OYW1lXTtcbiAgICB9XG4gICAgLy8yMDE4MDcyNFtlbmRdXG5cblxuICAgIC8vZm9jdXMgb24gbGFzdCBmb2N1c2VkIHdpbmRvdyBhZnRlciByZW1vdmluZ1xuICAgIHZhciBtYXhGb2N1c1RpbWUgPSAwO1xuICAgIHZhciBsYXN0Rm9jdXNlZEZyYW1lID0gbnVsbDtcblxuICAgIGlmIChyZW1vdmVUYXJnZXRCZWFuSGFzRm9jdXMpIHtcbiAgICAgICAgZm9yICh2YXIgd2luZG93SWQgaW4gYmVhbkxpc3QpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcbiAgICAgICAgICAgIGlmIChtYXhGb2N1c1RpbWUgPD0gZnJhbWUuX2hhc0ZvY3VzVGltZSkge1xuICAgICAgICAgICAgICAgIG1heEZvY3VzVGltZSA9IGZyYW1lLl9oYXNGb2N1c1RpbWU7XG4gICAgICAgICAgICAgICAgbGFzdEZvY3VzZWRGcmFtZSA9IGZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0Rm9jdXNlZEZyYW1lKSB7XG4gICAgICAgICAgICBsYXN0Rm9jdXNlZEZyYW1lLnJlcXVlc3RGb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogZW5kIG9mIENXaW5kb3dNYW5hZ2VyIGNsYXNzXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbmluaGVyaXQoQ01hcmtlcldpbmRvdywgQ0JlYW5GcmFtZSk7XG5cbi8qKlxuICogQ01hcmtlcldpbmRvdyBjbGFzc1xuICogQHBhcmFtIHdpbmRvd0lkXG4gKiBAcGFyYW0gbGVmdFxuICogQHBhcmFtIHRvcFxuICogQHBhcmFtIHdpZHRoXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKiBAcGFyYW0gemluZGV4XG4gKiBAcGFyYW0gdXNhZ2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDTWFya2VyV2luZG93KHdpbmRvd0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIHppbmRleCwgdXNhZ2UpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBDTWFya2VyV2luZG93LnN1cGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCB3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCB6aW5kZXgsIHVzYWdlKTtcblxuICAgIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gJ2NtYXJrZXJ3aW5kb3cnO1xuICAgIG1lLmh0bWxFbGVtZW50LnVzYWdlID0gdXNhZ2U7XG4gICAgbWUuaHRtbEVsZW1lbnQuaXNSYW5nZUxpbWl0ZWQgPSBmYWxzZTtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdub25lJztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSAxO1xuXG59XG5cbi8qKlxuICogRW5kIG9mIENNYXJrZXJXaW5kb3cgY2xhc3NcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIEZyYW1lTWFuYWdlciBjbGFzc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBKU0ZyYW1lKHBhcmVudEVsZW1lbnQpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cblxuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG1vdXNlVXA7XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBtb3VzZU1vdmU7XG5cbiAgICBpZiAoIXBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG5cbiAgICBtZS53aW5kb3dNYW5hZ2VyID0gbmV3IENXaW5kb3dNYW5hZ2VyKHBhcmVudEVsZW1lbnQsICd3aW5kb3dNYW5hZ2VyXycgKyBtZS5nZW5lcmF0ZVVVSUQoKSwgMCwgMCwgMCwgMCk7XG4gICAgLy9tZS53aW5kb3dNYW5hZ2VyID0gbmV3IENXaW5kb3dNYW5hZ2VyKGRvY3VtZW50LmJvZHksICd3aW5kb3dNYW5hZ2VyXycgKyBtZS5nZW5lcmF0ZVVVSUQoKSwgMCwgMCwgMCwgMCk7XG4gICAgbWUuZG9tUGFydHNCdWlsZGVyID0gbnVsbDtcblxuXG4gICAgZnVuY3Rpb24gbW91c2VVcChlKSB7XG4gICAgICAgIG1lLndpbmRvd01hbmFnZXIud2luZG93TW91c2VVcChlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3VzZU1vdmUoZSkge1xuICAgICAgICBtZS53aW5kb3dNYW5hZ2VyLndpbmRvd01vdXNlTW92ZShlKTtcbiAgICAgICAgdmFyIGdsb2JhbE1vdXNlWCA9IGUucGFnZVg7XG4gICAgICAgIHZhciBnbG9iYWxNb3VzZVkgPSBlLnBhZ2VZO1xuICAgIH1cblxuXG59XG5cbkpTRnJhbWUucHJvdG90eXBlLmdldERvbVBhcnRzQnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKCFtZS5kb21QYXJ0c0J1aWxkZXIpIHtcbiAgICAgICAgbWUuZG9tUGFydHNCdWlsZGVyID0gbmV3IENEb21QYXJ0c0J1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lLmRvbVBhcnRzQnVpbGRlcjtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgd2luZG93XG4gKlxuICogQHJldHVybnMge0NJZkZyYW1lfVxuICovXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGVGcmFtZSA9IGZ1bmN0aW9uIChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UsIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKCFhcHBlYXJhbmNlKSB7XG4gICAgICAgIGFwcGVhcmFuY2UgPSBtZS5jcmVhdGVGcmFtZUFwcGVhcmFuY2UoKTtcbiAgICB9XG5cbiAgICBhcHBlYXJhbmNlLmluaXRpYWxpemUoKTtcblxuICAgIHZhciB3aW5kb3dJZCA9ICd3aW5kb3dfJyArIG1lLmdlbmVyYXRlVVVJRCgpO1xuXG4gICAgdmFyIGZyYW1lID0gbmV3IENJZkZyYW1lKHdpbmRvd0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UpO1xuXG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy53aW5kb3dOYW1lKSB7XG4gICAgICAgIGZyYW1lLnNldE5hbWUocHJvcGVydGllcy53aW5kb3dOYW1lKTtcbiAgICB9XG4gICAgZnJhbWUuaGlkZSgpO1xuXG4gICAgbWUud2luZG93TWFuYWdlci5hZGRXaW5kb3coZnJhbWUpO1xuXG5cbiAgICByZXR1cm4gZnJhbWU7XG5cbn07XG5cbi8vMjAxODA3MjQganVzdCBXcmFwcGVkIHdpbmRvd21hbmFnZXIjY29udGFpbnNXaW5kb3dOYW1lXG5KU0ZyYW1lLnByb3RvdHlwZS5jb250YWluc1dpbmRvd05hbWUgPSBmdW5jdGlvbiAod2luZG93TmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLndpbmRvd01hbmFnZXIuY29udGFpbnNXaW5kb3dOYW1lKHdpbmRvd05hbWUpO1xufTtcbi8vMjAxODA3MjQganVzdCBXcmFwcGVkIHdpbmRvd21hbmFnZXIjZ2V0V2luZG93QnlOYW1lXG5KU0ZyYW1lLnByb3RvdHlwZS5nZXRXaW5kb3dCeU5hbWUgPSBmdW5jdGlvbiAod2luZG93TmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLndpbmRvd01hbmFnZXIuZ2V0V2luZG93QnlOYW1lKHdpbmRvd05hbWUpO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuZ2VuZXJhdGVVVUlEID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHVuaXhUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICB2YXIgciA9ICh1bml4VGltZSArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgIHVuaXhUaW1lID0gTWF0aC5mbG9vcih1bml4VGltZSAvIDE2KTtcbiAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdXVpZDtcblxufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlRnJhbWVBcHBlYXJhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQ0ZyYW1lQXBwZWFyYW5jZSgpO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlQW5pbWF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4gbmV3IENTaW1wbGVMYXlvdXRBbmltYXRvcigpO1xufTtcbi8qKlxuICogZW5kIG9mIEZyYW1lTWFuYWdlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIENGcmFtZUNvbXBvbmVudCBjbGFzc1xuICogPHA+XG4gKiBXcmFwcGVkIERPTSBlbGVtZW50IGxpa2UgJ2RpdicgdG8gZGlzcGxheSBhYm92ZSB0aGUgZnJhbWU8YnI+XG4gKlxuICogZXguQW4gb2JqZWN0IHN1Y2ggYXMgY2xvc2VCdXR0b25cbiAqXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBmcmFtZVxuICogQHBhcmFtIGh0bWxFbGVtZW50IERPTS1lbGVtZW50XG4gKiBAcGFyYW0geCByZWxhdGl2ZSB4LXBvc2l0aW9uIGluIHRoZSBmcmFtZSByZXNwZWN0IHRvIGFsaWduXG4gKiBAcGFyYW0geSByZWxhdGl2ZSB5LXBvc2l0aW9uIGluIHRoZSBmcmFtZSByZXNwZWN0IHRvIGFsaWduXG4gKiBAcGFyYW0gYWxpZ24gcmVsYXRpdmUgYWxpZ25tZW50IGluIHRoZSBmcmFtZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENGcmFtZUNvbXBvbmVudChpZCwgaHRtbEVsZW1lbnQsIHgsIHksIGFsaWduKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIG1lLmlkID0gaWQ7XG4gICAgbWUueCA9IHg7XG4gICAgbWUueSA9IHk7XG4gICAgbWUuZnJhbWUgPSBudWxsO1xuXG4gICAgbWUuX2ZvY3VzVGFraW5nQ2FsbGFiY2sgPSBudWxsO1xuICAgIG1lLl9mb2N1c1JlbGVhc2luZ0NhbGxhYmNrID0gbnVsbDtcblxuICAgIGlmIChhbGlnbikge1xuICAgICAgICBtZS5mcmFtZUNvbXBvbmVudEFsaWduID0gYWxpZ247XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWUuZnJhbWVDb21wb25lbnRBbGlnbiA9IENBTElHTi5MRUZUX1RPUDtcbiAgICB9XG5cbiAgICBtZS5odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50O1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IDUwO1xuXG59XG5cbkNGcmFtZUNvbXBvbmVudC5wcm90b3R5cGUuc2V0Rm9jdXNDYWxsYmFjayA9IGZ1bmN0aW9uIChmb2N1c1Rha2luZ0NhbGxiYWNrLCBmb2N1c1JlbGVhc2luZ0NhbGxiYWNrKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5fZm9jdXNUYWtpbmdDYWxsYWJjayA9IGZvY3VzVGFraW5nQ2FsbGJhY2s7XG4gICAgbWUuX2ZvY3VzUmVsZWFzaW5nQ2FsbGFiY2sgPSBmb2N1c1JlbGVhc2luZ0NhbGxiYWNrO1xufTtcblxuLyoqXG4gKiBTZXQgcGFyZW50IGZyYW1lIG9mIHRoaXMgZnJhbWVDb21wb25lbnRcbiAqIEBwYXJhbSBmcmFtZVxuICovXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnNldEZyYW1lID0gZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIG1lLmZyYW1lID0gZnJhbWU7XG4gICAgbWUuaHRtbEVsZW1lbnQucGFyZW50T2JqZWN0ID0gZnJhbWU7XG4gICAgbWUudXBkYXRlQWxpZ24oKTtcbn07XG5cbi8qKlxuICogUGxhY2UgdGhlIEZyYW1lQ29tcG9uZW50IHJlbGF0aXZlIHRvIHRoZSBwYXJlbnQncyBmcmFtZS5cbiAqIFJlbG9jYXRlIHJlbGF0aXZlIHRvIHBhcmVudCBmcmFtZSB3aGVuIHdpbmRvdyByZXNpemUgZXZlbnQgb2NjdXJzXG4gKi9cbkNGcmFtZUNvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlQWxpZ24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdmFyIGZyYW1lQ29tcG9uZW50QWxpZ24gPSBtZS5mcmFtZUNvbXBvbmVudEFsaWduO1xuXG4gICAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gICAgdmFyIGVsZVN0eWxlID0gbWUuaHRtbEVsZW1lbnQuc3R5bGU7XG4gICAgZWxlU3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcblxuICAgIHZhciB4ID0gbWUueDtcbiAgICB2YXIgeSA9IG1lLnk7XG5cbiAgICB2YXIgZnJhbWVXaWR0aCA9IGZyYW1lLmdldFdpZHRoKCk7XG4gICAgdmFyIGZyYW1lSGVpZ2h0ID0gZnJhbWUuZ2V0SGVpZ2h0KCk7XG4gICAgdmFyIGVsZVN0eWxlV2lkdGggPSBlbGVTdHlsZS53aWR0aDtcbiAgICB2YXIgZWxlU3R5bGVIZWlnaHQgPSBlbGVTdHlsZS5oZWlnaHQ7XG5cbiAgICBpZiAoQ0FMSUdOLkxFRlRfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICAgICAgZWxlU3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgICBlbGVTdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICAgICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAvIDIgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSAvIDIgKyB4KSArICdweCc7XG4gICAgICAgIGVsZVN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICAgICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpICsgeCkgKyAncHgnO1xuICAgICAgICBlbGVTdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkxFRlRfVkNFTlRFUiA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgICAgIGVsZVN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAvIDIgLSBwYXJzZUludChlbGVTdHlsZUhlaWdodCkgLyAyICsgeSkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9WQ0VOVEVSID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICAgICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAvIDIgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSAvIDIgKyB4KSArICdweCc7XG4gICAgICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpIC8gMiArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgICAgICBlbGVTdHlsZS5sZWZ0ID0gKHBhcnNlSW50KGZyYW1lV2lkdGgpIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgKyB4KSArICdweCc7XG4gICAgICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpIC8gMiArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkxFRlRfQk9UVE9NID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICAgICAgZWxlU3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgICBlbGVTdHlsZS50b3AgPSAocGFyc2VJbnQoZnJhbWVIZWlnaHQpIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpICsgeSkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9CT1RUT00gPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgICAgICBlbGVTdHlsZS5sZWZ0ID0gKHBhcnNlSW50KGZyYW1lV2lkdGgpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpIC8gMiArIHgpICsgJ3B4JztcbiAgICAgICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX0JPVFRPTSA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSArIHgpICsgJ3B4JztcbiAgICAgICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSArIHkpICsgJ3B4JztcbiAgICB9XG59O1xuXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLmhhbmRsZVRha2luZ0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKG1lLl9mb2N1c1Rha2luZ0NhbGxhYmNrKSB7XG4gICAgICAgIG1lLl9mb2N1c1Rha2luZ0NhbGxhYmNrKCk7XG4gICAgfVxufTtcblxuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVSZWxlYXNpbmdGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGlmIChtZS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaykge1xuICAgICAgICBtZS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaygpO1xuICAgIH1cbn07XG5cbi8qKlxuICogZW5kIG9mIENGcmFtZUNvbXBvbmVudCBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbi8qKlxuICogQ0RvbVBhcnRzQnVpbGRlciBjbGFzc1xuICogRWFzeSB0byBidWlsZCBhIGJlYXV0aWZ1bCBvciB0eXBpY2FsIGRvbSBwYXJ0cyhodG1sRWxlbWVudClcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDRG9tUGFydHNCdWlsZGVyKCkge1xufVxuXG5DRG9tUGFydHNCdWlsZGVyLnByb3RvdHlwZS5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQ1RleHRCdXR0b25BcHBlYXJhbmNlKCk7XG59O1xuXG5DRG9tUGFydHNCdWlsZGVyLnByb3RvdHlwZS5idWlsZEJ1dHRvbiA9IGZ1bmN0aW9uIChidG5BcHBlYXJhbmNlKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICByZXR1cm4gbWUuYnVpbGRUZXh0QnV0dG9uKGJ0bkFwcGVhcmFuY2UpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIHNpemVcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRUZXh0QnV0dG9uID0gZnVuY3Rpb24gKGJ0bkFwcGVhcmFuY2UpIHtcblxuICAgIHZhciBzaXplID0gYnRuQXBwZWFyYW5jZS5zaXplO1xuICAgIHZhciB3aWR0aCA9IHNpemU7XG4gICAgdmFyIGhlaWdodCA9IHNpemU7XG5cbiAgICBpZiAoYnRuQXBwZWFyYW5jZS53aWR0aCAhPSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gYnRuQXBwZWFyYW5jZS53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoYnRuQXBwZWFyYW5jZS5oZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICBoZWlnaHQgPSBidG5BcHBlYXJhbmNlLmhlaWdodDtcbiAgICB9XG5cblxuICAgIHZhciBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL2JvcmRlclxuICAgIHZhciBib3JkZXJXaWR0aCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyV2lkdGg7XG4gICAgdmFyIGJvcmRlclJhZGl1cyA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyUmFkaXVzO1xuXG4gICAgdmFyIGJvcmRlckNvbG9yRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JEZWZhdWx0O1xuICAgIHZhciBib3JkZXJDb2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICB2YXIgYm9yZGVyQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckhvdmVyZWQ7XG4gICAgdmFyIGJvcmRlckNvbG9yUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JQcmVzc2VkO1xuXG4gICAgdmFyIGJvcmRlclN0eWxlRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgIHZhciBib3JkZXJTdHlsZUZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlRm9jdXNlZDtcbiAgICB2YXIgYm9yZGVyU3R5bGVIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJTdHlsZUhvdmVyZWQ7XG4gICAgdmFyIGJvcmRlclN0eWxlUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVQcmVzc2VkO1xuXG4gICAgLy9iYWNrZ3JvdW5kXG4gICAgdmFyIGJhY2tncm91bmRDb2xvckRlZmF1bHQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckZvY3VzZWQ7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckhvdmVyZWQ7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvclByZXNzZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvclByZXNzZWQ7XG5cbiAgICB2YXIgYmFja2dyb3VuZEJveFNoYWRvdyA9IGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZEJveFNoYWRvdztcblxuXG4gICAgLy9jYXB0aW9uXG4gICAgdmFyIGNhcHRpb24gPSBidG5BcHBlYXJhbmNlLmNhcHRpb247XG4gICAgdmFyIGJ0bkltYWdlRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VEZWZhdWx0O1xuICAgIHZhciBidG5JbWFnZUZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmltYWdlRm9jdXNlZDtcbiAgICB2YXIgYnRuSW1hZ2VIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5pbWFnZUhvdmVyZWQ7XG4gICAgdmFyIGJ0bkltYWdlUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VQcmVzc2VkO1xuXG4gICAgLy9wcmV2ZW50IHRvIGNhdGNoIG1vdXNlIGV2ZW50c1xuICAgIGlmIChidG5JbWFnZURlZmF1bHQpIHtcbiAgICAgICAgYnRuSW1hZ2VEZWZhdWx0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChidG5JbWFnZUZvY3VzZWQpIHtcbiAgICAgICAgYnRuSW1hZ2VGb2N1c2VkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChidG5JbWFnZUhvdmVyZWQpIHtcbiAgICAgICAgYnRuSW1hZ2VIb3ZlcmVkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChidG5JbWFnZVByZXNzZWQpIHtcbiAgICAgICAgYnRuSW1hZ2VQcmVzc2VkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgdmFyIF9jYXB0aW9uQ29sb3JEZWZhdWx0ID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JEZWZhdWx0O1xuICAgIHZhciBjYXB0aW9uQ29sb3JGb2N1c2VkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JGb2N1c2VkO1xuICAgIHZhciBjYXB0aW9uQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JIb3ZlcmVkO1xuICAgIHZhciBjYXB0aW9uQ29sb3JQcmVzc2VkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JQcmVzc2VkO1xuXG4gICAgdmFyIGNhcHRpb25TaGlmdFlweCA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvblNoaWZ0WXB4O1xuICAgIHZhciBjYXB0aW9uRm9udFJhdGlvID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uRm9udFJhdGlvO1xuXG4gICAgLy9TZXQgd2hldGhlciBwYXJlbnQgZnJhbWUgaGFzIGZvY3VzIG9yIG5vdCBpbnRlcm5hbGx5XG4gICAgZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cyA9IGZhbHNlO1xuXG4gICAgLy9TZXQgd2hldGhlciBtb3VzZSBpcyBwcmVzc2luZyBvciBub3QgaW50ZXJuYWxseS5cbiAgICBkaXZFbGVtZW50Ll9pc01vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgZGl2RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgICBkaXZFbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUud2lkdGggPSAod2lkdGgpICsgJ3B4JztcbiAgICBkaXZFbGVtZW50LnN0eWxlLmhlaWdodCA9IChoZWlnaHQpICsgJ3B4JztcbiAgICBkaXZFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICAgIGRpdkVsZW1lbnQub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGRpdkVsZW1lbnQuX2lzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKCdvbm1vdXNlZG93bicpO1xuICAgIH07XG5cbiAgICBkaXZFbGVtZW50Lm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkaXZFbGVtZW50Ll9pc01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ29ubW91c2VvdXQnKTtcbiAgICB9O1xuICAgIGRpdkVsZW1lbnQub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGRpdkVsZW1lbnQuX2hhbmRsZUhvdmVyRHJhd2luZygpO1xuICAgIH07XG5cbiAgICBkaXZFbGVtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKCdvbm1vdXNldXAnKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vdGlmaWVzIHRoYXQgdGhlIHBhcmVudCdzIGZyYW1lIGdvdCBmb2N1c1xuICAgICAqL1xuICAgIGRpdkVsZW1lbnQuX29uVGFrZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGRpdkVsZW1lbnQuX2hhc0ZyYW1lRm9jdXMgPSB0cnVlO1xuICAgICAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ19vblRha2VGb2N1cycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vdGlmaWVzIHRoYXQgdGhlIHBhcmVudCdzIGZyYW1lIGhhcyBsb3N0IGZvY3VzXG4gICAgICovXG4gICAgZGl2RWxlbWVudC5fb25SZWxlYXNlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cyA9IGZhbHNlO1xuICAgICAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ19vblJlbGVhc2VGb2N1cycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgVG8gaGFuZGxlIDJ4MiBtYXRyaXguXG4gICAgICogIChfaGFzRnJhbWVGb2N1cyB0cnVlL2ZhbHNlIHggX2lzTW91c2VEb3duIHRydWUvZmFsc2UpXG4gICAgICovXG4gICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nID0gZnVuY3Rpb24gKGV2dE5hbWUpIHtcblxuXG4gICAgICAgIGlmIChkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzKSB7XG4gICAgICAgICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGhhcyBmb2N1c1xuXG4gICAgICAgICAgICBpZiAoZGl2RWxlbWVudC5faXNNb3VzZURvd24pIHtcbiAgICAgICAgICAgICAgICAvL2JvcmRlclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvclByZXNzZWQ7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlUHJlc3NlZDtcblxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yUHJlc3NlZDtcblxuICAgICAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjYXB0aW9uQ29sb3JQcmVzc2VkO1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoYnRuSW1hZ2VQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VQcmVzc2VkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0TmFtZSA9PSAnb25tb3VzZWRvd24nICYmIGRpdkVsZW1lbnQub25jbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXZFbGVtZW50Lm9uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2JvcmRlclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlRm9jdXNlZDtcblxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcblxuICAgICAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjYXB0aW9uQ29sb3JGb2N1c2VkO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJ0bkltYWdlRm9jdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlRm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBmb2N1c1xuICAgICAgICAgICAgaWYgKGRpdkVsZW1lbnQuX2lzTW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgLy9ib3JkZXJcbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3JQcmVzc2VkO1xuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZVByZXNzZWQ7XG5cbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclByZXNzZWQ7XG5cbiAgICAgICAgICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9yUHJlc3NlZDtcblxuICAgICAgICAgICAgICAgIGlmIChidG5JbWFnZVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZVByZXNzZWQpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvL2JvcmRlclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBfY2FwdGlvbkNvbG9yRGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIGlmIChidG5JbWFnZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZURlZmF1bHQpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUhvdmVyRHJhd2luZyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cykge1xuICAgICAgICAgICAgLy9XaGVuIHRoaXMgZWxlbWVudCBoYXMgZm9jdXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vV2hlbiB0aGlzIGVsZW1lbnQgZG9lc24ndCBoYXZlIGZvY3VzXG4gICAgICAgIH1cbiAgICAgICAgLy9ib3JkZXJcbiAgICAgICAgaWYgKGJvcmRlckNvbG9ySG92ZXJlZCkge1xuICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9ySG92ZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyU3R5bGVIb3ZlcmVkKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYm9yZGVyU3R5bGVIb3ZlcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvckhvdmVyZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FwdGlvbkNvbG9ySG92ZXJlZCkge1xuICAgICAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9ySG92ZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnRuSW1hZ2VIb3ZlcmVkKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZUhvdmVyZWQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBkaXZFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAoaGVpZ2h0ICogY2FwdGlvbkZvbnRSYXRpbykgKyAncHgnO1xuXG4gICAgZGl2RWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gKGhlaWdodCkgKyAncHgnO1xuXG4gICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuXG4gICAgaWYgKGJvcmRlcldpZHRoICE9IG51bGwpIHtcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAoYmFja2dyb3VuZEJveFNoYWRvdyAhPSBudWxsKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gYmFja2dyb3VuZEJveFNoYWRvdztcbiAgICB9XG5cbiAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IChib3JkZXJSYWRpdXMgKyBwYXJzZUludChkaXZFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoKSkgKyAncHgnO1xuXG4gICAgdmFyIGNoaWxkTW9kZSA9IHRydWU7XG5cbiAgICBpZiAoY2hpbGRNb2RlICYmIGJ0bkltYWdlRGVmYXVsdCkge1xuICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlRGVmYXVsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoaWxkTW9kZSAmJiBjYXB0aW9uKSB7XG4gICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAvL3NwYW4uc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcbiAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcblxuICAgICAgICBzcGFuLnN0eWxlLm1hcmdpblRvcCA9IGNhcHRpb25TaGlmdFlweCArICdweCc7XG4gICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBzcGFuLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udEZhbWlseSA9IFwic2Fucy1zZXJpZlwiO1xuXG5cbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXB0aW9uKSk7XG5cbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9IGVsc2UgaWYgKCFjaGlsZE1vZGUgJiYgY2FwdGlvbikge1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBjYXB0aW9uU2hpZnRZcHggKyBcInB4XCI7XG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FwdGlvbikpO1xuICAgIH1cblxuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygpO1xuICAgIHJldHVybiBkaXZFbGVtZW50O1xuXG59O1xuXG5mdW5jdGlvbiBDVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKSB7XG5cbiAgICB2YXIgY3Jvc3NNYXJrMCA9ICdcXHUyNzRjJztcblxuICAgIHRoaXMuc2l6ZSA9IDE0O1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcblxuICAgIC8vYm9yZGVyXG4gICAgdGhpcy5ib3JkZXJSYWRpdXMgPSAyO1xuICAgIHRoaXMuYm9yZGVyV2lkdGggPSAwO1xuICAgIHRoaXMuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNhYWFhYWEnO1xuICAgIHRoaXMuYm9yZGVyQ29sb3JGb2N1c2VkID0gdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQ7XG4gICAgdGhpcy5ib3JkZXJDb2xvckhvdmVyZWQgPSBudWxsO1xuICAgIHRoaXMuYm9yZGVyQ29sb3JQcmVzc2VkID0gdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgICB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgdGhpcy5ib3JkZXJTdHlsZUZvY3VzZWQgPSB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICB0aGlzLmJvcmRlclN0eWxlSG92ZXJlZCA9IG51bGw7XG4gICAgdGhpcy5ib3JkZXJTdHlsZVByZXNzZWQgPSB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgIHRoaXMuYmFja2dyb3VuZEJveFNoYWRvdyA9IG51bGw7XG5cblxuICAgIC8vYmFja2dyb3VuZFxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9IG51bGw7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuXG4gICAgLy9jYXB0aW9uXG4gICAgdGhpcy5jYXB0aW9uID0gY3Jvc3NNYXJrMDtcbiAgICB0aGlzLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICAgIHRoaXMuY2FwdGlvbkNvbG9yRm9jdXNlZCA9IHRoaXMuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgICB0aGlzLmNhcHRpb25Db2xvckhvdmVyZWQgPSBudWxsO1xuICAgIHRoaXMuY2FwdGlvbkNvbG9yUHJlc3NlZCA9IHRoaXMuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgICB0aGlzLmNhcHRpb25TaGlmdFlweCA9IDA7XG4gICAgdGhpcy5jYXB0aW9uRm9udFJhdGlvID0gMS4wO1xuXG5cbn1cblxuLyoqXG4gKiBlbmQgb2YgQ0RvbVBhcnRzQnVpbGRlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIENTaW1wbGVMYXlvdXRBbmltYXRvciBjbGFzc1xuICogQ2xhc3MgZm9yIG1vdmluZyBhbmltYXRpb24gwrcgc2NhbGluZyBhbmltYXRpb24gb2YgZnJhbWUuXG4gKiA8cD5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDU2ltcGxlTGF5b3V0QW5pbWF0b3IoKSB7XG5cbiAgICB0aGlzLmZwcyA9IDMwO1xuICAgIHRoaXMuZHVyYXRpb25NaWxsaXMgPSAyMDA7XG4gICAgdGhpcy50YXJnZXRGcmFtZSA9IG51bGw7XG5cbiAgICAvL2N1cnJlbnQgd2lkdGgvaGVpZ2h0XG4gICAgdGhpcy5fY3JyV2lkdGggPSAwO1xuICAgIHRoaXMuX2NyckhlaWdodCA9IDA7XG4gICAgdGhpcy5fdG9XaWR0aCA9IDA7XG4gICAgdGhpcy5fdG9IZWlnaHQgPSAwO1xuXG4gICAgLy9jdXJyZW50IHBvc2l0aW9uKHgseSlcbiAgICAvL3RoaXMuX2NyclggPSAwO1xuICAgIC8vdGhpcy5fY3JyWSA9IDA7XG4gICAgdGhpcy5fdG9YID0gMDtcbiAgICB0aGlzLl90b1kgPSAwO1xuXG5cbiAgICB0aGlzLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9waW5YID0gMDtcbiAgICB0aGlzLl9waW5ZID0gMDtcbiAgICB0aGlzLl9waW5BbmNob3IgPSBudWxsO1xuXG59XG5cbi8qKlxuICogU2V0IENJRnJhbWUgb2JqZWN0IHRvIGJlIHJlc2l6ZWRcbiAqIEBwYXJhbSBjaWZyYW1lXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoY2lmcmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUudGFyZ2V0RnJhbWUgPSBjaWZyYW1lO1xuXG5cbiAgICBtZS5mcm9tV2lkdGgoY2lmcmFtZS5nZXRXaWR0aCgpKTtcbiAgICBtZS5mcm9tSGVpZ2h0KGNpZnJhbWUuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgbWUudG9XaWR0aChjaWZyYW1lLmdldFdpZHRoKCkpO1xuICAgIG1lLnRvSGVpZ2h0KGNpZnJhbWUuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgdmFyIGNyclBvcyA9IGNpZnJhbWUuZ2V0UG9zaXRpb24oKTtcbiAgICBtZS5mcm9tUG9zaXRpb24oY3JyUG9zLngsIGNyclBvcy55LCBjcnJQb3MuYW5jaG9yKTtcblxuXG4gICAgcmV0dXJuIG1lO1xuXG59O1xuXG4vKipcbiAqIEdldCBDSUZyYW1lIG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLnRhcmdldEZyYW1lO1xufTtcbi8qKlxuICogU2V0IGFuaW1hdGlvbiBkdXJhdGlvbiB0aW1lIG1pbGxpc1xuICogQHBhcmFtIGR1cmF0aW9uTWlsbGlzXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbk1pbGxpcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuZHVyYXRpb25NaWxsaXMgPSBkdXJhdGlvbk1pbGxpcztcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBleHBlY3RlZCBGUFNcbiAqIEBwYXJhbSBmcHNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnNldEZQUyA9IGZ1bmN0aW9uIChmcHMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmZwcyA9IGZwcztcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBQSU4gcG9zaXRpb25cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0geVxuICogQHBhcmFtIGFuY2hvciBQb3NpdGlvbiB3aGVyZSBhbmltYXRpb24gc3RhcnRzIGZyb20uRXhwZWN0ZWQgcGFyYW1ldGVycyBhcyBmb2xsb3dzLlxuICdMRUZUX1RPUCc6RGVmYXVsdC5TcGVjaWZ5IHRoZSBwb3NpdGlvbiBzdGFydGluZyBmcm9tIHRoZSB1cHBlciBsZWZ0LlxuICdDRU5URVJfVE9QJ1xuICdSSUdIVF9UT1AnXG4gJ0xFRlRfQ0VOVEVSJ1xuICdDRU5URVJfQ0VOVEVSJ1xuICdSSUdIVF9DRU5URVInXG4gJ0xFRlRfQk9UVE9NJ1xuICdDRU5URVJfQk9UVE9NJ1xuICdSSUdIVF9CT1RUT00nXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSwgYW5jaG9yKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5waW5uZWRBbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcblxuICAgIG1lLl9waW5YID0geDtcbiAgICBtZS5fcGluWSA9IHk7XG5cbiAgICBtZS50b1Bvc2l0aW9uKHgsIHkpO1xuXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgICBtZS5fcGluQW5jaG9yID0gYW5jaG9yO1xuICAgIH1cbiAgICByZXR1cm4gbWU7XG59O1xuLyoqXG4gKiBTZXQgcmVzaXplRnJvbSB3aWR0aFxuICogQHBhcmFtIGZyb21XaWR0aFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZnJvbVdpZHRoID0gZnVuY3Rpb24gKGZyb21XaWR0aCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX2NycldpZHRoID0gZnJvbVdpZHRoO1xuXG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplRnJvbSBoZWlnaHRcbiAqIEBwYXJhbSBmcm9tSGVpZ2h0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tSGVpZ2h0ID0gZnVuY3Rpb24gKGZyb21IZWlnaHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl9jcnJIZWlnaHQgPSBmcm9tSGVpZ2h0O1xuXG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplVG8gd2lkdGhcbiAqIEBwYXJhbSB0b1dpZHRoXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1dpZHRoID0gZnVuY3Rpb24gKHRvV2lkdGgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl90b1dpZHRoID0gdG9XaWR0aDtcblxuICAgIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IHJlc2l6ZVRvIGhlaWdodFxuICogQHBhcmFtIHRvSGVpZ2h0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b0hlaWdodCA9IGZ1bmN0aW9uICh0b0hlaWdodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX3RvSGVpZ2h0ID0gdG9IZWlnaHQ7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgbW92ZSB0byBwb3NpdGlvblxuICogQHBhcmFtIHhcbiAqIEBwYXJhbSB5XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1Bvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl90b1ggPSB4O1xuICAgIG1lLl90b1kgPSB5O1xuICAgIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IG1vdmUgdG8geFxuICogQHBhcmFtIHhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnRvWCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5fdG9YID0geDtcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBtb3ZlIHRvIHlcbiAqIEBwYXJhbSB0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1kgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX3RvWSA9IHQ7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHdhaXRNaWxsaXMpIHtcblxuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBmcm9tV2lkdGggPSBtZS5fY3JyV2lkdGg7XG4gICAgdmFyIGZyb21IZWlnaHQgPSBtZS5fY3JySGVpZ2h0O1xuXG4gICAgdmFyIGZyb21YID0gbWUuX3Bpblg7XG4gICAgdmFyIGZyb21ZID0gbWUuX3Bpblk7XG5cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cblxuICAgICAgICB2YXIgbnVtT2ZTdGVwcyA9IHBhcnNlSW50KG1lLmZwcyAqIChtZS5kdXJhdGlvbk1pbGxpcyAvIDEwMDApKTtcblxuXG4gICAgICAgIHZhciBkZWx0YVdpZHRoID0gKG1lLl90b1dpZHRoIC0gZnJvbVdpZHRoKSAvIG51bU9mU3RlcHM7XG4gICAgICAgIHZhciBkZWx0YUhlaWdodCA9IChtZS5fdG9IZWlnaHQgLSBmcm9tSGVpZ2h0KSAvIG51bU9mU3RlcHM7XG5cbiAgICAgICAgdmFyIGRlbHRhWCA9IChtZS5fdG9YIC0gZnJvbVgpIC8gbnVtT2ZTdGVwcztcbiAgICAgICAgdmFyIGRlbHRhWSA9IChtZS5fdG9ZIC0gZnJvbVkpIC8gbnVtT2ZTdGVwcztcblxuXG4gICAgICAgIHZhciB1bml0TWlsbGlzID0gbWUuZHVyYXRpb25NaWxsaXMgLyBudW1PZlN0ZXBzO1xuXG4gICAgICAgIHZhciBpZHggPSAwO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICAgIHZhciB0aW1lciA9IG5ldyBDVGltZXIoKTtcblxuICAgICAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWxNaWxsaXModW5pdE1pbGxpcyk7XG5cbiAgICAgICAgICAgIHRpbWVyLnNldENhbGxiYWNrKGZ1bmN0aW9uICh0aW1lcikge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PSBudW1PZlN0ZXBzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF93aWR0aCA9IG1lLl90b1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IG1lLl90b0hlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ggPSBmcm9tWCArIGRlbHRhWCAqIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF95ID0gZnJvbVkgKyBkZWx0YVkgKiBpZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbWUudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShtZS5fcGluWCwgbWUuX3BpblksIG1lLl9waW5BbmNob3IsIF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLl9zZXRQb3NpdGlvbkludGVybmFsbHkoX3gsIF95LCBtZS5fcGluQW5jaG9yLCBfd2lkdGgsIF9oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUucmVzaXplRGlyZWN0KF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuX2NycldpZHRoID0gX3dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBtZS5fY3JySGVpZ2h0ID0gX2hlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICBtZS5fcGluWCA9IF94O1xuICAgICAgICAgICAgICAgICAgICBtZS5fcGluWSA9IF95O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpZHggPT0gKG51bU9mU3RlcHMgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAvL1N0b3AgdGltZXIgYWZ0ZXIgbGFzdCBkcmF3IHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgdGltZXIuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB2YXIgX3dpZHRoID0gZnJvbVdpZHRoICsgZGVsdGFXaWR0aCAqIGlkeDtcbiAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IGZyb21IZWlnaHQgKyBkZWx0YUhlaWdodCAqIGlkeDtcblxuICAgICAgICAgICAgICAgIHZhciBfeCA9IGZyb21YICsgZGVsdGFYICogaWR4O1xuICAgICAgICAgICAgICAgIHZhciBfeSA9IGZyb21ZICsgZGVsdGFZICogaWR4O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KG1lLl9waW5YLCBtZS5fcGluWSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShfeCwgX3ksIG1lLl9waW5BbmNob3IsIF93aWR0aCwgX2hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUucmVzaXplRGlyZWN0KF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdGltZXIuc3RhcnRUaW1lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdhaXRNaWxsaXMpIHtcblxuICAgICAgICAgICAgdmFyIHdhaXRlciA9IG5ldyBDVGltZXIoKTtcbiAgICAgICAgICAgIHdhaXRlci5zZXRJbnRlcnZhbE1pbGxpcyh3YWl0TWlsbGlzKTtcbiAgICAgICAgICAgIHdhaXRlci5zZXRDYWxsYmFjayhmdW5jdGlvbiAoX3RpbWVyKSB7XG4gICAgICAgICAgICAgICAgX3RpbWVyLnN0b3BUaW1lcigpO1xuXG4gICAgICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3YWl0ZXIuc3RhcnRUaW1lcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xuXG59Oy8vc3RhcnRcblxuLyoqXG4gKiBlbmQgb2YgQ1NpbXBsZUxheW91dEFuaW1hdG9yIGNsYXNzXG4gKi9cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuLyoqXG4gKiBDVGltZXIgY2xhc3M8YnI+XG4gKiBDb3B5cmlnaHQgMjAwNy0gVG9tIE1pc2F3YSwgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbiAqIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlXG4gKiBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbiAqIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1JcbiAqIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogSG93IHRvIHVzZTpcbiAqICB2YXIgdGltZXIgPSBuZXcgQ1RpbWVyKCk7XG4gKiAgICB2YXIgdmFsdWUgPSAwO1xuICpcbiAqICAgIHRpbWVyLnNldENhbGxiYWNrKGZ1bmN0aW9uICh0aW1lck9iaikge1xuICogICAgICAgIHZhbHVlKys7XG4gKiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICAgICAgIGlmICh2YWx1ZSA9PSAxMDApIHtcbiAqICAgICAgICAgICAgdGltZXJPYmouc3RvcFRpbWVyKCk7XG4gKiAgICAgICAgfVxuICogICAgfSk7XG4gKiAgICB0aW1lci5zZXRJbnRlcnZhbE1pbGxpcygxMDApO1xuICogICAgdGltZXIuc3RhcnRUaW1lcigpO1xuICpcbiAqIEBhdXRob3IgVG9tIE1pc2F3YSAocml2ZXJzdW4ub3JnQGdtYWlsLmNvbSlcbiAqL1xuXG52YXIgQ1RpbWVyID1cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBDVGltZXIoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5fdGltZXJJZCA9IG51bGw7XG4gICAgICAgICAgICBtZS5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBtZS5fdGltZXJJbnRlcnZhbCA9IDA7XG5cbiAgICAgICAgICAgIG1lLl9pbnRlcm5hbENhbGxiYWNrID0gX2ludGVybmFsQ2FsbGJhY2s7XG4gICAgICAgICAgICBtZS5fdGltZXJNZXRob2QgPSBudWxsO1xuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbnRlcm5hbENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmIChtZS5fdGltZXJNZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuX3RpbWVyTWV0aG9kKG1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1lLl90aW1lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuX3RpbWVySWQgPSBzZXRUaW1lb3V0KG1lLl9pbnRlcm5hbENhbGxiYWNrLCBtZS5fdGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ1RpbWVyLnByb3RvdHlwZS5zZXRDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFja19mdW5jKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgbWUuX3RpbWVyTWV0aG9kID0gY2FsbGJhY2tfZnVuYztcbiAgICAgICAgICAgIHJldHVybiBtZTtcbiAgICAgICAgfTtcblxuICAgICAgICBDVGltZXIucHJvdG90eXBlLnNldEludGVydmFsTWlsbGlzID0gZnVuY3Rpb24gKGludGVydmFsKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgbWUuX3RpbWVySW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgICAgIHJldHVybiBtZTtcbiAgICAgICAgfTtcblxuICAgICAgICBDVGltZXIucHJvdG90eXBlLnN0b3BUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBtZS5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ1RpbWVyLnByb3RvdHlwZS5zdGFydFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5fdGltZXJJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICBtZS5fdGltZXJJZCA9IHNldFRpbWVvdXQobWUuX2ludGVybmFsQ2FsbGJhY2ssIG1lLl90aW1lckludGVydmFsKTtcbiAgICAgICAgICAgICAgICBtZS5faXNSdW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgcmV0dXJuIENUaW1lcjtcbiAgICB9KSgpO1xuLyoqXG4gKiBlbmQgb2YgQ1RpbWVyIGNsYXNzXG4gKi9cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuT2JqZWN0LmZyZWV6ZShERUYpO1xuXG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ==