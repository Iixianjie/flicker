(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{EpCk:function(e,n,a){"use strict";a.r(n);var t=a("WmNS"),l=a.n(t),r=a("9og8"),c=a("q1tI"),o=a.n(c),i=a("LtsZ"),s=a("dEAq"),m=a("0zqC"),d=a("ZpkN"),p=a("Rsk4"),u=o.a.memo(Object(i["dynamic"])({loader:function(){var e=Object(r["a"])(l.a.mark((function e(){var n,t,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a("K+nK"),e.t0=n,e.next=4,Promise.resolve().then(a.t.bind(null,"q1tI",7));case 4:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.next=8,a.e(67).then(a.t.bind(null,"srPT",7));case 8:return r=function(){return t["default"].createElement("span",null)},e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()})),E=o.a.memo(p["default"]["spin-spin-demo"].component),h=o.a.memo(p["default"]["spin-spin-demo2"].component),f=o.a.memo(p["default"]["spin-spin-demo-custom-text"].component),k=o.a.memo(p["default"]["spin-spin-demo-full"].component);n["default"]=e=>(o.a.useEffect(()=>{(null===e||void 0===e?void 0:e.location.hash)&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"}),o.a.createElement(u,null),o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"icon-\u56fe\u6807"},o.a.createElement(s["AnchorLink"],{to:"#icon-\u56fe\u6807","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Icon \u56fe\u6807"),o.a.createElement("p",null,"\u8bbe\u7f6e\u4e00\u4e2a\u5185\u8054\u7684\u52a0\u8f7d\u63d0\u793a\u5143\u7d20\u6216\u5c06\u67d0\u4e2a\u5757\u8bbe\u7f6e\u4e3a\u52a0\u8f7d\u72b6\u6001"),o.a.createElement("h2",{id:"\u57fa\u672c\u7528\u6cd5"},o.a.createElement(s["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),o.a.createElement(m["default"],p["default"]["spin-spin-demo"].previewerProps,o.a.createElement(E,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u5185\u8054"},o.a.createElement(s["AnchorLink"],{to:"#\u5185\u8054","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5185\u8054")),o.a.createElement(m["default"],p["default"]["spin-spin-demo2"].previewerProps,o.a.createElement(h,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u6587\u672c"},o.a.createElement(s["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u6587\u672c","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u6587\u672c")),o.a.createElement(m["default"],p["default"]["spin-spin-demo-custom-text"].previewerProps,o.a.createElement(f,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u586b\u6ee1\u5bb9\u5668"},o.a.createElement(s["AnchorLink"],{to:"#\u586b\u6ee1\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u586b\u6ee1\u5bb9\u5668"),o.a.createElement("blockquote",null,o.a.createElement("p",null,"\ud83d\udca1 \u9700\u8981\u786e\u4fdd\u7236\u5143\u7d20\u975e\u5e38\u89c4\u5b9a\u4f4d\u5143\u7d20\uff0c\u5373 position \u7684\u503c\u975e static"))),o.a.createElement(m["default"],p["default"]["spin-spin-demo-full"].previewerProps,o.a.createElement(k,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"props"},o.a.createElement(s["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"props"),o.a.createElement(d["a"],{code:"interface SpinProps extends ComponentBaseProps {\n  /** \u5927\u5c0f */\n  size?: 'small' | 'large';\n  /** \u5185\u8054\u6a21\u5f0f */\n  inline?: boolean;\n  /** '\u52a0\u8f7d\u4e2d' | \u63d0\u793a\u6587\u672c */\n  text?: React.ReactNode;\n  /** \u4f7fspin\u5145\u6ee1\u7236\u5143\u7d20(\u9700\u8981\u7236\u5143\u7d20\u662fstatic\u4ee5\u5916\u7684\u5b9a\u4f4d\u5143\u7d20) */\n  full?: boolean;\n  /** \u9002\u5408\u9ed1\u8272\u4e3b\u9898\u7684\u5e94\u7528\u4e2d\u4f7f\u7528\uff0c\u6587\u5b57\u53d8\u4e3a\u767d\u8272\uff0c\u5f53\u8bbe\u7f6e\u4e86full\u65f6\uff0c\u80cc\u666f\u906e\u7f69\u5c06\u4f1a\u53d8\u6210\u5e26\u900f\u660e\u901a\u9053\u7684\u9ed1\u8272 */\n  dark?: boolean;\n  /** true | \u662f\u5426\u663e\u793a\u52a0\u8f7d\u72b6\u6001 */\n  show?: boolean;\n  /** \u5305\u88f9\u7ec4\u4ef6\u6837\u5f0f */\n  style?: React.CSSProperties;\n  /** \u5305\u88f9\u7ec4\u4ef6\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5ef6\u8fdf\u663e\u793a/\u9690\u85cfloading\u7684\u6beb\u79d2\u6570 */\n  loadingDelay?: number;\n}",lang:"tsx"}),o.a.createElement("p",null,o.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),o.a.createElement(d["a"],{code:"interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}",lang:"tsx"})))))}}]);