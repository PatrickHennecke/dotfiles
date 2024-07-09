// Copyright (C) 1999-2024 Siber Systems Inc. All Rights Reserved.
(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[523],{35578:function(){},76752:function(a,b,c){"use strict"
;var d=c(8144),e=c(18540),f=c(49833),g=c(66423),h=c(5197),i=c(34943);(0,c(78440).fI)((0,d.K)((0,e.Me)(),(0,f.b)((0,h.T)()),(0,
i.Q)(),(0,g.k)()))},49833:function(a,b,c){"use strict";c.d(b,{b:function(){return e}});var d=c(31525);function e(a){const b=(0,
d.U)(a);return Object.assign(Object.assign({},b),{Init:function(){b.Init(chrome.runtime.getURL("_favicon/?size=16&pageUrl="),!0)
}})}},83099:function(a,b,c){"use strict";function d(a){return a?`data:${a.m_type};base64,${a.m_bytes_base64}`:null}c.d(b,{
v:function(){return d}})},31525:function(a,b,c){"use strict";c.d(b,{U:function(){return j}})
;var d=c(83099),e=c(88262),f=c(13113),g=c(40868),h=c(70026),i=c(69893);c(13117);function j(a){const b=a;let c,e,g=!1,i=!1
;const j=(0,h.t)(),l="invalid_url";return{Init:function(a,b){m(),i=!0,c=a,g=b},UnInit:m,GetWebSiteIconUrl:async function(a,b){
const c=await n(a,b);return c?(0,d.v)(c):null},GetWebSiteIconInfo:n};function m(){i&&(i=!1,c=void 0,g=!1,e=void 0,j.RemoveAll())
}async function n(a,d){if(!c)return null;const h=(0,f.vN)(a);if(!h)return null
;if("http"!==h.m_schema&&"https"!==h.m_schema)return null;const i=(0,f.N8)(h);if(!i)return null;const m=c;if(void 0===e){
const a=await j.GetData(l,{default:null,persistent:!0,progress:d,onGetData:async a=>k(l,m,b,a)});e=a}const n=await j.GetData(i,{
default:null,maxAgeSec:86400,progress:d,onGetData:async()=>{const c=await k(g?encodeURIComponent(a):a,m,b,d)
;return c&&c.m_bytes_base64!==(null==e?void 0:e.m_bytes_base64)?c:null}});return null!=n?n:null}}async function k(a,b,c,d){var f
;try{const e=await c.SendHttpRequest({method:"GET",url:b+a,receiveBodyType:"blob",timeout:1e4},d);return await h(e)}catch(j){
if((0,i.r5)(j,i.kd))throw j
;return(0,e.dW)(j)&&404===j.httpResponse.status&&(null===(f=j.httpResponse.headers["content-type"])||void 0===f?void 0:f.startsWith("image/"))?h(j.httpResponse):null
}async function h(a){const b=a.bodyAsValue;return b?b.size>65536?null:{m_type:b.type,m_bytes_base64:await(0,
g.n1)(new Uint8Array(await b.arrayBuffer()),!1)}:null}}},34943:function(a,b,c){"use strict";c.d(b,{Q:function(){return g}})
;var d=c(40868),e=c(69893),f=(c(13117),c(31404),c(64026));function g(){return{OpenZip:h}}async function h(a){try{
const b=[],c=new f.zg(new f.nZ(a));try{const a=await c.getEntries();for(const c of a)c.getData&&b.push({m_file_name:await(0,
d.Z$)(c.rawFilename),m_bytes:await c.getData(new f.$i)})}finally{await c.close()}return b}catch(b){throw(0,
e.ZU)(e.V2,`Cannot open ZIP: ${(0,e.EB)(b)}`)}}(0,f.jK)({useWebWorkers:!1})},8144:function(a,b,c){"use strict";c.d(b,{
K:function(){return n}})
;var d=c(1975),e=c(31173),f=c(40868),g=c(63956),h=c(78440),i=c(69893),j=c(12190),k=c(73863),l=c(95399),m=c(4153);c(13117),
c(35578);async function n(a,b,c,n){const o=a,p=function(a,b,c,n){var o,p,q;const r=a,s=b,t=c
;let u,v=[],w=null,x=null,y=null,z="layout",A=null,B=null,C=null,D="9.6.4.0",E=null!==(o=null===navigator||void 0===navigator?void 0:navigator.platform)&&void 0!==o?o:"",F=null!==(p=null===navigator||void 0===navigator?void 0:navigator.userAgent)&&void 0!==p?p:"",G="",H=null!==(q=null===navigator||void 0===navigator?void 0:navigator.language)&&void 0!==q?q:""
;const I={Init:J,SetViewMode:K,Update:L,onDisconnectFromUpdateEvents:null};return I;function J(){v=[],w=null,x=null,y=null,
z="layout",A=null;ah(".header .text-json-view .set-mode").addEventListener("change",O)
;ah(".header .layout-view .set-mode").addEventListener("change",P)
;ah(".header .list-view .set-mode").addEventListener("change",Q)
;ah(".header .details-view .set-mode").addEventListener("change",R),window.addEventListener("resize",(function(){B&&B()}),!0)
;ah(".history-container .current-page").addEventListener("click",N);ah("#load-report").addEventListener("click",(()=>{
I.onDisconnectFromUpdateEvents&&I.onDisconnectFromUpdateEvents(),(0,h.uT)((async()=>{try{await M()}catch(a){
alert("Cannot load report file: "+(0,i.EB)(a))}})(),"#load-report:click")}));ah("#save-report").addEventListener("click",(()=>{
const a=w;if(a){let b;a.m_web_page_data&&(b=(0,d.MZ)(a.m_web_page_data));const c=(0,l.Mv)()-3e5,e=[];for(const a of v){
const b=a.m_record;if(b.m_time<=c)break;if(b.m_web_page_data){const c=(0,d.MZ)(b.m_web_page_data);e.push({
m_info:Object.assign(Object.assign({},b),{m_web_page_data:c}),m_forms:a.m_forms})}else e.push({m_info:b})}const i={
m_diagnostic_info:{m_web_page_url:(null==b?void 0:b.m_url)||"",m_web_page_domain:(null==b?void 0:b.m_domain)||"",
m_app_window:a.m_app_window,m_web_page_data:b,m_analyzed_forms:a.m_analyzed_forms,m_history:e},m_extension_version:D,m_os:E,
m_browser:F,m_browser_version:G,m_browser_language:H};(0,h.fI)((async()=>{await(0,g.WN)("rf-diagnostic-info.json",await(0,
f.zN)((0,k.Ex)(i)),"application/json")})())}}));ah("#copy-webpagedata").addEventListener("click",(()=>{(0,h.uT)((async()=>{var a
;try{const b=null!==(a=null==w?void 0:w.m_web_page_data)&&void 0!==a?a:null;await t.WriteText((0,k.Ex)(b))}catch(b){
alert("Cannot load report file: "+(0,i.EB)(b))}})(),"#copy-webpagedata:click")}))
;ah("#close-history").addEventListener("click",(()=>{ah(".history-container").classList.add("hidden")})),aa(w),Z(null),V(T()),
ab(w)}function K(a){z=a}function L(a){w=a,aa(a),a.m_history&&0!==a.m_history.length&&Y(a.m_history,a.m_history_forms),V(T()),
null===x&&ab(w)}async function M(){var a,b,c,d,e,h;const j=await(0,g.tf)([".json",".zip"]);if(!j)return;let k,l
;if(document.title=`RoboForm Dev-UI - View: ${j.name}, ${new Date(j.lastModified).toLocaleString()}`,
"application/x-zip-compressed"===j.type){const a=await n.OpenZip(j)
;for(const b of a)if("rf-diagnostic-info.json"===b.m_file_name?k=await(0,
f.Z$)(b.m_bytes):"active-tab-screenshot.htm"===b.m_file_name&&(l=await(0,f.Z$)(b.m_bytes)),void 0!==k&&void 0!==l)break
;if(!k)throw(0,i.ZU)(i.V2,"File rf-diagnostic-info.json not found in ZIP")}else k=await(0,f.wv)(j);if(u=null,l){
const a=(new DOMParser).parseFromString(l,"text/xml").querySelector("img");a&&(u=a.getAttribute("src"))}
const m=JSON.parse(k),o=m.m_diagnostic_info;let p,q=null
;if(null===(a=null==o?void 0:o.m_web_page_data)||void 0===a?void 0:a.m_fields){const a=m.m_web_page_field_index;if(void 0!==a){
const b=o.m_web_page_data.m_fields[a];b&&(q=b.m_pos)}}
if(X(),null==o?void 0:o.m_history)for(const f of o.m_history)f.m_forms&&((p||(p={}))[f.m_info.m_id]=f.m_forms);C=q,
D=null!==(b=m.m_extension_version)&&void 0!==b?b:"",E=null!==(c=m.m_os)&&void 0!==c?c:"",
F=null!==(d=m.m_browser)&&void 0!==d?d:"",G=null!==(e=m.m_browser_version)&&void 0!==e?e:"",
H=null!==(h=m.m_browser_language)&&void 0!==h?h:"",L({m_app_window:null==o?void 0:o.m_app_window,
m_web_page_data:null==o?void 0:o.m_web_page_data,m_analyzed_forms:null==o?void 0:o.m_analyzed_forms,
m_history:(null==o?void 0:o.m_history)&&o.m_history.map((a=>a.m_info)),m_history_forms:p})}function N(){Z(null),V(T()),ab(w)}
function O(a){K("text-json"),ab(y)}function P(a){K("layout"),ab(y)}function Q(a){K("list"),ab(y)}function R(a){K("details"),
ab(y)}function S(a){let b,c;if(a)for(const d of v){const e=d.m_record;e.m_id===a&&(b=e,c=d.m_forms)}b?(Z(b),V(b.m_tab_id),ab({
m_web_page_data:b.m_web_page_data,m_analyzed_forms:c,m_app_window:w&&w.m_app_window||void 0})):(Z(null),V(T()),ab(w))}
function T(){return w&&w.m_web_page_data&&w.m_web_page_data.m_tab_id}function U(){
return y&&y.m_web_page_data&&y.m_web_page_data.m_tab_id}function V(a){if(v)for(const b of v){const c=b.m_view;if(!c)continue
;const d=c;b.m_record.m_tab_id===a?d.classList.add("hilited"):d.classList.remove("hilited")}}async function W(a,b){
return r.CallBackgroundScript("ActivateTab",null,null,a,{focus:b})}function X(){const a=ah(".history-container"),b=ah(a,"tbody")
;(0,g.h9)(b),v=[]}function Y(a,b){const c=ah(".history-container"),d=U(),e=ah(c,"template.item-row"),f=ah(c,"tbody")
;for(let g=a.length-1;g>=0;g--){
const c=a[g],i=c.m_web_page_data,j=document.importNode(e.content,!0),k=ah(j,".item"),l=ah(j,".item-row")
;c.m_time&&(ah(j,".time").textContent=new Date(c.m_time).toLocaleTimeString("en",{hour12:!1}));let m=""
;c.m_event&&(m=c.m_event.toUpperCase()),c.m_submit_reason&&(m+=" ["+c.m_submit_reason+"]"),
c.m_transition_type&&(m+=" ("+c.m_transition_type+")"),ah(j,".event").textContent=m;let n="";c.m_id&&(n=`id=${c.m_id}`,
l.id=`history-${c.m_id}`),c.m_tab_id&&(n+=" tab="+c.m_tab_id),c.m_frame_id&&(n+=" frame="+c.m_frame_id),
n&&(ah(j,".details").textContent=n,ah(j,".details").title=n);const o=c.m_url||(null==i?void 0:i.m_url);if(o&&((0,
h.fI)((async()=>{var a;ah(j,".url-icon").src=null!==(a=await s.GetWebSiteIconUrl(o,null))&&void 0!==a?a:""})()),
ah(j,".url").href=o,
ah(j,".url").textContent=o,ah(j,".url").title=o),"navigation"===c.m_event)k.addEventListener("click",(function(){const a=U()
;c.m_tab_id!==a&&(0,h.uT)((async()=>{await W(c.m_tab_id,!1)&&Z(null)})(),"_UpdatedHistoryRecordSelection")
}),!1);else l.classList.add("selectable"),k.addEventListener("click",(function(){(0,h.uT)((async()=>{await W(c.m_tab_id,!1),
S(c.m_id)})(),"_SelectHistoryRecord")}),!1);d===c.m_tab_id&&l.classList.add("hilited"),f.insertBefore(j,f.firstElementChild),
v.unshift({m_record:c,m_view:f.firstElementChild,m_forms:b&&b[c.m_id]||void 0})}}function Z(a){const b=a&&a.m_id
;if(x&&x===b)return;const c=ah(".history-container"),d=ah(c,".selected");d&&d.classList.remove("selected"),x=b
;const e=ah(".history-container .current-page");let f;if(b&&(f=ah(c,`#history-${b}`)),f||(f=e,x=null),
f&&f.classList.add("selected"),x){const b=T();a&&a.m_tab_id===b?e.classList.add("hilited"):e.classList.remove("hilited")
}else e.classList.add("hilited")}function aa(a){const b=a&&a.m_web_page_data,c=ah(".history-container .current-page");let d=""
;const e=b&&b.m_tab_id;if(e){d+=" tab="+e;const a=b&&b.m_opener_tab_id;a&&(d+=" ("+a+")")}ah(c,".details").textContent=d,
ah(c,".details").title=d;const f=(null==b?void 0:b.m_url)||"";f?(0,h.fI)((async()=>{var a
;ah(c,".url-icon").src=null!==(a=await s.GetWebSiteIconUrl(f,null))&&void 0!==a?a:""})()):ah(c,".url-icon").src="",
ah(c,".url").href=f,ah(c,".url").textContent=f,ah(c,".url").title=f}function ab(a){var b,c,d
;const f=y&&y.m_web_page_data,h=y&&y.m_app_window,i=a&&a.m_web_page_data,l=a&&a.m_app_window,n=f&&f.m_tab_id,o=h&&h.id,p=i&&i.m_tab_id,q=l&&l.id,r=n&&p&&n===p&&o===q
;y=a||{},y.m_web_page_data||(y.m_web_page_data={});const s={},t=[],v={},w={},x=(0,
m.TT)(y.m_web_page_data),I=y.m_analyzed_forms,J=I&&I.m_forms||[];for(let S=0;S<J.length;++S){
const T=J[S],U=T.m_type||"---",V=`${U}[${T.m_instance_index}]`;let W=0;void 0===w[V]?w[V]=0:W=++w[V];let X=""
;void 0!==T.m_mandatory_fields_percent&&T.m_mandatory_fields_percent<100&&(X+=` ${T.m_mandatory_fields_percent}%`)
;const Y=`#${S} ${V} Part[${W}] ${X}`;(v[U]||(v[U]=[])).push(Y);const Z=T.m_fields;for(const aa in Z){
const ab=Z[aa].m_web_page_field_indices;for(let ai=0;ai<ab.length;++ai){const aj=ab[ai],ak=(0,m.TT)(x.m_fields)[aj];if(ak){
const al=`${ak.m_frame_id}-${ak.m_id}`;s[al]||(s[al]={m_field_key:al,m_fields:[],m_form_names:[],m_form_types:[]})
;const am=ab.length>1?`${aa}(part ${ai})`:aa;s[al].m_fields.push(am),s[al].m_form_names.push(Y),s[al].m_form_types.push(U)}}}}
for(const an in v){const ao=v[an];for(const ap of ao)t.push(ap)}const K=A!==z;let L,M;switch(A=z,B=null,
ah(".header .url").textContent=x.m_url||"",ah(".header .url").href=x.m_url||"",ah(".header .title").textContent=x.m_title||"",
ah(".header .icon-image").src=x.m_icon||"",z){case"layout":L="layout-view";break;case"list":L="list-view";break;case"details":
L="details-view";break;default:L="text-json-view"}
const N=ah("template."+L),O=document.importNode(N.content,!0),P=(x.m_fields||[]).slice();let Q=-1;if(x.m_action_element){
const aq=x.m_action_element;if(aq.m_data){Q=P.length;const ar={m_id:aq.m_id,m_index:P.length,m_pos:aq.m_data.m_pos,
m_frame_id:(0,m.TT)(aq.m_frame_id),m_type:aq.m_data.m_type,m_visible:!0};P.push(ar)}else for(let as=0;as<P.length;as++){
const at=P[as];if(at.m_id===aq.m_id&&at.m_frame_id===aq.m_frame_id){Q=as;break}}}switch(z){case"list":{const au=ah(O,"tbody")
;if(0===P.length){const aw=ah(O,"template.empty"),ax=document.importNode(aw.content,!0);au.appendChild(ax)}else{
const ay=ah(O,"template.item");for(let az=0;az<P.length;az++){
const aA=P[az],aB=aA.m_id,aC=aA.m_frame_id,aD=`${aC||0}-${aB||0}`,aE=document.importNode(ay.content,!0),aF=ah(aE,".item")
;aF.classList.remove("visible","not-in-view-port","overlapped","selected","focused"),
aA.m_visible?aA.m_html&&aA.m_html.m_overlapped&&aF.classList.add("overlapped"):aF.classList.add("not-in-view-port"),
aA.m_html&&aA.m_html.m_selected&&aF.classList.add("selected"),aA.m_html&&aA.m_html.m_focused&&aF.classList.add("focused")
;let aG=ah(aE,".field-type");aG.textContent=aA.m_type,aG=ah(aE,".field-id"),aB?(aG.textContent=(0,m.bf)(aB),
az===Q&&(aG.textContent+=" (SUBMIT)")):az===Q&&(aG.textContent="SUBMIT"),aG=ah(aE,".field-index"),aG.textContent=(0,
m.bf)(aA.m_index),
aG=ah(aE,".field-visibility"),aA.m_visible?aA.m_html&&aA.m_html.m_overlapped?aG.textContent="Overlapped":aG.textContent="In viewport":aG.textContent="Not in viewport",
aA.m_html&&aA.m_html.m_selected&&(aG.textContent&&(aG.textContent+=" "),aG.textContent+=" Selected"),
aA.m_html&&aA.m_html.m_focused&&(aG.textContent&&(aG.textContent+=" "),aG.textContent+=" Focused"),
aA.m_html&&aA.m_html.m_shadow_dom&&(aG.textContent&&(aG.textContent+=" "),aG.textContent+=" ShadowDOM"),
aG=ah(aE,".field-frame"),aC&&(aG.textContent="FrameID="+aC);const aH="&ensp;";aG=ah(aE,".field-analyzer-info")
;let aI='<b>"Field"'+aH+"Form:</b>";const aJ=s[aD];if(aJ)for(let aO=0;aO<aJ.m_fields.length;++aO)aI+="<br>",
aI+='"'+aJ.m_fields[aO]+'"',aI+=aH,aI+=aJ.m_form_types[aO];aG.innerHTML=aI
;ah(aE,".left-top-info").textContent=aA.m_pos?`${aA.m_pos[0]},${aA.m_pos[1]}`:""
;ah(aE,".right-bottom-info").textContent=aA.m_pos?`${aA.m_pos[2]},${aA.m_pos[3]}`:""
;ah(aE,".caption-left").textContent=aA.m_captions&&aA.m_captions.left&&aA.m_captions.left.m_text||null
;ah(aE,".caption-top").textContent=aA.m_captions&&aA.m_captions.top&&aA.m_captions.top.m_text||null
;ah(aE,".caption-right").textContent=aA.m_captions&&aA.m_captions.right&&aA.m_captions.right.m_text||null
;ah(aE,".caption-bottom").textContent=aA.m_captions&&aA.m_captions.bottom&&aA.m_captions.bottom.m_text||null
;const aK=ah(aE,".input-container");aK.classList.remove("changed","unchanged","simulated"),
aK.classList.add(aA.m_changed||az===Q?"changed":"unchanged"),aA.m_simulated_change&&aK.classList.add("simulated")
;const aL=ac(az,aA);aK.appendChild(aL);const aM=ah(aE,".html-info table"),aN=aA.m_html;if(ad(aM,"Caption",aN&&aN.m_caption),
aN&&aN.m_labels)for(let aP=0;aP<aN.m_labels.length;aP++){const aQ=aN.m_labels[aP]
;ad(aM,aQ.m_aria_label?"[aria-label]":"Label",aQ.m_text)}ad(aM,"tag",aN&&aN.m_tag),ad(aM,"[type]",aN&&aN.m_type),
"select"===aA.m_type&&ad(aM,"multiselect",aA.m_multiselect?"true":void 0),
(null==aN?void 0:aN.m_has_value)&&ad(aM,"[has_value]","true"),ad(aM,"[disabled]",aN&&aN.m_disabled?"true":void 0),
ad(aM,"[read_only]",aN&&aN.m_read_only?"true":void 0),ad(aM,"[id]",aN&&aN.m_id),ad(aM,"[name]",aN&&aN.m_name),
ad(aM,"[maxlength]",(0,m.bf)(aN&&aN.m_maxlength)),ad(aM,"[autocomplete]",aN&&aN.m_autocomplete),
ad(aM,"[placeholder]",aN&&aN.m_placeholder),
ad(aM,"[title]",aN&&aN.m_title),void 0!==aA.m_default_value?ad(aM,"[default]",aA.m_default_value):void 0!==aA.m_default_checked&&ad(aM,"[default]",aA.m_default_value?"checked":"unchecked"),
au.appendChild(aE)}}(0,m.TT)(O.firstElementChild).classList.add("view"),M=ah(".view"),(0,m.TT)(M.parentNode).replaceChild(O,M),
M=ah(".view");const av=ah(M,".item.focused .input-container>*:first-child");av&&(av.focus(),av.scrollIntoView());break}
case"layout":{let aR,aS;if(r){const be=ah(".content .view .data-view");be&&(aR=be.scrollLeft,aS=be.scrollTop)}
const aT=ah(O,".data-view"),aU=ah(O,".document-area"),aV=ah(O,".visible-area"),aW=ah(O,".overview-map .visible-area"),aX=ah(O,".layout-view .side-bar"),aY=ah(O,".controls")
;let aZ=x&&x.m_width||0,a0=x&&x.m_height||0;const a1=x&&x.m_client_width,a2=x&&x.m_client_height;void 0!==a1&&a1<aZ&&(aZ=a1),
void 0!==a2&&a2<a0&&(a0=a2)
;const a3=x&&x.m_scroll_x||0,a4=x&&x.m_scroll_y||0,a5=x.m_scroll_width||a3+aZ,a6=x.m_scroll_height||a4+a0;if((0,g.BQ)(aU,a5,a6),
(0,g.GF)(aV,a3,a4,aZ,a0),C){const bf=ah(O,"template.bug"),bg=ah(document.importNode(bf.content,!0),".bug");(0,
g.i)(bg,C[2],C[1]),aV.appendChild(bg)}let a7=null,a8=0,a9=0,ba=0,bb=0;const bc={};if(x&&"html"===x.m_type){if(0===P.length){
const bj=ah(O,"template.empty"),bk=document.importNode(bj.content,!0);aV.appendChild(bk),aY.classList.add("hidden")}else{
const bl=[[".controls .filters .captions","captions-hidden"],[".controls .filters .labels","labels-hidden"],[".controls .filters .search-rects","search-rects-hidden"]]
;for(let bv=0;bv<bl.length;bv++){const bw=bl[bv],bx=ah(aY,bw[0]);bx.addEventListener("change",function(a,b){return()=>{
a.checked?bh.classList.remove(b):bh.classList.add(b)}}(bx,bw[1]),!1)}const bm=ah(aY,".controls .filters .screenshot")
;void 0===u?null===(b=bm.parentElement)||void 0===b||b.classList.add("hidden"):null===u?(null===(c=bm.parentElement)||void 0===c||c.classList.remove("hidden"),
bm.disabled=!0,bm.title="No screenshot in report"):(null===(d=bm.parentElement)||void 0===d||d.classList.remove("hidden"),
bm.disabled=!1,bm.title="Show/Hide screenshot from report",bm.addEventListener("change",(()=>{
bm.checked&&u?(aV.style.backgroundImage=`url(${u})`,aW.style.backgroundImage=`url(${u})`):(aV.style.backgroundImage="none",
aW.style.backgroundImage="none")}),!1));const bn=ah(aY,"#autofill_forms");for(let by=0;by<t.length;++by){
const bz=t[by],bA=document.createElement("option");bA.value=ag(bz),bA.innerHTML=bz,bn.appendChild(bA)}
bn.addEventListener("change",(function(){const a=aV.querySelectorAll(".content .layout-view .form-field-name")
;for(let b=0;b<a.length;b++)a[b].classList.remove("form-field-name"),a[b].classList.add("form-field-name-hidden");if(bn.value){
const a=aV.querySelectorAll(".form-"+bn.value);for(let b=0;b<a.length;b++)a[b].classList.remove("form-field-name-hidden"),
a[b].classList.add("form-field-name")}}))
;const bo=ah(O,"template.field"),bp=ah(O,"template.caption"),bq=ah(O,"template.search-rect"),br=ah(O,"template.adjacent-area"),bs=[]
;for(const bB of P){const bC=bB.m_id,bD=`${bB.m_frame_id||0}-${bC||0}`,bE=bB.m_pos;if(bE&&(a7=(0,j.tN)(a7,bE)),bB.m_captions){
const bF={left:bB.m_captions.left,top:bB.m_captions.top,right:bB.m_captions.right,bottom:bB.m_captions.bottom}
;for(const bG in bF){const bH=bF[bG];if(!bH||!bH.m_pos)continue;a7=(0,j.tN)(a7,bH.m_pos);const bI={m_pos:bH.m_pos,
m_caption_for_fields:{},m_text:bH.m_text};bI.m_caption_for_fields&&(bI.m_caption_for_fields[bD]=bG),bs.push(bI)}}
if(bB.m_html&&bB.m_html.m_labels)for(const bJ of bB.m_html.m_labels){if(!bJ||!bJ.m_pos)continue;a7=(0,j.tN)(a7,bJ.m_pos)
;const bK={m_pos:bJ.m_pos,m_label_for_fields:{},m_text:bJ.m_text};bK.m_label_for_fields&&(bK.m_label_for_fields[bD]=bB),
bs.push(bK)}}let bt,bu;for(const bL of P)bL.m_html&&(bu=bL.m_html.m_z_index,void 0!==bu&&(void 0===bt||bu<bt)&&(bt=bu))
;for(const bM of bs)bu=bM.m_z_index,void 0!==bu&&(void 0===bt||bu<bt)&&(bt=bu);for(let bN=0;bN<P.length;bN++){
const bO=P[bN],bP=bO.m_id,bQ=`${bO.m_frame_id||0}-${bP||0}`,bR=bO.m_pos;if(bR){
const bS=document.importNode(bo.content,!0),bT=ah(bS,".input-container")
;bT.classList.remove("not-in-view-port","overlapped","selected","focused","changed","unchanged","simulated"),
bO.m_visible?bO.m_html&&bO.m_html.m_overlapped&&bT.classList.add("overlapped"):bT.classList.add("not-in-view-port"),
bO.m_html&&bO.m_html.m_selected&&bT.classList.add("selected"),bO.m_html&&bO.m_html.m_focused&&bT.classList.add("focused"),
bT.classList.add(bO.m_changed||bN===Q?"changed":"unchanged"),bO.m_simulated_change&&bT.classList.add("simulated"),
bT.classList.add("field-"+bQ);const bU=s[bQ];if(bU){const bX=bU.m_form_names;for(let bY=0;bY<bX.length;++bY){
const bZ=ah(O,"template.field_name"),b0=ah(document.importNode(bZ.content,!0),".form-field-name-hidden")
;b0.innerText=bU.m_fields[bY],b0.classList.add("form-"+ag(bX[bY]));const b1=(bR[3]-bR[1])/2;b0.style.left=(0,e.Md)(bR[0]+b1),
b0.style.top=(0,e.Md)(bR[1]+1),aV.appendChild(b0),b0.classList.add("field-"+bQ),b0.addEventListener("mouseenter",function(a){
return function(){aV.classList.add("dimmed");const b=aV.querySelectorAll(".field-"+a)
;for(let a=0;a<b.length;a++)b[a].classList.add("field-hover")}}(bQ),!1),b0.addEventListener("mouseleave",function(a){
return function(){aV.classList.remove("dimmed");const b=aV.querySelectorAll(".field-"+a)
;for(let a=0;a<b.length;a++)b[a].classList.remove("field-hover")}}(bQ),!1)}}const bV=ac(bN,bO)
;bV.classList.add("web-page-field-control"),bT.appendChild(bV),(0,g.GF)(bT,bR[0],bR[1],bR[2]-bR[0],bR[3]-bR[1]),
bO.m_html&&void 0!==bO.m_html.m_z_index&&void 0!==bt&&(bT.style.zIndex=(0,m.bf)(bO.m_html.m_z_index-bt)),
bT.addEventListener("mouseenter",function(a){return function(){aV.classList.add("dimmed")
;const b=aV.querySelectorAll(".field-"+a);for(let a=0;a<b.length;a++)b[a].classList.add("field-hover")}}(bQ),!1),
bT.addEventListener("mouseleave",function(a){return function(){aV.classList.remove("dimmed")
;const b=aV.querySelectorAll(".field-"+a);for(let a=0;a<b.length;a++)b[a].classList.remove("field-hover")}}(bQ),!1),
aV.appendChild(bS);const bW=bO.m_captions&&bO.m_captions.m_dbg;if(bW){
if(bW.m_search_rects)for(let b2=0;b2<bW.m_search_rects.length;b2++)ae(bW.m_search_rects[b2],bq,bQ,aV)
;bW.m_adjacent_area&&af(bW.m_adjacent_area,br,bQ,aV)}}}for(const b3 of bs){const b4=b3.m_pos;if(b4){
const b5=document.importNode(bp.content,!0),b6=ah(b5,".caption-container");if(b6.textContent=b3.m_text,(0,
g.GF)(b6,b4[0],b4[1],b4[2]-b4[0],b4[3]-b4[1]),b6.style.fontSize=(0,e.Md)(Math.min(Math.max(b4[3]-b4[1]-5,8),18)),
b3.m_caption_for_fields){b6.classList.add("caption-for-field")
;for(const b7 in b3.m_caption_for_fields)b6.classList.add("field-"+b7)}if(b3.m_label_for_fields){
b6.classList.add("label-for-field");for(const b8 in b3.m_label_for_fields)b6.classList.add("field-"+b8)}aV.appendChild(b5)}}}
O.firstElementChild&&O.firstElementChild.classList.add("view"),M=ah(".view"),M.parentNode&&M.parentNode.replaceChild(O,M),
M=ah(".view");const bh=ah(M,".data-view"),bi=ah(bh,".input-container.focused>*:first-child");if(bi&&bi.focus(),
K||void 0===aR||void 0===aS)if(bi){const b9=bh.getBoundingClientRect(),ca=bi.getBoundingClientRect();(0,
j.hF)(b9,ca)||bi.scrollIntoView(!1)}else bh.scrollLeft=a3,bh.scrollTop=a4;else bh.scrollLeft=aR,bh.scrollTop=aS
;if(0===a5||0===a6)aX.classList.add("hidden");else{a7?(a8=a7[0]+a3<0&&-(a7[0]+a3)||0,a9=a7[2]+a3>a5&&a7[2]+a3-a5||0,
ba=a7[1]+a4<0&&-(a7[1]+a4)||0,bb=a7[3]+a4>a6&&a7[3]+a4-a6||0):(a8=0,a9=0,ba=0,bb=0),aU.style.marginLeft=(0,e.Md)(a8),
aU.style.marginTop=(0,e.Md)(ba),aU.style.marginRight=(0,e.Md)(a9),aU.style.marginBottom=(0,e.Md)(bb)
;const cb=ah(M,".overview-map .content .visible-area");for(let cc=0;cc<P.length;cc++){
const cd=P[cc],ce=`${cd.m_frame_id||0}-${cd.m_id||0}`;if(cd.m_pos){const cf=document.createElement("div")
;cf.classList.add("overview-map-element"),cb.appendChild(cf),bc[ce]={element:cf,field:cd}}}bd(),
bh.addEventListener("scroll",(function(){bd()}),!1),B=bd
;ah(M,".overview-map .container").addEventListener("mousedown",(function(a){
const b=ah(M,".overview-map .content"),c=b.getBoundingClientRect(),d=window.getComputedStyle(b),f=c.left-(0,
e.i7)(d.marginLeft),h=c.top-(0,
e.i7)(d.marginTop),i=c.right+(0,e.i7)(d.marginRight)-f,j=a5+a8+a9,k=a6+ba+bb,l=i*k/j,m=a.clientX-f,n=a.clientY-h,o=ah(M,".overview-map .content .viewport-frame"),p=o.getBoundingClientRect(),q=p.width,r=p.height
;let s=m-q/2;s<0?s=0:s>i-q&&(s=i-q),s+=f-c.left;let t=n-r/2;t<0?t=0:t>l-r&&(t=l-r),t+=h-c.top,(0,g.i)(o,s,t),
bh.scrollLeft=s*j/i+a8,bh.scrollTop=t*k/l+ba}),!1)}}else{
const cg=ah(O,"template.non-html"),ch=document.importNode(cg.content,!0);aT.appendChild(ch),aU.classList.add("hidden"),
aX.classList.add("hidden"),aY.classList.add("hidden"),(0,m.TT)(O.firstElementChild).classList.add("view"),M=ah(".view"),(0,
m.TT)(M.parentNode).replaceChild(O,M)}function bd(){
const a=ah(M,".overview-map .container"),b=a.getBoundingClientRect(),c=window.getComputedStyle(a),d=b.left+(0,
e.i7)(c.paddingLeft),f=b.right-(0,e.i7)(c.paddingRight),h=b.top+(0,e.i7)(c.paddingTop),i=b.bottom-(0,
e.i7)(c.paddingBottom),j=ah(M,".overview-map .content"),k=a5+a8+a9,l=a6+ba+bb;let m=f-d,n=m*l/k;n>i-h&&(n=i-h,m=n*k/l)
;const o=a5*m/k,p=a6*n/l,q=a8*m/k;j.style.marginLeft=(0,e.Md)(q);const r=ba*n/l;j.style.marginTop=(0,e.Md)(r);const s=f-d-q-o
;j.style.marginRight=(0,e.Md)(s);const t=i-h-r-p;j.style.marginBottom=(0,e.Md)(t),(0,g.BQ)(j,o,p)
;const u=ah(M,".overview-map .content .document-area");(0,g.BQ)(u,o,p)
;const v=a3*m/k,w=a4*n/l,x=aZ*m/k,y=a0*n/l,z=ah(M,".overview-map .content .visible-area");(0,g.GF)(z,v,w,x,y)
;const A=aT.getBoundingClientRect(),B=(aT.scrollLeft-a8)*m/k,C=(aT.scrollTop-ba)*n/l,D=A.width*m/k,E=A.height*n/l,F=ah(M,".overview-map .content .viewport-frame")
;(0,g.GF)(F,B,C,D,E);for(const e in bc){const a=bc[e],b=a.field.m_pos
;b&&(0,g.GF)(a.element,b[0]*m/k,b[1]*n/l,(b[2]-b[0])*m/k,(b[3]-b[1])*n/l)}}break}case"details":{const ci=y.m_app_window
;ah(O,".details .app-window-id").textContent=ci&&ci.id||"?",ah(O,".details .app-window-type").textContent=ci&&ci.type||"?",
ah(O,".details .app-window-state").textContent=ci&&ci.state||"?",
ah(O,".details .app-window-pos").textContent=[ci&&ci.left,ci&&ci.top,ci&&ci.width,ci&&ci.height].join(", ")}
ah(O,".details .tab-id").textContent=x.m_tab_id||"",ah(O,".details .icon").textContent=x.m_icon||"",
ah(O,".details .browser-window-pos").textContent=R(x.m_window_pos)||"?",
ah(O,".details .browser-client-pos").textContent=R(x.m_content_pos)||"?",
ah(O,".details .web-page-scroll-x").textContent=void 0===x.m_scroll_x?"?":(0,m.bf)(Math.round(x.m_scroll_x)),
ah(O,".details .web-page-scroll-y").textContent=void 0===x.m_scroll_y?"?":(0,m.bf)(Math.round(x.m_scroll_y)),
ah(O,".details .web-page-client-width").textContent=void 0===x.m_width?"?":(0,m.bf)(x.m_width),
ah(O,".details .web-page-client-height").textContent=void 0===x.m_height?"?":(0,m.bf)(x.m_height),
ah(O,".details .extension-version").textContent=D,ah(O,".details .os").textContent=E,ah(O,".details .browser").textContent=F,
ah(O,".details .browser-version").textContent=G,ah(O,".details .browser-language").textContent=H,
O.firstElementChild&&O.firstElementChild.classList.add("view"),M=ah(".view"),M.parentNode&&M.parentNode.replaceChild(O,M);break
;default:ah(O,".text-json").textContent=(0,k.Ex)(y),O.firstElementChild&&O.firstElementChild.classList.add("view"),
M=ah(".view"),M.parentNode&&M.parentNode.replaceChild(O,M)}function R(a){return a&&[a[0],a[1],a[2]-a[0],a[3]-a[1]].join(", ")}}
function ac(a,b){
const c=b.m_html&&b.m_html.m_tag||"input",d=b.m_html&&b.m_html.m_type||b.m_type||"text",f=b.m_value||"",g=b.m_default_value||"",h=b.m_checked||!1,i=b.m_default_checked||!1
;let j,k="";if(b.m_html&&b.m_html.m_labels)for(let e=0;e<b.m_html.m_labels.length;e++){const a=b.m_html.m_labels[e]
;if(a.m_aria_label&&a.m_text){k=a.m_text;break}}let l=!0;switch(c){case"input":{const a=document.createElement(c);switch(j=a,
a.type="password"===d?"text":d,d){case"checkbox":a.checked=h,a.defaultChecked=i;break;case"radio":a.value=f,a.defaultValue=g,
a.checked=h,a.defaultChecked=i;break;case"submit":case"button":case"reset":case"image":
a.value=b.m_html&&b.m_html.m_caption||f||k||b.m_html&&b.m_html.m_title||"",l=!1;break;default:a.value=f,a.defaultValue=g,
a.placeholder=b.m_html&&b.m_html.m_placeholder||b.m_caption||b.m_html&&b.m_html.m_caption||k}break}case"button":{
const a=document.createElement("input");j=a,a.type="button",b.m_html&&b.m_html.m_type&&(a.type=b.m_html.m_type),
a.value=b.m_caption||b.m_html&&b.m_html.m_caption||f||k,l=!1;break}case"textarea":{const a=document.createElement(c);j=a,
a.value=f,a.defaultValue=g,a.placeholder=b.m_html&&b.m_html.m_placeholder||b.m_caption||b.m_html&&b.m_html.m_caption||k;break}
case"select":{const a=document.createElement(c);let d
;if(j=a,b.m_options)for(const c of b.m_options)d=document.createElement("option"),d.text=c.m_text||"",
d.value=c.m_value||c.m_text||"",d.selected=c.m_selected||!1,d.defaultSelected=c.m_default||!1,
a.appendChild(d);else d=document.createElement("option"),d.value=f,a.appendChild(d);void 0!==b.m_value&&(a.value=b.m_value),
b.m_multiselect&&a.setAttribute("multiple","true");break}case"a":switch(b.m_type){case"button":{
const a=document.createElement("input")
;j=a,a.type="button",a.value=b.m_caption||b.m_html&&b.m_html.m_caption||k||b.m_html&&b.m_html.m_title||"",l=!1;break}
case"checkbox":{const a=document.createElement("input");j=a,a.type=b.m_type,a.checked=h;break}default:{
const a=document.createElement("a")
;j=a,a.href="#",a.textContent=b.m_caption||b.m_html&&b.m_html.m_caption||k||b.m_html&&b.m_html.m_title||null;break}}break
;default:switch(d){case"checkbox":{const a=document.createElement("input");j=a,a.type="checkbox",a.checked=h,a.defaultChecked=i
;break}case"radio":{const a=document.createElement("input");j=a,a.type="radio",a.value=f,a.defaultValue=g,a.checked=h,
a.defaultChecked=i;break}case"submit":case"button":case"reset":case"image":{const a=document.createElement("input");j=a,
a.type="button",a.value=b.m_caption||b.m_html&&b.m_html.m_caption||f||k||b.m_html&&b.m_html.m_title||"",l=!1;break}case"text":
case"password":case"":case"hidden":case"file":case"color":case"number":case"email":case"name":case"username":case"textbox":
case"nickname":case"tel":case"search":{const a=document.createElement("input");j=a,a.type="password"===d?"text":d,a.value=f,
a.defaultValue=g,a.placeholder=b.m_html&&b.m_html.m_placeholder||b.m_caption||b.m_html&&b.m_html.m_caption||k;break}default:{
const a=document.createElement("div")
;j=a,a.textContent=b.m_caption||b.m_html&&b.m_html.m_caption||k||b.m_html&&b.m_html.m_title||null;break}}}
return l&&b.m_pos&&(j.style.width=(0,e.Md)(b.m_pos[2]-b.m_pos[0]),j.style.height=(0,e.Md)(b.m_pos[3]-b.m_pos[1])),
b.m_html&&b.m_html.m_font_size?j.style.fontSize=(0,m.bf)(b.m_html.m_font_size)+"px":b.m_pos&&(j.style.fontSize=(0,
e.Md)(Math.min(Math.max(b.m_pos[3]-b.m_pos[1]-4,7),18))),j.title=`field #${a}: ${b.m_frame_id}-${b.m_id}`,j}function ad(a,b,c){
if(!c)return;const d=document.createElement("tr"),e=document.createElement("td");e.textContent=b,d.appendChild(e)
;const f=document.createElement("td");f.textContent="=",d.appendChild(f);const g=document.createElement("td");g.textContent=c,
d.appendChild(g),a.appendChild(d)}function ae(a,b,c,d){const e=document.importNode(b.content,!0),f=ah(e,".search-rect")
;f.classList.add("field-"+c),(0,g.GF)(f,a[0],a[1],a[2]-a[0],a[3]-a[1]),d.appendChild(e)}function af(a,b,c,d){
const e=document.importNode(b.content,!0),f=ah(e,".adjacent-area");f.classList.add("field-"+c),(0,
g.GF)(f,a[0],a[1],a[2]-a[0],a[3]-a[1]),d.appendChild(e)}function ag(a){return a.replace(/[#<> ()[\]%]/g,"-")}function ah(a,b){
if("string"==typeof a)return(0,m.TT)(document.querySelector(a));if(b)return(0,m.TT)(a.querySelector(b));throw(0,
i.ZU)(i.V2,"Bad parameters: missing selector string")}}(o,b,n,c);let q=null,r=null,s=!1;return await o.Init(null),p.Init(),
o.onNotificationFromBackgroundScript.Add(t),p.onDisconnectFromUpdateEvents=()=>{o.onNotificationFromBackgroundScript.Remove(t)},
window.document.title="RoboForm Engine Dev Tool",void await u();function t(a,...b){switch(a){case"WebPageUpdated":
case"WebPageAnalyzed":case"WebPageSubmitted":v(0)}}async function u(){if(s)v(100);else{s=!0;try{const a={historyId:q,getForms:!0
},b=await o.CallBackgroundScript("GetBrowserWindowInfo",null,null,a);p.Update(b,null)
;const c=b.m_history&&b.m_history[0]&&b.m_history[0].m_id;c&&(q=c)}finally{s=!1}}}function v(a){w(),r=setTimeout((function(){
w(),(0,h.uT)(u(),"Update")}),a)}function w(){r&&(clearTimeout(r),r=null)}}},31404:function(a,b,c){!function(a){"use strict"
;var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(a){return"Symbol(".concat(a,")")}
;function d(a,b){var c,d,e,f,g={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:h(0),
throw:h(1),return:h(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function h(h){
return function(i){return function(h){if(c)throw new TypeError("Generator is already executing.");for(;f&&(f=0,h[0]&&(g=0)),
g;)try{if(c=1,d&&(e=2&h[0]?d.return:h[0]?d.throw||((e=d.return)&&e.call(d),0):d.next)&&!(e=e.call(d,h[1])).done)return e
;switch(d=0,e&&(h=[2&h[0],e.value]),h[0]){case 0:case 1:e=h;break;case 4:return g.label++,{value:h[1],done:!1};case 5:g.label++,
d=h[1],h=[0];continue;case 7:h=g.ops.pop(),g.trys.pop();continue;default:
if(!((e=(e=g.trys).length>0&&e[e.length-1])||6!==h[0]&&2!==h[0])){g=0;continue}if(3===h[0]&&(!e||h[1]>e[0]&&h[1]<e[3])){
g.label=h[1];break}if(6===h[0]&&g.label<e[1]){g.label=e[1],e=h;break}if(e&&g.label<e[2]){g.label=e[2],g.ops.push(h);break}
e[2]&&g.ops.pop(),g.trys.pop();continue}h=b.call(a,g)}catch(a){h=[6,a],d=0}finally{c=e=0}if(5&h[0])throw h[1];return{
value:h[0]?h[1]:void 0,done:!0}}([h,i])}}}function e(a){var b="function"==typeof Symbol&&Symbol.iterator,c=b&&a[b],d=0
;if(c)return c.call(a);if(a&&"number"==typeof a.length)return{next:function(){return a&&d>=a.length&&(a=void 0),{
value:a&&a[d++],done:!a}}};throw new TypeError(b?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(a){
return this instanceof f?(this.v=a,this):new f(a)}function g(a,b,c){
if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var d,e=c.apply(a,b||[]),g=[];return d={},
h("next"),h("throw"),h("return"),d[Symbol.asyncIterator]=function(){return this},d;function h(a){e[a]&&(d[a]=function(b){
return new Promise((function(c,d){g.push([a,b,c,d])>1||i(a,b)}))})}function i(a,b){try{
(c=e[a](b)).value instanceof f?Promise.resolve(c.value.v).then(j,k):l(g[0][2],c)}catch(a){l(g[0][3],a)}var c}function j(a){
i("next",a)}function k(a){i("throw",a)}function l(a,b){a(b),g.shift(),g.length&&i(g[0][0],g[0][1])}}function h(a){var b,c
;return b={},d("next"),d("throw",(function(a){throw a})),d("return"),b[Symbol.iterator]=function(){return this},b
;function d(d,e){b[d]=a[d]?function(b){return(c=!c)?{value:f(a[d](b)),done:!1}:e?e(b):b}:e}}function i(a){
if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var b,c=a[Symbol.asyncIterator]
;return c?c.call(a):(a=e(a),b={},d("next"),d("throw"),d("return"),b[Symbol.asyncIterator]=function(){return this},b)
;function d(c){b[c]=a[c]&&function(b){return new Promise((function(d,e){!function(a,b,c,d){Promise.resolve(d).then((function(b){
a({value:b,done:c})}),b)}(d,e,(b=a[c](b)).done,b.value)}))}}}function j(){}function k(a){
return"object"==typeof a&&null!==a||"function"==typeof a}"function"==typeof SuppressedError&&SuppressedError;var l=j
;function m(a,b){try{Object.defineProperty(a,"name",{value:b,configurable:!0})}catch(a){}}
var n=Promise,o=Promise.prototype.then,p=Promise.reject.bind(n);function q(a){return new n(a)}function r(a){
return q((function(b){return b(a)}))}function s(a){return p(a)}function t(a,b,c){return o.call(a,b,c)}function u(a,b,c){
t(t(a,b,c),void 0,l)}function v(a,b){u(a,b)}function w(a,b){u(a,void 0,b)}function x(a,b,c){return t(a,b,c)}function y(a){
t(a,void 0,l)}var z=function(a){if("function"==typeof queueMicrotask)z=queueMicrotask;else{var b=r(void 0);z=function(a){
return t(b,a)}}return z(a)};function A(a,b,c){if("function"!=typeof a)throw new TypeError("Argument is not a function")
;return Function.prototype.apply.call(a,b,c)}function B(a,b,c){try{return r(A(a,b,c))}catch(a){return s(a)}}var C=function(){
function a(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,
this._size=0}return Object.defineProperty(a.prototype,"length",{get:function(){return this._size},enumerable:!1,configurable:!0
}),a.prototype.push=function(a){var b=this._back,c=b;16383===b._elements.length&&(c={_elements:[],_next:void 0}),
b._elements.push(a),c!==b&&(this._back=c,b._next=c),++this._size},a.prototype.shift=function(){
var a=this._front,b=a,c=this._cursor,d=c+1,e=a._elements,f=e[c];return 16384===d&&(b=a._next,d=0),--this._size,this._cursor=d,
a!==b&&(this._front=b),e[c]=void 0,f},a.prototype.forEach=function(a){
for(var b=this._cursor,c=this._front,d=c._elements;!(b===d.length&&void 0===c._next||b===d.length&&(b=0,
0===(d=(c=c._next)._elements).length));)a(d[b]),++b},a.prototype.peek=function(){var a=this._front,b=this._cursor
;return a._elements[b]},a
}(),D=b("[[AbortSteps]]"),E=b("[[ErrorSteps]]"),F=b("[[CancelSteps]]"),G=b("[[PullSteps]]"),H=b("[[ReleaseSteps]]")
;function I(a,b){a._ownerReadableStream=b,b._reader=a,"readable"===b._state?M(a):"closed"===b._state?function(a){M(a),P(a)
}(a):N(a,b._storedError)}function J(a,b){return cH(a._ownerReadableStream,b)}function K(a){var b=a._ownerReadableStream
;"readable"===b._state?O(a,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function(a,b){
N(a,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"))}(a),
b._readableStreamController[H](),b._reader=void 0,a._ownerReadableStream=void 0}function L(a){
return new TypeError("Cannot "+a+" a stream using a released reader")}function M(a){a._closedPromise=q((function(b,c){
a._closedPromise_resolve=b,a._closedPromise_reject=c}))}function N(a,b){M(a),O(a,b)}function O(a,b){
void 0!==a._closedPromise_reject&&(y(a._closedPromise),a._closedPromise_reject(b),a._closedPromise_resolve=void 0,
a._closedPromise_reject=void 0)}function P(a){void 0!==a._closedPromise_resolve&&(a._closedPromise_resolve(void 0),
a._closedPromise_resolve=void 0,a._closedPromise_reject=void 0)}var Q=Number.isFinite||function(a){
return"number"==typeof a&&isFinite(a)},R=Math.trunc||function(a){return a<0?Math.ceil(a):Math.floor(a)};function S(a,b){
if(void 0!==a&&"object"!=typeof(c=a)&&"function"!=typeof c)throw new TypeError("".concat(b," is not an object."));var c}
function T(a,b){if("function"!=typeof a)throw new TypeError("".concat(b," is not a function."))}function U(a,b){if(!function(a){
return"object"==typeof a&&null!==a||"function"==typeof a}(a))throw new TypeError("".concat(b," is not an object."))}
function V(a,b,c){if(void 0===a)throw new TypeError("Parameter ".concat(b," is required in '").concat(c,"'."))}
function W(a,b,c){if(void 0===a)throw new TypeError("".concat(b," is required in '").concat(c,"'."))}function X(a){
return Number(a)}function Y(a){return 0===a?0:a}function Z(a,b){var c=Number.MAX_SAFE_INTEGER,d=Number(a);if(d=Y(d),
!Q(d))throw new TypeError("".concat(b," is not a finite number"));if((d=function(a){return Y(R(a))
}(d))<0||d>c)throw new TypeError("".concat(b," is outside the accepted range of ").concat(0," to ").concat(c,", inclusive"))
;return Q(d)&&0!==d?d:0}function aa(a,b){if(!cF(a))throw new TypeError("".concat(b," is not a ReadableStream."))}function ab(a){
return new aj(a)}function ac(a,b){a._reader._readRequests.push(b)}function ad(a,b,c){var d=a._reader._readRequests.shift()
;c?d._closeSteps():d._chunkSteps(b)}function ae(a){return a._reader._readRequests.length}function af(a){var b=a._reader
;return void 0!==b&&!!ak(b)}var ag,ah,ai,aj=function(){function a(a){if(V(a,1,"ReadableStreamDefaultReader"),
aa(a,"First parameter"),cG(a))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
;I(this,a),this._readRequests=new C}return Object.defineProperty(a.prototype,"closed",{get:function(){
return ak(this)?this._closedPromise:s(an("closed"))},enumerable:!1,configurable:!0}),a.prototype.cancel=function(a){
return void 0===a&&(a=void 0),ak(this)?void 0===this._ownerReadableStream?s(L("cancel")):J(this,a):s(an("cancel"))},
a.prototype.read=function(){if(!ak(this))return s(an("read"));if(void 0===this._ownerReadableStream)return s(L("read from"))
;var a,b,c=q((function(c,d){a=c,b=d}));return al(this,{_chunkSteps:function(b){return a({value:b,done:!1})},
_closeSteps:function(){return a({value:void 0,done:!0})},_errorSteps:function(a){return b(a)}}),c},
a.prototype.releaseLock=function(){if(!ak(this))throw an("releaseLock");void 0!==this._ownerReadableStream&&function(a){K(a),
am(a,new TypeError("Reader was released"))}(this)},a}();function ak(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_readRequests")&&a instanceof aj}function al(a,b){
var c=a._ownerReadableStream
;c._disturbed=!0,"closed"===c._state?b._closeSteps():"errored"===c._state?b._errorSteps(c._storedError):c._readableStreamController[G](b)
}function am(a,b){var c=a._readRequests;a._readRequests=new C,c.forEach((function(a){a._errorSteps(b)}))}function an(a){
return new TypeError("ReadableStreamDefaultReader.prototype.".concat(a," can only be used on a ReadableStreamDefaultReader"))}
function ao(a){return a.slice()}function ap(a,b,c,d,e){new Uint8Array(a).set(new Uint8Array(c,d,e),b)}
Object.defineProperties(aj.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{
enumerable:!0}}),m(aj.prototype.cancel,"cancel"),m(aj.prototype.read,"read"),m(aj.prototype.releaseLock,"releaseLock"),
"symbol"==typeof b.toStringTag&&Object.defineProperty(aj.prototype,b.toStringTag,{value:"ReadableStreamDefaultReader",
configurable:!0});var aq=function(a){return(aq="function"==typeof a.transfer?function(a){return a.transfer()
}:"function"==typeof structuredClone?function(a){return structuredClone(a,{transfer:[a]})}:function(a){return a})(a)
},ar=function(a){return(ar="boolean"==typeof a.detached?function(a){return a.detached}:function(a){return 0===a.byteLength})(a)}
;function as(a,b,c){if(a.slice)return a.slice(b,c);var d=c-b,e=new ArrayBuffer(d);return ap(e,0,a,b,d),e}function at(a,b){
var c=a[b];if(null!=c){if("function"!=typeof c)throw new TypeError("".concat(String(b)," is not a function"));return c}}
var au,av=null!==(ai=null!==(ag=b.asyncIterator)&&void 0!==ag?ag:null===(ah=b.for)||void 0===ah?void 0:ah.call(b,"Symbol.asyncIterator"))&&void 0!==ai?ai:"@@asyncIterator"
;function aw(a,c,j){if(void 0===c&&(c="sync"),void 0===j)if("async"===c){if(void 0===(j=at(a,av)))return function(a){
var c,j=((c={})[b.iterator]=function(){return a.iterator},c),k=function(){return g(this,arguments,(function(){
return d(this,(function(a){switch(a.label){case 0:return[5,e(h(i(j)))];case 1:case 2:return[4,f.apply(void 0,[a.sent()])]
;case 3:return[2,a.sent()]}}))}))}();return{iterator:k,nextMethod:k.next,done:!1}}(aw(a,"sync",at(a,b.iterator)))
}else j=at(a,b.iterator);if(void 0===j)throw new TypeError("The object is not iterable");var l=A(j,a,[])
;if(!k(l))throw new TypeError("The iterator method must return an object");return{iterator:l,nextMethod:l.next,done:!1}}
var ax=((au={})[av]=function(){return this},au);Object.defineProperty(ax,av,{enumerable:!1});var ay=function(){function a(a,b){
this._ongoingPromise=void 0,this._isFinished=!1,this._reader=a,this._preventCancel=b}return a.prototype.next=function(){
var a=this,b=function(){return a._nextSteps()};return this._ongoingPromise=this._ongoingPromise?x(this._ongoingPromise,b,b):b(),
this._ongoingPromise},a.prototype.return=function(a){var b=this,c=function(){return b._returnSteps(a)}
;return this._ongoingPromise?x(this._ongoingPromise,c,c):c()},a.prototype._nextSteps=function(){var a=this
;if(this._isFinished)return Promise.resolve({value:void 0,done:!0});var b,c,d=this._reader,e=q((function(a,d){b=a,c=d}))
;return al(d,{_chunkSteps:function(c){a._ongoingPromise=void 0,z((function(){return b({value:c,done:!1})}))},
_closeSteps:function(){a._ongoingPromise=void 0,a._isFinished=!0,K(d),b({value:void 0,done:!0})},_errorSteps:function(b){
a._ongoingPromise=void 0,a._isFinished=!0,K(d),c(b)}}),e},a.prototype._returnSteps=function(a){
if(this._isFinished)return Promise.resolve({value:a,done:!0});this._isFinished=!0;var b=this._reader;if(!this._preventCancel){
var c=J(b,a);return K(b),x(c,(function(){return{value:a,done:!0}}))}return K(b),r({value:a,done:!0})},a}(),az={next:function(){
return aA(this)?this._asyncIteratorImpl.next():s(aB("next"))},return:function(a){
return aA(this)?this._asyncIteratorImpl.return(a):s(aB("return"))}};function aA(a){if(!k(a))return!1
;if(!Object.prototype.hasOwnProperty.call(a,"_asyncIteratorImpl"))return!1;try{return a._asyncIteratorImpl instanceof ay
}catch(a){return!1}}function aB(a){
return new TypeError("ReadableStreamAsyncIterator.".concat(a," can only be used on a ReadableSteamAsyncIterator"))}
Object.setPrototypeOf(az,ax);var aC=Number.isNaN||function(a){return a!=a};function aD(a){
var b=as(a.buffer,a.byteOffset,a.byteOffset+a.byteLength);return new Uint8Array(b)}function aE(a){var b=a._queue.shift()
;return a._queueTotalSize-=b.size,a._queueTotalSize<0&&(a._queueTotalSize=0),b.value}function aF(a,b,c){
if("number"!=typeof(d=c)||aC(d)||d<0||c===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");var d
;a._queue.push({value:b,size:c}),a._queueTotalSize+=c}function aG(a){a._queue=new C,a._queueTotalSize=0}function aH(a){
return a===DataView}var aI=function(){function a(){throw new TypeError("Illegal constructor")}
return Object.defineProperty(a.prototype,"view",{get:function(){if(!aL(this))throw bb("view");return this._view},enumerable:!1,
configurable:!0}),a.prototype.respond=function(a){if(!aL(this))throw bb("respond");if(V(a,1,"respond"),a=Z(a,"First parameter"),
void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
;if(ar(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response")
;a8(this._associatedReadableByteStreamController,a)},a.prototype.respondWithNewView=function(a){
if(!aL(this))throw bb("respondWithNewView")
;if(V(a,1,"respondWithNewView"),!ArrayBuffer.isView(a))throw new TypeError("You can only respond with array buffer views")
;if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
;if(ar(a.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response")
;a9(this._associatedReadableByteStreamController,a)},a}();Object.defineProperties(aI.prototype,{respond:{enumerable:!0},
respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),m(aI.prototype.respond,"respond"),
m(aI.prototype.respondWithNewView,"respondWithNewView"),
"symbol"==typeof b.toStringTag&&Object.defineProperty(aI.prototype,b.toStringTag,{value:"ReadableStreamBYOBRequest",
configurable:!0});var aJ=function(){function a(){throw new TypeError("Illegal constructor")}
return Object.defineProperty(a.prototype,"byobRequest",{get:function(){if(!aK(this))throw bc("byobRequest");return a6(this)},
enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"desiredSize",{get:function(){
if(!aK(this))throw bc("desiredSize");return a7(this)},enumerable:!1,configurable:!0}),a.prototype.close=function(){
if(!aK(this))throw bc("close")
;if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
;var a=this._controlledReadableByteStream._state
;if("readable"!==a)throw new TypeError("The stream (in ".concat(a," state) is not in the readable state and cannot be closed"))
;a2(this)},a.prototype.enqueue=function(a){if(!aK(this))throw bc("enqueue");if(V(a,1,"enqueue"),
!ArrayBuffer.isView(a))throw new TypeError("chunk must be an array buffer view")
;if(0===a.byteLength)throw new TypeError("chunk must have non-zero byteLength")
;if(0===a.buffer.byteLength)throw new TypeError("chunk's buffer must have non-zero byteLength")
;if(this._closeRequested)throw new TypeError("stream is closed or draining");var b=this._controlledReadableByteStream._state
;if("readable"!==b)throw new TypeError("The stream (in ".concat(b," state) is not in the readable state and cannot be enqueued to"))
;a3(this,a)},a.prototype.error=function(a){if(void 0===a&&(a=void 0),!aK(this))throw bc("error");a4(this,a)},
a.prototype[F]=function(a){aN(this),aG(this);var b=this._cancelAlgorithm(a);return a1(this),b},a.prototype[G]=function(a){
var b=this._controlledReadableByteStream;if(this._queueTotalSize>0)a5(this,a);else{var c=this._autoAllocateChunkSize
;if(void 0!==c){var d=void 0;try{d=new ArrayBuffer(c)}catch(b){return void a._errorSteps(b)}var e={buffer:d,bufferByteLength:c,
byteOffset:0,byteLength:c,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"}
;this._pendingPullIntos.push(e)}ac(b,a),aM(this)}},a.prototype[H]=function(){if(this._pendingPullIntos.length>0){
var a=this._pendingPullIntos.peek();a.readerType="none",this._pendingPullIntos=new C,this._pendingPullIntos.push(a)}},a}()
;function aK(a){return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_controlledReadableByteStream")&&a instanceof aJ}
function aL(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_associatedReadableByteStreamController")&&a instanceof aI}
function aM(a){var b=function(a){var b=a._controlledReadableByteStream
;return"readable"===b._state&&!a._closeRequested&&!!a._started&&(!!(af(b)&&ae(b)>0)||!!(bh(b)&&bg(b)>0)||a7(a)>0)}(a)
;b&&(a._pulling?a._pullAgain=!0:(a._pulling=!0,u(a._pullAlgorithm(),(function(){return a._pulling=!1,
a._pullAgain&&(a._pullAgain=!1,aM(a)),null}),(function(b){return a4(a,b),null}))))}function aN(a){aW(a),
a._pendingPullIntos=new C}function aO(a,b){var c=!1;"closed"===a._state&&(c=!0);var d=aP(b)
;"default"===b.readerType?ad(a,d,c):function(a,b,c){var d=a._reader._readIntoRequests.shift()
;c?d._closeSteps(b):d._chunkSteps(b)}(a,d,c)}function aP(a){var b=a.bytesFilled,c=a.elementSize
;return new a.viewConstructor(a.buffer,a.byteOffset,b/c)}function aQ(a,b,c,d){a._queue.push({buffer:b,byteOffset:c,byteLength:d
}),a._queueTotalSize+=d}function aR(a,b,c,d){var e;try{e=as(b,c,c+d)}catch(b){throw a4(a,b),b}aQ(a,e,0,d)}function aS(a,b){
b.bytesFilled>0&&aR(a,b.buffer,b.byteOffset,b.bytesFilled),a0(a)}function aT(a,b){
var c=Math.min(a._queueTotalSize,b.byteLength-b.bytesFilled),d=b.bytesFilled+c,e=c,f=!1,g=d-d%b.elementSize
;g>=b.minimumFill&&(e=g-b.bytesFilled,f=!0);for(var h=a._queue;e>0;){
var i=h.peek(),j=Math.min(e,i.byteLength),k=b.byteOffset+b.bytesFilled;ap(b.buffer,k,i.buffer,i.byteOffset,j),
i.byteLength===j?h.shift():(i.byteOffset+=j,i.byteLength-=j),a._queueTotalSize-=j,aU(a,j,b),e-=j}return f}function aU(a,b,c){
c.bytesFilled+=b}function aV(a){0===a._queueTotalSize&&a._closeRequested?(a1(a),cI(a._controlledReadableByteStream)):aM(a)}
function aW(a){null!==a._byobRequest&&(a._byobRequest._associatedReadableByteStreamController=void 0,a._byobRequest._view=null,
a._byobRequest=null)}function aX(a){for(;a._pendingPullIntos.length>0;){if(0===a._queueTotalSize)return
;var b=a._pendingPullIntos.peek();aT(a,b)&&(a0(a),aO(a._controlledReadableByteStream,b))}}function aY(a,b,c,d){
var e,f=a._controlledReadableByteStream,g=b.constructor,h=function(a){return aH(a)?1:a.BYTES_PER_ELEMENT
}(g),i=b.byteOffset,j=b.byteLength,k=c*h;try{e=aq(b.buffer)}catch(n){return void d._errorSteps(n)}var l={buffer:e,
bufferByteLength:e.byteLength,byteOffset:i,byteLength:j,bytesFilled:0,minimumFill:k,elementSize:h,viewConstructor:g,
readerType:"byob"};if(a._pendingPullIntos.length>0)return a._pendingPullIntos.push(l),void bf(f,d);if("closed"!==f._state){
if(a._queueTotalSize>0){if(aT(a,l)){var m=aP(l);return aV(a),void d._chunkSteps(m)}if(a._closeRequested){
var n=new TypeError("Insufficient bytes to fill elements in the given buffer");return a4(a,n),void d._errorSteps(n)}}
a._pendingPullIntos.push(l),bf(f,d),aM(a)}else{var o=new g(l.buffer,l.byteOffset,0);d._closeSteps(o)}}function aZ(a,b){
var c=a._pendingPullIntos.peek();aW(a),"closed"===a._controlledReadableByteStream._state?function(a,b){
"none"===b.readerType&&a0(a);var c=a._controlledReadableByteStream;if(bh(c))for(;bg(c)>0;)aO(c,a0(a))}(a,c):function(a,b,c){
if(aU(0,b,c),"none"===c.readerType)return aS(a,c),void aX(a);if(!(c.bytesFilled<c.minimumFill)){a0(a)
;var d=c.bytesFilled%c.elementSize;if(d>0){var e=c.byteOffset+c.bytesFilled;aR(a,c.buffer,e-d,d)}c.bytesFilled-=d,
aO(a._controlledReadableByteStream,c),aX(a)}}(a,b,c),aM(a)}function a0(a){return a._pendingPullIntos.shift()}function a1(a){
a._pullAlgorithm=void 0,a._cancelAlgorithm=void 0}function a2(a){var b=a._controlledReadableByteStream
;if(!a._closeRequested&&"readable"===b._state)if(a._queueTotalSize>0)a._closeRequested=!0;else{if(a._pendingPullIntos.length>0){
var c=a._pendingPullIntos.peek();if(c.bytesFilled%c.elementSize!=0){
var d=new TypeError("Insufficient bytes to fill elements in the given buffer");throw a4(a,d),d}}a1(a),cI(b)}}function a3(a,b){
var c=a._controlledReadableByteStream;if(!a._closeRequested&&"readable"===c._state){var d=b.buffer,e=b.byteOffset,f=b.byteLength
;if(ar(d))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");var g=aq(d)
;if(a._pendingPullIntos.length>0){var h=a._pendingPullIntos.peek()
;if(ar(h.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk")
;aW(a),h.buffer=aq(h.buffer),"none"===h.readerType&&aS(a,h)}af(c)?(function(a){
for(var b=a._controlledReadableByteStream._reader;b._readRequests.length>0;){if(0===a._queueTotalSize)return
;a5(a,b._readRequests.shift())}}(a),0===ae(c)?aQ(a,g,e,f):(a._pendingPullIntos.length>0&&a0(a),
ad(c,new Uint8Array(g,e,f),!1))):bh(c)?(aQ(a,g,e,f),aX(a)):aQ(a,g,e,f),aM(a)}}function a4(a,b){
var c=a._controlledReadableByteStream;"readable"===c._state&&(aN(a),aG(a),a1(a),cJ(c,b))}function a5(a,b){var c=a._queue.shift()
;a._queueTotalSize-=c.byteLength,aV(a);var d=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);b._chunkSteps(d)}function a6(a){
if(null===a._byobRequest&&a._pendingPullIntos.length>0){
var b=a._pendingPullIntos.peek(),c=new Uint8Array(b.buffer,b.byteOffset+b.bytesFilled,b.byteLength-b.bytesFilled),d=Object.create(aI.prototype)
;!function(a,b,c){a._associatedReadableByteStreamController=b,a._view=c}(d,a,c),a._byobRequest=d}return a._byobRequest}
function a7(a){var b=a._controlledReadableByteStream._state
;return"errored"===b?null:"closed"===b?0:a._strategyHWM-a._queueTotalSize}function a8(a,b){var c=a._pendingPullIntos.peek()
;if("closed"===a._controlledReadableByteStream._state){
if(0!==b)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else{
if(0===b)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream")
;if(c.bytesFilled+b>c.byteLength)throw new RangeError("bytesWritten out of range")}c.buffer=aq(c.buffer),aZ(a,b)}
function a9(a,b){var c=a._pendingPullIntos.peek();if("closed"===a._controlledReadableByteStream._state){
if(0!==b.byteLength)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")
}else if(0===b.byteLength)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream")
;if(c.byteOffset+c.bytesFilled!==b.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
;if(c.bufferByteLength!==b.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
;if(c.bytesFilled+b.byteLength>c.byteLength)throw new RangeError("The region specified by view is larger than byobRequest")
;var d=b.byteLength;c.buffer=aq(b.buffer),aZ(a,d)}function ba(a,b,c,d,e,f,g){b._controlledReadableByteStream=a,b._pullAgain=!1,
b._pulling=!1,b._byobRequest=null,b._queue=b._queueTotalSize=void 0,aG(b),b._closeRequested=!1,b._started=!1,b._strategyHWM=f,
b._pullAlgorithm=d,b._cancelAlgorithm=e,b._autoAllocateChunkSize=g,b._pendingPullIntos=new C,a._readableStreamController=b,
u(r(c()),(function(){return b._started=!0,aM(b),null}),(function(a){return a4(b,a),null}))}function bb(a){
return new TypeError("ReadableStreamBYOBRequest.prototype.".concat(a," can only be used on a ReadableStreamBYOBRequest"))}
function bc(a){
return new TypeError("ReadableByteStreamController.prototype.".concat(a," can only be used on a ReadableByteStreamController"))}
function bd(a,b){
if("byob"!==(a="".concat(a)))throw new TypeError("".concat(b," '").concat(a,"' is not a valid enumeration value for ReadableStreamReaderMode"))
;return a}function be(a){return new bi(a)}function bf(a,b){a._reader._readIntoRequests.push(b)}function bg(a){
return a._reader._readIntoRequests.length}function bh(a){var b=a._reader;return void 0!==b&&!!bj(b)}
Object.defineProperties(aJ.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{
enumerable:!0},desiredSize:{enumerable:!0}}),m(aJ.prototype.close,"close"),m(aJ.prototype.enqueue,"enqueue"),
m(aJ.prototype.error,"error"),"symbol"==typeof b.toStringTag&&Object.defineProperty(aJ.prototype,b.toStringTag,{
value:"ReadableByteStreamController",configurable:!0});var bi=function(){function a(a){if(V(a,1,"ReadableStreamBYOBReader"),
aa(a,"First parameter"),cG(a))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
;if(!aK(a._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
;I(this,a),this._readIntoRequests=new C}return Object.defineProperty(a.prototype,"closed",{get:function(){
return bj(this)?this._closedPromise:s(bm("closed"))},enumerable:!1,configurable:!0}),a.prototype.cancel=function(a){
return void 0===a&&(a=void 0),bj(this)?void 0===this._ownerReadableStream?s(L("cancel")):J(this,a):s(bm("cancel"))},
a.prototype.read=function(a,b){if(void 0===b&&(b={}),!bj(this))return s(bm("read"))
;if(!ArrayBuffer.isView(a))return s(new TypeError("view must be an array buffer view"))
;if(0===a.byteLength)return s(new TypeError("view must have non-zero byteLength"))
;if(0===a.buffer.byteLength)return s(new TypeError("view's buffer must have non-zero byteLength"))
;if(ar(a.buffer))return s(new TypeError("view's buffer has been detached"));var c;try{c=function(a,b){var c;return S(a,b),{
min:Z(null!==(c=null==a?void 0:a.min)&&void 0!==c?c:1,"".concat(b," has member 'min' that"))}}(b,"options")}catch(a){return s(a)
}var d,e,f=c.min;if(0===f)return s(new TypeError("options.min must be greater than 0"));if(function(a){return aH(a.constructor)
}(a)){if(f>a.byteLength)return s(new RangeError("options.min must be less than or equal to view's byteLength"))
}else if(f>a.length)return s(new RangeError("options.min must be less than or equal to view's length"))
;if(void 0===this._ownerReadableStream)return s(L("read from"));var g=q((function(a,b){d=a,e=b}));return bk(this,a,f,{
_chunkSteps:function(a){return d({value:a,done:!1})},_closeSteps:function(a){return d({value:a,done:!0})},
_errorSteps:function(a){return e(a)}}),g},a.prototype.releaseLock=function(){if(!bj(this))throw bm("releaseLock")
;void 0!==this._ownerReadableStream&&function(a){K(a),bl(a,new TypeError("Reader was released"))}(this)},a}();function bj(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_readIntoRequests")&&a instanceof bi}function bk(a,b,c,d){
var e=a._ownerReadableStream
;e._disturbed=!0,"errored"===e._state?d._errorSteps(e._storedError):aY(e._readableStreamController,b,c,d)}function bl(a,b){
var c=a._readIntoRequests;a._readIntoRequests=new C,c.forEach((function(a){a._errorSteps(b)}))}function bm(a){
return new TypeError("ReadableStreamBYOBReader.prototype.".concat(a," can only be used on a ReadableStreamBYOBReader"))}
function bn(a,b){var c=a.highWaterMark;if(void 0===c)return b;if(aC(c)||c<0)throw new RangeError("Invalid highWaterMark")
;return c}function bo(a){return a.size||function(){return 1}}function bp(a,b){S(a,b)
;var c=null==a?void 0:a.highWaterMark,d=null==a?void 0:a.size;return{highWaterMark:void 0===c?void 0:X(c),
size:void 0===d?void 0:bq(d,"".concat(b," has member 'size' that"))}}function bq(a,b){return T(a,b),function(b){return X(a(b))}}
function br(a,b,c){return T(a,c),function(c){return B(a,b,[c])}}function bs(a,b,c){return T(a,c),function(){return B(a,b,[])}}
function bt(a,b,c){return T(a,c),function(c){return A(a,b,[c])}}function bu(a,b,c){return T(a,c),function(c,d){
return B(a,b,[c,d])}}function bv(a,b){if(!bA(a))throw new TypeError("".concat(b," is not a WritableStream."))}
Object.defineProperties(bi.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{
enumerable:!0}}),m(bi.prototype.cancel,"cancel"),m(bi.prototype.read,"read"),m(bi.prototype.releaseLock,"releaseLock"),
"symbol"==typeof b.toStringTag&&Object.defineProperty(bi.prototype,b.toStringTag,{value:"ReadableStreamBYOBReader",
configurable:!0});var bw="function"==typeof AbortController,bx=function(){function a(a,b){void 0===a&&(a={}),void 0===b&&(b={}),
void 0===a?a=null:U(a,"First parameter");var c=bp(b,"Second parameter"),d=function(a,b){S(a,b)
;var c=null==a?void 0:a.abort,d=null==a?void 0:a.close,e=null==a?void 0:a.start,f=null==a?void 0:a.type,g=null==a?void 0:a.write
;return{abort:void 0===c?void 0:br(c,a,"".concat(b," has member 'abort' that")),
close:void 0===d?void 0:bs(d,a,"".concat(b," has member 'close' that")),
start:void 0===e?void 0:bt(e,a,"".concat(b," has member 'start' that")),
write:void 0===g?void 0:bu(g,a,"".concat(b," has member 'write' that")),type:f}}(a,"First parameter");if(bz(this),
void 0!==d.type)throw new RangeError("Invalid type is specified");var e=bo(c);!function(a,b,c,d){
var e,f,g,h,i=Object.create(bS.prototype);e=void 0!==b.start?function(){return b.start(i)}:function(){},
f=void 0!==b.write?function(a){return b.write(a,i)}:function(){return r(void 0)},g=void 0!==b.close?function(){return b.close()
}:function(){return r(void 0)},h=void 0!==b.abort?function(a){return b.abort(a)}:function(){return r(void 0)},
bU(a,i,e,f,g,h,c,d)}(this,d,bn(c,1),e)}return Object.defineProperty(a.prototype,"locked",{get:function(){
if(!bA(this))throw b1("locked");return bB(this)},enumerable:!1,configurable:!0}),a.prototype.abort=function(a){
return void 0===a&&(a=void 0),
bA(this)?bB(this)?s(new TypeError("Cannot abort a stream that already has a writer")):bC(this,a):s(b1("abort"))},
a.prototype.close=function(){
return bA(this)?bB(this)?s(new TypeError("Cannot close a stream that already has a writer")):bH(this)?s(new TypeError("Cannot close an already-closing stream")):bD(this):s(b1("close"))
},a.prototype.getWriter=function(){if(!bA(this))throw b1("getWriter");return by(this)},a}();function by(a){return new bK(a)}
function bz(a){a._state="writable",a._storedError=void 0,a._writer=void 0,a._writableStreamController=void 0,
a._writeRequests=new C,a._inFlightWriteRequest=void 0,a._closeRequest=void 0,a._inFlightCloseRequest=void 0,
a._pendingAbortRequest=void 0,a._backpressure=!1}function bA(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_writableStreamController")&&a instanceof bx}function bB(a){
return void 0!==a._writer}function bC(a,b){var c;if("closed"===a._state||"errored"===a._state)return r(void 0)
;a._writableStreamController._abortReason=b,null===(c=a._writableStreamController._abortController)||void 0===c||c.abort(b)
;var d=a._state;if("closed"===d||"errored"===d)return r(void 0)
;if(void 0!==a._pendingAbortRequest)return a._pendingAbortRequest._promise;var e=!1;"erroring"===d&&(e=!0,b=void 0)
;var f=q((function(c,d){a._pendingAbortRequest={_promise:void 0,_resolve:c,_reject:d,_reason:b,_wasAlreadyErroring:e}}))
;return a._pendingAbortRequest._promise=f,e||bF(a,b),f}function bD(a){var b=a._state
;if("closed"===b||"errored"===b)return s(new TypeError("The stream (in ".concat(b," state) is not in the writable state and cannot be closed")))
;var c,d=q((function(b,c){var d={_resolve:b,_reject:c};a._closeRequest=d})),e=a._writer
;return void 0!==e&&a._backpressure&&"writable"===b&&cd(e),aF(c=a._writableStreamController,bR,0),bX(c),d}function bE(a,b){
"writable"!==a._state?bG(a):bF(a,b)}function bF(a,b){var c=a._writableStreamController;a._state="erroring",a._storedError=b
;var d=a._writer;void 0!==d&&bO(d,b),!function(a){return void 0!==a._inFlightWriteRequest||void 0!==a._inFlightCloseRequest
}(a)&&c._started&&bG(a)}function bG(a){a._state="errored",a._writableStreamController[E]();var b=a._storedError
;if(a._writeRequests.forEach((function(a){a._reject(b)})),a._writeRequests=new C,void 0!==a._pendingAbortRequest){
var c=a._pendingAbortRequest;if(a._pendingAbortRequest=void 0,c._wasAlreadyErroring)return c._reject(b),void bI(a)
;u(a._writableStreamController[D](c._reason),(function(){return c._resolve(),bI(a),null}),(function(b){return c._reject(b),
bI(a),null}))}else bI(a)}function bH(a){return void 0!==a._closeRequest||void 0!==a._inFlightCloseRequest}function bI(a){
void 0!==a._closeRequest&&(a._closeRequest._reject(a._storedError),a._closeRequest=void 0);var b=a._writer
;void 0!==b&&b7(b,a._storedError)}function bJ(a,b){var c=a._writer;void 0!==c&&b!==a._backpressure&&(b?function(a){b9(a)
}(c):cd(c)),a._backpressure=b}Object.defineProperties(bx.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{
enumerable:!0},locked:{enumerable:!0}}),m(bx.prototype.abort,"abort"),m(bx.prototype.close,"close"),
m(bx.prototype.getWriter,"getWriter"),"symbol"==typeof b.toStringTag&&Object.defineProperty(bx.prototype,b.toStringTag,{
value:"WritableStream",configurable:!0});var bK=function(){function a(a){if(V(a,1,"WritableStreamDefaultWriter"),
bv(a,"First parameter"),bB(a))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
;this._ownerWritableStream=a,a._writer=this;var b,c=a._state;if("writable"===c)!bH(a)&&a._backpressure?b9(this):cb(this),
b5(this);else if("erroring"===c)ca(this,a._storedError),b5(this);else if("closed"===c)cb(this),b5(b=this),b8(b);else{
var d=a._storedError;ca(this,d),b6(this,d)}}return Object.defineProperty(a.prototype,"closed",{get:function(){
return bL(this)?this._closedPromise:s(b3("closed"))},enumerable:!1,configurable:!0}),
Object.defineProperty(a.prototype,"desiredSize",{get:function(){if(!bL(this))throw b3("desiredSize")
;if(void 0===this._ownerWritableStream)throw b4("desiredSize");return function(a){var b=a._ownerWritableStream,c=b._state
;return"errored"===c||"erroring"===c?null:"closed"===c?0:bW(b._writableStreamController)}(this)},enumerable:!1,configurable:!0
}),Object.defineProperty(a.prototype,"ready",{get:function(){return bL(this)?this._readyPromise:s(b3("ready"))},enumerable:!1,
configurable:!0}),a.prototype.abort=function(a){
return void 0===a&&(a=void 0),bL(this)?void 0===this._ownerWritableStream?s(b4("abort")):function(a,b){
return bC(a._ownerWritableStream,b)}(this,a):s(b3("abort"))},a.prototype.close=function(){if(!bL(this))return s(b3("close"))
;var a=this._ownerWritableStream
;return void 0===a?s(b4("close")):bH(a)?s(new TypeError("Cannot close an already-closing stream")):bM(this)},
a.prototype.releaseLock=function(){if(!bL(this))throw b3("releaseLock");void 0!==this._ownerWritableStream&&bP(this)},
a.prototype.write=function(a){
return void 0===a&&(a=void 0),bL(this)?void 0===this._ownerWritableStream?s(b4("write to")):bQ(this,a):s(b3("write"))},a}()
;function bL(a){return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_ownerWritableStream")&&a instanceof bK}function bM(a){
return bD(a._ownerWritableStream)}function bN(a,b){"pending"===a._closedPromiseState?b7(a,b):function(a,b){b6(a,b)}(a,b)}
function bO(a,b){"pending"===a._readyPromiseState?cc(a,b):function(a,b){ca(a,b)}(a,b)}function bP(a){
var b=a._ownerWritableStream,c=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
;bO(a,c),bN(a,c),b._writer=void 0,a._ownerWritableStream=void 0}function bQ(a,b){
var c=a._ownerWritableStream,d=c._writableStreamController,e=function(a,b){try{return a._strategySizeAlgorithm(b)}catch(b){
return bY(a,b),1}}(d,b);if(c!==a._ownerWritableStream)return s(b4("write to"));var f=c._state
;if("errored"===f)return s(c._storedError)
;if(bH(c)||"closed"===f)return s(new TypeError("The stream is closing or closed and cannot be written to"))
;if("erroring"===f)return s(c._storedError);var g=function(a){return q((function(b,c){var d={_resolve:b,_reject:c}
;a._writeRequests.push(d)}))}(c);return function(a,b,c){try{aF(a,b,c)}catch(b){return void bY(a,b)}
var d=a._controlledWritableStream;bH(d)||"writable"!==d._state||bJ(d,bZ(a)),bX(a)}(d,b,e),g}
Object.defineProperties(bK.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{
enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),m(bK.prototype.abort,"abort"),
m(bK.prototype.close,"close"),m(bK.prototype.releaseLock,"releaseLock"),m(bK.prototype.write,"write"),
"symbol"==typeof b.toStringTag&&Object.defineProperty(bK.prototype,b.toStringTag,{value:"WritableStreamDefaultWriter",
configurable:!0});var bR={},bS=function(){function a(){throw new TypeError("Illegal constructor")}
return Object.defineProperty(a.prototype,"abortReason",{get:function(){if(!bT(this))throw b2("abortReason")
;return this._abortReason},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"signal",{get:function(){
if(!bT(this))throw b2("signal")
;if(void 0===this._abortController)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported")
;return this._abortController.signal},enumerable:!1,configurable:!0}),a.prototype.error=function(a){if(void 0===a&&(a=void 0),
!bT(this))throw b2("error");"writable"===this._controlledWritableStream._state&&b0(this,a)},a.prototype[D]=function(a){
var b=this._abortAlgorithm(a);return bV(this),b},a.prototype[E]=function(){aG(this)},a}();function bT(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_controlledWritableStream")&&a instanceof bS}
function bU(a,b,c,d,e,f,g,h){b._controlledWritableStream=a,a._writableStreamController=b,b._queue=void 0,
b._queueTotalSize=void 0,aG(b),b._abortReason=void 0,b._abortController=function(){if(bw)return new AbortController}(),
b._started=!1,b._strategySizeAlgorithm=h,b._strategyHWM=g,b._writeAlgorithm=d,b._closeAlgorithm=e,b._abortAlgorithm=f
;var i=bZ(b);bJ(a,i),u(r(c()),(function(){return b._started=!0,bX(b),null}),(function(c){return b._started=!0,bE(a,c),null}))}
function bV(a){a._writeAlgorithm=void 0,a._closeAlgorithm=void 0,a._abortAlgorithm=void 0,a._strategySizeAlgorithm=void 0}
function bW(a){return a._strategyHWM-a._queueTotalSize}function bX(a){var b=a._controlledWritableStream
;if(a._started&&void 0===b._inFlightWriteRequest)if("erroring"!==b._state){if(0!==a._queue.length){var c=a._queue.peek().value
;c===bR?function(a){var b=a._controlledWritableStream;(function(a){a._inFlightCloseRequest=a._closeRequest,
a._closeRequest=void 0})(b),aE(a);var c=a._closeAlgorithm();bV(a),u(c,(function(){return function(a){
a._inFlightCloseRequest._resolve(void 0),a._inFlightCloseRequest=void 0,"erroring"===a._state&&(a._storedError=void 0,
void 0!==a._pendingAbortRequest&&(a._pendingAbortRequest._resolve(),a._pendingAbortRequest=void 0)),a._state="closed"
;var b=a._writer;void 0!==b&&b8(b)}(b),null}),(function(a){return function(a,b){a._inFlightCloseRequest._reject(b),
a._inFlightCloseRequest=void 0,void 0!==a._pendingAbortRequest&&(a._pendingAbortRequest._reject(b),
a._pendingAbortRequest=void 0),bE(a,b)}(b,a),null}))}(a):function(a,b){var c=a._controlledWritableStream;!function(a){
a._inFlightWriteRequest=a._writeRequests.shift()}(c),u(a._writeAlgorithm(b),(function(){!function(a){
a._inFlightWriteRequest._resolve(void 0),a._inFlightWriteRequest=void 0}(c);var b=c._state;if(aE(a),!bH(c)&&"writable"===b){
var d=bZ(a);bJ(c,d)}return bX(a),null}),(function(b){return"writable"===c._state&&bV(a),function(a,b){
a._inFlightWriteRequest._reject(b),a._inFlightWriteRequest=void 0,bE(a,b)}(c,b),null}))}(a,c)}}else bG(b)}function bY(a,b){
"writable"===a._controlledWritableStream._state&&b0(a,b)}function bZ(a){return bW(a)<=0}function b0(a,b){
var c=a._controlledWritableStream;bV(a),bF(c,b)}function b1(a){
return new TypeError("WritableStream.prototype.".concat(a," can only be used on a WritableStream"))}function b2(a){
return new TypeError("WritableStreamDefaultController.prototype.".concat(a," can only be used on a WritableStreamDefaultController"))
}function b3(a){
return new TypeError("WritableStreamDefaultWriter.prototype.".concat(a," can only be used on a WritableStreamDefaultWriter"))}
function b4(a){return new TypeError("Cannot "+a+" a stream using a released writer")}function b5(a){
a._closedPromise=q((function(b,c){a._closedPromise_resolve=b,a._closedPromise_reject=c,a._closedPromiseState="pending"}))}
function b6(a,b){b5(a),b7(a,b)}function b7(a,b){void 0!==a._closedPromise_reject&&(y(a._closedPromise),
a._closedPromise_reject(b),a._closedPromise_resolve=void 0,a._closedPromise_reject=void 0,a._closedPromiseState="rejected")}
function b8(a){void 0!==a._closedPromise_resolve&&(a._closedPromise_resolve(void 0),a._closedPromise_resolve=void 0,
a._closedPromise_reject=void 0,a._closedPromiseState="resolved")}function b9(a){a._readyPromise=q((function(b,c){
a._readyPromise_resolve=b,a._readyPromise_reject=c})),a._readyPromiseState="pending"}function ca(a,b){b9(a),cc(a,b)}
function cb(a){b9(a),cd(a)}function cc(a,b){void 0!==a._readyPromise_reject&&(y(a._readyPromise),a._readyPromise_reject(b),
a._readyPromise_resolve=void 0,a._readyPromise_reject=void 0,a._readyPromiseState="rejected")}function cd(a){
void 0!==a._readyPromise_resolve&&(a._readyPromise_resolve(void 0),a._readyPromise_resolve=void 0,a._readyPromise_reject=void 0,
a._readyPromiseState="fulfilled")}Object.defineProperties(bS.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},
error:{enumerable:!0}}),"symbol"==typeof b.toStringTag&&Object.defineProperty(bS.prototype,b.toStringTag,{
value:"WritableStreamDefaultController",configurable:!0})
;var ce,cf="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==c.g?c.g:void 0,cg=(function(a){
if("function"!=typeof a&&"object"!=typeof a)return!1;if("DOMException"!==a.name)return!1;try{return new a,!0}catch(a){return!1}
}(ce=null==cf?void 0:cf.DOMException)?ce:void 0)||function(){var a=function(a,b){this.message=a||"",this.name=b||"Error",
Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)};return m(a,"DOMException"),
a.prototype=Object.create(Error.prototype),Object.defineProperty(a.prototype,"constructor",{value:a,writable:!0,configurable:!0
}),a}();function ch(a,b,c,d,e,f){var g=ab(a),h=by(b);a._disturbed=!0;var i=!1,k=r(void 0);return q((function(l,m){var n,o,p,x
;if(void 0!==f){if(n=function(){var c=void 0!==f.reason?f.reason:new cg("Aborted","AbortError"),g=[];d||g.push((function(){
return"writable"===b._state?bC(b,c):r(void 0)})),e||g.push((function(){return"readable"===a._state?cH(a,c):r(void 0)})),
C((function(){return Promise.all(g.map((function(a){return a()})))}),!0,c)},f.aborted)return void n()
;f.addEventListener("abort",n)}if(B(a,g._closedPromise,(function(a){return d?D(!0,a):C((function(){return bC(b,a)}),!0,a),null
})),B(b,h._closedPromise,(function(b){return e?D(!0,b):C((function(){return cH(a,b)}),!0,b),null})),o=a,p=g._closedPromise,
x=function(){return c?D():C((function(){return function(a){var b=a._ownerWritableStream,c=b._state
;return bH(b)||"closed"===c?r(void 0):"errored"===c?s(b._storedError):bM(a)}(h)})),null},"closed"===o._state?x():v(p,x),
bH(b)||"closed"===b._state){var z=new TypeError("the destination writable stream closed before all data could be piped to it")
;e?D(!0,z):C((function(){return cH(a,z)}),!0,z)}function A(){var a=k;return t(k,(function(){return a!==k?A():void 0}))}
function B(a,b,c){"errored"===a._state?c(a._storedError):w(b,c)}function C(a,c,d){function e(){return u(a(),(function(){
return E(c,d)}),(function(a){return E(!0,a)})),null}i||(i=!0,"writable"!==b._state||bH(b)?e():v(A(),e))}function D(a,c){
i||(i=!0,"writable"!==b._state||bH(b)?E(a,c):v(A(),(function(){return E(a,c)})))}function E(a,b){return bP(h),K(g),
void 0!==f&&f.removeEventListener("abort",n),a?m(b):l(void 0),null}y(q((function(a,b){!function c(d){
d?a():t(i?r(!0):t(h._readyPromise,(function(){return q((function(a,b){al(g,{_chunkSteps:function(b){k=t(bQ(h,b),void 0,j),a(!1)
},_closeSteps:function(){return a(!0)},_errorSteps:b})}))})),c,b)}(!1)})))}))}var ci=function(){function a(){
throw new TypeError("Illegal constructor")}return Object.defineProperty(a.prototype,"desiredSize",{get:function(){
if(!cj(this))throw ct("desiredSize");return cq(this)},enumerable:!1,configurable:!0}),a.prototype.close=function(){
if(!cj(this))throw ct("close");if(!cr(this))throw new TypeError("The stream is not in a state that permits close");cn(this)},
a.prototype.enqueue=function(a){if(void 0===a&&(a=void 0),!cj(this))throw ct("enqueue")
;if(!cr(this))throw new TypeError("The stream is not in a state that permits enqueue");return co(this,a)},
a.prototype.error=function(a){if(void 0===a&&(a=void 0),!cj(this))throw ct("error");cp(this,a)},a.prototype[F]=function(a){
aG(this);var b=this._cancelAlgorithm(a);return cm(this),b},a.prototype[G]=function(a){var b=this._controlledReadableStream
;if(this._queue.length>0){var c=aE(this);this._closeRequested&&0===this._queue.length?(cm(this),cI(b)):ck(this),a._chunkSteps(c)
}else ac(b,a),ck(this)},a.prototype[H]=function(){},a}();function cj(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_controlledReadableStream")&&a instanceof ci}function ck(a){
cl(a)&&(a._pulling?a._pullAgain=!0:(a._pulling=!0,u(a._pullAlgorithm(),(function(){return a._pulling=!1,
a._pullAgain&&(a._pullAgain=!1,ck(a)),null}),(function(b){return cp(a,b),null}))))}function cl(a){
var b=a._controlledReadableStream;return!!cr(a)&&!!a._started&&(!!(cG(b)&&ae(b)>0)||cq(a)>0)}function cm(a){
a._pullAlgorithm=void 0,a._cancelAlgorithm=void 0,a._strategySizeAlgorithm=void 0}function cn(a){if(cr(a)){
var b=a._controlledReadableStream;a._closeRequested=!0,0===a._queue.length&&(cm(a),cI(b))}}function co(a,b){if(cr(a)){
var c=a._controlledReadableStream;if(cG(c)&&ae(c)>0)ad(c,b,!1);else{var d=void 0;try{d=a._strategySizeAlgorithm(b)}catch(b){
throw cp(a,b),b}try{aF(a,b,d)}catch(b){throw cp(a,b),b}}ck(a)}}function cp(a,b){var c=a._controlledReadableStream
;"readable"===c._state&&(aG(a),cm(a),cJ(c,b))}function cq(a){var b=a._controlledReadableStream._state
;return"errored"===b?null:"closed"===b?0:a._strategyHWM-a._queueTotalSize}function cr(a){
var b=a._controlledReadableStream._state;return!a._closeRequested&&"readable"===b}function cs(a,b,c,d,e,f,g){
b._controlledReadableStream=a,b._queue=void 0,b._queueTotalSize=void 0,aG(b),b._started=!1,b._closeRequested=!1,b._pullAgain=!1,
b._pulling=!1,b._strategySizeAlgorithm=g,b._strategyHWM=f,b._pullAlgorithm=d,b._cancelAlgorithm=e,a._readableStreamController=b,
u(r(c()),(function(){return b._started=!0,ck(b),null}),(function(a){return cp(b,a),null}))}function ct(a){
return new TypeError("ReadableStreamDefaultController.prototype.".concat(a," can only be used on a ReadableStreamDefaultController"))
}function cu(a,b){return aK(a._readableStreamController)?function(a){
var b,c,d,e,f,g=ab(a),h=!1,i=!1,j=!1,k=!1,l=!1,m=q((function(a){f=a}));function n(a){w(a._closedPromise,(function(b){
return a!==g||(a4(d._readableStreamController,b),a4(e._readableStreamController,b),k&&l||f(void 0)),null}))}function o(){
bj(g)&&(K(g),n(g=ab(a))),al(g,{_chunkSteps:function(b){z((function(){i=!1,j=!1;var c=b,g=b;if(!k&&!l)try{g=aD(b)}catch(b){
return a4(d._readableStreamController,b),a4(e._readableStreamController,b),void f(cH(a,b))}k||a3(d._readableStreamController,c),
l||a3(e._readableStreamController,g),h=!1,i?s():j&&t()}))},_closeSteps:function(){h=!1,k||a2(d._readableStreamController),
l||a2(e._readableStreamController),d._readableStreamController._pendingPullIntos.length>0&&a8(d._readableStreamController,0),
e._readableStreamController._pendingPullIntos.length>0&&a8(e._readableStreamController,0),k&&l||f(void 0)},
_errorSteps:function(){h=!1}})}function p(b,c){ak(g)&&(K(g),n(g=be(a)));var m=c?e:d,o=c?d:e;bk(g,b,1,{_chunkSteps:function(b){
z((function(){i=!1,j=!1;var d=c?l:k;if(c?k:l)d||a9(m._readableStreamController,b);else{var e=void 0;try{e=aD(b)}catch(b){
return a4(m._readableStreamController,b),a4(o._readableStreamController,b),void f(cH(a,b))}d||a9(m._readableStreamController,b),
a3(o._readableStreamController,e)}h=!1,i?s():j&&t()}))},_closeSteps:function(a){h=!1;var b=c?l:k,d=c?k:l
;b||a2(m._readableStreamController),d||a2(o._readableStreamController),void 0!==a&&(b||a9(m._readableStreamController,a),
!d&&o._readableStreamController._pendingPullIntos.length>0&&a8(o._readableStreamController,0)),b&&d||f(void 0)},
_errorSteps:function(){h=!1}})}function s(){if(h)return i=!0,r(void 0);h=!0;var a=a6(d._readableStreamController)
;return null===a?o():p(a._view,!1),r(void 0)}function t(){if(h)return j=!0,r(void 0);h=!0;var a=a6(e._readableStreamController)
;return null===a?o():p(a._view,!0),r(void 0)}function u(d){if(k=!0,b=d,l){var e=ao([b,c]),g=cH(a,e);f(g)}return m}function v(d){
if(l=!0,c=d,k){var e=ao([b,c]),g=cH(a,e);f(g)}return m}function x(){}return d=cD(x,s,u),e=cD(x,t,v),n(g),[d,e]
}(a):function(a,b){var c,d,e,f,g,h=ab(a),i=!1,j=!1,k=!1,l=!1,m=q((function(a){g=a}));function n(){return i?(j=!0,
r(void 0)):(i=!0,al(h,{_chunkSteps:function(a){z((function(){j=!1;var b=a,c=a;k||co(e._readableStreamController,b),
l||co(f._readableStreamController,c),i=!1,j&&n()}))},_closeSteps:function(){i=!1,k||cn(e._readableStreamController),
l||cn(f._readableStreamController),k&&l||g(void 0)},_errorSteps:function(){i=!1}}),r(void 0))}function o(b){if(k=!0,c=b,l){
var e=ao([c,d]),f=cH(a,e);g(f)}return m}function p(b){if(l=!0,d=b,k){var e=ao([c,d]),f=cH(a,e);g(f)}return m}function s(){}
return e=cC(s,n,o),f=cC(s,n,p),w(h._closedPromise,(function(a){return cp(e._readableStreamController,a),
cp(f._readableStreamController,a),k&&l||g(void 0),null})),[e,f]}(a)}function cv(a){
return k(b=a)&&void 0!==b.getReader?function(a){var b;function c(){var c;try{c=a.read()}catch(a){return s(a)}
return x(c,(function(a){
if(!k(a))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object")
;if(a.done)cn(b._readableStreamController);else{var c=a.value;co(b._readableStreamController,c)}}))}function d(b){try{
return r(a.cancel(b))}catch(a){return s(a)}}return b=cC(j,c,d,0)}(a.getReader()):function(a){var b,c=aw(a,"async");function d(){
var a;try{a=function(a){var b=A(a.nextMethod,a.iterator,[])
;if(!k(b))throw new TypeError("The iterator.next() method must return an object");return b}(c)}catch(a){return s(a)}
return x(r(a),(function(a){
if(!k(a))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object")
;var c=function(a){return Boolean(a.done)}(a);if(c)cn(b._readableStreamController);else{var d=function(a){return a.value}(a)
;co(b._readableStreamController,d)}}))}function e(a){var b,d,e=c.iterator;try{b=at(e,"return")}catch(a){return s(a)}
if(void 0===b)return r(void 0);try{d=A(b,e,[a])}catch(a){return s(a)}return x(r(d),(function(a){
if(!k(a))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")}))}
return b=cC(j,d,e,0)}(a);var b}function cw(a,b,c){return T(a,c),function(c){return B(a,b,[c])}}function cx(a,b,c){return T(a,c),
function(c){return B(a,b,[c])}}function cy(a,b,c){return T(a,c),function(c){return A(a,b,[c])}}function cz(a,b){
if("bytes"!==(a="".concat(a)))throw new TypeError("".concat(b," '").concat(a,"' is not a valid enumeration value for ReadableStreamType"))
;return a}function cA(a,b){S(a,b)
;var c=null==a?void 0:a.preventAbort,d=null==a?void 0:a.preventCancel,e=null==a?void 0:a.preventClose,f=null==a?void 0:a.signal
;return void 0!==f&&function(a,b){if(!function(a){if("object"!=typeof a||null===a)return!1;try{return"boolean"==typeof a.aborted
}catch(a){return!1}}(a))throw new TypeError("".concat(b," is not an AbortSignal."))
}(f,"".concat(b," has member 'signal' that")),{preventAbort:Boolean(c),preventCancel:Boolean(d),preventClose:Boolean(e),signal:f
}}Object.defineProperties(ci.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{
enumerable:!0}}),m(ci.prototype.close,"close"),m(ci.prototype.enqueue,"enqueue"),m(ci.prototype.error,"error"),
"symbol"==typeof b.toStringTag&&Object.defineProperty(ci.prototype,b.toStringTag,{value:"ReadableStreamDefaultController",
configurable:!0});var cB=function(){function a(a,b){void 0===a&&(a={}),void 0===b&&(b={}),
void 0===a?a=null:U(a,"First parameter");var c=bp(b,"Second parameter"),d=function(a,b){S(a,b)
;var c=a,d=null==c?void 0:c.autoAllocateChunkSize,e=null==c?void 0:c.cancel,f=null==c?void 0:c.pull,g=null==c?void 0:c.start,h=null==c?void 0:c.type
;return{autoAllocateChunkSize:void 0===d?void 0:Z(d,"".concat(b," has member 'autoAllocateChunkSize' that")),
cancel:void 0===e?void 0:cw(e,c,"".concat(b," has member 'cancel' that")),
pull:void 0===f?void 0:cx(f,c,"".concat(b," has member 'pull' that")),
start:void 0===g?void 0:cy(g,c,"".concat(b," has member 'start' that")),
type:void 0===h?void 0:cz(h,"".concat(b," has member 'type' that"))}}(a,"First parameter");if(cE(this),"bytes"===d.type){
if(void 0!==c.size)throw new RangeError("The strategy for a byte stream cannot have a size function");!function(a,b,c){
var d,e,f,g=Object.create(aJ.prototype);d=void 0!==b.start?function(){return b.start(g)}:function(){},
e=void 0!==b.pull?function(){return b.pull(g)}:function(){return r(void 0)},f=void 0!==b.cancel?function(a){return b.cancel(a)
}:function(){return r(void 0)};var h=b.autoAllocateChunkSize
;if(0===h)throw new TypeError("autoAllocateChunkSize must be greater than 0");ba(a,g,d,e,f,c,h)}(this,d,bn(c,0))}else{
var e=bo(c);!function(a,b,c,d){var e,f,g,h=Object.create(ci.prototype);e=void 0!==b.start?function(){return b.start(h)
}:function(){},f=void 0!==b.pull?function(){return b.pull(h)}:function(){return r(void 0)},g=void 0!==b.cancel?function(a){
return b.cancel(a)}:function(){return r(void 0)},cs(a,h,e,f,g,c,d)}(this,d,bn(c,1),e)}}
return Object.defineProperty(a.prototype,"locked",{get:function(){if(!cF(this))throw cK("locked");return cG(this)},
enumerable:!1,configurable:!0}),a.prototype.cancel=function(a){return void 0===a&&(a=void 0),
cF(this)?cG(this)?s(new TypeError("Cannot cancel a stream that already has a reader")):cH(this,a):s(cK("cancel"))},
a.prototype.getReader=function(a){if(void 0===a&&(a=void 0),!cF(this))throw cK("getReader");return void 0===function(a,b){S(a,b)
;var c=null==a?void 0:a.mode;return{mode:void 0===c?void 0:bd(c,"".concat(b," has member 'mode' that"))}
}(a,"First parameter").mode?ab(this):be(this)},a.prototype.pipeThrough=function(a,b){if(void 0===b&&(b={}),
!cF(this))throw cK("pipeThrough");V(a,1,"pipeThrough");var c=function(a,b){S(a,b);var c=null==a?void 0:a.readable
;W(c,"readable","ReadableWritablePair"),aa(c,"".concat(b," has member 'readable' that"));var d=null==a?void 0:a.writable
;return W(d,"writable","ReadableWritablePair"),bv(d,"".concat(b," has member 'writable' that")),{readable:c,writable:d}
}(a,"First parameter"),d=cA(b,"Second parameter")
;if(cG(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream")
;if(bB(c.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream")
;return y(ch(this,c.writable,d.preventClose,d.preventAbort,d.preventCancel,d.signal)),c.readable},
a.prototype.pipeTo=function(a,b){if(void 0===b&&(b={}),!cF(this))return s(cK("pipeTo"))
;if(void 0===a)return s("Parameter 1 is required in 'pipeTo'.")
;if(!bA(a))return s(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));var c;try{
c=cA(b,"Second parameter")}catch(a){return s(a)}
return cG(this)?s(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):bB(a)?s(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):ch(this,a,c.preventClose,c.preventAbort,c.preventCancel,c.signal)
},a.prototype.tee=function(){if(!cF(this))throw cK("tee");return ao(cu(this))},a.prototype.values=function(a){
if(void 0===a&&(a=void 0),!cF(this))throw cK("values");var b,c,d,e,f,g=function(a,b){S(a,"First parameter")
;var c=null==a?void 0:a.preventCancel;return{preventCancel:Boolean(c)}}(a);return b=this,c=g.preventCancel,d=ab(b),
e=new ay(d,c),(f=Object.create(az))._asyncIteratorImpl=e,f},a.prototype[av]=function(a){return this.values(a)},
a.from=function(a){return cv(a)},a}();function cC(a,b,c,d,e){void 0===d&&(d=1),void 0===e&&(e=function(){return 1})
;var f=Object.create(cB.prototype);return cE(f),cs(f,Object.create(ci.prototype),a,b,c,d,e),f}function cD(a,b,c){
var d=Object.create(cB.prototype);return cE(d),ba(d,Object.create(aJ.prototype),a,b,c,0,void 0),d}function cE(a){
a._state="readable",a._reader=void 0,a._storedError=void 0,a._disturbed=!1}function cF(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_readableStreamController")&&a instanceof cB}function cG(a){
return void 0!==a._reader}function cH(a,b){if(a._disturbed=!0,"closed"===a._state)return r(void 0)
;if("errored"===a._state)return s(a._storedError);cI(a);var c=a._reader;if(void 0!==c&&bj(c)){var d=c._readIntoRequests
;c._readIntoRequests=new C,d.forEach((function(a){a._closeSteps(void 0)}))}return x(a._readableStreamController[F](b),j)}
function cI(a){a._state="closed";var b=a._reader;if(void 0!==b&&(P(b),ak(b))){var c=b._readRequests;b._readRequests=new C,
c.forEach((function(a){a._closeSteps()}))}}function cJ(a,b){a._state="errored",a._storedError=b;var c=a._reader
;void 0!==c&&(O(c,b),ak(c)?am(c,b):bl(c,b))}function cK(a){
return new TypeError("ReadableStream.prototype.".concat(a," can only be used on a ReadableStream"))}function cL(a,b){S(a,b)
;var c=null==a?void 0:a.highWaterMark;return W(c,"highWaterMark","QueuingStrategyInit"),{highWaterMark:X(c)}}
Object.defineProperties(cB,{from:{enumerable:!0}}),Object.defineProperties(cB.prototype,{cancel:{enumerable:!0},getReader:{
enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{
enumerable:!0}}),m(cB.from,"from"),m(cB.prototype.cancel,"cancel"),m(cB.prototype.getReader,"getReader"),
m(cB.prototype.pipeThrough,"pipeThrough"),m(cB.prototype.pipeTo,"pipeTo"),m(cB.prototype.tee,"tee"),
m(cB.prototype.values,"values"),"symbol"==typeof b.toStringTag&&Object.defineProperty(cB.prototype,b.toStringTag,{
value:"ReadableStream",configurable:!0}),Object.defineProperty(cB.prototype,av,{value:cB.prototype.values,writable:!0,
configurable:!0});var cM=function(a){return a.byteLength};m(cM,"size");var cN=function(){function a(a){
V(a,1,"ByteLengthQueuingStrategy"),a=cL(a,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=a.highWaterMark}
return Object.defineProperty(a.prototype,"highWaterMark",{get:function(){if(!cP(this))throw cO("highWaterMark")
;return this._byteLengthQueuingStrategyHighWaterMark},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"size",{
get:function(){if(!cP(this))throw cO("size");return cM},enumerable:!1,configurable:!0}),a}();function cO(a){
return new TypeError("ByteLengthQueuingStrategy.prototype.".concat(a," can only be used on a ByteLengthQueuingStrategy"))}
function cP(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_byteLengthQueuingStrategyHighWaterMark")&&a instanceof cN}
Object.defineProperties(cN.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),
"symbol"==typeof b.toStringTag&&Object.defineProperty(cN.prototype,b.toStringTag,{value:"ByteLengthQueuingStrategy",
configurable:!0});var cQ=function(){return 1};m(cQ,"size");var cR=function(){function a(a){V(a,1,"CountQueuingStrategy"),
a=cL(a,"First parameter"),this._countQueuingStrategyHighWaterMark=a.highWaterMark}
return Object.defineProperty(a.prototype,"highWaterMark",{get:function(){if(!cT(this))throw cS("highWaterMark")
;return this._countQueuingStrategyHighWaterMark},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"size",{
get:function(){if(!cT(this))throw cS("size");return cQ},enumerable:!1,configurable:!0}),a}();function cS(a){
return new TypeError("CountQueuingStrategy.prototype.".concat(a," can only be used on a CountQueuingStrategy"))}function cT(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_countQueuingStrategyHighWaterMark")&&a instanceof cR}
function cU(a,b,c){return T(a,c),function(c){return B(a,b,[c])}}function cV(a,b,c){return T(a,c),function(c){return A(a,b,[c])}}
function cW(a,b,c){return T(a,c),function(c,d){return B(a,b,[c,d])}}function cX(a,b,c){return T(a,c),function(c){
return B(a,b,[c])}}Object.defineProperties(cR.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),
"symbol"==typeof b.toStringTag&&Object.defineProperty(cR.prototype,b.toStringTag,{value:"CountQueuingStrategy",configurable:!0})
;var cY=function(){function a(a,b,c){void 0===a&&(a={}),void 0===b&&(b={}),void 0===c&&(c={}),void 0===a&&(a=null)
;var d=bp(b,"Second parameter"),e=bp(c,"Third parameter"),f=function(a,b){S(a,b)
;var c=null==a?void 0:a.cancel,d=null==a?void 0:a.flush,e=null==a?void 0:a.readableType,f=null==a?void 0:a.start,g=null==a?void 0:a.transform,h=null==a?void 0:a.writableType
;return{cancel:void 0===c?void 0:cX(c,a,"".concat(b," has member 'cancel' that")),
flush:void 0===d?void 0:cU(d,a,"".concat(b," has member 'flush' that")),readableType:e,
start:void 0===f?void 0:cV(f,a,"".concat(b," has member 'start' that")),
transform:void 0===g?void 0:cW(g,a,"".concat(b," has member 'transform' that")),writableType:h}}(a,"First parameter")
;if(void 0!==f.readableType)throw new RangeError("Invalid readableType specified")
;if(void 0!==f.writableType)throw new RangeError("Invalid writableType specified");var g,h=bn(e,0),i=bo(e),j=bn(d,1),k=bo(d)
;!function(a,b,c,d,e,f){function g(){return b}function h(b){return function(a,b){var c=a._transformStreamController
;return a._backpressure?x(a._backpressureChangePromise,(function(){var d=a._writable
;if("erroring"===d._state)throw d._storedError;return c8(c,b)})):c8(c,b)}(a,b)}function i(b){return function(a,b){
var c=a._transformStreamController;if(void 0!==c._finishPromise)return c._finishPromise;var d=a._readable
;c._finishPromise=q((function(a,b){c._finishPromise_resolve=a,c._finishPromise_reject=b}));var e=c._cancelAlgorithm(b)
;return c6(c),u(e,(function(){return"errored"===d._state?db(c,d._storedError):(cp(d._readableStreamController,b),da(c)),null
}),(function(a){return cp(d._readableStreamController,a),db(c,a),null})),c._finishPromise}(a,b)}function j(){return function(a){
var b=a._transformStreamController;if(void 0!==b._finishPromise)return b._finishPromise;var c=a._readable
;b._finishPromise=q((function(a,c){b._finishPromise_resolve=a,b._finishPromise_reject=c}));var d=b._flushAlgorithm()
;return c6(b),u(d,(function(){return"errored"===c._state?db(b,c._storedError):(cn(c._readableStreamController),da(b)),null
}),(function(a){return cp(c._readableStreamController,a),db(b,a),null})),b._finishPromise}(a)}function k(){return function(a){
return c3(a,!1),a._backpressureChangePromise}(a)}function l(b){return function(a,b){var c=a._transformStreamController
;if(void 0!==c._finishPromise)return c._finishPromise;var d=a._writable;c._finishPromise=q((function(a,b){
c._finishPromise_resolve=a,c._finishPromise_reject=b}));var e=c._cancelAlgorithm(b);return c6(c),u(e,(function(){
return"errored"===d._state?db(c,d._storedError):(bY(d._writableStreamController,b),c2(a),da(c)),null}),(function(b){
return bY(d._writableStreamController,b),c2(a),db(c,b),null})),c._finishPromise}(a,b)}a._writable=function(a,b,c,d,e,f){
void 0===e&&(e=1),void 0===f&&(f=function(){return 1});var g=Object.create(bx.prototype);return bz(g),
bU(g,Object.create(bS.prototype),a,b,c,d,e,f),g}(g,h,j,i,c,d),a._readable=cC(g,k,l,e,f),a._backpressure=void 0,
a._backpressureChangePromise=void 0,a._backpressureChangePromise_resolve=void 0,c3(a,!0),a._transformStreamController=void 0
}(this,q((function(a){g=a})),j,k,h,i),function(a,b){var c,d,e,f=Object.create(c4.prototype);c=void 0!==b.transform?function(a){
return b.transform(a,f)}:function(a){try{return c7(f,a),r(void 0)}catch(a){return s(a)}},d=void 0!==b.flush?function(){
return b.flush(f)}:function(){return r(void 0)},e=void 0!==b.cancel?function(a){return b.cancel(a)}:function(){return r(void 0)
},function(a,b,c,d,e){b._controlledTransformStream=a,a._transformStreamController=b,b._transformAlgorithm=c,b._flushAlgorithm=d,
b._cancelAlgorithm=e,b._finishPromise=void 0,b._finishPromise_resolve=void 0,b._finishPromise_reject=void 0}(a,f,c,d,e)
}(this,f),void 0!==f.start?g(f.start(this._transformStreamController)):g(void 0)}
return Object.defineProperty(a.prototype,"readable",{get:function(){if(!cZ(this))throw dc("readable");return this._readable},
enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"writable",{get:function(){if(!cZ(this))throw dc("writable")
;return this._writable},enumerable:!1,configurable:!0}),a}();function cZ(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_transformStreamController")&&a instanceof cY}function c0(a,b){
cp(a._readable._readableStreamController,b),c1(a,b)}function c1(a,b){c6(a._transformStreamController),
bY(a._writable._writableStreamController,b),c2(a)}function c2(a){a._backpressure&&c3(a,!1)}function c3(a,b){
void 0!==a._backpressureChangePromise&&a._backpressureChangePromise_resolve(),a._backpressureChangePromise=q((function(b){
a._backpressureChangePromise_resolve=b})),a._backpressure=b}Object.defineProperties(cY.prototype,{readable:{enumerable:!0},
writable:{enumerable:!0}}),"symbol"==typeof b.toStringTag&&Object.defineProperty(cY.prototype,b.toStringTag,{
value:"TransformStream",configurable:!0});var c4=function(){function a(){throw new TypeError("Illegal constructor")}
return Object.defineProperty(a.prototype,"desiredSize",{get:function(){if(!c5(this))throw c9("desiredSize")
;return cq(this._controlledTransformStream._readable._readableStreamController)},enumerable:!1,configurable:!0}),
a.prototype.enqueue=function(a){if(void 0===a&&(a=void 0),!c5(this))throw c9("enqueue");c7(this,a)},
a.prototype.error=function(a){if(void 0===a&&(a=void 0),!c5(this))throw c9("error");var b;b=a,
c0(this._controlledTransformStream,b)},a.prototype.terminate=function(){if(!c5(this))throw c9("terminate");!function(a){
var b=a._controlledTransformStream;cn(b._readable._readableStreamController),c1(b,new TypeError("TransformStream terminated"))
}(this)},a}();function c5(a){
return!!k(a)&&!!Object.prototype.hasOwnProperty.call(a,"_controlledTransformStream")&&a instanceof c4}function c6(a){
a._transformAlgorithm=void 0,a._flushAlgorithm=void 0,a._cancelAlgorithm=void 0}function c7(a,b){
var c=a._controlledTransformStream,d=c._readable._readableStreamController
;if(!cr(d))throw new TypeError("Readable side is not in a state that permits enqueue");try{co(d,b)}catch(a){throw c1(c,a),
c._readable._storedError}var e=function(a){return!cl(a)}(d);e!==c._backpressure&&c3(c,!0)}function c8(a,b){
return x(a._transformAlgorithm(b),void 0,(function(b){throw c0(a._controlledTransformStream,b),b}))}function c9(a){
return new TypeError("TransformStreamDefaultController.prototype.".concat(a," can only be used on a TransformStreamDefaultController"))
}function da(a){void 0!==a._finishPromise_resolve&&(a._finishPromise_resolve(),a._finishPromise_resolve=void 0,
a._finishPromise_reject=void 0)}function db(a,b){void 0!==a._finishPromise_reject&&(y(a._finishPromise),
a._finishPromise_reject(b),a._finishPromise_resolve=void 0,a._finishPromise_reject=void 0)}function dc(a){
return new TypeError("TransformStream.prototype.".concat(a," can only be used on a TransformStream"))}
Object.defineProperties(c4.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{
enumerable:!0}}),m(c4.prototype.enqueue,"enqueue"),m(c4.prototype.error,"error"),m(c4.prototype.terminate,"terminate"),
"symbol"==typeof b.toStringTag&&Object.defineProperty(c4.prototype,b.toStringTag,{value:"TransformStreamDefaultController",
configurable:!0});var dd={ReadableStream:cB,ReadableStreamDefaultController:ci,ReadableByteStreamController:aJ,
ReadableStreamBYOBRequest:aI,ReadableStreamDefaultReader:aj,ReadableStreamBYOBReader:bi,WritableStream:bx,
WritableStreamDefaultController:bS,WritableStreamDefaultWriter:bK,ByteLengthQueuingStrategy:cN,CountQueuingStrategy:cR,
TransformStream:cY,TransformStreamDefaultController:c4}
;if(void 0!==cf)for(var de in dd)Object.prototype.hasOwnProperty.call(dd,de)&&Object.defineProperty(cf,de,{value:dd[de],
writable:!0,configurable:!0});a.ByteLengthQueuingStrategy=cN,a.CountQueuingStrategy=cR,a.ReadableByteStreamController=aJ,
a.ReadableStream=cB,a.ReadableStreamBYOBReader=bi,a.ReadableStreamBYOBRequest=aI,a.ReadableStreamDefaultController=ci,
a.ReadableStreamDefaultReader=aj,a.TransformStream=cY,a.TransformStreamDefaultController=c4,a.WritableStream=bx,
a.WritableStreamDefaultController=bS,a.WritableStreamDefaultWriter=bK}(b)},94675:function(a,b,c){"use strict";c.d(b,{
Re:function(){return e.Re},WY:function(){return j},mV:function(){return e.mV}});var d=c(45959),e=c(43387),f=c(92647);let g=[]
;const h=[];let i=0;async function j(a,b){
const{options:c,config:e}=b,{transferStreams:j,useWebWorkers:l,useCompressionStream:m,codecType:n,compressed:o,signed:p,encrypted:q}=c,{workerScripts:r,maxWorkers:s}=e
;b.transferStreams=j||j===d.HP;const t=!(o||p||q||b.transferStreams);return b.useWebWorkers=!t&&(l||l===d.HP&&e.useWebWorkers),
b.scripts=b.useWebWorkers&&r?r[n]:[],c.useCompressionStream=m||m===d.HP&&e.useCompressionStream,(await async function(){
const c=g.find((a=>!a.busy));if(c)return k(c),new f.r(c,a,b,u);if(g.length<s){const c={indexWorker:i};return i++,g.push(c),
new f.r(c,a,b,u)}return new Promise((c=>h.push({resolve:c,stream:a,workerOptions:b})))}()).run();function u(a){if(h.length){
const[{resolve:b,stream:c,workerOptions:d}]=h.splice(0,1);b(new f.r(a,c,d,u))}else a.worker?(k(a),function(a,b){
const{config:c}=b,{terminateWorkerTimeout:d}=c
;Number.isFinite(d)&&d>=0&&(a.terminated?a.terminated=!1:a.terminateTimeout=setTimeout((async()=>{g=g.filter((b=>b!=a));try{
await a.terminate()}catch(b){}}),d))}(a,b)):g=g.filter((b=>b!=a))}}function k(a){const{terminateTimeout:b}=a
;b&&(clearTimeout(b),a.terminateTimeout=null)}},92647:function(a,b,c){"use strict";c.d(b,{r:function(){return g}})
;var d=c(45959),e=c(43387);let f=typeof Worker!=d.AV;class g{
constructor(a,{readable:b,writable:c},{options:d,config:g,streamOptions:i,useWebWorkers:l,transferStreams:m,scripts:n},o){
const{signal:p}=i;return Object.assign(a,{busy:!0,readable:b.pipeThrough(new e.Qo(g.chunkSize)).pipeThrough(new h(b,i),{signal:p
}),writable:c,options:Object.assign({},d),scripts:n,transferStreams:m,terminate:()=>new Promise((b=>{const{worker:c,busy:d}=a
;c?(d?a.resolveTerminated=b:(c.terminate(),b()),a.interface=null):b()})),onTaskFinished(){const{resolveTerminated:b}=a
;b&&(a.resolveTerminated=null,a.terminated=!0,a.worker.terminate(),b()),a.busy=!1,o(a)}}),(l&&f?k:j)(a,g)}}
class h extends TransformStream{constructor(a,{onstart:b,onprogress:c,size:d,onend:e}){let f=0;super({async start(){
b&&await i(b,d)},async transform(a,b){f+=a.length,c&&await i(c,f,d),b.enqueue(a)},async flush(){a.size=f,e&&await i(e,f)}})}}
async function i(a,...b){try{await a(...b)}catch(c){}}function j(a,b){return{
run:()=>async function({options:a,readable:b,writable:c,onTaskFinished:d},f){try{const d=new e.z5(a,f)
;await b.pipeThrough(d).pipeTo(c,{preventClose:!0,preventAbort:!0});const{signature:g,inputSize:h,outputSize:i}=d;return{
signature:g,inputSize:h,outputSize:i}}finally{d()}}(a,b)}}function k(a,b){const{baseURL:c,chunkSize:g}=b;if(!a.interface){let i
;try{i=function(a,b,c){const f={type:"module"};let g,h;typeof a==d.On&&(a=a());try{g=new URL(a,b)}catch(i){g=a}if(l)try{
h=new Worker(g)}catch(i){l=!1,h=new Worker(g,f)}else h=new Worker(g,f)
;return h.addEventListener(e.AJ,(a=>async function({data:a},b){
const{type:c,value:d,messageId:f,result:g,error:h}=a,{reader:i,writer:j,resolveResult:k,rejectResult:l,onTaskFinished:m}=b;try{
if(h){const{message:a,stack:b,code:c,name:d}=h,e=new Error(a);Object.assign(e,{stack:b,code:c,name:d}),o(e)}else{if(c==e.Y_){
const{value:a,done:c}=await i.read();n({type:e.jF,value:a,done:c,messageId:f},b)}c==e.jF&&(await j.ready,
await j.write(new Uint8Array(d)),n({type:e.dr,messageId:f},b)),c==e.B7&&o(null,g)}}catch(h){n({type:e.B7,messageId:f},b),o(h)}
function o(a,b){a?l(a):k(b),j&&j.releaseLock(),m()}}(a,c))),h}(a.scripts[0],c,a)}catch(h){return f=!1,j(a,b)}Object.assign(a,{
worker:i,interface:{run:()=>async function(a,b){let c,d;const f=new Promise(((a,b)=>{c=a,d=b}));Object.assign(a,{reader:null,
writer:null,resolveResult:c,rejectResult:d,result:f});const{readable:g,options:h,scripts:i}=a,{writable:j,closed:k}=function(a){
let b;const c=new Promise((a=>b=a)),d=new WritableStream({async write(b){const c=a.getWriter();await c.ready,await c.write(b),
c.releaseLock()},close(){b()},abort:b=>a.getWriter().abort(b)});return{writable:d,closed:c}}(a.writable),l=n({type:e.tz,
scripts:i.slice(1),options:h,config:b,readable:g,writable:j},a);l||Object.assign(a,{reader:g.getReader(),writer:j.getWriter()})
;const m=await f;l||await j.getWriter().close();return await k,m}(a,{chunkSize:g})}})}return a.interface}let l=!0,m=!0
;function n(a,{worker:b,writer:c,onTaskFinished:d,transferStreams:e}){try{let{value:c,readable:d,writable:g}=a;const h=[]
;if(c&&(c.byteLength<c.buffer.byteLength?a.value=c.buffer.slice(0,c.byteLength):a.value=c.buffer,h.push(a.value)),
e&&m?(d&&h.push(d),g&&h.push(g)):a.readable=a.writable=null,h.length)try{return b.postMessage(a,h),!0}catch(f){m=!1,
a.readable=a.writable=null,b.postMessage(a)}else b.postMessage(a)}catch(g){throw c&&c.releaseLock(),d(),g}}},
11236:function(a,b,c){"use strict";c.d(b,{D0:function(){return j},L3:function(){return k},jK:function(){return l}})
;var d=c(45959),e=c(44976);const f=64;let g=2;try{
typeof navigator!=d.AV&&navigator.hardwareConcurrency&&(g=navigator.hardwareConcurrency)}catch(n){}const h={chunkSize:524288,
maxWorkers:g,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:d.HP,
CompressionStreamNative:typeof CompressionStream!=d.AV&&CompressionStream,
DecompressionStreamNative:typeof DecompressionStream!=d.AV&&DecompressionStream},i=Object.assign({},h);function j(){return i}
function k(a){return Math.max(a.chunkSize,f)}function l(a){
const{baseURL:b,chunkSize:c,maxWorkers:f,terminateWorkerTimeout:g,useCompressionStream:h,useWebWorkers:j,Deflate:k,Inflate:l,CompressionStream:n,DecompressionStream:o,workerScripts:p}=a
;if(m("baseURL",b),m("chunkSize",c),m("maxWorkers",f),m("terminateWorkerTimeout",g),m("useCompressionStream",h),
m("useWebWorkers",j),k&&(i.CompressionStream=new e.a(k)),l&&(i.DecompressionStream=new e.a(l)),m("CompressionStream",n),
m("DecompressionStream",o),p!==d.HP){const{deflate:a,inflate:b}=p;if((a||b)&&(i.workerScripts||(i.workerScripts={})),a){
if(!Array.isArray(a))throw new Error("workerScripts.deflate must be an array");i.workerScripts.deflate=a}if(b){
if(!Array.isArray(b))throw new Error("workerScripts.inflate must be an array");i.workerScripts.inflate=b}}}function m(a,b){
b!==d.HP&&(i[a]=b)}},45959:function(a,b,c){"use strict";c.d(b,{$F:function(){return g},$O:function(){return v},AQ:function(){
return x},AV:function(){return G},FH:function(){return f},Gq:function(){return i},Gy:function(){return C},HP:function(){return F
},KR:function(){return r},NF:function(){return y},OL:function(){return n},On:function(){return H},Ow:function(){return t},
PA:function(){return A},Tm:function(){return m},Xn:function(){return o},Yx:function(){return p},ZP:function(){return j},
_q:function(){return s},ac:function(){return d},cC:function(){return k},dy:function(){return B},f:function(){return D},
fB:function(){return l},g4:function(){return u},gk:function(){return e},hW:function(){return z},n8:function(){return h},
uV:function(){return w},vJ:function(){return E},zm:function(){return q}})
;const d=4294967295,e=65535,f=8,g=0,h=99,i=67324752,j=134695760,k=33639248,l=101010256,m=101075792,n=117853008,o=22,p=20,q=56,r=1,s=39169,t=10,u=1,v=21589,w=28789,x=25461,y=6534,z=1,A=6,B=8,C=2048,D=16,E="/",F=(new Date(2107,11,31),
new Date(1980,0,1),void 0),G="undefined",H="function"},4220:function(a,b,c){"use strict";c.d(b,{$i:function(){return k},
Ul:function(){return q},Y7:function(){return o},ZD:function(){return n},gD:function(){return p},nZ:function(){return j}})
;var d=c(45959);c(11236);const e=65536,f="writable";class g{constructor(){this.size=0}init(){this.initialized=!0}}
class h extends g{get readable(){const a=this,{chunkSize:b=e}=a,c=new ReadableStream({start(){this.chunkOffset=0},async pull(d){
const{offset:e=0,size:f,diskNumberStart:g}=c,{chunkOffset:h}=this;d.enqueue(await q(a,e+h,Math.min(b,f-h),g)),
h+b>f?d.close():this.chunkOffset+=b}});return c}}class i extends g{constructor(){super();const a=this,b=new WritableStream({
write:b=>a.writeUint8Array(b)});Object.defineProperty(a,f,{get:()=>b})}writeUint8Array(){}}class j extends h{constructor(a){
super(),Object.assign(this,{blob:a,size:a.size})}async readUint8Array(a,b){
const c=this,d=a+b,e=a||d<c.size?c.blob.slice(a,d):c.blob;let f=await e.arrayBuffer();return f.byteLength>b&&(f=f.slice(a,d)),
new Uint8Array(f)}}class k extends i{init(a=0){Object.assign(this,{offset:0,array:new Uint8Array(a)}),super.init()}
writeUint8Array(a){const b=this;if(b.offset+a.length>b.array.length){const c=b.array;b.array=new Uint8Array(c.length+a.length),
b.array.set(c)}b.array.set(a,b.offset),b.offset+=a.length}getData(){return this.array}}class l extends h{constructor(a){super(),
this.readers=a}async init(){const a=this,{readers:b}=a;a.lastDiskNumber=0,a.lastDiskOffset=0,
await Promise.all(b.map((async(c,d)=>{await c.init(),d!=b.length-1&&(a.lastDiskOffset+=c.size),a.size+=c.size}))),super.init()}
async readUint8Array(a,b,c=0){const d=this,{readers:e}=this;let f,g=c;-1==g&&(g=e.length-1);let h=a
;for(;h>=e[g].size;)h-=e[g].size,g++;const i=e[g],j=i.size;if(h+b<=j)f=await q(i,h,b);else{const e=j-h;f=new Uint8Array(b),
f.set(await q(i,h,e)),f.set(await d.readUint8Array(a+e,b-e,c),e)}return d.lastDiskNumber=Math.max(g,d.lastDiskNumber),f}}
class m extends g{constructor(a,b=4294967295){super();const c=this;let d,e,g;Object.assign(c,{diskNumber:0,diskOffset:0,size:0,
maxSize:b,availableSize:b});const h=new WritableStream({async write(b){const{availableSize:f}=c
;if(g)b.length>=f?(await i(b.slice(0,f)),await j(),c.diskOffset+=d.size,c.diskNumber++,g=null,
await this.write(b.slice(f))):await i(b);else{const{value:f,done:h}=await a.next()
;if(h&&!f)throw new Error("Writer iterator completed too soon");d=f,d.size=0,d.maxSize&&(c.maxSize=d.maxSize),
c.availableSize=c.maxSize,await n(d),e=f.writable,g=e.getWriter(),await this.write(b)}},async close(){await g.ready,await j()}})
;async function i(a){const b=a.length;b&&(await g.ready,await g.write(a),d.size+=b,c.size+=b,c.availableSize-=b)}
async function j(){e.size=d.size,await g.close()}Object.defineProperty(c,f,{get:()=>h})}}async function n(a,b){
if(!a.init||a.initialized)return Promise.resolve();await a.init(b)}function o(a){return Array.isArray(a)&&(a=new l(a)),
a instanceof ReadableStream&&(a={readable:a}),a}function p(a){a.writable===d.HP&&typeof a.next==d.On&&(a=new m(a)),
a instanceof WritableStream&&(a={writable:a});const{writable:b}=a;return b.size===d.HP&&(b.size=0),
a instanceof m||Object.assign(a,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),a}function q(a,b,c,d){
return a.readUint8Array(b,c,d)}},68654:function(a,b,c){"use strict";c.d(b,{LL:function(){return A},ho:function(){return B}})
;var d=c(45959),e=c(39221),f=c(55330),g=c(88209);const h=16,i="raw",j={name:"PBKDF2"},k=Object.assign({hash:{name:"HMAC"}
},j),l=Object.assign({iterations:1e3,hash:{name:"SHA-1"}
},j),m=["deriveBits"],n=[8,12,16],o=[16,24,32],p=10,q=[0,0,0,0],r=typeof crypto!=d.AV,s=r&&crypto.subtle,t=r&&typeof s!=d.AV,u=f.rL.bytes,v=f.cY.aes,w=f.Mq.ctrGladman,x=f.Lr.hmacSha1
;let y=r&&t&&typeof s.importKey==d.On,z=r&&t&&typeof s.deriveBits==d.On;class A extends TransformStream{
constructor({password:a,rawPassword:b,signed:c,encryptionStrength:d,checkPasswordOnly:e}){super({start(){Object.assign(this,{
ready:new Promise((a=>this.resolveReady=a)),password:E(a,b),signed:c,strength:d-1,pending:new Uint8Array})},
async transform(a,b){const c=this,{password:d,strength:f,resolveReady:i,ready:j}=c;d?(await async function(a,b,c,d){
const e=await D(a,b,c,G(d,0,n[b])),f=G(d,n[b]);if(e[0]!=f[0]||e[1]!=f[1])throw new Error(g.wP)}(c,f,d,G(a,0,n[f]+2)),
a=G(a,n[f]+2),e?b.error(new Error(g.mV)):i()):await j;const k=new Uint8Array(a.length-p-(a.length-p)%h)
;b.enqueue(C(c,a,k,0,p,!0))},async flush(a){const{signed:b,ctr:c,hmac:d,pending:e,ready:f}=this;if(d&&c){await f
;const h=G(e,0,e.length-p),i=G(e,e.length-p);let j=new Uint8Array;if(h.length){const a=I(u,h);d.update(a);const b=c.update(a)
;j=H(u,b)}if(b){const a=G(H(u,d.digest()),0,p);for(let b=0;b<p;b++)if(a[b]!=i[b])throw new Error(g.Bu)}a.enqueue(j)}}})}}
class B extends TransformStream{constructor({password:a,rawPassword:b,encryptionStrength:c}){let d;super({start(){
Object.assign(this,{ready:new Promise((a=>this.resolveReady=a)),password:E(a,b),strength:c-1,pending:new Uint8Array})},
async transform(a,b){const c=this,{password:d,strength:e,resolveReady:f,ready:i}=c;let j=new Uint8Array
;d?(j=await async function(a,b,c){const d=(0,g.UY)(new Uint8Array(n[b])),e=await D(a,b,c,d);return F(d,e)}(c,e,d),f()):await i
;const k=new Uint8Array(j.length+a.length-a.length%h);k.set(j,0),b.enqueue(C(c,a,k,j.length,0))},async flush(a){
const{ctr:b,hmac:c,pending:e,ready:f}=this;if(c&&b){await f;let g=new Uint8Array;if(e.length){const a=b.update(I(u,e))
;c.update(a),g=H(u,a)}d.signature=H(u,c.digest()).slice(0,p),a.enqueue(F(g,d.signature))}}}),d=this}}function C(a,b,c,d,e,f){
const{ctr:g,hmac:i,pending:j}=a,k=b.length-e;let l;for(j.length&&(b=F(j,b),c=function(a,b){if(b&&b>a.length){const c=a
;(a=new Uint8Array(b)).set(c,0)}return a}(c,k-k%h)),l=0;l<=k-h;l+=h){const a=I(u,G(b,l,l+h));f&&i.update(a);const e=g.update(a)
;f||i.update(e),c.set(H(u,e),l+d)}return a.pending=G(b,l),c}async function D(a,b,c,d){a.password=null
;const e=await async function(a,b,c,d,e){if(!y)return f.Lr.importKey(b);try{return await s.importKey(a,b,c,d,e)}catch(g){
return y=!1,f.Lr.importKey(b)}}(i,c,k,!1,m),g=await async function(a,b,c){if(!z)return f.Lr.pbkdf2(b,a.salt,l.iterations,c);try{
return await s.deriveBits(a,b,c)}catch(d){return z=!1,f.Lr.pbkdf2(b,a.salt,l.iterations,c)}}(Object.assign({salt:d
},l),e,8*(2*o[b]+2)),h=new Uint8Array(g),j=I(u,G(h,0,o[b])),n=I(u,G(h,o[b],2*o[b])),p=G(h,2*o[b]);return Object.assign(a,{keys:{
key:j,authentication:n,passwordVerification:p},ctr:new w(new v(j),Array.from(q)),hmac:new x(n)}),p}function E(a,b){
return b===d.HP?(0,e.w)(a):b}function F(a,b){let c=a;return a.length+b.length&&(c=new Uint8Array(a.length+b.length),c.set(a,0),
c.set(b,a.length)),c}function G(a,b,c){return a.subarray(b,c)}function H(a,b){return a.fromBits(b)}function I(a,b){
return a.toBits(b)}},43387:function(a,b,c){"use strict";c.d(b,{AJ:function(){return e},B7:function(){return j},Qo:function(){
return m},Re:function(){return k},Y_:function(){return g},dr:function(){return i},jF:function(){return h},mV:function(){
return d.mV},tz:function(){return f},z5:function(){return l}});var d=c(79467)
;const e="message",f="start",g="pull",h="data",i="ack",j="close",k="inflate";class l extends TransformStream{constructor(a,b){
super({});const c=this,{codecType:e}=a;let f;e.startsWith("deflate")?f=d.C_:e.startsWith(k)&&(f=d.Oc);let g=0,h=0
;const i=new f(a,b),j=super.readable,l=new TransformStream({transform(a,b){a&&a.length&&(h+=a.length,b.enqueue(a))},flush(){
Object.assign(c,{inputSize:h})}}),m=new TransformStream({transform(a,b){a&&a.length&&(g+=a.length,b.enqueue(a))},flush(){
const{signature:a}=i;Object.assign(c,{signature:a,outputSize:g,inputSize:h})}});Object.defineProperty(c,"readable",{
get:()=>j.pipeThrough(l).pipeThrough(i).pipeThrough(m)})}}class m extends TransformStream{constructor(a){let b;super({
transform:function c(d,e){if(b){const a=new Uint8Array(b.length+d.length);a.set(b),a.set(d,b.length),d=a,b=null}
d.length>a?(e.enqueue(d.slice(0,a)),c(d.slice(a),e)):b=d},flush(a){b&&b.length&&a.enqueue(b)}})}}},13357:function(a,b,c){
"use strict";c.d(b,{s:function(){return e}});const d=[];for(let f=0;f<256;f++){let a=f
;for(let b=0;b<8;b++)1&a?a=a>>>1^3988292384:a>>>=1;d[f]=a}class e{constructor(a){this.crc=a||-1}append(a){let b=0|this.crc
;for(let c=0,e=0|a.length;c<e;c++)b=b>>>8^d[255&(b^a[c])];this.crc=b}get(){return~this.crc}}},19265:function(a,b,c){"use strict"
;c.d(b,{G:function(){return F}});const d=15,e=256,f=573,g=256,h=-1,i=0,j=4,k=0,l=1,m=-2,n=-5;function o(a){
return p(a.map((([a,b])=>new Array(a).fill(b,0,a))))}function p(a){
return a.reduce(((a,b)=>a.concat(Array.isArray(b)?p(b):b)),[])}
const q=[0,1,2,3].concat(...o([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]))
;function r(){const a=this;function b(a,b){let c=0;do{c|=1&a,a>>>=1,c<<=1}while(--b>0);return c>>>1}a.build_tree=function(c){
const e=a.dyn_tree,g=a.stat_desc.static_tree,h=a.stat_desc.elems;let i,j,k,l=-1;for(c.heap_len=0,c.heap_max=f,
i=0;i<h;i++)0!==e[2*i]?(c.heap[++c.heap_len]=l=i,c.depth[i]=0):e[2*i+1]=0;for(;c.heap_len<2;)k=c.heap[++c.heap_len]=l<2?++l:0,
e[2*k]=1,c.depth[k]=0,c.opt_len--,g&&(c.static_len-=g[2*k+1])
;for(a.max_code=l,i=Math.floor(c.heap_len/2);i>=1;i--)c.pqdownheap(e,i);k=h;do{i=c.heap[1],c.heap[1]=c.heap[c.heap_len--],
c.pqdownheap(e,1),j=c.heap[1],c.heap[--c.heap_max]=i,c.heap[--c.heap_max]=j,e[2*k]=e[2*i]+e[2*j],
c.depth[k]=Math.max(c.depth[i],c.depth[j])+1,e[2*i+1]=e[2*j+1]=k,c.heap[1]=k++,c.pqdownheap(e,1)}while(c.heap_len>=2)
;c.heap[--c.heap_max]=c.heap[1],function(b){
const c=a.dyn_tree,e=a.stat_desc.static_tree,g=a.stat_desc.extra_bits,h=a.stat_desc.extra_base,i=a.stat_desc.max_length
;let j,k,l,m,n,o,p=0;for(m=0;m<=d;m++)b.bl_count[m]=0;for(c[2*b.heap[b.heap_max]+1]=0,j=b.heap_max+1;j<f;j++)k=b.heap[j],
m=c[2*c[2*k+1]+1]+1,m>i&&(m=i,p++),c[2*k+1]=m,k>a.max_code||(b.bl_count[m]++,n=0,k>=h&&(n=g[k-h]),o=c[2*k],b.opt_len+=o*(m+n),
e&&(b.static_len+=o*(e[2*k+1]+n)));if(0!==p){do{for(m=i-1;0===b.bl_count[m];)m--;b.bl_count[m]--,b.bl_count[m+1]+=2,
b.bl_count[i]--,p-=2}while(p>0);for(m=i;0!==m;m--)for(k=b.bl_count[m];0!==k;)l=b.heap[--j],
l>a.max_code||(c[2*l+1]!=m&&(b.opt_len+=(m-c[2*l+1])*c[2*l],c[2*l+1]=m),k--)}}(c),function(a,c,e){const f=[];let g,h,i,j=0
;for(g=1;g<=d;g++)f[g]=j=j+e[g-1]<<1;for(h=0;h<=c;h++)i=a[2*h+1],0!==i&&(a[2*h]=b(f[i]++,i))}(e,a.max_code,c.bl_count)}}
function s(a,b,c,d,e){const f=this;f.static_tree=a,f.extra_bits=b,f.extra_base=c,f.elems=d,f.max_length=e}
r._length_code=[0,1,2,3,4,5,6,7].concat(...o([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),
r.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],
r.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],
r.d_code=function(a){return a<256?q[a]:q[256+(a>>>7)]
},r.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],
r.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],
r.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],r.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
;const t=o([[144,8],[112,9],[24,7],[8,8]])
;s.static_ltree=p([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((a,b)=>[a,t[b]])))
;const u=o([[30,5]])
;s.static_dtree=p([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((a,b)=>[a,u[b]]))),
s.static_l_desc=new s(s.static_ltree,r.extra_lbits,257,286,d),s.static_d_desc=new s(s.static_dtree,r.extra_dbits,0,30,d),
s.static_bl_desc=new s(null,r.extra_blbits,0,19,7);function v(a,b,c,d,e){const f=this;f.good_length=a,f.max_lazy=b,
f.nice_length=c,f.max_chain=d,f.func=e}
const w=[new v(0,0,0,0,0),new v(4,4,8,4,1),new v(4,5,16,8,1),new v(4,6,32,32,1),new v(4,4,16,16,2),new v(8,16,32,32,2),new v(8,16,128,128,2),new v(8,32,128,256,2),new v(32,128,258,1024,2),new v(32,258,258,4096,2)],x=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],y=113,z=666,A=258,B=262
;function C(a,b,c,d){const e=a[2*b],f=a[2*c];return e<f||e==f&&d[b]<=d[c]}function D(){const a=this
;let b,c,d,f,o,p,q,t,u,v,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;const aa=new r,ab=new r,ac=new r;let ad,ae,af,ag,ah,ai
;function aj(){let b;for(b=0;b<286;b++)X[2*b]=0;for(b=0;b<30;b++)Y[2*b]=0;for(b=0;b<19;b++)Z[2*b]=0;X[512]=1,
a.opt_len=a.static_len=0,ae=af=0}function ak(a,b){let c,d=-1,e=a[1],f=0,g=7,h=4;0===e&&(g=138,h=3),a[2*(b+1)+1]=65535
;for(let i=0;i<=b;i++)c=e,e=a[2*(i+1)+1],++f<g&&c==e||(f<h?Z[2*c]+=f:0!==c?(c!=d&&Z[2*c]++,Z[32]++):f<=10?Z[34]++:Z[36]++,f=0,
d=c,0===e?(g=138,h=3):c==e?(g=6,h=3):(g=7,h=4))}function al(b){a.pending_buf[a.pending++]=b}function am(a){al(255&a),
al(a>>>8&255)}function an(a,b){let c;const d=b;ai>16-d?(c=a,ah|=c<<ai&65535,am(ah),ah=c>>>16-ai,ai+=d-16):(ah|=a<<ai&65535,
ai+=d)}function ao(a,b){const c=2*a;an(65535&b[c],65535&b[c+1])}function ap(a,b){let c,d,e=-1,f=a[1],g=0,h=7,i=4
;for(0===f&&(h=138,i=3),c=0;c<=b;c++)if(d=f,f=a[2*(c+1)+1],!(++g<h&&d==f)){if(g<i)do{ao(d,Z)
}while(0!=--g);else 0!==d?(d!=e&&(ao(d,Z),g--),ao(16,Z),an(g-3,2)):g<=10?(ao(17,Z),an(g-3,3)):(ao(18,Z),an(g-11,7));g=0,e=d,
0===f?(h=138,i=3):d==f?(h=6,i=3):(h=7,i=4)}}function aq(){16==ai?(am(ah),ah=0,ai=0):ai>=8&&(al(255&ah),ah>>>=8,ai-=8)}
function ar(b,c){let d,f,g;if(a.dist_buf[ae]=b,a.lc_buf[ae]=255&c,ae++,0===b?X[2*c]++:(af++,b--,X[2*(r._length_code[c]+e+1)]++,
Y[2*r.d_code(b)]++),!(8191&ae)&&T>2){for(d=8*ae,f=N-J,g=0;g<30;g++)d+=Y[2*g]*(5+r.extra_dbits[g]);if(d>>>=3,
af<Math.floor(ae/2)&&d<Math.floor(f/2))return!0}return ae==ad-1}function as(b,c){let d,f,h,i,j=0;if(0!==ae)do{d=a.dist_buf[j],
f=a.lc_buf[j],j++,0===d?ao(f,b):(h=r._length_code[f],ao(h+e+1,b),i=r.extra_lbits[h],0!==i&&(f-=r.base_length[h],an(f,i)),d--,
h=r.d_code(d),ao(h,c),i=r.extra_dbits[h],0!==i&&(d-=r.base_dist[h],an(d,i)))}while(j<ae);ao(g,b),ag=b[513]}function at(){
ai>8?am(ah):ai>0&&al(255&ah),ah=0,ai=0}function au(b,c,d){an(0+(d?1:0),3),function(b,c,d){at(),ag=8,d&&(am(c),am(~c)),
a.pending_buf.set(t.subarray(b,b+c),a.pending),a.pending+=c}(b,c,!0)}function av(b,c,d){let e,f,g=0;T>0?(aa.build_tree(a),
ab.build_tree(a),g=function(){let b;for(ak(X,aa.max_code),ak(Y,ab.max_code),ac.build_tree(a),
b=18;b>=3&&0===Z[2*r.bl_order[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}(),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,
f<=e&&(e=f)):e=f=c+5,c+4<=e&&-1!=b?au(b,c,d):f==e?(an(2+(d?1:0),3),as(s.static_ltree,s.static_dtree)):(an(4+(d?1:0),3),
function(a,b,c){let d;for(an(a-257,5),an(b-1,5),an(c-4,4),d=0;d<c;d++)an(Z[2*r.bl_order[d]+1],3);ap(X,a-1),ap(Y,b-1)
}(aa.max_code+1,ab.max_code+1,g+1),as(X,Y)),aj(),d&&at()}function aw(a){av(J>=0?J:-1,N-J,a),J=N,b.flush_pending()}function ax(){
let a,c,d,e;do{if(e=u-P-N,0===e&&0===N&&0===P)e=o;else if(-1==e)e--;else if(N>=o+o-B){t.set(t.subarray(o,o+o),0),O-=o,N-=o,J-=o,
a=F,d=a;do{c=65535&D[--d],D[d]=c>=o?c-o:0}while(0!=--a);a=o,d=a;do{c=65535&v[--d],v[d]=c>=o?c-o:0}while(0!=--a);e+=o}
if(0===b.avail_in)return;a=b.read_buf(t,N+P,e),P+=a,P>=3&&(E=255&t[N],E=(E<<I^255&t[N+1])&H)}while(P<B&&0!==b.avail_in)}
function ay(a){let b,c,d=R,e=N,f=Q;const g=N>o-B?N-(o-B):0;let h=W;const i=q,j=N+A;let k=t[e+f-1],l=t[e+f];Q>=V&&(d>>=2),
h>P&&(h=P);do{if(b=a,t[b+f]==l&&t[b+f-1]==k&&t[b]==t[e]&&t[++b]==t[e+1]){e+=2,b++
;do{}while(t[++e]==t[++b]&&t[++e]==t[++b]&&t[++e]==t[++b]&&t[++e]==t[++b]&&t[++e]==t[++b]&&t[++e]==t[++b]&&t[++e]==t[++b]&&t[++e]==t[++b]&&e<j)
;if(c=A-(j-e),e=j-A,c>f){if(O=a,f=c,c>=h)break;k=t[e+f-1],l=t[e+f]}}}while((a=65535&v[a&i])>g&&0!=--d);return f<=P?f:P}
function az(b){return b.total_in=b.total_out=0,b.msg=null,a.pending=0,a.pending_out=0,c=y,f=i,aa.dyn_tree=X,
aa.stat_desc=s.static_l_desc,ab.dyn_tree=Y,ab.stat_desc=s.static_d_desc,ac.dyn_tree=Z,ac.stat_desc=s.static_bl_desc,ah=0,ai=0,
ag=8,aj(),function(){u=2*o,D[F-1]=0;for(let a=0;a<F-1;a++)D[a]=0;S=w[T].max_lazy,V=w[T].good_length,W=w[T].nice_length,
R=w[T].max_chain,N=0,J=0,P=0,K=Q=2,M=0,E=0}(),k}a.depth=[],a.bl_count=[],a.heap=[],X=[],Y=[],Z=[],a.pqdownheap=function(b,c){
const d=a.heap,e=d[c];let f=c<<1;for(;f<=a.heap_len&&(f<a.heap_len&&C(b,d[f+1],d[f],a.depth)&&f++,
!C(b,e,d[f],a.depth));)d[c]=d[f],c=f,f<<=1;d[c]=e},a.deflateInit=function(b,c,e,f,g,i){return f||(f=8),g||(g=8),i||(i=0),
b.msg=null,c==h&&(c=6),g<1||g>9||8!=f||e<9||e>15||c<0||c>9||i<0||i>2?m:(b.dstate=a,p=e,o=1<<p,q=o-1,G=g+7,F=1<<G,H=F-1,
I=Math.floor((G+3-1)/3),t=new Uint8Array(2*o),v=[],D=[],ad=1<<g+6,a.pending_buf=new Uint8Array(4*ad),d=4*ad,
a.dist_buf=new Uint16Array(ad),a.lc_buf=new Uint8Array(ad),T=c,U=i,az(b))},a.deflateEnd=function(){
return 42!=c&&c!=y&&c!=z?m:(a.lc_buf=null,a.dist_buf=null,a.pending_buf=null,D=null,v=null,t=null,a.dstate=null,c==y?-3:k)},
a.deflateParams=function(a,b,c){let d=k
;return b==h&&(b=6),b<0||b>9||c<0||c>2?m:(w[T].func!=w[b].func&&0!==a.total_in&&(d=a.deflate(1)),T!=b&&(T=b,S=w[T].max_lazy,
V=w[T].good_length,W=w[T].nice_length,R=w[T].max_chain),U=c,d)},a.deflateSetDictionary=function(a,b,d){let e,f=d,g=0
;if(!b||42!=c)return m;if(f<3)return k;for(f>o-B&&(f=o-B,g=d-f),t.set(b.subarray(g,g+f),0),N=f,J=f,E=255&t[0],
E=(E<<I^255&t[1])&H,e=0;e<=f-3;e++)E=(E<<I^255&t[e+2])&H,v[e&q]=D[E],D[E]=e;return k},a.deflate=function(e,h){let r,u,A,C,G
;if(h>j||h<0)return m;if(!e.next_out||!e.next_in&&0!==e.avail_in||c==z&&h!=j)return e.msg=x[4],m
;if(0===e.avail_out)return e.msg=x[7],n;var R;if(b=e,C=f,f=h,42==c&&(u=8+(p-8<<4)<<8,A=(T-1&255)>>1,A>3&&(A=3),u|=A<<6,
0!==N&&(u|=32),u+=31-u%31,c=y,al((R=u)>>8&255),al(255&R)),0!==a.pending){if(b.flush_pending(),0===b.avail_out)return f=-1,k
}else if(0===b.avail_in&&h<=C&&h!=j)return b.msg=x[7],n;if(c==z&&0!==b.avail_in)return e.msg=x[7],n
;if(0!==b.avail_in||0!==P||h!=i&&c!=z){switch(G=-1,w[T].func){case 0:G=function(a){let c,e=65535;for(e>d-5&&(e=d-5);;){if(P<=1){
if(ax(),0===P&&a==i)return 0;if(0===P)break}if(N+=P,P=0,c=J+e,(0===N||N>=c)&&(P=N-c,N=c,aw(!1),0===b.avail_out))return 0
;if(N-J>=o-B&&(aw(!1),0===b.avail_out))return 0}return aw(a==j),0===b.avail_out?a==j?2:0:a==j?3:1}(h);break;case 1:
G=function(a){let c,d=0;for(;;){if(P<B){if(ax(),P<B&&a==i)return 0;if(0===P)break}if(P>=3&&(E=(E<<I^255&t[N+2])&H,d=65535&D[E],
v[N&q]=D[E],D[E]=N),0!==d&&(N-d&65535)<=o-B&&2!=U&&(K=ay(d)),K>=3)if(c=ar(N-O,K-3),P-=K,K<=S&&P>=3){K--;do{N++,
E=(E<<I^255&t[N+2])&H,d=65535&D[E],v[N&q]=D[E],D[E]=N}while(0!=--K);N++}else N+=K,K=0,E=255&t[N],
E=(E<<I^255&t[N+1])&H;else c=ar(0,255&t[N]),P--,N++;if(c&&(aw(!1),0===b.avail_out))return 0}return aw(a==j),
0===b.avail_out?a==j?2:0:a==j?3:1}(h);break;case 2:G=function(a){let c,d,e=0;for(;;){if(P<B){if(ax(),P<B&&a==i)return 0
;if(0===P)break}if(P>=3&&(E=(E<<I^255&t[N+2])&H,e=65535&D[E],v[N&q]=D[E],D[E]=N),Q=K,L=O,K=2,
0!==e&&Q<S&&(N-e&65535)<=o-B&&(2!=U&&(K=ay(e)),K<=5&&(1==U||3==K&&N-O>4096)&&(K=2)),Q>=3&&K<=Q){d=N+P-3,c=ar(N-1-L,Q-3),P-=Q-1,
Q-=2;do{++N<=d&&(E=(E<<I^255&t[N+2])&H,e=65535&D[E],v[N&q]=D[E],D[E]=N)}while(0!=--Q);if(M=0,K=2,N++,c&&(aw(!1),
0===b.avail_out))return 0}else if(0!==M){if(c=ar(0,255&t[N-1]),c&&aw(!1),N++,P--,0===b.avail_out)return 0}else M=1,N++,P--}
return 0!==M&&(c=ar(0,255&t[N-1]),M=0),aw(a==j),0===b.avail_out?a==j?2:0:a==j?3:1}(h)}if(2!=G&&3!=G||(c=z),
0==G||2==G)return 0===b.avail_out&&(f=-1),k;if(1==G){if(1==h)an(2,3),ao(g,s.static_ltree),aq(),1+ag+10-ai<9&&(an(2,3),
ao(g,s.static_ltree),aq()),ag=7;else if(au(0,0,!1),3==h)for(r=0;r<F;r++)D[r]=0;if(b.flush_pending(),0===b.avail_out)return f=-1,
k}}return h!=j?k:l}}function E(){const a=this;a.next_in_index=0,a.next_out_index=0,a.avail_in=0,a.total_in=0,a.avail_out=0,
a.total_out=0}function F(a){const b=new E,c=(d=a&&a.chunkSize?a.chunkSize:65536)+5*(Math.floor(d/16383)+1);var d
;const e=i,f=new Uint8Array(c);let g=a?a.level:h;void 0===g&&(g=h),b.deflateInit(g),b.next_out=f,this.append=function(a,d){
let g,h,i=0,j=0,l=0;const m=[];if(a.length){b.next_in_index=0,b.next_in=a,b.avail_in=a.length;do{if(b.next_out_index=0,
b.avail_out=c,g=b.deflate(e),g!=k)throw new Error("deflating: "+b.msg)
;b.next_out_index&&(b.next_out_index==c?m.push(new Uint8Array(f)):m.push(f.subarray(0,b.next_out_index))),l+=b.next_out_index,
d&&b.next_in_index>0&&b.next_in_index!=i&&(d(b.next_in_index),i=b.next_in_index)}while(b.avail_in>0||0===b.avail_out)
;return m.length>1?(h=new Uint8Array(l),m.forEach((function(a){h.set(a,j),j+=a.length
}))):h=m[0]?new Uint8Array(m[0]):new Uint8Array,h}},this.flush=function(){let a,d,e=0,g=0;const h=[];do{if(b.next_out_index=0,
b.avail_out=c,a=b.deflate(j),a!=l&&a!=k)throw new Error("deflating: "+b.msg)
;c-b.avail_out>0&&h.push(f.slice(0,b.next_out_index)),g+=b.next_out_index}while(b.avail_in>0||0===b.avail_out)
;return b.deflateEnd(),d=new Uint8Array(g),h.forEach((function(a){d.set(a,e),e+=a.length})),d}}E.prototype={deflateInit(a,b){
const c=this;return c.dstate=new D,b||(b=d),c.dstate.deflateInit(c,a,b)},deflate(a){const b=this
;return b.dstate?b.dstate.deflate(b,a):m},deflateEnd(){const a=this;if(!a.dstate)return m;const b=a.dstate.deflateEnd()
;return a.dstate=null,b},deflateParams(a,b){const c=this;return c.dstate?c.dstate.deflateParams(c,a,b):m},
deflateSetDictionary(a,b){const c=this;return c.dstate?c.dstate.deflateSetDictionary(c,a,b):m},read_buf(a,b,c){const d=this
;let e=d.avail_in;return e>c&&(e=c),0===e?0:(d.avail_in-=e,a.set(d.next_in.subarray(d.next_in_index,d.next_in_index+e),b),
d.next_in_index+=e,d.total_in+=e,e)},flush_pending(){const a=this;let b=a.dstate.pending;b>a.avail_out&&(b=a.avail_out),
0!==b&&(a.next_out.set(a.dstate.pending_buf.subarray(a.dstate.pending_out,a.dstate.pending_out+b),a.next_out_index),
a.next_out_index+=b,a.dstate.pending_out+=b,a.total_out+=b,a.avail_out-=b,a.dstate.pending-=b,
0===a.dstate.pending&&(a.dstate.pending_out=0))}}},41785:function(a,b,c){"use strict";c.d(b,{E:function(){return V}})
;const d=0,e=1,f=-2,g=-3,h=-4,i=-5,j=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],k=1440,l=0,m=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],n=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],q=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],r=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],s=15
;function t(){let a,b,c,e,f,j;function l(a,b,h,l,m,n,o,p,q,r,t){let u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;D=0,y=h;do{c[a[b+D]]++,D++,y--
}while(0!==y);if(c[0]==h)return o[0]=-1,p[0]=0,d;for(B=p[0],z=1;z<=s&&0===c[z];z++);for(A=z,B<z&&(B=z),y=s;0!==y&&0===c[y];y--);
for(w=y,B>y&&(B=y),p[0]=B,H=1<<z;z<y;z++,H<<=1)if((H-=c[z])<0)return g;if((H-=c[y])<0)return g;for(c[y]+=H,j[1]=z=0,D=1,
G=2;0!=--y;)j[G]=z+=c[D],G++,D++;y=0,D=0;do{0!==(z=a[b+D])&&(t[j[z]++]=y),D++}while(++y<h);for(h=j[w],j[0]=y=0,D=0,x=-1,F=-B,
f[0]=0,E=0,I=0;A<=w;A++)for(u=c[A];0!=u--;){for(;A>F+B;){if(x++,F+=B,I=w-F,I=I>B?B:I,(v=1<<(z=A-F))>u+1&&(v-=u+1,G=A,
z<I))for(;++z<I&&!((v<<=1)<=c[++G]);)v-=c[G];if(I=1<<z,r[0]+I>k)return g;f[x]=E=r[0],r[0]+=I,0!==x?(j[x]=y,e[0]=z,e[1]=B,
z=y>>>F-B,e[2]=E-f[x-1]-z,q.set(e,3*(f[x-1]+z))):o[0]=E}for(e[1]=A-F,D>=h?e[0]=192:t[D]<l?(e[0]=t[D]<256?0:96,
e[2]=t[D++]):(e[0]=n[t[D]-l]+16+64,e[2]=m[t[D++]-l]),v=1<<A-F,z=y>>>F;z<I;z+=v)q.set(e,3*(E+z));for(z=1<<A-1;y&z;z>>>=1)y^=z
;for(y^=z,C=(1<<F)-1;(y&C)!=j[x];)x--,F-=B,C=(1<<F)-1}return 0!==H&&1!=w?i:d}function m(d){let g;for(a||(a=[],b=[],
c=new Int32Array(s+1),e=[],f=new Int32Array(s),j=new Int32Array(s+1)),b.length<d&&(b=[]),g=0;g<d;g++)b[g]=0
;for(g=0;g<s+1;g++)c[g]=0;for(g=0;g<3;g++)e[g]=0;f.set(c.subarray(0,s),0),j.set(c.subarray(0,s+1),0)}
this.inflate_trees_bits=function(c,d,e,f,h){let j;return m(19),a[0]=0,j=l(c,0,19,19,null,null,e,d,f,a,b),
j==g?h.msg="oversubscribed dynamic bit lengths tree":j!=i&&0!==d[0]||(h.msg="incomplete dynamic bit lengths tree",j=g),j},
this.inflate_trees_dynamic=function(c,e,f,j,k,n,s,t,u){let v;return m(288),a[0]=0,v=l(f,0,c,257,o,p,n,j,t,a,b),
v!=d||0===j[0]?(v==g?u.msg="oversubscribed literal/length tree":v!=h&&(u.msg="incomplete literal/length tree",v=g),v):(m(288),
v=l(f,c,e,0,q,r,s,k,t,a,b),
v!=d||0===k[0]&&c>257?(v==g?u.msg="oversubscribed distance tree":v==i?(u.msg="incomplete distance tree",
v=g):v!=h&&(u.msg="empty distance tree with lengths",v=g),v):d)}}t.inflate_trees_fixed=function(a,b,c,e){return a[0]=9,b[0]=5,
c[0]=m,e[0]=n,d};const u=0,v=1,w=2,x=3,y=4,z=5,A=6,B=7,C=8,D=9;function E(){const a=this
;let b,c,h,i,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;function E(a,b,c,f,h,i,k,l){let m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B
;s=l.next_in_index,t=l.avail_in,q=k.bitb,r=k.bitk,u=k.write,v=u<k.read?k.read-u-1:k.end-u,w=j[a],x=j[b];do{for(;r<20;)t--,
q|=(255&l.read_byte(s++))<<r,r+=8;if(m=q&w,n=c,o=f,B=3*(o+m),0!==(p=n[B]))for(;;){if(q>>=n[B+1],r-=n[B+1],16&p){for(p&=15,
y=n[B+2]+(q&j[p]),q>>=p,r-=p;r<15;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;for(m=q&x,n=h,o=i,B=3*(o+m),p=n[B];;){if(q>>=n[B+1],
r-=n[B+1],16&p){for(p&=15;r<p;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;if(z=n[B+2]+(q&j[p]),q>>=p,r-=p,v-=y,u>=z)A=u-z,
u-A>0&&2>u-A?(k.win[u++]=k.win[A++],k.win[u++]=k.win[A++],y-=2):(k.win.set(k.win.subarray(A,A+2),u),u+=2,A+=2,y-=2);else{A=u-z
;do{A+=k.end}while(A<0);if(p=k.end-A,y>p){if(y-=p,u-A>0&&p>u-A)do{k.win[u++]=k.win[A++]
}while(0!=--p);else k.win.set(k.win.subarray(A,A+p),u),u+=p,A+=p,p=0;A=0}}if(u-A>0&&y>u-A)do{k.win[u++]=k.win[A++]
}while(0!=--y);else k.win.set(k.win.subarray(A,A+y),u),u+=y,A+=y,y=0;break}if(64&p)return l.msg="invalid distance code",
y=l.avail_in-t,y=r>>3<y?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,
k.write=u,g;m+=n[B+2],m+=q&j[p],B=3*(o+m),p=n[B]}break}if(64&p)return 32&p?(y=l.avail_in-t,y=r>>3<y?r>>3:y,t+=y,s-=y,r-=y<<3,
k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,
e):(l.msg="invalid literal/length code",y=l.avail_in-t,y=r>>3<y?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,
l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,g);if(m+=n[B+2],m+=q&j[p],B=3*(o+m),0===(p=n[B])){q>>=n[B+1],
r-=n[B+1],k.win[u++]=n[B+2],v--;break}}else q>>=n[B+1],r-=n[B+1],k.win[u++]=n[B+2],v--}while(v>=258&&t>=10)
;return y=l.avail_in-t,y=r>>3<y?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,
l.next_in_index=s,k.write=u,d}a.init=function(a,d,e,f,g,j){b=u,q=a,r=d,h=e,s=f,i=g,t=j,c=null},a.proc=function(a,F,G){
let H,I,J,K,L,M,N,O=0,P=0,Q=0;for(Q=F.next_in_index,K=F.avail_in,O=a.bitb,P=a.bitk,L=a.write,
M=L<a.read?a.read-L-1:a.end-L;;)switch(b){case u:if(M>=258&&K>=10&&(a.bitb=O,a.bitk=P,F.avail_in=K,
F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,G=E(q,r,h,s,i,t,a,F),Q=F.next_in_index,K=F.avail_in,O=a.bitb,P=a.bitk,
L=a.write,M=L<a.read?a.read-L-1:a.end-L,G!=d)){b=G==e?B:D;break}m=q,c=h,l=s,b=v;case v:for(H=m;P<H;){if(0===K)return a.bitb=O,
a.bitk=P,F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);G=d,K--,
O|=(255&F.read_byte(Q++))<<P,P+=8}if(I=3*(l+(O&j[H])),O>>>=c[I+1],P-=c[I+1],J=c[I],0===J){n=c[I+2],b=A;break}if(16&J){o=15&J,
k=c[I+2],b=w;break}if(!(64&J)){m=J,l=I/3+c[I+2];break}if(32&J){b=B;break}return b=D,F.msg="invalid literal/length code",G=g,
a.bitb=O,a.bitk=P,F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);case w:
for(H=o;P<H;){if(0===K)return a.bitb=O,a.bitk=P,F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,
a.inflate_flush(F,G);G=d,K--,O|=(255&F.read_byte(Q++))<<P,P+=8}k+=O&j[H],O>>=H,P-=H,m=r,c=i,l=t,b=x;case x:for(H=m;P<H;){
if(0===K)return a.bitb=O,a.bitk=P,F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G)
;G=d,K--,O|=(255&F.read_byte(Q++))<<P,P+=8}if(I=3*(l+(O&j[H])),O>>=c[I+1],P-=c[I+1],J=c[I],16&J){o=15&J,p=c[I+2],b=y;break}
if(!(64&J)){m=J,l=I/3+c[I+2];break}return b=D,F.msg="invalid distance code",G=g,a.bitb=O,a.bitk=P,F.avail_in=K,
F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);case y:for(H=o;P<H;){if(0===K)return a.bitb=O,
a.bitk=P,F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);G=d,K--,
O|=(255&F.read_byte(Q++))<<P,P+=8}p+=O&j[H],O>>=H,P-=H,b=z;case z:for(N=L-p;N<0;)N+=a.end;for(;0!==k;){
if(0===M&&(L==a.end&&0!==a.read&&(L=0,M=L<a.read?a.read-L-1:a.end-L),0===M&&(a.write=L,G=a.inflate_flush(F,G),L=a.write,
M=L<a.read?a.read-L-1:a.end-L,L==a.end&&0!==a.read&&(L=0,M=L<a.read?a.read-L-1:a.end-L),0===M)))return a.bitb=O,a.bitk=P,
F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);a.win[L++]=a.win[N++],M--,
N==a.end&&(N=0),k--}b=u;break;case A:if(0===M&&(L==a.end&&0!==a.read&&(L=0,M=L<a.read?a.read-L-1:a.end-L),0===M&&(a.write=L,
G=a.inflate_flush(F,G),L=a.write,M=L<a.read?a.read-L-1:a.end-L,L==a.end&&0!==a.read&&(L=0,M=L<a.read?a.read-L-1:a.end-L),
0===M)))return a.bitb=O,a.bitk=P,F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G)
;G=d,a.win[L++]=n,M--,b=u;break;case B:if(P>7&&(P-=8,K++,Q--),a.write=L,G=a.inflate_flush(F,G),L=a.write,
M=L<a.read?a.read-L-1:a.end-L,a.read!=a.write)return a.bitb=O,a.bitk=P,F.avail_in=K,F.total_in+=Q-F.next_in_index,
F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);b=C;case C:return G=e,a.bitb=O,a.bitk=P,F.avail_in=K,
F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);case D:return G=g,a.bitb=O,a.bitk=P,F.avail_in=K,
F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G);default:return G=f,a.bitb=O,a.bitk=P,
F.avail_in=K,F.total_in+=Q-F.next_in_index,F.next_in_index=Q,a.write=L,a.inflate_flush(F,G)}},a.free=function(){}}
const F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=0,H=1,I=2,J=3,K=4,L=5,M=6,N=7,O=8,P=9;function Q(a,b){const c=this
;let h,l=G,m=0,n=0,o=0;const p=[0],q=[0],r=new E;let s=0,u=new Int32Array(3*k);const v=new t;c.bitk=0,c.bitb=0,
c.win=new Uint8Array(b),c.end=b,c.read=0,c.write=0,c.reset=function(a,b){b&&(b[0]=0),l==M&&r.free(a),l=G,c.bitk=0,c.bitb=0,
c.read=c.write=0},c.reset(a,null),c.inflate_flush=function(a,b){let e,f,g;return f=a.next_out_index,g=c.read,
e=(g<=c.write?c.write:c.end)-g,e>a.avail_out&&(e=a.avail_out),0!==e&&b==i&&(b=d),a.avail_out-=e,a.total_out+=e,
a.next_out.set(c.win.subarray(g,g+e),f),f+=e,g+=e,g==c.end&&(g=0,c.write==c.end&&(c.write=0),e=c.write-g,
e>a.avail_out&&(e=a.avail_out),0!==e&&b==i&&(b=d),a.avail_out-=e,a.total_out+=e,a.next_out.set(c.win.subarray(g,g+e),f),f+=e,
g+=e),a.next_out_index=f,c.read=g,b},c.proc=function(a,b){let i,k,w,x,y,z,A,B;for(x=a.next_in_index,y=a.avail_in,k=c.bitb,
w=c.bitk,z=c.write,A=z<c.read?c.read-z-1:c.end-z;;){let C,D,E,Q,R,S,T,U;switch(l){case G:for(;w<3;){if(0===y)return c.bitb=k,
c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);b=d,y--,
k|=(255&a.read_byte(x++))<<w,w+=8}switch(i=7&k,s=1&i,i>>>1){case 0:k>>>=3,w-=3,i=7&w,k>>>=i,w-=i,l=H;break;case 1:C=[],D=[],
E=[[]],Q=[[]],t.inflate_trees_fixed(C,D,E,Q),r.init(C[0],D[0],E[0],0,Q[0],0),k>>>=3,w-=3,l=M;break;case 2:k>>>=3,w-=3,l=J;break
;case 3:return k>>>=3,w-=3,l=P,a.msg="invalid block type",b=g,c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,
a.next_in_index=x,c.write=z,c.inflate_flush(a,b)}break;case H:for(;w<32;){if(0===y)return c.bitb=k,c.bitk=w,a.avail_in=y,
a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);b=d,y--,k|=(255&a.read_byte(x++))<<w,w+=8}
if((~k>>>16&65535)!=(65535&k))return l=P,a.msg="invalid stored block lengths",b=g,c.bitb=k,c.bitk=w,a.avail_in=y,
a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);m=65535&k,k=w=0,l=0!==m?I:0!==s?N:G;break;case I:
if(0===y)return c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b)
;if(0===A&&(z==c.end&&0!==c.read&&(z=0,A=z<c.read?c.read-z-1:c.end-z),0===A&&(c.write=z,b=c.inflate_flush(a,b),z=c.write,
A=z<c.read?c.read-z-1:c.end-z,z==c.end&&0!==c.read&&(z=0,A=z<c.read?c.read-z-1:c.end-z),0===A)))return c.bitb=k,c.bitk=w,
a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);if(b=d,i=m,i>y&&(i=y),i>A&&(i=A),
c.win.set(a.read_buf(x,i),z),x+=i,y-=i,z+=i,A-=i,0!=(m-=i))break;l=0!==s?N:G;break;case J:for(;w<14;){if(0===y)return c.bitb=k,
c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);b=d,y--,
k|=(255&a.read_byte(x++))<<w,w+=8}if(n=i=16383&k,(31&i)>29||(i>>5&31)>29)return l=P,a.msg="too many length or distance symbols",
b=g,c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b)
;if(i=258+(31&i)+(i>>5&31),!h||h.length<i)h=[];else for(B=0;B<i;B++)h[B]=0;k>>>=14,w-=14,o=0,l=K;case K:for(;o<4+(n>>>10);){
for(;w<3;){if(0===y)return c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,
c.inflate_flush(a,b);b=d,y--,k|=(255&a.read_byte(x++))<<w,w+=8}h[F[o++]]=7&k,k>>>=3,w-=3}for(;o<19;)h[F[o++]]=0;if(p[0]=7,
i=v.inflate_trees_bits(h,p,q,u,a),i!=d)return(b=i)==g&&(h=null,l=P),c.bitb=k,c.bitk=w,a.avail_in=y,
a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);o=0,l=L;case L:for(;i=n,
!(o>=258+(31&i)+(i>>5&31));){let e,f;for(i=p[0];w<i;){if(0===y)return c.bitb=k,c.bitk=w,a.avail_in=y,
a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);b=d,y--,k|=(255&a.read_byte(x++))<<w,w+=8}
if(i=u[3*(q[0]+(k&j[i]))+1],f=u[3*(q[0]+(k&j[i]))+2],f<16)k>>>=i,w-=i,h[o++]=f;else{for(B=18==f?7:f-14,e=18==f?11:3;w<i+B;){
if(0===y)return c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b)
;b=d,y--,k|=(255&a.read_byte(x++))<<w,w+=8}if(k>>>=i,w-=i,e+=k&j[B],k>>>=B,w-=B,B=o,i=n,
B+e>258+(31&i)+(i>>5&31)||16==f&&B<1)return h=null,l=P,a.msg="invalid bit length repeat",b=g,c.bitb=k,c.bitk=w,a.avail_in=y,
a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);f=16==f?h[B-1]:0;do{h[B++]=f}while(0!=--e);o=B}}
if(q[0]=-1,R=[],S=[],T=[],U=[],R[0]=9,S[0]=6,i=n,i=v.inflate_trees_dynamic(257+(31&i),1+(i>>5&31),h,R,S,T,U,u,a),
i!=d)return i==g&&(h=null,l=P),b=i,c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,
c.inflate_flush(a,b);r.init(R[0],S[0],u,T[0],u,U[0]),l=M;case M:if(c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,
a.next_in_index=x,c.write=z,(b=r.proc(c,a,b))!=e)return c.inflate_flush(a,b);if(b=d,r.free(a),x=a.next_in_index,y=a.avail_in,
k=c.bitb,w=c.bitk,z=c.write,A=z<c.read?c.read-z-1:c.end-z,0===s){l=G;break}l=N;case N:if(c.write=z,b=c.inflate_flush(a,b),
z=c.write,A=z<c.read?c.read-z-1:c.end-z,c.read!=c.write)return c.bitb=k,c.bitk=w,a.avail_in=y,a.total_in+=x-a.next_in_index,
a.next_in_index=x,c.write=z,c.inflate_flush(a,b);l=O;case O:return b=e,c.bitb=k,c.bitk=w,a.avail_in=y,
a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);case P:return b=g,c.bitb=k,c.bitk=w,a.avail_in=y,
a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b);default:return b=f,c.bitb=k,c.bitk=w,
a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,c.write=z,c.inflate_flush(a,b)}}},c.free=function(a){
c.reset(a,null),c.win=null,u=null},c.set_dictionary=function(a,b,d){c.win.set(a.subarray(b,b+d),0),c.read=c.write=d},
c.sync_point=function(){return l==H?1:0}}const R=13,S=[0,0,255,255];function T(){const a=this;function b(a){
return a&&a.istate?(a.total_in=a.total_out=0,a.msg=null,a.istate.mode=7,a.istate.blocks.reset(a,null),d):f}a.mode=0,a.method=0,
a.was=[0],a.need=0,a.marker=0,a.wbits=0,a.inflateEnd=function(b){return a.blocks&&a.blocks.free(b),a.blocks=null,d},
a.inflateInit=function(c,e){return c.msg=null,a.blocks=null,e<8||e>15?(a.inflateEnd(c),f):(a.wbits=e,
c.istate.blocks=new Q(c,1<<e),b(c),d)},a.inflate=function(a,b){let c,h;if(!a||!a.istate||!a.next_in)return f;const j=a.istate
;for(b=4==b?i:d,c=i;;)switch(j.mode){case 0:if(0===a.avail_in)return c;if(c=b,a.avail_in--,a.total_in++,
8!=(15&(j.method=a.read_byte(a.next_in_index++)))){j.mode=R,a.msg="unknown compression method",j.marker=5;break}
if(8+(j.method>>4)>j.wbits){j.mode=R,a.msg="invalid win size",j.marker=5;break}j.mode=1;case 1:if(0===a.avail_in)return c
;if(c=b,a.avail_in--,a.total_in++,h=255&a.read_byte(a.next_in_index++),((j.method<<8)+h)%31!=0){j.mode=R,
a.msg="incorrect header check",j.marker=5;break}if(!(32&h)){j.mode=7;break}j.mode=2;case 2:if(0===a.avail_in)return c;c=b,
a.avail_in--,a.total_in++,j.need=(255&a.read_byte(a.next_in_index++))<<24&4278190080,j.mode=3;case 3:if(0===a.avail_in)return c
;c=b,a.avail_in--,a.total_in++,j.need+=(255&a.read_byte(a.next_in_index++))<<16&16711680,j.mode=4;case 4:
if(0===a.avail_in)return c;c=b,a.avail_in--,a.total_in++,j.need+=(255&a.read_byte(a.next_in_index++))<<8&65280,j.mode=5;case 5:
return 0===a.avail_in?c:(c=b,a.avail_in--,a.total_in++,j.need+=255&a.read_byte(a.next_in_index++),j.mode=6,2);case 6:
return j.mode=R,a.msg="need dictionary",j.marker=0,f;case 7:if(c=j.blocks.proc(a,c),c==g){j.mode=R,j.marker=0;break}
if(c==d&&(c=b),c!=e)return c;c=b,j.blocks.reset(a,j.was),j.mode=12;case 12:return a.avail_in=0,e;case R:return g;default:
return f}},a.inflateSetDictionary=function(a,b,c){let e=0,g=c;if(!a||!a.istate||6!=a.istate.mode)return f;const h=a.istate
;return g>=1<<h.wbits&&(g=(1<<h.wbits)-1,e=c-g),h.blocks.set_dictionary(b,e,g),h.mode=7,d},a.inflateSync=function(a){
let c,e,h,j,k;if(!a||!a.istate)return f;const l=a.istate;if(l.mode!=R&&(l.mode=R,l.marker=0),0===(c=a.avail_in))return i
;for(e=a.next_in_index,h=l.marker;0!==c&&h<4;)a.read_byte(e)==S[h]?h++:h=0!==a.read_byte(e)?0:4-h,e++,c--
;return a.total_in+=e-a.next_in_index,a.next_in_index=e,a.avail_in=c,l.marker=h,4!=h?g:(j=a.total_in,k=a.total_out,b(a),
a.total_in=j,a.total_out=k,l.mode=7,d)},a.inflateSyncPoint=function(a){
return a&&a.istate&&a.istate.blocks?a.istate.blocks.sync_point():f}}function U(){}function V(a){
const b=new U,c=a&&a.chunkSize?Math.floor(2*a.chunkSize):131072,f=l,g=new Uint8Array(c);let h=!1;b.inflateInit(),b.next_out=g,
this.append=function(a,j){const k=[];let l,m,n=0,o=0,p=0;if(0!==a.length){b.next_in_index=0,b.next_in=a,b.avail_in=a.length;do{
if(b.next_out_index=0,b.avail_out=c,0!==b.avail_in||h||(b.next_in_index=0,h=!0),l=b.inflate(f),h&&l===i){
if(0!==b.avail_in)throw new Error("inflating: bad input")}else if(l!==d&&l!==e)throw new Error("inflating: "+b.msg)
;if((h||l===e)&&b.avail_in===a.length)throw new Error("inflating: bad input")
;b.next_out_index&&(b.next_out_index===c?k.push(new Uint8Array(g)):k.push(g.subarray(0,b.next_out_index))),p+=b.next_out_index,
j&&b.next_in_index>0&&b.next_in_index!=n&&(j(b.next_in_index),n=b.next_in_index)}while(b.avail_in>0||0===b.avail_out)
;return k.length>1?(m=new Uint8Array(p),k.forEach((function(a){m.set(a,o),o+=a.length
}))):m=k[0]?new Uint8Array(k[0]):new Uint8Array,m}},this.flush=function(){b.inflateEnd()}}U.prototype={inflateInit(a){
const b=this;return b.istate=new T,a||(a=15),b.istate.inflateInit(b,a)},inflate(a){const b=this
;return b.istate?b.istate.inflate(b,a):f},inflateEnd(){const a=this;if(!a.istate)return f;const b=a.istate.inflateEnd(a)
;return a.istate=null,b},inflateSync(){const a=this;return a.istate?a.istate.inflateSync(a):f},inflateSetDictionary(a,b){
const c=this;return c.istate?c.istate.inflateSetDictionary(c,a,b):f},read_byte(a){return this.next_in[a]},read_buf(a,b){
return this.next_in.subarray(a,a+b)}}},55330:function(a,b,c){"use strict";c.d(b,{Lr:function(){return j},Mq:function(){return i
},cY:function(){return g},rL:function(){return e},yT:function(){return h}});const d={concat(a,b){
if(0===a.length||0===b.length)return a.concat(b);const c=a[a.length-1],e=d.getPartial(c)
;return 32===e?a.concat(b):d._shiftRight(b,e,0|c,a.slice(0,a.length-1))},bitLength(a){const b=a.length;if(0===b)return 0
;const c=a[b-1];return 32*(b-1)+d.getPartial(c)},clamp(a,b){if(32*a.length<b)return a
;const c=(a=a.slice(0,Math.ceil(b/32))).length;return b&=31,c>0&&b&&(a[c-1]=d.partial(b,a[c-1]&2147483648>>b-1,1)),a},
partial:(a,b,c)=>32===a?b:(c?0|b:b<<32-a)+1099511627776*a,getPartial:a=>Math.round(a/1099511627776)||32,_shiftRight(a,b,c,e){
for(void 0===e&&(e=[]);b>=32;b-=32)e.push(c),c=0;if(0===b)return e.concat(a);for(let d=0;d<a.length;d++)e.push(c|a[d]>>>b),
c=a[d]<<32-b;const f=a.length?a[a.length-1]:0,g=d.getPartial(f);return e.push(d.partial(b+g&31,b+g>32?c:e.pop(),1)),e}},e={
bytes:{fromBits(a){const b=d.bitLength(a)/8,c=new Uint8Array(b);let e;for(let d=0;d<b;d++)3&d||(e=a[d/4]),c[d]=e>>>24,e<<=8
;return c},toBits(a){const b=[];let c,e=0;for(c=0;c<a.length;c++)e=e<<8|a[c],3&~c||(b.push(e),e=0)
;return 3&c&&b.push(d.partial(8*(3&c),e)),b}}},f={sha1:class{constructor(a){const b=this;b.blockSize=512,
b._init=[1732584193,4023233417,2562383102,271733878,3285377520],b._key=[1518500249,1859775393,2400959708,3395469782],
a?(b._h=a._h.slice(0),b._buffer=a._buffer.slice(0),b._length=a._length):b.reset()}reset(){const a=this
;return a._h=a._init.slice(0),a._buffer=[],a._length=0,a}update(a){const b=this;"string"==typeof a&&(a=e.utf8String.toBits(a))
;const c=b._buffer=d.concat(b._buffer,a),f=b._length,g=b._length=f+d.bitLength(a)
;if(g>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const h=new Uint32Array(c);let i=0
;for(let d=b.blockSize+f-(b.blockSize+f&b.blockSize-1);d<=g;d+=b.blockSize)b._block(h.subarray(16*i,16*(i+1))),i+=1
;return c.splice(0,16*i),b}finalize(){const a=this;let b=a._buffer;const c=a._h;b=d.concat(b,[d.partial(1,1)])
;for(let d=b.length+2;15&d;d++)b.push(0);for(b.push(Math.floor(a._length/4294967296)),
b.push(0|a._length);b.length;)a._block(b.splice(0,16));return a.reset(),c}_f(a,b,c,d){
return a<=19?b&c|~b&d:a<=39?b^c^d:a<=59?b&c|b&d|c&d:a<=79?b^c^d:void 0}_S(a,b){return b<<a|b>>>32-a}_block(a){
const b=this,c=b._h,d=Array(80);for(let j=0;j<16;j++)d[j]=a[j];let e=c[0],f=c[1],g=c[2],h=c[3],i=c[4];for(let j=0;j<=79;j++){
j>=16&&(d[j]=b._S(1,d[j-3]^d[j-8]^d[j-14]^d[j-16]));const a=b._S(5,e)+b._f(j,f,g,h)+i+d[j]+b._key[Math.floor(j/20)]|0;i=h,h=g,
g=b._S(30,f),f=e,e=a}c[0]=c[0]+e|0,c[1]=c[1]+f|0,c[2]=c[2]+g|0,c[3]=c[3]+h|0,c[4]=c[4]+i|0}}},g={aes:class{constructor(a){
const b=this;b._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],b._tables[0][0][0]||b._precompute()
;const c=b._tables[0][4],d=b._tables[1],e=a.length;let f,g,h,i=1;if(4!==e&&6!==e&&8!==e)throw new Error("invalid aes key size")
;for(b._key=[g=a.slice(0),h=[]],f=e;f<4*e+28;f++){let a=g[f-1]
;(f%e==0||8===e&&f%e==4)&&(a=c[a>>>24]<<24^c[a>>16&255]<<16^c[a>>8&255]<<8^c[255&a],f%e==0&&(a=a<<8^a>>>24^i<<24,
i=i<<1^283*(i>>7))),g[f]=g[f-e]^a}for(let j=0;f;j++,f--){const a=g[3&j?f:f-4]
;h[j]=f<=4||j<4?a:d[0][c[a>>>24]]^d[1][c[a>>16&255]]^d[2][c[a>>8&255]]^d[3][c[255&a]]}}encrypt(a){return this._crypt(a,0)}
decrypt(a){return this._crypt(a,1)}_precompute(){const a=this._tables[0],b=this._tables[1],c=a[4],d=b[4],e=[],f=[];let g,h,i,j
;for(let k=0;k<256;k++)f[(e[k]=k<<1^283*(k>>7))^k]=k;for(let k=g=0;!c[k];k^=h||1,g=f[g]||1){let f=g^g<<1^g<<2^g<<3^g<<4
;f=f>>8^255&f^99,c[k]=f,d[f]=k,j=e[i=e[h=e[k]]];let l=16843009*j^65537*i^257*h^16843008*k,m=257*e[f]^16843008*f
;for(let c=0;c<4;c++)a[c][k]=m=m<<24^m>>>8,b[c][f]=l=l<<24^l>>>8}for(let k=0;k<5;k++)a[k]=a[k].slice(0),b[k]=b[k].slice(0)}
_crypt(a,b){if(4!==a.length)throw new Error("invalid aes block size")
;const c=this._key[b],d=c.length/4-2,e=[0,0,0,0],f=this._tables[b],g=f[0],h=f[1],i=f[2],j=f[3],k=f[4]
;let l,m,n,o=a[0]^c[0],p=a[b?3:1]^c[1],q=a[2]^c[2],r=a[b?1:3]^c[3],s=4
;for(let t=0;t<d;t++)l=g[o>>>24]^h[p>>16&255]^i[q>>8&255]^j[255&r]^c[s],m=g[p>>>24]^h[q>>16&255]^i[r>>8&255]^j[255&o]^c[s+1],
n=g[q>>>24]^h[r>>16&255]^i[o>>8&255]^j[255&p]^c[s+2],r=g[r>>>24]^h[o>>16&255]^i[p>>8&255]^j[255&q]^c[s+3],s+=4,o=l,p=m,q=n
;for(let t=0;t<4;t++)e[b?3&-t:t]=k[o>>>24]<<24^k[p>>16&255]<<16^k[q>>8&255]<<8^k[255&r]^c[s++],l=o,o=p,p=q,q=r,r=l;return e}}
},h={getRandomValues(a){const b=new Uint32Array(a.buffer),c=a=>{let b=987654321;const c=4294967295;return function(){
b=36969*(65535&b)+(b>>16)&c;return(((b<<16)+(a=18e3*(65535&a)+(a>>16)&c)&c)/4294967296+.5)*(Math.random()>.5?1:-1)}}
;for(let d,e=0;e<a.length;e+=4){const a=c(4294967296*(d||Math.random()));d=987654071*a(),b[e/4]=4294967296*a()|0}return a}},i={
ctrGladman:class{constructor(a,b){this._prf=a,this._initIv=b,this._iv=b}reset(){this._iv=this._initIv}update(a){
return this.calculate(this._prf,a,this._iv)}incWord(a){if(255&~(a>>24))a+=1<<24;else{let b=a>>16&255,c=a>>8&255,d=255&a
;255===b?(b=0,255===c?(c=0,255===d?d=0:++d):++c):++b,a=0,a+=b<<16,a+=c<<8,a+=d}return a}incCounter(a){
0===(a[0]=this.incWord(a[0]))&&(a[1]=this.incWord(a[1]))}calculate(a,b,c){let e;if(!(e=b.length))return[];const f=d.bitLength(b)
;for(let d=0;d<e;d+=4){this.incCounter(c);const e=a.encrypt(c);b[d]^=e[0],b[d+1]^=e[1],b[d+2]^=e[2],b[d+3]^=e[3]}
return d.clamp(b,f)}}},j={importKey:a=>new j.hmacSha1(e.bytes.toBits(a)),pbkdf2(a,b,c,f){if(c=c||1e4,
f<0||c<0)throw new Error("invalid params to pbkdf2");const g=1+(f>>5)<<2;let h,i,j,k,l
;const m=new ArrayBuffer(g),n=new DataView(m);let o=0;const p=d;for(b=e.bytes.toBits(b),l=1;o<(g||1);l++){
for(h=i=a.encrypt(p.concat(b,[l])),j=1;j<c;j++)for(i=a.encrypt(i),k=0;k<i.length;k++)h[k]^=i[k]
;for(j=0;o<(g||1)&&j<h.length;j++)n.setInt32(o,h[j]),o+=4}return m.slice(0,f/8)},hmacSha1:class{constructor(a){
const b=this,c=b._hash=f.sha1,d=[[],[]];b._baseHash=[new c,new c];const e=b._baseHash[0].blockSize/32
;a.length>e&&(a=(new c).update(a).finalize());for(let f=0;f<e;f++)d[0][f]=909522486^a[f],d[1][f]=1549556828^a[f]
;b._baseHash[0].update(d[0]),b._baseHash[1].update(d[1]),b._resultHash=new c(b._baseHash[0])}reset(){const a=this
;a._resultHash=new a._hash(a._baseHash[0]),a._updated=!1}update(a){this._updated=!0,this._resultHash.update(a)}digest(){
const a=this,b=a._resultHash.finalize(),c=new a._hash(a._baseHash[1]).update(b).finalize();return a.reset(),c}encrypt(a){
if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(a),this.digest(a)}}}},
88209:function(a,b,c){"use strict";c.d(b,{Bu:function(){return h},UY:function(){return j},mV:function(){return i},wP:function(){
return g}});var d=c(45959),e=c(55330)
;const f=typeof crypto!=d.AV&&typeof crypto.getRandomValues==d.On,g="Invalid password",h="Invalid signature",i="zipjs-abort-check-password"
;function j(a){return f?crypto.getRandomValues(a):e.yT.getRandomValues(a)}},71548:function(a,b,c){"use strict";c.d(b,{
u:function(){return e}});var d=c(13357);class e extends TransformStream{constructor(){let a;const b=new d.s;super({
transform(a,c){b.append(a),c.enqueue(a)},flush(){const c=new Uint8Array(4);new DataView(c.buffer).setUint32(0,b.get()),a.value=c
}}),a=this}}},44976:function(a,b,c){"use strict";c.d(b,{a:function(){return d}});class d{constructor(a){
return class extends TransformStream{constructor(b,c){const d=new a(c);super({transform(a,b){b.enqueue(d.append(a))},flush(a){
const b=d.flush();b&&a.enqueue(b)}})}}}}},69562:function(a,b,c){"use strict";c.d(b,{S4:function(){return h},Uj:function(){
return g}});var d=c(13357),e=c(88209);const f=12;class g extends TransformStream{
constructor({password:a,passwordVerification:b,checkPasswordOnly:c}){super({start(){Object.assign(this,{password:a,
passwordVerification:b}),k(this,a)},transform(a,b){const d=this;if(d.password){const b=i(d,a.subarray(0,f));if(d.password=null,
b[11]!=d.passwordVerification)throw new Error(e.wP);a=a.subarray(f)}c?b.error(new Error(e.mV)):b.enqueue(i(d,a))}})}}
class h extends TransformStream{constructor({password:a,passwordVerification:b}){super({start(){Object.assign(this,{password:a,
passwordVerification:b}),k(this,a)},transform(a,b){const c=this;let d,g;if(c.password){c.password=null;const b=(0,
e.UY)(new Uint8Array(f));b[11]=c.passwordVerification,d=new Uint8Array(a.length+b.length),d.set(j(c,b),0),g=f
}else d=new Uint8Array(a.length),g=0;d.set(j(c,a),g),b.enqueue(d)}})}}function i(a,b){const c=new Uint8Array(b.length)
;for(let d=0;d<b.length;d++)c[d]=m(a)^b[d],l(a,c[d]);return c}function j(a,b){const c=new Uint8Array(b.length)
;for(let d=0;d<b.length;d++)c[d]=m(a)^b[d],l(a,b[d]);return c}function k(a,b){const c=[305419896,591751049,878082192]
;Object.assign(a,{keys:c,crcKey0:new d.s(c[0]),crcKey2:new d.s(c[2])});for(let d=0;d<b.length;d++)l(a,b.charCodeAt(d))}
function l(a,b){let[c,d,e]=a.keys;a.crcKey0.append([b]),c=~a.crcKey0.get(),d=o(Math.imul(o(d+n(c)),134775813)+1),
a.crcKey2.append([d>>>24]),e=~a.crcKey2.get(),a.keys=[c,d,e]}function m(a){const b=2|a.keys[2];return n(Math.imul(b,1^b)>>>8)}
function n(a){return 255&a}function o(a){return 4294967295&a}},79467:function(a,b,c){"use strict";c.d(b,{C_:function(){return i
},Oc:function(){return j},mV:function(){return g.mV}});var d=c(71548),e=c(68654),f=c(69562),g=c(88209);const h="deflate-raw"
;class i extends TransformStream{constructor(a,{chunkSize:b,CompressionStream:c,CompressionStreamNative:g}){super({})
;const{compressed:h,encrypted:i,useCompressionStream:j,zipCrypto:o,signed:p,level:q}=a,r=this;let s,t,u=k(super.readable)
;i&&!o||!p||(s=new d.u,u=n(u,s)),h&&(u=m(u,j,{level:q,chunkSize:b},g,c)),i&&(o?u=n(u,new f.S4(a)):(t=new e.ho(a),u=n(u,t))),
l(r,u,(()=>{let a;i&&!o&&(a=t.signature),i&&!o||!p||(a=new DataView(s.value.buffer).getUint32(0)),r.signature=a}))}}
class j extends TransformStream{constructor(a,{chunkSize:b,DecompressionStream:c,DecompressionStreamNative:h}){super({})
;const{zipCrypto:i,encrypted:j,signed:o,signature:p,compressed:q,useCompressionStream:r}=a;let s,t,u=k(super.readable)
;j&&(i?u=n(u,new f.Uj(a)):(t=new e.LL(a),u=n(u,t))),q&&(u=m(u,r,{chunkSize:b},h,c)),j&&!i||!o||(s=new d.u,u=n(u,s)),
l(this,u,(()=>{if((!j||i)&&o){const a=new DataView(s.value.buffer);if(p!=a.getUint32(0,!1))throw new Error(g.Bu)}}))}}
function k(a){return n(a,new TransformStream({transform(a,b){a&&a.length&&b.enqueue(a)}}))}function l(a,b,c){
b=n(b,new TransformStream({flush:c})),Object.defineProperty(a,"readable",{get:()=>b})}function m(a,b,c,d,e){try{
a=n(a,new(b&&d?d:e)(h,c))}catch(f){if(!b)return a;try{a=n(a,new e(h,c))}catch(f){return a}}return a}function n(a,b){
return a.pipeThrough(b)}},73587:function(a,b,c){"use strict";c.d(b,{G:function(){return f}})
;const d="\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""),e=256==d.length
;function f(a){if(e){let b="";for(let c=0;c<a.length;c++)b+=d[a[c]];return b}return(new TextDecoder).decode(a)}},
50237:function(a,b,c){"use strict";c.d(b,{g:function(){return e}});var d=c(73587);function e(a,b){
return b&&"cp437"==b.trim().toLowerCase()?(0,d.G)(a):new TextDecoder(b).decode(a)}},79720:function(a,b,c){"use strict"},
39221:function(a,b,c){"use strict";c.d(b,{w:function(){return e}});var d=c(45959);function e(a){if(typeof TextEncoder==d.AV){
a=unescape(encodeURIComponent(a));const b=new Uint8Array(a.length);for(let c=0;c<b.length;c++)b[c]=a.charCodeAt(c);return b}
return(new TextEncoder).encode(a)}},26756:function(a,b,c){"use strict";c.d(b,{HK:function(){return s},Hq:function(){return p},
Kq:function(){return f},Nz:function(){return n},Pt:function(){return k},Ri:function(){return g},W5:function(){return i},
YQ:function(){return q},dY:function(){return h},gk:function(){return d},nX:function(){return e},q_:function(){return o},
uD:function(){return m},wl:function(){return j},xI:function(){return l}})
;const d="filename",e="rawFilename",f="comment",g="rawComment",h="uncompressedSize",i="compressedSize",j="offset",k="diskNumberStart",l="lastModDate",m="rawLastModDate",n="lastAccessDate",o="rawLastAccessDate",p="creationDate",q="rawCreationDate",r=[d,e,i,h,l,m,f,g,n,p,j,k,k,"internalFileAttribute","externalFileAttribute","msDosCompatible","zip64","directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"]
;class s{constructor(a){r.forEach((b=>this[b]=a[b]))}}},98333:function(a,b,c){"use strict";c.d(b,{zg:function(){return s}})
;var d=c(45959),e=c(11236),f=c(94675),g=c(4220),h=c(50237),i=c(13357),j=c(26756)
;const k="File format is not recognized",l="Zip64 extra field not found",m="Compression method not supported",n="Split zip file",o="utf-8",p="cp437",q=[[j.dY,d.ac],[j.W5,d.ac],[j.wl,d.ac],[j.Pt,d.gk]],r={
[d.gk]:{getValue:C,bytes:4},[d.ac]:{getValue:D,bytes:8}};class s{constructor(a,b={}){Object.assign(this,{reader:(0,g.Y7)(a),
options:b,config:(0,e.D0)()})}async*getEntriesGenerator(a={}){const b=this;let{reader:c}=b;const{config:f}=b;if(await(0,
g.ZD)(c),c.size!==d.HP&&c.readUint8Array||(c=new g.nZ(await new Response(c.readable).blob()),await(0,g.ZD)(c)),
c.size<d.Xn)throw new Error(k);c.chunkSize=(0,e.L3)(f);const i=await async function(a,b,c,d,e){const f=new Uint8Array(4)
;!function(a,b,c){a.setUint32(b,c,!0)}(E(f),0,b);const h=d+e;return await i(d)||await i(Math.min(h,c));async function i(b){
const e=c-b,h=await(0,g.Ul)(a,e,b);for(let a=h.length-d;a>=0;a--)if(h[a]==f[0]&&h[a+1]==f[1]&&h[a+2]==f[2]&&h[a+3]==f[3])return{
offset:e+a,buffer:h.slice(a,a+d).buffer}}}(c,d.fB,c.size,d.Xn,16*d.gk);if(!i){throw C(E(await(0,
g.Ul)(c,0,4)))==d.ZP?new Error(n):new Error("End of central directory not found")}const l=E(i);let m=C(l,12),q=C(l,16)
;const r=i.offset,s=B(l,20),w=r+d.Xn+s;let y=B(l,4);const z=c.lastDiskNumber||0;let F=B(l,6),G=B(l,8),H=0,I=0
;if(q==d.ac||m==d.ac||G==d.gk||F==d.gk){const a=E(await(0,g.Ul)(c,i.offset-d.Yx,d.Yx));if(C(a,0)==d.OL){q=D(a,8);let b=await(0,
g.Ul)(c,q,d.zm,-1),e=E(b);const f=i.offset-d.Yx-d.zm;if(C(e,0)!=d.Tm&&q!=f){const a=q;q=f,H=q-a,b=await(0,g.Ul)(c,q,d.zm,-1),
e=E(b)}if(C(e,0)!=d.Tm)throw new Error("End of Zip64 central directory locator not found");y==d.gk&&(y=C(e,16)),
F==d.gk&&(F=C(e,20)),G==d.gk&&(G=D(e,32)),m==d.ac&&(m=D(e,40)),q-=m}}if(q>=c.size&&(H=c.size-q-m-d.Xn,q=c.size-m-d.Xn),
z!=y)throw new Error(n);if(q<0)throw new Error(k);let J=0,K=await(0,g.Ul)(c,q,m,F),L=E(K);if(m){const a=i.offset-m
;if(C(L,J)!=d.cC&&q!=a){const b=q;q=a,H+=q-b,K=await(0,g.Ul)(c,q,m,F),L=E(K)}}const M=i.offset-q-(c.lastDiskOffset||0)
;if(m!=M&&M>=0&&(m=M,K=await(0,g.Ul)(c,q,m,F),L=E(K)),q<0||q>=c.size)throw new Error(k)
;const N=x(b,a,"filenameEncoding"),O=x(b,a,"commentEncoding");for(let e=0;e<G;e++){const g=new t(c,f,b.options)
;if(C(L,J)!=d.cC)throw new Error("Central directory header not found");u(g,L,J+6)
;const i=Boolean(g.bitFlag.languageEncodingFlag),k=J+46,l=k+g.filenameLength,m=l+g.extraFieldLength,n=B(L,J+4),q=!0,r=K.subarray(k,l),s=B(L,J+32),w=m+s,y=K.subarray(m,w),z=i,D=i,E=q&&(A(L,J+38)&d.f)==d.f,F=C(L,J+42)+H
;Object.assign(g,{versionMadeBy:n,msDosCompatible:q,compressedSize:0,uncompressedSize:0,commentLength:s,directory:E,offset:F,
diskNumberStart:B(L,J+34),internalFileAttribute:B(L,J+36),externalFileAttribute:C(L,J+38),rawFilename:r,filenameUTF8:z,
commentUTF8:D,rawExtraField:K.subarray(l,m)});const M=x(b,a,"decodeText")||h.g,P=z?o:N||p,Q=D?o:O||p;let S=M(r,P)
;S===d.HP&&(S=(0,h.g)(r,P));let T=M(y,Q);T===d.HP&&(T=(0,h.g)(y,Q)),Object.assign(g,{rawComment:y,filename:S,comment:T,
directory:E||S.endsWith(d.vJ)}),I=Math.max(F,I),await v(g,g,L,J+6);const U=new j.HK(g);U.getData=(a,b)=>g.getData(a,U,b),J=w
;const{onprogress:V}=a;if(V)try{await V(e+1,G,new j.HK(g))}catch(R){}yield U}
const P=x(b,a,"extractPrependedData"),Q=x(b,a,"extractAppendedData");return P&&(b.prependedData=I>0?await(0,
g.Ul)(c,0,I):new Uint8Array),b.comment=s?await(0,g.Ul)(c,r+d.Xn,s):new Uint8Array,Q&&(b.appendedData=w<c.size?await(0,
g.Ul)(c,w,c.size-w):new Uint8Array),!0}async getEntries(a={}){const b=[]
;for await(const c of this.getEntriesGenerator(a))b.push(c);return b}async close(){}}class t{constructor(a,b,c){
Object.assign(this,{reader:a,config:b,options:c})}async getData(a,b,c={}){
const e=this,{reader:h,offset:i,diskNumberStart:j,extraFieldAES:k,compressionMethod:l,config:n,bitFlag:o,signature:p,rawLastModDate:q,uncompressedSize:r,compressedSize:s}=e,t=b.localDirectory={},w=E(await(0,
g.Ul)(h,i,30,j));let y=x(e,c,"password"),z=x(e,c,"rawPassword");if(y=y&&y.length&&y,z=z&&z.length&&z,
k&&k.originalCompressionMethod!=d.n8)throw new Error(m);if(l!=d.$F&&l!=d.FH)throw new Error(m)
;if(C(w,0)!=d.Gq)throw new Error("Local file header not found");u(t,w,4),t.rawExtraField=t.extraFieldLength?await(0,
g.Ul)(h,i+30+t.filenameLength,t.extraFieldLength,j):new Uint8Array,await v(e,t,w,4,!0),Object.assign(b,{
lastAccessDate:t.lastAccessDate,creationDate:t.creationDate});const A=e.encrypted&&t.encrypted,B=A&&!k;if(A){
if(!B&&k.strength===d.HP)throw new Error("Encryption method not supported")
;if(!y&&!z)throw new Error("File contains encrypted entry")}const D=i+30+t.filenameLength+t.extraFieldLength,F=s,G=h.readable
;Object.assign(G,{diskNumberStart:j,offset:D,size:F});const H=x(e,c,"signal"),I=x(e,c,"checkPasswordOnly")
;I&&(a=new WritableStream),a=(0,g.gD)(a),await(0,g.ZD)(a,r);const{writable:J}=a,{onstart:K,onprogress:L,onend:M}=c,N={options:{
codecType:f.Re,password:y,rawPassword:z,zipCrypto:B,encryptionStrength:k&&k.strength,signed:x(e,c,"checkSignature"),
passwordVerification:B&&(o.dataDescriptor?q>>>8&255:p>>>24&255),signature:p,compressed:0!=l,encrypted:A,
useWebWorkers:x(e,c,"useWebWorkers"),useCompressionStream:x(e,c,"useCompressionStream"),
transferStreams:x(e,c,"transferStreams"),checkPasswordOnly:I},config:n,streamOptions:{signal:H,size:F,onstart:K,onprogress:L,
onend:M}};let O=0;try{({outputSize:O}=await(0,f.WY)({readable:G,writable:J},N))}catch(P){if(!I||P.message!=f.mV)throw P}finally{
const a=x(e,c,"preventClose");J.size+=O,a||J.locked||await J.getWriter().close()}return I?d.HP:a.getData?a.getData():J}}
function u(a,b,c){const e=a.rawBitFlag=B(b,c+2),f=(e&d.hW)==d.hW,g=C(b,c+6);Object.assign(a,{encrypted:f,version:B(b,c),
bitFlag:{level:(e&d.PA)>>1,dataDescriptor:(e&d.dy)==d.dy,languageEncodingFlag:(e&d.Gy)==d.Gy},rawLastModDate:g,lastModDate:y(g),
filenameLength:B(b,c+22),extraFieldLength:B(b,c+24)})}async function v(a,b,c,e,f){
const{rawExtraField:g}=b,h=b.extraField=new Map,i=E(new Uint8Array(g));let k=0;try{for(;k<g.length;){const a=B(i,k),b=B(i,k+2)
;h.set(a,{type:a,data:g.slice(k+4,k+4+b)}),k+=4+b}}catch(x){}const m=B(c,e+4);Object.assign(b,{signature:C(c,e+10),
uncompressedSize:C(c,e+18),compressedSize:C(c,e+14)});const n=h.get(d.KR);n&&(!function(a,b){b.zip64=!0
;const c=E(a.data),d=q.filter((([a,c])=>b[a]==c));for(let e=0,f=0;e<d.length;e++){const[g,h]=d[e];if(b[g]==h){const d=r[h]
;b[g]=a[g]=d.getValue(c,f),f+=d.bytes}else if(a[g])throw new Error(l)}}(n,b),b.extraFieldZip64=n);const o=h.get(d.uV)
;o&&(await w(o,j.gk,j.nX,b,a),b.extraFieldUnicodePath=o);const p=h.get(d.AQ);p&&(await w(p,j.Kq,j.Ri,b,a),
b.extraFieldUnicodeComment=p);const s=h.get(d._q);s?(!function(a,b,c){const d=E(a.data),e=A(d,4);Object.assign(a,{
vendorVersion:A(d,0),vendorId:A(d,2),strength:e,originalCompressionMethod:c,compressionMethod:B(d,5)}),
b.compressionMethod=a.compressionMethod}(s,b,m),b.extraFieldAES=s):b.compressionMethod=m;const t=h.get(d.Ow);t&&(!function(a,b){
const c=E(a.data);let e,f=4;try{for(;f<a.data.length&&!e;){const b=B(c,f),g=B(c,f+2);b==d.g4&&(e=a.data.slice(f+4,f+4+g)),f+=4+g
}}catch(x){}try{if(e&&24==e.length){const c=E(e),d=c.getBigUint64(0,!0),f=c.getBigUint64(8,!0),g=c.getBigUint64(16,!0)
;Object.assign(a,{rawLastModDate:d,rawLastAccessDate:f,rawCreationDate:g});const h=z(d),i=z(f),j={lastModDate:h,
lastAccessDate:i,creationDate:z(g)};Object.assign(a,j),Object.assign(b,j)}}catch(x){}}(t,b),b.extraFieldNTFS=t)
;const u=h.get(d.$O);u&&(!function(a,b,c){const d=E(a.data),e=A(d,0),f=[],g=[];c?(1&~e||(f.push(j.xI),g.push(j.uD)),
2&~e||(f.push(j.Nz),g.push(j.q_)),4&~e||(f.push(j.Hq),g.push(j.YQ))):a.data.length>=5&&(f.push(j.xI),g.push(j.uD));let h=1
;f.forEach(((c,e)=>{if(a.data.length>=h+4){const f=C(d,h);b[c]=a[c]=new Date(1e3*f);const i=g[e];a[i]=f}h+=4}))}(u,b,f),
b.extraFieldExtendedTimestamp=u);const v=h.get(d.NF);v&&(b.extraFieldUSDZ=v)}async function w(a,b,c,d,e){
const f=E(a.data),g=new i.s;g.append(e[c]);const j=E(new Uint8Array(4));j.setUint32(0,g.get(),!0);const k=C(f,1)
;Object.assign(a,{version:A(f,0),[b]:(0,h.g)(a.data.subarray(5)),valid:!e.bitFlag.languageEncodingFlag&&k==C(j,0)}),
a.valid&&(d[b]=a[b],d[b+"UTF8"]=!0)}function x(a,b,c){return b[c]===d.HP?a.options[c]:b[c]}function y(a){
const b=(4294901760&a)>>16,c=65535&a;try{
return new Date(1980+((65024&b)>>9),((480&b)>>5)-1,31&b,(63488&c)>>11,(2016&c)>>5,2*(31&c),0)}catch(d){}}function z(a){
return new Date(Number(a/BigInt(1e4)-BigInt(116444736e5)))}function A(a,b){return a.getUint8(b)}function B(a,b){
return a.getUint16(b,!0)}function C(a,b){return a.getUint32(b,!0)}function D(a,b){return Number(a.getBigUint64(b,!0))}
function E(a){return new DataView(a.buffer)}},31209:function(a,b,c){"use strict";c(45959),c(11236),c(94675),c(4220),c(39221),
c(26756);new Uint8Array([7,0,2,0,65,69,3,0,0])},64026:function(a,b,c){"use strict";c.d(b,{$i:function(){return g.$i},
jK:function(){return f.jK},nZ:function(){return g.nZ},zg:function(){return h.zg}})
;var d=c(19265),e=c(41785),f=c(11236),g=(c(79720),c(94675),c(4220)),h=c(98333);c(31209);(0,f.jK)({Deflate:d.G,Inflate:e.E})}
},function(a){a.O(0,[612],(function(){return b=76752,a(a.s=b);var b}));a.O()}]);