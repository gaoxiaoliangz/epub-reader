webpackJsonp([5],{1197:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return{bookListNewest:b.c.bookList(e),routing:b.d(e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(23),l=n.n(c),u=n(2),s=n.n(u),f=n(52),p=(n.n(f),n(558)),y=n(1229),d=n(559),b=n(83),m=n(288),h=n(108),v=n(1225),g=n(109),k=n(1),w=n.n(k),O=n(1227),_=n(557),E=n(1261),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),C=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showModal:!1},n}return a(t,e),j(t,[{key:"deleteBook",value:function(e,t){var n=this;this.props.openConfirmModal({title:"确认删除",content:"将删除《"+t+"》",onConfirm:function(){d.a.deleteBook(e).then(function(t){n.props.closeConfirmModal(),n.props.sendNotification("删除成功！"),n.props.removeEntity("books",e)})}})}},{key:"editBookMeta",value:function(e){var t=this;this.setState({showModal:!0}),this.props.openModal({title:"编辑书籍信息",content:s.a.createElement(E.a,{onSave:function(n){d.a.editBookMeta(e.id,n).then(function(e){t.loadBooks(),t.props.closeModal(),t.props.sendNotification("修改成功！","success")})}})}),this.props.initializeForm("bookMeta",{title:e.title,authors:e.authors.map(function(e){return e.name}).join(", "),description:e.description,cover:e.cover})}},{key:"loadBooks",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;this.props.loadBooks(e.routing.query.page||"1")}},{key:"componentWillReceiveProps",value:function(e,t){var n=this;g.a.onRoutingChange(function(t){document.body.scrollTop=0,n.loadBooks(e)})(e,this.props)}},{key:"componentWillMount",value:function(){this.loadBooks(),this.props.loadUsers()}},{key:"render",value:function(){var e=this,t=this.props.bookListNewest,n=l()(t,["pages",t.currentPage],[]),o=n.map(function(t,o){return[t.id,t.title,w()(new Date(t.dateCreated).valueOf()).format("YYYY年MM月DD日"),t.authors?t.authors.map(function(e){return e.name}).join(", "):"未知作者",s.a.createElement("div",null,s.a.createElement("span",{className:"dark-link",onClick:function(){e.editBookMeta(n[o])}},"编辑"),s.a.createElement("span",{className:"dark-link",onClick:function(){e.deleteBook(t.id,t.title)}},"删除"))]});return s.a.createElement(p.a,{title:"书籍管理",bodyClass:"manage-books"},s.a.createElement(v.a,{pagination:{name:"books"}},s.a.createElement(O.a,{style:{marginTop:20},url:"/api/books",accept:".txt,.epub",name:"book-file",onSuccess:function(t){e.loadBooks()},onError:function(t){e.props.sendNotification(t.message,"error")}},s.a.createElement(_.d,{color:"blue"},"添加书籍")),s.a.createElement(y.a,{rows:o,header:["ID","数名","创建日期","作者","操作"]})))}}]),t}(u.Component);t.default=n.i(f.connect)(i,{loadBooks:h.loadBooks,sendNotification:m.sendNotification,openConfirmModal:m.openConfirmModal,closeConfirmModal:m.closeConfirmModal,removeEntity:h.removeEntity,loadUsers:h.loadUsers,openModal:m.openModal,initializeForm:m.initializeForm,closeModal:m.closeModal})(C)},1224:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),c=n.n(i),l=n(1231),u=n(52),s=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),f=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),s(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.routing,o=e.paginationLinks,r=o.next,a=o.last,i=a&&a.page||1,u=r?r.page-1:i;return c.a.createElement("div",null,t,c.a.createElement(l.a,{all:i,current:u,url:{pathname:n.pathname,query:n.query||{}}}))}}]),t}(i.Component),p=function(e,t){var n=t.pagination;n.name,n.key;return{routing:e.routing.locationBeforeTransitions||{}}};t.a=n.i(u.connect)(p,{})(f)},1225:function(e,t,n){"use strict";var o=n(1224);t.a=o.a},1226:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),c=n.n(i),l=n(290),u=n.n(l),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:null},n.handleFileChange=n.handleFileChange.bind(n),n}return a(t,e),s(t,[{key:"handleFileChange",value:function(e){var t=this.props,n=t.url,o=t.onComplete,r=t.onSuccess,a=t.onError,i=e.target.files,c=new FormData;i.length>1?u.a.each(i,function(e,t){c.append(e,t)}):c.append("file",i[0]),u.a.ajax({url:n,type:"POST",data:c,cache:!1,processData:!1,contentType:!1,xhrFields:{withCredentials:!0},complete:function(e){o&&o(e)},success:function(e,t,n){r&&r(e)},error:function(e,t,n){a&&a(e.responseJSON)}})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.url,o=t.accept,r=t.noAjax,a=t.children,i=t.name,l=t.multiple,s=t.style;return c.a.createElement("div",{className:"file-trigger",onClick:function(t){r||u()(e.fileInput).click()},style:Object.assign({display:"inline-block"},s)},c.a.createElement("form",{action:n,method:"post",encType:"multipart/form-data",style:r?{}:{display:"none"}},c.a.createElement("input",{multiple:l,type:"file",name:i||"file",id:"upload-file",value:r?void 0:"",ref:function(t){e.fileInput=t},onChange:function(t){r||e.handleFileChange(t)},accept:o||".*"}),c.a.createElement("input",{type:"submit",value:"提交"})),a)}}]),t}(i.Component);t.a=f},1227:function(e,t,n){"use strict";var o=n(1226);t.a=o.a},1228:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(292),c=n.n(i),l=n(2),u=n.n(l),s=n(84),f=n.n(s),p=n(20),y=n.n(p),d=n(1238),b=n.n(d),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},g=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.style,o=e.rows,r=f()({"info-table":!0,"info-table--no-header":!t});return u.a.createElement("table",{styleName:r,style:n||{}},u.a.createElement("tbody",null,u.a.createElement("tr",null,t.map(function(e,t){return u.a.createElement("th",{key:t},e)})),o.map(function(e,n){return e.length!==t.length&&console.warn("Row items should match head items!"),u.a.createElement("tr",{key:n},c()(e,function(e,t){return u.a.createElement("td",{key:t},e)}))})))}}]),t}(l.Component);g=v([y()(b.a)],g),t.a=g},1229:function(e,t,n){"use strict";var o=n(1228);t.a=o.a},1230:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(130),c=n.n(i),l=n(2),u=n.n(l),s=n(36),f=n(129),p=n(20),y=n.n(p),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":b(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},h=n(1239),v=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),d(t,[{key:"parseUrl",value:function(e,t,n){if("query"===(this.props.urlStyle?this.props.urlStyle:"query")){var o=f.a.parseUrlencoded(c()(t,["page"]));return e+(o?"?"+o+"&":"?")+"page="+n}return e+"/page/"+n+"?"+f.a.parseUrlencoded(t)}},{key:"render",value:function(){var e=this,t=this.props.range?this.props.range:3,n=this.props.all-1,o=parseInt(this.props.current)-1,r=o-t,a=o+t,i=!1,c=!1,l=[],f=this.props.url;if("number"!=typeof this.props.all)throw new Error("all 必须为 number 类型！");"number"!=typeof o&&console.error("页码必须为数字，却得到 "+(void 0===o?"undefined":b(o))),(o>a||o<0)&&console.error("页码不能大于所有页面数目或小于 1！"),2*t+1>=n?(a=n,r=0):(a>=n?(a=n,r=n-(2*t+1)):c=!0,r<=0?(r=0,a=2*t+1):i=!0);for(var p=r;p<=a;p++)l=l.concat([{pageNum:p+1,isCurrent:p===o}]);if(i){l=[{pageNum:1},{isSpread:!0}].concat(l)}if(c){var y=[{isSpread:!0},{pageNum:n+1}];l=l.concat(y)}return 1!==this.props.all&&u.a.createElement("div",{styleName:"paginator"},u.a.createElement("ul",null,l.map(function(t,n){return t.isCurrent?u.a.createElement("li",{key:n,styleName:"page-num--current"},t.pageNum):t.isSpread?u.a.createElement("li",{key:n,styleName:"page-spread"},"..."):u.a.createElement("li",{key:n,styleName:"page-num"},u.a.createElement(s.Link,{to:e.parseUrl(f.pathname,f.query,t.pageNum)},t.pageNum))})))}}]),t}(l.Component);v=m([y()(h)],v),t.a=v},1231:function(e,t,n){"use strict";var o=n(1230);t.a=o.a},1238:function(e,t){e.exports={"info-table":"info-table_20Mpg","info-table--no-header":"info-table--no-header_kMU9t",actions:"actions_ApREx",action:"action_1te-v"}},1239:function(e,t){e.exports={"page-spread":"page-spread_1Zy4Q","page-num":"page-num_1fJwI","page-num--current":"page-num--current_3liok",paginator:"paginator_1KZC2"}},1261:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),c=n.n(i),l=n(52),u=(n.n(l),n(176)),s=n.n(u),f=n(288),p=n(557),y=n(561),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":b(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},h=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=t.title,o=t.authors,r=t.description,a=t.cover,i=e.handleSubmit,l=e.closeModal,u=e.onSave;return c.a.createElement("div",null,c.a.createElement(p.a,Object.assign({placeholder:"书名"},n)),c.a.createElement(p.a,Object.assign({placeholder:"作者"},o)),c.a.createElement(p.c,Object.assign({placeholder:"描述"},r)),c.a.createElement(p.a,Object.assign({placeholder:"封面"},a)),c.a.createElement(y.a,{onConfirm:i(function(e){u(e)}),onCancel:l}))}}]),t}(i.Component);h=m([s()({form:"bookMeta",fields:["title","authors","description","cover"]})],h),t.a=n.i(l.connect)(function(e){return e},{sendNotification:f.sendNotification,closeModal:f.closeModal})(h)}});