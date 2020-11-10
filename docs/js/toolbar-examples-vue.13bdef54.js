(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["toolbar-examples-vue"],{"1f5b":function(t,s,a){"use strict";a("ddbe")},"50f4":function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("title-link",{attrs:{h2:""}},[t._v("Simple toolbar with shadow")]),a("example",{attrs:{"content-class":"pa4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-toolbar shadow>\n  <div class="title2">Title</div>\n  <div class="spacer"></div>\n  <span class="ml2">Item 1</span>\n  <span class="ml2">Item 2</span>\n  <span class="ml2">Item 3</span>\n</w-toolbar>\n\n<w-toolbar shadow class="mt6 py1">\n  <w-icon color="light-blue-dark3" size="2.5em">wi-wave</w-icon>\n  <div class="title3">Wave UI</div>\n  <div class="spacer"></div>\n  <w-button icon="mdi mdi-home" text lg class="ml3"></w-button>\n  <w-button icon="mdi mdi-chat" text lg class="ml3"></w-button>\n  <w-button icon="mdi mdi-email" text lg class="ml3"></w-button>\n</w-toolbar>\n')]},proxy:!0}])},[a("w-toolbar",{attrs:{shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])]),a("w-toolbar",{staticClass:"mt6 py1",attrs:{shadow:""}},[a("w-icon",{staticClass:"mr3",staticStyle:{color:"#497ca2"},attrs:{size:"2.5em"}},[t._v("wi-wave")]),a("div",{staticClass:"title3 my0"},[t._v("Wave UI")]),a("div",{staticClass:"spacer"}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-home",text:"",lg:""}}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-chat",text:"",lg:""}}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-email",text:"",lg:""}})],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(0),a("example",{attrs:{"content-class":"pa4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-toolbar bg-color="blue-light5" color="blue-dark3">\n  <div class="title2">Title</div>\n  <div class="spacer"></div>\n  <span class="ml2">Item 1</span>\n  <span class="ml2">Item 2</span>\n  <span class="ml2">Item 3</span>\n</w-toolbar>\n')]},proxy:!0}])},[a("w-toolbar",{attrs:{"bg-color":"blue-light5",color:"blue-dark3"}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])],1),a("title-link",{attrs:{h2:""}},[t._v("Toolbars inside w-card")]),a("p",[t._v("The w-card component will detect if there is a toolbar in the title slot or in the actions\nslot and will remove the default padding and border on this slot if there is.\n")]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-flex wrap :gap="4" class="mt4">\n  <w-card>\n    <template #title>\n      <w-toolbar>\n        <div class="title2">Top Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n\n  <w-card>\n    <template #actions>\n      <w-toolbar bottom>\n        <div class="title2">Bottom Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n</w-flex>\n\n<h3>With shadow</h3>\n\n<w-flex wrap :gap="4" class="mt4">\n  <w-card>\n    <template #title>\n      <w-toolbar shadow>\n        <div class="title2">Top Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n\n  <w-card>\n    <template #actions>\n      <w-toolbar bottom shadow>\n        <div class="title2">Bottom Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n</w-flex>')]},proxy:!0},{key:"css",fn:function(){return[t._v(".w-card {\n  flex-grow: 1;\n  max-width: 550px;\n  height: 200px;\n}\n")]},proxy:!0}])},[a("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[a("w-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("w-toolbar",[a("div",{staticClass:"title2 my0"},[t._v("Top Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])}),a("w-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[a("w-toolbar",{attrs:{bottom:""}},[a("div",{staticClass:"title2 my0"},[t._v("Bottom Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])})],1),a("h3",[t._v("With shadow")]),a("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[a("w-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("w-toolbar",{attrs:{shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Top Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])}),a("w-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[a("w-toolbar",{attrs:{bottom:"",shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Bottom Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])})],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Custom toolbar height")]),t._m(1),a("example",{attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-toolbar bg-color="blue-light5" color="blue-dark3" height="5em" class="py0">\n  <div class="title2">Title</div>\n  <div class="spacer"></div>\n  <span class="mx1">Item 1</span>\n  <span class="mx1">Item 2</span>\n  <w-divider vertical class="mx2"></w-divider>\n  <span class="mx1">Item 3</span>\n  <span class="mx1">Item 4</span>\n  <w-divider vertical class="mx2"></w-divider>\n  <span class="mx1">Item 5</span>\n  <span class="mx1">Item 6</span>\n</w-toolbar>')]},proxy:!0}])},[a("w-toolbar",{staticClass:"py0",attrs:{"bg-color":"blue-light5",color:"blue-dark3",height:"5.4em"}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"mx1"},[t._v("Item 1")]),a("span",{staticClass:"mx1"},[t._v("Item 2")]),a("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),a("span",{staticClass:"mx1"},[t._v("Item 3")]),a("span",{staticClass:"mx1"},[t._v("Item 4")]),a("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),a("span",{staticClass:"mx1"},[t._v("Item 5")]),a("span",{staticClass:"mx1"},[t._v("Item 6")])],1)],1)],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Like in most components, you can set a "),a("code",[t._v("color")]),t._v(" for the text and a "),a("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("The "),a("code",[t._v("w-toolbar")]),t._v(" component also accepts a height. It can be set as a string with units\nor a number of pixels (without unit).\n")])}],e=(a("1f5b"),a("2877")),i={},c=Object(e["a"])(i,l,n,!1,null,null,null);s["default"]=c.exports},ddbe:function(t,s,a){}}]);
//# sourceMappingURL=toolbar-examples-vue.13bdef54.js.map