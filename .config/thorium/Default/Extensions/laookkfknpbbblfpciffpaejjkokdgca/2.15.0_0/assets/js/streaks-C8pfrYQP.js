import{d as t}from"./ResizeSensor-CXS_pGRc.js";import{f as e,u as s}from"./promisifiedChrome-CheD9WtZ.js";import{S as a}from"./Streak-IKpO7W-4.js";import{M as r}from"./timestampDb-sTUCijT1.js";import{u as i}from"./preload-helper-D7CfCCEq.js";import"./environmentVariables-Cy83xda0.js";import"./Logger-Dqn8sDPg.js";import"./string-KTo4Qfpe.js";const o=e=>t("streaks",{state:()=>({data:{},loading:!1,loaded:!1}),getters:{getCurrentStreakBySubset:t=>e=>{const s=Object.values(t.data).filter((t=>t.subset===e));let a=0;s.sort(((t,e)=>e.timestamp-t.timestamp));for(const t of s){if(!t.valid)return a;a++}return a},getValidStreaksBySubsetPastDays:t=>(e,a)=>s.filterObject(t.data,(t=>t.subset===e&&t.valid&&t.timestamp>=a)),getValidSitesResistedSince(){return t=>Object.values(this.getValidStreaksBySubsetPastDays(a.SitesResisted,t)).length},getSitesResistedStreak(){return()=>this.getCurrentStreakBySubset(a.SitesResisted)}},actions:{refresh(){this.loading||this.loaded||(this.loading=!0,e.get({success:t=>{t.forEach((t=>this.data[t.id]=t)),this.loading=!1,this.loaded=!0},failure:()=>{this.loading=!1}}))},create:t=>e.create({id:i(),...t})}}),d=o(new class{constructor(t){this.dataSyncService=t}get(t){this.dataSyncService.get(t)}create(t){return this.dataSyncService.create(t.id,t)}}(new e("streaks",{mode:r.Timestamp})));export{d as default,o as makeStreaksStore};