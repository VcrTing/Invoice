webpackJsonp([2],{"5MlZ":function(t,e,s){"use strict";var i={name:"ListingMemberFaceCard",props:{the_member:{type:Object}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",[s("tr",[t._m(0),t._v(" "),s("td",{staticClass:"pl-3"},[s("div",[t._v(t._s(t.the_member.named))]),t._v(" "),s("div",{staticClass:"fs-12"},[t._v("编号："+t._s(t.the_member.num))])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"member-face"},[e("div",{staticClass:"img"})])}]};var n=s("VU/8")(i,a,!1,function(t){s("XajI")},"data-v-376e63ac",null);e.a=n.exports},Bmzg:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"pdf-title"},[t._v(t._s(t.pdf_title))]),t._v(" "),s("div",[t._v("\n    "+t._s(t.pdf_sub)+"\n  ")]),t._v(" "),s("div",[t._v("\n    电话："+t._s(t.pdf_contact_phoned)+"  传真："+t._s(t.pdf_contact_fax)+"\n  ")]),t._v(" "),s("div",[t._v("\n    电邮地址：\n  ")]),t._v(" "),s("div",{staticClass:"pdf-title mt-2"},[t._t("default")],2)])},staticRenderFns:[]};var a=s("VU/8")({name:"PdfHeader",data:function(){return{pdf_title:"Lumicrest International Limited",pdf_sub:"Office: Rm A12, 8/F Lee King Industrial Building 12 Ng Fong Street, San Po Kong, Kowloon, Hong",pdf_contact_phoned:"5488 1979 5424 4119",pdf_contact_fax:"2777 0760"}}},i,!1,function(t){s("MWuI")},"data-v-2bcb5ac3",null);e.a=a.exports},CDdF:function(t,e){},GzTM:function(t,e){},Itxy:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("BO1k"),a=s.n(i),n=s("7t+N"),r=s.n(n),c=(s("0jG4"),s("5nBN")),d=s.n(c),l=s("NAQQ"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full bg-hui content-complex-wrapper"},[s("div",{staticClass:"content-complex p-2 pl-4 pr-4"},[s("div",{staticClass:"content-header mt-2"},[s("div",[t._t("layout_title")],2)]),t._v(" "),s("div",{staticClass:"content-panel def-shadow"},[s("div",{staticClass:"content-panel-inner"},[s("div",{staticClass:"cpc-head"},[t._t("layout_inner_head")],2),t._v(" "),s("div",{staticClass:"cpc-body cpc-border-fix"},[t._t("layout_inner_body")],2)]),t._v(" "),s("div",{staticClass:"content-panel-footer"},[t._t("layout_footer")],2)])]),t._v(" "),t._t("layout_extra")],2)},staticRenderFns:[]};var _=s("VU/8")({name:"DefLayout"},o,!1,function(t){s("agEQ")},"data-v-5c42c067",null).exports,m={name:"PricePlusLeft",props:{prices_contented:{type:Array},selected:{type:Array}},mounted:function(){this.prices_contented.length>0&&this.selected.push(this.prices_contented[0].id)},methods:{unit:function(t){return d.a.ser_unit(t)},inList:function(t,e){return l.a.inList(t,e)},itemOption:function(t,e){"add"==e?this.$emit("addItemChild",t):"remove"==e&&this.$emit("removeItemChild",t)},changeNum:function(t,e){var s=r()("#price_"+t).val();this.$emit("changeNum_Father",e,s)}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table m-0 table-top-line-none"},[s("tbody",{staticClass:"listing-tbody"},t._l(t.prices_contented,function(e,i){return s("tr",{key:e.id,staticClass:"prices-item",class:{inActive:!t.inList(e.id,t.selected),"bg-white":t.inList(e.id,t.selected)}},[s("th",{staticClass:"text-input",attrs:{scope:"row",width:"10%"}},[t._v(t._s(i+1))]),t._v(" "),s("td",{attrs:{width:"15%"}},[t._v(t._s(e.num))]),t._v(" "),s("td",{attrs:{width:"30%"}},[t._v(t._s(e.named))]),t._v(" "),s("td",{staticClass:"table-input-td ",attrs:{width:"25%"}},[s("div",{staticClass:"float-left mt-1 text-input"},[t._v("$")]),t._v(" "),s("div",{staticClass:"input-group input-group-sm float-left listing-num-input"},[s("input",{staticClass:"form-control",attrs:{type:"text",id:"price_"+e.id},domProps:{value:e.price},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.changeNum(e.id,i)},change:function(s){return t.changeNum(e.id,i)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v("/"+t._s(t.unit(e.unit)))])])])]),t._v(" "),s("td",{attrs:{width:"10%"}}),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"10%"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.inList(e.id,t.selected),expression:"inList(f.id, selected)"}]},[s("i",{staticClass:"fa hand listing-table-icon fa-remove",on:{click:function(s){return t.itemOption(e.id,"remove")}}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.inList(e.id,t.selected),expression:"!inList(f.id, selected)"}]},[s("i",{staticClass:"fa hand listing-table-icon fa-plus",on:{click:function(s){return t.itemOption(e.id,"add")}}})])])])}),0)])},staticRenderFns:[]};var v=s("VU/8")(m,u,!1,function(t){s("t8FE")},"data-v-ef1ee9a4",null).exports,h=s("/xUl"),f=s("5MlZ"),p={components:{ListingMemberFaceCard:f.a},name:"MemberChoiseModal",data:function(){return{members:[],memberChoise:null}},mounted:function(){var t=this;h.a.member.getList_Member().then(function(e){t.memberChoise=e[0],t.members=e})},methods:{choised:function(t){var e=!0,s=!1,i=void 0;try{for(var n,r=a()(this.members);!(e=(n=r.next()).done);e=!0){var c=n.value;c.id==t&&(this.memberChoise=c)}}catch(t){s=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(s)throw i}}},choiseSubmit:function(){null==this.memberChoise?l.a.showToast("您还未选择一名客户"):(this.$emit("returnChoised",this.memberChoise),l.a.closeModal("memberChoiseModal"))}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"memberChoiseModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),null!=t.memberChoise?s("listing-member-face-card",{attrs:{the_member:t.memberChoise}}):t._e()],1),t._v(" "),s("div",{staticClass:"modal-body pt-0 pb-0"},[s("div",{},[t.members.length>0?s("table",{staticClass:"table table-top-line-none"},t._l(t.members,function(e){return s("tr",{key:e.id,staticClass:"hand",class:{"member-choise":e.id==t.memberChoise.id},on:{click:function(s){return t.choised(e.id)}}},[s("td",[t._v(t._s(e.num))]),t._v(" "),s("td",[t._v(t._s(e.named))]),t._v(" "),s("td",[t._v(t._s(e.addr))])])}),0):t._e()])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("离开")]),t._v(" "),s("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.choiseSubmit}},[t._v("确认选择")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"modal-title"},[this._v("\n          选择的客户：\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示: 需要选择一名客户才能开始制作表单\n          ")])])}]};var C=s("VU/8")(p,b,!1,function(t){s("O3Id")},"data-v-0c742e41",null).exports,y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"btn btn-light btn-block btn-sm",on:{click:this.pricesPdfView}},[this._v("预览 Pdf")]),this._v(" "),e("button",{staticClass:"btn btn-outline-info btn-block btn-sm",on:{click:this.pricesSubmit}},[this._v("提交结果")])])},staticRenderFns:[]};var g=s("VU/8")({name:"PricesPlusFooter",methods:{pricesPdfView:function(){this.$emit("pricesPdfView_Father")},pricesSubmit:function(){}}},y,!1,function(t){s("WdiV")},"data-v-0a71dee8",null).exports,w=s("I76R"),x=s.n(w),P={name:"ListingTimedInoput",props:{the_tip_header:{type:String},the_placeholder:{type:String},the_min_length:{type:Number,default:9},the_max_length:{type:Number,default:10}},data:function(){return{value:""}},methods:{tipToast:function(t){l.a.showToast(t)},valueValidate:function(){var t=x.a.val_empty(this.value,this.the_tip_header);1==t&&(t=x.a.val_length(this.value,this.the_tip_header,this.the_min_length,this.the_max_length),console.log(t),1==t?this.valueSubmit():l.a.showToast(t))},valueSubmit:function(){this.$emit("returnValue",this.value)}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group m-0"},[s("label",{staticClass:"col-form-label p-0",attrs:{for:"value"}},[t._t("input_txt")],2),t._v(" "),s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",id:"value",placeholder:t.the_placeholder},domProps:{value:t.value},on:{change:t.valueValidate,input:function(e){e.target.composing||(t.value=e.target.value)}}})])])},staticRenderFns:[]};var M=s("VU/8")(P,F,!1,function(t){s("GzTM")},"data-v-6b40f4b0",null).exports,V=s("JSMz"),$=s("Bmzg"),E={name:"PdfPriceMember",props:{member:{type:Object}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"fs-12 w-100 pdf-table"},[s("tbody",[t._m(0),t._v(" "),s("tr",[s("td",{attrs:{width:"72"}},[t._v("客户：")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.member.named))])]),t._v(" "),s("tr",[s("td",[t._v("地址：")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.member.addr))])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"3"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"3"}},[this._v(" ")])])}]};var k=s("VU/8")(E,L,!1,function(t){s("YHPp")},"data-v-65a8a25b",null).exports,I={name:"PdfPriceMsg",props:{pricesTime:{type:String},pricesNum:{type:String},member:{type:Object}},data:function(){return{}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"pdf-table w-100 fs-12"},[s("tbody",[s("tr",[s("td",{attrs:{width:"48%"}},[t._v("报价单号：")]),t._v(" "),s("td",[t._v(t._s(t.pricesNum))])]),t._v(" "),s("tr",[s("td",[t._v("客户编号：")]),t._v(" "),s("td",[t._v(t._s(t.member.num))])]),t._v(" "),s("tr",[s("td",[t._v("报价时间：")]),t._v(" "),s("td",[t._v(t._s(t.pricesTime))])])])])},staticRenderFns:[]};var N=s("VU/8")(I,S,!1,function(t){s("CDdF")},"data-v-df772fdc",null).exports,R={name:"PdfPricesFreight",props:{freights:{type:Array}},methods:{unit:function(t){return d.a.ser_unit(t)}}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"pdf-table fs-12 w-100 pdf-table-freight mt-2 text-center"},[t._m(0),t._v(" "),s("tbody",{staticClass:"ptf-tbody"},t._l(t.freights,function(e,i){return s("tr",{key:e.id},[s("td",[t._v(t._s(i+1))]),t._v(" "),s("td",[t._v(t._s(e.num))]),t._v(" "),s("td",{staticClass:"text-left pl-4"},[t._v(t._s(e.named))]),t._v(" "),s("td",[s("table",{staticClass:"prices-freight-price-inner-table text-left"},[s("tr",[s("td",{staticClass:"text-right",attrs:{width:"40%"}},[t._v("$")]),t._v(" "),s("td",{attrs:{width:"20%"}},[t._v(t._s(e.price))]),t._v(" "),s("td",{attrs:{width:"40%"}},[t._v("/"+t._s(t.unit(e.unit)))])])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{},[e("th",{attrs:{width:"79px"}},[this._v("项号")]),this._v(" "),e("th",[this._v("货号")]),this._v(" "),e("th",{staticClass:"text-left pl-4"},[this._v("描述")]),this._v(" "),e("th",[this._v("单价")])])])}]};var T=s("VU/8")(R,O,!1,function(t){s("KrXQ")},"data-v-14f9b774",null).exports,U={components:{PdfFooter:V.a,PdfHeader:$.a,PdfPriceMember:k,PdfPriceMsg:N,PdfPricesFreight:T},name:"PricesPdf",props:{the_prices_content:{type:Array,default:[]},the_member:{type:Object},the_prices_timed:{type:String},the_prices_numed:{type:String}},mounted:function(){},data:function(){return{}},methods:{invoicePrint:function(){}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"pricesPdfViewModal"}},[s("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[t.the_prices_content.length>0?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 text-center fs-12 mt-2"},[s("pdf-header",[t._v("\n              报价单\n            ")])],1),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("table",{staticClass:"pdf-table-outter"},[s("tr",[s("td",{attrs:{width:"70%"}},[s("pdf-price-member",{attrs:{member:t.the_member}})],1),t._v(" "),s("td",[s("pdf-price-msg",{attrs:{member:t.the_member,pricesTime:t.the_prices_timed,pricesNum:t.the_prices_numed}})],1)])])]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("pdf-prices-freight",{attrs:{freights:t.the_prices_content}})],1)]):t._e(),t._v(" "),null!=t.the_member?s("pdf-footer",{attrs:{member:t.the_member}}):t._e()],1),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"data-dismiss":"modal"}},[this._v("关闭")])])}]};var B=s("VU/8")(U,j,!1,function(t){s("bZSv")},"data-v-16de6dc4",null).exports,A={components:{DefLayout:_,PricesPlusBody:v,MemberChoiseModal:C,ListingMemberFaceCard:f.a,SimpleInput:M,PricesPlusFooter:g,PricesPdfModal:B},name:"PricesPlus",data:function(){return{price_content:[],select:[],select_content:[],member:null,numed_prices:"0000",timed_prices:""}},created:function(){},mounted:function(){var t=this;null==this.member&&l.a.showModal("memberChoiseModal"),h.a.freight.getList_Freight().then(function(e){t.price_content=[];var s=!0,i=!1,n=void 0;try{for(var r,c=a()(e);!(s=(r=c.next()).done);s=!0){var d=r.value;t.price_content.push({id:d.id,num:d.num,named:d.named,unit:d.unit,price:d.price})}}catch(t){i=!0,n=t}finally{try{!s&&c.return&&c.return()}finally{if(i)throw n}}})},methods:{reciverChoised:function(t){this.member=t},reciverTimed:function(t){this.timed_prices=t},reciverNumed:function(t){this.numed_prices=t},pricesPdfView:function(){var t=this;this.select_content=this.price_content.filter(function(e){return!!l.a.inList(e.id,t.select)}),l.a.showModal("pricesPdfViewModal")},removeItem:function(t){var e=l.a.indexList(t,this.select);this.select.length<2?l.a.showToast("至少选择一项菜品。"):this.select.splice(e,1)},addItem:function(t){l.a.indexList(t,this.select)<0&&this.select.push(t)}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("def-layout",[s("h3",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("新增报价单")]),t._v(" "),s("div",{attrs:{slot:"layout_inner_head"},slot:"layout_inner_head"},[s("h5",{staticClass:"fw-none mt-2"},[t._v("\n      选择菜品\n    ")]),t._v(" "),s("table",{staticClass:"table m-0"},[s("tr",{staticClass:"text-left"},[s("td",{attrs:{width:"10%"}},[t._v("序号")]),t._v(" "),s("td",{attrs:{width:"15%"}},[t._v("货号")]),t._v(" "),s("td",{attrs:{width:"30%"}},[t._v("描述")]),t._v(" "),s("td",{attrs:{width:"25%"}},[t._v("单价")]),t._v(" "),s("td",{attrs:{width:"10%"}}),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("选择操作")])])])]),t._v(" "),t.price_content.length>0?s("prices-plus-body",{attrs:{slot:"layout_inner_body",selected:t.select,prices_contented:t.price_content},on:{removeItemChild:t.removeItem,addItemChild:t.addItem},slot:"layout_inner_body"}):t._e(),t._v(" "),s("div",{attrs:{slot:"layout_footer"},slot:"layout_footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("h5",{staticClass:"fw-none text-accent"},[t._v("其他信息")]),t._v(" "),null!=t.member?s("listing-member-face-card",{attrs:{the_member:t.member}}):t._e()],1),t._v(" "),s("div",{staticClass:"col-sm-3 pt-4"},[s("div",{staticClass:"fs-14 timed-wrapper"},[s("simple-input",{attrs:{the_tip_header:"报价单号",the_placeholder:"- -",the_min_length:3,the_max_length:12},on:{returnValue:t.reciverTimed}},[s("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("报价时间：")])])],1),t._v(" "),s("div",{staticClass:"fs-14 timed-wrapper"},[s("simple-input",{attrs:{the_tip_header:"报价时间",the_placeholder:"yyyy-mm-dd"},on:{returnValue:t.reciverTimed}},[s("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("报价时间：")])])],1)]),t._v(" "),s("div",{staticClass:"col-sm-3 flex-center"}),t._v(" "),s("div",{staticClass:"col-sm-1 flex-center"}),t._v(" "),s("div",{staticClass:"col-sm-2 pt-2"},[s("prices-plus-footer",{on:{pricesPdfView_Father:t.pricesPdfView}})],1)])]),t._v(" "),s("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[s("member-choise-modal",{on:{returnChoised:t.reciverChoised}}),t._v(" "),s("prices-pdf-modal",{attrs:{the_member:t.member,the_prices_timed:t.timed_prices,the_prices_numed:t.numed_prices,the_prices_content:t.select_content}})],1)],1)},staticRenderFns:[]};var D=s("VU/8")(A,z,!1,function(t){s("xoBw")},"data-v-7cbc7d66",null);e.default=D.exports},JSMz:function(t,e,s){"use strict";var i={name:"PdfFooter",props:{member:{type:Object}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-sm-6"}),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"fs-10"},[t._v("收货人")]),t._v(" "),s("div",{staticClass:"fs-12 fw-bold"},[s("b",[t._v(t._s(t.member.named))])]),t._v(" "),s("div",{staticClass:"mt-5"}),t._v(" "),s("div",{staticClass:"br-t-pdf",staticStyle:{width:"85%"}}),t._v(" "),s("div",{staticClass:"fs-10"},[t._v("授权签署及公司盖章")])]),t._v(" "),s("div",{staticClass:"col-sm-6 mt-4"})])},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("nevD")},null,null);e.a=n.exports},KrXQ:function(t,e){},MWuI:function(t,e){},O3Id:function(t,e){},WdiV:function(t,e){},XajI:function(t,e){},YHPp:function(t,e){},agEQ:function(t,e){},bZSv:function(t,e){},nevD:function(t,e){},t8FE:function(t,e){},xoBw:function(t,e){}});
//# sourceMappingURL=2.ec57da2c0337e3ba5135.js.map