import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AllTask = () => {
  const { userData } = useContext(AuthContext) || {};

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-52">
      <div className={`bg-red-600 mb-2 py-2 px-4 flex justify-between rounded`}>
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg text-center font-medium w-1/5">New Task</h3>
        <h5 className="text-lg text-center font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg text-center font-medium w-1/5">Completed</h5>
        <h5 className="text-lg text-center font-medium w-1/5">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData?.employees.map((emp) => (
          <div
            key={emp.name}
            className={`border-2 border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded`}
          >
            <h2 className="font-medium ml-2 text-lg w-1/5">{emp.name}</h2>
            <h3 className="font-medium text-center text-lg w-1/5 text-blue-400">
              {emp.tasksCount.newTask}
            </h3>
            <h5 className="font-medium text-center ml-2 text-lg w-1/5 text-yellow-400">
              {emp.tasksCount.active}
            </h5>
            <h5 className="font-medium text-center ml-2 text-lg w-1/5 text-green-400">
              {emp.tasksCount.completed}
            </h5>
            <h5 className="font-medium text-center ml-2 text-lg w-1/5 text-red-400">
              {emp.tasksCount.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
