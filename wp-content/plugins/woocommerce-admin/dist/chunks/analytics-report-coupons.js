(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[11],{492:function(e,t,r){"use strict";r.r(t);var n=r(5),a=r.n(n),o=r(11),c=r.n(o),i=r(12),s=r.n(i),u=r(13),l=r.n(u),m=r(14),d=r.n(m),p=r(6),f=r.n(p),y=r(0),b=r(1),g=r.n(b),v=r(2),h=r(15),O=r(524),_=r(8),j=r.n(_),w=r(3),C=r(47),R=r(20),D=r(144),q=r(25),k=r(29),E=r(508),S=r(500);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var F=function(e){l()(r,e);var t=P(r);function r(){var e;return c()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(j()(e)),e.getRowsContent=e.getRowsContent.bind(j()(e)),e.getSummary=e.getSummary.bind(j()(e)),e}return s()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(v.__)("Coupon Code","woocommerce-admin"),key:"code",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(v.__)("Orders","woocommerce-admin"),key:"orders_count",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(v.__)("Amount Discounted","woocommerce-admin"),key:"amount",isSortable:!0,isNumeric:!0},{label:Object(v.__)("Created","woocommerce-admin"),key:"created"},{label:Object(v.__)("Expires","woocommerce-admin"),key:"expires"},{label:Object(v.__)("Type","woocommerce-admin"),key:"type"}]}},{key:"getRowsContent",value:function(e){var t=this,r=this.props.query,n=Object(R.getPersistedQuery)(r),a=Object(q.g)("dateFormat",k.defaultTableDateFormat),o=this.context,c=o.formatAmount,i=o.formatDecimal,s=o.getCurrencyConfig;return Object(w.map)(e,(function(e){var r=e.amount,o=e.coupon_id,u=e.orders_count,l=e.extended_info||{},m=l.code,d=l.date_created,p=l.date_expires,f=l.discount_type,b=o>0?Object(R.getNewPath)(n,"/analytics/coupons",{filter:"single_coupon",coupons:o}):null,g=null===b?m:Object(y.createElement)(C.Link,{href:b,type:"wc-admin"},m),h=o>0?Object(R.getNewPath)(n,"/analytics/orders",{filter:"advanced",coupon_includes:o}):null;return[{display:g,value:m},{display:null===h?u:Object(y.createElement)(C.Link,{href:h,type:"wc-admin"},Object(D.formatValue)(s(),"number",u)),value:u},{display:c(r),value:i(r)},{display:d?Object(y.createElement)(C.Date,{date:d,visibleFormat:a}):Object(v.__)("N/A","woocommerce-admin"),value:d},{display:p?Object(y.createElement)(C.Date,{date:p,visibleFormat:a}):Object(v.__)("N/A","woocommerce-admin"),value:p},{display:t.getCouponType(f),value:f}]}))}},{key:"getSummary",value:function(e){var t=e.coupons_count,r=void 0===t?0:t,n=e.orders_count,a=void 0===n?0:n,o=e.amount,c=void 0===o?0:o,i=this.context,s=i.formatAmount,u=(0,i.getCurrencyConfig)();return[{label:Object(v._n)("coupon","coupons",r,"woocommerce-admin"),value:Object(D.formatValue)(u,"number",r)},{label:Object(v._n)("order","orders",a,"woocommerce-admin"),value:Object(D.formatValue)(u,"number",a)},{label:Object(v.__)("amount discounted","woocommerce-admin"),value:s(c)}]}},{key:"getCouponType",value:function(e){return{percent:Object(v.__)("Percentage","woocommerce-admin"),fixed_cart:Object(v.__)("Fixed cart","woocommerce-admin"),fixed_product:Object(v.__)("Fixed product","woocommerce-admin")}[e]||Object(v.__)("N/A","woocommerce-admin")}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,n=e.isRequesting,a=e.query;return Object(y.createElement)(E.a,{compareBy:"coupons",endpoint:"coupons",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["coupons_count","orders_count","amount"],isRequesting:n,itemIdField:"coupon_id",query:a,searchBy:"coupons",tableQuery:{orderby:a.orderby||"orders_count",order:a.order||"desc",extended_info:!0},title:Object(v.__)("Coupons","woocommerce-admin"),columnPrefsKey:"coupons_report_columns",filters:r,advancedFilters:t})}}]),r}(y.Component);F.contextType=S.a;var T=F,A=r(505),x=r(504),N=r(506),L=r(507),M=r(74);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var H=function(e){l()(r,e);var t=I(r);function r(){return c()(this,r),t.apply(this,arguments)}return s()(r,[{key:"getChartMeta",value:function(){var e=this.props.query,t="compare-coupons"===e.filter&&e.coupons&&e.coupons.split(",").length>1?"item-comparison":"time-comparison";return{itemsLabel:Object(v.__)("%d coupons","woocommerce-admin"),mode:t}}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,n=e.path,o=e.addCesSurveyForAnalytics,c=this.getChartMeta(),i=c.mode,s=c.itemsLabel;O.c[0].filters.find((function(e){return"compare-coupons"===e.value})).settings.onClick=o;var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return"item-comparison"===i&&(u.segmentby="coupon"),Object(y.createElement)(y.Fragment,null,Object(y.createElement)(L.a,{query:r,path:n,filters:O.c,advancedFilters:O.a,report:"coupons"}),Object(y.createElement)(N.a,{charts:O.b,endpoint:"coupons",isRequesting:t,query:u,selectedChart:Object(A.a)(r.chart,O.b),filters:O.c,advancedFilters:O.a}),Object(y.createElement)(x.a,{charts:O.b,filters:O.c,advancedFilters:O.a,mode:i,endpoint:"coupons",path:n,query:u,isRequesting:t,itemsLabel:s,selectedChart:Object(A.a)(r.chart,O.b)}),Object(y.createElement)(T,{isRequesting:t,query:r,filters:O.c,advancedFilters:O.a}))}}]),r}(y.Component);H.propTypes={query:g.a.object.isRequired};t.default=Object(h.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(M.c).addCesSurveyForAnalytics}}))(H)},502:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return y})),r.d(t,"f",(function(){return b})),r.d(t,"h",(function(){return g})),r.d(t,"g",(function(){return v}));var n=r(23),a=r(27),o=r.n(a),c=r(3),i=r(20),s=r(22),u=r(25),l=r(503);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,c="function"==typeof e?e(a):e,s=Object(i.getIdsFromQuery)(r);if(s.length<1)return Promise.resolve([]);var u={include:s.join(","),per_page:s.length};return o()({path:Object(n.addQueryArgs)(c,u)}).then((function(e){return e.map(t)}))}}m(s.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var d=m(s.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),p=m(s.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),f=m(s.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),y=m(s.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),b=m(s.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}}));function g(e){var t=e.attributes,r=e.name,n=Object(u.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(n)>-1)return r;var a=t.map((function(e){return e.option})).join(", ");return a?r+n+a:r}var v=m((function(e){var t=e.products;return t?s.NAMESPACE+"/products/".concat(t,"/variations"):s.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:g(e)}}))},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(2);function a(e){return[e.country,e.state,e.name||Object(n.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},504:function(e,t,r){"use strict";var n=r(5),a=r.n(n),o=r(11),c=r.n(o),i=r(12),s=r.n(i),u=r(13),l=r.n(u),m=r(14),d=r.n(m),p=r(6),f=r.n(p),y=r(0),b=r(2),g=r(18),v=r(73),h=r(15),O=r(3),_=r(1),j=r.n(_),w=r(47),C=r(22),R=r(29),D=r(500),q=r(501),k=r(20);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var F=function(e){l()(r,e);var t=P(r);function r(){return c()(this,r),t.apply(this,arguments)}return s()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(O.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var n=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:n,value:e.subtotals[r.key]||0}}})),S({date:Object(v.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,n=e.secondaryData,a=e.selectedChart,o=e.defaultDateRange,c=Object(R.getIntervalForQuery)(t),i=Object(R.getCurrentDates)(t,o),s=i.primary,u=i.secondary;return r.data.intervals.map((function(e,r){var o=Object(R.getPreviousDate)(e.date_start,s.after,u.after,t.compare,c),i=n.data.intervals[r];return{date:Object(v.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:e.date_start,value:e.subtotals[a.key]||0},secondary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[a.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,n=e.selectedChart;return{primary:Object(O.get)(t,["data","totals",n.key],null),secondary:Object(O.get)(r,["data","totals",n.key],null)}}},{key:"renderChart",value:function(e,t,r,n){var a=this.props,o=a.emptySearchResults,c=a.filterParam,i=a.interactiveLegend,s=a.itemsLabel,u=a.legendPosition,l=a.path,m=a.query,d=a.selectedChart,p=a.showHeaderControls,f=a.primaryData,g=Object(R.getIntervalForQuery)(m),v=Object(R.getAllowedIntervalsForQuery)(m),h=Object(R.getDateFormatsForInterval)(g,f.data.intervals.length),O=o?Object(b.__)("No data for the current search","woocommerce-admin"):Object(b.__)("No data for the selected date range","woocommerce-admin"),_=this.context,j=_.formatAmount,D=_.getCurrencyConfig;return Object(y.createElement)(w.Chart,{allowedIntervals:v,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:O,filterParam:c,interactiveLegend:i,interval:g,isRequesting:t,itemsLabel:s,legendPosition:u,legendTotals:n,mode:e,path:l,query:m,screenReaderFormat:h.screenReaderFormat,showHeaderControls:p,title:d.label,tooltipLabelFormat:h.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(C.getTooltipValueFormat)(d.type,j),chartType:Object(R.getChartTypeForQuery)(m),valueType:d.type,xFormat:h.xFormat,x2Format:h.x2Format,currency:D()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(y.createElement)(q.a,{isError:!0});var n=t||r.isRequesting,a=this.getItemChartData();return this.renderChart("item-comparison",n,a)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,n=e.secondaryData;if(!r||r.isError||n.isError)return Object(y.createElement)(q.a,{isError:!0});var a=t||r.isRequesting||n.isRequesting,o=this.getTimeChartData(),c=this.getTimeChartTotals();return this.renderChart("time-comparison",a,o,c)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(y.Component);F.contextType=D.a,F.propTypes={filters:j.a.array,isRequesting:j.a.bool,itemsLabel:j.a.string,limitProperties:j.a.array,mode:j.a.string,path:j.a.string.isRequired,primaryData:j.a.object,query:j.a.object.isRequired,secondaryData:j.a.object,selectedChart:j.a.shape({key:j.a.string.isRequired,label:j.a.string.isRequired,order:j.a.oneOf(["asc","desc"]),orderby:j.a.string,type:j.a.oneOf(["average","number","currency"]).isRequired}).isRequired},F.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(g.compose)(Object(h.withSelect)((function(e,t){var r=t.charts,n=t.endpoint,a=t.filters,o=t.isRequesting,c=t.limitProperties,i=t.query,s=t.advancedFilters,u=c||[n],l=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var a=t.slice(0),o=a.pop();if(o.showFilters(r,n)){var c=Object(k.flattenFilters)(o.filters),i=r[o.param]||o.defaultValue||"all";return Object(O.find)(c,{value:i})}return e(a,r,n)}(a,i),m=Object(O.get)(l,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(O.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(O.get)(e,["chartMode"])}return null}(l,i)||"time-comparison",p=e(C.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,f={mode:d,filterParam:m,defaultDateRange:p};if(o)return f;var y=u.some((function(e){return i[e]&&i[e].length}));if(i.search&&!y)return S(S({},f),{},{emptySearchResults:!0});var b=r&&r.map((function(e){return e.key})),g=Object(C.getReportChartData)({endpoint:n,dataType:"primary",query:i,select:e,limitBy:u,filters:a,advancedFilters:s,defaultDateRange:p,fields:b});if("item-comparison"===d)return S(S({},f),{},{primaryData:g});var v=Object(C.getReportChartData)({endpoint:n,dataType:"secondary",query:i,select:e,limitBy:u,filters:a,advancedFilters:s,defaultDateRange:p,fields:b});return S(S({},f),{},{primaryData:g,secondaryData:v})})))(F)},505:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(3);function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.find)(t,{key:e});return r||t[0]}},506:function(e,t,r){"use strict";var n=r(11),a=r.n(n),o=r(12),c=r.n(o),i=r(13),s=r.n(i),u=r(14),l=r.n(u),m=r(6),d=r.n(m),p=r(0),f=r(2),y=r(18),b=r(15),g=r(1),v=r.n(g),h=r(20),O=r(47),_=r(144),j=r(22),w=r(29),C=r(28),R=r(501),D=r(500);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var a=d()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var k=function(e){s()(r,e);var t=q(r);function r(){return a()(this,r),t.apply(this,arguments)}return c()(r,[{key:"formatVal",value:function(e,t){var r=this.context,n=r.formatAmount,a=r.getCurrencyConfig;return"currency"===t?n(e):Object(_.formatValue)(a(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,n=r.emptySearchResults,a=r.summaryData.totals,o=a.primary?a.primary[e]:0,c=a.secondary?a.secondary[e]:0,i=n?0:o,s=n?0:c;return{delta:Object(_.calculateDelta)(i,s),prevValue:this.formatVal(s,t),value:this.formatVal(i,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,n=t.query,a=t.selectedChart,o=t.summaryData,c=t.endpoint,i=t.report,s=t.defaultDateRange,u=o.isError,l=o.isRequesting;if(u)return Object(p.createElement)(R.a,{isError:!0});if(l)return Object(p.createElement)(O.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(w.getDateParamsFromQuery)(n,s).compare;return Object(p.createElement)(O.SummaryList,null,(function(t){var n=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,s=t.orderby,u=t.label,l=t.type,d={chart:r};s&&(d.orderby=s),o&&(d.order=o);var y=Object(h.getNewPath)(d),b=a.key===r,g=e.getValues(r,l),v=g.delta,_=g.prevValue,j=g.value;return Object(p.createElement)(O.SummaryNumber,{key:r,delta:v,href:y,label:u,prevLabel:"previous_period"===m?Object(f.__)("Previous Period:","woocommerce-admin"):Object(f.__)("Previous Year:","woocommerce-admin"),prevValue:_,selected:b,value:j,onLinkClickCallback:function(){n&&n(),Object(C.recordEvent)("analytics_chart_tab_click",{report:i||c,key:r})}})}))}))}}]),r}(p.Component);k.propTypes={charts:v.a.array.isRequired,endpoint:v.a.string.isRequired,limitProperties:v.a.array,query:v.a.object.isRequired,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:v.a.object,report:v.a.string},k.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},k.contextType=D.a,t.a=Object(y.compose)(Object(b.withSelect)((function(e,t){var r=t.charts,n=t.endpoint,a=t.limitProperties,o=t.query,c=t.filters,i=t.advancedFilters,s=a||[n],u=s.some((function(e){return o[e]&&o[e].length}));if(o.search&&!u)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),m=e(j.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(j.getSummaryNumbers)({endpoint:n,query:o,select:e,limitBy:s,filters:c,advancedFilters:i,defaultDateRange:m,fields:l}),defaultDateRange:m}})))(k)},524:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s}));var n=r(2),a=r(42),o=r(502),c=Object(a.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:Object(n.__)("Discounted Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:Object(n.__)("Amount","woocommerce-admin"),order:"desc",orderby:"amount",type:"currency"}]),i=Object(a.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:Object(n.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(n.__)("All Coupons","woocommerce-admin"),value:"all"},{label:Object(n.__)("Single Coupon","woocommerce-admin"),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:o.b,labels:{placeholder:Object(n.__)("Type to search for a coupon","woocommerce-admin"),button:Object(n.__)("Single Coupon","woocommerce-admin")}}}]},{label:Object(n.__)("Comparison","woocommerce-admin"),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:o.b,labels:{title:Object(n.__)("Compare Coupon Codes","woocommerce-admin"),update:Object(n.__)("Compare","woocommerce-admin"),helpText:Object(n.__)("Check at least two coupon codes below to compare","woocommerce-admin")}}}]}]),s=Object(a.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{})}}]);