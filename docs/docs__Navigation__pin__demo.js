(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"0+My":function(e,t,a){},"0Owb":function(e,t,a){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},r.apply(this,arguments)}a.d(t,"a",(function(){return r}))},B9oH:function(e,t,a){},C5yf:function(e,t,a){"use strict";a.d(t,"c",(function(){return S})),a.d(t,"g",(function(){return T})),a.d(t,"e",(function(){return _})),a.d(t,"f",(function(){return m})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return v})),a.d(t,"d",(function(){return h})),a.d(t,"h",(function(){return g})),a.d(t,"i",(function(){return w}));a("iCBh"),a("QyJt");var r=a("q1tI"),n=a.n(r),o=a("TSYQ"),l=a.n(o),i=a("K3qG"),c={count:3,children:[],aspectRatio:1,border:!0,borderColor:"rgba(0, 0, 0, 0.15)"},s=e=>{var t=e.count,a=e.children,r=e.crossSpacing,o=e.mainSpacing,c=e.spacing,s=e.size,m=e.aspectRatio,f=e.complete,d=void 0===f||f,p=e.border,v=e.borderColor,b=e.className,h=e.style,O=e.contClassName,g=e.contStyle,y=Object(i["s"])(a)?[...a]:[a],E=[...y],j=r||c,w=o||c,N=E.length%t,S=100/t;if(d&&0!==N&&t-N>0)for(var T=0;T<t-N;T++)y.push(n.a.createElement("div",null));return n.a.createElement("div",{className:l()("m78-grid",b),style:h},y.map((e,a)=>{var r=a+1,o=r%t===0,i=(r-1)%t===0,c=a<t,f=E.length-r<(N||t),d=w&&!o,b=w?(t-1)*w/t:0;return n.a.createElement(s?"div":u,{ratio:m,key:a,style:{color:v,border:p?void 0:"none",width:w?"calc(".concat(S,"% - ").concat(b,"px)"):"".concat(S,"%"),height:s||void 0,marginBottom:!f&&j?j:void 0,marginRight:d?w:void 0},className:l()("m78-grid_item",{__topBorder:p&&(c||j),__leftBorder:p&&(i||w)})},n.a.createElement("div",{className:l()("m78-grid_cont",O),style:g},e))}))};s.defaultProps=c;var m=s,f=e=>{var t=e.ratio,a=void 0===t?1:t,r=e.children,o=e.className,i=e.style;return n.a.createElement("div",{className:l()("m78-aspect-ratio",o),style:i},n.a.createElement("div",{className:"m78-aspect-ratio_scaffold",style:{paddingTop:"".concat(100*a,"%")}}),r)},u=f,d=a("k1fw"),p=e=>{var t=e.children,a=e.attach,r=e.className,o=e.style;return n.a.createElement("div",{className:l()("m78-center",r,o),style:Object(d["a"])({position:a?"absolute":void 0},o)},t)},v=p,b=e=>{var t=e.vertical,a=e.width,r=e.height,o=e.color,i=e.margin,c=void 0===i?12:i,s=t?"0 ".concat(c,"px"):"".concat(c,"px 0");return n.a.createElement("div",{className:l()("m78-divider",t&&"__vertical"),style:{width:a,height:r,backgroundColor:o,margin:s}})},h=b,O=e=>{var t,a,r=e.width,o=e.height,c=e.children;if(r&&!o&&(t=r),o&&!r&&(a=o),a||t||(a=16),c&&Object(i["s"])(c)){var s=c.reduce((e,t,a)=>(e.push(t),a!==c.length-1&&e.push(n.a.createElement(O,{key:a+Math.random(),width:r,height:o})),e),[]);return s}return n.a.createElement("div",{className:l()("m78-spacer",!!t&&"__inline"),style:{width:t,height:a}})},g=O,y=a("0Owb"),E=a("PpiC"),j=e=>{var t=e.className,a=e.title,r=e.desc,o=e.leading,i=e.trailing,c=e.crossAlign,s=Object(E["a"])(e,["className","title","desc","leading","trailing","crossAlign"]);return n.a.createElement(T,Object(y["a"])({},s,{className:l()("m78-tile",t),crossAlign:c}),o&&n.a.createElement("div",{className:"m78-tile_leading"},o),n.a.createElement("div",{className:"m78-tile_main"},a&&n.a.createElement("div",null,a),r&&n.a.createElement("div",null,r)),i&&n.a.createElement("div",{className:"m78-tile_trailing"},i))},w=j;function N(e,t){var a={};return e&&(a["m78-main-".concat(e)]=!0),t&&(a["m78-cross-".concat(t)]=!0),a}var S=e=>{var t=e.children,a=e.style,r=e.className,o=e.mainAlign,i=e.crossAlign,c=Object(E["a"])(e,["children","style","className","mainAlign","crossAlign"]);return n.a.createElement("div",Object(y["a"])({},c,{className:l()("m78-column",r,N(o,i)),style:a}),t)},T=e=>{var t=e.children,a=e.style,r=e.className,o=e.mainAlign,i=e.crossAlign,c=void 0===i?"start":i,s=Object(E["a"])(e,["children","style","className","mainAlign","crossAlign"]);return n.a.createElement("div",Object(y["a"])({},s,{className:l()("m78-row",r,N(o,c)),style:a}),t)},_=e=>{var t=e.flex,a=void 0===t?1:t,r=e.children,o=e.order,i=e.style,c=e.className,s=e.align,m=Object(E["a"])(e,["flex","children","order","style","className","align"]);return n.a.createElement("div",Object(y["a"])({},m,{className:l()(c,s&&"m78-self-".concat(s)),style:Object(d["a"])({flex:a,order:o},i)}),r)}},LZhS:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("C5yf"),l=a("p1Ck"),i=()=>n.a.createElement("div",null,n.a.createElement("div",{className:"tc",style:{fontSize:40}},"\u5411\u4e0b\u6eda\u52a8\ud83d\udc47"),n.a.createElement(o["h"],{height:800}),n.a.createElement("div",{style:{position:"relative",height:800,fontSize:50}},n.a.createElement("span",{style:{position:"absolute",top:100,left:"11.28%"}},n.a.createElement(l["a"],{offsetTop:64},n.a.createElement("span",null,"\ud83d\ude02"))),n.a.createElement("span",{style:{position:"absolute",top:200,left:"25.56%"}},n.a.createElement(l["a"],{offsetTop:64},n.a.createElement("span",null,"\ud83e\udd23"))),n.a.createElement("span",{style:{position:"absolute",top:300,left:"39.84%"}},n.a.createElement(l["a"],{offsetTop:64},n.a.createElement("span",null,"\ud83d\ude03"))),n.a.createElement("span",{style:{position:"absolute",top:400,left:"54.12%"}},n.a.createElement(l["a"],{offsetTop:64},n.a.createElement("span",null,"\ud83d\ude05"))),n.a.createElement("span",{style:{position:"absolute",top:500,left:"68.40%"}},n.a.createElement(l["a"],{offsetTop:64},n.a.createElement("span",null,"\ud83d\ude0b"))),n.a.createElement("span",{style:{position:"absolute",top:600,left:"82.67%"}},n.a.createElement(l["a"],{offsetTop:64},n.a.createElement("span",null,"\ud83d\ude06")))),n.a.createElement(o["h"],{height:800}));t["default"]=i},PpiC:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}function n(e,t){if(null==e)return{};var a,n,o=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}a.d(t,"a",(function(){return n}))},QyJt:function(e,t,a){},TSYQ:function(e,t,a){var r,n;(function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&e.push(l)}else if("object"===n)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o["default"]=o,e.exports=o):(r=[],n=function(){return o}.apply(t,r),void 0===n||(e.exports=n))})()},iCBh:function(e,t,a){"use strict";a("6Hk/"),a("B9oH");var r=a("MPsd");new r["a"]({effect:"m78-effect"})},p1Ck:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));a("iCBh"),a("0+My");var r=a("k1fw"),n=a("tJVT"),o=a("q1tI"),l=a.n(o),i=a("zdPv"),c=a("K3qG"),s=a("sEfC"),m=a.n(s),f=a("TSYQ"),u=a.n(f),d=["height","width","position","top","bottom","marginTop","marginBottom","display"],p=e=>{var t=e.target,a=e.offsetTop,s=void 0===a?0:a,f=e.offsetBottom,p=void 0===f?0:f,v=e.children,b=e.style,h=e.className,O=e.disableBottom,g=e.disableTop,y=Object(i["useSetState"])({topOver:!1,bottomOver:!1,shadowStyle:{},targetTopOffset:0,targetBottomOffset:0}),E=Object(n["a"])(y,2),j=E[0],w=E[1],N=Object(o["useRef"])(null),S=Object(o["useRef"])(null);Object(o["useEffect"])(B,[j.el,j.topOver,j.bottomOver]),Object(o["useEffect"])(_,[j.shadowStyle]),Object(o["useEffect"])(()=>{var e=Object(i["getRefDomOrDom"])(t);if(e)w({el:e});else{var a=Object(c["o"])(N.current);a&&a!==document.documentElement&&a!==document.body&&w({el:a})}},[t]),Object(i["useScroll"])({el:j.el,throttleTime:5,onScroll:_});var T=Object(i["useFn"])(()=>_(),e=>m()(e,600));function _(){if(S.current&&N.current){var e=j.bottomOver||j.topOver,t=e?S.current:N.current,a=Object(c["b"])(t,{fullVisible:!0,wrapEl:j.el,offset:{top:s+1,bottom:p+1}}),r=a.top,n=a.bottom,o=!!g||r,l=!!O||n;if(j.el){var i=j.el.getBoundingClientRect(),m=i.top,f=i.bottom,u=m,d=window.innerHeight-f;u===j.targetTopOffset&&d===j.targetBottomOffset||w({targetBottomOffset:window.innerHeight-f,targetTopOffset:m})}o&&l&&(j.topOver||j.bottomOver)?w({topOver:!1,bottomOver:!1}):o||j.topOver?l||j.bottomOver||w({topOver:!1,bottomOver:!0}):w({topOver:!0,bottomOver:!1})}}function B(){if(!j.topOver&&!j.bottomOver){var e=Object(c["p"])(N.current);if("fixed"!==e.position){var t={};d.forEach(a=>t[a]=e[a]),"fixed"===t.position&&(t.position="relative"),w({shadowStyle:t})}}}Object(i["useScroll"])({onScroll:()=>{j.el&&T()}});var C=j.bottomOver||j.topOver;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{ref:S,style:Object(r["a"])(Object(r["a"])({},j.shadowStyle),{},{display:C?void 0:"none"}),className:"m78-pin_shadow"}),l.a.createElement("div",{className:u()("m78-pin",h,C&&"__isPin"),ref:N,style:Object(r["a"])(Object(r["a"])({},b),{},{position:C?"fixed":void 0,top:j.topOver?s+j.targetTopOffset:void 0,bottom:j.bottomOver?p+j.targetBottomOffset:void 0})},v))},v=p}}]);