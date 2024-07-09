// Copyright (C) 1999-2024 Siber Systems Inc. All Rights Reserved.
(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[474],{55695:function(){},99583:function(a,b,c){"use strict"
;var d=c(28376),e=c(18101),f=(c(55695),c(60954)),g=c(18540),h=c(53707),i=c(52965),j=c(5197),k=c(78440),l=c(4153);c(13117);(0,
k.uT)(async function(){const a=(0,g.Me)(),b=(0,h.G5)(),c=(0,h.i0)();try{await a.Init(null);const g=await(0,f.y)(a),h=await(0,
e.c)(a,g.options),k=a.storage,m=a.storage,n=(0,d.G)(g.data,g.service,(0,l.TT)(g.rfo),(0,
l.TT)(g.enterprise),g.sharing,g.backups,g.commands,g.options,g.settings,g.securityWarningsManager,g.usageInfo,g.policies,a,"dashboard",null,await b.GetPlatformOS(),c,k,m,(0,
i.c)(),(0,j.T)(),h.IsStandalone()),o=await n.Create();document.body.appendChild(o),n.OnAfterShow(),n.Focus()}catch(k){}
}(),"admin-center:Initialize")},49245:function(a,b,c){"use strict";c.d(b,{y:function(){return v}})
;var d=c(84117),e=c(55819),f=c(85557),g=c(87965),h=c(78749),i=c(53166),j=c(24532),k=c(87163),l=c(31173),m=c(63956),n=c(97490),o=c(32105),p=c(78440),q=c(4153),r=c(69893),s=c(95399),t=c(73863),u=(c(13117),
c(91764)._);function v(a,b,c,v,w,x,y,z,A){const B=a,C=b,D=c,E=v,F=w,G=x,H=y,I=A,J=A.LocalizeString;let K=!1,L=null;const M={}
;let N=null;const O=new Map;let P;const[Q,R]=(0,n.Uw)(""),[S,T]=(0,n.Uw)(1),[U,V]=(0,n.Uw)(null),W=(0,p.tG)()
;let X,Y=!1,Z=0,aa=0,ab=0,ac=0,ad=0,ae=0,af=0,ag=0,ah=0,ai=0,aj=0,ak=0;const[al,am]=(0,n.Uw)(null),[an,ao]=(0,n.Uw)(null),ap=(0,
p.tG)();let aq=0,ar=0,as=0,at=0,au=0,av=0,aw=0,ax=0,ay=0,az=0;const[aA,aB]=(0,n.Uw)(null),[aC,aD]=(0,n.Uw)(null),aE=(0,p.tG)()
;let aF,aG=!1;const aH=(0,p.E5)(!1);let aI=0,aJ=0,aK=0,aL=0,aM=0;const[aN,aO]=(0,n.Uw)(!0),[aP,aQ]=(0,n.Uw)(null),aR=(0,
p.tG)(),[aS,aT]=(0,n.Uw)(null),[aU,aV]=(0,n.Uw)(null),[aW,aX]=(0,n.Uw)(null),aY=(0,p.tG)(),[aZ,a0]=(0,n.Uw)(!0),[a1,a2]=(0,
n.Uw)(null),a3=(0,p.tG)(),a4=(0,p.tG)();let a5=null,a6=!0;return{Create:async function(){var a
;return R(null!==(a=await I.GetLanguageTag(null))&&void 0!==a?a:"en"),P=u(o.J2,{always_visible:!1,
class_name:"tab-view-dashboard tab-view hidden"},u("div",{className:"dashboard"},u("div",{className:"cards-list"
},a8(),ba(),bc(),z.IsCurrentUserAdmin(null)&&be(),z.IsCurrentUserAdmin(null)&&bf(),z.IsCurrentUserAdmin(null)&&bg()))),
I.onLanguageTagChange.Add(bk),P},OnAfterShow:function(){K||(a7(!1,!1,!1,!1),F.onEvent.Add(bi),G.onDataChanged.Add(bj),P.Init())
},OnBeforeHide:function(){L&&(L.Hide(0),L=null)},Focus:function(){},Dispose:function(){a4.Cancel(),W.Cancel(),ap.Cancel(),
aE.Cancel(),aR.Cancel(),aY.Cancel(),a3.Cancel(),F.onEvent.Remove(bi),G.onDataChanged.Remove(bj),
I.onLanguageTagChange.Remove(bk),P.UnInit()}};function a7(a,b,c,e){const g=a||b||c;if(!K||g||e)try{
z.IsCurrentUserAdmin(null)&&(function(a){a3.Start((async b=>{await async function(a,b){
if(K&&!a||!z.IsCurrentUserAdmin(null))return;a5=null;const c=await z.GetLicenseInfo(!1,b);if(!c.company)return;a2(c)
;let d="no-license";if(c.status)switch(d=c.status,d){case"active":if(c.expirationTime){const a=(0,
s.t2)(),b=Math.floor((c.expirationTime-a)/60/60/24);a5=b>=30?"buymore":"renew"}else a5="renew";break;case"expired":
case"trial-expired":case"trial":case"no-license":a5="buy"}}(a,b),a0(!1)}))}(a),function(a){aR.Start((async b=>{
await async function(a,b){var c,d;if(K&&!a||!z.IsCurrentUserAdmin(null))return;aQ(null)
;const e=await z.GetAccountInfo(!1,b),f=null!==(c=e.accountId)&&void 0!==c?c:"";if(!e.emailVerified)return;try{
const a=(await B.GetCompanyIntegrationSettings(f,b)).providers;if(!a||!a.length)return
;const c=null!==(d=a.find((a=>a.active)))&&void 0!==d?d:null;aQ(c)}catch(g){(0,r.au)(g)}}(a,b),aO(!1)}))}(e),function(a){
aY.Start((async b=>{try{await async function(a,b){var c;if(K&&!a||!z.IsCurrentUserAdmin(null))return;b.ThrowIfShouldStop()
;const e=await async function(a){const b=await z.GetCompanyGroups(!1,a),c={loginsCount:0,safenotesCount:0,identitiesCount:0,
bookmarksCount:0};if(!b.length)return c;for(const d of b){if(!d.securityStats)continue;const a=await(0,k.gP)(d.securityStats)
;c.loginsCount=c.loginsCount?c.loginsCount+(a.loginsCount||0):a.loginsCount||0,
c.safenotesCount=c.safenotesCount?c.safenotesCount+(a.safenotesCount||0):a.safenotesCount||0,
c.identitiesCount=c.identitiesCount?c.identitiesCount+(a.identitiesCount||0):a.identitiesCount||0,
c.bookmarksCount=c.bookmarksCount?c.bookmarksCount+(a.bookmarksCount||0):a.bookmarksCount||0}return c}(b)
;if(null!==(c=null==e?void 0:e.loginsCount)&&void 0!==c&&c){const a=await async function(a,b){var c,e,g,h;let i=0,j=0,k=0,l=0
;const m=await z.GetCompanyUsers(a,b);for(const f of m){const a=await(0,d.V1)(f.status,f.securityStats)
;a&&a.m_score&&(i+=null!==(c=a.m_logins)&&void 0!==c?c:0,j+=a.m_score*(null!==(e=a.m_logins)&&void 0!==e?e:0))}
const n=await z.GetCompanyGroups(a,b);for(const d of n){const a=await(0,f.Mv)(d.securityStats)
;a&&a.m_score&&(k+=null!==(g=null==a?void 0:a.m_logins)&&void 0!==g?g:0,
l+=(null==a?void 0:a.m_score)*(null!==(h=null==a?void 0:a.m_logins)&&void 0!==h?h:0))}
const o=i+k,p=j+l,q=0!==o?Math.round(p/o):0;return q}(!1,b);aX(a)}else aX(null)}(a,b)}catch(c){(0,r.au)(c)}}))}(g)),function(a){
W.Start((async b=>{try{await async function(a,b){if(K&&!a)return;let c=[],e=[];const f=await z.GetAccountInfo(!1,b);if(H){
const a=await H.GetValue("ac-dashboard-cached-info",{}),b=a.companyUsersCount||1;T(b),a6=b<=d.jA,Z=a.companyUsersBlocked||0,
aa=a.companyUsersInactive||0,ab=a.companyUsersInvited||0,ac=a.companyUsersSuspended||0,ad=a.companyUsersNotComplete||0,
ae=a.companyUsersScoreLow||0,af=a.companyUsersCompromised||0,ag=a.companyUsers2FA||0,ah=a.companyUsersScoreAverage||0,
ai=a.companyUsersAdmins||0,aj=a.companyUsersScoreGood||0,ak=a.companyUsersScoreExcellent||0,await k(Z),await l(ad),await m(ab),
await n(aa),await o(ai,!0),await p(ae),await q(af),await r(ag),await o(ai,!1),await s(ac),await t(ah),await u(aj),await v(ak),
c.length>0&&V(c),e.length>0&&aT(e)}c=[],e=[];let g=await z.GetCompanyUsers(a,b),h=[];const i=new Set;if(a6=g.length<=d.jA,Z=0,
aa=0,ab=0,ac=0,ad=0,ae=0,af=0,ag=0,ah=0,ai=0,aj=0,ak=0,!z.IsCurrentUserAdmin(null)){
h=(await z.GetCompanyGroups(a,b)).map((a=>a.id));for(const a of h){const c=(await C.GetSharedAccountRecipients2(a,!0,{
fields:"-mp,-sender,-status,-current,-serverOnly,-name,-isAdmin,-isManager,-accepted,-company,-accountInfo,-policies,-recipientEmail,-isNotComplete,-recipientName,-recipientAccessDate"
},b)).map((a=>a.accountId));if(g.filter((a=>c.includes(a.id))).forEach((a=>i.add(a.id))),!g.length)break}
g=g.filter((a=>i.has(a.id)||a.id===f.accountId))}T(g.length);for(const w of g){const a=(0,d.VK)(w);switch((0,d.lW)(a)){case 1:
Z++;break;case 4:ad++;break;case 5:ac++;break;case 3:aa++;break;case 2:ab++}const b=await(0,d.sm)(a);if(b){switch((0,d.K$)(b)){
case 0:ae++;break;case 1:ah++;break;case 2:aj++;break;case 3:ak++}}a.m_isAdmin&&ai++}await k(Z),await l(ad),await m(ab),
await n(aa),await o(ai,!0),await p(ae),await q(af);const j=await z.GetCompanyPolicyValue("EnforceOTP",b);if(!j&&a6){
for(const a of g){const c=(0,d.VK)(a),e=(0,d.lW)(c);if(2===e||4===e)continue
;1===(await z.GetAltAuthStatus(c.m_id,e,b)).m_status&&ag++}await r(ag)}async function k(a){a>0&&c.push({
m_name:await J("AdminCenter_DashboardTabView_BlockedUsers_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersBlocked_Text"),m_value:a,m_onclick:()=>a9({m_status:[1],m_groups:h})})}
async function l(a){a>0&&c.push({m_name:await J("AdminCenter_DashboardTabView_NotCompleted_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersNotComplete_Text"),m_value:a,m_onclick:()=>a9({m_status:[4],m_groups:h})})}
async function m(a){a>0&&c.push({m_name:await J("AdminCenter_DashboardTabView_Invited_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersInvited_Text"),m_value:a,m_onclick:()=>a9({m_status:[2],m_groups:h})})}
async function n(a){a>0&&(c.push({m_name:await J("AdminCenter_DashboardTabView_Inactive_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersInactiveHint_Text"),m_value:a,m_onclick:()=>a9({m_status:[3],m_groups:h})}),
e.push({m_name:await J("AdminCenter_DashboardTabView_UsersInactive_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersInactiveHint_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_status:[3]},null)}))}async function o(a,b){
!z.IsCurrentUserAdmin(null)||a<1||!b&&1===a||c.push({m_name:await J("AdminCenter_DashboardTabView_CompanyAdmins_Text"),
m_text:b?await J("AdminCenter_DashboardTabView_UsersAdmin_Text"):await J("AdminCenter_DashboardTabView_UsersAdmins_Text"),
m_value:a,m_onclick:()=>a9({m_role:[0],m_groups:h})})}async function p(a){a>0&&(c.push({
m_name:await J("AdminCenter_DashboardTabView_LowScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,m_onclick:()=>a9({m_score:[0],m_groups:h})}),
e.push({m_name:await J("AdminCenter_DashboardTabView_UsersLowScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_score:[0]},null)}))}async function q(a){a>0&&(c.push({
m_name:await J("AdminCenter_DashboardTabView_Compromissed_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersCompromised_Text"),m_value:a,m_onclick:()=>a9({})}),e.push({
m_name:await J("AdminCenter_DashboardTabView_UsersWithCompromissed_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersCompromised_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_compromised:!0},null)}))}async function r(a){a>0&&(c.push({
m_name:await J("AdminCenter_DashboardTabView_2StepVerification_Text"),
m_text:await J("AdminCenter_DashboardTabView_Users2FA_Text"),m_value:a,m_onclick:()=>a9({m_2fa:[1]})}),e.push({
m_name:await J("AdminCenter_DashboardTabView_Users2StepVerification_Text"),
m_text:await J("AdminCenter_DashboardTabView_Users2FA_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_2fa:[1]},null)}))}async function s(a){a>0&&c.push({
m_name:await J("AdminCenter_DashboardTabView_SuspendedUsers_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersSuspended_Text"),m_value:a,m_onclick:()=>a9({m_status:[5],m_groups:h})})}
async function t(a){a>0&&(c.push({m_name:await J("AdminCenter_DashboardTabView_AverageScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,m_onclick:()=>a9({m_score:[1],m_groups:h})
}),e.push({m_name:await J("AdminCenter_DashboardTabView_UsersAverageScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_score:[1]},null)}))}async function u(a){a>0&&c.push({
m_name:await J("AdminCenter_DashboardTabView_GoodScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsGoodScore_Text"),m_value:a,m_onclick:()=>a9({m_score:[2],m_groups:h})})}
async function v(a){a>0&&c.push({m_name:await J("AdminCenter_DashboardTabView_ExcellentScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersExcellentScore_Text"),m_value:a,m_onclick:()=>a9({m_score:[3],m_groups:h})})}
await o(ai,!1),await s(ac),await t(ah),await u(aj),await v(ak),V(c),aT(e),M.companyUsersCount=g.length,M.companyUsersBlocked=Z,
M.companyUsersInactive=aa,M.companyUsersInvited=ab,M.companyUsersSuspended=ac,M.companyUsersNotComplete=ad,
M.companyUsersScoreLow=ae,M.companyUsersCompromised=af,M.companyUsers2FA=ag,M.companyUsersScoreAverage=ah,
M.companyUsersAdmins=ai,M.companyUsersScoreGood=aj,M.companyUsersScoreExcellent=ak}(a,b)}catch(c){(0,r.au)(c),U(null)||(V([]),
aT([]))}finally{null!==an(null)&&null!==aC(null)&&(K=!0,H&&await H.SetValue("ac-dashboard-cached-info",M))}}))}(a),function(a){
ap.Start((async b=>{try{await async function(a,b){var c,d,e,g,i,j,k,l,m,n,o;if(K&&!a)return;let p=[],q=[];if(H){
const a=await H.GetValue("ac-dashboard-cached-info",{}),b=null!==(c=a.companyGroupsCount)&&void 0!==c?c:0;0!==b&&am(b),
aq=null!==(d=a.companyGroupsWithoutUser)&&void 0!==d?d:0,ar=null!==(e=a.companyGroupsWithoutData)&&void 0!==e?e:0,
as=null!==(g=a.companyGroupsScoreLow)&&void 0!==g?g:0,at=null!==(i=a.companyGroupsCompromised)&&void 0!==i?i:0,
au=null!==(j=a.companyGroupsWithRegularPermissions)&&void 0!==j?j:0,
av=null!==(k=a.companyGroupsWithSyncStorage)&&void 0!==k?k:0,aw=null!==(l=a.companyGroupsWithoutManager)&&void 0!==l?l:0,
ax=null!==(m=a.companyGroupsScoreAverage)&&void 0!==m?m:0,ay=null!==(n=a.companyGroupsScoreGood)&&void 0!==n?n:0,
az=null!==(o=a.companyGroupsScoreExcellent)&&void 0!==o?o:0,await t(as),await u(at),await v(aq),await w(ar),await x(au),
await y(av),await A(aw),await B(ax),await C(ay),await D(az),p.length>0&&ao(p),q.length>0&&aV(q)}
const s=await z.GetCompanyGroups(a,b);am(s.length),aq=0,ar=0,as=0,at=0,au=0,av=0,aw=0,ax=0,ay=0,az=0,p=[],q=[]
;for(const z of s){z.membersCount||aq++;const c=await(0,f.NH)(z);c||ar++;const d=await(0,f.g4)(z.securityStats);if(d){switch((0,
f.a_)(d)){case 0:as++;break;case 1:ax++;break;case 2:ay++;break;case 3:az++}}if(z.serverOnly||av++,z.readOnly||au++,
z.managersCount||aw++,c>0)try{const c=(await bh(z,a,b)).filter((a=>1===a.m_item_info.type));let d=!1;if(c.length){
b.ThrowIfShouldStop();for(const a of c)if(d=await(0,h.e7)(a,E,b),d){at++;break}}}catch(F){(0,r.au)(F)}b.ThrowIfShouldStop()}
async function t(a){a>0&&(p.push({m_name:await J("AdminCenter_DashboardTabView_LowScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,m_onclick:()=>bb({m_score:[0]})}),q.push({
m_name:await J("AdminCenter_DashboardTabView_GroupsLowScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("groups",null,{m_score:[0]})}))}async function u(a){a>0&&p.push({
m_name:await J("AdminCenter_DashboardTabView_Compromissed_Text"),
m_text:await J("AdminCenter_DashboardTabView_GroupsCompromised_Text"),m_value:a,m_onclick:()=>bb({m_compromised:!0})})}
async function v(a){a>0&&p.push({m_name:await J("AdminCenter_DashboardTabView_WithoutUsers_Text"),
m_text:await J("AdminCenter_DashboardTabView_GroupsWithoutUsers_Text"),m_value:a,m_onclick:()=>bb({m_without_users:!0})})}
async function w(a){a>0&&p.push({m_name:await J("AdminCenter_DashboardTabView_WithoutData_Text"),
m_text:await J("AdminCenter_DashboardTabView_GroupsWithoutData_Text"),m_value:a,m_onclick:()=>bb({m_without_data:!0})})}
async function x(a){a>0&&p.push({m_name:await J("AdminCenter_DashboardTabView_RegularPermission_Text"),
m_text:await J("AdminCenter_DashboardTabView_GroupsPermissions_Text"),m_value:a,m_onclick:()=>bb({m_permissions:[0]})})}
async function y(a){a>0&&p.push({m_name:await J("AdminCenter_DashboardTabView_SyncStorageType_Text"),
m_text:await J("AdminCenter_DashboardTabView_GroupsStorageSync_Text"),m_value:a,m_onclick:()=>bb({m_storage:[1]})})}
async function A(a){a>0&&p.push({m_name:await J("AdminCenter_DashboardTabView_WithoutGroupManager_Text"),
m_text:await J("AdminCenter_DashboardTabView_GroupsWithoutManager_Text"),m_value:a,m_onclick:()=>bb({m_without_manager:!0})})}
async function B(a){a>0&&(p.push({m_name:await J("AdminCenter_DashboardTabView_AverageScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,m_onclick:()=>bb({m_score:[1]})}),q.push({
m_name:await J("AdminCenter_DashboardTabView_GroupsAverageScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("groups",null,{m_score:[1]})}))}async function C(a){a>0&&p.push({
m_name:await J("AdminCenter_DashboardTabView_GoodScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_UsersGroupsGoodScore_Text"),m_value:a,m_onclick:()=>bb({m_score:[2]})})}
async function D(a){a>0&&p.push({m_name:await J("AdminCenter_DashboardTabView_ExcellentScore_Text"),
m_text:await J("AdminCenter_DashboardTabView_GroupsExcellentScore_Text"),m_value:a,m_onclick:()=>bb({m_score:[3]})})}
await t(as),await u(at),await v(aq),await w(ar),await x(au),await y(av),await A(aw),await B(ax),await C(ay),await D(az),ao(p),
aV(q),M.companyGroupsWithoutUser=aq,M.companyGroupsWithoutData=ar,M.companyGroupsScoreLow=as,M.companyGroupsCompromised=at,
M.companyGroupsWithRegularPermissions=au,M.companyGroupsWithSyncStorage=av,M.companyGroupsWithoutManager=aw,
M.companyGroupsScoreAverage=ax,M.companyGroupsScoreGood=ay,M.companyGroupsScoreExcellent=az}(a,b)}catch(c){(0,r.au)(c),
an(null)||(ao([]),aV([]))}finally{null!==U(null)&&null!==aC(null)&&(K=!0,H&&await H.SetValue("ac-dashboard-cached-info",M))}}))
}(b),function(a){aE.Start((async b=>{try{await async function(a,b){var c,d,e,g,i,j;if(K&&!a)return;b.ThrowIfShouldStop()
;let k=[];if(H){const a=await H.GetValue("ac-dashboard-cached-info",{}),b=null!==(c=a.companyFilesCount)&&void 0!==c?c:0
;0!==b&&aB(b),
aI=null!==(d=a.companyLoginsWithCompromisedPwd)&&void 0!==d?d:0,aJ=null!==(e=a.companyLoginsWithReusedPwd)&&void 0!==e?e:0,
aK=null!==(g=a.companyLoginsWithDuplicatedPwd)&&void 0!==g?g:0,aL=null!==(i=a.companyLoginsWeakPwd)&&void 0!==i?i:0,
aM=null!==(j=a.companyLoginsMediumPwd)&&void 0!==j?j:0,await p(aI),await q(aJ),await s(aL),await t(aM),await u(aK),
k.length>0&&aD(k)}aI=0,aJ=0,aK=0,aL=0,aM=0,k=[];const l=await z.GetCompanyGroups(!1,b);let m=0;for(const h of l){
if(!h.securityStats)continue;m+=await(0,f.NH)(h)}m>0&&aB(m);const n=await async function(a,b){N&&!a||(N=await aH.Execute({
action:async a=>{let b=[];const c=await z.GetCompanyGroups(!1,a);for(const e of c){a.ThrowIfShouldStop();try{
const c=await z.GetGroupsDataItems(e.id,a);b=[...b,...c]}catch(d){(0,r.au)(d)}}return b}},b));return N}(a,b)
;n.length>m&&(m=n.length,aB(m));if(0===m)return void aD([]);const o=n.filter((a=>1===a.m_item_info.type));for(const f of o)try{
await(0,h.e7)(f,E,b)&&aI++;const a=f.m_item,c=await z.GetDataItemPasswordStrength(a);null!==c&&(c<h.yl?aL++:c<h.iu&&aM++)
}catch(v){(0,r.au)(v)}await p(aI);try{const a=await async function(){let a=0,b=0;const c=await z.GetPasswordAudit()
;return c.reused.forEach((b=>{a+=b.items.length})),c.duplicates.forEach((a=>{b+=a.items.length})),{m_reused:a,m_duplicates:b}}()
;aJ=a.m_reused,aK=a.m_duplicates}catch(v){(0,r.au)(v)}async function p(a){a>0&&k.push({
m_name:await J("AdminCenter_DashboardTabView_Compromissed_Text"),
m_text:await J("AdminCenter_DashboardTabView_DataCompromised_Text"),m_value:a,m_onclick:()=>bd({m_compromised:!0})})}
async function q(a){a>0&&k.push({m_name:await J("AdminCenter_DashboardTabView_Reused_Text"),
m_text:await J("AdminCenter_DashboardTabView_DataReused_Text"),m_value:a,m_onclick:()=>bd({m_reused:!0})})}async function s(a){
a>0&&k.push({m_name:await J("AdminCenter_DashboardTabView_WeakPwdStrength_Text"),
m_text:await J("AdminCenter_DashboardTabView_DataWeakStrength_Text"),m_value:a,m_onclick:()=>bd({m_pwd_strength:[0]})})}
async function t(a){a>0&&k.push({m_name:await J("AdminCenter_DashboardTabView_MediumPwdStrength_Text"),
m_text:await J("AdminCenter_DashboardTabView_DataMediumStrength_Text"),m_value:a,m_onclick:()=>bd({m_pwd_strength:[1]})})}
async function u(a){a>0&&k.push({m_name:await J("AdminCenter_DashboardTabView_Duplicated_Text"),
m_text:await J("AdminCenter_DashboardTabView_DataDuplicate_Text"),m_value:a,m_onclick:()=>bd({m_duplicated:!0})})}await q(aJ),
await s(aL),await t(aM),await u(aK),aD(k),M.companyLoginsWithCompromisedPwd=aI,M.companyLoginsWithReusedPwd=aJ,
M.companyLoginsWithDuplicatedPwd=aK,M.companyLoginsWeakPwd=aL,M.companyLoginsMediumPwd=aM}(a,b)}catch(c){(0,r.au)(c),
aC(null)||aD([])}finally{null!==U(null)&&null!==an(null)&&(K=!0,H&&await H.SetValue("ac-dashboard-cached-info",M))}}))}(c)
}catch(i){(0,r.au)(i)}}function a8(){return d=>{Q(d);const e=S(d),f=U(d),g=z.IsCurrentUserAdmin(d);return u("div",{
className:f?"card card-users":"card card-users disabled"},u("div",{className:"title-with-button",onclick:f?a:null},u("div",{
className:"card-row"},u("div",{className:"card-name"},J("AdminCenter_Users_Text")),u("div",{className:"flex-cell"
}),g?X=u("button",{className:"card-button",onclick:f?b:null,onmousedown:f?c:null
},J("AdminCenter_DashboardTabView_AddUser_Text")):u("div",{className:"empty-cell"})),u("span",{className:"card-value"},(0,
q.bf)(e))),u(o.J2,{always_visible:!1,view_initialized:null!==f},u("div",{className:"list"},u("div",{
className:f&&f.length>0?"list-info":"list-info hidden"},u("span",{className:"title"
},J("AdminCenter_DashboardTabView_UsefulInsights_Text")),f&&u("ul",{className:"list-items"},f.map(bm))))),!f&&u("div",{
className:"loading-view"},u("div",{className:"action-progress-overlay-circle size48"})))};function a(){
z.IsCurrentUserAdmin(null)?z.ShowUsersView(null):(0,m.D$)((async()=>{const a=(await z.GetCompanyGroups(!1,null)).map((a=>a.id))
;z.ShowUsersView({m_groups:a})}),(()=>()=>{}),null,null)}function b(a){if(a.stopPropagation(),0===a.button)if(Y)bl(),(0,
i.dq)(X);else{const a=X.getBoundingClientRect();!function(a){function b(){(0,i.cT)(X),Y=!0}function c(){(0,i.dq)(X),Y=!1}bl(),
L=(0,g.Lj)(a,(()=>z.GetAddUserDropdownCommands()),{className:"with-triangle create-menu",onShow:b,onHide:c},(function(a,b){
return(0,q.TT)(P).style.width=(0,l.Md)(a),(0,q.TT)(P).style.height=(0,l.Md)(b),X.getBoundingClientRect()}),((a,b)=>(0,
p.fI)(a(b,(0,p.f4)(null,null,null)))))}(new DOMRect(a.left,a.bottom,0,0))}}function c(a){Y&&a.stopPropagation()}}function a9(a){
z.ShowUsersView(a)}function ba(){return c=>{Q(c);const d=al(c),e=an(c),f=z.IsCurrentUserAdmin(c);return u("div",{
className:e?"card card-groups":"card card-groups disabled"},u("div",{className:"title-with-button",onclick:e?a:null},u("div",{
className:"card-row"},u("div",{className:"card-name"},J("AdminCenter_Groups_Text")),u("div",{className:"flex-cell"
}),f?u("button",{className:"card-button",onclick:e?b:null},J("AdminCenter_DashboardTabView_AddGroup_Text")):u("div",{
className:"empty-cell"})),u("div",{className:"card-row"},d?u("span",{className:"card-value"},(0,q.bf)(d)):e?u("span",{
className:"no-data"},J("AdminCenter_DashboardTabView_NoGroupsAdded_Text")):null)),u(o.J2,{always_visible:!1,
view_initialized:null!==e},u("div",{className:"list"},(a=>{const b=an(a);return u("div",{
className:b&&b.length>0?"list-info":"list-info hidden"},u("span",{className:"title"
},J("AdminCenter_DashboardTabView_UsefulInsights_Text")),b&&u("ul",{className:"list-items"},b.map(bm)))}))),!e&&u("div",{
className:"loading-view"},u("div",{className:"action-progress-overlay-circle size48"})))};function a(){z.ShowGroupsView(null)}
function b(a){a.stopPropagation(),0===a.button&&z.ShowCreateGroupDialog()}}function bb(a){z.ShowGroupsView(a)}function bc(){
return d=>{Q(d);const e=aA(d),f=aC(d);return u("div",{className:f?"card card-data":"card card-data disabled"},u("div",{
className:"title-with-button",onclick:f?a:null},u("div",{className:"card-row"},u("div",{className:"card-name"
},J("AdminCenter_Data_Tab_Button_Text")),aF=u("button",{className:"card-button",onclick:f?b:null,onmousedown:f?c:null
},J("AdminCenter_DashboardTabView_AddData_Text"))),u("div",{className:"card-row"},e?u("span",{className:"card-value"},(0,
q.bf)(e)):f?u("span",{className:"no-data"},J("AdminCenter_DashboardTabView_NoDataAdded_Text")):null)),u(o.J2,{always_visible:!1,
view_initialized:null!==f},u("div",{className:"list"},(a=>{const b=aC(a);return u("div",{
className:b&&b.length>0?"list-info":"list-info hidden"},u("span",{className:"title"
},J("AdminCenter_DashboardTabView_UsefulInsights_Text")),b&&u("ul",{className:"list-items"},b.map(bm)))}))),!f&&u("div",{
className:"loading-view"},u("div",{className:"action-progress-overlay-circle size48"})))};function a(){z.ShowDataView(null)}
function b(a){if(a.stopPropagation(),0===a.button)if(aG)bl(),(0,i.dq)(aF);else{const a=aF.getBoundingClientRect();!function(a){
function b(){(0,i.cT)(aF),aG=!0}function c(){(0,i.dq)(aF),aG=!1}bl(),L=(0,g.Lj)(a,(()=>z.GetAddDataDropdownCommands(!1,null)),{
className:"with-triangle create-menu",onShow:b,onHide:c},(function(a,b){return(0,q.TT)(P).style.width=(0,l.Md)(a),(0,
q.TT)(P).style.height=(0,l.Md)(b),aF.getBoundingClientRect()}),((a,b)=>(0,p.fI)(a(b,(0,p.f4)(null,null,null)))))
}(new DOMRect(a.left,a.bottom,0,0))}}function c(a){aG&&a.stopPropagation()}}function bd(a){z.ShowDataView(a)}function be(){
return async b=>{var c,d;Q(b);const f=aN(b),g=aP(b);return z.IsCurrentUserAdmin(b)?u("div",{
className:f?"card card-integration disabled":"card card-integration"},u("div",{className:"title-with-button",onclick:f?null:a
},u("div",{className:"card-row"},u("div",{className:"card-name"
},J("AdminCenter_Integration_Tab_Button_Text")),!g&&!f&&u("button",{className:"card-button",
title:await J("AdminCenter_Integration_Tab_Button_Tip"),onclick:f?null:a
},J("AdminCenter_DashboardTabView_AddIntegration_Text"))),u("div",{className:"card-row"},g&&!f&&u("div",{
className:"card-value value-with-image"},u("div",{className:`provider-logo ${(0,e.pq)(null!==(c=g.type)&&void 0!==c?c:"")}`
}),u("div",{className:"provider-name"},(0,e.n)(null!==(d=g.type)&&void 0!==d?d:""))),!g&&!f&&u("span",{className:"no-data"
},J("AdminCenter_DashboardTabView_ProviderNotSet_Text")),u("div",{className:"flex-cell"}))),u("div",{
className:f?"list-info hidden":g?"list-info":"list-info hidden"},u("span",{className:"title"
},J("AdminCenter_DashboardTabView_SetupDetails_Text")),u("ul",{className:"list-items"},g&&u("li",{
className:"data-item not-clickable"},u("div",{className:"name-and-value"},u("span",{className:"text"
},J("AdminCenter_IntegrationView_Provisioning_Title_Text")),u("span",{className:"value"
},g.provisioning&&g.provisioning.enable?J("AdminCenter_DashboardTabView_ActiveStatus_Text"):J("AdminCenter_DashboardTabView_ProviderNotSet_Text"))),u("div",{
className:"name-and-value"},u("span",{className:"text"},J("AdminCenter_DashboardTabView_LastSyncTime_Text")),u("span",{
className:"value"},async function(a){var b;let c=await J("AdminCenter_DashboardTabView_NA_Text")
;if(a.provisioning&&a.provisioning.lastSyncTime){const d=null!==(b=await I.GetLanguageTag(null))&&void 0!==b?b:"en";c=(0,
s.il)(a.provisioning.lastSyncTime,d)}return c}(g)))),g&&u("li",{className:"data-item not-clickable"},u("div",{
className:"name-and-value"},u("span",{className:"text"},await J("AdminCenter_DashboardTabView_SSOIntegration_Text")),u("span",{
className:"value"
},g.sso&&g.sso.enable?J("AdminCenter_DashboardTabView_ActiveStatus_Text"):J("AdminCenter_DashboardTabView_ProviderNotSet_Text"))),u("div",{
className:"name-and-value"},u("span",{className:"text"},await J("AdminCenter_DashboardTabView_SSOAppliedTo_Text")),u("span",{
className:"value"},async function(a){var b;let c=await J("AdminCenter_DashboardTabView_NA_Text");if(a.sso&&a.sso.enable){
c=await J("AdminCenter_IntegrationView_SSO_Service_Active_For_No_One")
;if(await z.GetCompanyPolicyValue("UseSSOLogin",null))c=await J("AdminCenter_IntegrationView_SSO_Service_For_All_Label");else{
const a=await z.GetCompanyGroups(!1,null);for(const d of a){
if(""!==await z.GetGroupPolicyValue(null!==(b=d.policies)&&void 0!==b?b:"","UseSSOLogin")){
c=await J("AdminCenter_IntegrationView_SSO_Service_For_Select_Label");break}}}}return c}(g)))))),f&&u("div",{
className:"loading-view"},u("div",{className:"action-progress-overlay-circle size48"}))):u("div",{
className:"card card-integration disabled hidden"})};function a(){z.AddIntegration()}}function bf(){return async b=>{Q(b)
;const c=aW(b),d=aS(b),e=aU(b),f=[];d&&f.push(...d),e&&f.push(...e);const g=!d&&!e;return z.IsCurrentUserAdmin(b)?u("div",{
className:g?"card card-reports disabled":"card card-reports"},u("div",{className:"title-with-button",onclick:g?null:a},u("div",{
className:"card-row"},u("div",{className:"card-name"},J("AdminCenter_Reports_Tab_Button_Text")),u("div",{className:"flex-cell"
})),null!==c&&!g&&u("div",{className:"score-chart"},u("div",{className:"values"},u("span",{className:"text"
},J("AdminCenter_ReportsTabView_CompanySecurityScore_Text")),u("span",{className:"value"},c?async function(a){switch((0,
j._W)(a)){case 3:return(0,t.bt)(await J("PassAud_GoodSafetyLevel_Tittle")," • ",(0,q.bf)(a));case 2:return(0,
t.bt)(await J("PassAud_MediumSafetyLevel_Tittle")," • ",(0,q.bf)(a));case 1:return(0,
t.bt)(await J("PassAud_AverageSafetyLevel_Tittle")," • ",(0,q.bf)(a));case 0:return(0,
t.bt)(await J("PassAud_BadSafetyLevel_Tittle")," • ",(0,q.bf)(a))}}(c):"")),u("div",{className:"score-bar"},u("div",{
className:"bar"},c&&u("div",{className:"company-score",style:{left:`${(0,q.bf)(c)}%`}})),u("ul",{className:"delimeters-list"
},u("li",{className:"delimeter",title:await J("PassAud_BadSafetyLevel_Tittle")}),u("li",{className:"delimeter",
title:await J("PassAud_AverageSafetyLevel_Tittle")}),u("li",{className:"delimeter",
title:await J("PassAud_MediumSafetyLevel_Tittle")}),u("li",{className:"delimeter",
title:await J("PassAud_GoodSafetyLevel_Tittle")})))),null===c&&!g&&u("span",{className:"no-data"
},J("AdminCenter_DashboardTabView_NoReportsYet_Text"))),u(o.J2,{always_visible:!1,view_initialized:!g},u("div",{className:"list"
},u("div",{className:f.length>0?"list-info":"list-info hidden"},u("span",{className:"title"
},J("AdminCenter_DashboardTabView_Highlights_Text")),u("ul",{className:"list-items"},f.map(bm))))),g&&u("div",{
className:"loading-view"},u("div",{className:"action-progress-overlay-circle size48"}))):u("div",{
className:"card card-reports disabled hidden"})};function a(){z.ShowReportsView(!0,null)}}function bg(){return async c=>{Q(c)
;const d=aZ(c),e=a1(c);return z.IsCurrentUserAdmin(c)?u("div",{className:d?"card card-licenses disabled":"card card-licenses"
},u("div",{className:"title-with-button",onclick:d?null:a},u("div",{className:"card-row"},u("div",{className:"card-name"
},J("AdminCenter_DashboardTabView_Licenses_Text")),u("div",{className:"flex-cell"}),!d&&u("button",{className:"card-button",
onclick:d?null:a},u("span",{className:"text"},async function(a){if(!a||!a.status)return J("AdminCenter_BuyNow_Text")
;switch(a.status){case"active":if(a.expirationTime){const b=(0,s.t2)(),c=Math.floor((a.expirationTime-b)/60/60/24)
;return J(c>=30?"AdminCenter_SettingsView_BuyMore_Text":"AdminCenter_SettingsView_RenewNow_Text")}
return J("AdminCenter_SettingsView_RenewNow_Text");case"expired":case"trial-expired":case"trial":case"no-license":
return J("AdminCenter_BuyNow_Text")}}(e)),u("div",{className:"arrow-icon"}))),!d&&u("div",{className:"score-chart"},u("div",{
className:"values"},u("span",{className:"text"},J("AdminCenter_SettingsView_LicensesUsed_Text")),u("span",{className:"value"
},function(a){var b,c,d,e
;const f=null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,g=null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:30
;return(0,t.bt)((0,q.bf)(f),"/",(0,q.bf)(g))}(e))),u("div",{className:"score-bar"},u("div",{className:"bar"},u("div",{
className:"licenses-bar",style:{width:b(e)}}))))),e&&!d&&u("div",{className:"list-info"},u("span",{className:"title"
},J("AdminCenter_DashboardTabView_Details_Text")),u("ul",{className:"list-items"},u("li",{className:"data-item not-clickable"
},u("div",{className:"name-and-value"},u("span",{className:"text"
},J("AdminCenter_DashboardTabView_LicenseType_Text")),u("span",{className:"value"
},J("Options_LicenseType_Business_Text"))),u("div",{className:"name-and-value"},u("span",{className:"text"
},J("AdminCenter_DashboardTabView_Subscription_Text")),u("span",{className:"value"},async function(a){
if(!a||!a.status)return J("AdminCenter_DashboardTabView_NA_Text");switch(a.status){case"active":
return J("AdminCenter_DashboardTabView_ActiveStatus_Text");case"expired":
return J("AdminCenter_DashboardTabView_ExpiredStatus_Text");case"trial-expired":
return J("Options_LicenseStatus_ExpiredTrial_Text");case"trial":return J("Options_LicenseStatus_FreeTrial_Text")
;case"no-license":return J("Options_LicenseStatus_NoLicense_Text")}}(e)))),u("li",{className:"data-item not-clickable"
},u("div",{className:"name-and-value"},u("span",{className:"text"
},J("AdminCenter_DashboardTabView_ExpirationDate_Text")),u("span",{className:"value"},async function(a){var b,c
;let d=await J("AdminCenter_DashboardTabView_NA_Text");if(a&&a.expirationTime){
const e=null!==(b=a.expirationTime)&&void 0!==b?b:0,f=null!==(c=await I.GetLanguageTag(null))&&void 0!==c?c:"en";d=(0,s.fQ)(e,f)
}return d}(e))),u("div",{className:"name-and-value"},u("span",{className:"text"
},J("AdminCenter_DashboardTabView_LicensesAutoRenewal_Text")),u("span",{className:"value"
},e.autopay?J("AdminCenter_On_Text"):J("AdminCenter_Off_Text")))))),d&&u("div",{className:"loading-view"},u("div",{
className:"action-progress-overlay-circle size48"}))):u("div",{className:"card card-licenses disabled hidden"})};function a(){
a5&&a4.Start((async a=>{await D.OpenPaymentPage((0,q.TT)(a5),a)}))}function b(a){var b,c,d,e;if(!a)return"0"
;const f=null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,g=null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:30,h=Math.floor(f/g*100)||1
;return`${(0,q.bf)(h)}%`}}async function bh(a,b,c){let d=O.get(a.id);if(!d||b){d=[];if(await(0,f.NH)(a)>0)try{
d=[...await z.GetGroupsDataItems(a.id,c)]}catch(e){}O.set(a.id,d)}return d}function bi(a){let b=!1,c=!1,d=!1,e=!1
;for(const f of a)switch(f.event){case 0:case 2:case 1:b=!0,c=!0;break;case 3:case 4:c=!0;break;case 6:case 7:case 8:c=!0,d=!0
;break;case 9:e=!0}(b||c||d||e)&&a7(b,c,d,e)}function bj(a){let b=!1,c=!1;for(const d of a)switch(d.event){case 5:case 8:case 7:
case 6:b=!0,c=!0;break;case 10:K=!1,a4.Cancel(),W.Cancel(),ap.Cancel(),aE.Cancel(),aR.Cancel(),aY.Cancel(),a3.Cancel(),
F.onEvent.Remove(bi),G.onDataChanged.Remove(bj)}(b||c)&&a7(!1,b,c,!1)}function bk(){(0,p.fI)((async()=>{var a
;R(null!==(a=await I.GetLanguageTag(null))&&void 0!==a?a:"en")})())}function bl(){L&&(L.Hide(),L=null)}function bm(a){
return u("li",{className:"data-item",onclick:a.m_onclick},u("div",{className:"name-and-description"},u("span",{
className:"text name"},a.m_name),u("span",{className:"text description"},a.m_text)),u("div",{className:"value"},u("span",{
className:"text"},(0,q.bf)(a.m_value)),u("div",{className:"arrow-icon"})))}}},45655:function(a,b,c){"use strict";c.d(b,{
S:function(){return v}})
;var d=c(3566),e=c(78749),f=c(73549),g=c(87965),h=c(53166),i=c(13883),j=c(47333),k=c(4234),l=c(31173),m=c(97490),n=c(32105),o=c(78440),p=c(63956),q=c(73863),r=c(69893),s=c(13113),t=c(4153),u=(c(13117),
c(91764)._);function v(a,b,c,v,w,x,y,z){const A=a,B=b,C=c,D=v,E=w,F=x,G=z,H=z.LocalizeString;let I,J=null,K=null,L=null
;const[M,N]=(0,m.Uw)("");let O;const P=(0,o.tG)(),[Q,R]=(0,m.Uw)(!1),[S,T]=(0,m.Uw)(!0),[U,V]=(0,m.Uw)(0),[W,X]=(0,
m.Uw)(!0),Y=new Set,[Z,aa]=(0,m.Uw)([]),ab=(0,o.tG)()
;let ac,ad=[],ae=new Set,af=new Set,ag=new Set,ah=new Set,ai=new Set,aj=new Set,ak=new Set,al=new Set,am=!1,an=!1,ao=!1,ap=""
;const aq=new Map,ar=(0,o.tG)(),[as,at]=(0,m.Uw)(0),[au,av]=(0,m.Uw)(!0),[aw,ax]=(0,m.Uw)(!1),[ay,az]=(0,m.Uw)(!0),[aA,aB]=(0,
m.Uw)(0),[aC,aD]=(0,m.Uw)([]),aE="undefined"!=typeof IntersectionObserver,aF=new Map,aG=new Map
;let aH,aI,aJ,aK,aL,aM,aN,aO=!1,aP=!1;return{Create:async function(){var a
;return N(null!==(a=await G.GetLanguageTag(null))&&void 0!==a?a:"en"),O=await(0,m.Mj)((async()=>{
aJ=await H("AdminCenter_Selected_Items_Item_Tip"),aK=await H("Page_ListItem_MoreActions_Tip"),
aL=await H("PassCards_Cmd_ViewMode_Flat"),aM=await H("AdminCenter_Search_By_Name_Placeholder"),
aN=await H("AdminCenter_RemoveFilter_Tip")})),I=u("section",{className:"tab-view-files tab-view hidden"
},aQ(),aR(),aS(),aT(),aU(),aV(),u("div",{className:"flex-cell"}),(a=>u("div",{
className:S(a)?"loading-view":"loading-view hidden"},u("div",{className:"action-progress-overlay-circle size48"})))),
G.onLanguageTagChange.Add(be),I},OnAfterShow:function(){Q(null)||(F.onEvent.Add(bc),F.onShowDataSection.Add(bf),
A.onDataChanged.Add(bd),aW(!1))},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){F.onEvent.Remove(bc),
F.onShowDataSection.Remove(bf),G.onLanguageTagChange.Remove(be),A.onDataChanged.Remove(bd),ar.Cancel(),P.Cancel(),ab.Cancel(),
null==O||O.Remove()}};function aQ(){return a=>{const b=y.GetDataListCurrentFolder(a),c=b?b.path.split("/"):[];return b?u("div",{
className:"folder-selector"},c.map(((a,b)=>function(a,b,c){
const d=0===b?H("HomeFolder"):a,e=b!==c.length-1?"folder-part":"folder-part current",f=u("div",{className:e},u("div",{
className:"folder-name",onclick:()=>{
const a=c.slice(0,b+1).join("/"),d=y.GetDataListCurrentFolder(null),e=d?Object.assign({},d):null;if(Y.clear(),
""===a)return y.SetDataListCurrentFolder(null),void aW(!1);a!==(null==e?void 0:e.path)&&(e&&(e.path=a),
y.SetDataListCurrentFolder(e),aW(!1))}},d),b!==c.length-1&&u("div",{className:"folder-separator"}));return f
}(a,b,c)))):u("div",{className:"hidden"})}}function aR(){return async f=>{M(f);const g=U(f),h=W(f);return u("div",{
className:g>0?"actions-section":"actions-section hidden"},!h&&u("button",{className:"button button-with-icon add-button-icon",
onclick:a,title:await H("AdminCenter_AddToGroup_Text")},await H("AdminCenter_AddToGroup_Text")),!h&&u("button",{
className:"button button-with-icon move-button-icon",onclick:b,title:await H("Cmd_Move_Flat")
},await H("Cmd_Move_Flat")),!h&&u("button",{className:"button button-with-icon clone-button-icon",onclick:c,
title:await H("Cmd_Clone_Flat")},await H("Cmd_Clone_Flat")),!h&&u("button",{
className:"button button-with-icon delete-button-icon",onclick:d,title:await H("Cmd_Delete_Flat")
},await H("Cmd_Delete_Flat")),u("div",{className:"flex-cell"}),u("button",{className:"deselect-all-button",onclick:e},u("span",{
className:"text counter"},(0,t.bf)(g)),u("span",{className:"text"
},await H("AdminCenter_Selected_Items_Counter_Text2")),u("div",{className:"icon"})))};function a(){(0,o.fI)((async()=>{
await y.ShowAddMoveCloneRfItemDialog(ba(),3,null)&&bb(!1)})())}function b(){(0,o.fI)((async()=>{
await y.ShowAddMoveCloneRfItemDialog(ba(),1,null)&&bb(!1)})())}function c(){(0,o.fI)((async()=>{
await y.ShowAddMoveCloneRfItemDialog(ba(),2,null)&&bb(!1)})())}function d(){(0,o.fI)((async()=>{
await y.ShowDeleteRfItemDialog(ba())&&bb(!1)})())}function e(){bb(!1)}}function aS(){return async d=>{M(d)
;const e=!ay(d),f=Z(d),g=U(d),h=S(d);return u("div",{className:e||g>0?"filters-section hidden":"filters-section"},u("div",{
className:"applied-section"},f.map((a=>function(a,b){return u("div",{className:"filter-button"},u("div",{
className:`icon ${a.m_icon_classname}`}),u("span",{className:"text"},a.m_name),u("button",{className:"icon close-icon",
disabled:b,title:aN,onclick:b?null:c}));function c(){const b=Z(null).filter((b=>b.m_name!==a.m_name||b.m_type!==a.m_type))
;aa(b),a.m_on_click()}}(a,h))),u("div",{className:"add-filter-button"},ac=u("button",{className:"filter-button",disabled:h,
onclick:h?null:a,onmousedown:h?null:b},u("div",{className:"icon"}),u("span",{className:"text"
},await H("AdminCenter_AddFilter_Button_Text"))))),u("div",{className:"flex-cell"}),f.length>0&&u("button",{
className:"deselect-all-button",disabled:h,onclick:h?null:c},u("span",{className:"text"
},await H("AdminCenter_ClearAllFilters_Button_Text")),u("div",{className:"icon"})))};function a(){a4(),
L&&L.IsShown()?a6():function(){const a=ac.getBoundingClientRect(),b=new DOMRect(a.left,a.top,0,a.height);L=(0,h.K1)(b,e,{
onShow:()=>{aH.addEventListener("scroll",d)},onHide:()=>{aH.removeEventListener("scroll",d)}},{enabled:!0,title:aM},(()=>a))}()}
function b(a){L&&a.stopPropagation()}function c(){ah.clear(),af.clear(),ak.clear(),aj.clear(),am=!1,an=!1,ao=!1,aq.clear(),
ap="",ad=[],aa(ad),aW(!1)}function d(){a6(4)}async function e(){const a=[],b=await H("SharedFolderSettings_SaveChanges")
;return a.push({title:await H("AdminCenter_FileType_Text"),submenu:{applyText:b,type:"checkbox",applyAction:i,getSubmenu:f},
options:null}),a.push({title:await H("AdminCenter_Group_Text"),submenu:{applyText:b,type:"checkbox",applyAction:l,getSubmenu:j},
options:null}),a.push({title:await H("AdminCenter_PasswordStrength_Text"),submenu:{applyText:b,type:"checkbox",applyAction:o,
getSubmenu:m},options:null}),a.push({title:await H("AdminCenter_DataTabView_Shared_Text"),submenu:{applyText:b,type:"checkbox",
applyAction:r,getSubmenu:p},options:null}),a.push({title:await H("AdminCenter_DataTabView_HasCompromised_Text"),submenu:null,
options:{is_search:!1,checked:am,onClick:s}}),a.push({title:await H("AdminCenter_DataTabView_HasReused_Text"),submenu:null,
options:{is_search:!1,checked:an,onClick:t}}),a.push({title:await H("AdminCenter_DashboardTabView_Duplicated_Text"),
submenu:null,options:{is_search:!1,checked:ao,onClick:v}}),a.push({title:await H("AdminCenter_Search_NameContains"),
submenu:null,options:{is_search:!0,checked:!1,onClick:w}}),a}async function f(){const a=[];return ae=new Set([...af]),a.push({
title:await H("RoboformType_Logins"),checked:ae.has(1),onClick:()=>g(1)}),a.push({title:await H("RoboformType_Bookmarks"),
checked:ae.has(2),onClick:()=>g(2)}),a.push({title:await H("RoboformType_Safenotes"),checked:ae.has(7),onClick:()=>g(7)}),
a.push({title:await H("RoboformType_Contacts"),checked:ae.has(6),onClick:()=>g(6)}),a.push({
title:await H("RoboformType_Identities"),checked:ae.has(5),onClick:()=>g(5)}),a}function g(a){ae.has(a)?ae.delete(a):ae.add(a)}
function i(){af=new Set([...ae]),a7()}async function j(){const a=[];al=new Set([...ak])
;return(await y.GetCompanyGroups(!1,null)).forEach((b=>{a.push({title:b.name,checked:al.has(b.id),id:b.id,onClick:k})})),a}
function k(a){a&&(al.has(a)?al.delete(a):al.add(a))}function l(){ak=new Set([...al]);const a=y.GetDataListCurrentFolder(null)
;ak.size&&a&&y.SetDataListCurrentFolder(null),a7()}async function m(){const a=[];return ag=new Set([...ah]),a.push({
title:await H("PassAud_PwdStrengthWeak"),checked:ag.has(0),onClick:()=>n(0)}),a.push({
title:await H("PassAud_PwdStrengthMedium"),checked:ag.has(1),onClick:()=>n(1)}),a.push({
title:await H("PassAud_PwdStrengthGood"),checked:ag.has(2),onClick:()=>n(2)}),a.push({
title:await H("PassAud_PwdStrengthStrong"),checked:ag.has(3),onClick:()=>n(3)}),a}function n(a){ag.has(a)?ag.delete(a):ag.add(a)
}function o(){ah=new Set([...ag]),a7()}async function p(){const a=[];return ai=new Set([...aj]),a.push({
title:await H("AdminCenter_DataTabView_SharedWithMe_Text"),checked:ai.has(1),onClick:()=>q(1)}),a.push({
title:await H("AdminCenter_DataTabView_SharedByMe_Text"),checked:ai.has(0),onClick:()=>q(0)}),a}function q(a){
ai.has(a)?ai.delete(a):ai.add(a)}function r(){null!==y.GetDataListCurrentFolder(null)&&y.SetDataListCurrentFolder(null),
aj=new Set([...ai]),a7()}function s(){am=!am,a7()}function t(){an=!an,a7()}function v(){ao=!ao,a6(0),a5(),aW(!1)}function w(){
L&&(ap=L.GetSearchQuery(),aq.clear(),ap&&(at(1),ar.Cancel(),a7()))}}function aT(){return async c=>{M(c);const d=!ay(c),e=S(c)
;return d&&!e?u("div",{className:"create-first-item-section"},u("div",{className:"big-icon-section"},u("div",{
className:"big-icon login-icon"}),u("div",{className:"instruction-section"},u("div",{className:"text"
},await H("AdminCenter_DataTabView_Empty_Text")),u("div",{className:"text"
},await H("AdminCenter_DataTabView_EmptyOptions_Text")),u("ol",{className:"instruction-options"},u("li",{
className:"instruction-option"},u("span",{className:"text"},await H("AdminCenter_DataTabView_EmptyOptions1_Text"))),u("li",{
className:"instruction-option"},u("span",{className:"text"},function(a,b,c){const d=(0,q.SI)(a,"%1")
;return d.found?u("span",null,u("span",{className:"text"},d.before),u("span",{className:"circle plus",onclick:a=>b(a),
onmousedown:a=>c(a)}),u("span",{className:"text"},d.after)):u("span",null,u("span",{className:"text"},a))
}(await H("AdminCenter_DataTabView_EmptyOptions2_Text"),a2,a3))),u("li",{className:"instruction-option"},u("span",{
className:"text"},(0,q.SI)(await H("AdminCenter_DataTabView_EmptyOptions3_Text"),"%1").before),u("span",{className:"link",
onclick:a},await H("AdminCenter_DataTabView_Import_Text")),u("span",{className:"text"},(0,
q.SI)(await H("AdminCenter_DataTabView_EmptyOptions3_Text"),"%1").after))),u("div",{className:"link",onclick:b
},await H("MainPage_CreateLoginInstruction_LearnMore_Link"))))):u("div",{className:"hidden"})};function a(){(0,o.fI)((0,
i.X)(I,A,B,D,null,null,E,G,(0,o.f4)(null,null,null)))}function b(){(0,o.fI)(C.OpenUrl({url:j.em,newTab:!0,reuseExisting:!0
},null))}}function aU(){return async c=>{M(c);const d=!ay(c),e=as(c),f=au(c),g=aw(c);return u("div",{
className:d?"list-header hidden":"list-header"},u("div",{className:"column column-name"},u("div",{
className:g?"multiselect-checkbox selected":"multiselect-checkbox",title:await H("AdminCenter_Selected_Items_SelectAll_Tip"),
onclick:a}),u("button",{className:"sort-button",onclick:b},u("span",{className:"text"
},await H("AdminCenter_GroupsTabView_StorageType_Text")),u("div",{className:f||0!==e?"sort-icon asc":"sort-icon desc"
}))),u("div",{className:"column column-username"},await H("AdminCenter_Username_Text")),u("div",{
className:"column column-password"},await H("AdminCenter_PasswordStrength_Text")),u("div",{className:"column column-url"
},await H("AdminCenter_URL_Text")),u("div",{className:"column column-commands"}))};function a(){if(aO)return
;const a=a1().length>a0().length;ax(a),bb(a)}function b(){if(!aO){if(0!==as(null))at(0),av(!0);else{const a=au(null);av(!a)}
aW(!1)}}}function aV(){return async b=>{M(b);const c=Q(b);return ay(b)?u(n.J2,{always_visible:!1,view_initialized:c
},aH=u("div",{className:"list"},(async b=>{const c=aC(b),d=null===y.GetDataListCurrentFolder(b),e=(c.length>0||!d)&&function(){
if(af.size>0||ah.size>0||ak.size>0||aj.size>0||ap||am||an||ao)return!1;const a=y.GetDataListCurrentFolder(null)
;if(a&&a.sharedFolder&&!a.sharedGroup&&a.readOnly)return!1;return!0}(),f=a0().length>0;return aI=await(0,
h.L9)(c,a,(()=>u("div",{className:"loading-view"},u("div",{className:"action-progress-overlay-circle size24"
}))),e?i:null,50,f?"files-list selected":"files-list")}),(a=>{const b=S(a),c=aA(a),d=null===y.GetDataListCurrentFolder(a)
;return u("div",{className:c>0||!d||b?"no-results-view hidden":"no-results-view"},u("div",{className:"no-results-icon"
}),u("div",{className:"no-results-text"},u("span",{className:"text no-results-text-bold"
},H("AdminCenter_Search_NoResultsFor")),u("span",{className:"text"},H("AdminCenter_Search_NoResultsText"))))}))):u("div",{
className:"hidden"})};async function a(a){var g;let h=null
;const i=a.path,l=a.type,n=!a.sharedGroup&&a.readOnly&&a.sharedFolder,p=(0,
k.em)(i),t=8===l,w=t?"column column-name folder":"column column-name",x=1===l||2===l?"icon-section with-border":"icon-section",z=(0,
e.W7)(a);let B;const C=(0,o.f4)(null,null,null);let D="",E="column column-username",F=null;n||1!==l||a.error?(D="—",
E="column column-username no-data"):(h=await A.GetDataItem(a.path,1,null,C),D=null!==(g=(0,e.iK)(h,k.Df))&&void 0!==g?g:"",
D||(D=await H("AdminCenter_UserTabView_NotAvailable_Text"),E="column column-username no-data"),
F=await y.GetDataItemPasswordStrength(h));const G=null!==F;let I=a.gotoUrl,K="",L="column column-url"
;I||a.error||(1===a.type?(h||(h=await A.GetDataItem(a.path,1,null,C)),
I=h.m_goto_url):2===a.type&&(h=await A.GetDataItem(a.path,1,null,C),I=h.m_goto_url)),n||1!==a.type&&2!==a.type||a.error?(K="—",
L="column column-url no-data"):(K=(0,s.c9)(a.gotoUrl||(null==h?void 0:h.m_goto_url)||""),
K||(K=await H("AdminCenter_UserTabView_NotAvailable_Text"),L="column column-url no-data"))
;const M=8!==l&&(!n||2!==l&&6!==l&&5!==l&&1!==l&&4!==l&&3!==l),N=M?"column column-commands":"column column-commands hide-view-icon",O=!n||!(6===l||5===l||1===l||t&&""!==(0,
s.Y0)(a.path));let P=u("div",{className:"text"},p);if(ap){const a=aq.get(i);a&&(P=(0,f.B)(p,a))}const Q=Y.has(i),R=u("div",{
className:Q?"list-row selected":"list-row",onclick:t?()=>function(a){if(aO||a0().length>0)return;Y.clear(),
y.SetDataListCurrentFolder(a),aW(!1)}(a):a.error?()=>y.ShowNotification((0,r.EB)(a.error),null,2):c=>b(c,a),
oncontextmenu:O?b=>function(a,b,c){if(aO)return;if(2!==a.button)return;if(Y.size)return;a.stopPropagation(),a.preventDefault()
;const d=b.getBoundingClientRect(),e=new DOMRect(a.clientX,d.top,0,d.height);m(b,void 0,c,e)}(b,R,a):null},u("div",{className:w
},u("div",t?{className:"no-select"}:{className:"multiselect-checkbox",title:aJ,onclick:a=>j(a,i)}),u("div",{className:x,
ariaHidden:"true"},B=(0,d.AG)(i,l),null!==z?u("div",{className:z}):null),P),u("div",{className:E},D),u("div",{
className:G?"column column-password":"column column-password no-data"},G?u("div",{className:"icon-text"},u("div",{className:(0,
q.bt)("icon"," ",v(null!=F?F:0))}),u("div",{className:"text"},y.GetTextByPasswordStrength(null!=F?F:0))):1===l?u("div",{
className:"icon-text"},u("div",{className:"score-nodata-icon"}),u("div",{className:"text"
},await H("AdminCenter_UserTabView_NotAvailable_Text"))):"—"),u("div",{className:L
},null!=K?K:await H("AdminCenter_UserTabView_NotAvailable_Text")),O?u("div",{className:N},M?u("div",{
className:"command-bar command-default"},u("div",{className:"command command-view",title:aL,ariaLabel:aL,onclick:c=>b(c,a)
})):null,O?u("div",{className:"command-bar"},u("div",{className:"command command-menu",title:aK,role:"button",
ariaHasPopup:"true",ariaLabel:aK,onclick:b=>function(a,b,c){if(aO)return;if(a.stopPropagation(),J&&J===c.path)return void a4()
;if(!J||J!==c.path){const d=a.target;m(b,d,c,d.getBoundingClientRect())}}(b,R,a),onmousedown:c})):null):u("div",{
className:"command-bar-placeholder"}));return aF.set(i,{m_item_info:a,m_element:R}),
!I||a.error||1!==a.type&&2!==a.type||(aG.set(i,{m_url:I,m_element:R,m_logo_element:B}),(0,o.fI)(async function(a,b){if(aE){
const c=new IntersectionObserver(e),d=aG.get(a);if(!d)return;function e(a){(0,o.fI)(f(a))}async function f(b){
for(const d of b)if(d.isIntersecting){const b=d.target,e=aG.get(a);e&&(c.unobserve(b),c.disconnect(),
await y.SetLoginLogoImageBackgroundUrl(e.m_url,e.m_logo_element))}}c.observe(d.m_element),b&&await b.YieldToUI(50),
e(c.takeRecords())}}(i,C))),R}function b(a,b){aO||(a0().length>0?j(a,b.path):(0,p.PQ)((async()=>{const a=(0,
o.f4)(null,null,null),c=await A.GetDataItem(b.path,4,null,a);c&&await y.ShowDataViewModeInDetailsPane(b,c,!1,a)
}),(()=>()=>{}),0,null,(a=>{y.ShowNotification((0,r.EB)(a),null,2),(0,r.au)(a)})))}function c(a){J&&a.stopPropagation()}
function i(){return u("div",{className:"new-item-add",onclick:a2,onmousedown:a3},u("div",{className:"column column-add"
},u("div",{className:"icon-text"},u("div",{className:"icon-add"}),u("div",{className:"text"
},H("AdminCenter_DashboardTabView_AddData_Text")))))}function j(a,b){aO||(Y.has(b)?Y.delete(b):Y.add(b),aZ(),aY(),aX(),a9(),
a.stopPropagation())}function m(a,b,c,d){a4(),K=(0,g.Lj)(d,(()=>y.GetListOfCommandsForRfItem(c)),function(){let d=null;return{
onShow:f=>{b&&(0,g.dB)(b,!0),(0,g.dB)(a,!0);let h=a.parentElement;for(;null!==h;)h.addEventListener("scroll",e),
h=h.parentElement;d=f,J=c.path},onHide:()=>{b&&(0,g.dB)(b,!1),(0,g.dB)(a,!1);let f=a.parentElement
;for(;null!==f;)f.removeEventListener("scroll",e),f=f.parentElement;d=null,c.path===J&&(J=null)}};function e(){
null==d||d.Hide(4)}}(),(function(b,c){return(0,t.TT)(I).style.width=(0,l.Md)(b),(0,t.TT)(I).style.height=(0,l.Md)(c),
a.getBoundingClientRect()}),((a,b)=>(0,o.fI)(a(b,(0,o.f4)(null,null,null)))))}function v(a){
return a>=e.UK?"score-excellent-icon":a>=e.iu?"score-good-icon":a>=e.yl?"score-average-icon":"score-low-icon"}}function aW(a){
P.Start((async a=>{try{T(!0),aO=!0,(0,p.aZ)(aI),(0,p.aZ)(aH),await async function(a,b){const c=y.GetDataListCurrentFolder(null)
;aF.clear(),aq.clear(),aG.clear();const d=await y.GetDataItemsList(c,64,b);if(!d.length&&!c)return az(!1),aB(0),void aD([])
;ay(null)||az(!0);const e=await y.GetSortedAndFilteredDataList(d,{m_pwd_strength:[...ah],m_file_type:[...af],m_group:[...ak],
m_compromised:am,m_reused:an,m_duplicated:ao,m_shared:[...aj],m_search:{m_query:ap,m_results_map:aq},m_sort:{m_sort_by:as(null),
m_asc:au(null),m_without_folders:!1}},b),f=e.length;aB(f);for(const g of e)aF.set(g.path,{m_item_info:g,m_element:null})
;aD([...e]),aX(),aY()}(0,a),Q(null)||R(!0),(0,p.l5)(aI),(0,p.l5)(aH),(0,p.r9)(aI),(0,p.r9)(aH)}catch(b){(0,r.au)(b),(0,
r.r5)(b,r.kd)||(y.ShowNotification((0,r.EB)(b),null,2),(0,p.SE)(aI),(0,p.SE)(aH))}finally{T(!1),aO=!1}}))}function aX(){
const a=a0().length;V(a),a>0?(0,h.cT)(aI):(0,h.dq)(aI)}function aY(){const a=a0().length;!a||a<a1().length?ax(!1):ax(!0)}
function aZ(){if(aF)for(const[a,b]of aF)Y.has(a)?b.m_element&&(0,h.cT)(b.m_element):b.m_element&&(0,h.dq)(b.m_element)}
function a0(){return aF.size?[...aF.keys()].filter((a=>Y.has(a))):[]}function a1(){
return aF.size?[...aF].filter((([a,b])=>!(8===b.m_item_info.type||9===b.m_item_info.type))).map((([a])=>a)):[]}function a2(a){
if(a.stopPropagation(),0===a.button)if(aP)a4();else{const b=a.target.getBoundingClientRect();!function(a){function b(){aP=!0,
aH.addEventListener("scroll",a4)}function c(){aP=!1,aH.removeEventListener("scroll",a4)}a4(),K=(0,
g.Lj)(a,(()=>y.GetAddDataDropdownCommands(!1,y.GetDataListCurrentFolder(null))),{className:"with-triangle create-menu",onShow:b,
onHide:c},(function(a,b){return I.style.width=(0,l.Md)(a),I.style.height=(0,l.Md)(b),I.getBoundingClientRect()}),((a,b)=>(0,
o.fI)(a(b,(0,o.f4)(null,null,null)))))}(new DOMRect(b.right-8,b.top+b.height/2,0,0))}}function a3(a){aP&&a.stopPropagation()}
function a4(){K&&(K.Hide(),K=null)}function a5(){ad=[],ab.Start((async a=>{!function(){function a(a){switch(a){case 1:
return"icon logins-icon";case 2:return"icon bookmarks-icon";case 7:return"icon safenotes-icon";case 6:return"icon contacts-icon"
;case 5:return"icon identities-icon";default:return"icon"}}function b(a){switch(a){case 1:return H("RoboformType_Logins")
;case 2:return H("RoboformType_Bookmarks");case 7:return H("RoboformType_Safenotes");case 6:return H("RoboformType_Contacts")
;case 5:return H("RoboformType_Identities");default:return""}}af.forEach((c=>{a8(0,b(c),a(c),(()=>{af.delete(c),aW()}))}))}(),
function(){function a(a){switch(a){case 0:return H("PassAud_PwdStrengthWeak");case 1:return H("PassAud_PwdStrengthMedium")
;case 2:return H("PassAud_PwdStrengthGood");case 3:return H("PassAud_PwdStrengthStrong")}}ah.forEach((b=>{
a8(2,a(b),"icon score-icon",(()=>{ah.delete(b),aW()}))}))}(),function(){function a(a){switch(a){case 0:
return H("AdminCenter_DataTabView_SharedByMe_Text");case 1:return H("AdminCenter_DataTabView_SharedWithMe_Text")}}
aj.forEach((b=>{a8(3,a(b),"icon groups-icon",(()=>{aj.delete(b),aW()}))}))
}(),am&&a8(4,H("AdminCenter_DataTabView_HasCompromised_Text"),"icon score-icon",(()=>{am=!1,aW()})),
an&&a8(5,H("AdminCenter_DataTabView_HasReused_Text"),"icon score-icon",(()=>{an=!1,aW()})),
ao&&a8(6,H("AdminCenter_DashboardTabView_Duplicated_Text"),"icon score-icon",(()=>{ao=!1,aW()})),function(){if(!L&&!ap)return
;L&&(ap=L.GetSearchQuery());if(aq.clear(),!ap)return;L&&1!==as(null)&&at(1);function a(){aq.clear(),ap="",aW()}
a8(7,ap,"search-icon",a)}(),await async function(a){const b=await y.GetCompanyGroups(!1,a);ak.forEach((a=>{var c
;const d=b.find((b=>b.id===a));a8(1,null!==(c=null==d?void 0:d.name)&&void 0!==c?c:"","groups-icon",(()=>{ak.delete(a),aW()}))
}))}(a),aa(ad)}))}function a6(a){L&&(L.Hide(a),L=null)}function a7(){a6(0),a5(),aW()}function a8(a,b,c,d){ad.push({m_type:a,
m_name:b,m_icon_classname:c,m_on_click:d})}function a9(){const a=ba().filter((a=>!0===a.readOnly&&!a.sharedGroup));X(a.length>0)
}function ba(){return aF.size?[...aF].filter((([a])=>Y.has(a))).map((([a,b])=>b.m_item_info)):[]}function bb(a){
a?a1().forEach((a=>Y.add(a))):function(a){a.forEach((a=>Y.delete(a)))}(a0()),aZ(),aY(),a9(),aX()}function bc(a){let b=!1,c=!1
;for(const d of a)switch(d.event){case 2:case 3:case 4:case 1:c=!0;break;case 6:case 7:case 8:c=!0,b=!0}(0,o.fI)((async()=>{
c&&await async function(){const a=await y.GetCompanyGroups(!1,null);ak.forEach((b=>{a.filter((a=>a.id===b)).length||ak.delete(b)
}))}(),b&&aW()})())}function bd(a){let b=!1;for(const c of a)switch(c.event){case 5:case 7:case 8:b=!0;break;case 10:R(!1),
F.onEvent.Remove(bc),F.onShowDataSection.Remove(bf),A.onDataChanged.Remove(bd),ar.Cancel(),P.Cancel(),ab.Cancel()}b&&aW()}
function be(){(0,o.fI)((async()=>{var a;await O.Execute(),N(null!==(a=await G.GetLanguageTag(null))&&void 0!==a?a:"en")})())}
function bf(a){!function(a){if(!a)return!1;af.clear(),ah.clear(),ak.clear(),aj.clear(),am=!1,an=!1,ao=!1;const b=""!==ap
;aq.clear(),ap="",ad=[],ax(!1),bb(!1),a.m_file_type&&a.m_file_type.forEach((a=>{af.add(a)})),
a.m_pwd_strength&&a.m_pwd_strength.forEach((a=>{ah.add(a)})),a.m_shared&&a.m_shared.forEach((a=>{aj.add(a)})),
a.m_group&&a.m_group.forEach((a=>{ak.add(a)})),a.m_compromised&&(am=a.m_compromised),a.m_reused&&(an=a.m_reused),
a.m_duplicated&&(ao=a.m_duplicated),a5()}(a),aW()}}},1151:function(a,b,c){"use strict";c.d(b,{M:function(){return r}})
;var d=c(85557),e=c(87965),f=c(53166),g=c(84117),h=c(73549),i=c(31173),j=c(32105),k=c(97490),l=c(63956),m=c(78440),n=c(69893),o=c(73863),p=c(4153),q=(c(13117),
c(91764)._);function r(a,b,c,r,s){const t=a,u=b,v=c,w=s,x=s.LocalizeString,[y,z]=(0,k.Uw)("");let A;const[B,C]=(0,
k.Uw)(!1),[D,E]=(0,k.Uw)(1);let F,G=null,H=null;const[I,J]=(0,k.Uw)(0),K=new Set,[L,M]=(0,k.Uw)([]);let N,O=null,P="",Q=""
;const R=new Map;let S=[],T=new Set,U=new Set,V=new Set,W=new Set,X=new Set,Y=new Set,Z=null,aa=null,ab=!1,ac=!1,ad=!1,ae=!1
;const[af,ag]=(0,k.Uw)(0),[ah,ai]=(0,k.Uw)(!0),[aj,ak]=(0,k.Uw)(!1),[al,am]=(0,k.Uw)(!0),[an,ao]=(0,k.Uw)(!1),[ap,aq]=(0,
k.Uw)(0),[ar,as]=(0,k.Uw)(0),[at,au]=(0,k.Uw)(1),[av,aw]=(0,k.Uw)("50"),[ax,ay]=(0,k.Uw)([]);let az,aA;const aB=new Map,aC=(0,
m.tG)(),aD=new Map,aE="undefined"!=typeof IntersectionObserver
;let aF,aG="",aH="",aI="",aJ="",aK="",aL="",aM="",aN="",aO="",aP="",aQ="",aR="",aS="",aT="",aU="",aV="",aW="",aX="",aY=""
;return{Create:async function(){var a;return z(null!==(a=await w.GetLanguageTag(null))&&void 0!==a?a:"en"),A=await(0,
k.Mj)((async()=>{aG=await x("AdminCenter_GroupsTabView_Permissions_Regular_Text"),
aH=await x("AdminCenter_GroupsTabView_Permissions_Limited_Text"),
aI=await x("AdminCenter_GroupsTabView_StorageType_Server_Text"),aJ=await x("AdminCenter_GroupsTabView_StorageType_Synced_Text"),
aK=await x("PassAud_GoodSafetyLevel_Tittle"),aL=await x("PassAud_MediumSafetyLevel_Tittle"),
aM=await x("PassAud_AverageSafetyLevel_Tittle"),aN=await x("PassAud_BadSafetyLevel_Tittle"),
aO=await x("PassCards_Cmd_ViewMode_Flat"),aP=await x("Page_ListItem_MoreActions_Tip"),
aQ=await x("AdminCenter_Selected_Items_Item_Tip"),aR=await x("AdminCenter_UserTabView_HasCompromised_Text"),
P=await x("AdminCenter_Search_By_Name_Placeholder"),aS=await x("AdminCenter_DashboardTabView_WithoutUsers_Text"),
aT=await x("AdminCenter_DashboardTabView_WithoutData_Text"),aU=await x("AdminCenter_DashboardTabView_WithoutGroupManager_Text"),
aV=await x("PassAud_GoodSafetyLevel_Tittle"),aW=await x("PassAud_MediumSafetyLevel_Tittle"),
aX=await x("PassAud_AverageSafetyLevel_Tittle"),aY=await x("PassAud_BadSafetyLevel_Tittle"),
aF=await x("AdminCenter_RemoveFilter_Tip")})),E(await t.GetValue("GroupAvatarColorType",1)),F=q("section",{
className:"tab-view-groups-list tab-view hidden"},(a=>{y(a);const b=ap(a),c=al(a);return q("div",{
className:!b&&!c?"create-first-group":"create-first-group hidden"},q("div",{className:"flex-cell-2"}),q("div",{
className:"icon-section"},q("div",{className:"icon"})),q("div",{className:"description"
},x("AdminCenter_GroupsTabView_CreateFirstGroup_Text")),q("div",{className:"button default-button",onclick:ba
},x("AdminCenter_GroupsTabView_AddGroup_Button_Text")),q("div",{className:"flex-cell-3"}))}),(a=>{y(a)
;const b=I(a),c=r.IsCurrentUserAdmin(a);return q("div",{className:b>0?"actions-section":"actions-section hidden"
},c&&q("button",{className:"button button-with-icon delete-button-icon",onclick:bc},x("Cmd_Delete_Flat")),q("div",{
className:"flex-cell"}),q("button",{className:"deselect-all-button",onclick:bj},q("div",{className:"text counter"},(0,
p.bf)(b)),q("span",{className:"text"},x("AdminCenter_Selected_Items_Counter_Text2")),q("div",{className:"icon"})))}),(a=>{y(a)
;const b=L(a),c=I(a),d=an(a)&&0===c;return q("div",{className:d?"filters-section":"filters-section hidden"},q("div",{
className:"applied-section"},b.map(bN),q("div",{className:"add-filter-button"},N=q("button",{className:"filter-button",
onclick:bm,onmousedown:bl},q("div",{className:"icon"}),q("span",{className:"text"
},x("AdminCenter_AddFilter_Button_Text"))))),q("div",{className:"flex-cell"}),b.length>0&&q("button",{
className:"deselect-all-button",onclick:bP},q("span",{className:"text"},x("AdminCenter_ClearAllFilters_Button_Text")),q("div",{
className:"icon"})))}),(async a=>{y(a);const b=ah(a),c=af(a),d=r.IsCurrentUserAdmin(a);let e=!1;d&&(e=aj(a));const f=an(a)
;return q("div",{className:f?"list-header":"list-header hidden"},q("div",{className:"column column-name"},q("div",d?{
className:e?"multiselect-checkbox selected":"multiselect-checkbox",title:await x("AdminCenter_Selected_Items_SelectAll_Tip"),
onclick:bh}:{className:"empty-checkbox"}),q("button",{className:"sort-button",onclick:()=>bi(0)},q("span",{className:"text"
},await x("AdminCenter_Name_Text")),0===c&&q("div",{className:b||0!==c?"sort-icon asc":"sort-icon desc"}))),q("div",{
className:"column column-storage"},q("button",{className:"sort-button",onclick:()=>bi(2)},q("span",{className:"text"
},await x("AdminCenter_GroupsTabView_StorageType_Text")),2===c&&q("div",{className:b||2!==c?"sort-icon asc":"sort-icon desc"
}))),q("div",{className:"column column-permissions"},q("button",{className:"sort-button",onclick:()=>bi(3)},q("span",{
className:"text"},await x("AdminCenter_GroupsTabView_Permissions_Text")),3===c&&q("div",{
className:b||3!==c?"sort-icon asc":"sort-icon desc"}))),q("div",{className:"column column-users"},q("button",{
className:"sort-button",onclick:()=>bi(4)},q("span",{className:"text"},await x("AdminCenter_Users_Text")),4===c&&q("div",{
className:b||4!==c?"sort-icon asc":"sort-icon desc"}))),q("div",{className:"column column-files"},q("span",{className:"text"
},await x("RoboformType_Files"))),q("div",{className:"column column-score"},q("button",{className:"sort-button",
onclick:()=>bi(6)},q("span",{className:"text"},await x("AdminCenter_Security_Score_Text")),6===c&&q("div",{
className:b||6!==c?"sort-icon asc":"sort-icon desc"}))),q("div",{className:"column column-commands"}))}),(a=>{y(a)
;const b=B(a),c=an(a);return q(j.J2,{always_visible:!1,view_initialized:b,class_name:c?"":"hidden"},az=q("div",{className:"list"
},(async a=>{D(a);const b=ax(a),d=r.IsCurrentUserAdmin(null),e=b.length>0&&function(a){if(!a)return!1
;if(U.size||W.size||Y.size||ab||ac||ad||ae||""!==Q||null!==aa)return!1;return!0}(d),g=bg().length>0,h=av(null)
;return aA="0"===h?await(0,f.L9)(b,a0,(()=>q("div",{className:"loading-view"},q("div",{
className:"action-progress-overlay-circle size24"}))),e?a9:null,50,g?"groups-list selected":"groups-list"):q("div",{
className:g?"groups-list selected":"groups-list"},c&&await(0,f.Yn)(b,a0),e&&a9())}),(a=>{const b=ar(a);return q("div",{
className:b>0?"no-results-view hidden":"no-results-view"},q("div",{className:"no-results-icon"}),q("div",{
className:"no-results-text"},q("span",{className:"text no-results-text-bold"},x("AdminCenter_Search_NoResultsFor")),q("span",{
className:"text"},x("AdminCenter_Search_NoResultsText"))))})))}),q("div",{className:"flex-cell"}),(a=>{y(a)
;const b=al(a),c=ap(a),d=ar(a),e=at(a),g=av(a),h=an(a);return[q("div",{className:b?"loading-view":"loading-view hidden"
},q("div",{className:"action-progress-overlay-circle size48"})),(0,f.YO)({total_text:x("AdminCenter_GroupsTabView_Total_Text"),
className:h?"":"hidden",all_count:c,filtered_count:d,page:e,items_per_page:g,disabled:b,on_items_per_page_change:be,
on_page_toggle:bf,localization:w})]})),w.onLanguageTagChange.Add(bU),F},OnAfterShow:function(){B(null)||(v.onEvent.Add(bR),
t.AddOnChangeListener(bS),v.onShowGroupsSection.Add(bd),u.onDataChanged.Add(bT),aZ(!1))},OnBeforeHide:function(){},
Focus:function(){},Dispose:function(){v.onEvent.Remove(bR),t.RemoveOnChangeListener(bS),v.onShowGroupsSection.Remove(bd),
w.onLanguageTagChange.Remove(bU),u.onDataChanged.Remove(bT),aC.Cancel(),null==A||A.Remove()}};function aZ(a){
aC.Start((async b=>{try{(0,l.aZ)(az),am(!0),await async function(a,b){a&&(K.clear(),aD.clear(),J(0));aB.clear(),R.clear()
;const c=await r.GetCompanyGroups(a,b),e=c.length;if(aq(e),!e)return an(null)&&ao(!1),as(0),void ay([]);an(null)||ao(!0)
;let f=await r.GetSortedAndFilteredGroupsList(c,{m_storage:[...U],m_permissions:[...W],m_score:[...Y],m_compromised:ab,
m_without_users:ac,m_without_data:ad,m_without_manager:ae,m_created:aa||void 0,m_search:{m_query:Q,m_results_map:R},m_sort:{
m_sort_by:af(null),m_asc:ah(null)}},b);const g=f.length;as(g);const h=parseInt(av(null));let i=at(null);(i-1)*h>c.length&&(i=1,
au(1));if(0!==h){const a=(i-1)*h;f=f.slice(a,a+h)}for(const j of f){const a=await(0,d.NH)(j),b=(0,d.wj)(j,a);aB.set(b.m_id,{
m_info:b,m_element:null})}ay([...f]),a7(),a8()}(a,b),B(null)||C(!0)}catch(c){(0,n.au)(c),(0,
n.r5)(c,n.kd)||r.ShowNotification((0,n.EB)(c),null,2)}finally{(0,l.r9)(az),am(!1)}}))}async function a0(a){const b=await(0,
d.NH)(a),c=(0,d.wj)(a,b),e=c.m_name,f=(0,p.bf)(a.membersCount||0),i=c.m_read_only,j=c.m_show_passwords;let k=aH;j&&(k=aG),
i&&(k=aH);const l=c.m_server_only?aI:aJ;let n=q("div",{className:"text"},e);if(Q){const a=R.get(c.m_id);a&&(n=(0,h.B)(e,a))}
const s=await(0,d.mY)(D(null),c.m_name,c.m_security_stats,t),u=await(0,d.g4)(a.securityStats),v=K.has(c.m_id);let w
;const y=q("div",{className:v?"list-row selected":"list-row",onclick:a=>a1(a,c),oncontextmenu:a=>function(a,b,c,d){
if(2!==a.button)return;if(bg().length)return;a.stopPropagation(),a.preventDefault()
;const e=b.getBoundingClientRect(),f=new DOMRect(a.clientX,e.top,0,e.height);a3(b,void 0,c,f,d)}(a,y,c,void 0)},q("div",{
className:"column column-name"},r.IsCurrentUserAdmin(null)?q("div",{className:"multiselect-checkbox",title:aQ,
onclick:a=>a5(a,c.m_id)}):q("div",{className:"empty-checkbox"}),q("div",{className:s},(0,g.QT)(c.m_name)),n),q("div",{
className:"column column-storage"},q("span",{className:"text"},l)),q("div",{className:"column column-permissions"},q("span",{
className:"text"},k)),q("div",{className:"column column-users"},q("span",{className:"text"},f)),q("div",{
className:"column column-files"},w=q("span",{className:"text"},(0,p.bf)(c.m_files_count))),q("div",{
className:u?"column column-score":"column column-score no-data"},u?q("div",{className:"icon-text"},q("div",{className:(0,
o.bt)("icon"," ",(0,d.JH)(u))}),q("div",{className:"text"},(z=u)>d.ee?aV:z>d._3?aW:z>d.L7?aX:aY)):q("div",{className:"icon-text"
},q("div",{className:"score-nodata-icon"}),q("div",{className:"text"
},x("AdminCenter_UserTabView_NotAvailable_Text")))),q("div",{className:"column column-commands"},q("div",{
className:"command-bar command-default"},q("div",{className:"command command-view",title:aO,ariaLabel:aO,onclick:a=>a1(a,c)
})),q("div",{className:"command-bar"},q("div",{className:"command command-menu",title:aP,role:"button",ariaHasPopup:"true",
ariaLabel:aP,onclick:a=>function(a,b,c,d){if(G&&G===c.m_id)return a4(),void a.stopPropagation();const e=a.target
;G&&G===c.m_id||(a3(b,e,c,e.getBoundingClientRect(),d),a.stopPropagation())}(a,y,c,void 0),onmousedown:a2}))));var z
;return aB.set(c.m_id,{m_info:c,m_element:y}),(0,m.fI)(async function(a,b,c,d){if(aE){
const e=new IntersectionObserver(g),f=aB.get(a);if(!f||!f.m_element||0!==b)return;function g(a){(0,m.fI)(h(a))}
async function h(b){for(const c of b)if(c.isIntersecting){const b=c.target;aB.get(a)&&(e.unobserve(b),e.disconnect(),await i())}
}async function i(){const b=await async function(a,b){const c=aD.get(a);if(c)return c;{
const c=[...await r.GetGroupDataItems(a,b)];return aD.set(a,c),c}}(a,d);c.textContent=(0,p.bf)(b.length)}e.observe(f.m_element),
d&&await d.YieldToUI(50),g(e.takeRecords())}}(c.m_id,b,w,null)),y}function a1(a,b){
bg().length>0?a5(a,b.m_id):r.ShowGroupMainView(b,"users")}function a2(a){G&&a.stopPropagation()}function a3(a,b,c,d,f){a4(),
H=(0,e.Lj)(d,(()=>r.GetListOfCommandsForGroup(c,f)),function(){let d=null;return{onShow:g=>{b&&(0,e.dB)(b,!0),(0,e.dB)(a,!0)
;let h=a.parentElement;for(;null!==h;)h.addEventListener("scroll",f),h=h.parentElement;d=g,G=c.m_id},onHide:()=>{b&&(0,
e.dB)(b,!1),(0,e.dB)(a,!1);let g=a.parentElement;for(;null!==g;)g.removeEventListener("scroll",f),g=g.parentElement;d=null,
c.m_id===G&&(G=null)}};function f(){null==d||d.Hide(4)}}(),(function(b,c){return(0,p.TT)(F).style.width=(0,i.Md)(b),(0,
p.TT)(F).style.height=(0,i.Md)(c),a.getBoundingClientRect()}),((a,b)=>(0,m.fI)(a(b,(0,m.f4)(null,null,null)))))}function a4(){
H&&(H.Hide(),H=null)}function a5(a,b){K.has(b)?K.delete(b):K.add(b),a6(),a7(),a8(),a.stopPropagation()}function a6(){
if(aB.size)for(const[a,b]of aB)K.has(a)?b.m_element&&(0,f.cT)(b.m_element):b.m_element&&(0,f.dq)(b.m_element)}function a7(){
const a=bg().length;J(a),a>0?(0,f.cT)(aA):(0,f.dq)(aA)}function a8(){if(!r.IsCurrentUserAdmin(null))return;const a=bg().length
;0===a||a<aB.size?ak(!1):ak(!0)}function a9(){return q("div",{className:"new-item-add",onclick:function(){(0,m.fI)(bb())}
},q("div",{className:"column column-add"},q("div",{className:"icon-text"},q("div",{className:"icon-add"}),q("span",{
className:"text"},x("AdminCenter_GroupsTabView_AddGroup_ListItem_Text")))))}function ba(){(0,m.fI)(bb())}async function bb(){
const a=await r.ShowAddGroupDialog()
;a&&(r.ShowGroupMainView(a,"users"),r.ShowNotification(await x("Notification_Group_Created_Text",[a.m_name]),null,null),
v.onEvent.CallAllSync([{event:6}]))}function bc(){const a=[...aB.values()].filter((a=>K.has(a.m_info.m_id))).map((a=>a.m_info))
;a&&a.length&&(0,m.fI)(r.ShowDeleteGroupDialog(a))}function bd(a){a&&au(1),function(a){if(!a)return!1;U.clear(),W.clear(),
Y.clear(),ab=!1,ac=!1,ad=!1,ae=!1,aa=null;const b=""!==Q;R.clear(),Q="",S=[],ak(!1),bk(!1),
a.m_storage&&a.m_storage.forEach((a=>{U.add(a)}));a.m_permissions&&a.m_permissions.forEach((a=>{W.add(a)}))
;a.m_score&&a.m_score.forEach((a=>{Y.add(a)}));void 0!==a.m_without_users&&(ac=a.m_without_users)
;void 0!==a.m_without_data&&(ad=a.m_without_data);void 0!==a.m_without_manager&&(ae=a.m_without_manager)
;void 0!==a.m_compromised&&(ab=a.m_compromised);void 0!==a.m_created&&(aa=a.m_created);bO()}(a),aZ(!1)}function be(a){au(1),
aw(a),aZ(!1)}function bf(a){au(a),aZ(!1)}function bg(){return aB.size?[...aB.keys()].filter((a=>K.has(a))):[]}function bh(){
bk(aB.size>bg().length)}function bi(a){af(null)!==a?(ag(a),ai(!0)):ai(!ah(null)),aZ(!1)}function bj(){bk(!1)}function bk(a){
a?(aB.size?[...aB.keys()]:[]).forEach((a=>K.add(a))):function(a){a.forEach((a=>K.delete(a)))}(bg()),a6(),a8(),a7()}
function bl(a){al(null)||O&&a.stopPropagation()}function bm(){al(null)||(a4(),O&&O.IsShown()?bQ():function(){
const a=N.getBoundingClientRect(),b=new DOMRect(a.left,a.top,0,a.height);function c(){bQ(4)}O=(0,f.K1)(b,bn,{onShow:()=>{
az.addEventListener("scroll",c)},onHide:()=>{az.removeEventListener("scroll",c)}},{enabled:!0,title:P},(()=>a))}())}
async function bn(){const a=[],b=await x("SharedFolderSettings_SaveChanges");return a.push({
title:await x("AdminCenter_GroupsTabView_StorageType_Default_Text"),submenu:{applyText:b,type:"checkbox",applyAction:bq,
getSubmenu:bo},options:null}),a.push({title:await x("AdminCenter_GroupsTabView_Permissions_Default_Text"),submenu:{applyText:b,
type:"checkbox",applyAction:bu,getSubmenu:bs},options:null}),a.push({title:await x("AdminCenter_Security_Score_Text"),submenu:{
applyText:b,type:"checkbox",applyAction:by,getSubmenu:bw},options:null}),a.push({title:aS,submenu:null,options:{is_search:!1,
checked:ac,onClick:bE}}),a.push({title:aR,submenu:null,options:{is_search:!1,checked:ab,onClick:bC}}),a.push({
title:await x("AdminCenter_GroupTabView_CreatedDays_Text"),submenu:{applyText:b,type:"radio",applyAction:bB,getSubmenu:bA},
options:null}),a.push({title:aT,submenu:null,options:{is_search:!1,checked:ad,onClick:bG}}),a.push({title:aU,submenu:null,
options:{is_search:!1,checked:ae,onClick:bI}}),a.push({title:await x("AdminCenter_Search_GroupContains"),submenu:null,options:{
is_search:!0,checked:!1,onClick:bK}}),a}async function bo(){const a=[];return T=new Set([...U]),a.push({title:aI,
checked:T.has(0),onClick:()=>bp(0)}),a.push({title:aJ,checked:T.has(1),onClick:()=>bp(1)}),a}function bp(a){
T.has(a)?T.delete(a):T.add(a)}function bq(){U=new Set([...T]),bQ(0),bO(),au(1),aZ(!1)}function br(){U.forEach((a=>{
bM(0,0===a?aI:aJ,"storage-icon",(()=>function(a){U.delete(a),aZ(!1)}(a)))}))}async function bs(){const a=[]
;return V=new Set([...W]),a.push({title:aG,checked:V.has(0),onClick:()=>bt(0)}),a.push({title:aH,checked:V.has(1),
onClick:()=>bt(1)}),a}function bt(a){V.has(a)?V.delete(a):V.add(a)}function bu(){W=new Set([...V]),bQ(0),bO(),au(1),aZ(!1)}
function bv(){W.forEach((a=>{bM(1,1===a?aH:aG,"permissions-icon",(()=>function(a){W.delete(a),aZ(!1)}(a)))}))}
async function bw(){const a=[];return X=new Set([...Y]),a.push({title:aN,checked:X.has(0),onClick:()=>bx(0)}),a.push({title:aM,
checked:X.has(1),onClick:()=>bx(1)}),a.push({title:aL,checked:X.has(2),onClick:()=>bx(2)}),a.push({title:aK,checked:X.has(3),
onClick:()=>bx(3)}),a}function bx(a){X.has(a)?X.delete(a):X.add(a)}function by(){Y=new Set([...X]),bQ(0),bO(),au(1),aZ(!1)}
function bz(){Y.forEach((a=>{let b="";switch(a){case 0:b=aN;break;case 1:b=aM;break;case 2:b=aL;break;case 3:b=aK}
bM(2,b,"score-icon",(()=>function(a){Y.delete(a),aZ(!1)}(a)))}))}async function bA(){const a=[];return Z=aa,a.push({
title:await x("AdminCenter_UserTabView_InactiveDays_Text",["90"]),checked:"90"===Z,onClick:()=>{Z="90"}}),a.push({
title:await x("AdminCenter_UserTabView_InactiveDays_Text",["60"]),checked:"60"===Z,onClick:()=>{Z="60"}}),a.push({
title:await x("AdminCenter_UserTabView_InactiveDays_Text",["30"]),checked:"30"===Z,onClick:()=>{Z="30"}}),a}function bB(){aa=Z,
bQ(0),bO(),au(1),aZ(!1)}function bC(){ab=!ab,bQ(0),bO(),au(1),aZ(!1)}function bD(){ab=!1,aZ(!1)}function bE(){ac=!ac,bQ(0),bO(),
au(1),aZ(!1)}function bF(){ac=!1,aZ(!1)}function bG(){ad=!ad,bQ(0),bO(),au(1),aZ(!1)}function bH(){ad=!1,aZ(!1)}function bI(){
ae=!ae,bQ(0),bO(),au(1),aZ(!1)}function bJ(){ae=!1,aZ(!1)}function bK(){O&&(Q=O.GetSearchQuery(),R.clear(),Q&&(bO(),bQ(),au(1),
aZ(!1)))}function bL(){R.clear(),Q="",aZ(!1)}function bM(a,b,c,d){S.push({m_type:a,m_name:b,m_icon_classname:c,m_on_click:d})}
function bN(a){return q("div",{className:"filter-button"},q("div",{className:`icon ${a.m_icon_classname}`}),q("span",{
className:"text"},a.m_name),q("button",{className:"icon close-icon",title:aF,onclick:function(){
const b=L(null).filter((b=>b.m_name!==a.m_name||b.m_type!==a.m_type));M(b),a.m_on_click()}}))}function bO(){S=[],br(),bv(),bz(),
aa&&bM(3,x("AdminCenter_GroupTabView_CreatedDays_Button_Text",[aa]),"storage-icon",(()=>{aa=null,aZ(!1)})),
ab&&bM(4,aR,"logins-icon",bD),ac&&bM(5,aS,"role-icon",bF),ad&&bM(6,aT,"logins-icon",bH),ae&&bM(7,aU,"role-icon",bJ),
(O||Q)&&(Q=O?O.GetSearchQuery():Q,R.clear(),Q&&(O&&(ag(1),ai(!0)),bM(8,Q,"search-icon",bL))),M(S)}function bP(){U.clear(),
W.clear(),Y.clear(),ab=!1,ac=!1,ad=!1,ae=!1,aa=null,R.clear(),Q="",S=[],M(S),aZ(!1)}function bQ(a){O&&(O.Hide(a),O=null)}
function bR(a){let b=!1;for(const c of a)switch(c.event){case 2:case 3:case 4:case 1:case 6:case 7:case 8:b=!0}b&&aZ(!0)}
function bS(a){for(const b in a)switch(b){case"GroupAvatarColorType":case"GroupAvatarHexColorType":(0,m.fI)((async()=>{
E(await t.GetValue("GroupAvatarColorType",1))})())}}function bT(a){let b=!1;for(const c of a)switch(c.event){case 5:
8!==c.type&&c.path&&(b=!0),8===c.type&&c.path&&(b=!0);break;case 7:8===c.type&&c.path&&(b=!0);break;case 10:C(!1),
v.onEvent.Remove(bR),t.RemoveOnChangeListener(bS),v.onShowGroupsSection.Remove(bd),u.onDataChanged.Remove(bT),aC.Cancel(),
null==A||A.Remove()}b&&aZ(!0)}function bU(){(0,m.fI)((async()=>{var a;await A.Execute(),
z(null!==(a=await w.GetLanguageTag(null))&&void 0!==a?a:"en")})())}}},33094:function(a,b,c){"use strict";c.d(b,{W9:function(){
return n},lY:function(){return m},zs:function(){return o}})
;var d=c(53166),e=c(46721),f=c(4153),g=c(40868),h=c(32105),i=c(63956),j=c(78440),k=c(69893),l=(c(13117),c(91764)._)
;function m(a,b){const c=b.LocalizeString,m=a;let n=null;return{Create:async function(a,b){let o,p,q,r,s,t,u=null,v=!1
;return l("div",{className:"content"},l("div",{className:"select-file-section"},l("span",{className:"title"
},await c("AdminCenter_UsersTabView_ImportUsers_CSV_File")),l("div",{className:"file-browse"},l("div",{className:"button",
onclick:function(){(0,j.fI)(async function(){if(u=await(0,i.tf)([".csv"]),!u)return(0,i.l5)(o),(0,i.aZ)(s),v=!0,
void(p.textContent="");p.textContent=u.name,(0,i.SE)(o),(0,i.l5)(p),(0,i.r9)(s),v=!1}())}
},await c("AdminCenter_UsersTabView_ImportUsers_SelectFile")),o=l("span",{className:"selected-file-name"
},await c("AdminCenter_UsersTabView_ImportUsers_FileNotSelected")),p=l("span",{className:"selected-file-name loaded hidden"
}))),t=l("div",{className:"error-text"}),l("div",{className:"instructions"},l("p",{className:"text"
},await c("AdminCenter_UsersTabView_ImportUsers_DescrCharsColOrder")),l("ul",{className:"columns-order-list"},l("li",{
className:"item"},l("span",{className:"title"
},await c("AdminCenter_UsersTabView_ImportUsers_OperType_Title")),` ${await c("AdminCenter_UsersTabView_ImportUsers_OperType_Text")}`),l("li",{
className:"item"},l("span",{className:"title"
},await c("AdminCenter_UsersTabView_ImportUsers_UserName_Title")),` ${await c("AdminCenter_UsersTabView_ImportUsers_UserName_Text")}`),l("li",{
className:"item"},l("span",{className:"title"
},await c("AdminCenter_Email_Title")),` ${await c("AdminCenter_UsersTabView_ImportUsers_Email_Text")}`),l("li",{className:"item"
},l("span",{className:"title"
},await c("AdminCenter_UsersTabView_ImportUsers_GroupName_Title")),` ${await c("AdminCenter_UsersTabView_ImportUsers_GroupName_Text")}`)),l("p",{
className:"text description"},await c("AdminCenter_UsersTabView_ImportUsers_DescrDelimeter")),l("p",{className:"example"
},l("span",{className:"title"},await c("AdminCenter_UsersTabView_ImportUsers_Example_Title")),l("span",{className:"text"
},`${await c("AdminCenter_UsersTabView_ImportUsers_Example1_Text")}`,l("br",null),`${await c("AdminCenter_UsersTabView_ImportUsers_Example2_Text")}`,l("br",null),`${await c("AdminCenter_UsersTabView_ImportUsers_Example3_Text")}`))),l("div",{
className:"send-email-section"},q=l(h.b_,{className:"send-email-checkbox",
text:await c("AdminCenter_UsersTabView_ImportUsers_SendInstructions"),checked:!0}),l("span",{className:"uncheck-text"
},await c("AdminCenter_UsersTabView_ImportUsers_UnckeckInstructions"))),l("div",{className:"set-password"},r=(0,h.ap)({
title:await c("AdminCenter_UsersTabView_ImportUsers_Pwd_Placeholder"),maxLength:80}),l("span",{className:"note-text"
},await c("AdminCenter_UsersTabView_ImportUsers_Pwd_Text"))),l("div",{className:"buttons-bar"},l("button",{className:"button",
onclick:()=>b(k.JS)},await c("Cmd_Cancel_Flat")),s=l("button",{className:"button default-button disabled",onclick:function(){
if(v)return;n=(0,j.YZ)({action:w}),(0,i.PQ)((async()=>{await(null==n?void 0:n.Execute(null))}),x,300,null,(a=>function(a){(0,
d.eX)(t,a)}((0,k.EB)(a))))}},await c("AdminCenter_DialogButton_Import"))));async function w(b){const c=r.GetValue(),d=await(0,
g.At)((0,f.TT)(u)),h=await(0,e.$1)(d,c,m);null==b||b.ThrowIfShouldStop();const i=[];h.users.forEach((a=>{
a.groups&&a.groups.forEach((a=>{i.some((b=>b.name.toLowerCase()===a.name.toLowerCase()))||i.push({name:a.name,
readOnly:a.readOnly,serverOnly:a.serverOnly})}))}));const j=q.GetChecked();a({m_users:h.users,m_groups:i,m_options:{
sendNotifyEmail:j},m_errors_in_lines:h.errors_in_lines,m_errors_in_groups:h.errors_in_groups})}function x(){return v=!0,(0,
i.aZ)(s),y}function y(){v=!1,(0,i.r9)(s)}},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},
Dispose:function(){null==n||n.Cancel()}}}function n(a,b,c,d,e){const f=d.LocalizeString,g=c;let k=null;const m={
Create:async function(c,d){let m,n,o,p;let q=!0;const r=l("div",{className:"content"},m=l("div",{className:"wait-text"
},await f("AdminCenter_UsersTabView_ImportUsers_Progress_Text")),n=l("div",{className:"import-failed-text hidden"
},await f("AdminCenter_UsersTabView_ImportUsers_Failed_Text")),o=l(h.Zq,{gradient:!0}),l("div",{className:"buttons-bar"
},p=l("div",{className:"button default-button hidden disabled",onclick:function(){if(q)return;c(null)}
},await f("Cmd_Close_Flat"))));return function(){0===a.m_users.length?t():s()}(),r;function s(){(0,i.SE)(n),(0,i.SE)(p),(0,
i.aZ)(p),q=!0,(0,i.l5)(m),(0,i.l5)(o),k=(0,j.YZ)({action:async d=>{await async function(d){
const e=0!==a.m_groups.length?await g.ImportCompanyGroups(b,a.m_groups,!0,d):[];null==d||d.ThrowIfShouldStop()
;const f=[...a.m_users];f.map((a=>(a.groups&&a.groups.map((a=>{var b,c
;for(const d of e)if(a.name.toLowerCase()===d.name.toLowerCase()){a.name=d.name,
a.password=null!==(b=d.password)&&void 0!==b?b:"",a.id=null!==(c=d.id)&&void 0!==c?c:"";break}return a})),a)))
;const h=await g.ImportCompanyMembers(b,f,a.m_options,d);null==d||d.ThrowIfShouldStop()
;const i=h.filter((a=>a.existsBefore||a.joinedBefore||a.error)),j=a.m_users.length-i.length,k=e.filter((a=>!(a.existsBefore||a.error)))
;if(0===j)return void t();c({m_users_created:j,m_users_failed:i.length,m_groups_created:k.length,
m_groups_failed:a.m_errors_in_groups})}(d)}}),(0,j.fI)(k.Execute(e))}function t(){(0,i.SE)(m),(0,i.SE)(o),(0,i.l5)(n),(0,
i.r9)(p),(0,i.l5)(p),q=!1}},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){
null==k||k.Cancel()}};return m}function o(a,b){const c=b.LocalizeString;return{Create:async function(b,d){
const e=await c("AdminCenter_UsersTabView_ImportUsers_UsersAdded_Text",[(0,
f.bf)(a.m_users_created)]),g=await c("AdminCenter_UsersTabView_ImportUsers_UsersError_Text",[(0,
f.bf)(a.m_users_failed)]),h=await c("AdminCenter_UsersTabView_ImportUsers_GroupsCreated_Text",[(0,
f.bf)(a.m_groups_created)]),i=await c("AdminCenter_UsersTabView_ImportUsers_GroupsError_Text",[(0,f.bf)(a.m_groups_failed)])
;return l("div",{className:"content"},l("span",{className:"title"
},await c("AdminCenter_UsersTabView_ImportUsers_Success_Title")),l("ul",{className:"info-list"},0!==a.m_users_created?l("li",{
className:"info"},l("div",{className:"ok-icon"}),l("div",{className:"text"}," ",e," ")):null,0!==a.m_users_failed?l("li",{
className:"info"},l("div",{className:"fail-icon"}),l("div",{className:"text"}," ",g," ")):null,0!==a.m_groups_created?l("li",{
className:"info"},l("div",{className:"ok-icon"}),l("div",{className:"text"}," ",h," ")):null,0!==a.m_groups_failed?l("li",{
className:"info"},l("div",{className:"fail-icon"}),l("div",{className:"text"}," ",i," ")):null),l("div",{className:"buttons-bar"
},l("div",{className:"button default-button",onclick:()=>b()},await c("Cmd_Close_Flat"))))},OnAfterShow:function(){},
OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}}}},54019:function(a,b,c){"use strict";c.d(b,{y:function(){
return i}});var d=c(55819),e=c(4153),f=c(73863),g=c(63956),h=c(91764)._
;async function i({localization:a,provider:b,ad_connector:c,on_disable:i,on_go_back:j}){var k,l,m,n,o,p;const q=a.LocalizeString
;let r,s,t=await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Period_Manual");if(null==c?void 0:c.adSyncSettings){
const a=c.adSyncSettings;if(a.periodicSyncEnabled&&a.syncPeriod){
const b=await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Period_Unit");t=`${a.syncPeriod} ${b}`}}const u=h("div",{
className:"provider-view"},h("div",{className:"back-section ad-connector"},h("div",null,h("div",{
className:b.active?"icon icon-back hidden":"icon icon-back",onclick:j}),h("div",{className:(0,f.bt)("icon"," ",(0,d.pq)((0,
e.TT)(b.type)))}),h("div",{className:"text"},(0,d.n)((0,e.TT)(b.type))," "),h("div",{className:"icon icon-info hidden",
title:await q("AdminCenter_IntegrationView_Remove_Provisioning_Tooltip")})),h("a",{className:"button default-button",
href:"https://www.roboform.com/tools/RoboFormADConnectorSetup.zip"
},await q("AdminCenter_IntegrationView_AD_Connector_Download_Button"))),h("div",{className:"tab-views"},h("div",{
className:"tab-view-scim tab-view"},r=h("div",{className:"status-section-wrapper hidden"},h("div",{className:"info-message"
},h("div",{className:"icon"}),h("div",{className:"description"
},await q("AdminCenter_IntegrationView_AD_Connector_Description_Text"))),h("div",{className:"status-section"},h("div",{
className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status"),":"),h("div",{className:"icon-text"},h("div",{
className:"icon status-not-complete"}),h("div",{className:"text status"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Not_Connected")))))),s=h("div",{
className:"status-section-wrapper hidden"},h("div",{className:"info-message"},h("div",{className:"icon"}),h("div",{
className:"description"},await q("AdminCenter_IntegrationView_AD_Connector_Description_Text"))),h("div",{
className:"status-section"},h("div",{className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status"),":"),h("div",{className:"icon-text"},h("div",{
className:"icon status-complete"}),h("div",{className:"text status"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Connected"))),h("div",{className:"text"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Last"),":"),h("button",{
className:"button warning-button aligned-right",onclick:()=>i(b)
},await q("AdminCenter_IntegrationView_AD_Connector_Disable_Button"))),h("div",{className:"status-row"},h("div",{
className:"title"},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Client"),":"),h("div",{className:"text"
},null==c?void 0:c.accountName)),h("div",{className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Location"),":"),h("div",{className:"text"
},null==c?void 0:c.computer)),h("div",{className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_CDomain"),":"),h("div",{className:"text"
},null===(k=null==c?void 0:c.adSyncSettings)||void 0===k?void 0:k.adDomain)),h("div",{className:"status-row"},h("div",{
className:"title"},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Period"),":"),h("div",{className:"text"
},t))),h("div",{className:"devider"}),h("div",{className:"sync-section"},h("div",{className:"sync-text"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Groups")),h("ul",null,null===(m=null===(l=null==c?void 0:c.adSyncSettings)||void 0===l?void 0:l.filters)||void 0===m?void 0:m.map((a=>h("li",null,a))))),h("div",{
className:"devider"}),h("div",{className:"sync-section"},h("div",{className:"sync-text"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Rules")),h("ul",null,null===(o=null===(n=null==c?void 0:c.adSyncSettings)||void 0===n?void 0:n.syncRules)||void 0===o?void 0:o.map((({name:a,value:b})=>h("li",null,h("div",null,a,h("span",null,b)))))))))))
;return(null===(p=b.provisioning)||void 0===p?void 0:p.enable)?((0,g.SE)(r),(0,g.l5)(s)):((0,g.SE)(s),(0,g.l5)(r)),u}},
55819:function(a,b,c){"use strict";c.d(b,{n:function(){return w},pq:function(){return v},ug:function(){return u}})
;var d=c(54019),e=c(30045),f=c(30651),g=c(98266),h=c(53166),i=c(89369),j=c(97490),k=c(32105),l=c(63956),m=c(73863),n=c(40868),o=c(4153),p=c(13113),q=c(69893),r=c(78440),s=(c(13117),
c(91764)._);const t=["azure","okta","google-workspace","pingone","onelogin","custom","ad-connector"];function u(a,b,c,u,x,y,z){
const A=a,B=b,C=c,D=u,E=y,F=y.LocalizeString;let G=!0;const H=x,I=(0,r.tG)(),J=12e4;let K="",L=null;const[M,N]=(0,
j.Uw)(!1),[O,P]=(0,j.Uw)("");let Q,R;const[S,T]=(0,j.Uw)(null),[U,V]=(0,j.Uw)([]),[W,X]=(0,j.Uw)(null);let Y,Z;const[aa,ab]=(0,
j.Uw)([]),[ac,ad]=(0,j.Uw)(!1),[ae,af]=(0,j.Uw)(!1),ag=(0,r.tG)(),ah=(0,r.tG)(),ai=(0,i.fA)(),aj={Create:async function(){
return Z=await F("AdminCenter_Email_Empty_Error"),Y=await F("AdminCenter_IntegrationView_ADConnector_Warning"),L=s(k.J2,{
always_visible:!1,class_name:"tab-view-integration tab-view hidden"},s("div",{className:"integration-container"
},(a=>M(a)?s("div",{className:"loading-view"},s("div",{className:"action-progress-overlay-circle size48"})):O(a)?s("div",{
className:"error-text"},O(a)):ae(a)?async function(a){if(!U(a).length)return s(al,null);const b=function(a){
const b=U(a).find((a=>a.active));if(b)return b;if(W(a))return W(a);return null}(a);if(b)return async function(a){switch(a.type){
case"google-workspace":return async function(a){let b,c
;const d=a.provisioning&&!a.provisioning.hidden,e=a.sso&&!a.sso.hidden,f=d?0:1,[g,i]=(0,j.Uw)(f),k=s("div",{
className:"provider-view"},s("div",{className:"back-section"},s("div",{className:"icon icon-back",onclick:ar}),s("div",{
className:(0,m.bt)("icon"," ",v("google-workspace"))}),s("div",{className:"text"},w("google-workspace")," "),s("div",{
className:"icon icon-info hidden",title:await F("AdminCenter_IntegrationView_Remove_Provisioning_Tooltip")
})),(async a=>s("div",{className:"tab-selector"},d&&s(au,{label:F("AdminCenter_IntegrationView_SCIM_Title_Text"),
selected:0===g(a),onClick:()=>i(0)}),e&&s(au,{label:F("AdminCenter_IntegrationView_SSO_Title_Text"),selected:1===g(a),
onClick:()=>i(1)}))),s("div",{className:"tab-views"},(async a=>0===g(a)?s(t,null):s("div",{className:"tab-view-sso tab-view"
},s("div",{className:"info-message"},s("div",{className:"icon"}),s("div",{className:"description"
},await F("AdminCenter_IntegrationView_SSO_Setup_Description_Text"))),s("div",{className:"appid-section"},s("div",{
className:"input-title"},await F("AdminCenter_IntegrationView_SSO_ApplicationID_Text")),s("div",{className:"input-copy-section"
},s("input",{type:"text",disabled:!0,value:await F("AdminCenter_IntegrationView_SSO_ApplicationID_Text"),autocomplete:"off",
autocorrect:"off",autocapitalize:"off",spellcheck:!1}))),s("div",{className:"oidc-section"},s("div",{className:"input-title"
},await F("AdminCenter_IntegrationView_SSO_OIDC_URL_Text")),s("div",{className:"input-copy-section"},s("input",{type:"text",
disabled:!0,value:await F("AdminCenter_IntegrationView_SSO_OIDC_URL_Text"),autocomplete:"off",autocorrect:"off",
autocapitalize:"off",spellcheck:!1}))),s("button",{className:"button default-button disabled"
},await F("AdminCenter_EditorButton_Apply"))))));return k;async function t(){var d;return s("div",{
className:"tab-view-scim tab-view"},(null===(d=a.provisioning)||void 0===d?void 0:d.enable)?s(f,null):s(e,null))
;async function e(){return s("div",{className:"setup-section"},s("div",{className:"info-message"},s("div",{className:"icon"
}),s("div",{className:"description"},await F("AdminCenter_IntegrationView_Google_Provisioning_Description"))),s("div",{
className:"server-section"},s("div",{className:"input-title"
},await F("AdminCenter_IntegrationView_Google_Admin_Email_Text")),s("div",{className:"input-copy-section"},c=s("input",{
type:"text",disabled:!1,value:"",autocomplete:"off",placeholder:await F("AdminCenter_IntegrationView_Google_Admin_Email_Text"),
autocorrect:"off",autocapitalize:"off",spellcheck:!1}))),s("div",{className:"token-section"},s("div",{className:"input-title"
},await F("AdminCenter_IntegrationView_Google_Account_Key_Text")),s("button",{className:"button",onclick:()=>u()
},await F("AdminCenter_IntegrationView_Google_Upload_JSON_Text"))),s("button",{className:"button default-button",onclick:()=>y()
},await F("AdminCenter_EditorButton_Apply")),b=s("div",{className:"error-text hidden"}))}async function f(){return s("div",{
className:"remove-section"},s("div",{className:"status-section"},s("div",{className:"text status"
},await F("AdminCenter_IntegrationView_Provisioning_Status_Text")),s("div",{className:"icon-text"},s("div",{
className:"icon status-complete"}),s("div",{className:"text status"
},await F("AdminCenter_UsersTabView_UserStatus_Active_Text"))),s("div",{className:"flex-cell"}),s("div",{className:"text"
},await F("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Last"),":"),s("div",{className:"flex-cell"}),s("button",{
className:"button warning-button"},await F("AdminCenter_IntegrationView_Remove_Provisioning_Button"))),s("div",{
className:"info-message"},s("div",{className:"icon"}),s("div",{className:"description"
},await F("AdminCenter_IntegrationView_Remove_Provisioning_Text"))))}}function u(){(0,l.D$)((async()=>{await x()
}),(()=>()=>{}),0,null)}async function x(){const a=await(0,l.tf)([".json"]);if(!a)return;const b=await(0,n.wv)((0,o.TT)(a));try{
JSON.parse(b)}catch(c){C((0,q.EB)(c))}}function y(){B();const b=c.value;if(!b)return void C(Z);const d=(0,p.MA)(b);d.ok?(0,
l.PQ)((async()=>{var c;const d=(0,r.f4)(null,null,null),e={active:!0,provisioning:{type:"google",enable:!0,google:{email:b}}}
;(null==a?void 0:a.id)?e.id=null==a?void 0:a.id:e.idpId=null==a?void 0:a.idpId
;const f=(await A.UpdateCompanyIntegrationSettings(R,[e],d)).providers.find((a=>a.active));if(f){
const a=await F("AdminCenter_IntegrationView_AddProvisioning_Notification",[w(null!==(c=f.type)&&void 0!==c?c:"")])
;z.ShowNotification(a,null,null);const b={event:9};D.onEvent.CallAllSync([b])}else C("Setup Google provisioning failed")
}),(()=>()=>{}),0,null,(a=>C((0,q.EB)(a)))):C(d.description||"Error")}function B(){(0,l.SE)(b),(0,h.eX)(b,"")}function C(a){(0,
l.l5)(b),(0,h.eX)(b,a)}}(a);case"ad-connector":return(0,d.y)({localization:E,provider:a,ad_connector:Q,on_disable:ap,
on_go_back:ar});default:return async function(a){const b=a.type||"";let c,d
;const f=a.provisioning&&!a.provisioning.hidden,h=a.sso&&!a.sso.hidden,i=f?0:1,[n,t]=(0,j.Uw)(i);let u;const x=!1,[y,B]=(0,
j.Uw)(""),[C,E]=(0,
j.Uw)([]),G=await F("AdminCenter_IntegrationView_SSO_Service_For_No_One_Label"),M=await F("AdminCenter_IntegrationView_SSO_Service_For_No_One_Text"),N=await F("AdminCenter_IntegrationView_SSO_Service_For_All_Label"),O=await F("AdminCenter_IntegrationView_SSO_Service_For_All_Text"),P=await F("AdminCenter_IntegrationView_SSO_Service_For_Select_Label"),Q=await F("AdminCenter_IntegrationView_SSO_Service_For_Select_Text"),T=await F("AdminCenter_IntegrationView_SSO_Group_Select_Dialog_Text"),U=await F("AdminCenter_IntegrationView_SSO_Group_Select_Search_Placeholder"),V=[{
value:0,label:G,description:M},{value:1,label:N,description:O},{value:2,label:P,description:Q}],W=new Map,X=s("div",{
className:"provider-view"},s("div",{className:"back-section"},c=s("button",{
className:(null==a?void 0:a.active)?"icon icon-back hidden":"icon icon-back",onclick:ar}),s("div",{className:(0,
m.bt)("icon"," ",v(b))}),s("div",{className:"text"},w(b)," "),d=s("div",{className:"icon icon-info hidden",
title:await F("AdminCenter_IntegrationView_Remove_Provisioning_Tooltip")})),(async a=>s("div",{className:"tab-selector"
},f&&s(au,{label:F("AdminCenter_IntegrationView_SCIM_Title_Text"),selected:0===n(a),onClick:()=>t(0)}),h&&s(au,{
label:F("AdminCenter_IntegrationView_SSO_Title_Text"),selected:1===n(a),onClick:()=>t(1)}))),s("div",{className:"tab-views"
},(async a=>1===n(a)?[Z()]:[s(ad,null)])));function Z(){var b;return s("div",{className:"tab-view-sso"
},(null===(b=a.sso)||void 0===b?void 0:b.enable)?s(aE,null):s(aG,null))}function ad(){return s("div",{
className:"tab-view-scim tab-view"},b());function b(){var b
;return(null===(b=a.provisioning)||void 0===b?void 0:b.enable)?s(af,null):s(ae,null)}}function ae(){var b,c
;const d=(null===(c=null===(b=a.provisioning)||void 0===b?void 0:b.scim)||void 0===c?void 0:c.serverUrl)||"";return s("div",{
className:"setup-section"},s("div",{className:"info-message"},s("div",{className:"icon"}),s("div",{className:"description"
},F("AdminCenter_IntegrationView_SCIM_Description_Text"))),s("div",{className:"server-section"},s("div",{className:"input-title"
},F("AdminCenter_IntegrationView_SCIM_ServerUrl_Text")),s("div",{className:"input-copy-section"},s("input",{type:"text",
disabled:!0,value:d,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1}),s("button",{className:"button",
disabled:!d,onclick:ah},F("Editor_Cmd_Copy_Flat")))),s("div",{className:"token-section"},s("div",{className:"input-title"
},F("AdminCenter_IntegrationView_SCIM_Token_Text")),s("div",{className:"input-copy-section"},(async a=>[s("input",{type:"text",
disabled:!0,placeholder:"Generate New Token",value:y(a),autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1
}),s("button",{className:"button "+(y(a)?"":"disabled"),onclick:aj},F("Editor_Cmd_Copy_Flat"))])),s("button",{
className:"button default-button",onclick:am
},F("AdminCenter_IntegrationView_SCIM_Token_Generate_Text"))),(async a=>y(a)?s("div",{className:"info-message"},s("div",{
className:"icon"}),s("div",{className:"description"},F("AdminCenter_IntegrationView_After_Token_Generated_Text"))):[]))}
function af(){return s("div",{className:"remove-section"},ag(),s("div",{className:"status-section"},s("div",{
className:"text status"},F("AdminCenter_IntegrationView_Provisioning_Status_Text")),s("div",{className:"icon-text"},s("div",{
className:"icon status-complete"}),s("div",{className:"text status"
},F("AdminCenter_UsersTabView_UserStatus_Active_Text"))),s("div",{className:"flex-cell"}),s("div",{className:"text"
},"Last Sync time:"),s("div",{className:"flex-cell"}),s("button",{className:"button warning-button",onclick:ao
},F("AdminCenter_IntegrationView_Remove_Provisioning_Button"))),s("div",{className:"info-message"},s("div",{className:"icon"
}),s("div",{className:"description"},F("AdminCenter_IntegrationView_Remove_Provisioning_Text"))))}function ag(){
return async a=>{const b=S(a);let c="";return(null==b?void 0:b.warnings)&&b.warnings.length>0&&b.warnings.forEach((a=>{
"ad-connector-active"===a.code?c=Y:"not-enough-licenses"===a.code&&(c=a.message||"")})),c?s("div",{
className:"info-message warning hidden"},s("div",{className:"icon"}),s("div",{className:"description"})):[]}}return(0,r.fI)((0,
j.Mj)((async a=>{const b=[];for(const c of aa(a)){const a=(await aC(c.policies)).find((a=>"UseSSOLogin"===a.m_name))
;"1"===(null==a?void 0:a.m_value)&&b.push(c)}E(b)}))),X;function ah(){x||(0,r.fI)(H.WriteText(u.value))}function aj(){
y(null)&&(0,r.fI)(ak(y(null),J))}async function ak(a,b){await H.WriteText(a),K=a,b&&al(b)}function al(a){I.Start((async b=>{
await(0,r.Gu)(a,b);let c="";try{c=await H.ReadText()}catch(d){}if(K===c||!c)try{await H.WriteText(" "),K=""}catch(d){}}))}
function am(){(0,l.PQ)((async()=>{var b,e,f;const g=(0,r.f4)(null,null,null),h={active:!0,provisioning:{type:"scim",enable:!0,
scim:{generateNewToken:!0}}};(null==a?void 0:a.id)?h.id=null==a?void 0:a.id:h.idpId=null==a?void 0:a.idpId
;const i=(await A.UpdateCompanyIntegrationSettings(R,[h],g)).providers.find((a=>a.active));if(i){
const a=(null===(e=null===(b=i.provisioning)||void 0===b?void 0:b.scim)||void 0===e?void 0:e.token)||"";(0,l.SE)(c),(0,l.l5)(d),
B(a);const g=await F("AdminCenter_IntegrationView_AddProvisioning_Notification",[w(null!==(f=i.type)&&void 0!==f?f:"")])
;z.ShowNotification(g,null,null);const h={event:9};D.onEvent.CallAllSync([h])}else ay("Generate token failed")
}),(()=>()=>{}),0,null,(a=>ay((0,q.EB)(a))))}function ao(){(0,l.PQ)((async()=>{var b;if(await async function(){const a=(0,
g.Sw)((0,
o.TT)(L),(0,g.p)((0,g.dK)("dialog-modal",await F("AdminCenter_IntegrationView_Remove_Provisioning_Button"),null),(()=>(0,
e._)((async(a,b)=>s("div",{className:"content"},s("div",{className:"confirmation-text"
},await F("AdminCenter_IntegrationView_Remove_Provisioning_Text")),s("div",{className:"buttons-bar"},s("button",{
className:"button",onclick:()=>{b(q.JS)}},await F("Cmd_Cancel_Flat")),s("button",{className:"button default-button",
onclick:()=>a(!0)},await F("Options_Devices_RemoveDevice_RemoveButton_Text")))))))));return z.ShowModalDialog(a,null)}()){
const c=(0,r.f4)(null,null,null),d={active:!1,id:null==a?void 0:a.id,provisioning:{type:"scim",enable:!1}}
;a.sso&&a.sso.enable&&(d.active=!0),await A.UpdateCompanyIntegrationSettings(R,[d],c)
;const e=await F("AdminCenter_IntegrationView_RemoveProvisioning_Notification",[w(null!==(b=a.type)&&void 0!==b?b:"")])
;z.ShowNotification(e,null,null);const f={event:9};D.onEvent.CallAllSync([f]),await an(c)}}),(()=>()=>{}),0,null,(a=>ay((0,
q.EB)(a))))}function ap(a){async function b(){const a=(0,g.Sw)((0,o.TT)(L),(0,g.p)((0,
g.dK)("dialog-modal",await F("AdminCenter_IntegrationView_SSO_Activate_SSO_button"),null),(()=>(0,e._)((async(a,b)=>s("div",{
className:"content"},s("div",{className:"confirmation-text"
},await F("AdminCenter_IntegrationView_SSO_Activate_SSO_Dialog_Text")),s("div",{className:"buttons-bar"},s("button",{
className:"button",onclick:()=>{b(q.JS)}},await F("Cmd_Cancel_Flat")),s("button",{className:"button default-button",
onclick:()=>a(!0)},await F("AdminCenter_IntegrationView_SSO_Activate_SSO_button")))))))));return z.ShowModalDialog(a,null)}(0,
l.PQ)((async()=>{if(await b())try{ax(),await a()}finally{aw()}}),(()=>()=>{}),0,null,(a=>ay((0,q.EB)(a))))}
async function as(b,c){const d={active:!0,sso:{enable:!0,type:"oidc",oidc:{clientId:{default:b},config:{url:c}}}}
;(null==a?void 0:a.id)?d.id=null==a?void 0:a.id:d.idpId=null==a?void 0:a.idpId,
await A.UpdateCompanyIntegrationSettings(R,[d],null),D.onEvent.CallAllSync([{event:9}])}async function av(a,b){
0===a&&(await az([]),await aB(!1)),1===a&&(await aB(!0),await az([])),2===a&&(await aB(!1),b&&await az(b))}async function az(a){
const b=new Set(a.map((a=>a.id))),c=50,d=[],e=aa(null);for(let g=0;g<e.length;g+=c)d.push(e.slice(g,g+c))
;for(const g of d)await Promise.all(g.map((async a=>{const c=b.has(a.id);await aA(a,c)})))
;const f=await z.GetCompanyGroups(!0,null);ab([...f]),D.onEvent.CallAllSync([{event:9}])}async function aA(a,b){
const c=await aC(a.policies),d=c.find((a=>"UseSSOLogin"===a.m_name)),e="1"===(null==d?void 0:d.m_value);if(!b&&!d)return
;if(b===e)return;const f=c.filter((a=>"UseSSOLogin"!==a.m_name));b&&f.push({m_name:"UseSSOLogin",m_section:"[CONFIG]",
m_value:"1"});const g=await ai.Save(f);await z.UploadGroupPolicies(a.id,g,null)}async function aB(a){
const b=(await z.GetCompanyInfo(!1,null)).policies||"";let c=await ai.Parse(b);const d=c.length
;if(c=c.filter((a=>"UseSSOLogin"!==a.m_name)),a&&c.push({m_name:"UseSSOLogin",m_section:"[CONFIG]",m_value:"1"}),d!==c.length){
const a=await ai.Save(c);await z.UploadCompanyPolicies(a,null)}await at()}async function aC(a){return a?ai.Parse(a):[]}
function aD(){async function b(){
const a=(0,g.Sw)((0,o.TT)(L),(0,g.p)((0,g.dK)("dialog-modal",await F("AdminCenter_IntegrationView_SSO_Remove_SSO_Title"),null),(()=>(0,
e._)((async(a,b)=>s("div",{className:"content"},s("div",{className:"confirmation-text"
},await F("AdminCenter_IntegrationView_SSO_Remove_SSO_Description_Text")),s("div",{className:"buttons-bar"},s("button",{
className:"button",onclick:()=>{b(q.JS)}},await F("Cmd_Cancel_Flat")),s("button",{className:"button warning-button",
onclick:()=>a(!0)},await F("AdminCenter_IntegrationView_SSO_Remove_SSO_button")))))))));return z.ShowModalDialog(a,null)}(0,
l.PQ)((async()=>{var c;const d=(0,r.f4)(null,null,null);if(!await b())return;const e={
active:(null===(c=a.provisioning)||void 0===c?void 0:c.enable)||!1,sso:{enable:!1}}
;(null==a?void 0:a.id)?e.id=null==a?void 0:a.id:e.idpId=null==a?void 0:a.idpId,
await A.UpdateCompanyIntegrationSettings(R,[e],null);const f=await F("AdminCenter_IntegrationView_RemoveSSO_Notification")
;z.ShowNotification(f,null,null);const g={event:9};D.onEvent.CallAllSync([g]),await an(d)}),(()=>()=>{}),0,null,(a=>ay((0,
q.EB)(a))))}function aE(){const[b,c]=(0,j.Uw)(0);return s("div",null,(async a=>{if(0===b(a)){return[await d()]}return[await e()]
}));async function d(){var b,d,e,f,g,h;return s("div",{className:"tab-view status-section-wrapper"},s("div",{
className:"info-message"},s("div",{className:"icon"}),s("div",{className:"description"
},await F("AdminCenter_IntegrationView_SSO_Description_Text"))),s("div",{className:"status-section"},s("div",{
className:"status-row"},s("div",{className:"title"},await F("AdminCenter_IntegrationView_SSO_Status_Text"),":"),s("div",{
className:"icon-text"},s("div",{className:"icon status-complete"}),s("div",{className:"text status"
},await F("AdminCenter_UsersTabView_UserStatus_Active_Text"))),s("div",null),s("button",{
className:"button warning-button aligned-right",onclick:aD
},await F("AdminCenter_IntegrationView_AD_Connector_Disable_Button"))),s("div",{className:"status-row"},s("div",{
className:"title"},await F("AdminCenter_IntegrationView_SSO_ApplicationID_Text"),":"),s("div",{className:"text span-full"
},null===(e=null===(d=null===(b=a.sso)||void 0===b?void 0:b.oidc)||void 0===d?void 0:d.clientId)||void 0===e?void 0:e.default)),s("div",{
className:"status-row"},s("div",{className:"title"},await F("AdminCenter_IntegrationView_SSO_OIDC_URL_Text"),":"),s("div",{
className:"text span-full"
},null===(h=null===(g=null===(f=a.sso)||void 0===f?void 0:f.oidc)||void 0===g?void 0:g.config)||void 0===h?void 0:h.url))),s("div",{
className:"select-groups-wrapper"},(async a=>{
if(C(a).length>0&&!ac(a))return[s("p",null,await F("AdminCenter_IntegrationView_SSO_Service_Active_For_Groups"),":"),s("ul",{
className:0===C(a).length?"hidden":""},C(a).map((a=>s("li",null,a.name))))]
;let b=await F("AdminCenter_IntegrationView_SSO_Service_Active_For_No_One")
;return ac(a)&&(b=await F("AdminCenter_IntegrationView_SSO_Service_Active_For_All")),
[s("p",null,await F("AdminCenter_IntegrationView_SSO_Service_Active_For"),": ",s("strong",null,b))]}),s("button",{
onclick:()=>c(1)},await F("AdminCenter_IntegrationView_SSO_Change_Service_Assigment"))))}async function e(){const[a,b]=(0,
j.Uw)(null),d=C(null);return s("div",{className:"tab-view sso-setup-view"},s("div",{className:"tab-title"
},await F("AdminCenter_IntegrationView_SSO_Sync_Settings_View_Title")),s("p",{className:"sso-groups-text"
},await F("AdminCenter_IntegrationView_SSO_Service_Active_For_Text"),":"),s(aH,{onGroupSelectionChange:b,
selected_placeholder_groups:d,initialy_selected_group_selector_type:aF()}),s("div",{className:"tab-action-bar"},(async b=>{
const c=e(a(b),C(b));return[s("button",{className:"button default-button "+(c?"":"disabled"),onclick:g
},await F("AdminCenter_IntegrationView_SSO_Activate_SSO_button"))]})));function e(a,b){if(null===a)return!1;const c=aF()
;return 0===c?ac(null)||b.length>0:1===c?!ac(null):!f(a,b)}function f(a,b){
return a===b||null!==a&&null!==b&&(a.length===b.length&&a.every((a=>b.includes(a))))}function g(){const b=aF();ap((async()=>{
await av(b,a(null));const d=await F("AdminCenter_IntegrationView_SSO_Updated_Notification");z.ShowNotification(d,null,null),c(0)
}))}}}function aF(){for(const[a,b]of W)if(b.IsChecked())return a;return C(null).length>0&&!ac(null)?2:ac(null)?1:0}
function aG(){var b,c,d,e,f,g
;const[h,i]=(0,j.Uw)(0),[k,l]=(0,j.Uw)((null===(d=null===(c=null===(b=a.sso)||void 0===b?void 0:b.oidc)||void 0===c?void 0:c.clientId)||void 0===d?void 0:d.default)||""),[m,n]=(0,
j.Uw)((null===(g=null===(f=null===(e=a.sso)||void 0===e?void 0:e.oidc)||void 0===f?void 0:f.config)||void 0===g?void 0:g.url)||"")
;return s("div",{className:"tab-view"},(async a=>{if(0===h(a)){return[await o()]}return[await q()]}));async function o(){var b
;const[c,d]=(0,j.Uw)("");function e(){const a=(0,p.vN)(m(null));a&&a.m_host?i(1):d("Error message related to a specific field")}
return(0,r.fI)((0,j.Mj)((async a=>{m(a),d("")}))),s("div",{className:"sso-setup-view"},s("div",{className:"tab-title"
},await F("AdminCenter_IntegrationView_SSO_Setup_First_Step_View_Title",[w(null!==(b=a.type)&&void 0!==b?b:"")])),s("div",{
className:"info-message"},s("div",{className:"icon"}),s("div",{className:"description"
},await F("AdminCenter_IntegrationView_SSO_Setup_Description_Text"))),s("div",{className:"sso-setup-inputs"},s("div",{
className:"appid-section"},s("div",{className:"input-title"
},await F("AdminCenter_IntegrationView_SSO_ApplicationID_Text")),s("div",{className:"input-sso"},s("input",{type:"text",
value:k(null),placeholder:await F("AdminCenter_IntegrationView_SSO_ApplicationID_Text"),autocomplete:"off",autocorrect:"off",
autocapitalize:"off",spellcheck:!1,onkeyup:a=>aq(a,(a=>l(a)))}))),s("div",{className:"oidc-section"},s("div",{
className:"input-title"},await F("AdminCenter_IntegrationView_SSO_OIDC_URL_Text")),s("div",{className:"input-sso"},s("input",{
type:"text",value:m(null),placeholder:await F("AdminCenter_IntegrationView_SSO_OIDC_URL_Text"),autocomplete:"off",
autocorrect:"off",autocapitalize:"off",spellcheck:!1,onkeyup:a=>aq(a,(a=>n(a)))}),(a=>{const b=c(a);return b?[s("p",{
className:"input-error-message"},b)]:[]})))),s("div",{className:"tab-action-bar"},(async a=>{const b=Boolean(k(a)&&m(a))
;return s("button",{className:"button default-button "+(b?"":"disabled"),disabled:!b,onclick:b?e:null
},await F("AdminCenter_Next_Text"))})))}async function q(){const[b,c]=(0,j.Uw)(null);return s("div",{className:"sso-setup-view"
},s("div",{className:"tab-title"},await F("AdminCenter_IntegrationView_SSO_Setup_Second_Step_View_Title")),s("div",{
className:"info-message"},s("div",{className:"icon"}),s("div",{className:"description"
},await F("AdminCenter_IntegrationView_SSO_Second_Step_Description_Text"))),s("p",{className:"sso-groups-text"
},await F("AdminCenter_IntegrationView_SSO_Service_Active_For_Text"),":"),s(aH,{onGroupSelectionChange:c}),s("div",{
className:"tab-action-bar"},s("button",{className:"button",onclick:()=>i(0)
},await F("AdminCenter_Back_Text")),(async a=>[s("button",{className:"button default-button "+(null===b(a)?"disabled":""),
disabled:null===b(a),onclick:d},await F("AdminCenter_IntegrationView_SSO_Activate_SSO_button"))])));function d(){ap((async()=>{
var c;const d=aF();await as(k(null),m(null)),await av(d,b(null))
;const e=await F("AdminCenter_IntegrationView_AddSSO_Notification",[w(null!==(c=a.type)&&void 0!==c?c:"")])
;z.ShowNotification(e,null,null);const f=(0,r.f4)(null,null,null);await an(f)}))}}}
function aH({selected_placeholder_groups:a,initialy_selected_group_selector_type:b,onGroupSelectionChange:c}){const[d,e]=(0,
j.Uw)(b||0),[f,g]=(0,j.Uw)(a||[]);return(0,r.fI)((0,j.Mj)((async a=>{
if(2===d(a))return 0===f(a).length?void c(null):void c(f(a));1!==d(a)?c([]):c(aa(a))}))),
s("div",null,aI(V,d(null),e),(async a=>{if(2===d(a)){const b=f(a).length>0;return[s("div",{
className:"select-groups-wrapper margin-left"},b&&s("ul",null,f(a).map((a=>s("li",null,a.name)))),s("button",{onclick:h
},await F("AdminCenter_IntegrationView_SSO_Service_Select_Groups")))]}return[]}));function h(){(0,l.D$)((async()=>{let b=f(null)
;function c(a){g(a)}0===b.length&&a&&(b=a),await z.ShowSelectGroupsForSSO(aa(null),b,{fields:[{key:"name",
label:await F("AdminCenter_Name_Text"),sortable:!0}],translations:{text:T,search_placeholder:U,
cancel_btn:await F("Cmd_Cancel_Flat"),ok_btn:await F("AdminCenter_EditorButton_Apply")},on_ok_callback:c},null)
}),(()=>()=>{}),0,null)}}function aI(a,b,c){return W.clear(),s("div",{className:"radio-wrapper"},a.map((a=>{let c
;const e=s("div",{className:"radio-option"},c=s(k.a,{text:a.label,checked:a.value===b,onchange:()=>d(a.value)}),s("span",{
className:"description"},a.description));return W.set(a.value,c),e})));function d(a){const b=W.get(a)
;b&&!(null==b?void 0:b.IsChecked())&&(W.forEach((a=>{a.SetChecked(!1)})),b.SetChecked(!0),c(a))}}}(a)}}(b);return s(am,null)
}(a):s(ak,null)))),L},OnAfterShow:function(){G?(G=!1,ag.Start((async a=>{await an(a)})),null==L||L.Init()):ah.Start((async a=>{
await as(a)}))},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){ag.Cancel(),null==L||L.UnInit()}};return(0,
r.fI)((0,j.Mj)((async a=>{const b=S(a);V(b?function(a){if(!a||!a.providers||0===a.providers.length)return[]
;const b=a.providers,c=[];for(const d of b){if(!d.type||!ao(d.type))continue;if(d.hidden)continue
;const a=d.provisioning&&!d.provisioning.hidden,b=d.sso&&!d.sso.hidden;(a||b)&&c.push(d)}return c}(b):[])}))),aj;function ak(){
return s("div",{className:"verify-email-section"},s("div",{className:"text"
},F("AdminCenter_IntegrationView_Verify_Email_Error")),s("button",{className:"button default-button",onclick:av
},F("AdminCenter_IntegrationView_Verify_Email_Text")))}function al(){return s("div",{className:"no-providers-view hidden"
},F("AdminCenter_IntegrationView_Empty_Providers_list"))}function am(){return s("div",{className:"main-view"},s("div",{
className:"choose-section"},s("div",{className:"icon"}),s("div",{className:"text"
},F("AdminCenter_IntegrationView_ChooseProvider_Text"))),s("div",{className:"provider-selector"
},(async a=>U(a).map((a=>function(a){const b=a.type||"",c=s("div",{className:"provider-button",onclick:()=>d(a)},s("div",{
className:(0,m.bt)("icon"," ",v(b))}),s("div",{className:"flex-cell"}),s("div",{className:"text"},w(b)));return c;function d(a){
X(a)}}(a))))))}async function an(a){ax(),T(null);const b=await B.GetRoboFormAccountInfo(a);if(af(Boolean(b.emailVerified)),!R){
if(!b.companies||!b.companies.length){aw();return void ay(await F("AdminCenter_No_Company_for_current_Admin_Text"))}
const a=b.companies[0].companyId||"";if(!a){aw();return void ay(await F("AdminCenter_Company_ID_Undefined"))}R=a}
if(b.emailVerified){try{const b=await A.GetCompanyIntegrationSettings(R,a),c=await async function(){const b={id:999,
type:"ad-connector",provisioning:{enable:!1}};try{const c=await A.GetADConnectorData(a);if(Q=JSON.parse(c),Q.reset)return b
;b.provisioning={enable:!0},b.active=!0}catch(c){}return b}();b.providers||(b.providers=[]),b.providers.push(c),T(b)}catch(c){
aw(),ay((0,q.EB)(c))}await as(a),aw()}else aw()}function ao(a){return t.includes(a)}function ap(a){(0,l.PQ)((async()=>{var b
;if(await async function(){
const a=(0,g.Sw)((0,o.TT)(L),(0,g.p)((0,g.dK)("dialog-modal",await F("AdminCenter_IntegrationView_Disable_ADConnector_Dialog_Title"),null),(()=>(0,
e._)((async(a,b)=>s("div",{className:"content"},s("div",{className:"confirmation-text"
},await F("AdminCenter_IntegrationView_Disable_ADConnector_Dialog_Body",["WIN-088C6AHEQV","agolov@siber.com"])),s("div",{
className:"buttons-bar"},s("button",{className:"button",onclick:()=>{b(q.JS)}},await F("Cmd_Cancel_Flat")),s("button",{
className:"button warning-button",onclick:()=>a(!0)},await F("Options_Devices_DisableDevice_DisableButton_Text")))))))))
;return z.ShowModalDialog(a,null)}()){const c=(0,r.f4)(null,null,null);ax();try{const d=Object.assign(Object.assign({},Q),{
reset:!0}),e=JSON.stringify(d);await A.PutADConnectorData(e,c)
;const f=await F("AdminCenter_IntegrationView_RemoveProvisioning_Notification",[w(null!==(b=a.type)&&void 0!==b?b:"")])
;z.ShowNotification(f,null,null),D.onEvent.CallAllSync([{event:9}])}finally{await an(c)}}}),(()=>()=>{}),0,null,(a=>ay((0,
q.EB)(a))))}function aq(a,b){if(a.target){b(a.target.value)}}function ar(){X(null)}async function as(a){
const b=await z.GetCompanyGroups(!1,a);ab([...b]),await at()}async function at(){
const a=(await z.GetCompanyInfo(!1,null)).policies||"",b=(await ai.Parse(a)).find((a=>"UseSSOLogin"===a.m_name))
;ad("1"===(null==b?void 0:b.m_value)||!1)}function au({label:a,onClick:b,selected:c}){return s("button",{
className:"tab-button "+(c?"selected":""),onclick:()=>b()},s("span",{className:"text"},a))}function av(){(0,l.PQ)((async()=>{
const a=(0,r.f4)(null,null,null),b=(await B.GetRoboFormAccountInfo(a)).email||"";if(!b)return aw(),
void ay("Account email is empty or undefined");await C.SendVerificationCode("","email",b,a),await async function(a,b){
const c=(0,g.Sw)((0,o.TT)(L),(0,g.p)((0,g.dK)("dialog-modal verify-account-data verify-account-email","",null),(()=>(0,
f.z7)(a,E,{VerifyCode:b}))));return z.ShowModalDialog(c,null)}(b,(async(a,c)=>{await C.UpdateAccountInfo({email:b,
verificationCode:a},c)})),await an(a)}),(()=>()=>{}),0,null,(a=>ay((0,q.EB)(a))))}function aw(){N(!1)}function ax(){N(!0),P("")}
function ay(a){P(a)}}function v(a){switch(a){case"azure":return"icon-azure";case"okta":return"icon-okta";case"google-workspace":
return"icon-google";case"pingone":return"icon-ping";case"onelogin":return"icon-onelogin";case"custom":default:
return"icon-custom";case"ad-connector":return"icon-activedir"}}function w(a){switch(a){case"azure":return"Microsoft Entra ID"
;case"okta":return"Okta";case"google-workspace":return"Google Workspace / G Suite";case"pingone":return"Ping Identity"
;case"onelogin":return"OneLogin";case"custom":return"Custom";case"ad-connector":return"On-prem Active Directory";default:
return"Unknown provider"}}},29526:function(a,b,c){"use strict";c.d(b,{M:function(){return m}})
;var d=c(32105),e=c(63956),f=c(97490),g=c(78440),h=c(95399),i=c(69893),j=c(88262),k=c(4153),l=(c(13117),c(91764)._)
;function m(a,b,c,m,n){const o=a,p=b,q=c,r=n.LocalizeString,s=m.IsCurrentUserAdmin(null),[t,u]=(0,f.Uw)(!1);let v;return{
Create:async function(){return v=l(d.J2,{always_visible:!1,class_name:"no-license-view"},l("div",{className:"no-license"
},s?w():x(),(a=>l("div",{className:t(a)?"loading-view":"loading-view hidden"},l("div",{
className:"action-progress-overlay-circle size48"}))))),v},OnAfterShow:function(){v.Init()},OnBeforeHide:function(){},
Focus:function(){},Dispose:function(){v.UnInit()}};function w(){const[a,b]=(0,f.Uw)(!0),[c,s]=(0,f.Uw)("");let t,v
;return async b=>{const e=m.GetLicenseInfo(b);return l("div",{className:"sheet-container"},l("div",{className:"info"},l("div",{
className:"icon"}),l("span",{className:"text"},r("AdminCenter_NoLicense_Admin_Text"))),l("ul",{className:"license-info"
},l("li",{className:"info"},l("span",{className:"title"},r("AdminCenter_SettingsView_LicenseType_Text")),l("span",{
className:"value"},r("Options_LicenseType_Business_Text"))),l("li",{className:"info"},l("div",{
className:"licenses-count-wrapper"},l("div",{className:"licenses-count"},l("span",{className:"licenses-count-value"
},function(a){var b,c,d,e;if(!a)return""
;const f=null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,g=null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:0
;return`${(0,k.bf)(f)}/${(0,k.bf)(g)}`}(e)),l("span",{className:"licenses-count-text"
},r("AdminCenter_SettingsView_LicensesUsed_Text"))),l("div",{className:"licenses-count-bar"},l("div",{
className:"licenses-count-active-bar",style:{width:`${(0,k.bf)(w(e))}%`}})))),l("li",{className:"info"},l("span",{
className:"title"},r("AdminCenter_SettingsView_LicenseStatus_Text")),l("span",{className:"value"},function(a){if(!a)return""
;switch(a.status){case"active":return r("Options_LicenseStatus_ActiveSubscription_Text");case"expired":
return r("Options_LicenseStatus_ExpiredSubscription_Text");case"trial-expired":default:
return r("Options_LicenseStatus_ExpiredTrial_Text");case"trial":return r("Options_LicenseStatus_FreeTrial_Text")
;case"no-license":return r("Options_LicenseStatus_NoLicense_Text")}}(e))),l("li",{className:"info"},l("span",{className:"title"
},r("AdminCenter_SettingsView_ExpirationDate_Text")),l("div",{className:"flex-cell"}),l("span",{
className:"value expiration-date"},async function(a){var b,c;if(!a)return""
;const d=null!==(b=a.expirationTime)&&void 0!==b?b:0,e=null!==(c=await n.GetLanguageTag(null))&&void 0!==c?c:"en";return(0,
h.fQ)(d,e)}(e)),l("button",{className:"button default-button",onclick:x},r("AdminCenter_BuyNow_Text"))),function(a){
if(!a)return!1;switch(a.status){case"expired":case"trial-expired":return!0;default:return!1}}(e)&&l("li",{
className:"info activate-account"},l("span",{className:"title"},r("AdminCenter_NoLicense_ActivateAccount_Text")),l("div",{
className:"form"},t=l(d.ap,{className:"order-id",title:await r("AdminCenter_NoLicense_OrderId_Text"),oninput:z}),v=l(d.ap,{
className:"order-name",title:await r("AdminCenter_NoLicense_OrderName_Text"),oninput:z}),(b=>{const c=a(b);return l("button",{
className:c?"button disabled":"button",onclick:c?null:y,disabled:c},r("AdminCenter_NoLicense_Submit_Text"))})),(a=>{const b=c(a)
;return l("div",{className:""!==b?"error-text":"error-text hidden"},b)}))))};function w(a){var b,c,d,e;if(!a)return 0
;const f=null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,g=null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:0
;return g?Math.floor(f/g*100)||1:0}function x(){const a=(0,g.f4)(null,null,null);(0,g.fI)(o.OpenPaymentPage("buy",a))}
function y(){(0,e.PQ)((async()=>{const a=(0,g.f4)(null,null,null),b=t.GetValue().trim(),c=v.GetValue().trim()
;if(b.replace(/[^0-9]/g,"").length!==b.length||10!==b.length)throw(0,
i.ZU)(i.V2,await r("AdminCenter_NoLicense_ActivateAccount_Error",[b]));await p.ActivateRFBusinessLicense({orderId:b,orderName:c
},a);m.ShowNotification(await r("AdminCenter_SettingsView_LicenseActivation_Notification"),null,null),q.onEvent.CallAllSync([{
event:11}])}),(()=>(b(!0),t.Enable(!1),v.Enable(!1),()=>{b(!1),t.Enable(!0),v.Enable(!0)})),300,(()=>(u(!0),()=>{u(!1)})),(a=>{
var b,c;if((0,i.au)(a),(0,j.dW)(a)){
const d=null===(c=null===(b=a.httpResponse)||void 0===b?void 0:b.bodyAsValue)||void 0===c?void 0:c.errorMessage
;s("string"==typeof d?d:(0,i.EB)(a))}else s((0,i.EB)(a))}))}function z(){const a=t.GetValue().trim(),d=v.GetValue().trim()
;b(""===a||""===d),""!==c(null)&&s("")}}function x(){return l("div",{className:"sheet-container"},l("div",{className:"info"
},l("div",{className:"icon"}),l("span",{className:"text"},r("AdminCenter_NoLicense_GroupManager_Text"))))}}},
67310:function(a,b,c){"use strict";c.d(b,{N:function(){return E}})
;var d=c(84117),e=c(98266),f=c(12072),g=c(30651),h=c(37694),i=c(3566),j=c(30045),k=c(47333),l=c(53166),m=c(83382),n=c(54811),o=c(12131),p=c(31173),q=c(65852),r=c(63956),s=c(32105),t=c(97490),u=c(40868),v=c(78440),w=c(69893),x=c(4153),y=c(95399),z=c(73863),A=c(13113),B=(c(13117),
c(84224)),C=c(88262),D=c(91764)._;function E(a,b,c,E,H,I,J,K,L,M,N,O,P,Q,R){
const S=a,T=b,U=c,V=E,W=H,X=I,Y=J,Z=K,aa=L,ab=M,ac=R,ad=N,ae=O,af=P,ag=ac.LocalizeString;let ah=null,ai=null,aj=null
;const[ak,al]=(0,t.Uw)(""),[am,an]=(0,t.Uw)(!1),[ao,ap]=(0,t.Uw)(!1),[aq,ar]=(0,t.Uw)(!1),[as,at]=(0,t.Uw)(!1),[au,av]=(0,
t.Uw)(!1);let aw;const ax=ab.GetSettingsTab(),[ay,az]=(0,t.Uw)(ax);let aA;const[aB,aC]=(0,t.Uw)(""),[aD,aE]=(0,
t.Uw)(""),[aF,aG]=(0,t.Uw)(2),[aH,aI]=(0,t.Uw)("#2979FF"),[aJ,aK]=(0,t.Uw)(1),[aL,aM]=(0,t.Uw)("#2979FF"),[aN,aO]=(0,
t.Uw)(!0),[aP,aQ]=(0,t.Uw)(-1*(0,y.M1)());let aR,aS,aT,aU,aV,aW,aX=!1,aY=!1;const[aZ,a0]=(0,t.Uw)(""),[a1,a2]=(0,
t.Uw)(""),[a3,a4]=(0,t.Uw)(!0),[a5,a6]=(0,t.Uw)(!0);let a7,a8,a9,ba,bb,bc=!1,bd=!1,be=!1;const[bf,bg]=(0,t.Uw)(""),[bh,bi]=(0,
t.Uw)("no-license"),[bj,bk]=(0,t.Uw)(0),[bl,bm]=(0,t.Uw)(0),[bn,bo]=(0,t.Uw)(""),[bp,bq]=(0,t.Uw)(!0),[br,bs]=(0,
t.Uw)(""),[bt,bu]=(0,t.Uw)(!1);let bv,bw,bx=!1,by=!1,bz="",bA=null;const bB=(0,v.tG)(),bC=5e5,bD=300,bE=2,bF=39,bG=60,bH=2
;let bI;return{Create:async function(){return bz=await ag("AdminCenter_Email_Empty_Error"),aA=D("div",{className:"settings-view"
},(async a=>{ak(a);const b=ay(a);return D("div",{className:"navigation settings-navigation"},D("div",{
className:"tab-selector settings-tab-selector"},D("span",{className:"settings-title"
},ag("AdminCenter_Settings_Text")),D("button",{className:"general"===b?"tab-button selected":"tab-button",
title:await ag("AdminCenter_Settings_Tab_General_Text"),onclick:()=>bL("general")},D("div",{
className:"icon icon-settings-general"}),D("span",{className:"text"
},await ag("AdminCenter_Settings_Tab_General_Text"))),D("button",{className:"account"===b?"tab-button selected":"tab-button",
title:await ag("AdminCenter_Settings_Tab_Account_Text"),onclick:()=>bL("account")},D("div",{
className:"icon icon-settings-account"}),D("span",{className:"text"
},await ag("AdminCenter_Settings_Tab_Account_Text"))),D("button",{className:"license"===b?"tab-button selected":"tab-button",
title:await ag("AdminCenter_Settings_Tab_LicenseBilling_Text"),onclick:()=>bL("license")},D("div",{
className:"icon icon-settings-license"}),D("span",{className:"text"
},await ag("AdminCenter_Settings_Tab_LicenseBilling_Text")))))}),aw=D("div",{className:"settings-inner-view disabled"
},(async a=>{ak(a);const b=ay(a);return D("div",{className:"buttons-bar button-with-title"},D("span",{
className:"settings-subtitle"
},"general"===b?await ag("AdminCenter_Settings_Tab_General_Text"):"account"===b?await ag("AdminCenter_Settings_Tab_Account_Text"):await ag("AdminCenter_Settings_Tab_LicenseBilling_Text")),D("button",{
className:"button default-button",onclick:bK},ag("Cmd_Done_Flat")))}),(async a=>{ak(a)
;const b=Q.IsCurrentUserAdmin(a),c=am(a),e=ao(a),f=aq(a),g=ay(a),h=c||e||f;return D(s.J2,{always_visible:!1,view_initialized:h
},D("div",{className:"sheets-container"},D("div",{className:"general"===g?"sheet":"sheet hidden"},(async a=>{const c=aB(a)
;return D("div",{className:"setting"},D("span",{className:"setting-title"
},await ag("AdminCenter_SettingsView_CompanyName_Title")),aR=D("div",{className:"setting-value settings-name"},D("span",{
className:"name"},c),b&&D("button",{className:"edit-icon",title:await ag("Cmd_Edit_Flat"),onclick:bV})),b&&(aS=D("div",{
className:"name-edit-pane hidden"},aT=(0,s.ap)({title:await ag("AdminCenter_SettingsView_CompanyName_Title"),
className:"company-name-edit-box",value:c,oninput:bX,onblur:bW,onkeypress:a=>function(a){var b;a.key===B.U.Enter&&aT.Blur()
;if(a.key===B.U.Escape){const a=null!==(b=(0,x.TT)(ah).name)&&void 0!==b?b:"";aT.SetValue(a),aT.RemoveErrorState(),
aU.textContent="",bY(null)}}(a)}),aU=D("div",{className:"error-text"}))))}),b&&(async a=>{const b=aD(a),c=function(a){
if(""===a)return null;const b=function(a){var b;if(""===a)return"";const c=a.replace(/[<>]/g,"");let d=c.split(" ")
;if(d.length<2)return"";d=d.slice(1);for(const e of d){const a=e.split("=");if("src"===a[0]){
let c=null!==(b=a[1])&&void 0!==b?b:"";return""===c?"":(c=c.replace(/"/g,"").trim(),c)}}return""}(a);if(""===b)return null
;const c=new Image;return c.src=b,c}(b);return D("div",{className:"setting"},D("span",{className:"setting-title"
},await ag("AdminCenter_SettingsView_CompanyLogo_Title")),D("div",{className:"setting-value settings-logo"},D("div",{
className:b?"company-logo has-logo":"company-logo"
},null!=c?c:await ag("AdminCenter_SettingsView_CompanyLogo_Title")),""!==b?D("button",{className:"edit-icon",onclick:bZ,
title:await ag("AdminCenter_SettingsView_EditLogo_Tip")}):D("button",{className:"button",onclick:bZ,
title:await ag("AdminCenter_SettingsView_ChooseFile_Tip")},await ag("AdminCenter_SettingsView_ChooseFile_Title")),aV=D("span",{
className:"file-description hidden"},await ag("AdminCenter_SettingsView_MaxSize_Title")),aW=D("span",{
className:"file-load-result hidden"})))}),(a=>{const b=Q.GetColorTheme(a);return D("div",{
className:"setting setting-with-toggle"},D("span",{className:"setting-title"
},ag("AdminCenter_SettingsView_DarkTheme_Title")),D(s.Ig,{checked:"dark"===b,onchange:bJ}))}),(async a=>{const b=aF(a),c=aH(a)
;return D("div",{className:"setting"},D("span",{className:"setting-title"
},await ag("AdminCenter_SettingsView_UserAvatarColor_Title")),D("div",{className:"radio-group"},D(s.a,{
text:await ag("AdminCenter_SettingsView_Color_AccountStatusColors_Text"),
title:await ag("AdminCenter_SettingsView_Color_AccountStatusColors_Text"),checked:1===b,onchange:()=>b0(1,!0)}),D(s.a,{
text:await ag("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),
title:await ag("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),checked:2===b,onchange:()=>b0(2,!0)}),D(s.a,{
text:await ag("AdminCenter_SettingsView_Color_UserInitials_Text"),
title:await ag("AdminCenter_SettingsView_Color_UserInitials_Text"),checked:3===b,onchange:()=>b0(3,!0)}),D("div",{
className:"radio-button-with-color-change"},D(s.a,{text:await ag("AdminCenter_SettingsView_Color_OneForAll_Text"),
title:await ag("AdminCenter_SettingsView_Color_OneForAll_Text"),checked:4===b,onchange:()=>b0(4,!0)}),D("div",{
className:4===b?"colors-buttons-bar":"colors-buttons-bar disabled"
},["#2979FF","#31A629","#838789","#F0483F","#FFC509","#9AC73A","#7869C7","#00A2E8"].map((a=>D("div",{
className:a===c?"color-btn active":"color-btn",style:{backgroundColor:`${a}`},onclick:()=>function(a){
if(aH(null)===a||4!==aF(null))return;aI(a),(0,v.fI)((async()=>{await W.SetValue("UserAvatarHexColorType",a),
Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null)})())}(a)})))))))}),(async a=>{
const b=aJ(a),c=aL(a);return D("div",{className:"setting"},D("span",{className:"setting-title"
},await ag("AdminCenter_SettingsView_GroupAvatarColor_Title")),D("div",{className:"radio-group"},D(s.a,{
text:await ag("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),
title:await ag("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),checked:1===b,onchange:()=>b1(1,!0)}),D(s.a,{
text:await ag("AdminCenter_SettingsView_Color_GroupNameInitials_Text"),
title:await ag("AdminCenter_SettingsView_Color_GroupNameInitials_Text"),checked:2===b,onchange:()=>b1(2,!0)}),D("div",{
className:"radio-button-with-color-change"},D(s.a,{text:await ag("AdminCenter_SettingsView_Color_OneForAll_Text"),
title:await ag("AdminCenter_SettingsView_Color_OneForAll_Text"),checked:3===b,onchange:()=>b1(3,!0)}),D("div",{
className:3===b?"colors-buttons-bar":"colors-buttons-bar disabled"
},["#2979FF","#31A629","#838789","#F0483F","#FFC509","#9AC73A","#7869C7","#00A2E8"].map((a=>D("div",{
className:a===c?"color-btn active":"color-btn",style:{backgroundColor:`${a}`},onclick:()=>function(a){
if(aL(null)===a||3!==aJ(null))return;aM(a),(0,v.fI)((async()=>{await W.SetValue("GroupAvatarHexColorType",a),
Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null)})())}(a)})))))))}),(async a=>{
const b=ak(a),c=aN(a);return D("div",{className:"setting"},D("div",{className:"title-with-select"},D("span",{
className:"setting-title"},await ag("AdminCenter_SettingsView_Language_Title")),(0,s.l6)(b,c,await async function(){
return bI=new Map([["",await ag("Options_Language_DefaultOption",[await b3()])],...F]),bI}(),(a=>{!function(a){(0,
r.PQ)((async()=>{var b,c;const d=ak(null),e=null!==(b=bI.get(d))&&void 0!==b?b:"",f=null!==(c=bI.get(a))&&void 0!==c?c:""
;if(e===f)return;if(await Q.ShowSaveConfirmationDialog(await ag("InterfaceLanguage_Warning",[e,f]))){const b=(0,
v.f4)(null,null,null);await ac.SetLanguageTag((0,m.p3)(null!=a?a:"en"),b),await W.SetValue("LocalizationFile",null!=a?a:"en"),
al(a),Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null)}else aO(!0)}),(()=>(aO(!1),()=>{aO(!0)
})),0,null,(a=>{Q.ShowNotification((0,w.EB)(a),null,2)}))}(a)}),{ariaLabel:ag("AdminCenter_SettingsView_Language_Title"),
seamlessDropdown:!0})),D("span",{className:"select-description"},await ag("AdminCenter_SettingsView_LanguageSelect_Text")))
}),(async a=>{const b=aP(a);return D("div",{className:"setting"},D("div",{className:"title-with-select"},D("span",{
className:"setting-title"},await ag("AdminCenter_SettingsView_TimeZone_Title")),(0,s.l6)(b,!0,function(){const a=[]
;for(const c of G)a.push([c,b(c)]);return new Map(a);function b(a){if(0===a)return"GMT";let b,c,d;return a>=0?(b="+",c=(0,
x.bf)((0,x.Qj)(a/60)),d=(0,x.bf)(a%60)):(b="-",c=(0,x.bf)(-1*(0,x.Qj)(a/60)),d=(0,x.bf)(a%60*-1)),1===c.length&&(c="0"+c),
1===d.length&&(d="0"+d),`GMT${b}${(0,x.bf)(c)}:${d}`}}(),(a=>function(a){if(aP(null)===a)return;aQ(a),(0,v.fI)((async()=>{
await W.SetValue("TimeZone",a),Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null)})())}(a)),{
ariaLabel:ag("AdminCenter_SettingsView_TimeZone_Title"),seamlessDropdown:!0})))})),D("div",{
className:"account"===g?"sheet":"sheet hidden"},(async a=>{const c=aZ(a),e=(0,d.QT)(c)||"NA";return D("div",{className:"setting"
},D("span",{className:"setting-title"},await ag("AdminCenter_SettingsView_FirstAndLastName_Text")),D("div",{
className:"first-last-name-container"},D("div",{className:bQ(c)},D("span",{className:"name-icon-text"},e)),a7=D("div",{
className:"setting-value settings-first-lastname"},D("span",{className:"name"},c),b&&D("button",{className:"edit-icon",
title:await ag("Cmd_Edit_Flat"),onclick:b4})),a8=D("div",{className:"first-lastname-edit-pane hidden"},a9=(0,s.ap)({
title:await ag("AdminCenter_SettingsView_FirstAndLastName_Text"),className:"first-lastname-name-edit-box",value:c,oninput:b5,
onblur:b7,onkeypress:b6}),ba=D("span",{className:"error-text"})),D("div",{className:"flex-cell"}),D("button",{
className:"button settings-button",onclick:b9},await ag("Cmd_Logoff_Flat"))))}),(async a=>{const c=a1(a),d=a3(a)
;return D("div",{className:"setting"},D("span",{className:"setting-title"},await ag("AdminCenter_Email_Title")),D("div",{
className:"email-container"},D("div",{className:"setting-value settings-email"},D("span",{className:"name"},c),b&&D("button",{
className:"edit-icon",title:await ag("Cmd_Edit_Flat"),onclick:ca})),""!==c&&!d&&D("div",{className:"account-email-not-verified"
},D("div",{className:"account-email-not-verified-button",onclick:bO},D("div",{className:"info-icon"}),D("div",{
className:"account-email-not-verified-text"},await ag("Options_Account_VerifyEmail_Button_Text"))),D("div",{
className:"tooltip-section"},await ag("Options_Account_VerifyEmailTooltip_Text")))))}),(async a=>{const b=a5(a);return D("div",{
className:"setting setting-with-button"},D("div",{className:"setting-title-with-description"},D("div",{
className:"setting-title setting-title-with-icon"},D("span",{className:b?"title disabled":"title"
},await ag("AdminCenter_SettingsView_ChangeMP_Text")),D("div",{className:b?"blocked-icon":"blocked-icon hidden",
title:await ag("Options_ManagedByPolicy_Text")})),D("p",{className:b?"setting-description disabled":"setting-description"
},await ag("AdminCenter_SettingsView_ChangeMP_Description"))),D("button",{
className:b?"button settings-button change-mp-button disabled":"button settings-button change-mp-button",disabled:b,
onclick:b?null:cc},await ag("AdminCenter_SettingsView_ChangePassword_Text")))}),(async a=>bt(a)?D("div",{className:"setting"
},D("button",{className:"button warning-button revert-button",onclick:cd
},ag("AdminCenter_SettingsView_DeleteBusinessTrial_Text"))):[])),D("div",{className:"license"===g?"sheet":"sheet hidden"},(a=>{
const b=bf(a);return D("div",{className:"setting single-row-setting"},D("span",{className:"setting-title"
},ag("AdminCenter_SettingsView_LicenseType_Text")),D("span",{className:"setting-value"},b))}),b&&(a=>{
const b=bj(a),c=bl(a),d=bh(a),e=`${(0,x.bf)(c)}/${(0,x.bf)(b)}`,f=b?Math.floor(c/b*100)||1:0;return D("div",{
className:"setting single-row-setting"},D("div",{className:"licenses-count-wrapper"},D("div",{className:"licenses-count"
},D("span",{className:"licenses-count-value"},e),D("span",{className:"licenses-count-text"
},ag("AdminCenter_SettingsView_LicensesUsed_Text"))),D("div",{className:"licenses-count-bar"},D("div",{
className:"licenses-count-active-bar",style:{width:`${(0,x.bf)(f)}%`}}))),D("button",{className:"button special-button",
onclick:()=>function(a){if(by)return;const b=function(a){switch(a){case"active":case"expired":return"buymore";default:
return"buy"}}(a);(0,r.D$)((async()=>{const a=(0,v.f4)(null,null,null);await V.OpenPaymentPage(b,a)}),(()=>(by=!0,()=>{by=!1
})),0,null)}(d)},function(a){switch(a){case"active":case"expired":return ag("AdminCenter_SettingsView_BuyMore_Text");default:
return ag("AdminCenter_BuyNow_Text")}}(d)))}),(a=>{const b=function(a){switch(a){case"active":
return ag("Options_LicenseStatus_ActiveSubscription_Text");case"expired":
return ag("Options_LicenseStatus_ExpiredSubscription_Text");case"trial-expired":
return ag("Options_LicenseStatus_ExpiredTrial_Text");case"trial":default:return ag("Options_LicenseStatus_FreeTrial_Text")
;case"no-license":return ag("Options_LicenseStatus_NoLicense_Text")}}(bh(a));return D("div",{
className:"setting single-row-setting"},D("span",{className:"setting-title"
},ag("AdminCenter_SettingsView_LicenseStatus_Text")),D("span",{className:"setting-value"},b))}),b&&(a=>{const b=bn(a)
;return D("div",{className:"setting single-row-setting"},D("span",{className:"setting-title"
},ag("AdminCenter_SettingsView_ExpirationDate_Text")),D("div",{className:"flex-cell"}),D("span",{
className:"setting-value expiration-date"},b),D("button",{className:"button",onclick:ce
},ag("AdminCenter_SettingsView_RenewNow_Text")))}),b&&(a=>{const b=bh(a);return"trial"===b||"trial-expired"===b?D("div",{
className:"setting activate-account"},D("span",{className:"title"},ag("AdminCenter_NoLicense_ActivateAccount_Text")),D("div",{
className:"form"},bv=D(s.ap,{className:"order-id",title:ag("AdminCenter_NoLicense_OrderId_Text"),oninput:cf}),bw=D(s.ap,{
className:"order-name",title:ag("AdminCenter_NoLicense_OrderName_Text"),oninput:cf}),(a=>{const b=bp(a);return D("button",{
className:b?"button disabled":"button",onclick:b?null:cg,disabled:b},ag("AdminCenter_NoLicense_Submit_Text"))})),(a=>{
const b=br(a);return D("div",{className:""!==b?"error-text":"error-text hidden"},b)})):D("div",{className:"hidden"})}))))
})),(a=>D("div",{className:au(a)?"loading-view":"loading-view hidden"},D("div",{
className:"action-progress-overlay-circle size48"})))),aA},OnAfterShow:function(){!function(){switch(ay(null)){case"general":
bM();break;case"account":bN();break;case"license":bP()}}();const a=ab.GetSettingsTab();a!==ay(null)&&az(a)},
OnBeforeHide:function(){},Focus:function(){},Dispose:function(){bB.Cancel()}};function bJ(){Q.UpdateColorTheme()}function bK(){
Q.CloseCompanySettingsView()}function bL(a){if(!as(null)&&a!==ay(null)){switch(ab.SetState({m_view:"settings",m_tab:a},!0,!1),
a){case"general":bM();break;case"account":bN();break;case"license":bP()}az(a)}}function bM(){am(null)||(0,r.PQ)((async()=>{
var a,b;ah=await Q.GetCompanyInfo(!1,null);const c=null!==(a=ah.name)&&void 0!==a?a:"";if(aC(c),Q.IsCurrentUserAdmin(null)){
const a=null!==(b=ah.logo)&&void 0!==b?b:"";if(a){const b=(0,u.fI)(a);b2(await(0,u.Z$)(b))}else aV&&(0,r.l5)(aV)}
const d=await X.GetValue("UserAvatarColorType",2),e=await X.GetValue("UserAvatarHexColorType","#2979FF");aG(d),aI(e)
;const f=await X.GetValue("GroupAvatarColorType",1),g=await X.GetValue("GroupAvatarHexColorType","#2979FF");aK(f),aM(g),b1(f,!1)
;const h=await X.GetValue("LocalizationFile","");al(h);const i=await X.GetValue("TimeZone",-1*(0,y.M1)());aQ(i),an(!0)
}),bR,bD,bT,(a=>{Q.ShowNotification((0,w.EB)(a),null,2)}))}function bN(){ao(null)||(0,r.PQ)((async()=>{var a,b,c,d
;const e=Q.IsCurrentUserAdmin(null)
;aj=await Q.GetLicenseInfo(!1,null),e&&aj.company&&aj.company.canRevertToConsumer&&"number"==typeof aj.company.numberOfUsers&&aj.company.numberOfUsers<=1?bu(!0):bu(!1),
ai=await Q.GetAccountInfo(!1,null),a0(null!==(a=ai.name)&&void 0!==a?a:""),a2(null!==(b=ai.email)&&void 0!==b?b:"")
;const f=null!==(c=ai.emailVerified)&&void 0!==c&&c;a4(f),await async function(a){const b=await aa.Parse(a)
;b.find((a=>"DisableChangeMasterPassword"===a.m_name))?(a6(!0),be=!0):(a6(!1),be=!1)}(null!==(d=ai.policies)&&void 0!==d?d:""),
ap(!0)}),bR,bD,bT,(a=>{Q.ShowNotification((0,w.EB)(a),null,2)}))}function bO(){(0,r.PQ)((async()=>{const a=a1(null),b=(0,
v.f4)(null,null,null);await S.SendVerificationCode("","email",a,b),await cb(a,(async(b,c)=>{await S.UpdateAccountInfo({email:a,
verificationCode:b},c)})),Q.ShowNotification(await ag("Options_Account_AccountDataIsVerifiedDialog_Email_Text"),null,null),
a4(!0),await Q.GetAccountInfo(!0,b)}),(()=>(bd=!0,()=>{bd=!1})),0,null,(a=>{(0,w.r5)(a,w.kd)||((0,w.au)(a),
Q.ShowNotification((0,w.EB)(a),null,2))}))}function bP(){aq(null)||(0,r.PQ)((async()=>{var a,b,c,d;const e=(0,
v.f4)(null,null,null),f=Q.IsCurrentUserAdmin(null);let g="";if(aj=await Q.GetLicenseInfo(!1,e),
g=aj.company?await ag("Options_LicenseType_Business_Text"):aj.family?await ag("Options_LicenseType_Family_Text"):await ag("Options_LicenseType_Premium_Text"),
bg(g),
aj.company&&f&&(bm(null!==(a=aj.company.numberOfUsers)&&void 0!==a?a:0),bk(null!==(b=aj.company.numberOfLicenses)&&void 0!==b?b:0)),
bi(aj.status?aj.status:"no-license"),aj.expirationTime&&f){
const a=null!==(c=aj.expirationTime)&&void 0!==c?c:0,b=null!==(d=await ac.GetLanguageTag(null))&&void 0!==d?d:"en";bo((0,
y.fQ)(a,b))}ar(!0)}),bR,bD,bT,(a=>{Q.ShowNotification((0,w.EB)(a),null,2)}))}function bQ(a){
if(""===a)return"first-last-name-icon";return`first-last-name-icon ${(0,i.dy)(a)}`}function bR(){return at(!0),(0,r.aZ)(aw),bS}
function bS(){(0,r.r9)(aw),at(!1)}function bT(){return av(!0),bU}function bU(){av(!1)}function bV(){aX||((0,r.SE)(aR),(0,
r.l5)(aS),aT.Focus())}function bW(){var a;const b=aT.GetValue().trim();(null!==(a=(0,x.TT)(ah).name)&&void 0!==a?a:"")!==b?(0,
r.PQ)((async()=>{var a;const c=await async function(a){if(a.length>bG){
return await ag("AdminCenter_SettingsView_Name_TooLongError_Text",[await ag("AdminCenter_SettingsView_CompanyName_Title"),bG.toString()])
}if(a.length<bH){
return await ag("AdminCenter_SettingsView_Name_TooShortError_Text",[await ag("AdminCenter_SettingsView_CompanyName_Title"),bH.toString()])
}if(/[\u0000-\u001f]/g.test(a)){
return await ag("AdminCenter_SettingsView_Name_Invalid_Text",[await ag("AdminCenter_SettingsView_CompanyName_Title")])}
if(/[*?"<>|\\/]/g.test(a)){
return await ag("AdminCenter_SettingsView_Name_InvalidChars_Text",[await ag("AdminCenter_SettingsView_CompanyName_Title"),'*?"<>|\\/'])
}return null}(b);if(c)throw c
;if(await Q.ShowSaveConfirmationDialog(await ag("AdminCenter_SettingsView_CompanyNameChange_Warning",[null!==(a=(0,
x.TT)(ah).name)&&void 0!==a?a:"",b]))){bY(b);const a=(0,v.f4)(null,null,null);await T.UpdateCompanyProperties(ae,{name:b},a),
Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null),await Q.UpdateCompanyLogoAndName(a),
ah=await Q.GetCompanyInfo(!1,null)}else bY(null)}),(()=>(aX=!0,(0,r.aZ)(aR),(0,r.aZ)(aT),()=>{aX=!1,(0,r.r9)(aR),(0,r.r9)(aT)
})),0,null,(a=>{aT.SetErrorState(),aT.Focus(),(0,l.eX)(aU,(0,w.EB)(a))})):bY(null)}function bX(){aU.textContent=""}
function bY(a){a&&aC(a),(0,r.l5)(aR),(0,r.SE)(aS)}function bZ(){aY||bB.Start((async a=>{await async function(a){aY=!0;try{
if(bA=await(0,r.tf)([".jpeg",".jpg",".png"]),!bA)throw(0,r.l5)(aV),(0,r.SE)(aW),(0,l.eX)(aW,""),w.JS;if(bA.size>=bC){
throw await ag("AdminCenter_SettingsView_LoadLogoError_Text")}aW.classList.remove("error"),(0,l.eX)(aW,bA.name),(0,r.SE)(aV),(0,
r.l5)(aW);const b=await async function(a){const b=await(0,u.At)((0,x.TT)(a)),c=await(0,u.n1)(b),d=new Image
;return d.src=`data:${a.type};base64,${c}`,d.outerHTML}((0,x.TT)(bA));await async function(a,b){const c=await(0,
u.zN)(a),d=await(0,u.n1)(c);if((0,x.TT)(ah).logo===d)return;(0,x.TT)(ah).logo=d,await T.UpdateCompanyProperties(ae,{logo:d},b)
}(b,a),
b2(b),await Q.UpdateCompanyLogoAndName(a),Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null),
await Q.GetCompanyInfo(!0,a)}catch(b){(0,w.r5)(b,w.kd)||(aW.classList.add("error"),(0,r.SE)(aV),(0,r.l5)(aW),(0,l.eX)(aW,(0,
w.EB)(b)))}finally{aY=!1}}(a)}))}function b0(a,b){aF(null)!==a&&(aG(a),b&&(0,v.fI)((async()=>{
await W.SetValue("UserAvatarColorType",a),Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null)
})()))}function b1(a,b){aJ(null)!==a&&(aK(a),b&&(0,v.fI)((async()=>{await W.SetValue("GroupAvatarColorType",a),
Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null)})()))}function b2(a){aE(a),(0,r.SE)(aV)}
async function b3(){var a,b;const c=(0,p.Jy)(),d=(0,m.YW)(c);return null!==(b=null===(a=F.find((a=>(0,
m.p3)(a[0])===d)))||void 0===a?void 0:a[1])&&void 0!==b?b:""}function b4(){bc||((0,r.SE)(a7),(0,r.l5)(a8),a9.Focus())}
function b5(){(0,l.eX)(ba,"")}function b6(a){var b;if(a.key===B.U.Enter&&b7(),a.key===B.U.Escape){const a=null!==(b=(0,
x.TT)(ai).name)&&void 0!==b?b:"";a9.SetValue(a),a9.RemoveErrorState(),(0,l.eX)(ba,""),b8(null)}}function b7(){
let a=a9.GetValue().trim();(0,x.TT)(ai).name!==a?(0,r.PQ)((async()=>{const b=(0,v.f4)(null,null,null),c=await async function(b){
if(a=(0,z.Gt)(b),!a){return await ag("AdminCenter_FullName_Empty_Error")}if(b.length>bF){
return await ag("AdminCenter_SettingsView_Name_TooLongError_Text",[await ag("AdminCenter_SettingsView_FirstAndLastName_Text"),bF.toString()])
}if(b.length<bE){
return await ag("AdminCenter_SettingsView_Name_TooShortError_Text",[await ag("AdminCenter_SettingsView_FirstAndLastName_Text"),bE.toString()])
}return null}(a);if(c)throw c;ai=await Q.GetAccountInfo(!1,b),await S.UpdateAccountInfo({accountId:ai.accountId,name:a},b),
Q.ShowNotification(await ag("Notification_SettingsChanges_Saved_Text"),null,null),b8(a),
await Q.UpdateAccountSectionUserInitialsAndColor(b),ai=await Q.GetAccountInfo(!1,b),Y.onEvent.CallAllSync([{event:1}])
}),(()=>(bc=!0,(0,r.aZ)(a7),(0,r.aZ)(a9),()=>{bc=!1,(0,r.r9)(a7),(0,r.r9)(a9)})),0,null,(a=>{a9.SetErrorState(),a9.Focus(),
ba.textContent=(0,w.EB)(a)})):b8(null)}function b8(a){a&&a0(a),(0,r.l5)(a7),(0,r.SE)(a8)}function b9(){Q.LogoutAction()}
function ca(){bd||(0,r.PQ)((async()=>{var a;const b=(0,v.f4)(null,null,null);ai=await Q.GetAccountInfo(!1,b)
;const c=await async function(a,b){let c
;const d=(0,e.Sw)(aA,(0,e.p)((0,e.dK)("dialog-modal ask-new-account-email",ag("AdminCenter_SettingsView_ChangeEmail_Text"),null),(()=>({
Create:async(b,d)=>{let e,f=!0;return D("div",{className:"content"},D("span",{className:"enter-email-text"
},await ag("AdminCenter_SettingsView_EnterValidEmail_Text")),D("div",{className:"email-edit-pane"},c=(0,s.ap)({
title:await ag("AdminCenter_Email_Title"),className:"company-email-edit-box",value:a,oninput:g,onkeypress:a=>h(a)}),bb=D("div",{
className:"error-text"})),D("div",{className:"buttons-bar"},D("div",{className:"button",onclick:()=>d(w.kd)
},await ag("Cmd_Cancel_Flat")),e=D("div",{className:"button default-button disabled",onclick:i},await ag("Cmd_Next_Flat"))))
;function g(){const b=c.GetValue().trim();(0,x.RA)(a,b)||!b?((0,r.aZ)(e),f=!0):((0,r.r9)(e),f=!1),bb.textContent=""}
function h(a){a.stopPropagation(),a.key===B.U.Enter&&i(),a.key===B.U.Escape&&c.Blur()}function i(){if(f)return
;const a=c.GetValue().trim(),d=g(a);if(d)return c.SetErrorState(),c.Focus(),bb.textContent=d,(0,r.aZ)(e),void(f=!0)
;function g(a){var b;if(!a)return bz;const c=(0,A.MA)(a);return c.ok?null:null!==(b=c.description)&&void 0!==b?b:"Error"}b(a)}},
OnAfterShow:()=>{},OnBeforeHide:()=>{},Focus:()=>{null==c||c.Focus()},Dispose:()=>{}}))));return Q.ShowModalDialog(d,b)
}(null!==(a=ai.email)&&void 0!==a?a:"",b);await S.SendVerificationCode("","email",c,b),await cb(c,(async(a,b)=>{
await S.UpdateAccountInfo({email:c,verificationCode:a},b)
})),a2(c),Q.ShowNotification(await ag("AdminCenter_SettingsView_EmailChanged_Text"),null,null),await Q.GetAccountInfo(!0,b),
Y.onEvent.CallAllSync([{event:1}])}),(()=>(bd=!0,()=>{bd=!1})),0,null,(a=>{(0,w.r5)(a,w.kd)||(0,l.eX)(bb,(0,w.EB)(a))}))}
async function cb(a,b){
const c=(0,e.Sw)(aA,(0,e.p)((0,e.dK)("dialog-modal verify-account-data verify-account-email","",null),(()=>(0,g.z7)(a,ac,{
VerifyCode:b}))));return Q.ShowModalDialog(c,null)}function cc(){be||(0,r.PQ)((async()=>{const a=(0,v.f4)(null,null,null)
;if(af){const b=await async function(a){const b=await U.GetRFOnlineUserId(),d=(0,e.Sw)(aA,(0,e.p)((0,
e.dK)("dialog-modal change-mp-dialog enter-old-mp",ag("MasterPass_Title3"),null),(()=>(0,
h.cx)("login-dialog content",!1,null,!1,{GetAccountDisplayInfo:async()=>({userId:b.userId,serverTitle:b.serverUrl&&(0,
k.sU)(b.serverUrl)||""}),OnLogin:async(a,b)=>{if(!await c.IsMasterPassword(a,b))throw(0,
o.rb)(1,await ag("MasterPassword_Error2"));return a},onForgotPassword:null,onChangeAccount:null},R,ad))))
;return Q.ShowModalDialog(d,a)}(a),d=await async function(a,b){const c=await async function(a){const b=(0,
n.q6)(),c=await Q.GetCompanyPoliciesValues(["MasterPasswordMinLength","MasterPasswordMinNonNumChars","MasterPasswordMinUpperCaseChars","MasterPasswordMinLowerCaseChars","MasterPasswordMinDigitChars"],a),d={
minLength:Number(c.MasterPasswordMinLength)||b.minLength,maxLength:b.maxLength,
minNonNumChars:Number(c.MasterPasswordMinNonNumChars)||b.minNonNumChars,
minUpperCaseChars:Number(c.MasterPasswordMinUpperCaseChars)||b.minUpperCaseChars,
minLowerCaseChars:Number(c.MasterPasswordMinLowerCaseChars)||b.minLowerCaseChars,
minDigitChars:Number(c.MasterPasswordMinDigitChars)||b.minDigitChars};return d}(b),d=(0,e.Sw)(aA,(0,e.p)((0,
e.dK)("dialog-modal change-mp-dialog enter-new-mp",ag("MasterPass_Title3"),null),(()=>(0,
f.rm)("change-master-password-dialog",ac,a,c,{IsPasswordCompromised:async(a,b)=>{const c=await Z.GetUpdateUserDataBreaches({
password:a},null,b);return!(!c||0===c.m_breaches.length)},WasNewMasterPasswordAlreadyUsed:async(a,b,c)=>{
const d=Number(await Q.GetCompanyPolicyValue("EnforceMPHistory",c));if(!d)return!1;try{
return await U.WasNewMasterPasswordAlreadyUsed(a,b,d,c)}catch(e){if((0,o.tM)(e,9)||(0,o.tM)(e,7))return!1;throw e}},
OnChangeMasterPassword:async(a,b,c,d)=>{await S.ChangeAccountPassword(a,b,c);(await U.GetRfoConnectionInfo(!0)).password=a,
Q.CloseCompanySettingsView(),d(a)}}))));return Q.ShowModalDialog(d,b)}(b,a);await async function(a,b){const c=(0,e.Sw)(aA,(0,
e.p)((0,
e.dK)("dialog-modal change-master-password-successfull-modal-dialog change-mp-dialog",ag("MasterPass_Title3"),null),(()=>(0,
f.Dn)("change-master-password-successfull-dialog content",ac,a,{OnDone:async(a,b)=>{b()}}))));return Q.ShowModalDialog(c,b)
}(d,a)}else await E.OpenChangeMasterPasswordDialog()}),(()=>(be=!0,()=>{be=!1})),0,null,(a=>{(0,
w.r5)(a,w.kd)||Q.ShowNotification((0,w.EB)(a),null,2)}))}function cd(){(0,r.PQ)((async()=>{if(await async function(a,b,c,d){
let f="dialog-modal ask-confirmation";a||(f=(0,z.bt)(f," ","no-title"));const g=D("div",{className:"text"
}),h=b.split("\n").filter((a=>""!==a));for(const e of h){const a=D("div",null,e);g.appendChild(a)}const i=(0,e.Sw)(aA,(0,
e.p)((0,e.dK)(f,null!=a?a:"",null),(()=>(0,j._)((async(a,b)=>D("div",{className:"content"},D("div",{
className:"confirmation-text"},g),D("div",{className:"buttons-bar"},D("button",{className:"button",onclick:()=>{a(!1)}
},d),D("button",{className:"button warning-button",onclick:()=>a(!0)},c))))))));return Q.ShowModalDialog(i,null)
}(await ag("Options_RevertToConsumer_Text"),await ag("Options_RevertToConsumer_Warning_Text"),await ag("Options_Yes"),await ag("Options_No"))){
await T.DeleteCompany(ae,null);const a={startPage:(0,q.vj)()};(0,v.fI)((async()=>{await E.OpenStartPage(a),window.close()})())}
}),(()=>()=>{}),0,null,(a=>{(0,w.r5)(a,w.kd)||Q.ShowNotification((0,w.EB)(a),null,2)}))}function ce(){bx||(0,r.D$)((async()=>{
const a=(0,v.f4)(null,null,null);await V.OpenPaymentPage("renew",a)}),(()=>(bx=!0,()=>{bx=!1})),null,null)}function cf(){
const a=bv.GetValue().trim(),b=bw.GetValue().trim();bq(""===a||""===b),""!==br(null)&&bs("")}function cg(){(0,r.PQ)((async()=>{
const a=(0,v.f4)(null,null,null),b=bv.GetValue().trim(),c=bw.GetValue().trim()
;if(b.replace(/[^0-9]/g,"").length!==b.length||10!==b.length)throw(0,
w.ZU)(w.V2,await ag("AdminCenter_NoLicense_ActivateAccount_Error",[b]));await S.ActivateRFBusinessLicense({orderId:b,orderName:c
},a);Q.ShowNotification(await ag("AdminCenter_SettingsView_LicenseActivation_Notification"),null,null),Y.onEvent.CallAllSync([{
event:11}])}),(()=>(at(!0),bq(!0),bv.Enable(!1),bw.Enable(!1),()=>{at(!1),bq(!1),bv.Enable(!0),bw.Enable(!0)
})),300,(()=>(av(!0),()=>{av(!1)})),(a=>{var b,c;if((0,w.au)(a),(0,C.dW)(a)){
const d=null===(c=null===(b=a.httpResponse)||void 0===b?void 0:b.bodyAsValue)||void 0===c?void 0:c.errorMessage
;bs("string"==typeof d?d:(0,w.EB)(a))}else bs((0,w.EB)(a))}))}}
const F=[["en-english","English"],["id-Indonesian","Bahasa Indonesia (Indonesian)"],["cz-Czech","Česky (Czech)"],["dk-Danish","Dansk (Danish)"],["de-German","Deutsch (German)"],["at-German","Deutsch - Österreich (Austrian German)"],["es-Spanish","Español (Spanish)"],["fr-French","Français (French)"],["hr-Croatian","Hrvatski (Croatian)"],["it-Italian","Italiano (Italian)"],["lt-Lithuanian","Lietuvių (Lithuanian)"],["hu-Hungarian","Magyar (Hungarian)"],["nl-Dutch","Nederlands (Dutch)"],["no-Norwegian","Norsk (Norwegian)"],["pl-Polish","Polski (Polish)"],["br-Brasilian","Português Brasileiro (Portuguese-BR)"],["pt-Portuguese","Português Portugal (Portuguese-PT)"],["sk-Slovak","Sloven�?ina (Slovak)"],["sb-Serbian","Srpski (Serbian-Latin)"],["fi-Finnish","Suomi (Finnish)"],["se-Swedish","Svenska (Swedish)"],["tr-Turkish","Türkçe (Turkish)"],["el-Greek","Ελληνικά (Greek)"],["ru-Russian","Ру�?�?кий (Russian)"],["sc-Serbian","Срп�?ки (Serbian-Cyrillic)"],["ua-Ukrainian","Україн�?ька (Ukrainian)"],["hy-Armenian","Հայերեն (Armenian)"],["he-Hebrew","עברית (Hebrew)"],["ar-Arabic","العربية (Arabic)"],["fa-Persian","�?ارسي (Persian)"],["hi-Hindi","हिंदी (Hindi)"],["kr-Korean","한국어 (Korean)"],["jp-Japanese","日本語 (Japanese)"],["zh-Chinese","正體中文 (Traditional Chinese)"],["cn-Chinese","简体中文 (Simplified Chinese)"]],G=[-720,-660,-600,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,510,540,570,600,660,720,780,840]
},29224:function(a,b,c){"use strict";c.d(b,{F:function(){return g}});var d=c(97490),e=c(13113),f=c(4153);function g(a){const b=a
;let c=null,g=null;const[h,i]=(0,d.Uw)("dashboard"),[j,k]=(0,d.Uw)("dashboard");return{Init:function(){c=o(),i(c.m_view),
l(c.m_view)},UnInit:function(){window.removeEventListener("hashchange",n)},AddOnHashChangeListener:function(a){g=a,
window.addEventListener("hashchange",n)},GetState:m,SetState:function(a,d,g){if((0,f.XM)(c,a))return;if(i(a.m_view),l(a.m_view),
c=Object.assign({},a),d){const d={};b&&(d[b]=!0),d["ac-view"]=a.m_view,c.m_id&&(d.id=c.m_id),c.m_query&&(d.query=c.m_query),
c.m_tab&&(d.tab=c.m_tab);const f=(0,e.HT)(d)
;g?window.history.replaceState(c,`RoboForm Admin Center - ${a.m_view}`,`#${f}`):window.history.pushState(c,`RoboForm Admin Center - ${a.m_view}`,`#${f}`)
}},GetActiveView:h,GetActiveTab:j,GetGroupTab:function(){const a=m();switch(a.m_tab){case"details":case"users":case"files":
case"security":case"backups":case"policies":return a.m_tab;default:return"users"}},GetReportsTab:function(a){const b=m()
;switch(b.m_tab){case"company":case"users":case"groups":return b.m_tab;default:return a?"company":"users"}},
GetSettingsTab:function(){const a=m();switch(a.m_tab){case"account":case"general":case"license":return a.m_tab;default:
return"general"}}};function l(a){switch(a){case"dashboard":case"users":case"groups":case"data":case"policies":case"integration":
case"reports":k(a);break;case"user-details":k("users");break;case"group-details":k("groups");break;default:k("dashboard")}}
function m(){return c||o()}function n(){const a=o();g&&g(a)}function o(){const a=(0,e._V)((0,
e.R2)(location.hash)),b=function(a){switch(a){case"dashboard":case"users":case"groups":case"data":case"policies":
case"integration":case"reports":case"settings":case"user-details":case"group-details":case"search":return a;default:
return"dashboard"}}((0,e.h0)(a,"ac-view")),c=(0,e.h0)(a,"id"),d=(0,e.h0)(a,"tab"),f=(0,e.h0)(a,"query"),g={m_view:b}
;return""!==c&&(g.m_id=c),""!==d&&(g.m_tab=d),""!==f&&(g.m_query=f),g}}},90655:function(a,b,c){"use strict";c.d(b,{q:function(){
return r}})
;var d=c(84117),e=c(87965),f=c(73549),g=c(53166),h=c(31173),i=c(32105),j=c(97490),k=c(63956),l=c(78440),m=c(73863),n=c(95399),o=c(4153),p=c(69893),q=(c(13117),
c(91764)._);function r(a,b,c,r,s){const t=a,u=b,v=s,w=s.LocalizeString,x=c,[y,z]=(0,j.Uw)("en");let A;const[B,C]=(0,
j.Uw)(!1),[D,E]=(0,j.Uw)(2);let F,G=null,H=null;const I=new Set,[J,K]=(0,j.Uw)(0),[L,M]=(0,j.Uw)(!1),[N,O]=(0,
j.Uw)(!1),[P,Q]=(0,j.Uw)(!1),[R,S]=(0,j.Uw)(!1),[T,U]=(0,j.Uw)(!1),[V,W]=(0,j.Uw)(!1);let X,Y;const Z=(0,l.tG)()
;let aa=null,ab="";const[ac,ad]=(0,j.Uw)([]),ae=(0,l.tG)();let af,ag=[],ah="";const ai=new Map
;let aj=new Set,ak=new Set,al=new Set,am=new Set,an=new Set,ao=new Set,ap=new Set,aq=new Set,ar=null,as=new Set,at=new Set,au=null,av=null,aw=null,ax=null
;const ay=(0,l.tG)(),[az,aA]=(0,j.Uw)(!0),[aB,aC]=(0,j.Uw)(0),[aD,aE]=(0,j.Uw)(!0),[aF,aG]=(0,j.Uw)(!1),[aH,aI]=(0,
j.Uw)(0),[aJ,aK]=(0,j.Uw)(0),[aL,aM]=(0,j.Uw)(1),[aN,aO]=(0,j.Uw)("50"),[aP,aQ]=(0,
j.Uw)([]),aR=new Map,aS="undefined"!=typeof IntersectionObserver;let aT,aU;const aV=new Map,aW=(0,l.tG)()
;let aX,aY,aZ,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9;return{Create:async function(){var a
;return z(null!==(a=await v.GetLanguageTag(null))&&void 0!==a?a:"en"),A=await(0,j.Mj)((async()=>{
aX=await w("AdminCenter_UsersTabView_AltAuth_Email_Text"),aY=await w("AdminCenter_UsersTabView_AltAuth_Email_Tip"),
aZ=await w("PassAud_GoodSafetyLevel_Tittle"),a0=await w("PassAud_MediumSafetyLevel_Tittle"),
a1=await w("PassAud_AverageSafetyLevel_Tittle"),a2=await w("PassAud_BadSafetyLevel_Tittle"),
a3=await w("AdminCenter_UsersTabView_UserStatus_Active_Text"),a4=await w("AdminCenter_UsersTabView_UserStatus_Blocked_Text"),
a5=await w("AdminCenter_UsersTabView_UserStatus_Invited_Text"),
a6=await w("AdminCenter_UsersTabView_UserStatus_NotComplete_Text"),
a7=await w("AdminCenter_UsersTabView_UserStatus_Suspended_Text"),
a8=await w("AdminCenter_UsersTabView_UserStatus_Inactive_Text"),ab=await w("AdminCenter_Search_By_NameEmail_Placeholder"),
a9=await w("AdminCenter_RemoveFilter_Tip")})),E(await t.GetValue("UserAvatarColorType",2)),F=q("section",{
className:"tab-view-users-list tab-view hidden"},ba(),bb(),bc(),bd(),q("div",{className:"flex-cell"}),be(),(a=>q("div",{
className:az(a)?"loading-view":"loading-view hidden"},q("div",{className:"action-progress-overlay-circle size48"})))),
v.onLanguageTagChange.Add(bx),F},OnAfterShow:function(){B(null)||(u.onEvent.Add(bv),t.AddOnChangeListener(bw),
u.onShowUsersSection.Add(bt),bf(!1))},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){u.onEvent.Remove(bv),
t.RemoveOnChangeListener(bw),u.onShowUsersSection.Remove(bt),v.onLanguageTagChange.Remove(bx),ae.Cancel(),Z.Cancel(),
ay.Cancel(),aW.Cancel(),null==A||A.Remove()}};function ba(){return async h=>{y(h)
;const i=J(h),j=L(h),k=N(h),l=P(h),m=R(h),n=T(h),p=V(h);return q("div",{className:i>0?"actions-section":"actions-section hidden"
},p&&q("button",{className:"button button-with-icon add-button-icon",onclick:a,title:await w("AdminCenter_AddToGroup_Text")
},await w("AdminCenter_AddToGroup_Text")),n&&q("button",{className:"button button-with-icon exclude-button-icon",onclick:b,
title:await w("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text")
},await w("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text")),k&&q("button",{
className:"hidden button button-with-icon suspend-button-icon",onclick:d,title:await w("AdminCenter_SuspendUser_Suspend_Text")
},await w("AdminCenter_SuspendUser_Suspend_Text")),l&&q("button",{
className:"hidden button button-with-icon restore-button-icon",onclick:e,title:await w("AdminCenter_SuspendUser_Restore_Text")
},await w("AdminCenter_SuspendUser_Restore_Text")),m&&q("button",{className:"button button-with-icon resend-button-icon",
onclick:f,title:await w("AdminCenter_ResendUserInstructions_Text")
},await w("AdminCenter_ResendUserInstructions_Text")),j&&q("button",{className:"button button-with-icon delete-button-icon",
onclick:c,title:await w("Cmd_Delete_Flat")},await w("Cmd_Delete_Flat")),q("div",{className:"flex-cell"}),q("button",{
className:"deselect-all-button",onclick:g},q("span",{className:"text counter"},(0,o.bf)(i)),q("span",{className:"text"
},await w("AdminCenter_Selected_Items_Counter_Text2")),q("div",{className:"icon"})))};function a(){(0,l.fI)((async()=>{
await r.ShowAddUsersToGroupsDialog(bi(),Y,null)&&bh(!1)})())}function b(){(0,l.fI)((async()=>{
await r.ShowRemoveUsersFromGroupsDialog(bi(),X)&&bh(!1)})())}function c(){(0,l.fI)((async()=>{
await r.ShowDeleteUserDialog(bi(),null)&&bh(!1)})())}function d(){(0,l.fI)((async()=>{
await r.ShowSuspendUserDialog(bi())&&bh(!1)})())}function e(){(0,l.fI)((async()=>{
await r.ShowRestoreUserDialog(bi(),null)&&bh(!1)})())}function f(){(0,l.fI)((async()=>{
await r.ShowResendToUserSetupInstructionsDialog(bi(),null)&&bh(!1)})())}function g(){bh(!1)}}function bb(){return async d=>{y(d)
;const f=ac(d),g=J(d);return q("div",{className:0===g?"filters-section":"filters-section hidden"},q("div",{
className:"applied-section"},f.map(a),q("div",{className:"add-filter-button"},af=q("button",{className:"filter-button",
onclick:b,onmousedown:c},q("div",{className:"icon"}),q("span",{className:"text"
},await w("AdminCenter_AddFilter_Button_Text"))))),q("div",{className:"flex-cell"}),f.length>0&&q("button",{
className:"deselect-all-button",onclick:e},q("span",{className:"text"
},await w("AdminCenter_ClearAllFilters_Button_Text")),q("div",{className:"icon"})))};function a(a){return q("div",{
className:"filter-button"},q("div",{className:`icon ${a.m_icon_classname}`}),q("span",{className:"text"},a.m_name),q("button",{
className:"icon close-icon",title:a9,onclick:function(){const b=ac(null).filter((b=>b.m_name!==a.m_name||b.m_type!==a.m_type))
;ad(b),a.m_on_click()}}))}function b(){bj(),aa&&aa.IsShown()?bo():function(){
const a=af.getBoundingClientRect(),b=new DOMRect(a.left,a.bottom,0,a.height);function c(){bo(4)}aa=(0,g.K1)(b,f,{onShow:()=>{
aT.addEventListener("scroll",c)},onHide:()=>{aT.removeEventListener("scroll",c)}},{enabled:!0,title:ab},(()=>a))}()}
function c(a){aa&&a.stopPropagation()}function e(){ak.clear(),ao.clear(),am.clear(),aq.clear(),as.clear(),ai.clear(),ah="",
ar=null,au=null,aw=null,ag=[],ad(ag),bf(!1)}async function f(){
const a=[],b=await w("SharedFolderSettings_SaveChanges"),c=await r.GetCompanyUsers(!1,null);return a.push({
title:await w("AdminCenter_User_Status_Text"),submenu:{applyText:b,type:"checkbox",applyAction:i,getSubmenu:j},options:null}),
a.push({title:await w("SharedFolderSettings_RecipientRole_Caption"),submenu:{applyText:b,type:"checkbox",applyAction:l,
getSubmenu:m},options:null}),a.push({title:await w("AdminCenter_Group_Text"),submenu:{applyText:b,type:"checkbox",applyAction:o,
getSubmenu:p},options:null}),a.push({title:await w("AdminCenter_UserTabView_RecentlyInactive_Text"),submenu:{applyText:b,
type:"radio",applyAction:t,getSubmenu:u},options:null}),a.push({title:await w("AdminCenter_Security_Score_Text"),submenu:{
applyText:b,type:"checkbox",applyAction:x,getSubmenu:z},options:null}),a.push({
title:await w("AdminCenter_UserTabView_AddedDays_Text"),submenu:{applyText:b,type:"radio",applyAction:B,getSubmenu:C},
options:null}),c.length<d.jA&&a.push({title:await w("AdminCenter_UserTabView_2FAStatus_Text"),submenu:{applyText:b,
type:"checkbox",applyAction:E,getSubmenu:F},options:null}),a.push({title:await w("AdminCenter_Search_NameContains"),
submenu:null,options:{is_search:!0,checked:!1,onClick:()=>H(0)}}),a.push({title:await w("AdminCenter_Search_EmailContains"),
submenu:null,options:{is_search:!0,checked:!1,onClick:()=>H(1)}}),a}function h(){bo(0),bu(),aM(1),bf(!1)}function i(){
ak=new Set([...aj]),h()}async function j(){const a=[];return aj=new Set([...ak]),a.push({
title:await w("AdminCenter_UsersTabView_UserStatus_Active_Text"),checked:aj.has(0),onClick:()=>k(0)}),a.push({
title:await w("AdminCenter_UsersTabView_UserStatus_Suspended_Text"),checked:aj.has(5),onClick:()=>k(5)}),a.push({
title:await w("AdminCenter_UsersTabView_UserStatus_NotComplete_Text"),checked:aj.has(4),onClick:()=>k(4)}),a.push({
title:await w("AdminCenter_UsersTabView_UserStatus_Blocked_Text"),checked:aj.has(1),onClick:()=>k(1)}),a.push({
title:await w("AdminCenter_UsersTabView_UserStatus_Invited_Text"),checked:aj.has(2),onClick:()=>k(2)}),a.push({
title:await w("AdminCenter_UsersTabView_UserStatus_Joined_Text"),checked:aj.has(6),onClick:()=>k(6)}),a}function k(a){
aj.has(a)?aj.delete(a):aj.add(a)}function l(){am=new Set([...al]),h()}async function m(){const a=[];return al=new Set([...am]),
a.push({title:await w("AdminCenter_Role_Admin_Text"),checked:al.has(0),onClick:()=>n(0)}),a.push({
title:await w("AdminCenter_Role_Manager_Text"),checked:al.has(1),onClick:()=>n(1)}),a.push({
title:await w("AdminCenter_Role_User_Text"),checked:al.has(2),onClick:()=>n(2)}),a}function n(a){
al.has(a)?al.delete(a):al.add(a)}function o(){as=new Set(at),h()}async function p(){const a=[];at=new Set([...as])
;return(await r.GetCompanyGroups(!1,null)).forEach((b=>{a.push({title:b.name,checked:as.has(b.id),id:b.id,onClick:s})})),
a.sort(((a,b)=>a.title.localeCompare(b.title))),a.sort(((a,b)=>a.checked&&!b.checked?-1:!a.checked&&b.checked?1:0)),a}
function s(a){a&&(at.has(a)?at.delete(a):at.add(a))}function t(){au=av,h()}async function u(){const a=[];return av=au,a.push({
title:await w("AdminCenter_UserTabView_InactiveDays_Text",["90"]),checked:"90"===av,onClick:()=>v("90")}),a.push({
title:await w("AdminCenter_UserTabView_InactiveDays_Text",["60"]),checked:"60"===av,onClick:()=>v("60")}),a.push({
title:await w("AdminCenter_UserTabView_InactiveDays_Text",["30"]),checked:"30"===av,onClick:()=>v("30")}),a}function v(a){av=a}
function x(){ao=new Set([...an]),h()}async function z(){const a=[];return an=new Set([...ao]),a.push({title:a2,
checked:an.has(0),onClick:()=>A(0)}),a.push({title:a1,checked:an.has(1),onClick:()=>A(1)}),a.push({title:a0,checked:an.has(2),
onClick:()=>A(2)}),a.push({title:aZ,checked:an.has(3),onClick:()=>A(3)}),a}function A(a){an.has(a)?an.delete(a):an.add(a)}
function B(){aw=ax,h()}async function C(){const a=[];return ax=aw,a.push({
title:await w("AdminCenter_UserTabView_InactiveDays_Text",["90"]),checked:"90"===ax,onClick:()=>D("90")}),a.push({
title:await w("AdminCenter_UserTabView_InactiveDays_Text",["60"]),checked:"60"===ax,onClick:()=>D("60")}),a.push({
title:await w("AdminCenter_UserTabView_InactiveDays_Text",["30"]),checked:"30"===ax,onClick:()=>D("30")}),a}function D(a){ax=a}
function E(){aq=new Set([...ap]),h()}async function F(){const a=[];return ap=new Set([...aq]),a.push({
title:await w("AdminCenter_UsersTabView_AltAuth_SmsEmail_Text"),checked:ap.has(4),onClick:()=>G(4)}),a.push({
title:await w("AdminCenter_UsersTabView_AltAuth_Email_Text"),checked:ap.has(2),onClick:()=>G(2)}),a.push({
title:await w("AdminCenter_UsersTabView_AltAuth_GoogleAuth_Text"),checked:ap.has(3),onClick:()=>G(3)}),a.push({
title:await w("AdminCenter_UsersTabView_AltAuth_Off_Text"),checked:ap.has(1),onClick:()=>G(1)}),a}function G(a){
ap.has(a)?ap.delete(a):ap.add(a)}function H(a){aa&&(ar=a,ah=aa.GetSearchQuery(),ai.clear(),ah&&(aC(2),ay.Cancel(),h()))}}
function bc(){return async c=>{y(c);const d=aB(c),e=aD(c),f=aF(c);return q("div",{className:"list-header"},q("div",{
className:"column column-name"},q("div",{className:f?"multiselect-checkbox selected":"multiselect-checkbox",
title:await w("AdminCenter_Selected_Items_SelectAll_Tip"),onclick:a}),q("button",{className:"sort-button",onclick:()=>b(0)
},q("span",{className:"text"},await w("AdminCenter_Name_Text")),0===d&&q("div",{
className:e||0!==d?"sort-icon asc":"sort-icon desc"}))),q("div",{className:"column column-email"},q("button",{
className:"sort-button",onclick:()=>b(3)},q("span",{className:"text"
},await w("AdminCenter_UsersTabView_ListHeader_EMail_Text")),3===d&&q("div",{className:e||3!==d?"sort-icon asc":"sort-icon desc"
}))),q("div",{className:"column column-status"},q("button",{className:"sort-button",onclick:()=>b(4)},q("span",{className:"text"
},await w("AdminCenter_User_Status_Text")),4===d&&q("div",{className:e||4!==d?"sort-icon asc":"sort-icon desc"}))),q("div",{
className:"column column-singin"},q("button",{className:"sort-button",onclick:()=>b(1)},q("span",{className:"text"
},await w("AdminCenter_UsersTabView_ListHeader_SignIn_Text")),1===d&&q("div",{
className:e||1!==d?"sort-icon asc":"sort-icon desc"}))),q("div",{className:"column column-created"},q("button",{
className:"sort-button",onclick:()=>b(5)},q("span",{className:"text"
},await w("AdminCenter_UserTabView_CreatedAt_Text")),5===d&&q("div",{className:e||5!==d?"sort-icon asc":"sort-icon desc"
}))),q("div",{className:"column column-score"},q("button",{className:"sort-button",onclick:()=>b(6)},q("span",{className:"text"
},await w("AdminCenter_Security_Score_Text")),6===d&&q("div",{className:e||6!==d?"sort-icon asc":"sort-icon desc"}))),q("div",{
className:"column column-2step"},q("span",{className:"text"},await w("AdminCenter_User_Verificaton_Text"))),q("div",{
className:"column column-groups-count"},q("span",{className:"text"},await w("AdminCenter_Groups_Text"))),q("div",{
className:"column column-commands"}))};function a(){const a=aV.size>bg().length;aG(a),bh(a)}function b(a){if(az(null))return
;aB(null)!==a?(aC(a),aE(!0)):aE(!aD(null)),bf(!1)}}function bd(){return async b=>{y(b);const c=B(b);return q(i.J2,{
always_visible:!1,view_initialized:c},aT=q("div",{className:"list"},(async b=>{D(b);const c=aP(b),d=c.length>0&&function(){
if(!r.IsCurrentUserAdmin(null))return!1;if(ao.size||ak.size||am.size||aq.size||""!==ah||as.size||null!==au||null!==aw)return!1
;return!0}(),e=bg().length>0,f=aN(null);return aU="0"===f?await(0,g.L9)(c,a,(()=>q("div",{className:"loading-view"},q("div",{
className:"action-progress-overlay-circle size24"}))),d?k:null,50,e?"users-list selected":"users-list"):q("div",{
className:e?"users-list selected":"users-list"},await(0,g.Yn)(c,a),d&&k())}),(a=>{const c=az(b),d=aJ(a);return q("div",{
className:c||d?"no-results-view hidden":"no-results-view"},q("div",{className:"no-results-icon"}),q("div",{
className:"no-results-text"},q("span",{className:"text no-results-text-bold"},w("AdminCenter_Search_NoResultsFor")),q("span",{
className:"text"},w("AdminCenter_Search_NoResultsText"))))})))};async function a(a){const e=a.m_name||a.m_email,h=(0,
d.lW)(a),i=await(0,d.sm)(a),k=await(0,d.Es)(D(null),e,i,h,t),p=2===h?0:2,s=a.m_access_date?(0,
n.fQ)(parseInt(a.m_access_date),y(null)):w("AdminCenter_UserTabView_NotAvailable_Text"),u=a.m_created?(0,
n.fQ)(a.m_created,y(null)):w("AdminCenter_UserTabView_NotAvailable_Text");let v,x=q("div",{className:"text"},e),z=q("div",{
className:"text"},a.m_email);if(ah)if(0===ar){const b=ai.get(a.m_id);b&&(x=(0,f.B)(e,b))}else if(1===ar){const b=ai.get(a.m_id)
;b&&(z=(0,f.B)(a.m_email,b))}let A,B=null;const C=I.has(a.m_id),E=q("div",{className:C?"list-row selected":"list-row",
onclick:c=>{return d=c,e=a,void(bg().length>0?b(d,e.m_id):r.ShowUserMainView(e,"groups"));var d,e},
oncontextmenu:b=>function(a,b,c){if(2!==a.button)return;if(bg().length>0)return;a.stopPropagation(),a.preventDefault()
;const d=b.getBoundingClientRect(),e=new DOMRect(a.clientX,d.top,0,d.height);j(b,void 0,c,e)}(b,E,a)},q("div",{
className:"column column-name"},q("div",{className:"multiselect-checkbox",title:await w("AdminCenter_Selected_Items_Item_Tip"),
onclick:c=>b(c,a.m_id)}),q("div",{className:k},(0,d.QT)(e)),x),q("div",{className:"column column-email"},z),q("div",{
className:"column column-status"},q("span",{className:"text"},by(h,!0))),q("div",{
className:a.m_access_date?"column column-singin":"column column-singin no-data"},q("span",{className:"text"},s)),q("div",{
className:a.m_created?"column column-created":"column column-created no-data"},q("span",{className:"text"},u)),q("div",{
className:null!==i?"column column-score":"column column-score no-data"},null!==i?q("div",{className:"icon-text"},q("div",{
className:(0,m.bt)("icon"," ",(0,d.l0)(i))}),q("span",{className:"text"},function(a){return a>d._j?aZ:a>d.EZ?a0:a>d.jo?a1:a2
}(i))):q("div",{className:"icon-text"},q("div",{className:"score-nodata-icon"}),q("span",{className:"text"
},w("AdminCenter_UserTabView_NotAvailable_Text")))),v=q("div",{className:"column column-2step"},B=q("span",{className:"text",
title:aY},aX)),q("div",{className:"column column-groups-count"},A=q("span",{className:"text"},"0")),q("div",{
className:"column column-commands"},q("div",{className:"command-bar command-default"},q("div",{className:"command command-view",
title:await w("PassCards_Cmd_ViewMode_Flat"),onclick:c=>function(a,c){if(2!==a.button)return
;bg().length>0?b(a,c.m_id):r.ShowUserMainView(c,"groups")}(c,a)})),q("div",{className:"command-bar"},q("div",{
className:"command command-menu",title:await w("Page_ListItem_MoreActions_Tip"),role:"button",ariaHasPopup:"true",onmousedown:c,
onclick:b=>function(a,b,c){if(0!==a.button)return;if(G&&G===c.m_id)return bj(),void a.stopPropagation();if(!G||G!==c.m_id){
const d=a.target;j(b,d,c,d.getBoundingClientRect()),a.stopPropagation()}}(b,E,a)}))));return aV.set(a.m_id,{m_user_info:a,
m_element:E}),aR.set(a.m_id,{m_user_info:a,m_element:E,m_altauth:p,m_user_altauth_el:v,m_user_altauth_text_el:B,
m_user_group_count_text_el:A}),(0,l.fI)(async function(a,b){if(aS){const c=new IntersectionObserver(f),e=aR.get(a)
;if(!e||0===e.m_altauth)return;function f(a){(0,l.fI)(h(a))}async function h(b){for(const d of b)if(d.isIntersecting){
const b=d.target,e=aR.get(a);e&&(c.unobserve(b),c.disconnect(),await i(e),await j(e))}}async function i(a){const c=(0,
d.lW)(a.m_user_info),e=await r.GetAltAuthStatus(a.m_user_info.m_id,c,b);a.m_altauth!==e.m_status&&2!==c&&((0,
g.eX)(a.m_user_altauth_text_el,e.m_text),(0,o.TT)(a.m_user_altauth_text_el).title=e.m_tooltip)}async function j(a){
const b=await r.GetMemberGroupsCount(a.m_user_info.m_id,null);(0,g.eX)(a.m_user_group_count_text_el,b.toString())}
c.observe(e.m_element),b&&await b.YieldToUI(50),f(c.takeRecords())}}(a.m_id,null)),E}function b(a,b){
I.has(b)?I.delete(b):I.add(b),bk(),bn(),bm(),bl(),a.stopPropagation()}function c(a){G&&a.stopPropagation()}function j(a,b,c,d){
bj(),H=(0,e.Lj)(d,(()=>r.GetListOfCommandsForUser(c)),function(){let d=null;return{onShow:g=>{b&&(0,e.dB)(b,!0),(0,e.dB)(a,!0)
;let h=a.parentElement;for(;null!==h;)h.addEventListener("scroll",f),h=h.parentElement;d=g,G=c.m_id},onHide:()=>{b&&(0,
e.dB)(b,!1),(0,e.dB)(a,!1);let g=a.parentElement;for(;null!==g;)g.removeEventListener("scroll",f),g=g.parentElement;d=null,
c.m_id===G&&(G=null)}};function f(){null==d||d.Hide(4)}}(),(function(b,c){return(0,o.TT)(F).style.width=(0,h.Md)(b),(0,
o.TT)(F).style.height=(0,h.Md)(c),a.getBoundingClientRect()}),((a,b)=>(0,l.fI)(a(b,(0,l.f4)(null,null,null)))))}function k(){
return q("div",{className:"new-item-add",onclick:function(){(0,l.fI)(r.CreateUserDialog(null))}},q("div",{
className:"column column-add"},q("div",{className:"icon-text"},q("div",{className:"icon-add"}),q("span",{className:"text"
},w("AdminCenter_UsersTabView_AddUser_ListItem_Text")))))}}function be(){return c=>{y(c)
;const d=az(c),e=aH(c),f=aJ(c),h=aL(c),i=aN(c);return(0,g.YO)({total_text:w("AdminCenter_UsersTabView_Total_Text"),all_count:e,
filtered_count:f,page:h,items_per_page:i,disabled:d,on_items_per_page_change:a,on_page_toggle:b,localization:v})};function a(a){
aM(1),aO(a),bf(!1)}function b(a){aM(a),bf(!1)}}function bf(a){aW.Start((async b=>{try{aA(!0),(0,k.aZ)(aU),(0,k.aZ)(aT),
await async function(a,b){const c=await r.GetCompanyUsers(a,b),e=c.length;aI(e),aV.clear(),ai.clear(),aR.clear(),
b.ThrowIfShouldStop();let f=await r.GetSortedAndFilteredUsersList(c,{m_status:[...ak],m_role:[...am],m_groups:[...as],
m_score:[...ao],m_2fa:[...aq],m_inactive:au||void 0,m_added:aw||void 0,m_search:null!==ar?{m_query:ah,m_results_map:ai,
m_target:ar}:void 0,m_sort:{m_sort_by:aB(null),m_asc:aD(null)}},b);const g=f.length;aK(g);const h=parseInt(aN(null))
;let i=aL(null);(i-1)*h>g&&(aM(1),i=1);if(0!==h){const a=(i-1)*h;f=f.slice(a,a+h)}const j=f.map((a=>{const b=(0,d.VK)(a)
;return aV.set(a.id,{m_user_info:b,m_element:null}),b}));aQ(j),bn(),bl(),bm()}(a,b),B(null)||C(!0)}catch(c){(0,p.au)(c),(0,
p.r5)(c,p.kd)||r.ShowNotification((0,p.EB)(c),null,2)}finally{aA(!1),(0,k.r9)(aU),(0,k.r9)(aT)}}))}function bg(){
return aV.size?[...aV.keys()].filter((a=>I.has(a))):[]}function bh(a){
a?(aV.size?[...aV.keys()]:[]).forEach((a=>I.add(a))):function(a){a.forEach((a=>I.delete(a)))}(bg()),bk(),bl(),bm(),bn()}
function bi(){return aV.size?[...aV.values()].filter((a=>I.has(a.m_user_info.m_id))).map((a=>a.m_user_info)):[]}function bj(){
H&&(H.Hide(),H=null)}function bk(){if(aV.size)for(const[a,b]of aV)I.has(a)?b.m_element&&(0,g.cT)(b.m_element):b.m_element&&(0,
g.dq)(b.m_element)}function bl(){const a=bg().length;0===a||a<aV.size?aG(!1):aG(!0)}function bm(){Z.Cancel();const a=bi()
;if(a.length){if(r.IsCurrentUserAdmin(null)){M(!I.has(x));const b=a.filter((a=>(0,d.fH)(a)));S(b.length===a.length)
;const c=a.filter((a=>(0,d.AX)(a)&&!a.m_suspended));O(c.length===a.length);const e=a.filter((a=>(0,d.AX)(a)&&a.m_suspended))
;Q(e.length===a.length)}Z.Start((async b=>{const c=await r.GetSelectedUsersCommonGroupsToAdd(a,b);Y=[...c],W(c.length>0)
;const d=await r.GetSelectedUsersCommonGroupsToDelete(a,b);X=[...d],U(d.length>0)}))}}function bn(){const a=bg().length;K(a),
a>0?(0,g.cT)(aU):(0,g.dq)(aU)}function bo(a){aa&&(aa.Hide(a),aa=null)}function bp(a,b,c,d){ag.push({m_type:a,m_name:b,
m_icon_classname:c,m_on_click:d})}function bq(){am.forEach((a=>{bp(1,function(a){switch(a){case 0:
return w("AdminCenter_Role_Admin_Text");case 1:return w("AdminCenter_Role_Manager_Text");case 2:
return w("AdminCenter_Role_User_Text")}}(a),"role-icon",(()=>{am.delete(a),bf(!1)}))}))}function br(){ao.forEach((a=>{
bp(3,function(a){switch(a){case 0:return a2;case 1:return a1;case 2:return a0;case 3:return aZ}}(a),"score-icon",(()=>{
ao.delete(a),bf(!1)}))}))}function bs(){aq.forEach((a=>{bp(5,function(a){switch(a){case 4:case 5:
return w("AdminCenter_UsersTabView_AltAuth_SmsEmail_Text");case 0:case 2:return w("AdminCenter_UsersTabView_AltAuth_Email_Text")
;case 3:return w("AdminCenter_UsersTabView_AltAuth_GoogleAuth_Text");case 1:
return w("AdminCenter_UsersTabView_AltAuth_Off_Text")}}(a),"score-icon",(()=>{aq.delete(a),bf(!1)}))}))}function bt(a){a&&aM(1),
(0,l.fI)((async()=>{await async function(a){if(!a)return!1;ak.clear(),am.clear(),ao.clear(),aq.clear(),as.clear(),at.clear(),
ai.clear(),ah="";const b=null!==ar;au=null,ar=null,ag=[],aG(!1),bh(!1),a.m_status&&a.m_status.forEach((a=>{ak.add(a)}))
;a.m_role&&a.m_role.forEach((a=>{am.add(a)}));a.m_score&&a.m_score.forEach((a=>{ao.add(a)}));a.m_2fa&&a.m_2fa.forEach((a=>{
aq.add(a)}));a.m_groups&&a.m_groups.forEach((a=>{at.add(a)}));a.m_inactive&&(au=a.m_inactive);a.m_added&&(aw=a.m_added)
;return bu(),b}(a),bf(!1)})())}function bu(){ag=[],ae.Start((async a=>{ak.forEach((a=>{bp(0,by(a,!0),"role-icon",(()=>{
ak.delete(a),bf(!1)}))})),bq(),br(),bs(),au&&bp(6,w("AdminCenter_UserTabView_InactiveDays_Button_Text",[au]),"role-icon",(()=>{
au=null,bf(!1)})),aw&&bp(7,w("AdminCenter_UserTabView_AddedDays_Button_Text",[aw]),"role-icon",(()=>{aw=null,bf(!1)})),
(aa||ah)&&(aa&&(ah=aa.GetSearchQuery()),ai.clear(),ah&&(aa&&2!==aB(null)&&aC(2),bp(9,ah,"search-icon",(function(){ai.clear(),
ah="",bf(!1)})))),await async function(a){const b=await r.GetCompanyGroups(!1,a);as.forEach((a=>{var c
;const d=b.find((b=>b.id===a));bp(2,null!==(c=null==d?void 0:d.name)&&void 0!==c?c:"","groups-icon",(()=>{as.delete(a),bf(!1)}))
}))}(a),ad(ag)}))}function bv(a){let b=!1,c=!1;for(const d of a)switch(d.event){case 0:b=!0;break;case 2:case 1:b=!0,c=!0;break
;case 3:case 4:case 6:case 7:case 8:c=!0}(0,l.fI)((async()=>{b&&await r.GetCompanyUsers(!0,null),c&&await async function(){
const a=await r.GetCompanyGroups(!1,null);as.forEach((b=>{a.some((a=>a.id===b))||as.delete(b)}))}(),bf(!1)})())}function bw(a){
for(const b in a)switch(b){case"UserAvatarColorType":case"UserAvatarHexColorType":(0,l.fI)((async()=>{
const a=await t.GetValue("UserAvatarColorType",2);E(a)})())}}function bx(){(0,l.fI)((async()=>{var a;await A.Execute(),
z(null!==(a=await v.GetLanguageTag(null))&&void 0!==a?a:"en")})())}function by(a,b){switch(a){case 0:return a3;case 1:return a4
;case 2:return a5;case 4:return a6;case 5:return a7;case 3:return b?a8:a3;default:return"unknown user status"}}}},
28376:function(a,b,c){"use strict";c.d(b,{G:function(){return al}})
;var d=c(1151),e=c(32806),f=c(361),g=c(94177),h=c(44426),i=c(29224),j=c(84117),k=c(85557),l=c(33094),m=c(73549),n=c(60215),o=c(90655),p=c(78749),q=c(67310),r=c(55819),s=c(24532),t=c(49245),u=c(45655),v=c(78220),w=c(29526),x=c(30045),y=c(98266),z=c(47333),A=c(87965),B=c(3566),C=c(93075),D=c(38221),E=c(19365),F=c(4234),G=c(89369),H=c(71644),I=c(60026),J=c(32130),K=c(54811),L=c(12131),M=c(71796),N=c(88579),O=c(20855),P=c(52090),Q=c(25807),R=c(79999),S=c(84479),T=c(66423),U=c(31173),V=c(97490),W=c(63956),X=c(32105),Y=c(88262),Z=c(40371),aa=c(40868),ab=c(73863),ac=c(78440),ad=c(13113),ae=c(4153),af=c(95399),ag=c(70026),ah=c(69893),ai=(c(13117),
c(97514)),aj=c(84224),ak=c(91764)._;function al(a,b,c,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){
const aE=au,aF=aE.LocalizeString,aG=aB,aH=aC,aI=c,aJ=ao,aK=au,aL=aw,aM=ap,aN=aq,aO=ar,aP=an,aQ=al,aR=am,aS=b,aT=az,aU=aD,aV=a
;aV.onDataChanged.Add(gg);const aW=function(){const a={onEvent:(0,Z.dU)(),onShowUsersSection:(0,Z.dU)(),onShowGroupsSection:(0,
Z.dU)(),onShowDataSection:(0,Z.dU)(),onShowReportsSection:(0,Z.dU)(),onShowPolicySection:(0,Z.dU)(),onShowUserDevice:(0,Z.dU)(),
onInitSearchPane:(0,Z.dU)(),onClearSearchResults:(0,Z.dU)(),onUpdateSearchResults:(0,Z.dU)(),onSearchResultsNavigation:(0,
Z.dU)()};return a}();aW.onEvent.Add(gf);const[aX,aY]=(0,V.Uw)(!1),[aZ,a0]=(0,V.Uw)("light"),[a1,a2]=(0,V.Uw)("en"),a3=aA,a4=(0,
ag.t)(),a5=(0,M.P4)({GetServerTemplates:async function(){var a;const b=`rf-templates.json?vvv=${(0,ai.RD)()}`,c={}
;return null!==(a=await a4.GetData(b,{maxAgeSec:86400,default:c,onGetData:async a=>(0,Y.$)(b,a,aC)}))&&void 0!==a?a:c},
GetEnterpriseTemplates:gb,GetCustomTemplates:gd,GetDisableCommonTemplates:async function(){
const a=await en(!1,null),b=(await bd.Parse(a.policies||"")).find((a=>"DisableCommonTemplates"===a.m_name));return!!b}}),a6=(0,
M.EV)({GetEnabledTemplates:gb,GetCustomTemplates:gd,SaveCustomTemplates:async function(a,b,c){var d,e,f,g;const h=await en(!1,c)
;if(null===a&&null===b)return;let i=await bd.Parse(h.policies||"");null!==a&&(i=i.filter((a=>"AllRfTemplates"!==a.m_name)),
a&&i.push({m_name:"AllRfTemplates",
m_section:null!==(e=null===(d=G.gX.AllRfTemplates)||void 0===d?void 0:d.m_section)&&void 0!==e?e:"[CONFIG]",m_value:a}))
;null!==b&&(i=i.filter((a=>"RfTemplates"!==a.m_name)),b&&i.push({m_name:"RfTemplates",
m_section:null!==(g=null===(f=G.gX.RfTemplates)||void 0===f?void 0:f.m_section)&&void 0!==g?g:"[CONFIG]",m_value:b}))
;const j=await bd.Save(i);await aQ.UploadCompanyPolicies(bp,j,c),await en(!0,c)}},aE),a7=(0,C._)(aS,aH),a8=(0,O.j8)(aH),a9=(0,
O.EE)(),ba=(0,O.kq)(aG),bb=(0,P.V)();let bc=!1;const bd=(0,G.fA)(),be=(0,i.F)(aL);be.Init();let bf=null,bg=null;const[bh,bi]=(0,
V.Uw)(null),[bj,bk]=(0,V.lJ)(null,null,(()=>fy(!1,(0,ac.f4)(null,null,null)))),[bl,bm]=(0,V.lJ)(null,null,fz),[bn,bo]=(0,
V.Uw)(!1);(0,ac.fI)((0,V.Mj)((async a=>{const b=bj(a)?"buymore":await fz(null);bm(b)})));let bp,bq,br=!1;const bs=(0,
ac.h1)(),bt=(0,ac.h1)(),bu=(0,ac.h1)(),bv=(0,ac.tG)(),bw=(0,ac.tG)(),bx=(0,ac.tG)(),by=(0,T.S)(),bz=(0,ac.tG)(),bA=12e4
;let bB=""
;const bC=(0,R.AZ)(aH),bD=(0,K.I9)(aV,aS,aI,ay,aE),bE=90,bF=60,bG=30,bH=79,bI=52,bJ=40,bK=500,bL=new Date(2024,6,1).getTime()
;let bM,bN,bO,bP=null;const[bQ,bR]=(0,V.lJ)(null,!1,(()=>async function(){const a=await en(!1,(0,ac.f4)(null,null,null))
;let b=await aM.GetValue("ShowReturnToOldRFOPane",!0);b&&(b=bL-1e3*(a.createdTime||0)>0);return b}()));let bS=null
;const[bT,bU]=(0,V.Uw)(null),[bV,bW]=(0,V.Uw)(null),[bX,bY]=(0,V.Uw)(!1),[bZ,b0]=(0,V.Uw)(!1);let b1=null,b2=null,b3=null
;const[b4,b5]=(0,V.Uw)(!1);let b6=null,b7=!0,b8=!1,b9=null;const ca=new Map,cb=new Map;let cc,cd,ce,cf;const cg=(0,ac.h1)()
;let ch=null;const ci=new Map;let cj,ck,cl=null,cm=null;const cn=(0,ac.h1)(),co=(0,ac.h1)(),[cp,cq]=(0,V.Uw)(null)
;let cr,cs,ct,cu=null,cv=null;const cw=(0,ac.h1)();let cx,cy,cz,cA,cB,cC,cD,cE=null;const cF=(0,ac.tG)();let cG,cH,cI,cJ=null
;const cK=(0,ac.tG)(),cL=(0,ac.tG)();let cM,cN,cO=null;const cP=(0,ac.tG)()
;let cQ,cR,cS,cT,cU=null,cV=0,cW=null,cX=!1,cY=!1,cZ=null,c0=null,c1=null;const c2=1170,c3=500,c4=630,c5=800,c6=5
;let c7,c8,c9,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv=null;window.addEventListener("resize",(()=>{f0()
}),!0);return{Create:async function(){var a;a0(await a3.GetValue("StartPage.Theme",(0,D.Cj)())),await(0,z.sJ)(aM,aE,!0),
a2(null!==(a=await aE.GetLanguageTag(null))&&void 0!==a?a:"en"),await fD((0,ac.f4)(null,null,null)),
c9=await aF("PassAud_PwdStrengthWeak"),da=await aF("PassAud_PwdStrengthMedium"),db=await aF("PassAud_PwdStrengthGood"),
dc=await aF("PassAud_PwdStrengthStrong"),dd=await aF("PassAud_GoodSafetyLevel_Tittle"),
de=await aF("PassAud_MediumSafetyLevel_Tittle"),df=await aF("PassAud_AverageSafetyLevel_Tittle"),
dg=await aF("PassAud_BadSafetyLevel_Tittle"),dh=await aF("AdminCenter_UsersTabView_AltAuth_Email_Text"),
di=await aF("AdminCenter_UsersTabView_AltAuth_Email_Tip"),dj=await aF("AdminCenter_UsersTabView_AltAuth_Sms_Text"),
dk=await aF("AdminCenter_UsersTabView_AltAuth_Sms_Tip"),dl=await aF("AdminCenter_UsersTabView_AltAuth_GoogleAuth_Text"),
dm=await aF("AdminCenter_UsersTabView_AltAuth_GoogleAuth_Tip"),dn=await aF("AdminCenter_UsersTabView_AltAuth_Off_Text"),
dp=await aF("AdminCenter_UsersTabView_UserStatus_Active_Text"),dq=await aF("AdminCenter_UsersTabView_UserStatus_Blocked_Text"),
dr=await aF("AdminCenter_UsersTabView_UserStatus_Invited_Text"),
ds=await aF("AdminCenter_UsersTabView_UserStatus_NotComplete_Text"),
dt=await aF("AdminCenter_UsersTabView_UserStatus_Suspended_Text"),
du=await aF("AdminCenter_UsersTabView_UserStatus_Inactive_Text"),c8=await aF("Cmd_Delete_Flat"),c7=await aF("HomeFolder"),
cc=await dH(),ce=await dL(),cj=await ei(),cr=await eM(),cx=await fr(),cB=await fu(),bn(null)&&(cz=await async function(){
return cA=(0,r.ug)(al,b,aI,aW,by,aE,{GetCompanyInfo:en,GetCompanyGroups:eo,GetGroupPolicyValue:ge,ShowModalDialog:f4,
ShowNotification:f8,ShowSelectGroupsForSSO:ed,UploadCompanyPolicies:el,UploadGroupPolicies:em}),cA.Create()}());bP=ak("div",{
className:"dark"===aZ(null)?"admin-center-view dark-theme":"admin-center-view light-theme",onclick:fX},bM=ak("div",{
className:"main-view hidden"},dx(),b3=ak("header",{className:"page-header"},dy(),dz(),ak("div",{className:"flex-cell"
}),dA()),b2=ak("div",{className:"main-section"},b6=ak("aside",{className:"navigation disabled"},dB(),dC(),dD()),b9=ak("div",{
className:"tab-views"},cc,ce,cj,cr,cx,bn(null)&&cz,cB,cH=ak("section",{className:"tab-view-search tab-view hidden"
}),cD=ak("section",{className:"tab-view tab-view-settings hidden"}),cM=ak("section",{
className:"tab-view tab-view-details hidden"}),cQ=ak("section",{className:"tab-view tab-view-details hidden"}),cG=ak("section",{
className:"tab-view tab-view-no-license hidden"})))),bO=ak("div",{className:"loading-view"},ak("div",{
className:"action-progress-overlay-circle size64"})),cW=ak("div",{className:"edit-pane closed hidden"
}),c0=ak(B.Eg,null),bN=ak("div",{className:"logout-view hidden"},await aF("AdminCenter_LoginToRoboForm_Text"))),
ca.set("dashboard",cc),ca.set("users",ce),ca.set("groups",cj),ca.set("data",cr),ca.set("policies",cx),ca.set("reports",cB),
ca.set("search",cH),ca.set("settings",cD),ca.set("user-details",cM),ca.set("group-details",cQ),ca.set("license-expired",cG),
cb.set("dashboard",cd),cb.set("users",cf),cb.set("groups",ck),cb.set("data",cs),cb.set("policies",cy),cb.set("reports",cC),
bn(null)&&(ca.set("integration",cz),cb.set("integration",cA));return bP},OnAfterShow:function(){(0,ac.fI)(dw()),
null==b6||b6.addEventListener("mouseenter",(()=>{fY()})),null==b6||b6.addEventListener("mouseleave",(()=>{fZ()})),
null==b6||b6.addEventListener("click",(()=>{fY()})),(0,ae.TT)(b9).oncontextmenu=function(){return!1},
be.AddOnHashChangeListener(dG)},OnBeforeHide:function(){dv&&(dv.Hide(0),dv=null)
;null==b6||b6.removeEventListener("mouseenter",fY),null==b6||b6.removeEventListener("mouseleave",fZ),(0,ae.TT)(c0).Hide(),(0,
ae.TT)(b9).oncontextmenu=null},Focus:function(){},Dispose:function(){null==c1||c1.Cancel(),c1=null,cL.Cancel(),cP.Cancel(),
cK.Cancel(),bz.Cancel(),cg.Cancel(),cn.Cancel(),bs.Cancel(),bt.Cancel(),bu.Cancel(),cw.Cancel(),bv.Cancel(),bw.Cancel(),
bx.Cancel(),aW.onEvent.Remove(gf),aV.onDataChanged.Remove(gg),be.UnInit()}};async function dw(){try{await eo(!0,null),br=!0
;const a=await(0,z.AT)(aS);a8.Init(),await a8.SetServerAddress(a),await a9.Init(aV),await ba.Init(a8,a9,aV),(0,W.SE)(bO),(0,
W.SE)(bN),(0,W.l5)(bM),(0,W.r9)((0,ae.TT)(b6)),b7=!1,document.body.classList.remove("dark-theme"),aX(null)&&be.SetState({
m_view:"license-expired"},!0,!0),dG(be.GetState()),fL(),f0(),f1()}catch(a){(0,ah.au)(a)}finally{dF()}}function dx(){
return async c=>bQ(c)?((0,ac.C)((()=>{f1()})),bS=ak("div",{className:"old-rfo"},ak("a",{href:"#",className:"link",
target:"_self",onclick:a},aF("AdminCenter_ReturnToOldRFO_Link")),ak("span",{className:"text"
},aF("AdminCenter_ReturnToOldRFO_Text")),ak("button",{className:"close-button",onclick:b}))):(bS=null,f1(),[]);function a(a){
a.preventDefault(),(0,ac.fI)(aJ.OpenRFOPage(null,z.q2,{newTab:!1},null))}function b(){bR(!1),(0,
ac.fI)(aN.SetValue("ShowReturnToOldRFOPane",!1))}}function dy(){return async a=>{const b=aX(a);return ak("a",{
className:b?"header-logo disabled":"header-logo",onclick:a=>function(a,b){if(a.preventDefault(),b)return
;"settings"===be.GetActiveView(null)&&fx();dI("dashboard")}(a,b),href:"#",title:"RoboForm"})}}function dz(){let a
;return async g=>{const h=bT(g),i=aX(g);return null!==h&&(0,ac.C)((()=>null==a?void 0:a.focus())),ak("div",{
className:"search-query"},ak("div",{className:"search-box dropdown-handler"},a=ak("input",{type:"text",id:"main-search-input",
className:"main-search-input",placeholder:await aF("AdminCenter_Search_Placeholder"),value:null!=h?h:"",disabled:i,
onfocus:i?null:b,oninput:i?null:c,onkeydown:i?null:d,onblur:i?null:e}),ak("div",{className:"search-loop-icon"
}),h&&(a=>ak("div",{className:"search-results-counter"},(0,ae.bf)(bV(a)))),h&&ak("div",{className:"search-clear-query-icon",
onclick:f})))};function b(){fA()}function c(){cK.Start((async b=>{await(0,ac.Gu)(bK,b,!1);const c=(0,ae.TT)(a).value.trim()
;if(!c)return bU(""),void fQ();c!==bT(null)&&(bU(c),await fO(c,!0))}))}function d(a){switch(a.key){case aj.U.ArrowUp:
case aj.U.ArrowDown:case aj.U.Enter:a.preventDefault(),aW.onSearchResultsNavigation.CallAllSync(a);break;case aj.U.Escape:fQ()}}
function e(){const a=bT(null);""===a&&null!==a&&bU(null)}function f(){fQ()}}function dA(){let a,b,c;const d=function(){let a=!1
;return ak("div",{className:"account-menu dropdown-menu popup-menu hidden"},(a=>ak("div",{className:"item",onclick:d},ak("div",{
className:"icon icon-theme"}),ak("span",{className:"text"},aF("StartPage_DarkMode")),ak("div",{className:"submenu-flexy-space"
}),ak(X.Ig,{checked:"dark"===aZ(a),onchange:()=>d}))),ak("div",{className:"item",onclick:function(){fA(),(0,
ac.fI)(aJ.OpenStartPage(null))}},ak("div",{className:"icon icon-startpage"}),ak("span",{className:"text"
},aF("AdminCenter_OpenStartPage"))),ak("div",{className:"item",onclick:function(){if(fA(),
"settings"===be.GetActiveView(null))return;(0,ac.fI)(fw("general"))}},ak("div",{className:"icon icon-settings"}),ak("span",{
className:"text"},aF("Cmd_Settings_Flat"))),ak("div",{className:"separator"}),c=ak("div",{className:"item",onclick:function(){
if(a)return;fA(),(0,W.D$)((async()=>{await aJ.OpenBuyLicensePage(null)}),(()=>(a=!0,()=>{a=!1})),null,null)}},ak("div",{
className:"icon icon-upgrade"}),ak("span",{className:"text highlight text-bold"},aF("AdminCenter_BuyNow_Text"))),b=ak("div",{
className:"item submenu-item",onclick:function(a){a.stopPropagation(),bZ(null)?b0(!1):b0(!0)}},ak("div",{
className:"icon icon-left icon-help"}),ak("span",{className:"text"},aF("Cmd_Help_Flat")),ak("div",{
className:"submenu-flexy-space"}),ak("div",{className:"submenu-icon"})),ak("div",{className:"separator"}),ak("div",{
className:"item",onclick:f},ak("div",{className:"icon icon-logout"}),ak("span",{className:"text"},aF("Cmd_Logoff_Flat"))))
;function d(a){a.stopPropagation(),fC()}}();return b1=ak("div",{className:"fade-in-screen"}),async f=>{var g
;const h=aX(f),i=bh(f),k=await dE(!1,null),l=bX(f),m=bl(f);l&&d?((0,W.l5)(d),"buy"===m?(0,W.l5)(c):(0,W.SE)(c)):d&&(0,W.SE)(d)
;let n=(null==i?void 0:i.name)||"Company",o="account-email",p=null;if(i&&i.logo){const a=(0,aa.fI)(i.logo);p=await(0,aa.Z$)(a),
n="",o=(0,ab.bt)(o," ","has-logo")}
const q=(0,j.QT)((null==k?void 0:k.name)||(null==i?void 0:i.name)||""),r=k?`initials round ${(0,
B.dy)(k.name||(null==i?void 0:i.name)||"")}`:"initials bg-color-default-blue";return ak("div",{className:"account-view noselect"
},a=ak("button",{className:h?"account-box dropdown-handler disabled":"account-box dropdown-handler",onclick:h?null:e,disabled:h
},ak("div",{className:"account-icon hidden"}),ak("div",{className:o,title:i?n:""},null!==(g=function(a){if(!a)return null
;let b=a;b.startsWith("<")&&(b=b.substring(1));b.endsWith(">")&&(b=b.substring(0,b.length-1));const c=new Map
;b.split(" ").forEach((a=>{const[b,d]=a.split("=");c.set(b,d)}));const d=c.get("src");if(!d)return null;const e=new Image
;return e.src=d.replace(/"/g,""),e}(p))&&void 0!==g?g:n),ak("div",{className:r},q)),d,function(){return a=>{
const b=bZ(a),g=b?f():"0px";return ak("div",{className:"account-menu help-submenu dropdown-menu popup-menu "+(b?"":"hidden"),
style:{top:g}},ak("div",{className:"item",onclick:c},ak("span",{className:"text"},aF("Cmd_Help_HelpCenter_Key"))),ak("div",{
className:"item",onclick:d},ak("span",{className:"text"},aF("Cmd_Help_ContactSupport_Key"))),ak("div",{className:"separator"
}),ak("div",{className:"item",onclick:e},ak("span",{className:"text"},aF("AdminCenter_About_Text"))))};function c(){(0,
ac.fI)(aK.OpenUrl({url:z.RS,newTab:!0,reuseExisting:!1},null)),fA()}function d(){(0,ac.fI)(aJ.ContactSupport({
reportType:"ContactSupport"},null)),fA()}function e(){fA(),(0,ac.fI)(g())}function f(){
const c=b.getBoundingClientRect(),d=a.getBoundingClientRect();return(0,U.Md)(c.y-d.y+c.height-4)}async function g(){
return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal about-dialog",await aF("AboutPage_Title"),null),(()=>(0,
x._)((async(a,b)=>{const c="Copyright (C) 1999-2024 Siber Systems Inc. All Rights Reserved.",d=(0,
E.U)(),e=await aF("About_Version2"),f=(0,ai.KZ)();return ak("div",{className:"content"},ak("div",{className:"text"
},e),ak("div",{className:"text hint selectable"},d),ak("div",{className:"text hint selectable"},f),ak("div",{
className:"link-section"},ak("a",{className:"roboform-link",href:z.l$,target:"_blank"},"www.roboform.com"),ak("span",{
className:"hint-text copyright-text"},c)),ak("div",{className:"buttons-bar"},ak("button",{className:"button default-button",
onclick:()=>a()},await aF("Cmd_Ok_Flat"))))}))))),null)}}(),b1)};function e(a){
bX(null)?fA():(null==b1||b1.classList.add("fade-in"),bY(!0)),a.stopPropagation()}function f(){fA(),fB()}}function dB(){let a
;return async b=>{const c=b4(b),d=aX(b);let e="button default-button";return d&&(e=(0,ab.bt)(e," ","disabled")),c&&(e=(0,
ab.bt)(e," ","selected")),ak("div",{className:"create-container"},a=ak("button",{className:e,title:await aF("Cmd_New_Flat"),
onclick:d?null:b=>function(b,c){if(c)fN(),b5(!1);else{const b=a.getBoundingClientRect(),c=new DOMRect(b.left,b.bottom,0,0)
;!function(a,b){function c(){b5(!0)}function d(){b5(!1)}fN(),dv=(0,A.Lj)(b,bn(null)?()=>async function(a){
const b=[],c=await dU();b.push({title:await aF("AdminCenter_Role_User_Text"),imageClass:"cmd-user-icon",type:"submenu",submenu:c
}),b.push({title:await aF("AdminCenter_Group_Text"),imageClass:"cmd-group-icon",onCommand:async(a,b)=>{ew()}})
;const d=await eU(!1,a);return b.push({title:await aF("AdminCenter_Data_Tab_Button_Text"),imageClass:"cmd-data-icon",
type:"submenu",submenu:d}),b}(null):()=>async function(a){return eU(!1,a)}(null),{className:"with-triangle create-menu",
onShow:c,onHide:d},(function(b,c){return(0,ae.TT)(bP).style.width=(0,U.Md)(b),(0,ae.TT)(bP).style.height=(0,U.Md)(c),
a.getBoundingClientRect()}),((a,b)=>(0,ac.fI)(a(b,(0,ac.f4)(null,null,null)))))}(a,c)}}(0,c),
onmousedown:d?null:a=>function(a,b){b&&a.stopPropagation()}(a,c),disabled:d},ak("div",{className:"create-plus-icon"
}),ak("span",{className:"text"},await aF("Cmd_New_Flat"))))}}function dC(){return async a=>{
const b=be.GetActiveTab(a),c=aX(a),d=c?"tab-button disabled":"tab-button",e=bn(a);return ak("nav",{
className:"tab-selector unselectable",oncontextmenu:a=>a.preventDefault()},ak("button",{
className:"dashboard"===b?`${d} selected`:d,title:await aF("AdminCenter_Dashboard_Tab_Button_Tip"),
onclick:c?null:()=>dI("dashboard"),disabled:c},ak("div",{className:"icon icon-dashboard"}),ak("span",{className:"text"
},await aF("AdminCenter_Dashboard_Text"))),ak("button",{className:"users"===b?`${d} selected`:d,
title:await aF("AdminCenter_Users_Tab_Button_Tip"),onclick:c?null:()=>dI("users"),disabled:c},ak("div",{
className:"icon icon-users"}),ak("span",{className:"text"},await aF("AdminCenter_Users_Text"))),ak("button",{
className:"groups"===b?`${d} selected`:d,title:await aF("AdminCenter_Groups_Tab_Button_Tip"),onclick:c?null:()=>dI("groups"),
disabled:c},ak("div",{className:"icon icon-groups"}),ak("span",{className:"text"
},await aF("AdminCenter_Groups_Text"))),ak("button",{className:"data"===b?`${d} selected`:d,
title:await aF("AdminCenter_Data_Tab_Button_Tip"),onclick:c?null:()=>dI("data"),disabled:c},ak("div",{className:"icon icon-data"
}),ak("span",{className:"text"},await aF("AdminCenter_Data_Tab_Button_Text"))),ak("button",{
className:"policies"===b?`${d} selected`:d,title:await aF("AdminCenter_Policies_Tab_Button_Tip"),
onclick:c?null:()=>dI("policies"),disabled:c},ak("div",{className:"icon icon-policies"}),ak("span",{className:"text"
},await aF("AdminCenter_Policies_Tab_Button_Text"))),e&&ak("button",{className:"integration"===b?`${d} selected`:d,
title:await aF("AdminCenter_Integration_Tab_Button_Tip"),onclick:c?null:()=>dI("integration"),disabled:c},ak("div",{
className:"icon icon-integration"}),ak("span",{className:"text"
},await aF("AdminCenter_Integration_Tab_Button_Text"))),ak("button",{className:"reports"===b?`${d} selected`:d,
title:await aF("AdminCenter_Reports_Tab_Button_Tip"),onclick:c?null:()=>dI("reports"),disabled:c},ak("div",{
className:"icon icon-reports"}),ak("span",{className:"text"},await aF("AdminCenter_Reports_Tab_Button_Text"))),ak("div",{
className:"flex-cell"}))}}function dD(){return async b=>{const c=aX(b),d=bj(b),e=d?await fz(null):"buymore";return ak("div",{
className:"buymore"===e||c?"upgrade-message flex-row hidden":"upgrade-message flex-row"},ak("div",{className:"content flex-cell"
},ak("div",{className:"message"},ak("div",{className:"icon"}),ak("span",null,(0,
ab.SI)(await aF("UpgradeMessage_RoboFormEnterpriseTrialExpires"),"%1").before),ak("span",{className:"date"},(0,
af.Io)((null==d?void 0:d.expirationTime)||0,a1(b))),ak("span",null,(0,
ab.SI)(await aF("UpgradeMessage_RoboFormEnterpriseTrialExpires"),"%1").after)),ak("div",{className:"links-row flex-row"
},ak("a",{className:"learn-more link",href:"#",onclick:a},await aF("UpgradeMessage_LearnMore")),ak("div",{
className:"links-separator"}),ak("a",{className:"upgrade link",href:"#",onclick:a=>{return b=e,a.preventDefault(),void(0,
W.PQ)((async()=>{const a=(0,ac.f4)(null,null,null);await ao.OpenPaymentPage(b,a)}),(()=>()=>{}),0,null,(a=>{(0,ah.au)(a),(0,
ah.r5)(a,ah.kd)||f8((0,z.Qo)(a),5,2)}));var b}
},"expired"===(null==d?void 0:d.status)?await aF("AdminCenter_SettingsView_RenewNow_Text"):await aF("AdminCenter_BuyNow_Text")))))
};function a(a){a.preventDefault(),(0,W.PQ)((async()=>{await aK.OpenUrl({url:z.Nd,newTab:!0,reuseExisting:!0},null)
}),(()=>()=>{}),0,null,(a=>{(0,ah.au)(a),(0,ah.r5)(a,ah.kd)||f8((0,z.Qo)(a),null,2)}))}}async function dE(a,b){
return bg&&!a||(bg=await bt.Execute({action:async a=>{var b;let c=null;return bq||(c=await aS.GetRoboFormAccountInfo(a),
bq=null!==(b=c.accountId)&&void 0!==b?b:""),c=await aI.GetAccountInfo(bq,a),c}},b)),bg}function dF(){br?((0,W.SE)(bN),(0,
W.l5)(bM)):(0,ac.fI)((async()=>{await fH(),fJ(),(0,W.SE)(bM),(0,W.l5)(bN),(0,W.SE)(bO),fA(),await aJ.ShowLoginUI(null)})())}
function dG(a){if(aX(null))return be.SetState({m_view:"license-expired"},!0,!0),void dK()
;"settings"===be.GetActiveView(null)&&"settings"!==a.m_view&&fx(),"search"===be.GetActiveView(null)&&"search"!==a.m_view&&fQ(),
(0,ac.fI)((async()=>{switch(a.m_view){case"dashboard":dJ(!1);break;case"users":dM(!1);break;case"groups":ej(!1);break
;case"data":eN(!1);break;case"policies":fs(!1);break;case"integration":ft(!1);break;case"reports":{let b=null
;"company"!==a.m_tab&&"users"!==a.m_tab&&"groups"!==a.m_tab||(b=a.m_tab),bn(null)||"company"!==b||(b="groups"),fv(!1,b||null)
;break}case"settings":{let b=aX(null)?"license":"general"
;"license"!==a.m_tab&&"general"!==a.m_tab&&"account"!==a.m_tab||(b=a.m_tab),await fw(b);break}case"user-details":if(a.m_id){
const b=(await dP(!1,(0,ac.f4)(null,null,null))).find((b=>b.id===a.m_id));b?eg((0,j.VK)(b),a.m_tab?function(a){switch(a){
case"account":case"activity":case"files":case"devices":case"groups":case"policies":case"security":return a;default:
return"groups"}}(a.m_tab):"groups"):dM(!0)}else dM(!0);break;case"group-details":if(a.m_id){const b=(await eo(!1,(0,
ac.f4)(null,null,null))).find((b=>b.id===a.m_id));if(b){let c="users"
;"users"!==a.m_tab&&"details"!==a.m_tab&&"files"!==a.m_tab&&"backups"!==a.m_tab&&"security"!==a.m_tab&&"policies"!==a.m_tab||(c=a.m_tab),
eA((0,k.wj)(b,await(0,k.NH)(b)),c)}else ej(!0)}else ej(!0);break;case"search":a.m_query?(bU(a.m_query),
await fO(a.m_query,!1)):dJ(!1);break;case"license-expired":aX(null)?dK():dJ(!1)}})())}async function dH(){return cd=(0,
t.y)(aQ,aR,aJ,ba,aW,aV,aT,{AddIntegration:()=>dI("integration"),GetAccountInfo:dE,GetCompanyUsers:dP,GetCompanyGroups:eo,
GetDataItemsList:eP,GetGroupsDataItems:eC,GetPasswordAudit:fp,GetDataItemPasswordStrength:fo,GetAddDataDropdownCommands:eU,
GetAltAuthStatus:dQ,GetAddUserDropdownCommands:dU,GetCompanyPolicyValue:f9,GetLicenseInfo:fy,GetGroupPolicyValue:ge,
IsCurrentUserAdmin:bn,OpenReportsTabAndNavigateToSection:fW,ShowUsersView:fS,ShowGroupsView:fT,ShowDataView:fU,
ShowReportsView:fv,ShowCreateGroupDialog:ew},aE),cd.Create()}function dI(a){if(!b7&&be.GetActiveView(null)!==a)switch(a){
case"dashboard":dJ(!0);break;case"users":dM(!0);break;case"groups":ej(!0);break;case"data":eN(!0);break;case"policies":fs(!0)
;break;case"integration":ft(!0);break;case"reports":fv(!0,null)}}function dJ(a){
"dashboard"!==be.GetActiveView(null)&&(be.SetState({m_view:"dashboard"},a,!1),cd.OnAfterShow(),fL())}function dK(){
cJ||cF.Start((async()=>{cJ=(0,w.M)(aJ,aI,aW,{GetLicenseInfo:bj,IsCurrentUserAdmin:bn,ShowNotification:f8},aE)
;const a=await cJ.Create();cG.appendChild(a),cJ.OnAfterShow()}))}async function dL(){return cf=(0,o.q)(aM,aW,bq,{
CreateUserDialog:d3,GetAltAuthStatus:dQ,GetCompanyGroups:eo,GetMemberGroupsCount:dO,GetCompanyUsers:dP,
GetSortedAndFilteredUsersList:dN,GetListOfCommandsForUser:dV,GetSelectedUsersCommonGroupsToAdd:d0,
GetSelectedUsersCommonGroupsToDelete:d1,IsCurrentUserAdmin:bn,ShowUserMainView:eg,ShowModalDialog:f4,ShowNotification:f8,
ShowAddUsersToGroupsDialog:eb,ShowRemoveUsersFromGroupsDialog:ea,ShowDeleteUserDialog:d4,ShowSuspendUserDialog:d5,
ShowRestoreUserDialog:d6,ShowResendToUserSetupInstructionsDialog:d2},aE),cf.Create()}function dM(a){
"users"!==be.GetActiveView(null)&&(be.SetState({m_view:"users"},a,!1),cf.OnAfterShow(),fL())}async function dN(a,b,c){var d
;let e=[...a];const f=new Map;if(b.m_search&&b.m_search.m_query){const a=b.m_search;e=e.filter((b=>{var c;if(0===a.m_target){
const c=(0,H.zR)(a.m_query,b.name||b.email,!1,!1,!1,!0,!1,!0);return!!c.matches.length&&(a.m_results_map.set(b.id,c.matches),
f.set(b.id,c.rank),!0)}if(1===a.m_target){const c=(0,H.zR)(a.m_query,b.email,!1,!1,!1,!0,!1,!0)
;return!!c.matches.length&&(a.m_results_map.set(b.id,c.matches),f.set(b.id,c.rank),!0)}{const d=(0,
H.zR)(a.m_query,`${null!==(c=b.name)&&void 0!==c?c:b.email} ${b.email}`,!1,!1,!1,!0,!1,!0)
;return!!d.matches.length&&(a.m_results_map.set(b.id,d.matches),f.set(b.id,d.rank),!0)}}))}if(b.m_role&&b.m_role.length){
const a=b.m_role;e=e.filter((b=>b.isAdmin?a.includes(0):b.isManager?a.includes(1):a.includes(2)))}
if(b.m_status&&b.m_status.length){const a=b.m_status;e=e.filter((b=>{if(b.disabled)return a.includes(1)
;if(b.suspended)return a.includes(5);if(2===b.status&&b.isNotComplete)return a.includes(4)
;if(0===b.status&&b.isNotComplete)return a.includes(2);if(1===b.status){if(a.includes(6))return!0
;if(a.includes(0)&&b.accessDate&&(0,j.e0)(b.accessDate,j.g1))return!0;if(a.includes(3)&&b.accessDate&&!(0,
j.e0)(b.accessDate,j.g1))return!0}
return!!(a.includes(0)&&b.accessDate&&(0,j.e0)(b.accessDate,j.g1))||!(!a.includes(3)||!b.accessDate||(0,
j.e0)(b.accessDate,j.g1))}))}if(b.m_inactive){const a=parseInt(b.m_inactive);e=e.filter((b=>b.accessDate&&!(0,
j.e0)(b.accessDate,a)))}if(b.m_added){const a=parseInt(b.m_added);e=e.filter((b=>b.created&&(0,j.IW)(b.created,a)))}
if(b.m_score&&b.m_score.length){const a=b.m_score;for(let b=e.length-1;b>=0;b--){const c=e[b],d=await(0,j.sm)((0,j.VK)(c))
;null!==d?d<=bG?a.includes(0)||e.splice(b,1):d<=bF?a.includes(1)||e.splice(b,1):d<=bE?a.includes(2)||e.splice(b,1):a.includes(3)||e.splice(b,1):e.splice(b,1)
}}if(b.m_2fa&&b.m_2fa.length){const a=b.m_2fa;for(let b=e.length-1;b>=0;b--){const d=e[b],f=(0,j.VK)(d),g=(0,j.lW)(f)
;if(2===g||4===g){a.includes(2)||e.splice(b,1);continue}const h=await dQ(f.m_id,g,c);a.includes(h.m_status)||e.splice(b,1)}}
if(b.m_groups&&b.m_groups.length){const a=new Set,d=b.m_groups;for(const b of d){(await aR.GetSharedAccountRecipients2(b,!0,{
fields:"-mp,-sender,-status,-current,-serverOnly,-name,-isAdmin,-isManager,-accepted,-company,-accountInfo,-policies,-recipientEmail,-isNotComplete,-recipientName,-recipientAccessDate"
},c)).forEach((b=>a.add(b.accountId)))}e=e.filter((b=>a.has(b.id)))}if(b.m_sort){const a=b.m_sort
;if(0===a.m_sort_by)e.sort(((b,c)=>{const d=b.name||b.email,e=c.name||c.email
;return a.m_asc?d.localeCompare(e):e.localeCompare(d)
}));else if(3===a.m_sort_by)e.sort(((b,c)=>a.m_asc?b.email.localeCompare(c.email):c.email.localeCompare(b.email)));else if(4===a.m_sort_by)e.sort(((b,c)=>{
const d=(0,j.lW)((0,j.VK)(b)),e=(0,j.lW)((0,j.VK)(c));return a.m_asc?d-e:e-d}));else if(5===a.m_sort_by)e.sort(((b,c)=>{
var d,e,f,g
;return a.m_asc?(null!==(d=c.created)&&void 0!==d?d:0)-(null!==(e=b.created)&&void 0!==e?e:0):(null!==(f=b.created)&&void 0!==f?f:0)-(null!==(g=c.created)&&void 0!==g?g:0)
}));else if(6===a.m_sort_by){const b=new Map;for(const a of e){const c=await(0,j.sm)((0,j.VK)(a));b.set(a.id,null!=c?c:0)}
e.sort(((c,d)=>{var e,f;const g=null!==(e=b.get(c.id))&&void 0!==e?e:0,h=null!==(f=b.get(d.id))&&void 0!==f?f:0
;return a.m_asc?h-g:g-h}))}else 1===a.m_sort_by?e.sort(((b,c)=>{
const d=parseInt(b.accessDate||"0"),e=parseInt(c.accessDate||"0");return a.m_asc?e-d:d-e
})):f.size>0&&(null===(d=b.m_search)||void 0===d?void 0:d.m_query)?e.sort(((a,b)=>{var c,d
;const e=null!==(c=f.get(a.id))&&void 0!==c?c:0;return(null!==(d=f.get(b.id))&&void 0!==d?d:0)-e})):e.sort(((b,c)=>{
const d=b.name||b.email,e=c.name||c.email;return a.m_asc?d.localeCompare(e):e.localeCompare(d)}))}else e.sort(((a,b)=>{
const c=a.name||a.email,d=b.name||b.email;return c.localeCompare(d)}));return e}async function dO(a,b){
const c=await aQ.GetMemberGroups(a,1,b);if("number"==typeof c)return c
;throw(0,ah.ZU)(ah.V2,"The return value should be a number. Other type returned.")}async function dP(a,b){
return ch&&!a||(ch=await cg.Execute({action:async a=>{ci.clear();let b=await aQ.GetCompanyMembers(bp,{doPost:!0,
fields:"+accessDate, +securityStats, +isManager, +created"},a);if("number"==typeof b)throw(0,
ah.ZU)(ah.V2,"Wrong users list format: returned value is number");return b=b.filter((a=>{var b
;return(null===(b=a.name)||void 0===b?void 0:b.toLowerCase())!==j.Ho.toLowerCase()})),[...b]}},b)),ch}async function dQ(a,b,c){
let d=ci.get(a);if(d)return d;if(2===b||4===b)return d={m_status:2,m_text:dh,m_tooltip:di},ci.set(a,d),d;try{
switch((await aI.GetAccountInfo(a,c)).altAuth){case"email":d={m_status:2,m_text:dh,m_tooltip:di};break;case"sms":d={m_status:4,
m_text:dj,m_tooltip:dk};break;case"totp":d={m_status:3,m_text:dl,m_tooltip:dm};break;default:d={m_status:1,m_text:dn,
m_tooltip:""}}return ci.set(a,d),d}catch(e){return{m_status:1,m_text:dn,m_tooltip:""}}}function dR(a,b){switch(a){case 0:
return dp;case 1:return dq;case 2:return dr;case 4:return ds;case 5:return dt;case 3:return b?du:dp;default:
return"unknown user status"}}function dS(a){return a>bE?dd:a>bF?de:a>bG?df:dg}function dT(a){
return a>=bH?dc:a>=bI?db:a>=bJ?da:c9}async function dU(){const a=[];return a.push({
title:await aF("AdminCenter_UsersTabView_CreateUser_Title_Text"),imageClass:"cmd-create-user-icon",onCommand:async(a,b)=>{
await d3(b)}}),a.push("separator"),a.push({title:await aF("AdminCenter_UsersTabView_ImportUsers_Title_Text"),
imageClass:"cmd-import-users-icon",onCommand:async(a,b)=>{const c=await async function(a){return f4((0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal import-users-dialog",await aF("AdminCenter_UsersTabView_ImportUsers_Title_Text"),null),(()=>(0,
l.lY)(aG,aE)))),a)}(b);if(c){const a=await async function(a,b){const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal users-import-progress-dialog",await aF("AdminCenter_UsersTabView_ImportUsers_Title_Text"),null),(b=>(0,
l.W9)(a,bp,aQ,aE,b))));return f4(c,b)}(c,b);if(a){const b=[];a.m_users_created&&b.push({event:0}),a.m_groups_created&&b.push({
event:6}),b.length&&aW.onEvent.CallAllSync(b),await async function(a){const b=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal users-import-report-dialog",await aF("AdminCenter_UsersTabView_ImportUsers_Title_Text"),null),(()=>(0,
l.zs)(a,aE))));return f4(b,null)}(a)}}}}),a.push({title:await aF("AdminCenter_Integration_Tab_Button_Text"),
imageClass:"cmd-integration-icon",onCommand:async(a,b)=>{ft(!0)}}),a.push({
title:await aF("AdminCenter_UsersTabView_JoinUser_Title_Text"),imageClass:"cmd-join-user-icon",onCommand:async(a,b)=>{
const c=await async function(a){
const b=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal join-user-dialog",await aF("AdminCenter_UsersTabView_JoinUser_Title_Text"),null),(a=>(0,
j.JJ)(bp,aQ,aE,a))));return f4(b,a)}(b);c&&(aW.onEvent.CallAllSync([{event:0}]),
f8(await aF("Notification_User_Invited_Text",[c]),null,null))}}),a}async function dV(a){const b=[],c=(0,
ac.f4)(null,null,null),d=bn(null);let e=!1
;const f=await aQ.GetMemberGroups(a.m_id,1,c),g="number"==typeof f?f:f.length,h=await async function(a,b){const c=await eo(!1,b)
;if(c.length===a)return!1;return!0}(g,c),i=dZ(g),k=i&&(d||a.m_id!==bq&&!a.m_isAdmin);return await dX(a,b),
(d||h||k)&&b.push("separator"),h&&(await async function(a,b){b.push({title:await aF("AdminCenter_AddToGroups_Text"),
imageClass:"cmd-add-user-to-group-icon",onCommand:async(b,c)=>{await ec(a,c)}})}(a,b),e=!!d),k&&(await async function(a,b){
b.push({title:await aF("AdminCenter_UsersTabView_RemoveFromGroups_Button_Text"),imageClass:"cmd-remove-user-from-group-icon",
onCommand:async(b,c)=>{await async function(a,b){const c=await async function(a,b){
const c=await aF("AdminCenter_GroupsTabView_Permissions_Regular_Text"),d=await aF("AdminCenter_GroupsTabView_Permissions_Limited_Text"),e=await aF("AdminCenter_Role_Admin_Text"),f=await aF("AdminCenter_GroupsTabView_StorageType_Server_Text"),g=await aF("AdminCenter_GroupsTabView_StorageType_Synced_Text"),h={
translations:{text:await aF("AdminCenter_UsersTabView_AddUserToGroup_SingleUser_Text",[a.m_name||a.m_email]),
search_placeholder:await aF("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aF("Cmd_Cancel_Flat"),
ok_btn:await aF("AdminCenter_Remove_Text")},fields:[{key:"name",label:await aF("AdminCenter_Group_Name_Text"),sortable:!0,
width_multiplier:2},{label:await aF("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aF("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:l};function i(a){
return a.serverOnly?f:g}function j(b){return a.m_isAdmin?e:b.readOnly?d:c}return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aF("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),null),(()=>(0,
v.F)(k(),[],h,aE)))),b);async function k(){
const c=await eo(!1,b),d=(await aQ.GetMemberGroups(a.m_id,null,b)).filter((a=>!a.disabled))
;return c.filter((a=>d.some((b=>b.accountId===a.id))))}async function l(c){const d=c.map((a=>a.id));await eD([a.m_id],d,b)}
}(a,b);if(c.length>0)return aW.onEvent.CallAllSync([{event:4,id:[a.m_id,...c.map((a=>a.id))]}]),
f8(await aF("Notification_Users_Delete_From_Groups_Text"),null,null),!0;return!1}(a,c)}})}(a,b),e=!0,e=!!d),
d||i?(e&&b.push("separator"),e=!1,d&&(0,j.FG)(a)&&(await async function(a,b){b.push({
title:await aF("AdminCenter_UsersTabView_ResendInvitation_Text"),imageClass:"cmd-resend-instructions-icon",
onCommand:async(b,c)=>{await async function(a,b){const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aF("AdminCenter_UsersTabView_ResendInvitation_Text"),null),(b=>(0,j.LF)(a,bp,aQ,aE,b))))
;return f4(c,b)}(a,c)}})}(a,b),e=!0),d&&(0,j.fH)(a)&&(await async function(a,b){b.push({
title:await aF("AdminCenter_ResendUserInstructions_Text"),imageClass:"cmd-resend-instructions-icon",onCommand:async(b,c)=>{
await d2([a],c)}})}(a,b),e=!0),d&&(0,j.AX)(a)&&(a.m_suspended?await async function(a,b){b.push({
title:await aF("AdminCenter_SuspendUser_Restore_Text"),imageClass:"cmd-user-restore-icon",onCommand:async(b,c)=>{await d6([a],c)
}})}(a,b):await async function(a,b){b.push({title:await aF("AdminCenter_SuspendUser_Suspend_Text"),
imageClass:"cmd-user-suspend-icon",onCommand:async(b,c)=>{await d5([a])}})}(a,b),e=!0),(0,
j.Kn)(a)&&d&&(await async function(a,b){b.push({title:await aF("AdminCenter_UnblockUser_Unblock_Text"),
imageClass:"cmd-user-unblock-icon",onCommand:async(b,c)=>{await d7(a,c)}})}(a,b),e=!0),
!d||a.m_is_not_complete||f3(a.m_id)||(await async function(a,b){b.push({title:await aF("AdminCenter_ConvertToPersonal_Text"),
imageClass:"cmd-convert-to-personal-icon",onCommand:async(b,c)=>{await d9(a,c)}})}(a,b),e=!0),
d&&!(a.m_is_not_complete||a.m_suspended||f3(a.m_id))&&(await async function(a,b){b.push({
title:a.m_isAdmin?await aF("AdminCenter_MakeAsAdmin_RevokeAdmin_Text"):await aF("AdminCenter_MakeAsAdmin_MakeAdmin_Text"),
imageClass:"cmd-make-admin-icon",onCommand:async(b,c)=>{await d8(a,c)}})}(a,b),e=!0),d&&!f3(a.m_id)&&(e&&b.push("separator"),
b.push({title:c8,imageClass:"cmd-delete-icon",onCommand:async(b,c)=>{await d4([a],c)}})),b):b}async function dW(a,b){const c=[]
;return await dY(a,b,c),c.push("separator"),await ev(b,a,c),c.push("separator"),await dX(a,c),c}async function dX(a,b){b.push({
title:await aF("AdminCenter_UsersTabView_UserDetails_Text"),imageClass:"cmd-user-details",onCommand:async()=>{eg(a,"groups")}})}
async function dY(a,b,c){c.push({title:await aF("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),
imageClass:"cmd-remove-user-from-group-icon",onCommand:async(c,d)=>{await ee(a,[b],d)}})}function dZ(a){return a>0}
async function d0(a,b){let c=[],d=!0;const e=await eo(!1,b);for(const f of a){null==b||b.ThrowIfShouldStop()
;let a=await aQ.GetMemberGroups(f.m_id,null,b);if(a=a.filter((a=>!a.disabled)),e.length===a.length){c=[];break}
if(d)c=e.filter((b=>!a.some((a=>a.accountId===b.id)))),d=!1;else if(c=c.filter((b=>!a.some((a=>a.accountId===b.id)))),
!c.length)break}return c}async function d1(a,b){let c=[],d=!0;for(const e of a){if(null==b||b.ThrowIfShouldStop(),
!bn(null)&&(e.m_isAdmin||e.m_id===bq))return[];let a=await aQ.GetMemberGroups(e.m_id,null,b);if(a=a.filter((a=>!a.disabled)),
!a.length){c=[];break}if(d)c=a,d=!1;else if(c=c.filter((b=>a.filter((a=>a.accountId===b.accountId)).length>0)),!c.length)break}
return c}async function d2(a,b){if(await async function(a,b){const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aF("AdminCenter_ResendUserInstructions_Text"),null),(b=>(0,j.lK)(a,aQ,aE,aG,b))));return f4(c,b)
}(a,b)){
return f8(1===a.length?await aF("Notification_User_ResendInstructions_Text",[a[0].m_name||a[0].m_email]):await aF("Notification_Users_ResendInstructions_Text",[a.length.toString()]),null,null),
!0}return!1}async function d3(a){const b=await async function(a){const b=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal create-user-dialog",await aF("AdminCenter_UsersTabView_CreateUser_Title_Text"),null),(a=>(0,
j.R9)(bp,aQ,aE,aG,a))));return f4(b,a)}(a);if(b){aW.onEvent.CallAllSync([{event:0}]),
f8(await aF("Notification_User_Created_Text",[b]),null,null);const c=await aQ.GetCompanyMembers(bp,{doPost:!0,filter:b,
fields:"+accessDate, +securityStats, +isManager"},a);if("number"!=typeof c&&c[0]){eg((0,j.VK)(c[0]),"groups")}}}
async function d4(a,b){const c=await async function(a,b){const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal delete-user-dialog",await aF("Cmd_Delete_Flat"),null),(b=>(0,j.Mh)(a,bp,aQ,aE,b))));return f4(c,b)}(a,b)
;if(c){aW.onEvent.CallAllSync([{event:2}])
;f8(1===a.length?await aF("Notification_User_Deleted_Text",[a[0].m_name||a[0].m_email]):await aF("Notification_Users_Deleted_Text",[a.length.toString()]),null,null)
}return c}async function d5(a){if(await async function(a){const b=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal suspend-user-dialog",await aF("AdminCenter_SuspendUser_Suspend_Text"),null),(b=>(0,j.pw)(a,aQ,aE,b))))
;return f4(b,null)}(a)){aW.onEvent.CallAllSync([{event:1,id:a.map((a=>a.m_id))}])
;return f8(1===a.length?await aF("Notification_User_AccountSuspend_Text",[a[0].m_name||a[0].m_email]):await aF("Notification_Users_AccountSuspend_Text",[a.length.toString()]),null,null),
!0}return!1}async function d6(a,b){if(await async function(a,b){const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aF("AdminCenter_SuspendUser_Restore_Text"),null),(b=>(0,j.Po)(a,aQ,aE,b))));return f4(c,b)}(a,b)){
aW.onEvent.CallAllSync([{event:1,id:a.map((a=>a.m_id))}])
;return f8(1===a.length?await aF("Notification_User_AccountRestore_Text",[a[0].m_name||a[0].m_email]):await aF("Notification_Users_AccountRestore_Text",[a.length.toString()]),null,null),
!0}return!1}async function d7(a,b){return!!await async function(a,b){const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aF("AdminCenter_UnblockUser_Unblock_Text"),null),(b=>(0,j.$$)(a,aQ,aE,b))));return f4(c,b)
}(a,b)&&(aW.onEvent.CallAllSync([{event:1,id:[a.m_id]
}]),f8(await aF("Notification_User_AccountUnblock_Text",[a.m_name||a.m_email]),null,null),!0)}async function d8(a,b){
return!!await async function(a,b){
const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal make-user-admin-dialog",a.m_isAdmin?aF("AdminCenter_MakeAsAdmin_RevokeAdmin_Text"):aF("AdminCenter_MakeAsAdmin_MakeAdmin_Text"),null),(b=>(0,
j.dv)(a,bp,aQ,aE,b))));return f4(c,b)}(a,b)&&(aW.onEvent.CallAllSync([{event:1,id:[a.m_id]}]),!0)}async function d9(a,b){
return!!await async function(a,b){
const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal convert-to-personal-dialog",await aF("AdminCenter_ConvertToPersonal_Text"),null),(b=>(0,
j.n8)(a,bp,aQ,aE,b))));return f4(c,b)}(a,b)&&(aW.onEvent.CallAllSync([{event:2}]),
f8(await aF("Notification_User_ConvertToPersonal_Text",[a.m_name||a.m_email]),null,null),!0)}async function ea(a,b){
return!!await async function(a,b){
const c=await aF("AdminCenter_GroupsTabView_Permissions_Regular_Text"),d=await aF("AdminCenter_GroupsTabView_Permissions_Limited_Text"),e=await aF("AdminCenter_GroupsTabView_StorageType_Server_Text"),f=await aF("AdminCenter_GroupsTabView_StorageType_Synced_Text"),g={
translations:{text:await aF("AdminCenter_UsersTabView_AddUsersToGroups_Warning",[a.length.toString()]),
search_placeholder:await aF("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aF("Cmd_Cancel_Flat"),
ok_btn:await aF("AdminCenter_Remove_Text")},fields:[{label:await aF("AdminCenter_Group_Name_Text"),sortable:!0,key:h,
width_multiplier:2},{label:await aF("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aF("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:l};function h(a){
var b;return(null===(b=a.accountInfo)||void 0===b?void 0:b.name)||a.name}function i(a){return a.serverOnly?e:f}function j(a){
return a.readOnly?d:c}
const k=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aF("AdminCenter_UsersTabView_RemoveUsersFromGroups_Title_Text"),null),(()=>(0,
v.F)(b,[],g,aE))));return f4(k,null);async function l(b){const c=a.map((a=>a.m_id)),d=b.map((a=>a.accountId));await eD(c,d,null)
}}(a,b)&&(aW.onEvent.CallAllSync([{event:4,id:[...a.map((a=>a.m_id)),...b.map((a=>a.accountId))]}]),
f8(await aF("Notification_Users_Delete_From_Groups_Text"),null,null),!0)}async function eb(a,b,c){
return!!await async function(a,b,c){
const d=await aF("AdminCenter_GroupsTabView_Permissions_Regular_Text"),e=await aF("AdminCenter_GroupsTabView_Permissions_Limited_Text"),f=await aF("AdminCenter_GroupsTabView_StorageType_Server_Text"),g=await aF("AdminCenter_GroupsTabView_StorageType_Synced_Text"),h={
translations:{text:await aF("AdminCenter_UsersTabView_AddUsersToGroups_Warning",[a.length.toString()]),
search_placeholder:await aF("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aF("Cmd_Cancel_Flat"),
ok_btn:await aF("AdminCenter_Add_Button_Text")},fields:[{key:"name",label:await aF("AdminCenter_Group_Name_Text"),sortable:!0,
width_multiplier:2},{label:await aF("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aF("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:l};function i(a){
return a.serverOnly?f:g}function j(a){return a.readOnly?e:d}const k=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aF("AdminCenter_AddUsersToGroups_Text"),null),(()=>(0,
v.F)(b,[],h,aE))));return f4(k,c);async function l(b){const d=a.map((a=>a.m_id)),e=b.map((a=>a.id));await eE(d,e,{
serverOnly:null,readOnly:null,showPasswords:null,manager:!1},c)}}(a,b,c)&&(aW.onEvent.CallAllSync([{event:3,
id:[...a.map((a=>a.m_id)),...b.map((a=>a.id))]}]),f8(await aF("Notification_Users_Added_To_Groups_Text"),null,null),!0)}
async function ec(a,b){const c=await async function(a,b){
const c=await aF("AdminCenter_GroupsTabView_Permissions_Regular_Text"),d=await aF("AdminCenter_GroupsTabView_Permissions_Limited_Text"),e=await aF("AdminCenter_Role_Admin_Text"),f=await aF("AdminCenter_GroupsTabView_StorageType_Server_Text"),g=await aF("AdminCenter_GroupsTabView_StorageType_Synced_Text"),h={
translations:{text:await aF("AdminCenter_UsersTabView_AddUserToGroup_SingleUser_Text",[a.m_name||a.m_email]),
search_placeholder:await aF("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aF("Cmd_Cancel_Flat"),
ok_btn:await aF("AdminCenter_Add_Button_Text")},fields:[{key:"name",label:await aF("AdminCenter_Group_Name_Text"),sortable:!0,
width_multiplier:2},{label:await aF("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aF("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:k};function i(a){
return a.serverOnly?f:g}function j(b){return a.m_isAdmin?e:b.readOnly?d:c}return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aF("AdminCenter_AddToGroup_Text"),null),(()=>(0,
v.F)(l(),[],h,aE)))),b);async function k(c){const d=c.map((a=>a.id));await eE([a.m_id],d,{serverOnly:null,readOnly:null,
showPasswords:null,manager:!1},b)}async function l(){
const c=await eo(!1,b),d=(await aQ.GetMemberGroups(a.m_id,null,b)).filter((a=>!a.disabled))
;return c.filter((a=>!d.some((b=>b.accountId===a.id))))}}(a,b);return!!c.length&&(aW.onEvent.CallAllSync([{event:3,
id:[a.m_id,...c.map((a=>a.id))]}]),f8(await aF("Notification_Users_Added_To_Groups_Text"),null,null),!0)}
async function ed(a,b,c,d){return async function(a,b,c,d){const e=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aF("AdminCenter_IntegrationView_SSO_Group_Select_Dialog_Title"),null),(()=>(0,
v.F)(a,b,c,aE))));return f4(e,d)}(a,b,c,d)}async function ee(a,b,c){return!!await async function(a,b,c){
const d=b.length>1?await aF("AdminCenter_UsersTabView_RemoveFromGroups_Button_Text"):await aF("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),e=(0,
y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal exclude-single-user-modal",d,null),(c=>(0,j.v_)(a,b,aE,{
RemoveUsersFromGroups:eD},c))));return f4(e,c)}(a,b,c)&&(aW.onEvent.CallAllSync([{event:4,id:[a.m_id,...b.map((a=>a.m_id))]}]),
f8(await aF("Notification_Users_Delete_From_Groups_Text"),null,null),!0)}async function ef(a,b,c){
return!!await async function(a,b,c){
const d=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal",await aF("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),null),(c=>(0,
k.jA)(b,a,aE,{RemoveUsersFromGroups:eD},c))));return f4(d,c)}(a,b,c)&&(aW.onEvent.CallAllSync([{event:4,
id:[b.m_id,...a.map((a=>a.m_id))]}]),f8(await aF("Notification_Users_Delete_From_Groups_Text"),null,null),!0)}function eg(a,b){
cL.Start((async c=>{const d=await aQ.GetMemberGroups(a.m_id,1,c)
;if(!bn(null)&&!dZ(d))return void f8(await aF("AdminCenter_UserTabView_NotGroupMember_Text",[a.m_name||a.m_email]),null,0);(0,
W.rK)(cM),eh(),cO=(0,j.eH)(a,bp,bq,aQ,aI,aV,aW,aM,b,aE,{GetAccountInfo:dE,GetCompanyInfo:en,GetGroupDataItems:eC,
GetTextByPasswordStrength:dT,GetTextByUserStatusValue:dR,GetDataItemPasswordStrength:fo,GetListOfCommandsForRfItem:e7,
GetListOfCommandsForGroup:ep,GetPasswordAudit:fp,GetCompanyGroups:eo,GetSortedAndFilteredGroupsList:ek,
GetSortedAndFilteredDataList:eO,IsCurrentUserAdmin:bn,ShowUsersTab:dM,ShowCreateGroupDialog:ew,
ShowAddSingleUserToGroupsDialog:ec,ShowExcludeUserFromGroupsConfirmation:ee,ShowGroupMainView:eA,
ShowDataViewModeInDetailsPane:e0,ShowRightDetailsPanel:e2,HideViewInRightPanel:e3,ShowDeleteRfItemDialog:eR,
ShowMoveCloneRfItemDialog:eQ,ShowMakeRevokeAsAdminDialog:d8,ShowSuspendUserDialog:d5,ShowRestoreUserDialog:d6,
ShowConvertToPersonalUserDialog:d9,ShowDeleteUserDialog:d4,ShowResendInstructionslUserDialog:d2,
ShowUnblockUserDialogAndUpdateView:d7,SetLoginLogoImageBackgroundUrl:f6,ShowNotification:f8,ShowModalDialog:f4,ShowSetPolicy:fV
}),cN=a.m_id;const e=await cO.Create();"search"===be.GetActiveView(null)&&fP(),cM.appendChild(e),cO.OnAfterShow(),be.SetState({
m_view:"user-details",m_id:cN,m_tab:b},!0,!1),fM()}))}function eh(){cN="",cO&&(cO.Dispose(),cO=null)}async function ei(){
return ck=(0,d.M)(aM,aV,aW,{GetCompanyGroups:eo,GetSortedAndFilteredGroupsList:ek,GetCompanyPoliciesValues:ga,
GetGroupDataItems:eC,GetListOfCommandsForGroup:ep,IsCurrentUserAdmin:bn,ShowAddGroupDialog:ez,ShowGroupMainView:eA,
ShowDeleteGroupDialog:ex,ShowNotification:f8,ShowModalDialog:f4},aE),ck.Create()}function ej(a){
"groups"!==be.GetActiveView(null)&&(be.SetState({m_view:"groups"},a,!1),ck.OnAfterShow(),fL())}async function ek(a,b,c){
var d,e,f;let g=[...a];const h=new Map;if(b.m_search&&b.m_search.m_query){const a=b.m_search;g=g.filter((b=>{const c=(0,
H.zR)(a.m_query,b.name,!1,!1,!1,!0,!1,!0);return!!c.matches.length&&(a.m_results_map.set(b.id,c.matches),h.set(b.id,c.rank),!0)
}))}if(b.m_without_users&&(g=g.filter((a=>!(a.membersCount&&a.membersCount>0)))),
b.m_without_manager&&(g=g.filter((a=>!(a.managersCount&&a.managersCount>0)))),b.m_created){const a=parseInt(b.m_created)
;g=g.filter((b=>b.createdTime&&(0,k.qS)(b.createdTime,a)))}
if(b.m_storage&&b.m_storage.length&&(!b.m_storage.includes(0)||!b.m_storage.includes(1))){const a=b.m_storage
;g=g.filter((b=>a.includes(0)?!0===b.serverOnly:!b.serverOnly))}
if(b.m_permissions&&b.m_permissions.length&&(!b.m_permissions.includes(0)||!b.m_permissions.includes(1))){
const a=b.m_permissions;g=g.filter((b=>a.includes(0)?!b.readOnly:!0===b.readOnly))}if(b.m_score&&b.m_score.length){
const a=b.m_score;for(let b=g.length-1;b>=0;b--){const c=await(0,k.g4)(g[b].securityStats)
;null!==c?c<=k.L7?a.includes(0)||g.splice(b,1):c<=k._3?a.includes(1)||g.splice(b,1):c<=k.ee?a.includes(2)||g.splice(b,1):a.includes(3)||g.splice(b,1):g.splice(b,1)
}}if(b.m_without_data)for(let i=g.length-1;i>=0;i--){await(0,k.NH)(g[i])>0&&g.splice(i,1)}
if(b.m_compromised)for(let i=g.length-1;i>=0;i--){const a=g[i];if(!await(0,k.NH)(a)){g.splice(i,1);continue}
const b=(await eC(a.id,c)).filter((a=>1===a.m_item_info.type));if(!b.length){g.splice(i,1);continue}let d=!1
;for(const e of b)if(d=await(0,p.e7)(e,ba,c),d)break;d||g.splice(i,1)}if(b.m_sort){const a=b.m_sort
;if(0===a.m_sort_by)g.sort(((b,c)=>a.m_asc?b.name.localeCompare(c.name):c.name.localeCompare(b.name)));else if(4===a.m_sort_by)g.sort(((b,c)=>a.m_asc?(c.membersCount||0)-(b.membersCount||0):(b.membersCount||0)-(c.membersCount||0)));else if(5===a.m_sort_by){
const b=new Map;for(const a of g){const c=await(0,k.NH)(a);b.set(a.id,c)}g.sort(((c,d)=>{var e,f
;const g=null!==(e=b.get(c.id))&&void 0!==e?e:0,h=null!==(f=b.get(d.id))&&void 0!==f?f:0;return a.m_asc?h-g:g-h}))
}else if(2===a.m_sort_by)g.sort(((b,c)=>{const d=b.serverOnly?1:0,e=c.serverOnly?1:0;return a.m_asc?e-d:d-e
}));else if(3===a.m_sort_by)g.sort(((b,c)=>{const d=b.readOnly?1:0,e=c.readOnly?1:0;return a.m_asc?e-d:d-e
}));else if(6===a.m_sort_by){const b=new Map;for(const a of g){const c=null!==(e=await(0,
k.g4)(null!==(d=a.securityStats)&&void 0!==d?d:""))&&void 0!==e?e:0;b.set(a.id,c)}g.sort(((c,d)=>{var e,f
;const g=null!==(e=b.get(c.id))&&void 0!==e?e:0,h=null!==(f=b.get(d.id))&&void 0!==f?f:0;return a.m_asc?h-g:g-h}))
}else h.size>0&&(null===(f=b.m_search)||void 0===f?void 0:f.m_query)?g.sort(((a,b)=>{var c,d
;const e=null!==(c=h.get(a.id))&&void 0!==c?c:0;return(null!==(d=h.get(b.id))&&void 0!==d?d:0)-e
})):g.sort(((b,c)=>a.m_asc?b.name.localeCompare(c.name):c.name.localeCompare(b.name)))
}else g.sort(((a,b)=>a.name.localeCompare(b.name)));return g}async function el(a,b){await aQ.UploadCompanyPolicies(bp,a,b),
await en(!0,b)}async function em(a,b,c){await aQ.UploadGroupPolicies(a,b,c)}async function en(a,b){let c=bh(null)
;return c&&!a||(c=await bs.Execute({action:async a=>aQ.GetCompanyInfo(a)},b),bi(c)),c}async function eo(a,b){
return cl&&!a||(cl=await cn.Execute({action:async a=>{let b=await aQ.GetCompanyGroups(bp,a)
;return b=b.filter((a=>a.name.toLowerCase()!==k.DC.toLowerCase())),[...b]}},b)),cl}async function ep(a,b){const c=[],d=bn(null)
;return await eq(a,c),c.push("separator"),await async function(a,b){b.push({title:await aF("AdminCenter_AddUsers_Text"),
imageClass:"cmd-add-to-group",onCommand:async(b,c)=>{await ey(a,c)}})}(a,c),c.push("separator"),b&&(await ev(a,b,c),
c.push("separator")),d&&!b&&(await et(a,c),c.push("separator")),b?await dY(b,a,c):await er(a,c),d&&!b&&(c.push("separator"),
await eu(a,c)),c}async function eq(a,b){b.push({title:await aF("AdminCenter_GroupsTabView_GroupDetails_Text"),
imageClass:"cmd-open-file-location-icon",onCommand:async(b,c)=>{eA(a,"users")}})}async function er(a,b){b.push({
title:await aF("AdminCenter_GroupsTabView_Group_Settings_Text"),imageClass:"cmd-group-settings-icon",onCommand:async(b,c)=>{
eA(a,"details")}})}async function es(a,b){b.push({title:await aF("Cmd_NewFolder_Title"),imageClass:"cmd-group-icon",
onCommand:async(b,c)=>{const d=await eW(a,c);d&&f8(await aF("StartPage_Editor_ItemCreated",[d]),c6,null)}})}
async function et(a,b){b.push({title:await aF("Cmd_Rename_Flat"),imageClass:"cmd-rename-icon",onCommand:async()=>{
await async function(a){const b=await async function(a){const b=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal rename-group-dialog",await aF("AdminCenter_RenameTo_Text"),null),(b=>(0,k.DI)(a,aJ,aE,{RenameGroup:eF},b))))
;return f4(b,null)}(a);b&&(aW.onEvent.CallAllSync([{event:8,id:[a.m_id]
}]),f8(await aF("Notification_Item_Renamed_Text",[a.m_name,b]),null,null))}(a)}})}async function eu(a,b){b.push({title:c8,
imageClass:"cmd-delete-icon",onCommand:async()=>{await ex([a])}})}async function ev(a,b,c){c.push({
title:await aF("AdminCenter_UsersTabView_UserPermissions_Text"),imageClass:"cmd-edit-permissions-icon",onCommand:async(c,d)=>{
await async function(a,b,c){
const d=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal edit-permissions",await aF("AdminCenter_UsersTabView_EditPermissions_Text"),null),(c=>(0,
j.HX)(b,a,aQ,aE,c))));return f4(d,c)}(a,b,d)&&aW.onEvent.CallAllSync([{event:1,id:[b.m_id,a.m_id]}])}})}function ew(){(0,
W.PQ)((async()=>{const a=await ez();a&&(eA(a,"users"),f8(await aF("Notification_Group_Created_Text",[a.m_name]),c6,null),
aW.onEvent.CallAllSync([{event:6}]))}),(()=>((0,W.aZ)((0,ae.TT)(b9)),()=>{(0,W.r9)((0,ae.TT)(b9))})),0,null,(a=>()=>{}))}
async function ex(a){const b=await async function(a){return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aF("AdminCenter_DeleteFile_Text",[""]),null),(b=>(0,k.ER)(a,aQ,aE,b)))),null)}(a);if(b){(0,
ac.fI)(aJ.SyncInBackground(null)),aW.onEvent.CallAllSync([{event:7,id:[...a.map((a=>a.m_id))]}])
;f8(1===a.length?await aF("Notification_Group_Deleted_Text",[a[0].m_name]):await aF("Notification_Groups_Deleted_Text",[(0,
ae.bf)(a.length)]),null,null)}return b}async function ey(a,b){const c=await async function(a,b){const c={fields:[{key:"name",
label:await aF("Options_Account_Name_Text"),sortable:!0},{key:"email",label:await aF("Options_Account_Email_Text"),muted:!0}],
translations:{text:await aF("AdminCenter_UsersTabView_AddUsersToGroup_SingleUser_Text",[a.m_name]),
search_placeholder:await aF("AdminCenter_Search_By_NameEmail_Placeholder"),cancel_btn:await aF("Cmd_Cancel_Flat"),
ok_btn:await aF("AdminCenter_Add_Button_Text")},on_ok_callback:d};async function d(c){const d=c.map((a=>a.id))
;await eE(d,[a.m_id],{serverOnly:null,readOnly:null,showPasswords:null,manager:!1},b)}async function e(){
const c=(await aR.GetSharedAccountRecipients2(a.m_id,!1,{fields:"-mp,-sender,-company,-accountInfo,-policies"
},b)).filter((a=>!a.disabled));return(await dP(!1,b)).filter((a=>!c.some((b=>b.accountId===a.id))))}return f4((0,y.Sw)((0,
ae.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal group-add-users-dialog dialog-with-list",await aF("AdminCenter_AddUsersToSingleGroup_Text"),null),(()=>(0,
v.F)(e(),[],c,aE)))),b)}(a,b);return c.length>0&&(aW.onEvent.CallAllSync([{event:3,id:[a.m_id,...c.map((a=>a.id))]}]),
f8(await aF("Notification_Users_Added_To_Groups_Text"),null,null),!0)}async function ez(){return f4((0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal create-group-dialog",aF("AdminCenter_GroupsTabView_CreateGroup_Title_Text"),null),(a=>(0,
k.xq)(bp,aQ,aJ,aE,{GetCompanyGroups:eo,GetCompanyPoliciesValues:ga},a)))),null)}function eA(a,b){
if(a.m_id===cR&&"group-details"===be.GetActiveView(null)&&be.GetState().m_id===a.m_id&&cU)return be.SetState({
m_view:"group-details",m_id:cR,m_tab:b},!1,!1),void cU.OnAfterShow();cP.Start((async()=>{(0,W.rK)(cQ),eB(),cR=a.m_id,
"search"===be.GetActiveView(null)&&fP(),be.SetState({m_view:"group-details",m_id:cR,m_tab:b},!0,!1),cU=(0,
k.m4)(a,aQ,aR,aP,aV,ba,aO,aW,aM,be,bp,bq,{GetAccountInfo:dE,GetListOfCommandsForUser:dW,GetListOfCommandsForRfItem:e7,
GetGroupDataItems:eC,GetCompanyInfo:en,GetCompanyGroups:eo,GetCompanyUsers:dP,GetCompanyPoliciesValues:ga,
GetGroupPolicyValue:ge,GetDataItemPasswordStrength:fo,GetPasswordAudit:fp,GetTextByPasswordStrength:dT,
GetSortedAndFilteredUsersList:dN,GetSortedAndFilteredDataList:eO,GetAddDataDropdownCommands:eU,IsCurrentUserAdmin:bn,
OpenDataTabFolder:fk,RenameGroup:eF,SetLoginLogoImageBackgroundUrl:f6,ShowGroupsTab:ej,ShowUserMainView:eg,
ShowExcludeUsersFromGroupConfirmation:ef,ShowAddUsersToSingleGroupDialog:ey,ShowDataViewModeInDetailsPane:e0,
ShowDeleteRfItemDialog:eR,ShowMoveCloneRfItemDialog:eQ,ShowDeleteGroupDialog:ex,ShowModalDialog:f4,ShowNotification:f8,
ShowSetPolicy:fV},aE);const c=await cU.Create();cQ.appendChild(c),cU.OnAfterShow(),fM()}))}function eB(){cR="",
cU&&(cU.Dispose(),cU=null)}async function eC(a,b){
const c=(await aP.ListOwnedAndManagedReceivedAccounts(b)).find((b=>b.accountInfo.accountId===a));let d=""
;if(c)d="/"+c.accountInfo.name;else{const c=(await eo(!1,b)).find((b=>b.id===a));c&&(d="/"+c.name)}if(""===d)return[];const e=[]
;return await(0,K.s_)(aV,(async a=>{if(8!==a.type&&(!(0,F.Rf)(a.type)||4===a.type))return;if(8===a.type)return;let c;try{
c=await aV.GetFile(a.path,"utf16",b)}catch(i){return void(0,ah.au)(i)}if(!c)return;let d=null;try{d=JSON.parse(c)}catch(i){
return void(0,ah.au)(i)}if(!d)return;const f=(0,F.hF)(a.path),g=(0,J.m6)(d,f);if(!g)return;a.path=(0,ab.$b)(a.path,I.ZD)||a.path
;const h={m_item_info:a,m_item:g};e.push(h)}),{path:d,parts:103,deep:!0},b),e}async function eD(a,b,c){
await aQ.RemoveMemberFromGroup(a,b,c)}async function eE(a,b,c,d){await aQ.AddMemberToGroup(a,b,c,d)}async function eF(a,b,c){
try{const d=(await eH(!1,c)).find((b=>b.accountInfo.accountId===a));if(!d)throw(0,ah.ZU)(ah.V2,"Shared folder is not found")
;const e="/"+d.title;if(""===d.title)throw(0,ah.ZU)(ah.V2,"Shared folder is not found");await aR.RenameSharedFolder(e,b,c),(0,
ac.fI)(aJ.SyncInBackground(c))}catch(d){(0,ah.au)(d)}}async function eG(a){await eH(!0,a)}async function eH(a,b){
return cm&&!a||(cm=await co.Execute({action:async a=>[...await aP.ListOwnedAndManagedReceivedAccounts(a)]},b)),cm}
async function eI(a){const b=(await eo(!1,null)).find((b=>b.name===(0,F.em)(a.path)));if(!b)throw(0,
ah.ZU)(ah.V2,"Shared folder is not found");const c=await(0,k.NH)(b);return(0,k.wj)(b,c)}async function eJ(a){
const b=await aF("AdminCenter_SaveChanges_Text"),c=await aF("AdminCenter_ConfirmationDialog_Save"),d=await aF("AdminCenter_ConfirmationDialog_DontSave"),e=a.split("\n")
;return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal",b,{onCancel:(a,b)=>a(!1),onEscape:(a,b)=>a(!1),
onClickOutside:null}),(()=>(0,x._)((async(a,b)=>ak("div",{className:"content"},ak("div",{className:"confirmation-text"
},e.map((a=>ak("span",{className:"text-part"},a)))),ak("div",{className:"buttons-bar"},ak("div",{className:"button",
onclick:()=>a(!1)},d),ak("div",{className:"button default-button",onclick:()=>a(!0)},c)))))))),null)}async function eK(a,b){
const c=await aF("StartPage_DialogButton_Yes"),d=await aF("StartPage_DialogButton_No");return f4((0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal",a,null),(()=>(0,x._)((async(a,e)=>ak("div",{className:"content"},"string"==typeof b?ak("div",{
className:"confirmation-text"},b):b,ak("div",{className:"buttons-bar"},ak("div",{className:"button",onclick:()=>a(!1)
},d),ak("div",{className:"button default-button",onclick:()=>a(!0)},c)))))))),null)}async function eL(a){
const b=await aF("AdminCenter_ErrorDialog_Title"),c=await aF("StartPage_DialogButton_Ok");return f4((0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal",b,null),(()=>(0,x._)((async(b,d)=>ak("div",{className:"content"},ak("div",{
className:"confirmation-text"},a),ak("div",{className:"buttons-bar"},ak("div",{className:"button default-button",onclick:()=>b()
},c)))))))),null)}async function eM(){return cs=(0,u.S)(aV,at,aK,as,ax,aW,{GetDataItemsList:eP,GetSortedAndFilteredDataList:eO,
GetAddDataDropdownCommands:eU,GetCompanyGroups:eo,GetDataListCurrentFolder:cp,GetListOfCommandsForRfItem:e7,
GetDataItemPasswordStrength:fo,GetTextByPasswordStrength:dT,SetDataListCurrentFolder:cq,ShowCreateLoginDialog:eV,
ShowDataViewModeInDetailsPane:e0,ShowAddMoveCloneRfItemDialog:eQ,ShowDeleteRfItemDialog:eR,SetLoginLogoImageBackgroundUrl:f6,
ShowNotification:f8,ShowModalDialog:f4},aE),cs.Create()}function eN(a){"data"!==be.GetActiveView(null)&&(be.SetState({
m_view:"data"},a,!1),cs.OnAfterShow(),fL())}async function eO(a,b,c){var d;let e=[...a];const f=new Map
;if(b.m_search&&b.m_search.m_query){const a=b.m_search;e=e.filter((b=>{if(9===b.type)return!1;const c=(0,F.em)(b.path),d=(0,
H.zR)(a.m_query,c,!1,!1,!1,!1,!1,!0);return!!d.matches.length&&(a.m_results_map.set(b.path,d.matches),f.set(b.path,d.rank),!0)
}))}if(b.m_shared&&b.m_shared.length>0&&!cp(null)){const a=b.m_shared,d=await async function(a,b){
return cv&&!a||(cv=await cw.Execute({action:async a=>await aI.GetReceivedItems(bq,a)},b)),cv}(!1,c);let f=[...d.accounts]
;a.includes(0)&&!a.includes(1)&&(f=f.filter((a=>a.sender===bq))),
a.includes(1)&&!a.includes(0)&&(f=f.filter((a=>a.sender!==bq))),
e=e.filter((b=>8===b.type?f.some((a=>`/${a.name}`===b.path)):a.includes(1)?b.sharedFile&&b.received:b.sharedFile&&b.granted))}
if(b.m_group&&b.m_group.length>0){if(b.m_pwd_strength&&b.m_pwd_strength.length>0||b.m_file_type&&b.m_file_type.length>0)return[]
;const a=b.m_group,c=await eo(!1,null);e=e.filter((b=>{if(!b.sharedFolder||!b.sharedGroup)return!1;const d=(0,
F.em)(b.path),e=c.find((a=>a.name===d));return!!e&&a.includes(e.id)}))}
b.m_pwd_strength&&b.m_pwd_strength.length>0&&(e=e.filter((a=>!(!a.sharedGroup&&a.readOnly&&a.sharedFolder))));let g=[],h=[]
;if(b.m_reused||b.m_duplicated){const a=await fp();if(g=a.reused.map((a=>a.items.map((a=>a.itemInfo.path)))).flat(1),
h=a.duplicates.map((a=>a.items.map((a=>a.itemInfo.path)))).flat(1),b.m_reused&&!g.length)return[]
;if(b.m_duplicated&&!h.length)return[]}
if(b.m_file_type&&b.m_file_type.length>0||b.m_pwd_strength&&b.m_pwd_strength.length>0||b.m_compromised||b.m_reused||b.m_duplicated)for(let j=e.length-1;j>=0;j--){
const a=e[j];if(8!==a.type){if(b.m_pwd_strength&&b.m_pwd_strength.length>0){if(1!==a.type){e.splice(j,1);continue}
const c=await fm(a);if(null===c){e.splice(j,1);continue}if(!b.m_pwd_strength.includes((0,p.MB)(c))){e.splice(j,1);continue}}
if(b.m_file_type&&b.m_file_type.length>0&&!b.m_file_type.includes(a.type)){e.splice(j,1);continue}if(b.m_compromised){
if(1!==a.type){e.splice(j,1);continue}const b=await aV.GetDataItem(a.path,4,null,c);if(!await(0,p.e7)({m_item:b,m_item_info:a
},ba,c)){e.splice(j,1);continue}}if(b.m_reused){if(1!==a.type){e.splice(j,1);continue}if(!g.includes(a.path)){e.splice(j,1)
;continue}}if(b.m_duplicated){if(1!==a.type||!h.length){e.splice(j,1);continue}if(!h.includes(a.path)){e.splice(j,1);continue}}
}else{if(!await i(a)){e.splice(j,1);continue}}}if(b.m_sort){const a=b.m_sort
;0===a.m_sort_by?a.m_without_folders?e.sort(((b,c)=>{const d=(0,F.em)(b.path),e=(0,F.em)(c.path)
;return a.m_asc?d.localeCompare(e):e.localeCompare(d)
})):e.sort(((b,c)=>(0,p.cj)(b,c,a.m_asc))):f.size>0&&(null===(d=b.m_search)||void 0===d?void 0:d.m_query)?e.sort(((a,b)=>{
var c,d;const e=null!==(c=f.get(a.path))&&void 0!==c?c:0;return(null!==(d=f.get(b.path))&&void 0!==d?d:0)-e
})):a.m_without_folders?e.sort(((b,c)=>{const d=(0,F.em)(b.path),e=(0,F.em)(c.path)
;return a.m_asc?d.localeCompare(e):e.localeCompare(d)})):e.sort(((b,c)=>(0,p.cj)(b,c,a.m_asc)))}else e.sort(((a,b)=>(0,
p.cj)(a,b,!0)));async function i(a){try{const d=await eP(a,64,c);if(!d.length)return!1
;const e=d.filter((a=>b.m_pwd_strength&&b.m_pwd_strength.length>0||b.m_compromised||b.m_reused||b.m_duplicated?1===a.type:!!(b.m_file_type&&b.m_file_type.length>0)&&8!==a.type)),f=d.filter((a=>8===a.type))
;if(!e.length&&!f.length)return!1
;let j=!(b.m_pwd_strength&&b.m_pwd_strength.length>0),k=!(b.m_file_type&&b.m_file_type.length>0),l=!b.m_compromised,m=!b.m_reused,n=!b.m_duplicated
;for(let i=0;i<e.length;i++){const d=e[i];if(b.m_reused&&!m&&g.includes(d.path)&&(m=!0),
b.m_duplicated&&!n&&h.includes(d.path)&&(n=!0),b.m_pwd_strength&&b.m_pwd_strength.length>0&&!j){const a=await fm(d)
;if(null===a)continue;b.m_pwd_strength.includes((0,p.MB)(a))&&(j=!0)}if(b.m_compromised&&!l){
const b=await aV.GetDataItem(d.path,4,null,c);await(0,p.e7)({m_item:b,m_item_info:a},ba,c)&&(l=!0)}
if(b.m_file_type&&b.m_file_type.length>0&&!k&&b.m_file_type.includes(d.type)&&(k=!0),j&&l&&k&&m&&n)return!0}
for(let a=0;a<f.length;a++){const b=f[a];if(await i(b))return!0}return!1}catch(d){return(0,ah.au)(d),!1}}return e}
async function eP(a,b,c){var d;let e=await aV.List(null!==(d=null==a?void 0:a.path)&&void 0!==d?d:"",b,c)
;return a||(e=e.filter((a=>(0,F.em)(a.path).toLowerCase()!==k.DC.toLowerCase()))),e}async function eQ(a,b,c){
const d=await async function(a,b,c){
const d=1===b?await aF("AdminCenter_MoveTo_Text"):2===b?await aF("AdminCenter_CloneTo_Text"):await aF("AdminCenter_AddToGroup_Text"),e=(0,
y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal move-clone-file-dialog",d,null),(c=>(0,p.bM)(a,b,aV,{ShowNotification:f8
},aE,c))));return f4(e,c)}(a,b,c);if(d.m_all_succeded)return await eS(d,b),!0;const e=d.m_result.filter((a=>!0===a.m_succeded))
;return await eT(d,b),e.length>0}async function eR(a){const b=await async function(a){return f4((0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal",await aF("AdminCenter_DeleteFile_Text",[""]),null),(b=>(0,p.kh)(a,aV,aE,b)))),null)}(a)
;if(b.m_all_succeded)return await eS(b,0),!0;const c=b.m_result.filter((a=>!0===a.m_succeded));return await eT(b,0),c.length>0}
async function eS(a,b){var c;const d=(0,F.em)(null!==(c=a.m_target_path)&&void 0!==c?c:"");if(1===a.m_result.length){
const c=a.m_result[0],e=(0,F.em)(c.m_item_info.path)
;f8(0===b?await aF("Notification_File_Deleted_Text",[e]):2===b?await aF("Notification_File_Cloned_Text",[e]):1===b?await aF("Notification_File_Moved_Text",[e]):await aF("Notification_File_Added_Text",[e,d]),c6,null)
}else{
f8(0===b?await aF("Notification_Items_Deleted_Text",[(0,ae.bf)(a.m_result.length)]):2===b?await aF("Notification_Items_Cloned_Text",[(0,
ae.bf)(a.m_result.length)]):1===b?await aF("Notification_Items_Moved_Text",[(0,
ae.bf)(a.m_result.length)]):await aF("Notification_Items_Added_Text",[(0,ae.bf)(a.m_result.length),d]),c6,null)}}
async function eT(a,b){const c=a.m_result.filter((a=>!0===a.m_succeded)),d=a.m_result.filter((a=>!1===a.m_succeded))
;return f4((0,
y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal report-dialog",await aF("AdminCenter_Action_Report_Text"),null),(()=>({
Create:async(e,f)=>{const g=0===b?await aF("StartPage_Delete_Multiselect_Notification",[(0,
ae.bf)(c.length)]):1===b?await aF("StartPage_Move_Multiselect_Notificaton",[(0,
ae.bf)(c.length),a.m_target_path||c7]):await aF("StartPage_Clone_Multiselect_Notificaton",[(0,
ae.bf)(c.length),a.m_target_path||c7]),h=0===b?await aF("StartPage_Delete_Multiselect_Error",[(0,
ae.bf)(d.length)]):1===b?await aF("StartPage_Move_Multiselect_Error",[(0,
ae.bf)(d.length)]):await aF("StartPage_Clone_Multiselect_Error",[(0,ae.bf)(d.length)]);return ak("div",{className:"content"
},ak("div",{className:"succeded-text"},g),ak("div",{className:"failed-text-main"},h),ak("div",{className:"failed-details-list"
},d.map((a=>ak("div",{className:"failed-text-detail"},a.m_error||"Error")))),ak("div",{className:"buttons-bar"},ak("div",{
className:"button default-button",onclick:()=>{e()}},await aF("Cmd_Ok_Flat"))))},OnAfterShow:()=>{},OnBeforeHide:()=>{},
Focus:()=>{},Dispose:()=>{}})))),null)}async function eU(a,b){const c=[],d=bn(null);let e=null;if(!d){const a=await dE(!1,null)
;e=await bd.Parse(a.policies||"")}a||(c.push({title:await aF("RoboformType_Folder"),imageClass:"cmd-create-folder-icon",
onCommand:async(a,b)=>{const c=await eW(null,b);c&&f8(await aF("StartPage_Editor_ItemCreated",[c]),c6,null)}}),
c.push("separator"));let f=!0;if(!d&&e){
const a=e.find((a=>"DisableCreateLogins"===a.m_name)),b=e.find((a=>"DisableCreateAppLogins"===a.m_name));f=!a||!b}f&&c.push({
title:await aF("RoboformType_Login"),imageClass:"cmd-create-login-icon",onCommand:async(a,c)=>{eV(b)}});let g=!0;if(!d&&e){
g=!e.find((a=>"DisableCreateBookmarks"===a.m_name))}g&&c.push({title:await aF("RoboformType_Bookmark"),
imageClass:"cmd-create-bookmark-icon",onCommand:async(a,c)=>{const d=await async function(a){const b=(0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,
y.dK)("dialog-modal create-bookmark-dialog",await aF("AdminCenter_GroupsTabView_CreateNewBookmark_Title_Text"),null),(()=>(0,
p.ag)(a||cp(null)||{path:"",type:8},aV,aE,{ShowItemRewriteConfirmationDialog:eY,GetImageAndSetToDialogHeader:f5,
GetMatchingPasscards:fl}))));return f4(b,null)}(b);d&&f8(await aF("StartPage_Editor_ItemCreated",[d]),c6,null)}});let h=!0
;if(!d&&e){h=!e.find((a=>"DisableCreateSafenotes"===a.m_name))}h&&c.push({title:await aF("RoboformType_Safenote"),
imageClass:"cmd-create-safenote-icon",onCommand:async(a,b)=>{let c=cp(null);c||(c={path:"",type:8}),await e0(c,{},!0,b)}})
;let i=!0;if(!d&&e){i=!e.find((a=>"DisableCreateIdentities"===a.m_name))}i&&c.push({title:await aF("RoboformType_Identity"),
imageClass:"cmd-create-identity-icon",onCommand:async(a,c)=>{const d=await async function(a){const b=(0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,
y.dK)("dialog-modal create-identity-contact-dialog",await aF("AdminCenter_GroupsTabView_CreateNewIdentity_Title_Text"),null),(()=>{
let b=a?Object.assign({},a):null;return b||(b="data"===be.GetActiveView(null)&&cp(null)||{path:"",type:8}),(0,
p.sW)(b,aV,bC,!0,aE)})));return f4(b,null)}(b);await e6(d.m_item_info,d.m_item,c)}});let j=!0;if(!d&&e){
j=!e.find((a=>"DisableCreateContacts"===a.m_name))}return j&&c.push({title:await aF("RoboformType_Contact"),
imageClass:"cmd-create-contact-icon",onCommand:async(a,c)=>{const d=await async function(a){const b=(0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,
y.dK)("dialog-modal create-identity-contact-dialog",await aF("AdminCenter_GroupsTabView_CreateNewContact_Title_Text"),null),(()=>{
let b=a?Object.assign({},a):null;return b||(b="data"===be.GetActiveView(null)&&cp(null)||{path:"",type:8}),(0,
p.q3)(b,aV,bC,!0,aE)})));return f4(b,null)}(b);await e6(d.m_item_info,d.m_item,c)}}),c}function eV(a){(0,ac.fI)((async()=>{
const b=await async function(){
return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal login-templates-dialog",await aF("AdminCenter_GroupsTabView_CreateNewLogin_Title_Text"),null),(()=>(0,
p.eo)(a7,{GetLoginTemplates:eZ},aE)))),null)}();if(b){const c=await async function(a,b){const c=(0,y.Sw)((0,ae.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal create-login-dialog",await aF("AdminCenter_GroupsTabView_CreateNewLogin_Title_Text"),null),(()=>(0,
p.ns)(a,b||cp(null)||{path:"",type:8},aV,aE,{ShowItemRewriteConfirmationDialog:eY,GetImageAndSetToDialogHeader:f5,
GetMatchingPasscards:fl}))));return f4(c,null)}(b,a);c?f8(await aF("StartPage_Editor_ItemCreated",[c]),c6,null):eV(a)}})())}
async function eW(a,b){const c=a||cp(null);return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal create-folder-dialog",aF("AdminCenter_GroupsTabView_CreateNewFolder_Title_Text"),null),(()=>{
const a="data"===be.GetActiveView(null)&&c||{path:"",type:8};return(0,p.kD)(a,aV,aE,b)}))),null)}async function eX(a){
const b=a?await aF("AdminCenter_PoliciesTabView_EditLoginTemplate"):await aF("AdminCenter_PoliciesTabView_CreateLoginTemplate")
;return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal create-login-template-dialog",b,null),(b=>(0,p.zF)(a6,a,aE,{
GetImageAndSetToDialogHeader:f5},b)))),null)}async function eY(a){return f4((0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aF("AdminCenter_Confirm_Overwrite_Text"),null),(()=>(0,x._)((async(b,c)=>ak("div",{
className:"content"},ak("div",{className:"confirmation-text"},a),ak("div",{className:"buttons-bar"},ak("div",{
className:"button",onclick:()=>b(!1)},await aF("Options_No")),ak("div",{className:"button default-button",onclick:()=>b(!0)
},await aF("Options_Yes"))))))))),null)}async function eZ(){
return ct||(ct=await a5.GetListOfKnownLoginsThatCanBeCreated("v8",bp),ct)}async function e0(a,b,c,d){
if(c||7===a.type||1===a.type||2===a.type||5===a.type||6===a.type)if((0,ac.fI)(fG()),cS=a.path,7===a.type||c){const f=(0,
e.M)(c?null:a,c?null:b,c?a:null,aV,as,aJ,cp(null),"data"===be.GetActiveView(null),!0,!1,aE,{ShowNotification:f8,
ShowConfirmationDialog:eK,ShowSaveConfirmationDialog:eJ,ShowErrorDialog:eL,ShowModalDialog:f4,GetSafenoteCommands:fb,
CopyTextToClipboard:f7,OnCreate:async a=>{const b=await aV.GetDataItem(a.path,4,null,null);await e0(a,b,!1,d)}})
;await fI((()=>(cV=5,f)),d)}else if(1!==a.type)if(2!==a.type)5!==a.type&&6!==a.type||await e1(a,b,"","",d);else{const c=(0,
h.w)(a,b,a7,aK,aV,as,aJ,!1,!1,aE,by,{ShowNotification:f8,ShowSaveConfirmationDialog:eJ,ShowErrorDialog:eL,
GetBookmarkCommands:e9,ShowDataEditModeInDetailsPane:e4});await fI((()=>(cV=2,c)),d)}else{await fq();const c=aU,e=(0,
f.JC)(a,b,a7,aK,aV,as,aJ,bb,aO,ba,!1,c,!1,aE,by,{ShowNotification:f8,ShowSaveConfirmationDialog:eJ,ShowErrorDialog:eL,
GetLoginCommands:e8,GetDataLoginPasswordStrength:fn,GetTextByPasswordStrength:dT,ShowDataEditModeInDetailsPane:e4,
CopyTextToClipboardWithAutoClear:f7});await fI((()=>(cV=1,e)),d)}}async function e1(a,b,c,d,e){const f=(0,
g.g)(a,b,c,d,aV,as,bC,bD,aJ,!1,!1,aE,{ShowNotification:f8,ShowConfirmationDialog:eK,ShowSaveConfirmationDialog:eJ,
ShowErrorDialog:eL,GetIdentityCommands:fa,ShowDataEditModeInDetailsPane:e5,CopyTextToClipboardWithAutoClear:f7,OnRename:()=>{},
OnViewInNewTab:()=>{}});await fI((()=>(cV=5===a.type?4:3,f)),e)}function e2(a){(0,ac.fI)(fG()),fK(),cW&&(cZ=ak("div",null,a),
cW.appendChild(cZ),cY=!0,cZ.focus())}function e3(){fK(),(0,ac.fI)((async()=>{await fH(),cW&&(cW.innerHTML="")})())}
async function e4(a,b,c,d){if(2===a.type||1===a.type)if((0,ac.fI)(fG()),cS=a.path,2!==a.type){if(1===a.type){const e=(0,
f.sO)(a,b,c,a7,aV,as,aK,!1,aE,by,{ShowNotification:f8,ShowConfirmationDialog:eK,ShowSaveConfirmationDialog:eJ,
ShowErrorDialog:eL,ShowDataViewModeInDetailsPane:e0});await fI((()=>(cV=1,e)),d)}}else{const e=(0,h.f)(a,b,c,a7,aV,as,!1,{
ShowNotification:f8,ShowSaveConfirmationDialog:eJ,ShowErrorDialog:eL,ShowDataViewModeInDetailsPane:e0},aE);await fI((()=>(cV=2,
e)),d)}}async function e5(a,b,c,d,e){const f=(0,g.L)(a,b,c,d,!1,aV,as,bC,bD,!1,aE,{ShowNotification:f8,
ShowConfirmationDialog:eK,ShowSaveConfirmationDialog:eJ,ShowErrorDialog:eL,ShowDataViewModeInDetailsPane:e1,OnRename:()=>{}})
;await fI((()=>(cV=4,f)),e)}async function e6(a,b,c){(0,ac.fI)(fG()),cS=a.path;let d="",e=""
;if(b.m_groups.length&&b.m_groups[0]){const a=b.m_groups[0]
;d=a.m_name,a.m_instances.length&&a.m_instances[0]&&(e=a.m_instances[0].m_name)}const f=(0,
g.L)(a,b,d||"Person",e||"Main",!0,aV,as,bC,bD,!1,aE,{ShowNotification:f8,ShowConfirmationDialog:eK,
ShowSaveConfirmationDialog:eJ,ShowErrorDialog:eL,ShowDataViewModeInDetailsPane:e1,OnRename:()=>{}})
;await fI((()=>(cV=5===a.type?4:3,f)),c)}async function e7(a){switch(a.type){case 3:case 4:case 1:return async function(a,b){
const c=[],d=a.error&&(0,L.tM)(a.error,4),e=!a.sharedGroup&&a.readOnly&&a.sharedFolder,f=!!a.gotoUrl&&!(0,N.HB)(a.gotoUrl||"")
;let g=!1;e||!f||b||(await async function(a,b){b.push({title:await aF("Cmd_Goto_Flat"),imageClass:"cmd-goto-icon",disabled:!1,
onCommand:async(b,c)=>{await aJ.GoTo(a.path,{newTab:!0})}})}(a,c),g=!0);let h=!1;if(d||4===a.type);else if(!e&&!b){
const b=await aV.GetDataItem(a.path,4,null,null);if(b){const a=(0,p.iK)(b,S.Df),d=(0,p.iK)(b,S.Aq)
;(a||d)&&g&&c.push("separator"),a&&(c.push({title:await aF("AdminCenter_CopyUsername_Text"),imageClass:"cmd-copy-icon",
onCommand:async(b,c)=>{await f7(a,bA),f8(await aF("Notification_Username_Copied_Text"),null,null)}}),h=!0),d&&(c.push({
title:await aF("AdminCenter_CopyPassword_Text"),imageClass:"cmd-copy-icon",disabled:!1,onCommand:async(a,b)=>{await f7(d,bA),
f8(await aF("Notification_Password_Copied_Text"),null,null)}}),h=!0)}}e||(h&&c.push("separator"),await fc(a,c),
h&&c.push("separator"),b||d||await fd(a,c),a.readOnly||b||d||await fe(a,c),b||await ff(a,c),await fg(a,c),await fh(a,c),
await fi(a,c));return c}(a,!1);case 2:return async function(a,b){const c=[],d=a.error&&(0,
L.tM)(a.error,4),e=!a.sharedGroup&&a.readOnly&&a.sharedFolder,f=await aV.GetInfo(a.path,36,null),g=!!f.gotoUrl&&!(0,
N.HB)(f.gotoUrl||""),h=f.gotoUrl||"",i=h&&(0,U.oK)(h);g&&!b&&(c.push({title:await aF("Cmd_Goto_Flat"),
imageClass:"cmd-goto-icon",onCommand:async(b,c)=>{
d?f8((0,z.Qo)(a.error),5,2):i?f8(await aF("CannotOpenUrlForSecurityReasons"),5,2):(0,ac.fI)(aK.OpenUrl({url:h,newTab:!0},null))}
}),e||c.push("separator"));!h||e||b||(c.push({title:await aF("Cmd_Copy_URL_Flat"),imageClass:"cmd-copy-icon",
onCommand:async(a,b)=>{await f7(h,bA);f8(await aF("Notification_URL_Copied_Text"),null,null)}}),c.push("separator"),
await fc(a,c),c.push("separator"));e||(b||d||await fd(a,c),a.readOnly||b||d||await fe(a,c),b||await ff(a,c),await fg(a,c),
await fh(a,c),await fi(a,c));return c}(a,!1);case 5:case 6:return async function(a,b){
const c=[],d=!a.sharedGroup&&a.readOnly&&a.sharedFolder;d||(await fc(a,c),c.push("separator"),b||(await fd(a,c),await ff(a,c)),
await fg(a,c),await fh(a,c),5===a.type&&await fj(a,c),await fi(a,c));return c}(a,!1);case 7:return async function(a,b){
const c=!a.sharedGroup&&a.readOnly&&a.sharedFolder,d=[];c||(await fc(a,d),d.push("separator"));b||await fd(a,d)
;c||(b||await ff(a,d),await fg(a,d),await fh(a,d),await fi(a,d));return d}(a,!1);case 8:if(a.sharedFolder&&a.sharedGroup){
return ep(await eI(a),void 0)}return async function(a){
const b=[],c=a.readOnly&&a.sharedFolder,d=a.sharedGroup||!1,e=a.sharedFolder||!1,f=(0,ad.Y0)(a.path),g=""===f;if(d){if(g){
const c=await eI(a);await eq(c,b),b.push("separator"),await es(a,b),await et(c,b),await eu(c,b),b.push("separator"),
await er(c,b)}else await es(a,b),await ff(a,b),await fi(a,b);return b}if(e)return c?g?(await ff(a,b),b):b:(await es(a,b),
await ff(a,b),g||await fi(a,b),b);return await es(a,b),await ff(a,b),await fi(a,b),b}(a);default:throw ah.Lh}return[]}
async function e8(a,b){const c=[];return c.push({title:await aF("Cmd_Rename_Flat"),
imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>b()}),await fg(a,c),await fh(a,c),await fi(a,c),c}
async function e9(a,b){const c=[];return c.push({title:await aF("Cmd_Rename_Flat"),
imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>b()}),await fg(a,c),await fh(a,c),await fi(a,c),c}
async function fa(a,b){const c=[];return c.push({title:await aF("Cmd_Rename_Flat"),
imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>b()}),await fg(a,c),await fh(a,c),5===a.type&&await fj(a,c),
await fi(a,c),c}async function fb(a,b,c){const d=[];return d.push({title:await aF("Cmd_Rename_Flat"),
imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>c()}),b||(await fg(a,d),await fh(a,d),await fi(a,d)),d}
async function fc(a,b){b.push({title:await aF("AdminCenter_AddToGroup_Text"),imageClass:"cmd-add-icon",onCommand:async(b,c)=>{
await eQ([a],3,c)}})}async function fd(a,b){b.push({title:await aF("Cmd_View_Flat"),imageClass:"cmd-view-icon",disabled:!1,
onCommand:async(b,c)=>{if(7===a.type||2===a.type||1===a.type||5===a.type||6===a.type){
const b=await aV.GetDataItem(a.path,4,null,c);await e0(a,b,!1,c)}}})}async function fe(a,b){b.push({
title:await aF("Cmd_Edit_Flat"),imageClass:"cmd-edit-icon",disabled:2!==a.type&&1!==a.type,onCommand:async(b,c)=>{
if(2===a.type||1===a.type){const b=await aV.GetDataItem(a.path,4,null,c);await e4(a,b,!0,c)}}})}async function ff(a,b){b.push({
title:await aF("Cmd_Rename_Flat"),imageClass:"cmd-rename-icon",onCommand:async(b,c)=>{const d=await async function(a,b){
const c=(0,y.Sw)((0,ae.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal",await aF("AdminCenter_RenameTo_Text"),null),(()=>(0,
p.ps)(a,aV,aR,aE,b))));return f4(c,null)}(a,c);d&&f8(await aF("Notification_Item_Renamed_Text",[(0,F.em)(a.path),d]),c6,null)}})
}async function fg(a,b){b.push({title:await aF("Cmd_Move_Flat"),imageClass:"cmd-move-icon",onCommand:async(b,c)=>{
await eQ([a],1,c)}})}async function fh(a,b){b.push({title:await aF("Cmd_Clone_Flat"),imageClass:"cmd-clone-icon",
onCommand:async(b,c)=>{await eQ([a],2,c)}})}async function fi(a,b){b.push({title:c8,imageClass:"cmd-delete-icon",
onCommand:async(b,c)=>{await eR([a])}})}async function fj(a,b){b.push({title:await aF("AdminCenter_CopyAllFields_Text"),
imageClass:"cmd-copy-icon",onCommand:async(b,c)=>{const d=await aV.GetDataItem(a.path,4,null,c);try{const a=await(0,
F._1)(d,bC,aE);await f7(a,bA);f8(await aF("Notification_Identity_Fields_Copyied_Text"),null,null)}catch(e){f8((0,z.Qo)(e),5,2)}}
})}function fk(a){cq(a),eN(!1)}async function fl(a,b,c,d){
const e=Array.isArray(a)?a:[a],f=void 0===(c=c||{}).matchLevelMin?0:c.matchLevelMin,g=void 0===c.matchLevelMax?21:c.matchLevelMax,h=await aS.GetDomainMatch(),i=(0,
Q.x3)();for(const[k,l]of e.entries()){const a=(0,N.dy)(l);if(!a)continue;const c=(0,N.WW)(l),e=(0,ad.MI)(c);if(!e)continue
;const m=c.m_host||"",n=await j(e,b,d),o=0===k;for(const b of n)switch(b.type){case 3:case 2:if(b.gotoUrl){const c=(0,
N.dy)(b.gotoUrl);if(c){const d=(0,Q.QM)(c,a,m,h);d>=f&&d<=g&&i.AddMatch({path:b.path,level:d,isMainFrame:o})}}break;default:
if(b.matchUrl){const c=(0,N.dy)(b.matchUrl);if(c){const d=(0,Q.QM)(c,a,m,h);if(d>=f&&d<=g){i.AddMatch({path:b.path,level:d,
isMainFrame:o});continue}}}}}return i.GetUnsortedMatches();async function j(a,b,c){if(bf){try{await bf}catch(d){}bf=null}
bf=async function(a,b,c){try{const d=await aS.GetDomainMatch();let e=await async function(a,b,c,d,e){const f=[];return await(0,
K.s_)(a,(async a=>{if(e&&await e.YieldToUI(50),0!==c&&c!==a.type)return;let g;switch(a.type){case 3:case 2:g=a.gotoUrl;break
;default:g=a.matchUrl}g&&(0,Q.xv)(g,b,d)&&f.push(a)}),{path:"",parts:64,deep:!0},e),f}(aV,a,0,d,c)
;return 0!==b&&(e=e.filter((a=>a.type===b))),e}catch(d){throw d}finally{bf=null}}(a,b,c);return await bf}}async function fm(a){
return fo(await aV.GetDataItem(a.path,4,null,null))}async function fn(a){try{await fq()
;return(await bb.GetUpdatePasswordStrengthInfo(a,null)).strength}catch(b){return null}}async function fo(a){if(!a)return null
;const b=(0,p.iK)(a,S.Aq);return b?fn(b):null}async function fp(){await fq();return await bb.GetUpdateAuditResult(!1,null)}
async function fq(){bc||(await bb.Init(a,(a=>async function(a){if(cu)return cu;return cu=await(0,Y.$)("pwd-dict.json",a,aH),
null!=cu?cu:{}}(a)),aO,ba),bc=!0)}async function fr(){return cy=(0,n.iX)(a6,aT,aW,{GetAccountInfo:dE,GetCompanyInfo:en,
GetCompanyGroups:eo,GetCustomTemplates:gc,IsCurrentUserAdmin:bn,ShowNotification:f8,ShowCreateOrChangeLoginTemplateDialog:eX,
SetLoginLogoImageBackgroundUrl:f6,ShowModalDialog:f4,UploadCompanyPolicies:el,UploadGroupPolicies:em},aE),cy.Create()}
function fs(a){"policies"!==be.GetActiveView(null)&&(be.SetState({m_view:"policies"},a,!1),cy.OnAfterShow(),fL())}
function ft(a){bn(null)&&"integration"!==be.GetActiveView(null)&&(be.SetState({m_view:"integration"},a,!1),fL())}
async function fu(){return cC=(0,s.n5)(aR,aJ,ba,aW,aM,aN,be,{GetAccountInfo:dE,GetCompanyGroups:eo,GetCompanyUsers:dP,
GetTextBySecurityScoreValue:dS,GetTextByUserStatusValue:dR,GetSelectedUsersCommonGroupsToAdd:d0,
GetSelectedUsersCommonGroupsToDelete:d1,GetAltAuthStatus:dQ,GetSortedAndFilteredUsersList:dN,GetSortedAndFilteredGroupsList:ek,
GetLicenseInfo:fy,GetGroupDataItems:eC,GetListOfCommandsForGroup:ep,GetListOfCommandsForUser:dV,GetCompanyPolicyValue:f9,
IsCurrentUserAdmin:bn,ShowDeleteUserDialog:d4,ShowSuspendUserDialog:d5,ShowRestoreUserDialog:d6,
ShowRemoveUsersFromGroupsDialog:ea,ShowAddUsersToGroupsDialog:eb,ShowDeleteGroupDialog:ex,
ShowResendToUserSetupInstructionsDialog:d2,ShowModalDialog:f4,ShowUserMainView:eg,ShowGroupMainView:eA,ShowNotification:f8},aE),
cC.Create()}function fv(a,b){"reports"===be.GetActiveView(null)&&be.GetState().m_tab===b||(be.SetState({m_view:"reports",
m_tab:b||(bn(null)?"company":"groups")},a,!1),cC.OnAfterShow(),fL())}async function fw(a){cY&&(await fH(),fJ()),
cE?(be.SetState({m_view:"settings",m_tab:a},!1,!1),cE.OnAfterShow()):(be.SetState({m_view:"settings",m_tab:a},!0,!1),cE=(0,
q.N)(aI,aQ,aS,aJ,aN,aM,aW,ba,bd,be,by,bp,aU,{GetAccountInfo:dE,GetCompanyInfo:en,GetLicenseInfo:fy,CloseCompanySettingsView:fx,
GetCompanyPolicyValue:f9,GetCompanyPoliciesValues:ga,GetColorTheme:aZ,IsCurrentUserAdmin:bn,LogoutAction:fB,ShowNotification:f8,
ShowSaveConfirmationDialog:eJ,ShowModalDialog:f4,UpdateCompanyLogoAndName:fF,UpdateAccountSectionUserInitialsAndColor:fE,
UpdateColorTheme:fC},aE),cD.appendChild(await cE.Create()),cE.OnAfterShow(),bM.classList.add("settings-shown")),fL()}
function fx(){bM.classList.remove("settings-shown"),null==cE||cE.Dispose(),cE=null,(0,W.rK)(cD);const a=be.GetActiveTab(null)
;be.SetState({m_view:a},!0,!1),fL()}async function fy(a,b){if(!bj(null)||a){const a=await bu.Execute({
action:async a=>aI.GetLicenseInfo(a)},b);bk(a)}return(0,ae.TT)(bj(null))}async function fz(a){const b=await fy(!1,a)
;return"trial"===b.status||"trial-expired"===b.status?"buy":"expired"===b.status?"renew":"buymore"}function fA(){
null==b1||b1.classList.remove("fade-in"),b0(!1),bY(!1)}function fB(){(0,ac.fI)(aS.Logoff(null))}function fC(){
const a="light"===aZ(null)?"dark":"light";"dark"===a?(null==bP||bP.classList.add("dark-theme"),
null==bP||bP.classList.remove("light-theme")):(null==bP||bP.classList.add("light-theme"),
null==bP||bP.classList.remove("dark-theme")),a0(a),(0,ac.fI)(a3.SetValue("StartPage.Theme",a))}async function fD(a){var b;try{
await en(!0,a);const c=await dE(!0,a),d=c.companies&&c.companies[0];if(!d)throw(0,
ah.ZU)(ah.V2,"Unexpected: there is no company for current Admin");bp=d.companyId||"",bq=c.accountId||"",
aY(!!c.enterpriseLicenseExpired),bo(null!==(b=d.isAdmin)&&void 0!==b&&b),d.isAdmin||function(){if(bn(null))return
;bx.Start((async a=>{try{const b=await aQ.GetMemberGroups(bq,null,a);if(!Array.isArray(b))throw(0,
ah.ZU)(ah.V2,"Wrong data format");if(!b.some((a=>a.isManager)))throw(0,ah.ZU)(ah.V2,"User is not manager of any Group")
}catch(b){(0,ah.au)(b),await aJ.OpenStartPage(null),aL||window.close()}}))}()}catch(c){(0,ah.au)(c),
await aJ.OpenStartPage(null),aL||window.close()}}async function fE(a){await dE(!0,a)}async function fF(a){const b=await en(!0,a)
;bi(b)}async function fG(){cX?cT&&cT.Dispose():((0,ae.TT)(cW).classList.remove("hidden"),await(0,ac.XR)(null),(0,
ae.TT)(cW).classList.remove("closed"),cX=!0,function(){const a=ak("div",{className:"resize-handle"});function b(a){
a.preventDefault();const b=function(a){let b=Math.max(c4,a);return b=Math.min(b,window.innerWidth-c5),b=Math.max(b,c4),b
}(window.innerWidth-a.clientX);(0,ae.TT)(cW).style.width=(0,U.Md)(b),f0()}(0,ae.TT)(cW).appendChild(a),
a.addEventListener("mousedown",(a=>{cX&&(a.preventDefault(),document.body.style.cursor="e-resize",
document.addEventListener("mousemove",b))})),document.addEventListener("mouseup",(()=>{document.body.style.cursor="",
document.removeEventListener("mousemove",b)}))}(),f0(),(0,ae.TT)(bP).classList.add("edit-pane-shown"))}async function fH(){
cX&&(cS="",(0,ae.TT)(cW).classList.add("closed"),(0,ae.TT)(bP).classList.remove("edit-pane-shown"),(0,W.l5)((0,ae.TT)(bM)),
cX=!1,function(){const a=(0,ae.TT)(cW).querySelector(".resize-handle");a&&((0,ae.TT)(cW).removeChild(a),(0,
ae.TT)(b3).style.removeProperty("width"),(0,ae.TT)(b2).style.removeProperty("width"),(0,
ae.TT)(cW).style.removeProperty("width"),(0,W.l5)((0,ae.TT)(b2)),(0,W.l5)((0,ae.TT)(b3)))}(),f0(),await(0,ac.Gu)(c3,null),
cX||(0,ae.TT)(cW).classList.add("hidden"))}async function fI(a,b){return(0,ac.W0)((async(b,c,d)=>{if(d.onTaskCancel.Add((()=>{
e(ah.JS)})),cT=(0,x.B)((async(a,b,c)=>ak("div",{className:"details-view"},await a.Create(b,c))),a(d)),fK(),
cZ=await cT.Create((function(a){b(a),(0,ac.fI)((async()=>{await fH(),fJ()})())}),e),cT.OnAfterShow(),
!d.ShouldStop())return null==cW||cW.appendChild(cZ),cY=!0,cZ.focus(),cT.OnAfterShow(),void cT.Focus();function e(a){try{c(a)
}finally{(0,ac.fI)((async()=>{await fH(),fJ()})())}}}),b)}function fJ(){cX||(cY&&cT&&(cT.OnBeforeHide(),cT.Dispose()),fK(),cV=0)
}function fK(){cZ?cW&&cZ&&(cW.removeChild(cZ),cY=!1,cZ=null):cY=!1}function fL(){"search"!==be.GetActiveView(null)&&fP(),eh(),
eB(),fM()}function fM(){ca.forEach(W.SE);const a=be.GetActiveView(null);(0,W.l5)((0,ae.TT)(ca.get(a)));const b=cb.get(a)
;b&&b.OnAfterShow()}function fN(){dv&&(dv.Hide(),dv=null)}async function fO(a,b){"search"!==be.GetActiveView(null)?be.SetState({
m_view:"search",m_query:a},b,!1):be.SetState({m_view:"search",m_query:a},b,!0),fL(),await async function(){
null==cI||cI.Dispose(),(0,W.rK)(cH),eh(),eB(),cI=(0,m.k)(aM,aW,aV,aS,{GetCompanyUsers:dP,GetCompanyGroups:eo,
GetSelectedUsersCommonGroupsToAdd:d0,GetSelectedUsersCommonGroupsToDelete:d1,GetListOfCommandsForRfItem:e7,
GetListOfCommandsForGroup:ep,GetListOfCommandsForUser:dV,GetDataLoginPasswordStrength:fm,GetAltAuthStatus:dQ,
SetLoginLogoImageBackgroundUrl:f6,ShowDeleteRfItemDialog:eR,ShowMoveCloneRfItemDialog:eQ,ShowRemoveUsersFromGroupsDialog:ea,
ShowAddUsersToGroupsDialog:eb,ShowSuspendUserDialog:d5,ShowRestoreUserDialog:d6,ShowResendToUserSetupInstructionsDialog:d2,
ShowDeleteUserDialog:d4,ShowDeleteGroupDialog:ex,ShowGroupMainView:eA,ShowUserMainView:eg,ShowDataViewModeInDetailsPane:e0,
ShowSearchedPolicy:fV,UpdateSearchInputResultsCounter:fR},aE);const a=await cI.Create();cH.appendChild(a),cI.OnAfterShow()}(),
aW.onInitSearchPane.CallAllSync(),aW.onUpdateSearchResults.CallAllSync(a)}function fP(){bU(null),bW(null),
aW.onClearSearchResults.CallAllSync(),cK.Cancel()}function fQ(){bU(null);const a=be.GetActiveTab(null);be.SetState({m_view:a
},!0,!1),fL()}function fR(a){bW(a)}function fS(a){dM(!0),aW.onShowUsersSection.CallAllSync(a)}function fT(a){ej(!0),
aW.onShowGroupsSection.CallAllSync(a)}function fU(a){eN(!0),aW.onShowDataSection.CallAllSync(a)}function fV(a,b,c){fs(!0),
aW.onShowPolicySection.CallAllSync(a,b,c)}function fW(a,b,c){fv(!0,a),aW.onShowReportsSection.CallAllSync(a,b,c)}function fX(a){
(function(a){if(f2(a,".dropdown-handler")||f2(a,".dropdown-menu"))return!0;return!1})(a.target)||fA()}function fY(){
b8&&(null==bP||bP.classList.add("navigation-hovered"))}function fZ(){b8&&(null==bP||bP.classList.remove("navigation-hovered"))}
function f0(){let a=0;cX&&(a=(0,U.i7)((0,ae.TT)(cW).style.width),a||(a=c4)),function(a){if(0===a)(0,W.l5)((0,ae.TT)(bM)),(0,
ae.TT)(cW).style.removeProperty("width")}(a);const b=window.innerWidth-a<=c2
;b!==b8&&(b?(null==bP||bP.classList.add("left-collapsed"),b8=!0):(null==bP||bP.classList.remove("left-collapsed"),
null==bP||bP.classList.remove("navigation-hovered"),b8=!1))}function f1(){if(!b2)return
;const a=(null==bS?void 0:bS.offsetHeight)||0,b=(null==b3?void 0:b3.offsetHeight)||0;b2.style.height=`calc(100% - ${a+b}px)`}
function f2(a,b){return a.matches(b)?a:function(a,b){let c=a.parentElement;for(;c;){if(c.matches(b))return c;c=c.parentElement}
return null}(a,b)}function f3(a){return bq===a}async function f4(a,b){c1=a;try{return await a.Execute(b)}finally{c1=null}}
async function f5(a,b){let c=a7.GetImagesByUrl(a);if(!c)try{await a7.LoadImagesByUrl(a,"","imgLogo"),c=a7.GetImagesByUrl(a)
}catch(e){}function d(a,b){const c=(0,ae.TT)(bP).querySelector(`.${a}`);if(!c)return;const d=(0,
ae.TT)(c).querySelector(".header"),e=d.querySelector(".logo");if(e&&d.removeChild(e),d.classList.remove("doc-image"),
d.classList.remove("has-own-background"),b&&b.url){const a=ak("div",{className:"logo"});let c="rgba(41, 121, 255, 0.04)"
;if(b.background){(0,W.Un)(b.background)?d.classList.add("has-own-background","dark"):d.classList.add("has-own-background"),
c=b.background}d.classList.add("doc-image"),a.style.backgroundImage=`url("${b.url}")`,d.style.background=`${c}`,d.appendChild(a)
}else d.style.background=""}d(b,c?c.imgLogo:null)}async function f6(a,b){if(!a)return;const c=await async function(a){
if(!a)return null;let b=a7.GetImagesByUrl(a);if(b){if(!b.img16)try{await a7.LoadImagesByUrl(a,"","img16"),b=a7.GetImagesByUrl(a)
}catch(c){}}else try{await a7.LoadImagesByUrl(a,"","img16"),b=a7.GetImagesByUrl(a)}catch(c){}if(b){const a=b.img16
;if(a&&a.url)return`url("${a.url}")`}return null}(a);c&&(b.className="icon",b.style.backgroundImage=c)}async function f7(a,b){
await by.WriteText(a),bB=a,b&&function(a){bz.Start((async b=>{await(0,ac.Gu)(a,b);let c="";try{c=await by.ReadText()}catch(d){}
if(bB===c||!c)try{await by.WriteText(" "),bB=""}catch(d){}}))}(b)}function f8(a,b,c){(0,ae.TT)(c0).Show(a,b,c)}
async function f9(a,b){const c=await en(!1,b),d=(await bd.Parse(c.policies||"")).find((b=>b.m_name===a));return d?d.m_value:""}
async function ga(a,b){const c=await en(!1,b),d=await bd.Parse(c.policies||""),e={};return a.forEach((a=>{
const b=d.find((b=>b.m_name===a)),c=b?b.m_value:"";e[a]=c})),e}async function gb(){
const a=await en(!1,null),b=(await bd.Parse(a.policies||"")).find((a=>"RfTemplates"===a.m_name)),c=b?b.m_value:"";return(0,
M.mG)(c)}async function gc(){const a=await en(!1,null),b=(await bd.Parse(a.policies||"")).find((a=>"AllRfTemplates"===a.m_name))
;return b?b.m_value:""}async function gd(){const a=await gc();return(0,M.mG)(a)}async function ge(a,b){if(!a)return""
;const c=(await bd.Parse(a)).find((a=>a.m_name===b));return c?c.m_value:""}function gf(a){let b=!1,c=!1,d=!1,e=!1,f=!1,g=!1,h=!1
;for(const i of a)switch(i.event){case 11:(0,ac.fI)((async()=>{be.SetState({m_view:"settings",m_tab:"license"},!0,!0),
await dw(),dF()})());break;case 0:b=!0,c=!0;break;case 2:c=!0,e=!0,f=!0;break;case 3:case 4:e=!0;break;case 1:c=!0,e=!0;break
;case 6:case 8:e=!0,d=!0;break;case 7:e=!0,g=!0,d=!0;break;case 10:h=!0}bv.Start((async a=>{var i;if(c&&(await dP(!0,a),
b&&"user-details"!==be.GetActiveView(null)&&dI("users")),e&&await eo(!0,a),"search"===be.GetActiveView(null)){
const a=null!==(i=bT(null))&&void 0!==i?i:"";""!==a&&aW.onUpdateSearchResults.CallAllSync(a)}if(f&&cO&&cN){
(await dP(!1,a)).some((a=>a.id===cN))||(be.SetState({m_view:"users"},!0,!0),fL())}if(g&&cU&&cR){
(await eo(!1,a)).some((a=>a.id===cR))||(be.SetState({m_view:"groups"},!0,!0),fL())}d&&await eG(a),h&&await fE(a)}))}
function gg(a){var b,c,d;let e=!1,f=!1,g=!1,h=!1;for(const i of a){switch(i.event){case 5:e=!0,8!==i.type&&i.path&&(f=!0),
8===i.type&&i.path&&(f=!0,g=!0);break;case 7:
e=!0,8===i.type&&i.path?((0,F.QC)(i.path,(null===(b=cp(null))||void 0===b?void 0:b.path)||"")&&cq({type:8,path:""}),cS&&(0,
F.QC)(i.path,cS)&&(g=!0),f=!0):cS&&cS===i.path&&(g=!0);break;case 8:e=!0,8===i.type&&i.path?((0,
F.QC)(i.path,(null===(c=cp(null))||void 0===c?void 0:c.path)||"")&&cq({type:8,path:""}),cS&&(0,
F.QC)(i.path,cS)&&(i.to&&i.to.path?cS=cS.replace(i.path,i.to.path):g=!0)):cS&&cS===i.path&&!(null===(d=i.to)||void 0===d?void 0:d.path)&&(i.to&&i.to.path?cS=i.to.path:g=!0)
;break;case 3:(0,ac.fI)((async()=>{bo(await aM.GetValue("AccountCompanyAdmin",!1)),await dw(),dF()})());break;case 10:aL?(0,
ac.fI)(j()):(0,ac.fI)(k());break;case 1:case 11:h=!0}async function j(){const a=await en(!1,null),b={
command:"open-admin-center",options:{view:be.GetActiveView(null),companyCreatedTime:a.createdTime}
},c=JSON.stringify(b),d=await(0,
aa.zN)(c),e=await(0,aa.n1)(d),f=`${window.location.origin+window.location.pathname}#init-data=${encodeURIComponent(e)}`
;window.location.replace(f),window.location.reload()}async function k(){await aJ.ShowLoginUI(null),window.close()}}
(f||e||g||h)&&bw.Start((async a=>{var b;if(h&&await eG(a),f&&await eo(!0,a),"search"===be.GetActiveView(null)&&!h){
const a=null!==(b=bT(null))&&void 0!==b?b:"";""!==a&&aW.onUpdateSearchResults.CallAllSync(a)}
!g||1!==cV&&2!==cV&&5!==cV&&4!==cV&&3!==cV||(await fH(),fJ(),cV=0)}))}}},52090:function(a,b,c){"use strict";c.d(b,{V:function(){
return l}});var d=c(87163),e=c(4234),f=c(78949),g=c(54811),h=c(12131),i=c(95399),j=c(78440),k=c(69893);c(13117);function l(){
const a=(0,d.lv)();let b,c=null,l=null,m=null;const n={receivedFiles:!0,groups:!0,regularSharedFolders:!0}
;let o=!1,p=null,q=null,r=!1,s=!1;const t=new Set;let u=!1;return{Init:async function(a,d,e,f){await v(),c=a,b=d,l=e,m=f,
c.onDataChanged.Add(D),m&&m.onUserDataBreachesUpdated.Add(E)},UnInit:v,GetCachedPasswordStrengthInfo:async function(a,b){
if(o)return F(a);return null},GetUpdatePasswordStrengthInfo:async function(a,b){if(!o&&(x(),await y(b),!o))throw(0,
k.ZU)(k.V2,"cannot get password strength - data update is aborted");return F(a)},
GetCachedPasswordStrengthLevel:async function(b,c){if(o)return a.GetPasswordStrengthLevel(b);return null},
GetUpdatePasswordStrengthLevel:async function(b,c){if(!o&&(x(),await y(c),!o))throw(0,
k.ZU)(k.V2,"cannot get password strength - data update is aborted");return a.GetPasswordStrengthLevel(b)},
GetUpdateAuditResult:async function(b,c){let d=!1;o?b&&(s||(s=!0,await y(c)),d=!0):(x(),d=!0);if(d&&(await y(c),!o))throw(0,
k.ZU)(k.V2,"cannot get audit result - data update is aborted");return a.GetAuditResult()},GetLastUpdateTime:async function(a){
return p}};async function v(){await w(),u=!1,m&&m.onUserDataBreachesUpdated.Remove(E),c&&c.onDataChanged.Remove(D),m=null,
l=null,c=null}async function w(){await async function(){if(q){r=!0;const a=q;await a.Stop(),a===q&&(r=!1,q=null)}}(),a.Clear(),
o=!1,s=!1,t.clear()}function x(){if(!q&&(!o||s||t.size)){if(!c)throw(0,k.ZU)(k.V2,"service is not initialized");q=(0,j.YZ)({
action:z}),(0,j.uT)(q.Execute(null),"RfPasswordAuditService:_StartUpdateData")}}async function y(a){if(q){const c=q;try{
await c.Execute(a)}catch(b){(0,k.au)(b)}if(!q||r)return;if(c!==q)return;q=null}a&&a.ThrowIfShouldStop(),x()}async function z(d){
if(!u){const c=await async function(a){if(!b)throw(0,k.ZU)(k.V2,"Unexpected internal error");return b(a)}(d);o=!1,a.Init(c),u=!0
}let f=!1;o&&!s||(f=!0,s=!1);const g=[];t.forEach((a=>g.push(a))),t.clear(),await async function(a,b,d){if(!c)throw(0,
k.ZU)(k.V2,"data storage is null");if(!b&&!a.length)return;const f=new Set;if(m&&l){
(await l.GetAllDataItemsWhereSecurityWarningIsDisabled([0],d)).forEach((a=>f.add(a.path)))}
if(b)await A("",f,d);else for(const c of a)d&&await d.YieldToUI(30),8===(0,e.hF)(c)?await A(c,f,d):await B(c,f,d)}(g,f,d)
;const h=(0,i.t2)();p=h,f&&(o=!0)}async function A(b,f,h){if(!c)throw(0,k.ZU)(k.V2,"data storage is null");const i=new Set
;a.ListItems().forEach((a=>{(0,e.QC)(b,a)&&i.add(a)}));let j=!0;if(""!==b)try{await c.GetInfo(b,0,h)}catch(l){if((0,k.au)(l),
!(0,k.r5)(l,k.Y$))throw l;j=!1}j&&await(0,g.s_)(c,(async a=>{h&&await h.YieldToUI(30),(0,d.N8)(a,n)&&(i.delete(a.path),
await C(a,f.has(a.path),h))}),{path:b,deep:!0,parts:1},h),i.forEach((b=>a.RemoveItem(b)))}async function B(b,d,e){if(!c)throw(0,
k.ZU)(k.V2,"data storage is null");let f=null;try{f=await c.GetInfo(b,1,e)}catch(g){if((0,k.au)(g),!(0,k.r5)(g,k.Y$)&&!(0,
h.tM)(g,4))throw g;return void a.RemoveItem(b)}await C(f,d.has(f.path),e)}async function C(b,d,e){if(!c)throw(0,
k.ZU)(k.V2,"data storage is null");let f=null;try{f=await c.GetDataItem(b.path,4,null,e)}catch(i){(0,k.au)(i);let d=!1;if((0,
h.tM)(i,4)||(0,h.tM)(i,2))d=!0;else try{await c.GetInfo(b.path,0,e),(0,h.tM)(i,1)&&(d=!0)}catch(j){(0,k.au)(i),(0,
h.tM)(j,4)&&(d=!0)}if(!d)throw i;return void a.RemoveItem(b.path)}const g=m?await m.GetCachedUserDataItemBreaches(b.path,e):null
;a.AddItem({info:b,data:f,breaches:g,excludedFromScore:d})}function D(a){if(!o&&!q)return;let b=0,c="",d=""
;for(const e of a)switch(e.event){case 10:case 3:case 2:return void(0,j.fI)(w());case 5:case 6:case 7:case 8:
1===e.type&&e.path?(t.add(e.path),c=e.path,b++,8===e.event&&e.to&&e.to.path&&(d=e.to.path,
t.add(e.to.path))):8===e.type&&e.path&&8===e.event&&e.to&&e.to.path&&(c=e.path,t.add(e.path),d=e.to.path,t.add(e.to.path),b++)}
b&&(0,j.uT)(async function(){await y(null)}(),"RfPasswordAuditService:_OnDataChanged")}function E(a,b){(o||q)&&1===(0,
e.hF)(a)&&(t.add(a),(0,j.uT)(async function(){await y(null)}(),"RfPasswordAuditService:_OnUserDataBreachesUpdated"))}
function F(b){const c=a.GetPasswordStrength(b);let d=Math.floor((0,f.im)(b,[],null)+.5);return d>100&&(d=100),{strength:c,
complexity:d}}}},89808:function(a,b,c){"use strict";c.d(b,{A:function(){return d}});const d={version:"9.6.4.0"}},
44974:function(){},49701:function(){},29165:function(){}},function(a){a.O(0,[612],(function(){return b=99583,a(a.s=b);var b}))
;a.O()}]);