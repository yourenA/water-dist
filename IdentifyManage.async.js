webpackJsonp([1],{1835:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,d,i,r=a(47),s=l(r),u=a(30),o=l(u),p=a(219),c=l(p),f=a(122),m=l(f),h=a(12),y=l(h),g=a(64),_=l(g),v=a(27),E=l(v),b=a(1),R=l(b),k=a(6),C=l(k),S=a(2),V=l(S),w=a(5),F=l(w),x=a(3),q=l(x),D=a(4),M=l(D),I=a(15),P=l(I);a(48),a(31),a(220),a(123),a(14),a(65),a(28),a(16);var O=a(0),T=l(O),N=a(9),Y=a(41),z=a(1842),j=l(z),L=a(1840),A=l(L),J=(n=(0,N.connect)(function(e){return{endpoints:e.endpoints,identify:e.identify,strategy:e.strategy}}),d=P.default.create(),n(i=d(i=function(e){function t(){var e,a,l,n;(0,V.default)(this,t);for(var d=arguments.length,i=Array(d),r=0;r<d;r++)i[r]=arguments[r];return a=l=(0,q.default)(this,(e=t.__proto__||(0,C.default)(t)).call.apply(e,[this].concat(i))),l.state={modalVisible:!1,modalEditVisible:!1,editRecord:{},expandForm:!1,selectedRows:[],formValues:{},selectedRowKeys:[],totalCallNo:0,query:"",page:1,started_at:"",ended_at:""},l.handleFormReset=function(){(0,l.props.dispatch)({type:"identify/fetch",payload:{endpoint_id:l.props.match.params.id}}),l.setState({page:1,query:"",started_at:"",ended_at:""})},l.handleSearch=function(e){(0,l.props.dispatch)({type:"identify/fetch",payload:(0,R.default)({endpoint_id:l.props.match.params.id},e)}),l.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},l.handleModalVisible=function(e){l.setState({modalVisible:!!e})},l.handleModalEditVisible=function(e){l.setState({modalEditVisible:!!e})},l.handleAdd=function(){var e=l,t=l.identifyFormRef.props.form.getFieldsValue();console.log("formValues",t),l.props.dispatch({type:"identify/add",payload:{data:{name:t.name,policy_id:t.policy_id.key,endpoint_id:l.props.match.params.id}},callback:function(){E.default.success("\u6dfb\u52a0\u8eab\u4efd\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"identify/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},l.handleEdit=function(){var e=l,t=l.identifyEditFormRef.props.form.getFieldsValue();console.log("formValues",t),l.props.dispatch({type:"identify/edit",payload:{data:{endpoint_id:l.props.match.params.id,policy_id:t.policy_id.key,id:l.state.editRecord.id}},callback:function(){E.default.success("\u4fee\u6539\u8eab\u4efd\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"identify/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},l.handleRemove=function(e){var t=l;l.props.dispatch({type:"identify/remove",payload:{endpoint_id:l.props.match.params.id,id:e},callback:function(){E.default.success("\u5220\u9664\u8eab\u4efd\u6210\u529f"),t.props.dispatch({type:"identify/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},l.handPageChange=function(e){l.handleSearch({page:e,query:l.state.query,ended_at:l.state.ended_at,started_at:l.state.started_at})},l.handleTabChange=function(e){var t=l.props.dispatch;switch(e){case"device":t(Y.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/device"));break;case"identify":l.props.match.path.split("/")[4]!==e&&t({type:"identify/reset"}),t(Y.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/identify"));break;case"strategy":l.props.match.path.split("/")[4]!==e&&t({type:"strategy/reset"}),t(Y.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/strategy"));break;case"rule":l.props.match.path.split("/")[4]!==e&&t({type:"rule/reset"}),t(Y.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/rule"))}},n=a,(0,q.default)(l,n)}return(0,M.default)(t,e),(0,F.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id;e({type:"strategy/fetch",payload:{endpoint_id:t,page:1}}),e({type:"identify/fetch",payload:{endpoint_id:t,page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.identify,l=a.data,n=a.meta,d=a.loading,i=(t.endpoints.name,t.strategy),r=this.state,u=r.modalVisible,p=r.modalEditVisible,f=r.editRecord,h=[{title:"\u8eab\u4efd\u540d\u79f0",dataIndex:"name"},{title:"\u8bbe\u5907\u6570",dataIndex:"things_count"},{title:"\u7ed1\u5b9a\u7684\u7b56\u7565",dataIndex:"policy_name"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at"},{title:"\u64cd\u4f5c",width:120,render:function(t,a,l){return T.default.createElement("p",null,T.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({editRecord:a,modalEditVisible:!0})}},"\u7f16\u8f91"),T.default.createElement("span",{className:"ant-divider"}),T.default.createElement(_.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},T.default.createElement("a",{href:""},"\u5220\u9664")))}}];return T.default.createElement("div",null,T.default.createElement(o.default,{bordered:!1},T.default.createElement("div",{className:"tableList"},T.default.createElement("div",{className:"tableListForm"},T.default.createElement(A.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),T.default.createElement("div",{className:"tableListOperator"},T.default.createElement(y.default,{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0)}},"\u521b\u5efa\u8eab\u4efd")),T.default.createElement(m.default,{loading:d,rowKey:function(e){return e.id},dataSource:l,columns:h,pagination:!1}),T.default.createElement(c.default,{showQuickJumper:!0,className:"pagination",total:n.pagination.total,current:n.pagination.current_page,pageSize:n.pagination.per_page,onChange:this.handPageChange}))),T.default.createElement(s.default,{title:"\u521b\u5efa\u8eab\u4efd",visible:u,onOk:this.handleAdd,onCancel:function(){return e.handleModalVisible()}},T.default.createElement(j.default,{strategy:i.data,wrappedComponentRef:function(t){return e.identifyFormRef=t}})),T.default.createElement(s.default,{key:Date.parse(new Date),title:"\u4fee\u6539\u8eab\u4efd",visible:p,onOk:this.handleEdit,onCancel:function(){return e.handleModalEditVisible()}},T.default.createElement(j.default,{strategy:i.data,wrappedComponentRef:function(t){return e.identifyEditFormRef=t},editRecord:f})))}}]),t}(O.PureComponent))||i)||i);t.default=J,e.exports=t.default},1840:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(34),d=l(n),i=a(12),r=l(i),s=a(23),u=l(s),o=a(1),p=l(o),c=a(6),f=l(c),m=a(2),h=l(m),y=a(5),g=l(y),_=a(3),v=l(_),E=a(4),b=l(E),R=a(15),k=l(R),C=a(44),S=l(C);a(36),a(14),a(22),a(16),a(45);var V=a(0),w=l(V),F=a(18),x=l(F),q=S.default.RangePicker,D=k.default.Item,M=function(e){function t(e){(0,h.default)(this,t);var a=(0,v.default)(this,(t.__proto__||(0,f.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault();var t=a.props;t.dispatch;t.form.validateFields(function(e,t){if(!e){var l=t["range-time-picker"],n={query:t.query,started_at:l?(0,x.default)(l[0]).format("YYYY-MM-DD"):"",ended_at:l?(0,x.default)(l[1]).format("YYYY-MM-DD"):""};a.props.handleSearch((0,p.default)({},n,{page:1}))}})},a.handleFormReset=function(){a.props.form.resetFields(),a.props.handleFormReset()},a.state={},a}return(0,b.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return w.default.createElement(k.default,{onSubmit:this.handleSubmit,layout:"inline"},w.default.createElement(d.default,{gutter:{md:8,lg:24,xl:48}},w.default.createElement(D,{label:this.props.inputText?this.props.inputText:"\u540d\u79f0"},e("query")(w.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165"}))),w.default.createElement(D,{label:this.props.dateText?this.props.dateText:"\u521b\u5efa\u65f6\u95f4"},e("range-time-picker",{initialValue:this.props.initRange?this.props.initRange:""})(w.default.createElement(q,{allowClear:!this.props.initRange}))),w.default.createElement(D,null,w.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),w.default.createElement(r.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))))}}]),t}(V.Component),I=k.default.create()(M);t.default=I,e.exports=t.default},1841:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(405),d=l(n),i=a(12),r=l(i),s=a(23),u=l(s),o=a(78),p=l(o),c=a(1),f=l(c),m=a(19),h=l(m),y=a(6),g=l(y),_=a(2),v=l(_),E=a(5),b=l(E),R=a(3),k=l(R),C=a(4),S=l(C),V=a(42),w=l(V),F=a(15),x=l(F);a(14),a(22),a(81),a(40),a(43),a(16);var q=a(0),D=l(q),M=a(20),I=x.default.Item,P=w.default.Option,O=function(e){function t(e){(0,v.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.add=function(){a.uuid++;var e=a.props.form,t=e.getFieldValue("keys"),l=t.concat(a.uuid);e.setFieldsValue({keys:l})},a.remove=function(e){var t=a.props.form,l=t.getFieldValue("keys");t.setFieldsValue({keys:l.filter(function(t){return t!==e})})},a.handleSubmit=function(e){e.preventDefault();a.state.type;a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb((0,M.convertPoliciesTopic)(t))})},a.uuid=a.props.editRecord?a.props.editRecord.permissions.data.length-1:0,a.state={},a}return(0,S.default)(t,e),(0,b.default)(t,[{key:"render",value:function(){var e=this,t=this.props.editRecord,a={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},l={wrapperCol:{xs:{span:24,offset:0},sm:{span:15,offset:5}}},n=this.props.form,d=n.getFieldDecorator,i=n.getFieldValue,s=[],o=t?t.permissions.data.length:0;if(t)for(var c in t.permissions.data)s.push(parseInt(c));d("keys",{initialValue:s});var m=i("keys"),y=m.map(function(n,i){var r=0===i?a:l,s="0";return t&&o>n&&(1===t.permissions.data[n].allow_publish&&1===t.permissions.data[n].allow_subscribe?s="2":1===t.permissions.data[n].allow_publish?s="1":1===t.permissions.data[n].allow_subscribe&&(s="0")),D.default.createElement(I,(0,f.default)({},r,{label:0===i?"\u4e3b\u9898":"",required:!0,key:n}),d("topics-"+n,{initialValue:t&&o>n?{name:t.permissions.data[n].topic,id:t.permissions.data[n].id,authority:s}:{name:"",authority:"0",id:null}})(D.default.createElement(T,null)),D.default.createElement(h.default,{style:{cursor:"pointer"},type:"minus-circle-o",onClick:function(){return e.remove(n)}}))});return D.default.createElement(x.default,{onSubmit:this.handleSubmit},D.default.createElement(I,(0,f.default)({},a,{label:D.default.createElement("span",null,"\u540d\u79f0\xa0",D.default.createElement(p.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},D.default.createElement(h.default,{type:"question-circle-o"})))}),d("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(D.default.createElement(u.default,{disabled:!!this.props.editRecord}))),y,D.default.createElement(I,l,D.default.createElement(r.default,{type:"primary",onClick:this.add,style:{width:"100%"}},D.default.createElement(h.default,{type:"plus"})," \u589e\u52a0\u4e3b\u9898")),this.props.addInDevice?D.default.createElement(I,{wrapperCol:{offset:13}},D.default.createElement(r.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),D.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null)}}]),t}(q.Component),T=function(e){function t(e){(0,v.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));a.handleNumberChange=function(e){var t=e.target.value;"value"in a.props||a.setState({name:t}),a.triggerChange({name:t})},a.handleCurrencyChange=function(e){"value"in a.props||a.setState({authority:e}),a.triggerChange({authority:e})},a.triggerChange=function(e){var t=a.props.onChange;t&&t((0,d.default)({},a.state,e))};var l=a.props.value||{};return a.state={name:l.name||"",authority:l.authority||"0"},a}return(0,S.default)(t,e),(0,b.default)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var t=e.value;this.setState(t)}}},{key:"render",value:function(){var e=this.props.size,t=this.state;return D.default.createElement("span",null,D.default.createElement(u.default,{type:"text",size:e,value:t.name,onChange:this.handleNumberChange,style:{width:"45%",marginRight:"3%"}}),D.default.createElement(u.default,{type:"hidden"}),D.default.createElement(w.default,{value:t.authority,size:e,style:{width:"45%",marginRight:"2%"},onChange:this.handleCurrencyChange},D.default.createElement(P,{value:"0"},"\u8ba2\u9605"),D.default.createElement(P,{value:"1"},"\u53d1\u5e03"),D.default.createElement(P,{value:"2"},"\u8ba2\u9605+\u53d1\u5e03")))}}]),t}(D.default.Component),N=x.default.create()(O);t.default=N,e.exports=t.default},1842:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(12),d=l(n),i=a(23),r=l(i),s=a(78),u=l(s),o=a(19),p=l(o),c=a(27),f=l(c),m=a(1),h=l(m),y=a(6),g=l(y),_=a(2),v=l(_),E=a(5),b=l(E),R=a(3),k=l(R),C=a(4),S=l(C),V=a(42),w=l(V),F=a(15),x=l(F);a(14),a(22),a(81),a(40),a(28),a(43),a(16);var q=a(0),D=l(q),M=a(1841),I=l(M),P=a(9),O=x.default.Item,T=w.default.Option,N=function(e){function t(e){(0,v.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb({name:t.name,policy_id:t.policy_id.key})})},a.handleChange=function(e){console.log(e),"newStrategy"===(e?e.key:"")?a.setState({newStrategy:!0}):a.setState({newStrategy:!1})},a.addStrategy=function(e){var t=a,l=a.props,n=l.form,d=l.dispatch,i=l.endpoint_id;d({type:"strategy/add",payload:{data:(0,h.default)({},e,{endpoint_id:i})},callback:function(e){f.default.success("\u6dfb\u52a0\u7b56\u7565\u6210\u529f"),d({type:"strategy/fetch",payload:{endpoint_id:i,return:"all"}}),n.setFieldsValue({policy_id:{key:e.id.toString(),label:e.name}}),t.setState({newStrategy:!1})}})},a.cancel=function(){a.setState({newStrategy:!1})},a.state={newStrategy:!1},a}return(0,S.default)(t,e),(0,b.default)(t,[{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},a=this.props.form,l=a.getFieldDecorator;a.getFieldValue;return console.log("addInDevice",this.props.addInDevice),D.default.createElement("div",null,D.default.createElement(x.default,{onSubmit:this.handleSubmit},D.default.createElement(O,(0,h.default)({},t,{label:D.default.createElement("span",null,"\u540d\u79f0\xa0",D.default.createElement(u.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},D.default.createElement(p.default,{type:"question-circle-o"})))}),l("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(D.default.createElement(r.default,{disabled:!!this.props.editRecord}))),this.props.addInDevice?D.default.createElement(O,(0,h.default)({label:"\u7b56\u7565"},t),l("policy_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}],onChange:this.handleChange})(D.default.createElement(w.default,{labelInValue:!0},D.default.createElement(T,{value:"newStrategy"},"\u65b0\u5efa"),this.props.strategy.map(function(e,t){return D.default.createElement(T,{key:e.id,value:e.id.toString()},e.name)})))):D.default.createElement(O,(0,h.default)({label:"\u7b56\u7565"},t),l("policy_id",{initialValue:this.props.editRecord?{key:this.props.editRecord.policy_id.toString(),label:this.props.editRecord.policy_name}:{key:"",label:""},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}]})(D.default.createElement(w.default,{labelInValue:!0},this.props.strategy.map(function(e,t){return D.default.createElement(T,{key:e.id,value:e.id.toString()},e.name)})))),this.props.addInDevice&&!this.state.newStrategy?D.default.createElement(O,{wrapperCol:{offset:13}},D.default.createElement(d.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),D.default.createElement(d.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null),function(){return e.state.newStrategy?D.default.createElement("fieldset",null,D.default.createElement("legend",null,D.default.createElement(p.default,{type:"plus-square"}),"\u65b0\u5efa\u7b56\u7565"),D.default.createElement(I.default,{cancel:e.cancel,cb:e.addStrategy,addInDevice:!0})):null}())}}]),t}(q.Component),Y=x.default.create()(N);t.default=(0,P.connect)()(Y),e.exports=t.default}});