"use strict";
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 1858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4346);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3771);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
const Layout=({children})=>{const{isDark,setIsDark}=(0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();const isCurrentPath=path=>{if(typeof window!=='undefined'){return window.location.pathname===path;}return false;};const navItems=[{name:'Home',path:'/'},// { name: 'Portfolio', path: '/portfolio' },
// { name: 'Blog', path: '/blog' },
{name:'Resume',path:'/resume'}];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"min-h-screen flex flex-col bg-white dark:bg-dark-bg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav",{className:"fixed w-full bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border z-10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex justify-end h-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8"},navItems.map(item=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{key:item.path,to:item.path,className:`inline-flex items-center px-1 text-sm font-medium ${isCurrentPath(item.path)?'text-primary-500 dark:text-primary-300':'text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-300'}`},item.name)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:()=>setIsDark(!isDark),className:"inline-flex items-center p-1.5 text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-300","aria-label":"Toggle dark mode"},isDark?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{className:"h-5 w-5"}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:"h-5 w-5"})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main",{className:"flex-grow pt-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},children)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer",{className:"bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border mt-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400"},"\xA9 ",new Date().getFullYear()," Neal Stanard. All rights reserved."))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 3095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useTheme)
/* harmony export */ });
/* unused harmony export ThemeProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const ThemeContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);const getInitialColor=()=>{if(typeof window!=='undefined'){const savedColor=localStorage.getItem('color');if(savedColor){return savedColor;}}return'#7e22ce';// Default color with better contrast
};const getInitialDarkMode=()=>{if(typeof window!=='undefined'){const savedDarkMode=localStorage.getItem('dark-mode');if(savedDarkMode!==null){return savedDarkMode==='true';}return window.matchMedia('(prefers-color-scheme: dark)').matches;}return true;};const ThemeProvider=({children})=>{const{0:isDark,1:setIsDark}=useState(getInitialDarkMode);const{0:color,1:setColor}=useState(getInitialColor);useEffect(()=>{if(typeof window!=='undefined'){localStorage.setItem('dark-mode',isDark.toString());document.documentElement.classList.toggle('dark',isDark);}},[isDark]);useEffect(()=>{if(typeof window!=='undefined'){localStorage.setItem('color',color);document.documentElement.style.setProperty('--primary-color',color);}},[color]);// Add script to prevent flash of wrong theme
useEffect(()=>{if(typeof window!=='undefined'){const script=document.createElement('script');script.innerHTML=`
        (function() {
          try {
            var mode = localStorage.getItem('dark-mode');
            var color = localStorage.getItem('color');
            if (mode === 'true' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
            if (color) {
              document.documentElement.style.setProperty('--primary-color', color);
            } else {
              document.documentElement.style.setProperty('--primary-color', '#7e22ce');
            }
          } catch (e) {}
        })();
      `;document.head.appendChild(script);}},[]);return/*#__PURE__*/React.createElement(ThemeContext.Provider,{value:{isDark,setIsDark,color,setColor}},children);};const useTheme=()=>{const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);if(context===undefined){throw new Error('useTheme must be used within a ThemeProvider');}return context;};

/***/ }),

/***/ 5746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1858);


// You can replace these with your actual projects
const projects = [{
  title: "Project 1",
  description: "Description of your first project. What technologies you used, what problems you solved.",
  tags: ["React", "TypeScript", "Node.js"],
  image: "project1.jpg"
}, {
  title: "Project 2",
  description: "Description of your second project. Highlight the key features and your role.",
  tags: ["Gatsby", "GraphQL", "Tailwind"],
  image: "project2.jpg"
}
// Add more projects as needed
];

const PortfolioPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-24 sm:py-32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-auto max-w-2xl text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl"
  }, "Portfolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
  }, projects.map((project, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    key: index,
    className: "flex flex-col items-start bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-48 w-full bg-gray-200 dark:bg-gray-700"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "max-w-xl p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex items-center gap-x-4 text-xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, project.tags.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    key: tag,
    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
  }, tag)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-dark-text group-hover:text-primary-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "absolute inset-0"
  }), project.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400"
  }, project.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400 hover:text-primary-500"
  }, "View Project ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Portfolio | Neal Stanard");

/***/ }),

/***/ 3771:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2942);

function MoonIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MoonIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 4346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2942);

function SunIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SunIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-portfolio-tsx.js.map