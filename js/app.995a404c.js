(function(){"use strict";var e={5555:function(e,n,t){var o=t(5130),r=t(6768);const a={id:"app"};function i(e,n,t,o,i,c){const l=(0,r.g2)("MainContainer");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(l)])}const c={class:"wrap-main__conteiner"},l={class:"wrap-main__conteiner__content"},u={class:"wrap-main__conteiner__panel"};function s(e,n,t,a,i,s){const p=(0,r.g2)("ContentPage"),f=(0,r.g2)("PanelButton");return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.Lk)("div",l,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.pages,((e,n)=>(0,r.bo)(((0,r.uX)(),(0,r.Wv)(p,{key:n,page:e},null,8,["page"])),[[o.aG,a.activePageIndex===n]]))),128))]),(0,r.Lk)("div",u,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.pages,((e,n)=>((0,r.uX)(),(0,r.Wv)(f,{key:n,label:e.label,id:e.id,onClick:e=>a.setActivePage(n)},null,8,["label","id","onClick"])))),128))])])}t(8992),t(3949);var p=t(144),f=t(4232);const d={class:"wrap-main__conteiner__content__page"},v={class:"wrap-main__conteiner__content__page-content"},_={class:"font_nutito"},g={key:0,href:"https://github.com/Olpest22"};function b(e,n,t,o,a,i){return(0,r.uX)(),(0,r.CE)("div",d,[(0,r.Lk)("div",v,[(0,r.Lk)("span",_,(0,f.v_)(t.page.label),1),"portfolio"===t.page.id?((0,r.uX)(),(0,r.CE)("a",g,"github")):(0,r.Q3)("",!0)])])}var m={props:{page:Object}},h=t(1241);const y=(0,h.A)(m,[["render",b]]);var k=y;const w=["id"],C={class:"font_nutito"};function A(e,n,t,o,a,i){return(0,r.uX)(),(0,r.CE)("div",{class:"box",id:t.id,onClick:n[0]||(n[0]=(...e)=>i.handleClick&&i.handleClick(...e))},[(0,r.Lk)("span",C,(0,f.v_)(t.label),1)],8,w)}var E={props:{id:String,label:String},methods:{handleClick(){this.$emit("click")}}};const O=(0,h.A)(E,[["render",A]]);var X=O,x=t(4968),P={components:{ContentPage:k,PanelButton:X},setup(){const e=(0,p.KR)(0),n=(0,p.KR)([{id:"about-me",label:"Обо мне"},{id:"portfolio",label:"Портфолио"},{id:"skills",label:"Мои скиллы"},{id:"other",label:"Разное"}]),t=n=>{e.value=n};return(0,r.sV)((()=>{const e=document.querySelectorAll(".panel-button"),n=document.querySelectorAll(".wrap-main__conteiner__content__page");x.Ay.from(".wrap-main__conteiner__panel",{duration:1,z:100,opacity:0,ease:"power2.out",delay:1.5}),x.Ay.from(".wrap-main__conteiner__content",{duration:1,z:100,opacity:0,ease:"power2.out",delay:1.5}),e.forEach((e=>{x.Ay.from(e,{duration:.5,opacity:.5,stagger:1,delay:1})})),x.Ay.from(".font_nutito",{duration:1,y:20,z:-10,opacity:0,ease:"power3.out",stagger:.1});const t=.7;n.forEach((e=>{e.addEventListener("mouseout",(()=>{e.style.transform="perspective(400px) rotateX(0deg) rotateY(0deg) translateZ(0px)",e.style.transition="all 10s ease"})),e.addEventListener("mousemove",(n=>{const o=e.clientWidth,r=e.clientHeight,a=(n.offsetX-.5*o)/o*t,i=-(n.offsetY-.5*r)/r*t;e.style.transform=`perspective(400px) rotateX(${i}deg) rotateY(${a}deg)`,e.style.transition="none"}))}))})),{activePageIndex:e,pages:n,setActivePage:t}}};const j=(0,h.A)(P,[["render",s],["__scopeId","data-v-01bea0aa"]]);var L=j,I={name:"App",components:{MainContainer:L}};const F=(0,h.A)(I,[["render",i]]);var K=F;(0,o.Ef)(K).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var c=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],l=o[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(l)var s=l(t)}for(n&&n(o);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},o=self["webpackChunkabout_me_last"]=self["webpackChunkabout_me_last"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(5555)}));o=t.O(o)})();
//# sourceMappingURL=app.995a404c.js.map