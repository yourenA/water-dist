webpackJsonp([3],{1821:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r,d,i=a(49),s=n(i),u=a(26),o=n(u),p=a(133),c=n(p),f=a(12),m=n(f),h=a(85),y=n(h),g=a(65),v=n(g),_=a(77),b=n(_),E=a(29),R=n(E),C=a(1),k=n(C),w=a(6),V=n(w),S=a(2),x=n(S),q=a(5),F=n(q),I=a(3),M=n(I),P=a(4),N=n(P),z=a(13),D=n(z);a(50),a(27),a(134),a(15),a(86),a(66),a(80),a(30),a(14);var O=a(0),T=n(O),A=a(9),j=a(36),K=a(1827),L=n(K),J=a(405),Q=n(J),W=a(19),$=(l=(0,A.connect)(function(e){return{endpoints:e.endpoints,strategy:e.strategy}}),r=D.default.create(),l(d=r(d=function(e){function t(){var e,a,n,l;(0,x.default)(this,t);for(var r=arguments.length,d=Array(r),i=0;i<r;i++)d[i]=arguments[i];return a=n=(0,M.default)(this,(e=t.__proto__||(0,V.default)(t)).call.apply(e,[this].concat(d))),n.state={addInputValue:"",modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:""},n.handleFormReset=function(){(0,n.props.dispatch)({type:"strategy/fetch",payload:{endpoint_id:n.props.match.params.id}}),n.setState({page:1,query:"",started_at:"",ended_at:""})},n.handleSearch=function(e){(0,n.props.dispatch)({type:"strategy/fetch",payload:(0,k.default)({endpoint_id:n.props.match.params.id},e)}),n.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},n.handleModalVisible=function(e){n.setState({modalVisible:!!e})},n.handleModalEditVisible=function(e){n.setState({modalEditVisible:!!e})},n.handleAddInput=function(e){n.setState({addInputValue:e.target.value})},n.handleAdd=function(){var e=n,t=(0,W.convertPoliciesTopic)(n.formRef.props.form.getFieldsValue());console.log("formValues",t),n.props.dispatch({type:"strategy/add",payload:{data:(0,k.default)({},t,{endpoint_id:n.props.match.params.id})},callback:function(){R.default.success("\u6dfb\u52a0\u7b56\u7565\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"strategy/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},n.handleEdit=function(){var e=n,t=(0,W.convertPoliciesTopic)(n.editFormRef.props.form.getFieldsValue());console.log("formValues",t),n.props.dispatch({type:"strategy/edit",payload:{data:(0,k.default)({endpoint_id:n.props.match.params.id,id:n.state.editRecord.id},t)},callback:function(){R.default.success("\u4fee\u6539\u7b56\u7565\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"strategy/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},n.handleRemove=function(e){var t=n;n.props.dispatch({type:"strategy/remove",payload:{endpoint_id:n.props.match.params.id,id:e},callback:function(){R.default.success("\u5220\u9664\u7b56\u7565\u6210\u529f"),t.props.dispatch({type:"strategy/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},n.handPageChange=function(e){n.handleSearch({page:e,query:n.state.query,ended_at:n.state.ended_at,started_at:n.state.started_at})},n.handleTabChange=function(e){var t=n.props.dispatch;switch(e){case"device":t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/device"));break;case"identify":n.props.match.path.split("/")[4]!==e&&t({type:"identify/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/identify"));break;case"strategy":n.props.match.path.split("/")[4]!==e&&t({type:"strategy/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/strategy"));break;case"rule":n.props.match.path.split("/")[4]!==e&&t({type:"rule/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/rule"))}},l=a,(0,M.default)(n,l)}return(0,N.default)(t,e),(0,F.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"strategy/fetch",payload:{endpoint_id:this.props.match.params.id,page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.strategy,n=a.data,l=a.meta,r=a.loading,d=(t.endpoints.name,this.state),i=d.modalVisible,u=(d.selectedRowKeys,d.modalEditVisible),p=d.editRecord,f=[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u8bbe\u5907\u6570",dataIndex:"things_count"},{title:"\u4e3b\u9898",dataIndex:"description",render:function(e,t,a){var n="";return t.permissions.data.map(function(e,t){n=n+e.topic+"\t"}),T.default.createElement(b.default,{title:n},n&&n.length>30?n.substring(0,30)+"...":n)}},{title:"\u64cd\u4f5c",width:120,render:function(t,a,n){return T.default.createElement("p",null,T.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({editRecord:a,modalEditVisible:!0})}},"\u7f16\u8f91"),T.default.createElement("span",{className:"ant-divider"}),T.default.createElement(v.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},T.default.createElement("a",{href:""},"\u5220\u9664")))}}],h=[{title:"\u4e3b\u9898",dataIndex:"topic",key:"topic"},{title:"\u6743\u9650",dataIndex:"allow_publish",key:"allow_publish",render:function(e,t,a){return 1===t.allow_publish&&1===t.allow_subscribe?T.default.createElement("span",null,"\u8ba2\u9605+\u53d1\u5e03"):1===t.allow_publish?T.default.createElement("span",null,"\u53d1\u5e03"):1===t.allow_subscribe?T.default.createElement("span",null,"\u8ba2\u9605"):void 0}}],g=function(e){return T.default.createElement(y.default,{style:{width:"300px"},size:"small",rowKey:function(e){return e.id},columns:h,dataSource:e.permissions.data,bordered:!0,pagination:!1})};return T.default.createElement("div",null,T.default.createElement(o.default,{bordered:!1},T.default.createElement("div",{className:"tableList"},T.default.createElement("div",{className:"tableListForm"},T.default.createElement(Q.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),T.default.createElement("div",{className:"tableListOperator"},T.default.createElement(m.default,{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0)}},"\u521b\u5efa\u7b56\u7565")),T.default.createElement(y.default,{expandedRowRender:function(e){return g(e)},loading:r,rowKey:function(e){return e.id},dataSource:n,columns:f,pagination:!1}),T.default.createElement(c.default,{showQuickJumper:!0,className:"pagination",total:l.pagination.total,current:l.pagination.current_page,pageSize:l.pagination.per_page,onChange:this.handPageChange}))),T.default.createElement(s.default,{title:"\u521b\u5efa\u7b56\u7565",visible:i,onOk:this.handleAdd,onCancel:function(){return e.handleModalVisible()}},T.default.createElement(L.default,{wrappedComponentRef:function(t){return e.formRef=t}})),T.default.createElement(s.default,{key:Date.parse(new Date),title:"\u4fee\u6539\u7b56\u7565",visible:u,onOk:this.handleEdit,onCancel:function(){return e.handleModalEditVisible()}},T.default.createElement(L.default,{wrappedComponentRef:function(t){return e.editFormRef=t},editRecord:p})))}}]),t}(O.PureComponent))||d)||d);t.default=$,e.exports=t.default},1827:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(406),r=n(l),d=a(12),i=n(d),s=a(25),u=n(s),o=a(77),p=n(o),c=a(1),f=n(c),m=a(20),h=n(m),y=a(6),g=n(y),v=a(2),_=n(v),b=a(5),E=n(b),R=a(3),C=n(R),k=a(4),w=n(k),V=a(42),S=n(V),x=a(13),q=n(x);a(15),a(21),a(80),a(38),a(43),a(14);var F=a(0),I=n(F),M=a(19),P=q.default.Item,N=S.default.Option,z=function(e){function t(e){(0,_.default)(this,t);var a=(0,C.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.add=function(){a.uuid++;var e=a.props.form,t=e.getFieldValue("keys"),n=t.concat(a.uuid);e.setFieldsValue({keys:n})},a.remove=function(e){var t=a.props.form,n=t.getFieldValue("keys");t.setFieldsValue({keys:n.filter(function(t){return t!==e})})},a.handleSubmit=function(e){e.preventDefault();a.state.type;a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb((0,M.convertPoliciesTopic)(t))})},a.uuid=a.props.editRecord?a.props.editRecord.permissions.data.length-1:0,a.state={},a}return(0,w.default)(t,e),(0,E.default)(t,[{key:"render",value:function(){var e=this,t=this.props.editRecord,a={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:15,offset:5}}},l=this.props.form,r=l.getFieldDecorator,d=l.getFieldValue,s=[],o=t?t.permissions.data.length:0;if(t)for(var c in t.permissions.data)s.push(parseInt(c));r("keys",{initialValue:s});var m=d("keys"),y=m.map(function(l,d){var i=0===d?a:n,s="0";return t&&o>l&&(1===t.permissions.data[l].allow_publish&&1===t.permissions.data[l].allow_subscribe?s="2":1===t.permissions.data[l].allow_publish?s="1":1===t.permissions.data[l].allow_subscribe&&(s="0")),I.default.createElement(P,(0,f.default)({},i,{label:0===d?"\u4e3b\u9898":"",required:!0,key:l}),r("topics-"+l,{initialValue:t&&o>l?{name:t.permissions.data[l].topic,id:t.permissions.data[l].id,authority:s}:{name:"",authority:"0",id:null}})(I.default.createElement(D,null)),I.default.createElement(h.default,{style:{cursor:"pointer"},type:"minus-circle-o",onClick:function(){return e.remove(l)}}))});return I.default.createElement(q.default,{onSubmit:this.handleSubmit},I.default.createElement(P,(0,f.default)({},a,{label:I.default.createElement("span",null,"\u540d\u79f0\xa0",I.default.createElement(p.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},I.default.createElement(h.default,{type:"question-circle-o"})))}),r("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(I.default.createElement(u.default,{disabled:!!this.props.editRecord}))),y,I.default.createElement(P,n,I.default.createElement(i.default,{type:"primary",onClick:this.add,style:{width:"100%"}},I.default.createElement(h.default,{type:"plus"})," \u589e\u52a0\u4e3b\u9898")),this.props.addInDevice?I.default.createElement(P,{wrapperCol:{offset:13}},I.default.createElement(i.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),I.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null)}}]),t}(F.Component),D=function(e){function t(e){(0,_.default)(this,t);var a=(0,C.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));a.handleNumberChange=function(e){var t=e.target.value;"value"in a.props||a.setState({name:t}),a.triggerChange({name:t})},a.handleCurrencyChange=function(e){"value"in a.props||a.setState({authority:e}),a.triggerChange({authority:e})},a.triggerChange=function(e){var t=a.props.onChange;t&&t((0,r.default)({},a.state,e))};var n=a.props.value||{};return a.state={name:n.name||"",authority:n.authority||"0"},a}return(0,w.default)(t,e),(0,E.default)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var t=e.value;this.setState(t)}}},{key:"render",value:function(){var e=this.props.size,t=this.state;return I.default.createElement("span",null,I.default.createElement(u.default,{type:"text",size:e,value:t.name,onChange:this.handleNumberChange,style:{width:"45%",marginRight:"3%"}}),I.default.createElement(u.default,{type:"hidden"}),I.default.createElement(S.default,{value:t.authority,size:e,style:{width:"45%",marginRight:"2%"},onChange:this.handleCurrencyChange},I.default.createElement(N,{value:"0"},"\u8ba2\u9605"),I.default.createElement(N,{value:"1"},"\u53d1\u5e03"),I.default.createElement(N,{value:"2"},"\u8ba2\u9605+\u53d1\u5e03")))}}]),t}(I.default.Component),O=q.default.create()(z);t.default=O,e.exports=t.default}});