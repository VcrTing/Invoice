webpackJsonp([2],{"/ooZ":function(t,e){},"07mN":function(t,e){},"5MlZ":function(t,e,i){"use strict";var s={name:"ListingMemberFaceCard",props:{the_member:{type:Object},is_icon:{type:Boolean}},methods:{changeSomething:function(){this.$emit("changeSignal")}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",[i("tr",[t._m(0),t._v(" "),null!=t.the_member?i("td",{staticClass:"pl-3"},[i("div",[t._v("\n          "+t._s(t.the_member.named)+" \n          "),t.is_icon?i("i",{staticClass:"fa fa-edit text-primary",on:{click:t.changeSomething}}):t._e()]),t._v(" "),i("div",{staticClass:"fs-12"},[t._v("编号："+t._s(t.the_member.num))])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"member-face"},[e("div",{staticClass:"img"})])}]};var a=i("VU/8")(s,n,!1,function(t){i("CC9X")},"data-v-f83eee5c",null);e.a=a.exports},CC9X:function(t,e){},CDdF:function(t,e){},Itxy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),n=i.n(s),a=i("BO1k"),r=i.n(a),c=i("7t+N"),o=i.n(c),l=(i("0jG4"),i("5nBN")),d=i.n(l),m=i("NAQQ"),_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-full bg-hui content-complex-wrapper"},[i("div",{staticClass:"content-complex p-2 pl-4 pr-4"},[i("div",{staticClass:"content-header mt-2"},[i("div",[t._t("layout_title")],2)]),t._v(" "),i("div",{staticClass:"content-panel def-shadow"},[i("div",{staticClass:"content-panel-inner"},[i("div",{staticClass:"cpc-head"},[t._t("layout_inner_head")],2),t._v(" "),i("div",{staticClass:"cpc-body cpc-border-fix"},[t._t("layout_inner_body")],2)]),t._v(" "),i("div",{staticClass:"content-panel-footer"},[t._t("layout_footer")],2)])]),t._v(" "),t._t("layout_extra")],2)},staticRenderFns:[]};var u=i("VU/8")({name:"DefLayout"},_,!1,function(t){i("agEQ")},"data-v-5c42c067",null).exports,h={name:"PricePlusLeft",props:{prices_contented:{type:Array},selected:{type:Array}},mounted:function(){this.prices_contented.length>0&&this.selected.push(this.prices_contented[0].id)},methods:{unit:function(t){return d.a.ser_unit(t)},inList:function(t,e){return m.a.inList(t,e)},itemOption:function(t,e){"add"==e?this.$emit("addItemChild",t):"remove"==e&&this.$emit("removeItemChild",t)},changeNum:function(t,e){var i=o()("#price_"+t).val();this.$emit("changeNum_Father",e,i)}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table m-0 table-top-line-none"},[i("tbody",{staticClass:"listing-tbody"},t._l(t.prices_contented,function(e,s){return i("tr",{key:e.id,staticClass:"prices-item",class:{inActive:!t.inList(e.id,t.selected),"bg-white":t.inList(e.id,t.selected)}},[i("th",{staticClass:"text-input",attrs:{scope:"row",width:"10%"}},[t._v(t._s(s+1))]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v(t._s(e.num))]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v(t._s(e.named))]),t._v(" "),i("td",{staticClass:"table-input-td ",attrs:{width:"25%"}},[i("div",{staticClass:"float-left mt-1 text-input"},[t._v("$")]),t._v(" "),i("div",{staticClass:"input-group input-group-sm float-left listing-num-input"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"price_"+e.id},domProps:{value:e.price},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changeNum(e.id,s)},change:function(i){return t.changeNum(e.id,s)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v("/"+t._s(t.unit(e.unit)))])])])]),t._v(" "),i("td",{attrs:{width:"10%"}}),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.inList(e.id,t.selected),expression:"inList(f.id, selected)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-remove",on:{click:function(i){return t.itemOption(e.id,"remove")}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.inList(e.id,t.selected),expression:"!inList(f.id, selected)"}]},[i("i",{staticClass:"fa hand listing-table-icon fa-plus",on:{click:function(i){return t.itemOption(e.id,"add")}}})])])])}),0)])},staticRenderFns:[]};var p=i("VU/8")(h,v,!1,function(t){i("t8FE")},"data-v-ef1ee9a4",null).exports,f=i("/xUl"),b=i("5MlZ"),g={components:{ListingMemberFaceCard:b.a},name:"MemberChoiseModal",data:function(){return{members:[],memberChoise:null}},mounted:function(){var t=this;f.a.member.getList_Member().then(function(e){t.memberChoise=e[0],t.members=e})},methods:{choised:function(t){var e=!0,i=!1,s=void 0;try{for(var n,a=r()(this.members);!(e=(n=a.next()).done);e=!0){var c=n.value;c.id==t&&(this.memberChoise=c)}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}},choiseSubmit:function(){null==this.memberChoise?m.a.showToast("您还未选择一名客户"):(this.$emit("returnChoised",this.memberChoise),m.a.closeModal("memberChoiseModal"))}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"memberChoiseModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),null!=t.memberChoise?i("listing-member-face-card",{attrs:{the_member:t.memberChoise}}):t._e()],1),t._v(" "),i("div",{staticClass:"modal-body pt-0 pb-0"},[i("div",{},[t.members.length>0?i("table",{staticClass:"table table-top-line-none"},t._l(t.members,function(e){return i("tr",{key:e.id,staticClass:"hand",class:{"member-choise":e.id==t.memberChoise.id},on:{click:function(i){return t.choised(e.id)}}},[i("td",[t._v(t._s(e.num))]),t._v(" "),i("td",[t._v(t._s(e.named))]),t._v(" "),i("td",[t._v(t._s(e.addr))])])}),0):t._e()])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("离开")]),t._v(" "),i("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:t.choiseSubmit}},[t._v("确认选择")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"modal-title"},[this._v("\n          选择的客户：\n          "),e("div",{staticClass:"fs-12"},[this._v("\n            提示: 需要选择一名客户才能开始制作表单\n          ")])])}]};var y=i("VU/8")(g,C,!1,function(t){i("O3Id")},"data-v-0c742e41",null).exports,w=i("I76R"),x=i.n(w),P={name:"ListingTimedInoput",props:{the_name:{type:String},the_tip_header:{type:String},the_placeholder:{type:String},the_min_length:{type:Number,default:9},the_max_length:{type:Number,default:10}},data:function(){return{value:""}},methods:{tipToast:function(t){m.a.showToast(t)},valueValidate:function(){var t=x.a.val_empty(this.value,this.the_tip_header);1==t&&(t=x.a.val_length(this.value,this.the_tip_header,this.the_min_length,this.the_max_length),console.log(t),1==t?this.valueSubmit():m.a.showToast(t))},valueSubmit:function(){console.log(this.value),this.$emit("returnValue",this.value)}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group m-0"},[i("label",{staticClass:"col-form-label p-0",attrs:{for:"value"}},[t._t("input_txt")],2),t._v(" "),i("div",{staticClass:"input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",id:"input_"+t.the_name,name:t.the_name,placeholder:t.the_placeholder},domProps:{value:t.value},on:{change:t.valueValidate,input:function(e){e.target.composing||(t.value=e.target.value)}}})])])},staticRenderFns:[]};var M=i("VU/8")(P,F,!1,function(t){i("07mN")},"data-v-9290fd1c",null).exports,$={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading"})},staticRenderFns:[]};var N=i("VU/8")({name:"LoadingMiddle"},$,!1,function(t){i("tzQp")},"data-v-53589150",null).exports,S={name:"PricesPlusFooter",components:{SimpleInput:M,ListingMemberFaceCard:b.a,LoadingMiddle:N},props:{membery:{type:Object}},data:function(){return{timed_prices:"",numed_prices:""}},methods:{pricesPdfView:function(){this.$emit("pricesPdfView_Father")},pricesSubmit:function(){this.$emit("pricesSubmit_Father")},reciverTimed:function(t){this.timed_prices=t,this.$emit("reciverTimed_Father",this.timed_prices)},reciverNumed:function(t){this.numed_prices=t,this.$emit("reciverNumed_Father",this.numed_prices)},changeMember:function(){this.$emit("changeMember_Father")}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("h5",{staticClass:"fw-none text-accent"},[t._v("其他信息")]),t._v(" "),i("listing-member-face-card",{directives:[{name:"show",rawName:"v-show",value:null!=t.membery,expression:"membery!=null"}],attrs:{is_icon:!0,the_member:t.membery},on:{changeSignal:t.changeMember}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:null==t.membery,expression:"membery==null"}],staticClass:"member-loading-wrapper"},[i("loading-middle")],1)],1),t._v(" "),i("div",{staticClass:"col-sm-3 pt-4"},[i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{attrs:{the_name:"prices_numd",the_tip_header:"报价单号",the_placeholder:"- -",the_min_length:3,the_max_length:12},on:{returnValue:t.reciverNumed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("报价单号：")])])],1),t._v(" "),i("div",{staticClass:"fs-14 timed-wrapper"},[i("simple-input",{attrs:{the_name:"prices_timed",the_tip_header:"报价时间",the_placeholder:"yyyy-mm-dd"},on:{returnValue:t.reciverTimed}},[i("div",{attrs:{slot:"input_txt"},slot:"input_txt"},[t._v("报价时间：")])])],1)]),t._v(" "),i("div",{staticClass:"col-sm-3 flex-center"}),t._v(" "),i("div",{staticClass:"col-sm-1 flex-center"}),t._v(" "),i("div",{staticClass:"col-sm-2 pt-2"},[i("button",{staticClass:"btn btn-light btn-block btn-sm",on:{click:t.pricesPdfView}},[t._v("预览 Pdf")]),t._v(" "),i("button",{staticClass:"btn btn-outline-info btn-block btn-sm",on:{click:t.pricesSubmit}},[t._v("提交结果")])])])},staticRenderFns:[]};var E={components:{DefLayout:u,PricesPlusBody:p,MemberChoiseModal:y,PricesPlusFooter:i("VU/8")(S,V,!1,function(t){i("zDSF")},"data-v-89e5097a",null).exports,PricesPdfModal:i("nN2X").a},name:"PricesPlus",data:function(){return{price_content:[],select:[],select_content:[],member:null,numed_prices:"",timed_prices:""}},created:function(){},mounted:function(){var t=this;if(null==this.member){var e=JSON.parse(m.a.storage._get("prices_active_member"));null!=e&&""!=e&&void 0!=e?this.member=e:m.a.showModal("memberChoiseModal")}f.a.freight.getList_Freight().then(function(e){t.price_content=[];var i=!0,s=!1,n=void 0;try{for(var a,c=r()(e);!(i=(a=c.next()).done);i=!0){var o=a.value;t.price_content.push({id:o.id,num:o.num,named:o.named,unit:o.unit,price:o.price})}}catch(t){s=!0,n=t}finally{try{!i&&c.return&&c.return()}finally{if(s)throw n}}})},methods:{_collect:function(){var t=this;this.select_content=this.price_content.filter(function(e){return m.a.inList(e.id,t.select)})},_submit:function(){var t=this;this._collect();var e={num:this.numed_prices,start_time:this.timed_prices+" 00:00:00",draft_status:"False",membery_id:this.member.id,freight_num:this.select_content.length};f.a.prices.add(e).then(function(e){f.a.judge_response(e)&&f.a.prices_content.add({price_collect_id:e.id,content:n()(t.select_content)}).then(function(e){f.a.judge_response(e)&&(m.a.showToast("新增成功！！！"),setTimeout(function(){t.$router.push("/home/prices")},700))}).catch(function(t){m.a.showToast("因网络波动，该报价单仅仅存为草稿！")})}).catch(function(t){m.a.showToast("报价单保存失败，请检查输入字段的正确性！")})},pricesPdfView:function(){this._collect(),m.a.showModal("pricesPdfViewModal")},pricesSubmit:function(){var t="";""==this.timed_prices&&(t="请检查报价时间的输入！"),""==this.numed_prices&&(t="请检查报价单号的输入！"),""!=t?m.a.showToast(t):this._submit()},changeMember:function(){m.a.showModal("memberChoiseModal")},removeItem:function(t){var e=m.a.indexList(t,this.select);this.select.length<2?m.a.showToast("至少选择一项菜品。"):this.select.splice(e,1)},addItem:function(t){m.a.indexList(t,this.select)<0&&this.select.push(t)},reciverChoised:function(t){this.member=t,m.a.storage._set("prices_active_member",n()(t))},reciverTimed:function(t){this.timed_prices=t},reciverNumed:function(t){this.numed_prices=t}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("def-layout",[i("h3",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("新增报价单")]),t._v(" "),i("div",{attrs:{slot:"layout_inner_head"},slot:"layout_inner_head"},[i("h5",{staticClass:"fw-none mt-2"},[t._v("\n      选择菜品\n    ")]),t._v(" "),i("table",{staticClass:"table m-0"},[i("tr",{staticClass:"text-left"},[i("td",{attrs:{width:"10%"}},[t._v("序号")]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("货号")]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v("描述")]),t._v(" "),i("td",{attrs:{width:"25%"}},[t._v("单价")]),t._v(" "),i("td",{attrs:{width:"10%"}}),t._v(" "),i("td",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("选择操作")])])])]),t._v(" "),t.price_content.length>0?i("prices-plus-body",{attrs:{slot:"layout_inner_body",selected:t.select,prices_contented:t.price_content},on:{removeItemChild:t.removeItem,addItemChild:t.addItem},slot:"layout_inner_body"}):t._e(),t._v(" "),i("div",{attrs:{slot:"layout_footer"},slot:"layout_footer"},[i("prices-plus-footer",{attrs:{membery:t.member},on:{reciverTimed_Father:t.reciverTimed,reciverNumed_Father:t.reciverNumed,changeMember_Father:t.changeMember,pricesSubmit_Father:t.pricesSubmit,pricesPdfView_Father:t.pricesPdfView}})],1),t._v(" "),i("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[i("member-choise-modal",{on:{returnChoised:t.reciverChoised}}),t._v(" "),i("prices-pdf-modal",{attrs:{the_member:t.member,the_prices_timed:t.timed_prices,the_prices_numed:t.numed_prices,the_prices_content:t.select_content,the_prices_id:null}})],1)],1)},staticRenderFns:[]};var k=i("VU/8")(E,L,!1,function(t){i("npcw")},"data-v-3c7dc58e",null);e.default=k.exports},KrXQ:function(t,e){},O3Id:function(t,e){},YHPp:function(t,e){},agEQ:function(t,e){},nN2X:function(t,e,i){"use strict";i("0jG4"),i("NAQQ");var s=i("JSMz"),n=i("Bmzg"),a={name:"PdfPriceMember",props:{member:{type:Object}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"fs-12 w-100 pdf-table"},[i("tbody",[t._m(0),t._v(" "),i("tr",[i("td",{attrs:{width:"72"}},[t._v("客户：")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.member.named))])]),t._v(" "),i("tr",[i("td",[t._v("地址：")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.member.addr))])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"3"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"3"}},[this._v(" ")])])}]};var c=i("VU/8")(a,r,!1,function(t){i("YHPp")},"data-v-65a8a25b",null).exports,o={name:"PdfPriceMsg",props:{pricesTime:{type:String},pricesNum:{type:String},member:{type:Object}},data:function(){return{}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"pdf-table w-100 fs-12"},[i("tbody",[i("tr",[i("td",{attrs:{width:"48%"}},[t._v("报价单号：")]),t._v(" "),i("td",[t._v(t._s(t.pricesNum))])]),t._v(" "),i("tr",[i("td",[t._v("客户编号：")]),t._v(" "),i("td",[t._v(t._s(t.member.num))])]),t._v(" "),i("tr",[i("td",[t._v("报价时间：")]),t._v(" "),i("td",[t._v(t._s(t.pricesTime))])])])])},staticRenderFns:[]};var d=i("VU/8")(o,l,!1,function(t){i("CDdF")},"data-v-df772fdc",null).exports,m=i("5nBN"),_=i.n(m),u={name:"PdfPricesFreight",props:{freights:{type:Array}},methods:{unit:function(t){return _.a.ser_unit(t)}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"pdf-table fs-12 w-100 pdf-table-freight mt-2 text-center"},[t._m(0),t._v(" "),i("tbody",{staticClass:"ptf-tbody"},t._l(t.freights,function(e,s){return i("tr",{key:e.id},[i("td",[t._v(t._s(s+1))]),t._v(" "),i("td",[t._v(t._s(e.num))]),t._v(" "),i("td",{staticClass:"text-left pl-4"},[t._v(t._s(e.named))]),t._v(" "),i("td",[i("table",{staticClass:"prices-freight-price-inner-table text-left"},[i("tr",[i("td",{staticClass:"text-right",attrs:{width:"40%"}},[t._v("$")]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v(t._s(e.price))]),t._v(" "),i("td",{attrs:{width:"40%"}},[t._v("/"+t._s(t.unit(e.unit)))])])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{},[e("th",{attrs:{width:"79px"}},[this._v("项号")]),this._v(" "),e("th",[this._v("货号")]),this._v(" "),e("th",{staticClass:"text-left pl-4"},[this._v("描述")]),this._v(" "),e("th",[this._v("单价")])])])}]};var v=i("VU/8")(u,h,!1,function(t){i("KrXQ")},"data-v-14f9b774",null).exports,p={components:{PdfFooter:s.a,PdfHeader:n.a,PdfPriceMember:c,PdfPriceMsg:d,PdfPricesFreight:v},name:"PricesPdf",props:{the_prices_content:{type:Array},the_member:{type:Object},the_prices_timed:{type:String},the_prices_numed:{type:String},the_prices_id:{type:Number}},mounted:function(){console.log(this.the_prices_content),this.the_prices_content.length<1?null!=this.the_prices_id?console.log("从网络上获取内容"):console.log("无法加载"+this.the_prices_id):(console.log("可正常展示："),console.log(this.the_prices_content),this.content=this.the_prices_content)},data:function(){return{content:[]}},methods:{invoicePrint:function(){}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"pricesPdfViewModal"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-body"},[t.the_prices_content.length>0?i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12 text-center fs-12 mt-2"},[i("pdf-header",[t._v("\n              报价单\n            ")])],1),t._v(" "),i("div",{staticClass:"col-sm-12"},[i("table",{staticClass:"pdf-table-outter"},[i("tr",[i("td",{attrs:{width:"70%"}},[i("pdf-price-member",{attrs:{member:t.the_member}})],1),t._v(" "),i("td",[i("pdf-price-msg",{attrs:{member:t.the_member,pricesTime:t.the_prices_timed,pricesNum:t.the_prices_numed}})],1)])])]),t._v(" "),i("div",{staticClass:"col-sm-12"},[null==t.the_prices_id?i("pdf-prices-freight",{attrs:{freights:t.the_prices_content}}):i("pdf-prices-freight",{attrs:{freights:t.content}})],1)]):t._e(),t._v(" "),null!=t.the_member?i("pdf-footer",{attrs:{member:t.the_member}}):t._e()],1),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"data-dismiss":"modal"}},[this._v("关闭")])])}]};var b=i("VU/8")(p,f,!1,function(t){i("/ooZ")},"data-v-4b326cce",null);e.a=b.exports},npcw:function(t,e){},t8FE:function(t,e){},tzQp:function(t,e){},zDSF:function(t,e){}});
//# sourceMappingURL=2.577a403d002875100240.js.map