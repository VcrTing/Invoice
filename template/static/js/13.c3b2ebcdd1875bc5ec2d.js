webpackJsonp([13],{"4YG0":function(e,t){},"8lSH":function(e,t,r){"use strict";var s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fuild pdf-file-style p-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 text-center"},[e._t("header")],2),e._v(" "),r("div",{staticClass:"col-sm-12"},[r("table",{staticClass:"pdf-table-outter"},[r("tr",[r("td",{staticClass:"br-pdf br-r-none",attrs:{width:"68%"}},[e._t("membery")],2),e._v(" "),r("td",{staticClass:"br-pdf"},[e._t("msg")],2)])])]),e._v(" "),r("div",{staticClass:"col-sm-12"},[e._t("freights")],2),e._v(" "),r("div",{staticClass:"col-sm-12 mt-4"},[e._t("footer")],2)])])},staticRenderFns:[]};var i=r("VU/8")({name:"PrintPdfLayout"},s,!1,function(e){r("d4wO")},"data-v-f13cb01a",null);t.a=i.exports},d4wO:function(e,t){},t68P:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("/xUl"),i=r("NAQQ"),n=(r("5nBN"),r("wYMm"),r("Bmzg")),c=r("JSMz"),a=r("mz5e"),m=r("FHA3"),o=r("rBoy"),l=r("U5hB"),d=r("8lSH"),f={name:"PrintPricesPdf",components:{PdfFooter:c.a,PdfHeader:n.a,PdfPriceMember:a.a,PdfPriceMsg:m.a,PdfPricesFreight:o.a,Loading:l.a,PrintPdfLayout:d.a},data:function(){return{pcc_id:0,membery:null,prices:null,prices_content:[],prices_timed:null,prices_numed:null}},mounted:function(){var e=this,t=this.$route.query.pcc_id;s.a.prices_content.getOne(t).then(function(t){e.prices=t.price_collect,e.prices_timed=i.a.timed.ser_timed(e.prices.start_time,!1,!0),e.prices_numed=t.price_collect.num,e.membery=e.prices.membery,e.prices_content=JSON.parse(t.content),setTimeout(function(){print()},800)})}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("print-pdf-layout",[r("pdf-header",{attrs:{slot:"header"},slot:"header"},[e._v("報價單")]),e._v(" "),null!=e.membery?r("pdf-price-member",{attrs:{slot:"membery",member:e.membery},slot:"membery"}):e._e(),e._v(" "),null!=e.membery?r("pdf-price-msg",{attrs:{slot:"msg",member:e.membery,pricesTime:e.prices_timed,pricesNum:e.prices_numed},slot:"msg"}):e._e(),e._v(" "),this.prices_content.length>0?r("pdf-prices-freight",{attrs:{slot:"freights",freights:e.prices_content},slot:"freights"}):e._e(),e._v(" "),null!=e.membery?r("pdf-footer",{attrs:{slot:"footer",member:e.membery},slot:"footer"}):e._e()],1)},staticRenderFns:[]};var u=r("VU/8")(f,p,!1,function(e){r("4YG0")},"data-v-290b1cae",null);t.default=u.exports}});
//# sourceMappingURL=13.c3b2ebcdd1875bc5ec2d.js.map