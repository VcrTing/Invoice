webpackJsonp([8],{"1geB":function(t,a){},HkTC:function(t,a){},Rlrl:function(t,a){},UEnp:function(t,a){},aGEI:function(t,a){},fRmj:function(t,a){},iNGn:function(t,a){},nrhM:function(t,a,e){"use strict";var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fixed-plus-btn hand tool-tip",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"新增"},on:{click:this.plusDone}})},staticRenderFns:[]};var i=e("VU/8")({name:"PlusFixed",methods:{plusDone:function(){this.$emit("plusDone_Father")}}},o,!1,function(t){e("UEnp")},null,null);a.a=i.exports},oa25:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("Xxa5"),i=e.n(o),s=e("exGp"),n=e.n(s),r=e("NAQQ"),l=e("/xUl"),d=(e("3MUH"),e("gS0T")),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h5",{staticClass:"fw-none mt-2"},[t._v("\n    全部\n  ")]),t._v(" "),e("table",{staticClass:"table m-0"},[e("tr",{staticClass:"text-left"},[e("td",{staticClass:"text-accent",attrs:{width:"10%"}},[t._v("#")]),t._v(" "),e("td",{attrs:{width:"25%"}},[t._v("標簽名稱")]),t._v(" "),e("td",{attrs:{width:"20%"}},[t._v("標簽顏色")]),t._v(" "),e("td",{attrs:{width:"30%"}},[t._v("創建時間")]),t._v(" "),e("td",{staticClass:"text-center",attrs:{width:"10%"}})])])])}]};var u=e("VU/8")({name:"TagViewTop"},c,!1,function(t){e("aGEI")},"data-v-7cf6edb3",null).exports,m=(e("7t+N"),e("0jG4"),e("5nBN"),e("SiM+")),v=e("z8RL"),h={components:{Remove:m.a,Pencil:v.a},name:"TagViewBody",props:{tags:{type:Array}},methods:{ser_timed:function(t){return r.a.timed.ser_timed(t,!0,!0)},option:function(t,a){this.$emit("option_Father",t,a)}}},f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table m-0 table-top-line-none"},t._l(t.tags,function(a,o){return e("tr",{key:a.id,staticClass:"text-left",attrs:{id:"tag_tr_"+a.id}},[e("td",{staticClass:"text-accent",attrs:{width:"10%"}},[t._v(t._s(o+1))]),t._v(" "),e("td",{attrs:{width:"25%"}},[t._v(t._s(a.named))]),t._v(" "),e("td",{attrs:{width:"20%"}},[e("div",{staticClass:"tag-color",style:{background:a.color}}),t._v("  "+t._s(a.color)+"\n    ")]),t._v(" "),e("td",{attrs:{width:"30%"}},[t._v(t._s(t.ser_timed(a.add_time)))]),t._v(" "),e("td",{staticClass:"text-center",attrs:{width:"10%"}},[e("i",{staticClass:"float-right",on:{click:function(e){return t.option(a.id,"trash")}}},[e("remove")],1),t._v(" "),e("i",{staticClass:"float-right",on:{click:function(e){return t.option(a.id,"update")}}},[e("pencil")],1)])])}),0)},staticRenderFns:[]};var p=e("VU/8")(h,f,!1,function(t){e("HkTC")},"data-v-b8a26466",null).exports,_=e("nrhM"),g=e("BO1k"),b=e.n(g),C=e("//Fk"),y=e.n(C),F=e("I76R"),x=e.n(F),T={name:"",data:function(){return{named:"",tip_named:"",color:"f7f7f7",tip_color:""}},computed:{res_color:function(){return this.rebuildColor()}},methods:{rebuildColor:function(){var t="";return this.color&&(this.color.startsWith("#")||(t="#"),t+=this.color),t},tipClose:function(t){var a=this;setTimeout(function(){"named"==t?a.tip_named="":"color"==t&&(a.tip_color="")},4200)},tipForm:function(t,a){var e="";1!=t&&(e=t),"num"==a?this.tip_num=e:"named"==a?this.tip_named=e:"color"==a&&(this.tip_color=e),this.tipClose(a)},validateForm:function(){var t=!0;1==(a=x.a.val_empty(this.named,"標簽名稱"))?(a=x.a.val_char(this.named,"標簽名稱"),this.tipForm(a,"named")):this.tipForm(a,"named"),1!=a&&(t=!1);var a=x.a.val_empty(this.rebuildColor(),"顏色");return 1==a?(a=x.a.val_color(this.rebuildColor(),"顏色"),this.tipForm(a,"color")):this.tipForm(a,"color"),1!=a&&(t=!1),t},randomColor:function(){var t=r.a.colors[Math.floor(Math.random()*r.a.colors.length)];this.color=t},_validateSame:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var a={named:t.named};return new y.a(function(e,o){l.a.tag.getList_Tag(a,!0).then(function(a){if(a.length>0){var o=[],i=!0,s=!1,n=void 0;try{for(var r,l=b()(a);!(i=(r=l.next()).done);i=!0){var d=r.value;d.named==t.named&&o.push(d)}}catch(t){s=!0,n=t}finally{try{!i&&l.return&&l.return()}finally{if(s)throw n}}o.length>0&&e(!1)}e(!0)}).catch(function(t){o(!1),r.a.showToast("網絡連接失敗。")})})},_submit:function(t){var a=this;this._validateSame(t).then(function(e){e?a.$emit("plus_Father",t):r.a.showToast("已存在相同名稱的標簽了。")})},submitForm:function(){if(1==this.validateForm()){var t={named:this.named,color:this.rebuildColor()};this._submit(t)}}}},w={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-form-wrapper"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"named"}},[t._v("名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.named,expression:"named"}],staticClass:"form-control",attrs:{type:"text",id:"named",placeholder:"標簽名稱"},domProps:{value:t.named},on:{input:function(a){a.target.composing||(t.named=a.target.value)}}}),t._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"namedTip"}},[t._v(t._s(t.tip_named))])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"color"}},[t._v("顏色")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"color-card",style:{background:t.res_color}},[t._v("\n                  （標簽）\n              ")])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"input-group"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"form-control",attrs:{type:"text",id:"color",placeholder:"十六進製"},domProps:{value:t.color},on:{input:function(a){a.target.composing||(t.color=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-2"}),t._v(" "),e("div",{staticClass:"col-3"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.randomColor}},[e("i",{staticClass:"fas fa-dice-five"}),t._v("\n                  隨機生成")])])]),t._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"colorTip"}},[t._v(t._s(t.tip_color))])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[this._v("#")])])}]};var R={components:{TagPlusForm:e("VU/8")(T,w,!1,function(t){e("fRmj")},"data-v-362c50e2",null).exports},name:"TagUpdate",data:function(){return{tag:{}}},props:{tagRec:{type:Object}},created:function(){this.tag=this.tagRec},openModal:function(){r.a.showModal("tagUpdateModal")},methods:{submitTagPlus:function(){this.$refs.plusForm.submitForm()},_signelRefreash:function(){this.$emit("signelRefreash_Father")},_plus:function(t){var a=this;t.status="True",l.a.tag.add(t).then(function(t){l.a.judge_response(t)&&(r.a.showToast("新增成功！！！",2100),setTimeout(function(){r.a.closeAllModal(),a._signelRefreash()},700))})}}},U={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"tagPlusModal","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("tag-plus-form",{ref:"plusForm",on:{plus_Father:this._plus}})],1),this._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:this.submitTagPlus}},[this._v("儲存")])])])])])},staticRenderFns:[]};var E=e("VU/8")(R,U,!1,function(t){e("iNGn")},"data-v-b6ada9e2",null).exports,$=e("HT3s"),M={name:"",data:function(){return{named:"",tip_named:"",color:"f7f7f7",tip_color:"",activeId:0}},computed:{res_color:function(){return this.rebuildColor()}},methods:{locationData:function(t){null!=t&&void 0!=t&&(this.named=t.named,this.color=t.color,this.activeId=t.id)},rebuildColor:function(){var t="";return this.color&&(this.color.startsWith("#")||(t="#"),t+=this.color),t},tipClose:function(t){var a=this;setTimeout(function(){"named"==t?a.tip_named="":"color"==t&&(a.tip_color="")},4200)},tipForm:function(t,a){var e="";1!=t&&(e=t),"num"==a?this.tip_num=e:"named"==a?this.tip_named=e:"color"==a&&(this.tip_color=e),this.tipClose(a)},validateForm:function(){var t=!0;1==(a=x.a.val_empty(this.named,"標簽名稱"))?(a=x.a.val_char(this.named,"標簽名稱"),this.tipForm(a,"named")):this.tipForm(a,"named"),1!=a&&(t=!1);var a=x.a.val_empty(this.rebuildColor(),"顏色");return 1==a?(a=x.a.val_color(this.rebuildColor(),"顏色"),this.tipForm(a,"color")):this.tipForm(a,"color"),1!=a&&(t=!1),t},randomColor:function(){var t=r.a.colors[Math.floor(Math.random()*r.a.colors.length)];this.color=t},_validateSame:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var a={named:t.named};return new y.a(function(e,o){l.a.tag.getList_Tag(a,!0).then(function(a){if(a.length>0){var o=[],i=!0,s=!1,n=void 0;try{for(var r,l=b()(a);!(i=(r=l.next()).done);i=!0){var d=r.value;d.named==t.named&&d.id!=t.id&&o.push(d)}}catch(t){s=!0,n=t}finally{try{!i&&l.return&&l.return()}finally{if(s)throw n}}o.length>0&&e(!1)}e(!0)}).catch(function(t){o(!1),r.a.showToast("網絡連接失敗。")})})},_submit:function(t){var a=this;this._validateSame(t).then(function(e){e?a.$emit("update_Father",t):r.a.showToast("已存在相同名稱的標簽了。")})},submitForm:function(){if(1==this.validateForm()){var t={id:this.activeId,named:this.named,color:this.rebuildColor()};this._submit(t)}}}},k={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-form-wrapper"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"named"}},[t._v("名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.named,expression:"named"}],staticClass:"form-control",attrs:{type:"text",id:"named",placeholder:"標簽名稱"},domProps:{value:t.named},on:{input:function(a){a.target.composing||(t.named=a.target.value)}}}),t._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"namedTip"}},[t._v(t._s(t.tip_named))])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"color"}},[t._v("顏色")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"color-card",style:{background:t.res_color}},[t._v("\n                  （標簽）\n              ")])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"input-group"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"form-control",attrs:{type:"text",id:"color",placeholder:"十六進製"},domProps:{value:t.color},on:{input:function(a){a.target.composing||(t.color=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-2"}),t._v(" "),e("div",{staticClass:"col-3"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.randomColor}},[e("i",{staticClass:"fas fa-dice-five"}),t._v("\n                  隨機生成")])])]),t._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"colorTip"}},[t._v(t._s(t.tip_color))])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[this._v("#")])])}]};var L={components:{TagUpdateForm:e("VU/8")(M,k,!1,function(t){e("xSEh")},"data-v-0358b7b5",null).exports},name:"TagUpdate",data:function(){return{tag_data:{}}},props:{},methods:{submitTagPlus:function(){this.$refs.updateFormREF.submitForm()},validateSame:function(t){return!0},update:function(t){var a=this,e=this.validateSame(t),o=t.id;e&&l.a.tag.update(t,o).then(function(t){l.a.judge_response(t)&&(r.a.showToast("修改成功！！！",1900),setTimeout(function(){r.a.closeAllModal(),a.$emit("signelRefreash_Father")},700))})},locationUpdateData:function(t){this.$refs.updateFormREF.locationData(t)}}},P={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"tagUpdateModal","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("tag-update-form",{ref:"updateFormREF",on:{update_Father:this.update}})],1),this._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("取消")]),this._v(" "),a("button",{staticClass:"btn btn-main",on:{click:this.submitTagPlus}},[this._v("保存")])])])])])},staticRenderFns:[]};var D=e("VU/8")(L,P,!1,function(t){e("1geB")},"data-v-7a3e7096",null).exports,I=e("cpG1"),V=e("U5hB"),S=e("uT2u"),B={components:{TagViewTop:u,FullHeightLayout:d.a,TagViewBody:p,PlusFixed:_.a,TagPlus:E,Trash:$.a,TagUpdated:D,Empty:I.a,Loading:V.a,CustomModal:S.a},name:"TagView",data:function(){return{tagList:null,activeId:null,activeTag:null,activeURL:"",isLoading:!1}},created:function(){var t=this;window.addEventListener("beforeunload",function(a){return t.beforLoad(a)})},destroyed:function(){var t=this;window.removeEventListener("beforeunload",function(a){return t.beforLoad(a)})},mounted:function(){this.getTag();var t=this.$route.query.option;t&&"auto_add"==t&&document.getElementById("plus_btn").click()},beforeDestroy:function(){},methods:{getTag:function(){var t=this;return n()(i.a.mark(function a(){var e;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.tagList=null,a.next=3,l.a.tag.getList_Tag();case 3:(e=a.sent)?(t.tagList=e,setTimeout(function(){t.isLoading=!0},900)):r.a.showToast("网络连接失败。");case 5:case"end":return a.stop()}},a,t)}))()},goPage:function(t){this.$router.push(t),this.$store.state.iframeSrc=this.$route.meta.link,this.$store.state.iframeTitle=this.$route.meta.title},beforLoad:function(t){},plusDone:function(){r.a.showModal("tagPlusModal")},locationUpdateData:function(){this.getTag()},option:function(t,a){var e=this;this.activeId=t,"trash"==a?r.a.showModal("trash_tagModal"):"update"==a&&l.a.tag.getOne(t).then(function(t){l.a.judge_response(t)&&(e.activeTag=t,e.$refs.tagUpdateREF.locationUpdateData(t),r.a.showModal("tagUpdateModal"))})},_trash:function(){var t=this,a=this;r.a.closeModal("trashModal"),null!=this.activeId&&this.activeId>0&&l.a.tag.delete(this.activeId).then(function(e){l.a.judge_response(e)&&(r.a.showToast("刪除成功！！"),r.a.hideEle("tag_tr_"+t.activeId),setTimeout(function(){t.getTag()},400),a.isLoading=!1)})}}},j={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("full-height-layout",[e("div",{attrs:{slot:"layout_title"},slot:"layout_title"},[t._v("標簽")]),t._v(" "),e("tag-view-top",{attrs:{slot:"layout_inner_head"},slot:"layout_inner_head"}),t._v(" "),t.tagList?e("tag-view-body",{attrs:{slot:"layout_inner_body",tags:t.tagList},on:{option_Father:t.option},slot:"layout_inner_body"}):t.isLoading?e("empty",{attrs:{slot:"layout_inner_body"},slot:"layout_inner_body"}):e("transition",{attrs:{slot:"layout_inner_body",name:"fade"},slot:"layout_inner_body"},[e("loading")],1),t._v(" "),e("div",{attrs:{slot:"layout_extra"},slot:"layout_extra"},[e("plus-fixed",{attrs:{id:"plus_btn"},on:{plusDone_Father:t.plusDone}}),t._v(" "),e("tag-plus",{on:{signelRefreash_Father:t.locationUpdateData}}),t._v(" "),e("custom-modal",{attrs:{id_prefix:"trash_tag",title:"提示",txt:"刪除標簽為敏感操作，您確定要刪除它嗎？"},on:{done_Father:t._trash}},[e("span",{attrs:{slot:"submit_text"},slot:"submit_text"},[t._v("確認刪除")])]),t._v(" "),e("tag-updated",{ref:"tagUpdateREF",attrs:{tag:t.activeTag},on:{signelRefreash_Father:t.locationUpdateData}})],1)],1)},staticRenderFns:[]};var N=e("VU/8")(B,j,!1,function(t){e("Rlrl")},"data-v-7323e96c",null);a.default=N.exports},xSEh:function(t,a){}});
//# sourceMappingURL=8.fa486ab7e576f804740b.js.map