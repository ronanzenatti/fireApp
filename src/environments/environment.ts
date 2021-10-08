// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, // Adicione uma virgula
  // Cole as configurações copiadas do Firebase.
  firebaseConfig: {
    apiKey: 'AIzaSyCtyFkD_aCeRJJJ0lOu52OfHSWCphHPrk4',
    authDomain: 'fireapp-712da.firebaseapp.com',
    projectId: 'fireapp-712da',
    storageBucket: 'fireapp-712da.appspot.com',
    messagingSenderId: '233034350303',
    appId: '1:233034350303:web:1161264abd694736a4b36a'
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
