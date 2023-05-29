exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 7095:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1166))

/***/ }),

/***/ 1324:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 1166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(1338);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1198);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./app/componets/Header.js
/* __next_internal_client_entry_do_not_use__  auto */ 




const Header = ({ userName  })=>{
    const [navOpen, setNavOpen] = (0,react_experimental_.useState)(false);
    const pathname = (0,navigation.usePathname)();
    (0,react_experimental_.useEffect)(()=>{
        setNavOpen(false);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white shadow",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex h-16 justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-shrink-0 items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "block h-8 w-auto lg:hidden",
                                                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                                                alt: "Your Company"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "hidden h-8 w-auto lg:block",
                                                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                                                alt: "Your Company"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hidden sm:ml-6 sm:flex sm:space-x-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: classnames_default()(pathname == "/" ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900"),
                                                children: "Home"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/catches",
                                                className: classnames_default()(pathname == "/catches" ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900"),
                                                children: "Catches"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/buyer/new",
                                                className: classnames_default()(pathname.startsWith("/buyer/new") ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900"),
                                                children: "Create a Buyer"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/dashboard",
                                                className: classnames_default()(pathname.startsWith("/dashboard") ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900"),
                                                children: "Dashboard"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: userName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden sm:ml-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    as: "div",
                                    className: "relative ml-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Open user menu"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "h-8 w-8 rounded-full",
                                                        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                        alt: ""
                                                    })
                                                ]
                                            })
                                        }),
                                        navOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "transition ease-out duration-200 hidden sm:block",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                            children: "Your Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/sign_in",
                                                            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                            children: "Sign in"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "-mr-2 flex items-center sm:hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                                    onClick: ()=>setNavOpen(!navOpen),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Open main menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "block h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                navOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sm:hidden",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-1 pb-3 pt-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: classnames_default()(pathname == "/" ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700", "block border-l-4  py-2 pl-3 pr-4 text-base font-medium"),
                                    children: "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/catches",
                                    className: classnames_default()(pathname.startsWith("/catches") ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700", "block border-l-4  py-2 pl-3 pr-4 text-base font-medium"),
                                    children: "Catches"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/buyer/new",
                                    className: classnames_default()(pathname.startsWith("/buyer/new") ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700", "block border-l-4  py-2 pl-3 pr-4 text-base font-medium"),
                                    children: "Create a Buyer"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/dashboard",
                                    className: classnames_default()(pathname.startsWith("/dashboard") ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700", "block border-l-4  py-2 pl-3 pr-4 text-base font-medium"),
                                    children: "Dashboard"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center px-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "h-10 w-10 rounded-full",
                                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ml-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-base font-medium text-gray-800",
                                                    children: "Tom Cook"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "tom@example.com"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-3 space-y-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
                                            children: "Your Profile"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/sign_in",
                                            className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
                                            children: "Sign in"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const componets_Header = (Header);

;// CONCATENATED MODULE: ./app/componets/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

// import { useSession } from 'next-auth/react';

function Layout({ children  }) {
    // const { data:session } = useSession();
    // const router = useRouter();
    // const pathname = usePathname();
    // const not_need_redirect_url = ['/', '/sign_in', '/sign_up', '/callback'];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(componets_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "",
                children: children
            })
        ]
    });
    if (not_need_redirect_url.includes(pathname) || session) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(componets_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "",
                    children: children
                })
            ]
        });
    } else {
        // router.push('/sign_in')
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(componets_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "",
                    children: children
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(3370);
;// CONCATENATED MODULE: ./app/layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




// export const metadata = {
//   title: 'Fish',
//   description: 'Catch'
// }
function RootLayout({ children , session  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 2335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/yinmanman/Downloads/nextjs_13_demo/app/layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);


/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 1338:
/***/ (() => {



/***/ })

};
;