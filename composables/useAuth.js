import { ref, computed } from 'vue';
import { useNuxtApp } from '#app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const { $auth } = useNuxtApp();
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const setUser = (newUser) => {
    user.value = newUser;
  };

  const setLoading = (isLoading) => {
    loading.value = isLoading;
  };

  const setError = (newError) => {
    error.value = newError;
  };

  const register = async (email, password, username) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword($auth, email, password);
      await userCredential.user.updateProfile({ displayName: username });
      setUser(userCredential.user);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword($auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut($auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  onAuthStateChanged($auth, (currentUser) => {
    setUser(currentUser);
  });

  const isAuthenticated = computed(() => !!user.value);

  return {
    user,
    loading,
    error,
    isAuthenticated,
    register,
    login,
    logout,
  };
};