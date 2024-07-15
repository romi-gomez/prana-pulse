import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.googleApiKey,
    authDomain: config.public.googleAuthDomain,
    projectId: config.public.googleProjectId,
    storageBucket: config.public.googleStorageBucket,
    messagingSenderId: config.public.googleMessagingSenderId,
    appId: config.public.googleAppId,
    measurementId: config.public.measurementId,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  nuxtApp.provide('auth', auth);
});