(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,n){e.exports=n(295)},295:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(43),c=n.n(r),i=n(25),d=n(26),u=n(28),s=n(27),l=n(29),m=n(93),p=n.n(m),h=n(306),v=n(307),f=n(302),b=n(304),j=n(305),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).onRemove=function(){var e=n.props;(0,e.onRemove)(e.todo.id)},n.onUpdate=function(){var e=n.props,t=e.onUpdate,o=e.todo;o.done=!o.done,t(o.id,o)},n}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t={text:{completed:{textDecoration:"line-through"},active:{textDecoration:"none"}},button:{completed:"google plus",active:"green"}};return a.a.createElement(b.a.Item,{key:e.id,index:e.id},a.a.createElement(b.a.Content,{style:e.done?t.text.completed:t.text.active},e.text,a.a.createElement(j.a,{floated:"right",onClick:this.onRemove,circular:!0,color:"google plus"},"-"),a.a.createElement(j.a,{floated:"right",circular:!0,onClick:this.onUpdate,color:e.done?t.button.completed:t.button.active},e.done?"Undone":"Done")))}}]),t}(a.a.Component),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).renderList=function(e){return e.map(function(e){var t=n.props,o=t.onRemove,r=t.onUpdate;return a.a.createElement(E,{key:e.id,todo:e,onRemove:o,onUpdate:r})})},n.renderEmptyList=function(){return a.a.createElement(f.a,{textAlign:"center"},"Add Some Tasks!")},n}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todos,t=e&&0!==e.length?this.renderList(e):this.renderEmptyList();return a.a.createElement(b.a,{fluid:"true",selection:!0,verticalAlign:"middle"},t)}}]),t}(a.a.Component),O=n(303),y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).onChange=function(e){var t=e.target.value;n.setState({text:t})},n.onSubmit=function(e){e.preventDefault();var t=n.state.text;(0,n.props.addToDo)({text:t,done:!1}),n.setState({text:""})},n.state={text:""},n}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.text;return a.a.createElement(O.a,{onSubmit:this.onSubmit},a.a.createElement(O.a.Group,null,a.a.createElement(O.a.Input,{placeholder:"Add New ToDo",onChange:this.onChange,value:e,required:!0,width:14}),a.a.createElement(O.a.Button,{color:"green",width:2},"Add")))}}]),t}(a.a.Component),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).addToDo=function(t){if(t||"object"===typeof t){t.id=(new Date).getTime()+p.a.random(0,1e3);var n=e.state.todos;n.push(t),e.setState({todos:n})}},e.removeToDo=function(t){if(t||"number"===typeof t){var n=e.state.todos;p.a.remove(n,function(e){return e.id===t}),e.setState({todos:n})}},e.updateToDo=function(t,n){if((t||"number"===typeof t)&&(n||"object"===typeof n)){var o=e.state.todos,a=o.findIndex(function(e){return e.id===t});Number.isInteger(a)&&a>=0&&(n.id=t,o[a]=n,e.setState({todos:o}))}},e.state={todos:[]},e}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.todos;return a.a.createElement("div",{className:"App"},a.a.createElement(h.a,{centered:!0,columns:"2"},a.a.createElement(h.a.Column,null,a.a.createElement(v.a,{attached:"top"},a.a.createElement(y,{addToDo:this.addToDo})),a.a.createElement(v.a,{raised:!0,stacked:!0,attached:"bottom"},a.a.createElement(g,{todos:e,onRemove:this.removeToDo,onUpdate:this.updateToDo})))))}}]),t}(a.a.Component);c.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[166,2,1]]]);
//# sourceMappingURL=main.1be1eb46.chunk.js.map