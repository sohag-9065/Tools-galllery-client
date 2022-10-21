import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcS9ywI6du8REUYlWPr0dcpPfvyxfhLd0",
  authDomain: "tools-gallery-91300.firebaseapp.com",
  projectId: "tools-gallery-91300",
  storageBucket: "tools-gallery-91300.appspot.com",
  messagingSenderId: "528416334766",
  appId: "1:528416334766:web:c522ee192aca1450075e3f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;