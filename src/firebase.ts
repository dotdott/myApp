import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAIks9yV3UMCmMN1XaoodKTUAhFj850OVQ',
  authDomain: 'form-app-dc952.firebaseapp.com',
  projectId: 'form-app-dc952',
  storageBucket: 'form-app-dc952.appspot.com',
  messagingSenderId: 809707173174,
  appId: '809707173174:web:6c7c823cee7b218f556f97',
});

export const auth = app.auth();
export default app;
