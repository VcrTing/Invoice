webpackJsonp([6],{"4Me+":function(t,e){},NpgD:function(t,e){},YQkM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("NAQQ"),n=a("3MUH"),s=a("gS0T"),o={name:"SortOption",props:{_list:{type:Array}},data:function(){return{isSort:!1}},methods:{sortOption:function(){this._list.reverse(),this.isSort=!this.isSort,this.isSort?i.a.showToast("逆序排列"):i.a.showToast("顺序排列")}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-info btn-sm pb-0 float-right",on:{click:this.sortOption}},[this.isSort?e("i",{staticClass:"fa fa-toggle-up"}):e("i",{staticClass:"fa fa-toggle-down "})])},staticRenderFns:[]};var l={components:{SortOption:a("VU/8")(o,r,!1,function(t){a("4Me+")},"data-v-09e4ed5e",null).exports,SearchOption:a("0ti1").a},name:"FreightViewTop",props:{freights:{type:Array}},methods:{openSearch:function(){i.a.showModal("freightSearchModal")}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row of-visible"},[this._m(0),this._v(" "),e("div",{staticClass:"col-sm-6 pt-1 text-right of-visible"},[e("sort-option",{attrs:{_list:this.freights}}),this._v(" "),e("search-option",{on:{openSearch_Father:this.openSearch}})],1)]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 pt-2"},[e("h5",{staticClass:"fw-none"},[this._v("\n        全部\n      ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table"},[a("tr",[a("td",{staticClass:"text-accent",attrs:{width:"5%"}},[t._v("#")]),t._v(" "),a("td",{attrs:{width:"10%"}},[t._v("编号")]),t._v(" "),a("td",{attrs:{width:"20%"}},[t._v("菜品名称")]),t._v(" "),a("td",{attrs:{width:"15%"}},[t._v("价格")]),t._v(" "),a("td",{attrs:{width:"10%"}},[t._v("单位")]),t._v(" "),a("td",{attrs:{width:"30%"}},[t._v("标签")]),t._v(" "),a("td",{attrs:{width:"10%"}})])])}]};var h=a("VU/8")(l,c,!1,function(t){a("gnx2")},"data-v-88c27fbc",null).exports,_=a("/xUl"),d=(a("7t+N"),a("0jG4"),a("5nBN")),u=a.n(d),g={name:"FreightViewBody",props:{freights:{type:Array}},methods:{unit:function(t){return u.a.ser_unit(t)}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table m-0 table-top-line-none"},t._l(t.freights,function(e,i){return a("tr",{key:e.id},[a("td",{staticClass:"text-accent",attrs:{width:"5%"}},[t._v(t._s(i+1))]),t._v(" "),a("td",{attrs:{width:"10%"}},[t._v(t._s(e.num))]),t._v(" "),a("td",{attrs:{width:"20%"}},[t._v(t._s(e.named))]),t._v(" "),a("td",{attrs:{width:"15%"}},[t._v("$ "+t._s(e.price))]),t._v(" "),a("td",{attrs:{width:"10%"}},[t._v("  "+t._s(t.unit(e.unit)))]),t._v(" "),a("td",{attrs:{width:"30%"}},t._l(e.tag,function(e){return a("div",{key:e.id,staticClass:"tag tag-table tag-table-fix",style:{background:e.color}},[t._v("\n        "+t._s(e.named)+"\n      ")])}),0),t._v(" "),a("td",{attrs:{width:"10%"}})])}),0)},staticRenderFns:[]};var p=a("VU/8")(g,f,!1,function(t){a("NpgD")},"data-v-18410415",null).exports,v=a("WNq0"),m={name:"PageOption",props:{_page:{type:Object}},methods:{totalPage:function(){return n.a.getTotalPage(this._page.limit,this._page.count)},nowPage:function(){return n.a.getNowPage(this._page.offsetNow,this._page.limit)},pageOption:function(t){var e="";e=t?this._page.next:this._page.previous,this.$emit("loadData_Father",e)}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-light btn-sm btn-pager",on:{click:function(e){return t.pageOption(!1)}}},[t._v("上一页")]),t._v(" "),a("div",{staticClass:"page-num-wrapper d-inline text-input"},[t._v("\n    "+t._s(t.nowPage())+"/"+t._s(t.totalPage())+"\n  ")]),t._v(" "),a("button",{staticClass:"btn btn-light btn-sm btn-pager",on:{click:function(e){return t.pageOption(!0)}}},[t._v("下一页")])])},staticRenderFns:[]};var b={components:{PagerOption:a("VU/8")(m,w,!1,function(t){a("k6dM")},"data-v-6ee49001",null).exports},name:"FreightViewFooter",props:{_pageLink:{type:Object}},methods:{_loadData:function(t){this.$emit("_loadData_Father",t)}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"}),this._v(" "),e("div",{staticClass:"col-sm-6 text-right"},[e("pager-option",{attrs:{_page:this._pageLink},on:{loadData_Father:this._loadData}})],1)])},staticRenderFns:[]};var F=a("VU/8")(b,y,!1,function(t){a("s/GW")},"data-v-cee68856",null).exports,x=a("cpG1"),k={components:{FullHeightLayout:s.a,FreightViewTop:h,FreightViewBody:p,FreightViewSearch:v.a,FreightViewFooter:F,Empty:x.a},name:"FreightView",data:function(){return{freightList:[],pageLink:{next:"",previous:"",count:0,offsetNow:0,limit:100}}},mounted:function(){this.loadData()},methods:{loadData:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};null==t&&(t=n.a.buildFirstPagerUrl(_.a.freight.url,a,{offset:0,limit:this.pageLink.limit})),_.a.freight.getListPage(t).then(function(a){e.freightList=a.results,e.pageLink.count=a.count,e.pageLink.next=a.next,e.pageLink.previous=a.previous,e.pageLink.offsetNow=n.a.getOffset(t),console.log(e.pageLink)})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("full-height-layout",[a("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("菜品")]),t._v(" "),a("freight-view-top",{attrs:{slot:"layout_inner_head",freights:t.freightList},slot:"layout_inner_head"}),t._v(" "),t.freightList.length>0?a("freight-view-body",{attrs:{slot:"layout_inner_body",freights:t.freightList},slot:"layout_inner_body"}):a("empty",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}),t._v(" "),a("freight-view-footer",{attrs:{slot:"layout_footer",_pageLink:t.pageLink},on:{_loadData_Father:t.loadData},slot:"layout_footer"}),t._v(" "),a("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[a("freight-view-search",{on:{loadData_Father:t.loadData}})],1)],1)},staticRenderFns:[]};var L=a("VU/8")(k,C,!1,function(t){a("gwOx")},"data-v-9903ad18",null);e.default=L.exports},gnx2:function(t,e){},gwOx:function(t,e){},k6dM:function(t,e){},"s/GW":function(t,e){}});
//# sourceMappingURL=6.a5467f233f7a9f05eab9.js.map