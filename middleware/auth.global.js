export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();
  const $auth = nuxtApp.$auth;

  console.log('Auth middleware executing', $auth); // Debugging line

  const publicPages = ['/', '/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);

  if ($auth) {
    return new Promise((resolve) => {
      const unsubscribe = $auth.onAuthStateChanged((user) => {
        unsubscribe();
        if (authRequired && !user) {
          console.log('User not authenticated, redirecting to signup');
          resolve(navigateTo('/signup'));
        } else {
          resolve();
        }
      });
    });
  } else {
    console.error('Auth is not defined');
  }
});