require=function i(a,c,u){function s(e,t){if(!c[e]){if(!a[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(h)return h(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=c[e]={exports:{}};a[e][0].call(o.exports,function(t){var r=a[e][1][t];return s(r||t)},o,o.exports,i,a,c,u)}return c[e].exports}for(var h="function"==typeof require&&require,t=0;t<u.length;t++)s(u[t]);return s}({heart:[function(t,r,e){"use strict";cc._RF.push(r,"34306UpgIRDX4/Q17f0ufeV","heart"),cc.Class({extends:cc.Component,properties:{heart:cc.Node,rotation3D:cc.Node},onLoad:function(){var t=this;this.playMusic("Sound/bg"),this.currCount=0,this.fun1(),this.node.on("click",function(){switch(t.rotation3D.active=!0,t.rotation3D.anchorY=.5,t.currCount++,5===t.currCount&&(t.currCount=0),t.currCount){case 0:t.fun1();break;case 1:t.fun2();break;case 2:t.fun3();break;case 3:t.fun4();break;case 4:t.fun5()}t.rotation3D.active=!1}),this.rotation3D.active=!1},start:function(){},fun1:function(){this.heart.removeAllChildren();for(var t=0;t<180;t+=30){var r=cc.instantiate(this.rotation3D),e=cc.rotateBy(1,180-t,t);r.runAction(cc.repeatForever(e)),r.parent=this.heart}},fun2:function(){this.heart.removeAllChildren();for(var t=0;t<180;t+=30){var r=cc.instantiate(this.rotation3D),e=cc.rotateBy(1,t,t);r.runAction(cc.repeatForever(e)),r.parent=this.heart}},fun3:function(){this.heart.removeAllChildren();for(var t=0;t<180;t+=30){var r=cc.instantiate(this.rotation3D),e=cc.rotateBy(1,30,t);r.runAction(cc.repeatForever(e)),r.parent=this.heart}},fun4:function(){this.heart.removeAllChildren();for(var t=0;t<180;t+=30){var r=cc.instantiate(this.rotation3D),e=cc.rotateBy(1,0,t);r.runAction(cc.repeatForever(e)),r.parent=this.heart}},fun5:function(){this.rotation3D.anchorY=0,this.heart.removeAllChildren();for(var t=0;t<180;t+=30){var r=cc.instantiate(this.rotation3D),e=cc.rotateBy(1,180-t,t);r.runAction(cc.repeatForever(e)),r.parent=this.heart}},update:function(){},playMusic:function(t){var e=this;cc.loader.loadRes(t,cc.AudioClip,function(t,r){e.audioID=cc.audioEngine.playMusic(r,!0)})}}),cc._RF.pop()},{}]},{},["heart"]);