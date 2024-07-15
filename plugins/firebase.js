import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Log environment variables to check if they are correctly read
  console.log('GOOGLE_API_KEY:', config.public.googleApiKey);
  console.log('GOOGLE_AUTH_DOMAIN:', config.public.googleAuthDomain);
  console.log('GOOGLE_PROJECT_ID:', config.public.googleProjectId);
  console.log('GOOGLE_STORAGE_BUCKET:', config.public.googleStorageBucket);
  console.log('GOOGLE_MESSAGING_SENDER_ID:', config.public.googleMessagingSenderId);
  console.log('GOOGLE_APP_ID:', config.public.googleAppId);
  console.log('MEASUREMENT_ID:', config.public.measurementId);

  const firebaseConfig = {
    apiKey: config.public.googleApiKey,
    authDomain: config.public.googleAuthDomain,
    projectId: config.public.googleProjectId,
    storageBucket: config.public.googleStorageBucket,
    messagingSenderId: config.public.googleMessagingSenderId,
    appId: config.public.googleAppId,
    measurementId: config.public.measurementId,
  };

  // Log firebaseConfig to ensure it is correctly set
  console.log('Firebase Config:', firebaseConfig);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  nuxtApp.provide('auth', auth);
});