(function(t){function e(e){for(var c,l,u=e[0],a=e[1],i=e[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);s&&s(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],c=!0,u=1;u<r.length;u++){var a=r[u];0!==n[a]&&(c=!1)}c&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var c={},n={app:0},o=[];function l(e){if(c[e])return c[e].exports;var r=c[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=c,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(r,c,function(e){return t[e]}.bind(null,c));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var s=a;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n={id:"app"};function o(t,e,r,o,l,u){var a=Object(c["e"])("Calculator");return Object(c["d"])(),Object(c["b"])("div",n,[Object(c["c"])(a,{projectTitle:"Calorie Calculator"})])}var l={class:"container h-100"},u={class:"d-flex justify-content-md-center align-items-center vh-100"},a={class:"jumbotron bg-white"},i={class:"form-group input-group-lg"},s=Object(c["c"])("label",null,"Product calories (per 100g)",-1),f={class:"form-group input-group-lg"},p=Object(c["c"])("label",null,"Product carbohydrates (per 100g)",-1),b={class:"form-group input-group-lg"},d=Object(c["c"])("label",null,"Product fats (per 100g)",-1),m={class:"form-group input-group-lg"},j=Object(c["c"])("label",null,"Product protein (per 100g)",-1),O={class:"form-group input-group-lg"},g=Object(c["c"])("label",null,"How much grams did you eat?",-1),h={class:"table table-danger"},v=Object(c["c"])("thead",null,[Object(c["c"])("tr",null,[Object(c["c"])("th",{scope:"col"},"Total calories"),Object(c["c"])("th",{scope:"col"},"Total carbohydrates"),Object(c["c"])("th",{scope:"col"},"Total fats"),Object(c["c"])("th",{scope:"col"},"Total protein")])],-1);function y(t,e,r,n,o,y){return Object(c["d"])(),Object(c["b"])("div",l,[Object(c["c"])("div",u,[Object(c["c"])("div",a,[Object(c["c"])("div",i,[s,Object(c["h"])(Object(c["c"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.form.kcal=t}),onKeypress:e[2]||(e[2]=function(t){return y.isNumber(t)}),id:"kcal"},null,544),[[c["g"],o.form.kcal]])]),Object(c["c"])("div",f,[p,Object(c["h"])(Object(c["c"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.form.carbs=t}),onKeypress:e[4]||(e[4]=function(t){return y.isNumber(t)}),id:"carbs"},null,544),[[c["g"],o.form.carbs]])]),Object(c["c"])("div",b,[d,Object(c["h"])(Object(c["c"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=function(t){return o.form.fats=t}),onKeypress:e[6]||(e[6]=function(t){return y.isNumber(t)}),id:"fats"},null,544),[[c["g"],o.form.fats]])]),Object(c["c"])("div",m,[j,Object(c["h"])(Object(c["c"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=function(t){return o.form.protein=t}),onKeypress:e[8]||(e[8]=function(t){return y.isNumber(t)}),id:"protein"},null,544),[[c["g"],o.form.protein]])]),Object(c["c"])("div",O,[g,Object(c["h"])(Object(c["c"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=function(t){return o.form.grams=t}),onKeypress:e[10]||(e[10]=function(t){return y.isNumber(t)}),id:"grams"},null,544),[[c["g"],o.form.grams]])]),Object(c["c"])("table",h,[v,Object(c["c"])("tbody",null,[Object(c["c"])("tr",null,[Object(c["c"])("th",null,Object(c["f"])(o.form.grams*o.form.kcal/100),1),Object(c["c"])("td",null,Object(c["f"])(o.form.grams*o.form.carbs/100),1),Object(c["c"])("td",null,Object(c["f"])(o.form.grams*o.form.fats/100),1),Object(c["c"])("td",null,Object(c["f"])(o.form.grams*o.form.protein/100),1)])])])])])])}var w={data:function(){return{form:{grams:null,kcal:null,carbs:null,fats:null,protein:null}}},methods:{isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e))return!0;t.preventDefault()}}};w.render=y;var x=w,P={name:"App",components:{Calculator:x}};r("64be");P.render=o;var k=P;r("f9e3"),r("2dd8");Object(c["a"])(k).mount("#app")},"64be":function(t,e,r){"use strict";r("c894")},c894:function(t,e,r){}});
//# sourceMappingURL=app.de5473a3.js.map