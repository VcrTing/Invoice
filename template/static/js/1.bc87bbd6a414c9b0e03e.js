webpackJsonp([1],{"3W3o":function(t,e){},"6zUz":function(t,e){},CDdF:function(t,e){},GwLC:function(t,e){},KrXQ:function(t,e){},Lph9:function(t,e){},Q9qk:function(t,e){},"SiM+":function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"trash hand"})},staticRenderFns:[]};var n=s("VU/8")({name:"Remove"},i,!1,function(t){s("6zUz")},null,null);e.a=n.exports},U5hB:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading"})},staticRenderFns:[]};var n=s("VU/8")({name:"Loading"},i,!1,function(t){s("wu8+")},"data-v-604f7c8a",null);e.a=n.exports},YHPp:function(t,e){},eaZ2:function(t,e){},fiGY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("5nBN");var i=s("wYMm"),n=s("NAQQ"),r=s("gS0T"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table m-0"},[s("tr",{staticClass:"text-left"},[s("td",{staticClass:"text-accent",attrs:{width:"6%"}},[t._v("#")]),t._v(" "),s("td",{attrs:{width:"13%"}},[t._v("报价单号")]),t._v(" "),s("td",{attrs:{width:"25%"}},[t._v("所属客户")]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"13%"}},[t._v("报价日期")]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"13%"}},[t._v("菜品数量")]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"13%"}},[t._v("Pdf 文件")]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"12%"}})])])}]};var c=s("VU/8")({name:"PricesViewTop"},a,!1,function(t){s("GwLC")},"data-v-7dc422ad",null).exports,d=s("/xUl"),o=s("z8RL"),l=s("SiM+"),_={name:"PricesViewBody",components:{Pencil:o.a,Remove:l.a},props:{prices:{type:Array}},methods:{ser_timed:function(t){return n.a.timed.ser_timed(t,!0,!0)},option:function(t,e){this.$emit("option_Father",t,e)},pdfView:function(t){this.$emit("pdfView_Father",t)}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table m-0 table-top-line-none"},t._l(t.prices,function(e,i){return s("tr",{key:e.id,staticClass:"text-left"},[s("td",{staticClass:"text-accent",attrs:{width:"6%"}},[t._v(t._s(i+1))]),t._v(" "),s("td",{attrs:{width:"13%"}},[t._v(t._s(e.num))]),t._v(" "),s("td",{attrs:{width:"25%"}},[t._v(t._s(e.membery.num)+" "+t._s(e.membery.named))]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"13%"}},[t._v(t._s(t.ser_timed(e.start_time)))]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"13%"}},[t._v(t._s(e.freight_num))]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"13%"},on:{click:function(s){return t.pdfView(e.id)}}},[t._v("查看")]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"12%"}},[s("i",{staticClass:"float-right",on:{click:function(s){return t.option(e.id,"trash")}}},[s("remove")],1),t._v(" "),s("i",{staticClass:"float-right",on:{click:function(s){return t.option(e.id,"update")}}},[s("pencil")],1)])])}),0)},staticRenderFns:[]};var h=s("VU/8")(_,u,!1,function(t){s("3W3o")},"data-v-77b469d9",null).exports,v=s("HT3s"),m=s("U5hB"),f=s("nN2X"),p={components:{FullHeightLayout:r.a,PricesViewTop:c,PricesViewBody:h,Loading:m.a,Trash:v.a,PricesPdfModal:f.a},name:"PricesView",data:function(){return{pricesList:[],activeId:null,activePrices:null,isLoading:!0}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;setTimeout(function(){d.a.prices.getList_Prices({},!0).then(function(e){t.pricesList=e,t.isLoading=!1})},i.a.delayTime)},ser_timed:function(t){return n.a.timed.ser_timed(t,!0,!0)},option:function(t,e){this.activeId=t,"update"==e||"trash"==e&&n.a.showModal("trashModal")},pdfView:function(t){this.activeId=t,this.activePrices=this.pricesList.filter(function(e){return e.id==t})[0]},_trash:function(){var t=this;n.a.closeModal("trashModal"),null!=this.activeId&&this.activeId>0&&d.a.prices.trash(this.activeId).then(function(e){try{e.id;t.isLoading=!0,t.loadData()}catch(t){}})}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("full-height-layout",[s("h3",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("报价单")]),t._v(" "),s("div",{attrs:{slot:"layout_inner_head"},slot:"layout_inner_head"},[s("h5",{staticClass:"fw-none mt-2"},[t._v("\n      全部\n    ")]),t._v(" "),s("prices-view-top")],1),t._v(" "),t.isLoading?s("transition",{attrs:{slot:"layout_inner_body",name:"fade"},slot:"layout_inner_body"},[s("loading")],1):s("prices-view-body",{attrs:{slot:"layout_inner_body",prices:t.pricesList},on:{pdfView_Father:t.pdfView,option_Father:t.option},slot:"layout_inner_body"}),t._v(" "),s("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[s("trash",{on:{trashItem:t._trash}}),t._v(" "),null!=t.activePrices?s("prices-pdf-modal",{attrs:{the_member:t.activePrices.membery,the_prices_timed:t.ser_timed(t.activePrices.start_time),the_prices_numed:t.activePrices.num,the_prices_content:[],the_prices_id:t.activeId}}):t._e()],1)],1)},staticRenderFns:[]};var w=s("VU/8")(p,b,!1,function(t){s("eaZ2")},"data-v-71e88e3d",null);e.default=w.exports},nN2X:function(t,e,s){"use strict";s("0jG4"),s("NAQQ");var i=s("JSMz"),n=s("Bmzg"),r={name:"PdfPriceMember",props:{member:{type:Object}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"fs-12 w-100 pdf-table"},[s("tbody",[t._m(0),t._v(" "),s("tr",[s("td",{attrs:{width:"72"}},[t._v("客户：")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.member.named))])]),t._v(" "),s("tr",[s("td",[t._v("地址：")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.member.addr))])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"3"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"3"}},[this._v(" ")])])}]};var c=s("VU/8")(r,a,!1,function(t){s("YHPp")},"data-v-65a8a25b",null).exports,d={name:"PdfPriceMsg",props:{pricesTime:{type:String},pricesNum:{type:String},member:{type:Object}},data:function(){return{}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"pdf-table w-100 fs-12"},[s("tbody",[s("tr",[s("td",{attrs:{width:"48%"}},[t._v("报价单号：")]),t._v(" "),s("td",[t._v(t._s(t.pricesNum))])]),t._v(" "),s("tr",[s("td",[t._v("客户编号：")]),t._v(" "),s("td",[t._v(t._s(t.member.num))])]),t._v(" "),s("tr",[s("td",[t._v("报价时间：")]),t._v(" "),s("td",[t._v(t._s(t.pricesTime))])])])])},staticRenderFns:[]};var l=s("VU/8")(d,o,!1,function(t){s("CDdF")},"data-v-df772fdc",null).exports,_=s("5nBN"),u=s.n(_),h={name:"PdfPricesFreight",props:{freights:{type:Array}},methods:{unit:function(t){return u.a.ser_unit(t)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"pdf-table fs-12 w-100 pdf-table-freight mt-2 text-center"},[t._m(0),t._v(" "),s("tbody",{staticClass:"ptf-tbody"},t._l(t.freights,function(e,i){return s("tr",{key:e.id},[s("td",[t._v(t._s(i+1))]),t._v(" "),s("td",[t._v(t._s(e.num))]),t._v(" "),s("td",{staticClass:"text-left pl-4"},[t._v(t._s(e.named))]),t._v(" "),s("td",[s("table",{staticClass:"prices-freight-price-inner-table text-left"},[s("tr",[s("td",{staticClass:"text-right",attrs:{width:"40%"}},[t._v("$")]),t._v(" "),s("td",{attrs:{width:"20%"}},[t._v(t._s(e.price))]),t._v(" "),s("td",{attrs:{width:"40%"}},[t._v("/"+t._s(t.unit(e.unit)))])])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{},[e("th",{attrs:{width:"79px"}},[this._v("项号")]),this._v(" "),e("th",[this._v("货号")]),this._v(" "),e("th",{staticClass:"text-left pl-4"},[this._v("描述")]),this._v(" "),e("th",[this._v("单价")])])])}]};var m=s("VU/8")(h,v,!1,function(t){s("KrXQ")},"data-v-14f9b774",null).exports,f={components:{PdfFooter:i.a,PdfHeader:n.a,PdfPriceMember:c,PdfPriceMsg:l,PdfPricesFreight:m},name:"PricesPdf",props:{the_prices_content:{type:Array},the_member:{type:Object},the_prices_timed:{type:String},the_prices_numed:{type:String},the_prices_id:{type:Number}},mounted:function(){console.log(this.the_prices_content),this.the_prices_content.length<1?null!=this.the_prices_id?console.log("从网络上获取内容"):console.log("无法加载"+this.the_prices_id):(console.log("可正常展示："),console.log(this.the_prices_content),this.content=this.the_prices_content)},data:function(){return{content:[]}},methods:{invoicePrint:function(){}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"pricesPdfViewModal"}},[s("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[t.the_prices_content.length>0?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 text-center fs-12 mt-2"},[s("pdf-header",[t._v("\n              报价单\n            ")])],1),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("table",{staticClass:"pdf-table-outter"},[s("tr",[s("td",{attrs:{width:"70%"}},[s("pdf-price-member",{attrs:{member:t.the_member}})],1),t._v(" "),s("td",[s("pdf-price-msg",{attrs:{member:t.the_member,pricesTime:t.the_prices_timed,pricesNum:t.the_prices_numed}})],1)])])]),t._v(" "),s("div",{staticClass:"col-sm-12"},[null==t.the_prices_id?s("pdf-prices-freight",{attrs:{freights:t.the_prices_content}}):t._e()],1)]):t._e(),t._v(" "),null!=t.the_member?s("pdf-footer",{attrs:{member:t.the_member}}):t._e()],1),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"data-dismiss":"modal"}},[this._v("关闭")])])}]};var b=s("VU/8")(f,p,!1,function(t){s("Q9qk")},"data-v-3d96b16d",null);e.a=b.exports},"wu8+":function(t,e){},z8RL:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pencil hand mr-2"})},staticRenderFns:[]};var n=s("VU/8")({name:"Pencil"},i,!1,function(t){s("Lph9")},null,null);e.a=n.exports}});
//# sourceMappingURL=1.bc87bbd6a414c9b0e03e.js.map