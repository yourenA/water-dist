webpackJsonp([6],{1541:function(e,t,a){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,s,u=a(21),l=d(u),o=a(93),i=d(o),p=a(40),c=d(p),f=a(27),h=d(f),m=a(63),g=d(m),y=a(67),_=d(y),v=a(163),E=d(v),b=a(30),S=d(b),q=a(1),R=d(q),V=a(8),k=d(V),C=a(2),x=d(C),F=a(5),N=d(F),P=a(3),I=d(P),M=a(4),w=d(M),j=a(13),A=d(j);a(22),a(94),a(41),a(29),a(64),a(68),a(239),a(31),a(14);var L=a(0),J=d(L),O=a(10),T=a(36),z=a(240),D=d(z),K=a(62),Q=(r=(0,O.connect)(function(e){return{usergroup:e.usergroup}}),n=A.default.create(),r(s=n(s=function(e){function t(){var e,a,d,r;(0,x.default)(this,t);for(var n=arguments.length,s=Array(n),u=0;u<n;u++)s[u]=arguments[u];return a=d=(0,I.default)(this,(e=t.__proto__||(0,k.default)(t)).call.apply(e,[this].concat(s))),d.state={modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:""},d.handleFormReset=function(){(0,d.props.dispatch)({type:"usergroup/fetch",payload:{}}),d.setState({page:1,query:"",started_at:"",ended_at:""})},d.handleSearch=function(e){(0,d.props.dispatch)({type:"usergroup/fetch",payload:(0,R.default)({},e)}),d.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},d.handleModalVisible=function(e){d.setState({modalVisible:!!e})},d.handleModalEditVisible=function(e){d.setState({modalEditVisible:!!e})},d.handleAddInput=function(e){d.setState({addInputValue:e.target.value})},d.handleAdd=function(){var e=d,t=(0,K.convertPoliciesTopic)(d.formRef.props.form.getFieldsValue());console.log("formValues",t),d.props.dispatch({type:"usergroup/add",payload:{data:(0,R.default)({},t)},callback:function(){S.default.success("\u6dfb\u52a0\u89c4\u5219\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"usergroup/fetch",payload:{query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},d.handleEdit=function(){var e=d,t=(0,K.convertPoliciesTopic)(d.editFormRef.props.form.getFieldsValue());console.log("formValues",t),d.props.dispatch({type:"usergroup/edit",payload:{data:(0,R.default)({id:d.state.editRecord.id},t)},callback:function(){S.default.success("\u4fee\u6539\u89c4\u5219\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"usergroup/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},d.handleEditStatus=function(e,t){var a=0;a=1===t?-1:1;var r=d;d.props.dispatch({type:"usergroup/editStatus",payload:{data:{id:e,status:a}},callback:function(){S.default.success("\u4fee\u6539\u72b6\u6001\u6210\u529f"),r.props.dispatch({type:"usergroup/fetch",payload:{query:r.state.query,started_at:r.state.started_at,ended_at:r.state.ended_at,page:r.state.page}})}})},d.handleRemove=function(e){var t=d;d.props.dispatch({type:"usergroup/remove",payload:{id:e},callback:function(){S.default.success("\u5220\u9664\u7528\u6237\u7ec4\u6210\u529f"),t.props.dispatch({type:"usergroup/fetch",payload:{query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},d.handPageChange=function(e){d.handleSearch({page:e,query:d.state.query,ended_at:d.state.ended_at,started_at:d.state.started_at})},r=a,(0,I.default)(d,r)}return(0,w.default)(t,e),(0,N.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"usergroup/fetch",payload:{page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.usergroup,d=a.data,r=a.meta,n=a.loading,s=t.dispatch,u=[{title:"\u540d\u79f0",dataIndex:"display_name"},{title:"\u63cf\u8ff0",dataIndex:"description",className:"description",render:function(e,t,a){return J.default.createElement(E.default,{title:e},e&&e.length>20?e.substring(0,20)+"...":e)}},{title:"\u72b6\u6001",dataIndex:"status",render:function(e,t,a){return J.default.createElement("span",null,J.default.createElement(_.default,{status:-1===e?"error":"success"}),t.status_explain)}},{title:"\u64cd\u4f5c",width:150,render:function(t,a,d){return J.default.createElement("p",null,J.default.createElement("a",{href:"javascript:;",onClick:function(){s(T.routerRedux.push("/system-management/usergroup/"+a.id))}},"\u7f16\u8f91"),J.default.createElement("span",{className:"ant-divider"}),J.default.createElement(g.default,{placement:"topRight",title:"\u786e\u5b9a\u8981"+(1===a.status?"\u7981\u7528":"\u542f\u7528")+"\u5417?",onConfirm:function(){return e.handleEditStatus(a.id,a.status)}},J.default.createElement("a",{href:"javascript:;"},1===a.status?"\u7981\u7528":"\u542f\u7528")),J.default.createElement("span",{className:"ant-divider"}),J.default.createElement(g.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},J.default.createElement("a",{href:""},"\u5220\u9664")))}}];return J.default.createElement("div",null,J.default.createElement(l.default,{bordered:!1},J.default.createElement("div",{className:"tableList"},J.default.createElement("div",{className:"tableListForm"},J.default.createElement(D.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),J.default.createElement("div",{className:"tableListOperator"},J.default.createElement(h.default,{icon:"plus",type:"primary",onClick:function(){return s(T.routerRedux.push("/system-management/usergroup/add"))}},"\u521b\u5efa\u7528\u6237\u7ec4")),J.default.createElement(c.default,{loading:n,rowKey:function(e){return e.id},dataSource:d,columns:u,pagination:!1}),J.default.createElement(i.default,{showQuickJumper:!0,className:"pagination",total:r.pagination.total,current:r.pagination.current_page,pageSize:r.pagination.per_page,onChange:this.handPageChange}))))}}]),t}(L.PureComponent))||s)||s);t.default=Q,e.exports=t.default}});