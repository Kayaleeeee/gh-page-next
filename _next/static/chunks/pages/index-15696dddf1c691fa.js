(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8045:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,s=void 0!==i&&i,u=e.priority,d=void 0!==u&&u,p=e.loading,b=e.lazyBoundary,y=void 0===b?"200px":b,v=e.className,w=e.quality,x=e.width,j=e.height,S=e.objectFit,z=e.objectPosition,E=e.onLoadingComplete,O=e.loader,N=void 0===O?k:O,I=e.placeholder,P=void 0===I?"empty":I,D=e.blurDataURL,L=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),R=n?"responsive":"intrinsic";"layout"in L&&(L.layout&&(R=L.layout),delete L.layout);var q="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var H=g(t)?t.default:t;if(!H.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(D=D||H.blurDataURL,q=H.src,(!R||"fill"!==R)&&(j=j||H.height,x=x||H.width,!H.height||!H.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)))}t="string"===typeof t?t:q;var C=A(x),M=A(j),W=A(w),B=!d&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,B=!1);m.has(t)&&(B=!1);0;var T,U=r(l.useIntersection({rootMargin:y,disabled:!B}),2),F=U[0],V=U[1],G=!B||V,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Q={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:z},Z="blur"===P?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:z||"0% 0%"}:{};if("fill"===R)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof C&&"undefined"!==typeof M){var K=M/C,$=isNaN(K)?"100%":"".concat(100*K,"%");"responsive"===R?(J.display="block",J.position="relative",Y=!0,X.paddingTop=$):"intrinsic"===R?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Y=!0,X.maxWidth="100%",T='<svg width="'.concat(C,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===R&&(J.display="inline-block",J.position="relative",J.width=C,J.height=M)}else 0;var ee={src:h,srcSet:void 0,sizes:void 0};G&&(ee=_({src:t,unoptimized:s,layout:R,width:C,quality:W,sizes:n,loader:N}));var te=t;0;return o.default.createElement("span",{style:J},Y?o.default.createElement("span",{style:X},T?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(T))}):null):null,o.default.createElement("img",Object.assign({},L,ee,{decoding:"async","data-nimg":R,className:v,ref:function(e){F(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==h&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,te,0,P,E)},style:f({},Q,Z)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},L,_({src:t,unoptimized:s,layout:R,width:C,quality:W,sizes:n,loader:N}),{decoding:"async","data-nimg":R,style:Q,className:v,loading:p||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,imagesrcset:ee.srcSet,imagesizes:ee.sizes})):null)};var o=d(n(7294)),a=d(n(5443)),c=n(6978),s=n(5809),l=n(7190);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){u(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var m=new Set,h=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var p=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://localhost:3000/",loader:"imgix"}||s.imageConfigDefault,y=b.deviceSizes,v=b.imageSizes,w=b.loader,x=b.path,j=(b.domains,i(y).concat(i(v)));function _(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c,s=.01*(c=Math).min.apply(c,i(a));return{widths:j.filter((function(e){return e>=y[0]*s})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:y,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return j.find((function(t){return t>=e}))||j[j.length-1]})))),kind:"x"}}(o,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=p.get(w);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(w))}function S(e){return"/"===e[0]?e.slice(1):e}y.sort((function(e,t){return e-t})),j.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=i.useRef(),l=r(i.useState(!1),2),u=l[0],d=l[1],f=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5075:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(9008),o=n(5675),a=n(7852),c=n.n(a);t.default=function(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:c().code,children:"pages/index.tsx"})]}),(0,r.jsxs)("div",{className:c().grid,children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,r.jsx)("h2",{children:"Documentation \u2192"}),(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,r.jsx)("h2",{children:"Learn \u2192"}),(0,r.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:c().card,children:[(0,r.jsx)("h2",{children:"Examples \u2192"}),(0,r.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,r.jsx)("h2",{children:"Deploy \u2192"}),(0,r.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,r.jsx)("footer",{className:c().footer,children:(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:c().logo,children:(0,r.jsx)(o.default,{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7852:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);