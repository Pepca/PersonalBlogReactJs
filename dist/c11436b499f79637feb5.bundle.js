!function(){"use strict";var o,u,r,n={5263:function(e,t,r){r.d(t,{PU:function(){return d},d8:function(){return m},Cg:function(){return p}});var n=r.p+"images/75b379846cc165d0937cd884453da040.jpg",a=r.p+"images/ccbf41cf07c938a58ea5ecb55e11d4f4.jpg",i=r.p+"videos/video1.mp4",s=r.p+"images/d88d279907075cb9639e1fb939e48640.jpg",c=r.p+"images/6fcaf8b22276515e91a620ff92d1f562.png",o=r.p+"images/e97173edf770bd0f4cc77a694f3605bc.png",l=r.p+"images/9599655369174450445ab3c9b8b9475e.png",u=r.p+"images/f867c9543c0575469258f9928d2d2f1f.png",t=r.p+"images/f0ceae43aee7f64e7d865dcdc5a37ae3.jpg",r=r.p+"images/5f5716709339ba1489a3e72295dedc76.jpg",d=[{id:1,media:{src:"",alt:""},title:"",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",dateTime:"21.06.2020",tag:""},{id:2,media:{src:n,alt:n},title:"Как писать код быстро и безболезненно?",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",dateTime:"21.06.2020",tag:"Создание сайтов"},{id:3,media:{src:i,poster:s},title:"Купил новый ноутбук за 150 000 руб",text:"",dateTime:"21.06.2020",tag:"Продвижение видео"},{id:4,media:{src:a,alt:a},title:"Как я сходил на FrontEnd Conf 2021",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",dateTime:"21.06.2020",tag:"Создание сайтов"}],m=[{id:1,title:"Отдыхаю на природе",img:{src:c,alt:"Story1"},dateTime:"21.09.2020"},{id:2,title:"Заканчиваю сложный проект",img:{src:o,alt:"Story2"},dateTime:"15.09.2020"},{id:3,title:"Переехал в новую квартиру",img:{src:l,alt:"Story3"},dateTime:"11.09.2020"},{id:4,title:"Осень пришла!",img:{src:u,alt:"Story4"},dateTime:"28.08.2020"}],p=[{id:1,img:{src:t,alt:t},title:"altermono.com",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",tags:["дизайн","создание сайта","SMM"],href:"/"},{id:2,img:{src:r,alt:r},title:"codedoco.com",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.",tags:["дизайн","создание сайта","SMM"],href:"/"}]},5315:function(e,t,r){r.d(t,{_:function(){return m},H:function(){return a}});var t=r(2526),t=r(1817),t=r(1539),t=r(2165),t=r(6992),t=r(8783),t=r(3948),t=r(7042),t=r(8309),t=r(1038),l=r(7294),u=r(5893);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,i=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=l.createContext();function a(e){var t=e.children,r=d(l.useState(window.innerWidth),2),n=r[0],a=r[1],i=d(l.useState({isFound:!0,searchValue:""}),2),e=i[0],r=i[1],i=d(l.useState(!1),2),s=i[0],c=i[1],r={state:{sidebarIsOpen:s,searchState:e,windowWidth:n},dispatch:{setWindowWidth:a,setSearchState:r,setSidebarIsOpen:c}},o=l.useCallback(function(){a(function(){return window.innerWidth}),991.98<window.innerWidth&&!0===s&&c(function(){return!1})},[s]);return l.useEffect(function(){return window.addEventListener("resize",o),document.body.classList.toggle("_lock",s),function(){return window.removeEventListener("resize",o)}},[o,s]),(0,u.jsx)(m.Provider,{value:r,children:t})}},1309:function(e,t,r){r.d(t,{iI:function(){return n},w2:function(){return a},oX:function(){return i},mr:function(){return s}});var t=r(9600),t=r(4916),t=r(3123),t=r(4765),t=r(3210),t=r(7042),t=r(2222),n=function(e){return e.split(".").reverse().join("-")},a=function(e,t,r){return-1!==e.toUpperCase().search(r.toUpperCase().trim())||-1!==t.toUpperCase().search(r.toUpperCase().trim())},i=function(e,t){var r=e.split(""),e=r.slice(0,t);return" "===e[e.length-1]&&t--,"".concat(r.slice(0,t).join(""),"...")},s=function(e){return"".concat(Math.floor(e/60),":").concat(((e=Math.floor(e%60))<10?"0":"").concat(e))}},2881:function(e,t,r){var o=r(7294),n=r(3935),l=(r(6992),r(1539),r(8674),r(8783),r(3948),r(4916),r(4723),r(3727)),a=r(5977),u=r(5315),d=r(5893);function i(){return(0,d.jsx)("div",{className:"preloader-bg",children:(0,d.jsx)("div",{className:"preloader",children:(0,d.jsxs)("div",{className:"lds-roller",children:[(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{})]})})})}r(2526),r(1817),r(2165),r(7042),r(8309),r(1038);var s=r.p+"images/f9190119d9b44b76e99fbea0e94ad046.jpg",c=r.p+"images/bca705d8bd6b97dcc6cf1d49aa3244c4.png",m=r.p+"images/9905be341322e52743537566669e2f65.svg",p=r.p+"images/ad58d58df663432e526f2588f77766dd.svg",f=r.p+"images/5ca2d9e10bbd263887fdd64cdfe5d25d.svg";function h(){return(0,d.jsxs)("div",{className:"sidebar__head head-sidebar",children:[(0,d.jsx)("div",{className:"head-sidebar__avatar",children:(0,d.jsx)("img",{src:c,alt:"avatar"})}),(0,d.jsxs)("div",{className:"head-sidebar__info info-head-sidebar",children:[(0,d.jsx)("h1",{className:"info-head-sidebar__name primary-title",children:"Дмитрий Валак"}),(0,d.jsx)("span",{className:"info-head-sidebar__subname",children:"блог front-end разработчика"})]}),(0,d.jsx)("div",{className:"head-sidebar__contacts contacts-head-sidebar",children:(0,d.jsxs)("ul",{className:"contacts-head-sidebar__list",children:[(0,d.jsx)("li",{className:"contacts-head-sidebar__item",children:(0,d.jsx)("a",{href:"https://www.instagram.com/?hl=ru",className:"contacts-head-sidebar__link",rel:"noreferrer",target:"_blank",children:(0,d.jsx)("img",{src:m,alt:"instagram contact link"})})}),(0,d.jsx)("li",{className:"contacts-head-sidebar__item",children:(0,d.jsx)("a",{href:"https://vk.com/",className:"contacts-head-sidebar__link",rel:"noreferrer",target:"_blank",children:(0,d.jsx)("img",{src:p,alt:"Vk contact link"})})}),(0,d.jsx)("li",{className:"contacts-head-sidebar__item",children:(0,d.jsx)("a",{href:"https://www.pinterest.ru/",className:"contacts-head-sidebar__link",rel:"noreferrer",target:"_blank",children:(0,d.jsx)("img",{src:f,alt:"Pinterest contact link"})})})]})})]})}function b(e){var t=e.isOpen,r=e.setIsOpen;return(0,d.jsx)("div",{className:"popup".concat(t?" popup-open":""),onClick:function(){return r(function(){return!1})},children:(0,d.jsxs)("main",{className:"popup-content",onClick:function(e){return e.stopPropagation()},children:[(0,d.jsx)("div",{className:"popup-close",children:(0,d.jsx)("button",{className:"btn-close-popup",type:"button",onClick:function(){return r(function(){return!1})}})}),(0,d.jsxs)("form",{action:"/",method:"post",className:"popup-form",children:[(0,d.jsxs)("div",{className:"popup-form__inputs",children:[(0,d.jsx)("input",{type:"text",className:"popup-form__input primary-input",placeholder:"Ваше имя"}),(0,d.jsx)("input",{type:"email",className:"popup-form__input primary-input",placeholder:"Ваш e-mail"}),(0,d.jsx)("input",{type:"text",className:"popup-form__input primary-input",placeholder:"Текст сообщения"})]}),(0,d.jsx)("div",{className:"popup-form__btn",children:(0,d.jsx)("button",{className:"popup-form__send primary-blue-btn",type:"submit",children:"Отправить"})}),(0,d.jsx)("div",{className:"popup-form__contacts contacts-popup-form",children:(0,d.jsxs)("ul",{className:"contacts-popup-form__list",children:[(0,d.jsxs)("li",{className:"contacts-popup-form__item",children:[(0,d.jsx)("span",{children:"e-mail:"}),(0,d.jsx)("a",{href:"mailto:info@mywebsite.ru",children:"info@mywebsite.ru"})]}),(0,d.jsxs)("li",{className:"contacts-popup-form__item",children:[(0,d.jsx)("span",{children:"тел:"}),(0,d.jsx)("a",{href:"tel:94323285622",children:"+943-232-856-22"})]})]})})]})]})})}r(7327),r(7941),r(1249),r(5003),r(4747),r(9337);var v=r(6486),j=r(5263);function g(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function _(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach(function(e){var t,r;t=n,e=a[r=e],r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function x(){var e=o.useContext(u._),t=e.state,r=e.dispatch,e=Object.keys((0,v.groupBy)(j.PU,"tag")).filter(function(e){return""!==e});return(0,d.jsx)("nav",{className:"sidebar__nav nav-sidebar",children:(0,d.jsxs)("ul",{className:"nav-sidebar__list",children:[(0,d.jsx)("li",{className:"nav-sidebar__item",children:(0,d.jsx)(l.OL,{to:"/",className:"nav-sidebar__link",children:"Главная"})}),(0,d.jsxs)("li",{className:"nav-sidebar__item".concat(0<j.PU.length&&" item-sidebar-nav"),children:[(0,d.jsx)(l.OL,{to:"/search",className:"nav-sidebar__link",children:"Статьи"}),0<e.length&&(0,d.jsx)("div",{className:"item-sidebar-nav__submenu submenu-nav-sidebar",children:(0,d.jsx)("ul",{className:"submenu-nav-sidebar__list",children:e.map(function(e){return(0,d.jsx)("li",{className:"submenu-nav-sidebar__item",children:(0,d.jsx)(l.OL,{to:"/search",onClick:function(e){return r.setSearchState(_(_({},t.searchState),{},{searchValue:e.target.text}))},className:"submenu-nav-sidebar__link",children:e})},e)})})})]}),(0,d.jsx)("li",{className:"nav-sidebar__item",children:(0,d.jsx)(l.OL,{to:"/",className:"nav-sidebar__link",children:"Обо мне"})}),(0,d.jsx)("li",{className:"nav-sidebar__item",children:(0,d.jsx)(l.OL,{to:"/",className:"nav-sidebar__link",children:"Реклама"})}),(0,d.jsx)("li",{className:"nav-sidebar__item",children:(0,d.jsx)(l.OL,{to:"/profile",className:"nav-sidebar__link",children:"Профиль"})})]})})}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,i=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(){var e=y(o.useState(!1),2),t=e[0],r=e[1],n=o.useContext(u._),e=n.state,a=n.dispatch;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b,{isOpen:t,setIsOpen:r}),e.windowWidth<=991.98&&(0,d.jsx)("div",{className:"sidebar__mask",onClick:function(){return a.setSidebarIsOpen(function(){return!1})},style:{opacity:e.sidebarIsOpen?"1":"0",visibility:e.sidebarIsOpen?"visible":"hidden"}}),(0,d.jsx)("aside",{className:"sidebar".concat(e.sidebarIsOpen?" _sidebarIsOpen":""),children:(0,d.jsxs)("div",{className:"sidebar__inner",children:[(0,d.jsx)("div",{className:"sidebar-picture",children:(0,d.jsx)("img",{src:s,alt:"bgPicture"})}),(0,d.jsx)(h,{}),991.98<e.windowWidth&&(0,d.jsx)("div",{className:"sidebar-description",children:(0,d.jsx)("p",{children:"Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности."})}),e.windowWidth<=991.98&&(0,d.jsx)(x,{}),(0,d.jsxs)("div",{className:"sidebar__controls controls-sidebar",children:[(0,d.jsx)("div",{className:"controls-sidebar__item",children:(0,d.jsx)(l.rU,{to:"/works",className:"controls-sidebar__btn red-btn",type:"button",children:"Мои работы"})}),(0,d.jsx)("div",{className:"controls-sidebar__item",children:(0,d.jsx)("button",{className:"controls-sidebar__btn blue-btn",onClick:function(){return r(function(){return!0})},type:"button",children:"Написать мне"})})]})]})})]})}function w(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function S(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(Object(a),!0).forEach(function(e){var t,r;t=n,e=a[r=e],r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function k(){var e=o.useContext(u._),t=e.state,r=e.dispatch,e=Object.keys((0,v.groupBy)(j.PU,"tag")).filter(function(e){return""!==e});return(0,d.jsx)("nav",{className:"header__nav nav-header",children:(0,d.jsxs)("ul",{className:"nav-header__list",children:[(0,d.jsx)("li",{className:"nav-header__item",children:(0,d.jsx)(l.OL,{to:"/",className:"nav-header__link",children:"Главная"})}),(0,d.jsxs)("li",{className:"nav-header__item".concat(0<j.PU.length&&" item-header-nav"),children:[(0,d.jsx)(l.OL,{to:"/search",className:"nav-header__link",children:"Статьи"}),0<e.length&&(0,d.jsx)("div",{className:"item-header-nav__submenu submenu-nav-header",children:(0,d.jsx)("ul",{className:"submenu-nav-header__list",children:e.map(function(e){return(0,d.jsx)("li",{className:"submenu-nav-header__item",children:(0,d.jsx)(l.OL,{to:"/search",onClick:function(e){return r.setSearchState(S(S({},t.searchState),{},{searchValue:e.target.text}))},className:"submenu-nav-header__link",children:e})},e)})})})]}),(0,d.jsx)("li",{className:"nav-header__item",children:(0,d.jsx)(l.OL,{to:"/",className:"nav-header__link",children:"Обо мне"})}),(0,d.jsx)("li",{className:"nav-header__item",children:(0,d.jsx)(l.OL,{to:"/",className:"nav-header__link",children:"Реклама"})})]})})}function P(){var e=o.useContext(u._),t=e.state,r=e.dispatch;return(0,d.jsx)("div",{className:"header-burger".concat(t.sidebarIsOpen?" _sidebarIsOpen":""),onClick:function(){return r.setSidebarIsOpen(function(e){return!0!==e})},children:(0,d.jsx)("div",{className:"header-burger__inner",children:(0,d.jsx)("span",{})})})}r(4553),r(3210);var E=r(1309);function C(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function A(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?C(Object(a),!0).forEach(function(e){var t,r;t=n,e=a[r=e],r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,i=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=o.memo((0,a.EN)(function(e){var t=e.history,r=o.useRef(null),n=I(o.useState(!1),2),a=n[0],i=n[1],e=o.useContext(u._),n=e.state,s=e.dispatch.setSearchState,c=n.searchState;return(0,d.jsxs)("form",{action:"/",className:"header__form form-header",onSubmit:function(e){e.preventDefault(),t.push("/search"),r.current.blur(),r.current.value=""},children:[(0,d.jsx)("input",{ref:r,type:"text",className:"form-header__search",placeholder:"Поиск по блогу",onChange:function(e){return t=e,e=j.PU.findIndex(function(e){if(""!==e.title)return(0,E.w2)(e.title,e.tag,t.target.value)}),s(c.isFound=-1!==e),s(A(A({},c),{},{searchValue:t.target.value})),void(""!==t.target.value?i(function(){return!0}):i(function(){return!1}));var t},onFocus:function(e){return""!==e.target.value&&i(function(){return!0})},onBlur:function(){return i(function(){return!1})}}),"/search"!==t.location.pathname&&0<j.PU.length&&(0,d.jsx)("div",{className:"form-header__submenu submenu-form-header".concat(a?" submenu-form-header-show":""),children:(0,d.jsxs)("ul",{className:"submenu-form-header__list",children:[!c.isFound&&(0,d.jsx)("li",{className:"submenu-form-header__item error",children:"Ничего не найдено..."}),j.PU.map(function(e){return""!==c.searchValue.trim().toUpperCase()&&(0,E.w2)(e.title,e.tag,c.searchValue)&&e.title&&(0,d.jsx)("li",{className:"submenu-form-header__item",children:(0,d.jsx)(l.rU,{to:"/post".concat(e.id),className:"submenu-form-header__link",onClick:function(){return r.current.value=""},children:e.title})},e.id)})]})})]})}));function U(){var e=o.useContext(u._).state;return(0,d.jsx)("header",{className:"header",children:(0,d.jsxs)("div",{className:"header__inner",children:[(0,d.jsxs)("div",{className:"header__right",children:[e.windowWidth<=991.98&&(0,d.jsx)(P,{}),991.98<e.windowWidth&&(0,d.jsx)(k,{})]}),(0,d.jsxs)("div",{className:"header__left",children:[991.98<e.windowWidth&&(0,d.jsx)("nav",{className:"header__nav nav-header",children:(0,d.jsx)("ul",{className:"nav-header__list",children:(0,d.jsx)("li",{className:"nav-header__item",children:(0,d.jsx)(l.OL,{to:"/profile",className:"nav-header__link",children:"Профиль"})})})}),(0,d.jsx)(T,{})]})]})})}var D=(0,o.lazy)(function(){return r.e(802).then(r.bind(r,3802))}),W=(0,o.lazy)(function(){return r.e(161).then(r.bind(r,9161))}),F=(0,o.lazy)(function(){return r.e(110).then(r.bind(r,4110))}),M=(0,o.lazy)(function(){return r.e(362).then(r.bind(r,362))}),B=(0,o.lazy)(function(){return r.e(489).then(r.bind(r,2489))});function z(){return(0,d.jsx)(u.H,{children:(0,d.jsx)("div",{className:"app__inner",children:(0,d.jsxs)(l.UT,{children:[(0,d.jsx)(N,{}),(0,d.jsx)(U,{}),(0,d.jsx)("main",{className:"app-content",children:(0,d.jsx)("div",{className:"app-content__inner _container",children:(0,d.jsx)(a.rs,{children:(0,d.jsxs)(o.Suspense,{fallback:(0,d.jsx)(i,{}),children:[(0,d.jsx)(a.AW,{exact:!0,path:"/",render:function(){return(0,d.jsx)(D,{})}}),(0,d.jsx)(a.AW,{path:"/works",render:function(){return(0,d.jsx)(W,{})}}),(0,d.jsx)(a.AW,{exact:!0,path:"/search",render:function(){return(0,d.jsx)(F,{})}}),(0,d.jsx)(a.AW,{exact:!0,path:"/post:id",render:function(e){var t=e.match,e=e.history;return(0,d.jsx)(M,{match:t,history:e})}}),(0,d.jsx)(a.AW,{path:"/profile",render:function(){return(0,d.jsx)(B,{})}})]})})})})]})})})}var V=document.getElementById("app");n.render((0,d.jsx)(z,{}),V)}},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;t=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}function i(a){return new Promise(function(e,t){var r=d.miniCssF(a),n=d.p+r;if(function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}for(var i,s=document.getElementsByTagName("style"),n=0;n<s.length;n++)if((a=(i=s[n]).getAttribute("data-href"))===e||a===t)return i}(r,n))return e();!function(n,a,i,s){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css";c.onerror=c.onload=function(e){var t,r;c.onerror=c.onload=null,"load"===e.type?i():(t=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.href||a,(e=new Error("Loading CSS chunk "+n+" failed.\n("+r+")")).code="CSS_CHUNK_LOAD_FAILED",e.type=t,e.request=r,c.parentNode.removeChild(c),s(e))},c.href=a,document.head.appendChild(c)}(a,n,e,t)})}d.m=n,o=[],d.O=function(e,t,r,n){if(!t){for(var a=1/0,i=0;i<o.length;i++){for(var t=o[i][0],r=o[i][1],n=o[i][2],s=!0,c=0;c<t.length;c++)(!1&n||n<=a)&&Object.keys(d.O).every(function(e){return d.O[e](t[c])})?t.splice(c--,1):(s=!1,n<a&&(a=n));s&&(o.splice(i--,1),e=r())}return e}n=n||0;for(var i=o.length;0<i&&o[i-1][2]>n;i--)o[i]=o[i-1];o[i]=[t,r,n]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},d.d=function(e,t){for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=function(r){return Promise.all(Object.keys(d.f).reduce(function(e,t){return d.f[t](r,e),e},[]))},d.u=function(e){return{110:"f4e6072a6e21d54f60ed",161:"c7b529780342da276eee",362:"8957295ce0360b156907",489:"f87439b9f2011c1f5da5",802:"bf096646cb825905832c"}[e]+".bundle.js"},d.miniCssF=function(e){return e+".bundle.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u={},d.l=function(n,e,t,r){if(u[n])u[n].push(e);else{var a,i;if(void 0!==t)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var o=s[c];if(o.getAttribute("src")==n){a=o;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.src=n),u[n]=[e];var e=function(e,t){a.onerror=a.onload=null,clearTimeout(l);var r=u[n];if(delete u[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach(function(e){return e(t)}),e)return e(t)},l=setTimeout(e.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=e.bind(null,a.onerror),a.onload=e.bind(null,a.onload),i&&document.head.appendChild(a)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&((e=t.currentScript?t.currentScript.src:e)||(t=t.getElementsByTagName("script")).length&&(e=t[t.length-1].src)),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e}(),r={179:0},d.f.miniCss=function(t,e){r[t]?e.push(r[t]):0!==r[t]&&{110:1,161:1,362:1,489:1,802:1}[t]&&e.push(r[t]=i(t).then(function(){r[t]=0},function(e){throw delete r[t],e}))},function(){var l={179:0};d.f.j=function(r,e){var t,n,a=d.o(l,r)?l[r]:void 0;0!==a&&(a?e.push(a[2]):(t=new Promise(function(e,t){a=l[r]=[e,t]}),e.push(a[2]=t),t=d.p+d.u(r),n=new Error,d.l(t,function(e){var t;d.o(l,r)&&(0!==(a=l[r])&&(l[r]=void 0),a&&(t=e&&("load"===e.type?"missing":e.type),e=e&&e.target&&e.target.src,n.message="Loading chunk "+r+" failed.\n("+t+": "+e+")",n.name="ChunkLoadError",n.type=t,n.request=e,a[1](n)))},"chunk-"+r,r)))},d.O.j=function(e){return 0===l[e]};function e(e,t){var r,n,a,i=t[0],s=t[1],c=t[2],o=0;for(r in s)d.o(s,r)&&(d.m[r]=s[r]);for(c&&(a=c(d)),e&&e(t);o<i.length;o++)n=i[o],d.o(l,n)&&l[n]&&l[n][0](),l[i[o]]=0;return d.O(a)}var t=self.webpackChunk=self.webpackChunk||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var e=d.O(void 0,[23],function(){return d(2881)});d.O(e)}();