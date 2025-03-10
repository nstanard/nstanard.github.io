"use strict";
exports.id = 7;
exports.ids = [7];
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

/***/ 6019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog_post)
});

// EXTERNAL MODULE: external "C:\\Users\\Neal\\Documents\\Development\\nealstanard.com\\node_modules\\react\\index.js"
var external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_ = __webpack_require__(2942);
var external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
// EXTERNAL MODULE: ./src/components/Layout.tsx
var Layout = __webpack_require__(1858);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs + 1 modules
var dist = __webpack_require__(1563);
;// CONCATENATED MODULE: ./src/components/CodeBlock.tsx
const CodeBlock=({children,className})=>{const language=className?className.replace(/language-/,''):'';return/*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(dist/* Highlight */.y$,{theme:dist/* themes */.np.nightOwl,code:children.trim(),language:language},({className,style,tokens,getLineProps,getTokenProps})=>/*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("pre",{className:`${className} overflow-x-auto p-4 rounded-lg`,style:style},tokens.map((line,i)=>/*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div",Object.assign({key:i},getLineProps({line,key:i})),line.map((token,key)=>/*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("span",Object.assign({key:key},getTokenProps({token,key}))))))));};/* harmony default export */ const components_CodeBlock = (CodeBlock);
;// CONCATENATED MODULE: ./src/templates/blog-post.tsx





const components = {
  pre: props => /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", props),
  code: props => /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(components_CodeBlock, props)
};
const BlogPost = ({
  data,
  children
}) => {
  const {
    mdx,
    previous,
    next
  } = data;
  return /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(Layout/* default */.Z, null, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("article", {
    className: "prose dark:prose-invert max-w-none"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("header", {
    className: "mb-8"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("h1", {
    className: "mb-2"
  }, mdx.frontmatter.title), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("p", {
    className: "text-gray-500 dark:text-gray-400"
  }, mdx.frontmatter.date)), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(lib/* MDXProvider */.Zo, {
    components: components
  }, children), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("hr", {
    className: "my-8"
  }), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("nav", {
    className: "flex justify-between"
  }, previous && /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link, {
    to: `/blog${previous.fields.slug}`,
    className: "text-primary-600 dark:text-primary-400 hover:underline",
    rel: "prev"
  }, "\u2190 ", previous.frontmatter.title), next && /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link, {
    to: `/blog${next.fields.slug}`,
    className: "text-primary-600 dark:text-primary-400 hover:underline",
    rel: "next"
  }, next.frontmatter.title, " \u2192"))));
};
const query = "1877787852";
/* harmony default export */ const blog_post = (BlogPost);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-tsx.js.map