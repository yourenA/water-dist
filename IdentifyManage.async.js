webpackJsonp([1],{1814:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,d,i,r=a(56),s=n(r),u=a(26),o=n(u),p=a(133),c=n(p),f=a(89),m=n(f),h=a(13),y=n(h),g=a(76),_=n(g),v=a(35),E=n(v),b=a(1),C=n(b),S=a(6),k=n(S),R=a(2),V=n(R),w=a(5),F=n(w),q=a(3),x=n(q),I=a(4),D=n(I),M=a(15),N=n(M);a(57),a(27),a(134),a(90),a(14),a(77),a(36),a(16);var O=a(0),P=n(O),z=a(10),j=a(34),T=a(1820),A=n(T),L=a(405),J=n(L),K=(l=(0,z.connect)(function(e){return{endpoints:e.endpoints,identify:e.identify,strategy:e.strategy}}),d=N.default.create(),l(i=d(i=function(e){function t(){var e,a,n,l;(0,V.default)(this,t);for(var d=arguments.length,i=Array(d),r=0;r<d;r++)i[r]=arguments[r];return a=n=(0,x.default)(this,(e=t.__proto__||(0,k.default)(t)).call.apply(e,[this].concat(i))),n.state={modalVisible:!1,modalEditVisible:!1,editRecord:{},expandForm:!1,selectedRows:[],formValues:{},selectedRowKeys:[],totalCallNo:0,query:"",page:1,started_at:"",ended_at:""},n.handleFormReset=function(){(0,n.props.dispatch)({type:"identify/fetch",payload:{endpoint_id:n.props.match.params.id}}),n.setState({page:1,query:"",started_at:"",ended_at:""})},n.handleSearch=function(e){(0,n.props.dispatch)({type:"identify/fetch",payload:(0,C.default)({endpoint_id:n.props.match.params.id},e)}),n.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},n.handleModalVisible=function(e){n.setState({modalVisible:!!e})},n.handleModalEditVisible=function(e){n.setState({modalEditVisible:!!e})},n.handleAdd=function(){var e=n,t=n.identifyFormRef.props.form.getFieldsValue();console.log("formValues",t),n.props.dispatch({type:"identify/add",payload:{data:{name:t.name,policy_id:t.policy_id.key,endpoint_id:n.props.match.params.id}},callback:function(){E.default.success("\u6dfb\u52a0\u8eab\u4efd\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"identify/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},n.handleEdit=function(){var e=n,t=n.identifyEditFormRef.props.form.getFieldsValue();console.log("formValues",t),n.props.dispatch({type:"identify/edit",payload:{data:{endpoint_id:n.props.match.params.id,policy_id:t.policy_id.key,id:n.state.editRecord.id}},callback:function(){E.default.success("\u4fee\u6539\u8eab\u4efd\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"identify/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},n.handleRemove=function(e){var t=n;n.props.dispatch({type:"identify/remove",payload:{endpoint_id:n.props.match.params.id,id:e},callback:function(){E.default.success("\u5220\u9664\u8eab\u4efd\u6210\u529f"),t.props.dispatch({type:"identify/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},n.handPageChange=function(e){n.handleSearch({page:e,query:n.state.query,ended_at:n.state.ended_at,started_at:n.state.started_at})},n.handleTabChange=function(e){var t=n.props.dispatch;switch(e){case"device":t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/device"));break;case"identify":n.props.match.path.split("/")[4]!==e&&t({type:"identify/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/identify"));break;case"strategy":n.props.match.path.split("/")[4]!==e&&t({type:"strategy/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/strategy"));break;case"rule":n.props.match.path.split("/")[4]!==e&&t({type:"rule/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/rule"))}},l=a,(0,x.default)(n,l)}return(0,D.default)(t,e),(0,F.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id;e({type:"strategy/fetch",payload:{endpoint_id:t,page:1}}),e({type:"identify/fetch",payload:{endpoint_id:t,page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.identify,n=a.data,l=a.meta,d=a.loading,i=(t.endpoints.name,t.strategy),r=this.state,u=r.modalVisible,p=r.modalEditVisible,f=r.editRecord,h=[{title:"\u8eab\u4efd\u540d\u79f0",dataIndex:"name"},{title:"\u8bbe\u5907\u6570",dataIndex:"things_count"},{title:"\u7ed1\u5b9a\u7684\u7b56\u7565",dataIndex:"policy_name"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at"},{title:"\u64cd\u4f5c",width:120,render:function(t,a,n){return P.default.createElement("p",null,P.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({editRecord:a,modalEditVisible:!0})}},"\u7f16\u8f91"),P.default.createElement("span",{className:"ant-divider"}),P.default.createElement(_.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},P.default.createElement("a",{href:""},"\u5220\u9664")))}}];return P.default.createElement("div",null,P.default.createElement(o.default,{bordered:!1},P.default.createElement("div",{className:"tableList"},P.default.createElement("div",{className:"tableListForm"},P.default.createElement(J.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),P.default.createElement("div",{className:"tableListOperator"},P.default.createElement(y.default,{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0)}},"\u521b\u5efa\u8eab\u4efd")),P.default.createElement(m.default,{loading:d,rowKey:function(e){return e.id},dataSource:n,columns:h,pagination:!1}),P.default.createElement(c.default,{showQuickJumper:!0,className:"pagination",total:l.pagination.total,current:l.pagination.current_page,pageSize:l.pagination.per_page,onChange:this.handPageChange}))),P.default.createElement(s.default,{title:"\u521b\u5efa\u8eab\u4efd",visible:u,onOk:this.handleAdd,onCancel:function(){return e.handleModalVisible()}},P.default.createElement(A.default,{strategy:i.data,wrappedComponentRef:function(t){return e.identifyFormRef=t}})),P.default.createElement(s.default,{key:Date.parse(new Date),title:"\u4fee\u6539\u8eab\u4efd",visible:p,onOk:this.handleEdit,onCancel:function(){return e.handleModalEditVisible()}},P.default.createElement(A.default,{strategy:i.data,wrappedComponentRef:function(t){return e.identifyEditFormRef=t},editRecord:f})))}}]),t}(O.PureComponent))||i)||i);t.default=K,e.exports=t.default},1819:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(406),d=n(l),i=a(13),r=n(i),s=a(25),u=n(s),o=a(75),p=n(o),c=a(1),f=n(c),m=a(20),h=n(m),y=a(6),g=n(y),_=a(2),v=n(_),E=a(5),b=n(E),C=a(3),S=n(C),k=a(4),R=n(k),V=a(40),w=n(V),F=a(15),q=n(F);a(14),a(22),a(80),a(37),a(41),a(16);var x=a(0),I=n(x),D=a(19),M=q.default.Item,N=w.default.Option,O=function(e){function t(e){(0,v.default)(this,t);var a=(0,S.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.add=function(){a.uuid++;var e=a.props.form,t=e.getFieldValue("keys"),n=t.concat(a.uuid);e.setFieldsValue({keys:n})},a.remove=function(e){var t=a.props.form,n=t.getFieldValue("keys");t.setFieldsValue({keys:n.filter(function(t){return t!==e})})},a.handleSubmit=function(e){e.preventDefault();a.state.type;a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb((0,D.convertPoliciesTopic)(t))})},a.uuid=a.props.editRecord?a.props.editRecord.permissions.data.length-1:0,a.state={},a}return(0,R.default)(t,e),(0,b.default)(t,[{key:"render",value:function(){var e=this,t=this.props.editRecord,a={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:15,offset:5}}},l=this.props.form,d=l.getFieldDecorator,i=l.getFieldValue,s=[],o=t?t.permissions.data.length:0;if(t)for(var c in t.permissions.data)s.push(parseInt(c));d("keys",{initialValue:s});var m=i("keys"),y=m.map(function(l,i){var r=0===i?a:n,s="0";return t&&o>l&&(1===t.permissions.data[l].allow_publish&&1===t.permissions.data[l].allow_subscribe?s="2":1===t.permissions.data[l].allow_publish?s="1":1===t.permissions.data[l].allow_subscribe&&(s="0")),I.default.createElement(M,(0,f.default)({},r,{label:0===i?"\u4e3b\u9898":"",required:!0,key:l}),d("topics-"+l,{initialValue:t&&o>l?{name:t.permissions.data[l].topic,id:t.permissions.data[l].id,authority:s}:{name:"",authority:"0",id:null}})(I.default.createElement(P,null)),I.default.createElement(h.default,{style:{cursor:"pointer"},type:"minus-circle-o",onClick:function(){return e.remove(l)}}))});return I.default.createElement(q.default,{onSubmit:this.handleSubmit},I.default.createElement(M,(0,f.default)({},a,{label:I.default.createElement("span",null,"\u540d\u79f0\xa0",I.default.createElement(p.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},I.default.createElement(h.default,{type:"question-circle-o"})))}),d("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(I.default.createElement(u.default,{disabled:!!this.props.editRecord}))),y,I.default.createElement(M,n,I.default.createElement(r.default,{type:"primary",onClick:this.add,style:{width:"100%"}},I.default.createElement(h.default,{type:"plus"})," \u589e\u52a0\u4e3b\u9898")),this.props.addInDevice?I.default.createElement(M,{wrapperCol:{offset:13}},I.default.createElement(r.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),I.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null)}}]),t}(x.Component),P=function(e){function t(e){(0,v.default)(this,t);var a=(0,S.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));a.handleNumberChange=function(e){var t=e.target.value;"value"in a.props||a.setState({name:t}),a.triggerChange({name:t})},a.handleCurrencyChange=function(e){"value"in a.props||a.setState({authority:e}),a.triggerChange({authority:e})},a.triggerChange=function(e){var t=a.props.onChange;t&&t((0,d.default)({},a.state,e))};var n=a.props.value||{};return a.state={name:n.name||"",authority:n.authority||"0"},a}return(0,R.default)(t,e),(0,b.default)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var t=e.value;this.setState(t)}}},{key:"render",value:function(){var e=this.props.size,t=this.state;return I.default.createElement("span",null,I.default.createElement(u.default,{type:"text",size:e,value:t.name,onChange:this.handleNumberChange,style:{width:"45%",marginRight:"3%"}}),I.default.createElement(u.default,{type:"hidden"}),I.default.createElement(w.default,{value:t.authority,size:e,style:{width:"45%",marginRight:"2%"},onChange:this.handleCurrencyChange},I.default.createElement(N,{value:"0"},"\u8ba2\u9605"),I.default.createElement(N,{value:"1"},"\u53d1\u5e03"),I.default.createElement(N,{value:"2"},"\u8ba2\u9605+\u53d1\u5e03")))}}]),t}(I.default.Component),z=q.default.create()(O);t.default=z,e.exports=t.default},1820:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(13),d=n(l),i=a(25),r=n(i),s=a(75),u=n(s),o=a(20),p=n(o),c=a(35),f=n(c),m=a(1),h=n(m),y=a(6),g=n(y),_=a(2),v=n(_),E=a(5),b=n(E),C=a(3),S=n(C),k=a(4),R=n(k),V=a(40),w=n(V),F=a(15),q=n(F);a(14),a(22),a(80),a(37),a(36),a(41),a(16);var x=a(0),I=n(x),D=a(1819),M=n(D),N=a(10),O=q.default.Item,P=w.default.Option,z=function(e){function t(e){(0,v.default)(this,t);var a=(0,S.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb({name:t.name,policy_id:t.policy_id.key})})},a.handleChange=function(e){console.log(e),"newStrategy"===(e?e.key:"")?a.setState({newStrategy:!0}):a.setState({newStrategy:!1})},a.addStrategy=function(e){var t=a,n=a.props,l=n.form,d=n.dispatch,i=n.endpoint_id;d({type:"strategy/add",payload:{data:(0,h.default)({},e,{endpoint_id:i})},callback:function(e){f.default.success("\u6dfb\u52a0\u7b56\u7565\u6210\u529f"),d({type:"strategy/fetch",payload:{endpoint_id:i,return:"all"}}),l.setFieldsValue({policy_id:{key:e.id.toString(),label:e.name}}),t.setState({newStrategy:!1})}})},a.cancel=function(){a.setState({newStrategy:!1})},a.state={newStrategy:!1},a}return(0,R.default)(t,e),(0,b.default)(t,[{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},a=this.props.form,n=a.getFieldDecorator;a.getFieldValue;return console.log("addInDevice",this.props.addInDevice),I.default.createElement("div",null,I.default.createElement(q.default,{onSubmit:this.handleSubmit},I.default.createElement(O,(0,h.default)({},t,{label:I.default.createElement("span",null,"\u540d\u79f0\xa0",I.default.createElement(u.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},I.default.createElement(p.default,{type:"question-circle-o"})))}),n("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(I.default.createElement(r.default,{disabled:!!this.props.editRecord}))),this.props.addInDevice?I.default.createElement(O,(0,h.default)({label:"\u7b56\u7565"},t),n("policy_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}],onChange:this.handleChange})(I.default.createElement(w.default,{labelInValue:!0},I.default.createElement(P,{value:"newStrategy"},"\u65b0\u5efa"),this.props.strategy.map(function(e,t){return I.default.createElement(P,{key:e.id,value:e.id.toString()},e.name)})))):I.default.createElement(O,(0,h.default)({label:"\u7b56\u7565"},t),n("policy_id",{initialValue:this.props.editRecord?{key:this.props.editRecord.policy_id.toString(),label:this.props.editRecord.policy_name}:{key:"",label:""},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}]})(I.default.createElement(w.default,{labelInValue:!0},this.props.strategy.map(function(e,t){return I.default.createElement(P,{key:e.id,value:e.id.toString()},e.name)})))),this.props.addInDevice&&!this.state.newStrategy?I.default.createElement(O,{wrapperCol:{offset:13}},I.default.createElement(d.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),I.default.createElement(d.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null),function(){return e.state.newStrategy?I.default.createElement("fieldset",null,I.default.createElement("legend",null,I.default.createElement(p.default,{type:"plus-square"}),"\u65b0\u5efa\u7b56\u7565"),I.default.createElement(M.default,{cancel:e.cancel,cb:e.addStrategy,addInDevice:!0})):null}())}}]),t}(x.Component),j=q.default.create()(z);t.default=(0,N.connect)()(j),e.exports=t.default}});