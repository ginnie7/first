(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a55b"],{a55b:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Login")},a=[],r=(o("cadf"),o("551c"),o("097d"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"background"},[o("div",{staticClass:"login"},[e.loggingIn?o("div",{staticClass:"container-loading"},[o("img",{attrs:{src:"/loading.gif",alt:"Loading Icon"}})]):e._e(),o("img",{attrs:{src:"/gavagai.png",width:"340px",alt:"Gavagai logo"}}),o("h2",[e._v("Chatbot Tool")]),o("form",{on:{submit:function(t){return t.preventDefault(),e.loginSubmit(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"username",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),o("button",{attrs:{type:"submit"}},[e._v("LOGIN")]),e.loginError?o("p",{staticStyle:{color:"red"}},[e._v(e._s(e.loginError))]):e._e(),o("small",[e._v("Forgot Password?")])])])])}),s=[],i=o("c93e"),l=o("2f62"),u={data:function(){return{username:"",password:""}},computed:Object(i["a"])({},Object(l["c"])(["loggingIn","loginError"])),methods:Object(i["a"])({},Object(l["b"])(["doLogin"]),{loginSubmit:function(){this.doLogin({username:this.username,password:this.password})}})},c=u,d=o("2877"),p=Object(d["a"])(c,r,s,!1,null,null,null);p.options.__file="Login.vue";var g=p.exports,m={components:{Login:g}},v=m,w=Object(d["a"])(v,n,a,!1,null,null,null);w.options.__file="Login.vue";t["default"]=w.exports}}]);
//# sourceMappingURL=a55b.3890035b.js.map