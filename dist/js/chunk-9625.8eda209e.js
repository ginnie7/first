(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9625"],{1511:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background"},[s("h2",[t._v("Welcome!")]),s("h3",[t._v("You are under a protected route. You can interact with users.")]),s("ul",[s("li",[t._v(t._s(this.users))])]),s("button",{staticClass:"logout",on:{click:t.logout}},[t._v("Logout")])])},u=[],a=s("c93e"),c=(s("cadf"),s("551c"),s("097d"),s("2f62")),o=s("bc3a"),r=s.n(o),i={data:function(){return{users:{}}},created:function(){var t=this;r.a.get("https://stage.apis.chatbot.gavagai.io/api/v1/user").then(function(e){t.users=e.data.users}).catch(function(e){t.errors.push(e)})},methods:Object(a["a"])({},Object(c["b"])(["logout"]))},l=i,b=(s("db8b"),s("2877")),d=Object(b["a"])(l,n,u,!1,null,null,null);d.options.__file="User.vue";e["default"]=d.exports},db8b:function(t,e,s){"use strict";var n=s("f4b5"),u=s.n(n);u.a},f4b5:function(t,e,s){}}]);
//# sourceMappingURL=chunk-9625.8eda209e.js.map