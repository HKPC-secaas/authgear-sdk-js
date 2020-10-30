(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(185)),i={title:"ContainerDelegate",sidebar_label:"ContainerDelegate"},c={id:"react-native/interfaces/containerdelegate",title:"ContainerDelegate",description:"@authgear/react-native \u203a ContainerDelegate",source:"@site/docs/react-native/interfaces/containerdelegate.md",permalink:"/authgear-sdk-js/docs/react-native/interfaces/containerdelegate",sidebar_label:"ContainerDelegate",sidebar:"root",previous:{title:"ConfigureOptions",permalink:"/authgear-sdk-js/docs/react-native/interfaces/configureoptions"},next:{title:"ContainerOptions",permalink:"/authgear-sdk-js/docs/react-native/interfaces/containeroptions"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:'<a id="onrefreshtokenexpired" name="onrefreshtokenexpired"></a>  onRefreshTokenExpired',id:"onrefreshtokenexpired",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/authgear-sdk-js/docs/react-native/index"}),"@authgear/react-native")," \u203a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/authgear-sdk-js/docs/react-native/interfaces/containerdelegate"}),"ContainerDelegate")),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ContainerDelegate"))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"methods"},"Methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/authgear-sdk-js/docs/react-native/interfaces/containerdelegate#onrefreshtokenexpired"}),"onRefreshTokenExpired"))),Object(o.b)("h2",{id:"methods-1"},"Methods"),Object(o.b)("h3",{id:"onrefreshtokenexpired"},Object(o.b)("a",{id:"onrefreshtokenexpired",name:"onrefreshtokenexpired"}),"  onRefreshTokenExpired"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"onRefreshTokenExpired"),"(): ",Object(o.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(o.b)("p",null,"Called when the server rejects the refresh token.\nWhen this function is called, the session is not cleared yet."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise\u2039void\u203a")))}p.isMDXComponent=!0},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);