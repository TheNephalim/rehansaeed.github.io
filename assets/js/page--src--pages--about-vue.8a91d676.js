(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{258:function(t,e,o){var a=o(4);e.f=a},259:function(t,e,o){"use strict";var a=o(67),r=o(8),n=o(17),i=o(14),s=o(105),c=o(68);a("match",1,(function(t,e,o){return[function(e){var o=i(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,o):new RegExp(e)[t](String(o))},function(t){var a=o(e,t,this);if(a.done)return a.value;var i=r(t),u=String(this);if(!i.global)return c(i,u);var l=i.unicode;i.lastIndex=0;for(var f,h=[],p=0;null!==(f=c(i,u));){var m=String(f[0]);h[p]=m,""===m&&(i.lastIndex=s(u,n(i.lastIndex),l)),p++}return 0===p?null:h}]}))},261:function(t,e,o){"use strict";var a=o(2),r=o(3),n=o(27),i=o(22),s=o(13),c=o(102),u=o(163),l=o(5),f=o(12),h=o(40),p=o(10),m=o(8),d=o(28),g=o(25),b=o(39),w=o(38),v=o(65),y=o(103),A=o(62),S=o(265),k=o(101),C=o(26),O=o(16),B=o(98),_=o(18),E=o(15),I=o(99),H=o(63),x=o(64),R=o(100),K=o(4),P=o(258),Q=o(266),M=o(66),U=o(33),j=o(96).forEach,T=H("hidden"),D=K("toPrimitive"),Y=U.set,N=U.getterFor("Symbol"),F=Object.prototype,G=r.Symbol,q=n("JSON","stringify"),V=C.f,X=O.f,z=S.f,J=B.f,W=I("symbols"),Z=I("op-symbols"),L=I("string-to-symbol-registry"),$=I("symbol-to-string-registry"),tt=I("wks"),et=r.QObject,ot=!et||!et.prototype||!et.prototype.findChild,at=s&&l((function(){return 7!=v(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,o){var a=V(F,e);a&&delete F[e],X(t,e,o),a&&t!==F&&X(F,e,a)}:X,rt=function(t,e){var o=W[t]=v(G.prototype);return Y(o,{type:"Symbol",tag:t,description:e}),s||(o.description=e),o},nt=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},it=function(t,e,o){t===F&&it(Z,e,o),m(t);var a=b(e,!0);return m(o),f(W,a)?(o.enumerable?(f(t,T)&&t[T][a]&&(t[T][a]=!1),o=v(o,{enumerable:w(0,!1)})):(f(t,T)||X(t,T,w(1,{})),t[T][a]=!0),at(t,a,o)):X(t,a,o)},st=function(t,e){m(t);var o=g(e),a=y(o).concat(ft(o));return j(a,(function(e){s&&!ct.call(o,e)||it(t,e,o[e])})),t},ct=function(t){var e=b(t,!0),o=J.call(this,e);return!(this===F&&f(W,e)&&!f(Z,e))&&(!(o||!f(this,e)||!f(W,e)||f(this,T)&&this[T][e])||o)},ut=function(t,e){var o=g(t),a=b(e,!0);if(o!==F||!f(W,a)||f(Z,a)){var r=V(o,a);return!r||!f(W,a)||f(o,T)&&o[T][a]||(r.enumerable=!0),r}},lt=function(t){var e=z(g(t)),o=[];return j(e,(function(t){f(W,t)||f(x,t)||o.push(t)})),o},ft=function(t){var e=t===F,o=z(e?Z:g(t)),a=[];return j(o,(function(t){!f(W,t)||e&&!f(F,t)||a.push(W[t])})),a};(c||(E((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),o=function(t){this===F&&o.call(Z,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),at(this,e,w(1,t))};return s&&ot&&at(F,e,{configurable:!0,set:o}),rt(e,t)}).prototype,"toString",(function(){return N(this).tag})),E(G,"withoutSetter",(function(t){return rt(R(t),t)})),B.f=ct,O.f=it,C.f=ut,A.f=S.f=lt,k.f=ft,P.f=function(t){return rt(K(t),t)},s&&(X(G.prototype,"description",{configurable:!0,get:function(){return N(this).description}}),i||E(F,"propertyIsEnumerable",ct,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),j(y(tt),(function(t){Q(t)})),a({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(L,e))return L[e];var o=G(e);return L[e]=o,$[o]=e,o},keyFor:function(t){if(!nt(t))throw TypeError(t+" is not a symbol");if(f($,t))return $[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(t,e){return void 0===e?v(t):st(v(t),e)},defineProperty:it,defineProperties:st,getOwnPropertyDescriptor:ut}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),a({target:"Object",stat:!0,forced:l((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(d(t))}}),q)&&a({target:"JSON",stat:!0,forced:!c||l((function(){var t=G();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t,e,o){for(var a,r=[t],n=1;arguments.length>n;)r.push(arguments[n++]);if(a=e,(p(e)||void 0!==t)&&!nt(t))return h(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!nt(e))return e}),r[1]=e,q.apply(null,r)}});G.prototype[D]||_(G.prototype,D,G.prototype.valueOf),M(G,"Symbol"),x[T]=!0},262:function(t,e,o){"use strict";var a=o(2),r=o(13),n=o(3),i=o(12),s=o(10),c=o(16).f,u=o(161),l=n.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(h,l);var p=h.prototype=l.prototype;p.constructor=h;var m=p.toString,d="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(i(f,t))return"";var o=d?e.slice(7,-1):e.replace(g,"$1");return""===o?void 0:o}}),a({global:!0,forced:!0},{Symbol:h})}},265:function(t,e,o){var a=o(25),r=o(62).f,n={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==n.call(t)?function(t){try{return r(t)}catch(t){return i.slice()}}(t):r(a(t))}},266:function(t,e,o){var a=o(162),r=o(12),n=o(258),i=o(16).f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});r(e,t)||i(e,t,{value:n.f(t)})}},285:function(t,e,o){},313:function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/Profile-320x480.03c96d5.b1741302ca818803d1e83a5e9a70e709.jpg",size:{width:320,height:480},sizes:"(max-width: 320px) 100vw, 320px",srcset:["/assets/static/Profile-320x480.03c96d5.b1741302ca818803d1e83a5e9a70e709.jpg 320w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 320 480' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-5a6a6621c63e26dcc33532ed25691636'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-5a6a6621c63e26dcc33532ed25691636)' width='320' height='480' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABgAEADASIAAhEBAxEB/8QAHQAAAQUBAQEBAAAAAAAAAAAABwMEBQYIAgEACf/EADcQAAIBAwMCBAUCBQIHAAAAAAECAwQFEQASIQYxB0FRcRMUImGBMqEIFSORsSRCMzRSYoLR8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqe401MdozKw8l7ajK3q1aVWOIYgP%2bpsnUVcWklZ0iO2JM7m9fX8aqC04rroBJC8kORiNf248zoHt38Rb1N/yeaenY7RIY8sfT2zzpmnU9zmp0mlrqydC3IfCj240TYvDhrnbqdFgVfiAMdzEbT3HbS1X4BCGASRXtC8o3OpQnJPOgEi9aRiRYqmGSOUEq/Hn5an6epSrVnhIZBjn3GdTF38EG%2bXLJcAalfQcHHbvr3oSxtbbRLSVsaNVQzurnGfQj9joInYzdgfwNffKTP%2bmJz%2bNXsUgA%2bmMD2GuXh2csQo%2b5xoImtpkS1VSngfCbJ/GqX0bWrR3Knn3iWZJVHw/X8aJXwI6hTDMtQyS/0iIAC/1fTkA8cZz%2bNQXhp0gts68ZKiVKumhhaeGXaRvGQFOD2I5yD2OgO9kd5YELoE3KGI7Y1KVlTb4oAGqFMg/2g5xoM%2bJ14vksy0VrWsp6bu0kA2l/dzwBoU2SW9SXeiI/mRmnlMaxyzMzjB7kdv8A5oNLV09IwcvOoz6nQA8Ur5W9O3ZXtkp2Vi7jhsA7SRnj3xqX8fqO59PvZ4qWWolpKuD4hYNht4IBXj3B0KL3TTrR03xpah03MFEz7wDxkqfTt/bQeTdcXacESVDqfu7Ef51HS9RXFyfjShgfMDOo%2bWLnka5lUJGVHHHbQartEkcNzgac4iJ2Mc4wCMZzqdFqpbdU0rUIdIlR4t55L7m3Ek%2bfPn6EarDdtO6FPl6eWsLYTcIyP3z%2b%2bgJNHBFXUppquMSxONpB7EaQo7DYrFNttlNAlTIcl28h6ZPYarFu6nEQMWcsOxB1DXrqm3V/z1qqaKvqXZQHkpYGkKt5AHsCO%2bNBdOv47PcLZbhWyU9R8JigUkE/V6azl4u0cNDXUVNTY%2bEFZlHuRpWCrktd0LLTXFzEx2JNEE2/%2bJP%2bNRHiBcPn7irY/wCEmCB5E840FGlHJ0lcyNyKM7tozpUSiUEhSMcc6SuW9irkDaBtHkdBorqC7Q2egM8xBc/THGTje3/r1Oi/1H0ktF0tRiMJIgp1WoeMcGTGS/sSf8ayVfa6pus7VFW%2b5iOF8lHoB6a1t/Dz1ivVfQEVJWSBrjawKScNyXTH9Nz7rwfup0AHqxPSV8kDMyyRnjPmPI6tFtjoKmymOe7NRknc20Ddu9fvoj%2bJvhjFdENbYgsdWmT8vnAf7KfL2PH3Gs%2b3GkmWeWmqBMkkbbZI3XBU%2bhB5B0Dl4KQ1zrTXGevlbKhpAcqo8/bVDv4WKuqwewkI51e/EaKewdGWSnoUiozXRvHUyRJtkLowcEsOTw2Dn00No0aekCTzgyY5Y5Jb786CJZ4UneMNlt%2bAQOCPXUvPDG9Odyg/R5%2b2kZbNCYkkSQRsv1c9z76Z1FwIiaPhjtIJ0E2ZVdSFOcdx5jVs8Gush0V19SVdTKY7XVf6at8wIz2fH/a2D7Z1SZHVmBwCw7HTao50H6PQ1NPPCkqyRvG6hlZWDBgeQQfMHQl8YrTFXXCOqtFHSyXGkj3PIclicZH0j9W0c8%2boGqv4QXyruvh/bk6cgmqLhRboKumZ/oRl/Sy57BgQSvbOcY17bFudu/ns/UxlOwtPPK54Ys36ePIH09NAMPFO6peOhaSR4/hV9uuISTHCurxkbl9OVwR5aFKTE8550V/FC2yQ9J1VQoZsyo8m4c8knPvnQdibQd19XUAjZPIEP0kBuNM8JsIVwSfPXdUcqw9MHTUaCxu21s/7T3%2bx0lK2dfMwKkHtpHd3B7j99AXP4aes16Z61qLdVyBaG7w/C5PCzpkxn8/Uv5GjRfLhE1qCTxmT5giaZR3Ybt2P8axysrwypLCxSWNg6MPJgcg/31pm03pOoLHQ3NcD5iIF1B/Sw4Yf3B0Cl8oV6r6FvYhhFPMzOYo2OcY7KT7fvrLIBUkdsAa15ZZB8KemA2q65Pvnv%2b%2bsm3KL5a51kDd45XT%2bzEaCOlOWf21wi45Ou2OJvfTloyWwdB//2Q==' /%3e%3c/svg%3e"}},314:function(t,e,o){"use strict";var a=o(285);o.n(a).a},332:function(t,e,o){"use strict";o.r(e);o(261),o(262),o(32),o(37),o(21),o(259),o(95);var a=o(254),r=o(94),n=o(260),i=o(296),s={components:{"u-content-box":a.a,"u-heading":r.a,"u-newsletter":n.a,"u-social-links":i.a},data:function(){return{theme:"light"}},computed:{title:function(){return"About"},description:function(){return"About ".concat(this.$static.metadata.author.name,". ").concat(this.$static.metadata.description,".")},image:function(){return this.$static.metadata.url+"/images/hero/Muhammad-Rehan-Saeed-1600x900.jpg"},url:function(){return this.$static.metadata.url+"/about/"},stackOverflowUrl:function(){return this.$static.metadata.author.stackOverflow.url},stackOverflowStoryUrl:function(){return this.$static.metadata.author.stackOverflow.storyUrl},stackOverflowProfileUrl:function(){return"https://stackoverflow.com/users/flair/".concat(this.$static.metadata.author.stackOverflow.user,".png?theme=").concat(this.oppositeTheme)},gitHubUrl:function(){return this.$static.metadata.author.gitHub.url},gitHubFollowersUrl:function(){return"https://img.shields.io/github/followers/".concat(this.$static.metadata.author.gitHub.user,"?style=social")},oppositeTheme:function(){return"light"===this.theme?"dark":"light"}},metaInfo:function(){return{title:this.title,link:[{rel:"canonical",href:this.url}],meta:[{name:"description",content:this.description},{name:"author",content:this.$static.metadata.author.name},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:this.$static.metadata.author.twitter},{name:"twitter:creator",content:this.$static.metadata.author.twitter},{name:"twitter:title",content:this.title},{name:"twitter:description",content:this.description},{name:"twitter:image",content:this.image},{property:"og:title",content:this.title},{property:"og:url",content:this.url},{property:"og:image",content:this.image},{property:"og:image:height",content:this.image.match(/(\d*)x(\d*)/)[2]},{property:"og:image:width",content:this.image.match(/(\d*)x(\d*)/)[1]},{property:"og:description",content:this.description},{property:"og:locale",content:this.$static.metadata.language.replace("-","_")},{property:"og:site_name",content:this.$static.metadata.name},{property:"og:type",content:"profile"},{property:"profile:first_name",content:this.$static.metadata.author.firstName},{property:"profile:last_name",content:this.$static.metadata.author.lastName},{property:"profile:username",content:this.$static.metadata.author.name},{property:"profile:gender",content:this.$static.metadata.author.gender},{property:"fb:app_id",content:this.$static.metadata.facebookAppId}]}},methods:{setTheme:function(t){this.theme=t.detail}},mounted:function(){window&&(this.theme=window.__theme,window.addEventListener("__themeChanged",this.setTheme,!1))},unmounted:function(){window&&window.removeEventListener("__themeChanged",this.setTheme,!1)}},c=(o(314),o(1)),u=o(0),l=u.a.config.optionMergeStrategies.computed,f={metadata:{name:"Muhammad Rehan Saeed",description:"Software Developer at Microsoft, Open Source Contributor and Blogger",url:"https://rehansaeed.com",language:"en-GB",facebookAppId:"632414437490344",author:{name:"Muhammad Rehan Saeed",firstName:"Muhammad Rehan",lastName:"Saeed",gender:"male",twitter:"@RehanSaeedUK",gitHub:{user:"RehanSaeed",url:"https://github.com/RehanSaeed"},stackOverflow:{user:"1212017",url:"https://stackoverflow.com/users/1212017/muhammad-rehan-saeed",storyUrl:"https://stackoverflow.com/story/muhammad-rehan-saeed"}}}},h=function(t){var e=t.options;e.__staticData?e.__staticData.data=f:(e.__staticData=u.a.observable({data:f}),e.computed=l({$static:function(){return e.__staticData.data}},e.computed))},p=Object(c.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"about"},[a("u-heading",{attrs:{level:"1"}},[t._v("About")]),a("u-content-box",{staticClass:"about__container",attrs:{tag:"article"}},[a("g-image",{staticClass:"about__image",attrs:{alt:"Muhammad Rehan Saeed",height:"480",width:"320",src:o(313),quality:"100"}}),a("u-heading",{staticClass:"about__title",attrs:{level:"2"}},[t._v("Muhammad Rehan Saeed")]),a("u-social-links",{staticClass:"about__social-links"}),a("p",{staticClass:"about__description"},[t._v("Rehan is a professional Software Developer at Microsoft. Although he works for Microsoft his opinions are his own. If it’s written in C# or .NET, Rehan has probably written something using it in anger!")]),a("p",{staticClass:"about__description"},[t._v("You can see some of the open source projects that I've started and maintained in my "),a("g-link",{attrs:{to:"/portfolio/"}},[t._v("portfolio")]),t._v(". There are many others I've contributed to which you can see in my "),a("a",{attrs:{href:t.gitHubUrl}},[t._v("GitHub profile")]),t._v(" and of course there are other commercial projects that I cannot disclose.")],1),a("a",{attrs:{href:t.gitHubUrl}},[a("img",{staticClass:"about__github-followers",attrs:{alt:"GitHub follower count",height:"30",width:"168",src:t.gitHubFollowersUrl}})]),a("p",{staticClass:"about__description"},[t._v("You can see a timeline of my open source work and blog posts in my "),a("a",{attrs:{href:t.stackOverflowStoryUrl}},[t._v("Stack Overflow Developer Story")]),t._v(" or just view my "),a("a",{attrs:{href:t.stackOverflowUrl}},[t._v("Stack Overflow profile")]),t._v(".")]),a("a",{attrs:{href:t.stackOverflowUrl}},[a("img",{staticClass:"about__stack-overflow-image",attrs:{alt:"Stack Overflow profile statistics",height:"58",width:"208",src:t.stackOverflowProfileUrl}})]),a("p",{staticClass:"about__description"},[t._v("Do you have questions or comments about my work? Please feel free to contact me using any of the links above.")])],1),a("u-newsletter")],1)])}),[],!1,null,null,null);"function"==typeof h&&h(p);e.default=p.exports}}]);