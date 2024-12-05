import Header from "../Layout/Header";
import TaskListNumbers from "../Layout/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { LoggedUserDataTypes } from "../../types/userDataProps";

const EmployeeDashboard = ({ data }: { data: LoggedUserDataTypes }) => {
  console.log(data);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
