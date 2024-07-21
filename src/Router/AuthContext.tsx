import React, { createContext,
  useEffect,
  useState } from "react";
import { AuthContextType } from '../@types/authContext';
//services not made, need to import

export const AuthContext = createContext<AuthContextType>({
  username: '',
  loggedInUserID: null,
  isLoggedIn: false,
  associatedDivvies: [],
  divvyID: null,
});

export function AuthContextProvider(props: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [loggedInUserID, setLoggedInUserID] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [associatedDivvies, setAssociatedDivvies] = useState<string[]>([]);
  const [divvyID, setDivvyID] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        username,
        loggedInUserID,
        isLoggedIn,
        associatedDivvies,
        divvyID
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
