(function(e){function t(t){for(var n,s,p=t[0],a=t[1],l=t[2],c=0,u=[];c<p.length;c++)s=p[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);f&&f(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,p=1;p<o.length;p++){var a=o[p];0!==i[a]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-multi-items-input/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],a=p.push.bind(p);p.push=t,p=p.slice();for(var l=0;l<p.length;l++)t(p[l]);var f=a;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2462:function(e,t,o){"use strict";var n=o("f63e"),i=o.n(n);i.a},"2b02":function(e,t,o){},"2c52":function(e,t,o){"use strict";var n=o("f7e4"),i=o.n(n);i.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("multi-items-input",{attrs:{fetch:e.search,placeholder:"请输入关键字",height:50,separator:";","selection-only":!1,zIndexOfPopper:9999999},on:{select:e.select,delete:e.onDelete},model:{value:e.arr,callback:function(t){e.arr=t},expression:"arr"}}),n("p",[e._v(e._s(e.arr))])],1)},r=[],s=(o("4de4"),o("c975"),o("b0c0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jw-container",style:{height:e.height+"px"},on:{click:function(t){return t.target!==t.currentTarget?null:(t.preventDefault(),e.setLastItemFocus(t))}}},[e._l(e.selectedItems,(function(t,n){return o("input-item",{key:"selectedItems"+n,ref:"jw-selectedItems"+n,refInFor:!0,attrs:{uId:"selectedItems"+n,name:t.name,editable:!0,id:t.id,"fetch-suggestions":e.fetch,"trigger-on-focus":e.triggerOnFocus,suffix:e.separator,"selection-only":e.selectionOnly,marked:e.marked,zIndexOfPopper:e.zIndexOfPopper},on:{deleteClick:function(){return e.deleteItemGenerator(n)(t)},select:function(t){return e.addSelectedItemsGenerator(n)(t)},itemClick:e.handleItemClick}})})),0===e.selectedItems.length?o("auto-complete-input",{ref:"pre-input",staticClass:"pre-input",attrs:{"trigger-on-focus":e.triggerOnFocus,fetch:e.fetch,placeholder:e.placeholder,"selection-only":e.selectionOnly,zIndexOfPopper:e.zIndexOfPopper},on:{select:function(t){return e.addSelectedItemsGenerator(-1)(t)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}):e._e()],2)}),p=[],a=(o("4160"),o("a434"),o("a9e3"),o("159b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jwolfcn-container"},[o("input",e._b({ref:"input",attrs:{slot:"reference",type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled},domProps:{value:e.value},on:{input:e.input,blur:e.blur,focus:e.focus,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.keyEnter(t)},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.keyEnter(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.keyUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.keyDown(t)}]},slot:"reference"},"input",[e.$attrs],!1)),o("autoCompleteSuggestions",{ref:"suggestions",class:[e.popperClass?e.popperClass:""],attrs:{"append-to-body":!0,placement:e.placement,value:e.show,zIndexOfPopper:e.zIndexOfPopper}},[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"items-container"},e._l(e.internalItems,(function(t,n){return o("div",{key:"jw__item"+n,ref:"jwolfcn__item"+n,refInFor:!0,staticClass:"jwolfcn-list-item",class:{"jwolfcn-list-active":n===e.cursor},on:{click:function(o){return o.stopPropagation(),o.preventDefault(),e.onClickItem(o,t)}}},[o("div",[e._v(e._s(t.name))])])})),0)])])],1)}),l=[],f=o("15d3"),c=(o("a101"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"drawer"},on:{"after-leave":e.doDestroy}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showPopper,expression:"showPopper"}]},[!e.parent.hideLoading&&e.parent.loading?o("p",[o("i",{staticClass:"icon-loading"})]):e._t("default")],2)])}),u=[],d=(o("ac1f"),o("1276"),o("d81d"),o("fb6a"),o("0d03"),o("e439"),o("b64b"),o("d3b7"),o("acd8"),o("25f0"),o("5319"),o("bf2d")),h=function(){var e=window,t={placement:"bottom",gpuAcceleration:!0,offset:0,boundariesElement:"viewport",boundariesPadding:5,preventOverflowOrder:["left","right","top","bottom"],flipBehavior:"flip",arrowElement:"[x-arrow]",arrowOffset:0,modifiers:["shift","offset","preventOverflow","keepTogether","arrow","flip","applyStyle"],modifiersIgnored:[],forceAbsolute:!1};function o(e,o,n){this._reference=e.jquery?e[0]:e,this.state={};var i="undefined"===typeof o||null===o,r=o&&"[object Object]"===Object.prototype.toString.call(o);return this._popper=i||r?this.parse(r?o:{}):o.jquery?o[0]:o,this._options=Object.assign({},t,n),this._options.modifiers=this._options.modifiers.map(function(e){if(-1===this._options.modifiersIgnored.indexOf(e))return"applyStyle"===e&&this._popper.setAttribute("x-placement",this._options.placement),this.modifiers[e]||e}.bind(this)),this.state.position=this._getPosition(this._popper,this._reference),c(this._popper,{position:this.state.position,top:0}),this.update(),this._setupEventListeners(),this}function n(t){var o=t.style.display,n=t.style.visibility;t.style.display="block",t.style.visibility="hidden";t.offsetWidth;var i=e.getComputedStyle(t),r=parseFloat(i.marginTop)+parseFloat(i.marginBottom),s=parseFloat(i.marginLeft)+parseFloat(i.marginRight),p={width:t.offsetWidth+s,height:t.offsetHeight+r};return t.style.display=o,t.style.visibility=n,p}function i(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function r(e){var t=Object.assign({},e);return t.right=t.left+t.width,t.bottom=t.top+t.height,t}function s(e,t){var o,n=0;for(o in e){if(e[o]===t)return n;n++}return null}function p(t,o){var n=e.getComputedStyle(t,null);return n[o]}function a(t){var o=t.offsetParent;return o!==e.document.body&&o?o:e.document.documentElement}function l(t){var o=t.parentNode;return o?o===e.document?e.document.body.scrollTop||e.document.body.scrollLeft?e.document.body:e.document.documentElement:-1!==["scroll","auto"].indexOf(p(o,"overflow"))||-1!==["scroll","auto"].indexOf(p(o,"overflow-x"))||-1!==["scroll","auto"].indexOf(p(o,"overflow-y"))?o:l(t.parentNode):t}function f(t){return t!==e.document.body&&("fixed"===p(t,"position")||(t.parentNode?f(t.parentNode):t))}function c(e,t){function o(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}Object.keys(t).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&o(t[n])&&(i="px"),e.style[n]=t[n]+i}))}function u(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function d(e){var t={width:e.offsetWidth,height:e.offsetHeight,left:e.offsetLeft,top:e.offsetTop};return t.right=t.left+t.width,t.bottom=t.top+t.height,t}function h(e){var t=e.getBoundingClientRect(),o=-1!=navigator.userAgent.indexOf("MSIE"),n=o&&"HTML"===e.tagName?-e.scrollTop:t.top;return{left:t.left,top:n,right:t.right,bottom:t.bottom,width:t.right-t.left,height:t.bottom-n}}function m(e,t,o){var n=h(e),i=h(t);if(o){var r=l(t);i.top+=r.scrollTop,i.bottom+=r.scrollTop,i.left+=r.scrollLeft,i.right+=r.scrollLeft}var s={top:n.top-i.top,left:n.left-i.left,bottom:n.top-i.top+n.height,right:n.left-i.left+n.width,width:n.width,height:n.height};return s}function g(t){for(var o=["","ms","webkit","moz","o"],n=0;n<o.length;n++){var i=o[n]?o[n]+t.charAt(0).toUpperCase()+t.slice(1):t;if("undefined"!==typeof e.document.body.style[i])return i}return null}return o.prototype.destroy=function(){return this._popper.removeAttribute("x-placement"),this._popper.style.left="",this._popper.style.position="",this._popper.style.top="",this._popper.style[g("transform")]="",this._removeEventListeners(),this._options.removeOnDestroy&&this._popper.remove(),this},o.prototype.update=function(){var e={instance:this,styles:{}};e.placement=this._options.placement,e._originalPlacement=this._options.placement,e.offsets=this._getOffsets(this._popper,this._reference,e.placement),e.boundaries=this._getBoundaries(e,this._options.boundariesPadding,this._options.boundariesElement),e=this.runModifiers(e,this._options.modifiers),"function"===typeof this.state.updateCallback&&this.state.updateCallback(e)},o.prototype.onCreate=function(e){return e(this),this},o.prototype.onUpdate=function(e){return this.state.updateCallback=e,this},o.prototype.parse=function(t){var o={tagName:"div",classNames:["popper"],attributes:[],parent:e.document.body,content:"",contentType:"text",arrowTagName:"div",arrowClassNames:["popper__arrow"],arrowAttributes:["x-arrow"]};t=Object.assign({},o,t);var n=e.document,i=n.createElement(t.tagName);if(p(i,t.classNames),a(i,t.attributes),"node"===t.contentType?i.appendChild(t.content.jquery?t.content[0]:t.content):"html"===t.contentType?i.innerHTML=t.content:i.textContent=t.content,t.arrowTagName){var r=n.createElement(t.arrowTagName);p(r,t.arrowClassNames),a(r,t.arrowAttributes),i.appendChild(r)}var s=t.parent.jquery?t.parent[0]:t.parent;if("string"===typeof s){if(s=n.querySelectorAll(t.parent),s.length>1&&console.warn("WARNING: the given `parent` query("+t.parent+") matched more than one element, the first one will be used"),0===s.length)throw"ERROR: the given `parent` doesn't exists!";s=s[0]}return s.length>1&&s instanceof Element===!1&&(console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"),s=s[0]),s.appendChild(i),i;function p(e,t){t.forEach((function(t){e.classList.add(t)}))}function a(e,t){t.forEach((function(t){e.setAttribute(t.split(":")[0],t.split(":")[1]||"")}))}},o.prototype._getPosition=function(e,t){var o=a(t);if(this._options.forceAbsolute)return"absolute";var n=f(t,o);return n?"fixed":"absolute"},o.prototype._getOffsets=function(e,t,o){o=o.split("-")[0];var i={};i.position=this.state.position;var r="fixed"===i.position,s=m(t,a(e),r),p=n(e);return-1!==["right","left"].indexOf(o)?(i.top=s.top+s.height/2-p.height/2,i.left="left"===o?s.left-p.width:s.right):(i.left=s.left+s.width/2-p.width/2,i.top="top"===o?s.top-p.height:s.bottom),i.width=p.width,i.height=p.height,{popper:i,reference:s}},o.prototype._setupEventListeners=function(){if(this.state.updateBound=this.update.bind(this),e.addEventListener("resize",this.state.updateBound),"window"!==this._options.boundariesElement){var t=l(this._reference);t!==e.document.body&&t!==e.document.documentElement||(t=e),t.addEventListener("scroll",this.state.updateBound),this.state.scrollTarget=t}},o.prototype._removeEventListeners=function(){e.removeEventListener("resize",this.state.updateBound),"window"!==this._options.boundariesElement&&this.state.scrollTarget&&(this.state.scrollTarget.removeEventListener("scroll",this.state.updateBound),this.state.scrollTarget=null),this.state.updateBound=null},o.prototype._getBoundaries=function(t,o,n){var i,r,s={};if("window"===n){var p=e.document.body,f=e.document.documentElement;r=Math.max(p.scrollHeight,p.offsetHeight,f.clientHeight,f.scrollHeight,f.offsetHeight),i=Math.max(p.scrollWidth,p.offsetWidth,f.clientWidth,f.scrollWidth,f.offsetWidth),s={top:0,right:i,bottom:r,left:0}}else if("viewport"===n){var c=a(this._popper),u=l(this._popper),h=d(c),m=function(e){return e==document.body?Math.max(document.documentElement.scrollTop,document.body.scrollTop):e.scrollTop},g=function(e){return e==document.body?Math.max(document.documentElement.scrollLeft,document.body.scrollLeft):e.scrollLeft},y="fixed"===t.offsets.popper.position?0:m(u),v="fixed"===t.offsets.popper.position?0:g(u);s={top:0-(h.top-y),right:e.document.documentElement.clientWidth-(h.left-v),bottom:e.document.documentElement.clientHeight-(h.top-y),left:0-(h.left-v)}}else s=a(this._popper)===n?{top:0,left:0,right:n.clientWidth,bottom:n.clientHeight}:d(n);return s.left+=o,s.right-=o,s.top=s.top+o,s.bottom=s.bottom-o,s},o.prototype.runModifiers=function(e,t,o){var n=t.slice();return void 0!==o&&(n=this._options.modifiers.slice(0,s(this._options.modifiers,o))),n.forEach(function(t){u(t)&&(e=t.call(this,e))}.bind(this)),e},o.prototype.isModifierRequired=function(e,t){var o=s(this._options.modifiers,e);return!!this._options.modifiers.slice(0,o).filter((function(e){return e===t})).length},o.prototype.modifiers={},o.prototype.modifiers.applyStyle=function(e){var t,o={position:e.offsets.popper.position},n=Math.round(e.offsets.popper.left),i=Math.round(e.offsets.popper.top);return this._options.gpuAcceleration&&(t=g("transform"))?(o[t]="translate3d("+n+"px, "+i+"px, 0)",o.top=0,o.left=0):(o.left=n,o.top=i),Object.assign(o,e.styles),c(this._popper,o),this._popper.setAttribute("x-placement",e.placement),this.isModifierRequired(this.modifiers.applyStyle,this.modifiers.arrow)&&e.offsets.arrow&&c(e.arrowElement,e.offsets.arrow),e},o.prototype.modifiers.shift=function(e){var t=e.placement,o=t.split("-")[0],n=t.split("-")[1];if(n){var i=e.offsets.reference,s=r(e.offsets.popper),p={y:{start:{top:i.top},end:{top:i.top+i.height-s.height}},x:{start:{left:i.left},end:{left:i.left+i.width-s.width}}},a=-1!==["bottom","top"].indexOf(o)?"x":"y";e.offsets.popper=Object.assign(s,p[a][n])}return e},o.prototype.modifiers.preventOverflow=function(e){var t=this._options.preventOverflowOrder,o=r(e.offsets.popper),n={left:function(){var t=o.left;return o.left<e.boundaries.left&&(t=Math.max(o.left,e.boundaries.left)),{left:t}},right:function(){var t=o.left;return o.right>e.boundaries.right&&(t=Math.min(o.left,e.boundaries.right-o.width)),{left:t}},top:function(){var t=o.top;return o.top<e.boundaries.top&&(t=Math.max(o.top,e.boundaries.top)),{top:t}},bottom:function(){var t=o.top;return o.bottom>e.boundaries.bottom&&(t=Math.min(o.top,e.boundaries.bottom-o.height)),{top:t}}};return t.forEach((function(t){e.offsets.popper=Object.assign(o,n[t]())})),e},o.prototype.modifiers.keepTogether=function(e){var t=r(e.offsets.popper),o=e.offsets.reference,n=Math.floor;return t.right<n(o.left)&&(e.offsets.popper.left=n(o.left)-t.width),t.left>n(o.right)&&(e.offsets.popper.left=n(o.right)),t.bottom<n(o.top)&&(e.offsets.popper.top=n(o.top)-t.height),t.top>n(o.bottom)&&(e.offsets.popper.top=n(o.bottom)),e},o.prototype.modifiers.flip=function(e){if(!this.isModifierRequired(this.modifiers.flip,this.modifiers.preventOverflow))return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"),e;if(e.flipped&&e.placement===e._originalPlacement)return e;var t=e.placement.split("-")[0],o=i(t),n=e.placement.split("-")[1]||"",s=[];return s="flip"===this._options.flipBehavior?[t,o]:this._options.flipBehavior,s.forEach(function(p,a){if(t===p&&s.length!==a+1){t=e.placement.split("-")[0],o=i(t);var l=r(e.offsets.popper),f=-1!==["right","bottom"].indexOf(t);(f&&Math.floor(e.offsets.reference[t])>Math.floor(l[o])||!f&&Math.floor(e.offsets.reference[t])<Math.floor(l[o]))&&(e.flipped=!0,e.placement=s[a+1],n&&(e.placement+="-"+n),e.offsets.popper=this._getOffsets(this._popper,this._reference,e.placement).popper,e=this.runModifiers(e,this._options.modifiers,this._flip))}}.bind(this)),e},o.prototype.modifiers.offset=function(e){var t=this._options.offset,o=e.offsets.popper;return-1!==e.placement.indexOf("left")?o.top-=t:-1!==e.placement.indexOf("right")?o.top+=t:-1!==e.placement.indexOf("top")?o.left-=t:-1!==e.placement.indexOf("bottom")&&(o.left+=t),e},o.prototype.modifiers.arrow=function(e){var t=this._options.arrowElement,o=this._options.arrowOffset;if("string"===typeof t&&(t=this._popper.querySelector(t)),!t)return e;if(!this._popper.contains(t))return console.warn("WARNING: `arrowElement` must be child of its popper element!"),e;if(!this.isModifierRequired(this.modifiers.arrow,this.modifiers.keepTogether))return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"),e;var i={},s=e.placement.split("-")[0],p=r(e.offsets.popper),a=e.offsets.reference,l=-1!==["left","right"].indexOf(s),f=l?"height":"width",c=l?"top":"left",u=l?"left":"top",d=l?"bottom":"right",h=n(t)[f];a[d]-h<p[c]&&(e.offsets.popper[c]-=p[c]-(a[d]-h)),a[c]+h>p[d]&&(e.offsets.popper[c]+=a[c]+h-p[d]);var m=a[c]+(o||a[f]/2-h/2),g=m-p[c];return g=Math.max(Math.min(p[f]-h-8,g),8),i[c]=g,i[u]="",e.offsets.arrow=i,e.arrowElement=t,e},Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),o=1;o<arguments.length;o++){var n=arguments[o];if(void 0!==n&&null!==n){n=Object(n);for(var i=Object.keys(n),r=0,s=i.length;r<s;r++){var p=i[r],a=Object.getOwnPropertyDescriptor(n,p);void 0!==a&&a.enumerable&&(t[p]=n[p])}}}return t}}),o}();console.log(Object(d["a"])(h));var m=h,g=function(e){return e.stopPropagation()},y={props:{transformOrigin:{type:[Boolean,String],default:!0},placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:{},popper:{},offset:{default:0},value:Boolean,visibleArrow:Boolean,arrowOffset:{type:Number,default:35},appendToBody:{type:Boolean,default:!0},popperOptions:{type:Object,default:function(){return{gpuAcceleration:!1}}},zIndexOfPopper:{type:Number}},data:function(){return{showPopper:!1,currentPlacement:""}},watch:{value:{immediate:!0,handler:function(e){this.showPopper=e,this.$emit("input",e)}},showPopper:function(e){this.disabled||(e?this.updatePopper():this.destroyPopper(),this.$emit("input",e))}},methods:{createPopper:function(){var e=this;if(!this.$isServer&&(this.currentPlacement=this.currentPlacement||this.placement,/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))){var t=this.popperOptions,o=this.popperElm=this.popperElm||this.popper||this.$refs.popper,n=this.referenceElm=this.referenceElm||this.reference||this.$refs.reference;!n&&this.$slots.reference&&this.$slots.reference[0]&&(n=this.referenceElm=this.$slots.reference[0].elm),o&&n&&(this.visibleArrow&&this.appendArrow(o),this.appendToBody&&document.body.appendChild(this.popperElm),this.popperJS&&this.popperJS.destroy&&this.popperJS.destroy(),t.placement=this.currentPlacement,t.offset=this.offset,t.arrowOffset=this.arrowOffset,this.popperJS=new m(n,o,t),this.popperJS.onCreate((function(){e.$emit("created",e),e.resetTransformOrigin(),e.$nextTick(e.updatePopper)})),"function"===typeof t.onUpdate&&this.popperJS.onUpdate(t.onUpdate),!isNaN(this.zIndexOfPopper)&&(this.popperJS._popper.style.zIndex=this.zIndexOfPopper),this.popperElm.addEventListener("click",g))}},updatePopper:function(){var e=this.popperJS;e?(e.update(),e._popper&&!isNaN(this.zIndexOfPopper)&&(e._popper.style.zIndex=this.zIndexOfPopper)):this.createPopper()},doDestroy:function(e){!this.popperJS||this.showPopper&&!e||(this.popperJS.destroy(),this.popperJS=null)},destroyPopper:function(){this.popperJS&&this.resetTransformOrigin()},resetTransformOrigin:function(){if(this.transformOrigin){var e={top:"bottom",bottom:"top",left:"right",right:"left"},t=this.popperJS._popper.getAttribute("x-placement").split("-")[0],o=e[t];this.popperJS._popper.style.transformOrigin="string"===typeof this.transformOrigin?this.transformOrigin:["top","bottom"].indexOf(t)>-1?"center ".concat(o):"".concat(o," center")}},appendArrow:function(e){var t;if(!this.appended){for(var o in this.appended=!0,e.attributes)if(/^_v-/.test(e.attributes[o].name)){t=e.attributes[o].name;break}var n=document.createElement("div");t&&n.setAttribute(t,""),n.setAttribute("x-arrow",""),n.className="popper__arrow",e.appendChild(n)}}},beforeDestroy:function(){console.log("this.$options",this.$options.beforeDestroy),this.doDestroy(!0),this.popperElm&&this.popperElm.parentNode===document.body&&(this.popperElm.removeEventListener("click",g),document.body.removeChild(this.popperElm))},deactivated:function(){this.$options.beforeDestroy[0].call(this)}},v={mixins:[y],componentName:"AutocompleteSuggestions",data:function(){return{parent:this.$parent,dropdownWidth:""}},props:{options:{default:function(){return{gpuAcceleration:!1}}},id:String},methods:{},updated:function(){var e=this;this.$nextTick((function(){e.popperJS&&e.updatePopper()}))},mounted:function(){this.$parent.popperElm=this.popperElm=this.$el,this.referenceElm=this.$parent.$refs.input||this.$parent.$refs.textarea}},b=v,w=(o("2c52"),o("2877")),_=Object(w["a"])(b,c,u,!1,null,"39a0ede7",null),O=_.exports,x={name:"AutoCompleteInput",inheritAttrs:!1,components:{autoCompleteSuggestions:O},props:{value:null,getLabel:{type:Function,default:function(e){return e}},triggerOnFocus:{type:Boolean},fetch:{type:Function},placeholder:String,disabled:{type:Boolean,default:!1},keepOpen:{type:Boolean,default:!1},selectionOnly:{type:Boolean,default:!1},placement:{},zIndexOfPopper:{type:Number}},data:function(){return{showList:!1,cursor:-1,selectedItem:null,internalItems:[],popperClass:"items-container"}},mounted:function(){},computed:{hasItems:function(){return!!this.internalItems.length},show:function(){return this.showList&&this.hasItems||this.keepOpen},minCursor:function(){return this.selectionOnly?0:-1}},methods:{__fetch:Object(f["a"])(300,(function(){var e=this;"function"===typeof this.fetch&&this.fetch(this.value,(function(t){e.internalItems=t,e.showList=!0}))})),__itemView:function(e){e&&e.scrollIntoView&&e.scrollIntoView(!1)},__selectItem:function(e){e&&(this.selectedItem=e,this.$emit("select",e))},input:function(e){this.$emit("input",e.target.value),this.__fetch()},focus:function(){return this.triggerOnFocus&&this.__fetch()},blur:function(){var e=this;this.$emit("blur"),setTimeout((function(){e.showList=!1}),200)},onClickItem:function(e,t){this.showList=!1,this.__selectItem(t)},keyUp:function(){this.cursor>this.minCursor&&(this.cursor--,this.$refs["jwolfcn__item"+this.cursor]&&this.__itemView(this.$refs["jwolfcn__item"+this.cursor][0]))},keyDown:function(){this.cursor<this.internalItems.length-1&&(this.cursor++,this.$refs["jwolfcn__item"+this.cursor]&&this.__itemView(this.$refs["jwolfcn__item"+this.cursor][0]))},keyEnter:function(){this.cursor<0&&this.value.length>0&&this.__selectItem({name:this.value,id:null}),this.showList&&this.internalItems[this.cursor]&&(this.__selectItem(this.internalItems[this.cursor]),this.showList=!1)}},watch:{show:function(){this.cursor=this.minCursor}}},I=x,k=(o("2462"),Object(w["a"])(I,a,l,!1,null,"e4a9e76c",null)),j=k.exports,E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"point-container",on:{click:function(t){return t.preventDefault(),e.itemClick(t)}}},[o("span",{staticClass:"label",class:{marked:e.uId===e.marked}},[e._v(e._s(e.name+e.suffix))]),o("autocomplete",{ref:"input",staticClass:"place-hold",style:{width:e.inputWidth+"px"},attrs:{disabled:!e.editable,triggerOnFocus:e.triggerOnFocus,fetch:e.fetchSuggestions,"selection-only":e.selectionOnly,zIndexOfPopper:e.zIndexOfPopper},on:{select:e.select},nativeOn:{input:function(t){return e.inputHandle(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteHandle(e.v)}},model:{value:e.v,callback:function(t){e.v=t},expression:"v"}}),o("pre",{ref:"sensor",staticStyle:{"font-size":"16px",visibility:"hidden",position:"fixed","z-index":"-1",bottom:"-99999px"}},[e._v(e._s(e.v))])],1)},S=[],$={name:"InputItem",components:{autocomplete:j},props:{triggerOnFocus:{type:Boolean},id:{type:[Boolean,String,Number]},editable:{type:[Boolean],default:!1},name:{type:[String]},suffix:{type:[String]},marked:{type:[String]},fetchSuggestions:{type:Function},selectionOnly:{type:Boolean,default:!1},uId:{type:String},zIndexOfPopper:{type:Number}},data:function(){return{v:"",inputWidth:6}},methods:{itemClick:function(){if(this.editable)return this.__focus(),void this.$emit("itemClick",{id:this.id,name:this.name,uId:this.uId})},__focus:function(){var e=this.$refs.input.$el.querySelector("input");e&&e.focus()},select:function(e){this.v="",this.inputWidth=6,this.$emit("select",e)},deleteHandle:function(){0===this.v.length&&this.$emit("deleteClick",this.id)},inputHandle:function(e){var t=this;this.v=e.target.value,this.$nextTick((function(){t.inputWidth=t.$refs["sensor"].clientWidth+6}))}}},P=$,C=(o("c1c7"),Object(w["a"])(P,E,S,!1,null,"00b30768",null)),N=C.exports,T={name:"MultiItemsInput",components:{AutoCompleteInput:j,InputItem:N},props:{value:{type:Array},fetch:{type:Function},triggerOnFocus:{type:Boolean,default:!0},placeholder:{type:String},height:{type:Number},separator:{type:String,default:" "},selectionOnly:{type:Boolean,default:!1},zIndexOfPopper:{type:Number}},data:function(){return{editable:!0,selectedItems:[],keywords:"",marked:""}},mounted:function(){Array.isArray(this.value)&&(this.selectedItems=this.value),this.$refs["pre-input"].$el.querySelector("input").focus()},methods:{addSelectedItemsGenerator:function(e){var t=this,o=e+1;return function(e){t.selectedItems.splice(o,0,e),t.$nextTick((function(){if(t.selectedItems.length>0){var e=t.$refs["jw-selectedItems"+o];e&&e[0]&&e[0].$el.querySelector("input").focus()}})),t.$emit("select",t.selectedItems,e),t.$emit("input",t.selectedItems),t.marked=""}},deleteItemGenerator:function(e){var t=this;return function(o){if(t.selectedItems.splice(e,1),e){var n=e-1;t.$nextTick((function(){var e=t.$refs["jw-selectedItems"+n][0];e&&e.$el.querySelector("input").focus()}))}else t.$nextTick((function(){var e=t.$refs["pre-input"];e&&e.$el.querySelector("input").focus()}));t.$emit("delete",o,t.selectedItems),t.$emit("input",t.selectedItems),t.marked=""}},setLastItemFocus:function(){if(!(this.selectedItems.length<1)){var e=this.$refs["jw-selectedItems"+(this.selectedItems.length-1)][0];e&&e.$el.querySelector("input").focus()}},handleItemClick:function(e){this.marked=e.uId}},watch:{value:function(){var e=[];Array.isArray(this.value)&&this.value.forEach((function(t){e.push(t)})),this.selectedItems=e}}},A=T,M=(o("f72d"),Object(w["a"])(A,s,p,!1,null,"08093d26",null)),L=M.exports,B={name:"app",components:{MultiItemsInput:L},data:function(){return{data:null,arr:[{name:"xueli@jwolf.cn",id:23},{name:"xiaohong@jwolf.cn",id:24},{name:"xiaoming@jwolf.cn",id:25},{name:"xiaoting@jwolf.cn",id:26},{name:"xiaoze@jwolf.cn",id:27},{name:"xiaobei@jwolf.cn",id:28},{name:"xiaowei@jwolf.cnxxx",id:29}]}},methods:{search:function(e,t){var o=[{name:"xiaob@jwolf.cn",id:1},{name:"xiaorou@jwolf.cn",id:2},{name:"liming@jwolf.cn",id:3},{name:"lizz@jwolf.cn",id:12},{name:"wess@jwolf.cn",id:13},{name:"liang@jwolf.cn",id:14},{name:"abd@jwolf.cn",id:21},{name:"bbcc@jwolf.cn",id:22},{name:"xueli@jwolf.cn",id:23},{name:"xiaohong@jwolf.cn",id:24},{name:"xiaoming@jwolf.cn",id:25},{name:"xiaoting@jwolf.cn",id:26},{name:"xiaoze@jwolf.cn",id:27},{name:"xiaobei@jwolf.cn",id:28},{name:"xiaowei@jwolf.cn",id:29}];setTimeout((function(){if(e){var n=o.filter((function(t){return t.name.indexOf(e)>-1}));t(n)}else t(o)}),500)},select:function(e,t){this.data=JSON.stringify(e)+t},onDelete:function(e,t){this.data=JSON.stringify(e)+",   "+JSON.stringify(t)}}},z=B,F=(o("5c0b"),Object(w["a"])(z,i,r,!1,null,null,null)),W=F.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(W)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),i=o.n(n);i.a},"9c0c":function(e,t,o){},"9f5e":function(e,t,o){},c1c7:function(e,t,o){"use strict";var n=o("9f5e"),i=o.n(n);i.a},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},f63e:function(e,t,o){},f72d:function(e,t,o){"use strict";var n=o("2b02"),i=o.n(n);i.a},f7e4:function(e,t,o){}});