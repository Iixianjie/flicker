(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"/FQm":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return v}));var a=576,o=1400,r=1800,i=2200,c={onClick(e){e.stopPropagation()}},l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t};function u(e,t){if(e)return e.currentStyle||window.getComputedStyle?e.currentStyle?e.currentStyle[t]:window.getComputedStyle(e)[t]:null}function s(e){var t=null;function n(e){var a=e.parentNode;if(a){var o=a,r=o.offsetHeight,i=o.scrollHeight;if(i>r){var c=u(o,"overflow");if("scroll"===c||"auto"===c)return void(t=o)}n(o)}}return n(e),t}function d(e,t){var n=t||{},a=n.fullVisible,o=void 0!==a&&a,r=n.wrapEl,i=0,c=0,l=window.innerHeight,u=window.innerWidth;if(r){var s=r.getBoundingClientRect(),d=s.top,f=s.left,m=s.bottom,v=s.right;i+=d,c+=f,l-=l-m,u-=u-v}var g=e.getBoundingClientRect(),b=g.top,p=g.left,w=g.bottom,O=g.right,h=(o?w:b)<l,j=(o?b:w)>i,y=(o?p:O)>c,E=(o?O:p)<u;return j&&E&&h&&y}function f(e){return!!e||0===e}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0,o=t;a<o.length;a++){var r=o[a];if(f(r))return r}return!1}function v(e,t,n){var a=!1,o=0;function r(e){if((!n||(o++,o!==n))&&e){var i=e.parentNode;if(i){var c=t(i);if(c)return void(a=!0)}r(i)}}return r(e),a}},"6RdY":function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));n("iCBh"),n("CiMt");var a=n("PpiC"),o=n("k1fw"),r=n("tJVT"),i=n("q1tI"),c=n.n(i),l=n("pMrh"),u=n("/FQm"),s=n("jNhd"),d=n("9RZ+"),f=n("lgaZ"),m=n("wEEd"),v=n("TSYQ"),g=n.n(v),b=n("LUSG"),p=n("M5fq"),w=n("+NKj"),O=n("hEdC"),h=n("sEfC"),j=n.n(h);function y(e,t){var n=e.props,a=e.modalSize,o=n.onRemove,c=n.onRemoveDelay,l=void 0===c?800:c,u=Object(r["a"])(a,2),s=u[0],d=u[1];Object(f["g"])(e.lockScroll&&e.show),Object(w["a"])(e.contRef,()=>{e.show&&(e.clickAwayClosable&&!e.mask||e.refState.shouldTriggerClose&&!e.refState.maskShouldShow)&&setTimeout(t.close,150)}),Object(O["a"])(()=>{e.show||o&&setTimeout(o,l)},[e.show]),Object(i["useEffect"])(()=>{t.calcPos()},[s,d]),Object(i["useEffect"])(()=>{var e=j()(()=>{t.calcPos()},500);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[])}var E=n("WmNS"),x=n.n(E),S=n("9og8");function k(e,t){var n=Object(r["a"])(t,2),a=n[0],o=n[1],i=Object(r["a"])(e,2),c=i[0],l=i[1],u=a*c,s=o*l;return[u,s]}var C="FR_LAST_CLICK_POSITION_X",N="FR_LAST_CLICK_POSITION_Y";function T(){return window[C]}function P(){return window[N]}var R=null;function _(e){R&&clearTimeout(R);var t=e.x||e.screenX,n=e.y||e.screenY;window[C]=t,window[N]=n,R=setTimeout(()=>{window[C]=void 0,window[N]=void 0},500)}function I(){window.removeEventListener("click",_,!0),window.addEventListener("click",_,!0)}function A(e,t,n){var a=e.show,c=e.mountOnEnter,l=e.unmountOnExit,u=e.contRef,s=e.self,d=e.animationConfig,f=Object(m["d"])(()=>({x:0,y:0,scale:0,opacity:1})),v=Object(r["a"])(f,2),g=v[0],p=v[1],w=Object(b["b"])(a,{mountOnEnter:c,unmountOnExit:l}),O=Object(r["a"])(w,2),h=O[0],j=O[1],y=Object(b["a"])(a,1,{trailing:!1,leading:!0,disabled:!n});return Object(i["useEffect"])(()=>{n&&a&&j(!0)},[a]),Object(i["useEffect"])(()=>{if(n&&u.current)if(a){t.calcPos();var r=T(),i=P();s.pointX=r,s.pointY=i,s.x=r||s.px||0,s.y=i||s.px||0,s.startXPos=s.x-s.px-u.current.offsetWidth/2,s.startYPos=s.y-s.py-u.current.offsetHeight/2;var c=!i&&!r;p({to:function(){var e=Object(S["a"])(x.a.mark((function e(t){return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t({x:c?0:s.startXPos,y:c?-100:s.startYPos,scale:c?1:0,opacity:c?0:1,immediate:!0,reset:!0});case 2:return e.next=4,t({x:0,y:0,scale:1,opacity:1,immediate:!1,config:Object(o["a"])(Object(o["a"])({},d),{},{clamp:!1}),reset:!1});case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()})}else{var l=!s.pointY&&!s.pointX;p({x:l?0:s.startXPos,y:l?-100:s.startYPos,scale:l?1:0,opacity:l?0:1,immediate:!1,config:Object(o["a"])(Object(o["a"])({},d),{},{clamp:!0}),reset:!1,onRest(){e.refState.show||j(!1)}}),s.x=0,s.y=0}},[y]),[g,h]}function L(e){var t=e.instances,n=e.clickAwayClosable,a=e.namespace,o=e.mask,i=e.show,c=e.cIndex,l=e.contRef,u=e.alignment,s=e.setPos,d=e.setShow,f=e.onClose,m=e.triggerNode,v=e.modalSize,g=e.self;function b(e){return e.filter(e=>e.meta.namespace=a)}function p(){if(!o||!i)return!1;var e=t.slice(0,c),n=b(e).some(e=>e.meta.mask);return!n}function w(){if(!i||!n)return!1;var e=t.slice(c+1),a=b(e).some(e=>e.meta.clickAwayClosable);return!a}function O(){var e=l.current?l.current.offsetWidth:v[0],t=l.current?l.current.offsetHeight:v[1],n=[window.innerWidth-e,window.innerHeight-t],a=k(u,n);s(a);var o=Object(r["a"])(a,2),i=o[0],c=o[1];g.px=i,g.py=c}function h(){e.refState.shouldTriggerClose&&(d(!1),null===f||void 0===f||f())}function j(){d(!0)}function y(t){var n,a;null===m||void 0===m||null===(n=m.props)||void 0===n||null===(a=n.onClick)||void 0===a||a.call(n,t),e.refState.show?h():j()}return{maskShouldShow:p,shouldTriggerClose:w,calcPos:O,close:h,open:j,onTriggerNodeClick:y}}var Y=[.5,.5];I();var X=e=>{var t=e.namespace,n=void 0===t?"MODAL":t,a=e.alignment,v=void 0===a?Y:a,p=e.mask,w=void 0===p||p,O=e.maskClassName,h=e.maskTheme,j=e.animationType,E=void 0===j?"fromMouse":j,x=e.mountOnEnter,S=void 0===x||x,k=e.unmountOnExit,C=void 0!==k&&k,N=e.clickAwayClosable,T=void 0===N||N,P=e.lockScroll,R=void 0===P||P,_=e.className,I=e.style,X=e.onClose,H=e.children,M=e.triggerNode,z=e.baseZIndex,K=void 0===z?u["d"]:z,W=e.animationConfig,B=void 0===W?d["c"].stiff:W,D=e.alpha,q=e.innerRef,F=Object(i["useRef"])(null),G=q||F,J=Object(f["f"])(e,!1,{defaultValueKey:"defaultShow",triggerKey:"onChange",valueKey:"show"}),V=Object(r["a"])(J,2),Z=V[0],Q=V[1],U=Object(b["a"])(Z,200,{trailing:!0,leading:!1}),$=Object(f["i"])("fr_modal_metas",{enable:U,meta:{mask:w,clickAwayClosable:T,namespace:n}}),ee=Object(r["a"])($,2),te=ee[0],ne=ee[1],ae=-1===te?K:te+K,oe=Object(s["a"])(),re=Object(r["a"])(oe,2),ie=re[0],ce=re[1],le=ce.width,ue=ce.height,se=Object(i["useState"])([0,0]),de=Object(r["a"])(se,2),fe=de[0],me=de[1],ve=Object(f["k"])({x:0,y:0,px:0,py:0,pointX:0,pointY:0,startXPos:0,startYPos:0}),ge={cIndex:te,instances:ne,namespace:n,mask:w,show:Z,clickAwayClosable:T,contRef:G,alignment:v,setPos:me,refState:null,setShow:Q,onClose:X,triggerNode:M,lockScroll:R,modalSize:[le,ue],props:e,self:ve,mountOnEnter:S,unmountOnExit:C,animationConfig:B},be=L(ge);y(ge,be),ge.refState=Object(f["h"])({show:Z,maskShouldShow:be.maskShouldShow(),shouldTriggerClose:be.shouldTriggerClose()});var pe="fromMouse"===E,we=A(ge,be,pe),Oe=Object(r["a"])(we,2),he=Oe[0],je=Oe[1];function ye(){return pe?je&&c.a.createElement(m["a"].div,{ref:G,className:g()("m78-modal",_),style:Object(o["a"])(Object(o["a"])({},I),{},{left:fe[0],top:fe[1],zIndex:ae,transform:Object(m["c"])([he.x,he.y,he.scale],(e,t,n)=>"translate3d(".concat(e,"px,").concat(t,"px,0px) scale3d(").concat(n,",").concat(n,",").concat(n,")")),opacity:he.opacity})},c.a.createElement("div",{className:"m78-modal_calc-node",ref:ie}),H):c.a.createElement(d["a"],{toggle:Z,type:E,config:B,mountOnEnter:S,unmountOnExit:C,innerRef:G,className:g()("m78-modal",_),alpha:D,style:Object(o["a"])(Object(o["a"])({},I),{},{left:fe[0],top:fe[1],zIndex:ae})},c.a.createElement("div",{className:"m78-modal_calc-node",ref:ie}),H)}return c.a.createElement(c.a.Fragment,null,M&&c.a.cloneElement(M,{onClick:be.onTriggerNodeClick}),c.a.createElement(l["default"],{namespace:n},ge.refState.maskShouldShow&&w&&c.a.createElement(d["a"],{onClick:T?be.close:void 0,toggle:Z,type:"fade",mountOnEnter:!0,unmountOnExit:!0,className:g()("dark"===h?"m78-mask-b":"m78-mask",O),style:{zIndex:ae},reset:!0}),ye()))},H=Object(p["a"])(X,{namespace:"MODAL"}),M=e=>{var t=e.content,n=Object(a["a"])(e,["content"]);return H(Object(o["a"])(Object(o["a"])({},n),{},{children:t,triggerNode:null}))},z=Object.assign(X,{api:M}),K=z},B9oH:function(e,t,n){},CiMt:function(e,t,n){},LUSG:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n("tJVT"),o=n("q1tI"),r=n("lgaZ");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2?arguments[2]:void 0,i=n||{},c=i.disabled,l=i.deps,u=void 0===l?[]:l,s=i.extraDelay,d=void 0===s?0:s,f=i.trailing,m=i.leading,v=void 0===m||m,g=!t||c||!f&&!v,b=Object(o["useState"])(!(!g&&v)&&e),p=Object(a["a"])(b,2),w=p[0],O=p[1],h=Object(r["k"])({toggleTimer:null});return Object(o["useEffect"])(()=>{if(!g){if((!e||v)&&(e||f))return h.toggleTimer=setTimeout(()=>{O(e)},t+d),()=>{h.toggleTimer&&clearTimeout(h.toggleTimer)};O(e)}},[e,...u]),g?e:w}function c(e,t){var n=t.mountOnEnter,r=void 0===n||n,i=t.unmountOnExit,c=void 0!==i&&i,l=Object(o["useState"])(()=>!r||e),u=Object(a["a"])(l,2),s=u[0],d=u[1];function f(e){!e||s?c&&!e&&s&&d(!1):d(!0)}return[s,f]}},iCBh:function(e,t,n){"use strict";n("6Hk/"),n("B9oH");var a=n("DjD+");new a["a"]({effect:"m78-effect"})},l9W4:function(e,t,n){e.exports={box:"box___1-Gc_"}},pMrh:function(e,t,n){"use strict";n.r(t);var a=n("i8i4"),o=n.n(a),r=n("K3qG"),i=e=>{var t=e.children,n=e.namespace;return o.a.createPortal(t,Object(r["f"])(n))},c=i;t["default"]=c},uX6x:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("6RdY"),i=n("l9W4"),c=n.n(i),l=()=>o.a.createElement("div",null,o.a.createElement(r["a"],{alignment:[0,0],triggerNode:o.a.createElement("button",{type:"button"},"[0, 0] \u5de6\u4e0a")},o.a.createElement("div",{className:c.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(r["a"],{alignment:[.5,.5],triggerNode:o.a.createElement("button",{type:"button"},"[0.5, 0.5] \u5c45\u4e2d(\u9ed8\u8ba4)")},o.a.createElement("div",{className:c.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(r["a"],{alignment:[1,1],triggerNode:o.a.createElement("button",{type:"button"},"[1, 1] \u53f3\u4e0b")},o.a.createElement("div",{className:c.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(r["a"],{alignment:[1,0],triggerNode:o.a.createElement("button",{type:"button"},"[1, 0] \u53f3\u4e0a")},o.a.createElement("div",{className:c.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")));t["default"]=l}}]);