webpackJsonp([11],{C2Dn:function(t,e){},GjCy:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("/xUl");var i=s("NAQQ"),n=s("5nBN"),a=s.n(n),r=(s("wYMm"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fuild pdf-file-style p-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 text-center"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"col-sm-12"},[e("table",{staticClass:"pdf-table-outter"},[e("tr",[e("td",{staticClass:"br-pdf"},[this._t("msg")],2)])])]),this._v(" "),e("div",{staticClass:"col-sm-12"},[this._t("freights")],2),this._v(" "),e("div",{staticClass:"col-sm-12 mt-4"},[this._t("footer")],2)])])},staticRenderFns:[]});var l=s("VU/8")({name:"PrintPdfSimpleLayout"},r,!1,function(t){s("C2Dn")},"data-v-4e838650",null).exports,o={name:"PdfCombineBuy",props:{_combineList:{type:Array},fs_type:{type:String,default:"em"}},methods:{unit:function(t){return a.a.ser_unit(t)}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"pdf-table fs-12 w-100 pdf-table-freight mt-2 text-center",class:"fs-"+t.fs_type+"-18"},[t._m(0),t._v(" "),s("tbody",t._l(t._combineList,function(e,i){return s("tr",{key:e.id},[s("td",[t._v(t._s(i+1))]),t._v(" "),s("td",[t._v(t._s(e.num))]),t._v(" "),s("td",[t._v(t._s(e.named))]),t._v(" "),s("td",[t._v(t._s(e.count))]),t._v(" "),s("td",[t._v(t._s(t.unit(e.unit)))])])}),0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{},[s("th",{attrs:{width:"10%"}},[t._v("項號")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("貨號")]),t._v(" "),s("th",{attrs:{width:"40%"}},[t._v("描述")]),t._v(" "),s("th",{attrs:{width:"20%"}},[t._v("數量")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("單位")])])])}]};var d=s("VU/8")(o,c,!1,function(t){s("arNV")},"data-v-540cf9a8",null).exports,_={name:"PdfCombineMsg",props:{_listingNumList:{type:Array,default:null},fs_type:{type:String,default:"vw"}},data:function(){return{createTimed:""}},computed:{numString:function(){return null==this._listingNumList?"":this._listingNumList.join("、")}},created:function(){this.createTimed=i.a.timed.getNowDate("yyyy")+"年"+i.a.timed.getNowDate("mm")+"月"+i.a.timed.getNowDate("dd")+"日"}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"pdf-table w-100 fs-12",class:"fs-"+t.fs_type+"-18"},[s("tbody",[s("tr",[s("td",{staticClass:"pt-3 pl-4"},[t._v("\n        含發票單編號：  "+t._s(t.numString)+"\n      ")])]),t._v(" "),s("tr",[s("td",{staticClass:"pb-3 pt-3 pl-4"},[t._v("\n        創建時間：  "+t._s(t.createTimed)+"\n      ")])])])])},staticRenderFns:[]};var m={components:{PrintPdfSimpleLayout:l,PdfCombineBuy:d,PdfCombineMsg:s("VU/8")(_,u,!1,function(t){s("baO6")},"data-v-879bb058",null).exports,PdfHeader:s("Bmzg").a},name:"PrintCombineListingPdf",data:function(){return{combineList:[],combineNums:[],allowPrint:!1}},created:function(){var t=i.a.storage._get("combine_listing_content_list");null!=t&&""!=t&&void 0!=t&&(this.combineList=JSON.parse(t),this.combineList.length>0&&(this.allowPrint=!0)),null!=(t=i.a.storage._get("combine_listing_num_list"))&&""!=t&&void 0!=t&&(this.combineNums=JSON.parse(t))},mounted:function(){this.allowPrint&&print()},methods:{}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("print-pdf-simple-layout",[s("pdf-header",{attrs:{slot:"header"},slot:"header"},[t._v("訂貨單")]),t._v(" "),t.combineNums.length>0?s("pdf-combine-msg",{attrs:{slot:"msg",_listingNumList:t.combineNums},slot:"msg"}):t._e(),t._v(" "),t.combineList.length>0?s("pdf-combine-buy",{attrs:{slot:"freights",_combineList:t.combineList,fs_type:"vw"},slot:"freights"}):t._e()],1)},staticRenderFns:[]};var v=s("VU/8")(m,f,!1,function(t){s("jsSx")},"data-v-f48496be",null);e.default=v.exports},arNV:function(t,e){},baO6:function(t,e){},jsSx:function(t,e){}});
//# sourceMappingURL=11.316dc5f2670777682610.js.map