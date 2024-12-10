import Header from "../Header";
import TaskListNumbers from "../TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { LoggedUserDataTypes } from "../../types/userDataProps";
import { UserTypes } from "../../types/userTypes";

const EmployeeDashboard = ({
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
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header data={data} changeUser={changeUser} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
