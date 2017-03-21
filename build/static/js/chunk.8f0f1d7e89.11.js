webpackJsonp([11],{1190:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(131),l=n.n(i),u=n(2),c=n.n(u),s=n(52),f=(n.n(s),n(288)),p=n(108),d=n(559),h=n(558),y=n(1259),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={slData:{author:{}}},n.handleTitleValueChange=n.handleTitleValueChange.bind(n),n.handleAuthorValueChange=n.handleAuthorValueChange.bind(n),n.addAuthor=n.addAuthor.bind(n),n.addBook=n.addBook.bind(n),n}return a(t,e),b(t,[{key:"addBook",value:function(e){var t=this;d.a.addBook(e).then(function(e){t.props.sendNotification("添加成功"),t.props.resetForm("addBook")},function(e){t.props.sendNotification(e.message,"error",0)})}},{key:"addAuthor",value:function(e){var t=this;d.a.addAuthor(e).then(function(e){t.props.sendNotification("添加成功");var n=e.json.ops[0]._id,o=e.json.ops[0].name;t.props.initializeForm("addBook",{authors:[{name:o,value:n}],author:""}),t.props.closeModal()},function(e){t.props.sendNotification(e.message,"error")})}},{key:"handleAuthorValueChange",value:function(e){l()(e)||this.props.loadAuthors(1,e)}},{key:"handleTitleValueChange",value:function(e){l()(e)||this.props.searchDoubanBooks(e)}},{key:"render",value:function(){return c.a.createElement(h.a,{title:"添加书籍"},c.a.createElement("h1",{className:"page-title"},"添加书籍"),c.a.createElement(y.a,{onTitleInputChange:this.handleTitleValueChange,onAuthorInputChange:this.handleAuthorValueChange,onSaveAuthor:this.addAuthor,onSaveBook:this.addBook}))}}]),t}(u.Component),v=function(e){return{notification:e.components.notification,elements:e.elements}};t.default=n.i(s.connect)(v,{sendNotification:f.sendNotification,openModal:f.openModal,searchDoubanBooks:p.searchDoubanBooks,closeModal:f.closeModal,loadAuthors:p.loadAuthors,resetForm:f.resetForm,initializeForm:f.initializeForm})(m)},1226:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),l=n.n(i),u=n(290),c=n.n(u),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:null},n.handleFileChange=n.handleFileChange.bind(n),n}return a(t,e),s(t,[{key:"handleFileChange",value:function(e){var t=this.props,n=t.url,o=t.onComplete,r=t.onSuccess,a=t.onError,i=e.target.files,l=new FormData;i.length>1?c.a.each(i,function(e,t){l.append(e,t)}):l.append("file",i[0]),c.a.ajax({url:n,type:"POST",data:l,cache:!1,processData:!1,contentType:!1,xhrFields:{withCredentials:!0},complete:function(e){o&&o(e)},success:function(e,t,n){r&&r(e)},error:function(e,t,n){a&&a(e.responseJSON)}})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.url,o=t.accept,r=t.noAjax,a=t.children,i=t.name,u=t.multiple,s=t.style;return l.a.createElement("div",{className:"file-trigger",onClick:function(t){r||c()(e.fileInput).click()},style:Object.assign({display:"inline-block"},s)},l.a.createElement("form",{action:n,method:"post",encType:"multipart/form-data",style:r?{}:{display:"none"}},l.a.createElement("input",{multiple:u,type:"file",name:i||"file",id:"upload-file",value:r?void 0:"",ref:function(t){e.fileInput=t},onChange:function(t){r||e.handleFileChange(t)},accept:o||".*"}),l.a.createElement("input",{type:"submit",value:"提交"})),a)}}]),t}(i.Component);t.a=f},1227:function(e,t,n){"use strict";var o=n(1226);t.a=o.a},1258:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),l=n.n(i),u=n(52),c=(n.n(u),n(176)),s=n.n(c),f=n(288),p=n(564),d=n(561),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":y(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},m=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=t.name,o=t.slug,r=t.description,a=e.handleSubmit,i=e.closeModal,u=e.onSave;return l.a.createElement("div",null,l.a.createElement(p.a,Object.assign({placeholder:"名字"},n)),l.a.createElement(p.a,Object.assign({placeholder:"唯一标识"},o)),l.a.createElement(p.a,Object.assign({placeholder:"描述"},r)),l.a.createElement(d.a,{onConfirm:a(function(e){u(e)}),onCancel:i}))}}]),t}(i.Component);m=b([s()({form:"addAuthor",fields:["name","slug","description"]})],m),t.a=n.i(u.connect)(function(e){return e},{sendNotification:f.sendNotification,closeModal:f.closeModal})(m)},1259:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(292),l=n.n(i),u=n(130),c=n.n(u),s=n(131),f=n.n(s),p=n(2),d=n.n(p),h=n(52),y=(n.n(h),n(176)),b=n.n(y),m=n(288),v=n(557),g=n(1258),O=n(1227),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":w(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},C=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTitleOptionClick=n.handleTitleOptionClick.bind(n),n.handleAddNewAuthor=n.handleAddNewAuthor.bind(n),n}return a(t,e),k(t,[{key:"handleTitleOptionClick",value:function(e){var t={cover:e.additional.cover,description:e.additional.description,author:e.additional.author};this.props.initializeForm("addBook",t),this.setState({slAuthor:{value:e.additional.author,values:[]}})}},{key:"handleAddNewAuthor",value:function(e){this.props.openModal({title:"添加作者",content:d.a.createElement(g.a,{onSave:this.props.onSaveAuthor})}),this.props.initializeForm("addAuthor",{name:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.fields,o=n.title,r=n.author,a=n.authors,i=n.cover,u=n.description,s=n.file,p=t.handleSubmit,h=t.onTitleInputChange,y=t.onAuthorInputChange,b=t.doubanBooksAsOptions,m=t.authorsAsOptions,g=t.onSaveBook,k=a.get([]).map(function(e){return e.value}),w=m.filter(function(e){return k.indexOf(e.value)===-1});return d.a.createElement("div",null,d.a.createElement(v.b,{placeholder:"书名",value:o.value,values:[],options:b,onInputChange:function(e){h(e),o.set(e)},useValue:!0,onOptionClick:this.handleTitleOptionClick}),d.a.createElement(v.b,{placeholder:"作者",value:r.get(),values:a.get([]),options:w,onInputChange:function(e){y(e),r.set(e)},onValuesChange:a.onChange,onAddNewValue:this.handleAddNewAuthor}),d.a.createElement(v.a,Object.assign({placeholder:"封面图片地址"},i)),d.a.createElement(v.c,Object.assign({placeholder:"描述"},u)),f()(s.value)?d.a.createElement("div",null,d.a.createElement(O.a,{url:"/api/books",accept:".txt,.epub",name:"book-file",onSuccess:function(e){s.set(e)},onError:function(t){e.props.sendNotification(t.message,"error")}},d.a.createElement(v.d,{color:"white"},"选择书籍")),d.a.createElement("p",null,"支持 txt 和 epub 格式")):d.a.createElement("div",null,d.a.createElement("span",null,s.value.originalname," "),d.a.createElement(v.d,{color:"white",onClick:function(){s.set({})}},"重新选择")),d.a.createElement(v.d,{onClick:p(function(e){var t=c()(e,["author"]);t.authors=l()(t.authors,"value"),t.file=e.file._id,g(t)})},"添加"))}}]),t}(p.Component);C=j([b()({form:"addBook",fields:["title","author","authors","cover","description","file"],destroyOnUnmount:!0})],C);var E=function(e,t){return{routing:e.routing.locationBeforeTransitions}};t.a=n.i(h.connect)(E,{sendNotification:m.sendNotification,openModal:m.openModal,initializeForm:m.initializeForm})(C)}});