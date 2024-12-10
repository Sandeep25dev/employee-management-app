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
    useState<null | LoggedUserDataTypes>(null);

  const { userData } = useContext(AuthContext) || {};

  console.log(userData);

  useEffect(() => {
    if (userData) {
      const getLoggedInUser = localStorage.getItem("loggedInUser");

      if (getLoggedInUser) {
        const loggedInUser = JSON.parse(getLoggedInUser);
        setUser({ role: loggedInUser.role });
        setLoggedInUserData(loggedInUser.data);
      }
    }
  }, [userData]);

  const handleLogin = (email: string, password: string) => {
    if (email == "admin@me.com" && password == "123") {
      const adminData = userData?.admin?.find(
        (e) => email == e.email && password == e.password
      );
      if (adminData) {
        setUser({ role: "admin" });
        setLoggedInUserData(adminData);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: adminData })
        );
      }
    } else if (userData) {
      const employee = userData?.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser({ role: "employee" });
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user && user?.role === "admin" && (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      )}
      {user && user?.role === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
