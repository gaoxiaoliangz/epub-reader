webpackJsonp([6],{19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),u=o(r);t["default"]=u["default"]},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(45),u=o(r),i=n(19),a=o(i),l=n(23),s=o(l),c=n(24),f=o(c);t.Button=u["default"],t.Input=a["default"],t.SelectizeInput=s["default"],t.Textarea=f["default"]},23:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),u=o(r);t["default"]=u["default"]},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=o(r);t["default"]=u["default"]},26:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),f=n(4),p=o(f),d=n(8),y=o(d),h=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},b=n(30),m=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);delete t.className;var n=this.props,o=n.error,r=n.touched,u=o&&r;return c["default"].createElement("div",{styleName:(0,y["default"])({"input-wrap":!u,"input-wrap--error":u}),className:this.props.className||""},c["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}),u&&c["default"].createElement("div",{styleName:"error-msg"},o))}}]),t}(s.Component);m=h([(0,p["default"])(b,{allowMultiple:!0})],m),t["default"]=m},27:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),f=n(34),p=o(f),d=n(8),y=o(d),h=n(4),b=o(h),m=n(46),v=o(m),O=n(5),g=o(O),w=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},_=n(31),j=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n}return i(t,e),a(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.hideOptions()}},{key:"showOptions",value:function(){this.setState({showOptions:!0})}},{key:"hideOptions",value:function(){this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||0===this.props.values.length||this.removeValue(-1)}},{key:"handleInputChange",value:function(e){this.props.onInputChange(e.target.value),0!==(this.props.options||[]).length&&this.showOptions()}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.inputWrap===e.target?(this.focusInput(),this.showOptions()):this.hideOptions()}},{key:"componentWillReceiveProps",value:function(e){var t=0!==(e.options||[]).length&&0===(this.props.options||[]).length;t&&this.state.focus&&this.showOptions()}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,u=t.omitSelectedValuesFromOptions,i=this.props.value||"",a=this.props.options||[],l=o.length>0?0===i.length?16:16*i.length:"100%",s=o.length>0?"":this.props.placeholder,f=a.filter(function(e){if(u){var t=g["default"].map(o,"value");return-1===t.indexOf(e.value)}return!0}),d=(0,y["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return c["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?c["default"].createElement("label",{className:"form-label"},n):null,c["default"].createElement("div",{styleName:d,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return c["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,c["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),c["default"].createElement("input",{style:{width:l},ref:function(t){e.input=t},value:i,placeholder:s,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:this.handleInputChange,onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==f.length||r)?c["default"].createElement("ul",{styleName:"query-results"},f.map(function(t,n){return t.disabled?c["default"].createElement("li",{key:n,className:"disabled"},t.name):c["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},c["default"].createElement("span",null,t.name))}),r?c["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",c["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(s.Component);j=w([(0,b["default"])(_,{allowMultiple:!0})],j),j.defaultProps={omitSelectedValuesFromOptions:!0},t["default"]=j},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),f=n(4),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},y=n(29),h=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},c["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(s.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},29:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1",textarea:"textarea_1EdoS"}},30:function(e,t){e.exports={"input-wrap":"input-wrap_13Bbk","input-wrap--error":"input-wrap--error_2SJA1",input:"input_75rlN","error-msg":"error-msg_3Efzi"}},31:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},174:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),s=o(l),c=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),a(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s["default"].createElement("div",{className:"tab"},this.props.children)}}]),t}(l.Component);t["default"]=c},175:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),f=n(8),p=o(f),d=n(4),y=o(d),h=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},m=n(210),v=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={active:n.props.defaultActive},n.handleTabClick=n.handleTabClick.bind(n),n}return i(t,e),a(t,[{key:"handleTabClick",value:function(e){this.setState({active:e}),this.props.onTabSwitch&&this.props.onTabSwitch(e)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.style;return c["default"].createElement("div",h({className:"tabs"},t?{style:t}:null),c["default"].createElement("div",{styleName:"tabs-header"},c["default"].createElement("ul",null,this.props.children.map(function(t,n){return c["default"].createElement("li",{styleName:(0,p["default"])({active:n===e.state.active}),key:n,onClick:e.handleTabClick.bind(e,n)},t.props.title)}))),this.props.children.filter(function(t,n){return n===e.state.active}).map(function(e){return e.props.children})[0])}}]),t}(s.Component);v=b([(0,y["default"])(m,{allowMultiple:!0})],v),v.defaultProps={defaultActive:0},t["default"]=v},176:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=t.Tab=void 0;var r=n(174),u=o(r),i=n(175),a=o(i);t.Tab=u["default"],t.Tabs=a["default"],t["default"]=u["default"]},210:function(e,t){e.exports={"tabs-header":"tabs-header_y5nSI",active:"active_3bbAo"}},565:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=_.sessionUserId(e);return{newestBooks:e.pagination.books.newest?e.pagination.books.newest.ids.map(function(t){return e.entities.books[t]}):[],profile:_.common.entity("profiles",n)(e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(1),p=r(f),d=n(13),y=n(14),h=n(20),b=n(176),m=n(87),v=r(m),O=n(4),g=r(O),w=n(39),_=o(w),j=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},k=n(809),P=function(e){function t(e){return u(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.fetchProfile()}},{key:"render",value:function(){var e=this,t=this.props.profile.username;return p["default"].createElement(v["default"],null,p["default"].createElement("div",{styleName:"profile"},p["default"].createElement("div",{styleName:"page-header"},p["default"].createElement("div",{styleName:"user-avatar"},p["default"].createElement("img",{src:"https://img3.doubanio.com/icon/ul43646706-43.jpg",alt:"user_avatar"})),p["default"].createElement("span",{styleName:"username"},t),p["default"].createElement("span",{styleName:"tagline"},"暂无签名"),p["default"].createElement(h.Button,{onClick:function(){e.props.sendNotification("该功能尚不可用","warning")},styleName:"edit"},"编辑")),p["default"].createElement(b.Tabs,null,p["default"].createElement(b.Tab,{title:"收藏"},"暂无数据"),p["default"].createElement(b.Tab,{title:"读过"},"暂无数据"))))}}]),t}(f.Component);P=j([(0,g["default"])(k)],P),t["default"]=(0,d.connect)(l,{sendNotification:y.sendNotification,fetchCollections:y.fetchCollections,fetchProfile:y.fetchProfile})(P)},809:function(e,t){e.exports={profile:"profile_28CdI","page-header":"page-header_Paj4H",username:"username_2WC6D",edit:"edit_3MJW3","user-avatar":"user-avatar_2vc2X",tagline:"tagline_1sqmx"}}});