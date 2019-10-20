(function(t){function e(e){for(var n,i,a=e[0],c=e[1],l=e[2],f=0,d=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/challenge-tnl-vue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"1cef":function(t,e,r){},4143:function(t,e,r){},5156:function(t,e,r){"use strict";var n=r("ea3c"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("AlertMessage",{attrs:{propAlert:t.alertMessage}}),t.loading?r("Loading"):t._e(),r("div",{staticClass:"container-div"},[r("SearchForm",{on:{"text-user-id":t.getTextUserId}}),r("GitProjects",{attrs:{textUserId:t.textUserId},on:{loading:t.getLoadingStatus,"alert-message":t.getAlertMsg}})],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-git-projects"},[""!=t.projectsList?r("table",{staticClass:"table is-striped is-primary"},[r("thead",t._l(t.tableColumns,(function(e){return r("th",{key:e,on:{click:function(){return t.changeFilterOrderBy(e)}}},[t._v(" "+t._s("name"===e?"Project":null)+" "+t._s("private"===e?"Private":null)+" "+t._s("html_url"===e?"URL":null)+" "+t._s("description"===e?"Description":null)+" "+t._s("language"===e?"Language":null)+" "),"ASC"==t.filterSelect.order?r("font-awesome-icon",{attrs:{icon:"arrow-up"}}):t._e(),"DESC"==t.filterSelect.order?r("font-awesome-icon",{attrs:{icon:"arrow-down"}}):t._e()],1)})),0),r("tbody",t._l(t.projectsList,(function(e){return r("tr",{key:e.id},t._l(t.tableColumns,(function(n){return r("td",{key:n,attrs:{id:n}},[t._v(t._s(e[n]))])})),0)})),0)]):t._e()])},a=[],c=(r("4de4"),r("4e82"),r("d3b7"),r("96cf"),r("89ba")),l={name:"GitProjects",props:{textUserId:String},data:function(){return{projectsList:[],tableColumns:["name","private","html_url","description","language"],filterSelect:{filter:"name",order:"ASC"}}},watch:{textUserId:function(){return this.loadProjects()}},methods:{loading:function(t){this.$emit("loading",t)},showAlertMessage:function(t,e){this.$emit("alert-message",{color:t,msg:e})},loadProjects:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading(!0),e="https://api.github.com/users/".concat(this.textUserId,"/repos"),t.next=4,fetch(e).then((function(t){return t.json()})).catch((function(t){alert("Erro: ".concat(t))}));case 4:r=t.sent,"Not Found"==r.message?this.showAlertMessage("is-warning","Conta do github não encontrada!"):""==r?this.showAlertMessage("is-info","Conta não possui nenhum projeto!"):(this.projectsList=r,this.showAlertMessage("is-primary","Todos os projetos do usuários estão listados!")),this.loading(!1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filterOrderBy:function(t){var e=this.filterSelect.filter,r=1;return r="ASC"==this.filterSelect.order?1:-1,t.sort((function(t,n){return String(t[e]).toUpperCase()>String(n[e]).toUpperCase()?r:-1*r}))},changeSpanOrder:function(){"ASC"==this.filterSelect.order?this.filterSelect.order="DESC":this.filterSelect.order="ASC"},changeFilterOrderBy:function(t){this.changeSpanOrder(),this.filterSelect.filter=t,this.projectsList=this.filterOrderBy(this.projectsList)}}},u=l,f=(r("ba7b"),r("2877")),d=Object(f["a"])(u,i,a,!1,null,"e2feb776",null),p=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-search-form"},[r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),function(){return t.emitTextUserId()}()}}},[r("label",{staticClass:"column is-full"},[t._v("Search for a github user Account:")]),r("div",{staticClass:"column is-full is-flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.textUserId,expression:"textUserId"}],staticClass:"column is-3 input",attrs:{type:"text",placeholder:"User Id",required:""},domProps:{value:t.textUserId},on:{input:function(e){e.target.composing||(t.textUserId=e.target.value)}}}),r("button",{staticClass:"button is-info",attrs:{type:"column is-4 submit"}},[t._v("Search")])])])])},m=[],g={name:"SearchForm",data:function(){return{textUserId:"josiel27"}},methods:{emitTextUserId:function(){this.$emit("text-user-id",this.textUserId)}}},v=g,b=(r("8330"),Object(f["a"])(v,h,m,!1,null,"44af9191",null)),_=b.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-loading"},[r("div")])}],S={name:"Loading"},j=S,y=(r("afa3"),Object(f["a"])(j,w,x,!1,null,"63cc0b45",null)),A=y.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.showAlert,expression:"showAlert"}],staticClass:"main-alert-message"},[r("div",{staticClass:"notification",class:t.propAlert.color},[r("button",{staticClass:"delete",on:{click:t.closeAlert}}),t._v(" "+t._s(t.propAlert.msg)+" ")])])},O=[],U={name:"AlertMessage",data:function(){return{showAlert:!1}},props:{propAlert:{msg:"",color:""}},watch:{propAlert:function(){return this.showAlertMessage()}},methods:{showAlertMessage:function(){this.showAlert=!0,setTimeout(function(){this.showAlert=!1}.bind(this),2500)},closeAlert:function(){this.showAlert=!1}}},M=U,I=(r("5156"),Object(f["a"])(M,C,O,!1,null,"0bd55e6c",null)),P=I.exports,L={name:"app",components:{Loading:A,GitProjects:p,SearchForm:_,AlertMessage:P},data:function(){return{textUserId:"",loading:!1,alertMessage:{},colorMessage:"is-primary"}},methods:{getTextUserId:function(t){this.textUserId=t},getLoadingStatus:function(t){this.loading=t},getAlertMsg:function(t){this.alertMessage=t}}},$=L,k=(r("034f"),Object(f["a"])($,s,o,!1,null,null,null)),E=k.exports,T=r("ecee"),F=r("c074"),B=r("ad3d");T["c"].add(F["b"],F["a"]),n["a"].component("font-awesome-icon",B["a"]),r("b383"),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(E)}}).$mount("#app")},8330:function(t,e,r){"use strict";var n=r("4143"),s=r.n(n);s.a},"85ec":function(t,e,r){},afa3:function(t,e,r){"use strict";var n=r("1cef"),s=r.n(n);s.a},b383:function(t,e,r){},ba7b:function(t,e,r){"use strict";var n=r("feaf"),s=r.n(n);s.a},ea3c:function(t,e,r){},feaf:function(t,e,r){}});
//# sourceMappingURL=app.dbdcdf5d.js.map