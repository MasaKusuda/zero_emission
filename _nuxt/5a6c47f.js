(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{428:function(e,t,r){"use strict";r(11),r(13),r(15),r(16);var n=r(2),o=(r(6),r(28),r(14),r(25),r(58),r(409),r(52),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(417),r(418),r(419),r(420),r(421),r(422),r(53),r(55),r(12),r(59),r(263),r(1)),c=r(88),l=r(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],v=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),j=O.reduce((function(e,t){return e["offset"+Object(l.t)(t)]={type:[String,Number],default:null},e}),{}),y=O.reduce((function(e,t){return e["order"+Object(l.t)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(v),offset:Object.keys(j),order:Object.keys(y)};function w(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);return d||function(){var e,t;for(t in d=[],m)m[t].forEach((function(e){var n=r[e],o=w(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),h.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})},434:function(e,t,r){e.exports=r.p+"img/v.134d708.png"},447:function(e,t,r){"use strict";r.r(t);var n={name:"InspirePage"},o=r(68),c=r(101),l=r.n(c),f=r(428),d=r(445),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{staticClass:"text-center"},[n("img",{staticClass:"mb-5",attrs:{src:r(434),alt:"Vuetify.js"}}),e._v(" "),n("blockquote",{staticClass:"blockquote"},[e._v("\n      “First, solve the problem. Then, write the code.”\n      "),n("footer",[n("small",[n("em",[e._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);