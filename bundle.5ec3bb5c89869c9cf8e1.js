(self.webpackChunkcv_maker=self.webpackChunkcv_maker||[]).push([[152],{152:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(294),a=r(510),o=r(235),i=r(968),c=r(818);function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const d=function(e){var t=(0,n.useRef)(),r=e.valueObj,s=l((0,n.useState)(r.refName),2),m=s[0],d=s[1],f=l((0,n.useState)(r.jobTitle),2),p=f[0],b=f[1],y=l((0,n.useState)(r.companyName),2),v=y[0],h=y[1],E=l((0,n.useState)(r.howToReach),2),g=E[0],N=E[1];function S(){(0,i.x)(e.stateUpdater,r.id,{refName:m,jobTitle:p,companyName:v,howToReach:g,id:r.id,editMode:!1})}return(0,c.Z)(t,(function(){"Edit"===e.header?S():"Add new"===e.header&&e.setForm(!1)})),n.createElement("form",{ref:t,className:"form footer__form"},n.createElement("h4",null,e.header," Reference"),n.createElement("div",{className:"footer__form-row"},n.createElement(a.Z,{id:"name",label:"References Name",stateUpdater:d,stateValue:m,inputType:"text",inputRequired:!0}),n.createElement(a.Z,{id:"jobTitle",label:"Referencer title",stateUpdater:b,stateValue:p,inputType:"text",inputRequired:!0})),n.createElement("div",{className:"footer__form-row"},n.createElement(a.Z,{id:"company",label:"Company name",stateUpdater:h,stateValue:v,inputType:"text",inputRequired:!0}),n.createElement(a.Z,{id:"contact",label:"How to reach",stateUpdater:N,stateValue:g,inputType:"text",inputRequired:!0})),n.createElement(o.Z,{submitType:e.header,edit:S,add:function(){""!==m&&""!==v&&""!==p&&""!==g&&(e.stateUpdater((function(e){return[].concat(u(e),[{refName:m,jobTitle:p,companyName:v,howToReach:g,id:Date.now(),editMode:!1}])})),e.setForm(!1))},id:r.id,stateUpdater:e.stateUpdater}))};var f=r(434);const p=function(e){var t=e.valueObj;return n.createElement("div",{onClick:function(){e.globalEditingMode&&(0,f.Z)(t,e.stateUpdater)},className:"footer__item pointer"},n.createElement("h4",null,t.refName," ",n.createElement("span",{className:"material-icons settings-icon"},"settings")),n.createElement("p",null,t.jobTitle," ",n.createElement("br",null),t.companyName," ",n.createElement("br",null),t.howToReach," ",n.createElement("br",null)))};var b=r(998);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=[{refName:"Jenny Marsh",howToReach:"123-456-7890",jobTitle:"Senior Software Developer",companyName:"ZimCore Solutions",id:7894561234,editMode:!1},{refName:"Camden Michaels",howToReach:"123-456-7890",jobTitle:"Software Manager",companyName:"Mathica Labs",id:456123789,editMode:!1}];function E(e){if("Add new"===e.itemType){return e.formOpen?n.createElement(d,{stateUpdater:e.stateUpdater,setForm:e.setFormOpen,valueObj:{refName:"",howToReach:"",jobTitle:"",companyName:"",editMode:!1},header:e.itemType}):n.createElement("button",{onClick:function(){return e.setFormOpen(!0)},className:"btn footer__btn"},"+ Reference")}if("item"===e.itemType)return e.itemObj.editMode?n.createElement(d,{stateUpdater:e.stateUpdater,setForm:e.setFormOpen,valueObj:e.itemObj,header:"Edit"}):n.createElement(p,{globalEditingMode:e.globalEditingMode,stateUpdater:e.stateUpdater,valueObj:e.itemObj})}const g=function(e){var t=y((0,n.useState)([]),2),r=t[0],a=t[1],o=y((0,n.useState)(!1),2),i=o[0],c=o[1];return(0,b.G)("referencesData",a,h),(0,b.i)("referencesData",r),n.createElement("footer",{id:"page2ele",className:"footer"},n.createElement("div",{className:"row"},n.createElement("h3",{className:"title"},"References"),n.createElement("div",{className:"footer__container"},r.map((function(t){return n.createElement(E,{globalEditingMode:e.globalEditingMode,itemType:"item",stateUpdater:a,setFormOpen:c,formOpen:i,itemObj:t,key:t.id})})))),n.createElement(E,{itemType:"Add new",stateUpdater:a,setFormOpen:c,formOpen:i}))}},235:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(968),a=r(294);const o=function(e){return"Edit"===e.submitType?a.createElement("div",{className:"row list-section__btn-container"},a.createElement("button",{onClick:e.edit,className:"submit-btn"},"Submit"),a.createElement("button",{onClick:function(){return(0,n.d)(e.stateUpdater,e.id)},className:"delete-btn"},"Delete")):"Add new"===e.submitType?a.createElement("button",{onClick:e.add,className:"submit-btn"},"Submit"):void 0}},510:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(294),a=r(36);const o=function(e){return n.createElement("div",{className:"form__item"},n.createElement("label",{htmlFor:e.id},e.label),n.createElement("input",{onChange:function(t){return e.stateUpdater(t.target.value)},onFocus:a.Z,value:e.stateValue,name:e.id,id:e.id,type:e.inputType,required:e.inputRequired}))}},36:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=function(e){e.target.select()}},998:(e,t,r)=>{"use strict";r.d(t,{i:()=>o,G:()=>a});var n=r(294);function a(e,t,r){(0,n.useEffect)((function(){localStorage.getItem(e)?t(JSON.parse(localStorage.getItem(e))):t(r)}),[])}function o(e,t){(0,n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(t))}),[t])}},434:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(968);const a=function(e,t){var r=e;r.editMode=!0,(0,n.x)(t,r.id,r)}},968:(e,t,r)=>{"use strict";function n(e,t,r){var n;e((function(e){return n=e.findIndex((function(e){return e.id===t})),e.map((function(e,t){return t===n?r:e}))}))}function a(e,t){e((function(e){return e.filter((function(e){return e.id!==t}))}))}r.d(t,{x:()=>n,d:()=>a})},818:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(294);const a=function(e,t){var r=function(r){e.current&&!e.current.contains(r.target)&&t()};(0,n.useEffect)((function(){return document.addEventListener("click",r),function(){document.removeEventListener("click",r)}}))}}}]);
//# sourceMappingURL=bundle.5ec3bb5c89869c9cf8e1.js.map