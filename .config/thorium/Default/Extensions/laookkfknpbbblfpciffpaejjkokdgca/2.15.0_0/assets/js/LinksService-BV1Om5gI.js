import{E as t,G as i}from"./dashboard-CF_jRhAY.js";import{E as e,u as s}from"./promisifiedChrome-CheD9WtZ.js";import{u as n}from"./preload-helper-D7CfCCEq.js";import{t as r}from"./timestampDb-sTUCijT1.js";function a(i){return i.type===t.LinkGroup&&!i.isRoot}function o(i){return i.type===t.Legacy}function l(i){return i.type===t.Link}function u(i){return i.type===t.LinkGroup&&"isRoot"in i&&i.isRoot&&!("isTeamRoot"in i&&i.isTeamRoot)}function c(i){return i.type===t.LinkGroup&&"isTeamRoot"in i&&i.isTeamRoot}class d{constructor({id:t=n(),url:i=""}={}){this.id=t,this.url=i}}class p{constructor({id:t=s.uuidv4(),links:i=[],title:e="",pinned:n=!1,readOnly:r=!1}={}){this.id=t,this.links=i.map((t=>new d(t))),this.title=e,this.pinned=!!n,this.readOnly=r}get hasManyLinks(){return this.links.length>1}}function h({title:t,links:n}){if(0===t.length)throw new e({message:i.TITLE_EMPTY,input:"title"});if(0===n.length)throw new e({message:i.URL_EMPTY,input:"links.0"});n.forEach(((t,r)=>{(t.url||1===n.length)&&function({url:t},n){const r="links"+(void 0===n?"":`.${n}`);if(!t)throw new e({message:i.URL_EMPTY,input:r});if(!s.isValidUrl(t))throw new e({message:i.URL_INVALID,input:r})}(t,r)}))}class m{constructor(t){this.dataService=t}get(t){this.dataService.get({...t,success:i=>{(async()=>{var e;1===i.filter(u).length?t.success(i):0!==(null==(e=await r.get("links"))?void 0:e.cache)&&(await r.patch("links",{cache:0}),this.dataService.get(t))})()}})}create(t){return this.dataService.create(t.id,t)}update(t,i){return this.dataService.update(t,i)}delete(t){return this.dataService.delete(t)}}function f(i){return[{id:i.id,title:i.title,pinned:i.pinned,type:t.LinkGroup,readOnly:!1,linksOrderIds:i.links.map((t=>t.id))},...i.links.map((e=>({id:e.id,type:t.Link,url:e.url,parentLinkId:i.id})))]}function k(t){const i=Object.assign(new p,t);return i.links=i.links.filter((t=>t.url.length)).map((t=>Object.assign(new d,t,{url:t.url.includes("://")?t.url:"https://"+t.url}))),i}export{m as L,d as a,o as b,u as c,c as d,l as e,p as f,f as g,k as h,a as i,h as v};