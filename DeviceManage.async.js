webpackJsonp([0],{1536:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,d,i,r=a(53),s=n(r),u=a(21),o=n(u),p=a(93),c=n(p),f=a(40),m=n(f),h=a(27),y=n(h),g=a(63),_=n(g),v=a(67),E=n(v),b=a(163),R=n(b),S=a(30),k=n(S),w=a(1),C=n(w),V=a(8),x=n(V),I=a(2),q=n(I),F=a(5),M=n(F),D=a(3),O=n(D),z=a(4),N=n(z),P=a(13),j=n(P);a(54),a(22),a(94),a(41),a(29),a(64),a(68),a(239),a(31),a(14);var T=a(0),Y=n(T),A=a(10),L=a(15),$=n(L),H=a(36),J=a(240),K=n(J),Q=a(1546),W=n(Q),B=(l=(0,A.connect)(function(e){return{endpoints:e.endpoints,device:e.device,strategy:e.strategy,identify:e.identify}}),d=j.default.create(),l(i=d(i=function(e){function t(){var e,a,n,l;(0,q.default)(this,t);for(var d=arguments.length,i=Array(d),r=0;r<d;r++)i[r]=arguments[r];return a=n=(0,O.default)(this,(e=t.__proto__||(0,x.default)(t)).call.apply(e,[this].concat(i))),n.state={modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:"",endpointName:""},n.handleFormReset=function(){(0,n.props.dispatch)({type:"device/fetch",payload:{endpoint_id:n.props.match.params.id}}),n.setState({page:1,query:"",started_at:"",ended_at:""})},n.handleSearch=function(e){(0,n.props.dispatch)({type:"device/fetch",payload:(0,C.default)({endpoint_id:n.props.match.params.id},e)}),n.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at})},n.handleModalVisible=function(e){n.setState({modalVisible:!!e})},n.handleModalEditVisible=function(e){n.setState({modalEditVisible:!!e})},n.handleAdd=function(){var e=n,t=n.formRef.props.form.getFieldsValue();console.log("formValues",t),n.props.dispatch({type:"device/add",payload:{name:t.name,description:t.description,principal_id:t.identify.key,endpoint_id:n.props.match.params.id},callback:function(){k.default.success("\u6dfb\u52a0\u5b9e\u4f8b\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"device/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},n.handleEdit=function(){var e=n.editFormRef.props.form.getFieldsValue();console.log("formValues",e);var t=n;n.props.dispatch({type:"device/edit",payload:{id:n.state.editRecord.id,name:e.name,description:e.description,principal_id:e.identify.key,endpoint_id:n.props.match.params.id},callback:function(){k.default.success("\u4fee\u6539\u5b9e\u4f8b\u6210\u529f"),t.setState({modalEditVisible:!1}),t.props.dispatch({type:"device/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},n.handleRemove=function(e){var t=n;n.props.dispatch({type:"device/remove",payload:{endpoint_id:n.props.match.params.id,id:e},callback:function(){k.default.success("\u5220\u9664\u8bbe\u5907\u6210\u529f"),t.props.dispatch({type:"device/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},n.handPageChange=function(e){n.handleSearch({page:e,query:n.state.query,ended_at:n.state.ended_at,started_at:n.state.started_at})},n.handleTabChange=function(e){var t=n.props.dispatch;switch(e){case"device":t(H.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/device"));break;case"identify":n.props.match.path.split("/")[4]!==e&&t({type:"identify/reset"}),t(H.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/identify"));break;case"strategy":n.props.match.path.split("/")[4]!==e&&t({type:"strategy/reset"}),t(H.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/strategy"));break;case"rule":n.props.match.path.split("/")[4]!==e&&t({type:"rule/reset"}),t(H.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/rule"))}},l=a,(0,O.default)(n,l)}return(0,N.default)(t,e),(0,M.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id;e({type:"device/fetch",payload:{endpoint_id:t,page:1}}),e({type:"strategy/fetch",payload:{endpoint_id:t,return:"all"}}),e({type:"identify/fetch",payload:{endpoint_id:t,return:"all"}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.device,n=a.data,l=a.meta,d=a.loading,i=(t.endpoints.name,t.strategy),r=t.identify,u=this.state,p=u.modalVisible,f=u.modalEditVisible,h=u.editRecord,g=this.props.match.params.id,v=[{title:"\u8bbe\u5907\u540d\u79f0",dataIndex:"name"},{title:"\u7528\u6237\u540d",dataIndex:"username",render:function(e){return Y.default.createElement(R.default,{title:e},Y.default.createElement("p",null," ",e&&e.length>20?e.substring(0,20)+"...":e))}},{title:"\u8eab\u4efd",dataIndex:"principal_name"},{title:"\u7b56\u7565",dataIndex:"policy_name"},{title:"\u72b6\u6001",dataIndex:"status",render:function(e,t,a){return Y.default.createElement("span",null,Y.default.createElement(E.default,{status:-1===e?"error":"success"}),t.status_explain)}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at",render:function(e){return Y.default.createElement("span",null,(0,$.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u64cd\u4f5c",width:120,render:function(t,a,n){return Y.default.createElement("p",null,Y.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({editRecord:a,modalEditVisible:!0})}},"\u7f16\u8f91"),Y.default.createElement("span",{className:"ant-divider"}),Y.default.createElement(_.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},Y.default.createElement("a",{href:""},"\u5220\u9664")))}}],b=[{title:"\u4e3b\u9898",dataIndex:"topic",key:"topic"},{title:"\u6743\u9650",dataIndex:"allow_publish",key:"allow_publish",render:function(e,t,a){return 1===t.allow_publish&&1===t.allow_subscribe?Y.default.createElement("span",null,"\u8ba2\u9605+\u53d1\u5e03"):1===t.allow_publish?Y.default.createElement("span",null,"\u53d1\u5e03"):1===t.allow_subscribe?Y.default.createElement("span",null,"\u8ba2\u9605"):void 0}}],S=function(e){return Y.default.createElement("div",null,Y.default.createElement("p",{className:"small-table-desc"},Y.default.createElement("span",null,"\u63cf\u8ff0:"),e.description),Y.default.createElement(m.default,{style:{width:"300px"},size:"small",rowKey:function(e){return e.id},columns:b,dataSource:e.permissions.data,bordered:!0,pagination:!1}))};return Y.default.createElement("div",null,Y.default.createElement(o.default,{bordered:!1},Y.default.createElement("div",{className:"tableList"},Y.default.createElement("div",{className:"tableListForm"},Y.default.createElement(K.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),Y.default.createElement("div",{className:"tableListOperator"},Y.default.createElement(y.default,{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0)}},"\u6dfb\u52a0\u8bbe\u5907"),Y.default.createElement(y.default,{icon:"plus",type:"primary"},"\u6279\u91cf\u6dfb\u52a0\u8bbe\u5907")),Y.default.createElement(m.default,{expandedRowRender:function(e){return S(e)},loading:d,rowKey:function(e){return e.id},dataSource:n,columns:v,pagination:!1}),Y.default.createElement(c.default,{showQuickJumper:!0,className:"pagination",total:l.pagination.total,current:l.pagination.current_page,pageSize:l.pagination.per_page,style:{marginTop:"10px"},onChange:this.handPageChange}))),Y.default.createElement(s.default,{title:"\u521b\u5efa\u8bbe\u5907",visible:p,onOk:this.handleAdd,onCancel:function(){return e.handleModalVisible()}},Y.default.createElement(W.default,{endpoint_id:g,strategy:i.data,identify:r.data,wrappedComponentRef:function(t){return e.formRef=t}})),Y.default.createElement(s.default,{title:"\u4fee\u6539\u8bbe\u5907",visible:f,onOk:this.handleEdit,onCancel:function(){return e.handleModalEditVisible()}},Y.default.createElement(W.default,{editRecord:h,endpoint_id:g,strategy:i.data,identify:r.data,wrappedComponentRef:function(t){return e.editFormRef=t}})))}}]),t}(T.PureComponent))||i)||i);t.default=B,e.exports=t.default},1544:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(13),d=n(l),i=a(33),r=n(i),s=a(17),u=n(s),o=a(241),p=n(o),c=a(27),f=n(c),m=a(28),h=n(m),y=a(163),g=n(y),_=a(1),v=n(_),E=a(8),b=n(E),R=a(2),S=n(R),k=a(5),w=n(k),C=a(3),V=n(C),x=a(4),I=n(x);a(14),a(34),a(16),a(29),a(49),a(239);var q=a(0),F=n(q),M=a(62),D=d.default.Item,O=r.default.Option,z=function(e){function t(e){(0,S.default)(this,t);var a=(0,V.default)(this,(t.__proto__||(0,b.default)(t)).call(this,e));return a.add=function(){a.uuid++;var e=a.props.form,t=e.getFieldValue("keys"),n=t.concat(a.uuid);e.setFieldsValue({keys:n})},a.remove=function(e){var t=a.props.form,n=t.getFieldValue("keys");t.setFieldsValue({keys:n.filter(function(t){return t!==e})})},a.handleSubmit=function(e){e.preventDefault();a.state.type;a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb((0,M.convertPoliciesTopic)(t))})},a.uuid=a.props.editRecord?a.props.editRecord.permissions.data.length-1:0,a.state={},a}return(0,I.default)(t,e),(0,w.default)(t,[{key:"render",value:function(){var e=this,t=this.props.editRecord,a={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:15,offset:5}}},l=this.props.form,i=l.getFieldDecorator,r=l.getFieldValue,s=[],o=t?t.permissions.data.length:0;if(t)for(var p in t.permissions.data)s.push(parseInt(p));i("keys",{initialValue:s});var c=r("keys"),m=c.map(function(l,d){var r=0===d?a:n,s="0";return t&&o>l&&(1===t.permissions.data[l].allow_publish&&1===t.permissions.data[l].allow_subscribe?s="2":1===t.permissions.data[l].allow_publish?s="1":1===t.permissions.data[l].allow_subscribe&&(s="0")),F.default.createElement(D,(0,v.default)({},r,{label:0===d?"\u4e3b\u9898":"",required:!0,key:l}),i("topics-"+l,{initialValue:t&&o>l?{name:t.permissions.data[l].topic,id:t.permissions.data[l].id,authority:s}:{name:"",authority:"0",id:null}})(F.default.createElement(N,null)),F.default.createElement(h.default,{style:{cursor:"pointer"},type:"minus-circle-o",onClick:function(){return e.remove(l)}}))});return F.default.createElement(d.default,{onSubmit:this.handleSubmit},F.default.createElement(D,(0,v.default)({},a,{label:F.default.createElement("span",null,"\u540d\u79f0\xa0",F.default.createElement(g.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},F.default.createElement(h.default,{type:"question-circle-o"})))}),i("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(F.default.createElement(u.default,{disabled:!!this.props.editRecord}))),m,F.default.createElement(D,n,F.default.createElement(f.default,{type:"primary",onClick:this.add,style:{width:"100%"}},F.default.createElement(h.default,{type:"plus"})," \u589e\u52a0\u4e3b\u9898")),this.props.addInDevice?F.default.createElement(D,{wrapperCol:{offset:13}},F.default.createElement(f.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),F.default.createElement(f.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null)}}]),t}(q.Component),N=function(e){function t(e){(0,S.default)(this,t);var a=(0,V.default)(this,(t.__proto__||(0,b.default)(t)).call(this,e));a.handleNumberChange=function(e){var t=e.target.value;"value"in a.props||a.setState({name:t}),a.triggerChange({name:t})},a.handleCurrencyChange=function(e){"value"in a.props||a.setState({authority:e}),a.triggerChange({authority:e})},a.triggerChange=function(e){var t=a.props.onChange;t&&t((0,p.default)({},a.state,e))};var n=a.props.value||{};return a.state={name:n.name||"",authority:n.authority||"0"},a}return(0,I.default)(t,e),(0,w.default)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var t=e.value;this.setState(t)}}},{key:"render",value:function(){var e=this.props.size,t=this.state;return F.default.createElement("span",null,F.default.createElement(u.default,{type:"text",size:e,value:t.name,onChange:this.handleNumberChange,style:{width:"45%",marginRight:"3%"}}),F.default.createElement(u.default,{type:"hidden"}),F.default.createElement(r.default,{value:t.authority,size:e,style:{width:"45%",marginRight:"2%"},onChange:this.handleCurrencyChange},F.default.createElement(O,{value:"0"},"\u8ba2\u9605"),F.default.createElement(O,{value:"1"},"\u53d1\u5e03"),F.default.createElement(O,{value:"2"},"\u8ba2\u9605+\u53d1\u5e03")))}}]),t}(F.default.Component),P=d.default.create()(z);t.default=P,e.exports=t.default},1545:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(13),d=n(l),i=a(27),r=n(i),s=a(33),u=n(s),o=a(17),p=n(o),c=a(163),f=n(c),m=a(28),h=n(m),y=a(30),g=n(y),_=a(1),v=n(_),E=a(8),b=n(E),R=a(2),S=n(R),k=a(5),w=n(k),C=a(3),V=n(C),x=a(4),I=n(x);a(14),a(29),a(34),a(16),a(239),a(49),a(31);var q=a(0),F=n(q),M=a(1544),D=n(M),O=a(10),z=d.default.Item,N=u.default.Option,P=function(e){function t(e){(0,S.default)(this,t);var a=(0,V.default)(this,(t.__proto__||(0,b.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb({name:t.name,policy_id:t.policy_id.key})})},a.handleChange=function(e){console.log(e),"newStrategy"===(e?e.key:"")?a.setState({newStrategy:!0}):a.setState({newStrategy:!1})},a.addStrategy=function(e){var t=a,n=a.props,l=n.form,d=n.dispatch,i=n.endpoint_id;d({type:"strategy/add",payload:{data:(0,v.default)({},e,{endpoint_id:i})},callback:function(e){g.default.success("\u6dfb\u52a0\u7b56\u7565\u6210\u529f"),d({type:"strategy/fetch",payload:{endpoint_id:i,return:"all"}}),l.setFieldsValue({policy_id:{key:e.id.toString(),label:e.name}}),t.setState({newStrategy:!1})}})},a.cancel=function(){a.setState({newStrategy:!1})},a.state={newStrategy:!1},a}return(0,I.default)(t,e),(0,w.default)(t,[{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},a=this.props.form,n=a.getFieldDecorator;a.getFieldValue;return console.log("addInDevice",this.props.addInDevice),F.default.createElement("div",null,F.default.createElement(d.default,{onSubmit:this.handleSubmit},F.default.createElement(z,(0,v.default)({},t,{label:F.default.createElement("span",null,"\u540d\u79f0\xa0",F.default.createElement(f.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},F.default.createElement(h.default,{type:"question-circle-o"})))}),n("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(F.default.createElement(p.default,{disabled:!!this.props.editRecord}))),this.props.addInDevice?F.default.createElement(z,(0,v.default)({label:"\u7b56\u7565"},t),n("policy_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}],onChange:this.handleChange})(F.default.createElement(u.default,{labelInValue:!0},F.default.createElement(N,{value:"newStrategy"},"\u65b0\u5efa"),this.props.strategy.map(function(e,t){return F.default.createElement(N,{key:e.id,value:e.id.toString()},e.name)})))):F.default.createElement(z,(0,v.default)({label:"\u7b56\u7565"},t),n("policy_id",{initialValue:this.props.editRecord?{key:this.props.editRecord.policy_id.toString(),label:this.props.editRecord.policy_name}:{key:"",label:""},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}]})(F.default.createElement(u.default,{labelInValue:!0},this.props.strategy.map(function(e,t){return F.default.createElement(N,{key:e.id,value:e.id.toString()},e.name)})))),this.props.addInDevice&&!this.state.newStrategy?F.default.createElement(z,{wrapperCol:{offset:13}},F.default.createElement(r.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),F.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null),function(){return e.state.newStrategy?F.default.createElement("fieldset",null,F.default.createElement("legend",null,F.default.createElement(h.default,{type:"plus-square"}),"\u65b0\u5efa\u7b56\u7565"),F.default.createElement(D.default,{cancel:e.cancel,cb:e.addStrategy,addInDevice:!0})):null}())}}]),t}(q.Component),j=d.default.create()(P);t.default=(0,O.connect)()(j),e.exports=t.default},1546:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(13),d=n(l),i=a(33),r=n(i),s=a(17),u=n(s),o=a(163),p=n(o),c=a(28),f=n(c),m=a(30),h=n(m),y=a(1),g=n(y),_=a(8),v=n(_),E=a(2),b=n(E),R=a(5),S=n(R),k=a(3),w=n(k),C=a(4),V=n(C);a(14),a(34),a(16),a(239),a(49),a(31);var x=a(0),I=n(x),q=a(1545),F=n(q),M=a(10),D=d.default.Item,O=r.default.Option,z=function(e){function t(e){(0,b.default)(this,t);var a=(0,w.default)(this,(t.__proto__||(0,v.default)(t)).call(this,e));return a.handleChange=function(e){"newIdentify"===(e?e.key:"")?a.setState({newIdentify:!0}):a.setState({newIdentify:!1})},a.addIdentify=function(e){console.log("values",e);var t=a,n=a.props,l=n.form,d=n.dispatch,i=n.endpoint_id;d({type:"identify/add",payload:{data:(0,g.default)({},e,{endpoint_id:i})},callback:function(e){h.default.success("\u6dfb\u52a0\u8eab\u4efd\u6210\u529f"),d({type:"identify/fetch",payload:{endpoint_id:i,return:"all"}}),l.setFieldsValue({identify:{key:e.id.toString(),label:e.name}}),t.setState({newIdentify:!1})}})},a.cancel=function(){a.setState({newIdentify:!1})},a.state={newIdentify:!1},a}return(0,V.default)(t,e),(0,S.default)(t,[{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},a=this.props.form.getFieldDecorator;return I.default.createElement("div",null,I.default.createElement(d.default,{onSubmit:this.handleSubmit},I.default.createElement(D,(0,g.default)({label:I.default.createElement("span",null,"\u540d\u79f0\xa0",I.default.createElement(p.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},I.default.createElement(f.default,{type:"question-circle-o"})))},t),a("name",{rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:this.props.editRecord?this.props.editRecord.name:""})(I.default.createElement(u.default,{disabled:!!this.props.editRecord}))),I.default.createElement(D,(0,g.default)({label:"\u63cf\u8ff0"},t),a("description",{initialValue:this.props.editRecord?this.props.editRecord.description:""})(I.default.createElement(u.default,{type:"textarea",autosize:{minRows:2,maxRows:6}}))),I.default.createElement(D,(0,g.default)({},t,{label:"\u8eab\u4efd"}),a("identify",{onChange:this.handleChange,initialValue:this.props.editRecord?{key:this.props.editRecord.principal_id.toString(),label:this.props.editRecord.principal_name}:{key:"",label:""},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8eab\u4efd"}]})(I.default.createElement(r.default,{labelInValue:!0},I.default.createElement(O,{value:"newIdentify"},"\u65b0\u5efa"),this.props.identify.map(function(e){return I.default.createElement(O,{key:e.id,value:e.id},e.name)}))))),function(){return e.state.newIdentify?I.default.createElement("fieldset",null,I.default.createElement("legend",null,I.default.createElement(f.default,{type:"plus-square"}),"\u65b0\u5efa\u8eab\u4efd"),I.default.createElement(F.default,{cancel:e.cancel,cb:e.addIdentify,endpoint_id:e.props.endpoint_id,strategy:e.props.strategy,addInDevice:!0})):null}())}}]),t}(x.Component),N=d.default.create()(z);t.default=(0,M.connect)()(N),e.exports=t.default}});