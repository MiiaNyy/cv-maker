(self.webpackChunkcv_maker=self.webpackChunkcv_maker||[]).push([[174],{174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(294);function a(e){return"Work History"===e?{title:"Job title",company:"Company name",type:"Job",btnName:"Work"}:{title:"Schools/University's name",company:"Degree title",type:"Education",btnName:"Education"}}function i(e,t){if(""===t)return"start"===e?"?":"Still continues";var n=t.split("-");return"".concat(n[2],"/").concat(n[1],"/").concat(n[0])}var o=n(434),c=n(998);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=(0,r.lazy)((function(){return n.e(721).then(n.bind(n,721))}));function u(e){var t,n={title:(t=e.item).title,company:t.company,startDate:t.startDate,endDate:t.endDate,description:t.description,editMode:t.editMode,id:t.id},i=a(e.formType);return e.item.editMode?r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(d,{submitType:"Edit",stateUpdater:e.setHistory,headers:i,valueObj:n,key:n.id})):r.createElement(f,{globalEditingMode:e.globalEditingMode,stateUpdater:e.setHistory,valueObj:n,key:n.id})}function m(e){var t=a(e.formType);return e.addNewFormOpen?r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(d,{submitType:"Add new",stateUpdater:e.setWorkHistory,headers:t,valueObj:{title:"",company:"",startDate:"",endDate:"",description:""},setForm:e.setAddNewFormOpen,key:Date.now()})):r.createElement("button",{onClick:function(){return e.setAddNewFormOpen(!0)},className:"btn",key:Date.now()}," + ",t.btnName)}function f(e){var t=e.valueObj;return r.createElement("div",{onClick:function(){e.globalEditingMode&&(0,o.Z)(t,e.stateUpdater)},className:"pointer"},r.createElement("h3",{className:"history__item-title"}," ",t.title,r.createElement("span",{className:"material-icons settings-icon list-btn"},"settings")),r.createElement("h4",{className:"history__item-title"},t.company),r.createElement("p",null,i("start",t.startDate)," - ",i("end",t.endDate)),r.createElement("p",null,t.description))}const p=function(e){var t=l((0,r.useState)(!1),2),n=t[0],a=t[1],i=l((0,r.useState)([]),2),o=i[0],s=i[1];return(0,c.G)(e.dataNameForStorage,s,e.itemList),(0,c.i)(e.dataNameForStorage,o),r.createElement("div",{className:"border"},r.createElement("h2",{className:"history__title title"},e.mainHeader),o.map((function(t){return r.createElement(u,{globalEditingMode:e.globalEditingMode,setHistory:s,item:t,formType:e.mainHeader,key:t.id})})),r.createElement(m,{addNewFormOpen:n,setAddNewFormOpen:a,setWorkHistory:s,formType:e.mainHeader}))};var y=[{title:"Software engineer",company:"Supercell",startDate:"2015-01-01",endDate:"2020-01-01",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at atque beatae.\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at atque beatae.",id:Date.now(),editMode:!1}],g=[{title:"Bachelor of Software Engineering",company:"University of El Dorado",startDate:"2015-01-01",endDate:"2020-01-01",description:"President, Computer and Technology Organization\n                    Vice President, Programming Club\n                    Member, Video Game Society\n                    Member, Student IT Helpdesk",id:Date.now(),editMode:!1}];const b=function(e){return r.createElement("section",{className:"main"},r.createElement(p,{globalEditingMode:e.globalEditingMode,dataNameForStorage:"workHistory",itemList:y,mainHeader:"Work History"}),r.createElement(p,{globalEditingMode:e.globalEditingMode,dataNameForStorage:"educationHistory",itemList:g,mainHeader:"Education"}))}},998:(e,t,n)=>{"use strict";n.d(t,{i:()=>i,G:()=>a});var r=n(294);function a(e,t,n){(0,r.useEffect)((function(){localStorage.getItem(e)?t(JSON.parse(localStorage.getItem(e))):t(n)}),[])}function i(e,t){(0,r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(t))}),[t])}},434:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(968);const a=function(e,t){var n=e;n.editMode=!0,(0,r.x)(t,n.id,n)}},968:(e,t,n)=>{"use strict";function r(e,t,n){var r;e((function(e){return r=e.findIndex((function(e){return e.id===t})),e.map((function(e,t){return t===r?n:e}))}))}function a(e,t){e((function(e){return e.filter((function(e){return e.id!==t}))}))}n.d(t,{x:()=>r,d:()=>a})}}]);
//# sourceMappingURL=bundle.2455b391287c46647dc4.js.map