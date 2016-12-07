webpackJsonp([8],{66:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.form=void 0;var r=n(82),a=o(r);t.form=a["default"]},82:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),p=n(8),d=n(5),h=r(d),y=n(6),b=o(y),m=n(14),v=o(m),O=b.form,g=(function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(s.Component),function(e,t,n){if(n){var o=n(t);if(!h["default"].isEmpty(o)){var r=h["default"].mapValues(o,function(e){return{error:e}});return{fields:h["default"].merge({},e,r),hasError:!0}}}return{fields:e,hasError:!1}}),_=function(e){var t=e.fields,n=e.form,o=e.validate,r=e.destroyOnUnmount;return function(e){var d=function(p){function d(){return i(this,d),u(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return l(d,p),c(d,[{key:"createField",value:function(e,t){var o=this.props.change,r=function(e){var r=e;"object"===("undefined"==typeof e?"undefined":f(e))&&e.target&&(r=e.target.value||""),o(n,t,r,!1,!1)},i={onChange:function(e){return r(e)}};return a({},t,{get:function(t){return e||t||""},set:i.onChange,value:e,onChange:i.onChange,events:i})}},{key:"componentDidMount",value:function(){var e=this.props.defineField;t.forEach(function(t){e(n,t)})}},{key:"componentWillUnmount",value:function(){r&&this.props.destroy(n)}},{key:"render",value:function(){var r=this,a=void 0,i=this.props,u=i.touch,l=i.formValues,f=i.formDefinition,c=i.formMeta,p=h["default"].map(t,function(e){var t=l[e]||"";return r.createField(t,e)});p.forEach(function(e){a=h["default"].assign({},a,e)});var d={};f.forEach(function(e){var t=e.name;d[t]=l[t]});var y=g(a,d,o),b=y.fields,m=y.hasError;a=b,a=h["default"].merge({},a,c);var v=function(e){return function(t){u(n,f.map(function(e){return e.name})),m||e(d)}};return(0,s.createElement)(e,h["default"].assign({},this.props,{fields:a,handleSubmit:v}))}}]),d}(s.Component);return(0,p.connect)(function(e){return{form:v.form.fullForm(n)(e),formValues:v.form.formValues(n)(e),formDefinition:v.form.formDefinition(n)(e),formMeta:v.form.formMeta(n)(e)}},O)(d)}};t["default"]=_},172:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),f=o(l),c=n(108),s=o(c),p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:null},n.handleFileChange=n.handleFileChange.bind(n),n}return i(t,e),u(t,[{key:"handleFileChange",value:function(e){var t=this.props,n=t.url,o=t.onComplete,r=t.onSuccess,a=t.onError,i=e.target.files,u=new FormData;i.length>1?s["default"].each(i,function(e,t){u.append(e,t)}):u.append("file",i[0]),s["default"].ajax({url:n,type:"POST",data:u,cache:!1,processData:!1,contentType:!1,xhrFields:{withCredentials:!0},complete:function(e){o&&o(e)},success:function(e,t,n){r&&r(e)},error:function(e,t,n){a&&a(e.responseJSON)}})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.url,o=t.accept,r=t.noAjax,a=t.children,i=t.name,u=t.multiple;return f["default"].createElement("div",{className:"file-trigger",onClick:function(t){r||(0,s["default"])(e.fileInput).click()},style:{display:"inline-block"}},f["default"].createElement("form",{action:n,method:"post",encType:"multipart/form-data",style:r?{}:{display:"none"}},f["default"].createElement("input",{multiple:u,type:"file",name:i||"file",id:"upload-file",value:r?void 0:"",ref:function(t){e.fileInput=t},onChange:function(t){r||e.handleFileChange(t)},accept:o||".*"}),f["default"].createElement("input",{type:"submit",value:"提交"})),a)}}]),t}(l.Component);t["default"]=p},173:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(172),a=o(r);t["default"]=a["default"]},567:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),f=o(l),c=n(8),s=n(6),p=n(5),d=o(p),h=n(56),y=o(h),b=n(38),m=o(b),v=n(569),O=o(v),g=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={slData:{author:{}}},n.handleTitleValueChange=n.handleTitleValueChange.bind(n),n.handleAuthorValueChange=n.handleAuthorValueChange.bind(n),n.addAuthor=n.addAuthor.bind(n),n.addBook=n.addBook.bind(n),n}return i(t,e),u(t,[{key:"addBook",value:function(e){var t=this;y["default"].addBook(e).then(function(e){t.props.sendNotification("添加成功"),t.props.reset("addBook")},function(e){t.props.sendNotification(e.message,"error",0)})}},{key:"addAuthor",value:function(e){var t=this;y["default"].addAuthor(e).then(function(e){t.props.sendNotification("添加成功");var n=e.json.ops[0]._id,o=e.json.ops[0].name;t.props.initialize("addBook",{authors:[{name:o,value:n}],author:""}),t.props.closeModal()},function(e){t.props.sendNotification(e.message,"error")})}},{key:"handleAuthorValueChange",value:function(e){d["default"].isEmpty(e)||this.props.fetchAuthors({q:e})}},{key:"handleTitleValueChange",value:function(e){d["default"].isEmpty(e)||this.props.searchDoubanBooks(e)}},{key:"render",value:function(){return f["default"].createElement(m["default"],{title:"添加书籍"},f["default"].createElement("h1",{className:"page-title"},"添加书籍"),f["default"].createElement(O["default"],{onTitleInputChange:this.handleTitleValueChange,onAuthorInputChange:this.handleAuthorValueChange,onSaveAuthor:this.addAuthor,onSaveBook:this.addBook}))}}]),t}(l.Component),_=function(e){return{notification:e.components.notification,elements:e.elements}};t["default"]=(0,c.connect)(_,{sendNotification:s.sendNotification,openModal:s.openModal,searchDoubanBooks:s.searchDoubanBooks,closeModal:s.closeModal,fetchAuthors:s.fetchAuthors,reset:s.reset,initialize:s.initialize})(g)},568:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=n(1),c=o(f),s=n(8),p=n(66),d=n(6),h=n(274),y=o(h),b=n(276),m=o(b),v=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},g=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=t.name,o=t.slug,r=t.description,a=e.handleSubmit,i=e.closeModal,u=e.onSave;return c["default"].createElement("div",null,c["default"].createElement(y["default"],v({placeholder:"名字"},n)),c["default"].createElement(y["default"],v({placeholder:"唯一标识"},o)),c["default"].createElement(y["default"],v({placeholder:"描述"},r)),c["default"].createElement(m["default"],{onConfirm:a(function(e){u(e)}),onCancel:i}))}}]),t}(f.Component);g=O([(0,p.form)({form:"addAuthor",fields:["name","slug","description"]})],g),t["default"]=(0,s.connect)(function(e){return e},{sendNotification:d.sendNotification,closeModal:d.closeModal})(g)},569:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),s=r(c),p=n(8),d=n(66),h=n(6),y=n(14),b=o(y),m=n(27),v=n(568),O=r(v),g=n(5),_=r(g),w=n(173),j=r(w),E=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},C=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTitleOptionClick=n.handleTitleOptionClick.bind(n),n.handleAddNewAuthor=n.handleAddNewAuthor.bind(n),n}return u(t,e),l(t,[{key:"handleTitleOptionClick",value:function(e){var t={cover:e.additional.cover,description:e.additional.description,author:e.additional.author};this.props.initialize("addBook",t),this.setState({slAuthor:{value:e.additional.author,values:[]}})}},{key:"handleAddNewAuthor",value:function(e){this.props.openModal({title:"添加作者",content:s["default"].createElement(O["default"],{onSave:this.props.onSaveAuthor})}),this.props.initialize("addAuthor",{name:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.fields,o=n.title,r=n.author,a=n.authors,i=n.cover,u=n.description,l=n.file,f=t.handleSubmit,c=t.onTitleInputChange,p=t.onAuthorInputChange,d=t.doubanBooksAsOptions,h=t.authorsAsOptions,y=t.onSaveBook,b=a.get([]).map(function(e){return e.value}),v=h.filter(function(e){return b.indexOf(e.value)===-1});return s["default"].createElement("div",null,s["default"].createElement(m.SelectizeInput,{placeholder:"书名",value:o.value,values:[],options:d,onInputChange:function(e){c(e),o.set(e)},useValue:!0,onOptionClick:this.handleTitleOptionClick}),s["default"].createElement(m.SelectizeInput,{placeholder:"作者",value:r.get(),values:a.get([]),options:v,onInputChange:function(e){p(e),r.set(e)},onValuesChange:a.onChange,onAddNewValue:this.handleAddNewAuthor}),s["default"].createElement(m.Input,E({placeholder:"封面图片地址"},i)),s["default"].createElement(m.Textarea,E({placeholder:"描述"},u)),_["default"].isEmpty(l.value)?s["default"].createElement("div",null,s["default"].createElement(j["default"],{url:"/api/books",accept:".txt,.epub",name:"book-file",onSuccess:function(e){l.set(e)},onError:function(t){e.props.sendNotification(t.message,"error")}},s["default"].createElement(m.Button,{color:"white"},"选择书籍")),s["default"].createElement("p",null,"支持 txt 和 epub 格式")):s["default"].createElement("div",null,s["default"].createElement("span",null,l.value.originalname," "),s["default"].createElement(m.Button,{color:"white",onClick:function(){l.set({})}},"重新选择")),s["default"].createElement(m.Button,{onClick:f(function(e){var t=_["default"].omit(e,["author"]);t.authors=_["default"].map(t.authors,"value"),t.file=e.file._id,y(t)})},"添加"))}}]),t}(c.Component);C=k([(0,d.form)({form:"addBook",fields:["title","author","authors","cover","description","file"],destroyOnUnmount:!0})],C);var P=function(e,t){return{routing:e.routing.locationBeforeTransitions,doubanBooksAsOptions:b.doubanBooksAsOptions("search")(e),authorsAsOptions:b.authorsAsOptions("search")(e)}};t["default"]=(0,p.connect)(P,{sendNotification:h.sendNotification,openModal:h.openModal,initialize:h.initialize})(C)}});