// lib/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAoyo2hsD2kJsXrV3D2GEJK2dRkcMhuNsY",
  authDomain: "pantry-manager-bf8c0.firebaseapp.com",
  projectId: "pantry-manager-bf8c0",
  storageBucket: "pantry-manager-bf8c0.appspot.com",
  messagingSenderId: "562930624255",
  appId: "1:562930624255:web:c63e15c08bb5066bc64eca",
  measurementId: "G-19CZY2FTK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { db, analytics };