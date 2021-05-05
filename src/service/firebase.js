const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT,
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
