webpackJsonp([6],{"5MlZ":function(t,e,s){"use strict";var i={name:"ListingMemberFaceCard",props:{the_member:{type:Object}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",[s("tr",[t._m(0),t._v(" "),s("td",{staticClass:"pl-3"},[s("div",[t._v(t._s(t.the_member.named))]),t._v(" "),s("div",{staticClass:"fs-12"},[t._v("编号："+t._s(t.the_member.num))])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"member-face"},[e("div",{staticClass:"img"})])}]};var a=s("VU/8")(i,n,!1,function(t){s("XajI")},"data-v-376e63ac",null);e.a=a.exports},"6Lz+":function(t,e){},R7tk:function(t,e){},Rur9:function(t,e){},TnNI:function(t,e){},XajI:function(t,e){},ZuDf:function(t,e){},lysK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7t+N"),n=s.n(i),a=s("0jG4"),r=(s("5nBN"),s("NAQQ")),l={name:"ListingTableItem",props:{listing:{type:Object}},methods:{itemOption:function(t,e){"trash"==e&&(n()("#listingId").val(t),r.a.showModal("trashModal"))}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row listing-wrapper bg-white mb-2"},[s("div",{staticClass:"col-sm-6 fs-12"},[s("div",{staticClass:"listing-title"},[t._v(t._s(t.listing.membery.named))]),t._v(" "),s("div",[t._v(t._s(t.listing.membery.addr))]),t._v(" "),s("table",[s("tr",[s("td",{attrs:{width:"109px"}},[t._v("客户编号")]),t._v(" "),s("td",[t._v(t._s(t.listing.membery.num))]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("报价单号")]),t._v(" "),s("td",[t._v(t._s(t.listing.price_collect.num))]),t._v(" "),s("td")])])]),t._v(" "),s("div",{staticClass:"col-sm-6 text-right"},[s("div",{staticClass:"listing-action"},[s("button",{staticClass:"btn btn-outline-info btn-sm fs-12"},[t._v("打印")]),t._v(" "),s("button",{staticClass:"btn btn-outline-danger btn-sm fs-12",on:{click:function(e){return t.itemOption(t.listing.id,"trash")}}},[t._v("删除")])]),t._v(" "),s("table",{staticClass:"listing-sub mt-2"},[s("tr",[s("td"),s("td",{attrs:{width:"120px"}},[t._v("发票日期")]),s("td",{staticClass:"text-right listing-sub-time",attrs:{width:"130px"}},[t._v(t._s(t.listing.listing_time))])]),t._v(" "),s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[s("div",{staticClass:"listing-sub-icon float-right",on:{click:function(e){return t.itemOption(t.listing.id,"edit")}}},[s("i",{staticClass:"fa fa-angle-right"})])])])])])])},staticRenderFns:[]};var m={name:"ListingLeft",components:{ListingTableItem:s("VU/8")(l,c,!1,function(t){s("R7tk")},"data-v-f727c776",null).exports,ItemTrash:s("HT3s").a},data:function(){return{listings:a.a.listingList}},methods:{trashListing:function(){var t=n()("#listingId").val();alert("删除 Id = "+t)}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._l(this.listings,function(t){return e("listing-table-item",{key:t.id,attrs:{listing:t}})}),this._v(" "),e("item-trash",{on:{trashItem:this.trashListing}}),this._v(" "),e("input",{attrs:{type:"hidden",value:"",id:"listingId"}})],2)},staticRenderFns:[]};var o=s("VU/8")(m,d,!1,function(t){s("Rur9")},"data-v-367c72fd",null).exports,v={name:"ListingMemberItem",props:{select:{type:Boolean}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"member-card-simple fs-12",class:{"member-choise-active":t.select}},[t._m(0),t._v(" "),s("div",{staticClass:"member-right-msg float-left pl-2"},[s("div",{},[t._t("member_named",[t._v("--")])],2),t._v(" "),s("div",{staticClass:"fs-10"},[t._v("\n      编号："),t._t("member_num",[t._v("0000")])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"member-left-face float-left"},[e("div",{staticClass:"face-img"})])}]};var _={components:{ListingMemberItem:s("VU/8")(v,u,!1,function(t){s("TnNI")},"data-v-74899769",null).exports,ListingMemberFaceCard:s("5MlZ").a},name:"ListingRight",data:function(){return{memberSelect:a.a.members[0],members:a.a.members}},methods:{itemChoise:function(t){alert("id = "+t);var e=this.members.filter(function(e){return e.id==t});this.memberSelect=e[0]}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"member-choise-panel"},[s("div",{staticClass:"pl-2 mt-2"},[s("listing-member-face-card",{attrs:{the_member:t.memberSelect}})],1),t._v(" "),s("div",{staticClass:"fs-12 mt-4"},[t._v("选择客户：")]),t._v(" "),s("div",{staticClass:"filter-member-panel mt-1 pt-2"},t._l(t.members,function(e){return s("listing-member-item",{key:e.id,attrs:{select:e.id==t.memberSelect.id},on:{click:function(s){return t.itemChoise(e.id)}}},[s("div",{attrs:{slot:"member_named"},slot:"member_named"},[t._v(t._s(e.named))]),t._v(" "),s("span",{attrs:{slot:"member_num"},slot:"member_num"},[t._v(t._s(e.num))])])}),1)])])},staticRenderFns:[]};var h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row content-top-bar def-shadow"},[e("div",{staticClass:"col-sm-2"}),this._v(" "),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"page-title fw-b pt-2"},[this._v("发票列表")]),this._v(" "),e("table",{staticClass:"table pb-0 mb-0"},[e("tr",{staticClass:"text-left text-accent"},[e("td",[this._v("全部发票")])])])]),this._v(" "),e("div",{staticClass:"col-sm-2"})])}]};var b={components:{ListingLeft:o,ListingRight:s("VU/8")(_,f,!1,function(t){s("6Lz+")},"data-v-01486f26",null).exports,ListingTop:s("VU/8")({name:"LisingTop"},h,!1,function(t){s("zugw")},"data-v-af338492",null).exports},name:"ListingVue",data:function(){return{layoutTest:[1,2,3,4,5,6,7,8,9,10]}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-between full-content bg-hui"},[e("div",{staticClass:"content-top-panel"},[e("listing-top")],1),this._v(" "),e("div",{staticClass:"content-left-panel"},[e("listing-left")],1),this._v(" "),e("div",{staticClass:"content-right-panel def-shadow"},[e("listing-right")],1)])},staticRenderFns:[]};var p=s("VU/8")(b,g,!1,function(t){s("ZuDf")},"data-v-1de45b2e",null);e.default=p.exports},zugw:function(t,e){}});
//# sourceMappingURL=6.b165fabc86bd15d67144.js.map