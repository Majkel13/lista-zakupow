(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,t,e){n.exports=e(30)},24:function(n,t,e){},25:function(n,t,e){},30:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(15),i=e.n(o),c=(e(24),e(4)),s=e(5),u=e(8),d=e(6),l=e(9),f=(e(25),e(1)),p=e(2);function b(){var n=Object(f.a)(["\n    display:flex;\n    justify-content: space-between;\n    border:2px solid #00a7fa;\n    border-radius: 18px;\n    padding: 5px;\n    background: #232323;\n"]);return b=function(){return n},n}function h(){var n=Object(f.a)(["\n    padding: 5px;\n    font-size: 0.7em;\n    background: #232323;\n    color: #d3d4d6;\n    width: 100%;\n    margin-right: 7px;\n    border:0px;\n    -webkit-appearance: none;\n    border-radius: 18px;\n"]);return h=function(){return n},n}function g(){var n=Object(f.a)(["\n    background: #232632;\n    color: #00a7fa;\n    width:80px;\n    /* height: 32px; */\n    font-size: 1.7em;\n    border: 0px;\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    border-radius: 18px;\n"]);return g=function(){return n},n}var v=p.a.button(g()),k=p.a.input(h()),x=p.a.div(b()),m=function(n){var t=n.onSubmit,e=n.onChange,a=n.draft,o=n.onKeyPress;return r.a.createElement(x,null,r.a.createElement(k,{type:"text",maxLength:"30",value:a,onChange:e,onKeyPress:o}),r.a.createElement(v,{onClick:t},"+"))},w=e(3),y=e.n(w);function j(){var n=Object(f.a)(["\n\ncursor: pointer;\ncolor: ",";\ntext-decoration: ",";\n"]);return j=function(){return n},n}function E(){var n=Object(f.a)(["\ndisplay: flex;\njustify-content: space-between;\nborder-radius: 10px;\nborder-bottom: #fff solid;\npadding: 15px 5px 5px 10px;\nmargin-bottom: 7px;\nmargin-top: 7px;\n"]);return E=function(){return n},n}function O(){var n=Object(f.a)(["\ncolor: #d00;\n\n:hover{\n    color: #f00;\n    cursor: pointer;\n}\n"]);return O=function(){return n},n}function S(){var n=Object(f.a)(["\n color: #00a7fa; \n text-align:center;\n"]);return S=function(){return n},n}function C(){var n=Object(f.a)(["\n\n\nborder: 1px solid #1969ba;\nborder-radius: 10px;\nbackground: #1969ba;\nbackground: -webkit-linear-gradient(top, #1969ba 0, #0f4174 100%);\nbackground: linear-gradient(to bottom, #1969ba 0, #0f4174 100%);\n-webkit-box-shadow: inset 0px 1px 1px 0px #A2D1FF;\nbox-shadow: inset 0px 1px 1px 0px #A2D1FF;\npadding: 20px;\ncolor: #fff;\nfont-size: 15px;\nline-height: 1.54em;\npadding: 20px;\nmargin: 0 auto;\nmargin-top: 30px;\nmax-width: 680px;\nwidth: 80%;\n"]);return C=function(){return n},n}var z=p.a.div(C()),A=p.a.h1(S()),W=p.a.div(O()),F=p.a.div(E()),P=p.a.div(j(),function(n){return n.done?"black":"#FFFEB6"},function(n){return n.done?"line-through":"auto"}),I=function(n){function t(){var n,e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(u.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(r)))).state={tasks:e.props.tasks,draft:""},e.updateDraft=function(n){e.setState({draft:n.target.value})},e.addItem=function(){var n=e.state,t=n.tasks,a=n.draft;if(""!==a){var r=t,o=1;if(r.length-1>=0)o=r[r.length-1].id+1;r.push({text:a,done:!1,id:o}),e.setState({tasks:r,draft:""}),y.a.set("tasks",t)}else alert("Pole nie mo\u017ce by\u0107 puste")},e.addItemEnter=function(n){"Enter"===n.key&&e.addItem()},e.update=function(n,t){var a=e.state.tasks,r=a;r.forEach(function(n){t===n.id&&(n.done=!n.done)}),e.setState({tasks:r}),y.a.set("tasks",a)},e.delete=function(n,t){var a=e.state.tasks.filter(function(n){return n.id!==t});e.setState({tasks:a}),y.a.set("tasks",a)},e}return Object(l.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({tasks:y.a.get("tasks")||[]})}},{key:"render",value:function(){var n=this,t=this.state,e=t.tasks,a=t.draft;return r.a.createElement(z,null,r.a.createElement(A,{key:""},"Lista zakup\xf3w"),e.map(function(t){return r.a.createElement(F,{key:t.id},r.a.createElement(P,{onClick:function(e){return n.update(e,t.id)},done:t.done,title:"Oznacz je\u015bli kupione"},t.text),r.a.createElement(W,{onClick:function(e){return n.delete(e,t.id)}},"usu\u0144"))}),r.a.createElement(m,{onSubmit:this.addItem,onChange:this.updateDraft,onKeyPress:this.addItemEnter,draft:a}))}}]),t}(a.Component);I.defaultProps={tasks:[]};var D=I,L=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null)}}]),t}(a.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(n,t){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/lista-zakupow",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/lista-zakupow","/service-worker.js");B?(function(n,t){fetch(n,{headers:{"Service-Worker":"script"}}).then(function(e){var a=e.headers.get("content-type");404===e.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):K(n,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(t,n)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.fdf003fe.chunk.js.map