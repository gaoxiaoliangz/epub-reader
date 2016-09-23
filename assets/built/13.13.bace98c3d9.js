webpackJsonp([13],{25:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=e[e.length-1],n={};return t&&(n=b["default"].pick(t,["title","bodyClass"]),n.title&&!t.useAsMasterTitle?n.title=n.title+" | "+m:n.title=n.title||m),n}function c(e){var t=e.title,n=e.bodyClass;"undefined"!=typeof n?document.body.className=n:document.body.removeAttribute("class"),"undefined"!=typeof t?document.title=t:document.title=m}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),p=n(38),d=r(p),y=n(5),b=r(y),m="Readr",h=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props.className;return e?s["default"].createElement("div",{className:"gb-doc-container"+e},this.props.children):s["default"].createElement("div",{className:"gb-doc-container"},this.props.children)}}]),t}(f.Component);t["default"]=(0,d["default"])(a,c)(h)},32:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){return e===t}function o(e){var t=arguments.length<=1||void 0===arguments[1]?r:arguments[1],n=null,o=null;return function(){for(var r=arguments.length,i=Array(r),u=0;r>u;u++)i[u]=arguments[u];return null!==n&&n.length===i.length&&i.every(function(e,r){return t(e,n[r])})?o:(o=e.apply(void 0,i),n=i,o)}}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+n+"]"))}return t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;t>o;o++)r[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),u=0;t>u;u++)o[u]=arguments[u];var a=0,c=o.pop(),l=i(o),f=e.apply(void 0,[function(){return a++,c.apply(void 0,arguments)}].concat(r)),s=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;r>i;i++)o[i-2]=arguments[i];var u=l.map(function(n){return n.apply(void 0,[e,t].concat(o))});return f.apply(void 0,n(u))};return s.resultFunc=c,s.recomputations=function(){return a},s.resetRecomputations=function(){return a=0},s}}function a(){return u(o).apply(void 0,arguments)}function c(e){var t=arguments.length<=1||void 0===arguments[1]?a:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return t.reduce(function(e,t,r){return e[n[r]]=t,e},{})})}t.__esModule=!0,t.defaultMemoize=o,t.createSelectorCreator=u,t.createSelector=a,t.createStructuredSelector=c},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectPaginatedEntities=void 0;var o=n(32),i=n(5),u=r(i),a=function(e){return function(t){return t.entities[e]||{}}},c=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return u["default"].get(n.pagination,e+"."+t+".ids",[])}},l=function(e,t){return function(n){return u["default"].get(n.pagination,[e,"query",t,"ids"],[])}};t.selectPaginatedEntities=function(e){var t=e.entitiesName,n=e.paginationName,r=e.paginationKey,i=e.paginationQuery,u=void 0;return u=i?l(n,i):c(n,r),(0,o.createSelector)(a(t),u,function(e,t){return t.map(function(t){return e[t]})})}},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.booksSelector=t.booksSearchAsOptions=t.authorsAsOptions=t.doubanBooksAsOptions=t.searchBooksSelector=t.queryAuthorsSelector=t.queryDoubanBooksSelector=void 0;var r=n(49);Object.keys(r).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(32),i=t.queryDoubanBooksSelector=function(e){return(0,o.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"doubanBooks",paginationName:"doubanBooks",paginationQuery:e}),function(e){return e})},u=t.queryAuthorsSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"authors",paginationName:"authors",paginationQuery:e})},a=t.searchBooksSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationQuery:e})};t.doubanBooksAsOptions=function(e){return(0,o.createSelector)(i(e),function(e){return e.map(function(e){return{name:e.title,value:e.id,additional:{description:e.summary,cover:e.images.large,author:e.author.join(", ")}}})})},t.authorsAsOptions=function(e){return(0,o.createSelector)(u(e),function(e){return e.map(function(e){return{name:e.name,value:e.id}})})},t.booksSearchAsOptions=function(e){return(0,o.createSelector)(a(e),function(e){return e.map(function(e){return{name:e.title,value:e.id}})})},t.booksSelector=(0,o.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationKey:"default"}),function(e){return e})},295:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){return{bookListNewest:g.booksSelector(e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),p=o(s),d=n(6),y=n(25),b=o(y),m=n(70),h=o(m),v=n(50),g=r(v),k=n(8),O=n(2),E=o(O),S=function(e,t,n,r){var o,i=arguments.length,u=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(3>i?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},w=n(354),j=function(e){function t(e){return i(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),l(t,[{key:"handleDeleteClick",value:function(e,t){var n=this;this.props.openConfirmModal({title:"确认删除",content:"将删除《"+t+"》",onConfirm:function(){h["default"].deleteBook(e).then(function(e){n.props.closeConfirmModal(),n.props.sendNotification("删除成功！"),n.props.fetchBooks({merge:!1})})}})}},{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this,t=this.props.bookListNewest?this.props.bookListNewest:null;return p["default"].createElement(b["default"],{title:"管理书籍"},p["default"].createElement("table",{className:"info-table"},p["default"].createElement("tbody",null,p["default"].createElement("tr",null,p["default"].createElement("td",null,"ID"),p["default"].createElement("td",null,"Name"),p["default"].createElement("td",null,"Date created"),p["default"].createElement("td",null,"Actions")),t?t.map(function(t,n){return p["default"].createElement("tr",{key:n},p["default"].createElement("td",null,t.id),p["default"].createElement("td",null,t.title),p["default"].createElement("td",null,t.dateCreated),p["default"].createElement("td",null,p["default"].createElement("a",{onClick:function(n){return n.preventDefault(),e.handleDeleteClick(t.id,t.title),!1},href:"#"},"Delete")))}):null)))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,k.fetchBooks)())}}]),t}(s.Component);j=S([(0,E["default"])(w,{allowMultiple:!0})],j),t["default"]=(0,d.connect)(c,{fetchBooks:k.fetchBooks,sendNotification:k.sendNotification,openConfirmModal:k.openConfirmModal,closeConfirmModal:k.closeConfirmModal})(j)},354:function(e,t){}});