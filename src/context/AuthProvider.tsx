import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { AuthContext } from "./AuthContext";
import { UserDataProps } from "../types/userDataProps";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<null | UserDataProps>(null);

  console.log(userData?.employees);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
