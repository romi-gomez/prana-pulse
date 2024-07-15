import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: config.googleApiKey,
    authDomain: config.googleAuthDomain,
    projectId: config.googleProjectId,
    storageBucket: config.googleStorageBucket,
    messagingSenderId: config.googleMessagingSenderId,
    appId: config.googleAppId,
    measurementId: config.measurementId,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  console.log('Firebase initialized:', auth); // Debugging line

  nuxtApp.provide('auth', auth);
});