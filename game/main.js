import './style.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';
import firebaseConfig from '../firebaseConfig.js';

// Inicjalizacja aplikacji Firebase
const app = initializeApp(firebaseConfig);

// Inicjalizacja Firestore
const db = getFirestore(app);

// Inicjalizacja Firebase Auth
const auth = getAuth(app);

AOS.init();

document.addEventListener('DOMContentLoaded', (event) => {
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', function () {
    sounds.forEach((sound) => {
      sound.volume = this.value;
    });
    Explosion.value = this.value;
  });
});

document.querySelector('#app').innerHTML = `
    <div class="video-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 -z-100"></div>
    <canvas id="collisionCanvas" class=" opacity-0"></canvas>
    <canvas id="canvas1"></canvas>
    <button id="resetButton" class="button w-[350px] border-white border-solid opacity-0 fixed top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 py-3 cursor-pointer ">Reset Game</button>
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
`;

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const collisionCanvas = document.getElementById('collisionCanvas');
const collisionCtx = collisionCanvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

let score = 0;
let lastScoreUpdate = 0;
let gameOver = false;
ctx.font = '50px Impact';
let gameOverSound = new Audio();
gameOverSound.src = '../public/audio/gameOver.wav';
gameOverSound.volume = 0.2;
let backgroundMusic = new Audio();
backgroundMusic.src = '../public/audio/backgroundMusic.mp3';
backgroundMusic.volume = 0.2;

let leaderboardButton = document.getElementById('leaderboardButton');
let buttonsContainer = document.getElementById('buttonsContainer');
let leaderboardContainer = document.getElementById('leaderboardContainer');
let backButton = document.getElementById('backButton');
let gameStartButton = document.getElementById('startGameButton');
let quitButton = document.getElementById('quitButton');
let startButtonsDiv = document.querySelector('#startButtons');
let volumeSlider = document.getElementById('volumeSlider');

let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

let sounds = [gameOverSound, backgroundMusic];

// początkowa głośność na podstawie wartości suwaka
sounds.forEach((sound) => {
  sound.volume = volumeSlider.value;
});

let ravens = [];
let explosions = [];
let particles = [];

class Raven {
  constructor() {
    this.spriteWidth = 271;
    this.spriteHeight = 194;
    this.sizeModifier = Math.random() * 0.6 + 0.4;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.x = canvas.width;
    this.y = this.y = Math.random() * (canvas.height - this.height);
    this.directionX = Math.random() * 5 + 3;
    this.directionY = Math.random() * 5 - 2.5;
    this.markedForDeletion = false;
    this.image = new Image();
    this.image.src = '../public/images/raven.png';
    this.frame = 0;
    this.maxFrame = 4;
    this.timeSinceFlap = 0;
    this.flapInterval = Math.random() * 50 + 50;
    this.randomColors = [
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    ];
    this.color =
      'rgb(' +
      this.randomColors[0] +
      ',' +
      this.randomColors[1] +
      ',' +
      this.randomColors[2] +
      ')';
    this.hasTrail = Math.random() > 0.5;
  }
  update(deltaTime) {
    if (this.y < 0 || this.y > canvas.height - this.height) {
      this.directionY = this.directionY * -1;
    }
    this.x -= this.directionX;
    this.y += this.directionY;
    if (this.x < 0 - this.width) this.markedForDeletion = true;
    this.timeSinceFlap += deltaTime;
    if (this.timeSinceFlap > this.flapInterval) {
      if (this.frame > this.maxFrame) this.frame = 0;
      else this.frame++;
      this.timeSinceFlap = 0;
      if (this.hasTrail) {
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(this.x, this.y, this.width, this.color));
        }
      }
    }
    if (this.x < 0 - this.width) gameOver = true;
  }
  draw() {
    collisionCtx.fillStyle = this.color;
    collisionCtx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Explosion {
  static value = 0.1;

  constructor(x, y, size) {
    this.image = new Image();
    this.image.src = '../public/images/explosion.png';
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.size = size;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.sound = new Audio();
    this.sound.src = '../public/audio/explosion.wav';
    this.sound.volume = Explosion.value;
    this.timeSinceLastFrame = 0;
    this.frameInterval = 200;
    this.markedForDeletion = false;
  }
  update(deltaTime) {
    if (this.frame === 0) this.sound.play();
    this.timeSinceLastFrame += deltaTime;
    if (this.timeSinceLastFrame > this.frameInterval) {
      this.frame++;
      this.timeSinceLastFrame = 0;
      if (this.frame > 5) this.markedForDeletion = true;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
}

class Particle {
  constructor(x, y, size, color) {
    this.size = size;
    this.x = x + this.size / 2 + Math.random() * 50 - 25;
    this.y = y + this.size / 3 + Math.random() * 50 - 25;
    this.radius = (Math.random() * this.size) / 10;
    this.maxRadius = Math.random() * 20 + 35;
    this.markedForDeletion = false;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = color;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.radius < this.maxRadius - 5) this.radius += 0.3;
    else this.markedForDeletion = true;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = 1 - this.radius / this.maxRadius;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function drawScore() {
  ctx.fillStyle = 'black';
  ctx.fillText('Score: ' + score, 50, 75);
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + score, 53, 78);
}

function drawGameOver() {
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText(
    'Game Over, your score is ' + score,
    canvas.width / 2,
    canvas.height / 2
  );
  ctx.fillStyle = 'white';
  ctx.fillText(
    'Game Over, your score is ' + score,
    canvas.width / 2 + 3,
    canvas.height / 2 + 3
  );

  if (auth.currentUser) {
    const userRef = doc(db, 'users', auth.currentUser.uid);

    getDoc(userRef)
      .then((docSnap) => {
        if (docSnap.exists() && docSnap.data().score < score) {
          // Jeśli wynik użytkownika istnieje i nowy wynik jest wyższy, aktualizuj go.
          updateDoc(userRef, { score: score })
            .then(() => {
              console.log('High score updated successfully!');
            })
            .catch((error) => {
              console.error('Error updating high score:', error);
            });
        } else if (!docSnap.exists()) {
          // Jeśli dokument użytkownika nie istnieje, utwórz go z nowym wynikiem.
          setDoc(userRef, { score: score })
            .then(() => {
              console.log('High score set for the first time successfully!');
            })
            .catch((error) => {
              console.error('Error setting initial high score:', error);
            });
        } else {
          // Jeśli obecny wynik jest niższy lub równy, nie rób nic.
          console.log(
            'Current score is lower than or equal to high score. No update needed.'
          );
        }
      })
      .catch((error) => {
        console.error('Error retrieving user document:', error);
      });
  } else {
    console.log('No user logged in, score not saved');
  }
}

function resetGame() {
  resetButton.style.opacity = '1';
  document.getElementById('resetButton').addEventListener('click', function () {
    location.reload();
  });
}

function displayScores(scores) {
  const scoresContainer = document.getElementById('scoresContainer');
  scoresContainer.innerHTML = ''; // Wyczyść aktualne wyniki
  let i = 1;
  scores.forEach((score) => {
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `${i++}. ${score.username}: ${score.score}`;
    scoresContainer.appendChild(scoreElement);
  });
}

async function fetchTopScores() {
  const scoresRef = collection(db, 'users');
  const q = query(scoresRef, orderBy('score', 'desc'), limit(10)); // Pobierz 10 najlepszych wyników

  try {
    const querySnapshot = await getDocs(q);
    const scoresList = querySnapshot.docs.map((doc) => ({
      username: doc.data().username,
      score: doc.data().score,
    }));
    displayScores(scoresList);
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
}

gameStartButton.addEventListener('click', function () {
  startButtonsDiv.style.display = 'none';
  quitButton.style.display = 'none';
  document.querySelector('.video-overlay').style.display = 'none';
  animate(0);
  window.addEventListener('click', function (e) {
    const detectPixelColor = collisionCtx.getImageData(e.x, e.y, 1, 1);
    const pixelColor = detectPixelColor.data;
    ravens.forEach((object, index) => {
      if (
        object.x < e.x &&
        e.x < object.x + object.width &&
        object.y < e.y &&
        e.y < object.y + object.height
      ) {
        if (pixelColor[3] > 250) {
          // Collision detected
          object.markedForDeletion = true;
          let pointsToAdd = 1; // Domyślnie 1 punkt

          // Jeśli kruk jest mniejszy niż jakiś rozmiar (na przykład rozmiar modyfikatora jest mniejszy niż 0.5), przyznaj 2 punkty
          if (object.sizeModifier < 0.5) {
            pointsToAdd = 2;
          }

          score += pointsToAdd; // Dodaj punkty do wyniku
          explosions.push(new Explosion(object.x, object.y, object.width));

          // Tworzenie i wyświetlanie elementu "+1" lub "+2"
          const plusOne = document.createElement('div');
          plusOne.classList.add('plus-one');
          plusOne.textContent = `+${pointsToAdd}`; // Ustaw tekst na "+1" lub "+2"
          plusOne.style.left = `${e.pageX - 10}px`;
          plusOne.style.top = `${e.pageY - 20}px`;
          document.body.appendChild(plusOne);

          // Ustawienie pozycji elementu "+1"
          plusOne.style.left = object.x + object.width / 2 + 'px';
          plusOne.style.top = object.y + 'px';

          // Animowanie elementu "+1"
          requestAnimationFrame(() => {
            plusOne.style.opacity = '1';
            plusOne.style.fontSize = '2.5rem';
            plusOne.style.transform = 'translateY(-30px)';
            setTimeout(() => {
              plusOne.remove();
            }, 600);
          });
        }
      }
    });
  });
});

quitButton.addEventListener('click', function () {
  location.href = '../index.html';
});

leaderboardButton.addEventListener('click', function () {
  startButtonsDiv.style.display = 'none';
  leaderboardContainer.style.display = 'flex';
  fetchTopScores();
});

backButton.addEventListener('click', function () {
  startButtonsDiv.style.display = 'flex';
  leaderboardContainer.style.display = 'none';
});

function animate(timestamp) {
  backgroundMusic.play();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  collisionCtx.clearRect(0, 0, canvas.width, canvas.height);
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextRaven += deltaTime;

  // Zmniejszamy interwał między krukami co 100 punktów
  if (score !== 0 && score % 50 === 0 && score !== lastScoreUpdate) {
    ravenInterval = ravenInterval - 15;
    lastScoreUpdate = score;
    backgroundMusic.playbackRate += 0.1;
  }

  if (timeToNextRaven > ravenInterval) {
    ravens.push(new Raven());
    timeToNextRaven = 0;
    ravens.sort(function (a, b) {
      return a.width - b.width;
    });
  }
  drawScore();
  [...particles, ...ravens, ...explosions].forEach((object) => {
    object.update(deltaTime);
    object.draw();
  });
  ravens = ravens.filter((object) => !object.markedForDeletion);
  explosions = explosions.filter((object) => !object.markedForDeletion);
  particles = particles.filter((object) => !object.markedForDeletion);
  if (!gameOver) requestAnimationFrame(animate);
  else {
    backgroundMusic.pause();
    drawGameOver();
    gameOverSound.play();
    resetGame();
    //console.log(ravenInterval);
  }
}
