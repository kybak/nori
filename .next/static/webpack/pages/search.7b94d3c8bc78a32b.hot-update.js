"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/SearchResults/SearchResults.tsx":
/*!****************************************************!*\
  !*** ./components/SearchResults/SearchResults.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SearchResults = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.results;\n    }), loading = ref.loading, results = ref.results;\n    console.log(results);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: results.map(function(result) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row max-w-sm rounded overflow-hidden shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-bold text-xl mb-2\",\n                                children: [\n                                    \"ID: \",\n                                    result.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 pt-4 pb-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                children: [\n                                    \"QTY: \",\n                                    result.quantity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false);\n        })\n    }, void 0, false, {\n        fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_s(SearchResults, \"t9VkDqU1MrfsmMjGhbvRik2+rvY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvU2VhcmNoUmVzdWx0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3lDOzs7QUFFekMsR0FBSyxDQUFDQyxhQUFhLEdBQU8sUUFDMUIsR0FEZ0MsQ0FBQzs7O0lBQy9CLEdBQUssQ0FBd0JELEdBQWdELEdBQWhEQSx3REFBVyxDQUFDLFFBQVEsQ0FBUEUsS0FBZ0I7UUFBS0EsTUFBTUMsQ0FBTkQsS0FBSyxDQUFDQyxPQUFPO1FBQXBFQyxPQUFPLEdBQWNKLEdBQWdELENBQXJFSSxPQUFPLEVBQUVELE9BQU8sR0FBS0gsR0FBZ0QsQ0FBNURHLE9BQU87SUFFeEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPO0lBRW5CLE1BQU0sNkVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWU7a0JBQzNCTCxPQUFPLENBQUNNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxNQUFNOzBCQUNqQixNQUNMLENBQUM7c0dBQU9ILENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUEwRDs7b0dBQ3RFRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVztrSEFDdkJELENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUF3Qjs7b0NBQUMsQ0FBSTtvQ0FBQ0UsTUFBTSxDQUFDQyxFQUFFOzs7Ozs7Ozs7Ozs7b0dBRXZESixDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7a0hBQzVCSSxDQUFJO2dDQUFDSixTQUFTLEVBQUMsQ0FBK0Y7O29DQUFDLENBQ3pHO29DQUFDRSxNQUFNLENBQUNHLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckMsQ0FBQztHQXZCS1osYUFBYTs7UUFDWUQsb0RBQVc7OztLQURwQ0MsYUFBYTtBQXlCbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvU2VhcmNoUmVzdWx0cy50c3g/ZmNlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgU2VhcmNoUmVzdWx0czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgcmVzdWx0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnJlc3VsdHMpO1xuXG4gIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICB7cmVzdWx0cy5tYXAocmVzdWx0ID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj5JRDoge3Jlc3VsdC5pZH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB0LTQgcGItMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICBRVFk6IHtyZXN1bHQucXVhbnRpdHl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIlNlYXJjaFJlc3VsdHMiLCJzdGF0ZSIsInJlc3VsdHMiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInJlc3VsdCIsImlkIiwic3BhbiIsInF1YW50aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchResults/SearchResults.tsx\n");

/***/ })

});