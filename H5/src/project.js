window.__require=function t(i,o,n){function s(c,h){if(!o[c]){if(!i[c]){var a=c.split("/");if(a=a[a.length-1],!i[a]){var u="function"==typeof __require&&__require;if(!h&&u)return u(a,!0);if(e)return e(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var r=o[c]={exports:{}};i[c][0].call(r.exports,function(t){return s(i[c][1][t]||t)},r,r.exports,t,i,o,n)}return o[c].exports}for(var e="function"==typeof __require&&__require,c=0;c<n.length;c++)s(n[c]);return s}({H5Viode:[function(t,i,o){"use strict";cc._RF.push(i,"280c3rsZJJKnZ9RqbALVwtK","H5Viode");var n=0,s=!1;function e(t){console.log("H5Viode "+t)}cc.Class({extends:cc.Component,properties:{touch:cc.Node,jiantou:cc.Node,zhuanchang:cc.Node,duihuakuang:cc.Node,duihuatext:cc.Label,changjinglist:[cc.Node]},onLoad:function(){this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this),n=0,!1,s=!1,this.pageList=[this.page1.bind(this),this.page2.bind(this)]},start:function(){var t=this;this.startShow(this.changjinglist[0],function(){t.startShow(t.changjinglist[1],function(){t.jiantou.active=!0,s=!0})})},touchStart:function(t){n=t.touch._point.y,!1,this.touchMove(t),this.touch.getComponent("Touch").startBodong()},touchMove:function(t){var i=this.node.convertToNodeSpaceAR(t.touch._point);this.touch.setPosition(i)},touchEnd:function(t){50<t.touch._point.y-n&&this.taskMoveUp(),this.touch.getComponent("Touch").stopBodong()},taskMoveUp:function(){s&&(e("\u53ef\u5426\u4e0a\u6ed1="+(s=!1)),this.jiantou.active=!1,0<this.pageList.length&&this.pageList.shift()())},startShow:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9;t.getComponent("ShowAndHide").startShow(i,o)},startHide:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9;t.getComponent("ShowAndHide").startHide(i,o)},page1:function(){var t=this;this.duihuatext.string="\u7b2c\u4e00\u89c6\u89d2\u7684\u6211\uff08\u777f\u667a\u3001\u7406\u6027\uff09\uff1a\n\u4f60\u4eec\u5728\u5e72\u561b\uff1f",this.startShow(this.duihuakuang),this.startShow(this.duihuatext.node,function(){s=!0,t.jiantou.active=!0})},page2:function(){var t=this;this.startHide(this.duihuakuang,function(){t.startShow(t.duihuakuang,null,20),t.duihuatext.string="\u79bb\u6211\u6700\u8fd1\u7684\u732a\uff08\u5929\u771f\u3001\u6c99\u96d5\uff09\uff1a\n\u5c71\u9876\u4e0a\u6709\u80a5\u7f8e\u7684\u732a\u8349\uff0c\u6211\u4eec\u5728\u7b49\u98ce\u628a\u6211\u4eec\u5439\u8d77\u6765\u5440\uff5e",t.startShow(t.duihuatext.node,function(){s=!0,t.jiantou.active=!0},20)},20)}}),cc._RF.pop()},{}],ShowAndHide:[function(t,i,o){"use strict";cc._RF.push(i,"1e9a1UOwlhCSafNlsiHO61y","ShowAndHide"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},startShow:function(t,i){this.startStutas=1,this.speed=i,this.opacity=0,this.node.active=!0,this.callback=t,this.node.opacity=this.opacity},startHide:function(t,i){this.startStutas=-1,this.opacity=255,this.speed=i,this.callback=t,this.node.opacity=this.opacity},update:function(){0!=this.startStutas&&(this.opacity=0<this.startStutas?this.opacity+this.speed:this.opacity-this.speed,(this.opacity<0||255<this.opacity)&&(this.startStutas=0,this.callback&&this.callback(),this.node.active=!(this.opacity<0),this.opacity=this.opacity<0?0:255),this.node.opacity=this.opacity)}}),cc._RF.pop()},{}],Touch:[function(t,i,o){"use strict";cc._RF.push(i,"3e6b8a6MaFP4qUURiKoFsYL","Touch"),cc.Class({extends:cc.Component,properties:{bodongAni:cc.Animation},onLoad:function(){},startBodong:function(){this.isStop=!1,this.bodongAni.play("bodong",0)},stopBodong:function(){var t=this;this.isStop=!0,this.timeer&&clearTimeout(this.timeer),this.timeer=setTimeout(function(){t.bodongAni.stop("bodong"),t.bodongAni.setCurrentTime(0,"bodong")},300)},update:function(){}}),cc._RF.pop()},{}]},{},["H5Viode","ShowAndHide","Touch"]);