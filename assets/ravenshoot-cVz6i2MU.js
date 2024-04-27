var T=Object.defineProperty;var R=(i,e,t)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var b=(i,e,t)=>(R(i,typeof e!="symbol"?e+"":e,t),t);import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as q}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";import{getAuth as A}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";import{getFirestore as H,collection as Y,query as W,orderBy as G,limit as O,getDocs as X,doc as $,getDoc as P,updateDoc as K}from"https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";const U={apiKey:"AIzaSyA7COjHY9unIuzQTpk4mKY64IpiCywM3tY",authDomain:"point-shoot-game.firebaseapp.com",projectId:"point-shoot-game",storageBucket:"point-shoot-game.appspot.com",messagingSenderId:"68603130080",appId:"1:68603130080:web:58b672347d9b3af9482085",measurementId:"G-WKSEDH9XSF"},E=q(U),I=H(E),S=A(E);document.addEventListener("DOMContentLoaded",i=>{document.getElementById("volumeSlider").addEventListener("input",function(){D.forEach(t=>{t.volume=this.value}),p.value=this.value})});document.querySelector("#app").innerHTML=`
    <div class="video-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 -z-100"></div>
    <canvas id="collisionCanvas" class=" opacity-0"></canvas>
    <canvas id="canvas1"></canvas>
    <button id="resetButton" class="button w-[350px] opacity-0 border-white border-solid fixed top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 py-3 cursor-pointer ">Reset Game</button>
    <div id="startButtons" class="w-[350px] h-[500px] flex flex-col items-center gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-white border-solid border rounded-xl text-white bg-black/20 z-10">
            <p class="w-full">Raven Shoot</p>
            <button id="startGameButton" class="button">Start</button>
            <button id="leaderboardButton" class="button">Leaderboard</button>
            <button id="quitButton" class="button">Quit</button>
            <label for="volumeSlider">Volume Control:</label>
            <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="0.2" />
    </div>
    <div id="leaderboardContainer" class=" gap-2 hidden w-[350px] h-[500px] flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 border-white border-solid border rounded-xl text-white bg-black/20 z-10">
        <p>Leaderboard</p>
        <div id="scoresContainer" class=" text-white px-2 py-2 border-solid border-2 rounded-xl border-white w-52 h-72 b"></div>
        <button id="backButton" class="button my-2">Back</button>
    </div>
`;const a=document.getElementById("canvas1"),o=a.getContext("2d"),x=document.getElementById("collisionCanvas"),m=x.getContext("2d");a.width=window.innerWidth;a.height=window.innerHeight;x.width=window.innerWidth;x.height=window.innerHeight;let r=0,B=0,C=!1;o.font="50px Impact";let y=new Audio;y.src="../audio/gameOver.wav";y.volume=.2;let h=new Audio;h.src="../audio/backgroundMusic.mp3";h.volume=.2;let Q=document.getElementById("leaderboardButton"),M=document.getElementById("leaderboardContainer"),N=document.getElementById("backButton"),V=document.getElementById("startGameButton"),F=document.getElementById("quitButton"),w=document.querySelector("#startButtons"),J=document.getElementById("volumeSlider"),v=0,Z=500,k=0,z=3,D=[y,h];D.forEach(i=>{i.volume=J.value});let d=[],c=[],u=[];class _{constructor(){this.spriteWidth=271,this.spriteHeight=194,this.sizeModifier=Math.random()*.6+.4,this.width=this.spriteWidth*this.sizeModifier,this.height=this.spriteHeight*this.sizeModifier,this.x=a.width,this.y=this.y=Math.random()*(a.height-this.height),this.directionX=z+Math.random()*2,this.directionY=Math.random()*5-2.5,this.markedForDeletion=!1,this.image=new Image,this.image.src="../images/raven.png",this.frame=0,this.maxFrame=4,this.timeSinceFlap=0,this.flapInterval=Math.random()*50+50,this.randomColors=[Math.random()*255,Math.random()*255,Math.random()*255],this.color="rgb("+this.randomColors[0]+","+this.randomColors[1]+","+this.randomColors[2]+")",this.hasTrail=Math.random()>.8}update(e){if((this.y<0||this.y>a.height-this.height)&&(this.directionY=this.directionY*-1),this.x-=this.directionX,this.y+=this.directionY,this.x<0-this.width&&(this.markedForDeletion=!0),this.timeSinceFlap+=e,this.timeSinceFlap>this.flapInterval&&(this.frame>this.maxFrame?this.frame=0:this.frame++,this.timeSinceFlap=0,this.hasTrail))for(let t=0;t<5;t++)u.push(new j(this.x,this.y,this.width,this.color));this.x<0-this.width&&(C=!0)}draw(){m.fillStyle=this.color,m.fillRect(this.x,this.y,this.width,this.height),o.drawImage(this.image,this.spriteWidth*this.frame,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)}}const f=class f{constructor(e,t,s){this.image=new Image,this.image.src="../images/explosion.png",this.spriteWidth=200,this.spriteHeight=179,this.size=s,this.x=e,this.y=t,this.frame=0,this.sound=new Audio,this.sound.src="../audio/explosion.wav",this.sound.volume=f.value,this.timeSinceLastFrame=0,this.frameInterval=200,this.markedForDeletion=!1}update(e){this.frame===0&&this.sound.play(),this.timeSinceLastFrame+=e,this.timeSinceLastFrame>this.frameInterval&&(this.frame++,this.timeSinceLastFrame=0,this.frame>5&&(this.markedForDeletion=!0))}draw(){o.drawImage(this.image,this.spriteWidth*this.frame,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.size,this.size)}};b(f,"value",.1);let p=f;class j{constructor(e,t,s,l){this.size=s,this.x=e+this.size/2+Math.random()*50-25,this.y=t+this.size/3+Math.random()*50-25,this.radius=Math.random()*this.size/10,this.maxRadius=Math.random()*20+35,this.markedForDeletion=!1,this.speedX=Math.random()*1-.5,this.speedY=Math.random()*1-.5,this.color=l}update(){this.x+=this.speedX,this.y+=this.speedY,this.radius<this.maxRadius-5?this.radius+=.3:this.markedForDeletion=!0}draw(){o.save(),o.globalAlpha=1-this.radius/this.maxRadius,o.beginPath(),o.arc(this.x,this.y,this.radius,0,Math.PI*2),o.fillStyle=this.color,o.fill(),o.restore()}}function tt(){z+=1}function et(){r!==0&&r%50===0&&r!==B&&(tt(),B=r,h.playbackRate+=.1)}function it(){o.fillStyle="black",o.fillText("Score: "+r,50,75),o.fillStyle="white",o.fillText("Score: "+r,53,78)}function st(){if(o.textAlign="center",o.fillStyle="black",o.fillText("Game Over, your score is "+r,a.width/2,a.height/2),o.fillStyle="white",o.fillText("Game Over, your score is "+r,a.width/2+3,a.height/2+3),S.currentUser){const i=$(I,"users",S.currentUser.uid);P(i).then(e=>{e.exists()&&e.data().score<r?K(i,{score:r}).then(()=>{}).catch(t=>{console.error("Error updating high score:",t)}):e.exists()||setDoc(i,{score:r}).then(()=>{}).catch(t=>{console.error("Error setting initial high score:",t)})}).catch(e=>{console.error("Error retrieving user document:",e)})}}function ot(){resetButton.style.opacity="1",document.getElementById("resetButton").addEventListener("click",function(){location.reload()})}function at(i){const e=document.getElementById("scoresContainer");e.innerHTML="";let t=1;i.forEach(s=>{const l=document.createElement("div");l.textContent=`${t++}. ${s.username}: ${s.score}`,e.appendChild(l)})}async function rt(){const i=Y(I,"users"),e=W(i,G("score","desc"),O(10));try{const s=(await X(e)).docs.map(l=>({username:l.data().username,score:l.data().score}));at(s)}catch(t){console.error("Error fetching scores:",t)}}V.addEventListener("click",function(){w.style.display="none",F.style.display="none",document.querySelector(".video-overlay").style.display="none",L(0),window.addEventListener("click",function(i){const t=m.getImageData(i.x,i.y,1,1).data;d.forEach((s,l)=>{if(s.x<i.x&&i.x<s.x+s.width&&s.y<i.y&&i.y<s.y+s.height&&t[3]>250){s.markedForDeletion=!0;let g=1;s.sizeModifier<.5&&(g=2),r+=g,c.push(new p(s.x,s.y,s.width));const n=document.createElement("div");n.classList.add("plus-one"),n.textContent=`+${g}`,n.style.left=`${i.pageX-10}px`,n.style.top=`${i.pageY-20}px`,document.body.appendChild(n),n.style.left=s.x+s.width/2+"px",n.style.top=s.y+"px",requestAnimationFrame(()=>{n.style.opacity="1",n.style.fontSize="2.5rem",n.style.transform="translateY(-30px)",setTimeout(()=>{n.remove()},600)})}})})});F.addEventListener("click",function(){location.href="../index.html"});Q.addEventListener("click",function(){w.style.display="none",M.style.display="flex",rt()});N.addEventListener("click",function(){w.style.display="flex",M.style.display="none"});function L(i){h.play(),o.clearRect(0,0,a.width,a.height),m.clearRect(0,0,a.width,a.height);let e=i-k;k=i,v+=e,et(),v>Z&&(d.push(new _),v=0,d.sort(function(t,s){return t.width-s.width})),it(),[...u,...d,...c].forEach(t=>{t.update(e),t.draw()}),d=d.filter(t=>!t.markedForDeletion),c=c.filter(t=>!t.markedForDeletion),u=u.filter(t=>!t.markedForDeletion),C?(h.pause(),st(),y.play(),ot()):requestAnimationFrame(L)}
