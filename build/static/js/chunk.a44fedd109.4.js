webpackJsonp([4],{1202:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{shelf:m.c.shelf(e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=o(23),u=o.n(c),l=o(2),p=o.n(l),s=o(52),f=(o.n(s),o(108)),b=o(1216),y=o(179),h=o(1234),m=o(83),d=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),v=function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),d(t,[{key:"componentWillMount",value:function(){this.props.loadShelf()}},{key:"render",value:function(){var e=u()(this.props.shelf,["pages","1"],[]);return p.a.createElement(y.a,null,p.a.createElement(h.a,{style:{marginTop:20}},p.a.createElement(h.b,{title:"全部"},p.a.createElement(b.a,{bookEntities:e})),p.a.createElement(h.b,{title:"我的上传"},"空")))}}]),t}(l.Component);t.default=o.i(s.connect)(a,{loadShelf:f.loadShelf})(v)},1211:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),u=o(36),l=o(1214),p=o(20),s=o.n(p),f=o(1217),b=o.n(f),y=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},d=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={showPopup:!1},o.showPopup=o.showPopup.bind(o),o.hidePopup=o.hidePopup.bind(o),o}return i(t,e),y(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,o=e.description,n=e.cover;return c.a.createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},c.a.createElement(u.Link,{to:"/book/"+this.props.id},n&&c.a.createElement("div",{styleName:"book-cover"},c.a.createElement("img",{src:this.props.cover})),c.a.createElement("div",{styleName:"book-meta"},c.a.createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),c.a.createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&c.a.createElement("span",{styleName:"book-desc"},o||"空"))),this.state.showPopup&&!this.props.disablePopup&&c.a.createElement(l.a,{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(a.Component);d=m([s()(b.a,{allowMultiple:!0})],d),t.a=d},1212:function(e,t,o){"use strict";var n=o(1211);t.a=n.a},1213:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),u=o(557),l=o(20),p=o.n(l),s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},y=o(1218),h=function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.author,o=e.title,n=e.description,r=e.bookId;return c.a.createElement("div",{styleName:"popup"},c.a.createElement("div",{styleName:"header"},c.a.createElement("h2",{styleName:"title"},o),c.a.createElement("p",{styleName:"author"},t),c.a.createElement(u.d,{color:"blue",to:"/viewer/book/"+r},"阅读")),c.a.createElement("div",{styleName:"description"},c.a.createElement("p",null,n)))}}]),t}(a.Component);h=b([p()(y,{allowMultiple:!0})],h),t.a=h},1214:function(e,t,o){"use strict";var n=o(1213);t.a=n.a},1215:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),u=o(1212),l=o(20),p=o.n(l),s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},y=o(1219),h=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return c.a.createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var o=e.title,n=e.authors,r=e.description,i=e.cover;return c.a.createElement("li",{key:t},c.a.createElement(u.a,{id:e.id,title:o||"无标题",authors:n&&n.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:i,disablePopup:!0}))}):c.a.createElement("li",null,"暂无记录"))}}]),t}(a.Component);h=b([p()(y)],h),t.a=h},1216:function(e,t,o){"use strict";var n=o(1215);t.a=n.a},1217:function(e,t){e.exports={"meta-item":"meta-item_29Oj5",book:"book_1Mhus","book-meta":"book-meta_2_-SN","book-name":"book-name_2xm-_ meta-item_29Oj5","book-author":"book-author_2uQ57 meta-item_29Oj5","book-cover":"book-cover_2Njlt","book-desc":"book-desc_qmKU9","book--card":"book--card_SUxdP book_1Mhus"}},1218:function(e,t){e.exports={title:"title_r5Pz7",popup:"popup_2QR4_",header:"header_2DiuQ",author:"author_1IeQO",description:"description_i8oqq"}},1219:function(e,t){e.exports={"book-list":"book-list_1On2y"}},1232:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"tab"},this.props.children)}}]),t}(a.Component);t.a=l},1233:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),u=o(84),l=o.n(u),p=o(20),s=o.n(p),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":b(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},h=o(1240),m=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={active:o.props.defaultActive},o.handleTabClick=o.handleTabClick.bind(o),o}return i(t,e),f(t,[{key:"handleTabClick",value:function(e){this.setState({active:e}),this.props.onTabSwitch&&this.props.onTabSwitch(e)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.style;return c.a.createElement("div",Object.assign({className:"tabs"},t?{style:t}:null),c.a.createElement("div",{styleName:"tabs-header"},c.a.createElement("ul",null,this.props.children.map(function(t,o){return c.a.createElement("li",{styleName:l()({active:o===e.state.active}),key:o,onClick:e.handleTabClick.bind(e,o)},t.props.title)}))),this.props.children.filter(function(t,o){return o===e.state.active}).map(function(e){return e.props.children})[0])}}]),t}(a.Component);m=y([s()(h,{allowMultiple:!0})],m),m.defaultProps={defaultActive:0},t.a=m},1234:function(e,t,o){"use strict";var n=o(1232),r=o(1233);o.d(t,"b",function(){return n.a}),o.d(t,"a",function(){return r.a});n.a},1240:function(e,t){e.exports={"tabs-header":"tabs-header_sMcX1",active:"active_1FiRT"}}});