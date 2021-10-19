import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const signInUsingGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .finally(() => setLoading(false));
  };

  const signInUsingGithub = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result.user))
      .finally(() => setLoading(false));
  };
  const signInUsingPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(setUser({}))
      .finally(() => setLoading(false));
  };

  return {
    isLoading,
    user,
    error,
    signInUsingGithub,
    signInUsingGoogle,
    logOut,
    signInUsingPassword,
    setError,
  };
};

export default useFirebase;
