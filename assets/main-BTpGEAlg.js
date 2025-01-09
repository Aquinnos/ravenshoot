import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as at}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";import{getAuth as tt,createUserWithEmailAndPassword as st,signInWithEmailAndPassword as ut,sendPasswordResetEmail as dt}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";import{getFirestore as lt,setDoc as ct,doc as ft,collection as mt,query as pt,where as bt,getDocs as vt}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";var yt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gt(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var et={exports:{}};(function(E,C){(function(p,r){E.exports=r()})(yt,function(){return function(p){function r(e){if(o[e])return o[e].exports;var u=o[e]={exports:{},id:e,loaded:!1};return p[e].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}var o={};return r.m=p,r.c=o,r.p="dist/",r(0)}([function(p,r,o){function e(a){return a&&a.__esModule?a:{default:a}}var u=Object.assign||function(a){for(var k=1;k<arguments.length;k++){var _=arguments[k];for(var T in _)Object.prototype.hasOwnProperty.call(_,T)&&(a[T]=_[T])}return a},b=o(1),w=(e(b),o(6)),i=e(w),f=o(7),s=e(f),l=o(8),d=e(l),v=o(9),j=e(v),S=o(10),$=e(S),Q=o(11),G=e(Q),U=o(14),Y=e(U),q=[],K=!1,y={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},M=function(){var a=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(a&&(K=!0),K)return q=(0,G.default)(q,y),(0,$.default)(q,y.once),q},D=function(){q=(0,Y.default)(),M()},n=function(){q.forEach(function(a,k){a.node.removeAttribute("data-aos"),a.node.removeAttribute("data-aos-easing"),a.node.removeAttribute("data-aos-duration"),a.node.removeAttribute("data-aos-delay")})},t=function(a){return a===!0||a==="mobile"&&j.default.mobile()||a==="phone"&&j.default.phone()||a==="tablet"&&j.default.tablet()||typeof a=="function"&&a()===!0},c=function(a){y=u(y,a),q=(0,Y.default)();var k=document.all&&!window.atob;return t(y.disable)||k?n():(y.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),y.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",y.easing),document.querySelector("body").setAttribute("data-aos-duration",y.duration),document.querySelector("body").setAttribute("data-aos-delay",y.delay),y.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?M(!0):y.startEvent==="load"?window.addEventListener(y.startEvent,function(){M(!0)}):document.addEventListener(y.startEvent,function(){M(!0)}),window.addEventListener("resize",(0,s.default)(M,y.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(M,y.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)(function(){(0,$.default)(q,y.once)},y.throttleDelay)),y.disableMutationObserver||d.default.ready("[data-aos]",D),q)};p.exports={init:c,refresh:M,refreshHard:D}},function(p,r){},,,,,function(p,r){(function(o){function e(t,c,a){function k(m){var O=P,H=A;return P=A=void 0,N=m,x=t.apply(H,O)}function _(m){return N=m,h=setTimeout(W,c),F?k(m):x}function T(m){var O=m-B,H=m-N,Z=c-O;return I?D(Z,L-H):Z}function R(m){var O=m-B,H=m-N;return B===void 0||O>=c||O<0||I&&H>=L}function W(){var m=n();return R(m)?J(m):void(h=setTimeout(W,T(m)))}function J(m){return h=void 0,g&&P?k(m):(P=A=void 0,x)}function V(){h!==void 0&&clearTimeout(h),N=0,P=B=A=h=void 0}function X(){return h===void 0?x:J(n())}function z(){var m=n(),O=R(m);if(P=arguments,A=this,B=m,O){if(h===void 0)return _(B);if(I)return h=setTimeout(W,c),k(B)}return h===void 0&&(h=setTimeout(W,c)),x}var P,A,L,x,h,B,N=0,F=!1,I=!1,g=!0;if(typeof t!="function")throw new TypeError(l);return c=f(c)||0,b(a)&&(F=!!a.leading,I="maxWait"in a,L=I?M(f(a.maxWait)||0,c):L,g="trailing"in a?!!a.trailing:g),z.cancel=V,z.flush=X,z}function u(t,c,a){var k=!0,_=!0;if(typeof t!="function")throw new TypeError(l);return b(a)&&(k="leading"in a?!!a.leading:k,_="trailing"in a?!!a.trailing:_),e(t,c,{leading:k,maxWait:c,trailing:_})}function b(t){var c=typeof t>"u"?"undefined":s(t);return!!t&&(c=="object"||c=="function")}function w(t){return!!t&&(typeof t>"u"?"undefined":s(t))=="object"}function i(t){return(typeof t>"u"?"undefined":s(t))=="symbol"||w(t)&&y.call(t)==v}function f(t){if(typeof t=="number")return t;if(i(t))return d;if(b(t)){var c=typeof t.valueOf=="function"?t.valueOf():t;t=b(c)?c+"":c}if(typeof t!="string")return t===0?t:+t;t=t.replace(j,"");var a=$.test(t);return a||Q.test(t)?G(t.slice(2),a?2:8):S.test(t)?d:+t}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l="Expected a function",d=NaN,v="[object Symbol]",j=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,G=parseInt,U=(typeof o>"u"?"undefined":s(o))=="object"&&o&&o.Object===Object&&o,Y=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,q=U||Y||Function("return this")(),K=Object.prototype,y=K.toString,M=Math.max,D=Math.min,n=function(){return q.Date.now()};p.exports=u}).call(r,function(){return this}())},function(p,r){(function(o){function e(n,t,c){function a(g){var m=z,O=P;return z=P=void 0,B=g,L=n.apply(O,m)}function k(g){return B=g,x=setTimeout(R,t),N?a(g):L}function _(g){var m=g-h,O=g-B,H=t-m;return F?M(H,A-O):H}function T(g){var m=g-h,O=g-B;return h===void 0||m>=t||m<0||F&&O>=A}function R(){var g=D();return T(g)?W(g):void(x=setTimeout(R,_(g)))}function W(g){return x=void 0,I&&z?a(g):(z=P=void 0,L)}function J(){x!==void 0&&clearTimeout(x),B=0,z=h=P=x=void 0}function V(){return x===void 0?L:W(D())}function X(){var g=D(),m=T(g);if(z=arguments,P=this,h=g,m){if(x===void 0)return k(h);if(F)return x=setTimeout(R,t),a(h)}return x===void 0&&(x=setTimeout(R,t)),L}var z,P,A,L,x,h,B=0,N=!1,F=!1,I=!0;if(typeof n!="function")throw new TypeError(s);return t=i(t)||0,u(c)&&(N=!!c.leading,F="maxWait"in c,A=F?y(i(c.maxWait)||0,t):A,I="trailing"in c?!!c.trailing:I),X.cancel=J,X.flush=V,X}function u(n){var t=typeof n>"u"?"undefined":f(n);return!!n&&(t=="object"||t=="function")}function b(n){return!!n&&(typeof n>"u"?"undefined":f(n))=="object"}function w(n){return(typeof n>"u"?"undefined":f(n))=="symbol"||b(n)&&K.call(n)==d}function i(n){if(typeof n=="number")return n;if(w(n))return l;if(u(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=u(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=n.replace(v,"");var c=S.test(n);return c||$.test(n)?Q(n.slice(2),c?2:8):j.test(n)?l:+n}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s="Expected a function",l=NaN,d="[object Symbol]",v=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,$=/^0o[0-7]+$/i,Q=parseInt,G=(typeof o>"u"?"undefined":f(o))=="object"&&o&&o.Object===Object&&o,U=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,Y=G||U||Function("return this")(),q=Object.prototype,K=q.toString,y=Math.max,M=Math.min,D=function(){return Y.Date.now()};p.exports=e}).call(r,function(){return this}())},function(p,r){function o(f){var s=void 0,l=void 0;for(s=0;s<f.length;s+=1)if(l=f[s],l.dataset&&l.dataset.aos||l.children&&o(l.children))return!0;return!1}function e(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!e()}function b(f,s){var l=window.document,d=e(),v=new d(w);i=s,v.observe(l.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(f){f&&f.forEach(function(s){var l=Array.prototype.slice.call(s.addedNodes),d=Array.prototype.slice.call(s.removedNodes),v=l.concat(d);if(o(v))return i()})}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){};r.default={isSupported:u,ready:b}},function(p,r){function o(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function e(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function l(d,v){for(var j=0;j<v.length;j++){var S=v[j];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(d,S.key,S)}}return function(d,v,j){return v&&l(d.prototype,v),j&&l(d,j),d}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function l(){o(this,l)}return u(l,[{key:"phone",value:function(){var d=e();return!(!b.test(d)&&!w.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=e();return!(!i.test(d)&&!f.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),l}();r.default=new s},function(p,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(u,b,w){var i=u.node.getAttribute("data-aos-once");b>u.position?u.node.classList.add("aos-animate"):typeof i<"u"&&(i==="false"||!w&&i!=="true")&&u.node.classList.remove("aos-animate")},e=function(u,b){var w=window.pageYOffset,i=window.innerHeight;u.forEach(function(f,s){o(f,i+w,b)})};r.default=e},function(p,r,o){function e(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(r,"__esModule",{value:!0});var u=o(12),b=e(u),w=function(i,f){return i.forEach(function(s,l){s.node.classList.add("aos-init"),s.position=(0,b.default)(s.node,f.offset)}),i};r.default=w},function(p,r,o){function e(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(r,"__esModule",{value:!0});var u=o(13),b=e(u),w=function(i,f){var s=0,l=0,d=window.innerHeight,v={offset:i.getAttribute("data-aos-offset"),anchor:i.getAttribute("data-aos-anchor"),anchorPlacement:i.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(l=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(i=document.querySelectorAll(v.anchor)[0]),s=(0,b.default)(i).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":s+=i.offsetHeight/2;break;case"bottom-bottom":s+=i.offsetHeight;break;case"top-center":s+=d/2;break;case"bottom-center":s+=d/2+i.offsetHeight;break;case"center-center":s+=d/2+i.offsetHeight/2;break;case"top-top":s+=d;break;case"bottom-top":s+=i.offsetHeight+d;break;case"center-top":s+=i.offsetHeight/2+d}return v.anchorPlacement||v.offset||isNaN(f)||(l=f),s+l};r.default=w},function(p,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){for(var u=0,b=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)u+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),b+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:b,left:u}};r.default=o},function(p,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(u){return{node:u}})};r.default=o}])})})(et);var wt=et.exports;const ot=gt(wt);ot.init();document.addEventListener("DOMContentLoaded",E=>{const C=document.querySelector("#loginButton"),p=document.querySelector(".mainContainer"),r=document.querySelector(".loginForm"),o=document.querySelector("#registerButton"),e=document.querySelector(".registerForm"),u=document.querySelector("#guestButton"),b=document.querySelectorAll(".quitButton"),w=document.querySelector("#forgotPasswordButton"),i=document.querySelector("#resetPasswordContainer");w.addEventListener("click",function(){e.style.display="none",i.style.display="block"}),C.addEventListener("click",function(){p.style.display="none",r.style.display="block"}),o.addEventListener("click",function(){p.style.display="none",e.style.display="block"}),u.addEventListener("click",function(){window.location.href="./game/ravenshoot.html"}),b.forEach(function(f){f.addEventListener("click",function(){p.style.display="flex",r.style.display="none",e.style.display="none",i.style.display="none"})})});document.querySelector("#app").innerHTML=`
  <div>
    <div class="relative z-10 flex justify-center items-center h-svh">
      <div id="resetPasswordContainer" class"resetPasswordContainer hidden ">
        <form id="resetPasswordForm" >
        <input type="email" id="resetEmail" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
        </form>
        <div class="input quitButton">
          <button>Quit</button>
        </div>
      </div>
      <div class="announce w-[350px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 flex flex-col justify-center items-center border-white border-solid border rounded-xl text-white bg-black/20">
        <p class="text-2xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Width is too small!</p>
      </div>
      <div class="mainContainer w-[350px] h-[400px] flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-white border-solid border rounded-xl text-white bg-black/20">
        <p class="text-3xl font-hacked font-bold text-center my-5" data-aos="fade-in">Raven Shoot</p>
        <div class="loginContainerButton subContainer w-full my-1">
          <button id="loginButton" class="button" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1000">Login</button>
        </div>
        <div class="registerContainerButton subContainer w-full my-1" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
          <button id="registerButton" class="button">Register</button>
        </div>
        <div class="guestContainerButton subContainer w-full my-1" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
          <button id="guestButton" class="button">Play as Guest</button>
        </div>
        <div class="footer h-8 w-full bottom-0 absolute">
          <p class="text-xs text-center text-white">© 2024 Raven Shoot | Beta 0.5.3</p>
        </div>
      </div>
      <div class="loginForm hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-white border-solid border rounded-xl text-white bg-black/20 ">
        <form action="" method="post" class="form" id="loginForm">
          <div class="input">
            <label for="name">Name</label><br>
            <input type="text" name="name-login" id="name-login" required>
          </div>
          <div class="input">
            <label for="password">Password</label><br>
            <input type="password" name="password-login" id="password-login" required>
          </div>
          <div class="input">
            <button type="submit">Play</button>
          </div>
        </form>
        <div class="input quitButton">
          <button>Quit</button>
        </div>
        <div class="footer h-8 w-full bottom-0 absolute -translate-x-20">
          <p class="text-xs text-center text-white">© 2024 Raven Shoot | Beta 0.5.3</p>
        </div>
      </div>
      <div class="registerForm hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-white border-solid border rounded-xl text-white bg-black/20 ">
        <form action="" method="post" class="form" id="registerForm">
          <div class="input">
            <label for="email">Email</label><br>
            <input type="email" name="email" id="email" required>
          </div>
          <div class="input">
            <label for="name">Name</label><br>
            <input type="text" name="name" id="name-register" required>
          </div>
          <div class="input">
            <label for="password">Password</label><br>
            <input type="password" id="password-register" required>
          </div>
          <div class="input">
            <button class="button border-none bg-transparent text-sm" id="forgotPasswordButton">Forgot Password</button>
          <div class="input">
            <button type="submit">Register</button>
          </div>
          <div class="input quitButton">
            <button>Quit</button>
          </div>
          <div id="register-message"></div>
        </form>
        <div class="footer h-8 w-full bottom-0 absolute -translate-x-20">
          <p class="text-xs text-center text-white">© 2024 Raven Shoot | Beta 0.5.3</p>
        </div>
      </div>
    </div>
  </div>
`;const ht={apiKey:"AIzaSyA7COjHY9unIuzQTpk4mKY64IpiCywM3tY",authDomain:"point-shoot-game.firebaseapp.com",projectId:"point-shoot-game",storageBucket:"point-shoot-game.appspot.com",messagingSenderId:"68603130080",appId:"1:68603130080:web:58b672347d9b3af9482085",measurementId:"G-WKSEDH9XSF"},nt=at(ht),rt=tt(nt),it=lt(nt);document.getElementById("registerForm").addEventListener("submit",async E=>{E.preventDefault();const C=document.getElementById("email").value,p=document.getElementById("name-register").value,r=document.getElementById("password-register").value;try{const o=await st(rt,C,r);console.log("User registered:",o.user),await ct(ft(it,"users",o.user.uid),{username:p,email:C,score:0}),document.getElementById("register-message").textContent="Successfully registered!"}catch(o){console.error("Error in user registration:",o),document.getElementById("register-message").textContent="Registration failed: "+o.message}});document.getElementById("loginForm").addEventListener("submit",async E=>{E.preventDefault();const C=document.getElementById("name-login").value,p=document.getElementById("password-login").value;try{const r=mt(it,"users"),o=pt(r,bt("username","==",C)),e=await vt(o);if(e.empty){console.error("No user found with this username");return}const u=e.docs[0].data(),b=await ut(rt,u.email,p);console.log("User logged in:",b.user),window.location.href="./game/ravenshoot.html"}catch(r){console.error("Error in user login:",r)}});const xt=document.getElementById("resetPasswordForm");xt.addEventListener("submit",E=>{E.preventDefault();const C=tt(),p=document.getElementById("resetEmail").value;dt(C,p).then(()=>{console.log("Password reset email sent!")}).catch(r=>{console.error("Error sending password reset email:",r)})});ot.init();
