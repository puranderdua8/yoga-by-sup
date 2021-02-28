import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
    authDomain: `${process.env.NUXT_ENV_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.NUXT_ENV_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.NUXT_ENV_FIREBASE_MSG_SENDER_ID,
    appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
    measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENT_ID
};

!firebase.apps.length && firebase.initializeApp(config);

export const auth = firebase.auth();