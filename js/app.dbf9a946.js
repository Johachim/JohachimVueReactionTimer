(function(t){function e(e){for(var r,i,s=e[0],a=e[1],u=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1697:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["e"])("h1",null,"Test Your Reaction Speed Below ",-1);function c(t,e,n,c,i,s){var a=Object(r["g"])("Block"),u=Object(r["g"])("Results");return Object(r["f"])(),Object(r["c"])("div",null,[o,Object(r["e"])("button",{class:"btn",onClick:e[1]||(e[1]=function(){return s.start&&s.start.apply(s,arguments)}),disabled:i.isPlaying},"PLAY",8,["disabled"]),i.isPlaying?(Object(r["f"])(),Object(r["c"])(a,{key:0,delay:i.delay,onEnd:s.endGame},null,8,["delay","onEnd"])):Object(r["d"])("",!0),i.showResults?(Object(r["f"])(),Object(r["c"])(u,{key:1,score:i.score},null,8,["score"])):Object(r["d"])("",!0)])}function i(t,e,n,o,c,i){return c.showBlock?(Object(r["f"])(),Object(r["c"])("div",{key:0,class:"block",onClick:e[1]||(e[1]=function(){return i.stopTimer&&i.stopTimer.apply(i,arguments)})},"CLICK ME")):Object(r["d"])("",!0)}var s={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var t=this;setTimeout((function(){t.showBlock=!0,t.startTimer()}),this.delay)},methods:{startTimer:function(){var t=this;this.timer=setInterval((function(){t.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}}};n("b87a");s.render=i;var a=s,u={class:"rank"};function l(t,e,n,o,c,i){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("h4",null,"Reaction time: "+Object(r["h"])(n.score)+" ms",1),Object(r["e"])("p",u,Object(r["h"])(c.rank),1)],64)}var f={props:["score"],data:function(){return{rank:null}},mounted:function(){this.score<200?this.rank="LIGHTNING SPEED!":this.score<350?this.rank="Good reflexes":this.score<500?this.rank="Not bad, but you can do better!":this.rank="You sleeping or what?"}};n("fbd8");f.render=l;var d=f,p={name:"App",components:{Block:a,Results:d},data:function(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start:function(){this.delay=1500+4e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame:function(t){this.score=t,this.isPlaying=!1,this.showResults=!0}}};n("7a69");p.render=c;var b=p;Object(r["b"])(b).mount("#app")},"7a69":function(t,e,n){"use strict";n("1697")},a494:function(t,e,n){},b87a:function(t,e,n){"use strict";n("a494")},d2c9:function(t,e,n){},fbd8:function(t,e,n){"use strict";n("d2c9")}});
//# sourceMappingURL=app.dbf9a946.js.map