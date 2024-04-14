import{initializeApp as m}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";import{getAuth as p,createUserWithEmailAndPassword as g,signInWithEmailAndPassword as b}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";import{getFirestore as f,setDoc as y,doc as v,collection as h,query as w,where as B,getDocs as x}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",i=>{const r=document.querySelector("#loginButton"),n=document.querySelector(".mainContainer"),o=document.querySelector(".loginForm"),e=document.querySelector("#registerButton"),t=document.querySelector(".registerForm"),s=document.querySelector("#guestButton"),a=document.querySelectorAll(".quitButton");r.addEventListener("click",function(){n.style.display="none",o.style.display="block"}),e.addEventListener("click",function(){n.style.display="none",t.style.display="flex"}),s.addEventListener("click",function(){window.location.href="./game/index.html"}),a.forEach(function(c){c.addEventListener("click",function(){n.style.display="flex",o.style.display="none",t.style.display="none"})})});document.querySelector("#app").innerHTML=`
  <div>
    <div class="relative z-10 flex justify-center items-center h-svh">
      <div class="mainContainer w-[350px] h-[400px] flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-white border-solid border rounded-xl text-white bg-black/20">
        <p class="text-2xl font-bold text-center my-5">Raven Shoot</p>
        <div class="loginContainerButton subContainer w-full my-1">
          <button id="loginButton" class="button">Login</button>
        </div>
        <div class="registerContainerButton subContainer w-full my-1">
          <button id="registerButton" class="button">Register</button>
        </div>
        <div class="guestContainerButton subContainer w-full my-1">
          <button id="guestButton" class="button">Play as Guest</button>
        </div>
      </div>
      <div class="loginForm hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-black border-solid border rounded-xl text-white bg-black/20 backdrop-blur-md">
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
      </div>
      <div class="registerForm hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-black border-solid border rounded-xl text-white bg-black/20 backdrop-blur-md">
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
            <button type="submit">Register</button>
          </div>
          <div class="input quitButton">
            <button>Quit</button>
          </div>
          <div id="register-message"></div>
        </form>
      </div>
    </div>
  </div>
`;const E={apiKey:"AIzaSyA7COjHY9unIuzQTpk4mKY64IpiCywM3tY",authDomain:"point-shoot-game.firebaseapp.com",projectId:"point-shoot-game",storageBucket:"point-shoot-game.appspot.com",messagingSenderId:"68603130080",appId:"1:68603130080:web:58b672347d9b3af9482085",measurementId:"G-WKSEDH9XSF"},l=m(E),d=p(l),u=f(l);document.getElementById("registerForm").addEventListener("submit",async i=>{i.preventDefault();const r=document.getElementById("email").value,n=document.getElementById("name-register").value,o=document.getElementById("password-register").value;try{const e=await g(d,r,o);console.log("User registered:",e.user),await y(v(u,"users",e.user.uid),{username:n,email:r,score:0}),document.getElementById("register-message").textContent="Successfully registered!"}catch(e){console.error("Error in user registration:",e),document.getElementById("register-message").textContent="Registration failed: "+e.message}});document.getElementById("loginForm").addEventListener("submit",async i=>{i.preventDefault();const r=document.getElementById("name-login").value,n=document.getElementById("password-login").value;try{const o=h(u,"users"),e=w(o,B("username","==",r)),t=await x(e);if(t.empty){console.error("No user found with this username");return}const s=t.docs[0].data(),a=await b(d,s.email,n);console.log("User logged in:",a.user),window.location.href="./game/index.html"}catch(o){console.error("Error in user login:",o)}});
