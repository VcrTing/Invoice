webpackJsonp([4],{"5eh1":function(t,e){},B4CL:function(t,e,i){"use strict";i("NAQQ"),i("5nBN");var a=i("3MUH"),n={name:"PageOption",props:{_page:{type:Object}},methods:{totalPage:function(){return a.a.getTotalPage(this._page.limit,this._page.count)},nowPage:function(){return a.a.getNowPage(this._page.offsetNow,this._page.limit)},pageOption:function(t){var e="";e=t?this._page.next:this._page.previous,this.$emit("loadData_Father",e)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{staticClass:"btn btn-sm btn-pager",on:{click:function(e){return t.pageOption(!1)}}},[t._v("上一页")]),t._v(" "),i("div",{staticClass:"page-num-wrapper d-inline text-input"},[t._v("\n    "+t._s(t.nowPage())+"/"+t._s(t.totalPage())+"\n  ")]),t._v(" "),i("button",{staticClass:"btn btn-sm btn-pager",on:{click:function(e){return t.pageOption(!0)}}},[t._v("下一页")])])},staticRenderFns:[]};var r=i("VU/8")(n,s,!1,function(t){i("VCwt")},"data-v-5a460a61",null);e.a=r.exports},I0mC:function(t,e){},PvKo:function(t,e){},QYUn:function(t,e){},Rpsr:function(t,e){},UEnp:function(t,e){},VCwt:function(t,e){},YQkM:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("NAQQ"),n=i("/xUl"),s=i("3MUH"),r=i("gS0T"),o=i("UQ+I"),l=i("0ti1"),c=i("gIGi"),u={components:{SortOption:o.a,SearchOption:l.a,ClearFilterOption:c.a},name:"FreightViewTop",props:{freights:{type:Array}},methods:{openSearch:function(){a.a.showModal("freightSearchModal")},clearFilter:function(){this.$emit("clearFilter_Father")}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row of-visible"},[t._m(0),t._v(" "),i("div",{staticClass:"col-sm-6 pt-1 text-right of-visible"},[i("sort-option",{attrs:{_list:t.freights}}),t._v(" "),i("search-option",{on:{openSearch_Father:t.openSearch}}),t._v(" "),i("clear-filter-option",{on:{clearCondition_Father:t.clearFilter}})],1)]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 pt-2"},[e("h5",{staticClass:"fw-none"},[this._v("\n        全部\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table"},[i("tr",[i("td",{staticClass:"text-accent",attrs:{width:"5%"}},[t._v("#")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("编号")]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v("菜品描述")]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("价格")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("单位")]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v("标签")]),t._v(" "),i("td",{attrs:{width:"10%"}})])])}]};var h=i("VU/8")(u,d,!1,function(t){i("xOCz")},"data-v-ed8977a4",null).exports,p=(i("7t+N"),i("0jG4"),i("5nBN")),m=i.n(p),f=i("z8RL"),v=i("SiM+"),_={name:"FreightViewBody",components:{Pencil:f.a,Remove:v.a},props:{freights:{type:Array}},methods:{unit:function(t){return m.a.ser_unit(t)},option:function(t,e){this.$emit("option_Father",t,e)}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table m-0 table-top-line-none"},t._l(t.freights,function(e,a){return i("tr",{key:e.id,attrs:{id:"freight_tr_"+e.id}},[i("td",{staticClass:"text-accent",attrs:{width:"5%"}},[t._v(t._s(a+1))]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v(t._s(e.num))]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v(t._s(e.named))]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("$ "+t._s(e.price))]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("  "+t._s(t.unit(e.unit)))]),t._v(" "),i("td",{attrs:{width:"30%"}},t._l(e.tag,function(e){return i("div",{key:e.id,staticClass:"tag tag-table tag-table-fix",style:{background:e.color}},[t._v("\n        "+t._s(e.named)+"\n      ")])}),0),t._v(" "),i("td",{attrs:{width:"10%"}},[i("i",{staticClass:"float-right",on:{click:function(i){return t.option(e.id,"trash")}}},[i("remove")],1),t._v(" "),i("i",{staticClass:"float-right",on:{click:function(i){return t.option(e.id,"update")}}},[i("pencil")],1)])])}),0)},staticRenderFns:[]};var F=i("VU/8")(_,g,!1,function(t){i("PvKo")},"data-v-5dc16bc2",null).exports,C=i("WNq0"),b={components:{PagerOption:i("B4CL").a},name:"FreightViewFooter",props:{_pageLink:{type:Object}},methods:{_loadData:function(t){this.$emit("_loadData_Father",t)}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"}),this._v(" "),e("div",{staticClass:"col-sm-6 text-right"},[e("pager-option",{attrs:{_page:this._pageLink},on:{loadData_Father:this._loadData}})],1)])},staticRenderFns:[]};var w=i("VU/8")(b,y,!1,function(t){i("s/GW")},"data-v-cee68856",null).exports,x=i("cpG1"),P=i("HT3s"),L=i("U5hB"),U={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fixed-plus-btn hand tool-tip",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"新增"},on:{click:this.plusDone}})},staticRenderFns:[]};var R=i("VU/8")({name:"PlusFixed",methods:{plusDone:function(){this.$emit("plusDone_Father")}}},U,!1,function(t){i("UEnp")},null,null).exports,k=i("BO1k"),$=i.n(k),D=i("I76R"),E=i.n(D),T={name:"FreightPlusForm",props:{isPlus:{type:Boolean}},data:function(){return{select:[],tags:[],num:"",tip_num:"",named:"",tip_named:"",price:"",tip_price:"",unit:0,tip_tag:"",activeId:0}},computed:{units:function(){return m.a.unitList.map(function(t){return{flag:t[0],named:t[1]}})}},mounted:function(){this.loadTag()},methods:{locationData:function(t){if(null!=t&&void 0!=t){if(this.named=t.named,this.price=t.price,this.unit=t.unit,this.num=t.num,this.select=[],null!=t.tag&&void 0!=t.tag){var e=[],i=!0,n=!1,s=void 0;try{for(var r,o=$()(t.tag);!(i=(r=o.next()).done);i=!0){var l=r.value;e.push(l.id)}}catch(t){n=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw s}}var c=!0,u=!1,d=void 0;try{for(var h,p=$()(this.tags);!(c=(h=p.next()).done);c=!0){var m=h.value;a.a.inList(m.id,e)&&this.select.push(m.id)}}catch(t){u=!0,d=t}finally{try{!c&&p.return&&p.return()}finally{if(u)throw d}}}this.activeId=t.id}},loadTag:function(){var t=this;n.a.tag.getList_Tag({},!0).then(function(e){n.a.judge_response(e)&&(t.tags=e,t.select.push(e[0].id))})},inList:function(t,e){return a.a.inList(t,e)},tagChoise:function(t){var e=a.a.indexList(t,this.select);e>=0?this.select.length<=1?(a.a.showToast("提示：请至少选择一个标签。"),console.log("标签")):this.select.splice(e,1):this.select.push(t)},tipClose:function(t){var e=this;setTimeout(function(){"num"==t?e.tip_num="":"named"==t?e.tip_named="":"price"==t&&(e.tip_price="")},4200)},tipForm:function(t,e){var i="";1!=t&&(i=t),"num"==e?this.tip_num=i:"named"==e?this.tip_named=i:"price"==e&&(this.tip_price=i),this.tipClose(e)},validateForm:function(){var t=E.a.val_empty(this.num,"货号");return 1==t?(t=E.a.val_char(this.num,"货号"),this.tipForm(t,"num")):this.tipForm(t,"num"),1==(t=E.a.val_empty(this.named,"描述"))?(t=E.a.val_char(this.named,"描述"),this.tipForm(t,"named")):this.tipForm(t,"named"),1==(t=E.a.val_empty(this.price,"零售价"))?(t=E.a.val_char_price(this.price,"零售价"),this.tipForm(t,"price")):this.tipForm(t,"price"),t},_submit:function(t){this.isPlus?this.$emit("plus_Father",t):this.$emit("update_Father",t,this.activeId)},submitForm:function(){if(1==this.validateForm()){var t={num:this.num,named:this.named,price:this.price,unit:this.unit,tags:this.select.join(",")};this._submit(t)}}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-form-wrapper"},[i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"num"}},[t._v("货号")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"form-control",attrs:{type:"text",id:"num",placeholder:"货号"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_num))])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"named"}},[t._v("描述")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.named,expression:"named"}],staticClass:"form-control",attrs:{type:"text",id:"named",placeholder:"描述"},domProps:{value:t.named},on:{input:function(e){e.target.composing||(t.named=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_named))])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-4"},[i("label",{attrs:{for:"price"}},[t._v("零售价")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"text",id:"price",placeholder:"价格"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_price))])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("label",{attrs:{for:"unit"}},[t._v("单位")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.unit,expression:"unit"}],staticClass:"form-control",attrs:{id:"unit"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.unit=e.target.multiple?i:i[0]}}},t._l(t.units,function(e){return i("option",{key:e.flag,domProps:{value:e.flag}},[t._v(t._s(e.named))])}),0)]),t._v(" "),i("div",{staticClass:"col-sm-4"})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"named"}},[t._v("标签")]),t._v(" "),t.tags.length>0?i("div",{staticClass:"tag-wrapper"},t._l(t.tags,function(e){return i("div",{key:e.named,staticClass:"tag tag-def d-inline hand",class:{"tag-active":t.inList(e.id,t.select)},on:{click:function(i){return t.tagChoise(e.id)}}},[t._v("\n          "+t._s(e.named)+"\n        ")])}),0):t._e(),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_tag))])])])])},staticRenderFns:[]};var M=i("VU/8")(T,V,!1,function(t){i("keuR")},"data-v-32a9a37d",null).exports,O={components:{FreightPlusForm:M},name:"FreightPlus",props:{freight:{type:Object}},methods:{submitFreightPlus:function(){this.$refs.plusForm.submitForm()},_signelRefreash:function(){this.$emit("signelRefreash_Father")},_plus:function(t){var e=this;n.a.freight.add(t).then(function(t){n.a.judge_response(t)&&(console.log(t),a.a.showToast("新增成功！！！"),setTimeout(function(){a.a.closeAllModal(),e._signelRefreash()},700))})}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"freightPlusModal"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("freight-plus-form",{ref:"plusForm",attrs:{isPlus:!0,_freight:this.freight},on:{plus_Father:this._plus}})],1),this._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-main",on:{click:this.submitFreightPlus}},[this._v("保存")])])])])])},staticRenderFns:[]};var N=i("VU/8")(O,I,!1,function(t){i("Rpsr")},"data-v-57eb972e",null).exports,j={name:"FreightUpdated",components:{FreightPlusForm:M},props:{freight:{type:Object}},methods:{submitFreightPlus:function(){this.$refs.updateFormREF.submitForm()},update:function(t,e){var i=this;n.a.freight.update(t,e).then(function(t){n.a.judge_response(t)&&(console.log(t),a.a.showToast("修改成功！！！"),setTimeout(function(){a.a.closeAllModal(),i.$emit("signelRefreash_Father")},700))})},locationUpdateData:function(t){this.$refs.updateFormREF.locationData(t)}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"freightUpdateModal"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("freight-plus-form",{ref:"updateFormREF",attrs:{isPlus:!1},on:{update_Father:this.update}})],1),this._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-main",on:{click:this.submitFreightPlus}},[this._v("保存")])])])])])},staticRenderFns:[]};var B=i("VU/8")(j,Q,!1,function(t){i("I0mC")},"data-v-ad767e76",null).exports,S={components:{FullHeightLayout:r.a,FreightViewTop:h,FreightViewBody:F,FreightViewSearch:C.a,FreightViewFooter:w,Trash:P.a,Empty:x.a,Loading:L.a,PlusFixed:R,FreightPlus:N,FreightUpdated:B},name:"FreightView",data:function(){return{freightList:[],pageLink:{next:"",previous:"",count:0,offsetNow:0,limit:100},isLoading:!0,activeId:0,activeFreight:null,activeURL:""}},mounted:function(){this.loadData()},methods:{loadData:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};null==t&&(t=s.a.buildFirstPagerUrl(n.a.freight.url,i,{offset:0,limit:this.pageLink.limit})),n.a.freight.getListPage(t).then(function(i){e.activeURL=t,e.freightList=i.results,e.pageLink=s.a.buildPageLink(t,i.count,100,i.next,i.previous),e.isLoading=!1})},plusDone:function(){a.a.showModal("freightPlusModal")},locationUpdateData:function(){this.loadData(this.activeURL)},clearFilter:function(){this.loadData()},option:function(t,e){var i=this;this.activeId=t,"trash"==e?a.a.showModal("trashModal"):"update"==e&&n.a.freight.getOne(t).then(function(t){n.a.judge_response(t)&&(i.activeFreight=t,i.$refs.freightUpdateREF.locationUpdateData(t),a.a.showModal("freightUpdateModal"))})},_trash:function(){var t=this,e=this;a.a.closeModal("trashModal"),null!=this.activeId&&this.activeId>0&&n.a.freight.trash(this.activeId).then(function(i){n.a.judge_response(i)&&(a.a.showToast("删除成功！！"),a.a.hideEle("freight_tr_"+t.activeId),e.isLoading=!1)})}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("full-height-layout",[i("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("菜品")]),t._v(" "),i("freight-view-top",{attrs:{slot:"layout_inner_head",freights:t.freightList},on:{clearFilter_Father:t.clearFilter},slot:"layout_inner_head"}),t._v(" "),t.freightList.length>0?i("freight-view-body",{attrs:{slot:"layout_inner_body",freights:t.freightList},on:{option_Father:t.option},slot:"layout_inner_body"}):t.isLoading?i("loading",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}):i("empty",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}),t._v(" "),i("freight-view-footer",{attrs:{slot:"layout_footer",_pageLink:t.pageLink},on:{_loadData_Father:t.loadData},slot:"layout_footer"}),t._v(" "),i("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[i("freight-view-search",{on:{loadData_Father:t.loadData}}),t._v(" "),i("trash",{on:{trashItem:t._trash}}),t._v(" "),i("plus-fixed",{on:{plusDone_Father:t.plusDone}}),t._v(" "),i("freight-plus",{on:{signelRefreash_Father:t.loadData}}),t._v(" "),i("freight-updated",{ref:"freightUpdateREF",attrs:{freight:t.activeFreight},on:{signelRefreash_Father:t.locationUpdateData}})],1)],1)},staticRenderFns:[]};var G=i("VU/8")(S,A,!1,function(t){i("5eh1")},"data-v-3ff59ec3",null);e.default=G.exports},gIGi:function(t,e,i){"use strict";i("NAQQ");var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light btn-sm pb-0 float-right mr-2 tool-tip",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"清空所有过滤条件"},on:{click:this.clearCondition}},[e("i",{staticClass:"fa fa-refresh"})])},staticRenderFns:[]};var n=i("VU/8")({name:"ClearFilterOption",methods:{clearCondition:function(){this.$emit("clearCondition_Father")}}},a,!1,function(t){i("QYUn")},"data-v-3c5e0a86",null);e.a=n.exports},keuR:function(t,e){},"s/GW":function(t,e){},xOCz:function(t,e){}});
//# sourceMappingURL=4.2f54a097993a8a4ad855.js.map