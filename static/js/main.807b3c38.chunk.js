(this.webpackJsonpsite24x7=this.webpackJsonpsite24x7||[]).push([[0],{97:function(t,e,n){},98:function(t,e,n){"use strict";n.r(e);var a=n(3),s=n(0),c=n.n(s),i=n(12),r=n.n(i),o=n(63),l=n(8),d=n(41),p=n.n(d),u=n(58),j=n(37),b=n(59),h=n.n(b),x=n(126),m=n(100),g=n(131),O=Object(x.a)((function(t){return{root:{flexGrow:1,maxHeight:"100px",height:"100px"},paper:{padding:t.spacing(4),textAlign:"center",color:t.palette.text.secondary}}})),f=function(t){var e=t.item,n=O(),s={backgroundColor:"#2ECC71",fontSize:"18px",status:"Available",color:"white"};return 0===e.status?(s.backgroundColor="#E74C3C",s.status="Down"):2===e.status?(s.backgroundColor="orange",s.status="Trouble"):5===e.status?(s.backgroundColor="#777777",s.status="Suspended"):7===e.status&&(s.backgroundColor="#9B59B6",s.status="Maintenance"),Object(a.jsx)("div",{className:n.root,children:Object(a.jsx)(g.a,{style:{fontColor:"red"},title:s.status,children:Object(a.jsx)(m.a,{style:s,className:n.paper,children:e.name.slice(10)})})})},v=n.p+"static/media/spinner.2dd393ed.gif",w=function(t){t.isLoading;return Object(a.jsx)("div",{style:{marginTop:"200px"},children:Object(a.jsx)("img",{src:v,alt:"Loading...",style:{width:"200px",margin:"auto",display:"block"}})})},k=n(127),y=Object(x.a)((function(t){return{root:{flexGrow:1},paper:{padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary}}})),C=function(t){var e=t.isLoading,n=t.items,s=y();return e?Object(a.jsx)(w,{isLoading:!0}):Object(a.jsx)("div",{className:s.root,children:Object(a.jsx)(k.a,{container:!0,spacing:3,children:Object.keys(n).map((function(t,e){return Object(a.jsx)(k.a,{item:!0,xs:3,children:Object(a.jsx)(f,{item:n[t]},e)},n[t.monitor_id])}))})})},N=n.p+"static/media/access-denied.b159c607.gif",L=function(t){t.isLoading;return Object(a.jsx)("div",{style:{marginTop:"200px"},children:Object(a.jsx)("img",{src:N,alt:"Access Denied...",style:{width:"200px",margin:"auto",display:"block"}})})},S=function(){var t=Object(s.useState)([]),e=Object(j.a)(t,2),n=e[0],c=e[1],i=Object(s.useState)(!0),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)(!1),b=Object(j.a)(d,2),x=b[0],m=b[1];return Object(s.useEffect)((function(){(function(){var t=Object(u.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://serene-inlet-05924.herokuapp.com/site24x7",t.prev=1,t.next=4,h.a.get("https://serene-inlet-05924.herokuapp.com/site24x7");case 4:e=t.sent,c(e.data.data.monitors),console.log(e.data.data.monitors),l(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),l(!1),m(!0);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(a.jsxs)("div",{className:"container",children:[x&&Object(a.jsx)(L,{}),Object(a.jsx)(C,{isLoading:o,items:n})]})},B=n(36),I=n(128),R=n(129),E=n(132),A=n(130),G=n(133),M=n(19),T=n(61),D=n.n(T),J=n(62),z=n.n(J),H=Object(x.a)((function(t){return{root:{flexGrow:1,marginBottom:"30px"},menuButton:{marginRight:t.spacing(2)},title:Object(B.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(B.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(M.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(M.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(B.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function P(){var t=H();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(I.a,{position:"static",children:Object(a.jsxs)(R.a,{children:[Object(a.jsx)(E.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(A.a,{className:t.title,variant:"h6",noWrap:!0,children:"Resonance Monitors - Site24x7"}),Object(a.jsxs)("div",{className:t.search,children:[Object(a.jsx)("div",{className:t.searchIcon,children:Object(a.jsx)(z.a,{})}),Object(a.jsx)(G.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var W=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(P,{}),Object(a.jsx)(l.a,{path:"/monitors",exact:!0,component:S})]})})};n(97);r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.807b3c38.chunk.js.map