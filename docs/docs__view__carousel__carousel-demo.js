(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[174],{"3FHi":function(e,t,a){"use strict";a.r(t);var c=a("q1tI"),n=a.n(c),r=a("JE2c"),i=(a("gtaE"),a("RyVj")),l=a.n(i),o=a("vxau"),s=a.n(o),u=a("xsK1"),h=a.n(u),m=()=>n.a.createElement("div",null,n.a.createElement("p",null,"\u652f\u6301\u901a\u8fc7\u6eda\u8f6e\u3001drag\u3001\u63a7\u5236\u5668\u7b49\u65b9\u5f0f\u8fdb\u884c\u64cd\u4f5c"),n.a.createElement(r["a"],{width:320},n.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})),n.a.createElement("p",{className:"mt-32"},"\u5173\u95edloop\u6a21\u5f0f\u3002\u5f53\u5b50\u9879\u8fc7\u591a\u65f6\u4f1a\u663e\u793a\u6570\u5b57\u5206\u9875\u5668"),n.a.createElement(r["a"],{loop:!1,width:320},n.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})),n.a.createElement("p",{className:"mt-32"},"\u5173\u95ed\u5206\u9875\u63a7\u5236\u5668"),n.a.createElement(r["a"],{control:!1,width:320},n.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})),n.a.createElement("p",{className:"mt-32"},"\u81ea\u52a8\u8f6e\u64ad"),n.a.createElement(r["a"],{autoplay:2e3,style:{width:320}},n.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),n.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})));t["default"]=m},B9oH:function(e,t,a){},BTKg:function(e,t,a){"use strict";var c=a("q1tI"),n=function(e){return++e%1e6},r=function(){var e=Object(c["useState"])(0),t=e[1];return Object(c["useCallback"])((function(){return t(n)}),[])};t["a"]=r},JE2c:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));a("gtaE");var c=a("k1fw"),n=a("tJVT"),r=a("q1tI"),i=a.n(r),l=a("jNhd"),o=a("BTKg"),s=function(e,t){var a=Object(r["useRef"])((function(){}));Object(r["useEffect"])((function(){a.current=e})),Object(r["useEffect"])((function(){if(null!==t){var e=setInterval((function(){return a.current()}),t||0);return function(){return clearInterval(e)}}}),[t])},u=s,h=a("wEEd"),m=a("y4v0"),d=a("9nhX"),f=a.n(d),v=a("TSYQ"),g=a.n(v),b=a("K3qG"),p=a("zdPv");function j(e,t){if(e.length<2||!t)return[e,!1];var a=i.a.Children.toArray(e);return a.push(i.a.cloneElement(e[0])),a.unshift(i.a.cloneElement(e[e.length-1])),[a,!0]}var E=i.a.forwardRef((e,t)=>{var a=e.children,s=e.vertical,d=void 0!==s&&s,v=e.height,E=e.width,w=e.loop,y=void 0===w||w,O=e.control,x=void 0===O||O,F=e.forceNumberControl,S=void 0!==F&&F,N=e.initPage,_=void 0===N?0:N,R=e.onChange,k=e.autoplay,C=void 0===k?0:k,D=e.style,I=e.className,T=e.wheel,H=void 0===T||T,q=e.drag,B=void 0===q||q,K=e.onWillChange,J=void 0===K?b["f"]:K,M=e.noScale,V=void 0!==M&&M,A=e.invisibleUnmount,P=void 0!==A&&A,W=e.invisibleHidden,z=void 0!==W&&W,G=e.noShadow,Q=j(a,y),U=Object(n["a"])(Q,2),X=U[0],Y=U[1],L=Object(l["a"])(),Z=Object(n["a"])(L,2),$=Z[0],ee=Z[1],te=ee.width,ae=ee.height,ce=Object(r["useRef"])(null),ne=Object(r["useRef"])(null),re=d?ae:te,ie=Object(r["useRef"])(Y?_+1:_),le=Object(p["useSelf"])({disabledDrag:!1}),oe=Object(h["useSpring"])(()=>({offset:ie.current*re,scale:1,config:{clamp:!0},reset:!1})),se=Object(n["a"])(oe,2),ue=se[0],he=se[1],me=Object(o["a"])(),de=Object(r["useState"])(C),fe=Object(n["a"])(de,2),ve=fe[0],ge=fe[1],be=Object(r["useRef"])();v=v||0,Object(r["useEffect"])((function(){we(ie.current,!0)}),[re]),Object(r["useEffect"])((function(){ie.current=Y?_+1:_,we(ie.current,!0),Ne()}),[X.length]),Object(r["useEffect"])((function(){xe(ie.current,!0)}),[]),Object(r["useImperativeHandle"])(t,()=>({prev:je,next:Ee,goTo(e,t){we(Y?e+1:e,t)}})),u((function(){Ee()}),ve>0?ve:null);var pe=Object(m["b"])({onDragStart(){J()},onWheelStart(){J()},onDrag(e){var t=e.down,a=Object(n["a"])(e.movement,2),c=a[0],r=a[1],i=Object(n["a"])(e.direction,2),l=i[0],o=i[1],s=e.cancel,u=e.first,h=d?o:l,m=d?r:c,f=Math.abs(m),v=Math.abs(c),g=Math.abs(r);if((g>5||v>5)&&(!d&&g>v||d&&v>g)&&(s(),f=0,m=0),t&&f>re/2)return s(),Fe(),void(h<0?Ee():je());var b=Y&&u&&0===ie.current,p=Y&&u&&ie.current===X.length-1;function j(e){le.disabledDrag=!0;var t=ie.current*re+ue.offset.get();E(-(e*re-t)),ie.current=e}function E(e){he({offset:e||-(ie.current*re+(t?-m:0)),immediate:!!e||!1,scale:t?1-f/re/2:1,default:!0,onRest(){e&&(le.disabledDrag=!1)}})}b?j(X.length-2):p?j(1):le.disabledDrag||E()},onWheel(e){var t=e.event,a=e.memo,c=Object(n["a"])(e.direction,2),r=c[1],i=e.timeStamp;if(null===t||void 0===t||t.preventDefault(),!a)return r<0?je():Ee(),Fe(),i},onHover(e){var t=e.hovering;t&&Fe()}},{domTarget:ce,wheel:{enabled:H},drag:{enabled:B},eventOptions:{passive:!1}});function je(){Y&&0===ie.current?we(X.length-2,!0,()=>{we(ye(ie.current-1))}):we(ye(ie.current-1))}function Ee(){Y&&ie.current===X.length-1?we(1,!0,()=>{we(ye(ie.current+1))}):we(ye(ie.current+1))}function we(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0;e=ye(e),t||e===ie.current||xe(e),ie.current=e,he({offset:-e*re,scale:1,immediate:t,default:!0,onRest(){a&&a()}}),me()}function ye(e){return f()(e,0,X.length-1)}function Oe(e){return Y?0===e?X.length-3:e===X.length-1?0:e-1:e}function xe(e,t){P&&Ne(),R&&R(Oe(e),!!t)}function Fe(){C<=0||ve<=0||be.current||(ge(0),be.current=window.setTimeout(()=>{ge(C),be.current=void 0,clearTimeout(be.current)},4e3))}function Se(e,t){var a=!0,n=e;if(P||z){var r=Oe(ie.current),l=Y&&(t<=1||t>=X.length-2),o=t<r-(Y?0:1)||t>r+(Y?2:1),s=!o||l;P&&(a=s),z&&!s&&i.a.isValidElement(e)&&(n=i.a.cloneElement(e,{style:Object(c["a"])(Object(c["a"])({},e.props.style),{},{display:"none"})}))}return i.a.createElement(h["animated"].div,{key:t,className:"m78-carousel_item",style:{height:d?v:void 0,zIndex:ie.current===t?1:0,transform:V?void 0:ue.scale.to(e=>{var a=t<ie.current-1||t>ie.current+1;return"scale(".concat(a?1:e,")")})}},a&&n)}function Ne(){ce.current&&Array.from(ce.current.querySelectorAll("img")).forEach(e=>{e.ondragstart=e=>e.preventDefault()})}return Object(r["useEffect"])(pe,[pe]),i.a.createElement("div",{className:g()("m78-carousel",I,{__vertical:d,__noShadow:G}),ref:$,style:Object(c["a"])({height:d?v:"auto",width:E||"auto"},D)},i.a.createElement("div",{ref:ne,className:"m78-carousel_calc-node"}),i.a.createElement(h["animated"].div,{className:"m78-carousel_wrap",ref:ce,style:{transform:ue.offset.to(e=>"translate3d(".concat(d?"0,".concat(e,"px"):"".concat(e,"px,0"),",0)"))}},X.map(Se)),x&&i.a.createElement("div",{className:"m78-carousel_ctrl m78-stress"},(a.length<7||d)&&!S?X.map((e,t)=>{var a=!Y||t<X.length-2;return a&&i.a.createElement("div",{key:t,onClick:()=>{we(Y?t+1:t),Fe()},className:g()("m78-carousel_ctrl-item",{__active:t===Oe(ie.current)})})}):i.a.createElement("span",{className:"m78-carousel_ctrl-text"},Oe(ie.current)+1," /"," ",Y?X.length-2:X.length)))}),w=E},RyVj:function(e,t,a){e.exports=a.p+"static/11.983b1fca.jpg"},SoiO:function(e,t,a){},gtaE:function(e,t,a){"use strict";a("iCBh"),a("SoiO")},iCBh:function(e,t,a){"use strict";a("6Hk/"),a("B9oH");var c=a("MPsd");new c["a"]({effect:"m78-effect"})},jNhd:function(e,t,a){"use strict";var c=a("q1tI"),n=a("bdgK"),r=function(){var e=Object(c["useState"])({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),t=e[0],a=e[1],r=Object(c["useState"])((function(){return new n["a"]((function(e){var t=e[0];t&&a(t.contentRect)}))}))[0],i=Object(c["useCallback"])((function(e){r.disconnect(),e&&r.observe(e)}),[r]);return[i,t]};t["a"]=r},vxau:function(e,t,a){e.exports=a.p+"static/22.f379e2df.jpg"},xsK1:function(e,t,a){e.exports=a.p+"static/33.df9bac6c.jpg"}}]);