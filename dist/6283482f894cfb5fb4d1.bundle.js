(self.webpackChunk=self.webpackChunk||[]).push([[115],{6719:function(e,t,a){"use strict";a.d(t,{S:function(){return n},W:function(){return i}});var r=a(9454),n=function(e){return{type:r.g,payload:e}},i=function(e){return{type:r.V,payload:e}}},1115:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var c=a(7294),u=a(3727),r=(a(7327),a(7941),a(1249),a(6486)),l=a(1702),o=a(6719),d=a(9226),m=a(5893);function n(){var t=(0,d.I0)(),e=Object.keys((0,r.groupBy)(l.O,"tag")).filter(function(e){return""!==e});return(0,m.jsx)("nav",{className:"header__nav nav-header",children:(0,m.jsxs)("ul",{className:"nav-header__list",children:[(0,m.jsx)("li",{className:"nav-header__item",children:(0,m.jsx)(u.rU,{to:"/",className:"nav-header__link",children:"Главная"})}),(0,m.jsxs)("li",{className:"nav-header__item".concat(0<l.O.length&&" item-header-nav"),children:[(0,m.jsx)(u.rU,{to:"/search",className:"nav-header__link",children:"Статьи"}),0<e.length&&(0,m.jsx)("div",{className:"item-header-nav__submenu submenu-nav-header",children:(0,m.jsx)("ul",{className:"submenu-nav-header__list",children:e.map(function(e){return(0,m.jsx)("li",{className:"submenu-nav-header__item",children:(0,m.jsx)(u.rU,{to:"/search",onClick:function(e){return t((0,o.S)(e.target.text))},className:"submenu-nav-header__link",children:e})},e)})})})]}),(0,m.jsx)("li",{className:"nav-header__item",children:(0,m.jsx)(u.rU,{to:"/",className:"nav-header__link",children:"Обо мне"})}),(0,m.jsx)("li",{className:"nav-header__item",children:(0,m.jsx)(u.rU,{to:"/",className:"nav-header__link",children:"Реклама"})})]})})}a(4916),a(4765),a(4553),a(3210),a(2526),a(1817),a(1539),a(2165),a(6992),a(8783),a(3948),a(7042),a(8309),a(1038);a=a(5977);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var r,n,i=[],s=!0,c=!1;try{for(a=a.call(e);!(s=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{s||null==a.return||a.return()}finally{if(c)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var s=c.memo((0,a.EN)(function(e){var t=e.history,a=c.useRef(null),r=h(c.useState(!1),2),e=r[0],n=r[1],i=(0,d.I0)(),s=(0,d.v9)(function(e){return{searchValue:e.search.searchValue,isFound:e.search.isFound}});return(0,m.jsxs)("form",{action:"/",className:"header__form from-header",onSubmit:function(e){e.preventDefault(),t.push("/search"),a.current.blur(),a.current.value=""},children:[(0,m.jsx)("input",{ref:a,type:"text",className:"from-header__search",placeholder:"Поиск по блогу",onChange:function(e){return t=e,e=l.O.findIndex(function(e){return""!==e.title&&(-1!==e.title.toUpperCase().search(t.target.value.toUpperCase().trim())||-1!==e.tag.toUpperCase().search(t.target.value.toUpperCase().trim()))}),i(-1!==e?(0,o.W)(!0):(0,o.W)(!1)),i((0,o.S)(t.target.value)),void(""!==t.target.value?n(!0):n(!1));var t},onFocus:function(e){return""!==e.target.value&&n(!0)},onBlur:function(){return n(!1)}}),"/search"!==t.location.pathname&&0<l.O.length&&(0,m.jsx)("div",{className:"from-header__submenu submenu-form-header".concat(e?" submenu-form-header-show":""),children:(0,m.jsxs)("ul",{className:"submenu-form-header__list",children:[!s.isFound&&(0,m.jsx)("li",{className:"submenu-form-header__item error",children:"Ничего не найдено..."}),l.O.map(function(e){return""!==s.searchValue.trim().toUpperCase()&&(-1!==e.title.toUpperCase().search(s.searchValue.trim().toUpperCase())||-1!==e.tag.toUpperCase().search(s.searchValue.trim().toUpperCase()))&&e.title&&(0,m.jsx)("li",{className:"submenu-form-header__item",children:(0,m.jsx)(u.rU,{to:"/post".concat(e.id),className:"submenu-form-header__link",onClick:function(){return a.current.value=""},children:e.title})},e.id)})]})})]})}));function p(){return(0,m.jsx)("header",{className:"header",id:"fixed-element",children:(0,m.jsxs)("div",{className:"header__inner",children:[(0,m.jsx)("div",{className:"header__right",children:(0,m.jsx)(n,{})}),(0,m.jsxs)("div",{className:"header__left",children:[(0,m.jsx)("nav",{className:"header__nav nav-header",children:(0,m.jsx)("ul",{className:"nav-header__list",children:(0,m.jsx)("li",{className:"nav-header__item",children:(0,m.jsx)(u.rU,{to:"/profile",className:"nav-header__link",children:"Профиль"})})})}),(0,m.jsx)(s,{})]})]})})}},1702:function(e,t,a){"use strict";a.d(t,{O:function(){return n}});var r=a.p+"images/75b379846cc165d0937cd884453da040.jpg",t=a.p+"images/ccbf41cf07c938a58ea5ecb55e11d4f4.jpg",n=[{id:1,media:{src:"",alt:""},title:"",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",dateTime:"21.06.2020",tag:""},{id:2,media:{src:r,alt:r},title:"Как писать код быстро и безболезненно?",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",dateTime:"21.06.2020",tag:"Создание сайтов"},{id:3,media:{src:a.p+"videos/Metal_Wind_Chimes_at_Sunset.mp4",poster:a.p+"images/d88d279907075cb9639e1fb939e48640.jpg"},title:"Купил новый ноутбук за 150 000 руб",text:"",dateTime:"21.06.2020",tag:"Продвижение видео"},{id:4,media:{src:t,alt:t},title:"Как я сходил на FrontEnd Conf 2021",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",dateTime:"21.06.2020",tag:"Создание сайтов"}]}}]);