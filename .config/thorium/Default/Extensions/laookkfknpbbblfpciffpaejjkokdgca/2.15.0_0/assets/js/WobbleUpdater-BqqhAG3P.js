import{s as e,b as o,n as s,l as n,k as i}from"./FlashMessage-BSLh5HLJ.js";import"./promisifiedChrome-CheD9WtZ.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./environmentVariables-Cy83xda0.js";import"./ResizeSensor-CXS_pGRc.js";import"./preload-helper-D7CfCCEq.js";import"./string-KTo4Qfpe.js";import"./icon-close-BUGl_M7j.js";class t{constructor(){this.angle=50,this.move=10}load(o){o&&(void 0!==o.angle&&(this.angle=e(o.angle)),void 0!==o.move&&(this.move=e(o.move)))}}class a{constructor(){this.distance=5,this.enable=!1,this.speed=new t}load(s){if(s&&(void 0!==s.distance&&(this.distance=e(s.distance)),void 0!==s.enable&&(this.enable=s.enable),void 0!==s.speed))if(o(s.speed))this.speed.load({angle:s.speed});else{const e=s.speed;void 0!==e.min?this.speed.load({angle:e}):this.speed.load(s.speed)}}}const l=2*Math.PI;const d=2*Math.PI;class r{constructor(e){this.container=e}init(e){const o=e.options.wobble;(null==o?void 0:o.enable)?e.wobble={angle:n()*d,angleSpeed:i(o.speed.angle)/360,moveSpeed:i(o.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=i((null==o?void 0:o.distance)??0)*this.container.retina.pixelRatio}isEnabled(e){var o;return!e.destroyed&&!e.spawning&&!!(null==(o=e.options.wobble)?void 0:o.enable)}loadOptions(e,...o){e.wobble||(e.wobble=new a);for(const s of o)e.wobble.load(null==s?void 0:s.wobble)}update(e,o){this.isEnabled(e)&&function(e,o){const{wobble:n}=e.options,{wobble:i}=e;if(!(null==n?void 0:n.enable)||!i)return;const t=i.angleSpeed*o.factor,a=i.moveSpeed*o.factor*((e.retina.wobbleDistance??0)*o.factor)/(s/60),d=l,{position:r}=e;i.angle+=t,i.angle>d&&(i.angle-=d),r.x+=a*Math.cos(i.angle),r.y+=a*Math.abs(Math.sin(i.angle))}(e,o)}}export{r as WobbleUpdater};