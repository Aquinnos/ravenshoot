import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, // .env
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//rejestracja
document
  .getElementById('registerForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('name-register').value;
    const password = document.getElementById('password-register').value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User registered:', userCredential.user);
      // Zapisywanie nazwy użytkownika w Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        username: username,
        email: email,
        score: 0,
      });
      document.getElementById('register-message').textContent =
        'Successfully registered!';
    } catch (error) {
      console.error('Error in user registration:', error);
      document.getElementById('register-message').textContent =
        'Registration failed: ' + error.message;
    }
  });

//logowanie
document
  .getElementById('loginForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('name-login').value;
    const password = document.getElementById('password-login').value;

    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.error('No user found with this username');
        return;
      }

      const userData = querySnapshot.docs[0].data();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        password
      );
      console.log('User logged in:', userCredential.user);
      window.location.href = '/game/index.html';
    } catch (error) {
      console.error('Error in user login:', error);
    }
  });

const resetPasswordForm = document.getElementById('resetPasswordForm');
resetPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const auth = getAuth();
  const email = document.getElementById('resetEmail').value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Email wysłany, informuj użytkownika
      console.log('Password reset email sent!');
      // Możesz tutaj przekierować użytkownika lub wyświetlić komunikat o sukcesie
    })
    .catch((error) => {
      // Błąd w wysyłaniu emaila
      console.error('Error sending password reset email:', error);
      // Informuj użytkownika o błędzie
    });
});
