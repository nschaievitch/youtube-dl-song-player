(this["webpackJsonpfrontend-test"]=this["webpackJsonpfrontend-test"]||[]).push([[0],{12:function(e,t,n){e.exports={songResult:"SongResult_songResult__q2whj",left:"SongResult_left__31ohT",nameArtist:"SongResult_nameArtist__IcYid",right:"SongResult_right__p00Qe"}},28:function(e,t,n){e.exports={searchBar:"SearchBar_searchBar__2gF1z"}},46:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(25),o=n.n(r),s=(n(46),n(41)),i=n(15),u=n.n(i),l=n(6),j=n(26),d=n(9),b=n(27),m=n.n(b),h=n(28),f=n.n(h),g=n(4),O=function(e){var t=e.doSearch,n=Object(c.useRef)(null);return Object(g.jsx)("form",{className:f.a.searchBar,ref:n,onSubmit:function(e){var c=n.current.elements[0].value;console.log(c),t(c),e&&e.preventDefault()},children:Object(g.jsx)("input",{type:"text"})})},v=n(12),x=n.n(v),p=n(10),S=n(29),k=function(e){return Object(g.jsxs)("div",{className:x.a.songResult,onClick:function(t){"svg"!=t.target.tagName.toLowerCase()&&"path"!=t.target.tagName.toLowerCase()&&e.playSong(e)},children:[Object(g.jsxs)("div",{className:x.a.left,children:[Object(g.jsx)("img",{src:e.thumbnail.url}),Object(g.jsxs)("div",{className:x.a.nameArtist,children:[Object(g.jsx)("h1",{children:e.name}),Object(g.jsx)("h2",{children:e.artist})]})]}),Object(g.jsxs)("div",{className:x.a.right,children:[Object(g.jsx)("span",{children:function(e){if(!e)return"";var t=Math.round(e/1e3),n=Math.floor(t/60),c=t%60;return"".concat(n,":").concat(c>=10?c:"0"+c)}(e.duration)}),e.isSearch?Object(g.jsx)(p.a,{onClick:function(){return e.addToQueue(Object(l.a)(Object(l.a)({},e),{},{_key:e.makeKey()}))},className:"svg-icon"}):Object(g.jsx)(S.a,{onClick:function(){return e.removeFromQueue(e._key)},className:"svg-icon"})]})]})},y=function(e){var t=e.songs,n=e.playSong,c=e.addToQueue,a=e.makeKey;return Object(g.jsxs)("div",{children:[t.length>0?Object(g.jsx)("h1",{children:"Results"}):"",t.map((function(e){return Object(g.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{playSong:n,addToQueue:c,isSearch:!0,makeKey:a}))}))]})},_=function(e){var t=e.queue,n=e.removeFromQueue,c=e.playFromQueue,a=e.clearQueue,r=e.goBack;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.b,{onClick:r,className:"svg-icon"}),Object(g.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(g.jsx)("h1",{children:"Queue"}),Object(g.jsx)("u",{onClick:a,className:"clickableText",children:"Clear queue"})]}),t.map((function(e){return Object(g.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{isSearch:!1,removeFromQueue:n,playSong:c}))}))]})},C=n(16);n(68);var w=function(){var e,t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(d.a)(o,2),b=i[0],h=i[1],f=Object(c.useState)(""),v=Object(d.a)(f,2),x=v[0],S=v[1],k=Object(c.useState)([]),w=Object(d.a)(k,2),Q=w[0],N=w[1],F=Object(c.useState)(!1),R=Object(d.a)(F,2),B=R[0],M=R[1],T=Object(c.useState)({}),q=Object(d.a)(T,2),A=(q[0],q[1],Object(c.useState)([])),I=Object(d.a)(A,2),L=(I[0],I[1],function(){return Math.round(1e7*Math.random()).toString(32)}),K=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("./search",{params:{q:t}});case 2:n=e.sent,M(!1),r(n.data.map((function(e){var t=L();return Object(l.a)(Object(l.a)({},e),{},{_key:t,key:t})})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(t){h("."+"/song/".concat(t.videoId,"/audio")),e=b,S("".concat(t.artist," - ").concat(t.name)),document.title="".concat(t.artist," - ").concat(t.name),"mediaSession"in navigator&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:t.name,artist:t.artist,artwork:[{src:t.thumbnail.url,sizes:"".concat(t.thumbnail.width,"x").concat(t.thumbnail.height),type:"image/jpeg"}]}),navigator.mediaSession.setActionHandler("previoustrack",(function(){console.log(e),J()})),navigator.mediaSession.setActionHandler("nexttrack",(function(){return E()})))},E=function(){var e=function(){var e=!1;return N((function(t){return 0==t.length?[]:(e=t[0],t.slice(1))})),e}();e&&P(e)};function J(){h((function(e){return console.log(e),e+"?"}))}return Object(g.jsxs)("main",{children:[Object(g.jsx)(O,{doSearch:K}),B?Object(g.jsx)(_,{queue:Q,removeFromQueue:function(e){console.log("removing",e),N(Q.filter((function(t){return t._key!=e})))},clearQueue:function(){return N([])},playFromQueue:function(e){console.log();for(var t=0;t<Q.length&&Q[t]._key!=e._key;)t++;P(Q[t]),N(Q.slice(t+1))},goBack:function(){return M(!1)}}):Object(g.jsx)(y,{songs:a,playSong:function(e){P(e)},addToQueue:function(e){return N([].concat(Object(s.a)(Q),[e]))},makeKey:L}),Object(g.jsx)("div",{id:"audioPlayer",children:Object(g.jsx)(C.b,{src:b,header:x,onClickPrevious:J,onClickNext:E,onEnded:E,showJumpControls:!1,showSkipControls:!0,customVolumeControls:[Object(g.jsx)(p.c,{onClick:function(){return M(!B)},className:"svg-icon"}),C.a.VOLUME]})})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),Q()}},[[69,1,2]]]);
//# sourceMappingURL=main.4fac3db4.chunk.js.map