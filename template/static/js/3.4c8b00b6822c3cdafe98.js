webpackJsonp([3],{"6fqj":function(t,e,i){"use strict";var s={name:"ListingPricesCard",props:{_prices:{type:Object},is_icon:{type:Boolean,default:!1}},methods:{changeSomething:function(){this.$emit("changeSignal")}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fs-12"},[t._m(0),t._v(" "),i("div",{staticClass:"float-left ml-2"},[i("div",[t._v("\n      單號："+t._s(t._prices.num)+" \n      "),t.is_icon?i("i",{staticClass:"fa fa-edit text-primary hand",on:{click:t.changeSomething}}):t._e()]),t._v(" "),i("div",[t._v("\n      所屬客戶："+t._s(t._prices.membery.num)+" "+t._s(t._prices.membery.named)+"\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-left icon-wrapper"},[e("i",{staticClass:"fa fa-list-alt"})])}]};var a=i("VU/8")(s,n,!1,function(t){i("uISI")},"data-v-46bbffaa",null);e.a=a.exports},J0gq:function(t,e,i){"use strict";i("NAQQ");var s={name:"SortOption",props:{_list:{type:Array}},data:function(){return{isOrder:!1}},methods:{numOrdering:function(t){}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light btn-sm pb-0 float-right mr-2",on:{click:this.numOrdering}},[e("i",{staticClass:"fa fa-unsorted icon-w-fix",class:{"text-primary":this.isOrder}})])},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("kFX6")},"data-v-b3bb04c6",null);e.a=a.exports},LX8H:function(t,e){},Q9xG:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"submitModal","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered"},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body"},[t._v("\n        妳確定要提交嗎？\n      ")]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.sureSubmit}},[t._v("確定")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[this._v("提示")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var n=i("VU/8")({name:"SubmitModal",methods:{sureSubmit:function(){this.$emit("submitConfirm")}}},s,!1,function(t){i("wohx")},"data-v-588d582d",null);e.a=n.exports},bFHG:function(t,e){},dR31:function(t,e){},gy0Y:function(t,e){},i16T:function(t,e){},iD9P:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),n=i.n(s),a=i("BO1k"),r=i.n(a),o=i("Dd8w"),l=i.n(o),c=i("7t+N"),d=i.n(c),u=i("5nBN"),_=i.n(u),m=i("NAQQ"),p=(i("I76R"),i("wYMm"),i("/xUl")),h=i("U6je"),v=i("r0bt"),f=i("J0gq"),g=i("UQ+I"),y=i("GP9U"),C=i("FCMV"),b={components:{HelpIcon:v.a,NumOrderOption:f.a,SortOption:g.a,SelectOption:y.a,LoadingSmall:C.a},name:"ListingPlusTop",props:{_listings:{type:Array},_select:{type:Array}},data:function(){return{isSort:!1,isAll:!1}},mounted:function(){console.log(this._listings)},methods:{}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row of-visible"},[t._m(0),t._v(" "),t._listings.length>0?i("div",{staticClass:"col-sm-6 pt-1 text-right of-visible"},[i("sort-option",{attrs:{_list:t._listings}}),t._v(" "),i("select-option",{attrs:{_listFull:t._listings,_list:t._select}})],1):i("div",{staticClass:"col-sm-6 d-flex justify-content-end of-visible"},[i("div",{staticClass:"right-loading"},[i("loading-small")],1)])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 pt-2"},[e("h5",{staticClass:"fw-none"},[this._v("\n        產品內容\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table m-0"},[i("tr",{staticClass:"text-left"},[i("td",{staticClass:"text-accent",attrs:{width:"6%"}},[t._v("#")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("\n        貨號\n      ")]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),i("td",{attrs:{width:"15%"}},[i("div",{staticClass:"pl-2"},[t._v("\n          數量\n          ")])]),t._v(" "),i("td",{attrs:{width:"15%"}},[i("div",{staticClass:"pl-3"},[t._v("\n          單價\n          ")])]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"9%"}},[t._v("\n        折扣\n        ")]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"15%"}},[t._v("價格")]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("選擇")])])])}]};var w=i("VU/8")(b,x,!1,function(t){i("rJI4")},"data-v-75309ecf",null).exports,P=(i("0jG4"),{name:"ListingPlusBody",props:{_listingContent:{type:Array},_select:{type:Array}},mounted:function(){},methods:{unit:function(t){return _.a.ser_unit(t)},inList:function(t,e){return m.a.inList(t,e)},ser_timed:function(t){return m.a.timed.ser_timed(t,!0,!1)},changeCount:function(t,e){var i=d()("#count_"+t).val();this._listingContent[e].count=i},changePrice:function(t,e){var i=d()("#price_"+t).val();this._listingContent[e].price=i},itemOption:function(t,e){if("add"==e)this._select.push(t);else if("remove"==e){var i=m.a.indexList(t,this._select);this._select.length<2?m.a.showToast("至少選擇壹項菜品。"):this._select.splice(i,1)}}}}),F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",{staticClass:"table m-0 table-top-line-none"},[i("tbody",{staticClass:"listing-tbody"},t._l(t._listingContent,function(e,s){return i("tr",{key:e.id,staticClass:"prices-item text-left",class:{inActive:!t.inList(e.id,t._select),"bg-white":t.inList(e.id,t._select)}},[i("td",{staticClass:"text-accent",attrs:{width:"6%"}},[t._v(t._s(s+1))]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v(t._s(e.num))]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v(t._s(e.named))]),t._v(" "),i("td",{staticClass:"table-input-td ",attrs:{width:"15%"}},[i("div",{staticClass:"input-group input-group-sm float-left listing-num-input listing-input-sm"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"count_"+e.id},domProps:{value:e.count},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changeCount(e.id,s)},change:function(i){return t.changeCount(e.id,s)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v(t._s(t.unit(e.unit)))])])])]),t._v(" "),i("td",{staticClass:"table-input-td",attrs:{width:"15%"}},[i("div",{staticClass:"float-left mt-1 text-input"},[t._v("$")]),t._v(" "),i("div",{staticClass:"input-group input-group-sm float-left listing-num-input"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"price_"+e.id},domProps:{value:e.price},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changePrice(e.id,s)},change:function(i){return t.changePrice(e.id,s)}}})])]),t._v(" "),i("td",{attrs:{width:"9%"}},[t._v("\n          "+t._s(e.zk)+"\n        ")]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"15%"}},[t._v("\n          "+t._s((e.count*e.price).toFixed(2))+"\n        ")]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.inList(e.id,t._select),expression:"inList(f.id, _select)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-remove",on:{click:function(i){return t.itemOption(e.id,"remove")}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.inList(e.id,t._select),expression:"!inList(f.id, _select)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-plus",on:{click:function(i){return t.itemOption(e.id,"add")}}})])])])}),0)])])},staticRenderFns:[]};var L=i("VU/8")(P,F,!1,function(t){i("LX8H")},"data-v-b34984c2",null).exports,k=i("Xxa5"),T=i.n(k),S=i("exGp"),$=i.n(S),M=i("ryLw"),I=i("5MlZ"),O=i("s89H"),N=i("6fqj"),U=i("H/tU"),V={name:"ListingPlusFooter",components:{SimpleInput:M.a,ListingMemberFaceCard:I.a,LoadingMiddle:O.a,ListingPricesCard:N.a,SimpleSelect:U.a},props:{the_prices:{type:Object},timed_listing:{type:String},numed_listing:{type:String},payment_listing:{type:Number},pay_time_listing_named:{type:String}},data:function(){return{pay_times:[],pay_times_origin:[],payments:[]}},created:function(){this.payments=_.a.show_paymet()},mounted:function(){var t=this;return $()(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.locationData(),e.next=3,t.loadingPayTime();case 3:case"end":return e.stop()}},e,t)}))()},methods:{locationPayTime:function(t){var e=this;this.pay_times_origin.forEach(function(i,s){i.named==t&&e.$refs.listingPayTimeInput.locationData(s)})},loadingPayTime:function(){var t=this;return $()(T.a.mark(function e(){var i;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.pay_time.getList({},!0);case 2:(i=e.sent)&&(t.pay_times_origin=i,t.pay_times=i.map(function(t){return t.named}),t.pay_time_listing_named&&t.locationPayTime(t.pay_time_listing_named));case 4:case"end":return e.stop()}},e,t)}))()},_pricesSubmit:function(){this.$emit("pricesSubmit_Father")},pricesSubmit:function(){m.a.click("pricesResBtn")},addIntoFreight:function(){this.$emit("openFreightInsert_Father")},pricesPdfView:function(){this.$emit("pricesPdfView_Father")},reciverTimed:function(t){this.$emit("updateTimed_Father",t)},reciverNumed:function(t){var e=this;p.a.listing.getOneByAny({num:t}).then(function(i){p.a.judge_response(i[0])?m.a.showToast("發票編號“"+t+"”重復，數據庫中已有相同編號的發票！"):e.$emit("updateNumed_Father",t)})},reciverPayment:function(t){this.$emit("updatePayment_Father",t)},reciverPayTime:function(t){this.$emit("updatePayTime_Father",this.pay_times_origin[t].id,this.pay_times_origin[t].named)},validateInput:function(){var t="";return""==this.timed_listing&&(t="請檢查發票時間的輸入！"),""==this.numed_listing&&(t="請檢查發票編號的輸入！"),""==t||(m.a.showToast(t),!1)},changePrices:function(){m.a.showModal("sureChangePricesModal")},locationData:function(){this.$refs.paymentRef.locationData(this.payment_listing),this.$refs.numedRef.locationData(this.numed_listing),this.$refs.timedRef.locationData(this.timed_listing)}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("h5",{staticClass:"fw-none text-accent"},[t._v("其他信息")]),t._v(" "),null!=t.the_prices?i("listing-prices-card",{attrs:{_prices:t.the_prices,is_icon:!1},on:{changeSignal:t.changePrices}}):i("div",{staticClass:"member-loading-wrapper"},[i("loading-middle")],1)],1),t._v(" "),i("div",{staticClass:"col-sm-3 pt-4"},[i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{ref:"numedRef",attrs:{the_name:"listing_numd",the_tip_header:"發票編號",the_placeholder:"- -",the_min_length:3,the_max_length:12},on:{returnValue:t.reciverNumed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("發票編號：")])])],1),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{ref:"timedRef",attrs:{the_name:"listing_timed",the_tip_header:"發票時間",the_placeholder:"yyyy-mm-dd"},on:{returnValue:t.reciverTimed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("發票時間：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-3 pt-4"},[i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-select",{ref:"paymentRef",attrs:{the_name:"listing_payment",the_list:t.payments},on:{returnValue:t.reciverPayment}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("支付方式：")])])],1),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-select",{ref:"listingPayTimeInput",attrs:{the_name:"listing_paytime",the_list:t.pay_times},on:{returnValue:t.reciverPayTime}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("付款期限：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-1 flex-center"},[i("button",{staticClass:"hidden",attrs:{id:"pricesResBtn"},on:{click:t._pricesSubmit}})]),t._v(" "),i("div",{staticClass:"col-sm-2 pt-2"},[i("button",{staticClass:"btn btn-light btn-block btn-sm",on:{click:t.addIntoFreight}},[i("span",{staticClass:"fs-16"},[t._v("+")]),t._v("\n      加入產品\n    ")]),t._v(" "),i("button",{staticClass:"btn btn-outline-info btn-block btn-sm",on:{click:t.pricesPdfView}},[t._v("下一步")])])])},staticRenderFns:[]};var E=i("VU/8")(V,R,!1,function(t){i("bFHG")},"data-v-6cbc1e07",null).exports,A=i("U5hB"),j=i("z1aH"),B={name:"ListingPlusFullMsg",data:function(){return{named:"",areas:[],contact_phoned:"",contact_area:"",tip_named:"",tip_contact_phoned:""}},mounted:function(){var t=this;p.a.area.getList_Area({},!0).then(function(e){t.areas=e,0==t.contact_area&&(t.contact_area=e[0].id)})},methods:{listingPlusSubmit:function(){}}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"listingFullMsgModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body"},[i("form",{staticClass:"row"},[i("div",{staticClass:"form-group col-sm-12"},[i("label",{attrs:{for:"named"}},[t._v("聯絡人")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.named,expression:"named"}],staticClass:"form-control",attrs:{type:"text",id:"named",placeholder:"名稱"},domProps:{value:t.named},on:{input:function(e){e.target.composing||(t.named=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"namedTip"}},[t._v(t._s(t.tip_named))])]),t._v(" "),i("div",{staticClass:"form-group col-sm-12"},[i("label",{attrs:{for:"contact_area"}},[t._v("聯系電話")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.contact_area,expression:"contact_area"}],staticClass:"form-control",attrs:{id:"contact_area"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.contact_area=e.target.multiple?i:i[0]}}},t._l(t.areas,function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.area))])}),0)]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.contact_phoned,expression:"contact_phoned"}],staticClass:"form-control",attrs:{type:"text",id:"contact_phoned",placeholder:"電話"},domProps:{value:t.contact_phoned},on:{input:function(e){e.target.composing||(t.contact_phoned=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"contact_phonedTip"}},[t._v(t._s(t.tip_contact_phoned))])])])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),t._v(" "),i("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.listingPlusSubmit}},[t._v("提交")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("\n          完善信息\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示: 發票信息完善後，才可提交\n          ")])])])}]};var Q=i("VU/8")(B,H,!1,function(t){i("dR31")},"data-v-0ab396f0",null).exports,D=i("o9vp"),J=i("Q9xG"),G=i("uT2u"),q=i("lT1N"),z={name:"ListingPlus",components:{DefLayout:h.a,ListingUpdateTop:w,ListingUpdateBody:L,ListingUpdateFooter:E,Loading:A.a,ListingChoiseModal:j.a,ListingUpdateFullMsg:Q,ListingPdfModal:D.a,Submit:J.a,CustomModal:G.a,InsertFreightModal:q.a,LoadingMiddle:O.a},data:function(){return{listingContent:[],prices:null,select:[],selectContent:[],isLoading:!0,timed:"",numed:"",payment:0,pay_time:"",pay_time_name:"",result_price:"",listingContentId:null,listingId:0}},mounted:function(){this.listingContentId=this.$route.query.listingContentId,this.loadUpdate(this.listingContentId)},methods:{loadUpdate:function(t){var e=this;null!=t&&void 0!=t?p.a.listing_content.getOne(t).then(function(t){p.a.judge_response(t)&&(e.listingContent=JSON.parse(t.content),e.select=e.listingContent.map(function(t){return t.id}),e.prices=t.listing.price_collect,e.prices.membery=t.listing.membery,e.numed=t.listing.num,e.listingId=t.listing.id,e.payment=t.listing.pay_way,e.pay_time=t.listing.pay_time.id,e.pay_time_name=t.listing.pay_time.named,e.timed=m.a.timed.ser_timed(t.listing.listing_time,!1,!0))}).catch(function(t){m.a.showToast("網絡錯誤！！！")}):(m.a.showToast("未找到要修改的發票對象！！！",2800),m.a.closeAllModal(),setTimeout(function(){e.$router.push("/home/listing")},700))},loadPrices:function(){return null!=this.prices||(null!=active_prices&&""!=active_prices&&void 0!=active_prices?this.prices=JSON.parse(active_prices):this.openPriceChoise(),!1)},loadContent:function(){var t=this;if(null!=this.prices){var e={price_collect:this.prices.id};p.a.prices_content.getOneByPrices(e).then(function(e){if(p.a.judge_response_list(e)){var i=JSON.parse(e[0].content);for(var s in t.listingContent=[],i)t.listingContent.push(l()({},i[s],{zk:"",count:"0.00",res:"0.00"}));t.select=[t.listingContent[0].id]}t.isLoading=!1}).catch(function(t){m.a.showToast("網絡連接失敗。")})}else m.a.showModal("pricesChoiseModal")},openPriceChoise:function(){m.a.showModal("pricesChoiseModal")},openFreightInsert:function(){this.$refs.insertFreight.openInsertFreight(),this.$refs.insertFreight.loadHaventFreight()},updateTimed:function(t){this.timed=t},updateNumed:function(t){this.numed=t},updatePayment:function(t){this.payment=t},updatePayTime:function(t,e){this.pay_time=t,this.pay_time_name=e},reciverInsertFreight:function(t){this.listingContent.unshift(l()({},t,{zk:"",count:"1",res:"0.00"}))},reciverPrices:function(t){this.prices=t,this.loadContent(),m.a.showToast("列表加載完畢。",1200)},collectSelect:function(){var t=this;if(this.selectContent=this.listingContent.filter(function(e){return m.a.inList(e.id,t.select)}),this.selectContent=this.selectContent.map(function(t){return t.res=m.a.floatNum.floatMul(t.count,t.price),t}),this.select.length>1){var e=0,i=!0,s=!1,n=void 0;try{for(var a,o=r()(this.selectContent);!(i=(a=o.next()).done);i=!0){var l=a.value;e=m.a.floatNum.floatAdd(e,l.res)}}catch(t){s=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(s)throw n}}this.result_price=e}else this.result_price=this.selectContent[0].res},collectMsg:function(){return!0},_submit:function(t){var e=this,i=this;p.a.listing.update(t,this.listingId).then(function(t){p.a.judge_response(t)&&p.a.listing_content.update({content:n()(i.selectContent)},e.listingContentId).then(function(t){p.a.judge_response(t)&&(m.a.showToast("修改成功！！！",1800),m.a.closeAllModal(),setTimeout(function(){e.$router.push("/home/listing")},700))})})},submit:function(t){var e={num:this.numed,listing_time:this.timed+" 00:00:00",pay_way:this.payment,pay_time:this.pay_time,pay_time_id:this.pay_time,freight_item_num:this.select.length,total_price_freight:this.result_price,result_price:this.result_price,pay_contact_area:t.area,pay_contact_named:t.contact_named,pay_contact_phone:t.phoned,pay_contact_email:t.email};this._submit(e)},pricesSubmit:function(t){if(this.collectMsg()){this.collectSelect();var e=this.selectContent.filter(function(t){return 0==t.res});e.length>0?m.a.showToast("存在 "+e.length+"項 數量為 0 的選項！！！"):this.submit(t)}},pricesPdfView:function(){this.collectMsg()&&(this.collectSelect(),m.a.showModal("listingPdfViewModal"))}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("def-layout",[i("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("修改發票")]),t._v(" "),i("listing-update-top",{attrs:{slot:"layout_inner_head",_listings:t.listingContent,_select:t.select},slot:"layout_inner_head"}),t._v(" "),t.listingContent.length>0?i("listing-update-body",{attrs:{slot:"layout_inner_body",_listingContent:t.listingContent,_select:t.select},slot:"layout_inner_body"}):i("transition",{attrs:{slot:"layout_inner_body",name:"fade"},slot:"layout_inner_body"},[i("loading")],1),t._v(" "),""!=this.timed?i("listing-update-footer",{ref:"lpFooter",attrs:{slot:"layout_footer",the_prices:t.prices,numed_listing:t.numed,timed_listing:t.timed,payment_listing:t.payment,pay_time_listing_named:t.pay_time_name},on:{pricesPdfView_Father:t.pricesPdfView,pricesSubmit_Father:t.pricesSubmit,openFreightInsert_Father:t.openFreightInsert,updateTimed_Father:t.updateTimed,updateNumed_Father:t.updateNumed,updatePayment_Father:t.updatePayment,updatePayTime_Father:t.updatePayTime},slot:"layout_footer"}):i("loading-middle",{attrs:{slot:"layout_footer"},slot:"layout_footer"}),t._v(" "),i("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[i("listing-choise-modal",{attrs:{defPrices:t.prices},on:{returnChoised:t.reciverPrices}}),t._v(" "),i("listing-update-full-msg"),t._v(" "),null!=t.prices?i("listing-pdf-modal",{attrs:{membery:t.prices.membery,_listing_content:t.selectContent,_numed:t.numed,_timed:t.timed,_payment:t.payment,_pay_time:t.pay_time_name,isPlus:!0,isUpdate:!0},on:{submit_Father:t.pricesSubmit}},[i("span",{attrs:{slot:"buttonText"},slot:"buttonText"},[t._v("確認修改")])]):t._e(),t._v(" "),i("custom-modal",{attrs:{id_prefix:"sureChangePrices",title:"提示",txt:"更改所屬報價單會造成發票的菜品內容被替換，是否繼續？"},on:{done_Father:t.openPriceChoise}},[i("div",{attrs:{slot:"submit_text"},slot:"submit_text"},[t._v("繼續")])]),t._v(" "),i("insert-freight-modal",{ref:"insertFreight",attrs:{haved:t.listingContent},on:{reciverInsert:t.reciverInsertFreight}}),t._v(" "),i("submit",{on:{submitConfirm:t.submit}})],1)],1)},staticRenderFns:[]};var Y=i("VU/8")(z,X,!1,function(t){i("i16T")},"data-v-7e235308",null);e.default=Y.exports},kFX6:function(t,e){},rJI4:function(t,e){},uISI:function(t,e){},wohx:function(t,e){},z1aH:function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s),a=i("NAQQ"),r=i("/xUl"),o={components:{ListingPricesCard:i("6fqj").a},props:{defPrices:{type:Object,default:function(){return null}}},data:function(){return{pricesList:[],pricesChoise:null}},mounted:function(){var t=this;r.a.prices.getList_Prices().then(function(e){null==t.defPrices?t.loadFirstChoise(e[0]):t.loadFirstChoise(t.defPrices),t.pricesList=e})},methods:{loadFirstChoise:function(t){null==this.pricesChoise&&(this.pricesChoise=t)},ser_timed:function(t){return a.a.timed.ser_timed(t,!0,!0)},choised:function(t){var e=!0,i=!1,s=void 0;try{for(var a,r=n()(this.pricesList);!(e=(a=r.next()).done);e=!0){var o=a.value;o.id==t&&(this.pricesChoise=o)}}catch(t){i=!0,s=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw s}}},choiseSubmit:function(){null==this.pricesChoise?a.a.showToast("您还未选择一名客户"):(this.$emit("returnChoised",this.pricesChoise),a.a.closeModal("pricesChoiseModal"))}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"pricesChoiseModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),null!=t.pricesChoise?i("listing-prices-card",{attrs:{_prices:t.pricesChoise}}):t._e()],1),t._v(" "),i("div",{staticClass:"modal-body pt-0 pb-0"},[i("div",{},[t.pricesList.length>0?i("table",{staticClass:"table table-top-line-none"},t._l(t.pricesList,function(e){return i("tr",{key:e.id,staticClass:"hand",class:{"item-choise":e.id==t.pricesChoise.id},on:{click:function(i){return t.choised(e.id)}}},[i("td",[t._v(t._s(e.num))]),t._v(" "),i("td",[t._v(t._s(t.ser_timed(e.start_time)))]),t._v(" "),i("td",[t._v(t._s(e.membery.num)+" "+t._s(e.membery.named))])])}),0):t._e()])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("離開")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.choiseSubmit}},[t._v("確認選擇")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"modal-title"},[this._v("\n          選擇的報價單：\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示：需要選擇一份報價單才能開始製作發票\n          ")])])}]};var c=i("VU/8")(o,l,!1,function(t){i("gy0Y")},"data-v-e4cd945a",null);e.a=c.exports}});
//# sourceMappingURL=3.4c8b00b6822c3cdafe98.js.map