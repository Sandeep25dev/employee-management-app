import { useContext, useEffect, useState } from "react";
import { Login } from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState<string | null>(null);

  const authData = useContext(AuthContext);
  console.log(authData);

  const handleLogin = (email: string, password: string) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (authData) {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
};

export default App;
