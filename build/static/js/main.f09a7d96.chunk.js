(this.webpackJsonpdashboard_cosmetics=this.webpackJsonpdashboard_cosmetics||[]).push([[0],{101:function(e,t,n){e.exports={card:"Loginform_card__1Ixrw",header:"Loginform_header__3LYx0",logo:"Loginform_logo__dYnlg",input:"Loginform_input__V_w0H",submit_btn:"Loginform_submit_btn__dVu-V"}},178:function(e,t,n){e.exports={background:"AuthLayout_background__3Gfmo"}},187:function(e){e.exports=JSON.parse('[{"title":"UZ","dataIndex":"lang","key":"uz"},{"title":"RUS","dataIndex":"lang","key":"ru"},{"title":"Actions","dataIndex":"action","key":"action","width":"10%"}]')},188:function(e){e.exports=JSON.parse('[{"name":"uz","placeHolder":"Name in uzbek"},{"name":"ru","placeHolder":"Name in russian"}]')},189:function(e){e.exports=JSON.parse('[{"title":"F.I.SH","dataIndex":"fish","key":"fish"},{"title":"Telefon raqami","dataIndex":"phone","key":"phone"},{"title":"Login","dataIndex":"login","key":"login"},{"title":"Parol","dataIndex":"password","key":"password"}]')},190:function(e){e.exports=JSON.parse('[{"fish":"Temurov Akmal","phone":"+998993556656","balance":"24,000","tarif":"premium"},{"fish":"Jalolov Qodir","phone":"+998973554556","balance":"35,000","tarif":"basic"}]')},191:function(e){e.exports=JSON.parse('[{"title":"Foizlarni belgilash ( Sosset buyicha )","dataIndex":"fish","key":"fish"},{"title":"Toifasi","dataIndex":"phone","key":"phone"},{"title":"Olib kelgan foydalanuvchilari soni","dataIndex":"balance","key":"balance"},{"title":"Foydalanuvchilari aktivligi / noaktivligi","dataIndex":"tarif","key":"tarif"}]')},192:function(e){e.exports=JSON.parse('[{"fish":"Temurov Akmal","phone":"+998993556656","balance":"24,000","tarif":"premium"},{"fish":"Jalolov Qodir","phone":"+998973554556","balance":"35,000","tarif":"basic"}]')},307:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n(30),o=n.n(c),i=n(1),s=n(31),l=n(178),u=n.n(l),d=n(101),b=n.n(d),j=n(47),f=n(29),p=n.n(f),h=n(44),O=n(41),y=n(78),x=n.n(y),g=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()({url:"http://webmaster.fin-up.su/api/user/signup",method:"POST",data:t});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=Object(O.b)("auth/signup",g),v=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()({url:"http://webmaster.fin-up.su/api/user/login",method:"POST",data:t});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),k=Object(O.b)("auth/login",v),_=n(8),w=function(){var e=Object(j.b)();return Object(_.jsxs)("div",{className:b.a.card,children:[Object(_.jsx)("header",{className:b.a.header,children:Object(_.jsx)("h1",{children:"Login"})}),Object(_.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(k({login:"user@gmail.com",password:"123456"}))},children:[Object(_.jsx)("input",{className:b.a.input,type:"text",placeholder:"Login"}),Object(_.jsx)("input",{className:b.a.input,type:"text",placeholder:"Password"}),Object(_.jsx)("button",{type:"submit",className:b.a.submit_btn,children:"Kirish"})]})]})},C=function(){var e=Object(j.c)((function(e){return e.authReducer.authenticated}));return Object(_.jsxs)("div",{className:u.a.background,children:[e&&Object(_.jsx)(s.a,{to:"/dashboard"}),Object(_.jsx)(w,{})]})},S=function(){return Object(_.jsx)(C,{})},A=n(7),I=n(312),D=n(84),N=n(321),L=n(318),P=n(319),R=n(85),z=n.n(R),T=n(317),E=n(79),H=n(5),F=Object(O.c)({name:"auth",initialState:{user:null,token:null,authenticated:!1},reducers:{logout:function(e){e.user=null,e.token=null,e.authenticated=!1}},extraReducers:(a={},Object(H.a)(a,m.fulfilled.toString(),(function(e,t){e.token=t.payload.data.token})),Object(H.a)(a,k.fulfilled.toString(),(function(e,t){var n=t.payload.data;e.authenticated=!0,e.user=n.user,e.token=n.token})),a)}),J=F.actions.logout,U=F.reducer,B=I.a.Content,W=I.a.Footer,q=I.a.Sider,K=[{title:"Bosh sahifa",icon:Object(_.jsx)(N.a,{}),link:"/dashboard"}],V=function(){var e=Object(r.useState)(!1),t=Object(A.a)(e,2),n=t[0],a=t[1],c=Object(j.b)();return Object(_.jsxs)(I.a,{className:z.a.layout,children:[Object(_.jsxs)(q,{theme:"dark",collapsible:!0,collapsed:n,onCollapse:function(e){a(e)},children:[Object(_.jsxs)("div",{className:z.a.side_header,children:[Object(_.jsx)(T.a,{className:z.a.avatar,size:"medium",icon:Object(_.jsx)(L.a,{})}),!n&&Object(_.jsx)("h4",{className:z.a.username,children:"John Doe"})]}),Object(_.jsxs)(D.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[K.map((function(e,t){return Object(_.jsx)(D.a.Item,{icon:e.icon,children:Object(_.jsx)(E.b,{to:e.link,children:e.title})},t)})),Object(_.jsx)(D.a.Item,{onClick:function(){return c(J())},icon:Object(_.jsx)(P.a,{}),children:"Chiqish"},"logout")]})]}),Object(_.jsxs)(I.a,{className:"site-layout",children:[Object(_.jsx)(B,{className:z.a.content,children:Object(_.jsx)(s.d,{children:we.map((function(e){return Object(_.jsx)(s.b,Object(i.a)({},e))}))})}),Object(_.jsx)(W,{className:z.a.footer,children:"Mardex \xa92021 Created by Raqamli Dunyo LLC Front End team"})]})]})},G=function(){return Object(_.jsx)(V,{})},M=n(313),Q=n(315),Y=n(323),X=n(48),Z=n(181),$=n.n(Z),ee=n(143),te=M.a.Column,ne=function(e){var t=e.data,n=e.columns,a=e.searchInput,c=(e.footer,e.handleDeleteCategory),o=e.setvisible,s=e.setdefaults,l=e.handleSubCategory,u=e.subCategory,d=Object(r.useState)(""),b=Object(A.a)(d,2),j=b[0],f=b[1],p=Object(r.useState)(""),h=Object(A.a)(p,2),O=h[0],y=h[1],x={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}},g=function(e,t,n){t(),f(e[0]),y(n)},m=function(e){e(),f("")};return Object(_.jsx)(M.a,{rowSelection:Object(i.a)({type:"checkbox"},x),bordered:!0,size:"small",dataSource:t,children:n.map((function(e){return console.log(e.key,e.dataIndex,e),"lang"===e.dataIndex?Object(_.jsx)(te,{title:e.title,dataIndex:e.dataIndex,render:function(t,n){return Object(_.jsxs)("span",{children:[null===n||void 0===n?void 0:n.title[e.key],console.log(e.key)]})}},e.key):"action"===e.dataIndex?Object(_.jsx)(te,{width:"25%",title:e.title,dataIndex:e.dataIndex,render:function(e,t,n){return Object(_.jsxs)(Y.b,{children:[Object(_.jsx)(X.a,{onClick:function(){return function(e){o(!0),s(e)}({data:t,index:n})},children:"Update"}),!u&&Object(_.jsx)(X.a,{onClick:function(){return l(t)},children:"Sub category"}),Object(_.jsx)(X.a,{danger:!0,onClick:function(){return c(t._id)},children:"Delete"})]})}},e.key):Object(_.jsx)(te,Object(i.a)({title:e.title,dataIndex:e.dataIndex},(t=e.dataIndex,{filterDropdown:function(e){var n=e.setSelectedKeys,r=e.selectedKeys,c=e.confirm,o=e.clearFilters;return Object(_.jsxs)("div",{style:{padding:8},children:[Object(_.jsx)(Q.a,{ref:function(e){a=e},placeholder:"Search ".concat(t),value:r[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return g(r,c,t)},style:{width:188,marginBottom:8,display:"block"}}),Object(_.jsxs)(Y.b,{children:[Object(_.jsx)(X.a,{type:"primary",onClick:function(){return g(r,c,t)},icon:Object(_.jsx)(ee.a,{}),size:"small",style:{width:90},children:"Search"}),Object(_.jsx)(X.a,{onClick:function(){return m(o)},size:"small",style:{width:90},children:"Reset"}),Object(_.jsx)(X.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),f(r[0]),y(t)},children:"Filter"})]})]})},filterIcon:function(e){return Object(_.jsx)(ee.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t]?n[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return a.select()}),100)},render:function(e){return O===t?Object(_.jsx)($.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[j],autoEscape:!0,textToHighlight:e?e.toString():""}):e}})),e.key);var t}))})},ae=n(316),re=function(e){var t=e.children,n=e.visible,a=e.setvisible;return Object(_.jsx)(ae.a,{title:"Basic Modal",visible:n,onOk:function(){a(!1)},onCancel:function(){a(!1)},footer:null,children:t})},ce=n(109),oe=n(314),ie=ce.a.Option,se=function(e){var t=e.fields,n=e.handleAddCategory,a=e.handleUpdateCategory,c=e.defaults,o=oe.a.useForm(),s=Object(A.a)(o,1)[0];return Object(r.useEffect)((function(){c?s.setFieldsValue(Object(i.a)({},c.data.title)):s.resetFields()}),[c]),Object(_.jsxs)(oe.a,{form:s,onFinish:function(e){c?a(e):n(e)},size:"large",children:[t.map((function(e){return"select"===e.type?Object(_.jsx)(oe.a.Item,{name:e.name,rules:[{required:!0}],children:Object(_.jsx)(ce.a,{placeholder:e.placeHolder,allowClear:!0,children:e.options.map((function(e){return Object(_.jsx)(ie,{value:e.value,children:e.label})}))})}):Object(_.jsx)(oe.a.Item,{name:e.name,rules:[{required:!0}],children:Object(_.jsx)(Q.a,{placeholder:e.placeHolder})})})),Object(_.jsx)(oe.a.Item,{children:Object(_.jsx)(X.a,{block:!0,type:"primary",htmlType:"submit",className:"login-form-button",children:c?"UPDATE":"ADD"})})]})},le=n(187),ue=n(188),de=n(322),be=n(320),je="http://174.138.10.57/api/",fe=function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.isCategory?"category":"subcategory",a=t.isCategory?{title:t.vals}:{title:{uz:t.vals.uz,ru:t.vals.ru},cat_id:t.vals.cat_id},e.prev=2,e.next=5,x()({url:"".concat(je).concat(n),method:"POST",data:a});case 5:return r=e.sent,e.abrupt("return",{res:r,type:n});case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),pe=Object(O.b)("category/create",fe),he=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()({url:"".concat(je).concat(t,"/getAll"),method:"GET"});case 3:return n=e.sent,e.abrupt("return",{res:n,type:t});case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Oe=Object(O.b)("category/get",he),ye=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.subCategory?"subcategory":"category",e.prev=1,e.next=4,x()({url:"".concat(je).concat(n,"/").concat(t.id),method:"DELETE"});case 4:return e.sent,e.abrupt("return",{data:t,type:n});case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),xe=Object(O.b)("category/delete",ye),ge=function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.subCategory?"subcategory":"category",e.prev=1,e.next=4,x()({url:"".concat(je).concat(n,"/").concat(t.id),method:"PATCH",data:t.vals});case 4:return a=e.sent,e.abrupt("return",{res:a,index:t.index,type:n});case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),me=Object(O.b)("category/update",ge),ve=function(){var e=Object(r.useState)(!1),t=Object(A.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),o=Object(A.a)(c,2),i=o[0],s=o[1],l=Object(r.useState)(!0),u=Object(A.a)(l,2),d=u[0],b=u[1],f=Object(r.useState)(null),p=Object(A.a)(f,2),h=p[0],O=p[1],y=Object(j.b)(),x=Object(j.c)((function(e){return e.categoryReducer.category})),g=Object(j.c)((function(e){return e.categoryReducer.subcategory}));console.log(x);var m=[{name:"cat_id",placeHolder:"Select category",type:"select",options:x.map((function(e){var t;return{value:null===e||void 0===e?void 0:e._id,label:null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.uz}}))},{name:"uz",placeHolder:"Name in uzbek"},{name:"ru",placeHolder:"Name in russian"}],v=function(e){y(pe({vals:e,isCategory:d}))},k=function(e){y(me({vals:{title:e},id:i.data._id,index:i.index,subCategory:h}))};return Object(r.useEffect)((function(){y(Oe("category")),y(Oe("subcategory"))}),[]),Object(_.jsxs)("div",{children:[Object(_.jsxs)(re,{visible:n,setvisible:a,children:[d&&Object(_.jsx)(se,{defaults:i,handleAddCategory:v,handleUpdateCategory:k,fields:ue}),!d&&Object(_.jsx)(se,{defaults:i,handleAddCategory:v,handleUpdateCategory:k,fields:m})]}),Object(_.jsxs)(Y.b,{style:{marginBottom:"1rem"},children:[Object(_.jsx)(X.a,{type:"primary",icon:Object(_.jsx)(de.a,{}),onClick:function(){s(null),a(!0),b(!0)},children:"Add"}),Object(_.jsx)(X.a,{type:"primary",icon:Object(_.jsx)(de.a,{}),onClick:function(){s(null),a(!0),b(!1)},children:"Add SubCategory"}),h&&Object(_.jsx)(X.a,{type:"primary",icon:Object(_.jsx)(be.a,{}),onClick:function(){return O(null)}})]}),Object(_.jsx)(ne,{setdefaults:s,setvisible:a,handleDeleteCategory:function(e){y(xe({id:e,subCategory:h}))},handleSubCategory:function(e){O(e)},columns:le,subCategory:h,data:h?g.filter((function(e){return e.cat_id===h._id})):x})]})},ke=function(){return Object(_.jsx)("div",{children:Object(_.jsx)(ve,{})})},_e=(n(189),n(190),n(191),n(192),[{path:"/",key:"APP_LOGIN",exact:!0,component:function(){return Object(_.jsx)(S,{})}},{path:"/dashboard",key:"APP_DASHBOARD",exact:!1,component:function(){return Object(_.jsx)(G,{})}}]),we=[{path:"/dashboard",key:"APP_DASHBOARD",exact:!0,component:function(){return Object(_.jsx)(ke,{})}}],Ce=n(12),Se=function(e){var t=e.component,n=Object(Ce.a)(e,["component"]),a=Object(j.c)((function(e){return e.authReducer.authenticated}));return Object(_.jsx)(s.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return a?Object(_.jsx)(t,Object(i.a)({},e)):Object(_.jsx)(s.a,{to:"/"})}}))},Ae=function(){return Object(_.jsx)(s.d,{children:_e.map((function(e){return"APP_DASHBOARD"===e.key?Object(_.jsx)(Se,Object(i.a)(Object(i.a)({},e),{},{component:e.component})):Object(r.createElement)(s.b,Object(i.a)(Object(i.a)({},e),{},{key:e.key}))}))})},Ie=(n(306),n(307),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function De(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ne,Le,Pe=n(51),Re=n(10),ze=Object(O.c)({name:"category",initialState:{category:[],subcategory:[]},extraReducers:(Ne={},Object(H.a)(Ne,Oe.fulfilled.toString(),(function(e,t){e[t.payload.type]=t.payload.res.data.data})),Object(H.a)(Ne,pe.fulfilled.toString(),(function(e,t){e[t.payload.type]=[].concat(Object(Re.a)(e[t.payload.type]),[t.payload.res.data.data])})),Object(H.a)(Ne,xe.fulfilled.toString(),(function(e,t){e[t.payload.type]=Object(Re.a)(e[t.payload.type].filter((function(e){return e._id!==t.payload.data.id})))})),Object(H.a)(Ne,me.fulfilled.toString(),(function(e,t){if("subcategory"===t.payload.type){var n=t.payload.res.data.data;e.subcategory=[n].concat(Object(Re.a)(e.subcategory.filter((function(e){return e._id!==n._id}))))}else{var a=t.payload.res.data.data;e.category[t.payload.index]=a}})),Ne)}).reducer,Te=Object(Pe.b)({authReducer:U,categoryReducer:ze}),Ee=n(70),He=n(193),Fe={key:"root",storage:n.n(He).a},Je=Object(Ee.g)(Fe,Te),Ue=Object(O.a)({reducer:Je,middleware:Object(O.d)({serializableCheck:{ignoredActions:[Ee.a,Ee.f,Ee.b,Ee.c,Ee.d,Ee.e]}})}),Be=Object(Ee.h)(Ue),We=n(194),qe=[{fruit:"Apple"},{fruit:"Banana"},{fruit:"Apple"},{fruit:"Apelsin"},{fruit:"Apelsin"},{fruit:"Apelsin"},{fruit:"Apelsin"}].map((function(e){return e.fruit})),Ke={},Ve=0;console.log(function(e){for(var t=0,n=e.length;t<n;t++){var a=e[t];void 0===Ke[a]?Ke[a]=1:Ke[a]=Ke[a]+1,Ke[a]>Ve&&(Ve=Ke[a],Le=e[t])}return Le}(qe)),o.a.render(Object(_.jsx)(E.a,{children:Object(_.jsx)(j.a,{store:Ue,children:Object(_.jsx)(We.a,{loading:null,persistor:Be,children:Object(_.jsx)(Ae,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):De(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):De(t,e)}))}}()},85:function(e,t,n){e.exports={layout:"DashboardLayout_layout__3JQr9",header:"DashboardLayout_header__3MLn3",content:"DashboardLayout_content__3kSt1",footer:"DashboardLayout_footer__9-EWy",side_header:"DashboardLayout_side_header__U2-y3",username:"DashboardLayout_username__Xg8FH",range_picker:"DashboardLayout_range_picker__3uomC"}}},[[310,1,2]]]);
//# sourceMappingURL=main.f09a7d96.chunk.js.map