import { LoggedUserDataTypes } from "../../types/userDataProps";
import { UserTypes } from "../../types/userTypes";
import AllTask from "../AllTask";
import CreateTask from "../CreateTask";
import Header from "../Header";

const AdminDashboard = ({
  data,
  changeUser,
}: {
  data: LoggedUserDataTypes | null;
  changeUser: React.Dispatch<React.SetStateAction<UserTypes | null>>;
}) => {
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
