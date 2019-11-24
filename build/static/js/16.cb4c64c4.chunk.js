(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[16],{1419:function(e,t,a){"use strict";var n=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(87)),c=n(a(68));var o=function(e,t){var a=function(t){return r.default.createElement(c.default,t,e)};return a.displayName="".concat(t,"Icon"),(a=(0,l.default)(a)).muiName="SvgIcon",a};t.default=o},1420:function(e,t,a){"use strict";var n=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(1419)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})),"ArrowDownward");t.default=l},1463:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a(394),o=a(11),i=a(12),s=a(15),u=a(14),d=a(16),m=a(2),h=a(78),p=a(17),f=a(30),g=a(395),E=a.n(g),b=a(271),v=a.n(b),y=a(200),O=a.n(y),S=a(204),C=a.n(S),w=a(202),P=a.n(w),x=a(203),j=a.n(x),A=a(201),k=a.n(A),T=a(6),N=a(52),M=[{id:"name",align:"left",disablePadding:!1,label:"OAB Staff Number",sort:!0},{id:"username",align:"left",disablePadding:!1,label:"Username",sort:!0},{id:"edit",align:"left",disablePadding:!1,label:"Edit",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"action",align:"left",disablePadding:!1,label:"Action",sort:!0}],D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedCategoriesMenu:null},a.createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a.openSelectedCategoriesMenu=function(e){a.setState({selectedCategoriesMenu:e.currentTarget})},a.closeSelectedCategoriesMenu=function(){a.setState({selectedCategoriesMenu:null})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.order,n=t.orderBy;return r.a.createElement(m.X,null,r.a.createElement(m.Z,{className:"h-64"},M.map((function(t){return r.a.createElement(m.W,{key:t.id,align:t.align,padding:t.disablePadding?"none":"default",sortDirection:n===t.id&&a},t.sort&&r.a.createElement(m.eb,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(m.ab,{active:n===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)))}),this)))}}]),t}(r.a.Component),R=Object(N.withStyles)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}),{withTheme:!0})(D),I=a(1420),_=a.n(I),B=a(55),W=a.n(B),U=a(36),q=a(96),G="[E-COMMERCE APP] GET CATEGORIES",L="[E-COMMERCE APP] SET CATEGORIES SEARCH TEXT";function z(){var e=W.a.get(q.a+"/sme/getallrm");return function(t){return e.then((function(e){t({type:G,payload:e.data})}))}}function F(e){var t=W.a.post(q.a+"/sme/updatestatus",e);return function(e){t.then((function(t){e(Object(U.B)({message:"Status Updated"})),e(z())}))}}function H(e){return{type:L,searchText:e.target.value}}var V="[E-COMMERCE APP] GET CATEGORY",J="[E-COMMERCE APP] SAVE CATEGORY";var Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={order:"asc",orderBy:null,selected:[],data:a.props.categories,page:0,rowsPerPage:10,anchorEl:null},a.handleAgree=function(){a.setState({open:!1}),console.log(a.state.status,a.state.smeId),a.props.changeStatus({smeId:a.state.smeId,status:a.state.status})},a.handleDisAgree=function(){a.setState({open:!1})},a.handleClickOpen=function(){a.setState({open:!0})},a.handleCloseDig=function(){a.setState({anchorEl:null,open:!0})},a.handleClose=function(e,t){a.setState({anchorEl:null,open:!0,status:t})},a.selectedSme=function(e){a.setState({smeId:e})},a.handleCloseMenu=function(e){a.setState({anchorEl:null})},a.handleClickAction=function(e){e.preventDefault()},a.handleClickActionAdmin=function(e){a.setState({anchorEl:e.currentTarget})},a.getFilteredArray=function(e,t){return 0===t.length?e:T.a.filter(e,(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},a.handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a.handleSelectAllClick=function(e){e.target.checked?a.setState((function(e){return{selected:a.state.data.map((function(e){return e.id}))}})):a.setState({selected:[]})},a.handleClick=function(e){a.props.history.push("/apps/users/edit/"+e._id)},a.handleCheck=function(e,t){var n=a.state.selected,r=n.indexOf(t),l=[];-1===r?l=l.concat(n,t):0===r?l=l.concat(n.slice(1)):r===n.length-1?l=l.concat(n.slice(0,-1)):r>0&&(l=l.concat(n.slice(0,r),n.slice(r+1))),a.setState({selected:l})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getCategories()}},{key:"componentDidUpdate",value:function(e,t){if(!T.a.isEqual(this.props.categories,e.categories)||!T.a.isEqual(this.props.searchText,e.searchText)){var a=this.getFilteredArray(this.props.categories,this.props.searchText);this.setState({data:a})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.order,n=t.orderBy,c=t.selected,o=t.rowsPerPage,i=t.page,s=t.data,u=t.anchorEl;return r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(l.o,{className:"flex-grow overflow-x-auto"},r.a.createElement(m.U,{className:"min-w-xl","aria-labelledby":"tableTitle"},r.a.createElement(R,{numSelected:c.length,order:a,orderBy:n,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:s.length}),r.a.createElement(m.V,null,T.a.orderBy(s,[function(e){switch(n){case"categories":return e.categories[0];default:return e[n]}}],[a]).slice(i*o,i*o+o).map((function(t){var a=e.isSelected(t._id);return r.a.createElement(m.Z,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,key:t._id,selected:a},r.a.createElement(m.W,{component:"th",scope:"row"},t.oabStaffNumber),r.a.createElement(m.W,{component:"th",scope:"row",align:"left"},t.userName),r.a.createElement(m.W,{component:"th",scope:"row",align:"left"},r.a.createElement("span",{onClick:function(a){return e.handleClick(t)}}," Edit ")),r.a.createElement(m.W,{component:"th",scope:"row",align:"left"},1===t.status?r.a.createElement(m.u,{className:"text-yellow text-20"},"remove_circle"):2===t.status?r.a.createElement(m.u,{className:"text-green text-20"},"check_circle"):r.a.createElement(m.u,{className:"text-red text-20"},"remove_circle")),r.a.createElement(m.W,{component:"th",scope:"row",align:"left"},r.a.createElement("div",null,r.a.createElement(m.v,{onClick:e.handleClickActionAdmin,"aria-label":"delete",size:"small"},r.a.createElement(_.a,{fontSize:"inherit",onClick:function(){return e.selectedSme(t._id)}})),r.a.createElement(E.a,{id:"simple-menu",anchorEl:u,open:Boolean(u),onClose:e.handleCloseMenu},r.a.createElement(v.a,{id:"Approved","data-status":"2","data-smeid":t.smeName,onClick:function(){return e.handleClose(t._id,"2")}},"Approve"),r.a.createElement(v.a,{id:"Rejected","data-status":"3","data-smeid":t.smeName,onClick:function(){return e.handleClose(t._id,"3")}},"Reject")))))}))))),r.a.createElement(m.Y,{component:"div",count:s.length,rowsPerPage:o,page:i,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}),r.a.createElement(O.a,{open:this.state.open,onClose:this.handleCloseDig,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(k.a,{id:"alert-dialog-title"},"Action Alert!"),r.a.createElement(P.a,null,r.a.createElement(j.a,{id:"alert-dialog-description"},"This action will change the SME user status. Do you want to proceed with action?")),r.a.createElement(C.a,null,r.a.createElement(m.c,{onClick:this.handleDisAgree,variant:"contained",color:"primary"},"Disagree"),r.a.createElement(m.c,{onClick:this.handleAgree,variant:"contained",color:"primary",autoFocus:!0},"Agree"))))}}]),t}(n.Component);var X=Object(h.g)(Object(f.a)((function(e){var t=e.SmeApp;return{categories:t.categories.data,searchText:t.categories.searchText}}),(function(e){return Object(p.c)({getCategories:z,changeStatus:F},e)}))(Y)),Z=a(21),K=a(22);var Q=Object(Z.b)((function(e){var t=e.SmeApp,a=e.fuse;return{searchText:t.categories.searchText,mainTheme:a.settings.mainTheme}}),(function(e){return Object(p.c)({setSearchText:H},e)}))((function(e){var t=e.setSearchText,a=e.searchText,n=e.mainTheme;return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.a,{animation:"transition.expandIn",delay:300},r.a.createElement(m.u,{className:"text-32 mr-0 sm:mr-12"},"shopping_basket")),r.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(m.fb,{className:"hidden sm:flex",variant:"h6"},"User"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(N.MuiThemeProvider,{theme:n},r.a.createElement(l.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement(m.J,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(m.u,{className:"mr-8",color:"action"},"search"),r.a.createElement(m.w,{placeholder:"Search",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:t}))))),r.a.createElement(l.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(m.c,{component:K.a,to:"/apps/users/new",className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Add New User"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))})),$=a(9);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object($.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae={data:[],searchText:""},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return te({},e,{data:t.payload});case L:return te({},e,{searchText:t.searchText});default:return e}};function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(a,!0).forEach((function(t){Object($.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ce={data:null},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:case J:return le({},e,{data:t.payload});default:return e}},ie=Object(p.d)({categories:ne,category:oe});t.default=Object(c.a)("SmeApp",ie)((function(){return r.a.createElement(l.m,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(Q,null),content:r.a.createElement(X,null),innerScroll:!0})}))}}]);