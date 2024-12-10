import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { AuthContext } from "./AuthContext";
import { TaskProps, UserDataProps } from "../types/userDataProps";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<null | UserDataProps>(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const updateTask = (task: TaskProps, employeeName: string) => {
    if (userData) {
      const updatedEmployees = userData.employees.map((emp) => {
        if (emp.name === employeeName) {
          const updatedTasks = [...emp.tasks, task];
          const updatedTasksCount = {
            ...emp.tasksCount,
            newTask: emp.tasksCount.newTask + 1,
          };

          return {
            ...emp,
            tasks: updatedTasks,
            tasksCount: updatedTasksCount,
          };
        }
        return emp;
      });

      setUserData((prev) => {
        if (prev) {
          const updatedUserData: UserDataProps = {
            ...prev,
            employees: updatedEmployees,
          };
          return updatedUserData;
        }
        return prev;
      });

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }
  };

  return (
    <div>
      <AuthContext.Provider value={{ userData, updateTask }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
