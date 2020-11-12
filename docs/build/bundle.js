var app=function(e,t,o,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(e),a=r(n);const i={text:e=>null==e?"":e,noUndefinedProps(e){const t={};return Object.keys(e).forEach((o=>{void 0!==e[o]&&(t[o]=e[o])})),t},isTrueProp:e=>!0===e||""===e,isStringProp:e=>"string"==typeof e&&""!==e,isObject:e=>"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object,now:()=>Date.now(),extend(...e){let t,o,n=!0;"boolean"==typeof e[0]?([n,t]=e,e.splice(0,2),o=e):([t]=e,e.splice(0,1),o=e);for(let r=0;r<o.length;r+=1){const o=e[r];if(null!=o){const e=Object.keys(Object(o));for(let r=0,s=e.length;r<s;r+=1){const s=e[r],a=Object.getOwnPropertyDescriptor(o,s);void 0!==a&&a.enumerable&&(n?i.isObject(t[s])&&i.isObject(o[s])?i.extend(t[s],o[s]):!i.isObject(t[s])&&i.isObject(o[s])?(t[s]={},i.extend(t[s],o[s])):t[s]=o[s]:t[s]=o[s])}}}return t},flattenArray(...e){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...i.flattenArray(...e)):t.push(e)})),t},classNames(...e){const t=[];e.forEach((e=>{"object"==typeof e&&e.constructor===Object?Object.keys(e).forEach((o=>{e[o]&&t.push(o)})):e&&t.push(e)}));const o=[];return t.forEach((e=>{o.indexOf(e)<0&&o.push(e)})),o.join(" ")},bindMethods(e,t=[]){for(let o=0;o<t.length;o+=1)e[t[o]]&&(e[t[o]]=e[t[o]].bind(e))}},u={instance:null,Framework7:null,events:null,init(e,t={},o){const{events:n,Framework7:r}=u,s=i.extend({},t,{root:e});o&&o.length&&!s.routes&&(s.routes=o);const a=new r(s);a.initialized?(u.instance=a,n.emit("ready",u.instance)):a.on("init",(()=>{u.instance=a,n.emit("ready",u.instance)}))},ready(e){e&&(u.instance?e(u.instance):u.events.once("ready",e))},routers:{views:[],tabs:[],modals:null}};let c=0;var l={proto:{pageComponentLoader(e,t,o,n,r,s){const a=this,l=e;let d;if(u.routers.views.forEach((t=>{t.el&&t.el===e&&(d=t)})),!d)return void s();const p={component:t,id:`${i.now()}_${c+=1}`,props:i.extend({f7route:n.route,$f7route:n.route,f7router:a,$f7router:a},n.route.params,n.props||{})};let f;d.component&&(d.component.$f7router=a,d.component.$f7route=n.route),u.events.on("viewRouterDidUpdate",(function e(t){if(t!==d||f)return;u.events.off("viewRouterDidUpdate",e);const o=l.children[l.children.length-1];p.el=o,r(o),f=!0})),d.pages.push(p),d.setPages(d.pages)},removePage(e){if(!e)return;const t=this;let o,n,r,s;if(o="length"in e&&e[0]?e[0].f7Page:e.f7Page,o&&o.route&&o.route.route&&o.route.route.keepAlive)t.app.$(e).remove();else{if(u.routers.views.forEach((e=>{e.el&&e.el===t.el&&(n=e)})),"length"in e){if(0===e.length)return;r=e[0]}else r=e;r&&(n.pages.forEach(((e,t)=>{e.el===r&&(s=!0,n.pages.splice(t,1),n.setPages(n.pages))})),s||r.parentNode.removeChild(r))}},tabComponentLoader(e,t,o,n,r,s){const a=this;let l;if(e||s(),u.routers.tabs.forEach((t=>{t.el&&t.el===e&&(l=t)})),!l)return void s();const d={id:`${i.now()}_${c+=1}`,component:t,props:i.extend({f7route:n.route,$f7route:n.route,f7router:a,$f7router:a},n.route.params,n.props||{})};let p;l.component&&(l.component.$f7router=a,l.component.$f7route=n.route),u.events.on("tabRouterDidUpdate",(function t(o){if(o!==l||p)return;u.events.off("tabRouterDidUpdate",t);const n=e.children[0];r(n),p=!0})),l.setTabContent(d)},removeTabContent(e){if(!e)return;let t;u.routers.tabs.forEach((o=>{o.el&&o.el===e&&(t=o)}));const o=t&&t.component;t&&o?t.setTabContent(null):e.innerHTML=""},modalComponentLoader(e,t,o,n,r,s){const a=this,l=u.routers.modals;if(!l)return void s();const d={component:t,id:`${i.now()}_${c+=1}`,props:i.extend({f7route:n.route,$f7route:n.route,f7router:a,$f7router:a},n.route.params,n.props||{})};let p;l.component&&(l.component.$f7router=a,l.component.$f7route=n.route),u.events.on("modalsRouterDidUpdate",(function e(){if(p)return;u.events.off("modalsRouterDidUpdate",e);const t=l.el.children[l.el.children.length-1];d.el=t,r(t),p=!0})),l.modals.push(d),l.setModals(l.modals)},removeModal(e){const t=u.routers.modals;if(!t)return;let o;t.modals.forEach((t=>{t.el===e&&(o=t)})),t.modals.splice(t.modals.indexOf(o),1),t.setModals(t.modals)}}};const d={},p={name:"phenomePlugin",installed:!1,install(e={}){if(p.installed)return;p.installed=!0;const t=this;u.Framework7=t,u.events=new t.Events;const{theme:o}=e;"md"===o&&(d.md=!0),"ios"===o&&(d.ios=!0),"aurora"===o&&(d.aurora=!0),o&&"auto"!==o||(d.ios=!!t.device.ios,d.aurora=t.device.desktop&&t.device.electron,d.md=!d.ios&&!d.aurora),u.ready((()=>{d.ios="ios"===u.instance.theme,d.md="md"===u.instance.theme,d.aurora="aurora"===u.instance.theme})),t.Router.use(l)}};return s.default.use(p),new a.default({target:document.body})}(Framework7,0,0,App);
//# sourceMappingURL=bundle.js.map
