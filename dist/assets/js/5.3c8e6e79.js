(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(t,e,n){},193:function(t,e,n){},203:function(t,e,n){"use strict";var a=n(192);n.n(a).a},204:function(t,e,n){"use strict";var a=n(193);n.n(a).a},208:function(t,e,n){"use strict";n.r(e);n(30),n(143),n(144),n(67),n(32),n(45),n(145);var a=n(7),i=n(137),r=n(6),l=n(43),s=n(10),c=(n(68),n(66),n(146),n(23),n(147),function(t,e){if("i"!==e)return"".concat(e,".").concat(t+1);for(var n=[],a=0;a<=t;a++)n.push("i");return n.join("")}),o=function(t){return{allList:Object(r.a)((function(){return t.edges.map((function(t,e){var n,i,r=Object(a.a)({},t.node,{originalIndex:0===e?"i":e.toString(),anchor:null});return Object(a.a)({},r,{subChapter:(n=r.headings,i=r,n?n.map((function(t,e){return{originalIndex:c(e,i.originalIndex),title:t.value,path:"".concat(i.path).concat(t.anchor),anchor:t.anchor}})):null)})}))}))}},u=n(136),d={name:"menu-list",props:{isFiltered:Boolean,list:Array,onClick:Function}},h=(n(203),n(5)),p={components:{MenuList:Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[t.list?n("ul",{staticClass:"menu-list"},t._l(t.list,(function(e){return n("li",{key:e.originalIndex},[n("g-link",{attrs:{to:e.path}},[n("span",{on:{click:t.onClick}},[t._v("\n          "+t._s(e.originalIndex+".")+" "+t._s(e.title)+"\n        ")])]),t.isFiltered?n("menu-list",{attrs:{list:e.subChapter,onClick:t.onClick}}):t._e()],1)})),0):t._e()])}),[],!1,null,"0d7d55b0",null).exports},props:{isFiltered:Boolean,list:Array,metadata:Object},methods:{handleClick:function(){var t=document.querySelector("#main-content");t&&t.scrollTo(0,0)}}},f=(n(204),Object(h.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",[e("div",{staticClass:"table-of-content-outer"},[e("div",{staticClass:"table-of-content-inner"},[e("div",{staticClass:"table-of-content-content"},[e("div",{staticClass:"searchbar-wrapper"},[this._t("default")],2),e("div",{staticClass:"menu-list-wrapper"},[e("MenuList",{attrs:{isFiltered:this.isFiltered,list:this.list,onClick:this.handleClick}})],1)])])])])}),[],!1,null,"d8742a6c",null).exports),b={components:{TableOfContent:f,Searchbar:u.a},setup:function(t,e){var n=e.parent,c=n.$page.metadata,u=o(n.$page.allContent).allList,d=function(t){var e=Object(r.d)(""),n=function(t,e){return null!==e.title.match(t)||null!==e.path.match(t)},l=Object(r.a)((function(){var r=new RegExp(e.value,"igm");return t.value.reduce((function(t,e){var l=n(r,e),s=e.subChapter;e.subChapter&&(s=e.subChapter.filter((function(t){return n(r,t)})));var c=s.length>0;return l||c?[].concat(Object(i.a)(t),[Object(a.a)({},e,{subChapter:s})]):t}),[])}));return{query:e,handleTypingSearch:function(t){e.value=t},filteredList:l}}(u),h=d.query,p=d.handleTypingSearch,f=d.filteredList,b=Object(l.a)();return{metadata:c,isSidebarOpen:Object(l.b)(s.b),allList:u,filteredList:f,query:h,handleClose:function(){b(s.d,!1)},handleTypingSearch:p}}},C=Object(h.a)(b,(function(){var t=this.$createElement,e=this._self._c||t;return e("TableOfContent",{attrs:{isFiltered:""!==this.query,list:this.filteredList,metadata:this.metadata}},[e("Searchbar",{attrs:{placeholder:"Cari Chapter",onInput:this.handleTypingSearch}})],1)}),[],!1,null,null,null);e.default=C.exports}}]);