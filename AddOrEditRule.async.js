webpackJsonp([2],{1571:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,d,u=a(14),i=l(u),r=a(53),s=l(r),o=a(22),f=l(o),c=a(25),m=l(c),p=a(41),h=l(p),E=a(20),v=l(E),b=a(167),R=l(b),g=a(26),w=l(g),C=a(63),V=l(C),y=a(32),k=l(y),S=a(1),_=l(S),x=a(8),M=l(x),T=a(2),N=l(T),F=a(5),D=l(F),I=a(3),q=l(I),O=a(4),Q=l(O);a(15),a(54),a(23),a(27),a(42),a(17),a(238),a(46),a(64),a(33);var A=a(0),B=l(A),j=a(10),W=a(1577),z=l(W),L=a(34),P=i.default.Item,Y=(n=(0,j.connect)(function(e){return{rule:e.rule}}))(d=function(e){function t(e){(0,N.default)(this,t);var a=(0,q.default)(this,(t.__proto__||(0,M.default)(t)).call(this,e));return a.handleModalVisible=function(e){a.setState({modalVisible:!!e})},a.handleModalEditVisible=function(e){a.setState({modalEditVisible:!!e})},a.handleChangeFrom=function(e){a.setState({from:e.target.value})},a.handleChangeWhere=function(e){a.setState({where:e.target.value})},a.handleChangeSelect=function(e){a.setState({select:e.target.value})},a.handleAdd=function(){var e=a.formRef.props.form.getFieldsValue();if(console.log("formValues",e),!e.kind||!e.value)return k.default.error("\u8bf7\u5b8c\u5584\u76ee\u7684\u5730\u4fe1\u606f"),!1;a.uuid++,a.state.data.push({kind:e.kind,value:e.value,uuid:a.uuid}),a.setState({data:a.state.data,modalVisible:!1})},a.handleEdit=function(){var e=a.editFormRef.props.form.getFieldsValue();if(console.log("formValues",e),!e.kind||!e.value)return k.default.error("\u8bf7\u5b8c\u5584\u76ee\u7684\u5730\u4fe1\u606f"),!1;var t=(0,_.default)({uuid:a.state.editRecord.uuid},e),l=a.state.data.map(function(e){return e.uuid===t.uuid?t:e});a.setState({data:l,modalEditVisible:!1})},a.handleRemove=function(e){var t=null;a.state.data.map(function(a,l){a.uuid===e&&(t=l)}),a.state.data.splice(t,1),a.setState({data:a.state.data})},a.handleSubmit=function(e){e.preventDefault();var t=a,l=a.props.match.params.id,n=a.props.match.params.ruleId;a.props.form.validateFields({force:!0},function(e,d){if(!e){console.log(d);var u=a.isNewRule?"rule/add":"rule/edit",i=a.isNewRule?"\u521b\u5efa\u89c4\u5219\u6210\u529f":"\u4fee\u6539\u89c4\u5219\u6210\u529f",r=a.isNewRule?(0,_.default)({endpoint_id:l,destinations:a.state.data},d):(0,_.default)({id:n,endpoint_id:l,destinations:a.state.data},d);a.props.dispatch({type:u,payload:{data:r},callback:function(){k.default.success(i),t.props.dispatch(L.routerRedux.replace("/access-management/endpoints/"+l+"/rule"))}})}})},a.uuid=0,a.isNewRule="add"===a.props.match.params.ruleId,a.state={select:"",where:"",from:"",data:[],modalVisible:!1,modalEditVisible:!1,editRecord:{}},a}return(0,Q.default)(t,e),(0,D.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id,a=this.props.match.params.ruleId,l=this;this.isNewRule?console.log("\u65b0\u5efa\u89c4\u5219"):(console.log("\u4fee\u6539\u89c4\u5219"),e({type:"rule/fetchOneRule",payload:{endpoint_id:t,rule_id:a},callback:function(){var e=l.props.rule.editRecord;e.destinations.data.map(function(e,t){e.uuid=e.id}),l.setState({data:e.destinations.data,select:e.select,from:e.from,where:e.where})}}))}},{key:"render",value:function(){var e=this,t=[{title:"\u76ee\u7684\u5730\u7c7b\u578b",dataIndex:"kind",key:"kind"},{title:"\u76ee\u7684\u5730\u7c7b\u578b",dataIndex:"value",key:"value"},{title:"\u64cd\u4f5c",key:"action",width:"120px",render:function(t,a,l){return B.default.createElement("p",null,B.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({editRecord:a,modalEditVisible:!0})}},"\u7f16\u8f91"),B.default.createElement("span",{className:"ant-divider"}),B.default.createElement(V.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},B.default.createElement("a",{href:""},"\u5220\u9664")))}}],a={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},l=this.props.form.getFieldDecorator,n=this.props.match.params.id,d=this.props.rule.editRecord;return B.default.createElement("div",null,B.default.createElement(f.default,{bordered:!1},B.default.createElement(i.default,{onSubmit:this.handleSubmit},B.default.createElement(P,(0,_.default)({},a,{label:"\u540d\u79f0"}),l("name",{initialValue:this.isNewRule?"":d.name,rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(B.default.createElement(v.default,{disabled:!!this.props.editRecord}))),B.default.createElement(P,(0,_.default)({label:"\u63cf\u8ff0"},a),l("description",{initialValue:this.isNewRule?"":d.description})(B.default.createElement(v.default,{type:"textarea",autosize:{minRows:2,maxRows:6}}))),B.default.createElement(P,(0,_.default)({style:{marginBottom:"10px"}},a,{label:"\u7b5b\u9009\u6761\u4ef6"}),B.default.createElement("span",{className:"ant-form-text"},"SELECT ",B.default.createElement("b",null,this.state.select)," FROM ",B.default.createElement("b",null,this.state.from)," WHERE ",B.default.createElement("b",null,this.state.where))),B.default.createElement(P,(0,_.default)({},a,{label:"MQTT\u4e3b\u9898"}),l("from",{initialValue:this.isNewRule?"":d.from,rules:[{required:!0,message:"\u8bf7\u8f93\u5165MQTT\u4e3b\u9898"}],onChange:this.handleChangeFrom})(B.default.createElement(v.default,null))),B.default.createElement(P,(0,_.default)({},a,{label:"\u67e5\u8be2\u5b57\u6bb5"}),l("select",{initialValue:this.isNewRule?"":d.select,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u67e5\u8be2\u5b57\u6bb5"}],onChange:this.handleChangeSelect})(B.default.createElement(v.default,{type:"textarea",autosize:{minRows:2,maxRows:6}}))),B.default.createElement(P,(0,_.default)({},a,{label:B.default.createElement("span",null,"\u7ea6\u675f\u6761\u4ef6\xa0",B.default.createElement(R.default,{title:"\u5728\u7ea6\u675f\u6761\u4ef6\u4e2d\u53ef\u4ee5\u914d\u5408\u4f7f\u7528 SQL\u51fd\u6570 \u6765\u8fdb\u884c\u66f4\u590d\u6742\u67e5\u8be2\uff0c\u5982like\u3001ceil\u3001floor\u7b49"},B.default.createElement(w.default,{type:"question-circle-o"})))}),l("where",{initialValue:this.isNewRule?"":d.where,onChange:this.handleChangeWhere,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7ea6\u675f\u6761\u4ef6"}]})(B.default.createElement(v.default,null))),B.default.createElement(P,(0,_.default)({},a,{label:"\u6570\u636e\u76ee\u7684\u5730"}),B.default.createElement("div",null,B.default.createElement(h.default,{rowKey:function(e){return e.uuid},columns:t,dataSource:this.state.data,pagination:!1}),B.default.createElement(m.default,{style:{width:"100%",marginTop:16,marginBottom:8},type:"dashed",onClick:function(){e.setState({modalVisible:!0})},icon:"plus"},"\u65b0\u589e\u6570\u636e\u76ee\u7684\u5730"))),B.default.createElement(P,{wrapperCol:{offset:7,span:10}},B.default.createElement(m.default,{style:{marginRight:"10px",width:"40%"},onClick:function(){e.props.dispatch(L.routerRedux.replace("/access-management/endpoints/"+n+"/rule"))}},"\u53d6\u6d88"),B.default.createElement(m.default,{style:{width:"40%"},type:"primary",htmlType:"submit"},"\u786e\u5b9a")))),B.default.createElement(s.default,{title:" \u65b0\u589e\u6570\u636e\u76ee\u7684\u5730",visible:this.state.modalVisible,onOk:this.handleAdd,onCancel:function(){return e.handleModalVisible()}},B.default.createElement(z.default,{wrappedComponentRef:function(t){return e.formRef=t}})),B.default.createElement(s.default,{key:Date.parse(new Date),title:" \u4fee\u6539\u6570\u636e\u76ee\u7684\u5730",visible:this.state.modalEditVisible,onOk:this.handleEdit,onCancel:function(){return e.handleModalEditVisible()}},B.default.createElement(z.default,{editRecord:this.state.editRecord,wrappedComponentRef:function(t){return e.editFormRef=t}})))}}]),t}(A.Component))||d,H=i.default.create()(Y);t.default=(0,j.connect)()(H),e.exports=t.default},1577:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(14),d=l(n),u=a(20),i=l(u),r=a(1),s=l(r),o=a(35),f=l(o),c=a(8),m=l(c),p=a(2),h=l(p),E=a(5),v=l(E),b=a(3),R=l(b),g=a(4),w=l(g);a(15),a(17),a(36);var C=a(0),V=l(C),y=a(10),k=d.default.Item,S=f.default.Option,_=function(e){function t(e){(0,h.default)(this,t);var a=(0,R.default)(this,(t.__proto__||(0,m.default)(t)).call(this,e));return a.state={},a}return(0,w.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},t=this.props.form,a=t.getFieldDecorator;t.getFieldValue;return V.default.createElement("div",null,V.default.createElement(d.default,{onSubmit:this.handleSubmit},V.default.createElement(k,(0,s.default)({label:"\u76ee\u7684\u5730\u7c7b\u578b"},e),a("kind",{initialValue:this.props.editRecord?this.props.editRecord.kind:"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u76ee\u7684\u5730\u7c7b\u578b"}]})(V.default.createElement(f.default,null,V.default.createElement(S,{value:"MQTT"},"MQTT"),V.default.createElement(S,{value:"TSDB"},"TSDB"),V.default.createElement(S,{value:"MQTT_DYNAMIC"},"MQTT_DYNAMIC")))),V.default.createElement(k,(0,s.default)({},e,{label:V.default.createElement("span",null,"\u76ee\u7684\u5730\u503c")}),a("value",{initialValue:this.props.editRecord?this.props.editRecord.value:"",rules:[{required:!0,message:"\u76ee\u7684\u5730\u503c\u4e0d\u80fd\u4e3a\u7a7a"}]})(V.default.createElement(i.default,null)))))}}]),t}(C.Component),x=d.default.create()(_);t.default=(0,y.connect)()(x),e.exports=t.default}});