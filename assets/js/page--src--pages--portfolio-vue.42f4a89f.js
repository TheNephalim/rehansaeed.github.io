(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1fBz":function(t,e,r){},"4Brf":function(t,e,r){"use strict";var o=r("I+eb"),a=r("g6v/"),n=r("2oRo"),i=r("UTVS"),s=r("hh1v"),c=r("m/L8").f,l=r("6JNq"),u=n.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(p,u);var d=p.prototype=u.prototype;d.constructor=p;var h=d.toString,m="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(i(f,t))return"";var r=m?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),o({global:!0,forced:!0},{Symbol:p})}},"5Tg+":function(t,e,r){var o=r("tiKp");e.f=o},"8d1i":function(t,e,r){},"9tpe":function(t,e,r){"use strict";var o=r("J1Nn");r.n(o).a},"BX/b":function(t,e,r){var o=r("/GqU"),a=r("JBy8").f,n={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==n.call(t)?function(t){try{return a(t)}catch(t){return i.slice()}}(t):a(o(t))}},"Ix/C":function(t,e,r){"use strict";var o=r("1fBz");r.n(o).a},J1Nn:function(t,e,r){},Mh7a:function(t,e,r){"use strict";var o={name:"u-tags",components:{"u-link-button":r("TUbx").a},props:{tags:{isRequired:!0,type:Array}}},a=(r("Zglw"),r("KHd+")),n=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tags"},t._l(t.tags,(function(e){return r("u-link-button",{key:e.id,staticClass:"tags__link",attrs:{bordered:"",to:e.path}},[t._v(t._s(e.title))])})),1)}),[],!1,null,null,null);e.a=n.exports},OQlv:function(t,e,r){"use strict";r.r(e);r("pNMO"),r("4Brf"),r("sMBO"),r("rB9j"),r("Rm1S"),r("UxlC");var o=r("qAcn"),a=r("w5yD"),n=r("bYPN"),i=r("Mh7a"),s={name:"u-portfolio-card",components:{"u-card":n.a,"u-heading":o.a,"u-tags":i.a},props:{portfolio:{required:!0,type:Object}}},c=(r("mXkH"),r("KHd+")),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("u-card",{staticClass:"portfolio-card",attrs:{tag:"article",hoverable:"",focusable:""}},[r("div",{staticClass:"portfolio-card__header"},[t.portfolio.heroImage?r("g-image",{staticClass:"portfolio-card__image",attrs:{alt:t.portfolio.title,src:t.portfolio.heroImage}}):t._e()],1),r("div",{staticClass:"portfolio-card__content"},[r("u-heading",{staticClass:"portfolio-card__title",attrs:{id:t.portfolio.title,to:t.portfolio.permalink,level:"2"}},[t._v(t._s(t.portfolio.title))]),r("p",{staticClass:"portfolio-card__description"},[t._v(t._s(t.portfolio.description))]),t.portfolio.tags?r("u-tags",{staticClass:"portfolio-card__tags",attrs:{tags:t.portfolio.tags}}):t._e()],1)])}),[],!1,null,null,null).exports,u={components:{"u-heading":o.a,"u-newsletter":a.a,"u-portfolio-card":l},computed:{title:function(){return"Portfolio"},description:function(){return"Portfolio of work by ".concat(this.$static.metadata.author.name,".")},image:function(){return this.$static.metadata.url+"/images/hero/Muhammad-Rehan-Saeed-1600x900.jpg"},relativeUrl:function(){return"/portfolio/"},url:function(){return this.$static.metadata.url+this.relativeUrl}},metaInfo:function(){return{title:this.title,link:[{rel:"canonical",href:this.url}],meta:[{name:"description",content:this.description},{name:"author",content:this.$static.metadata.author.name},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:this.$static.metadata.author.twitter.user},{name:"twitter:creator",content:this.$static.metadata.author.twitter.user},{name:"twitter:title",content:this.title},{name:"twitter:description",content:this.description},{name:"twitter:image",content:this.image},{property:"og:title",content:this.title},{property:"og:url",content:this.url},{property:"og:image",content:this.image},{property:"og:image:height",content:this.image.match(/(\d*)x(\d*)/)[2]},{property:"og:image:width",content:this.image.match(/(\d*)x(\d*)/)[1]},{property:"og:description",content:this.description},{property:"og:locale",content:this.$static.metadata.language.replace("-","_")},{property:"og:site_name",content:this.$static.metadata.name},{property:"og:type",content:"website"},{property:"fb:app_id",content:this.$static.metadata.facebookAppId}]}}},f=(r("YKoL"),r("Kw5r")),p=f.a.config.optionMergeStrategies.computed,d={metadata:{name:"Muhammad Rehan Saeed",url:"https://rehansaeed.com",language:"en-GB",facebookAppId:"632414437490344",author:{name:"Muhammad Rehan Saeed",twitter:{user:"@RehanSaeedUK"}}}},h=function(t){var e=t.options;e.__staticData?e.__staticData.data=d:(e.__staticData=f.a.observable({data:d}),e.computed=p({$static:function(){return e.__staticData.data}},e.computed))},m=null,g=Object(c.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"portfolio"},[e("div",{staticClass:"portfolio__title"},[e("u-heading",{attrs:{id:"portfolio",level:"1",center:"",to:this.relativeUrl}},[this._v("Portfolio")]),e("p",[this._v("\n        These are some of the open source projects that I've started and\n        maintained. There are many others I've contributed to which you can\n        see in my GitHub profile and of course there are other commercial\n        projects that I cannot disclose.\n      ")])],1),e("div",{staticClass:"portfolio__items"},this._l(this.$page.portfolio.edges,(function(t){return e("u-portfolio-card",{key:t.node.id,attrs:{portfolio:t.node}})})),1),e("u-newsletter",{staticClass:"portfolio__newsletter"})],1)])}),[],!1,null,null,null);"function"==typeof h&&h(g),"function"==typeof m&&m(g);e.default=g.exports},Rm1S:function(t,e,r){"use strict";var o=r("14Sl"),a=r("glrk"),n=r("UMSQ"),i=r("HYAF"),s=r("iqWW"),c=r("FMNM");o("match",1,(function(t,e,r){return[function(e){var r=i(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r):new RegExp(e)[t](String(r))},function(t){var o=r(e,t,this);if(o.done)return o.value;var i=a(t),l=String(this);if(!i.global)return c(i,l);var u=i.unicode;i.lastIndex=0;for(var f,p=[],d=0;null!==(f=c(i,l));){var h=String(f[0]);p[d]=h,""===h&&(i.lastIndex=s(l,n(i.lastIndex),u)),d++}return 0===d?null:p}]}))},YKoL:function(t,e,r){"use strict";var o=r("fWaH");r.n(o).a},Zglw:function(t,e,r){"use strict";var o=r("8d1i");r.n(o).a},bYPN:function(t,e,r){"use strict";var o={name:"u-card",data:function(){return{downTimestamp:void 0}},props:{focusable:{type:Boolean},hoverable:{type:Boolean},tag:{default:"section",type:String}}},a=(r("Ix/C"),r("KHd+")),n=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"div",staticClass:"card",class:{"card--hoverable":this.hoverable,"card--focusable":this.focusable}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},"dG/n":function(t,e,r){var o=r("Qo9l"),a=r("UTVS"),n=r("5Tg+"),i=r("m/L8").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});a(e,t)||i(e,t,{value:n.f(t)})}},fWaH:function(t,e,r){},mXkH:function(t,e,r){"use strict";var o=r("oTTN");r.n(o).a},oTTN:function(t,e,r){},pNMO:function(t,e,r){"use strict";var o=r("I+eb"),a=r("2oRo"),n=r("0GbY"),i=r("xDBR"),s=r("g6v/"),c=r("STAE"),l=r("/b8u"),u=r("0Dky"),f=r("UTVS"),p=r("6LWA"),d=r("hh1v"),h=r("glrk"),m=r("ewvW"),g=r("/GqU"),v=r("wE6v"),b=r("XGwC"),y=r("fHMY"),_=r("33Wh"),w=r("JBy8"),S=r("BX/b"),O=r("dBg+"),x=r("Bs8V"),C=r("m/L8"),j=r("0eef"),k=r("kRJp"),$=r("busE"),I=r("VpIT"),T=r("93I0"),B=r("0BK2"),N=r("kOOl"),E=r("tiKp"),M=r("5Tg+"),P=r("dG/n"),U=r("1E5z"),D=r("afO8"),R=r("tycR").forEach,K=T("hidden"),H=E("toPrimitive"),J=D.set,q=D.getterFor("Symbol"),A=Object.prototype,G=a.Symbol,W=n("JSON","stringify"),L=x.f,Y=C.f,V=S.f,X=j.f,z=I("symbols"),F=I("op-symbols"),Q=I("string-to-symbol-registry"),Z=I("symbol-to-string-registry"),tt=I("wks"),et=a.QObject,rt=!et||!et.prototype||!et.prototype.findChild,ot=s&&u((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,r){var o=L(A,e);o&&delete A[e],Y(t,e,r),o&&t!==A&&Y(A,e,o)}:Y,at=function(t,e){var r=z[t]=y(G.prototype);return J(r,{type:"Symbol",tag:t,description:e}),s||(r.description=e),r},nt=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},it=function(t,e,r){t===A&&it(F,e,r),h(t);var o=v(e,!0);return h(r),f(z,o)?(r.enumerable?(f(t,K)&&t[K][o]&&(t[K][o]=!1),r=y(r,{enumerable:b(0,!1)})):(f(t,K)||Y(t,K,b(1,{})),t[K][o]=!0),ot(t,o,r)):Y(t,o,r)},st=function(t,e){h(t);var r=g(e),o=_(r).concat(ft(r));return R(o,(function(e){s&&!ct.call(r,e)||it(t,e,r[e])})),t},ct=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===A&&f(z,e)&&!f(F,e))&&(!(r||!f(this,e)||!f(z,e)||f(this,K)&&this[K][e])||r)},lt=function(t,e){var r=g(t),o=v(e,!0);if(r!==A||!f(z,o)||f(F,o)){var a=L(r,o);return!a||!f(z,o)||f(r,K)&&r[K][o]||(a.enumerable=!0),a}},ut=function(t){var e=V(g(t)),r=[];return R(e,(function(t){f(z,t)||f(B,t)||r.push(t)})),r},ft=function(t){var e=t===A,r=V(e?F:g(t)),o=[];return R(r,(function(t){!f(z,t)||e&&!f(A,t)||o.push(z[t])})),o};(c||($((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===A&&r.call(F,t),f(this,K)&&f(this[K],e)&&(this[K][e]=!1),ot(this,e,b(1,t))};return s&&rt&&ot(A,e,{configurable:!0,set:r}),at(e,t)}).prototype,"toString",(function(){return q(this).tag})),$(G,"withoutSetter",(function(t){return at(N(t),t)})),j.f=ct,C.f=it,x.f=lt,w.f=S.f=ut,O.f=ft,M.f=function(t){return at(E(t),t)},s&&(Y(G.prototype,"description",{configurable:!0,get:function(){return q(this).description}}),i||$(A,"propertyIsEnumerable",ct,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),R(_(tt),(function(t){P(t)})),o({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(Q,e))return Q[e];var r=G(e);return Q[e]=r,Z[r]=e,r},keyFor:function(t){if(!nt(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(t,e){return void 0===e?y(t):st(y(t),e)},defineProperty:it,defineProperties:st,getOwnPropertyDescriptor:lt}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ut,getOwnPropertySymbols:ft}),o({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(m(t))}}),W)&&o({target:"JSON",stat:!0,forced:!c||u((function(){var t=G();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,e,r){for(var o,a=[t],n=1;arguments.length>n;)a.push(arguments[n++]);if(o=e,(d(e)||void 0!==t)&&!nt(t))return p(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!nt(e))return e}),a[1]=e,W.apply(null,a)}});G.prototype[H]||k(G.prototype,H,G.prototype.valueOf),U(G,"Symbol"),B[K]=!0},w5yD:function(t,e,r){"use strict";var o=r("Wx+g"),a=r("bYPN"),n=r("qAcn"),i={name:"u-newsletter",components:{"u-button":o.a,"u-card":a.a,"u-heading":n.a}},s=(r("9tpe"),r("KHd+")),c=r("Kw5r"),l=c.a.config.optionMergeStrategies.computed,u={metadata:{mailchimpUrl:"https://rehansaeed.us19.list-manage.com/subscribe/post?u=0d1d7c30db26dd0a4aa1b5b40&amp;id=07ce865066"}},f=function(t){var e=t.options;e.__staticData?e.__staticData.data=u:(e.__staticData=c.a.observable({data:u}),e.computed=l({$static:function(){return e.__staticData.data}},e.computed))},p=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("u-card",{staticClass:"newsletter"},[e("form",{staticClass:"newsletter__form",attrs:{method:"post",action:this.$static.metadata.mailchimpUrl}},[e("u-heading",{staticClass:"newsletter__title",attrs:{id:"newsletter",level:"2",center:"",href:"#newsletter"}},[this._v("Newsletter")]),e("label",{staticClass:"newsletter__content",attrs:{for:"email"}},[this._v("Stay up to date! Get all the latest & greatest posts delivered\n      straight to your inbox!")]),e("input",{staticClass:"newsletter__input",attrs:{id:"email",name:"EMAIL",placeholder:"youremail@example.com",required:"",type:"email",autocapitalize:"off",autocorrect:"off"}}),e("input",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true",type:"text",name:"b_0d1d7c30db26dd0a4aa1b5b40_07ce865066",tabindex:"-1",value:""}}),e("u-button",{staticClass:"newsletter__button",attrs:{bordered:"",submit:""}},[this._v("Subscribe")])],1)])}),[],!1,null,null,null);"function"==typeof f&&f(p);e.a=p.exports}}]);