export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $auth } = useNuxtApp();
  console.log('Auth middleware executing', $auth); // Debugging line

  const publicPages = ['/', '/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);

  if ($auth) {
    console.log('Auth is defined, checking user state'); // Debugging line
    await new Promise((resolve) => {
      const unsubscribe = $auth.onAuthStateChanged((user) => {
        unsubscribe();
        if (authRequired && !user) {
          console.log('User not authenticated, redirecting to signup');
          resolve(navigateTo('/signup'));
        } else {
          console.log('User authenticated or public page, proceeding'); // Debugging line
          resolve();
        }
      });
    });
  } else {
    console.error('Auth is not defined'); // Debugging line
  }
});