(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{tgau:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),o=a("dEAq"),r=a("0zqC"),c=a("ZpkN"),m=a("Rsk4"),i=l.a.memo(m["default"]["skeleton-demo"].component);n["default"]=e=>(l.a.useEffect(()=>{(null===e||void 0===e?void 0:e.location.hash)&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"skeleton-\u9aa8\u67b6"},l.a.createElement(o["AnchorLink"],{to:"#skeleton-\u9aa8\u67b6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Skeleton \u9aa8\u67b6"),l.a.createElement("p",null,"\u4e0e",l.a.createElement("code",null,"Spin"),"\u7c7b\u4f3c\uff0c\u7528\u4e8e\u5bf9\u67d0\u4e2a\u533a\u57df\u5143\u7d20\u7684\u5360\u4f4d\u52a0\u8f7d\u63d0\u9192\u3002"),l.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},l.a.createElement(o["AnchorLink"],{to:"#\u57fa\u7840\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b")),l.a.createElement(r["default"],m["default"]["skeleton-demo"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(o["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"Skeleton"))),l.a.createElement(c["a"],{code:"interface SkeletonProps extends SkeletonFactoryProps {\n  /** 6 | \u6587\u672c\u884c\u7684\u6570\u91cf */\n  lineNumber?: number;\n  /** \u9ad8\u5ea6 */\n  height?: number;\n  /** \u5bbd\u5ea6 */\n  width?: number;\n  /** true | \u5305\u88f9\u5143\u7d20\u662f\u5426\u6709\u9634\u5f71 */\n  shadow?: boolean;\n  /** false | \u5706\u89d2\u56fe\u7247,\u53ea\u5728\u4f20img\u65f6\u751f\u6548 */\n  circle?: boolean;\n  /** \u663e\u793a\u56fe\u7247\u5360\u4f4d\u56fe\uff0c\u9ed8\u8ba4false */\n  img?: boolean;\n}",lang:"tsx"}),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"BannerSkeleton"))),l.a.createElement(c["a"],{code:"Omit<SkeletonProps, 'circle' | 'img' | 'lineNumber'>",lang:"tsx"}),l.a.createElement("p",null,l.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),l.a.createElement(c["a"],{code:"interface SkeletonFactoryProps {\n  /** \u8981\u6e32\u67d3\u7684\u9aa8\u67b6\u603b\u6570 */\n  number?: number;\n  /** \u663e\u793a/\u9690\u85cf\u9aa8\u67b6 */\n  show?: boolean;\n\n  children?: React.ReactNode;\n}",lang:"tsx"})))))}}]);