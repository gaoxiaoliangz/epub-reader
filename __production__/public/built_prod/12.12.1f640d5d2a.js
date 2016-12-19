webpackJsonp([12],{197:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),f=n(119),s=o(f),p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:null},n.handleFileChange=n.handleFileChange.bind(n),n}return i(t,e),l(t,[{key:"handleFileChange",value:function(e){var t=this.props,n=t.url,o=t.onComplete,r=t.onSuccess,a=t.onError,i=e.target.files,l=new FormData;i.length>1?s["default"].each(i,function(e,t){l.append(e,t)}):l.append("file",i[0]),s["default"].ajax({url:n,type:"POST",data:l,cache:!1,processData:!1,contentType:!1,xhrFields:{withCredentials:!0},complete:function(e){o&&o(e)},success:function(e,t,n){r&&r(e)},error:function(e,t,n){a&&a(e.responseJSON)}})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.url,o=t.accept,r=t.noAjax,a=t.children,i=t.name,l=t.multiple,u=t.style;return c["default"].createElement("div",{className:"file-trigger",onClick:function(t){r||(0,s["default"])(e.fileInput).click()},style:p({display:"inline-block"},u)},c["default"].createElement("form",{action:n,method:"post",encType:"multipart/form-data",style:r?{}:{display:"none"}},c["default"].createElement("input",{multiple:l,type:"file",name:i||"file",id:"upload-file",value:r?void 0:"",ref:function(t){e.fileInput=t},onChange:function(t){r||e.handleFileChange(t)},accept:o||".*"}),c["default"].createElement("input",{type:"submit",value:"提交"})),a)}}]),t}(u.Component);t["default"]=d},198:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(197),a=o(r);t["default"]=a["default"]},642:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),f=n(8),s=n(9),p=n(6),d=o(p),h=n(57),y=o(h),b=n(41),m=o(b),v=n(644),O=o(v),g=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={slData:{author:{}}},n.handleTitleValueChange=n.handleTitleValueChange.bind(n),n.handleAuthorValueChange=n.handleAuthorValueChange.bind(n),n.addAuthor=n.addAuthor.bind(n),n.addBook=n.addBook.bind(n),n}return i(t,e),l(t,[{key:"addBook",value:function(e){var t=this;y["default"].addBook(e).then(function(e){t.props.sendNotification("添加成功"),t.props.resetForm("addBook")},function(e){t.props.sendNotification(e.message,"error",0)})}},{key:"addAuthor",value:function(e){var t=this;y["default"].addAuthor(e).then(function(e){t.props.sendNotification("添加成功");var n=e.json.ops[0]._id,o=e.json.ops[0].name;t.props.initializeForm("addBook",{authors:[{name:o,value:n}],author:""}),t.props.closeModal()},function(e){t.props.sendNotification(e.message,"error")})}},{key:"handleAuthorValueChange",value:function(e){d["default"].isEmpty(e)||this.props.fetchAuthors({q:e})}},{key:"handleTitleValueChange",value:function(e){d["default"].isEmpty(e)||this.props.searchDoubanBooks(e)}},{key:"render",value:function(){return c["default"].createElement(m["default"],{title:"添加书籍"},c["default"].createElement("h1",{className:"page-title"},"添加书籍"),c["default"].createElement(O["default"],{onTitleInputChange:this.handleTitleValueChange,onAuthorInputChange:this.handleAuthorValueChange,onSaveAuthor:this.addAuthor,onSaveBook:this.addBook}))}}]),t}(u.Component),_=function(e){return{notification:e.components.notification,elements:e.elements}};t["default"]=(0,f.connect)(_,{sendNotification:s.sendNotification,openModal:s.openModal,searchDoubanBooks:s.searchDoubanBooks,closeModal:s.closeModal,fetchAuthors:s.fetchAuthors,resetForm:s.resetForm,initializeForm:s.initializeForm})(g)},643:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),f=o(c),s=n(8),p=n(58),d=o(p),h=n(9),y=n(326),b=o(y),m=n(199),v=o(m),O=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},_=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=t.name,o=t.slug,r=t.description,a=e.handleSubmit,i=e.closeModal,l=e.onSave;return f["default"].createElement("div",null,f["default"].createElement(b["default"],O({placeholder:"名字"},n)),f["default"].createElement(b["default"],O({placeholder:"唯一标识"},o)),f["default"].createElement(b["default"],O({placeholder:"描述"},r)),f["default"].createElement(v["default"],{onConfirm:a(function(e){l(e)}),onCancel:i}))}}]),t}(c.Component);_=g([(0,d["default"])({form:"addAuthor",fields:["name","slug","description"]})],_),t["default"]=(0,s.connect)(function(e){return e},{sendNotification:h.sendNotification,closeModal:h.closeModal})(_)},644:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=n(1),s=r(f),p=n(8),d=n(58),h=r(d),y=n(9),b=n(18),m=o(b),v=n(25),O=n(643),g=r(O),_=n(6),w=r(_),j=n(198),k=r(j),E=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},A=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTitleOptionClick=n.handleTitleOptionClick.bind(n),n.handleAddNewAuthor=n.handleAddNewAuthor.bind(n),n}return l(t,e),u(t,[{key:"handleTitleOptionClick",value:function(e){var t={cover:e.additional.cover,description:e.additional.description,author:e.additional.author};this.props.initializeForm("addBook",t),this.setState({slAuthor:{value:e.additional.author,values:[]}})}},{key:"handleAddNewAuthor",value:function(e){this.props.openModal({title:"添加作者",content:s["default"].createElement(g["default"],{onSave:this.props.onSaveAuthor})}),this.props.initializeForm("addAuthor",{name:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.fields,o=n.title,r=n.author,a=n.authors,i=n.cover,l=n.description,u=n.file,c=t.handleSubmit,f=t.onTitleInputChange,p=t.onAuthorInputChange,d=t.doubanBooksAsOptions,h=t.authorsAsOptions,y=t.onSaveBook,b=a.get([]).map(function(e){return e.value}),m=h.filter(function(e){return b.indexOf(e.value)===-1});return s["default"].createElement("div",null,s["default"].createElement(v.SelectizeInput,{placeholder:"书名",value:o.value,values:[],options:d,onInputChange:function(e){f(e),o.set(e)},useValue:!0,onOptionClick:this.handleTitleOptionClick}),s["default"].createElement(v.SelectizeInput,{placeholder:"作者",value:r.get(),values:a.get([]),options:m,onInputChange:function(e){p(e),r.set(e)},onValuesChange:a.onChange,onAddNewValue:this.handleAddNewAuthor}),s["default"].createElement(v.Input,E({placeholder:"封面图片地址"},i)),s["default"].createElement(v.Textarea,E({placeholder:"描述"},l)),w["default"].isEmpty(u.value)?s["default"].createElement("div",null,s["default"].createElement(k["default"],{url:"/api/books",accept:".txt,.epub",name:"book-file",onSuccess:function(e){u.set(e)},onError:function(t){e.props.sendNotification(t.message,"error")}},s["default"].createElement(v.Button,{color:"white"},"选择书籍")),s["default"].createElement("p",null,"支持 txt 和 epub 格式")):s["default"].createElement("div",null,s["default"].createElement("span",null,u.value.originalname," "),s["default"].createElement(v.Button,{color:"white",onClick:function(){u.set({})}},"重新选择")),s["default"].createElement(v.Button,{onClick:c(function(e){var t=w["default"].omit(e,["author"]);t.authors=w["default"].map(t.authors,"value"),t.file=e.file._id,y(t)})},"添加"))}}]),t}(f.Component);A=C([(0,h["default"])({form:"addBook",fields:["title","author","authors","cover","description","file"],destroyOnUnmount:!0})],A);var P=function(e,t){return{routing:e.routing.locationBeforeTransitions,doubanBooksAsOptions:m.doubanBooksAsOptions("search")(e),authorsAsOptions:m.authorsAsOptions("search")(e)}};t["default"]=(0,p.connect)(P,{sendNotification:y.sendNotification,openModal:y.openModal,initializeForm:y.initializeForm})(A)}});