(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"1p7j":function(e,t,a){"use strict";a("GTID"),a("TcRa");var n=a("ZSGz");a.d(t,"default",(function(){return n["a"]}))},GTID:function(e,t,a){"use strict";a("iCBh"),a("pF+1")},QWW6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("1p7j"),s=(a("GTID"),()=>i.a.createElement("div",{className:"demo"},i.a.createElement(l["default"],{size:"large",text:"\u81ea\u5b9a\u4e49\u6587\u672c"})));t["default"]=s},TcRa:function(e,t){},ZSGz:function(e,t,a){"use strict";var n=a("0Owb"),i=a("PpiC"),l=a("q1tI"),s=a.n(l),c=a("Rz6r"),r=a("tJVT"),o=a("lgaZ");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,a=arguments.length>2?arguments[2]:void 0,n=a||{},i=n.disabled,s=n.deps,c=void 0===s?[]:s,u=n.extraDelay,f=void 0===u?0:u,d=Object(l["useState"])(!!i&&e),m=Object(r["a"])(d,2),p=m[0],g=m[1],v=Object(o["i"])({toggleTimer:null});return Object(l["useEffect"])(()=>{if(t&&!i){if(e!==p)return v.toggleTimer=setTimeout(()=>{g(e)},t+f),()=>{v.toggleTimer&&clearTimeout(v.toggleTimer)}}else g(e)},[e,...c]),p}var f=a("9RZ+"),d=a("TSYQ"),m=a.n(d),p=e=>{var t=e.size,a=e.inline,l=e.text,r=void 0===l?"\u52a0\u8f7d\u4e2d":l,o=e.full,d=e.dark,p=e.show,g=void 0===p||p,v=e.className,T=e.loadingDelay,_=void 0===T?0:T,b=Object(i["a"])(e,["size","inline","text","full","dark","show","className","loadingDelay"]),w=u(g,_);return s.a.createElement(f["a"],Object(n["a"])({toggle:w,type:"fade",mountOnEnter:!0,unmountOnExit:!0},b,{config:f["c"].stiff,className:m()(v,"fr-spin",{["__".concat(t)]:!!t,__inline:a,__full:o,__dark:d})}),s.a.createElement(c["WindmillIcon"],{className:"fr-spin_unit"}),r&&s.a.createElement("span",{className:"fr-spin_text"},r,s.a.createElement("span",{className:"fr-spin_ellipsis"})))};t["a"]=p},"pF+1":function(e,t,a){}}]);