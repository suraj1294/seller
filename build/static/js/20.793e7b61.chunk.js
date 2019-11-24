(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[20],{1464:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(12),o=a(15),s=a(14),c=a(16),i=a(0),l=a.n(i),p=a(2),d=a(10),u=a(21),m=a(78),f=a(17),b=a(9),y=a(52),O=a(272),g=a(6),w=a(30);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={dataset:"2019"},a.setDataSet=function(e){a.setState({dataset:e})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.mainThemeDark,n=t.data,o=t.theme,s=this.state.dataset,c=g.a.merge({},n),i=c.datasets[s].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{borderColor:o.palette.secondary.main,backgroundColor:o.palette.secondary.main,pointBackgroundColor:o.palette.secondary.dark,pointHoverBackgroundColor:o.palette.secondary.main,pointBorderColor:o.palette.secondary.contrastText,pointHoverBorderColor:o.palette.secondary.contrastText})}));return l.a.createElement(y.MuiThemeProvider,{theme:r},l.a.createElement("div",{className:a.root},l.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},l.a.createElement(d.a,{delay:100},l.a.createElement("div",{className:"flex-col"},l.a.createElement(p.fb,{className:"h2"},"Leads"),l.a.createElement(p.fb,{className:"h5",color:"textSecondary"},"Unique Leads by month"))),l.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(c.datasets).map((function(t){return l.a.createElement(p.c,{key:t,className:"py-8 px-12",size:"small",onClick:function(){return e.setDataSet(t)},disabled:t===s},t)})))),l.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},l.a.createElement(O.c,{data:{labels:c.labels,datasets:i},options:c.options}))))}}]),t}(i.Component);var E=Object(y.withStyles)((function(e){return{root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)"}}}),{withTheme:!0})(Object(w.a)((function(e){return{mainThemeDark:e.fuse.settings.mainThemeDark}}))(v));function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var x=Object(y.withStyles)(null,{withTheme:!0})((function(e){var t=e.data,a=e.theme,r=t.datasets.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{borderColor:a.palette.secondary.main,backgroundColor:a.palette.secondary.main})}));return l.a.createElement(p.d,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},l.a.createElement("div",{className:"pr-16"},l.a.createElement(p.fb,{className:"h3",color:"textSecondary"},"Products/Service"),l.a.createElement(p.fb,{className:"text-56 font-300 leading-none mt-8"},t.conversion.value))),l.a.createElement("div",{className:"h-96 w-100-p"},l.a.createElement(O.a,{data:{labels:t.labels,datasets:r},options:t.options})))}));function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}Object(y.withStyles)(null,{withTheme:!0})(Object(u.b)((function(e){return{widgets:e.analyticsDashboardApp.widgets.data}}),(function(e){return Object(f.c)({},e)}))((function(e){var t=e.data,a=e.theme,r=t.datasets.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{borderColor:a.palette.secondary.main})}));return l.a.createElement(p.d,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"p-16 pb-0 flex flex-row items-end flex-wrap"},l.a.createElement("div",{className:"pr-16"},l.a.createElement(p.fb,{className:"h3",color:"textSecondary"},"Whish List"),l.a.createElement(p.fb,{className:"text-56 font-300 leading-none mt-8"},t.impressions.value)),l.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},l.a.createElement("div",{className:"flex flex-row items-center"},t.impressions.ofTarget>0&&l.a.createElement(p.u,{className:"text-green mr-4"},"trending_up"),t.impressions.ofTarget<0&&l.a.createElement(p.u,{className:"text-red mr-4"},"trending_down"),l.a.createElement(p.fb,null,t.impressions.ofTarget,"%")),l.a.createElement(p.fb,{className:"ml-4 whitespace-no-wrap"},"of target"))),l.a.createElement("div",{className:"h-96 w-100-p"},l.a.createElement(O.c,{data:{labels:t.labels,datasets:r},options:t.options})))})));function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var D=Object(y.withStyles)(null,{withTheme:!0})((function(e){var t=e.data,a=e.theme,r=t.datasets.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{borderColor:a.palette.error.main,backgroundColor:a.palette.error.main})}));return l.a.createElement(p.d,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"p-16 pb-0 flex flex-row items-end flex-wrap"},l.a.createElement("div",{className:"pr-16"},l.a.createElement(p.fb,{className:"h3",color:"textSecondary"},"Visits"),l.a.createElement(p.fb,{className:"text-56 font-300 leading-none mt-8"},t.visits.value))),l.a.createElement("div",{className:"h-96 w-100-p"},l.a.createElement(O.a,{data:{labels:t.labels,datasets:r},options:t.options})))})),N=a(394),S=a(55),T=a.n(S),k=a(96),C="[ANALYTICS DASHBOARD APP] GET WIDGETS",I="[ANALYTICS DASHBOARD APP] GET WIDGET1",W="[ANALYTICS DASHBOARD APP] GET WIDGET2",G="[ANALYTICS DASHBOARD APP] GET WIDGET3",B="[ANALYTICS DASHBOARD APP] GET WIDGET4";function L(){var e=T.a.get("/api/analytics-dashboard-app/widgets");return function(t){return e.then((function(e){return t({type:C,payload:e.data})}))}}function J(e){var t=T.a.get(k.a+"/dashboard/getallleads?analytic=LEADS&productOwnerId="+e),a={datasets:[],chartType:"line",labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],options:{spanGaps:!1,legend:{display:!1},maintainAspectRatio:!1,layout:{padding:{top:32,left:32,right:32}},elements:{point:{radius:4,borderWidth:2,hoverRadius:4,hoverBorderWidth:2},line:{tension:0}},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1,tickMarkLength:18},ticks:{fontColor:"#ffffff"}}],yAxes:[{display:!1,ticks:{min:20,max:0,stepSize:.5}}]},plugins:{filler:{propagate:!1},xLabelsOnTop:{active:!1}}}};return function(e){return t.then((function(t){a.datasets=t.data,e({type:I,payload:a})}))}}function R(e){var t=T.a.get(k.a+"/product/productcount?createdBy="+e),a={conversion:{value:492,ofTarget:13},chartType:"bar",datasets:[],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],options:{spanGaps:!1,legend:{display:!1},maintainAspectRatio:!1,layout:{padding:{top:24,left:16,right:16,bottom:16}},scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{min:0,max:20}}]}}};return function(e){return t.then((function(t){var r=t.data[0].data,n=0;r.forEach((function(e){n+=e})),a.conversion.value=n,a.datasets=t.data,e({type:W,payload:a})}))}}function M(e){var t=T.a.get(k.a+"/dashboard?analytic=VISIT&productOwnerId="+e),a={visits:{value:10,ofTarget:-9},chartType:"bar",datasets:[],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],options:{spanGaps:!1,legend:{display:!1},maintainAspectRatio:!1,layout:{padding:{top:24,left:16,right:16,bottom:16}},scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{min:0,max:10}}]}}};return function(e){return t.then((function(t){var r=t.data[0].data,n=0;r.forEach((function(e){n+=e})),a.visits.value=n,a.datasets=t.data,e({type:B,payload:a})}))}}function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U={data:null,wid1:null,wid2:null,wid3:null,wid4:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Y({},e,{data:Y({},t.payload)});case I:return Y({},e,{wid1:Y({},t.payload)});case W:return Y({},e,{wid2:Y({},t.payload)});case G:return Y({},e,{wid3:Y({},t.payload)});case B:return Y({},e,{wid4:Y({},t.payload)});default:return e}},V=Object(f.d)({widgets:F}),_=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user._id;this.props.getWidget1(e),this.props.getWidget2(e),this.props.getWidget4(e)}},{key:"render",value:function(){var e=this.props,t=e.wid1,a=e.wid2,r=e.wid4;return t&&a&&r?l.a.createElement("div",{className:"w-full"},t?l.a.createElement(E,{data:t}):null,l.a.createElement(d.a,{animation:"transition.slideUpIn",delay:200},l.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},l.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},l.a.createElement(d.a,{delay:600},l.a.createElement(p.fb,{className:"p-16 pb-8 text-18 font-300"},"How are your active users trending over time?")),l.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row pb-32"},l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-16"},a?l.a.createElement(x,{data:a}):null),l.a.createElement("div",{className:"widget w-full sm:w-1/2 p-16"},r?l.a.createElement(D,{data:r}):null)))))):null}}]),t}(i.Component);t.default=Object(N.a)("analyticsDashboardApp",V)(Object(m.g)(Object(u.b)((function(e){var t=e.analyticsDashboardApp,a=e.auth;return{widgets:t.widgets.data,wid1:t.widgets.wid1,wid2:t.widgets.wid2,wid4:t.widgets.wid4,user:a.user}}),(function(e){return Object(f.c)({getWidgets:L,getWidget1:J,getWidget2:R,getWidget4:M},e)}))(_)))}}]);