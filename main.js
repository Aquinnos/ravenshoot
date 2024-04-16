import './style.css';
import AOS from 'aos';
import './node_modules/aos/dist/aos.css'; 

AOS.init();

document.addEventListener('DOMContentLoaded', (event) => {
  const loginButton = document.querySelector('#loginButton');
  const mainContainer = document.querySelector('.mainContainer');
  const loginForm = document.querySelector('.loginForm');
  const registerButton = document.querySelector('#registerButton');
  const registerForm = document.querySelector('.registerForm');
  const guestButton = document.querySelector('#guestButton');
  const quitButtons = document.querySelectorAll('.quitButton');
  const forgotPasswordButton = document.querySelector('#forgotPasswordButton');
  const resetPasswordContainer = document.querySelector('#resetPasswordContainer');

  forgotPasswordButton.addEventListener('click', function() {
    registerForm.style.display = 'none';
    resetPasswordContainer.style.display = 'block';
  });

  loginButton.addEventListener('click', function() {
    mainContainer.style.display = 'none';
    loginForm.style.display = 'block';
  });

  registerButton.addEventListener('click', function() {
    mainContainer.style.display = 'none';
    registerForm.style.display = 'block';
  });

  guestButton.addEventListener('click', function() {
    window.location.href = './game/index.html';
  });

  quitButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      mainContainer.style.display = 'flex';
      loginForm.style.display = 'none';
      registerForm.style.display = 'none';
      resetPasswordContainer.style.display = 'none';
    });
  });

});


document.querySelector('#app').innerHTML = `
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
          <p class="text-xs text-center text-white">© 2024 Raven Shoot | Beta 0.5.0</p>
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
          <p class="text-xs text-center text-white">© 2024 Raven Shoot | Beta 0.5.0</p>
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
          <p class="text-xs text-center text-white">© 2024 Raven Shoot | Beta 0.5.0</p>
        </div>
      </div>
    </div>
  </div>
`;
