webpackJsonp([3],{54:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(4),p=n(s),d=o(22),y=n(d),b=function(e,t,o,n){var r,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(i<3?r(u):i>3?r(t,o,u):r(t,o))||u);return i>3&&u&&Object.defineProperty(t,o,u),u},m=o(61),h=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={dynamicText:""},o}return u(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval(function(){3===e.state.dynamicText.length?e.setState({dynamicText:""}):e.setState({dynamicText:e.state.dynamicText+"."})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.text,o=e.center,n=this.state.dynamicText,r=(0,y["default"])({"loading-wrap--center":o,"loading-wrap":!o});return f["default"].createElement("div",{styleName:r},f["default"].createElement("span",{styleName:"text-loading"},t+n))}}]),t}(c.Component);h=b([(0,p["default"])(m)],h),h.defaultProps={text:"加载中"},t["default"]=h},55:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(54),i=n(r);t["default"]=i["default"]},61:function(e,t){e.exports={"text-loading":"text-loading_3efqh","loading-wrap":"loading-wrap_htyYz","loading-wrap--center":"loading-wrap--center_3PEIh"}},74:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(18),p=o(77),d=n(p),y=o(4),b=n(y),m=function(e,t,o,n){var r,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(i<3?r(u):i>3?r(t,o,u):r(t,o))||u);return i>3&&u&&Object.defineProperty(t,o,u),u},h=o(93),_=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={showPopup:!1},o.showPopup=o.showPopup.bind(o),o.hidePopup=o.hidePopup.bind(o),o}return u(t,e),l(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,o=e.description,n=e.cover;return f["default"].createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},f["default"].createElement(s.Link,{to:"/book/"+this.props.id},n&&f["default"].createElement("div",{styleName:"book-cover"},f["default"].createElement("img",{src:this.props.cover})),f["default"].createElement("div",{styleName:"book-meta"},f["default"].createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),f["default"].createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&f["default"].createElement("span",{styleName:"book-desc"},o||"空"))),this.state.showPopup&&!this.props.disablePopup&&f["default"].createElement(d["default"],{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(c.Component);_=m([(0,b["default"])(h,{allowMultiple:!0})],_),t["default"]=_},75:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(74),i=n(r);t["default"]=i["default"]},76:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(27),p=o(4),d=n(p),y=function(e,t,o,n){var r,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(i<3?r(u):i>3?r(t,o,u):r(t,o))||u);return i>3&&u&&Object.defineProperty(t,o,u),u},b=o(94),m=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.author,o=e.title,n=e.description,r=e.bookId;return f["default"].createElement("div",{styleName:"popup"},f["default"].createElement("div",{styleName:"header"},f["default"].createElement("h2",{styleName:"title"},o),f["default"].createElement("p",{styleName:"author"},t),f["default"].createElement(s.Button,{color:"blue",to:"/viewer/book/"+r},"阅读")),f["default"].createElement("div",{styleName:"description"},f["default"].createElement("p",null,n)))}}]),t}(c.Component);m=y([(0,d["default"])(b,{allowMultiple:!0})],m),t["default"]=m},77:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(76),i=n(r);t["default"]=i["default"]},78:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(75),p=n(s),d=o(4),y=n(d),b=function(e,t,o,n){var r,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(i<3?r(u):i>3?r(t,o,u):r(t,o))||u);return i>3&&u&&Object.defineProperty(t,o,u),u},m=o(95),h=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return f["default"].createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var o=e.title,n=e.authors,r=e.description,i=e.cover;return f["default"].createElement("li",{key:t},f["default"].createElement(p["default"],{id:e.id,title:o||"无标题",authors:n&&n.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:i,disablePopup:!0}))}):f["default"].createElement("li",null,"暂无记录"))}}]),t}(c.Component);h=b([(0,y["default"])(m)],h),t["default"]=h},79:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(78),i=n(r);t["default"]=i["default"]},93:function(e,t){e.exports={"meta-item":"meta-item_2cRyJ",book:"book_3Oqz_","book-meta":"book-meta_3glcZ","book-name":"book-name_2jIuZ meta-item_2cRyJ","book-author":"book-author_1VM7e meta-item_2cRyJ","book-cover":"book-cover_1jrK8","book-desc":"book-desc_xFFKl","book--card":"book--card_3FOky book_3Oqz_"}},94:function(e,t){e.exports={title:"title_BVO7e",popup:"popup_MPCqr",header:"header_1InIf",author:"author_28BiA",description:"description_D9rVN"}},95:function(e,t){e.exports={"book-list":"book-list_2s_Jl"}},115:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(18),p=o(79),d=n(p),y=o(55),b=n(y),m=o(4),h=n(m),_=o(81),v=n(_),w=function(e,t,o,n){var r,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(i<3?r(u):i>3?r(t,o,u):r(t,o))||u);return i>3&&u&&Object.defineProperty(t,o,u),u},O=o(121),k=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.isFetching,o=e.title,n=e.moreLink,r=e.bookEntities;return f["default"].createElement("div",{styleName:"book-list-section"},this.props.title&&(n?f["default"].createElement("h2",{styleName:"section-title"},f["default"].createElement(s.Link,{to:n},o,f["default"].createElement(v["default"],{name:"arrowRight",size:20}))):f["default"].createElement("h2",{styleName:"section-title"},o)),t&&0===r.length?f["default"].createElement(b["default"],null):f["default"].createElement(d["default"],{bookEntities:r}))}}]),t}(c.Component);k=w([(0,h["default"])(O,{allowMultiple:!0})],k),t["default"]=k},116:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(115),i=n(r);t["default"]=i["default"]},121:function(e,t){e.exports={"section-title":"section-title_2Kv3D","book-list-section":"book-list-section_2CfDe",more:"more_mgQHg"}},578:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{newestBooks:k.books("browse")(e),isBooksFetching:k.common.isPaginationFetching("books","browse")(e),nextPage:k.common.nextPage("books","browse")(e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=o(1),p=r(s),d=o(8),y=o(271),b=r(y),m=o(116),h=r(m),_=o(6),v=o(117),w=r(v),O=o(14),k=n(O),g=o(4),j=r(g),P=function(e,t,o,n){var r,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(i<3?r(u):i>3?r(t,o,u):r(t,o))||u);return i>3&&u&&Object.defineProperty(t,o,u),u},E=o(867),S=function(e){function t(e){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),c(t,[{key:"loadMore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.props.loadBooks({page:e},"browse")}},{key:"componentDidMount",value:function(){this.loadMore()}},{key:"render",value:function(){var e=this,t=this.props,o=t.nextPage,n=t.isBooksFetching;return p["default"].createElement(w["default"],{className:"archive"},p["default"].createElement(h["default"],{title:"所有书籍",bookEntities:this.props.newestBooks,isFetching:n}),0!==o&&p["default"].createElement(b["default"],{onClick:function(){e.loadMore(o)},styleName:"btn-load-more",width:200,color:"white"},n?"加载中 ...":"加载更多"))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,_.loadBooks)())}}]),t}(s.Component);S=P([(0,j["default"])(E)],S),t["default"]=(0,d.connect)(a,{loadBooks:_.loadBooks,fetchCollections:_.fetchCollections})(S)},867:function(e,t){e.exports={"btn-load-more":"btn-load-more_26sdQ"}}});