(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103,102],{"+DRe":function(e,t,n){},"/FQm":function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return c}));var i={onClick(e){e.stopPropagation()}},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t};function r(e,t){if(e)return e.currentStyle||window.getComputedStyle?e.currentStyle?e.currentStyle[t]:window.getComputedStyle(e)[t]:null}function o(e){var t=null;function n(e){var i=e.parentNode;if(i){var a=i,o=a.offsetHeight,s=a.scrollHeight;if(s>o){var u=r(a,"overflow");if("scroll"===u||"auto"===u)return void(t=a)}n(a)}}return n(e),t}function s(e,t){var n=t||{},i=n.fullVisible,a=void 0!==i&&i,r=n.wrapEl,o=0,s=0,u=window.innerHeight,l=window.innerWidth;if(r){var c=r.getBoundingClientRect(),d=c.top,m=c.left,p=c.bottom,f=c.right;o+=d,s+=m,u-=u-p,l-=l-f}var v=e.getBoundingClientRect(),h=v.top,b=v.left,q=v.bottom,g=v.right,x=(a?q:h)<u,w=(a?h:q)>o,E=(a?b:g)>s,y=(a?g:b)<l;return w&&y&&x&&E}function u(e){return!!e||0===e}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=0,a=t;i<a.length;i++){var r=a[i];if(u(r))return r}return!1}function c(e,t,n){var i=!1,a=0;function r(e){if((!n||(a++,a!==n))&&e){var o=e.parentNode;if(o){var s=t(o);if(s)return void(i=!0)}r(o)}}return r(e),i}},"0epQ":function(e,t,n){"use strict";n("iCBh"),n("+DRe")},B9oH:function(e,t,n){},Ctpu:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));var i=n("q1tI"),a=n.n(i),r=n("K3qG"),o=()=>null,s=e=>{var t=e.when,n=e.children;t=!!t;var i=Object(r["j"])(n);return t&&(i?n():n)},u=e=>{var t=e.when,n=e.children;function i(){return a.a.cloneElement(n,{style:{display:"none"}})}return t?n:i()},l=e=>{var t=e.children,n=a.a.Children.toArray(t),i=n.reduce((e,t)=>{if(t.type!==s&&t.type!==u)return e;var n="when"in t.props,i=!!t.props.when;return n||e.notWhen||(e.notWhen=a.a.cloneElement(t,{when:!0})),i&&!e.showEl&&(e.showEl=t),e},{showEl:null,notWhen:null});return i.showEl||i.notWhen||null};t["d"]=o},HWsh:function(e,t,n){},Jiyh:function(e,t){},KCwa:function(e,t,n){e.exports=n.p+"static/4.963a5903.jpg"},Qa2S:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=(n("iCBh"),n("HWsh"),n("ODXe")),o=n("jNhd"),s=n("kr9X"),u=n("TSYQ"),l=n.n(u),c=e=>{var t=e.watermark,n=e.html,i=e.content,u=e.style,c=e.className,d=Object(o["a"])(),m=Object(r["a"])(d,2),p=m[0],f=m[1],v=f.width,h=f.height,b=Math.ceil(h/240)+4,q=Math.ceil(v/300);return a.a.createElement("div",{ref:p,className:l()("fr-article-box",c),style:u},a.a.createElement(s["If"],{when:n},()=>a.a.createElement("div",{className:"fr-article-box_html",dangerouslySetInnerHTML:{__html:n}})),a.a.createElement(s["If"],{when:i&&!n},a.a.createElement("div",null,i)),a.a.createElement(s["If"],{when:t},()=>a.a.createElement("div",{className:"fr-article-box_watermark"},Array.from({length:b}).map((e,n)=>a.a.createElement("div",{className:"fr-article-box_watermark_item",key:n},Array.from({length:q}).map((e,n)=>a.a.createElement("span",{key:n},t)))))))},d=c,m=n("KCwa"),p=n.n(m),f='\n  <div>\n    <h2><center>\u4e00\u7bc7\u5173\u4e8e\u6a58\u5b50\u7684\u6587\u7ae0</center></h2>\n  \n    <img src="'.concat(p.a,'" />\n    \n    <h3 style="margin-top: 16px">\u6a58\u5b50\u7684\u8425\u517b\u6210\u5206:</h3>\n    <table border="1">\n      <tr>\n        <td>iam. Accusamus deciatis, sed.</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sint, ven</td>\n        <td>niti dicta eaque facilis fugiat, ipsum mollitia nisi porro possimus q</td>\n        <td>leuod recusandae sequi sit voluptate. Ipsum perspi</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n    </table>\n    \n    <h3 style="margin-top: 16px">\u5386\u53f2:</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n    <img src="').concat(p.a,'" style="width: 250px;float: left;margin-right: 12px" />\n    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit quo rerum? Ab accusamus consequatur culpa cumque debitis, dolorum eum exercitationem in ipsa iure quod rem saepe sed sit ullam.</span><span>Dicta, incidunt iusto libero neque omnis quas reprehenderit unde! Aspernatur beatae cumque eaque esse ex, fugit laboriosam laborum libero numquam officia pariatur perferendis placeat quidem sapiente suscipit unde, vero voluptate?</span><span>Ad aliquid esse fugiat fugit numquam rem, reprehenderit totam vitae. Hic nobis officiis quis quisquam repellat. Adipisci, dolore eum excepturi inventore libero numquam odit, pariatur quia repellat repellendus sunt voluptas!</span><span>Dicta iure odit officiis perferendis tempore. A ad aliquam animi aspernatur at delectus dolor, nobis quisquam, quos reiciendis saepe sunt tenetur vero? Doloribus inventore natus neque reprehenderit velit vero voluptatem!</span><span>Accusamus dolorem doloribus esse facilis impedit natus neque nulla provident, quia ratione rem rerum voluptate! Ab aliquam amet cum ea id illum magni molestiae quia repellendus, sed sit totam vero!</span></p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n  </div>\n'),v=()=>a.a.createElement("div",null,a.a.createElement(d,{watermark:"\u6211\u662f\u6c34\u5370",html:f}));t["default"]=v},TqRt:function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},VDNK:function(e,t,n){},YeeV:function(e,t,n){"use strict";n.r(t);var i=n("wx14"),a=n("q1tI"),r=n.n(a),o=(n("B2uJ"),n("+su7"),n("qOys")),s=n.n(o),u=n("5Yjd"),l=n.n(u),c=r.a.memo((function(){var e=n("TqRt"),t=e(n("q1tI")),i=e(n("Qa2S")),a=function(){return t["default"].createElement(i["default"],null)};return t["default"].createElement(a)}));t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"articlebox-\u5bcc\u6587\u672c\u76d2\u5b50"},r.a.createElement("a",{"aria-hidden":"true",href:"#articlebox-\u5bcc\u6587\u672c\u76d2\u5b50"},r.a.createElement("span",{className:"icon icon-link"})),"ArticleBox \u5bcc\u6587\u672c\u76d2\u5b50"),r.a.createElement("p",null,"\u4e00\u4e2a\u7528\u4e8e\u5c55\u793a\u5bcc\u6587\u672c\u7684\u5bb9\u5668"),r.a.createElement("p",null,"\u4e0e\u76f4\u63a5\u6e32\u67d3\u7684\u533a\u522b\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5bf9\u56fe\u7247\u3001\u8868\u683c\u7b49\u505a\u4e86\u9650\u5236\u5904\u7406\uff0c\u53ef\u4ee5\u9632\u6b62\u8fc7\u5bbd\u7684\u56fe\u7247\u8d85\u51fa\u5bb9\u5668\u7834\u574f\u6837\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5f88\u597d\u7684\u652f\u6301\u79fb\u52a8\u7aef"),r.a.createElement("li",null,"\u6dfb\u52a0\u6c34\u5370")),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),r.a.createElement(l.a,Object(i["a"])({source:{tsx:'import React from \'react\';\nimport ArticleBox from \'@lxjx/fr/lib/article-box\';\nimport \'@lxjx/fr/lib/article-box/style\';\n\nimport img from \'@/mock/img/4.jpg\';\n\nconst htmlStr = `\n  <div>\n    <h2><center>\u4e00\u7bc7\u5173\u4e8e\u6a58\u5b50\u7684\u6587\u7ae0</center></h2>\n  \n    <img src="${img}" />\n    \n    <h3 style="margin-top: 16px">\u6a58\u5b50\u7684\u8425\u517b\u6210\u5206:</h3>\n    <table border="1">\n      <tr>\n        <td>iam. Accusamus deciatis, sed.</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sint, ven</td>\n        <td>niti dicta eaque facilis fugiat, ipsum mollitia nisi porro possimus q</td>\n        <td>leuod recusandae sequi sit voluptate. Ipsum perspi</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n    </table>\n    \n    <h3 style="margin-top: 16px">\u5386\u53f2:</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n    <img src="${img}" style="width: 250px;float: left;margin-right: 12px" />\n    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit quo rerum? Ab accusamus consequatur culpa cumque debitis, dolorum eum exercitationem in ipsa iure quod rem saepe sed sit ullam.</span><span>Dicta, incidunt iusto libero neque omnis quas reprehenderit unde! Aspernatur beatae cumque eaque esse ex, fugit laboriosam laborum libero numquam officia pariatur perferendis placeat quidem sapiente suscipit unde, vero voluptate?</span><span>Ad aliquid esse fugiat fugit numquam rem, reprehenderit totam vitae. Hic nobis officiis quis quisquam repellat. Adipisci, dolore eum excepturi inventore libero numquam odit, pariatur quia repellat repellendus sunt voluptas!</span><span>Dicta iure odit officiis perferendis tempore. A ad aliquam animi aspernatur at delectus dolor, nobis quisquam, quos reiciendis saepe sunt tenetur vero? Doloribus inventore natus neque reprehenderit velit vero voluptatem!</span><span>Accusamus dolorem doloribus esse facilis impedit natus neque nulla provident, quia ratione rem rerum voluptate! Ab aliquam amet cum ea id illum magni molestiae quia repellendus, sed sit totam vero!</span></p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n  </div>\n`;\n\nconst Demo = () => (\n  <div>\n    <ArticleBox watermark="\u6211\u662f\u6c34\u5370" html={htmlStr} />\n  </div>\n);\n\nexport default Demo;\n',jsx:'import React from \'react\';\nimport ArticleBox from \'@lxjx/fr/lib/article-box\';\nimport \'@lxjx/fr/lib/article-box/style\';\nimport img from \'@/mock/img/4.jpg\';\n\nconst htmlStr = `\n  <div>\n    <h2><center>\u4e00\u7bc7\u5173\u4e8e\u6a58\u5b50\u7684\u6587\u7ae0</center></h2>\n  \n    <img src="${img}" />\n    \n    <h3 style="margin-top: 16px">\u6a58\u5b50\u7684\u8425\u517b\u6210\u5206:</h3>\n    <table border="1">\n      <tr>\n        <td>iam. Accusamus deciatis, sed.</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sint, ven</td>\n        <td>niti dicta eaque facilis fugiat, ipsum mollitia nisi porro possimus q</td>\n        <td>leuod recusandae sequi sit voluptate. Ipsum perspi</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n    </table>\n    \n    <h3 style="margin-top: 16px">\u5386\u53f2:</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n    <img src="${img}" style="width: 250px;float: left;margin-right: 12px" />\n    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit quo rerum? Ab accusamus consequatur culpa cumque debitis, dolorum eum exercitationem in ipsa iure quod rem saepe sed sit ullam.</span><span>Dicta, incidunt iusto libero neque omnis quas reprehenderit unde! Aspernatur beatae cumque eaque esse ex, fugit laboriosam laborum libero numquam officia pariatur perferendis placeat quidem sapiente suscipit unde, vero voluptate?</span><span>Ad aliquid esse fugiat fugit numquam rem, reprehenderit totam vitae. Hic nobis officiis quis quisquam repellat. Adipisci, dolore eum excepturi inventore libero numquam odit, pariatur quia repellat repellendus sunt voluptas!</span><span>Dicta iure odit officiis perferendis tempore. A ad aliquam animi aspernatur at delectus dolor, nobis quisquam, quos reiciendis saepe sunt tenetur vero? Doloribus inventore natus neque reprehenderit velit vero voluptatem!</span><span>Accusamus dolorem doloribus esse facilis impedit natus neque nulla provident, quia ratione rem rerum voluptate! Ab aliquam amet cum ea id illum magni molestiae quia repellendus, sed sit totam vero!</span></p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n  </div>\n`;\n\nconst Demo = () => (\n  <div>\n    <ArticleBox watermark="\u6211\u662f\u6c34\u5370" html={htmlStr} />\n  </div>\n);\n\nexport default Demo;\n'}},{path:"/_demos/article-box-demo",dependencies:{},files:{}}),r.a.createElement(c,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"props"},r.a.createElement("a",{"aria-hidden":"true",href:"#props"},r.a.createElement("span",{className:"icon icon-link"})),"props"),r.a.createElement(s.a,{code:"interface ArticleBoxProps extends ComponentBaseProps {\n  /** \u5408\u6cd5\u7684html\u5b57\u7b26\u4e32 */\n  html?: string;\n  /** \u53ef\u4ee5\u4f20\u5165react\u8282\u70b9\u4ee3\u66ffhtml */\n  content?: React.ReactNode;\n  /** \u6c34\u5370\u5185\u5bb9\uff0c\u4e0d\u4f20\u65f6\u65e0\u6c34\u5370 */\n  watermark?: React.ReactNode;\n}\n",lang:"tsx"}),r.a.createElement("p",null,r.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),r.a.createElement(s.a,{code:"interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n",lang:"tsx"})))}},iCBh:function(e,t,n){"use strict";n("6Hk/"),n("B9oH");var i=n("DjD+"),a=n("kDG4");new i["a"],Object(a["b"])()},jNhd:function(e,t,n){"use strict";var i=n("q1tI"),a=n("bdgK"),r=function(){var e=Object(i["useState"])({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),t=e[0],n=e[1],r=Object(i["useState"])((function(){return new a["a"]((function(e){var t=e[0];t&&n(t.contentRect)}))}))[0],o=Object(i["useCallback"])((function(e){r.disconnect(),e&&r.observe(e)}),[r]);return[o,t]};t["a"]=r},jq6b:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n("0epQ");var i=n("ODXe"),a=n("q1tI"),r=n.n(a),o=n("6y2Z"),s=n("hEdC"),u=n("lgaZ"),l=n("9RZ+"),c=n("pMrh"),d=n("TSYQ"),m=n.n(d),p=e=>{var t=e.mask,n=void 0===t||t,a=e.visible,d=void 0===a||a,p=e.maskClosable,f=void 0===p||p,v=e.show,h=void 0!==v&&v,b=e.onClose,q=e.onRemove,g=e.onRemoveDelay,x=void 0===g?800:g,w=e.unlockDelay,E=void 0===w?360:w,y=e.portal,A=void 0===y||y,j=e.className,k=e.style,O=e.children,S=e.namespace,N=e.dark,C=Object(o["a"])(h),I=Object(i["a"])(C,2),_=I[0],D=I[1];function L(){return r.a.createElement("div",{className:m()("fr-mask_wrap",j),style:k},n&&r.a.createElement("div",{className:"fr-mask_inner",style:{opacity:d?1:0}},r.a.createElement(l["a"],{onClick:f?b:void 0,toggle:h,type:"fade",className:m()("fr-mask-node",N?"fr-mask-b":"fr-mask"),mountOnEnter:!0,unmountOnExit:!0})),O)}return Object(u["e"])(_),Object(s["a"])((function(){!h&&q&&setTimeout(q,x),h&&D(!0),h||setTimeout(()=>{D(!1)},E)}),[h]),A?r.a.createElement(c["default"],{namespace:S},L()):L()},f=p},kDG4:function(e,t,n){"use strict";n.d(t,"b",(function(){return x})),n.d(t,"a",(function(){return w}));n("iCBh"),n("VDNK");var i=n("wx14"),a=n("VTBJ"),r=n("o0o1"),o=n.n(r),s=n("HaE+"),u=n("ODXe"),l=n("Ff2n"),c=n("q1tI"),d=n.n(c),m=n("wEEd"),p=n("lgaZ"),f=n("jq6b"),v=n("/FQm"),h=n("TSYQ"),b=n.n(h),q=e=>{var t=e.children,n=e.className,r=e.contClassName,h=e.contStyle,q=Object(l["a"])(e,["children","className","contClassName","contStyle"]),g=q.show,x=Object(p["h"])({x:0,y:0}),w=Object(m["d"])(()=>({x:0,y:0,scale:0})),E=Object(u["a"])(w,2),y=E[0],A=E[1];return Object(c["useEffect"])(()=>{g?(x.x=window.FR_LAST_CLICK_POSITION_X||0,x.y=window.FR_LAST_CLICK_POSITION_Y||0,A({to:function(){var e=Object(s["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t({x:x.x,y:x.y,scale:0,immediate:!0,reset:!0});case 2:return e.next=4,t({x:0,y:0,scale:1,immediate:!1,config:m["b"].stiff,reset:!1});case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()})):(A({x:x.x,y:x.y,scale:0,immediate:!1,config:m["b"].stiff,reset:!1}),x.x=0,x.y=0)},[g]),d.a.createElement(f["a"],Object(i["a"])({className:b()("fr-sfm",n)},q),d.a.createElement(m["a"].div,Object(i["a"])({className:b()(r,"fr-sfm_cont"),style:Object(a["a"])({transform:Object(m["c"])([y.x,y.y,y.scale],(e,t,n)=>"translate3d(".concat(e,"px,").concat(t,"px, 0px) scale3d(").concat(n,",").concat(n,",").concat(n,")")),opacity:y.scale},h)},v["g"]),t))};function g(e){var t=e.x||e.screenX,n=e.y||e.screenY,i=window.innerHeight/2,a=window.innerWidth/2;window.FR_LAST_CLICK_POSITION_X=t-a,window.FR_LAST_CLICK_POSITION_Y=n-i}function x(){window.removeEventListener("click",g,!0),window.addEventListener("click",g,!0)}var w=q},kr9X:function(e,t,n){"use strict";var i=n("Ctpu"),a=n("Jiyh");n.o(a,"If")&&n.d(t,"If",(function(){return a["If"]})),n.o(a,"Switch")&&n.d(t,"Switch",(function(){return a["Switch"]})),n.o(a,"Toggle")&&n.d(t,"Toggle",(function(){return a["Toggle"]})),n.d(t,"If",(function(){return i["a"]})),n.d(t,"Switch",(function(){return i["b"]})),n.d(t,"Toggle",(function(){return i["c"]}));var r=i["d"];r.If=i["a"],r.Toggle=i["c"],r.Switch=i["b"],t["default"]=r},pMrh:function(e,t,n){"use strict";n.r(t);var i=n("i8i4"),a=n.n(i),r=n("K3qG"),o=e=>{var t=e.children,n=e.namespace;return a.a.createPortal(t,Object(r["e"])(n))},s=o;t["default"]=s}}]);