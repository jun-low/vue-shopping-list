(function(t){function e(e){for(var r,i,u=e[0],a=e[1],p=e[2],l=0,b=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);s&&s(e);while(b.length)b.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==c[a]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},c={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-shopping-list/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var s=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3068:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"app"},o=Object(r["e"])("footer",null,[Object(r["d"])(" Illustration by Kathy Dong. Code and Design by "),Object(r["e"])("a",{href:"https://jun-low.github.io/"},"Jun Low"),Object(r["d"])(". Made with 🛒 in M'sia. ")],-1);function i(t,e,n,i,u,a){var p=Object(r["k"])("shopping-list");return Object(r["f"])(),Object(r["c"])("div",c,[Object(r["e"])(p,{msg:"Welcome to my shopping list app"}),o])}var u=Object(r["p"])("data-v-1154221c");Object(r["h"])("data-v-1154221c");var a={class:"form-container"},p=Object(r["e"])("img",{alt:"Shoppingd List",width:"400",src:"https://cdn.dribbble.com/users/633402/screenshots/5755508/healthyeating_infographic-02.png"},null,-1),s={class:"input-container"},l=Object(r["e"])("h2",null,"My Shopping List",-1),b=Object(r["e"])("button",{type:"submit",class:"submit"},"Add",-1),f={class:"list-container"};Object(r["g"])();var d=u((function(t,e,n,c,o,i){return Object(r["f"])(),Object(r["c"])("section",null,[Object(r["e"])("div",a,[p,Object(r["e"])("form",{onSubmit:e[2]||(e[2]=Object(r["o"])((function(){return c.addItem.apply(c,arguments)}),["prevent"]))},[Object(r["e"])("div",s,[l,Object(r["n"])(Object(r["e"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.state.input=t}),type:"text",placeholder:"Item Name"},null,512),[[r["m"],c.state.input]]),b])],32)]),Object(r["e"])("div",f,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(c.state.items,(function(t,e){return Object(r["f"])(),Object(r["c"])("ul",{key:e},[Object(r["e"])("li",null,[Object(r["d"])(Object(r["l"])(t)+" ",1),Object(r["e"])("button",{onClick:function(t){return c.removeItem(e)}},"X",8,["onClick"])])])})),128))])])})),j=(n("a434"),{setup:function(){var t=O(),e=t.state,n=t.addItem,r=t.removeItem;return{state:e,addItem:n,removeItem:r}}});function O(){var t=Object(r["i"])({input:"",items:["3 Apples"]}),e=function(){""!==t.input&&(t.items.push(t.input),t.input="")},n=function(e){t.items.splice(e,1)};return{state:t,addItem:e,removeItem:n}}n("92a9");j.render=d,j.__scopeId="data-v-1154221c";var m=j,v={name:"App",components:{ShoppingList:m}};n("64be");v.render=i;var h=v;Object(r["b"])(h).mount("#app")},"64be":function(t,e,n){"use strict";n("3068")},"92a9":function(t,e,n){"use strict";n("e014")},e014:function(t,e,n){}});
//# sourceMappingURL=app.6e7d3b90.js.map