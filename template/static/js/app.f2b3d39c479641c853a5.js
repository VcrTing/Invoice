webpackJsonp([20],{"2VRZ":function(e,n,t){"use strict";n.a={add_salt_form_string:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8";return e+(e%2==0?1:0)+n+""},remove_salt_form_string:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.substring(0,e.length-2)}}},"5W1q":function(e,n){},"9HQW":function(e,n,t){"use strict";var i=t("mvHQ"),o=t.n(i),a=t("pFYg"),r=t.n(a),u=t("//Fk"),l=t.n(u);n.a={_get:function(e){return localStorage.getItem(e)},_set:function(e,n){return localStorage.setItem(e,n)},_getAsync:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new l.a(function(t,i){var o=localStorage.getItem(e);o&&(n&&(o=JSON.parse(o)),t(o)),i(o)})},_setAsync:function(e,n){return new l.a(function(t,i){(void 0===n?"undefined":r()(n))!=String&&(n=o()(n)),localStorage.setItem(e,n),t(!0)})}}},"L/hj":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("7+uW"),o={name:"App",data:function(){return{}},mounted:function(){console.log("INVOICE 初始化.")},methods:{}},a={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")(o,a,!1,function(e){t("m2zM")},null,null).exports,u=t("/ocq"),l=t("Gu7T"),c=t.n(l),s=[{path:"listing/",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"lysK"))},meta:{title:"发票"}},{path:"listing_plus/",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"U5HZ"))},meta:{title:"新增发票"}},{path:"listing_update/",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"iD9P"))},meta:{title:"修改发票"}}],m=[{path:"member/",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"GX/W"))},meta:{title:"客人"}},{path:"member_plus/",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"OT5H"))},meta:{title:"新增客户"}},{path:"member_update/",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"2wCW"))},meta:{title:"修改客户"}}],p=[{path:"freight/",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"YQkM"))},meta:{title:"菜品价格列表"}}],d=[{path:"prices/",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"fiGY"))},meta:{title:"报价单列表"}},{path:"prices_plus/",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"KSW8"))},meta:{title:"新增报价单"}},{path:"prices_update/",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"xiI/"))},meta:{title:"修改报价单"}}],f=[{path:"tag/",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"oa25"))},meta:{title:"标签列表"}}],h=[{path:"",redirect:"dashboard"},{path:"dashboard/",component:function(){return t.e(17).then(t.bind(null,"a/2s"))},meta:{title:"主面板"}}].concat(c()(s),c()(m),c()(p),c()(d),c()(f)),g=[{path:"/login",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"zINL"))},meta:{title:"登录界面",needLogin:!1}}],v=[{path:"/pdf_prices",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"t68P"))},meta:{title:"报价单"}},{path:"/pdf_listing",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"AsZj"))},meta:{title:"发票"}},{path:"/pdf_combine_listing",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"GjCy"))},meta:{title:"订货单"}}],_=new u.a({mode:"hash",linkActiveClass:"menu-active",routes:[{path:"/home",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"KyxN"))},children:h}].concat(c()(g),c()(v),[{path:"",redirect:"/home",meta:{title:"首页"}},{path:"/test",component:function(){return t.e(18).then(t.bind(null,"dZXj"))},meta:{title:"测试"}}])}),b=t("9HQW");i.a.use(u.a),_.beforeEach(function(e,n,t){if(window.document.title=e.meta.title,void 0==e.meta.needLogin){var i=b.a._get("invoice_user");void 0!=i&&""!=i&&null!=i||t({path:"/login"})}t()});var w=_,P=t("L/hj"),L=t.n(P),x=t("Xxa5"),y=t.n(x),A=t("exGp"),N=t.n(A),k=t("NYxO"),S=(t("2VRZ"),t("wYMm"));i.a.use(k.a);var W=new k.a.Store({state:{named:"",pass:"",is_num_order:!0,isLogin:!1},mutations:{changeName:function(e,n){e.named=n},changePass:function(e,n){e.pass=n},changeLogin:function(e,n){},loginOut:function(e,n){e.named="",e.pass="",e.isLogin=!1,b.a._set("invoice_user","")},saveLogin:function(e,n){var t=this;return N()(y.a.mark(function i(){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.named=n.named,e.isLogin=!0,n.alive=Date.now(),t.next=5,b.a._setAsync("invoice_user",n);case 5:case"end":return t.stop()}},i,t)}))()},checkLoginAlive:function(e){var n=this;return N()(y.a.mark(function t(){var i,o;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a._getAsync("invoice_user",!0);case 2:if(!(i=n.sent)){n.next=10;break}if(o=i.alive,!(Date.now()-o>S.a.activeTime)){n.next=10;break}return e.isLogin=!1,alert("您的【"+i.named+"】賬戶的登錄已過期！！！"),n.next=10,b.a._setAsync("invoice_user","");case 10:case"end":return n.stop()}},t,n)}))()}},actions:{},getters:{getUserName:function(e){var n=!0,t=b.a._get("invoice_user");return void 0==t||""==t||null==t?n=!1:(t=JSON.parse(t),e.isLogin=!0,e.named=t.named),function(t){return!(!n&&""==e.named)&&e.named}}},modules:{}}),I=t("mtWM"),H=t.n(I),M=(t("qb6w"),t("0PJy"),t("Bb4J"),t("5W1q"),t("7t+N"));t.n(M)()(".tool-tip").tooltip("show"),i.a.config.productionTip=!1,i.a.prototype.$utils=L.a,H.a.defaults.timeout=5e3,new i.a({el:"#app",router:w,store:W,components:{App:r},template:"<App/>"})},m2zM:function(e,n){},qb6w:function(e,n){},wYMm:function(e,n,t){"use strict";n.a={baseURL:"http://139.180.213.70",apiURL:"/api",delayTime:300,activeTime:1296e6}}},["NHnr"]);
//# sourceMappingURL=app.f2b3d39c479641c853a5.js.map