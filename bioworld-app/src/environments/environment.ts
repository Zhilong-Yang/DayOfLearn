// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name:'default',
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
        url: 'http://localhost:5200/demo',
        handleCodeInApp: true
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
