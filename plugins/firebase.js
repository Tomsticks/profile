import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAqIxEK12cKaMWVJdkhC5mFwiMJrfVBKF4',
  authDomain: 'staffprofilling.firebaseapp.com',
  projectId: 'staffprofilling',
  storageBucket: 'staffprofilling.firebasestorage.app',
  messagingSenderId: '947934716837',
  appId: '1:947934716837:web:f94c03e7a52b9236dcfe4c',
  measurementId: 'G-TYFHC5KGYJ',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function AuthFunc() {
  this.signup = (email, password) => {
    let data = createUserWithEmailAndPassword(auth, email, password);
    return data;
  };

  this.login = (email, password) => {
    let data = signInWithEmailAndPassword(auth, email, password);
    return data;
  };
  this.signout = () => {
    let data = signOut(auth);
    return data;
  };
  this.reset = (email) => {
    const res = sendPasswordResetEmail(auth, email);
    return res;
  };

  this.verifyemail = (email) => {
    const res = sendEmailVerification(auth, email);
    return res;
  };

  this.verifycode = (code) => {
    const res = verifyPasswordResetCode(auth, code);
    return res;
  };

  this.confirmreset = (code, newpassword) => {
    const res = confirmPasswordReset(auth, code, newpassword);
    return res;
  };
  this.changeEmail = (email, curruser) => {
    const data = updateEmail(curruser, email);
    return data;
  };
  this.changePassword = (password, curruser) => {
    const data = updatePassword(curruser, password);
    return data;
  };

  this.UserState = () => {
    return auth;
  };
}
