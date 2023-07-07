(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{29382:function(e,t,n){"use strict";var r=n(78997);t.Z=void 0;var s=r(n(76906)),o=n(9268),a=(0,s.default)([(0,o.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},"0"),(0,o.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"},"1")],"ContentPasteSearchOutlined");t.Z=a},31982:function(e,t,n){Promise.resolve().then(n.bind(n,44323))},44323:function(e,t,n){"use strict";n.r(t);var r=n(9268),s=n(56008),o=n(86006),a=n(72474),i=n(59534),c=n(29382),l=n(50157),d=n(21628),x=n(50645),p=n(5737),h=n(90545),u=n(80937),g=n(11437),m=n(35086),f=n(53113),j=n(866),b=n(22046),Z=n(28086),P=n(78915);let{Dragger:w}=l.default,y=(0,x.Z)(p.Z)(e=>{let{theme:t}=e;return{width:"33%",backgroundColor:"dark"===t.palette.mode?t.palette.background.level1:"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",borderRadius:4,color:t.vars.palette.text.secondary}}),k=["Knowledge Space Config","Choose a Datasource type","Setup the Datasource"],S=[{type:"text",title:"Text",subTitle:"Fill your raw text"},{type:"webPage",title:"URL",subTitle:"Fetch the content of a URL"},{type:"file",title:"Document",subTitle:"Upload a document, document type can be PDF, CSV, Text, PowerPoint, Word, Markdown"}];t.default=()=>{let e=(0,s.useRouter)(),[t,n]=(0,o.useState)(0),[l,x]=(0,o.useState)(""),[F,v]=(0,o.useState)([]),[C,R]=(0,o.useState)(!1),[_,A]=(0,o.useState)(""),[z,N]=(0,o.useState)(""),[T,B]=(0,o.useState)(""),[E,O]=(0,o.useState)(""),[D,W]=(0,o.useState)(""),[U,L]=(0,o.useState)(""),[G,M]=(0,o.useState)(""),[V,I]=(0,o.useState)(null),[H,K]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{(async function(){let e=await (0,P.PR)("/knowledge/space/list",{});e.success&&v(e.data)})()},[]),(0,r.jsxs)(h.Z,{sx:{width:"100%",height:"100%"},className:"bg-[#F1F2F5] dark:bg-[#212121]",children:[(0,r.jsx)(h.Z,{className:"page-body p-4",sx:{"&":{height:"90%",overflow:"auto"},"&::-webkit-scrollbar":{display:"none"}},children:(0,r.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",sx:{"& i":{width:"430px",marginRight:"30px"}},children:[(0,r.jsxs)(h.Z,{sx:{display:"flex",alignContent:"start",boxSizing:"content-box",width:"390px",height:"79px",padding:"33px 20px 40px",marginRight:"30px",marginBottom:"30px",fontSize:"18px",fontWeight:"bold",color:"black",flexShrink:0,flexGrow:0,cursor:"pointer",borderRadius:"16px","&: hover":{boxShadow:"0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);"}},onClick:()=>R(!0),className:"bg-[#E9EBEE] dark:bg-[#484848]",children:[(0,r.jsx)(h.Z,{sx:{width:"32px",height:"32px",lineHeight:"28px",border:"1px solid #2AA3FF",textAlign:"center",borderRadius:"5px",marginRight:"5px",fontWeight:"300",color:"#2AA3FF"},children:"+"}),(0,r.jsx)(h.Z,{sx:{fontSize:"16px"},children:"space"})]}),F.map((t,n)=>(0,r.jsxs)(h.Z,{sx:{padding:"30px 20px 40px",marginRight:"30px",marginBottom:"30px",borderTop:"4px solid rgb(84, 164, 248)",flexShrink:0,flexGrow:0,cursor:"pointer",borderRadius:"10px","&: hover":{boxShadow:"0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);"}},onClick:()=>{e.push("/datastores/documents?name=".concat(t.name))},className:"bg-[#FFFFFF] dark:bg-[#484848]",children:[(0,r.jsxs)(h.Z,{sx:{fontSize:"18px",marginBottom:"10px",fontWeight:"bold",color:"black"},children:[(0,r.jsx)(c.Z,{sx:{marginRight:"5px",color:"#2AA3FF"}}),t.name]}),(0,r.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"flex-start"},children:[(0,r.jsxs)(h.Z,{sx:{width:"130px",flexGrow:0,flexShrink:0},children:[(0,r.jsx)(h.Z,{sx:{color:"#2AA3FF"},children:t.vector_type}),(0,r.jsx)(h.Z,{sx:{fontSize:"12px",color:"black"},children:"Vector"})]}),(0,r.jsxs)(h.Z,{sx:{width:"130px",flexGrow:0,flexShrink:0},children:[(0,r.jsx)(h.Z,{sx:{color:"#2AA3FF"},children:t.owner}),(0,r.jsx)(h.Z,{sx:{fontSize:"12px",color:"black"},children:"Owner"})]}),(0,r.jsxs)(h.Z,{sx:{width:"130px",flexGrow:0,flexShrink:0},children:[(0,r.jsx)(h.Z,{sx:{color:"#2AA3FF"},children:t.docs||0}),(0,r.jsx)(h.Z,{sx:{fontSize:"12px",color:"black"},children:"Docs"})]})]})]},n)),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]})}),(0,r.jsx)(g.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center","z-index":1e3},open:C,onClose:()=>R(!1),children:(0,r.jsxs)(p.Z,{variant:"outlined",sx:{width:800,borderRadius:"md",p:3,boxShadow:"lg"},children:[(0,r.jsx)(h.Z,{sx:{width:"100%"},children:(0,r.jsx)(u.Z,{spacing:2,direction:"row",children:k.map((e,n)=>(0,r.jsxs)(y,{sx:{fontWeight:t===n?"bold":"",color:t===n?"#2AA3FF":""},children:[n<t?(0,r.jsx)(i.Z,{}):"".concat(n+1,"."),"".concat(e)]},e))})}),0===t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:{margin:"30px auto"},children:["Knowledge Space Name:",(0,r.jsx)(m.ZP,{placeholder:"Please input the name",onChange:e=>A(e.target.value),sx:{marginBottom:"20px"}}),"Owner:",(0,r.jsx)(m.ZP,{placeholder:"Please input the owner",onChange:e=>N(e.target.value),sx:{marginBottom:"20px"}}),"Description:",(0,r.jsx)(m.ZP,{placeholder:"Please input the description",onChange:e=>B(e.target.value),sx:{marginBottom:"20px"}})]}),(0,r.jsx)(f.Z,{variant:"outlined",onClick:async()=>{if(""===_){d.ZP.error("please input the name");return}if(""===z){d.ZP.error("please input the owner");return}if(""===T){d.ZP.error("please input the description");return}let e=await (0,P.PR)("/knowledge/space/add",{name:_,vector_type:"Chroma",owner:z,desc:T});if(e.success){d.ZP.success("success"),n(1);let e=await (0,P.PR)("/knowledge/space/list",{});e.success&&v(e.data)}else d.ZP.error(e.err_msg||"failed")},children:"Next"})]}):1===t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.Z,{sx:{margin:"30px auto"},children:S.map(e=>(0,r.jsxs)(p.Z,{sx:{boxSizing:"border-box",height:"80px",padding:"12px",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid gray",borderRadius:"6px",marginBottom:"20px",cursor:"pointer"},onClick:()=>{x(e.type),n(2)},children:[(0,r.jsx)(p.Z,{sx:{fontSize:"20px",fontWeight:"bold"},children:e.title}),(0,r.jsx)(p.Z,{children:e.subTitle})]},e.type))})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:{margin:"30px auto"},children:["Name:",(0,r.jsx)(m.ZP,{placeholder:"Please input the name",onChange:e=>W(e.target.value),sx:{marginBottom:"20px"}}),"webPage"===l?(0,r.jsxs)(r.Fragment,{children:["Web Page URL:",(0,r.jsx)(m.ZP,{placeholder:"Please input the Web Page URL",onChange:e=>O(e.target.value)})]}):"file"===l?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(w,{name:"file",multiple:!1,onChange(e){var t;if(console.log(e),0===e.fileList.length){I(null),W("");return}I(e.file.originFileObj),W(null===(t=e.file.originFileObj)||void 0===t?void 0:t.name)},children:[(0,r.jsx)("p",{className:"ant-upload-drag-icon",children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)("p",{style:{color:"rgb(22, 108, 255)",fontSize:"20px"},children:"Select or Drop file"}),(0,r.jsx)("p",{className:"ant-upload-hint",style:{color:"rgb(22, 108, 255)"},children:"PDF, PowerPoint, Excel, Word, Text, Markdown,"})]})}):(0,r.jsxs)(r.Fragment,{children:["Text Source(Optional):",(0,r.jsx)(m.ZP,{placeholder:"Please input the text source",onChange:e=>L(e.target.value),sx:{marginBottom:"20px"}}),"Text:",(0,r.jsx)(j.Z,{onChange:e=>M(e.target.value),minRows:4,sx:{marginBottom:"20px"}})]}),(0,r.jsx)(b.ZP,{component:"label",sx:{marginTop:"20px"},endDecorator:(0,r.jsx)(Z.Z,{checked:H,onChange:e=>K(e.target.checked)}),children:"Synch:"})]}),(0,r.jsxs)(u.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",sx:{marginBottom:"20px"},children:[(0,r.jsx)(f.Z,{variant:"outlined",sx:{marginRight:"20px"},onClick:()=>n(1),children:"< Back"}),(0,r.jsx)(f.Z,{variant:"outlined",onClick:async()=>{if(""===D){d.ZP.error("Please input the name");return}if("webPage"===l){if(""===E){d.ZP.error("Please input the Web Page URL");return}let e=await (0,P.PR)("/knowledge/".concat(_,"/document/add"),{doc_name:D,content:E,doc_type:"URL"});e.success?(d.ZP.success("success"),R(!1),H&&(0,P.PR)("/knowledge/".concat(_,"/document/sync"),{doc_ids:[e.data]})):d.ZP.error(e.err_msg||"failed")}else if("file"===l){if(!V){d.ZP.error("Please select a file");return}let e=new FormData;e.append("doc_name",D),e.append("doc_file",V),e.append("doc_type","DOCUMENT");let t=await (0,P.Ej)("/knowledge/".concat(_,"/document/upload"),e);t.success?(d.ZP.success("success"),R(!1),H&&(0,P.PR)("/knowledge/".concat(_,"/document/sync"),{doc_ids:[t.data]})):d.ZP.error(t.err_msg||"failed")}else{if(""===G){d.ZP.error("Please input the text");return}let e=await (0,P.PR)("/knowledge/".concat(_,"/document/add"),{doc_name:D,source:U,content:G,doc_type:"TEXT"});e.success?(d.ZP.success("success"),R(!1),H&&(0,P.PR)("/knowledge/".concat(_,"/document/sync"),{doc_ids:[e.data]})):d.ZP.error(e.err_msg||"failed")}},children:"Finish"})]})]})]})})]})}},78915:function(e,t,n){"use strict";n.d(t,{Tk:function(){return d},Kw:function(){return x},PR:function(){return p},Ej:function(){return h}});var r=n(21628),s=n(24214),o=n(52040);let a=s.Z.create({baseURL:o.env.API_BASE_URL});a.defaults.timeout=1e4,a.interceptors.response.use(e=>e.data,e=>Promise.reject(e));var i=n(84835);let c={"content-type":"application/json"},l=e=>{if(!(0,i.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let n=t[e];"string"==typeof n&&(t[e]=n.trim())}return JSON.stringify(t)},d=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return a.get("/api"+e,{headers:c}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},x=(e,t)=>{let n=l(t);return a.post("/api"+e,{body:n,headers:c}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},p=(e,t)=>(l(t),a.post(e,t,{headers:c}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})),h=(e,t)=>a.post(e,t).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})}},function(e){e.O(0,[180,110,97,160,86,679,827,642,253,769,744],function(){return e(e.s=31982)}),_N_E=e.O()}]);