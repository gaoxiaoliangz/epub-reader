webpackJsonp([2],{19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),u=o(r);t["default"]=u["default"]},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(45),u=o(r),i=n(19),l=o(i),a=n(23),c=o(a),s=n(24),f=o(s);t.Button=u["default"],t.Input=l["default"],t.SelectizeInput=c["default"],t.Textarea=f["default"]},23:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),u=o(r);t["default"]=u["default"]},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=o(r);t["default"]=u["default"]},26:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(4),p=o(f),d=n(8),y=o(d),h=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},b=n(30),m=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);delete t.className;var n=this.props,o=n.error,r=n.touched,u=o&&r;return s["default"].createElement("div",{styleName:(0,y["default"])({"input-wrap":!u,"input-wrap--error":u}),className:this.props.className||""},s["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}),u&&s["default"].createElement("div",{styleName:"error-msg"},o))}}]),t}(c.Component);m=h([(0,p["default"])(b,{allowMultiple:!0})],m),t["default"]=m},27:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(34),p=o(f),d=n(8),y=o(d),h=n(4),b=o(h),m=n(46),v=o(m),O=n(5),_=o(O),w=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},g=n(31),k=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n}return i(t,e),l(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.hideOptions()}},{key:"showOptions",value:function(){this.setState({showOptions:!0})}},{key:"hideOptions",value:function(){this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||0===this.props.values.length||this.removeValue(-1)}},{key:"handleInputChange",value:function(e){this.props.onInputChange(e.target.value),0!==(this.props.options||[]).length&&this.showOptions()}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.inputWrap===e.target?(this.focusInput(),this.showOptions()):this.hideOptions()}},{key:"componentWillReceiveProps",value:function(e){var t=0!==(e.options||[]).length&&0===(this.props.options||[]).length;t&&this.state.focus&&this.showOptions()}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,u=t.omitSelectedValuesFromOptions,i=this.props.value||"",l=this.props.options||[],a=o.length>0?0===i.length?16:16*i.length:"100%",c=o.length>0?"":this.props.placeholder,f=l.filter(function(e){if(u){var t=_["default"].map(o,"value");return-1===t.indexOf(e.value)}return!0}),d=(0,y["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return s["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?s["default"].createElement("label",{className:"form-label"},n):null,s["default"].createElement("div",{styleName:d,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return s["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,s["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),s["default"].createElement("input",{style:{width:a},ref:function(t){e.input=t},value:i,placeholder:c,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:this.handleInputChange,onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==f.length||r)?s["default"].createElement("ul",{styleName:"query-results"},f.map(function(t,n){return t.disabled?s["default"].createElement("li",{key:n,className:"disabled"},t.name):s["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},s["default"].createElement("span",null,t.name))}),r?s["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",s["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(c.Component);k=w([(0,b["default"])(g,{allowMultiple:!0})],k),k.defaultProps={omitSelectedValuesFromOptions:!0},t["default"]=k},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(4),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},y=n(29),h=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this;return s["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},s["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},29:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1",textarea:"textarea_1EdoS"}},30:function(e,t){e.exports={"input-wrap":"input-wrap_13Bbk","input-wrap--error":"input-wrap--error_2SJA1",input:"input_75rlN","error-msg":"error-msg_3Efzi"}},31:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},61:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(4),p=o(f),d=n(8),y=o(d),h=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},b=n(67),m=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.center,o=(0,y["default"])({"loading-wrap--center":n,"loading-wrap":!n});return s["default"].createElement("div",{styleName:o},s["default"].createElement("span",{styleName:"text-loading"},t))}}]),t}(c.Component);m=h([(0,p["default"])(b)],m),m.defaultProps={text:"加载中 ..."},t["default"]=m},62:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(61),u=o(r);t["default"]=u["default"]},67:function(e,t){e.exports={"text-loading":"text-loading_3efqh","loading-wrap":"loading-wrap_htyYz","loading-wrap--center":"loading-wrap--center_3PEIh"}},81:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(18),p=n(84),d=o(p),y=n(4),h=o(y),b=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},m=n(97),v=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showPopup:!1},n.showPopup=n.showPopup.bind(n),n.hidePopup=n.hidePopup.bind(n),n}return i(t,e),l(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,n=e.description,o=e.cover;return s["default"].createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},s["default"].createElement(f.Link,{to:"/book/"+this.props.id},o&&s["default"].createElement("div",{styleName:"book-cover"},s["default"].createElement("img",{src:this.props.cover})),s["default"].createElement("div",{styleName:"book-meta"},s["default"].createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),s["default"].createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&s["default"].createElement("span",{styleName:"book-desc"},n||"空"))),this.state.showPopup&&!this.props.disablePopup&&s["default"].createElement(d["default"],{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(c.Component);v=b([(0,h["default"])(m,{allowMultiple:!0})],v),t["default"]=v},82:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(81),u=o(r);t["default"]=u["default"]},83:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(20),p=n(4),d=o(p),y=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},h=n(98),b=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.author,n=e.title,o=e.description,r=e.bookId;return s["default"].createElement("div",{styleName:"popup"},s["default"].createElement("div",{styleName:"header"},s["default"].createElement("h2",{styleName:"title"},n),s["default"].createElement("p",{styleName:"author"},t),s["default"].createElement(f.Button,{color:"blue",to:"/viewer/book/"+r},"阅读")),s["default"].createElement("div",{styleName:"description"},s["default"].createElement("p",null,o)))}}]),t}(c.Component);b=y([(0,d["default"])(h,{allowMultiple:!0})],b),t["default"]=b},84:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(83),u=o(r);t["default"]=u["default"]},85:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(82),p=o(f),d=n(4),y=o(d),h=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},b=n(99),m=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return s["default"].createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var n=e.title,o=e.authors,r=e.description,u=e.cover;return s["default"].createElement("li",{key:t},s["default"].createElement(p["default"],{id:e.id,title:n||"无标题",authors:o&&o.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:u,disablePopup:!0}))}):s["default"].createElement("li",null,"暂无记录"))}}]),t}(c.Component);m=h([(0,y["default"])(b)],m),t["default"]=m},86:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(85),u=o(r);t["default"]=u["default"]},97:function(e,t){e.exports={"meta-item":"meta-item_2cRyJ",book:"book_3Oqz_","book-meta":"book-meta_3glcZ","book-name":"book-name_2jIuZ meta-item_2cRyJ","book-author":"book-author_1VM7e meta-item_2cRyJ","book-cover":"book-cover_1jrK8","book-desc":"book-desc_xFFKl","book--card":"book--card_3FOky book_3Oqz_"}},98:function(e,t){e.exports={title:"title_BVO7e",popup:"popup_MPCqr",header:"header_1InIf",author:"author_28BiA",description:"description_D9rVN"}},99:function(e,t){e.exports={"book-list":"book-list_2s_Jl"}},121:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(18),p=n(86),d=o(p),y=n(62),h=o(y),b=n(4),m=o(b),v=n(34),O=o(v),_=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},w=n(126),g=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.title,o=e.moreLink;return s["default"].createElement("div",{styleName:"book-list-section"},this.props.title&&(o?s["default"].createElement("h2",{styleName:"section-title"},s["default"].createElement(f.Link,{to:o},n,s["default"].createElement(O["default"],{name:"arrowRight",size:20}))):s["default"].createElement("h2",{styleName:"section-title"},n)),t?s["default"].createElement(h["default"],null):s["default"].createElement(d["default"],{bookEntities:this.props.bookEntities}))}}]),t}(c.Component);g=_([(0,m["default"])(w,{allowMultiple:!0})],g),t["default"]=g},122:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(121),u=o(r);t["default"]=u["default"]},126:function(e,t){e.exports={"section-title":"section-title_2Kv3D","book-list-section":"book-list-section_2CfDe",more:"more_mgQHg"}},549:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{newestBooks:g.books("browse")(e),isBooksFetching:g.common.isPaginationFetching("books","browse")(e),nextPage:g.common.nextPage("books","browse")(e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(1),p=r(f),d=n(13),y=n(45),h=r(y),b=n(122),m=r(b),v=n(14),O=n(87),_=r(O),w=n(39),g=o(w),k=n(4),j=r(k),P=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},E=n(807),S=function(e){function t(e){return u(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"loadMore",value:function(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];this.props.loadBooks({page:e},"browse")}},{key:"componentDidMount",value:function(){this.loadMore()}},{key:"render",value:function(){var e=this,t=this.props,n=t.nextPage,o=t.isBooksFetching;return p["default"].createElement(_["default"],{className:"archive"},p["default"].createElement("div",{className:"page-header"},p["default"].createElement(m["default"],{title:"所有书籍",bookEntities:this.props.newestBooks,isFetching:o}),0!==n&&p["default"].createElement(h["default"],{onClick:function(){e.loadMore(n)},styleName:"btn-load-more",width:200,color:"white"},"加载更多")))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,v.loadBooks)())}}]),t}(f.Component);S=P([(0,j["default"])(E)],S),t["default"]=(0,d.connect)(a,{loadBooks:v.loadBooks,fetchCollections:v.fetchCollections})(S)},807:function(e,t){e.exports={"btn-load-more":"btn-load-more_26sdQ"}}});