(this["webpackJsonpfrontend-test"]=this["webpackJsonpfrontend-test"]||[]).push([[0],{12:function(e,t,n){e.exports={songResult:"SongResult_songResult__q2whj",left:"SongResult_left__31ohT",nameArtist:"SongResult_nameArtist__IcYid",right:"SongResult_right__p00Qe"}},28:function(e,t,n){e.exports={searchBar:"SearchBar_searchBar__2gF1z"}},46:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(25),o=n.n(r),s=(n(46),n(41)),i=n(15),u=n.n(i),l=n(8),j=n(26),d=n(9),b=n(27),h=n.n(b),m=n(28),f=n.n(m),g=n(4),O=function(e){var t=e.doSearch,n=Object(c.useRef)(null);return Object(g.jsx)("form",{className:f.a.searchBar,ref:n,onSubmit:function(e){var c=n.current.elements[0].value;console.log(c),t(c),e&&e.preventDefault()},children:Object(g.jsx)("input",{type:"text"})})},v=n(12),x=n.n(v),p=n(10),S=n(29),k=function(e){return Object(g.jsxs)("div",{className:x.a.songResult,onClick:function(t){"div"==t.target.tagName.toLowerCase()&&e.playSong(e)},children:[Object(g.jsxs)("div",{className:x.a.left,children:[Object(g.jsx)("img",{src:e.thumbnail.url}),Object(g.jsxs)("div",{className:x.a.nameArtist,children:[Object(g.jsx)("h1",{children:e.name}),Object(g.jsx)("h2",{children:e.artist})]})]}),Object(g.jsxs)("div",{className:x.a.right,children:[Object(g.jsx)("span",{children:function(e){if(!e)return"";var t=Math.round(e/1e3),n=Math.floor(t/60),c=t%60;return"".concat(n,":").concat(c>=10?c:"0"+c)}(e.duration)}),e.isSearch?Object(g.jsx)(p.a,{onClick:function(){return e.addToQueue(e)},className:"svg-icon"}):Object(g.jsx)(S.a,{onClick:function(){return e.removeFromQueue(e._key)},className:"svg-icon"})]})]})},y=function(e){var t=e.songs,n=e.playSong,c=e.addToQueue;return Object(g.jsxs)("div",{children:[t.length>0?Object(g.jsx)("h1",{children:"Results"}):"",t.map((function(e){return Object(g.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{playSong:n,addToQueue:c,isSearch:!0}))}))]})},_=function(e){var t=e.queue,n=e.removeFromQueue,c=e.playFromQueue,a=e.clearQueue,r=e.goBack;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.b,{onClick:r,className:"svg-icon"}),Object(g.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(g.jsx)("h1",{children:"Queue"}),Object(g.jsx)("u",{onClick:a,className:"clickableText",children:"Clear queue"})]}),t.map((function(e){return Object(g.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{isSearch:!1,removeFromQueue:n,playSong:c}))}))]})},C=n(16),w=(n(68),"/api");var Q=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(d.a)(r,2),i=o[0],b=o[1],m=Object(c.useState)(""),f=Object(d.a)(m,2),v=f[0],x=f[1],S=Object(c.useState)([]),k=Object(d.a)(S,2),Q=k[0],F=k[1],N=Object(c.useState)(!1),R=Object(d.a)(N,2),B=R[0],M=R[1],T=Object(c.useState)({}),q=Object(d.a)(T,2),A=(q[0],q[1],Object(c.useState)([])),I=Object(d.a)(A,2),L=(I[0],I[1],function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/search",{params:{q:t}});case 2:n=e.sent,M(!1),a(n.data.map((function(e){var t=Math.round(1e7*Math.random()).toString(32);return Object(l.a)(Object(l.a)({},e),{},{_key:t,key:t})})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=function(){D()},E=function(e){b(w+"/song/".concat(e.videoId,"/audio")),x("".concat(e.artist," - ").concat(e.name)),document.title="".concat(e.artist," - ").concat(e.name),"mediaSession"in navigator&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:e.name,artist:e.artist,artwork:[{src:e.thumbnail.url,sizes:"".concat(e.thumbnail.width,"x").concat(e.thumbnail.height),type:"image/jpg"}]}),navigator.mediaSession.setActionHandler("previoustrack",(function(){console.log("prev",i),P()})),navigator.mediaSession.setActionHandler("nexttrack",(function(){return z()})))},J=function(){return F([])};function z(){0!=Q.length&&(F(Q.slice(1)),E(Q[0]))}function D(){console.log(i),b(i+"?")}return Object(g.jsxs)("main",{children:[Object(g.jsx)(O,{doSearch:L}),B?Object(g.jsx)(_,{queue:Q,removeFromQueue:function(e){console.log("removing",e),F(Q.filter((function(t){return t._key!=e})))},clearQueue:J,playFromQueue:function(e){console.log();for(var t=0;t<Q.length&&Q[t]._key!=e._key;)t++;E(Q[t]),F(Q.slice(t+1))},goBack:function(){return M(!1)}}):Object(g.jsx)(y,{songs:n,playSong:function(e){J(),E(e)},addToQueue:function(e){return F([].concat(Object(s.a)(Q),[e]))}}),Object(g.jsx)("div",{id:"audioPlayer",children:Object(g.jsx)(C.b,{src:i,header:v,onClickPrevious:D,onClickNext:z,onEnded:z,showJumpControls:!1,showSkipControls:!0,customVolumeControls:[Object(g.jsx)(p.c,{onClick:function(){return M(!B)},className:"svg-icon"}),C.a.VOLUME]})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root")),F()}},[[69,1,2]]]);
//# sourceMappingURL=main.accc56a0.chunk.js.map