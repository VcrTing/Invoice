webpackJsonp([5],{"2uTJ":function(t,e,i){"use strict";var s=i("7t+N"),n=i.n(s),r=(i("0jG4"),i("5nBN")),a=i.n(r),o=i("NAQQ"),c={name:"PricePlusLeft",props:{prices_contented:{type:Array},selected:{type:Array}},mounted:function(){},methods:{unit:function(t){return a.a.ser_unit(t)},inList:function(t,e){return o.a.inList(t,e)},itemOption:function(t,e){"add"==e?this.$emit("addItemChild",t):"remove"==e&&this.$emit("removeItemChild",t)},changeNum:function(t,e){var i=n()("#price_"+t).val();this.$emit("changeNum_Father",e,i)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table m-0 table-top-line-none"},[i("tbody",{staticClass:"listing-tbody"},t._l(t.prices_contented,function(e,s){return i("tr",{key:e.id,staticClass:"prices-item",class:{inActive:!t.inList(e.id,t.selected),"bg-white":t.inList(e.id,t.selected)}},[i("td",{staticClass:"text-accent",attrs:{width:"10%"}},[t._v(t._s(s+1))]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v(t._s(e.num))]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v(t._s(e.named))]),t._v(" "),i("td",{staticClass:"table-input-td ",attrs:{width:"25%"}},[i("div",{staticClass:"float-left mt-1 text-input"},[t._v("$")]),t._v(" "),i("div",{staticClass:"input-group input-group-sm float-left listing-num-input"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"price_"+e.id},domProps:{value:e.price},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changeNum(e.id,s)},change:function(i){return t.changeNum(e.id,s)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v("/"+t._s(t.unit(e.unit)))])])])]),t._v(" "),i("td",{attrs:{width:"10%"}}),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.inList(e.id,t.selected),expression:"inList(f.id, selected)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-remove",on:{click:function(i){return t.itemOption(e.id,"remove")}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.inList(e.id,t.selected),expression:"!inList(f.id, selected)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-plus",on:{click:function(i){return t.itemOption(e.id,"add")}}})])])])}),0)])},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(t){i("wOGy")},"data-v-07cdd75c",null);e.a=d.exports},"4b/9":function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s),r=i("NAQQ"),a=i("r0bt"),o=i("UQ+I"),c=i("GP9U"),l=i("FCMV"),d={components:{HelpIcon:a.a,SortOption:o.a,SelectOption:c.a,LoadingSmall:l.a},name:"PricesPlusTop",props:{_freights:{type:Array},_select:{type:Array}},data:function(){return{isSort:!1,isAll:!1}},methods:{sortOption:function(){this._freights.reverse(),this.isSort=!this.isSort,this.isSort?r.a.showToast("逆序排列"):r.a.showToast("顺序排列")},selectOption:function(){var t=this;if(this.isAll)this._select.splice(1,this._select.length-1),this.isAll=!1,r.a.showToast("移除全选");else{var e=this._freights.filter(function(e){return!r.a.inList(e.id,t._select)}),i=!0,s=!1,a=void 0;try{for(var o,c=n()(e);!(i=(o=c.next()).done);i=!0){var l=o.value;this._select.push(l.id)}}catch(t){s=!0,a=t}finally{try{!i&&c.return&&c.return()}finally{if(s)throw a}}this.isAll=!0,r.a.showToast("全选")}}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row of-visible"},[i("div",{staticClass:"col-sm-6 pt-2"},[i("h5",{staticClass:"fw-none"},[t._t("title",[t._v("\n          选择菜品\n        ")])],2)]),t._v(" "),t._freights.length>0?i("div",{staticClass:"col-sm-6 pt-1 text-right of-visible"},[i("sort-option",{attrs:{_list:t._freights}}),t._v(" "),i("select-option",{attrs:{_listFull:t._freights,_list:t._select}})],1):i("div",{staticClass:"col-sm-6 d-flex justify-content-end of-visible"},[i("div",{staticClass:"right-loading"},[i("loading-small")],1)])]),t._v(" "),i("table",{staticClass:"table m-0"},[i("tr",{staticClass:"text-left"},[i("td",{attrs:{width:"10%"}},[t._v("序号")]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("货号")]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v("描述")]),t._v(" "),i("td",{attrs:{width:"25%"}},[t._v("\n        单价\n        "),i("help-icon",{attrs:{help_code:"prices_input"}})],1),t._v(" "),i("td",{attrs:{width:"10%"}}),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("选择")])])])])},staticRenderFns:[]};var u=i("VU/8")(d,m,!1,function(t){i("QC06")},"data-v-ad7a6018",null);e.a=u.exports},KAHu:function(t,e){},KSW8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("mvHQ"),a=i.n(r),o=i("BO1k"),c=i.n(o),l=(i("7t+N"),i("5nBN"),i("NAQQ")),d=i("I76R"),m=i.n(d),u=i("wYMm"),h=i("U6je"),_=i("2uTJ"),v=i("/xUl"),p=i("O6kI"),f=i("W64k"),b=i("nN2X"),g=i("4b/9"),C=i("U5hB"),y=i("lT1N"),w=i("cpG1"),F={components:{InsertFreightModal:y.a,DefLayout:h.a,PricesPlusBody:_.a,MemberChoiseModal:p.a,PricesPlusFooter:f.a,PricesPdfModal:b.a,PricesPlusTop:g.a,Loading:C.a,Empty:w.a},name:"PricesPlus",data:function(){return{price_content:[],select:[],select_content:[],member:null,numed_prices:"",timed_prices:"",isLoading:!0}},mounted:function(){this.loadMember();this.loadPricContent()},methods:{loadFreightsToContent:function(){var t=this;if(null!=this.member){var e={tag:this.member.tag.id};setTimeout(function(){v.a.freight.getList_Freight(e,!0).then(function(e){console.log("Freights = "),console.log(e),t.select=[],t.price_content=[];var i=!0,s=!1,n=void 0;try{for(var r,a=c()(e);!(i=(r=a.next()).done);i=!0){var o=r.value;t.price_content.push({id:o.id,num:o.num,named:o.named,unit:o.unit,price:o.price})}}catch(t){s=!0,n=t}finally{try{!i&&a.return&&a.return()}finally{if(s)throw n}}if(t.isLoading=!1,t.price_content.length>0){for(var d in t.price_content)d<400&&t.select.push(t.price_content[d].id);t.$store.state.is_num_order&&console.log("启动Num排序...")}else l.a.showToast("未找到与该标签相关的菜品，请自行加入菜品。",4200)}).catch(function(e){t.isLoading=!1,t.price_content=[]})},u.a.delayTime)}},loadPricContent:function(){if(this.price_content.length<1){var t=l.a.storage._get("prices_active_price_content");return null!=t&&""!=t&&void 0!=t?this.price_content=JSON.parse(t):this.loadFreightsToContent(),!1}return!0},loadMember:function(){if(null==this.member){var t=l.a.storage._get("prices_active_member");return null!=t&&""!=t&&void 0!=t?this.member=JSON.parse(t):l.a.showModal("memberChoiseModal"),!1}return!0},_validate:function(){if(!this.loadMember())return!1;var t=m.a.val_timed(this.timed_prices,"报价时间",!0);return 1==t||(l.a.showToast(t),!1)},_collect:function(){var t=this;this.select_content=this.price_content.filter(function(e){return l.a.inList(e.id,t.select)})},_submit:function(){var t=this;this._collect();var e={num:this.numed_prices,start_time:this.timed_prices+" 00:00:00",draft_status:"False",membery_id:this.member.id,freight_num:this.select_content.length};v.a.prices.add(e).then(function(e){v.a.judge_response(e)&&v.a.prices_content.add({price_collect_id:e.id,content:a()(t.select_content)}).then(function(e){v.a.judge_response(e)&&(l.a.showToast("报价单新增成功！！！"),l.a.closeAllModal(),l.a.storage._set("prices_active_member",""),setTimeout(function(){t.$router.push("/home/prices")},700))})})},pricesPdfView:function(){this._collect(),l.a.showModal("pricesPdfViewModal")},pricesSubmit:function(){var t="";if(""==this.timed_prices&&(t="请检查报价时间的输入！"),""==this.numed_prices&&(t="请检查报价单号的输入！"),""!=t)l.a.showToast(t);else{if(!this._validate())return;this._submit()}},changeMember:function(){null!=this.member&&this.$refs.memberChoiseModal.loadFirstChoise(this.member),l.a.showModal("memberChoiseModal")},removeItem:function(t){var e=l.a.indexList(t,this.select);this.select.length<2?l.a.showToast("至少选择一项菜品。"):this.select.splice(e,1)},addItem:function(t){l.a.indexList(t,this.select)<0&&this.select.push(t)},changeNum:function(t,e){this.price_content[t].price=e},openFreightInsert:function(){this.$refs.insertFreight.openInsertFreight(),this.$refs.insertFreight.loadHaventFreight()},reciverChoised:function(t){this.member=t,l.a.storage._set("prices_active_member",a()(t)),this.loadFreightsToContent()},reciverTimed:function(t){this.timed_prices=t},reciverNumed:function(t){this.numed_prices=t},reciverInsertFreight:function(t){this.price_content.unshift(n()({},t))}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("def-layout",[i("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("新增报价单")]),t._v(" "),i("prices-plus-top",{attrs:{slot:"layout_inner_head",_freights:t.price_content,_select:t.select},slot:"layout_inner_head"}),t._v(" "),t.price_content.length>0?i("prices-plus-body",{attrs:{slot:"layout_inner_body",selected:t.select,prices_contented:t.price_content},on:{removeItemChild:t.removeItem,addItemChild:t.addItem,changeNum_Father:t.changeNum},slot:"layout_inner_body"}):t.isLoading?i("loading",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}):i("empty",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}),t._v(" "),i("div",{attrs:{slot:"layout_footer"},slot:"layout_footer"},[i("prices-plus-footer",{attrs:{membery:t.member},on:{reciverTimed_Father:t.reciverTimed,reciverNumed_Father:t.reciverNumed,changeMember_Father:t.changeMember,pricesSubmit_Father:t.pricesSubmit,pricesPdfView_Father:t.pricesPdfView}})],1),t._v(" "),i("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[i("member-choise-modal",{ref:"memberChoiseModal",on:{returnChoised:t.reciverChoised}}),t._v(" "),i("prices-pdf-modal",{attrs:{the_member:t.member,the_prices_timed:t.timed_prices,the_prices_numed:t.numed_prices,the_prices_content:t.select_content,isPlus:!0},on:{submit_Father:t.pricesSubmit}}),t._v(" "),t.isLoading?t._e():i("insert-freight-modal",{ref:"insertFreight",attrs:{haved:t.price_content},on:{reciverInsert:t.reciverInsertFreight}})],1)],1)},staticRenderFns:[]};var M=i("VU/8")(F,x,!1,function(t){i("abHZ")},"data-v-29c5d32e",null);e.default=M.exports},O6kI:function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s),r=i("NAQQ"),a=i("/xUl"),o={components:{ListingMemberFaceCard:i("5MlZ").a},name:"MemberChoiseModal",data:function(){return{members:[],memberChoise:null}},mounted:function(){var t=this;a.a.member.getList_Member().then(function(e){t.loadFirstChoise(e[0]),t.members=e})},methods:{loadFirstChoise:function(t){null==this.memberChoise&&(this.memberChoise=t)},choised:function(t){var e=!0,i=!1,s=void 0;try{for(var r,a=n()(this.members);!(e=(r=a.next()).done);e=!0){var o=r.value;o.id==t&&(this.memberChoise=o)}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}},choiseSubmit:function(){null==this.memberChoise?r.a.showToast("您还未选择一名客户"):(this.$emit("returnChoised",this.memberChoise),r.a.closeModal("memberChoiseModal"))}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"memberChoiseModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),null!=t.memberChoise?i("listing-member-face-card",{attrs:{the_member:t.memberChoise}}):t._e()],1),t._v(" "),i("div",{staticClass:"modal-body pt-0 pb-0"},[i("div",{},[t.members.length>0?i("table",{staticClass:"table table-top-line-none"},t._l(t.members,function(e){return i("tr",{key:e.id,staticClass:"hand",class:{"item-choise":e.id==t.memberChoise.id},on:{click:function(i){return t.choised(e.id)}}},[i("td",[t._v(t._s(e.num))]),t._v(" "),i("td",[t._v(t._s(e.named))]),t._v(" "),i("td",[t._v(t._s(e.addr))])])}),0):t._e()])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("离开")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.choiseSubmit}},[t._v("确认选择")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"modal-title"},[this._v("\n          选择的客户：\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示: 需要选择一名客户才能开始制作表单\n          ")])])}]};var l=i("VU/8")(o,c,!1,function(t){i("lX/b")},"data-v-fd8d2638",null);e.a=l.exports},QC06:function(t,e){},W64k:function(t,e,i){"use strict";var s=i("NAQQ"),n=i("ryLw"),r=i("5MlZ"),a=i("s89H"),o=i("/xUl"),c={name:"PricesPlusFooter",components:{SimpleInput:n.a,ListingMemberFaceCard:r.a,LoadingMiddle:a.a},props:{membery:{type:Object},isPlus:{type:Boolean,default:!0}},data:function(){return{timed_prices:"",numed_prices:""}},methods:{_pricesSubmit:function(){this.$emit("pricesSubmit_Father")},pricesSubmit:function(){s.a.click("pricesResBtn")},pricesPdfView:function(){this.$emit("pricesPdfView_Father")},reciverTimed:function(t){this.timed_prices=t,this.$emit("reciverTimed_Father",this.timed_prices)},reciverNumed:function(t){var e=this;this.numed_prices=t,o.a.prices.getOneByAny({num:t}).then(function(i){o.a.judge_response(i[0])?(e.$emit("reciverNumed_Father",""),s.a.showToast("报价单号“"+t+"”重复，数据库中已有相同单号的报价单！")):e.$emit("reciverNumed_Father",e.numed_prices)})},changeMember:function(){this.$emit("changeMember_Father")},addIntoFreight:function(){s.a.showModal("insertFreightModal")},locationData:function(t,e){this.$refs.numRef.locationData(t),this.$refs.timedRef.locationData(e)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("h5",{staticClass:"fw-none text-accent"},[t._v("其他信息")]),t._v(" "),i("listing-member-face-card",{directives:[{name:"show",rawName:"v-show",value:null!=t.membery,expression:"membery!=null"}],attrs:{is_icon:t.isPlus,the_member:t.membery},on:{changeSignal:t.changeMember}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:null==t.membery,expression:"membery==null"}],staticClass:"member-loading-wrapper"},[i("loading-middle")],1)],1),t._v(" "),i("div",{staticClass:"col-sm-3 pt-4"},[i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{ref:"numRef",attrs:{the_name:"prices_numd",the_tip_header:"报价单号",the_placeholder:"- -",the_min_length:3,the_max_length:12},on:{returnValue:t.reciverNumed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("报价单号：")])])],1),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{ref:"timedRef",attrs:{the_name:"prices_timed",the_tip_header:"报价时间",the_placeholder:"yyyy-mm-dd"},on:{returnValue:t.reciverTimed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("报价时间：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-3 flex-center"}),t._v(" "),i("div",{staticClass:"col-sm-1 flex-center"},[i("button",{staticClass:"hidden",attrs:{id:"pricesResBtn"},on:{click:t._pricesSubmit}})]),t._v(" "),i("div",{staticClass:"col-sm-2 pt-2"},[i("button",{staticClass:"btn btn-light btn-block btn-sm",on:{click:t.addIntoFreight}},[i("span",{staticClass:"fs-16"},[t._v("+")]),t._v("\n      加入菜品\n    ")]),t._v(" "),i("button",{staticClass:"btn btn-outline-info btn-block btn-sm",on:{click:t.pricesPdfView}},[t._v("下一步")])])])},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(t){i("KAHu")},"data-v-3ddfeedc",null);e.a=d.exports},abHZ:function(t,e){},"lX/b":function(t,e){},wOGy:function(t,e){}});
//# sourceMappingURL=5.d32817e6349a4ffdc2bb.js.map