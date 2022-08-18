import React, { useEffect, useState } from 'react';
// import { app } from '../Firebase/firebaseConfig';
import { getAuth, onAuthStateChanged, getIdToken } from 'firebase/auth';
import { getAccountByUid } from '../user.service';
import Spinner from '../../components/navigation/Spinner';

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [firebaseUser, setfirebaseUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      setfirebaseUser(user);
      setShowChild(true);
      if (user) {
        getAccount(user.uid, await getIdToken(user));
      } else {
        setAccount(null);
      }
    });
  }, []);

  const getAccount = async (uid, token) => {
    const acc = await getAccountByUid(uid, token);
    setAccount(acc.data.data);
  };

  if (!showChild) {
    return <Spinner/>;
  } else {
    return (
      <Auth.Provider
        value={{
          firebaseUser,
          account
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};
