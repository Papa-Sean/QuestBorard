(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),s=a(18),o=a(30),l=a(103);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d,u=a(61),p="CREATE",j="UPDATE",b="DELETE",h="FETCH_ALL",f=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e.filter((function(e){return e._id!==t.payload}));case j:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case h:return t.payload;case p:return[].concat(Object(u.a)(e),[t.payload]);default:return e}}}),x=a(27),m=a(236),g=a(237),O=a(62),v=a(239),y=a(231),C=a(19),w=a.n(C),N=a(44),k=a(45),S=a.n(k),A="http://localhost:5000/posts",E=function(e,t){return S.a.patch("".concat(A,"/").concat(e),t)},T=function(e){return S.a.delete("".concat(A,"/").concat(e))},I=function(e){return S.a.patch("".concat(A,"/").concat(e,"/likepost"))},W=a(230),H=a(224),D=a(226),F=a(227),M=a(228),R=a(229),B=a(110),_=a.n(B),G=a(111),z=a.n(G),P=a(109),J=a.n(P),L=a(104),V=a.n(L),K=a(221),Q=Object(K.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),U=a(4),Y=function(e){var t=e.post,a=e.setCurrentId,n=Q(),r=Object(s.b)();return Object(U.jsxs)(H.a,{className:n.card,children:[Object(U.jsx)(D.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(U.jsxs)("div",{className:n.overlay,children:[Object(U.jsx)(O.a,{variant:"h6",children:t.creator}),Object(U.jsx)(O.a,{variant:"body2",children:V()(t.createdAt).fromNow()})]}),Object(U.jsx)("div",{className:n.overlay2,children:Object(U.jsx)(F.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(U.jsx)(J.a,{fontSize:"default"})})}),Object(U.jsx)("div",{className:n.details,children:Object(U.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e)}))})}),Object(U.jsx)(O.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(U.jsx)(M.a,{children:Object(U.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(U.jsxs)(R.a,{className:n.CardActions,children:[Object(U.jsxs)(F.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(N.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:n=t.sent,r=n.data,a({type:j,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(U.jsx)(_.a,{fontSize:"small"}),"\xa0 Volunteer \xa0",t.likeCount]}),Object(U.jsxs)(F.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(N.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:a({type:b,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(U.jsx)(z.a,{fontSize:"small"}),"Delete"]})]})]})},$=Object(K.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),q=function(e){var t=e.setCurrentId,a=Object(s.c)((function(e){return e.posts})),n=$();return console.log(a),a.length?Object(U.jsx)(y.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(U.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(U.jsx)(Y,{post:e,setCurrentId:t})},e._id)}))}):Object(U.jsx)(W.a,{})},X=a(14),Z=a(115),ee=a(238),te=a(112),ae=a.n(te),ne=Object(K.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),re=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(x.a)(r,2),i=c[0],o=c[1],l=Object(s.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),d=ne(),u=Object(s.b)();Object(n.useEffect)((function(){l&&o(l)}),[l]);var b=function(){a(null),o({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(U.jsx)(Z.a,{className:d.paper,children:Object(U.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:function(e){e.preventDefault(),u(t?function(e,t){return function(){var a=Object(N.a)(w.a.mark((function a(n){var r,c;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E(e,t);case 3:r=a.sent,c=r.data,n({type:j,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,i):function(e){return function(){var t=Object(N.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,S.a.post(A,c);case 3:n=t.sent,r=n.data,a({type:p,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(i)),b()},children:[Object(U.jsxs)(O.a,{variant:"h6",children:[t?"Edit":"Post"," a Quest"]}),Object(U.jsx)(ee.a,{name:"creator",variant:"outlined",label:"Title",fullWidth:!0,value:i.creator,onChange:function(e){return o(Object(X.a)(Object(X.a)({},i),{},{creator:e.target.value}))}}),Object(U.jsx)(ee.a,{name:"title",variant:"outlined",label:"Poster",fullWidth:!0,value:i.title,onChange:function(e){return o(Object(X.a)(Object(X.a)({},i),{},{title:e.target.value}))}}),Object(U.jsx)(ee.a,{name:"message",variant:"outlined",label:"Description",fullWidth:!0,value:i.message,onChange:function(e){return o(Object(X.a)(Object(X.a)({},i),{},{message:e.target.value}))}}),Object(U.jsx)(ee.a,{name:"tags",variant:"outlined",label:"Tags (seperate with ,)",fullWidth:!0,value:i.tags,onChange:function(e){return o(Object(X.a)(Object(X.a)({},i),{},{tags:e.target.value.split(",")}))}}),Object(U.jsx)("div",{className:d.fileInput,children:Object(U.jsx)(ae.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(X.a)(Object(X.a)({},i),{},{selectedFile:t}))}})}),Object(U.jsx)(F.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(U.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})})},ce=a.p+"static/media/crossedSwords.670a3229.png",ie=a(60),se=a(113),oe=a.n(se),le=r.a.createContext(),de={General:[{from:"PAPA",msg:"GOT IT"},{from:"SHANE",msg:"THANK GOD"},{from:"JOHN",msg:"WHATS THAT?"}],ActiveGame:[{from:"PAPA",msg:"THINKING OF ROOM NAMES"},{from:"SHANE",msg:"JUST DON'T"},{from:"JOHN",msg:"I KNOW THIS D&D BETTER THAN SEAN!"}]};function ue(e,t){var a=t.payload,n=a.from,r=a.msg,c=a.topic;switch(t.type){case"RECEIVE_MESSAGE":return Object(X.a)(Object(X.a)({},e),{},Object(ie.a)({},c,[].concat(Object(u.a)(e[c]),[{from:n,msg:r}])));default:return e}}function pe(e){d.emit("chat-msg",e)}function je(e){var t=r.a.useReducer(ue,de),a=Object(x.a)(t,2),n=a[0],c=a[1];d||(d=oe()(":3001")).on("chat-msg",(function(e){c({type:"RECEIVE_MESSAGE",payload:e})}));var i="user ".concat(Math.floor(100*Math.random()));return Object(U.jsx)(le.Provider,{value:{allChats:n,sendChatMsg:pe,user:i},children:e.children})}var be=a(232),he=a(233),fe=a(234),xe=a(235),me=a(240),ge=Object(K.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)},spacing:2,margin:"5px",padding:e.spacing(2)},media:{height:"flex",paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},grow:{flexGrow:"1"},textCenter:{textAlign:"center"},chatHeader:{flexGrow:"1",margin:"5px",padding:e.spacing(2),backgroundColor:"darkgrey",color:"#FFF",textAlign:"center"},topicsWindow:{width:"15%",margin:"5px",padding:e.spacing(2),backgroundColor:"darkgrey",height:"calc(100vh - 122px)",maxHeight:"100%",color:"#FFF",display:"inline-flex",float:"left",flexDirection:"column"},chatWindow:{height:"calc(100vh - 222px)",borderRadius:0,overflowY:"auto"},chatWindowContent:{backgroundColor:"lightgrey",margin:"5px",padding:e.spacing(2)},footer:{padding:"1.5rem",display:"flex",justifyContent:"space-between"},flex:{display:"flex"},alignCenter:{alignItems:"center"},spacing:{marginRight:"20px"},topicSelector:{alignItems:"left"}}}));function Oe(){var e=ge(),t=r.a.useContext(le),a=t.allChats,c=t.sendChatMsg,i=t.user,s=Object.keys(a),o=Object(n.useState)(""),l=Object(x.a)(o,2),d=l[0],u=l[1],p=Object(n.useState)(s[0]),j=Object(x.a)(p,2),b=j[0],h=j[1];return Object(U.jsxs)(H.a,{className:e.card,children:[Object(U.jsx)("div",{className:e.root,children:Object(U.jsxs)("div",{className:e.chatHeader,children:[Object(U.jsx)("h1",{children:"QuestBOARD CHAT"}),Object(U.jsx)("h3",{children:b})]})}),Object(U.jsx)("div",{className:e.topicsWindow,children:s.map((function(t,a){return Object(U.jsx)(be.a,{component:"nav",children:Object(U.jsxs)(he.a,{className:e.topicSelector,button:!0,onClick:function(e){return h(e.target.innerText)},children:[Object(U.jsx)(fe.a,{}),Object(U.jsx)(xe.a,{primary:t})]})},a)}))}),Object(U.jsx)("span",{}),Object(U.jsxs)("div",{className:e.chatWindowContainer,children:[Object(U.jsx)(H.a,{className:e.chatWindow,variant:"outlined",children:a[b].map((function(t,a){return Object(U.jsxs)(M.a,{className:"".concat(e.flex," ").concat(e.chatWindowContent," ").concat(e.alignCenter),children:[Object(U.jsx)(me.a,{alt:t.from,src:"dummy.jpg",className:e.spacing}),Object(U.jsx)(O.a,{children:t.msg})]},a)}))}),Object(U.jsxs)(H.a,{className:e.footer,children:[Object(U.jsx)(ee.a,{className:e.grow,id:"standard-basic",label:"Type here ...",value:d,onChange:function(e){return u(e.target.value)}}),Object(U.jsx)(F.a,{onClick:function(){c({from:i,msg:d,topic:b}),u("")},variant:"contained",color:"grey",children:"Send"})]})]})]})}var ve=Object(K.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"black"},image:{marginLeft:"15px"}}})),ye=function(){var e=Object(n.useState)(null),t=Object(x.a)(e,2),a=t[0],r=t[1],c=ve(),i=Object(s.b)();return Object(n.useEffect)((function(){i(function(){var e=Object(N.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(A);case 3:a=e.sent,n=a.data,t({type:h,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,i]),Object(U.jsxs)(m.a,{maxidth:"lg",children:[Object(U.jsxs)(g.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(U.jsx)(O.a,{className:c.heading,variant:"h2",align:"center",children:"Quest Board"}),Object(U.jsx)("img",{className:c.image,src:ce,alt:"memories",height:"60"})]}),Object(U.jsx)(v.a,{in:!0,children:Object(U.jsx)(m.a,{children:Object(U.jsxs)(y.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(U.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(U.jsx)(q,{setCurrentId:r})}),Object(U.jsx)(y.a,{item:!0,xs:12,sm:4,children:Object(U.jsx)(re,{currentId:a,setCurrentId:r})})]})})}),Object(U.jsx)(v.a,{in:!0,children:Object(U.jsx)(y.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:Object(U.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(U.jsx)(je,{children:Object(U.jsx)(Oe,{})})})})})]})},Ce=(a(185),Object(o.e)(f,Object(o.d)(Object(o.a)(l.a))));i.a.render(Object(U.jsx)(s.a,{store:Ce,children:Object(U.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[186,1,2]]]);
//# sourceMappingURL=main.904af404.chunk.js.map