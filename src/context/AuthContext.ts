import { createContext } from "react";
import { TaskProps, UserDataProps } from "../types/userDataProps";

interface AuthContextType {
  userData: UserDataProps | null;
  updateTask: (task: TaskProps, employeeName: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
