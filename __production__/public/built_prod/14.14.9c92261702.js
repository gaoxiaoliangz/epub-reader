webpackJsonp([14],{196:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};return i["default"].keys(e).forEach(function(t){e[t]||(n[t]="不能为空！")}),n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=n(6),i=o(u)},675:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),l=o(c),f=n(8),s=n(17),p=n(10),d=n(41),y=o(d),b=n(676),h=o(b),m=n(57),v=o(m),_=n(34),g=o(_),O=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSignup=n.handleSignup.bind(n),n}return i(t,e),a(t,[{key:"handleSignup",value:function(e){var t=this;v["default"].userSignup(e).then(function(n){t.props.sendNotification("注册成功！"),v["default"].userLogin({login:e.username,password:e.password}).then(function(){t.props.userAuth().then(function(){setTimeout(function(){g["default"].redirect("/")},600)})})},function(e){t.props.sendNotification(e.message,"error")})}},{key:"render",value:function(){return l["default"].createElement(y["default"],{title:"注册"},l["default"].createElement("div",{className:"content-container"},l["default"].createElement("h1",{className:"page-title"},"加入 Readr"),l["default"].createElement(h["default"],{onSave:this.handleSignup}),l["default"].createElement("p",{className:"hint"},"已有账号？",l["default"].createElement(s.Link,{to:"/signin"},"登录"))))}}]),t}(c.Component);t["default"]=(0,f.connect)(function(e){return{notification:e.components.notification,user:e.user}},{sendNotification:p.sendNotification,userAuth:p.userAuth})(O)},676:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=n(1),f=o(l),s=n(8),p=n(66),d=o(p),y=n(10),b=n(29),h=n(196),m=o(h),v=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_=function(e,t,n,o){var r,u=arguments.length,i=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(u<3?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},g=function(e){function t(e){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=t.username,o=t.email,r=t.password,u=e.handleSubmit,i=e.onSave;return f["default"].createElement("div",null,f["default"].createElement(b.Input,v({placeholder:"用户名"},n)),f["default"].createElement(b.Input,v({placeholder:"邮箱"},o)),f["default"].createElement(b.Input,v({placeholder:"密码",type:"password"},r)),f["default"].createElement(b.Button,{color:"blue",onClick:u(function(e){i(e)})},"注册"))}}]),t}(l.Component);g=_([(0,d["default"])({form:"signup",fields:["username","email","password"],validate:function(e){return(0,m["default"])(e)}})],g),t["default"]=(0,s.connect)(function(e,t){return{initialValues:t.initialValues,routing:e.routing.locationBeforeTransitions}},{sendNotification:y.sendNotification})(g)}});