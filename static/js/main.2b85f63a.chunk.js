(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,t,e){n.exports=e(25)},21:function(n,t,e){},22:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(12),i=e.n(o),c=(e(21),e(3)),u=e(4),d=e(6),s=e(5),l=e(7),f=(e(22),e(1)),p=e(2);function b(){var n=Object(f.a)(["\n\ncursor: pointer;\ncolor: ",";\ntext-decoration: ",";\n"]);return b=function(){return n},n}var h=p.a.div(b(),function(n){return n.done?"black":"#d572a0"},function(n){return n.done?"line-through":"auto"}),m=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(d.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(a)))).state={done:e.props.done},e.toggleDone=function(){e.setState({done:!e.state.done})},e}return Object(l.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){var n=this.props.text;return a.a.createElement(h,{onClick:this.toggleDone,done:this.state.done,title:"Oznacz je\u015bli kupione"},n)}}]),t}(r.Component);m.defaultProps={done:!1};var v=m;function g(){var n=Object(f.a)(["\n    display:flex;\n    justify-content: space-between;\n    border:2px solid #00a7fa;\n    border-radius: 18px;\n    padding: 5px;\n    background: #232323;\n"]);return g=function(){return n},n}function x(){var n=Object(f.a)(["\n    padding: 5px;\n    font-size: 0.7em;\n    background: #232323;\n    color: #d3d4d6;\n    width: 100%;\n    margin-right: 7px;\n    border:0px;\n    -webkit-appearance: none;\n    border-radius: 18px;\n"]);return x=function(){return n},n}function k(){var n=Object(f.a)(["\n    background: #232632;\n    color: #00a7fa;\n    width:80px;\n    /* height: 32px; */\n    font-size: 1.7em;\n    border: 0px;\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    border-radius: 18px;\n"]);return k=function(){return n},n}var j=p.a.button(k()),y=p.a.input(x()),O=p.a.div(g()),w=function(n){var t=n.onSubmit,e=n.onChange,r=n.draft,o=n.onKeyPress;return a.a.createElement(O,null,a.a.createElement(y,{type:"text",value:r,onChange:e,onKeyPress:o}),a.a.createElement(j,{onClick:t},"+"))};function E(){var n=Object(f.a)(["\ndisplay: flex;\njustify-content: space-between;\nbackground: #343744;\nborder-radius: 10px;\npadding: 14px;\nmargin-bottom: 7px;\nmargin-top: 7px;\n"]);return E=function(){return n},n}function C(){var n=Object(f.a)(["\ncolor: #b13418;\n\n\n:hover{\n    color: #dd1111;\n    cursor: pointer;\n}\n"]);return C=function(){return n},n}function S(){var n=Object(f.a)(["\n color: #00a7fa; \n text-align:center;\n"]);return S=function(){return n},n}function I(){var n=Object(f.a)(["\nbackground: #2f2143;\nwidth: 80%;\nmargin: 0 auto;\nborder-radius: 25px;\npadding: 20px;\nmargin-top: 30px;\nmax-width: 680px;\n"]);return I=function(){return n},n}var P=p.a.div(I()),z=p.a.h1(S()),D=p.a.div(C()),K=p.a.div(E()),A=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(d.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(a)))).state={tasks:e.props.tasks,draft:""},e.updateDraft=function(n){e.setState({draft:n.target.value})},e.addItem=function(){var n=e.state,t=n.tasks,r=n.draft;if(""!==r){var a=t,o=1;if(a.length-1>=0)o=a[a.length-1].id+1;a.push({text:r,done:!1,id:o}),e.setState({tasks:a,draft:""})}else alert("Pole nie mo\u017ce by\u0107 puste")},e.addItemEnter=function(n){"Enter"===n.key&&e.addItem()},e.delete=function(n,t){var r=e.state.tasks.filter(function(n){return n.id!==t});e.setState({tasks:r})},e}return Object(l.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){var n=this,t=this.state,e=t.tasks,r=t.draft;return a.a.createElement(P,null,a.a.createElement(z,{key:""},"Lista zakup\xf3w"),e.map(function(t){return a.a.createElement(K,{key:t.id},a.a.createElement(v,{id:t.id,text:t.text,done:t.done}),a.a.createElement(D,{onClick:function(e){return n.delete(e,t.id)}},"usu\u0144"))}),a.a.createElement(w,{onSubmit:this.addItem,onChange:this.updateDraft,onKeyPress:this.addItemEnter,draft:r}))}}]),t}(r.Component);A.defaultProps={tasks:[]};var B=A,J=function(n){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(B,null)}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()}).catch(function(n){console.error(n.message)})}},[[16,1,2]]]);
//# sourceMappingURL=main.2b85f63a.chunk.js.map