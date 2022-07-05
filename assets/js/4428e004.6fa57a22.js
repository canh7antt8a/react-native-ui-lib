/*! For license information please see 4428e004.6fa57a22.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[8092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},201:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7378),r(3905));const a={sidebar_position:5,sidebar_label:"ThemeManager",title:"ThemeManager"},i=void 0,l={unversionedId:"foundation/theme-manager",id:"foundation/theme-manager",isDocsHomePage:!1,title:"ThemeManager",description:"Use ThemeManager to set default global behavior for your app.",source:"@site/../docs/foundation/theme-manager.md",sourceDirName:"foundation",slug:"/foundation/theme-manager",permalink:"/react-native-ui-lib/docs/foundation/theme-manager",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/foundation/theme-manager.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"ThemeManager",title:"ThemeManager"},sidebar:"tutorialSidebar",previous:{title:"Modifiers",permalink:"/react-native-ui-lib/docs/foundation/modifiers"},next:{title:"ActionBar",permalink:"/react-native-ui-lib/docs/components/basic/ActionBar"}},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeManager")," to set default global behavior for your app."),(0,o.kt)("h4",{id:"setcomponenttheme"},"setComponentTheme"),(0,o.kt)("p",null,"Set default props for a component by passing an object or a callback (for dynamic, runtime default props)\nThe default value will be overridden if a prop is being passed to the component instance (see ",(0,o.kt)("inlineCode",{parentName:"p"},"setComponentForcedTheme")," for that)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ThemeManager.setComponentTheme(componentName, defaultPropsObject);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ThemeManager.setComponentTheme(componentName, componentProps => newDefaultPropsObject);"))),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {ThemeManager} from 'react-native-ui-lib';\n\nThemeManager.setComponentTheme('Text', {\n    text70: true, // will set the text70 typography modifier prop to be true by default\n    grey10: true, // will set the grey10 color modifier prop to be true by default \n});\n\n\nThemeManager.setComponentTheme('Button', (props, context) => {\n\n  return {\n    // this will apply a different backgroundColor\n    // depending on whether the Button has an outline or not\n    backgroundColor: props.outline ? 'black' : 'green',\n  };\n});\n")),(0,o.kt)("h4",{id:"setcomponentforcedtheme"},"setComponentForcedTheme"),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"setComponentTheme"),", but can't be overridden by props passed to the component. "),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ThemeManager.setComponentForcedTheme('Card', (props, context) => {\n  return {\n    containerStyle: [styles.defaultContainerStyle, props.containerStyle]\n  };\n});\n")))}p.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,u=o(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))r.call(i,p)&&(u[p]=i[p]);if(t){l=t(i);for(var s=0;s<l.length;s++)n.call(i,l[s])&&(u[l[s]]=i[l[s]])}}return u}},1535:(e,t,r)=>{var n=r(2525),o=60103,a=60106;var i=60109,l=60110,u=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),l=s("react.context"),u=s("react.forward_ref"),s("react.suspense"),c=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function h(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var v=g.prototype=new h;v.constructor=g,n(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+P(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(T(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+P(l=e[c],c);u+=_(l,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(l=e.next()).done;)u+=_(l=l.value,t,r,p=n+P(l,c++),i);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function S(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var M={current:null};function N(){var e=M.current;if(null===e)throw Error(m(321));return e}},7378:(e,t,r)=>{r(1535)}}]);