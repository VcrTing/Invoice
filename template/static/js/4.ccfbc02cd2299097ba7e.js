webpackJsonp([4],{GWqq:function(t,e){},KyxN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mvHQ"),i=n.n(a),s=n("//Fk"),o=n.n(s),l=n("NAQQ"),r=n("/xUl"),c=(n("3MUH"),n("7t+N")),d=n.n(c),u={name:"MenuItemWrapper",data:function(){return{menuId:-1,show:!0}},props:{paramId:{type:Number}},created:function(){this.menuId=this.paramId},computed:{collapseId:function(){return"collapse_"+this.menuId}},mounted:function(){this.collapseMenu()},methods:{collapseMenu:function(){this.show?d()("#collapse_"+this.menuId).collapse("show"):d()("#collapse_"+this.menuId).collapse("hide"),this.show=!this.show}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-2"},[n("div",{staticClass:"left-menu-item text-white hand",on:{click:function(e){return t.collapseMenu()}}},[n("div",{staticClass:"item-father"},[t._t("headerLeading"),t._v(" "),t._t("headerText"),t._v(" "),t._t("headerAction")],2)]),t._v(" "),n("div",{staticClass:"item-children text-white hand collapse",attrs:{id:t.collapseId}},[t._t("slot_content")],2)])},staticRenderFns:[]};var m={name:"LeftMenu",components:{MenuItemWrapper:n("VU/8")(u,h,!1,function(t){n("jAvM")},"data-v-6438781b",null).exports},data:function(){return{listing_plus_uri:"/home/listing_plus",prices_plus_uri:"/home/prices_plus",menu:[{header:{name:"發票",icon:"fa-table",action:"fa-angle-right"},children:[{name:"全部",link:"/home/listing"},{name:"新增",link:"/home/listing_plus"}]},{header:{name:"報價單",icon:"fa-sticky-note-o",action:"fa-angle-right"},children:[{name:"全部",link:"/home/prices"},{name:"新增",link:"/home/prices_plus"}]},{header:{name:"客戶",icon:"fa-user-o",action:"fa-angle-right"},children:[{name:"全部",link:"/home/member"},{name:"新增",link:"/home/member_plus"}]},{header:{name:"產品",icon:"fa-cubes",action:"fa-angle-right"},children:[{name:"全部",link:"/home/freight"}]},{header:{name:"標籤",icon:"fa-tags",action:"fa-angle-right"},children:[{name:"全部",link:"/home/tag"}]}]}},methods:{_go:function(t){this.$router.push({path:t})},_confirm:function(t){confirm("確定要離開此界面嗎？")&&this._go(t)},lunch:function(t){var e=this.$route.path;t!=e&&(e==this.listing_plus_uri?this._confirm(t):e==this.prices_plus_uri?this._confirm(t):this._go(t))}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.menu,function(e,a){return n("menu-item-wrapper",{key:e.header.name,attrs:{paramId:a}},[n("div",{staticClass:"d-inline fa-pos-fix float-left",attrs:{slot:"headerLeading"},slot:"headerLeading"},[n("i",{staticClass:"fa m-0",class:e.header.icon})]),t._v(" "),n("div",{staticClass:"d-inline float-left fa-text",attrs:{slot:"headerText"},slot:"headerText"},[t._v(" "+t._s(e.header.name)+" ")]),t._v(" "),n("div",{staticClass:"d-inline fa-pos-fix float-right",attrs:{slot:"headerAction"},slot:"headerAction"},[n("i",{staticClass:"fa h5 m-0",class:e.header.action})]),t._v(" "),t._l(e.children,function(e){return n("div",{key:e.name,attrs:{slot:"slot_content",tag:"div"},on:{click:function(n){return t.lunch(e.link)}},slot:"slot_content"},[t._v("\n      "+t._s(e.name)+"\n    ")])})],2)}),1)},staticRenderFns:[]};var p=n("VU/8")(m,f,!1,function(t){n("WqpC")},null,null).exports,v=n("oG67"),_={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var g=n("VU/8")({name:"HomeContent"},_,!1,function(t){n("xoEl")},null,null).exports,b=n("qmj4"),C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left-sub-action"},[e("div",{staticClass:"lsa-item hand",on:{click:this.logOut}},[this._v("退出登錄")])])},staticRenderFns:[]};var k=n("VU/8")({name:"LeftSubAction",mounted:function(){this.checkLoginTime()},methods:{logOut:function(){this.$store.commit("loginOut",""),this.$router.push({path:"/login"})},checkLoginTime:function(){this.$store.commit("checkLoginAlive")}}},C,!1,function(t){n("RNEW")},"data-v-764c12c0",null).exports,x={name:"HelpModal",methods:{closeHelp:function(){l.a.closeModal("helpModal")}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{id:"helpModal","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"},[e("div",{staticClass:"modal-content"},[this._m(0),this._v(" "),e("div",{staticClass:"modal-body",attrs:{id:"helpModalBody"}}),this._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:this.closeHelp}},[this._v("關閉")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title",attrs:{id:"helpModalTitle"}},[this._v("\n          幫助\n        ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var y=n("VU/8")(x,M,!1,function(t){n("rjWR")},"data-v-4af7cc3f",null).exports,$={name:"HomeLayout",components:{LeftMenu:p,ScaffoldBar:v.a,HomeContent:g,Toast:b.a,LeftSubAction:k,HelpModal:y},created:function(){}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row wrapper"},[e("div",{staticClass:"col-sm-2 left-menu"},[e("left-menu"),this._v(" "),e("left-sub-action")],1),this._v(" "),e("div",{staticClass:"col-sm-10 right-content"},[e("home-content")],1)])]),this._v(" "),e("toast"),this._v(" "),e("help-modal")],1)},staticRenderFns:[]};var E={name:"Home",components:{HomeLayout:n("VU/8")($,L,!1,function(t){n("rYrY")},"data-v-218d7367",null).exports},created:function(){},mounted:function(){this.loadFreights()},methods:{loadFreights:function(){return console.log("拉取蔬菜"),new o.a(function(t,e){r.a.freight.getList_Freight({},!0).then(function(t){if(t.length>0){var e=[];t.map(function(t){var n=t.id,a=t.num,i=t.unit,s=t.price,o=t.named;e.push({id:n,num:a,unit:i,price:s,named:o})}),l.a.storage._set("invoice_freights",i()(e))}else l.a.storage._set("invoice_freights",i()([]))}).catch(function(t){})})}}},R={render:function(){var t=this.$createElement;return(this._self._c||t)("home-layout")},staticRenderFns:[]};var w=n("VU/8")(E,R,!1,function(t){n("GWqq")},null,null);e.default=w.exports},ML9b:function(t,e){},RNEW:function(t,e){},WqpC:function(t,e){},eRkG:function(t,e){},jAvM:function(t,e){},oG67:function(t,e,n){"use strict";var a={name:"TopBar",props:{opacity:{type:Number,default:0}},data:function(){return{email:"support@manfulls.com"}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row top-bar p-0",class:{opacityBar:this.opacity>0}},[e("div",{staticClass:"col-sm-8"}),this._v(" "),e("div",{staticClass:"col-sm-4 text-right top-bar-right-content"},[this._v("\n    \n    "+this._s(this.$store.getters.getUserName())+"\n  ")])])},staticRenderFns:[]};var s=n("VU/8")(a,i,!1,function(t){n("ML9b")},"data-v-0843b940",null);e.a=s.exports},qmj4:function(t,e,n){"use strict";n("7t+N");var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dialog d-none",attrs:{id:"dialog"}},[e("div",[this._v("aaaa")])])}]};var i=n("VU/8")({name:"Toast"},a,!1,function(t){n("eRkG")},"data-v-47ed3e30",null);e.a=i.exports},rYrY:function(t,e){},rjWR:function(t,e){},xoEl:function(t,e){}});
//# sourceMappingURL=4.ccfbc02cd2299097ba7e.js.map