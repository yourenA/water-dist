webpackJsonp([6],{1646:function(e,t,a){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,s,l=a(22),i=d(l),p=a(97),u=d(p),o=a(42),c=d(o),f=a(25),m=d(f),h=a(64),_=d(h),y=a(68),g=d(y),v=a(173),E=d(v),b=a(32),S=d(b),q=a(1),V=d(q),R=a(7),k=d(R),x=a(2),C=d(x),F=a(5),I=d(F),N=a(3),P=d(N),M=a(4),w=d(M),j=a(14),A=d(j);a(23),a(98),a(43),a(27),a(65),a(69),a(249),a(33),a(15);var L=a(0),J=d(L),O=a(10),T=a(34),z=a(250),D=d(z),K=a(53),Q=(n=(0,O.connect)(function(e){return{endpoints:e.endpoints,rule:e.rule}}),r=A.default.create(),n(s=r(s=function(e){function t(){var e,a,d,n;(0,C.default)(this,t);for(var r=arguments.length,s=Array(r),l=0;l<r;l++)s[l]=arguments[l];return a=d=(0,P.default)(this,(e=t.__proto__||(0,k.default)(t)).call.apply(e,[this].concat(s))),d.state={addInputValue:"",modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:""},d.handleFormReset=function(){(0,d.props.dispatch)({type:"rule/fetch",payload:{endpoint_id:d.props.match.params.id}}),d.setState({page:1,query:"",started_at:"",ended_at:""})},d.handleSearch=function(e){(0,d.props.dispatch)({type:"rule/fetch",payload:(0,V.default)({endpoint_id:d.props.match.params.id},e)}),d.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},d.handleModalVisible=function(e){d.setState({modalVisible:!!e})},d.handleModalEditVisible=function(e){d.setState({modalEditVisible:!!e})},d.handleAddInput=function(e){d.setState({addInputValue:e.target.value})},d.handleAdd=function(){var e=d,t=(0,K.convertPoliciesTopic)(d.formRef.props.form.getFieldsValue());console.log("formValues",t),d.props.dispatch({type:"rule/add",payload:{data:(0,V.default)({},t,{endpoint_id:d.props.match.params.id})},callback:function(){S.default.success("\u6dfb\u52a0\u89c4\u5219\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"rule/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},d.handleEdit=function(){var e=d,t=(0,K.convertPoliciesTopic)(d.editFormRef.props.form.getFieldsValue());console.log("formValues",t),d.props.dispatch({type:"rule/edit",payload:{data:(0,V.default)({endpoint_id:d.props.match.params.id,id:d.state.editRecord.id},t)},callback:function(){S.default.success("\u4fee\u6539\u89c4\u5219\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"rule/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},d.handleEditStatus=function(e,t){var a=0;a=1===t?-1:1;var n=d;d.props.dispatch({type:"rule/editStatus",payload:{data:{endpoint_id:d.props.match.params.id,id:e,status:a}},callback:function(){S.default.success("\u4fee\u6539\u72b6\u6001\u6210\u529f"),n.props.dispatch({type:"rule/fetch",payload:{endpoint_id:n.props.match.params.id,query:n.state.query,started_at:n.state.started_at,ended_at:n.state.ended_at,page:n.state.page}})}})},d.handleRemove=function(e){var t=d;d.props.dispatch({type:"rule/remove",payload:{endpoint_id:d.props.match.params.id,id:e},callback:function(){S.default.success("\u5220\u9664\u89c4\u5219\u6210\u529f"),t.props.dispatch({type:"rule/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},d.handPageChange=function(e){d.handleSearch({page:e,query:d.state.query,ended_at:d.state.ended_at,started_at:d.state.started_at})},n=a,(0,P.default)(d,n)}return(0,w.default)(t,e),(0,I.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id;console.log("endpoint_id in manage",t),e({type:"rule/fetch",payload:{endpoint_id:t,page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.rule,d=a.data,n=a.meta,r=a.loading,s=(t.endpoints.name,t.dispatch),l=[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u63cf\u8ff0",dataIndex:"description",className:"description",render:function(e,t,a){return J.default.createElement(E.default,{title:e},e&&e.length>20?e.substring(0,20)+"...":e)}},{title:"\u72b6\u6001",dataIndex:"status",render:function(e,t,a){return-1===e?J.default.createElement("span",null,J.default.createElement(g.default,{status:"error"}),t.status_explain):1===e?J.default.createElement("span",null,J.default.createElement(g.default,{status:"processing"}),t.status_explain):void 0}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at"},{title:"\u64cd\u4f5c",width:150,render:function(t,a,d){return J.default.createElement("p",null,J.default.createElement("a",{href:"javascript:;",onClick:function(){s(T.routerRedux.push("/access-management/endpoints/"+e.props.match.params.id+"/rule/"+a.id))}},"\u7f16\u8f91"),J.default.createElement("span",{className:"ant-divider"}),J.default.createElement("a",{href:"javascript:;",onClick:function(){e.handleEditStatus(a.id,a.status)}},1===a.status?"\u7981\u7528":"\u542f\u7528"),J.default.createElement("span",{className:"ant-divider"}),J.default.createElement(_.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},J.default.createElement("a",{href:""},"\u5220\u9664")))}}];return J.default.createElement("div",null,J.default.createElement(i.default,{bordered:!1},J.default.createElement("div",{className:"tableList"},J.default.createElement("div",{className:"tableListForm"},J.default.createElement(D.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),J.default.createElement("div",{className:"tableListOperator"},J.default.createElement(m.default,{icon:"plus",type:"primary",onClick:function(){return s(T.routerRedux.push("/access-management/endpoints/"+e.props.match.params.id+"/rule/add"))}},"\u521b\u5efa\u89c4\u5219")),J.default.createElement(c.default,{loading:r,rowKey:function(e){return e.id},dataSource:d,columns:l,pagination:!1}),J.default.createElement(u.default,{showQuickJumper:!0,className:"pagination",total:n.pagination.total,current:n.pagination.current_page,pageSize:n.pagination.per_page,onChange:this.handPageChange}))))}}]),t}(L.PureComponent))||s)||s);t.default=Q,e.exports=t.default}});