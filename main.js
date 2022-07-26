(self["webpackChunkmockup"] = self["webpackChunkmockup"] || []).push([["main"],{

/***/ 37295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47933);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89526);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36011);
/* harmony import */ var _meddbriefer_observer_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42012);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53015);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/apps/mockup/src/App.js";






function App(props) {
  const {
    auth,
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_0__.useFirebaseProject)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseProject);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_0__.FirebaseContext.Provider, {
    value: {
      auth,
      db
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_meddbriefer_observer_ui__WEBPACK_IMPORTED_MODULE_2__.ObserverContext.Provider, {
      value: {
        classCode: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.classCode
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_meddbriefer_observer_ui__WEBPACK_IMPORTED_MODULE_2__.PreferencesProvider, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.PrivateRoute, {
                path: "/scenario/:scenarioId",
                authFlowLayout: _meddbriefer_observer_ui__WEBPACK_IMPORTED_MODULE_2__.UnauthedLayout,
                component: _meddbriefer_observer_ui__WEBPACK_IMPORTED_MODULE_2__.Scenario
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.PrivateRoute, {
                exact: true,
                path: "/",
                authFlowLayout: _meddbriefer_observer_ui__WEBPACK_IMPORTED_MODULE_2__.UnauthedLayout,
                component: _meddbriefer_observer_ui__WEBPACK_IMPORTED_MODULE_2__.ScenarioList
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ 53015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.
const environment = {
  production: false,
  firebaseProject: "ScottDev" || 0,
  classCode: "demo"
};

/***/ }),

/***/ 57645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17029);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37295);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/apps/mockup/src/main.js";




const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 25
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 13
}, undefined));

/***/ }),

/***/ 36011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* reexport safe */ _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__.AuthContext),
/* harmony export */   "AuthFlow": () => (/* reexport safe */ _lib_components_AuthFlow__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "AuthProvider": () => (/* reexport safe */ _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),
/* harmony export */   "PrivateRoute": () => (/* reexport safe */ _lib_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "StaffRoute": () => (/* reexport safe */ _lib_routes_StaffRoute__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25600);
/* harmony import */ var _lib_components_AuthFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2956);
/* harmony import */ var _lib_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39585);
/* harmony import */ var _lib_routes_StaffRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90609);






/***/ }),

/***/ 2956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25600);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59907);
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75032);
/* harmony import */ var _ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44516);
/* harmony import */ var _EmailVerification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57650);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/components/AuthFlow.js";








const DEFAULT_HEADING = "You must be logged in to access this page";

const AuthFlow = ({
  heading: _heading = DEFAULT_HEADING
}) => {
  const {
    currAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AuthContext);

  const getCurrComponent = () => {
    switch (currAuthComponent) {
      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.REGISTER:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 24
        }, undefined);

      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.FORGOT_PASSWD:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 24
        }, undefined);

      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.EMAIL_VERIFY:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_EmailVerification__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 24
        }, undefined);

      default:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 24
        }, undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["text-center"],
      children: _heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), getCurrComponent()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthFlow);

/***/ }),

/***/ 57650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94292);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25600);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/components/EmailVerification.js";






const EmailVerification = () => {
  const {
    authMsg,
    currentUser,
    setAuthFlowComponent,
    setAuthMsg,
    setEmailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  const resendVerificationEmail = () => {
    if (!currentUser.emailVerified) {
      // console.log("Resending verification email")
      currentUser.sendEmailVerification().then(() => recheckEmailVerification()).catch(error => console.log(error));
    } else {
      console.log("email address already verified");
    }
  };

  const checkVerification = () => {
    // console.log("Rechecking verification")
    currentUser.reload().then(() => {
      if (currentUser.emailVerified) {
        setEmailVerified(true);
        setAuthFlowComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AUTH_FLOW_COMPONENTS.LOGIN);
        setAuthMsg("");
      } else {
        recheckEmailVerification();
      }
    });
  };

  const recheckEmailVerification = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!currentUser.emailVerified) {
      setTimeout(() => checkVerification(), 5000);
    }
  }, [currentUser.emailVerified, checkVerification]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!currentUser.emailVerified) {
      // console.log("Email is not verified")
      setEmailVerified(false);
      recheckEmailVerification();
    } else {
      setEmailVerified(true);
      setAuthMsg("");
      setAuthFlowComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AUTH_FLOW_COMPONENTS.LOGIN);
    }
  }, [currentUser.emailVerified, recheckEmailVerification, setAuthFlowComponent, setAuthMsg, setEmailVerified] // only run on first render
  );
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        children: authMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: "You will arrive at your destination web page soon after clicking on the verification link."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: "Didn't recieve a verification email? Verification link expired? Click \"Resend Verification Email\"."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["btn-primary"]),
        onClick: resendVerificationEmail,
        children: "Resend Verification Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailVerification);

/***/ }),

/***/ 44516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25600);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/components/ForgotPasswordForm.js";






const ForgotPasswordForm = () => {
  const {
    sendOutPasswordReset,
    passwdResetError,
    setLoginError,
    setPasswdResetError,
    setCurrAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext); // const haveError = () => "" !== passwdResetError

  const handleRememberedPasswd = event => {
    event.preventDefault();
    setLoginError("");
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AUTH_FLOW_COMPONENTS.LOGIN);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const {
      email
    } = event.target.elements;
    setLoginError("");
    sendOutPasswordReset(email.value).then(() => {
      console.log("password reset set");
    }).catch(error => {
      setPasswdResetError(error.message);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
            children: "MedDBriefer Password Reset Form"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 24
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "email",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-sm-1"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-form-label"]),
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-sm-11"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              id: "email",
              name: "email",
              type: "email",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["form-control"],
              placeholder: "Enter email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["text-danger"],
            children: passwdResetError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "submit",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["btn-primary"]),
            children: "Send Password Reset Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "button",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["btn-link"]),
            onClick: handleRememberedPasswd,
            children: "I remembered my password!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPasswordForm);

/***/ }),

/***/ 59907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25600);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94292);
/* harmony import */ var _icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93391);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/components/LoginForm.js";









const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    authMsg,
    loginError,
    loginUserWithEmailAndPassword,
    setCurrAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext); // const haveMessage = () => "" !== loginError

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleForgotPassword = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_FLOW_COMPONENTS.FORGOT_PASSWD);
  };

  const handleLogin = event => {
    event.preventDefault();
    const {
      email,
      password
    } = event.target.elements;
    loginUserWithEmailAndPassword(email.value, password.value);
  };

  const handleRegister = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_FLOW_COMPONENTS.REGISTER);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: handleLogin,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "email",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-2"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-form-label"]),
            children: "Email address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-10"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "email",
              name: "email",
              type: "email",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form-control"],
              placeholder: "Enter email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "password",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-2"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-form-label"]),
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-10"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "password",
              name: "password",
              type: passwordVisible ? "text" : "password",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form-control"],
              placeholder: "Enter password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: passwordVisible,
              stateToggler: togglePasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["text-danger"],
            children: loginError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: authMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "submit",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-primary"]),
          children: "Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-link"]),
          onClick: handleForgotPassword,
          children: "I forgot my Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-link"]),
          onClick: handleRegister,
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ 75032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94292);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25600);
/* harmony import */ var _icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93391);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/components/RegistrationForm.js";









const RegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const {
    setCurrAuthComponent,
    registerErrorMsg,
    registerUserWithEmailAndPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_5__.AuthContext);

  const alreadyHaveAccount = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_FLOW_COMPONENTS.LOGIN); // console.log("I already have an account")
  };

  const handleSignUp = event => {
    event.preventDefault();
    const {
      email,
      password
    } = event.target.elements;
    registerUserWithEmailAndPassword(email.value, password.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: handleSignUp,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
            children: "Sign up for MedDBriefer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "classCode",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Class Code"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "classCode",
              name: "classCode",
              type: "text",
              placeholder: "example: demo",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "emailAddress",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "emailAddress",
              name: "email",
              type: "email",
              placeholder: "example: john.doe@gmail.com",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "password",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "password",
              name: "password",
              type: passwordVisible ? "text" : "password",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              placeholder: "Enter password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: passwordVisible,
              stateToggler: togglePasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "confirmPassword",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Confirm Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "confirmPassword",
              name: "confirmPassword",
              type: confirmPasswordVisible ? "text" : "password",
              placeholder: "Password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: confirmPasswordVisible,
              stateToggler: toggleConfirmPasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["text-danger"],
            children: registerErrorMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "submit",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["btn-primary"]),
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["btn-link"]),
          onClick: alreadyHaveAccount,
          children: "I already have an account."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationForm);

/***/ }),

/***/ 93391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/components/icons/PasswordVisibilityIcon.js";





const PasswordVisibilityIcon = ({
  visible,
  stateToggler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["input-group-text"], "material-icons-outlined"),
    onClick: stateToggler,
    children: visible ? "visibility" : "visibility_off"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordVisibilityIcon);

/***/ }),

/***/ 25600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_FLOW_COMPONENTS": () => (/* binding */ AUTH_FLOW_COMPONENTS),
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89526);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/contexts/Auth.js";




 // for development purposes, expose db to the dev console
// window.db = db


const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createContext({});
const PASSWORD_RESET_SUCCESS_MSG = "You should soon recieve an email with a password reset link it. " + "After reseting you password, you will be able to sign in.";
const EMAIL_VERIFY_MESSAGE = "A message has been sent to your email address. It contains a link which will " + "verify that you are the owner of that email address";
const ERROR_CODE_UNKNOWN_USER = "auth/user-not-found";
const ERROR_CODE_WRONG_PASSWD = "auth/wrong-password";
const ERROR_CODE_ACCT_ALREADY_EXISTS = "auth/email-already-in-use";
const ERROR_CODE_NETWORK_ERROR = "auth/network-request-failed";
const UNKNOWN_USER_ERROR_MSG = "Sorry, we have no record of a user with your email address";
const WRONG_PASSWD_ERROR_MSG = "Incorrect Password. Try again.";
const ACCT_ALREADY_EXISTS_ERROR_MSG = "An account already exists with that email address";
const NETWORK_ERROR_MSG = "A Network Error has occurred. Try again later.";
const AUTH_FLOW_COMPONENTS = {
  LOGIN: "signin",
  REGISTER: "register",
  FORGOT_PASSWD: "forgot-passwd",
  EMAIL_VERIFY: "email-verify"
};
function AuthProvider({
  children
}) {
  const {
    auth,
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();
  const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [authMsg, setAuthMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [currAuthComponent, setCurrAuthComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(AUTH_FLOW_COMPONENTS.LOGIN);
  const [registerErrorMsg, setRegisterErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [loginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [passwdResetError, setPasswdResetError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [isStaff, setIsStaff] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [emailVerified, setEmailVerified] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [userPrefs, setUserPrefs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});

  const userIsStaff = async user => {
    // returns bool regarding whether user is authenticated and whether they have
    // "staff" privileges.
    // if a user has staff privs, a document will exist in the "staff" db collection
    // whose document id represents their uid
    if (!user) {
      return false;
    }

    const docRef = db.collection("staff").doc(user.uid);
    const doc = await docRef.get();
    return doc.exists;
  };

  const signOutUser = () => {
    auth.signOut().then(() => {
      setUnauthedState();
    }).catch(error => console.log(error));
  };

  const setUnauthedState = () => {
    setIsAuthenticated(false);
    setIsStaff(false);
    setUserName(null);
    setEmailVerified(false);
  };

  const registerUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
      userCredential.user.sendEmailVerification();
      setRegisterErrorMsg("");
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_ACCT_ALREADY_EXISTS:
          setRegisterErrorMsg(ACCT_ALREADY_EXISTS_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setRegisterErrorMsg(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setRegisterErrorMsg(error.message);
          break;
      }
    });
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      setLoginError("");
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_WRONG_PASSWD:
          setLoginError(WRONG_PASSWD_ERROR_MSG);
          break;

        case ERROR_CODE_UNKNOWN_USER:
          setLoginError(UNKNOWN_USER_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setLoginError(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setLoginError(error.message);
          break;
      }
    });
  };

  const sendOutPasswordReset = email => {
    auth.sendPasswordResetEmail(email).then(() => {
      setAuthMsg(PASSWORD_RESET_SUCCESS_MSG);
      setCurrAuthComponent(AUTH_FLOW_COMPONENTS.LOGIN);
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_UNKNOWN_USER:
          setPasswdResetError(UNKNOWN_USER_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setPasswdResetError(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setPasswdResetError(error.message);
          break;
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    auth.onAuthStateChanged(user => {
      // handle changes in auth state - does this include emailVerified changes???
      setCurrentUser(user);

      if (user) {
        setIsAuthenticated(true); // set userName to whatever is before the "@" in the user's email address

        setUserName(user.email.substr(0, user.email.indexOf("@")));
        userIsStaff(user).then(res => {
          setIsStaff(res);

          if (!user.emailVerified) {
            setAuthMsg(EMAIL_VERIFY_MESSAGE);
            setCurrAuthComponent(AUTH_FLOW_COMPONENTS.EMAIL_VERIFY);
          } else {
            setEmailVerified(true);
          }
        }).catch(err => console.error(err));
      } else {
        setUnauthedState();
      }
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [] // only run on first render
  ); // Return current users document

  const getUserDoc = () => db.collection("users").doc(currentUser.uid) || null; // Update or create user data in db


  const saveUserData = (field, data) => {
    getUserDoc().set({
      [field]: data
    }, {
      merge: true
    });
  };

  const getUserData = async () => {
    let data = await getUserDoc().get();
    return data.data();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(AuthContext.Provider, {
    value: {
      auth,
      currentUser,
      authMsg,
      setAuthMsg,
      registerErrorMsg,
      setRegisterErrorMsg,
      registerUserWithEmailAndPassword,
      loginError,
      setLoginError,
      loginUserWithEmailAndPassword,
      passwdResetError,
      setPasswdResetError,
      sendOutPasswordReset,
      currAuthComponent,
      setCurrAuthComponent,
      signOutUser,
      userName,
      isAuthenticated,
      isStaff,
      emailVerified,
      setEmailVerified,
      userPrefs,
      setUserPrefs,
      saveUserData,
      getUserData
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 39585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_sts125_projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25600);
/* harmony import */ var _components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2956);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);

const _excluded = ["component", "authFlowLayout"];
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/routes/PrivateRoute.js";


/* eslint-disable no-extra-boolean-cast */






const PrivateRoute = _ref => {
  let {
    component: RouteComponent,
    authFlowLayout: Layout
  } = _ref,
      rest = (0,_Users_sts125_projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const {
    emailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  if (emailVerified) {
    // user is logged in, proceed normally, wrap as normal route as RouteComponent
    // may be depending on standard props passed to routes
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
      render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RouteComponent, Object.assign({}, routeProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined);
  } else if (!!Layout) {
    // return AuthFlow embeded within provided layout
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, rest, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined);
  } else {
    // simply return AuthFlow with out any wrapping layout
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 14
    }, undefined);
  } // if (!unauthedComponent) {
  //   unauthedComponent = (
  //     <>
  //     <AuthFlow />
  //     </>
  //   )
  // }
  // return (
  //   <Route
  //     {...rest}
  //     render={routeProps =>
  //       !!currentUser ? (
  //         <RouteComponent {...routeProps} />
  //       ) : (
  //         unauthedComponent
  //       )
  //     }
  //   />
  // );

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

/***/ 90609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_sts125_projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25600);
/* harmony import */ var _components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2956);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);

const _excluded = ["component", "authFlowLayout"];
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/mdb-auth/src/lib/routes/StaffRoute.js";




 // non-exported component which displays message (modififiable by prop) that the
// user does not have staff privileges



const NotStaff = ({
  msg: _msg = "Staff Privileges are required to access this page."
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: _msg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

const StaffRoute = _ref => {
  let {
    component: RouteComponent,
    authFlowLayout: Layout
  } = _ref,
      rest = (0,_Users_sts125_projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const {
    isAuthenticated,
    isStaff,
    emailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  if (isStaff && emailVerified) {
    // user is logged in and is staff. proceed normally, wrap as normal route as RouteComponent
    // may be depending on standard props passed to routes
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
      render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RouteComponent, Object.assign({}, routeProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined);
  } else if (isAuthenticated && emailVerified) {
    // display message that the user needs a staff privileges to access this page
    if (Layout) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, routeProps, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NotStaff, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NotStaff, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 20
      }, undefined);
    }
  } else {
    if (Layout) {
      // return AuthFlow embeded within provided layout
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, routeProps, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 29
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined);
    } else {
      // simply return AuthFlow with out any wrapping layout
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaffRoute);

/***/ }),

/***/ 47026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97794);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/CallOutText.js";





const CallOutText = ({
  assessment
}) => {
  const {
    scenario,
    isCurrentAssessmentFinding
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_2__.ScenarioContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("callout", {
      currentCallOut: isCurrentAssessmentFinding(assessment.id)
    }),
    children: scenario.assessmentFindings[assessment.id]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallOutText);

/***/ }),

/***/ 59654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var _icons_CheckBoxIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50146);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/CheckBox.js";





const CheckBox = props => {
  // need props param to exist in order to access props.children
  const {
    step,
    clickHandler,
    inlineChildren = []
  } = props;
  const {
    isChecked
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();

  const getLabel = item => !!item.abbrLabel ? item.abbrLabel : item.label;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
      onClick: () => clickHandler(step.id),
      style: {
        fontSize: "0.75em",
        marginBottom: "0"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_icons_CheckBoxIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        checked: isChecked(step.id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), getLabel(step), inlineChildren]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), !!props.children && props.children]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

/***/ }),

/***/ 56254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73441);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97794);
/* harmony import */ var _CheckListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54844);
/* harmony import */ var _icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38074);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/CheckList.js";









const isHeading = step => step.type === "heading";

function CheckList({
  steps,
  depth = 4,
  first = false
}) {
  const {
    toggleCollapsed,
    getCollapsed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_2__.ScenarioContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      first: first
    }),
    children: steps.map(step => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
      children: !isHeading(step) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CheckListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        step: step
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          style: {
            cursor: "pointer"
          },
          className: `h${depth}`,
          onClick: () => toggleCollapsed(step.id),
          children: [step.label, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            expand: getCollapsed(step.id)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isOpen: getCollapsed(step.id),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(CheckList, {
            steps: step.children,
            depth: depth + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }, this)]
      }, void 0, true)
    }, `li-${step.id}`, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 54844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95558);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59654);
/* harmony import */ var _CallOutText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47026);
/* harmony import */ var _icons_CallOutIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44724);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/CheckListItem.js";








const getLabel = item => {
  if ("abbrLabel" in item && "" !== item.abbrLabel) {
    return item.abbrLabel;
  } else {
    return item.label;
  }
};

const CheckListItem = ({
  step
}) => {
  const {
    // scenario,
    isChecked,
    setChecked,
    toggleChecklistItem,
    toggleAssessmentItem,
    setCurrentAssessmentFinding
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.useScenario)();

  const assessmentClickHandler = item => {
    toggleAssessmentItem(item);
    setCurrentAssessmentFinding(item.id);
  };

  const deselectOtherRadios = (selectedID, radioGroup) => {
    const otherOptionIDs = radioGroup.options.map(item => item.id).filter(id => id !== selectedID);
    otherOptionIDs.forEach(otherID => setChecked(otherID, false));
  };

  const awoClickHandler = (event, radioGroup, selectedRadio) => {
    const selectedID = selectedRadio.id;
    deselectOtherRadios(selectedID, radioGroup);
    toggleAssessmentItem(selectedRadio);
    setCurrentAssessmentFinding(selectedID);
  };

  const decisionClickHandler = (event, radioGroup, selectedRadio) => {
    const selectedID = selectedRadio.id;
    deselectOtherRadios(selectedID, radioGroup);
    toggleChecklistItem(selectedRadio);
  }; // const radioClickHandler = (event, radioGroup, selectedRadio) => {
  //     const selectedID = selectedRadio.id
  //     deselectOtherRadios(selectedID, radioGroup)
  //     // const otherOptionIDs = radioGroup.items.map(item => item.id).filter(id => id !== selectedID)
  //     // console.log("selectedID", selectedID)
  //     // console.log("otherOptionIDs", otherOptionIDs)
  //     // console.log("currentTargetValue", event.currentTarget.value)
  //     // otherOptionIDs.forEach(otherID => setChecked(otherID, false))
  //     toggleChecklistItem(selectedRadio)
  //     if (radioGroup.type === AWO) {
  //         setCurrentAssessmentFinding(selectedID)
  //     }
  // }
  // const requiredActionClickHandler = () => {
  //     console.log("coming soon")
  // }


  const depth = undefined === step.depth ? 0 : step.depth - 1;

  switch (step.type) {
    // case TYPES.NESTED_CHECKLIST:
    //     return (
    //         <>
    //         <span>{getLabel(step)}</span>
    //         <ul>
    //             {step.items.map(item => (
    //                 <li key={item.id}>
    //                     <CheckListItem  step={item} />
    //                 </li>
    //             ))}
    //         </ul>
    //         </>
    //     )
    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: `depth-${depth}`,
        style: {
          fontSize: "0.75em"
        },
        children: getLabel(step)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.ASSESS:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: `depth-${depth}`,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          step: step,
          clickHandler: () => assessmentClickHandler(step),
          inlineChildren: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_icons_CallOutIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            assessment: step
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 41
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), isChecked(step.id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CallOutText__WEBPACK_IMPORTED_MODULE_3__["default"], {
          assessment: step
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 44
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.AWO:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
          className: `depth-${depth}`,
          children: getLabel(step)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_icons_CallOutIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          assessment: step
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 74
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, undefined), "\xA0 \xA0", step.items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "radio",
            name: step.id,
            checked: isChecked(item.id),
            value: item.id,
            onChange: event => awoClickHandler(event, step, item)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, undefined), "\xA0 ", getLabel(item), " \xA0"]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, undefined), step.items.map(item => isChecked(item.id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CallOutText__WEBPACK_IMPORTED_MODULE_3__["default"], {
          assessment: item
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 47
        }, undefined))]
      }, void 0, true);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
          className: `depth-${depth}`,
          style: {
            fontSize: "0.75ema"
          },
          children: getLabel(step)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: `depth-${depth + 1}`,
          children: step.options.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              type: "radio",
              name: step.id,
              checked: isChecked(item.id),
              value: item.id,
              onChange: event => decisionClickHandler(event, step, item)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 25
            }, undefined), "\xA0 ", getLabel(item), " \xA0"]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 21
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }, undefined)]
      }, void 0, true);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_PROMPT:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
        className: `depth-${depth}`,
        children: getLabel(step)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 21
      }, undefined);

    default:
      // case 'required-action':
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: `depth-${depth}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          step: step,
          clickHandler: () => toggleChecklistItem(step)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, undefined);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckListItem);

/***/ }),

/***/ 53908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _forms_FormUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64874);
/* harmony import */ var _forms_FormUtils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_forms_FormUtils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/InterventionForm.js";

 // Airway
//  BLS
// import BLSAirwayManagement from "./forms/BLSAirwayManagement"
// import RemoveAirwayObstructions from "./forms/RemoveAirwayObstructions"
// import Suction from "./forms/Suction"
// import Crico from "./forms/Crico"
// ALS
// import ALSAirwayManagement from "./forms/ALSAirwayManagement"
// BREATHING
// import AssuresAdequateVentilation from "./forms/AssuresAdequateVentilation"
// import OxygenTherapy from "./forms/OxygenTherapy"
//    MANAGE BREATING-COMPROMISING INJURIES
// import OcclusiveDressing from "./forms/OcclusiveDressing"
// import PleuralDecompression from "./forms/PleuralDecompression"
// CIRCULATION
// import ControlBleeding from "./forms/ControlBleeding"
// import ControlShock from "./forms/ControlShock"
// OTHER MANAGEMENT ACTIONS
// import ManageSecondaryInjuries from "./forms/ManageSecondaryInjuries"
// import RestrictSpinalMotion from "./forms/RestrictSpinalMotion"
// import Transport from "./forms/Transport"
// ONGOING MANAGEMENT PLAN
// import TransfersPatient from "./forms/TransfersPatient"
// import ReassessModifyInterventions from "./forms/ReassessModifyInterventions"
// import AdministerAdditionalInterventions from "./forms/AdministerAdditionalInterventions"
// import ReassessVitalSigns from "./forms/ReassessVitalSigns"

 // import { FormGroup } from "reactstrap"



const InterventionForm = () => {
  const {
    scenario,
    currentInterventionForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioContext);

  switch (currentInterventionForm) {
    case "intv-form-open-airway":
    case "intv-form-bls-airway-management":
    case "intv-form-als-airway-management":
    case "intv-form-establish-patency": // case "intv-form-remove-foreign-objects":
    // case "intv-form-suction":
    // case "intv-form-crico":

    case "intv-form-ventilation":
    case "intv-form-supplemental-oxygen":
    case "intv-form-manage-breathing-injuries": // case "intv-form-occlusive-dressing":
    // case "intv-form-pleural-decompression":

    case "intv-form-severe-bleeding":
    case "intv-form-shock":
    case "intv-form-spinal-motion-restriction":
    case "intv-form-manage-secondary-injuries":
    case "intv-form-transport-decisions":
    case "intv-form-transfers-patient":
    case "intv-form-reassess-vital-signs":
    case "intv-form-reassess-modify-interventions":
    case "intv-form-administer-additional-interventions":
      // return (<BLSAirwayManagement />)
      // return (<RemoveAirwayObstructions />)
      // return (<Suction />)
      // return (<Crico />)
      // return (<ALSAirwayManagement />)
      // return (<AssuresAdequateVentilation />)
      // return (<OxygenTherapy />)
      // return (<OcclusiveDressing />)
      // return (<PleuralDecompression />)
      // return (<ControlBleeding />)
      // return (<ControlShock />)
      // return (<ManageSecondaryInjuries />)
      // return (<RestrictSpinalMotion />)
      // return (<Transport />)
      // return (<TransfersPatient />)
      // return (<ReassessVitalSigns />)
      // return (<ReassessModifyInterventions />)
      // return (<AdministerAdditionalInterventions />)
      const form = scenario.interventionForms[currentInterventionForm];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_forms_FormUtils__WEBPACK_IMPORTED_MODULE_2__.IntvForm, {
        id: form.id,
        label: form.label,
        checkedWhen: form.checkedWhen,
        items: form.items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, undefined);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: "unimplemented form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, undefined);
  }
}; // const InterventionForm = ({step}) => {
//     const { scenario, shouldDisplayInterventionForm, toggleChecked } = useContext(ScenarioContext)
//     const getInterventionsList = () => {
//         return (
//             scenario.interventionForms[step.id].interventions.map((intv) => (
//                 <div key={intv.id}>
//                     <label>
//                         <input type="checkbox" />
//                         &nbsp; {intv.label}
//                     </label>
//                 </div>
//             ))
//         )
//     }
//     const renderFormItem = (formItem) => {
//         switch (formItem.type) {
//             case "prompt":
//                 return (<i>{formItem.label}</i>)
//             case "intervention":
//                 return (
//                     <label>
//                         <input type="checkbox" id={formItem.id} />
//                         {formItem.label}
//                     </label>
//                 )
//             case "intervention-form":
//                 return (
//                     <InterventionForm step={formItem} />
//                 )
//             case "heading":
//                 return (
//                     <>
//                     <p><b>{formItem.label}</b></p>
//                     <ul>
//                         {formItem.children.map((fi) => (
//                             <li key={`fi-${fi.id}`}>
//                                 {renderFormItem(fi)}
//                             </li>
//                         ))}
//                     </ul>
//                     </>
//                 )
//         }
//     }
//     if (!shouldDisplayInterventionForm(step.id)) {
//         return (<div></div>)
//     } else {
//         const formItems = scenario.interventionForms[step.id]
//         // return (
//         //     <div className="intervention-form">
//         //     </div>
//         // )
//         if (!formItems) {
//             return (
//                 <div className="intervention-form">
//                     <label>
//                         <input type="checkbox" />Placeholder
//                     </label>
//                 </div>
//             )
//         }
//         return (
//             <div className="intervention-form">
//                 <ul>
//                     {formItems.map((item) => (
//                         <li key={`fi-${item.id}`}>
//                             {renderFormItem(item)}
//                         </li>
//                     ))}
//                 </ul>
//                 {/* <form> */}
//                     {/* { getInterventionsList()
//                     {/* <button
//                         type="button"
//                         className="btn btn-primary btn-small"
//                         onClick={() => toggleChecked(step.id)}
//                     >
//                         Submit
//                     </button> */}
//                 {/* </form> */}
//             </div>
//         )
//     }
// }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionForm);

/***/ }),

/***/ 79984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77122);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82883);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61114);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73441);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20613);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95558);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97794);
/* harmony import */ var _icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38074);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27383);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/InterventionsList.js";





 // import { usePrefs }    from "../contexts/PreferencesContext"







const InterventionOutline = ({
  category
}) => {
  const {
    scenario,
    setCurrIntv,
    setShowIntvSelection
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_5__.useScenario)();
  const [intvCatMenu, setIntvCatMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  const handleInterventionSelection = (event, item) => {
    setShowIntvSelection(false);
    setTimeout(() => setCurrIntv(item.interventionID), 500);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const menu = scenario.interventionMenus.find(im => im.id === category);

    if (!!menu) {
      setIntvCatMenu(menu);
      setCurrIntv(null);
    } else {
      setIntvCatMenu(null);
      setCurrIntv(null);
    }
  }, [category]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("ul", {
    className: "interventions-outline",
    children: !!intvCatMenu && intvCatMenu.items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()([`menu-depth-${item.depth}`, item.type === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_4__.HEADING ? "menu-heading" : "intervention"]),
      children: item.type === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_4__.MDB_TYPES.INTERV ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: "link",
        size: "md",
        className: "intervention-btn",
        onClick: event => handleInterventionSelection(event, item),
        children: item.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 27
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
        children: item.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 27
      }, undefined)
    }, `${item.id}-${item.depth}`, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, undefined);
};

const InterventionsAccordian = () => {
  const {
    scenario,
    currIntvCat,
    setCurrIntvCat
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_5__.useScenario)();

  const toggleCat = menuID => {
    if (currIntvCat === menuID) {
      setCurrIntvCat("");
    } else {
      setCurrIntvCat(menuID);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: scenario.interventionMenus.map(menu => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "intervention-submenu",
        onClick: () => toggleCat(menu.id),
        children: [menu.label, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
          expand: menu.id === currIntvCat
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isOpen: currIntvCat === menu.id,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: "intervention-outline-wrapper",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(InterventionOutline, {
            category: menu.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }, undefined)]
    }, menu.id, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }, undefined))
  }, void 0, false);
};

const InterventionsList = () => {
  const {
    showIntvSelection,
    setShowIntvSelection,
    setCurrIntv
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_5__.useScenario)();

  const toggleCollapsed = () => {
    if (!showIntvSelection) {
      setCurrIntv(null);
    }

    setShowIntvSelection(!showIntvSelection);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Interventions",
    collapsable: true,
    customCollapsedState: !showIntvSelection,
    customCollapseToggler: toggleCollapsed,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(InterventionsAccordian, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsList);

/***/ }),

/***/ 19701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27383);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/InterventionsPerformed.js";




const InterventionsPerformed = () => {
  const {
    intvsPerformedCollapsed,
    toggleIntvsPerformedCollapsed
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Intervention History",
    collapsable: true,
    initialCollapseState: intvsPerformedCollapsed,
    customCollapsedState: intvsPerformedCollapsed,
    customCollapseToggler: toggleIntvsPerformedCollapsed,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      children: "Coming soon. a list of completed interventions, along with results, if applicable"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsPerformed);

/***/ }),

/***/ 25923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36719);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49966);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67465);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/MDBContainer.js";




const MDBContainer = ({
  lhs,
  rhs,
  lhsWidth: _lhsWidth = 6,
  rhsWidth: _rhsWidth = 6
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fluid: true,
    className: "main",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        md: _lhsWidth,
        className: "col",
        children: lhs
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        md: _rhsWidth,
        className: "col right-col",
        children: rhs
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDBContainer);

/***/ }),

/***/ 27383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73441);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82883);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61114);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31878);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20613);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38074);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/Panel.js";








const Panel = ({
  title,
  centerTitle: _centerTitle = false,
  titleSize: _titleSize = "h5",
  collapsable: _collapsable = false,
  initialCollapseState: _initialCollapseState = false,
  customCollapsedState,
  customCollapseToggler,
  scrollBody: _scrollBody = false,
  minHeight: _minHeight = null,
  maxHeight: _maxHeight = null,
  children
}) => {
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_initialCollapseState);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  const noop = () => {};

  const getClickHandler = () => {
    if (!_collapsable) {
      return noop;
    } else if (undefined !== customCollapseToggler) {
      return () => customCollapseToggler();
    } else {
      return toggleCollapsed;
    }
  };

  const getCollapsedValue = () => {
    let retVal = collapsed;

    if (undefined !== customCollapsedState) {
      retVal = customCollapsedState;
    }

    return retVal;
  };

  const wrapWithCollapse = contents => {
    if (!_collapsable) {
      return contents;
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isOpen: !getCollapsedValue(),
        style: {
          height: "fit-content",
          maxHeight: 'calc(100% - 31px)',
          width: "100%",
          overflowY: "scroll"
        },
        children: contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      minHeight: !!_minHeight ? _minHeight : "fit-content",
      height: "fit-content",
      maxHeight: !!_maxHeight ? _maxHeight : "fit-content"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        textAlign: _centerTitle ? "center" : "left",
        backgroundColor: "white",
        border: 0,
        padding: 0,
        paddingLeft: "5px",
        borderBottom: "0" // marginTop: "5px"

      },
      onClick: getClickHandler(),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: _titleSize,
        style: {
          fontSize: "15.8px",
          fontWeight: "bold",
          marginBottom: "2px"
        },
        children: [title, " ", _collapsable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          expand: !getCollapsedValue()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 45
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined), wrapWithCollapse( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      style: {
        height: _collapsable ? "100%" : 'calc(100% - 31px)',
        // overflowY: scrollBody ? "scroll" : "hidden",
        paddingLeft: 0,
        paddingRight: 0
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);

/***/ }),

/***/ 68289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2441);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21808);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33015);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51255);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7618);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _tabs_InterventionsStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24613);
/* harmony import */ var _tabs_OPQRST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2005);
/* harmony import */ var _tabs_SampleTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1081);
/* harmony import */ var _tabs_VitalsTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75324);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/PatientStatus.js";










const PatientStatus = () => {
  const {
    patientStatusTab,
    setPatientStatusTab
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.useScenario)();

  const activateTab = tab => {
    if (patientStatusTab !== tab) setPatientStatusTab(tab);
  };

  const isActiveTab = tab => tab === patientStatusTab;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tabs: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
            active: isActiveTab('interventionsStatus')
          }),
          onClick: () => activateTab('interventionsStatus'),
          children: "Interventions Status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
            active: isActiveTab('vitals')
          }),
          onClick: () => activateTab('vitals'),
          children: "Vitals"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
            active: isActiveTab('sample')
          }),
          onClick: () => activateTab('sample'),
          children: "SAMPLE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
            active: isActiveTab('opqrst')
          }),
          onClick: () => activateTab('opqrst'),
          children: "OPQRST"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      activeTab: patientStatusTab,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        tabId: "interventionsStatus",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tabs_InterventionsStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        tabId: "vitals",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tabs_VitalsTab__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        tabId: "sample",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tabs_SampleTab__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        tabId: "opqrst",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tabs_OPQRST__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatientStatus);

/***/ }),

/***/ 98596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97794);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95558);
/* harmony import */ var _CheckList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56254);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27383);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/PhaseCheckList.js";









const PhaseCheckList = ({
  section
}) => {
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    scenario
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__.useScenario)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_4__.MDB_TYPES.PHASE === section.type) {
      setTitle(`${section.label} checklist`);
    } else if (_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_4__.MDB_TYPES.SUB_PHASE === section.type) {
      const phaseTitle = scenario.getChecklistItem(section.phase).label;
      setTitle(`${phaseTitle}/${section.label} checklist`);
    }
  }, [section]);

  if (!title) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: title,
    collapsable: true,
    scrollBody: true,
    minHeight: "250px",
    maxHeight: "590px",
    children: section.items && section.items.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CheckList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      steps: section.items,
      first: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h6", {
      children: [" The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
        children: section.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 24
      }, undefined), " section does not have its own checklist items. Select one of its sub-sections on the left."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhaseCheckList);

/***/ }),

/***/ 79374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _SubPhaseNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90002);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/PhaseNav.js";






const PhaseNav = ({
  baseURL,
  activeColor,
  id,
  label,
  subPhases: _subPhases = []
}) => {
  const {
    currPhase
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.useScenario)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  const clickHandler = event => {
    history.push(`${baseURL}/${id}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("phase-nav", _subPhases.length === 0 && "no-children"),
    style: {
      backgroundColor: currPhase === id ? activeColor : "transparent"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_subPhases.length > 0 && "phase-label"),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        id: id,
        onClick: clickHandler,
        style: {
          color: currPhase === id ? "black" : "white"
        },
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), _subPhases.length > 0 && _subPhases.map(sph => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SubPhaseNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      baseURL: baseURL,
      activeColor: activeColor,
      id: sph.id,
      label: sph.label,
      phase: id
    }, sph.id, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined); //     if (subPhases.length > 0) {
  //         return (
  //             <div
  //                 className="phase-nav"
  //                 style={{
  //                     backgroundColor: (currPhase === id) ? activeColor : "transparent"
  //                 }}
  //             >
  //                 <div className="phase-label">
  //                     <button
  //                         id={id}
  //                         onClick={clickHandler}
  //                         style={{
  //                             color: (currPhase === id) ? "black" : "white",
  //                         }}
  //                     >
  //                         {label}
  //                     </button>
  //                 </div>
  //                 {subPhases.map(sph=> (
  //                     <SubPhaseNav
  //                         key={sph.id}
  //                         baseURL={baseURL}
  //                         activeColor={activeColor}
  //                         id={sph.id}
  //                         label={sph.label}
  //                         phase={id}
  //                     />
  //                 ))}
  //             </div>
  //         )
  //     }
  //     return (
  //         <div
  //             className="phase-nav no-children"
  //             style={{ backgroundColor: (currPhase === id) ? activeColor : "transparent" }}
  //         >
  //             <button
  //                 id={id}
  //                 onClick={clickHandler}
  //                 style={{
  //                     color: (currPhase === id) ? "black" : "white",
  //                 }}
  //             >
  //                 {label}
  //             </button>
  //         </div>
  //     )
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhaseNav);

/***/ }),

/***/ 3593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95558);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _PhaseNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79374);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/PhaseNavPane.js";






const COLORS = ["#e5ba8eff", "#c0aac8ff", "#aad5d9ff", "#b9ba6aff", "#ebcd68ff", "#a5afd9ff", "#a5c4bbff", "#b9ba6aff"];

const PhaseNavPane = () => {
  const {
    scenario
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.useScenario)();
  const {
    url
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useRouteMatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: scenario.phaseData.filter(rec => rec.type === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE).map((phase, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_PhaseNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      baseURL: url,
      activeColor: COLORS[index],
      id: phase.id,
      label: phase.label,
      subPhases: phase.subPhases
    }, phase.id, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined))
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhaseNavPane);

/***/ }),

/***/ 76370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RevealTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91412);
/* harmony import */ var _RevealTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37055);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/RevealTable.js";




function RevealTable({
  title,
  category,
  headings = [],
  rows = []
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    striped: true,
    size: "sm",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
        children: headings.map((heading, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
          children: heading
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
      children: rows.map((row, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_RevealTableRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: category,
        label: row.label,
        value: row.value
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 37055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RevealTableRow)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77122);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/RevealTableRow.js";



function RevealTableRow({
  label,
  category,
  value
}) {
  const {
    logPatientStatusRequest
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();

  const clickHandler = value => {
    logPatientStatusRequest(category, label, value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("th", {
      children: [label, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "success",
        size: "sm",
        className: "request-btn",
        onClick: () => clickHandler(value),
        children: "Requested"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 90002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7267);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/SubPhaseNav.js";




const SubPhaseNav = ({
  baseURL,
  activeColor,
  id,
  label,
  phase
}) => {
  const {
    currPhase,
    currSubPhase
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();

  const clickHandler = event => {
    history.push(`${baseURL}/${phase}/${id}`);
  }; // #566573


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "subphase-nav",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      id: id,
      style: {
        color: currSubPhase === id | currPhase !== phase ? "white" : "black",
        backgroundColor: currSubPhase === id ? "black" : "transparent"
      },
      onClick: clickHandler,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubPhaseNav);

/***/ }),

/***/ 74073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/forms/CheckBoxGroup.js";


const CheckBoxGroup = ({
  id,
  options,
  isSelected,
  setSelected
}) => {
  const getLabel = option => !!option.abbrLabel ? option.abbrLabel : option.label;

  const changeHandler = (event, option) => {
    const {
      name,
      value,
      checked
    } = event.target;
    setSelected(name, value, checked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "checkbox-group-options",
    children: options.map(opt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: "prompt-option",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          className: "prompt-checkbox",
          name: id,
          value: opt.id,
          checked: isSelected(id, opt.id),
          onChange: event => changeHandler(event, opt)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, undefined), getLabel(opt)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, undefined)
    }, opt.id, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBoxGroup);

/***/ }),

/***/ 56586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var _icons_CheckBoxIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50146);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/forms/FormCheckBox.js";




const FormCheckBox = ({
  id,
  label,
  abbrLabel,
  clickHandler
}) => {
  const {
    isChecked
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();

  const getLabel = () => !!abbrLabel ? abbrLabel : label;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    onClick: clickHandler,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_icons_CheckBoxIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      checked: isChecked(id)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      children: getLabel()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckBox);

/***/ }),

/***/ 64874:
/***/ (() => {

// import React, {
//     useCallback,
//     useContext,
//     useEffect,
//     // useMemo,
//     useState
// } from "react"
// import { Button, Collapse } from 'reactstrap'
// import { ScenarioContext } from "../../contexts/ScenarioContext"
// import CheckBoxIcon from "../icons/CheckBoxIcon"
// import CheckmarkIcon from "../icons/CheckmarkIcon"
// import ChevronIcon from "../icons/ChevronIcon"
// import DoneIcon from "../icons/DoneIcon"
// export const NestedForm = ({id, label, checkedWhen = "some", show = true, addIDs = null, removeIDs = null, recomputeParent = null, clearIfNotShown = true, items = []}) => {
//     const {
//         getCheckListIDValues,
//         checkListItems,
//         evalIDExpression,
//         extractIDsFromExpression,
//         isChecked,
//         scenario,
//         setChecked,
//         someChecked,
//         allChecked,
//         setDerivedCheckListItemValue,
//         shouldDisplayInterventionForm,
//         toggleDisplayInterventionForm
//     } = useContext(ScenarioContext)
//     const determineInitialShowFormValue = (propVal) => {
//         return (propVal === true) ? true : evalIDExpression(propVal)
//     }
//     const isConstantPropVal = (propVal) => {
//         return (propVal === true) || (["some", "all"].includes(propVal))
//     }
//     const getChildIDs = (arr) => {
//         return arr.map((child => child.id))
//     }
//     const [nested, setNested] = useState(scenario.interventionForms[id])
//     const [showIDs, setShowIDs] = useState(isConstantPropVal(show) ? [] : extractIDsFromExpression(show))
//     const [showIDsValues, setShowIDsValues] = useState(isConstantPropVal(show) ? [] : getCheckListIDValues(showIDs))
//     const [showForm, setShowForm] = useState(determineInitialShowFormValue(show))
//     const [isCompleted, setIsCompleted] = useState(false)
//     const calcIsCompletedIDs = () => {
//         return isConstantPropVal(checkedWhen)
//                 ? getChildIDs(nested.items)
//                 : extractIDsFromExpression(checkedWhen)
//     }
//     const [isCompletedIDs, setIsCompletedIDs] = useState(calcIsCompletedIDs())
//     const calcCompletedIDValues = () => {
//         if (!showForm && clearIfNotShown) {
//             const vals = isCompletedIDs.map((icID) => false)
//             return vals
//         } else {
//             return isCompletedIDs.map((icID) => isChecked(icID))
//         }
//     }
//     const [isCompletedIDsValues, setIsCompletedIDsValues] = useState(calcCompletedIDValues())
//     useEffect(
//         () => {
//             if (showIDs.length !== 0) {
//                 const newVals = getCheckListIDValues(showIDs)
//                 const oldVals = showIDsValues
//                 // console.log(`NestedForm::showIDsValues  new: ${newVals}, old: ${oldVals}`)
//                 if (!arraysAreEqual(newVals, oldVals)) {
//                     setShowIDsValues(newVals)
//                 }
//             }
//             // if (isCompletedIDs.length !== 0) {
//             const newCompletedVals = getCheckListIDValues(isCompletedIDs)
//             const oldCompletedVals = isCompletedIDsValues
//             // console.log(`NestedForm::isCompletedIDsValues  new: ${newVals}, old: ${oldVals}`)
//             if (!arraysAreEqual(newCompletedVals, oldCompletedVals)) {
//                 setIsCompletedIDsValues(newCompletedVals)
//             }
//             // }
//         }, [checkListItems, showIDs, isCompletedIDs, setShowIDsValues, setIsCompletedIDsValues]
//     )
//     useEffect(
//         () => {
//             const newVal = evalIDExpression(show)
//             // console.log(`NestedForm(): show: ${show} showIDsValues: ${showIDsValues} showForm:${showForm} newVal: ${newVal}`)
//             if (newVal !== showForm) {
//                 setShowForm(newVal)
//             }
//         },
//         [showIDsValues]
//     )
//     useEffect(
//         () => {
//             if (showForm) {
//                 console.log("showing form", id)
//                 addIDs([id])
//             } else {
//                 console.log("no longer showing form", id)
//                 removeIDs([id])
//                 if (clearIfNotShown) {
//                     isCompletedIDs.forEach((id) => setChecked(id, false))
//                 }
//             }
//         }, [showForm]
//     )
//     useEffect(
//         () => {
//             let newVal
//             if (isConstantPropVal(checkedWhen)) {
//                 if ("some" === checkedWhen) {
//                     newVal = someChecked(isCompletedIDs)
//                 } else if ("all" === checkedWhen) {
//                     newVal = allChecked(isCompletedIDs)
//                 } else {
//                     newVal = evalIDExpression(checkedWhen)
//                 }
//             }
//             const oldVal = isChecked(id)
//             if (newVal !== oldVal) {
//                 setChecked(id, newVal)
//                 recomputeParent()
//             }
//         },
//         [isCompletedIDsValues]
//     )
//     if (!showForm) {
//         return (
//             <span>
//                 {/* {`not showingForm id: ${id} show: ${show} showIDs: ${showIDs} showIdsValues: ${showIDsValues}`} */}
//             </span>
//         )
//     } else {
//         return (
//             <>
//             <pre>
//                 show: {show} <br/>
//                 showIDs: {JSON.stringify(showIDs)} <br />
//                 showIdsValues: {JSON.stringify(showIDsValues)} <br/>
//                 checkedWhen: {checkedWhen} <br/>
//                 clearIfNotShown: {`${clearIfNotShown}`} <br/>
//                 isCompletedIds {JSON.stringify(isCompletedIDs)} <br/>
//                 isCompletedIDsValues: {JSON.stringify(isCompletedIDsValues)}<br/>
//             </pre>
//             {/* <ul> */}
//                 {nested.items.map(child =>
//                     <li key={child.id}><IntvFormItem item={child} addIDs={addIDs} removeIDs={removeIDs} /></li>)
//                 }
//             {/* </ul> */}
//             </>
//         )
//         // return (
//         // <ul>
//         //     {children.map(child =>
//         //         <li key={child.id}><IntvFormItem item={child} /></li>
//         //     )}
//         //     </ul>
//         // )
//     }
//     // return (
//     //     <li>
//     //         <span onClick={() => toggleDisplayInterventionForm(id)}>
//     //             <CheckmarkIcon checked={isChecked(id)} />
//     //             {label}
//     //             <ChevronIcon expand={shouldDisplayInterventionForm(id)} />
//     //          </span>
//     //         <Collapse isOpen={shouldDisplayInterventionForm(id)} >
//     //             <ul>
//     //             {children.map(child =>
//     //                 <li key={child.id}><IntvFormItem item={child} /></li>
//     //             )}
//     //             </ul>
//     //         </Collapse>
//     //     </li>
//     // )
// }
// export const DerivedValue = ({id, checkedWhen, children}) => {
//     const {
//         getCheckListIDValues,
//         checkListItems,
//         setDerivedCheckListItemValue
//     } = useContext(ScenarioContext)
//     const [depIDs, setDepIDs] = useState(children.map(child => child.id))
//     const [depIDsValues, setDepIDsValues] = useState(getCheckListIDValues(depIDs))
//     useEffect(
//         () => {
//             const newVals = getCheckListIDValues(depIDs)
//             const oldVals = depIDsValues
//             if (!arraysAreEqual(newVals, oldVals)) {
//                 setDepIDsValues(newVals)
//             }
//         },
//         [checkListItems, depIDs]
//     )
//     // set the derived value when something changes
//     useEffect(
//         () => {setDerivedCheckListItemValue(id, checkedWhen, depIDs)},
//         [depIDsValues]
//     )
//     return (
//         <>
//             {children.map(child =>
//                 <IntvFormItem item={child} />
//             )}
//         </>
//     )
// }
// export const SelectOne = ({ id, label, options }) => {
//     const {
//         getCheckListIDValues,
//         checkListItems,
//         isChecked,
//         setChecked,
//         setDerivedCheckListItemValue
//     } = useContext(ScenarioContext)
//     const getFirstCheckedID = (ids) => ids.find((id) => isChecked(id))
//     const [IDs, setIDs] = useState(options.map(child => child.id))
//     // const [depIDsValues, setDepIDsValues] = useState(getCheckListIDValues(depIDs))
//     // const [selected, setSelected] = useState(getFirstCheckedID(IDs))
//     // set the derived value on initial render
//     // useEffect(
//     //     () => {
//     //         // setDerivedCheckListItemValue(id, "some", depIDs)
//     //         const newDepIDsValues = getCheckListIDValues(depIDs)
//     //         if (!arraysAreEqual(newDepIDsValues, depIDsValues)) {
//     //             // console.log(newDepIDsValues, depIDsValues)
//     //             setDepIDsValues(newDepIDsValues)
//     //         }
//     //     },
//     //     [checkListItems, depIDs]
//     // )
//     // // set the derived value when something changes
//     // useEffect(
//     //     () => { setDerivedCheckListItemValue(id, "some", depIDs) },
//     //     [depIDsValues]
//     // )
//     const reset = (event) => {
//         console.log("clearing fieldset")
//         IDs.forEach((opt) => setChecked(opt, false))
//         setChecked(id, false)
//     }
//     const changeHandler = (event) => {
//         console.log("in change handler")
//         const currSelectedID = event.target.value
//         console.log(currSelectedID)
//         const notSelected = IDs.filter(nsID => nsID !== currSelectedID)
//         notSelected.forEach(nsID => setChecked(nsID, false))
//         setChecked(currSelectedID, true)
//         setChecked(id, true)
//         // setSelected(currSelectedID)
//         // if ("" !== selected) {
//         //     setChecked(selected, true)
//         // }
//     }
//     return (
//         <li>
//             <CheckmarkIcon checked={isChecked(id)} />
//             <i>{label}</i><br/>
//             {options.map((child) => (
//                 <label>
//                     <input
//                         type="radio"
//                         name={`${id}-options`}
//                         value={child.id}
//                         checked={isChecked(child.id)}
//                         onChange={changeHandler}
//                     />
//                     &nbsp; {child.label} &nbsp;
//                 </label>
//             ))}
//             <Button color="primary" size="sm" outline={true} onClick={reset}>Clear</Button>
//             {/* <ul>
//                 <li>
//                     <select
//                         id={id}
//                         onChange={changeHandler}
//                         className="form-control"
//                     >
//                         <option value="">----</option>
//                         {children.map(child => (
//                             <option key={child.id} value={child.id} selected={isChecked(child.id)}>{child.label}</option>
//                         ))}
//                     </select>
//                 </li>
//             </ul> */}
//         </li>
//     )
// }
// export const SelectOneOrMore = ({id, label, checkedWhen = "some", options}) => {
//     const {
//         checkListItems,
//         getCheckListIDValues,
//         isChecked,
//         setDerivedCheckListItemValue,
//         toggleAnswer
//     } = useContext(ScenarioContext)
//     const [optIDs, setOptIDs] = useState([])
//     // options.map(opt => opt.id))
//     const [optValues, setOptValues] = useState(getCheckListIDValues(optIDs))
//     const handleClick = (item) => {
//         toggleAnswer(item)
//     }
//     useEffect(() => {
//         setOptIDs(options.map(opt => opt.id))
//     }, [options])
//     useEffect(
//         () => {
//             // setDerivedCheckListItemValue(id, checkedWhen, depIDs)
//             const newVals = getCheckListIDValues(optIDs)
//             const oldVals = optValues
//             if (!arraysAreEqual(newVals, oldVals)) {
//                 setOptValues(newVals)
//             }
//         },
//         [checkListItems]
//     )
//     // set the derived value when something changes
//     useEffect(
//         () => {
//             // console.log(`SelectOneOrMore() id: ${id} checkedWhen: ${checkedWhen} depIDs: ${depIDs} depIDsValues: ${depIDsValues}`)
//             setDerivedCheckListItemValue(id, checkedWhen, optIDs)
//         },
//         [optValues]
//     )
//     return (
//         <li>
//             {/* {`SelectOneOrMore() id: ${id} checkedWhen: ${checkedWhen} depIDs: ${depIDs} depIDsValues: ${depIDsValues}`} */}
//             <CheckmarkIcon checked={isChecked(id)} />
//             <i>{label}</i>
//             <ul>
//                 {options.map((opt) =>
//                     <li key={opt.id}>
//                         <FormCheckBox id={opt.id} label={opt.label} clickHandler={() => handleClick(opt)} />
//                         {/* <IntvFormItem item={child.type === "nested-form" ? child : Object.assign(child, {type: "checkbox"})} /> */}
//                     </li>
//                 )}
//             </ul>
//         </li>
//     )
// }
// export const IntvFormItem = ({ item, addIDs = null, removeIDs = null, recomputeParent = null }) => {
//     const { toggleChecked, someChecked } = useContext(ScenarioContext)
//     console.log(item)
//     switch (item.type) {
//         case "derived-value":
//             return (
//                 <DerivedValue
//                     id={item.id}
//                     checkedWhen={item.checkedWhen}
//                     children={item.children}
//                 />
//             )
//         case "checkbox":
//             return (
//                 <FormCheckBox
//                     id={item.id}
//                     label={item.label}
//                     clickHandler={toggleChecked}
//                 />
//             )
//         case "nested-form":
//             return (
//                 // <li>
//                     <NestedForm
//                         id={item.id}
//                         label={item.label}
//                         show={item.show}
//                         checkedWhen={item.checkedWhen || "some"}
//                         items={item.options}
//                         addIDs={addIDs}
//                         removeIDs={removeIDs}
//                         recomputeParent={recomputeParent}
//                     />
//                 //  </li>
//             )
//         case "prompt":
//             switch (item.selectionType) {
//                 case "one":
//                     return (
//                         // <li>
//                             <SelectOne
//                                 id={item.id}
//                                 label={item.label}
//                                 options={item.options}
//                             />
//                         // </li>
//                     )
//                     break
//                 case "one-or-more":
//                     return (
//                         // <li>
//                             <SelectOneOrMore
//                                 id={item.id}
//                                 label={item.label}
//                                 checkedWhen={item.checkedWhen}
//                                 options={item.options}
//                             />
//                         // </li>
//                     )
//                     break
//                 default:
//                     return (<li><i>{item.label}</i></li>)
//             }
//         default:
//             return (<p>placeholder for unhandled item type</p>)
//     }
// }
// export const IntvFormOrig = ({ data }) => {

/***/ }),

/***/ 80337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39529);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31235);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77122);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95558);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48913);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97794);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27383);
/* harmony import */ var _PromptList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26112);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/forms/IntvForm.js";














const FORM_MODES = Object.freeze({
  DISP_NONE: 1,
  DISP_DIST_PROMPTS: 2,
  DISP_PROMPTS: 3
});
const INIT_RADIO_STATE = "";
const INIT_CHECKBOX_STATE = []; // const INIT_PROMPT_STATES = [INIT_RADIO_STATE, INIT_CHECKBOX_STATE]
// const arraysAreEqual = (arr1, arr2) => {
//     let retVal = true
//     if (arr1.length !== arr2.length) {
//         retVal = false
//     } else {
//         arr1.forEach((val, index) => {
//             if (arr2[index] !== val) {
//                 retVal = false
//             }
//         })
//     }
//     return retVal
// }
// const getPromptIDs = (children) => {
//     const prompts = children.filter(child => child.type === TYPES.PROMPT)
//     const promptIDs = prompts.map(child => child.id)
//     return promptIDs
// }

const PromptsPlaceholder = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    children: "There are no details which need to be recorded for this intervention."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, undefined);
}; // const ConfirmInterventionButton = ({clickHandler, enabled}) => {
//     return (
//         <Button
//             size="sm"
//             color="primary"
//             disabled={!enabled}
//             onClick={clickHandler}
//             className="confirm-intv"
//         >
//             Confirm Intervention was performed
//         </Button>
//     )
// }


const IntvForm = ({
  intvID
}) => {
  const {
    currPhase,
    currSubPhase,
    // evalIDExpression,
    getIntvVariantHistory,
    getTimestamp,
    logIntv,
    scenario,
    setCurrIntv,
    setCurrIntvCat,
    // setPatientStatusTab,
    setShowIntvSelection // setSystemsTab,

  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_8__.useScenario)();
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const [formMode, setFormMode] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(FORM_MODES.DISP_NONE);
  const [intvVariant, setIntvVariant] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const [distPromptState, setDistPromptState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const [promptState, setPromptState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null); // const [displaySubmit, setDisplaySubmit] = useState(false)

  const submitDistPrompts = event => {
    const jsonFmt = (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_7__.intvVariant2JSON)(distPromptState);
    setIntvVariant(jsonFmt);
  };

  const submitPrompts = event => {
    setFormMode(FORM_MODES.DISP_NONE);
    logIntv({
      interventionID: intvID,
      type: "intervention",
      intvVariant: intvVariant,
      timestamp: getTimestamp(),
      answers: promptState,
      performedCorrectly: false,
      // FIXME: need interventionAnswers to implement
      system: form.system || null,
      phase: currPhase,
      subPhase: currSubPhase
    });
    setCurrIntv(null);
    setCurrIntvCat("");
    setShowIntvSelection(true);
  };

  const isSelected = (id, value, stateVar) => {
    // return whether stored value is same (if string) of if it's a list, whether value is in list
    if (id in stateVar) {
      return typeof stateVar[id] === "string" ? value === stateVar[id] : stateVar[id].includes(value);
    } // this should probably be an error


    return false;
  };

  const setSelected = (id, value, checked, stateVar, stateSetter) => {
    if (id in stateVar) {
      // string type == radio, array == checkbox
      const isStr = typeof stateVar[id] == "string";

      if (isStr) {
        if (!checked) {
          // toggle off value
          value = "";
        }

        stateSetter(prevState => Object.assign({}, prevState, {
          [id]: value
        }));
      } else {
        let currVals = [...stateVar[id]];

        if (checked) {
          currVals.push(value);
        } else {
          currVals = currVals.filter(optID => optID !== value);
        }

        stateSetter(prevState => Object.assign({}, prevState, {
          [id]: currVals
        }));
      }
    } else {
      console.log(`${id} not found in forms state`);
    }
  };

  const distPromptOptionIsSelected = (id, value) => isSelected(id, value, distPromptState);

  const promptOptionIsSelected = (id, value) => isSelected(id, value, promptState);

  const setDistPromptOptionSelected = (id, value, checked) => setSelected(id, value, checked, distPromptState, setDistPromptState);

  const setPromptOptionSelected = (id, value, checked) => setSelected(id, value, checked, promptState, setPromptState);

  const notDefaultValue = val => {
    let retVal = false;

    if (typeof val === "string" && "" !== val) {
      retVal = true;
    } else if (typeof val !== "string" && val.length > 0) {
      retVal = true;
    }

    return retVal;
  };

  const formComplete = formState => Object.values(formState).every(notDefaultValue);

  const distPromptFormComplete = () => formComplete(distPromptState);

  const promptFormComplete = () => formComplete(promptState); // const confirmIntvHandler = (event) => {
  //     setIntv(id, label, system, true)
  //     setCurrIntv(null)
  //     setShowIntvSelection(true)
  //     if (!!system) {
  //         setPatientStatusTab("interventionsStatus")
  //         setSystemsTab(system)
  //     }
  // }
  // const computePrompts2Display = () => {
  //     // const toDisplay = []
  //     return form.prompts.map(e => e.id)
  //     // prompts.forEach(prompt => {
  //     //     if (undefined === prompt.showConstraints) {
  //     //         toDisplay.push(prompt.id)
  //     //     } else if (evalIDExpression(prompt.showConstraints)) {
  //     //         toDisplay.push(prompt.id)
  //     //     }
  //     // })
  //     // return toDisplay
  // }


  const setInitialState = prompts => {
    const tmp = {};
    prompts.forEach(p => {
      if (p.selectionType === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_6__.SELECTION_TYPES.ONE) {
        tmp[p.id] = INIT_RADIO_STATE;
      } else if (p.selectionType === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_6__.SELECTION_TYPES.OOM) {
        tmp[p.id] = INIT_CHECKBOX_STATE;
      }
    });
    return tmp;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)( // should only run on initial display of form
  () => {
    if (!form) {
      const frm = scenario.getInterventionForm(intvID);
      setForm(frm);
      setDistPromptState(setInitialState(frm.distPrompts));
      setPromptState(setInitialState(frm.prompts));

      if (frm.distPrompts.length > 0) {
        setFormMode(FORM_MODES.DISP_DIST_PROMPTS);
      } else {
        setFormMode(FORM_MODES.DISP_PROMPTS);
        setIntvVariant(JSON.stringify({}));
      }
    }
  }, [intvID, form, scenario]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!!intvVariant) {
      const hist = getIntvVariantHistory(intvID, intvVariant);

      if (hist.length > 0) {
        console.log("intvVariant History", hist);
        const lastVariantLogged = hist.slice(-1)[0];
        console.log("most recent", lastVariantLogged);
        setPromptState(lastVariantLogged.answers);
      }

      setFormMode(FORM_MODES.DISP_PROMPTS);
    }
  }, [intvVariant]); // useEffect(
  //     () => {
  //         const toDisplayIDs = computePrompts2Display()
  //         if (toDisplayIDs !== displayedPromptIDs) {
  //             setDisplayedPromptIDs(toDisplayIDs)
  //             const toDisplay = toDisplayIDs.map(tdID => getPromptAndOptions(scenario, tdID))
  //             setExpandedPrompts(toDisplay)
  //         }
  //     },
  //     [checkListItems, prompts]
  // )

  if (!form) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      children: "processing...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Panel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: form.abbrLabel,
    centerTitle: true,
    collapsable: false,
    scrollBody: true,
    children: [formMode === FORM_MODES.DISP_DIST_PROMPTS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_PromptList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        prompts: form.distPrompts,
        isSelected: distPromptOptionIsSelected,
        setSelected: setDistPromptOptionSelected
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        size: "sm",
        color: "primary",
        disabled: !distPromptFormComplete(),
        onClick: submitDistPrompts,
        children: "Continue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }, undefined)]
    }, void 0, true), formMode === FORM_MODES.DISP_PROMPTS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [form.prompts.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_PromptList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        prompts: form.prompts,
        isSelected: promptOptionIsSelected,
        setSelected: setPromptOptionSelected
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(PromptsPlaceholder, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 19
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        size: "sm",
        color: "primary",
        disabled: !promptFormComplete(),
        onClick: submitPrompts,
        children: "Continue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }, undefined)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 9
  }, undefined); // {
  //     displaySubmit &&
  //         <
  //         ConfirmInterventionButton
  //     clickHandler = {
  //         confirmIntvHandler
  //     }
  //     enabled = {
  //         form.prompts.length === 0
  //     }
  //     />
  // }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntvForm);

/***/ }),

/***/ 45087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95558);
/* harmony import */ var _CheckBoxGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74073);
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7063);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/forms/Prompt.js";






const Prompt = ({
  id,
  label,
  abbrLabel,
  selectionType,
  answers,
  isSelected,
  setSelected
}) => {
  const getLabel = () => !!abbrLabel ? abbrLabel : label;

  const getPrompt = () => {
    switch (selectionType) {
      case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.OOM:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_CheckBoxGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: id,
          options: answers,
          isSelected: isSelected,
          setSelected: setSelected
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined);

      default:
        // ST.ONE
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_RadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          id: id,
          options: answers,
          isSelected: isSelected,
          setSelected: setSelected
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
      className: "prompt-label",
      children: getLabel()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), getPrompt()]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prompt);

/***/ }),

/***/ 26112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45087);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/forms/PromptList.js";




const PromptList = ({
  prompts,
  isSelected,
  setSelected
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
    className: "prompt-list",
    children: prompts.map(prompt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Prompt__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, prompt, {
        isSelected: isSelected,
        setSelected: setSelected
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, undefined)
    }, prompt.id, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromptList);

/***/ }),

/***/ 7063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77122);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/forms/RadioGroup.js";




const RadioGroup = ({
  id,
  options,
  isSelected,
  setSelected
}) => {
  const getLabel = option => !!option.abbrLabel ? option.abbrLabel : option.label;

  const changeHandler = (event, option) => {
    const {
      name,
      value,
      checked
    } = event.target; // console.log(`name: ${name}, value ${value} checked: ${checked}`)

    setSelected(name, value, checked);
  };

  const clearHandler = () => {
    // console.log(`clearHandler(${id})`)
    setSelected(id, "", true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: [options.map(opt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "prompt-option",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "radio",
          className: "prompt-radio-btn",
          name: id,
          value: opt.id,
          checked: isSelected(id, opt.id),
          onChange: event => changeHandler(event, opt)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, undefined), getLabel(opt)]
      }, opt.id, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: "primary",
        size: "sm",
        outline: true,
        onClick: clearHandler,
        className: "clear-radio-btn",
        children: "Clear"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);

/***/ }),

/***/ 51228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBoxGroup": () => (/* reexport safe */ _CheckBoxGroup__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "FormCheckBox": () => (/* reexport safe */ _FormCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "IntvForm": () => (/* reexport safe */ _IntvForm__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Prompt": () => (/* reexport safe */ _Prompt__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PromptList": () => (/* reexport safe */ _PromptList__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "RadioGroup": () => (/* reexport safe */ _RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _CheckBoxGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74073);
/* harmony import */ var _FormCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56586);
/* harmony import */ var _IntvForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80337);
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45087);
/* harmony import */ var _PromptList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26112);
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7063);

 // export {default} from "./FormUtils"






/***/ }),

/***/ 44724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/CallOutIcon.js";




const CallOutIcon = ({
  assessment
}) => {
  const {
    isChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioContext);
  return isChecked(assessment.id) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: "callout-icon material-icons-outlined",
    style: {
      color: 'grey'
    },
    children: "message"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: "callout-icon material-icons-outlined",
    children: "message"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallOutIcon);

/***/ }),

/***/ 50146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/CheckBoxIcon.js";



const CheckBoxIcon = ({
  checked: _checked = false
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "checkbox-icon material-icons-outlined",
    children: _checked ? "check_box" : "check_box_outline_blank"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBoxIcon);

/***/ }),

/***/ 5456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/CheckmarkIcon.js";




const CheckmarkIcon = ({
  checked
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("material-icons-outlined", {
      "invisible": !checked
    }),
    children: "check"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckmarkIcon);

/***/ }),

/***/ 38074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/ChevronIcon.js";



const ChevronIcon = ({
  expand: _expand = false
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "chevron-icon material-icons-outlined",
    children: _expand ? "arrow_drop_down  " : "arrow_right"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronIcon);

/***/ }),

/***/ 64193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/DoneIcon.js";




const DoneIcon = ({
  checked: _checked = false
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("checkbox-icon", "material-icons-outlined", {
      "invisible": !_checked
    }),
    children: "done_all"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoneIcon);

/***/ }),

/***/ 34395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/FormIcon.js";


const FormIcon = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
    className: "bi-card-checklist"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormIcon);

/***/ }),

/***/ 12305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/TimerIcon.js";


const TimerIcon = ({
  running
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "material-icons-outlined timer-icon",
    children: running ? "timer" : "timer_off"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimerIcon);

/***/ }),

/***/ 87795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/icons/UserIcon.js";



const UserIcon = ({
  dark: _dark = true
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
    className: "bi-person-circle",
    style: {
      fontSize: "1.5rem",
      color: _dark ? "black" : "white"
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIcon);

/***/ }),

/***/ 284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallOutIcon": () => (/* reexport safe */ _CallOutIcon__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CheckBoxIcon": () => (/* reexport safe */ _CheckBoxIcon__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "CheckmarkIcon": () => (/* reexport safe */ _CheckmarkIcon__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ChevronIcon": () => (/* reexport safe */ _ChevronIcon__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "DoneIcon": () => (/* reexport safe */ _DoneIcon__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "FormIcon": () => (/* reexport safe */ _FormIcon__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "TimerIcon": () => (/* reexport safe */ _TimerIcon__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "UserIcon": () => (/* reexport safe */ _UserIcon__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _CallOutIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44724);
/* harmony import */ var _CheckBoxIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50146);
/* harmony import */ var _CheckmarkIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5456);
/* harmony import */ var _ChevronIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38074);
/* harmony import */ var _DoneIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64193);
/* harmony import */ var _FormIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34395);
/* harmony import */ var _TimerIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12305);
/* harmony import */ var _UserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87795);









/***/ }),

/***/ 64060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentFindings": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_21__.AssessmentFindings),
/* harmony export */   "CallOutIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.CallOutIcon),
/* harmony export */   "CallOutText": () => (/* reexport safe */ _CallOutText__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CheckBox": () => (/* reexport safe */ _CheckBox__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "CheckBoxGroup": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_16__.CheckBoxGroup),
/* harmony export */   "CheckBoxIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.CheckBoxIcon),
/* harmony export */   "CheckList": () => (/* reexport safe */ _CheckList__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "CheckListItem": () => (/* reexport safe */ _CheckListItem__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "CheckmarkIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.CheckmarkIcon),
/* harmony export */   "ChevronIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.ChevronIcon),
/* harmony export */   "DoneIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.DoneIcon),
/* harmony export */   "FindingsButton": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_20__.FindingsButton),
/* harmony export */   "FindingsModal": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_19__.FindingsModal),
/* harmony export */   "FormCheckBox": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_16__.FormCheckBox),
/* harmony export */   "FormIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.FormIcon),
/* harmony export */   "InterventionForm": () => (/* reexport safe */ _InterventionForm__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "InterventionsList": () => (/* reexport safe */ _InterventionsList__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "InterventionsPerformed": () => (/* reexport safe */ _InterventionsPerformed__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "InterventionsStatus": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_21__.InterventionsStatus),
/* harmony export */   "InterventionsTab": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_21__.InterventionsTab),
/* harmony export */   "IntvForm": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_16__.IntvForm),
/* harmony export */   "MDBContainer": () => (/* reexport safe */ _MDBContainer__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "MDBModal": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_19__.MDBModal),
/* harmony export */   "MDBNavBar": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_20__.MDBNavBar),
/* harmony export */   "OPQRST": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_21__.OPQRST),
/* harmony export */   "Panel": () => (/* reexport safe */ _Panel__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PatientStatus": () => (/* reexport safe */ _PatientStatus__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "PhaseCheckList": () => (/* reexport safe */ _PhaseCheckList__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "PhaseLayout": () => (/* reexport safe */ _layouts__WEBPACK_IMPORTED_MODULE_17__.PhaseLayout),
/* harmony export */   "PhaseNav": () => (/* reexport safe */ _PhaseNav__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "PhaseNavPane": () => (/* reexport safe */ _PhaseNavPane__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "PreferencesForm": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_19__.PreferencesForm),
/* harmony export */   "Prompt": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_16__.Prompt),
/* harmony export */   "PromptList": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_16__.PromptList),
/* harmony export */   "RadioGroup": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_16__.RadioGroup),
/* harmony export */   "RevealTable": () => (/* reexport safe */ _RevealTable__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "RevealTableRow": () => (/* reexport safe */ _RevealTableRow__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "SampleTab": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_21__.SampleTab),
/* harmony export */   "SaveScenarioButton": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_20__.SaveScenarioButton),
/* harmony export */   "ScenarioCompleteModal": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_19__.ScenarioCompleteModal),
/* harmony export */   "ScenarioInfo": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_19__.ScenarioInfo),
/* harmony export */   "ScenarioInfoButton": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_20__.ScenarioInfoButton),
/* harmony export */   "ScenarioLayout": () => (/* reexport safe */ _layouts__WEBPACK_IMPORTED_MODULE_17__.ScenarioLayout),
/* harmony export */   "SectionLayout": () => (/* reexport safe */ _layouts__WEBPACK_IMPORTED_MODULE_17__.SectionLayout),
/* harmony export */   "SubPhaseNav": () => (/* reexport safe */ _SubPhaseNav__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "Timer": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_20__.Timer),
/* harmony export */   "TimerIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.TimerIcon),
/* harmony export */   "UnauthedLayout": () => (/* reexport safe */ _layouts__WEBPACK_IMPORTED_MODULE_17__.UnauthedLayout),
/* harmony export */   "UserDropDown": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_20__.UserDropDown),
/* harmony export */   "UserIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_18__.UserIcon),
/* harmony export */   "VitalsTab": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_21__.VitalsTab)
/* harmony export */ });
/* harmony import */ var _CallOutText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47026);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59654);
/* harmony import */ var _CheckList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56254);
/* harmony import */ var _CheckListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54844);
/* harmony import */ var _InterventionForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53908);
/* harmony import */ var _InterventionsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79984);
/* harmony import */ var _InterventionsPerformed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19701);
/* harmony import */ var _MDBContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25923);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27383);
/* harmony import */ var _PatientStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68289);
/* harmony import */ var _PhaseCheckList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98596);
/* harmony import */ var _PhaseNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79374);
/* harmony import */ var _PhaseNavPane__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3593);
/* harmony import */ var _RevealTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76370);
/* harmony import */ var _RevealTableRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37055);
/* harmony import */ var _SubPhaseNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90002);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51228);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9496);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(284);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(82517);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19017);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(70538);























/***/ }),

/***/ 75822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36719);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49966);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67465);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/layouts/PhaseLayout.js";



const PhaseLayout = ({
  top,
  bottom
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: true,
    className: "phase-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "checklist-row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        md: "12",
        className: "phase-col",
        children: top
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "patient-status-row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        md: "12",
        className: "patient-status-col",
        children: bottom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhaseLayout);

/***/ }),

/***/ 61937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36719);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49966);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7267);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97794);
/* harmony import */ var _contexts_PreferencesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69386);
/* harmony import */ var _routes_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69799);
/* harmony import */ var _navbar_MDBNavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76992);
/* harmony import */ var _navbar_FindingsButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83714);
/* harmony import */ var _navbar_SaveScenarioButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6858);
/* harmony import */ var _navbar_ScenarioInfoButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9576);
/* harmony import */ var _navbar_Timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57807);
/* harmony import */ var _modals_PreferencesForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37151);
/* harmony import */ var _modals_FindingsModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11119);
/* harmony import */ var _modals_ScenarioCompleteModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86971);
/* harmony import */ var _modals_ScenarioInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68779);
/* harmony import */ var _PhaseNavPane__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3593);
/* harmony import */ var _InterventionsList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79984);
/* harmony import */ var _forms_IntvForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80337);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/layouts/ScenarioLayout.js";

















 // import InterventionsPerformed from "../InterventionsPerformed"






const ScenarioLayout = () => {
  const {
    path
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useRouteMatch)();
  const {
    patientStatusDisplay,
    showPrefsForm,
    hidePrefsForm
  } = (0,_contexts_PreferencesContext__WEBPACK_IMPORTED_MODULE_4__.usePrefs)();
  const {
    currIntv,
    scenario,
    showFindings,
    dismissFindings
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__.useScenario)();
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  const rightNav = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_navbar_SaveScenarioButton__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_navbar_ScenarioInfoButton__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), "navbar" === patientStatusDisplay && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_navbar_FindingsButton__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_navbar_Timer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!!currIntv) {
      setForm(scenario.getInterventionForm(currIntv));
    } else {
      setForm(null);
    }
  }, [currIntv]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      fluid: true,
      className: "main",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: "wrapper-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("nav", {
          className: "col-md-2 phase-nav-pane",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_PhaseNavPane__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
          className: "col-md-10 main-region",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_navbar_MDBNavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: `SCENARIO: ${scenario.name}`,
            rightNav: rightNav,
            className: "dev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("main", {
            className: "row main-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
              className: "col-md-6 phase-col",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Switch, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
                  path: `${path}/:phaseID/:subPhaseID`,
                  component: _routes_Section__WEBPACK_IMPORTED_MODULE_5__["default"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
                  path: `${path}/:phaseID`,
                  component: _routes_Section__WEBPACK_IMPORTED_MODULE_5__["default"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
                  exact: true,
                  path: path,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
              className: "col-md-6 interventions-col",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_InterventionsList__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, undefined), !!currIntv && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_forms_IntvForm__WEBPACK_IMPORTED_MODULE_17__["default"], {
                intvID: currIntv
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 37
              }, undefined) //     id={form.id}
              //     label={form.label}
              //     system={form.system}
              //     prompts={form.prompts}
              // />
              ]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_modals_PreferencesForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
      show: showPrefsForm,
      dismiss: hidePrefsForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_modals_ScenarioInfo__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_modals_ScenarioCompleteModal__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_modals_FindingsModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      show: showFindings,
      dismiss: dismissFindings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScenarioLayout);

/***/ }),

/***/ 85601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36719);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49966);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67465);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97794);
/* harmony import */ var _forms_IntvForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80337);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/layouts/SectionLayout.js";








const SectionLayout = ({
  top,
  bottom
}) => {
  const {
    scenario,
    currIntv
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__.ScenarioContext);
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!!currIntv) {
      setForm(scenario.interventionForms[currIntv]);
    } else {
      setForm(null);
    }
  }, [currIntv]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fluid: true,
    className: "phase-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "checklist-row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        md: "12",
        className: "phase-left-col",
        children: top
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "patient-status-row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        md: "12",
        className: "patient-status-col",
        children: bottom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionLayout);

/***/ }),

/***/ 75985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_MDBNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76992);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/layouts/UnauthedLayout.js";





const UnauthedLayout = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_navbar_MDBNavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "MedDBriefer Authentication"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), props.children]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnauthedLayout);

/***/ }),

/***/ 9496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhaseLayout": () => (/* reexport safe */ _PhaseLayout__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ScenarioLayout": () => (/* reexport safe */ _ScenarioLayout__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SectionLayout": () => (/* reexport safe */ _SectionLayout__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "UnauthedLayout": () => (/* reexport safe */ _UnauthedLayout__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _PhaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75822);
/* harmony import */ var _ScenarioLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61937);
/* harmony import */ var _SectionLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85601);
/* harmony import */ var _UnauthedLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75985);
// export {default as CheckListRaterInfoLayout} from "./CheckListRaterInfoLayout"
// export {default as PhaseDetailsLayout} from "./PhaseDetailsLayout"





/***/ }),

/***/ 11119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var _MDBModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26226);
/* harmony import */ var _PatientStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68289);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/modals/FindingsModal.js";





const FindingsModal = () => {
  const {
    showFindings,
    dismissFindings
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MDBModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Patient Status",
    show: showFindings,
    dismiss: dismissFindings,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_PatientStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FindingsModal);

/***/ }),

/***/ 26226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19939);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74278);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3743);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/modals/MDBModal.js";




const MDBModal = props => {
  const {
    title,
    show,
    dismiss,
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: show,
    toggle: dismiss,
    size: "xl",
    backdrop: "static",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      toggle: dismiss,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "h2",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDBModal);

/***/ }),

/***/ 37151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77122);
/* harmony import */ var _contexts_PreferencesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69386);
/* harmony import */ var _MDBModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26226);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/modals/PreferencesForm.js";






const PreferencesForm = ({
  show,
  dismiss
}) => {
  const {
    patientStatusDisplay,
    setPref
  } = (0,_contexts_PreferencesContext__WEBPACK_IMPORTED_MODULE_1__.usePrefs)();

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setPref(name, value);
  };

  const radioChangeHandler = event => {
    const name = event.currentTarget.name;
    const val = event.currentTarget.value;
    setPref(name, val);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MDBModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "User Preferences",
    show: show,
    dismiss: dismiss,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: "Patient Status Display"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          children: ["\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            type: "radio",
            name: "patientStatusDisplay",
            value: "navbar",
            checked: patientStatusDisplay === "navbar",
            onChange: radioChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), "\xA0 Top Nav Bar \xA0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          children: ["\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            type: "radio",
            name: "patientStatusDisplay",
            value: "leftColumn",
            checked: patientStatusDisplay === "leftColumn",
            onChange: radioChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined), "\xA0 Left Column \xA0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "button",
        className: "btn btn-success",
        onClick: dismiss,
        children: "Dismiss"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreferencesForm);

/***/ }),

/***/ 86971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77122);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97794);
/* harmony import */ var _MDBModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26226);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/modals/ScenarioCompleteModal.js";






 // import { formatAsMinSecs } from "../utils"



const ScenarioCompleteModal = () => {
  const [doRedirect, setDoRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    showScenarioComplete,
    setShowScenarioComplete,
    saveScenarioToLog
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__.useScenario)();

  const handleSubmit = event => {
    event.preventDefault();
    const {
      label
    } = event.target.elements;
    saveScenarioToLog(label.value);
    setShowScenarioComplete(false);
    setDoRedirect(true);
  };

  const handleCancel = () => setShowScenarioComplete(false);

  if (doRedirect) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
      to: "/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MDBModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Scenario Complete",
    show: showScenarioComplete,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "col-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: "text-danger",
            children: "WARNING: Submitting the scenario won't allow you to work on it any more."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Click 'cancel' if you wish to working on this scenario."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
            htmlFor: "label",
            className: "col-sm-2 col-form-label",
            children: "Label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            className: "col-sm-10 form-control",
            type: "text",
            id: "label",
            defaultValue: "",
            placeholder: "enter video name (if applicable)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "col-12",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              type: "submit",
              color: "danger",
              size: "lg",
              children: " Submit Scenario Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              color: "success",
              size: "lg",
              onClick: handleCancel,
              children: " Cancel "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScenarioCompleteModal);

/***/ }),

/***/ 68779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91412);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77122);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97794);
/* harmony import */ var _MDBModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26226);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83411);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/modals/ScenarioInfo.js";









const ScenarioInfo = () => {
  const {
    scenario,
    timers,
    started,
    paused,
    setStarted,
    setPaused
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__.ScenarioContext);
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!started || paused);

  const startScenario = () => setStarted(true);

  const resumeScenario = () => setPaused(false); // Modal's isOpen needs to be a simple bool prop, not a method
  // so we need a a simple bool which is a result of an expression
  // whenever either of these change


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setShowModal(!started || paused);
  }, [started, paused]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MDBModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Scenario Info",
    show: showModal,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "col-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Instructor Information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: scenario.info.instructorInformation
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "col-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Patient Information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("b", {
                children: "Moulage:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 33
              }, undefined), " ", scenario.info.patientInformation.moulage]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("b", {
                children: "Position:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, undefined), " ", scenario.info.patientInformation.position]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("b", {
                children: "Actions:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, undefined), " ", scenario.info.patientInformation.actions]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "col-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Dispatch Information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: scenario.info.dispatchInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "col-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Scene Assessment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: scenario.info.sceneAssessment
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "row justify-content-md-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
          size: "sm",
          striped: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Timer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Duration"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Time Remaining"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Expired"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
            children: timers.map(timer => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              className: "h4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: timer.id
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.formatAsMinSecs)(timer.duration)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.formatAsMinSecs)(timer.timeRemaining)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: `${timer.expired}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 37
              }, undefined)]
            }, timer.id, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "row justify-content-md-center",
        children: !started ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "success",
          size: "lg",
          onClick: startScenario,
          children: " Start Scenario"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "success",
          size: "lg",
          onClick: resumeScenario,
          children: " Resume Scenario "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 27
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScenarioInfo);

/***/ }),

/***/ 82517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindingsModal": () => (/* reexport safe */ _FindingsModal__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "MDBModal": () => (/* reexport safe */ _MDBModal__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "PreferencesForm": () => (/* reexport safe */ _PreferencesForm__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ScenarioCompleteModal": () => (/* reexport safe */ _ScenarioCompleteModal__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ScenarioInfo": () => (/* reexport safe */ _ScenarioInfo__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _FindingsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11119);
/* harmony import */ var _MDBModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26226);
/* harmony import */ var _PreferencesForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37151);
/* harmony import */ var _ScenarioCompleteModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86971);
/* harmony import */ var _ScenarioInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68779);






/***/ }),

/***/ 83714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77122);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/navbar/FindingsButton.js";





const FindingsButton = () => {
  const {
    displayFindings
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    outline: true,
    size: "sm",
    color: "primary",
    onClick: displayFindings,
    children: "Patient Status"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FindingsButton);

/***/ }),

/***/ 76992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8259);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39876);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2441);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47933);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36011);
/* harmony import */ var _UserDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98901);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/navbar/MDBNavBar.js";







const MDBNavBar = ({
  title,
  leftNav: _leftNav = null,
  rightNav: _rightNav = null
}) => {
  const {
    isAuthenticated
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.AuthContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "brand-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
        to: "/",
        className: "brand",
        children: "MedDBriefer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), !!_leftNav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: _leftNav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }, undefined), !!title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "mr-auto mdb-title",
      children: ["  ", title, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: !!_rightNav && _rightNav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_UserDropDown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        show: isAuthenticated
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDBNavBar);

/***/ }),

/***/ 6858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77122);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/navbar/SaveScenarioButton.js";





const SaveScenarioButton = () => {
  const {
    setShowScenarioComplete
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    color: "danger",
    onClick: () => setShowScenarioComplete(true),
    className: "navbar-btn",
    children: "Save"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveScenarioButton);

/***/ }),

/***/ 9576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77122);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/navbar/ScenarioInfoButton.js";





const ScenarioInfoButton = () => {
  const {
    setPaused
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    color: "primary",
    onClick: () => setPaused(true),
    className: "navbar-btn",
    children: "Info"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScenarioInfoButton);

/***/ }),

/***/ 57807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39876);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _icons_TimerIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12305);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83411);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/navbar/Timer.js";








const Timer = () => {
  const {
    started,
    paused,
    timers
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.useScenario)();
  const scenTimer = timers.find(timer => timer.id === "scenario");

  const getColor = () => {
    if (scenTimer.expired) {
      return "text-danger";
    }

    if (started && !paused) {
      return "text-success";
    }

    if (paused || !started) {
      return "";
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("time-remaining", getColor()),
      children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatAsMinSecs)(scenTimer.timeRemaining)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);

/***/ }),

/***/ 98901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21711);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97772);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52845);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72664);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36011);
/* harmony import */ var _contexts_PreferencesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69386);
/* harmony import */ var _icons_UserIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87795);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/navbar/UserDropDown.js";









const UserDropDown = ({
  show
}) => {
  const {
    userName,
    signOutUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);
  const {
    displayPrefsForm
  } = (0,_contexts_PreferencesContext__WEBPACK_IMPORTED_MODULE_4__.usePrefs)();
  const [showUserMenu, setShowUserMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  if (!show) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    nav: true,
    inNavbar: true,
    isOpen: showUserMenu,
    direction: "down",
    toggle: toggleUserMenu,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      nav: true,
      caret: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icons_UserIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        dark: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        disabled: true,
        children: userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        divider: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: displayPrefsForm,
        children: "Preferences"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        divider: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: signOutUser,
        children: "Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDropDown);

/***/ }),

/***/ 19017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindingsButton": () => (/* reexport safe */ _FindingsButton__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "MDBNavBar": () => (/* reexport safe */ _MDBNavBar__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SaveScenarioButton": () => (/* reexport safe */ _SaveScenarioButton__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ScenarioInfoButton": () => (/* reexport safe */ _ScenarioInfoButton__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Timer": () => (/* reexport safe */ _Timer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "UserDropDown": () => (/* reexport safe */ _UserDropDown__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _FindingsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83714);
/* harmony import */ var _MDBNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76992);
/* harmony import */ var _SaveScenarioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6858);
/* harmony import */ var _ScenarioInfoButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9576);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57807);
/* harmony import */ var _UserDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98901);







/***/ }),

/***/ 49408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91412);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _CallOutText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47026);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/tabs/AssessmentFindings.js";






const AssessmentFindingsTabContent = () => {
  const {
    checkListItems,
    isChecked,
    scenario
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioContext);
  const checkedAssessmentSteps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return scenario.calloutLabels.filter(callout => isChecked(callout.id));
  }, [checkListItems]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "sm",
    striped: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
          children: "Assessment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
          children: "Finding"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
      children: checkedAssessmentSteps.map(step => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
          children: step.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_CallOutText__WEBPACK_IMPORTED_MODULE_2__["default"], {
            step: step,
            displayAssessmentFindings: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, undefined)]
      }, step.id, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssessmentFindingsTabContent);

/***/ }),

/***/ 24613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43430);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77122);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91412);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2441);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21808);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33015);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51255);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7618);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97794);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95558);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/tabs/InterventionsStatus.js";






 // import RevealTable from "../RevealTable"




const CATEGORY = "intervention-status";

const InterventionsGroup = ({
  id,
  label,
  intvsPerformed: _intvsPerformed = []
}) => {
  const {
    checkListItems,
    logPatientStatusRequest
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_4__.useScenario)();

  const clickHandler = intvID => {
    // const intervention = checkListItems.find(rec => rec.id === intvID)
    // FIXME: intervention.systemStatus is currently unimplemented so
    // we're logging "unknown"
    logPatientStatusRequest(CATEGORY, intvID, "unknown");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
    children: _intvsPerformed.map(intv => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: intv.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: "unknown status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "success",
          size: "sm",
          className: "request-btn",
          onClick: () => clickHandler(intv.id),
          children: "Requested"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined)]
    }, `intv-performed-${intv.label}`, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

const SystemsTable = ({
  id,
  label,
  intvs
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "sm",
    striped: true,
    bordered: false,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
          children: "Intervention"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
          children: [label, " Status"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), intvs.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(InterventionsGroup, {
      id: id,
      label: label,
      intvsPerformed: intvs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

const InterventionsStatus = () => {
  const {
    scenario,
    checkListItems,
    systemsTab,
    setSystemsTab
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_4__.useScenario)();
  const [intvsPerformed, setIntvsPerformed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);

  const isActiveTab = tab => tab === systemsTab;

  const activateTab = tab => {
    if (systemsTab !== tab) setSystemsTab(tab);
  };

  const getSystemIntvsPerformed = () => {
    const recs = Object.values(checkListItems).filter(val => !!val).filter(rec => rec.type === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.MDB_TYPES.INTERV).filter(rec => !!rec.system);
    recs.sort((a, b) => a.timestamp - b.timestamp); // console.log(system, recs)

    return recs;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const intvs = getSystemIntvsPerformed();

    if (intvs !== intvsPerformed) {
      setIntvsPerformed(intvs);
    }
  }, [checkListItems]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
            active: isActiveTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.AW)
          }),
          onClick: () => activateTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.AW),
          children: "Airway"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
            active: isActiveTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BR)
          }),
          onClick: () => activateTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BR),
          children: "Breathing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
            active: isActiveTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BL)
          }),
          onClick: () => activateTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BL),
          children: "Bleeding"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
            active: isActiveTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.SH)
          }),
          onClick: () => activateTab(_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.SH),
          children: "Shock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      activeTab: systemsTab,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tabId: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.AW,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SystemsTable, {
          id: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.AW,
          label: "Airway",
          intvs: intvsPerformed.filter(rec => rec.system === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.AW)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tabId: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BR,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SystemsTable, {
          id: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BR,
          label: "Breathing",
          intvs: intvsPerformed.filter(rec => rec.system === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BR)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tabId: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BL,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SystemsTable, {
          id: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BL,
          label: "Bleeding",
          intvs: intvsPerformed.filter(rec => rec.system === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.BL)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tabId: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.SH,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SystemsTable, {
          id: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.SH,
          label: "Shock",
          intvs: intvsPerformed.filter(rec => rec.system === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS.SH)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
}; // <RevealTable
//     title="Interventions Status"
//     category="interventionStatus"
//     headings={["Intervention", "Status"]}
//     rows={rows}
// />


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsStatus);

/***/ }),

/***/ 75136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97794);
/* harmony import */ var _InterventionForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53908);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/tabs/InterventionsTab.js";








const InterventionsTabContent = () => {
  const {
    checkListItems,
    currentInterventionForm,
    isChecked,
    setCurrentInterventionForm,
    scenario
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_2__.ScenarioContext); // const options = useMemo(() => scenario.interventionFormsMenu, [scenario.interventionFormsMenu])
  // const [dropdownOpen, setDropdownOpen] = useState(false)
  // const toggleDropDown = () => setDropdownOpen(prevState => !prevState)
  // const handleInterventionFormSelection = (event) => setCurrentInterventionForm(event.target.id)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: !!currentInterventionForm && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_InterventionForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 43
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsTabContent);

/***/ }),

/***/ 2005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var _RevealTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76370);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/tabs/OPQRST.js";




const OPQRSTTabContent = () => {
  const {
    scenario
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();
  const opqrst = Object.entries(scenario.OPQRST).map(rec => {
    return {
      label: rec[0],
      value: [rec[1]]
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_RevealTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "OPQRST",
    category: "opqrst",
    headings: ["Type", "Value"],
    rows: opqrst
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OPQRSTTabContent);

/***/ }),

/***/ 1081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
/* harmony import */ var _RevealTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76370);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/tabs/SampleTab.js";




const SampleTabContent = () => {
  const {
    scenario
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_0__.useScenario)();
  const sample = Object.entries(scenario.SAMPLE).map(rec => {
    return {
      label: rec[0],
      value: [rec[1]]
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_RevealTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "SAMPLE",
    category: "sample",
    headings: ["Type", "Value"],
    rows: sample
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SampleTabContent);

/***/ }),

/***/ 75324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97794);
/* harmony import */ var _RevealTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76370);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/components/tabs/VitalsTab.js";







const VitalsTabContent = () => {
  const {
    currentVitals
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__.useScenario)();

  const calcVitalsRows = () => Object.entries(currentVitals).map(([key, val]) => ({
    label: key,
    value: val
  }));

  const [vitalsRows, setVitalsRows] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(calcVitalsRows());
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const newVal = calcVitalsRows();

    if (newVal !== vitalsRows) {
      setVitalsRows(newVal);
    }
  }, [currentVitals]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_RevealTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Vitals",
    category: "vitals",
    headings: ["Vital", "Current Value"],
    rows: vitalsRows
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VitalsTabContent);

/***/ }),

/***/ 70538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentFindings": () => (/* reexport safe */ _AssessmentFindings__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "InterventionsStatus": () => (/* reexport safe */ _InterventionsStatus__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "InterventionsTab": () => (/* reexport safe */ _InterventionsTab__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "OPQRST": () => (/* reexport safe */ _OPQRST__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "SampleTab": () => (/* reexport safe */ _SampleTab__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "VitalsTab": () => (/* reexport safe */ _VitalsTab__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _AssessmentFindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49408);
/* harmony import */ var _InterventionsStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24613);
/* harmony import */ var _InterventionsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75136);
/* harmony import */ var _OPQRST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2005);
/* harmony import */ var _SampleTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1081);
/* harmony import */ var _VitalsTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75324);







/***/ }),

/***/ 80789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserverContext": () => (/* binding */ ObserverContext),
/* harmony export */   "useObserverContext": () => (/* binding */ useObserverContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ObserverContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  classCode: undefined
});
const useObserverContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ObserverContext);

/***/ }),

/***/ 69386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesContext": () => (/* binding */ PreferencesContext),
/* harmony export */   "PreferencesProvider": () => (/* binding */ PreferencesProvider),
/* harmony export */   "usePrefs": () => (/* binding */ usePrefs)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36011);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/contexts/PreferencesContext.js";





const defaultPrefs = {
  patientStatusDisplay: "leftColumn"
};
const PreferencesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createContext({});
const PreferencesProvider = props => {
  const {
    isAuthenticated,
    getUserData,
    saveUserData,
    setUserPrefs
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);
  const [showPrefsForm, setShowPrefsForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [patientStatusDisplay, setPatientStatusDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultPrefs.patientStatusDisplay); // const [intvListStyle, setIntvListStyle] = useState(defaultPrefs.intvListStyle)
  // const [headToToeStyle, setHeadToToeStyle] = useState(defaultPrefs.headToToeStyle)

  const setPref = (name, value) => {
    switch (name) {
      case "patientStatusDisplay":
        setPatientStatusDisplay(value);
        break;
      // case "intvListStyle":
      //     setIntvListStyle(value)
      //     break
      // case "headToToeStyle":
      //     setHeadToToeStyle(value)
      //     break

      default:
        console.log(`not setting unknown pref ${name} to ${value}`);
    }
  };

  const displayPrefsForm = () => {
    // console.log("displayPrefsForm")
    setShowPrefsForm(true);
  };

  const hidePrefsForm = () => {
    // console.log("hidePrefsForm")
    setShowPrefsForm(false);
  }; // On logged-in useEffect
  // useEffect(() => {
  //     // Get user data and apply if logged in
  //     isAuthenticated &&
  //     getUserData()
  //         .then(res => {
  //             // console.log(res);
  //             setCurrentLayout(res.preferences.layout);
  //         })
  //         .catch(err => console.log(err));
  // }, [isAuthenticated]);
  // Pass preferences to auth for DB sync


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Preferences data to upload
    let data = {
      patientStatusDisplay
    }; // Update preferences and save if logged in

    setUserPrefs({
      data
    });
    isAuthenticated && saveUserData("preferences", data);
  }, [patientStatusDisplay]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PreferencesContext.Provider, {
    value: {
      // intvListStyle,
      // headToToeStyle,
      setPref,
      showPrefsForm,
      displayPrefsForm,
      hidePrefsForm,
      patientStatusDisplay
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, undefined);
};
const usePrefs = () => (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PreferencesContext);

/***/ }),

/***/ 97794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScenarioContext": () => (/* binding */ ScenarioContext),
/* harmony export */   "ScenarioProvider": () => (/* binding */ ScenarioProvider),
/* harmony export */   "useScenario": () => (/* binding */ useScenario)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43430);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77950);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85940);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5431);
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89526);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36011);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83411);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/contexts/ScenarioContext.js";












const ScenarioContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createContext();

const scenarioTimer = scenario => {
  return {
    id: 'scenario',
    duration: scenario.info.maxTime * 60,
    action: {
      type: "timeExpired"
    },
    payload: "time expired",
    timeRemaining: scenario.info.maxTime * 60,
    expired: false
  };
};

const getInitialVitals = scenario => {
  // console("in getInitVitals")
  const initVitals = {};
  Object.entries(scenario.vitalSigns).forEach(([vitalSign, values]) => {
    // console.log(vitalSign, values)
    initVitals[vitalSign] = values.initial;
  }); // console.log(initVitals)

  return initVitals;
}; // Actions begin


const timeExpired = payload => {
  // alert(payload);
  console.log("time expired");
};

const bar = () => {
  console.log("bar");
};

const ACTIONS = {
  "timeExpired": timeExpired,
  "bar": bar
}; // Actions end

const ScenarioProvider = ({
  scenario,
  defaultValues,
  children
}) => {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_8__.useFirebase)();
  const {
    currentUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_9__.AuthContext); // , getUserData, isAuthenticated, saveUserData;

  const [currentAssessmentFinding, setCurrentAssessmentFinding] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const [checkListItems, setCheckListItems] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(defaultValues.checkListItems);
  const [currentVitals, setCurrentVitals] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(getInitialVitals(scenario));
  const [vitalsRecomputed, setVitalsRecomputed] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(defaultValues.vitalsRecomputed);
  const [currPhase, setCurrPhase] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const [currSubPhase, setCurrSubPhase] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const [currIntvCat, setCurrIntvCat] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const [currIntv, setCurrIntv] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const [intvsPerformedCollapsed, setIntvsPerformedCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const [showScenarioComplete, setShowScenarioComplete] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [showFindings, setShowFindings] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [showIntvSelection, setShowIntvSelection] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [patientStatusRequests, setPatientStatusRequests] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const [patientStatusTab, setPatientStatusTab] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("vitals");
  const [systemsTab, setSystemsTab] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("airway");
  const [intvHistory, setIntvHistory] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [paused, setPaused] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [timestamp, setTimestamp] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);
  const [timers, setTimers] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([scenarioTimer(scenario)]);
  const [timerError, setTimerError] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const [actionsQueue, setActionsQueue] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({}); // expose accesor rather than timestamp, in effect making it a private variable

  const getTimestamp = () => timestamp;

  const clearTimerError = () => setTimerError(null);

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    const interval = setInterval(() => tick(), 1000); // cleanup interval

    return () => {
      clearInterval(interval);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (Object.keys(actionsQueue).length !== 0) {
      let currActionString = actionsQueue[0].type;
      let currActionPayload = actionsQueue[0].payload;
      let currAction = ACTIONS[currActionString];
      currAction(currActionPayload);
    }
  }, [actionsQueue]); // Save scenario state
  // useEffect(
  //     () => {
  //         // as both class components .setState() and functional components useState() setters
  //         // both actually queue the setting of state, as an performance optimization for when
  //         // there are individual requests for state changes made in a relatively short period
  //         // of time,  making use of a useEffect() with a dependency array of all state variables
  //         // we're interested in persisting to the db is a perfect place to capture when they
  //         // have actually been changed, and thus persist those changes.  since we're not hooked
  //         // up to the db yet, I'm merely console.log()ing that things have changed, and listing
  //         // what state we'll be persisting to the db.
  //         saveUserData(scenario.id, {
  //             currentAssessmentFinding,
  //             checkListItems,
  //             currentVitals,
  //             vitalsRecomputed
  //         });
  //     },
  //     [
  //         currentAssessmentFinding,
  //         checkListItems,
  //         currentVitals,
  //         vitalsRecomputed
  //     ]
  // )
  // Load and apply scenario state
  // useEffect(() => {
  //     // isAuthenticated &&
  //     getUserData()
  //         .then(res => {
  //             let state = res[scenario.id];
  //             // Set all states
  //             setCurrentAssessmentFinding(state.currentAssessmentFinding);
  //             setCheckListItems(state.checkListItems);
  //             setCurrentVitals(state.currentVitals);
  //             setVitalsRecomputed(state.vitalsRecomputed);
  //         })
  //         .catch(err => console.log(err));
  // }, []);

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    // FIXME: this is for devel purposes only
    console.log(checkListItems);
  }, [checkListItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    // FIXME: this is for devel purposes only
    console.log(patientStatusRequests);
  }, [patientStatusRequests]);

  const tick = () => {
    if (started && !paused) {
      setTimestamp(timestamp + 1); // Increase the timestamp by 1 if the timers have been started and are not paused

      const newTimers = timers.map(timer => {
        const newTimer = Object.assign(timer);

        if (!timer.expired) {
          if (timer.timeRemaining === 1) {
            newTimer.expired = true;

            if (newTimer.action != null) {
              // != instead of !== is intentional
              const newActionsQueue = actionsQueue.slice();
              newActionsQueue.push(newTimer.action);
              setActionsQueue(newActionsQueue);
            }
          }

          newTimer.timeRemaining--;
        }

        return newTimer;
      });
      setTimers(newTimers);
    }
  };

  const registerTimer = (id, duration, action = null, timeRemaining = null, expired = false) => {
    var _timeRemaining;

    timeRemaining = (_timeRemaining = timeRemaining) != null ? _timeRemaining : duration;
    const found = timers.find(timer => timer.id === id);

    if (found) {
      setTimerError(`ERROR: timer: "${id}" already registered`);
    } else {
      const newTimers = timers.slice();
      newTimers.push({
        id,
        duration,
        action,
        timeRemaining,
        expired
      });
      setTimers(newTimers);
    }
  };

  const cancelTimer = id => {
    const found = timers.find(timer => timer.id === id);

    if (found) {
      let newTimers = timers.filter(timer => timer.id !== id); // Returns an array with everything except the removed timer

      setTimers(newTimers);
    } else {
      setTimerError(`ERROR: timer: "${id}" not found`);
    }
  };

  const setCollapsedValue = (id, boolVal) => {
    setCollapsed(prevState => Object.assign({}, prevState, {
      [id]: boolVal
    }));
  };

  const toggleCollapsed = id => {
    setCollapsedValue(id, !getCollapsed(id));
  };

  const getCollapsed = id => {
    return collapsed[id];
  };

  const isChecked = id => {
    return !!checkListItems[id];
  };

  const setChecked = (id, boolVal) => {
    const newValue = boolVal ? getTimestamp() : false;
    setCheckListItems(prevState => Object.assign({}, prevState, {
      [id]: newValue
    }));
  };

  const toggleChecklistItem = ans => {
    const currVal = isChecked(ans.id);

    if (!currVal) {
      const data = Object.assign({}, ans, {
        timestamp: getTimestamp(),
        phase: currPhase,
        subPhase: currSubPhase
      });
      console.log("logging checkListItem", ans.id, data);
      setCheckListItems(prevState => Object.assign({}, prevState, {
        [ans.id]: data
      }));
    } else {
      console.log("logging checkListItem:", ans.id, false);
      setChecked(ans.id, false);
    }
  };

  const toggleAssessmentItem = ans => {
    const currVal = isChecked(ans.id);

    if (!currVal) {
      const data = Object.assign({}, ans, {
        timestamp: getTimestamp(),
        phase: currPhase,
        subPhase: currSubPhase,
        finding: scenario.assessmentFindings[ans.id]
      });
      console.log("logging assessmentItem", ans.id, data);
      setCheckListItems(prevState => Object.assign({}, prevState, {
        [ans.id]: data
      }));
    } else {
      console.log("logging assessmentItem:", ans.id, false);
      setChecked(ans.id, false);
    }
  };

  const toggleIntvAnswer = ans => {
    const currVal = isChecked(ans.id);

    if (!currVal) {
      const data = Object.assign({}, ans, {
        timestamp: getTimestamp(),
        intervention: currIntv,
        interventionCategory: currIntvCat,
        phase: currPhase,
        subPhase: currSubPhase
      });
      console.log("logging intvAnswer:", ans.id, data);
      setCheckListItems(prevState => Object.assign({}, prevState, {
        [ans.id]: data
      }));
    } else {
      console.log("logging intvAnswer", ans.id, false);
      setChecked(ans.id, false);
    }
  }; // const setIntv = (id, label, system, boolVal) => {
  //     const logData = {
  //         id: id,
  //         type: "intervention",
  //         label: label,
  //         system: system,
  //         timestamp: getTimestamp(),
  //         phase: currPhase,
  //         subPhase: currSubPhase,
  //         interventionCategory: currIntvCat
  //     }
  //     if (boolVal) {
  //         console.log("logging intv", id, logData)
  //         setCheckListItems(prevState => ({
  //             ...prevState, [id]: logData
  //         }))
  //     } else {
  //         console.log("logging intv", id, false)
  //         setChecked(id, false)
  //     }
  // }
  // const toggleChecked = (id) => {
  //     setChecked(id, !isChecked(id))
  // }


  const someChecked = ids => {
    const result = ids.some(id => isChecked(id)); // console.log(`someChecked(${ids}): ${result}`)

    return result;
  };

  const allChecked = ids => {
    const result = ids.every(id => isChecked(id)); // console.log(`allChecked(${ids}): ${result}`)

    return result;
  };

  const isCurrentAssessmentFinding = id => {
    return !!currentAssessmentFinding && currentAssessmentFinding === id;
  }; // const toggleAssessmentFinding = (id) => {
  //     const stepIsChecked = isChecked(id)
  //     setCurrentAssessmentFinding(!stepIsChecked ? id : null)
  //     // setCurrentInterventionForm(null)
  //     toggleChecked(id)
  // }


  const setVital = (vital, value) => {
    setCurrentVitals(prevState => Object.assign({}, prevState, {
      [vital]: value
    }));
  };

  const saveScenarioToLog = (label = "") => {
    const docRef = db.collection("logs").doc();
    let data = {
      userName: currentUser.email,
      scenarioID: scenario.id,
      scenarioName: scenario.name,
      schemaVersion: scenario.schemaVersion,
      label: label,
      timestamp: Date().toLocaleString()
    }; // let values = Object.values(checkListItems).filter(rec => !!rec && rec.constructor.name === "Object")

    let clis = Object.values(checkListItems).filter(rec => !!rec && rec.constructor.name === "Object"); //added by Pam to replace unknown with null due to some hiccup in the editor (i.e. should be able to do
    //away with this once original bug is fixed)

    clis.forEach(function (logObj, index) {
      for (let [key, val] of Object.entries(logObj)) {
        if (undefined === val) {
          clis[index][key] = null;
        }
      }
    });
    const values = clis.concat(patientStatusRequests).concat(intvHistory); // values = values.concat(patientStatusRequests)

    values.sort((recA, recB) => recA.timestamp - recB.timestamp);
    data["events"] = values;
    data["checkListItems"] = clis;
    data["patientStatusRequests"] = patientStatusRequests;
    data['interventionHistory'] = intvHistory; // // console.log(JSON.stringify(data, null, 4))
    // console.log(data)

    docRef.set(data);
  };

  const buildDepListFromCheckListItemIDs = ids => ids.map(id => isChecked(id));

  const getCheckListIDValues = ids => ids.map(id => isChecked(id));

  const setDerivedCheckListItemValue = (id, depChecker, deps) => {
    const currVal = isChecked(id);
    const newVal = "all" === depChecker ? allChecked(deps) : someChecked(deps); // don't update checkListItems if we don't have an actual change

    if (currVal !== newVal) {
      console.log(`setDerivedCheckListItemValue(${id}, "${depChecker}", [${deps}]): ${newVal}`);
      setChecked(id, newVal);
    }
  };

  const evalIDExpression = exp => {
    // console.log("before", exp)
    exp = exp.replace(/AND/g, ' && ').replace(/OR/g, ' || ').replace(/NOT\s*/g, ' !');
    const re = /[a-z][-a-z0-9]*/g;
    const matches = exp.matchAll(re);

    for (let match of matches) {
      exp = isChecked(match) ? exp.replace(match, 'true') : exp.replace(match, 'false');
    } // console.log("after", exp)


    const val = _utils__WEBPACK_IMPORTED_MODULE_10__.logicalExprParser.expressionToValue(exp); // console.log("value", val)

    return val;
  };

  const extractIDsFromExpression = exp => {
    exp = exp.replace(/AND/g, " ").replace(/OR/g, " ").replace(/NOT\s*/g, " ").replace(/\(/g, " ").replace(/\)/g, " ");
    const re = /[a-z][-a-z0-9]*/g;
    const matches = exp.matchAll(re);
    return Array.from(matches, x => x[0]);
  };

  const displayFindings = event => {
    event.preventDefault();
    setShowFindings(true);
  };

  const dismissFindings = event => {
    event.preventDefault();
    setShowFindings(false);
  };

  const toggleIntvsPerformedCollapsed = () => {
    setIntvsPerformedCollapsed(!intvsPerformedCollapsed);
  };

  const logPatientStatusRequest = (category, type, value) => {
    const rec = {
      id: `request-${category}-${type}`,
      type: "obtain-vital-sign",
      vitalType: category,
      vital: type,
      value: value,
      timestamp: getTimestamp(),
      phase: currPhase,
      subPhase: currSubPhase
    };
    setPatientStatusRequests(prevState => [...prevState, rec]);
  };

  const logIntv = intvData => {
    setIntvHistory(prevState => [...prevState].concat(intvData));
  };

  const getIntvHistory = intvID => {
    return intvHistory.filter(rec => rec.interventionID === intvID);
  };

  const getIntvVariantHistory = (intvID, intvVariant) => {
    return getIntvHistory(intvID).filter(rec => rec.intvVariant === intvVariant);
  }; // const updateIntvHistory = (intvID, newValue) => {
  //     const mostRecentIdx = intvHistory.findLastIndex(e => e.id === intvID)
  //     const copy = [...intvHistory]
  //     copy[mostRecentIdx] = newValue
  //     setIntvHistory(copy)
  // }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ScenarioContext.Provider, {
    value: {
      scenario,
      checkListItems,
      isChecked,
      setChecked,
      // toggleChecked,
      someChecked,
      allChecked,
      toggleChecklistItem,
      toggleAssessmentItem,
      toggleIntvAnswer,
      // setIntv,
      isCurrentAssessmentFinding,
      setCurrentAssessmentFinding,
      // toggleAssessmentFinding,
      currIntv,
      setCurrIntv,
      currentVitals,
      setVital,
      vitalsRecomputed,
      setVitalsRecomputed,
      started,
      setStarted,
      paused,
      setPaused,
      getTimestamp,
      timers,
      timerError,
      actionsQueue,
      registerTimer,
      cancelTimer,
      clearTimerError,
      setTimerError,
      setCollapsedValue,
      toggleCollapsed,
      getCollapsed,
      showScenarioComplete,
      setShowScenarioComplete,
      saveScenarioToLog,
      buildDepListFromCheckListItemIDs,
      getCheckListIDValues,
      setDerivedCheckListItemValue,
      evalIDExpression,
      extractIDsFromExpression,
      showFindings,
      displayFindings,
      dismissFindings,
      currIntvCat,
      setCurrIntvCat,
      currPhase,
      setCurrPhase,
      currSubPhase,
      setCurrSubPhase,
      intvsPerformedCollapsed,
      toggleIntvsPerformedCollapsed,
      showIntvSelection,
      setShowIntvSelection,
      patientStatusRequests,
      logPatientStatusRequest,
      patientStatusTab,
      setPatientStatusTab,
      systemsTab,
      setSystemsTab,
      logIntv,
      getIntvHistory,
      getIntvVariantHistory
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 467,
    columnNumber: 9
  }, undefined);
};
const useScenario = () => (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(ScenarioContext);

/***/ }),

/***/ 53390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserverContext": () => (/* reexport safe */ _ObserverContext__WEBPACK_IMPORTED_MODULE_2__.ObserverContext),
/* harmony export */   "PreferencesContext": () => (/* reexport safe */ _PreferencesContext__WEBPACK_IMPORTED_MODULE_0__.PreferencesContext),
/* harmony export */   "PreferencesProvider": () => (/* reexport safe */ _PreferencesContext__WEBPACK_IMPORTED_MODULE_0__.PreferencesProvider),
/* harmony export */   "ScenarioContext": () => (/* reexport safe */ _ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioContext),
/* harmony export */   "ScenarioProvider": () => (/* reexport safe */ _ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.ScenarioProvider),
/* harmony export */   "useObserverContext": () => (/* reexport safe */ _ObserverContext__WEBPACK_IMPORTED_MODULE_2__.useObserverContext),
/* harmony export */   "usePrefs": () => (/* reexport safe */ _PreferencesContext__WEBPACK_IMPORTED_MODULE_0__.usePrefs),
/* harmony export */   "useScenario": () => (/* reexport safe */ _ScenarioContext__WEBPACK_IMPORTED_MODULE_1__.useScenario)
/* harmony export */ });
/* harmony import */ var _PreferencesContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69386);
/* harmony import */ var _ScenarioContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97794);
/* harmony import */ var _ObserverContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80789);




/***/ }),

/***/ 42012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentFindings": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.AssessmentFindings),
/* harmony export */   "CallOutIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CallOutIcon),
/* harmony export */   "CallOutText": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CallOutText),
/* harmony export */   "CheckBox": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CheckBox),
/* harmony export */   "CheckBoxGroup": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CheckBoxGroup),
/* harmony export */   "CheckBoxIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CheckBoxIcon),
/* harmony export */   "CheckList": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CheckList),
/* harmony export */   "CheckListItem": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CheckListItem),
/* harmony export */   "CheckmarkIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CheckmarkIcon),
/* harmony export */   "ChevronIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ChevronIcon),
/* harmony export */   "DoneIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.DoneIcon),
/* harmony export */   "FindingsButton": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.FindingsButton),
/* harmony export */   "FindingsModal": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.FindingsModal),
/* harmony export */   "FormCheckBox": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.FormCheckBox),
/* harmony export */   "FormIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.FormIcon),
/* harmony export */   "InterventionForm": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InterventionForm),
/* harmony export */   "InterventionsList": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InterventionsList),
/* harmony export */   "InterventionsPerformed": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InterventionsPerformed),
/* harmony export */   "InterventionsStatus": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InterventionsStatus),
/* harmony export */   "InterventionsTab": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InterventionsTab),
/* harmony export */   "IntvForm": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.IntvForm),
/* harmony export */   "MDBContainer": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MDBContainer),
/* harmony export */   "MDBModal": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MDBModal),
/* harmony export */   "MDBNavBar": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MDBNavBar),
/* harmony export */   "OPQRST": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.OPQRST),
/* harmony export */   "ObserverContext": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.ObserverContext),
/* harmony export */   "Panel": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.Panel),
/* harmony export */   "PatientStatus": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PatientStatus),
/* harmony export */   "PhaseCheckList": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PhaseCheckList),
/* harmony export */   "PhaseLayout": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PhaseLayout),
/* harmony export */   "PhaseNav": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PhaseNav),
/* harmony export */   "PhaseNavPane": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PhaseNavPane),
/* harmony export */   "PreferencesContext": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.PreferencesContext),
/* harmony export */   "PreferencesForm": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PreferencesForm),
/* harmony export */   "PreferencesProvider": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.PreferencesProvider),
/* harmony export */   "Prompt": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.Prompt),
/* harmony export */   "PromptList": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PromptList),
/* harmony export */   "RadioGroup": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RadioGroup),
/* harmony export */   "RevealTable": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RevealTable),
/* harmony export */   "RevealTableRow": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RevealTableRow),
/* harmony export */   "SampleTab": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.SampleTab),
/* harmony export */   "SaveScenarioButton": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.SaveScenarioButton),
/* harmony export */   "Scenario": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_4__.Scenario),
/* harmony export */   "ScenarioCompleteModal": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ScenarioCompleteModal),
/* harmony export */   "ScenarioContext": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.ScenarioContext),
/* harmony export */   "ScenarioInfo": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ScenarioInfo),
/* harmony export */   "ScenarioInfoButton": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ScenarioInfoButton),
/* harmony export */   "ScenarioLayout": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ScenarioLayout),
/* harmony export */   "ScenarioList": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_4__.ScenarioList),
/* harmony export */   "ScenarioProvider": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.ScenarioProvider),
/* harmony export */   "Section": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_4__.Section),
/* harmony export */   "SectionLayout": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.SectionLayout),
/* harmony export */   "SubPhaseNav": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.SubPhaseNav),
/* harmony export */   "Timer": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.Timer),
/* harmony export */   "TimerIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.TimerIcon),
/* harmony export */   "UnauthedLayout": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.UnauthedLayout),
/* harmony export */   "UserDropDown": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.UserDropDown),
/* harmony export */   "UserIcon": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.UserIcon),
/* harmony export */   "VitalsTab": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VitalsTab),
/* harmony export */   "useObserverContext": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.useObserverContext),
/* harmony export */   "usePrefs": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.usePrefs),
/* harmony export */   "useScenario": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_3__.useScenario)
/* harmony export */ });
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18080);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59961);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64060);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53390);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37728);






/***/ }),

/***/ 67270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scenario)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89526);
/* harmony import */ var _meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48913);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97794);
/* harmony import */ var _components_layouts_ScenarioLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61937);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/routes/Scenario.js";





 // import { SYSTEMS as SYS } from "@meddbriefer/scenario-data/constants.js"


 // const SYSTEM_IDS = [SYS.AW, SYS.BR, SYS.BL, SYS.SH]



const getDefaultValues = scen => {
  return {
    vitals: scen.initialVitalSigns,
    vitalsRecomputed: false,
    checkListItems: {}
  };
};
/*
 * returns an array of interventions associated with system, both filtered and ordered
 * by filteredIDs
 */
// const getSystemIntvIds = (scen, filteredIDs, system) => {
//     const systemIntvIDs = scen.systemInterventions[system].intvs.map(rec => rec.id)
//     return filteredIDs.filter(fID => systemIntvIDs.includes(fID))
// }


function Scenario() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const [scenario, setScenario] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [initValues, setInitValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const loadScen = () => {
      (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_4__.getPublishedScenarioObjectByID)(db, scenarioId).then(data => {
        setScenario(data);
        const defaults = getDefaultValues(data);
        setInitValues(defaults);
        setReady(true);
      }).catch(error => console.log(error));
    };

    loadScen();
  }, [db, scenarioId]);

  if (!ready) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: "Loading scenario..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }, this);
  } else {
    window.scenario = scenario;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_5__.ScenarioProvider, {
      scenario: scenario,
      defaultValues: initValues,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layouts_ScenarioLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this);
  }
}

/***/ }),

/***/ 54966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenarioList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47933);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36719);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49966);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67465);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89526);
/* harmony import */ var _contexts_ObserverContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80789);
/* harmony import */ var _components_navbar_MDBNavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76992);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/routes/ScenarioList.js";







 // need a better way/place to manage feature-flag controling which assigment lists to use



function ScenarioList(props) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    classCode
  } = (0,_contexts_ObserverContext__WEBPACK_IMPORTED_MODULE_4__.useObserverContext)();
  const [scenarios, setScenarios] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [orderRequired, setOrderRequired] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log("class_code", classCode);
    db.collection("class-codes").where("name", "==", classCode).limit(1).get().then(snapshot => {
      if (snapshot.size === 1) {
        const doc = snapshot.docs[0];
        const tmp = doc.data();
        console.log(tmp);
        setOrderRequired(tmp.orderRequired);
        let assignments = tmp.assignments;
        console.log(assignments);
        setScenarios(assignments);
      }
    }).catch(error => console.log(error));
  }, [db, classCode]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_navbar_MDBNavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Scenario List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          sm: "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          sm: "6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
            children: "Your Assigned Scenarios:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
            children: scenarios.map(scen => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                className: "h3",
                to: `/scenario/${scen.publishedScenarioID}`,
                children: [" ", scen.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 37
              }, this)
            }, scen.publishedScenarioID, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 33
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          sm: "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 69799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var _contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97794);
/* harmony import */ var _components_layouts_PhaseLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75822);
/* harmony import */ var _components_PhaseCheckList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98596);
/* harmony import */ var _components_PatientStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68289);
/* harmony import */ var _components_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27383);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49663);
var _jsxFileName = "/Users/sts125/projects/monorepo/libs/observer-ui/src/routes/Section.js";











const Section = () => {
  const {
    phaseID,
    subPhaseID
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    scenario,
    currPhase,
    setCurrPhase,
    setCurrSubPhase,
    setCurrIntv,
    setCurrIntvCat,
    setShowIntvSelection
  } = (0,_contexts_ScenarioContext__WEBPACK_IMPORTED_MODULE_3__.useScenario)();
  const [section, setSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // set the phase/subphase to their ids (subPhaseID may be undefined)
    setCurrPhase(phaseID);
    setCurrSubPhase(subPhaseID ? subPhaseID : null);
    /* upon navigating to a new phase/subphase:
    - clear the current intervention and category.
    - hide intervention categories
    */

    setCurrIntv(null);
    setCurrIntvCat("");
    setShowIntvSelection(true); // find the data associated with the current phase/subPhase add assign it
    // to local state var section

    const phaseData = scenario.phaseData.find(rec => rec.id === phaseID);

    if (!!phaseData.subPhases && !!subPhaseID) {
      const subPhaseData = phaseData.subPhases.find(rec => rec.id === subPhaseID);
      setSection(subPhaseData);
    } else {
      setSection(phaseData);
    }
  }, [phaseID, subPhaseID]);

  if (!currPhase) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: "phase not set yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_layouts_PhaseLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    top: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_PhaseCheckList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      section: section
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 18
    }, undefined),
    bottom: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Patient Status",
      collapsable: true,
      scrollBody: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_PatientStatus__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ 37728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scenario": () => (/* reexport safe */ _Scenario__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ScenarioList": () => (/* reexport safe */ _ScenarioList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Section": () => (/* reexport safe */ _Section__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Scenario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67270);
/* harmony import */ var _ScenarioList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54966);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69799);




/***/ }),

/***/ 83411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatAsMinSecs": () => (/* binding */ formatAsMinSecs),
/* harmony export */   "logicalExprParser": () => (/* binding */ logicalExprParser)
/* harmony export */ });
/* harmony import */ var expressionparser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85376);

const formatAsMinSecs = seconds => {
  return new Date(seconds * 1000).toISOString().substr(14, 5);
};
const logicalExprLang = {
  AMBIGUOUS: {
    true: true,
    false: false
  },
  INFIX_OPS: {
    '&&': (a, b) => a() && b(),
    '||': (a, b) => a() || b()
  },
  PREFIX_OPS: {
    '!': expr => !expr()
  },
  PRECEDENCE: [['!'], ['&&'], ['||']],
  GROUP_OPEN: '(',
  GROUP_CLOSE: ')',
  SEPARATOR: ' ',
  SYMBOLS: ['(', ')', '!', '&&', '||'],

  termDelegate(term) {
    if (term === 'true') return true;
    if (term === 'false') return false;
    throw new Error(`invalid term ${term}`);
  }

};
const logicalExprParser = new expressionparser__WEBPACK_IMPORTED_MODULE_0__.ExpressionParser(logicalExprLang);

/***/ }),

/***/ 63573:
/***/ ((module) => {

module.exports = [[module.id, "\n.container-fluid,\n.main {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.main-region {\n  height: 100%;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ntable {\n  font-size: 0.75em;\n}\n\n.request-btn {\n  font-size: 0.75em;\n}\n\n.confirm-intv {\n  margin-top: 10px;\n  font-size: 0.75em;\n}\n\n.row {\n  margin-left: 0;\n  width: 100%;\n  margin-right: 0;\n  overflow: hidden;\n}\n\n.wrapper-row {\n  height: 100%;\n  width: 100%;\n}\n\n.main-row {\n  height: calc(100% - 52px);\n}\n\n.col {\n  height: 100%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding: 15px;\n  overflow-y: hidden;\n  /* -webkit-overflow-scrolling: touch; */\n}\n\nnav.navbar {\n  margin-left: 0;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0;\n}\n\n.brand-wrapper {\n  padding: 0;\n}\n\n.brand {\n  color: #007bff;\n  font-size: 30px;\n  margin-right: 4px;\n  padding-right: 8px;\n}\n\n.mdb-title {\n  font-size: 24px;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n\n.navbar-text {\n  margin-bottom: 0;\n}\n\n.nav button {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n.navbar-btn {\n  text-transform: uppercase;\n  margin-top: 12px;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: 0;\n  height: 25px;\n  margin-left: 7px !important;\n  margin-right: 7px !important;\n}\n\n.time-remaining {\n  font-size: 24px;\n  padding-left: 8px;\n}\n\n.phase-nav-pane {\n  background-color: #666666ff;\n  height: 100%;\n  padding: 0;\n}\n\n.phase-nav {\n  padding-bottom: 8px;\n  /* padding-bottom: 0; */\n}\n\n.phase-nav.no-children {\n  padding-bottom: 0;\n}\n\n.phase-nav button {\n  width: 100%;\n  background-color: transparent;\n  text-align: left;\n  border: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 5px;\n  padding-right: 0 !important;\n  /* font-size: 1.1em; */\n  font-size: 15.8px;\n  font-weight: bold;\n  color: white;\n}\n\n.phase-label button {\n  color: white;\n  /* font-size: 1.1em; */\n  font-size: 15.8px;\n  line-height: 1.2em;\n  font-weight: bold;\n  padding-bottom: 0;\n  padding-right: 0 !important;\n  /* padding-top: 4px; */\n}\n\n.subphase-nav button {\n  color: white;\n  padding-top: 2.5px;\n  padding-bottom: 2.5px;\n  /* padding-left: 15px; */\n  font-size: 0.75em;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\n/*\n.phase-details {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n  overflow:hidden;\n} */\n\n.phase-container {\n  height: 100%;\n}\n\n.phase-row {\n  height: 100%;\n  overflow: hidden;\n}\n\n.phase-col {\n  height: 100%;\n  padding-left: 5px;\n  padding-right: 0;\n  overflow-y: hidden;\n}\n\n.left-col-contents {\n  height: 100%;\n  overflow-y: hidden;\n}\n\n.interventions-col {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  overflow-y: scroll;\n}\n\n.checklist-row {\n  min-height: 270px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 640px;\n}\n\n/*\n.interventions-row {\n  height: 100%;\n  overflow-y: hidden;\n}\n.interventions-col {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n*/\n\n.patient-status-row {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow-y: hidden;\n}\n\n.patient-status-col {\n  height: 100%;\n  padding-left: 5px;\n  padding-right: 0;\n  overflow-y: scroll;\n}\n\nul.interventions-outline {\n  height: 100%;\n  overflow-y: scroll;\n}\n\nhr.minimal {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-top-width: 2px;\n}\n\nul {\n  list-style: none;\n  padding-left: 20px;\n  margin: 0px;\n}\n\nul.first {\n  padding-left: 5px;\n}\n\nli.menu-depth-1 {\n  padding-left: 0;\n}\n\nli.menu-depth-2 {\n  padding-left: 20px;\n}\n\nli.menu-depth-3 {\n  padding-left: 40px;\n\n}\n\nli.menu-depth-4 {\n  padding-left: 60px;\n}\n\nli.menu-heading {\n  font-weight: bold;\n  font-size: 0.85em;\n}\n\nli.intervention button {\n  font-size: 0.75em;\n}\n\n.intervention-submenu {\n  font-size: 15.8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.intervention-outline-wrapper {\n  padding-bottom: 5px;\n}\n\n.nav-tabs {\n  width: 100%;\n}\n\nul.nav-tabs a.nav-link {\n  padding-left: 6px;\n  padding-right: 6px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.intervention-btn {\n  text-align: left;\n}\n\n.checkbox-icon {\n  transform: translateY(4px);\n  font-size: medium;\n  margin-right: 4px;\n}\n\n.callout-icon {\n  margin-left: 10px;\n  font-size: medium;\n  transform: translateY(5px);\n}\n\n.chevron-icon {\n  transform: translateY(5px)\n}\n\n.timer-icon {\n  transform: translateY(8px)\n}\n\n.callout {\n  margin-left: 10px;\n  /* color: blue; */\n  font-size: 0.75em;\n  font-style: italic;\n  overflow: none;\n  text-overflow: ellipsis;\n}\n\n.callout.currentCallOut {\n  background-color: yellow;\n}\n\n.collapse {\n  height: 100%;\n}\n\n.card {\n  border: 0;\n  /* overflow-y: hidden; */\n}\n\n/* .card {\n  height: 100%;\n  overflow-y: hidden;\n} */\n\n/* .card-header {\n  margin-top: 5px;\n  padding-left: 5px;\n} */\n\n.card-body {\n  border: 0;\n  /* height: 110%; */\n  /* height: 100%; */\n  padding-top: 5px;\n  /* margin-bottom: 20px; */\n  padding-bottom: 10px;\n  /* overflow-y: scroll; */\n}\n\n.interventions-card {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 0;\n}\n\n.interventions-card-header {\n  background-color: white;\n  text-align: left;\n  font-weight: bold;\n  font-size: larger;\n}\n\n.interventions-card-body {\n  height: calc(100% -53px);\n  /* height: fit-content; */\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  /* margin-bottom: 40px; */\n  overflow-y: scroll;\n}\n\n.checklist-card-header {\n  background-color: white;\n  text-align: left;\n  font-weight: bold;\n  font-size: larger;\n}\n\n.interventions-performed-header {\n  background-color: white;\n  border: 0;\n  text-align: left;\n  font-weight: bold;\n  font-size: larger;\n}\n\n.vert-tabs-container {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 20px;\n  overflow: hidden;\n}\n\n.prompt-list {\n  padding-left: 0;\n}\n\n.prompt-label {\n  color: #2980b9;\n  font-size: 0.9em;\n}\n\n.prompt-option {\n  font-size: 0.75em;\n  padding-right: 5px;\n}\n\ninput[type=radio].prompt-radio-btn {\n  margin-right: 5px;\n}\n\n.checkbox-group-options {\n  padding-left: 0;\n}\n\n.clear-radio-btn {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.vert-tabs .intv-cat-btn {\n  height: 100%;\n  width: 100%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  background-color: transparent;\n  border: 1px solid #abb2b9;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 0px;\n  text-align: center;\n}\n\n.intv-cat-btn.active {\n  border: 1px solid black;\n  border-right: 0px;\n  background-color: blue;\n  color: white;\n}\n\nul.interventions-outline {\n  height: 100%;\n  /* margin-bottom: 40px !important; */\n  padding-left: 0;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.tab-content {\n  height: 100%;\n}\n\n.tab-pane {\n  overflow-y: auto;\n}\n\n.dev {\n  border: 1px dashed hotpink;\n}\n\n.hoverable.active {\n  filter: invert(57%) sepia(92%) saturate(4739%) hue-rotate(342deg) brightness(108%) contrast(101%);\n}\n\n.hoverable:hover {\n  filter: invert(78%) sepia(44%) saturate(1107%) hue-rotate(164deg) brightness(102%) contrast(97%);\n}\n\n/*\n.stick-figure-nav {\n  display: flex;\n  flex-flow: row;\n} */\n\n.depth-1 {\n  margin-left: 20px;\n}\n\n.depth-2 {\n  margin-left: 40px;\n}\n\n.depth-3 {\n  margin-left: 60px\n}\n\n.dropdown-menu {\n  transform: translateX(-80px);\n}\n\n.dropdown-item {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.dropdown-header {\n  font-weight:900;\n  font-size: 1.1rem;\n  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  background-color: #545b62;\n  color: white;\n}\n\n.dropdown-depth-1 {\n  padding-left: 10px;\n}\n\n.dropdown-depth-2 {\n  padding-left: 30px;\n}\n\n.dropdown-depth-3 {\n  padding-left: 50px;\n}\n\n.dropdown-form {\n  padding-left: 40px;\n}\n", '', {"version":3,"sources":["/Users/sts125/projects/monorepo/libs/observer-ui/src/styles.css"],"names":[],"mappings":";AACA;;EAEE,WAAW;EACX,SAAS;EACT,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAIA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AACA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AACA;EACE,gBAAgB;AAClB;;AACA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AACA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,SAAS;EACT,YAAY;EACZ,2BAA2B;EAC3B,4BAA4B;AAC9B;;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;EACxB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;;;;;;;GAOG;;AAEH;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAGA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,2BAAmB;EAAnB,wBAAmB;EAAnB,mBAAmB;EACnB,iBAAiB;AACnB;;AACA;;;;;;;;;;CAUC;;AAED;EACE,WAAW;EACX,2BAAmB;EAAnB,wBAAmB;EAAnB,mBAAmB;EACnB,kBAAkB;AACpB;;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAGA;EACE,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AACA;EACE,iBAAiB;AACnB;;AAGA;EACE,eAAe;AACjB;;AACA;EACE,kBAAkB;AACpB;;AACA;EACE,kBAAkB;;AAEpB;;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AACA;EACE,mBAAmB;AACrB;;AACA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,iBAAiB;AACnB;;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,0BAA0B;AAC5B;;AACA;EACE;AACF;;AACA;EACE;AACF;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,uBAAuB;AACzB;;AACA;EACE,wBAAwB;AAC1B;;AAGA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,wBAAwB;AAC1B;;AACA;;;GAGG;;AACH;;;GAGG;;AAEH;EACE,SAAS;EACT,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,2BAAmB;EAAnB,wBAAmB;EAAnB,mBAAmB;EACnB,SAAS;AACX;;AACA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AACA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;;AACA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AACA;EACE,iBAAiB;AACnB;;AACA;EACE,eAAe;AACjB;;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;EAC/B,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAGA;EACE,0BAA0B;AAC5B;;AAIA;EACE,iGAAiG;AACnG;;AAEA;EACE,gGAAgG;AAClG;;AACA;;;;GAIG;;AAGH;EACE,iBAAiB;AACnB;;AACA;EACE,iBAAiB;AACnB;;AACA;EACE;AACF;;AAEA;EACE,4BAA4B;AAC9B;;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,oGAAoG;EACpG,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;AACd;;AACA;EACE,kBAAkB;AACpB;;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["\n.container-fluid,\n.main {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.main-region {\n  height: 100%;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ntable {\n  font-size: 0.75em;\n}\n.request-btn {\n  font-size: 0.75em;\n}\n\n.confirm-intv {\n  margin-top: 10px;\n  font-size: 0.75em;\n}\n\n\n\n.row {\n  margin-left: 0;\n  width: 100%;\n  margin-right: 0;\n  overflow: hidden;\n}\n.wrapper-row {\n  height: 100%;\n  width: 100%;\n}\n\n.main-row {\n  height: calc(100% - 52px);\n}\n\n.col {\n  height: 100%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding: 15px;\n  overflow-y: hidden;\n  /* -webkit-overflow-scrolling: touch; */\n}\n\nnav.navbar {\n  margin-left: 0;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0;\n}\n\n.brand-wrapper {\n  padding: 0;\n}\n.brand {\n  color: #007bff;\n  font-size: 30px;\n  margin-right: 4px;\n  padding-right: 8px;\n}\n.mdb-title {\n  font-size: 24px;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n.navbar-text {\n  margin-bottom: 0;\n}\n.nav button {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.navbar-btn {\n  text-transform: uppercase;\n  margin-top: 12px;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: 0;\n  height: 25px;\n  margin-left: 7px !important;\n  margin-right: 7px !important;\n}\n.time-remaining {\n  font-size: 24px;\n  padding-left: 8px;\n}\n\n.phase-nav-pane {\n  background-color: #666666ff;\n  height: 100%;\n  padding: 0;\n}\n\n.phase-nav {\n  padding-bottom: 8px;\n  /* padding-bottom: 0; */\n}\n.phase-nav.no-children {\n  padding-bottom: 0;\n}\n\n.phase-nav button {\n  width: 100%;\n  background-color: transparent;\n  text-align: left;\n  border: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 5px;\n  padding-right: 0 !important;\n  /* font-size: 1.1em; */\n  font-size: 15.8px;\n  font-weight: bold;\n  color: white;\n}\n\n.phase-label button {\n  color: white;\n  /* font-size: 1.1em; */\n  font-size: 15.8px;\n  line-height: 1.2em;\n  font-weight: bold;\n  padding-bottom: 0;\n  padding-right: 0 !important;\n  /* padding-top: 4px; */\n}\n\n.subphase-nav button {\n  color: white;\n  padding-top: 2.5px;\n  padding-bottom: 2.5px;\n  /* padding-left: 15px; */\n  font-size: 0.75em;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\n/*\n.phase-details {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n  overflow:hidden;\n} */\n\n.phase-container {\n  height: 100%;\n}\n\n.phase-row {\n  height: 100%;\n  overflow: hidden;\n}\n\n.phase-col {\n  height: 100%;\n  padding-left: 5px;\n  padding-right: 0;\n  overflow-y: hidden;\n}\n.left-col-contents {\n  height: 100%;\n  overflow-y: hidden;\n}\n\n\n.interventions-col {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  overflow-y: scroll;\n}\n\n.checklist-row {\n  min-height: 270px;\n  height: fit-content;\n  max-height: 640px;\n}\n/*\n.interventions-row {\n  height: 100%;\n  overflow-y: hidden;\n}\n.interventions-col {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n*/\n\n.patient-status-row {\n  width: 100%;\n  height: fit-content;\n  overflow-y: hidden;\n}\n.patient-status-col {\n  height: 100%;\n  padding-left: 5px;\n  padding-right: 0;\n  overflow-y: scroll;\n}\nul.interventions-outline {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n\nhr.minimal {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-top-width: 2px;\n}\n\nul {\n  list-style: none;\n  padding-left: 20px;\n  margin: 0px;\n}\nul.first {\n  padding-left: 5px;\n}\n\n\nli.menu-depth-1 {\n  padding-left: 0;\n}\nli.menu-depth-2 {\n  padding-left: 20px;\n}\nli.menu-depth-3 {\n  padding-left: 40px;\n\n}\nli.menu-depth-4 {\n  padding-left: 60px;\n}\n\nli.menu-heading {\n  font-weight: bold;\n  font-size: 0.85em;\n}\nli.intervention button {\n  font-size: 0.75em;\n}\n\n.intervention-submenu {\n  font-size: 15.8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.intervention-outline-wrapper {\n  padding-bottom: 5px;\n}\n.nav-tabs {\n  width: 100%;\n}\n\nul.nav-tabs a.nav-link {\n  padding-left: 6px;\n  padding-right: 6px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.intervention-btn {\n  text-align: left;\n}\n\n.checkbox-icon {\n  transform: translateY(4px);\n  font-size: medium;\n  margin-right: 4px;\n}\n.callout-icon {\n  margin-left: 10px;\n  font-size: medium;\n  transform: translateY(5px);\n}\n.chevron-icon {\n  transform: translateY(5px)\n}\n.timer-icon {\n  transform: translateY(8px)\n}\n\n.callout {\n  margin-left: 10px;\n  /* color: blue; */\n  font-size: 0.75em;\n  font-style: italic;\n  overflow: none;\n  text-overflow: ellipsis;\n}\n.callout.currentCallOut {\n  background-color: yellow;\n}\n\n\n.collapse {\n  height: 100%;\n}\n\n.card {\n  border: 0;\n  /* overflow-y: hidden; */\n}\n/* .card {\n  height: 100%;\n  overflow-y: hidden;\n} */\n/* .card-header {\n  margin-top: 5px;\n  padding-left: 5px;\n} */\n\n.card-body {\n  border: 0;\n  /* height: 110%; */\n  /* height: 100%; */\n  padding-top: 5px;\n  /* margin-bottom: 20px; */\n  padding-bottom: 10px;\n  /* overflow-y: scroll; */\n}\n\n.interventions-card {\n  height: fit-content;\n  border: 0;\n}\n.interventions-card-header {\n  background-color: white;\n  text-align: left;\n  font-weight: bold;\n  font-size: larger;\n}\n.interventions-card-body {\n  height: calc(100% -53px);\n  /* height: fit-content; */\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  /* margin-bottom: 40px; */\n  overflow-y: scroll;\n}\n\n.checklist-card-header {\n  background-color: white;\n  text-align: left;\n  font-weight: bold;\n  font-size: larger;\n}\n\n.interventions-performed-header {\n  background-color: white;\n  border: 0;\n  text-align: left;\n  font-weight: bold;\n  font-size: larger;\n}\n.vert-tabs-container {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 20px;\n  overflow: hidden;\n}\n\n.prompt-list {\n  padding-left: 0;\n}\n.prompt-label {\n  color: #2980b9;\n  font-size: 0.9em;\n}\n.prompt-option {\n  font-size: 0.75em;\n  padding-right: 5px;\n}\ninput[type=radio].prompt-radio-btn {\n  margin-right: 5px;\n}\n.checkbox-group-options {\n  padding-left: 0;\n}\n.clear-radio-btn {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.vert-tabs .intv-cat-btn {\n  height: 100%;\n  width: 100%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  background-color: transparent;\n  border: 1px solid #abb2b9;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 0px;\n  text-align: center;\n}\n\n.intv-cat-btn.active {\n  border: 1px solid black;\n  border-right: 0px;\n  background-color: blue;\n  color: white;\n}\n\nul.interventions-outline {\n  height: 100%;\n  /* margin-bottom: 40px !important; */\n  padding-left: 0;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.tab-content {\n  height: 100%;\n}\n\n.tab-pane {\n  overflow-y: auto;\n}\n\n\n.dev {\n  border: 1px dashed hotpink;\n}\n\n\n\n.hoverable.active {\n  filter: invert(57%) sepia(92%) saturate(4739%) hue-rotate(342deg) brightness(108%) contrast(101%);\n}\n\n.hoverable:hover {\n  filter: invert(78%) sepia(44%) saturate(1107%) hue-rotate(164deg) brightness(102%) contrast(97%);\n}\n/*\n.stick-figure-nav {\n  display: flex;\n  flex-flow: row;\n} */\n\n\n.depth-1 {\n  margin-left: 20px;\n}\n.depth-2 {\n  margin-left: 40px;\n}\n.depth-3 {\n  margin-left: 60px\n}\n\n.dropdown-menu {\n  transform: translateX(-80px);\n}\n.dropdown-item {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.dropdown-header {\n  font-weight:900;\n  font-size: 1.1rem;\n  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  background-color: #545b62;\n  color: white;\n}\n.dropdown-depth-1 {\n  padding-left: 10px;\n}\n.dropdown-depth-2 {\n  padding-left: 30px;\n}\n\n.dropdown-depth-3 {\n  padding-left: 50px;\n}\n\n.dropdown-form {\n  padding-left: 40px;\n}\n"],"sourceRoot":""}]]

/***/ }),

/***/ 94292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"auth-styles_container__10AGD","container-fluid":"auth-styles_container-fluid__fwIkl","container-xl":"auth-styles_container-xl__3ys0F","container-lg":"auth-styles_container-lg__5IrFs","container-md":"auth-styles_container-md__30y2c","container-sm":"auth-styles_container-sm__3rV-I","row":"auth-styles_row__2mDwO","no-gutters":"auth-styles_no-gutters__2JKk5","col":"auth-styles_col__3ldCj","col-xl":"auth-styles_col-xl__2Y9VE","col-xl-auto":"auth-styles_col-xl-auto__1NU79","col-xl-12":"auth-styles_col-xl-12__2cHm3","col-xl-11":"auth-styles_col-xl-11__3NJtT","col-xl-10":"auth-styles_col-xl-10__2KsYU","col-xl-9":"auth-styles_col-xl-9__1xLiS","col-xl-8":"auth-styles_col-xl-8__3erd8","col-xl-7":"auth-styles_col-xl-7__2fcIl","col-xl-6":"auth-styles_col-xl-6__1sdz8","col-xl-5":"auth-styles_col-xl-5__3RtO0","col-xl-4":"auth-styles_col-xl-4__1Tdlx","col-xl-3":"auth-styles_col-xl-3__1eyqY","col-xl-2":"auth-styles_col-xl-2__3Q8G3","col-xl-1":"auth-styles_col-xl-1__2L8ID","col-lg":"auth-styles_col-lg__27OgK","col-lg-auto":"auth-styles_col-lg-auto__37EzL","col-lg-12":"auth-styles_col-lg-12__1UdqO","col-lg-11":"auth-styles_col-lg-11__WDNJE","col-lg-10":"auth-styles_col-lg-10__1Q9Mt","col-lg-9":"auth-styles_col-lg-9__1sq-o","col-lg-8":"auth-styles_col-lg-8__3Opus","col-lg-7":"auth-styles_col-lg-7__2bxn2","col-lg-6":"auth-styles_col-lg-6__1R-_o","col-lg-5":"auth-styles_col-lg-5__keq_w","col-lg-4":"auth-styles_col-lg-4__BOl7q","col-lg-3":"auth-styles_col-lg-3__c4ose","col-lg-2":"auth-styles_col-lg-2__2Ldvo","col-lg-1":"auth-styles_col-lg-1__2eOCB","col-md":"auth-styles_col-md__280Kr","col-md-auto":"auth-styles_col-md-auto__3b9B1","col-md-12":"auth-styles_col-md-12__1d6nc","col-md-11":"auth-styles_col-md-11__3dcqK","col-md-10":"auth-styles_col-md-10__rLZ-p","col-md-9":"auth-styles_col-md-9__OvPfP","col-md-8":"auth-styles_col-md-8__3WMD0","col-md-7":"auth-styles_col-md-7__2oSlY","col-md-6":"auth-styles_col-md-6__3peJd","col-md-5":"auth-styles_col-md-5__31sX_","col-md-4":"auth-styles_col-md-4__2J1-h","col-md-3":"auth-styles_col-md-3__1KjCA","col-md-2":"auth-styles_col-md-2__-yWxg","col-md-1":"auth-styles_col-md-1__VXFTn","col-sm":"auth-styles_col-sm__2ySNy","col-sm-auto":"auth-styles_col-sm-auto__1qooL","col-sm-12":"auth-styles_col-sm-12__2oSEw","col-sm-11":"auth-styles_col-sm-11__1GFbu","col-sm-10":"auth-styles_col-sm-10__3xeeR","col-sm-9":"auth-styles_col-sm-9__2G2BH","col-sm-8":"auth-styles_col-sm-8__16wvo","col-sm-7":"auth-styles_col-sm-7__8Gwhq","col-sm-6":"auth-styles_col-sm-6__2PLpR","col-sm-5":"auth-styles_col-sm-5__3FYYp","col-sm-4":"auth-styles_col-sm-4__vU45W","col-sm-3":"auth-styles_col-sm-3__2rUc2","col-sm-2":"auth-styles_col-sm-2__3tlGJ","col-sm-1":"auth-styles_col-sm-1__1gSFk","col-auto":"auth-styles_col-auto__mOtLf","col-12":"auth-styles_col-12__HkJhz","col-11":"auth-styles_col-11__1TZkf","col-10":"auth-styles_col-10__2PHE5","col-9":"auth-styles_col-9__3upp1","col-8":"auth-styles_col-8__3OMmH","col-7":"auth-styles_col-7__3y0BG","col-6":"auth-styles_col-6__z2OvX","col-5":"auth-styles_col-5__1bmv4","col-4":"auth-styles_col-4__ooaUD","col-3":"auth-styles_col-3__3md1A","col-2":"auth-styles_col-2__ZG0mP","col-1":"auth-styles_col-1__3vw5D","row-cols-1":"auth-styles_row-cols-1__1FgYA","row-cols-2":"auth-styles_row-cols-2__T22x2","row-cols-3":"auth-styles_row-cols-3__33SFY","row-cols-4":"auth-styles_row-cols-4__1Upyr","row-cols-5":"auth-styles_row-cols-5__3s0l2","row-cols-6":"auth-styles_row-cols-6__195mx","order-first":"auth-styles_order-first__32Xyg","order-last":"auth-styles_order-last__1gpEV","order-0":"auth-styles_order-0__37anm","order-1":"auth-styles_order-1__1cYTz","order-2":"auth-styles_order-2__2WgEu","order-3":"auth-styles_order-3__1c1Ge","order-4":"auth-styles_order-4__7ses6","order-5":"auth-styles_order-5__OPIHT","order-6":"auth-styles_order-6__2EExL","order-7":"auth-styles_order-7__-LNNy","order-8":"auth-styles_order-8__17xHi","order-9":"auth-styles_order-9__3KedA","order-10":"auth-styles_order-10__2Rcp7","order-11":"auth-styles_order-11__1ldSL","order-12":"auth-styles_order-12__QYXvE","offset-1":"auth-styles_offset-1__S_yky","offset-2":"auth-styles_offset-2__3L8fT","offset-3":"auth-styles_offset-3__1R6FV","offset-4":"auth-styles_offset-4__1uA9L","offset-5":"auth-styles_offset-5__2pHj2","offset-6":"auth-styles_offset-6__1WM7j","offset-7":"auth-styles_offset-7__2l8T6","offset-8":"auth-styles_offset-8__2PX1q","offset-9":"auth-styles_offset-9__NHkNE","offset-10":"auth-styles_offset-10__3A8Zk","offset-11":"auth-styles_offset-11__q7vhc","row-cols-sm-1":"auth-styles_row-cols-sm-1__2IW8N","row-cols-sm-2":"auth-styles_row-cols-sm-2__2TmMR","row-cols-sm-3":"auth-styles_row-cols-sm-3__1Bcpm","row-cols-sm-4":"auth-styles_row-cols-sm-4__2Jgca","row-cols-sm-5":"auth-styles_row-cols-sm-5__1wTaB","row-cols-sm-6":"auth-styles_row-cols-sm-6__N7dM_","order-sm-first":"auth-styles_order-sm-first__1LHjA","order-sm-last":"auth-styles_order-sm-last__1OG2P","order-sm-0":"auth-styles_order-sm-0__3VAGC","order-sm-1":"auth-styles_order-sm-1__3zlDN","order-sm-2":"auth-styles_order-sm-2__2Id98","order-sm-3":"auth-styles_order-sm-3__15b2I","order-sm-4":"auth-styles_order-sm-4__170Pr","order-sm-5":"auth-styles_order-sm-5__1TtxJ","order-sm-6":"auth-styles_order-sm-6__9pb2G","order-sm-7":"auth-styles_order-sm-7__SIm6q","order-sm-8":"auth-styles_order-sm-8__2t0hf","order-sm-9":"auth-styles_order-sm-9__17vw7","order-sm-10":"auth-styles_order-sm-10__31bMw","order-sm-11":"auth-styles_order-sm-11__2ReIr","order-sm-12":"auth-styles_order-sm-12__1ViJl","offset-sm-0":"auth-styles_offset-sm-0__UP_Ye","offset-sm-1":"auth-styles_offset-sm-1__3svSJ","offset-sm-2":"auth-styles_offset-sm-2__3POI4","offset-sm-3":"auth-styles_offset-sm-3__1w0kW","offset-sm-4":"auth-styles_offset-sm-4__3JWGY","offset-sm-5":"auth-styles_offset-sm-5__2EEPf","offset-sm-6":"auth-styles_offset-sm-6__22GCC","offset-sm-7":"auth-styles_offset-sm-7__2q_3d","offset-sm-8":"auth-styles_offset-sm-8__2HZtt","offset-sm-9":"auth-styles_offset-sm-9__2Y-bk","offset-sm-10":"auth-styles_offset-sm-10__3jNcV","offset-sm-11":"auth-styles_offset-sm-11__3Q0ul","row-cols-md-1":"auth-styles_row-cols-md-1__xFmDr","row-cols-md-2":"auth-styles_row-cols-md-2__qZ_pn","row-cols-md-3":"auth-styles_row-cols-md-3__3uzyG","row-cols-md-4":"auth-styles_row-cols-md-4__1xY6o","row-cols-md-5":"auth-styles_row-cols-md-5__ir_PD","row-cols-md-6":"auth-styles_row-cols-md-6__37Dx8","order-md-first":"auth-styles_order-md-first__PXmJ9","order-md-last":"auth-styles_order-md-last__18UQ7","order-md-0":"auth-styles_order-md-0__RcECW","order-md-1":"auth-styles_order-md-1__3Ixnl","order-md-2":"auth-styles_order-md-2__m1tAM","order-md-3":"auth-styles_order-md-3__QDe0k","order-md-4":"auth-styles_order-md-4__31o0n","order-md-5":"auth-styles_order-md-5__3WXPf","order-md-6":"auth-styles_order-md-6__3ULOf","order-md-7":"auth-styles_order-md-7__3VjfE","order-md-8":"auth-styles_order-md-8__3u3G9","order-md-9":"auth-styles_order-md-9__20_DE","order-md-10":"auth-styles_order-md-10__3nlP7","order-md-11":"auth-styles_order-md-11__21LDw","order-md-12":"auth-styles_order-md-12__k3d-a","offset-md-0":"auth-styles_offset-md-0__328EE","offset-md-1":"auth-styles_offset-md-1__1Pv38","offset-md-2":"auth-styles_offset-md-2__EkZRk","offset-md-3":"auth-styles_offset-md-3__1QwfK","offset-md-4":"auth-styles_offset-md-4__2qkvS","offset-md-5":"auth-styles_offset-md-5__2-1Sl","offset-md-6":"auth-styles_offset-md-6__1foUV","offset-md-7":"auth-styles_offset-md-7__1lT_G","offset-md-8":"auth-styles_offset-md-8__3LqIe","offset-md-9":"auth-styles_offset-md-9__2NZK4","offset-md-10":"auth-styles_offset-md-10__1-I-n","offset-md-11":"auth-styles_offset-md-11__30FC1","row-cols-lg-1":"auth-styles_row-cols-lg-1__2BeEB","row-cols-lg-2":"auth-styles_row-cols-lg-2__1-duX","row-cols-lg-3":"auth-styles_row-cols-lg-3__1Ppur","row-cols-lg-4":"auth-styles_row-cols-lg-4__vslwG","row-cols-lg-5":"auth-styles_row-cols-lg-5__34Bqy","row-cols-lg-6":"auth-styles_row-cols-lg-6__17nYq","order-lg-first":"auth-styles_order-lg-first__2KPTW","order-lg-last":"auth-styles_order-lg-last__sd62e","order-lg-0":"auth-styles_order-lg-0__14g0P","order-lg-1":"auth-styles_order-lg-1__1-Fi6","order-lg-2":"auth-styles_order-lg-2__1UeSK","order-lg-3":"auth-styles_order-lg-3__2Bnqq","order-lg-4":"auth-styles_order-lg-4__3wLF4","order-lg-5":"auth-styles_order-lg-5__3BWET","order-lg-6":"auth-styles_order-lg-6__22vzu","order-lg-7":"auth-styles_order-lg-7__1q4YC","order-lg-8":"auth-styles_order-lg-8__2Wn2X","order-lg-9":"auth-styles_order-lg-9__2zwR0","order-lg-10":"auth-styles_order-lg-10__3S5Kf","order-lg-11":"auth-styles_order-lg-11__3lViv","order-lg-12":"auth-styles_order-lg-12__1HbM4","offset-lg-0":"auth-styles_offset-lg-0__3vXRO","offset-lg-1":"auth-styles_offset-lg-1__1qpeE","offset-lg-2":"auth-styles_offset-lg-2__2VlLm","offset-lg-3":"auth-styles_offset-lg-3__29oiZ","offset-lg-4":"auth-styles_offset-lg-4__3zPy2","offset-lg-5":"auth-styles_offset-lg-5__3NNON","offset-lg-6":"auth-styles_offset-lg-6__14HL7","offset-lg-7":"auth-styles_offset-lg-7__fw7as","offset-lg-8":"auth-styles_offset-lg-8__26zm0","offset-lg-9":"auth-styles_offset-lg-9__3lGAr","offset-lg-10":"auth-styles_offset-lg-10__1jr81","offset-lg-11":"auth-styles_offset-lg-11__SABrM","row-cols-xl-1":"auth-styles_row-cols-xl-1__2KEIY","row-cols-xl-2":"auth-styles_row-cols-xl-2__2Q9jD","row-cols-xl-3":"auth-styles_row-cols-xl-3__serpJ","row-cols-xl-4":"auth-styles_row-cols-xl-4__17lXh","row-cols-xl-5":"auth-styles_row-cols-xl-5__se3PY","row-cols-xl-6":"auth-styles_row-cols-xl-6__3Dv0I","order-xl-first":"auth-styles_order-xl-first__2cXN7","order-xl-last":"auth-styles_order-xl-last__3Bu_n","order-xl-0":"auth-styles_order-xl-0__QNT-4","order-xl-1":"auth-styles_order-xl-1__2uJW9","order-xl-2":"auth-styles_order-xl-2__1urQz","order-xl-3":"auth-styles_order-xl-3__HrnTR","order-xl-4":"auth-styles_order-xl-4__lqyBd","order-xl-5":"auth-styles_order-xl-5__1boyL","order-xl-6":"auth-styles_order-xl-6__2ljrn","order-xl-7":"auth-styles_order-xl-7__sAp62","order-xl-8":"auth-styles_order-xl-8__3QIeu","order-xl-9":"auth-styles_order-xl-9__30U3w","order-xl-10":"auth-styles_order-xl-10__1ST15","order-xl-11":"auth-styles_order-xl-11__pbkTF","order-xl-12":"auth-styles_order-xl-12__1s6HJ","offset-xl-0":"auth-styles_offset-xl-0__1BSft","offset-xl-1":"auth-styles_offset-xl-1__2paww","offset-xl-2":"auth-styles_offset-xl-2__6PmLy","offset-xl-3":"auth-styles_offset-xl-3__3Z-Tv","offset-xl-4":"auth-styles_offset-xl-4__2FFWB","offset-xl-5":"auth-styles_offset-xl-5__31OSu","offset-xl-6":"auth-styles_offset-xl-6__3s_gh","offset-xl-7":"auth-styles_offset-xl-7__uzLWG","offset-xl-8":"auth-styles_offset-xl-8__MUIfK","offset-xl-9":"auth-styles_offset-xl-9__3FedX","offset-xl-10":"auth-styles_offset-xl-10__6N_6d","offset-xl-11":"auth-styles_offset-xl-11__jdWF2","form-control":"auth-styles_form-control__TWWjx","form-control-file":"auth-styles_form-control-file__2hM0e","form-control-range":"auth-styles_form-control-range__1L_5t","col-form-label":"auth-styles_col-form-label__nwIeC","col-form-label-lg":"auth-styles_col-form-label-lg__3_NoG","col-form-label-sm":"auth-styles_col-form-label-sm__30gfe","form-control-plaintext":"auth-styles_form-control-plaintext__35RzL","form-control-sm":"auth-styles_form-control-sm__2XZXA","form-control-lg":"auth-styles_form-control-lg__3X3MG","form-group":"auth-styles_form-group__11rq4","form-text":"auth-styles_form-text__2dVxs","form-row":"auth-styles_form-row__kAOLu","form-check":"auth-styles_form-check__2OFdL","form-check-input":"auth-styles_form-check-input__3P2bC","form-check-label":"auth-styles_form-check-label__1v1JV","form-check-inline":"auth-styles_form-check-inline__3rsW7","valid-feedback":"auth-styles_valid-feedback__1_T7-","valid-tooltip":"auth-styles_valid-tooltip__dSCQM","was-validated":"auth-styles_was-validated__1foJB","is-valid":"auth-styles_is-valid__30FJs","custom-select":"auth-styles_custom-select__EDd2g","custom-control-input":"auth-styles_custom-control-input__34O46","custom-control-label":"auth-styles_custom-control-label__3M8RN","custom-file-input":"auth-styles_custom-file-input__24wnE","custom-file-label":"auth-styles_custom-file-label__b7a1j","invalid-feedback":"auth-styles_invalid-feedback__mhQo-","invalid-tooltip":"auth-styles_invalid-tooltip__DQUyl","is-invalid":"auth-styles_is-invalid__2jvIP","form-inline":"auth-styles_form-inline__2VVKx","input-group":"auth-styles_input-group__1a2ep","custom-control":"auth-styles_custom-control__1rlbV","btn":"auth-styles_btn__2MeMF","focus":"auth-styles_focus__3tRPo","disabled":"auth-styles_disabled__3SfTf","btn-primary":"auth-styles_btn-primary__2kI78","active":"auth-styles_active__j6Q1A","show":"auth-styles_show__1auI0","dropdown-toggle":"auth-styles_dropdown-toggle__BJr6U","btn-secondary":"auth-styles_btn-secondary__3c7Cl","btn-success":"auth-styles_btn-success__3k5kU","btn-info":"auth-styles_btn-info__1Jo-l","btn-warning":"auth-styles_btn-warning__kZ8UD","btn-danger":"auth-styles_btn-danger__3hHi0","btn-light":"auth-styles_btn-light__35KKO","btn-dark":"auth-styles_btn-dark__2qjsW","btn-outline-primary":"auth-styles_btn-outline-primary__l7U0o","btn-outline-secondary":"auth-styles_btn-outline-secondary__1Y7Jb","btn-outline-success":"auth-styles_btn-outline-success__bORqD","btn-outline-info":"auth-styles_btn-outline-info__3xoZY","btn-outline-warning":"auth-styles_btn-outline-warning__2yk0b","btn-outline-danger":"auth-styles_btn-outline-danger__2lsp0","btn-outline-light":"auth-styles_btn-outline-light__PFtsK","btn-outline-dark":"auth-styles_btn-outline-dark__26zGm","btn-link":"auth-styles_btn-link__2ucDw","btn-lg":"auth-styles_btn-lg__2IBeZ","btn-sm":"auth-styles_btn-sm__YTkcH","btn-block":"auth-styles_btn-block__3afcY","custom-file":"auth-styles_custom-file__3ftOJ","has-validation":"auth-styles_has-validation__2_Ce9","input-group-prepend":"auth-styles_input-group-prepend__1qaRA","input-group-append":"auth-styles_input-group-append__3pS8K","input-group-text":"auth-styles_input-group-text__1Qb29","input-group-lg":"auth-styles_input-group-lg__1wXEc","input-group-sm":"auth-styles_input-group-sm__18rhn","text-monospace":"auth-styles_text-monospace__1X9A_","text-justify":"auth-styles_text-justify__10_Ve","text-wrap":"auth-styles_text-wrap__1WwEN","text-nowrap":"auth-styles_text-nowrap__1brBE","text-truncate":"auth-styles_text-truncate__2sYj6","text-left":"auth-styles_text-left__2Svts","text-right":"auth-styles_text-right__2_2vI","text-center":"auth-styles_text-center__1z62y","text-sm-left":"auth-styles_text-sm-left__rDHNS","text-sm-right":"auth-styles_text-sm-right__2Q3uT","text-sm-center":"auth-styles_text-sm-center__14hl_","text-md-left":"auth-styles_text-md-left__3qN5c","text-md-right":"auth-styles_text-md-right__2_J53","text-md-center":"auth-styles_text-md-center__35czq","text-lg-left":"auth-styles_text-lg-left__2hmZb","text-lg-right":"auth-styles_text-lg-right__3ow46","text-lg-center":"auth-styles_text-lg-center__1c_KS","text-xl-left":"auth-styles_text-xl-left__GAexL","text-xl-right":"auth-styles_text-xl-right__1lwhB","text-xl-center":"auth-styles_text-xl-center__1Y5yA","text-lowercase":"auth-styles_text-lowercase__2WcMH","text-uppercase":"auth-styles_text-uppercase__EUzPY","text-capitalize":"auth-styles_text-capitalize__2JLp5","font-weight-light":"auth-styles_font-weight-light__OLEh9","font-weight-lighter":"auth-styles_font-weight-lighter__sWCNg","font-weight-normal":"auth-styles_font-weight-normal__229q5","font-weight-bold":"auth-styles_font-weight-bold__1pMRf","font-weight-bolder":"auth-styles_font-weight-bolder__95d11","font-italic":"auth-styles_font-italic__2jtAw","text-white":"auth-styles_text-white__1N8Wd","text-primary":"auth-styles_text-primary__1qUwM","text-secondary":"auth-styles_text-secondary__2B2Ge","text-success":"auth-styles_text-success__3b9Jf","text-info":"auth-styles_text-info__jr8Pv","text-warning":"auth-styles_text-warning__3P8Kl","text-danger":"auth-styles_text-danger__eLgOG","text-light":"auth-styles_text-light__33Ovy","text-dark":"auth-styles_text-dark__RWLO_","text-body":"auth-styles_text-body__3rlQl","text-muted":"auth-styles_text-muted__20KiX","text-black-50":"auth-styles_text-black-50__3ivKm","text-white-50":"auth-styles_text-white-50__1hVag","text-hide":"auth-styles_text-hide__3xzc6","text-decoration-none":"auth-styles_text-decoration-none__3NGqL","text-break":"auth-styles_text-break__2ghoE","text-reset":"auth-styles_text-reset__2elij"});

/***/ }),

/***/ 59961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63573);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_4_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 89526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseContext": () => (/* binding */ FirebaseContext),
/* harmony export */   "useFirebase": () => (/* binding */ useFirebase),
/* harmony export */   "useFirebaseProject": () => (/* binding */ useFirebaseProject)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49748);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32094);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78790);



 // simple switch returning the config for one one of meddbriefer.orgs firebase projects,
// defaults to 'MedDebriefer' (production)

function getProjectConfig(projectName) {
  switch (projectName) {
    case "PamDev":
      return {
        apiKey: "AIzaSyB9eVT-fu4TOjxHoPAXqsnz9tCcbTJkTOw",
        authDomain: "pamdev-ea800.firebaseapp.com",
        projectId: "pamdev-ea800",
        storageBucket: "pamdev-ea800.appspot.com",
        messagingSenderId: "366450927885",
        appId: "1:366450927885:web:caa5f022ef1de182a0e844",
        measurementId: "G-JC5XZEPYT1"
      };

    case "ScottDev":
      return {
        apiKey: "AIzaSyBEhbIdVW2F2vvvfvpNb2SsCDP9Yoc__z8",
        authDomain: "scottdev-f6528.firebaseapp.com",
        projectId: "scottdev-f6528",
        storageBucket: "scottdev-f6528.appspot.com",
        messagingSenderId: "447730403122",
        appId: "1:447730403122:web:1727020dbac4ad4cf6f92b"
      };

    case "MedDBriefer-dev":
      return {
        apiKey: "AIzaSyBqnEMwEstp4D7Mvtbw9OTAiNJ7qza0Ses",
        authDomain: "meddbriefer-dev.firebaseapp.com",
        projectId: "meddbriefer-dev",
        storageBucket: "meddbriefer-dev.appspot.com",
        messagingSenderId: "144940722070",
        appId: "1:144940722070:web:4de179ebb58d84a7679fb7"
      };

    default:
      //MedDBriefer (production)
      return {
        apiKey: "AIzaSyBOgWAbXUGckpad2sk0IUo00hZsV4WxG0E",
        authDomain: "meddbriefer-68cd4.firebaseapp.com",
        projectId: "meddbriefer-68cd4",
        storageBucket: "meddbriefer-68cd4.appspot.com",
        messagingSenderId: "1087114796018",
        appId: "1:1087114796018:web:679fbab38dbf78af0ce96b",
        measurementId: "G-Q7QZKC9KHW"
      };
  }
}

const getApp = appID => {
  const matches = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].apps.filter(app => app.options.appId === appID); // console.log("matches", matches)

  return matches.length === 1 ? matches[0] : null;
};

const getOrInitializeApp = appCfg => {
  const app = getApp(appCfg.appId); // simply log which project is initialized (or about to be)

  console.log(`using ${appCfg.projectId}`); // console.log(`${appCfg.appId} already exists: ${!!app}`)

  return app ? app : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(appCfg, appCfg.projectId);
};

function useFirebaseProject(projectName = "MedDBriefer") {
  // don't reinitialize app if it already exists
  //   projectName comes from App process.env.NX_FIREBASE_PROJECT
  //
  const projectConfig = getProjectConfig(projectName);
  const firebaseApp = getOrInitializeApp(projectConfig);
  return {
    auth: firebaseApp.auth(),
    db: firebaseApp.firestore()
  };
} // to inject firebase app into child react components

const FirebaseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  auth: undefined,
  db: undefined
}); // for child react components to access the firebase app

const useFirebase = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FirebaseContext);

/***/ }),

/***/ 95558:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANALYSIS_TYPES": () => (/* binding */ ANALYSIS_TYPES),
/* harmony export */   "ANSWER": () => (/* binding */ ANSWER),
/* harmony export */   "ASSESS": () => (/* binding */ ASSESS),
/* harmony export */   "ASSESSO": () => (/* binding */ ASSESSO),
/* harmony export */   "ASSESS_OPTION": () => (/* binding */ ASSESS_OPTION),
/* harmony export */   "AWO": () => (/* binding */ AWO),
/* harmony export */   "CB": () => (/* binding */ CB),
/* harmony export */   "CHECKLIST_STEP_TYPES": () => (/* binding */ CHECKLIST_STEP_TYPES),
/* harmony export */   "CL_HEADING": () => (/* binding */ CL_HEADING),
/* harmony export */   "CL_PROMPT": () => (/* binding */ CL_PROMPT),
/* harmony export */   "CRIT_FAIL": () => (/* binding */ CRIT_FAIL),
/* harmony export */   "DECISION": () => (/* binding */ DECISION),
/* harmony export */   "DECISION_OPTION": () => (/* binding */ DECISION_OPTION),
/* harmony export */   "DIST_PROMPT": () => (/* binding */ DIST_PROMPT),
/* harmony export */   "HEADING": () => (/* binding */ HEADING),
/* harmony export */   "INTERV": () => (/* binding */ INTERV),
/* harmony export */   "INTV_FORM": () => (/* binding */ INTV_FORM),
/* harmony export */   "MDB_TYPES": () => (/* binding */ MDB_TYPES),
/* harmony export */   "NESTED_CHECKLIST": () => (/* binding */ NESTED_CHECKLIST),
/* harmony export */   "NONE": () => (/* binding */ NONE),
/* harmony export */   "ONE": () => (/* binding */ ONE),
/* harmony export */   "OOM": () => (/* binding */ OOM),
/* harmony export */   "OPTION": () => (/* binding */ OPTION),
/* harmony export */   "OPTION_TYPES": () => (/* binding */ OPTION_TYPES),
/* harmony export */   "PHASE": () => (/* binding */ PHASE),
/* harmony export */   "PREFIXES": () => (/* binding */ PREFIXES),
/* harmony export */   "PROMPT": () => (/* binding */ PROMPT),
/* harmony export */   "PROMPT_SET": () => (/* binding */ PROMPT_SET),
/* harmony export */   "PROTOCOL_RELATIONSHIPS": () => (/* binding */ PROTOCOL_RELATIONSHIPS),
/* harmony export */   "REQUIRED": () => (/* binding */ REQUIRED),
/* harmony export */   "REQURED": () => (/* binding */ REQURED),
/* harmony export */   "SELECTION_TYPES": () => (/* binding */ SELECTION_TYPES),
/* harmony export */   "SELECTION_TYPE_LABELS": () => (/* binding */ SELECTION_TYPE_LABELS),
/* harmony export */   "SUB_PHASE": () => (/* binding */ SUB_PHASE),
/* harmony export */   "SYSTEMS": () => (/* binding */ SYSTEMS),
/* harmony export */   "SYSTEM_LABELS": () => (/* binding */ SYSTEM_LABELS)
/* harmony export */ });
// the following constants are deprecated (need to figure out how to handle this)
// use MDB_TYPES, SELECTION_TYPES, PREFIXES, and SYSTEMS instead
const ANSWER = "answer";
const ASSESS = "assessment";
const ASSESSO = "assessment-option";
const ASSESS_OPTION = "assessment-option";
const AWO = "assessment-with-options";
const CB = "checkbox";
const CL_HEADING = "checklist-heading";
const CL_PROMPT = "checklist-prompt";
const CRIT_FAIL = "critical-criteria";
const DECISION = "decision";
const DECISION_OPTION = "decision-option";
const DIST_PROMPT = "distinguishing-prompt";
const HEADING = "heading"; //not a leaf node, simply a step which has child steps

const INTERV = "intervention"; // an action performed on the patient

const INTV_FORM = "intervention-form";
const NESTED_CHECKLIST = "nested-checklist";
const NONE = "none";
const ONE = "one";
const OOM = "one-or-more";
const OPTION = "option";
const PHASE = "phase";
const PROMPT = "prompt";
const PROMPT_SET = "prompt-set";
const REQUIRED = "required-action"; // an action the EMT performs, but not on the patient
// keeping as I had a typo. need to deprecate somehow

const REQURED = REQUIRED;
const SUB_PHASE = "sub-phase";
const MDB_TYPES = Object.freeze({
  PHASE: PHASE,
  SUB_PHASE: SUB_PHASE,
  ASSESS: ASSESS,
  AWO: AWO,
  ASSESS_OPTION: ASSESS_OPTION,
  ASSESSO: ASSESS_OPTION,
  CL_HEADING: CL_HEADING,
  CL_PROMPT: CL_PROMPT,
  DECISION: DECISION,
  DECISION_OPTION: DECISION_OPTION,
  DIST_PROMPT: DIST_PROMPT,
  NESTED_CHECKLIST: NESTED_CHECKLIST,
  REQUIRED: REQUIRED,
  REQURED: REQUIRED,
  INTERV: INTERV,
  PROMPT_SET: PROMPT_SET,
  PROMPT: PROMPT,
  ANSWER: ANSWER
});
const SELECTION_TYPES = Object.freeze({
  ONE: ONE,
  OOM: OOM,
  NONE: NONE
});
const SELECTION_TYPE_LABELS = Object.freeze({
  ONE: "One",
  OOM: "One or more",
  NONE: "None"
});
const PREFIXES = Object.freeze({
  PHASE: "",
  SUB_PHASE: "",
  ANSWER: "answer-",
  ASSESS: "assess-",
  AWO: "assessment-with-options-",
  ASSESS_OPTION: "assess-option-",
  CL_PROMPT: "cl-prompt-",
  DECISION: "decision-",
  DECISION_OPTION: "decision-option-",
  INTERV: "intv-",
  PROMPT_SET: "prompt-set-",
  PROMPT: "prompt-",
  REQUIRED: "required-action-"
});
const SYSTEMS = Object.freeze({
  AW: "airway",
  BR: "breathing",
  BL: "bleeding",
  SH: "shock"
});
const SYSTEM_LABELS = Object.freeze({
  AW: "Airway",
  BR: "Breathing",
  BL: "Bleeding",
  SH: "Shock"
});
const CHECKLIST_STEP_TYPES = [ASSESS, AWO, DECISION, REQUIRED];
const OPTION_TYPES = [ASSESS_OPTION, DECISION_OPTION];
const ANALYSIS_TYPES = [ASSESS, AWO, DECISION, REQUIRED, INTERV, PHASE, SUB_PHASE];
const PROTOCOL_RELATIONSHIPS = Object.freeze({
  NONE: "",
  MIN: "minimal",
  OPT: "optional",
  REQ: "required",
  CONTRA: "contraindicated",
  UNN: "unnecessary",
  IR: "irrelevant",
  ALT: "alternative"
});

/***/ }),

/***/ 48913:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInterventionVariant": () => (/* binding */ createInterventionVariant),
/* harmony export */   "deleteAndArchiveDocument": () => (/* binding */ deleteAndArchiveDocument),
/* harmony export */   "deleteCommentDocument": () => (/* binding */ deleteCommentDocument),
/* harmony export */   "deleteDocument": () => (/* binding */ deleteDocument),
/* harmony export */   "deleteDocumentNoArchive": () => (/* binding */ deleteDocumentNoArchive),
/* harmony export */   "deleteObsAndAnaDocuments": () => (/* binding */ deleteObsAndAnaDocuments),
/* harmony export */   "getCollection": () => (/* binding */ getCollection),
/* harmony export */   "getDebriefCommentLog": () => (/* binding */ getDebriefCommentLog),
/* harmony export */   "getDebriefCommentLogs": () => (/* binding */ getDebriefCommentLogs),
/* harmony export */   "getDebriefLog": () => (/* binding */ getDebriefLog),
/* harmony export */   "getDebriefLogWithName": () => (/* binding */ getDebriefLogWithName),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getDocumentWithName": () => (/* binding */ getDocumentWithName),
/* harmony export */   "getLog": () => (/* binding */ getLog),
/* harmony export */   "getLogs": () => (/* binding */ getLogs),
/* harmony export */   "getPromptAndOptions": () => (/* binding */ getPromptAndOptions),
/* harmony export */   "getPubScenarios": () => (/* binding */ getPubScenarios),
/* harmony export */   "getPublishedScenarioByID": () => (/* binding */ getPublishedScenarioByID),
/* harmony export */   "getPublishedScenarioObjectByID": () => (/* binding */ getPublishedScenarioObjectByID),
/* harmony export */   "getScenarioByID": () => (/* binding */ getScenarioByID),
/* harmony export */   "getScenarioByName": () => (/* binding */ getScenarioByName),
/* harmony export */   "getScenarioType": () => (/* binding */ getScenarioType),
/* harmony export */   "getScenarioTypeByID": () => (/* binding */ getScenarioTypeByID),
/* harmony export */   "getScenarioTypeObject": () => (/* binding */ getScenarioTypeObject),
/* harmony export */   "getScenarioTypeObjectByID": () => (/* binding */ getScenarioTypeObjectByID),
/* harmony export */   "getScenarios": () => (/* binding */ getScenarios),
/* harmony export */   "interventionVariantsAreEqual": () => (/* binding */ interventionVariantsAreEqual),
/* harmony export */   "intvVariant2JSON": () => (/* binding */ intvVariant2JSON),
/* harmony export */   "listDocumentNames": () => (/* binding */ listDocumentNames),
/* harmony export */   "loadIntvPromptAnswers": () => (/* binding */ loadIntvPromptAnswers),
/* harmony export */   "loadIntvPrompts": () => (/* binding */ loadIntvPrompts),
/* harmony export */   "loadIntvs": () => (/* binding */ loadIntvs),
/* harmony export */   "publishDocument": () => (/* binding */ publishDocument),
/* harmony export */   "saveDocument": () => (/* binding */ saveDocument),
/* harmony export */   "updateDocument": () => (/* binding */ updateDocument),
/* harmony export */   "verifyDocNameUniqueness": () => (/* binding */ verifyDocNameUniqueness),
/* harmony export */   "verifyDocument": () => (/* binding */ verifyDocument)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76635);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22117);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95558);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7237);
/* harmony import */ var _intvs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84028);
/* harmony import */ var _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53836);
/* harmony import */ var _intvPromptAnswers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37246);
/* harmony import */ var _intvMenusCats_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(838);
/* harmony import */ var _intvMenuItems_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11722);



 // the rest of these imports can go away soon. simply allows me to delete objects form the db
// and reload with files. not used if records exist in db






const loadIntvs = () => {
  const tmp = _intvs_js__WEBPACK_IMPORTED_MODULE_4__["default"].map(e => {
    const rec = { ...e
    };

    if (!e.abbrLabel) {
      rec.abbrLabel = e.label;
    }

    if (!e.distPrompts) {
      rec.distPrompts = [];
    }

    if (!e.prompts) {
      rec.prompts = [];
    }

    return rec;
  });
  return tmp;
};
const loadIntvPrompts = () => {
  const tmp = _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__["default"].map(e => {
    const rec = { ...e
    };

    if (!!e.interventionID) {
      const found = _intvs_js__WEBPACK_IMPORTED_MODULE_4__["default"].find(i => i.id === e.interventionID);

      if (!found) {
        console.log(`loadIntvPrompts(${e.id}) ${e.interventionID} not found`);
      }
    }

    if (!e.abbrLabel) {
      rec.abbrLabel = "";
    }

    if (!e.feedback) {
      rec.feedback = rec.label;
    }

    if (!e.answers) {
      rec.answers = [];
    }

    return rec;
  });
  return tmp;
};
const loadIntvPromptAnswers = () => {
  const tmp = _intvPromptAnswers_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(e => {
    if (!e.abbrLabel) {
      e.abbrLabel = "";
    }

    const found = _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(p => p.id === e.promptID);

    if (!found) {
      console.log(`loadIntvPromptAnswers(${e.id}) ${e.promptID} not found`);
    }

    return e;
  });
  return tmp;
};
const getScenarios = (db, scenarioType, schemaVersion) => {
  const query = db.collection("scenarios").where("scenarioType", "==", scenarioType).where("schemaVersion", "==", schemaVersion);
  return query.get().then(snapShot => {
    const scenarios = [];

    if (snapShot.size > 0) {
      snapShot.docs.forEach(doc => {
        const data = doc.data();
        scenarios.push({
          id: data.id,
          name: data.name,
          scenarioType: data.scenarioType,
          schemaVersion: data.schemaVersion
        });
      });
    }

    return scenarios;
  });
};
const getPublishedScenarioObjectByID = async (db, scenarioID) => {
  const data = await getPublishedScenarioByID(db, scenarioID);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.PublishedScenario(data);
};
const getPublishedScenarioByID = (db, scenarioID) => {
  return db.collection("published-scenarios").doc(scenarioID).get().then(doc => doc.data());
};
const getScenarioByID = (db, scenarioID) => {
  return db.collection("scenarios").doc(scenarioID).get().then(doc => doc.data());
};
const getScenarioByName = (db, scenarioName, schemaVersion) => {
  return db.collection("scenarios").where("name", "==", scenarioName).where("schemaVersion", "==", schemaVersion).limit(1).get().then(snapShot => {
    if (snapShot.size === 1) {
      return snapShot.docs[0].data();
    } else {
      throw new Error("document not found");
    }
  });
};

const addMissingScenarioTypeFields = scenTypeData => {
  const msgs = [];

  if (!scenTypeData.interventions) {
    msgs.push("loading intvs from file");
    scenTypeData.interventions = loadIntvs();
  }

  if (!scenTypeData.interventionPrompts) {
    const errs = [];
    const tmpPrompts = loadIntvPrompts();
    tmpPrompts.forEach(e => {
      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.PROMPT) {
        // ignore this check if distinguishing prompt (not associated with a single intv)
        if (undefined === scenTypeData.interventions.find(rec => rec.id === e.interventionID)) {
          errs.push(`bad interventionID ${e.interventionID}`);
        }
      }
    });
    let msg = "loading intv prompts from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionPrompts = tmpPrompts;
  }

  if (!scenTypeData.interventionPromptAnswers) {
    const errs = [];
    const tmpPromptAnswers = loadIntvPromptAnswers();
    tmpPromptAnswers.forEach(e => {
      if (undefined === scenTypeData.interventionPrompts.find(rec => rec.id === e.promptID)) {
        errs.push(`bad promptID ${e.promptID}`);
      }
    });
    let msg = "loading intv prompt answers from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionPromptAnswers = tmpPromptAnswers;
  }

  if (!scenTypeData.interventionMenuCategories) {
    msgs.push("loading intv menu categories from file");
    scenTypeData.interventionMenuCategories = _intvMenusCats_js__WEBPACK_IMPORTED_MODULE_7__["default"];
  }

  if (!scenTypeData.interventionMenuItems) {
    const errs = [];
    const tmpIntvMenuItems = _intvMenuItems_js__WEBPACK_IMPORTED_MODULE_8__["default"].map(e => {
      const found = scenTypeData.interventionMenuCategories.find(cat => cat.id === e.intvCategoryID);

      if (!found) {
        errs.push(`bad intvCategoryID ${e.intvCategoryID}`);
      } else {
        if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.INTERV) {
          const intv = scenTypeData.interventions.find(i => i.id === e.interventionID);

          if (!intv) {
            errs.push(`bad interventionID ${e.interventionID}`);
          } else {
            e.label = intv.label;
          }
        }

        return e;
      }
    });
    let msg = "loading intv menu items from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionMenuItems = tmpIntvMenuItems;
  }

  if (msgs.length > 0) {
    msgs.forEach(m => console.log(m));
  } else {
    console.log("all data loaded from db. files not needed");
  }

  return scenTypeData;
};

const getScenarioTypeObjectByID = async (db, scenarioTypeID) => {
  const data = await getScenarioTypeByID(db, scenarioTypeID);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType(data);
};
const getScenarioTypeObject = async (db, scenarioType, schemaVersion) => {
  const data = await getScenarioType(db, scenarioType, schemaVersion);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType(data);
};
const getScenarioTypeByID = (db, scenarioTypeID) => {
  return db.collection("scenario-types").doc(scenarioTypeID).get().then(doc => {
    const data = doc.data();
    data.id = doc.id;
    return addMissingScenarioTypeFields(data);
  }).catch(error => {
    console.log(error);
    return error;
  });
};
const getScenarioType = (db, scenarioType, schemaVersion) => {
  return db.collection("scenario-types").where("name", "==", scenarioType).where("schemaVersion", "==", schemaVersion).limit(1).get().then(snapShot => {
    if (snapShot.size === 1) {
      return addMissingScenarioTypeFields(snapShot.docs[0].data());
    } else {
      throw new Error("document not found");
    }
  });
}; // FIXME: this needs to go away, although I need to figure out if it's in use anywhere first

const getPromptAndOptions = (scenarioTypeOrPubScenario, promptID) => {
  const scenType = scenarioTypeOrPubScenario;
  const prompt = scenType.interventionPrompts.find(e => e.id === promptID);

  if (!!prompt) {
    const options = prompt.answers.map(ansID => scenType.interventionPromptAnswers.find(a => a.id === ansID));
    prompt.options = options.map(opt => {
      return { ...opt,
        prompt: prompt.label
      };
    });
  }

  return prompt;
}; // moved over from apps/data-entry/src/scripts/connect-firebase
// added 'db' as first param so that these functions can be used either from web or server firebase APIs

/**
 * Verify document doesn't already exist in database.
 * @param {object} db instance
 * @param {string} collectionId
 * @param {string} documentId
 * @returns True if document with given ID doesn't exist yet.
 */

const verifyDocument = async (db, collectionId, documentId) => {
  const set = await db.collection(collectionId).where("id", "==", `${documentId}`).get();
  return set.empty;
}; // returns true if combo of name and schemaVersion fields is unique

const verifyDocNameUniqueness = async (db, collectionID, candidateName, dbNameField, schemaVersion) => {
  const snapshot = await db.collection(collectionID).where(dbNameField, "==", candidateName).where("schemaVersion", "==", schemaVersion).get();
  return snapshot.empty;
}; // Upload document object to database

const publishDocument = async (db, collectionId, documentObject, documentId) => {
  documentId ? await db.collection(collectionId).doc(documentId).set(documentObject) : await db.collection(collectionId).doc().set(documentObject);
}; // Update document with given id

const updateDocument = async (db, collectionId, documentId, documentObject) => {
  const set = await db.collection(collectionId).where("id", "==", `${documentId}`).get();
  set.empty ? publishDocument(collectionId, documentObject) : await db.collection(collectionId).doc(set.docs[0].id).set(documentObject);
};
/**
 * Will save document, using auto-generated IDs if documentObject doesn't have
 * an 'id' attribute.
 * @param {object} db instance
 * @param {string} collectionId
 * @param {object} documentObject
 */

const saveDocument = async (db, collectionId, documentObject) => {
  const doc = !documentObject.id ? db.collection(collectionId).doc() : db.collection(collectionId).doc(documentObject.id);
  documentObject.id = doc.id;
  await doc.set(documentObject);
  return documentObject.id;
};
/**
 * Query collection for document with id
 * @param {object} db instance
 * @param {string} collectionId
 * @param {string} documentId
 * @returns {object} Object containing document data.
 */

const getDocument = async (db, collectionId, documentId) => {
  const doc = await db.collection(collectionId).doc(documentId).get();
  return doc.data();
};
/**
 * Query collection for document with name
 * @param {string} collectionId
 * @param {string} documentName
 * @returns {object} Object containing document data.
 */

const getDocumentWithName = async (db, collectionId, documentName) => {
  const set = await db.collection(collectionId).where("name", "==", `${documentName}`).get();
  return set.docs[0]?.data();
};
/**
 * Delete document from collectio
 * @param {string} collectionId
 * @param {string} documentId
 */

const deleteDocument = async (db, collectionId, documentId) => {
  await db.collection(collectionId).doc(documentId).delete();
};
const deleteAndArchiveDocument = async (db, collectionId, documentId) => {
  if (window.confirm("Are you sure you want to delete this file?  It will be archived but you will need help to retrieve it.")) {
    const data = await getDocument(db, collectionId, documentId);
    let archiveId = "archive-" + collectionId;
    saveDocument(db, archiveId, data);
    deleteDocument(db, collectionId, documentId);
  }
};
const deleteDocumentNoArchive = async (db, collectionId, documentId) => {
  if (window.confirm("Are you sure you want to delete this file?")) {
    await db.collection(collectionId).doc(documentId).delete();
  }

  ;
};
const deleteObsAndAnaDocuments = (db, id) => {
  deleteAndArchiveDocument(db, "logs", id);
  deleteDocument(db, "debriefing-feedback-logs", id);
};
const deleteCommentDocument = (db, id) => {
  deleteAndArchiveDocument(db, "debriefing-comment-logs", id);
};
/**
 * Pull collection from database as array of document objects
 * @param {string} collectionId
 * @returns {object[]} An array containing all of the document in the collection.
 */

const getCollection = async (db, collectionId) => {
  const collection = await db.collection(collectionId).get();
  return collection.docs?.map(item => item.data());
}; // copied over from /apps/debriefer/src/scripts/connect-firebase and 'db' param added as first param
// Get a list of document names and a copy of each document

const listDocumentNames = async (db, collectionId) => {
  let documentList = db.collectionGroup(collectionId);
  let documentDictionary = {};
  documentList.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      documentDictionary[doc.id] = doc.data();
    });
  });
  return documentDictionary;
};
const getLogs = db => {
  return db.collection("logs").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        scenario: data.scenarioName,
        scenarioID: data.scenarioID,
        userName: data.userName,
        timestamp: data.timestamp
      };
    });
  });
};
const getPubScenarios = db => {
  let results = [];
  return db.collection("published-scenarios").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        version: data.version
      };
    });
  });
};
const getDebriefCommentLogs = db => {
  return db.collection("debriefing-comment-logs").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        scenario: data.scenarioName,
        scenarioID: data.scenarioID,
        commenter: data.commenter,
        timestamp: data.timestamp
      };
    });
  });
};
const getLog = (db, logID) => {
  return db.collection("logs").doc(logID).get().then(doc => {
    const data = doc.data();
    data.id = doc.id; //let scenario = data.scenario;   //temporary until DB scenario name is fixed but won't hurt anything
    //scenario = scenario.replace("PHTC ","");  //temporary until DB scenario name is fixed but won't hurt anything
    //data.scenario = scenario;

    return data;
  });
};
const getDebriefLog = (db, logID) => {
  return db.collection("debriefing-feedback-logs").doc(logID).get().then(doc => {
    const data = doc.data();
    data.id = doc.id; //let scenario = data.scenario;   //temporary until DB scenario name is fixed but won't hurt anything
    //scenario = scenario.replace("PHTC ","");  //temporary until DB scenario name is fixed but won't hurt anything
    //data.scenario = scenario;

    return data;
  });
};
const getDebriefCommentLog = (db, logID) => {
  return db.collection("debriefing-comment-logs").doc(logID).get().then(doc => {
    const data = doc.data();
    data.id = doc.id; //let scenario = data.scenario;   //temporary until DB scenario name is fixed but won't hurt anything
    //scenario = scenario.replace("PHTC ","");  //temporary until DB scenario name is fixed but won't hurt anything
    //data.scenario = scenario;

    return data;
  });
};
const getDebriefLogWithName = async (db, documentName) => {
  const set = await db.collection("debriefing-feedback-logs").where("ObserverFileName", "==", `${documentName}`).get();
  return set.docs[0]?.data();
};
const createInterventionVariant = distPromptIds2OptIds => {
  // the list of opt IDs mapped to each distPromptID needs to be sorted in order
  // to make them comparable
  const retVal = {};
  Object.entries(distPromptIds2OptIds).forEach(([distPromptID, optionsArray]) => {
    retVal[distPromptID] = optionsArray.sort();
  });
  return retVal;
};
const interventionVariantsAreEqual = (intvVariant1, intvVariant2) => {
  return lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual(intvVariant1, intvVariant2);
};
const intvVariant2JSON = intvVariant => {
  return json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__(intvVariant);
};

/***/ }),

/***/ 11722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_MENU_ITEMS = [{
  "depth": 1,
  "type": "heading",
  "id": "heading-als",
  "label": "ALS",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-amputation",
  "label": "Manage amputation",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-bls",
  "label": "BLS",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-crico",
  "label": "Cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-establish-patency",
  "label": "Establish patency",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-insert-adjunct",
  "label": "Insert adjunct",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-intubation",
  "label": "Intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-manage-internal-bleeding",
  "label": "Manage suspected internal bleeding",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-manage-shock",
  "label": "Manage hemorrhagic shock",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 3,
  "type": "heading",
  "id": "heading-medication-facilitated-intubation",
  "label": "Medication Facilitated Intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-open-airway",
  "label": "Open airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "heading",
  "id": "heading-remove-foreign-body-obstructions",
  "label": "Remove foreign body obstructions",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-severe-external-bleeding",
  "label": "Manage severe external bleeding",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-transfer",
  "label": "Transfer patient to EMS vehicle",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-transport",
  "label": "Transport to care facility",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-advanced-airway-adjunct",
  interventionID: "intv-advanced-airway-adjunct",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-airway-patency-technique-suction-airway",
  interventionID: "intv-airway-patency-technique-suction-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-apply-sterile-dressings",
  interventionID: "intv-apply-sterile-dressings",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-back-blows-and-chest-thrusts",
  interventionID: "intv-back-blows-and-chest-thrusts",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-direct-pressure",
  interventionID: "intv-control-severe-bleeding-technique-direct-pressure",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-tourniquet",
  interventionID: "intv-control-severe-bleeding-technique-tourniquet",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-2nd-tourniquet",
  interventionID: "intv-control-severe-bleeding-technique-2nd-tourniquet",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-pack-wound-with-gauze",
  interventionID: "intv-control-severe-bleeding-technique-pack-wound-with-gauze",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-pressure-bandage",
  interventionID: "intv-control-severe-bleeding-technique-pressure-bandage",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-load-and-go",
  interventionID: "intv-control-severe-bleeding-technique-load-and-go",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-keep-patient-warm",
  interventionID: "intv-control-shock-technique-keep-patient-warm",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-administer-high-concentration-o2",
  interventionID: "intv-control-shock-technique-administer-high-concentration-o2",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-place-patient-supine-position",
  interventionID: "intv-control-shock-technique-place-patient-supine-position",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-administer-iv-boluses",
  interventionID: "intv-control-shock-technique-administer-iv-boluses",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-heimlich-maneuver",
  interventionID: "intv-heimlich-maneuver",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-keep-body-part-cool",
  interventionID: "intv-keep-body-part-cool",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-magill-forceps-assisted",
  interventionID: "intv-magill-forceps-assisted",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-manual-finger-sweep",
  interventionID: "intv-manual-finger-sweep",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-nasopharyngeal-airway",
  interventionID: "intv-nasopharyngeal-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-needle-cricothyrotomy",
  interventionID: "intv-needle-cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-occlusive-dressing",
  interventionID: "intv-occlusive-dressing",
  intvCategoryID: "intv-cat-manage-thoracic-trauma"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-open-airway-method-head-tilt",
  interventionID: "intv-open-airway-method-head-tilt",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-open-airway-method-modified-jaw-thrust",
  interventionID: "intv-open-airway-method-modified-jaw-thrust",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-oropharyngeal-airway",
  interventionID: "intv-oropharyngeal-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-orotracheal-intubation",
  interventionID: "intv-orotracheal-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-place-body-part-in-bag",
  interventionID: "intv-place-body-part-in-bag",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-place-immobilized-patient-on-stretcher",
  interventionID: "intv-place-immobilized-patient-on-stretcher",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-pleural-decompression",
  interventionID: "intv-pleural-decompression",
  intvCategoryID: "intv-cat-manage-thoracic-trauma"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-prepare-and-administer-pain-nausea-vomiting-medications",
  interventionID: "intv-prepare-and-administer-pain-nausea-vomiting-medications",
  intvCategoryID: "intv-cat-manage-pain-nausea-vomiting"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-prepare-and-administer-sedative",
  interventionID: "intv-prepare-and-administer-sedative",
  intvCategoryID: "intv-cat-sedate-agitated-or-combatitive-patient"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-retrieve-amputated-body-part",
  interventionID: "intv-retrieve-amputated-body-part",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-sedation-assisted-intubation",
  interventionID: "intv-sedation-assisted-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-slat",
  interventionID: "intv-slat",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-attach-cid",
  interventionID: "intv-spinal-immobilization-technique-attach-cid",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-cervical-collar",
  interventionID: "intv-spinal-immobilization-technique-cervical-collar",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-manual-c-spine",
  interventionID: "intv-spinal-immobilization-technique-manual-c-spine",
  intvCategoryID: "intv-cat-manual-c-spine-stabilization"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-manual-c-spine2",
  interventionID: "intv-spinal-immobilization-technique-manual-c-spine",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-transfer-to-device",
  interventionID: "intv-spinal-immobilization-technique-transfer-to-device",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-splint-fractures",
  interventionID: "intv-splint-fractures",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-splint-fractures2",
  interventionID: "intv-splint-fractures",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-sterile-dressing-soft-tissue",
  interventionID: "intv-sterile-dressing-soft-tissue",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-supplemental-oxygen-device-nasal-cannula",
  interventionID: "intv-supplemental-oxygen-device-nasal-cannula",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-supplemental-oxygen-device-non-rebreather-mask",
  interventionID: "intv-supplemental-oxygen-device-non-rebreather-mask",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-surgical-cricothyrotomy",
  interventionID: "intv-surgical-cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transfers-patient-method-walk-patient",
  interventionID: "intv-transfers-patient-method-walk-patient",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transfers-patient-method-place-directly-on-stretcher",
  interventionID: "intv-transfers-patient-method-place-directly-on-stretcher",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transport",
  interventionID: "intv-transport",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transport-body-part-to-receiving-facility",
  interventionID: "intv-transport-body-part-to-receiving-facility",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-ventilation-technique-bag-valve-mask",
  interventionID: "intv-ventilation-technique-bag-valve-mask",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-wrap-body-part-in-saline-soaked-gauze",
  interventionID: "intv-wrap-body-part-in-saline-soaked-gauze",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_MENU_ITEMS);

/***/ }),

/***/ 838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_MENU_CATS = [{
  "id": "intv-cat-manual-c-spine-stabilization",
  "label": "Manual c-spine stabilization",
  "items": ["menu-item-spinal-immobilization-technique-manual-c-spine"]
}, {
  "id": "intv-cat-airway",
  "label": "Airway",
  "items": ["heading-bls", "heading-open-airway", "menu-item-open-airway-method-head-tilt", "menu-item-open-airway-method-modified-jaw-thrust", "heading-establish-patency", "menu-item-airway-patency-technique-suction-airway", "heading-remove-foreign-body-obstructions", "menu-item-manual-finger-sweep", "menu-item-magill-forceps-assisted", "menu-item-slat", "menu-item-heimlich-maneuver", "menu-item-back-blows-and-chest-thrusts", "heading-insert-adjunct", "menu-item-oropharyngeal-airway", "menu-item-nasopharyngeal-airway", "heading-als", "heading-intubation", "menu-item-advanced-airway-adjunct", "menu-item-orotracheal-intubation", "menu-item-nasotracheal-intubation", "heading-medication-facilitated-intubation", "menu-item-rapid-sequence-intubation", "menu-item-sedation-assisted-intubation", "heading-crico", "menu-item-needle-cricothyrotomy", "menu-item-surgical-cricothyrotomy"]
}, {
  "id": "intv-cat-manage-oxygenation-and-ventilation",
  "label": "Manage oxygenation and ventilation",
  "items": ["menu-item-supplemental-oxygen-device-nasal-cannula", "menu-item-supplemental-oxygen-device-non-rebreather-mask", "menu-item-ventilation-technique-bag-valve-mask"]
}, {
  "id": "intv-cat-circulation-management",
  "label": "Circulation management",
  "items": ["heading-severe-external-bleeding", "menu-item-control-severe-bleeding-technique-direct-pressure", "menu-item-control-severe-bleeding-technique-tourniquet", "menu-item-control-severe-bleeding-technique-2nd-tourniquet", "menu-item-control-severe-bleeding-technique-pack-wound-with-gauze", "menu-item-control-severe-bleeding-technique-pressure-bandage", "menu-item-control-severe-bleeding-technique-load-and-go", "heading-manage-internal-bleeding", "menu-item-splint-fractures", "heading-manage-shock", "menu-item-control-shock-technique-keep-patient-warm", "menu-item-control-shock-technique-administer-high-concentration-o2", "menu-item-control-shock-technique-place-patient-supine-position", "menu-item-control-shock-technique-administer-iv-boluses"]
}, {
  "id": "intv-cat-manage-thoracic-trauma",
  "label": "Manage thoracic trauma",
  "items": ["menu-item-occlusive-dressing", "menu-item-pleural-decompression"]
}, {
  "id": "intv-cat-spinal-motion-restriction",
  "label": "Spinal motion restriction",
  "items": ["menu-item-spinal-immobilization-technique-manual-c-spine2", "menu-item-spinal-immobilization-technique-cervical-collar", "menu-item-spinal-immobilization-technique-transfer-to-device", "menu-item-spinal-immobilization-technique-attach-cid"]
}, {
  "id": "intv-cat-extrication-and-transport",
  "label": "Extrication and transport",
  "items": ["heading-transfer", "menu-item-transfers-patient-method-walk-patient", "menu-item-transfers-patient-method-place-directly-on-stretcher", "menu-item-place-immobilized-patient-on-stretcher", "heading-transport", "menu-item-transport"]
}, {
  "id": "intv-cat-manage-wounds-and-specific-injuries",
  "label": "Manage wounds and specific injuries",
  "items": ["menu-item-apply-sterile-dressings", "menu-item-splint-fractures2", "heading-amputation", "menu-item-sterile-dressing-soft-tissue", "menu-item-retrieve-amputated-body-part", "menu-item-wrap-body-part-in-saline-soaked-gauze", "menu-item-place-body-part-in-bag", "menu-item-keep-body-part-cool", "menu-item-transport-body-part-to-receiving-facility"]
}, {
  "id": "intv-cat-manage-pain-nausea-vomiting",
  "label": "Manage pain, nausea, vomiting",
  "items": ["menu-item-prepare-and-administer-pain-nausea-vomiting-medications"]
}, {
  "id": "intv-cat-sedate-agitated-or-combatitive-patient",
  "label": "Sedate agitated or combatitive patient",
  "items": ["menu-item-prepare-and-administer-sedative"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_MENU_CATS);

/***/ }),

/***/ 37246:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_PROMPT_ANSWERS = [{
  id: "answer-wound-location-head",
  label: "Wound located at head",
  abbrLabel: "Head",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-neck",
  label: "Wound located at neck",
  abbrLabel: "Neck",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-chest",
  label: "Wound located at chest",
  abbrLabel: "Chest",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-abdomen-pelvis",
  label: "Wound located at abdomen/pelvis",
  abbrLabel: "Abdomen/Pelvis",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-posterior",
  label: "Wound located at posterior thorax, lumbar, or buttocks",
  abbrLabel: "Posterior",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-genitalia",
  label: "Wound located at genitalia",
  abbrLabel: "Genitalia",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-left-lower-extremity",
  label: "Wound located at left lower extremity",
  abbrLabel: "Left lower extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-right-lower-extremity",
  label: "Wound located at right lower extremity",
  abbrLabel: "Right lower extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-left-upper-extremity",
  label: "Wound located at left upper extremity",
  abbrLabel: "Left upper extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-right-upper-extremity",
  label: "Wound located at right upper extremity",
  abbrLabel: "Right upper-extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-other",
  label: "Other wound location",
  abbrLabel: "Other",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-locations-head",
  label: "Wound located at head",
  abbrLabel: "Head",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-neck",
  label: "Wound located at neck",
  abbrLabel: "Neck",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-chest",
  label: "Wound located at chest",
  abbrLabel: "Chest",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-abdomen-pelvis",
  label: "Wound located at abdomen/pelvis",
  abbrLabel: "Abdomen/Pelvis",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-posterior",
  label: "Wound located at posterior thorax, lumbar, or buttocks",
  abbrLabel: "Posterior",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-genitalia",
  label: "Wound located at genitalia",
  abbrLabel: "Genitalia",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-left-lower-extremity",
  label: "Wound located at left lower extremity",
  abbrLabel: "Left lower extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-right-lower-extremity",
  label: "Wound located at right lower extremity",
  abbrLabel: "Right lower extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-left-upper-extremity",
  label: "Wound located at left upper extremity",
  abbrLabel: "Left upper extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-right-upper-extremity",
  label: "Wound located at right upper extremity",
  abbrLabel: "Right upper-extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-other",
  label: "Other wound location",
  abbrLabel: "Other",
  promptID: "prompt-wound-locations"
}, {
  "id": "answer-airway-patency-suction-yankauer",
  "label": "Yankauer",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-airway-patency-suction-long-multiuse",
  "label": "Long, multiuse",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-airway-patency-suction-other",
  "label": "Other",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-alternative-rescue-airway-type-ett",
  "label": "Endotracheal tube (ETT)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-combitube",
  "label": "Combitube",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-lta",
  "label": "Laryngeal tube airway (LTA; King tube)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-lma",
  "label": "Laryngeal mask airway (LMA)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-igel",
  "label": "Igel",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-other",
  "label": "Other",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-airway-tube-size-7",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "7.0"
}, {
  "id": "answer-alternative-airway-tube-size-8",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "8.0"
}, {
  "id": "answer-alternative-airway-tube-size-age-div-4-plus-4",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "((age/4 + 4))"
}, {
  "id": "answer-alternative-airway-tube-size--age-div-4-plus-4-minus-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "((age/4 + 4) - 5"
}, {
  "id": "answer-alternative-airway-tube-size-37f",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "37F"
}, {
  "id": "answer-alternative-airway-tube-size-41f",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "41F"
}, {
  "id": "answer-alternative-airway-tube-size-0",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "0"
}, {
  "id": "answer-alternative-airway-tube-size-1",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "1"
}, {
  "id": "answer-alternative-airway-tube-size-1-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "1.5"
}, {
  "id": "answer-alternative-airway-tube-size-2",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "2"
}, {
  "id": "answer-alternative-airway-tube-size-2-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "2.5"
}, {
  "id": "answer-alternative-airway-tube-size-3",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "3"
}, {
  "id": "answer-alternative-airway-tube-size-4",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "4"
}, {
  "id": "answer-alternative-airway-tube-size-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "5"
}, {
  "id": "answer-alternative-airway-tube-size-6",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "6"
}, {
  "id": "answer-alternative-airway-tube-size-other",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "Other"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-21cm",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "21cm"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-23cm",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "23cm"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-3-times-tube-size",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "3 x tube size"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-other",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "Other"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-6-to-6-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "6.0 - 6.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-7-to-7-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "7.0 - 7.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus1",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "(age/4 - 4)-1"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus0-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "(age/4 -4) - 0.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-0-5-1cm-less-than-oro-size",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": ".5 - 1cm less then size for orotracheal tube size"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-other",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "Other"
}, {
  "id": "answer-nasal-cannula-flow-rate-1-6-lpm",
  "promptID": "prompt-nasal-cannula-flow-rate",
  "label": "Nasal cannula flow rate 1-6 liters/min",
  "abbrLabel": "1-6 liters/min"
}, {
  "id": "answer-nasal-cannula-flow-rate-other",
  "promptID": "prompt-nasal-cannula-flow-rate",
  "label": "Nasal cannula flow rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-nasal-cannula-target-saturation-gt-90-pct",
  "promptID": "prompt-nasal-cannula-target-saturation",
  "label": "Nasal cannula target saturation: 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-nasal-cannula-target-saturation-other",
  "promptID": "prompt-nasal-cannula-target-saturation",
  "label": "Nasal cannula target saturation: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-non-rebreather-mask-flow-rate-10-15-liters-min",
  "promptID": "prompt-non-rebreather-mask-flow-rate",
  "label": "Non-rebreather mask flow rate 10-15 L/min",
  "abbrLabel": "10-15 L/min"
}, {
  "id": "answer-non-rebreather-mask-flow-rate-other",
  "promptID": "prompt-non-rebreather-mask-flow-rate",
  "label": "Non-rebreather mask flow rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-non-rebreather-mask-target-saturation-gt-90-pct",
  "promptID": "prompt-non-rebreather-mask-target-saturation",
  "label": "Non-rebreather mask target O2 saturation: 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-non-rebreather-mask-target-saturation-other",
  "promptID": "prompt-non-rebreather-mask-target-saturation",
  "label": "Non-rebreather mask target O2 saturation: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-ventilation-rate-10-12-bpm",
  "promptID": "prompt-bvm-ventilation-rate",
  "label": "BVM ventilation rate: 10-12 BPM",
  "abbrLabel": "10-12 breaths/minute"
}, {
  "id": "answer-bvm-ventilation-rate-other",
  "promptID": "prompt-bvm-ventilation-rate",
  "label": "BVM ventilation rate: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-flow-rate-15-ltm-or-gt",
  "promptID": "prompt-bvm-flow-rate",
  "label": "BVM flow rate: 15 liters/min or greater",
  "abbrLabel": "15 liters/min or greater"
}, {
  "id": "answer-bvm-flow-rate-other",
  "promptID": "prompt-bvm-flow-rate",
  "label": "BVM flow rate: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-target-saturation-rate-gt-90-pct",
  "promptID": "prompt-bvm-target-saturation",
  "label": "BVM target O2 saturation rate 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-bvm-target-saturation-rate-other",
  "promptID": "prompt-bvm-target-saturation",
  "label": "BVM target O2 saturation rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-tourniquet-placement-close-to-core-far-from-wound",
  "promptID": "prompt-tourniquet-placement",
  "label": "Tourniquet placement as far from wound and close to the core as possible",
  "abbrLabel": "As far from wound and close to the core as possible"
}, {
  "id": "answer-tourniquet-placement-other",
  "promptID": "prompt-tourniquet-placement",
  "label": "Tourniquet placement other",
  "abbrLabel": "Other"
}, {
  "id": "answer-2nd-tourniquet-placement-adjacent-to-initial-tourniquet",
  "promptID": "prompt-2nd-tourniquet-placement",
  "label": "Second tourniquet location: adjacent to initial tourniquet",
  "abbrLabel": "Adjacent to initial tourniquet"
}, {
  "id": "answer-2nd-tourniquet-placement-other",
  "promptID": "prompt-2nd-tourniquet-placement",
  "label": "Second tourniquet location: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-occulsivive-dressing-injury-type-open-pneumothorax",
  "promptID": "prompt-occlusive-dressing-injury-type",
  "label": "Occlusive dressing injury type: Open pnuemothorax (sucking chest wound)",
  "abbrLabel": "Open pnuemothorax (sucking chest wound)"
}, {
  "id": "answer-occulsivive-dressing-injury-type-other",
  "promptID": "prompt-occlusive-dressing-injury-type",
  "label": "Occlusive dressing injury type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-occulsive-dressing-method-leave-one-side-untaped",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: Leave one side untaped",
  "abbrLabel": "Leave one side untaped"
}, {
  "id": "answer-occulsive-dressing-method-leave-dressing-with-one-way-valve",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: Dressing with one-way valve (e.g. Hyfin chest seal, Asherman chest seal)",
  "abbrLabel": "Dressing with one-way valve (e.g. Hyfin chest seal, Asherman chest seal)"
}, {
  "id": "answer-occulsive-dressing-method-other",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-injury-type-tension-pneumothorax",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: tension pneumothorax",
  "abbrLabel": "Tension pneumothorax"
}, {
  "id": "answer-pleural-decompression-injury-type-open-pneumothorax",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: Open pnuemothorax (sucking chest wound)",
  "abbrLabel": "Open pnuemothorax (sucking chest wound)"
}, {
  "id": "answer-pleural-decompression-injury-type-other",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-placement-side-of-the-body-right",
  "promptID": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "label": "Pleural Decompression needle placement: right side",
  "abbrLabel": "Right"
}, {
  "id": "answer-pleural-decompression-needle-placement-side-of-the-body-left",
  "promptID": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "label": "Pleural Decompression needle placement: left side",
  "abbrLabel": "Left"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-2nd-or-3rd-intercostal-space-mid-clavicular",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: Second or third intercostal space mid-clavicular line",
  "abbrLabel": "Second or third intercostal space mid-clavicular line"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-4th-or-5th-intercostal-space-mid-axillary",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: Fourth or fifth intercostal space mid-axillary line",
  "abbrLabel": "Fourth or fifth intercostal space mid-axillary line"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-other",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-size-large-bore",
  "promptID": "prompt-pleural-decompression-needle-size",
  "label": "Pleural decompression needle size: Large bore (14 or 16 gauge)",
  "abbrLabel": "Large bore (14 or 16 gauge)"
}, {
  "id": "answer-pleural-decompression-needle-size-other",
  "promptID": "prompt-pleural-decompression-needle-size",
  "label": "Pleural decompression needle size: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-length-2-inches-or-longer",
  "promptID": "prompt-pleural-decompression-needle-length",
  "label": "Pleural Decompression needle size: 2 inches or more",
  "abbrLabel": "2 inches or more"
}, {
  "id": "answer-pleural-decompression-needle-length-other",
  "promptID": "prompt-pleural-decompression-needle-length",
  "label": "Pleural Decompression needle size: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-transport-facility-choice-level-1-or-2-trauma-center",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closest level 1 or 2 trauma center",
  "abbrLabel": "Closest level 1 or 2 trauma center"
}, {
  "id": "answer-transport-facility-choice-level-3-or-4-trauma-center",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closet level 3 or 4 trauma center",
  "abbrLabel": "Closet level 3 or 4 trauma center"
}, {
  "id": "answer-transport-facility-choice-closest",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closest receiving facility",
  "abbrLabel": "Closest receiving facility"
}, {
  "id": "answer-transport-facility-choice-other",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-transport-method-ambulance",
  "promptID": "prompt-transport-method",
  "label": "Ambulance",
  "abbrLabel": "Ambulance"
}, {
  "id": "answer-transport-method-helicopter",
  "promptID": "prompt-transport-method",
  "label": "Helicopter",
  "abbrLabel": "Helicopter"
}, {
  "id": "answer-transport-lights-sirens-yes",
  "promptID": "prompt-transport-lights-siren-decision",
  "label": "Use lights and sirens",
  "abbrLabel": "Yes"
}, {
  "id": "answer-transport-lights-sirens-no",
  "promptID": "prompt-transport-lights-siren-decision",
  "label": "Do not use lights and sirens",
  "abbrLabel": "No"
}, {
  "id": "answer-splint-type-board",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Board splint",
  "abbrLabel": "Board splint"
}, {
  "id": "answer-splint-type-moldable",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Moldable splint",
  "abbrLabel": "Moldable splint"
}, {
  "id": "answer-splint-type-traction",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Traction splint",
  "abbrLabel": "Traction splint"
}, {
  "id": "answer-splint-type-pelvic-binder",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Pelvic binder",
  "abbrLabel": "Pelvic binder"
}, {
  "id": "answer-splint-type-other",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Other",
  "abbrLabel": "Other"
}];
/*
    {
        "id": "",
        "promptID": "",
        "label": "",
        "abbrLabel": ""
    },
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_PROMPT_ANSWERS);

/***/ }),

/***/ 53836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95558);

const INTV_PROMPTS = [{
  "id": "prompt-wound-location",
  type: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DIST_PROMPT,
  selectionType: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  label: "Where is the wound located?",
  abbrLabel: "Wound location?",
  answers: ["answer-wound-location-head", "answer-wound-location-neck", "answer-wound-location-chest", "answer-wound-location-abdomen-pelvis", "answer-wound-location-posterior", "answer-wound-location-genitalia", "answer-wound-location-left-lower-extremity", "answer-wound-location-right-lower-extremity", "answer-wound-location-left-upper-extremity", "answer-wound-location-right-upper-extremity", "answer-wound-location-other"]
}, {
  "id": "prompt-wound-locations",
  type: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DIST_PROMPT,
  selectionType: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.OOM,
  label: "Where are the wound(s) located?",
  abbrLabel: "Wound location(s)?",
  answers: ["answer-wound-locations-head", "answer-wound-locations-neck", "answer-wound-locations-chest", "answer-wound-locations-abdomen-pelvis", "answer-wound-locations-posterior", "answer-wound-locations-genitalia", "answer-wound-locations-left-lower-extremity", "answer-wound-locations-right-lower-extremity", "answer-wound-locations-left-upper-extremity", "answer-wound-locations-right-upper-extremity", "answer-wound-locations-other"]
}, {
  "id": "prompt-airway-patency-suction-device",
  "interventionID": "intv-airway-patency-technique-suction-airway",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What kind of suction catheter will you use?",
  "abbrLabel": "Suction catheter type?",
  "answers": ["answer-airway-patency-suction-yankauer", "answer-airway-patency-suction-long-multiuse", "answer-airway-patency-suction-other"]
}, {
  "id": "prompt-advanced-airway-adjunct-type",
  "interventionID": "intv-advanced-airway-adjunct",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of advanced airway adjunct would you use?",
  "abbrLabel": "Which advanced airway?",
  "answers": ["answer-alternative-rescue-airway-type-ett", "answer-alternative-rescue-airway-type-combitube", "answer-alternative-rescue-airway-type-lta", "answer-alternative-rescue-airway-type-lma", "answer-alternative-rescue-airway-type-igel", "answer-alternative-rescue-airway-type-other"]
}, {
  "id": "prompt-advanced-airway-tube-size",
  "interventionID": "intv-advanced-airway-adjunct",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": "one",
  "label": "What tube size for advanced airway?",
  "abbrLabel": "What size?",
  "answers": ["answer-alternative-airway-tube-size-7", "answer-alternative-airway-tube-size-8", "answer-alternative-airway-tube-size-age-div-4-plus-4", "answer-alternative-airway-tube-size--age-div-4-plus-4-minus-5", "answer-alternative-airway-tube-size-37f", "answer-alternative-airway-tube-size-41f", "answer-alternative-airway-tube-size-0", "answer-alternative-airway-tube-size-1", "answer-alternative-airway-tube-size-1-5", "answer-alternative-airway-tube-size-2", "answer-alternative-airway-tube-size-2-5", "answer-alternative-airway-tube-size-3", "answer-alternative-airway-tube-size-4", "answer-alternative-airway-tube-size-5", "answer-alternative-airway-tube-size-6", "answer-alternative-airway-tube-size-other"]
}, {
  "id": "prompt-orotracheal-intubation-tube-insertion-depth",
  "interventionID": "intv-orotracheal-intubation",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what depth would you insert the tube?",
  "abbrLabel": "Tube insertion depth?",
  "answers": ["answer-orotracheal-intubation-tube-insertion-depth-21cm", "answer-orotracheal-intubation-tube-insertion-depth-23cm", "answer-orotracheal-intubation-tube-insertion-depth-3-times-tube-size", "answer-orotracheal-intubation-tube-insertion-depth-other"]
}, {
  "id": "prompt-nasotracheal-intubation-tube-size",
  "interventionID": "intv-nasotracheal-intubation",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What tube size would you use?",
  "abbrLabel": "Tube size?",
  "answers": ["answer-nasotracheal-intubation-tube-size-6-to-6-5", "answer-nasotracheal-intubation-tube-size-7-to-7-5", "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus1", "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus0-5", "answer-nasotracheal-intubation-tube-size-0-5-1cm-less-than-oro-size", "answer-nasotracheal-intubation-tube-size-other"]
}, {
  "id": "prompt-nasal-cannula-flow-rate",
  "interventionID": "intv-supplemental-oxygen-device-nasal-cannula",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What oxygen flow rate would you administer?",
  "abbrLabel": "Oxygen flow rate?",
  "answers": ["answer-nasal-cannula-flow-rate-1-6-lpm", "answer-nasal-cannula-flow-rate-other"]
}, {
  "id": "prompt-nasal-cannula-target-saturation",
  "interventionID": "intv-supplemental-oxygen-device-nasal-cannula",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-nasal-cannula-target-saturation-gt-90-pct", "answer-nasal-cannula-target-saturation-other"]
}, {
  "id": "prompt-non-rebreather-mask-flow-rate",
  "interventionID": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What oxygen flow rate would you administer?",
  "abbrLabel": "Oxygen flow rate?",
  "answers": ["answer-non-rebreather-mask-flow-rate-10-15-liters-min", "answer-non-rebreather-mask-flow-rate-other"]
}, {
  "id": "prompt-non-rebreather-mask-target-saturation",
  "interventionID": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-non-rebreather-mask-target-saturation-gt-90-pct", "answer-non-rebreather-mask-target-saturation-other"]
}, {
  "id": "prompt-bvm-ventilation-rate",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what rate will you ventilate the patient?",
  "abbrLabel": "",
  "answers": ["answer-bvm-ventilation-rate-10-12-bpm", "answer-bvm-ventilation-rate-other"]
}, {
  "id": "prompt-bvm-flow-rate",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What flow rate would you administer?",
  "abbrLabel": "Flow rate?",
  "answers": ["answer-bvm-flow-rate-15-ltm-or-gt", "answer-bvm-flow-rate-other"]
}, {
  "id": "prompt-bvm-target-saturation",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-bvm-target-saturation-rate-gt-90-pct", "answer-bvm-target-saturation-rate-other"]
}, {
  "id": "prompt-tourniquet-placement",
  "interventionID": "intv-control-severe-bleeding-technique-tourniquet",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Where would you place the tourniquet?",
  "abbrLabel": "Tourniquet location?",
  "answers": ["answer-tourniquet-placement-close-to-core-far-from-wound", "answer-tourniquet-placement-other"]
}, {
  "id": "prompt-2nd-tourniquet-placement",
  "interventionID": "intv-control-severe-bleeding-technique-2nd-tourniquet",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Where would you place the second tourniquet?",
  "abbrLabel": "Tourniquet location?",
  "answers": ["answer-2nd-tourniquet-placement-adjacent-to-initial-tourniquet", "answer-2nd-tourniquet-placement-other"]
}, {
  "id": "prompt-occlusive-dressing-injury-type",
  "interventionID": "intv-occlusive-dressing",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of injury are you trying to manage?",
  "abbrLabel": "For what type of injury?",
  "answers": ["answer-occulsivive-dressing-injury-type-open-pneumothorax", "answer-occulsivive-dressing-injury-type-other"]
}, {
  "id": "prompt-occlusive-dressing-method",
  "interventionID": "intv-occlusive-dressing",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "How would you create a release valve on an occlusive dressing?",
  "abbrLabel": "How would you create a release valve?",
  "answers": ["answer-occulsive-dressing-method-leave-one-side-untaped", "answer-occulsive-dressing-method-leave-dressing-with-one-way-valve", "answer-occulsive-dressing-method-other"]
}, {
  "id": "prompt-pleural-decompression-injury-type",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of injury are you trying to manage?",
  "abbrLabel": "For what type of injury?",
  "answers": ["answer-pleural-decompression-injury-type-tension-pneumothorax", "answer-pleural-decompression-injury-type-open-pneumothorax", "answer-pleural-decompression-injury-type-other"]
}, {
  "id": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "On which side of the body would you place the needle?",
  "abbrLabel": "Which side would you place the needle?",
  "answers": ["answer-pleural-decompression-needle-placement-side-of-the-body-right", "answer-pleural-decompression-needle-placement-side-of-the-body-left"]
}, {
  "id": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what anatomical landmark?",
  "abbrLabel": "At what anatomical landmark?",
  "answers": ["answer-pleural-decompression-needle-placement-anatomical-landmark-2nd-or-3rd-intercostal-space-mid-clavicular", "answer-pleural-decompression-needle-placement-anatomical-landmark-4th-or-5th-intercostal-space-mid-axillary", "answer-pleural-decompression-needle-placement-anatomical-landmark-other"]
}, {
  "id": "prompt-pleural-decompression-needle-size",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What size needle do you want to use?",
  "abbrLabel": "Needle size?",
  "answers": ["answer-pleural-decompression-needle-size-large-bore", "answer-pleural-decompression-needle-size-other"]
}, {
  "id": "prompt-pleural-decompression-needle-length",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "How long a needle would you use?",
  "abbrLabel": "Needle length?",
  "answers": ["answer-pleural-decompression-needle-length-2-inches-or-longer", "answer-pleural-decompression-needle-length-other"]
}, {
  "id": "prompt-transport-facility-choice",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of care facility will you transport the patient to?",
  "abbrLabel": "Type of receiving facility",
  "answers": ["answer-transport-facility-choice-level-1-or-2-trauma-center", "answer-transport-facility-choice-level-3-or-4-trauma-center", "answer-transport-facility-choice-closest", "answer-transport-facility-choice-other"]
}, {
  "id": "prompt-transport-method",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Would you transport this patient by air or ground ambulance?",
  "abbrLabel": "Air or ground ambulance?",
  "answers": ["answer-transport-method-ambulance", "answer-transport-method-helicopter"]
}, {
  "id": "prompt-transport-lights-siren-decision",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Would you use lights and sirens with this patient?",
  "abbrLabel": "Lights and sirens?",
  "answers": ["answer-transport-lights-sirens-yes", "answer-transport-lights-sirens-no"]
}, {
  "id": "prompt-splint-type",
  "interventionID": "intv-splint-fractures",
  "type": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of splint would you use?",
  "abbrLabel": "Type of splint?",
  "answers": ["answer-splint-type-board", "answer-splint-type-moldable", "answer-splint-type-traction", "answer-splint-type-pelvic-binder", "answer-splint-type-other"]
}];
/*
    {
        "id": "",
        "interventionID": "",
        "type": MDB_TYPES.PROMPT,
        "selectionType": ST.ONE,
        "label": "",
        "abbrLabel": "",
        "answers": [
        ]
    },
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_PROMPTS);

/***/ }),

/***/ 84028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTVS = [{
  "id": "intv-open-airway-method-head-tilt",
  "system": "airway",
  "label": "Head tilt chin lift"
}, {
  "id": "intv-open-airway-method-modified-jaw-thrust",
  "system": "airway",
  "label": "Modified jaw thrust"
}, {
  "id": "intv-airway-patency-technique-suction-airway",
  "system": "airway",
  "label": "Suction airway",
  "prompts": ["prompt-airway-patency-suction-device"]
}, {
  "id": "intv-manual-finger-sweep",
  "system": "airway",
  "label": "Manual (finger sweep)"
}, {
  "id": "intv-magill-forceps-assisted",
  "system": "airway",
  "label": "Magill forceps assisted"
}, {
  "id": "intv-slat",
  "system": "airway",
  "label": "SLAT"
}, {
  "id": "intv-heimlich-maneuver",
  "system": "airway",
  "label": "Heimlich maneuver"
}, {
  "id": "intv-back-blows-and-chest-thrusts",
  "system": "airway",
  "label": "Back blows and chest thrusts"
}, {
  "id": "intv-oropharyngeal-airway",
  "system": "airway",
  "label": "Oropharyngeal airway (OPA)"
}, {
  "id": "intv-nasopharyngeal-airway",
  "system": "airway",
  "label": "Nasopharyngeal airway (NPA)"
}, {
  "id": "intv-advanced-airway-adjunct",
  "system": "airway",
  "label": "Insert advanced airway adjunct",
  "prompts": ["prompt-advanced-airway-adjunct-type", "prompt-advanced-airway-tube-size"]
}, {
  "id": "intv-orotracheal-intubation",
  "system": "airway",
  "label": "Orotracheal intubation",
  "prompts": ["prompt-orotracheal-intubation-tube-insertion-depth"]
}, {
  "id": "intv-nasotracheal-intubation",
  "system": "airway",
  "label": "Nasotracheal intubation",
  "prompts": ["prompt-nasotracheal-intubation-tube-size"]
}, {
  "id": "intv-rapid-sequence-intubation",
  "system": "airway",
  "label": "Rapid sequence intubation (RSI)"
}, {
  "id": "intv-sedation-assisted-intubation",
  "system": "airway",
  "label": "Sedation-assisted intubation",
  "prompts": []
}, {
  "id": "intv-needle-cricothyrotomy",
  "system": "airway",
  "label": "Needle cricothyrotomy"
}, {
  "id": "intv-surgical-cricothyrotomy",
  "system": "airway",
  "label": "Surgical cricothyrotomy"
}, {
  "id": "intv-supplemental-oxygen-device-nasal-cannula",
  "system": "breathing",
  "label": "Nasal cannula",
  "prompts": ["prompt-nasal-cannula-o2-flow-rate", "prompt-nasal-cannula-target-saturation"]
}, {
  "id": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "system": "breathing",
  "label": "Non-rebreather mask",
  "prompts": ["prompt-non-rebreather-mask-flow-rate", "prompt-non-rebreather-mask-target-saturation"]
}, {
  "id": "intv-ventilation-technique-bag-valve-mask",
  "system": "breathing",
  "label": "Bag-valve mask",
  "prompts": ["prompt-bvm-ventilation-rate", "prompt-bvm-flow-rate", "prompt-bvm-target-saturation"]
}, {
  "id": "intv-control-severe-bleeding-technique-direct-pressure",
  "system": "bleeding",
  "label": "Apply direct pressure",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-tourniquet",
  "system": "bleeding",
  "label": "Apply tourniquet",
  distPrompts: ["prompt-wound-location"],
  prompts: ["prompt-tourniquet-placement"]
}, {
  "id": "intv-control-severe-bleeding-technique-2nd-tourniquet",
  "system": "bleeding",
  "label": "Apply second tourniquet",
  distPrompts: ["prompt-wound-location"],
  prompts: ["prompt-2nd-tourniquet-placement"]
}, {
  "id": "intv-control-severe-bleeding-technique-pack-wound-with-gauze",
  "system": "bleeding",
  "label": "Pack wound with gauze or hemostatic gauze",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-pressure-bandage",
  "system": "bleeding",
  "label": "Pressure dressing",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-load-and-go",
  "system": "bleeding",
  "label": "Load and go (if uncontrolled)"
}, {
  "id": "intv-control-shock-technique-keep-patient-warm",
  "system": "shock",
  "label": "Keep patient warm (e.g., apply blankets)"
}, {
  "id": "intv-control-shock-technique-administer-high-concentration-o2",
  "system": "shock",
  "label": "Administer high concentration of oxygen"
}, {
  "id": "intv-control-shock-technique-place-patient-supine-position",
  "system": "shock",
  "label": "Place or maintain patient in supine position"
}, {
  "id": "intv-control-shock-technique-administer-iv-boluses",
  "system": "shock",
  "label": "IV fluid resuscitation",
  prompts: []
}, {
  "id": "intv-occlusive-dressing",
  "system": "breathing",
  "label": "Occlusive dressing",
  prompts: ["prompt-occlusive-dressing-injury-type", "prompt-occlusive-dressing-method"]
}, {
  "id": "intv-pleural-decompression",
  "system": "breathing",
  "label": "Needle decompression",
  prompts: ["prompt-pleural-decompression-injury-type", "prompt-pleural-decompression-needle-placement-side-of-the-body", "prompt-pleural-decompression-needle-placement-anatomical-landmark", "prompt-pleural-decompression-needle-size", "prompt-pleural-decompression-needle-length"]
}, {
  "id": "intv-spinal-immobilization-technique-manual-c-spine",
  "label": "Manual c-spine stabilization"
}, {
  "id": "intv-spinal-immobilization-technique-cervical-collar",
  "label": "Cervical collar"
}, {
  "id": "intv-spinal-immobilization-technique-transfer-to-device",
  "label": "Transfer patient to immobilization device",
  prompts: []
}, {
  "id": "intv-spinal-immobilization-technique-attach-cid",
  "label": "Attach cervical immobilization device (CID)"
}, {
  "id": "intv-transfers-patient-method-walk-patient",
  "label": "Walk patient to ambulance"
}, {
  "id": "intv-transfers-patient-method-place-directly-on-stretcher",
  "label": "Place directly on stretcher"
}, {
  id: "intv-place-immobilized-patient-on-stretcher",
  label: "Place immobilized patient on stretcher"
},
/*
{
   "id": "intv-transfers-patient-method-long-backboard",
   "label": "Place on long back board (LBB)"
},
{
   "id": "intv-transfers-patient-method-short-board",
   "label": "Place on short board (e.g., KED)"
},
{
   "id": "intv-transfers-patient-method-scoop-stretcher",
   "label": "Place on scoop stretcher"
},
*/
{
  "id": "intv-transport",
  "label": "Transport",
  prompts: ["prompt-transport-facility-choice", "prompt-transport-method", "prompt-transport-lights-siren-decision"]
}, {
  "id": "intv-apply-sterile-dressings",
  "label": "Apply sterile dressings",
  distPrompts: ["prompt-wound-locations"]
}, {
  "id": "intv-splint-fractures",
  "system": "bleeding",
  "label": "Splint fractures" // distPrompts: [
  // ],
  // prompts: [
  //    "prompt-splint-type"
  // ]

}, {
  id: "intv-sterile-dressing-soft-tissue",
  label: "Apply sterile dressing over soft tissue",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-retrieve-amputated-body-part",
  "label": "Retrieve avulsed/amputated part",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-wrap-body-part-in-saline-soaked-gauze",
  label: "Wrap part in gauze soaked in saline",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-place-body-part-in-bag",
  label: "Place part in bag",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-keep-body-part-cool",
  label: "Keep cool but do not pack directly on ice",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-transport-body-part-to-receiving-facility",
  label: "Transport part to receiving facility",
  distPrompts: ["prompt-wound-location"]
}, // {
//    "id": "intv-establish-ivs",
//    "label": "Establish IVs"
// },
// {
//    "id": "intv-replace-bls-airway-with-als-airway",
//    "label": "Replace basic airway with advanced airway"
// },
// {
//    "id": "intv-replace-bandages",
//    "label": "Replace bandages"
// },
// {
//    "id": "intv-replace-oxygen-tank",
//    "label": "Replace oxygen tank"
// },
// {
//    "id": "intv-adjust-iv-replace-bolus",
//    "label": "Adjust an IV (e.g., hang second bag)"
// },
// {
//    "id": "intv-turn-up-heat-in-ambulance",
//    "label": "Turn up heat in ambulance"
// },
// {
//    "id": "intv-reassess-intv-other",
//    "label": "Reassess other intervention"
// },
// {
//    "id": "intv-reassess-vital-signs",
//    "label": "Reassess vital signs"
// }
{
  id: "intv-prepare-and-administer-pain-nausea-vomiting-medications",
  label: "Prepare and administer medications"
}, {
  id: "intv-prepare-and-administer-sedative",
  label: "Prepare and administer medications"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTVS);

/***/ }),

/***/ 7237:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublishedScenario": () => (/* binding */ PublishedScenario),
/* harmony export */   "ScenarioType": () => (/* binding */ ScenarioType)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95558);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97414);


class ScenarioType {
  constructor(data) {
    const {
      id,
      name,
      schemaVersion,
      checklist,
      interventions,
      interventionPrompts,
      interventionPromptAnswers,
      interventionVariantAnswers,
      interventionMenuCategories,
      interventionMenuItems,
      medications,
      hierarchy,
      phaseData,
      ...remaining
    } = data; // console.log(checklist)

    this.id = id;
    this.name = name;
    this.schemaVersion = schemaVersion;
    this._checklist = checklist;
    this._interventions = interventions;
    this._interventionPrompts = interventionPrompts;
    this._interventionPromptAnswers = interventionPromptAnswers;
    this.interventionVariantAnswers = interventionVariantAnswers;
    this._interventionMenuCategories = interventionMenuCategories;
    this._interventionMenuItems = interventionMenuItems;
    this._medications = medications;
    this.checkListMetaData = this.genCheckListMetaData();
    this.uniqueIDs = this.genUniqueIDs();
    this.uniqueLabels = this.genUniqueLabels();
  }

  genUniqueIDs() {
    let ids = this._interventions.map(e => e.id);

    ids = ids.concat(this._interventionPrompts.map(e => e.id));
    ids = ids.concat(this._interventionPromptAnswers.map(e => e.id));
    ids = ids.concat(this._interventionMenuCategories.map(e => e.id));
    ids = ids.concat(this._interventionMenuItems.map(e => e.id));
    ids = ids.concat(this._medications.map(e => e.id));
    ids = ids.concat(this._checklist.map(e => e.id));
    return ids;
  }

  genUniqueLabels() {
    let labels = this._interventions.map(e => e.label);

    labels = labels.concat(this._checklist.map(e => e.label));
    return labels;
  }

  genCheckListMetaData() {
    const metaData = [];
    const CHECKLIST = [...this._checklist].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      if (undefined === e.phase) e.phase = null;
      if (undefined === e.subPhase) e.subPhase = null;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e) && !OPTIONS.includes(e));
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null];
    SUB_PHASES.forEach(sp => sp.items = clItemsBySubPhase[sp.id].map(i => i.id)); //

    return CHECKLIST;
  }

  genHierarchy() {
    const CHECKLIST = [...this._checklist].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e));
    CL_ITEMS.forEach(e => {
      if (undefined === e.subPhase) {
        // FIXME: we should set this up in the data-structure itself
        e.subPhase = null;
      }
    });
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null];
    SUB_PHASES.forEach(sp => sp.items = clItemsBySubPhase[sp.id].map(i => i.id));
    const hierarchy = [];
    PHASES.forEach(ph => {
      const {
        subPhases,
        items,
        ...newPh
      } = ph;

      if (undefined !== items) {
        newPh.items = items.map(itemID => {
          const {
            options,
            ...newItem
          } = CL_ITEMS.find(e => e.id === itemID);

          if (undefined !== options) {
            newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
          }

          return newItem;
        });
        hierarchy.push(newPh);
      } else {
        newPh.subPhases = subPhases.map(sphID => {
          const {
            items,
            ...newSph
          } = SUB_PHASES.find(sp => sp.id === sphID);
          newSph.items = items.map(itemID => {
            const {
              options,
              ...newItem
            } = CL_ITEMS.find(i => i.id === itemID);

            if (undefined !== options) {
              newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
            }

            return newItem;
          });
          return newSph;
        });
        hierarchy.push(newPh);
      }
    });
    return hierarchy;
  }

  getChecklistItem(id) {
    return this._checklist.find(e => e.id === id);
  }

  getInterventionForm(interventionID) {
    return this.getIntervention(interventionID, true);
  }

  getIntervention(interventionID, expand = false) {
    const found = this._interventions.find(e => e.id === interventionID);

    if (!found) {
      return {};
    }

    const {
      distPrompts,
      prompts,
      ...intv
    } = found;

    if (!expand) {
      intv.distPrompts = distPrompts;
      intv.prompts = prompts;
      return intv;
    }

    intv.distPrompts = distPrompts.map(distPromptID => this.getPrompt(distPromptID, true));
    intv.prompts = prompts.map(promptID => this.getPrompt(promptID, true));
    return intv;
  }

  getDecisionWithOptions(id) {
    const found = this.getChecklistItem(id);

    if (!found) {
      return {};
    }

    const {
      options,
      ...decision
    } = found; // console.log(decision)

    decision.options = options.map(optID => this.getChecklistItem(optID));
    return decision;
  }

  getPrompt(promptID, expand = false) {
    const found = this._interventionPrompts.find(e => e.id === promptID);

    if (!found) {
      return {};
    }

    const {
      answers,
      ...prompt
    } = found;

    if (!expand) {
      prompt.answers = answers;
    } else {
      prompt.answers = answers.map(answerID => this.getAnswer(answerID));
    }

    return prompt;
  }

  getAnswer(answerID) {
    return this._interventionPromptAnswers.find(e => e.id === answerID);
  }

  getInterventionMenus() {
    return this._interventionMenuCategories.map(e => {
      const {
        items,
        ...newRec
      } = e;
      newRec.items = items.map(itemID => this._interventionMenuItems.find(mi => mi.id === itemID));
      return newRec;
    });
  }

}
class PublishedScenario {
  constructor(data) {
    const {
      id,
      name,
      version,
      datePublished,
      scenarioType,
      schemaVersion,
      info,
      vitalSigns,
      OPQRST,
      SAMPLE,
      assessmentFindings,
      checkListCorrectness,
      correctMedicationDosages,
      problems,
      solutions,
      actions,
      interventionVariantAnswers,
      checkListMetaData,
      medications,
      interventions,
      interventionPrompts,
      interventionPromptAnswers,
      interventionMenuCategories,
      interventionMenuItems,
      ...rest
    } = data;
    this.id = id;
    this.name = name;
    this.version = version;
    this.datePublished = datePublished;
    this.scenarioType = scenarioType;
    this.schemaVersion = schemaVersion;
    this.info = info;
    this.vitalSigns = vitalSigns;
    this.OPQRST = OPQRST;
    this.SAMPLE = SAMPLE;
    this.assessmentFindings = assessmentFindings;
    this.checkListCorrectness = checkListCorrectness;
    this.correctMedicationDosages = correctMedicationDosages;
    this.problems = problems;
    this.solutions = solutions;
    this.actions = actions;
    this.interventionVariantAnswers = interventionVariantAnswers;
    this._checkListMetaData = checkListMetaData;
    this.medications = medications;
    this._interventions = interventions;
    this._interventionPrompts = interventionPrompts;
    this._interventionPromptAnswers = interventionPromptAnswers;
    this._interventionMenuCategories = interventionMenuCategories;
    this._interventionMenuItems = interventionMenuItems; // console.log(rest)

    this.phaseData = this.genPhaseData();
    this.interventionMenus = this.genInterventionMenus();
    this.systemInterventions = this.genSystemInterventions();
  }

  genSystemInterventions() {
    let tmp = this._interventions.filter(e => !!e.system).map(e => {
      return {
        id: e.id,
        type: _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.INTERV,
        label: e.label,
        system: e.system
      };
    });

    const sysIntvs = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(tmp, "system"); // console.log(sysIntvs)

    return sysIntvs;
  }

  genInterventionMenus() {
    return this._interventionMenuCategories.map(cat => {
      const {
        items,
        ...menuCat
      } = cat;
      menuCat.items = items.map(itemID => this._interventionMenuItems.find(mi => mi.id === itemID));
      return menuCat;
    });
  }

  genPhaseData() {
    const CHECKLIST = [...this._checkListMetaData].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e) && !OPTIONS.includes(e));
    CL_ITEMS.forEach(e => {
      if (undefined === e.subPhase) {
        // FIXME: we should set this up in the data-structure itself
        e.subPhase = null;
      }
    });
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null]; // console.log(clItemsBySubPhase)

    SUB_PHASES.forEach(sp => {
      // console.log(sp)
      const items = clItemsBySubPhase[sp.id].map(i => i.id); // console.log()

      sp.items = items;
    });
    const hierarchy = [];
    PHASES.forEach(ph => {
      const {
        subPhases,
        items,
        ...newPh
      } = ph;

      if (undefined !== items) {
        newPh.items = items.map(itemID => {
          const {
            options,
            ...newItem
          } = CL_ITEMS.find(e => e.id === itemID);

          if (undefined !== options) {
            newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
          }

          return newItem;
        });
        hierarchy.push(newPh);
      } else {
        newPh.subPhases = subPhases.map(sphID => {
          const {
            items,
            ...newSph
          } = SUB_PHASES.find(sp => sp.id === sphID);
          newSph.items = items.map(itemID => {
            const {
              options,
              ...newItem
            } = CL_ITEMS.find(i => i.id === itemID);

            if (undefined !== options) {
              newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
            }

            return newItem;
          });
          return newSph;
        });
        hierarchy.push(newPh);
      }
    });
    return hierarchy;
  }

  getChecklistItem(id) {
    return this._checkListMetaData.find(e => e.id === id);
  }

  getInterventionForm(intvID) {
    return this.getIntervention(intvID, true);
  }

  getIntervention(interventionID, expand = false) {
    const found = this._interventions.find(e => e.id === interventionID);

    if (!found) {
      return {};
    }

    const {
      distPrompts,
      prompts,
      ...intv
    } = found;

    if (!expand) {
      intv.distPrompts = distPrompts;
      intv.prompts = prompts;
      return intv;
    }

    intv.distPrompts = distPrompts.map(distPromptID => this.getPrompt(distPromptID, true));
    intv.prompts = prompts.map(promptID => this.getPrompt(promptID, true));
    return intv;
  }

  getPrompt(promptID, expand = false) {
    const found = this._interventionPrompts.find(e => e.id === promptID);

    if (!found) {
      return {};
    }

    const {
      answers,
      ...prompt
    } = found;

    if (!expand) {
      prompt.answers = answers;
    } else {
      prompt.answers = answers.map(answerID => this.getAnswer(answerID));
    }

    return prompt;
  }

  getAnswer(answerID) {
    return this._interventionPromptAnswers.find(e => e.id === answerID);
  }

}

/***/ }),

/***/ 97414:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anyHaveValues": () => (/* binding */ anyHaveValues),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "getRecsOfType": () => (/* binding */ getRecsOfType),
/* harmony export */   "groupByKey": () => (/* binding */ groupByKey)
/* harmony export */ });
const deepCopy = object => {
  return JSON.parse(JSON.stringify(object));
}; // returns subset of records from array 'arr' whose type field matches 'type'

const getRecsOfType = (arr, type) => {
  return arr.filter(rec => rec.type === type);
}; // returns if any of the arrays passed to this have lengths > 0
// perhaps this should be written as a non-1-liner for clarity

const anyHaveValues = (...arrs) => {
  return arrs.map(arr => arr.length > 0).filter(val => val === true).length > 0;
}; // takes a list of objects and fieldName (key) and returns an object who's attributes are
// the distinct values for that field mapped to a list objects which share that
// value

const groupByKey = (list, key) => list.reduce((hash, obj) => ({ ...hash,
  [obj[key]]: (hash[obj[key]] || []).concat(obj)
}), {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(57645)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map