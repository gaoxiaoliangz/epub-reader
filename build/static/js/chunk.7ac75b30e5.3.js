webpackJsonp([3],{1192:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{session:m.a(e),bookList:m.c.bookList(e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=o(23),l=o.n(c),u=o(2),s=o.n(u),f=o(52),p=(o.n(f),o(20)),y=o.n(p),b=o(108),m=o(83),h=o(1222),d=o(558),v=o(557),_=o(289),g=o(1291),w=o.n(g),O=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":k(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},j=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={showRecentReading:!1},o}return i(t,e),O(t,[{key:"componentWillMount",value:function(){this.props.loadBooks()}},{key:"render",value:function(){var e=this.props,t=e.bookList,o=e.session;return s.a.createElement(d.a,{bodyClass:"home"},"visitor"===o.role&&"loaded"===o.fetchStatus&&s.a.createElement("div",{styleName:"hero-image"},s.a.createElement(_.a,null,s.a.createElement("div",{styleName:"logo"},"Readr"),s.a.createElement("h1",{styleName:"page-title"},"新的阅读体验"),s.a.createElement(v.d,{to:"/signup"},"现在加入"))),s.a.createElement(_.a,null,s.a.createElement(h.a,{bookEntities:l()(t,["pages","1"],[]).slice(0,6),title:"新书速递",moreLink:"/browse",isFetching:"loading"===t.fetchStatus})))}}]),t}(u.Component);j=E([y()(w.a)],j),t.default=o.i(f.connect)(a,{loadBooks:b.loadBooks})(j)},1207:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),l=o(20),u=o.n(l),s=o(84),f=o.n(s),p=o(1209),y=o.n(p),b=o(1210),m=o.n(b),h=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":d(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},_=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={dynamicDots:""},o}return i(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval(function(){3===e.state.dynamicDots.length?e.setState({dynamicDots:""}):e.setState({dynamicDots:e.state.dynamicDots+"."})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.text,o=e.center,n=e.useDynamicDots,r=this.state.dynamicDots,i=f()({"loading-wrap--center":o,"loading-wrap":!o});return c.a.createElement("div",{styleName:i},c.a.createElement("p",{styleName:"text-loading"},c.a.createElement("img",{styleName:"gif",src:m.a}),c.a.createElement("span",null,t+(n?r:"..."))))}}]),t}(a.Component);_=v([u()(y.a)],_),_.defaultProps={text:"加载中",useDynamicDots:!1},t.a=_},1208:function(e,t,o){"use strict";var n=o(1207);t.a=n.a},1209:function(e,t){e.exports={"text-loading":"text-loading_3Q6vh","loading-wrap":"loading-wrap_7G2oJ","loading-wrap--center":"loading-wrap--center_3AyTV",gif:"gif_aZzPl"}},1210:function(e,t,o){e.exports=o.p+"media/loading.4275970884.gif"},1211:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),l=o(36),u=o(1214),s=o(20),f=o.n(s),p=o(1217),y=o.n(p),b=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},d=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={showPopup:!1},o.showPopup=o.showPopup.bind(o),o.hidePopup=o.hidePopup.bind(o),o}return i(t,e),b(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,o=e.description,n=e.cover;return c.a.createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},c.a.createElement(l.Link,{to:"/book/"+this.props.id},n&&c.a.createElement("div",{styleName:"book-cover"},c.a.createElement("img",{src:this.props.cover})),c.a.createElement("div",{styleName:"book-meta"},c.a.createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),c.a.createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&c.a.createElement("span",{styleName:"book-desc"},o||"空"))),this.state.showPopup&&!this.props.disablePopup&&c.a.createElement(u.a,{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(a.Component);d=h([f()(y.a,{allowMultiple:!0})],d),t.a=d},1212:function(e,t,o){"use strict";var n=o(1211);t.a=n.a},1213:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),l=o(557),u=o(20),s=o.n(u),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},b=o(1218),m=function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.author,o=e.title,n=e.description,r=e.bookId;return c.a.createElement("div",{styleName:"popup"},c.a.createElement("div",{styleName:"header"},c.a.createElement("h2",{styleName:"title"},o),c.a.createElement("p",{styleName:"author"},t),c.a.createElement(l.d,{color:"blue",to:"/viewer/book/"+r},"阅读")),c.a.createElement("div",{styleName:"description"},c.a.createElement("p",null,n)))}}]),t}(a.Component);m=y([s()(b,{allowMultiple:!0})],m),t.a=m},1214:function(e,t,o){"use strict";var n=o(1213);t.a=n.a},1215:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),l=o(1212),u=o(20),s=o.n(u),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},b=o(1219),m=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"render",value:function(){return c.a.createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var o=e.title,n=e.authors,r=e.description,i=e.cover;return c.a.createElement("li",{key:t},c.a.createElement(l.a,{id:e.id,title:o||"无标题",authors:n&&n.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:i,disablePopup:!0}))}):c.a.createElement("li",null,"暂无记录"))}}]),t}(a.Component);m=y([s()(b)],m),t.a=m},1216:function(e,t,o){"use strict";var n=o(1215);t.a=n.a},1217:function(e,t){e.exports={"meta-item":"meta-item_29Oj5",book:"book_1Mhus","book-meta":"book-meta_2_-SN","book-name":"book-name_2xm-_ meta-item_29Oj5","book-author":"book-author_2uQ57 meta-item_29Oj5","book-cover":"book-cover_2Njlt","book-desc":"book-desc_qmKU9","book--card":"book--card_SUxdP book_1Mhus"}},1218:function(e,t){e.exports={title:"title_r5Pz7",popup:"popup_2QR4_",header:"header_2DiuQ",author:"author_1IeQO",description:"description_i8oqq"}},1219:function(e,t){e.exports={"book-list":"book-list_1On2y"}},1221:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(2),c=o.n(a),l=o(36),u=o(1216),s=o(1208),f=o(20),p=o.n(f),y=o(177),b=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},d=o(1223),v=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.isFetching,o=e.title,n=e.moreLink,r=e.bookEntities;return c.a.createElement("div",{styleName:"book-list-section"},this.props.title&&(n?c.a.createElement("h2",{styleName:"section-title"},c.a.createElement(l.Link,{to:n},o,c.a.createElement(y.a,{name:"arrowRight",size:20}))):c.a.createElement("h2",{styleName:"section-title"},o)),t&&0===r.length?c.a.createElement(s.a,null):c.a.createElement(u.a,{bookEntities:r}))}}]),t}(a.Component);v=h([p()(d,{allowMultiple:!0})],v),t.a=v},1222:function(e,t,o){"use strict";var n=o(1221);t.a=n.a},1223:function(e,t){e.exports={"section-title":"section-title_pTGd6","book-list-section":"book-list-section_2tEA-",more:"more_1c3vt"}},1291:function(e,t){e.exports={"page-title":"page-title_24K24","hero-image":"hero-image_3QjtQ",logo:"logo_aaCgX",btn:"btn_jz_rk"}}});