webpackJsonp([6],{10:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),a=o(r);t["default"]=a["default"]},11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(27),a=o(r),u=n(10),i=o(u),l=n(12),c=o(l),s=n(13),f=o(s);t.Button=a["default"],t.Input=i["default"],t.SelectizeInput=c["default"],t.Textarea=f["default"]},12:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),a=o(r);t["default"]=a["default"]},13:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),a=o(r);t["default"]=a["default"]},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},h=n(18),y=function(e){function t(e){return r(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);return delete t.className,s["default"].createElement("div",{styleName:"input-wrap",className:this.props.className||""},s["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);y=d([(0,p["default"])(h,{allowMultiple:!0})],y),t["default"]=y},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(24),p=o(f),d=n(21),h=o(d),y=n(2),b=o(y),v=n(32),m=o(v),g=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},O=n(20),_=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputWrapClick=n.handleInputWrapClick.bind(n),n}return u(t,e),i(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,m["default"])(this.inputWrap,e.target)||this.setState({showOptions:!1})}},{key:"handleInputWrapClick",value:function(){this.focusInput(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,a=this.props.value||"",u=this.props.options||[],i=o.length>0?0===a.length?16:16*a.length:"100%",l=o.length>0?"":this.props.placeholder,c=(0,h["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return s["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?s["default"].createElement("label",{className:"form-label"},n):null,s["default"].createElement("div",{styleName:c,onClick:this.handleInputWrapClick,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return s["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,s["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),s["default"].createElement("input",{style:{width:i},ref:function(t){e.input=t},value:a,placeholder:l,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==u.length||r)?s["default"].createElement("ul",{styleName:"query-results"},u.map(function(t,n){return t.disabled?s["default"].createElement("li",{key:n,className:"disabled"},t.name):s["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},s["default"].createElement("span",null,t.name))}),r?s["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",s["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(c.Component);_=g([(0,b["default"])(O,{allowMultiple:!0})],_),t["default"]=_},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},h=n(19),y=function(e){function t(e){return r(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),i(t,[{key:"render",value:function(){var e=this;return s["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},s["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);y=d([(0,p["default"])(h,{allowMultiple:!0})],y),t["default"]=y},18:function(e,t){e.exports={"input-wrap":"input-wrap_3dHA3",input:"input_2juBO"}},19:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1 input-wrap_3dHA3",textarea:"textarea_1EdoS"}},20:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},23:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return e===t}function r(e){var t=arguments.length<=1||void 0===arguments[1]?o:arguments[1],n=null,r=null;return function(){for(var o=arguments.length,a=Array(o),u=0;o>u;u++)a[u]=arguments[u];return null!==n&&n.length===a.length&&a.every(function(e,o){return t(e,n[o])})?r:(r=e.apply(void 0,a),n=a,r)}}function a(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+n+"]"))}return t}function u(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;t>r;r++)o[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),u=0;t>u;u++)r[u]=arguments[u];var i=0,l=r.pop(),c=a(r),s=e.apply(void 0,[function(){return i++,l.apply(void 0,arguments)}].concat(o)),f=function(e,t){for(var o=arguments.length,r=Array(o>2?o-2:0),a=2;o>a;a++)r[a-2]=arguments[a];var u=c.map(function(n){return n.apply(void 0,[e,t].concat(r))});return s.apply(void 0,n(u))};return f.resultFunc=l,f.recomputations=function(){return i},f.resetRecomputations=function(){return i=0},f}}function i(){return u(r).apply(void 0,arguments)}function l(e){var t=arguments.length<=1||void 0===arguments[1]?i:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),o=0;e>o;o++)t[o]=arguments[o];return t.reduce(function(e,t,o){return e[n[o]]=t,e},{})})}t.__esModule=!0,t.defaultMemoize=r,t.createSelectorCreator=u,t.createSelector=i,t.createStructuredSelector=l},26:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.common=t.usersSelector=t.booksSelector=t.booksSearchAsOptions=t.authorsAsOptions=t.doubanBooksAsOptions=t.searchBooksSelector=t.queryAuthorsSelector=t.queryDoubanBooksSelector=void 0;var r=n(31);Object.keys(r).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a=n(23),u=o(r),i=t.queryDoubanBooksSelector=function(e){return(0,a.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"doubanBooks",paginationName:"doubanBooks",paginationQuery:e}),function(e){return e})},l=t.queryAuthorsSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"authors",paginationName:"authors",paginationQuery:e})},c=t.searchBooksSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationQuery:e})};t.doubanBooksAsOptions=function(e){return(0,a.createSelector)(i(e),function(e){return e.map(function(e){return{name:e.title,value:e.id,additional:{description:e.summary,cover:e.images.large,author:e.author.join(", ")}}})})},t.authorsAsOptions=function(e){return(0,a.createSelector)(l(e),function(e){return e.map(function(e){return{name:e.name,value:e.id}})})},t.booksSearchAsOptions=function(e){return(0,a.createSelector)(c(e),function(e){return e.map(function(e){return{name:e.title,value:e.id}})})},t.booksSelector=(0,a.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationKey:"default"}),function(e){return e}),t.usersSelector=(0,r.selectPaginatedEntities)({entitiesName:"users",paginationName:"users",paginationKey:"default"});t.common=u},31:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectPaginatedEntities=t.paginationLinkSelector=void 0;var r=n(23),a=n(4),u=o(a),i=function(e){return function(t){return t.entities[e]||{}}},l=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return u["default"].get(n.pagination,e+"."+t+".ids",[])}},c=(t.paginationLinkSelector=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return u["default"].pick(u["default"].get(n.pagination,e+"."+t,{}),["next","last"])}},function(e,t){return function(n){return u["default"].get(n.pagination,[e,"query",t,"ids"],[])}});t.selectPaginatedEntities=function(e){var t=e.entitiesName,n=e.paginationName,o=e.paginationKey,a=e.paginationQuery,u=void 0;return u=a?c(n,a):l(n,o),(0,r.createSelector)(i(t),u,function(e,t){return t.map(function(t){return e[t]})})}},288:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),c=o(l),s=n(6),f=n(68),p=n(8),d=n(4),h=o(d),y=n(70),b=o(y),v=n(34),m=o(v),g=n(290),O=o(g),_=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={addBookFormInitialData:{}},n.handleTitleValueChange=n.handleTitleValueChange.bind(n),n.handleAuthorValueChange=n.handleAuthorValueChange.bind(n),n.addAuthor=n.addAuthor.bind(n),n.addBook=n.addBook.bind(n),n}return u(t,e),i(t,[{key:"addBook",value:function(e){var t=this;b["default"].addBook(e).then(function(e){t.props.sendNotification("添加成功"),t.props.reset("addBook"),t.setState({addBookFormInitialData:{}})},function(e){t.props.sendNotification(e.message,"error")})}},{key:"addAuthor",value:function(e){var t=this;b["default"].addAuthor(e).then(function(e){t.props.sendNotification("添加成功");var n=e.json.ops[0]._id,o=e.json.ops[0].name;t.setState({addBookFormInitialData:{_authorValues:[{name:o,value:n}],_authorValue:""}}),t.props.closeModal()},function(e){t.props.sendNotification(e.message)})}},{key:"handleAuthorValueChange",value:function(e){h["default"].isEmpty(e)||this.props.fetchAuthors({q:e})}},{key:"handleTitleValueChange",value:function(e){h["default"].isEmpty(e)||this.props.searchDoubanBooks(e)}},{key:"render",value:function(){return c["default"].createElement(m["default"],{title:"添加书籍"},c["default"].createElement("h1",{className:"page-title"},"添加书籍"),c["default"].createElement(O["default"],{onTitleInputChange:this.handleTitleValueChange,onAuthorInputChange:this.handleAuthorValueChange,onSaveAuthor:this.addAuthor,initialData:this.state.addBookFormInitialData,onSaveBook:this.addBook}))}}]),t}(l.Component),k=function(e){return{notification:e.components.notification,elements:e.elements}};t["default"]=(0,s.connect)(k,{sendNotification:p.sendNotification,changeValue:p.changeValue,openModal:p.openModal,searchDoubanBooks:p.searchDoubanBooks,closeModal:p.closeModal,fetchAuthors:p.fetchAuthors,reset:f.reset})(_)},289:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(6),p=n(68),d=n(8),h=n(10),y=o(h),b=n(158),v=o(b),m=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},O=function(e){function t(e){return r(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.fields,n=t.name,o=t.slug,r=t.description,a=e.handleSubmit,u=e.closeModal,i=e.onSave;return s["default"].createElement("div",null,s["default"].createElement(y["default"],m({placeholder:"名字"},n)),s["default"].createElement(y["default"],m({placeholder:"唯一标识"},o)),s["default"].createElement(y["default"],m({placeholder:"描述"},r)),s["default"].createElement(v["default"],{onConfirm:a(function(e){i(e)}),onCancel:u}))}}]),t}(c.Component);O=g([(0,p.reduxForm)({form:"addAuthor",fields:["name","slug","description"]})],O),t["default"]=(0,f.connect)(function(e,t){return{initialValues:t.initialData,routing:e.routing.locationBeforeTransitions}},{sendNotification:d.sendNotification,closeModal:d.closeModal})(O)},290:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),f=r(s),p=n(6),d=n(68),h=n(8),y=n(26),b=o(y),v=n(10),m=r(v),g=n(13),O=r(g),_=n(11),k=n(289),w=r(k),j=n(4),C=r(j),S=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},E=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},P=["_titleValue","_titleValues","_authorValue","_authorValues","cover","description","content"],A=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.handleTitleOptionClick=n.handleTitleOptionClick.bind(n),n}return i(t,e),l(t,[{key:"handleTitleOptionClick",value:function(e){var t=this.props.fields,n=(t._titleValue,t._titleValues,t._authorValue),o=t.cover,r=t.description;o.onChange(e.additional.cover),n.onChange(e.additional.author),r.onChange(e.additional.description)}},{key:"render",value:function(){var e=this,t=this.props,n=t.fields,o=n._titleValue,r=n._titleValues,a=n._authorValue,u=n._authorValues,i=n.cover,l=n.description,c=n.content,s=t.handleSubmit,p=t.onTitleInputChange,d=t.onAuthorInputChange,h=t.doubanBooksAsOptions,y=t.authorsAsOptions,b=t.onSaveAuthor,v=t.onSaveBook;return f["default"].createElement("div",null,f["default"].createElement(_.SelectizeInput,{placeholder:"书名",onInputChange:function(e){p(e),o.onChange(e)},value:o.value,onValuesChange:function(e){r.onChange(e)},options:h,values:r.value||[],onOptionClick:this.handleTitleOptionClick}),f["default"].createElement(_.SelectizeInput,{placeholder:"作者",onInputChange:function(e){d(e),a.onChange(e)},value:a.value,onValuesChange:function(e){u.onChange(e)},options:y,values:u.value||[],onAddNewValue:function(t){e.props.openModal({title:"添加作者",content:f["default"].createElement(w["default"],{initialData:{name:t},onSave:b})})}}),f["default"].createElement(m["default"],S({placeholder:"封面图片地址"},i)),f["default"].createElement(O["default"],S({placeholder:"描述"},l)),f["default"].createElement(O["default"],S({placeholder:"在此粘贴书籍内容 (markdown 格式)"},c)),f["default"].createElement(_.Button,{onClick:s(function(e){var t=C["default"].pick(e,["cover","description","content"]);t=C["default"].assign({},t,{title:C["default"].get(r,"value[0].name",""),authors:Array.isArray(u.value)?u.value.map(function(e){return e.value}):[]}),v(t)})},"添加"))}}]),t}(s.Component);A=E([(0,d.reduxForm)({form:"addBook",fields:P})],A);var M=function(e,t){var n=C["default"].get(e.form,"addBook._titleValue.value",""),o=C["default"].get(e.form,"addBook._authorValue.value","");return{initialValues:t.initialData,routing:e.routing.locationBeforeTransitions,doubanBooksAsOptions:b.doubanBooksAsOptions(n)(e),authorsAsOptions:b.authorsAsOptions(o)(e)}};t["default"]=(0,p.connect)(M,{sendNotification:h.sendNotification,openModal:h.openModal})(A)}});