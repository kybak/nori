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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SearchResults = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.results;\n    }), loading = ref.loading, results = ref.results;\n    console.log(results);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: results.map(function(result) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row max-w-sm rounded overflow-hidden shadow-lg items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-bold text-xl\",\n                                children: [\n                                    \"ID: \",\n                                    result.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 \",\n                                children: [\n                                    \"QTY: \",\n                                    result.quantity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false);\n        })\n    }, void 0, false, {\n        fileName: \"/home/kush/nori/components/SearchResults/SearchResults.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_s(SearchResults, \"t9VkDqU1MrfsmMjGhbvRik2+rvY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvU2VhcmNoUmVzdWx0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3lDOzs7QUFFekMsR0FBSyxDQUFDQyxhQUFhLEdBQU8sUUFDMUIsR0FEZ0MsQ0FBQzs7O0lBQy9CLEdBQUssQ0FBd0JELEdBQWdELEdBQWhEQSx3REFBVyxDQUFDLFFBQVEsQ0FBUEUsS0FBZ0I7UUFBS0EsTUFBTUMsQ0FBTkQsS0FBSyxDQUFDQyxPQUFPO1FBQXBFQyxPQUFPLEdBQWNKLEdBQWdELENBQXJFSSxPQUFPLEVBQUVELE9BQU8sR0FBS0gsR0FBZ0QsQ0FBNURHLE9BQU87SUFFeEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPO0lBRW5CLE1BQU0sNkVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWU7a0JBQzNCTCxPQUFPLENBQUNNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxNQUFNOzBCQUNqQixNQUNMLENBQUM7c0dBQU9ILENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUF1Rjs7b0dBQ25HRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVztrSEFDdkJELENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFtQjs7b0NBQUMsQ0FBSTtvQ0FBQ0UsTUFBTSxDQUFDQyxFQUFFOzs7Ozs7Ozs7Ozs7b0dBRWxESixDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBTTtrSEFDbEJJLENBQUk7Z0NBQUNKLFNBQVMsRUFBQyxDQUFzRjs7b0NBQUMsQ0FDaEc7b0NBQUNFLE1BQU0sQ0FBQ0csUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyQyxDQUFDO0dBdkJLWixhQUFhOztRQUNZRCxvREFBVzs7O0tBRHBDQyxhQUFhO0FBeUJuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzLnRzeD9mY2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBTZWFyY2hSZXN1bHRzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCByZXN1bHRzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucmVzdWx0cyk7XG5cbiAgY29uc29sZS5sb2cocmVzdWx0cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIHtyZXN1bHRzLm1hcChyZXN1bHQgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtYXgtdy1zbSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPklEOiB7cmVzdWx0LmlkfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTZcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgXCI+XG4gICAgICAgICAgICAgICAgUVRZOiB7cmVzdWx0LnF1YW50aXR5fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJTZWFyY2hSZXN1bHRzIiwic3RhdGUiLCJyZXN1bHRzIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJyZXN1bHQiLCJpZCIsInNwYW4iLCJxdWFudGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchResults/SearchResults.tsx\n");

/***/ })

});