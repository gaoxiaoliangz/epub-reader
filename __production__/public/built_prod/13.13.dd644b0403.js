webpackJsonp([13],{66:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.form=void 0;var o=n(82),u=r(o);t.form=u["default"]},82:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),p=n(8),d=n(5),y=o(d),m=n(6),b=r(m),h=n(14),v=r(h),_=b.form,g=(function(e){function t(){return i(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.Component),function(e,t,n){if(n){var r=n(t);if(!y["default"].isEmpty(r)){var o=y["default"].mapValues(r,function(e){return{error:e}});return{fields:y["default"].merge({},e,o),hasError:!0}}}return{fields:e,hasError:!1}}),O=function(e){var t=e.fields,n=e.form,r=e.validate,o=e.destroyOnUnmount;return function(e){var d=function(p){function d(){return i(this,d),f(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return a(d,p),l(d,[{key:"createField",value:function(e,t){var r=this.props.change,o=function(e){var o=e;"object"===("undefined"==typeof e?"undefined":c(e))&&e.target&&(o=e.target.value||""),r(n,t,o,!1,!1)},i={onChange:function(e){return o(e)}};return u({},t,{get:function(t){return e||t||""},set:i.onChange,value:e,onChange:i.onChange,events:i})}},{key:"componentDidMount",value:function(){var e=this.props.defineField;t.forEach(function(t){e(n,t)})}},{key:"componentWillUnmount",value:function(){o&&this.props.destroy(n)}},{key:"render",value:function(){var o=this,u=void 0,i=this.props,f=i.touch,a=i.formValues,c=i.formDefinition,l=i.formMeta,p=y["default"].map(t,function(e){var t=a[e]||"";return o.createField(t,e)});p.forEach(function(e){u=y["default"].assign({},u,e)});var d={};c.forEach(function(e){var t=e.name;d[t]=a[t]});var m=g(u,d,r),b=m.fields,h=m.hasError;u=b,u=y["default"].merge({},u,l);var v=function(e){return function(t){f(n,c.map(function(e){return e.name})),h||e(d)}};return(0,s.createElement)(e,y["default"].assign({},this.props,{fields:u,handleSubmit:v}))}}]),d}(s.Component);return(0,p.connect)(function(e){return{form:v.form.fullForm(n)(e),formValues:v.form.formValues(n)(e),formDefinition:v.form.formDefinition(n)(e),formMeta:v.form.formMeta(n)(e)}},_)(d)}};t["default"]=O},171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};return i["default"].keys(e).forEach(function(t){e[t]||(n[t]="不能为空！")}),n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(5),i=r(u)},600:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),c=r(a),l=n(8),s=n(18),p=n(6),d=n(38),y=r(d),m=n(601),b=r(m),h=n(56),v=r(h),_=n(31),g=r(_),O=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSignup=n.handleSignup.bind(n),n}return i(t,e),f(t,[{key:"handleSignup",value:function(e){var t=this;v["default"].userSignup(e).then(function(n){t.props.sendNotification("注册成功！"),v["default"].userLogin({login:e.username,password:e.password}).then(function(){t.props.userAuth().then(function(){setTimeout(function(){g["default"].redirect("/")},600)})})},function(e){t.props.sendNotification(e.message,"error")})}},{key:"render",value:function(){return c["default"].createElement(y["default"],{title:"注册"},c["default"].createElement("div",{className:"content-container"},c["default"].createElement("h1",{className:"page-title"},"加入 Readr"),c["default"].createElement(b["default"],{onSave:this.handleSignup}),c["default"].createElement("p",{className:"hint"},"已有账号？",c["default"].createElement(s.Link,{to:"/signin"},"登录"))))}}]),t}(a.Component);t["default"]=(0,l.connect)(function(e){return{notification:e.components.notification,user:e.user}},{sendNotification:p.sendNotification,userAuth:p.userAuth})(O)},601:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),l=r(c),s=n(8),p=n(66),d=n(6),y=n(27),m=n(171),b=r(m),h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},v=function(e,t,n,r){var o,u=arguments.length,i=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var f=e.length-1;f>=0;f--)(o=e[f])&&(i=(u<3?o(i):u>3?o(t,n,i):o(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},_=function(e){function t(e){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=t.username,r=t.email,o=t.password,u=e.handleSubmit,i=e.onSave;return l["default"].createElement("div",null,l["default"].createElement(y.Input,h({placeholder:"用户名"},n)),l["default"].createElement(y.Input,h({placeholder:"邮箱"},r)),l["default"].createElement(y.Input,h({placeholder:"密码",type:"password"},o)),l["default"].createElement(y.Button,{color:"blue",onClick:u(function(e){i(e)})},"注册"))}}]),t}(c.Component);_=v([(0,p.form)({form:"signup",fields:["username","email","password"],validate:function(e){return(0,b["default"])(e)}})],_),t["default"]=(0,s.connect)(function(e,t){return{initialValues:t.initialValues,routing:e.routing.locationBeforeTransitions}},{sendNotification:d.sendNotification})(_)}});