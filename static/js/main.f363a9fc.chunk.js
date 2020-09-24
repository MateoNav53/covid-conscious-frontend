(this["webpackJsonpcovid-conscious-app"]=this["webpackJsonpcovid-conscious-app"]||[]).push([[0],{160:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),l=(a(82),a(8)),s=function(e){return fetch("https://covid-conscious.herokuapp.com/user/login",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"token"}}).then((function(e){return 401!==e.status?e.json().then((function(e){return e})):{isAuthenticated:!1,user:{username:""}}}))},i=function(e){return fetch("https://covid-conscious.herokuapp.com/user/register",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))},m=function(){return fetch("https://covid-conscious.herokuapp.com/user/logout").then((function(e){return e.json()})).then((function(e){return e}))},u=function(){return fetch("https://covid-conscious.herokuapp.com/user/authenticated",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return 401!==e.status?e.json().then((function(e){return e})):{isAuthenticated:!1,user:{username:""}}}))},d=a(11),p=Object(n.createContext)(),h=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(d.a)(a,2),c=r[0],l=r[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),m=i[0],h=i[1];return Object(n.useEffect)((function(){u().then((function(e){l(e.user),h(e.isAuthenticated)}))}),[]),o.a.createElement("div",null,o.a.createElement(p.Provider,{value:{user:c,setUser:l,isAuthenticated:m,setIsAuthenticated:h}},t))};var g=function(){var e=Object(n.useContext)(p),t=e.isAuthenticated,a=e.user,r=e.setIsAuthenticated,c=e.setUser,s=function(){m().then((function(e){e.success&&(c(e.user),r(!1))}))};return o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary sticky-top"},o.a.createElement("a",{href:"/",className:"brand mb-auto"},"Covid Conscious"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#link_targets","aria-controls":"link_targets","aria-expanded":"false"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"link_targets"},o.a.createElement("ul",{className:"nav-links navbar-nav navbar-brand ml-auto"},t?o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/"},"Home")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/addlog"},"Add Log")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/loglist"},"View ",a.username,"'s Logs")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/covidfaq"},"COVID FAQ")),o.a.createElement(l.b,{to:"/"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:s},"Logout"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/"},"Home")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/login"},"Login")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/register"},"Register")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(l.b,{to:"/covidfaq"},"COVID FAQ"))))))},f=a(4);var b=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(d.a)(t,2),r=a[0],c=a[1],l=Object(n.useContext)(p),i=Object(n.useState)(""),m=Object(d.a)(i,2),u=m[0],h=m[1];return o.a.createElement("div",null,o.a.createElement("form",{action:"",method:"post",className:"col-md-8 offset-md-2",onSubmit:function(t){t.preventDefault();var a=t.target.value;console.log("newvaluestr",a),c({username:a,password:a}),s(r).then((function(t){console.log(t);var a=t.isAuthenticated,n=t.user;a?(l.setUser(n),l.setIsAuthenticated(a),h(""),e.history.push("/loglist")):h("Incorrect credentials, please re-enter")})).catch((function(e){return console.log("ERROR",e)}))}},o.a.createElement("h1",{className:"form-group page-header"},"Login"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{type:"text",placeholder:"Enter username",value:r.username||"",name:"username",onChange:function(e){return c(Object(f.a)(Object(f.a)({},r),{},{username:e.target.value}))},id:"username",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",placeholder:"Enter password",value:r.password||"",name:"password",onChange:function(e){return c(Object(f.a)(Object(f.a)({},r),{},{password:e.target.value}))},id:"password",className:"form-control",required:!0})),o.a.createElement("button",{type:"submit",className:"btn btn-warning"},"Login"),u?o.a.createElement("div",{className:"alert alert-danger"},u):null))},E=function(e){var t="alert ";return e.message.errorMessage?t+="alert-danger":t+="alert-primary",t+" text-center"},v=function(e){return o.a.createElement("div",{className:E(e),role:"alert"},e.message.messagBody)};var w=function(e){var t=Object(n.useState)({username:"",fullname:"",email:"",password:""}),a=Object(d.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),m=s[0],u=s[1],p=Object(n.useRef)(null);return Object(n.useEffect)((function(){return function(){clearTimeout(p)}}),[]),o.a.createElement("div",null,o.a.createElement("form",{action:"",method:"post",onSubmit:function(t){t.preventDefault(),c({username:t.target.value,fullname:t.target.value,email:t.target.value,password:t.target.value}),i(r).then((function(t){var a=t.message;u(a),c({username:"",fullname:"",email:"",password:""}),a.errorMessage||(p=setTimeout((function(){e.history.push("/login")}),2500))}))},className:"col-md-8 offset-md-2"},o.a.createElement("h1",{className:"form-group page-header"},"Register"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{type:"text",placeholder:"Enter username",value:r.username||"",onChange:function(e){return c(Object(f.a)(Object(f.a)({},r),{},{username:e.target.value}))},name:"username",id:"username",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"fullname"},"Full Name"),o.a.createElement("input",{type:"text",placeholder:"Enter full name",value:r.fullname||"",onChange:function(e){return c(Object(f.a)(Object(f.a)({},r),{},{fullname:e.target.value}))},name:"fullname",id:"full-name",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",placeholder:"Enter email",value:r.email||"",onChange:function(e){return c(Object(f.a)(Object(f.a)({},r),{},{email:e.target.value}))},name:"email",id:"email",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",placeholder:"Enter password",value:r.password||"",onChange:function(e){return c(Object(f.a)(Object(f.a)({},r),{},{password:e.target.value}))},name:"password",id:"password",className:"form-control",required:!0})),o.a.createElement("button",{type:"submit",className:"btn btn-warning"},"Register")),m?o.a.createElement(v,{message:m}):null)};var y=function(){var e=Object(n.useContext)(p).isAuthenticated;return o.a.createElement("div",{className:"home-container"},o.a.createElement("h1",{className:"home-item"},o.a.createElement("strong",null,"Covid Conscious")),o.a.createElement("h4",{className:"home-item"},"Keep a log. Stay on top of your risk"),o.a.createElement("div",{className:"d-flex"},e?null:o.a.createElement("div",{className:"d-flex"},o.a.createElement(l.b,{to:"/login"},o.a.createElement("button",{type:"button",className:"btn btn-warning home-btn"},"Login")),o.a.createElement(l.b,{to:"/register"},o.a.createElement("button",{type:"button",className:"btn btn-warning home-btn"},"Register")))),o.a.createElement("div",{className:"elfsight-app-4bfe4b25-9e78-4673-836b-f6dfb62163e1 widget"}))},N=a(7),j=a(74),O=a.n(j),k=a(32),C=a.n(k),D=(a(104),a(47));var A=function(){var e=Object(n.useState)({logDate:new Date,location:"",duration:0,interactions:0}),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(N.g)();return o.a.createElement("div",null,o.a.createElement("form",{action:"",className:"col-md-8 offset-md-2",method:"post",onSubmit:function(e){e.preventDefault(),r({location:e.target.value,logDate:e.target.selected,duration:e.target.value,interactions:e.target.value}),console.log(a),C.a.post("https://covid-conscious.herokuapp.com/user/covidlog/add",a).then((function(e){return console.log(e.data)})),e.target.reset(),c.push("/loglist"),c.go(0)}},o.a.createElement("h1",{className:"form-group add-log-header"},"Add New Activities Log"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"log-location"},"Location"),o.a.createElement("input",{type:"text",placeholder:"Enter location",name:"location",value:a.location||"",onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{location:e.target.value}))},id:"log-location",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"date-of-log"},"Date"),o.a.createElement(O.a,{selected:a.logDate||new Date,name:"logDate",onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{logDate:e}))},id:"date-of-log",className:"form-control",maxDate:new Date,minDate:Object(D.default)(new Date,14),required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"duration"},"Time spent at location(minutes)"),o.a.createElement("input",{type:"number",placeholder:"Enter time spent",id:"duration",name:"duration",className:"form-control",value:a.duration||"",onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{duration:e.target.value}))},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"interactions"},"Interactions within 6 feet"),o.a.createElement("input",{type:"number",placeholder:"Enter number",id:"interactions",name:"interactions",className:"form-control",value:a.interactions||"",onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{interactions:e.target.value}))},required:!0})),o.a.createElement("button",{type:"submit",className:"btn btn-warning"},"Add Log")))},x=function(){return fetch("https://covid-conscious.herokuapp.com/user/covidlog",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return console.log(e),401!==e.status?e.json().then((function(e){return e})):{message:{messagBody:"UnAuthorized",errorMessage:!0}}}))};var S=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(p),s=Object(n.useRef)(0),i=Object(N.g)();return Object(n.useEffect)((function(){x().then((function(e){e.logs.sort((function(e,t){return e.logDate<t.logDate?1:-1})),e.logs.forEach((function(e){var t=new Date;t.setDate(t.getDate()-14),e.logDate>t.toISOString()&&(s.current+=e.interactions)})),r(e.logs)}))}),[s]),o.a.createElement("div",null,o.a.createElement("h1",{className:"view-log-header"},"View Log History"),o.a.createElement("h3",{className:"view-log-greeting"},"Hello ",c.user.username,","),o.a.createElement("div",{className:"d-flex flex-wrap"},o.a.createElement("p",{className:"counter col-md-7"},"You've come within 6 feet of ",s.current," people in the last 14 days"),o.a.createElement(l.b,{to:"/addlog"},o.a.createElement("button",{type:"button",className:"btn btn-warning add-btn"},"Add New Log"))),o.a.createElement("table",{className:"table table-hover text-center"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Date"),o.a.createElement("th",{scope:"col"},"Location"),o.a.createElement("th",{scope:"col"},"Duration (in minutes)"),o.a.createElement("th",{scope:"col"},"# of Interactions within 6 Feet"),o.a.createElement("th",{scope:"col"},"Delete Log"))),o.a.createElement("tbody",null,a.map((function(e){return o.a.createElement("tr",{key:e._id},o.a.createElement("td",null,e.logDate.substring(0,10)),o.a.createElement("td",null,e.location),o.a.createElement("td",null,e.duration),o.a.createElement("td",null,e.interactions),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-danger",type:"submit",name:"delete",onClick:function(t){return function(e,t){t.preventDefault(),r(a.filter((function(t){return t._id!==e}))),C.a.delete("https://covid-conscious.herokuapp.com/user/covidlog/"+e).then((function(e){return console.log(e.data)})),i.go(0)}(e._id,t)}},"Delete")))})))))},F=function(){return o.a.createElement("div",{className:"col-md-10 offset-md-1"},o.a.createElement("h2",{className:"header"},"About COVID-19"),o.a.createElement("p",null,"The Coronavirus(COVID-19) is a devastating respiratory illness with fatal potential. It mainly spreads through respiratory droplets which can be exchanged through close person-to-person interactions. Actions such as sneezing, coughing, or just normal talking have the chance to transfer to individuals and infect them"),o.a.createElement("p",null,"The virus is at its highlest likelihood of transmission when people are within 6 feet of each other. The virus can also be spread by people without symptoms, which is why mandatory measures have been instituted across the globe for citizens to wear masks in public. If contracted, the virus typically incubates within people for 14 days."),o.a.createElement("h2",{className:"header"},"How Covid-Conscious Can Help"),o.a.createElement("p",null,"Outside of wearing a mask, the best thing we can do to combat the pandemic is be cognizant of our behavior and encourage others to do the same. We need to work in unison to minimize the risk keep us, our loved ones, and the strangers around us free from Coronavirus."),o.a.createElement("p",null,"Everybody should be staying inside to minimize their chance, but if you have to go out, it's smart keep a log of where you've been and how many people you've come in contact with. That way, if you find out later that someone contracted Covid at a location you logged in the last 14 days, or you were the one to catch it, you know who to contact and that you need to get yourself tested. Covid-Conscious allows you to create and save logs, and keeps track of how many people you've come in contact with in the last 14 days. When you look back at how many people you've come in contact with in the last two weeks, and multiply that exponentially by how many people each one of those people has come in contact with, the potential for contact tracing is staggering. That's why you need to keep track of your social activity. To know your risk and prevent things from getting out of hand."),o.a.createElement("p",null,"More COVID-19 information can be found on ",o.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/faq.html",id:"referral",className:"faq-link"},"The Center for Disease Control's website")," "))},q=a(38),I=function(e){var t=e.component,a=Object(q.a)(e,["component"]),r=Object(n.useContext)(p).isAuthenticated;return o.a.createElement(N.b,Object.assign({},a,{render:function(e){return r?o.a.createElement(t,e):o.a.createElement(N.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},L=function(e){var t=e.component,a=Object(q.a)(e,["component"]),r=Object(n.useContext)(p).isAuthenticated;return o.a.createElement(N.b,Object.assign({},a,{render:function(e){return r?o.a.createElement(N.a,{to:{pathname:"/loglist",state:{from:e.location}}}):o.a.createElement(t,e)}}))};a(160);var T=function(){return o.a.createElement(l.a,null,o.a.createElement(g,null),o.a.createElement(N.d,null,o.a.createElement(N.b,{path:"/",exact:!0,component:y}),o.a.createElement(L,{path:"/register",component:w}),o.a.createElement(L,{path:"/login",component:b}),o.a.createElement(I,{path:"/loglist",component:S}),o.a.createElement(I,{path:"/addlog",component:A}),o.a.createElement(N.b,{path:"/addlog",component:A}),o.a.createElement(N.b,{path:"/loglist",component:S}),o.a.createElement(N.b,{path:"/register",component:w}),o.a.createElement(N.b,{path:"/login",component:b}),o.a.createElement(N.b,{path:"/covidfaq",component:F})),o.a.createElement("div",{className:"App"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null,o.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(161)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.f363a9fc.chunk.js.map