(this.webpackJsonpdashboard_cosmetics=this.webpackJsonpdashboard_cosmetics||[]).push([[0],{104:function(e,t,n){e.exports={card:"Loginform_card__gQUhV",header:"Loginform_header__z9Guj",logo:"Loginform_logo__12-KG",input:"Loginform_input__lCfY2",submit_btn:"Loginform_submit_btn__2t7tS"}},105:function(e,t,n){e.exports={layout:"DashboardLayout_layout__3r6BQ",header:"DashboardLayout_header__3adtv",content:"DashboardLayout_content__2ewT0",footer:"DashboardLayout_footer__17cAo",side_header:"DashboardLayout_side_header__2wefh",username:"DashboardLayout_username__2Jz94",range_picker:"DashboardLayout_range_picker__UQe7U"}},167:function(e,t,n){e.exports={upload_img:"ImageUpload_upload_img__1YT82",image_upload_wrapper:"ImageUpload_image_upload_wrapper__YIaMA",form_wrapper:"ImageUpload_form_wrapper__2Joiq",form:"ImageUpload_form__3iA9E",upload_btn_wrapper:"ImageUpload_upload_btn_wrapper__2AD2H",image:"ImageUpload_image__1g6dx"}},188:function(e,t,n){e.exports={background:"AuthLayout_background__ntGOd"}},196:function(e){e.exports=JSON.parse('[{"title":"UZ","dataIndex":"lang","key":"uz"},{"title":"RUS","dataIndex":"lang","key":"ru"},{"title":"Actions","dataIndex":"action","key":"action","width":"10%"}]')},197:function(e){e.exports=JSON.parse('[{"title":"UZ","dataIndex":"lang","key":"uz"},{"title":"RUS","dataIndex":"lang","key":"ru"},{"title":"UZ description","dataIndex":"desc","key":"uz","width":"10%"},{"title":"RU description","dataIndex":"desc","key":"ru","width":"10%"},{"title":"Price","dataIndex":"price","key":"price","width":"10%"},{"title":"Actions","dataIndex":"action","key":"action","width":"10%"}]')},198:function(e){e.exports=JSON.parse('[{"name":"uz","placeHolder":"Name in uzbek"},{"name":"ru","placeHolder":"Name in russian"}]')},313:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n(30),o=n.n(c),i=n(1),s=n(31),u=n(188),l=n.n(u),d=n(6),b=n(104),j=n.n(b),p=n(47),g=n(29),h=n.n(g),A=n(48),f=n(43),y=n(55),O=n.n(y),m=function(){var e=Object(A.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()({url:"http://webmaster.fin-up.su/api/user/signup",method:"POST",data:t});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=Object(f.b)("auth/signup",m),v=function(){var e=Object(A.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()({url:"http://143.244.173.104/api/users/login ",method:"POST",data:t});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),E=Object(f.b)("auth/login",v),Q=n(8),k=function(){var e=Object(p.b)(),t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),s=i[0],u=i[1];return Object(Q.jsxs)("div",{className:j.a.card,children:[Object(Q.jsx)("header",{className:j.a.header,children:Object(Q.jsx)("h1",{children:"Login"})}),Object(Q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(E({name:a,password:s}))},children:[Object(Q.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)},className:j.a.input,type:"text",placeholder:"Name"}),Object(Q.jsx)("input",{value:s,onChange:function(e){return u(e.target.value)},className:j.a.input,type:"text",placeholder:"Password"}),Object(Q.jsx)("button",{type:"submit",className:j.a.submit_btn,children:"Kirish"})]})]})},C=function(){var e=Object(p.c)((function(e){return e.authReducer.authenticated}));return Object(Q.jsxs)("div",{className:l.a.background,children:[e&&Object(Q.jsx)(s.a,{to:"/dashboard"}),Object(Q.jsx)(k,{})]})},S=function(){return Object(Q.jsx)(C,{})},I=n(318),w=n(88),B=n(326),_=n(327),N=n(328),U=n(105),R=n.n(U),J=n(324),z=n(82),D=n(5),K=Object(f.c)({name:"auth",initialState:{user:null,token:null,authenticated:!1},reducers:{logout:function(e){e.user=null,e.token=null,e.authenticated=!1}},extraReducers:(a={},Object(D.a)(a,x.fulfilled.toString(),(function(e,t){e.token=t.payload.data.token})),Object(D.a)(a,E.fulfilled.toString(),(function(e,t){var n=t.payload.data;e.authenticated=!0,e.user=n.user,e.token=n.token})),a)}),P=K.actions.logout,H=K.reducer,F=I.a.Content,L=I.a.Sider,T=[{title:"Bosh sahifa",icon:Object(Q.jsx)(B.a,{}),link:"/dashboard"},{title:"Orders",icon:Object(Q.jsx)(B.a,{}),link:"/dashboard/orders"}],Y=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(p.b)();return Object(Q.jsxs)(I.a,{className:R.a.layout,children:[Object(Q.jsxs)(L,{theme:"dark",collapsible:!0,collapsed:n,onCollapse:function(e){a(e)},children:[Object(Q.jsxs)("div",{className:R.a.side_header,children:[Object(Q.jsx)(J.a,{className:R.a.avatar,size:"medium",icon:Object(Q.jsx)(_.a,{})}),!n&&Object(Q.jsx)("h4",{className:R.a.username,children:"John Doe"})]}),Object(Q.jsxs)(w.a,{theme:"dark",defaultSelectedKeys:["0"],mode:"inline",children:[T.map((function(e,t){return Object(Q.jsx)(w.a.Item,{icon:e.icon,children:Object(Q.jsx)(z.b,{to:e.link,children:e.title})},t)})),Object(Q.jsx)(w.a.Item,{onClick:function(){return c(P())},icon:Object(Q.jsx)(N.a,{}),children:"Chiqish"},"logout")]})]}),Object(Q.jsx)(I.a,{className:"site-layout",children:Object(Q.jsx)(F,{className:R.a.content,children:Object(Q.jsx)(s.d,{children:Ne.map((function(e){return Object(Q.jsx)(s.b,Object(i.a)({},e))}))})})})]})},G=function(){return Object(Q.jsx)(Y,{})},M=n(319),Z=n(322),W=n(325),q=n(50),X=n(138),V=n.n(X),$=n(147),ee=M.a.Column,te=function(e){var t=e.data,n=e.columns,a=e.searchInput,c=(e.footer,e.handleDeleteCategory),o=e.setvisible,s=e.setdefaults,u=e.handleSubCategory,l=(e.subCategory,e.table,e.type),b=Object(r.useState)(""),j=Object(d.a)(b,2),p=j[0],g=j[1],h=Object(r.useState)(""),A=Object(d.a)(h,2),f=A[0],y=A[1],O={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}},m=function(e,t,n){t(),g(e[0]),y(n)},x=function(e){e(),g("")};return Object(Q.jsx)(M.a,{rowSelection:Object(i.a)({type:"checkbox"},O),bordered:!0,size:"small",dataSource:t,children:n.map((function(e){return console.log(e.key,e.dataIndex,e),"lang"===e.dataIndex?Object(Q.jsx)(ee,{title:e.title,dataIndex:e.dataIndex,render:function(t,n){return Object(Q.jsx)("span",{children:null===n||void 0===n?void 0:n.title[e.key]})}},e.key):"desc"===e.dataIndex?Object(Q.jsx)(ee,{title:e.title,dataIndex:e.dataIndex,render:function(t,n){return Object(Q.jsx)("span",{children:null===n||void 0===n?void 0:n.desc[e.key]})}},e.key):"action"===e.dataIndex?Object(Q.jsx)(ee,{width:"25%",title:e.title,dataIndex:e.dataIndex,render:function(e,t,n){return Object(Q.jsxs)(W.b,{children:["exactSubcategory"!==l&&Object(Q.jsx)(q.a,{onClick:function(){return function(e){o(!0),s(e)}({data:t,index:n})},children:"Update"}),"category"===l&&Object(Q.jsx)(q.a,{onClick:function(){return u(t)},children:"Sub category"}),"exactSubcategory"!==l&&Object(Q.jsx)(q.a,{danger:!0,onClick:function(){return c(t._id)},children:"Delete"})]})}},e.key):Object(Q.jsx)(ee,Object(i.a)({title:e.title,dataIndex:e.dataIndex},(t=e.dataIndex,{filterDropdown:function(e){var n=e.setSelectedKeys,r=e.selectedKeys,c=e.confirm,o=e.clearFilters;return Object(Q.jsxs)("div",{style:{padding:8},children:[Object(Q.jsx)(Z.a,{ref:function(e){a=e},placeholder:"Search ".concat(t),value:r[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return m(r,c,t)},style:{width:188,marginBottom:8,display:"block"}}),Object(Q.jsxs)(W.b,{children:[Object(Q.jsx)(q.a,{type:"primary",onClick:function(){return m(r,c,t)},icon:Object(Q.jsx)($.a,{}),size:"small",style:{width:90},children:"Search"}),Object(Q.jsx)(q.a,{onClick:function(){return x(o)},size:"small",style:{width:90},children:"Reset"}),Object(Q.jsx)(q.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),g(r[0]),y(t)},children:"Filter"})]})]})},filterIcon:function(e){return Object(Q.jsx)($.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t]?n[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return a.select()}),100)},render:function(e){return f===t?Object(Q.jsx)(V.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[p],autoEscape:!0,textToHighlight:e?e.toString():""}):e}})),e.key);var t}))})},ne=n(323),ae=function(e){var t=e.children,n=e.visible,a=e.setvisible;return Object(Q.jsx)(ne.a,{title:"Basic Modal",visible:n,onOk:function(){a(!1)},onCancel:function(){a(!1)},footer:null,children:t})},re=n(113),ce=n(320),oe=n(321),ie=n(167),se=n.n(ie),ue="http://143.244.173.104",le=function(e){var t=e.imageUrl,n=e.setimageUrl,a=e.type,r=e.videoUrl,c=e.setvideoUrl;return Object(Q.jsxs)("div",{className:se.a.upload_img,children:["image"===a&&Object(Q.jsx)(oe.a,{width:"100%",src:t?"".concat(ue,"/").concat(t):"data:image/png;base64,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"}),"video"===a&&Object(Q.jsx)("span",{children:r}),Object(Q.jsxs)("label",{className:se.a.upload_btn_wrapper,children:["image"===a?"Rasm":"Video"," yuklash",Object(Q.jsx)("input",{type:"file",name:"file",id:"file",class:"inputfile",onChange:function(e){var t=new FormData;t.append("image"===a?"image":"file",e.target.files[0]),O()({url:"".concat(ue,"/api/users/").concat("image"===a?"uploadImage":"uploadFile"),method:"POST",data:t}).then((function(e){return"image"===a?n(e.data.path):c(e.data.path)}))}})]})]})},de=re.a.Option,be=function(e){var t=e.fields,n=e.handleAddCategory,a=e.handleUpdateCategory,c=e.defaults,o=ce.a.useForm(),s=Object(d.a)(o,1)[0],u=Object(r.useState)(""),l=Object(d.a)(u,2),b=l[0],j=l[1],p=Object(r.useState)(""),g=Object(d.a)(p,2),h=g[0],A=g[1];return Object(r.useEffect)((function(){if(c){var e,t,n,a=c.data;s.setFieldsValue(Object(i.a)(Object(i.a)(Object(i.a)({},a),a.title),{},{descUz:null===a||void 0===a||null===(e=a.desc)||void 0===e?void 0:e.uz,descRu:null===a||void 0===a||null===(t=a.desc)||void 0===t?void 0:t.ru})),j(null===c||void 0===c||null===(n=c.data)||void 0===n?void 0:n.img)}else s.resetFields(),j("")}),[c]),Object(Q.jsxs)(ce.a,{form:s,onFinish:function(e){c?a(Object(i.a)(Object(i.a)({},e),{},{img:b})):n(Object(i.a)(Object(i.a)({},e),{},{img:b})),s.resetFields(),j("")},size:"large",children:[t.map((function(e){return"select"===e.type?Object(Q.jsx)(ce.a.Item,{name:e.name,rules:[{required:!0}],children:Object(Q.jsx)(re.a,{placeholder:e.placeHolder,allowClear:!0,children:e.options.map((function(e){return Object(Q.jsx)(de,{value:e.value,children:e.label})}))})}):"image"===e.type||"video"===e.type?Object(Q.jsx)(le,{type:e.type,imageUrl:b,setimageUrl:j,videoUrl:h,setvideoUrl:A}):Object(Q.jsx)(ce.a.Item,{name:e.name,rules:[{required:!0}],children:Object(Q.jsx)(Z.a,{placeholder:e.placeHolder})})})),Object(Q.jsx)(ce.a.Item,{children:Object(Q.jsx)(q.a,{block:!0,type:"primary",htmlType:"submit",className:"login-form-button",children:c?"UPDATE":"ADD"})})]})},je=n(196),pe=n(197),ge=n(198),he=n(145),Ae=n(329),fe=n(330),ye=function(e){var t,n=e.type,a=e.vals;switch(n){case"category":t={title:a};break;case"subcategory":t={title:{uz:a.uz,ru:a.ru},cat_id:a.cat_id};break;default:t={title:{uz:a.uz,ru:a.ru},sub_cat_id:a.sub_cat_id,price:parseInt(a.price),desc:{uz:a.descUz,ru:a.descRu},img:a.img}}return t},Oe=function(){var e=Object(A.a)(h.a.mark((function e(t,n){var a,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,r=t.vals,e.prev=2,e.next=5,O()({url:"".concat(ue,"/api/").concat(t.type),method:"POST",data:ye({type:t.type,vals:r})});case 5:return c=e.sent,e.abrupt("return",{res:c,type:t.type});case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",a([],e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),me=Object(f.b)("category/create",Oe),xe=function(){var e=Object(A.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,O()({url:"".concat(ue,"/api/").concat(t,"/getAll"),method:"GET"});case 4:return r=e.sent,e.abrupt("return",{res:r,type:t});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a([],e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),ve=Object(f.b)("category/get",xe),Ee=function(){var e=Object(A.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,O()({url:"".concat(ue,"/api/").concat(t.type,"/").concat(t.id),method:"DELETE"});case 4:return e.sent,e.abrupt("return",{data:t,type:t.type});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a([],e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Qe=Object(f.b)("category/delete",Ee),ke=function(){var e=Object(A.a)(h.a.mark((function e(t,n){var a,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,r=t.vals,console.log(ye({type:t.type,vals:r})),e.prev=3,e.next=6,O()({url:"".concat(ue,"/api/").concat(t.type,"/").concat(t.id),method:"PATCH",data:ye({type:t.type,vals:r})});case 6:return c=e.sent,e.abrupt("return",{res:c,index:t.index,type:t.type});case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",a([],e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n){return e.apply(this,arguments)}}(),Ce=Object(f.b)("category/update",ke),Se=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),o=Object(d.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(!0),l=Object(d.a)(u,2),b=l[0],j=l[1],g=Object(r.useState)("product"),h=Object(d.a)(g,2),A=h[0],f=h[1],y=Object(r.useState)(null),O=Object(d.a)(y,2),m=O[0],x=O[1],v=Object(p.b)(),E=Object(p.c)((function(e){return e.categoryReducer.category})),k=Object(p.c)((function(e){return e.categoryReducer.product})),C=Object(p.c)((function(e){return e.categoryReducer.subcategory})),S=[{name:"cat_id",placeHolder:"Select category",type:"select",options:E.map((function(e){var t;return{value:null===e||void 0===e?void 0:e._id,label:null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.uz}}))},{name:"uz",placeHolder:"Name in uzbek"},{name:"ru",placeHolder:"Name in russian"}],I=function(e){console.log(A),v(me({vals:e,type:A}))},w=function(e){v(Ce({vals:e,id:i.data._id,index:i.index,type:A}))};return Object(r.useEffect)((function(){v(ve("category")),v(ve("subcategory")),v(ve("product"))}),[]),Object(Q.jsxs)("div",{children:[Object(Q.jsxs)(ae,{visible:n,setvisible:a,children:[b&&"product"!==A&&Object(Q.jsx)(be,{defaults:i,handleAddCategory:I,handleUpdateCategory:w,fields:ge}),!b&&"product"!==A&&Object(Q.jsx)(be,{defaults:i,handleAddCategory:I,handleUpdateCategory:w,fields:S}),"product"===A&&Object(Q.jsx)(be,{defaults:i,handleAddCategory:I,handleUpdateCategory:w,fields:[{name:"uz",placeHolder:"Name in uzbek"},{name:"ru",placeHolder:"Name in russian"},{name:"price",placeHolder:"Price"},{name:"descUz",placeHolder:"Description in Uzbek"},{name:"descRu",placeHolder:"Description in Russian"},{name:"img",placeHolder:"Product Image",type:"image"},{name:"video",placeHolder:"Product Video",type:"video"}]})]}),Object(Q.jsxs)(W.b,{style:{marginBottom:"1rem"},children:[Object(Q.jsx)(q.a,{type:"primary",icon:Object(Q.jsx)(Ae.a,{}),onClick:function(){s(null),a(!0),j(!0),f("category")},children:"Add"}),Object(Q.jsx)(q.a,{type:"primary",icon:Object(Q.jsx)(Ae.a,{}),onClick:function(){s(null),a(!0),j(!1),f("subcategory")},children:"Add SubCategory"}),Object(Q.jsx)(q.a,{type:"primary",icon:Object(Q.jsx)(Ae.a,{}),onClick:function(e){a(!0),f("product"),s(null)},children:"Add Product"}),Object(Q.jsx)(he.a.Group,{options:[{value:"category",label:"Categories"},{value:"product",label:"Products"},{value:"subcategory",label:"Subcategories"}],onChange:function(e){f(e.target.value)},value:A,optionType:"button"}),"exactSubcategory"===A&&Object(Q.jsx)(q.a,{type:"primary",icon:Object(Q.jsx)(fe.a,{}),onClick:function(){return f("category")}})]}),Object(Q.jsx)(te,{setdefaults:s,setvisible:a,handleDeleteCategory:function(e){v(Qe({id:e,type:A}))},handleSubCategory:function(e){x(e),f("exactSubcategory")},columns:"product"===A?pe:je,subCategory:m,data:"exactSubcategory"===A?C.filter((function(e){return e.cat_id===m._id})):"subcategory"===A?C:"product"===A?k:E,type:A})]})},Ie=function(){return Object(Q.jsx)("div",{children:Object(Q.jsx)(Se,{})})},we=n(204),Be=function(e){var t=e.searchInput,n=Object(r.useState)([]),a=Object(d.a)(n,2),c=a[0],o=a[1],s=Object(r.useState)(""),u=Object(d.a)(s,2),l=u[0],b=u[1],j=Object(r.useState)(""),p=Object(d.a)(j,2),g=p[0],h=p[1],A=function(e){return{filterDropdown:function(n){var a=n.setSelectedKeys,r=n.selectedKeys,c=n.confirm,o=n.clearFilters;return Object(Q.jsxs)("div",{style:{padding:8},children:[Object(Q.jsx)(Z.a,{ref:function(e){t=e},placeholder:"Search ".concat(e),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return f(r,c,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(Q.jsxs)(W.b,{children:[Object(Q.jsx)(q.a,{type:"primary",onClick:function(){return f(r,c,e)},icon:Object(Q.jsx)($.a,{}),size:"small",style:{width:90},children:"Search"}),Object(Q.jsx)(q.a,{onClick:function(){return y(o)},size:"small",style:{width:90},children:"Reset"}),Object(Q.jsx)(q.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),b(r[0]),h(e)},children:"Filter"})]})]})},filterIcon:function(e){return Object(Q.jsx)($.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return t.select()}),100)},render:function(t){return g===e?Object(Q.jsx)(V.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[l],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},f=function(e,t,n){t(),b(e[0]),h(n)},y=function(e){e(),b("")},m=function(e){O()({url:"http://143.244.173.104/api/orders/".concat(e._id),method:"PATCH",data:{isFinish:"true"}}).then((function(e){we.b.success("Success"),v()})).catch((function(e){we.b.error("Error")})),console.log(e)},x=[Object(i.a)({title:"Number",dataIndex:"number",key:"number"},A("number")),Object(i.a)({title:"isFinish",dataIndex:"isFinish",key:"isFinish"},A("isFinish")),{title:"Actions",dataIndex:"action",key:"action",width:"10%",render:function(e,t){return Object(Q.jsx)(q.a,{onClick:function(){return m(t)},children:"Finish"})}}],v=function(){return O()({url:"http://143.244.173.104/api/orders/getAll",method:"GET"}).then((function(e){return o(e.data.data)})),[]};return Object(r.useEffect)((function(){o(v())}),[]),Object(Q.jsxs)("div",{children:[console.log(c),Object(Q.jsx)(M.a,{columns:x,dataSource:c})]})},_e=[{path:"/",key:"APP_LOGIN",exact:!0,component:function(){return Object(Q.jsx)(S,{})}},{path:"/dashboard",key:"APP_DASHBOARD",exact:!1,component:function(){return Object(Q.jsx)(G,{})}}],Ne=[{path:"/dashboard",key:"APP_DASHBOARD",exact:!0,component:function(){return Object(Q.jsx)(Ie,{})}},{path:"/dashboard/orders",key:"APP_ORDERS",exact:!0,component:function(){return Object(Q.jsx)(Be,{})}}],Ue=n(12),Re=function(e){var t=e.component,n=Object(Ue.a)(e,["component"]),a=Object(p.c)((function(e){return e.authReducer.authenticated}));return Object(Q.jsx)(s.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return a?Object(Q.jsx)(t,Object(i.a)({},e)):Object(Q.jsx)(s.a,{to:"/"})}}))},Je=function(){return Object(Q.jsx)(s.d,{children:_e.map((function(e){return"APP_DASHBOARD"===e.key?Object(Q.jsx)(Re,Object(i.a)(Object(i.a)({},e),{},{component:e.component})):Object(r.createElement)(s.b,Object(i.a)(Object(i.a)({},e),{},{key:e.key}))}))})},ze=(n(312),n(313),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function De(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ke,Pe,He=n(53),Fe=n(10),Le=Object(f.c)({name:"category",initialState:{category:[],subcategory:[],product:[]},extraReducers:(Ke={},Object(D.a)(Ke,ve.fulfilled.toString(),(function(e,t){e[t.payload.type]=t.payload.res.data.data})),Object(D.a)(Ke,me.fulfilled.toString(),(function(e,t){e[t.payload.type]=[].concat(Object(Fe.a)(e[t.payload.type]),[t.payload.res.data.data])})),Object(D.a)(Ke,Qe.fulfilled.toString(),(function(e,t){e[t.payload.type]=Object(Fe.a)(e[t.payload.type].filter((function(e){return e._id!==t.payload.data.id})))})),Object(D.a)(Ke,Ce.fulfilled.toString(),(function(e,t){if("subcategory"===t.payload.type){var n=t.payload.res.data.data;e.subcategory=[n].concat(Object(Fe.a)(e.subcategory.filter((function(e){return e._id!==n._id}))))}else{var a=t.payload.res.data.data;console.log("Fired",t.payload),e[t.payload.type][t.payload.index]=a}})),Ke)}).reducer,Te=Object(He.b)({authReducer:H,categoryReducer:Le}),Ye=n(72),Ge=n(199),Me={key:"root",storage:n.n(Ge).a},Ze=Object(Ye.g)(Me,Te),We=Object(f.a)({reducer:Ze,middleware:Object(f.d)({serializableCheck:{ignoredActions:[Ye.a,Ye.f,Ye.b,Ye.c,Ye.d,Ye.e]}})}),qe=Object(Ye.h)(We),Xe=n(200),Ve=[{fruit:"Apple"},{fruit:"Banana"},{fruit:"Apple"},{fruit:"Apelsin"},{fruit:"Apelsin"},{fruit:"Apelsin"},{fruit:"Apelsin"}].map((function(e){return e.fruit})),$e={},et=0;console.log(function(e){for(var t=0,n=e.length;t<n;t++){var a=e[t];void 0===$e[a]?$e[a]=1:$e[a]=$e[a]+1,$e[a]>et&&(et=$e[a],Pe=e[t])}return Pe}(Ve)),o.a.render(Object(Q.jsx)(z.a,{children:Object(Q.jsx)(p.a,{store:We,children:Object(Q.jsx)(Xe.a,{loading:null,persistor:qe,children:Object(Q.jsx)(Je,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ze?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):De(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):De(t,e)}))}}()}},[[316,1,2]]]);
//# sourceMappingURL=main.bafe1d7c.chunk.js.map