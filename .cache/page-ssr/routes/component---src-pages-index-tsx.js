"use strict";
exports.id = 691;
exports.ids = [691];
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

/***/ 2635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "C:\\Users\\Neal\\Documents\\Development\\nealstanard.com\\node_modules\\react\\index.js"
var external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_ = __webpack_require__(2942);
var external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_);
// EXTERNAL MODULE: ./src/components/Layout.tsx
var Layout = __webpack_require__(1858);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./src/context/ThemeContext.tsx
var ThemeContext = __webpack_require__(3095);
;// CONCATENATED MODULE: ./node_modules/react-colorful/dist/index.mjs
function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function i(e){var t=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useRef)(e),n=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useRef)(function(e){t.current&&t.current(e)});return t.current=e,n.current}var s=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},f=function(e){return"touches"in e},v=function(e){return e&&e.ownerDocument.defaultView||self},d=function(e,r,t){var n=e.getBoundingClientRect(),o=f(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:s((o.pageX-(n.left+v(e).pageXOffset))/n.width),top:s((o.pageY-(n.top+v(e).pageYOffset))/n.height)}},h=function(e){!f(e)&&e.preventDefault()},m=external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.memo(function(o){var a=o.onMove,l=o.onKey,s=c(o,["onMove","onKey"]),m=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useRef)(null),g=i(a),p=i(l),b=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useRef)(null),_=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useRef)(!1),x=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useMemo)(function(){var e=function(e){h(e),(f(e)?e.touches.length>0:e.buttons>0)&&m.current?g(d(m.current,e,b.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=_.current,o=v(m.current),a=t?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=m.current;if(n&&(h(r),!function(e,r){return r&&!f(e)}(r,_.current)&&n)){if(f(r)){_.current=!0;var o=r.changedTouches||[];o.length&&(b.current=o[0].identifier)}n.focus(),g(d(n,r,b.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),p({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]},[p,g]),C=x[0],E=x[1],H=x[2];return (0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useEffect)(function(){return H},[H]),external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement("div",u({},s,{onTouchStart:C,onMouseDown:C,className:"react-colorful__interactive",ref:m,onKeyDown:E,tabIndex:0,role:"slider"}))}),g=function(e){return e.filter(Boolean).join(" ")},p=function(r){var t=r.color,n=r.left,o=r.top,a=void 0===o?.5:o,l=g(["react-colorful__pointer",r.className]);return external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement("div",{className:l,style:{top:100*a+"%",left:100*n+"%"}},external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},_={grad:.9,turn:360,rad:360/(2*Math.PI)},x=function(e){return L(C(e))},C=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?b(parseInt(e.substring(6,8),16)/255,2):1}},E=function(e,r){return void 0===r&&(r="deg"),Number(e)*(_[r]||1)},H=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?N({h:E(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},M=H,N=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},w=function(e){return K(I(e))},y=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:b(e.h),s:b(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:b(o/2),a:b(n,2)}},q=function(e){var r=y(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},k=function(e){var r=y(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},I=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),l=n*(1-t),u=n*(1-(r-a)*t),c=n*(1-(1-r+a)*t),i=a%6;return{r:b(255*[n,u,l,l,c,n][i]),g:b(255*[c,n,n,u,l,l][i]),b:b(255*[l,l,c,n,n,u][i]),a:b(o,2)}},O=function(e){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?A({h:E(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},j=O,z=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?L({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},B=z,D=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},K=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=o<1?D(b(255*o)):"";return"#"+D(r)+D(t)+D(n)+a},L=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),l=a-Math.min(r,t,n),u=l?a===r?(t-n)/l:a===t?2+(n-r)/l:4+(r-t)/l:0;return{h:b(60*(u<0?u+6:u)),s:b(a?l/a*100:0),v:b(a/255*100),a:o}},A=function(e){return{h:b(e.h),s:b(e.s),v:b(e.v),a:b(e.a,2)}},S=external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.memo(function(r){var t=r.hue,n=r.onChange,o=g(["react-colorful__hue",r.className]);return external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement("div",{className:o},external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement(m,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:s(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":"360","aria-valuemin":"0"},external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement(p,{className:"react-colorful__hue-pointer",left:t/360,color:q({h:t,s:100,v:100,a:1})})))}),T=external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.memo(function(r){var t=r.hsva,n=r.onChange,o={backgroundColor:q({h:t.h,s:100,v:100,a:1})};return external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement("div",{className:"react-colorful__saturation",style:o},external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement(m,{onMove:function(e){n({s:100*e.left,v:100-100*e.top})},onKey:function(e){n({s:s(t.s+100*e.left,0,100),v:s(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement(p,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:q(t)})))}),F=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},P=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},X=function(e,r){return e.toLowerCase()===r.toLowerCase()||F(C(e),C(r))};function Y(e,t,l){var u=i(l),c=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useState)(function(){return e.toHsva(t)}),s=c[0],f=c[1],v=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useRef)({color:t,hsva:s});(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useEffect)(function(){if(!e.equal(t,v.current.color)){var r=e.toHsva(t);v.current={hsva:r,color:t},f(r)}},[t,e]),(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useEffect)(function(){var r;F(s,v.current.hsva)||e.equal(r=e.fromHsva(s),v.current.color)||(v.current={hsva:s,color:r},u(r))},[s,e,u]);var d=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useCallback)(function(e){f(function(r){return Object.assign({},r,e)})},[]);return[s,d]}var R,V="undefined"!=typeof window?external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useLayoutEffect:external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useEffect,$=function(){return R||( true?__webpack_require__.nc:0)},G=function(e){R=e},J=new Map,Q=function(e){V(function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!J.has(r)){var t=r.createElement("style");t.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',J.set(r,t);var n=$();n&&t.setAttribute("nonce",n),r.head.appendChild(t)}},[])},U=function(t){var n=t.className,o=t.colorModel,a=t.color,l=void 0===a?o.defaultColor:a,i=t.onChange,s=c(t,["className","colorModel","color","onChange"]),f=(0,external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.useRef)(null);Q(f);var v=Y(o,l,i),d=v[0],h=v[1],m=g(["react-colorful",n]);return external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement("div",u({},s,{ref:f,className:m}),external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement(T,{hsva:d,onChange:h}),external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement(S,{hue:d.h,onChange:h,className:"react-colorful__last-control"}))},W={defaultColor:"000",toHsva:x,fromHsva:function(e){return w({h:e.h,s:e.s,v:e.v,a:1})},equal:X},Z=function(r){return external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_.createElement(U,u({},r,{colorModel:W}))},ee=function(r){var t=r.className,n=r.hsva,o=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+k(Object.assign({},n,{a:0}))+", "+k(Object.assign({},n,{a:1}))+")"},l=g(["react-colorful__alpha",t]),u=b(100*n.a);return e.createElement("div",{className:l},e.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),e.createElement(m,{onMove:function(e){o({a:e.left})},onKey:function(e){o({a:s(n.a+e.left)})},"aria-label":"Alpha","aria-valuetext":u+"%","aria-valuenow":u,"aria-valuemin":"0","aria-valuemax":"100"},e.createElement(p,{className:"react-colorful__alpha-pointer",left:n.a,color:k(n)})))},re=function(t){var n=t.className,o=t.colorModel,a=t.color,l=void 0===a?o.defaultColor:a,i=t.onChange,s=c(t,["className","colorModel","color","onChange"]),f=r(null);Q(f);var v=Y(o,l,i),d=v[0],h=v[1],m=g(["react-colorful",n]);return e.createElement("div",u({},s,{ref:f,className:m}),e.createElement(T,{hsva:d,onChange:h}),e.createElement(S,{hue:d.h,onChange:h}),e.createElement(ee,{hsva:d,onChange:h,className:"react-colorful__last-control"}))},te={defaultColor:"0001",toHsva:x,fromHsva:w,equal:X},ne=function(r){return e.createElement(re,u({},r,{colorModel:te}))},oe={defaultColor:{h:0,s:0,l:0,a:1},toHsva:N,fromHsva:y,equal:F},ae=function(r){return e.createElement(re,u({},r,{colorModel:oe}))},le={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:H,fromHsva:k,equal:P},ue=function(r){return e.createElement(re,u({},r,{colorModel:le}))},ce={defaultColor:{h:0,s:0,l:0},toHsva:function(e){return N({h:e.h,s:e.s,l:e.l,a:1})},fromHsva:function(e){return{h:(r=y(e)).h,s:r.s,l:r.l};var r},equal:F},ie=function(r){return e.createElement(U,u({},r,{colorModel:ce}))},se={defaultColor:"hsl(0, 0%, 0%)",toHsva:M,fromHsva:q,equal:P},fe=function(r){return e.createElement(U,u({},r,{colorModel:se}))},ve={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(e){return e},fromHsva:A,equal:F},de=function(r){return e.createElement(re,u({},r,{colorModel:ve}))},he={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:O,fromHsva:function(e){var r=A(e);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:P},me=function(r){return e.createElement(re,u({},r,{colorModel:he}))},ge={defaultColor:{h:0,s:0,v:0},toHsva:function(e){return{h:e.h,s:e.s,v:e.v,a:1}},fromHsva:function(e){var r=A(e);return{h:r.h,s:r.s,v:r.v}},equal:F},pe=function(r){return e.createElement(U,u({},r,{colorModel:ge}))},be={defaultColor:"hsv(0, 0%, 0%)",toHsva:j,fromHsva:function(e){var r=A(e);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:P},_e=function(r){return e.createElement(U,u({},r,{colorModel:be}))},xe={defaultColor:{r:0,g:0,b:0,a:1},toHsva:L,fromHsva:I,equal:F},Ce=function(r){return e.createElement(re,u({},r,{colorModel:xe}))},Ee={defaultColor:"rgba(0, 0, 0, 1)",toHsva:z,fromHsva:function(e){var r=I(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:P},He=function(r){return e.createElement(re,u({},r,{colorModel:Ee}))},Me={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return L({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=I(e)).r,g:r.g,b:r.b};var r},equal:F},Ne=function(r){return e.createElement(U,u({},r,{colorModel:Me}))},we={defaultColor:"rgb(0, 0, 0)",toHsva:B,fromHsva:function(e){var r=I(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:P},ye=function(r){return e.createElement(U,u({},r,{colorModel:we}))},qe=/^#?([0-9A-F]{3,8})$/i,ke=function(r){var t=r.color,l=void 0===t?"":t,s=r.onChange,f=r.onBlur,v=r.escape,d=r.validate,h=r.format,m=r.process,g=c(r,["color","onChange","onBlur","escape","validate","format","process"]),p=o(function(){return v(l)}),b=p[0],_=p[1],x=i(s),C=i(f),E=a(function(e){var r=v(e.target.value);_(r),d(r)&&x(m?m(r):r)},[v,m,d,x]),H=a(function(e){d(e.target.value)||_(v(l)),C(e)},[l,v,d,C]);return n(function(){_(v(l))},[l,v]),e.createElement("input",u({},g,{value:h?h(b):b,spellCheck:"false",onChange:E,onBlur:H}))},Ie=function(e){return"#"+e},Oe=function(r){var t=r.prefixed,n=r.alpha,o=c(r,["prefixed","alpha"]),l=a(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,n?8:6)},[n]),i=a(function(e){return function(e,r){var t=qe.exec(e),n=t?t[1].length:0;return 3===n||6===n||!!r&&4===n||!!r&&8===n}(e,n)},[n]);return e.createElement(ke,u({},o,{escape:l,format:t?Ie:void 0,process:Ie,validate:i}))};
//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./src/pages/index.tsx





const colorOptions = [{
  value: 'emerald',
  label: 'Emerald',
  class: 'bg-emerald-500'
}, {
  value: 'purple',
  label: 'Purple',
  class: 'bg-purple-500'
}, {
  value: 'rose',
  label: 'Rose',
  class: 'bg-rose-500'
}, {
  value: 'amber',
  label: 'Amber',
  class: 'bg-amber-500'
}, {
  value: 'indigo',
  label: 'Indigo',
  class: 'bg-indigo-500'
}];
const IndexPage = () => {
  const {
    color,
    setColor
  } = (0,ThemeContext/* useTheme */.F)();
  return /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(Layout/* default */.Z, null, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "flex flex-col items-center justify-center py-24 sm:py-32 text-center"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("h1", {
    className: "text-4xl sm:text-5xl font-bold text-gray-900 dark:text-dark-text"
  }, "Hi, I'm Neal Stanard"), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "flex flex-col items-center space-y-4"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "flex flex-col items-center space-y-4"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(Z, {
    color: color,
    onChange: setColor,
    className: "!w-48 !h-48"
  }), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("span", {
    className: "text-sm text-gray-600 dark:text-gray-400"
  }, "Current: ", color)))), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "py-24 sm:py-32"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-8"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "mx-auto max-w-2xl"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("h2", {
    className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl"
  }, "About Me"), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("p", {
    className: "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
  }, "I'm a passionate software engineer with expertise in web development and modern technologies. I love building beautiful, responsive, and user-friendly applications that solve real-world problems."), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "border-l-4 border-primary-600 pl-6"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("h3", {
    className: "text-base font-semibold leading-7 text-gray-900 dark:text-dark-text"
  }, "Skills"), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("p", {
    className: "mt-2 text-base leading-7 text-gray-600 dark:text-gray-400"
  }, "JavaScript, TypeScript, React, Node.js, Gatsby, Next.js,", ' ', /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link, {
    to: "/resume",
    className: "text-primary-500 dark:text-primary-400 hover:underline"
  }, "and more"))), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("div", {
    className: "border-l-4 border-primary-600 pl-6"
  }, /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("h3", {
    className: "text-base font-semibold leading-7 text-gray-900 dark:text-dark-text"
  }, "Experience"), /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("p", {
    className: "mt-2 text-base leading-7 text-gray-600 dark:text-gray-400"
  }, "Building modern web applications and delivering high-quality software solutions")))))));
};
/* harmony default export */ const pages = (IndexPage);
const Head = () => /*#__PURE__*/external_C_Users_Neal_Documents_Development_nealstanard_com_node_modules_react_index_js_default().createElement("title", null, "Home | Neal Stanard");

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
//# sourceMappingURL=component---src-pages-index-tsx.js.map