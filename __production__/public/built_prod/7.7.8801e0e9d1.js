webpackJsonp([7],{19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),u=o(r);t["default"]=u["default"]},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(46),u=o(r),i=n(19),a=o(i),l=n(23),s=o(l),c=n(24),f=o(c);t.Button=u["default"],t.Input=a["default"],t.SelectizeInput=s["default"],t.Textarea=f["default"]},23:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),u=o(r);t["default"]=u["default"]},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=o(r);t["default"]=u["default"]},26:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(4),p=o(f),d=n(8),h=o(d),y=function(e,t,n,o){var r,u=arguments.length,i=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(u<3?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},m=n(30),b=function(e){function t(e){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);delete t.className;var n=this.props,o=n.error,r=n.touched,u=o&&r;return c["default"].createElement("div",{styleName:(0,h["default"])({"input-wrap":!u,"input-wrap--error":u}),className:this.props.className||""},c["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}),u&&c["default"].createElement("div",{styleName:"error-msg"},o))}}]),t}(s.Component);b=y([(0,p["default"])(m,{allowMultiple:!0})],b),t["default"]=b},27:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(35),p=o(f),d=n(8),h=o(d),y=n(4),m=o(y),b=n(47),v=o(b),O=n(5),g=o(O),_=function(e,t,n,o){var r,u=arguments.length,i=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(u<3?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},w=n(31),j=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n}return i(t,e),a(t,[{key:"addValue",value:function(e){var t=this;this.props.useValue?(this.props.onInputChange(e.name),this.hideOptions()):(this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),setTimeout(function(){t.clearInputValue()},1),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.hideOptions())}},{key:"showOptions",value:function(){this.setState({showOptions:!0})}},{key:"hideOptions",value:function(){this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;e===-1?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||0===this.props.values.length||this.removeValue(-1)}},{key:"handleInputChange",value:function(e){this.props.onInputChange(e.target.value),0!==(this.props.options||[]).length&&this.showOptions()}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.inputWrap===e.target?(this.focusInput(),this.showOptions()):this.hideOptions()}},{key:"componentWillReceiveProps",value:function(e){var t=0!==(e.options||[]).length&&0===(this.props.options||[]).length;t&&this.state.focus&&this.showOptions()}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,u=t.omitSelectedValuesFromOptions,i=this.props.value||"",a=this.props.options||[],l=o.length>0?0===i.length?16:16*i.length:"100%",s=o.length>0?"":this.props.placeholder,f=a.filter(function(e){if(u){var t=g["default"].map(o,"value");return t.indexOf(e.value)===-1}return!0}),d=(0,h["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return c["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?c["default"].createElement("label",{className:"form-label"},n):null,c["default"].createElement("div",{styleName:d,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return c["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,c["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),c["default"].createElement("input",{style:{width:l},ref:function(t){e.input=t},value:i,placeholder:s,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:this.handleInputChange,onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==f.length||r)?c["default"].createElement("ul",{styleName:"query-results"},f.map(function(t,n){return t.disabled?c["default"].createElement("li",{key:n,className:"disabled"},t.name):c["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},c["default"].createElement("span",null,t.name))}),r?c["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",c["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(s.Component);j=_([(0,m["default"])(w,{allowMultiple:!0})],j),j.defaultProps={omitSelectedValuesFromOptions:!0},t["default"]=j},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(4),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,i=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(u<3?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},h=n(29),y=function(e){function t(e){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},c["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(s.Component);y=d([(0,p["default"])(h,{allowMultiple:!0})],y),t["default"]=y},29:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1",textarea:"textarea_1EdoS"}},30:function(e,t){e.exports={"input-wrap":"input-wrap_13Bbk","input-wrap--error":"input-wrap--error_2SJA1",input:"input_75rlN","error-msg":"error-msg_3Efzi"}},31:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},76:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.form=void 0;var r=n(91),u=o(r);t.form=u["default"]},91:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=n(13),d=n(5),h=r(d),y=n(10),m=o(y),b=n(32),v=o(b),O=m.form,g=(function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(f.Component),function(e,t,n){if(n){var o=n(t);if(!h["default"].isEmpty(o)){var r=h["default"].mapValues(o,function(e){return{error:e}});return{fields:h["default"].merge({},e,r),hasError:!0}}}return{fields:e,hasError:!1}}),_=function(e){var t=e.fields,n=e.form,o=e.validate,r=e.destroyOnUnmount;return function(e){var d=function(p){function d(){return i(this,d),a(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return l(d,p),c(d,[{key:"createField",value:function(e,t){var o=this.props.change,r=function(e){var r=e;"object"===("undefined"==typeof e?"undefined":s(e))&&e.target&&(r=e.target.value||""),o(n,t,r,!1,!1)},i={onChange:function(e){return r(e)}};return u({},t,{get:function(t){return e||t||""},set:i.onChange,value:e,onChange:i.onChange,events:i})}},{key:"componentDidMount",value:function(){var e=this.props.defineField;t.forEach(function(t){e(n,t)})}},{key:"componentWillUnmount",value:function(){r&&this.props.destroy(n)}},{key:"render",value:function(){var r=this,u=void 0,i=this.props,a=i.touch,l=i.formValues,s=i.formDefinition,c=i.formMeta,p=h["default"].map(t,function(e){var t=l[e]||"";return r.createField(t,e)});p.forEach(function(e){u=h["default"].assign({},u,e)});var d={};s.forEach(function(e){var t=e.name;d[t]=l[t]});var y=g(u,d,o),m=y.fields,b=y.hasError;u=m,u=h["default"].merge({},u,c);var v=function(e){return function(t){a(n,s.map(function(e){return e.name})),b||e(d)}};return(0,f.createElement)(e,h["default"].assign({},this.props,{fields:u,handleSubmit:v}))}}]),d}(f.Component);return(0,p.connect)(function(e){return{form:v.form.fullForm(n)(e),formValues:v.form.formValues(n)(e),formDefinition:v.form.formDefinition(n)(e),formMeta:v.form.formMeta(n)(e)}},O)(d)}};t["default"]=_},547:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),s=o(l),c=n(13),f=n(10),p=n(5),d=o(p),h=n(66),y=o(h),m=n(45),b=o(m),v=n(549),O=o(v),g=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={slData:{author:{}}},n.handleTitleValueChange=n.handleTitleValueChange.bind(n),n.handleAuthorValueChange=n.handleAuthorValueChange.bind(n),n.addAuthor=n.addAuthor.bind(n),n.addBook=n.addBook.bind(n),n}return i(t,e),a(t,[{key:"addBook",value:function(e){var t=this;y["default"].addBook(e).then(function(e){t.props.sendNotification("添加成功"),t.props.reset("addBook")},function(e){t.props.sendNotification(e.message,"error",0)})}},{key:"addAuthor",value:function(e){var t=this;y["default"].addAuthor(e).then(function(e){t.props.sendNotification("添加成功");var n=e.json.ops[0]._id,o=e.json.ops[0].name;t.props.initialize("addBook",{authors:[{name:o,value:n}],author:""}),t.props.closeModal()},function(e){t.props.sendNotification(e.message,"error")})}},{key:"handleAuthorValueChange",value:function(e){d["default"].isEmpty(e)||this.props.fetchAuthors({q:e})}},{key:"handleTitleValueChange",value:function(e){d["default"].isEmpty(e)||this.props.searchDoubanBooks(e)}},{key:"render",value:function(){return s["default"].createElement(b["default"],{title:"添加书籍"},s["default"].createElement("h1",{className:"page-title"},"添加书籍"),s["default"].createElement(O["default"],{onTitleInputChange:this.handleTitleValueChange,onAuthorInputChange:this.handleAuthorValueChange,onSaveAuthor:this.addAuthor,onSaveBook:this.addBook}))}}]),t}(l.Component),_=function(e){return{notification:e.components.notification,elements:e.elements}};t["default"]=(0,c.connect)(_,{sendNotification:f.sendNotification,openModal:f.openModal,searchDoubanBooks:f.searchDoubanBooks,closeModal:f.closeModal,fetchAuthors:f.fetchAuthors,reset:f.reset,initialize:f.initialize})(g)},548:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(13),p=n(76),d=n(10),h=n(19),y=o(h),m=n(271),b=o(m),v=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O=function(e,t,n,o){var r,u=arguments.length,i=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(u<3?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},g=function(e){function t(e){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=t.name,o=t.slug,r=t.description,u=e.handleSubmit,i=e.closeModal,a=e.onSave;return c["default"].createElement("div",null,c["default"].createElement(y["default"],v({placeholder:"名字"},n)),c["default"].createElement(y["default"],v({placeholder:"唯一标识"},o)),c["default"].createElement(y["default"],v({placeholder:"描述"},r)),c["default"].createElement(b["default"],{onConfirm:u(function(e){a(e)}),onCancel:i}))}}]),t}(s.Component);g=O([(0,p.form)({form:"addAuthor",fields:["name","slug","description"]})],g),t["default"]=(0,f.connect)(function(e){return e},{sendNotification:d.sendNotification,closeModal:d.closeModal})(g)},549:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),f=r(c),p=n(13),d=n(76),h=n(10),y=n(32),m=o(y),b=n(19),v=r(b),O=n(24),g=r(O),_=n(20),w=n(548),j=r(w),k=n(5),C=r(k),E=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},P=function(e,t,n,o){var r,u=arguments.length,i=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(u<3?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},S=function(e){function t(e){u(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTitleOptionClick=n.handleTitleOptionClick.bind(n),n.handleAddNewAuthor=n.handleAddNewAuthor.bind(n),n}return a(t,e),l(t,[{key:"handleTitleOptionClick",value:function(e){var t={cover:e.additional.cover,description:e.additional.description,author:e.additional.author};this.props.initialize("addBook",t),this.setState({slAuthor:{value:e.additional.author,values:[]}})}},{key:"handleAddNewAuthor",value:function(e){this.props.openModal({title:"添加作者",content:f["default"].createElement(j["default"],{onSave:this.props.onSaveAuthor})}),this.props.initialize("addAuthor",{name:e})}},{key:"render",value:function(){var e=this.props,t=e.fields,n=t.title,o=t.author,r=t.authors,u=t.cover,i=t.description,a=t.content,l=e.handleSubmit,s=e.onTitleInputChange,c=e.onAuthorInputChange,p=e.doubanBooksAsOptions,d=e.authorsAsOptions,h=e.onSaveBook,y=r.get([]).map(function(e){return e.value}),m=d.filter(function(e){return y.indexOf(e.value)===-1});return f["default"].createElement("div",null,f["default"].createElement(_.SelectizeInput,{placeholder:"书名",value:n.value,values:[],options:p,onInputChange:function(e){s(e),n.set(e)},useValue:!0,onOptionClick:this.handleTitleOptionClick}),f["default"].createElement(_.SelectizeInput,{placeholder:"作者",value:o.get(),values:r.get([]),options:m,onInputChange:function(e){c(e),o.set(e)},onValuesChange:r.onChange,onAddNewValue:this.handleAddNewAuthor}),f["default"].createElement(v["default"],E({placeholder:"封面图片地址"},u)),f["default"].createElement(g["default"],E({placeholder:"描述"},i)),f["default"].createElement(g["default"],E({placeholder:"在此粘贴书籍内容 (markdown 格式)"},a)),f["default"].createElement(_.Button,{onClick:l(function(e){var t=C["default"].omit(e,["author"]);t.authors=C["default"].map(t.authors,"value"),h(t)})},"添加"))}}]),t}(c.Component);S=P([(0,d.form)({form:"addBook",fields:["title","author","authors","cover","description","content"],destroyOnUnmount:!0})],S);var M=function(e,t){return{routing:e.routing.locationBeforeTransitions,doubanBooksAsOptions:m.doubanBooksAsOptions("search")(e),authorsAsOptions:m.authorsAsOptions("search")(e)}};t["default"]=(0,p.connect)(M,{sendNotification:h.sendNotification,openModal:h.openModal,initialize:h.initialize})(S)}});