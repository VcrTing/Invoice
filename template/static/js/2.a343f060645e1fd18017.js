webpackJsonp([2],{"//Fk":function(t,e,i){t.exports={default:i("U5ju"),__esModule:!0}},"1PFp":function(t,e){},"2KxR":function(t,e){t.exports=function(t,e,i,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(i+": incorrect invocation!");return t}},"5wYu":function(t,e){},"82Mu":function(t,e,i){var n=i("7KvD"),a=i("L42u").set,r=n.MutationObserver||n.WebKitMutationObserver,o=n.process,s=n.Promise,c="process"==i("R9M2")(o);t.exports=function(){var t,e,i,l=function(){var n,a;for(c&&(n=o.domain)&&n.exit();t;){a=t.fn,t=t.next;try{a()}catch(n){throw t?i():e=void 0,n}}e=void 0,n&&n.enter()};if(c)i=function(){o.nextTick(l)};else if(!r||n.navigator&&n.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);i=function(){u.then(l)}}else i=function(){a.call(n,l)};else{var d=!0,h=document.createTextNode("");new r(l).observe(h,{characterData:!0}),i=function(){h.data=d=!d}}return function(n){var a={fn:n,next:void 0};e&&(e.next=a),t||(t=a,i()),e=a}}},B4CL:function(t,e,i){"use strict";i("NAQQ"),i("5nBN");var n=i("3MUH"),a={name:"PageOption",props:{_page:{type:Object}},methods:{totalPage:function(){return n.a.getTotalPage(this._page.limit,this._page.count)},nowPage:function(){return n.a.getNowPage(this._page.offsetNow,this._page.limit)},pageOption:function(t){var e="";e=t?this._page.next:this._page.previous,this.$emit("loadData_Father",e)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{staticClass:"btn btn-sm btn-pager",on:{click:function(e){return t.pageOption(!1)}}},[t._v("上一頁")]),t._v(" "),i("div",{staticClass:"page-num-wrapper d-inline text-input"},[t._v("\n    "+t._s(t.nowPage())+"/"+t._s(t.totalPage())+"\n  ")]),t._v(" "),i("button",{staticClass:"btn btn-sm btn-pager",on:{click:function(e){return t.pageOption(!0)}}},[t._v("下一頁")])])},staticRenderFns:[]};var o=i("VU/8")(a,r,!1,function(t){i("gtvN")},"data-v-b7ef526e",null);e.a=o.exports},CXw9:function(t,e,i){"use strict";var n,a,r,o,s=i("O4g8"),c=i("7KvD"),l=i("+ZMJ"),u=i("RY/4"),d=i("kM2E"),h=i("EqjI"),f=i("lOnJ"),v=i("2KxR"),p=i("NWt+"),m=i("t8x9"),_=i("L42u").set,g=i("82Mu")(),F=i("qARP"),y=i("dNDb"),b=i("iUbK"),x=i("fJUb"),w=c.TypeError,C=c.process,P=C&&C.versions,R=P&&P.v8||"",M=c.Promise,U="process"==u(C),E=function(){},L=a=F.f,D=!!function(){try{var t=M.resolve(1),e=(t.constructor={})[i("dSzd")("species")]=function(t){t(E,E)};return(U||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==R.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),k=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},j=function(t,e){if(!t._n){t._n=!0;var i=t._c;g(function(){for(var n=t._v,a=1==t._s,r=0,o=function(e){var i,r,o,s=a?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{s?(a||(2==t._h&&$(t),t._h=1),!0===s?i=n:(u&&u.enter(),i=s(n),u&&(u.exit(),o=!0)),i===e.promise?l(w("Promise-chain cycle")):(r=k(i))?r.call(i,c,l):c(i)):l(n)}catch(t){u&&!o&&u.exit(),l(t)}};i.length>r;)o(i[r++]);t._c=[],t._n=!1,e&&!t._h&&T(t)})}},T=function(t){_.call(c,function(){var e,i,n,a=t._v,r=O(t);if(r&&(e=y(function(){U?C.emit("unhandledRejection",a,t):(i=c.onunhandledrejection)?i({promise:t,reason:a}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",a)}),t._h=U||O(t)?2:1),t._a=void 0,r&&e.e)throw e.v})},O=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){_.call(c,function(){var e;U?C.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},N=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),j(e,!0))},S=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===t)throw w("Promise can't be resolved itself");(e=k(t))?g(function(){var n={_w:i,_d:!1};try{e.call(t,l(S,n,1),l(N,n,1))}catch(t){N.call(n,t)}}):(i._v=t,i._s=1,j(i,!1))}catch(t){N.call({_w:i,_d:!1},t)}}};D||(M=function(t){v(this,M,"Promise","_h"),f(t),n.call(this);try{t(l(S,this,1),l(N,this,1))}catch(t){N.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=i("xH/j")(M.prototype,{then:function(t,e){var i=L(m(this,M));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=U?C.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&j(this,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new n;this.promise=t,this.resolve=l(S,t,1),this.reject=l(N,t,1)},F.f=L=function(t){return t===M||t===o?new r(t):a(t)}),d(d.G+d.W+d.F*!D,{Promise:M}),i("e6n0")(M,"Promise"),i("bRrM")("Promise"),o=i("FeBl").Promise,d(d.S+d.F*!D,"Promise",{reject:function(t){var e=L(this);return(0,e.reject)(t),e.promise}}),d(d.S+d.F*(s||!D),"Promise",{resolve:function(t){return x(s&&this===o?M:this,t)}}),d(d.S+d.F*!(D&&i("dY0y")(function(t){M.all(t).catch(E)})),"Promise",{all:function(t){var e=this,i=L(e),n=i.resolve,a=i.reject,r=y(function(){var i=[],r=0,o=1;p(t,!1,function(t){var s=r++,c=!1;i.push(void 0),o++,e.resolve(t).then(function(t){c||(c=!0,i[s]=t,--o||n(i))},a)}),--o||n(i)});return r.e&&a(r.v),i.promise},race:function(t){var e=this,i=L(e),n=i.reject,a=y(function(){p(t,!1,function(t){e.resolve(t).then(i.resolve,n)})});return a.e&&n(a.v),i.promise}})},EqBC:function(t,e,i){"use strict";var n=i("kM2E"),a=i("FeBl"),r=i("7KvD"),o=i("t8x9"),s=i("fJUb");n(n.P+n.R,"Promise",{finally:function(t){var e=o(this,a.Promise||r.Promise),i="function"==typeof t;return this.then(i?function(i){return s(e,t()).then(function(){return i})}:t,i?function(i){return s(e,t()).then(function(){throw i})}:t)}})},L42u:function(t,e,i){var n,a,r,o=i("+ZMJ"),s=i("knuC"),c=i("RPLV"),l=i("ON07"),u=i("7KvD"),d=u.process,h=u.setImmediate,f=u.clearImmediate,v=u.MessageChannel,p=u.Dispatch,m=0,_={},g=function(){var t=+this;if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},F=function(t){g.call(t.data)};h&&f||(h=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return _[++m]=function(){s("function"==typeof t?t:Function(t),e)},n(m),m},f=function(t){delete _[t]},"process"==i("R9M2")(d)?n=function(t){d.nextTick(o(g,t,1))}:p&&p.now?n=function(t){p.now(o(g,t,1))}:v?(r=(a=new v).port2,a.port1.onmessage=F,n=o(r.postMessage,r,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(n=function(t){u.postMessage(t+"","*")},u.addEventListener("message",F,!1)):n="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(o(g,t,1),0)}),t.exports={set:h,clear:f}},M6a0:function(t,e){},"NWt+":function(t,e,i){var n=i("+ZMJ"),a=i("msXi"),r=i("Mhyx"),o=i("77Pl"),s=i("QRG4"),c=i("3fs2"),l={},u={};(e=t.exports=function(t,e,i,d,h){var f,v,p,m,_=h?function(){return t}:c(t),g=n(i,d,e?2:1),F=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(r(_)){for(f=s(t.length);f>F;F++)if((m=e?g(o(v=t[F])[0],v[1]):g(t[F]))===l||m===u)return m}else for(p=_.call(t);!(v=p.next()).done;)if((m=a(p,g,v.value,e))===l||m===u)return m}).BREAK=l,e.RETURN=u},PvKo:function(t,e){},Rpsr:function(t,e){},U5ju:function(t,e,i){i("M6a0"),i("zQR9"),i("+tPU"),i("CXw9"),i("EqBC"),i("jKW+"),t.exports=i("FeBl").Promise},UEnp:function(t,e){},YQkM:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("NAQQ"),a=i("/xUl"),r=i("3MUH"),o=i("gS0T"),s=i("UQ+I"),c=i("0ti1"),l=i("gIGi"),u={components:{SortOption:s.a,SearchOption:c.a,ClearFilterOption:l.a},name:"FreightViewTop",props:{freights:{type:Array}},methods:{openSearch:function(){n.a.showModal("freightSearchModal")},clearFilter:function(){this.$emit("clearFilter_Father")}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row of-visible"},[t._m(0),t._v(" "),i("div",{staticClass:"col-sm-6 pt-1 text-right of-visible"},[i("sort-option",{attrs:{_list:t.freights}}),t._v(" "),i("search-option",{on:{openSearch_Father:t.openSearch}}),t._v(" "),i("clear-filter-option",{on:{clearCondition_Father:t.clearFilter}})],1)]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 pt-2"},[e("h5",{staticClass:"fw-none"},[this._v("\n        全部\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table"},[i("tr",[i("td",{staticClass:"text-accent",attrs:{width:"5%"}},[t._v("#")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("编号")]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v("菜品描述")]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("价格")]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("单位")]),t._v(" "),i("td",{attrs:{width:"30%"}},[t._v("标签")]),t._v(" "),i("td",{attrs:{width:"10%"}})])])}]};var h=i("VU/8")(u,d,!1,function(t){i("xOCz")},"data-v-ed8977a4",null).exports,f=(i("7t+N"),i("0jG4"),i("5nBN")),v=i.n(f),p=i("z8RL"),m=i("SiM+"),_={name:"FreightViewBody",components:{Pencil:p.a,Remove:m.a},props:{freights:{type:Array}},methods:{unit:function(t){return v.a.ser_unit(t)},option:function(t,e){this.$emit("option_Father",t,e)}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table m-0 table-top-line-none"},t._l(t.freights,function(e,n){return i("tr",{key:e.id,attrs:{id:"freight_tr_"+e.id}},[i("td",{staticClass:"text-accent",attrs:{width:"5%"}},[t._v(t._s(n+1))]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v(t._s(e.num))]),t._v(" "),i("td",{attrs:{width:"20%"}},[t._v(t._s(e.named))]),t._v(" "),i("td",{attrs:{width:"15%"}},[t._v("$ "+t._s(e.price))]),t._v(" "),i("td",{attrs:{width:"10%"}},[t._v("  "+t._s(t.unit(e.unit)))]),t._v(" "),i("td",{attrs:{width:"30%"}},t._l(e.tag,function(e){return i("div",{key:e.id,staticClass:"tag tag-table tag-table-fix",style:{background:e.color}},[t._v("\n        "+t._s(e.named)+"\n      ")])}),0),t._v(" "),i("td",{attrs:{width:"10%"}},[i("i",{staticClass:"float-right",on:{click:function(i){return t.option(e.id,"trash")}}},[i("remove")],1),t._v(" "),i("i",{staticClass:"float-right",on:{click:function(i){return t.option(e.id,"update")}}},[i("pencil")],1)])])}),0)},staticRenderFns:[]};var F=i("VU/8")(_,g,!1,function(t){i("PvKo")},"data-v-5dc16bc2",null).exports,y=i("WNq0"),b={components:{PagerOption:i("B4CL").a},name:"FreightViewFooter",props:{_pageLink:{type:Object}},methods:{_loadData:function(t){this.$emit("_loadData_Father",t)}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"}),this._v(" "),e("div",{staticClass:"col-sm-6 text-right"},[e("pager-option",{attrs:{_page:this._pageLink},on:{loadData_Father:this._loadData}})],1)])},staticRenderFns:[]};var w=i("VU/8")(b,x,!1,function(t){i("s/GW")},"data-v-cee68856",null).exports,C=i("cpG1"),P=i("HT3s"),R=i("U5hB"),M={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fixed-plus-btn hand tool-tip",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"新增"},on:{click:this.plusDone}})},staticRenderFns:[]};var U=i("VU/8")({name:"PlusFixed",methods:{plusDone:function(){this.$emit("plusDone_Father")}}},M,!1,function(t){i("UEnp")},null,null).exports,E=i("//Fk"),L=i.n(E),D=i("BO1k"),k=i.n(D),j=i("I76R"),T=i.n(j),O={name:"FreightPlusForm",props:{isPlus:{type:Boolean}},data:function(){return{select:[],tags:[],num:"",tip_num:"",named:"",tip_named:"",price:"",tip_price:"",unit:0,tip_tag:"",activeId:0}},computed:{units:function(){return v.a.unitList.map(function(t){return{flag:t[0],named:t[1]}})}},mounted:function(){this.loadTag()},methods:{locationData:function(t){if(null!=t&&void 0!=t){if(this.named=t.named,this.price=t.price,this.unit=t.unit,this.num=t.num,this.select=[],null!=t.tag&&void 0!=t.tag){var e=[],i=!0,a=!1,r=void 0;try{for(var o,s=k()(t.tag);!(i=(o=s.next()).done);i=!0){var c=o.value;e.push(c.id)}}catch(t){a=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw r}}var l=!0,u=!1,d=void 0;try{for(var h,f=k()(this.tags);!(l=(h=f.next()).done);l=!0){var v=h.value;n.a.inList(v.id,e)&&this.select.push(v.id)}}catch(t){u=!0,d=t}finally{try{!l&&f.return&&f.return()}finally{if(u)throw d}}}this.activeId=t.id}},loadTag:function(){var t=this;a.a.tag.getList_Tag({},!0).then(function(e){a.a.judge_response(e)&&(t.tags=e,t.select.push(e[0].id))})},inList:function(t,e){return n.a.inList(t,e)},tagChoise:function(t){var e=n.a.indexList(t,this.select);e>=0?this.select.length<=1?(n.a.showToast("提示：請至少選擇壹個標簽。"),console.log("標簽")):this.select.splice(e,1):this.select.push(t)},tipClose:function(t){var e=this;setTimeout(function(){"num"==t?e.tip_num="":"named"==t?e.tip_named="":"price"==t&&(e.tip_price="")},4200)},tipForm:function(t,e){var i="";1!=t&&(i=t),"num"==e?this.tip_num=i:"named"==e?this.tip_named=i:"price"==e&&(this.tip_price=i),this.tipClose(e)},validateForm:function(){var t=T.a.val_empty(this.num,"貨號");return 1==t?(t=T.a.val_char(this.num,"貨號"),this.tipForm(t,"num")):this.tipForm(t,"num"),1==(t=T.a.val_empty(this.named,"描述"))?(t=T.a.val_char(this.named,"描述"),this.tipForm(t,"named")):this.tipForm(t,"named"),1==(t=T.a.val_empty(this.price,"零售價"))?(t=T.a.val_char_price(this.price,"零售價"),this.tipForm(t,"price")):this.tipForm(t,"price"),t},_validateSame:function(t){var e={num:t.num};return new L.a(function(t,i){a.a.freight.getList_Freight(e,!0).then(function(e){a.a.judge_response_list(e)&&t(!1),t(!0)}).catch(function(t){i(!1),n.a.showToast("網絡連接失敗。")})})},_submit:function(t){var e=this;this._validateSame(t).then(function(i){i?e.isPlus?e.$emit("plus_Father",t):e.$emit("update_Father",t,e.activeId):n.a.showToast("已存在相同貨號的產品了。")})},submitForm:function(){if(1==this.validateForm()){var t={num:this.num,named:this.named,price:this.price,unit:this.unit,tags:this.select.join(",")};this._submit(t)}}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-form-wrapper"},[i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"num"}},[t._v("貨號")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"form-control",attrs:{type:"text",id:"num",placeholder:"貨號"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_num))])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"named"}},[t._v("描述")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.named,expression:"named"}],staticClass:"form-control",attrs:{type:"text",id:"named",placeholder:"描述"},domProps:{value:t.named},on:{input:function(e){e.target.composing||(t.named=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_named))])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-4"},[i("label",{attrs:{for:"price"}},[t._v("零售價")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"text",id:"price",placeholder:"價格"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_price))])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("label",{attrs:{for:"unit"}},[t._v("單位")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.unit,expression:"unit"}],staticClass:"form-control",attrs:{id:"unit"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.unit=e.target.multiple?i:i[0]}}},t._l(t.units,function(e){return i("option",{key:e.flag,domProps:{value:e.flag}},[t._v(t._s(e.named))])}),0)]),t._v(" "),i("div",{staticClass:"col-sm-4"})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"named"}},[t._v("標簽")]),t._v(" "),t.tags.length>0?i("div",{staticClass:"tag-wrapper"},t._l(t.tags,function(e){return i("div",{key:e.named,staticClass:"tag tag-def d-inline hand",class:{"tag-active":t.inList(e.id,t.select)},on:{click:function(i){return t.tagChoise(e.id)}}},[t._v("\n          "+t._s(e.named)+"\n        ")])}),0):t._e(),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"numTip"}},[t._v(t._s(t.tip_tag))])])])])},staticRenderFns:[]};var N=i("VU/8")(O,$,!1,function(t){i("5wYu")},"data-v-0cd981ce",null).exports,S={components:{FreightPlusForm:N},name:"FreightPlus",props:{freight:{type:Object}},methods:{submitFreightPlus:function(){this.$refs.plusForm.submitForm()},_signelRefreash:function(){this.$emit("signelRefreash_Father")},_plus:function(t){var e=this;a.a.freight.add(t).then(function(t){a.a.judge_response(t)&&(console.log(t),n.a.showToast("新增成功！！！"),setTimeout(function(){n.a.closeAllModal(),e._signelRefreash()},700))})}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"freightPlusModal"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("freight-plus-form",{ref:"plusForm",attrs:{isPlus:!0,_freight:this.freight},on:{plus_Father:this._plus}})],1),this._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-main",on:{click:this.submitFreightPlus}},[this._v("保存")])])])])])},staticRenderFns:[]};var I=i("VU/8")(S,V,!1,function(t){i("Rpsr")},"data-v-57eb972e",null).exports,B={name:"FreightUpdated",components:{FreightPlusForm:N},props:{freight:{type:Object}},methods:{submitFreightPlus:function(){this.$refs.updateFormREF.submitForm()},validateSame:function(t){return!0},update:function(t,e){var i=this;console.log(t),this.validateSame(t)&&a.a.freight.update(t,e).then(function(t){a.a.judge_response(t)&&(console.log(t),n.a.showToast("修改成功！！！"),setTimeout(function(){n.a.closeAllModal(),i.$emit("signelRefreash_Father")},700))})},locationUpdateData:function(t){this.$refs.updateFormREF.locationData(t)}}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"freightUpdateModal"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("freight-plus-form",{ref:"updateFormREF",attrs:{isPlus:!1},on:{update_Father:this.update}})],1),this._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-main",on:{click:this.submitFreightPlus}},[this._v("保存")])])])])])},staticRenderFns:[]};var A=i("VU/8")(B,K,!1,function(t){i("1PFp")},"data-v-7a61c352",null).exports,J={components:{FullHeightLayout:o.a,FreightViewTop:h,FreightViewBody:F,FreightViewSearch:y.a,FreightViewFooter:w,Trash:P.a,Empty:C.a,Loading:R.a,PlusFixed:U,FreightPlus:I,FreightUpdated:A},name:"FreightView",data:function(){return{freightList:[],pageLink:{next:"",previous:"",count:0,offsetNow:0,limit:100},isLoading:!0,activeId:0,activeFreight:null,activeURL:""}},mounted:function(){this.loadData()},methods:{loadData:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};null==t&&(t=r.a.buildFirstPagerUrl(a.a.freight.url,i,{offset:0,limit:this.pageLink.limit})),a.a.freight.getListPage(t).then(function(i){e.activeURL=t,e.freightList=i.results,e.pageLink=r.a.buildPageLink(t,i.count,100,i.next,i.previous),e.isLoading=!1}).catch(function(t){n.a.showToast("網絡連接失敗。")})},plusDone:function(){n.a.showModal("freightPlusModal")},locationUpdateData:function(){this.loadData(this.activeURL)},clearFilter:function(){this.loadData()},option:function(t,e){var i=this;this.activeId=t,"trash"==e?n.a.showModal("trashModal"):"update"==e&&a.a.freight.getOne(t).then(function(t){a.a.judge_response(t)&&(i.activeFreight=t,i.$refs.freightUpdateREF.locationUpdateData(t),n.a.showModal("freightUpdateModal"))})},_trash:function(){var t=this,e=this;n.a.closeModal("trashModal"),null!=this.activeId&&this.activeId>0&&a.a.freight.trash(this.activeId).then(function(i){a.a.judge_response(i)&&(n.a.showToast("刪除成功！！"),n.a.hideEle("freight_tr_"+t.activeId),e.isLoading=!1)})}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("full-height-layout",[i("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("產品")]),t._v(" "),i("freight-view-top",{attrs:{slot:"layout_inner_head",freights:t.freightList},on:{clearFilter_Father:t.clearFilter},slot:"layout_inner_head"}),t._v(" "),t.freightList.length>0?i("freight-view-body",{attrs:{slot:"layout_inner_body",freights:t.freightList},on:{option_Father:t.option},slot:"layout_inner_body"}):t.isLoading?i("loading",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}):i("empty",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}),t._v(" "),i("freight-view-footer",{attrs:{slot:"layout_footer",_pageLink:t.pageLink},on:{_loadData_Father:t.loadData},slot:"layout_footer"}),t._v(" "),i("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[i("freight-view-search",{on:{loadData_Father:t.loadData}}),t._v(" "),i("trash",{on:{trashItem:t._trash}}),t._v(" "),i("plus-fixed",{on:{plusDone_Father:t.plusDone}}),t._v(" "),i("freight-plus",{on:{signelRefreash_Father:t.loadData}}),t._v(" "),i("freight-updated",{ref:"freightUpdateREF",attrs:{freight:t.activeFreight},on:{signelRefreash_Father:t.locationUpdateData}})],1)],1)},staticRenderFns:[]};var q=i("VU/8")(J,Q,!1,function(t){i("tbEl")},"data-v-93d9ec32",null);e.default=q.exports},bRrM:function(t,e,i){"use strict";var n=i("7KvD"),a=i("FeBl"),r=i("evD5"),o=i("+E39"),s=i("dSzd")("species");t.exports=function(t){var e="function"==typeof a[t]?a[t]:n[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},fJUb:function(t,e,i){var n=i("77Pl"),a=i("EqjI"),r=i("qARP");t.exports=function(t,e){if(n(t),a(e)&&e.constructor===t)return e;var i=r.f(t);return(0,i.resolve)(e),i.promise}},gIGi:function(t,e,i){"use strict";i("NAQQ");var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light btn-sm pb-0 float-right mr-2 tool-tip",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"重新整理"},on:{click:this.clearCondition}},[e("i",{staticClass:"fa fa-refresh"})])},staticRenderFns:[]};var a=i("VU/8")({name:"ClearFilterOption",methods:{clearCondition:function(){this.$emit("clearCondition_Father")}}},n,!1,function(t){i("xpo1")},"data-v-3a774582",null);e.a=a.exports},gtvN:function(t,e){},iUbK:function(t,e,i){var n=i("7KvD").navigator;t.exports=n&&n.userAgent||""},"jKW+":function(t,e,i){"use strict";var n=i("kM2E"),a=i("qARP"),r=i("dNDb");n(n.S,"Promise",{try:function(t){var e=a.f(this),i=r(t);return(i.e?e.reject:e.resolve)(i.v),e.promise}})},knuC:function(t,e){t.exports=function(t,e,i){var n=void 0===i;switch(e.length){case 0:return n?t():t.call(i);case 1:return n?t(e[0]):t.call(i,e[0]);case 2:return n?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},qARP:function(t,e,i){"use strict";var n=i("lOnJ");t.exports.f=function(t){return new function(t){var e,i;this.promise=new t(function(t,n){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=n}),this.resolve=n(e),this.reject=n(i)}(t)}},"s/GW":function(t,e){},t8x9:function(t,e,i){var n=i("77Pl"),a=i("lOnJ"),r=i("dSzd")("species");t.exports=function(t,e){var i,o=n(t).constructor;return void 0===o||void 0==(i=n(o)[r])?e:a(i)}},tbEl:function(t,e){},"xH/j":function(t,e,i){var n=i("hJx8");t.exports=function(t,e,i){for(var a in e)i&&t[a]?t[a]=e[a]:n(t,a,e[a]);return t}},xOCz:function(t,e){},xpo1:function(t,e){}});
//# sourceMappingURL=2.a343f060645e1fd18017.js.map