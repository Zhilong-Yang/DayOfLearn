export const environment = {
  production: false,
  name: 'dev',
  firebase:{
    config:{
      apiKey: "AIzaSyCP4O61MUOQ51G0XqmXdVai-iD41xMoF9g",
      authDomain: "bioworld-app.firebaseapp.com",
      databaseURL: 'https://bioworld-app.firebaseapp.com',
      projectId: "bioworld-app",
      storageBucket: "bioworld-app.appspot.com",
      messagingSenderId: "991107019501",
      appId: "1:991107019501:web:74a8b6875c2e4ba57d92e4"      
    },
    actionCodeSettings: {
        url: 'http://localhost:5200/profile/new',
        handleCodeInApp: true
    }
  }
};
