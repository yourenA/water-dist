webpackJsonp([5],{1926:function(e,t,a){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,l,i=a(31),s=d(i),u=a(227),p=d(u),o=a(98),c=d(o),f=a(14),m=d(f),h=a(65),_=d(h),y=a(67),g=d(y),v=a(83),E=d(v),b=a(28),S=d(b),R=a(1),k=d(R),q=a(6),x=d(q),V=a(2),F=d(V),M=a(5),C=d(M),D=a(3),I=d(D),P=a(4),Y=d(P),N=a(16),T=d(N);a(32),a(228),a(99),a(15),a(66),a(68),a(86),a(29),a(17);var w=a(0),j=d(w),L=a(8),A=a(37),O=a(1930),J=d(O),z=a(20),K=(n=(0,L.connect)(function(e){return{endpoints:e.endpoints,rule:e.rule}}),r=T.default.create(),n(l=r(l=function(e){function t(){var e,a,d,n;(0,F.default)(this,t);for(var r=arguments.length,l=Array(r),i=0;i<r;i++)l[i]=arguments[i];return a=d=(0,I.default)(this,(e=t.__proto__||(0,x.default)(t)).call.apply(e,[this].concat(l))),d.state={addInputValue:"",modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:""},d.handleFormReset=function(){(0,d.props.dispatch)({type:"rule/fetch",payload:{endpoint_id:d.props.match.params.id}}),d.setState({page:1,query:"",started_at:"",ended_at:""})},d.handleSearch=function(e){(0,d.props.dispatch)({type:"rule/fetch",payload:(0,k.default)({endpoint_id:d.props.match.params.id},e)}),d.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},d.handleModalVisible=function(e){d.setState({modalVisible:!!e})},d.handleModalEditVisible=function(e){d.setState({modalEditVisible:!!e})},d.handleAddInput=function(e){d.setState({addInputValue:e.target.value})},d.handleAdd=function(){var e=d,t=(0,z.convertPoliciesTopic)(d.formRef.props.form.getFieldsValue());console.log("formValues",t),d.props.dispatch({type:"rule/add",payload:{data:(0,k.default)({},t,{endpoint_id:d.props.match.params.id})},callback:function(){S.default.success("\u6dfb\u52a0\u89c4\u5219\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"rule/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},d.handleEdit=function(){var e=d,t=(0,z.convertPoliciesTopic)(d.editFormRef.props.form.getFieldsValue());console.log("formValues",t),d.props.dispatch({type:"rule/edit",payload:{data:(0,k.default)({endpoint_id:d.props.match.params.id,id:d.state.editRecord.id},t)},callback:function(){S.default.success("\u4fee\u6539\u89c4\u5219\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"rule/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},d.handleEditStatus=function(e,t){var a=0;a=1===t?-1:1;var n=d;d.props.dispatch({type:"rule/editStatus",payload:{data:{endpoint_id:d.props.match.params.id,id:e,status:a}},callback:function(){S.default.success("\u4fee\u6539\u72b6\u6001\u6210\u529f"),n.props.dispatch({type:"rule/fetch",payload:{endpoint_id:n.props.match.params.id,query:n.state.query,started_at:n.state.started_at,ended_at:n.state.ended_at,page:n.state.page}})}})},d.handleRemove=function(e){var t=d;d.props.dispatch({type:"rule/remove",payload:{endpoint_id:d.props.match.params.id,id:e},callback:function(){S.default.success("\u5220\u9664\u89c4\u5219\u6210\u529f"),t.props.dispatch({type:"rule/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},d.handPageChange=function(e){d.handleSearch({page:e,query:d.state.query,ended_at:d.state.ended_at,started_at:d.state.started_at})},n=a,(0,I.default)(d,n)}return(0,Y.default)(t,e),(0,C.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id;console.log("endpoint_id in manage",t),e({type:"rule/fetch",payload:{endpoint_id:t,page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.rule,d=a.data,n=a.meta,r=a.loading,l=(t.endpoints.name,t.dispatch),i=[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u63cf\u8ff0",dataIndex:"description",className:"description",render:function(e,t,a){return j.default.createElement(E.default,{title:e},e&&e.length>20?e.substring(0,20)+"...":e)}},{title:"\u72b6\u6001",dataIndex:"status",render:function(e,t,a){return-1===e?j.default.createElement("span",null,j.default.createElement(g.default,{status:"error"}),t.status_explain):1===e?j.default.createElement("span",null,j.default.createElement(g.default,{status:"processing"}),t.status_explain):void 0}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at"},{title:"\u64cd\u4f5c",width:150,render:function(t,a,d){return j.default.createElement("p",null,j.default.createElement("a",{href:"javascript:;",onClick:function(){l(A.routerRedux.push("/access-management/endpoints/"+e.props.match.params.id+"/rule/"+a.id))}},"\u7f16\u8f91"),j.default.createElement("span",{className:"ant-divider"}),j.default.createElement("a",{href:"javascript:;",onClick:function(){e.handleEditStatus(a.id,a.status)}},1===a.status?"\u7981\u7528":"\u542f\u7528"),j.default.createElement("span",{className:"ant-divider"}),j.default.createElement(_.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},j.default.createElement("a",{href:""},"\u5220\u9664")))}}];return j.default.createElement("div",null,j.default.createElement(s.default,{bordered:!1},j.default.createElement("div",{className:"tableList"},j.default.createElement("div",{className:"tableListForm"},j.default.createElement(J.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),j.default.createElement("div",{className:"tableListOperator"},j.default.createElement(m.default,{icon:"plus",type:"primary",onClick:function(){return l(A.routerRedux.push("/access-management/endpoints/"+e.props.match.params.id+"/rule/add"))}},"\u521b\u5efa\u89c4\u5219")),j.default.createElement(c.default,{loading:r,rowKey:function(e){return e.id},dataSource:d,columns:i,pagination:!1}),j.default.createElement(p.default,{showQuickJumper:!0,className:"pagination",total:n.pagination.total,current:n.pagination.current_page,pageSize:n.pagination.per_page,onChange:this.handPageChange}))))}}]),t}(w.PureComponent))||l)||l);t.default=K,e.exports=t.default},1930:function(e,t,a){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(34),r=d(n),l=a(14),i=d(l),s=a(26),u=d(s),p=a(1),o=d(p),c=a(6),f=d(c),m=a(2),h=d(m),_=a(5),y=d(_),g=a(3),v=d(g),E=a(4),b=d(E),S=a(16),R=d(S),k=a(42),q=d(k);a(36),a(15),a(25),a(17),a(43);var x=a(0),V=d(x),F=a(18),M=d(F),C=q.default.RangePicker,D=R.default.Item,I=function(e){function t(e){(0,h.default)(this,t);var a=(0,v.default)(this,(t.__proto__||(0,f.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault();var t=a.props;t.dispatch;t.form.validateFields(function(e,t){if(!e){var d=t["range-time-picker"],n={query:t.query,started_at:d?(0,M.default)(d[0]).format("YYYY-MM-DD"):"",ended_at:d?(0,M.default)(d[1]).format("YYYY-MM-DD"):""};a.props.handleSearch((0,o.default)({},n,{page:1}))}})},a.handleFormReset=function(){a.props.form.resetFields(),a.props.handleFormReset()},a.state={},a}return(0,b.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return V.default.createElement(R.default,{onSubmit:this.handleSubmit,layout:"inline"},V.default.createElement(r.default,{gutter:{md:8,lg:24,xl:48}},V.default.createElement(D,{label:this.props.inputText?this.props.inputText:"\u540d\u79f0"},e("query")(V.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165"}))),V.default.createElement(D,{label:this.props.dateText?this.props.dateText:"\u521b\u5efa\u65f6\u95f4"},e("range-time-picker",{initialValue:this.props.initRange?this.props.initRange:""})(V.default.createElement(C,{allowClear:!this.props.initRange}))),V.default.createElement(D,null,V.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),V.default.createElement(i.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))))}}]),t}(x.Component),P=R.default.create()(I);t.default=P,e.exports=t.default}});