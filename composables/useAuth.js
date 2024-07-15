import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const { $auth } = useNuxtApp();
  const user = ref(null);
  const error = ref(null);

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword($auth, email, password);
      user.value = userCredential.user;
      console.log('User registered:', userCredential.user);
    } catch (err) {
      error.value = err.message;
      console.error('Error registering user:', err);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword($auth, email, password);
      user.value = userCredential.user;
      console.log('User logged in:', userCredential.user);
    } catch (err) {
      error.value = err.message;
      console.error('Error logging in user:', err);
    }
  };

  const logout = async () => {
    try {
      await signOut($auth);
      user.value = null;
      console.log('User logged out');
    } catch (err) {
      error.value = err.message;
      console.error('Error logging out user:', err);
    }
  };

  onMounted(() => {
    onAuthStateChanged($auth, (firebaseUser) => {
      user.value = firebaseUser || null;
    });
  });

  return {
    user,
    error,
    register,
    login,
    logout,
  };
};