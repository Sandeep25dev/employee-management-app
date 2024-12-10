import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { TaskProps } from "../types/userDataProps";

const CreateTask = () => {
  const { updateTask } = useContext(AuthContext) || { updateTask: () => {} };
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskTitle && taskDate && category && description && assignedTo) {
      const newTask: TaskProps = {
        taskTitle: taskTitle,
        taskDescription: description,
        taskDate: taskDate,
        category: category,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      };

      updateTask(newTask, assignedTo);

      setTaskTitle("");
      setTaskDate("");
      setAssignedTo("");
      setCategory("");
      setDescription("");
    } else {
      alert("Fill all the inputs");
    }
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-full flex-wrap items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
