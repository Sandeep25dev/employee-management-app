import { useContext, useEffect, useState } from "react";
import { Login } from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";
import { UserTypes } from "./types/userTypes";
import { LoggedUserDataTypes } from "./types/userDataProps";

const App = () => {
  const [user, setUser] = useState<UserTypes | null>(null);
  const [loggedInUserData, setLoggedInUserData] =
    useState<LoggedUserDataTypes | null>(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const getLoggedInUser = localStorage.getItem("loggedInUser");
      const loggedUser = getLoggedInUser ? JSON.parse(getLoggedInUser) : [];
      if (loggedUser) {
        // setUser(loggedUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email: string, password: string) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData?.employees.find(
        (e) => email == e.email && password == e.password
      );
      console.log(employee);
      if (employee) {
        setUser({ role: "employee" });
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role === "admin" && <AdminDashboard />}
      {user?.role === "employee" && (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
