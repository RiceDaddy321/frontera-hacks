// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyABJ36XBoWQPYBQ9xGo3OMNqTghX8AhAGU",
  authDomain: "frontera-hacks.firebaseapp.com",
  projectId: "frontera-hacks",
  storageBucket: "frontera-hacks.appspot.com",
  messagingSenderId: "468033336189",
  appId: "1:468033336189:web:dce504bec049f3e8d69214",
  measurementId: "G-CYNBMPT4RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);