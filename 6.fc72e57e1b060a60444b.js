(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{G7lC:function(t,e,n){"use strict";n.r(e),n.d(e,"GuideModule",function(){return nt});var i=n("VbQ3"),o=n("An66"),r=n("zygG"),a=n("8K1b"),c=n("AqVP"),s=n("MMYH"),l=n("9fIP"),u=n("kZht"),f=n("pTnX"),h=n("5XID"),v=n("ROBh"),m=n("47ST"),g=n("P4Xx"),p=n("bwdy"),d=n("8j5Y"),b=n("YtkY"),_=n("4e/d"),y=n("ruxD"),S=n("7ntQ"),I=n("J+dc"),C=n("6uGs"),k=n("ENSU"),w=["*"];function F(t){return Error('Unable to find icon with the name "'.concat(t,'"'))}function R(t){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL "+"via Angular's DomSanitizer. Attempted URL was \"".concat(t,'".'))}function E(t){return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by "+"Angular's DomSanitizer. Attempted literal was \"".concat(t,'".'))}var q=function t(e,n,i){Object(l.a)(this,t),this.url=e,this.svgText=n,this.options=i},x=function(){var t=function(){function t(e,n,i,o){Object(l.a)(this,t),this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=i}return Object(s.a)(t,[{key:"addSvgIcon",value:function(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}},{key:"addSvgIconLiteral",value:function(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}},{key:"addSvgIconInNamespace",value:function(t,e,n,i){return this._addSvgIconConfig(t,e,new q(n,null,i))}},{key:"addSvgIconResolver",value:function(t){return this._resolvers.push(t),this}},{key:"addSvgIconLiteralInNamespace",value:function(t,e,n,i){var o=this._sanitizer.sanitize(u.J.HTML,n);if(!o)throw E(n);return this._addSvgIconConfig(t,e,new q("",o,i))}},{key:"addSvgIconSet",value:function(t,e){return this.addSvgIconSetInNamespace("",t,e)}},{key:"addSvgIconSetLiteral",value:function(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}},{key:"addSvgIconSetInNamespace",value:function(t,e,n){return this._addSvgIconSetConfig(t,new q(e,null,n))}},{key:"addSvgIconSetLiteralInNamespace",value:function(t,e,n){var i=this._sanitizer.sanitize(u.J.HTML,e);if(!i)throw E(e);return this._addSvgIconSetConfig(t,new q("",i,n))}},{key:"registerFontClassAlias",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return this._fontCssClassesByAlias.set(t,e),this}},{key:"classNameForFontAlias",value:function(t){return this._fontCssClassesByAlias.get(t)||t}},{key:"setDefaultFontSetClass",value:function(t){return this._defaultFontSetClass=t,this}},{key:"getDefaultFontSetClass",value:function(){return this._defaultFontSetClass}},{key:"getSvgIconFromUrl",value:function(t){var e=this,n=this._sanitizer.sanitize(u.J.RESOURCE_URL,t);if(!n)throw R(t);var i=this._cachedIconsByUrl.get(n);return i?Object(v.a)(O(i)):this._loadSvgIconFromConfig(new q(t,null)).pipe(Object(d.a)(function(t){return e._cachedIconsByUrl.set(n,t)}),Object(b.a)(function(t){return O(t)}))}},{key:"getNamedSvgIcon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=A(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t))return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);var o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):Object(m.a)(F(n))}},{key:"ngOnDestroy",value:function(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}},{key:"_getSvgFromConfig",value:function(t){return t.svgText?Object(v.a)(O(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Object(b.a)(function(t){return O(t)}))}},{key:"_getSvgFromIconSetConfigs",value:function(t,e){var n=this,i=this._extractIconWithNameFromAnySet(t,e);if(i)return Object(v.a)(i);var o=e.filter(function(t){return!t.svgText}).map(function(t){return n._loadSvgIconSetFromConfig(t).pipe(Object(_.a)(function(e){var i=n._sanitizer.sanitize(u.J.RESOURCE_URL,t.url),o="Loading icon set URL: ".concat(i," failed: ").concat(e.message);return n._errorHandler.handleError(new Error(o)),Object(v.a)(null)}))});return Object(g.a)(o).pipe(Object(b.a)(function(){var i=n._extractIconWithNameFromAnySet(t,e);if(!i)throw F(t);return i}))}},{key:"_extractIconWithNameFromAnySet",value:function(t,e){for(var n=e.length-1;n>=0;n--){var i=e[n];if(i.svgText&&i.svgText.indexOf(t)>-1){var o=this._svgElementFromConfig(i),r=this._extractSvgIconFromSet(o,t,i.options);if(r)return r}}return null}},{key:"_loadSvgIconFromConfig",value:function(t){var e=this;return this._fetchIcon(t).pipe(Object(d.a)(function(e){return t.svgText=e}),Object(b.a)(function(){return e._svgElementFromConfig(t)}))}},{key:"_loadSvgIconSetFromConfig",value:function(t){return t.svgText?Object(v.a)(null):this._fetchIcon(t).pipe(Object(d.a)(function(e){return t.svgText=e}))}},{key:"_extractSvgIconFromSet",value:function(t,e,n){var i=t.querySelector('[id="'.concat(e,'"]'));if(!i)return null;var o=i.cloneNode(!0);if(o.removeAttribute("id"),"svg"===o.nodeName.toLowerCase())return this._setSvgAttributes(o,n);if("symbol"===o.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(o),n);var r=this._svgElementFromString("<svg></svg>");return r.appendChild(o),this._setSvgAttributes(r,n)}},{key:"_svgElementFromString",value:function(t){var e=this._document.createElement("DIV");e.innerHTML=t;var n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}},{key:"_toSvgElement",value:function(t){for(var e=this._svgElementFromString("<svg></svg>"),n=t.attributes,i=0;i<n.length;i++){var o=n[i],r=o.name;"id"!==r&&e.setAttribute(r,o.value)}for(var a=0;a<t.childNodes.length;a++)t.childNodes[a].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[a].cloneNode(!0));return e}},{key:"_setSvgAttributes",value:function(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}},{key:"_fetchIcon",value:function(t){var e,n=this,i=t.url,o=t.options,r=null!==(e=null==o?void 0:o.withCredentials)&&void 0!==e&&e;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==i)throw Error('Cannot fetch icon from URL "'.concat(i,'".'));var a=this._sanitizer.sanitize(u.J.RESOURCE_URL,i);if(!a)throw R(i);var c=this._inProgressUrlFetches.get(a);if(c)return c;var s=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(Object(y.a)(function(){return n._inProgressUrlFetches.delete(a)}),Object(S.a)());return this._inProgressUrlFetches.set(a,s),s}},{key:"_addSvgIconConfig",value:function(t,e,n){return this._svgIconConfigs.set(A(t,e),n),this}},{key:"_addSvgIconSetConfig",value:function(t,e){var n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}},{key:"_svgElementFromConfig",value:function(t){if(!t.svgElement){var e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}},{key:"_getIconConfigFromResolvers",value:function(t,e){for(var n=0;n<this._resolvers.length;n++){var i=this._resolvers[n](e,t);if(i)return(o=i).url&&o.options?new q(i.url,null,i.options):new q(i,null)}var o}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Vb(C.a,8),u.Vb(k.b),u.Vb(o.c,8),u.Vb(u.m))},t.\u0275prov=Object(u.Ib)({factory:function(){return new t(Object(u.Vb)(C.a,8),Object(u.Vb)(k.b),Object(u.Vb)(o.c,8),Object(u.Vb)(u.m))},token:t,providedIn:"root"}),t}();function O(t){return t.cloneNode(!0)}function A(t,e){return t+":"+e}var T=function t(e){Object(l.a)(this,t),this._elementRef=e},j=Object(f.h)(T),M=new u.r("mat-icon-location",{providedIn:"root",factory:function(){var t=Object(u.W)(o.c),e=t?t.location:null;return{getPathname:function(){return e?e.pathname+e.search:""}}}}),N=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],L=N.map(function(t){return"[".concat(t,"]")}).join(", "),z=/^url\(['"]?#(.*?)['"]?\)$/,U=function(){var t=function(t){Object(a.a)(n,t);var e=Object(c.a)(n);function n(t,i,o,r,a){var c;return Object(l.a)(this,n),(c=e.call(this,t))._iconRegistry=i,c._location=r,c._errorHandler=a,c._inline=!1,c._currentIconFetch=p.a.EMPTY,o||t.nativeElement.setAttribute("aria-hidden","true"),c}return Object(s.a)(n,[{key:"_splitIconName",value:function(t){if(!t)return["",""];var e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error('Invalid icon name: "'.concat(t,'"'))}}},{key:"ngOnInit",value:function(){this._updateFontIconClasses()}},{key:"ngAfterViewChecked",value:function(){var t=this._elementsWithExternalReferences;if(t&&t.size){var e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}},{key:"ngOnDestroy",value:function(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}},{key:"_usingFontIcon",value:function(){return!this.svgIcon}},{key:"_setSvgElement",value:function(t){this._clearSvgElement();for(var e=t.querySelectorAll("style"),n=0;n<e.length;n++)e[n].textContent+=" ";var i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(t)}},{key:"_clearSvgElement",value:function(){var t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){var n=t.childNodes[e];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||t.removeChild(n)}}},{key:"_updateFontIconClasses",value:function(){if(this._usingFontIcon()){var t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}}},{key:"_cleanupFontValue",value:function(t){return"string"==typeof t?t.trim().split(" ")[0]:t}},{key:"_prependPathToReferences",value:function(t){var e=this._elementsWithExternalReferences;e&&e.forEach(function(e,n){e.forEach(function(e){n.setAttribute(e.name,"url('".concat(t,"#").concat(e.value,"')"))})})}},{key:"_cacheChildrenWithExternalReferences",value:function(t){for(var e=t.querySelectorAll(L),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map,i=function(t){N.forEach(function(i){var o=e[t],r=o.getAttribute(i),a=r?r.match(z):null;if(a){var c=n.get(o);c||n.set(o,c=[]),c.push({name:i,value:a[1]})}})},o=0;o<e.length;o++)i(o)}},{key:"_updateSvgIcon",value:function(t){var e=this;if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){var n=this._splitIconName(t),i=Object(r.a)(n,2),o=i[0],a=i[1];o&&(this._svgNamespace=o),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,o).pipe(Object(I.a)(1)).subscribe(function(t){return e._setSvgElement(t)},function(t){var n="Error retrieving icon ".concat(o,":").concat(a,"! ").concat(t.message);e._errorHandler.handleError(new Error(n))})}}},{key:"inline",get:function(){return this._inline},set:function(t){this._inline=Object(h.a)(t)}},{key:"svgIcon",get:function(){return this._svgIcon},set:function(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}},{key:"fontSet",get:function(){return this._fontSet},set:function(t){var e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}},{key:"fontIcon",get:function(){return this._fontIcon},set:function(t){var e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}}]),n}(j);return t.\u0275fac=function(e){return new(e||t)(u.Mb(u.l),u.Mb(x),u.Wb("aria-hidden"),u.Mb(M),u.Mb(u.m))},t.\u0275cmp=u.Gb({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,e){2&t&&(u.Db("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet),u.Eb("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[u.zb],ngContentSelectors:w,decls:1,vars:0,template:function(t,e){1&t&&(u.cc(),u.bc(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),t}(),P=function(){var t=function t(){Object(l.a)(this,t)};return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[f.a],f.a]}),t}(),Q=n("1VvW"),B=n("b5Xb"),V=n("D57K"),W=n("M1Zg");function D(t,e){if(1&t&&(u.qc(0,"\n                "),u.Rb(1,"span",16),u.qc(2),u.Qb(),u.qc(3,"\n            ")),2&t){var n=e.$implicit;u.Cb(2),u.rc("Hello ",n.name,"")}}function H(t,e){if(1&t&&(u.qc(0,"\n                "),u.Nb(1,"img",17),u.qc(2)),2&t){var n=e.$implicit;u.Cb(2),u.rc("\n                Angular ",n.full,"\n            ")}}function J(t,e){1&t&&u.qc(0," ... ")}function $(t,e){1&t&&u.qc(0,"\n                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n                designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n                scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually\n                begins with: \u201cLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n                ut labore et dolore magna aliqua.\u201d The purpose of lorem ipsum is to addTooltipElementToBody a natural\n                looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A\n                practice not without controversy, laying out pages with meaningless filler text can be very useful when\n                the focus is meant to be on design, not content. The passage experienced a surge in popularity during\n                the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop\n                publishers bundled the text with their software. Today it's seen all around the web; on templates,\n                websites, and stock designs. Use our generator to get your own, or read on for the authoritative history\n                of lorem ipsum.\n            ")}function Y(t,e){}var G=function(t){return{$implicit:t}};function K(t,e){if(1&t&&(u.Pb(0),u.qc(1,"\n                "),u.oc(2,Y,0,0,"ng-template",18),u.qc(3,"\n            "),u.Ob()),2&t){var n=e.$implicit;u.ac();var i=u.hc(61);u.Cb(2),u.dc("ngTemplateOutlet",i)("ngTemplateOutletContext",u.fc(2,G,n))}}function X(t,e){1&t&&u.qc(0),2&t&&u.rc("\n                ",e.$implicit.isMarked?"Remove from favorite list":"Add to favorite list","\n            ")}function Z(t,e){if(1&t){var n=u.Sb();u.qc(0,"\n            "),u.Rb(1,"div",19),u.qc(2,"\n                "),u.Rb(3,"mat-icon",20),u.Yb("click",function(){u.ic(n);var t=e.$implicit;return u.ac().markFavorite(t)}),u.qc(4,"\n                    star_rate\n                "),u.Qb(),u.qc(5,"\n\n                "),u.Rb(6,"mat-icon",21),u.Yb("click",function(){u.ic(n);var t=e.$implicit;return u.ac().remove(t)}),u.qc(7,"\n                    delete\n                "),u.Qb(),u.qc(8),u.Qb(),u.qc(9,"\n\n            "),u.oc(10,X,1,1,"ng-template",null,22,u.pc),u.qc(12,"\n        ")}if(2&t){var i=e.$implicit,o=u.hc(11);u.Cb(3),u.Eb("favorite-line--is-favorite",i.isMarked),u.dc("tooltip",o)("tooltip-context",i),u.Cb(5),u.rc("\n\n                ",i.title,"\n            ")}}var tt=function(){return{name:"Max"}},et=function(){function t(t,e){this.zone=t,this.cd=e,this.version=u.P,this.favorites=new Array(1e4).fill(0).map(function(t,e){return{id:e+1,title:Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5),isMarked:!1}})}return t.prototype.markFavorite=function(t){var e=this;this.zone.runOutsideAngular(function(){setTimeout(function(){e.favorites=e.favorites.map(function(e){return t.id===e.id?Object(V.a)(Object(V.a)({},t),{isMarked:!t.isMarked}):e}),e.cd.detectChanges()},100)})},t.prototype.remove=function(t){var e=this;this.zone.runOutsideAngular(function(){setTimeout(function(){e.favorites=e.favorites.filter(function(e){return e.id!==t.id}),e.cd.detectChanges()},100)})},t.\u0275fac=function(e){return new(e||t)(u.Mb(u.A),u.Mb(u.h))},t.\u0275cmp=u.Gb({type:t,selectors:[["guide"]],decls:65,vars:11,consts:[[1,"wrapper","wrapper--4"],["tooltip","Bottom","tooltip-placement","bottom",1,"cell"],["tooltip","Right","tooltip-placement","right",1,"cell"],["tooltip","Left","tooltip-placement","left",1,"cell"],["tooltip","Top","tooltip-placement","top",1,"cell"],["tooltip-placement","bottom",1,"cell",3,"tooltip","tooltip-context"],["template1",""],["tooltip-placement","right",1,"cell",3,"tooltip","tooltip-context"],["template2",""],["tooltip-placement","left",1,"cell",3,"tooltip"],["template3",""],["tooltip-size","medium","tooltip-placement","top","tooltip-css-style","height: 100px; overflow: auto",1,"cell",3,"tooltip"],["template4",""],["minBufferPx","200","maxBufferPx","200",3,"itemSize"],[4,"cdkVirtualFor","cdkVirtualForOf"],["virtualRef",""],[2,"text-decoration","underline","color","yellow"],["src","assets/img/angular.svg","alt","logo"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"favorite-line"],["tooltip-placement","right",1,"favorite-line--icon",3,"tooltip","tooltip-context","click"],["tooltip","remove element","tooltip-placement","right",3,"click"],["templateRef",""]],template:function(t,e){if(1&t&&(u.Rb(0,"div"),u.qc(1,"\n    "),u.Rb(2,"h2"),u.qc(3,"Basic"),u.Qb(),u.qc(4,"\n\n    "),u.Rb(5,"div",0),u.qc(6,"\n        "),u.Rb(7,"div",1),u.qc(8,"Bottom"),u.Qb(),u.qc(9,"\n        "),u.Rb(10,"div",2),u.qc(11,"Right"),u.Qb(),u.qc(12,"\n        "),u.Rb(13,"div",3),u.qc(14,"Left"),u.Qb(),u.qc(15,"\n        "),u.Rb(16,"div",4),u.qc(17,"Top"),u.Qb(),u.qc(18,"\n    "),u.Qb(),u.qc(19,"\n\n    "),u.Rb(20,"h2"),u.qc(21,"With ng-template"),u.Qb(),u.qc(22,"\n\n    "),u.Rb(23,"div",0),u.qc(24,"\n        "),u.Rb(25,"div",5),u.qc(26,"\n            Bottom with HTML\n\n            "),u.oc(27,D,4,1,"ng-template",null,6,u.pc),u.qc(29,"\n        "),u.Qb(),u.qc(30,"\n        "),u.Rb(31,"div",7),u.qc(32,"\n            Right with HTML\n\n            "),u.oc(33,H,3,1,"ng-template",null,8,u.pc),u.qc(35,"\n        "),u.Qb(),u.qc(36,"\n        "),u.Rb(37,"div",9),u.qc(38,"\n            Left with HTML\n\n            "),u.oc(39,J,1,0,"ng-template",null,10,u.pc),u.qc(41,"\n        "),u.Qb(),u.qc(42,"\n        "),u.Rb(43,"div",11),u.qc(44,"\n            Top with HTML\n\n            "),u.oc(45,$,1,0,"ng-template",null,12,u.pc),u.qc(47,"\n        "),u.Qb(),u.qc(48,"\n    "),u.Qb(),u.qc(49,"\n\n    "),u.Rb(50,"h2"),u.qc(51,"Example with remove Nodes"),u.Qb(),u.qc(52,"\n\n    "),u.Rb(53,"div"),u.qc(54,"\n        "),u.Rb(55,"cdk-virtual-scroll-viewport",13),u.qc(56,"\n            "),u.oc(57,K,4,4,"ng-container",14),u.qc(58,"\n        "),u.Qb(),u.qc(59,"\n\n        "),u.oc(60,Z,13,5,"ng-template",null,15,u.pc),u.qc(62,"\n    "),u.Qb(),u.qc(63,"\n"),u.Qb(),u.qc(64,"\n")),2&t){var n=u.hc(28),i=u.hc(34),o=u.hc(40),r=u.hc(46);u.Cb(25),u.dc("tooltip",n)("tooltip-context",u.ec(10,tt)),u.Cb(6),u.dc("tooltip",i)("tooltip-context",e.version),u.Cb(6),u.dc("tooltip",o),u.Cb(6),u.dc("tooltip",r),u.Cb(12),u.lc("height",200,"px"),u.dc("itemSize",24),u.Cb(2),u.dc("cdkVirtualForOf",e.favorites)}},directives:[W.a,i.e,i.a,i.d,o.i,U],encapsulation:2,changeDetection:0}),t}(),nt=function(){function t(){}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[o.b,B.a,Q.b.forChild([{path:"",component:et}]),P,i.g]]}),t}()}}]);