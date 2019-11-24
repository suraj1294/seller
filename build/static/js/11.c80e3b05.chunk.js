(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[11],{1417:function(e,t,a){"use strict";var n=a(55),r=a.n(n),i=a(36),o=a(96),l="[E-COMMERCE APP] GET PRODUCTS",c="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function u(e){var t;return t=r.a.get(o.a+"/product?createdBy="+e),function(e){return t.then((function(t){e({type:l,payload:t.data})}))}}function s(e,t){var a=r.a.post(o.a+"/product/updatestatus",e);return function(e){a.then((function(a){e(Object(i.B)({message:"Status Updated"})),e(u(t))}))}}function d(e,t){var a=r.a.post(o.a+"/product/updateapprove",e);return function(e){a.then((function(a){e(Object(i.B)({message:"Status Updated"})),e(u(t))}))}}function m(e){return{type:c,searchText:e.target.value}}var p=a(10),f="[E-COMMERCE APP] GET PRODUCT",h="[E-COMMERCE APP] SAVE PRODUCT",g="[E-COMMERCE APP] GET CATS";function b(e){var t=e.productId,a=r.a.get(o.a+"/product/"+t);return function(e){return a.then((function(t){e({type:f,payload:t.data[0]})}))}}function v(e){var t=r.a.get(o.a+"/productcategory?listingType="+e);return function(e){return t.then((function(t){var a=t.data.map((function(e){return{value:e.name,label:e.name}}));e({type:g,payload:a})}))}}function y(e){var t=r.a.post(o.a+"/product/create",e);return function(e){return t.then((function(t){return e(Object(i.B)({message:"Product Saved"})),e(function(e){var t=r.a.post(o.a+"/dashboard/create",{productId:e._id,productOwnerId:e.createdBy,analytic:"PRODUCT_ADDED"});return function(e){return t.then((function(t){return e({type:"TES-TST",payload:t.data})}))}}(t.data)),e({type:h,payload:t.data})}))}}function E(e){var t=r.a.put(o.a+"/product/"+e._id,e);return function(e){return t.then((function(t){return e(Object(i.B)({message:"Product Saved"})),e({type:h,payload:t.data})}))}}function O(e){var t={id:p.v.generateGUID(),uuid:e,name:"",handle:"",description:"",categories:[],tags:[],images:[],price:"",listingType:"service",starRating:0,discount:5,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",status:1};return{type:f,payload:t}}var P="[E-COMMERCE APP] GET CATEGORIES",C="[E-COMMERCE APP] SET CATEGORIES SEARCH TEXT";var w="[E-COMMERCE APP] GET CATEGORY",j="[E-COMMERCE APP] SAVE CATEGORY";a.d(t,"f",(function(){return l})),a.d(t,"j",(function(){return c})),a.d(t,"a",(function(){return"[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT"})),a.d(t,"o",(function(){return u})),a.d(t,"k",(function(){return s})),a.d(t,"l",(function(){return d})),a.d(t,"s",(function(){return m})),a.d(t,"e",(function(){return f})),a.d(t,"h",(function(){return h})),a.d(t,"d",(function(){return g})),a.d(t,"n",(function(){return b})),a.d(t,"m",(function(){return v})),a.d(t,"r",(function(){return y})),a.d(t,"q",(function(){return E})),a.d(t,"p",(function(){return O})),a.d(t,"b",(function(){return P})),a.d(t,"i",(function(){return C})),a.d(t,"c",(function(){return w})),a.d(t,"g",(function(){return j}))},1421:function(e,t,a){"use strict";var n=a(17),r=a(9),i=a(1417);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={data:[],searchText:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.f:return l({},e,{data:t.payload});case i.j:return l({},e,{searchText:t.searchText});case i.a:return l({},e,{data:t.payload});default:return e}};function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={data:null,categories:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.e:case i.h:return d({},e,{data:t.payload});case i.d:return d({},e,{categories:t.payload});default:return e}};function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={data:[],searchText:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return h({},e,{data:t.payload});case i.i:return h({},e,{searchText:t.searchText});default:return e}};function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={data:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.c:case i.g:return y({},e,{data:t.payload});default:return e}},P=Object(n.d)({products:u,product:p,categories:b,category:O});t.a=P},1453:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(9),i=a(11),o=a(12),l=a(15),c=a(14),u=a(16),s=a(0),d=a.n(s),m=a(2),p=a(52),f=a(10),h=a(54),g=a(22),b=a(78),v=a(17),y=a(30),E=a(4),O=a.n(E),P=a(6),C=a(394),w=a(1417),j=a(1421),S=a(177),T=a.n(S),x=a(205),F=a.n(x),N=a(176),D=a.n(N),I=a(174),R=a.n(I),k=a(175),A=a.n(k);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={tabValue:0,form:null},a.updateFormState=function(){a.setState({form:a.props.product.data})},a.addField=function(){var e=Math.round(20*Math.random()),t={id:e,labelField:{fieldType:"text",fieldvalue:""},valueField:{fieldType:"text",fieldvalue:""}},r=a.state.form.additionalFields;!r||r.length<=0?a.setState((function(e){return{form:U({},e.form,{additionalFields:[t]})}})):r.findIndex((function(t){return e===t.id}))>-1?a.addField():a.setState((function(e){return{form:U({},e.form,{additionalFields:[].concat(Object(n.a)(e.form.additionalFields),[t])})}}))},a.removeField=function(e){var t=a.state.form.additionalFields.filter((function(t,a){return a!==e}));a.setState((function(e){return{form:U({},e.form,{additionalFields:t})}}))},a.renderFields=function(){var e=a.state.form.additionalFields;if(e)return e.map((function(e,t){var n="lable "+t.toString(),r="value "+t.toString(),i=e.labelField.fieldvalue||"",o=e.valueField.fieldvalue||"";return d.a.createElement("div",{className:"flex",key:t},d.a.createElement(m.cb,{className:"mt-8 mb-16 mr-8",label:n,id:n,name:n,value:i,onChange:a.handleFieldChange,variant:"outlined",fullWidth:!0}),d.a.createElement(m.cb,{className:"mt-8 mb-16 mr-8",label:r,id:r,name:r,value:o,onChange:a.handleFieldChange,variant:"outlined",fullWidth:!0}),d.a.createElement("div",{className:"flex mt-8 mb-16 mr-8"},d.a.createElement(f.a,{animation:"transition.slideRightIn",delay:300},d.a.createElement(m.c,{className:"whitespace-no-wrap",variant:"contained",onClick:function(){a.removeField(t)}},"Remove -"))))}))},a.updateProductState=function(){var e=a.props.match.params;a.props.getProduct(e),a.props.getCats(a.state.listingType)},a.handleChangeTab=function(e,t){a.setState({tabValue:t})},a.handleFieldChange=function(e){var t=a.state.form.additionalFields,n=t.findIndex((function(t,a){return"lable "+a.toString()===e.target.name||"value "+a.toString()===e.target.name})),r=t.map((function(t,a){return n===a&&(e.target.name.indexOf("value")>-1&&(t.valueField.fieldvalue=e.target.value),e.target.name.indexOf("lable")>-1&&(t.labelField.fieldvalue=e.target.value)),t}));a.setState((function(e){return{form:U({},e.form,{additionalFields:r})}}))},a.handleChange=function(e){"listingType"===e.target.name&&a.props.getCats(e.target.value),"discount"===e.target.name&&e.target.value<5?alert("Discount can not be less than 5% \n Use arrow keys to change the discount"):"discount"===e.target.name&&e.target.value>20?alert("Discount can not be greater than 20% \n Use arrow keys to change the discount"):"price"===e.target.name&&""!==e.target.value&&e.target.value<1?alert("Price can not be less than 1 OMR"):"quantity"===e.target.name&&e.target.value<0?(e.preventDefault(),alert("Quantity should be greater than or equal to 0")):a.setState({form:P.a.set(U({},a.state.form),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)})},a.handleChipChange=function(e,t){a.setState({form:P.a.set(U({},a.state.form),t,e.map((function(e){return e.value})))})},a.handleChipChangeCat=function(e,t){a.setState({form:P.a.set(U({},a.state.form),t,e)})},a.addImage=function(e){if(e.target.files&&e.target.files[0]){var t=URL.createObjectURL(e.target.files[0]),r=a.state.form.images,i=(r&&r.length?[].concat(Object(n.a)(r),[{url:t}]):[{url:t}]).map((function(e,t){return{id:e.id?e.id:t.toString(),url:e.url,isFeatured:!1}}));a.setState((function(e){return{form:U({},e.form,{images:i})}}))}},a.setFeaturedImage=function(e){var t=a.state.form.images;if(t&&t.length){var n=t.map((function(t,a){return t.id===e?{id:t.id,url:t.url,isFeatured:!0}:{id:t.id,url:t.url,isFeatured:!1}}));a.setState((function(e){return{form:U({},e.form,{images:n})}}))}},a.saveEditProductData=function(e){""===e.price||e.price<=0?alert("Please add price"):a.props.saveEditProduct(e)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateProductState()}},{key:"componentDidUpdate",value:function(e,t,a){P.a.isEqual(this.props.location,e.location)||this.updateProductState(),(this.props.product.data&&!this.state.form||this.props.product.data&&this.state.form&&this.props.product.data.id!==this.state.form.id)&&this.updateFormState()}},{key:"canBeSubmitted",value:function(){return this.state.form.name.length>0&&!P.a.isEqual(this.props.product.data,this.state.form)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.tabValue,r=a.form;return d.a.createElement(f.m,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r&&d.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},d.a.createElement("div",{className:"flex flex-col items-start max-w-full"},d.a.createElement(f.a,{animation:"transition.slideRightIn",delay:300},d.a.createElement(m.fb,{className:"normal-case flex items-center sm:mb-12",component:g.a,role:"button",to:"/apps/products"},d.a.createElement(m.u,{className:"mr-4 text-20"},"arrow_back"),"Products")),d.a.createElement("div",{className:"flex items-center max-w-full"},d.a.createElement(f.a,{animation:"transition.expandIn",delay:300},r.images.length>0&&P.a.find(r.images,{isFeatured:!0})?d.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:P.a.find(r.images,{isFeatured:!0}).url,alt:r.name}):d.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:r.name})),d.a.createElement("div",{className:"flex flex-col min-w-0"},d.a.createElement(f.a,{animation:"transition.slideLeftIn",delay:300},d.a.createElement(m.fb,{className:"text-16 sm:text-20 truncate"},r.name?r.name:"New Product")),d.a.createElement(f.a,{animation:"transition.slideLeftIn",delay:300},d.a.createElement(m.fb,{variant:"caption"},"Product Detail"))))),d.a.createElement(f.a,{animation:"transition.slideRightIn",delay:300},d.a.createElement(m.c,{className:"whitespace-no-wrap",variant:"contained",disabled:!this.canBeSubmitted(),onClick:function(){return e.saveEditProductData(r)}},"Save"))),contentToolbar:d.a.createElement(m.bb,{value:n,onChange:this.handleChangeTab,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},d.a.createElement(m.T,{className:"h-64 normal-case",label:"Basic Info"}),d.a.createElement(m.T,{className:"h-64 normal-case",label:"Product Images"}),d.a.createElement(m.T,{className:"h-64 normal-case",label:"Pricing"}),d.a.createElement(m.T,{className:"h-64 normal-case",label:"Inventory"}),d.a.createElement(m.T,{className:"h-64 normal-case",label:"Shipping"}),d.a.createElement(m.T,{className:"h-64 normal-case",label:"Addional Fields"})),content:r&&d.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},0===n&&d.a.createElement("div",null,d.a.createElement("input",{type:"hidden",name:"uuid",value:this.props.user.uuid}),d.a.createElement(R.a,{component:"fieldset"},d.a.createElement(A.a,{component:"legend"},"Listing Type"),d.a.createElement(F.a,{"aria-label":"listing Type",name:"listingType",value:r.listingType,onChange:function(t){return e.handleChange(t)}},d.a.createElement(D.a,{value:"service",control:d.a.createElement(T.a,null),label:"Service"}),d.a.createElement(D.a,{value:"product",control:d.a.createElement(T.a,null),label:"Product"}))),d.a.createElement(m.cb,{className:"mt-8 mb-16",error:""===r.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:r.name,onChange:this.handleChange,variant:"outlined",fullWidth:!0}),d.a.createElement(m.cb,{className:"mt-8 mb-16",id:"description",name:"description",onChange:this.handleChange,label:"Description",type:"text",value:r.description,multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),d.a.createElement(f.d,{className:"mt-8 mb-24",value:r.categories.map((function(e){return{value:e,label:e}})),onChange:function(t){return e.handleChipChange(t,"categories")},placeholder:"Select multiple categories",textFieldProps:{label:"Categories",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0,options:this.props.product.categories}),d.a.createElement(f.d,{className:"mt-8 mb-16",value:r.tags.map((function(e){return{value:e,label:e}})),onChange:function(t){return e.handleChipChange(t,"tags")},placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0})),1===n&&d.a.createElement("div",null,d.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},d.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},r.images.map((function(a){return d.a.createElement("div",{onClick:function(){return e.setFeaturedImage(a.id)},className:O()(t.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer",a.isFeatured&&"featured"),key:a.id},d.a.createElement(m.u,{className:t.productImageFeaturedStar},"star"),d.a.createElement("img",{className:"max-w-none w-auto h-full",src:a.url,alt:"product"}))}))))),2===n&&d.a.createElement("div",null,d.a.createElement(m.cb,{className:"mt-8 mb-16",label:"Price",id:"price",name:"price",value:r.price,onChange:this.handleChange,InputProps:{startAdornment:d.a.createElement(m.x,{position:"start"},"OMR")},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0}),d.a.createElement(m.cb,{className:"mt-8 mb-16",label:"Discount",id:"discount",name:"discount",value:r.discount,onChange:this.handleChange,InputProps:{startAdornment:d.a.createElement(m.x,{position:"start"},"%")},type:"number",variant:"outlined",fullWidth:!0})),3===n&&d.a.createElement("div",null,d.a.createElement(m.cb,{className:"mt-8 mb-16",required:!0,label:"SKU",autoFocus:!0,id:"sku",name:"sku",value:r.sku,onChange:this.handleChange,variant:"outlined",fullWidth:!0,hidden:!0}),d.a.createElement(m.cb,{className:"mt-8 mb-16",label:"Quantity",id:"quantity",name:"quantity",value:r.quantity,onChange:this.handleChange,variant:"outlined",type:"number",fullWidth:!0})),4===n&&d.a.createElement("div",null,d.a.createElement("div",{className:"flex"},d.a.createElement(m.cb,{className:"mt-8 mb-16 mr-8",label:"Width",autoFocus:!0,id:"width",name:"width",value:r.width,onChange:this.handleChange,variant:"outlined",fullWidth:!0}),d.a.createElement(m.cb,{className:"mt-8 mb-16 mr-8",label:"Height",id:"height",name:"height",value:r.height,onChange:this.handleChange,variant:"outlined",fullWidth:!0}),d.a.createElement(m.cb,{className:"mt-8 mb-16 mr-8",label:"Depth",id:"depth",name:"depth",value:r.depth,onChange:this.handleChange,variant:"outlined",fullWidth:!0})),d.a.createElement(m.cb,{className:"mt-8 mb-16",label:"Weight",id:"weight",name:"weight",value:r.weight,onChange:this.handleChange,variant:"outlined",fullWidth:!0})),5===n&&d.a.createElement("div",null,this.renderFields(),d.a.createElement(f.a,{animation:"transition.slideRightIn",delay:300},d.a.createElement("div",{style:{"margin-bottom":10}},d.a.createElement(m.c,{className:"whitespace-no-wrap",variant:"contained",onClick:function(){e.addField()}},"Add +"))))),innerScroll:!0})}}]),t}(s.Component);t.default=Object(C.a)("ProductsApp",j.a)(Object(p.withStyles)((function(e){return{productImageFeaturedStar:{position:"absolute",top:0,right:0,color:h.orange[400],opacity:0},productImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{boxShadow:e.shadows[5],"& $productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $productImageFeaturedStar":{opacity:1},"&:hover $productImageFeaturedStar":{opacity:1}}}}}),{withTheme:!0})(Object(b.g)(Object(y.a)((function(e){var t=e.ProductsApp,a=e.auth;return{product:t.product,user:a.user,categories:t.categories}}),(function(e){return Object(v.c)({getProduct:w.n,saveEditProduct:w.q,getCats:w.m},e)}))(W))))}}]);