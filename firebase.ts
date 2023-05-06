import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "csb-site.firebaseapp.com",
  projectId: "csb-site",
  storageBucket: "csb-site.appspot.com",
  messagingSenderId: "1083845443065",
  appId: "1:1083845443065:web:0a39d72066cd346ecf9128",
  measurementId: "G-5ZGLTY454N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
