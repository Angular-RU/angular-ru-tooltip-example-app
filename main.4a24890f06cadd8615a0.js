(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,o){t.exports=o("2v48")},"2v48":function(t,e,o){"use strict";o.r(e);var n=o("ENSU"),i=o("kZht"),l=o("6uGs"),s=o("uryd"),r=o("P0vk"),a=o("aJOL"),u=o("FxgA"),c=o("IlSD"),d=o("1VvW"),h=o("8EXQ"),m=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Lb({type:t,selectors:[["app-root"]],decls:32,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","samples/guide"],[1,"dashboard__content"]],template:function(t,e){1&t&&(i.Wb(0,"mat-drawer-container",0),i.vc(1,"\n    "),i.Wb(2,"mat-drawer",1),i.vc(3,"\n        "),i.Wb(4,"mat-toolbar",2),i.vc(5,"\n            "),i.Sb(6,"img",3),i.vc(7,"\n            "),i.Wb(8,"a",4),i.vc(9,"@angular-ru/tooltip"),i.Vb(),i.vc(10,"\n        "),i.Vb(),i.vc(11,"\n\n        "),i.Wb(12,"mat-list",5),i.vc(13,"\n            "),i.Wb(14,"mat-list-item",6),i.vc(15,"\n                "),i.Wb(16,"a",7),i.vc(17,"- "),i.Wb(18,"strong"),i.vc(19,"Guide overview"),i.Vb(),i.Vb(),i.vc(20,"\n            "),i.Vb(),i.vc(21,"\n            "),i.Sb(22,"mat-divider"),i.vc(23,"\n        "),i.Vb(),i.vc(24,"\n    "),i.Vb(),i.vc(25,"\n\n    "),i.Wb(26,"mat-drawer-content",8),i.vc(27,"\n        "),i.Sb(28,"router-outlet"),i.vc(29,"\n    "),i.Vb(),i.vc(30,"\n"),i.Vb(),i.vc(31,"\n"))},directives:[r.b,r.a,a.a,d.a,s.a,s.b,h.a,r.c,d.c],encapsulation:2}),t}(),p=function(){function t(){}return t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({factory:function(e){return new(e||t)},imports:[[d.b.forRoot([{path:"",pathMatch:"full",redirectTo:"samples"},{path:"samples",children:[{path:"",pathMatch:"full",redirectTo:"guide"},{path:"guide",loadChildren:function(){return o.e(6).then(o.bind(null,"G7lC")).then(function(t){return t.GuideModule})}}]}],{useHash:!0,scrollPositionRestoration:"enabled"})],d.b]}),t}(),v=function(){function t(){}return t.\u0275mod=i.Pb({type:t,bootstrap:[m]}),t.\u0275inj=i.Ob({factory:function(e){return new(e||t)},imports:[[n.a,l.b,p,u.b,r.d,a.b,s.c,c.b.forRoot()]]}),t}();Object(i.Y)(),n.c().bootstrapModule(v,{ngZoneEventCoalescing:!0}).catch(function(t){return console.error(t)})},IlSD:function(t,e,o){"use strict";o.d(e,"a",function(){return p}),o.d(e,"b",function(){return b});var n=o("fGyu"),i=o("9fIP"),l=o("MMYH"),s=o("kZht");o("2h71");var r=o("ZTXN"),a=o("KTx3"),u=o("mWib"),c=o("An66"),d=new s.t("TOOLTIP_TEXT_INTERCEPTOR_TOKEN"),h=new s.t("TOOLTIP_OPTIONS_TOKEN"),m=function(){var t=function(){function t(){var e=this;Object(i.a)(this,t),this.actualContainsInDomUidCollections=new Set,this.domMemoryLeakTicker$=new r.a,this.timeoutCheck=500,this.domMemoryLeakTicker$.pipe(Object(u.a)(this.timeoutCheck)).subscribe(function(){Array.from(new Set(e.actualContainsInDomUidCollections)).forEach(function(t){var e;!document.querySelector('[data-tooltip-uid="'.concat(t,'"]'))&&(null===(e=document.getElementById(t))||void 0===e||e.remove())})})}return Object(l.a)(t,[{key:"invalidationOfIrrelevantNodes",value:function(){this.domMemoryLeakTicker$.next()}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(s.Nb)({token:t,factory:t.\u0275fac}),t}(),p=function(){var t=function(){function t(e,o,n,l,s,r){Object(i.a)(this,t),this.el=e,this.renderer=o,this.ngZone=n,this.options=l,this.interceptor=s,this.domLeak=r,this.uid=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),this.placement="top",this.localCssStyle=null,this.size="small",this.delta=2,this.layoutMinDuration=100,this.tooltipDomElement=null,this.timeoutId=null,this.frameId=null,this.createLayoutId=null,this.hideId=null,this.mouseLeaveTooltipId=null,this.tooltipMouseenter=null,this.tooltipMouseleave=null,this.handlerOptions={passive:!0},this.internalTooltipValue=null,this.internalContext=null,this.addUidToElement(),this.connectMouseEvents()}return Object(l.a)(t,[{key:"onMouseenterHandler",value:function(){this.tooltipDisabled||(this.domLeak.invalidationOfIrrelevantNodes(),this.showTooltip())}},{key:"onMouseleaveHandler",value:function(){this.tooltipDisabled||(this.destroyAllTimeouts(),this.hideTooltip())}},{key:"ngOnDestroy",value:function(){this.disconnectMouseEvents(),this.destroyAllTimeouts(),this.removeOldNodes()}},{key:"showTooltip",value:function(){this.destroyAllTimeouts(),this.tooltipDomElement?this.addTooltipShowClass():this.addTooltipToBodyWithAnimation()}},{key:"hideTooltip",value:function(){var t=this;this.ngZone.runOutsideAngular(function(){window.clearTimeout(t.hideId),t.hideId=window.setTimeout(function(){t.removeTooltipShowClass(),t.timeoutId=window.setTimeout(function(){return t.removeOldNodes()},t.options.durationAfterDestroy)},t.layoutMinDuration)})}},{key:"addTooltipElementToBody",value:function(){this.tooltipDomElement=this.createTooltipElement(),this.tooltipDomElement&&(this.renderer.appendChild(document.body,this.tooltipDomElement),this.renderer.setAttribute(this.tooltipDomElement,"id",this.uid),this.renderer.addClass(this.tooltipDomElement,"ng-tooltip"),this.renderer.addClass(this.tooltipDomElement,"ng-tooltip-".concat(this.placement)),this.renderer.addClass(this.tooltipDomElement,"ng-tooltip-".concat(this.size)))}},{key:"setPosition",value:function(){var e,o=this.el.nativeElement.getBoundingClientRect(),n=null===(e=this.tooltipDomElement)||void 0===e?void 0:e.getBoundingClientRect(),i=t.getScrollPos();if("top"===this.placement){var l=this.calculateByTop(o,n);this.setStyle(l.top,l.left,i)}else if("bottom"===this.placement){var s=this.calculateByBottom(o,n);this.setStyle(s.top,s.left,i)}else if("left"===this.placement){var r=this.calculateByLeft(o,n);this.setStyle(r.top,r.left,i)}else if("right"===this.placement){var a=this.calculateByRight(o,n);this.setStyle(a.top,a.left,i)}}},{key:"addTooltipToBodyWithAnimation",value:function(){var t=this;this.ngZone.runOutsideAngular(function(){t.frameId=window.setTimeout(function(){t.addTooltipElementToBody(),t.tooltipDomElement&&(t.tooltipListenOnHoverEvent(),t.createLayoutId=window.setTimeout(function(){t.setPosition(),t.addTooltipShowClass(),t.markElementAddInDom()},t.layoutMinDuration))},t.options.durationBeforeCreate)})}},{key:"refreshTooltipContent",value:function(){if(this.tooltipDomElement){var t=this.createTooltipContent();if(t){for(var e=0,o=Array.from(this.tooltipDomElement.children);e<o.length;e++)this.renderer.removeChild(this.tooltipDomElement,o[e]);this.renderer.appendChild(this.tooltipDomElement,t)}}}},{key:"markElementAddInDom",value:function(){this.tooltipDomElement&&this.domLeak.actualContainsInDomUidCollections.add(this.uid)}},{key:"markElementRemoveFromDom",value:function(){this.tooltipDomElement||this.domLeak.actualContainsInDomUidCollections.delete(this.uid)}},{key:"connectMouseEvents",value:function(){var t=this;this.ngZone.runOutsideAngular(function(){t.el.nativeElement.addEventListener("mouseenter",function(){return t.onMouseenterHandler()},t.handlerOptions),t.el.nativeElement.addEventListener("mouseleave",function(){return t.onMouseleaveHandler()},t.handlerOptions)})}},{key:"disconnectMouseEvents",value:function(){var t=this;this.el.nativeElement.removeEventListener("mouseenter",function(){return t.onMouseenterHandler()},this.handlerOptions),this.el.nativeElement.removeEventListener("mouseleave",function(){return t.onMouseleaveHandler()},this.handlerOptions)}},{key:"addUidToElement",value:function(){this.el.nativeElement.setAttribute("data-tooltip-uid",this.uid)}},{key:"addTooltipShowClass",value:function(){this.tooltipDomElement&&this.renderer.addClass(this.tooltipDomElement,"ng-tooltip-show")}},{key:"removeTooltipShowClass",value:function(){this.tooltipDomElement&&this.renderer.removeClass(this.tooltipDomElement,"ng-tooltip-show")}},{key:"tooltipListenOnHoverEvent",value:function(){var t,e,o=this;window.clearTimeout(this.mouseLeaveTooltipId),this.tooltipDomElement&&(null===(t=this.tooltipMouseenter)||void 0===t||t.unsubscribe(),null===(e=this.tooltipMouseleave)||void 0===e||e.unsubscribe(),this.tooltipMouseenter=Object(a.a)(this.tooltipDomElement,"mouseenter").subscribe(function(){window.clearTimeout(o.hideId),window.clearTimeout(o.mouseLeaveTooltipId)}),this.tooltipMouseleave=Object(a.a)(this.tooltipDomElement,"mouseleave").subscribe(function(){window.clearTimeout(o.mouseLeaveTooltipId),o.mouseLeaveTooltipId=window.setTimeout(function(){return o.hideTooltip()},o.options.timeoutForWaitAfterBlurTooltip)}))}},{key:"createTooltipContent",value:function(){var t,e,o,i,l,r=document.createElement("div");if(this.internalTooltipValue instanceof s.Q){var a=this.internalTooltipValue.createEmbeddedView({$implicit:this.internalContext});a.detectChanges(),r.append.apply(r,Object(n.a)(a.rootNodes))}else{if(function(t){var e="string"==typeof t?t.trim():t;return[void 0,null,NaN,"","null",1/0].includes(e)}(this.internalTooltipValue))return null;if(this.internalTooltipValue){var u=null===(t=this.internalTooltipValue)||void 0===t?void 0:t.toString();r.innerHTML=null!==(i=null===(o=(e=this.interceptor).instant)||void 0===o?void 0:o.call(e,u))&&void 0!==i?i:u}}return r.style.cssText=null!==(l=this.localCssStyle)&&void 0!==l?l:this.options.cssStyle,r}},{key:"createTooltipElement",value:function(){var t=this.createTooltipContent();if(t){var e=this.renderer.createElement("div");return this.renderer.appendChild(e,t),e}return null}},{key:"destroyAllTimeouts",value:function(){window.clearTimeout(this.frameId),window.clearTimeout(this.createLayoutId),window.clearTimeout(this.mouseLeaveTooltipId),window.clearTimeout(this.timeoutId),window.clearTimeout(this.hideId)}},{key:"removeOldNodes",value:function(){if(this.tooltipDomElement){var t=document.getElementById(this.uid);null==t||t.remove(),this.tooltipDomElement=null}this.markElementRemoveFromDom()}},{key:"setStyle",value:function(t,e,o){this.renderer.setStyle(this.tooltipDomElement,"top","".concat(t+o,"px")),this.renderer.setStyle(this.tooltipDomElement,"left","".concat(e,"px"))}},{key:"calculateByTop",value:function(t,e){var o;return{top:t.top-this.offsetElementHeight,left:t.left+(t.width-(null!==(o=null==e?void 0:e.width)&&void 0!==o?o:0))/this.delta}}},{key:"calculateByBottom",value:function(t,e){var o;return{top:t.bottom,left:t.left+(t.width-(null!==(o=null==e?void 0:e.width)&&void 0!==o?o:0))/this.delta}}},{key:"calculateByLeft",value:function(t,e){var o;return{top:t.top+(t.height-(null!==(o=null==e?void 0:e.height)&&void 0!==o?o:0))/this.delta,left:t.left-this.offsetElementWidth}}},{key:"calculateByRight",value:function(t,e){var o;return{top:t.top+(t.height-(null!==(o=null==e?void 0:e.height)&&void 0!==o?o:0))/this.delta,left:t.right}}},{key:"context",set:function(t){this.internalContext=t,this.refreshTooltipContent()}},{key:"tooltip",set:function(t){this.internalTooltipValue=t,this.refreshTooltipContent()}},{key:"offsetElementHeight",get:function(){var t,e;return null!==(e=null===(t=this.tooltipDomElement)||void 0===t?void 0:t.clientHeight)&&void 0!==e?e:0}},{key:"offsetElementWidth",get:function(){var t,e;return null!==(e=null===(t=this.tooltipDomElement)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0}}],[{key:"getScrollPos",value:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}}]),t}();return t.\u0275fac=function(e){return new(e||t)(Object(s.Rb)(s.m),Object(s.Rb)(s.J),Object(s.Rb)(s.E),Object(s.Rb)(h),Object(s.Rb)(d),Object(s.Rb)(m))},t.\u0275dir=Object(s.Mb)({type:t,selectors:[["","tooltip",""]],inputs:{tooltipDisabled:["tooltip-disabled","tooltipDisabled"],placement:["tooltip-placement","placement"],localCssStyle:["tooltip-css-style","localCssStyle"],size:["tooltip-size","size"],context:["tooltip-context","context"],tooltip:"tooltip"}}),t}(),v={cssStyle:"",durationBeforeCreate:200,durationAfterDestroy:1500,timeoutForWaitAfterBlurTooltip:400},f=function(){var t=function t(){Object(i.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(s.Nb)({token:t,factory:t.\u0275fac}),t}(),b=function(){var t=function(){function t(){Object(i.a)(this,t)}return Object(l.a)(t,null,[{key:"forRoot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:t,providers:[{provide:h,useValue:Object.assign(Object.assign({},v),e)},{provide:d,useClass:f}]}}}]),t}();return t.\u0275mod=Object(s.Pb)({type:t}),t.\u0275inj=Object(s.Ob)({factory:function(e){return new(e||t)},providers:[m],imports:[[c.b]]}),t}()},zn8P:function(t,e){function o(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="zn8P"}},[[0,0,5]]]);