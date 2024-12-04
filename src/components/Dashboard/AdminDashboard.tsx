import AllTask from "../Layout/AllTask";
import CreateTask from "../Layout/CreateTask";
import Header from "../Layout/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
