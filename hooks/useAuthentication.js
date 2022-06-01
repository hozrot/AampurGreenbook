import { Alert } from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

import { useStates } from "./useStates";
import secureStorage from "../utilities/secureStorage";

const useAuthentication = () => {
  const { setIsAdmin, setIsLogged } = useStates();
  const auth = getAuth();

  // function to login the admins.
  const logIn = (email, password, setLoading) => {
    if ((!email, !password)) return;
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        secureStorage.storeUser({ email, password });
        setIsAdmin(true);
        setIsLogged(true);
      })
      .catch(() => {
        Alert.alert(
          "Invalid Credentials !!",
          "The email or password is incorrect."
        );
      })
      .finally(() => setLoading(false));
  };

  // function to sign out the user
  const signOut = () => {
    firebaseSignOut(auth).then(() => {
      secureStorage.removeUser();
      setIsAdmin(false);
      setIsLogged(false);
    });
  };

  return { logIn, signOut };
};

export default useAuthentication;
