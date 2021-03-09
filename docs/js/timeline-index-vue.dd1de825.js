(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["timeline-index-vue","timeline-api-vue","timeline-examples-vue"],{"72ee":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:t.slots,title:"Slots"}}),n("component-api",{attrs:{items:t.events,title:"Events"}})],1)},o=[],c=(n("13d5"),n("9dce")),r={items:"The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.",color:'Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',icon:"A global icon string to apply to all the items.",itemTitleKey:"The property name (aka key) in each item object where to find the title of the item.",itemContentKey:"The property name (aka key) in each item object where to find the content of the item.",itemIconKey:"The property name (aka key) in each item object where to find the icon of the item.",itemColorKey:"The property name (aka key) in each item object where to find the color of the item."},l={item:{description:"Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}}},s={},m={data:function(){return{propsDescs:r,slots:l}},computed:{props:function(){return c["a"].props},events:function(){return c["a"].emits.reduce((function(t,e){return(t[e]={description:s[e]||""})&&t}),{})}}},a=m,p=n("2877"),h=Object(p["a"])(a,i,o,!1,null,null,null);e["default"]=h.exports},"7cde":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-link",{attrs:{h2:""}},[t._v("Basic")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1' },\n    { title: 'Item 2', content: 'Content 2' },\n    { title: 'Item 3', content: 'Content 3' },\n    { title: 'Item 4', content: 'Content 4' }\n  ]\n})\n")]},proxy:!0}])},[n("w-timeline",{attrs:{items:t.items1}})],1),n("title-link",{attrs:{h2:""}},[t._v("Color")]),t._m(0),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items" color="green"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1' },\n    { title: 'Item 2', content: 'Content 2' },\n    { title: 'Item 3', content: 'Content 3' },\n    { title: 'Item 4', content: 'Content 4' }\n  ]\n})\n")]},proxy:!0}])},[n("w-timeline",{attrs:{items:t.items1,color:"green"}})],1),n("title-link",{attrs:{h3:""}},[t._v("Different color per item")]),t._m(1),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1', color: 'pink' },\n    { title: 'Item 2', content: 'Content 2', color: 'error' },\n    { title: 'Item 3', content: 'Content 3', color: 'amber' },\n    { title: 'Item 4', content: 'Content 4', color: 'success' }\n  ]\n})\n")]},proxy:!0}])},[n("w-timeline",{attrs:{items:t.items2}})],1),n("title-link",{attrs:{h2:""}},[t._v("Icons")]),t._m(2),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items" icon="wi-check" color="green"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1' },\n    { title: 'Item 2', content: 'Content 2' },\n    { title: 'Item 3', content: 'Content 3' },\n    { title: 'Item 4', content: 'Content 4' }\n  ]\n})\n")]},proxy:!0}])},[n("w-timeline",{attrs:{items:t.items1,icon:"wi-check",color:"green"}})],1),n("title-link",{attrs:{h3:""}},[t._v("Different icon per item")]),t._m(3),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items" color="primary"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },\n    { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },\n    { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },\n    { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }\n  ]\n})\n")]},proxy:!0}])},[n("w-timeline",{attrs:{items:t.items3,color:"primary"}})],1),n("title-link",{attrs:{h2:""}},[t._v("Custom item template")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items">\n  <template #item="{ item, index }">\n    <w-icon>wi-check</w-icon>\n\n    <span class="mx2">\n      This is the custom item\n    </span>\n\n    <w-tag class="white grey-light2--bg">\n      '+t._s("{{ index }}")+"\n    </w-tag>\n  </template>\n</w-timeline>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1' },\n    { title: 'Item 2', content: 'Content 2' },\n    { title: 'Item 3', content: 'Content 3' },\n    { title: 'Item 4', content: 'Content 4' }\n  ]\n})\n")]},proxy:!0}])},[n("w-timeline",{attrs:{items:t.items1},scopedSlots:t._u([{key:"item",fn:function(e){e.item;var i=e.index;return[n("w-icon",[t._v("wi-check")]),n("span",{staticClass:"mx2"},[t._v("This is the custom item")]),n("w-tag",{staticClass:"white grey-light2--bg"},[t._v(t._s(i))])]}}])})],1),n("title-link",{attrs:{h3:""}},[t._v("Different custom template per item")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items">\n  <template #item.3>\n    <div class="pink">\n      My favorite item: 3\n    </div>\n\n    <w-icon class="pink">\n      mdi mdi-heart\n    </w-icon>\n  </template>\n</w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1' },\n    { title: 'Item 2', content: 'Content 2' },\n    { title: 'Item 3', content: 'Content 3' },\n    { title: 'Item 4', content: 'Content 4' }\n  ]\n})")]},proxy:!0}])},[n("w-timeline",{attrs:{items:t.items1},scopedSlots:t._u([{key:"item.3",fn:function(){return[n("span",{staticClass:"pink mr1"},[t._v("My favorite item: 3")]),n("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")])]},proxy:!0}])})],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("When setting a color through the "),n("code",[t._v("color")]),t._v(" prop, the color will be applied to both the item\nbullet or icon, and the item title, on each item.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("It is possible to set a different color per item (and override the global "),n("code",[t._v("color")]),t._v(" prop)\nby providing a "),n("code",[t._v("color")]),t._v(" attribute in the item object."),n("br"),t._v("\nThe name of this attribute can be changed via the "),n("code",[t._v("item-color-key")]),t._v(" prop.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The icon provided through the "),n("code",[t._v("icon")]),t._v(" prop will apply to all the items.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("It is possible to set a different icon per item (and override the global "),n("code",[t._v("icon")]),t._v(" prop)\nby providing an "),n("code",[t._v("icon")]),t._v(" attribute in the item object."),n("br"),t._v("\nThe name of this attribute can be changed via the "),n("code",[t._v("item-icon-key")]),t._v(" prop.")])}],c={data:function(){return{items1:[{title:"Item 1",content:"Content 1"},{title:"Item 2",content:"Content 2"},{title:"Item 3",content:"Content 3"},{title:"Item 4",content:"Content 4"}],items2:[{title:"Item 1",content:"Content 1",color:"pink"},{title:"Item 2",content:"Content 2",color:"error"},{title:"Item 3",content:"Content 3",color:"amber"},{title:"Item 4",content:"Content 4",color:"success"}],items3:[{title:"Item 1",content:"Content 1",icon:"wi-check-circle"},{title:"Item 2",content:"Content 2",icon:"wi-cross-circle"},{title:"Item 3",content:"Content 3",icon:"wi-warning-circle"},{title:"Item 4",content:"Content 4",icon:"wi-info-circle"}]}}},r=c,l=n("2877"),s=Object(l["a"])(r,i,o,!1,null,null,null);e["default"]=s.exports},"9b29":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("ui-component-title",[t._v("w-timeline")]),n("examples"),n("api")],1)},o=[],c=n("7cde"),r=n("72ee"),l={components:{Examples:c["default"],Api:r["default"]}},s=l,m=n("2877"),a=Object(m["a"])(s,i,o,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=timeline-index-vue.dd1de825.js.map