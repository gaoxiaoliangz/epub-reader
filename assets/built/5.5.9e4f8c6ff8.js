webpackJsonp([5],{110:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),s=n(3),p=o(s),d=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},h=n(124),y=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.className;"string"==typeof this.props.value&&(n="1"===n||"true"===n);var r=Boolean(n)?"on":"off";return f["default"].createElement("div",{className:o||"",styleName:"switcher-wrap"},this.props.title&&f["default"].createElement("span",null,this.props.title),f["default"].createElement("div",{onClick:function(t){if(e.props.onChange){var n=void 0;if(e.props.options){var o=e.props.options.map(function(e){return e.value}).indexOf(e.props.value);1===o?n=e.props.options[0].value:0===o?n=e.props.options[1].value:(n=e.props.options[0].value,console.error("当前数据有误，将使用默认数据！"))}else"string"==typeof e.props.value?console.error("没有给 options 时必须使用布尔型的 value！"):n=!e.props.value;e.props.onChange(n)}},styleName:"switcher--"+r},f["default"].createElement("div",{styleName:"switcher-button"}),f["default"].createElement("div",{styleName:"switcher-track"})))}}]),t}(c.Component);y=d([(0,p["default"])(h,{allowMultiple:!0})],y),t["default"]=y},111:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(110),i=o(r);t["default"]=i["default"]},124:function(e,t){e.exports={"switcher-wrap":"switcher-wrap_3UMAU",switcher:"switcher_G3n4_","switcher--off":"switcher--off_1EoOU","switcher--on":"switcher--on_2xiwO","switcher-button":"switcher-button_2kHGL","switcher-track":"switcher-track_xvhjg"}},179:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(1),s=r(f),p=n(442),d=r(p),h=n(443),y=o(h),b=n(5),g=r(b),m=n(9),v=r(m),w=n(3),P=r(w),_=n(449),O=r(_),k=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=n(494),E=function(e){function t(e){i(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={scrollTop:0,currentPage:1},n.handleScroll=n.handleScroll.bind(n),n.deboundedHandleScroll=g["default"].debounce(n.handleScroll,200,{maxWait:1e3}),n}return l(t,e),u(t,[{key:"handleScroll",value:function(){if(!this.props.isCalcMode){var e=this.calcPages(),t=e.pages,n=e.totalHeight,o=this.props.onProgressChange,r=document.body.scrollTop,i=y.percentageToPage(r/n,t.length);o&&o(r/n),this.setState({currentPage:i})}}},{key:"addEventListeners",value:function(){window.addEventListener("scroll",this.deboundedHandleScroll)}},{key:"removeEventListeners",value:function(){window.removeEventListener("scroll",this.deboundedHandleScroll)}},{key:"calcPages",value:function(){var e=this.props,t=e.nodeHeights,n=e.nodes,o=e.pageHeight,r=y.groupNodesByPage(n,t,o);return{pages:r,totalHeight:r.length*o}}},{key:"componentDidMount",value:function(){var e=this.props,t=e.pageHeight,n=e.initialPage,o=e.initialProgress,r=this.calcPages(),i=r.totalHeight,a=0;o?a=i*o:n&&(a=t*(n-1)),document.body.scrollTop=a,this.addEventListeners()}},{key:"componentWillUnmount",value:function(){this.removeEventListeners()}},{key:"render",value:function(){var e=this,t=this.calcPages(),n=t.pages,o=t.totalHeight,r=this.state.currentPage,i=this.props,a=i.pageCount,l=i.pageHeight,u=i.fluid,c=i.showPageInfo,f=r-1,p=f+a,h=(0,v["default"])({pages:!u,"pages--fluid":u});return s["default"].createElement("div",null,s["default"].createElement("ul",{ref:function(t){e.bookPageListDom=t},styleName:h,style:{height:o}},g["default"].slice(n,f,p).map(function(t,n){return s["default"].createElement(d["default"],{key:n,page:t,pageHeight:l,fluid:u,ref:function(t){e.bookPage=t}})})),s["default"].createElement(O["default"],{visible:c,current:r,total:n.length}))}}]),t}(f.Component);E=k([(0,P["default"])(j)],E),t["default"]=E},442:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),s=n(9),p=o(s),d=n(3),h=o(d),y=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},b=n(495),g=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.page,o=n.nodes,r=n.meta,i=t.pageHeight,a=t.fluid,l={position:"absolute",top:i*(r.pageNo-1),height:i||"auto"},u=(0,p["default"])({page:!a,"page--fluid":a});return f["default"].createElement("li",{styleName:u,style:l},f["default"].createElement("div",{style:{marginTop:r.offset},styleName:"content",dangerouslySetInnerHTML:{__html:o.join("")},ref:function(t){e.bookPageDom=t}}),f["default"].createElement("div",{styleName:"page-no"},r.pageNo))}}]),t}(c.Component);g=y([(0,h["default"])(b)],g),t["default"]=g},443:function(e,t){"use strict";function n(e){var t=e.pageIndex,n=e.pageHeight,o=e.nodeHeights,r=0,i=0,a=void 0;if(0!==t){for(var l=0;n*t>=l;)l+=o[i],i++;r=l-o[i-1]-t*n,a=i-1}else a=0;return{offset:r,nodeStartIndex:a}}function o(e){var t=e.pageIndex,o=e.nodes,r=e.pageHeight,i=e.nodeHeights,a=n({pageIndex:t,pageHeight:r,nodeHeights:i}),l=a.offset,u=a.nodeStartIndex,c=u,f=void 0,s=[],p=l+i[u];if(c++,r>p){for(;r>=p&&c!==o.length;)p+=i[c],c++;f=c-1}else f=u;for(var d=u;f>=d&&d<=o.length-1;d++)s.push(o[d]);return{pageNodes:s,offset:l}}function r(e,t,n){var r=[],i=t.reduce(function(e,t){return e+t},0),a=Math.ceil(i/n);if(console.log("todo: group nodes"),0===t.length)return[{nodes:e,meta:{pageNo:1,offset:0}}];for(var l=0;a>l;l++){var u=o({pageIndex:l,nodes:e,nodeHeights:t,pageHeight:n}),c=u.pageNodes,f=u.offset;r.push({nodes:c,meta:{pageNo:l+1,offset:f}})}return r}function i(e,t){return e>1?(console.error("Wrong parameter!"),null):parseInt(e*t)+1}Object.defineProperty(t,"__esModule",{value:!0}),t.groupNodesByPage=r,t.percentageToPage=i},444:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),f=n(179),s=o(f),p=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),l(t,[{key:"getContentHtml",value:function(){return this.bookPageList.bookPage.bookPageDom}},{key:"render",value:function(){var e=this,t=this.props,n=t.fluid,o=t.nodes;return c["default"].createElement(s["default"],{fluid:n,nodes:o,nodeHeights:[],pageCount:1,pageHeight:0,isCalcMode:!0,ref:function(t){e.bookPageList=t}})}}]),t}(u.Component);t["default"]=p},445:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(1),s=r(f),p=n(8),d=n(179),h=r(d),y=n(446),b=o(y),g=n(11),m=n(5),v=r(m),w=n(447),P=r(w),_=n(444),O=r(_),k=n(3),j=r(k),E=n(73),S=r(E),M=n(53),C=r(M),R=n(35),N=r(R),H=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},T=n(499),x=function(e){function t(e){i(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.bookId=e.params.id,n.state={showPanel:!1,isCalcMode:!0,nodeHeights:[],nodes:[],showViewerPreference:!1,fluid:!1,isTouchMode:!1},n.handleViewerClick=n.handleViewerClick.bind(n),n.handelViewerMouseMove=n.handelViewerMouseMove.bind(n),n.handleProgressChange=n.handleProgressChange.bind(n),n.handleResize=n.handleResize.bind(n),n.deboundedHandleResize=v["default"].debounce(n.handleResize,500,{maxWait:1e3}),n}return l(t,e),u(t,[{key:"isViewFluid",value:function(){return C["default"].getScreenInfo().view.width<700}},{key:"isTouchMode",value:function(){return C["default"].getScreenInfo().view.width<700}},{key:"setProgress",value:function(e){S["default"].setProgress(this.bookId,{percentage:e})}},{key:"handelViewerMouseMove",value:function(e){if(!this.state.isCalcMode&&!this.state.isTouchMode){var t=e.pageY-document.body.scrollTop,n=C["default"].getScreenInfo().view.width-e.pageX;this.setState({showPanel:90>t,showPageInfo:100>n})}}},{key:"handleResize",value:function(){this.setState({fluid:this.isViewFluid(),isTouchMode:this.isTouchMode()})}},{key:"handleProgressChange",value:function(e){this.setProgress(e)}},{key:"handleViewerClick",value:function(){this.state.isTouchMode&&this.setState({showPanel:!this.state.showPanel})}},{key:"calcDom",value:function(){var e=this;this.setState({isCalcMode:!0},function(){var t=e.bookPageWithRawHtml.getContentHtml(),n=b.getNodeHeights(t.childNodes);console.log("calc done"),e.setState({nodeHeights:n,isCalcMode:!1})})}},{key:"loadRawBookContent",value:function(){var e=this;this.props.fetchBook(this.bookId).then(function(t){var n=b.markdownToNodeStringList(e.props.rawBookContent);e.setState({nodes:n,fluid:e.isViewFluid(),isTouchMode:e.isTouchMode()})})}},{key:"addEventListeners",value:function(){window.addEventListener("resize",this.deboundedHandleResize)}},{key:"removeEventListeners",value:function(){window.removeEventListener("resize",this.deboundedHandleResize)}},{key:"shouldComponentUpdate",value:function(e,t){return!v["default"].isEqual(this.state,t)}},{key:"componentDidUpdate",value:function(e,t){var n=0!==this.state.nodes.length&&0===t.nodes.length,o=this.state.fluid!==t.fluid;(n||o)&&this.calcDom()}},{key:"componentDidMount",value:function(){this.loadRawBookContent(),this.props.fetchProgress(this.bookId),this.addEventListeners()}},{key:"componentWillUnmount",value:function(){this.removeEventListeners()}},{key:"renderViewPanel",value:function(){var e=this;return(this.state.showPanel||this.state.showViewerPreference)&&s["default"].createElement(P["default"],{title:this.props.book.title,showViewerPreference:this.state.showViewerPreference,onPrefVisibilityChange:function(t){e.setState({showViewerPreference:t})}})}},{key:"renderBook",value:function(){var e=this,t=this.state,n=t.nodes,o=t.nodeHeights,r=t.fluid,i=t.showPageInfo,a=this.props.progress;return 0===n.length?s["default"].createElement("div",{className:"text-loading"},"加载中 ..."):this.state.isCalcMode?s["default"].createElement(O["default"],{nodes:n,ref:function(t){e.bookPageWithRawHtml=t},fluid:r}):s["default"].createElement(h["default"],{nodeHeights:o,nodes:this.state.nodes,pageCount:5,initialProgress:a,pageHeight:900,onProgressChange:this.handleProgressChange,fluid:r,showPageInfo:i})}},{key:"render",value:function(){return s["default"].createElement(N["default"],{bodyClass:"viewer",title:this.props.book.title},s["default"].createElement("div",{onClick:this.handleViewerClick,onMouseMove:this.handelViewerMouseMove},this.renderViewPanel(),this.renderBook()))}}]),t}(f.Component);x=H([(0,j["default"])(T)],x),t["default"]=(0,p.connect)(function(e,t){var n=e.entities.books[t.params.id]||{};return{book:n,rawBookContent:v["default"].get(n,"content.raw",""),progress:v["default"].get(e.payloads,"progress.percentage",0),session:e.session}},{fetchBook:g.fetchBook,fetchProgress:g.fetchProgress,openConfirmModal:g.openConfirmModal})(x)},446:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){console.log("dom ready, getNodeHeights");var t=[];return Array.prototype.forEach.call(e,function(e,n){"gb-line"!==e.className&&console.error("Unsupported content found!"),t.push(e.clientHeight)}),t}function i(e){console.log("start md");var t=(0,l["default"])(e,{gfm:!0,breaks:!0});console.log("done marked");var n=Array.prototype.map.call((0,c["default"])(t),function(e,t){return 3===e.nodeType&&"\n"===e.nodeValue?null:"P"===e.tagName?'<p class="gb-line">'+e.innerHTML+"</p>":'<div class="gb-line">'+e.outerHTML+"</div>"}).filter(function(e){return e});return console.log("end md"),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getNodeHeights=r,t.markdownToNodeStringList=i;var a=n(191),l=o(a),u=n(190),c=o(u)},447:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),s=n(12),p=n(25),d=o(p),h=n(178),y=o(h),b=n(448),g=o(b),m=n(3),v=o(m),w=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=n(496),_=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={showViewerPreference:!1},n.handlePrefClick=n.handlePrefClick.bind(n),n}return a(t,e),l(t,[{key:"handlePrefClick",value:function(){this.props.onPrefVisibilityChange(!this.props.showViewerPreference)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.showViewerPreference;return f["default"].createElement("div",{styleName:"viewer-panel"},f["default"].createElement("div",{styleName:"container"},f["default"].createElement("div",{styleName:"back"},f["default"].createElement(s.Link,{to:"/"},f["default"].createElement(d["default"],{name:"back"}),f["default"].createElement("span",null,"返回"))),f["default"].createElement("span",{styleName:"title"},t),f["default"].createElement("div",{onClick:this.handlePrefClick,styleName:"preference"},f["default"].createElement(d["default"],{name:"preference"})),f["default"].createElement(y["default"],null,n?f["default"].createElement(g["default"],null):null)))}}]),t}(c.Component);_=w([(0,v["default"])(P)],_),t["default"]=_},448:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),s=n(8),p=n(111),d=o(p),h=n(3),y=o(h),b=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},g=n(497),m=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),l(t,[{key:"render",value:function(){return f["default"].createElement("div",{styleName:"viewer-preference"},f["default"].createElement("ul",{className:"options"},f["default"].createElement("li",{styleName:"option-font-size"},f["default"].createElement("span",null,"A-"),f["default"].createElement("span",null,"A+")),f["default"].createElement("li",{styleName:"option-scroll"},f["default"].createElement("span",{className:"label"},"滚动模式"),f["default"].createElement(d["default"],{value:!0})),f["default"].createElement("li",{styleName:"option-theme"},f["default"].createElement("span",{style:{background:"#fff"}},"theme1"),f["default"].createElement("span",{style:{background:"#eee"}},"theme2"),f["default"].createElement("span",{style:{background:"#222"}},"theme3"))))}}]),t}(c.Component);m=b([(0,y["default"])(g)],m),t["default"]=(0,s.connect)()(m)},449:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),s=n(3),p=o(s),d=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},h=n(498),y=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.current,n=e.total,o=(t/n*100).toFixed(2)+"%";return this.props.visible&&f["default"].createElement("div",{styleName:"loc-info"},f["default"].createElement("div",null,f["default"].createElement("strong",null,t),"/",n),f["default"].createElement("div",{styleName:"sub-info"},o))}}]),t}(c.Component);y=d([(0,p["default"])(h)],y),t["default"]=y},494:function(e,t){e.exports={pages:"pages_1SNis","pages--fluid":"pages--fluid_39FPe pages_1SNis"}},495:function(e,t){e.exports={content:"content_1mydI",page:"page_1SU4h","page--fluid":"page--fluid_vX8rQ page_1SU4h","page--init":"page--init_8DZFB","page-no":"page-no_1jbV-"}},496:function(e,t){e.exports={"viewer-panel":"viewer-panel_aoOv7",container:"container_2cLNI",back:"back_ppxQ_",title:"title_3Nhli",preference:"preference_1wPa6"}},497:function(e,t){e.exports={"viewer-preference":"viewer-preference_1FNJZ",option:"option_19FXW","option-font-size":"option-font-size_18ONG option_19FXW","option-scroll":"option-scroll_3agtO option_19FXW",label:"label_3HLPp",switcher:"switcher_3T9K_","option-theme":"option-theme_38bUg option_19FXW"}},498:function(e,t){e.exports={scrollbar:"scrollbar_3vHlt",button:"button_1vdqU",track:"track_2FLTA","track--past":"track--past_3YKd4 track_2FLTA","loc-info":"loc-info_377Vu","sub-info":"sub-info_3qI5u"}},499:function(e,t){}});