import{j as o,k as i,p as t,l as s,m as a}from"./FlashMessage-BSLh5HLJ.js";import"./promisifiedChrome-CheD9WtZ.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./environmentVariables-Cy83xda0.js";import"./ResizeSensor-CXS_pGRc.js";import"./preload-helper-D7CfCCEq.js";import"./string-KTo4Qfpe.js";import"./icon-close-BUGl_M7j.js";class e{constructor(o){this.container=o}init(a){const e=a.options.opacity;a.opacity=o(e,1);const p=e.animation;p.enable&&(a.opacity.velocity=i(p.speed)/t*this.container.retina.reduceFactor,p.sync||(a.opacity.velocity*=s()))}isEnabled(o){return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((o.opacity.maxLoops??0)<=0||(o.opacity.maxLoops??0)>0&&(o.opacity.loops??0)<(o.opacity.maxLoops??0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}update(o,i){this.isEnabled(o)&&o.opacity&&a(o,o.opacity,!0,o.options.opacity.animation.destroy,i)}}export{e as OpacityUpdater};