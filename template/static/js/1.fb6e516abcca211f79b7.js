webpackJsonp([1],{"6fqj":function(t,e,i){"use strict";var s={name:"ListingPricesCard",props:{_prices:{type:Object},is_icon:{type:Boolean,default:!1}},methods:{changeSomething:function(){this.$emit("changeSignal")}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fs-12"},[t._m(0),t._v(" "),i("div",{staticClass:"float-left ml-2"},[i("div",[t._v("\n      单号："+t._s(t._prices.num)+" \n      "),t.is_icon?i("i",{staticClass:"fa fa-edit text-primary hand",on:{click:t.changeSomething}}):t._e()]),t._v(" "),i("div",[t._v("\n      所属客户："+t._s(t._prices.membery.num)+" "+t._s(t._prices.membery.named)+"\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-left icon-wrapper"},[e("i",{staticClass:"fa fa-list-alt"})])}]};var a=i("VU/8")(s,n,!1,function(t){i("U3Nl")},"data-v-09bf93e9",null);e.a=a.exports},"9Wpn":function(t,e){},FCMV:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading"})},staticRenderFns:[]};var n=i("VU/8")({name:"LoadingSmall"},s,!1,function(t){i("RN3J")},"data-v-ec594dac",null);e.a=n.exports},GP9U:function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s),a=i("NAQQ"),r={name:"SelectOption",props:{_listFull:{type:Array},_list:{type:Array}},data:function(){return{isAll:!1}},mounted:function(){this._listFull.length==this._list.length&&(this.isAll=!0)},methods:{selectOption:function(){var t=this;if(this.isAll)this._list.splice(1,this._list.length-1),this.isAll=!1,a.a.showToast("移除全选");else{var e=this._listFull.filter(function(e){return!a.a.inList(e.id,t._list)}),i=!0,s=!1,r=void 0;try{for(var l,o=n()(e);!(i=(l=o.next()).done);i=!0){var c=l.value;this._list.push(c.id)}}catch(t){s=!0,r=t}finally{try{!i&&o.return&&o.return()}finally{if(s)throw r}}this.isAll=!0,a.a.showToast("全选")}}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light btn-sm pb-0 float-right mr-2",on:{click:this.selectOption}},[this.isAll?e("i",{staticClass:"fa fa-remove"}):e("i",{staticClass:"fa fa-plus"})])},staticRenderFns:[]};var o=i("VU/8")(r,l,!1,function(t){i("aXe9")},"data-v-248358f7",null);e.a=o.exports},"H/tU":function(t,e,i){"use strict";i("5nBN");var s=i("NAQQ"),n=(i("I76R"),{name:"ListingTimedInoput",props:{the_name:{type:String},the_list:{type:Array}},data:function(){return{value:0}},methods:{tipToast:function(t){s.a.showToast(t)},valueSubmit:function(){this.$emit("returnValue",this.value)},locationData:function(t){console.log(t),this.value=t}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group m-0"},[i("label",{staticClass:"col-form-label p-0",attrs:{for:"select_"+t.the_name}},[t._t("input_txt")],2),t._v(" "),i("div",{staticClass:"input-wrapper"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control fs-14",attrs:{id:"select_"+t.the_name,name:t.the_name},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.value=e.target.multiple?i:i[0]},t.valueSubmit]}},t._l(t.the_list,function(e,s){return i("option",{key:s,domProps:{value:s}},[t._v(t._s(e))])}),0)])])},staticRenderFns:[]};var r=i("VU/8")(n,a,!1,function(t){i("zm3U")},"data-v-54b065ea",null);e.a=r.exports},J0gq:function(t,e,i){"use strict";i("NAQQ");var s={name:"SortOption",props:{_list:{type:Array}},data:function(){return{isOrder:!1}},methods:{numOrdering:function(t){}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light btn-sm pb-0 float-right mr-2",on:{click:this.numOrdering}},[e("i",{staticClass:"fa fa-unsorted icon-w-fix",class:{"text-primary":this.isOrder}})])},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("kFX6")},"data-v-b3bb04c6",null);e.a=a.exports},LOsN:function(t,e){},Q9xG:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"submitModal","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered"},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body"},[t._v("\n        你确定要提交吗？\n      ")]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.sureSubmit}},[t._v("确定")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[this._v("提示")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var n=i("VU/8")({name:"SubmitModal",methods:{sureSubmit:function(){this.$emit("submitConfirm")}}},s,!1,function(t){i("9Wpn")},"data-v-59fa257b",null);e.a=n.exports},RN3J:function(t,e){},U3Nl:function(t,e){},U5HZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),n=i.n(s),a=i("Dd8w"),r=i.n(a),l=i("7t+N"),o=i.n(l),c=i("5nBN"),d=i.n(c),u=i("NAQQ"),_=(i("I76R"),i("wYMm"),i("/xUl")),m=i("U6je"),p=i("BO1k"),h=i.n(p),v=i("r0bt"),f=i("J0gq"),g=i("UQ+I"),C=i("GP9U"),b=i("FCMV"),y={components:{HelpIcon:v.a,NumOrderOption:f.a,SortOption:g.a,SelectOption:C.a,LoadingSmall:b.a},name:"ListingPlusTop",props:{_listings:{type:Array},_select:{type:Array}},data:function(){return{isSort:!1,isAll:!1}},methods:{sortOption:function(){this._listings.reverse(),this.isSort=!this.isSort,this.isSort?u.a.showToast("逆序排列"):u.a.showToast("顺序排列")},tipSelect:function(){u.a.showToast("双击即可全选与清空选择")},selectOption:function(){var t=this;if(this.isAll)this._select.splice(1,this._select.length-1),this.isAll=!1,u.a.showToast("移除全选");else{var e=this._listings.filter(function(e){return!u.a.inList(e.id,t._select)}),i=!0,s=!1,n=void 0;try{for(var a,r=h()(e);!(i=(a=r.next()).done);i=!0){var l=a.value;this._select.push(l.id)}}catch(t){s=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(s)throw n}}this.isAll=!0,u.a.showToast("全选")}}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row of-visible"},[t._m(0),t._v(" "),t._listings.length>0?i("div",{staticClass:"col-sm-6 pt-1 text-right of-visible"},[i("sort-option",{attrs:{_list:t._listings}}),t._v(" "),i("select-option",{attrs:{_listFull:t._listings,_list:t._select}}),t._v(" "),i("num-order-option")],1):i("div",{staticClass:"col-sm-6 d-flex justify-content-end of-visible"},[i("div",{staticClass:"right-loading"},[i("loading-small")],1)])]),t._v(" "),i("table",{staticClass:"table m-0"},[i("tr",{staticClass:"text-left"},[i("td",{staticClass:"text-accent",attrs:{width:"6%"}},[t._v("#")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("\n        货号\n      ")]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),i("td",{attrs:{width:"15%"}},[i("div",{staticClass:"pl-2"},[t._v("\n          数量\n          "),i("help-icon",{attrs:{help_code:"listing_plus_num_input"}})],1)]),t._v(" "),i("td",{attrs:{width:"15%"}},[i("div",{staticClass:"pl-3"},[t._v("\n          单价\n          "),i("help-icon",{attrs:{help_code:"listing_plus_price_input"}})],1)]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"9%"}},[t._v("\n        折扣\n        "),i("help-icon",{attrs:{help_code:"listing_plus_discount_input"}})],1),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"15%"}},[t._v("价格")]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("选择")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 pt-2"},[e("h5",{staticClass:"fw-none"},[this._v("\n        菜品内容\n      ")])])}]};var x=i("VU/8")(y,w,!1,function(t){i("Yde4")},"data-v-6dbc2968",null).exports,F=(i("0jG4"),{name:"ListingPlusBody",props:{_listingContent:{type:Array},_select:{type:Array}},mounted:function(){},methods:{unit:function(t){return d.a.ser_unit(t)},inList:function(t,e){return u.a.inList(t,e)},ser_timed:function(t){return u.a.timed.ser_timed(t,!0,!1)},changeCount:function(t,e){var i=o()("#count_"+t).val();this._listingContent[e].count=i},changePrice:function(t,e){var i=o()("#price_"+t).val();this._listingContent[e].price=i},itemOption:function(t,e){if("add"==e)this._select.push(t);else if("remove"==e){var i=u.a.indexList(t,this._select);this._select.length<2?u.a.showToast("至少选择一项菜品。"):this._select.splice(i,1)}}}}),P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",{staticClass:"table m-0 table-top-line-none"},[i("tbody",{staticClass:"listing-tbody"},t._l(t._listingContent,function(e,s){return i("tr",{key:e.id,staticClass:"prices-item text-left",class:{inActive:!t.inList(e.id,t._select),"bg-white":t.inList(e.id,t._select)}},[i("td",{staticClass:"text-accent",attrs:{width:"6%"}},[t._v(t._s(s+1))]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v(t._s(e.num))]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v(t._s(e.named))]),t._v(" "),i("td",{staticClass:"table-input-td ",attrs:{width:"15%"}},[i("div",{staticClass:"input-group input-group-sm float-left listing-num-input listing-input-sm"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"count_"+e.id},domProps:{value:e.count},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changeCount(e.id,s)},change:function(i){return t.changeCount(e.id,s)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v(t._s(t.unit(e.unit)))])])])]),t._v(" "),i("td",{staticClass:"table-input-td",attrs:{width:"15%"}},[i("div",{staticClass:"float-left mt-1 text-input"},[t._v("$")]),t._v(" "),i("div",{staticClass:"input-group input-group-sm float-left listing-num-input"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"price_"+e.id},domProps:{value:e.price},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changePrice(e.id,s)},change:function(i){return t.changePrice(e.id,s)}}})])]),t._v(" "),i("td",{attrs:{width:"9%"}},[t._v("\n          "+t._s(e.zk)+"\n        ")]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"15%"}},[t._v("\n          "+t._s((e.count*e.price).toFixed(2))+"\n        ")]),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.inList(e.id,t._select),expression:"inList(f.id, _select)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-remove",on:{click:function(i){return t.itemOption(e.id,"remove")}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.inList(e.id,t._select),expression:"!inList(f.id, _select)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-plus",on:{click:function(i){return t.itemOption(e.id,"add")}}})])])])}),0)])])},staticRenderFns:[]};var L=i("VU/8")(F,P,!1,function(t){i("c3q6")},"data-v-5f23380e",null).exports,k=i("ryLw"),S=i("5MlZ"),M=i("s89H"),O=i("6fqj"),A=i("H/tU"),$={name:"ListingPlusFooter",components:{SimpleInput:k.a,ListingMemberFaceCard:S.a,LoadingMiddle:M.a,ListingPricesCard:O.a,SimpleSelect:A.a},props:{the_prices:{type:Object}},data:function(){return{timed_listing:"",numed_listing:"",payment_listing:0,payments:[]}},created:function(){this.payments=d.a.show_paymet()},methods:{_pricesSubmit:function(){this.$emit("pricesSubmit_Father")},pricesSubmit:function(){u.a.click("pricesResBtn")},addIntoFreight:function(){this.$emit("openFreightInsert_Father")},pricesPdfView:function(){this.$emit("pricesPdfView_Father")},reciverTimed:function(t){this.timed_listing=t},reciverNumed:function(t){var e=this;this.numed_listing=t,_.a.listing.getOneByAny({num:t}).then(function(i){_.a.judge_response(i[0])&&(e.$emit("reciverNumed_Father",""),u.a.showToast("发票编号“"+t+"”重复，数据库中已有相同编号的发票！"))})},reciverPayment:function(t){this.payment_listing=t},validateInput:function(){var t="";return""==this.timed_listing&&(t="请检查发票时间的输入！"),""==this.numed_listing&&(t="请检查发票编号的输入！"),""==t?{timed:this.timed_listing,numed:this.numed_listing,payment:this.payment_listing}:(u.a.showToast(t),!1)},changePrices:function(){u.a.showModal("sureChangePricesModal")}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("h5",{staticClass:"fw-none text-accent"},[t._v("其他信息")]),t._v(" "),null!=t.the_prices?i("listing-prices-card",{attrs:{_prices:t.the_prices,is_icon:!0},on:{changeSignal:t.changePrices}}):i("div",{staticClass:"member-loading-wrapper"},[i("loading-middle")],1)],1),t._v(" "),i("div",{staticClass:"col-sm-3 pt-4"},[i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{attrs:{the_name:"listing_numd",the_tip_header:"发票编号",the_placeholder:"- -",the_min_length:3,the_max_length:12},on:{returnValue:t.reciverNumed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("发票编号：")])])],1),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{attrs:{the_name:"listing_timed",the_tip_header:"发票时间",the_placeholder:"yyyy-mm-dd"},on:{returnValue:t.reciverTimed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("发票时间：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-3 pt-1"},[i("div",{staticClass:"p-2 m-2 fs-12"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-select",{attrs:{the_name:"listing_payment",the_list:t.payments},on:{returnValue:t.reciverPayment}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("支付方式：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-1 flex-center"},[i("button",{staticClass:"hidden",attrs:{id:"pricesResBtn"},on:{click:t._pricesSubmit}})]),t._v(" "),i("div",{staticClass:"col-sm-2 pt-2"},[i("button",{staticClass:"btn btn-light btn-block btn-sm",on:{click:t.addIntoFreight}},[i("span",{staticClass:"fs-16"},[t._v("+")]),t._v("\n      加入菜品\n    ")]),t._v(" "),i("button",{staticClass:"btn btn-outline-info btn-block btn-sm",on:{click:t.pricesPdfView}},[t._v("下一步")])])])},staticRenderFns:[]};var T=i("VU/8")($,N,!1,function(t){i("i89r")},"data-v-5e07d83a",null).exports,U=i("U5hB"),V=i("z1aH"),I={name:"ListingPlusFullMsg",data:function(){return{named:"",areas:[],contact_phoned:"",contact_area:"",tip_named:"",tip_contact_phoned:""}},mounted:function(){var t=this;_.a.area.getList_Area({},!0).then(function(e){t.areas=e,0==t.contact_area&&(t.contact_area=e[0].id)})},methods:{listingPlusSubmit:function(){}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"listingFullMsgModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body"},[i("form",{staticClass:"row"},[i("div",{staticClass:"form-group col-sm-12"},[i("label",{attrs:{for:"named"}},[t._v("联络人")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.named,expression:"named"}],staticClass:"form-control",attrs:{type:"text",id:"named",placeholder:"名称"},domProps:{value:t.named},on:{input:function(e){e.target.composing||(t.named=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"namedTip"}},[t._v(t._s(t.tip_named))])]),t._v(" "),i("div",{staticClass:"form-group col-sm-12"},[i("label",{attrs:{for:"contact_area"}},[t._v("联系电话")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.contact_area,expression:"contact_area"}],staticClass:"form-control",attrs:{id:"contact_area"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.contact_area=e.target.multiple?i:i[0]}}},t._l(t.areas,function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.area))])}),0)]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.contact_phoned,expression:"contact_phoned"}],staticClass:"form-control",attrs:{type:"text",id:"contact_phoned",placeholder:"电话"},domProps:{value:t.contact_phoned},on:{input:function(e){e.target.composing||(t.contact_phoned=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"contact_phonedTip"}},[t._v(t._s(t.tip_contact_phoned))])])])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("关闭")]),t._v(" "),i("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.listingPlusSubmit}},[t._v("提交")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("\n          完善信息\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示: 发票信息完善后，才可提交\n          ")])])])}]};var R=i("VU/8")(I,E,!1,function(t){i("ZIDc")},"data-v-11f045a2",null).exports,B=i("o9vp"),j=i("Q9xG"),Q=i("uT2u"),H=i("lT1N"),q={name:"ListingPlus",components:{DefLayout:m.a,ListingPlusTop:x,ListingPlusBody:L,ListingPlusFooter:T,Loading:U.a,ListingChoiseModal:V.a,ListingPlusFullMsg:R,ListingPdfModal:B.a,Submit:j.a,CustomModal:Q.a,InsertFreightModal:H.a},data:function(){return{listingContent:[],prices:null,select:[],selectContent:[],isLoading:!0,timed:"",numed:"",payment:0,result_price:""}},mounted:function(){this.loadPrices(),this.loadContent()},methods:{loadPrices:function(){if(null==this.prices){var t=u.a.storage._get("listing_active_prices");return null!=t&&""!=t&&void 0!=t?this.prices=JSON.parse(t):this.openPriceChoise(),!1}return!0},loadContent:function(){var t=this;if(null!=this.prices){var e={price_collect:this.prices.id};_.a.prices_content.getOneByPrices(e).then(function(e){if(_.a.judge_response_list(e)){var i=JSON.parse(e[0].content);for(var s in t.listingContent=[],i)t.listingContent.push(r()({},i[s],{zk:"",count:"0.00",res:"0.00"}));t.select=[t.listingContent[0].id]}t.isLoading=!1})}else u.a.showModal("pricesChoiseModal")},openPriceChoise:function(){u.a.showModal("pricesChoiseModal")},openFreightInsert:function(){this.$refs.insertFreight.openInsertFreight(),this.$refs.insertFreight.loadHaventFreight()},reciverInsertFreight:function(t){this.listingContent.unshift(r()({},t,{zk:"",count:"0.00",res:"0.00"}))},reciverPrices:function(t){this.prices=t,u.a.storage._set("listing_active_prices",n()(t)),this.loadContent(),u.a.showToast("列表加载完毕。",1200)},collectSelect:function(){var t=this;this.selectContent=this.listingContent.filter(function(e){return u.a.inList(e.id,t.select)}),this.selectContent=this.selectContent.map(function(t){return t.res=u.a.floatNum.floatMul(t.count,t.price),t}),this.select.length>1?this.result_price=this.selectContent.reduce(function(t,e){return u.a.floatNum.floatAdd(t.res,e.res)}):this.result_price=this.selectContent[0].res},collectMsg:function(){var t=this.$refs.lpFooter.validateInput();return 0!=t&&(this.timed=t.timed,this.numed=t.numed,this.payment=t.payment,!0)},_submit:function(t){var e=this,i=this;_.a.listing.add(t).then(function(t){_.a.judge_response(t)&&_.a.listing_content.add({listing_id:t.id,content:n()(i.selectContent)}).then(function(t){_.a.judge_response(t)&&(u.a.showToast("新增成功！！！",1800),u.a.storage._set("listing_active_prices",""),u.a.closeAllModal(),setTimeout(function(){e.$router.push("/home/listing")},700))})})},submit:function(t){var e=this;_.a.area.getOne(t.area).then(function(i){var s={num:e.numed,listing_time:e.timed+" 00:00:00",pay_way:e.payment,membery_id:e.prices.membery.id,price_collect_id:e.prices.id,freight_item_num:e.select.length,total_price_freight:e.result_price,result_price:e.result_price,pay_contact_area:t.area,pay_contact_named:t.contact_named,pay_contact_phone:i.id+" "+t.phoned,pay_contact_email:t.email};e._submit(s)})},pricesSubmit:function(t){if(this.collectMsg()){this.collectSelect();var e=this.selectContent.filter(function(t){return 0==t.res});e.length>0?u.a.showToast("存在 "+e.length+"项 数量为 0 的选项！！！"):this.submit(t)}},pricesPdfView:function(){this.collectMsg()&&(this.collectSelect(),u.a.showModal("listingPdfViewModal"))}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("def-layout",[i("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("新增发票")]),t._v(" "),i("listing-plus-top",{attrs:{slot:"layout_inner_head",_listings:t.listingContent,_select:t.select},slot:"layout_inner_head"}),t._v(" "),t.listingContent.length>0?i("listing-plus-body",{attrs:{slot:"layout_inner_body",_listingContent:t.listingContent,_select:t.select},slot:"layout_inner_body"}):i("transition",{attrs:{slot:"layout_inner_body",name:"fade"},slot:"layout_inner_body"},[i("loading")],1),t._v(" "),i("listing-plus-footer",{ref:"lpFooter",attrs:{slot:"layout_footer",the_prices:t.prices},on:{pricesPdfView_Father:t.pricesPdfView,pricesSubmit_Father:t.pricesSubmit,openFreightInsert_Father:t.openFreightInsert},slot:"layout_footer"}),t._v(" "),i("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[i("listing-choise-modal",{attrs:{defPrices:t.prices},on:{returnChoised:t.reciverPrices}}),t._v(" "),i("listing-plus-full-msg"),t._v(" "),null!=t.prices?i("listing-pdf-modal",{attrs:{membery:t.prices.membery,_listing_content:t.selectContent,_numed:t.numed,_timed:t.timed,_payment:t.payment,isPlus:!0},on:{submit_Father:t.pricesSubmit}}):t._e(),t._v(" "),i("custom-modal",{attrs:{id_prefix:"sureChangePrices",title:"提示",txt:"更改所属报价单会造成发票的菜品内容被替换，是否继续？"},on:{done_Father:t.openPriceChoise}},[i("div",{attrs:{slot:"submit_text"},slot:"submit_text"},[t._v("继续")])]),t._v(" "),i("insert-freight-modal",{ref:"insertFreight",attrs:{haved:t.listingContent},on:{reciverInsert:t.reciverInsertFreight}}),t._v(" "),i("submit",{on:{submitConfirm:t.submit}})],1)],1)},staticRenderFns:[]};var J=i("VU/8")(q,z,!1,function(t){i("LOsN")},"data-v-d29fe012",null);e.default=J.exports},Yde4:function(t,e){},ZIDc:function(t,e){},aXe9:function(t,e){},c3q6:function(t,e){},i89r:function(t,e){},kFX6:function(t,e){},t2jY:function(t,e){},z1aH:function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s),a=i("NAQQ"),r=i("/xUl"),l={components:{ListingPricesCard:i("6fqj").a},props:{defPrices:{type:Object,default:function(){return null}}},data:function(){return{pricesList:[],pricesChoise:null}},mounted:function(){var t=this;r.a.prices.getList_Prices().then(function(e){null==t.defPrices?t.loadFirstChoise(e[0]):t.loadFirstChoise(t.defPrices),t.pricesList=e})},methods:{loadFirstChoise:function(t){null==this.pricesChoise&&(this.pricesChoise=t)},ser_timed:function(t){return a.a.timed.ser_timed(t,!0,!0)},choised:function(t){var e=!0,i=!1,s=void 0;try{for(var a,r=n()(this.pricesList);!(e=(a=r.next()).done);e=!0){var l=a.value;l.id==t&&(this.pricesChoise=l)}}catch(t){i=!0,s=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw s}}},choiseSubmit:function(){null==this.pricesChoise?a.a.showToast("您还未选择一名客户"):(this.$emit("returnChoised",this.pricesChoise),a.a.closeModal("pricesChoiseModal"))}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"pricesChoiseModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),null!=t.pricesChoise?i("listing-prices-card",{attrs:{_prices:t.pricesChoise}}):t._e()],1),t._v(" "),i("div",{staticClass:"modal-body pt-0 pb-0"},[i("div",{},[t.pricesList.length>0?i("table",{staticClass:"table table-top-line-none"},t._l(t.pricesList,function(e){return i("tr",{key:e.id,staticClass:"hand",class:{"item-choise":e.id==t.pricesChoise.id},on:{click:function(i){return t.choised(e.id)}}},[i("td",[t._v(t._s(e.num))]),t._v(" "),i("td",[t._v(t._s(t.ser_timed(e.start_time)))]),t._v(" "),i("td",[t._v(t._s(e.membery.num)+" "+t._s(e.membery.named))])])}),0):t._e()])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("离开")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.choiseSubmit}},[t._v("确认选择")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"modal-title"},[this._v("\n          选择的报价单：\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示: 需要选择一份报价单才能开始制作表单\n          ")])])}]};var c=i("VU/8")(l,o,!1,function(t){i("t2jY")},"data-v-316f5a34",null);e.a=c.exports},zm3U:function(t,e){}});
//# sourceMappingURL=1.fb6e516abcca211f79b7.js.map