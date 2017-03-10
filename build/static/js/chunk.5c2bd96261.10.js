webpackJsonp([10],{1202:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=o(112),u=r(c),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=o(2),_=r(d),p=o(65),y=o(85),m=o(1217),b=r(m),g=o(564),h=o(565),v=r(h),O=o(21),E=r(O),k=o(175),T=n(k),R=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l},j=o(1302),w=function(e){function t(e){a(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.bookId=e.params.id,o}return i(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.loadBook(this.bookId)}},{key:"render",value:function(){var e=this.props.bookInfo,t=(0,u.default)(e);return _.default.createElement(v.default,{bodyClass:"book-info",title:e.title},_.default.createElement("div",{className:"container"},_.default.createElement("article",{styleName:"book-info-container"},_.default.createElement("div",{styleName:"book-detail"},_.default.createElement("header",{styleName:"header"},t?_.default.createElement(b.default,null):_.default.createElement("div",null,_.default.createElement("div",{styleName:"left-col"},e.cover&&_.default.createElement("div",{styleName:"book-cover"},_.default.createElement("img",{styleName:"img",src:e.cover}))),_.default.createElement("div",{styleName:"right-col"},_.default.createElement("h1",{styleName:"book-name"},e.title||"无标题"),_.default.createElement("div",{styleName:"book-author"},_.default.createElement("strong",null,"作者：",e.authors&&e.authors.map(function(e){return e.name}).join(", ")||"未知")),_.default.createElement("div",null,_.default.createElement(g.Button,{styleName:"btn-read",to:"/viewer/book/"+e.id,color:"blue"},"阅读"))))),e.description&&_.default.createElement("div",{styleName:"content"},_.default.createElement("h2",{styleName:"desc"},"内容简介"),_.default.createElement("p",null,e.description))))))}}]),t}(d.Component);w=R([(0,E.default)(j,{allowMultiple:!0})],w);var P=function(e,t){var o=t.params.id;return{bookInfo:T.common.entity("books",o)(e)}},x=(0,p.connect)(P,{loadBook:y.loadBook})(w);t.default=x;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"__decorate","/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx"),__REACT_HOT_LOADER__.register(w,"BookDetail","/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx"),__REACT_HOT_LOADER__.register(P,"mapStateToProps","/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx"),__REACT_HOT_LOADER__.register(x,"default","/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx"))}()},1216:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=o(2),f=n(u),s=o(21),d=n(s),_=o(86),p=n(_),y=o(1218),m=n(y),b=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l},g=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={dynamicText:""},o}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval(function(){3===e.state.dynamicText.length?e.setState({dynamicText:""}):e.setState({dynamicText:e.state.dynamicText+"."})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.text,o=e.center,n=this.state.dynamicText,r=(0,p.default)({"loading-wrap--center":o,"loading-wrap":!o});return f.default.createElement("div",{styleName:r},f.default.createElement("span",{styleName:"text-loading"},t+n))}}]),t}(u.Component);g=b([(0,d.default)(m.default)],g),g.defaultProps={text:"加载中"};var h=g;t.default=h;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"__decorate","/Users/liang/Projects/readr/src/components/Loading/Loading.tsx"),__REACT_HOT_LOADER__.register(g,"Loading","/Users/liang/Projects/readr/src/components/Loading/Loading.tsx"),__REACT_HOT_LOADER__.register(h,"default","/Users/liang/Projects/readr/src/components/Loading/Loading.tsx"))}()},1217:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1216),a=n(r),l=a.default;t.default=l;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(l,"default","/Users/liang/Projects/readr/src/components/Loading/index.ts")}()},1218:function(e,t){e.exports={"text-loading":"text-loading_3Q6vh","loading-wrap":"loading-wrap_7G2oJ","loading-wrap--center":"loading-wrap--center_3AyTV"}},1302:function(e,t){e.exports={"book-detail":"book-detail_Iinfr","book-info-container":"book-info-container_12Cuh",header:"header_kUeRW",content:"content_QQ2OP","btn-read":"btn-read_A9Lcq","left-col":"left-col_1xTZr","right-col":"right-col_3qf9k","book-name":"book-name_30SJM","book-author":"book-author_1ShCb","book-cover":"book-cover_3h02j",img:"img_HM3eq",desc:"desc_26hRG"}}});