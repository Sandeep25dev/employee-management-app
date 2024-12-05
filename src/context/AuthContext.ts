import { createContext } from "react";
import { UserDataProps } from "../types/userDataProps";

export const AuthContext = createContext<null | UserDataProps>(null);
