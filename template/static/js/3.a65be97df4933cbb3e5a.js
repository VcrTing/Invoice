webpackJsonp([3],{"1yQI":function(t,e){},"8Psg":function(t,e){},"99M2":function(t,e){},"9Wpn":function(t,e){},J1nq:function(t,e){},Rb8F:function(t,e){},U5HZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("0jG4"),n=i("5nBN"),a=i.n(n),r=i("NAQQ"),l=i("7t+N"),c=i.n(l),d=i("JSMz"),o=i("Bmzg"),_={name:"PdfInvoiceMember",props:{the_member:{type:Object}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"fs-12 w-100 pdf-table"},[i("tbody",{},[i("tr",[i("td",{attrs:{width:"72"}},[t._v("客户：")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.the_member.named))])]),t._v(" "),i("tr",[i("td",[t._v("地址：")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.the_member.addr))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"3"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("联络人：")]),this._v(" "),e("td",{attrs:{width:"40%"}}),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("电话：")]),this._v(" "),e("td"),this._v(" "),e("td",[this._v("传真：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("电邮地址：")]),this._v(" "),e("td",{attrs:{colspan:"2"}})])}]};var u=i("VU/8")(_,v,!1,function(t){i("XUrk")},"data-v-b92ea9ce",null).exports,m={name:"PdfInvoiceMsg",props:{listing_num:{type:String},listing_time:{type:String},member_num:{type:String},listing_payment:{type:String}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"pdf-table w-100 fs-12"},[i("tbody",{},[i("tr",[i("td",{attrs:{width:"48%"}},[t._v("发票编号：")]),t._v(" "),i("td",[t._v(t._s(t.listing_num))])]),t._v(" "),i("tr",[i("td",[t._v("发票日期：")]),t._v(" "),i("td",[t._v(t._s(t.listing_time))])]),t._v(" "),t._m(0),t._v(" "),i("tr",[i("td",[t._v("客户编号：")]),t._v(" "),i("td",[t._v(t._s(t.member_num))])]),t._v(" "),i("tr",[i("td",[t._v("付款方式：")]),t._v(" "),i("td",[t._v(t._s(t.listing_payment))])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("参考编号：")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("销售员：")]),this._v(" "),e("td")])}]};var p=i("VU/8")(m,f,!1,function(t){i("oRIp")},"data-v-9ef3552c",null).exports,h=i("BO1k"),g=i.n(h),b={name:"PdfInvoiceFreight",props:{lising_content:{type:Array}},computed:{freight_price:function(){},result_price:function(){var t=0,e=!0,i=!1,s=void 0;try{for(var n,a=g()(this.lising_content);!(e=(n=a.next()).done);e=!0){var l=n.value,c=l.price,d=l.count,o=r.a.floatNum.floatMul(c,d);t=r.a.floatNum.floatAdd(o,t)}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}return t}},methods:{unit:function(t){return a.a.ser_unit(t)}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"pdf-table fs-12 w-100 pdf-table-freight mt-2 text-center"},[t._m(0),t._v(" "),i("tbody",[t._l(t.lising_content,function(e,s){return i("tr",{key:e.id},[i("td",[t._v(t._s(s+1))]),t._v(" "),i("td",[t._v(t._s(e.num))]),t._v(" "),i("td",[t._v(t._s(e.named))]),t._v(" "),i("td",[i("div",{staticClass:"text-right float-left",staticStyle:{width:"60%"}},[t._v(t._s(e.count)+" ")]),t._v(" "),i("div",{staticClass:"text-left float-left",staticStyle:{width:"40%"}},[t._v(t._s(t.unit(e.unit)))])]),t._v(" "),i("td",{staticClass:"text-right"},[t._v(t._s(e.price))]),t._v(" "),i("td",[t._v(" ")]),t._v(" "),i("td",{staticClass:"text-right"},[t._v(t._s((parseFloat(e.price)*parseFloat(e.count)).toFixed(2)))])])}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("tr",{staticClass:"pdf-table-freight-footer"},[i("td"),t._v(" "),i("td",{attrs:{colspan:"3"}}),t._v(" "),i("td",[t._v("统计")]),t._v(" "),i("td",[t._v("HK$")]),t._v(" "),i("td",{staticClass:"text-right"},[t._v(t._s(t.result_price))])])],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",{},[i("th",{attrs:{width:"49"}},[t._v("项号")]),t._v(" "),i("th",[t._v("货号")]),t._v(" "),i("th",[t._v("描述")]),t._v(" "),i("th",[t._v("数量")]),t._v(" "),i("th",[t._v("单价")]),t._v(" "),i("th",{attrs:{width:"49"}},[t._v("折扣")]),t._v(" "),i("th",[t._v("金额")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"pdf-table-freight-footer br-t-pdf"},[e("td",[this._v("备注")]),this._v(" "),e("td",{attrs:{colspan:"3"}}),this._v(" "),e("td",[this._v("项目合计")]),this._v(" "),e("td",[this._v("HK$")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"pdf-table-freight-footer"},[e("td"),this._v(" "),e("td",{attrs:{colspan:"3"}}),this._v(" "),e("td",[this._v("附加费")]),this._v(" "),e("td"),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"pdf-table-freight-footer"},[e("td"),this._v(" "),e("td",{attrs:{colspan:"3"}}),this._v(" "),e("td",[this._v("折扣")]),this._v(" "),e("td"),this._v(" "),e("td")])}]};var y=i("VU/8")(b,C,!1,function(t){i("99M2")},"data-v-3622725c",null).exports,w={name:"ListingPdf",components:{PdfFooter:d.a,PdfHeader:o.a,PdfInvoiceMember:u,PdfInvoiceMsg:p,PdfInvoiceFreight:y},props:{pdf_listing_content:{type:Array},pdf_listing:{type:Object},pdf_member_select:{type:Object}},created:function(){},methods:{ser_listing_payment:function(t){return a.a.ser_listing_paymet(t)},invoicePrint:function(){},getPricesTime:function(){return"2020/12/16"},getPricesNum:function(){return"003AC"}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"listingPdfViewModal"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12 text-center fs-12 mt-2"},[i("pdf-header",[t._v("\n              发票\n            ")])],1),t._v(" "),i("div",{staticClass:"col-sm-12"},[i("table",{staticClass:"pdf-table-outter"},[i("tr",[i("td",{attrs:{width:"70%"}},[i("pdf-invoice-member",{attrs:{the_member:t.pdf_member_select}})],1),t._v(" "),i("td",[i("pdf-invoice-msg",{attrs:{listing_num:t.pdf_listing.num,listing_time:t.pdf_listing.listing_time,listing_payment:t.ser_listing_payment(t.pdf_listing.pay_way),member_num:t.pdf_member_select.num}})],1)])])]),t._v(" "),i("div",{staticClass:"col-sm-12"},[i("pdf-invoice-freight",{attrs:{lising_content:t.pdf_listing_content}})],1)]),t._v(" "),i("pdf-footer",{attrs:{member:t.pdf_member_select}})],1),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"data-dismiss":"listingPdfViewModal"}},[this._v("关闭")])])}]};var P=i("VU/8")(w,x,!1,function(t){i("n93G")},"data-v-2630536c",null).exports,$={name:"ListingPlusTableItem",props:{f:{type:Object},index:{type:Number},selected:{type:Boolean}},methods:{unit:function(t){return a.a.ser_unit(t)},_itemOption:function(t,e){this.$emit("father_itemOption",t,e)},_changeNum:function(t,e,i){this.$emit("father_changeNum",t,e,i)}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{staticClass:"prices-item",class:{inActive:!t.selected,"bg-white":!t.selected}},[i("th",{staticClass:"text-input",attrs:{width:"5%",scope:"row"}},[t._v(t._s(t.index+1))]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v(t._s(t.f.num))]),t._v(" "),i("td",{staticClass:"text-left",attrs:{width:"23%"}},[t._v("   "+t._s(t.f.named))]),t._v(" "),i("td",{staticClass:"table-input-td ",attrs:{width:"20%"}},[i("div",{staticClass:"input-group input-group-sm float-left listing-num-input"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"count_"+t.f.id},domProps:{value:t.f.count},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t._changeNum(t.f.id,t.index,"count_")}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v(t._s(t.unit(t.f.unit)))])])])]),t._v(" "),i("td",{staticClass:"text-input pb-0",attrs:{width:"15%"}},[i("div",{staticClass:"li-price-icon text-right text-accent"},[t._v("\n      $\n    ")]),t._v(" "),i("div",{staticClass:"li-price-txt pl-1"},[i("div",{staticClass:"input-group input-group-sm listing-num-input"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"price_"+t.f.id},domProps:{value:t.f.price},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t._changeNum(t.f.id,t.index,"price_")}}})])])]),t._v(" "),i("td",{attrs:{width:"10%"}}),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v(t._s((t.f.price*t.f.count).toFixed(2)))]),t._v(" "),i("td",{attrs:{width:"7%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"selected"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-remove",on:{click:function(e){return t._itemOption(t.f.id,"remove")}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.selected,expression:"!selected"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-plus",on:{click:function(e){return t._itemOption(t.f.id,"add")}}})])])])},staticRenderFns:[]};var k={components:{ListingPdf:P,ListingPlusTableItem:i("VU/8")($,E,!1,function(t){i("qNSV")},"data-v-13bc7ee7",null).exports},name:"ListingPlusLeft",props:{_listing:{type:Object}},data:function(){return{select:[1],listing_content:[],member:{}}},created:function(){this.member=this._listing.membery;var t=this._listing.content.map(function(t){return t.count=0,t});this.listing_content=t},methods:{unit:function(t){return a.a.ser_unit(t)},inList:function(t,e){return r.a.inList(t,e)},itemOption:function(t,e){"add"==e?this.addItem(t):"remove"==e&&this.removeItem(t)},removeItem:function(t){var e=r.a.indexList(t,this.select);this.select.length<2?r.a.showToast("至少选择一项菜品。"):this.select.splice(e,1)},addItem:function(t){r.a.indexList(t,this.select)<0&&this.select.push(t)},changeNum:function(t,e,i){var s=c()("#"+i+t).val();"count_"==i?this.listing_content[e].count=s:"price_"==i&&(this.listing_content[e].price=s)}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pt-2 bg-white def-shadow-s"},[t.listing_content.length>0?i("table",{staticClass:"table mb-0"},[i("tbody",{staticClass:"listing-tbody text-center"},t._l(t.listing_content,function(e,s){return i("listing-plus-table-item",{key:e.id,attrs:{f:e,index:s,selected:t.inList(e.id,t.select)},on:{father_changeNum:t.changeNum,father_itemOption:t.itemOption}})}),1)]):i("div",[t._v("No")]),t._v(" "),i("listing-pdf",{attrs:{pdf_listing_content:t.listing_content,pdf_member_select:t.member,pdf_listing:t._listing}})],1)},staticRenderFns:[]};var R=i("VU/8")(k,L,!1,function(t){i("J1nq")},"data-v-544824dc",null).exports,F={name:"ListingMemberCard",props:{the_member:{type:Object}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fs-12"},[i("div",{staticClass:"fs-14"},[t._t("title")],2),t._v(" "),i("div",{staticClass:"card-content mt-2"},[i("div",{staticClass:"lmc-title mb-2"},[t._m(0),t._v(" "),i("div",{staticClass:"float-left pt-1 pl-2"},[t._v(t._s(t.the_member.named))])]),t._v(" "),i("div",{staticClass:"mb-1"},[t._v("\n      编号："+t._s(t.the_member.num)+"\n    ")]),t._v(" "),i("div",[t._v("\n      地址："+t._s(t.the_member.addr)+"\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lmc-face float-left"},[e("i",{staticClass:"fa fa-address-card-o"})])}]};var M=i("VU/8")(F,N,!1,function(t){i("1yQI")},"data-v-c14bd910",null).exports,O={name:"ListingPricesCard",props:{the_price_collect:{type:Object}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fs-12"},[i("div",{staticClass:"fs-14"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"card-content"},[i("table",[t._m(0),t._v(" "),i("tr",[i("td",{staticClass:"fs-12"},[i("div",[t._v("\n            编号："+t._s(t.the_price_collect.num)+"\n          ")]),t._v(" "),i("div",[t._v("\n            报价时间："+t._s(t.the_price_collect.start_time)+"\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"card-lpc-icon"},[e("i",{staticClass:"fa fa-list-alt"})])])}]};var I=i("VU/8")(O,V,!1,function(t){i("rG2z")},"data-v-3b067627",null).exports,S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"submitModal","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered"},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body"},[t._v("\n        你确定要提交吗？\n      ")]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.sureSubmit}},[t._v("确定")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[this._v("提示")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var U=i("VU/8")({name:"SubmitModal",methods:{sureSubmit:function(){this.$emit("submitConfirm")}}},S,!1,function(t){i("9Wpn")},"data-v-59fa257b",null).exports,j={components:{ListingMemberCard:M,ListingPricesCard:I,Submit:U},name:"ListingPlusRight",props:{_listing:{type:Object}},data:function(){return{membery:{},price_collect:{},show_paymet:a.a.show_paymet(),listing_time:"",listing_paymet:a.a.show_paymet()[0].val}},created:function(){this.membery=this._listing.membery,this.price_collect=this._listing.price_collect},methods:{listingPdfView:function(){r.a.showModal("listingPdfViewModal")},submitResult:function(){r.a.showModal("submitModal")},_submitResult:function(){alert("提交")}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"price-collect-panel mt-4"},[i("listing-prices-card",{attrs:{the_price_collect:t.price_collect}},[t._v("\n      所属报价单：\n    ")])],1),t._v(" "),i("div",{staticClass:"member-panel mt-4"},[i("listing-member-card",{attrs:{the_member:t.membery}},[t._v("\n      所属客户：\n    ")])],1),t._v(" "),i("div",{staticClass:"listing-time-panel mt-4 fs-12"},[i("div",{staticClass:"fs-14"},[t._v("发票时间：")]),t._v(" "),i("div",{staticClass:"card-content pr-4"},[i("div",{staticClass:"input-group input-group-sm"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.listing_time,expression:"listing_time"}],staticClass:"form-control",attrs:{type:"text",placeholder:"yyyy-dd-mm"},domProps:{value:t.listing_time},on:{input:function(e){e.target.composing||(t.listing_time=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"listing-time-panel mt-2 fs-12"},[i("div",{staticClass:"fs-14"},[t._v("支付方式：")]),t._v(" "),i("div",{staticClass:"card-content pr-4"},[i("div",{staticClass:"input-group input-group-sm"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.listing_paymet,expression:"listing_paymet"}],staticClass:"form-control",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.listing_paymet=e.target.multiple?i:i[0]}}},t._l(t.show_paymet,function(e){return i("option",{key:e.val,domProps:{value:e.val}},[t._v(t._s(e.named))])}),0)])])]),t._v(" "),i("div",{staticClass:"listing-option-panel mt-5 fs-12"},[i("div",{staticClass:"fs-14"},[t._v("操作：")]),t._v(" "),i("div",{staticClass:"card-content pr-4"},[i("button",{staticClass:"btn btn-light btn-block pices-submit-btn btn-sm",on:{click:t.listingPdfView}},[t._v("预览 Pdf")]),t._v(" "),i("button",{staticClass:"btn btn-outline-info btn-block pices-submit-btn btn-sm",on:{click:t.submitResult}},[t._v("提交结果")])])])])},staticRenderFns:[]};var q=i("VU/8")(j,A,!1,function(t){i("8Psg")},"data-v-8b640966",null).exports,B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row content-top-bar overflow-hidden"},[i("div",{staticClass:"col-sm-2 "}),t._v(" "),i("div",{staticClass:"col-sm-10 pl-0"},[i("div",{staticClass:"ctb-left"},[i("div",{staticClass:"page-title fw-b mt-3 pl-3"},[t._v("新增发票")]),t._v(" "),i("table",{staticClass:"table "},[i("tr",{staticClass:"text-center"},[i("td",{attrs:{width:"5%"}},[t._v("#")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("货号")]),t._v(" "),i("td",{staticClass:"text-left",attrs:{width:"23%"}},[t._v("  描述")]),t._v(" "),i("td",{staticClass:"text-left",attrs:{width:"20%"}},[t._v("数量")]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("单价")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("折扣")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("总价")]),t._v(" "),i("td",{attrs:{width:"7%"}},[t._v("选择")])])])]),t._v(" "),i("div",{staticClass:"ctb-right"})])])}]};var T={components:{ListingPlusTop:i("VU/8")({name:"LisingPlusTop"},B,!1,function(t){i("Rb8F")},"data-v-3367a557",null).exports,ListingPlusLeft:R,ListingPlusRight:q,Submit:U},name:"ListingPlus",data:function(){return{listing:s.a.listingList[0]}},methods:{_submitResult:function(){this.$refs.lpr._submitResult()}}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-between full-content bg-content"},[e("div",{staticClass:"content-top-panel"},[e("listing-plus-top")],1),this._v(" "),e("div",{staticClass:"content-left-panel"},[e("listing-plus-left",{attrs:{_listing:this.listing}})],1),this._v(" "),e("div",{staticClass:"content-right-panel def-shadow"},[e("listing-plus-right",{ref:"lpr",attrs:{_listing:this.listing}})],1),this._v(" "),e("submit",{on:{submitConfirm:this._submitResult}})],1)},staticRenderFns:[]};var z=i("VU/8")(T,G,!1,function(t){i("pLqS")},"data-v-90a0b5f4",null);e.default=z.exports},XUrk:function(t,e){},n93G:function(t,e){},oRIp:function(t,e){},pLqS:function(t,e){},qNSV:function(t,e){},rG2z:function(t,e){}});
//# sourceMappingURL=3.a65be97df4933cbb3e5a.js.map