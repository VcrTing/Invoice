webpackJsonp([7],{"2II4":function(t,e){},"2uTJ":function(t,e,i){"use strict";var s=i("7t+N"),a=i.n(s),n=(i("0jG4"),i("5nBN")),r=i.n(n),c=i("NAQQ"),o={name:"PricePlusLeft",props:{prices_contented:{type:Array},selected:{type:Array}},mounted:function(){},methods:{unit:function(t){return r.a.ser_unit(t)},inList:function(t,e){return c.a.inList(t,e)},itemOption:function(t,e){"add"==e?this.$emit("addItemChild",t):"remove"==e&&this.$emit("removeItemChild",t)},changeNum:function(t,e){var i=a()("#price_"+t).val();this.$emit("changeNum_Father",e,i)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table m-0 table-top-line-none"},[i("tbody",{staticClass:"listing-tbody"},t._l(t.prices_contented,function(e,s){return i("tr",{key:e.id,staticClass:"prices-item",class:{inActive:!t.inList(e.id,t.selected),"bg-white":t.inList(e.id,t.selected)}},[i("td",{staticClass:"text-accent",attrs:{width:"10%"}},[t._v(t._s(s+1))]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v(t._s(e.num))]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v(t._s(e.named))]),t._v(" "),i("td",{staticClass:"table-input-td ",attrs:{width:"25%"}},[i("div",{staticClass:"float-left mt-1 text-input"},[t._v("$")]),t._v(" "),i("div",{staticClass:"input-group input-group-sm float-left listing-num-input"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"price_"+e.id},domProps:{value:e.price},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changeNum(e.id,s)},change:function(i){return t.changeNum(e.id,s)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v("/"+t._s(t.unit(e.unit)))])])])]),t._v(" "),i("td",{attrs:{width:"10%"}}),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.inList(e.id,t.selected),expression:"inList(f.id, selected)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-remove",on:{click:function(i){return t.itemOption(e.id,"remove")}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.inList(e.id,t.selected),expression:"!inList(f.id, selected)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-plus",on:{click:function(i){return t.itemOption(e.id,"add")}}})])])])}),0)])},staticRenderFns:[]};var d=i("VU/8")(o,l,!1,function(t){i("wOGy")},"data-v-07cdd75c",null);e.a=d.exports},"4b/9":function(t,e,i){"use strict";var s=i("BO1k"),a=i.n(s),n=i("NAQQ"),r=i("r0bt"),c=i("UQ+I"),o=i("GP9U"),l=i("FCMV"),d={components:{HelpIcon:r.a,SortOption:c.a,SelectOption:o.a,LoadingSmall:l.a},name:"PricesPlusTop",props:{_freights:{type:Array},_select:{type:Array}},data:function(){return{isSort:!1,isAll:!1}},methods:{sortOption:function(){this._freights.reverse(),this.isSort=!this.isSort,this.isSort?n.a.showToast("逆序排列"):n.a.showToast("順序排列")},selectOption:function(){var t=this;if(this.isAll)this._select.splice(1,this._select.length-1),this.isAll=!1,n.a.showToast("移除全選");else{var e=this._freights.filter(function(e){return!n.a.inList(e.id,t._select)}),i=!0,s=!1,r=void 0;try{for(var c,o=a()(e);!(i=(c=o.next()).done);i=!0){var l=c.value;this._select.push(l.id)}}catch(t){s=!0,r=t}finally{try{!i&&o.return&&o.return()}finally{if(s)throw r}}this.isAll=!0,n.a.showToast("全選")}}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row of-visible"},[i("div",{staticClass:"col-sm-6 pt-2"},[i("h5",{staticClass:"fw-none"},[t._t("title",[t._v("\n          選擇產品\n        ")])],2)]),t._v(" "),t._freights.length>0?i("div",{staticClass:"col-sm-6 pt-1 text-right of-visible"},[i("sort-option",{attrs:{_list:t._freights}}),t._v(" "),i("select-option",{attrs:{_listFull:t._freights,_list:t._select}})],1):i("div",{staticClass:"col-sm-6 d-flex justify-content-end of-visible"},[i("div",{staticClass:"right-loading"},[i("loading-small")],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table m-0"},[i("tr",{staticClass:"text-left"},[i("td",{attrs:{width:"10%"}},[t._v("序號")]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("貨號")]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v("描述")]),t._v(" "),i("td",{attrs:{width:"25%"}},[t._v("\n        單價\n        ")]),t._v(" "),i("td",{attrs:{width:"10%"}}),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("選擇")])])])}]};var u=i("VU/8")(d,m,!1,function(t){i("sBAn")},"data-v-09eeeada",null);e.a=u.exports},BdNu:function(t,e){},O6kI:function(t,e,i){"use strict";var s=i("BO1k"),a=i.n(s),n=i("NAQQ"),r=i("/xUl"),c={components:{ListingMemberFaceCard:i("5MlZ").a},name:"MemberChoiseModal",data:function(){return{members:[],memberChoise:null}},mounted:function(){var t=this;r.a.member.getList_Member().then(function(e){t.loadFirstChoise(e[0]),t.members=e})},methods:{loadFirstChoise:function(t){null==this.memberChoise&&(this.memberChoise=t)},choised:function(t){var e=!0,i=!1,s=void 0;try{for(var n,r=a()(this.members);!(e=(n=r.next()).done);e=!0){var c=n.value;c.id==t&&(this.memberChoise=c)}}catch(t){i=!0,s=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw s}}},choiseSubmit:function(){null==this.memberChoise?n.a.showToast("您還未選擇壹名客戶"):(this.$emit("returnChoised",this.memberChoise),n.a.closeModal("memberChoiseModal"))}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"memberChoiseModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),null!=t.memberChoise?i("listing-member-face-card",{attrs:{the_member:t.memberChoise}}):t._e()],1),t._v(" "),i("div",{staticClass:"modal-body pt-0 pb-0"},[i("div",{},[t.members.length>0?i("table",{staticClass:"table table-top-line-none"},t._l(t.members,function(e){return i("tr",{key:e.id,staticClass:"hand",class:{"item-choise":e.id==t.memberChoise.id},on:{click:function(i){return t.choised(e.id)}}},[i("td",[t._v(t._s(e.num))]),t._v(" "),i("td",[t._v(t._s(e.named))]),t._v(" "),i("td",[t._v(t._s(e.addr))])])}),0):t._e()])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("離開")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.choiseSubmit}},[t._v("確認選擇")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"modal-title"},[this._v("\n          選擇的客戶：\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示: 需要選擇一名客戶才能開始制作表單\n          ")])])}]};var l=i("VU/8")(c,o,!1,function(t){i("W/Nq")},"data-v-44b9e68c",null);e.a=l.exports},"W/Nq":function(t,e){},W64k:function(t,e,i){"use strict";var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),c=i("NAQQ"),o=i("5nBN"),l=i.n(o),d=i("ryLw"),m=i("H/tU"),u=i("5MlZ"),_=i("s89H"),h=i("/xUl"),p={name:"PricesPlusFooter",components:{SimpleInput:d.a,SimpleSelect:m.a,ListingMemberFaceCard:u.a,LoadingMiddle:_.a},props:{membery:{type:Object},isPlus:{type:Boolean,default:!0}},data:function(){return{pay_way:0,timed_prices:"",numed_prices:"",pay_time_prices:"",pay_times:[],origin_pay_times:[],pay_ways:[]}},mounted:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.pay_ways=l.a.show_paymet(),e.next=3,t.loadPayTime();case 3:return e.next=5,t.loadingTimed();case 5:case"end":return e.stop()}},e,t)}))()},methods:{loadPayTime:function(){var t=this;return r()(a.a.mark(function e(){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.pay_time.getList({},!0);case 2:(i=e.sent)&&(t.origin_pay_times=i,t.pay_times=i.map(function(t){return t.named}),t.membery&&t.changeSomthing(t.membery.pay_time.named));case 4:case"end":return e.stop()}},e,t)}))()},changeSomthing:function(t){var e=this;t&&this.origin_pay_times.map(function(i,s){i.named==t&&(e.reciverPayTime(s),e.$refs.payTimeRef.locationData(s))})},_pricesSubmit:function(){this.$emit("pricesSubmit_Father")},pricesSubmit:function(){c.a.click("pricesResBtn")},pricesPdfView:function(){this.$emit("pricesPdfView_Father")},reciverTimed:function(t){this.timed_prices=t,this.$emit("reciverTimed_Father",this.timed_prices)},reciverPayway:function(t){this.pay_way=t,this.$emit("reciverPayway_Father",t)},reciverPayTime:function(t){this.pay_time_prices=this.origin_pay_times[t].named,this.$emit("reciverPayTime_Father",this.origin_pay_times[t].id,this.pay_time_prices)},reciverNumed:function(t){var e=this;this.numed_prices=t,h.a.prices.getOneByAny({num:t}).then(function(i){h.a.judge_response(i[0])?(e.$emit("reciverNumed_Father",""),c.a.showToast("報價單號“"+t+"”重復，數據庫中已有相同單號的報價單！")):e.$emit("reciverNumed_Father",e.numed_prices)})},changeMember:function(){this.$emit("changeMember_Father")},addIntoFreight:function(){c.a.showModal("insertFreightModal")},locationData:function(t,e,i){this.$refs.numRef.locationData(t),this.$refs.timedRef.locationData(e),this.$refs.payWayRef.locationData(i)},loadingTimed:function(){var t=this;return r()(a.a.mark(function e(){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=c.a.timed.getNumedTimed("-"),t.reciverTimed(i),t.$refs.timedRef.locationData(i);case 3:case"end":return e.stop()}},e,t)}))()}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("h5",{staticClass:"fw-none text-accent"},[t._v("其他信息")]),t._v(" "),i("listing-member-face-card",{directives:[{name:"show",rawName:"v-show",value:null!=t.membery,expression:"membery!=null"}],attrs:{is_icon:t.isPlus,the_member:t.membery},on:{changeSignal:t.changeMember}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:null==t.membery,expression:"membery==null"}],staticClass:"member-loading-wrapper"},[i("loading-middle")],1)],1),t._v(" "),i("div",{staticClass:"col-sm-3 pt-4"},[i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{ref:"numRef",attrs:{the_name:"prices_numd",the_tip_header:"報價單號",the_placeholder:"- -",the_min_length:3,the_max_length:12},on:{returnValue:t.reciverNumed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("報價單號：")])])],1),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{ref:"timedRef",attrs:{the_name:"prices_timed",the_tip_header:"報價時間",the_placeholder:"yyyy-mm-dd"},on:{returnValue:t.reciverTimed}},[i("div",{attrs:{slot:"input_txt"},on:{click:t.loadingTimed},slot:"input_txt"},[t._v("報價日期：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-3 pt-4"},[i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-select",{ref:"payWayRef",attrs:{the_name:"prices_pay_time",the_list:t.pay_ways},on:{returnValue:t.reciverPayway}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("付款方式：")])])],1),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-select",{ref:"payTimeRef",attrs:{the_name:"prices_pay_time",the_list:t.pay_times},on:{returnValue:t.reciverPayTime}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("付款期限：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-1 flex-center"},[i("button",{staticClass:"hidden",attrs:{id:"pricesResBtn"},on:{click:t._pricesSubmit}})]),t._v(" "),i("div",{staticClass:"col-sm-2 pt-2"},[i("button",{staticClass:"btn btn-light btn-block btn-sm",on:{click:t.addIntoFreight}},[i("span",{staticClass:"fs-16"},[t._v("+")]),t._v("\n      加入產品\n    ")]),t._v(" "),i("button",{staticClass:"btn btn-outline-info btn-block btn-sm",on:{click:t.pricesPdfView}},[t._v("下一步")])])])},staticRenderFns:[]};var f=i("VU/8")(p,v,!1,function(t){i("BdNu")},"data-v-0f8021f9",null);e.a=f.exports},sBAn:function(t,e){},wOGy:function(t,e){},"xiI/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),a=i.n(s),n=i("mvHQ"),r=i.n(n),c=(i("7t+N"),i("5nBN"),i("NAQQ")),o=i("I76R"),l=i.n(o),d=(i("wYMm"),i("U6je")),m=i("2uTJ"),u=i("/xUl"),_=i("O6kI"),h=i("W64k"),p=i("nN2X"),v=i("4b/9"),f=i("U5hB"),y=i("lT1N"),b=i("cpG1"),g={components:{InsertFreightModal:y.a,DefLayout:d.a,PricesPlusBody:m.a,MemberChoiseModal:_.a,PricesPlusFooter:h.a,PricesPdfModal:p.a,PricesPlusTop:v.a,Loading:f.a,Empty:b.a},name:"PricesPlus",data:function(){return{price_content:[],select:[],select_content:[],member:null,numed_prices:"",timed_prices:"",payway_prices:0,paytime_prices:0,paytime_prices_named:"",isLoading:!0,priceContentId:2,priceId:0}},mounted:function(){this.priceContentId=this.$route.query.priceContentId,this.loadUpdatePC(this.priceContentId)},methods:{loadUpdatePC:function(t){var e=this;null!=t||void 0!=t?u.a.prices_content.getOne(t).then(function(t){if(u.a.judge_response(t)){e.member=t.price_collect.membery,e.priceId=t.price_collect.id;var i=JSON.parse(t.content);for(var s in i)e.select.push(i[s].id);e.payway_prices=t.price_collect.pay_way,e.numed_prices=t.price_collect.num,e.timed_prices=c.a.timed.ser_timed(t.price_collect.start_time,!1,!0),e.price_content=i,e.$refs.ppFooter.locationData(e.numed_prices,e.timed_prices,e.payway_prices),t.price_collect&&e.$refs.ppFooter.changeSomthing(t.price_collect.pay_time.named)}}).catch(function(t){c.a.showToast("A網絡連接失敗。")}):(c.a.showToast("未找到要修改的報價單對象！！！",2800),c.a.closeAllModal(),setTimeout(function(){e.$router.push("/home/prices")},700))},_validate:function(){var t=l.a.val_timed(this.timed_prices,"報價時間",!0);return 1==t||(c.a.showToast(t),!1)},_collect:function(){var t=this;this.select_content=this.price_content.filter(function(e){return c.a.inList(e.id,t.select)})},_submit:function(){var t=this;this._collect();var e={num:this.numed_prices,start_time:this.timed_prices+" 00:00:00",draft_status:"False",freight_num:this.select_content.length,pay_time_id:this.paytime_prices,pay_way:this.payway_prices};u.a.prices.update(e,this.priceId).then(function(e){u.a.judge_response(e)&&u.a.prices_content.update({content:r()(t.select_content)},t.priceContentId).then(function(e){u.a.judge_response(e)&&(c.a.showToast("報價單修改成功！！！"),c.a.closeAllModal(),c.a.storage._set("prices_active_member",""),setTimeout(function(){t.$router.push("/home/prices")},700))})})},pricesPdfView:function(){this._collect(),c.a.showModal("pricesPdfViewModal")},pricesSubmit:function(){var t="";if(""==this.timed_prices&&(t="請檢查報價時間的輸入！"),""==this.numed_prices&&(t="請檢查報價單號的輸入！"),""!=t)c.a.showToast(t);else{if(!this._validate())return;this._submit()}},changeMember:function(){null!=this.member&&this.$refs.memberChoiseModal.loadFirstChoise(this.member),c.a.showModal("memberChoiseModal")},removeItem:function(t){var e=c.a.indexList(t,this.select);this.select.length<2?c.a.showToast("至少選擇壹項菜品。"):this.select.splice(e,1)},addItem:function(t){c.a.indexList(t,this.select)<0&&this.select.push(t)},changeNum:function(t,e){this.price_content[t].price=e},openFreightInsert:function(){this.$refs.insertFreight.openInsertFreight(),this.$refs.insertFreight.loadHaventFreight()},reciverChoised:function(t){this.member=t,c.a.storage._set("prices_active_member",r()(t)),this.$refs.ppFooter.changeSomthing(t.pay_time.named)},reciverTimed:function(t){this.timed_prices=t},reciverNumed:function(t){this.numed_prices=t},reciverPayTime:function(t,e){this.paytime_prices=t,this.paytime_prices_named=e},reciverPayway:function(t){this.payway_prices=t},reciverInsertFreight:function(t){this.price_content.unshift(a()({},t))}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("def-layout",[i("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("修改報價單")]),t._v(" "),i("prices-plus-top",{attrs:{slot:"layout_inner_head",_freights:t.price_content,_select:t.select},slot:"layout_inner_head"},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("編輯菜品")])]),t._v(" "),t.price_content.length>0?i("prices-plus-body",{attrs:{slot:"layout_inner_body",selected:t.select,prices_contented:t.price_content},on:{removeItemChild:t.removeItem,addItemChild:t.addItem,changeNum_Father:t.changeNum},slot:"layout_inner_body"}):t.isLoading?i("loading",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}):i("empty",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}),t._v(" "),i("div",{attrs:{slot:"layout_footer"},slot:"layout_footer"},[i("prices-plus-footer",{ref:"ppFooter",attrs:{membery:t.member,isPlus:!1},on:{reciverTimed_Father:t.reciverTimed,reciverNumed_Father:t.reciverNumed,reciverPayTime_Father:t.reciverPayTime,reciverPayway_Father:t.reciverPayway,changeMember_Father:t.changeMember,pricesSubmit_Father:t.pricesSubmit,pricesPdfView_Father:t.pricesPdfView}})],1),t._v(" "),i("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[i("member-choise-modal",{ref:"memberChoiseModal",on:{returnChoised:t.reciverChoised}}),t._v(" "),i("prices-pdf-modal",{attrs:{the_member:t.member,the_prices_timed:t.timed_prices,the_prices_numed:t.numed_prices,the_prices_payway:t.payway_prices,the_prices_paytime:t.paytime_prices_named,the_prices_content:t.select_content,isPlus:!0},on:{submit_Father:t.pricesSubmit}},[i("div",{attrs:{slot:"submitText"},slot:"submitText"},[t._v("確認修改")])]),t._v(" "),t.isLoading?i("insert-freight-modal",{ref:"insertFreight",attrs:{haved:t.price_content},on:{reciverInsert:t.reciverInsertFreight}}):t._e()],1)],1)},staticRenderFns:[]};var C=i("VU/8")(g,w,!1,function(t){i("2II4")},"data-v-38d7b0bf",null);e.default=C.exports}});
//# sourceMappingURL=7.3e4a4fa7d90c3e503856.js.map