webpackJsonp([17],{"3lMW":function(t,e){},K7wb:function(t,e){},aGEI:function(t,e){},oa25:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),r=a("exGp"),i=a.n(r),o=a("gS0T"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",{staticClass:"fw-none mt-2"},[t._v("\n    全部\n  ")]),t._v(" "),a("table",{staticClass:"table m-0"},[a("tr",{staticClass:"text-left"},[a("td",{staticClass:"text-accent",attrs:{width:"10%"}},[t._v("#")]),t._v(" "),a("td",{attrs:{width:"25%"}},[t._v("標簽名稱")]),t._v(" "),a("td",{attrs:{width:"20%"}},[t._v("標簽顏色")]),t._v(" "),a("td",{attrs:{width:"30%"}},[t._v("創建時間")]),t._v(" "),a("td",{staticClass:"text-center",attrs:{width:"10%"}})])])])}]};var c=a("VU/8")({name:"TagViewTop"},l,!1,function(t){a("aGEI")},"data-v-7cf6edb3",null).exports,d=(a("7t+N"),a("0jG4"),a("5nBN"),a("NAQQ")),u={name:"TagViewBody",props:{tags:{type:Array}},methods:{ser_timed:function(t){return d.a.timed.ser_timed(t,!0,!1)}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table m-0 table-top-line-none"},t._l(t.tags,function(e,s){return a("tr",{key:e.id,staticClass:"text-left"},[a("td",{staticClass:"text-accent",attrs:{width:"10%"}},[t._v(t._s(s+1))]),t._v(" "),a("td",{attrs:{width:"25%"}},[t._v(t._s(e.named))]),t._v(" "),a("td",{attrs:{width:"20%"}},[a("div",{staticClass:"tag-color",style:{background:e.color}}),t._v("  "+t._s(e.color)+"\n    ")]),t._v(" "),a("td",{attrs:{width:"30%"}},[t._v(t._s(t.ser_timed(e.add_time)))]),t._v(" "),a("td",{staticClass:"text-center",attrs:{width:"10%"}})])}),0)},staticRenderFns:[]};var h=a("VU/8")(u,_,!1,function(t){a("3lMW")},"data-v-14e83e80",null).exports,f=a("/xUl"),v={components:{TagViewTop:c,FullHeightLayout:o.a,TagViewBody:h},name:"TagView",data:function(){return{tagList:[]}},created:function(){var t=this;window.addEventListener("beforeunload",function(e){return t.beforLoad(e)})},destroyed:function(){var t=this;window.removeEventListener("beforeunload",function(e){return t.beforLoad(e)})},mounted:function(){this.getTag()},beforeDestroy:function(){alert("销毁组件")},methods:{getTag:function(){var t=this;return i()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.tag.getList_Tag();case 2:(a=e.sent)?t.tagList=a:tool.showToast("网络连接失败。");case 4:case"end":return e.stop()}},e,t)}))()},goPage:function(t){this.$router.push(t),this.$store.state.iframeSrc=this.$route.meta.link,this.$store.state.iframeTitle=this.$route.meta.title},beforLoad:function(t){console.log("Router =",this.$route.path),console.log("刷新了，或要关闭。")}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("full-height-layout",[e("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[this._v("標簽")]),this._v(" "),e("tag-view-top",{attrs:{slot:"layout_inner_head"},slot:"layout_inner_head"}),this._v(" "),this.tagList.length>0?e("tag-view-body",{attrs:{slot:"layout_inner_body",tags:this.tagList},slot:"layout_inner_body"}):this._e()],1)},staticRenderFns:[]};var w=a("VU/8")(v,g,!1,function(t){a("K7wb")},"data-v-8ce71046",null);e.default=w.exports}});
//# sourceMappingURL=17.0586420a1e332027c3ee.js.map